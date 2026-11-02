# Design System — selfstorage-C

## Tokens (`:root`)
```css
:root {
  /* Palette */
  --c-ink: #1B2838;
  --c-paper: #F5F0E8;
  --c-mid: #E6DFD1;
  --c-deep: #1B2838;
  --c-accent: #D96A4B;
  --c-teal: #3A7D7B;
  --c-muted: #4A5568;
  --c-rule: rgba(27,40,56,.12);

  /* Type scale (fluid) */
  --fs--1: clamp(.75rem, .72rem + .15vw, .875rem);
  --fs-0: clamp(.875rem, .84rem + .2vw, 1rem);
  --fs-1: clamp(1rem, .95rem + .25vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.15rem + .5vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.5rem + 1vw, 2.5rem);
  --fs-4: clamp(2.25rem, 1.8rem + 1.8vw, 3.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5rem);

  /* Space */
  --s-1: .25rem; --s-2: .5rem; --s-3: .75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(4rem, 6svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);

  /* Motion */
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --stagger: 60ms;

  /* Header */
  --header-h: 4rem;
}
```

## Tone classes
Each sets bg, ink, muted, rule and accent so components never pick colors.
- `.t-light` — paper bg, ink text, muted slate, accent coral.
- `.t-paper` — mid bg, ink text, muted slate, accent teal.
- `.t-mid` — dune/mid bg, ink text, muted slate, accent coral.
- `.t-deep` — deep navy bg, paper text, muted paper-60, accent coral.
- `.t-accent` — sea-glass teal bg, paper text, muted paper-70, accent coral (signal).

## Base
- Mobile-first: base = 320-389, then `@media (min-width: 390px)`, `640px`, `900px`, `1200px`, `1440px`.
- Body: `font-family: 'DM Sans', sans-serif; font-optical-sizing: auto; text-wrap: pretty; measure: 65ch`.
- Headings: `font-family: 'Fraunces', serif; font-optical-sizing: auto; text-wrap: balance`.
- Lead paragraph: `font-size: var(--fs-1); font-weight: 450; max-width: 60ch`.
- Mono labels: `font-family: 'DM Mono', monospace; letter-spacing: -.01em`.
- Focus: `:focus-visible { outline: 3px solid var(--c-accent); outline-offset: 3px }`. Works on deep via contrast ≥ 3:1.
- Forced-colors: buttons keep borders.

## Components
- Buttons: primary (coral bg, paper text), secondary (teal border, ink text), ghost (text-only with coral underline). Min-height 48px, padding ≥ 1rem horizontal.
- Inputs: 48px tall, 2px border, focus ring matches accent.
- Cards: `.card` with paper bg on mid/deep, subtle shadow, 12px radius.
- Tags: `.sample-tag` — small caps mono, dashed border, "Sample" prefix.
- Frames: `.frame` with aspect-ratio container, shared grade filter `saturate(.88) contrast(1.04) sepia(.06)`, per-photo `object-position`.
- Rules: `.rule` — 1px solid var(--c-rule), margin-y var(--s-5).
- Tide band: `.tide-band` — sticky on desktop ≥ 640px, inline pill row on mobile. SVG path + month dots.

## Photo grade
One filter for all photos: `filter: saturate(.88) contrast(1.04) sepia(.06)`. Per-photo `object-position` set via inline style from media plan.

## Gating
Build adds `sw-js` and `sw-motion` to `<html>`. Every hidden-before-reveal style lives under `.sw-motion .reveal { opacity: 0; transform: translateY(24px); }` and `.sw-motion .reveal.is-in { opacity: 1; transform: none; transition: opacity var(--dur-page) var(--ease-out), transform var(--dur-page) var(--ease-out); }`. Clip reveals: `.sw-motion [data-reveal="clip"] img { clip-path: inset(0 0 100% 0); }` → `.is-in { clip-path: inset(0); }`. Without `sw-motion`, everything is visible.