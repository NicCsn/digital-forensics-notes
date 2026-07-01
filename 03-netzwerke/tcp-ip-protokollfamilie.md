---
title: "TCP/IP Protokollfamilie"
tags: [tcp, ip, osi, protokolle, handshake, flags, udp]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Die TCP/IP-Protokollfamilie ist das Fundament des Internets und nahezu aller Unternehmensnetzwerke. Als Forensiker musst du jedes Feld in TCP- und IP-Headern lesen und interpretieren können — darin stecken Zeitstempel, Routing-Informationen und Angreiferspuren.

## Details

### OSI-Schichtenmodell vs. TCP/IP

| OSI-Layer | TCP/IP | Protokolle | Forensische Relevanz |
|-----------|--------|------------|---------------------|
| 7 Application | Application | HTTP, DNS, SMTP, FTP | Nutzdaten, Logins, Dateitransfers |
| 4 Transport | Transport | TCP, UDP | Port-Nummern (Service-Identifikation), Flusskontrolle |
| 3 Network | Internet | IPv4, IPv6, ICMP | Quell- und Ziel-IPs, Routing |
| 2 Data Link | Link | Ethernet, ARP, WLAN | MAC-Adressen, physischer Zugangspunkt |

### TCP-Header (20-60 Bytes)

Wichtige Felder für die Forensik:
- **Source Port / Destination Port:** Welcher Dienst? (Port 80 = HTTP, 443 = HTTPS, 22 = SSH)
- **Sequence Number / Acknowledgement Number:** Rekonstruktion des Datenstroms, fehlende Pakete erkennen
- **Flags (SYN, ACK, FIN, RST, PSH, URG):** Zustand der Verbindung
  - `SYN=1, ACK=0` → Verbindungsaufbau-Wunsch
  - `SYN=1, ACK=1` → Antwort auf Verbindungswunsch
  - `RST=1` → Verbindung abgelehnt / abrupt beendet
  - `FIN=1` → Geordneter Verbindungsabbau
- **Window Size:** Empfangspuffer — Rückschlüsse auf Betriebssystem möglich (OS Fingerprinting)

### TCP Three-Way-Handshake

```
Client                Server
  |-------SYN-------->|  "Ich will verbinden" (Port x)
  |<---SYN+ACK--------|  "OK, ich bin bereit"
  |-------ACK-------->|  "Verbindung steht"
```

Forensisch: Ein SYN ohne folgendes ACK = Port-Scan? Firewall-Block? Nur einseitige Verbindungen sind verdächtig.

### UDP (User Datagram Protocol)

- Kein Handshake, kein Verbindungszustand → "Fire and Forget"
- Ports: DNS (53), DHCP (67/68), SNMP (161), NTP (123)
- Forensisch: UDP wird gern für DDoS-Amplification genutzt (DNS, NTP)

### ICMP (Internet Control Message Protocol)

- Ping (`Type 8 Echo Request`, `Type 0 Echo Reply`)
- `Type 3` Destination Unreachable, `Type 11` TTL Exceeded (Traceroute)
- ICMP-Tunnel: Daten durch ICMP-Pakete schleusen (Covert Channel!)

## Praktische Anwendung

- Wireshark Filter: `tcp.flags.syn == 1 and tcp.flags.ack == 0` → SYN-Pakete
- `tcp.stream eq 5` → gesamten TCP-Stream 5 rekonstruieren
- `tshark -r capture.pcap -T fields -e ip.src -e ip.dst -e tcp.srcport -e tcp.dstport -e tcp.flags`

## Quellen / Weiterführendes

- RFC 793 (TCP), RFC 768 (UDP), RFC 791 (IP)
- Riggert, L.: Rechnernetze
