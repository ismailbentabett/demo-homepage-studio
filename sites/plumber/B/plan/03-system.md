# Design System — plumber-B (Ledgerline Plumbing)

## Fonts
- **Display:** IBM Plex Mono (variable wght 100–900). Preload `assets/fonts/ibm-plex-mono/ibm-plex-mono-100-900-normal.woff2`. Used for h1, entry numbers, status stamps, measurements, kicker. Variable axis: `wght` only.
- **Text:** Outfit (variable wght 100–800). Body, lead paragraph, buttons, form labels. Variable axis: `wght` only.
- **Accent:** null (mono carries all data/label roles; no third family).

## Type scale
Ratio 1.2 mobile → 1.333 desktop. Fluid clamp values:
- `--fs--1`: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem) /* 12–14px, captions */
- `--fs-0`: clamp(0.875rem, 0.8rem + 0.35vw, 1rem) /* 14–16px, meta */
- `--fs-1`: clamp(1rem, 0.9rem + 0.5vw, 1.2rem) /* 16–19px, body */
- `--fs-2`: clamp(1.2rem, 1rem + 0.8vw, 1.5rem) /* 19–24px, lead */
- `--fs-3`: clamp(1.5rem, 1.2rem + 1.2vw, 2rem) /* 24–32px, h3 */
- `--fs-4`: clamp(2rem, 1.5rem + 1.8vw, 2.75rem) /* 32–44px, h2 */
- `--fs-h1`: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem) /* h1, tuned for IBM Plex Mono width */

Display tracking: -0.03em on h1/h2, -0.02em on mono numerals. Line-height: 0.92 for display, 1.5 for body. Measure: 65ch max for body paragraphs. Nothing under 13px (--fs--1 floor is 12px but only for non-critical captions; body starts at --fs-1 = 16px minimum). Tabular nums: `font-variant-numeric: tabular-nums` on all mono elements, prices, hours, phone.

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

Section padding (vertical): tight 64px (--s-8), normal 96px (--s-9), loose 128px (clamp(8rem, 6rem + 5vw, 10rem)). Blueprint alternates tight/normal/loose to create rhythm. Horizontal section padding: var(--s-5) mobile, var(--s-7) desktop.

## Grid
- Columns: 12 desktop, 8 tablet, 4 mobile.
- Gutter: 24px (--s-5).
- Max content width: 1280px.
- Margin column: 1fr on each side at ≥1100px for the foot-counter and ledger rule extensions; collapses to 0 below 1100px.

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`.

### t-deep
- --bg: #1A1D21
- --ink: #E8E6E1
- --muted: #9A9890
- --rule: #6B8A96
- --accent: #6B8A96
- --focus: #6B8A96
- --btn-bg: #D96A38
- --btn-ink: #1A1D21
- Contrast: ink/bg 13.56:1 ✓, accent/bg 4.59:1 ✓, btn-ink/btn-bg 4.88:1 ✓, focus/bg 4.59:1 ✓

### t-paper
- --bg: #F4F2ED
- --ink: #1A1D21
- --muted: #5A5850
- --rule: #6B8A96
- --accent: #4A6670
- --focus: #4A6670
- --btn-bg: #1A1D21
- --btn-ink: #F4F2ED
- Contrast: ink/bg 15.11:1 ✓, accent/bg 5.47:1 ✓, btn-ink/btn-bg 15.11:1 ✓, focus/bg 5.47:1 ✓

### t-mid
- --bg: #2E3338
- --ink: #E8E6E1
- --muted: #9A9890
- --rule: #6B8A96
- --accent: #6B8A96
- --focus: #6B8A96
- --btn-bg: #D96A38
- --btn-ink: #1A1D21
- Contrast: ink/bg 10.22:1 ✓, accent/bg 3.46:1 (large text/focus only) ✓, btn-ink/btn-bg 4.88:1 ✓

### t-accent (steel-blue band)
- --bg: #6B8A96
- --ink: #1A1D21
- --muted: #2E3338
- --rule: #1A1D21
- --accent: #1A1D21
- --focus: #1A1D21
- --btn-bg: #1A1D21
- --btn-ink: #F4F2ED
- Contrast: ink/bg 4.59:1 ✓, btn-ink/btn-bg 15.11:1 ✓

## Radius
0 everywhere except pills (status stamps, tags) which use 999px. No mixed radii. Rules are 1.5px solid throughout.

## Shadow
Only on floating elements: sticky mobile bar (`box-shadow: 0 -2px 12px rgba(0,0,0,.15)`), popover. No shadows on cards or sections.

## Motion tokens
- `--ease-out`: cubic-bezier(.23,1,.32,1)
- `--ease-io`: cubic-bezier(.77,0,.175,1)
- `--dur-press`: 120ms
- `--dur-ui`: 200ms
- `--dur-page`: 520ms
- `--dur-story`: 900ms
- `--stagger`: 60ms

## Components
- **Buttons:** primary (bg signal, ink deep), secondary (border ink, transparent bg), text (no border, underline on hover). Min height 48px. Padding-inline 24px. Font: Outfit 600, --fs-1.
- **Input:** border 1.5px --rule, bg --bg, ink --ink, focus outline 3px --focus offset 3px. Height 48px. Font: Outfit 400, --fs-1.
- **Card:** no shadow, border-top 1.5px --rule, padding var(--s-6) var(--s-5). Background inherits tone.
- **Sample tag:** inline pill, 999px radius, bg --muted at 20% opacity, font IBM Plex Mono --fs--1, uppercase tracked .04em.
- **Frame:** aspect-ratio container with overflow clip; photo grade applied inside.
- **Header:** height token --header-h: 64px mobile, 72px desktop. Logo left, nav center (desktop), phone + CTA right. Background t-deep.
- **Mobile bar:** fixed bottom, height 64px, t-deep bg, two buttons (Call + Price it), hides on scroll-down and over #contact.
- **Signature primitive:** `.ledger-rule` is a 1.5px steel-blue line with 6px end ticks drawn via ::before/::after. `.ledger-entry` is a CSS grid row with columns: [no] 4ch [reading] 1fr [status] auto [action] auto. `.status-stamp` is a pill in mono, signal color for FIX, muted for OK/WATCH. All driven by `data-sw-signature`.

## Photo grade
One filter for every photo and video poster:
`filter: saturate(.8) contrast(1.1) sepia(.05) hue-rotate(-4deg);`
Cool-toned to match the iron/steel palette. Applied via `.frame img, .frame video` selector. Object-position set per photo in plan/05-media.md.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }` on all interactive elements. Forced-colors:
```css
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
  .ledger-rule { border-top: 2px solid CanvasText; }
}
```