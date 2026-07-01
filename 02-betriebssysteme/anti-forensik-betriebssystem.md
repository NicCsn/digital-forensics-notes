---
title: "Anti-Forensik im Betriebssystem"
tags: [anti-forensik, timestomping, log-wiping, alternate-data-streams, rootkits]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Anti-Forensik umfasst alle Techniken, mit denen Angreifer ihre Spuren verwischen. Du musst diese Techniken kennen, um zu erkennen, ob und wie jemand versucht hat, eine Analyse zu erschweren — denn das ist selbst ein Beweis.

## Details

### Timestomping (Zeitstempel-Manipulation)

- Datei-Zeitstempel werden auf falsche Werte gesetzt (z.B. System-Installationsdatum), um Aktivität zu verschleiern
- Windows: `SetMACE`-Tools manipulieren `$STANDARD_INFORMATION` in der MFT
- **Erkennung:** `$FILE_NAME`-Attribute in der MFT haben eigene Zeitstempel, die Windows nicht anzeigt — Abweichungen sind verdächtig

### Log-Wiping

- Löschen oder Manipulieren von Event-Logs
- Windows: EventLog-Dateien löschen oder Events einzeln mit `wevtutil` entfernen
- Linux: `history -c`, `/var/log/auth.log` editieren/löschen
- **Erkennung:** Lücken in Log-Sequenzen, fehlende Login-Events nach Boots, SRUM-Daten unabhängig von EventLogs

### Alternate Data Streams (ADS)

- NTFS-Feature: Eine Datei kann mehrere Datenströme haben (unsichtbar für Explorer)
- Beispiel: `notepad.exe:hidden.txt` — Explorer zeigt nur Größe von `notepad.exe`
- Malware versteckt Payloads in ADS
- **Erkennung:** `dir /R` (Windows), `lads.exe`, `streams.exe` (Sysinternals)

### Rootkits

- **User-Mode:** API-Hooking (IAT/EAT), DLL-Injection — verstecken Dateien/Prozesse durch manipulierte Systemaufrufe
- **Kernel-Mode:** SSDT-Hooking, DKOM (Direct Kernel Object Manipulation) — EPROCESS-Blöcke aus der Prozessliste entfernen
- **Erkennung:** Abgleich Userspace-Liste vs. Kernel-Datenstrukturen im RAM-Dump

### Verschlüsselung und Steganografie

- Container/Volumes verschlüsseln (VeraCrypt, BitLocker)
- Dateien in Bildern/Audiodateien verstecken (Steganografie)
- **Erkennung:** Entropie-Analyse (hohe Entropie = verdächtig), Signatur-Scans

### Datei-Löschung (Sicheres Löschen)

- Tools wie `sdelete`, `shred`, `Eraser` überschreiben Daten mehrfach
- **Erkennung:** Cluster mit hoher Entropie in unallocated space = möglicherweise gewiped

## Checkliste: Wurde Anti-Forensik eingesetzt?

- [ ] MFT `$STANDARD_INFORMATION` vs. `$FILE_NAME` Zeitstempel abgleichen
- [ ] EventLog-Lücken prüfen (z.B. keine Events nach einem bekannten Login)
- [ ] Alternate Data Streams scannen
- [ ] RAM-Dump auf versteckte Prozesse analysieren (Volatility `psxview`)
- [ ] Unallocated Space auf Reste von Wipe-Tools untersuchen
- [ ] Entropie-Analyse (hohe Entropie in "leeren" Bereichen)

## Praktische Anwendung / Befehle

- `volatility -f mem.dump psxview` — versteckte Prozesse finden
- `volatility -f mem.dump mftparser` — MFT aus RAM extrahieren
- `streams.exe -s C:\` — ADS rekursiv suchen (Sysinternals)
- `fls -m / image.dd | mactime -b bodyfile` — Timeline mit allen Zeitstempeln

## Quellen / Weiterführendes

- Casey, E.: Digital Evidence and Computer Crime, Kapitel Anti-Forensics
