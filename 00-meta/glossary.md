---
title: "Glossar"
tags: [glossar, referenz]
type: notes
difficulty: basics
last_updated: "2026-07-01"
---

# Glossar

Alphabetische Begriffsammlung. Jeder Eintrag verlinkt auf die ausfuehrliche Notiz.

---

| # | Begriff | Definition | Mehr |
|---|---------|------------|------|
| 1 | 2er-Komplement | Binaere Darstellung negativer Zahlen. -1 = alle Bits auf 1 | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 2 | A-Record (DNS) | DNS-Eintrag: Hostname -> IPv4-Adresse | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 3 | AAAA-Record (DNS) | DNS-Eintrag: Hostname -> IPv6-Adresse | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 4 | ABAC | Zugriffskontrolle basierend auf Attributen (Nutzer, Ressource, Umgebung) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 5 | ACPO | UK-Richtlinie: 4 Prinzipien fuer digitale Beweismittel | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 6 | ADAM | Erweiterung der ACPO-Prinzipien um Personen-/Geraetesicherheit | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 7 | ADS | NTFS-Feature: versteckte Zusatzdatenstroeme in Dateien (Malware-Versteck) | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 8 | AES | Symmetrische Blockverschluesselung (128/192/256 Bit), NIST-Standard | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 9 | ALU | CPU-Teil fuer arithmetische und logische Operationen | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 10 | AmCache | Registry-Hive-Datei (`Amcache.hve`): ausgefuhrte Programme mit SHA1 | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 11 | AND-Gatter | Logikgatter: Ausgang = 1 nur wenn ALLE Eingaenge 1 sind | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 12 | Anomalieerkennung | Identifikation von Daten, die vom erwarteten Muster abweichen | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 13 | Anti-Forensik | Techniken zur Verschleierung/Vernichtung digitaler Spuren | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 14 | Anycast | Eine IP wird von mehreren Servern an verschiedenen Orten bedient | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 15 | APFS | Apple File System: Copy-on-Write, Snapshots, native Verschluesselung | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 16 | API | Schnittstelle zwischen Software-Komponenten (REST, SOAP, GraphQL) | [Python-Grundlagen](01-grundlagen/python-grundlagen.md) |
| 17 | APIPA | Selbst zugewiesene IP (169.254.x.x) bei DHCP-Ausfall | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 18 | ARP-Spoofing | Gefaelschte ARP-Antworten leiten Traffic um (Man-in-the-Middle) | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 19 | ASCII | 7-Bit-Zeichenkodierung (128 Zeichen), Urvater von UTF-8 | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 20 | ASLR | Zufaellige Speicheranordnung als Exploit-Schutz | [Memory Management](02-betriebssysteme/memory-management.md) |
| 21 | Assembler | Uebersetzt Mnemonics (MOV, ADD) in Maschinencode | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 22 | Authentifizierung | Identitaetsnachweis: Wissen (Passwort), Besitz (Token), Inhaerenz (Biometrie) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 23 | Autopsy | Open-Source-Forensik-Plattform (GUI fuer Sleuth Kit) | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 24 | BAM | Windows-Key: letzte Ausfuehrungszeit jeder Datei pro Benutzer | [Spurensuche](02-betriebssysteme/betriebssystem-forensik-spurensuche.md) |
| 25 | Base64 | Kodierung: 3 Bytes -> 4 ASCII-Zeichen (A-Z, a-z, 0-9, +, /) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 26 | Beaconing | Regelmaessige C2-Verbindungen (z.B. alle 60s ein HTTP-Request) | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 27 | Beschlagnahme | Strafprozessuale Sicherstellung eines Gegenstandes | [Digitale Beweismittel](07-recht-kriminalistik/digitale-beweismittel-grundprinzipien.md) |
| 28 | Best Evidence Rule | Das beste verfuegbare Original muss vorgelegt werden | [Digitale Beweismittel](07-recht-kriminalistik/digitale-beweismittel-grundprinzipien.md) |
| 29 | Betriebssystem | Verwaltet Hardware und bietet Anwendungen eine Plattform | [BS-Architekturen](02-betriebssysteme/betriebssystem-architekturen.md) |
| 30 | BGP | Routing-Protokoll des Internets zwischen autonomen Systemen | [Routing & Switching](03-netzwerke/routing-switching-vlans.md) |
| 31 | Binaer | Basis-2-System: 0 oder 1. Grundlage aller digitalen Daten | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 32 | Bit | Kleinste Informationseinheit: 0 oder 1. 8 Bit = 1 Byte | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 33 | BitLocker | Windows-Vollverschluesselung (AES, TPM, PIN, Recovery-Key) | [Datentraeger-Verschluesselung](02-betriebssysteme/datentraeger-verschluesselung.md) |
| 34 | Blue Team | Defensives Sicherheitsteam: Monitoring, IR, Threat Hunting | [Incident Management](05-it-security/security-incident-management.md) |
| 35 | Boolesche Algebra | Mathematik mit 0/1 und AND, OR, NOT. Grundlage der Digitaltechnik | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 36 | Bootloader | Laedt den OS-Kernel beim Start (GRUB, Windows Boot Manager) | [BS-Architekturen](02-betriebssysteme/betriebssystem-architekturen.md) |
| 37 | Broadcast | Nachricht an ALLE Geraete im Netzsegment (FF:FF:FF:FF:FF:FF) | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 38 | Brute-Force | Systematisches Durchprobieren aller Kombinationen (Passwoerter) | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 39 | Byte | 8 Bit. Kleinste adressierbare Speichereinheit (0-255) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 40 | Bytecode | Zwischencode, von einer VM ausgefuehrt (Java, CPython, .NET) | [Programmierparadigmen](01-grundlagen/programmierparadigmen.md) |
| 41 | C2 (Command & Control) | Infrastruktur zur Steuerung kompromittierter Systeme | [Malware dynamisch](04-forensik-methoden/malware-analyse-dynamisch.md) |
| 42 | CaaS | Cybercrime-as-a-Service: kriminelle Dienstleistungen als Abo-Modell | [Cybercrime-Oekonomie](06-osint/cybercrime-oekonomie.md) |
| 43 | Cache | Schneller Zwischenspeicher zwischen CPU und RAM (L1/L2/L3) | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 44 | Caesar-Chiffre | Monoalphabetische Substitution: Buchstaben um k Positionen verschieben | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 45 | CDN | Verteilt Inhalte weltweit (Cloudflare, Akamai) | [Cloud-Forensik](04-forensik-methoden/cloud-forensik.md) |
| 46 | Chain of Custody | Lueckenlose Dokumentation aller Beweismittel-Zugriffe | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 47 | CIA-Triade | Schutzziele: Vertraulichkeit, Integritaet, Verfuegbarkeit | [Schutzziele (CIA)](05-it-security/schutzziele-cia-triad.md) |
| 48 | CIDR | IP-Netznotation: /24 = 256 Adressen (254 nutzbar) | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 49 | CNAME-Record (DNS) | DNS-Alias: ein Hostname verweist auf einen anderen | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 50 | CNN | Neuronales Netz fuer Bildanalyse (Kernel gleiten ueber Eingabe) | [Neuronale Netze](08-ki-forensik/neuronale-netze-deep-learning.md) |
| 51 | Compiler | Uebersetzt Quellcode VOR der Ausfuehrung in Maschinencode | [Programmierparadigmen](01-grundlagen/programmierparadigmen.md) |
| 52 | CRAAP-Test | Quellenbewertung: Aktualitaet, Relevanz, Autoritaet, Genauigkeit, Zweck | [OSINT-Recherche](06-osint/osint-recherche-methodik.md) |
| 53 | CSRF | Angriff: Browser fuehrt ungewollte Aktionen auf Webanwendung aus | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 54 | CVE / CVSS | Eindeutige Schwachstellen-ID (CVE-2023-...) und Schweregrad (0-10) | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 55 | CWE | Hierarchische Liste von Schwachstellen-Typen (CWE-79 = XSS) | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 56 | Daemon | Hintergrundprozess unter Unix (sshd, httpd, cron) | [Linux-Administration](02-betriebssysteme/linux-administration.md) |
| 57 | DAM | Windows-Key: aehnlich BAM, protokolliert Programm-Ausfuehrungen | [Spurensuche](02-betriebssysteme/betriebssystem-forensik-spurensuche.md) |
| 58 | Darknet | Ueber Tor/I2P erreichbarer, nicht indexierter Teil des Internets | [Darknet & Tor](03-netzwerke/darknet-tor-i2p.md) |
| 59 | dd | Bit-genaues Kopierwerkzeug unter Unix/Linux | [Forensisches Imaging](04-forensik-methoden/forensisches-imaging.md) |
| 60 | Deepfake | KI-generierte synthetische Medien (Gesichter, Stimmen) | [Bildforensik](08-ki-forensik/bildforensik-objekterkennung.md) |
| 61 | DEP / NX-Bit | Speicherbereiche als nicht-ausfuehrbar markieren (Exploit-Schutz) | [Memory Management](02-betriebssysteme/memory-management.md) |
| 62 | Design Pattern | Wiederverwendbare Loesungsschablone (Singleton, Factory, Observer) | [OOP](01-grundlagen/oop-klassen-vererbung.md) |
| 63 | DHCP | Automatische IP-Vergabe: Discover -> Offer -> Request -> Acknowledge | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 64 | Diffie-Hellman | Asymmetrischer Schluesselaustausch ueber unsicheren Kanal | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 65 | DMA | Direkter Speicherzugriff von Hardware ohne CPU. Angriffsvektor (Thunderbolt) | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 66 | DNSSEC | Kryptografisch signierte DNS-Antworten gegen Cache-Poisoning | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 67 | DNS-Cache-Poisoning | Falsche IPs in DNS-Cache einschleusen | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 68 | DNS-Tunnel | Covert Channel: Daten in DNS-Abfragen versteckt | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 69 | DoH / DoT | DNS ueber HTTPS/TLS: verschluesselte DNS-Abfragen | [TLS/SSL-Forensik](03-netzwerke/tls-ssl-forensik.md) |
| 70 | DREAD | Risikobewertung: Damage, Reproducibility, Exploitability, Affected, Discoverability | [Risikoanalyse](05-it-security/risikoanalyse-threat-modeling.md) |
| 71 | DRY | Don't Repeat Yourself: jedes Wissen nur einmal im System | [Softwareentwicklung](01-grundlagen/softwareentwicklungsprozess.md) |
| 72 | DSGVO | EU-Datenschutz-Grundverordnung. Meldepflicht bei Datenpannen: 72h | [DSGVO](07-recht-kriminalistik/dsgvo-datenschutz.md) |
| 73 | Durchsuchung | Betreten von Raeumlichkeiten zur Beweissuche. Braucht richterlichen Beschluss | [Strafrecht AT](07-recht-kriminalistik/strafrecht-allgemeiner-teil.md) |
| 74 | E01 (EWF) | Forensisches Image-Format mit integrierten Hashes und Metadaten | [Forensisches Imaging](04-forensik-methoden/forensisches-imaging.md) |
| 75 | ECC | Elliptische Kurven: kleinere Schluessel als RSA bei gleicher Sicherheit | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 76 | ELA | JPEG-Kompressionsartefakte analysieren zur Erkennung von Bildmanipulation | [Bildforensik](08-ki-forensik/bildforensik-objekterkennung.md) |
| 77 | EnCase | Kommerzielle Forensik-Suite, nutzt das E01-Format | [Forensisches Imaging](04-forensik-methoden/forensisches-imaging.md) |
| 78 | Endianness | Byte-Reihenfolge: Big-Endian (Netzwerk) vs. Little-Endian (x86) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 79 | Entropie | Mass fuer Zufaelligkeit: hoch = verschluesselt, niedrig = strukturiert | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 80 | Ethernet | Layer-2-Technologie (IEEE 802.3), MAC-Adressen (48 Bit) | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 81 | Exec | Unix-Syscall: ersetzt aktuellen Prozess durch neues Programm | [Prozessmanagement](02-betriebssysteme/prozessmanagement-threads.md) |
| 82 | EXIF | Metadaten-Standard fuer Fotos: Kamera, GPS, Zeit | [Bildforensik](08-ki-forensik/bildforensik-objekterkennung.md) |
| 83 | Exploit | Ausnutzen einer Schwachstelle zum Eindringen in ein System | [Malware statisch](04-forensik-methoden/malware-analyse-statisch.md) |
| 84 | ext4 | Linux-Standard-Dateisystem: Inodes, Journaling, extents | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 85 | FAT | Dateisystem fuer USB/SD-Karten. Geloeschte Dateien: E5-Marker | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 86 | File Carving | Geloeschte Dateien anhand von Header/Footer-Signaturen wiederherstellen | [File Carving](02-betriebssysteme/file-carving.md) |
| 87 | FileVault | macOS-Vollverschluesselung (XTS-AES-128), Schluessel im Secure Enclave | [Datentraeger-Verschluesselung](02-betriebssysteme/datentraeger-verschluesselung.md) |
| 88 | Firmware | In Hardware eingebettete Software (BIOS/UEFI, IoT-Flash) | [Embedded & IoT](02-betriebssysteme/embedded-systems-iot-forensik.md) |
| 89 | Flipflop | Digitalschaltung, die 1 Bit speichert (Basis von Registern) | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 90 | Fork | Unix-Syscall: erstellt eine Kindprozess-Kopie des Aufrufers | [Prozessmanagement](02-betriebssysteme/prozessmanagement-threads.md) |
| 91 | FPU | CPU-Teil fuer Gleitkomma-Berechnungen (IEEE 754) | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 92 | FTK | Kommerzielle Forensik-Suite von AccessData/Exterro | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 93 | Garbage Collection | Automatische Speicherbereinigung in Java, C#, Python, Go | [Datenstrukturen](01-grundlagen/datenstrukturen.md) |
| 94 | Gefahr im Verzug | Massnahme ohne richterlichen Beschluss bei drohendem Beweisverlust | [Strafrecht AT](07-recht-kriminalistik/strafrecht-allgemeiner-teil.md) |
| 95 | Gleitkomma (IEEE 754) | Standard fuer Fliesskommazahlen: float (32 Bit), double (64 Bit) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 96 | Google Dorks | Erweiterte Google-Suche: site:, filetype:, intitle:, inurl: | [OSINT-Recherche](06-osint/osint-recherche-methodik.md) |
| 97 | GPT | Moderne Partitionstabelle (UEFI): 128 Partitionen, redundante Header | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 98 | GraphQL | API-Sprache von Facebook: Client bestimmt, welche Felder er bekommt | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 99 | gRPC | High-Performance-RPC mit Protocol Buffers und HTTP/2 | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 100 | Hardlink | Mehrere Dateinamen zeigen auf denselben Inode | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 101 | Hash | Einweg-Funktion: gleiche Eingabe -> gleicher fester Hash (z.B. SHA-256) | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 102 | Hashcat | GPU-basiertes Tool zum Passwort-Cracken (NTLM, WPA2, LUKS...) | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 103 | Heap | Dynamischer Speicherbereich (malloc/new). RAM-Dump enthaelt geloeschte Objekte | [Datenstrukturen](01-grundlagen/datenstrukturen.md) |
| 104 | HTTP-Methoden | GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 105 | HTTP-Status-Codes | 200 OK, 301 Redirect, 403 Forbidden, 404 Not Found, 500 Server Error | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 106 | I2P | P2P-Anonymisierungsnetzwerk mit Garlic Routing | [Darknet & Tor](03-netzwerke/darknet-tor-i2p.md) |
| 107 | IaaS / PaaS / SaaS | Cloud-Modelle: Infrastruktur, Plattform, Software as a Service | [Cloud-Forensik](04-forensik-methoden/cloud-forensik.md) |
| 108 | ICMP | Ping, Traceroute, Fehlermeldungen. Kann fuer Covert Channels genutzt werden | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 109 | IDS / IPS | Erkennt (IDS) und blockiert (IPS) Angriffe. Snort, Suricata, Zeek | [VPN & Firewalls](03-netzwerke/vpn-und-firewalls.md) |
| 110 | In dubio pro reo | Im Zweifel fuer den Angeklagten | [Strafrecht AT](07-recht-kriminalistik/strafrecht-allgemeiner-teil.md) |
| 111 | Incident Response (IR) | Strukturierter Prozess: Praeparation -> Erkennung -> Eindaemmung -> Bereinigung | [Incident Management](05-it-security/security-incident-management.md) |
| 112 | Indiz | Indirekter Beweis (z.B. Login-Zeitpunkt = Anwesenheit am System) | [Kriminalistik](07-recht-kriminalistik/kriminalistik-grundlagen.md) |
| 113 | Init-System | Erster Prozess (PID 1): SysV-Init, systemd, OpenRC | [Linux-Administration](02-betriebssysteme/linux-administration.md) |
| 114 | Inode | Unix-Datenstruktur: Metadaten + Blockzeiger einer Datei | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 115 | Interpreter | Fuehrt Quellcode Zeile fuer Zeile aus (Python, Ruby, JS) | [Programmierparadigmen](01-grundlagen/programmierparadigmen.md) |
| 116 | Interrupt | Signal an die CPU: Hardware-Interrupt oder Software-Interrupt (Syscall) | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 117 | IOC | Indicator of Compromise: IP, Hash, Domain, Registry-Key einer Attacke | [Triage](04-forensik-methoden/triage-erstanalyse.md) |
| 118 | IoT-Security | Sicherheit vernetzter Geraete: MQTT, CoAP, Firmware-Signierung, Secure Boot | [IoT-Security](02-betriebssysteme/iot-security-grundlagen.md) |
| 119 | IPv4 | 32-Bit-Adressraum (4,3 Mrd). Private: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 120 | IPv6 | 128-Bit-Adressraum. Link-Local: fe80::/10. Privacy Extensions erschweren Tracking | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 121 | JA3 / JA4 | TLS-Fingerprinting: Hash der Client-Hello-Parameter identifiziert Malware | [TLS/SSL-Forensik](03-netzwerke/tls-ssl-forensik.md) |
| 122 | JIT | Uebersetzt haeufigen Code zur Laufzeit in Maschinencode (V8, HotSpot) | [Programmierparadigmen](01-grundlagen/programmierparadigmen.md) |
| 123 | John the Ripper | Passwort-Cracker mit Fokus auf Unix-Hashes und Wordlist-Angriffen | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 124 | JTAG | Hardware-Debug-Schnittstelle (IEEE 1149.1) zum Flash-Auslesen | [Embedded & IoT](02-betriebssysteme/embedded-systems-iot-forensik.md) |
| 125 | JWT | JSON Web Token fuer Authentifizierung. Payload NUR kodiert, NICHT verschluesselt | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 126 | Kategorischer Imperativ | Kants Prinzip: Handle so, dass deine Maxime allgemeines Gesetz sein koennte | [Ethik](07-recht-kriminalistik/ethik-informationssicherheit.md) |
| 127 | Kerberos | Netzwerk-Authentifizierung (AD). Golden Ticket = KRBTGT-Hash-Kompromittierung | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 128 | Kerckhoffs-Prinzip | Sicherheit haengt nur vom Schluessel ab, nicht vom Algorithmus | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 129 | KISS | Keep It Simple, Stupid: Einfachheit ist ein Sicherheitsziel | [Softwareentwicklung](01-grundlagen/softwareentwicklungsprozess.md) |
| 130 | Kryptoanalyse | Brechen von Verschluesselung ohne Schluessel (Brute-Force, Haeufigkeitsanalyse) | [Kryptoanalyse](05-it-security/kryptoanalyse.md) |
| 131 | LBA | Fortlaufende Sektornummern statt physischer Geometrie (Zylinder/Kopf/Sektor) | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 132 | Legalitaetsprinzip | Staatsanwaltschaft MUSS bei hinreichendem Verdacht Anklage erheben | [Strafrecht AT](07-recht-kriminalistik/strafrecht-allgemeiner-teil.md) |
| 133 | LiME | Linux Memory Extractor: Kernel-Modul fuer forensische RAM-Dumps | [Arbeitsspeicher-Forensik](04-forensik-methoden/arbeitsspeicher-forensik.md) |
| 134 | Linker | Verbindet Objektdateien (.o) zu einer ausfuehrbaren Datei | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 135 | Living-off-the-Land | Nutzung legitimer Systemtools fuer Angriffe (PowerShell, WMI, certutil) | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 136 | LLM | Grosses neuronales Netz fuer Text (GPT, Claude, Llama). Forensik: Log-Analyse | [LLMs in der Analyse](08-ki-forensik/llms-in-der-forensischen-analyse.md) |
| 137 | LOLBAS | Katalog von Windows-Tools, die fuer Angriffe missbraucht werden koennen | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 138 | LUKS | Linux-Verschluesselung (bis 8 Passwort-Slots). Hashcat-Modus: -m 14600 | [Datentraeger-Verschluesselung](02-betriebssysteme/datentraeger-verschluesselung.md) |
| 139 | MAC-Adresse | 48-Bit-Hardware-Adresse (AA:BB:CC:DD:EE:FF). Erste 24 Bit: Hersteller | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 140 | MBR | Sektor 0: Bootloader + Partitionstabelle (4 primaere, max. 2 TB) | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 141 | MFA | Multi-Faktor-Authentifizierung: >=2 Faktoren (Passwort + TOTP-Token) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 142 | MFT | Master File Table (NTFS): 1024-Byte-Eintraege mit Metadaten und Daten | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 143 | Microservices | Architektur: kleine, unabhaengige Dienste mit eigenen Datenbanken | [Cloud-Forensik](04-forensik-methoden/cloud-forensik.md) |
| 144 | MITRE ATT&CK | Framework fuer Taktiken und Techniken von Angreifern | [Incident Management](05-it-security/security-incident-management.md) |
| 145 | Modus Operandi | Charakteristische Arbeitsweise eines Taeters (immer gleiche Tools, gleiche Methoden) | [Kriminalistik](07-recht-kriminalistik/kriminalistik-grundlagen.md) |
| 146 | MTU | Maximale Paketgroesse auf Layer 2 (Ethernet: 1500 Bytes) | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 147 | Multicast | Nachricht an eine Gruppe (224.0.0.0/4, IGMP) | [IP-Adressierung](03-netzwerke/ip-adressierung-subnetting.md) |
| 148 | MX-Record (DNS) | DNS-Eintrag: Mailserver einer Domain (mit Prioritaet) | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 149 | NAT | Uebersetzt private in oeffentliche IPs (SNAT/DNAT). Forensisch: NAT-Tabelle noetig | [VPN & Firewalls](03-netzwerke/vpn-und-firewalls.md) |
| 150 | NetFlow | Netzwerk-Metadaten: IPs, Ports, Bytes, KEIN Payload | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 151 | Nibble | 4 Bit = eine Hex-Ziffer (0-F) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 152 | NIST SP 800-86 | NIST-Leitfaden: 4-Phasen-Prozess fuer forensische Untersuchungen | [Forensischer Prozess](04-forensik-methoden/forensischer-prozess-chain-of-custody.md) |
| 153 | NOT-Gatter | Logikgatter: invertiert den Eingang (0->1, 1->0) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 154 | NS-Record (DNS) | DNS-Eintrag: autoritative Nameserver einer Domain | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 155 | NTFS | Windows-Dateisystem: MFT, Journaling, ACLs, EFS, ADS, Kompression | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 156 | O-Notation | Laufzeitverhalten: O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n) | [Algorithmen](01-grundlagen/algorithmen-und-komplexitaet.md) |
| 157 | OAuth 2.0 | Autorisierungs-Framework: "Login mit Google", Access-Tokens | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 158 | OIDC | Identitaetsschicht auf OAuth 2.0 (ID-Token als JWT) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 159 | OOP | Objektorientierte Programmierung: Kapselung, Vererbung, Polymorphie | [OOP](01-grundlagen/oop-klassen-vererbung.md) |
| 160 | OPSEC | Schutz der eigenen Identitaet bei Recherchen (VPN, Sock Puppet) | [OSINT-Anonymisierung](06-osint/osint-anonymisierung-opsec.md) |
| 161 | OR-Gatter | Logikgatter: Ausgang = 1 wenn mind. ein Eingang 1 ist | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 162 | OSI-Modell | 7-Schichten-Netzwerkmodell (Physical -> Application) | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 163 | OSINT | Sammlung und Analyse oeffentlich zugaenglicher Informationen | [OSINT-Lifecycle](06-osint/osint-lifecycle-und-tooling.md) |
| 164 | OSPF | Dynamisches Routing (Link-State), Dijkstra-Algorithmus | [Routing & Switching](03-netzwerke/routing-switching-vlans.md) |
| 165 | Overflow | Arithmetischer Ueberlauf: Ergebnis > Datentyp-Maximum | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 166 | OWASP Top 10 | Die 10 groessten Web-Sicherheitsrisiken (Injection, Broken Access Control...) | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 167 | Pagefile | Windows-Auslagerungsdatei: kann Passwoerter und RAM-Inhalte enthalten | [Memory Management](02-betriebssysteme/memory-management.md) |
| 168 | Payload | Der schaedliche Teil: Verschluesselungsroutine, Shellcode, Reverse-Shell | [Malware statisch](04-forensik-methoden/malware-analyse-statisch.md) |
| 169 | PCAP | Standardformat fuer Netzwerkverkehr-Aufzeichnungen | [Wireshark](03-netzwerke/wireshark-basics-paketanalyse.md) |
| 170 | Pentest | Autorisierter simulierter Angriff zur Sicherheitspruefung | [Incident Management](05-it-security/security-incident-management.md) |
| 171 | Phishing | Social Engineering: gefaelschte E-Mails zur Datenerlangung | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 172 | Pipeline (CPU) | Ueberlappende Ausfuehrung mehrerer Instruktionen (Fetch->Decode->Execute) | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 173 | PKI | Public Key Infrastructure: CAs, Zertifikate, CRLs, OCSP | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 174 | Plaso | Framework zur Extraktion von Zeitstempeln -> Super-Timelines | [Spurensuche](02-betriebssysteme/betriebssystem-forensik-spurensuche.md) |
| 175 | Pointer | Variable, die eine Speicheradresse enthaelt (statt eines Wertes) | [Datenstrukturen](01-grundlagen/datenstrukturen.md) |
| 176 | Post-Quantum-Krypto | Verfahren resistent gegen Quantencomputer (CRYSTALS-Kyber, Dilithium) | [Post-Quantum](05-it-security/post-quantum-blockchain.md) |
| 177 | PTR-Record (DNS) | Reverse-DNS: IP-Adresse -> Hostname | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 178 | Purple Team | Kombination Red+Blue Team: Wissenstransfer, Detection verbessern | [Incident Management](05-it-security/security-incident-management.md) |
| 179 | QUIC | Transportprotokoll auf UDP, Basis von HTTP/3, integriert TLS 1.3 | [TLS/SSL-Forensik](03-netzwerke/tls-ssl-forensik.md) |
| 180 | RaaS | Ransomware-as-a-Service: Operator + Affiliate-Modell | [Cybercrime-Oekonomie](06-osint/cybercrime-oekonomie.md) |
| 181 | Random Forest | ML-Ensemble: viele Decision Trees, Mehrheitsentscheid | [Decision Trees](08-ki-forensik/decision-trees-klassifikation.md) |
| 182 | RBAC | Zugriffskontrolle basierend auf Rollen (AD, IAM) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 183 | Red Team | Offensives Sicherheitsteam: simuliert realistische Angriffe | [Incident Management](05-it-security/security-incident-management.md) |
| 184 | Register (CPU) | Schnellster Speicher direkt in der CPU (RAX, RBX, X0-X30) | [Rechnerarchitektur](01-grundlagen/rechnerarchitektur-von-neumann.md) |
| 185 | Registry (Windows) | Zentrale Windows-Konfigurationsdatenbank. Hives: SAM, SYSTEM, NTUSER.DAT | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 186 | REST | API-Architektur: HTTP-Methoden, zustandslos, URI-basiert | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 187 | RIP | Einfaches Routing-Protokoll (Hop-Count, max. 15) | [Routing & Switching](03-netzwerke/routing-switching-vlans.md) |
| 188 | ROP | Exploit-Technik: kombiniert existierende Codeschnipsel ("Gadgets") | [Memory Management](02-betriebssysteme/memory-management.md) |
| 189 | RSA | Asymmetrisches Kryptosystem (Faktorisierung grosser Semiprimzahlen) | [Kryptografie](05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md) |
| 190 | SAML | XML-basiertes SSO-Protokoll (Identity Provider stellt Assertion aus) | [Authentifizierung & PKI](05-it-security/authentifizierung-pki.md) |
| 191 | Sandbox | Isolierte Ausfuehrungsumgebung (Browser, Malware-Analyse) | [Malware dynamisch](04-forensik-methoden/malware-analyse-dynamisch.md) |
| 192 | Secure Boot | Nur signierte Bootloader werden geladen (UEFI, ARM Cortex-M) | [BS-Architekturen](02-betriebssysteme/betriebssystem-architekturen.md) |
| 193 | Sektor | Kleinste adressierbare Einheit auf Datentraegern (512 oder 4096 Bytes) | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 194 | Serverless | Code in Cloud-Funktionen (Lambda). Kein OS analysierbar, nur Logs | [Cloud-Forensik](04-forensik-methoden/cloud-forensik.md) |
| 195 | setuid-Bit | Unix: Datei laeuft mit Rechten des Besitzers (nicht des Ausfuehrenden) | [Linux-Administration](02-betriebssysteme/linux-administration.md) |
| 196 | Shellbags | Registry-Eintraege: geoeffnete Ordner, Fenstergroesse, Position | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 197 | Shellcode | Kompakter Maschinencode fuer Exploits (Reverse-Shell oeffnen) | [Malware statisch](04-forensik-methoden/malware-analyse-statisch.md) |
| 198 | ShimCache | Im SYSTEM-Hive: ausgefuhrte Programme, auch geloeschte | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 199 | SIEM | Zentrale Log-Korrelation und Alerting (Splunk, ELK, Wazuh) | [SIEM](05-it-security/siem-und-monitoring.md) |
| 200 | Signatur (Datei) | Magic Bytes am Dateianfang: JPEG=FF D8 FF, PDF=%PDF | [File Carving](02-betriebssysteme/file-carving.md) |
| 201 | Slack Space | Ungenutzter Speicher nach Dateiende im Cluster (Daten von Vorgaengern) | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 202 | SMART | Platten-Diagnose: Power-On Hours, defekte Sektoren, Wear-Level | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 203 | SOA-Record (DNS) | Start of Authority: Admin-Info, Serial fuer Zonentransfers | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 204 | SOAP | XML-basiertes Web-Service-Protokoll mit WSDL-Beschreibung | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 205 | Sock Puppet | Fiktive Online-Identitaet fuer anonyme OSINT-Recherchen | [OSINT-Anonymisierung](06-osint/osint-anonymisierung-opsec.md) |
| 206 | Softlink | Symbolischer Link: verweist auf Pfad (kann ins Leere zeigen) | [Dateisysteme](02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md) |
| 207 | SQL Injection | SQL-Code ueber Benutzereingaben einschleusen (' OR 1=1 --) | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 208 | SRUM | Windows-Datenbank: Datenverbrauch pro Anwendung, Netzwerkaktivitaet | [Spurensuche](02-betriebssysteme/betriebssystem-forensik-spurensuche.md) |
| 209 | Stack | LIFO-Speicher: lokale Variablen, Ruecksprungadressen | [Datenstrukturen](01-grundlagen/datenstrukturen.md) |
| 210 | Stack Canary | Zufallswert auf dem Stack gegen Buffer-Overflow (Compiler: -fstack-protector) | [Memory Management](02-betriebssysteme/memory-management.md) |
| 211 | sticky-Bit | Unix: Dateien nur vom Besitzer loeschbar (+t auf /tmp) | [Linux-Administration](02-betriebssysteme/linux-administration.md) |
| 212 | STRIDE | Threat-Modeling: Spoofing, Tampering, Repudiation, Info-Disclosure, DoS, Elevation | [Risikoanalyse](05-it-security/risikoanalyse-threat-modeling.md) |
| 213 | Super-Timeline | Alle forensischen Zeitstempel in einer Zeitleiste (Plaso) | [Spurensuche](02-betriebssysteme/betriebssystem-forensik-spurensuche.md) |
| 214 | Swap | Linux-Auslagerungsspeicher, kann RAM-Inhalte enthalten | [Memory Management](02-betriebssysteme/memory-management.md) |
| 215 | Syscall | Kontrollierter Uebergang User-Mode -> Kernel-Mode (open, read, write) | [BS-Architekturen](02-betriebssysteme/betriebssystem-architekturen.md) |
| 216 | Tails OS | Amnesisches Live-System, leitet allen Traffic ueber Tor | [OSINT-Anonymisierung](06-osint/osint-anonymisierung-opsec.md) |
| 217 | TCP Handshake | Verbindungsaufbau: SYN -> SYN-ACK -> ACK | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 218 | Threat Hunting | Proaktive Suche nach unentdeckten Bedrohungen (Hypothesen-getrieben) | [SIEM](05-it-security/siem-und-monitoring.md) |
| 219 | Timestomping | Anti-Forensik: Manipulation von Datei-Zeitstempeln | [Anti-Forensik](02-betriebssysteme/anti-forensik-betriebssystem.md) |
| 220 | TKUe | Telekommunikationsueberwachung (Par. 100a ff. StPO), Richtervorbehalt | [Eingriffsrecht](07-recht-kriminalistik/eingriffsrecht-tkue.md) |
| 221 | Tor | Onion Routing: Guard -> Middle -> Exit, .onion Hidden Services | [Darknet & Tor](03-netzwerke/darknet-tor-i2p.md) |
| 222 | Triage | Ersteinschaetzung: kompromittiert? IOCs? Prioritaet fuer tiefere Analyse? | [Triage](04-forensik-methoden/triage-erstanalyse.md) |
| 223 | TRIM | SSD loescht ungenutzte Bloecke -> File Carving unmoeglich | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 224 | TXT-Record (DNS) | Beliebige Textdaten (SPF, DKIM, DNS-Tunnel) | [DHCP, DNS, ARP](03-netzwerke/dhcp-dns-arp.md) |
| 225 | UDP | Verbindungsloses Transportprotokoll (DNS, DHCP, VoIP, QUIC) | [TCP/IP](03-netzwerke/tcp-ip-protokollfamilie.md) |
| 226 | UEFI | Moderner BIOS-Nachfolger: GPT, Secure Boot, FAT32-EFI-Partition | [BS-Architekturen](02-betriebssysteme/betriebssystem-architekturen.md) |
| 227 | umask | Unix: Maske fuer Standard-Dateiberechtigungen (022 = 644, 077 = 600) | [Linux-Administration](02-betriebssysteme/linux-administration.md) |
| 228 | USBSTOR | Registry-Key: JEDES jemals angeschlossene USB-Geraet mit VID/PID/Seriennummer | [Registry-Forensik](02-betriebssysteme/windows-registry-forensik.md) |
| 229 | UTF-8 | Unicode-Kodierung (1-4 Bytes), ASCII-kompatibel, dominiert das Web | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 230 | UTF-16 | Unicode-Kodierung (2/4 Bytes). NTFS speichert Dateinamen in UTF-16 | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 231 | Utilitarismus | Ethik: Maximiere den Gesamtnutzen fuer die groesste Zahl | [Ethik](07-recht-kriminalistik/ethik-informationssicherheit.md) |
| 232 | VAD-Tree | Windows-Kernel-Struktur: Speicherbereiche eines Prozesses | [Memory Management](02-betriebssysteme/memory-management.md) |
| 233 | VLAN | Logische Netzsegmentierung auf Layer 2 (802.1Q-Tag, max. 4094 VLANs) | [Routing & Switching](03-netzwerke/routing-switching-vlans.md) |
| 234 | Volatility | Framework fuer RAM-Analyse: pslist, netscan, malfind, dumpfiles | [Arbeitsspeicher-Forensik](04-forensik-methoden/arbeitsspeicher-forensik.md) |
| 235 | VPN | Verschluesselter Tunnel: IPSec, OpenVPN, WireGuard, SSTP | [VPN & Firewalls](03-netzwerke/vpn-und-firewalls.md) |
| 236 | VSS | Volume Shadow Copy: Windows-Snapshots, alte Dateiversionen wiederherstellbar | [Spurensuche](02-betriebssysteme/betriebssystem-forensik-spurensuche.md) |
| 237 | Wear-Leveling | SSD verteilt Schreibzugriffe gleichmaessig. Logischer Block != physische Zelle | [Datentraeger-Forensik](04-forensik-methoden/datentraeger-forensik.md) |
| 238 | WebSocket | Bidirektionale Verbindung ueber TCP, Upgrade von HTTP | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 239 | Word (Datenwort) | Natuierliche Verarbeitungsbreite der CPU (64 Bit = 8 Byte) | [Zahlensysteme](01-grundlagen/zahlensysteme-und-kodierung.md) |
| 240 | Write-Blocker | Hardware/Software blockiert Schreibzugriffe (Tableau, blockdev --setro) | [Write-Blocker](04-forensik-methoden/write-blocker.md) |
| 241 | XSS | Cross-Site Scripting: JavaScript in Webseiten eingeschleust (Reflected/Stored/DOM) | [Web-Sicherheit](03-netzwerke/web-sicherheit-owasp.md) |
| 242 | YAGNI | You Ain't Gonna Need It: Implementiere nur, was du aktuell brauchst | [Softwareentwicklung](01-grundlagen/softwareentwicklungsprozess.md) |
| 243 | YARA | Pattern-Matching-Tool: Malware-Erkennung ueber Strings + Conditions | [Malware statisch](04-forensik-methoden/malware-analyse-statisch.md) |
| 244 | Zeek | Netzwerk-Monitor: protokolliert Verbindungen in strukturierten Logs | [Netzwerkforensik](03-netzwerke/netzwerkforensik-methoden.md) |
| 245 | Zero-Day | Schwachstelle ohne bekannten Patch (dem Hersteller unbekannt) | [Malware statisch](04-forensik-methoden/malware-analyse-statisch.md) |
