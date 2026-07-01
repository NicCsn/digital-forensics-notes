---
title: "IP-Adressierung und Subnetting"
tags: [ipv4, ipv6, cidr, subnetting, subnet-mask, private-adressen, geoip, dns-reverse]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Jedes Gerät im Netz hat eine IP-Adresse. Ob IPv4 oder IPv6 — du musst Adressen lesen, private von öffentlichen unterscheiden und Subnetting verstehen, um Netzwerkverkehr forensisch korrekt zu interpretieren.

## Details

### IPv4 (32 Bit)

- Darstellung: 4 Oktette dezimal, z.B. `192.168.1.1`
- **Private Adressbereiche (RFC 1918):**
  - `10.0.0.0/8` — ca. 16,7 Mio. Adressen, typisch für große Unternehmen
  - `172.16.0.0/12` — ca. 1 Mio. Adressen, mittlere Netze
  - `192.168.0.0/16` — 65.536 Adressen, Heimnetzwerke
- **APIPA** (`169.254.0.0/16`): Selbst zugewiesen bei DHCP-Ausfall — wenn du diese IP im Log siehst, gab es ein DHCP-Problem
- **Loopback:** `127.0.0.0/8`, meist `127.0.0.1`

### Subnetmask und CIDR — praktische Berechnung

| CIDR | Subnetmask | Adressen gesamt | Nutzbar |
|------|-----------|----------------|---------|
| /8 | 255.0.0.0 | 16.777.216 | 16.777.214 |
| /16 | 255.255.0.0 | 65.536 | 65.534 |
| /24 | 255.255.255.0 | 256 | 254 |
| /28 | 255.255.255.240 | 16 | 14 |
| /30 | 255.255.255.252 | 4 | 2 (Point-to-Point) |
| /32 | 255.255.255.255 | 1 | 1 (einzelner Host) |

Berechnung: `Anzahl nutzbarer Hosts = 2^(32-CIDR) - 2`

### Typische Subnetting-Fragen für die Forensik

1. "Ist die Angreifer-IP aus dem INTERNEN Netz?" → CIDR des Firmennetzes prüfen
2. "Gehört 10.0.5.23 und 10.0.5.47 zum selben Subnetz?" → Subnetmask vergleichen
3. "Warum kommuniziert Server A (DMZ) mit Server B (Intern)?" → Routing-Tabelle prüfen

### GeoIP und WHOIS — Herkunft einer IP bestimmen

```bash
# GeoIP-Lookup (MaxMind GeoLite2)
geoiplookup 203.0.113.42

# WHOIS-Abfrage — wem gehört die IP?
whois 203.0.113.42 | grep -E "netname|descr|country|OrgName"

# DNS Reverse-Lookup — welcher Hostname?
dig -x 203.0.113.42
```

Forensisch: Wenn eine IP laut GeoIP in Nordkorea liegt und der Angriff kommt von dort → Verdacht auf VPN/Proxy oder tatsächlich staatlicher Akteur.

### IPv6 (128 Bit)

- Darstellung: 8 Gruppen à 4 Hex-Ziffern, z.B. `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- Kürzung: `2001:db8:85a3::8a2e:370:7334`
- Wichtige Adressbereiche:
  - **Link-Local:** `fe80::/10` — nur im lokalen Netzsegment gültig, nicht geroutet
  - **Unique Local (ULA):** `fc00::/7` — IPv6-Äquivalent zu privaten IPv4-Adressen
  - **Global Unicast:** `2000::/3` — öffentlich geroutet
  - **Multicast:** `ff00::/8`

### IPv6 und Forensik — das unterschätzte Risiko

- **Privacy Extensions (RFC 4941):** IPv6-Adressen wechseln regelmäßig aus Datenschutzgründen. Forensisch: eine IPv6-Adresse ist NICHT dauerhaft einem Gerät zugeordnet
- **SLAAC:** Geräte konfigurieren ihre Adresse selbst, kein DHCPv6 nötig — keine DHCP-Logs!
- **Covert Channels:** Angreifer verstecken Daten in IPv6-Flow-Label oder Hop-by-Hop-Options-Headern
- **6to4/Teredo:** IPv4-IPv6-Tunnel, die Firewalls umgehen können

## Praktische Anwendung

- `ip addr show` — eigene IPs anzeigen (IPv4 + IPv6)
- `ipcalc 192.168.1.0/24` — Subnetz-Details berechnen
- Wireshark: `ip.src == 10.0.0.0/8` — Traffic aus privaten Netzen
- `ip6.addr == fe80::/10` — IPv6 Link-Local-Traffic
- `whois 8.8.8.8` — IP-Besitzer ermitteln

## Quellen / Weiterführendes

- RFC 1918 (Private Adressen), RFC 4291 (IPv6 Addressing)
- RFC 4941 (IPv6 Privacy Extensions)
- [MaxMind GeoLite2 Database](https://dev.maxmind.com/geoip/)
