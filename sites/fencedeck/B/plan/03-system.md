# fencedeck-B · Design system (copy into :root)

## Fonts
- Display **Arvo** 700 (h1-h3), 400 italic for pull lines. Static weights only. **Preload: Arvo 700 normal** (only preload).
- Text **Onest** variable 400-650: body 400, lead 450, labels/buttons 600.
- Accent **Martian Mono** variable: `font-variation-settings:"wdth" 87.5; font-weight:500` for stamp codes, dimensions,
  counts, prices, phone. Always `font-variant-numeric: tabular-nums`.
- Fetch: `node tools/fetch-fonts.mjs "Arvo"` / `"Onest"` / `"Martian Mono"` if missing.

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--2: clamp(.8125rem, .78rem + .1vw, .8125rem);   /* 13px floor: stamp codes */
--fs--1: clamp(.875rem, .85rem + .15vw, .9375rem);
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.125rem);   /* body 17→18 */
--fs-1:  clamp(1.275rem, 1.15rem + .55vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2rem);
--fs-3:  clamp(1.836rem, 1.45rem + 1.7vw, 2.665rem);
--fs-4:  clamp(2.2rem, 1.6rem + 2.6vw, 3.55rem);
--fs-h1: clamp(2.5rem, min(8.4vw, 9svh) + .1rem, 4.85rem); /* Arvo is wide: cap 4.85 */
--fs-count: clamp(2.6rem, 2rem + 3vw, 4.5rem);       /* Martian Mono counter numbers */
```
h1: Arvo 700, `letter-spacing:-.025em; line-height:.98; text-wrap:balance`. h2: Arvo 700, -.02em, 1.05. Body Onest 1.5,
`max-width:66ch`, `text-wrap:pretty`. Labels: Martian Mono `--fs--1`, uppercase, `letter-spacing:.06em`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(112px, 12vw, 160px)`.

## Grid
12 cols ≥ 1100 / 8 cols 640-1099 / 4 cols < 640. Gutter `clamp(16px, 2vw, 24px)`. `--max: 1320px`, side margin
`clamp(20px, 4vw, 56px)`. **Count column**: at ≥ 1100 the rightmost 2 columns of takeoff sections are the count margin
(tallies + mono numbers, right-aligned, 1px `--rule` left border). Under 1100 the count sits inline after the row text.

## Colors + tones
```css
--ink:#24221F; --paper:#F1E6CC; --card:#FBF8F0; --mid:#E6D6B2; --muted:#5C5446;
--accent:#22508F; --deep:#1B2433; --signal:#F2B84B; --hair:#A39A86; /* hair: rules only (2.25 on paper) */
```
| tone | --bg | --ink | --muted | --rule | --accent | --focus | btn bg / text | measured |
|---|---|---|---|---|---|---|---|---|
| t-paper (default) | #F1E6CC | #24221F | #5C5446 | #A39A86 | #22508F | #22508F | #22508F / #FFF | 12.79 · 6.02 · 6.48 · btn 8.03 |
| t-light (cards, tools) | #FBF8F0 | #24221F | #5C5446 | #A39A86 | #22508F | #22508F | #22508F / #FFF | 14.94 · 7.03 · 7.57 |
| t-mid (sawn pine) | #E6D6B2 | #24221F | #5C5446 | #8A7C60 | #22508F | #22508F | #24221F / #FBF8F0 | 11.05 · 5.20 · 5.59 |
| t-accent (stamp band) | #22508F | #F1E6CC | #D6DEEC | rgba(241,230,204,.35) | #F2B84B (shapes) | #F2B84B | #F1E6CC / #22508F | 6.48 · 5.94 · focus 4.49 |
| t-deep (blue graphite) | #1B2433 | #F1E6CC | #B9BFCC | rgba(241,230,204,.22) | #9DB8E6 | #F2B84B | #F2B84B / #24221F | 12.57 · 8.45 · 7.74 · focus 8.71 · btn 8.86 |
Never accent on deep (1.93). Use t-deep at most twice, never adjacent; the footer is t-deep.

## Radius, rules, shadow
Radius `--r: 3px` everywhere (stamps, cards, inputs, buttons). No pills. Rules: 1px `--rule` hairlines; takeoff-row rules
are 1px dashed `--hair`; section top rule 2px `--ink`. Shadow only on the mobile bar and the sticky tally card:
`0 10px 30px -12px rgba(27,36,51,.35)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --d-press:120ms; --d-ui:200ms;
--d-page:520ms; --d-story:900ms; --stagger:60ms; --d-stamp:260ms`.

## Components
- **Buttons** min-height 52px, padding 0 22px, Onest 600 `--fs-0`, radius 3px. Primary: bg `--accent`, white. Secondary:
  2px `--ink` border, transparent. Text button: Onest 600 + pencil underline. `:active{transform:scale(.97)}`.
