---
title: "Prozessmanagement und Threads"
tags: [prozesse, threads, scheduling, ipc, forensik, injection, sysmon, volatility]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Prozesse sind laufende Programme, Threads sind Ausführungsstränge innerhalb eines Prozesses. In der Forensik liest du aus Prozesslisten ab, welche Malware läuft — und aus RAM-Dumps, was ein Prozess im Speicher hatte.

## Details

### Prozesszustände

Ein Prozess durchläuft Zustände: **New → Ready → Running → Waiting → Terminated**

- **Orphan:** Elternprozess terminiert vor Kind → wird von init (PID 1) adoptiert
- **Zombie:** Prozess terminiert, aber Eltern hat `wait()` nicht aufgerufen — steht noch in der Prozesstabelle. Forensisch relevant: Ein Zombie deutet entweder auf einen Bug oder auf absichtliche Verschleierung (Anti-Forensik)

### Prozess-Strukturen im Detail

**Linux:**
- `task_struct` im Kernel (eine pro Prozess) mit: PID, PPID, State, Memory-Maps, offene Dateideskriptoren
- `/proc/<pid>/` als lesbare Schnittstelle — `cmdline`, `environ`, `maps`, `fd/`, `exe`, `cwd`

**Windows:**
- EPROCESS-Block im Kernel, enthält: PID, PPID, CreateTime, ExitTime, Token, VAD-Tree (Virtual Address Descriptors), PEB (Process Environment Block)

### Process Injection — wie Malware sich versteckt

| Technik | Beschreibung | Forensische Erkennung |
|---------|-------------|----------------------|
| **DLL Injection** | Malware zwingt einen legitimen Prozess, eine bösartige DLL zu laden | `volatility dlllist` → unbekannte DLLs |
| **Process Hollowing** | Legitimer Prozess wird im SUSPENDED-Zustand gestartet, sein Code durch Malware ersetzt, dann fortgesetzt | Image-Path vs. tatsächlicher Speicherinhalt im RAM-Dump |
| **Process Doppelgänging** | Transaktionelles NTFS (TxF) wird ausgenutzt, um eine ausführbare Datei zu überschreiben, ohne dass die Änderung auf die Platte geschrieben wird | Sehr schwer zu erkennen, nur per RAM-Analyse |
| **Reflective DLL Loading** | DLL wird direkt aus dem Speicher geladen, nie auf die Platte geschrieben | `volatility malfind` → Code in nicht-DLL-Speicherbereichen |

### Sysmon Event-IDs für Prozess-Forensik

Sysmon (System Monitor) von Sysinternals protokolliert detaillierte Prozess-Ereignisse:

| Event ID | Ereignis | Forensischer Nutzen |
|----------|----------|-------------------|
| 1 | Process Creation | Wer startete welchen Prozess mit welcher Kommandozeile? |
| 5 | Process Terminated | Wann endete der Prozess? |
| 8 | CreateRemoteThread | DLL Injection / Code Injection! (höchst verdächtig) |
| 10 | ProcessAccess | Ein Prozess öffnete einen anderen mit bestimmten Rechten (mögliche Injection) |
| 22 | DNS Query | Welcher Prozess löste welche DNS-Abfrage aus? |

### Prozesse im Volatility

```bash
# Liste aller Prozesse (auch versteckte?)
volatility -f mem.dump pslist

# Eltern-Kind-Beziehungen (cmd.exe als Kind von winword.exe?)
volatility -f mem.dump pstree

# Versteckte Prozesse durch Vergleich verschiedener Quellen
volatility -f mem.dump psxview

# Injezierten Code finden
volatility -f mem.dump malfind

# Kommandozeile, mit der ein Prozess gestartet wurde
volatility -f mem.dump cmdline -p 1234
```

### Suspicious Process Chains

Typische bösartige Eltern-Kind-Beziehungen:

- `winword.exe` → `cmd.exe` → `powershell.exe` (Dokument-Makro → Shell)
- `services.exe` → `cmd.exe` (Dienst startet Shell — sehr selten legitim)
- `explorer.exe` → `wscript.exe` (Nutzer klickte auf bösartiges Skript)
- `wmiprvse.exe` → `powershell.exe` (WMI-Persistence)

## Praktische Anwendung / Befehle

- `ps auxf` — Prozess-Hierarchie (Linux)
- `volatility -f mem.dump pslist`, `pstree`, `psxview`
- `lsof -p <pid>` — offene Dateien eines Prozesses
- `strace -p <pid>` — Syscalls live verfolgen (Linux, mit Vorsicht — Anti-Forensik!)
- Windows EventLog: Event 4688 (Process Creation via Audit Policy)

## Quellen / Weiterführendes

- Tanenbaum, A.S.: Moderne Betriebssysteme
- Ligh, Case, Levy, Walters: The Art of Memory Forensics (Kapitel "Processes and DLLs")
