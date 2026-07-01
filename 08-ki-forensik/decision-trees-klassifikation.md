---
title: "Decision Trees und Klassifikation in der Forensik"
tags: [decision-tree, random-forest, klassifikation, id3, forensik, log-analyse]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Decision Trees (Entscheidungsbäume) sind eines der transparentesten ML-Verfahren — und damit besonders gut für die Forensik geeignet, wo Nachvollziehbarkeit entscheidend ist. Du kannst den Entscheidungsbaum ausdrucken und genau zeigen, warum Modell X als "bösartig" klassifiziert wurde.

## Details

### Wie ein Decision Tree funktioniert

1. Der Baum teilt die Daten rekursiv nach dem informativsten Merkmal
2. Jeder Knoten stellt eine Frage: "Ist die Dateigröße > 500 KB?"
3. An den Blättern steht die Klasse: "Malware" oder "Legitim"

**Informationsgewinn (Information Gain):**
- ID3-Algorithmus: Wähle das Merkmal, das die Entropie am stärksten reduziert
- Entropie = Maß für Unsicherheit ("Gemisch" aus Malware/Legitim vs. "Rein" nur Malware)

### Beispiel: Decision Tree für Logfile-Klassifikation

```
                 [Anfragen/Minute]
                 /              \
            < 100                >= 100
            /                      \
    [Tageszeit?]             [Status-Codes > 50% 403?]
     /        \                /                   \
  Tag      Nacht            Ja                    Nein
  /          \              /                       \
Legitim   Verdächtig   [Verschiedene IPs?]     [Große Payload?]
                         /           \           /           \
                      < 5         >= 5       Ja           Nein
                      /              \       /              \
              Brute-Force        DDoS   Exfiltration    Hohe Last
```

### Random Forest — Bäume im Ensemble

- Trainiere 100 verschiedene Decision Trees auf zufälligen Teilmengen der Daten und Merkmale
- Klassifikation durch Mehrheitsentscheid ("Forest")
- Viel robuster als ein einzelner Baum, aber weniger interpretierbar

### Forensische Anwendung: Logfile-Klassifikation

```python
import pandas as pd
from sklearn.tree import DecisionTreeClassifier, export_text

# Features: requests_per_min, unique_ips, error_ratio, avg_payload_size, is_weekend
data = pd.read_csv("log_features.csv")
X = data[["req_per_min", "unique_ips", "err_ratio", "payload", "weekend"]]
y = data["label"]  # "normal" / "attack"

tree = DecisionTreeClassifier(max_depth=4)
tree.fit(X, y)

# Baum ausgeben — nachvollziehbar!
print(export_text(tree, feature_names=list(X.columns)))
```

### Warum Decision Trees für die Forensik?

| Vorteil | Erklärung |
|---------|-----------|
| **Interpretierbar** | Jede Entscheidung ist eine einfache "wenn-dann"-Regel |
| **Keine Normalisierung nötig** | Features müssen nicht skaliert werden |
| **Mixed Data** | Numerische + kategorische Daten gleichzeitig |
| **Feature-Importance** | Zeigt, welche Merkmale am wichtigsten sind (z.B. "Payload-Größe wichtiger als Anzahl IPs") |
| **Vor Gericht erklärbar** | "Das Modell klassifizierte die Aktivität als Angriff, weil die Error-Ratio > 0.5 UND > 100 Anfragen/Minute UND es Nacht ist" |

### Grenzen

- Einzelne Bäume overfitten leicht → Random Forest bevorzugen
- Sehr tiefe Bäume = nicht mehr interpretierbar
- Bei sehr vielen Features können Bäume ineffizient werden → Feature Selection vorab

## Praktische Anwendung

- `from sklearn.tree import DecisionTreeClassifier, plot_tree`
- `tree.feature_importances_` — Welche Merkmale waren entscheidend?
- `export_graphviz(tree, out_file="tree.dot")` → Graphviz → Baum visualisieren
- "Baum in forensischen Bericht einfügen" = maximale Transparenz

## Quellen / Weiterführendes

- Quinlan, J.R.: C4.5: Programs for Machine Learning
- [Scikit-Learn: Decision Trees](https://scikit-learn.org/stable/modules/tree.html)
