---
title: "Memory Management"
tags: [memory, virtueller-speicher, paging, ram, forensik]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Memory Management ist das Herzstück eines Betriebssystems. Es verwaltet die Zuweisung von physischem und virtuellem Speicher an Prozesse. In der Forensik ist RAM ein primäres Ziel: Er enthält flüchtige Beweise, die auf der Festplatte nie landen.

## Details

### Virtueller Speicher

- Jeder Prozess sieht seinen eigenen, zusammenhängenden Adressraum (z.B. 4 GB bei 32-Bit)
- Das OS mappt virtuelle Adressen auf physische Seiten (Pages) über die **Page Table**
- **Page Fault:** Zugriff auf nicht-eingelagerte Seite → OS lädt von Disk nach

### Paging

- Physischer RAM in **Pages** (typisch 4 KB) unterteilt
- Page Table Entry (PTE): Virtuelle → Physische Adresse + Flags (Present, Dirty, Accessed, R/W)
- **Swap/Paging File:** Ausgelagerte Seiten auf Disk — forensisch wertvoll!

### Memory-Management unter Windows vs. Linux

| Aspekt | Windows | Linux |
|--------|---------|-------|
| Paging File | `pagefile.sys` (C:\) | Swap-Partition oder `/swapfile` |
| Hibernation | `hiberfil.sys` (komprimierter RAM-Dump) | Swap kann Hibernate-Daten enthalten |
| Kernel-Daten | EPROCESS, VAD-Tree | task_struct, mm_struct |
| Analyse-Tool | Volatility, Rekall | Volatility, LiME |

### Forensische Relevanz

- **RAM-Dump enthält:** Laufende Prozesse, offene Netzwerkverbindungen, Klartext-Passwörter, unverschlüsselte Dateiinhalte, Malware (fileless!)
- **Hiberfil.sys:** Windows speichert komprimierten RAM-Inhalt beim Ruhezustand — Goldgrube
- **Pagefile.sys:** Ausgelagerte Seiten können alte Daten enthalten, die im RAM längst überschrieben sind
- **VAD-Tree (Windows):** Zeigt alle Speicherbereiche eines Prozesses — auch injizierte DLLs

### Anti-Forensik im Memory-Bereich

- **Process Hollowing:** Legitimer Prozess wird gestartet, Code wird durch Malware ersetzt — der Name in der Prozessliste ist unauffällig
- **DLL Injection:** Malware injiziert eigenen Code in vertrauenswürdige Prozesse

## Praktische Anwendung / Befehle

- `volatility -f mem.dump malfind` — injizierten Code finden
- `volatility -f mem.dump dlllist` — geladene DLLs pro Prozess
- `volatility -f mem.dump netscan` — Netzwerkverbindungen aus RAM
- `volatility -f mem.dump dumpfiles` — Dateien aus RAM extrahieren
- `LiME` (Linux Memory Extractor): `insmod lime.ko path=/tmp/mem.dump format=lime`

## Quellen / Weiterführendes

- Ligh, Case, Levy, Walters: The Art of Memory Forensics
