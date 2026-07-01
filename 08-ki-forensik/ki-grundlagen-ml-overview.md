---
title: "KI-Grundlagen für die Forensik (ML Overview)"
tags: [ki, ml, supervised, unsupervised, train-test, overfitting, forensik]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Künstliche Intelligenz und Machine Learning halten Einzug in die forensische Praxis: automatische Malware-Klassifikation, Anomalieerkennung, Bildforensik. Du brauchst kein KI-Experte zu sein, aber du musst verstehen, was hinter den Ergebnissen steckt.

## Details

### KI-Begrifflichkeiten

| Begriff | Beschreibung | Beispiel |
|---------|-------------|---------|
| **KI (KI)** | Oberbegriff: Maschinen, die menschenähnliche Intelligenz simulieren | Frühe Expertensysteme |
| **Machine Learning (ML)** | Computer lernen aus Daten, ohne explizit programmiert zu werden | Spam-Klassifikation |
| **Deep Learning** | ML mit tiefen neuronalen Netzen (>3 Layer) | Bilderkennung, LLMs |
| **Large Language Models (LLM)** | Sehr große neuronale Netze für Text | GPT, Claude, Llama |

### ML-Paradigmen

| Typ | Beschreibung | Forensische Anwendung |
|-----|-------------|----------------------|
| **Supervised Learning** | Trainiert auf gelabelten Daten (Input → gewünschter Output) | Malware-Klassifikation ("diese EXE ist bösartig/legitim") |
| **Unsupervised Learning** | Findet Muster ohne Labels | Clustering von Log-Einträgen, Anomalieerkennung |
| **Reinforcement Learning** | Belohnung für gute Aktionen | Noch selten in der Forensik |

### Train-Test-Split und Overfitting

Jedes ML-Modell wird aufgeteilt:
- **Trainingsdaten** (70-80%): Modell lernt Muster
- **Testdaten** (20-30%): Modell zeigt, ob es generalisiert

**Overfitting:** Das Modell merkt sich die Trainingsdaten, statt Muster zu lernen → perfekt auf Trainingsdaten, miserabel auf neuen Daten.

**Erkennung:** Trainings-Genauigkeit > Test-Genauigkeit (große Diskrepanz = Overfitting)

### Forensisch relevante Metriken

| Metrik | Formel | Bedeutung |
|--------|--------|-----------|
| **Accuracy** | (TP+TN) / Alle | Gesamte Korrektheit |
| **Precision** | TP / (TP+FP) | Wie viele der als "positiv" klassifizierten sind wirklich positiv? |
| **Recall** | TP / (TP+FN) | Wie viele der tatsächlich positiven Fälle wurden erkannt? |

> TP = True Positive, TN = True Negative, FP = False Positive, FN = False Negative

Forensisches Beispiel: Malware-Detection mit 99% Accuracy aber 50% Recall → bedeuten, jeder zweite echte Malware-Fall wird übersehen. Katastrophal.

### Python-Stack für ML

```python
import pandas as pd            # Daten laden/manipulieren
import numpy as np             # Numerische Operationen
from sklearn.model_selection import train_test_split  # Train/Test Split
from sklearn.ensemble import RandomForestClassifier   # ML-Algorithmus
from sklearn.metrics import classification_report    # Metriken
```

### KI-Risiken in der Forensik

- **Bias:** Trainingsdaten sind unausgewogen (z.B. nur Windows-Malware) → Modell versagt bei Linux-Malware
- **Black-Box-Problem:** Deep Neural Networks liefern Ergebnisse ohne Begründung → vor Gericht schwer erklärbar
- **Adversarial Attacks:** Eingaben werden manipuliert, um das Modell zu täuschen (z.B. ein Byte geändert → Malware wird plötzlich als legitim klassifiziert)
- **Data Poisoning:** Angreifer manipulieren Trainingsdaten, um das Modell zu kompromittieren

## Praktische Anwendung

- `pip install scikit-learn pandas numpy` — ML-Stack
- Jupyter Notebook für interaktive Experimente
- Beispiel-Datensätze: [CIC-IDS2017](https://www.unb.ca/cic/datasets/ids-2017.html), [Malware-Traffic-Analysis.net](https://www.malware-traffic-analysis.net/), [MOTIF](https://mofit.secforens.com/)

## Quellen / Weiterführendes

- Géron, A.: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow
- [Scikit-Learn Documentation](https://scikit-learn.org/)
