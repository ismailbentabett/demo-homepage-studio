# drywall-C — Design system (copy into :root)

## Fonts
- Display: Newsreader variable, `assets/fonts/newsreader/newsreader-200-800-normal.woff2` (**preload this one only**) + `-italic.woff2` (plate numbers, years, kickers). Axes: `wght` 500 (h2) / 600 (h1); `opsz` auto (font-optical-sizing:auto) — the file carries opsz 6-72, so big sizes get the display cut.
- Text: Libre Franklin variable `libre-franklin-100-900-normal.woff2`, 400 body, 600 buttons/labels, `font-variant-numeric: tabular-nums` on prices, years, ZIPs.
- `font-display: swap`; fallback `Georgia, "Times New Roman", serif` / `"Helvetica Neue", Arial, sans-serif` with `size-adjust` 100% / 104%.

## Type scale
```
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px labels, plate captions */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* body 17-18px */
--fs-1:  clamp(1.275rem, 1.2rem + .35vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.4rem + .7vw, 2rem);
--fs-3:  clamp(1.836rem, 1.6rem + 1.2vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.8rem + 2vw, 3.555rem);
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 5.25rem); /* Newsreader is a normal-width serif */
--lh-display: .96; --lh-h2: 1.04; --lh-body: 1.55;
--track-display: -.025em; --track-h2: -.015em; --track-label: .06em (uppercase Franklin 600 labels only);
--measure: 64ch;
```
h1 weight 600, opsz 72; h2 500; italic 400 for "Plate II · c. 1950" captions (`--fs--1`, letter-spacing .01em). Nothing under 13px.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 8vw, 80px)`, `--pad-normal: clamp(80px, 10vw, 120px)`, `--pad-loose: clamp(112px, 13vw, 160px)`.

## Grid
12 cols ≥1024 / 8 cols 640-1023 / 4 cols <640. Gutter `clamp(16px, 2vw, 24px)`. Max width 1320px, side margin `clamp(20px, 5vw, 64px)`. Plate column: in the eras story the plate takes cols 1-5 (sticky, top: calc(var(--header-h) + 32px)), copy cols 7-12.

## Tones (each sets --bg --ink --muted --rule --accent --focus + buttons)
| tone | --bg | --ink | --muted | --rule | --accent | --focus | btn bg / text |
|---|---|---|---|---|---|---|---|
| `t-paper` (default) | #F2EADB | #1E1B1A (14.31) | #5E554D (6.09) | rgba(30,27,26,.22) | #8F3A28 (6.26) | #1C2530 (12.94) | #8F3A28 / #FFF (7.48) |
| `t-light` (forms, cards) | #FAF6EE | #1E1B1A (15.87) | #5E554D (≥6.09) | rgba(30,27,26,.18) | #8F3A28 (6.94) | #1C2530 | #8F3A28 / #FFF |
| `t-brick` (hero, proof band) | #8F3A28 | #F2EADB (6.26) | #F0D9C4 (5.50) | rgba(242,234,219,.35) | #F2EADB | #E9B872 (4.12 ≥3) | #E9B872 / #1C2530 (8.52) |
| `t-slate` (season strip) | #3E5568 | #FFFFFF (7.76) | #D3DDE5 (5.63) | rgba(255,255,255,.3) | #FFFFFF | #E9B872 (4.27 ≥3) | #F2EADB / #1C2530 (12.94) |
| `t-deep` (footer, quote) | #1C2530 | #F2EADB (12.94) | #B9C6D0 (8.88) | rgba(242,234,219,.2) | #E9B872 (8.52) | #E9B872 | #E9B872 / #1C2530 (8.52) |
**Trap:** amber #E9B872 on brick = 4.12: never body text, only focus rings, ≥24px display words, and the button *fill* (button text is #1C2530 on amber, 8.52). #C9BBA8 on cream = 1.57: hatch fill only.

## Radius / rules / shadow
Radius 0 everywhere except arches (`border-radius: 999px 999px 0 0` on frames) and 999px on the mobile bar's pill buttons. Rules 1px `var(--rule)`; plate lines 1.5px `currentColor`. Shadow only on the mobile bar and tool result popover: `0 8px 24px rgba(28,37,48,.22)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **Buttons** (min-height 52px, padding 0 24px, Franklin 600 `--fs-0`, radius 0): primary = tone btn colors; secondary = 1.5px border currentColor, transparent; text button = underline 1px offset 4px, accent color. Press: translateY(1px) 120ms.
- **Input:** 52px tall, bg #FAF6EE, 1.5px border #5E554D (6.09 on light ≥3 non-text), label above Franklin 600 `--fs--1` uppercase .06em, error text #8F3A28.
- **Card:** t-light, 1px rule border, padding var(--s-6), micro-plate 64×64 top-right, no shadow, hover: micro-plate finish layer fills (200ms).
- **Sample tag:** inline Franklin 600 13px uppercase, 1px border currentColor, padding 2px 8px, text "Sample".
- **Arch frame** `.arch`: `aspect-ratio: 4/5.4; border-radius: 999px 999px 0 0; overflow:hidden;` + `.arch__muntins` SVG overlay (2 vertical + 3 horizontal bars, 2px cream at 55% opacity, plus the semicircle fanlight spokes). Variants: `.arch--wide` (16/10 with a flatter segmental top: `border-radius: 50% 50% 0 0 / 22% 22% 0 0`) for the break photo; `.arch--pin` 96px for review avatars-free pins (photo crop of texture, never faces).
- **Header:** `--header-h: 72px` (64px <640), t-paper with 1px bottom rule, wordmark "Horsehair & Board" in Newsreader 600 + "Wall Co." italic; call button right.
- **Mobile bar** (<760px): fixed bottom, 64px + safe-area, t-deep, three 48px+ targets Call / Text / Quote, shadow token.
- **Signature primitive `.plate`** (drawn once, reused): `<figure class="plate" data-sw-signature="era-plate" data-era="1890|1950|2005|ceiling|blank">` containing an inline SVG 320×200 viewBox with groups in order `.l-stud` (hatched 45°), `.l-lath` (wood strips with gaps) or `.l-rocklath` / `.l-board`, `.l-keys` (curls behind gaps, 1890 only), `.l-scratch`, `.l-brown`, `.l-finish`, `.l-tape` (2005). Each `path` has `pathLength="1"`; `stroke-dasharray:1; stroke-dashoffset: calc(1 - var(--sw-p-layer))`; fills fade in at 70% of their layer. `--sw-p` 0→1 drives layers in sequence: layer i shows at `clamp(0, (var(--sw-p) * 6 - i), 1)`. Caption `<figcaption>`: italic "Plate I" + "c. 1890 · horsehair plaster on wood lath" + one Franklin line "Keep: pin loose keys with plaster washers". Default CSS state = fully drawn (`--sw-p:1`); JS sets 0 only when it will animate.
- **Season strip primitive `.yearline`:** 12 month ticks, label every month 13px, band `.yearline__band` from Dec to Apr scaled by `--sw-p` (transform: scaleX, origin left).

## Photo grade
All photos: `filter: saturate(.82) contrast(1.06) sepia(.1) brightness(.98)`. Optional warm overlay on arches over brick: `::after{background:#8F3A28;mix-blend-mode:multiply;opacity:.12}`. Slate strip photo (snow/icicles): `saturate(.6) contrast(1.05)` + `#3E5568` multiply .18.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` per tone above. `@media (forced-colors:active){.btn{border:2px solid ButtonText}.plate svg{forced-color-adjust:auto}.arch__muntins{display:none}:focus-visible{outline-color:Highlight}}`.
