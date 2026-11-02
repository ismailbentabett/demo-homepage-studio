# Design System — irrigation-B (Catch Cup Irrigation)

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Syne', sans-serif;
  --ff-text: 'Outfit', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-body: 1.55;

  --measure: 65ch;
}
```

Headings use `text-wrap: balance`; body uses `text-wrap: pretty`. Lead paragraph: `--fs-1`, weight 450 where available.

### Space
```css
:root {
  --s-1: 0.25rem;   /* 4px */
  --s-2: 0.5rem;    /* 8px */
  --s-3: 0.75rem;   /* 12px */
  --s-4: 1rem;      /* 16px */
  --s-5: 1.5rem;    /* 24px */
  --s-6: 2rem;      /* 32px */
  --s-7: 3rem;      /* 48px */
  --s-8: 4rem;      /* 64px */
  --s-9: 6rem;      /* 96px */

  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: var(--s-5);
  --header-h: 64px;
}
```

### Palette & tone classes
```css
:root {
  --ink: #1C1F23;
  --paper: #F4F1EC;
  --gauge: #1B6B8A;
  --gauge-deep: #0E3D52;
  --fix: #C4503A;
  --muted: #6B7280;
  --rule: #D1CDC6;
}

.t-light { background: var(--paper); color: var(--ink); --accent: var(--gauge); --rule-color: var(--rule); }
.t-paper { background: var(--paper); color: var(--ink); --accent: var(--gauge); --rule-color: var(--rule); }
.t-mid { background: #E8E4DD; color: var(--ink); --accent: var(--gauge); --rule-color: var(--rule); }
.t-deep { background: var(--gauge-deep); color: var(--paper); --accent: #7CC4DE; --rule-color: rgba(255,255,255,0.18); }
.t-accent { background: var(--gauge); color: var(--paper); --accent: var(--paper); --rule-color: rgba(255,255,255,0.25); }
```

Each tone class sets background, ink, accent, and rule color so components never pick colors themselves.

### Motion tokens
```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --stagger: 60ms;
}
```

### Focus
```css
:focus-visible { outline: 3px solid var(--gauge); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Photo grade
```css
img, video[poster] { filter: saturate(0.85) contrast(1.05) sepia(0.04); }
```

## Components

### Buttons
- Primary: `.btn.btn-primary` — bg `var(--gauge)`, text white, min-height 48px, padding-inline 24px.
- Secondary: `.btn.btn-ghost` — transparent bg, border 1.5px `var(--gauge)`, text `var(--gauge)`.
- Call: `.btn.btn-call` — includes phone icon.
- All buttons: radius 2px, press `scale(0.97)` 120ms.

### Inputs
- Height 48px, border 1.5px `var(--rule)`, radius 2px, focus border `var(--gauge)`.

### Cards
- `.card` — bg white, border 1px `var(--rule)`, radius 2px, padding `var(--s-5)`.

### Sample tag
- `.sample-tag` — inline pill, `--fs--1`, uppercase tracking, border 1px `var(--rule)`, padding 2px 8px.

### Frames
- `.frame` — aspect-ratio container, overflow hidden, radius 2px.
- `.break` — full-bleed photo/video section, no padding.

### Coverage grid primitive
- `.cup-grid` — 4×4 CSS grid of SVG cup outlines. Each `.cup` has a fill rect whose height is driven by `--sw-p` per cup. Static fallback: all cups shown at 60% fill.

### Audit row primitive
- `.audit-row` — mono line number, status chip (FOUND / PRICED / FIXED), description slot, right-aligned price or reading. Wipes in on scroll via clip-path.

## Gating
The build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion` only. With JS off or reduced motion, all content is visible and complete.