# Design system — cannabis-B

## Tokens

### Type scale
```css
--ff-display: 'Space Grotesk', sans-serif;
--ff-text: 'Public Sans', sans-serif;
--ff-mono: 'DM Mono', monospace;

--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* captions, mono labels */
--fs-0: clamp(0.9375rem, 0.875rem + 0.3vw, 1rem);      /* body */
--fs-1: clamp(1.0625rem, 0.95rem + 0.5vw, 1.25rem);    /* lead, card titles */
--fs-2: clamp(1.25rem, 1rem + 1vw, 1.625rem);          /* h3 */
--fs-3: clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem);        /* h2 */
--fs-h1: clamp(2.4rem, min(8.5vw, 9svh) + 0.1rem, 4.75rem); /* h1 */

--lh-body: 1.55;
--lh-heading: 1.1;
--measure: 65ch;
```

Headings: `text-wrap: balance`. Body: `text-wrap: pretty`. Lead paragraph: `font-variation-settings: "opsz" 24` where available, weight 450.

### Space
```css
--s-1: 0.25rem;  --s-2: 0.5rem;  --s-3: 0.75rem;  --s-4: 1rem;
--s-5: 1.5rem;   --s-6: 2rem;    --s-7: 3rem;     --s-8: 4rem;
--s-9: 6rem;

--sec-y: clamp(3rem, 6svh, 5rem);
--sec-x: clamp(1rem, 4vw, 3rem);
```

### Tone classes
Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`:
- `.t-light`  → paper / ink / muted / rule / accent
- `.t-paper`  → paper / ink / muted / rule / signal
- `.t-mid`    → #E8E6E1 / ink / muted / #C8C5BE / accent
- `.t-deep`   → deep / paper / #A8ABB3 / #3A3D42 / accent
- `.t-accent` → accent / #FFFFFF / rgba(255,255,255,0.8) / rgba(255,255,255,0.3) / #FFFFFF

### Motion tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

### Gating
Build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion` only.

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .tag, input, select, textarea { border: 2px solid ButtonText; }
}
```

### Components
- Buttons: `.btn-primary` (accent bg, white text, ≥48px tall), `.btn-secondary` (signal bg, white text), `.btn-text` (ink, underline on hover). Min tap target 48×48.
- Inputs: 48px tall, 1px rule border, focus uses accent outline.
- Cards: `.card` with 1px rule border, padding s-5, radius 4px.
- Tags: `.tag` for "Sample" label — signal bg, white text, mono font, uppercase, tracking-wide.
- Rules: `.rule` — 1px solid var(--rule).
- Frames: `.frame` with aspect-ratio, overflow hidden, photo grade filter.
- Sticky mobile bar: fixed bottom, z-50, two buttons (Call + Pre-order), ≥56px tall.
- Header: sticky top, z-40, logo left, nav right (desktop), hamburger (mobile).

### Photo grade
```css
.photo-grade { filter: saturate(.9) contrast(1.05) brightness(1.02); }
```
Per-photo `object-position` set in CSS via `[data-photo="key"]`.