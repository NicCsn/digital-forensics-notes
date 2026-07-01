---
title: "TLS/SSL-Forensik"
tags: [tls, ssl, forensik, ja3, certificate-transparency, handshake, wireshark]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

TLS (Transport Layer Security) verschlüsselt den Großteil des Internetverkehrs. Für Forensiker heißt das: Der Payload ist unsichtbar. Aber der TLS-Handshake selbst liefert wertvolle Spuren — Zertifikate, Cipher Suites, JA3-Fingerprints und Certificate-Transparency-Logs.

## Details

### Der TLS-Handshake (1.2 vs. 1.3)

```
TLS 1.2:                            TLS 1.3 (vereinfacht):
ClientHello  → (Cipher Suites)      ClientHello  → (Key Share)
ServerHello  ← (Cipher, Cert)       ServerHello  ← (Key Share, Cert)
ClientKeyEx  → (PreMaster Secret)   [Verschlüsselt ab hier]
[Encrypted]  →                       Finished    →
[Encrypted]  ←                       Finished    ←
```

TLS 1.3 verschlüsselt das Server-Zertifikat — in Wireshark siehst du es nicht mehr im Klartext, nur noch per `SSLKEYLOGFILE`.

### Forensische Spuren im TLS-Handshake

| Feld | Was es verrät |
|------|--------------|
| **Server Name Indication (SNI)** | Welche Domain wurde angefordert? (im Klartext, auch bei TLS 1.3!) |
| **Cipher Suites** | Vom Client angebotene Verschlüsselung → OS/Bibliothek-Fingerprinting |
| **Server-Zertifikat** | Subject CN, Issuer, Validity, SANs → wer ist der Server? |
| **JA3 / JA4 Hash** | MD5-Hash der Client-Hello-Parameter → Malware-Fingerprinting! |

### JA3 und JA4 — Malware-Fingerprinting ohne Payload

JA3 hasht folgende Felder des Client Hello: `SSLVersion,Ciphers,Extensions,EllipticCurves,ECPointFormats`

```
Beispiel: JA3 = "6734f37431670b3ab4292b8f60f29984"

Dieser Hash identifiziert:
- Chrome 120 auf Windows 11 → immmer der gleiche JA3
- Cobalt Strike C2 Client → spezifischer JA3
- Python requests library → eigener JA3
```

JA4 erweitert das auf QUIC und TLS 1.3. Beide erlauben Malware-Detection ohne einen Blick in die Payload.

### Certificate Transparency (CT)

Alle von CAs ausgestellten TLS-Zertifikate werden in öffentlichen Logs gespeichert:

- **crt.sh:** Suche nach Domain → alle jemals ausgestellten Zertifikate
- **Forensische Nutzung:** "Domäne evil.com wurde vor 3 Tagen registriert, Zertifikat gestern ausgestellt, heute Phishing-Angriff" → verdächtig

### TLS in Wireshark entschlüsseln

Wenn du den Session-Key hast (per `SSLKEYLOGFILE` aus dem Browser oder von einem Server):

```bash
# Browser so starten, dass er Keys loggt:
export SSLKEYLOGFILE=/tmp/sslkeys.log
google-chrome

# In Wireshark:
# Edit → Preferences → Protocols → TLS → (Pre)-Master-Secret log filename: /tmp/sslkeys.log
# → ALLE Sessions werden entschlüsselt
```

### Selbst-signierte Zertifikate und forensische Relevanz

In internen Unternehmensnetzen werden oft selbst-signierte Zertifikate für TLS-Interception verwendet:

- **Legitim:** Corporate-Firewall (Palo Alto, FortiGate) inspiziert HTTPS per Man-in-the-Middle
- **Illegitim:** Angreifer hat eigenen Root-CA im Unternehmensnetz installiert und liest ALLEN TLS-Traffic mit
- **Forensische Spuren:** Client-Hello mit JA3, aber falsche Zertifikats-Kette, oder Zertifikat von unbekanntem Issuer

### DNS-over-HTTPS (DoH) und DNS-over-TLS (DoT)

- DoH/DoT verschlüsseln DNS-Anfragen → nicht mehr im Klartext sichtbar
- Forensisch: Der TLS-Handshake zur DoH-Server-IP (z.B. 1.1.1.1, 8.8.8.8) ist das einzige, was du siehst — SNI verrät immerhin die DoH-Domain

## Praktische Anwendung / Befehle

- Wireshark: `tls.handshake.type == 1` → alle Client Hellos
- Wireshark: `tls.handshake.extensions_server_name` → SNI (welche Domain?)
- `tshark -r capture.pcap -Y "tls.handshake.type == 1" -T fields -e tls.handshake.ja3`
- Cert-Suche: `https://crt.sh/?q=%.example.com`
- SSLKEYLOGFILE: `export SSLKEYLOGFILE=/tmp/keys.log && firefox`
- JA3-Datenbank: [ja3er.com](https://ja3er.com/) und [sslbl.abuse.ch](https://sslbl.abuse.ch/)

## Quellen / Weiterführendes

- RFC 8446 (TLS 1.3)
- [Salesforce JA3](https://github.com/salesforce/ja3)
- [Certificate Transparency](https://certificate.transparency.dev/)
