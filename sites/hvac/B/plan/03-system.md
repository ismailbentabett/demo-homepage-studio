# Design System — hvac-B (Wetbulb Heating & Cooling)

## Fonts

- **Display:** Chivo, weights 100–900 (variable wght). Preload `assets/fonts/chivo/chivo-100-900-normal.woff2`. Grotesk with newspaper punch; reads like instrument engraving. Tracking `-0.02em` for display sizes.
- **Text:** Figtree, weights 300–900 (variable wght). Friendly geometric sans; clear tabular figures for readings. Line-height 1.55.
- **Accent:** DM Mono, weights 400/500. Used for reading chips, sample tags, axis labels, tool outputs. `font-variant-numeric: tabular-nums` always.

## Type scale

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12-13px, captions, chips */
--fs-0:  clamp(0.875rem, 0.825rem + 0.25vw, 0.9375rem); /* 14-15px, meta, labels */
--fs-1:  clamp(1rem, 0.95rem + 0.25vw, 1.125rem);        /* 16-18px, body */
--fs-2:  clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);        /* 20-24px, lead/h4 */
--fs-3:  clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);         /* 24-36px, h3/h2 */
--fs-h1: clamp(2.4rem, min(8.5vw, 9svh) + 0.1rem, 4.75rem); /* tuned for Chivo width */
```

Body: `var(--fs-1)`, line-height 1.55, measure max 65ch. Headings: `text-wrap: balance`, tracking `-0.02em`, line-height 0.95. Lead paragraph: `var(--fs-2)`, weight 500. Nothing below `--fs--1`.

## Space

```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
```

Section padding: tight `var(--s-7)` (48px), normal `var(--s-8)` (64px), loose `var(--s-9)` (96px).

## Grid

12 columns desktop, 8 tablet, 4 mobile. Gutter `var(--s-4)` (16px). Max-width 1280px. Margin column: right 2-column gutter reserved for sticky comfort chart on desktop (≥900px); collapses to inline widget on mobile.

## Palette — Gulf Dew + Graphite + Coral

| Token | Hex | Name |
|-------|-----|------|
| `--paper` | #F4F1EC | Warm paper |
| `--ink` | #2B2D2E | Graphite |
| `--accent` | #0E5C52 | Deep teal |
| `--deep` | #1B2F2C | Deep bayou |
| `--signal` | #A83A25 | Burnt coral |
| `--mid` | #C8C2B8 | Warm mid |
| `--rule` | #A8A29A | Warm rule |

Derived muted/rule tokens per tone:

- **t-paper** (`--bg:#F4F1EC; --ink-t:#2B2D2E; --muted:#6B6860; --rule:#A8A29A; --focus:#0E5C52; --btn-bg:#0E5C52; --btn-ink:#F4F1EC`). Ink/bg 12.28:1 AAA. Accent/bg 6.97:1 AA (buttons, chart band). Signal/bg 5.65:1 AA (out-of-band dot only).
- **t-deep** (`--bg:#1B2F2C; --ink-t:#F4F1EC; --muted:#9A968E; --rule:#3A4A46; --focus:#F4F1EC; --btn-bg:#F4F1EC; --btn-ink:#1B2F2C`). Ink/bg 12.51:1 AAA. Signal elements use paper-colored text/icons on deep bg.
- **t-accent** (`--bg:#0E5C52; --ink-t:#F4F1EC; --muted:#B8D4CF; --rule:#1A7A6E; --focus:#F4F1EC; --btn-bg:#F4F1EC; --btn-ink:#0E5C52`). Paper/accent 6.97:1 AA.
- **t-mid** (`--bg:#C8C2B8; --ink-t:#2B2D2E; --muted:#5A5750; --rule:#A8A29A; --focus:#0E5C52; --btn-bg:#2B2D2E; --btn-ink:#F4F1EC`). Ink/mid 7.81:1 AAA.

## Radius & Shadow

Radius: `2px` everywhere (buttons, tags, inputs, cards, frames). No rounded corners beyond 2px. Shadow: only on mobile bar (`0 -2px 8px rgba(0,0,0,.15)`) and hover card lift (`0 2px 8px rgba(0,0,0,.08)`). No other shadows.

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

- **Buttons:** Primary (accent bg, paper text, ≥48px tall, 2px radius), secondary (transparent bg, ink/accent border), ghost (transparent bg, rule border). All `min-height:48px`, `padding-inline:var(--s-5)`.
- **Input:** `border:1px solid var(--rule)`, `background:var(--bg)`, `color:var(--ink-t)`, focus outline `3px solid var(--focus)` offset 3px.
- **Card:** No shadow at rest, 1px rule border, `padding:var(--s-5)`, 2px radius. Hover: lift 2px + subtle shadow (desktop only).
- **Sample tag:** `.sample-tag{font-family:'DM Mono';font-size:var(--fs--1);text-transform:uppercase;letter-spacing:.08em;padding:2px 6px;border:1px solid var(--rule);color:var(--muted);border-radius:2px}`.
- **Frame:** Aspect ratio set per slot; grade filter applied universally.
- **Header:** `--header-h:64px` mobile, `72px` desktop. Paper tone with ink text.
- **Mobile bar:** Sticky bottom under 900px, accent bg, paper text, call + quote buttons. Hides on scroll down and when `#contact` visible.
- **Signature primitive:** `.wb-chart` (CSS/SVG psychrometric chart with teal comfort band) + `.wb-dot` (coral dot positioned via `--sw-x`, `--sw-y` CSS vars). Chart drawn once, reused in hero margin, story margin, service cards (mini), footer badge. Hook: `data-sw-signature="comfort-chart"`.
- **Reading chip:** `.reading-chip{font-family:'DM Mono';font-size:var(--fs--1);display:inline-flex;gap:var(--s-2);padding:2px 8px;border:1px solid var(--rule);border-radius:2px;font-variant-numeric:tabular-nums}`. Shows temp/RH/DP values.

## Photo grade

Universal filter: `filter: saturate(.85) contrast(1.05) sepia(.06) hue-rotate(2deg)`. Humid Gulf tone matching teal/paper palette. Applied to every `img` and video poster via `img, [data-video]{filter:...}`. Per-photo `object-position` specified in 05-media.md.

## Focus

```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media(forced-colors:active){
  .btn,.sample-tag,.reading-chip,.wb-dot{border:2px solid ButtonText}
}
```