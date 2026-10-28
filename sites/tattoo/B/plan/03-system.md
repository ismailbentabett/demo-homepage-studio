# tattoo-B · Cycle Log · Design system (copy into :root)

## Fonts
- Display **Geist** variable (wght 100-900): use 800 (h1, h2), 650 (h3). **Preload: geist-*-normal.woff2 only.**
- Text **Hanken Grotesk** variable: 400 body, 500 lead, 600 labels/buttons.
- Accent **Martian Mono** variable: `font-stretch:87.5%` (wdth axis), 400 readings, 600 stamps/tape labels; always
  `font-variant-numeric: tabular-nums`; letter-spacing .02em; uppercase only on tape labels and stamps.
- Fallbacks: `Geist, "Hanken Grotesk", system-ui, sans-serif` / `"Martian Mono", ui-monospace, monospace`.

```css
:root{
  --ff-display:"Geist","Hanken Grotesk",system-ui,sans-serif;
  --ff-text:"Hanken Grotesk",system-ui,sans-serif;
  --ff-mono:"Martian Mono",ui-monospace,monospace;

  /* type scale: 1.2 at 390 -> 1.333 at 1440 */
  --fs--1: clamp(.8125rem, .78rem + .15vw, .875rem);   /* 13-14px, mono captions; never smaller */
  --fs-0:  clamp(1.0625rem, 1.03rem + .17vw, 1.1875rem); /* 17-19px body */
  --fs-1:  clamp(1.275rem, 1.18rem + .45vw, 1.58rem);
  --fs-2:  clamp(1.53rem, 1.36rem + .85vw, 2.11rem);
  --fs-3:  clamp(1.84rem, 1.55rem + 1.45vw, 2.81rem);
  --fs-4:  clamp(2.2rem, 1.7rem + 2.4vw, 3.75rem);
  --fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 4.75rem); /* Geist is wide-ish: cap 4.75rem */
  --lh-display: .96; --lh-body: 1.5; --track-display: -.04em; --track-h2: -.03em;
  --measure: 66ch;

  /* space */
  --s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px;
  --s-10:120px; --s-11:160px;
  --pad-tight: clamp(56px, 7vw, 80px);
  --pad-normal: clamp(80px, 9vw, 120px);
  --pad-loose: clamp(104px, 12vw, 160px);

  /* grid */
  --maxw: 1320px; --gutter: clamp(16px, 2vw, 24px); --margin-col: 148px; /* mono log column, >=1100px only */
  --header-h: 64px; --bar-h: 64px;

  /* palette */
  --c-deep:#121619; --c-mid:#252C31; --c-steel:#B9C2C7; --c-steel-2:#9AA4AA;
  --c-paper:#ECE5D2; --c-paper-muted:#5E5747; --c-light:#F4F5F3;
  --c-rose:#E77FA0; --c-rose-deep:#9E2F55; --c-rose-muted-ink:#3A2A30;
  --c-stripe-pre:#C8B68A; --c-stripe-done:#2B2620;

  /* shape */
  --radius: 2px; --pill: 999px;   /* 2px on everything; pills only for tags/stamps chips */
  --rule: 1.5px; --rule-dark: rgba(244,245,243,.18); --rule-light: rgba(18,22,25,.22);
  --shadow-float: 0 10px 30px rgba(0,0,0,.35);

  /* motion */
  --ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1);
  --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --t-stagger:60ms;
}
```
Grid: 12 cols ≥ 1100 (margin column = cols 1-2 holding `No. 04 · 14:05 · CYCLE 0412` in mono `--fs--1`), 8 cols
640-1099 (margin column becomes an inline mono kicker), 4 cols < 640. Section inner = `min(var(--maxw), 100% - 2*var(--gutter))`.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent (words) | focus | primary btn |
|---|---|---|---|---|---|---|---|
| `t-deep` | #121619 | #F4F5F3 (16.63) | #B9C2C7 (10.05) / caps #9AA4AA (7.15) | --rule-dark | #E77FA0 (6.87) | #E77FA0 (6.87) | bg #E77FA0, ink #121619 (6.87) |
| `t-mid` | #252C31 | #F4F5F3 (12.94) | #B9C2C7 (7.82) / #9AA4AA (5.57) | --rule-dark | #E77FA0 (5.35) | #E77FA0 (5.35) | bg #E77FA0, ink #121619 (6.87) |
| `t-paper` | #ECE5D2 | #121619 (14.46) | #5E5747 (5.70) | --rule-light | #9E2F55 (5.58) | #9E2F55 (5.58) | bg #9E2F55, ink #F4F5F3 (6.41) |
| `t-light` | #F4F5F3 | #121619 (16.63) | #5E5747 (6.55) | --rule-light | #9E2F55 (6.41) | #9E2F55 (6.41) | bg #9E2F55, ink #F4F5F3 (6.41) |
| `t-accent` (rose band) | #E77FA0 | #121619 (6.87) | #3A2A30 (5.11) | rgba(18,22,25,.3) | #121619 only | #121619 (6.87) | bg #121619, ink #F4F5F3 (16.63) |
Never: #E77FA0 on paper/light (2.10), white on #E77FA0.
Secondary button: transparent, 1.5px border in `--ink`, text `--ink`. Text button: `--accent` text + tape-tab hover.
Dark-run rule: deep → (tape) → paper/light → deep; t-mid counts as dark, never touches t-deep.

