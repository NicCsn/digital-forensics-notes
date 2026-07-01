---
title: "Softwareentwicklungsprozess und Vorgehensmodelle"
tags: [softwareentwicklung, vorgehensmodelle, agil, scrum, wasserfall, git]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Softwareentwicklung ist mehr als Code schreiben — es braucht einen strukturierten Prozess. In der Forensik entwickelst du Tools unter hohen Qualitätsanforderungen (gerichtsfest!), was einen disziplinierten Entwicklungsprozess voraussetzt.

## Details

### Phasenmodell (Wasserfall)

1. **Anforderungsanalyse:** Was soll das Tool können? (z.B. "Extrahiere alle E-Mail-Adressen aus einer PST-Datei")
2. **Entwurf:** Architektur festlegen — Module, Datenstrukturen, Schnittstellen
3. **Implementierung:** Codieren
4. **Test:** Unit-Tests, Integrationstests, Praxistest mit Beispieldaten
5. **Wartung:** Bugfixes, Anpassungen

Nachteil: Starte Phase 1 falsch → teurer Fehler am Ende. Gut für: Projekte mit klaren, unveränderlichen Anforderungen.

### Agile / Scrum

- **Iterative Entwicklung** in 2-4 Wochen Sprints
- Tägliches Standup (15 min): Was hab ich gestern gemacht? Was mache ich heute? Blockaden?
- **Backlog → Sprint Planning → Daily Scrum → Sprint Review → Retro**
- Vorteil: Frühes Feedback, Flexibilität bei sich ändernden Anforderungen
- Im Forensik-Kontext: Perfekt für "Ich weiß noch nicht genau, wie die Daten aussehen"

### Git für Versionskontrolle

```bash
git init
git add .
git commit -m "chore: initial version of forensic tool"
git branch feature/ntfs-support
git checkout feature/ntfs-support
# ... entwickeln ...
git merge feature/ntfs-support
```

- **Commits** sollten klein und atomar sein — jeder Commit ein logischer Schritt
- **Branches** für Features, Bugfixes — nie direkt auf main entwickeln
- **Tags** für Releases: `v1.0`, `v1.0.1`

### Qualitätssicherung in der Forensik

Forensische Tools müssen **zuverlässig** und **nachvollziehbar** sein:

| Maßnahme | Warum |
|----------|-------|
| Unit-Tests | Jede Funktion isoliert testen (z.B. korrekte Hash-Berechnung) |
| Regressionstests | Nach Änderungen prüfen: Funktioniert das Alte noch? |
| Bekannte Testdaten | NIST-Testimages, standardisierte PCAPs |
| Code-Review | Vier-Augen-Prinzip — Forensik-Fehler können Verfahren gefährden |
| Dokumentation | Welche Annahmen? Welche Limitationen? |

## Praktische Anwendung

- `pytest` für Python-Tests: `test_hash.py` → `pytest`
- `git log --oneline` zeigt die Commit-Historie
- `.gitignore` mit `__pycache__/`, `.venv/`, `*.log`, `*.tmp`

## Quellen / Weiterführendes

- Sommerville, I.: Software Engineering
- Hanser, E.: Agile Prozesse — Von XP über Scrum bis MAP
