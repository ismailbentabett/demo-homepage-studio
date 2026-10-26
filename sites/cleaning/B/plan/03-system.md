# Design System — cleaning-B (Every Other Friday Cleaning)

## Fonts
- **Display:** Bricolage Grotesque (variable, opsz 12-96, wdth 75-100, wght 200-800). Preload: `assets/fonts/bricolage-grotesque/bricolage-grotesque-200-800-normal.woff2`.
- **Text:** Figtree (variable, wght 300-900). No preload.
- **Accent:** DM Mono (static, 300/400/500 normal + italic). Used for receipt lines, prices, timestamps, tool outputs.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. Display tracking -0.03em, line-height 0.92. Body 18px, line-height 1.5, measure 65ch. Nothing under 14px.

```css
--fs--1: clamp(0.78rem, 0.75rem + 0.15vw, 0.875rem);   /* 14px mono labels */
--fs-0:  clamp(0.94rem, 0.9rem + 0.2vw, 1.0625rem);    /* 17px body base */
--fs-1:  clamp(1.125rem, 1rem + 0.5vw, 1.375rem);       /* 22px h3 / lead */
--fs-2:  clamp(1.35rem, 1.1rem + 1vw, 1.875rem);        /* 30px h2 */
--fs-3:  clamp(1.62rem, 1.2rem + 1.8vw, 2.5rem);        /* 40px h1 alt */
--fs-4:  clamp(1.94rem, 1.3rem + 2.8vw, 3.5rem);        /* 56px hero display */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* hero h1, tuned for Bricolage width */
```

Display tracking: `letter-spacing: -0.03em`. Line-height: 0.92 for h1/h2, 1.0 for h3.
Body: `font-size: var(--fs-0); line-height: 1.5; max-width: 65ch`.

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 120px; --s-11: 160px;
```
Section padding: tight 64px (tools, checklist), normal 96px (services, reviews), loose 128px (hero, footer).

## Grid
12 columns desktop, 8 tablet, 4 mobile. Gutter 24px. Max-width 1280px. Margin column: 1fr on each side of 12-col grid at ≥1440px for receipt strip placement.

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-paper (default)
```css
--bg: #F5F2EB; --ink: #2D2A26; --muted: #6B6560; --rule: #D4CFC4;
--accent: #9C4A18; --focus: #3B7A57;
--btn-bg: #9C4A18; --btn-ink: #F5F2EB;
--btn-secondary-bg: transparent; --btn-secondary-ink: #9C4A18; --btn-secondary-border: #9C4A18;
```
Contrast: ink/paper 12.8:1 ✓ | accent/paper 5.2:1 ✓ | paper/btn-bg 5.2:1 ✓ | focus/paper 4.6:1 ✓

### t-deep
```css
--bg: #1E1B17; --ink: #F5F2EB; --muted: #A8A29E; --rule: #3D3832;
--accent: #D4845A; --focus: #6BBF96;
--btn-bg: #D4845A; --btn-ink: #1E1B17;
--btn-secondary-bg: transparent; --btn-secondary-ink: #D4845A; --btn-secondary-border: #D4845A;
```
Contrast: ink/deep 14.1:1 ✓ | accent/deep 4.8:1 ✓ | deep/btn-bg 4.8:1 ✓ | focus/deep 5.2:1 ✓

### t-mid
```css
--bg: #D4CFC4; --ink: #2D2A26; --muted: #5C5752; --rule: #A8A29E;
--accent: #7A3B12; --focus: #2D6B4A;
--btn-bg: #7A3B12; --btn-ink: #F5F2EB;
--btn-secondary-bg: transparent; --btn-secondary-ink: #7A3B12; --btn-secondary-border: #7A3B12;
```
Contrast: ink/mid 8.2:1 ✓ | accent/mid 5.1:1 ✓ | mid/btn-bg 5.1:1 ✓ | focus/mid 4.5:1 ✓

### t-accent (Friday Sienna band)
```css
--bg: #9C4A18; --ink: #F5F2EB; --muted: #E8D5C8; --rule: #C47040;
--accent: #F5F2EB; --focus: #F5F2EB;
--btn-bg: #F5F2EB; --btn-ink: #9C4A18;
--btn-secondary-bg: transparent; --btn-secondary-ink: #F5F2EB; --btn-secondary-border: #F5F2EB;
```
Contrast: ink/accent 5.2:1 ✓ | accent-bg/ink 5.2:1 ✓ | focus/accent 5.2:1 ✓

## Radius
0 everywhere except buttons (4px) and status pills (999px). Receipt torn edge uses clip-path, not radius.

## Shadow
Only on floating elements: sticky mobile bar (`0 -2px 12px rgba(0,0,0,.08)`), quote form popover. No shadows on cards or sections.

## Motion tokens
```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--stagger: 60ms;
```

## Components
- **Primary button:** min-height 48px, padding 12px 28px, bg var(--btn-bg), color var(--btn-ink), font-weight 600, letter-spacing 0.01em. Hover: brightness(1.08). Focus: 3px solid var(--focus), offset 3px.
- **Secondary button:** same size, transparent bg, border 1.5px solid var(--btn-secondary-border), color var(--btn-secondary-ink).
- **Text button:** no bg/border, underline on hover, color var(--accent).
- **Input:** height 48px, border 1.5px solid var(--rule), bg var(--bg), padding 12px 16px, font-family var(--font-text). Focus: border-color var(--accent), outline 3px solid var(--focus), offset 2px.
- **Card:** bg var(--bg), border 1.5px solid var(--rule), padding var(--s-6). No shadow.
- **Receipt strip:** dashed left border 2px var(--rule), clip-path torn bottom (`polygon(0 0, 100% 0, 100% calc(100% - 12px), 95% 100%, 90% calc(100% - 8px), ...)`), padding var(--s-6) var(--s-5). `.receipt-line` children wipe in via `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` driven by `--sw-p`.
- **Status pill:** display inline-flex, padding 2px 10px, font-family var(--font-accent), font-size var(--fs--1), border-radius 999px, border 1px solid currentColor. Variants: `--ok` (signal green), `--watch` (sienna), `--deep` (accent).
- **Frame:** aspect-ratio 4/3 (landscape), 3/4 (portrait), object-fit cover. Grade: `saturate(.85) contrast(1.05) sepia(.08)`.
- **Header:** height token `--header-h: 72px`. Sticky top, bg var(--bg), border-bottom 1px solid var(--rule).
- **Mobile bar:** fixed bottom, height 64px, bg var(--bg), border-top 1px solid var(--rule), shadow. Two equal buttons: Call + Price it.

## Signature CSS primitive
`.receipt-strip` with `.receipt-line` children. Each `.receipt-line` has:
- Mono label (DM Mono, var(--fs--1)) left-aligned
- Description center
- Price right-aligned (tabular-nums)
- Wipe-in animation via `clip-path` driven by `--sw-p`
Torn bottom edge is a single SVG data URI used as mask-image on the strip container.

## Photo grade
All photos: `filter: saturate(.85) contrast(1.05) sepia(.08)`. Optional overlay on hero marquee: linear-gradient(to bottom, rgba(245,242,235,0) 60%, rgba(245,242,235,1) 100%) for text readability.

## Focus
```css
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  .btn, input, select, textarea { border: 2px solid ButtonText; }
  .receipt-line { border-left: 2px solid CanvasText; }
  :focus-visible { outline: 3px solid Highlight; }
}
```