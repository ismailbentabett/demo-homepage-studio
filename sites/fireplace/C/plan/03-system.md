# Design system — fireplace-C

## Tokens

```css
:root {
  /* palette */
  --ink: #1c1816;
  --paper: #f5f1eb;
  --maple: #7a2e24;
  --maple-ink: #5a1f18;
  --lake: #2b4a5e;
  --deep: #1c1816;
  --ochre: #c48a2e;
  --muted: #6b6260;
  --rule: #d6cec6;

  /* type scale (fluid) */
  --fs--1: clamp(0.8rem, 0.78rem + 0.1vw, 0.875rem);
  --fs-0: clamp(0.95rem, 0.92rem + 0.15vw, 1.0625rem);
  --fs-1: clamp(1.1rem, 1rem + 0.3vw, 1.3rem);
  --fs-2: clamp(1.4rem, 1.2rem + 0.6vw, 1.85rem);
  --fs-3: clamp(1.9rem, 1.5rem + 1.2vw, 2.8rem);
  --fs-4: clamp(2.4rem, 1.8rem + 1.8vw, 3.6rem);
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
  --sec-y: clamp(4rem, 6vw, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;

  /* motion */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;

  /* layout */
  --measure: 68ch;
  --radius: 2px;
  --rule-w: 1.5px;
}
```

## Tone classes

Each sets background, ink, muted ink, rule color and accent. Components never pick colors themselves.

- `.t-paper` — bg `--paper`, ink `--ink`, muted `--muted`, rule `--rule`, accent `--maple`.
- `.t-light` — bg `#fff`, ink `--ink`, muted `--muted`, rule `--rule`, accent `--maple`.
- `.t-mid` — bg `#e8e0d8`, ink `--ink`, muted `--muted`, rule `--rule`, accent `--maple-ink`.
- `.t-deep` — bg `--deep`, ink `--paper`, muted `#b0a8a0`, rule `#3a3430`, accent `--ochre`.
- `.t-accent` — bg `--maple`, ink `--paper`, muted `#e0c8c4`, rule `#9a4a40`, accent `--ochre`.

## Base

- Body: `font-family: 'DM Sans', sans-serif; font-size: var(--fs-0); line-height: 1.6; color: var(--ink); text-wrap: pretty;`
- Headings: `font-family: 'Sora', sans-serif; font-weight: 600; line-height: 1.1; text-wrap: balance;`
- h1: `font-size: var(--fs-h1); letter-spacing: -0.02em;`
- Lead paragraph: `font-size: var(--fs-1); max-width: var(--measure);`
- Measure: `max-width: var(--measure)` on prose containers.
- Numbers: `font-variant-numeric: tabular-nums` on prices, hours, phone, counters.

## Components

- **Buttons:** `.btn` min-height 48px, padding-inline 1.5rem, radius `var(--radius)`. `.btn-primary` bg `--maple`, color `--paper`. `.btn-ghost` border `1.5px solid currentColor`. `.btn-call` includes icon slot.
- **Inputs:** height 48px, border `var(--rule-w) solid var(--rule)`, radius `var(--radius)`, focus outline `3px solid var(--maple)` offset 3px.
- **Cards:** padding `var(--s-5)`, border `var(--rule-w) solid var(--rule)`, radius `var(--radius)`.
- **Tags:** `.sample-tag` small caps, `--fs--1`, border, padding-inline `var(--s-2)`, radius `var(--radius)`.
- **Frames:** `.frame` aspect-ratio container, overflow hidden, radius `var(--radius)`. Photo grade applied globally.
- **Rules:** `border-block-start: var(--rule-w) solid var(--rule)` as section dividers.
- **Season rail:** `.season-rail` horizontal flex, gap `var(--s-3)`, overflow-x auto on mobile, sticky on desktop. Active month gets `--maple` underline + bold.
- **Watermark numeral:** `.month-mark` positioned absolute behind kicker, `--fs-4`, opacity 0.08, pointer-events none.

## Photo grade

Applied to every `img` and video poster:
```css
img, video[poster] {
  filter: saturate(0.85) contrast(1.05) sepia(0.1);
}
```

## Focus

```css
:focus-visible {
  outline: 3px solid var(--maple);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

## Gating

Build adds `sw-js` and `sw-motion` to `<html>`. Hidden-before-reveal styles live under `.sw-motion` only:
```css
.sw-motion [data-reveal] { opacity: 0; transform: translateY(24px); }
.sw-motion [data-reveal].is-in { opacity: 1; transform: none; transition: opacity var(--dur-page) var(--ease-out), transform var(--dur-page) var(--ease-out); }
.sw-motion [data-reveal="clip"] img { clip-path: inset(0 0 100% 0); }
.sw-motion [data-reveal="clip"].is-in img { clip-path: inset(0); transition: clip-path var(--dur-page) var(--ease-out); }
```

Without `sw-motion`, everything is visible and complete.