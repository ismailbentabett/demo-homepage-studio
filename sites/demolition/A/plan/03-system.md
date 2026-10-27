# Design System — demolition-A

## Fonts

- Display: Bitter (variable wght 100-900). Preload: `assets/fonts/bitter/bitter-100-900-normal.woff2`. Axes in use: wght.
- Text: Outfit (variable wght 300-900). No preload. Axes: wght.
- Accent: DM Mono (static 300/400/500). No preload. Used for gauge labels, tool readouts, sample tags.

## Type scale

Ratio 1.2 mobile → 1.333 desktop.

```
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem);   /* 12-13px, captions */
--fs-0:  clamp(0.9rem, 0.85rem + 0.25vw, 1rem);        /* 14-16px, ui */
--fs-1:  clamp(1rem, 0.95rem + 0.3vw, 1.125rem);       /* 16-18px, body */
--fs-2:  clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem);        /* 19-24px, lead */
--fs-3:  clamp(1.44rem, 1.2rem + 1vw, 2rem);            /* 23-32px, h3/h2 */
--fs-4:  clamp(1.73rem, 1.3rem + 1.8vw, 2.66rem);      /* 28-43px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem); /* hero h1, Bitter wide enough */
```

Display tracking: -0.03em. Line-height: 0.92 for h1, 1.0 for h2-h3. Body: 17-19px, line-height 1.5, measure 62ch max. Lead paragraph: `font-variation-settings: "wght" 450; font-size: var(--fs-2)`. Nothing under 13px. Headings: `text-wrap: balance`. Body: `text-wrap: pretty`.

## Space

```
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding (vertical): tight `--sec-y-tight: clamp(56px, 8vw, 80px)`; normal `--sec-y: clamp(96px, 12vw, 120px)`; loose `--sec-y-loose: clamp(128px, 16vw, 160px)`. Horizontal: `--sec-x: clamp(16px, 5vw, 48px)`. Blueprint alternates tight/normal/loose.

## Grid

12 columns desktop, 8 tablet, 4 phone. Gutter: 24px desktop, 16px mobile. Max content width: 1200px. Margin column for Layer Gauge: 64px desktop (gauge lives here), collapses to bottom sheet on phones (<640px).

## Tones

Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`.

### t-paper (light)
- --bg: #e8e4dc; --ink: #1a1c20; --muted: #5c5e66; --rule: #c8c4bc; --accent: #b84a1a; --focus: #b84a1a; --btn-bg: #1a1c20; --btn-ink: #e8e4dc.
- Contrast: ink/bg 13.45:1 ✓; accent/bg (signal) ≥4.5:1 verified; btn-ink/btn-bg 13.45:1 ✓.

### t-deep (dark)
- --bg: #2b2d33; --ink: #e8e4dc; --muted: #9a9ca4; --rule: #3e4048; --accent: #ff5f1f; --focus: #ff5f1f; --btn-bg: #ff5f1f; --btn-ink: #1a1c20.
- Contrast: ink/bg 10.85:1 ✓; accent/bg 5.61:1 ✓; btn-ink/btn-bg 5.61:1 ✓; focus/bg 5.61:1 ≥3 ✓.

### t-mid (transitional)
- --bg: #3a3c44; --ink: #e8e4dc; --muted: #b0b2ba; --rule: #4e5058; --accent: #ff5f1f; --focus: #ff5f1f; --btn-bg: #ff5f1f; --btn-ink: #1a1c20.
- Contrast: ink/bg ~8.5:1 ✓; accent/bg ≥4.5 ✓.

### t-accent (color band, used once)
- --bg: #b84a1a; --ink: #1a1c20; --muted: #3a2010; --rule: #8a3a12; --accent: #1a1c20; --focus: #1a1c20; --btn-bg: #1a1c20; --btn-ink: #e8e4dc.
- Contrast: ink/bg ≥7:1 ✓; btn pair ≥10:1 ✓.

## Radius & shadow

Radius: 0 everywhere except buttons and tags which use 2px (industrial, not soft). Pills (sample tags): 999px. Shadow: only on mobile bar and popovers: `0 4px 12px rgba(0,0,0,.25)`. No card shadows.

## Motion tokens

```
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--stagger: 60ms;
```

## Components

- Buttons: primary (--btn-bg/--btn-ink), secondary (transparent bg, ink border, ink text), text (no bg, accent underline). Min height 48px, padding 0 24px, font-weight 600.
- Input: 48px tall, 1px rule border, focus uses --focus with 3px outline offset 3px.
- Card: no shadow, 1px rule border top, padding var(--s-6), hover = left-rule grow.
- Sample tag: pill shape, DM Mono 12px, uppercase, letter-spacing .05em, bg transparent, border 1px currentColor.
- Frame: aspect-ratio 3/2 for process, 16/9 for break; grade applied via filter.
- Header: --header-h: 64px mobile, 72px desktop. Scrolled state adds bg + shadow.
- Mobile bar: fixed bottom, 56px tall, two buttons (call + quote), hides on scroll-down and when #contact visible.
- Layer Gauge primitive: `.layer-gauge` — vertical rail with 7 rows, each row has `.lg-row[data-layer="n"]` with `.lg-fill` child that scales Y via --sw-p. Drawn once, reused via class.

## Photo grade

All photos: `filter: saturate(.8) contrast(1.08) sepia(.1) brightness(.92)`. This cools the stock warmth into the charcoal/plaster palette. Optional overlay on t-deep sections: `::after { background: rgba(26,28,32,.35); mix-blend-mode: multiply }`. Per-photo object-position set in 05-media.md.

## Focus

`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`. Forced-colors: `@media (forced-colors: active) { .btn { border: 2px solid ButtonText } }`. Never remove outline.