# Design System — mason-B (Flemish Bond Masonry)

## Fonts

- **Display:** Barlow Condensed, weights 400 / 600 / 700. Preload `assets/fonts/barlow-condensed/barlow-condensed-400-700-normal.woff2`. Static weights (no variable axis).
- **Text:** Karla, variable `wght` 300–800. No preload.
- **Accent:** DM Mono, weights 300 / 400 / 500. For sample tags, units, tool readouts.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values fluid via `clamp()`.

| Token | Value | Notes |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)` | captions, sample tags |
| `--fs-0` | `clamp(0.9rem, 0.85rem + 0.3vw, 1rem)` | meta, proof line |
| `--fs-1` | `clamp(1.08rem, 1rem + 0.4vw, 1.2rem)` | body lead, service blurbs |
| `--fs-2` | `clamp(1.3rem, 1.15rem + 0.75vw, 1.6rem)` | section subheads |
| `--fs-3` | `clamp(1.56rem, 1.3rem + 1.3vw, 2.13rem)` | card titles |
| `--fs-4` | `clamp(1.87rem, 1.5rem + 1.85vw, 2.84rem)` | section heads |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem)` | hero headline; Oswald condensed allows up to 5.25rem safely |

Display tracking: `-0.03em`. Display line-height: `0.92`. Body line-height: `1.5`. Measure: `65ch` max-width on text containers. Nothing under `--fs--1`. Headings `text-wrap: balance`; body `text-wrap: pretty`. Numbers `font-variant-numeric: tabular-nums`.

## Space

| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | micro gaps |
| `--s-2` | 8 | icon-to-text |
| `--s-3` | 12 | input padding |
| `--s-4` | 16 | card inner |
| `--s-5` | 24 | component gap |
| `--s-6` | 32 | section inner horizontal |
| `--s-7` | 48 | tight vertical |
| `--s-8` | 64 | normal vertical |
| `--s-9` | 96 | loose vertical |

Section padding classes: `.sec-tight { padding-block: var(--s-7); }`, `.sec-normal { padding-block: var(--s-8); }`, `.sec-loose { padding-block: var(--s-9); }`. Blueprint alternates them; never two adjacent sections share the same padding class.

## Grid

12-column grid at ≥ 1100px, 8-column at ≥ 640px, 4-column below. Gutter: `--gutter: clamp(16px, 1vw + 8px, 24px)`. Max content width: `1280px`. Margin column for Flemish-bond signature: left margin = `var(--gutter)` on all viewports; the bond grid uses CSS subgrid or explicit column spans so header tiles are always `2fr` and stretcher tiles `4fr` within their parent track.

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`. Contrast verified above.

### t-deep (soot)
- `--bg: #1A1815` · `--ink: #F2EBE0` (14.96) · `--muted: #BFB8AC` · `--rule: #3A2E28` · `--accent: #C9A66B` (7.71) · `--focus: #C9A66B` · `--btn-bg: #B8432F` · `--btn-ink: #F2EBE0` (signal red button ≥ 24px bold only)

### t-paper (warm paper)
- `--bg: #F2EBE0` · `--ink: #1A1815` (14.96) · `--muted: #5C534A` · `--rule: #D4CCC2` · `--accent: #8A5A00` (brass-dark for words on light; verify if needed) · `--focus: #8A5A00` · `--btn-bg: #1A1815` · `--btn-ink: #F2EBE0`

### t-mid (warm brown)
- `--bg: #3A2E28` · `--ink: #F2EBE0` (11.07) · `--muted: #BFB8AC` · `--rule: #5C4A3A` · `--accent: #C9A66B` (5.71) · `--focus: #C9A66B` · `--btn-bg: #B8432F` · `--btn-ink: #F2EBE0`

### t-accent (Baltimore red band)
- `--bg: #B8432F` · `--ink: #F2EBE0` (verify; expected > 4.5) · used ONLY for a single narrow CTA band or rule, never full-section body text. If contrast fails, this tone is rules/shapes only.

Focus ring: `:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`. Forced colors: `.btn { border: 2px solid CanvasText; }`.

## Radius & shadow

Radius: `2px` everywhere (brick-like precision). Pills only for sample tags (`border-radius: 999px`). Shadow: only on sticky mobile bar and popover (`box-shadow: 0 4px 12px rgba(26,24,21,.35)`). No card shadows.

## Motion tokens

- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-io: cubic-bezier(.77,0,.175,1)`
- `--dur-press: 120ms`
- `--dur-ui: 200ms`
- `--dur-page: 520ms`
- `--dur-story: 900ms`
- `--dur-stagger: 60ms`

## Components

- **Buttons:** primary (deep bg, paper ink), secondary (paper bg, deep ink), ghost (transparent, accent underline). Min height 48px. Padding-inline ≥ 24px.
- **Input:** bg `var(--bg)`, border `1px solid var(--rule)`, focus swaps border to `var(--focus)`. Height 48px.
- **Card:** `.card` in t-paper or t-mid only (never t-deep cards inside t-deep sections). Border-left `3px solid var(--accent)` as the "test panel" edge.
- **Sample tag:** `.sample-tag` pill, `--fs--1`, uppercase, letter-spacing `0.08em`, bg `var(--rule)`, ink `var(--ink)`.
- **Frame:** `.frame` with aspect-ratio set per slot; grade filter applied globally.
- **Header:** `--header-h: 72px` desktop, `60px` mobile. Transparent over hero, solid `var(--bg)` after scroll.
- **Mobile bar:** sticky bottom under 900px, contains [[call]] and [[quote]]; hides when `#contact` is in view.
- **Signature primitive:** `.bond-grid` container with `display: grid; grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); gap: var(--gutter);` plus `.bond-header` (aspect-ratio 2/3) and `.bond-stretcher` (aspect-ratio 3/2) children. Mortar gutter color = `var(--rule)`. This is drawn once here; every section reuses it.

## Photo grade

One filter for every photo and video poster:
```css
img, video[poster] {
  filter: saturate(.82) contrast(1.08) sepia(.12) brightness(.95);
}
```
Warm-leaning to match soot + brass palette. No overlay on most photos; hero mosaic tiles get a subtle multiply overlay `rgba(26,24,21,.18)` to unify disparate stock.

## Focus & a11y

`:focus-visible` rule above. Skip link first child of body. All interactive elements ≥ 48px. Inline links use the padding-block trick from LEARNINGS §1. Reduced motion: `.sw-motion * { animation: none !important; transition: none !important; }` except the mortar-match live panel which is state-driven, not animated.