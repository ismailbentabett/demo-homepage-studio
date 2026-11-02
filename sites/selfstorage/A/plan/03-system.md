# Design system — selfstorage-A (Wide Aisle Storage)

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Bebas Neue', sans-serif;
  --ff-text: 'DM Sans', sans-serif;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* captions, tags */
  --fs-0:  clamp(0.9rem, 0.85rem + 0.3vw, 1rem);         /* body */
  --fs-1:  clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem);     /* lead, h3 */
  --fs-2:  clamp(1.3rem, 1.1rem + 0.8vw, 1.75rem);       /* h2 */
  --fs-3:  clamp(1.8rem, 1.4rem + 1.5vw, 2.5rem);        /* section titles */
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* hero h1 */

  --lh-tight: 1.05;
  --lh-body: 1.55;
  --measure: 65ch;
}
```

Display headings use `--ff-display`, uppercase, letter-spacing `0.04em`. Body uses `--ff-text` with `text-wrap: pretty`; headings use `text-wrap: balance`. Numbers use `font-variant-numeric: tabular-nums`.

### Space
```css
:root {
  --s-1: 0.25rem;  --s-2: 0.5rem;   --s-3: 0.75rem;  --s-4: 1rem;
  --s-5: 1.5rem;   --s-6: 2rem;     --s-7: 3rem;     --s-8: 4rem;
  --s-9: 6rem;

  --sec-y: clamp(3rem, 6svh, 5rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 64px;
}
```

### Tone classes
Each tone sets background, ink, muted, rule and accent so components never pick colors.

| Class | bg | ink | muted | rule | accent | Use |
|---|---|---|---|---|---|---|
| `t-light` | #f5f3ef | #1a1a1a | #555555 | #d6d2cb | #2d6da8 | default page tone |
| `t-paper` | #eae7e0 | #1a1a1a | #555555 | #c8c4bc | #2d6da8 | alternate light band |
| `t-mid`   | #d6d2cb | #1a1a1a | #444444 | #bbb7af | #1b4a75 | neutral divider bands |
| `t-deep`  | #1c2b3a | #f5f3ef | #b8c4d0 | #3a4f62 | #6aaad8 | dark band (#gate) |
| `t-accent`| #2d6da8 | #ffffff | #d0e0f0 | #1b4a75 | #ffffff | CTA band, signal moments |

### Motion tokens
```css
:root {
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-io: cubic-bezier(.77, 0, .175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;
}
```

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

## Components

### Buttons
- `.btn`: min-height 48px, padding 0.75em 1.5em, font-weight 600, radius 2px.
- `.btn-primary`: bg accent, text white. Hover: darken 8%. Press: scale(.97).
- `.btn-ghost`: transparent bg, accent border 1.5px, accent text. Hover: fill accent at 8%.
- `.btn-call`: includes phone icon, same sizing.

### Tags
- `.sample-tag`: inline, `--fs--1`, uppercase, letter-spacing 0.06em, border 1px solid currentColor, padding 0.15em 0.5em, radius 2px. Always visible next to sample data.

### Frames
- `.frame`: aspect-ratio set per slot, overflow hidden, radius 2px. Photo grade applied to img inside.
- Photo grade: `filter: saturate(.88) contrast(1.04) sepia(.06)` — warm Florida stucco feel.

### Door signature
- `.door-number`: `--ff-display`, `--fs-3`, uppercase, letter-spacing 0.06em, color accent (or paper on deep). Positioned top-left of section header.
- `.door-track`: 1.5px rule under the number, width 3rem, color accent.
- Under `.sw-motion`: section content starts `clip-path: inset(0 0 100% 0)` and reveals to `inset(0)` over `--dur-page` when `.is-in` is added.

### Header
- Sticky, height `--header-h`. Logo left, nav center (desktop), call button right. Mobile: hamburger + mobile bar.
- `.is-scrolled` adds subtle shadow and reduces logo size.

### Mobile bar
- `[data-mobilebar]`: sticky bottom under 900px. Two buttons: Call and Hold your unit. Hides on scroll down and when #contact is visible.

## Gating
The build injects `sw-js` and `sw-motion` on `<html>` before first paint. All reveal animations live under `.sw-motion` only. Without it, every section is fully visible and the door numbers are static wayfinding marks.