---
title: "Wireshark Basics: Paketanalyse"
tags: [wireshark, netzwerke, pcap, protokolle, filter, tcpdump, tshark]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Wireshark ist ein Open-Source-Netzwerk-Paketanalysator — im Kern ein Messinstrument, das sichtbar macht, was auf einem Netzwerkkabel (oder WLAN) passiert. Es erfasst und dekodiert Pakete in Echtzeit und ist das Schweizer Taschenmesser der Netzwerkforensik.

## Details

### Was Wireshark kann (und was nicht)

- **Kann:** Live-Capture, Offline-Analyse von PCAP-Dateien, hunderte Protokoll-Dissectoren, flexible Filter, Statistiken, Export in viele Formate
- **Kann nicht:** Aktiv Pakete senden/manipulieren (kein IDS, kein Port-Scanner, kein Angriffstool)
- Unterstützt viele Medien: Ethernet, WLAN, Bluetooth, USB und mehr

### Capture Filter vs. Display Filter

- **Capture Filter** (BPF-Syntax): Werden VOR dem Capture gesetzt, reduzieren was überhaupt mitgeschnitten wird. Beispiel: `host 192.168.1.1 and tcp port 80`
- **Display Filter:** Werden auf bereits erfasste Pakete angewendet. Beispiel: `ip.src == 192.168.1.1 && http`
- Display-Filter sind mächtiger (tausende Protokollfelder), Capture-Filter sparen Speicherplatz

### Wichtige Display-Filter für die Forensik

| Filter | Was er findet |
|--------|-------------|
| `tcp.flags.syn == 1 && tcp.flags.ack == 0` | TCP-Verbindungsaufbau (SYN) |
| `tcp.flags.reset == 1` | Abrupt beendete Verbindungen (RST) |
| `http.request.method == POST` | HTTP POST-Requests (Uploads, Logins) |
| `dns.qry.name contains "evil"` | DNS-Abfragen mit verdächtigen Domains |
| `tls.handshake.type == 1` | TLS Client Hello (JA3-Fingerprinting) |
| `ftp.request.command == STOR` | FTP-Datei-Uploads |
| `icmp` | Ping und ICMP-Tunnel |

### tshark — Wireshark auf der Kommandozeile

`tshark` ist die CLI-Variante von Wireshark — unverzichtbar für automatisierte Analyse und große PCAPs.

```bash
# Nur HTTP-Requests anzeigen
tshark -r capture.pcap -Y "http.request"

# Felder für Export extrahieren (CSV-artig)
tshark -r capture.pcap -T fields \
  -e frame.time -e ip.src -e ip.dst -e tcp.srcport -e tcp.dstport \
  -Y "tcp" > connections.csv

# Top-Talker-Statistik
tshark -r capture.pcap -q -z conv,tcp

# HTTP-Objekte exportieren (Dateien aus Traffic extrahieren)
tshark -r capture.pcap --export-objects http,/output/dir
```

### Export Objects — Dateien aus PCAPs extrahieren

Wireshark kann übertragene Dateien automatisch extrahieren: **File → Export Objects → HTTP/SMB/TFTP**. Jedes übertragene Bild, Dokument oder Archiv wird aufgelistet und kann einzeln gespeichert werden. Gold wert bei Malware-Analyse (heruntergeladene Payloads) und Datenabfluss-Untersuchungen.

### I/O-Graph — Anomalien visuell erkennen

Der I/O-Graph (Statistics → I/O Graph) zeigt Pakete/Bytes pro Sekunde. Typische Muster:
- **DDoS:** Plötzlicher, extremer Anstieg
- **Beaconing:** Regelmäßige Spitzen alle N Sekunden (C2-Heartbeat)
- **Datenexfiltration:** Langer, gleichmäßiger Upload

### Expert Info

Wireshark markiert ungewöhnliche Protokoll-Events automatisch: **Analyze → Expert Info.** Warnungen (gelb), Fehler (rot), Notizen (cyan). Sortiert nach Severity. Ein SYN ohne ACK, ein RST nach einer bestehenden Verbindung, ein ICMP-Destination-Unreachable — Wireshark zeigt dir, was seltsam aussieht.

### Statistik-Tools für forensische Triage

| Tool | Pfad | Nutzen |
|------|------|--------|
| Protocol Hierarchy | Statistics → Protocol Hierarchy | Welche Protokolle dominieren? (z.B. 90% DNS = DNS-Tunnel?) |
| Conversations | Statistics → Conversations | Wer spricht mit wem? Wie lange? Wie viele Bytes? |
| Endpoints | Statistics → Endpoints | Welche IPs sind involviert? MAC-Adressen? |
| Flow Graph | Statistics → Flow Graph | Sequenz-Diagramm (TCP-Handshake visualisiert) |

## Praktische Anwendung / Befehle

- `tshark -r capture.pcap -Y "http.request" -T fields -e http.host -e http.request.uri`
- `tcpdump -i eth0 -w capture.pcap host 10.0.0.5` — Capture spezifischen Traffic
- `capinfos capture.pcap` — PCAP-Metadaten (Größe, Dauer, Paketzahl)
- `editcap -A "2025-03-15 03:00:00" -B "2025-03-15 04:00:00" in.pcap out.pcap` — Zeitfenster extrahieren

## Quellen / Weiterführendes

- [Wireshark User's Guide, Chapter 1](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html)
- [Wireshark Display Filters Reference](https://www.wireshark.org/docs/dfref/)
- [tshark Man Page](https://www.wireshark.org/docs/man-pages/tshark.html)
