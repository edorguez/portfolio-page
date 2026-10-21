# Critique — edoutput.dev portfolio

Screens inspected: desktop-fold, desktop-page-01/02/03, tablet-fold/page-01/page-02, mobile-fold/page-01/page-02, plus a light-mode pass (hero, skills, contact).

## One second, then five

**One second:** a green terminal prompt, a falling-code backdrop and a large centered name.

**Five seconds:** this is Eduardo Rodríguez, a full-stack developer with 8 years of experience. The next actions are the green "contact --email" button, the `cv` nav item, or the English/Spanish CV buttons in Contact.

## Squint

The dominant shapes are the oversized hero statement, the portrait in About, the skills icon grid and the huge footer wordmark. The accent green is used sparingly: prompt, CTA, links, contact prompt, focus states. Light mode switches text accents to a deeper green while keeping the bright fill.

## Composition

The hero is centered and type-only, now backed by a quiet falling-code canvas that fills the former empty ground without stealing focus. Sections remain distinct: About pairs a 4:5 portrait with facts and prose; Stats is a receipt; Experience is a timeline; Projects are screenshot cards; Skills is an icon grid in two clusters; Contact is centered display rows, a CV block and a live terminal; FAQ is questions beside answers; the footer is a giant wordmark.

## Type

Geist Sans carries 99% of the page; JetBrains Mono is reserved for the terminal and literal code. The scale stays at seven measured sizes (10/14/16/20/32/96/173), with 10px only inside monogram icon tiles. The hero headline stays at two lines at 1440, 768 and 390. Small UI text moved from 13px to 14px.

## Colour

Dark: #0a0a0a ground, #eeeeee ink, confirmed #33ff66 accent. Light: #eeeeee ground, #1a1a1a ink, #0b6a2b accent text (≈5.3:1 on the surface) and the bright green kept for fills. No gradients. The falling-code canvas uses the same accent token with low alpha.

## Pictures / footage

Five real images: four live project screenshots plus the portrait (EXIF orientation stripped, cropped 4:5). No video is used — a search with `assets.mjs --video` returned no honest clip matching the subject, so the absence is defended.

## Motion

Hero: terminal command types, then the statement and CTA reveal. Cursor blinks. The falling-code canvas drifts and pauses when the tab is hidden or reduced motion is requested. Project images scale on hover/focus. The contact terminal responds to typed commands, aliases and clickable chips. Sections keep a subtle staggered y-reveal — still the least distinctive part of the motion layer.

## Responsive

The nav is a two-row sticky bar on small screens (wordmark + controls, then links) rather than a hamburger. The hero stays at two lines. About stacks the portrait above the facts. Contact row type drops from 32px to 20px and the CV buttons wrap. Skills move to one or two columns. Terminal chips wrap.

## Read

Copy is real CV content. The public repository and both resume files are now linked correctly. The CV block is explicit about the language choice.

## Argument

The argument is clear: Eduardo has shipped production systems for years across two stacks (.NET/Angular and React/Go), and the evidence is a verifiable log of companies, projects, a portrait, downloadable CVs and a working contact terminal.

## Remaining issues

1. **No video** — defended; no fitting clip was found.
2. **Motion variety** — the scroll reveal is still a uniform y-stagger; per-section moves (a counting stats total, a drawing timeline) would lift it further.
3. **Hero density** — the centered first screen is intentionally airy; the canvas helps, but it remains a deliberate rest.

## Score

**8.0 / 10**

The page passes the meter with 0 FAIL / 1 WARN, has a confirmed single-token accent, real content, five real pictures, a portrait, a clear CV flow, and a terminal that actually works. It sits short of the top tier because the scroll motion is generic and the hero is still sparse.
