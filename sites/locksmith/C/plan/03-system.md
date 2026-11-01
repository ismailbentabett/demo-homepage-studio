# locksmith-C · Design system (copy into :root)

## Fonts
- Display: Roboto Slab var `100 900` (`assets/fonts/roboto-slab/roboto-slab-100-900-normal.woff2`) — **preload**.
  h1 800, h2 650, h3 600, word-plates 700 caps.
- Text: Public Sans var `100 900` normal + italic; body 400, strong 600, labels 600.
- Accent: DM Mono 400 + 500 (prices, ZIPs, counter, hours), `font-variant-numeric: tabular-nums`.
- Fallbacks: `"Roboto Slab", Rockwell, "Courier New", serif`; `"Public Sans", "Segoe UI", Arial, sans-serif`;
  `"DM Mono", ui-monospace, Consolas, monospace`.

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, labels/captions (min 13px) */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* 17-18px body */
--fs-1:  clamp(1.275rem, 1.2rem + .4vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.38rem + .75vw, 2rem);
--fs-3:  clamp(1.836rem, 1.55rem + 1.4vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.7rem + 2.4vw, 3.553rem);
--fs-h1: clamp(2.5rem, min(8.4vw, 9svh) + .1rem, 4.6rem); /* Roboto Slab is wide-ish: cap 4.6rem */
--fs-plate: clamp(.8125rem, .78rem + .2vw, .9375rem);
```
h1: `line-height .96; letter-spacing -.03em; font-weight 800; text-wrap: balance`. h2: `lh 1.02; ls -.02em`.
Body: `lh 1.5; max-width 66ch`. Plates: `ls .08em; text-transform uppercase; lh 1`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 8vw, 80px)`, `--pad-normal: clamp(80px, 10vw, 120px)`,
`--pad-loose: clamp(104px, 13vw, 160px)`.

## Grid
12 cols ≥ 1100 / 8 cols 640-1099 / 4 cols < 640; gutter `clamp(16px, 2vw, 24px)`; `--max: 1320px`;
side margin `clamp(16px, 4vw, 56px)`. Door mosaic: `grid-template-columns: repeat(4, minmax(0,1fr))`,
rows `minmax(0, 1fr)` with door tiles aspect 3:4 (≥1100), 2 cols under 640. Mosaic gap 8px (the "mortar"
line shows paper-2 between doors).

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| Tone | bg | ink | muted | rule | accent (words) | focus | btn bg/ink | Checked |
|---|---|---|---|---|---|---|---|---|
| t-paper | #f2ede3 | #1c2326 (13.65) | #4a5357 (6.75) | #1c2326 @ 18% | #1f5f5c (6.31) | #1f5f5c (6.31) | #1f5f5c / #fff (7.36) | ✓ |
| t-light | #e3dccd | #1c2326 (11.67) | #4a5357 (5.77) | #1c2326 @ 18% | #1f5f5c (5.39) | #1f5f5c (5.39) | #1f5f5c / #fff | ✓ |
| t-deep (slate) | #1d3a44 | #f2ede3 (10.33) | #c9d2d4 (7.84) | #f2ede3 @ 22% | #d9a12b (5.21) | #d9a12b (5.21) | #d9a12b / #1c2326 (6.89) | ✓ |
| t-accent (teal door) | #1f5f5c | #f2ede3 (6.31) | #f2ede3 (no muted, use weight) | #f2ede3 @ 28% | #f2ede3 | #d9a12b (3.18, ring only) | #f2ede3 / #1c2326 (13.65) | ✓ |
| t-oxblood | #7a2630 | #f2ede3 (8.38) | #f2ede3 | #f2ede3 @ 28% | #f2ede3 | #d9a12b (4.22) | #f2ede3 / #1c2326 | ✓ |
| t-mustard (small tiles only) | #d9a12b | #1c2326 (6.89) | #1c2326 | #1c2326 @ 30% | #1c2326 | #1c2326 (6.89) | #1c2326 / #f2ede3 (13.65) | ✓ |
Never: mustard text on paper (1.98), mustard text on teal (3.18), mustard body on oxblood (4.22).
Rhythm: no two t-deep bands touching; paper/light between slate bands.

