---
title: "Forensische Dokumentation und Berichterstattung"
tags: [dokumentation, bericht, gerichtsfest, reporting, forensische-methodik]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Die beste forensische Analyse ist wertlos, wenn sie nicht dokumentiert wird. Der Bericht ist das Produkt der Untersuchung — er muss vor Gericht bestehen, für Laien verständlich sein und wissenschaftlichen Standards genügen. Ein schlechter Bericht kann einen ansonsten soliden Fall zerstören.

## Details

### Struktur eines forensischen Berichts

```
1. Zusammenfassung (Executive Summary)
   - Was wurde untersucht? Wer? Wann? Kernergebnisse in 3-5 Sätzen
2. Einleitung / Auftrag
   - Wer beauftragte die Untersuchung? Was war die Fragestellung?
3. Methodik
   - Welche Tools? Welche Versionen? Welche Schritte?
4. Untersuchte Objekte
   - Liste aller Asservate mit Seriennummer, Hash, Beschreibung
5. Chain of Custody
   - Wann wurde was von wem entgegengenommen/weitergegeben?
6. Analyse und Ergebnisse
   - Detaillierte Beschreibung aller Funde mit Zeitangaben
7. Bewertung und Interpretation
   - Was bedeuten die Funde im Kontext des Falls?
8. Anhänge
   - Hash-Listen, Log-Auszüge, Screenshots
```

### Grundprinzipien guter Dokumentation

- **Nachvollziehbarkeit:** Ein Dritter mit gleichen Tools und Daten muss zum gleichen Ergebnis kommen (ACPO Prinzip 3)
- **Objektivität:** Nur Fakten, keine Spekulation ohne Kennzeichnung ("Vermutung", "Annahme")
- **Vollständigkeit:** Auch Fehlversuche und Sackgassen dokumentieren — sie zeigen methodische Sorgfalt
- **Verständlichkeit:** Für technische und nicht-technische Leser schreiben (Staatsanwalt, Richter, Jury)
- **Reproduzierbarkeit:** Jedes Ergebnis muss auf einen bestimmten Untersuchungsschritt zurückführbar sein

### Beweiswürdigung

Nicht alles, was du findest, ist ein Beweis. Deine Aufgabe ist die Einordnung:

- **Direkter Beweis:** Die gefundene Datei IST die Tatwaffe (z.B. Ransomware-Executable)
- **Indizienbeweis:** Die gefundenen Spuren deuten AUF eine Tat hin (z.B. Login zur Tatzeit = der Nutzer war am System)
- **Kontextualisierung:** Eine isolierte Spur sagt wenig — die Kombination macht den Fall (Login + USB-Anschluss + Datei-Download = Datenabfluss)

### Werkzeuge für die Dokumentation

| Tool | Zweck |
|------|-------|
| **Markdown** (dieses Repo!) | Strukturierte Notizen, versionierbar |
| **Cherrytree / Notion** | Hierarchische Notiz-Apps |
| **Dradis** | Reporting-Plattform für Pentests und Forensik |
| **Autopsy** | Integrierte Case-Management- und Reporting-Funktion |
| **Xmind / draw.io** | Visualisierung von Zusammenhängen (Timeline, Link-Analyse) |

### Häufige Fehler

- **Zeitzonen-Chaos:** Zeitstempel ohne Zeitzonen-Angabe (UTC? Lokalzeit? Lokalzeit+DST?)
- **Fehlende Hash-Protokolle:** "Trust me, das Image ist unverändert" zählt nicht
- **Tool-Versionen nicht dokumentiert:** Später nicht reproduzierbar
- **Ungenaue Sprache:** "Die Datei wurde gelöscht" vs. "Der MFT-Eintrag wurde als gelöscht markiert und der Cluster-Eintrag in der FAT auf 0x00 gesetzt"
- **Persönliche Meinung als Fakt:** "Offensichtlich hat der Täter..." → "Die Zeitstempel zeigen, dass..."

### Beispiel: Ausschnitt aus einem forensischen Bericht

```
Am 15.03.2025 um 14:30 Uhr wurde das Asservat "Seagate Barracuda 1TB, SN: ABC123"
vom Unterzeichner in einem versiegelten Beweismittelbeutel entgegengenommen 
(Chain-of-Custody-Referenz: COC-2025-0047).

Das Asservat wurde mittels Tableau T8u Forensic Bridge (FW 1.4.2) an den Analyse-Rechner
angeschlossen. Eine Schreibschutz-Prüfung wurde erfolgreich durchgeführt.

Vor dem Imaging wurde der SHA-256-Hash des Originals berechnet:
  e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

Das Image wurde mit guymager v0.8.13 im E01-Format erstellt und unter der Referenz
FALL-2025-042_IMAGE-001 gespeichert. Der Hash des Images stimmt mit dem Hash des
Originals überein.

-> Ergebnis: Integrität gewahrt. Image ist forensisch korrekt.
```

## Praktische Anwendung

- Diese Repo-Templates: `note-template.md`, `writeup-template.md`
- Case-Management mit Autopsy oder FTK
- Für jedes neue Projekt: Template kopieren und ausfüllen

## Quellen / Weiterführendes

- ACPO Good Practice Guide for Digital Evidence
- Casey, E.: Digital Evidence and Computer Crime, Kapitel "Reporting"
