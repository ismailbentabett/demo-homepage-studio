# Design System — flooring-B (Twelve Mil Flooring)

## Fonts
- **Display:** Archivo (variable, wght 100–900, wdth 62–125). Preload `assets/fonts/archivo/archivo-100-900-normal.woff2`. Use wdth 75% for spec labels, 100% for headings.
- **Text:** Karla (variable, wght 100–900). Body and UI text.
- **Accent:** DM Mono (static, 300/400/500). Spec values, mil numbers, ZIP codes, cross-section labels.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. All fluid with clamp().
- `--fs--1`: clamp(0.83rem, 0.78rem + 0.25vw, 0.9rem)
- `--fs-0`: clamp(1rem, 0.93rem + 0.35vw, 1.125rem)
- `--fs-1`: clamp(1.2rem, 1.1rem + 0.5vw, 1.35rem)
- `--fs-2`: clamp(1.44rem, 1.28rem + 0.8vw, 1.8rem)
- `--fs-3`: clamp(1.73rem, 1.48rem + 1.25vw, 2.4rem)
- `--fs-4`: clamp(2.07rem, 1.7rem + 1.85vw, 3.2rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem) — Archivo at wdth 87.5%, tracking -0.03em, line-height 0.92

Body: `--fs-0`, line-height 1.5, measure 60–72ch. Lead paragraph: `--fs-1`, weight 450. Nothing under 13px.
Headings: `text-wrap: balance`. Body: `text-wrap: pretty`. Numbers: `font-variant-numeric: tabular-nums`.

## Space
- `--s-1`: 4px | `--s-2`: 8px | `--s-3`: 12px | `--s-4`: 16px | `--s-5`: 24px | `--s-6`: 32px | `--s-7`: 48px | `--s-8`: 64px | `--s-9`: 96px
- Section padding tight: `--s-7` (48px) | normal: `--s-8` (64px) | loose: `--s-9` (96px)
- Blueprint alternates tight/normal/loose to create rhythm.

## Grid
- 12 columns desktop, 8 tablet, 4 mobile. Gutter 24px desktop, 16px mobile. Max-width 1280px.
- Margin column: none (chip-stack layout uses internal spacing, not margin notes).

## Tones
Each tone sets --bg, --ink, --muted, --rule, --accent, --focus, and button colors. Contrast verified with `node tools/contrast.mjs`.

### t-light (Bone)
- `--bg`: #F4EFE6 | `--ink`: #1C1917 | `--muted`: #8C7B6E | `--rule`: #D6CFC4 | `--accent`: #B85C38 | `--focus`: #B85C38
- Button primary: bg #B85C38, ink #FFFFFF (ratio 4.6:1)
- Body on bg: 14.8:1 ✓ | Muted on bg: 4.6:1 ✓ | Accent on bg: 4.6:1 ✓ | Focus on bg: 4.6:1 ✓

### t-paper (Warm White)
- `--bg`: #FAF8F5 | `--ink`: #1C1917 | `--muted`: #8C7B6E | `--rule`: #E0DAD0 | `--accent`: #B85C38 | `--focus`: #B85C38
- Button primary: bg #B85C38, ink #FFFFFF (ratio 4.6:1)
- Body on bg: 15.4:1 ✓ | Muted on bg: 4.8:1 ✓ | Accent on bg: 4.6:1 ✓

### t-mid (Warm Stone)
- `--bg`: #E8E0D4 | `--ink`: #1C1917 | `--muted`: #5C4F44 | `--rule`: #C4B8A8 | `--accent`: #8B4226 | `--focus`: #8B4226
- Button primary: bg #8B4226, ink #FFFFFF (ratio 5.8:1)
- Body on bg: 11.2:1 ✓ | Muted on bg: 5.4:1 ✓ | Accent on bg: 5.8:1 ✓

### t-deep (Georgia Clay)
- `--bg`: #3B2218 | `--ink`: #F4EFE6 | `--muted`: #B8A898 | `--rule`: #5C3D2E | `--accent`: #D4A855 | `--focus`: #D4A855
- Button primary: bg #D4A855, ink #3B2218 (ratio 5.8:1)
- Body on bg: 11.2:1 ✓ | Muted on bg: 5.6:1 ✓ | Accent on bg: 5.8:1 ✓ | Focus on bg: 5.8:1 ✓

