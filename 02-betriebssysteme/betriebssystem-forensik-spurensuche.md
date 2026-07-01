---
title: "Betriebssystem-Forensik: Spurensuche und Artefakte"
tags: [forensik, windows, linux, macos, artefakte, prefetch, jump-lists, lnk]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Betriebssysteme protokollieren mehr, als vielen Nutzern bewusst ist. Als Forensiker musst du die wichtigsten Artefakt-Fundorte in Windows, Linux und macOS kennen — und wissen, welche Tools sie auslesen.

## Details

### Windows-Artefakte

| Artefakt | Fundort | Aussage |
|----------|---------|---------|
| **Prefetch** | `C:\Windows\Prefetch\*.pf` | Welche .exe wann (bis 8x) ausgeführt wurde |
| **Jump Lists** | `%AppData%\Microsoft\Windows\Recent\AutomaticDestinations\` | Zuletzt geöffnete Dateien pro Anwendung |
| **LNK-Files** | `%AppData%\Microsoft\Windows\Recent\`, `%AppData%\Microsoft\Office\Recent\` | Verknüpfungen: Zielpfad, MAC-Zeiten des Ziels |
| **Recycle Bin** | `C:\$Recycle.Bin\<SID>\` | Gelöschte Dateien mit Originalpfad und Löschdatum |
| **Thumbcache** | `%AppData%\Local\Microsoft\Windows\Explorer\` | Thumbnails auch nach Löschung des Originals |
| **SRUDB.dat** | `C:\Windows\System32\sru\` | System Resource Usage — Datenverbrauch pro App |
| **Event Logs** | `C:\Windows\System32\winevt\Logs\` | Security, System, Application, PowerShell |
| **Browser Cache** | `%AppData%\Local\*\Cache\` | Chrome, Firefox, Edge — History, Cookies, Downloads |

### Linux-Artefakte

| Artefakt | Fundort | Aussage |
|----------|---------|---------|
| **Shell History** | `~/.bash_history`, `~/.zsh_history` | Alle eingegebenen Befehle |
| **Auth Log** | `/var/log/auth.log` | Logins (erfolgreich/fehlgeschlagen), sudo-Nutzung |
| **Cron Jobs** | `/var/spool/cron/crontabs/`, `/etc/crontab` | Automatisierte Aufgaben |
| **SSH Known Hosts** | `~/.ssh/known_hosts`, `~/.ssh/authorized_keys` | Welche Server wurden kontaktiert? |
| **APT Log** | `/var/log/apt/history.log` | Installierte/entfernte Pakete mit Zeitstempel |
| **Systemd Journal** | `journalctl` | Nahezu alles: Boots, Dienste, Kernel-Events |
| **Trash** | `~/.local/share/Trash/` | Gelöschte Dateien mit Wiederherstellungspfad |

### macOS-Artefakte

| Artefakt | Fundort | Aussage |
|----------|---------|---------|
| **Unified Logs** | `log show` | Systemweites Logging |
| **KnowledgeC.db** | `~/Library/Application Support/Knowledge/` | App-Nutzung, Web-Verlauf, angeschlossene Geräte |
| **Quarantäne-DB** | `~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV2` | Aus dem Internet heruntergeladene Dateien |
| **plist-Dateien** | `~/Library/Preferences/` | App-Einstellungen, Fensterpositionen, letzte Datei |
| **FSEvents** | `.fseventsd/` auf jedem Volume | Dateisystem-Änderungen protokolliert |

## Praktische Anwendung

- `Prefetch` mit `PECmd.exe` (Eric Zimmerman Tools)
- `LNK` mit `LECmd.exe` parsen
- `journalctl --since "2025-01-01" --until "2025-01-02"` — Linux-Journal filtern
- `log show --predicate 'eventMessage contains "error"' --last 2d` — macOS Unified Logs

## Quellen / Weiterführendes

- Nikkel, B.: Practical Linux Forensics
- [SANS DFIR Poster](https://www.sans.org/posters/) — Artefakt-Übersicht
