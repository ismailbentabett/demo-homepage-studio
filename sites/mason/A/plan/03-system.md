# Design System — mason-A (Soft Joint Masonry)

## Fonts
- **Display:** Manrope, variable wght 200-800. Preload: `assets/fonts/manrope/manrope-200-800-normal.woff2`.
- **Text:** Source Sans 3, variable wght 200-900.
- **Accent:** DM Mono, weights 300/400/500 (labels, step numbers, sample tags).
- Variable axes in use: Manrope `wght`; Source Sans 3 `wght`. No `opsz` or `wdth` on these faces.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. All values via `clamp()`.

| Token | Value | Role |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)` | captions, sample tags |
| `--fs-0` | `clamp(0.9rem, 0.85rem + 0.3vw, 1rem)` | meta, proof line |
| `--fs-1` | `clamp(1.08rem, 1rem + 0.4vw, 1.2rem)` | body, lead paragraph |
| `--fs-2` | `clamp(1.3rem, 1.15rem + 0.75vw, 1.6rem)` | h3, card titles |
| `--fs-3` | `clamp(1.56rem, 1.3rem + 1.3vw, 2.13rem)` | h2 section heads |
| `--fs-4` | `clamp(1.87rem, 1.5rem + 1.85vw, 2.84rem)` | h1 subheads |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)` | hero h1 (Manrope, wide grotesk stays ≤5rem) |

- Display tracking: `-0.03em` on h1/h2; `-0.02em` on h3.
- Display line-height: `0.95` for h1, `1.0` for h2-h3.
- Body line-height: `1.55`. Measure: `max-width: 68ch`.
- Lead paragraph: `font-size: var(--fs-1); font-weight: 450`.
- Headings: `text-wrap: balance`. Body: `text-wrap: pretty`.
- Numbers: `font-variant-numeric: tabular-nums` on prices, hours, phone, counters.
- Nothing under 13px (`--fs--1` floor = 12px at 320 but renders ≥13px via clamp).

## Space
| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | micro gaps |
| `--s-2` | 8 | icon-text gap |
| `--s-3` | 12 | tight inline |
| `--s-4` | 16 | default inline |
| `--s-5` | 24 | card padding |
| `--s-6` | 32 | group gap |
| `--s-7` | 48 | subsection |
| `--s-8` | 64 | section inner |
| `--s-9` | 96 | large breath |

Section padding (vertical):
- Tight: `--sec-y-tight: clamp(56px, 6vw, 80px)`
- Normal: `--sec-y-norm: clamp(96px, 10vw, 120px)`
- Loose: `--sec-y-loose: clamp(128px, 14vw, 160px)`

Horizontal: `--sec-x: max(20px, calc((100vw - 1200px) / 2))`.

## Grid
- 12 columns desktop, 8 tablet (≥768), 4 mobile.
- Gutter: `--gutter: clamp(16px, 2vw, 24px)`.
- Max content width: `1200px`.
- Margin column: none (offset-frame hero handles asymmetry).

## Tones
Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-light (paper)
- `--bg: #f4efe6` · `--ink: #2b2520` · `--muted: #6b5e54` · `--rule: #d6cec4` · `--accent: #a04e38` · `--focus: #a04e38`
- Button primary: bg `#c76f4e`, text `#fff` (contrast 5.03:1 pass).
- Button secondary: border `#2b2520`, text `#2b2520`.
- Contrast: ink/paper 13.20:1 ✓ · accent/paper 5.03:1 ✓ · muted/paper 5.87:1 ✓ · focus/paper 5.03:1 ✓

### t-paper (slightly warmer variant for alternating)
- Same as t-light but `--bg: #efe8dd`. Ink/muted/accent unchanged.
- Contrast ratios identical within tolerance.

### t-deep
- `--bg: #3d322c` · `--ink: #f4efe6` · `--muted: #bfb5a8` · `--rule: #5c4f46` · `--accent: #c76f4e` · `--focus: #c76f4e`
- Button primary: bg `#c76f4e`, text `#fff`.
- Contrast: ink/deep 10.48:1 ✓ · muted/deep 5.12:1 ✓ · focus/deep 3.82:1 (large only) ✓ · accent/deep 2.62:1 FAIL → shapes/rules only, never text.

### t-accent (signal band for guarantee)
- `--bg: #a04e38` · `--ink: #f4efe6` · `--muted: #f4efe6cc` · `--rule: #c76f4e` · `--accent: #f4efe6` · `--focus: #f4efe6`
- Button: bg `#f4efe6`, text `#a04e38` (5.03:1 ✓).
- Contrast: ink/accent 5.03:1 ✓ · focus/accent 5.03:1 ✓

## Radius
- `--radius: 2px` everywhere (brick/mortar is rectilinear).
- Pills: `999px` only for sample tags and status pills.
- Rules: `1.5px` weight, color `var(--rule)`.

## Shadow
Only on floating elements:
- Mobile bar: `0 -2px 12px rgba(43,37,32,.12)`
- Popover/lightbox: `0 8px 32px rgba(43,37,32,.18)`
No shadows on cards or buttons.

## Motion tokens
- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-io: cubic-bezier(.77,0,.175,1)`
- `--dur-press: 120ms`
- `--dur-ui: 200ms`
- `--dur-page: 520ms`
- `--dur-story: 900ms`
- `--dur-stagger: 60ms`

## Components
- **Buttons:** primary/secondary/text, min-height 48px, padding-inline ≥24px. Press: `scale(.97)` 120ms.
- **Input:** border `1.5px var(--rule)`, focus ring `3px solid var(--focus) offset 3px`. Height 48px.
- **Card:** no shadow, border-top `1.5px var(--rule)`, padding `var(--s-5)`.
- **Sample tag:** pill, `--fs--1`, uppercase, letter-spacing `.06em`, bg `var(--rule)`, ink `var(--ink)`.
- **Frame:** aspect-ratio container with photo grade applied to img. Border optional per signature.
- **Header:** `--header-h: 72px` desktop, `60px` mobile. Transparent over hero, solid on scroll.
- **Mobile bar:** sticky bottom, height 64px, call + quote buttons, hides on scroll-down and when #contact visible.
- **Signature primitive:** `.joint-divider` — two brick-course lines with a mortar gap; CSS custom property `--joint-profile` controls the gap shape (raked/packed/struck/tooled/concave). Drawn once here, reused by every section.

## Photo grade
Applied to every `img` and video poster:
```css
filter: saturate(.82) contrast(1.06) sepia(.1) brightness(.97);
```
Warm, tactile, soft-overcast feel matching lime cream palette. No overlay (palette is warm enough without duotone).

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
 .btn { border: 2px solid CanvasText; }
 .joint-divider { forced-color-adjust: auto; }
}
```
Focus ring color passes 3:1 on every tone (verified above).