# Design System — painter-C (Haint & Harbor)

## Fonts

- **Display:** Cormorant Garamond, variable wght 300–700. Preload `assets/fonts/cormorant-garamond/cormorant-garamond-300-700-normal.woff2`. Used for h1, section headings, plaque street-feeling line. Tracking -0.02em at display sizes.
- **Text:** Source Serif 4, variable opsz 8–60, wght 200–900. Body copy, tool output, review text. Lead paragraph: `"opsz" 24`, weight 450.
- **Accent:** DM Mono, wght 300–500. Plaque labels, sample tags, tool inputs, data lines, hours. Tabular nums for prices and counters.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values use `clamp()`.

| Token | Value | Use |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)` | captions, sample tags, mono labels |
| `--fs-0` | `clamp(0.9rem, 0.85rem + 0.25vw, 1rem)` | body small, proof line |
| `--fs-1` | `clamp(1.08rem, 1rem + 0.4vw, 1.2rem)` | body, lead paragraph |
| `--fs-2` | `clamp(1.3rem, 1.15rem + 0.75vw, 1.44rem)` | h3, card titles |
| `--fs-3` | `clamp(1.56rem, 1.3rem + 1.3vw, 1.728rem)` | h2 |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem)` | h1 (Cormorant, tracking -0.03em, line-height 0.92) |

Body: 17–19px (`--fs-1`), line-height 1.55, measure 62ch max. Nothing under 13px. Headings: `text-wrap: balance`. Body: `text-wrap: pretty`. Numbers: `font-variant-numeric: tabular-nums`.

## Space

| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | micro gaps |
| `--s-2` | 8 | inline icon/text gap |
| `--s-3` | 12 | tight padding |
| `--s-4` | 16 | default gap |
| `--s-5` | 24 | component padding |
| `--s-6` | 32 | section inner gap |
| `--s-7` | 48 | medium section pad |
| `--s-8` | 64 | normal section pad |
| `--s-9` | 96 | loose section pad |

Section padding sizes: tight `--s-7` (48px), normal `--s-8` (64px), loose `--s-9` (96px). Blueprint alternates them; never two adjacent sections share the same size.

## Grid

- Desktop: 12 columns, gutter 24px, max-width 1280px, margin auto.
- Tablet (≥768px): 8 columns, gutter 20px.
- Mobile (<768px): 4 columns, gutter 16px.
- Margin column: none (facade system provides its own framing).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-light (paper)
- `--bg: #f4efe6` / `--ink: #1a1c1e` / `--muted: #4a4d52` / `--rule: #c8c0b4` / `--accent: #8b5e3c` / `--focus: #8b5e3c`
- Button primary: bg `#1a1c1e`, fg `#f4efe6` (14.92:1). Secondary: border `#1a1c1e`, fg `#1a1c1e`.
- Contrast verified: ink on paper 14.92, signal on paper 4.87, muted on paper ~7.5.

### t-paper (slightly warmer variant for alternating light bands)
- `--bg: #ede7dc` / `--ink: #1a1c1e` / `--muted: #4a4d52` / `--rule: #bfb7a9` / `--accent: #8b5e3c` / `--focus: #8b5e3c`
- Same button scheme as t-light. Ink on #ede7dc ≈ 13.8:1 pass.

### t-deep (dark band)
- `--bg: #2d3a3e` / `--ink: #f4efe6` / `--muted: #b0bcc0` / `--rule: #4a5a60` / `--accent: #7fb3c4` / `--focus: #7fb3c4`
- Button primary: bg `#f4efe6`, fg `#2d3a3e` (10.26:1). Secondary: border `#f4efe6`, fg `#f4efe6`.
- Contrast verified: paper on deep 10.26, accent on deep 5.12, muted on deep ~5.8.

### t-ink (deepest dark, hero/cta bands only)
- `--bg: #1a1c1e` / `--ink: #f4efe6` / `--muted: #9aa0a6` / `--rule: #3a3d42` / `--accent: #7fb3c4` / `--focus: #7fb3c4`
- Button primary: bg `#7fb3c4`, fg `#1a1c1e` (7.44:1). Secondary: border `#f4efe6`, fg `#f4efe6`.
- Contrast verified: paper on ink 14.92, accent on ink 7.44.

