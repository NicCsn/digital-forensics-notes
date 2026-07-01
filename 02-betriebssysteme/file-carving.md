---
title: "File Carving — Gelöschte Dateien wiederherstellen"
tags: [file-carving, datenrettung, header-footer, scalpel, foremost, geloeschte-dateien]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

File Carving ist die Wiederherstellung von Dateien ohne Dateisystem-Metadaten — rein anhand der Rohdaten auf dem Datenträger. Wenn eine Datei gelöscht und der Dateisystem-Eintrag überschrieben wurde, ist Carving oft die letzte Chance.

## Details

### Wie Carving funktioniert

1. **Header/Footer-Suche:** Jede Datei beginnt mit einer eindeutigen Signatur
   - JPEG: `FF D8 FF E0` / `FF D9`
   - PDF: `25 50 44 46` (%PDF) / `25 25 EOF`
   - ZIP: `50 4B 03 04` / End-Of-Central-Directory
   - PNG: `89 50 4E 47 0D 0A 1A 0A` / `IEND`

2. **Block-basiertes Carving:** Alle Daten zwischen Header und Footer extrahieren. Problem: Fragmentierung

3. **Smart Carving / Struktur-Carving:** Die innere Struktur der Datei validieren (z.B. JPEG-Marker, ZIP-CRC)

### Fragmentierungsproblem

Wenn eine Datei nicht am Stück gespeichert wird (typisch bei stark fragmentierten Dateisystemen wie FAT), kann einfaches Header/Footer-Carving versagen. Lösungen:
- **Bifragment Gap Carving:** Unterschiedliche Längen zwischen Header und Footer testen und Struktur prüfen
- **Smart Carving (z.B. PhotoRec):** Kennt die interne Struktur und validiert

### Tools

| Tool | Typ | Besonderheit |
|------|-----|-------------|
| `foremost` | Header/Footer | Einfach, schnell, basierend auf `/etc/foremost.conf` |
| `scalpel` | Header/Footer | Fork von foremost, mehr Konfiguration |
| `photorec` | Smart Carving | Teil von TestDisk, 480+ Dateiformate, validiert Struktur |
| `bulk_extractor` | Stream-basiert | Extrahiert URLs, E-Mails, IPs — nicht ganzes File |
| `magicrescue` | Header/Footer | Erweiterbar per Magic-Dateien |

### Praxis: File Carving mit foremost

```bash
# Installation
sudo apt install foremost

# Carving auf einem Image
foremost -t jpg,png,pdf -i image.dd -o /output/

# Carving mit eigener Signatur-Datei (z.B. für proprietäres Format)
foremost -c /etc/foremost.conf -i image.dd -o /output/
```

### Carving in der forensischen Praxis

1. **Vor dem Carving:** Image hashen (SHA-256) — Carving verändert das Image nicht, aber das Protokoll muss lückenlos sein
2. **In unallocated Space:** Der spannendste Bereich — was zwischen und nach Partitionen liegt
3. **In Slack Space:** Der ungenutzte Rest eines Clusters kann Daten der Vorgängerdatei enthalten
4. **In Hibernation-/Swap-Files:** Komplette RAM-Inhalte können gelöschte Dateien enthalten

### Einschränkungen

- Keine Dateinamen, keine Metadaten (außer, was im File selbst steht, z.B. EXIF)
- Bei Fragmentierung unvollständig
- Bei Solid-State-Drives (SSDs): TRIM löscht Daten endgültig

## Praktische Anwendung

- `foremost -t all -i /dev/sdb1 -o /mnt/forensics/carved/`
- `photorec /dev/sdc1` — interaktiv, sehr mächtig
- Nach dem Carving: `find /output/ -type f | wc -l` — wie viele Dateien wurden gefunden?

## Quellen / Weiterführendes

- [Foremost Wiki](https://github.com/korczis/foremost)
- Carrier, B.: File System Forensic Analysis, Kapitel 8
