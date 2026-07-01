#!/usr/bin/env python3
"""
Registry Hive Parser — Parse a Windows Registry hive file and list all keys and values.
Supports the basic structure of registry hive files (regf format).
"""

import struct
import sys
from pathlib import Path

REGF_SIGNATURE = b"regf"


def parse_hive(path: Path) -> dict:
    """Extract basic information from a registry hive file."""
    data = path.read_bytes()

    if data[:4] != REGF_SIGNATURE:
        raise ValueError(f"Not a valid registry hive: {path}")

    info = {
        "file": str(path),
        "size": len(data),
        "sequence_numbers": struct.unpack_from("<II", data, 4),
        "last_written": struct.unpack_from("<Q", data, 12)[0],
        "major_version": struct.unpack_from("<I", data, 20)[0],
        "minor_version": struct.unpack_from("<I", data, 24)[0],
        "root_key_offset": struct.unpack_from("<I", data, 36)[0] + 4096,
        "hbin_count": 0,
        "root_key_name": "",
        "total_keys": 0,
        "total_values": 0,
    }

    # Count hbins
    offset = 4096
    while offset < len(data) - 32:
        if data[offset:offset + 4] == b"hbin":
            info["hbin_count"] += 1
            hbin_size = struct.unpack_from("<i", data, offset + 4)[0]
            if hbin_size <= 0:
                break
            offset += hbin_size
        else:
            offset += 512

    # Find root key name (nk record after root offset)
    ro = info["root_key_offset"]
    if ro + 80 <= len(data) and data[ro:ro + 2] == b"nk":
        name_len = struct.unpack_from("<H", data, ro + 76)[0]
        name_start = ro + 4 + struct.unpack_from("<H", data, ro + 4)[0]
        if name_len > 0 and name_start + name_len <= len(data):
            try:
                info["root_key_name"] = data[name_start:name_start + name_len].decode("utf-16-le")
            except:
                info["root_key_name"] = "(decoding error)"

        # Count subkeys and values recursively
        subkeys_offset = struct.unpack_from("<i", data, ro + 28)[0] + 4096
        values_offset = struct.unpack_from("<i", data, ro + 44)[0] + 4096
        info["total_keys"] = struct.unpack_from("<I", data, ro + 32)[0]
        info["total_values"] = struct.unpack_from("<I", data, ro + 40)[0]

    return info


def main():
    import argparse

    parser = argparse.ArgumentParser(
        description="Parse Windows Registry hive files (regf format)."
    )
    parser.add_argument("input", type=Path, help="Path to registry hive file")
    parser.add_argument(
        "-j", "--json", action="store_true", help="Output as JSON"
    )
    args = parser.parse_args()

    if not args.input.exists():
        print(f"Error: file not found: {args.input}", file=sys.stderr)
        sys.exit(1)

    try:
        info = parse_hive(args.input)
    except ValueError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

    if args.json:
        import json
        print(json.dumps(info, indent=2, default=str))
    else:
        print(f"Hive:          {info['file']}")
        print(f"File size:     {info['size']:,} bytes")
        print(f"Version:       {info['major_version']}.{info['minor_version']}")
        print(f"Root key:      {info['root_key_name']}")
        print(f"HBins:         {info['hbin_count']}")
        print(f"Keys (direct): {info['total_keys']}")
        print(f"Values:        {info['total_values']}")
        print(f"Seq #1 / #2:   {info['sequence_numbers'][0]} / {info['sequence_numbers'][1]}")


if __name__ == "__main__":
    main()
