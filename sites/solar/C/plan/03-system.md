# solar-C · design system (copy into :root)

## Fonts
- Display `Aleo` variable 100-900, normal only: `assets/fonts/aleo/aleo-100-900-normal.woff2` **preload**. Use 700 (h1),
  600 (h2/h3), 800 for the big multipliers. Italic not loaded.
- Text `Barlow` static: 400, 500, 600 normal + 400 italic (4 files, no preload).
- Accent `JetBrains Mono` variable 100-800 normal: use 500 only, uppercase labels, `letter-spacing:.06em`, tabular.
- Stacks: `--f-display:"Aleo",Georgia,serif; --f-text:"Barlow",system-ui,sans-serif; --f-mono:"JetBrains Mono",ui-monospace,monospace;`

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, labels; nothing under 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem);  /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.15rem + .55vw, 1.58rem);   /* lead */
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2.11rem);       /* h3 */
--fs-3:  clamp(1.84rem, 1.45rem + 1.7vw, 2.81rem);    /* h2 */
--fs-4:  clamp(2.2rem, 1.6rem + 2.8vw, 3.75rem);      /* section statements */
--fs-h1: clamp(2.5rem, min(8.4vw, 9svh) + .1rem, 4.9rem); /* Aleo is medium-wide: cap 4.9rem */
--fs-num: clamp(3.5rem, 2rem + 7vw, 8rem);            /* 1.63× multipliers, Aleo 800 */
```
h1: Aleo 700, `letter-spacing:-.025em; line-height:.96; text-wrap:balance`. h2: 600, -.02em, 1.02. h3: 600, -.01em, 1.1.
Body: Barlow 400, `line-height:1.5; max-width:66ch; text-wrap:pretty`. Lead: Barlow 500 `--fs-1`, lh 1.4.
Mono labels: `--fs--1`, 500, uppercase, `.06em`. All numbers `font-variant-numeric:tabular-nums`.

## Space
`--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:128px; --s-11:160px;`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(104px, 12vw, 160px)`.
Every band adds `padding-top: calc(var(--pad) + var(--step-3))` to clear its parapet edge.

## Grid
12 cols ≥1100px / 8 cols 640-1099 / 4 cols <640. Gutter `--gut: clamp(16px, 2vw, 24px)`. Max width `--max: 1320px`,
side margin `--edge: clamp(20px, 5vw, 64px)`. **Sky column:** at ≥1100px col 12 is reserved (no text) for the sun arc
(`position:fixed; right:var(--edge); top:calc(var(--header-h) + 24px); bottom:96px; width:56px`). Content lives in cols 1-11.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink --wedge)
| tone | --bg | --ink | --muted | --rule | --accent (words) | --focus | --btn-bg / --btn-ink | --wedge |
|---|---|---|---|---|---|---|---|---|
| `t-paper` | #f3e7d3 | #2b1a12 (13.64) | #6b4a38 (6.45) | rgba(43,26,18,.18) | #0e5a5e (6.50) | #0e5a5e (6.50) | #0e5a5e / #f3e7d3 (6.50) | rgba(208,138,98,.55) |
| `t-mid` | #e6d5ba | #2b1a12 (11.58) | #6b4a38 (5.48) | rgba(43,26,18,.2) | #0e5a5e (5.52) | #0e5a5e (5.52) | #0e5a5e / #f3e7d3 (6.50) | rgba(154,74,38,.32) |
| `t-clay` (hero, calculator) | #d08a62 | #2b1a12 (5.95) | #3d2a20 (4.83) | rgba(43,26,18,.3) | #2b1a12 (5.95) | #2b1a12 (5.95) | #2b1a12 / #f3e7d3 (13.64) | rgba(43,26,18,.28) |
| `t-deep` (story, footer) | #0e3b3e | #f3e7d3 (10.02) | #c9b8a2 (6.33) | rgba(243,231,211,.2) | #e8a81c (5.86) | #e8a81c (5.86) | #e8a81c / #2b1a12 (7.98) | rgba(0,0,0,.35) |
| `t-ink` (prices strip) | #2b1a12 | #f3e7d3 (13.64) | #c9b8a2 | rgba(243,231,211,.18) | #e8a81c (7.98) | #e8a81c (7.98) | #e8a81c / #2b1a12 (7.98) | rgba(208,138,98,.4) |
Never: gold/clay text on paper, turquoise on clay or deep (see 02-concept table). Rhythm: never two dark bands touching.

