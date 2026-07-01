---
title: "Schutzziele der Informationssicherheit (CIA-Triade)"
tags: [cia, schutzziele, vertraulichkeit, integritaet, verfuegbarkeit, authentizitaet]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Die CIA-Triade ist das Fundament der Informationssicherheit. Jede Sicherheitsmaßnahme, jedes Forensik-Tool und jede Incident-Response-Entscheidung lässt sich auf diese drei (erweitert: fünf) Schutzziele zurückführen.

## Details

### Die klassische CIA-Triade

| Schutzziel | Englisch | Frage | Gegenmaßnahme |
|-----------|----------|-------|---------------|
| **Vertraulichkeit** | Confidentiality | Wer darf die Daten lesen? | Verschlüsselung, Zugriffskontrolle |
| **Integrität** | Integrity | Sind die Daten unverändert? | Hashing, Signaturen, Write-Blocker |
| **Verfügbarkeit** | Availability | Sind die Daten zugreifbar? | Redundanz, Backups, DDoS-Schutz |

### Erweiterte Schutzziele

| Schutzziel | Bedeutung | Beispiel |
|-----------|-----------|---------|
| **Authentizität** | Ist die Identität eines Nutzers/Systems echt? | MFA, Zertifikate |
| **Nicht-Abstreitbarkeit** | Kann eine Aktion glaubhaft abgestritten werden? | Digitale Signatur, Audit-Logs |
| **Verbindlichkeit** | Ist eine Transaktion rechtlich bindend nachweisbar? | Qualifizierte elektronische Signatur |

### Schutzziele in der forensischen Praxis

- **Vertraulichkeit verletzt:** Jemand hat Daten entwendet → Was sagt PCAP über die übertragene Datenmenge?
- **Integrität verletzt:** Malware hat Logs manipuliert → Vergleich mit Remote-Syslog-Server oder SIEM
- **Verfügbarkeit verletzt:** Ransomware hat Daten verschlüsselt → Backup prüfen, Entschlüsselungs-Tools suchen
- **Authentizität verletzt:** Angreifer loggte sich mit gestohlenen Credentials ein → EventLog 4624 mit Logon Type 3 oder 10

### Risiko und Abwägung

Schutzziele stehen in Konflikt:
- **Mehr Sicherheit = weniger Verfügbarkeit** (Zweifaktor-Authentifizierung kostet Zeit)
- **Mehr Vertraulichkeit = weniger Analysierbarkeit** (Ende-zu-Ende-Verschlüsselung macht Netzwerkforensik blind)

Risikobewertung: Welches Schutzziel hat für DIESES System Priorität?
- Krankenhaus: Verfügbarkeit > Vertraulichkeit? (Patientendaten müssen im Notfall abrufbar sein)
- Geheimdienst: Vertraulichkeit > alles andere
- Börse: Integrität (falsche Transaktion = Katastrophe)

## Praktische Anwendung

- Schutzbedarfsanalyse: Für jedes Asset bewerten (Schaden bei Verlust von C, I, A = niedrig/mittel/hoch)
- BSI IT-Grundschutz als Framework
- ISO 27001 für systematisches Informationssicherheits-Management

## Quellen / Weiterführendes

- Eckert, C.: IT-Sicherheit — Konzepte, Verfahren, Protokolle
- [NIST FIPS 199: Standards for Security Categorization](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf)
