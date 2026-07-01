---
title: "Ethik in der Informationssicherheit"
tags: [ethik, informationssicherheit, kant, utilitarismus, privacy, moral]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

IT-Sicherheit und Forensik sind keine wertfreien Disziplinen. Jede Entscheidung — ob du eine Sicherheitslücke veröffentlichst, welche Daten du während einer forensischen Analyse erhebst oder ob du ein Lösegeld zahlst — hat eine ethische Dimension. Ethiktheorien helfen, diese Entscheidungen zu strukturieren.

## Details

### Drei zentrale Ethiktheorien

| Theorie | Kernfrage | Entscheidungsprinzip | Kritik |
|---------|-----------|---------------------|--------|
| **Deontologie (Kant)** | Was ist meine Pflicht? | Handle so, dass dein Handeln ein allgemeines Gesetz sein könnte (Kategorischer Imperativ) | Rigide — erlaubt keine Ausnahmen, auch wenn die Konsequenzen schlimm sind |
| **Utilitarismus (Bentham/Mill)** | Was bringt das größte Glück für die größte Zahl? | Maximiere den Gesamtnutzen, minimiere Schaden | Minderheitenrechte können dem "Gemeinwohl" geopfert werden |
| **Verantwortungsethik (Jonas)** | Welche Folgen hat mein Handeln für künftige Generationen? | Handle so, dass die Wirkungen deiner Handlung verträglich sind mit der Permanenz echten menschlichen Lebens | Schwer operationalisierbar |

### Ethische Dilemmata in der IT-Sicherheit

#### Dilemma 1: Vulnerability Disclosure
**Du findest eine kritische Zero-Day-Lücke in einer weit verbreiteten Software.**
- Deontologisch: Pflicht zur Meldung an den Hersteller (keine Geheimhaltung)
- Utilitaristisch: Abwägung: Wenn ich es melde → Hersteller patcht → alle geschützt. Wenn ich es verkaufe → Schaden für viele, aber persönlicher Gewinn → melden
- Problem in der Praxis: Manche Hersteller ignorieren Meldungen, Regierungen kaufen Zero-Days für Offensiv-Operationen

#### Dilemma 2: Forensische Analyse vs. Datenschutz
**Du untersuchst ein System und findest private, nicht fallrelevante Daten.**
- Deontologisch: Nicht fallrelevante Daten darfst du nicht verarbeiten (Zweckbindung)
- Utilitaristisch: Wenn das Anschauen dieser Daten unerwartet einen größeren Fall löst → gerechtfertigt?
- Rechtlich: DSGVO-Zweckbindung + Beweiserhebungsverbote

#### Dilemma 3: Ransomware — Lösegeld zahlen?
**Dein Arbeitgeber ist Opfer einer Ransomware-Attacke. Alle Backups sind ebenfalls verschlüsselt.**
- Deontologisch: Nicht zahlen (ermutigt Kriminelle, finanziert weitere Straftaten)
- Utilitaristisch: Wenn die Firma sonst pleite geht und 500 Mitarbeiter ihre Jobs verlieren → zahlen?
- Praxis: Kein offizieller Rat zur Zahlung; "no-more-ransom.org" für Entschlüsselungshilfe

### Psychologische Faktoren

- **Moral Licensing:** "Ich habe gestern eine Sicherheitslücke verantwortungsvoll gemeldet, also ist es OK, wenn ich heute eine kleine Regel biege"
- **Normalisierung von Abweichung:** Wenn jeder in meinem Team Passwörter teilt, erscheint es normal
- **Obedience to Authority (Milgram):** "Mein Chef hat gesagt, ich soll den Server hacken" — rechtfertigt das den Eingriff?

### Ethische Fragen in der Zusammenarbeit mit Strafverfolgungsbehörden

- Darfst du als Forensiker Beweise an die Polizei weitergeben, auch wenn dein Arbeitgeber das nicht will? (Whistleblowing)
- Darfst du mit Behörden kooperieren, die in deinem Heimatland vielleicht nicht die gleichen rechtsstaatlichen Standards haben?
- Darfst du forensische Analysen für einen Kunden durchführen, dessen Geschäftsmodell du moralisch ablehnst?

### Rahmenwerke für ethische Entscheidungen in IT-Security

- **ACM Code of Ethics:** "Contribute to society and human well-being", "Be honest and trustworthy", "Respect privacy"
- **(ISC)² Code of Ethics:** "Protect society, the common good, necessary public trust and confidence"
- **SANS/White-Hat-Prinzip:** Erlaubnis, Scope, Verhältnismäßigkeit, Transparenz

## Praktische Anwendung

- Vor jeder forensischen Analyse: Ethische Selbstprüfung — Warum analysiere ich? Was sind die Konsequenzen?
- Vier-Augen-Prinzip bei ethischen Grenzfragen
- Dokumentation der ethischen Abwägung im Bericht

## Quellen / Weiterführendes

- Birsch, D.: Ethical Insights
- O'Neil, C.: Weapons of Math Destruction
- [ACM Code of Ethics](https://www.acm.org/code-of-ethics)
