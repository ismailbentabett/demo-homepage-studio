# Design System — hvac-C (Shadeline Heating & Cooling)

## Fonts

- **Display:** Antonio (variable wght 100–700). Preload `assets/fonts/antonio/antonio-100-700-normal.woff2`. Used for h1, hour stamps, type-mask numerals. Tracking -0.04em, line-height 0.92.
- **Text:** Figtree (variable wght 300–900). Body, buttons, form labels. Line-height 1.5, measure 65ch max.
- **Accent:** DM Mono (static 300/400/500). Hour tags, sample chips, reading labels, tool outputs. Tabular figures enabled via `font-variant-numeric: tabular-nums`.

## Type scale

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12–13px, mono labels */
--fs-0:  clamp(0.875rem, 0.825rem + 0.25vw, 0.9375rem); /* 14–15px, captions */
--fs-1:  clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);      /* 16–17px, body */
--fs-2:  clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);   /* 18–20px, lead */
--fs-3:  clamp(1.5rem, 1.3rem + 1vw, 2rem);             /* 24–32px, h3 */
--fs-4:  clamp(2rem, 1.7rem + 1.5vw, 2.75rem);          /* 32–44px, h2 */
--fs-h1: clamp(3rem, min(12vw, 14svh) + 0.2rem, 6.5rem);/* 48–104px, condensed display */
```

Antonio is condensed so h1 can reach 6.5rem without overflowing 375px. Body at --fs-1 (17px), line-height 1.5. Headings `text-wrap: balance`; body `text-wrap: pretty`.

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding sizes: tight `var(--s-8)` (64px), normal `var(--s-10)` (128px), loose `var(--s-11)` (160px). Blueprint alternates tight/normal/loose to avoid rhythm monotony.

## Grid

- Desktop ≥1100px: 12 columns, gutter 24px, max-width 1280px, margin auto.
- Tablet 640–1099px: 8 columns, gutter 20px.
- Mobile <640px: 4 columns, gutter 16px.
- Margin column for shade-line signature: left 8% on desktop, collapses to top band on mobile.

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-paper (sun cream)
```css
--bg: #FDF6EC; --ink: #1E293B; --muted: #78350F; --rule: #E7DCC8;
--accent: #9A3412; --focus: #9A3412;
--btn-bg: #9A3412; --btn-ink: #FDF6EC;
```
Contrast: ink on bg 13.63:1 (AAA), accent on bg 6.80:1 (AA), focus on bg 6.80:1 (≥3).

### t-deep (shade indigo)
```css
--bg: #1E293B; --ink: #FDF6EC; --muted: #E7DCC8; --rule: #334155;
--accent: #D97706; --focus: #D97706;
--btn-bg: #FDF6EC; --btn-ink: #1E293B;
```
Contrast: ink on bg 13.63:1 (AAA), signal accent on bg 4.59:1 (large text only, ≥3), btn-ink on btn-bg 13.63:1.

### t-accent (terracotta band)
```css
--bg: #9A3412; --ink: #FDF6EC; --muted: #FDEBD0; --rule: #7C2D12;
--accent: #FDF6EC; --focus: #FDF6EC;
--btn-bg: #FDF6EC; --btn-ink: #9A3412;
```
Contrast: ink on bg 6.80:1 (AA), btn-ink on btn-bg 6.80:1.

### t-mid (warm sand)
```css
--bg: #E7DCC8; --ink: #1E293B; --muted: #78350F; --rule: #C4B5A0;
--accent: #9A3412; --focus: #9A3412;
--btn-bg: #9A3412; --btn-ink: #FDF6EC;
```
Contrast: ink on bg 9.2:1 (AAA), accent on bg 6.80:1 (AA).

## Radius & Rules

- Radius: 0 everywhere except buttons which are full pills (999px). No mixed radii.
- Rules: 1.5px solid var(--rule) everywhere. Shade-line diagonal uses 2px for visibility.
- Shadow: only on sticky mobile bar (`box-shadow: 0 -2px 12px rgba(30,41,59,.12)`). Nothing else floats.

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

- **Buttons:** primary (--btn-bg/--btn-ink), secondary (transparent bg, border var(--accent), ink var(--accent)), text (no bg/border, ink var(--accent)). Min-height 48px, padding-inline 24px, pill radius.
- **Input:** bg var(--bg), border 1.5px var(--rule), focus outline 3px solid var(--focus) offset 3px. Height 48px.
- **Card:** bg var(--bg), border 1.5px var(--rule), padding var(--s-5). No shadow.
- **Sample tag:** inline pill, bg var(--rule), ink var(--muted), font-family DM Mono, font-size var(--fs--1), padding 2px 8px.
- **Frame:** aspect-ratio container with photo grade applied. Ratio set per slot in blueprint.
- **Header:** height token `--header-h: 64px`. Logo left, nav right, phone visible ≥768px.
- **Mobile bar:** fixed bottom, height 64px, primary call button + secondary text button. Only visible <768px.
- **Shade line primitive:** `.shade-line` uses `conic-gradient(from calc(var(--sw-hour) * 15deg), transparent 50%, var(--rule) 50%)` rotated via scroll. On mobile, becomes a horizontal rule at section top.

## Photo grade

```css
filter: saturate(.9) contrast(1.1) sepia(.12) hue-rotate(-2deg);
```

Warm desert palette: slightly more sepia than base, slight cool shift to prevent orange blowout. Applied to every `img` and video poster. Optional overlay on hero: `linear-gradient(135deg, rgba(154,52,18,.3) 0%, transparent 60%)` to reinforce terracotta.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
}
```

Focus color passes 3:1 on every tone background.