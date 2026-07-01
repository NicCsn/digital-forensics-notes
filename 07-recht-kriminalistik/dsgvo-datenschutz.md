---
title: "DSGVO und Datenschutz"
tags: [dsgvo, datenschutz, personenbezogene-daten, betroffenenrechte, auftragsverarbeitung, meldepflicht]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

> **Disclaimer:** Keine Rechtsberatung. Allgemeine Einführung in die DSGVO-Systematik.

Die Datenschutz-Grundverordnung (DSGVO) regelt EU-weit den Umgang mit personenbezogenen Daten. Für Forensiker ist sie doppelt relevant: Als Schutzmaßstab (welche Daten darfst du überhaupt analysieren?) und als Rechtsquelle für Meldepflichten nach einem Vorfall.

## Details

### Grundprinzipien der DSGVO (Art. 5)

| Prinzip | Bedeutung | Forensische Implikation |
|---------|-----------|------------------------|
| **Rechtmäßigkeit** | Datenverarbeitung nur mit Rechtsgrundlage (Einwilligung, Vertrag, berechtigtes Interesse) | Forensische Analyse = Datenverarbeitung → braucht Rechtsgrundlage! |
| **Zweckbindung** | Daten nur für festgelegten Zweck | Forensische Daten nicht zweckentfremden (z.B. Mitarbeiter-Überwachung unter dem Deckmantel "Sicherheitsanalyse") |
| **Datenminimierung** | Nur Daten, die für den Zweck nötig sind | Nur Logs des betroffenen Zeitraums analysieren, nicht alles pauschal |
| **Richtigkeit** | Daten müssen korrekt und aktuell sein | Forensische Funde auf Richigkeit prüfen (manipulierte Logs?) |
| **Speicherbegrenzung** | Nicht länger als nötig speichern | Forensische Images nach Fallabschluss löschen/anonymisieren? |
| **Integrität und Vertraulichkeit** | Angemessene Sicherheitsmaßnahmen | Verschlüsselte Speicherung forensischer Daten |

### Personenbezogene Daten

- **Definition:** Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen
- Beispiele in der Forensik: IP-Adressen (EuGH: dynamische IPs sind personenbezogen!), E-Mails, Browser-History, GPS-Daten, Mitarbeiter-Login-Daten
- **Besondere Kategorien (Art. 9):** Gesundheitsdaten, biometrische Daten, politische Meinungen → noch strengere Regeln

### Rechte der betroffenen Person

| Recht | Art. | Forensische Relevanz |
|-------|------|---------------------|
| **Auskunftsrecht** | 15 | Beschuldigter kann Auskunft über gespeicherte Daten verlangen — auch forensische Analysen? |
| **Recht auf Löschung** | 17 | Nach Fallabschluss: Forensische Kopien löschen? |
| **Recht auf Einschränkung** | 18 | Wenn Betroffener Richtigkeit bestreitet → Verarbeitung einschränken bis Klärung |

### Datenpanne und Meldepflicht (Art. 33, 34)

- **Data Breach Notification:** Innerhalb von 72 Stunden an die Aufsichtsbehörde
- Voraussetzung: Verletzung des Schutzes personenbezogener Daten
- **Hohes Risiko für Betroffene?** → Zusätzlich Benachrichtigung der Betroffenen (Art. 34)
- Forensisch: Während du noch analysierst, läuft die 72h-Frist → IR und Forensik parallel!

### Auftragsverarbeitung (Art. 28)

- Werden externe Forensik-Dienstleister beauftragt? → Auftragsverarbeitungsvertrag (AVV) nötig!
- Der Dienstleister verarbeitet personenbezogene Daten im Auftrag des Verantwortlichen

### Bußgelder

- Bis zu 20 Millionen EUR oder 4% des weltweiten Jahresumsatzes (je nachdem, was höher ist)
- Beispiel: Data Breach durch nicht behobene Schwachstelle → DSGVO-Bußgeld + Reputationsverlust

## Praktische Anwendung

- Vor jeder Analyse prüfen: Welche personenbezogenen Daten sind betroffen?
- Rechtsgrundlage dokumentieren (Einwilligung? Berechtigtes Interesse? Strafverfolgung?)
- Nach Abschluss: Aufbewahrungsfristen beachten, Daten löschen
- Datenschutz-Folgenabschätzung (DSFA) wenn hohes Risiko (Art. 35)

## Quellen / Weiterführendes

- [DSGVO Volltext](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679)
- Kühling, Buchner: DS-GVO / BDSG — Kommentar
