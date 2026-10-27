# Design System — electrician-A (Lineside Electric)

## Fonts

- **Display:** Archivo (variable, wght 100–900, wdth 62–125). Preload `assets/fonts/archivo/archivo-100-900-normal.woff2`. Display uses `wdth: 75%` (condensed) for headlines and symbol labels; body-width uses `wdth: 87.5%` for subheads.
- **Text:** Outfit (variable, wght 100–800). No preload. Body weight 400, lead paragraph 450 with `"opsz" 24` if axis present (Outfit has no opsz; use weight 450 only).
- **Accent:** DM Mono (static, 300/400/500). Used for diagram annotations, sample tags, ZIP codes, tool readouts, prices. Never body text.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values fluid via `clamp()`.

| Token | Value | Use |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)` | Captions, mono labels, sample tags |
| `--fs-0` | `clamp(0.9rem, 0.85rem + 0.3vw, 1rem)` | Meta lines, proof line under h1 |
| `--fs-1` | `clamp(1.08rem, 1rem + 0.4vw, 1.2rem)` | Lead paragraph, status sentences |
| `--fs-2` | `clamp(1.3rem, 1.15rem + 0.75vw, 1.6rem)` | h3, card titles |
| `--fs-3` | `clamp(1.56rem, 1.3rem + 1.3vw, 2.13rem)` | h2 section headings |
| `--fs-4` | `clamp(1.87rem, 1.5rem + 1.85vw, 2.84rem)` | Large sub-hero headlines |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)` | h1 (Archivo condensed wdth 75%) |

Display tracking: `-0.03em` on h1/h2, `-0.02em` on h3. Line-height: h1 `.92`, h2/h3 `.96`, body `1.5`. Measure: body `max-width: 65ch`. Nothing under 13px (`--fs--1` floor is 12px at 320 but renders ≥ 13px due to clamp minimum). Headings `text-wrap: balance`; body `text-wrap: pretty`. Numbers: `font-variant-numeric: tabular-nums` on prices, hours, phone, counters.

## Space

| Token | Value |
|---|---|
| `--s-1` | 4px |
| `--s-2` | 8px |
| `--s-3` | 12px |
| `--s-4` | 16px |
| `--s-5` | 24px |
| `--s-6` | 32px |
| `--s-7` | 48px |
| `--s-8` | 64px |
| `--s-9` | 96px |

Section padding (vertical): tight `--sec-y-tight: clamp(56px, 8vh, 80px)`, normal `--sec-y: clamp(96px, 12vh, 120px)`, loose `--sec-y-loose: clamp(128px, 16vh, 160px)`. Horizontal: `--sec-x: clamp(16px, 4vw, 48px)`. Blueprint alternates tight/normal/loose.

## Grid

12-column grid at ≥ 1100px, 8-column at ≥ 768px, 4-column below. Gutter `--gutter: clamp(16px, 2vw, 24px)`. Max content width `--max-w: 1320px`. Margin column for one-line diagram trace: `--margin-col: clamp(32px, 5vw, 64px)` on left side (the copper line lives here). At < 768px the margin col collapses to `24px` and the line shifts to left edge of content.

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors. Contrast verified above in concept.

### t-paper (light band)
- `--bg: #f0ece4` (chalk)
- `--ink: #091c20` (deep teal)
- `--muted: #3a5560`
- `--rule: #c8c0b4`
- `--accent: #cf6a2e` (copper)
- `--focus: #cf6a2e`
- Button primary: bg `#091c20`, fg `#f0ece4`. Secondary: border `#091c20`, fg `#091c20`.

### t-deep (dark band)
- `--bg: #091c20` (night teal)
- `--ink: #f0ece4` (chalk)
- `--muted: #8fa8ad`
- `--rule: #1b3d44`
- `--accent: #cf6a2e`
- `--focus: #e8b86d`
- Button primary: bg `#cf6a2e`, fg `#fff`. Secondary: border `#f0ece4`, fg `#f0ece4`.

