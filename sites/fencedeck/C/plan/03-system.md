# fencedeck-C · design system (copy into :root)

## Fonts
- Display: Instrument Serif 400 normal + 400 italic (`assets/fonts/instrument-serif/…-400-normal.woff2` **preloaded**; italic not preloaded).
  No weight axis: hierarchy comes from size + italic, never faux bold (`font-synthesis: none`).
- Text: Geist variable 100-900; use 400 body, 500 labels/buttons, 600 strong. Not preloaded.
- Accent: JetBrains Mono variable; 500 for hour tags/dims, uppercase, `letter-spacing:.08em`, size `--fs--1` min 13px.
- `font-variant-numeric: tabular-nums` on prices, phone, hours, estimator outputs, hour tags.

## Type scale (1.2 → 1.333)
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px, mono tags, captions */
--fs-0:  clamp(1.0625rem, 1.02rem + .2vw, 1.1875rem); /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.18rem + .45vw, 1.58rem);  /* lead */
--fs-2:  clamp(1.53rem, 1.36rem + .85vw, 2.11rem);   /* h3, card titles (serif) */
--fs-3:  clamp(1.84rem, 1.55rem + 1.45vw, 2.81rem);  /* h2 small */
--fs-4:  clamp(2.2rem, 1.75rem + 2.3vw, 3.75rem);    /* h2 */
--fs-h1: clamp(2.9rem, min(10vw, 10.5svh) + .1rem, 6.25rem); /* Instrument Serif is narrow: can go big */
```
h1: Instrument Serif 400, `line-height:.94`, `letter-spacing:-.02em`, `text-wrap:balance`, 3 lines at 390, 2 at 1440.
The italic word in h1 (the hour / "canyon edge") in `--accent` on deep. h2: lh 1.0, -.015em. Body Geist 400 `--fs-0`, lh 1.55,
`max-width: 66ch`. Lead `--fs-1` lh 1.4. Nothing under 13px.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 9vw, 120px)`, `--pad-loose: clamp(104px, 12vw, 160px)`.
Blueprint alternates them; the slope divider (88px tall at 1440, 56px at 390) sits *between* bands and replaces top padding by 24px.

## Grid
12 cols ≥ 1100 (gutter 24px, max 1320px + `--margin: clamp(20px, 5vw, 64px)`), 8 cols 640-1099 (gutter 20), 4 cols < 640 (gutter 16).
Hour rail (story only, ≥ 900px): cols 1-2 hold the mono hour tags, cols 3-12 content. Drawings may bleed to the viewport edge.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| Tone | bg | ink | muted | rule | accent (words) | focus | primary btn | ratios |
|---|---|---|---|---|---|---|---|---|
| `t-deep` (night) | #141B26 | #F2EEE6 | #A9B2BF | rgba(242,238,230,.16) | #E8A33D | #E8A33D | bg #E8A33D / ink #141B26 | 14.94 · 8.07 · 8.01 · focus 8.01 · btn 8.01 |
| `t-dusk` | #1E2A38 | #F2EEE6 | #A9B2BF | rgba(242,238,230,.18) | #E8A33D | #E8A33D | #E8A33D / #141B26 | 12.57 · 6.79 · 6.74 · 6.74 · 8.01 |
| `t-mid` (twilight) | #263548 | #F2EEE6 | #B8C1CC | rgba(242,238,230,.2) | #E8A33D | #E8A33D | #E8A33D / #141B26 | 10.76 · 6.84 · 5.77 · 5.77 · 8.01 |
| `t-paper` (haze, 4 PM) | #F2EEE6 | #141B26 | #5B6472 | rgba(20,27,38,.18) | #8A5A12 | #141B26 | bg #141B26 / ink #F2EEE6 | 14.94 · 5.16 · 5.10 · 14.94 · 14.94 |
| `t-sand` (ground) | #E4DCCD | #141B26 | #58606D | rgba(20,27,38,.2) | #7A4F0E | #141B26 | #141B26 / #F2EEE6 | 12.69 · 4.65 · 5.22 · 12.69 · 14.94 |
| `t-lamp` (amber band, CTA only) | #E8A33D | #141B26 | #141B26 | rgba(20,27,38,.3) | #141B26 | #141B26 | bg #141B26 / ink #F2EEE6 | 8.01 · focus 8.01 |
Sage `--sage:#9DB09A` for labels on deep (7.50) and mid (5.40); `--sage-ink:#4E6B4A` on paper (5.14); on sand large only (4.37).
Never: amber on paper/sand (1.86), white on amber (2.15). Lamp dots on light tones get `box-shadow:0 0 0 1px #141B26`.

