---
title: "Write-Blocker: Schreibschutz für Asservate"
tags: [write-blocker, schreibschutz, hardware, software, tableau, wiebetech]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Ein Write-Blocker verhindert jeglichen schreibenden Zugriff auf ein Speichermedium. Er ist DAS entscheidende Werkzeug, um die Integrität des Originalbeweismittels zu wahren — und damit die gerichtliche Verwertbarkeit der Analyse sicherzustellen.

## Details

### Hardware-Write-Blocker

- Physisches Gerät zwischen Asservat und Analyse-Rechner
- Fängt Schreibbefehle ab und blockiert sie, während Lese-Befehle durchgeleitet werden
- **Hersteller:** Tableau (Forensic Bridge), WiebeTech, Logicube, CRU
- Für verschiedene Schnittstellen: SATA, IDE, USB, NVMe, SAS

**Vorteile:**
- Unabhängig vom Betriebssystem
- Praktisch nicht umgehbar (außer durch Firmware-Manipulation)
- Standard vor Gericht akzeptiert

### Software-Write-Blocker

- Betriebssystem- oder Kernel-Ebene
- **Linux:** `blockdev --setro /dev/sdb` (setzt Device auf read-only)
- **Windows:** Registry-Key `WriteProtect` setzen, aber weniger zuverlässig
- **Forensik-Distributionen** (Kali, Paladin, CAINE) mounten Devices standardmäßig read-only

**Nachteile:** OS könnte trotzdem schreiben (z.B. Mount-Timestamp), abhängig von Korrektheit des Kernels

### Wie ein Write-Blocker funktioniert

1. Rechner sendet ATA/SCSI-Befehl (z.B. READ, WRITE)
2. Write-Blocker prüft: Ist es ein Schreibbefehl?
3. Lese-Befehl → an Gerät weitergeleitet
4. Schreibbefehl → blockiert, ggf. wird "Erfolg" vorgetäuscht (damit OS nicht abstürzt)

### Prüfung: Funktioniert der Write-Blocker?

```bash
# Mit dd versuchen zu schreiben (muss fehlschlagen)
dd if=/dev/zero of=/dev/sdb bs=512 count=1
# Erwartung: "Operation not permitted" oder ähnlich
```

### Forensische Praxis

1. **Immer zuerst Write-Blocker anschließen**
2. Funktionsprüfung (Schreibversuch)
3. Hash des Originals berechnen (durch Write-Blocker hindurch)
4. Imaging (durch Write-Blocker hindurch)
5. Hash des Images berechnen und vergleichen

### Sonderfälle

- **Live-Systeme** (eingeschaltet vorgefunden): Kein Write-Blocker möglich — RAM-Dump und Live-Forensik nach ACPO-Prinzipien dokumentiert
- **NVMe-SSDs:** Brauchen spezielle NVMe-Write-Blocker (nicht kompatibel mit SATA-Blockern)
- **Handys / Tablets:** Spezielle Write-Blocker für UFED, XRY, Cellebrite

## Praktische Anwendung

- Tableau T8u Forensic USB 3.0 Bridge — ca. 400-500 €
- Software: `blockdev --setro /dev/sdb` + `cat /sys/block/sdb/ro` → muss `1` sein

## Quellen / Weiterführendes

- NIST SP 800-86
- [NIST Write Blocker Testing](https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt/hardware-write-block)
