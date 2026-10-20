# Critique — edoutput.dev portfolio

Screens inspected: desktop-fold, desktop-page-01/02/03, tablet-fold/page-01/page-02, mobile-fold/page-01/page-02.

## One second, then five

**One second:** a green terminal prompt and a large, centered name.

**Five seconds:** this is Eduardo Rodríguez, a full-stack developer with 8 years of experience. The next action is the green "contact --email" button.

## Squint

The dominant shapes are the oversized hero statement and the huge footer wordmark. The accent green (#33ff66) is used sparingly and consistently: prompt, CTA, contact links, live-site links. No accidental bright spots.

## Composition

The hero is centered and type-only, which fits the adopted `type-only-statement` direction. On desktop there is a lot of dark ground around the statement; it is deliberate, but the first screen could feel sparse. The supporting sentence and CTA sit below the headline as a balanced pair.

Sections vary in layout: About uses a side-facts / wide-paragraph split, Stats is a two-column receipt, Experience is a vertical timeline, Projects are image cards, Skills are two text columns, Contact is display rows plus a live terminal, FAQ is questions beside answers, Footer is a giant wordmark. No identical card grids.

## Type

Geist Sans carries 99% of the page; JetBrains Mono is reserved for terminal sessions and literal code. Six font sizes are in use (13/16/20/32/96/173px), close to the five-step target. The hero headline stays at two lines across all three measured widths. No all-caps labels.

## Colour

Dark ground (#0a0a0a), light ink (#eeeeee), one accent (#33ff66). Light mode mirrors the same structure. The accent is easily changed in one line of `_tokens.scss`. No gradients except the optional image scrim, which was removed in favour of plain project cards.

## Pictures / footage

Four real project screenshots are loaded as interface fragments. No video is used — a search with `assets.mjs --video` returned no honest clips matching the subject, so the absence is defended.

## Motion

Hero: terminal command types, then the statement and CTA reveal with a spring stagger. Terminal cursor blinks. Project cards scale their images on hover/focus. Contact terminal responds to typed commands. Sections also have a subtle staggered y-reveal on scroll. This last effect is useful but close to a generic fade-up; a future pass could replace it with section-specific reveals (counting up the stats total, drawing the timeline, etc.).

## Responsive

Mobile nav links wrap into two lines instead of hiding behind a menu. The hero statement scales down and stays readable. Project cards collapse to a single column. Contact display rows scale and remain tappable. FAQ stacks question above answer on narrow screens.

## Read

Copy is real CV content. Headings are short. Bullets are concise. The terminal is a genuine interaction, not decoration.

## Argument

The argument is clear: Eduardo has shipped production systems for years across two stacks (.NET/Angular and React/Go), and the evidence is a verifiable log of companies, projects, and a working contact terminal.

## Remaining issues

1. **No video** — defended; no fitting clip was found.
2. **Motion could be more varied** — the scroll reveal is a uniform y-stagger. Replacing it with per-section moves would lift the page.
3. **Hero density** — the centered first screen is intentionally airy, but it could carry a little more information without breaking the type-only discipline.

## Score

**7.5 / 10**

The page passes the meter with 0 FAIL / 1 WARN, uses a single-token accent, real content, real pictures, and a memorable signature interaction. It sits just below the top tier because the scroll motion is generic and the hero first screen is slightly empty.
