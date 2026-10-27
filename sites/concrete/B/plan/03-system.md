# Design System — concrete-B

## Fonts
- **Display:** Oswald (variable wght 200-700). Preload `assets/fonts/oswald/oswald-200-700-normal.woff2`. Used for h1 mask numerals, dimension callout values, section numbers. Tracking -0.03em. Line-height 0.9.
- **Text:** Outfit (variable wght 100-900). Body, labels, buttons. No preload. Line-height 1.5. Measure 65ch max.
- **Accent:** DM Mono (static 300/400/500). Spec codes, sample tags, rail totals, form field IDs. Tracking 0.02em. Line-height 1.4.

## Type Scale
```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* captions, mono labels */
--fs-0:  clamp(0.875rem, 0.8rem + 0.35vw, 1rem);       /* body small */
--fs-1:  clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* body, lead */
--fs-2:  clamp(1.125rem, 1rem + 0.6vw, 1.375rem);      /* h3, cards */
--fs-3:  clamp(1.375rem, 1.1rem + 1.2vw, 2rem);        /* h2 */
--fs-4:  clamp(2rem, 1.5rem + 2vw, 3rem);              /* h1 sub */
--fs-h1: clamp(3.5rem, min(12vw, 14svh) + 0.2rem, 7rem); /* hero mask numeral, condensed */
```
Headings: `text-wrap: balance`. Body: `text-wrap: pretty`. Numbers: `font-variant-numeric: tabular-nums`.

## Space
```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
--sec-y-tight: 72px; --sec-y-normal: 104px; --sec-y-loose: 144px;
--sec-x: var(--s-5);
```
Section padding alternates tight/normal/loose per blueprint rhythm.

## Grid
- Desktop ≥1100px: 12 columns, gutter 24px, max-width 1320px, margin column 1fr on right for spec rail.
- Tablet 640-1099px: 8 columns, gutter 20px.
- Mobile <640px: 4 columns, gutter 16px.
- Spec rail occupies margin column on desktop; bottom sheet on mobile.

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`.

### t-deep (charcoal basalt)
- bg: #1C1F23 | ink: #F2EDE4 (13.8:1) | muted: #9CA3AF (6.2:1) | rule: #3A3F47 | accent: #D4880F (5.2:1) | focus: #D4880F (5.2:1) | btn-bg: #D4880F | btn-ink: #FFFFFF (3.4:1 large OK)

### t-paper (bone white)
- bg: #F2EDE4 | ink: #1C1F23 (13.8:1) | muted: #6B7280 (4.6:1) | rule: #D6D0C4 | accent: #B8432F (5.0:1) | focus: #B8432F (5.0:1) | btn-bg: #B8432F | btn-ink: #FFFFFF (5.6:1)

### t-mid (warm gray band)
- bg: #E5E0D8 | ink: #1C1F23 (11.2:1) | muted: #6B7280 (4.1:1 → use #525A65 4.8:1) | rule: #C8C2B8 | accent: #B8432F (4.7:1) | focus: #B8432F | btn-bg: #1C1F23 | btn-ink: #F2EDE4

### t-accent (dawn amber band, used sparingly)
- bg: #D4880F | ink: #1C1F23 (5.2:1) | muted: #3A3F47 (3.1:1 large only) | rule: #B8720A | accent: #FFFFFF (3.4:1 large) | focus: #1C1F23 | btn-bg: #1C1F23 | btn-ink: #F2EDE4

## Radius & Rules
- Radius: 2px everywhere (cards, buttons, inputs, tags). Pills only for sample tags (999px).
- Rules: 1.5px solid var(--rule). Dimension lines: 2px with SVG arrowhead end-caps.
- Shadow: only on sticky mobile bar and popover (`0 4px 12px rgba(0,0,0,.15)`).

## Motion Tokens
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
- **Buttons:** primary (≥48px tall, bold), secondary (outline), text (inline with underline grow). All have :active scale(.97).
- **Inputs:** 48px tall, 1.5px border, focus ring 3px offset 3px.
- **Card:** 2px border, no shadow, padding var(--s-6).
- **Sample tag:** pill shape, DM Mono --fs--1, bg var(--accent), ink var(--btn-ink).
- **Dim-line primitive:** `.dim-line` — horizontal rule with left/right SVG arrowheads, centered value slot in Oswald. Width via inline style or CSS var. Reused as section divider and callout.
- **Frame:** aspect-ratio container with shared photo grade.
- **Header:** height token `--header-h: 72px`. Logo left, phone right. Sticky on scroll.
- **Mobile bar:** fixed bottom, 64px tall, phone + SMS buttons, visible ≤640px.
- **Spec rail:** right margin panel (desktop) / bottom sheet (mobile). Title "Your slab", live totals, "Price it" button. Hook: `data-sw-signature="spec-rail"`.

## Photo Grade
One filter for every photo:
```css
filter: saturate(.8) contrast(1.1) sepia(.12) brightness(.95);
```
Tuned for desert dawn warmth + basalt palette. Applied to every `img` and video poster via `.frame img, .hero__media`.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
}
```
Focus color passes ≥3:1 on every tone background.