# AGENTS.md — edoutput.dev portfolio

Compact source of truth for agents working on Eduardo Rodríguez's personal portfolio.

## Project identity

- Portfolio for a Software Developer (Full Stack).
- Domain: `edoutput.dev`.
- Languages: English (US) + Spanish (LATAM) via `react-i18next`.
- Content lives in typed TS files under `src/data/`. Real content was extracted from the CV; the portrait and both resume PDFs are in `public/`.

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
| i18next-browser-languagedetector | latest stable |
| devicon | latest stable (monochrome inline SVGs) |

- Tailwind is **forbidden**. Styling is Sass CSS Modules: co-located `Component.tsx` + `Component.module.scss` plus global files in `src/styles/`.
- TypeScript 7 is a native port. If a tool or editor plugin breaks, suspect TS-API compatibility first.
- Node.js 22.12+ is required by Vite 8 / Rolldown. On older Node versions (e.g. 22.9.0) you may need to install the matching `@rolldown/binding-*` package manually and use `npm install --legacy-peer-deps`.
- `typescript-eslint` does not yet support TypeScript 7, so the project pins TypeScript 6.x.

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
- Default language follows the browser (`localStorage` override → `navigator.language` → English fallback) via `i18next-browser-languagedetector`.

### Accent
- Accent is confirmed green: `--accent: #33FF66` in `src/styles/_tokens.scss`, with derived `--accent-text`, `--accent-dim` and `--accent-contrast`.
- The green is the decided brand colour, not a placeholder. The one-token swap remains so the palette can still be adjusted in a single line.
- Text that sits directly on the ground uses `--accent-text` (dark green in light mode) so contrast holds in both themes. Fills, cursor and selection use `--accent`.
- The `frontend-design` skill notes that "near-black + single acid-green accent" is a common AI-generated default; distinctiveness is carried by typography and layout, not the accent alone.

### Typography
- **Monospace**: JetBrains Mono — terminal sessions, literal code and data fragments.
- **Sans-serif**: Geist — UI, prose, nav, labels and skill lists.
- **Forbidden as primary fonts**: Inter, Roboto, Arial, system-ui, and any bare `system-ui` fallback.
- Self-host both; do not depend on Google Fonts/CDN.
- Five-step scale: display, heading, lead, body, small. Keep it to roughly five sizes.

### Direction
- Adopted taste-skill direction `type-only-statement` for its typographic boldness.
- The dealt palette (`Bottle green, gold`) and hero blueprint (`Waterline headline`) conflicted with the required terminal/SSH identity, so palette and hero were overridden to a terminal dark/light scheme and an SSH-login hero. The typographic composition remains.

### Motion
- GSAP + ScrollTrigger; all animation through `useGSAP()` from `@gsap/react` with scoped refs.
- Hero: terminal typing effect, then name springs in (stiffness 100, damping 10).
- Custom blinking terminal cursor.
- Ambient falling-code canvas (`BackgroundCanvas`) behind the page; it pauses on hidden tabs and paints a static frame for reduced motion.
- Avoid generic fade-and-slide-up on every section; each animation must answer a user action or be a single orchestrated reveal.

## Site structure

1. **Hero** — SSH-login-style terminal typing; Eduardo's name reveals with spring; availability/status line; language toggle.
2. **About** — portrait plus asymmetric facts/bio, real profile, stats counters (years, companies, projects), no generic cards.
3. **Experience** — vertical timeline-as-logs; each role shows company, title, dates, location and bullets.
4. **Projects** — featured work in order: MERKI → Business Manager → GPS Medical Assistance → Tourism Agency. Real screenshots; links to live site and public repo.
5. **Skills** — two clusters with monochrome tech icons: professional (.NET/Angular/SQL/Azure) and builder/SaaS (React/Go/PostgreSQL/Docker/AWS).
6. **Contact** — centered display rows, explicit English/Spanish CV download buttons, and a command-style terminal (`help`, `cv`, `email`, `linkedin`, `github`, `theme`, `lang`, `clear`). Resume PDFs live in `public/resume-en.pdf` and `public/resume-es.pdf`.
7. **FAQ / meta block** — terminal-style site metadata (stack versions, public repo, crafted by).

Also:
- `public/llms.txt` — hand-maintained, agent-readable site summary.
- Resume PDFs in `public/resume-en.pdf` (English) and `public/resume-es.pdf` (Spanish).
- Portrait in `public/images/portrait.jpg`.

## Content data

- `src/data/profile.ts` — name, title, contact, bio, photo path, resume paths, location.
- `src/data/experience.ts` — job history from CV.
- `src/data/projects.ts` — 4 projects with titles, descriptions, URLs, screenshots, tech tags.
- `src/data/skills.ts` — grouped skills with icon keys or monogram fallbacks.
- `src/data/techIcons.ts` — inlined, monochrome Devicon SVGs.
- `src/lib/career.ts` — current year and years of experience derived from `profile.careerStartYear`.
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
