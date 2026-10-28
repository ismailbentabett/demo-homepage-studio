# appliance-B · Design system (copy into :root)

## Fonts
- Display: Archivo var (`assets/fonts/archivo/archivo-100-900-normal.woff2`, wght 100-900, wdth 62-125) — **preload**.
  Use `font-stretch:125%; font-weight:800` for h1/h2/verdict words; `font-stretch:100%; 700` for h3/card titles.
- Text: Plus Jakarta Sans var (`plus-jakarta-sans-200-800-normal.woff2` + italic), 400 body, 600 strong/buttons.
- Accent: Martian Mono var (`martian-mono-100-800-normal.woff2`), `font-stretch:87.5%`, 500, `font-variant-numeric:tabular-nums`,
  uppercase, `letter-spacing:.04em` for tags; prices/ages/phone in mono.
```css
--ff-display:"Archivo",ui-sans-serif,sans-serif;
--ff-text:"Plus Jakarta Sans",ui-sans-serif,sans-serif;
--ff-mono:"Martian Mono",ui-monospace,monospace;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, floor; nothing under 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.125rem);   /* 17-18px body */
--fs-1:  clamp(1.275rem, 1.15rem + .5vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2rem);
--fs-3:  clamp(1.836rem, 1.45rem + 1.7vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.6rem + 2.6vw, 3.553rem);
--fs-h1: clamp(2.3rem, min(7.4vw, 8.2svh) + .1rem, 4.6rem); /* wide face at 125%: keep ≤ 4.6rem; 390 = 4 lines */
--fs-verdict: clamp(3rem, 10vw, 8rem);  /* the giant FIX / REPLACE word in hero fields, aria-hidden decorative echo */
```
Display: `letter-spacing:-.035em; line-height:.94; text-wrap:balance`. h2 `-.025em`, lh 1.0. Body lh 1.5, `max-width:66ch`,
`text-wrap:pretty`. Mono tags lh 1.2.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight:clamp(56px,7vw,80px)` · `--pad-normal:clamp(80px,9vw,120px)` · `--pad-loose:clamp(104px,12vw,160px)`.

## Grid
12 col ≥1100 (gutter 24, max 1320, side margin `max(20px, 4vw)`), 8 col 640-1099 (gutter 20), 4 col <640 (gutter 16, margin 20).
No margin column. Seam bands are full-bleed; content sits in the grid on top.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent (words) | focus | btn |
|---|---|---|---|---|---|---|---|
| `t-paper` | #F4F0E8 | #1B2120 (14.37) | #5E605B (5.59) | #1B2120 @ 18% | #A8431C (5.30) | #0E4746 (9.19) | #A8431C / #FFF (6.02) |
| `t-sand` | #E7DFD1 | #1B2120 (12.35) | #5E605B (4.80) | #1B2120 @ 20% | #A8431C ≥18px (4.55) | #0E4746 (7.90) | #A8431C / #FFF |
| `t-fix` (copper) | #A8431C | #F4F0E8 (5.30) | #F4F0E8 (no muted tint) | #F4F0E8 @ 35% | #F4F0E8 | #F4F0E8 (5.30) | #1B2120 bg / #F4F0E8 (14.37) |
| `t-new` (teal) | #0E4746 | #F4F0E8 (9.19) | #B9CFCB (6.39) | #F4F0E8 @ 22% | #E9B949 (5.72) | #E9B949 (5.72) | #E9B949 / #1B2120 (8.94) |
| `t-ink` (footer) | #1B2120 | #F4F0E8 (14.37) | #A9ABA5 (7.04) | #F4F0E8 @ 16% | #E9B949 (8.94) | #E9B949 (8.94) | #E9B949 / #1B2120 |
Gold on copper = 3.30: rules/shapes only. On `t-fix` body copy ≥17px weight 500 only, keep paragraphs short.

## Radius / rules / shadow
Radius **0 everywhere**; tags and chips are 0 too (hard-cut, like the seam). Only the mobile bar buttons: 0.
Rules: 1.5px solid `--rule`; seam edge: 3px `#E9B949` line along the diagonal (shape only).
Shadow only on mobile bar + popovers: `0 -8px 24px rgba(27,33,32,.18)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`
`--seam` transitions `var(--t-story) var(--ease-io)` when set by the calculator; scroll-driven updates are unsmoothed.

## Components
- **Buttons ≥48px** (min-height 52px, padding 0 22px, `--ff-text` 600 `--fs-0`): primary = copper/white; on `t-fix` primary flips to ink/bone;
  secondary = 1.5px border currentColor, transparent; text button = underline via the slash hover. `:active{transform:scale(.97)}`.
  Phone label in mono tabular.
- **Input:** 52px, 1.5px ink border, bg #FFFFFF (ink 16.0+), label above in `--fs--1` 600, error text #A8431C on paper (5.30) with icon.
- **Card:** bg inherits tone, 1.5px rule border, padding `--s-5`, 12° clipped top-right corner: `clip-path:polygon(0 0,calc(100% - 28px) 0,100% 28px,100% 100%,0 100%)` (the seam corner).
- **Sample tag:** mono `--fs--1`, 1.5px border currentColor, padding 2px 6px, text "Sample".
- **Frame:** photos 4:3 or 3:2, 0 radius, 1.5px ink border offset 8px behind (pseudo-element), grade below.
- **Header:** `--header-h:64px` (72 ≥1024), bone bg, wordmark "Ohm & Hinge" Archivo 125% 800, call button right.
- **Mobile bar** (<1024): fixed bottom, 64px + safe-area, 3 equal buttons [Call | Text | Check it], ink bg / bone text, gold focus.
- **Signature primitive — `.seam`:**
```css
.seam{--seam:50%;--tilt:12deg;position:relative;isolation:isolate;background:#0E4746}
.seam::before{content:"";position:absolute;inset:0;z-index:-1;background:#A8431C;
  clip-path:polygon(0 0, calc(var(--seam) + 10.6vh) 0, calc(var(--seam) - 10.6vh) 100%, 0 100%);
  transition:clip-path var(--t-story) var(--ease-io)}
/* 10.6vh ≈ tan(12°)×half-height for a 100vh band; builder recomputes per band height in app.js as --dx */
.seam::after{/* 3px gold line on the same diagonal, shape only */}
.vtag{font:500 var(--fs--1)/1.2 var(--ff-mono);font-stretch:87.5%;text-transform:uppercase;letter-spacing:.04em;
  padding:3px 8px;border:1.5px solid currentColor;display:inline-flex;gap:6px}
.vtag[data-v=fix]{color:#A8431C}  .vtag[data-v=new]{color:#0E4746}  .vtag[data-v=call]{color:#1B2120;background:#E9B949;border-color:#E9B949}
.t-new .vtag[data-v=new], .t-fix .vtag{color:#F4F0E8}
```
  Footer variant `.seam--level`: `--tilt:0`, 6px high band, copper left / teal right at `--seam`.

## Photo grade
`filter:saturate(.8) contrast(1.06) hue-rotate(-4deg)` (cool, no sepia). In `t-new` fields: teal duotone —
image `filter:grayscale(1) contrast(1.1)` under a `#0E4746` layer `mix-blend-mode:multiply` at .55 + `#E9B949` `screen` at .08.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` per tone above.
`@media (forced-colors:active){.seam::before,.seam::after{forced-color-adjust:auto;background:CanvasText} .vtag{border-color:CanvasText} :focus-visible{outline-color:Highlight}}`
