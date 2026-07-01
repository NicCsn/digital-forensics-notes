<!--
  INDEX.md — Central topic matrix for this repository.
  Add a new row whenever you add a new content file.
  Columns: Topic | Folder | Type | Tags
  Type: notes | code | writeup | lab
  Keep this file manually updated; it mirrors frontmatter tags for discoverability.

  Last updated: 2026-07-01
  Total entries: 68
-->

# Topic Index

## 01-grundlagen (8)

| Topic | File | Type | Tags |
|-------|------|------|------|
| Zahlensysteme und Kodierung | `01-grundlagen/zahlensysteme-und-kodierung.md` | notes | `binär`, `hexadezimal`, `oktal`, `encoding`, `base64`, `endianness` |
| Rechnerarchitektur: Von Neumann | `01-grundlagen/rechnerarchitektur-von-neumann.md` | notes | `rechnerarchitektur`, `cpu`, `von-neumann`, `harvard`, `bus-systeme`, `alu` |
| Algorithmen und Komplexität | `01-grundlagen/algorithmen-und-komplexitaet.md` | notes | `algorithmen`, `komplexitaet`, `o-notation`, `sortieren`, `suchen` |
| Programmierparadigmen | `01-grundlagen/programmierparadigmen.md` | notes | `programmierung`, `imperativ`, `oop`, `funktional`, `deklarativ` |
| Datenstrukturen | `01-grundlagen/datenstrukturen.md` | notes | `datenstrukturen`, `arrays`, `listen`, `baeume`, `hashmaps` |
| Python-Grundlagen für die Forensik | `01-grundlagen/python-grundlagen.md` | notes | `python`, `programmierung`, `scripting`, `forensik` |
| OOP: Klassen und Vererbung | `01-grundlagen/oop-klassen-vererbung.md` | notes | `oop`, `klassen`, `vererbung`, `polymorphie`, `uml` |
| Softwareentwicklungsprozess | `01-grundlagen/softwareentwicklungsprozess.md` | notes | `softwareentwicklung`, `vorgehensmodelle`, `agil`, `scrum`, `git` |

## 02-betriebssysteme (15)

| Topic | File | Type | Tags |
|-------|------|------|------|
| Dateisysteme: FAT, NTFS, ext4, APFS | `02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.md` | notes | `filesystem`, `fat`, `ntfs`, `ext4`, `apfs`, `inode`, `journaling`, `slack-space` |
| Betriebssystem-Architekturen | `02-betriebssysteme/betriebssystem-architekturen.md` | notes | `betriebssystem`, `architektur`, `kernel`, `monolithisch`, `hybrid` |
| Prozessmanagement und Threads | `02-betriebssysteme/prozessmanagement-threads.md` | notes | `prozesse`, `threads`, `scheduling`, `ipc`, `forensik` |
| Memory Management | `02-betriebssysteme/memory-management.md` | notes | `memory`, `virtueller-speicher`, `paging`, `ram`, `forensik` |
| Linux-Administration | `02-betriebssysteme/linux-administration.md` | notes | `linux`, `administration`, `shell`, `bash`, `systemd` |
| Windows-Administration | `02-betriebssysteme/windows-administration.md` | notes | `windows`, `administration`, `powershell`, `registry`, `eventlog` |
| Datenträger-Verschlüsselung | `02-betriebssysteme/datentraeger-verschluesselung.md` | notes | `verschluesselung`, `bitlocker`, `filevault`, `luks`, `veracrypt` |
| Windows Registry Forensik | `02-betriebssysteme/windows-registry-forensik.md` | notes | `windows`, `registry`, `forensik`, `ntuser`, `amcache`, `shellbags` |
| Betriebssystem-Forensik: Spurensuche | `02-betriebssysteme/betriebssystem-forensik-spurensuche.md` | notes | `forensik`, `windows`, `linux`, `macos`, `artefakte`, `prefetch` |
| File Carving | `02-betriebssysteme/file-carving.md` | notes | `file-carving`, `datenrettung`, `header-footer`, `scalpel`, `foremost` |
| Embedded Systems und IoT Forensik | `02-betriebssysteme/embedded-systems-iot-forensik.md` | notes | `embedded`, `iot`, `jtag`, `uart`, `spi-flash`, `rtos` |
| Anti-Forensik im Betriebssystem | `02-betriebssysteme/anti-forensik-betriebssystem.md` | notes | `anti-forensik`, `timestomping`, `log-wiping`, `ads`, `rootkits` |
| Mobile Forensik: Android und iOS | `02-betriebssysteme/mobile-forensik-android-ios.md` | notes | `mobile`, `android`, `ios`, `forensik`, `adb`, `sqlite` |
| Container- und Docker-Forensik | `02-betriebssysteme/container-docker-forensik.md` | notes | `container`, `docker`, `kubernetes`, `forensik`, `overlay2` |
| IoT-Security: Angriffe und Schutzmassnahmen | `02-betriebssysteme/iot-security-grundlagen.md` | notes | `iot`, `security`, `mqtt`, `coap`, `firmware`, `secure-boot` |

