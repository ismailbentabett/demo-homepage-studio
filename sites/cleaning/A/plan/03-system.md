# Design System — cleaning-A

## Fonts
- Display: Outfit (weights 400, 600, 700). Preload 600. Variable wght axis.
- Text: Karla (weights 400, 500, 700). Variable wght axis.
- Accent: DM Mono (weights 400, 500). Used for timestamps, checklist items, prices, sample tags.

## Type scale
Ratio 1.2 mobile → 1.333 desktop.
- `--fs--1`: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem)
- `--fs-0`: clamp(1rem, 0.95rem + 0.25vw, 1.125rem) (body base 18px)
- `--fs-1`: clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem)
- `--fs-2`: clamp(1.44rem, 1.25rem + 0.95vw, 2rem)
- `--fs-3`: clamp(1.73rem, 1.4rem + 1.65vw, 2.67rem)
- `--fs-4`: clamp(2.07rem, 1.6rem + 2.35vw, 3.55rem)
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem) (Outfit is medium-width; cap at 5rem)
Display tracking: -0.03em. Line-height: 0.92 for h1, 1.0 for h2-h3.
Body line-height: 1.5. Measure: 65ch max.
Lead paragraph: --fs-1, weight 500, opsz if available.

## Space
- `--s-1`: 4px, `--s-2`: 8px, `--s-3`: 12px, `--s-4`: 16px, `--s-5`: 24px, `--s-6`: 32px, `--s-7`: 48px, `--s-8`: 64px, `--s-9`: 96px
Section padding Y: tight 64px, normal 96px, loose 128px.
Blueprint alternates: hero (tight), process (normal), tools (loose), proof (normal), footer (tight).

## Grid
12 columns desktop, 8 tablet, 4 mobile. Gutter 24px desktop, 16px mobile. Max-width 1280px.
Timeline rail uses a 1-column margin on left (desktop) or top (mobile).

## Tones
Each sets --bg, --ink, --muted, --rule, --accent, --focus, button colors.
- `t-paper`: bg #f7f5f0, ink #1a2b3c, muted #5a6a7a, rule #d6d2c8, accent #5a7a5e, focus #1a2b3c. Body text 12.8:1.
- `t-light`: bg #ffffff, ink #1a2b3c, muted #5a6a7a, rule #e0ddd6, accent #5a7a5e, focus #1a2b3c.
- `t-mid`: bg #d6d2c8, ink #1a2b3c, muted #3a4a5a, rule #b0aca2, accent #1e2d24, focus #1a2b3c.
- `t-deep`: bg #1e2d24, ink #f7f5f0, muted #a0b0a8, rule #3a4a40, accent #c4883a, focus #c4883a. Paper on deep 13.2:1. Signal on deep 4.6:1.
- `t-accent`: bg #5a7a5e, ink #f7f5f0, muted #d0e0d4, rule #7a9a7e, accent #c4883a, focus #f7f5f0. Paper on accent 4.8:1.

## Radius & Shadow
Radius: 3px everywhere (cards, buttons, inputs). No pills except sample tags (999px).
Shadow: only on sticky mobile bar and popovers. `--shadow-float: 0 4px 12px rgba(26,43,60,0.12)`.

## Motion tokens
- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-io: cubic-bezier(.77,0,.175,1)`
- press: 120ms, ui: 200ms, page: 520ms, story: 900ms, stagger: 60ms.

## Components
- Buttons: primary (signal bg, paper text), secondary (ink border, ink text), text (ink, underline). Min-height 48px. Padding 12px 24px.
- Input: 48px tall, 3px radius, 2px border #d6d2c8, focus outline 3px solid var(--focus) offset 3px.
- Card: 3px radius, 1px border var(--rule), padding var(--s-5).
- Sample tag: 999px radius, DM Mono 0.75rem, uppercase, bg var(--rule), ink text, padding 2px 8px.
- Frame: aspect-ratio per slot, overflow hidden, grade filter applied.
- Header: --header-h: 64px. Logo left, nav center, call right.
- Mobile bar: sticky bottom, two buttons (call + quote), shadow-float, hides when #contact visible.
- Tick primitive: `.tick-line` SVG path, stroke var(--accent), stroke-width 2, stroke-dasharray/dashoffset driven by --sw-p. Reused via `<use href="#tick">`.

## Photo grade
All photos: `filter: saturate(0.85) contrast(1.05) sepia(0.08) brightness(1.02)`. Warm, calm, consistent with pollen sage palette.
No overlay except hero clipboard which has a subtle paper texture multiply.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`.
Forced-colors: buttons keep 2px border, links get underline.