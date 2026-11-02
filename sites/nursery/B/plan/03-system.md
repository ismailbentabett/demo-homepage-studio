# Design System — nursery-B

## Tokens

### Type scale
```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--fs-0: clamp(0.9375rem, 0.875rem + 0.3vw, 1.0625rem);
--fs-1: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
--fs-2: clamp(1.375rem, 1.125rem + 1vw, 2rem);
--fs-3: clamp(1.75rem, 1.25rem + 2vw, 2.75rem);
--fs-h1: clamp(2.4rem, min(8.5vw, 9svh) + 0.1rem, 4.75rem);
```
Headings: `text-wrap: balance`. Body: `text-wrap: pretty`, measure 60-72ch. Lead paragraph: `font-variation-settings: "opsz" 24; font-weight: 450` where available.

### Space
```css
--s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;
--s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
--sec-y: clamp(3rem, 6vw, 6rem);
--sec-x: clamp(1rem, 4vw, 2rem);
```

### Tone classes
Each sets background, ink, muted, rule, accent:
- `.t-light`: paper bg, ink text, muted, rule, accent.
- `.t-paper`: slightly darker sand (#EDE9DF), same inks.
- `.t-mid`: rule-colored bg (#D6CFBF), ink text.
- `.t-deep`: Night Canopy (#14211A) bg, paper text, muted-paper, accent-bright.
- `.t-accent`: Citrus Leaf (#3B7A3A) bg, paper text, paper-muted, signal accent.

### Motion tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms; --dur-ui: 200ms; --dur-page: 520ms;
--dur-story: 900ms; --dur-stagger: 60ms;
```

### Gating
Build adds `sw-js` and `sw-motion` to `<html>`. Hidden-before-reveal styles live under `.sw-motion` only.

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) { button, a { border: 2px solid ButtonText; } }
```

### Components
- Buttons: primary (accent bg, paper text), secondary (outline accent), text (accent underline). Min-height 48px.
- Inputs: 48px tall, 2px border, focus ring matches accent.
- Cards: 1px rule border, 12px radius, hover hairline grow.
- Tags: "Sample" label in mono, muted bg, 24px height.
- Frames: aspect-ratio containers with shared grade filter.
- Sticky mobile bar: fixed bottom, two buttons (Call + Text), 56px tall.
- Header: 64px height, logo left, nav right, open-now pill.

### Photo grade
```css
filter: saturate(.9) contrast(1.05) sepia(.06);
```
Per-photo `object-position` set in media plan.