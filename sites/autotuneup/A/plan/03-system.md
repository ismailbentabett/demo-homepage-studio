# Design System — autotuneup-A (Quarter Hour Tune-Up)

## Fonts

- **Display:** Unbounded (variable, wght 200–900). Preload `assets/fonts/unbounded/unbounded-200-900-normal.woff2`. Used for h1, station numbers, stacked hero lines. Variable axis `wght` in use; no `wdth`. Tracking -0.03em on display sizes.
- **Text:** Figtree (variable, wght 300–900). Body, captions, form labels. Line-height 1.5, measure 60–72ch.
- **Accent:** DM Mono (static, 300/400/500). Lap times, station numbers, mileage readouts, sample tags. Never used for body paragraphs.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. Fluid clamp values:

- `--fs--1`: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem) — mono labels, sample tags
- `--fs-0`: clamp(1rem, 0.95rem + 0.25vw, 1.125rem) — body (17–19px equivalent)
- `--fs-1`: clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem) — h3, card titles
- `--fs-2`: clamp(1.44rem, 1.25rem + 0.95vw, 2rem) — h2, section heads
- `--fs-3`: clamp(1.73rem, 1.4rem + 1.65vw, 2.66rem) — h1 sub-lines
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem) — h1 stacked lines (Unbounded wide allows upper range)

Display tracking: -0.03em. Display line-height: 0.92. Body line-height: 1.5. Lead paragraph: `--fs-1` weight 400. Nothing under 13px (--fs--1 floor is 13.3px at 16px base).

## Space

- `--s-1`: 4px | `--s-2`: 8px | `--s-3`: 12px | `--s-4`: 16px | `--s-5`: 24px | `--s-6`: 32px | `--s-7`: 48px | `--s-8`: 64px | `--s-9`: 96px
- Section padding Y: tight `--sec-y-tight: 56px` (mobile) / `80px` (desktop); normal `--sec-y: 96px` / `120px`; loose `--sec-y-loose: 128px` / `160px`.
- Section padding X: `--sec-x: var(--s-5)` mobile, `var(--s-7)` desktop.

## Grid

- 12 columns desktop, 8 tablet (≥768), 4 mobile. Gutter `--gutter: 16px` mobile, `24px` desktop.
- Max content width: `--max-w: 1200px`. Margin column for stopwatch rail: `--rail-w: 64px` desktop (hidden below 960px; becomes top pill on mobile).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`.

### t-paper (default light)
- --bg: #faf7f2 | --ink: #1a1a18 | --muted: #5c5952 | --rule: #d6cfc4 | --accent: #a83a12 | --focus: #a83a12 | --btn-bg: #0f3d3a | --btn-ink: #faf7f2
- Contrast: ink/paper 16.30:1 ✓ | accent/paper 5.99:1 ✓ | muted/paper 7.12:1 ✓ | btn-ink/btn-bg 11.23:1 ✓ | focus/paper 5.99:1 ≥3 ✓

### t-deep (dark teal band)
- --bg: #0f3d3a | --ink: #faf7f2 | --muted: #b8c4c2 | --rule: #2a5e5a | --accent: #e85d26 | --focus: #e85d26 | --btn-bg: #faf7f2 | --btn-ink: #0f3d3a
- Contrast: ink/deep 11.23:1 ✓ | accent/deep 3.44:1 (large text/shapes only, never body) | muted/deep 8.10:1 ✓ | btn-ink/btn-bg 11.23:1 ✓ | focus/deep 3.44:1 ≥3 ✓

### t-accent (signal orange band, used once for CTA or proof)
- --bg: #e85d26 | --ink: #1a1a18 | --muted: #3d2a1e | --rule: #c44a1a | --accent: #1a1a18 | --focus: #1a1a18 | --btn-bg: #1a1a18 | --btn-ink: #faf7f2
- Contrast: ink/accent 6.87:1 ✓ | btn-ink/btn-bg 11.23:1 ✓ | focus/accent 6.87:1 ≥3 ✓

### t-mid (transitional, rare)
- --bg: #d6cfc4 | --ink: #1a1a18 | --muted: #5c5952 | --rule: #b0a89c | --accent: #a83a12 | --focus: #a83a12
- Contrast: ink/mid 9.45:1 ✓ | accent/mid 4.52:1 ✓

## Radius & Shadow

- Radius: `--radius: 3px` everywhere except pills (`--pill: 999px`) for lap tags, sample tags, buttons.
- Shadow: only on floating elements (mobile bar, popover). `--shadow-float: 0 4px 12px rgba(15,61,58,0.12)`. No shadows on cards or sections.

## Motion tokens

- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-io: cubic-bezier(.77,0,.175,1)`
- `--dur-press: 120ms` | `--dur-ui: 200ms` | `--dur-page: 520ms` | `--dur-story: 900ms` | `--stagger: 60ms`

## Components

- **Buttons:** primary (t-deep bg on t-paper, t-paper bg on t-deep), secondary (outlined), text. Min-height 48px. Padding 0 var(--s-5). Font: Figtree 500, 1rem.
- **Inputs:** border 1px var(--rule), radius 3px, height 48px, focus outline 3px solid var(--focus) offset 3px.
- **Card:** border 1px var(--rule), radius 3px, padding var(--s-5). No shadow.
- **Sample tag:** DM Mono --fs--1, uppercase, tracking 0.04em, pill shape, border 1px var(--rule), padding 2px 8px.
- **Frame:** aspect-ratio containers with photo grade applied. Ratios: 21/9 (hero strip), 4/3 (process), 16/9 (break), 1/1 (detail).
- **Header:** height `--header-h: 64px`. Logo left, nav center (desktop), phone + book CTA right. Sticky on scroll-up.
- **Mobile bar:** fixed bottom, height 56px, primary CTA + tel link. Hides on scroll-down and over #contact.
- **Signature primitives:** `.sw-rail` (2px vertical rule, var(--rule)), `.sw-lap` (pill with station number + name + time, DM Mono), `.sw-total` (counter readout), `.sw-hand` (SVG stopwatch hand, rotates via --sw-p). Drawn once here; reused in every station section.

## Photo grade

One filter for all photos: `saturate(0.85) contrast(1.05) sepia(0.08) brightness(1.02)`. Tuned to warm paper + teal palette. Optional overlay for hero strip: linear-gradient(90deg, rgba(15,61,58,0.3) 0%, transparent 60%) to protect stacked text. Object-position per slot in media plan.

## Focus

`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`. Forced-colors: `@media (forced-colors: active) { .btn, input, select, textarea { border: 2px solid ButtonText; } }`. Every tone's --focus passes 3:1 against its --bg.