# Design system — pinestraw-C

## Tokens

```css
:root {
  /* palette */
  --c-deep: #1B3A2E;
  --c-cream: #F5F0E6;
  --c-clay: #B45A2C;
  --c-clay-ink: #8A3F18;
  --c-bark: #3D2B1F;
  --c-spring: #6B8F5E;

  /* type scale */
  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-4: clamp(2.25rem, 1.8rem + 2vw, 3.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

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
  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);

  /* motion */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;

  /* header */
  --header-h: 64px;

  /* radius */
  --r-sm: 2px;
  --r-md: 4px;
  --r-pill: 999px;

  /* photo grade */
  --photo-grade: saturate(0.9) contrast(1.05) sepia(0.12);
}
```

## Tone classes

- `t-deep`: bg `--c-deep`, ink `--c-cream`, muted `rgba(245,240,230,0.7)`, rule `rgba(245,240,230,0.2)`, accent `--c-spring`.
- `t-paper`: bg `--c-cream`, ink `--c-bark`, muted `rgba(61,43,31,0.65)`, rule `rgba(61,43,31,0.15)`, accent `--c-clay`.
- `t-light`: bg `#fff`, ink `--c-bark`, muted `rgba(61,43,31,0.6)`, rule `rgba(61,43,31,0.12)`, accent `--c-clay`.
- `t-accent`: bg `--c-clay`, ink `--c-cream`, muted `rgba(245,240,230,0.8)`, rule `rgba(245,240,230,0.3)`, accent `--c-cream`.

## Components

- Buttons: `.btn` (min-height 48px, padding-inline 1.5rem), `.btn-primary` (bg clay on paper/deep, cream text), `.btn-ghost` (transparent, border currentColor), `.btn-call` (with phone icon).
- Inputs: 48px tall, 2px border, focus outline 3px solid accent offset 3px.
- Cards: `.card` with padding s-5, border-radius r-md, subtle rule top.
- Tags: `.sample-tag` (small caps, fs--1, uppercase tracking, border 1px currentColor, padding-inline s-2).
- Frames: `.frame` with aspect-ratio, overflow hidden, img gets `var(--photo-grade)`.
- Kidney mask: `.kidney-mask` uses SVG clipPath `#kidney-bed`; reused in hero, seasons, area, reviews.

## Focus & forced colors

```css
:focus-visible { outline: 3px solid var(--c-clay); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn-primary { forced-color-adjust: none; }
}
```

## Motion gating

All reveal styles under `.sw-motion [data-reveal]`. Without `.sw-motion` or with reduced motion, content is visible and static.