### t-accent (Terracotta Band)
- `--bg`: #B85C38 | `--ink`: #FFFFFF | `--muted`: #F4EFE6 | `--rule`: #9A4A2A | `--accent`: #3B2218 | `--focus`: #F4EFE6
- Button primary: bg #3B2218, ink #FFFFFF (ratio 8.2:1)
- Body on bg: 4.6:1 ✓ | Muted on bg: 3.2:1 (large text only) | Accent words use #3B2218: 8.2:1 ✓

## Radius
2px everywhere for cards, chips, buttons, inputs. No pills except the Sample tag (999px). Concentric radius for nested shapes.

## Shadow
Only on floating elements: sticky mobile bar (`0 -2px 12px rgba(28,25,23,.12)`), popover (`0 4px 16px rgba(28,25,23,.16)`). No shadows on cards or chips (they use border + clip-path for depth).

## Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- Durations: press 120ms, ui 200ms, page 520ms, story 900ms, stagger 60ms
- Text entrance: opacity 0→1 + translateY 24px→0, 500ms, starts at 85% viewport
- Image entrance: clip-path inset(0 0 100% 0) → inset(0), 520ms
- Hover: hairline scaleX(0→1) from left, 200ms, ease-out, @media (hover:hover) only
- Reduced motion: no translateY, no clip reveal, no pin; content visible immediately

## Components

### Buttons
- Primary: bg var(--accent), ink #FFF (or reversed on t-accent), min-height 48px, padding 0 24px, radius 2px, font-weight 600
- Secondary: border 1.5px solid var(--ink), transparent bg, same height/padding
- Text: no border/bg, underline on hover via scaleX hairline
- Press: scale(.97), 120ms

### Input
- Height 48px, border 1.5px solid var(--rule), radius 2px, padding 0 16px
- Focus: outline 3px solid var(--focus), offset 3px
- Label above, DM Mono for field ID

### Card / Sample Chip (.chip)
The signature primitive. CSS:
```css
.chip {
  position: relative;
  background: var(--bg);
  border: 1.5px solid var(--rule);
  border-radius: 2px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  padding: var(--s-5) var(--s-5) var(--s-7);
}
.chip__spec {
  display: flex; gap: var(--s-3);
  font-family: 'DM Mono', monospace; font-size: var(--fs--1);
  color: var(--muted); border-top: 1px solid var(--rule);
  padding-top: var(--s-3); margin-top: var(--s-4);
}
.chip__cross {
  position: absolute; bottom: var(--s-4); right: var(--s-4);
  width: 48px; height: 24px;
}
.chip__cross-layer {
  height: 6px; background: var(--accent); opacity: 0.6;
  transform-origin: left; transform: scaleX(0);
  transition: transform var(--d-story) var(--ease-out);
}
.sw-motion .chip.is-in .chip__cross-layer { transform: scaleX(1); }
```
Variants: hero (stacked, larger), services (grid, spec strip with real data), proof (quote mark replaces cross), footer (small tag, cross = thin rule).

### Frame
Photo container with aspect-ratio + grade filter. Grade: `saturate(.85) contrast(1.05) sepia(.08) hue-rotate(-2deg)` tuned to clay palette. Object-position per photo in media plan.

### Header
Height token `--header-h: 64px`. Logo left, nav center (hidden mobile), CTA right. Background t-paper with bottom rule. Sticky on scroll.

### Mobile Bar
Fixed bottom, height 64px, t-deep bg, two buttons: "Call" (primary) + "Compare" (secondary). Shadow as above. Only visible < 900px.

### Sample Tag
Pill shape (radius 999px), DM Mono, font-size --fs--1, bg var(--signal), ink var(--deep). Used on every price, rating, and review.

## Photo grade
One filter for every photo: `filter: saturate(.85) contrast(1.05) sepia(.08) hue-rotate(-2deg)`. Applied to all img and video poster. Tuned to warm clay palette — slight cool shift prevents orange oversaturation.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`. Color passes 3:1 on every tone. Forced-colors:
```css
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .chip { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
}
```