---
title: "LLMs in der forensischen Analyse"
tags: [ki, llm, forensik, nlp, anomaly-detection, dfir, rag, embeddings]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

KI — insbesondere Large Language Models (LLMs) wie GPT, Claude oder lokale Modelle — findet zunehmend Eingang in die digitale Forensik. Einsatzgebiete reichen von der automatisierten Log-Analyse über Anomalieerkennung bis zur Strukturierung großer, unstrukturierter Datenmengen.

## Details

### Einsatzgebiete

1. **Logfile-Analyse (NLP):** LLMs durchsuchen Syslog-, Webserver- und Firewall-Logs nach Mustern, generieren natürlichsprachliche Zusammenfassungen und unterscheiden relevante von irrelevanten Einträgen
2. **Malware-Analyse:** KI-gestützte Disassemblierung und Code-Erklärung. Auch YARA-Regeln können per Prompting generiert werden
3. **E-Mail-Forensik:** Phishing-Erkennung, Stilanalyse zur Autorenidentifikation, Clustering ähnlicher Nachrichten
4. **Bildforensik:** Deepfake-Erkennung, Manipulationsspuren-Identifikation (ELA), OCR-Textextraktion aus Bildern
5. **Strukturierung:** Extraktion von IOCs (IPs, Domains, Hashes) aus unstrukturierten Threat-Intelligence-Reports

### RAG (Retrieval-Augmented Generation) für forensische Reports

RAG kombiniert ein LLM mit einer Wissensdatenbank. In der Forensik: Du lädst alle gefundenen Artefakte in eine Vektordatenbank, und das LLM generiert daraus automatisch einen forensischen Bericht.

```
Technischer Ablauf:
1. Alle Funde (Logs, Timelines, Datei-Auflistungen) → Embedding-Modell → Vektordatenbank (z.B. ChromaDB)
2. Prompt: "Erstelle einen forensischen Bericht basierend auf den gefundenen Artefakten"
3. RAG-System sucht relevante Fakten aus der Vektordatenbank
4. LLM generiert Bericht mit konkreten Funden (nicht halluziniert)

Qualitätskontrolle: Der Bericht MUSS manuell geprüft werden. RAG reduziert Halluzinationen, eliminiert sie aber nicht.
```

### Embeddings und Similar-Case-Matching

Embeddings sind numerische Vektorrepräsentationen von Text. Gleiche Bedeutung → ähnliche Vektoren:

- **Use Case 1:** "Finde alle Fälle, die diesem ähneln" — Embeddings aller Fallzusammenfassungen in der Datenbank, Abfrage per nearest-neighbor
- **Use Case 2:** "Sind diese beiden Malware-Samples verwandt?" — Embeddings von Disassembly-Output oder Strings vergleichen

### Limitationen und Risiken (erweitert)

- **Halluzination:** LLMs erfinden Fakten — ohne Verifikation unbrauchbar. JEDES LLM-Ergebnis MUSS durch einen menschlichen Analysten validiert werden
- **Chain of Custody:** KI-Analyse muss dokumentierbar und reproduzierbar sein. Prompt, Modell-Version und Seed-Wert protokollieren
- **Datenschutz:** Keine sensiblen Fall-Daten in Cloud-LLMs hochladen ohne Freigabe. Lokale Modelle (Ollama, llama.cpp) als datenschutzkonforme Alternative
- **Gerichtliche Verwertbarkeit:** KI-generierte Analyseergebnisse sind vor Gericht problematisch. Ein LLM kann nicht als "Sachverständiger" auftreten. Der Bericht muss vom menschlichen Analysten verantwortet werden. Das LLM ist ein Werkzeug, nicht die Quelle der Schlussfolgerung

### Gerichtsfeste Dokumentation von KI-Einsatz

Wenn du KI in einer forensischen Analyse einsetzt, dokumentiere:
1. Welches Modell (Name, Version, Parameter)
2. Welcher Prompt wurde verwendet?
3. Welche Daten wurden dem Modell übergeben?
4. Wie wurde das Ergebnis validiert?
5. Wer hat die Validierung durchgeführt?

Beispiel: "Das Modell Llama-3.1-70B (lokal via Ollama) wurde verwendet, um Log-Einträge nach Anomalien zu klassifizieren. Der Prompt lautete: [...]. Es wurden 14.723 Log-Zeilen übergeben. Das Modell markierte 47 Zeilen als anomal. Alle 47 Zeilen wurden manuell vom Analysten überprüft, 12 wurden als tatsächliche IOCs bestätigt."

### Prompt Engineering für DFIR

- Gute Prompts enthalten: Rolle (Forensiker), Kontext (Fallart), Datenformat (Syslog, PCAP), Aufgabenstellung, gewünschtes Output-Format
- Beispiel: "Du bist ein DFIR-Analyst. Analysiere folgende Apache-Log-Zeilen und identifiziere alle IPs mit ungewöhnlich vielen 403- und 404-Antworten pro Minute. Gib das Ergebnis als Markdown-Tabelle aus."

## Praktische Anwendung / Befehle

- `ollama run llama3` — Lokales LLM starten
- Log-Summarization: `cat access.log | head -1000 | ollama run mistral "Fasse Auffälligkeiten zusammen"`
- YARA-Regel-Generierung: "Erstelle eine YARA-Regel für Ransomware mit .locked-Endung"
- `chromadb` + `langchain` für RAG-basierte forensische Assistenz

## Quellen / Weiterführendes

- SANS DFIR Summit — jährliche Vorträge zu KI in der Forensik
- [Ollama — Lokale LLMs](https://ollama.com/)
- Casey, E.: The Role of AI in Digital Forensics (Forensic Science International: Digital Investigation)
