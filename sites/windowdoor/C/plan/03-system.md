# windowdoor-C · Design system (copy into :root)

## Fonts
- Display: **Sofia Sans Condensed** `assets/fonts/sofia-sans-condensed/sofia-sans-condensed-1-1000-normal.woff2`
  (variable wght 1-1000) — **preload: true** (only preload). Weights used: 800 h1, 700 h2, 650 stop names, 600 year bands/labels.
- Text: **Public Sans** `assets/fonts/public-sans/public-sans-100-900-normal.woff2` (+ italic file for review quotes).
  Weights 400 body, 500 lead, 650 buttons/labels.
- `font-display: swap`; fallback stacks: display `"Sofia Sans Condensed", "Arial Narrow", sans-serif`; text
  `"Public Sans", Arial, sans-serif`. Numbers: `font-variant-numeric: tabular-nums` (prices, phone, hours, years).

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, min 13 never crossed */
--fs-0:  clamp(1.0625rem, 1.02rem + .2vw, 1.1875rem); /* 17-19 body */
--fs-1:  clamp(1.25rem, 1.15rem + .45vw, 1.5rem);
--fs-2:  clamp(1.5rem, 1.3rem + .9vw, 2rem);
--fs-3:  clamp(1.8rem, 1.45rem + 1.6vw, 2.67rem);
--fs-4:  clamp(2.16rem, 1.6rem + 2.6vw, 3.55rem);
--fs-h1: clamp(2.9rem, min(10.5vw, 10.5svh) + .1rem, 6.25rem); /* condensed face */
```
h1: wght 800, `letter-spacing:-.025em`, `line-height:.92`, `text-transform:none`, `text-wrap:balance`, max 14ch, centered.
h2: `--fs-4`, wght 700, -.02em, lh .98. Stop names: `--fs-3` caps, wght 650, +.04em, lh 1. Labels/kickers: display 600,
`--fs--1`, caps, +.08em. Body `--fs-0`/1.55, measure 64ch. Lead `--fs-1` Public Sans 450 lh 1.45.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`.
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(104px, 12vw, 160px)`.

## Grid
12 cols ≥1100 / 8 cols 640-1099 / 4 cols <640; gutter `clamp(16px, 2vw, 24px)`; `--max: 1280px`; side margin
`clamp(20px, 5vw, 64px)`. **Route gutter**: in route sections, cols 1-2 (≥1100) / col 1 (8-col) hold the river SVG
(`.route-col`), content starts col 3. Under 640: gutter is a 28px left lane (line at x=12px), content padded-left 40px.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| class | bg | ink | muted | rule | accent (words) | focus | primary btn | ratios |
|---|---|---|---|---|---|---|---|---|
| `t-paper` | #EEF0EA | #14324A | #4E5A5E | #14324A33 | #A63A2B | #A63A2B | #A63A2B / #FFF | 11.53 · 6.20 · 5.60 · btn 6.43 |
| `t-mid` | #E2E6DC | #14324A | #4E5A5E | #14324A33 | #A63A2B | #A63A2B | #A63A2B / #FFF | 10.46 · 5.62 · 5.08 · 6.43 |
| `t-light` (cards/white) | #FFFFFF | #14324A | #4E5A5E | #14324A26 | #A63A2B | #A63A2B | #A63A2B / #FFF | 13.25 · 7.12 · 6.43 |
| `t-band` (color band) | #1F4E6E | #FFFFFF | #D7E3EA | #FFFFFF40 | #F2C9A0 | #F2C9A0 | #F2C9A0 / #0F2433 | 8.84 · 6.76 · 5.74 · btn 7.99* |
| `t-deep` | #0F2433 | #EEF0EA | #B9C6CC | #EEF0EA33 | #F2C9A0 | #E07A5F | #F2C9A0 / #0F2433 | 13.84 · 9.09 · 10.32 · ring 5.39 · btn 7.99 |
*deep-on-sand 7.99; sand-on-band 5.74 ≥3 so the sand button edge reads on band.
Brick never on deep (2.46) or band (1.37): on those tones stop dots are coral (#E07A5F, deep) / sand (#F2C9A0, band).
Bark #5A4632 is for year bands/captions on paper (7.75) and mid (7.03) only.

## Shape
Radius: **0 everywhere**, pills **999px** only for buttons and the stop dot (circle). Rules: 1.5px `var(--rule)`; the
route line 3px (2px <640). Shadow only on mobile bar + estimator sticky total: `0 8px 24px -8px #0F243340`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms;
--t-page:520ms; --t-story:900ms; --stagger:60ms`.

## Components
- `.btn` min-height 52px, padding 0 24px, radius 999px, Public Sans 650 `--fs-0`, gap 10px icon 20px.
  `.btn--primary` brick/white (hover #8C2F22); `.btn--secondary` transparent, 1.5px border currentColor, ink text;
  `.btn--text` underline 1.5px offset 4px, hit area via padding-block 12px / margin-block -12px.
  One action name: "Call {{biz.phone}}" / "Text a photo" / "Price it" (same words everywhere).
- Input: 52px tall, 1.5px border #14324A80, radius 0, bg #FFF, label above `--fs--1` 650; error text brick.
- Card: `t-light`, 1.5px rule border, padding `--s-6`, no shadow; hover = brick hairline under title.
- `.sample-tag`: display 600 caps `--fs--1` +.08em, 1.5px border currentColor, padding 2px 8px, radius 999px, bark on light.
- `.frame`: aspect-ratio per slot (break 21/9 ≥900, 4/5 mobile), `overflow:clip`, bg #1F4E6E (duotone base).
- Header: `--header-h: 68px` (60 <640), t-paper, logo = "OC" monogram in a 36px brick ring + {{biz.short}} display 700;
  nav anchors: Stops, Repair or replace, Prices, Reviews, Area; right: tel icon btn 48px + "Price it" primary.
- Mobile bar (<900): fixed bottom, t-deep, 2 equal buttons 56px: Call (sand) + Text a photo (outline paper); safe-area pad.
- **Signature primitives (draw once, reuse):**
  - `.route` SVG: `<path class="route__line" pathLength="1" stroke="#14324A" stroke-width="3" fill="none"
    stroke-linecap="round" style="stroke-dasharray:1;stroke-dashoffset:calc(1 - var(--sw-p,1))">` (gentle S-curves
    ±24px around the gutter centre).
  - `.stop__dot`: 18px circle, `border:3px solid var(--dot,#A63A2B)`, bg transparent → `.is-reached` bg var(--dot),
    200ms; with a 1.5px ring halo scale 1→1.8 opacity 1→0 once (400ms).
  - `.stop__name` display 650 caps; `.stop__years` display 600 bark "Built 1909–1930".
  - `.elev` SVG (viewBox 0 0 120 180): frame rect, head + sill (sill 6px deeper), upper sash group, lower sash
    `<g data-sash>` with `transform: translateY(calc(var(--lift,0) * -38%))`; muntins per type. Stroke 1.5px
    currentColor, `vector-effect: non-scaling-stroke`. Types in one `<symbol>` sprite: `elev-6over1`, `elev-2over2`,
    `elev-casement`, `elev-slider`, `elev-impact-sh`, `elev-french`, `elev-entry-transom`, `elev-jalousie`.
    (Sash lift only on the double-hung types; casement swings via `rotateY(-28deg)` on `[data-leaf]`; slider slides
    `translateX(-45%)` on `[data-panel]` — same `--lift` var.)
  - `.glyph` = same symbols at 28px for price rows and the estimator sketch.

## Photo grade
Every img: `filter: grayscale(1) contrast(1.08) brightness(1.04)` inside a `.duo` frame with an overlay
`::after{background:#1F4E6E;mix-blend-mode:screen;opacity:.0}` → use the two-layer duotone:
`.duo{background:#0F2433} .duo img{mix-blend-mode:luminosity;opacity:.9} .duo::after{content:"";position:absolute;inset:0;
background:linear-gradient(#1F4E6E,#1F4E6E);mix-blend-mode:color;opacity:.85}` → cyanotype-blue print. Text never over
the photo except the break caption on a #0F2433CC plate (paper 13.84 on deep base).

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` per tone (ratios above, all ≥ 5.08).
`@media (forced-colors:active){.btn{border:2px solid CanvasText}.stop__dot{forced-color-adjust:auto;border-color:CanvasText}
.route__line{stroke:CanvasText}}`. Print: route hidden, prices + estimator sheet printed.
