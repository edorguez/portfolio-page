# edoutput.dev portfolio

Personal portfolio site for Eduardo Rodríguez — Full Stack Developer.

## Stack

- Vite 8
- React 19
- TypeScript 6
- GSAP 3.15 + ScrollTrigger
- Sass CSS Modules
- react-i18next (English / Spanish)
- Self-hosted fonts: JetBrains Mono + Geist Sans

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

## Deployment

This is a static SPA. Build it, then serve the `dist/` folder with any static file server.

Example with `npx serve`:

```bash
npm run build
npx serve -s dist -l 4173
```

### Cloudflare Tunnel

On the server where the build lives:

```bash
cloudflared tunnel --no-autoupdate run --token <YOUR_TUNNEL_TOKEN>
```

Point the public hostname `edoutput.dev` to `http://localhost:4173` (or whichever port the static server uses). Ensure the tunnel is configured to serve the `dist/` directory via the static server.

## Updating content

- Copy/edit the CV PDF to `public/resume.pdf`.
- Edit personal data in `src/data/profile.ts`.
- Edit job history and project metadata in `src/data/experience.ts` and `src/data/projects.ts`.
- Edit copy in `src/i18n/en.ts` and `src/i18n/es.ts`.

## Notes

- Tailwind is intentionally not used; styling is Sass CSS Modules.
- The accent color is defined once in `src/styles/_tokens.scss` (`--accent`).
- `public/llms.txt` is a hand-maintained summary for agents and visitors.
