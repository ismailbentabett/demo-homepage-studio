# assembly-C — Design system (copy into :root)

## Fonts
- Display: Fraunces variable, `assets/fonts/fraunces/fraunces-100-900-normal.woff2` (67KB) — **the only preload**.
  Italic file (81KB) loaded lazily, used only for the one italic word per h2 ("strapped", "level"). Axes: `opsz` (auto via
  `font-optical-sizing:auto`; force `"opsz" 144` on h1/h2, `"opsz" 24` on lead), `wght` 560 h1, 520 h2, 600 room names.
- Text: Albert Sans variable `albert-sans-100-900-normal.woff2` (no preload, `font-display:swap`): 400 body, 600 labels/buttons,
  700 numbers. `font-variant-numeric: tabular-nums` on prices, hours, phone, counters.
- Labels: Albert Sans 600, uppercase, `letter-spacing:.12em`, `--fs--1`.
```css
--f-display:"Fraunces", "Iowan Old Style", Georgia, serif;
--f-text:"Albert Sans", "Segoe UI", system-ui, sans-serif;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px labels, never smaller */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* 17-18px body */
--fs-1:  clamp(1.275rem, 1.2rem + .35vw, 1.5rem);    /* lead */
--fs-2:  clamp(1.53rem, 1.38rem + .7vw, 2rem);
--fs-3:  clamp(1.836rem, 1.55rem + 1.3vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.7rem + 2.3vw, 3.55rem);     /* h2 */
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 5rem);
```
- h1: Fraunces 560, opsz 144, `letter-spacing:-.03em`, `line-height:.95`, `text-wrap:balance`, max 12ch. (Fraunces is
  medium-wide; cap 5rem, 375px = 3 lines "Built, mounted / and strapped / to the beam.")
- h2: 520, `-.025em`, lh 1.02. Room names (h3 in room tags): 600, `--fs-3`, `-.015em`.
- Body: Albert Sans 400, `--fs-0`, lh 1.55, `max-width:66ch`; lead `--fs-1` Fraunces 400 opsz 24, lh 1.4, 52ch.

## Space
```css
--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:128px;
--pad-tight: clamp(56px, 7vw, 80px);
--pad-normal: clamp(80px, 10vw, 120px);
--pad-loose: clamp(104px, 13vw, 160px);
```

## Grid
- 12 cols ≥ 1100px, 8 cols 640-1099, 4 cols < 640. Gutter `clamp(16px, 2vw, 24px)`. `--max: 1280px`; `--wrap: min(100% - 2*clamp(20px,5vw,64px), var(--max))`.
- Plan margin: at ≥ 1100px cols 1-2 hold the room tag (plan crop + room name, sticky top `calc(var(--header-h) + 24px)`); content 3-12.
- Corner locator: `position:fixed; right:24px; bottom:24px; width:96px; aspect-ratio:1` ≥ 1024px only.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| class | bg | ink | muted | rule | accent (words) | focus | btn bg / ink |
|---|---|---|---|---|---|---|---|
| `t-paper` | #F3EBDD | #231F1B (13.82) | #5E564B (6.09) | #231F1B @ 22% | #9A3F28 (5.69) | #9A3F28 (5.69) | #9A3F28 / #FFFFFF (6.74) |
| `t-sand` | #E8DCC4 | #231F1B (12.05) | #5E564B (5.31) | #231F1B @ 22% | #9A3F28 (4.96) | #9A3F28 (4.96) | #9A3F28 / #FFFFFF (6.74) |
| `t-redwood` | #9A3F28 | #F3EBDD (5.69) | #E9DFC9 (5.09) | #F3EBDD @ 35% | #F3EBDD only (mustard 3.08: ≥24px or shapes) | #D9A83A (3.08) | #D9A83A / #231F1B (7.49) |
| `t-olive` | #545A2E | #F3EBDD (6.16) | #E3D6BC (5.07) | #F3EBDD @ 35% | mustard 3.33: ≥24px or shapes only | #D9A83A (3.33) | #D9A83A / #231F1B (7.49) |
| `t-deep` | #2A2620 | #F3EBDD (12.70) | #C9BFAE (8.26) | #F3EBDD @ 18% | #D9A83A (6.88) | #D9A83A (6.88) | #D9A83A / #231F1B (7.49) |
| `t-mustard` (thin band / tags only) | #D9A83A | #231F1B (7.49) | #3A3328 (5.70) | #231F1B @ 30% | #231F1B | #231F1B (7.49) | #231F1B / #F3EBDD (13.82) |
Banned pairs: mustard on paper (1.84), ink on redwood (2.42), redwood on deep (2.23). Redwood band never touches deep band
(put paper/sand between). Color bands carry a 3:12 gable top edge: `clip-path: polygon(0 var(--gable), 50% 0, 100% var(--gable), 100% 100%, 0 100%)`, `--gable: clamp(24px, 4vw, 56px)`. That is shallow on purpose: it reads as a low-pitch roof, it doesn't measure a true 3:12 angle. The hero seam is the only true 3:12 (≈14°) line.

