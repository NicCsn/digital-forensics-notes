---
title: "Cybercrime-Ökonomie: Geschäftsmodelle im Darknet"
tags: [cybercrime, caas, underground, marktplaetze, ransomware, monero, bitcoin]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Cybercrime ist ein Milliardenmarkt mit eigenen Geschäftsmodellen, Dienstleistungen und Zahlungsmethoden. Wer versteht, wie Angreifer wirtschaftlich denken, kann ihre Spuren besser interpretieren und ihre nächsten Schritte antizipieren.

## Details

### Cybercrime-as-a-Service (CaaS)

Kriminelle spezialisieren sich und verkaufen ihre Dienste an andere:

| Service | Anbieter (Rolle) | Abnehmer |
|---------|-----------------|----------|
| Initial Access Broker (IAB) | Verschafft Zugang zu kompromittierten Systemen | Ransomware-Gruppen |
| Malware-Developer | Entwickelt Schadsoftware | Affiliates (Vertrieb) |
| Bulletproof Hoster | Bietet "ignore abuse"-Hosting | Malware-C2, Phishing-Seiten |
| Dropper-as-a-Service | Verbreitet Malware über Spam/Exploit-Kits | Malware-Betreiber |
| Money Mules | Wäscht erbeutetes Geld | Organisierte Kriminalität |

### Ransomware-as-a-Service (RaaS)

Das dominierende Geschäftsmodell seit 2020:
1. **Operator:** Entwickelt Ransomware, unterhält Infrastruktur
2. **Affiliate:** Verteilt die Ransomware, führt Verhandlungen mit Opfern
3. **Aufteilung:** 70-80% an Affiliate, 20-30% an Operator

Bekannte RaaS-Gruppen: LockBit, BlackCat/ALPHV, Conti (aufgelöst), REvil

### Underground-Marktplätze

| Plattform | Schwerpunkt | Währung |
|-----------|------------|---------|
| Darknet-Märkte (.onion) | Drogen, Waffen, gestohlene Daten | Bitcoin, Monero |
| Telegram-Channels | Malware-Logs, gestohlene Accounts | Krypto, Tausch |
| Exploit-Foren (XSS.is, Exploit.in) | Zero-Days, Zugangsdaten | Bitcoin, Escrow |
| Paste-Sites | Geleakte Datenbanken, Dumps | - |

### Bezahlung und Geldwäsche

- **Bitcoin:** Pseudonym, alle Transaktionen öffentlich → nachverfolgbar
- **Monero:** Wirklich anonym → bevorzugt von Ransomware-Gruppen
- **Chain-Hopping:** BTC → Monero → BTC (verwischt die Spur)
- **Mixer/Tumbler:** Viele Transaktionen vermischen → Herkunft verschleiern
- **KYC-Börsen:** Fiat-Auszahlung erfordert Identitätsverifikation (Angriffspunkt für Ermittler!)

### Forensische Ermittlungsansätze

1. **Blockchain-Analyse:** Wallet-Adresse aus Erpresserbrief → Transaktionskette verfolgen → Exchange → KYC-Daten
2. **Infrastruktur-Analyse:** C2-Server-IP → Hosting-Provider → Zahlungsdaten
3. **Code-Analyse:** Ransomware-Variante → RaaS-Familie identifizieren (Noten, Code-Überschneidungen)
4. **TTPs:** Taktiken, Techniken, Prozeduren → Gruppenzuordnung (z.B. "LockBit nutzt immer X für initial access")
5. **Kommunikation:** Erpresserbriefe stilistisch analysieren, Übersetzungsfehler → Herkunftsland?

## Praktische Anwendung

- `oxt.me` oder `blockchain.com/explorer` — Bitcoin-Transaktionen verfolgen
- `ransomlook.io` — Ransomware-Gruppen und ihre Leak-Sites tracken
- `urlscan.io` — Phishing-Infrastruktur analysieren

## Quellen / Weiterführendes

- [Chainalysis Crypto Crime Report](https://www.chainalysis.com/) (jährlich)
- [MITRE ATT&CK](https://attack.mitre.org/) — TTPs von Cybercrime-Gruppen
