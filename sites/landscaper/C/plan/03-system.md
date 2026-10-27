# Design System — landscaper-C

## Fonts

- Display: **Cormorant Garamond** (variable, wght 300–700). Preload `assets/fonts/cormorant-garamond/cormorant-garamond-300-700-normal.woff2`. Use italic for Latin names and pull quotes.
- Text: **Albert Sans** (variable, wght 100–900). Body at wght 400, labels at 500, lead paragraphs at 450 with `"opsz"` not applicable (no opsz axis).
- Accent: none. Mono not used; numbers set in Albert Sans 600 with tabular-nums.

## Type scale

```css
--fs--2: clamp(.75rem, .72rem + .15vw, .8125rem);   /* credits, legal */
--fs--1: clamp(.875rem, .85rem + .12vw, .9375rem);  /* marker location line, captions, proof line */
--fs-0:  clamp(1rem, .97rem + .18vw, 1.125rem);     /* body */
--fs-1:  clamp(1.2rem, 1.1rem + .45vw, 1.45rem);    /* lead paragraph, card titles */
--fs-2:  clamp(1.5rem, 1.3rem + 1vw, 2.1rem);       /* h3, numbers */
--fs-3:  clamp(2rem, 1.6rem + 2vw, 3.2rem);         /* h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem); /* h1, Cormorant Garamond 600 */
```

- h1 tracking: `-0.02em`, line-height `.95`. Body line-height `1.55`, measure `max-width: 62ch`. Lead: `1.4`, max `34ch`.
- Headings: `text-wrap: balance`. Paragraphs: `text-wrap: pretty`.
- Numbers (prices, hours, phone, counters): `font-variant-numeric: tabular-nums lining-nums` on Albert Sans 600.
- Marker Latin name: Cormorant Garamond italic at `--fs--1`, letter-spacing `+0.02em`.
- Marker location/light line: Albert Sans 500 uppercase at `--fs--2`, letter-spacing `+0.08em`.

## Space

```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
--s-10: 120px; --s-11: 160px;
```

Section padding (`--sec-y`): tight `64px`, normal `96px`, loose `128px`. Blueprint alternates tight/normal/loose. Horizontal gutter `--gutter: 24px`. Max content width: `1200px`.

## Grid

12-column grid at ≥1100px, 8-column at ≥768px, 4-column below. Gutter `24px`. Margin column optional for marker rail on desktop (col 1 reserved for markers in split-story sections).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors. Contrast verified above.

### t-light (paper)
```css
.t-light { --bg: #F2ECE4; --ink: #1A2418; --muted: #4A5548; --rule: #D4CFC6; --accent: #D4A855; --focus: #D4A855; }
```
Body on bg: 13.66:1 pass. Muted on bg: ~7:1 pass.

### t-deep (dark oak)
```css
.t-deep { --bg: #2E3B2C; --ink: #F2ECE4; --muted: #B8BFB5; --rule: #4A5A48; --accent: #D4A855; --focus: #D4A855; }
```
Body on bg: 10.06:1 pass. Muted on bg: ~5.5:1 pass. White button on bg: 11.81:1 pass.

### t-paper (warm cream variant for cards)
Same as t-light but with `--bg: #FAF7F2` for lifted cards. Ink/accent same.

### t-mid (Spanish moss, shapes only)
```css
.t-mid { --bg: #6B7F6A; --ink: #1A2418; --muted: #2E3B2C; --rule: #4A5A48; --accent: #D4A855; --focus: #D4A855; }
```
Used only for decorative bands, rules, marker hole fill. Never body text on this bg (white fails AA). Dark ink on mid: ~5.2:1 pass for large text labels only.

### t-accent (lantern gold band)
```css
.t-accent { --bg: #D4A855; --ink: #1A2418; --muted: #3B2E1A; --rule: #8B5E3C; --accent: #2E3B2C; --focus: #1A2418; }
```
Ink on accent bg: 7.27:1 pass. Used sparingly for CTA bands and marker highlights.

## Radius & Shadow

- Radius: `3px` everywhere (marker tag, buttons, cards, inputs). No pills except footer area markers which use `999px` for compact pill shape.
- Shadow: only on floating mobile bar and popover. `box-shadow: 0 4px 12px rgba(26,36,24,.12)`. Cards use border + subtle emboss via marker primitive, no drop shadow.

## Motion tokens

```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--d-press: 120ms;
--d-ui: 200ms;
--d-page: 520ms;
--d-story: 900ms;
--d-stagger: 60ms;
```

Intro: arch clip-path 900ms ease-out + headline stagger 70ms. Scroll stories: dapple drift 8s linear infinite (paused reduced-motion), marker press-in 500ms ease-out. Hover: underline scaleX 200ms. Press: scale(.97) 120ms.

## Components

- **Buttons:** primary (bg accent, ink text, ≥48px tall, 3px radius), secondary (border accent, transparent bg), text (no border, underline hover). All `padding-inline: var(--s-5)`.
- **Input:** border `var(--rule)`, bg `var(--bg)`, focus outline `3px solid var(--focus)` offset 3px. Height 48px.
- **Card:** bg `var(--bg)`, border `1px solid var(--rule)`, radius 3px, padding `var(--s-5)`. No shadow.
- **Sample tag:** inline pill, `--fs--2`, uppercase, letter-spacing `.08em`, border `1px solid var(--rule)`, padding `2px 8px`.
- **Frame:** aspect-ratio container with grade filter applied to child img. Ratios: hero 3:2, cards 4:5, break 21:9.
- **Header:** height `--header-h: 72px`. Logo left, nav center (desktop), CTA right. Sticky on scroll.
- **Mobile bar:** fixed bottom, full width, two buttons (Call / Text), height 64px, shadow, z-index 100. Hidden at ≥768px.
- **Marker primitive:** CSS-drawn tag shape with rounded top, punched hole circle, embossed border. Size modifiers: `.marker--hero` (large, centered), `.marker--card` (left-aligned), `.marker--tag` (inline), `.marker--pill` (compact footer). `data-sw-signature` on hero instance.

## Photo grade

One filter for every photo:
```css
.frame img { filter: saturate(.82) contrast(1.06) sepia(.12); }
```
Warm sepia bias matches lantern gold accent. Optional overlay on hero and break only: `mix-blend-mode: multiply` with `rgba(212,168,85,.08)` tint. Grain SVG noise at 5% opacity on hero only.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .input, .marker { border: 2px solid ButtonText; }
}
```
Focus color #D4A855 passes ≥3:1 on all tone backgrounds.