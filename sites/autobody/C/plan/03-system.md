# autobody-C · Design system (copy into :root)

## Fonts
- Display: **Instrument Serif** 400 normal + 400 italic (`assets/fonts/instrument-serif/`). Preload ONLY the normal woff2 (`"preload": true`). One weight: hierarchy by size + italic, never faux bold (`font-synthesis: none`).
- Text: **Rethink Sans** variable 400-800 (+ italic). Body 420, strong 650, buttons 650, kickers 600.
- Accent: **JetBrains Mono** 500, `font-variant-numeric: tabular-nums`, uppercase .08em tracking only for kickers ≤ 4 words; numbers (feet, months, ZIPs, sample prices, phone in bar).
```css
--ff-display:"Instrument Serif", "Times New Roman", serif;
--ff-text:"Rethink Sans", system-ui, sans-serif;
--ff-mono:"JetBrains Mono", ui-monospace, monospace;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem);   /* 14-15px, floor 13 */
--fs-0:  clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem);   /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.18rem + 0.45vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.36rem + 0.85vw, 2rem);
--fs-3:  clamp(1.836rem, 1.55rem + 1.45vw, 2.665rem);
--fs-4:  clamp(2.2rem, 1.75rem + 2.3vw, 3.55rem);
--fs-h1: clamp(2.9rem, min(10.5vw, 10.5svh) + .1rem, 6.25rem); /* condensed serif: taller cap allowed */
```
- Display: `letter-spacing:-0.02em; line-height:.94` (h1), `.98` (h2); `text-wrap:balance`. Italic for place/water words ("{{biz.city}}", "the dock").
- Body: line-height 1.55, `max-width:66ch`, `text-wrap:pretty`. Lead: `--fs-1`, weight 440.
- Kicker: mono `--fs--1`, 500, uppercase, `.08em`.

## Space
```css
--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:120px; --s-11:160px;
--pad-tight: clamp(56px, 7vw, 80px);
--pad-normal: clamp(80px, 10vw, 120px);
--pad-loose: clamp(104px, 13vw, 160px);
```

## Grid
12 cols ≥ 1100px / 8 cols 640-1099 / 4 cols < 640. Gutter `clamp(16px, 2vw, 24px)`. Max width `--max: 1320px`; page margin `clamp(20px, 5vw, 64px)`. No margin column; the **stripe** always runs full-bleed (edge to edge) while content stays inside `--max`. `minmax(0,Nfr)` columns only.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink --stripe-top --stripe-bot)
| Tone | --bg | --ink (ratio) | --muted (ratio) | --accent words (ratio) | --focus (ratio) | --rule | primary btn |
|---|---|---|---|---|---|---|---|
| `t-paper` (gel-coat white) | #F6F3EC | #0E2238 (14.52) | #4A5868 (6.56) | #9E3220 (6.46); teal #0F5E66 (6.73) for display accents | #9E3220 (6.46) | rgba(14,34,56,.18) | bg #B83A25 / #FFFFFF (5.72) |
| `t-chalk` (oxidised gel coat, the "below the line" tone) | #E4DFD2 | #0E2238 (12.09) | #3F4F5E (6.33) | #9E3220 (5.38) | #9E3220 (5.38) | rgba(14,34,56,.2) | bg #B83A25 / #FFFFFF (5.72) |
| `t-seafoam` (rainy season tint) | #D6E8E4 | #0E2238 (12.66) | #3F4F5E (6.63) | #9E3220 (5.63); teal (5.87) | #9E3220 (5.63) | rgba(14,34,56,.18) | bg #B83A25 / #FFFFFF (5.72) |
| `t-teal` (Intracoastal field, the lead tone) | #0F5E66 | #F6F3EC (6.73) | #D7ECE9 (6.06) | #FFD9CF (5.71) | #FFD9CF (5.71) | rgba(246,243,236,.28) | bg #F6F3EC / #0E2238 (14.52) — coral is 1.30 on teal, never used here |
| `t-deep` (chart navy) | #0E2238 | #F6F3EC (14.52) | #9FB3C4 (7.45) | #FFB4A3 (9.43) | #FFB4A3 (9.43) | rgba(246,243,236,.2) | bg #B83A25 / #FFFFFF (5.72) (fill vs navy 2.81: shape only, label carries contrast; add 1px #FFB4A3 inset outline) |
Rules: coral #B83A25 is a fill/stripe color, never small text. Navy on teal (2.15) and coral on teal (1.30) = shapes only; on teal the stripe pair becomes `--stripe-top:#0E2238; --stripe-bot:#FFB4A3`. Rejected #E8644C (2.98 on paper) is not in the system.
Rhythm: teal hero → paper → chalk (story) → teal → paper → deep → seafoam → paper → deep footer. Never deep→deep, never teal→teal.

