# insulation-B · Stage 3 design system (copy into :root)

## Fonts
- Display **Bitter** variable wght 100-900 (`assets/fonts/bitter/…normal.woff2`), PRELOAD this file only. Used 600 (h1, h2), 500 (h3), 700 (finding tags).
- Text **Instrument Sans** variable wght 400-700, wdth 75-100. Body 400 wdth 100; labels/table heads 600 wdth 85.
- Accent **Martian Mono** variable wght 100-800, wdth 75-112.5. Readings 500 wdth 87.5, `font-variant-numeric: tabular-nums`.
  Run `node tools/fetch-fonts.mjs "Martian Mono"` / "Instrument Sans" / "Bitter" if a file is missing.
- `font-display: swap`; fallbacks: Bitter → Georgia, Instrument Sans → Arial, Martian Mono → Consolas, monospace.

## Type scale
```
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, nothing under 13 */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem); /* body 17-19 */
--fs-1:  clamp(1.275rem, 1.15rem + .5vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2rem);
--fs-3:  clamp(1.836rem, 1.45rem + 1.8vw, 2.66rem);
--fs-4:  clamp(2.2rem, 1.6rem + 2.8vw, 3.55rem);
--fs-h1: clamp(2.5rem, min(8.4vw, 9svh) + .1rem, 4.6rem);   /* Bitter is wide-ish: cap 4.6rem */
--fs-read: clamp(2.75rem, 2rem + 4vw, 5.5rem);              /* Martian Mono readings, wdth 87.5 */
```
h1: Bitter 600, letter-spacing -0.03em, line-height .96, max 13ch. h2: 600, -0.02em, lh 1.02. Body lh 1.5, measure 64ch.
Labels: Instrument Sans 600 wdth 85, --fs--1, uppercase, letter-spacing .08em. Finding tag: Martian Mono 500 --fs--1 ("F-01").

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Sections: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(112px, 12vw, 160px)`.

## Grid
12 cols ≥ 1100 / 8 cols 640-1099 / 4 cols < 640; gutter `clamp(16px, 2vw, 24px)`; `--max: 1240px`; page margin `clamp(20px, 5vw, 56px)`.
**Ruler margin column** ≥ 900px: `--rail: 72px` fixed first track: `grid-template-columns: var(--rail) repeat(12, minmax(0,1fr))`.
Each section's ruler + finding tag sit in the rail (sticky top: calc(var(--header-h) + 24px) inside its section). Under 900 the
ruler sits horizontally above the section heading (rotated 90deg, 22px tall).

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| Tone | bg | ink | muted | rule | accent (words) | focus | primary btn |
|---|---|---|---|---|---|---|---|
| t-paper | #F4F1EA | #22252A 13.62 | #5A5F66 5.70 | rgba(34,37,42,.18) | #B23A0B 5.31 | #1E5FA8 5.71 | #B23A0B / #FFF 5.99 |
| t-light (cards, form) | #FFFFFF | #22252A 15.37 | #5A5F66 (≥5.7) | rgba(34,37,42,.14) | #B23A0B 5.99 | #1E5FA8 6.44 | #B23A0B / #FFF |
| t-mid | #E6E9EA | #22252A 12.59 | #555B61 5.63 | rgba(34,37,42,.2) | #B23A0B 4.91 | #1E5FA8 5.28 | #B23A0B / #FFF |
| t-deep | #1E2A33 | #F4F1EA 12.98 | #B9C2C9 8.10 | rgba(244,241,234,.2) | #F2B48F 8.15 | #7FB2EE 6.62 | #E9C44A / #22252A 9.12 |
| t-accent | #B23A0B | #FFFFFF 5.99 | #FFFFFF (opacity none) | rgba(255,255,255,.35) | #FFFFFF | #FFFFFF 5.99 | #FFFFFF / #B23A0B 5.99 |
Never: #B23A0B text on t-deep (2.44). On t-accent use only white text, 600 weight for anything under 18px.
Secondary button: transparent, 2px border currentColor, ink text. Text button: underline 1px, offset 4px.

## Radius / rules / shadow
Radius: 2px everywhere (paper and card stock), 999px only for the Sample tag. Rules: 1px var(--rule); report rules 2px var(--ink).
Shadow only on floating: mobile bar and photo plate `0 1px 0 rgba(34,37,42,.08), 0 18px 40px -18px rgba(30,42,51,.35)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **Buttons** min-height 52px, padding 0 22px, Instrument Sans 600 --fs-0, radius 2px. Primary = accent bg. Call button shows
  a 16px phone glyph + `{{biz.phone}}`. Press: scale(.98) 120ms.
