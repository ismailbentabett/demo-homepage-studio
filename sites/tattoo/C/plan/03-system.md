# tattoo-C · Design system (copy into :root)

## Fonts
- `League Gothic` 400 normal: `assets/fonts/league-gothic/league-gothic-400-normal.woff2` → **preload** (only preload).
  Uppercase always. No synthetic bold (`font-synthesis: none`).
- `Barlow` 400, 500, 700 (+ 400 italic): `assets/fonts/barlow/barlow-{400,500,700}-normal.woff2`, `barlow-400-italic.woff2`.
- `Caveat` variable 400-700: `assets/fonts/caveat/caveat-400-700-normal.woff2`, use 700 only, ≥ 1.375rem, sheet codes + ≤ 4 notes.
- Stacks: `--f-display:"League Gothic","Arial Narrow",Impact,sans-serif; --f-text:Barlow,"Segoe UI",Arial,sans-serif;
  --f-hand:Caveat,"Comic Sans MS",cursive;` `font-display:swap` on all.

## Type scale (1.2 mobile → 1.333 desktop; Barlow body 18px)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px labels, never smaller than 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.125rem);  /* 17-18px body */
--fs-1:  clamp(1.275rem, 1.15rem + .5vw, 1.5rem);   /* lead */
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2rem);
--fs-3:  clamp(1.84rem, 1.45rem + 1.8vw, 2.67rem);
--fs-4:  clamp(2.2rem, 1.6rem + 3vw, 3.55rem);      /* section h2 (League Gothic) */
--fs-h1: clamp(3.1rem, min(12vw, 11svh) + .1rem, 6.5rem); /* condensed face: 375px = 3 lines of ≤ 14 chars */
--fs-ribbon: clamp(1.125rem, 1rem + .6vw, 1.5rem);
```
- Display: `line-height:.92; letter-spacing:-.01em; text-transform:uppercase; text-wrap:balance`. h2 line-height .95.
- Ribbon lettering: League Gothic, `letter-spacing:.04em`, line-height 1.
- Body: Barlow 400 18px, `line-height:1.5`, `max-width:66ch`, `text-wrap:pretty`. Lead: Barlow 500 `--fs-1`, lh 1.4.
- Labels: Barlow 700 `--fs--1`, `letter-spacing:.06em`, uppercase. Prices/hours/phone: `font-variant-numeric:tabular-nums`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 8vw, 80px)`, `--pad-normal: clamp(80px, 10vw, 120px)`, `--pad-loose: clamp(104px, 13vw, 160px)`.

## Grid
- 12 cols ≥ 1100px, 8 cols 640-1099, 4 cols < 640. Gutter `clamp(16px, 2vw, 24px)`. `--max: 1320px`; text sections `--max-text: 72ch`.
- Page margin `clamp(16px, 4vw, 48px)`. No margin column. Hero mosaic gap: **6px**, gap color `--ink` (the "glass frame").
- Every grid uses `minmax(0, Nfr)` columns, never `auto`.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| Tone | --bg | --ink | --muted | --rule | --accent (words) | --focus | Contrast (real) |
|---|---|---|---|---|---|---|---|
| `t-wall` (default field, color-led) | #8BB8AF | #1A1714 | #3D3630 | #1A1714 | #1A1714 (red only as shapes here) | #1A1714 | ink 8.13, muted 5.41, focus 8.13 |
| `t-paper` (sheet) | #F3E8CF | #1A1714 | #5A5048 | #1A1714 | #B62D1C | #1A1714 | ink 14.66, muted 6.44, red 5.10 |
| `t-light` (tools/form) | #FAF4E6 | #1A1714 | #5A5048 | #1A1714 | #B62D1C | #1A1714 | ink 16.27, red 5.66 |
| `t-deep` (harbor night) | #12393B | #F3E8CF | #C9DCD6 | rgba(243,232,207,.28) | #E8B030 | #E8B030 | cream 10.30, muted 8.77, mustard 6.38 |
| `t-red` (one band max: price board head / CTA) | #B62D1C | #F3E8CF | #F3E8CF | #1A1714 | #F3E8CF | #F3E8CF | cream 5.10 (body ≥ 18px 500 only) |
| `t-mustard` (tiles, ribbons only) | #E8B030 | #1A1714 | #1A1714 | #1A1714 | #12393B | #1A1714 | ink 9.08, deep 6.38 |
Buttons: primary `#B62D1C` bg / `#FFFFFF` label (6.21) on paper/light/wall/deep; on `t-red` the primary inverts to
`#F3E8CF` bg / `#1A1714` label (14.66). Secondary: transparent, 2px `--ink` border, `--ink` label (on deep: cream border/label).
Never: mustard words on cream (1.61), red words on teal (2.83) or deep (2.01), ink words on red (2.87), cream words on teal.
Rhythm: wall → paper → deep → wall → light → deep … never deep next to deep; t-red ≤ 1 band.

