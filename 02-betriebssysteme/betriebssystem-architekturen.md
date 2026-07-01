---
title: "Betriebssystem-Architekturen"
tags: [betriebssystem, architektur, kernel, monolithisch, mikrokernel, hybrid, hypervisor, container, syscalls]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Jedes Betriebssystem hat eine Architektur, die bestimmt, wie Kernel und Userspace interagieren. Das Verständnis der Architektur ist essenziell, um zu wissen, wo forensische Artefakte entstehen und wie Malware unter dem Radar bleibt.

## Details

### Protection Rings (x86)

| Ring | Beschreibung | Wer läuft da? |
|------|-------------|--------------|
| Ring 0 | Kernel-Mode — voller Hardware-Zugriff | OS-Kernel, Gerätetreiber |
| Ring 1-2 | Historisch für Treiber | Kaum genutzt |
| Ring 3 | User-Mode — kein direkter Hardware-Zugriff | Alle Anwendungen, Browser, Malware (vor Escalation) |

Jeder Sprung von Ring 3 nach Ring 0 ist ein **Syscall** — ein kontrollierter Übergang, der von der CPU über das `syscall`-Instruktions-Interface abgewickelt wird. Rootkits manipulieren diese Syscall-Tabelle (SSDT unter Windows, sys_call_table unter Linux).

### Kernel-Typen

| Typ | Beschreibung | Beispiele |
|-----|-------------|----------|
| **Monolithisch** | Alles läuft im Kernel-Mode (Treiber, FS, Netzwerk) — schnell, aber großer Angriffsvektor | Linux (mit ladbaren Modulen), FreeBSD |
| **Mikrokernel** | Minimaler Kernel (IPC, Scheduling), alles andere im Userspace — sicherer, aber langsamer | Minix, QNX, L4, seL4 |
| **Hybrid** | Kombination: Performance-Kritisches im Kernel, Dienste im Userspace | Windows NT, macOS (XNU) |

### Syscall-Mechanismus

Linux: Programme rufen libc-Wrapper auf → dieser löst `syscall`-Instruktion aus → Kernel führt den Syscall aus → Ergebnis zurück an Userspace.

Forensisch: `strace -p <pid>` zeigt live alle Syscalls eines Prozesses. `volatility` zeigt historische Syscalls nicht direkt, aber indirekte Spuren (geöffnete Dateien, Netzwerkverbindungen = Resultate von Syscalls).

### Kernel-Module und Treiber

- **Linux:** Kernel-Module (`.ko`) werden mit `insmod`/`modprobe` geladen. `lsmod` zeigt aktive Module. `dmesg` zeigt Lade-Meldungen
- **Windows:** Treiber (`.sys`) werden im Registry-Key `HKLM\SYSTEM\CurrentControlSet\Services` registriert. `driverquery /v` zeigt Details

Ein geladenes Kernel-Modul ohne zugehörige Datei auf der Platte → Rootkit!

### Hypervisor — eine Schicht unter dem OS

Virtualisierung fügt eine Basis-Ebene hinzu:

| Typ | Beschreibung | Forensische Implikation |
|-----|-------------|------------------------|
| Type 1 (Bare Metal) | Hypervisor direkt auf Hardware (VMware ESXi, Hyper-V, KVM) | Gast-VM sieht nur "virtuelle" Hardware — RAM-Dump des Hosts enthält ALLE Gast-Daten |
| Type 2 (Hosted) | Hypervisor als Anwendung (VirtualBox, VMware Workstation) | VM-Snapshot = komplettes RAM-Image + Festplatten-Image |

Forensisch: Ein Hypervisor-RAM-Dump des Hosts ermöglicht die Analyse aller Gast-VMs, auch wenn deren eigene virtuelle Festplatte verschlüsselt ist.

### Container — keine Virtualisierung, sondern Isolation

Container (Docker, Podman, LXC) sind keine VMs:
- **Kein eigener Kernel** — sie nutzen den Host-Kernel
- Isolation über Linux-Namespaces (PID, NET, MNT, UTS, IPC, User, Cgroup)
- **Forensische Implikation:** Container-Prozesse sind Host-Prozesse! `ps aux` auf dem Host zeigt Container-Prozesse mit normalen PIDs
- Container-Images als Layer über OverlayFS/Overlay2 — die unteren Schichten sind unveränderlich und enthalten das Basis-Image

## Praktische Anwendung

- `uname -a` — Kernel-Version (Linux)
- `lsmod | head -20` — geladene Kernel-Module
- `driverquery /v` (Windows) — Treiber mit Pfad
- `systeminfo | findstr /B /C:"OS"` — OS-Version (Windows)
- `docker ps` und `ps aux | grep containerd` — Container-Prozesse finden

## Quellen / Weiterführendes

- Tanenbaum, A.S.: Moderne Betriebssysteme
- [Linux Kernel Map](https://makelinux.github.io/kernel/map/) — interaktive Übersicht
