# insulation-C · design system (copy into :root)

## Fonts
- Display: **Anybody** variable `assets/fonts/anybody/anybody-100-900-normal.woff2` (wght 100-900, wdth 50-150) → **preload this file only**.
  `font-stretch:50% 150%` in @font-face. h1: `font-variation-settings:"wdth" 128; font-weight:800`. Pin labels / place names:
  `"wdth" 140; 700`, uppercase, tracking .06em. h2: `"wdth" 120; 780`. h3: `"wdth" 110; 700`.
- Text: **Public Sans** variable `public-sans-100-900-normal.woff2` (+ italic for review quotes): 400 body, 600 labels/buttons, 700 strong.
- Accent: **DM Mono** 400 + 500 (`dm-mono-400-normal`, `dm-mono-500-normal`): bearings, ZIPs, prices, step numbers. `font-variant-numeric:tabular-nums`.
- `font-display:swap`; fallback `"Anybody", "Arial Black", system-ui` with `size-adjust:` not needed.

## Type scale (1.2 mobile → 1.333 desktop)
```
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, captions, mono tags (never < 13px) */
--fs-0:  clamp(1.0625rem, 1rem + .2vw, 1.125rem);   /* 17-18px body */
--fs-1:  clamp(1.25rem, 1.15rem + .45vw, 1.5rem);
--fs-2:  clamp(1.5rem, 1.3rem + .9vw, 2rem);
--fs-3:  clamp(1.8rem, 1.45rem + 1.6vw, 2.67rem);
--fs-4:  clamp(2.16rem, 1.6rem + 2.6vw, 3.55rem);
--fs-h1: clamp(2.4rem, min(7.6vw, 8.6svh) + .1rem, 4.6rem); /* wide face at wdth 128: keep ≤ 4.6rem */
```
h1 line-height .94, tracking -.03em; h2 lh 1.0, -.02em; body lh 1.5, measure `max-width:64ch`. Pin label `--fs--1` wdth 140 uppercase.
375px check: h1 "Built for the snow belt, street by street." must land on 4 lines max; if 5, drop wdth to 118 under 480px.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px --s-11:160px`
Section padding: `--pad-tight: clamp(56px,7vw,80px)`, `--pad-normal: clamp(80px,9vw,120px)`, `--pad-loose: clamp(104px,12vw,160px)`. Blueprint alternates.

## Grid
12 cols ≥ 1100 (gutter 24px), 8 cols 640-1099 (gutter 20px), 4 cols < 640 (gutter 16px). `--max: 1320px`; page margin
`clamp(16px, 4vw, 56px)`. No margin column: the drift band is the cross-section device.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink --band)
| Tone | bg | ink | muted | rule | accent (text) | focus | primary btn | band hatch |
|---|---|---|---|---|---|---|---|---|
| `t-paper` | #F4F6F3 | #13212C (15.07) | #4A5A66 (6.56) | #13212C1f | #A3303A (6.35) / #1D5A8A (6.70) | #1D5A8A (6.70) | #A3303A / #FFF (6.90) | #1D5A8A14 |
| `t-mid` | #D9E2E6 | #13212C (12.46) | #4A5A66 (5.42) | #13212C26 | #A3303A (5.25) | #1D5A8A (5.54) | #A3303A / #FFF | #1D5A8A1a |
| `t-field` (lake, hero) | #1D5A8A | #FFFFFF (7.28) | #DCE7EF (5.80); small labels #C7D6E2 (4.90) | #FFFFFF33 | #FFFFFF; yellow only ≥ 24px or shapes (4.34) | #F2C230 (4.34) | #A3303A / #FFF; secondary: #F2C230 bg / #13212C (9.78) | #FFFFFF2e |
| `t-deep` | #0E2A3F | #FFFFFF (14.77) | #A9BCCB (7.55) | #FFFFFF26 | #F2C230 (8.81) | #F2C230 (8.81) | #F2C230 / #0E2A3F (8.81) | #FFFFFF1f |
| `t-brick` (guarantee band) | #A3303A | #FFFFFF (6.90) | #FFFFFF | #FFFFFF40 | #FFFFFF | #FFFFFF (6.90) | #FFFFFF bg / #A3303A (6.90) | #FFFFFF26 |
Never: yellow text on brick (4.12), yellow body text on field (4.34).

## Radius / rules / shadow
Radius: **0 on everything**, pins and pin chips `999px`. Rules: 1px `var(--rule)`; map shorelines 1.5px; section-seam
band is the only heavy element. Shadow only on mobile bar + popover: `0 8px 24px rgba(14,42,63,.22)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **Buttons** (min-height 52px, padding 0 22px, Public Sans 600 `--fs-0`, radius 0): `.btn--primary` bg --btn-bg, ink --btn-ink;
  `.btn--secondary` 2px border currentColor, transparent; `.btn--text` underline 2px offset 4px, accent colour. Press: translateY(1px) 120ms.
  Phone button shows a DM Mono number.
