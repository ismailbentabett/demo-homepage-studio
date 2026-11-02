# Design System — consulting-B (Plain Figures Business Advisors)

## Tokens

### Type scale
```css
:root {
  --ff-display: 'DM Sans', sans-serif;
  --ff-text: 'DM Sans', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-4: clamp(2.25rem, 1.8rem + 2vw, 3.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

  --lh-body: 1.55;
  --lh-heading: 1.1;
  --measure: 65ch;
}
```

Headings: `text-wrap: balance`. Body: `text-wrap: pretty`. Numbers: `font-variant-numeric: tabular-nums`.
Lead paragraph: `font-size: var(--fs-1); font-weight: 450; font-variation-settings: "opsz" 24`.

### Space
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
  --header-h: 64px;
  --grid-cell: 24px;
}
```

### Palette & tone classes
```css
:root {
  --c-paper: #F6F4F0;
  --c-ink: #1A1A1A;
  --c-grid: #D8D4CC;
  --c-deep: #1E2228;
  --c-deep-ink: #F6F4F0;
  --c-green: #2D6A4F;
  --c-orange: #B44A1E;
  --c-muted: #6B6560;
  --c-rule: #C8C4BC;
}

.t-light { background: var(--c-paper); color: var(--c-ink); --ink: var(--c-ink); --muted: var(--c-muted); --rule: var(--c-rule); --accent: var(--c-green); }
.t-paper { background: var(--c-paper); color: var(--c-ink); --ink: var(--c-ink); --muted: var(--c-muted); --rule: var(--c-rule); --accent: var(--c-green); }
.t-deep { background: var(--c-deep); color: var(--c-deep-ink); --ink: var(--c-deep-ink); --muted: #A8A4A0; --rule: #3A3E44; --accent: #5FB88A; }
.t-accent { background: var(--c-green); color: #fff; --ink: #fff; --muted: rgba(255,255,255,.7); --rule: rgba(255,255,255,.3); --accent: #F6F4F0; }
```

Grid background on `.worksheet-bg`:
```css
.worksheet-bg {
  background-image:
    linear-gradient(var(--c-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--c-grid) 1px, transparent 1px);
  background-size: var(--grid-cell) var(--grid-cell);
  background-position: -1px -1px;
}
.t-deep .worksheet-bg {
  background-image:
    linear-gradient(var(--rule) 1px, transparent 1px),
    linear-gradient(90deg, var(--rule) 1px, transparent 1px);
}
```

### Motion tokens
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

### Focus
```css
:focus-visible { outline: 3px solid var(--c-green); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Photo grade
```css
img, video { filter: saturate(.85) contrast(1.05) sepia(.08); }
```

## Components

### Buttons
Min height 48px. Primary: green bg, white text. Secondary: outlined. Ghost: text only with underline hover.
```css
.btn { display: inline-flex; align-items: center; gap: var(--s-2); min-height: 48px; padding: var(--s-3) var(--s-5); font-family: var(--ff-text); font-weight: 600; font-size: var(--fs-0); text-decoration: none; border-radius: 2px; transition: transform var(--dur-press) var(--ease-out); }
.btn:active { transform: scale(.97); }
.btn-primary { background: var(--c-green); color: #fff; }
.btn-secondary { border: 1.5px solid var(--ink); color: var(--ink); }
.btn-ghost { color: var(--ink); padding-inline: 0; }
```

### Cell reference margin
```css
.cell-ref { font-family: var(--ff-mono); font-size: 0.75rem; color: var(--muted); writing-mode: vertical-lr; letter-spacing: 0.05em; }
```

### Sample tag
```css
.sample-tag { font-family: var(--ff-mono); font-size: var(--fs--1); text-transform: uppercase; letter-spacing: 0.08em; padding: 2px 6px; border: 1px solid var(--muted); border-radius: 2px; }
```

### Tool panel
```css
.tool-panel { border: 1.5px solid var(--rule); padding: var(--s-5); background: var(--c-paper); }
.tool-input { width: 100%; min-height: 48px; padding: var(--s-3); font-family: var(--ff-mono); font-size: var(--fs-0); border: 1px solid var(--rule); background: #fff; }
.tool-result { font-family: var(--ff-mono); font-size: var(--fs-1); padding: var(--s-4); border-left: 3px solid var(--accent); margin-top: var(--s-4); }
```

### Runway bar
```css
.runway-bar { height: 12px; background: var(--c-grid); border-radius: 2px; overflow: hidden; }
.runway-fill { height: 100%; background: var(--c-green); transition: width var(--dur-story) var(--ease-out); }
.runway-fill.is-gap { background: var(--c-orange); }
```