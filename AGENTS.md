# AGENTS.md — edoutput.dev portfolio

Compact source of truth for agents working on Eduardo Rodríguez's personal portfolio.

## Project identity

- Portfolio for a Software Developer (Full Stack).
- Domain: `edoutput.dev`.
- Languages: English (US) + Spanish (LATAM) via `react-i18next`.
- Content lives in typed TS files under `src/data/`. Real content was extracted from the CV; fill any placeholder fields (`location`, `photo`, `education`) before shipping.

## Stack (verified latest, as of Oct 2026)

| Package | Pin |
|---|---|
| Vite | `^8.3.4` |
| React | `^19.3.1` |
| TypeScript | `^6.0.3` (TS 7 is latest but typescript-eslint and react-i18next do not yet support it; downgrade to 6.x for a working toolchain) |
| GSAP | `^3.15.0` |
| @gsap/react | `^2.1.2` |
| sass-embedded | `^1.105.2` |
| react-i18next | latest stable |

- Tailwind is **forbidden**. Styling is Sass CSS Modules: co-located `Component.tsx` + `Component.module.scss` plus global files in `src/styles/`.
- TypeScript 7 is a native port. If a tool or editor plugin breaks, suspect TS-API compatibility first.

## Commands

Scaffold once with:

```bash
npm create vite@latest . -- --template react-ts
npm install gsap @gsap/react sass-embedded react-i18next i18next
npm install -D eslint typescript-eslint @vitejs/plugin-react
```

Daily:

```bash
npm run dev        # start dev server
npm run build      # output static site to dist/
npm run preview    # preview dist/
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Design system

### Theme
- **Dark + light modes**, not dark-only.
- Default follows `prefers-color-scheme`; manual toggle persists to `localStorage`.
- No flash on load: set `data-theme` as early as possible (inline script in `index.html` or root script).
- All theme colors are CSS custom properties generated from `src/styles/_tokens.scss`. Every component consumes `var(--...)`; never hardcode hexes.

### Accent
- Accent is defined **exactly once**: `$accent: #33FF66;` → `--accent` plus derived `--accent-dim` and `--accent-contrast`.
- Eduardo is unsure about green; the design pass must be able to swap the accent by changing this single token.
- The `frontend-design` skill notes that "near-black + single acid-green accent" is a common AI-generated default; the design pass should earn distinctiveness through typography and layout, not rely on the accent alone.

### Typography
- **Monospace**: JetBrains Mono — terminal data, logs, stack lists, typed hero text.
- **Sans-serif**: Geist — UI and prose.
- **Forbidden as primary fonts**: Inter, Roboto, Arial, system-ui, and any bare `system-ui` fallback.
- Self-host both; do not depend on Google Fonts/CDN.

### Motion
- GSAP + ScrollTrigger; all animation through `useGSAP()` from `@gsap/react` with scoped refs.
- Hero: terminal typing effect, then name springs in (stiffness 100, damping 10).
- Custom blinking terminal cursor.
- Avoid generic fade-and-slide-up on every section; each animation must answer a user action or be a single orchestrated reveal.

## Site structure

1. **Hero** — SSH-login-style terminal typing; Eduardo's name reveals with spring; availability/status line; language toggle.
2. **About** — asymmetric layout, real bio, stats counters (years, companies, projects), no generic cards.
3. **Experience** — vertical timeline-as-logs; each role shows company, title, dates, bullets, tech tags.
4. **Projects** — featured work in order: MERKI → Business Manager → GPS Medical Assistance → Tourism Agency. Hover reveals stack and links (GitHub + live site).
5. **Skills** — two clusters: professional (.NET/Angular/SQL/Azure) and builder/SaaS (React/Go/PostgreSQL/Docker/AWS).
6. **Contact** — command-style interaction; `download --resume` returns the PDF from `/public/resume.pdf`.
7. **FAQ / meta block** — terminal-style site metadata (stack versions, changelog, crafted by).

Also:
- `public/llms.txt` — hand-maintained, agent-readable site summary.
- Resume PDF in `public/resume.pdf`.

## Content data

- `src/data/profile.ts` — name, title, contact, bio, photo path, location placeholders.
- `src/data/experience.ts` — job history from CV.
- `src/data/projects.ts` — 4 projects with titles, descriptions, URLs, tech tags.
- `src/data/skills.ts` — grouped skills.
- `src/i18n/en.ts` and `src/i18n/es.ts` — typed dictionaries.

## Architecture conventions

- One component = `Component.tsx` + `Component.module.scss` in the same folder.
- Global tokens/mixins only in `src/styles/`: `_tokens.scss`, `_reset.scss`, `_mixins.scss`.
- No `any` in committed code; `strict: true`.
- React 19: `ref` is a prop — no `forwardRef`.
- All GSAP instances live inside `useGSAP()` with a `scope` ref; never manually manage `ctx.revert()` in `useEffect`.

## Deployment

- Self-hosted on a local machine, exposed via **Cloudflare Tunnel** to `edoutput.dev`.
- Static SPA only: `npm run build` → serve `dist/` with any static file server.
- No serverless functions, no API routes.
- Ensure SPA fallback to `index.html` if any client-side routes are added later.

## Skill workflow

- Three managed skills live in `.agents/skills/` and are pinned by `skills-lock.json`. Do not hand-edit skill files.
- Before designing any section: activate `frontend-design` and `design-taste-frontend` (taste-skill).
- After finishing each section: run `design-reviewer` for polish and variance controls.
- `hyperframes` is available but for video work only; not needed for this site.
