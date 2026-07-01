---
title: "Zahlensysteme und Kodierung"
tags: [binar, hexadezimal, oktal, encoding, base64, endianness]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Computer speichern alle Daten als Bit-Folgen. Um Rohdaten forensisch zu interpretieren, muss man die zugrunde liegenden Zahlensysteme verstehen: Binär (Basis 2), Oktal (Basis 8), Dezimal (Basis 10) und Hexadezimal (Basis 16). Kodierungen wie ASCII, UTF-8 und Base64 übersetzen zwischen Bitmustern und menschenlesbaren Zeichen.

## Details

### Binärsystem

- Ein Bit hat zwei Zustände: 0 oder 1
- `n` Bits können 2^n verschiedene Werte darstellen
- 8 Bit = 1 Byte, das auf den meisten modernen Architekturen die kleinste adressierbare Einheit ist
- Ein Nibble sind 4 Bit, also eine halbe Byte (entspricht einer Hex-Ziffer)

### Hexadezimal und Oktal

- Hex: Ziffern 0-9 + A-F (Basis 16). Zwei Hex-Ziffern = 1 Byte. Präfix oft `0x` (z.B. `0x4A`)
- Oktal: Ziffern 0-7 (Basis 8). Präfix oft `0` in C/Unix (z.B. `0755`)
- Warum Hex dominierte: 1 Byte = genau 2 Hex-Ziffern, bei Oktal braucht man 3 Ziffern mit Überhang

### Endianness

- **Big-Endian:** Höchstwertiges Byte zuerst (Netzwerk-Byte-Order)
- **Little-Endian:** Niedrigstwertiges Byte zuerst (x86-Architektur)
- In der Forensik kritisch: Wenn man Rohdaten falsch interpretiert (falsche Endianness), liest man völlig falsche Werte

### Base64

- Kodierung, die Binärdaten in ASCII-Zeichen (A-Z, a-z, 0-9, +, /) umwandelt
- Wird häufig in E-Mails (MIME) und Web (Data-URIs, JSON) genutzt
- Endet oft mit `=` oder `==` als Padding
- Forensisch relevant: Base64-Blobs in Logdateien, Registry-Exports, Malware-Konfigurationen

## Praktische Anwendung / Befehle

- `xxd datei.bin | head` — Hex-Dump einer Datei
- `echo -n "SGVsbG8=" | base64 -d` — Base64 dekodieren
- `python3 -c "print(0x2A)"` — Hex zu Dezimal
- Hex-Editoren wie `HxD` (Windows) oder `hexedit` (Linux) für manuelle Inspektion

## Quellen / Weiterführendes

- [Wikipedia: Computer Number Format](https://en.wikipedia.org/wiki/Computer_number_format)
- [Wikipedia: Endianness](https://en.wikipedia.org/wiki/Endianness)
- [Base64 RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