## Radius / rules / shadow
- Radius: **0 everywhere**, pills 999px only for chips (service chips, tabs). Photo frames square; the bow mask is the only curve.
- Rules: 1.5px `var(--rule)`. The stripe is the only heavy line.
- Shadow: only mobile bar + popovers: `0 -8px 24px rgba(14,34,56,.18)`.

## Motion tokens
```css
--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1);
--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;
```
Lenis lerp .1. Text rises 24px/500ms; images unclip `inset(0 0 100% 0)`; stripe draws; numbers in the calc tween; FAQ + claim tabs static.

## Components
- `--header-h: 72px` (64 < 640). Header on teal in hero, turns paper with 1.5px rule after 40px scroll. Right: phone (mono, tel:) + "Send photos" secondary.
- **Primary btn**: min-height 52px, padding 0 24px, radius 0, Rethink 650 `--fs-0`, bg `--btn-bg`, color `--btn-ink`, `:active{transform:scale(.97)}` 120ms. Label: "Call {{biz.phone}}".
- **Secondary btn**: 52px, transparent, 1.5px solid currentColor border, label "Send photos" (the one name everywhere).
- **Text btn**: inline, padding-block 12px / margin-block -12px, coral stripe underline grows on hover.
- **Input**: 52px, bg #FFFFFF on light tones (navy text 16.09), 1.5px border #4A5868 (6.56 on paper ≥ 3), radius 0, focus ring per tone. Labels above, `--fs--1` 600.
- **Card**: bg transparent, 1.5px top rule; on hover the stripe stub (40px) at the top-left grows to full card width.
- **Sample tag**: mono 12.5px→ use 13px min, uppercase, 1.5px border currentColor, padding 2px 8px, radius 999px, text "Sample".
- **Frame**: ratios 4:5 (portrait cards), 3:2 (story), 16:10 (break); grade applied; caption mono `--fs--1` under a 1.5px rule.
- **Mobile bar** (< 900px): fixed bottom, 64px + safe-area, paper bg, 3 cells Call | Text | Send photos, each ≥ 48px, shadow above.
- **Signature primitive (draw once, reuse):**
```css
.stripe{--sw-p:1;position:relative;height:12px;inline-size:100%;
  background:linear-gradient(var(--stripe-top,#0E2238) 0 6px, transparent 6px 9px, var(--stripe-bot,#B83A25) 9px 12px);
  transform:scaleX(var(--sw-p));transform-origin:left;}
.stripe::before{content:"";position:absolute;left:0;top:50%;translate:-100% -50%;inline-size:28px;block-size:20px;
  background:var(--stripe-top,#0E2238);clip-path:polygon(0 0,100% 0,100% 100%,38% 100%);} /* bow chevron: raked stem */
.stripe--v{inline-size:12px;block-size:100%;background:linear-gradient(90deg,var(--stripe-top) 0 6px,transparent 6px 9px,var(--stripe-bot) 9px 12px);transform:scaleY(var(--sw-p));transform-origin:top}
.below-line{background:var(--chalk,#E4DFD2) url(stipple.svg);} /* stipple: inline SVG data-URI, 6% navy dots, 3px grid with jitter */
```
`.sw-motion .stripe{--sw-p:0}` only under JS + no reduced motion; app.js scrubs --sw-p 0→1 as the stripe crosses 85%→55% of the viewport. Forced colors: stripe gets `background:CanvasText; forced-color-adjust:none` off → use `border-block:3px solid CanvasText`.
- Hull SVG (calculator + fallback hero): one `<symbol id="hull">` profile, viewBox 0 0 400 120, sheer line, raked stem at left, flat transom right, stripe at y=78.

## Photo grade
Cool coastal palette: `filter: saturate(.88) contrast(1.06) brightness(1.02) hue-rotate(-4deg);` on every img + video poster. Optional overlay on photos inside teal sections: `mix-blend-mode:multiply` layer `#0F5E66` at 12%. No duotone (keeps white hulls white). Hero bow mask: `clip-path:url(#bow)` from an inline SVG `clipPathUnits="objectBoundingBox"`.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.btn{border:2px solid CanvasText}.stripe{forced-color-adjust:none;background:CanvasText}:focus-visible{outline-color:Highlight}}
```

## Drawn moments (photo library not ready; plan for few photos)
1. Hero fallback: drawn hull (symbol #hull) in gel-coat white on teal with the stripe, chalk stipple below the line.
2. Services split: two line drawings (car side profile, generic, no badge; hull profile) at 1.5px navy as section art.
3. Seasons rail: month glyphs drawn (sun, rain cloud, storm limb, return arrow) at 24px line icons, no photos required.
4. Hull calculator: the stretching hull SVG is the visual.
Photos needed at minimum: hero (hull at a dock or polisher on gel coat), 1 break, 2-4 detail macros. Everything else holds without them.
