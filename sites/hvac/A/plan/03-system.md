# Design System — hvac-A

## Fonts

- **Display:** Manrope, weights 400/600/700. Preload `assets/fonts/manrope/manrope-400-700-normal.woff2`. Variable axis `wght`. Tracking `-0.03em` for display sizes.
- **Text:** Outfit, weights 400/500/600. Variable axis `wght`. Line-height 1.5.
- **Accent:** DM Mono, weights 400/500. Used for timestamps, sample chips, ticket metadata. `font-variant-numeric: tabular-nums` always.

## Type scale

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12-13px, captions */
--fs-0:  clamp(0.875rem, 0.825rem + 0.25vw, 0.9375rem); /* 14-15px, meta */
--fs-1:  clamp(1rem, 0.95rem + 0.25vw, 1.125rem);        /* 16-18px, body */
--fs-2:  clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);        /* 20-24px, lead/h4 */
--fs-3:  clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);         /* 24-36px, h3/h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem); /* tuned for Manrope width */
```

Body: `var(--fs-1)`, line-height 1.5, measure max 65ch. Headings: `text-wrap: balance`, tracking `-0.03em`, line-height 0.95. Lead paragraph: `var(--fs-2)`, weight 500. Nothing below `--fs--1` (12px floor respected; `--fs--1` min 12px).

## Space

```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
```

Section padding: tight `var(--s-7)` (48px), normal `var(--s-8)` (64px), loose `var(--s-9)` (96px). Blueprint alternates tight/normal/loose.

## Grid

12 columns desktop, 8 tablet, 4 mobile. Gutter `var(--s-4)` (16px). Max-width 1280px. Margin column: left 1-column gutter reserved for clock rail (48px wide on desktop, collapses to top-aligned on mobile).

## Tones

Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`.

- **t-dark** (`--bg:#1a1c1f; --ink:#e8e4dc; --muted:#a8a49c; --rule:#3a3c3f; --accent:#7da87b; --focus:#e8a45c; --btn-bg:#e8a45c; --btn-ink:#1a1c1f`). Contrast: ink/bg 13.46:1, accent/bg 6.30:1 (rules/shapes), signal/bg 8.04:1 (buttons/text).
- **t-paper** (`--bg:#e8e4dc; --ink:#1a1c1f; --muted:#4a4c4f; --rule:#c8c4bc; --accent:#7da87b; --focus:#e8a45c; --btn-bg:#1a1c1f; --btn-ink:#e8e4dc`). Contrast: ink/bg 13.46:1, muted/bg 9.90:1. Accent on paper is shapes-only (2.13:1 fails text).
- **t-deep** (`--bg:#2f3530; --ink:#e8e4dc; --muted:#b8b4ac; --rule:#4a4c4f; --accent:#7da87b; --focus:#e8a45c; --btn-bg:#e8a45c; --btn-ink:#1a1c1f`). Contrast: ink/bg 9.90:1, signal/bg 5.91:1.
- **t-accent** (`--bg:#7da87b; --ink:#1a1c1f; --muted:#2f3530; --rule:#5a8a58; --accent:#1a1c1f; --focus:#1a1c1f; --btn-bg:#1a1c1f; --btn-ink:#e8e4dc`). Used sparingly for one band. Ink/accent 6.30:1.

## Radius & Shadow

Radius: `0` everywhere except buttons and tags which use `2px`. No rounded corners on frames or cards. Shadow: only on mobile bar (`0 -2px 8px rgba(0,0,0,.25)`) and popover. No card shadows.

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

- **Buttons:** Primary (signal bg, ink text, ≥48px tall, 2px radius), secondary (transparent bg, ink/signal border, ink/signal text), text (no bg/border, underline on hover). All `min-height:48px`, `padding-inline:var(--s-5)`.
- **Input:** `border:1px solid var(--rule)`, `background:var(--bg)`, `color:var(--ink)`, focus outline `3px solid var(--focus)` offset 3px.
- **Card:** No shadow, 1px rule border, `padding:var(--s-5)`.
- **Sample tag:** `.sample-tag{font-family:'DM Mono';font-size:var(--fs--1);text-transform:uppercase;letter-spacing:.08em;padding:2px 6px;border:1px solid var(--rule);color:var(--muted)}`.
- **Frame:** Aspect ratio set per slot; grade filter applied universally.
- **Header:** `--header-h:64px` mobile, `72px` desktop. Dark tone always.
- **Mobile bar:** Sticky bottom under 900px, signal bg, ink text, call + quote buttons. Hides on scroll down and when `#contact` visible.
- **Signature primitive:** `.ticket-rail{position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--accent)}` + `.timestamp{font-family:'DM Mono';font-size:var(--fs-0);color:var(--muted);transition:color var(--dur-ui) var(--ease-out)}` + `.timestamp.is-lit{color:var(--signal)}`. Drawn once, reused everywhere.

## Photo grade

Universal filter: `filter: saturate(.8) contrast(1.08) sepia(.12) hue-rotate(-2deg)`. Warm desert tone matching sodium/charcoal palette. Applied to every `img` and video poster via `img, [data-video]{filter:...}`. Per-photo `object-position` specified in 05-media.md.

## Focus

```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media(forced-colors:active){
  .btn,.timestamp,.sample-tag{border:2px solid ButtonText}
}
```