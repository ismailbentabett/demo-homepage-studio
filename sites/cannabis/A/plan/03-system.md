# Design system — cannabis-A

## Tokens

### Type scale
```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
--fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
--fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
--fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);
```
Headings: `font-family: 'Cormorant Garamond', serif; text-wrap: balance;`
Body: `font-family: 'DM Sans', sans-serif; text-wrap: pretty; line-height: 1.6;`
Lead: `font-size: var(--fs-1); font-weight: 450; font-variation-settings: "opsz" 24;`
Numbers: `font-family: 'DM Mono', monospace; font-variant-numeric: tabular-nums;`

### Space
```css
--s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;
--s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
--sec-y: clamp(4rem, 8svh, 8rem);
--sec-x: clamp(1.25rem, 4vw, 6rem);
```

### Tone classes
- `.t-deep`: bg `#0E1418`, ink `#E8E4DC`, muted `#A8A49C`, rule `#2A3038`, accent `#D4943A`.
- `.t-mid`: bg `#2A3038`, ink `#E8E4DC`, muted `#B8B4AC`, rule `#3A4048`, accent `#D4943A`.
- `.t-paper`: bg `#E8E4DC`, ink `#0E1418`, muted `#4A4640`, rule `#C8C4BC`, accent `#8A5A00`.
- `.t-accent`: bg `#D4943A`, ink `#0E1418`, muted `#2A2018`, rule `#8A5A00`, accent `#0E1418`.

### Motion tokens
```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

### Focus
```css
:focus-visible { outline: 3px solid #D4943A; outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Components
- Buttons: min-height 48px, padding-inline 1.5rem, radius 2px. Primary: bg accent on deep, ink deep on accent. Secondary: border accent.
- Cards: bg mid or paper, padding s-5, radius 2px.
- Sample tag: small caps, border 1px solid muted, padding 0.15em 0.4em, font-size --fs--1.
- Frames: aspect-ratio 3/2, overflow clip, grade `filter: saturate(.85) contrast(1.05) sepia(.12);`.
- Lamp stop: 48px circle, border 2px solid accent, number in mono, glow `box-shadow: 0 0 24px rgba(212,148,58,.35)`. Active: filled accent, glow stronger. Inactive: transparent, glow faint.

### Photo grade
`filter: saturate(.85) contrast(1.05) sepia(.12);` applied to every img and video poster. Warm amber tint matches the palette.