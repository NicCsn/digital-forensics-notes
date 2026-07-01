---
title: "Tatortarbeit und Spurenkunde"
tags: [tatort, spurenkunde, spurensicherung, beweiskraft, beweiswert, dokumentation]
type: notes
difficulty: basic
last_updated: "2026-07-01"
---

## Kurzüberblick

Der Tatort ist die zentrale Fundstelle von Beweismitteln — physisch und digital. Spurenkunde klassifiziert und bewertet Spuren. Der digitale Tatort erweitert den klassischen Tatortbegriff: Ein Server in Frankfurt kann Tatort eines Angriffs sein, der von einem Laptop in Rio ausging.

## Details

### Tatortbegriff: physisch vs. digital

| Typ | Beschreibung | Beispiele |
|-----|-------------|----------|
| **Kriminalistischer Tatort** | Jeder Ort, an dem der Täter gehandelt hat oder Spuren hinterlassen hat | Büroraum, Server-Rack, Cloud-Instanz |
| **Juristischer Tatort** | Der Ort, an dem die Tat rechtlich begangen wurde (für Zuständigkeit) | Wo das Opfer saß? Wo der Server steht? Wo der Erfolg eintrat? |
| **Digitaler Tatort** | IT-System, auf dem digitale Spuren liegen | Kompromittierter Server, C2-Infrastruktur, E-Mail-Server |

### Grundeinteilung der Spuren

| Kategorie | Beschreibung | Beispiele |
|-----------|-------------|----------|
| **Gegenstandsspuren** | Physische Objekte | Fingerabdrücke, DNA, Fasern |
| **Formspuren** | Abdrücke, Muster | Schuhabdrücke, Werkzeugspuren |
| **Situationsspuren** | Zustand am Tatort | Möbelstellung, offene Fenster |
| **Digitale Spuren** | Daten auf IT-Systemen | Logs, Timestamps, Dateien, Registry |

### Digitale Spuren im Detail

| Spur-Typ | Fundort | Forensische Aussage |
|----------|---------|-------------------|
| MAC-Spuren (Modified, Accessed, Created) | Dateisystem | Wann wurde eine Datei erstellt/geändert/geöffnet? |
| Log-Spuren | EventLog, Syslog, App-Logs | Wer hat sich wann eingeloggt? Was wurde ausgeführt? |
| Registry-Spuren | Windows-Registry | Welche USB-Geräte waren verbunden? Welche Programme wurden ausgeführt? |
| Netzwerk-Spuren | Firewall, DNS, DHCP, NetFlow | Wer hat mit wem wann kommuniziert? |
| Browser-Spuren | History, Cookies, Cache | Welche Websites wurden wann besucht? |
| Messenger-Spuren | WhatsApp-DB, Signal-Protokoll | Kommunikationsinhalte und -partner |
| E-Mail-Spuren | PST/OST, EML, Mailserver-Logs | Nachrichteninhalt, Sende-/Empfangszeit |

### Spurensicherung am (digitalen) Tatort

1. **Sichten:** Verschaffe dir einen Überblick — was ist vorhanden? (Bildschirme an? Welche Geräte?)
2. **Dokumentieren:** Alles fotografieren, bevor du es anfasst! Verkabelung, laufende Programme auf Bildschirmen
3. **Priorisieren:** Was ist flüchtig? (RAM → Netzwerkverbindungen → laufende Prozesse → Festplatten)
4. **Sichern:** Order of Volatility beachten (flüchtigste Spuren zuerst)
5. **Kennzeichnen:** Jedes Asservat eindeutig labeln, Chain of Custody beginnen
6. **Transportieren:** Antistatische Verpackung, kein Magnetfeld, mechanischer Schutz

### Beweiskraft und Beweiswert

- **Beweiskraft:** Ist die Spur formal verwertbar? (ordnungsgemäß gesichert, Chain of Custody intakt?)
- **Beweiswert:** Wie überzeugend ist die Spur inhaltlich? (Ein Fingerabdruck am Tatwerkzeug > ein Fingerabdruck an der Eingangstür)

**Beispiel:**
- Spur: Login-Event um 03:17 Uhr mit Account "frank"
- Beweiskraft: Ja (EventLog wurde forensisch korrekt extrahiert, Hash stimmt)
- Beweiswert: Hoch für "Account frank wurde genutzt", aber allein noch kein Beweis, dass Frank selbst es war (Account könnte gestohlen sein)

### Dokumentation der Tatortarbeit

- Fotos VOR jeder Veränderung
- Skizze mit Positionen aller Geräte
- Sicherungsprotokoll: Was wurde wie gesichert? Hash? Zeitstempel?
- Zeugen: Wer war während der Sicherung anwesend?

## Praktische Anwendung

- Order of Volatility: RAM > Netzwerkverbindungen > Prozesse > Festplatten > Backups > Logs
- Jede Veränderung dokumentieren: "Ich habe das LAN-Kabel getrennt, um weitere C2-Kommunikation zu verhindern. Begründung: Gefahr der Datenlöschung"

## Quellen / Weiterführendes

- ACPO Good Practice Guide for Digital Evidence
- Casey, E.: Digital Evidence and Computer Crime, Kapitel "Crime Scene Investigation"
