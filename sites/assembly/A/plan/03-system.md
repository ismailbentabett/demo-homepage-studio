# assembly-A · Design system ("the manual that should have come in the box")

## Fonts
- Display **Familjen Grotesk** variable wght 400-700, use 600 (h2/h3) and 700 (h1). File
  `assets/fonts/familjen-grotesk/familjen-grotesk-400-700-normal.woff2` → **preload** (only preload).
- Text **Public Sans** variable 100-900, use 400 body, 500 lead, 600 labels/buttons. No italic file needed except quotes (italic woff2, not preloaded).
- Accent **JetBrains Mono** variable 100-800, use 500 (step numbers, BAG labels, prices, counts, phone). Always `font-variant-numeric: tabular-nums slashed-zero`.
- No width/opsz axes on these faces; the second voice is the mono, not an axis.
```css
--font-display:"Familjen Grotesk",ui-sans-serif,system-ui,sans-serif;
--font-text:"Public Sans",ui-sans-serif,system-ui,sans-serif;
--font-mono:"JetBrains Mono",ui-monospace,Menlo,monospace;
```

## Type scale (1.2 at 360 → 1.333 at 1440)
```css
--fs--2:clamp(.8125rem,.79rem + .1vw,.875rem);   /* 13-14px: mono labels, Sample tags (floor 13) */
--fs--1:clamp(.875rem,.85rem + .15vw,.9375rem);   /* 14-15 */
--fs-0:clamp(1.0625rem,1.02rem + .2vw,1.1875rem); /* body 17-19 */
--fs-1:clamp(1.25rem,1.15rem + .45vw,1.5rem);     /* lead, h4 */
--fs-2:clamp(1.5rem,1.3rem + .9vw,2rem);          /* h3, prices */
--fs-3:clamp(1.8rem,1.45rem + 1.6vw,2.75rem);     /* h2 */
--fs-4:clamp(2.15rem,1.6rem + 2.6vw,3.75rem);     /* step numerals, footer statement */
--fs-h1:clamp(2.6rem,min(8.6vw,9.2svh) + .1rem,4.9rem); /* Familjen is a normal-width grotesk: cap 4.9rem */
```
- h1: 700, `letter-spacing:-.035em`, `line-height:.96`, `text-wrap:balance`. h2: 600, -.025em, 1.02. h3: 600, -.015em, 1.1.
- Body: `--fs-0`, line-height 1.5, `max-inline-size:66ch`, `text-wrap:pretty`. Lead: `--fs-1`, 500, 1.4, 52ch.
- Mono labels: `--fs--2`, 500, `letter-spacing:.06em`, uppercase. Nothing below 13px.

## Space
```css
--s-1:4px;--s-2:8px;--s-3:12px;--s-4:16px;--s-5:24px;--s-6:32px;--s-7:48px;--s-8:64px;--s-9:96px;--s-10:120px;--s-11:160px;
--pad-tight:clamp(56px,7vw,80px);--pad:clamp(80px,9vw,120px);--pad-loose:clamp(104px,12vw,160px);
```
Blueprint alternates tight / normal / loose; never two loose in a row.

