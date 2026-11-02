# Design System — septic-A

## Tokens

### Type scale (fluid clamp)
```css
:root {
  --ff-display: 'Bitter', serif;
  --ff-text: 'Public Sans', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* mono labels */
  --fs-0:  clamp(0.9375rem, 0.875rem + 0.3vw, 1rem);     /* body */
  --fs-1:  clamp(1.0625rem, 0.95rem + 0.5vw, 1.25rem);   /* lead */
  --fs-2:  clamp(1.375rem, 1.1rem + 1.2vw, 2rem);        /* h3 */
  --fs-3:  clamp(1.75rem, 1.3rem + 2vw, 2.75rem);        /* h2 */
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);
}
```
Headings: `text-wrap: balance`. Body: `text-wrap: pretty`, measure 60–72ch. Lead paragraph uses `--fs-1` with `font-variation-settings: "wght" 450`.

### Space
```css
:root {
  --s-1: 0.25rem;  --s-2: 0.5rem;  --s-3: 0.75rem;  --s-4: 1rem;
  --s-5: 1.5rem;   --s-6: 2rem;    --s-7: 3rem;     --s-8: 4rem;
  --s-9: 6rem;
  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
}
```

### Tone classes
| Class | bg | ink | muted | rule | accent |
|---|---|---|---|---|---|
| `.t-light` | `#F3EDE3` | `#1C1410` | `#5C5347` | `#D6CFC3` | `#B4471F` |
| `.t-paper` | `#EDE6DA` | `#1C1410` | `#5C5347` | `#D6CFC3` | `#B4471F| `.t-mid`   | `#3D2E22` | `#F3EDE3` | `#A89F91` | `#5C4A3A` | `#D4A017` |
| `.t-deep`  | `#1C1410` | `#F3EDE3` | `#A89F91` | `#3D2E22` | `#D4A017` |
| `.t-accent`| `#D4A017` | `#1C1410` | `#3D2E22` | `#B4471F` | `#1C1410` |

Each tone sets `background`, `color`, `--muted`, `--rule`, `--accent` so components never pick colors themselves.

### Motion tokens
```css
:root {
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io:  cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui:    200ms;
  --dur-page:  520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;
}
```
No bounce, no elastic.

### Gating
Build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion` only. Content is fully readable with JS off and with `prefers-reduced-motion: reduce`.

### Focus
```css
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  button, a.btn { border: 2px solid ButtonText; }
}
```

### Components
- Buttons: primary (`.btn`), secondary (`.btn--secondary`), text (`.btn--text`). Min-height 48px, padding ≥ 12px 24px.
- Inputs: 48px tall, 3px focus ring, `--rule` border.
- Cards: `.card` with `--rule` border, 1px, radius 2px. Hover: hairline `scaleX` from left.
- Tags: `.tag` for "Sample" label, mono type, uppercase, 1px border.
- Rules: `.rule` horizontal, 1px solid `var(--rule)`.
- Frames: `.frame` with aspect-ratio container, shared photo grade.
- Sticky mobile bar: `.mobilebar` fixed bottom, 64px tall, two buttons (Call + Get price).
- Header: `.header` 64px, logo left, nav right (desktop), hamburger (mobile).

### Photo grade
```css
.frame img {
  filter: saturate(.85) contrast(1.08) sepia(.12);
}
```
Tuned to warm red-clay earth tones. Per-photo `object-position` set in media plan.