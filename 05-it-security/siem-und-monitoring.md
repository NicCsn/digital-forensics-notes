---
title: "SIEM und Security Monitoring"
tags: [siem, monitoring, splunk, elk, use-cases, alerting, compliance]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

SIEM-Systeme (Security Information and Event Management) sammeln, korrelieren und analysieren Log-Daten aus dem gesamten Netzwerk in Echtzeit. Aus der Forensik-Perspektive sind sie die zentrale Anlaufstelle: Hier findest du die Timeline eines Angriffs über alle Systeme hinweg.

## Details

### SIEM-Architektur

```
[Endgeräte] ──┐
[Server]    ──┤
[Firewalls] ──┼──> [Log Collector] ──> [Parser/Normalisierung] ──> [Korrelations-Engine] ──> [Dashboard / Alerting]
[IDS/IPS]   ──┤
[DNS]       ──┘
```

1. **Collection:** Agenten (Winlogbeat, Filebeat, Syslog) sammeln Logs
2. **Parsing / Normalisierung:** Unterschiedliche Log-Formate → einheitliches Schema (z.B. ECS — Elastic Common Schema)
3. **Korrelation:** Regelbasiert ("10 fehlgeschlagene Logins + 1 erfolgreiches" = mögliche Kompromittierung)
4. **Alerting:** E-Mail, Slack, PagerDuty — Eskalation auslösen
5. **Dashboard:** Live-Ansichten (Logins pro Stunde, Top-Firewall-Drops)

### Wichtige SIEM-Plattformen

| System | Typ | Besonderheit |
|--------|-----|-------------|
| **Splunk** | Kommerziell | Mächtigste Query-Sprache (SPL), teuer |
| **Elastic Stack (ELK)** | Open-Source | Elasticsearch + Logstash + Kibana = skalierbar |
| **Wazuh** | Open-Source (XDR) | SIEM + Host-IDS + File-Integrity |
| **Microsoft Sentinel** | Cloud (Azure) | Integriert mit M365, Defender |
| **Graylog** | Open-Source | Einfacher als ELK, weniger Features |
| **TheHive + Cortex** | Open-Source | Fokus auf Incident Response, nicht reines SIEM |

### Wichtige Use Cases / Detection Rules

| Use Case | Log-Quelle | Erkennungs-Pattern |
|----------|-----------|-------------------|
| Brute-Force-Login | Windows Security (4625), Linux auth.log | >5 fehlgeschlagene Logins in 5 Minuten von gleicher IP |
| RDP nachts | Windows Security (4624 Type 10) | Erfolgreiche RDP-Logins 22:00-06:00 |
| Neue Admin-Accounts | Windows Security (4720) | Neuer User, Gruppe "Administratoren" |
| Datenexfiltration | Firewall, NetFlow | Großer Outbound-Traffic an ungewöhnliche IP |
| Malicious PowerShell | Windows PowerShell Operational (4104) | Base64-codierte Command-Lines |
| Ungewöhnliche DNS-Queries | DNS-Logs | >500 Queries/Sekunde von einem Client (DNS-Tunnel) |

### SIEM in der forensischen Untersuchung

1. **Zeitraum eingrenzen:** Wann begann der Vorfall?
2. **IP des Angreifers pivotieren:** Auf welchen anderen Systemen taucht die Angreifer-IP auf?
3. **User-Account pivotieren:** Welche Aktionen führte der kompromittierte Account aus?
4. **Timeline erstellen:** Alle Events in chronologischer Reihenfolge

### Splunk SPL (Search Processing Language)

```
index=windows EventCode=4625
| stats count by src_ip, user
| where count > 10
| sort - count
```

### Elasticsearch / Kibana (KQL)

```
event.code: 4625 AND source.ip: "10.*"
| stats count() by user.name
```

## Praktische Anwendung

- ELK Stack aufsetzen: `docker-compose up` → Elasticsearch + Kibana + Logstash
- Windows-Logs einsammeln: Winlogbeat konfigurieren → SIEM
- Sigma-Regeln: Plattformunabhängige Detection-Rules (Sigma → Splunk/Kibana/... konvertieren)
- [Sigma HQ](https://github.com/SigmaHQ/sigma) — Open-Source Detection Rules

## Quellen / Weiterführendes

- [Sigma: Generic Signature Format for SIEM Systems](https://github.com/SigmaHQ/sigma)
- [Elastic Common Schema](https://www.elastic.co/guide/en/ecs/current/index.html)
