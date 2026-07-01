---
title: "OSINT-Recherche: Methodik und Werkzeuge"
tags: [osint, recherche, google-dorks, shodan, sherlock, quellen-bewertung]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

OSINT-Recherche beginnt nie einfach mit "mal googeln". Du brauchst einen Plan: Welche Frage willst du beantworten? Welche Quellen sind dafür relevant? Wie verifizierst du die Ergebnisse? Die meisten OSINT-Fehler entstehen durch unstrukturierte Suche und mangelnde Quellenkritik.

## Details

### Google Dorks (Google Hacking)

Erweiterte Google-Suchoperatoren, die den Index gezielt durchsuchen:

| Operator | Funktion | Beispiel |
|----------|----------|----------|
| `site:` | Nur diese Domain | `site:example.com` |
| `filetype:` | Dateityp einschränken | `filetype:pdf "vertraulich"` |
| `intitle:` | Wort im Titel | `intitle:"index of"` |
| `inurl:` | Wort in der URL | `inurl:admin` |
| `intext:` | Wort im Text | `intext:"password"` |
| `-` | Wort ausschließen | `-site:wikipedia.org` |
| `..` | Zahlenbereich | `site:example.com 2018..2025` |

**Recherche-Beispiel:**
`site:example.com filetype:pdf OR filetype:docx "confidential" OR "internal" OR "password"`

### Shodan — die Suchmaschine für Geräte

- Durchsucht nicht Websites, sondern offene Ports und Dienste
- Findet: offene Datenbanken, ungesicherte Kameras, ICS/SCADA-Systeme
- Beispiel-Suche: `port:3389 country:DE` → alle offenen RDP-Ports in Deutschland
- `org:"Target Corp"` → alle Geräte einer Organisation

### Social-Media-Recherche

| Tool | Funktion |
|------|----------|
| **sherlock** | Username auf 300+ Plattformen gleichzeitig suchen |
| **holehe** | Prüfen, ob eine E-Mail-Adresse auf bestimmten Seiten registriert ist |
| **whatsmyname** | Ähnlich sherlock, webbasiert |
| **twint / snscrape** | Twitter-Daten ohne API-Key scrapen |
| **Instaloader** | Instagram-Profil und Posts herunterladen |

### Quellenbewertung (CRAAP-Test)

Vor Verwendung einer Quelle prüfen:

- **C**urrency (Aktualität): Wann zuletzt aktualisiert?
- **R**elevance (Relevanz): Passt zum Recherche-Ziel?
- **A**uthority (Autorität): Wer ist der Autor/die Organisation? Qualifikation?
- **A**ccuracy (Genauigkeit): Sind die Informationen mit anderen Quellen verifizierbar?
- **P**urpose (Zweck): Warum wurde die Seite erstellt? (Information, Propaganda, Verkauf?)

### Fact-Checking

- **Bilderrückwärtssuche:** Google Images, TinEye, Yandex Images (besser für Gesichter), Bing
- **Metadaten:** EXIF-Daten aus Bildern mit `exiftool` — Kamera, GPS, Zeitpunkt
- **Domain-Recherche:** WHOIS (whois.domaintools.com), DNS-History (SecurityTrails)
- **Screenshot-Archiv:** archive.org (Wayback Machine), archive.today

## Praktische Anwendung / Befehle

- `sherlock johndoe` — Username überall suchen
- `theHarvester -d example.com -b google,linkedin` — E-Mails und Kontakte
- `exiftool -a -u bild.jpg` — alle EXIF-Daten anzeigen
- `whois example.com` — Domain-Registrierungsdaten

## Quellen / Weiterführendes

- [Google Hacking Database (GHDB)](https://www.exploit-db.com/google-hacking-database)
- [Bellingcat's Digital Investigation Toolkit](https://docs.google.com/document/d/1B1P7GAwViXcfSSacWWDgCYrqCvtrYwZtgHcSJwv_tiQ/)
