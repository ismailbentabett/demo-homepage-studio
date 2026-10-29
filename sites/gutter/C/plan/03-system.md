# gutter-C — Design system (copy into :root)

## Fonts
- Display + text: **Rethink Sans** variable `assets/fonts/rethink-sans/` (400-800 normal + italic). Preload the
  normal file only. Display 800 (h1) / 700 (h2-h3, plate names); body 400, labels 500, buttons 600.
- Accent: **Newsreader** italic (200-800, opsz) — Latin names, plate legends, review bylines, captions' first word.
  `font-variation-settings:"opsz" 16` at ≤ 20px, `"opsz" 48` at ≥ 32px. Not preloaded. Never for body or buttons.
- `font-variant-numeric: tabular-nums` on prices, bar labels, ZIPs. `font-feature-settings:"ss01"` off (default).
```css
--f-display:"Rethink Sans",ui-sans-serif,sans-serif; --f-text:"Rethink Sans",ui-sans-serif,sans-serif;
--f-latin:"Newsreader",Georgia,serif;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px labels, never smaller */
--fs-0:  clamp(1.0625rem, 1.03rem + .18vw, 1.1875rem); /* body 17-19px */
--fs-1:  clamp(1.275rem, 1.2rem + .4vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.38rem + .75vw, 2rem);
--fs-3:  clamp(1.836rem, 1.58rem + 1.3vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.8rem + 2vw, 3.555rem);
--fs-h1: clamp(2.6rem, min(8.4vw, 9svh) + .1rem, 5rem); /* Rethink is medium-width: cap at 5rem */
--lh-tight: .94; --lh-head: 1.04; --lh-body: 1.5;
--tr-display: -0.035em; --tr-head: -0.02em; --tr-label: .08em; /* labels uppercase 500 */
--measure: 66ch;
```
h1: 800, `--tr-display`, `--lh-tight`, `text-wrap: balance`, max 13ch. Plate numbers "No. 2": 700, `--fs-4`,
tabular, rust-light on deep / signal on bone.

## Space
```css
--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px;
--s-10:120px; --s-11:160px;
--pad-tight: clamp(56px, 7vw, 80px); --pad-normal: clamp(80px, 9vw, 120px); --pad-loose: clamp(112px, 12vw, 160px);
```

## Grid
12 cols ≥ 1024 / 8 cols 640-1023 / 4 cols < 640. Gutter `clamp(16px, 2vw, 24px)`. `--max: 1320px`,
side margin `clamp(20px, 5vw, 64px)`. Plate layout: a 2-col `minmax(0,5fr) minmax(0,7fr)`: drawing column (sticky
from 640px, `top: calc(var(--header-h) + 24px)`) + text column. Plate number hangs in a 64px margin column at ≥ 1024.

