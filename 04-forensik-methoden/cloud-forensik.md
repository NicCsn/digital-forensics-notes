---
title: "Cloud-Forensik"
tags: [cloud, forensik, aws, azure, gcp, cloudtrail, guardduty, shared-responsibility]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Cloud-Forensik analysiert Sicherheitsvorfälle in Cloud-Umgebungen (AWS, Azure, GCP). Anders als bei On-Premise-Systemen hat der Forensiker keinen physischen Zugriff — alle Beweise sind Logs, Konfigurationen und Snapshots. Das Shared-Responsibility-Modell bestimmt, welche Spuren du überhaupt sehen darfst.

## Details

### Shared Responsibility Model

| Verantwortung | Cloud-Anbieter | Kunde (du) |
|--------------|---------------|-----------|
| Physische Sicherheit (Rechenzentrum) | ✅ | ❌ |
| Hypervisor, Netzwerk-Infrastruktur | ✅ | ❌ |
| Betriebssystem (bei IaaS) | ❌ | ✅ |
| Anwendungen, Daten | ❌ | ✅ |
| Zugriffsmanagement (IAM) | ❌ | ✅ |
| Logging, Monitoring | Werkzeuge bereitgestellt | ✅ Konfiguration |

### AWS-Forensik

#### CloudTrail — das zentrale Audit-Log

Jeder API-Aufruf in deinem AWS-Konto wird protokolliert:
```json
{
  "eventTime": "2025-03-15T03:17:22Z",
  "eventName": "DeleteBucket",
  "sourceIPAddress": "203.0.113.42",
  "userAgent": "aws-cli/2.0",
  "userIdentity": {"arn": "arn:aws:iam::123456789:user/frank"}
}
```

Forensische Fragen, die CloudTrail beantwortet:
- Wer hat wann was getan? (`userIdentity`, `eventName`, `eventTime`)
- Von wo? (`sourceIPAddress`)
- Mit welchem Tool? (`userAgent`)

#### GuardDuty — KI-basierte Bedrohungserkennung

Erkennt automatisch: EC2-Malware-Mining, unusual API calls, compromised IAM credentials, Tor-Exit-Node-Kontakte.

#### EC2-Instanz-Forensik

- **Snapshots:** EBS-Volume-Snapshot erstellen → teilen → in separates Forensik-Konto kopieren → analysieren
- **Memory Dump:** EC2 kann keinen RAM-Dump nativ — Workaround: `LiME` auf der Instanz ausführen oder Hibernation nutzen (RAM wird auf EBS geschrieben)
- **VPC Flow Logs:** IP-Traffic-Metadaten — wer sprach mit wem? (keine Payloads)

### Azure-Forensik

| Service | Was es loggt |
|---------|-------------|
| **Azure Activity Log** | Alle Management-Ebene-Operationen (VM erstellen, IAM ändern) |
| **Azure Sentinel** | SIEM mit KI-gestützter Incident-Erkennung |
| **NSG Flow Logs** | Netzwerk-Traffic-Metadaten (Network Security Group) |
| **Azure Monitor** | Performance-Metriken, Diagnose-Logs |

### GCP-Forensik

| Service | Was es loggt |
|---------|-------------|
| **Cloud Audit Logs** | Admin-Aktivitäten, Datenzugriff, System-Events |
| **VPC Flow Logs** | Netzwerk-Traffic (wie AWS/Azure) |
| **Security Command Center** | Threat Detection, Compliance-Verstöße |

### Cloud-spezifische Herausforderungen

1. **Kein physischer Zugriff:** RAM-Dump nur möglich, wenn das OS es unterstützt (LiME auf EC2). Kein Write-Blocker für EBS-Volumes — du arbeitest immer mit Snapshots
2. **Multi-Tenancy:** Logs eines anderen Kunden sind unsichtbar — aber ein "noisy neighbor" kann deine Performance beeinflussen
3. **Geografische Verteilung:** In welchem Land liegen die Daten? CloudTrail-Logs in us-east-1, S3-Bucket in eu-central-1, Prozessdaten in ap-southeast-1. Drei verschiedene Rechtsordnungen!
4. **Serverless (Lambda, Azure Functions):** Kein Betriebssystem, das du forensisch analysieren könntest — nur Logs und Code-Versionen
5. **Datenlöschung:** "Gelöscht" bedeutet in der Cloud wirklich gelöscht (nach NIST SP 800-88). Der Anbieter überschreibt Daten — kein File Carving möglich

### Forensisches Vorgehen in der Cloud

1. **IAM-User und Rollen prüfen:** Welcher User ist kompromittiert? (CloudTrail/Activity Log)
2. **API-Calls analysieren:** Timeline aller Aktionen im relevanten Zeitraum
3. **Ressourcen isolieren:** Snapshots erstellen, in isolierte Umgebung kopieren
4. **Netzwerk analysieren:** VPC/NSG Flow Logs — laterale Bewegung?
5. **Datenabfluss prüfen:** S3/Blob/Bucket-Zugriffs-Logs — große Downloads?
6. **Keine Beweise verändern:** IAM-Policy temporär auf Read-Only setzen, statt Root zu nutzen

## Praktische Anwendung / Befehle

- AWS: `aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=DeleteBucket`
- Azure: `az monitor activity-log list --start-time 2025-03-15T00:00:00Z`
- GCP: `gcloud logging read "timestamp >= \"2025-03-15T00:00:00Z\""`
- Snapshot: AWS EC2 → "Create Snapshot" → Snapshot in Forensik-Account kopieren → als Volume mounten

## Quellen / Weiterführendes

- [AWS CloudForensics whitepaper](https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/welcome.html)
- [Azure Forensics Documentation](https://learn.microsoft.com/en-us/azure/security/fundamentals/)
- [GCP: Best Practices for Incident Response](https://cloud.google.com/architecture/incident-response)
