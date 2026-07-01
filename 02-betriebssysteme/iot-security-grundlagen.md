---
title: "IoT-Security: Angriffe und Schutzmassnahmen"
tags: [iot, security, mqtt, coap, firmware, secure-boot, arm-cortex, eingebettete-systeme]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzueberblick

IoT-Geraete sind notorisch unsicher — nicht aus technischer Notwendigkeit, sondern aus Marktdruck (billig, schnell, "Security kommt spaeter"). Diese Notiz behandelt die Angreifer-Perspektive, nicht die forensische Analyse (dafuer siehe `embedded-systems-iot-forensik.md`).

## Details

### Die Top 5 IoT-Schwachstellen

| Schwachstelle | Beschreibung | Echter Vorfall |
|-------------|-------------|---------------|
| **Default Credentials** | Geraet kommt mit `admin/admin` oder `root/12345` — viele werden nie geaendert | Mirai-Botnet (2016): Scannte nach Default-Credentials, infizierte >600.000 Geraete |
| **Unverschluesselte Protokolle** | MQTT/CoAP/HTTP ohne TLS — Passwoerter und Sensordaten im Klartext | Smarte Steckdosen senden WLAN-Passwort im Klartext bei Pairing |
| **Unsignierte Firmware-Updates** | Update-Server liefert neues Image ohne Signaturpruefung — Angreifer kann manipuliertes Image einspielen | Viele IP-Kameras akzeptieren modifizierte Firmware ohne Pruefung |
| **Exponierte Debug-Schnittstellen** | UART/JTAG-Pins auf der Platine, nicht deaktiviert — voller Shell-Zugriff | Router mit Root-Shell ueber UART ohne Passwort |
| **Fehlende Segmentierung** | IoT-Geraet haengt im selben VLAN wie der Firmen-Laptop — laterale Bewegung nach IoT-Kompromittierung | Casino-Hack ueber smartes Aquarium-Thermometer |

### Protokoll-Sicherheit im Detail

#### MQTT (Message Queue Telemetry Transport)

- Leichtgewichtiges Publisher/Subscriber-Protokoll fuer IoT
- **Problem 1: Kein TLS?** — Broker-Port 1883 (unverschluesselt) statt 8883 (TLS). Client-ID und Topic-Namen im Klartext
- **Problem 2: Keine Authentifizierung?** — Beliebiger Client kann sich verbinden und Topics subscriben/publishen. Angreifer subscribed `#` (alle Topics) und liest saemtliche Sensordaten mit
- **Problem 3: Keine Autorisierung?** — Client A (Temperatursensor) sollte nur in `sensors/temp` publishen duerfen, nicht in `actuators/lock`

#### CoAP (Constrained Application Protocol)

- UDP-basiertes REST-Protokoll fuer extrem ressourcenbeschraenkte Geraete
- **Problem:** CoAP hat ein eigenes Sicherheitsmodell (DTLS), das oft weggelassen wird
- **GET / actuell — ohne Authentifizierung kann jeder Geraetezustand gelesen werden
- **POST / — ohne Authentifizierung kann jeder Befehle an Aktoren senden

### Secure Boot auf ARM Cortex-M

ARM Cortex-M (Mikrocontroller, z.B. STM32, nRF52) hat keinen MMU-basierten Speicherschutz. Secure Boot ist die einzige Verteidigung gegen Firmware-Manipulation:

1. **ROM-Bootloader** (unveraenderlich, in Silizium gebrannt) verifiziert Signatur des ersten Boot-Stages
2. **Chain of Trust** — jede Stufe verifiziert die naechste
3. **Public Key** des Herstellers ist im ROM gespeichert — Angreifer kann kein modifiziertes Image signieren

Ohne Secure Boot: Angreifer mit physischem Zugang kann JTAG/SWD nutzen, modifizierte Firmware flashen und das gesamte Geraet uebernehmen.

### Firmware-Extraktion als Angriffsvektor

Angreifer koennen Firmware aus Geraeten extrahieren und analysieren:
- **JTAG/SWD:** Flash auslesen im laufenden Betrieb
- **Update-Server:** Firmware-Image direkt vom Update-Server herunterladen (oft oeffentlich, ohne Authentifizierung)
- **OTA-Sniffing:** Over-the-Air-Update im WLAN mitschneiden (wenn unverschluesselt)

Aus extrahierter Firmware extrahierbar:
- **Hard-coded Secrets:** Passwoerter, API-Keys, Zertifikate (ja, das passiert staendig)
- **Private Keys:** Fuer Firmware-Signierung? In der Firmware = kompromittiert
- **Backdoor-Accounts:** Vom Hersteller fuer "Support" eingebaut, nie dokumentiert

### Angriffsbeispiel: Updater-Hijacking

```
1. Angreifer analysiert Update-Mechanismus (per Proxy/Traffic-Capture)
2. Geraet fragt alle 24h: GET http://updates.hersteller.de/firmware/latest.bin
3. Kein HTTPS, keine Signaturpruefung
4. Angreifer DNS-spooft "updates.hersteller.de" -> eigener Server
5. Geraet laedt modifizierte Firmware -> Malware auf dem IoT-Geraet
```

### Gegenmassnahmen (Basis-Checkliste)

- [ ] Default-Passwoerter bei Erstinstallation zwingend aendern
- [ ] MQTT/CoAP NUR mit TLS (MQTT Port 8883, CoAP + DTLS)
- [ ] Firmware-Signierung mit asymmetrischer Kryptografie (Hersteller signiert, Geraet verifiziert)
- [ ] JTAG/SWD in Produktionsmodell deaktivieren (Fuses setzen)
- [ ] IoT-Geraete in eigenes, isoliertes VLAN (keine laterale Bewegung)
- [ ] Regelmaessige Firmware-Updates mit signiertem Rollback-Schutz

## Praktische Anwendung / Befehle

- Firmware extrahieren: `binwalk -Me firmware.bin`
- Strings-Suche: `strings firmware.bin | grep -iE "(password|secret|key|token)"`
- MQTT-Scan: `nmap -p 1883,8883 --script mqtt-subscribe <target>`
- CoAP-Discovery: `python3 -m coapthon.discover <target>`

## Quellen / Weiterfuehrendes

- OWASP IoT Top 10
- [Mirai Botnet Analysis](https://www.cisa.gov/sites/default/files/publications/Mirai-Botnet-Threat-Profile-508.pdf)
- [ARM TrustZone for Cortex-M](https://developer.arm.com/documentation/100690/latest/)
