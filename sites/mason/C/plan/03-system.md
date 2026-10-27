# Design System — mason-C (Kilnside Masonry)

## Fonts

- **Display:** Young Serif, weight 400. Preload `assets/fonts/young-serif/young-serif-400-normal.woff2`.
- **Text:** Source Sans 3, variable wght 200–900. No preload (body loads after display).
- **Accent:** DM Mono, weights 300, 400, 500. For stamp codes, sample tags, price units, neighborhood initials.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. Display tracking -0.03em, line-height 0.92. Body 18px, line-height 1.55, measure 64ch.

```css
--fs--1: clamp(0.78rem, 0.74rem + 0.2vw, 0.83rem);   /* ~13px */
--fs-0:  clamp(0.94rem, 0.88rem + 0.3vw, 1rem);       /* ~15-16px */
--fs-1:  clamp(1.13rem, 1.04rem + 0.45vw, 1.33rem);   /* ~18-21px */
--fs-2:  clamp(1.35rem, 1.2rem + 0.75vw, 1.78rem);    /* ~22-28px */
--fs-3:  clamp(1.62rem, 1.38rem + 1.2vw, 2.37rem);    /* ~26-38px */
--fs-4:  clamp(1.94rem, 1.55rem + 1.95vw, 3.16rem);   /* ~31-50px */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);
```

Headings: `text-wrap: balance`. Body: `text-wrap: pretty`. Lead paragraph: `font-size: var(--fs-1); font-weight: 450;` using Source Sans 3 variable axis.

## Space

```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
```

Section padding (alternating tight/normal/loose per rhythm rules):
- Tight: `padding-block: clamp(56px, 8vh, 80px)`
- Normal: `padding-block: clamp(96px, 12vh, 120px)`
- Loose: `padding-block: clamp(128px, 16vh, 160px)`

## Grid

12 columns, gutter 24px, max-width 1280px. Margin column on left for stamp section headers (col 1 of 12, 80px wide on desktop, full-width stacked on mobile).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-paper (light)
- `--bg: #F4EDE4; --ink: #1A1410; --muted: #6B5744; --rule: #D4C8B8; --accent: #8B4513; --focus: #8B4513;`
- Button primary: bg `#8B4513`, text `#F4EDE4` (6.11:1 ✓)
- Contrast verified above.

### t-deep (dark)
- `--bg: #1E1814; --ink: #F4EDE4; --muted: #A89880; --rule: #3D322A; --accent: #D9B98A; --focus: #D9B98A;`
- Button primary: bg `#D9B98A`, text `#1E1814` (9.41:1 ✓)
- Paper on Deep: 15.11:1 ✓

### t-accent (color band)
- `--bg: #8B4513; --ink: #F4EDE4; --muted: #E8D5C0; --rule: #6B3410; --accent: #F4EDE4; --focus: #D9B98A;`
- Button primary: bg `#F4EDE4`, text `#8B4513` (6.11:1 ✓)
- Used once for the CTA band before footer.

### t-mid (transitional)
- `--bg: #E8DDD0; --ink: #1A1410; --muted: #6B5744; --rule: #C4B8A8; --accent: #8B4513; --focus: #8B4513;`
- Same contrasts as t-paper (slightly darker bg improves ratio).

## Radius & Shadow

- Radius: `2px` everywhere (brick-like, not rounded). Buttons, cards, inputs, frames all `border-radius: 2px`.
- Shadow: only on floating elements (mobile bar, popover). `box-shadow: 0 4px 12px rgba(26,20,16,0.15)`.

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

- **Buttons:** primary (`bg: var(--accent); color: var(--bg); min-height: 48px; padding: 0 var(--s-5);`), secondary (`border: 2px solid var(--accent); color: var(--accent);`), text (`color: var(--accent); text-decoration: underline;`). All ≥ 48px tall.
- **Input:** `height: 48px; border: 1px solid var(--rule); background: var(--bg); color: var(--ink); padding: 0 var(--s-4);`.
- **Card:** `background: var(--bg); border: 1px solid var(--rule); padding: var(--s-5);`.
- **Sample tag:** `font-family: 'DM Mono'; font-size: var(--fs--1); text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid var(--rule); padding: 2px 6px;`.
- **Frame:** aspect-ratio containers with photo grade filter. Ratios: 4/3, 3/2, 16/9. Grade: `filter: saturate(.85) contrast(1.05) sepia(.08);`.
- **Header:** `--header-h: 64px;` sticky, transparent → paper bg on scroll.
- **Mobile bar:** sticky bottom, `t-deep` tone, call + quote buttons, hides on scroll down and when `#contact` visible.
- **Maker's-mark stamp (signature primitive):** CSS-drawn rectangle (aspect 2.2/1) with inset shadow to simulate frog recess. Contains two-line text in DM Mono. On `.is-in`: `transform: scaleY(.95) → scaleY(1); box-shadow` deepens. Defined once, reused via class `.stamp`.

## Photo grade

All photos: `filter: saturate(.85) contrast(1.05) sepia(.08);`. Warm, tactile, consistent across stock photographers. No overlay duotone (the palette is warm enough).

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .stamp, input, select { border: 2px solid ButtonText; }
}
```