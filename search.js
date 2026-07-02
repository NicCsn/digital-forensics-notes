// Search index: all notes with title, path, folder, and tags
var notes = [
  {t:"Zahlensysteme und Kodierung",p:"01-grundlagen/zahlensysteme-und-kodierung.html",f:"Grundlagen",g:["binar","hexadezimal","oktal","encoding","base64","endianness"],d:"basics"},
  {t:"Rechnerarchitektur: Von Neumann und Harvard",p:"01-grundlagen/rechnerarchitektur-von-neumann.html",f:"Grundlagen",g:["rechnerarchitektur","cpu","von-neumann","harvard","bus-systeme","alu","register","arm"],d:"basics"},
  {t:"Algorithmen und Komplexitat",p:"01-grundlagen/algorithmen-und-komplexitaet.html",f:"Grundlagen",g:["algorithmen","komplexitaet","o-notation","sortieren","suchen","bloom-filter","aho-corasick"],d:"basics"},
  {t:"Datenstrukturen",p:"01-grundlagen/datenstrukturen.html",f:"Grundlagen",g:["arrays","listen","baeume","hashmaps","stack","queue"],d:"basics"},
  {t:"Programmierparadigmen",p:"01-grundlagen/programmierparadigmen.html",f:"Grundlagen",g:["programmierung","imperativ","oop","funktional","deklarativ"],d:"basics"},
  {t:"Python-Grundlagen fur die Forensik",p:"01-grundlagen/python-grundlagen.html",f:"Grundlagen",g:["python","programmierung","scripting","forensik","automatisierung"],d:"basics"},
  {t:"OOP: Klassen und Vererbung",p:"01-grundlagen/oop-klassen-vererbung.html",f:"Grundlagen",g:["oop","klassen","vererbung","polymorphie","uml"],d:"basics"},
  {t:"Softwareentwicklungsprozess",p:"01-grundlagen/softwareentwicklungsprozess.html",f:"Grundlagen",g:["softwareentwicklung","vorgehensmodelle","agil","scrum","git"],d:"basics"},
  {t:"Dateisysteme: FAT, NTFS, ext4, APFS",p:"02-betriebssysteme/dateisysteme-uebersicht-fat-ntfs-ext4-apfs.html",f:"Betriebssysteme",g:["filesystem","fat","ntfs","ext4","apfs","inode","journaling","slack-space","zfs","refs"],d:"basics"},
  {t:"Betriebssystem-Architekturen",p:"02-betriebssysteme/betriebssystem-architekturen.html",f:"Betriebssysteme",g:["architektur","kernel","monolithisch","mikrokernel","hybrid","hypervisor","container","syscalls"],d:"basics"},
  {t:"Prozessmanagement und Threads",p:"02-betriebssysteme/prozessmanagement-threads.html",f:"Betriebssysteme",g:["prozesse","threads","scheduling","ipc","injection","sysmon","volatility"],d:"intermediate"},
  {t:"Memory Management",p:"02-betriebssysteme/memory-management.html",f:"Betriebssysteme",g:["memory","virtueller-speicher","paging","ram","forensik"],d:"intermediate"},
  {t:"Linux-Administration",p:"02-betriebssysteme/linux-administration.html",f:"Betriebssysteme",g:["linux","administration","shell","bash","systemd","imaging","lvm","raid"],d:"basics"},
  {t:"Windows-Administration",p:"02-betriebssysteme/windows-administration.html",f:"Betriebssysteme",g:["windows","administration","powershell","registry","eventlog"],d:"basics"},
  {t:"Datentrager-Verschlusselung",p:"02-betriebssysteme/datentraeger-verschluesselung.html",f:"Betriebssysteme",g:["verschluesselung","bitlocker","filevault","luks","veracrypt"],d:"intermediate"},
  {t:"Windows Registry Forensik",p:"02-betriebssysteme/windows-registry-forensik.html",f:"Betriebssysteme",g:["registry","ntuser","amcache","shellbags","usb","usbstor"],d:"intermediate"},
  {t:"Betriebssystem-Forensik: Spurensuche",p:"02-betriebssysteme/betriebssystem-forensik-spurensuche.html",f:"Betriebssysteme",g:["artefakte","prefetch","jump-lists","lnk","shell-history","macos"],d:"intermediate"},
  {t:"File Carving",p:"02-betriebssysteme/file-carving.html",f:"Betriebssysteme",g:["file-carving","datenrettung","header-footer","scalpel","foremost","photorec"],d:"intermediate"},
  {t:"Embedded Systems und IoT Forensik",p:"02-betriebssysteme/embedded-systems-iot-forensik.html",f:"Betriebssysteme",g:["embedded","iot","jtag","uart","spi-flash","rtos","arm-cortex"],d:"advanced"},
  {t:"Anti-Forensik im Betriebssystem",p:"02-betriebssysteme/anti-forensik-betriebssystem.html",f:"Betriebssysteme",g:["anti-forensik","timestomping","log-wiping","ads","rootkits"],d:"intermediate"},
  {t:"Mobile Forensik: Android und iOS",p:"02-betriebssysteme/mobile-forensik-android-ios.html",f:"Betriebssysteme",g:["mobile","android","ios","adb","checkm8","itunes","sqlite"],d:"intermediate"},
  {t:"Container- und Docker-Forensik",p:"02-betriebssysteme/container-docker-forensik.html",f:"Betriebssysteme",g:["container","docker","kubernetes","overlay2","namespace"],d:"intermediate"},
  {t:"IoT-Security: Angriffe und Schutzmassnahmen",p:"02-betriebssysteme/iot-security-grundlagen.html",f:"Betriebssysteme",g:["iot","security","mqtt","coap","firmware","secure-boot","arm-cortex"],d:"intermediate"},
  {t:"Wireshark Basics: Paketanalyse",p:"03-netzwerke/wireshark-basics-paketanalyse.html",f:"Netzwerke",g:["wireshark","pcap","protokolle","filter","tcpdump","tshark"],d:"basics"},
  {t:"TCP/IP Protokollfamilie",p:"03-netzwerke/tcp-ip-protokollfamilie.html",f:"Netzwerke",g:["tcp","ip","osi","handshake","flags","udp","icmp"],d:"basics"},
  {t:"IP-Adressierung und Subnetting",p:"03-netzwerke/ip-adressierung-subnetting.html",f:"Netzwerke",g:["ipv4","ipv6","cidr","subnetting","geoip"],d:"basics"},
  {t:"Routing, Switching und VLANs",p:"03-netzwerke/routing-switching-vlans.html",f:"Netzwerke",g:["routing","switching","vlan","router","switch","stp","bgp","ospf"],d:"intermediate"},
  {t:"DHCP, DNS und ARP",p:"03-netzwerke/dhcp-dns-arp.html",f:"Netzwerke",g:["dhcp","dns","arp","spoofing","cache-poisoning"],d:"basics"},
  {t:"VPN und Firewalls",p:"03-netzwerke/vpn-und-firewalls.html",f:"Netzwerke",g:["vpn","firewall","ipsec","openvpn","wireguard","iptables","nat","ids","ips"],d:"intermediate"},
  {t:"Netzwerkforensik: Methoden",p:"03-netzwerke/netzwerkforensik-methoden.html",f:"Netzwerke",g:["netzwerkforensik","pcap","flow-daten","anomalien","zeek","suricata","beaconing"],d:"intermediate"},
  {t:"Darknet: Tor und I2P",p:"03-netzwerke/darknet-tor-i2p.html",f:"Netzwerke",g:["darknet","tor","i2p","anonymisierung","deanonymisierung","hidden-services"],d:"intermediate"},
  {t:"Web-Sicherheit und OWASP Top 10",p:"03-netzwerke/web-sicherheit-owasp.html",f:"Netzwerke",g:["web","owasp","xss","sqli","csrf","csp","sop"],d:"intermediate"},
  {t:"Browser-Forensik",p:"03-netzwerke/browser-forensik.html",f:"Netzwerke",g:["browser","chrome","firefox","edge","history","cache","cookies","sqlite"],d:"basics"},
  {t:"TLS/SSL-Forensik",p:"03-netzwerke/tls-ssl-forensik.html",f:"Netzwerke",g:["tls","ssl","ja3","ja4","certificate-transparency","handshake"],d:"intermediate"},
  {t:"Wireless-Forensik",p:"03-netzwerke/wireless-forensik.html",f:"Netzwerke",g:["wireless","wlan","wifi","wpa2","wpa3","bluetooth","handshake","beacon","rogue-ap"],d:"intermediate"},
  {t:"Forensischer Prozess und Chain of Custody",p:"04-forensik-methoden/forensischer-prozess-chain-of-custody.html",f:"Forensik",g:["chain-of-custody","nist","acpo","imaging","write-blocker"],d:"basics"},
  {t:"Forensisches Imaging",p:"04-forensik-methoden/forensisches-imaging.html",f:"Forensik",g:["imaging","dd","e01","hashing","integritaet","dcfldd","guymager"],d:"basics"},
  {t:"Write-Blocker",p:"04-forensik-methoden/write-blocker.html",f:"Forensik",g:["write-blocker","schreibschutz","hardware","tableau","wiebetech"],d:"basics"},
  {t:"Datentrager-Forensik",p:"04-forensik-methoden/datentraeger-forensik.html",f:"Forensik",g:["datentraeger","partition","mbr","gpt","slack-space","sleuthkit","mmls","fls"],d:"intermediate"},
  {t:"Arbeitsspeicher-Forensik (Memory)",p:"04-forensik-methoden/arbeitsspeicher-forensik.html",f:"Forensik",g:["ram","arbeitsspeicher","volatility","lime","dump","prozesse","injektion","malfind"],d:"intermediate"},
  {t:"Logfile-Analyse",p:"04-forensik-methoden/logfile-analyse.html",f:"Forensik",g:["logs","syslog","eventlog","apache","zeitnormalisierung","siem"],d:"basics"},
  {t:"Forensische Triage und Erstanalyse",p:"04-forensik-methoden/triage-erstanalyse.html",f:"Forensik",g:["triage","erstanalyse","prioritierung","dfir","kape","ioc"],d:"intermediate"},
  {t:"Malware-Analyse: Statisch",p:"04-forensik-methoden/malware-analyse-statisch.html",f:"Forensik",g:["malware","statische-analyse","disassembler","pe-header","yara","strings"],d:"intermediate"},
  {t:"Malware-Analyse: Dynamisch",p:"04-forensik-methoden/malware-analyse-dynamisch.html",f:"Forensik",g:["malware","dynamische-analyse","sandbox","debugger","c2","verhaltensanalyse"],d:"advanced"},
  {t:"Forensische Dokumentation",p:"04-forensik-methoden/forensische-dokumentation.html",f:"Forensik",g:["dokumentation","bericht","gerichtsfest","reporting"],d:"basics"},
  {t:"Datenbanken-Forensik",p:"04-forensik-methoden/datenbanken-forensik.html",f:"Forensik",g:["datenbanken","sql","nosql","wal","transaktions-log","mongodb","postgresql","mysql"],d:"intermediate"},
  {t:"Forensische Live-Sicherung",p:"04-forensik-methoden/forensische-live-sicherung.html",f:"Forensik",g:["live-forensik","order-of-volatility","triage","ram-dump","incident-response"],d:"intermediate"},
  {t:"Cloud-Forensik",p:"04-forensik-methoden/cloud-forensik.html",f:"Forensik",g:["cloud","aws","azure","gcp","cloudtrail","guardduty","shared-responsibility"],d:"intermediate"},
  {t:"Schutzziele (CIA-Triade)",p:"05-it-security/schutzziele-cia-triad.html",f:"IT-Security",g:["cia","schutzziele","vertraulichkeit","integritaet","verfuegbarkeit","authentizitaet"],d:"basics"},
  {t:"Risikoanalyse und Threat Modeling",p:"05-it-security/risikoanalyse-threat-modeling.html",f:"IT-Security",g:["risikoanalyse","threat-modeling","stride","dread","risikomatrix"],d:"intermediate"},
  {t:"Kryptografie: Symmetrisch und Asymmetrisch",p:"05-it-security/kryptografie-grundlagen-symmetrisch-asymmetrisch.html",f:"IT-Security",g:["cryptography","aes","rsa","ecc","hashing","signatur","kerckhoffs","diffie-hellman"],d:"basics"},
  {t:"Authentifizierung und PKI",p:"05-it-security/authentifizierung-pki.html",f:"IT-Security",g:["authentifizierung","pki","mfa","zertifikate","kerberos","ldap","passwoerter"],d:"intermediate"},
  {t:"Kryptoanalyse",p:"05-it-security/kryptoanalyse.html",f:"IT-Security",g:["kryptoanalyse","haeufigkeitsanalyse","brute-force","hashcat","john","known-plaintext","rainbow-tables"],d:"intermediate"},
  {t:"Post-Quantum und Blockchain",p:"05-it-security/post-quantum-blockchain.html",f:"IT-Security",g:["post-quantum","blockchain","kryptowaehrungen","bitcoin","monero","shor"],d:"advanced"},
  {t:"Security Incident Management",p:"05-it-security/security-incident-management.html",f:"IT-Security",g:["incident-response","vorfall","eskalation","war-room","playbook"],d:"intermediate"},
  {t:"SIEM und Security Monitoring",p:"05-it-security/siem-und-monitoring.html",f:"IT-Security",g:["siem","monitoring","splunk","elk","use-cases","compliance","alerting"],d:"intermediate"},
  {t:"OSINT: Lifecycle und Tooling",p:"06-osint/osint-lifecycle-und-tooling.html",f:"OSINT",g:["osint","open-source-intelligence","recherche","opsec","sock-puppet"],d:"basics"},
  {t:"OSINT: Methodik und Werkzeuge",p:"06-osint/osint-recherche-methodik.html",f:"OSINT",g:["google-dorks","shodan","sherlock","quellen-bewertung","exiftool"],d:"basics"},
  {t:"OSINT: Anonymisierung und OPSEC",p:"06-osint/osint-anonymisierung-opsec.html",f:"OSINT",g:["anonymisierung","sock-puppet","vpn","vm","browser-sicherheit","tails"],d:"basics"},
  {t:"Social Media Analyse",p:"06-osint/social-media-analyse.html",f:"OSINT",g:["social-media","facebook","twitter","instagram","linkedin","tiktok","reddit"],d:"basics"},
  {t:"Cybercrime-Okonomie",p:"06-osint/cybercrime-oekonomie.html",f:"OSINT",g:["cybercrime","caas","underground","ransomware","bitcoin","monero","marktplaetze"],d:"intermediate"},
  {t:"Digitale Beweismittel: Grundprinzipien",p:"07-recht-kriminalistik/digitale-beweismittel-grundprinzipien.html",f:"Recht",g:["digital-evidence","admissibility","acpo","chain-of-custody","beweisrecht"],d:"intermediate"},
  {t:"Strafrecht Allgemeiner Teil",p:"07-recht-kriminalistik/strafrecht-allgemeiner-teil.html",f:"Recht",g:["strafrecht","tatbestand","rechtswidrigkeit","schuld","vorsatz","fahrlaessigkeit"],d:"intermediate"},
  {t:"Grundrechte im digitalen Raum",p:"07-recht-kriminalistik/grundrechte-digital.html",f:"Recht",g:["grundrechte","art10-gg","it-grundrecht","verhaeltnismaessigkeit","dns-sperren"],d:"intermediate"},
  {t:"DSGVO und Datenschutz",p:"07-recht-kriminalistik/dsgvo-datenschutz.html",f:"Recht",g:["dsgvo","datenschutz","personenbezogene-daten","betroffenenrechte","auftragsverarbeitung"],d:"basics"},
  {t:"Kriminalistik: Grundlagen",p:"07-recht-kriminalistik/kriminalistik-grundlagen.html",f:"Recht",g:["kriminalistik","kriminaltechnik","kriminologie","verdachtslehre","ermittlungsverfahren"],d:"basics"},
  {t:"Tatortarbeit und Spurenkunde",p:"07-recht-kriminalistik/tatortarbeit-spurenkunde.html",f:"Recht",g:["tatort","spurenkunde","spurensicherung","beweiskraft","beweiswert","dokumentation"],d:"basic"},
  {t:"Eingriffsrecht: TKUe",p:"07-recht-kriminalistik/eingriffsrecht-tkue.html",f:"Recht",g:["eingriffsrecht","tkue","stpo","100a","online-durchsuchung","quellen-tkue"],d:"advanced"},
  {t:"Ethik in der Informationssicherheit",p:"07-recht-kriminalistik/ethik-informationssicherheit.html",f:"Recht",g:["ethik","kant","utilitarismus","privacy","moral","verantwortung"],d:"basics"},
  {t:"Juristische Fallbearbeitung: Gutachtenstil",p:"07-recht-kriminalistik/juristische-fallbearbeitung-gutachtenstil.html",f:"Recht",g:["recht","methodik","gutachtenstil","urteilsstil","subsumtion","fallloesung"],d:"basics"},
  {t:"LLMs in der forensischen Analyse",p:"08-ki-forensik/llms-in-der-forensischen-analyse.html",f:"KI-Forensik",g:["ki","llm","nlp","anomaly-detection","dfir","rag","embeddings","prompt-engineering"],d:"intermediate"},
  {t:"KI-Grundlagen: ML Overview",p:"08-ki-forensik/ki-grundlagen-ml-overview.html",f:"KI-Forensik",g:["ki","ml","supervised","unsupervised","overfitting","sklearn","metriken"],d:"intermediate"},
  {t:"Neuronale Netze und Deep Learning",p:"08-ki-forensik/neuronale-netze-deep-learning.html",f:"KI-Forensik",g:["cnn","rnn","lstm","transfer-learning","transformer","deepfake"],d:"advanced"},
  {t:"Decision Trees und Klassifikation",p:"08-ki-forensik/decision-trees-klassifikation.html",f:"KI-Forensik",g:["decision-tree","random-forest","klassifikation","id3","log-analyse","entropie"],d:"intermediate"},
  {t:"Bildforensik und Objekterkennung",p:"08-ki-forensik/bildforensik-objekterkennung.html",f:"KI-Forensik",g:["bildforensik","yolo","error-level-analysis","deepfake","exif","manipulation"],d:"intermediate"},
  {t:"Email-Forensik",p:"04-forensik-methoden/email-forensik.html",f:"Forensik",g:["email","dkim","spf","dmarc","phishing","header","smtp"],d:"intermediate"},
  {t:"MITRE ATT&CK Framework",p:"04-forensik-methoden/mitre-attack-framework.html",f:"Forensik",g:["mitre","attack","ttps","tactics","techniques","navigator","detection-gap"],d:"intermediate"},
  {t:"Timeline-Analyse mit Plaso",p:"04-forensik-methoden/timeline-analysis.html",f:"Forensik",g:["timeline","plaso","log2timeline","super-timeline","mactime","timesketch"],d:"intermediate"},
  {t:"Threat Hunting",p:"04-forensik-methoden/threat-hunting.html",f:"Forensik",g:["threat-hunting","hypothesis","pyramid-of-pain","sigma","sysmon","kusto"],d:"advanced"},
  {t:"macOS-Forensik",p:"02-betriebssysteme/macos-forensik.html",f:"Betriebssysteme",g:["macos","apfs","fsevents","knowledgec","plist","unified-logging","gatekeeper"],d:"intermediate"},
  {t:"Magnet AXIOM",p:"09-tools/axiom/README.html",f:"Tools",g:["axiom","magnet","cloud-acquisition","mobile","connections","forensik-tool"],d:"intermediate"},
  {t:"KAPE — Kroll Artifact Parser and Extractor",p:"09-tools/kape/README.html",f:"Tools",g:["kape","triage","eric-zimmerman","targets","modules","gkape"],d:"intermediate"},
  {t:"Velociraptor — IR and Forensics",p:"09-tools/velociraptor/README.html",f:"Tools",g:["velociraptor","vql","agent","offline-collector","hunting"],d:"advanced"},
  {t:"Autopsy — Digital Forensics Platform",p:"09-tools/autopsy/README.html",f:"Tools",g:["autopsy","sleuthkit","ingest","timeline","case-management"],d:"basics"},
  {t:"FTK, EnCase, AXIOM — Tool-Vergleich",p:"09-tools/ftk-encase-axiom/README.html",f:"Tools",g:["ftk","encase","axiom","tool-vergleich","forensik","commercial"],d:"intermediate"},
  {t:"Glossar (A-Z)",p:"00-meta/glossary.html",f:"Meta",g:["glossar","referenz","begriffe"],d:"basics"}
];