## Grid ("manual page")
- `--max:1320px`, `--gutter:clamp(16px,2vw,24px)`, `--margin-x:clamp(20px,4vw,56px)`.
- 12 cols ≥ 1100, 8 cols 640-1099, 4 cols < 640: `grid-template-columns:repeat(var(--cols),minmax(0,1fr))`.
- **Margin rail** (the signature's home): cols 1-3 on desktop hold step numeral + exploded drawing + hardware bag; content cols 5-12 (col 4 empty = air). Every other step mirrors: content 1-8, rail 10-12. At 640-1099 the rail is cols 1-2 → numeral + bag only, drawing goes inline above the content (max 280px). < 640: rail becomes a header row: numeral left, bag right, drawing below at 100% / max 320px.
- Hairline column guides: on t-light/t-paper sections at ≥ 1100, a 1px `--rule` vertical line at the rail edge (like the fold of a manual page).

## Tones (each sets the same variables)
```css
.t-light {--bg:#F8F7F3;--ink:#22262B;--muted:#5A6068;--rule:#C9CDD1;--line:#6E757D;--accent:#C42A31;--focus:#C42A31;--btn-bg:#C42A31;--btn-ink:#FFFFFF;--btn2-bd:#22262B;--btn2-ink:#22262B}
.t-paper {--bg:#EFE8DA;--ink:#22262B;--muted:#5A6068;--rule:#CFC6B4;--line:#6E757D;--accent:#C42A31;--focus:#C42A31;--btn-bg:#C42A31;--btn-ink:#FFFFFF;--btn2-bd:#22262B;--btn2-ink:#22262B}
.t-mid   {--bg:#D9DCDF;--ink:#22262B;--muted:#5A6068;--rule:#AEB4BA;--line:#4A5058;--accent:#22262B;--focus:#C42A31;--btn-bg:#22262B;--btn-ink:#F8F7F3;--btn2-bd:#22262B;--btn2-ink:#22262B}
.t-deep  {--bg:#1B1E22;--ink:#F8F7F3;--muted:#A9B0B8;--rule:#3A4047;--line:#A9B0B8;--accent:#FF8A8A;--focus:#FF8A8A;--btn-bg:#FF8A8A;--btn-ink:#1B1E22;--btn2-bd:#F8F7F3;--btn2-ink:#F8F7F3}
.t-accent{--bg:#C42A31;--ink:#F8F7F3;--muted:#FFE6E4;--rule:#E07A7F;--line:#FFE6E4;--accent:#F8F7F3;--focus:#FFFFFF;--btn-bg:#F8F7F3;--btn-ink:#C42A31;--btn2-bd:#F8F7F3;--btn2-ink:#F8F7F3}
```
Contrast (tools/contrast.mjs):
| Tone | ink/bg | muted/bg | accent/bg | focus/bg | button |
|---|---|---|---|---|---|
| t-light | 14.19 | 5.92 | 5.26 | 5.26 | #FFF on #C42A31 5.64 |
| t-paper | 12.48 | 5.20 | 4.62 | 4.62 | 5.64 |
| t-mid | 11.05 | 4.61 | ink 11.05 (tomato 4.09 → **no tomato words on t-mid**, ticks/focus only) | 4.09 | #F8F7F3 on #22262B 14.19 |
| t-deep | 15.60 | 7.63 | 7.37 | 7.37 | #1B1E22 on #FF8A8A 7.37 |
| t-accent | 5.26 | 4.75 | 5.26 | #FFF 5.64 | #C42A31 on #F8F7F3 5.26 |
Never: tomato #C42A31 on deep (2.96), hairline #8C939B for text (2.89). `--line` #6E757D on paper 4.34 / cream 3.82: strokes only.

## Radius, rules, shadow
- Radius **2px** everywhere (buttons, inputs, frames, bags); pills never. Step numeral circle = 50% (it's a drawn part, not a UI pill).
- Rules **1.5px** `var(--rule)`; drawing strokes **1.5px** `var(--line)`; explode lines `1px dashed var(--line)`, dasharray `4 4`.
- Shadow only on floating: mobile bar + popover `0 8px 24px -8px rgba(27,30,34,.28)`.

## Motion tokens
```css
--ease-out:cubic-bezier(.23,1,.32,1);--ease-io:cubic-bezier(.77,0,.175,1);
--t-press:120ms;--t-ui:200ms;--t-page:520ms;--t-story:900ms;--stagger:60ms;
```

## Components
- **Buttons (min-height 48px, padding 14px 22px, 2px radius, Public Sans 600 `--fs-0`):**
  `.btn--primary` bg `--btn-bg` / ink `--btn-ink`, mono phone digits inside; `.btn--secondary` transparent, `1.5px solid var(--btn2-bd)`; `.btn--text` ink + the dimension-line hover. Press `scale(.97)` 120ms. Primary label everywhere: "Call {{biz.phone}}"; secondary everywhere: "Price my list".
- **Input:** 52px tall, bg `#FFFFFF` on light tones (ink 15.21), `1.5px solid var(--line)`, 2px radius, label above in mono `--fs--2`; focus = global ring.
- **Card ("tray cell"):** no fill, `1.5px solid var(--rule)`, padding `--s-5`; top-left mono key "A1"; a 64px part drawing top-right.
- **Sample tag:** mono `--fs--2`, uppercase "SAMPLE", `1px solid currentColor`, padding 2px 6px, color `--muted`.
- **Frame (photos):** `--frame-ratio` 4:5 (hero, story), 3:2 (break uses full bleed 21:9 desktop / 4:5 phone); 6px `--bg` mat + 1.5px `--line` outline; caption under in mono "FIG. n — description".
- **Header:** `--header-h:68px` (60px < 640), t-light, bottom 1.5px rule; logo = wordmark in Familjen 700 + a drawn cam-bolt glyph (SVG circle + cross slot); right: phone (mono) + "Price my list". Sticky, hides on scroll down only ≥ 1100.
- **Mobile bar (< 900):** fixed bottom, 64px + safe-area, t-light, shadow; two equal buttons: Call (primary) | Price my list (secondary). Appears after 40% of the hero.
- **Step numeral:** 56px circle, `1.5px solid var(--line)`, mono 500 `--fs-1` "01"; when done (`.is-done` or `--sw-p ≥ .9`) a tomato tick (SVG path `M4 12l5 5L20 6`, stroke 2.5px `--accent`) draws over the top-right edge.

### Signature primitives (draw once, reuse)
```css
/* Hardware bag: zip-bag label */
.bag{--bag-w:min(100%,260px);position:relative;inline-size:var(--bag-w);padding:28px 16px 14px;
  border:1.5px solid var(--line);border-radius:2px;background:color-mix(in srgb,var(--bg) 70%,#FFFFFF);
  font:500 var(--fs--1)/1.45 var(--font-mono);font-variant-numeric:tabular-nums;color:var(--ink)}
.bag::before{content:"";position:absolute;inset:10px 10px auto;block-size:0;border-top:1.5px dashed var(--line)} /* zip seal */
.bag::after{content:"";position:absolute;top:4px;left:50%;inline-size:6px;block-size:6px;margin-left:-12px;border-radius:50%;
  box-shadow:0 0 0 1.5px var(--line),18px 0 0 0 transparent,18px 0 0 1.5px var(--line)} /* two punched holes */
.bag__code{display:block;font-size:var(--fs--2);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.bag__row{display:flex;justify-content:space-between;gap:12px;border-top:1px dotted var(--rule);padding-block:4px}
```
On t-deep the bag bg is `#23272C`; on t-accent bg stays transparent, line `--line`.
```css
/* Exploded view: each part is <g class="xp" style="--dx:0;--dy:-40"> in an SVG; --sw-p 0→1 closes it */
.xv{--sw-p:1;color:var(--line)}
.sw-motion .xv{--sw-p:0}
.xv .xp{transform:translate(calc((1 - var(--sw-p)) * var(--dx) * 1px),calc((1 - var(--sw-p)) * var(--dy) * 1px));transition:transform var(--t-page) var(--ease-out)}
.xv .xl{stroke-dasharray:4 4;opacity:calc(1 - var(--sw-p))}            /* explode lines fade as it closes */
.xv path,.xv rect,.xv line{fill:none;stroke:currentColor;stroke-width:1.5;vector-effect:non-scaling-stroke;stroke-linecap:round;stroke-linejoin:round}
@media (prefers-reduced-motion:reduce){.xv{--sw-p:1!important}.xv .xp{transition:none}}
```
Drawing set (builder draws once in a `<svg><defs>` sprite, `<use>` per section): dresser (hero + footer), parts grid on blanket (01), carcass + diagonal square check (02), cam bolt + cam lock (03), hinge with adjust screws (04), strap + stud + toggle (05), flattened boxes tied (06), plus 64px tray glyphs: bed, crib, wardrobe, desk + chair, TV + bracket, strap, patio table, take-apart (bag), box.
- **Dimension-line hover:** `::after` 1.5px `currentColor` with 1.5×8px end ticks, `scaleX(0→1)` origin left, 200ms, inside `@media (hover:hover)`.

## Photo grade
Cool-neutral manual daylight: `filter:saturate(.82) contrast(1.06) brightness(1.02) hue-rotate(-4deg)` on every `img` and poster. No duotone, no overlay: photos stay clean plates; the drawings do the styling.

## Focus + forced colors
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){
  .btn{border:2px solid CanvasText}
  .bag,.xv,.step-num{forced-color-adjust:auto;border-color:CanvasText;color:CanvasText}
  .xv path,.xv rect,.xv line{stroke:CanvasText}
}
```
