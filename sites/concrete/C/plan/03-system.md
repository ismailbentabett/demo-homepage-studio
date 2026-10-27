# Design System — concrete-C

## Fonts
- Display: Young Serif, weights 400. Preload: yes. No variable axes.
- Text: Figtree, variable wght 300–900. Body 400, lead 500, strong 700.
- Accent: DM Mono, weights 400, 500. Used for elevation numbers, ZIP, spec values.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. All clamp().
- --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem) /* captions, mono labels */
- --fs-0: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem) /* body ~17-18px */
- --fs-1: clamp(1.125rem, 1rem + 0.5vw, 1.25rem)
- --fs-2: clamp(1.35rem, 1.1rem + 1vw, 1.6rem)
- --fs-3: clamp(1.62rem, 1.2rem + 1.8vw, 2.1rem)
- --fs-4: clamp(1.94rem, 1.3rem + 2.8vw, 2.8rem)
- --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem) /* Young Serif max 5rem (wide glyph) */

Display tracking: -0.02em. Line-height: 0.92 (headings), 1.5 (body). Measure: 64ch body, 48ch lead. Nothing under 13px (--fs--1 floor).

## Space
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px; --s-10: 128px; --s-11: 160px.
Section padding: tight 64px (--s-8), normal 96px (--s-9), loose 128px (--s-10). Blueprint alternates.

## Grid
12-col desktop, 8-col tablet, 4-col mobile. Gutter 24px. Max-width 1280px. Margin column: 1 col left reserved for elevation counter on desktop (hidden mobile).

## Tones
Each sets --bg, --ink, --muted, --rule, --accent, --focus, --btn-bg, --btn-ink.

t-paper: bg #F5F3F0, ink #1A2622, muted #5A6460, rule #D6CFC7, accent #8C3B2E, focus #8C3B2E, btn-bg #8C3B2E, btn-ink #F5F3F0.
  - ink/paper 14.10:1 ✓; accent/paper 6.82:1 ✓; focus/paper 6.82:1 ≥3 ✓; btn-ink/btn-bg 6.82:1 ≥4.5 ✓

t-deep: bg #1A2622, ink #F5F3F0, muted #A8B0AC, rule #3A4A44, accent #E07A5F, focus #E07A5F, btn-bg #E07A5F, btn-ink #1A2622.
  - ink/deep 14.10:1 ✓; accent/deep 5.29:1 ✓; focus/deep 5.29:1 ≥3 ✓; btn-ink/btn-bg 5.29:1 ≥4.5 ✓

t-mid: bg #D6CFC7, ink #1A2622, muted #5A6460, rule #B8B0A8, accent #8C3B2E, focus #8C3B2E, btn-bg #1A2622, btn-ink #F5F3F0.
  - ink/mid 9.82:1 ✓; accent/mid 5.44:1 ✓; btn contrast 14.10:1 ✓

t-accent: bg #8C3B2E, ink #F5F3F0, muted #E8D8D4, rule #A85A4A, accent #F5F3F0, focus #F5F3F0, btn-bg #F5F3F0, btn-ink #8C3B2E.
  - ink/accent 6.82:1 ✓; btn contrast 6.82:1 ✓

## Radius & Shadow
Radius: 2px everywhere (trail-sign crispness); pills 999px for tags and buttons.
Shadow: only on sticky mobile bar and popover (0 4px 12px rgba(26,38,34,.18)).

## Motion tokens
--ease-out: cubic-bezier(.23,1,.32,1)
--ease-io: cubic-bezier(.77,0,.175,1)
--dur-press: 120ms; --dur-ui: 200ms; --dur-page: 520ms; --dur-story: 900ms; --dur-stagger: 60ms.

## Components
- Buttons: primary (t-accent bg), secondary (outline), text; min-height 48px; border-radius 999px.
- Input: 48px tall, 2px border, focus ring 3px offset 3px.
- Card: t-paper or t-deep, 2px radius, no shadow.
- Sample tag: inline pill, DM Mono 0.75rem, uppercase, border.
- Frame: aspect-ratio container + grade filter; object-position set per slot.
- Header: --header-h 64px; transparent on hero, t-paper on scroll.
- Mobile bar: sticky bottom, t-deep, call + quote buttons, hides on scroll-down and when #contact visible.
- Signature primitive: `.contour-bg` (SVG pattern tile 200×200, stroke #8C3B2E @ 12% opacity); `.elev-marker` (pill with DM Mono number + Young Serif label, 2px border); `.benchmark` (inline ▲ 0.6em, accent color). Drawn once here, reused everywhere.

## Photo grade
Filter: saturate(.9) contrast(1.08) sepia(.06) brightness(.98). Warm-cool balance for high-altitude light. No overlay on hero map tiles; duotone multiply #8C3B2E @ 18% on story photos only.

## Focus
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }
forced-colors: active { button border 2px solid ButtonText; .elev-marker border forced }