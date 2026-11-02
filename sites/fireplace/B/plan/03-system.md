# Design System — fireplace-B

## Tokens

```css
:root {
  /* palette */
  --c-paper: #F4F1EC;
  --c-ink: #1A1C1E;
  --c-deep: #1E2228;
  --c-ok: #3D6B5A;
  --c-watch: #8A6A28;
  --c-fix: #9B3A2E;
  --c-rule: #C8C2B6;
  --c-white: #FFFFFF;

  /* type scale (fluid) */
  --fs--2: clamp(.75rem, .7rem + .25vw, .8125rem);
  --fs--1: clamp(.8125rem, .76rem + .28vw, .875rem);
  --fs-0: clamp(.9375rem, .88rem + .3vw, 1rem);
  --fs-1: clamp(1.0625rem, .98rem + .42vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + .75vw, 1.625rem);
  --fs-3: clamp(1.625rem, 1.3rem + 1.6vw, 2.25rem);
  --fs-4: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5rem);

  /* space */
  --s-1: .25rem; --s-2: .5rem; --s-3: .75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(4rem, 6svh + 2rem, 7rem);
  --sec-x: clamp(1.25rem, 4vw + .5rem, 3rem);
  --header-h: 4rem;

  /* motion */
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --d-press: 120ms; --d-ui: 200ms; --d-page: 520ms; --d-story: 900ms; --d-stagger: 60ms;

  /* radii & rules */
  --r-sm: 2px; --r-md: 4px; --r-pill: 999px;
  --rule-w: 1.5px;
}
```

## Tone classes
Each sets background, ink, muted ink, rule color and accent so components never pick colors themselves.

- `.t-light` — paper bg, ink text, rule color, ok/watch/fix chips as-is.
- `.t-paper` — same as light but with a subtle noise texture (CSS radial-gradient).
- `.t-mid` — rule-colored bg, ink text, for tool panels.
- `.t-deep` — deep bg, paper text, chips use lighter variants (--c-ok-l: #5A9B86, etc.) for contrast.
- `.t-accent` — watch-gold bg, white text, for the single color band (the "what to watch" explainer).

## Base
- Mobile-first: base = 320–389px, then `@media (min-width: 390px)`, `640px`, `900px`, `1200px`, `1440px`.
- Headings: `text-wrap: balance`; body: `text-wrap: pretty`; measure 60–72ch.
- Lead paragraph: `font-size: var(--fs-1); font-weight: 450;` (Outfit has no opsz axis).
- Numbers: `font-family: 'JetBrains Mono'; font-variant-numeric: tabular-nums`.
- Focus: `:focus-visible { outline: 3px solid var(--c-watch); outline-offset: 3px }`.
- Forced colors: `.btn { border: 2px solid CanvasText }`.

## Components
- **Buttons:** `.btn` ≥ 48px tall, `.btn--primary` (ink bg, paper text), `.btn--ghost` (outline), `.btn--call` (with phone icon). Press: `:active { transform: scale(.97); transition: var(--d-press)- **Finding primitive:** `.finding` with `.finding__num` (mono, --fs-1), `.finding__head` (grotesk, --fs-2), `.chip` (pill, white text on signal bg), `.finding__rule` (1.5px rule-colored line).
- **Chips:** `.chip--ok`, `.chip--watch`, `.chip--fix`. White text; min-height 28px; padding-inline .75em.
- **Frames:** `.frame` with aspect-ratio container; `.frame--scope` clips to circle (camera scope shape). Photo grade: `filter: saturate(.85) contrast(1.05) sepia(.08)`.
- **Tags:** `.sample-tag` (small caps, uppercase, --fs--2, letter-spacing .08em, rule-colored border).
- **Form:** 4-step wizard with per-step validation; step labels in mono; progress as a thin ink line.
- **Mobile bar:** `[data-mobilebar]` sticky under 900px; hides on scroll-down and when `#contact` is visible.
- **Header:** `[data-header]` with logo (DN initials glyph), nav anchors, `[[call]]`; `.is-scrolled` adds paper bg + shadow.

## Photo grade
One shared filter: `filter: saturate(.85) contrast(1.05) sepia(.08)`. Applied to every `img` and video poster. Per-photo `object-position` in plan/05-media.md.

## Motion gating
Build adds `sw-js` and `sw-motion` to `<html>`. Every hidden-before-reveal style lives under `.sw-motion`:
```css
.sw-motion [data-reveal] { opacity: 0; transform: translateY(24px); }
.sw-motion [data-reveal].is-in { opacity: 1; transform: none; transition: opacity var(--d-page) var(--ease-out), transform var(--d-page) var(--ease-out); }
.sw-motion [data-reveal="clip"] img { clip-path: inset(0 0 100% 0); }
.sw-motion [data-reveal="clip"].is-in img { clip-path: inset(0); transition: clip-path var(--d-page) var(--ease-io); }
```
Without `.sw-motion`, everything is visible immediately.