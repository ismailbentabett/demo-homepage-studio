# fencedeck-A · Design system (copy into :root)

## Fonts
- `Schibsted Grotesk` variable 400-900 (normal + italic). **Preload only** `assets/fonts/schibsted-grotesk/schibsted-grotesk-400-900-normal.woff2`.
  Display 800 (h1/h2), 700 (h3), body 400, strong 600. `font-feature-settings:"tnum" 1` on any number in text.
- `Martian Mono` variable wght 100-800, wdth 75-112.5. Tags: wght 500, `font-stretch:87.5%`, 13px, uppercase, tracking .06em.
  Counter / prices / post counts: wght 600, `font-stretch:112.5%`.
- Fallbacks: `"Schibsted Grotesk", "Arial", sans-serif` with `size-adjust` fallback face 98%; mono `ui-monospace, "Consolas", monospace`.

## Type scale (1.2 → 1.333)
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px: tags, captions */
--fs-0:  clamp(1.0625rem, 1.03rem + .2vw, 1.1875rem); /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.2rem + .45vw, 1.58rem);
--fs-2:  clamp(1.53rem, 1.38rem + .8vw, 2.11rem);
--fs-3:  clamp(1.84rem, 1.55rem + 1.45vw, 2.81rem);
--fs-4:  clamp(2.2rem, 1.7rem + 2.5vw, 3.75rem);
--fs-h1: clamp(2.6rem, min(8.6vw, 9.5svh) + .1rem, 5rem);   /* sturdy grotesk at 800: stay ≤ 5rem */
--fs-count: clamp(1.75rem, 1.2rem + 2.4vw, 3.25rem);       /* Martian Mono wdth 112.5 */
```
Display: weight 800, `letter-spacing:-.035em`, `line-height:.95` (h1), `1.02` (h2), h3 -.015em / 1.15. Body line-height 1.5, `max-width:66ch`.
Tags: 13px minimum; nothing under 13px anywhere.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 10vw, 120px)`, `--pad-loose: clamp(104px, 13vw, 160px)`.

## Grid
12 cols ≥1024 / 8 cols 640-1023 / 4 cols <640. Gutter `clamp(16px, 2vw, 24px)`. `--max: 1240px`.
**String gutter** (≥1024): a 56px left column (`--gutter-string:56px`) outside the 12-col grid holds the page-long `.sl-run` (vertical)
with post marks aligned to each section's h2 baseline. Content grid = `min(100% - 2*24px - 56px, var(--max))`. Below 1024 the
string runs horizontally at each section's top edge instead (no fixed gutter).

## Tones
| class | --bg | --ink | --muted | --rule | --accent (words) | --string | --focus | button bg / fg |
|---|---|---|---|---|---|---|---|---|
| `t-field` (sage lead) | #A9B9A0 | #1C3329 (6.51) | #2B4036 (5.36) | rgba(28,51,41,.28) | #1C3329 (ink only; cedar fails 3.18 for body) | #9E3F1A (3.18 shape) | #1C3329 (6.51) | #9E3F1A / #FFFFFF (6.60) |
| `t-paper` | #F3EFE4 | #1C3329 (11.75) | #45584B (6.64) | rgba(28,51,41,.18) | #9E3F1A (5.74) | #C24E1F (4.15 shape) | #1C3329 (11.75) | #9E3F1A / #FFFFFF (6.60) |
| `t-mid` (pale sage) | #DCE3D2 | #1C3329 (10.26) | #45584B (5.80) | rgba(28,51,41,.2) | #9E3F1A (5.01) | #9E3F1A | #1C3329 (10.26) | #9E3F1A / #FFFFFF |
| `t-deep` (pine) | #1C3329 | #F3EFE4 (11.75) | #B8C7AE (7.60) | rgba(243,239,228,.18) | #E36A2E large only (4.09) | #E36A2E | #E36A2E (4.09) | #F3EFE4 bg / #1C3329 fg (11.75) |
| `t-cedar` (band) | #9E3F1A | #F3EFE4 (5.74) | #F3EFE4 | rgba(243,239,228,.3) | #F3EFE4 | #F3EFE4 | #F3EFE4 (5.74) | #1C3329 bg / #F3EFE4 fg (11.75) |
`#2B4A3B` (pine panel, inside t-deep only): text #F3EFE4 (8.51); never orange on it (2.96 FAIL).
Never: #E36A2E on sage (1.59), paper text on sage (1.80), pine text on cedar (2.04).
Hover #86351A with #FFFFFF: 8.27.