## Radius, rules, shadow
- Radius: **0 everywhere**; buttons + chips are full pills `999px`. Nothing else rounded (pins are circles by nature).
- Rules: **2px solid var(--rule)** for every outline, divider and sheet border (flash outline weight). Hairlines: none.
- Shadow (ink offset, the flash-sheet look, not blur): `--sh-sheet: 3px 3px 0 var(--ink)`; hover `5px 5px 0`.
  Blur shadows only on floating things: `--sh-float: 0 10px 30px rgba(18,57,59,.28)` (mobile bar, popover).

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms;
--t-page:520ms; --t-story:900ms; --stagger:60ms;` Lenis lerp .1. Everything gated by `.sw-motion` +
`prefers-reduced-motion: no-preference`.

## Components
- **Buttons:** min-height 52px, padding 0 24px, Barlow 700 1.0625rem, pill, 2px ink border on all (so the red
  button reads as an outlined flash shape), `box-shadow:var(--sh-sheet)`; `:active{transform:translate(2px,2px) scale(.98);box-shadow:1px 1px 0 var(--ink)}`.
  Primary = red (call). Secondary = outline (text a photo). Text button = Barlow 700 + 2px underline offset 4px, padding-block trick for 48px.
- **Input:** 52px, bg #FAF4E6, 2px ink border, radius 0, label above in Barlow 700 `--fs--1`; error text #B62D1C on light (5.66) + icon.
- **Sheet (card):** bg #F3E8CF, 2px ink border, `--sh-sheet`, padding `--s-6`, two push pins (12px circles, red #B62D1C with
  2px ink ring) at top corners; desktop tilt via `--tilt` (-0.6deg / 0.4deg / -0.3deg, never more); **tilt = 0 under 640px**
  (handyman-B trap: tilts widened the page) and `overflow-x:clip` on every band.
- **Sample tag:** pill, Barlow 700 13px uppercase, bg #1A1714, color #F3E8CF (14.66), text "Sample".
- **Frame (photo):** 2px ink border + `--sh-sheet`; ratios: hero big tile 4:5 (mobile) / fills grid area; story 3:2; detail 1:1.
- **Header:** `--header-h: 68px` (mobile 60px). bg #F3E8CF, 2px ink bottom rule; logo (drawn crane SVG + "{{biz.short}}" League Gothic 1.75rem);
  right: open-now chip + Call button. Nav anchors ≥ 1100 only.
- **Mobile bar (< 900px):** fixed bottom, 64px + safe-area, two halves: Call (red / white label) | Text a photo (cream / ink), 2px ink top rule, `--sh-float`.
- **Logo:** harbor gantry crane silhouette (ink, 2px stroke + fill) with a small mustard lamp at the boom tip; favicon = crane on teal.
- **Drawn flash set (SVG, inline, one sprite):** swallow, anchor, rose, harbor crane, sun-over-wave, heart with ribbon. Style rules:
  3px ink outline, flat fills only from palette (red, mustard, teal #8BB8AF, deep, cream), one black shading block per design,
  no gradients, viewBox 0 0 200 240. These replace photos wherever no honest photo exists.

### Signature primitive: `.ribbon` (draw once, reuse everywhere)
```html
<span class="ribbon ribbon--cream" data-sw-signature style="--sw-p:1">
  <svg class="ribbon__end ribbon__end--l" viewBox="0 0 28 40" aria-hidden="true"><path d="M28 6H2l9 14-9 14h26z"/><path class="ribbon__fold" d="M28 34l-8 6v-6z"/></svg>
  <span class="ribbon__body">Tattoo &amp; Piercing · Long Beach</span>   <!-- tokens in src -->
  <svg class="ribbon__end ribbon__end--r" viewBox="0 0 28 40" aria-hidden="true"><path d="M0 6h26l-9 14 9 14H0z"/><path class="ribbon__fold" d="M0 34l8 6v-6z"/></svg>
</span>
```
```css
.ribbon{--rb:var(--paper);--rk:var(--ink);display:inline-flex;align-items:stretch;font:400 var(--fs-ribbon)/1 var(--f-display);
  letter-spacing:.04em;text-transform:uppercase;color:var(--rk);filter:drop-shadow(2px 2px 0 var(--ink))}
.ribbon__body{background:var(--rb);border-block:2px solid var(--ink);padding:.45em 1em .35em;white-space:nowrap;
  clip-path:inset(0 calc((1 - var(--sw-p,1)) * 50%))}
.ribbon__end{width:1.4em;align-self:stretch;fill:var(--rb);stroke:var(--ink);stroke-width:2;stroke-linejoin:miter;
  transform:rotateY(calc((1 - var(--sw-p,1)) * 90deg));transition:transform var(--t-ui) var(--ease-out)}
.ribbon__end--l{transform-origin:right center}.ribbon__end--r{transform-origin:left center}
.ribbon__fold{fill:var(--ink)}
.ribbon--red{--rb:#B62D1C;--rk:#F3E8CF}      /* cream on red 5.10 */
.ribbon--mustard{--rb:#E8B030;--rk:#1A1714}  /* 9.08 */
.ribbon--deep{--rb:#12393B;--rk:#F3E8CF}     /* 10.30 */
.ribbon--wrap .ribbon__body{white-space:normal}  /* phones: long ribbons wrap, ends stay */
```
Default `--sw-p:1` (fully open) in CSS, so JS-off and reduced motion show every ribbon open. JS sets 0 then animates.
Flip variant (flash rail): `.ribbon--flip` wraps front/back faces, `transform:rotateX(180deg)` on `.is-flipped`, `backface-visibility:hidden`;
reduced motion: both faces stacked, no 3D.

## Photo grade
Warm SoCal afternoon, saturated but unified: `filter: saturate(1.05) contrast(1.06) sepia(.12) hue-rotate(-3deg);` on every img + poster.
Optional overlay on the big hero tile only: `mix-blend-mode:multiply` layer `#8BB8AF` at 12% (pulls skies toward the sea teal).
Photos always inside a 2px ink frame. No duotone (flash color carries the color; photos stay real).

## Focus + forced colors
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
.t-deep :focus-visible{--focus:#E8B030}  .t-red :focus-visible{--focus:#F3E8CF}
@media (forced-colors:active){
  .btn{border:2px solid CanvasText}
  .ribbon__body{border:2px solid CanvasText}
  .ribbon__end,.sheet::before{forced-color-adjust:auto}
  :focus-visible{outline-color:Highlight}
}
```
