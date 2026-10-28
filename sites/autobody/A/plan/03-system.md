# autobody-A · Design system (copy into :root)

## Fonts
- Display: League Gothic 400 (only weight) — `assets/fonts/league-gothic/league-gothic-400-normal.woff2`, **preload: true** (only preload).
- Text: Libre Franklin variable 100-900 — `libre-franklin-100-900-normal.woff2` (+ italic for review quotes). Weights used: 400 body, 500 lead, 650 labels/buttons, 800 small caps kicker.
- Accent: Caveat 400-700 variable — weight 600, tape labels only, min 20px (1.25rem), never body or buttons.
- Stacks: `--ff-d:"League Gothic","Arial Narrow",sans-serif; --ff-t:"Libre Franklin",Arial,sans-serif; --ff-m:"Caveat","Comic Sans MS",cursive;`
- Display: `letter-spacing:.005em` (League Gothic is already tight, do NOT go negative below -.01em), `line-height:.9`, `text-transform:none` for h1 (sentence case reads warmer), UPPERCASE + `letter-spacing:.04em` for station numbers/labels. Numbers anywhere: `font-variant-numeric:tabular-nums` (Franklin).

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, never under 13 */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.1875rem); /* body 17-19 */
--fs-1:  clamp(1.275rem, 1.2rem + .4vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.4rem + .75vw, 2rem);
--fs-3:  clamp(1.84rem, 1.6rem + 1.3vw, 2.67rem);   /* League Gothic h3/h2 small */
--fs-4:  clamp(2.6rem, 2rem + 3vw, 4.25rem);        /* h2 in League Gothic */
--fs-h1: clamp(3.1rem, min(12vw, 11svh) + .1rem, 6.75rem); /* condensed face: 390 → 3 lines, 1440×900 → 2 lines */
--fs-stn: clamp(6rem, 22vw, 15rem);                 /* the station counter numeral */
--lh-d: .9; --lh-t: 1.5; --measure: 66ch;
```
h1/h2 `text-wrap:balance`; p `text-wrap:pretty`; lead `font-size:var(--fs-1);font-weight:500;line-height:1.4`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--sec-tight:clamp(56px,7vw,80px)`, `--sec:clamp(80px,9vw,120px)`, `--sec-loose:clamp(112px,12vw,160px)`. `--sec-x:clamp(20px,5vw,56px)`.

## Grid
12 cols ≥ 1100px / 8 cols 640-1099 / 4 cols < 640; gutter `clamp(16px,2vw,24px)`; `--maxw:1320px`.
Margin column ≥ 1100px: col 1-2 is the "tape column": every section's tape label sits there, left-aligned, content in cols 3-12. Below 1100 the tape sits above the h2.
All multi-column grids use `minmax(0,Nfr)` (T13).

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink --btn2-ink --btn2-line)
| Tone | bg | ink | muted | rule | accent (words) | focus | contrast |
|---|---|---|---|---|---|---|---|
| `t-deep` | #15191D | #F7F7F4 | #A7B0B8 | rgba(247,247,244,.14) | #E6C34E | #E6C34E | 16.45 / 8.03 / 10.33 |
| `t-mid` (booth wall) | #283037 | #F7F7F4 | #A7B0B8 | rgba(247,247,244,.16) | #E6C34E | #E6C34E | 12.47 / 6.08 / 7.83 |
| `t-paper` | #ECEDE8 | #121417 | #555E66 | rgba(18,20,23,.16) | #6E5300 | #6E5300 | 15.67 / 5.61 / 6.15 |
| `t-light` | #F7F7F4 | #121417 | #555E66 | rgba(18,20,23,.12) | #6E5300 | #6E5300 | 17.19 / 6.15 / 6.74 |
| `t-tape` (color band) | #E6C34E | #121417 | #121417 (no muted grey on tape) | rgba(18,20,23,.3) | #121417 | #15191D | 10.78 / focus 10.33 |
Buttons per tone: dark tones → primary bg #E6C34E ink #121417 (10.78); light tones → primary bg #15191D ink #F7F7F4 (16.45), tape appears as a strip on the button's top-left corner (decor only); t-tape → primary bg #15191D ink #F7F7F4. Secondary: transparent, 2px border var(--ink), text var(--ink).
Signal red usage: `#B23A17` words on paper/light (5.08/5.57), white on #B23A17 (5.57) for the peeled "Done" strip; `#E8532B` words on deep only at ≥ 18px (4.79); ink on #E8532B chips (5.01). FAILS: tape words on paper (1.45), white on #E8532B (3.43), red on tape (3.49): never.
Rhythm: never two of t-deep/t-mid touching (both are dark) — put t-paper/t-light/t-tape between.

