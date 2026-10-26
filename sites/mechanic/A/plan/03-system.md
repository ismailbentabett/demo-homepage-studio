# Design System — mechanic-A

## Fonts
- Display: **Arvo** (slab, 700). Preload `arvo-700-normal.woff2`.
- Text: **Source Sans 3** (variable wght 200-900). Axes: `wght`.
- Accent: **DM Mono** (500). Line numbers, clocks, status chips.

## Type scale
Ratio 1.2 mobile → 1.333 desktop.
- `--fs--1`: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem)
- `--fs-0`: clamp(1rem, 0.95rem + 0.25vw, 1.125rem) (body 18px)
- `--fs-1`: clamp(1.2rem, 1.1rem + 0.5vw, 1.35rem)
- `--fs-2`: clamp(1.44rem, 1.3rem + 0.7vw, 1.62rem)
- `--fs-3`: clamp(1.73rem, 1.5rem + 1.1vw, 2.1rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5rem) (Arvo 700, tracking -0.03em, line-height 0.95)
Body: 18px / 1.55, measure 64ch max. Nothing under 14px.

## Space
`--s-1`=4, `--s-2`=8, `--s-3`=12, `--s-4`=16, `--s-5`=24, `--s-6`=32, `--s-7`=48, `--s-8`=64, `--s-9`=96 px.
Section padding: tight 64px, normal 96px, loose 128px. Blueprint alternates tight/normal.

## Grid
12-col desktop (gutter 24px, max 1200px), 8-col tablet, 4-col mobile. Left margin column for ro-line rail on desktop.

## Tones
### t-paper (default)
- `--bg`: #F5F3EE | `--ink`: #1C1F23 | `--muted`: #8C8A85 | `--rule`: #D6D3CC | `--accent`: #D45A1F | `--focus`: #D45A1F
- Button: bg #D45A1F, text #FFFFFF (4.6:1)
### t-deep
- `--bg`: #2B2E33 | `--ink`: #F5F3EE | `--muted`: #A8A6A1 | `--rule`: #4A4D52 | `--accent`: #E8733A | `--focus`: #E8733A
- Button: bg #E8733A, text #1C1F23 (7.2:1)
### t-accent
- `--bg`: #D45A1F | `--ink`: #FFFFFF | `--muted`: rgba(255,255,255,.7) | `--rule`: rgba(255,255,255,.3) | `--accent`: #1C1F23 | `--focus`: #FFFFFF
- Button: bg #1C1F23, text #F5F3EE (13.8:1)

## Radius & Shadow
Radius: 2px everywhere (form-card feel). Pills: 999px for status chips only.
Shadow: only on mobile bar and popover (`0 4px 12px rgba(28,31,35,.12)`).

## Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- press: 120ms | ui: 200ms | page: 520ms | story: 900ms | stagger: 60ms

## Components
- Buttons: primary (min-h 48px, Arvo 700), secondary (outline), ghost. All ≥48px tap target.
- Input: 48px height, 2px border #D6D3CC, focus ring 3px solid var(--focus) offset 3px.
- Card: `.ro-line` primitive — left mono number, chip pill, description slot, right clock slot. Border-bottom 1px var(--rule).
- Status chip: `.chip[data-status]` — waiting=#8C8A85, doing=#D45A1F (pulse), done=#3A7D5C. Pill shape, DM Mono 500, 12px uppercase.
- Frame: aspect 3/2, grade filter below.
- Header: `--header-h`: 64px. Sticky on scroll-up.
- Mobile bar: sticky bottom, call + book buttons, hides in form view.
- Signature primitive: `.ro-line` with CSS grid (number | chip | desc | clock). Reused via `data-sw-signature="ro-line"`.

## Photo grade
Filter: `saturate(.85) contrast(1.05) sepia(.06)` — cool daylight, slight warmth to match paper tone.
No overlay; photos stay natural.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`
Forced-colors: all borders and chips use CanvasText; status conveyed via text label not color alone.