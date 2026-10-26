# Design System — autotuneup-C (Thin Air Tune-Up)

## Fonts
- **Display:** Space Mono (mono). Weights 400, 700. Preload `assets/fonts/space-mono/space-mono-400-normal.woff2`. Used for altitude markers, readings, labels, hero statement. Variable axes: none (static weights).
- **Text:** Outfit (grotesk). Variable wght 100–900. Preload `assets/fonts/outfit/outfit-100-900-normal.woff2`. Used for headlines, body, buttons. Variable axis: wght.
- **Accent:** none (Space Mono serves as data/accent face).

## Type scale
Ratio 1.2 mobile → 1.333 desktop. Body 18px, line-height 1.55, measure 64ch max.

| Token | Value | Usage |
|-------|-------|-------|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)` | captions, mono labels |
| `--fs-0` | `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)` | body |
| `--fs-1` | `clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem)` | h3, card titles |
| `--fs-2` | `clamp(1.44rem, 1.25rem + 0.95vw, 2rem)` | h2 |
| `--fs-3` | `clamp(1.728rem, 1.4rem + 1.64vw, 2.66rem)` | h1 sub |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem)` | hero statement |

Display tracking: -0.03em on h1, -0.02em on h2/h3. Line-height: h1 0.92, h2 0.96, body 1.55. Nothing under 13px (0.722rem at --fs--1 floor is 13.8px).

## Space
`--s-1: 4px`, `--s-2: 8px`, `--s-3: 12px`, `--s-4: 16px`, `--s-5: 24px`, `--s-6: 32px`, `--s-7: 48px`, `--s-8: 64px`, `--s-9: 96px`.

Section padding: tight 64px (--s-8), normal 96px (--s-9), loose 128px (calc(--s-9 + --s-6)). Blueprint alternates tight/normal/loose.

## Grid
12 columns desktop, 8 tablet, 4 mobile. Gutter 24px (--s-5). Max-width 1280px. Left margin column 80px on desktop for altitude rail (sticky); collapses to inline pill on mobile.

## Tones

### t-deep (hero, story bands)
- `--bg: #121826` (paper)
- `--ink: #e8e4dc` (ink)
- `--muted: #a8a49c`
- `--rule: #2a3344` (mid)
- `--accent: #3bb9a6`
- `--focus: #3bb9a6`
- Button: bg `#3bb9a6`, ink `#0b1120` (deep). Contrast: 7.77:1 pass AA+AAA.
- Body text contrast: 13.98:1 pass.

### t-paper (tools, proof)
- `--bg: #0b1120` (deep)
- `--ink: #e8e4dc`
- `--muted: #a8a49c`
- `--rule: #2a3344`
- `--accent: #3bb9a6`
- `--focus: #3bb9a6`
- Button: same as t-deep.
- Body text contrast: ink on deep = 15.22:1 pass.

### t-accent (CTA band, season check output)
- `--bg: #3bb9a6`
- `--ink: #0b1120`
- `--muted: #1a3a36`
- `--rule: #2a8f80`
- `--accent: #d4880f` (signal)
- `--focus: #0b1120`
- Button: bg `#0b1120`, ink `#e8e4dc`. Contrast: 15.22:1 pass.
- Body text contrast: ink on accent = 7.77:1 pass.

### t-light (footer reset)
- `--bg: #e8e4dc`
- `--ink: #0b1120`
- `--muted: #4a4840`
- `--rule: #c8c4bc`
- `--accent: #2a8f80` (darkened accent for light bg)
- `--focus: #0b1120`
- Button: bg `#0b1120`, ink `#e8e4dc`.
- Body text contrast: 15.22:1 pass.

## Radius
0 everywhere except pills: `border-radius: 999px` on buttons, tags, altitude marker pills. No rounded cards.

## Shadow
Only on sticky mobile bar and popover: `0 4px 12px rgba(0,0,0,0.3)`. No card shadows.

## Motion tokens
- `--ease-out: cubic-bezier(.23,1,.32,1)`
- `--ease-io: cubic-bezier(.77,0,.175,1)`
- `--dur-press: 120ms`
- `--dur-ui: 200ms`
- `--dur-page: 520ms`
- `--dur-story: 900ms`
- `--stagger: 60ms`

## Components
- **Primary button:** min-height 48px, padding 12px 24px, bg var(--accent), ink var(--buttonInk), radius 999px, font-weight 600. Hover: scaleX hairline grows from left.
- **Secondary button:** outline 2px solid var(--accent), transparent bg, ink var(--accent). Same height.
- **Text button:** no border, underline on hover via scaleX.
- **Input:** bg transparent, border-bottom 2px solid var(--rule), focus border-color var(--accent). Min-height 48px.
- **Card:** border-left 3px solid var(--rule), padding var(--s-5), no shadow, no radius.
- **Sample tag:** mono font, uppercase, font-size var(--fs--1), letter-spacing 0.08em, color var(--signal), prefix "Sample · ".
- **Frame:** aspect-ratio 16/9 for hero photo, 4/3 for story photos. Grade filter below.
- **Header:** height token `--header-h: 64px`. Logo left, phone right, book button center-right on desktop. Sticky on scroll.
- **Mobile bar:** fixed bottom, height 64px, primary button full-width, phone icon left. Shadow above.
- **Altitude marker primitive:** monospaced text, vertical rail on desktop (position sticky, left 0, width 80px), inline pill on mobile (display inline-block, padding 4px 12px, bg var(--rule), radius 999px). Hook: `data-sw-signature="altitude-marker"`.

## Photo grade
All photos: `filter: saturate(0.8) contrast(1.1) sepia(0.12) brightness(0.95)`. Warm desert tone that unifies adobe, dust, and night sky. No overlay on hero; optional multiply overlay `rgba(18,24,38,0.3)` on story photos for text legibility.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`. Forced-colors: `outline: 3px solid CanvasText; outline-offset: 3px;`. All interactive elements have visible focus.