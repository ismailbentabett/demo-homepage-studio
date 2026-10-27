# Design System — general-B (Open Ledger Builders)

## Fonts
- **Display:** Space Grotesk, variable wght 300–700. Preload `assets/fonts/space-grotesk/space-grotesk-300-700-normal.woff2`.
- **Text:** Karla, variable wght 200–800.
- **Accent:** DM Mono, weights 300/400/500 normal + italic. For percent column, ledger line numbers, sample tags.
- Variable axes in use: Space Grotesk `wght`; Karla `wght`. No `opsz` or `wdth` on these faces.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. Fluid clamp values:
- `--fs--1`: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem) /* 12–14px, captions, sample tags */
- `--fs-0`: clamp(0.875rem, 0.8rem + 0.35vw, 1rem) /* 14–16px, meta, proof line */
- `--fs-1`: clamp(1rem, 0.9rem + 0.5vw, 1.125rem) /* 16–18px, body, lead paragraph */
- `--fs-2`: clamp(1.125rem, 1rem + 0.6vw, 1.375rem) /* 18–22px, h3, card titles */
- `--fs-3`: clamp(1.375rem, 1.1rem + 1.2vw, 2rem) /* 22–32px, h2 */
- `--fs-4`: clamp(1.75rem, 1.3rem + 2vw, 2.75rem) /* 28–44px, h1 subheads */
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem) /* h1, tuned for Space Grotesk width */

Display tracking: -0.03em on h1/h2, -0.02em on h3. Line-height 0.92 for display, 1.5 for body.
Body: 17px equivalent (--fs-1), measure 60–68ch. Lead paragraph: font-weight 500, font-size var(--fs-1).
Nothing under 13px (--fs--1 floor is 12px but only for non-critical labels; body text never below 14px).
Tabular nums: `font-variant-numeric: tabular-nums` on all prices, hours, phone, percent column, counters.

## Space
- `--s-1`: 4px
- `--s-2`: 8px
- `--s-3`: 12px
- `--s-4`: 16px
- `--s-5`: 24px
- `--s-6`: 32px
- `--s-7`: 48px
- `--s-8`: 64px
- `--s-9`: 96px

Section padding (vertical):
- Tight: 64px (--s-8) — used for compact sections (proof strip, ZIP checker)
- Normal: 96px (--s-9) — default for most sections
- Loose: 128px (calc(--s-9 + --s-6)) — hero, story, footer

Horizontal page margin: clamp(--s-5, 4vw, --s-8). Max content width: 1320px.

## Grid
- Desktop (≥1100px): 12 columns, gutter 24px, max-width 1320px centered.
- Tablet (640–1099px): 8 columns, gutter 20px.
- Mobile (<640px): 4 columns, gutter 16px.
- Margin column for running total: col 12 on desktop (width: 1fr of 12), becomes a top bar on mobile.
- Ledger row layout: content spans cols 1–10, percent column sits in col 11–12 with a left rule.

## Tones
Each tone sets --bg, --ink, --muted, --rule, --accent, --focus, --btn-bg, --btn-ink.

### t-light (hero left half, services, tools)
- --bg: #F6F3ED (paper)
- --ink: #1A2332 (ink)
- --muted: #5A6170
- --rule: #C8C2B6
- --accent: #B8432F
- --focus: #B8432F
- --btn-bg: #B8432F
- --btn-ink: #FFFFFF
Contrast: ink/paper 13.8:1 ✓ | accent/paper 4.6:1 ✓ | btn-ink/btn-bg 4.6:1 ✓ | focus/paper 4.6:1 ✓

### t-paper (process story, reviews)
- --bg: #EDEAE3 (slightly darker cream)
- --ink: #1A2332
- --muted: #5A6170
- --rule: #C8C2B6
- --accent: #B8432F
- --focus: #B8432F
- --btn-bg: #1A2332
- --btn-ink: #F6F3ED
Contrast: ink/paper-dark 13.2:1 ✓ | accent/paper-dark 4.5:1 ✓ | btn-ink/btn-bg 13.2:1 ✓

