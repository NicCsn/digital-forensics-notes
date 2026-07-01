---
title: "Objektorientierte Programmierung: Klassen und Vererbung"
tags: [oop, klassen, vererbung, polymorphie, uml, softwareentwurf]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

OOP strukturiert Programme als Sammlung von Objekten, die Daten (Attribute) und Verhalten (Methoden) kapseln. In der Forensik begegnet dir OOP in großen Frameworks (Volatility, Autopsy) und wenn du eigene modulare Analyse-Tools baust.

## Details

### Grundkonzepte

**Klasse** = Bauplan (z.B. "ForensicImage")  
**Objekt** = Instanz (z.B. `image1 = ForensicImage("/dev/sda")`)  
**Attribut** = Daten (z.B. `image1.hash`, `image1.size`)  
**Methode** = Verhalten (z.B. `image1.verify()`, `image1.mount()`)

### Die vier Säulen der OOP

1. **Kapselung (Encapsulation):** Interne Daten vor direktem Zugriff schützen — nur über definierte Methoden
2. **Abstraktion:** Komplexität verbergen, einfaches Interface anbieten — Nutzer muss nicht wissen, wie ein Write-Blocker intern arbeitet
3. **Vererbung (Inheritance):** Eine Klasse erbt Eigenschaften einer Elternklasse — z.B. `NTFSImage` erbt von `ForensicImage`
4. **Polymorphie:** Gleiche Methode, unterschiedliches Verhalten je nach Objekttyp — `image.extract()` funktioniert für FAT, NTFS und ext4

### Praxis-Beispiel in Python

```python
class ForensicImage:
    def __init__(self, path: str):
        self.path = path
        self._hash = None

    def compute_hash(self) -> str:
        import hashlib
        h = hashlib.sha256()
        with open(self.path, 'rb') as f:
            for block in iter(lambda: f.read(65536), b''):
                h.update(block)
        self._hash = h.hexdigest()
        return self._hash

    def verify(self) -> bool:
        """Re-hash and compare with stored hash"""
        return self.compute_hash() == self._hash

class E01Image(ForensicImage):
    def __init__(self, path: str, case_number: str):
        super().__init__(path)
        self.case_number = case_number

    def get_metadata(self) -> dict:
        return {"case": self.case_number, "hash": self._hash}
```

### UML für den Entwurf

- **Klassendiagramme** zeigen Attribute, Methoden und Beziehungen (Vererbung = Pfeil mit leerer Spitze)
- Vor dem Coden: Welche Klassen? Welche Attribute? Wer erbt von wem?
- Beispiel: `ForensicImage` ← `E01Image`, `ForensicImage` ← `RawImage`

### Wann OOP? Wann nicht?

| Aufgabe | Ansatz |
|---------|--------|
| Einmaliges Log-Parsing | Einfaches Skript (kein OOP nötig) |
| Modulares Forensik-Tool | OOP (Wiederverwendbarkeit) |
| Framework/Platform | OOP (zwingend) |

## Quellen / Weiterführendes

- Balzert, H.: Lehrbuch der Objektmodellierung
