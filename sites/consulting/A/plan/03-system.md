# Design System — consulting-A

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Fraunces', serif;
  --ff-text: 'DM Sans', sans-serif;

  --fs--1: clamp(0.8rem, 0.78rem + 0.1vw, 0.875rem);
  --fs-0: clamp(0.95rem, 0.92rem + 0.15vw, 1.0625rem);
  --fs-1: clamp(1.1rem, 1rem + 0.3vw, 1.3rem);
  --fs-2: clamp(1.4rem, 1.2rem + 0.6vw, 1.8rem);
  --fs-3: clamp(1.8rem, 1.4rem + 1.2vw, 2.6rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-body: 1.55;

  --measure: 68ch;
}
```
Headings: `text-wrap: balance`; body: `text-wrap: pretty`; lead paragraph: `font-size: var(--fs-1); font-weight: 450; font-variation-settings: "opsz" 24`.

### Space
```css
:root {
  --s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(4rem, 6vw + 1rem, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;
  --gutter: clamp(1rem, 2vw, 2rem);
}
```

### Colors
```css
:root {
  --ink: #1a1814;
  --cream: #f2ece0;
  --deep: #12141c;
  --brick: #a8432a;
  --brick-ink: #7a2f1d;
  --lamp: #e8c97a;
  --muted: #6b6560;
  --rule: rgba(26, 24, 20, 0.12);
  --rule-deep: rgba(242, 236, 224, 0.14);
}
```

### Tone classes
- `.t-light` — bg cream, ink ink, rule var(--rule), accent brick-ink
- `.t-paper` — bg #faf7f0, ink ink, rule var(--rule), accent brick-ink
- `.t-mid` — bg #d8d0c4, ink ink, rule var(--rule), accent brick-ink
- `.t-deep` — bg deep, ink cream, rule var(--rule-deep), accent lamp
- `.t-accent` — bg brick, ink cream, rule var(--rule-deep), accent lamp

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
:focus-visible { outline: 3px solid var(--lamp); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

## Components
- Buttons: `.btn`, `.btn-primary` (brick bg, cream text), `.btn-ghost` (transparent, brick-ink border), `.btn-call`. Min-height 48px. Press: scale(.97) 120ms.
- Inputs: cream bg, ink border, focus lamp ring. Label above, 48px tall.
- Cards: `.slip` — cream bg, 1px rule border, left gutter stripe, padding s-5/s-6.
- Tags: `.sample-tag` — small caps, muted color, bracketed "[Sample]".
- Frames: `.frame` — aspect-ratio container, shared grade filter.
- Header: `[data-header]`, 4rem tall, transparent → cream on scroll.
- Mobile bar: `[data-mobilebar]`, sticky bottom under 900px, call + quote buttons.

## Photo grade
```css
img, video { filter: saturate(.82) contrast(1.08) sepia(.12); }
```
Warm, slightly desaturated, lifted contrast to match the lamp-lit palette. Per-photo object-position set in media plan.