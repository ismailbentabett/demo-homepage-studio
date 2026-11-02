# Design System — nursery-A

## Tokens
```css
:root {
  --c-deep: #1A1814;
  --c-paper: #E8E4DC;
  --c-accent: #D4872E;
  --c-ink: #2C2822;
  --c-rule: #9C9488;
  --c-white: #FFFFFF;

  --ff-display: 'Merriweather', serif;
  --ff-body: 'DM Sans', sans-serif;
  --ff-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --fs--2: clamp(0.72rem, 0.68rem + 0.2vw, 0.78rem);
  --fs--1: clamp(0.82rem, 0.78rem + 0.25vw, 0.9rem);
  --fs-0: clamp(0.94rem, 0.9rem + 0.3vw, 1.05rem);
  --fs-1: clamp(1.1rem, 1rem + 0.5vw, 1.3rem);
  --fs-2: clamp(1.4rem, 1.2rem + 1vw, 1.9rem);
  --fs-3: clamp(1.8rem, 1.4rem + 2vw, 2.8rem);
  --fs-4: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  --lh-tight: 1.05;
  --lh-snug: 1.2;
  --lh-body: 1.55;

  --sp-xs: 0.5rem;
  --sp-sm: 0.75rem;
  --sp-md: 1.25rem;
  --sp-lg: 2rem;
  --sp-xl: 3.5rem;
  --sp-2xl: 6rem;

  --header-h: 64px;
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
}
```

## Tone classes
- `.t-deep` → bg `--c-deep`, text `--c-paper`
- `.t-paper` → bg `--c-paper`, text `--c-ink`
- `.t-accent` → bg `--c-accent`, text `--c-deep`

## Components
- `.bench-card` → mono labels, rule border, row/week/stage/low fields
- `.filmstrip` → horizontal scrolling frame strip
- `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--call`
- `.sample-tag` → small label for sample proof
- `.frame`, `.vid` → media wrappers

## Layout families
1. **Filmstrip hero** — horizontal strip under h1
2. **Bench row** — card grid with left rail marker
3. **Split process** — text left, photo right (≥ 900px)
4. **Stacked proof** — review cards with grower-note clip
5. **Price rack** — mono table with sample tag
6. **Form block** — centered multi-step form

## Breakpoints
Mobile-first: base 320–389, then `min-width: 390 / 640 / 900 / 1200 / 1440`.