---
title: "Forensisches Imaging: Datenträger sicher kopieren"
tags: [imaging, dd, e01, hashing, integritaet, dcfldd, guymager]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

## Kurzüberblick

Forensisches Imaging ist der erste Schritt jeder Untersuchung: eine bit-genaue Kopie des Original-Datenträgers. Jeder Fehler hier kann die gesamte Untersuchung gefährden. Das Image ist der Standard: alles andere sind Abweichungen, die begründet werden müssen.

## Details

### Image-Formate

| Format | Beschreibung | Vorteil |
|--------|-------------|---------|
| **DD / Raw** | Bit-für-Bit-Kopie ohne Metadaten | Einfach, universell lesbar |
| **E01 (EWF)** | EnCase-Format, komprimiert + Metadaten (Fallnummer, Prüfer, Hash) | Integrität eingebaut, platzsparend |
| **AFF (Advanced Forensic Format)** | Open-Source (Brian Carrier), Metadaten, Kompression | Flexibel, erweiterbar |
| **VMDK / VHD** | Virtuelle Maschinen-Images | Direkt bootbar für dynamische Analyse |

### Der Imaging-Prozess

1. **Write-Blocker** anschließen (Hardware oder Software) — nie ohne!
2. **Identifikation:** `fdisk -l`, `lsblk` → Welches Device ist das Asservat? Nicht das eigene System überschreiben!
3. **Hash des Originals:** `sha256sum /dev/sdb` (Linux), `Get-FileHash` (Windows)
4. **Imaging:** `dd`, `dcfldd`, `guymager`, FTK Imager
5. **Hash des Images:** Muss mit Original-Hash identisch sein

### dd vs. dcfldd

```bash
# dd: einfach, aber kein Fortschritt, kein Hashing
dd if=/dev/sdb of=/mnt/forensics/case001/image.dd bs=4M status=progress

# dcfldd: Forensik-Variante — Hashing während des Kopierens
dcfldd if=/dev/sdb hash=sha256 hashlog=hash.log of=image.dd
```

### Fehlerbehandlung

- **Lesefehler (Bad Sectors):** `dd conv=noerror,sync` — Fehler überspringen, Lücken mit Nullen füllen
- Dokumentation: Jeder Lesefehler muss im Bericht vermerkt werden

### Checksummen / Hashing

- Algorithmus: SHA-256 (aktueller Standard), nicht MD5 (Kollisionen)
- Original vorher hashen → kopieren → Image hashen → Hashvergleich
- Bei E01: Hash im Format integriert, `ewfinfo` zeigt ihn an

### Wichtige Prinzipien

- Arbeite **nie** am Original, immer am Image
- Falls du gezwungen bist, das Original anzufassen: Jeden Schritt dokumentieren und begründen (ACPO Prinzip 2)
- Zwei Kopien: eine Arbeitskopie, eine unberührte Original-Kopie als Referenz

## Praktische Anwendung / Befehle

- `guymager` — grafisches Imaging-Tool (Linux)
- `FTK Imager` (Windows) — Export als DD oder E01
- `ewfinfo image.E01` — Metadaten eines E01-Images anzeigen
- `sha256sum image.dd > image.sha256 && sha256sum -c image.sha256` — Hash-Verifikation

## Quellen / Weiterführendes

- NIST SP 800-86
- Carrier, B.: File System Forensic Analysis
