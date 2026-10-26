# Design System — pool-C (Low Desert Pool Co.)

## Fonts

- **Display:** Crimson Pro, variable wght 200-900. Preload `assets/fonts/crimson-pro/crimson-pro-200-900-normal.woff2`. Axis: `wght`.
- **Text:** Outfit, variable wght 300-900. Axis: `wght`.
- **Accent:** DM Mono, static 400/500 normal + italic. For folio numbers, tab labels, data readouts.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. Body 18px, line-height 1.55, measure 64ch.

```css
--fs--1: clamp(0.78rem, 0.74rem + 0.2vw, 0.83rem);   /* ~13px caption */
--fs-0:  clamp(1rem, 0.94rem + 0.3vw, 1.125rem);      /* 18px body */
--fs-1:  clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem);       /* h3 */
--fs-2:  clamp(1.44rem, 1.28rem + 0.8vw, 2rem);       /* h2 */
--fs-3:  clamp(1.73rem, 1.48rem + 1.25vw, 2.66rem);   /* h1 sub */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem); /* editorial cover title */
```

Display tracking: -0.02em on h1, -0.01em on h2/h3. Line-height 0.92 for display, 1.55 for body. Nothing under 13px (--fs--1 floor).

## Space

```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section padding: tight 64px (tool bands), normal 96px (story spreads), loose 128px (hero, footer). Blueprint alternates tight/normal/loose.

## Grid

12-column desktop, 8 tablet, 4 mobile. Gutter 24px desktop, 16px mobile. Max-width 1280px. Right margin column 80px reserved for almanac thumb-index rail on desktop; collapses to inline pill row on mobile.

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Token | bg | ink | muted | rule | accent | focus | Verified pairs |
|---|---|---|---|---|---|---|---|
| t-paper | #F3E8D4 | #2C1810 | #5C4A3A | #D4C4A8 | #0E7C7B | #0E7C7B | ink/paper 13.89:1 AAA |
| t-mid | #E6D5B8 | #2C1810 | #5C4A3A | #C4B498 | #0E7C7B | #0E7C7B | ink/mid 11.70:1 AAA |
| t-deep | #1E293B | #FFFFFF | #CBD5E1 | #334155 | #B85C38 | #0E7C7B | white/deep 13.27:1 AAA |
| t-accent | #0E7C7B | #FFFFFF | #E0F2F1 | #0A6362 | #F3E8D4 | #F3E8D4 | white/accent 4.62:1 AA |
| t-signal | #B85C38 | #FFFFFF | #FDEBD0 | #9A4A2C | #1E293B | #1E293B | white/signal 4.53:1 AA (large only) |

Focus ring: `outline: 3px solid var(--focus); outline-offset: 3px` passes 3:1 on every tone background.

## Radius & Shadow

Radius: 3px everywhere (cards, buttons, inputs, tags). No pills except almanac tab active state (border-radius-right 3px). Shadow: only on sticky mobile bar (`0 -2px 8px rgba(44,24,16,0.12)`). No card shadows.

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

- **Buttons:** primary (t-accent bg, white text, ≥48px tall), secondary (transparent bg, accent border, accent text), text (no bg, underline on hover). All ≥48px tap target.
- **Input:** 48px height, 3px radius, border-color var(--rule), focus ring as above.
- **Card:** t-paper or t-mid bg, 3px radius, no shadow, 1px rule border.
- **Tag:** "Sample" label in DM Mono 12px, t-mid bg, ink text, 3px radius.
- **Frame:** aspect-ratio containers with photo grade filter applied.
- **Header:** `--header-h: 64px`; transparent over hero, t-paper bg after scroll.
- **Mobile bar:** sticky bottom, t-deep bg, two buttons (Call + Text), shadow as above.
- **Almanac tab primitive:** `.almanac-tab` 24×32px rect, border-right 2px solid var(--rule), DM Mono 11px label centered. Active: `translateX(-8px)`, border-right-color var(--accent), bg var(--accent), text white. Transition 400ms ease-out. Hook: `data-sw-signature="almanac-tab"`.

## Photo grade

One filter for every photo: `saturate(.82) contrast(1.08) sepia(.12) brightness(.97)`. Warms desert shots, unifies stock. Optional overlay for deep-band photos: `linear-gradient(to bottom, rgba(30,41,59,0.3), rgba(30,41,59,0.6))`.

## Focus & a11y

`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`. Forced-colors: button borders preserved via `border: 2px solid ButtonText`. All interactive elements ≥48px. Reduced motion: all transforms and opacity transitions disabled; content visible statically.