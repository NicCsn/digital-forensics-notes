---
title: "Digitale Beweismittel: Grundprinzipien"
tags: [digital-evidence, admissibility, acpo, chain-of-custody, beweisrecht]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

> **Disclaimer:** Diese Notiz bietet eine allgemeine, beispielhafte Darstellung grundlegender Prinzipien im Umgang mit digitalen Beweismitteln. Sie stellt **keine Rechtsberatung** dar und erhebt keinen Anspruch auf Vollständigkeit. Die tatsächlichen Anforderungen sind stark jurisdiktionsabhängig — konsultiere im Ernstfall juristische Fachpersonen.

Digitale Beweismittel umfassen alle Daten, die in digitaler Form gespeichert oder übertragen werden und in einem Gerichtsverfahren als Beweis dienen können: E-Mails, Logdateien, Fotos, Datenbankinhalte, Browserverläufe, GPS-Tracks und vieles mehr.

## Details

### Zulässigkeit (Admissibility)

Damit digitale Beweismittel vor Gericht zugelassen werden, müssen sie in vielen Rechtsordnungen folgende Hürden nehmen:

- **Relevanz:** Das Beweismittel muss für den Fall von Bedeutung sein
- **Authentizität:** Es muss glaubhaft sein, dass die Daten echt und unverändert sind
- **Hearsay-Regeln:** Digitale Aufzeichnungen können je nach Rechtsordnung als Hörensagen gelten und müssen unter eine Ausnahmeregelung fallen (z.B. Business Records Exception)
- **Best Evidence Rule:** Grundsätzlich ist das Original vorzulegen — im digitalen Kontext wird ein forensisch korrektes Abbild (Image) oder ein als "original" anerkannter Ausdruck akzeptiert

### ACPO-Prinzipien (UK)

Die ACPO-Guidelines sind eine weit verbreitete Referenz, auch außerhalb des UK:

1. Kein Handeln von Ermittlungspersonen darf Beweisdaten verändern
2. Zugriff auf Originaldaten nur durch kompetente Personen, die ihre Handlungen erklären können
3. Vollständige Audit-Trail-Dokumentation aller Prozesse
4. Der Untersuchungsleiter trägt die Gesamtverantwortung

Diese Prinzipien sind in England und Schottland gerichtlich anerkannt, ihre Anwendung ist aber formell freiwillig.

### ADAM-Prinzipien

Erweiterung der ACO-Prinzipien (Adams, 2012) mit Fokus auf generelle Anwendbarkeit:

- Zusätzlich zu ACPO: Persönliche und Gerätesicherheit, Rechte Betroffener, organisatorische Richtlinien, Kommunikation mit Stakeholdern

### Authentifizierung

- Ein häufiger Angriff vor Gericht: "Digitale Daten kann man leicht fälschen"
- US-Rechtsprechung: Die bloße *Möglichkeit* der Manipulation begründet noch keine Unzuverlässigkeit (US v. Bonallo, 1988)
- Entscheidend: Nachweis einer intakten Chain of Custody + forensisch saubere Methodik

### Chain of Custody

- Lückenlose Dokumentation aller Personen, die Zugriff auf das Beweismittel hatten
- Pro Übergabe: Datum, Uhrzeit, Grund der Übergabe, übergebende und empfangende Person
- Protokollierung sämtlicher forensischer Arbeitsschritte

## Praktische Anwendung / Befehle

- CoC-Formular digital oder physisch führen → Vorlagen sind online verfügbar
- Hash-Werte als Integritätsnachweis: `sha256sum image.dd`
- Forensik-Tools wie Autopsy/FTK dokumentieren Aktionen automatisch im Case-Log

## Quellen / Weiterführendes

- [Wikipedia: Digital Evidence](https://en.wikipedia.org/wiki/Digital_evidence)
- [ACPO Good Practice Guide for Digital Evidence v5](https://www.digital-detective.net/digital-forensics-documents/ACPO_Good_Practice_Guide_for_Digital_Evidence_v5.pdf)
- Adams, R. (2012): *The Advanced Data Acquisition Model (ADAM)*
- Casey, E. (2011): *Digital Evidence and Computer Crime*
