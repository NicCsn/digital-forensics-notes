---
title: "Forensische Triage und Erstanalyse"
tags: [triage, erstanalyse, prioritierung, rapid-analysis, dfir]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Triage ist die schnelle Ersteinschätzung: Ist dieses System kompromittiert? Wenn ja, wie schwerwiegend? In großen Incident-Response-Fällen kannst du nicht jedes System vollständig analysieren — Triage priorisiert, wo sich der Aufwand lohnt.

## Details

### Ziele der Triage

1. **Ist das System betroffen?** (Ja/Nein)
2. **Wann wurde es kompromittiert?** (Erste Spuren)
3. **Welche IOC-Indikatoren passen?** (Hash, IP, Domain, Registry-Key)
4. **Welche Daten könnten betroffen sein?** (Sensibilität des Systems)
5. **Wie dringend?** (Priorität für tiefere Analyse)

### Triage-Vorgehen (Windows)

| Schritt | Tool/Methode | Was suchen? |
|---------|-------------|------------|
| 1. Laufende Prozesse | `tasklist`, `pslist` | Unbekannte Prozesse, cmd.exe als Kind von winword.exe |
| 2. Netzwerkverbindungen | `netstat -ano`, `Get-NetTCPConnection` | Verbindungen zu bekannten C2-IPs, ungewöhnliche Ports |
| 3. Autostarts | `autorunsc64.exe` (Sysinternals) | Registry-Run-Keys, Scheduled Tasks |
| 4. User Accounts | `net user`, EventLog 4720 | Neue Accounts, Gruppe "Administratoren" |
| 5. Prefetch | `C:\Windows\Prefetch\` | Kürzlich ausgeführte Programme |
| 6. EventLog (letzte 24h) | `Get-WinEvent` | Logins (4624/4625), Dienst-Installation (7045) |
| 7. Geplante Tasks | `schtasks /query` | Persistenz-Mechanismen |

### Triage-Vorgehen (Linux)

| Schritt | Tool/Methode | Was suchen? |
|---------|-------------|------------|
| 1. Laufende Prozesse | `ps auxf` | Prozess-Hierarchie, unbekannte Binärs |
| 2. Netzwerkverbindungen | `ss -tunap` | ESTABLISHED zu externen IPs |
| 3. Letzte Logins | `last -20`, `lastb -20` | Ungewöhnliche Login-Zeiten/IPs |
| 4. Auth-Log | `grep "Accepted" /var/log/auth.log` | Erfolgreiche Logins |
| 5. Shell-History | `.bash_history`, `.zsh_history` | Ausgeführte Befehle |
| 6. Cron-Jobs | `ls /etc/cron.*`, `crontab -l` | Automatisierte Malware-Ausführung |
| 7. Modifizierte Dateien | `find / -mtime -1 -type f` | In den letzten 24h veränderte Dateien |

### IOC-Abgleich (Indicators of Compromise)

- **Hash-IOCs:** `sha256sum` aller ausführbaren Dateien → gegen IOC-Liste
- **IP-IOCs:** `netstat` + Firewall-Logs → gegen Threat-Intel-Feed
- **Domain-IOCs:** DNS-Cache + Browser-History → gegen blocklist
- **Registry-IOCs:** Standard-Keys auf bekannte Malware-Patterns prüfen

### Triage-Tools

| Tool | Plattform | Besonderheit |
|------|-----------|-------------|
| **KAPE** (Eric Zimmerman) | Windows | Sammelt vordefinierte Artefakt-Sets in Minuten |
| **Velociraptor** | Multi | Agent-basierte Live-Forensik, skalierbar |
| **CyLR** | Windows/Linux | Forensischen Artefakt-Kollektor |
| **Autoruns** | Windows | Persistenz-Mechanismen anzeigen |

## Praktische Anwendung

- KAPE: `kape.exe --tsource C: --target KapeTriage --tdest X:\triage\`
- Velociraptor: `velociraptor.exe --config client.config.yaml --artifact Windows.Forensics.Prefetch`
- Linux: `tar czf triage-$(hostname)-$(date +%Y%m%d).tgz /var/log/ ~/.bash_history` als Minimal-Triage

## Quellen / Weiterführendes

- [Eric Zimmerman's Tools](https://ericzimmerman.github.io/)
- [SANS DFIR Poster](https://www.sans.org/posters/)
