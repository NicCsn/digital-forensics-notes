---
title: "Registry Hive Parser"
tags: [tool, python, registry, forensik, windows, hive]
type: code
difficulty: basics
last_updated: "2026-07-01"
---

# Registry Hive Parser

## What It Does

Parses Windows Registry hive files (regf format) and extracts structural metadata: root key name, version, number of keys and values, sequence numbers, and last-write timestamp. A minimalist forensic tool for quick hive inspection without needing the full Windows Registry Editor.

## Installation

```bash
# No external dependencies (stdlib only)
python3 --version  # requires Python 3.9+
chmod +x main.py
```

## Usage

```bash
# Basic analysis of a registry hive
./main.py /mnt/case/SYSTEM

# JSON output for further processing
./main.py /mnt/case/NTUSER.DAT --json

# Analyze multiple hives in a loop
for hive in /cases/*/SYSTEM; do
  echo "=== $hive ==="
  ./main.py "$hive"
done
```

## Limitations

- Parses only the **structural metadata** of the hive (not individual keys/values recursively)
- Does not support repair of corrupted hives
- Windows-only format (no cross-platform hives)
- No write support (read-only by design)
- Does not decrypt encrypted values (EFS, DPAPI)
