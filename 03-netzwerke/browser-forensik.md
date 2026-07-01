---
title: "Browser-Forensik: Spuren im Browser"
tags: [browser, forensik, chrome, firefox, edge, cache, history, cookies]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Browser speichern eine enorme Menge an Nutzerdaten: besuchte URLs, Suchbegriffe, Downloads, gespeicherte Passwörter, Cookies, Cache-Dateien. In der Forensik ist der Browser oft die ergiebigste Quelle für das Nutzerverhalten.

## Details

### Chromium-basierte Browser (Chrome, Edge, Brave, Opera)

Daten liegen unter `%AppData%\Local\Google\Chrome\User Data\Default\` (Windows) oder `~/.config/google-chrome/Default/` (Linux)

| Datei | Format | Inhalt |
|-------|--------|--------|
| `History` | SQLite | URLs, Titel, Besuchszeit, Anzahl Besuche |
| `Cookies` | SQLite | Cookie-Name, Wert, Domain, Ablaufdatum |
| `Login Data` | SQLite | Gespeicherte Logins (verschlüsselt mit OS-Schlüssel) |
| `Web Data` | SQLite | Autofill, Kreditkarten, Suchbegriffe |
| `Bookmarks` | JSON | Lesezeichen mit URLs und Ordnern |
| `Favicons` | SQLite | Favicon-URLs (auch wenn nie als Lesezeichen gespeichert) |
| `Cache/` | Binär | Zwischengespeicherte Dateien (Bilder, CSS, JS) |
| `Downloads` | SQLite | Heruntergeladene Dateien mit Pfad und Quelle |
| `Top Sites` | SQLite | Meistbesuchte Seiten mit Thumbnail |
| `Extensions/` | Ordner | Installierte Erweiterungen → Rückschlüsse auf Nutzerverhalten |

### Firefox

Daten unter `%AppData%\Roaming\Mozilla\Firefox\Profiles\<profil>\` (Windows) bzw. `~/.mozilla/firefox/<profil>/`

| Datei | Format | Inhalt |
|-------|--------|--------|
| `places.sqlite` | SQLite | History, Bookmarks, Downloads |
| `cookies.sqlite` | SQLite | Cookies |
| `formhistory.sqlite` | SQLite | Gespeicherte Formulardaten |
| `logins.json` | JSON | Gespeicherte Logins (verschlüsselt) |

### Safari (macOS)

- History: `~/Library/Safari/History.db` (SQLite)
- Cookies: `~/Library/Cookies/Cookies.binarycookies`
- Downloads: `~/Library/Safari/Downloads.plist`

### Forensische Arbeitstechniken

1. **History rekonstruieren:** Zeitachse aller besuchten Seiten → Täter-Recherche, Besuch von Darknet-Links?
2. **Downloads prüfen:** Welche Dateien von wo heruntergeladen? → Malware-Infektionsvektor
3. **Eingegebene Suchbegriffe:** Wonach hat der Nutzer gesucht? (z.B. "how to make a bomb" vs. "Windows Fehler 0x80070005")
4. **Cache durchsuchen:** Auch gelöschte Dateien können noch im Cache sein → Strings-Extraktion
5. **Erweiterungen:** Ad-Blocker oder Crypto-Wallet-Erweiterung?

### InPrivate / Incognito-Modus

- Browser speichert keine History, Cookies, Cache **während** der Session
- Nach Schließen der Session: Daten im RAM (wenn das System noch läuft)
- Kein absoluter Schutz: DNS-Resolver, Proxy/Firewall, Router sehen den Traffic trotzdem

## Praktische Anwendung / Befehle

- SQLite auslesen: `sqlite3 History.db "SELECT url, title, last_visit_time FROM urls ORDER BY last_visit_time DESC LIMIT 20"`
- Chrome-Zeitstempel: `datetime(last_visit_time / 1000000 - 11644473600, 'unixepoch')` — Chrome-Zeit → menschenlesbar
- `Hindsight` (Tool): Automatische Auswertung von Chrome-Profilen
- `browser-history` (Python-Paket): CLI-Tool zum Auslesen aller Browser

## Quellen / Weiterführendes

- [Forensic Artifacts: Browsers](https://github.com/ForensicArtifacts/artifacts)
