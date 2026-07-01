---
title: "Kryptoanalyse: Verschlüsselung brechen"
tags: [kryptoanalyse, haeufigkeitsanalyse, brute-force, known-plaintext, hashcat, john]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Kryptoanalyse ist die Kunst, Verschlüsselung ohne den Schlüssel zu brechen. In der Forensik brauchst du das, wenn du auf verschlüsselte Container, Passwort-geschützte Dateien oder WPA2-Handshakes stößt — nicht, um neue Verfahren zu entwickeln, sondern um bestehende Schwächen auszunutzen.

## Details

### Angriffsmethoden

| Methode | Beschreibung | Beispiel |
|---------|-------------|---------|
| **Ciphertext-Only** | Nur der Geheimtext ist bekannt | Alte Chiffren, schwache moderne Cipher |
| **Known-Plaintext** | Teile des Klartexts sind bekannt | ZIP-Datei: Einige enthaltene Dateien sind bekannt → Known-Plaintext-Angriff |
| **Chosen-Plaintext** | Angreifer kann Klartexte verschlüsseln lassen | Angriff auf ECB-Mode |
| **Brute-Force** | Systematisches Durchprobieren aller Schlüssel | 6-stelliges Passwort: 95⁶ Kombinationen |
| **Dictionary** | Wordlist-basierter Angriff | rockyou.txt, SecLists, zielgerichtete Wordlists |
| **Regel-basiert** | Dictionary + Mutationen (l33t, Groß/Klein, Zahlen anhängen) | `Password` → `P@ssw0rd!`, `password123` |
| **Rainbow Tables** | Vorberechnete Hash-Ketten | LANMAN-Hash, MD5 (ohne Salt) |
| **Side-Channel** | Physische Messung (Stromverbrauch, EM-Abstrahlung) | Smartcards, HSMs |

### Häufigkeitsanalyse (Klassische Kryptoanalyse)

- Jede Sprache hat charakteristische Buchstaben-Häufigkeiten
- Deutsch: E (17,4%), N (9,8%), I (7,6%) ... am häufigsten
- Monoalphabetische Substitution (z.B. Caesar): Häufigkeitsprofil bleibt erhalten → leicht zu knacken
- Polyalphabetische Substitution (z.B. Vigenère): Glättet das Profil → Kasiski-Test zur Schlüssellängen-Bestimmung

### Hashcat — Praxis

```bash
# Brute-Force: MD5-Hash
hashcat -m 0 -a 3 hash.txt ?l?l?l?l?l?l  # 6 Kleinbuchstaben

# Dictionary + Regel
hashcat -m 0 -a 0 hash.txt rockyou.txt -r best64.rule

# WPA2-Handshake
hashcat -m 2500 handshake.hccapx rockyou.txt
```

Wichtige Hash-Modi für Forensik:
- `0` = MD5
- `100` = SHA1
- `1400` = SHA2-256
- `1000` = NTLM (Windows-Passwort-Hash)
- `2500` = WPA/WPA2
- `14600` = LUKS
- `13721` = VeraCrypt

### John the Ripper

```bash
# Automatische Hash-Erkennung
john hash.txt

# Wordlist mit Regeln
john --wordlist=rockyou.txt --rules hash.txt

# Passwort aus Windows-SAM-Datei
john --format=NT sam.txt
```

### Gegenmaßnahmen (aus Verteidigungssicht)

- **Lange, komplexe Passwörter:** Nicht in Wordlists, nicht brute-forcebar
- **Salt:** Jeder Hash mit individuellem Zufallswert → Rainbow Tables nutzlos, jede Buchstabenvariante einzeln
- **Key Stretching:** bcrypt, scrypt, argon2 — langsame Hash-Funktionen (viele Iterationen)
- **Pepper:** Geheimer Schlüssel, der nicht in der DB liegt

### Forensisches Vorgehen bei verschlüsselten Funden

1. **Um welches Format handelt es sich?** (LUKS-Header, ZIP mit AES, BitLocker?)
2. **Gibt es Hinweise auf das Passwort?** (Notizzettel, Passwort-Manager, Keyfile)
3. **RAM-Dump** (Schlüssel könnten noch im Speicher sein)
4. **Social Engineering / Rechtliche Mittel** (Beschuldigter zur Herausgabe verpflichtet?)
5. **Brute-Force** als letzte Option — mit GPU-Cluster

## Praktische Anwendung

- Passwort-Wordlist erstellen: `cewl https://ziel.de -w custom_wordlist.txt` (Wörter von der Ziel-Website scrapen)
- `hashcat -I` — verfügbare GPUs anzeigen
- `hashcat --benchmark` — Leistung testen

## Quellen / Weiterführendes

- [Hashcat Wiki](https://hashcat.net/wiki/)
- Buchmann, J.: Einführung in die Kryptographie
