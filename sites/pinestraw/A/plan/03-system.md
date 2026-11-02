# Design System — pinestraw-A

## Tokens

### Type scale (fluid clamp)
```css
:root {
  --ff-display: 'Antonio', sans-serif;
  --ff-text: 'DM Sans', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* captions, labels */
  --fs-0:  clamp(0.875rem, 0.8rem + 0.35vw, 1rem);       /* body */
  --fs-1:  clamp(1rem, 0.9rem + 0.5vw, 1.25rem);         /* lead, status */
  --fs-2:  clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);     /* h3, numbers */
  --fs-3:  clamp(1.75rem, 1.4rem + 1.5vw, 2.75rem);      /* h2 */
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.5rem); /* h1, condensed can go taller */
}
```
Headings: `font-family: var(--ff-display); text-transform: uppercase; letter-spacing: 0.02em; text-wrap: balance;`
Body: `font-family: var(--ff-text); font-variation-settings: "opsz" 14; text-wrap: pretty; max-width: 68ch;`
Lead: `font-size: var(--fs-1); font-weight: 450; font-variation-settings: "opsz" 24;`
Mono (labels, counts): `font-family: var(--ff-mono); font-variant-numeric: tabular-nums;`

### Space
```css
:root {
  --s-1: 0.25rem;  --s-2: 0.5rem;  --s-3: 0.75rem;  --s-4: 1rem;
  --s-5: 1.5rem;   --s-6: 2rem;    --s-7: 3rem;     --s-8: 4rem;
  --s-9: 6rem;
  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 5vw, 4rem);
  --header-h: 64px;
}
```

### Tone classes
Each sets background, ink, muted, rule and accent. Components never pick colors themselves.
```css
.t-deep   { --bg: #1A1410; --ink: #E8DDD0; --muted: #9A8E82; --rule: #3D322A; --accent: #C87A3A; --signal: #D4828A; }
.t-paper  { --bg: #F2EDE6; --ink: #1A1410; --muted: #5C5248; --rule: #D6CCC0; --accent: #A85E28; --signal: #B8606A; }
.t-mid    { --bg: #3D322A; --ink: #E8DDD0; --muted: #B0A496; --rule: #5A4E44; --accent: #C87A3A; --signal: #D4828A; }
.t-accent { --bg: #C87A3A; --ink: #1A1410; --muted: #3D2A1A; --rule: #A85E28; --accent: #1A1410; --signal: #1A1410; }
```

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

### Gating
Build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion` only. Without it, everything is visible and complete.

### Focus
```css
:focus-visible { outline: 3px solid var(--signal); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Photo grade
One shared filter for every photo:
```css
img, video { filter: saturate(.82) contrast(1.08) sepia(.12) brightness(.94); }
```
Tuned for wet bark warmth. Per-photo `object-position` set in media plan.

## Components
- Buttons: primary (accent bg, deep ink), secondary (outline), ghost (text-only). Min-height 48px. Padding ≥ 12px block.
- Inputs: 48px tall, 1.5px rule border, focus uses signal outline.
- Cards: no shadow; 1.5px rule border in `var(--rule)`; radius 2px everywhere.
- Tags: `.sample-tag` uses mono type, uppercase, 1px border, accent color.
- Frames: aspect-ratio container with grade applied to img.
- Rules: 1.5px solid `var(--rule)`; never hairline.
- Header: 64px fixed, transparent → deep on scroll, logo left, nav right, CTA always visible.
- Mobile bar: sticky bottom under 900px, call + price-it, hides on scroll-down and when #contact visible.

## Bed-line primitive
SVG path in left margin (48px wide desktop, full-width top rail mobile). Stroke: `var(--signal)`, 2px, round cap. Notches are 12px horizontal cuts at each step. Bed shapes (strip, kidney, tree ring) are closed paths branching off the main line. Drawn via `stroke-dasharray` / `stroke-dashoffset` driven by `--sw-p` in intro; static full-draw without motion.