## Shape
- Radius: `--r: 2px` everywhere (cards, inputs, frames); buttons `--r-btn: 2px` too. No pills, no mixes.
- Rules: 1.5px, `var(--rule)`; grade line 1.5px `--sage` on dark, `--sage-ink` on light. Hatching 1px at 45°, 6px pitch, 30% opacity.
- Shadow only on: mobile bar `0 -8px 24px rgba(10,14,20,.35)`, estimator popover `0 12px 32px rgba(10,14,20,.3)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`
Lenis lerp .1. Press `:active{transform:scale(.97)}`. Hover (inside `@media (hover:hover)`): `.u-grade::after` 1.5px amber line scaleX 0→1 origin left 200ms.

## Components
- **Buttons** min-height 52px, padding 0 22px, Geist 500 `--fs-0`, radius 2px. `.btn--primary` (btn-bg/btn-ink per tone), `.btn--ghost`
  (1.5px border currentColor, transparent), `.btn--text` (underline 1.5px offset 4px + padding-block trick). Call button carries a 16px handset SVG.
- **Input** height 52px, 1.5px border var(--rule) → var(--ink) on focus, bg transparent on dark / #fff on paper, label above Geist 500 `--fs--1`.
- **Card** (`.sheet`): no shadow; 1.5px top rule + the part-crop of the slope section (80px tall) on top; padding 24px; title serif `--fs-2`.
- **Sample tag** `.tag-sample`: JetBrains Mono 500 12-13px uppercase, 1px border currentColor, padding 2px 6px, radius 2px. On every price, rating, review.
- **Frame** `.plate`: ratio 21/9 (hero) or 4/3 (detail), 1px inset border `rgba(232,163,61,.35)`, the photo grade + duotone (below), caption under it in mono.
- **Header** `--header-h: 68px` (60px < 640): wordmark (serif "Torrey Rail" via `{{biz.short}}` + mono "FENCE & DECK"), anchors (≥ 1024), Call button. Transparent on hero, `t-deep` + 1px rule once scrolled.
- **Mobile bar** (< 900px): fixed bottom, 64px + safe-area, two halves: Call (amber) | Price it (ghost on deep). Hidden while the form is in view.
- **Signature primitive** `.slope` (draw once in `src/index.html` as `<symbol id="slope">` + parts, reuse with `<use>` / clones by app.js):
  ```
  svg viewBox="0 0 1200 160", preserveAspectRatio="xMidYMax slice"
  grade path: M0 52 L360 52 C410 52 420 56 440 64 C560 96 760 128 1200 146   (rim at x≈430; sage 1.5px, fill none)
  earth: same path closed to the bottom, fill url(#hatch) (45° 1px lines, 6px pitch, sage 30%)
  parts (stroke 1.5px, fill none unless noted), each g[data-part][style="--i:n"]:
    footing 0: two piers x=470,600 drop to the slope, dashed concrete outline 18×36 below grade
    post 1: verticals from pier to y=40; beam 2: horizontal at y=40 x 380-640
    joist 3: 9 short ticks at 16in o.c. along the beam + mono dim "16 in. o.c."
    board 4: thick 4px line y=36 x 380-660 (amber on dark)
    rail 5: posts every 60u, top rail y=6, 3 cable lines (0.75px)
    lamp 6: 5 circles r=3 fill #E8A33D on the rail posts, filter drop-shadow(0 0 6px #E8A33D)
  CSS: .slope [data-part]{opacity:0}  then one rule per level 0-7, e.g.
       .slope[data-built="3"] [data-part]:nth-of-type(-n+4){opacity:1}   (parts are siblings in order footing→lamp)
  newest part: stroke-dasharray:1; pathLength=1; stroke-dashoffset: calc(1 - var(--sw-p))
  mono tag: <text> or an HTML .slope__tag absolutely placed at the rim: "4:00 PM · FOOTINGS"
  ```
  Without JS / reduced motion: `data-built` is written in HTML at its final value for each instance, no dash offset.

## Photo grade
Every `img`: `filter: grayscale(1) contrast(1.15) brightness(.95)` then a duotone overlay: wrapper `::after{background:#E8A33D; mix-blend-mode:multiply}`
over a `#141B26` base with the image at `mix-blend-mode:screen; opacity:.9` → amber line work on navy. Intro warm-up: start `filter` with
`sepia(0) hue-rotate(180deg)` on the overlay's opacity .35 → final 1 (1000ms). The hero strip photo (hero-C1) is the only photo on the page; the drawing half of the strip needs no filter.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` (amber on dark tones, deep on light and lamp tones).
```css
@media (forced-colors: active){
  .btn{border:2px solid CanvasText}
  .slope [data-part], .slope path{stroke:CanvasText}
  .plate::after{display:none}
}
```
