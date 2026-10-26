# Design System — roofer-A (Felt & Flashing)

## Fonts
- **Display:** Barlow Condensed, static wght 300–900. Preload: `assets/fonts/barlow-condensed/barlow-condensed-700-normal.woff2`. Used for h1, h2, layer labels. Tracking: -0.03em. Line-height: 0.92.
- **Text:** Outfit, variable wght 200–800. Body, captions, form labels. Line-height: 1.5. Measure: 64ch max.
- **Accent:** DM Mono, wght 300–500. Layer numbers (L-01), measurements, sample-price tags, tool readouts. Line-height: 1.4.

## Type scale
Ratio 1.2 (mobile) → 1.333 (desktop). All values use `clamp()`.
- `--fs--1`: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem) — captions, mono labels
- `--fs-0`: clamp(0.875rem, 0.82rem + 0.3vw, 0.9375rem) — secondary text, proof line
- `--fs-1`: clamp(1rem, 0.92rem + 0.4vw, 1.125rem) — body, lead paragraph
- `--fs-2`: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem) — h3, card titles
- `--fs-3`: clamp(1.5rem, 1.2rem + 1.5vw, 2rem) — h2, section heads
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.5rem) — hero h1 (Antonio condensed allows taller max)

Display tracking: -0.03em. Display line-height: 0.92. Body line-height: 1.5. Nothing under 13px (--fs--1 floor is 12px but only for mono labels; body floor is --fs-0 at 14px).

## Space
`--s-1`: 4px | `--s-2`: 8px | `--s-3`: 12px | `--s-4`: 16px | `--s-5`: 24px | `--s-6`: 32px | `--s-7`: 48px | `--s-8`: 64px | `--s-9`: 96px

Section padding (alternating rhythm):
- Tight: 64px (mobile) / 80px (desktop) — tool sections, proof band
- Normal: 96px (mobile) / 120px (desktop) — story layers, services
- Loose: 128px (mobile) / 160px (desktop) — hero bottom, footer top

## Grid
- Desktop (≥1100px): 12 columns, gutter 24px, max-width 1280px, margin auto. Left 2 columns reserved for cross-section signature on desktop.
- Tablet (640–1099px): 8 columns, gutter 20px. Cross-section moves inline above each layer section.
- Mobile (<640px): 4 columns, gutter 16px. Cross-section inline, reduced to icon + label.

## Tones
Each tone sets CSS custom properties. Contrast verified via contrast.mjs.

### t-paper (default)
- `--bg`: #f5efe6 | `--ink`: #1a1814 | `--muted`: #6b5e54 | `--rule`: #d4c8ba | `--accent`: #7a2e28 | `--focus`: #d4a03c
- Button primary: bg #7a2e28, text #ffffff (9.33:1)
- Button secondary: border #1a1814, text #1a1814 (15.50:1)
- Body text: #1a1814 on #f5efe6 = 15.50:1 (pass AAA)

### t-deep
- `--bg`: #2c1a16 | `--ink`: #f5efe6 | `--muted`: #b8a99a | `--rule`: #4a3530 | `--accent`: #d4a03c | `--focus`: #d4a03c
- Button primary: bg #d4a03c, text #1a1814 (7.50:1)
- Button secondary: border #f5efe6, text #f5efe6 (12.8:1 est.)
- Body text: #f5efe6 on #2c1a16 ≈ 12.8:1 (pass AAA)

### t-accent
- `--bg`: #7a2e28 | `--ink`: #f5efe6 | `--muted`: #e8d5c8 | `--rule`: #5a2020 | `--accent`: #d4a03c | `--focus`: #ffffff
- Button primary: bg #f5efe6, text #7a2e28 (8.16:1)
- Body text: #f5efe6 on #7a2e28 = 8.16:1 (pass AAA)

Signal (#d4a03c) never used as body text color. Only for focus rings, decorative rules, and button bg on t-deep.

## Radius
0 everywhere except buttons and inputs: 2px. Pills (tags, status badges): 999px. No rounded cards. Sharp edges echo cut lumber and flashing metal.

## Shadow
Only on floating elements: sticky mobile bar (`0 -2px 12px rgba(26,24,20,.15)`), popover/tool tooltip. No card shadows. Depth comes from tone alternation and the cross-section layering.

## Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- Press: 120ms | UI: 200ms | Page: 520ms | Story: 900ms | Stagger: 60ms

## Components
- **Primary button:** min-height 48px, padding 12px 24px, bg var(--accent), text #fff, radius 2px. Hover: brightness(1.1). Active: scale(.97).
- **Secondary button:** min-height 48px, border 2px solid var(--ink), transparent bg, text var(--ink). Hover: bg var(--ink), text var(--bg).
- **Text button:** no border, underline on hover (scaleX 0→1 from left).
- **Input:** height 48px, border 1px solid var(--rule), radius 2px, focus ring 3px solid var(--focus) offset 3px.
- **Card:** no shadow, 1px border var(--rule), padding var(--s-6), radius 0.
- **Sample tag:** DM Mono --fs--1, uppercase, pill shape, bg var(--rule), ink var(--ink). Always precedes price or rating.
- **Frame:** aspect-ratio 4/3 for process photos, 16/9 for hero strip frames. Grade applied via `.photo-grade` class.
- **Header:** height token `--header-h: 64px` (mobile) / `72px` (desktop). Logo left, phone right, nav center (desktop only).
- **Mobile bar:** fixed bottom, height 56px, primary CTA full width, z-index 100. Visible <768px only.
- **Signature primitive:** `.layer-segment` — SVG path with `clip-path: inset(0 calc((1 - var(--sw-p)) * 100%) 0 0)` driven by scroll. Each segment has a data-layer attribute (deck, membrane, underlayment, shingle, ridge). Static fallback: all segments visible at opacity 1.

## Photo grade
One filter for every photo: `filter: saturate(.85) contrast(1.08) sepia(.1)`. Warm shift matches barn-red palette. Applied to all `img` and video poster via `.photo-grade` class. No overlay on process photos. Hero filmstrip frames get an additional `brightness(.92)` to unify exposure.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`. Forced-colors: `outline: 3px solid CanvasText`. All interactive elements have visible focus. Skip-link at document start.