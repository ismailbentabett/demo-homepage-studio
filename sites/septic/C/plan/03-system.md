# Design System — septic-C

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Young Serif', serif;
  --ff-text: 'Work Sans', sans-serif;

  --fs--1: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --fs-0: clamp(1rem, 0.92rem + 0.4vw, 1.125rem);
  --fs-1: clamp(1.125rem, 1rem + 0.6vw, 1.375rem);
  --fs-2: clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
  --fs-3: clamp(2rem, 1.5rem + 2vw, 3rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);
}
```

Headings: `font-family: var(--ff-display); text-wrap: balance;`
Body: `font-family: var(--ff-text); text-wrap: pretty; line-height: 1.6;`
Lead paragraph: `font-size: var(--fs-1); font-weight: 450;`

### Space
```css
:root {
  --s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;
}
```

### Tone classes
```css
.t-light { --bg: #F2F0E9; --ink: #1A3328; --muted: #5C4A3A; --rule: #D8D4CA; --accent: #B8432F; }
.t-paper { --bg: #F2F0E9; --ink: #1A3328; --muted: #5C4A3A; --rule: #D8D4CA; --accent: #8C3222; }
.t-mid   { --bg: #D8D4CA; --ink: #1A3328; --muted: #3A3028; --rule: #B8B4AA; --accent: #8C3222; }
.t-deep  { --bg: #1A3328; --ink: #F2F0E9; --muted: #B8C4BC; --rule: #3A5348; --accent: #B8432F; }
.t-accent { --bg: #B8432F; --ink: #F2F0E9; --muted: #F2D8D0; --rule: #D4634F; --accent: #F2F0E9; }
```

Each tone sets `background`, `color`, `--muted`, `--rule`, `--accent`. Components inherit, never pick colors.

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
:focus-visible { outline: 3px solid #B8432F; outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Photo grade
```css
img, video { filter: saturate(.85) contrast(1.05) sepia(.08); }
```

### Components
- Buttons: `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-call`. Min-height 48px. Padding-block 12px for inline links.
- Cards: `.card` with `--bg`, border-radius 2px, padding `var(--s-5)`.
- Sample tag: `.sample-tag` small caps, uppercase, `--muted` color, 1px border.
- Frame: `.frame` with aspect-ratio container, overflow hidden, grade applied.
- Almanac strip: `.almanac` horizontal bar, `.almanac__bar` per month, `.is-active` fills with accent.
- Map panel: `.map-panel` SVG container, stroke-dashoffset animation under `.sw-motion`.