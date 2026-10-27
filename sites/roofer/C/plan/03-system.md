# Design System — roofer-C (Hailward Roofing)

## Fonts

- **Display:** EB Garamond, variable wght 400-800. Preload `assets/fonts/eb-garamond/eb-garamond-400-800-normal.woff2`. Axis: `wght`. Italic for month names and almanac labels.
- **Text:** Source Sans 3, variable wght 200-900. No preload (text fallback acceptable). Axis: `wght`.
- **Accent:** DM Mono, static weights 300/400/500. For month tags, ZIP codes, sample-price labels, measurements.

## Type scale

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* 12-14px, captions */
--fs-0:  clamp(0.875rem, 0.8rem + 0.35vw, 1rem);       /* 14-16px, small body */
--fs-1:  clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* 16-18px, body */
--fs-2:  clamp(1.125rem, 1rem + 0.6vw, 1.375rem);      /* 18-22px, lead */
--fs-3:  clamp(1.375rem, 1.1rem + 1.2vw, 2rem);        /* 22-32px, h3/h2 */
--fs-4:  clamp(1.75rem, 1.3rem + 2vw, 2.75rem);        /* 28-44px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem); /* h1, tuned for EB Garamond width */
```

- Display tracking: `-0.02em` (EB Garamond at large sizes).
- Display line-height: `0.95` (h1), `1.0` (h2-h3).
- Body line-height: `1.5`. Measure: `max-width: 65ch`.
- Nothing under `--fs--1` (12px minimum).
- Headings: `text-wrap: balance`. Body: `text-wrap: pretty`.
- Lead paragraph: `--fs-2`, weight 400, `font-variation-settings: "wght" 400`.

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding (vertical):
- Tight: `--sec-y-tight: clamp(56px, 6vh, 80px)`
- Normal: `--sec-y-normal: clamp(96px, 10vh, 120px)`
- Loose: `--sec-y-loose: clamp(128px, 14vh, 160px)`

Horizontal: `--sec-x: clamp(16px, 4vw, 48px)`.

## Grid

- 12-column grid, gutter `--gutter: clamp(16px, 2vw, 24px)`.
- Max content width: `--max-w: 1200px`.
- Margin column (for month ring on desktop): `--margin-col: 80px` right side, collapses to 0 below 1024px.
- Breakpoints: 640px (tablet), 1024px (desktop), 1440px (wide).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`.

### t-light (paper)
```
--bg: #e8edf2; --ink: #1a2430; --muted: #5a6a7a; --rule: #c0c8d0;
--accent: #d4a03c; --focus: #d4a03c; --btn-bg: #1a2430; --btn-ink: #e8edf2;
```
Contrast: ink/paper 13.31:1 (pass), accent/ink 6.64:1 (pass), btn-ink/btn-bg 13.31:1 (pass).

### t-dark (storm slate)
```
--bg: #1a2430; --ink: #e8edf2; --muted: #8a9aaa; --rule: #3a4a5a;
--accent: #d4a03c; --focus: #d4a03c; --btn-bg: #d4a03c; --btn-ink: #1a2430;
```
Contrast: ink/bg 13.31:1 (pass), accent/bg 6.64:1 (pass), btn-ink/btn-bg 6.64:1 (pass).

### t-deep (night slate)
```
--bg: #2c3642; --ink: #e8edf2; --muted: #8a9aaa; --rule: #4a5a6a;
--accent: #d4a03c; --focus: #d4a03c; --btn-bg: #d4a03c; --btn-ink: #1a2430;
```
Contrast: ink/bg 10.40:1 (pass), accent/bg 5.19:1 (pass), btn-ink/btn-bg 6.64:1 (pass).

### t-accent (prairie gold band)
```
--bg: #d4a03c; --ink: #1a2430; --muted: #3a4a30; --rule: #b08020;
--accent: #1a2430; --focus: #1a2430; --btn-bg: #1a2430; --btn-ink: #e8edf2;
```
Contrast: ink/bg 6.64:1 (pass), btn-ink/btn-bg 13.31:1 (pass). Used sparingly for CTAs and callouts only.

### t-paper (mid-light for cards)
```
--bg: #f0f4f8; --ink: #1a2430; --muted: #5a6a7a; --rule: #d0d8e0;
--accent: #d4a03c; --focus: #d4a03c; --btn-bg: #1a2430; --btn-ink: #e8edf2;
```

## Radius & Shadow

- Radius: `--radius: 3px` everywhere (cards, buttons, inputs, frames). No pills except mobile bar buttons (`--radius-pill: 999px`).
- Shadow: only on floating elements (mobile sticky bar, popover). `--shadow-float: 0 4px 12px rgba(26,36,48,0.15)`.

## Motion tokens

```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

No bounce, no elastic. All scroll-driven animations gated under `.sw-motion`.

## Components

- **Buttons:** primary (`--btn-bg`/`--btn-ink`), secondary (transparent bg, border `--ink`, ink text), text (no bg, ink text, underline on hover). Min height 48px. Padding `var(--s-4) var(--s-6)`.
- **Inputs:** border `1px solid var(--rule)`, bg `var(--bg)`, focus outline `3px solid var(--focus)`, offset 3px. Height 48px.
- **Cards:** bg `var(--bg)`, border `1px solid var(--rule)`, radius `var(--radius)`, padding `var(--s-6)`.
- **Sample tag:** inline pill, `--fs--1`, uppercase, tracking `0.05em`, bg `var(--rule)`, ink `var(--ink)`, padding `2px 8px`, radius `var(--radius)`. Always present next to prices.
- **Frame:** photo container with aspect-ratio, overflow hidden, grade filter applied. Border-radius `var(--radius)`.
- **Header:** height `--header-h: 64px`. Logo left, nav center (desktop), CTA right. Sticky on scroll.
- **Mobile bar:** fixed bottom, height 56px, two buttons (Call + Text), shadow-float, z-index 100. Hidden on desktop ≥1024px.
- **Month ring primitive:** SVG circle with 12 segments, current segment filled via CSS custom property `--ring-month` (0-11). Size: 80px desktop, 40px mobile pill. Reused via `data-sw-signature="month-ring"`.

## Photo grade

One filter for all photos:
```css
filter: saturate(0.8) contrast(1.08) sepia(0.06) brightness(0.95);
```
Tuned for storm-slate palette: slightly desaturated, cool-leaning, muted highlights. No overlay by default; optional duotone multiply (`mix-blend-mode: multiply`) in `t-dark` sections using `--bg` color.

## Focus

```css
:focus-visible {
 outline: 3px solid var(--focus);
 outline-offset: 3px;
}
@media (forced-colors: active) {
 button, a, input, select { border: 2px solid ButtonText; }
}
```

Focus color `--focus` passes ≥3:1 on every tone background (verified: #d4a03c on #1a2430 = 6.64:1, on #2c3642 = 5.19:1, on #e8edf2 = 2.36:1 FAIL → use #1a2430 as focus on t-light/t-paper).

Corrected focus per tone:
- t-light, t-paper: `--focus: #1a2430` (ink on paper = 13.31:1)
- t-dark, t-deep, t-accent: `--focus: #d4a03c` (gold on dark = 6.64:1 / 5.19:1)