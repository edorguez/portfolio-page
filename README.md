# edoutput.dev — portfolio

Personal portfolio of **Eduardo Rodríguez**, Full Stack Developer. One continuous shell session: a terminal aesthetic, dark/light themes, English/Spanish content, and a contact section that actually runs commands.

- **Live:** https://edoutput.dev
- **Source:** https://github.com/edorguez/portfolio-page

## Features

- **Terminal identity** — SSH-login hero with a typing effect, blinking cursor, ambient falling-code canvas, and a live contact shell (`help`, `cv`, `email`, `linkedin`, `github`, `whoami`, `lang en/es`, `theme dark/light`, `clear`, plus typo suggestions and clickable command chips).
- **Bilingual (EN/ES)** — content lives in typed dictionaries; the default language follows the browser (`localStorage` override → `navigator.language` → English fallback), and the manual choice persists.
- **Dark + light** — follows `prefers-color-scheme`, manual toggle persisted to `localStorage`, set before first paint to avoid a flash of the wrong theme. Light mode uses a deeper green for text contrast while the accent stays bright.
- **Real content** — job history, four featured projects with live screenshots, and a portrait. Resumes are downloadable in both English and Spanish.
- **Design system** — one accent token (`--accent` in `src/styles/_tokens.scss`), a five-step type scale, monochrome tech icons shared by the skills grid and project cards, and motion routed through GSAP/ScrollTrigger with a reduced-motion fallback.

## Tech stack

| Layer | Choice |
|---|---|
| Build | Vite 8 |
| UI | React 19, TypeScript 6 |
| Styling | Sass CSS Modules (Tailwind intentionally not used) |
| Motion | GSAP 3.15 + ScrollTrigger, `useGSAP()` |
| i18n | react-i18next + i18next-browser-languagedetector |
| Icons | Devicon (inline monochrome SVGs) + the Claude mark from Simple Icons |
| Fonts | Self-hosted JetBrains Mono (code) + Geist Sans (UI/prose) |
| Hosting | Static build behind a Cloudflare Tunnel |

## Commands

```bash
npm install
npm run dev        # dev server
npm run build      # static build to dist/
npm run preview    # preview dist/
npm run lint       # ESLint
npm run typecheck  # tsc -b
```

> **Node version:** Vite 8 / Rolldown require Node.js 20.19+ or 22.12+. On older Node (e.g. 22.9.0) install the matching `@rolldown/binding-*` package and use `npm install --legacy-peer-deps`.

## Structure

```
src/
  components/
    layout/     Nav, toggles, terminal cursor, BackgroundCanvas
    sections/   Hero, About, Stats, Experience, Projects, Skills, Contact, FAQ, Footer
    ui/         TerminalWindow, SectionHeading, TechBadge
  data/         profile, experience, projects, skills, techIcons, meta
  i18n/         en.ts, es.ts, detector setup
  lib/          career.ts (years of experience), gsap.ts
  styles/       _tokens.scss (accent, themes, type scale), _reset.scss, _mixins.scss
public/
  images/       portrait.jpg
  screenshots/  live captures of the four featured projects
  resume-en.pdf / resume-es.pdf
```

## Deployment

Static SPA only — no server functions, no API routes.

```bash
npm run build
npx serve -s dist -l 4173
```

Then point the Cloudflare Tunnel public hostname `edoutput.dev` at the static server. If client-side routes are ever added, keep the SPA fallback to `index.html`.

## Updating content

- Resumes: replace `public/resume-en.pdf` / `public/resume-es.pdf`.
- Portrait: replace `public/images/portrait.jpg`.
- Project screenshots: re-capture the live sites into `public/screenshots/`.
- Copy, job history, projects and skills: edit `src/i18n/en.ts`, `src/i18n/es.ts` and `src/data/`.
- Accent: change the single `--accent` value in `src/styles/_tokens.scss`.