## 03-netzwerke (12)

| Topic | File | Type | Tags |
|-------|------|------|------|
| Wireshark Basics: Paketanalyse | `03-netzwerke/wireshark-basics-paketanalyse.md` | notes | `wireshark`, `netzwerke`, `pcap`, `protokolle`, `filter`, `tcpdump` |
| TCP/IP Protokollfamilie | `03-netzwerke/tcp-ip-protokollfamilie.md` | notes | `tcp`, `ip`, `osi`, `protokolle`, `handshake`, `flags`, `udp` |
| IP-Adressierung und Subnetting | `03-netzwerke/ip-adressierung-subnetting.md` | notes | `ipv4`, `ipv6`, `cidr`, `subnetting`, `subnet-mask` |
| Routing, Switching und VLANs | `03-netzwerke/routing-switching-vlans.md` | notes | `routing`, `switching`, `vlan`, `router`, `switch`, `stp` |
| DHCP, DNS und ARP | `03-netzwerke/dhcp-dns-arp.md` | notes | `dhcp`, `dns`, `arp`, `spoofing`, `cache-poisoning` |
| VPN und Firewalls | `03-netzwerke/vpn-und-firewalls.md` | notes | `vpn`, `firewall`, `ipsec`, `openvpn`, `wireguard`, `iptables` |
| Netzwerkforensik: Methoden | `03-netzwerke/netzwerkforensik-methoden.md` | notes | `netzwerkforensik`, `pcap`, `flow-daten`, `zeek`, `anomalien` |
| Darknet: Tor und I2P | `03-netzwerke/darknet-tor-i2p.md` | notes | `darknet`, `tor`, `i2p`, `anonymisierung`, `deanonymisierung` |
| Web-Sicherheit und OWASP Top 10 | `03-netzwerke/web-sicherheit-owasp.md` | notes | `web`, `owasp`, `xss`, `sqli`, `csrf`, `csp` |
| Browser-Forensik | `03-netzwerke/browser-forensik.md` | notes | `browser`, `forensik`, `chrome`, `firefox`, `cache`, `cookies` |
| TLS/SSL-Forensik | `03-netzwerke/tls-ssl-forensik.md` | notes | `tls`, `ssl`, `forensik`, `ja3`, `certificate-transparency` |
| Wireless-Forensik | `03-netzwerke/wireless-forensik.md` | notes | `wireless`, `wlan`, `wpa2`, `wpa3`, `bluetooth` |

## 04-forensik-methoden (13)

