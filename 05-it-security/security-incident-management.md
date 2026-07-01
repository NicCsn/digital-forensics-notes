---
title: "Security Incident Management"
tags: [incident-response, ir, vorfall, eskalation, war-room, playbook]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Security Incident Management ist der strukturierte Prozess zur Erkennung, Reaktion und Nachbereitung von Sicherheitsvorfällen. Ziel: Schaden minimieren, Betrieb wiederherstellen und aus dem Vorfall lernen, um zukünftige Angriffe zu verhindern.

## Details

### Incident-Response-Phasen (NIST / SANS)

1. **Preparation (Vorbereitung):** IR-Plan, Rollen festlegen, Kontaktdaten, Werkzeuge bereithalten
2. **Identification (Erkennung):** Ist es ein Incident? Oder nur eine Anomalie?
3. **Containment (Eindämmung):** Kurzfristig (Netzwerk trennen) + Langfristig (Patches, Neuaufbau)
4. **Eradication (Beseitigung):** Root Cause beseitigen, Malware entfernen
5. **Recovery (Wiederherstellung):** Systeme aus Backups wiederherstellen, Monitoring intensivieren
6. **Lessons Learned (Nachbereitung):** Was lief gut? Was nicht? IR-Plan aktualisieren

### Rollen und Verantwortlichkeiten

| Rolle | Aufgabe |
|-------|---------|
| **Incident Commander** | Gesamtkoordination, Entscheidungen |
| **Technischer Lead** | Forensische Analyse, Eindämmung |
| **Kommunikationsbeauftragter** | Internes/Externes Reporting, Presse |
| **Legal / Compliance** | DSGVO-Meldepflicht, Beweissicherung |
| **Management-Liaison** | Business-Entscheidungen, Ressourcen |

### Eskalationsstufen

| Stufe | Beschreibung | Beispiel |
|-------|-------------|---------|
| **Level 1 (Helpdesk)** | Erste Meldung, Triage | "Mein Rechner ist langsam" |
| **Level 2 (Security-Analyst)** | Technische Erstanalyse | SIEM-Alert, Log-Analyse |
| **Level 3 (IR-Team)** | Schwerer Vorfall, Eskalation | Ransomware-Ausbruch, Datenabfluss |
| **War Room** | Krisenstab aller Stakeholder | Großangriff mit Business-Impact |

### Incident-Response-Plan / Playbooks

Ein **Playbook** ist ein spezifisches Ablaufdokument für einen bestimmten Vorfalltyp:

```
Ransomware-Playbook:
1. Betroffene Systeme identifizieren
2. Netzwerkverbindung trennen (Isolation!)
3. Ransomware-Note dokumentieren (Foto machen)
4. Hash der Malware an Threat-Intel melden
5. Backup-Status prüfen
6. KEIN Lösegeld zahlen (außer von Management autorisiert)
7. Entschlüsselungs-Tools suchen (nomoreransom.org)
8. Lessons Learned durchführen
```

### Compliance und Meldepflichten

- **DSGVO Art. 33:** Datenpanne → Meldung an Aufsichtsbehörde innerhalb 72 Stunden
- **DSGVO Art. 34:** Wenn hohes Risiko für Betroffene → Benachrichtigung der Betroffenen
- **ISO 27035:** Internationaler Standard für Incident Management
- **NIS-2:** Betreiber kritischer Infrastrukturen haben erweiterte Meldepflichten

### Forensische Aspekte im IR-Prozess

- **Beweissicherung während Eindämmung nicht vergessen:** RAM-Dump, Festplatten-Image VOR der Bereinigung
- **Zeitstempel kritisch:** Wann begann der Vorfall? (Erste IOC-Spur vs. Entdeckung)
- **Logs sichern bevor sie rotieren/überschrieben werden**

## Praktische Anwendung

- IR-Plan-Vorlage: [NIST Computer Security Incident Handling Guide (SP 800-61)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)
- Ticket-System: Jira, ServiceNow, TheHive (Open-Source IR-Platform)
- Kommunikation: Eigener, isolierter Chat-Kanal (Angreifer könnten sonst mitlesen)

## Quellen / Weiterführendes

- NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide
- ISO 27035: Information Security Incident Management
