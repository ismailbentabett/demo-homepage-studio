# Design System — moving-B

## Tokens

### Type scale (fluid)

```css
:root {
  --ff-display: 'Space Grotesk', sans-serif;
  --ff-text: 'Outfit', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--2: clamp(0.694rem, 0.66rem + 0.18vw, 0.75rem);
  --fs--1: clamp(0.833rem, 0.78rem + 0.27vw, 0.938rem);
  --fs-0: clamp(1rem, 0.93rem + 0.35vw, 1.125rem);
  --fs-1: clamp(1.2rem, 1.1rem + 0.5vw, 1.35rem);
  --fs-2: clamp(1.44rem, 1.28rem + 0.8vw, 1.75rem);
  --fs-3: clamp(1.728rem, 1.48rem + 1.24vw, 2.25rem);
  --fs-4: clamp(2.074rem, 1.7rem + 1.87vw, 2.875rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

  --lh-tight: 1.1;
  --lh-heading: 1.2;
  --lh-body: 1.55;
}
```

Headings: `font-family: var(--ff-display); text-wrap: balance; line-height: var(--lh-heading);`
Body: `font-family: var(--ff-text); text-wrap: pretty; line-height: var(--lh-body); max-width: 68ch;`
Mono (numbers, ledger lines): `font-family: var(--ff-mono); font-variant-numeric: tabular-nums;`
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
  --sec-y: clamp(4rem, 8vw, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 64px;
}
```

### Tone classes

Each sets background, ink, muted ink, rule color, and accent. Components never pick colors themselves.

```css
.t-deep {
  --bg: #1C1F23;
  --ink: #E8E6E1;
  --muted: #9A9DA2;
  --rule: #3A3E44;
  --accent: #D4A017;
  --signal: #C44B1C;
  background: var(--bg);
  color: var(--ink);
}

.t-paper {
  --bg: #E8E6E1;
  --ink: #1C1F23;
  --muted: #6B7178;
  --rule: #C8C5BE;
  --accent: #7A5C00;
  --signal: #C44B1C;
  background: var(--bg);
  color: var(--ink);
}

.t-light {
  --bg: #F5F4F1;
  --ink: #1C1F23;
  --muted: #6B7178;
  --rule: #D8D5CE;
  --accent: #7A5C00;
  --signal: #C44B1C;
  background: var(--bg);
  color: var(--ink);
}

.t-accent {
  --bg: #D4A017;
  --ink: #1C1F23;
  --muted: #3A3000;
  --rule: #1C1F23;
  --accent: #1C1F23;
  --signal: #8B2E0A;
  background: var(--bg);
  color: var(--ink);
}
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

Gating: hidden-before-reveal styles live under `.sw-motion` only. Without JS or with reduced motion, everything is visible.

### Focus

```css
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}

@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Components

- **Buttons:** primary (`.btn-primary`: signal bg, paper text), secondary (`.btn-ghost`: transparent, ink border), call (`.btn-call`: uses `[[call]]` macro). Min height 48px. Padding-block on inline links: 12px.
- **Inputs:** 48px tall, 1.5px border using `var(--rule)`, focus uses accent outline.
- **Cards:** `.card` with padding `var(--s-5)`, border-radius 2px, subtle rule border.
- **Tags:** `.sample-tag` — small mono label, uppercase, letter-spacing, muted ink on light or accent on dark.
- **Rules:** 1.5px solid `var(--rule)`. Ledger lines use mono type with dotted leaders.
- **Frames:** `.frame` with aspect-ratio container, shared photo grade filter.
- **Mobile bar:** sticky bottom under 900px, hides on scroll down and when #contact is visible.
- **Header:** 64px tall, `.is-scrolled` adds backdrop blur and shadow.

### Photo grade

```css
img, video[poster] {
  filter: saturate(.8) contrast(1.08) brightness(.95);
}
```

Cool palette: slightly desaturated, higher contrast, no sepia. Tuned to truck-charcoal + yellow accent.

### Load meter signature primitive

```css
.load-meter {
  display: inline-block;
  width: 120px;
  height: 48px;
}

.load-meter__truck {
  fill: none;
  stroke: var(--accent);
  stroke-width: 2;
}

.load-meter__fill {
  fill: var(--accent);
  opacity: 0.7;
  clip-path: inset(0 calc((1 - var(--sw-p, 0)) * 100%) 0 0);
  transition: clip-path var(--dur-page) var(--ease-out);
}
```

### Ledger line primitive

```css
.ledger-line {
  font-family: var(--ff-mono);
  font-size: var(--fs--1);
  display: flex;
  gap: var(--s-3);
  padding-block: var(--s-2);
  border-bottom: 1px dashed var(--rule);
}

.ledger-line__label { opacity: 0.7; }
.ledger-line__value { margin-inline-start: auto; color: var(--accent); }
```