# Design System — flooring-A (Third Coat Floor Works)

## Fonts

- **Display:** Crimson Pro, variable wght 200–900. Preload `assets/fonts/crimson-pro/crimson-pro-200-900-normal.woff2`. Optical size axis `opsz` used at 24 for lead paragraphs via `font-variation-settings: "opsz" 24`.
- **Text:** Karla, variable wght 100–900. No preload (loaded via font-face in CSS).
- **Accent:** DM Mono, weights 300/400/500 normal + italic. Grit numbers, spec labels, price ranges, tabular figures.

## Type scale

```css
--fs--2: clamp(.75rem, .72rem + .15vw, .8125rem);   /* legal, credits */
--fs--1: clamp(.875rem, .85rem + .12vw, .9375rem);  /* grit labels, proof line, captions */
--fs-0:  clamp(1rem, .97rem + .18vw, 1.125rem);     /* body */
--fs-1:  clamp(1.2rem, 1.1rem + .45vw, 1.45rem);    /* lead, card titles */
--fs-2:  clamp(1.5rem, 1.3rem + 1vw, 2.1rem);       /* h3, grit numbers */
--fs-3:  clamp(2rem, 1.6rem + 2vw, 3.2rem);         /* h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem);
```

- Display tracking: `-0.03em` on headings ≥ --fs-2, `-0.02em` on --fs-1. Line-height: `.95` at --fs-h1, `1.02` at --fs-3, `1.1` at --fs-2.
- Body: `line-height: 1.55`, measure `max-width: 62ch`. Lead: `line-height: 1.4`, `max-width: 34ch`, weight 450 with `font-variation-settings: "opsz" 24`.
- Numbers: `font-variant-numeric: tabular-nums lining-nums` on prices, hours, phone, grit counters.
- Nothing under 13px (--fs--2 floor is 12px only for legal credits, never body).

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 120px; --s-11: 160px;
```

Section padding (alternating tight / normal / loose):
- Tight: `padding-block: var(--s-8)` (64px) — process cards, tool sections.
- Normal: `padding-block: var(--s-9)` (96px) — hero, reviews, services.
- Loose: `padding-block: var(--s-11)` (160px) — break photo, pinned story.

## Grid

- Desktop (≥ 1100px): 12 columns, gutter 24px, max-width 1280px, margin auto.
- Tablet (640–1099px): 8 columns, gutter 20px.
- Mobile (< 640px): 4 columns, gutter 16px.
- Margin column: 1fr on each side at ≥ 1100px for breathing room; content sits in center 10 cols.

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-paper (default light)
```css
--bg: #F5F0E8; --ink: #2C241E; --muted: #6B5D4F; --rule: #D9CDB8;
--accent: #8B5A2B; --focus: #8B5A2B;
--btn-bg: #A63D1F; --btn-ink: #FAF7F2;
--btn-secondary-bg: transparent; --btn-secondary-ink: #8B5A2B; --btn-secondary-border: #8B5A2B;
```
Contrast: ink on bg = 13.43:1 (pass), accent on bg = 5.14:1 (pass), btn-ink on btn-bg = 5.93:1 (pass), focus on bg = 5.14:1 (pass ≥ 3).

### t-deep (dark sections: break, footer)
```css
--bg: #1A1612; --ink: #F5F0E8; --muted: #A89880; --rule: #3D342A;
--accent: #D4A060; --focus: #D4A060;
--btn-bg: #F5F0E8; --btn-ink: #1A1612;
--btn-secondary-bg: transparent; --btn-secondary-ink: #F5F0E8; --btn-secondary-border: #F5F0E8;
```
Contrast: ink on bg = 15.85:1 (pass), muted on bg = 7.2:1 (pass), accent on bg = 6.8:1 (pass), btn-ink on btn-bg = 15.85:1 (pass), focus on bg = 6.8:1 (pass ≥ 3).

### t-cream (card backgrounds, form fields)
```css
--bg: #FAF7F2; --ink: #2C241E; --muted: #6B5D4F; --rule: #D9CDB8;
--accent: #8B5A2B; --focus: #8B5A2B;
```
Contrast: ink on bg = 14.1:1 (pass), accent on bg = 5.4:1 (pass).

### t-accent (signal band for CTA strips)
```css
--bg: #A63D1F; --ink: #FAF7F2; --muted: #F5DCC8; --rule: #C46840;
--accent: #FAF7F2; --focus: #FAF7F2;
```
Contrast: ink on bg = 5.93:1 (pass).

## Radius

- All corners: `2px` everywhere (cards, buttons, inputs, frames). No pills except the grit pill (border-radius: 999px, intentional exception as part of signature primitive).
- Rules: `1.5px` weight throughout.

## Shadow

Only on floating elements:
- Mobile bar: `box-shadow: 0 -2px 8px rgba(26,22,18,.12)`.
- Popover / tooltip: `box-shadow: 0 4px 16px rgba(26,22,18,.16)`.
No shadows on cards, buttons, or static elements.

## Motion tokens

```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--d-press: 120ms;
--d-ui: 200ms;
--d-page: 520ms;
--d-story: 900ms;
--d-stagger: 60ms;
```

## Components

### Buttons
- Primary: `min-height: 48px; padding-inline: var(--s-5); background: var(--btn-bg); color: var(--btn-ink); border-radius: 2px; font-weight: 600; letter-spacing: -.01em;`. Hover: brightness 1.08. Active: `transform: scale(.97)`, 120ms.
- Secondary: same size, transparent bg, border `1.5px solid var(--btn-secondary-border)`, color `var(--btn-secondary-ink)`.
- Text: no bg/border, underline on hover via scaleX grow.
- All buttons: `:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`.

### Input
- `height: 48px; padding-inline: var(--s-4); border: 1.5px solid var(--rule); border-radius: 2px; background: var(--bg); color: var(--ink); font-size: var(--fs-0);`. Focus: border-color var(--accent), outline as above.

### Card
- `background: var(--bg); border: 1.5px solid var(--rule); border-radius: 2px; padding: var(--s-5);`. No shadow.

### Grit pill (signature primitive)
- `display: inline-flex; align-items: center; justify-content: center; min-width: 2.5rem; height: 1.75rem; padding-inline: var(--s-2); border-radius: 999px; background: var(--accent); color: var(--bg); font-family: var(--font-mono); font-size: var(--fs--1); font-weight: 500; letter-spacing: .04em;`. Used in review cards and section headers.

### Grit rail (signature primitive, data-sw-signature hook)
```css
.grit-rail {
  position: relative; height: 3px; background: var(--rule); overflow: hidden;
}
.grit-rail::after {
  content: ""; position: absolute; inset: 0; background: var(--accent);
  transform-origin: left; transform: scaleX(var(--sw-p, 0));
  transition: transform var(--d-story) var(--ease-out);
}
.grit-rail__noise {
  position: absolute; inset: 0; opacity: .18; mix-blend-mode: multiply;
  /* inline SVG noise with stdDeviation varying by data-grit */
}
```

### Frame
- `aspect-ratio: 3/2; overflow: hidden; border-radius: 2px;`. Grade applied to img inside.

### Header
- `--header-h: 64px;` desktop, `56px` mobile. Sticky top, z-index 100, background var(--bg) with .92 opacity backdrop-filter.

### Mobile bar
- Fixed bottom, height 64px, z-index 200, shadow as above. Phone left, primary CTA right. Visible < 900px only.

## Photo grade

One filter for every photo and video poster:
```css
.frame img, .frame video { filter: saturate(.88) contrast(1.04) sepia(.1); }
```
Warm site: sepia .1 pushes stock toward raw-maple warmth. No overlay on most photos. Hero and break only get a grain layer (SVG noise at 5% opacity).

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
  .grit-rail::after { background: Highlight; }
  .grit-pill { border: 1px solid CanvasText; }
}
```