# Design System — carpenter-A

## Fonts
- Display: Young Serif 400 (preload). No variable axes.
- Text: Source Serif 4 200–900, opsz 8–60. Variable wght + opsz in use.
- Accent: DM Mono 300/400/500 normal + italic. For cut numbers, dimensions, tolerances only.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. Body 18px / 1.5 lh, measure 64ch.
- `--fs--1`: clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)
- `--fs-0`: clamp(0.9rem, 0.85rem + 0.25vw, 1rem)
- `--fs-1`: clamp(1.08rem, 1rem + 0.4vw, 1.2rem)
- `--fs-2`: clamp(1.296rem, 1.15rem + 0.73vw, 1.44rem)
- `--fs-3`: clamp(1.555rem, 1.3rem + 1.27vw, 1.728rem)
- `--fs-4`: clamp(1.866rem, 1.45rem + 2.08vw, 2.074rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem) — Young Serif is heavy/rounded; caps at 5rem to avoid blobbing. Tracking -0.02em, lh 0.92. text-wrap: balance.
- Lead paragraph: --fs-1, weight 450, opsz 24, lh 1.55.
- Display tracking: -0.02em. Body tracking: 0. Nothing under 13px.

## Space
`--s-1` 4, `--s-2` 8, `--s-3` 12, `--s-4` 16, `--s-5` 24, `--s-6` 32, `--s-7` 48, `--s-8` 64, `--s-9` 96.
Section padding y: tight 64, normal 96, loose 128. Blueprint alternates.

## Grid
12-col desktop, 8-col tablet, 4-col mobile. Gutter 24px desktop / 16px mobile. Max-width 1280px. Margin column: none (cut rules span full content width).

## Tones
Each sets --bg, --ink, --muted, --rule, --accent, --focus, --btn-bg, --btn-fg. Contrast verified.

### t-paper (default)
--bg: #f4efe6; --ink: #1b2631; --muted: #4a5568; --rule: #c9bfb0; --accent: #c9a24d; --focus: #c9a24d; --btn-bg: #8b3a3a; --btn-fg: #ffffff.
Contrast: ink/paper 13.40:1 ✓; muted/paper 7.05:1 ✓; btn-fg/btn-bg (#fff/#8b3a3a) 6.63:1 ✓; focus/deep 6.40:1 ≥3 ✓.

### t-deep
--bg: #1b2631; --ink: #f4efe6; --muted: #b0bec5; --rule: #3d5060; --accent: #c9a24d; --focus: #c9a24d; --btn-bg: #f4efe6; --btn-fg: #1b2631.
Contrast: ink/deep 13.40:1 ✓; muted/deep 7.12:1 ✓; accent/deep 6.40:1 (large labels only) ✓.

### t-accent (brass band)
--bg: #c9a24d; --ink: #1b2631; --muted: #3d3222; --rule: #a8873a; --accent: #1b2631; --focus: #1b2631; --btn-bg: #1b2631; --btn-fg: #f4efe6.
Contrast: ink/accent 6.40:1 AA body ✓; btn-fg/btn-bg (#f4efe6/#1b2631) 13.40:1 ✓.

### t-mid
--bg: #e8e1d5; --ink: #1b2631; --muted: #4a5568; --rule: #c9bfb0; --accent: #8b3a3a; --focus: #8b3a3a; --btn-bg: #8b3a3a; --btn-fg: #ffffff.
Contrast: ink/mid 11.81:1 ✓; signal/mid 5.62:1 ✓.

## Radius & Shadow
Radius: 0 everywhere except buttons (2px) and sample tags (999px pill). No decorative radius.
Shadow: only on mobile bar and popover (0 4px 12px rgba(27,38,49,.12)).

## Motion tokens
--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1).
Durations: press 120ms, ui 200ms, page 520ms, story 900ms, stagger 60ms.

## Components
- Buttons: primary (.btn), secondary (.btn-ghost), text (.btn-text). Min-height 48px. Padding 0 24px. Font: DM Mono 500 uppercase tracking .05em for primary; Source Serif 4 for secondary/text.
- Input: 48px tall, 1px border var(--rule), focus outline 3px solid var(--focus) offset 3px.
- Card: no shadow, 1px rule top/bottom, padding var(--s-6). Cut-rule primitive sits above.
- Sample tag: .sample-tag { font: 500 11px/1 'DM Mono'; padding 4px 10px; border-radius: 999px; background: var(--accent); color: var(--ink); }.
- Frame: aspect-ratio 3/2 default; overflow hidden; img grade applied.
- Header: --header-h: 64px mobile / 72px desktop. Transparent over hero, t-paper after scroll.
- Mobile bar: sticky bottom, t-deep bg, two buttons (call + quote), hides on scroll down and when #contact visible.
- Cut-rule primitive (.cut-rule): 1px horizontal line with 8px vertical ticks at ends; centered mono label in a paper-colored gap; kerf width driven by --sw-p via clip-path. Drawn once here, reused everywhere.

## Photo grade
All photos: saturate(.85) contrast(1.05) sepia(.08) brightness(.98). Mutes stock variety toward Maine coastal light. No overlay except hero filmstrip frames which get a 10% deep-teal multiply for cohesion.

## Focus
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }. forced-colors: active keeps button borders and cut-rule ticks visible.