| Topic | File | Type | Tags |
|-------|------|------|------|
| Forensischer Prozess und Chain of Custody | `04-forensik-methoden/forensischer-prozess-chain-of-custody.md` | notes | `forensik`, `chain-of-custody`, `nist`, `acpo`, `imaging`, `write-blocker` |
| Forensisches Imaging | `04-forensik-methoden/forensisches-imaging.md` | notes | `imaging`, `dd`, `e01`, `hashing`, `integritaet`, `dcfldd` |
| Write-Blocker | `04-forensik-methoden/write-blocker.md` | notes | `write-blocker`, `schreibschutz`, `hardware`, `tableau` |
| Datenträger-Forensik | `04-forensik-methoden/datentraeger-forensik.md` | notes | `datentraeger`, `partition`, `mbr`, `gpt`, `slack-space`, `sleuthkit` |
| Arbeitsspeicher-Forensik (Memory) | `04-forensik-methoden/arbeitsspeicher-forensik.md` | notes | `ram`, `arbeitsspeicher`, `volatility`, `lime`, `prozesse` |
| Logfile-Analyse | `04-forensik-methoden/logfile-analyse.md` | notes | `logs`, `syslog`, `eventlog`, `apache`, `zeitnormalisierung` |
| Forensische Triage und Erstanalyse | `04-forensik-methoden/triage-erstanalyse.md` | notes | `triage`, `erstanalyse`, `prioritierung`, `dfir` |
| Malware-Analyse: Statisch | `04-forensik-methoden/malware-analyse-statisch.md` | notes | `malware`, `statische-analyse`, `pe-header`, `yara`, `strings` |
| Malware-Analyse: Dynamisch | `04-forensik-methoden/malware-analyse-dynamisch.md` | notes | `malware`, `dynamische-analyse`, `sandbox`, `c2` |
| Forensische Dokumentation | `04-forensik-methoden/forensische-dokumentation.md` | notes | `dokumentation`, `bericht`, `gerichtsfest`, `reporting` |
| Datenbanken-Forensik | `04-forensik-methoden/datenbanken-forensik.md` | notes | `datenbanken`, `forensik`, `sql`, `nosql`, `wal` |
| Forensische Live-Sicherung | `04-forensik-methoden/forensische-live-sicherung.md` | notes | `live-forensik`, `order-of-volatility`, `triage`, `ram-dump` |
| Cloud-Forensik | `04-forensik-methoden/cloud-forensik.md` | notes | `cloud`, `forensik`, `aws`, `azure`, `cloudtrail` |

## 05-it-security (8)

| Topic | File | Type | Tags |
|-------|------|------|------|
| Kryptografie: Symmetrisch und Asymmetrisch | `05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.md` | notes | `cryptography`, `aes`, `rsa`, `ecc`, `hashing`, `signatur`, `kerckhoffs` |
| Schutzziele der Informationssicherheit | `05-it-security/schutzziele-cia-triad.md` | notes | `cia`, `schutzziele`, `vertraulichkeit`, `integritaet`, `verfuegbarkeit` |
| Risikoanalyse und Threat Modeling | `05-it-security/risikoanalyse-threat-modeling.md` | notes | `risikoanalyse`, `threat-modeling`, `stride`, `dread`, `risikomatrix` |
| Authentifizierung und PKI | `05-it-security/authentifizierung-pki.md` | notes | `authentifizierung`, `pki`, `mfa`, `zertifikate`, `kerberos` |
| Kryptoanalyse | `05-it-security/kryptoanalyse.md` | notes | `kryptoanalyse`, `brute-force`, `hashcat`, `john`, `known-plaintext` |
| Post-Quantum und Blockchain | `05-it-security/post-quantum-blockchain.md` | notes | `post-quantum`, `blockchain`, `kryptowaehrungen`, `bitcoin` |
| Security Incident Management | `05-it-security/security-incident-management.md` | notes | `incident-response`, `vorfall`, `eskalation`, `war-room` |
| SIEM und Security Monitoring | `05-it-security/siem-und-monitoring.md` | notes | `siem`, `monitoring`, `splunk`, `elk`, `use-cases` |

## 06-osint (5)

| Topic | File | Type | Tags |
|-------|------|------|------|
| OSINT: Lifecycle und Tooling | `06-osint/osint-lifecycle-und-tooling.md` | notes | `osint`, `open-source-intelligence`, `recherche`, `opsec`, `sock-puppet` |
| OSINT: Methodik und Werkzeuge | `06-osint/osint-recherche-methodik.md` | notes | `osint`, `recherche`, `google-dorks`, `shodan`, `sherlock` |
| OSINT: Anonymisierung und OPSEC | `06-osint/osint-anonymisierung-opsec.md` | notes | `osint`, `opsec`, `anonymisierung`, `sock-puppet`, `vpn` |
| Social Media Analyse | `06-osint/social-media-analyse.md` | notes | `osint`, `social-media`, `facebook`, `twitter`, `instagram`, `linkedin` |
| Cybercrime-Ökonomie | `06-osint/cybercrime-oekonomie.md` | notes | `cybercrime`, `caas`, `underground`, `ransomware`, `bitcoin` |

