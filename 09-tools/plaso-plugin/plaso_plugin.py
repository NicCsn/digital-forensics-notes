# -*- coding: utf-8 -*-
"""
Plaso Parser Plugin Template — Custom Application Log Parser

This is a template for creating a Plaso (log2timeline) parser plugin.
It demonstrates the structure for parsing a custom application log format
and producing Plaso EventData objects for timeline analysis.

To use this template:
1. Copy to your Plaso parsers directory, e.g.:
   plaso/parsers/<your_parser>.py
2. Replace the TODO sections with your log format logic.
3. Register the parser in __init__.py of the parsers directory.
4. Run: log2timeline.py --parsers <your_parser> storage.plaso <input.log>

Reference: https://plaso.readthedocs.io/
"""

import logging

from dfdatetime import time_elements as dfdatetime_time_elements

from plaso.containers import events
from plaso.lib import definitions
from plaso.parsers import interface
from plaso.parsers import manager


# ---------------------------------------------------------------------------
# EventData container — defines what fields this parser produces
# Each field becomes a searchable attribute in the Plaso timeline.
# ---------------------------------------------------------------------------
class CustomAppLogEventData(events.EventData):
    """EventData for a custom application log entry."""

    DATA_TYPE = "custom:app:log_entry"

    def __init__(self):
        super(CustomAppLogEventData, self).__init__(data_type=self.DATA_TYPE)
        # Replace these fields with your own log attributes:
        self.event_level = None      # e.g. INFO, WARN, ERROR
        self.source = None           # source module or component
        self.message = None          # free-text log message
        self.process_id = None       # PID if available
        self.record_number = None    # line number or sequence in log file


# ---------------------------------------------------------------------------
# Parser class — must inherit from interface.FileEntryParser
# ---------------------------------------------------------------------------
class CustomAppLogParser(interface.FileEntryParser):
    """Parses a custom application log format.

    This parser reads line-based log files where each line follows
    the pattern:
      YYYY-MM-DD HH:MM:SS,LEVEL,SOURCE,message text

    Replace the _ParseLine method with your actual format parser.
    """

    NAME = "custom_app_log"
    DATA_FORMAT = "MyApp v2.x application log file"
    # pylint: disable=line-too-long
    DESCRIPTION = "Parser for MyApp v2.x application log files (YYYY-MM-DD HH:MM:SS,LEVEL,SOURCE,message)"

    # -----------------------------------------------------------------------
    # Plugin registration: list of method pairs (condition, parse_callback)
    # Each pair tries to match a file and parse it.
    # -----------------------------------------------------------------------
    @classmethod
    def GetFormatSpecification(cls):
        format_spec = interface.FormatSpecification(cls.NAME)
        # Check the first 1 KiB for the expected signature/pattern
        format_spec.AddNewSignature(
            b"202", offset=0)  # weak signature — most logs start with a year
        return format_spec

    # -----------------------------------------------------------------------
    # Core parsing: iterate over lines, extract fields, yield events
    # -----------------------------------------------------------------------
    def ParseFileObject(self, parser_mediator, file_object):
        """Extract events from the log file.

        Args:
            parser_mediator: mediates between parser and storage (Plaso)
            file_object: file-like object for the log file

        Yields:
            EventData objects written to the Plaso storage via parser_mediator
        """
        for line_number, line in enumerate(file_object.readlines(), start=1):
            line = line.strip()
            if not line or line.startswith(b"#"):
                continue

            try:
                event_data = self._ParseLine(line, line_number)
                if event_data:
                    parser_mediator.ProduceEventData(event_data)
            except ValueError as exc:
                logging.warning(
                    "Unable to parse line %d: %s (error: %s)",
                    line_number, repr(line[:80]), exc)

    # -----------------------------------------------------------------------
    # Line parser — modify this to match your log format
    # -----------------------------------------------------------------------
    def _ParseLine(self, line: bytes, line_number: int):
        """Parse a single log line.

        Expected format (bytes): YYYY-MM-DD HH:MM:SS,LEVEL,SOURCE,message

        Args:
            line: raw bytes line from the log file
            line_number: 1-based line number for error reporting

        Returns:
            CustomAppLogEventData instance or None if parsing fails
        """
        parts = line.decode("utf-8", errors="replace").split(",", 3)
        if len(parts) < 4:
            return None

        timestamp_str = parts[0].strip()          # YYYY-MM-DD HH:MM:SS
        level = parts[1].strip().upper()           # INFO, WARN, ERROR
        source = parts[2].strip()                  # module name
        message = parts[3].strip()                 # log message

        # Build Plaso-compatible timestamp from components
        year, rest = timestamp_str.split("-", 1)
        month, rest = rest.split("-", 1)
        day, time_str = rest.split(" ", 1)
        hour, minute, second = time_str.split(":")

        time_elements = dfdatetime_time_elements.TimeElementsInMicroseconds(
            year=int(year),
            month=int(month),
            day_of_month=int(day),
            hours=int(hour),
            minutes=int(minute),
            seconds=int(second),
            time_zone="UTC",
        )

        event_data = CustomAppLogEventData()
        event_data.event_level = level
        event_data.source = source
        event_data.message = message
        event_data.process_id = None
        event_data.record_number = line_number

        # Attach the timestamp converter — Plaso uses this for timeline ordering
        event_data.timestamp_desc = definitions.TIME_DESCRIPTION_WRITTEN
        event_data.SetTimestamp(time_elements)

        return event_data


# ---------------------------------------------------------------------------
# Register this parser with the Plaso parser manager
# When installed, Plaso automatically discovers registered parsers.
# ---------------------------------------------------------------------------
manager.ParsersManager.RegisterParser(CustomAppLogParser)
