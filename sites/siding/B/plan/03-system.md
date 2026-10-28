# siding-B · Design system (copy into :root)

## Fonts
- Display: Red Hat Display, variable wght 300-900; used at 800 (h2) / 900 (h1). **Preload** `assets/fonts/red-hat-display/*-normal.woff2` (the only preload).
- Text: Onest, variable wght 100-900; 400 body, 500 lead, 600 labels/buttons.
- Accent: Martian Mono, variable wdth 75-112.5, wght 100-800; readings `font-stretch:87.5%; font-weight:500`, big numerals `font-stretch:100%; font-weight:700`. Always `font-variant-numeric: tabular-nums`. Uppercase header rows +0.06em tracking.
```css
--f-display:"Red Hat Display",ui-sans-serif,sans-serif;
--f-text:"Onest",ui-sans-serif,sans-serif;
--f-mono:"Martian Mono",ui-monospace,monospace;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1:clamp(.8125rem,.78rem + .15vw,.875rem);   /* 13-14px: mono labels only, never below */
--fs-0:clamp(1.0625rem,1rem + .25vw,1.1875rem);   /* 17-19px body */
--fs-1:clamp(1.275rem,1.15rem + .55vw,1.5rem);
--fs-2:clamp(1.53rem,1.3rem + 1vw,2rem);
--fs-3:clamp(1.836rem,1.45rem + 1.7vw,2.666rem);
--fs-4:clamp(2.2rem,1.6rem + 2.6vw,3.555rem);
--fs-h1:clamp(2.6rem,min(8.6vw,9svh) + .1rem,4.9rem);  /* Red Hat Display is wide-ish: cap 4.9rem */
--lh-display:.94; --track-display:-.035em; --lh-body:1.5; --measure:66ch;
```
h1 weight 900, h2 800 at `--fs-4` lh 1.0 tracking -.03em; h3 Onest 600 `--fs-1`. Headings `text-wrap:balance`, p `text-wrap:pretty`.

## Space
```css
--s-1:4px;--s-2:8px;--s-3:12px;--s-4:16px;--s-5:24px;--s-6:32px;--s-7:48px;--s-8:64px;--s-9:96px;--s-10:128px;
--pad-tight:clamp(56px,7vw,80px); --pad-normal:clamp(80px,9vw,112px); --pad-loose:clamp(104px,12vw,152px);
```

## Grid
12 cols ≥ 1100px, 8 cols 640-1099, 4 cols < 640. Gutter `clamp(16px,2vw,24px)`. Max width 1320px, outer margin `clamp(20px,4vw,56px)`.
**Margin column** (the report margin): on ≥ 1100px col 1 is reserved for the page number / test number (`.pg-no`, mono `--fs--1`, sticky top `calc(var(--header-h) + 24px)`), with a 1px `--rule` vertical hairline on its right edge. Content spans cols 2-12. Below 1100 the page number sits inline above the header row.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| class | bg | ink | muted | rule | accent | focus | btn bg / ink | contrast |
|---|---|---|---|---|---|---|---|---|
| `t-paper` (default) | #F5F4F0 | #16191D | #4A5058 | #8A8F98 | #2D3BC8 | #2D3BC8 | #2D3BC8 / #FFF | 16.02 · 7.39 · 7.42 · btn 8.16 |
| `t-light` (sheet) | #FFFFFF | #16191D | #4A5058 | #8A8F98 | #2D3BC8 | #2D3BC8 | #2D3BC8 / #FFF | 17.63 · ≥7.39 · 8.16 |
| `t-mid` (ruled band) | #E6E3DB | #16191D | #4A5058 | #8A8F98 | #2D3BC8 | #2D3BC8 | #2D3BC8 / #FFF | 13.75 · 6.34 · 6.36 |
| `t-deep` | #141B33 | #F5F4F0 | #B9BFCC | rgba(245,244,240,.22) | #A9B4FF | #F2C230 | #F2C230 / #16191D | 15.45 · 9.22 · 8.63 · ring 10.15 · btn 10.52 |
| `t-accent` (Result Ultramarine band) | #2D3BC8 | #FFFFFF | #C9CEDB | rgba(255,255,255,.35) | #FFFFFF | #F2C230 | #FFFFFF / #2D3BC8 | 8.16 · 5.18 · ring 4.87 · btn 8.16 |
Highlighter #F2C230 on light tones = fill behind ink only (ink on it 10.52); never text, never a ring on light (1.52).

