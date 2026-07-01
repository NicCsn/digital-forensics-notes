---
title: "Datenstrukturen"
tags: [datenstrukturen, arrays, listen, baeume, hashmaps, stack, queue]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Datenstrukturen organisieren Daten im Speicher. Die richtige Wahl entscheidet über Laufzeit und Speicherverbrauch deines Forensik-Tools. Falsche Datenstrukturen lassen selbst einfache Aufgaben an großen Datasets scheitern.

## Details

### Arrays / Listen

- **Array:** Feste Größe, direkter Index-Zugriff O(1), zusammenhängender Speicher
- **Verkettete Liste (Linked List):** Dynamisch, Einfügen/Löschen O(1) wenn Position bekannt, Zugriff O(n)
- Forensik: Array für Hash-Listen (schneller Zugriff), verkettete Liste selten direkt

### Stack (Stapel)

- **LIFO** (Last In, First Out) — wie ein Tellerstapel
- Forensik: Call-Stack-Analyse bei Malware (welche Funktion rief welche auf?), Undo-Stack

### Queue (Warteschlange)

- **FIFO** (First In, First Out) — wie eine Warteschlange an der Kasse
- Forensik: Job-Queues für parallele Hash-Berechnung, Event-Log-Verarbeitung

### Hash-Tabelle / Dictionary / Map

- **Schlüssel → Wert**, Zugriff O(1) im Durchschnitt
- Forensik: IP-Zähler (`{"192.168.1.1": 42}`), eindeutige Hashes gegen bekannte Listen abgleichen
- **Kollisionen:** Zwei Schlüssel mappen auf denselben Bucket — in Python intern durch Open Addressing gelöst

### Bäume

- **Binärbaum:** Jeder Knoten max. 2 Kinder, sortierte Variante = binärer Suchbaum (O(log n))
- Forensik: MFT-Analyse (NTFS organisiert Dateien als B-Baum), Ordnerstrukturen
- **Trie/Präfixbaum:** Effiziente Textsuche, Autovervollständigung

### Heap (Prioritätswarteschlange)

- Immer Zugriff auf das "höchste" Element O(log n)
- Forensik: Top-N-IPs nach Häufigkeit, älteste/jüngste Events priorisieren

## Vergleich der Operationen

| Struktur | Zugriff | Suchen | Einfügen | Löschen |
|----------|---------|--------|----------|---------|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1) | O(1) |
| Hash-Map | O(1) | O(1) | O(1) | O(1) |
| Binärer Suchbaum | O(log n) | O(log n) | O(log n) | O(log n) |

## Praktische Anwendung

- `collections.Counter()` in Python: Hash-Map für IP-Zählung
- `heapq` für Top-N-Analyse von Log-Einträgen
- `dict` für IOC-Lookup: `iocs.get(hash_value)`

## Quellen / Weiterführendes

- Sedgewick, R.: Algorithmen und Datenstrukturen
