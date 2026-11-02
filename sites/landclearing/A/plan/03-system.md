# Design System — landclearing-A

## Tokens
```css
:root {
  --c-deep: #0B1A12;
  --c-paper: #F2EDE4;
  --c-flag: #E85A1B;
  --c-flag-ink: #9C3A0F;
  --c-mid: #3A4A3E;
  --c-ink: #0B1A12;
  --c-rule: rgba(11,26,18,.18);

  --ff-display: 'Anton', sans-serif;
  --ff-body: 'DM Sans', sans-serif;

  --fs--2: clamp(.75rem, .7rem + .25vw, .8125rem);
  --fs--1: clamp(.875rem, .82rem + .3vw, .9375rem);
  --fs-0: clamp(1rem, .94rem + .3vw, 1.0625rem);
  --fs-1: clamp(1.125rem, 1.04rem + .45vw, 1.3125rem);
  --fs-2: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --fs-3: clamp(2rem, 1.6rem + 2vw, 3rem);
  --fs-4: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem);

  --lh-display: 1.05;
  --lh-body: 1.55;

  --space-xs: clamp(.5rem, .4rem + .5vw, .75rem);
  --space-sm: clamp(.75rem, .6rem + .75vw, 1.25rem);
  --space-md: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
  --space-lg: clamp(3rem, 2.4rem + 3vw, 5rem);
  --space-xl: clamp(5rem, 4rem + 5vw, 8rem);

  --header-h: 64px;
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
}
```

## Tone classes
- `.t-deep` — bg deep, text paper, rules rgba(paper,.18)
- `.t-paper` — bg paper, text ink, rules var(--c-rule)
- `.t-flag` — bg flag, text deep (accent band only)
- `.t-mid` — bg mid, text paper

## Components
- `.btn`, `.btn--primary` (flag bg, deep text), `.btn--ghost` (outline on deep)
- `.frame` with clip-path reveal
- `.sample-tag` small uppercase label
- `.hours` dl from token
- `.svc-card`, `.review-card`, `.price-row`
- `.flag-line` SVG ribbon divider between sections

## Breakpoints
Mobile-first: base (320–389), then min-width 390 / 640 / 900 / 1200 / 1440.