## Radius, rules, shadow
Radius: **0 everywhere** (panels are cut steel); pills 999px only for the Sample tag and the hours chip. Rules: 1.5px solid var(--rule). Shadow only on mobile bar + popover: `0 -8px 24px rgba(0,0,0,.35)`. Tape gets its own tiny shadow `0 1px 0 rgba(0,0,0,.18)` (it's an object).

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;` h1 mask `cubic-bezier(.2,.7,.1,1)` 700ms. Everything hidden-before-reveal under `.sw-motion` only.

## Components
- **Header** `--header-h:64px` (72 ≥ 1100): t-deep, wordmark "BOOTH NINE" in League Gothic 1.75rem + a 9-tick tape tab; nav anchors (Stations · Claim · Services · Reviews · Area); right: phone button. Sticky, bg #15191D at 96%.
- **Buttons:** min-height 52px, padding 0 22px, Franklin 650 `--fs-0`, `letter-spacing:.01em`, radius 0, `:active{transform:scale(.97)}`. Text button: underline 2px var(--accent) offset 4px, padding-block trick (12px/-12px).
- **Input:** 52px, 2px border var(--ink) at 40% → var(--ink) on focus, bg var(--bg) lightened (`t-light` #F7F7F4 on paper), label above in Franklin 650 `--fs--1`, error in #B23A17 (paper 5.08). File slots: 4:3 dashed 2px boxes with a tape label each ("1 · Whole car, from a corner").
- **Card:** no radius, 1.5px rule border, padding var(--s-6); hung by a tape corner (`.tape--corner` 72×22px at -12px top-left, rotated -8deg).
- **Sample tag:** pill 999px, Franklin 800 12.5px→ use 13px, uppercase .08em, border 1.5px currentColor, text "Sample".
- **Frame:** `aspect-ratio:4/3` (filmstrip 3/4 portrait frames, 260px wide desktop / 200px mobile), radius 0, 1px inner border rgba(247,247,244,.12), grade below; caption in Franklin `--fs--1` muted under it.
- **Mobile bar** (< 900px): fixed bottom, 64px + safe-area, t-deep, two halves: "Call" (tape bg, ink) | "Text photos" (`sms:`; transparent, white text, 2px #E6C34E border). Appears when the hero buttons leave view.
- **Signature primitive `.tape`** (draw once, reuse everywhere):
```css
.tape{--tape:#E6C34E;--peel:var(--sw-p,0);position:relative;display:inline-flex;align-items:center;gap:.5em;
  padding:.35em 1.1em .3em;background:var(--tape);color:#121417;font:600 clamp(1.25rem,1.1rem + .6vw,1.6rem)/1 var(--ff-m);
  transform:rotate(var(--tilt,-1.2deg));box-shadow:0 1px 0 rgba(0,0,0,.18);
  clip-path:polygon(0 8%,3% 0,97% 4%,100% 0,99% 50%,100% 100%,96% 94%,2% 100%,0 92%,1.5% 50%);   /* torn ends */
  background-image:repeating-linear-gradient(90deg,rgba(0,0,0,.035) 0 2px,transparent 2px 5px); }
.tape-peel{position:relative;display:inline-grid}               /* wrapper: red strip under, tape over */
.tape-peel>.done{grid-area:1/1;background:#B23A17;color:#F7F7F4;font:650 var(--fs--1)/1 var(--ff-t);text-transform:uppercase;letter-spacing:.08em;padding:.7em 1.1em;align-self:center}
.tape-peel>.tape{grid-area:1/1}
.sw-motion .tape-peel>.tape{clip-path:inset(0 calc(var(--peel)*100%) 0 0)}  /* peel from the right */
.tape-peel>.tape::after{content:"";position:absolute;right:calc(var(--peel)*100%);top:0;width:calc(6px + var(--peel)*18px);height:100%;
  background:linear-gradient(100deg,#c9a83c,#f2d77a);transform-origin:left;transform:skewY(-6deg)}   /* the curl */
.tape--corner{position:absolute;width:76px;height:24px;padding:0;top:-12px;left:-14px;--tilt:-8deg}
.tape--torn{--tilt:2deg} /* footer: shown with --peel:.65 permanently */
```
Each tape text is real text in the DOM (`<span class="tape">STN 4 · Measure · Day 2</span>`); the "done" strip is real text too, so reduced motion shows `--peel:.5` with both readable. Marker text ≥ 20px, ink on tape 10.78.
- **Drawn door panel (story, `.panel`)**: an inline SVG door skin 4:3 (outline, body line, handle cutout) with 6 finish layers as `<g>` swapped by `data-stage`: dented (lit highlight distorted), bare steel (`#9BA3A8` + brushed hatch), filler (`#C9C3B4` patches), primer (`#7F858A` + black guide-coat speckle), basecoat (`#B23A17`), clear (basecoat + white gloss sweep). Shapes only, no text in it; `role="img"` + aria-label per stage.

## Photo grade
Cool, night booth: `filter:saturate(.78) contrast(1.08) brightness(.96) hue-rotate(-4deg);` (no sepia). Optional overlay on filmstrip frames: `::after{background:linear-gradient(180deg,rgba(21,25,29,0) 55%,rgba(21,25,29,.55))}` for the tape tab. No duotone. Video poster same filter.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.btn{border:2px solid CanvasText}.tape{forced-color-adjust:none;border:1px solid CanvasText}.tape-peel>.done{forced-color-adjust:none}}
```
Focus per tone: #E6C34E on deep 10.33 / mid 7.83; #6E5300 on paper 6.15 / light 6.74; #15191D on tape 10.33.
