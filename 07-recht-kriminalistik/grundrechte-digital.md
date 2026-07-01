---
title: "Grundrechte im digitalen Raum"
tags: [grundrechte, art10-gg, it-grundrecht, verhaeltnismaessigkeit, dns-sperren, vorratsdatenspeicherung]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

> **Disclaimer:** Keine Rechtsberatung. Dies ist eine allgemeine Einführung. Gesetze und Rechtsprechung ändern sich fortlaufend und sind jurisdiktionsabhängig.

Grundrechte schützen Bürger vor staatlichen Eingriffen — auch und gerade im digitalen Raum. Für Forensiker sind sie die Leitplanken: Was du tun darfst und was nicht, hängt maßgeblich von der Abwägung zwischen Grundrechtseingriff und Ermittlungsinteresse ab.

## Details

### Artikel 10 GG — Brief-, Post- und Fernmeldegeheimnis

- Schützt die private, nicht-öffentliche Kommunikation
- **Fernmeldegeheimnis** umfasst: Telefonie, E-Mail, Messenger, Internettelefonie — alles, was über Telekommunikationsnetze läuft
- Die Kommunikation ist geschützt, solange sie "unterwegs" ist — auf dem Endgerät gespeicherte Nachrichten fallen NICHT unter Art. 10, sondern unter das IT-Grundrecht
- Eingriff nur durch Gesetz (z.B. §§ 100a ff. StPO für TKÜ)

### IT-Grundrecht (BVerfG 2008)

Das Bundesverfassungsgericht schuf 2008 das "Grundrecht auf Gewährleistung der Vertraulichkeit und Integrität informationstechnischer Systeme":
- Schützt das "persönliche IT-System" als Ganzes (Laptop, Smartphone, Tablet)
- Staatliche Online-Durchsuchung ("Bundestrojaner") nur unter strengen Voraussetzungen
- Quellen-TKÜ (Abhören VOR der Verschlüsselung) erfordert besondere Rechtfertigung

### Verhältnismäßigkeitsgrundsatz

Jeder Grundrechtseingriff muss verhältnismäßig sein:

1. **Legitimer Zweck:** Strafverfolgung, Gefahrenabwehr
2. **Geeignetheit:** Maßnahme muss den Zweck fördern
3. **Erforderlichkeit:** Gibt es kein milderes, gleich geeignetes Mittel?
4. **Angemessenheit (Verhältnismäßigkeit i.e.S.):** Schwere des Eingriffs vs. Bedeutung des verfolgten Zwecks

Forensik-Beispiel: Die pauschale, anlasslose Beschlagnahme aller Smartphones in einer Stadt wäre unverhältnismäßig; die gezielte Durchsuchung eines konkreten Tatverdächtigen nicht.

### Einschlägige Grundrechte für Cyber-Forensiker

| Grundrecht | Artikel (GG) | Forensischer Bezug |
|-----------|-------------|-------------------|
| Allgemeines Persönlichkeitsrecht | Art. 2 I + 1 I | Informationelle Selbstbestimmung |
| Wohnungsfreiheit | Art. 13 | Durchsuchung von Wohnung/Server-Räumen |
| Fernmeldegeheimnis | Art. 10 | Netzwerk-Traffic, E-Mail-Beschlagnahme |
| IT-Grundrecht | Art. 2 I + 1 I (BVerfG) | Online-Durchsuchung, Quellen-TKÜ |
| Meinungsfreiheit | Art. 5 | Beschlagnahme von Publizisten-Daten |
| Eigentum | Art. 14 | Beschlagnahme und Einziehung von Hardware |

### Praxis-Probleme

- **Encryption-Dilemma:** Art. 10 + IT-Grundrecht schützen Verschlüsselung — aber Ermittler brauchen Zugriff
- **Cloud-Daten:** Auf welchem Hoheitsgebiet liegen die Daten? (US-Cloud, deutscher Nutzer → US-Recht?)
- **Staatliche Backdoors:** Immer wieder politisch gefordert, kryptografisch problematisch

## Praktische Anwendung

- Jeder forensische Eingriff benötigt eine Rechtsgrundlage (StPO, Polizeigesetze, BSI-Gesetz)
- Schwere des Eingriffs dokumentieren → Verhältnismäßigkeit belegbar machen
- Bei Grundrechtsverletzung: Beweisverwertungsverbot möglich

## Quellen / Weiterführendes

- BVerfG, Urteil vom 27.02.2008 (Online-Durchsuchung / IT-Grundrecht)
- BVerfG, Urteil vom 20.04.2016 (BKAG-Urteil)
