# autobody-B · Design system (copy into :root)

## Fonts
- Display: Schibsted Grotesk, `assets/fonts/schibsted-grotesk/schibsted-grotesk-400-900-normal.woff2`, weights 800 (h1/h2), 700 (h3). **Preload: yes (only this one).**
- Text: Public Sans, `public-sans-100-900-normal.woff2` + italic, weights 400 body, 600 strong/labels.
- Accent: Martian Mono, `martian-mono-100-800-normal.woff2`, 500 readings / 400 labels, `font-stretch: 87.5%` (wdth axis 75–112.5); readout big digits `font-stretch:75%; font-weight:600`.
- `font-variant-numeric: tabular-nums` on every `.mono`, price, hour, phone, readout.
```css
--ff-display:"Schibsted Grotesk",ui-sans-serif,sans-serif;
--ff-text:"Public Sans",ui-sans-serif,sans-serif;
--ff-mono:"Martian Mono",ui-monospace,monospace;
```

## Type scale (1.2 mobile → 1.333 desktop, base 17→18px)
```css
--fs--1: clamp(.875rem, .85rem + .12vw, .9375rem);   /* 14–15px, labels/mono; never below 13px */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* body 17–18px */
--fs-1:  clamp(1.275rem, 1.2rem + .35vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.4rem + .7vw, 2rem);
--fs-3:  clamp(1.836rem, 1.6rem + 1.2vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.85rem + 1.9vw, 3.553rem);
--fs-h1: clamp(2.5rem, min(8.2vw, 9svh) + .1rem, 4.75rem); /* Schibsted is mid-wide: cap 4.75rem; split hero = half width */
--fs-readout: clamp(2rem, 1.6rem + 2vw, 3.25rem); /* mono digits in the signature */
```
- h1: 800, `letter-spacing:-.035em`, `line-height:.96`, `text-wrap:balance`. h2: 800, -.03em, 1.0. h3: 700, -.015em, 1.15.
- Body line-height 1.5, measure `max-width:66ch`. Mono labels uppercase, `letter-spacing:.06em`, `--fs--1`.
- Lead: `--fs-1`, weight 400, `color:var(--ink)`.

## Space
```css
--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:120px; --s-11:160px;
--pad-tight: clamp(56px, 6vw, 80px);
--pad-normal: clamp(80px, 9vw, 120px);
--pad-loose: clamp(104px, 12vw, 160px);
```

## Grid
- 12 cols ≥ 1100 / 8 cols 640–1099 / 4 cols < 640; gutter `clamp(16px, 2vw, 24px)`; `--max: 1320px`; side margin `clamp(20px, 5vw, 64px)`.
- **Reading column:** cols 1–2 at ≥ 1100 hold the section's `.readout` (sticky `top: calc(var(--header-h) + 24px)` within its section); content in cols 3–12 (or 3–8 + 9–12). 640–1099: readout sits above the h2, inline. < 640: readout inline, left aligned, max-width 100%.
- Hero split ≥ 900: `grid-template-columns: minmax(0,1.05fr) minmax(0,.95fr)`; seam at the column line, the hero `.readout` positioned `left: calc(52.5% - 92px)` straddling it (z-index 2). < 900: stacked, photo/drawing 4:3 band, readout `margin-top:-40px` overlapping its top edge.

## Tones
| class | --bg | --ink | --muted | --rule | --accent | --focus | button bg / text |
|---|---|---|---|---|---|---|---|
| `t-paper` (default) | #F5F2EB | #15181C (15.92) | #575650 (6.58) | rgba(21,24,28,.18) | #1748C8 (6.71) | #1748C8 (6.71) | #1748C8 / #FFFFFF (7.50) |
| `t-light` (cards, form fields) | #FFFFFF | #15181C (17.80) | #575650 (7.36) | rgba(21,24,28,.14) | #1748C8 (7.50) | #1748C8 (7.50) | #1748C8 / #FFFFFF |
| `t-sand` (mid) | #E7DDC9 | #15181C (13.21) | #575650 (5.46) | rgba(21,24,28,.22) | #1748C8 (5.57) | #1748C8 (5.57) | #1748C8 / #FFFFFF |
| `t-deep` (story band, footer) | #10202F | #F5F2EB (14.79) | #A9B2BC (7.70) | rgba(245,242,235,.18) | #9DB9FF (8.51) | #9DB9FF (8.51) | #9DB9FF / #10202F (8.51) |
| `t-accent` (claim CTA band) | #1748C8 | #F5F2EB (6.71) | #C9D2DC (4.91) | rgba(245,242,235,.3) | #F5F2EB | #F5F2EB (6.71) | #F5F2EB / #15181C (15.92) |
- Signal: `--signal:#B42318` on paper (5.88) / sand (4.87); on deep `--signal:#FF8A75` (7.20). White on #B42318 6.57 for status chips.
- #9DB9FF on #1748C8 = 3.86: **never text**, only strata fills/rules on the accent band.
- Secondary button: transparent, 2px border `currentColor`, text `--ink`. Text button: `--accent`, underline 2px offset 4px.
- Order rule: never two `t-deep` bands touching.

