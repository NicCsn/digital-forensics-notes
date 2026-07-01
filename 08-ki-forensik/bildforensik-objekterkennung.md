---
title: "Bildforensik und Objekterkennung mit KI"
tags: [bildforensik, yolo, error-level-analysis, deepfake, manipulation, exif]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Bilder sind digitale Beweismittel — aber sie können manipuliert oder KI-generiert sein. Bildforensik kombiniert klassische Methoden (EXIF, ELA, JPEG-Kompression) mit KI (Deepfake-Erkennung, Objekterkennung mit YOLO), um Echtheit, Herkunft und Inhalt eines Bildes zu prüfen.

## Details

### Klassische Methoden zur Manipulationserkennung

#### Error Level Analysis (ELA)
- JPEG-Kompression ist verlustbehaftet → mehrfaches Speichern erhöht Kompressionsartefakte
- Wenn ein Teil des Bildes andere Fehlerniveaus aufweist als die Umgebung → möglicherweise nachträglich eingefügt
- Tool: `FotoForensics.com`, `Forensically`

#### EXIF / Metadaten
- Digitale Bilder speichern Metadaten: Kamera-Modell, Aufnahmezeit, GPS-Koordinaten, Software
- Fehlende EXIF-Daten bei einem "Original-Foto" sind verdächtig
- Widersprüchliche EXIF-Daten: Kamera-Modell laut EXIF = iPhone 13, aber Bildauflösung passt nur zu iPhone 6

#### JPEG-Quantisierungs-Tabelle
- Jede Software/Kamera hat charakteristische Quantisierungs-Matrizen
- Unterschiedliche Matrizen in verschiedenen Bildbereichen = Hinweis auf Compositing

#### Copy-Move-Erkennung
- Gleiches Bildsegment wurde kopiert und woanders eingefügt (z.B. um eine Person zu "verdoppeln")
- Algorithmus: Block-Matching (das Bild in Blöcke zerlegen, identische Blöcke suchen)

### KI-basierte Bildforensik

#### Deepfake-Erkennung mit CNNs

Künstliche Gesichter haben subtile Artefakte, die ein CNN lernen kann:
- **Unnatürliches Blinzeln:** Deepfakes blinzeln weniger oder zu regelmäßig
- **Inkonsistente Beleuchtung:** Schatten fallen auf eine Seite, Lichtreflexionen auf die andere
- **Ohrläppchen-Unsymmetrie:** Menschen haben asymmetrischere Gesichter als Deepfakes
- **Visuelle Inkonsistenzen an den Rändern** des manipulierten Bereichs
- Tool: `dfdc_deepfake_challenge` (Facebook-Modell), Sensity AI

#### YOLO (You Only Look Once) — Objekterkennung in Echtzeit

YOLO ist ein CNN, das Objekte in einem einzigen Durchlauf erkennt:
- **Bounding Boxes:** Rechtecke um erkannte Objekte mit Klassenlabel
- **Confidence Score:** Wie sicher ist sich das Modell?
- Forensische Anwendung:
  - "Finde alle Autos mit dem Kennzeichen 'M-AB 1234' in 10.000 Überwachungskamerabildern"
  - "Finde alle Waffen auf Fotos von einer beschlagnahmten Festplatte"
  - "Identifiziere Tatwerkzeuge (Messer, Brecheisen) in Beweisfotos"

```python
from ultralytics import YOLO
model = YOLO("yolov8n.pt")  # vortrainiertes Modell
results = model("/mnt/case42/photos/")  # Alle Fotos analysieren

for r in results:
    if "knife" in r.names.values():  # Messer gefunden!
        r.save(f"output/knife_{r.path.name}")
```

### Generative KI und Forensik

- **Stable Diffusion, DALL-E, Midjourney:** Generieren fotorealistische Bilder
- Erkennung generierter Bilder: Wasserzeichen (C2PA-Standard), CNN-basierte Detektoren
- Problem: Immer bessere Generatoren → Wettrüsten mit Detektoren

### Forensischer Workflow bei Bildbeweisen

1. **Herkunft prüfen:** Woher kommt das Bild? (E-Mail-Anhang, USB-Stick, Cloud-Download?)
2. **Metadaten extrahieren:** `exiftool bild.jpg`
3. **Hash berechnen:** SHA-256 für Integrität
4. **Manipulationsanalyse:** ELA, JPEG-Ghosts, Clone Detection
5. **KI-basierte Analyse:** Deepfake-Check, falls relevant
6. **Chain of Custody:** Wie kam das Bild in die Ermittlungsakte? (Screenshot? Export? Originaldatei?)

## Praktische Anwendung / Befehle

- `exiftool -a -u bild.jpg` — alle Metadaten inkl. unklassifizierter Tags
- `exiftool -gps* bild.jpg` — nur GPS-Daten
- `jhead -v bild.jpg` — JPEG-Header-Infos
- FotoForensics.com (Web-Tool, ELA + Metadaten online)
- `python3 detect_deepfake.py --input video.mp4` (Eigenentwicklung mit vortrainiertem CNN)

## Quellen / Weiterführendes

- [FotoForensics](https://fotoforensics.com/)
- Farid, H.: Photo Forensics (MIT Press)
- [YOLOv8 Documentation](https://docs.ultralytics.com/)
