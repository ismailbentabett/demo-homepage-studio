# windowdoor-B — Design system (copy into :root)

Facts in copy always via tokens ({{biz.hours}}, {{proof.rating}}, {{proof.reviewCount}}…); the strategy's literal proof line is illustrative.

## Fonts
- Display: Red Hat Display, `assets/fonts/red-hat-display/red-hat-display-300-900-normal.woff2` — **preload** (only preload). Weights 800 (h1/h2), 600 (h3).
- Text: Rethink Sans `rethink-sans-400-800-normal.woff2` (+ italic file only if used). 400 body, 600 strong/buttons.
- Accent: Martian Mono `martian-mono-100-800-normal.woff2`, `font-stretch: 87.5%` (wdth axis 75-112.5), 500; caps labels 400 + `letter-spacing:.06em`.
```css
--ff-display:"Red Hat Display",ui-sans-serif,sans-serif;
--ff-text:"Rethink Sans",ui-sans-serif,sans-serif;
--ff-mono:"Martian Mono",ui-monospace,monospace;
```

## Type scale (1.2 → 1.333)
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px, mono labels min 13px */
--fs-0:  clamp(1.0625rem, 1.02rem + .2vw, 1.1875rem); /* body 17-19px */
--fs-1:  clamp(1.275rem, 1.18rem + .45vw, 1.583rem);
--fs-2:  clamp(1.53rem, 1.36rem + .8vw, 2.11rem);
--fs-3:  clamp(1.836rem, 1.55rem + 1.4vw, 2.81rem);
--fs-4:  clamp(2.2rem, 1.75rem + 2.2vw, 3.75rem);
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 4.75rem); /* Red Hat is wide-ish: cap 4.75rem */
```
h1/h2: 800, `letter-spacing:-.035em`, `line-height:.94` (h1) / 1.0 (h2), `text-wrap:balance`. Body line-height 1.5,
`max-width:66ch`, `text-wrap:pretty`. Mono values: `font-variant-numeric:tabular-nums`. Lead: `--fs-1`, 400.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight:clamp(56px,7vw,80px)`, `--pad-normal:clamp(80px,9vw,112px)`, `--pad-loose:clamp(112px,12vw,152px)`.

## Grid
12 cols ≥1100 / 8 cols 640-1099 / 4 cols <640; gutter `clamp(16px,2vw,24px)`; `--max:1320px`; outer margin
`max(20px, 4vw)`. Label stickers span 8/12 (desktop), meaning column = remaining 4. No margin column.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| Tone | bg | ink (ratio) | muted (ratio) | accent words | focus (ratio) | primary btn |
|---|---|---|---|---|---|---|
| `t-deep` | #121519 | #F3EEE4 (15.83) | #A7ABA6 (7.86) | #F2C230 (10.92), data #6FB3D9 (7.95) | #F2C230 (10.92) | bg #F2C230 / ink #121519 (10.92) |
| `t-mid` | #20252B | #F3EEE4 (13.34) | #A7ABA6 (6.62) | #F2C230 (9.21), data #6FB3D9 (6.70) | #F2C230 (9.21) | same |
| `t-paper` | #F1EDE3 | #15181C (15.23) | #5A5E60 (5.60) | #7A5A00 (5.45), data #1D5F86 (5.92) | #1D5F86 (5.92) | bg #15181C / ink #F1EDE3 (15.23); secondary bg #1D5F86 / #FFF (6.92) |
| `t-accent` (label yellow band) | #F2C230 | #121519 (10.92) | #121519 at 100% only (no opacity) | — | #121519 (10.92) | bg #121519 / ink #F2C230 (10.92) |
`--rule`: deep `rgba(243,238,228,.16)`, paper `rgba(21,24,28,.18)`, accent `#121519` — rules and shapes only, never text.
Yellow #F2C230 on paper = 1.43: rules/dog-ear underside only.

## Shape, rules, shadow
Radius `--r:2px` everywhere (stickers, cards, inputs, buttons); pills not used. Rules 1.5px. Shadow only on mobile bar,
popover, and the sticker curl: `--sh-float:0 10px 30px rgba(0,0,0,.35)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms`

## Components
- `--header-h: 68px` (mobile 60px). Header t-deep, wordmark = small sticker "SW" + `{{biz.short}}`; Call button right ≥640.
- `.btn` min-height 52px, padding 0 22px, `--ff-text` 600 `--fs-0`, radius 2px. `.btn--primary` (tone primary), `.btn--secondary`
  1.5px border currentColor transparent bg, `.btn--text` underline hover via scaleX hairline. All get the dog-ear (`.peel--sm`).
- Input: 52px, 1.5px border `--rule`→`--ink` on focus, bg transparent on deep / #FFFFFF on paper (ink 17.80), label mono caps above.
- Card = `.sticker` (below). Sample tag: Martian Mono 13px caps, 1.5px border, padding 2px 6px, text "SAMPLE".
- Frame: photos 4:5 (cover) and 21:9 (break), radius 2px, grade below.
- Mobile bar (<640): fixed bottom 64px + safe-area, t-deep with 1px top rule yellow, three equal buttons Call / Text / Price it, `--sh-float`.
- **Signature primitive `.sticker`** (draw once, reuse):
```css
.sticker{--peel:0;--ear:calc(16px + var(--peel)*56px);position:relative;background:#F1EDE3;color:#15181C;border-radius:var(--r);
  border-top:4px solid #F2C230;padding:var(--s-5);
  clip-path:polygon(0 0,calc(100% - var(--ear)) 0,100% var(--ear),100% 100%,0 100%)}
.sticker::after{content:"";position:absolute;top:0;right:0;width:var(--ear);height:var(--ear);
  background:linear-gradient(225deg,transparent 50%,#F2C230 50%,#d9a91f 100%);
  filter:drop-shadow(-3px 3px 4px rgba(0,0,0,.28));transition:width var(--t-ui) var(--ease-out),height var(--t-ui) var(--ease-out)}
.sticker__row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:var(--s-4);padding-block:var(--s-3);
  border-bottom:1.5px solid rgba(21,24,28,.18);font:500 var(--fs-0)/1.3 var(--ff-mono);font-stretch:87.5%}
.sticker__means{clip-path:inset(0 0 calc((1 - var(--sw-p,1))*100%) 0)} /* meaning under the row */
@media (hover:hover){.sticker:hover,.sticker:focus-within{--peel:.2}}
```
  Variants: `.sticker--cover` (photo inside, ear up to 22% of width), `.sticker--tag` (price tag, a 10px punched hole circle at left via
  radial-gradient mask), `.sticker--askew` (rotate ±1.2deg, reviews), `.sticker--loose` (footer, rotate -4deg, --peel:1).
  JS off / reduced motion: `--peel:.35`, `--sw-p:1` (meanings visible).

## Photo grade
B&W source + dusk palette: `filter: grayscale(1) contrast(1.12) brightness(.92)` then duotone overlay
`mix-blend-mode:multiply` layer #20252B→ and `screen` layer #F2C230 at 14% opacity on highlights (warm porch light). Apply to every img.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}`
`@media (forced-colors:active){.btn{border:2px solid CanvasText}.sticker{border:1px solid CanvasText}.sticker::after{display:none}}`
