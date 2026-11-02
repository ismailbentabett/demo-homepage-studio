# Design System — irrigation-C

## Tokens

### Type scale
```css
:root {
  --ff-display: 'Merriweather', serif;
  --ff-text: 'DM Sans', sans-serif;

  --fs--1: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.95rem, 0.9rem + 0.3vw, 1.0625rem);
  --fs-1: clamp(1.1rem, 1rem + 0.5vw, 1.3rem);
  --fs-2: clamp(1.4rem, 1.2rem + 1vw, 1.75rem);
  --fs-3: clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem);
  --fs-4: clamp(2.2rem, 1.8rem + 2vw, 3.25rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);
}
```

Headings use `font-family: var(--ff-display)` with `text-wrap: balance`. Body uses `var(--ff-text)` with `text-wrap: pretty` and measure capped at 68ch. Lead paragraphs set `font-size: var(--fs-1); font-weight: 450`. Numbers use `font-variant-numeric: tabular-nums`.

### Space
```css
:root {
  --s-1: 0.25rem; --s-2: 0.5rem; --s-3: 0.75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(3rem, 6vw, 5rem);
  --sec-x: clamp(1.25rem, 4vw, 2rem);
  --header-h: 4rem;
}
```

### Palette & tone classes
| Token | Hex | Role |
|---|---|---|
| `--c-ink` | #1E1814 | deep clay ink |
| `--c-paper` | #F4EFE6 | warm cream card |
| `--c-accent` | #2D5A3D | St. Augustine green |
| `--c-accent-ink` | #1B3A26 | accent words on light |
| `--c-signal` | #4A7B9D | frost blue |
| `--c-mid` | #8C8278 | warm grey muted |
| `--c-rule` | #D6CEBF | subtle rule on paper |

Tone classes set background, ink, muted, rule and accent per section:
- `.t-light`: paper bg, ink text, mid muted, rule color.
- `.t-paper`: same as light but with a faint texture via CSS noise (optional).
- `.t-mid`: #E6DFD3 bg, ink text.
- `.t-deep`: ink bg, paper text, signal accent, rule in rgba(paper,.2).
- `.t-accent`: accent bg, paper text, deep ink for large headings.

### Motion tokens
```css
:root {
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;
}
```

Entrance patterns (under `.sw-motion` only):
- Text rise: `opacity:0; transform:translateY(24px)` → `opacity:1; transform:none`, 500ms, starts at 85% viewport.
- Image unclip: `clip-path:inset(0 0 100% 0)` → `inset(0)`, 600ms.

### Focus
```css
:focus-visible { outline: 3px solid var(--c-accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

### Photo grade
Applied to every `img` and video poster:
```css
img, video { filter: saturate(.88) contrast(1.04) sepia(.06); }
```

### Components
- Buttons: primary (accent bg, paper text), secondary (outline accent), ghost (text only with underline). Min height 48px, padding-inline ≥ 1.25rem.
- Cards: `.card` with paper bg, 1px rule border, padding s-5, radius 2px.
- Tags: `.sample-tag` small caps, mid color, 1px dashed border.
- Frames: `.frame` with aspect-ratio container, overflow hidden, grade applied.
- Soil line divider: `.soil-line` SVG wave, height 48px, full-width, color inherited from section tone.

## Breakpoints
Mobile first: base = 320–389, then `min-width: 390px`, `640px`, `900px`, `1200px`, `1440px`.