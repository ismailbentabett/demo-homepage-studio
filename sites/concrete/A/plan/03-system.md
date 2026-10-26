# Design System — concrete-A (Long Cure Concrete Co.)

## Fonts
- **Display:** Chivo (variable wght 100–900). Preload `assets/fonts/chivo/chivo-100-900-normal.woff2`. Used for h1, h2, ticket job-line labels. Tracking -0.03em at display sizes.
- **Text:** Karla (variable wght 100–900). Body, captions, form labels, buttons. Line-height 1.5, measure 60–72ch.
- **Accent:** DM Mono (static 300/400/500). Step numbers, quantities, codes, sample tags, progress ticks. Never body text.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. Fluid via `clamp()`.

| Token | Value | Use |
|---|---|---|
| `--fs--1` | `clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem)` | Fine print, credits, sample tags |
| `--fs-0` | `clamp(0.87rem, 0.82rem + 0.25vw, 1rem)` | Captions, meta, proof line under h1 |
| `--fs-1` | `clamp(1.04rem, 0.96rem + 0.4vw, 1.2rem)` | Body lead, service blurbs |
| `--fs-2` | `clamp(1.25rem, 1.1rem + 0.75vw, 1.6rem)` | Section intros, tool outputs |
| `--fs-3` | `clamp(1.5rem, 1.2rem + 1.5vw, 2.2rem)` | h3, card titles |
| `--fs-4` | `clamp(1.8rem, 1.3rem + 2.5vw, 3rem)` | h2 section headings |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)` | Hero headline; Chivo can carry 5rem without losing punch |

Display tracking: `-0.03em`. Display line-height: `0.95`. Body line-height: `1.5`. Nothing under `--fs--1` (≈11.5px at 320). Headings `text-wrap: balance`; body `text-wrap: pretty`. Numbers use `font-variant-numeric: tabular-nums`.

## Space
Base unit 4px. Section padding alternates tight / normal / loose to create rhythm.

| Token | px | rem |
|---|---|---|
| `--s-1` | 4 | 0.25 |
| `--s-2` | 8 | 0.5 |
| `--s-3` | 12 | 0.75 |
| `--s-4` | 16 | 1 |
| `--s-5` | 24 | 1.5 |
| `--s-6` | 32 | 2 |
| `--s-7` | 48 | 3 |
| `--s-8` | 64 | 4 |
| `--s-9` | 96 | 6 |

Section vertical padding classes:
- `.sec-tight`: `padding-block: clamp(56px, 8vw, 80px)`
- `.sec-normal`: `padding-block: clamp(96px, 10vw, 120px)`
- `.sec-loose`: `padding-block: clamp(128px, 12vw, 160px)`

Horizontal gutter: `--gutter: clamp(16px, 4vw, 24px)`. Content max-width: `1280px`. Margin column for ticket step numbers: `64px` left on ≥900px, folded into padding below.

## Grid
12 columns desktop, 8 tablet (≥640), 4 phone. Gutter `var(--gutter)`. The ticket's left perforation aligns with column 1 edge; step numbers sit in the margin column outside the grid on ≥900px.

## Tones
Each tone sets all color tokens so components never pick their own colors.

### t-paper (default light)
- `--bg: #f4f1eb` · `--ink: #1a1c20` · `--muted: #5a5d63` · `--rule: #c8c3b8` · `--accent: #2b5c8a` · `--focus: #d45a2a`
- Button primary: bg `#2b5c8a`, ink `#ffffff` (contrast 5.8:1 ✓)
- Button secondary: border `#2b5c8a`, ink `#2b5c8a` on `#f4f1eb`

### t-light (white variant for form cards)
- `--bg: #ffffff` · `--ink: #1a1c20` · `--muted: #5a5d63` · `--rule: #d8d4cc` · `--accent: #2b5c8a` · `--focus: #d45a2a`
- Ink on white: 16.8:1 ✓ · Accent on white: 6.5:1 ✓

### t-mid (grey band for tool sections)
- `--bg: #e2ded6` · `--ink: #1a1c20` · `--muted: #4a4d52` · `--rule: #b8b3a8` · `--accent: #2b5c8a` · `--focus: #d45a2a`
- Ink on mid: 11.2:1 ✓ · Accent on mid: 5.1:1 ✓

