---
title: "Eingriffsrecht: Telekommunikationsüberwachung (TKÜ)"
tags: [eingriffsrecht, tkue, stpo, 100a, online-durchsuchung, quellen-tkue]
type: notes
difficulty: advanced
last_updated: "2026-07-01"
---

## Kurzüberblick

> **Disclaimer:** Keine Rechtsberatung. Die folgenden Ausführungen basieren auf dem deutschen Rechtsrahmen und sind jurisdiktionsabhängig.

Die Telekommunikationsüberwachung (TKÜ) ist der stärkste staatliche Eingriff in die Privatsphäre. §§ 100a ff. StPO regeln, unter welchen Voraussetzungen Kommunikation überwacht werden darf — für Forensiker relevant, weil viele Ermittlungen mit einer TKÜ-Anordnung beginnen oder auf TKÜ-Daten zurückgreifen.

## Details

### Gesetzliche Grundlagen

| Norm | Inhalt | Voraussetzungen |
|------|--------|----------------|
| **§ 100a StPO** | TKÜ (Inhaltsdaten) | Schwere Straftat (Katalog), Subsidiarität |
| **§ 100g StPO** | Verkehrsdaten (wer mit wem wann) | Straftat von erheblicher Bedeutung |
| **§ 100b StPO** | Online-Durchsuchung | Gefahr für Leib/Leben oder Staat, Richtervorbehalt |
| **§ 100e StPO** | Quellen-TKÜ | Wie § 100a, aber Überwachung vor Verschlüsselung |

### § 100a StPO — Telekommunikationsüberwachung

**Voraussetzungen:**
1. **Katalogtat:** Bestimmte, im Gesetz aufgezählte schwere Straftaten (z.B. Bildung krimineller Vereinigung, Geldwäsche, besonders schwerer Diebstahl)
2. **Bestimmte Tatsachen:** Konkreter Verdacht, kein "Fishing"
3. **Subsidiarität:** Andere Ermittlungsmethoden wären aussichtslos oder wesentlich erschwert
4. **Richtervorbehalt:** Anordnung durch Richter, bei Gefahr im Verzug durch Staatsanwaltschaft (dann binnen 3 Tagen richterliche Bestätigung)

**Umfang:** Inhaltsdaten (Wortlaut des Telefonats, E-Mail-Text, Messenger-Nachrichten)

### § 100g StPO — Verkehrsdaten

- Nicht der INHALT, sondern die VERBINDUNGSDATEN: Wer? Mit wem? Wann? Wie lange?
- Rechtlich einfacher zu erlangen als 100a (kein Katalog, aber "Straftat von erheblicher Bedeutung")
- Forensisch extrem wertvoll: IPs, Ports, Übertragungsmengen, Zeitstempel

### Kernbereichsschutz

- Der absolut geschützte Kernbereich privater Lebensgestaltung darf NICHT überwacht werden
- Beispiele: Gespräche mit Ehepartner, Tagebuch, Arzt, Anwalt, Seelsorger, Abgeordnete (§ 100d StPO)
- Wenn bei der Überwachung kernbereichsrelevante Daten anfallen → sofort löschen, nicht verwerten

### Online-Durchsuchung (§ 100b StPO)

- Heimliches Eindringen in das IT-System des Beschuldigten (Bundestrojaner)
- Nur bei Gefahr für überragend wichtige Rechtsgüter (Leib, Leben, Staat)
- Richtervorbehalt ZWINGEND (keine Gefahr im Verzug)
- Technisch: Installation von Überwachungssoftware auf Zielsystem

### Quellen-TKÜ (§ 100e StPO)

- Überwachung VOR der Verschlüsselung (z.B. bevor Signal-Nachricht verschlüsselt wird)
- Installiert Software auf dem Endgerät, die Nachrichten auf Tastaturebene abfängt
- Strengere Voraussetzungen als "normale" TKÜ, da in IT-Grundrecht eingegriffen wird

### Forensische Verwertung von TKÜ-Daten

- Beweiserhebungsverbote: Daten aus rechtswidriger TKÜ sind unverwertbar
- Beweisverwertungsverbote: Auch bei rechtmäßiger Erhebung können bestimmte Daten unverwertbar sein (z.B. kernbereichsrelevant)
- **Fernwirkung:** Führt eine rechtswidrige TKÜ dazu, dass alle darauf basierenden weiteren Funde ebenfalls unverwertbar sind? → Umstritten, Abwägung im Einzelfall

### Rechtliche Prüfreihenfolge bei TKÜ-Fällen

1. Liegt eine Katalogtat vor? (§ 100a II StPO)
2. Besteht konkreter Tatverdacht?
3. Ist die Maßnahme verhältnismäßig? (Subsidiarität!)
4. Liegt eine richterliche Anordnung vor?
5. Wurde der Kernbereichsschutz beachtet?
6. Wurden Löschungs- und Dokumentationspflichten eingehalten?

## Praktische Anwendung

- Forensiker arbeiten oft mit TKÜ-Daten: PCAPs, mitgeschnittene E-Mails → IMMER Rechtsgrundlage prüfen
- Gutachterliche Stellungnahme: Ist das gefundene Material TKÜ-rechtlich verwertbar?
- Zusammenarbeit mit Staatsanwaltschaft: Welche Norm erlaubt welche Analyse?

## Quellen / Weiterführendes

- StPO § 100a-100e
- BGH, Urteile zur Quellen-TKÜ und Online-Durchsuchung
