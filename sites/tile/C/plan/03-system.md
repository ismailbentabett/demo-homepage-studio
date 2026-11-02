# Design System — tile-C

## Tokens

### Type scale (fluid)
- `--fs--1`: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem)
- `--fs-0`: clamp(0.95rem, 0.9rem + 0.25vw, 1rem)
- `--fs-1`: clamp(1.1rem, 1rem + 0.5vw, 1.25rem)
- `--fs-2`: clamp(1.4rem, 1.2rem + 1vw, 1.75rem)
- `--fs-3`: clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem)
- `--fs-4`: clamp(2.2rem, 1.8rem + 2vw, 3.25rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)

Headings: `font-family: 'Young Serif', serif; text-wrap: balance;`
Body: `font-family: 'DM Sans', sans-serif; text-wrap: pretty; line-height: 1.6;`
Lead paragraph: `font-size: var(--fs-1); font-weight: 450;`
Numbers/prices/hours: `font-variant-numeric: tabular-nums;`

### Space
- `--s-1`: 0.25rem | `--s-2`: 0.5rem | `--s-3`: 0.75rem | `--s-4`: 1rem | `--s-5`: 1.5rem | `--s-6`: 2rem | `--s-7`: 3rem | `--s-8`: 4rem | `--s-9`: 6rem
- `--sec-y`: clamp(4rem, 8svh, 7rem)
- `--sec-x`: clamp(1.25rem, 4vw, 3rem)
- `--header-h`: 4rem
- Measure: max-width 68ch for body text

### Palette tokens
- `--ink`: #1C1816
- `--paper`: #F3E8D2
- `--accent`: #8B3A2F
- `--accent-ink`: #6B2A22
- `--deep`: #2F6B5E
- `--mid`: #D6C8B0
- `--rule`: color-mix(in srgb, var(--ink) 18%, transparent)

### Tone classes
Each sets background, ink, muted, rule and accent for its section. Components never pick colors.

```css
.t-light { --bg: #fff; --ink: var(--ink); --muted: #5a5550; --rule: var(--rule); --accent: var(--accent); }
.t-paper { --bg: var(--paper); --ink: var(--ink); --muted: #5a5550; --rule: var(--rule); --accent: var(--accent); }
.t-mid { --bg: var(--mid); --ink: var(--ink); --muted: #4a4540; --rule: rgba(28,24,22,.22); --accent: var(--accent-ink); }
.t-deep { --bg: var(--deep); --ink: var(--paper); --muted: #c8dcd6; --rule: rgba(243,232,210,.2); --accent: var(--paper); }
.t-accent { --bg: var(--accent); --ink: var(--paper); --muted: #e8d0cc; --rule: rgba(243,232,210,.25); --accent: var(--paper); }
```

### Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- Durations: press 120ms, ui 200ms, page 520ms, story 900ms, stagger 60ms
- Text entrance: opacity 0→1 + translateY(24px→0), 500ms, starts at 85% viewport
- Image entrance: clip-path inset(0 0 100% 0) → inset(0), 700ms
- All hidden-before-reveal styles under `.sw-motion` only

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) { .btn { border: 2px solid CanvasText; } }
```

### Photo grade
Every img and video poster: `filter: saturate(.88) contrast(1.04) sepia(.1);`
Tuned warm for bungalow palette.

## Components

### Buttons
- Primary: bg var(--accent), color var(--paper), min-height 48px, padding-inline 1.5rem, radius 2px
- Ghost: border 1.5px solid currentColor, transparent bg
- Hover: hairline grows scaleX(0→1) from left via ::after pseudo, 200ms, @media (hover:hover)
- Press: transform scale(.97), 120ms

### Cards
- Background: var(--bg), border 1px solid var(--rule), radius 2px, padding var(--s-5)
- Hex bullet: small hexagon SVG inline before title

### Tags
- Sample tag: small uppercase label, border 1px solid var(--rule), padding 2px 8px, font-size var(--fs--1)

### Frames
- Photo container with aspect-ratio, overflow hidden, hex clip-path on hero and proof photos
- Grade applied to img inside

### Header
- Height var(--header-h), sticky top, backdrop-filter blur on scroll
- Logo: TF initials in hex badge

### Mobile bar
- Sticky bottom under 900px, call + price-it buttons, hides on scroll down and when #contact visible

### Hex primitives
- `.hex-mask`: clip-path polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)
- `.hex-bullet`: inline SVG hex, 12px, fill var(--accent)
- `.hex-map`: CSS grid of hex cells with gap, each cell a button/link