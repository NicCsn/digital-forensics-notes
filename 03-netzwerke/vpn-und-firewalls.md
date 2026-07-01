---
title: "VPN und Firewalls"
tags: [vpn, firewall, ipsec, openvpn, wireguard, iptables, nat]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

VPNs schützen Daten auf dem Transportweg, Firewalls kontrollieren den Zugang. Beide sind zentrale Bausteine der Netzwerksicherheit — und beide sind forensische Datenquellen: VPN-Logs zeigen, wer sich von wo verbunden hat, Firewall-Logs zeigen blockierte Verbindungsversuche.

## Details

### VPN-Technologien

| Typ | Protokoll | Sicherheit | Typische Nutzung |
|-----|-----------|------------|-----------------|
| IPSec | AH/ESP + IKEv2 | Stark (mit aktuellen Ciphern) | Site-to-Site, Enterprise-Remote |
| OpenVPN | SSL/TLS, eigener Stack | Stark, flexibel | Remote-Access, Anonymisierung |
| WireGuard | Noise-Protokoll | Sehr stark, modern | Remote-Access, Performance |
| PPTP | MPPE | **Unsicher!** (MSCHAPv2 geknackt) | Veraltet, nicht mehr nutzen |
| SSTP | SSL/TLS über HTTPS | Stark | Windows-integriert |

### VPN-Tunnel-Typen

- **Full Tunnel:** Der gesamte Traffic geht durch den VPN — sicher, aber langsamer
- **Split Tunnel:** Nur bestimmter Traffic (z.B. Unternehmens-Daten) geht durch VPN — effizienter, aber Risk von Datenlecks

### Firewall-Typen

| Typ | Layer | Beispiel |
|-----|-------|----------|
| Stateful Inspection | 3/4 | iptables, Cisco ASA, Windows Firewall |
| Next-Gen (NGFW) | 7 (Applikation) | Palo Alto, FortiGate |
| Web Application (WAF) | 7 | ModSecurity, Cloudflare |
| Host-Based | alle | iptables, Windows Defender Firewall |

### iptables/nftables (Linux)

```bash
# Eingehenden Traffic auf Port 22 (SSH) erlauben
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Alles andere blocken
iptables -A INPUT -j DROP

# NAT: 10.0.0.0/8 auf eine öffentliche IP masquerieren
iptables -t nat -A POSTROUTING -s 10.0.0.0/8 -j MASQUERADE
```

### NAT (Network Address Translation)

- Private IPs werden auf öffentliche/r IP(s) abgebildet
- **SNAT/Masquerading:** Quelle wird umgeschrieben (ausgehend)
- **DNAT/Port-Forwarding:** Ziel wird umgeschrieben (eingehend)
- Forensisch: NAT-Tabelle des Routers ist essenziell, um interne Quell-IPs zu identifizieren

### Forensische Auswertung von Firewall-Logs

```
2025-03-15 03:17:22 DENY TCP 203.0.113.42:54321 -> 192.168.1.100:3389
```

Interpretation: Jemand von extern versuchte um 03:17 Uhr auf RDP (Port 3389) zuzugreifen — blockiert. Zeitstempel und Quell-IP sind die ersten Ermittlungsansätze.

### IDS/IPS (Intrusion Detection/Prevention)

- **IDS:** Erkennt Angriffe, alarmiert nur (Snort, Suricata, Zeek)
- **IPS:** Erkennt UND blockiert (inline-Positionierung nötig)
- Forensisch: IDS-Alerts geben Kontext zu Angriffen in PCAPs (Snort-Rules → welche Exploits?)

## Praktische Anwendung

- `iptables -L -v -n` — alle Regeln anzeigen
- `wg show` — WireGuard-Status
- Snort/Suricata: `grep "1:2012345" /var/log/snort/alert` — bestimmte Rule-ID

## Quellen / Weiterführendes

- Eckert, C.: IT-Sicherheit
