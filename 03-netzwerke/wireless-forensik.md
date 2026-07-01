---
title: "Wireless-Forensik: WLAN und Bluetooth"
tags: [wireless, wlan, wifi, bluetooth, wpa2, wpa3, handshake, beacon, rogue-ap]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Drahtlose Netzwerke hinterlassen andere Spuren als kabelgebundene: Signalstärken, Beacon-Frames, WPA-Handshakes. Wireless-Forensik analysiert, welche Geräte wann mit welchem Access Point verbunden waren — und ob jemand einen gefälschten Access Point betrieben hat.

## Details

### 802.11 (WLAN)-Frame-Typen

| Typ | Subtyp | Forensische Bedeutung |
|-----|--------|----------------------|
| **Beacon** | — | AP sendet regelmäßig: SSID, BSSID (MAC), Kanal, supported rates |
| **Probe Request** | — | Client fragt: "Gibt es hier SSID 'MyCorp'?" — verrät, wonach das Gerät sucht! |
| **Probe Response** | — | AP antwortet: "Ja, hier bin ich (BSSID xx:xx)" |
| **Authentication** | — | Client ↔ AP: Open System oder Shared Key |
| **Association** | — | Client verbindet sich mit AP |
| **Data** | QoS Data, Null | Eigentliche Nutzdaten (verschlüsselt) |
| **Deauthentication** | — | "Du bist raus!" — Deauth-Attacke zwingt Client zur Neuverbindung (um Handshake zu capturen) |

### WPA2-4-Way-Handshake im Detail

```
AP                        Client
  |------ANonce----------→|  1: AP sendet Zufallszahl
  |←-----SNonce + MIC-----|  2: Client antwortet mit eigener Zufallszahl + MIC (Message Integrity Code)
  |---GTK + MIC---------→|  3: AP bestätigt und sendet Gruppenschlüssel
  |←-------ACK------------|  4: Client bestätigt
```

Der MIC im zweiten Frame enthält die Passwort-Prüfsumme — das ist der Angriffspunkt für Brute-Force! Capture diesen Handshake, und du kannst das WLAN-Passwort offline mit `hashcat` oder `aircrack-ng` knacken.

### WPA3 — Verbesserungen und forensische Implikationen

- **SAE (Simultaneous Authentication of Equals):** Ersetzt den PSK-basierten 4-Way-Handshake. Kein Capture + Brute-Force mehr möglich!
- **Forward Secrecy:** Auch wenn das Passwort später bekannt wird — alte Sessions sind sicher (Perfect Forward Secrecy)
- **OWE (Opportunistic Wireless Encryption):** Offene WLANs (Cafés) werden trotzdem verschlüsselt (keine Passworteingabe nötig)

Forensisch: WPA3 macht Handshake-Capture als Beweismittel nahezu wertlos. Du musst andere Spuren finden: DHCP-Logs, RADIUS-Accounting, AP-Verbindungs-Logs.

### WLAN-Überwachungsmodus (Monitor Mode)

Netzwerkkarten im Monitor-Mode fangen ALLEN Funkverkehr im Kanal ein, nicht nur den an sie adressierten:

```bash
# Interface in Monitor-Mode versetzen
airmon-ng start wlan0

# Alle WLANs in Reichweite scannen
airodump-ng wlan0mon

# Spezifischen Kanal capturen
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# Ergebnis: capture-01.cap mit allen Frames im Kanal
```

### Rogue Access Point — Erkennung

Ein Rogue AP ahmt ein legitimes WLAN nach:
- **Gleiche SSID** wie das Firmennetz
- **Stärkeres Signal** → Clients verbinden sich automatisch mit dem stärksten Signal
- **Man-in-the-Middle** → gesamter Traffic läuft über den Angreifer

Forensische Erkennung:
- **Beacon-Analyse:** Zwei APs mit gleicher SSID aber unterschiedlicher BSSID? → einer ist fake
- **Signalstärke:** Rogue AP hat andere Signalstärke (näher am Client)
- **Kanal:** Legitimer AP sendet auf Kanal 1, Rogue auf Kanal 6? → verdächtig

### Bluetooth-Forensik

- **BD_ADDR:** Bluetooth-MAC-Adresse (48 Bit) — identifiziert ein Gerät eindeutig
- **Bluetooth LE (BLE):** Geringere Reichweite, weniger Energie → typisch für Wearables, Beacons
- **Pairing-Spuren:** `/var/lib/bluetooth/<adapter>/<device>/info` (Linux), Registry (Windows)
- **Angriff:** Bluejacking (Nachrichten senden), Bluesnarfing (Daten stehlen), Bluebugging (Gerät fernsteuern)

## Praktische Anwendung / Befehle

- `airmon-ng start wlan0` — Monitor-Mode aktivieren
- `airodump-ng wlan0mon` — WLANs scannen
- `aireplay-ng -0 10 -a <AP-BSSID> -c <Client-MAC> wlan0mon` — Deauth-Attacke
- `aircrack-ng -w rockyou.txt -b <BSSID> capture.cap` — WPA-Crack mit Wordlist
- `hashcat -m 22000 handshake.hc22000 rockyou.txt` — WPA2-Crack mit GPU
- `hcitool scan` — Bluetooth-Geräte in Reichweite finden (Linux)

## Quellen / Weiterführendes

- [Aircrack-ng Documentation](https://www.aircrack-ng.org/documentation.html)
- IEEE 802.11 Standard
- [Wi-Fi Alliance: WPA3 Specification](https://www.wi-fi.org/discover-wi-fi/security)
