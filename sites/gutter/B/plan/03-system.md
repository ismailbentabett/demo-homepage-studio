# gutter-B · Design system (copy into :root)

## Fonts
- Display/numerals/labels: **Martian Mono** variable `assets/fonts/martian-mono/martian-mono-100-800-normal.woff2`
  (wght 100-800, wdth 75-112.5). **Preload this file only.** `font-stretch: 87.5%` everywhere (h1, h2, numerals);
  labels/kickers `font-stretch: 75%`, wght 500, uppercase, tracking .06em. h1 wght 300, h2 wght 400, numerals wght 500.
- Text: **Lexend** variable `assets/fonts/lexend/lexend-100-900-normal.woff2` (wght 300 body-light on deep, 400 body,
  600 buttons/strong). No italic file: never use italic (use mono label instead).
- `font-display: swap`; fallbacks: `"Martian Mono", ui-monospace, "Cascadia Mono", Menlo, monospace` /
  `"Lexend", "Segoe UI", system-ui, sans-serif`. Numerals: `font-variant-numeric: tabular-nums` on every ledger.

## Type scale (1.2 → 1.333)
```
--fs--1: clamp(.8125rem, .78rem + .15vw, .875rem);   /* 13-14px labels, never smaller */
--fs-0:  clamp(1.0625rem, 1.02rem + .2vw, 1.1875rem);  /* 17-19px body */
--fs-1:  clamp(1.25rem, 1.15rem + .45vw, 1.5rem);
--fs-2:  clamp(1.5rem, 1.3rem + .9vw, 2rem);
--fs-3:  clamp(1.8rem, 1.45rem + 1.6vw, 2.67rem);       /* h2 */
--fs-4:  clamp(2.16rem, 1.6rem + 2.6vw, 3.55rem);       /* big ledger numerals */
--fs-h1: clamp(2.1rem, min(7.6vw, 8.6svh) + .1rem, 4.25rem); /* mono is wide: capped low */
```
h1: Martian Mono 300, stretch 87.5%, tracking -0.035em, line-height .98, max-width 22ch. h2: 400, -0.03em, lh 1.04,
max 24ch. Body: Lexend 400, lh 1.55, measure 64ch. Ledger rows: Martian Mono 400 `--fs--1`/`--fs-0`, lh 1.4.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 8vw, 80px)`, `--pad-normal: clamp(80px, 10vw, 120px)`,
`--pad-loose: clamp(104px, 13vw, 160px)`. Blueprint alternates them.

## Grid
12 cols ≥ 1024 / 8 cols 640-1023 / 4 cols < 640; gutter `--gut: clamp(16px, 2vw, 24px)`; `--max: 1240px`;
side margin `--edge: clamp(20px, 5vw, 48px)`. **Margin column** ≥ 1024: `--margin-col: 72px` fixed at left,
holds the page cylinder (`position:fixed; left:24px; top:calc(var(--header-h) + 32px); height:min(52svh,420px); width:24px`).
Content container gets `padding-left: calc(var(--margin-col) + var(--edge))` ≥ 1024.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| Tone | bg | ink | muted | rule | accent (words) | focus | primary btn | ratios |
|---|---|---|---|---|---|---|---|---|
| `t-paper` | #eef2ee | #13211c | #5a6b65 | rgb(19 33 28 / .18) | #1f6f55 | #0e3a2d | bg #0e3a2d / #fff | 14.71 · 4.98 · 5.36 · focus 11.17 · btn 12.63 |
| `t-mid` | #dfe6e1 | #13211c | #52625c | rgb(19 33 28 / .2) | #1f6f55 | #0e3a2d | bg #0e3a2d / #fff | 13.10 · 5.07 · 4.77 · focus 9.95 |
| `t-deep` (evergreen, color band) | #0e3a2d | #ffffff | #c9d6d0 | #8fa39b @ 1px | #f3c623 | #f3c623 | bg #f3c623 / #13211c | 12.63 · 8.43 · 7.77 · focus 7.77 · btn 10.23 |
| `t-ink` (dark band) | #13211c | #ffffff | #a9bab3 | rgb(255 255 255 / .16) | #f3c623 | #f3c623 | bg #f3c623 / #13211c | 16.64 · 8.21 · 10.23 · focus 10.23 |
| `t-signal` (yellow band, short) | #f3c623 | #13211c | #13211c | #13211c @ 1px | #0e3a2d | #0e3a2d | bg #13211c / #fff | 10.23 · focus 7.77 (on yellow) · btn 16.64 |
| footer `t-deeper` | #0a2a21 | #ffffff | #c9d6d0 | #8fa39b | #f3c623 | #f3c623 | bg #f3c623 / #13211c | 15.37 · 9.45 |
Never: yellow text on paper/mid (1.43), #8fa39b on paper (2.35), #5a6b65 on mid (4.44). `t-deep` and `t-ink` count as
dark: never touching (put t-paper/t-mid/t-signal between).

## Radius, rules, shadow
Radius: **0** on frames, cards, inputs, ledger rows; **999px** only on buttons/pills/chips (the cylinder has a 0 top,
`border-radius: 0 0 10px 10px` bottom: the only rounded shape). Rules: 1px `var(--rule)`; ledger leaders
`border-bottom: 1px dotted currentColor` at 45% opacity. Shadow only on mobile bar and size-check popover:
`0 -8px 24px rgb(10 42 33 / .22)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms;
--t-page:520ms; --t-story:900ms; --stagger:60ms;` Filmstrip drift: 24px/s (CSS animation on a duplicated track,
`animation-play-state: paused` on `:hover`, `:focus-within`, `.is-paused`, and none under reduced motion).

## Components
- **Buttons** (min-height 52px, padding 0 24px, Lexend 600 `--fs-0`, radius 999px): primary `var(--btn-bg)/var(--btn-ink)`;
  secondary 2px border currentColor, transparent; text button = underline offset 4px, padding-block 12px (tap ≥ 48px).
  Hover language "water level": `::before` fill `transform: scaleY(0)` origin bottom → `scaleY(1)` 200ms ease-out
  (primary: fill = color-mix 12% ink; secondary: fill = accent at 14%). Press: translateY(1px) 120ms.
- **Input:** height 52px, 2px solid var(--ink) bottom + 1px sides/top var(--rule), radius 0, Lexend 400 17px, label
  above in mono 13px uppercase; error text #13211c on paper with a ▲ mono glyph (never red-only).
- **Ledger row** `.lg`: grid `1fr auto`, label Lexend 400, leader dotted, value Martian Mono 500 tabular, right-aligned;
  on dark the value is `--accent` (yellow); on light the value is ink and the row carries a 6×6 yellow square bullet with
  1px ink outline. Row height ≥ 48px when it is a link.
- **Card:** no box; 1px top rule, 24px padding-top, a mini cylinder chip at top-right (12×28).
- **Sample tag:** mono 13px uppercase "SAMPLE", 1px border currentColor, radius 999px, padding 2px 10px.
- **Frame:** photos 4:5 (filmstrip) and 21:9 (break), radius 0, 1px inner outline `rgb(255 255 255/.18)`, mono caption under.
- **Header:** `--header-h: 64px` (72px ≥ 1024), t-deep, logo = "GW" in a cylinder outline + wordmark Lexend 600;
  nav anchors (Tools, Prices, Reviews, Area), Call button primary right. Not sticky on mobile (the bar is).
- **Mobile bar** (< 768): fixed bottom 64px, t-ink, two halves Call | Text a photo, each ≥ 56px tall, safe-area padding.
- **Signature primitive `.cyl`** (inline SVG, one `<symbol id="cyl">` reused): viewBox 0 0 40 120, glass = path
  `M4 6h32v104a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z` stroke 2px currentColor fill none; lip = `M0 6h40` 2px; ticks every
  10 units from y=16 to y=106 (short 6px, every 5th long 12px), mono tick labels optional; fill = `<rect>` clipped to the
  glass, `transform: scaleY(var(--sw-p))` origin bottom, fill var(--signal) #f3c623 (on light tones the outline stays
  ink so the yellow is a shape, not text). Meniscus = 2px darker line (#c9a10f) at fill top. Sizes: hero 120×360,
  page margin 24×(52svh), story 80×240, chip 12×28.
- **Pause button** for the filmstrip: 48×48 round, mono "II / ▶", aria-pressed.

## Photo grade
All photos: `filter: saturate(.82) contrast(1.06) sepia(.06) hue-rotate(-6deg)`. On t-deep the hero frame gets a
duotone overlay: `::after{background:#0e3a2d; mix-blend-mode:multiply; opacity:.35}` + `::before{background:#f3c623;
mix-blend-mode:soft-light; opacity:.12}`. Break photo: no duotone, a bottom gradient `linear-gradient(transparent 55%,
rgb(10 42 33 / .78))` only under its caption.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` (per-tone --focus above, all ≥ 7.7:1).
`@media (forced-colors: active){ .cyl rect{fill:Highlight} .btn{border:2px solid ButtonText} :focus-visible{outline-color:Highlight} }`.
