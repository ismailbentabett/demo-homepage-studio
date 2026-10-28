# insulation-A · Design system (copy into :root)

## Fonts
- Display: **Big Shoulders** `assets/fonts/big-shoulders/big-shoulders-100-900-normal.woff2` (variable wght 100-900, opsz 10-72).
  **Preload this file only.** h1 wght 800 opsz 72; h2 wght 750 opsz 60; level tags wght 700 opsz 10, uppercase, .08em.
  `font-display: swap`; fallback `"Arial Narrow", "Roboto Condensed", sans-serif` with `size-adjust: 88%`.
- Text: **Source Sans 3** `assets/fonts/source-sans-3/source-sans-3-200-900-normal.woff2` (wght 200-900). Body 400, strong 650,
  buttons 650, labels 600. `font-variant-numeric: tabular-nums` on prices, temps, hours, phone.
- No italic file: never `font-style: italic` (use wght or colour for emphasis).

## Type scale
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, labels; nothing under 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem); /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.15rem + .5vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2rem);
--fs-3:  clamp(1.84rem, 1.45rem + 1.8vw, 2.67rem);
--fs-4:  clamp(2.2rem, 1.6rem + 3vw, 3.55rem);       /* h2 */
--fs-h1: clamp(3rem, min(11vw, 11svh) + .1rem, 6.5rem); /* condensed: 3 lines at 375, 2 at 1440 */
--lh-display: .9; --track-display: -.02em; --lh-body: 1.5; --measure: 64ch;
```
h1 Big Shoulders 800 uppercase, `letter-spacing:-.02em`, `line-height:.9`, `text-wrap:balance`. h2 750, lh .95, uppercase.
Level tag: `--fs--1`, 700, uppercase, `letter-spacing:.08em`, Big Shoulders opsz 10.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(112px, 12vw, 160px)`.

## Grid
- `--max: 1320px`; `--gutter: clamp(16px, 2vw, 24px)`; page margin `clamp(16px, 4vw, 48px)`.
- **Riser column** `--riser-w: 64px` (≥ 900px), `40px` (640-899), `24px` (< 640, riser thin 1.5px, tags move above headings).
  Layout: `grid-template-columns: var(--riser-w) repeat(12, minmax(0,1fr))` ≥ 1100; 8 cols 640-1099; 4 cols < 640.
  The riser is ONE absolutely positioned SVG/`div` in `<main>` (left: page margin + riser-w/2), full height; sections leave col 1 empty.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent (words) | focus | btn bg / ink |
|---|---|---|---|---|---|---|---|
| `t-deep` (night) | #0B171C | #EEF1EC (15.97) | #A9BCC2 (9.24) | rgba(169,188,194,.22) | #F2A541 (8.87) | #8FD3E0 (10.88) | #F2A541 / #0B171C (8.87) |
| `t-mid` (lake) | #1C2E36 | #EEF1EC (12.33) | #A9BCC2 (7.13) | rgba(169,188,194,.26) | #F2A541 (6.85) | #8FD3E0 (8.41) | #F2A541 / #0B171C (8.87) |
| `t-paper` (rime) | #EEF1EC | #0F1C22 (15.23) | #4A5A60 (6.30) | rgba(15,28,34,.16) | #8A5A12 (5.18) | #1F6F80 (5.05) | #8A5A12 / #FFFFFF (5.91) |
| `t-snow` (snowbank) | #DDE3DD | #0F1C22 (13.31) | #4A5A60 (5.51) | rgba(15,28,34,.18) | #8A5A12 (4.53, ≥18px only) | #1F6F80 | #0B171C / #EEF1EC (15.97) |
| `t-ice` (colour band) | #8FD3E0 | #0B171C (10.88) | #0B171C at 100% only | rgba(11,23,28,.25) | #0B171C | #0B171C | #0B171C / #EEF1EC |
Ice-on-paper (1.46) and amber-on-paper (1.80) FAIL: on light tones the riser/stitch shapes use #8A5A12 (amber-dark) and
#1F6F80 (ice-dark); bright amber/ice live on dark tones only.

