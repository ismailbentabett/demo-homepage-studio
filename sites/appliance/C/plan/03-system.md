# appliance-C · Design system (copy into :root)

## Fonts
- Display **Literata** `assets/fonts/literata/literata-200-900-normal.woff2` (PRELOAD, the only preload) + italic file (no preload). Use wght 600 (h1/h2), 500 italic (entries), `font-optical-sizing:auto`; h1 `"opsz" 72`, lead `"opsz" 24`.
- Text **Work Sans** `work-sans-100-900-normal.woff2`: 400 body, 500 labels, 600 buttons. Tabular nums for prices/hours/phone.
- Accent **Caveat** `caveat-400-700-normal.woff2`, 600, ≥ 1.375rem, pencil notes/ticks only; always duplicated by real text (aria-hidden when decorative).
- Small-caps month labels: Work Sans 600, `text-transform:uppercase; letter-spacing:.14em; font-size:var(--fs--1)` (≥ 13px).
- Fallbacks: `Literata, Georgia, serif` · `"Work Sans", system-ui, sans-serif` · `Caveat, "Segoe Print", cursive`.

## Type scale
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem);   /* body 17→18px, lh 1.5, measure 66ch */
--fs-1:  clamp(1.275rem, 1.2rem + .35vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.4rem + .7vw, 2rem);
--fs-3:  clamp(1.84rem, 1.6rem + 1.2vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.85rem + 1.9vw, 3.55rem);
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 5rem);  /* Literata is wide-ish: cap 5rem */
--lh-display: .98; --track-display: -0.025em; --lh-body: 1.5; --measure: 66ch;
```
h1 centered, max-width 16ch, `text-wrap:balance`. h2 `--fs-4` 600, -0.02em. Entry lines: Literata italic 500 `--fs-2`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px,7vw,80px)` · `--pad-normal: clamp(96px,10vw,120px)` · `--pad-loose: clamp(128px,13vw,160px)`.

## Grid
12 cols ≥ 1100 / 8 cols 640-1099 / 4 cols < 640; gutter `clamp(16px,2vw,24px)`; `--max: 1280px`; page margin `clamp(20px,5vw,64px)`.
**Month margin column:** cols 1-2 at ≥ 1100 (sticky small-caps month label per section), content cols 3-12; at < 1100 the month label sits above the h2 as a kicker on a short tape strip.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent | focus | btn | ratios |
|---|---|---|---|---|---|---|---|---|
| t-light | #FBF7EE | #2A2118 | #5E5243 | rgba(42,33,24,.18) | #8A1F2C | #8A1F2C | #8A1F2C / #FFFFFF | ink 14.77, accent 8.49, white/btn 9.07 |
| t-paper | #F3EBDA | #2A2118 | #5E5243 | rgba(42,33,24,.2) | #8A1F2C | #8A1F2C | #8A1F2C / #FFFFFF | ink 13.32, muted 6.40, accent 7.65 |
| t-mid (tape) | #E4D6B8 | #2A2118 | #5E5243 | rgba(42,33,24,.24) | #8A1F2C | #8A1F2C | #8A1F2C / #FFFFFF | ink 10.99, muted 5.28, accent 6.31 |
| t-deep | #1F2E3A | #F3EBDA | #B9C3C9 | rgba(243,235,218,.2) | #C9962E | #C9962E | #F3EBDA / #1F2E3A | ink 11.72, muted 7.75, gold 5.22, btn 11.72 |
| t-accent | #8A1F2C | #F3EBDA | #F3EBDA | rgba(243,235,218,.3) | #F3EBDA | #F3EBDA | #F3EBDA / #8A1F2C | text 7.65 |
Wheat gold #C9962E on paper = 2.24: shapes only (hatch, tick on light uses #8A1F2C or ink).
Band order: never deep→deep. Deep used for year story + thaw clock only.

## Radius / rules / shadow
Radius 2px everywhere (tape and cards), 999px only for the Sample tag pill. Rules 1px `var(--rule)`; ruled tape lines 1px `rgba(42,33,24,.12)` every 1.5em. Shadow only on mobile bar and popovers: `0 8px 24px rgba(31,46,58,.18)`. Review notes get `0 1px 0 rgba(42,33,24,.12)` only (paper edge, not a float).

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;` marquee 60s linear, pauses on :hover/:focus-within, none under reduced motion.

## Components
- **Buttons ≥ 48px:** primary `.btn` bg var(--btn-bg) ink var(--btn-ink), Work Sans 600 `--fs-0`, padding 14px 24px, radius 2px, :active scale(.97). Secondary `.btn--line` 2px inset border currentColor, transparent. Text link `.link` with pencil underline hover.
- **Input:** 52px tall, bg #FBF7EE, 1px solid #5E5243 bottom-heavy (border-bottom 2px), radius 2px, label above Work Sans 500 `--fs--1` uppercase .1em. Error text #8A1F2C.
- **Card / note:** bg #FBF7EE, padding var(--s-6), radius 2px, a 64×22px tape tab overlaps the top edge (rotate -2deg, `.tape`).
- **Sample tag:** pill, Work Sans 600 `--fs--1`, 1px border currentColor, padding 2px 10px, text "Sample".
- **Frame (vignette):** SVG line drawing, `stroke: var(--ink); stroke-width:1.5; vector-effect:non-scaling-stroke; fill:none`, aspect 4/3, on tape bg; hatch via `<pattern>` 45° lines 6px apart, frost `#1F2E3A` at .35 opacity, warm `#C9962E` at .6.
- **Header:** `--header-h: 68px` (60px < 640), t-light, wordmark Literata 600 italic `{{biz.short}}`, nav anchors, phone tabular right + Call button.
- **Mobile bar (< 900px):** fixed bottom, 64px + `env(safe-area-inset-bottom)`, 3 equal cells Call (primary) | Text | Book, t-light with shadow; body padding-bottom 80px.
- **Signature primitive `.tape`:**
```css
.tape{--skew:-.6deg;position:relative;background:#E4D6B8;color:#2A2118;padding:var(--s-4) var(--s-6);transform:rotate(var(--skew));
  background-image:repeating-linear-gradient(0deg,transparent 0 calc(1.5em - 1px),rgba(42,33,24,.12) calc(1.5em - 1px) 1.5em);
  clip-path:polygon(0 4%,2% 0,98% 3%,100% 0,99% 50%,100% 100%,97% 96%,3% 100%,0 97%,1% 50%)}
.tape__month{font:600 var(--fs--1)/1 "Work Sans";letter-spacing:.14em;text-transform:uppercase;color:#5E5243}
.tape__entry{font:italic 500 var(--fs-2)/1.15 Literata}
.tick{width:1.4em;height:1.1em;stroke:var(--accent);stroke-width:2.5;fill:none;stroke-linecap:round;
  stroke-dasharray:40;stroke-dashoffset:calc(40 * (1 - var(--sw-p,1)))}  /* path: M2 10 L8 16 L22 2, slightly wobbly */
```
`--sw-p` defaults 1 (ticked) so JS off / reduced motion show every tick drawn; JS sets 0 then animates.

## Photo grade
Photo-free site (no hero-C key exists; the 5 library photos are off-brief). If the builder ever adds one: `filter:saturate(.8) contrast(1.04) sepia(.12)` + multiply overlay #E4D6B8 at .25. Default: drawn vignettes only.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.btn,.tape{border:1px solid CanvasText}.tick{stroke:CanvasText}:focus-visible{outline-color:Highlight}}
```
