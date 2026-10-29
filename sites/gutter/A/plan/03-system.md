# gutter-A · Design system (copy into :root)

## Fonts
- Display **Aleo** variable 100-900: `assets/fonts/aleo/aleo-100-900-normal.woff2`, **preload** (36.9KB). h1 800, h2 700, h3 650, measurements 500. Italic file not loaded.
- Text **Public Sans** variable: `public-sans-100-900-normal.woff2` (no preload). 400 body, 600 labels/buttons.
- Accent **JetBrains Mono** variable: `jetbrains-mono-100-800-normal.woff2` (no preload). 500, uppercase off, `letter-spacing:.02em`; only ft/in marks, readouts, Sample tags, fitting stamps. Min 13px.
- `font-display:swap`; fallbacks: `Aleo, "Rockwell", Georgia, serif` / `"Public Sans", system-ui, sans-serif` / `"JetBrains Mono", ui-monospace, monospace`.
- All numbers: `font-variant-numeric: tabular-nums`.

## Type scale
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, mono marks, captions */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* 17-18px body */
--fs-1:  clamp(1.25rem, 1.15rem + .4vw, 1.5rem);      /* lead */
--fs-2:  clamp(1.5rem, 1.3rem + .9vw, 2rem);          /* h3 / prices */
--fs-3:  clamp(1.8rem, 1.45rem + 1.6vw, 2.67rem);     /* h2 */
--fs-4:  clamp(2.16rem, 1.6rem + 2.6vw, 3.55rem);     /* section statements */
--fs-h1: clamp(2.5rem, min(8.4vw, 9svh) + .1rem, 4.9rem); /* Aleo is a wide-ish slab: cap 4.9rem */
```
- h1: weight 800, `letter-spacing:-.03em`, `line-height:.96`, `text-wrap:balance`, max 13ch. h2: 700, -.02em, 1.02. Body 1.5, `max-width:66ch`, `text-wrap:pretty`. Mono labels `line-height:1.3`.
- Kicker: Public Sans 600 `--fs--1`, `letter-spacing:.06em`, uppercase, colour `--accent`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(104px, 12vw, 160px)`. Blueprint alternates them.

## Grid
- 12 cols ≥1100px (gutter 24px), 8 cols 640-1099 (gutter 20px), 4 cols <640 (gutter 16px). `--maxw: 1280px`; side margin `clamp(16px, 4vw, 48px)`.
- **Margin column** ≥1100px: `--rail: 64px` fixed at left inside the page margin; holds `.readout` (fall + length). Content grid starts after it (`padding-left: calc(var(--rail) + 24px)`). Below 1100 the readout docks as a small mono chip in the header right (hidden <640).

## Tones (each sets --bg --ink --muted --rule --accent --focus + buttons)
| Tone | --bg | --ink | --muted | --rule | --accent (words) | --focus | btn bg / text |
|---|---|---|---|---|---|---|---|
| `t-paper` (default) | #F7F2E8 | #2B2018 (14.23) | #6B5646 (6.18) | #2B2018 @ 18% | #96471B (5.85) | #1E5A96 (6.36) | #96471B / #FFFFFF (6.53) |
| `t-mid` (fascia tan) | #EADFCB | #2B2018 (12.03) | #6B5646 (5.22) | #2B2018 @ 20% | #96471B (4.95) | #1E5A96 (5.38) | #96471B / #FFFFFF (6.53) |
| `t-light` (cards/inputs) | #FFFFFF | #2B2018 (15.87) | #6B5646 (6.89) | #2B2018 @ 14% | #96471B (6.53) | #1E5A96 | #96471B / #FFFFFF |
| `t-deep` (Mississippi mud) | #241A12 | #F7F2E8 (15.28) | #C8B8A4 (8.80) | #F7F2E8 @ 16% | #E0874F (6.29) | #7FB0E0 (7.46) | #E0874F / #241A12 (6.29) |
| `t-accent` (copper band) | #96471B | #F7F2E8 (5.85) | #F7F2E8 (no muted grey on copper) | #F7F2E8 @ 30% | #FFFFFF (6.53) | #FFFFFF (6.53) | #2B2018 / #FFFFFF (15.87) |
Never: #1E5A96 on #241A12 (2.40), copper #96471B/#A4501F on #241A12 as text (~3.0, strokes only). The copper `.run` line on t-deep switches to #E0874F. On t-accent, the run turns #F7F2E8.

