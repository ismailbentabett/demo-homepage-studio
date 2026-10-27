# Design System — landscaper-B (Half Inch Landscape Co.)

## Fonts
- **Display:** Space Grotesk, variable wght 300–700. Preload `assets/fonts/space-grotesk/space-grotesk-300-700-normal.woff2`. Tracking -0.03em, line-height 0.95. Used for h1–h3, zone tags, controller labels.
- **Text:** Albert Sans, variable wght 100–900. Body 400, lead 450, bold 600. Line-height 1.5. Measure 60–68ch.
- **Accent:** DM Mono, weights 300/400/500. Used for all numbers, units, zone readouts, prices, hours, phone. `font-variant-numeric: tabular-nums`. Never body text.

## Type Scale
```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12–13px, mono labels */
--fs-0:  clamp(0.875rem, 0.82rem + 0.28vw, 0.9375rem);  /* 14–15px, small body */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.125rem);         /* 16–18px, body */
--fs-2:  clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);        /* 20–24px, h3 */
--fs-3:  clamp(1.75rem, 1.4rem + 1.75vw, 2.5rem);        /* 28–40px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 4.75rem); /* h1, Space Grotesk wide */
```
Lead paragraph: `var(--fs-1)` weight 450. Headings `text-wrap: balance`; body `text-wrap: pretty`. Nothing under 13px.

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px;
```
Section padding: tight `var(--s-7)` (48px), normal `var(--s-9)` (96px), loose `128px`. Blueprint alternates.

## Grid
- 12 columns desktop, 8 tablet, 4 mobile. Gutter `var(--s-4)` (16px). Max-width 1280px.
- Margin column for zone tags on desktop: col 1 reserved for `.zone-rule` tag at ≥900px.

## Tones
Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Class | bg | ink | muted | rule | accent | focus | Contrast (body) |
|---|---|---|---|---|---|---|---|
| t-light | #F4F1EB | #1A2B24 | #4A5D54 | #B8C4BE | #2E5A52 | #2E5A52 | 12.8:1 ✓ |
| t-paper | #FFFFFF | #1A2B24 | #4A5D54 | #D4DDD8 | #2E5A52 | #2E5A52 | 14.1:1 ✓ |
| t-mid   | #B8C4BE | #0F1C18 | #2E3D36 | #8A9A92 | #0F1C18 | #0F1C18 | 8.9:1 ✓ |
| t-deep  | #0F1C18 | #F4F1EB | #B8C4BE | #2E5A52 | #C46D3B | #C46D3B | 15.2:1 ✓ |
| t-accent| #2E5A52 | #F4F1EB | #B8C4BE | #F4F1EB | #F4F1EB | #F4F1EB | 6.4:1 ✓ |

Signal #C46D3B on paper fails 4.5:1 (3.8:1) → shapes/rules only on light backgrounds, never body text.

## Radius & Rules
- Radius: 2px everywhere (cards, buttons, inputs, frames). Pills only for zone-tag boxes (border-radius: 2px).
- Rules: 1.5px solid var(--rule). Zone rules use this weight. No shadows except mobile bar and popover.

## Motion Tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io:  cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui:    200ms;
--dur-page:  520ms;
--dur-story: 900ms;
--stagger:   60ms;
```

## Components
- **Buttons:** primary (accent bg, white text), secondary (outline accent), text (accent underline). Min-height 48px. Press `scale(.97)` 120ms.
- **Inputs:** 48px tall, 2px border var(--rule), focus outline 3px solid var(--focus) offset 3px.
- **Card:** 2px border var(--rule), padding var(--s-5), no shadow.
- **Sample tag:** inline pill, uppercase tracking .06em, fs--1, border 1px currentColor.
- **Frame:** aspect-ratio container with photo grade filter.
- **Header:** height token `--header-h: 72px`. Sticky above 900px.
- **Mobile bar:** sticky bottom <900px, hides on scroll-down and over #contact. Shadow only here.
- **Zone rule primitive (.zone-rule):** 1.5px horizontal line, left-aligned tag box (mono, fs--1, uppercase, padded), right-aligned mono readout. Reused in hero, services, reviews, footer. This is the `data-sw-signature` CSS hook.

## Photo Grade
One filter for every photo and video poster:
```css
filter: saturate(.8) contrast(1.08) sepia(.04) hue-rotate(-2deg);
```
Cool-leaning for limestone/juniper palette. Tuned from base: dropped sepia from .08 to .04, added slight cool shift.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .zone-rule { forced-color-adjust: none; }
}
```
Focus ring passes 3:1 on every tone (verified above).