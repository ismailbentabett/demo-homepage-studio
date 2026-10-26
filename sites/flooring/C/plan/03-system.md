# Design System — flooring-C (Heart & Tide Floor Co.)

## Fonts

- **Display:** Oswald, weights 400 500 600 700. Variable axis `wdth` not used (static widths). Preload: `assets/fonts/oswald/oswald-400-700-normal.woff2`.
- **Text:** Source Sans 3, variable `wght` 200–900. Axis `opsz` available but not used. No preload.
- **Accent:** DM Mono, weights 400 500. For gauge tags, sample labels, spec numbers. No preload.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. Body 18px, line-height 1.5, measure 65ch.

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem);   /* 12→15 */
--fs-0:  clamp(0.875rem, 0.82rem + 0.28vw, 1rem);      /* 14→16 */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.125rem);       /* 16→18 body */
--fs-2:  clamp(1.125rem, 1rem + 0.6vw, 1.333rem);      /* 18→21.3 */
--fs-3:  clamp(1.333rem, 1.15rem + 0.9vw, 1.777rem);   /* 21.3→28.4 */
--fs-4:  clamp(1.777rem, 1.4rem + 1.8vw, 2.666rem);    /* 28.4→42.6 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.5rem); /* condensed display max */
```

Display tracking: `-0.03em`. Line-height: `0.92` for h1/h2, `1.0` for h3. Body line-height: `1.5`. Nothing under 13px (`--fs--1` floor is 12px only for non-text labels; body minimum is `--fs-0` at 14px).

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding: tight `clamp(56px, 8vw, 80px)`, normal `clamp(96px, 10vw, 120px)`, loose `clamp(128px, 12vw, 160px)`. Blueprint alternates tight/normal/loose.

## Grid

12 columns desktop, 8 tablet, 4 mobile. Gutter `--s-5` (24px). Max-width `1280px`. Margin column for tide-gauge tags: `minmax(80px, 1fr)` left edge on ≥900px, collapses into content flow below.

## Tones

Each tone sets `--bg --ink --muted --rule --accent --focus --btn-bg --btn-ink`.

### t-paper (light)
```
--bg: #E8DCC8; --ink: #0F1C24; --muted: #3A4A56; --rule: #0F1C2433;
--accent: #3BB9A6; --focus: #0F1C24; --btn-bg: #0F1C24; --btn-ink: #E8DCC8;
```
Contrast: ink on paper 12.79:1 (AAA). Muted on paper 7.2:1 (AA). Focus ring 12.79:1 (≥3 pass).

### t-deep (dark)
```
--bg: #0F1C24; --ink: #E8DCC8; --muted: #9AABB8; --rule: #E8DCC833;
--accent: #3BB9A6; --focus: #3BB9A6; --btn-bg: #3BB9A6; --btn-ink: #0F1C24;
```
Contrast: ink on deep 12.79:1 (AAA). Accent on deep 7.15:1 (AAA). Focus ring 7.15:1 (≥3 pass). Btn ink on btn bg 7.15:1 (AA).

### t-mid (secondary dark)
```
--bg: #1A3040; --ink: #E8DCC8; --muted: #8A9BAA; --rule: #E8DCC822;
--accent: #3BB9A6; --focus: #3BB9A6; --btn-bg: #3BB9A6; --btn-ink: #0F1C24;
```
Contrast: ink on mid 10.06:1 (AAA). Accent on mid 5.63:1 (AA). Focus ring 5.63:1 (≥3 pass).

### t-accent (color band)
```
--bg: #3BB9A6; --ink: #0F1C24; --muted: #1A3040; --rule: #0F1C2433;
--accent: #0F1C24; --focus: #0F1C24; --btn-bg: #0F1C24; --btn-ink: #E8DCC8;
```
Contrast: ink on accent 7.15:1 (AAA). Btn ink on btn bg 12.79:1 (AAA). Used sparingly for one color band.

## Radius & Shadow

Radius: `0` everywhere except buttons and inputs at `2px`. Pills (tags, sample labels): `999px`. No decorative shadows. Shadow only on floating mobile bar: `0 -2px 12px rgba(15,28,36,0.15)`.

Rules: weight `1px`, color `var(--rule)`. Tide-line signature rule: `2px solid var(--accent)` with tick marks.

## Motion tokens

```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--stagger: 60ms;
```

## Components

- **Primary button:** `min-height: 48px; padding: 12px 24px; font-weight: 600; border-radius: 2px;` bg `var(--btn-bg)`, ink `var(--btn-ink)`. Hover: brightness 1.08.
- **Secondary button:** same size, transparent bg, `border: 1px solid var(--ink)`, ink `var(--ink)`. Hover: bg `var(--ink)`, ink `var(--bg)`.
- **Text button:** no bg/border, underline on hover via `scaleX`. Min tap target 48px via padding-block trick.
- **Input:** `min-height: 48px; padding: 12px 16px; border: 1px solid var(--rule); border-radius: 2px; bg: var(--bg); ink: var(--ink);` focus: `outline: 3px solid var(--focus); outline-offset: 3px`.
- **Card:** `padding: var(--s-6); border: 1px solid var(--rule); border-radius: 0;` no shadow.
- **Sample tag:** `font-family: DM Mono; font-size: var(--fs--1); padding: 2px 8px; border: 1px solid var(--accent); border-radius: 999px; color: var(--accent);` inline.
- **Frame:** aspect-ratio `3/2` default, `4/3` for details. Grade applied via CSS filter. Overflow hidden.
- **Header:** `--header-h: 64px` mobile, `72px` desktop. Sticky, z-index 100.
- **Mobile bar:** fixed bottom, `height: 56px`, shadow, two buttons (Call + Price it), visible < 900px only.
- **Tide line (signature primitive):** `height: 2px; background: var(--accent); position: relative;` with a `::before` tick mark `width: 8px; height: 12px; background: var(--accent); position: absolute; left: 0; top: -5px;` and a mono label positioned above-left. Drawn once, reused via class `.tide-line` with data attributes for the reading.

## Photo grade

One filter for all photos:
```css
filter: saturate(0.85) contrast(1.05) sepia(0.08);
```
Tuned to warm sand paper palette. Optional overlay for hero only: `multiply #0F1C24` at 15% opacity via pseudo-element. No duotone elsewhere.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  :focus-visible { outline: 3px solid CanvasText; }
  .btn, .tide-line { border: 1px solid ButtonText; }
}
```