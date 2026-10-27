# Design System — general-C (Switchback Building Co.)

## Fonts

- **Display:** Zilla Slab (variable wght 300–700). Preload `assets/fonts/zilla-slab/zilla-slab-300-700-normal.woff2`. Used for h1, h2, elevation tags. Tracking -0.02em on display sizes.
- **Text:** Source Serif 4 (variable opsz 8–60, wght 200–900). Body, lead paragraphs. Lead paragraph uses `"opsz" 24` and weight 450.
- **Accent:** DM Mono (static 300/400/500). Elevation tags, tool outputs, sample labels, tabular numbers. `font-variant-numeric: tabular-nums` always.

## Type scale

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12–13px, captions */
--fs-0:  clamp(0.875rem, 0.82rem + 0.28vw, 1rem);       /* 14–16px, meta */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.1875rem);       /* 16–19px, body */
--fs-2:  clamp(1.1875rem, 1.05rem + 0.55vw, 1.4375rem); /* 19–23px, lead */
--fs-3:  clamp(1.4375rem, 1.2rem + 0.8vw, 1.875rem);    /* 23–30px, h3 */
--fs-4:  clamp(1.875rem, 1.5rem + 1.2vw, 2.5rem);       /* 30–40px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem); /* h1, Zilla Slab wide enough for 5rem max */
```

Body: `var(--fs-1)`, line-height 1.5, measure 60–72ch. Headings: `text-wrap: balance`. Paragraphs: `text-wrap: pretty`. Display tracking: -0.02em. Line-height on display: 0.95. Nothing under 13px (--fs--1 floor).

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding (vertical): tight `var(--s-8)` (64px), normal `var(--s-9)` (96px), loose `var(--s-10)` (128px). Horizontal: `var(--s-4)` mobile, `var(--s-6)` tablet, `max( var(--s-7), calc((100vw - var(--max-w)) / 2) )` desktop.

## Grid

12 columns, gutter `var(--s-4)` (16px) mobile, `var(--s-5)` (24px) desktop. Max width `--max-w: 1320px`. Margin column for elevation tags: `col 1 / span 1` on ≥1100px, hidden below. Contour lines span full viewport width (bleed).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-fg`.

### t-deep (dark slate)
```css
--bg: #1B2838; --ink: #F4F1EB; --muted: #D6CFC4; --rule: #5A7D7C;
--accent: #5A7D7C; --focus: #5A7D7C; --btn-bg: #5A7D7C; --btn-fg: #FFFFFF;
```
Contrast: ink on bg 13.23:1 (pass). Muted on bg 9.65:1 (pass). Focus on bg 3.31:1 (large-text pass, used for outline only). Btn-fg on btn-bg 4.50:1 (pass). Accent text on deep: FAILS 4.5 — never use accent color for words on t-deep; use --ink instead.

### t-paper (warm cream)
```css
--bg: #F4F1EB; --ink: #1B2838; --muted: #3A5453; --rule: #5A7D7C;
--accent: #3A5453; --focus: #3A5453; --btn-bg: #3A5453; --btn-fg: #FFFFFF;
```
Contrast: ink on bg 13.23:1 (pass). Accent-ink (#3A5453) on bg 7.24:1 (pass). Focus on bg 7.24:1 (pass). Btn-fg on btn-bg 8.16:1 (pass).

### t-mid (warm grey)
```css
--bg: #D6CFC4; --ink: #1B2838; --muted: #3A5453; --rule: #5A7D7C;
--accent: #3A5453; --focus: #3A5453; --btn-bg: #3A5453; --btn-fg: #FFFFFF;
```
Contrast: ink on bg 9.65:1 (pass). Accent-ink on bg: ~5.5:1 (pass).

### t-accent (slate teal band)
```css
--bg: #5A7D7C; --ink: #FFFFFF; --muted: #F4F1EB; --rule: #F4F1EB;
--accent: #F4F1EB; --focus: #FFFFFF; --btn-bg: #F4F1EB; --btn-fg: #1B2838;
```
Contrast: ink (#FFF) on bg 4.50:1 (pass). Btn-fg (#1B2838) on btn-bg (#F4F1EB) 13.23:1 (pass). Use sparingly — one band max.

### Signal green (#5E7D5E)
Never used for text. Shapes, icon fills, map highlights, decorative contour accents only. Fails AA on both paper and deep.

## Radius

`--radius: 2px` everywhere. Buttons, inputs, cards, frames, tags. Pills only for sample tags (`border-radius: 999px`). No mixed radii.

## Rules

`--rule-w: 1.5px`. Color: `var(--rule)` from current tone. Contour lines are SVG paths with this stroke width, slight organic curve. Section dividers use the same weight.

## Shadow

Only on floating elements: mobile bar (`box-shadow: 0 -2px 8px rgba(27,40,56,.12)`), popover/lightbox. No shadows on cards or buttons.

## Motion tokens

```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

## Components

- **Buttons:** primary (bg var(--btn-bg), fg var(--btn-fg)), secondary (border var(--ink), transparent bg), text (no border, underline hover). Min-height 48px. Padding-inline ≥ 24px. Press: `scale(.97)` 120ms.
- **Inputs:** border 1.5px var(--rule), bg var(--bg), focus outline 3px var(--focus) offset 3px. Height 48px.
- **Cards:** border 1.5px var(--rule), no shadow, padding var(--s-5). Contour-line top border as signature.
- **Sample tag:** pill shape, bg var(--accent), fg var(--btn-fg), font-size var(--fs--1), DM Mono.
- **Frame:** aspect-ratio container, overflow clip, photo grade applied. Border-radius var(--radius).
- **Header:** height `--header-h: 64px`. Logo left, nav center, call CTA right. Background transparent → t-deep on scroll.
- **Mobile bar:** sticky bottom, height 56px, two buttons (Call + Price it). Hides on scroll-down and over #contact form.
- **Contour primitive (signature):** SVG path with stroke var(--rule), stroke-width var(--rule-w), fill none. Slight bezier curve. Elevation tag: DM Mono var(--fs-0), positioned absolute left margin, baseline aligned to contour. Reused in hero, every section boundary, footer.

## Photo grade

```css
filter: saturate(.82) contrast(1.06) sepia(.06) hue-rotate(-2deg);
```

Cool-leaning to match slate palette. Applied to every `img` and video poster via `.frame img, .vid video` selector. Object-position per photo in plan/05-media.md.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .frame { border: 1px solid CanvasText; }
}
```

Focus color passes 3:1 on every tone (verified above). Forced colors keeps borders visible.