## Radius, rules, shadow
Radius `--r: 3px` everywhere (plates, buttons, inputs, cards); doors are square-cornered 0 except arched
Craftsman tile top `border-radius: 999px 999px 0 0` on ONE hero door only. Pills: none.
Rules: 1.5px, `var(--rule)`. Door moulds: `inset 0 0 0 1.5px rgb(0 0 0 / .18)` at 10% inset.
Shadow only on floating: mobile bar `0 -8px 24px rgb(28 35 38 / .18)`; open-door hinge line `-1px 0 0 rgb(0 0 0 / .25)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms;
--t-page:520ms; --t-story:900ms; --stagger:60ms; --hinge-open:-64deg; --hinge-hover:-12deg; --persp:1400px`.

## Components
- **Buttons** min-height 52px, padding 0 22px, radius 3px, Public Sans 600 `--fs-0`. Primary = `--btn-bg/--btn-ink`
  with leading phone icon; secondary = 1.5px border currentColor, transparent; text button = underline
  2px offset 4px. `:active{transform:scale(.97)}`.
- **Input** 52px, 1.5px ink border, paper bg, label above at `--fs--1` 600; error text oxblood (8.38).
- **Card / door-back**: paper bg, 1.5px rule, padding `--s-6`, left hinge strip 10px in the door's color.
- **Sample tag**: DM Mono 500 `--fs--1` caps, 1.5px border currentColor, radius 3px, padding 2px 6px, text "SAMPLE".
- **Frame**: 4:5 (hero tile) / 3:2 (story), photo grade below, `outline: 8px solid var(--door-color)` like a door glass frame.
- **Header** `--header-h: 68px` (60px < 640), paper bg, logo = slab "Many Doors" + 3 tiny door bars (teal/oxblood/mustard),
  right: hours (mono) + Call button. Sticky, 1.5px bottom rule after scroll.
- **Mobile bar** (< 900px, after 1 screen): fixed bottom, 64px incl. safe-area, 2 halves Call (teal) | Text (paper), shadow above.
- **Signature primitive `.door`**:
```css
.door{--c:var(--teal);position:relative;background:var(--c);aspect-ratio:3/4;transform-origin:left center;
  transform:perspective(var(--persp)) rotateY(calc(var(--sw-open,0) * var(--hinge-open)));
  transition:transform var(--t-page) var(--ease-out)}
.door::before{content:"";position:absolute;inset:9% 12% 52% 12%;box-shadow:inset 0 0 0 1.5px rgb(0 0 0/.18)}
.door::after{content:"";position:absolute;inset:54% 12% 9% 12%;box-shadow:inset 0 0 0 1.5px rgb(0 0 0/.18)}
.door__knob{position:absolute;right:12%;top:52%;width:12px;height:12px;border-radius:50%;
  background:var(--mustard);box-shadow:0 0 0 1.5px #1c2326}
.plate{display:inline-block;font:700 var(--fs-plate)/1 "Roboto Slab",serif;letter-spacing:.08em;text-transform:uppercase;
  background:#f2ede3;color:#1c2326;border:2px solid #1c2326;border-radius:3px;padding:6px 10px}
```
Door colors: `--teal:#1f5f5c --oxblood:#7a2630 --mustard:#d9a12b --slate:#1d3a44`. Text placed ON a door only
via the plate (paper/ink 13.65) or the door's tone row above.

## Photo grade
`filter: saturate(.8) contrast(1.06) hue-rotate(-4deg)` (cool PNW, no sepia). Hero porch tile: duotone
via `mix-blend-mode: multiply` overlay `#1f5f5c` at 100% over a `grayscale(1) contrast(1.1) brightness(1.08)` image
on a paper-colored base (source is b&w).

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}`; door checkboxes: focus ring on the label.
```css
@media (forced-colors: active){ .btn{border:2px solid CanvasText} .door{border:2px solid CanvasText}
  .plate{forced-color-adjust:auto} }
```
