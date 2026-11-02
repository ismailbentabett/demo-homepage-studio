# Design System — farm-B

## Tokens

### Type scale
- `--fs--1`: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
- `--fs-0`: clamp(0.875rem, 0.8rem + 0.35vw, 1rem)
- `--fs-1`: clamp(1rem, 0.9rem + 0.5vw, 1.25rem)
- `--fs-2`: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)
- `--fs-3`: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem)
- `--fs-4`: clamp(2.25rem, 1.8rem + 2vw, 3.5rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)

Headings: `text-wrap: balance`; body: `text-wrap: pretty`; measure 60-72ch.
Lead paragraph: `font-size: var(--fs-1); font-weight: 450; font-variation-settings: "wdth" 90`.
Mono accent (JetBrains Mono): `font-variant-numeric: tabular-nums` for prices, weights, dates.

### Space
- `--s-1`: 0.25rem
- `--s-2`: 0.5rem
- `--s-3`: 0.75rem
- `--s-4`: 1rem
- `--s-5`: 1.5rem
- `--s-6`: 2rem
- `--s-7`: 3rem
- `--s-8`: 4rem
- `--s-9`: 6rem
- `--sec-y`: clamp(4rem, 8svh, 7rem)
- `--sec-x`: clamp(1.25rem, 5vw, 4rem)
- `--header-h`: 64px

### Tone classes
Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`.

- `.t-paper`: bg #F4EFE6, ink #1C1917, muted #6B6560, rule #D8D0C4, accent #9B2C2C
- `.t-light`: bg #FFFFFF, ink #1C1917, muted #6B6560, rule #E0D8CC, accent #9B2C2C
- `.t-mid`: bg #E8DFC8, ink #1C1917, muted #5A5550, rule #C8C0B4, accent #9B2C2C
- `.t-deep`: bg #2D4A22, ink #F4EFE6, muted #B8C0B0, rule #4A6A3E, accent #E8DFC8
- `.t-accent`: bg #9B2C2C, ink #F4EFE6, muted #E8C8C8, rule #B84848, accent #F4EFE6

### Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- `--dur-press`: 120ms
- `--dur-ui`: 200ms
- `--dur-page`: 520ms
- `--dur-story`: 900ms
- `--dur-stagger`: 60ms

### Gating
Build adds `sw-js` and `sw-motion` to `<html>`. Hidden-before-reveal styles live under `.sw-motion` only.
Without JS or with reduced motion, all content is visible and complete.

### Focus
`:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px }`
`@media (forced-colors: active) { .btn { border: 2px solid CanvasText } }`

## Components

### Buttons
- `.btn`: min-height 48px, padding 0.75em 1.5em, radius 2px, font-weight 600
- `.btn-primary`: bg var(--accent), color paper
- `.btn-ghost`: border 1.5px solid currentColor, bg transparent
- `.btn-call`: inline-flex with icon gap

### Tags (signature)
`.tag`: bg var(--signal, #E8DFC8), color ink, padding var(--s-4) var(--s-5), radius 2px, position relative.
Punched hole: `::before` radial-gradient circle at top-left 12px from edge.
String line: `::after` dashed border-top above.
Status pill: `.tag__status` inline-block, mono, uppercase, small, bg ink or accent.
Back face: `.tag__back` absolute, opacity 0, revealed on `.tag.is-flipped` or hover.

### Cards
`.card`: bg var(--bg), border 1px solid var(--rule), padding var(--s-5), radius 2px.

### Frames
`.frame`: overflow hidden, radius 2px, aspect-ratio set per slot.
Photo grade: `filter: saturate(.85) contrast(1.05) sepia(.08)` on every img.

### Rules
`.dim-line`: 1.5px solid var(--rule), with end ticks via ::before/::after.

### Sample tag
`.sample-tag`: font-size var(--fs--1), text-transform uppercase, letter-spacing 0.05em, color var(--muted), border 1px solid var(--rule), padding 0.15em 0.5em, radius 2px, display inline-block.

### Header
`[data-header]`: height var(--header-h), bg var(--bg), border-bottom 1px solid var(--rule).
Logo left, nav center (desktop), call button right.
`.is-scrolled` adds shadow.

### Mobile bar
`[data-mobilebar]`: fixed bottom, full width, bg var(--deep), two buttons (Call, Check field), visible under 900px.
Hides on scroll down and while #contact is in view.

## Photo grade
One shared filter: `filter: saturate(.85) contrast(1.05) sepia(.08)`. Applied to every `img` and video poster.
Per-photo `object-position` set in plan/05-media.md.