- **Input**: 52px, 1.5px border `#4A5A66` on paper (6.56), radius 0, label above `--fs--1` 600; focus = ring rule.
- **Card (pin card)**: paper bg, 1px rule, top edge = mini drift band 10px tall (angle via `--band-a`), pin chip overlapping top-left by −14px.
- **Sample tag**: DM Mono `--fs--1` uppercase, 1px border currentColor, padding 2px 6px: "SAMPLE".
- **Frame (photo plate)**: aspect 4/5, 6px white border (#FFF) + 1px rule, rotated −2deg on ≥ 900, a drawn pin "clip" (brick dot) at its top centre tied by a 1px line to the map pin.
- **Header**: `--header-h: 64px` (72 ≥ 900), t-field transparent over hero then t-paper with 1px rule on scroll. Logo = initials `{{biz.initials}}` in a pin ring + `{{biz.short}}` wdth 140.
- **Mobile bar** (< 900): fixed bottom, 60px, t-deep: left half "Call" (yellow bg, deep ink 8.81), right half "Text a photo" (white ink on deep). `padding-bottom: env(safe-area-inset-bottom)`.
- **Signature primitive** (defined once):
```css
.pin{display:inline-flex;align-items:center;gap:10px;font:700 var(--fs--1)/1 "Anybody";font-variation-settings:"wdth" 140;text-transform:uppercase;letter-spacing:.06em;color:var(--accent)}
.pin::before{content:"";inline-size:14px;block-size:14px;border-radius:999px;background:#A3303A;box-shadow:0 0 0 3px var(--bg),0 0 0 4.5px currentColor}
.pin__bearing{font:500 var(--fs--1)/1 "DM Mono";color:var(--muted);letter-spacing:0;text-transform:none}
.pin__bearing::before{content:"↑";display:inline-block;transform:rotate(var(--brg,-22deg));transition:transform var(--t-ui) var(--ease-out)} /* NNW */
.band{--band-a:-14deg;position:absolute;inset-inline:-10%;block-size:clamp(48px,8vw,120px);transform:rotate(var(--band-a));
  background:repeating-linear-gradient(90deg,var(--band) 0 2px,transparent 2px 9px);
  background-position:calc(var(--sw-p,0)*600px) 0;pointer-events:none}
```
Bearings by place (16-point toward Lake Ontario, approximate): Syracuse NNW, North Syracuse NNW, Liverpool NNW, Baldwinsville N,
Cicero NNW, Camillus N, Manlius NW, Fayetteville NW. Label them "toward the lake", never with mileage.

## Photo grade
Single photo (hero-C3, bright sunny sky) → push to overcast upstate: `filter: saturate(.78) contrast(1.06) brightness(.96) sepia(.06) hue-rotate(-4deg)`
+ overlay `::after{background:linear-gradient(180deg,rgba(220,231,239,.28),rgba(14,42,63,0) 55%);mix-blend-mode:screen}` to whiten the sky.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` — per-tone `--focus` above.
`@media (forced-colors:active){.btn{border:2px solid ButtonText}.pin::before{forced-color-adjust:none;background:Highlight}.band{display:none}:focus-visible{outline-color:Highlight}}`
