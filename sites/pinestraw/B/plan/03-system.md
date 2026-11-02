# Design System — pinestraw-B

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Arvo', serif;
  --ff-text: 'Karla', sans-serif;

  --fs--2: clamp(0.78rem, 0.74rem + 0.2vw, 0.875rem);
  --fs--1: clamp(0.875rem, 0.82rem + 0.28vw, 1rem);
  --fs-0: clamp(1rem, 0.93rem + 0.35vw, 1.125rem);
  --fs-1: clamp(1.125rem, 1.02rem + 0.52vw, 1.375rem);
  --fs-2: clamp(1.375rem, 1.18rem + 0.97vw, 2rem);
  --fs-3: clamp(1.75rem, 1.42rem + 1.65vw, 2.75rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  --lh-tight: 1.05;
  --lh-snug: 1.2;
  --lh-body: 1.55;
}
```

Headings: `font-family: var(--ff-display); text-wrap: balance; line-height: var(--lh-snug);`
Body: `font-family: var(--ff-text); text-wrap: pretty; line-height: var(--lh-body); measure: 65ch;`
Lead paragraph: `font-size: var(--fs-1); font-weight: 450;`
Numbers/tallies: `font-variant-numeric: tabular-nums; font-family: var(--ff-text);`

### Space
```css
:root {
  --s-1: 0.25rem;   /* 4 */
  --s-2: 0.5rem;    /* 8 */
  --s-3: 0.75rem;   /* 12 */
  --s-4: 1rem;      /* 16 */
  --s-5: 1.5rem;    /* 24 */
  --s-6: 2rem;      /* 32 */
  --s-7: 3rem;      /* 48 */
  --s-8: 4rem;      /* 64 */
  --s-9: 6rem;      /* 96 */
  --sec-y: clamp(4rem, 6vw + 1rem, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;
}
```

### Tone classes
```css
.t-light  { --bg: #F5EFE0; --ink: #1C1917; --muted: #78716C; --rule: #D6CFC0; --accent: #C26A2A; }
.t-paper  { --bg: #FFFDF7; --ink: #1C1917; --muted: #78716C; --rule: #E8E2D6; --accent: #C26A2A; }
.t-mid    { --bg: #E8E2D6; --ink: #1C1917; --muted: #57534E; --rule: #D6CFC0; --accent: #C26A2A; }
.t-deep   { --bg: #2A2318; --ink: #F5EFE0; --muted: #A8A29E; --rule: #44392C; --accent: #D4943A; }
.t-accent { --bg: #C26A2A; --ink: #FFFDF7; --muted: #FDEAD8; --rule: #A85520; --accent: #FFFDF7; }
```

Each section sets one tone class on its wrapper; components inherit via `var(--ink)` etc. Never pick colors inside a component.

### Motion tokens
```css
:root {
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-io: cubic-bezier(.77, 0, .175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --stagger: 60ms;
}
```

### Gating
The build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion`:
```css
.sw-motion [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity var(--dur-page) var(--ease-out), transform var(--dur-page) var(--ease-out); }
.sw-motion [data-reveal].is-in { opacity: 1; transform: none; }
```
Without `sw-motion`, everything is visible at load. No content is hidden from JS-off or reduced-motion visitors.

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .tel-plain { border: 2px solid ButtonText; }
}
```

### Components
- **Buttons:** `.btn` ≥ 48px tall, padding-inline ≥ 1.5rem. Primary uses `--accent` bg on light tones, paper bg on deep. Secondary is outlined. Ghost is text-only with underline on hover.
- **Inputs:** 48px tall, 2px border using `--rule`, focus uses `--accent`.
- **Cards:** `.card` with `--bg`, `--ink`, 1px `--rule` border, padding `var(--s-5)`.
- **Sample tag:** `.sample-tag { font-size: var(--fs--2); text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); border: 1px solid var(--rule); padding: 0.15em 0.5em; border-radius: 2px; display: inline-block; margin-bottom: var(--s-2); }`
- **Frame:** `.frame { position: relative; overflow: clip; aspect-ratio: 3/2; background: var(--rule); }` Photo grade filter applied globally.
- **Ticket strip:** `.ticket-strip { background: #EDE5D0; border-top: 2px dashed var(--rule); padding: var(--s-3) var(--s-5); display: flex; align-items: center; gap: var(--s-4); font-family: var(--ff-text); font-variant-numeric: tabular-nums; color: var(--ink); }` Contains SVG tally marks and running total.
- **Mobile bar:** `[data-mobilebar]` sticky bottom under 900px, hides on scroll down and when `#contact` is visible.
- **Header:** `[data-header]` 4rem tall, transparent → paper on scroll, logo left, nav right, call CTA.

### Photo grade
```css
img[data-photo] {
  filter: saturate(.85) contrast(1.05) sepia(.08);
}
```
Per-photo `object-position` set via inline style or data attribute when needed.