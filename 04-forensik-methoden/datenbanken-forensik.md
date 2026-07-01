---
title: "Datenbanken-Forensik"
tags: [datenbanken, forensik, sql, nosql, transaktions-log, wal, mongodb, postgresql, mysql]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Datenbanken sind das Rückgrat fast jeder Anwendung — und damit eine primäre Quelle forensischer Spuren. Ob SQL oder NoSQL: Transaktions-Logs, Write-Ahead-Logs, Audit-Trails und Schema-Informationen liefern ein detailliertes Bild aller Datenänderungen.

## Details

### Relationale Datenbanken (SQL)

| DBMS | Transaktions-Log | Forensische Bedeutung |
|------|-----------------|----------------------|
| **PostgreSQL** | WAL (Write-Ahead Log) in `pg_wal/` | Jede Änderung wird VOR dem Schreiben in den WAL protokolliert — lückenlose Chronik |
| **MySQL / MariaDB** | Binary Log (`binlog`) | Alle Daten- und Schema-Änderungen mit Timestamp und Query |
| **MS SQL Server** | Transaction Log (`.ldf`) | Rekonstruktion von DELETE/UPDATE auch nach COMMIT |
| **Oracle** | Redo Logs | Ähnlich WAL, alle Änderungen replaybar |
| **SQLite** | Rollback Journal / WAL | Einfach zu analysieren (eine Datei!), WAL-Modus protokolliert |

### PostgreSQL-Forensik im Detail

```bash
# WAL-Dateien analysieren
pg_waldump /var/lib/postgresql/14/main/pg_wal/000000010000000000000001

# pg_stat_statements-Erweiterung (wenn aktiviert):
SELECT query, calls, total_time, last_executed
FROM pg_stat_statements
ORDER BY last_executed DESC;
```

PostgreSQL speichert auch:
- `pg_log/` — Server-Logs (Connection-Versuche, Slow Queries)
- `pg_stat_activity` — aktuelle Queries in Echtzeit
- `pg_audit` (Extension) — detailliertes Audit-Logging pro User und Query

### MySQL/MariaDB-Forensik

```bash
# Binary Log anzeigen
mysqlbinlog /var/lib/mysql/mysql-bin.000001

# General Query Log (wenn aktiviert):
# Enthält JEDE Query mit Timestamp und User
grep "DELETE\|UPDATE\|INSERT" /var/log/mysql/query.log
```

### NoSQL-Datenbanken

| DBMS | Logging-Mechanismus | Forensische Spuren |
|------|-------------------|-------------------|
| **MongoDB** | Oplog (Replica Set) | Jede Operation wird im Oplog protokolliert (für Replikation) — vollständiges Audit |
| **Redis** | AOF (Append-Only File), RDB (Snapshot) | AOF enthält JEDEN Befehl; RDB = Snapshot |
| **Elasticsearch** | Translog, Audit-Logs | Index-Änderungen, Query-Logs |

### Forensische Analyse einer Datenbank — Vorgehen

1. **Schema extrahieren:** Tabellen, Views, Stored Procedures, Trigger → Verständnis der Datenstruktur
2. **Transaktions-Log analysieren:** Wer hat was wann geändert? (User, Timestamp, Query, betroffene Zeilen)
3. **Audit-Logs prüfen:** War DB-Auditing aktiviert? Wenn ja: JEDE Datenabfrage protokolliert!
4. **Gelöschte Daten rekonstruieren:** Aus Transaktions-Logs, WAL-Dateien oder Oplog
5. **User-Accounts:** Welche DB-User existieren? Welche Berechtigungen? (PostgreSQL: `\du`, MySQL: `SELECT * FROM mysql.user`)
6. **Verbindungs-Logs:** IPs und Zeitpunkte aller Verbindungen

### Typische forensische Fragestellungen

| Frage | Antwort-Quelle |
|-------|---------------|
| "Wurden Kundendaten gestohlen?" | Query-Log: `SELECT * FROM customers` ohne WHERE-Clause? Große Result-Sets? |
| "Wer hat die Preise geändert?" | Transaktions-Log: `UPDATE products SET price = ... WHERE ...` mit User und Timestamp |
| "Seit wann ist dieser User Admin?" | DB-User-Tabelle: Erstellungsdatum, Grant-Logs |
| "Wurde die DB von außen angegriffen?" | Connection-Logs: ungewöhnliche IPs, viele fehlgeschlagene Logins |

### Anti-Forensik in Datenbanken

- **Log-Truncation:** Angreifer löscht Transaktions-Logs → Lücke in der Historie
- **Direct Disk Write:** Umgehung der DB-Engine, direktes Schreiben in die Datendateien
- **Stored Procedure Manipulation:** Code in einer Prozedur wird geändert, ohne dass die Prozedur neu "erstellt" wird (ALTER vs. CREATE OR REPLACE)

## Praktische Anwendung / Befehle

- PostgreSQL: `pg_waldump`, `pg_stat_statements`, `pgBadger` (Log-Analyzer)
- MySQL: `mysqlbinlog`, `pt-query-digest` (Percona Toolkit)
- MongoDB: `mongodump --db local --collection oplog.rs`
- SQLite: `sqlite3 database.db ".dump"` — vollständiges SQL-Dump als Analyse-Basis
- Docker-basierte DB: Volume extrahieren (`docker cp`), dann offline analysieren

## Quellen / Weiterführendes

- Kemper, Eickel: Datenbank-Systeme
- Studer: Relationale Datenbanken mit PostgreSQL
- [PostgreSQL Write-Ahead Log](https://www.postgresql.org/docs/current/wal.html)
- [MySQL Binary Log](https://dev.mysql.com/doc/refman/8.0/en/binary-log.html)
