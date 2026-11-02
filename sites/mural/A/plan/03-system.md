# Design System — mural-A

## Tokens

```css
:root {
  /* palette */
  --c-deep: #2A1F3D;
  --c-field: #E8C4B0;
  --c-accent: #6B4C9A;
  --c-green: #3A5F4F;
  --c-chalk: #FDFBF7;
  --c-ink: #1A1612;

  /* tone aliases */
  --t-deep-bg: var(--c-deep);
  --t-deep-fg: var(--c-chalk);
  --t-field-bg: var(--c-field);
  --t-field-fg: var(--c-ink);
  --t-accent-bg: var(--c-accent);
  --t-accent-fg: var(--c-chalk);
  --t-green-bg: var(--c-green);
  --t-green-fg: var(--c-chalk);
  --t-chalk-bg: var(--c-chalk);
  --t-chalk-fg: var(--c-ink);

  /* type scale */
  --fs--2: clamp(0.7rem, 0.66rem + 0.2vw, 0.75rem);
  --fs--1: clamp(0.8rem, 0.74rem + 0.3vw, 0.875rem);
  --fs-0: clamp(0.94rem, 0.86rem + 0.4vw, 1rem);
  --fs-1: clamp(1.1rem, 1rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.4rem, 1.2rem + 1vw, 1.75rem);
  --fs-3: clamp(1.8rem, 1.4rem + 2vw, 2.5rem);
  --fs-4: clamp(2.4rem, 1.8rem + 3vw, 3.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  /* spacing */
  --sp-xs: 0.5rem;
  --sp-sm: 1rem;
  --sp-md: 1.5rem;
  --sp-lg: 3rem;
  --sp-xl: 5rem;
  --sp-section: clamp(4rem, 8svh, 7rem);

  /* header */
  --header-h: 64px;

  /* ease */
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);

  /* grid signature */
  --grid-unit: clamp(24px, 4vw, 48px);
  --grid-line: 1px solid rgba(26,22,18,.12);
}
```

## Fonts
- Display: Barlow Condensed 700 (preload)
- Body: DM Sans 400, 500
- Mono: DM Mono 400

## Modules
reveal, header, menu, mobilebar, lenis, split, rotator, counters, zip, estimator, form, opennow, prefill

## Vendor
gsap, ScrollTrigger, lenis