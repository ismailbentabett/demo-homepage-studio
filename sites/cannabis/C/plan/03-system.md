# Design System — cannabis-C (Poppy & Fog)

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Oswald', sans-serif;
  --ff-text: 'Onest', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem);
  --fs-3: clamp(1.625rem, 1.4rem + 1.1vw, 2.25rem);
  --fs-4: clamp(2.25rem, 1.9rem + 1.75vw, 3.25rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);
}
```
Headings: `font-family: var(--ff-display); text-wrap: balance; font-weight: 600; letter-spacing: -0.01em;`
Body: `font-family: var(--ff-text); text-wrap: pretty; line-height: 1.6; measure: 65ch;`
Lead paragraph: `font-size: var(--fs-1); font-weight: 450;`
Mono (prices, times, ZIPs, batch codes): `font-family: var(--ff-mono); font-variant-numeric: tabular-nums;`

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
  --sec-y: clamp(3rem, 2rem + 5vw, 6rem);
  --sec-x: clamp(1rem, 0.5rem + 2.5vw, 2rem);
  --header-h: 64px;
}
```

### Tone classes
```css
.t-light  { --bg: #f4f1eb; --ink: #1e2a2f; --muted: #5a6b72; --rule: #d8d3c8; --accent: #d4682a; }
.t-paper  { --bg: #ebe7df; --ink: #1e2a2f; --muted: #5a6b72; --rule: #ccc7bb; --accent: #d4682a; }
.t-mid    { --bg: #3a4f58; --ink: #f4f1eb; --muted: #b8c4c8; --rule: #4e636c; --accent: #d4682a; }
.t-deep   { --bg: #2a3d45; --ink: #f4f1eb; --muted: #a0b0b8; --rule: #3e515a; --accent: #d4682a; }
.t-accent { --bg: #d4682a; --ink: #1e2a2f; --muted: #3a2a1e; --rule: #b85820; --accent: #1e2a2f; }
```
Each tone sets background, ink, muted ink, rule color and accent. Components never pick colors themselves.

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
No bounce, no elastic. All hidden-before-reveal styles live under `.sw-motion` only.

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .tel-plain, a { border: 2px solid ButtonText; }
}
```

### Components
- **Buttons:** primary (accent bg, ink text), secondary (transparent bg, accent border + text), ghost (text only, underline on hover). Min-height 48px. Padding-block ≥ 12px for inline links.
- **Inputs:** 48px tall, 2px border, focus ring matches accent.
- **Cards:** padding var(--s-5), border-radius 4px, subtle shadow on hover (lift 2px).
- **Tags:** `.sample-tag` — small caps, muted ink, left border 2px solid accent.
- **Frames:** aspect-ratio container, overflow hidden, photo grade filter applied.
- **Rules:** 1px solid var(--rule), margin-block var(--s-5).
- **Sticky mobile bar:** fixed bottom, z-index 100, hides on scroll down and when #contact visible.
- **Header:** 64px tall, transparent → paper bg on scroll, progress bar via --p.

### Photo grade
```css
.frame img, .vid video {
  filter: saturate(.85) contrast(1.05) sepia(.08);
}
```
Per-photo object-position set via data attributes or inline style from media plan.