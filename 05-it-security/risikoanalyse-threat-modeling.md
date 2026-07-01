---
title: "Risikoanalyse und Threat Modeling"
tags: [risikoanalyse, threat-modeling, stride, dread, risikomatrix, eintrittswahrscheinlichkeit]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Risikoanalyse bewertet, was passieren kann und wie schlimm es wäre. Threat Modeling identifiziert systematisch, wer was wie angreifen könnte. Beide sind Voraussetzung für effektive Verteidigung — und im Incident-Response-Fall für die Schadensbewertung.

## Details

### Grundbegriffe

- **Asset:** Was ist zu schützen? (Server, Datenbank, Source-Code)
- **Bedrohung (Threat):** Wer oder was könnte Schaden anrichten? (Hacker, Innentäter, Naturkatastrophe)
- **Schwachstelle (Vulnerability):** Welche Lücke kann ausgenutzt werden? (Ungeschlossener Port, veraltete Software)
- **Risiko:** Eintrittswahrscheinlichkeit × Schadensausmaß

### STRIDE (Microsoft Threat Modeling)

| Buchstabe | Bedrohung | Verletztes Schutzziel | Beispiel-Angriff |
|-----------|-----------|----------------------|------------------|
| **S**poofing | Identitäts-Täuschung | Authentizität | Falsche Absender-E-Mail |
| **T**ampering | Manipulation | Integrität | Daten während Übertragung ändern |
| **R**epudiation | Abstreitbarkeit | Nicht-Abstreitbarkeit | Logs löschen, Aktion abstreiten |
| **I**nfo Disclosure | Datenleck | Vertraulichkeit | SQLi → Datenbank-Dump |
| **D**OS | Denial of Service | Verfügbarkeit | DDoS, Server-Crash |
| **E**levation of Privilege | Rechte-Ausweitung | Authorisierung | User → Admin durch Exploit |

### DREAD (Risiko-Scoring)

| Dimension | 0-10 | Bewertung |
|-----------|------|-----------|
| **D**amage | 8 | Wie groß der Schaden (Datenverlust aller Kundendaten) |
| **R**eproducibility | 10 | Jederzeit reproduzierbar (öffentlicher Exploit) |
| **E**xploitability | 5 | Braucht Insider-Wissen (nicht trivial) |
| **A**ffected Users | 7 | Viele Nutzer betroffen (aber nicht alle) |
| **D**iscoverability | 9 | Leicht zu entdecken (Port-Scan zeigt offene Ports) |

**Score = (D+R+E+A+D) / 5 = 7.8** → Hohes Risiko, Gegenmaßnahmen priorisieren

### Risiko-Matrix (qualitativ)

| Eintrittswahrscheinlichkeit → <br> Schadensausmaß ↓ | Gering | Mittel | Hoch |
|---|---|---|---|
| **Katastrophal** | Mittel | Hoch | **Kritisch** |
| **Groß** | Niedrig | Mittel | Hoch |
| **Klein** | Niedrig | Niedrig | Mittel |

### Forensische Anwendung

- **Vor dem Vorfall:** Threat Model = wo müssen Logs sein? Was wird überwacht?
- **Während des Vorfalls:** STRIDE-Fragen: Was könnte der Angreifer als Nächstes tun? (Was steht im Threat Model?)
- **Nach dem Vorfall:** Risikobewertung des entstandenen Schadens (Welche Assets betroffen? Ausmaß?)

### Beispiel-Threat-Model: Web-Shop

1. Asset: Kundendatenbank
2. Bedrohung: Externer Angreifer stiehlt Kundendaten
3. Angriffsvektoren: SQL Injection (STRIDE: Information Disclosure), gestohlene Admin-Credentials (Spoofing)
4. Gegenmaßnahmen: Input-Validierung, MFA für Admins, WAF
5. Detektions-Maßnahmen: WAF-Logs, Alerting bei ungewöhnlich vielen DB-Abfragen

## Praktische Anwendung

- Microsoft Threat Modeling Tool (kostenlos)
- OWASP Threat Dragon (Open-Source)
- Einfaches Brainstorming: Whiteboard + STRIDE-Kategorien + Post-its

## Quellen / Weiterführendes

- Shostack, A.: Threat Modeling — Designing for Security
- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)