## Radius, rules, shadow
- Radius: **0 everywhere** (report paper), buttons and focus ring included.
- Rules: 1px `--rule` hairlines; header rows use 1px top + 1px bottom; tables use 1px row rules; 2px ink rule under the page title. Cell outline 1.5px currentColor.
- Shadow only on the mobile bar and popovers: `0 -6px 24px rgba(20,27,51,.14)`. Report-page sheets in the stack story: `0 1px 0 #8A8F98, 0 12px 28px -18px rgba(20,27,51,.35)` (floating sheets count as floating).

## Motion tokens
```css
--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1);
--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms; --t-cell:40ms;
```

## Components
- **Header** `--header-h:64px` (72px ≥ 1100). Paper bg, 1px bottom rule. Left: wordmark (`{{biz.short}}` in Red Hat Display 900 + mono "SIDING CO. · {{biz.city}}"). Right: 3 anchor links (Compare · Measure · Prices), `tel:` text link in mono, primary button "Book a measure visit".
- **Primary button**: min-height 52px, padding 0 22px, `--btn-bg`/`--btn-ink`, Onest 600 `--fs-0`, radius 0; a 5-cell mini bar (8×8) on the right fills on hover (the signature on the CTA). Hover bg #1F2AA0 (11.06). `:active{transform:scale(.97)}`.
- **Secondary button**: 52px, transparent, 1.5px ink border, ink text; hover: border + text in accent.
- **Text button**: Onest 600, accent, hairline hover underline (hover language), hit area padded to 48px.
- **Input**: 52px, white bg, 1.5px #4A5058 border (7.39 vs paper → ok as UI ≥3), radius 0, label above in mono `--fs--1` uppercase. Focus: ring token. Error: 2px ink border + message in #16191D with a "▲ CHECK" mono prefix (no red needed).
- **Card ("result sheet")**: white bg on paper, 1px `--rule` border, header row at top, padding 24px; no radius, no shadow.
- **Sample tag**: mono `--fs--1` uppercase, 1px currentColor border, padding 2px 6px, text "SAMPLE". Placed on every rating, review block, price and score table.
- **Frame ("specimen plate")**: white mat 12px, 1px rule outer border, mono caption row under the photo: `PLATE 01 · {caption}`, ratio 4:5 (hero), 16:9 (break), 1:1 (details). Mono dimension line SVG optional overlay (ink 1.5px, ticks every 24px, label in mono on white chip).
- **Mobile bar** (< 900px): fixed bottom, 64px + safe-area, white, shadow, 3 equal targets: Call (`tel:{{biz.phoneE164}}`) · Text (`sms:`) · Quote (#contact, accent bg). Each ≥ 48px. Body gets `padding-bottom:80px`.
- **Signature primitive** (draw once, reuse everywhere):
```html
<div class="reading" style="--v:4" data-reading>
  <span class="cells" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  <span class="reading__val">4/5</span><span class="sr-only">Score 4 out of 5</span>
</div>
```
```css
.cells{display:inline-grid;grid-template-columns:repeat(5,var(--cell,12px));gap:3px}
.cells i{width:var(--cell,12px);aspect-ratio:1;box-shadow:inset 0 0 0 1.5px currentColor;background:
  linear-gradient(90deg,var(--accent) calc(var(--f,0)*100%),transparent 0)}
/* --f per cell = clamp(0, var(--v)*var(--p,1) - index, 1); set index via :nth-child custom prop --i:0..4 */
.cells i{--f:clamp(0,calc(var(--v) * var(--p,1) - var(--i)),1)}
.reading__val{font:500 var(--fs--1)/1 var(--f-mono);font-stretch:87.5%;margin-left:10px}
.hdr-row{display:flex;gap:12px;font:500 var(--fs--1)/1 var(--f-mono);font-stretch:87.5%;text-transform:uppercase;
  letter-spacing:.06em;border-block:1px solid var(--rule);padding:10px 0}
.hdr-row>*+*::before{content:"·";margin-right:12px}
```
`--p` (0→1) is driven by JS/ScrollTrigger; **default `--p:1` in CSS** so JS-off and reduced motion show final values. Partial values allowed (squares bar: `--v:4.7`). `--cell:10px` < 640px. Cells sit on deep with `--accent:#A9B4FF`.

## Photo grade
Cool palette: `filter:saturate(.82) contrast(1.06) hue-rotate(-4deg) brightness(1.02)` on every `img`.
B&W archive frame (hero-A2) gets `filter:grayscale(1) contrast(1.08)` + `mix-blend-mode:multiply` over #E6E3DB (paper-toned print). No duotone elsewhere.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.cells i{forced-color-adjust:none;box-shadow:inset 0 0 0 1.5px CanvasText}
  .cells i{background:linear-gradient(90deg,Highlight calc(var(--f,0)*100%),Canvas 0)}
  .btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}}
```