var searchInput = document.getElementById('searchInput');
var searchResults = document.querySelector('#searchResults') || document.querySelector('.sb-search-results');

function fuzzyScore(query, text) {
  query = query.toLowerCase();
  text = text.toLowerCase();
  if (text === query) return 1000;
  if (text.indexOf(query) === 0) return 500;
  if (text.indexOf(query) !== -1) return 100 + (text.length - text.indexOf(query));
  var score = 0, qi = 0;
  for (var i = 0; i < text.length && qi < query.length; i++) {
    if (text[i] === query[qi]) { score += 10; qi++; }
  }
  return qi === query.length ? score : 0;
}

function search() {
  var q = searchInput.value.trim();
  if (q.length < 1) { searchResults.innerHTML = ''; searchResults.classList.remove('show'); return; }

  var results = [];
  var words = q.toLowerCase().split(/\s+/);

  for (var i = 0; i < notes.length; i++) {
    var n = notes[i];
    var score = 0;
    for (var w = 0; w < words.length; w++) {
      score += fuzzyScore(words[w], n.t);
    }
    for (var g = 0; g < n.g.length; g++) {
      for (var w2 = 0; w2 < words.length; w2++) {
        if (n.g[g].toLowerCase().indexOf(words[w2]) !== -1) score += 40;
      }
    }
    if (n.f.toLowerCase().indexOf(q.toLowerCase()) !== -1) score += 25;
    for (var g2 = 0; g2 < n.g.length; g2++) {
      if (n.g[g2].toLowerCase() === q.toLowerCase()) score += 200;
    }
    if (score > 0) results.push({note:n, score:score});
  }

  results.sort(function(a,b) { return b.score - a.score; });

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="sr-no-results">Keine Ergebnisse</div>';
  } else {
    var maxShow = 15;
    var html = '';
    for (var j = 0; j < Math.min(results.length, maxShow); j++) {
      var r = results[j];
      var diffLabel = '';
      if (r.note.d === 'basics') diffLabel = '<span style="color:#14866d;font-size:10px">Grundlagen</span>';
      else if (r.note.d === 'intermediate') diffLabel = '<span style="color:#ac6600;font-size:10px">Mittel</span>';
      else if (r.note.d === 'advanced') diffLabel = '<span style="color:#b32424;font-size:10px">Fortgeschr.</span>';
      html += '<a href="#" class="sr-item" onclick="loadNote(\'' + r.note.p + '\'); document.getElementById(\'searchResults\').classList.remove(\'show\'); document.getElementById(\'searchInput\').value=\'\'; return false">' +
        '<div class="sr-title">' + r.note.t + '</div>' +
        '<div class="sr-meta">' + r.note.f + ' &middot; ' + r.note.g.slice(0,4).join(', ') + (r.note.g.length > 4 ? ' +' + (r.note.g.length-4) : '') + ' ' + diffLabel + '</div>' +
        '</a>';
    }
    if (results.length > maxShow) {
      html += '<div style="padding:8px;color:var(--text-muted);font-size:11px;text-align:center">+' + (results.length - maxShow) + ' weitere Ergebnisse</div>';
    }
    searchResults.innerHTML = html;
  }
  searchResults.classList.add('show');
}

