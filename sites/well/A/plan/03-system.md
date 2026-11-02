# Design System: well-A

## Tokens

```css
:root {
  /* palette */
  --c-deep: #1A1714;
  --c-paper: #F0EBE3;
  --c-accent: #A0522D;
  --c-signal: #3B7A9E;
  --c-mid: #5C534A;
  --c-ink: #2C2620;

  /* type scale */
  --fs--2: clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem);
  --fs--1: clamp(0.8rem, 0.76rem + 0.2vw, 0.9rem);
  --fs-0: clamp(0.9rem, 0.86rem + 0.2vw, 1rem);
  --fs-1: clamp(1.1rem, 1rem + 0.5vw, 1.35rem);
  --fs-2: clamp(1.4rem, 1.2rem + 1vw, 2rem);
  --fs-3: clamp(1.8rem, 1.4rem + 2vw, 2.8rem);
  --fs-4: clamp(2.4rem, 1.8rem + 3vw, 3.8rem);
  --fs-hero: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem);

  /* spacing */
  --sp-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
  --sp-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1.25rem);
  --sp-md: clamp(1.25rem, 1rem + 1.25vw, 2rem);
  --sp-lg: clamp(2rem, 1.5rem + 2.5vw, 4rem);
  --sp-xl: clamp(3rem, 2rem + 5vw, 6rem);

  /* layout */
  --header-h: 64px;
  --gutter: clamp(1rem, 0.5rem + 2.5vw, 2rem);
  --max-w: 1320px;
  --ruler-w: 48px;

  /* motion */
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
}
```

## Tone classes
- `.t-deep` — background `var(--c-deep)`, text `var(--c-paper)`
- `.t-paper` — background `var(--c-paper)`, text `var(--c-ink)`
- `.t-accent` — background `var(--c-accent)`, text `var(--c-paper)`
- `.t-signal` — background `var(--c-signal)`, text `var(--c-paper)`

## Components
- `.btn` / `.btn-call` / `.btn-ghost` — tap target ≥ 48px, hairline hover grow
- `.frame` — image container with aspect ratio, clip-path reveal
- `.strata-col` — left-edge vertical ruler with depth marks
- `.drill-log-card` — mono-labelled card with depth annotation
- `.sample-tag` — small uppercase label for sample proof
- `.hours` — definition list for open hours
- `.tel-plain` — inline phone link with expanded tap area

## Section rhythm
Hero (t-deep) → Triage (t-paper) → Process (t-deep) → Services (t-paper) → Pricing (t-signal) → Reviews (t-paper) → Area (t-deep) → Contact (t-paper) → Footer (t-deep)

No two dark sections touch. One color band (pricing). One full-bleed break between services and pricing.