### t-mid (mid teal band)
- `--bg: #1b3d44`
- `--ink: #f0ece4`
- `--muted: #8fa8ad`
- `--rule: #2a525a`
- `--accent: #e8b86d` (amber)
- `--focus: #e8b86d`
- Button primary: bg `#e8b86d`, fg `#091c20`. Secondary: border `#f0ece4`, fg `#f0ece4`.

### t-accent (copper band)
- `--bg: #cf6a2e`
- `--ink: #fff`
- `--muted: rgba(255,255,255,.7)`
- `--rule: rgba(255,255,255,.3)`
- `--accent: #091c20`
- `--focus: #091c20`
- Button primary: bg `#091c20`, fg `#f0ece4`. Secondary: border `#fff`, fg `#fff`.

Contrast re-verified per tone: all body pairs ≥ 4.5:1, large text ≥ 3:1, focus ring ≥ 3:1 on every tone.

## Radius

One value: `--radius: 3px` everywhere (buttons, cards, inputs, frames). No pills except the sample tag which uses `--radius-pill: 999px` intentionally as a distinct micro-element. No mixed radii.

## Shadow

Only on floating elements: sticky mobile bar (`box-shadow: 0 -2px 12px rgba(9,28,32,.15)`), popover/tool callout (`box-shadow: 0 4px 16px rgba(9,28,32,.2)`). No shadows on cards, buttons or static elements.

## Motion tokens

```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--stagger: 60ms;
```

No bounce, no elastic. Press: `:active { transform: scale(.97); transition: transform var(--dur-press) var(--ease-out); }`.

## Components

- **Buttons:** Primary (filled), secondary (outlined), text (ghost). Min height 48px. Padding `12px 24px`. Font size `--fs-0` for secondary/text, `--fs-1` for primary. All have `:focus-visible` outline.
- **Input:** Height 48px, border `1px solid var(--rule)`, radius `--radius`. Focus: `outline: 3px solid var(--focus); outline-offset: 3px`. Error state: border `#c44`, message below in `--fs--1`.
- **Card:** Border `1px solid var(--rule)`, radius `--radius`, padding `var(--s-5)`. No shadow. Hover: hairline underline grows from left on title link.
- **Sample tag:** Inline pill, `--fs--1`, bg `rgba(212,120,60,.15)`, color `var(--accent)`, padding `2px 8px`, radius `--radius-pill`. Always visible next to reviews, prices, ratings.
- **Frame:** Aspect ratio container with photo grade filter. `overflow: hidden`, radius `--radius`. Grade applied via CSS filter on `img`.
- **Header:** Height token `--header-h: 64px`. Transparent over hero, gains `t-deep` bg on scroll (`.is-scrolled`). Logo left, nav center, call CTA right.
- **Mobile bar:** Sticky bottom bar under 900px. Two buttons: Call (primary) and Price it (secondary). Hides on scroll down and when `#contact` form is in view. Height 64px + safe-area-inset-bottom.
- **One-line primitive:** `.one-line` is a `position: absolute; left: var(--margin-col); top: 0; bottom: 0; width: 2px; background: var(--rule);` container. `.one-line__node` is a 32px circle centered on the line, border `2px solid var(--rule)`, fill transparent by default, transitions to `fill: var(--accent); border-color: var(--accent)` when `.is-active`. SVG symbols inside each node. This primitive is drawn once here; every section reuses it.

## Photo grade

One filter for every photo and video poster:
```css
filter: saturate(.8) contrast(1.08) hue-rotate(-4deg);
```
Cool-shifted to match the teal palette (no sepia). Applied to `img` and `video[poster]` globally. Optional overlay on hero photo only: `linear-gradient(180deg, rgba(14,42,47,.3) 0%, rgba(14,42,47,0) 60%)` to ensure chalk text contrast over the brightest frame area.

## Focus

```css
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}
```

Forced colors mode:
```css
@media (forced-colors: active) {
  .btn, .card, input, .frame { border: 2px solid ButtonText; }
  .one-line__node { border-color: ButtonText; }
  :focus-visible { outline-color: Highlight; }
}
```

All interactive elements have visible focus on every tone. Skip link present in header. Heading order: one h1, h2 for sections, h3 for cards/sub-sections, no skips.