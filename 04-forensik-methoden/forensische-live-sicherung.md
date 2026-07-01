---
title: "Forensische Live-Sicherung (Live Forensics)"
tags: [live-forensik, order-of-volatility, triage, ram-dump, incident-response]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Live-Forensik bedeutet: Du triffst ein laufendes System an und entscheidest, was du VOR dem Herunterfahren sicherst. Jeder Befehl, den du auf dem System ausführst, verändert Spuren — deshalb musst du die "Order of Volatility" strikt einhalten: Flüchtigstes zuerst.

## Details

### Order of Volatility (RFC 3227)

Priorität beim Sichern — absteigend nach Flüchtigkeit:

1. **Register, CPU-Cache** — Mikrosekunden. Praktisch nicht sicherbar (nur per Hardware-Debugger)
2. **RAM** — Verloren beim Ausschalten. Allerhöchste Priorität!
3. **Netzwerkverbindungen, Routing-Tabelle, ARP-Cache** — Minuten. State geht verloren
4. **Laufende Prozesse** — Verändert sich ständig. Mindestens Liste sichern
5. **Festplatten / SSDs** — Persistent. Zuletzt

### Live-Triage: Was sammeln?

#### Windows (PowerShell-basierte Triage)

```powershell
# RAM-Dump (muss zuerst!)
.\winpmem.exe -o C:\triage\ram.dump

# Netzwerkverbindungen
Get-NetTCPConnection | Export-Csv C:\triage\network.csv

# Laufende Prozesse mit Pfad und Kommandozeile
Get-Process | Select-Object Id, Name, Path | Export-Csv C:\triage\processes.csv
Get-WmiObject Win32_Process | Select-Object ProcessId, CommandLine | Export-Csv C:\triage\cmdline.csv

# Angemeldete Benutzer
query user > C:\triage\users.txt

# Autostarts
reg export HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run C:\triage\autostart.reg

# DNS-Cache
ipconfig /displaydns > C:\triage\dns_cache.txt
```

#### Linux (Bash-basierte Triage)

```bash
#!/bin/bash
OUTDIR="/mnt/usb/triage-$(hostname)-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$OUTDIR"

# RAM-Dump (muss zuerst!)
insmod lime.ko "path=$OUTDIR/ram.lime format=lime" 2>/dev/null

# Netzwerkverbindungen
ss -tunap > "$OUTDIR/network.txt"

# Routing-Tabelle und ARP-Cache
ip route > "$OUTDIR/routes.txt"
arp -a > "$OUTDIR/arp.txt"

# Prozesse
ps auxf > "$OUTDIR/processes.txt"
ls -la /proc/*/exe 2>/dev/null > "$OUTDIR/proc_exe.txt"

# Angemeldete Benutzer
w > "$OUTDIR/logged_users.txt"
last -20 > "$OUTDIR/last_logins.txt"

# Kernel-Module
lsmod > "$OUTDIR/modules.txt"

# Mounts
mount > "$OUTDIR/mounts.txt"
df -h > "$OUTDIR/disk_usage.txt"
```

### Wichtige Live-System-Entscheidungen

| Frage | Empfehlung | Begründung |
|-------|-----------|------------|
| **Runterfahren oder laufen lassen?** | Laufen lassen, wenn möglich | RAM bleibt erhalten, C2-Verbindung kann beobachtet werden |
| **Netzwerk trennen?** | Ja, wenn C2-Gefahr und keine Netzwerk-Forensik möglich | Unterbricht laufende Datenexfiltration |
| **Tastatur/Maus bedienen?** | Nur, wenn unvermeidbar. Jeden Klick protokollieren | Der Mauszeiger bewegt sich = Spurenveränderung |
| **Verschlüsseltes System?** | AUF KEINEN FALL herunterfahren | Sonst verlierst du den Schlüssel im RAM |

### Was du NIEMALS tun solltest

1. **System herunterfahren**, ohne vorher RAM zu dumpen — unwiederbringlicher Beweisverlust
2. **Fremde USB-Sticks einstecken**, ohne vorher zu prüfen, was drauf ist (Malware-Risiko)
3. **Das System weiter benutzen**, z.B. "nur kurz was googlen" — zerstört Spuren
4. **Forensik-Tools vom Zielsystem ausführen**, ohne vorher zu dokumentieren, welche Dateien du erstellst

### Dokumentation der Live-Sicherung

Jede Aktion protokollieren:
- Wann wurde was gemacht? (Zeitstempel)
- Welcher Befehl wurde ausgeführt? (Wortlaut)
- Warum? (Begründung nach ACPO Prinzip 2)
- Welche Dateien wurden erstellt/verändert?

## Praktische Anwendung

- RAM: `LiME` (Linux), `WinPMEM` (Windows), `osxpmem` (macOS)
- Fertige Triage-Skripte: `CyLR`, `KAPE` (Windows), `UAC` (Unix Artifact Collector)
- Portable Forensik-Distribution: Kali Linux Live-USB, Paladin, CAINE

## Quellen / Weiterführendes

- RFC 3227: Guidelines for Evidence Collection and Archiving
- ACPO Good Practice Guide for Digital Evidence
- [SANS: First Responder Guide](https://www.sans.org/security-resources/posters/dfir/20)
