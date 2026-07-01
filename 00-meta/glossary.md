---
title: "Glossar"
tags: [glossar, referenz]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

# Glossar

Zentrale Begriffsammlung zur Digitalen Forensik und Cybersicherheit. Alphabetisch sortiert. Jeder Begriff verlinkt (wo vorhanden) auf die zugehoerige Notiz im Repo.

| # | Begriff | Definition | siehe auch |
|---|---------|------------|------------|
| 1 | ACPO | Association of Chief Police Officers (UK); veroeffentlichte die 4 Grundprinzipien fuer den Umgang mit digitalen Beweismitteln | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 2 | ADAM | Advanced Data Acquisition Model; erweitert ACPO-Prinzipien um Sicherheit per Personen/Geraete | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 3 | ADS (Alternate Data Streams) | NTFS-Feature: Dateien koennen unsichtbare Zusatzdatenstroeme enthalten (Malware-Versteck) | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 4 | AES | Symmetrisches Blockverschluesselungsverfahren, NIST-Standard | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 5 | AmCache | Eigenstaendige Registry-Hive-Datei (Amcache.hve), die ausgefuehrte Programme mit SHA1-Hash und Pfad protokolliert. Nicht zu verwechseln mit ShimCache (im laufenden SYSTEM-Hive) | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 6 | Anomalieerkennung | Identifikation von Daten, die nicht dem erwarteten Muster entsprechen (z.B. Netzwerk-Traffic) | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md), [SIEM](05-it-security/siem-und-monitoring.md) |
| 7 | Anti-Forensik | Techniken zur Verschleierung/Vernichtung digitaler Spuren durch Angreifer | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 8 | APFS | Apple File System; Copy-on-Write, Snapshot-faehig, optimiert fuer SSDs, native Verschluesselung | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 9 | APIPA | Automatic Private IP Addressing; 169.254.x.x bei DHCP-Ausfall | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 10 | ARP-Spoofing | Angriff: Gefaelschte ARP-Antworten leiten Traffic um (Man-in-the-Middle) | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 11 | Authentifizierung | Nachweis einer Identitaet (Passwort, Token, Biometrie) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 12 | Base64 | Kodierung: Binaerdaten in ASCII-Zeichen (3 Byte -> 4 Zeichen) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 13 | Beaconing | Regelmaessige, intervallgetreue Verbindungen zu einer C2-Adresse | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 14 | Best Evidence Rule | Grundsatz: Das beste verfuegbare Original muss vorgelegt werden | [Digitale Beweismittel](07-recht-kriminalistik/digitale-beweismittel-grundprinzipien.md) |
| 15 | Betriebssystem | Software, die Hardware verwaltet und Anwendungen eine Plattform bietet | [BS-Architekturen](02-betriebssysteme/betriebssystem-architekturen.md) |
| 16 | BitLocker | Windows-Vollverschluesselung (TPM, USB-Key, PIN, Recovery-Key) | [Datentraeger-Verschluesselung](02-betriebssysteme/datentraeger-verschluesselung.md) |
| 17 | Brute-Force | Systematisches Durchprobieren aller moeglichen Kombinationen (Passwoerter/Schluessel) | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 18 | C2 (Command & Control) | Infrastruktur zur Steuerung von Malware/Botnets | [Malware dynamisch](04-forensik-methoden/malware-analyse-dynamisch.md) |
| 19 | CaaS | Cybercrime-as-a-Service; kriminelle Dienstleistungen im Darknet | [Cybercrime-Oekonomie](06-osint/cybercrime-oekonomie.md) |
| 20 | Caesar-Chiffre | Historische monoalphabetische Substitution (Buchstabenverschiebung) | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 21 | Chain of Custody | Lueckenlose Dokumentation aller Zugriffe und Uebergaben eines Beweismittels | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 22 | CIA-Triade | Schutzziele: Confidentiality, Integrity, Availability | [Schutzziele (CIA)](05-it-security/schutzziele-cia-triad.md) |
| 23 | CIDR | Classless Inter-Domain Routing; Notation fuer IP-Bereiche | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 24 | CNN | Convolutional Neural Network; Deep-Learning-Architektur fuer Bildanalyse | [Neuronale Netze](08-ki-forensik/neuronale-netze-deep-learning.md) |
| 25 | CRAAP-Test | Quellenbewertung: Currency, Relevance, Authority, Accuracy, Purpose | [OSINT-Recherche](06-osint/osint-recherche-methodik.md) |
| 26 | CSRF | Cross-Site Request Forgery; Angreifer bringt Browser des Opfers zu ungewollten Aktionen | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 27 | Darknet | Ueber Tor/I2P zugaenglicher, nicht indexierter Teil des Internets | [Darknet & Tor](03-netzwerke/darknet-tor-i2p.md) |
| 28 | dd | Bit-genaues Kopiertool fuer forensisches Imaging | [Forensisches Imaging](04-forensik-methoden/forensisches-imaging.md) |
| 29 | Deepfake | KI-generierte synthetische Medien (Gesichter, Stimmen) | [Bildforensik](08-ki-forensik/bildforensik-objekterkennung.md) |
| 30 | DHCP | Protokoll zur automatischen IP-Adressvergabe im Netzwerk (DORA) | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 31 | Diffie-Hellman | Asymmetrisches Schluesselaustauschverfahren | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 32 | DNS-Cache-Poisoning | Angriff auf DNS-Resolver, um falsche IPs einzuschleusen | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 33 | DNS-Tunnel | Covert Channel: Daten werden in DNS-Abfragen versteckt | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 34 | DREAD | Risikobewertung: Damage, Reproducibility, Exploitability, Affected Users, Discoverability | [Risikoanalyse](05-it-security/risikoanalyse-threat-modeling.md) |
| 35 | DSGVO | Datenschutz-Grundverordnung; EU-weiter Datenschutzrahmen | [DSGVO](07-recht-kriminalistik/dsgvo-datenschutz.md) |
| 36 | E01 (EWF) | Expert Witness Format; forensisches Image-Format mit integrierten Hashes | [Forensisches Imaging](04-forensik-methoden/forensisches-imaging.md) |
| 37 | ECC (Elliptic Curve) | Asymmetrische Kryptografie mit elliptischen Kurven | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 38 | ELA (Error Level Analysis) | Methode zur Erkennung von Bildmanipulationen (JPEG-Kompressionsartefakte) | [Bildforensik](08-ki-forensik/bildforensik-objekterkennung.md) |
| 39 | Endianness | Byte-Reihenfolge: Big-Endian vs. Little-Endian | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 40 | Entropie | Mass fuer den Informationsgehalt / Zufaelligkeit von Daten | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 41 | EXIF | Exchangeable Image File Format; Metadaten-Standard fuer Fotos | [Bildforensik](08-ki-forensik/bildforensik-objekterkennung.md) |
| 42 | ext4 | Standard-Linux-Dateisystem; Inode-basiert, Journaling, extents | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 43 | FAT | File Allocation Table; aelteres Dateisystem fuer USB-Sticks, SD-Karten | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 44 | File Carving | Wiederherstellung geloeschter Dateien anhand von Header/Footer-Signaturen | [File Carving](02-betriebssysteme/file-carving.md) |
| 45 | FileVault | Apples Vollverschluesselungsloesung fuer macOS | [Datentraeger-Verschluesselung](02-betriebssysteme/datentraeger-verschluesselung.md) |
| 46 | Google Dorks | Erweiterte Google-Suchoperatoren (site:, filetype:, intitle:...) | [OSINT-Recherche](06-osint/osint-recherche-methodik.md) |
| 47 | GPT | GUID Partition Table; moderner MBR-Nachfolger mit Redundanz | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 48 | Hash (kryptografisch) | Einweg-Funktion, die Daten auf Hash fester Laenge abbildet | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 49 | Hashcat | GPU-basiertes Tool zum Knacken von Passwort-Hashes | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 50 | I2P | Invisible Internet Project; Peer-to-Peer-Anonymisierungsnetzwerk (Garlic Routing) | [Darknet & Tor](03-netzwerke/darknet-tor-i2p.md) |
| 51 | ICMP | Internet Control Message Protocol; Ping, Traceroute, Fehlermeldungen | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 52 | IDS/IPS | Intrusion Detection/Prevention System; erkennt (IDS) und blockiert (IPS) Angriffe | [VPN & Firewalls](03-netzwerke/vpn-und-firewalls.md) |
| 53 | Incident Response (IR) | Strukturierter Prozess zum Umgang mit Sicherheitsvorfaellen | [Incident Management](05-it-security/security-incident-management.md) |
| 54 | Inode | Datenstruktur in Unix-Dateisystemen mit Metadaten und Blockzeigern | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 55 | IOC | Indicator of Compromise; forensische Spur auf Kompromittierung | [Triage](04-forensik-methoden/triage-erstanalyse.md), [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 56 | IPv4 / IPv6 | Internet Protocol Version 4 (32 Bit) / Version 6 (128 Bit) | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 57 | John the Ripper | Passwort-Cracking-Tool mit Fokus auf Unix-Passwoerter | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 58 | JTAG | Hardware-Debug-Schnittstelle fuer eingebettete Systeme | [Embedded & IoT](02-betriebssysteme/embedded-systems-iot-forensik.md) |
| 59 | Kategorischer Imperativ | Kants ethisches Prinzip | [Ethik](07-recht-kriminalistik/ethik-informationssicherheit.md) |
| 60 | Kerberos | Netzwerk-Authentifizierungsprotokoll (Microsoft AD: TGT, Service-Tickets) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 61 | Kerckhoffs-Prinzip | Sicherheit eines Kryptosystems darf nur vom geheimen Schluessel abhaengen | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 62 | Kryptoanalyse | Wissenschaft vom Brechen von Verschluesselung ohne Schluessel | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 63 | LiME | Linux Memory Extractor; Kernel-Modul fuer RAM-Dumps | [Arbeitsspeicher-Forensik](04-forensik-methoden/arbeitsspeicher-forensik.md) |
| 64 | LLM (Large Language Model) | Grosses neuronales Netz fuer Textverarbeitung | [LLMs in der Analyse](08-ki-forensik/llms-in-der-forensischen-analyse.md) |
| 65 | LUKS | Linux Unified Key Setup; Standard-Verschluesselung unter Linux | [Datentraeger-Verschluesselung](02-betriebssysteme/datentraeger-verschluesselung.md) |
| 66 | MBR | Master Boot Record; aeltere Partitionstabelle (Sektor 0) | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 67 | MFA | Multi-Faktor-Authentifizierung; mind. 2 der 3 Faktoren | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 68 | MFT | Master File Table; zentrale Metadaten-Struktur von NTFS (1024 Bytes pro Eintrag) | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 69 | NAT | Network Address Translation; private IPs auf oeffentliche abbilden | [VPN & Firewalls](03-netzwerke/vpn-und-firewalls.md) |
| 70 | NetFlow / IPFIX | Netzwerk-Metadaten: Quell-/Ziel-IP, Ports, Bytes, kein Payload | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 71 | NIST SP 800-86 | NIST-Publikation: Guide to Integrating Forensic Techniques | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 72 | NTFS | New Technology File System; Standard-Windows-Dateisystem, MFT-basiert | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 73 | O-Notation | Landau-Notation; beschreibt Laufzeit-/Speicherverhalten von Algorithmen | [Algorithmen](01-grundlagen/algorithmen-und-komplexitaet.md) |
| 74 | OOP | Objektorientierte Programmierung (Klassen, Vererbung, Polymorphie, Kapselung) | [OOP](01-grundlagen/oop-klassen-vererbung.md) |
| 75 | OPSEC | Operations Security; Schutzmassnahmen zur Verschleierung eigener Aktivitaeten | [OSINT-Anonymisierung](06-osint/osint-anonymisierung-opsec.md) |
| 76 | OSI-Modell | 7-Schichten-Referenzmodell fuer Netzwerkprotokolle | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 77 | OSINT | Open Source Intelligence; Sammlung/Analyse oeffentlich zugaenglicher Informationen | [OSINT-Lifecycle](06-osint/osint-lifecycle-und-tooling.md) |
| 78 | OWASP Top 10 | Liste der 10 kritischsten Sicherheitsrisiken fuer Webanwendungen | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 79 | Pagefile / Swap | Auslagerungsspeicher auf Disk; kann RAM-Inhalte enthalten | [Memory Management](02-betriebssysteme/memory-management.md) |
| 80 | PCAP | Packet Capture; Standard-Dateiformat fuer Netzwerkverkehr-Aufzeichnungen | [Wireshark](03-netzwerke/wireshark-basics-paketanalyse.md) |
| 81 | Phishing | Social-Engineering-Angriff: Vorspiegelung falscher Identitaet zur Datenerlangung | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 82 | PKI | Public Key Infrastructure; Zertifikate, CAs, Vertrauensketten | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 83 | Post-Quantum-Krypto | Kryptoverfahren, die gegen Quantencomputer-Angriffe resistent sind | [Post-Quantum](05-it-security/post-quantum-blockchain.md) |
| 84 | Prefetch | Windows-Ordner mit .pf-Dateien (Programm-Ausfuehrungshistorie) | [Spurensuche](02-betriebssysteme/betriebssystem-forensik-spurensuche.md) |
| 85 | RaaS | Ransomware-as-a-Service: Kriminelles Geschaeftsmodell (Operator + Affiliate) | [Cybercrime-Oekonomie](06-osint/cybercrime-oekonomie.md) |
| 86 | Random Forest | ML-Ensemble-Verfahren aus vielen Decision Trees | [Decision Trees](08-ki-forensik/decision-trees-klassifikation.md) |
| 87 | Registry (Windows) | Zentrale Konfigurationsdatenbank unter Windows | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 88 | RSA | Asymmetrisches Kryptosystem, basiert auf Faktorisierung grosser Semiprimzahlen | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 89 | ShellBags | Windows-Registry-Daten: geoeffnete Ordner und Fenster-Positionen | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 90 | SIEM | Security Information and Event Management; sammelt und korreliert Logs | [SIEM](05-it-security/siem-und-monitoring.md) |
| 91 | Slack Space | Ungenutzter Speicher zwischen Dateiende und Clusterende | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 92 | Sock Puppet | Fiktive Online-Identitaet fuer anonyme OSINT-Recherchen | [OSINT-Anonymisierung](06-osint/osint-anonymisierung-opsec.md) |
| 93 | SQL Injection | Angriff: Einschleusen von SQL-Code ueber Benutzereingaben | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 94 | STRIDE | Threat-Modeling-Framework: Spoofing, Tampering, Repudiation, Info Discl., DoS, Elevation | [Risikoanalyse](05-it-security/risikoanalyse-threat-modeling.md) |
| 95 | Tails OS | Amnesisches Live-Betriebssystem, das allen Traffic ueber Tor leitet | [OSINT-Anonymisierung](06-osint/osint-anonymisierung-opsec.md) |
| 96 | TCP Three-Way-Handshake | Verbindungsaufbau: SYN -> SYN-ACK -> ACK | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 97 | Timestomping | Anti-Forensik: Manipulation von Datei-Zeitstempeln | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 98 | TKUe | Telekommunikationsueberwachung nach Par. 100a ff. StPO | [Eingriffsrecht](07-recht-kriminalistik/eingriffsrecht-tkue.md) |
| 99 | Tor | The Onion Router; mehrschichtige Verschluesselung und Routing zur Anonymisierung | [Darknet & Tor](03-netzwerke/darknet-tor-i2p.md) |
| 100 | Triage | Forensische Ersteinschaetzung: Ist das System kompromittiert? | [Triage](04-forensik-methoden/triage-erstanalyse.md) |
| 101 | UDP | User Datagram Protocol; verbindungsloses Transportprotokoll | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 102 | UEFI | Unified Extensible Firmware Interface; moderner BIOS-Nachfolger (mit Secure Boot) | [BS-Architekturen](02-betriebssysteme/betriebssystem-architekturen.md) |
| 103 | USBSTOR | Registry-Key, der alle jemals angeschlossenen USB-Speichergeraete protokolliert | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 104 | VAD-Tree | Virtual Address Descriptor; Windows-Kernel-Struktur zur Speicherverwaltung | [Memory Management](02-betriebssysteme/memory-management.md) |
| 105 | VLAN | Virtual LAN; logische Netzsegmentierung auf Layer 2 | [Routing & Switching](03-netzwerke/routing-switching-vlans.md) |
| 106 | Volatility | Open-Source-Framework fuer RAM-Analyse (pslist, netscan, malfind...) | [Arbeitsspeicher-Forensik](04-forensik-methoden/arbeitsspeicher-forensik.md) |
| 107 | VPN | Virtual Private Network; verschluesselter Tunnel (IPSec, OpenVPN, WireGuard) | [VPN & Firewalls](03-netzwerke/vpn-und-firewalls.md) |
| 108 | Write-Blocker | Hardware/Software, die schreibenden Zugriff auf Speichermedien verhindert | [Write-Blocker](04-forensik-methoden/write-blocker.md) |
| 109 | XSS | Cross-Site Scripting; JavaScript wird in Webseiten eingeschleust | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 110 | YARA | Pattern-Matching-Tool zur Malware-Identifikation und -Klassifikation | [Malware statisch](04-forensik-methoden/malware-analyse-statisch.md) |
| 111 | Zeek (ehem. Bro) | Netzwerk-Security-Monitor, der Protokolle parst und Logs generiert | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 112 | IoT-Security | Sicherheit von vernetzten Geraeten: MQTT, CoAP, Firmware-Signierung, Secure Boot | [IoT-Security](02-betriebssysteme/iot-security-grundlagen.md) |
