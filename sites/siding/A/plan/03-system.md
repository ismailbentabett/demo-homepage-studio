# siding-A · Design system (copy into :root)

## Fonts
- Display: Darker Grotesque, variable wght 300-900, use 800 (h1/h2) and 700 (h3). **Preload** `assets/fonts/darker-grotesque/darker-grotesque-300-900-normal.woff2`.
- Text: Plus Jakarta Sans 200-800 normal (+italic file only if used), 400 body, 500 lead, 700 buttons/labels. Not preloaded.
- Accent: JetBrains Mono 100-800 normal, 500 only: course numbers, inches, squares, prices, hours. `font-variant-numeric: tabular-nums`.
- Fallbacks: `"Darker Grotesque", "Arial Narrow", sans-serif`; `"Plus Jakarta Sans", system-ui, sans-serif`; `"JetBrains Mono", ui-monospace, monospace`.
- Darker Grotesque runs small on the em: scale it up, not tracking out. Never under 22px.

## Type scale
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, labels/mono; min 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem); /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.15rem + .5vw, 1.5rem);   /* lead */
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2rem);
--fs-3:  clamp(1.84rem, 1.5rem + 1.6vw, 2.67rem);   /* h3 display */
--fs-4:  clamp(2.2rem, 1.7rem + 2.6vw, 3.55rem);    /* h2 display */
--fs-h1: clamp(3rem, min(10.5vw, 11svh) + .1rem, 6.25rem); /* tall-narrow face: 375 → 3 lines */
--lh-display: .9; --track-display: -0.02em; --lh-body: 1.5; --measure: 66ch;
```
Display headings `text-wrap: balance`, uppercase NOT used (mixed case reads like boards). Paragraphs `text-wrap: pretty`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px --s-11:160px`
- `--course: clamp(56px, 7vw, 112px)` (the 7-inch course, scaled). Section padding = whole courses:
  tight `padding-block: var(--course)` (56-112 → cap 80 via `min(var(--course), 80px)`), normal `calc(var(--course) * 1.25)` (≈96-120),
  loose `calc(var(--course) * 1.5)` capped 160px. Blueprint alternates tight/normal/loose.

## Grid
12 col ≥ 1100 (gutter 24px, max 1320px, margin `max(20px, 4vw)`), 8 col 640-1099 (gutter 20px), 4 col < 640 (gutter 16px).
Course gutter: first column (≥ 1100: 1 col, ≈88px) holds the mono label `C-03 · Wrap`; < 1100 the label sits above the heading.

## Tones
| Class | --bg | --ink | --muted | --rule | --accent (words) | --focus | btn primary (bg/text) | btn secondary |
|---|---|---|---|---|---|---|---|---|
| t-deep | #121B23 | #E9EEF1 (14.88) | #A9B6BF (8.39) | #3A4A57 (rules only) | #F28C4E (7.15) | #9EC6DD (9.59) | #F28C4E / #121B23 (7.15) | 2px #E9EEF1 border, frost text |
| t-mid | #1D2A35 | #E9EEF1 (12.52) | #A9B6BF (7.06) | #3A4A57 | #F28C4E (6.01) | #9EC6DD (8.06) | #F28C4E / #121B23 | frost border |
| t-paper | #EEEBE3 | #131C24 (14.45) | #55616B (5.32) | #C9C3B4 (rules only) | #A4461A (5.08) | #1D5F86 (5.81) | #A4461A / #FFFFFF (6.05) | 2px #131C24 border, ink text |
| t-light | #F7F5F0 | #131C24 (15.80) | #55616B (5.82) | #C9C3B4 | #A4461A (5.55) | #1D5F86 (6.35) | #A4461A / #FFFFFF | ink border |
| t-ember (color band) | #F28C4E | #121B23 (7.15) | #121B23 (no muted grey on ember) | #121B23 at 30% | #121B23 underline | #121B23 (7.15) | #121B23 / #F28C4E (7.15) | 2px #121B23 border |
Ember #F28C4E never carries words on paper/light (2.04). White never on ember (2.43).

## Shape language
- Radius: **0 everywhere** (boards are square-cut); pills only for the Sample tag and chips (999px). No other radius.
- Rules: 1.5px, `var(--rule)`. Signature rules (drip shadow) are gradients, not borders.
- Shadow: only floating things: mobile bar + popovers `0 -8px 24px rgb(8 12 16 / .35)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`
Intro layer stagger 90ms (exception, documented in concept).

## Components
- **Buttons:** min-height 52px, padding 0 24px, Plus Jakarta 700 `--fs-0`, radius 0, `:active{transform:scale(.97)}`. Primary carries a small 6px ember/ink square "nail head" left of the label. Text button: underline 2px offset 6px + hairline hover.
- **Input:** 52px tall, 2px border `--ink` at 60%, bg transparent on dark / #FFFFFF on light, label above in `--fs--1` 700, error text ember-ink on light / ember on dark.
- **Card (review/service):** no radius, `border-top: 1.5px solid var(--rule)`, padding `--s-6`, sits on a course (nail line at top).
- **Sample tag:** pill 999px, mono `--fs--1`, 1.5px border currentColor, text "Sample".
- **Frame:** photos 4:3 or 3:2, radius 0, inset 1px frost 20% line, grade below. Credits in mono under frame.
- **Header:** `--header-h: 72px` (64px < 640). Deep bg, wordmark = initials in a 40px square "board" + name in Darker Grotesque 800. Phone shows ≥ 900.
- **Mobile bar:** fixed bottom 64px + safe-area, 3 equal buttons Call (ember/deep) · Text · Price it, t-deep, top nail line.
- **Signature primitive `.course`:**
```css
.course{position:relative;padding-block:var(--pad,calc(var(--course)*1.25))}
.course::before{ /* nail line at top edge */
  content:"";position:absolute;inset:14px 0 auto 0;height:5px;
  background:radial-gradient(circle,var(--nail,rgb(233 238 241 / .4)) 2.5px,transparent 3px) 0 0/48px 5px repeat-x;
  transform-origin:center;transform:scaleY(calc(1 - var(--cover,0)));opacity:calc(1 - var(--cover,0));}
.course::after{ /* drip shadow onto the next course */
  content:"";position:absolute;left:0;right:0;bottom:-8px;height:8px;z-index:1;pointer-events:none;
  background:linear-gradient(rgb(8 12 16 / .55),transparent);}
.course__no{font:500 var(--fs--1)/1 "JetBrains Mono",monospace;letter-spacing:.04em;color:var(--muted)}
.sw-motion .course{transform:translateY(calc((1 - var(--sw-p,1)) * 8px))}
```
`--cover` = the following course's `--sw-p` (app.js sets it). Light tones: `--nail: rgb(19 28 36 / .28)`.
- **Gable shape:** `clip-path: polygon(0 50%, 50% 0, 100% 50%, 100% 100%, 0 100%)` on a 2:1 box = 26.57deg rake (6/12). Reused for footer rake and price-board heading notch.

## Photo grade
`filter: grayscale(1) contrast(1.12) brightness(.92)` + duotone overlay `::after{background:#121B23;mix-blend-mode:lighten;opacity:.35}` and `#F28C4E` multiply at 8% on hero only. Cool palette: no sepia. Every photo gets the same grade (the library is B&W HABS + cold winter, so duotone unifies it).

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.btn{border:2px solid CanvasText}.course::before,.course::after{display:none}:focus-visible{outline-color:Highlight}}
```