## Shape
- Radius: **0 everywhere**, 999px only on the strap-tick screw dot and the toggle chips. Rules: 1.5px, `--rule`. Plan lines: 1.5px walls (double line 6px apart), 1px furniture, 1px dashed door swings.
- Shadow only on the mobile bar and popovers: `0 -8px 24px rgb(35 31 27 / .18)`.

## Motion tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1);
--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;
```
Lean angle `--lean: 6deg`, transform-origin bottom-right corner of the piece (it tips away from the wall).

## Components
- `.btn` min-height 52px, padding 14px 22px, Albert Sans 600 `--fs-0`, radius 0, `border:2px solid transparent`; `.btn--primary` (tone btn colors), `.btn--secondary` (transparent, 2px border currentColor), `.btn--text` (underline 1.5px offset 4px, padding-block trick for 48px). Phone buttons show a small handset glyph + tabular number. `:active{transform:scale(.97)}`.
- Input: 52px, 1.5px border `--ink`, bg `--bg` lightened (#FBF6EC on paper), label above (Albert 600 `--fs--1` caps), error text #9A3F28 on paper (5.69).
- Card ("room card"): no radius, 1.5px top rule + 1.5px left rule only (a corner of a wall), padding 24px, room label top-left, strap tick at the left rule.
- Sample tag: `t-mustard`, Albert 600 12.5→13px caps `.1em`, padding 3px 8px, text "Sample".
- Frame: photos at 4:5 (rooms), 3:2 (break), 16:10 (hero, desktop) — always with the plan wall line running past one edge by 24px (the photo sits "in a room").
- Header: `--header-h: 72px` (64px < 640). Paper bg, wordmark Fraunces 600 "Post & Beam" + small Albert caps "ASSEMBLY CO."; nav = plan room labels; right: phone (tabular) + "Price it" primary.
- Mobile bar (< 900px): fixed bottom, 64px + safe-area, `t-deep`, 3 equal cells: Call / Text a photo / Price it; each ≥ 48px, gap 8px.
- **Signature primitives (draw once, reuse):**
```html
<svg class="strap" viewBox="0 0 16 20" aria-hidden="true"><path d="M3 2v13h10" /><circle cx="13" cy="15" r="1.6"/></svg>
```
```css
.strap{width:16px;height:20px;fill:none;stroke:var(--strap,#D9A83A);stroke-width:2.5;stroke-linecap:square}
.strap circle{fill:var(--strap-dot,#231F1B);stroke:none}
/* light tones: mustard on paper is 1.84, so the strap gets a #231F1B keyline: duplicate the path underneath with class .strap__key */
.strap__key{stroke:#231F1B;stroke-width:4.5}
.t-redwood .strap__key,.t-olive .strap__key,.t-deep .strap__key{display:none}
.plan{fill:none;stroke:var(--ink);stroke-width:1.5;vector-effect:non-scaling-stroke}
.plan .swing{stroke-dasharray:3 3;stroke-width:1}
.plan .atrium{fill:url(#hatch)}   /* 45° hatch, 6px pitch, ink @ 25% */
.plan .is-here{fill:#9A3F28;fill-opacity:.9}
.room-tag{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:end}
.room-tag__dim{border-top:1.5px solid var(--rule);position:relative} /* end ticks via ::before/::after 1.5px × 10px */
```
  Plan coordinate system: one SVG `viewBox="0 0 1200 800"`, rooms: office (0,0,360,320), kids (360,0,300,320), atrium (420,320,360,240, open, hatched), living (780,0,420,560 with the beam wall on the right edge), garage (0,320,420,480), yard (780,560,420,240, dashed fence). Each section crops this one SVG with its own viewBox, so all crops come from one drawing.

## Photo grade
`filter: saturate(.86) contrast(1.06) sepia(.12) hue-rotate(-3deg)` on every img + poster (warm California afternoon,
pushes greens toward olive). Optional overlay on the break photo only: `::after{background:#9A3F28;mix-blend-mode:multiply;opacity:.18}`.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){
  .btn{border:2px solid CanvasText}
  .strap,.plan{stroke:CanvasText}
  .plan .is-here{fill:Highlight}
  :focus-visible{outline-color:Highlight}
}
```
