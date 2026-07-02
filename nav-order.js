// Lernpfad-Reihenfolge pro Kategorie
var navOrder = {
  "01-grundlagen": [
    "rechnerarchitektur-von-neumann.html",
    "zahlensysteme-und-kodierung.html",
    "algorithmen-und-komplexitaet.html",
    "datenstrukturen.html",
    "programmierparadigmen.html",
    "python-grundlagen.html",
    "oop-klassen-vererbung.html",
    "softwareentwicklungsprozess.html"
  ],
  "02-betriebssysteme": [
    "betriebssystem-architekturen.html",
    "prozessmanagement-threads.html",
    "memory-management.html",
    "linux-administration.html",
    "windows-administration.html",
    "dateisysteme-uebersicht-fat-ntfs-ext4-apfs.html",
    "datentraeger-verschluesselung.html",
    "windows-registry-forensik.html",
    "betriebssystem-forensik-spurensuche.html",
    "file-carving.html",
    "mobile-forensik-android-ios.html",
    "macos-forensik.html",
    "anti-forensik-betriebssystem.html",
    "container-docker-forensik.html",
    "embedded-systems-iot-forensik.html",
    "iot-security-grundlagen.html"
  ],
  "03-netzwerke": [
    "tcp-ip-protokollfamilie.html",
    "ip-adressierung-subnetting.html",
    "dhcp-dns-arp.html",
    "routing-switching-vlans.html",
    "vpn-und-firewalls.html",
    "wireshark-basics-paketanalyse.html",
    "netzwerkforensik-methoden.html",
    "tls-ssl-forensik.html",
    "web-sicherheit-owasp.html",
    "browser-forensik.html",
    "wireless-forensik.html",
    "darknet-tor-i2p.html"
  ],
  "04-forensik-methoden": [
    "forensischer-prozess-chain-of-custody.html",
    "forensisches-imaging.html",
    "write-blocker.html",
    "datentraeger-forensik.html",
    "arbeitsspeicher-forensik.html",
    "forensische-live-sicherung.html",
    "triage-erstanalyse.html",
    "logfile-analyse.html",
    "email-forensik.html",
    "datenbanken-forensik.html",
    "malware-analyse-statisch.html",
    "malware-analyse-dynamisch.html",
    "timeline-analysis.html",
    "threat-hunting.html",
    "mitre-attack-framework.html",
    "cloud-forensik.html",
    "forensische-dokumentation.html"
  ],
  "05-it-security": [
    "schutzziele-cia-triad.html",
    "risikoanalyse-threat-modeling.html",
    "kryptografie-grundlagen-symmetrisch-asymmetrisch.html",
    "authentifizierung-pki.html",
    "kryptoanalyse.html",
    "post-quantum-blockchain.html",
    "security-incident-management.html",
    "siem-und-monitoring.html"
  ],
  "06-osint": [
    "osint-lifecycle-und-tooling.html",
    "osint-recherche-methodik.html",
    "osint-anonymisierung-opsec.html",
    "social-media-analyse.html",
    "cybercrime-oekonomie.html"
  ],
  "07-recht-kriminalistik": [
    "digitale-beweismittel-grundprinzipien.html",
    "strafrecht-allgemeiner-teil.html",
    "grundrechte-digital.html",
    "dsgvo-datenschutz.html",
    "kriminalistik-grundlagen.html",
    "tatortarbeit-spurenkunde.html",
    "eingriffsrecht-tkue.html",
    "ethik-informationssicherheit.html",
    "juristische-fallbearbeitung-gutachtenstil.html"
  ],
  "08-ki-forensik": [
    "ki-grundlagen-ml-overview.html",
    "decision-trees-klassifikation.html",
    "neuronale-netze-deep-learning.html",
    "llms-in-der-forensischen-analyse.html",
    "bildforensik-objekterkennung.html"
  ]
};

(function() {
  var nav = document.getElementById('prevNextNav');
  if (!nav) return;

  var path = window.location.pathname;
  var parts = path.split('/');
  var category = parts[parts.length - 2];
  var currentFile = parts[parts.length - 1];

  var order = navOrder[category];
  if (!order) return;

  var idx = order.indexOf(currentFile);
  if (idx === -1) return;

  var html = '';
  if (idx > 0) {
    var prevFile = order[idx - 1];
    html += '<a href="' + prevFile + '"><span class="pn-arrow">←</span><span class="pn-label">Vorherige</span><span class="pn-title">Vorheriges Thema</span></a>';
  } else {
    html += '<span></span>';
  }

  if (idx < order.length - 1) {
    var nextFile = order[idx + 1];
    html += '<a href="' + nextFile + '"><span class="pn-arrow">→</span><span class="pn-label">Nächste</span><span class="pn-title">Nächstes Thema</span></a>';
  } else {
    html += '<span></span>';
  }

  nav.innerHTML = html;
})();
