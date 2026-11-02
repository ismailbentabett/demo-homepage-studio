# Design system — excavation-B

## Tokens (`:root`)

```css
:root {
  /* palette */
  --c-ink: #1C1F23;
  --c-paper: #F4F1EB;
  --c-deep: #1A1D21;
  --c-accent: #C8372D;
  --c-signal: #B8A992;
  --c-muted: #5A5E66;
  --c-white: #FFFFFF;

  /* type scale (fluid) */
  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.9rem, 0.85rem + 0.3vw, 1rem);
  --fs-1: clamp(1.1rem, 1rem + 0.5vw, 1.35rem);
  --fs-2: clamp(1.4rem, 1.2rem + 1vw, 2rem);
  --fs-3: clamp(1.8rem, 1.4rem + 2vw, 2.75rem);
  --fs-4: clamp(2.2rem, 1.6rem + 3vw, 3.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  /* space */
  --s-1: 0.25rem;
  --s-2: 0.5rem;
  --s-3: 0.75rem;
  --s-4: 1rem;
  --s-5: 1.5rem;
  --s-6: 2rem;
  --s-7: 3rem;
  --s-8: 4rem;
  --s-9: 6rem;
  --sec-y: clamp(4rem, 6vw, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);

  /* motion */
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;

  /* signature */
  --sw-laser: var(--c-accent);
  --header-h: 64px;
}
```

## Tone classes
- `.t-light` — bg `--c-paper`, ink `--c-ink`, muted `--c-muted`, rule `rgba(28,31,35,.12)`, accent `--c-accent`.
- `.t-paper` — same as light but bg `#EDEAE3` (slightly darker paper for alternation).
- `.t-mid` — bg `--c-signal`, ink `--c-ink`, muted `#3E3B36`, rule `rgba(28,31,35,.18)`, accent `--c-accent`.
- `.t-deep` — bg `--c-deep`, ink `--c-paper`, muted `#9A9DA4`, rule `rgba(244,241,235,.12)`, accent `--c-accent`.
- `.t-accent` — bg `--c-accent`, ink `--c-paper`, muted `rgba(244,241,235,.8)`, rule `rgba(244,241,235,.25)`, accent `--c-paper`.

Each tone sets `background`, `color`, `--muted`, `--rule`, `--accent-local` so components never pick colors themselves.

## Base
- Mobile first: base = 320-389, then `@media (min-width: 390px)`, `640px`, `900px`, `1200px`, `1440px`.
- Headings: `font-family: 'Space Grotesk', sans-serif; text-wrap: balance; font-weight: 600`.
- Body: `font-family: 'Outfit', sans-serif; text-wrap: pretty; line-height: 1.6; max-width: 68ch`.
- Lead paragraph: `font-size: var(--fs-1); font-weight: 450`.
- Mono: `font-family: 'DM Mono', monospace; font-feature-settings: "tnum"; letter-spacing: -0.01em`.
- Photo grade: `filter: saturate(.85) contrast(1.05) sepia(.08)` shared across all photos.

## Components
- Buttons: primary (bg accent, ink paper, ≥48px tall), secondary (outline accent), text (underline). Hover: left hairline `scaleX`.
- Inputs: border `--rule`, focus outline `3px solid var(--c-accent); outline-offset: 3px`.
- Cards: bg white on deep, bg paper on light, border-radius 4px, shadow subtle.
- Tags: `.sample-tag` small caps mono, border-left 2px accent.
- Frames: aspect-ratio containers with object-position per slot; grade applied.
- Rules: 1px solid `var(--rule)`.
- Header: sticky, blur backdrop, hides on scroll down, shows on up.
- Mobile bar: sticky bottom under 900px, call + price-it, hides on scroll down and when `#contact` visible.

## Focus
`:focus-visible { outline: 3px solid var(--c-accent); outline-offset: 3px }`. Passes 3:1 on all tones. `forced-colors: active` keeps button borders.

## Gating
Build adds `sw-js` and `sw-motion` to `<html>`. Every hidden-before-reveal style lives under `.sw-motion` only. Without JS or with reduced motion, everything is visible and complete.