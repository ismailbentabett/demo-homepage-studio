# Design System — general-A (Crosstie Building Co.)

## Fonts
- **Display:** Barlow Condensed, 700. Preload `assets/fonts/barlow-condensed/barlow-condensed-700-normal.woff2`. Tracking -0.03em, line-height 0.95.
- **Text:** Work Sans, variable 400–700. Line-height 1.5, measure 60–72ch.
- **Accent:** DM Mono, 400/500. For week numbers, phase labels, telegram quotes. Tabular figures via `font-variant-numeric: tabular-nums`.

## Type scale
```css
--fs--1: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);   /* 13–14px */
--fs-0:  clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* 16–18px body */
--fs-1:  clamp(1.125rem, 1rem + 0.625vw, 1.375rem);    /* 18–22px lead */
--fs-2:  clamp(1.375rem, 1.1rem + 1.2vw, 2rem);        /* 22–32px h3/h2 */
--fs-3:  clamp(1.75rem, 1.2rem + 2.5vw, 3rem);         /* 28–48px h2 */
--fs-h1: clamp(2.8rem, min(9vw, 9.5svh) + 0.1rem, 6rem); /* condensed face allows 6rem max */
```
Headings: `text-wrap: balance`, display tracking -0.03em, line-height 0.95.
Body: `text-wrap: pretty`, line-height 1.5, measure max 72ch. Nothing under 13px.

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```
Section padding: tight 64px (--s-8), normal 96px (--s-9), loose 128px (--s-10). Blueprint alternates.

## Grid
- Desktop ≥1100px: 12 columns, gutter 24px, max-width 1440px, margin column 1fr left for rails.
- Tablet 768–1099px: 8 columns, gutter 20px.
- Mobile <768px: 4 columns, gutter 16px.
- Track sections use a dedicated 2-column sub-grid: rail margin (48px desktop / 32px mobile) + content area.

## Tones and contrast
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Tone | bg | ink | muted | rule | accent | focus | Verified pairs |
|---|---|---|---|---|---|---|---|
| t-deep | #1b1915 | #f2efe8 | #a8a29e | #3d3832 | #d49a2a | #e8c96a | ink/bg 15.28:1 ✓, accent/bg 7.06:1 ✓, focus/bg 10.86:1 ✓ |
| t-paper | #2a2722 | #f2efe8 | #a8a29e | #3d3832 | #d49a2a | #e8c96a | ink/bg 12.95:1 ✓, accent/bg passes on deep (similar) |
| t-mid | #5c564c | #f2efe8 | #d4d0c8 | #7a7368 | #e8c96a | #e8c96a | ink/bg 6.32:1 ✓ AA, large text only for labels |
| t-accent | #d49a2a | #1b1915 | #2a2722 | #b8861f | #1b1915 | #1b1915 | ink/accent uses dark-on-amber (inverse); never white-on-amber |
| t-light | #f2efe8 | #1b1915 | #5c564c | #d4d0c8 | #d49a2a | #2a2722 | ink/bg 15.28:1 ✓ |

**Note:** chalk (#f2efe8) on work-light amber (#d49a2a) fails at 2.16:1. Amber never carries white text; only rules, stamps, today-line shapes, and dark text when used as background.

## Radius and shadow
- Radius: 2px everywhere (industrial precision). Buttons 2px, cards 2px, inputs 2px, sample tags 2px. No pills except the mobile bar CTA (999px).
- Shadow: only on floating elements (mobile bar, popover). `box-shadow: 0 4px 12px rgba(0,0,0,0.3)`.

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
- **Buttons:** primary (amber bg, dark ink), secondary (outlined chalk), text (chalk underline). Min-height 48px, padding-inline 24px, radius 2px. Press: `scale(.97)` 120ms.
- **Input:** bg #2a2722, border 1px #5c564c, focus outline 3px solid var(--focus) offset 3px. Height 48px.
- **Card:** bg inherits tone, border-left 3px solid var(--accent), padding var(--s-5), radius 2px.
- **Sample tag:** uppercase mono, font-size var(--fs--1), letter-spacing 0.05em, border 1px solid var(--muted), padding 2px 8px, radius 2px.
- **Frame:** aspect-ratio containers with photo grade filter. Ratio classes: `.frame-wide` 21/9, `.frame-landscape` 3/2, `.frame-portrait` 2/3.
- **Header:** height token `--header-h: 64px`. Logo left, nav center, call CTA right. Scrolled state adds bg opacity.
- **Mobile bar:** sticky bottom under 900px, hides on scroll-down and over #contact. Primary call + secondary price-it.
- **Signature primitive — crosstie:** horizontal bar with left-end week number (mono), center phase label (condensed caps), right report-card slot. Two CSS-drawn rails (2px lines, 48px apart) in left margin. Today-line: 3px amber rule positioned via `--today-y` custom property driven by ScrollTrigger.

## Photo grade
One filter for every photo and video poster:
```css
filter: saturate(.8) contrast(1.1) sepia(.12) brightness(.9);
```
Warm-tuned to creosote palette. Optional duotone overlay for break photo: multiply blend with #1b1915 at 30% opacity.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .card, input, .sample-tag { border: 1px solid ButtonText; }
}
```
Focus ring color #e8c96a passes 3:1 on all dark tones (10.86:1 on creosote, similar on ballast/mid).