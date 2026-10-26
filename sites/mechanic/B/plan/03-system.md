# Design System — mechanic-B (Plain Code Auto Repair)

## Fonts

- **Display:** Syne (variable, wght 400–800). Preload: `assets/fonts/syne/syne-400-800-normal.woff2`. Axes in use: `wght`.
- **Text:** Figtree (variable, wght 300–900). No preload. Axes in use: `wght`.
- **Accent:** Space Mono (400, 700). No preload. Used for all code lines, measurements, signature typed text.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. Display tracking -0.03em, line-height 0.92. Body 18px, line-height 1.5, measure 64ch. Nothing under 13px.

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12–13px captions */
--fs-0:  clamp(1rem, 0.95rem + 0.25vw, 1.125rem);       /* 16–18px body */
--fs-1:  clamp(1.125rem, 1rem + 0.5vw, 1.375rem);       /* 18–22px lead */
--fs-2:  clamp(1.375rem, 1.1rem + 1vw, 1.75rem);        /* 22–28px h3 */
--fs-3:  clamp(1.75rem, 1.3rem + 1.5vw, 2.5rem);        /* 28–40px h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* h1 display */
```

Syne display tracking: `-0.03em`; line-height: `0.92`.
Figtree body: `font-size: var(--fs-0)`; `line-height: 1.5`; `max-width: 64ch`.
Space Mono code: `font-size: var(--fs-0)`; `letter-spacing: -0.01em`.

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding: tight `var(--s-8)` (64px), normal `var(--s-9)` (96px), loose `var(--s-10)` (128px). Blueprint alternates tight/normal/loose.

## Grid

12 columns desktop, 8 tablet, 4 mobile. Gutter `var(--s-4)` (16px) mobile, `var(--s-5)` (24px) desktop. Max content width: `1200px`. No margin column.

## Tones

### t-paper (default dark bg)
```css
.t-paper {
  --bg: #0D1117; --ink: #E8E4DC; --muted: #8B949E;
  --rule: #21262D; --accent: #3FB950; --focus: #3FB950;
  --btn-bg: #3FB950; --btn-ink: #0D1117;
}
```
Contrast: ink/bg 15.2:1 ✓ | accent/bg 7.8:1 ✓ | muted/bg 5.4:1 ✓ | btn-ink/btn-bg 7.8:1 ✓ | focus/bg 7.8:1 ✓

### t-deep (alternate panels)
```css
.t-deep {
  --bg: #161B22; --ink: #E8E4DC; --muted: #8B949E;
  --rule: #30363D; --accent: #3FB950; --focus: #3FB950;
  --btn-bg: #3FB950; --btn-ink: #0D1117;
}
```
Contrast: ink/bg 12.1:1 ✓ | accent/bg 6.2:1 ✓ | muted/bg 4.6:1 ✓ | btn-ink/btn-bg 7.8:1 ✓ | focus/bg 6.2:1 ✓

### t-accent (signal green band for CTAs / active states)
```css
.t-accent {
  --bg: #3FB950; --ink: #0D1117; --muted: #161B22;
  --rule: #238636; --accent: #0D1117; --focus: #0D1117;
  --btn-bg: #0D1117; --btn-ink: #E8E4DC;
}
```
Contrast: ink/bg 7.8:1 ✓ | btn-ink/btn-bg 15.2:1 ✓ | focus/bg 7.8:1 ✓

### t-signal (warning amber for urgent items only)
```css
.t-signal {
  --bg: #F0883E; --ink: #0D1117; --muted: #161B22;
  --rule: #D29922; --accent: #0D1117; --focus: #0D1117;
  --btn-bg: #0D1117; --btn-ink: #E8E4DC;
}
```
Contrast: ink/bg 6.9:1 ✓ | btn-ink/btn-bg 15.2:1 ✓ | focus/bg 6.9:1 ✓

## Radius & Shadow

Radius: `2px` everywhere (sharp, mechanical feel). Buttons: `2px`. Cards: `2px`. Inputs: `2px`. No pills except sample tags (`999px`).
Shadow: only on mobile bar and popover: `0 4px 12px rgba(0,0,0,0.4)`. No shadows elsewhere.

## Motion tokens

```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

## Components

- **Primary button:** min-height 48px, padding `var(--s-3) var(--s-5)`, bg `var(--btn-bg)`, color `var(--btn-ink)`, radius `2px`, hover lift 2px / 200ms.
- **Secondary button (ghost):** border `1px solid var(--accent)`, color `var(--accent)`, transparent bg, same sizing.
- **Text button:** color `var(--accent)`, underline on hover, no border.
- **Input:** bg `var(--deep)`, border `1px solid var(--rule)`, color `var(--ink)`, padding `var(--s-3) var(--s-4)`, radius `2px`, focus outline `3px solid var(--focus)` offset 3px.
- **Card:** bg `var(--bg)`, border `1px solid var(--rule)`, radius `2px`, padding `var(--s-5)`.
- **Sample tag:** pill shape (`999px`), bg `var(--rule)`, color `var(--muted)`, font-size `var(--fs--1)`, uppercase, letter-spacing `0.05em`.
- **Frame:** aspect-ratio `3/2`, overflow hidden, radius `2px`. Grade filter applied via CSS.
- **Header:** height token `--header-h: 64px`. Transparent on hero, solid `var(--paper)` after scroll.
- **Mobile bar:** sticky bottom, height 56px, shadow, two buttons (call + quote), hidden when `#contact` is visible or scrolling down.
- **Signature primitive (.code-plain):** Two-line block. `.code-plain__code` in Space Mono, color `var(--accent)`, with blinking cursor pseudo-element. `.code-plain__text` in Figtree, color `var(--ink)`. On `[data-sw-signature="code-plain"].is-in` the code types via JS and text fades up. Drawn once here, reused everywhere.

## Photo grade

All photos: `filter: saturate(0.7) contrast(1.1) brightness(0.85) sepia(0.05)`. This desaturates toward the dark palette while keeping work-light warmth. Optional overlay on hero only: `linear-gradient(135deg, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.3) 100%)` to ensure code text legibility over the engine-bay photo.

## Focus

```css
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  :focus-visible { outline-color: Highlight; }
  .btn, .card, input { border: 1px solid ButtonText; }
}
```