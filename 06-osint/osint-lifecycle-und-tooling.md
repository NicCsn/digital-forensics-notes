---
title: "OSINT: Lifecycle und Tooling"
tags: [osint, open-source-intelligence, recherche, opsec, sock-puppet]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Open Source Intelligence (OSINT) ist die Sammlung und Analyse öffentlich zugänglicher Informationen zur Gewinnung verwertbarer Erkenntnisse. OSINT wird von Strafverfolgung, Nachrichtendiensten, aber auch in der Unternehmenssicherheit und privaten Recherche eingesetzt.

## Details

### Der OSINT-Lifecycle

1. **Planung & Anforderung:** Welche Frage soll beantwortet werden? Welche Quellen sind relevant? Rechtliche Grenzen prüfen
2. **Collection:** Systematisches Sammeln von Daten aus öffentlichen Quellen — aktiv (gezielte Suche) oder passiv (Monitoring)
3. **Processing:** Rohdaten aufbereiten, normalisieren, in analysierbare Formate bringen
4. **Analyse:** Muster erkennen, Verbindungen herstellen, Verifikation (kritisch: nicht jede Quelle ist vertrauenswürdig)
5. **Reporting:** Ergebnisse strukturiert darstellen, Quellen belegen, Unsicherheiten transparent machen

### Quellenkategorien

- **Media:** Zeitungen, Magazine, TV, Radio
- **Internet:** Websites, Blogs, Foren, Social Media (Facebook, Twitter/X, Instagram, LinkedIn, TikTok)
- **Public Government Data:** Amtsblätter, Handelsregister, Grundbucheinträge (wo öffentlich)
- **Akademische Publikationen:** Journals, Konferenzpapers, Dissertationen
- **Kommerzielle Daten:** Satellitenbilder, Unternehmensdatenbanken (Crunchbase, Dun & Bradstreet)
- **Grey Literature:** Technische Berichte, Patente, Preprints, Newsletter

### OPSEC in der OSINT-Recherche

- **VPN** nutzen, um eigene IP zu verschleiern
- **Sock Puppets:** Separates Recherche-Profil ohne Verbindung zur eigenen Identität — nicht mit privatem Account auf Zielprofile zugreifen
- **Browser-Sandboxing:** Rechereche-Browser isolieren (Multi-Account Containers in Firefox, VM-basierte Browser)
- **Caching:** Wo möglich gecachte Versionen von Seiten nutzen (Google Cache, archive.org), um keine Spuren beim Ziel zu hinterlassen
- Niemals mit dem Ziel interagieren (keine Freundschaftsanfragen, Likes, Kommentare)

### Gängige OSINT-Tools

- **Suchmaschinen:** Google Dorks (`site:`, `filetype:`, `intitle:`), Shodan (IoT/Server-Suche)
- **Social Media:** sherlock (Username-Suche über Plattformen), twint/snscrape
- **Domains/IPs:** whois, dig, theHarvester
- **Bilder:** ExifTool (Metadaten), Google Reverse Image Search, TinEye
- **Frameworks:** [OSINT Framework](https://osintframework.com/) — strukturierte Linksammlung

## Praktische Anwendung / Befehle

- `sherlock nutzername` — Username plattformübergreifend suchen
- `theHarvester -d domain.de -b google` — E-Mails und Subdomains sammeln
- `exiftool bild.jpg` — EXIF-Metadaten extrahieren
- Google-Dork: `site:domain.de filetype:pdf "vertraulich"`

## Quellen / Weiterführendes

- [Wikipedia: Open-source intelligence](https://en.wikipedia.org/wiki/Open-source_intelligence)
- [OSINT Framework](https://osintframework.com/)
- [Bellingcat's Online Investigation Toolkit](https://www.bellingcat.com/category/resources/)
