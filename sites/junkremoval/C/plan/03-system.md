# Design System — junkremoval-C

## Tokens

### Type scale
```css
--fs--1: clamp(0.875rem, 0.8rem + 0.2vw, 0.9375rem);
--fs-0: clamp(1rem, 0.92rem + 0.25vw, 1.125rem);
--fs-1: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
--fs-2: clamp(1.5rem, 1.2rem + 0.8vw, 2rem);
--fs-3: clamp(2rem, 1.5rem + 1.2vw, 2.75rem);
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);
```
Headings: `font-family: 'Cormorant Garamond', serif; text-wrap: balance;`
Body: `font-family: 'Karla', sans-serif; text-wrap: pretty; line-height: 1.6; measure: 65ch;`
Lead: `font-size: var(--fs-1); font-weight: 450;`

### Space
```css
--s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;
--s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
--sec-y: clamp(4rem, 8svh, 7rem);
--sec-x: clamp(1.25rem, 5vw, 3rem);
```

### Tone classes
- `.t-light`: bg paper, ink charcoal, muted #5A6B63, accent terracotta.
- `.t-paper`: bg #EDE7DD, ink charcoal, rule #D4CBC0.
- `.t-mid`: bg #D4CBC0, ink charcoal, accent deep green.
- `.t-deep`: bg dusk green (#1A2420), ink paper, muted #A8B5AE, accent signal amber.
- `.t-accent`: bg terracotta (#B85C3A), ink paper, signal amber for highlights.

Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`.

### Motion tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms; --dur-ui: 200ms; --dur-page: 520ms;
--dur-story: 900ms; --dur-stagger: 60ms;
```

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) { button, a { border: 2px solid ButtonText; } }
```

### Components
- Buttons: min-height 48px, padding 0.75em 1.5em, radius 4px.
- Inputs: min-height 48px, border 1px solid var(--rule), focus uses accent.
- Cards: border-top 3px solid var(--accent), padding var(--s-5).
- Tags: small caps, uppercase tracking, bg muted at 20%, px s-2 py s-1.
- Frames: aspect-ratio 3/2, overflow hidden, grade filter applied.
- Mobile bar: fixed bottom, z-50, bg deep, two buttons (Call + Price it).

### Photo grade
```css
filter: saturate(.85) contrast(1.05) sepia(.08);
```
Per-photo object-position set in CSS via `[data-photo="key"]`.