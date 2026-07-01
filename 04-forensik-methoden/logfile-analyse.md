---
title: "Logfile-Analyse"
tags: [logs, syslog, eventlog, apache, zeitnormalisierung, siem]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Logs sind das Gedächtnis eines Systems — sie protokollieren Ereignisse mit Zeitstempel. In der Forensik sind sie oft der rote Faden, der eine Angriffskette rekonstruiert: von der initialen Infektion über laterale Bewegung bis zur Exfiltration.

## Details

### Wichtige Log-Quellen

| System | Quelle | Inhalt |
|--------|--------|--------|
| **Linux** | `/var/log/auth.log` | Login-Versuche, sudo, SSH-Sessions |
| **Linux** | `/var/log/syslog` | Systemmeldungen, Kernel-Events |
| **Linux** | `/var/log/apache2/access.log` | HTTP-Requests (Kombiniertes Log-Format) |
| **Windows** | EventLog "Security" | Logins (4624/4625), Privilegien-Nutzung (4672) |
| **Windows** | EventLog "System" | Dienst-Starts (7045/7036), System-Fehler |
| **Windows** | EventLog "PowerShell Operational" | Ausgeführte PowerShell-Befehle (Event 4104) |
| **Firewall** | Logs (varies) | Blockierte/erlaubte Verbindungen |
| **Datenbank** | z.B. PostgreSQL `pg_log` | SQL-Statements, Connection-Versuche |

### Standard-Log-Formate

**Syslog (RFC 5424):**
```
<134>1 2025-03-15T03:17:22.000Z myhost sshd 1234 - - Failed password for root from 203.0.113.42 port 54321 ssh2
```
- PRI (Facility + Severity), Timestamp, Hostname, App-Name, Message

**Apache Combined Log Format:**
```
192.168.1.1 - frank [15/Mar/2025:03:17:22 +0200] "GET /admin HTTP/1.1" 403 1234 "http://example.com" "Mozilla/5.0 ..."
```
- IP, Ident, User, Timestamp, Request, Statuscode, Größe, Referer, User-Agent

### Zeitnormalisierung — das fundamentale Problem

- Logs aus verschiedenen Quellen haben verschiedene Zeitformate und Zeitzonen
- **Ohne Normalisierung ist keine Korrelation möglich**
- Lösung: Alle Zeitstempel auf UTC konvertieren, z.B. mit `dateutil.parser` + `pytz`

### Analyse-Patterns

**Brute-Force-Erkennung:**
```bash
cat auth.log | grep "Failed password" | awk '{print $NF}' | sort | uniq -c | sort -rn
```
→ IPs mit den meisten fehlgeschlagenen Logins

**Web-Angriffs-Erkennung:**
```bash
grep -E "(UNION|SELECT|<script|\.\./\.\./)" access.log
```
→ SQLi, XSS, Path Traversal

**Zeitfenster-Analyse:**
```bash
grep "2025-03-15 03:" auth.log
```
→ Was geschah in der fraglichen Stunde?

### Log-Integrität

- Logs können manipuliert werden → Verschlüsselte/Remote-Logs bevorzugen (Syslog-Server, SIEM)
- **Lücken:** Fehlen erwartbare Log-Einträge? (z.B. kein Login nach Boot) → Verdacht auf Log-Wiping
- **Korrelation:** FW-Log sagt "Verbindung erlaubt" + kein entsprechender Server-Log → verdächtig

## Praktische Anwendung / Befehle

- `journalctl --since "2025-03-15 03:00" --until "2025-03-15 04:00"` — Linux-Journal filtern
- `wevtutil qe Security /c:5 /rd:true /f:text` — letzte 5 EventLog-Einträge
- `Get-WinEvent -LogName Security -MaxEvents 100 | Where-Object {$_.Id -eq 4625}` — PowerShell
- `lnav /var/log/` — Terminal-basierter Log-Viewer mit Syntax-Highlighting

## Quellen / Weiterführendes

- [SANS: Logging and Monitoring Cheat Sheet](https://www.sans.org/security-resources/posters/dfir/20)
