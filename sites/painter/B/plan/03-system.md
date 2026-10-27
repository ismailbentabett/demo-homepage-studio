# Design System — painter-B (Drawdown Painting Co.)

## Fonts

- **Display:** Antonio, variable wght 100–700. Preload: `assets/fonts/antonio/antonio-100-700-normal.woff2`.
- **Text:** Karla, variable wght 400–700.
- **Accent:** DM Mono, 400 regular. For ticket fields, coverage numbers, sheen codes, dry times.

Variable axes in use: Antonio `wght`; Karla `wght`. No `opsz` or `wdth` on these faces.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values via `clamp()`.

| Token | Value | Notes |
|---|---|---|
| `--fs--1` | `clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem)` | captions, sample tags |
| `--fs-0` | `clamp(0.9rem, 0.85rem + 0.3vw, 1rem)` | body small, meta |
| `--fs-1` | `clamp(1.05rem, 0.95rem + 0.5vw, 1.2rem)` | lead paragraph, proof line |
| `--fs-2` | `clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)` | h3, card titles |
| `--fs-3` | `clamp(1.55rem, 1.3rem + 1.2vw, 2rem)` | h2 section heads |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem)` | hero headline; Antonio condensed allows up to 5.25rem |

Display tracking: `-0.03em` on Antonio headings. Line-height: `0.92` for display, `1.5` for body. Body size 17–19px at viewport widths; measure 60–72ch. Nothing under 13px (`--fs--1` floor is 12.8px ≈ 13px).

Headings: `text-wrap: balance`. Paragraphs: `text-wrap: pretty`. Numbers: `font-variant-numeric: tabular-nums`.

## Space

| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | micro gaps |
| `--s-2` | 8 | inline icon-text gap |
| `--s-3` | 12 | tight padding |
| `--s-4` | 16 | default padding |
| `--s-5` | 24 | card padding |
| `--s-6` | 32 | section inner gap |
| `--s-7` | 48 | medium section pad |
| `--s-8` | 64 | large section pad |
| `--s-9` | 96 | loose section pad |

Section padding sizes: tight 64px (`--s-8`), normal 96px (`--s-9`), loose 128px (custom `--s-loose: 128px`). Blueprint alternates tight / normal / loose.

## Grid

- Desktop: 12 columns, gutter 24px, max-width 1280px.
- Tablet: 8 columns, gutter 20px.
- Mobile: 4 columns, gutter 16px.
- Margin column: none (tint tickets are full-bleed or inset via grid span).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-light (paper)
- `--bg: #f4f1ea` | `--ink: #1a3c40` | `--muted: #4a6b6f` | `--rule: #d4cfc5` | `--accent: #0f766e` | `--focus: #0f766e`
- Button primary: bg `#0f766e`, fg `#ffffff` (contrast 4.85:1 on paper; white on #0f766e = 4.85 ≥ 4.5).
- Text pairs: ink on paper = 10.55:1 (pass); muted on paper = 4.52:1 (pass AA).

### t-paper (warm)
- `--bg: #e8d5b7` | `--ink: #1a3c40` | `--muted: #3d5558` | `--rule: #c9b99a` | `--accent: #0f766e` | `--focus: #0f766e`
- Button primary: bg `#1a3c40`, fg `#f4f1ea` (ink on warm = 8.29:1).
- Text pairs: ink on warm = 8.29:1 (pass); muted on warm = 5.12:1 (pass).

### t-mid
- `--bg: #2d5f63` | `--ink: #f4f1ea` | `--muted: #c5d8da` | `--rule: #3d7a7f` | `--accent: #f4f1ea` | `--focus: #f4f1ea`
- Button primary: bg `#f4f1ea`, fg `#1a3c40` (paper on mid = 6.35:1).
- Text pairs: paper on mid = 6.35:1 (pass); muted on mid = 3.21:1 (large text only).

### t-deep
- `--bg: #1a3c40` | `--ink: #f4f1ea` | `--muted: #9ab8bc` | `--rule: #2d5f63` | `--accent: #0f766e` | `--focus: #0f766e`
- Button primary: bg `#0f766e`, fg `#ffffff` (white on teal = 4.85:1; teal on deep = 2.24 FAIL — never use accent text on deep).
- Text pairs: paper on deep = 10.55:1 (pass); muted on deep = 4.62:1 (pass).

### t-accent
- `--bg: #0f766e` | `--ink: #ffffff` | `--muted: #d1e8e6` | `--rule: #0a5c56` | `--accent: #f4f1ea` | `--focus: #f4f1ea`
- Button primary: bg `#f4f1ea`, fg `#1a3c40` (paper on accent = 4.85:1).
- Text pairs: white on accent = 4.85:1 (pass); muted on accent = 3.48:1 (large text only).

## Radius & Shadow

- Radius: `0` everywhere except buttons and inputs which use `2px`. Sample tags use `999px` pill.
- Shadow: only on mobile bar (`0 -2px 8px rgba(26,60,64,.12)`) and popover cards. No shadows on cards or sections.

## Motion tokens

- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-io: cubic-bezier(.77,0,.175,1)`
- `--dur-press: 120ms`
- `--dur-ui: 200ms`
- `--dur-page: 520ms`
- `--dur-story: 900ms`
- `--dur-stagger: 60ms`

## Components

- **Buttons:** primary (bg accent, fg white, min-height 48px, padding 12px 24px), secondary (border ink, bg transparent, same height), text (no border, underline on hover). All ≥ 48px tap target.
- **Input:** border `1px solid var(--rule)`, bg `var(--bg)`, padding 12px 16px, focus outline `3px solid var(--focus)` offset 3px.
- **Card:** bg `var(--bg)`, padding `var(--s-5)`, no shadow, border-top `3px solid var(--accent)` as tint-ticket cap.
- **Sample tag:** inline pill, bg `var(--rule)`, fg `var(--ink)`, font-size `--fs--1`, padding 2px 8px, radius 999px. Always wraps review/rating/price labels.
- **Frame:** aspect-ratio 3/2 for photos, 16/9 for video. Grade filter applied uniformly.
- **Header:** height token `--header-h: 64px`. Logo left, nav center, CTA right. Sticky below hero.
- **Mobile bar:** fixed bottom, height 56px, two buttons (Call + Price it), shadow above. Visible < 900px.
- **Signature primitive:** `.drawdown-bar` — a horizontal div, height 4px, bg `var(--accent)`, width driven by `data-drawdown-width` (0–100%). Used as section divider and ticket cap rule. Animated via GSAP scaleX from 0 to target width on scroll entry.

## Photo grade

One filter for every photo: `saturate(.85) contrast(1.05) sepia(.08) brightness(.98)`. Tuned to warm parchment palette; reduces stock-photo saturation without going flat. No overlay on most photos; hero gets a left-side scrim per LEARNINGS §1 formula using deep color RGB (26,60,64).

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  :focus-visible { outline: 3px solid CanvasText; }
  .btn, .drawdown-bar { border: 1px solid ButtonText; }
}
```