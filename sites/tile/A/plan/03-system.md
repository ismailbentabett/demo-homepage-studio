# Design System — tile-A

## Type scale

```css
:root {
  --ff-display: 'Space Grotesk', sans-serif;
  --ff-text: 'DM Sans', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-4: clamp(2.25rem, 1.8rem + 2vw, 3.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-body: 1.55;

  --measure: 65ch;
}
```

Headings: `font-family: var(--ff-display); text-wrap: balance; font-variant-numeric: tabular-nums;`
Body: `font-family: var(--ff-text); text-wrap: pretty; line-height: var(--lh-body);`
Mono/labels: `font-family: var(--ff-mono); font-variant-numeric: tabular-nums;`
Lead paragraph: `font-size: var(--fs-1); font-weight: 450; font-variation-settings: "opsz" 24;`

## Space

```css
:root {
  --s-1: 0.25rem;   /* 4 */
  --s-2: 0.5rem;    /* 8 */
  --s-3: 0.75rem;   /* 12 */
  --s-4: 1rem;      /* 16 */
  --s-5: 1.5rem;    /* 24 */
  --s-6: 2rem;      /* 32 */
  --s-7: 3rem;      /* 48 */
  --s-8: 4rem;      /* 64 */
  --s-9: 6rem;      /* 96 */

  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --gutter: clamp(1rem, 2vw, 2rem);
  --header-h: 4rem;
}
```

## Tone classes

Each sets background, ink, muted, rule, accent. Components never pick colors.

```css
.t-deep   { --bg: #0F1418; --ink: #EDEAE6; --muted: #A8A29E; --rule: #2A2F35; --accent: #D45A1E; }
.t-paper  { --bg: #EDEAE6; --ink: #0F1418; --muted: #57534E; --rule: #D6D3CD; --accent: #9E3E0F; }
.t-light  { --bg: #F8F7F5; --ink: #0F1418; --muted: #57534E; --rule: #E7E5E0; --accent: #9E3E0F; }
.t-accent { --bg: #D45A1E; --ink: #FFFFFF; --muted: rgba(255,255,255,.75); --rule: rgba(255,255,255,.3); --accent: #FFFFFF; }
.t-mid    { --bg: #2A2F35; --ink: #EDEAE6; --muted: #A8A29E; --rule: #3F444B; --accent: #D45A1E; }
```

## Motion tokens

```css
:root {
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;
}
```

Gating: `.sw-motion` on `<html>` enables reveals. Without it, everything is visible. Hidden-before-reveal styles live under `.sw-motion` only.

## Focus

```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

## Components

- Buttons: primary (accent bg, white text), secondary (transparent, accent border), ghost (text only). Min-height 48px. Padding-block 12px for inline links.
- Cards: `.card` with bg, padding, radius 2px. No shadow; border or tone change for hierarchy.
- Tags: `.sample-tag` small mono uppercase, border, padding 2px 6px.
- Frames: `.frame` with aspect-ratio, overflow hidden, grade filter.
- Rules: 1.5px solid var(--rule). Cross-section dividers use the five layer colors as stacked bars.
- Layer ruler: fixed left column on desktop, horizontal bar on mobile. Five bands with data-fill attribute.

## Photo grade

```css
img, video, .frame img { filter: saturate(.85) contrast(1.08) sepia(.06); }
```

Per-photo object-position set in plan/05-media.md.