# Despliegue de portfolio-page

Sitio estático Vite + React. No usa base de datos, API ni almacenamiento persistente.

## URLs

- Local: `http://127.0.0.1:8084`
- Público: `https://edoutput.dev`
- Público: `https://www.edoutput.dev`

## Estructura

```text
portfolio-page/
  docker-compose.yml
  .env.example
  .dockerignore
  deploy/
    portfolio-page.Dockerfile
    portfolio-page.nginx.conf
    bootstrap.sh
```

## Prueba local

```bash
docker network inspect shared-edge >/dev/null 2>&1 || docker network create shared-edge
cp .env.example .env
./deploy/bootstrap.sh
docker compose up -d --build
```

Verificar:

```bash
curl -f http://127.0.0.1:8084/healthz
curl -I http://127.0.0.1:8084/
curl -I http://127.0.0.1:8084/resume-en.pdf
curl -I http://127.0.0.1:8084/screenshots/business-manager.png
```

Si el puerto `8084` está ocupado, cambia `EDGE_PORT` en `.env`.

## Servidor

```bash
cd /opt/docker-projects

git clone https://github.com/edorguez/portfolio-page.git /opt/docker-projects/portfolio-page
cd /opt/docker-projects/portfolio-page

cp .env.example .env
chmod 600 .env

./deploy/bootstrap.sh
docker compose up -d --build
```

Verificar en el VPS:

```bash
docker compose ps
curl -f http://127.0.0.1:8084/healthz
curl -I http://127.0.0.1:8084/
```

## Cloudflare Tunnel

El `config.yml` que usa el contenedor está en:

```text
/opt/docker-projects-data/edge/cloudflared/config.yml
```

Debe quedar así:

```yaml
tunnel: <UUID>
credentials-file: /etc/cloudflared/<UUID>.json

ingress:
  - hostname: tourism-agency.edoutput.dev
    service: http://tourism-agency-edge:80

  - hostname: gps-medical-assistance.edoutput.dev
    service: http://gps-medical-assistance-edge:80

  - hostname: business-manager.edoutput.dev
    service: http://business-manager-edge:80

  - hostname: edoutput.dev
    service: http://portfolio-page-edge:80

  - hostname: www.edoutput.dev
    service: http://portfolio-page-edge:80

  # Tenants de business-manager.
  - hostname: "*.edoutput.dev"
    service: http://business-manager-edge:80

  - service: http_status:404
```

No debe quedar la entrada antigua:

```yaml
  - hostname: www.edoutput.dev
    service: http_status:404
```

Reiniciar el túnel:

```bash
cd /opt/docker-projects/edge
docker compose up -d --force-recreate
docker logs -f edoutput-cloudflared
```

## DNS

Desde la Mac:

```bash
cloudflared tunnel route dns edoutput-tunnel edoutput.dev
```

`www.edoutput.dev` ya existe apuntando al túnel. Si no existe:

```bash
cloudflared tunnel route dns edoutput-tunnel www.edoutput.dev
```

Cloudflare soporta CNAME en el apex mediante CNAME flattening.

## SSL

No hay que cambiar nada:

- `Full (strict)` o `Full`.
- **Always Use HTTPS** activado.
- Universal SSL cubre `edoutput.dev` y `www.edoutput.dev`.

## Pruebas públicas

Desde la Mac:

```bash
curl -I https://edoutput.dev
curl -I https://www.edoutput.dev
curl -I https://edoutput.dev/resume-en.pdf
curl -I https://edoutput.dev/screenshots/business-manager.png
```

Abrir `https://edoutput.dev` y comprobar los enlaces a:

- `https://tourism-agency.edoutput.dev`
- `https://gps-medical-assistance.edoutput.dev`
- `https://business-manager.edoutput.dev`

## Notas

- El repo usa la rama `main`.
- El `package.json` incluye un binding de Rolldown para macOS. El Dockerfile usa
  `npm ci` con fallback a `npm install` para que Linux x86_64 instale el binding
  correcto.
- No se necesitan volúmenes ni datos persistentes.
- El wildcard `*.edoutput.dev` sigue reservado para los tenants de business-manager.
