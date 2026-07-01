---
title: "Datenträger-Verschlüsselung"
tags: [verschluesselung, bitlocker, filevault, luks, veracrypt, forensik]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Verschlüsselung von Datenträgern schützt Daten bei physischem Zugriff. Für den Forensiker ist sie eine Hürde, aber keine unüberwindbare — Schwachstellen, RAM-Dumps und Implementierungsfehler bieten Angriffspunkte.

## Details

### BitLocker (Windows)

- Full-Disk- und Volume-Verschlüsselung, ab Windows Vista (Pro/Enterprise)
- Algorithmus: AES (128/256 Bit) + Diffuser
- **Schlüsselverwaltung:** TPM (Transparent), USB-Stick, PIN, Recovery-Key (48-stellig)
- Forensischer Angriff: Recovery-Key in AD gespeichert? RAM-Dump (BitLocker-Schlüssel im RAM während Betrieb!)

### FileVault 2 (macOS)

- Full-Disk-Verschlüsselung mit XTS-AES-128
- Schlüsselableitung aus Benutzerpasswort + Recovery Key
- Forensischer Angriff: RAM-Dump bei laufendem System, Recovery-Key in iCloud? (Apple kann unter Umständen helfen)

### LUKS (Linux)

- Linux Unified Key Setup — Standard unter Linux
- Bis zu 8 Schlüssel-Slots (verschiedene Passphrasen oder Keyfiles)
- Header ist unverschlüsselt → Parameter (Algorithmus, Iterationen) bekannt
- Angriff: `cryptsetup luksDump`, Brute-Force mit `hashcat -m 14600`

### VeraCrypt / TrueCrypt

- Open-Source, plattformübergreifend
- Container-basiert oder Full-Disk
- Plausible Deniability: Hidden Volumes — ein Passwort öffnet das "Decoy", ein anderes das echte Volume
- Angriff: RAM-Dump (Schlüssel im Speicher), Known-Plaintext, Brute-Force

### Angriffsvektoren in der Praxis

| Methode | Voraussetzung | Erfolgschance |
|---------|--------------|---------------|
| RAM-Dump (Cold Boot) | System läuft oder frisch aus | Hoch — Schlüssel im RAM |
| Brute-Force | Schwaches Passwort | Mittel (hashcat mit GPU) |
| Recovery-Key | AD, Ausdruck, iCloud | Hoch — wenn auffindbar |
| Exploit/Backdoor | Software-Schwachstelle | Mittel |
| Hardware-Keylogger | Physischer Zugriff | Hoch — aber aufwändig |

### Forensisch sauberer Umgang

- **NIEMALS** ein verschlüsseltes System herunterfahren, ohne vorher RAM zu dumpen
- Bei BitLocker: Recovery-Key in AD abfragen
- Verschlüsselte Images duplizieren, mit Image arbeiten — Original unverändert lassen

## Praktische Anwendung / Befehle

- `manage-bde -status` — BitLocker-Status (Windows)
- `sudo fdesetup status` — FileVault-Status (macOS)
- `cryptsetup luksDump /dev/sda2` — LUKS-Header analysieren
- `hashcat -m 14600 luks_header.hash wordlist.txt` — LUKS-Brute-Force
- `dd if=/dev/sda of=image.dd` — erst sichern, dann analysieren

## Quellen / Weiterführendes

- [BitLocker Technical Overview (Microsoft)](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/)
