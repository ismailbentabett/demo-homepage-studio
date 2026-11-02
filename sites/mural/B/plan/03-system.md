# Design System — mural-B

## Tokens

```css
:root {
  /* palette */
  --c-paper: #F4F1EC;
  --c-ink: #1A1A1A;
  --c-cyan: #00838F;
  --c-blush: #DCCFC4;
  --c-deep: #1E252A;
  --c-mute: #6B6560;
  --c-rule: #C8C2BA;

  /* type scale */
  --fs--2: clamp(.75rem, .7rem + .25vw, .8125rem);
  --fs--1: clamp(.8125rem, .78rem + .2vw, .875rem);
  --fs-0: clamp(.9375rem, .9rem + .25vw, 1rem);
  --fs-1: clamp(1.0625rem, 1rem + .35vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + .75vw, 1.75rem);
  --fs-3: clamp(1.625rem, 1.3rem + 1.5vw, 2.5rem);
  --fs-h1: clamp(2.4rem, min(8.5vw, 9svh) + .2rem, 4.75rem);

  /* space */
  --s-1: .25rem; --s-2: .5rem; --s-3: .75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(3rem, 6svh, 5rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 64px;

  /* motion */
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --d-press: 120ms; --d-ui: 200ms; --d-page: 520ms; --d-story: 900ms; --d-stagger: 60ms;

  /* signature */
  --crop-w: 24px; --crop-t: 1.5px;
  --reg-size: 18px;
  --bar-w: 28px;
}
```

## Tone classes

- `t-paper`: bg paper, ink ink, mute mute, rule rule, accent cyan
- `t-light`: same as paper (alias for rhythm variety)
- `t-mid`: bg blush, ink ink, mute #5A5550, rule #B8ADA2, accent cyan
- `t-deep`: bg deep, ink paper, mute #9AA0A6, rule #3A4248, accent cyan
- `t-accent`: bg cyan, ink paper, mute rgba(255,255,255,.7), rule rgba(255,255,255,.3), accent paper

Each tone sets `background`, `color`, `--muted`, `--rule`, `--accent` so components never pick colors.

## Base

- Body: DM Sans, `--fs-0`, line-height 1.55, `text-wrap: pretty`, measure max 68ch.
- Headings: Space Grotesk, weight 600, `text-wrap: balance`. h1 = `--fs-h1`, h2 = `--fs-3`, h3 = `--fs-2`.
- Mono: DM Mono for all dimensions, prices, dates, proof numbers. `font-variant-numeric: tabular-nums`.
- Lead paragraph: `--fs-1`, weight 450 where available.
- Links: underline via `text-decoration-thickness: 1.5px`, offset 3px. Inline links get `padding-block: 12px; margin-block: -12px` for 48px tap target.

## Components

- Buttons: min-height 48px, padding-inline 1.5em. Primary: bg cyan, text paper. Secondary: border cyan, text cyan on paper / text paper on deep. Ghost: text currentColor, underline on hover.
- Inputs: height 48px, border 1.5px rule, focus outline 3px cyan offset 3px.
- Cards: border 1px rule, padding s-5, no shadow. On t-deep: border rule (deep variant).
- Sample tag: inline pill, `--fs--2`, uppercase tracking .08em, border 1px currentColor, padding .15em .5em.
- Frames: aspect-ratio set per slot, overflow hidden, img `object-fit: cover`. Grade: `filter: saturate(.88) contrast(1.04) sepia(.06) hue-rotate(-2deg)`.
- Crop marks: four L-shaped pseudo-elements at corners, `--crop-w` long, `--crop-t` thick, color currentColor.
- Registration target: 18px circle with crosshair, positioned top-right inside section padding.
- Color bar: absolute left, width `--bar-w`, full height, contains swatch chips stacked vertically.

## Motion gating

Build adds `sw-js` and `sw-motion` to `<html>`. All hidden-before-reveal styles live under `.sw-motion`. Without it, everything is visible and complete.

## Focus

`:focus-visible { outline: 3px solid var(--c-cyan); outline-offset: 3px }`. Forced colors: buttons get `border: 2px solid CanvasText`.

## Photo grade

One filter for every photo: `saturate(.88) contrast(1.04) sepia(.06) hue-rotate(-2deg)`. Cool-leaning to match proof paper. Per-photo `object-position` noted in media plan.