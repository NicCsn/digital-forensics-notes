---
title: "Strafrecht Allgemeiner Teil: Grundprinzipien"
tags: [strafrecht, tatbestand, rechtswidrigkeit, schuld, vorsatz, fahrlaessigkeit]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

> **Disclaimer:** Keine Rechtsberatung. Allgemeine, beispielhafte Darstellung. Die konkrete Rechtslage hängt von der jeweiligen Jurisdiktion ab.

Das Strafrecht definiert, welches Verhalten strafbar ist und welche Rechtsfolgen es hat. Das Verständnis des dreistufigen Deliktsaufbaus (Tatbestand → Rechtswidrigkeit → Schuld) ist für jeden Cyber-Forensiker essenziell, weil forensische Funde genau auf diese drei Ebenen einzahlen.

## Details

### Der dreistufige Deliktsaufbau

```
Tatbestand
├── Objektiver Tatbestand (Tathandlung, Taterfolg, Kausalität)
└── Subjektiver Tatbestand (Vorsatz / Fahrlässigkeit)
        │
        ▼
Rechtswidrigkeit
├── Grundsätzlich durch Tatbestandserfüllung indiziert
└── Rechtfertigungsgründe: Notwehr, Einwilligung...
        │
        ▼
Schuld
├── Schuldfähigkeit
├── Unrechtsbewusstsein
└── Entschuldigungsgründe
```

### Objektiver Tatbestand

- **Tathandlung:** Was wurde getan? (z.B. "Eindringen in ein fremdes System")
- **Taterfolg:** Was ist das Ergebnis? (z.B. "Daten wurden kopiert")
- **Kausalität:** Hat die Handlung den Erfolg bewirkt? (Conditio-sine-qua-non-Formel)
- **Objektive Zurechnung:** War die Handlung rechtlich missbilligt und der Erfolg vorhersehbar?

Forensisch: Deine Analyse beweist die Tathandlung (Logs zeigen Zugriff) und den Taterfolg (Datenabfluss in Firewall-Logs).

### Subjektiver Tatbestand: Vorsatz und Fahrlässigkeit

| Form | Beschreibung | Cyber-Beispiel |
|------|-------------|----------------|
| **dolus directus 1. Grades** (Absicht) | Täter will den Erfolg | "Ich WILL die Daten stehlen" |
| **dolus directus 2. Grades** (direkter Vorsatz) | Täter weiß, dass Erfolg eintritt | "Ich installiere einen Keylogger — mir ist klar, dass ich damit Passwörter erlange" |
| **dolus eventualis** (Eventualvorsatz) | Täter hält Erfolg für möglich und nimmt ihn billigend in Kauf | "Ich scanne das gesamte Firmennetz nach offenen Ports — wenn ich dabei zufällig Daten finde, nehm ich sie mit" |
| **bewusste Fahrlässigkeit** | Täter vertraut auf Nichteintritt des Erfolgs | "Ich hab 'mal kurz' eine ungesicherte DB geöffnet, dachte, es merkt schon keiner" |
| **unbewusste Fahrlässigkeit** | Täter erkennt die Gefahr gar nicht | Administrator vergisst Firewall-Update |

### Täterschaft und Teilnahme

- **Allein-Täter:** Eine Person allein
- **Mittäterschaft:** Gemeinsamer Tatplan + gemeinsame Tatausführung
- **Mittelbare Täterschaft:** Täter benutzt einen anderen als "Werkzeug" (z.B. ahnungslosen Dritten oder Botnet)
- **Anstiftung:** Jemanden vorsätzlich zur Tat bestimmen
- **Beihilfe:** Vorsätzliche Hilfeleistung zur Tat

Forensisch: Bei RaaS (Ransomware-as-a-Service): Wer ist Täter, wer ist Gehilfe? Der Malware-Entwickler? Der Affiliate, der sie verteilt? Der Bulletproof-Hoster?

### IT-spezifische Delikte (Deutsches StGB — exemplarisch)

| Norm | Delikt | Cyber-Interpretation |
|------|--------|---------------------|
| § 202a StGB | Ausspähen von Daten | Zugriff auf fremde, gesicherte Daten ohne Berechtigung |
| § 202b StGB | Abfangen von Daten | Mitlesen von Netzwerkverkehr (z.B. Sniffing) |
| § 202c StGB | Vorbereiten des Ausspähens | Besitz/Herstellen von Hacking-Tools (wenn zur Tat bestimmt) |
| § 263a StGB | Computerbetrug | Manipulation von Datenverarbeitungsvorgängen |
| § 269 StGB | Fälschung beweiserheblicher Daten | Manipulation von Logdateien |
| § 303a StGB | Datenveränderung | Löschen/Verändern fremder Daten |
| § 303b StGB | Computersabotage | DDoS-Angriff, Ransomware |

## Praktische Anwendung

- Forensische Funde → den drei Ebenen zuordnen: Welcher Teil des Delikts wird dadurch bewiesen?
- Beispiel: Login-Log zur Tatzeit (obj. Tatbestand), Tool-Nutzung zeigt Vorsatz (subj. Tatbestand)

## Quellen / Weiterführendes

- Beulke, W.: Strafrecht Allgemeiner Teil
- Fischer, T.: Strafgesetzbuch (Kommentar)
