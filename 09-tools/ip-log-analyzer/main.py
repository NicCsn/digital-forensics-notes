#!/usr/bin/env python3
"""
IP Log Analyzer — Extract and count IP addresses from log files.
Useful for quick forensic triage of web server logs, auth logs, and firewall logs.
"""

import argparse
import re
import sys
from collections import Counter
from pathlib import Path

IPV4_PATTERN = re.compile(
    r"\b((?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)"
    r"\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\b"
)


def extract_ips(content: str) -> list[str]:
    return IPV4_PATTERN.findall(content)


def main():
    parser = argparse.ArgumentParser(
        description="Extract and count IPv4 addresses from log files."
    )
    parser.add_argument("input", type=Path, help="Path to log file")
    parser.add_argument(
        "-t", "--top", type=int, default=20, help="Show top N IPs (default: 20)"
    )
    parser.add_argument(
        "-u", "--unique", action="store_true", help="Show only unique IPs"
    )
    parser.add_argument(
        "-o", "--output", type=Path, help="Write results to file instead of stdout"
    )
    parser.add_argument(
        "-f", "--filter", type=str, help="Only count IPs matching this pattern"
    )
    args = parser.parse_args()

    if not args.input.exists():
        print(f"Error: file not found: {args.input}", file=sys.stderr)
        sys.exit(1)

    content = args.input.read_text(encoding="utf-8", errors="ignore")
    ips = extract_ips(content)

    if not ips:
        print("No IPv4 addresses found.", file=sys.stderr)
        sys.exit(0)

    counter = Counter(ips)

    if args.filter:
        counter = Counter(
            {ip: count for ip, count in counter.items() if args.filter in ip}
        )

    top_ips = counter.most_common(args.top)
    if args.unique:
        top_ips = [(ip, c) for ip, c in counter.items() if c == 1]
        if len(top_ips) > args.top:
            top_ips = top_ips[: args.top]
        if not top_ips:
            print("No unique IPs found.", file=sys.stderr)
            sys.exit(0)

    lines = [f"{'IP Address':<18} {'Count'}", "-" * 28]
    for ip, count in top_ips:
        lines.append(f"{ip:<18} {count}")

    output = "\n".join(lines)

    if args.output:
        args.output.write_text(output + "\n")
        print(f"Results written to {args.output}")
    else:
        print(output)


if __name__ == "__main__":
    main()
