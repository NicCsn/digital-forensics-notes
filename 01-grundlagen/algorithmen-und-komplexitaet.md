---
title: "Algorithmen und Komplexität"
tags: [algorithmen, komplexitaet, o-notation, sortieren, suchen, datenstrukturen, bloom-filter, aho-corasick]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Ein Algorithmus ist eine präzise Schritt-für-Schritt-Anweisung zur Lösung eines Problems. In der Forensik brauchst du Algorithmen z.B. für File Carving, Duplikatsuche, Log-Analyse oder Passwort-Hashing. Die Komplexität (O-Notation) sagt dir, wie ein Algorithmus skaliert — entscheidend bei großen Datenmengen.

## Details

### O-Notation (Landau-Notation)

Beschreibt das Laufzeitverhalten im Worst Case in Abhängigkeit der Eingabegröße n:

| Notation | Name | Beispiel | 1 TB-Daten |
|----------|------|----------|-----------|
| O(1) | Konstant | Array-Zugriff per Index | sofort |
| O(log n) | Logarithmisch | Binäre Suche | ~40 Schritte |
| O(n) | Linear | Lineare Suche in Image | ~1 Stunde (hängt von I/O ab) |
| O(n log n) | Quasilinear | Mergesort, Heapsort | ~2 Stunden |
| O(n²) | Quadratisch | Bubblesort | ~Jahre |
| O(2^n) | Exponentiell | Brute-Force-Passwort | nicht praktikabel |

### Wichtige Algorithmen für die Forensik

**Hashing (SHA-256, MD5):** O(n) zum Hashen. `sha256sum image.dd` liest die gesamte Datei einmal linear.

**Sortierung (Quicksort, Mergesort):** O(n log n). IP-Adressen oder Zeitstempel sortieren für Timeline-Analyse.

**Reguläre Ausdrücke:** Mustersuche in Logs. Worst Case exponentiell → ReDoS (Regular Expression Denial of Service). Immer Regex testen, bevor du ihn auf 10 GB Logs loslässt.

**Aho-Corasick-Algorithmus:** Multi-Pattern-String-Matching — sucht nach Tausenden von IOCs gleichzeitig in O(n + m + z), wobei n = Textlänge, m = Summe aller Pattern-Längen, z = Treffer. Perfekt für IOC-Scanning über große Logdateien.

**Rabin-Karp-Algorithmus:** Rolling-Hash-Verfahren. Perfekt für File Carving: Statt jeden Byte-Versatz auf eine Header-Signatur zu prüfen (O(n·m)), berechnet Rabin-Karp einen fortlaufenden Hash und vergleicht in O(n+m).

**Bloom-Filter:** Datenstruktur, die prüft, ob ein Element in einer Menge enthalten sein KÖNNTE. Falsch-Positive möglich, aber keine Falsch-Negative. Anwendung: NSRL-Abgleich — "Ist dieser Hash in den 80 Millionen Known-Good-Hashes?" → Bloom-Filter sagt "nein" oder "vielleicht". Speicherverbrauch: ~100 MB statt 10 GB.

### Praxis-Beispiel: File Carving mit Rabin-Karp

```
Statt: Jede Byte-Position prüfen "Ist hier ein JPEG-Header?" → O(n*m)
Besser: Rolling Hash über 4-Byte-Fenster. Hash == Hash(JPEG-Header)? → Kandidat gefunden!
Dann: Struktur validieren (JPEG-Marker, Länge)
```

### Praxis-Beispiel: IOC-Scanning mit Aho-Corasick

Du hast eine Liste mit 50.000 verdächtigen IPs, Domains und Hashes. Statt 50.000× `grep`-Durchläufen (Tage) scannt Aho-Corasick deine Logs in EINEM Durchlauf (Minuten).

## Praktische Anwendung / Befehle

- `ssdeep -r /mnt/image/` — Fuzzy-Hashing mit kontextbasiertem Rolling Hash
- `grep -F -f iocs.txt access.log` — Fixed-String-Matching (schneller als Regex für viele IOCs)
- `sort log.txt | uniq -c | sort -rn` — Häufigkeitsanalyse
- `bulk_extractor -o output/ image.dd` — hochoptimiertes Multi-Pattern-Scanning

## Quellen / Weiterführendes

- Cormen, Leiserson, Rivest, Stein: Introduction to Algorithms
- Harel, D.: Algorithmik — Die Kunst des Rechnens
- [Aho-Corasick Algorithm (Wikipedia)](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm)
