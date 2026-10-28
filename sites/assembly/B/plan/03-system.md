# assembly-B · Design system (copy into :root)

## Fonts
- Display: Sofia Sans Condensed, `assets/fonts/sofia-sans-condensed/sofia-sans-condensed-1-1000-normal.woff2`, wght axis.
  Weights used: 600 (item names), 780 (h2, plates), 840 (h1). **Preload: yes (only this one).**
- Text: Geist, `assets/fonts/geist/geist-100-900-normal.woff2`, 400 body, 500 lead, 600 labels/buttons. No preload.
- Accent: JetBrains Mono, `.../jetbrains-mono-100-800-normal.woff2`, 500 only. Codes, Sample tags, plate sublines.
- `font-display:swap`; fallbacks: display `"Arial Narrow", sans-serif`; text `system-ui, sans-serif`; mono `ui-monospace, monospace`.
- All numbers: `font-variant-numeric: tabular-nums`.

```css
:root{
  --f-display:"Sofia Sans Condensed","Arial Narrow",sans-serif;
  --f-text:"Geist",system-ui,sans-serif;
  --f-mono:"JetBrains Mono",ui-monospace,monospace;
```

## Type scale (1.2 → 1.333)
```css
  --fs--1:clamp(.8125rem,.79rem + .1vw,.875rem);   /* 13-14px, mono labels, never smaller */
  --fs-0:clamp(1.0625rem,1.03rem + .15vw,1.125rem); /* 17-18px body */
  --fs-1:clamp(1.275rem,1.2rem + .35vw,1.5rem);
  --fs-2:clamp(1.53rem,1.38rem + .7vw,2rem);
  --fs-3:clamp(1.84rem,1.58rem + 1.25vw,2.665rem);
  --fs-4:clamp(2.2rem,1.8rem + 2vw,3.55rem);
  --fs-h1:clamp(2.9rem,min(10.5vw,10.5svh) + .1rem,6.25rem); /* condensed: 3 lines at 375, 2 lines at 1440 */
  --fs-plate:clamp(4rem,3rem + 6vw,8.5rem);        /* PC 04, 4.8 */
  --fs-ghost:clamp(7rem,20vw,19rem);               /* outlined PC 01-07 behind section heads */
  --lh-display:.9; --lh-body:1.5; --track-display:-.02em; --track-mono:.06em;
  --measure:66ch;
```
h1: weight 840, `letter-spacing:-.02em`, `line-height:.9`, uppercase NO (sentence case, condensed carries it).
h2: `--fs-4`, 780, lh .95. Item names/tile labels: `--fs-2`, 600, uppercase, tracking .02em. Body `--fs-0`/1.5, max 66ch.
Mono labels: `--fs--1`, 500, uppercase, `letter-spacing:.06em`.

## Space
```css
  --s-1:4px;--s-2:8px;--s-3:12px;--s-4:16px;--s-5:24px;--s-6:32px;--s-7:48px;--s-8:64px;--s-9:96px;--s-10:120px;--s-11:160px;
  --pad-tight:clamp(56px,7vw,80px); --pad-normal:clamp(80px,9vw,120px); --pad-loose:clamp(104px,12vw,160px);
```

## Grid
- 12 cols ≥1100 (gutter 24px), 8 cols 640-1099 (gutter 20px), 4 cols <640 (gutter 16px). `--max:1360px`, side margin `clamp(16px,4vw,56px)`.
- **Margin column (signature):** ≥1100px, cols 11-12 hold the sticky carton stack (`position:sticky; top:calc(var(--header-h) + 24px)`); content spans cols 1-10. <1100: stack becomes a bottom sheet folded into the mobile bar (tap "PC 03 ▲" to open).
```css
  --header-h:64px; --max:1360px; --gutter:24px; --rail:clamp(168px,14vw,208px);
```

