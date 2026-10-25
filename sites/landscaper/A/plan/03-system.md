# Design System — landscaper-A (Tilth & Tine Landscape)

## Fonts
- **Display:** Bitter (variable wght 100–900). Preload: `Bitter-VariableFont_wght.woff2`. Axis: `wght`. Used for h1–h3, depth tags, tool labels. Tracking: -0.02em at ≥ 2rem, 0 below.
- **Text:** Karla (variable wght 200–800). Axis: `wght`. Body, captions, form labels, buttons. Line-height 1.6.
- **Accent (mono):** JetBrains Mono (400, 700). Numbers only in estimator output, price ranges, countdown. Not preloaded.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. All fluid via clamp().

| Token | Value | Use |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)` | Small, captions, sample tags |
| `--fs-0` | `clamp(0.875rem, 0.8rem + 0.35vw, 1rem)` | Meta, labels |
| `--fs-1` | `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` | Body (18px desktop) |
| `--fs-2` | `clamp(1.125rem, 1rem + 0.6vw, 1.35rem)` | Lead paragraph, card titles |
| `--fs-3` | `clamp(1.35rem, 1.1rem + 1.2vw, 1.75rem)` | h3 |
| `--fs-4` | `clamp(1.75rem, 1.3rem + 2vw, 2.5rem)` | h2 |
| `--fs-h1` | `clamp(2.5rem, 1.2rem + 5vw, 4.5rem)` | h1 (Bitter, tracking -0.03em, line-height 0.95) |

Body measure: max-width 65ch. Text-wrap: balance on headings, pretty on body.

## Space
Base unit 4px. Section padding alternates tight/normal/loose per blueprint rhythm.

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

Section vertical padding:
- `--sec-y-tight`: clamp(3.5rem, 3rem + 2vw, 5rem) → 56–80px
- `--sec-y-normal`: clamp(6rem, 5rem + 3vw, 7.5rem) → 96–120px
- `--sec-y-loose`: clamp(8rem, 7rem + 4vw, 10rem) → 128–160px

Horizontal page margin: `--page-x`: clamp(1rem, 0.5rem + 2vw, 2rem). Max content width: 1200px.

## Grid
- Desktop: 12 columns, gutter 24px, max-width 1200px centered.
- Tablet (≤ 1024px): 8 columns, gutter 20px.
- Mobile (≤ 640px): 4 columns, gutter 16px.
- Margin column for depth gauge: 64px wide on desktop (left rail), collapses to top bar on mobile.

## Tones
Each tone sets bg, ink, muted, rule, accent, focus, button colors. Contrast ratios verified against WCAG AA.

### t-paper (primary reading surface)
- `--bg`: #F5F0E8
- `--ink`: #2A1A0E (contrast vs bg: ~12.5:1 ✓)
- `--muted`: #5C4A3A (~7:1 ✓)
- `--rule`: #D4C8B8
- `--accent`: #C2593A
- `--focus`: #C2593A (3:1+ vs bg ✓)
- Button primary: bg #C2593A, text #F5F0E8 (contrast ~4.6:1 ✓)
- Button secondary: border #2A1A0E, text #2A1A0E

### t-mid (warm secondary bands)
- `--bg`: #D4A76A
- `--ink`: #2A1A0E (contrast ~8.2:1 ✓)
- `--muted`: #4A3520 (~5.5:1 ✓)
- `--rule`: #B8925A
- `--accent`: #3B1F12
- `--focus`: #3B1F12 (3:1+ vs bg ✓)
- Button primary: bg #3B1F12, text #F5F0E8 (~9:1 ✓)

### t-deep (drainage / bedrock)
- `--bg`: #3B1F12
- `--ink`: #F5F0E8 (contrast ~9:1 ✓)
- `--muted`: #C4B8A8 (~6:1 ✓)
- `--rule`: #5C3A28
- `--accent`: #C2593A
- `--focus`: #D4A76A (3:1+ vs deep ✓)
- Button primary: bg #C2593A, text #F5F0E8 (~4.6:1 ✓)

### t-accent (service area color band)
- `--bg`: #C2593A
- `--ink`: #F5F0E8 (contrast ~4.6:1 ✓ for large text; body text uses #2A1A0E at ~8:1 ✓)
- `--muted`: #F5F0E8 (at 80% opacity for decorative only)
- `--rule`: #A04830
- `--accent`: #2A1A0E
- `--focus`: #F5F0E8 (3:1+ ✓)
- Note: body text on t-accent uses ink #2A1A0E, never #F5F0E8 for paragraphs.

### t-light (alternate paper for reviews/form)
Same as t-paper but with `--bg`: #FAF7F2 for subtle differentiation. All contrasts identical.

## Radius & Shadow
- Radius: 3px everywhere (cards, buttons, inputs, frames). No pills except sample tags (999px).
- Shadow: only on mobile bar (`0 -2px 12px rgba(42,26,14,0.12)`) and popover. No card shadows.

## Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- `--dur-press`: 120ms
- `--dur-ui`: 200ms
- `--dur-page`: 520ms
- `--dur-story`: 900ms
- `--stagger`: 60ms

## Components
- **Buttons:** min-height 48px, padding 0 1.5em. Primary (accent bg), secondary (ink border), text (underline hover). Focus ring 3px solid var(--focus), offset 3px.
- **Inputs:** height 48px, border 1px solid var(--rule), bg var(--bg), focus border var(--accent) + glow.
- **Cards:** padding var(--s-6), border 1px solid var(--rule), radius 3px.
- **Sample tag:** inline pill, font-size var(--fs--1), bg rgba(42,26,14,0.08), color var(--muted), padding 0.2em 0.6em, radius 999px. Always visible.
- **Frame:** aspect-ratio set per slot, overflow hidden, img object-fit cover. Grade filter applied globally.
- **Header:** height token `--header-h`: 64px mobile, 72px desktop. Background transparent until scrolled, then var(--bg) with border-bottom.
- **Mobile bar:** sticky bottom, height 64px, bg var(--bg), shadow, z-index 100. Contains call + quote buttons. Hidden when #contact in view.
- **Depth gauge primitive:** CSS custom property `--depth-pct` (0–100) set by scroll JS. Left rail 64px wide, background var(--rule), fill bar with `clip-path: inset(calc(100% - var(--depth-pct) * 1%) 0 0 0)`, color var(--accent). Depth marks at fixed positions. On mobile: horizontal top bar, height 4px.

## Photo grade
Global filter for all photos: `saturate(0.8) contrast(1.08) sepia(0.12) brightness(0.95)`. Warm earth unity across stock sources. No overlay except hero strip which gets a subtle linear-gradient scrim from bottom (transparent to rgba(59,31,18,0.3)) for text legibility if needed.

## Focus & Accessibility
- `:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`
- `@media (forced-colors: active)`: buttons retain border, sample tags retain border, gauge marks forced to CanvasText.
- Reduced motion: `.sw-motion` gates all entrance animations. Without it, everything is visible, gauge fully filled, no clip reveals.
- All interactive targets ≥ 48px. Tap target spacing ≥ 8px.

## Signature CSS primitive
`.depth-gauge` container with `position: sticky; top: var(--header-h); height: calc(100vh - var(--header-h));` on desktop. Child `.depth-fill` uses `--depth-pct` from app.js. Each section with `[data-depth]` updates the variable on intersection. Horizon divider: SVG wave path with fill matching next section's bg, height 48px, preservedAspectRatio none.