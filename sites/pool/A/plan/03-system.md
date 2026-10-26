# Design System — pool-A (Tileline Pool Care)

## Fonts

- **Display:** Sora (variable wght 100–900). Preload `assets/fonts/sora/sora-100-900-normal.woff2`. Used for h1, h2, section stamps.
- **Text:** Karla (variable wght 200–800). Body, captions, form labels.
- **Accent:** JetBrains Mono (variable wght 100–900). Timestamps, readings, units, ZIP codes, price ranges. Tabular nums via `font-variant-numeric: tabular-nums`.

Variable axes in use: Sora `wght`; Karla `wght`; JetBrains Mono `wght`. No `opsz` or `wdth` needed for this trio.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values fluid with `clamp()`.

| Token | Value | Use |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.68rem + 0.2vw, 0.8125rem)` | Captions, timestamps, tags |
| `--fs-0` | `clamp(0.875rem, 0.82rem + 0.25vw, 0.9375rem)` | Meta, proof line, small body |
| `--fs-1` | `clamp(1.0625rem, 0.98rem + 0.35vw, 1.1875rem)` | Body text, lead paragraph |
| `--fs-2` | `clamp(1.25rem, 1.12rem + 0.55vw, 1.5rem)` | H3, card titles |
| `--fs-3` | `clamp(1.5rem, 1.3rem + 0.85vw, 2rem)` | H2, section headers |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)` | H1 only |

Sora is a medium-width grotesk; h1 max 5rem keeps it from overflowing at 1440×900. Display tracking `-0.03em`, line-height 0.92. Body line-height 1.55, measure 62ch max. Nothing under 13px (`--fs--1` floor = 12px at 320 but renders ≥ 13px on all target viewports).

Lead paragraph: `font-size: var(--fs-1); font-weight: 450;` on Karla.

## Space

| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | Micro gaps, icon-to-text |
| `--s-2` | 8 | Inline padding, tag padding |
| `--s-3` | 12 | Card inner padding |
| `--s-4` | 16 | Grid gutter, component gap |
| `--s-5` | 24 | Section inner margins |
| `--s-6` | 32 | Between stacked cards |
| `--s-7` | 48 | Tight section padding-y |
| `--s-8` | 64 | Normal section padding-y |
| `--s-9` | 96 | Loose section padding-y |

Section padding sizes: tight 64px (`--s-8`), normal 96px (`--s-9`), loose 128px (desktop only, `calc(var(--s-9) + var(--s-7))`). Blueprint alternates them.

## Grid

- 12 columns desktop (≥ 1100px), 8 columns tablet (640–1099px), 4 columns mobile (< 640px).
- Gutter: 16px mobile, 24px desktop.
- Max content width: 1280px.
- Left margin column: 48px wide on desktop (carries waterline signature rail), collapses to 0 on mobile (waterline becomes top border on each card).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors. Contrast verified with `tools/contrast.mjs`.

### t-deep (Night Water)
- `--bg: #0B1C2C` / `--ink: #F0F4F8` / `--muted: #A8BCC8` / `--rule: #1E3A52` / `--accent: #00B4D8` / `--focus: #00B4D8`
- Button primary bg: `#0089A8`, text: `#FFFFFF` (4.6:1 ✓)
- Text on bg: 15.61:1 ✓ | Muted on bg: 7.8:1 ✓ | Accent on bg: 7.2:1 ✓ | Focus on bg: 7.2:1 ✓

### t-paper (Pale Mist)
- `--bg: #E8EDF2` / `--ink: #0B1C2C` / `--muted: #4A5E6E` / `--rule: #C8D4DE` / `--accent: #007A99` / `--focus: #007A99`
- Button primary bg: `#007A99`, text: `#FFFFFF` (4.94:1 ✓)
- Text on bg: 13.8:1 ✓ | Muted on bg: 5.6:1 ✓ | Accent on bg: 5.2:1 ✓ | Focus on bg: 5.2:1 ✓

### t-mid (Deep Teal)
- `--bg: #1E3A52` / `--ink: #F0F4F8` / `--muted: #B0C4D0` / `--rule: #2E5068` / `--accent: #00B4D8` / `--focus: #00B4D8`
- Button primary bg: `#0089A8`, text: `#FFFFFF` (4.6:1 ✓)
- Text on bg: 10.2:1 ✓ | Muted on bg: 7.1:1 ✓ | Accent on bg: 7.88:1 ✓ | Focus on bg: 7.88:1 ✓

### t-accent (Cobalt Band)
- `--bg: #007A99` / `--ink: #FFFFFF` / `--muted: #D0EEF4` / `--rule: #006080` / `--accent: #F0F4F8` / `--focus: #F0F4F8`
- Button primary bg: `#0B1C2C`, text: `#F0F4F8` (15.61:1 ✓)
- Text on bg: 4.94:1 ✓ (AA pass) | Focus on bg: 15.61:1 ✓

## Radius & Shadow

- Radius: 3px everywhere (cards, buttons, inputs, tags). No pills except timestamp pills (border-radius: 999px).
- Shadow: only on sticky visit card and mobile bar: `0 2px 12px rgba(11,28,44,0.25)`. No shadows on cards or buttons.

## Motion tokens

```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

## Components

- **Buttons:** Primary (bg accent, white text, ≥ 48px height, 3px radius), Secondary (transparent bg, ink border, ink text), Text (no border, underline on hover). All ≥ 48px tap target.
- **Input:** 48px height, 3px radius, 1px rule border, focus ring 3px solid `var(--focus)` offset 3px.
- **Card:** 3px radius, no shadow, 1px rule border, padding `var(--s-5)`.
- **Tag:** Inline pill, `--fs--1`, uppercase, letter-spacing 0.04em, padding `2px 8px`, 999px radius. "Sample" tag always present on prices and ratings.
- **Frame:** Photo container with aspect-ratio, overflow hidden, grade filter applied.
- **Header:** Height token `--header-h: 64px`. Logo left, phone right, nav center (desktop). Background `t-deep`.
- **Mobile bar:** Fixed bottom, 64px height, primary CTA + phone, shadow, z-index above content.
- **Signature primitive:** `.waterline-rail` — 2px cobalt vertical rule, positioned absolute left: 24px (desktop), carries timestamp stamps. Drawn once here; sections reuse via `data-sw-signature="visit-log"`.

## Photo grade

One filter for every photo:
```css
filter: saturate(0.8) contrast(1.08) brightness(0.92) sepia(0.06);
```
Tuned for night-water palette: pulls warmth out, deepens blues, keeps skin tones neutral in tech-behind shots. Optional overlay on hero video: duotone multiply `rgba(11,28,44,0.3)` to unify stock footage with the navy deep tone.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  button, a, input, select { border: 2px solid ButtonText; }
}
```
Focus color passes ≥ 3:1 on every tone background (verified above).