## Radius / rules / shadow
Radius **2px everywhere** (sawn edge), pills never. Buttons 2px. Rules: 1px `var(--rule)`; the string 2px `var(--string)`.
Shadow only on the mobile bar and estimator popover: `0 -6px 24px rgba(28,51,41,.18)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --ease-snap: cubic-bezier(.34,1.56,.64,1);`
`--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms; --t-snap:600ms; --t-pluck:240ms;`

## Components
- **Buttons** (min-height 52px, padding 14px 22px, 600 weight, `--fs-0`):
  primary `.btn` bg #9E3F1A / #FFF, hover darkens to #86351A (#FFF 8.27) + pluck;
  secondary `.btn-2` 2px ink border, transparent; text link `.btn-t` underline 2px offset 4px, padding-block 12px (tap target trick).
  Call button carries a tiny post icon (12×20 rect) before the number.
- **Input:** 52px, bg #F3EFE4, 1.5px ink border, radius 2px, label above 15px 600; error text #9E3F1A on paper (5.74).
- **Card** `.post-card`: t-mid or paper, 1px rule, radius 2px, top edge has a `.sl-post` mark hanging it from the string (no shadow).
- **Sample tag** `.sample`: Martian Mono 13px, 1px border currentColor, padding 2px 6px, "SAMPLE".
- **Plate** (drawn frame) `.plate`: 1:1 (filmstrip) or 4:3 (process); bg #F3EFE4, 1px ink rule inset 8px (a plate mark), SVG line art stroke
  #1C3329 1.5px, hatch at .6 opacity, one cedar accent stroke per plate (the string / concrete / new picket). Caption below in mono tag.
- **Photo frame** `.frame`: same plate mark (inset 8px rule), ratio from slot, grade below.
- **Header:** `--header-h: 72px` (64 on mobile); paper bg, wordmark "STRINGLINE" in Schibsted 800 + a 24px string with 2 posts as logo
  mark; nav anchors; call button right.
- **Mobile bar** (<768): fixed bottom 64px, paper, shadow, 3 cells [Call][Text][Price it], each ≥ 48px, safe-area padding.
- **Signature primitive** (draw once, reuse):
```css
.sl{position:relative;height:28px;--post-gap:96px}
.sl::before{content:"";position:absolute;left:0;right:0;top:13px;height:2px;background:var(--string);
  transform-origin:left;transform:scaleX(var(--sl-p,1))}
.sl-post{position:absolute;top:0;width:12px;height:28px;background:var(--ink);border-radius:0;
  transform:translateY(calc((1 - var(--post-in,1)) * -12px));opacity:var(--post-in,1)}
.sl-tag{font:500 var(--fs--1)/1 "Martian Mono",monospace;font-stretch:87.5%;letter-spacing:.06em;text-transform:uppercase;
  padding:4px 8px;border:1px solid currentColor;background:var(--bg);position:relative;top:4px}
.sl-stake{width:4px;height:40px;background:var(--ink);clip-path:polygon(0 0,100% 0,100% 85%,50% 100%,0 85%)} /* pointed stake */
.sl-run{position:fixed;left:24px;top:var(--header-h);bottom:0;width:2px;background:var(--string)} /* ≥1024 only, aria-hidden */
.ft-count{font:600 var(--fs-count)/1 "Martian Mono";font-stretch:112.5%;font-variant-numeric:tabular-nums}
```
JS sets `--sl-p` (0→1) and `--post-in` per post; without JS both default 1 (drawn, placed).

## Photo grade
`filter: saturate(.8) contrast(1.06) sepia(.12) hue-rotate(-4deg);` + overlay `mix-blend-mode:multiply` #A9B9A0 at 18% on the hero-A2
etching (it is a sepia etching: pushes it toward the sage field so it sits in the plate set). Any later photo uses the same filter.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.btn,.btn-2{border:2px solid ButtonText}.sl::before,.sl-post,.sl-run{background:CanvasText;forced-color-adjust:none}
 :focus-visible{outline-color:Highlight}}
```
