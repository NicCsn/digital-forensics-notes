---
title: "Linux-Administration für Forensiker"
tags: [linux, administration, shell, bash, systemd, benutzerverwaltung, imaging, lvm, raid]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Als Forensiker musst du Linux nicht nur bedienen, sondern administrieren: Pakete installieren, Dienste kontrollieren, Logs finden, Benutzer verwalten. Mindestens genauso wichtig: Forensisches Imaging von Linux aus, LVM/RAID-Rekonstruktion und Network-Block-Device-Tricks.

## Details

### Shell-Basics

- `bash` ist die Standard-Shell auf den meisten Distributionen
- `~/.bashrc` und `~/.bash_history` sind forensisch relevant (ausgeführte Befehle!)
- Wichtige Shortcuts: `Ctrl+R` (History-Suche), `!!` (letzten Befehl wiederholen)

### Paketmanagement

| Distro | Paketmanager | Befehl |
|--------|-------------|--------|
| Debian/Ubuntu/Kali | APT | `apt install <paket>` |
| RHEL/Fedora | DNF/YUM | `dnf install <paket>` |
| Arch | Pacman | `pacman -S <paket>` |

### Systemd und Logging

```bash
systemctl status sshd          # Ist der SSH-Dienst aktiv?
journalctl -u sshd --since "1 hour ago"  # Logs eines Dienstes der letzten Stunde
journalctl --list-boots        # Alle Boots (forensisch: wie viele Neustarts?)
timedatectl                    # Zeitzone, NTP-Status (Zeitstempel!)
```

### Forensisches Imaging von Linux aus

```bash
# Asservat als Device identifizieren (nicht das eigene System!)
lsblk -o NAME,SIZE,TYPE,MOUNTPOINT,SERIAL

# Device read-only setzen
blockdev --setro /dev/sdb

# Forensisches Image mit dcfldd (hash während des Kopierens)
dcfldd if=/dev/sdb hash=sha256 hashlog=/mnt/case/hash.log of=/mnt/case/image.dd

# Image als Loop-Device einhängen (read-only)
losetup --read-only /dev/loop0 /mnt/case/image.dd
```

### LVM (Logical Volume Manager) — forensische Rekonstruktion

LVM erstellt logische Volumes über physische Partitionen hinweg. In einem Image sind LVM-Metadaten in den Partitionen enthalten:

```bash
# LVM-Volume-Groups im Image finden
vgscan
vgchange -ay    # Alle Volumes aktivieren
lvdisplay       # Logische Volumes anzeigen
mount -o ro /dev/vg0/root /mnt/forensic/
```

Ohne diese Rekonstruktion siehst du nur rohe `LVM2`-Partitionen ohne Dateisystem-Inhalt.

### RAID-Rekonstruktion (mdadm)

Software-RAID (mdadm) verteilt Daten über mehrere Platten. Wenn du alle Platten eines RAID-Verbundes gesichert hast:

```bash
mdadm --assemble --run /dev/md0 /dev/loop1 /dev/loop2
# Jetzt kannst du /dev/md0 mounten
```

### Network-Block-Device — über Netzwerk imagieren

Wenn du nicht genug lokalen Speicher hast:

```bash
# Empfängerseite (Forensik-Workstation, genug Speicher):
nc -l -p 9999 > image.dd

# Senderseite (Asservat, via Write-Blocker):
dd if=/dev/sdb bs=4M | nc <forensik-ip> 9999
```

**Achtung:** Keine Verschlüsselung, kein Hashing auf dem Transportweg — `dcfldd` mit `hashlog` auf Senderseite verwenden und Hash nach Übertragung prüfen!

### Forensisch wichtige Verzeichnisse und ihre Tools

| Pfad / Tool | Was es liefert |
|-------------|---------------|
| `/var/log/auth.log` | Login-Versuche, sudo, SSH |
| `journalctl` | Systemweites Journal (alles!) |
| `/proc/<pid>/maps` | Speicher-Map eines Prozesses |
| `/etc/fstab` | Mount-Konfiguration (welche Partitionen?) |
| `auditd`-Logs | Detailliertes Audit-Logging |
| `faillog` / `lastb` | Fehlgeschlagene Login-Versuche |
| `utmp` / `wtmp` / `btmp` | Aktuelle Sessions, alle Logins, fehlgeschlagene Logins |

## Praktische Anwendung

- Kali Linux / Tsurugi Linux als Standard-Forensik-Distributionen
- `apt install sleuthkit foremost volatility3 bulk_extractor guymager`
- Forensik-Workstation IMMER aktuell halten (`apt update && apt upgrade`)
- `/tmp/` ist meist eine RAM-Disk (tmpfs) — nach Reboot leer, vorher sichern!

## Quellen / Weiterführendes

- Shotts, W.: The Linux Command Line
- [Kali Linux Documentation](https://www.kali.org/docs/)
- Nikkel, B.: Practical Linux Forensics
