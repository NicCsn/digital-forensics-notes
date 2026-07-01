---
title: "Darknet: Tor, I2P und Anonymisierung"
tags: [darknet, tor, i2p, anonymisierung, deanonymisierung, hidden-services]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Das Darknet ist kein eigenes Netzwerk, sondern ein Teil des Internets, der mittels Anonymisierungssoftware (Tor, I2P) zugänglich ist. Cyberkriminelle nutzen Darknet-Marktplätze und Kommunikationskanäle. Als Forensiker musst du verstehen, wie Anonymisierung funktioniert — und wo sie angreifbar ist.

## Details

### Tor (The Onion Router)

- **Funktionsweise:** Onion Routing — mehrfache Verschlüsselung in Schichten, jede Node (Guard → Middle → Exit) entschlüsselt nur eine Schicht
- **Exit-Node** sieht den Klartext-Traffic (wenn kein HTTPS/TLS)
- **Hidden Services (.onion):** Server sind nur über das Tor-Netzwerk erreichbar, IP bleibt verborgen

#### Wer sieht was?
| Akteur | Sieht |
|--------|-------|
| Guard-Node | IP des Nutzers, nächste Node |
| Middle-Node | Vorgänger + Nachfolger, keine Inhalte |
| Exit-Node | Zieldomain/-IP und ggf. Klartext, NICHT die IP des Nutzers |
| Ziel-Website | IP der Exit-Node |

### I2P (Invisible Internet Project)

- Garlic Routing (mehrere Nachrichten gebündelt) statt Onion Routing
- Jeder Teilnehmer routet auch für andere (Peer-to-Peer)
- Eigene Dienste mit `.i2p`-Top-Level-Domain
- Keine Exit-Nodes ins Clearnet (anders als Tor)

### Deanonymisierungsmöglichkeiten

| Methode | Voraussetzung | Erfolgschance |
|---------|--------------|---------------|
| **Traffic-Analyse / Korrelation** | Timing von Ein- und Ausgangspaketen vergleichen | Mittel (wenn Angreifer Guard und Exit kontrolliert) |
| **Exit-Node-Überwachung** | Klartext-Traffic (kein HTTPS) | Hoch bei HTTP |
| **Browser-Fingerprinting** | JavaScript, Canvas, Fonts → Wiedererkennung | Hoch, wenn aktiviert |
| **Operational Security (OPSEC)-Fehler** | Gleicher Username in Darknet und Clearnet, selbe Bitcoin-Adresse | Sehr hoch |
| **Kompromittierung des Servers** | Exploit gegen Hidden Service → reale IP | Hoch bei schlecht gehärteten Servern |

### Kriminelle Nutzung

- **Marktplätze:** Drogen, Waffen, gestohlene Daten (Silk Road, AlphaBay, Hydra)
- **Kommunikation:** Sichere Täter-Kommunikation, Ransomware-Verhandlungen
- **C2-Infrastruktur:** Botnet-C2-Server als Hidden Service
- **Hosting:** Phishing-Seiten als .onion

### Forensische Ansätze

- **Blockchain-Analyse:** Bitcoin-Transaktionen sind öffentlich — Chainalysis, Crystal
- **Exit-Node-Logs?** Theoretisch nicht vorhanden, aber: Manche Betreiber loggen wider Erwarten
- **Proxies vor Tor:** Ein VPN vor Tor kann den Nutzer enttarnen, wenn der VPN-Anbieter loggt
- **Browser-Daten:** Lokal gespeicherte Tor-History, Bookmarks für .onion-Seiten

## Praktische Anwendung

- `torbrowser-launcher` — Tor-Browser starten
- `torsocks curl http://check.torproject.org` — beliebigen Befehl über Tor ausführen
- `nyx` (ehem. arm) — Tor-Status-Monitor
- [ExoneraTor](https://exonerator.torproject.org/) — War IP X zu Zeit Y eine Tor-Exit-Node?

## Quellen / Weiterführendes

- [Tor Project Documentation](https://2019.www.torproject.org/docs/documentation.html.en)