## Components
- **Buttons:** min-height 52px, padding 0 22px, `--radius`, font 600 `--fs-0` text face; press `scale(.97)` 120ms.
  Primary label everywhere: "Book a consult". Secondary: "Text us". Header: "Book a consult" + mono phone link.
- **Input:** 52px, bg transparent, 1.5px bottom+sides border `--rule`, label above in mono `--fs--1`, focus = ring.
- **Ledger row (card replacement):** grid `var(--margin-col) minmax(0,1fr) minmax(0,auto)`; top rule 1.5px;
  padding 20px 0; entry No. in mono left, title Geist 650 `--fs-2`, figure mono right.
- **Sample tag:** mono `--fs--1` 600 uppercase, 1.5px border currentColor, `--pill`, padding 2px 8px, text "Sample".
- **Stamp:** 88px circle, 2px double border `--accent`, mono 600 "CHECKED"/"PASS" on a circular textPath (SVG), rotate -8°.
- **Session sheet (hero + estimator output):** bg #ECE5D2, ink #121619, padding 28px, 6-8 rows; row = mono label
  (`NEEDLE LOT`) left, value right, dotted leader `border-bottom:1.5px dotted rgba(18,22,25,.35)`; each value is an
  `<a>` (min 48px row height). Corner clip: an SVG binder clip on the top center (steel #B9C2C7).
- **Frame (photos):** 4:5 portrait / 3:2 landscape, 2px radius, 1.5px inner border rgba(244,245,243,.12) on dark,
  a small tape corner (top-left, 64px) on featured frames only.
- **Header:** `--header-h` 64px, bg #121619 at 92% + `backdrop-filter: blur(8px)`, logo = "CL" monogram set inside a
  tape strip + name in Geist 700.
- **Mobile bar (< 760px):** fixed bottom, `--bar-h` 64px, 3 equal cells [Text] [Call] [Book a consult], bg #121619,
  top tape strip 6px (fully cycled), `--shadow-float`, `padding-bottom: env(safe-area-inset-bottom)`. Body gets
  `padding-bottom: calc(var(--bar-h) + env(safe-area-inset-bottom))`.

## Signature primitive: `.tape` (drawn once, reused everywhere, `data-sw-signature`)
```css
.tape{--sw-p:0; position:relative; height:28px; background:var(--c-paper); transform:rotate(-.6deg);
  color:var(--c-stripe-done); font:600 var(--fs--1)/28px var(--ff-mono); font-stretch:87.5%;
  letter-spacing:.06em; text-transform:uppercase; padding-inline:16px; overflow:hidden;
  -webkit-mask: conic-gradient(from -45deg at left,#0000 25%,#000 0) left/8px 8px repeat-y,
                conic-gradient(from 135deg at right,#0000 25%,#000 0) right/8px 8px repeat-y,
                linear-gradient(#000 0 0) center/calc(100% - 16px) 100% no-repeat;}
.tape::before,.tape::after{content:""; position:absolute; inset:5px 0; pointer-events:none;
  background:repeating-linear-gradient(45deg,currentColor 0 7px,transparent 7px 18px);}
.tape::before{color:var(--c-stripe-pre)}
.tape::after{color:var(--c-stripe-done); opacity:var(--sw-p);}          /* stripes darken with reading */
.tape__label{position:relative; z-index:1; background:var(--c-paper); padding-inline:8px; color:#2B2620} /* 11.92 */
@media (max-width:639px){.tape{height:22px; line-height:22px}}
@media (prefers-reduced-motion:reduce){.tape{--sw-p:1}}
html:not(.sw-motion) .tape{--sw-p:1}
```
Variants: `.tape--tab` (vertical, 6px wide, row-edge hover tab, `transform:scaleY(0→1)` origin top), `.tape--seal`
(hero, 320px, across the sheet top, -3°), `.tape--corner` (64px, 45°, review/frame corners), `.tape--rail` (full-bleed
section break with label `CYCLE 0412 · 134°C · PASS` + a Sample tag). `app.js` sets `--sw-p` per strip from its
section's scroll progress (ScrollTrigger, scrub .4); the cycle story sets it in 5 steps of .2.

## Photo grade
Cool, clinical: `filter: saturate(.78) contrast(1.08) brightness(.96) hue-rotate(-4deg);` on every img + poster.
Optional overlay on dark tones: `::after{background:linear-gradient(180deg,rgba(18,22,25,0) 55%,rgba(18,22,25,.55))}`.
No duotone on skin. Plan for ≤ 6 photos: drawn SVG (ear map, gauge, needle pack, binder clip) carries the rest.

## Focus + forced colors
```css
:focus-visible{outline:3px solid var(--focus); outline-offset:3px; border-radius:var(--radius)}
@media (forced-colors:active){
  .btn{border:2px solid CanvasText}
  .tape::before,.tape::after{forced-color-adjust:none}
  .stamp{border-color:CanvasText}
}
```
