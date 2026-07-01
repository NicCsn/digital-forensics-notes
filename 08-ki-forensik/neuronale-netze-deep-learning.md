---
title: "Neuronale Netze und Deep Learning"
tags: [neuronale-netze, deep-learning, cnn, rnn, transfer-learning, forensik]
type: notes
difficulty: advanced
last_updated: "2026-07-01"
---

## Kurzüberblick

Neuronale Netze sind das Rückgrat moderner KI. CNNs erkennen Bilder, RNNs/LSTMs verarbeiten Sequenzen, Transformer (die Basis aller LLMs) verarbeiten Text. In der Forensik setzt du sie ein, ohne selbst neue Architekturen designen zu müssen — du nutzt vortrainierte Modelle und passt sie an.

## Details

### Das künstliche Neuron (Perceptron)

```
Input (x1, x2, x3) → Gewichte (w1, w2, w3) → Summe + Bias → Aktivierungsfunktion → Output

Output = f(w1*x1 + w2*x2 + w3*x3 + bias)
```

Aktivierungsfunktionen: ReLU (modern), Sigmoid (historisch), Tanh

### Von der Schicht zum Deep Learning

- **Input Layer:** Rohdaten (Pixel, Log-Zeilen)
- **Hidden Layer(s):** Merkmale extrahieren (Kanten → Formen → Objekte)
- **Output Layer:** Klassifikation/Regression
- **"Deep":** >3 Hidden Layers

### CNN (Convolutional Neural Network) — Bildforensik

- Spezialisiert auf räumliche Strukturen (Bild, Video)
- **Convolutional Layer:** Filter (Kernel) gleitet über das Bild und erkennt lokale Muster
- **Pooling Layer:** Reduziert Auflösung (max-pooling: nimm das stärkste Signal)
- Forensische Anwendungen:
  - **Deepfake-Erkennung:** CNN lernt feine Gesichts-Artefakte
  - **Bildmanipulation:** Erkennung von Copy-Move oder Splicing
  - **Objekterkennung** in Beweisbildern (Tatwerkzeuge, Kennzeichen)

### RNN / LSTM — Sequenzforensik

- Spezialisiert auf zeitliche Abfolgen (Logs, Tastatureingaben, Netzwerkpakete)
- **LSTM (Long Short-Term Memory):** Merkt sich langfristige Abhängigkeiten
- Forensische Anwendungen:
  - Anomalieerkennung in Zeitreihen (Netzwerk-Traffic)
  - Benutzerverhaltensanalyse (Tippgeschwindigkeit, Mausbewegung)
  - Log-Sequenz-Analyse ("nach Login kam 3 Minuten später ein Download" = normal, "nach Login kam sofort ein Download" = Bot)

### Transformer (seit 2017) — Textforensik

- Grundlage aller modernen LLMs
- **Self-Attention:** Jedes Wort "schaut" auf alle anderen Wörter im Satz
- Parallelisierung → viel schneller trainierbar als RNNs
- Forensische Anwendungen:
  - Textklassifikation (Phishing vs. legitime E-Mail)
  - Named Entity Recognition (IPs, Domains, Personen aus Texten extrahieren)
  - Stilometrie (Text-Autorenidentifikation in Erpresserbriefen)

### Transfer Learning — der praxisnahe Ansatz

1. Nimm ein vortrainiertes Modell (z.B. ResNet50 für Bilder)
2. Entferne die letzten Layer (die spezifischen Output)
3. Friere die frühen Layer ein (die generellen Merkmale)
4. Trainiere neue Output-Layer auf deinen forensischen Daten

Effekt: Statt Millionen von Bildern brauchst du nur hunderte, um gute Ergebnisse zu erzielen.

### Forensischer Workflow mit Deep Learning

1. Problem definieren: Was soll erkannt/klassifziert werden?
2. Daten sammeln und labeln (der aufwändigste Schritt!)
3. Modell auswählen (CNN, LSTM, Transformer → je nach Datentyp)
4. Trainieren (GPU empfohlen, Google Colab mit kostenlosem GPU-Zugang)
5. Evaluieren (Precision, Recall, F1-Score im forensischen Kontext)
6. Als Beweismittel? **Vorsicht:** ML-Ergebnisse sind statistisch, nicht deterministisch — erklärbar machen!

## Praktische Anwendung

- `pip install tensorflow torch` — Deep-Learning-Frameworks
- Google Colab: Kostenlose GPU für Training
- Vortrainierte Modelle: Hugging Face Model Hub, TensorFlow Hub, PyTorch Hub
- Transfer Learning Tutorial: "Fine-tune ResNet for custom images" (Keras)

## Quellen / Weiterführendes

- Goodfellow, Bengio, Courville: Deep Learning (Buch, online frei)
- [Hugging Face Course](https://huggingface.co/learn/nlp-course/)