searchInput.addEventListener('input', search);
searchInput.addEventListener('focus', function() {
  if (searchInput.value.trim().length > 0) searchResults.classList.add('show');
});

document.addEventListener('click', function(e) {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.classList.remove('show');
  }
});

searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { searchResults.classList.remove('show'); searchInput.blur(); }
});

// Sidebar search on note pages
(function(){
  var sInp = document.getElementById('sidebarSearch');
  var sRes = document.getElementById('sidebarSearchResults');
  if (!sInp || !sRes) return;

  function findInNotes(q) {
    q = q.toLowerCase();
    var out = [];
    for (var i = 0; i < notes.length; i++) {
      var n = notes[i], score = 0;
      if (n.t.toLowerCase().indexOf(q) !== -1) score += 10;
      if (n.f.toLowerCase().indexOf(q) !== -1) score += 5;
      for (var j = 0; j < n.g.length; j++) {
        if (n.g[j].toLowerCase().indexOf(q) !== -1) score += 3;
      }
      if (score > 0) out.push({n:n, s:score});
    }
    return out.sort(function(a,b){return b.s - a.s;});
  }

  sInp.addEventListener('input', function() {
    var q = this.value.trim();
    if (q.length < 1) { sRes.innerHTML = ''; sRes.classList.remove('show'); return; }
    var matches = findInNotes(q);
    if (matches.length === 0) {
      sRes.innerHTML = '<div style="padding:10px;color:var(--text-muted);font-size:12px">Keine Ergebnisse</div>';
    } else {
      var html = '';
      for (var k = 0; k < Math.min(matches.length, 12); k++) {
        var m = matches[k];
        html += '<a href="../' + m.n.p + '" class="sr-item"><div class="sr-title">' + m.n.t + '</div><div class="sr-meta">' + m.n.f + '</div></a>';
      }
      sRes.innerHTML = html;
    }
    sRes.classList.add('show');
  });

  document.addEventListener('click', function(e) {
    if (!sRes.contains(e.target) && e.target !== sInp) sRes.classList.remove('show');
  });

  sInp.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { sRes.classList.remove('show'); sInp.blur(); }
  });
})();
