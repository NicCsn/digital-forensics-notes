---
title: "Python-Grundlagen für die Forensik"
tags: [python, programmierung, scripting, forensik, automatisierung]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Python ist die Lingua Franca der digitalen Forensik — einfach zu lernen, riesige Ökosystem an Bibliotheken, lesbarer Code. Mit Python automatisierst du repetitive Aufgaben, analysierst Logs und erstellst maßgeschneiderte Forensik-Tools.

## Details

### Grundlegende Sprachkonzepte

```python
# Datentypen — alles ist dynamisch typisiert
ip = "192.168.1.1"          # str
port = 443                   # int
flags = ["SYN", "ACK"]       # list
meta = {"src": ip, "dst": "10.0.0.5"}  # dict
unique_ips = {"192.168.1.1", "10.0.0.1"}  # set

# Kontrollstrukturen
for line in open("access.log"):
    if " 403 " in line:
        print(line.split()[0])  # IP ausgeben

# Funktionen
def extract_ips(logfile: str) -> list[str]:
    import re
    return re.findall(r"\b(?:\d{1,3}\.){3}\d{1,3}\b", logfile)
```

### Wichtige Module für die Forensik

| Modul | Verwendung |
|-------|------------|
| `re` | Reguläre Ausdrücke für Log-Parsing, Pattern-Matching |
| `os` / `pathlib` | Dateisystem-Operationen, rekursive Verzeichnisse durchsuchen |
| `hashlib` | MD5, SHA1, SHA256 für Integritätsprüfung |
| `struct` | Binärdaten parsen (z.B. MFT-Einträge, PE-Header) |
| `sqlite3` | Browser-Datenbanken, Skype-Logs, Thumbs.db analysieren |
| `csv` / `json` / `xml` | Strukturierte Daten exportieren/importieren |
| `collections.Counter` | Häufigkeitsanalyse (z.B. IP-Zähler) |
| `datetime` | Zeitstempel normalisieren, Zeitzonen-Umrechnung |

### Typische Forensik-Patterns

1. **Log-Parsing:** `open()` → `re.findall()` → `Counter()` → `print()` oder `json.dump()`
2. **Hash-Vergleich:** `hashlib.sha256(open(f,'rb').read()).hexdigest()` → abgleichen mit Known-Good-Liste
3. **Registry-Auswertung:** `python-registry` / `Registry`-Modul für `.reg` / `NTUSER.DAT`
4. **CSV-Export:** Ergebnisse als CSV für Excel/Autopsy-Import aufbereiten

## Praktische Anwendung

- Siehe [ip-log-analyzer-Tool](/09-tools/ip-log-analyzer/) als Minimalbeispiel
- `pip install python-registry volatility3` — Forensik-Bibliotheken

## Quellen / Weiterführendes

- Hunt, J.: A Beginners Guide to Python 3 Programming
- Miller, P. / Bryce, C.: Learning Python for Forensics
