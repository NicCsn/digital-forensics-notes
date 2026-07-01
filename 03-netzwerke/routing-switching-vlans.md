---
title: "Routing, Switching und VLANs"
tags: [routing, switching, vlan, router, switch, stp, dynamisches-routing]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Switche vermitteln innerhalb eines Netzsegments, Router zwischen Netzsegmenten. VLANs trennen logisch, was physisch zusammenhängt. Angreifer können diese Infrastruktur ausnutzen — du musst verstehen, wie sie funktioniert, um ihre Spuren zu lesen.

## Details

### Switching (Layer 2)

- Switch lernt MAC-Adressen und baut eine **MAC-Tabelle** (CAM-Table) auf
- Unbekannte Adresse? Flooding an alle Ports → Angreifer kann per **MAC-Flooding** den Switch in einen Hub verwandeln und Traffic mitschneiden
- **Forensisch:** CAM-Table zeigt, welche MAC-Adresse an welchem Port hing — auf dem Switch selbst abfragbar

### VLANs (Virtual LANs)

- Logische Trennung auf Layer 2 — Isolation zwischen Abteilungen (IT, HR, Produktion)
- **Trunk-Ports** transportieren mehrere VLANs via 802.1Q-Tags
- **VLAN-Hopping:** Angreifer sendet doppelt getaggte Frames, um in andere VLANs zu gelangen
- **Forensisch:** VLAN-Konfiguration auf Switchen dokumentieren — nicht jedes Gerät sieht alles

### Spanning Tree Protocol (STP)

- Verhindert Schleifen in redundanten Netzen durch Blockieren von Ports
- **STP-Manipulation:** Angreifer kann sich als Root-Bridge ausgeben und Traffic umleiten

### Routing (Layer 3)

#### Statisches Routing
- Manuell konfigurierte Routen — einfach, aber unflexibel
- `route add` (Windows), `ip route add` (Linux)

#### Dynamisches Routing
| Protokoll | Typ | Metrik |
|-----------|-----|--------|
| RIP | Distance Vector | Hop Count (max 15) |
| OSPF | Link State | Kosten (Bandbreite) |
| BGP | Path Vector | AS-Path (Internet-Routing) |

### Forensische Relevanz

- **Netflow / sFlow** vom Router zeigt, welche IPs wann und wie viel kommuniziert haben (Metadata, keine Payload)
- **Logs auf Routern:** `show logging` — Konfigurationsänderungen, Login-Versuche
- **Traceroute** rekonstruiert den Pfad eines Pakets durchs Netz — wichtig bei Angriffs-Herkunft

## Praktische Anwendung

- `traceroute <ziel>` / `tracert <ziel>` (Windows) — Pfadverfolgung
- `arp -a` — lokale ARP-Tabelle (MAC ↔ IP)
- Auf Cisco-Switch: `show mac address-table`, `show vlan`, `show spanning-tree`
- Wireshark: `vlan` Filter zeigt VLAN-Tags, `stp` zeigt Spanning Tree Frames

## Quellen / Weiterführendes

- Cisco Press: Networking Essentials Companion Guide
- Tanenbaum, A.S.: Computer Networks
