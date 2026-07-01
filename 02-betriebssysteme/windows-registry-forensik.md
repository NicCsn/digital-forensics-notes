---
title: "Windows Registry Forensik"
tags: [windows, registry, forensik, ntuser, amcache, shellbags]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Die Registry ist die zentrale Konfigurationsdatenbank von Windows — und eine der ergiebigsten Quellen für forensische Artefakte. Hier findest du: ausgeführte Programme, angeschlossene USB-Geräte, Netzwerkkonfigurationen und vieles mehr.

## Details

### Physische Lage der Registry-Hives

| Hive | Pfad |
|------|------|
| SAM | `%SystemRoot%\System32\config\SAM` |
| SECURITY | `%SystemRoot%\System32\config\SECURITY` |
| SOFTWARE | `%SystemRoot%\System32\config\SOFTWARE` |
| SYSTEM | `%SystemRoot%\System32\config\SYSTEM` |
| NTUSER.DAT | `C:\Users\<User>\NTUSER.DAT` (pro Benutzer) |
| UsrClass.dat | `C:\Users\<User>\AppData\Local\Microsoft\Windows\UsrClass.dat` |

### Forensisch relevante Registry-Keys

#### System-Informationen
- `HKLM\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName` — Rechnername
- `HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation` — Zeitzone
- `HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces` — Netzwerkkonfiguration inkl. IPs

#### Benutzer-Aktivität
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs` — kürzlich geöffnete Dateien
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU` — Ausführen-Dialog-Verlauf
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths` — in Explorer-Adressleiste eingegebene Pfade

#### USB-Geräte
- `HKLM\SYSTEM\CurrentControlSet\Enum\USBSTOR` — alle jemals angeschlossenen USB-Speichergeräte
- `HKLM\SYSTEM\CurrentControlSet\Enum\USB` — allgemein USB-Geräte

#### Programm-Ausführung
- **AmCache** (`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatCache`): Ausgeführte Programme mit Pfad und SHA1-Hash
- **ShimCache** / AppCompatCache: Ähnlich AmCache, aber enthält auch nicht mehr existierende Programme
- **UserAssist** (`NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist`): GUI-gestartete Programme mit Ausführungszähler und letzter Ausführung (ROT13-verschlüsselt)

#### Autostarts
- `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
- `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
- `HKLM\SYSTEM\CurrentControlSet\Services` — Treiber und Dienste

### ShellBags

Zeigt, welche Ordner der Benutzer geöffnet hat und wie sie angeordnet waren:
- `NTUSER.DAT\Software\Microsoft\Windows\Shell\BagMRU`
- `UsrClass.dat\Local Settings\Software\Microsoft\Windows\Shell\BagMRU`

## Praktische Anwendung / Befehle

- `reg query "HKLM\SYSTEM\CurrentControlSet\Enum\USBSTOR" /s` — alle USB-Geräte
- `reg save HKLM\SYSTEM system.hive` — Hive extrahieren
- Tools: Registry Explorer, RegRipper, Eric Zimmerman's Registry Explorer/RECmd

## Quellen / Weiterführendes

- Carvey, H.: Windows Registry Forensics
- [Eric Zimmerman's Tools](https://ericzimmerman.github.io/)
