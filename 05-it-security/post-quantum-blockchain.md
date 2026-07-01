---
title: "Post-Quantum-Kryptografie und Blockchain"
tags: [post-quantum, blockchain, kryptowaehrungen, bitcoin, quantencomputer, shor]
type: notes
difficulty: advanced
last_updated: "2026-07-01"
---

## Kurzüberblick

Quantencomputer bedrohen aktuelle asymmetrische Kryptografie (RSA, ECC). Post-Quantum-Kryptografie entwickelt resistente Verfahren. Blockchain ist eine dezentrale, manipulationssichere Datenstruktur — forensisch relevant wegen Kryptowährungen und Smart Contracts.

## Details

### Quanten-Bedrohung

| Algorithmus | Bedroht durch | Betroffene Systeme |
|------------|--------------|-------------------|
| RSA | Shor's Algorithmus | TLS, SSH, digitale Signaturen, GPG |
| ECDSA / ECDH | Shor's Algorithmus | Bitcoin, TLS 1.3, Signal-Protokoll |
| AES-256 | Grover's Algorithmus | Halbiert effektive Schlüssellänge (→ 128 Bit) |
| SHA-256 | Grover's Algorithmus | Halbiert Sicherheitsniveau |

**Zeithorizont:** Unklar. "Harvest now, decrypt later" — Angreifer könnten heute verschlüsselte Daten speichern und in 10-15 Jahren entschlüsseln. Langfristig sensible Daten müssen JETZT mit quantensicheren Verfahren geschützt werden.

### Post-Quantum-Algorithmen (NIST-Standardisierung)

- **CRYSTALS-Kyber:** Schlüsselaustausch (gitterbasiert)
- **CRYSTALS-Dilithium:** Digitale Signaturen (gitterbasiert)
- **SPHINCS+:** Hash-basierte Signaturen (konservativer Ansatz)
- Status: Standardisierung läuft, TLS 1.3 integriert PQC-Hybrid-Modi

### Blockchain-Grundlagen

1. **Block =** Transaktionen + Hash des Vorgängerblocks + Nonce
2. **Mining:** Nonce finden, sodass Block-Hash mit ausreichend Nullen beginnt (Proof-of-Work)
3. **Konsens:** Längste Kette gewinnt — Änderung eines alten Blocks gibt die ganze Kette ungültig

### Forensische Relevanz von Kryptowährungen

#### Bitcoin
- **Pseudonym, nicht anonym:** Jede Transaktion ist öffentlich einsehbar (Blockchain Explorer)
- **Cluster-Analyse:** Gleiche Input-Adressen → gleicher Besitzer
- **Chainalysis, Crystal, Elliptic:** Kommerzielle Tools zur Transaktionsverfolgung
- **Mixer / Tumbler:** Verschleiern den Transaktionsfluss — aber Pattern-Erkennung möglich

#### Monero
- Wirklich anonym (Ring Signatures, Stealth-Adressen, RingCT)
- Keine Transaktionsverfolgung möglich (Stand heute)
- Forensisch: Wenn Täter Monero nutzt → Blockchain-Analyse nutzlos → andere Spuren suchen

#### Smart Contracts (Ethereum)
- Code auf der Blockchain, der automatisch bei Transaktionen ausgeführt wird
- Forensisch: Code ist öffentlich einsehbar → Angriffsmuster analysieren, Betrugsmuster identifizieren
- Flash Loan Attacks, Rug Pulls — Spuren sind in der Blockchain unveränderlich

### Forensisches Vorgehen bei Krypto-Fällen

1. **Wallet-Software identifizieren** (Bitcoin Core, Electrum, MetaMask...)
2. **Wallet-Datei finden** (`wallet.dat`, Seedphrase, private Keys)
3. **Transaktionshistorie analysieren** (Blockchain-Explorer, eigene Full-Node)
4. **Exchange-Verbindung herstellen** (KYC-Daten bei regulierten Börsen)

## Praktische Anwendung / Befehle

- `bitcoin-cli gettransaction <txid>` — Transaktionsdetails (wenn Full-Node)
- Blockchain Explorer: `blockchain.com/explorer`, `etherscan.io`
- `oxt.me` — Bitcoin-Transaktionsgraph visualisieren

## Quellen / Weiterführendes

- Narayanan, A. et al.: Bitcoin and Cryptocurrency Technologies
- [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)
