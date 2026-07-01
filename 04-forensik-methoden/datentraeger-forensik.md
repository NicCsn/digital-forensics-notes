---
title: "Datenträger-Forensik: Partitionen und Dateisysteme"
tags: [datentraeger, forensik, partition, mbr, gpt, slack-space, sleuthkit]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Die Datenträger-Forensik analysiert die Struktur von Festplatten, SSDs und USB-Sticks unterhalb der Dateiebene. Partitionstabellen, Bootsektoren, Cluster Chains, Slack Space — hier findest du Daten, die kein Dateibrowser zeigt.

## Details

### Partitionstabellen

#### MBR (Master Boot Record)
- Sektor 0: Bootloader-Code + Partitionstabelle (4 primäre Partitionen)
- Max. Adressierung: 2 TB (mit 512-Byte-Sektoren)
- Gelöschte Partition: Partitionstyp auf `00` gesetzt → Header rekonstruierbar

#### GPT (GUID Partition Table)
- Teil des UEFI-Standards, moderner Ersatz für MBR
- Schütztabelle am Anfang UND Ende (Redundanz!)
- Max. 128 Partitionen, Adressierung bis 9.4 Zettabytes
- Sehr forensisch freundlich: GPT-Header am Ende als Backup

### Dateisystem-Analyse

| Dateisystem | Wichtige Strukturen | Forensische Goldgruben |
|-------------|-------------------|----------------------|
| **NTFS** | MFT, $Bitmap, $LogFile, $UsnJrnl | Gelöschte MFT-Einträge, USN-Journal (Historie) |
| **FAT** | Bootsektor, FAT-Tabelle, Root-Verzeichnis | Als gelöscht markierte Einträge (`E5` im ersten Byte) |
| **ext4** | Superblock, Inode-Tabelle, Journal | Inodes gelöschter Dateien, Journal-Wiederholung |
| **APFS** | Container, Volumes, B-Trees, Snapshots | Snapshots = Zeitmaschine-Effekte |

### Slack Space — Daten in der Lücke

**File Slack:**
- Ein File belegt ganze Cluster, auch wenn es kleiner ist
- Der Rest des letzten Clusters ist "Slack Space" — enthält Daten der Vorgänger-Datei

**RAM Slack:**
- Bereich zwischen Dateiende und Sektor-Ende (Linux/Windows schreibt in 512-Byte-Blöcken)
- Die übrigen Bytes werden mit `00` oder Zufallsdaten aus dem RAM aufgefüllt — letztere können Beweise sein

### Unallocated Space

- Bereich, der keiner aktiven Datei zugeordnet ist
- Enthält gelöschte Dateien, alte Partitionen, temporäre Daten
- Hier arbeitet File Carving

### Sleuth Kit (TSK) — Standardwerkzeuge

```bash
mmls image.dd          # Partition-Layout anzeigen
fsstat -o 2048 image.dd # Dateisystem-Info (Offset der Partition)
fls -r -o 2048 image.dd # Rekursives File Listing (auch gelöschte!)
icat -o 2048 image.dd 5  # Datei-Inhalt per Inode extrahieren
```

## Praktische Anwendung

- `mmls` → Offset der Hauptpartition finden (z.B. startet bei Sektor 2048)
- Mit Offset arbeiten: `fls -o 2048 image.dd`
- Detaillierte Analyse: `fsstat -o 2048 image.dd` → Cluster-Größe, Block-Count, Journal-Info
- Alle gelöschten Dateien: `fls -d -r -o 2048 image.dd`

## Quellen / Weiterführendes

- Carrier, B.: File System Forensic Analysis
- [Sleuth Kit Wiki](https://wiki.sleuthkit.org/)