- **Input** 52px, 1.5px border #5A5F66 (5.70 on paper, passes 3:1 non-text), bg #FFF, radius 2px; label above, 600 --fs--1.
- **Card (finding)**: t-light, 1px rule, padding --s-6; header row = finding tag (mono) · label · reading right-aligned (mono --fs-2).
- **Sample tag**: pill 999px, 1px border currentColor, Instrument Sans 600 13px uppercase .06em, text "Sample".
- **Photo plate**: `aspect-ratio: 3/2`, white 10px border + 34px bottom lip carrying caption "P-01 · exterior · Sample" in mono 13px,
  rotate(-1.5deg) ≥ 900 (0 under 640), two tape corners (pseudo-elements, #E9C44A at .7 opacity, 64×22px, rotated ±38deg).
- **Header**: `--header-h: 68px` (60 under 640), t-paper, bottom rule 1px; wordmark "Inchwise" Bitter 700 + a 6px ruler-tick under it.
- **Mobile bar** (< 900): fixed bottom, 64px, 3 equal buttons Call | Text | Price it, t-deep bg, safe-area padding, shadow above.
- **Signature primitive `.ruler`** (draw once, reuse everywhere):
  ```css
  .ruler{--in:20; --val:3.5; --h:clamp(180px,32svh,320px); position:relative; inline-size:28px; block-size:var(--h);
    background:#E9C44A; border:1px solid #22252A; border-radius:2px;
    background-image:repeating-linear-gradient(to top,#22252A 0 1px,transparent 1px calc(var(--h)/var(--in)));}
  .ruler::before{/* long tick every 2in */ content:""; position:absolute; inset:0 50% 0 0;
    background:repeating-linear-gradient(to top,#22252A 0 2px,transparent 2px calc(var(--h)/var(--in)*2));}
  .ruler__staple{position:absolute; top:10px; left:5px; inline-size:18px; block-size:3px; background:#5A5F66; box-shadow:0 8px 0 #5A5F66;}
  .ruler__fill{position:absolute; inset:auto -10px 0 -10px; block-size:calc(var(--val)/var(--in)*100%);
    background:url(fill.svg) repeat; /* stipple of grey-white loose-fill drawn inline as SVG pattern */
    transition:block-size var(--t-story) var(--ease-out);}
  .ruler.is-low .ruler__fill{outline:2px solid #B23A0B; outline-offset:-2px}
  .ruler__read{font:500 var(--fs-2)/1 "Martian Mono",monospace; font-variation-settings:"wdth" 87.5}
  .ruler.is-low + .ruler__read{color:var(--accent)}
  ```
  Variants: `.ruler--mini` (--h:56px, 16px wide), `.ruler--flat` (horizontal, footer, 0-20 ticks across full width), `.ruler--stub`
  (--h:80px, review clip), `.ruler--stopped` (fill swapped for pebble pattern, ruler at 45% opacity, label "Test first").
  Loose-fill pattern: inline `<pattern>` of 14 random 2-3px circles in #B9C2C9 / #FFFFFF on #DDD8CC, 24×24 tile.
  The R-49 / R-60 marks: 1px dashed #1E2A33 lines across the story section at 16.3 in and 20 in (in × 3, typical; label "R-49 typical, ENERGY STAR / DOE").

## Photo grade
`.ph img{filter:saturate(.78) contrast(1.06) sepia(.06) brightness(1.03)}` (cools the yellow siding toward the paper, keeps it documentary).
No overlay on the plate. Drawn SVG illustrations use only ink #22252A strokes 1.5px, fill tones #E6E9EA / #DDD8CC / #E9C44A / #B23A0B.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}`
`@media (forced-colors:active){.ruler{forced-color-adjust:none;border-color:CanvasText} .btn{border:2px solid ButtonText} :focus-visible{outline-color:Highlight}}`
