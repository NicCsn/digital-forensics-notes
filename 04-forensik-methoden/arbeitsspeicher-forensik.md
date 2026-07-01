---
title: "Arbeitsspeicher-Forensik (Memory Forensics)"
tags: [ram, arbeitsspeicher, volatility, lime, dump, prozesse, injektion]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Arbeitsspeicher (RAM) ist flüchtig — nach dem Ausschalten sind die Daten weg. Aber im laufenden Betrieb enthält er ALLES: Prozesse, Passwörter, Netzwerkverbindungen, Malware, Klartexte. Memory Forensics ist oft DER entscheidende Schritt, um fileless Malware oder laufende Angriffe zu identifizieren.

## Details

### RAM-Dump erstellen

**Windows:**
- `WinPMEM` (Rekall-Toolkit), `DumpIt`, `Magnet RAM Capture`
- Für VMs: Snapshot = RAM-Dump der VM

**Linux:**
- `LiME` (Linux Memory Extractor): Kernel-Modul laden → RAM dumpen
- `insmod lime.ko path=/tmp/mem.dump format=lime`
- `fmem` (ältere Alternative)

**macOS:**
- `osxpmem`, `Recon Imager`
- macOS SIP erschwert Kernel-Module → SIP ggf. temporär deaktivieren

### Volatility — Das Werkzeug

Volatility ist das Standard-Framework zur RAM-Analyse:

```bash
# Image-Info: Welches OS-Profil?
volatility -f mem.dump imageinfo

# Prozessliste
volatility -f mem.dump --profile=Win10x64 pslist
volatility -f mem.dump --profile=Win10x64 pstree    # Eltern-Kind-Beziehungen
volatility -f mem.dump --profile=Win10x64 psxview   # versteckte Prozesse finden

# Netzwerkverbindungen
volatility -f mem.dump --profile=Win10x64 netscan

# Geladene DLLs
volatility -f mem.dump --profile=Win10x64 dlllist

# Kommandozeilen der Prozesse
volatility -f mem.dump --profile=Win10x64 cmdline

# Injezierten Code finden
volatility -f mem.dump --profile=Win10x64 malfind

# Dateien aus dem RAM extrahieren
volatility -f mem.dump --profile=Win10x64 dumpfiles

# Registry-Hives aus dem RAM
volatility -f mem.dump --profile=Win10x64 hivelist
```

### Typische Analyse-Ablauf

1. **imageinfo** → OS-Profil bestimmen (Win7? Win10? x64?)
2. **pstree** → Welche Prozesse laufen, welche Eltern-Kind-Verhältnisse?
3. **cmdline** → Wie wurde der Prozess gestartet?
4. **netscan** → Wohin bestehen Verbindungen?
5. **malfind** → Gibt es injizierten Code?
6. **Suspicious Processes identifiziert? →** `memdump -p <PID>` + Strings-Extraktion + YARA-Scan

### Fileless Malware

- Existiert nur im RAM, nie auf der Festplatte
- Typische Vektoren: PowerShell-Empire, Cobalt Strike (Reflective DLL Loading)
- Erkennung NUR per Memory Forensics möglich
- Anzeichen: Prozess ohne zugehörige EXE-Datei, `cmd.exe` mit PowerShell-Kindprozess und Netzwerkverbindung

## Praktische Anwendung

- `volatility3` (Python 3, aktiv entwickelt) vs. `volatility2` (Python 2, Legacy)
- `strings mem.dump | grep -i password` → Erste Schnellanalyse
- `vol -f mem.dump windows.cmdline.CmdLine` → Volatility 3 Syntax

## Quellen / Weiterführendes

- Ligh, Case, Levy, Walters: The Art of Memory Forensics
- [Volatility Foundation](https://www.volatilityfoundation.org/)
