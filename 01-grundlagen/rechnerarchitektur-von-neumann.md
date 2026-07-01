---
title: "Rechnerarchitektur: Von Neumann und Harvard"
tags: [rechnerarchitektur, cpu, von-neumann, harvard, bus-systeme, alu, register, arm]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Jeder Computer folgt einem Architekturprinzip, das bestimmt, wie CPU, Speicher und Ein-/Ausgabe zusammenarbeiten. Die zwei fundamentalen Modelle sind die Von-Neumann- und die Harvard-Architektur. Forensisch relevant, weil die Architektur bestimmt, wo und wie Daten im System abgelegt werden — und welche Spuren volatile sind.

## Details

### Von-Neumann-Architektur

- Ein gemeinsamer Speicher für Programme und Daten — CPU holt beides über denselben Bus
- Komponenten: ALU (Arithmetic Logic Unit) + CU (Control Unit) + Speicher + E/A-Einheiten
- Vorteil: einfach, flexibel; Nachteil: Von-Neumann-Flaschenhals (gemeinsamer Bus wird Engpass)
- Alle modernen Desktop- und Server-CPUs (x86-64, AMD64) folgen diesem Grundprinzip

### Harvard-Architektur

- Getrennte Speicher und Busse für Programmcode (Instruktionen) und Daten
- Gleichzeitiger Zugriff auf Instruktion und Daten möglich → höhere Performance
- Typisch für Mikrocontroller (ARM Cortex-M), DSPs (Digitale Signalprozessoren)
- Moderne CPUs nutzen eine modifizierte Harvard-Architektur: getrennte L1-Caches für Code und Daten, aber gemeinsamer Hauptspeicher

### ARM vs. x86 — forensisch relevant

| Aspekt | x86-64 (Intel/AMD) | ARM (Apple M, Qualcomm) |
|--------|-------------------|------------------------|
| Endianness | Little-Endian | Bi-Endian (meist Little) |
| Register | 16 GP-Register (RAX, RBX...) | 31 GP-Register (X0-X30) |
| Instruktionen | CISC (komplex, variabel lang) | RISC (einfach, 4 Byte fix) |
| RAM-Dump | Volatility/WinPMEM | LiME, spezielle ARM-Profile |
| Verbreitung | Server, Desktop | Smartphones, Tablets, Macs |

Warum relevant? Ein RAM-Dump von einem ARM-Gerät braucht andere Volatility-Profile. Falsches Profil = falsche Ergebnisse.

### CPU-Register und forensische Bedeutung

Ein RAM-Dump enthält auch den Register-Zustand der CPU zum Zeitpunkt des Dumps:

| Register | Inhalt | Forensische Relevanz |
|----------|--------|---------------------|
| **PC (Program Counter)** | Adresse der nächsten Instruktion | Wo im Code stand die CPU? |
| **SP (Stack Pointer)** | Spitze des Aufruf-Stacks | Call-Chain rekonstruieren |
| **RAX / X0** | Rückgabewert | Was gab die letzte Funktion zurück? |
| **CR3 (x86)** | Page-Directory-Basis | Übersetzung virtueller → physischer Adressen im RAM-Dump |

Tools wie `volatility` nutzen das CR3-Register, um Prozess-Adressräume korrekt aus dem RAM-Dump zu extrahieren.

### Speicher-Hierarchie und flüchtige Spuren

```
CPU-Register (Bytes) → L1-Cache (KB) → L2-Cache (MB) → L3-Cache (MB) → RAM (GB) → SSD/HDD (TB)
←────────────────────── flüchtiger ─────────────────────────→ ←── persistent ──→
```

- **Cache-Spuren:** L1-Cache kann Tastatureingaben enthalten, die nie auf die Platte geschrieben wurden
- **Cold-Boot-Attacke:** RAM-Daten überleben einen kurzen Neustart (Sekunden), weil die RAM-Zellen nur langsam entladen — nutzbar für Verschlüsselungsschlüssel-Extraktion

### BUS-Protokolle und Hardware-Forensik

- **PCIe:** Kommunikation zwischen CPU und Peripherie (GPU, NVMe-SSD, Netzwerkkarte) — PCIe-Sniffer können DMA-Transfers aufzeichnen (Thunderbolt-DMA-Angriffe!)
- **USB:** USB-Pakete auf Bus-Ebene mitschneiden (z.B. Beagle USB 480 Protocol Analyzer) — forensische Tastaturaufzeichnung ohne Host-Software
- **SATA/NVMe:** ATA/SCSI-Befehle können auf Bus-Ebene abgefangen werden

## Praktische Anwendung

- RAM-Dump: `LiME` (Linux), `WinPMEM` (Windows), `osxpmem` (macOS)
- Analyse: `volatility3 -f memory.dump windows.info` — OS-Profil finden
- Register-Analyse: `volatility -f mem.dump --profile=Win10x64 pslist`
- ARM-Dump: `volatility3 -f android.dump linux.pslist` — benötigt ARM-Symbol-Tabelle
- Live-System: `LiME` direkt auf laufendem System laden (`insmod lime.ko path=/tmp/dump.lime format=lime`)

## Quellen / Weiterführendes

- Tanenbaum, A.S.: Computerarchitektur
- [Wikipedia: Von-Neumann-Architektur](https://de.wikipedia.org/wiki/Von-Neumann-Architektur)
- Ligh, Case, Levy, Walters: The Art of Memory Forensics (Kapitel "Architecture")
