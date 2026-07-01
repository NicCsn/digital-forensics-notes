---
title: "Netzwerkforensik: Methoden und Vorgehen"
tags: [netzwerkforensik, pcap, flow-daten, anomalien, zeek, suricata]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Netzwerkforensik ist die Untersuchung von Netzwerkverkehr zur Aufklärung von Sicherheitsvorfällen. Anders als bei der Datenträgerforensik arbeitest du mit flüchtigen, ständig strömenden Daten. Timing, Korrelation und Protokollwissen sind entscheidend.

## Details

### Datenquellen

| Quelle | Was sie liefert | Granularität |
|--------|----------------|-------------|
| **PCAP** (Full Packet) | Jedes Bit des Netzwerkverkehrs | Vollständig |
| **NetFlow / IPFIX / sFlow** | Metadaten: IPs, Ports, Bytes, Zeit | Statistisch (1:1000 Sampling) |
| **Firewall-Logs** | Erlaubte/blockierte Verbindungen | Pro Session |
| **IDS/IPS-Alerts** | Bekannte Angriffsmuster | Pro Event |
| **DNS-Logs** | Welche Domains wurden aufgelöst | Pro Abfrage |
| **DHCP-Logs** | MAC ↔ IP Zuordnung über Zeit | Pro Lease |
| **Proxy-Logs** | HTTP(S)-Requests, User-Agents | Pro Request |

### Vorgehensmodell

1. **Scoping:** Welcher Zeitraum? Welche IPs/Hosts? Welche Protokolle?
2. **Erfassung:** PCAP am strategischen Punkt (Span-Port, TAP, Port-Mirroring) — rechtzeitig, bevor die Beweise weg sind
3. **Erstanalyse (Triage):** Top-Talker, GeoIP-Mapping, Protokollverteilung
4. **Tiefenanalyse:** TCP-Streams rekonstruieren, verdächtige Payloads extrahieren
5. **Korrelation:** PCAP + FW-Logs + IDS-Alerts + Endpoint-Daten verbinden

### Werkzeuge

| Tool | Funktion |
|------|----------|
| **Wireshark / tshark** | Manuelle Paketanalyse, Filter, Stream-Extraktion |
| **Zeek (ehem. Bro)** | Protokoll-Parsing, automatisiertes Logging aller Verbindungen |
| **Suricata** | IDS/IPS + Metadaten-Extraktion |
| **NetworkMiner** | Datei-Extraktion aus PCAPs |
| **Moloch / Arkime** | Large-Scale PCAP Indexierung und Suche |
| **CapLoader** | Visualisierung und Triage großer PCAPs |

### Typische Analyse-Fragen

1. **Wann begann der Angriff?** TCP-Verbindung mit erstem SYN
2. **Wer ist der Angreifer?** Quell-IP → GeoIP, WHOIS, ISP-Auskunft
3. **Was wurde übertragen?** PCAP → `Follow TCP Stream` → Datei exportieren
4. **War es ein automatisierter Angriff?** Regelmäßige Intervalle? Viele Versuche pro Sekunde?
5. **Gab es laterale Bewegung?** Kommunikation von kompromittiertem Host zu internen IPs

### Anomalie-Erkennung

Verdächtige Patterns im Netzwerk-Traffic:
- **Beaconing:** Regelmäßige Verbindungen zu externer IP alle N Minuten → C2-Heartbeat
- **Port-Scan:** Viele SYN-Pakete ohne ACK-Antwort von einer IP
- **DNS-Tunnel:** Ungewöhnlich lange / base64-ähnliche DNS-Namen
- **Datenexfiltration:** Großer Upload zu ungewöhnlicher Zeit (z.B. 3 Uhr nachts) oder zu ungewöhnlichem Ziel
- **RDP-Bruteforce:** Viele Login-Fehlversuche auf Port 3389

## Praktische Anwendung / Befehle

- `zeek -r capture.pcap` → automatisch Protokoll-Logs generieren
- `tshark -r capture.pcap -q -z conv,tcp` → TCP-Konversationen mit Dauer und Bytes
- `tshark -r capture.pcap -Y "http.request.method == POST" -T fields -e http.host -e http.request.uri`
- `capinfos capture.pcap` — PCAP-Metadaten (Größe, Dauer, Paketzahl)

## Quellen / Weiterführendes

- [Zeek Documentation](https://docs.zeek.org/)
- Bejtlich, R.: The Practice of Network Security Monitoring
