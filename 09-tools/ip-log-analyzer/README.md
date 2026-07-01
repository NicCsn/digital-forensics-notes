---
title: "IP Log Analyzer"
tags: [tool, python, log-analysis, ip, forensik]
type: code
difficulty: basics
last_updated: "2026-07-01"
---

# IP Log Analyzer

## What It Does

Extracts and counts IPv4 addresses from log files. Designed for quick forensic triage of web server logs, authentication logs, firewall logs, and other ASCII-based log formats. Helps identify top talkers, brute-force sources, or anomalous IP patterns at a glance.

## Installation

```bash
# No external dependencies required (stdlib only)
python3 --version  # requires Python 3.9+
chmod +x main.py
```

## Usage

```bash
# Show top 20 IPs in an Apache access log
./main.py /var/log/apache2/access.log

# Show top 50 IPs, write to file
./main.py access.log -t 50 -o results.txt

# Show unique IPs (appear only once)
./main.py auth.log --unique

# Filter results for IPs containing "192.168"
./main.py firewall.log -f "192.168"

# Pipe input via stdin
cat /var/log/syslog | ./main.py -
```

## Limitations

- IPv4 only (no IPv6 support)
- Regex-based extraction — may produce false positives on non-IP digit patterns (e.g., version strings like `1.2.3.4`)
- In-memory processing — not suitable for multi-GB log files
- No streaming/real-time tail mode
- No geolocation enrichment (can be added via `--geo` flag with MaxMind GeoIP database)
