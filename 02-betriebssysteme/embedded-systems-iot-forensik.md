---
title: "Embedded Systems und IoT Forensik"
tags: [embedded, iot, jtag, uart, spi-flash, rtos, arm-cortex]
type: notes
difficulty: advanced
last_updated: "2026-07-01"
---

## Kurzüberblick

Eingebettete Systeme (Embedded) und IoT-Geräte sind überall — Router, Smart-TVs, Armbanduhren, Alexa, Industriesteuerungen. Sie haben keine klassischen Festplatten, sondern Flash-Speicher und proprietäre Protokolle. Die forensische Sicherung und Analyse erfordert spezielle Hardware-Kenntnisse.

## Details

### Klassifizierung

| Typ | Beschreibung | Beispiele |
|-----|-------------|----------|
| **Deeply Embedded** | Kein volles OS, Bare-Metal oder minimaler RTOS | Mikrocontroller (Arduino, ESP32), Sensoren |
| **Open Embedded** | Linux-basiert (Buildroot, Yocto) | Router (OpenWRT), Smart-Home-Hub, Raspberry Pi |

### Zugriffsschnittstellen für die Forensik

| Schnittstelle | Funktion |
|--------------|----------|
| **JTAG** | Debugging-Interface, erlaubt Lese-/Schreibzugriff auf Speicher und CPU-Register |
| **UART** | Serielle Konsole — oft mit Root-Zugriff ohne Passwort! |
| **SPI/I²C** | Kommunikationsbusse zwischen Chips — Flash-Speicher direkt auslesen |
| **SWD** (Serial Wire Debug) | ARM-Äquivalent zu JTAG, 2-Draht-Debugging |

### Sicherstellung und Datenextraktion

1. **Identifikation:** Typenschild, FCC-ID → Datenblätter → Pinouts für JTAG/UART finden
2. **Sicherung über JTAG/SWD:** Flash-Inhalt auslesen (`openocd`, `jlink`)
3. **Chip-Off:** Flash-Chip physisch ablöten und in externem Reader auslesen (letzte Option, zerstörerisch)
4. **Firmware-Analyse:** `binwalk -e firmware.bin` → Dateisystem extrahieren

### Forensische Spuren in Embedded-Systemen

- **Logdateien:** `/var/log/`, `/tmp/`, syslog
- **Konfigurationsdateien:** `/etc/` — Netzwerkeinstellungen, Benutzerkonten
- **Flash-Speicher:** Rohe Analyse nach Strings, Dateien, Partitionstabellen
- **NVRAM:** Nicht-flüchtige Einstellungen (MAC-Adressen, Seriennummern)
- **Kommunikationsprotokolle:** PCAP von MQTT, CoAP, LoRaWAN-Traffic

### IoT-spezifische Herausforderungen

- **Ressourcenbeschränkt:** Kein Platz für Logging-Tools — weniger Spuren
- **Verschlüsselt:** IoT-Geräte exportieren Daten in die Cloud; lokal oft nur minimale Reste
- **OTA-Updates:** Firmware kann sich ändern — vor Analysestand dokumentieren
- **Rechtliche Grauzone:** Wem gehören die Daten? (Nutzer, Hersteller, Cloud-Anbieter)

## Praktische Anwendung / Befehle

- `binwalk -e firmware.bin` — Firmware entpacken
- `strings firmware.bin | grep -i password` — erste Analyse
- `openocd -f interface/jlink.cfg -f target/stm32f4x.cfg` — JTAG-Verbindung herstellen
- `minicom -D /dev/ttyUSB0` — UART-Konsole

## Quellen / Weiterführendes

