# Design System — electrician-B (Torque & Tag Electric)

## Fonts
- **Display:** Oswald (variable wght 200–700). Preload `assets/fonts/oswald/oswald-200-700-normal.woff2`. Axis: `wght`. Tracking: -0.03em on display, line-height 0.92.
- **Text:** Karla (variable wght 100–900). Body 18px / 1.55, measure 64ch max. Lead paragraph: weight 450, `font-variation-settings: "opsz" 24` if axis present (Karla has none; use weight 500 instead).
- **Accent:** DM Mono (300–500). Circuit numbers, amperage pills, sample tags. Tabular numerals always.

## Type scale
Ratio 1.2 mobile → 1.333 desktop.
- `--fs--1`: clamp(0.78rem, 0.74rem + 0.2vw, 0.83rem)
- `--fs-0`: clamp(0.94rem, 0.88rem + 0.3vw, 1rem)
- `--fs-1`: clamp(1.13rem, 1.04rem + 0.45vw, 1.33rem)
- `--fs-2`: clamp(1.35rem, 1.22rem + 0.65vw, 1.78rem)
- `--fs-3`: clamp(1.62rem, 1.43rem + 0.95vw, 2.37rem)
- `--fs-4`: clamp(1.94rem, 1.67rem + 1.35vw, 3.16rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem) — tuned to Oswald condensed width; max 6rem safe. Line-height 0.92, tracking -0.03em, text-wrap: balance.

Body: 18px, line-height 1.55, measure ≤ 64ch. Nothing under 13px. Headings: text-wrap: balance. Numbers: font-variant-numeric: tabular-nums.

## Space
`--s-1` … `--s-9`: 4, 8, 12, 16, 24, 32, 48, 64, 96px.
Section padding sizes:
- tight: 64px y / 16px x
- normal: 96px y / 24px x
- loose: 128px y / 24px x
Blueprint alternates these; never two same-size sections adjacent.

## Grid
12 columns desktop, 8 tablet, 4 mobile. Gutter 24px desktop, 16px mobile. Max-width 1280px. Margin column: 1fr each side at ≥ 1100px for circuit rail overflow.

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-deep (breaker charcoal)
- --bg: #1C1F23
- --ink: #E8E4DC (12.8:1 on bg ✓)
- --muted: #A8A49C (7.2:1 on bg ✓)
- --rule: #3A3F47
- --accent: #E09A15 (6.1:1 on bg ✓)
- --focus: #E09A15 (6.1:1 on bg ✓)
- Button primary: bg #E09A15, ink #1C1F23 (6.1:1 ✓)
- Button secondary: border #E8E4DC, ink #E8E4DC

### t-paper (warm white)
- --bg: #F5F3EE
- --ink: #1C1F23 (15.2:1 on bg ✓)
- --muted: #5A5650 (7.8:1 on bg ✓)
- --rule: #D8D4CC
- --accent: #C43E2A (5.1:1 on bg ✓)
- --focus: #C43E2A (5.1:1 on bg ✓)
- Button primary: bg #1C1F23, ink #F5F3EE (15.2:1 ✓)
- Button secondary: border #1C1F23, ink #1C1F23

### t-mid (panel gray)
- --bg: #3A3F47
- --ink: #E8E4DC (8.1:1 on bg ✓)
- --muted: #B8B4AC (5.6:1 on bg ✓)
- --rule: #525860
- --accent: #E09A15 (5.2:1 on bg ✓)
- --focus: #E09A15
- Button primary: bg #E09A15, ink #1C1F23

### t-accent (amber band)
- --bg: #E09A15
- --ink: #1C1F23 (6.1:1 on bg ✓)
- --muted: #3A2A10 (7.4:1 on bg ✓)
- --rule: #B87A0A
- --accent: #1C1F23
- --focus: #1C1F23
- Button primary: bg #1C1F23, ink #F5F3EE
- Use sparingly: one section max. Never for body text paragraphs.

Focus ring: `:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`. Forced-colors: `.btn { border: 2px solid CanvasText }`.

## Radius
2px everywhere (breaker handles, cards, inputs, buttons). No pills except amperage tags (border-radius: 999px). Concentric nesting: inner elements 0px or same 2px.

## Shadow
Only on floating elements: mobile bar (`0 -2px 12px rgba(0,0,0,.25)`), popover/hotspot card. Never on cards or buttons at rest.

## Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- press: 120ms
- ui: 200ms
- page: 520ms
- story: 900ms
- stagger: 60ms

## Components
- **Buttons:** primary/secondary/text, min-height 48px, padding-inline ≥ 24px. Press: scale(.97) 120ms.
- **Input:** bg transparent or paper, border 1.5px rule color, focus uses --focus. Height 48px.
- **Card:** border 1.5px var(--rule), radius 2px, padding var(--s-5). No shadow.
- **Sample tag:** DM Mono 12px, uppercase, tracking .06em, border 1px currentColor, padding 2px 6px, radius 2px.
- **Frame:** aspect-ratio per slot, overflow hidden, grade applied. Radius 2px.
- **Header:** height token `--header-h: 64px`. Transparent over hero, solid bg after scroll.
- **Mobile bar:** sticky bottom, height 64px, hides on scroll-down and when #contact visible. Primary call button + secondary quote link.
- **Circuit primitive (signature):** `.circuit { display: flex; align-items: center; gap: var(--s-3); }` with `.circuit__num` (DM Mono, 14px), `.circuit__handle` (24×12px rounded rect, rotates 90deg on .is-on, transition 200ms var(--ease-out)), `.circuit__label` (Caveat 20px or Karla 16px fallback, clip-path wipe), `.circuit__amps` (DM Mono pill, 12px, border-radius 999px). Reused via `data-sw-signature="panel-schedule"`.

## Photo grade
One filter for every photo and video poster:
`filter: saturate(.8) contrast(1.1) brightness(.92) sepia(.05) hue-rotate(-2deg);`
Tuned to breaker charcoal palette: slightly desaturated, cool-shifted, darkened to match deep tone. Applied globally via `img, video[poster]` selector. Per-photo object-position written in plan/05-media.md.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`
Forced-colors media query preserves button borders and circuit handle visibility. Skip-link styled off-screen until focused, then fixed top-left with accent bg.