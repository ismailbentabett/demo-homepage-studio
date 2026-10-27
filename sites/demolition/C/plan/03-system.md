# Design System — demolition-C

## Fonts
- **Display:** Anton (condensed, 400). Preloaded. Used for h1, section headings, hero mask.
- **Text:** Crimson Pro (serif, variable wght 200-900). Body, lead, captions. Optical size axis used for lead (`"opsz" 24`).
- **Accent:** DM Mono (mono, 300-500). Ruler ticks, sq-ft numbers, tool outputs, tags, labels.

## Type Scale
```css
--fs--2: clamp(.75rem, .72rem + .15vw, .8125rem);   /* legal, credits */
--fs--1: clamp(.875rem, .85rem + .12vw, .9375rem);  /* labels, ruler ticks, proof line */
--fs-0:  clamp(1rem, .97rem + .18vw, 1.125rem);     /* body */
--fs-1:  clamp(1.2rem, 1.1rem + .45vw, 1.45rem);    /* lead, card titles */
--fs-2:  clamp(1.5rem, 1.3rem + 1vw, 2.1rem);       /* h3, sq-ft numbers */
--fs-3:  clamp(2rem, 1.6rem + 2vw, 3.2rem);         /* h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 6rem); /* condensed face allows 6rem max */
```
- Display tracking: `letter-spacing: -0.02em` on Anton headings.
- Body: `line-height: 1.55`, measure `max-width: 62ch`. Lead: `line-height: 1.4`, `font-weight: 450`, `"opsz" 24`.
- Headings: `text-wrap: balance`, `line-height: 1.02`. Paragraphs: `text-wrap: pretty`.
- Numbers: `font-variant-numeric: tabular-nums lining-nums` on prices, hours, counters, sq-ft values.

## Space
```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px;
--s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
```
Section padding: tight `--sec-y: 56px` (tools, FAQ), normal `--sec-y: 96px` (services, reviews), loose `--sec-y: 128px` (hero, break, footer).

## Grid
- 12 columns desktop, 8 tablet, 4 mobile. Gutter `--gutter: 24px`. Max width `1200px`.
- Margin column for ruler: 60px left gutter on desktop where `.ruler` lives; collapses to top rail on mobile.

## Tones
| Token | BG | Ink | Muted | Rule | Accent | Focus |
|---|---|---|---|---|---|---|
| t-paper | #F4F1EB | #1B3A2E | #567265 | #3D4F5F | #3D4F5F | #3D4F5F |
| t-mid | #E6E1D6 | #1B3A2E | #567265 | #3D4F5F | #3D4F5F | #3D4F5F |
| t-deep | #1B3A2E | #F4F1EB | #7A9A8C | #567265 | #F4F1EB | #F4F1EB |
| t-accent | #3D4F5F | #F4F1EB | #E6E1D6 | #F4F1EB | #F4F1EB | #F4F1EB |

Contrast verified: ink on paper 11.01:1, ink on mid 9.52:1, paper on deep 11.01:1, accent on paper 7.50:1. Signal #567265 used only for rules/shapes on paper (4.66:1 passes large text). Accent never used for text on deep.

## Radius & Shadow
- Radius: `2px` everywhere (surveyor precision). Buttons `2px`, cards `2px`, inputs `2px`. Pills use `999px`.
- Shadow: none except mobile bar (`0 -2px 8px rgba(27,58,46,.12)`).

## Motion Tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--d-press: 120ms; --d-ui: 200ms; --d-page: 520ms; --d-story: 900ms; --d-stagger: 60ms;
```

## Components
- **Buttons:** primary (bg #3D4F5F on paper, bg #F4F1EB on deep), secondary (outline), text. Min height 48px.
- **Inputs:** border 1.5px solid var(--rule), focus outline 3px solid var(--focus), offset 3px.
- **Cards:** 2px radius, no shadow, border-top 3px solid var(--accent) on service cards.
- **Frame:** aspect-ratio containers with grade filter. Ratios: 3:2 hero, 4:5 cards, 21:9 break.
- **Header:** `--header-h: 64px`. Logo left, nav center, CTA right. Progress bar bottom.
- **Mobile bar:** sticky bottom under 900px, call + price-it buttons.
- **Ruler primitive:** `.ruler{border-left:2px solid var(--accent);position:relative}`. Tick marks via `::before` at intervals. Labels in DM Mono. `data-sw-signature` on hero instance. Draws via `clip-path: inset(0 0 calc((1 - var(--sw-p)) * 100%) 0)` under `.sw-motion`.

## Photo Grade
```css
.frame img{filter:saturate(.88) contrast(1.04) sepia(.06)}
.frame::after{content:"";position:absolute;inset:0;background:#1B3A2E;mix-blend-mode:multiply;opacity:.08}
```
Warm-green tint unifies stock. Grain SVG at 5% opacity on hero and break only.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media(forced-colors:active){.btn{border:2px solid CanvasText}}
```