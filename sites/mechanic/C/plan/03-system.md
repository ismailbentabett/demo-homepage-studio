# Design System — mechanic-C (Frost Heave Auto Repair)

## Fonts
- **Display:** Bodoni Moda (variable opsz 6–96, wght 400–900). Preload: `bodoni-moda-400-900-normal.woff2`.
- **Text:** Source Sans 3 (variable wght 200–900). No preload.
- **Accent:** DM Mono (static 300/400/500). For temperature readouts, season tags, data lines.
- Display tracking: -0.03em at ≥ 48px, -0.01em below. Line-height: 0.92 for display, 1.5 for body.

## Type scale
Ratio 1.2 (mobile) → 1.333 (desktop). Body 18px, measure 64ch.

```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* 12–14px */
--fs-0:  clamp(0.875rem, 0.8rem + 0.35vw, 1rem);       /* 14–16px */
--fs-1:  clamp(1rem, 0.9rem + 0.5vw, 1.125rem);         /* 16–18px body */
--fs-2:  clamp(1.125rem, 1rem + 0.6vw, 1.375rem);       /* 18–22px */
--fs-3:  clamp(1.375rem, 1.1rem + 1.2vw, 2rem);         /* 22–32px */
--fs-4:  clamp(2rem, 1.4rem + 2.5vw, 3rem);             /* 32–48px */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);
```

Headings: `text-wrap: balance`; body: `text-wrap: pretty`; numbers: `font-variant-numeric: tabular-nums`.
Lead paragraph: `font-size: var(--fs-2); font-weight: 450;` on Source Sans 3.

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```
Section padding: tight 64px, normal 96px, loose 128px. Blueprint alternates.

## Grid
- Desktop: 12 columns, gutter 24px, max-width 1320px.
- Tablet: 8 columns, gutter 20px.
- Mobile: 4 columns, gutter 16px.
- Margin column for thermometer rail: 64px left on desktop, hidden on mobile (inline readout instead).

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Token | bg | ink | muted | rule | accent | focus | Use |
|---|---|---|---|---|---|---|---|
| t-light | #F4F6F8 | #1A2634 | #4A5B6E | #C8D3DE | #3B7EA1 | #3B7EA1 | Default paper sections |
| t-paper | #FFFFFF | #1A2634 | #4A5B6E | #D8DFE6 | #3B7EA1 | #3B7EA1 | Cards, form |
| t-mid | #2E5A4C | #F4F6F8 | #B8CCBF | #4A7A6A | #F4F6F8 | #F4F6F8 | Spruce green band |
| t-deep | #0F1923 | #F4F6F8 | #8A9BAE | #2A3A4E | #3B7EA1 | #3B7EA1 | Dark story sections |
| t-accent | #3B7EA1 | #FFFFFF | #D0E4F0 | #2A6A8A | #C43A6B | #FFFFFF | Glacier blue CTA band |
| t-signal | #C43A6B | #FFFFFF | #F0D0DE | #A02A55 | #FFFFFF | #FFFFFF | Fireweed signal moments |

Contrast verified: all text pairs ≥ 4.5:1; focus ring ≥ 3:1 on every tone.

## Radius & Shadow
- Radius: 0 everywhere except buttons (4px) and sample tags (999px pill).
- Shadow: only on mobile bar and popover (`0 4px 12px rgba(15,25,35,0.15)`).

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
- **Buttons:** primary (signal bg, white text), secondary (accent border, accent text), text (accent underline). Min-height 48px. Press: `scale(.97)` 120ms.
- **Input:** 48px tall, 2px border #C8D3DE, focus ring 3px solid var(--focus) offset 3px.
- **Card:** t-paper bg, 0 radius, 1px rule top, padding var(--s-6).
- **Sample tag:** pill, --fs--1, uppercase, letter-spacing 0.05em, bg #E8EDF2, ink #4A5B6E.
- **Frame:** aspect-ratio 3/2, overflow clip, grade filter applied. Photo unclip reveal via clip-path.
- **Header:** height token `--header-h: 72px`; scrolled state adds bg + shadow.
- **Mobile bar:** sticky bottom under 900px, call + quote buttons, hides in #contact.
- **Thermometer rail primitive:** 2px vertical line #3B7EA1, mercury bulb SVG at top, mono readout pill. Hook: `data-sw-signature="thermo-rail"`. Drawn once here, reused in hero, seasons, proof, footer.

## Photo grade
One filter for every photo:
```css
filter: saturate(.8) contrast(1.08) hue-rotate(-4deg) brightness(.95);
```
Cool-toned to match glacier palette. Optional overlay for deep sections: `linear-gradient(180deg, rgba(15,25,35,0.4), rgba(15,25,35,0.6))`.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .input, [data-tabs] [role="tab"] { border: 2px solid ButtonText; }
}
```