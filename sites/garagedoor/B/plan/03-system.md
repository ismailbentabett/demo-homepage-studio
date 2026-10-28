# garagedoor-B · Design system (copy into :root)

## Fonts
- Display `"Libre Franklin"` var wght 100-900 (`assets/fonts/libre-franklin/libre-franklin-100-900-normal.woff2`, **preload this one only**). h1 850, h2 800, h3 700. Fallback `"Arial Narrow", Arial, sans-serif`, size-adjust via `font-size-adjust: from-font` not needed.
- Text `"Public Sans"` var 100-900, use 400 / 600; italic file only if used.
- Accent `"Martian Mono"` var wdth 75-112.5, wght 100-800: use `font-variation-settings:"wdth" 87.5; font-weight:500`, uppercase, `letter-spacing:.04em`, `font-variant-numeric: tabular-nums`. All prices, serials, plate readouts, ZIPs, hours.
- `font-display: swap` on all.

## Type scale
```
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px, mono labels min */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* 17-18 body */
--fs-1:  clamp(1.275rem, 1.2rem + .35vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.4rem + .65vw, 2rem);
--fs-3:  clamp(1.836rem, 1.6rem + 1.2vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.85rem + 1.9vw, 3.553rem);
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 4.75rem);  /* Franklin is wide-ish at 850: cap 4.75 */
--lh-display: .96; --track-display: -0.03em; --lh-body: 1.55; --measure: 66ch;
```
h2 = `--fs-4` wt 800 tracking -0.025em lh 1.0. Mono labels never below 13px.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)` · `--pad-normal: clamp(80px, 10vw, 120px)` · `--pad-loose: clamp(104px, 13vw, 160px)`.

## Grid
12 cols ≥ 1100 (gutter 24, max 1320, side margin clamp(20px,4vw,56px)) · 8 cols 640-1099 (gutter 20) · 4 cols < 640 (gutter 16, margin 20).
Margin column ≥ 1280px: 72px left gutter holding the section serial (`CC-01`…) in mono, rotated -90°, `--muted`.

## Tones
| class | --bg | --ink | --muted | --rule | --accent | --focus | button |
|---|---|---|---|---|---|---|---|
| `t-paper` | #F4F5F2 | #15181B (16.28) | #4F5A62 (6.45) | #A9B1B6 hair / #6B757C strong (4.30) | #1F4E79 (7.91) | #1F4E79 | bg #F2C200 / fg #15181B (10.60) |
| `t-zinc` (mid) | #D9DDDF | #15181B (13.03) | #4F5A62 (5.16) | #6B757C | #1F4E79 (6.33) | #1F4E79 (6.33) | same |
| `t-deep` | #22282D | #F4F5F2 (13.61) | #B9C2C8 (8.23) | rgba(244,245,242,.18) | #F2C200 (8.86) | #F2C200 (8.86) | bg #F2C200 / fg #15181B |
| `t-stamp` (blue band) | #1F4E79 | #F4F5F2 (7.91) | #F4F5F2 | rgba(244,245,242,.3) | #F2C200 (5.15) | #F2C200 (5.15) | bg #F2C200 / fg #15181B |
| `t-hazard` (STOP panel, small only) | #F2C200 | #15181B (10.60) | #15181B | #15181B | #15181B | #15181B (10.60) | bg #15181B / fg #F4F5F2 (16+) |
Never yellow text on paper/zinc. #A9B1B6 is rules/leaders only (1.98).

## Radius / rules / shadow
Radius: **2px everywhere** (plates, inputs, buttons, cards); chips 2px too (no pills). Rules: 1px `--rule` hairline; plate border 1px #6B757C; section top rule 2px ink. Shadow only on mobile bar + plates on hover: `0 1px 0 rgba(255,255,255,.7) inset, 0 6px 16px -8px rgba(21,24,27,.35)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **Buttons ≥ 48px:** `.btn--primary` yellow bg, ink text, 700 Public Sans, 2px ink bottom border (stamped edge), press translateY(1px). `.btn--secondary` transparent, 2px ink border. `.btn--text` accent underline 2px offset 4px. Phone button shows the number in mono.
- **Chip (finder option):** radio label, 48px tall, 1px #6B757C border, 2px radius, mono 14px; `:checked` → ink bg, paper text, yellow 4px left bar.
- **Input:** 52px, white bg, 1px #6B757C, 2px radius, focus 3px ring; label above in mono `--fs--1`.
- **Card:** = small plate (below), no separate card style.
- **Sample tag:** mono 12px→**13px**, uppercase, 1px currentColor border, padding 2px 6px, text "SAMPLE".
- **Frame:** 4:3 or 3:2, 1px #6B757C border, 2px radius, grade below. (Few/no photos this site; see 05-media.)
- **Header:** `--header-h: 64px` (72px ≥ 900). Paper bg, 1px rule bottom; logo = C&C mark in a tiny riveted plate + name; nav anchors; phone in mono + yellow Call button.
- **Mobile bar (< 900):** fixed bottom, 56px + safe-area, ink bg; [Call (yellow) | Text | Quote], shadow, appears when hero CTAs leave view (IntersectionObserver), always present with JS off as static footer-sticky.
- **Signature primitive `.plate`:**
```css
.plate{--rv:#8b949a;position:relative;padding:22px 26px;border:1px solid #6B757C;border-radius:2px;color:#15181B;
 background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0) 40%),
  repeating-linear-gradient(90deg,#D9DDDF 0 2px,#D3D8DA 2px 3px,#DCE0E2 3px 5px);}
.plate::before,.plate::after{content:"";position:absolute;top:8px;width:7px;height:7px;border-radius:50%;
 background:radial-gradient(circle at 35% 35%,#fff 0 20%,var(--rv) 60%,#5d666c 100%)}
.plate::before{left:8px}.plate::after{right:8px} /* bottom rivets: .plate__rivets span x2, bottom:8px */
.plate__row{display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:baseline;font:500 var(--fs--1)/1.4 "Martian Mono";text-transform:uppercase;letter-spacing:.04em}
.plate__row>i{border-bottom:2px dotted #A9B1B6;transform:translateY(-4px)} /* leader, decorative */
.plate__label{color:#4F5A62}.plate__value{color:#1F4E79;font-weight:600}
.plate__fill{min-width:9ch;border-bottom:1px dashed #6B757C;color:#4F5A62} /* "measured at your door" */
.plate__serial{position:absolute;right:26px;bottom:6px;font:500 13px "Martian Mono";color:#4F5A62}
.plate__meter{height:10px;background:repeating-linear-gradient(90deg,#15181B 0 1px,transparent 1px 10%);position:relative}
.plate__meter::after{content:"";position:absolute;left:calc(var(--sw-p,0)*100%);top:-4px;width:2px;height:18px;background:#15181B}
```
Sizes: `.plate--xl` (hero, story; values `--fs-2`), `.plate` (services, reviews), `.plate--strip` (one-row, footer/area). On `t-deep` plates stay zinc (they are objects), never recolored.

## Photo grade
`filter: saturate(.7) contrast(1.06) brightness(1.02) hue-rotate(-4deg)` (cool galvanized). Optional overlay `.frame::after{background:#1F4E79;mix-blend-mode:color;opacity:.12}`.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.plate{border:1px solid CanvasText}.btn--primary{border:2px solid ButtonText}.chip input:checked+span{outline:2px solid Highlight}.plate__meter::after{background:CanvasText}}
```
