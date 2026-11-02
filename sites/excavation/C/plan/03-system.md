# Design System — excavation-C

## Tokens (copy exactly into style.css :root)

```css
:root {
  /* palette */
  --c-ink: #1c1410;
  --c-paper: #f4ece4;
  --c-accent: #2f6b5a;
  --c-deep: #1a2620;
  --c-signal: #4a8c7a;
  --c-mid: #d4c4b0;
  --c-chip-border: #3a2a20;

  /* type scale (mobile-first, clamp at 390/1440) */
  --fs-kicker: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-h1: clamp(2rem, 1.4rem + 3vw, 3.75rem);
  --fs-h2: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
  --fs-h3: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --fs-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --fs-small: clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem);
  --fs-mono: clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem);

  /* spacing */
  --sp-xs: 0.5rem;
  --sp-sm: 1rem;
  --sp-md: 1.5rem;
  --sp-lg: 3rem;
  --sp-xl: 5rem;
  --sp-section: clamp(4rem, 3rem + 5vw, 7rem);

  /* layout */
  --gutter: clamp(1rem, 0.5rem + 2vw, 2rem);
  --max-w: 1200px;
  --header-h: 3.5rem;
  --mobilebar-h: 3.5rem;

  /* motion */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-enter: 500ms;
  --dur-hover: 200ms;
}
```

## Tone classes

| Class | Background | Text | Use |
|---|---|---|---|
| `.t-paper` | `--c-paper` | `--c-ink` | Light sections (hero, services, contact) |
| `.t-deep` | `--c-deep` | `--c-paper` | Dark band (process, guarantee) |
| `.t-mid` | `--c-mid` | `--c-ink` | Color band (drainage picker, reviews) |
| `.t-accent` | `--c-accent` | `--c-paper` | Signal band (ZIP checker result) |

## Type roles

- **Display (Spectral):** h1, h2, kicker, pull quotes. `font-weight: 600` for headlines, `400` italic for water-voice lines.
- **Text (Karla):** body, buttons, form labels, card text. `font-weight: 400`, line-height 1.6.
- **Mono (DM Mono):** soil chip labels, ZIP codes, sample prices, tool readouts, step numbers. `font-weight: 400`, letter-spacing 0.02em.

## Components

### Soil Chip (signature)
```css
.soil-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.125rem 0.5rem 0.125rem 0;
  border: 1px solid var(--c-chip-border);
  border-radius: 0 4px 4px 0;
  font-family: 'DM Mono', monospace;
  font-size: var(--fs-mono);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1;
}
.soil-chip::before {
  content: '';
  width: 1.5rem;
  height: 1rem;
  border-radius: 2px 0 0 2px;
  background: currentColor;
}
.soil-chip[data-soil="wet"] { color: #8b3a2a; }
.soil-chip[data-soil="dry"] { color: #a87850; }
.soil-chip[data-soil="loam"] { color: #6b5a4d; }
.soil-chip[data-soil="creek"] { color: var(--c-signal); }
.soil-chip[data-soil="finished"] { color: var(--c-accent); }
```

### Buttons
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: 'Karla', sans-serif;
  font-size: var(--fs-body);
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--c-signal);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-hover) var(--ease-out);
}
.btn:hover::after, .btn:focus-visible::after { transform: scaleX(1); }
.btn-primary { background: var(--c-accent); color: var(--c-paper); }
.btn-secondary { background: transparent; color: var(--c-ink); border: 1px solid var(--c-ink); }
.t-deep .btn-secondary { color: var(--c-paper); border-color: var(--c-paper); }
```

### Section rhythm
- Every section: `padding-block: var(--sp-section)`.
- Hero: `min-height: calc(100svh - var(--header-h))`.
- Next band peeks: `margin-top: -2rem` on mobile, `-3rem` on desktop.
- `.break`: full-bleed photo band, no padding, `min-height: 50svh`.

## Entrance patterns (motion)
- Text rise: `.sw-motion .rise { opacity: 0; transform: translateY(24px); }` → revealed via ScrollTrigger.
- Image unclip: `.sw-motion .unclip { clip-path: inset(0 0 100% 0); }` → revealed via ScrollTrigger.
- Hover hairline: see `.btn::after` above; same pattern on links.

## Reduced motion
All `.sw-motion` entrances become visible immediately. Filmstrip is a static grid. Water line SVG is drawn but not animated. Chips are static.