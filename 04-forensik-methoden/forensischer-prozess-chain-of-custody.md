---
title: "Forensischer Prozess und Chain of Custody"
tags: [forensik, chain-of-custody, nist, acpo, imaging, write-blocker]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Der forensische Prozess beschreibt den strukturierten Ablauf einer digitalforensischen Untersuchung von der Sicherung bis zur Berichterstattung. Zentral ist die Chain of Custody — die lückenlose Dokumentation, wer wann Zugriff auf ein Beweismittel hatte, um dessen Integrität vor Gericht belegen zu können.

## Details

### NIST-Phasenmodell (SP 800-86)

Das NIST definiert vier Hauptphasen:

1. **Collection** — Identifikation und Sicherung digitaler Beweismittel. Geräte ausschalten? Live-Analyse? Entscheidung je nach Situation
2. **Examination** — Systematische Durchsuchung der gesicherten Daten mit forensischen Werkzeugen
3. **Analysis** — Interpretation der gefundenen Artefakte im Kontext des Falls
4. **Reporting** — Nachvollziehbare Dokumentation von Methodik, Funden und Schlussfolgerungen

### ACPO-Grundprinzipien (UK)

Die vier Prinzipien der Association of Chief Police Officers sind internationaler De-facto-Standard:

1. **Keine Veränderung:** Keine Aktion darf Daten verändern, die später als Beweismittel dienen
2. **Kompetenz:** Wer Originaldaten anfassen muss, muss fachlich qualifiziert sein und sein Handeln erklären können
3. **Audit Trail:** Alle Prozessschritte müssen dokumentiert und von Dritten reproduzierbar sein
4. **Verantwortlichkeit:** Der Untersuchungsleiter trägt die Gesamtverantwortung für Gesetzes- und Prinzipientreue

### Chain of Custody

- Dokumentiert lückenlos: Wer? Wann? Was? Wo? Warum?
- Jede Übergabe des Beweismittels wird mit Datum, Uhrzeit, Person und Grund festgehalten
- Standardwerkzeuge: Chain-of-Custody-Formular, Beweismittel-Tüten mit Siegel, digitale Case-Management-Software

### Write-Blocker

- Hardware- oder Software-Lösung, die sicherstellt, dass nur lesend auf ein Speichermedium zugegriffen wird
- Hardware-Write-Blocker (z.B. Tableau, WiebeTech) sitzen zwischen Rechner und Asservat
- Software-Write-Blocker auf Betriebssystem-Ebene (z.B. Linux `blockdev --setro`)

### Hashing zur Integritätssicherung

- Vor jeder Analyse: kryptografischer Hash (SHA-256, MD5) des Original-Images erstellen
- Nach Abschluss: Hash erneut prüfen, um zu belegen, dass das Image unverändert blieb

## Praktische Anwendung / Befehle

- `sha256sum image.dd > image.sha256` — Hash vor der Analyse erstellen
- `sha256sum -c image.sha256` — Hash verifizieren
- `guymager` — GUI-Tool zum forensischen Imaging unter Linux
- `dcfldd if=/dev/sda hash=sha256 hashlog=hash.txt of=image.dd` — Forensisches dd mit Hashing

## Quellen / Weiterführendes

- [NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response](https://www.nist.gov/publications/guide-integrating-forensic-techniques-incident-response)
- [ACPO Good Practice Guide for Digital Evidence (v5)](https://www.digital-detective.net/digital-forensics-documents/ACPO_Good_Practice_Guide_for_Digital_Evidence_v5.pdf)
- Carrier, B. (2005): *File System Forensic Analysis*
