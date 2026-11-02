# Design System — irrigation-A

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Bitter', serif;
  --ff-text: 'DM Sans', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);
}
```

### Space
```css
:root {
  --s-1: 0.25rem;
  --s-2: 0.5rem;
  --s-3: 0.75rem;
  --s-4: 1rem;
  --s-5: 1.5rem;
  --s-6: 2rem;
  --s-7: 3rem;
  --s-8: 4rem;
  --s-9: 6rem;
  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 64px;
}
```

### Palette
```css
:root {
  --ink: #E8E4DC;
  --paper: #F0EDE6;
  --deep: #141820;
  --accent: #D4880F;
  --mid: #3A4250;
  --signal: #E8A830;
  --rule: rgba(232, 228, 220, 0.18);
}
```

### Motion
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

## Tone classes

| Class | bg | ink | muted | rule | accent use |
|---|---|---|---|---|---|
| `t-deep` | var(--deep) | var(--ink) | rgba(232,228,220,.6) | var(--rule) | accent on buttons/tags |
| `t-paper` | var(--paper) | var(--deep) | var(--mid) | rgba(20,24,32,.12) | accent-ink #8A5A00 for words |
| `t-light` | #FAFAF8 | var(--deep) | var(--mid) | rgba(20,24,32,.1) | same as paper |
| `t-accent` | var(--accent) | var(--deep) | #3A2A08 | rgba(20,24,32,.2) | deep buttons |

## Components

- Buttons: ≥48px tall, primary = accent bg/deep text, secondary = outline, ghost = text-only with underline hover.
- Cards: border-radius 2px everywhere, no mixed radii.
- Sample tag: small mono label, uppercase, 1px border, inline.
- Frames: aspect-ratio set per slot, grade filter applied globally.
- Mobile bar: sticky bottom under 900px, call + price-it, hides when #contact visible.

## Photo grade
```css
img, video[poster] {
  filter: saturate(.85) contrast(1.05) sepia(.08);
}
```

## Focus
```css
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```