## Radius, rules, shadow
Radius **0 everywhere** (parapets are square), except the sun disc / hero mask `50%` and input focus none. Buttons 0.
Rules: 1px `var(--rule)`; emphasis rule 2px `var(--ink)`. Shadow only on mobile bar + popover: `0 -8px 24px rgba(43,26,18,.18)`.
The "shadow" of the signature is a flat wedge, never a box-shadow.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **Buttons** (min-height 52px, padding 0 22px, Barlow 600 `--fs-0`, radius 0):
  primary `background:var(--btn-bg);color:var(--btn-ink)`; secondary `border:2px solid var(--ink);color:var(--ink);background:transparent`;
  text button = underlined link with the hairline hover, inline-block padding-block 12px. Phone button shows a 16px handset SVG + `{{biz.phone}}` tabular.
- **Input**: 52px, `background:#fffaf1` (#2b1a12 on #fffaf1 ≈ 16:1 range; border 2px #6b4a38, 6.45 on paper), label above in Barlow 600, help in muted.
- **Card**: `t-paper` or `t-mid`, no border, `.parapet` top edge (step class `--p1/--p2/--p3`), padding `--s-6`.
- **Sample tag**: JetBrains Mono 500 13px uppercase, `padding:2px 8px; border:1px solid currentColor`; text "Sample".
- **Frame**: photo frames 4:3 (break 21:9 ≥900, 4:5 <640), grade below, inner 1px rule `inset 0 0 0 1px rgba(43,26,18,.15)`.
- **Header**: `--header-h: 72px` (64px <640), `t-paper`, wordmark = Aleo 700 "{{biz.short}}" + a 10px stepped parapet glyph; right: phone + "Book a roof check". Sticky, no shadow, 1px bottom rule after 8px scroll.
- **Mobile bar** (<900): fixed bottom, 64px + `env(safe-area-inset-bottom)`, 3 cells [Call | Text | Roof check], `t-ink`, shadow token.
- **Signature primitive (draw once, reuse everywhere):**
```css
:root{--sun:.5; --step-1:28px; --step-2:44px; --step-3:64px}
/* altitude follows --sun: 0/1 -> low (about 12deg), .5 -> high; cot approximated as a length factor */
.parapet{position:relative;--h:var(--step-2);
  clip-path:polygon(0 var(--h),18% var(--h),18% calc(var(--h)*.55),26% calc(var(--h)*.55),26% 0,74% 0,74% calc(var(--h)*.55),82% calc(var(--h)*.55),82% var(--h),100% var(--h),100% 100%,0 100%)}
.parapet--p1{--h:var(--step-1)} .parapet--p3{--h:var(--step-3)}
.parapet__shadow{position:absolute;left:0;right:0;top:var(--h);height:calc(var(--h) * var(--len,0.7));
  background:var(--wedge);transform-origin:top center;
  transform:skewX(calc((var(--sun) - .5) * -50deg));
  clip-path:polygon(26% 0,74% 0,calc(74% + (var(--sun) - .5)*20%) 100%,calc(26% + (var(--sun) - .5)*20%) 100%);
  pointer-events:none}
.sun{width:22px;aspect-ratio:1;border-radius:50%;background:#e8a81c;box-shadow:0 0 0 2px #2b1a12}
```
  app.js sets `--sun` (0-1 from document scroll progress) and `--len` = 1/tan(alt) with alt = 12° + 66°·sin(π·sun),
  clamped to 3.0; the hero and calculator set `--len` from real values (1.63 / 0.70 / 0.21). JS off/reduced: `--sun:.5; --len:.7` static.
- **Sun arc**: SVG path quarter-ellipse, stroke 1px `currentColor` at .35 opacity, the `.sun` translated along it via
  `offset-path` (fallback: translateY by `--sun`). Hidden from AT (`aria-hidden`).

## Photo grade
Warm palette: `filter: saturate(.88) contrast(1.06) sepia(.12)` on every img + poster. Hero disc overlay: none
(the sunset already sits in gold/clay). Break photo (grey EPDM roof): grade + `mix-blend-mode:multiply` overlay
`#d08a62` at 18% on a ::after so the grey roof joins the clay family.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){:focus-visible{outline-color:Highlight}.parapet,.parapet__shadow{forced-color-adjust:auto}.parapet__shadow,.sun{display:none}.btn{border:2px solid ButtonText}}
```
