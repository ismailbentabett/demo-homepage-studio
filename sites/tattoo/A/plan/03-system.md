# tattoo-A · Design system (copy into :root)

## Fonts
- Display: **Instrument Serif** 400 normal + 400 italic. Preload ONLY `assets/fonts/instrument-serif/instrument-serif-400-normal.woff2`.
  No synthetic bold: never set font-weight >400 on display (`font-synthesis: none`).
- Text: **Hanken Grotesk** variable 100-900 (normal + italic). Weights used: 400 body, 450 lead, 600 labels/buttons, 700 prices.
- Accent: **Caveat** 500 (variable 400-700). Pencil annotations only, ≥ 1.25rem, max 6 on the page, color graphite.
- Stacks: `--f-display:"Instrument Serif","Times New Roman",serif; --f-text:"Hanken Grotesk",system-ui,sans-serif; --f-hand:"Caveat",cursive;`
- Labels/tabs: Hanken 600, `font-size:var(--fs--1)`, `letter-spacing:.08em`, uppercase, `font-variant-numeric:tabular-nums`.

## Type scale (1.2 → 1.333)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px labels, never below 13 */
--fs-0:  clamp(1.0625rem, 1.02rem + .2vw, 1.1875rem); /* body 17-19px */
--fs-1:  clamp(1.25rem, 1.15rem + .45vw, 1.5rem);
--fs-2:  clamp(1.5rem, 1.3rem + .9vw, 2rem);
--fs-3:  clamp(1.8rem, 1.45rem + 1.6vw, 2.75rem);
--fs-4:  clamp(2.15rem, 1.6rem + 2.6vw, 3.75rem);
--fs-h1: clamp(2.9rem, min(10.5vw, 10.5svh) + .1rem, 6.25rem); /* condensed face: allowed to 6.25rem */
```
- Display: line-height .94 (h1) / 1.0 (h2), `letter-spacing:-.02em` (h1 -.025em), `text-wrap:balance`. Italic for the
  transferred word in each heading ("Drawn *for you*.") colored `--accent` on light tones only.
- Body: line-height 1.5, `max-width:66ch`, `text-wrap:pretty`. Lead: `--fs-1`, weight 450, line-height 1.42.
- Numbers (prices, hours, phone, days): `tabular-nums`.

## Space
`--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:120px; --s-11:160px;`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(104px, 12vw, 160px)`.
Sheet overlap: `--overlap: clamp(16px, 3vw, 40px)` (a band's sheet pulls up over the previous with `margin-top:calc(var(--overlap) * -1)`).

## Grid
- 12 cols ≥ 1100 / 8 cols 640-1099 / 4 cols < 640; gutter `clamp(16px, 2vw, 24px)`; max width 1320px; page margin `clamp(20px, 5vw, 64px)`.
- **Register rail** (≥ 1100): col 1 of 12 holds the sticky sheet tab (`position:sticky; top:calc(var(--header-h) + 24px)`):
  "02 · drawing". Content in cols 2-12. < 1100 the tab sits inline above the heading.
- Use `minmax(0,Nfr)` for every multi-column row.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| Tone | bg | ink | muted | rule | accent | focus | btn bg/ink |
|---|---|---|---|---|---|---|---|
| `t-paper` | #F5F2EA | #17151C (16.17) | #55525A (6.84) | #8E86A0 (3.09, rule only) | #4B36A6 (7.89) | #4B36A6 | #4B36A6 / #FFFFFF (8.83) |
| `t-light` (sheet/inputs) | #FFFFFF | #17151C (18.09) | #55525A (≥6.84) | #8E86A0 | #4B36A6 (8.83) | #4B36A6 | #4B36A6 / #FFFFFF |
| `t-mid` (vellum gray) | #E6E2DA | #17151C (14.00) | #4E4B54 (6.61) | #8E86A0 | #4B36A6 (6.83) | #4B36A6 | #4B36A6 / #FFFFFF |
| `t-deep` | #1C1924 | #F5F2EA (15.46) | #A9A4B2 (7.11) | rgba(245,242,234,.22) | #B9ABEB (8.31) | #B9ABEB | #B9ABEB / #1C1924 (8.31) |
| `t-violet` (one band only: CTA) | #4B36A6 | #F5F2EA (7.89) | #C9C2D6 (5.11) | rgba(245,242,234,.35) | #F5F2EA | #F5F2EA (7.89) | #F5F2EA / #4B36A6 (7.89) |
Never: #B9ABEB text on #4B36A6 (4.24), #4B36A6 on #1C1924 (1.95), #8E86A0 as text (3.09).
Rhythm: deep bands never touch (deep → paper/mid → deep). Violet band appears once (CTA before footer) and may touch the deep footer.

## Radius, rules, shadow
- Radius: **2px everywhere** (sheets, inputs, cards, buttons). No pills.
- Rules: 1px `var(--rule)`; signature transfer lines 1.5px `var(--accent)`; stencil dashes `stroke-dasharray: 6 4`.
- Shadow: only the sheet lift + mobile bar + popover: `--shadow-sheet: 0 1px 0 rgba(23,21,28,.08), 0 10px 24px -14px rgba(23,21,28,.28)`;
  `--shadow-float: 0 -8px 24px -12px rgba(23,21,28,.35)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --d-press:120ms; --d-ui:200ms; --d-page:520ms; --d-story:900ms; --stagger:60ms;`
Lenis lerp .1. Press `:active{transform:scale(.97)}`. Text rises 24px/500ms; photos unclip `inset(0 0 100% 0)→inset(0)`;
sheets slide up 40px + land; lines draw (DrawSVG or stroke-dashoffset). FAQ, deposit ledger: no animation.

## Components
- `--header-h: 72px` (64px < 640). Header: t-paper at 92% + 8px backdrop blur, 1px bottom rule; wordmark in Instrument
  Serif 1.6rem + small "VN" register monogram; right: phone icon link (48px) + "Book a consult" button.
- **Buttons** (min-height 52px, padding 0 24px, Hanken 600 `--fs-0`, radius 2px):
  primary bg `--btn-bg` color `--btn-ink`; secondary 1.5px border `currentColor`, transparent bg; text button = link
  with hairline underline that scales on hover. Icon buttons 48×48.
- **Input:** t-light bg #FFFFFF, 1px #8E86A0 border (non-text, 3.09 ≥ 3 ✓), min-height 52px, label above in Hanken 600
  `--fs--1`, focus = outline token. Errors: ink #17151C text + "!" icon + 3px violet left rule (no red: unchecked).
- **Card (service)** = `.sheet` small variant with tab "S1"-"S8".
- **Sample tag:** `.tag` Hanken 600 12.5px→ use 13px min, uppercase, 1px currentColor border, radius 2px, padding 2px 6px: "Sample".
- **Frame (photo plate):** aspect 4/5 (hero) or 3/2 (break), 1px ink border inset 8px paper mat (`padding:8px; background:#FFF`).
- **Mobile bar** (< 900, after hero): fixed bottom, height 64px + safe area, t-paper, `--shadow-float`; "Book a consult"
  (primary, 60%) + "Text a photo" (secondary, 40%), gap 8px.

### Signature primitive (draw once, reuse)
```css
.sheet{position:relative;background:rgba(255,255,255,.86);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
  border:1px solid rgba(23,21,28,.18);border-radius:2px;padding:clamp(20px,3vw,40px);box-shadow:var(--shadow-sheet);
  --peek:6px;transition:transform var(--d-ui) var(--ease-out)}
.sheet::before,.sheet::after{content:"";position:absolute;inset:0;border:1px solid rgba(23,21,28,.14);border-radius:2px;
  background:rgba(255,255,255,.5);z-index:-1;transform:translate(calc(var(--peek)*-1),calc(var(--peek)*-1));transition:transform var(--d-ui) var(--ease-out)}
.sheet::after{transform:translate(calc(var(--peek)*-2),calc(var(--peek)*-2));background:rgba(255,255,255,.3)}
.sheet__tab{position:absolute;top:-1px;left:clamp(20px,3vw,40px);transform:translateY(-100%);background:inherit;
  border:1px solid rgba(23,21,28,.18);border-bottom:0;padding:4px 10px;font:600 var(--fs--1)/1 var(--f-text);
  letter-spacing:.08em;text-transform:uppercase}           /* "03 · stencil" */
.reg{position:absolute;width:18px;height:18px;color:#8E86A0}  /* inline SVG: circle r=6 + crosshair lines 18px */
.reg--tl{top:10px;left:10px}.reg--br{bottom:10px;right:10px}
.transfer{stroke:var(--accent);stroke-width:1.5;fill:none}   /* violet only where a line is transferred */
.transfer--stencil{stroke-dasharray:6 4}
@media (hover:hover){.sheet--lift:hover{transform:translateY(-4px)}.sheet--lift:hover{--peek:10px}}
@media (prefers-reduced-transparency:reduce),(forced-colors:active){.sheet{background:#FFF;backdrop-filter:none}}
```
`.sheet` on t-deep: background rgba(245,242,234,.06), border rgba(245,242,234,.22), text inherits tone ink. The text
inside a sheet sits on ≥ 86% white over paper: effective bg ≈ #FCFBF8, contrast ≥ 16 for ink. Over the hero photo the
sheet goes to .92 alpha + blur 8px and only covers the text column; verify ink on the brightest pixel ≥ 4.5 in render.
Variants: `--hero` (over photo plate), `--step` (process, 5 states), `--slip` (review, overlap 24px, rotate 0 — no tilts,
that's C's pinned look), `--form` (3 steps), `--card` (services), `--result` (estimator), `--end` (footer 06 · yours).
`data-sw-signature` on the process stack wrapper.

### Process drawing (SVG, one file inline, 5 states by class on the wrapper `.draw[data-state="1..5"]`)
botanical sprig + short script word placeholder ("yours"): state 1 `stroke:#55525A; stroke-width:1; filter:url(#wobble)`
(feTurbulence baseFrequency .02, displacement 3) + 2 overdraw paths; 2 clean graphite 1.25px; 3 `.transfer--stencil`
violet; 4 ink #17151C 1.5px solid; 5 ink 1.25px + grey (#55525A at .35) hatching fill + violet check tick "6 wk".

## Photo grade
`--grade: saturate(.8) contrast(1.04) sepia(.06) hue-rotate(-6deg) brightness(1.02)` on every img/poster (cool-warm
paper light, pulls skin away from orange toward the violet/paper palette). Optional overlay on the break photo:
`mix-blend-mode:multiply` layer #E6E2DA at .35 (vellum wash). No duotone on skin.

## Focus + forced colors
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.btn{border:2px solid CanvasText}.sheet::before,.sheet::after{display:none}
  .transfer{stroke:CanvasText}.reg{color:CanvasText}}
```
Focus on paper 7.89, mid 6.83, deep 8.31, violet band 7.89: all ≥ 3 ✓.
