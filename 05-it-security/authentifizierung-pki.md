---
title: "Authentifizierung und Public Key Infrastructure (PKI)"
tags: [authentifizierung, pki, passwoerter, mfa, zertifikate, kerberos, ldap]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Authentifizierung beantwortet: "Bist du wirklich der, für den du dich ausgibst?" PKI ist die Infrastruktur, die digitale Identitäten durch Zertifikate beweisbar macht. In der Forensik sind Authentifizierungs-Logs zentrale Beweismittel (wessen Account?).

## Details

### Authentifizierungs-Faktoren

| Faktor | Typ | Beispiel | Schwäche |
|--------|-----|----------|----------|
| Wissen (Type 1) | Etwas, was du weißt | Passwort, PIN | Kann vergessen/gestohlen werden |
| Besitz (Type 2) | Etwas, was du hast | RSA-Token, Smartphone (TOTP) | Kann verloren/gestohlen werden |
| Inhärenz (Type 3) | Etwas, was du bist | Fingerabdruck, Iris-Scan, Gesicht | Nicht änderbar, falsch-positiv/-negativ |
| Verhalten (Type 4) | Etwas, was du tust | Tippverhalten, Gangart | Noch experimentell |

### Multi-Faktor-Authentifizierung (MFA)

- Kombination aus mind. 2 Faktoren (nicht 2× Wissen!)
- **TOTP (Time-Based One-Time Password):** Code aus HMAC + Unix-Zeit, wechselt alle 30s (Google Authenticator, Authy)
- **FIDO2 / WebAuthn:** Phishing-resistente Authentifizierung mit Hardware-Token (YubiKey)

### Kerberos (Windows-AD-Authentifizierung)

1. Client → KDC: "Ich bin `frank`, gib mir ein TGT"
2. KDC prüft Passwort-Hash → gibt TGT (Ticket Granting Ticket, verschlüsselt mit User-Hash)
3. Client → KDC: "Ich habe ein TGT, gib mir ein Service-Ticket für `fileserver01`"
4. Client → Service: "Hier mein Service-Ticket"

Forensisch relevante EventLog-IDs:
- **4768:** TGT angefordert (Kerberos-Auth-Start)
- **4769:** Service-Ticket angefordert
- **4771:** Kerberos Pre-Auth fehlgeschlagen → möglicher Brute-Force-Versuch
- **4776:** NTLM-Auth (schwächer als Kerberos)

### LDAP / Active Directory

- LDAP ist das Abfrageprotokoll, AD ist Microsofts Implementierung
- Wichtige Forensik-Felder: `lastLogon`, `lastLogonTimestamp`, `pwdLastSet`, `userAccountControl`
- **Golden Ticket:** Angreifer kompromittiert KRBTGT-Hash → kann beliebige Kerberos-Tickets ausstellen (ultimative Persistenz!)

### Public Key Infrastructure (PKI)

1. **CA (Certificate Authority):** Stellt Zertifikate aus, die Identitäten bestätigen
2. **Zertifikat** = Öffentlicher Schlüssel + Identität + Signatur der CA
3. **Vertrauenskette:** Root-CA → Intermediate-CA → End-Entity-Zertifikat

Forensisch wichtig:
- **Abgelaufene/ungültige Zertifikate:** Man-in-the-Middle-Hinweise
- **Selbst-signierte Zertifikate** auf internen Systemen: Normale Admin-Praxis oder C2-Server?
- **Zertifikatstransparenz-Logs:** Öffentliche Logs aller ausgestellten HTTPS-Zertifikate (crt.sh)

## Praktische Anwendung / Befehle

- `whoami /user` — SID des aktuellen Nutzers (Windows)
- `klist` — Kerberos-Tickets anzeigen
- `openssl x509 -in cert.pem -text -noout` — Zertifikats-Details
- `crt.sh` → Suche nach Domain → alle jemals ausgestellten Zertifikate

## Quellen / Weiterführendes

- Eckert, C.: IT-Sicherheit — Konzepte, Verfahren, Protokolle
- [Microsoft: Kerberos Authentication](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview)
