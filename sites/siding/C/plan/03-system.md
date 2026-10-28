# siding-C · Design system (copy into :root)

## Fonts
- Display **Gloock 400** (`assets/fonts/gloock/gloock-400-normal.woff2`, **preload: true**, the only preload). Single weight: hierarchy by size, never faux-bold (`font-synthesis:none`).
- Text **Karla 200-800 variable** (`assets/fonts/karla/karla-200-800-normal.woff2`): body 400, lead 450, labels/buttons 700. No italic file: emphasis = weight 600, never `font-style:italic` on Karla.
- `--f-display:"Gloock",Georgia,serif; --f-text:"Karla",Arial,sans-serif;`

## Type scale (1.2 -> 1.333)
```
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px chips/meta; floor 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem); /* 17-19 body */
--fs-1:  clamp(1.25rem, 1.12rem + .5vw, 1.5rem);
--fs-2:  clamp(1.5rem, 1.25rem + 1vw, 2rem);
--fs-3:  clamp(1.8rem, 1.4rem + 1.8vw, 2.75rem);
--fs-4:  clamp(2.15rem, 1.6rem + 2.8vw, 3.75rem);
--fs-h1: clamp(2.4rem, min(7.4vw, 8.5svh) + .1rem, 4.5rem);  /* Gloock is wide + heavy: cap 4.5rem */
--fs-mask: clamp(4.25rem, 20.5vw, 19rem);           /* FISHSCALE word: 1 line at 390 (~80px), ~295px at 1440 */
```
Display: `letter-spacing:-.025em; line-height:.96; text-wrap:balance`. Mask word `-.04em`, lh .82. Body lh 1.5, `max-width:66ch`, `text-wrap:pretty`. Chips/labels: Karla 700, `--fs--1`, uppercase, `letter-spacing:.12em`. Numbers `tabular-nums`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight:clamp(56px,7vw,80px)`, `--pad:clamp(80px,9vw,120px)`, `--pad-loose:clamp(104px,12vw,160px)`. Any section carrying a `.cut` adds `var(--cut-h)` to its bottom padding.

## Grid
12 cols >=1100 / 8 cols 640-1099 / 4 cols <640; gutter `clamp(16px,2vw,24px)`; `--max:1320px`; side margin `--margin:clamp(20px,5vw,64px)`. Plate layout: number + swatch cols 1-5, text cols 6-12 (desktop); stacked on 4 cols.

## Tones (ratios measured with tools/contrast.mjs)
| class | --bg | --ink | --muted | --rule | --accent (words) | --focus | button bg / fg |
|---|---|---|---|---|---|---|---|
| `t-paper` | #F4EEDF | #1E2A2B (12.76) | #55605A (5.65) | rgba(30,42,43,.18) | #A3412C (5.41) | #A3412C (5.41) | #A3412C / #FFFFFF (6.26) |
| `t-light` (cards, inputs) | #FFFFFF | #1E2A2B (14.77) | #55605A | rgba(30,42,43,.14) | #A3412C (6.26) | #A3412C (6.26) | same |
| `t-mid` (light sage) | #A9BC9E | #1E2A2B (7.29) | #33413B (5.29) | rgba(30,42,43,.25) | ink + underline (accent 3.09 = shapes only) | #1E2A2B (7.29) | #1E2A2B / #F4EEDF (12.76) |
| `t-deep` (sage body) | #3E5A4B | #FFFFFF (7.58) | #D7E0CF (5.58) | rgba(244,238,223,.28) | #F4EEDF (6.55); #E9A58C only >=24px (3.69) | #E9A58C (3.69) | #F4EEDF / #1E2A2B (12.76) |
| `t-accent` (salmon gable) | #E9A58C | #1E2A2B (7.19) | #1E2A2B (no lighter muted) | rgba(30,42,43,.25) | ink + underline | #1E2A2B (7.19) | #1E2A2B / #F4EEDF (12.76) |
| `t-ink` (footer) | #1E2A2B | #F4EEDF (12.76) | #C9D6C0 (9.75) | rgba(244,238,223,.18) | #E9A58C (7.19) | #E9A58C (7.19) | #E9A58C / #1E2A2B (7.19) |

Shape-only colors (fail as text): #E9A58C on paper 1.77; #A3412C on mid 3.09. Cedar #8A5A36 = labels on paper only (5.04). Primary red button on t-deep is NOT used: use the cream button there.
Dark tones for rhythm: `t-deep`, `t-ink`. Color bands: `t-accent`, `t-mid`.

## Radius / rules / shadow
Radius **0** everywhere, buttons included (shingles are square-cut). Rules 1px `var(--rule)`; plate frame 2px `var(--ink)`. Shadow only on the mobile bar + popover: `0 -6px 24px rgba(30,42,43,.18)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;` Lenis lerp .1, wheelMultiplier 1.

## Components
- **Buttons**: min-height 52px, padding 0 24px, Karla 700 `--fs-0`, radius 0. Primary = tone's button pair; secondary = 2px border currentColor on transparent; text button = underline 2px, offset 4px. `:active{transform:scale(.97)}` 120ms.
- **Input**: 52px, bg #FFFFFF, 2px border #1E2A2B, label above (Karla 700 `--fs--1`), error text #A3412C on white (6.26).
- **Plate card** `.plate`: tone bg, 2px ink frame, top-left plate number `PL. 03` (Karla 700 caps; cedar on paper, #33413B on mid, #D7E0CF on deep), padding `--s-6`.
- **Sample tag** `.tag-sample`: Karla 700 13px caps, 1px border currentColor, padding 2px 6px. On every price, rating and review block.
- **Frame** `.frame`: ratio 4/5 or 3/2, `object-fit:cover`; on t-paper a 2px ink border + 8px paper mat (book plate); caption under, Karla `--fs--1` muted, starts "Fig. n".
- **Header**: `--header-h:68px` (60px <640), t-deep; wordmark `{{biz.name}}` in Gloock `--fs-1`; nav Patterns / Prices / Reviews / Area; phone button (cream).
- **Mobile bar** <640: fixed bottom 64px, two halves Call / Text, t-ink with #F4EEDF text, safe-area padding; `body{padding-bottom:64px}`.
- **Signature primitive `.cut`** (Course-Cut Edges). `data-sw-signature` on the hero's cut; every instance has `data-cut="<pattern>"`:
```css
.cut{--cut-h:32px;--cut-w:44px;position:relative;z-index:1;height:var(--cut-h);margin-top:calc(-1*var(--cut-h));
  background:var(--next-bg);   /* the colour of the band below: the next course overlaps this one */
  -webkit-mask:var(--cut-shape) repeat-x 0 100%/var(--cut-w) var(--cut-h);
          mask:var(--cut-shape) repeat-x 0 100%/var(--cut-w) var(--cut-h);
  clip-path:inset(0 calc((1 - var(--sw-p,1)) * 100%) 0 0)}          /* lays L->R; default 1 = complete */
