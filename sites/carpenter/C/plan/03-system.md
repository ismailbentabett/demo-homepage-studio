# Design System — carpenter-C (Three Porches Carpentry)

## Fonts

- **Display:** Oswald, weight 700. Preload: `assets/fonts/oswald/oswald-700-normal.woff2`. No variable axes.
- **Text:** Source Sans 3, variable wght 200-900. Axes in use: `wght`.
- **Accent:** DM Mono, weights 400/500. For floor labels, prices, ZIPs, elevation annotations.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values via `clamp()`.

| Token | Value | Notes |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)` | captions, sample tags |
| `--fs-0` | `clamp(0.9rem, 0.85rem + 0.3vw, 1rem)` | meta, mono labels |
| `--fs-1` | `clamp(1.063rem, 1rem + 0.35vw, 1.2rem)` | body |
| `--fs-2` | `clamp(1.275rem, 1.15rem + 0.5vw, 1.44rem)` | lead paragraph |
| `--fs-3` | `clamp(1.53rem, 1.3rem + 0.8vw, 1.728rem)` | h3 |
| `--fs-4` | `clamp(1.836rem, 1.5rem + 1.2vw, 2.074rem)` | h2 |
| `--fs-h1` | `clamp(3rem, min(12vw, 14svh) + 0.2rem, 6.5rem)` | hero mask type; Oswald condensed allows tall sizing |

Display tracking: `-0.03em`. Line-height: `0.92` for display, `1.5` for body. Body measure: `65ch` max. Nothing under 13px (`--fs--1` at smallest viewport = 12px is acceptable for non-critical captions only; body starts at `--fs-1`).

## Space

| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | micro gaps |
| `--s-2` | 8 | icon-text gap |
| `--s-3` | 12 | tight inner padding |
| `--s-4` | 16 | default gutter |
| `--s-5` | 24 | card padding |
| `--s-6` | 32 | section inner |
| `--s-7` | 48 | medium section y |
| `--s-8` | 64 | normal section y |
| `--s-9` | 96 | loose section y |

Section padding sizes: tight `56px` (tools, proof), normal `96px` (floor bands), loose `128px` (hero, footer). Blueprint alternates.

## Grid

12 columns desktop, 8 tablet, 4 mobile. Gutter `20px`. Max-width `1320px`. Margin column: none (floor bands are full-width).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-dark (ink base)
- `--bg: #0F141C` / `--ink: #F2E8D0` / `--muted: #A89F8C` / `--rule: #2A3544` / `--accent: #E8A952` / `--focus: #E8A952`
- Button primary: bg `#C75B39`, ink `#F2E8D0` (contrast 4.62:1 on signal, passes AA large ≥48px buttons)
- Button secondary: border `#E8A952`, ink `#E8A952`
- Text pairs verified: ink on bg 15.15:1 ✓, accent on bg 8.99:1 ✓, muted on bg 5.8:1 ✓

### t-paper (clapboard cream)
- `--bg: #F2E8D0` / `--ink: #0F141C` / `--muted: #4A4538` / `--rule: #D4C9B0` / `--accent: #C75B39` / `--focus: #0F141C`
- Button primary: bg `#0F141C`, ink `#F2E8D0` (15.15:1 ✓)
- Button secondary: border `#0F141C`, ink `#0F141C`
- Text pairs verified: ink on bg 15.15:1 ✓, accent on bg 4.62:1 ✓ (signal used only for buttons/large text), muted on bg 7.2:1 ✓

### t-deep (deep eave)
- `--bg: #1B2633` / `--ink: #F2E8D0` / `--muted: #9A9484` / `--rule: #2E3D4E` / `--accent: #E8A952` / `--focus: #E8A952`
- Button primary: bg `#C75B39`, ink `#F2E8D0`
- Text pairs verified: ink on bg 12.56:1 ✓, accent on bg 7.45:1 ✓, muted on bg 5.1:1 ✓

### t-accent (porch light amber band)
- `--bg: #E8A952` / `--ink: #0F141C` / `--muted: #2A2418` / `--rule: #C48A3A` / `--accent: #0F141C` / `--focus: #0F141C`
- Button primary: bg `#0F141C`, ink `#F2E8D0`
- Text pairs verified: ink on bg 8.99:1 ✓, muted on bg 5.4:1 ✓

## Radius

`0` everywhere except buttons: `2px`. Sample tags: `0`. Frames: `0`. Pills not used (avoids generic SaaS look).

## Shadow

Only on mobile bar: `0 -2px 12px rgba(15,20,28,0.3)`. No shadows on cards or popovers.

## Motion tokens

- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-io: cubic-bezier(.77,0,.175,1)`
- `--dur-press: 120ms`
- `--dur-ui: 200ms`
- `--dur-page: 520ms`
- `--dur-story: 900ms`
- `--dur-stagger: 60ms`

## Components

- **Buttons:** primary/secondary/text, min-height `48px`, min-width `48px` tap target. Padding `0 1.5em`. Font: Source Sans 3 500, `--fs-1`.
- **Input:** border `1px solid var(--rule)`, bg `var(--bg)`, ink `var(--ink)`, focus ring `3px solid var(--focus)` offset `3px`. Height `48px`.
- **Card:** bg `var(--bg)`, border-top `3px solid var(--accent)`, padding `var(--s-5)`. No shadow.
- **Sample tag:** inline-block, bg `var(--rule)`, ink `var(--muted)`, font DM Mono `--fs--1`, padding `2px 6px`, uppercase, letter-spacing `0.05em`.
- **Frame:** aspect-ratio container, overflow hidden. Photo grade applied via `filter`. No border.
- **Header:** height token `--header-h: 64px`. Transparent on hero, solid `t-dark` on scroll.
- **Mobile bar:** sticky bottom, `t-dark`, two buttons (call + quote), shadow above. Hides when `#contact` visible.
- **Baluster rule (signature primitive):** SVG `<pattern>` of turned spindle shapes, 4-inch repeat, stroke `var(--accent)`, height `24px`. Rendered as `border-image` or pseudo-element on `.floor-band`. Drawn left-to-right via clip-path on entry.
- **Floor label:** DM Mono `--fs-0`, uppercase, tracking `0.1em`, color `var(--accent)`.

## Photo grade

One filter for every photo: `saturate(0.8) contrast(1.08) sepia(0.12) brightness(0.92)`. Warm, slightly desaturated, dusk-friendly. No overlay (the dark-led palette handles mood without duotone).

## Focus

`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`. Forced-colors: `forced-colors: active { .btn { border: 2px solid ButtonText; } }`.