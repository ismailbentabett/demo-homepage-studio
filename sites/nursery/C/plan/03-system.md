# Design System — nursery-C (Fog Season Nursery)

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Crimson Pro', serif;
  --ff-text: 'DM Sans', sans-serif;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.9375rem, 0.875rem + 0.3vw, 1.0625rem);
  --fs-1: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --fs-2: clamp(1.375rem, 1.125rem + 1vw, 2rem);
  --fs-3: clamp(1.75rem, 1.25rem + 2vw, 2.75rem);
  --fs-4: clamp(2.25rem, 1.5rem + 3vw, 3.75rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-body: 1.55;
  --lh-loose: 1.7;

  --measure: 65ch;
}
```

Headings: `text-wrap: balance`; body: `text-wrap: pretty`. Lead paragraph uses `font-variation-settings: "opsz" 24` on DM Sans where supported, weight 450.

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
  --s-10: 10rem;    /* 160px */

  --sec-y: clamp(4rem, 8vw, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;
}
```

### Tone classes
Each sets background, ink, muted, rule, accent. Components never pick colors.

| Class | Background | Ink | Muted | Rule | Accent | Use |
|---|---|---|---|---|---|---|
| `.t-paper` | `var(--paper)` #FAF6F0 | `var(--ink)` #2C1810 | #5C4A3A | #D8CFC4 | `var(--accent)` #C4654A | Default light sections |
| `.t-light` | #FFFFFF | `var(--ink)` | #6B5A4A | #E0D8CC | `var(--accent)` | Alternate light |
| `.t-fog` | `var(--fog)` #B8C4CC | `var(--ink)` | #4A3C30 | #9AA8B0 | `var(--deep)` #1A0F0A | Fog season band |
| `.t-bloom` | `var(--bloom)` #E8C4C8 | `var(--ink)` | #5C3A3E | #D0A8AE | `var(--deep)` | Bloom season band |
| `.t-deep` | `var(--deep)` #1A0F0A | `var(--paper)` | #A89888 | #3C2A1E | `var(--signal)` #D4A843 | Dark band (proof, footer) |
| `.t-accent` | `var(--accent)` #C4654A | `var(--paper)` | #F0D8D0 | #A84830 | `var(--signal)` | CTA band |

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

No bounce, no elastic.

### Gating
Build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion` only. Content is fully visible with JS off or reduced motion.

### Focus
```css
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  button, a.btn { border: 2px solid ButtonText; }
}
```

Accent #C4654A passes 3:1 on paper, fog, bloom. On deep and accent backgrounds, focus uses paper #FAF6F0 (passes 3:1).

### Components
- **Buttons:** primary (accent bg, paper text), secondary (ink border, ink text), text (no border, underline on hover). Min-height 48px, padding ≥ 12px 24px. Border-radius 2px.
- **Inputs:** 48px tall, 1px border #D8CFC4, focus border accent. Label above, 14px DM Sans.
- **Cards:** paper bg, 1px rule border, padding s-5. No shadow.
- **Tags:** "Sample" label in mono, 12px, uppercase, letter-spacing 0.05em, ink on fog bg.
- **Rules:** 1px solid currentColor at 0.15 opacity.
- **Frames:** aspect-ratio containers with object-fit cover. Shared photo grade below.
- **Mobile bar:** sticky bottom, 56px tall, two buttons (Call + Text), paper bg, top rule.
- **Header:** 64px tall, paper bg, logo left, nav center (desktop), phone right. Transparent over hero, solid on scroll.

### Photo grade
One filter for all photos so stock looks like one shoot:
```css
.photo-grade {
  filter: saturate(.85) contrast(1.05) sepia(.08);
}
```
Per-photo `object-position` set in media plan.

## Almanac ribbon primitive
```css
.almanac-ribbon {
  display: flex;
  gap: 0;
  overflow-x: auto;
  padding: var(--s-2) 0;
  border-bottom: 1px solid currentColor;
  font-family: var(--ff-text);
  font-size: var(--fs--1);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.almanac-ribbon span {
  flex: 1 0 auto;
  padding: var(--s-1) var(--s-2);
  text-align: center;
  opacity: 0.5;
  position: relative;
}
.almanac-ribbon span.active {
  opacity: 1;
  font-weight: 600;
}
.almanac-ribbon span.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}
.almanac-ribbon .season-band {
  position: absolute;
  bottom: 0;
  height: 3px;
  background: var(--accent);
  opacity: 0.3;
  transition: left var(--dur-story) var(--ease-io), width var(--dur-story) var(--ease-io);
}
```

Scroll-driven via `--sw-p` custom property set by IntersectionObserver in app.js. Each section sets `data-season="fog|bloom|rush|heat|second"` and the ribbon updates.