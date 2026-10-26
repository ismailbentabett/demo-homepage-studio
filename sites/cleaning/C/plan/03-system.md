# Design System — cleaning-C

## Fonts

- **Display:** Fraunces, variable wght 300–800, opsz 9–144. Preload `assets/fonts/fraunces/fraunces-300-800-normal.woff2`. Used for h1–h3, masthead, almanac titles. Tracking -0.03em, line-height 0.95.
- **Text:** Source Sans 3, variable wght 200–900. Body, lists, form labels. Line-height 1.5, measure 65ch.
- **Accent:** DM Mono, static 300/400/500. Datelines, season tags, sample-price figures, dial labels. Tracking 0.02em.

## Type scale

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* mono captions */
--fs-0:  clamp(0.9375rem, 0.875rem + 0.3vw, 1.0625rem); /* body */
--fs-1:  clamp(1.125rem, 1rem + 0.5vw, 1.375rem);       /* lead / h4 */
--fs-2:  clamp(1.375rem, 1.125rem + 1vw, 1.875rem);     /* h3 */
--fs-3:  clamp(1.75rem, 1.25rem + 2vw, 2.75rem);        /* h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);/* h1 — Fraunces wide */
```

Body: 17px equivalent (`--fs-0`), line-height 1.5, measure 65ch max. Nothing under 13px.

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px;
```

Section padding: tight `var(--s-8)` (64px), normal `var(--s-9)` (96px), loose `128px`. Blueprint alternates.

## Grid

12-column, gutter 24px, max-width 1280px. Margin column for season dial on desktop (col 12). Mobile: 4-column, gutter 16px.

## Tones

Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Token | bg | ink | muted | rule | accent | focus | Verified pairs |
|-------|----|-----|-------|------|--------|-------|----------------|
| t-light | #FFFFFF | #1E2420 | #3A4440 | #B8945F | #9E4428 | #B8945F | ink/bg 15.2:1 ✓ |
| t-paper | #F3EFE6 | #1E2420 | #3A4440 | #B8945F | #9E4428 | #B8945F | ink/bg 13.77:1 ✓ |
| t-mid | #3A4440 | #F3EFE6 | #B8945F | #F3EFE6 | #F3EFE6 | #B8945F | ink/bg 8.2:1 ✓ |
| t-deep | #141916 | #F3EFE6 | #B8945F | #3A4440 | #B8945F | #B8945F | ink/bg 15.5:1 ✓, accent/bg 6.3:1 ✓ |
| t-accent | #B8945F | #1E2420 | #3A4440 | #1E2420 | #141916 | #1E2420 | ink/bg 5.6:1 ✓ |

Signal #9E4428 used only for large text (≥ 24px) or non-text markers.

## Radius & Shadow

Radius: 0 everywhere except buttons (3px) and pills (999px). Shadow: only on mobile sticky bar (`0 -2px 12px rgba(0,0,0,.15)`).

## Motion tokens

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

- **Buttons:** primary (bg #9E4428, ink #F3EFE6, ≥ 48px), secondary (border #B8945F, ink #1E2420), text (ink + underline). All ≥ 48px tall.
- **Input:** border #3A4440, focus ring 3px solid var(--focus) offset 3px.
- **Card:** paper bg, 1px brass rule top, no shadow.
- **Tag:** mono font, brass border, "Sample" label.
- **Frame:** aspect-ratio container + shared grade filter.
- **Header:** height `--header-h: 64px`, transparent over hero, solid on scroll.
- **Mobile bar:** sticky bottom, tel + book button, shadow.
- **Signature primitive:** `.season-dial` — SVG circle with four path segments, active segment filled via `--sw-p` custom property.

## Photo grade

All photos: `filter: saturate(.8) contrast(1.05) sepia(.12) brightness(.95);` — warms toward cream, desaturates slightly for fog mood. Optional overlay on hero: linear-gradient(to bottom, rgba(20,25,22,.4), rgba(20,25,22,.1)).

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, input, select { border: 2px solid ButtonText; }
}
```