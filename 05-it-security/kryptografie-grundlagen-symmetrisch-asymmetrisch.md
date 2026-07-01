---
title: "Kryptografie-Grundlagen: Symmetrisch und Asymmetrisch"
tags: [cryptography, aes, rsa, ecc, hashing, signatur, kerckhoffs]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Kryptografie ist die Wissenschaft der sicheren Kommunikation in Gegenwart von Angreifern. Sie stellt Vertraulichkeit, Integrität, Authentizität und Nicht-Abstreitbarkeit sicher. Die zwei fundamentalen Paradigmen sind symmetrische und asymmetrische Verschlüsselung.

## Details

### Symmetrische Kryptografie

- **Ein Schlüssel** für Ver- und Entschlüsselung — Sender und Empfänger teilen dasselbe Geheimnis
- Schnell und effizient, geeignet für große Datenmengen
- Problem: Schlüsselaustausch — wie kommt der Schlüssel sicher zum Empfänger?
- Wichtige Algorithmen: **AES** (Advanced Encryption Standard, Blockgröße 128 Bit, Schlüssel 128/192/256 Bit), veraltetes DES/3DES
- Betriebsmodi: ECB (unsicher!), CBC, CTR, GCM (authenticated encryption)

### Asymmetrische Kryptografie

- **Zwei Schlüssel:** Öffentlicher Schlüssel (public key) zum Verschlüsseln, privater Schlüssel (private key) zum Entschlüsseln
- Löst das Schlüsselaustausch-Problem
- Langsamer als symmetrisch — daher in der Praxis hybrid: Asymmetrisch wird ein Session-Key ausgehandelt, symmetrisch werden die Daten verschlüsselt
- Wichtige Algorithmen: **RSA** (basiert auf Faktorisierungsproblem), **ECC** (Elliptic Curve Cryptography, kleinere Schlüssel bei gleicher Sicherheit), **Diffie-Hellman** (reiner Schlüsselaustausch)
- Quantencomputing-Gefahr: Shor's Algorithmus kann RSA und ECC brechen → Post-Quantum-Kryptografie als aktives Forschungsfeld

### Hash-Funktionen

- Einweg-Funktion: Aus einem Hash kann nicht auf die Eingabe geschlossen werden
- Gleiche Eingabe → gleicher Hash; minimale Änderung → völlig anderer Hash (Avalanche-Effekt)
- Wichtige Algorithmen: SHA-256, SHA-3; veraltet: MD5, SHA-1
- Anwendung: Passwort-Hashing (bcrypt, argon2), Integritätsprüfung, digitale Signaturen

### Digitale Signaturen

- Privater Schlüssel signiert, öffentlicher Schlüssel verifiziert
- Stellt Authentizität und Nicht-Abstreitbarkeit sicher
- Signatur wird über den Hash der Nachricht gebildet, nicht direkt über die Nachricht

### Kerckhoffs-Prinzip

- Die Sicherheit eines Kryptosystems darf nicht von der Geheimhaltung des Algorithmus abhängen, sondern nur vom Schlüssel
- Formuliert von Auguste Kerckhoffs (1883), von Claude Shannon als "the enemy knows the system" verschärft

## Praktische Anwendung / Befehle

- `openssl enc -aes-256-cbc -in klartext.txt -out verschluesselt.bin` — symmetrisch verschlüsseln
- `openssl dgst -sha256 datei` — Hash berechnen
- `gpg --gen-key` — GPG-Schlüsselpaar erzeugen
- `hashcat -m 0 hash.txt wordlist.txt` — MD5-Hash cracken (für Penetrationstests)

## Quellen / Weiterführendes

- [Wikipedia: Cryptography](https://en.wikipedia.org/wiki/Cryptography)
- Paar, C. & Pelzl, J. (2010): *Understanding Cryptography*
- [Cryptopals Crypto Challenges](https://cryptopals.com/) — praktische Übungen
