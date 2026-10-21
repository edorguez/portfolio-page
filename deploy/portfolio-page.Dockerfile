# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

# The repository pins a macOS Rolldown binding in devDependencies.
# Remove it inside the Linux build so npm can install the matching Linux binding.
RUN npm pkg delete devDependencies.@rolldown/binding-darwin-arm64 && \
    npm install --no-audit --no-fund --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY deploy/portfolio-page.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN chmod -R a+rX /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
