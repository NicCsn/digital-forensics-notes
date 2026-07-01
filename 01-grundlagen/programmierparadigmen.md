---
title: "Programmierparadigmen"
tags: [programmierung, imperativ, oop, funktional, deklarativ, paradigmen]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Programmierparadigmen sind grundlegende Denkstile beim Programmieren. Forensische Tools werden in unterschiedlichen Paradigmen geschrieben — das Paradigma bestimmt, wie du Daten durch dein Skript schleifst, wie du Fehler behandelst und wie wartbar der Code ist.

## Details

### Imperative Programmierung

- **"Was und wie"** — Schritt-für-Schritt-Anweisungen mit Zustandsänderungen
- Sprachen: C, Python, Bash
- Forensik-Beispiel — Log-Parsing in Bash:
```bash
#!/bin/bash
# Imperativ: Jeder Schritt explizit
grep "Failed password" /var/log/auth.log > failed.txt
awk '{print $(NF-3)}' failed.txt | sort | uniq -c | sort -rn > ip_counts.txt
echo "Top 10 Angreifer-IPs:"
head -10 ip_counts.txt
```

### Objektorientierte Programmierung (OOP)

- Daten und Methoden in Klassen gekapselt, Vererbung, Polymorphie
- Sprachen: Python, Java, C++
- Forensik-Beispiel — Image-Verarbeitung:
```python
class ForensicImage:
    def __init__(self, path):
        self.path = path
        self._hash = None

    def compute_hash(self, algo="sha256"):
        h = hashlib.new(algo)
        with open(self.path, 'rb') as f:
            for chunk in iter(lambda: f.read(65536), b''):
                h.update(chunk)
        self._hash = h.hexdigest()
        return self._hash

class NTFSImage(ForensicImage):
    def extract_mft(self):
        # NTFS-spezifische MFT-Extraktion
        pass
```

### Funktionale Programmierung

- Keine Seiteneffekte, unveränderliche Daten, Funktionen als First-Class-Citizens
- Forensik-Beispiel — parallele Hash-Berechnung ohne Race-Conditions:
```python
from concurrent.futures import ProcessPoolExecutor
from hashlib import sha256

def hash_file(path):
    # Pure Function: gleicher Input → gleicher Output, keine Seiteneffekte
    h = sha256()
    h.update(open(path, 'rb').read())
    return (path, h.hexdigest())

files = ["/mnt/image/file1.jpg", "/mnt/image/file2.png"]
with ProcessPoolExecutor() as pool:
    results = dict(pool.map(hash_file, files))
```

### Deklarative Programmierung

- **"Was, nicht wie"** — du beschreibst das Ergebnis
- Forensik-Beispiele:
```sql
-- SQL: Finde alle Logins nachts
SELECT timestamp, username, source_ip
FROM event_logs
WHERE event_id = 4624
  AND EXTRACT(HOUR FROM timestamp) BETWEEN 22 AND 6;

-- YARA: Finde Ransomware-Artefakte
rule Ransomware_CryptoNote {
    strings:
        $note = "Your files have been encrypted" nocase
        $ext = ".encrypted" ascii
    condition:
        any of them
}
```

### Fehlerbehandlung — forensisch kritisch

Forensische Tools brauchen robuste Fehlerbehandlung. Ein abgestürztes Tool verliert keine Daten — ein Tool, das **falsche Ergebnisse ohne Fehler** liefert, gefährdet ein ganzes Verfahren.

| Paradigma | Fehlerbehandlung |
|-----------|-----------------|
| Imperativ | Return-Codes (`if (result < 0)`) oder `try/except` |
| OOP | Exceptions als Objekte (`raise CorruptImageError`) |
| Funktional | `Result<T, E>`-Typen (kein Exception-Werfen, Fehler sind Rückgabewerte) |

### Wahl des Paradigmas — Forensik-Praxis

| Aufgabe | Paradigma | Begründung |
|---------|-----------|------------|
| Einmaliges Log-Parsing | Imperativ | Schnell geschrieben, kein Framework-Overhead |
| Forensik-Plattform (Autopsy) | OOP | Modularität, Team-Entwicklung, Wartbarkeit |
| YARA-Regeln, SQL-Queries | Deklarativ | Sag was du suchst, nicht wie du es findest |
| Bilderverarbeitung (Tausende parallel) | Funktional | Keine Race-Conditions, deterministisch |

## Praktische Anwendung

- Python-Skript für IP-Extraktion: [ip-log-analyzer](https://github.com/NicCsn/digital-forensics-notes/09-tools/ip-log-analyzer/)
- Teste dein Paradigma mit pytest: `def test_hash_consistency(): assert hash_file("a.jpg") == hash_file("a.jpg")`

## Quellen / Weiterführendes

- Hunt, J.: A Beginners Guide to Python 3 Programming
- Passig, Jander: Weniger schlecht programmieren
