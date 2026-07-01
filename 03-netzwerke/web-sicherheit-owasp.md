---
title: "Web-Sicherheit und OWASP Top 10"
tags: [web, owasp, xss, sqli, csrf, csp, same-origin-policy]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Webanwendungen sind das häufigste Angriffsziel. Die OWASP Top 10 listet die kritischsten Sicherheitsrisiken für Webanwendungen. Als Forensiker musst du diese Angriffe in Logs und PCAPs erkennen und die Spuren interpretieren können.

## Details

### Same-Origin-Policy (SOP)

- Fundamentale Browser-Sicherheitsregel: JavaScript von Origin A darf nicht auf Daten von Origin B zugreifen
- Origin = Protokoll + Host + Port (z.B. `https://example.com:443`)
- Ausnahmen per CORS (`Access-Control-Allow-Origin`)

### OWASP Top 10 (komprimiert)

| Rang | Risiko | Kurz erklärt | Forensische Erkennung |
|------|--------|-------------|----------------------|
| A01 | Broken Access Control | URLs direkt aufrufen ohne Berechtigung | 200 OK auf Admin-URLs ohne Login |
| A02 | Cryptographic Failures | Klartext-Passwörter, schwache Cipher | Unverschlüsselte Logins in PCAP |
| A03 | Injection (SQL, XSS, OS) | Eingaben werden als Code ausgeführt | SQL-Commands in URL-Parametern, `<script>` in Logs |
| A04 | Insecure Design | Fehlende Sicherheitsanforderungen | Schwierig forensisch, eher Audit |
| A05 | Security Misconfiguration | Standard-Passwörter, Debug-Seiten | `/admin` öffentlich, Header mit Server-Version |
| A06 | Vulnerable Components | Veraltete Bibliotheken mit CVEs | Server-Header verrät Versionen |
| A07 | Auth Failures | Schwache Passwort-Policy, Session-Hijacking | Viele 401/403, Session-Cookies ohne Secure-Flag |
| A08 | Software/Data Integrity | Unsigned Updates, CI/CD-Pipeline-Angriffe | Binary-Analyse auf Manipulation |
| A09 | Logging/Monitoring-Failure | Angriffe werden nicht erkannt und gemeldet | Keine Logs = blind |
| A10 | SSRF | Server ruft interne URLs auf | Requests zu `127.0.0.1`, `169.254.169.254` (AWS Metadata) |

### XSS (Cross-Site Scripting) im Detail

**Reflected XSS:** Input im Request, direkt in Response reflektiert  
`GET /search?q=<script>alert(1)</script>`

**Stored XSS:** Schadcode auf dem Server gespeichert (z.B. Forenpost) → jeder Besucher kriegt ihn  
**DOM-based XSS:** Nur clientseitig, kein Server-Request

Forensisch: `<script>` Tags in HTTP-Responses, `<img onerror=...>`, `javascript:` URIs

### SQL Injection

```
GET /products?id=1 UNION SELECT username, password FROM users--
```

Forensisch: SQL-Keywords (`UNION`, `SELECT`, `--`, `OR 1=1`) in URL-Parametern und POST-Bodies in PCAP/Logs

### CSRF (Cross-Site Request Forgery)

Angreifer bringt Browser des Opfers dazu, ungewollte Aktionen auszuführen (z.B. Geld überweisen).  
Schutz: CSRF-Token, SameSite-Cookies

## Praktische Anwendung

- Wireshark: `http.request.uri contains "<script>"` → XSS-Versuche
- Apache-Log: `grep -E "UNION|SELECT|--" access.log` → SQLi-Versuche
- `sqlmap -u "http://target.com/page?id=1"` — SQLi-Test (nur auf eigenen Systemen!)

## Quellen / Weiterführendes

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- Zalewski: Tangled Web — Der Security-Leitfaden für Webentwickler