### t-accent (haint blue band, used once)
- `--bg: #7fb3c4` / `--ink: #1a1c1e` / `--muted: #2d3a3e` / `--rule: #5b8a9a` / `--accent: #1a1c1e` / `--focus: #1a1c1e`
- Button primary: bg `#1a1c1e`, fg `#7fb3c4` (7.44:1).
- Contrast verified: ink on accent 4.51 pass.

**Rule:** never two t-deep or t-ink bands adjacent. Alternate with t-light or t-paper.

## Radius

Square everywhere (0px). Buttons, cards, inputs, frames, plaques: all sharp corners. The only rounded element is the focus ring (browser default circle on outline-offset). This matches Charleston's crisp architectural lines and avoids the soft-modern template look.

## Shadow

Only on floating elements: mobile bar (`box-shadow: 0 -2px 12px rgba(26,28,30,.12)`) and popover/hotspot cards. No shadows on cards, buttons, or frames.

## Motion tokens

```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--d-press: 120ms;
--d-ui: 200ms;
--d-page: 520ms;
--d-story: 900ms;
--d-stagger: 60ms;
```

No bounce, no elastic. All transitions reference these tokens.

## Components

### Buttons (min-height 48px)
- `.btn--primary`: solid bg, sharp corners, padding 0 32px, font-weight 600 (Source Serif 4), letter-spacing 0.01em.
- `.btn--secondary`: transparent bg, 2px border, same padding.
- `.btn--ghost`: no border, underline on hover via scaleX hairline.
- Press state: `transform: scale(.97)`, `--d-press`.

### Inputs
- Height 48px, border 1.5px `var(--rule)`, bg `var(--bg)`, padding 0 16px. Focus: 3px solid `var(--focus)`, offset 3px.

### Cards
- Border 1.5px `var(--rule)`, padding `var(--s-5)`, no shadow, no radius.

### Sample tag
- `.sample-tag`: DM Mono `--fs--1`, uppercase, letter-spacing 0.08em, border 1px `var(--rule)`, padding 2px 8px, inline-block. Always visible next to reviews, prices, ratings.

### Frame (photo container)
- Aspect ratio set per slot (hero 21:9, story 4:3, break 16:9). Grade applied via CSS filter. No border, no radius. Caption below in `--fs--1` mono.

### Header
- `--header-h: 72px` desktop, `64px` mobile. Transparent on hero, gains `t-light` bg on scroll. Logo left, nav center, call button right.

### Mobile bar
- Sticky bottom under 900px, height 64px, t-deep bg, two buttons (Call + Price it) each ≥ 48px tall. Hides on scroll down and when `#contact` is visible.

### Signature primitive: facade + plaque
```css
.facade { display: block; width: 100%; max-width: 280px; }
.facade svg { width: 100%; height: auto; fill: var(--facade-color, var(--ink)); }
.plaque { margin-top: var(--s-3); padding: var(--s-3) var(--s-4); border: 1.5px solid var(--rule); background: var(--bg); font-family: 'DM Mono', monospace; font-size: var(--fs--1); line-height: 1.4; letter-spacing: 0.02em; }
.plaque__street { display: block; font-weight: 500; color: var(--ink); margin-bottom: 2px; }
.plaque__enemy { display: block; color: var(--muted); margin-bottom: 2px; }
.plaque__service { display: block; color: var(--accent); font-weight: 500; }
```
The `.facade` wrapper carries `data-sw-signature` in the hero instance only. Every other use reuses the class without the hook.

## Photo grade

One filter for every photo:
```css
filter: saturate(.8) contrast(1.05) sepia(.12) hue-rotate(-2deg);
```
Warm sepia bias suits Charleston's low-country light and the plaster/paper palette. Applied to every `img` and video poster via `.frame img, .vid video`. Per-photo `object-position` documented in 05-media.md.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
  .facade svg { forced-color-adjust: none; }
}
```
Focus color passes ≥3:1 on every tone background (verified above).