.cut[data-cut=fishscale]{--cut-shape:url("data:image/svg+xml,...")}  /* half-circle butts r22, tile 44x32 */
.cut[data-cut=diamond]  {--cut-shape:url("data:...")}                /* pointed butt, tile 44x32, point 28 */
.cut[data-cut=hexagon]  {--cut-shape:url("data:...")}                /* 3-facet butt, tile 40x32 */
.cut[data-cut=stagger]  {--cut-shape:url("data:...");--cut-h:36px}   /* square butts, 2 rows, widths 44/30/52, 1/2 offset */
.cut[data-cut=clapboard]{--cut-shape:url("data:...");--cut-h:28px}   /* 3 straight drips with a 2px shadow line at 18% */
.cut__tag{position:absolute;right:var(--margin);bottom:calc(100% + 8px)}  /* chip: "Pattern 02 · Fishscale · 1880s" */
```
SVGs are inline data-URIs in style.css (no network). Each SVG draws the shingle butts filled, so the lower band reads as a course lapping the band above. JS sets `--sw-p` 0->1; no JS / reduced motion = 1 (complete). The tag chip uses the upper band's tone colours.
- **Swatch** `.swatch[data-pattern]`: the same 5 SVG shapes as `background` tiles at 2x, drawn in #3E5A4B lines + #E9A58C fills on paper, square 1:1. Used in the pattern book plate, service cards (40px thumb) and footer index tabs.

## Photo grade
All photos: `filter:saturate(.82) contrast(1.06) sepia(.1)`. Hero mask photo: `saturate(.9) contrast(1.12) brightness(1.05)` (letters need punch). Break photo: overlay `linear-gradient(0deg, rgba(62,90,75,.55), rgba(62,90,75,0) 45%)`; its caption sits on a solid t-deep chip, never on the photo.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` (per tone above).
`@media (forced-colors:active){.cut{background:CanvasText;forced-color-adjust:none}.btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}.mask-word{color:CanvasText;background:none;-webkit-text-fill-color:CanvasText}}`
Mask word fallback: without `background-clip:text` support, solid #F4EEDF text (6.55 on deep).