## 07-recht-kriminalistik (9)

| Topic | File | Type | Tags |
|-------|------|------|------|
| Digitale Beweismittel: Grundprinzipien | `07-recht-kriminalistik/digitale-beweismittel-grundprinzipien.md` | notes | `digital-evidence`, `admissibility`, `acpo`, `chain-of-custody`, `beweisrecht` |
| Strafrecht AT: Grundprinzipien | `07-recht-kriminalistik/strafrecht-allgemeiner-teil.md` | notes | `strafrecht`, `tatbestand`, `rechtswidrigkeit`, `schuld`, `vorsatz` |
| Grundrechte im digitalen Raum | `07-recht-kriminalistik/grundrechte-digital.md` | notes | `grundrechte`, `art10-gg`, `it-grundrecht`, `verhaeltnismaessigkeit` |
| DSGVO und Datenschutz | `07-recht-kriminalistik/dsgvo-datenschutz.md` | notes | `dsgvo`, `datenschutz`, `personenbezogene-daten`, `betroffenenrechte` |
| Kriminalistik: Grundlagen | `07-recht-kriminalistik/kriminalistik-grundlagen.md` | notes | `kriminalistik`, `kriminaltechnik`, `kriminologie`, `verdachtslehre` |
| Tatortarbeit und Spurenkunde | `07-recht-kriminalistik/tatortarbeit-spurenkunde.md` | notes | `tatort`, `spurenkunde`, `spurensicherung`, `beweiskraft`, `beweiswert` |
| Eingriffsrecht: TKÜ | `07-recht-kriminalistik/eingriffsrecht-tkue.md` | notes | `eingriffsrecht`, `tkue`, `stpo`, `100a`, `online-durchsuchung` |
| Ethik in der Informationssicherheit | `07-recht-kriminalistik/ethik-informationssicherheit.md` | notes | `ethik`, `informationssicherheit`, `kant`, `utilitarismus`, `privacy` |
| Juristische Fallbearbeitung: Gutachtenstil | `07-recht-kriminalistik/juristische-fallbearbeitung-gutachtenstil.md` | notes | `recht`, `methodik`, `gutachtenstil`, `urteilsstil`, `subsumtion` |

## 08-ki-forensik (5)

| Topic | File | Type | Tags |
|-------|------|------|------|
| LLMs in der forensischen Analyse | `08-ki-forensik/llms-in-der-forensischen-analyse.md` | notes | `ki`, `llm`, `forensik`, `nlp`, `anomaly-detection`, `dfir` |
| KI-Grundlagen: ML Overview | `08-ki-forensik/ki-grundlagen-ml-overview.md` | notes | `ki`, `ml`, `supervised`, `unsupervised`, `overfitting` |
| Neuronale Netze und Deep Learning | `08-ki-forensik/neuronale-netze-deep-learning.md` | notes | `neuronale-netze`, `cnn`, `rnn`, `transfer-learning` |
| Decision Trees und Klassifikation | `08-ki-forensik/decision-trees-klassifikation.md` | notes | `decision-tree`, `random-forest`, `klassifikation`, `id3` |
| Bildforensik und Objekterkennung | `08-ki-forensik/bildforensik-objekterkennung.md` | notes | `bildforensik`, `yolo`, `ela`, `deepfake`, `exif` |

## 09-tools (2)

| Topic | File | Type | Tags |
|-------|------|------|------|
| IP Log Analyzer | `09-tools/ip-log-analyzer/` | code | `tool`, `python`, `log-analysis`, `ip`, `forensik` |
| Registry Hive Parser | `09-tools/registry-parser/` | code | `tool`, `python`, `registry`, `forensik`, `windows`, `hive` |

## 00-meta (1)

| Topic | File | Type | Tags |
|-------|------|------|------|
| Glossar | `00-meta/glossary.md` | notes | `glossar`, `referenz` |