### t-deep (dark band for process story)
- `--bg: #1e2a36` · `--ink: #f4f1eb` · `--muted: #a8adb5` · `--rule: #3a4a58` · `--accent: #6a9fd4` (lighter carbon blue for dark bg) · `--focus: #d45a2a`
- Ink on deep: 12.1:1 ✓ · Light accent on deep: 5.4:1 ✓ · Focus on deep: 5.3:1 ✓
- Note: original accent `#2b5c8a` fails 4.5:1 on deep (3.4:1); only used for non-text rules/shapes here. Text uses `#6a9fd4`.

### t-accent (signal orange band for CTA strip)
- `--bg: #d45a2a` · `--ink: #ffffff` · `--muted: #ffe8dd` · `--rule: #b84820` · `--accent: #1a1c20` · `--focus: #1a1c20`
- White on signal: 4.6:1 ✓ · Ink on signal: 8.9:1 ✓ · Focus (ink) on signal: 8.9:1 ✓

## Radius & Shadow
- Radius: `2px` everywhere (ticket paper has sharp corners; only buttons get `2px`). No pills.
- Shadow: only on the sticky mobile bar (`0 -2px 12px rgba(26,28,32,.12)`) and the quote form popover. Flat elsewhere.

## Motion tokens
```css
:root {
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-io: cubic-bezier(.77, 0, .175, 1);
  --d-press: 120ms;
  --d-ui: 200ms;
  --d-page: 520ms;
  --d-story: 900ms;
  --d-stagger: 60ms;
}
```
Intro clip-path reveal uses `--d-page` with `--d-stagger` per line. Scroll stories use `--d-story`. Hover offset uses `--d-ui`. No bounce, no elastic.

## Components
- **Buttons:** primary / secondary / text. Min-height 48px. Padding-inline ≥ 24px. Font `--fs-0` Karla 600. Focus ring: `outline: 3px solid var(--focus); outline-offset: 3px`.
- **Input:** height 48px, border `1px solid var(--rule)`, radius `2px`, bg `var(--bg)`, ink `var(--ink)`. Focus same ring.
- **Card:** `.ticket-line` primitive — dashed left border `2px dashed var(--rule)`, padding-left `var(--s-6)`, position relative. `::before` is the carbon offset copy: `content: ""; position: absolute; inset: 0; border: inherit; opacity: 0.18; transform: translate(-2px, 2px); pointer-events: none; transition: transform var(--d-ui) var(--ease-out)`. On hover/focus within: `transform: translate(-4px, 4px)`. Step number absolutely positioned in margin column at `--fs-0` DM Mono 500, color `var(--accent)`.
- **Sample tag:** inline pill, `--fs--1` DM Mono 400, uppercase, border `1px solid var(--rule)`, padding `2px 6px`, radius `2px`. Always visible next to any proof/pricing.
- **Frame:** aspect-ratio containers. Ratios: `3/2` hero, `4/5` cards, `21/9` break. Grade applied via `.frame img { filter: saturate(.85) contrast(1.05) sepia(.08) }`. Optional overlay: `mix-blend-mode: multiply` with `rgba(43,92,138,.08)` to unify toward carbon blue.
- **Header:** height token `--header-h: 72px` desktop, `60px` mobile. Logo left, phone right at ≥900px. Scrolled state adds bottom rule.
- **Mobile bar:** sticky bottom under 900px, two buttons (Call + Price it), shadow above. Hides when `#contact` is in view.
- **Signature primitive:** `.ticket-line` described above. Marked once with `data-sw-signature="ticket"` in the hero. Every reuse carries the class but not the data attribute.
- **Progress rail:** right-margin SVG polyline (strength curve day 0→28). Stroke `var(--accent)`, width 2px. Tick marks at day 2, 7, 28 with DM Mono labels. Advances via `--sw-p` custom property set by the header module.

## Photo grade
One filter for every photo:
```css
.frame img { filter: saturate(.85) contrast(1.05) sepia(.08); }
```
Plus a subtle carbon-blue unifying overlay on hero and break only:
```css
.frame.is-hero::after, .frame.is-break::after {
  content: ""; position: absolute; inset: 0;
  background: rgba(43,92,138,.08); mix-blend-mode: multiply; pointer-events: none;
}
```
This cools warm stock tones toward the ticket-paper palette without shifting skin or concrete beyond recognition. Each photo gets an explicit `object-position` in the media plan.

## Focus & accessibility
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .ticket-line, input, select, textarea { border: 2px solid ButtonText; }
  :focus-visible { outline: 3px solid Highlight; }
}
```
Focus ring color `--focus` (#d45a2a) passes ≥3:1 on every tone background (verified above). All interactive elements ≥48px. Reduced motion: `.sw-motion` gate ensures every hidden-before-reveal element is already visible; intro and scroll stories become static complete layouts; hover offset disabled.