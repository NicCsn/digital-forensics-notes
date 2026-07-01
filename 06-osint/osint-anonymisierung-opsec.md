---
title: "OSINT: Anonymisierung und OPSEC"
tags: [osint, opsec, anonymisierung, sock-puppet, vpn, vm, browser-sicherheit]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Bei OSINT-Recherchen willst du nicht selbst zum Ziel werden. Deine eigene Betriebssicherheit (OPSEC) muss gewährleistet sein: Du hinterlässt Spuren (Logs, Cookies, IP-Adressen) auf den Systemen, die du recherchierst — und auf den Plattformen, die du durchsuchst.

## Details

### Deine Angriffsfläche

Bei jeder OSINT-Aktivität exponierst du:

| Was | Wer kann es sehen? | Risiko |
|-----|-------------------|--------|
| Deine echte IP | Ziel-Website, Suchmaschine, ISP | Identifizierung, Geo-Lokalisierung |
| Browser-Fingerprint | Jede besuchte Website | Wiedererkennung über Sitzungen hinweg |
| Cookies / Local Storage | Jede Website | Verknüpfung Recherche-Identität und private Identität |
| Login-Status | Suchmaschinen, Social Media | Personalisierte Ergebnisse verfälschen Recherche |
| User-Agent | Alle Websites | Betriebssystem, Browser-Version |
| Tippverhalten, Mausbewegung | Websites mit Tracking-Skripten | Biometrischer Fingerabdruck |

### Sock Puppet — die separate Recherche-Persönlichkeit

Ein Sock Puppet ist eine fiktive Online-Identität, die ausschließlich für Recherchen genutzt wird:
- **Eigene E-Mail-Adresse** (ProtonMail, Tutanota — ohne Telefonnummer-Verifikation erstellbar)
- **Eigene Social-Media-Accounts** mit künstlichem Profilbild (thispersondoesnotexist.com), konsistenter Biografie
- **Altersgerechte Historie:** Der Account sollte nicht "heute erstellt" aussehen → über Wochen/Monate vorbereiten
- **Nie** mit privatem Account auf dasselbe Ziel zugreifen, nie private Accounts liken/kommentieren

### VPN — der erste (nicht einzige) Schutz

- VPN versteckt die IP, aber nicht den Browser-Fingerabdruck
- Standort des VPN-Servers sollte zum Sock Puppet passen (z.B. deutsches Profil = deutscher VPN-Server)
- Kombinierte Ketten (VPN → Tor) sind möglich, aber langsamer

### Sichere Recherche-Umgebung

**VM-basierte Lösung (empfohlen):**
1. VirtualBox oder VMware mit Linux (z.B. Ubuntu minimal)
2. Komplett isoliert vom Host (keine Shared Folder, kein Shared Clipboard)
3. VPN schon auf Host-Ebene ODER in der VM
4. Firefox mit `resistFingerprinting = true` in `about:config`
5. uBlock Origin + NoScript installieren
6. Immer im Private-Browsing-Modus
7. Nach der Session: VM auf clean Snapshot zurücksetzen

**Oder: Tails OS**
- Amnesic: kein Speichern zwischen Sessions
- Leitet ALLEN Traffic über Tor
- Aber: Target-Websites blockieren oft Tor-Exit-Nodes

### Was du NICHT tun solltest

- **Niemals** firmeneigenen Rechner für Recherchen nutzen (hinterlässt Firmen-IP, die zurückverfolgbar ist)
- **Niemals** mit privatem LinkedIn/Facebook/X-Profil auf Zielprofile zugreifen ("Wer hat mein Profil besucht?")
- **Niemals** OSINT-Arbeit am ungesicherten Café-WLAN ohne VPN
- **Niemals** Dateien aus unsicheren Quellen direkt öffnen (Sandbox / VM verwenden)

### Praktische Checkliste vor der Recherche

- [ ] VPN läuft und zeigt korrekten Standort? → `ipinfo.io` prüfen
- [ ] Browser-Leak-Test: WebRTC-Leak? DNS-Leak? → `ipleak.net` oder `browserleaks.com`
- [ ] Sock-Puppet-Account ist vorbereitet?
- [ ] Screenshot-Tool bereit (für Beweisdokumentation)?
- [ ] Notiz-App geöffnet (alles dokumentieren: Suchbegriffe, URLs, Funde, Zeitstempel)?

## Praktische Anwendung

- `curl ipinfo.io` — eigene öffentliche IP prüfen
- `whoer.net` — umfassender Leak-Test
- VirtualBox + Ubuntu + VPN → Stundenaufwand für Einrichtung, aber unverzichtbar

## Quellen / Weiterführendes

- Fedasiuk, R. (CSET): Into the Jungle — Best Practices for Open-Source Researchers
- [Bellingcat OPSEC Guide](https://www.bellingcat.com/resources/2022/04/06/into-the-jungle-best-practices-for-open-source-researchers/)
