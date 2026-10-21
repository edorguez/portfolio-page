#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

docker network inspect shared-edge >/dev/null 2>&1 || docker network create shared-edge

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example."
fi

echo "portfolio-page bootstrap complete."
echo "Next: docker compose up -d --build"