## Radius, rules, shadow
- Radius **0 everywhere** (sawn section); pills only for the Sample tag and the mobile bar buttons (`999px`).
- Rules: 1px `var(--rule)`; level lines (floor lines in diagrams, section top rules) 2px `currentColor` at 40%.
- Shadow only on mobile bar + popovers: `0 -8px 24px rgba(11,23,28,.35)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms;
--t-story:900ms; --stagger:60ms`. Press: `scale(.98)` 120ms. No bounce, no parallax on text.

## Components
- **Buttons** min-height 52px, padding 0 24px, 650, `--fs-0`, radius 0. Primary: `--btn-bg/--btn-ink` + a 10px stitched notch
  cut into the top-left corner (`clip-path: polygon(10px 0,100% 0,100% 100%,0 100%,0 10px)`); hover draws 3 stitches over the
  notch. Secondary: 2px border currentColor, transparent. Text link: underline 1px, offset 4px, 2px on hover.
- **Input**: 52px, 1.5px border var(--muted), bg transparent, focus border var(--focus) + outline. Labels above, 600, `--fs--1`.
- **Card (level card)**: no radius, 1px rule border, padding var(--s-6), notch top-left (same clip-path, 14px), level tag on
  the top rule, `--fs-2` title in Big Shoulders 750.
- **Sample tag**: pill, 1px border currentColor, `--fs--1`, 600, uppercase .06em, text "Sample".
- **Frame** (the one photo): gable-topped clip-path `polygon(0 18%,50% 0,100% 18%,100% 100%,0 100%)`, aspect 4/3 desktop, 3/4
  mobile, 1px inner rule at the "floor lines" (absolutely positioned at 46% and 74%), photo grade below.
- **Header**: `--header-h: 72px` (64 < 640). t-deep, logo mark = a 5-sided gable glyph with an amber riser + 2 ice stitches,
  wordmark Big Shoulders 750. Right: hours "Open now" (opennow), phone (tabular), Price it button.
- **Mobile bar** (< 900): fixed bottom, 64px, t-deep, 3 equal cells Call (amber) | Text | Price it, shadow token.
- **Signature primitive** (draw once, reuse):
```html
<span class="riser-notch" aria-hidden="true"><svg viewBox="0 0 40 24"><path class="gap" d="M0 12H12M28 12H40"/>
<path class="st" d="M14 6l4 12"/><path class="st" d="M19 6l4 12"/><path class="st" d="M24 6l4 12"/></svg></span>
```
```css
.riser-notch .gap{stroke:var(--accent);stroke-width:2}
.riser-notch .st{stroke:var(--seal,#8FD3E0);stroke-width:2.5;stroke-linecap:square;stroke-dasharray:14;stroke-dashoffset:14;
  transition:stroke-dashoffset var(--t-ui) var(--ease-out)}
.riser-notch .st:nth-child(3){transition-delay:60ms}.riser-notch .st:nth-child(4){transition-delay:120ms}
.is-sealed .riser-notch .st,.no-motion .riser-notch .st{stroke-dashoffset:0}
.t-paper,.t-snow{--seal:#1F6F80;--accent:#8A5A12}
```
  Riser: `<div class="riser" data-sw-signature="heat-riser">` with an SVG line (amber) + overlay line (ice, scaleY from top via
  scroll scrub); chevrons `▲` drawn as 8px SVG polylines every 160px on the unsealed part. Level tag:
  `<p class="lvl"><span>L2</span> Attic <span class="tmp">Sample January night · −8 °F out / 68 °F in</span></p>`.
- **Drawn diagrams** (all non-hero visuals): 1.5px strokes, `currentColor` lines on dark, joists/rafters as parallel lines,
  insulation as a stipple pattern (`<pattern>` of 2px dots at 6px), warm air as amber arrows, sealed points as ice stitches.
  Every SVG has `role="img"` + `<title>`, or `aria-hidden` when the text says the same.

## Photo grade
`.ph img{filter:saturate(.8) contrast(1.06) brightness(.92) hue-rotate(-6deg)}` + overlay `linear-gradient(180deg,rgba(11,23,28,.0) 40%,rgba(11,23,28,.55))`
with `mix-blend-mode:multiply` to sink the bright snow foreground into the deep band. Lit windows stay warm (no sepia).

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}`. Forced colors: `@media (forced-colors:active){.riser,.riser-notch{display:none}
.btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}}`.