## Radius, rules, shadow
- Radius: **2px everywhere** (instrument housing), `999px` only for status chips. Swatches 2px.
- Rules: 1px `var(--rule)` for sheet lines; 2px `var(--ink)` for section top rule (test-sheet header line).
- Shadow: only mobile bar and the hero readout (floating over the seam): `0 1px 0 rgba(21,24,28,.25), 0 12px 28px -12px rgba(16,32,47,.45)`.

## Motion tokens
```css
--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1);
--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;
```

## Components
- **Buttons:** min-height 48px (52px in hero), padding `0 22px`, `--ff-text` 600 `--fs-0`, radius 2px. Primary = accent bg. Phone button shows a 16px handset glyph + the number in mono. `:active{transform:translateY(1px)}` 120ms.
- **Input:** 52px tall, `t-light` bg, 1px border `#575650` (7.36 on white, also ≥ 3 for non-text), radius 2px, label above in mono `--fs--1`; error text `--signal`.
- **Card:** none as boxes; content sits on sheet rows: `border-top:1px solid var(--rule); padding: var(--s-5) 0`.
- **Sample tag:** `.tag-sample` mono `--fs--1`, uppercase, 1px border currentColor, padding `2px 6px`, radius 2px, text "Sample".
- **Frame:** photos 4:5 in hero split (full half-height), 3:2 elsewhere; radius 2px; a 1px ink hairline inset (`outline:1px solid rgba(21,24,28,.2); outline-offset:-1px`).
- **Header:** `--header-h:68px` (60px < 640), `t-paper` with 1px bottom rule; wordmark = initials "BL" in Martian Mono inside a 2px-ruled square + name in Schibsted 700; right: phone button (icon-only + sr label < 640, 48×48).
- **Mobile bar** (< 900, after hero leaves view): 3 equal buttons Call / Text photos / Price it, 56px, `t-deep` bg, safe-area padding, shadow above.
- **Signature primitive `.readout`** (drawn once, reused):
```html
<figure class="readout" data-sw-signature style="--mil:4.6;--mil-max:6">
  <div class="readout__lcd"><span class="readout__val">4.6</span><span class="readout__unit">mils</span>
    <span class="readout__status">factory range</span><span class="tag-sample">Sample</span></div>
  <div class="readout__strata" aria-hidden="true"><i class="l-clear"></i><i class="l-base"></i><i class="l-primer"></i><i class="l-ecoat"></i></div>
  <figcaption class="sr-only">Sample reading: 4.6 mils, factory range</figcaption>
</figure>
```
```css
.readout{display:inline-grid;gap:6px;width:184px;font-family:var(--ff-mono)}
.readout__lcd{display:grid;grid-template-columns:auto 1fr;align-items:baseline;gap:2px 8px;padding:10px 12px;
  background:var(--readout-bg,#15181C);color:var(--readout-ink,#F5F2EB);border-radius:2px;
  box-shadow:inset 0 0 0 1px rgba(245,242,235,.12)}
.readout__val{font-size:var(--fs-readout);font-weight:600;font-stretch:75%;line-height:1;font-variant-numeric:tabular-nums}
.readout__unit,.readout__status{font-size:var(--fs--1);text-transform:uppercase;letter-spacing:.06em}
.readout__status{grid-column:1/-1;color:#9DB9FF}            /* 9.17 on #15181C, 8.51 on #10202F */
.readout[data-state="low"] .readout__status{color:#FF8A75}
.readout__strata{display:grid;grid-template-rows:calc(var(--mil)/var(--mil-max)*28px) 8px 6px 4px;height:auto}
.l-clear{background:linear-gradient(#9DB9FF,#1748C8);transition:height var(--t-story) var(--ease-out)}
.l-base{background:#15181C}.l-primer{background:#A9B2BC}.l-ecoat{background:#575650}
.readout[data-state="peel"] .l-clear{clip-path:polygon(0 40%,18% 0,30% 55%,46% 10%,60% 60%,78% 5%,100% 45%,100% 100%,0 100%)}
.readout[data-coat] .readout__strata::before{content:"";display:block;height:2px;background:#F5F2EB;box-shadow:0 0 0 1px #1748C8}
```
  Measured: #9DB9FF on #15181C 9.17, #FF8A75 on #15181C 7.75, #F5F2EB on #15181C 15.92. Variants per section in 02-concept §3.
- **Paint swatch (hero sorter):** 72×72 (≥ 48 tap), radius 2px, CSS textures: dull = `#3E5A78` + `filter:saturate(.5)`; chalky = same + white noise SVG overlay 35%; peeling = base + clip-path flakes in `#E7DDC9`; bare = `#A9B2BC` primer. Selected: 3px ink ring + readout re-prints. Label under each in mono.

## Photo grade
`filter: saturate(.82) contrast(1.08) brightness(1.03) sepia(.06)` (hard desert noon, slightly bleached, no warm glow). No duotone on photos; the deep story band may use `mix-blend-mode:multiply` over `#10202F` at 0 opacity = none. Drawn SVG fills only use palette hexes.

## Focus + forced colors
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.readout__lcd,.btn{border:1px solid CanvasText}.readout__strata i{background:CanvasText}
  :focus-visible{outline-color:Highlight}}
```
Reduced motion: `.readout__val` prints final value, strata at final height, no pin, no counts.
