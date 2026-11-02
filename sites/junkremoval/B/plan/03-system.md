# Design System — junkremoval-B

## Tokens

```css
:root {
  /* palette */
  --c-deep: #1A1A1A;
  --c-paper: #F4F1EC;
  --c-concrete: #D8D3CB;
  --c-donate: #2E6B8A;
  --c-recycle: #5C6B3C;
  --c-landfill: #9C5A3C;
  --c-rule: #B8B2A8;
  --c-white: #FFFFFF;

  /* type scale */
  --fs--2: clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem);
  --fs--1: clamp(0.84rem, 0.78rem + 0.3vw, 0.9rem);
  --fs-0: clamp(1rem, 0.92rem + 0.4vw, 1.125rem);
  --fs-1: clamp(1.2rem, 1.05rem + 0.75vw, 1.5rem);
  --fs-2: clamp(1.6rem, 1.3rem + 1.5vw, 2.25rem);
  --fs-3: clamp(2.2rem, 1.6rem + 3vw, 3.5rem);
  --fs-4: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  /* spacing */
  --sp-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
  --sp-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1.25rem);
  --sp-md: clamp(1.25rem, 1rem + 1.25vw, 2rem);
  --sp-lg: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
  --sp-xl: clamp(3rem, 2rem + 5vw, 6rem);
  --sp-section: clamp(4rem, 3rem + 5vw, 7rem);

  /* layout */
  --header-h: 64px;
  --gutter: clamp(1rem, 0.5rem + 2.5vw, 2rem);
  --max-w: 1320px;

  /* easing */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io: cubic-bezier(0.77, 0, 0.175, 1);

  /* radii & rules */
  --radius: 2px;
  --rule-w: 1px;
}
```

## Tone classes
- `.t-paper` — bg `--c-paper`, text `--c-deep`
- `.t-concrete` — bg `--c-concrete`, text `--c-deep`
- `.t-deep` — bg `--c-deep`, text `--c-paper`

## Sort-sheet component
`.sheet` — a three-column ruled table. Column headers colored by destination. Hairline rules at `--c-rule`. Monospace for item cells, grotesk for labels.

## Photo grade
`filter: saturate(0.85) contrast(1.05) sepia(0.06)` — warm-neutral, consistent across all photos.