## Tones (each sets the same variables)
```css
.t-deep  {--bg:#0E141C;--ink:#F4F2EC;--muted:#A9B1BB;--rule:#5C646E;--accent:#F2DA1A;--focus:#F2DA1A;--link:#8EB8FF;--btn-bg:#F2DA1A;--btn-ink:#0E141C;--btn2-line:#F4F2EC}
.t-mid   {--bg:#252C36;--ink:#F4F2EC;--muted:#B4BBC4;--rule:#5C646E;--accent:#F2DA1A;--focus:#F2DA1A;--link:#8EB8FF;--btn-bg:#F2DA1A;--btn-ink:#0E141C;--btn2-line:#F4F2EC}
.t-paper {--bg:#F1EFE9;--ink:#0E141C;--muted:#545C66;--rule:#C9C5BA;--accent:#0E141C;--focus:#0E141C;--link:#2D5BD7;--btn-bg:#0E141C;--btn-ink:#F2DA1A;--btn2-line:#0E141C}
.t-light {--bg:#E2DFD6;--ink:#0E141C;--muted:#4F5761;--rule:#BDB8AC;--accent:#0E141C;--focus:#0E141C;--link:#0E141C;--btn-bg:#0E141C;--btn-ink:#F2DA1A;--btn2-line:#0E141C}
.t-accent{--bg:#F2DA1A;--ink:#0E141C;--muted:#3A3300;--rule:#0E141C;--accent:#0E141C;--focus:#0E141C;--link:#0E141C;--btn-bg:#0E141C;--btn-ink:#F2DA1A;--btn2-line:#0E141C}
```
Contrast (tools/contrast.mjs): deep: ink 16.52, muted 8.53, accent/focus 13.05, link 9.20 · mid: ink 12.57, muted 7.26,
accent/focus 9.93 · paper: ink/focus 16.08, muted 5.89, link 5.08 · light: ink 13.87, muted 5.49 · accent band: ink/focus
13.05, muted 8.96 · buttons: #0E141C on #F2DA1A 13.05; #F2DA1A on #0E141C 13.05. `--rule` #5C646E on deep = 3.08:
rules/outlines only. **Yellow never carries words on paper/light** (plates there are yellow fill + ink text).
Rule (paper) #C9C5BA and (light) #BDB8AC: decorative hairlines only.
Band order is dark-led: deep (hero) → paper → deep → mid → accent (thin) → deep → paper → deep(footer). Never deep→deep.

## Radius, rules, shadow
- Radius: **0 everywhere** (cartons are square; the flap chamfer is the only "corner"). Inputs 0. Pills: none.
- Rules: 1px `var(--rule)`; signature rules 2px `var(--accent)`.
- Shadow: only floating things: mobile bar + stack sheet `0 -8px 24px rgba(0,0,0,.35)`; nothing else.

## Motion tokens
```css
  --ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1);
  --d-press:120ms; --d-ui:200ms; --d-drop:320ms; --d-page:520ms; --d-story:900ms; --stagger:60ms;
}
```

## Components
- **Buttons** (min-height 48px, padding 0 22px, Geist 600 `--fs-0`, radius 0):
  primary `background:var(--btn-bg);color:var(--btn-ink)`; secondary `border:2px solid var(--btn2-line);color:var(--ink);background:none`;
  text button = Geist 600 + underline 2px offset 4px. `:active{transform:scale(.97)}` 120ms.
- **Input:** height 52px, `background:transparent; border:0; border-bottom:2px solid var(--ink)` on paper; on deep use
  `#252C36` fill + 1px `#5C646E` frame; label above in mono `--fs--1`. Error text #F2DA1A on deep / #0E141C bold on paper with ✕ icon.
- **Card = `.carton`** (below). Everything that is a card is a carton.
- **Sample tag:** `.tag{font:500 var(--fs--1)/1 var(--f-mono);text-transform:uppercase;letter-spacing:.06em;border:1px solid currentColor;padding:4px 6px}`.
- **Frame (photo):** ratio 4/5 (tall) or 3/2; 0 radius; 1px `var(--rule)` inner outline; grade below.
- **Header:** `--header-h:64px`, t-deep, wordmark = stencil plate "PC" + name in display 780; phone visible ≥ 900.
- **Mobile bar** (<900): fixed bottom, 64px + safe-area; left half "Call" (yellow), right half "PC 00 ▲ list" opens the stack sheet; "Text a photo" inside the sheet.