## Radius, rules, shadow
- Radius: **2px everywhere** (cards, inputs, frames, buttons: cut sheet-metal edge); pills only for the Sample tag (`999px`).
- Rules: 1px `var(--rule)`; signature run 3px `var(--run)` (`--run: var(--accent)` on light, #E0874F on deep).
- Shadow only on floating: mobile bar and tool popovers `0 8px 24px rgb(36 26 18 / .18)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`
All motion under `.sw-motion` + `@media (prefers-reduced-motion: no-preference)`.

## Components
- **Buttons** (min-height 48px, padding 0 22px, Public Sans 600 `--fs-0`, radius 2px): `.btn--primary` tone btn colours; `.btn--secondary` transparent, 2px border `currentColor`, ink text; `.btn--text` accent colour, the hanger-strap underline (hover below). `:active{transform:scale(.97)}` 120ms. Phone label always includes `{{biz.phone}}`.
- **Input**: 52px tall, white bg, 1px #6B5646 border (6.89 vs white, fine for 3:1 UI), radius 2px, label above in 600 `--fs--1`; error text #96471B + icon.
- **Card**: `t-light` bg, 1px rule, padding `--s-5`, radius 2px, no shadow; top edge is a 3px run segment when hung.
- **Sample tag**: JetBrains Mono 500 13px, `padding:2px 8px`, radius 999px, border 1px currentColor, text "Sample".
- **Frame**: photo inside 2px radius, 1px rule inset; ratio 4/3 on cards, 3/2 wide; hero panel ratio from viewport, `clip-path: polygon(var(--slant) 0, 100% 0, 100% 100%, 0 100%)` with `--slant: 18%` desktop / 0 mobile (mobile: bottom-slant `polygon(0 0,100% 0,100% 88%,0 100%)`).
- **Header**: `--header-h: 72px` (64px <640), t-paper, 1px bottom rule after scroll; logo = "QI" slab mark in a 3px copper bracket + `{{biz.name}}`; right: Call button (icon + phone ≥640, icon + "Call" <640, 48×48 min).
- **Mobile bar** (<900px, appears after 1 screen): fixed bottom, 64px + `env(safe-area-inset-bottom)`, t-paper, shadow, 3 equal buttons: Call (primary) · Text a photo (sms:) · Quote (#quote). Body gets `padding-bottom:80px`.
- **Signature primitive `.run`** (draw once, reuse everywhere):
  ```css
  .run{--fall:.42deg;position:relative;height:3px;background:var(--run);transform:rotate(var(--fall));transform-origin:0 50%}
  .run::after{content:"";position:absolute;inset:-6px 0 auto 0;height:9px;
    background:repeating-linear-gradient(90deg,var(--run) 0 1px,transparent 1px 80px)} /* 10-ft ticks every 80px */
  .run__mark{font:500 13px/1 "JetBrains Mono",monospace;color:var(--muted)} /* "10 ft", "fall ¼ in" */
  .drop{width:12px;height:12px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--run)}
  ```
  Fittings: inline SVG symbols in one `<svg hidden>` sprite: `#f-endcap #f-hanger #f-seam #f-outlet #f-elbow #f-splash #f-trough5 #f-trough6`, stroke 2px `currentColor`, 48×48 viewBox, colour `var(--run)`. Hanger bracket for cards: `.hanger` 2px × 24px copper strap + 6px screw dot, above each card.
  `.readout` (rail): mono 13px, two lines `90 ft` / `fall 2¼ in`, values written by app.js from scroll; static fallback text = final values.
- **Hover language** (only one): `.btn--text, .card a, nav a` get `::after` 2px copper line `transform:scaleX(0) rotate(.6deg);transform-origin:left` → `scaleX(1) rotate(.6deg)` 200ms `--ease-out`, inside `@media (hover:hover)`.

## Photo grade
Warm palette: `filter: saturate(.82) contrast(1.06) sepia(.12) brightness(1.02)` on every `img`. hero-A2 (white gutter on grey sky) gets an extra overlay `::after{background:#96471B;mix-blend-mode:multiply;opacity:.08}` so the sky goes magnolia-warm, not blue.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){:focus-visible{outline-color:Highlight}.run,.drop,.hanger{background:CanvasText}.btn{border:2px solid ButtonText}}
```