### t-deep (budget split tool, CTA band)
- --bg: #0F1720
- --ink: #F6F3ED
- --muted: #A8A296
- --rule: #2E3A4A
- --accent: #D4654E (signal, large text only ≥3:1)
- --focus: #D4654E
- --btn-bg: #F6F3ED
- --btn-ink: #0F1720
Contrast: ink/deep 15.2:1 ✓ | signal/deep 4.2:1 (large text only) ✓ | btn-ink/btn-bg 15.2:1 ✓ | focus/deep 4.2:1 ✓

### t-accent (footer total line)
- --bg: #B8432F
- --ink: #FFFFFF
- --muted: rgba(255,255,255,0.7)
- --rule: rgba(255,255,255,0.3)
- --accent: #F6F3ED
- --focus: #FFFFFF
- --btn-bg: #FFFFFF
- --btn-ink: #B8432F
Contrast: ink/accent-bg 4.6:1 ✓ | btn-ink/btn-bg 4.6:1 ✓

## Radius
0 everywhere except buttons and inputs which use 2px. Sample tags: 2px. No pills. Consistent sharp-but-not-knife-edge feel matching the ledger aesthetic.

## Rules
Weight: 1px solid var(--rule) for section dividers and ledger lines. 2px solid var(--ink) for the footer total line and hero ledger header. Never mixed weights.

## Shadow
Only on the sticky mobile bar: `0 -2px 12px rgba(15,23,32,0.12)`. No shadows on cards, buttons, or popovers. The ledger aesthetic is flat and ruled.

## Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- Press: 120ms
- UI: 200ms
- Page: 520ms
- Story: 900ms
- Stagger: 60ms

## Components
- **Primary button:** min-height 48px, padding 0 32px, bg var(--btn-bg), color var(--btn-ink), radius 2px, font-weight 600, letter-spacing 0.01em. Hover: hairline underline grows from left (scaleX 0→1, 200ms). Active: scale(.97), 120ms.
- **Secondary button:** same dimensions, border 1px solid var(--ink), transparent bg, ink color. Hover: bg var(--ink), color var(--bg).
- **Text button:** no border, no bg, underline on hover via scaleX. Min tap target 48px via padding-block 12px.
- **Input:** height 48px, border 1px solid var(--rule), radius 2px, padding 0 16px, bg var(--bg), ink color. Focus: 3px solid var(--focus), offset 3px.
- **Card:** border-top 1px solid var(--rule), padding var(--s-6) 0, no bg, no shadow. Ledger row cards have the percent column on the right.
- **Sample tag:** display inline-block, font-family DM Mono, font-size var(--fs--1), padding 2px 8px, border 1px solid var(--rule), radius 2px, color var(--muted), letter-spacing 0.04em, text-transform uppercase.
- **Frame:** aspect-ratio 3/2 by default, overflow hidden, img fills with object-fit cover. Grade applied via CSS filter on img.
- **Header:** height token --header-h: 64px. Logo left, nav center, phone + Price it right. Background paper, bottom rule 1px. Scrolled state adds shadow.
- **Mobile bar:** fixed bottom, height 64px, two equal buttons (Call + Price it), visible <900px, hides on scroll-down and when #contact is in view.
- **Ledger line (signature primitive):** a horizontal rule spanning the content width with a vertical tick at the right edge where the percent column begins. Drawn once as `.ledger-rule { border-top: 1px solid var(--rule); position: relative; }` with `.ledger-rule::after { content: ''; position: absolute; right: 0; top: -4px; width: 1px; height: 9px; background: var(--rule); }`. Reused in every section.
- **Percent column:** fixed-width right column (col 11–12 on desktop), DM Mono, tabular-nums, right-aligned. Shows "XX%" for that section's budget share. Driven by `data-ledger-pct="18"` attribute.
- **Running total bar:** thin bar at viewport top (height 3px, bg var(--accent)), width driven by CSS var `--ledger-total` (0→100%). Only visible when scrolled past hero.

## Photo grade
One filter for every photo: `filter: saturate(.82) contrast(1.06) sepia(.06) brightness(1.02)`. Tuned to warm ledger cream palette — slightly desaturated, gentle contrast lift, faint warmth. Applied to every `img` and video poster via `img, video[poster] { filter: ... }`.
No overlay or duotone. The grade alone unifies stock into one shoot.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }` on all interactive elements.
Forced colors:
```css
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
  .ledger-rule { border-color: CanvasText; }
  .sample-tag { border-color: CanvasText; }
}
```