## Tones
| Class | --bg | --ink | --muted | --rule | --accent (text) | --focus | Button |
|---|---|---|---|---|---|---|---|
| t-deep | #0e1712 | #ede7d8 (14.80) | #a9b4a6 (8.49) | rgba(237,231,216,.18) | #9dbb63 (8.45) / rust #e0773f (5.98) | #9dbb63 (8.45) | bg #a8471b, fg #fff (5.86) |
| t-mid | #1f3a2b | #ede7d8 (10.02) | #b5c2a8 (6.62) | rgba(237,231,216,.2) | #9dbb63 (5.72); #e0773f shapes only (4.05 ✗ text) | #9dbb63 (5.72) | bg #a8471b, fg #fff |
| t-paper | #ede7d8 | #17211b (13.40) | #55604f (5.36) | rgba(23,33,27,.2) | #a8471b (4.75); dark moss #4d6b2a (4.93) | #a8471b (4.75) | bg #a8471b, fg #fff |
| t-light | #f6f2e8 | #17211b | #55604f | rgba(23,33,27,.16) | #a8471b | #a8471b | same as paper |
| t-moss (color band) | #9dbb63 | #0e1712 (8.45) | #2b3a1c (5.63) | rgba(14,23,18,.3) | #0e1712 only (rust 2.71 ✗) | #0e1712 (8.45) | bg #0e1712, fg #ede7d8 (14.80) |
`t-light` (#f6f2e8) is only lighter than bone; it reuses the bone pairs (lighter bg, ratios ≥ the bone values).
The builder must re-run `contrast.mjs` if any other value is introduced.

## Radius, rules, shadow
- Radius **2px** everywhere (cards, inputs, frames, buttons); bar cells 0; chips 999px.
- Rules: 1px `var(--rule)`; plate header rule 1px solid ink/bone at 100%; specimen card outer frame 1px + inner 1px
  at 6px inset (double-rule plate).
- Shadow only on the mobile bar and popovers: `0 -8px 24px rgba(0,0,0,.35)`.

## Motion tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1);
--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms; --t-cell:40ms;
```

## Components
- **Buttons:** primary `min-height:52px; padding:0 24px; bg var(--btn-bg); color var(--btn-fg); font 600 var(--fs-0)`,
  leading phone glyph. Secondary: 1.5px outline `currentColor`, transparent bg, same size. Text link: underline
  1px, offset 4px, padding-block 12px (tap target ≥ 48px).
- **Input:** 52px tall, 1px rule border, bg transparent on dark (`rgba(237,231,216,.04)`), label above 500 `--fs--1` uppercase.
  Checkbox chips for trees: 48px tall pill with a tiny leaf/needle SVG glyph.
- **Card / plate:** double rule frame (see Rules), padding `--s-6`, header row: `No. 2` · common name · Latin (Newsreader italic).
- **Sample tag:** `SAMPLE` uppercase 500 `--fs--1`, 1px outline, radius 999px, on every price, review and the license.
- **Frame:** photo inside a 1px rule with 8px bone mat on paper (ratio 4:5 hero inset, 21:9 break). Caption below in
  Newsreader italic `--fs--1` + credit link.
- **Header:** `--header-h: 64px` (72px ≥ 1024). Deep bg, wordmark (initials FG in a 1px-ruled square + name), anchors
  Plates / Tools / Prices / Notes, Call button right. Sticky.
- **Mobile bar (< 720px):** 64px fixed bottom, deep bg, Call (rust, 60%) + Text (outline, 40%), `padding-bottom:
  env(safe-area-inset-bottom)`. Body gets `padding-bottom:64px`.
- **Signature primitive `.season`** (draw once, reuse everywhere):
```css
.season{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:2px;height:var(--bar-h,10px)}
.season > i{border:1px solid var(--rule);background:transparent;transition:background-color var(--t-ui) var(--ease-out)}
.season > i.on{background:var(--accent-fill,#9dbb63);border-color:transparent}
.season > i.now{background:var(--rust-fill,#e0773f)}     /* act-now months */
.season > i.rare{border-style:dashed;border-color:var(--accent-fill)}
.season-months{display:grid;grid-template-columns:repeat(12,1fr);font:500 var(--fs--1)/1 var(--f-text);color:var(--muted)}
```
  Markup: `<div class="season" role="img" aria-label="Drops: October to December">` + 12 `<i>`; month letters row
  under it, `aria-hidden`. On bone, `--accent-fill:#4d6b2a`, `--rust-fill:#a8471b`. Animate fill via a `.fill`
  class on the parent that sets per-cell `transition-delay: calc(var(--i) * var(--t-cell))`; no-JS = filled.
- **Specimen drawing:** inline SVG, `stroke: var(--ink)`, 1.25px, `fill:none`, `vector-effect: non-scaling-stroke`;
  draw = `stroke-dasharray/offset` from pathLength=1.
- **Range map:** inline SVG 4:3, river lines 1.5px moss, service range hatched (45° pattern, 1px moss at 6px),
  scale bar labelled "Not to scale · Sample", compass "N".

## Photo grade
`filter: saturate(.72) contrast(1.06) sepia(.14) brightness(.94)`; overlay `::after` `background:#0e1712;
mix-blend-mode:multiply; opacity:.18` on t-deep only. For hero-C2 add `hue-rotate(-12deg)` to pull the cyan water
toward fir green (no blue on this site).

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.season>i.on,.season>i.now{background:CanvasText;forced-color-adjust:none}
  .btn{border:2px solid ButtonText} :focus-visible{outline-color:Highlight}}
```
