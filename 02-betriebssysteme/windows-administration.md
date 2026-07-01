---
title: "Windows-Administration für Forensiker"
tags: [windows, administration, powershell, registry, eventlog, benutzer]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Windows ist das am weitesten verbreitete Desktop-Betriebssystem — und damit das häufigste Ziel forensischer Untersuchungen. Du musst die Admin-Werkzeuge beherrschen, um Spuren zu finden und zu interpretieren.

## Details

### PowerShell-Grundlagen

PowerShell ist die mächtigste Schnittstelle zur Windows-Administration und Forensik:

```powershell
Get-Process                          # laufende Prozesse
Get-Service                          # Dienste
Get-EventLog -LogName Security       # Security-Event-Log
Get-ItemProperty HKLM:\SOFTWARE\...  # Registry-Wert lesen
Get-WinEvent                        # moderne Eventlog-Abfrage
Get-NetTCPConnection                # Netzwerkverbindungen
Get-WMIObject Win32_UserAccount     # Benutzerliste
```

### Windows-Registry — das Herzstück

Die Registry ist eine hierarchische Datenbank für System- und Anwendungseinstellungen:

| Root-Key | Inhalt |
|----------|--------|
| `HKEY_LOCAL_MACHINE (HKLM)` | Systemweite Einstellungen |
| `HKEY_CURRENT_USER (HKCU)` | Benutzerspezifische Einstellungen |
| `HKEY_USERS` | Profile aller Benutzer |
| `HKEY_CLASSES_ROOT` | Dateizuordnungen und COM-Objekte |

Registry-Hives liegen physisch unter `%SystemRoot%\System32\config\` und pro Benutzer unter `NTUSER.DAT`.

### EventLog (Ereignisanzeige)

| Log | Details |
|-----|---------|
| **Security** | Logins (4624 = Erfolg, 4625 = Fehlschlag), Rechte-Änderungen (4672) |
| **System** | Dienst-Starts/-Stopps, Treiber-Ladungen |
| **Application** | Anwendungs-Events (z.B. MSI-Installationen = 11707/1033) |
| **PowerShell Operational** | Ausgeführte PowerShell-Befehle (Event 4104, 4103) |

Event-IDs sind Schlüsselwissen: **4624 = Login**, **4625 = Failed Login**, **4688 = Prozessstart**, **7045 = Dienst installiert**

### Benutzer- und Gruppenverwaltung

```cmd
net user                           # alle lokalen Benutzer
net user <name>                    # Details zu einem Benutzer
net localgroup Administratoren     # Wer ist Admin?
whoami /groups                     # eigene Gruppen
```

### Wichtige Admin-Tools

| Tool | Zweck |
|------|-------|
| `msinfo32` | Systemübersicht |
| `compmgmt.msc` | Computerverwaltung (Benutzer, Dienste, Datenträger) |
| `eventvwr.msc` | Ereignisanzeige |
| `taskschd.msc` | Aufgabenplanung |
| `resmon` | Ressourcenmonitor |
| `secpol.msc` | Lokale Sicherheitsrichtlinien |

## Praktische Anwendung

- PowerShell-Skript zur forensischen Erstanalyse: Prozesse, Netzwerkverbindungen, Autostarts, Dienste in CSV exportieren
- `Sysinternals Suite` (Autoruns, Process Explorer, ProcMon) — Standardwerkzeuge für Triage

## Quellen / Weiterführendes

- [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/)
- Carvey, H.: Windows Registry Forensics
