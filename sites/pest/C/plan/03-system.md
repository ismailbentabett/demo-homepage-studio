# Design System — pest-C (Lamppost Pest & Termite)

## Fonts

- **Display:** EB Garamond (variable, wght 400–800). Preload `assets/fonts/eb-garamond/eb-garamond-400-800-normal.woff2`. Axes in use: `wght` only.
- **Text:** Karla (variable, wght 300–900). No preload (text face loads after display).
- **Accent:** DM Mono (static, 300/400/500). For clock times, prices, labels.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. Fluid clamp values:

- `--fs--1`: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
- `--fs-0`: clamp(0.875rem, 0.82rem + 0.3vw, 1rem)
- `--fs-1`: clamp(1rem, 0.92rem + 0.4vw, 1.2rem)
- `--fs-2`: clamp(1.2rem, 1.05rem + 0.75vw, 1.6rem)
- `--fs-3`: clamp(1.44rem, 1.2rem + 1.2vw, 2.13rem)
- `--fs-4`: clamp(1.73rem, 1.4rem + 1.65vw, 2.84rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem) — EB Garamond is medium-width; 5rem max keeps it readable on 1440.

Display tracking: -0.02em. Line-height: 0.95 for h1, 1.1 for h2–h3. Body: 18px (1.125rem), line-height 1.55, measure 62ch. Lead paragraph: `--fs-1`, weight 450. Nothing under 14px (--fs--1 floor).

## Space

`--s-1`: 4px · `--s-2`: 8px · `--s-3`: 12px · `--s-4`: 16px · `--s-5`: 24px · `--s-6`: 32px · `--s-7`: 48px · `--s-8`: 64px · `--s-9`: 96px.

Section padding (vertical): tight 64px (`--sec-y-tight`), normal 112px (`--sec-y`), loose 144px (`--sec-y-loose`). Horizontal: `--sec-x`: clamp(1.25rem, 4vw, 6rem). Blueprint alternates tight / normal / loose.

## Grid

12 columns desktop, 8 tablet, 4 mobile. Gutter 24px desktop, 16px mobile. Max content width: 1280px. No margin column (stacked headline family does not need one).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-paper (primary dark)
- `--bg`: #1A1F2E · `--ink`: #E8E4DC · `--muted`: #A8A49C · `--rule`: #2C3345 · `--accent`: #D4943A · `--focus`: #D4943A
- Button primary bg: #D4943A, text: #0F1219. Secondary border: #D4943A, text: #E8E4DC.
- Contrast: ink/paper 10.2:1 ✓ · accent/paper 5.8:1 ✓ · focus/paper 5.8:1 ✓

### t-deep
- `--bg`: #0F1219 · `--ink`: #E8E4DC · `--muted`: #8A8680 · `--rule`: #1A1F2E · `--accent`: #D4943A · `--focus`: #D4943A
- Button primary bg: #D4943A, text: #0F1219.
- Contrast: ink/deep 13.8:1 ✓ · accent/deep 7.9:1 ✓ · focus/deep 7.9:1 ✓

### t-mid
- `--bg`: #2C3345 · `--ink`: #E8E4DC · `--muted`: #B0ACA4 · `--rule`: #3D4458 · `--accent`: #D4943A · `--focus`: #D4943A
- Contrast: ink/mid 7.9:1 ✓ · accent/mid 4.7:1 ✓ · focus/mid 4.7:1 ✓

### t-accent (streetlamp gold band)
- `--bg`: #D4943A · `--ink`: #0F1219 · `--muted`: #2C2418 · `--rule`: #B8903E · `--accent`: #0F1219 · `--focus`: #0F1219
- Button primary bg: #0F1219, text: #E8E4DC.
- Contrast: ink/accent 5.8:1 ✓ · focus/accent 5.8:1 ✓

### t-light (for sample report card only)
- `--bg`: #F5F3EB · `--ink`: #1A1F2E · `--muted`: #5A5650 · `--rule`: #D4D0C8 · `--accent`: #C97B3A · `--focus`: #C97B3A
- Contrast: ink/light 12.4:1 ✓ · accent/light 4.6:1 ✓ · focus/light 4.6:1 ✓

## Radius

0 everywhere except buttons: 2px. Pills (tags, clock face border): 999px. No rounded cards.

## Shadow

Only on sticky mobile bar: `0 -2px 12px rgba(0,0,0,0.3)`. No other shadows.

## Motion tokens

- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- `--dur-press`: 120ms
- `--dur-ui`: 200ms
- `--dur-page`: 520ms
- `--dur-story`: 900ms
- `--dur-stagger`: 60ms

## Components

- **Buttons:** Primary (gold bg, dark text), secondary (gold border, light text), text (gold underline). All ≥ 48px tall, padding 0 24px.
- **Input:** Dark bg (#1A1F2E), light border (#2C3345), focus ring gold. Height 48px.
- **Card:** Dark bg with 1px rule border, no shadow. Hover: glow rule grows from left.
- **Tag:** Pill shape, mono type, 24px height. "Sample" tag uses t-light background.
- **Frame:** Aspect ratio container with photo grade filter. Border: 1px solid var(--rule).
- **Header:** `--header-h`: 64px. Transparent over hero, solid t-deep after scroll.
- **Mobile bar:** Sticky bottom, 64px tall, shadow above. Tel + Book buttons side by side.
- **Signature primitive:** `.dusk-clock` — a 48px circular SVG clock face with hour hand rotated via `--sw-p * 180deg`. `.lamp-glow` — a 2px gold line with radial gradient glow (box-shadow: 0 0 8px #D4943A40). Both drawn once here, reused in every section.

## Photo grade

All photos: `filter: saturate(0.7) contrast(1.1) brightness(0.85) sepia(0.15)`. This cools the stock photos toward indigo dusk and warms highlights toward streetlamp gold. Overlay on hero strip only: linear-gradient(to bottom, transparent 40%, #1A1F2E 100%) at 60% opacity.

## Focus

`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`. Forced-colors: buttons keep 2px border, links keep underline.