# Design System — pest-A (Sill Plate Pest Co.)

## Fonts

- **Display:** Zilla Slab, weights 400/600/700. Preload: `assets/fonts/zilla-slab/zilla-slab-700-normal.woff2`.
- **Text:** Source Sans 3, variable wght 200–900. No preload (used after first paint).
- **Accent:** DM Mono, weights 400/500. For station numbers, finding labels, prices, dates.

## Type scale

Ratio 1.2 mobile → 1.333 desktop.

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem);   /* ~12–13px */
--fs-0:  clamp(0.9rem, 0.85rem + 0.25vw, 1rem);        /* ~14–16px */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.2rem);         /* ~16–19px body */
--fs-2:  clamp(1.2rem, 1rem + 0.8vw, 1.6rem);          /* ~19–26px */
--fs-3:  clamp(1.44rem, 1.1rem + 1.4vw, 2.13rem);      /* ~23–34px */
--fs-4:  clamp(1.73rem, 1.2rem + 2.2vw, 2.84rem);      /* ~28–45px */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);
```

- Display tracking: -0.02em. Line-height: 0.95.
- Body: var(--fs-1), line-height 1.5, measure 60–72ch.
- Nothing under 13px (--fs--1 floor).

## Space

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px;
```

Section padding: tight 64px, normal 96px, loose 128px. Blueprint alternates tight/normal/loose.

## Grid

- Desktop: 12 columns, gutter 24px, max-width 1280px.
- Tablet: 8 columns, gutter 20px.
- Mobile: 4 columns, gutter 16px.
- Margin column: none (station rail lives inside grid col 1 on desktop).

## Tones

### t-paper (default)
```css
--bg: #F5F3EB; --ink: #2D3436; --muted: #6B7280; --rule: #D4CFC4;
--accent: #1B5E3B; --focus: #1B5E3B;
--btn-bg: #1B5E3B; --btn-ink: #FFFFFF;
```
Contrast: ink/bg 11.41:1, accent/bg 6.97:1, btn-ink/btn-bg 7.74:1. All pass AA.

### t-mid (alt sections)
```css
--bg: #E8E4D9; --ink: #2D3436; --muted: #5C6370; --rule: #C4BFB4;
--accent: #1B5E3B; --focus: #1B5E3B;
--btn-bg: #1B5E3B; --btn-ink: #FFFFFF;
```
Contrast: ink/bg 9.98:1, accent/bg passes AA.

### t-deep (footer, mobile bar)
```css
--bg: #1A2E22; --ink: #F5F3EB; --muted: #A8B5A0; --rule: #2D4A38;
--accent: #4ADE80; --focus: #4ADE80;
--btn-bg: #4ADE80; --btn-ink: #1A2E22;
```
Contrast: ink/bg ~12:1, btn-ink/btn-bg ~8:1. Pass AA.

### t-accent (CTA bands)
Uses t-paper values with --bg: #1B5E3B, --ink: #FFFFFF. White on accent: 7.74:1.

## Radius

- Cards, buttons, inputs: 3px.
- Finding-tag pills: 999px (fully rounded).
- Station badges: 50% (circle).

## Shadow

Only on floating elements: mobile bar (`0 -2px 8px rgba(0,0,0,.12)`), popover. No card shadows.

## Motion tokens

```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io:  cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui:    200ms;
--dur-page:  520ms;
--dur-story: 900ms;
--stagger:   60ms;
```

## Components

- **Primary button:** min-height 48px, bg var(--btn-bg), color var(--btn-ink), radius 3px, padding 0 var(--s-5).
- **Secondary button:** border 2px solid var(--accent), color var(--accent), bg transparent.
- **Text button:** color var(--accent), underline on hover.
- **Input:** border 1px solid var(--rule), radius 3px, padding var(--s-2) var(--s-3), focus outline 3px solid var(--focus) offset 3px.
- **Card:** bg var(--bg), border 1px solid var(--rule), radius 3px, padding var(--s-5).
- **Finding tag pill:** display inline-flex, align-items center, gap var(--s-2), padding var(--s-1) var(--s-3), border-radius 999px, font-family DM Mono, font-size var(--fs--1). States: outline (default), filled-green (Not Seen), bordered-amber (Conducive, no text in amber).
- **Station badge:** width 32px, height 32px, border-radius 50%, border 2px solid var(--signal), display grid, place-items center, font-family DM Mono, font-size var(--fs--1), color var(--ink). Active state: bg var(--accent), border-color var(--accent), color #fff.
- **Frame:** aspect-ratio 4/3 for process photos, 16/9 for hero. Grade applied via CSS filter.
- **Header:** height token --header-h: 64px desktop, 56px mobile.
- **Mobile bar:** fixed bottom, height 64px, t-deep tone, primary CTA full-width.

### Signature primitive: `.station-tag`
CSS-only finding tag with data-state attribute (outline | seen | not-seen | conducive). Draws via border + background transition on --sw-p. Reused in every station section and the final report card.

## Photo grade

```css
filter: saturate(.85) contrast(1.05) sepia(.08);
```
Optional overlay for hero only: multiply blend with #F5F3EB at 15% opacity to unify with paper tone.

## Focus

```css
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  .station-tag, .btn-primary, .btn-secondary {
    border: 2px solid ButtonText;
  }
}
```