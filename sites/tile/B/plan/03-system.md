# Design System — tile-B (Feeler Gauge Tile Works)

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Outfit', sans-serif;
  --ff-text: 'IBM Plex Sans', sans-serif;
  --ff-mono: 'IBM Plex Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-4: clamp(2.25rem, 1.8rem + 2vw, 3.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-body: 1.55;

  --measure: 65ch;
}
```

Headings: `font-family: var(--ff-display); text-wrap: balance; line-height: var(--lh-tight);`
Body: `font-family: var(--ff-text); text-wrap: pretty; line-height: var(--lh-body); max-width: var(--measure);`
Mono/readouts: `font-family: var(--ff-mono); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;`
Lead paragraph: `font-size: var(--fs-1); font-weight: 450;`

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

  --sec-y: clamp(4rem, 6vw + 2rem, 8rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --gutter: 0.0625rem; /* 1/16" grout line ≈ 1px at 1x */
  --grid-gap: clamp(0.25rem, 0.5vw, 0.5rem);
}
```

### Palette & tone classes
```css
:root {
  --ink: #1C1F23;
  --paper: #F4F2EF;
  --concrete: #E2DFDA;
  --deep: #1C1F23;
  --accent: #2D8C4E;
  --signal: #C74B1E;
  --muted: #6B7280;
  --rule: rgba(28, 31, 35, 0.12);
}

.t-light { background: var(--paper); color: var(--ink); --bg: var(--paper); --fg: var(--ink); --fg-muted: var(--muted); --rule: var(--rule); --accent-fg: var(--accent); }
.t-concrete { background: var(--concrete); color: var(--ink); --bg: var(--concrete); --fg: var(--ink); --fg-muted: var(--muted); --rule: rgba(28,31,35,0.15); --accent-fg: var(--accent); }
.t-deep { background: var(--deep); color: var(--paper); --bg: var(--deep); --fg: var(--paper); --fg-muted: rgba(244,242,239,0.7); --rule: rgba(244,242,239,0.15); --accent-fg: var(--accent); }
.t-accent { background: var(--accent); color: #fff; --bg: var(--accent); --fg: #fff; --fg-muted: rgba(255,255,255,0.8); --rule: rgba(255,255,255,0.2); --accent-fg: #fff; }
```

Each section gets one tone class. Components inherit via `var(--fg)`, `var(--bg)`, etc.

### Motion tokens
```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;
}
```

### Focus & forced colors
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
}
```

### Photo grade
```css
img, video, .frame img { filter: saturate(0.85) contrast(1.05) sepia(0.04) hue-rotate(-2deg); }
```

## Components

### Buttons
Min height 48px. Primary: `background: var(--accent); color: #fff;`. Secondary: `border: 1.5px solid var(--fg); color: var(--fg);`. Ghost: `color: var(--fg); text-decoration: underline; text-underline-offset: 4px;`. All: `padding-inline: 1.5rem; border-radius: 2px; transition: transform var(--dur-press) var(--ease-out);`. `:active { transform: scale(0.97); }`.

### Gauge readout tag
```html
<span class="gauge">TARGET <b>1/16"</b> · MEASURED <b>1/32"</b> · TOOL straightedge</span>
```
Mono font, `--fs--1`, uppercase tracking, border-left accent bar 2px. Appears inline or as a card footer.

### Cards
Background `var(--bg)`, padding `var(--s-5)`, border `1px solid var(--rule)`, radius 2px. No shadow.

### Frames
Aspect ratio set per slot. Grade applied. Caption below in `--fs--1` muted.

### Sample tag
```html
<span class="sample-tag">Sample</span>
```
Small caps, mono, `--fs--1`, border 1px solid currentColor, padding 2px 6px, radius 2px. Always visible next to reviews, prices, license, rating.

### Header
Sticky, 64px tall on mobile, 80px desktop. Background transitions from transparent to `var(--paper)` on scroll. Logo left, nav right, CTA far right. Mobile: hamburger opens full-screen menu.

### Mobile bar
Sticky bottom under 900px. Two buttons: Call (tel:) and Price it (#contact). Hides on scroll down and when #contact is visible.

### Form steps
4 steps with progress indicator. Each step validates before next. Thank-you state is honest demo message.