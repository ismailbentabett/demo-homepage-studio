# Design system — farm-A

## Tokens (`:root`)

```css
:root {
  /* palette */
  --c-ink: #F2EDE4;
  --c-paper: #0E141B;
  --c-accent: #D96A2B;
  --c-deep: #1A2633;
  --c-signal: #F2B705;
  --c-muted: #A8B4C0;
  --c-rule: #2E3A48;

  /* type scale (fluid) */
  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.9375rem, 0.875rem + 0.3vw, 1.0625rem);
  --fs-1: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --fs-2: clamp(1.375rem, 1.125rem + 1vw, 2rem);
  --fs-3: clamp(1.75rem, 1.25rem + 2vw, 2.75rem);
  --fs-4: clamp(2.25rem, 1.5rem + 3vw, 3.75rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  /* spacing */
  --s-1: 0.25rem;
  --s-2: 0.5rem;
  --s-3: 0.75rem;
  --s-4: 1rem;
  --s-5: 1.5rem;
  --s-6: 2rem;
  --s-7: 3rem;
  --s-8: 4rem;
  --s-9: 6rem;
  --sec-y: clamp(4rem, 6vw + 1rem, 8rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);

  /* header */
  --header-h: 4rem;

  /* motion */
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-io: cubic-bezier(.77, 0, .175, 1);
  --d-press: 120ms;
  --d-ui: 200ms;
  --d-page: 520ms;
  --d-story: 900ms;
  --d-stagger: 60ms;

  /* signature */
  --clock-time: "5:45";
  --sw-p: 0;
}
```

## Tone classes

Each sets background, ink, muted, rule, accent. Components never pick colors themselves.

- `.t-dark` → paper bg, ink text, muted/rule/accent as defined. Default tone.
- `.t-deep` → deep bg, ink text, signal accent. Used for #process story band.
- `.t-accent` → accent bg, paper text (ink inverted). Used for #ripe chalkboard band.
- `.t-paper` → ink bg (light mode inversion for variety), paper text. Used for #proof reviews.
- `.t-mid` → rule bg, ink text. Used for footer.

No two dark tones touch: t-dark → t-deep → t-accent → t-dark → t-paper → t-dark → t-mid.

## Base

- Body: `font-family: 'DM Sans', sans-serif; color: var(--c-ink); background: var(--c-paper); text-wrap: pretty; line-height: 1.6;`
- Headings: `font-family: 'Barlow Condensed', sans-serif; font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; text-wrap: balance; line-height: 1.05;`
- h1: `var(--fs-h1)`, max-width 18ch at 1440, 12ch at 390.
- Measure: `max-width: 68ch` on body copy containers.
- Lead paragraph: `var(--fs-1); font-weight: 450;` with `"opsz" 24` if variable.

## Components

- **Buttons:** `.btn` min-height 48px, padding 0 var(--s-5), border-radius 2px. `.btn-primary` = accent bg, paper text. `.btn-ghost` = transparent, ink border, ink text. `.btn-call` includes icon slot. Hover: translateY(-2px) + box-shadow.
- **Cards:** `.card` with 1px rule border, padding var(--s-5), radius 2px. No background fill (inherits tone).
- **Tags:** `.sample-tag` = mono font, uppercase, 0.65em, border 1px dashed muted, padding 0.1em 0.4em.
- **Frames:** `.frame` aspect-ratio container, overflow hidden. Photo grade: `filter: saturate(.85) contrast(1.08) sepia(.06) brightness(.92);` tuned to pre-dawn warmth.
- **Rules:** `.rule` = 1px solid var(--c-rule), margin var(--s-5) 0.
- **Hours table:** `dl.hours` grid, dt = day, dd = range or "Closed".
- **Mobile bar:** `[data-mobilebar]` fixed bottom, height 64px, accent bg, two buttons (Call + Reserve). Hidden ≥ 900px.
- **Header:** `[data-header]` fixed top, transparent → paper bg on scroll, height var(--header-h).

## Focus

`:focus-visible { outline: 3px solid var(--c-accent); outline-offset: 3px; }`
`@media (forced-colors: active)` keeps button borders visible.

## Gating

Build adds `sw-js` and `sw-motion` to `<html>`. Every hidden-before-reveal style lives under `.sw-motion`:
```css
.sw-motion [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity var(--d-page) var(--ease-out), transform var(--d-page) var(--ease-out); }
.sw-motion [data-reveal].is-in { opacity: 1; transform: none; }
```
Without `sw-motion`, everything is visible immediately.

## Photo grade

Shared filter: `saturate(.85) contrast(1.08) sepia(.06) brightness(.92)`. Per-photo `object-position` set via inline style or class.