---
title: "DHCP, DNS und ARP"
tags: [dhcp, dns, arp, spoofing, cache-poisoning, forensik]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

DHCP verteilt IP-Adressen, DNS übersetzt Namen in Adressen, ARP findet MAC-Adressen. Diese drei "Hilfsprotokolle" sind für Angreifer besonders interessant, weil sie den Datenverkehr umleiten können — und jede Umleitung hinterlässt forensische Spuren.

## Details

### ARP (Address Resolution Protocol)

- **Aufgabe:** IP → MAC-Auflösung im lokalen Netzwerk
- Broadcast: "Wer hat 192.168.1.1?" → Antwort mit MAC-Adresse
- **Keine Authentifizierung** — jeder kann antworten!

**ARP-Spoofing / ARP-Poisoning:**
- Angreifer sendet gefälschte ARP-Antworten: "Ich bin der Router (192.168.1.1)"
- Der gesamte Traffic läuft über den Angreifer → Man-in-the-Middle
- **Forensische Erkennung:** Mehrere MAC-Adressen für dieselbe IP in ARP-Tabelle / PCAP

### DHCP (Dynamic Host Configuration Protocol)

- **Ablauf:** Discover → Offer → Request → Acknowledge (DORA)
- Verteilt: IP, Subnetmask, Gateway, DNS-Server
- **DHCP-Snooping** auf Switchen verhindert rogue DHCP-Server

**Forensische Spuren:**
- DHCP-Lease-Datei (`/var/lib/dhcp/dhcpd.leases`) protokolliert MAC ↔ IP ↔ Zeitstempel
- Windows EventLog: Event 50036/50037 (DHCP-Client-Ereignisse)
- Gibt Auskunft: Welches Gerät hatte wann welche IP?

### DNS (Domain Name System)

- **Aufbau:** `www.example.com.` → Root-Server → .com TLD → example.com Authoritative → A-Record (IP)
- Port 53 (UDP für Abfragen, TCP für Zonentransfers)
- **Keine Verschlüsselung** (außer DoH/DoT)

**DNS-Angriffe und forensische Erkennung:**

| Angriff | Technik | Forensische Spur |
|---------|---------|-----------------|
| DNS-Spoofing | Gefälschte Antwort vor der echten | Doppelte DNS-Responses in PCAP |
| DNS-Cache-Poisoning | Falsche Einträge im Cache des Resolvers | Plötzlich andere IP für bekannte Domain |
| DNS-Tunnel | Daten in DNS-Abfragen versteckt | Viele/lange/ungewöhnliche DNS-Queries |

**Verdächtige DNS-Patterns:**
- Eine Domain mit ständig wechselnder IP → Fast-Flux-Botnet
- Lange Subdomains → DNS-Tunnel (z.B. `BASE64encodedData.attacker.com`)
- TXT-Records mit Nicht-Text-Inhalten → C2-Kommunikation

## Praktische Anwendung / Befehle

- `arp -a` — ARP-Tabelle anzeigen
- `dig example.com A`, `dig -x 192.168.1.1` — DNS-Abfragen
- Wireshark: `dns.qry.name contains "evil"` — verdächtige DNS-Namen
- `ipconfig /displaydns` (Windows) — DNS-Cache des Clients

## Quellen / Weiterführendes

- RFC 826 (ARP), RFC 2131 (DHCP), RFC 1035 (DNS)
