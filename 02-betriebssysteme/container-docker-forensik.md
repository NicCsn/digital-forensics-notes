---
title: "Container- und Docker-Forensik"
tags: [container, docker, kubernetes, forensik, overlay2, namespace]
type: notes
difficulty: intermediate
last_updated: "2026-07-01"
---

## Kurzüberblick

Container (Docker, Podman) sind keine VMs — sie nutzen den Host-Kernel und sind per Namespaces isoliert. Forensisch bedeutet das: Container-Prozesse sind Host-Prozesse, Container-Dateisysteme sind Host-Dateien, und ein Container-Escape macht aus einem kompromittierten Container ein kompromittiertes Host-System.

## Details

### Container-Architektur — forensisch verstanden

```
Host OS
├── Docker Daemon (dockerd)
├── containerd / runc
├── Overlay2 / OverlayFS (Dateisystem-Layer)
├── Namespaces (PID, NET, MNT, UTS, IPC, User, Cgroup)
├── CGroups (Ressourcen-Limitierung)
└── Container-Prozess → läuft als normaler Host-Prozess!
```

### Docker-Forensik: Layer und Overlay2

Ein Docker-Image besteht aus mehreren schreibgeschützten Layern:

```bash
docker image history nginx:latest
# IMAGE          CREATED       CREATED BY                              SIZE
# abc123def     3 weeks ago   /bin/sh -c #(nop) CMD ["nginx"...]      0B
# bcd234efg     3 weeks ago   /bin/sh -c #(nop) EXPOSE 80             0B
# cde345fgh     3 weeks ago   COPY index.html /usr/share/nginx/html/  612B
```

Jeder Befehl im Dockerfile erzeugt einen neuen Layer. Die unteren Layer sind unveränderlich.

Forensische Fundorte auf dem Host:
- **Layer-Daten:** `/var/lib/docker/overlay2/<layer-id>/diff/` — das Container-Dateisystem
- **Container-Logs:** `/var/lib/docker/containers/<container-id>/<container-id>-json.log`
- **Docker-Konfiguration:** `/var/lib/docker/containers/<container-id>/config.v2.json` — Enthält Environment-Variablen (inkl. Secrets!), Port-Mappings, Mounts

### Forensische Analyse eines Containers

```bash
# Container-Logs (auch nach Löschung des Containers!)
docker logs <container-id>

# In einen laufenden Container einsteigen
docker exec -it <container-id> /bin/bash

# Container als Image speichern (forensisches "Image")
docker commit <container-id> forensic-snapshot
docker save forensic-snapshot -o container.tar

# Dateisystem direkt vom Host aus analysieren
ls /var/lib/docker/overlay2/<layer-id>/diff/

# Gelöschte Dateien im Container?
# OverlayFS erstellt beim Löschen eine "whiteout"-Datei (character device 0:0)
# Diese zeigt: "Diese Datei wurde gelöscht"
find /var/lib/docker/overlay2/ -name ".wh.*"
```

### Container-Escape — wenn die Isolation bricht

Angreifer, die einen Container übernehmen, versuchen auf den Host auszubrechen:

| Escape-Methode | Wie es funktioniert | Forensische Spur |
|----------------|-------------------|-----------------|
| **Privileged Container** | Container startet mit `--privileged` → Host-Devices zugreifbar | Host-Prozesse mit Namespace des Containers |
| **Docker Socket Mount** | `/var/run/docker.sock` ist im Container gemountet → neuer Container starten mit Host-Zugriff | Container-Logs zeigen `docker run` |
| **Kernel-Exploit (Dirty Cow)** | Alte Kernel-Version erlaubt Container-Escape | Kernel-Version prüfen! |
| **Capabilities Abuse** | `CAP_SYS_ADMIN` erlaubt Mount-Operationen | `docker inspect` → "CapAdd": ["SYS_ADMIN"] |

### Kubernetes-Forensik

Kubernetes (K8s) orchestriert Container über mehrere Hosts (Nodes):

| Artefakt | Fundort | Aussage |
|----------|---------|---------|
| **Pod-Logs** | `kubectl logs <pod-name>` | Was hat die Anwendung ausgegeben? |
| **Pod-Definition** | `kubectl describe pod <pod>` | Welches Image? Welche Env-Vars? Welche Mounts? |
| **Events** | `kubectl get events` | Pod-Starts/-Stopps, Image-Pulls, Fehler |
| **Secrets** | `kubectl get secrets -o yaml` | Base64-codierte Secrets (einfach dekodierbar!) |
| **Audit-Logs** | `/var/log/kubernetes/audit.log` | Wer hat `kubectl exec` ausgeführt? Von welcher IP? |

### Forensische Best Practices für Container

1. **Container NICHT stoppen** — RAM ist flüchtig! Zuerst `docker commit` oder `docker export`
2. **Host-System analysieren:** Container-Prozesse sind normale Host-Prozesse (`ps aux`)
3. **Image-Layer inspizieren:** `docker image history`, `docker save`
4. **Netzwerk analysieren:** Docker-Netzwerk-Treiber (bridge, overlay) → iptables-Regeln auf dem Host zeigen Port-Mappings
5. **Logs sichern:** Container-Logs werden im JSON-File-Logging-Treiber gespeichert, auch nach `docker rm`

## Praktische Anwendung / Befehle

- `docker inspect <container>` — vollständige Konfiguration (Env, Mounts, Netzwerk)
- `docker diff <container>` — welche Dateien wurden verändert?
- `docker cp <container>:/etc/passwd /tmp/` — Datei aus Container extrahieren
- `kubectl get pods -o wide` — alle Pods mit Node-IP
- `kubectl exec -it <pod> -- /bin/sh` — Shell im Pod

## Quellen / Weiterführendes

- [Docker Forensics Guide (SANS)](https://www.sans.org/blog/docker-forensics/)
- [Kubernetes Auditing](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)
- [OWASP Docker Security](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)
