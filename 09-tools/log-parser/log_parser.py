#!/usr/bin/env python3
"""
Apache Access Log Parser — Parses combined log format and outputs CSV.
Counts unique IPs, top URLs, and 404/500 errors.
No external dependencies.
"""

import argparse
import csv
import re
import sys
from collections import Counter
from pathlib import Path

# Combined Log Format regex
# Example: 192.168.1.1 - - [02/Jul/2026:12:34:56 +0200] "GET /page HTTP/1.1" 200 1234 "http://ref" "Mozilla/5.0"
LOG_PATTERN = re.compile(
    r'^(\S+)\s+'                           # IP address
    r'\S+\s+'                              # ident (usually -)
    r'(\S+)\s+'                            # user (usually -)
    r'\[([^\]]+)\]\s+'                     # timestamp [dd/MMM/yyyy:HH:mm:ss Z]
    r'"(\S+)\s+'                           # method
    r'(\S+)\s+'                            # URL
    r'(\S+)"\s+'                           # protocol
    r'(\d{3})\s+'                          # status code
    r'(\d+|-)\s+'                          # response size
    r'(?:"([^"]*)")?\s*'                   # referrer (optional)
    r'(?:"([^"]*)")?\s*'                   # user-agent (optional)
    r'.*$'
)


def parse_log_line(line: str) -> dict | None:
    """Parse a single combined log format line. Returns dict or None."""
    match = LOG_PATTERN.match(line.strip())
    if not match:
        return None
    return {
        "ip": match.group(1),
        "user": match.group(2),
        "timestamp": match.group(3),
        "method": match.group(4),
        "url": match.group(5),
        "protocol": match.group(6),
        "status": int(match.group(7)),
        "size": match.group(8),
        "referrer": match.group(9) or "-",
        "user_agent": match.group(10) or "-",
    }


def format_timestamp(ts: str) -> str:
    """Convert Apache timestamp [dd/MMM/yyyy:HH:mm:ss Z] to ISO format."""
    try:
        from datetime import datetime
        dt = datetime.strptime(ts.split(" ")[0], "%d/%b/%Y:%H:%M:%S")
        return dt.isoformat()
    except (ValueError, IndexError):
        return ts


def main():
    parser = argparse.ArgumentParser(
        description="Parse Apache access logs and output CSV with statistics."
    )
    parser.add_argument("input", type=Path, help="Path to Apache access log file")
    parser.add_argument(
        "-o", "--output", type=Path, default=None,
        help="Write CSV output to file (stdout if omitted)"
    )
    parser.add_argument(
        "-s", "--stats", action="store_true",
        help="Print summary statistics to stderr"
    )
    parser.add_argument(
        "--tsv", action="store_true",
        help="Use tab delimiter instead of comma"
    )
    args = parser.parse_args()

    if not args.input.exists():
        print(f"Error: file not found: {args.input}", file=sys.stderr)
        sys.exit(1)

    entries = []
    with args.input.open("r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            parsed = parse_log_line(line)
            if parsed:
                entries.append(parsed)

    if not entries:
        print("No valid log entries found.", file=sys.stderr)
        sys.exit(0)

    delimiter = "\t" if args.tsv else ","
    fieldnames = ["ip", "timestamp", "method", "url", "status", "size", "user_agent"]
    out = sys.stdout if args.output is None else args.output.open("w", newline="")

    writer = csv.DictWriter(out, fieldnames=fieldnames, delimiter=delimiter)
    writer.writeheader()
    for entry in entries:
        writer.writerow({k: entry[k] for k in fieldnames})

    if args.output:
        out.close()
        print(f"CSV written to {args.output} ({len(entries)} entries)")

    if args.stats:
        ip_counter = Counter(e["ip"] for e in entries)
        url_counter = Counter(e["url"] for e in entries)
        status_counter = Counter(e["status"] for e in entries)
        errors_404 = status_counter.get(404, 0)
        errors_500 = sum(v for k, v in status_counter.items() if 500 <= k < 600)

        stats = (
            f"\n--- Statistics ---\n"
            f"Total entries:     {len(entries)}\n"
            f"Unique IPs:        {len(ip_counter)}\n"
            f"404 errors:        {errors_404}\n"
            f"5xx errors:        {errors_500}\n"
            f"\nTop 10 IPs:\n"
        )
        for ip, count in ip_counter.most_common(10):
            stats += f"  {ip:<18} {count}\n"
        stats += f"\nTop 10 URLs:\n"
        for url, count in url_counter.most_common(10):
            stats += f"  {url[:60]:<62} {count}\n"
        print(stats, file=sys.stderr)


if __name__ == "__main__":
    main()
