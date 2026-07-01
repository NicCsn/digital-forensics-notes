---
title: "Juristische Fallbearbeitung: Gutachten- und Urteilsstil"
tags: [recht, methodik, gutachtenstil, urteilsstil, subsumtion, fallloesung]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzueberblick

Juristische Fallbearbeitung folgt einer standardisierten Methodik — ob in der Klausur, Hausarbeit oder im Gutachten. Der Gutachtenstil ist die Standardmethode zur Fallloesung. Der Urteilsstil ist die gerichtliche Darstellungsform. Beide zu kennen ist fuer Cyber-Forensiker relevant, weil forensische Berichte oft gutachterlichen Charakter haben.

> **Disclaimer:** Keine Rechtsberatung. Dies ist eine Einfuehrung in die Methodik, keine Fallsammlung.

## Details

### Der Gutachtenstil — die Fallloesungsmethode

Der Gutachtenstil arbeitet sich vom Unbekannten zum Bekannten vor: Er stellt eine Hypothese auf (Obersatz), prueft sie anhand der Definition, subsumiert den Sachverhalt und zieht ein Ergebnis. JEDER Schritt wird begruendet.

**Vierschritt-Aufbau:**

```
1. Obersatz       "Fraglich ist, ob..."
2. Definition     "Unter X versteht man..."
3. Subsumtion     "Im vorliegenden Fall..."
4. Ergebnis       "Somit liegt X vor / nicht vor."
```

**Beispiel (Hausfriedensbruch, 123 StGB):**

```
Obersatz:    "Fraglich ist, ob A in eine Wohnung eingedrungen ist."
Definition:  "Eindringen setzt ein Betreten gegen oder ohne den Willen
             des Berechtigten voraus."
Subsumtion:  "Im vorliegenden Fall oeffnete A die unverschlossene Tuer
             und betrat die Wohnung des B. B hatte A nicht zum Betreten
             aufgefordert und auch keine allgemeine Erlaubnis erteilt."
Ergebnis:    "A ist somit in die Wohnung des B eingedrungen."
```

### Subsumtion — das Herzstueck

Subsumtion bedeutet: Sachverhalt unter eine Rechtsnorm fassen. Drei Fragen:

1. **Was sagt die Norm?** — Tatbestandsmerkmale herausarbeiten
2. **Was ist passiert?** — den konkreten Sachverhalt erfassen
3. **Passt der Sachverhalt unter die Norm?** — jedes Tatbestandsmerkmal einzeln abgleichen

Ein Fehler in der Subsumtion — z.B. ein uebersehenes Tatbestandsmerkmal — macht die gesamte Fallloesung angreifbar.

### Gutachtenstil vs. Urteilsstil

| Aspekt | Gutachtenstil | Urteilsstil |
|--------|-------------|-------------|
| **Reihenfolge** | Obersatz -> Definition -> Subsumtion -> Ergebnis | Ergebnis -> Begruendung |
| **Hypothese zuerst?** | Ja ("Fraglich ist...") | Nein ("Der A hat sich wegen... strafbar gemacht") |
| **Verwendung** | Klausuren, Hausarbeiten, wissenschaftliche Gutachten, forensische Berichte | Gerichtsurteile |
| **Fuer Forensiker relevant?** | JA — forensische Berichte sind Gutachten | Nur zum Lesen von Gerichtsurteilen |

### Forensisches Gutachten — Anwendung des Gutachtenstils

Ein forensischer Bericht folgt derselben Logik:

```
Analoge Struktur:
1. Obersatz     = Fragestellung ("War Nutzer X am 15.03. um 03:17 am System?")
2. Definition   = Was waere ein Beweis? ("Ein Login-Event mit Benutzername X, Zeitstempel
                  03:17 und Logon-Type 2 (interaktiv) ist ein starker Indikator.")
3. Subsumtion   = Was zeigen die forensischen Funde?
                  "Im Security-EventLog findet sich Event-ID 4624 mit TargetUserName=X,
                  LogonType=2, Zeitstempel 2025-03-15T03:17:22Z."
4. Ergebnis     = "Die forensischen Funde sprechen dafuer, dass Nutzer X am
                  15.03.2025 um 03:17 Uhr interaktiv am System angemeldet war."
```

### Der Deliktsaufbau im Strafrecht — passend zum Gutachtenstil

```
I.  Tatbestand
    A. Objektiver Tatbestand
       1. Tathandlung (was wurde getan?)
       2. Taterfolg (was ist passiert?)
       3. Kausalitaet (hat die Handlung den Erfolg bewirkt?)
       4. Objektive Zurechnung (war der Erfolg vorhersehbar?)
    B. Subjektiver Tatbestand
       1. Vorsatz / Fahrlaessigkeit
II. Rechtswidrigkeit
    - Rechtfertigungsgruende? (Notwehr, Einwilligung...)
III. Schuld
    - Schuldfaehigkeit? Entschuldigungsgruende?

Ergebnis: Strafbarkeit (+) oder (-)
```

### Praktische Tipps fuer die Fallbearbeitung

1. **Sachverhalt genau lesen** — jedes Wort kann ein Tatbestandsmerkmal sein (oder dessen Fehlen)
2. **Normen im Gesetz nachschlagen** — nicht aus dem Gedaechtnis zitieren
3. **Meinungsstreit darstellen, dann entscheiden** — "Eine Ansicht... die andere... Vorzugswuerdig ist..."
4. **Keine Wertungen ohne Begruendung** — "Das ist offensichtlich Diebstahl" zaehlt nicht
5. **Erst denken, dann schreiben** — die Subsumtion im Kopf durchspielen, bevor der Text entsteht

### Haeufige Fehler

- **Definition vergessen** — direkt subsumiert, ohne zu sagen, was das Merkmal ueberhaupt bedeutet
- **Ergebnis vorweggenommen** — Gutachtenstil heisst: erst pruefen, dann entscheiden. "A hat sich strafbar gemacht, weil..." ist Urteilsstil
- **Pauschalbegruendungen** — "Das ist so, weil das Gesetz es sagt" reicht nicht
- **Sachverhalt ergaenzen** — Zusaetzliche Fakten dazu erfinden, die nicht im Sachverhalt stehen

## Praktische Anwendung

- Jede Fallloesung mit **"Fraglich ist, ob..."** beginnen
- Subsumtion: Norm-Tatbestandsmerkmal benennen -> Sachverhaltsdetail nennen -> Verkneupfen: "Im vorliegenden Fall..."
- Forensische Berichte implizit im Gutachtenstil verfassen: Frage -> Methodik -> Funde -> Bewertung
- Gerichtsurteile (z.B. bei openJur.de) lesen, um den Urteilsstil zu verstehen

## Quellen / Weiterfuehrendes

- Beulke, W.: Strafrecht Allgemeiner Teil (mit Fallbeispielen)
- Tettinger, P.: Einfuehrung in die juristische Arbeitstechnik
- [openJur.de](https://openjur.de/) — freie Gerichtsurteile zum Lesen und Analysieren
