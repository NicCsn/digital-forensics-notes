---
title: "Social Media Analyse für OSINT"
tags: [osint, social-media, facebook, twitter, instagram, linkedin, tiktok]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Soziale Netzwerke sind die ergiebigsten Quellen für OSINT — und die gefährlichsten, wenn du OPSEC-Fehler machst. Jedes Netzwerk hat andere APIs, Einschränkungen und versteckte Datenquellen, die du kennen musst.

## Details

### Recherche-Ansätze pro Plattform

| Plattform | Was du finden kannst | Wichtige Tools / Methoden |
|-----------|---------------------|--------------------------|
| **Twitter/X** | Tweets, Likes, Follower, Standort-Daten | nitter.net (anonym), snscrape |
| **Facebook** | Profilinfo, Freundesliste, Gruppen, Fotos | Facebook Graph Search (eingeschränkt), Sowdust Github |
| **Instagram** | Posts, Stories, Standort-Tags, Markierungen | imginn.com, instaloader, dumpor |
| **LinkedIn** | Berufserfahrung, Unternehmen, Kontakte | Google Dorks: `site:linkedin.com/in/ "Target Corp"` |
| **TikTok** | Videos, Hashtags, Musik-Trends | tiktok.com/@username, tikrank, urlebird |
| **Reddit** | Kommentare, Posts, votierte Beiträge | redditcommentsearch.com, reveddit |

### Hashtag- und Geotag-Analyse

- **Hashtags** verknüpfen thematisch: `#MalwareAnalysis` → andere Analysten finden
- **Geotags** zeigen, wo ein Foto aufgenommen wurde (Instagram, Snapchat Map)
- **Zeitstempel** + Hashtags + Geotags = Bewegungsprofil

### Netzwerkanalyse (Social Network Analysis)

- Wer folgt wem? Wer kommentiert wessen Posts?
- Maltego: Visualisierung von Beziehungen zwischen Entitäten
- Wenn Person A nur mit Person B interagiert und umgekehrt → enge Verbindung
- Suspicious: Account mit 5000 Followern aber nur 5 Interaktionen → Bots?

### Gelöschte Inhalte wiederfinden

- Tweets: archive.org, Google Cache, politwoops
- Reddit-Posts/Kommentare: reveddit, unddit
- Instagram: archive.org (selten), Screenshots in anderen Quellen
- Allgemein: Je mehr Engagement ein Post hatte, desto wahrscheinlicher wurde er von jemandem archiviert

### Automatisierung und ethische Grenzen

- **Rate Limits beachten:** Zu viele Requests = geblockt
- **Terms of Service:** Viele Plattformen verbieten Scraping — rechtliche Grauzone
- **Zweckbindung:** Recherche für legitime Zwecke (Journalismus, Strafverfolgung, Sicherheitsforschung) — nicht für Stalking/Doxxing
- **Datenschutz:** Auch öffentliche Profile enthalten personenbezogene Daten (DSGVO)

## Praktische Anwendung / Befehle

- `python3 -m instaloader --login=MYUSER profile ziel_profil` — Instagram-Profil archivieren
- `snscrape twitter-user elonmusk` — alle Tweets eines Users
- Google Dork: `site:linkedin.com/in/ "Security Analyst" "Berlin"` — Profilsuche
- `holehe johndoe@gmail.com` — Wo ist diese E-Mail registriert?

## Quellen / Weiterführendes

- [Whatsmyname](https://whatsmyname.app/) — Username-Suche
- [OSINT Combine](https://www.osintcombine.com/) — Social-Media-Tools
