# Design System — handyman-C

## Tokens

### Type scale (fluid clamp)
```css
--fs--1: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);   /* captions, mono labels */
--fs-0:  clamp(1rem, 0.92rem + 0.4vw, 1.125rem);      /* body */
--fs-1:  clamp(1.2rem, 1.05rem + 0.75vw, 1.5rem);     /* h3, card titles */
--fs-2:  clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);      /* h2 */
--fs-3:  clamp(2rem, 1.5rem + 2.5vw, 3.25rem);        /* h1 sub */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem); /* h1 */
```

Display font: Aleo, weight 700 for h1/h2, 400 for sign blades.
Text font: Figtree, weight 400 body, 500 lead, 600 buttons.
Accent font: DM Mono, weight 400 for labels, prices, hours.

Headings: `text-wrap: balance`, line-height 1.05 (display), tracking -0.02em on h1.
Body: `text-wrap: pretty`, line-height 1.6, measure max 65ch.
Lead paragraph: `--fs-1`, weight 500, line-height 1.5.
Mono labels: letter-spacing 0.02em, uppercase optional for tags only.

### Space
```css
--s-1: 0.25rem;  --s-2: 0.5rem;  --s-3: 0.75rem;  --s-4: 1rem;
--s-5: 1.5rem;   --s-6: 2rem;    --s-7: 3rem;     --s-8: 4rem;
--s-9: 6rem;
--sec-y: clamp(4rem, 6vw + 1rem, 8rem);
--sec-x: clamp(1.25rem, 4vw, 3rem);
--header-h: 4rem;
```

### Tone classes
Each sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`.

| Class | --bg | --ink | --muted | --rule | --accent | Use |
|---|---|---|---|---|---|---|
| t-deep | #2A1F1A | #F2E8D5 | #B8A898 | #5C4A3A | #4A9B8E | Hero, neighborhood stops, footer |
| t-paper | #F2E8D5 | #2A1F1A | #5C4A3A | #D4C4B0 | #A6372E | Reviews, process, form |
| t-mid | #3D2E24 | #F2E8D5 | #B8A898 | #5C4A3A | #4A9B8E | Services grid |
| t-accent | #4A9B8E | #2A1F1A | #3D2E24 | #A6372E | #2A1F1A | Derby checklist band |
| t-light | #FAF5ED | #2A1F1A | #5C4A3A | #D4C4B0 | #A6372E | Pricing table |

### Motion tokens
```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--stagger: 60ms;
```

### Photo grade
```css
filter: saturate(.85) contrast(1.05) sepia(.08);
```
Applied to every `img` and video poster inside `.frame` and `.vid`.

## Components

### Buttons (min-height 48px, min-width 48px tap target)
- `.btn`: bg var(--accent), ink var(--ink), radius 4px, padding 0.75em 1.5em, font-weight 600.
- `.btn-ghost`: transparent bg, border 2px solid var(--accent), same size.
- `.btn-call`: includes phone icon, brass bg on deep tones.
- Hover: underline grows from left via `scaleX(0)→scaleX(1)` on a pseudo-element, duration var(--dur-ui).

### Sign marker (signature)
```html
<div class="sign-post" data-sw-signature>
  <div class="sign-blade">
    <span class="sign-name">Old Louisville</span>
    <span class="sign-type">Brick Victorian · 1880–1910</span>
  </div>
</div>
```
Post: 4px wide, var(--accent) color, height spans section. Blade: bg var(--deep), border-left 3px solid var(--accent), padding var(--s-4), name in Aleo --fs-2, type in DM Mono --fs--1 uppercase.

### Cards
Radius 4px, no shadow on dark tones, subtle border on light tones. Padding var(--s-5). Title --fs-1, body --fs-0.

### Sample tag
`.sample-tag`: inline-block, font-size --fs--1, DM Mono, uppercase, letter-spacing 0.04em, color var(--muted), border-bottom 1px dashed var(--muted), margin-left var(--s-2).

### Frames
`.frame`: aspect-ratio set per slot, overflow hidden, radius 4px. Photo gets the shared grade filter. Caption below in --fs--1 muted.

### Form inputs
Height 48px, border 2px solid var(--rule), radius 4px, padding 0 var(--s-3). Focus: 3px outline var(--accent), offset 3px. Error state: border-color var(--signal).

## Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .btn-ghost, input, select, textarea { border: 2px solid ButtonText; }
}
```

## Gating
Build adds `sw-js` and `sw-motion` to `<html>`. Hidden-before-reveal styles live under `.sw-motion [data-reveal]` only. Without either class, everything is visible and static.