- **Input** 52px, 1.5px `--ink` border on `--card`, label above in Martian Mono `--fs--1`; error text `--ink` + ✕ glyph.
- **Card** `--card` bg, 1px `--rule`, radius 3px, padding `--s-6`; top-left stamp optional.
- **Sample tag** Martian Mono `--fs--2` caps, 1px `--muted` border, padding 2px 6px, text `--muted`: "SAMPLE".
- **Frame** (the one photo): radius 3px, 1px `--ink` border, 4:5 (hero big tile) / 3:2 elsewhere; grade below.
- **Header** `--header-h: 68px` (60px < 640), t-paper, bottom 1px `--rule`; logo mark = mini tally gate + "Tallyboard" Arvo 700.
- **Mobile bar** (< 900): fixed bottom, 3 equal buttons Call | Text | Count, 56px + `env(safe-area-inset-bottom)`, t-deep,
  shadow token. Body gets `padding-bottom: 72px`.
- **Takeoff row** (services, prices, counter results): grid `1fr auto`, 1px dashed `--hair` bottom, min-height 56px, left =
  item (Onest 600) + note (`--muted`), right = Martian Mono number + `.tally`.

## Signature primitives (drawn once)
```html
<svg class="tally" viewBox="0 0 44 32" aria-hidden="true"><g class="tally__strokes">
 <path d="M6 4 L7 28"/><path d="M14 4 L14.5 28"/><path d="M22 5 L21.5 28"/><path d="M30 4 L30.5 27"/>
 <path class="tally__slash" d="M2 24 L36 8"/></g></svg>
```
```css
.tally{width:44px;height:32px;flex:none}
.tally path{fill:none;stroke:var(--ink);stroke-width:2.5;stroke-linecap:round;pathLength:1}
.tally .tally__slash{stroke:var(--accent)}
.t-deep .tally path,.t-accent .tally path{stroke:currentColor}.t-deep .tally__slash{stroke:var(--signal)}
.tally--partial[data-n="1"] path:nth-child(n+2),.tally--partial[data-n="2"] path:nth-child(n+3),
.tally--partial[data-n="3"] path:nth-child(n+4),.tally--partial[data-n="4"] .tally__slash{display:none}
.sw-motion .tally[data-draw] path{stroke-dasharray:1;stroke-dashoffset:1;
  transition:stroke-dashoffset 180ms var(--ease-out) calc(var(--i,0)*var(--stagger))}
.sw-motion .tally.is-in path{stroke-dashoffset:0}
.stamp{display:inline-grid;gap:2px;padding:6px 10px 7px;border:2px solid var(--accent);border-radius:var(--r);
  color:var(--accent);transform:rotate(-1.5deg);-webkit-mask:url(#stamp-rough) /* optional SVG noise mask, 4% */}
.stamp__code{font:500 var(--fs--2)/1 "Martian Mono";font-variation-settings:"wdth" 87.5;letter-spacing:.08em}
.stamp__grade{font:700 var(--fs--1)/1.1 Arvo;text-transform:uppercase;letter-spacing:.04em}
.t-deep .stamp,.t-accent .stamp{border-color:var(--signal);color:var(--signal)}
.sw-motion .stamp[data-stamp]{opacity:0;transform:rotate(-1.5deg) scale(1.08)}
.sw-motion .stamp.is-in{opacity:1;transform:rotate(-1.5deg) scale(1);box-shadow:0 0 0 0 transparent;
  transition:transform var(--d-stamp) var(--ease-out),opacity 120ms linear,box-shadow 400ms var(--ease-out)}
```
Stamp codes are fictional and section-only: `TB·DEN·01 COUNT FIRST`, `TB·DEN·02 DECK TAKEOFF`, `TB·DEN·03 POST BELOW
FROST`, `TB·DEN·04 HAIL + UV`, `TB·DEN·05 PERMIT CHECK`, `TB·DEN·06 SAMPLE PRICES`, `TB·DEN·07 COUNTED`. Hook:
`data-sw-signature="tally"` on the hero tally only. Tally SVGs always `aria-hidden`; the number they count is real text.

## Drawings (SVG, stroke style)
1.75px `--ink` strokes, dimension lines 1px `--accent` with Martian Mono labels, hatching 45° 1px `--hair` at 6px. Frost
line = 1.5px dashed `--accent` labelled "FROST LINE" (no depth number: not in facts). Stain swatches in the compare tool:
4 flat chips (#B98A55 cedar, #8E9A6B treated, #6E6A64 composite grey, #E9E4D8 PVC) — shapes only, no text on them.

## Photo grade
`filter: grayscale(1) contrast(1.08) brightness(1.02)` + overlay `background:#22508F; mix-blend-mode:screen; opacity:.28` on
a wrapper → blue-graphite duotone that sits on pine paper (the one photo is archival B&W).

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.tally path{stroke:CanvasText}.stamp{border-color:CanvasText;color:CanvasText}
 .btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}}
```
