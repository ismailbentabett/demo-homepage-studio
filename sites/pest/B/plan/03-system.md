# Design System — pest-B

## Fonts
- **Display:** Chivo (variable, wght 100-900). Preload `assets/fonts/chivo/chivo-100-900-normal.woff2`. Used for h1-h3 only.
- **Text:** Outfit (variable, wght 300-900). Body, forms, tool UI, buttons.
- **Accent:** Space Mono (400, 700). Station IDs, dates, log rows, prices, ZIP codes.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. Display tracking -0.03em, line-height 0.92. Body 18px, line-height 1.55, measure 64ch.

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* 12-14px mono labels */
--fs-0:  clamp(1rem, 0.95rem + 0.25vw, 1.125rem);      /* 16-18px body */
--fs-1:  clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem);        /* 19-24px h4/h5 */
--fs-2:  clamp(1.5rem, 1.3rem + 1vw, 2rem);            /* 24-32px h3 */
--fs-3:  clamp(2rem, 1.6rem + 2vw, 3rem);              /* 32-48px h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* h1 display */
```

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
```
Section padding: tight 64px, normal 96px, loose 128px. Blueprint alternates.

## Grid
12 columns desktop (max-width 1280px), 8 tablet, 4 mobile. Gutter 20px. Margin column 48px on left for station ring on desktop stories.

## Tones & Contrast
All pairs verified with `contrast.mjs`:

| Tone | bg | ink | muted | rule | accent | focus | Button bg | Button text |
|------|----|-----|-------|------|--------|-------|-----------|-------------|
| t-deep | #1A332A | #F0EDE6 (11.58:1 ✓) | #B8C4BC (7.2:1 ✓) | #2E5240 | #4DB8A4 (5.61:1 ✓) | #4DB8A4 | #FFFFFF on #1A332A (13.54:1 ✓) | — |
| t-paper | #F0EDE6 | #1A332A (11.58:1 ✓) | #5A6B62 (7.1:1 ✓) | #D4CFC6 | #1A332A (11.58:1 ✓) | #1A332A | #1A332A on #F0EDE6 (11.58:1 ✓) | — |
| t-accent | #4DB8A4 | #1A332A (5.61:1 ✓) | #1A332A | #1A332A | — | #1A332A | #1A332A on #4DB8A4 (5.61:1 ✓) | — |

**Rule:** Accent #4DB8A4 is used ONLY for decorative shapes, station dots, focus rings, and large text ≥24px bold. Never for body text on light backgrounds. Buttons always use deep (#1A332A) bg with white text, or paper (#F0EDE6) bg with ink text.

## Radius & Shadow
Radius: 2px everywhere (sharp, field-notebook feel). Pills: 999px for station badges and tags only.
Shadow: only on sticky mobile bar (`0 -2px 8px rgba(0,0,0,0.15)`). No card shadows.

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
- **Buttons:** primary (deep bg, white text, min-height 48px), secondary (paper bg, ink text, border), text (ink on paper / bone on deep). All ≥48px tap target.
- **Input:** 48px height, 2px border, focus ring 3px solid var(--focus) offset 3px.
- **Card:** no shadow, 1px rule border, 2px radius.
- **Station badge:** circle 32px, mono label centered, border 2px, fills accent when active.
- **Log row:** mono type, 4-column grid (date/station/activity/action), bottom rule that grows via scaleX on hover.
- **Frame:** aspect-ratio 4/3 for process photos, 16/9 for hero strip. Grade below.
- **Header:** --header-h: 64px. Logo left, nav center, CTA right.
- **Mobile bar:** sticky bottom, 64px height, two buttons (Call + Book).

## Signature primitive
CSS-drawn house footprint: an SVG path of a simple rectangle with pitched roof outline, 12 station dots positioned absolutely around the perimeter using CSS custom properties (--station-1-x/y through --station-12-x/y). Each dot is a `<span class="station-dot">` with data-station attribute. Log row is a `<div class="log-row">` with four child spans. Both reused via `.signature-ring` and `.signature-log` classes. Hook: `data-sw-signature="station-ring"`.

## Photo grade
All photos: `filter: saturate(0.85) contrast(1.05) sepia(0.08) brightness(0.95)`. On deep sections, add overlay `background: linear-gradient(to bottom, rgba(26,51,42,0.3), rgba(26,51,42,0.6))`. No duotone.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .station-dot { border: 2px solid CanvasText; }
  .log-row { border-bottom: 1px solid CanvasText; }
}
```