## Signature primitive: carton + stencil plate (draw once, reuse)
```css
.carton{--flap:14px;position:relative;background:var(--carton-bg,#252C36);color:var(--ink);
  clip-path:polygon(0 0,calc(100% - var(--flap)) 0,100% var(--flap),100% 100%,0 100%);
  padding:var(--s-5);border-left:3px solid var(--accent);
  transition:transform var(--d-ui) var(--ease-out),clip-path var(--d-ui) var(--ease-out)}
.carton::after{/* corrugated flute edge along the bottom */content:"";position:absolute;inset:auto 0 0 0;height:6px;
  background:repeating-linear-gradient(90deg,currentColor 0 2px,transparent 2px 6px);opacity:.22}
@media (hover:hover){.carton:hover{transform:translateY(-4px);--flap:22px}}
.plate{font:780 var(--fs-plate)/.86 var(--f-display);letter-spacing:-.01em;font-variant-numeric:tabular-nums;color:var(--accent);
  /* stencil bridge: a 2px cut through the middle of every glyph */
  -webkit-mask:linear-gradient(#000 0 0) top/100% calc(50% - 1px) no-repeat,linear-gradient(#000 0 0) bottom/100% calc(50% - 1px) no-repeat;
          mask:linear-gradient(#000 0 0) top/100% calc(50% - 1px) no-repeat,linear-gradient(#000 0 0) bottom/100% calc(50% - 1px) no-repeat}
.plate small{display:block;font:500 var(--fs--1)/1.3 var(--f-mono);letter-spacing:.06em;text-transform:uppercase;-webkit-mask:none;mask:none;color:var(--muted)}
.ghost-no{font:840 var(--fs-ghost)/.8 var(--f-display);color:transparent;-webkit-text-stroke:1.5px var(--rule);
  position:absolute;right:calc(var(--s-6) * -1);top:0;pointer-events:none} /* aria-hidden, decorative, overflow clipped by section */
.stack{/* margin rail, data-sw-signature */display:flex;flex-direction:column-reverse;gap:4px}
.stack .carton{--flap:8px;padding:8px 10px;font:600 var(--fs-0)/1 var(--f-display);text-transform:uppercase}
.sw-motion .stack .carton.is-new{animation:drop var(--d-drop) var(--ease-out)}
@keyframes drop{from{transform:translateY(-24px);opacity:0}}
.sw-motion .stack.is-flat .carton{transform:scaleY(.12);transform-origin:bottom;transition:transform var(--d-page) var(--ease-io)}
@media (prefers-reduced-motion:reduce){.carton,.stack .carton{animation:none!important;transition:none!important}}
```
Variants: hero tile (`--carton-bg:#252C36`, `--fs-2` name, +/− buttons 48px), margin stack chip (above), wall plate
(`.plate` at `--fs-3` + `small` "WALL 04 · CONCRETE"), price-row code (mono `.tag` in carton-left-border row), review
label (carton on paper: `--carton-bg:#E2DFD6`, border-left #0E141C), footer flat bundle (SVG: 5 flat sheets + 2 straps).
Wall cross-sections: SVG, stroke `currentColor` 1.5px, hatches per material (drywall: none; plaster: dots; brick: running
bond; concrete: stipple + aggregate triangles), anchor stroke `var(--accent)` 2.5px drawn with `stroke-dasharray`.

## Photo grade
Night/evening city interiors: `filter:saturate(.8) contrast(1.08) brightness(.94) hue-rotate(-4deg)`; optional overlay
on deep bands: `linear-gradient(180deg,rgba(14,20,28,0) 55%,rgba(14,20,28,.65))` only where a caption sits on the photo.
On paper bands: `saturate(.85) contrast(1.05)` and no overlay. Never text over an ungraded photo.

## Focus + forced colors
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
.carton:focus-within{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){
  .carton{clip-path:none;border:1px solid CanvasText}
  .plate{-webkit-mask:none;mask:none;color:CanvasText}
  .btn{border:2px solid ButtonText}
  .ghost-no{display:none}
  :focus-visible{outline-color:Highlight}
}
```
