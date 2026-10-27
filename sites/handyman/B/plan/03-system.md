# Design System — handyman-B (Pegboard Home Repair)

## Fonts

- **Display:** Big Shoulders (variable, wght 100–900, opsz 10–72). Preload: `big-shoulders-100-900-normal.woff2`.
- **Text:** Outfit (variable, wght 100–900). No preload.
- **Accent:** DM Mono (static, 300/400/500 normal + italic). For tags, hour counts, ZIP feedback.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. Body 18px / 1.5 line-height / measure 65ch.

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem);   /* 12–15px, mono labels */
--fs-0:  clamp(0.875rem, 0.82rem + 0.28vw, 1rem);      /* 14–16px, captions */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.2rem);         /* 16–19px, body lead */
--fs-2:  clamp(1.2rem, 1.05rem + 0.75vw, 1.6rem);      /* 19–26px, h3 */
--fs-3:  clamp(1.5rem, 1.2rem + 1.5vw, 2.2rem);        /* 24–35px, h2 */
--fs-h1: clamp(2.8rem, min(10vw, 10svh) + 0.1rem, 6rem); /* condensed display, tall */
```

Display tracking: `-0.03em`; line-height `0.92`. Body text-wrap: `pretty`; headings: `balance`. Numbers: `font-variant-numeric: tabular-nums`.

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding: tight `--s-8` (64px), normal `--s-10` (128px), loose `--s-11` (160px). Blueprint alternates tight/normal/loose.

## Grid

12 columns, gutter `--s-4` (16px) mobile → `--s-5` (24px) desktop. Max-width `1320px`. Margin column on left for peg-rail signature (80px desktop, hidden mobile).

## Tones

Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Token | bg | ink | muted | rule | accent | focus | Contrast notes |
|---|---|---|---|---|---|---|---|
| `t-paper` | #F0E6D2 | #1C3A38 | #5A7A76 | #C8BDA8 | #5C4A3A | #5C4A3A | ink/paper 9.90, accent/paper 6.79 |
| `t-deep` | #1C3A38 | #F0E6D2 | #8FA9A5 | #3A5855 | #E8C468 | #E8C468 | ink/deep 9.90, signal/deep 7.31 |
| `t-signal` | #E8C468 | #1C3A38 | #3A5855 | #C8A840 | #1C3A38 | #1C3A38 | ink/signal 7.31 |
| `t-mid` | #5A7A76 | #F0E6D2 | #C8BDA8 | #3A5855 | #E8C468 | #E8C468 | ink/mid 3.02 FAIL → mid tone never carries body text, only rules/shapes |

`t-mid` is shape-only: no paragraph or heading uses it as background for text. Buttons on mid use deep ink on signal bg.

## Radius & Shadow

Radius: `2px` everywhere except buttons and tags which are `999px` pills. No mixed radii.
Shadow: only on the sticky mobile bar (`0 -2px 12px rgba(28,58,56,.12)`) and popover cards.

## Motion tokens

```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--stagger: 60ms;
```

## Components

- **Buttons:** primary (signal bg, deep ink), secondary (deep bg, paper ink), text (accent underline). Min-height 48px. Padding-inline `--s-5`.
- **Input:** border `1.5px solid var(--rule)`, focus outline `3px solid var(--focus)`, offset 3px.
- **Card:** `t-paper` bg, `1.5px` rule border, `--s-4` padding. Tool outline SVG sits top-left at 48×48px.
- **Sample tag:** `--fs--1` mono, uppercase, `t-signal` bg, deep ink, pill radius.
- **Frame:** aspect-ratio `3/2`, grade filter below, `object-position` per media plan.
- **Header:** `--header-h: 72px` desktop, `60px` mobile. Deep bg, paper ink. Logo left, nav center, call button right.
- **Mobile bar:** sticky bottom under 900px, signal bg, deep ink, two buttons (Call / Price it). Hides when `#contact` is in view.
- **Signature primitive:** `.peg-hole` = radial-gradient circle 4px at 24px intervals, opacity .18. `.tool-outline` = inline SVG, stroke `var(--ink)`, 1.5px. `.hang-tag` = pill with `--fs--1` mono, positioned absolute top-right of card, rotates -3deg on enter.

## Photo grade

One filter for every photo:
```css
filter: saturate(.8) contrast(1.08) sepia(.12) hue-rotate(-2deg);
```
Warm workshop tone that unifies stock. Optional overlay on hero mosaic tiles: `multiply #F0E6D2` at 12% opacity to tie into paper tone.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
 .btn { border: 2px solid CanvasText; }
 .tool-outline { forced-color-adjust: none; }
}
```