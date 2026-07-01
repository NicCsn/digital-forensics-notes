---
title: "Glossar"
tags: [glossar, referenz]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

# Glossar

Zentrale Begriffsammlung zur Digitalen Forensik und Cybersicherheit. Alphabetisch sortiert. Jeder Begriff verlinkt (wo vorhanden) auf die zugehörige Notiz im Repo.

| # | Begriff | Definition | siehe auch |
|---|---------|------------|------------|
| 1 | ACPO | Association of Chief Police Officers (UK); veröffentlichte die 4 Grundprinzipien für den Umgang mit digitalen Beweismitteln | `forensischer-prozess`, `digitale-beweismittel` |
| 2 | ADAM | Advanced Data Acquisition Model; erweitert ACPO-Prinzipien um Sicherheit per Personen/Geräte | `forensischer-prozess` |
| 3 | ADS (Alternate Data Streams) | NTFS-Feature: Dateien können unsichtbare Zusatzdatenströme enthalten (Malware-Versteck) | `anti-forensik` |
| 4 | AES | Symmetrisches Blockverschlüsselungsverfahren, NIST-Standard | `kryptografie` |
| 5 | AmCache | Windows-Registry-Key, der ausgeführte Programme mit SHA1-Hash und Ausführungspfad protokolliert | `windows-registry` |
| 6 | Anomalieerkennung | Identifikation von Daten, die nicht dem erwarteten Muster entsprechen (z.B. Netzwerk-Traffic) | `netzwerkforensik`, `siem` |
| 7 | Anti-Forensik | Techniken zur Verschleierung/Vernichtung digitaler Spuren durch Angreifer | `anti-forensik` |
| 8 | APFS | Apple File System; Copy-on-Write, Snapshot-fähig, optimiert für SSDs, native Verschlüsselung | `dateisysteme` |
| 9 | APIPA | Automatic Private IP Addressing; 169.254.x.x bei DHCP-Ausfall | `ip-adressierung` |
| 10 | ARP-Spoofing | Angriff: Gefälschte ARP-Antworten leiten Traffic um (Man-in-the-Middle) | `dhcp-dns-arp` |
| 11 | Authentifizierung | Nachweis einer Identität (Passwort, Token, Biometrie) | `authentifizierung-pki` |
| 12 | Base64 | Kodierung: Binärdaten in ASCII-Zeichen (3 Byte → 4 Zeichen) | `zahlensysteme` |
| 13 | Beaconing | Regelmäßige, intervallgetreue Verbindungen zu einer C2-Adresse | `netzwerkforensik` |
| 14 | Best Evidence Rule | Grundsatz: Das beste verfügbare Original muss vorgelegt werden | `digitale-beweismittel` |
| 15 | Betriebssystem | Software, die Hardware verwaltet und Anwendungen eine Plattform bietet | `betriebssystem-architekturen` |
| 16 | BitLocker | Windows-Vollverschlüsselung (TPM, USB-Key, PIN, Recovery-Key) | `datentraeger-verschluesselung` |
| 17 | Brute-Force | Systematisches Durchprobieren aller möglichen Kombinationen (Passwörter/Schlüssel) | `kryptoanalyse` |
| 18 | C2 (Command & Control) | Infrastruktur zur Steuerung von Malware/Botnets | `malware-analyse-dynamisch` |
| 19 | CaaS | Cybercrime-as-a-Service; kriminelle Dienstleistungen im Darknet | `cybercrime-oekonomie` |
| 20 | Caesar-Chiffre | Historische monoalphabetische Substitution (Buchstabenverschiebung) | `kryptografie`, `kryptoanalyse` |
| 21 | Chain of Custody | Lückenlose Dokumentation aller Zugriffe und Übergaben eines Beweismittels | `forensischer-prozess` |
| 22 | CIA-Triade | Schutzziele: Confidentiality (Vertraulichkeit), Integrity (Integrität), Availability (Verfügbarkeit) | `schutzziele` |
| 23 | CIDR | Classless Inter-Domain Routing; Notation für IP-Bereiche (/24, /16...) | `ip-adressierung` |
| 24 | CNN | Convolutional Neural Network; Deep-Learning-Architektur für Bildanalyse | `neuronale-netze` |
| 25 | CRAAP-Test | Quellenbewertung: Currency, Relevance, Authority, Accuracy, Purpose | `osint-recherche` |
| 26 | CSRF | Cross-Site Request Forgery; Angreifer bringt Browser des Opfers zu ungewollten Aktionen | `web-sicherheit` |
| 27 | Darknet | Über Tor/I2P zugänglicher, nicht indexierter Teil des Internets | `darknet-tor` |
| 28 | dd | Bit-genaues Kopiertool für forensisches Imaging | `forensisches-imaging` |
| 29 | Deepfake | KI-generierte synthetische Medien (Gesichter, Stimmen) | `bildforensik` |
| 30 | DHCP | Protokoll zur automatischen IP-Adressvergabe im Netzwerk (DORA: Discover, Offer, Request, Ack) | `dhcp-dns-arp` |
| 31 | Diffie-Hellman | Asymmetrisches Schlüsselaustauschverfahren | `kryptografie` |
| 32 | DNS-Cache-Poisoning | Angriff auf DNS-Resolver, um falsche IPs einzuschleusen | `dhcp-dns-arp` |
| 33 | DNS-Tunnel | Covert Channel: Daten werden in DNS-Abfragen versteckt | `netzwerkforensik` |
| 34 | DREAD | Risikobewertung: Damage, Reproducibility, Exploitability, Affected Users, Discoverability | `risikoanalyse` |
| 35 | DSGVO | Datenschutz-Grundverordnung; EU-weiter Datenschutzrahmen | `dsgvo` |
| 36 | E01 (EWF) | Expert Witness Format; forensisches Image-Format mit integrierten Hashes und Metadaten | `forensisches-imaging` |
| 37 | ECC (Elliptic Curve) | Asymmetrische Kryptografie mit elliptischen Kurven (kleinere Schlüssel als RSA) | `kryptografie` |
| 38 | ELA (Error Level Analysis) | Forensische Methode zur Erkennung von Bildmanipulationen (JPEG-Kompressionsartefakte) | `bildforensik` |
| 39 | Endianness | Byte-Reihenfolge: Big-Endian vs. Little-Endian | `zahlensysteme` |
| 40 | Entropie | Maß für den Informationsgehalt / Zufälligkeit von Daten (hohe Entropie = verschlüsselt) | `kryptoanalyse` |
| 41 | EXIF | Exchangeable Image File Format; Metadaten-Standard für Fotos (Kamera, GPS, Zeit) | `bildforensik`, `osint-recherche` |
| 42 | ext4 | Standard-Linux-Dateisystem; Inode-basiert, Journaling, extents | `dateisysteme` |
| 43 | FAT | File Allocation Table; älteres Dateisystem für USB-Sticks, SD-Karten | `dateisysteme` |
| 44 | File Carving | Wiederherstellung gelöschter Dateien anhand von Header/Footer-Signaturen | `file-carving` |
| 45 | FileVault | Apples Vollverschlüsselungslösung für macOS | `datentraeger-verschluesselung` |
| 46 | Gold Hackathon | Team-basierte Hackathon-Aufgabe im 5. Semester; kreative Problemlösung unter Zeitdruck | `softwareentwicklungsprozess` |
| 47 | Google Dorks | Erweiterte Google-Suchoperatoren (site:, filetype:, intitle:...) | `osint-recherche` |
| 48 | GPT | GUID Partition Table; moderner MBR-Nachfolger mit Redundanz (Header am Anfang und Ende) | `datentraeger-forensik` |
| 49 | Hash (kryptografisch) | Einweg-Funktion, die Daten beliebiger Länge auf Hash fester Länge abbildet | `kryptografie` |
| 50 | Hashcat | GPU-basiertes Tool zum Knacken von Passwort-Hashes (MD5, SHA, NTLM, WPA2, LUKS...) | `kryptoanalyse` |
| 51 | I2P | Invisible Internet Project; Peer-to-Peer-Anonymisierungsnetzwerk (Garlic Routing) | `darknet-tor` |
| 52 | ICMP | Internet Control Message Protocol; Ping, Traceroute, Fehlermeldungen | `tcp-ip` |
| 53 | IDS/IPS | Intrusion Detection/Prevention System; erkennt (IDS) und blockiert (IPS) Angriffe | `vpn-firewalls` |
| 54 | Incident Response (IR) | Strukturierter Prozess zum Umgang mit Sicherheitsvorfällen | `security-incident-management` |
| 55 | Inode | Datenstruktur in Unix-Dateisystemen mit Metadaten und Blockzeigern einer Datei | `dateisysteme`, `datentraeger-forensik` |
| 56 | IOC | Indicator of Compromise; forensische Spur, die auf eine Kompromittierung hindeutet (IP, Hash, Domain) | `triage`, `netzwerkforensik` |
| 57 | IPv4 / IPv6 | Internet Protocol Version 4 (32 Bit) / Version 6 (128 Bit) | `ip-adressierung` |
| 58 | John the Ripper | Passwort-Cracking-Tool mit Fokus auf Unix-Passwörter und viele Hash-Formate | `kryptoanalyse` |
| 59 | JTAG | Hardware-Debug-Schnittstelle für eingebettete Systeme (Flash-Speicher auslesen) | `embedded-systems` |
| 60 | Kategorischer Imperativ | Kants ethisches Prinzip: Handle so, dass deine Maxime allgemeines Gesetz werden könnte | `ethik` |
| 61 | Kerberos | Netzwerk-Authentifizierungsprotokoll (Microsoft AD: TGT, Service-Tickets) | `authentifizierung-pki` |
| 62 | Kerckhoffs-Prinzip | Sicherheit eines Kryptosystems darf nur vom geheimen Schlüssel abhängen, nicht vom Algorithmus | `kryptografie` |
| 63 | Kryptoanalyse | Wissenschaft vom Brechen von Verschlüsselung ohne Kenntnis des Schlüssels | `kryptoanalyse` |
| 64 | LiME | Linux Memory Extractor; Kernel-Modul zum Erstellen forensischer RAM-Dumps | `arbeitsspeicher-forensik` |
| 65 | LLM (Large Language Model) | Großes neuronales Netz für Textverarbeitung (GPT, Claude, Llama) | `llms-forensik` |
| 66 | LUKS | Linux Unified Key Setup; Standard-Verschlüsselung unter Linux (bis zu 8 Passwort-Slots) | `datentraeger-verschluesselung` |
| 67 | MBR | Master Boot Record; ältere Partitionstabelle (Sektor 0) | `datentraeger-forensik` |
| 68 | MFA | Multi-Faktor-Authentifizierung; mind. 2 der 3 Faktoren (Wissen, Besitz, Biometrie) | `authentifizierung-pki` |
| 69 | MFT | Master File Table; zentrale Metadaten-Struktur von NTFS (jeder Eintrag 1024 Bytes) | `dateisysteme`, `windows-registry` |
| 70 | NAT | Network Address Translation; private IPs auf öffentliche abbilden | `vpn-firewalls` |
| 71 | NetFlow / IPFIX | Netzwerk-Metadaten: Quell-/Ziel-IP, Ports, Bytes, kein Payload | `netzwerkforensik` |
| 72 | NIST SP 800-86 | NIST-Publikation: Guide to Integrating Forensic Techniques into Incident Response | `forensischer-prozess` |
| 73 | NTFS | New Technology File System; Standard-Windows-Dateisystem, MFT-basiert | `dateisysteme`, `windows-registry` |
| 74 | O-Notation | Landau-Notation; beschreibt Laufzeit-/Speicherverhalten von Algorithmen (O(n), O(log n)...) | `algorithmen` |
| 75 | OOP | Objektorientierte Programmierung (Klassen, Vererbung, Polymorphie, Kapselung) | `oop` |
| 76 | OPSEC | Operations Security; Maßnahmen zur Verschleierung eigener Aktivitäten (OSINT) | `osint-anonymisierung` |
| 77 | OSI-Modell | 7-Schichten-Referenzmodell für Netzwerkprotokolle | `tcp-ip` |
| 78 | OSINT | Open Source Intelligence; Sammlung/Analyse öffentlich zugänglicher Informationen | `osint-lifecycle` |
| 79 | OWASP Top 10 | Liste der 10 kritischsten Sicherheitsrisiken für Webanwendungen | `web-sicherheit` |
| 80 | Pagefile / Swap | Auslagerungsspeicher auf Disk; kann RAM-Inhalte enthalten → forensisch wertvoll | `memory-management` |
| 81 | PCAP | Packet Capture; Standard-Dateiformat für Netzwerkverkehr-Aufzeichnungen | `wireshark`, `netzwerkforensik` |
| 82 | Phishing | Social-Engineering-Angriff: Vorspiegelung falscher Identität zur Datenerlangung | `web-sicherheit`, `cybercrime-oekonomie` |
| 83 | PKI | Public Key Infrastructure; Zertifikate, CAs, Vertrauensketten | `authentifizierung-pki` |
| 84 | Post-Quantum-Krypto | Kryptoverfahren, die gegen Quantencomputer-Angriffe resistent sind | `post-quantum` |
| 85 | Prefetch | Windows-Ordner mit .pf-Dateien, die Ausführungshistorie von Programmen dokumentieren | `betriebssystem-forensik` |
| 86 | RaaS | Ransomware-as-a-Service: Kriminelles Geschäftsmodell (Operator + Affiliate) | `cybercrime-oekonomie` |
| 87 | Random Forest | ML-Ensemble-Verfahren aus vielen Decision Trees | `decision-trees` |
| 88 | Registry (Windows) | Zentrale Konfigurationsdatenbank unter Windows | `windows-registry`, `windows-administration` |
| 89 | RSA | Asymmetrisches Kryptosystem, basiert auf Faktorisierung großer Semiprimzahlen | `kryptografie` |
| 90 | ShellBags | Windows-Registry-Daten, die geöffnete Ordner und Fenster-Positionen speichern | `windows-registry` |
| 91 | SIEM | Security Information and Event Management; sammelt und korreliert Logs in Echtzeit | `siem` |
| 92 | Slack Space | Ungenutzter Speicher zwischen Dateiende und Clusterende; kann alte Daten enthalten | `datentraeger-forensik` |
| 93 | Sock Puppet | Fiktive Online-Identität für anonyme OSINT-Recherchen | `osint-anonymisierung` |
| 94 | SQL Injection | Angriff: Einschleusen von SQL-Code über Benutzereingaben | `web-sicherheit` |
| 95 | STRIDE | Threat-Modeling-Framework: Spoofing, Tampering, Repudiation, Info-Disclosure, DoS, Elevation | `risikoanalyse` |
| 96 | Tails OS | Amnesisches Live-Betriebssystem, das allen Traffic über Tor leitet | `osint-anonymisierung` |
| 97 | TCP Three-Way-Handshake | Verbindungsaufbau: SYN → SYN-ACK → ACK | `tcp-ip` |
| 98 | Timestomping | Anti-Forensik: Manipulation von Datei-Zeitstempeln zur Spurenverwischung | `anti-forensik` |
| 99 | TKÜ | Telekommunikationsüberwachung nach §§ 100a ff. StPO | `eingriffsrecht` |
| 100 | Tor | The Onion Router; mehrschichtige Verschlüsselung und Routing zur Anonymisierung | `darknet-tor` |
| 101 | Triage | Forensische Ersteinschätzung: Ist das System kompromittiert? Wie schwerwiegend? | `triage` |
| 102 | UDP | User Datagram Protocol; verbindungsloses Transportprotokoll | `tcp-ip` |
| 103 | UEFI | Unified Extensible Firmware Interface; moderner BIOS-Nachfolger (mit Secure Boot) | `betriebssystem-architekturen` |
| 104 | USBSTOR | Registry-Key, der alle jemals angeschlossenen USB-Speichergeräte protokolliert | `windows-registry` |
| 105 | VAD-Tree | Virtual Address Descriptor; Windows-Kernel-Struktur zur Speicherverwaltung pro Prozess | `memory-management` |
| 106 | VLAN | Virtual LAN; logische Netzsegmentierung auf Layer 2 | `routing-switching` |
| 107 | Volatility | Open-Source-Framework für RAM-Analyse (pslist, netscan, malfind...) | `arbeitsspeicher-forensik` |
| 108 | VPN | Virtual Private Network; verschlüsselter Tunnel (IPSec, OpenVPN, WireGuard) | `vpn-firewalls` |
| 109 | Write-Blocker | Hardware/Software, die schreibenden Zugriff auf Speichermedien verhindert | `write-blocker` |
| 110 | XSS | Cross-Site Scripting; JavaScript wird in Webseiten eingeschleust | `web-sicherheit` |
| 111 | YARA | Pattern-Matching-Tool zur Malware-Identifikation und -Klassifikation | `malware-analyse-statisch` |
| 112 | Zeek (ehem. Bro) | Netzwerk-Security-Monitor, der Protokolle parst und automatisiert Logs generiert | `netzwerkforensik` |
