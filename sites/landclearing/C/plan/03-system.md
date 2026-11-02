# Design System — landclearing-C

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Zilla Slab', serif;
  --ff-text: 'Karla', sans-serif;

  --fs--1: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.95rem, 0.9rem + 0.25vw, 1.0625rem);
  --fs-1: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --fs-2: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  --fs-3: clamp(2rem, 1.5rem + 1.5vw, 2.75rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

  --lh-tight: 1.1;
  --lh-heading: 1.2;
  --lh-body: 1.55;

  --measure: 65ch;
}
```

Headings use `font-family: var(--ff-display); text-wrap: balance; line-height: var(--lh-heading)`.
Body uses `font-family: var(--ff-text); text-wrap: pretty; line-height: var(--lh-body); max-width: var(--measure)`.
Lead paragraph: `font-size: var(--fs-1); font-weight: 450`.
Numbers (prices, hours, phone): `font-variant-numeric: tabular-nums`.

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
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 64px;
  --rail-w: 48px;
}
```

### Tone classes
Each sets background, ink, muted, rule, accent. Components never pick colors themselves.

```css
.t-light  { --bg: #FFFFFF; --ink: #1C1816; --muted: #6B7F8E; --rule: #D8D0C8; --accent: #A0522D; }
.t-paper  { --bg: #F4EDE4; --ink: #1C1816; --muted: #6B7F8E; --rule: #D8D0C8; --accent: #A0522D; }
.t-mid    { --bg: #D8D0C8; --ink: #1C1816; --muted: #4A4540; --rule: #A09890; --accent: #A0522D; }
.t-deep   { --bg: #2B2320; --ink: #F4EDE4; --muted: #A09890; --rule: #4A4540; --accent: #C8A951; }
.t-accent { --bg: #A0522D; --ink: #FFFFFF; --muted: #F4EDE4; --rule: #C8A951; --accent: #F4EDE4; }
```

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
:focus-visible { outline: 3px solid #A0522D; outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Photo grade
```css
img, video[poster] {
  filter: saturate(.85) contrast(1.05) sepia(.1);
}
```

## Components

### Buttons
Primary: `.btn--primary` (bg accent, white text, ≥48px tall). Secondary: `.btn--ghost` (border accent, accent text). Text: `.btn--text` (no bg/border, underline on hover). All have `padding-inline: 1.5rem`, `border-radius: 2px`.

### Sample tag
`.sample-tag { font-size: var(--fs--1); color: var(--signal); text-transform: uppercase; letter-spacing: 0.08em; }`

### Frame
`.frame { position: relative; overflow: hidden; border-radius: 2px; } .frame img { width: 100%; height: 100%; object-fit: cover; }`

### Rail primitive
`.rail-segment { display: flex; align-items: center; gap: var(--s-2); } .rail-post { width: 6px; height: 6px; border-radius: 50%; background: var(--rule); } .rail-line { flex: 1; height: 2px; background: var(--rule); } .rail-segment.is-active .rail-line { background: var(--accent); }`

## Gating
Build adds `sw-js` and `sw-motion` to `<html>`. Hidden-before-reveal styles live under `.sw-motion` only. With JS off or reduced motion, everything is visible and complete.