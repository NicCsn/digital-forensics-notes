---
title: "Dateisysteme im Überblick: FAT, NTFS, ext4, APFS und mehr"
tags: [filesystem, fat, ntfs, ext4, apfs, zfs, refs, inode, journaling, slack-space]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Ein Dateisystem organisiert, wie Daten auf einem Speichermedium abgelegt, gefunden und verwaltet werden. Unterschiedliche Betriebssysteme nutzen unterschiedliche Dateisysteme — jedes mit eigenen Metadaten, Zeitstempeln und Strukturen, die forensisch relevant sind.

## Details

### FAT (File Allocation Table)

- Varianten: FAT12, FAT16, FAT32, exFAT
- Einfache Struktur: Bootsektor → FAT-Tabelle(n) → Root-Verzeichnis → Datenbereich
- Kein Journaling, keine Berechtigungen — verbreitet auf USB-Sticks, SD-Karten
- Forensisch: Gelöschte Dateien = `E5`-Marker im ersten Byte des Dateinamens, Cluster-Einträge auf 0

### NTFS (New Technology File System)

- Standard unter Windows. MFT (Master File Table) als zentrale Metadaten-Struktur (je Eintrag 1024 Bytes)
- Journaling über $LogFile und $UsnJrnl (Update Sequence Number Journal)
- $MFT, $Bitmap, $LogFile, $UsnJrnl, $Secure (ACLs), $Extend sind die wichtigen Metadaten-Dateien
- Alternativen Datenstrom (ADS), Komprimierung, EFS-Verschlüsselung, Sparse Files

### ext4 (Fourth Extended Filesystem)

- Linux-Standard. Inode-basiert, Journaling (3 Modi: journal, ordered, writeback), extents statt Block-Zeigern
- Kein nativer crtime-Zeitstempel vor Kernel 4.11 (`statx()` liefert ihn jetzt)
- Delayed Allocation: Daten-Blöcke werden verzögert zugewiesen → fragmentierungsarme Ablage, aber Risiko bei Absturz

### APFS (Apple File System)

- macOS/iOS-Standard. Copy-on-Write, Snapshots, Space Sharing, native Verschlüsselung
- Optimiert für SSDs: keine Defragmentierung nötig
- Snapshots = Zeitmaschine-Effekt: alte Dateiversionen sind als Snapshots abrufbar

### exFAT — der FAT-Nachfolger

- Microsofts Dateisystem für Flash-Speicher >32 GB (SDXC, große USB-Sticks)
- Kein Journaling, aber freie Cluster werden per Bitmap statt verketteter Liste verwaltet
- Forensisch: Ähnlich simpel wie FAT, aber mehr Metadaten (UTC-Zeitstempel!)

### ReFS (Resilient File System)

- Microsofts Server-Dateisystem (Windows Server). Entwickelt für Datenintegrität: Checksummen für Metadaten und Daten
- Keine ADS, keine EFS, kein Booten — absichtlich reduzierter Funktionsumfang für Stabilität

### ZFS — Das Schweizer Offiziersmesser

- Ursprünglich von Sun (Solaris), heute OpenZFS auf Linux/FreeBSD
- Copy-on-Write, Snapshots, Kompression, Deduplikation, RAID-Z
- Forensisch: ZFS-Datasets können über mehrere Platten verteilt sein — Rekonstruktion komplex

### Forensischer Vergleich

| Feature | FAT | NTFS | ext4 | APFS | ZFS |
|---------|-----|------|------|------|-----|
| Journaling | ❌ | ✅ $LogFile | ✅ 3 Modi | ✅ Copy-on-Write | ✅ ZIL |
| Zeitstempel | 2 (Write, Access) | 4 (MACE: Modified, Accessed, Created, Entry) | 4 (atime, mtime, ctime, crtime) | Nanosekunden | Nanosekunden |
| ADS | ❌ | ✅ | ❌ (xattr) | ❌ (xattr) | ❌ (xattr) |
| Kompression | ❌ | ✅ | ❌ | ✅ | ✅ |
| Verschlüsselung | ❌ | ✅ EFS | ❌ (LUKS darunter) | ✅ nativ | ✅ nativ |
| Snapshots | ❌ | ❌ (VSS extern) | ❌ | ✅ | ✅ |
| Max. Dateigröße | 4 GB (FAT32) | 16 EB | 16 TB | 8 EB | 16 EB |

## Praktische Anwendung / Befehle

- `fsstat image.dd` (Sleuthkit) — Dateisystem-Informationen auslesen
- `fls -r image.dd` — Dateilisting rekursiv (auch gelöschte)
- `icat image.dd <inode>` — Datei-Inhalt per Inode extrahieren
- `istat image.dd <inode>` — Metadaten eines Inodes anzeigen

## Quellen / Weiterführendes

- [Wikipedia: File System](https://en.wikipedia.org/wiki/File_system)
- [Sleuthkit Wiki](https://wiki.sleuthkit.org/)
- Carrier, B. (2005): *File System Forensic Analysis*
