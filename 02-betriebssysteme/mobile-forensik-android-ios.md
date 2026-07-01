---
title: "Mobile Forensik: Android und iOS"
tags: [mobile, android, ios, forensik, adb, checkm8, itunes, sqlite]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Smartphones sind persönliche Tagebücher mit GPS, Kommunikationshistorie und App-Daten. Android und iOS haben fundamental unterschiedliche Sicherheitsarchitekturen — und entsprechend verschiedene forensische Extraktionsmethoden.

## Details

### Android-Forensik

#### Sicherheitsarchitektur
- **Full-Disk Encryption (FDE):** Android 5-9, basierend auf Nutzer-Passwort/PIN
- **File-Based Encryption (FBE):** Android 7+, Dateien separat verschlüsselt — Direct Boot ermöglicht eingeschränkte Funktionen vor der ersten Entsperrung
- **Keystore / Keymaster:** Hardware-gestützte Schlüsselspeicherung im TEE (Trusted Execution Environment)

#### Extraktionsmethoden

| Methode | Voraussetzung | Was du bekommst |
|---------|--------------|----------------|
| **ADB Backup** | ADB-Debugging aktiviert, Gerät entsperrt | Apps und ihre Daten (nur Apps, die Backup erlauben) |
| **Nandroid Backup** | Custom Recovery (TWRP) installiert | Vollständiges System-Image |
| **chip-off** | Physischer Zugriff, Entlöten | Rohdaten des Flash-Speichers |
| **JTAG** | Debug-Pins identifiziert | Speicherzugriff auf niedriger Ebene |
| **Flasher-Box** (z.B. EDL-Mode) | Qualcomm-Gerät, Emergency Download Mode | Roh-Speicherabbild |

#### Android-Dateisystem und Artefakte

Wichtige Fundorte (Root-Zugriff vorausgesetzt):
- **SMS / Anrufliste:** `/data/data/com.android.providers.telephony/databases/mmssms.db`
- **Kontakte:** `/data/data/com.android.providers.contacts/databases/contacts2.db`
- **Chrome:** `/data/data/com.android.chrome/app_chrome/Default/` (History, Cookies, Login Data)
- **WhatsApp:** `/data/data/com.whatsapp/databases/msgstore.db` (verschlüsselt mit Key in `/data/data/com.whatsapp/files/key`)
- **GPS / Location:** `/data/data/com.google.android.gms/databases/`

### iOS-Forensik

#### Sicherheitsarchitektur
- **Secure Enclave:** Dedizierter Chip für Schlüsselverwaltung — vom Hauptprozessor isoliert
- **Data Protection:** Jede Datei hat eine Schutzklasse (NSFileProtectionComplete, .completeUntilFirstUserAuthentication, .none)
- **Verschlüsselungshierarchie:** Geräteschlüssel → Klassenschlüssel → Dateischlüssel

#### Extraktionsmethoden

| Methode | Voraussetzung | Was du bekommst |
|---------|--------------|----------------|
| **iTunes Backup** | Passwort bekannt (verschlüsseltes Backup) | Fast alle App-Daten |
| **Checkm8 (bootrom-Exploit)** | iPhone 4s bis iPhone X | Vollzugriff auf Dateisystem (Checkra1n, checkm8-nonce-setter) |
| **Advanced Logical (AFC)** | Gerät entsperrt, Pairing-Record vorhanden | Medien, App-Dateien (eingeschränkt) |
| **GrayKey / Cellebrite UFED** | Kommerzielle Hardware | Tiefenextraktion, auch bei gesperrten Geräten |

#### iOS-Artefakte

- **SMS/iMessage:** `~/Library/SMS/sms.db` (SQLite)
- **Anrufliste:** `~/Library/CallHistoryDB/CallHistory.storedata`
- **Safari:** `~/Library/Safari/History.db`, `Cookies.binarycookies`
- **GPS:** `~/Library/Caches/locationd/consolidated.db` (Significant Locations)
- **KnowledgeC:** `~/Library/Application Support/Knowledge/knowledgeC.db` — App-Nutzung, Web-Verlauf

### SQLite — das universelle mobile Datenbankformat

Fast alle mobilen App-Daten sind SQLite-Datenbanken. Forensische Tools:

```bash
# SQLite-Browser (GUI)
sqlitebrowser whatsapp.db

# Freie Seiten analysieren (gelöschte Daten!)
sqlite3 app.db "PRAGMA freelist_count;"
sqlite3 app.db "PRAGMA integrity_check;"

# WAL-Datei prüfen
sqlite3 app.db ".recover"  # Daten aus beschädigter DB + WAL wiederherstellen
```

### Gelöschte Daten in SQLite

- **Freelist:** SQLite markiert gelöschte Zeilen für Wiederverwendung, überschreibt sie aber nicht sofort
- **WAL-Datei:** Enthält die letzten Änderungen vor dem nächsten Checkpoint → gelöschte Daten können hier noch vorhanden sein
- **Journal:** Rollback-Journal kann alte Versionen enthalten

## Praktische Anwendung / Befehle

- `adb devices` — verbundene Android-Geräte anzeigen
- `adb backup -apk -shared -all -system` — vollständiges Android-Backup
- `ideviceinfo` / `idevicebackup2` (libimobildevice) — iOS-Backup erstellen
- `sqlite3 sms.db "SELECT datetime(date/1000000000 + 978307200, 'unixepoch'), text, is_from_me FROM message"` — macOS/iOS-Zeitstempel

## Quellen / Weiterführendes

- [Android Developers: Security](https://source.android.com/docs/security)
- [Apple Platform Security](https://support.apple.com/guide/security/welcome/web)
- Hoog, A.: Android Forensics
- Tamma, R. et al.: Learning Android Forensics
