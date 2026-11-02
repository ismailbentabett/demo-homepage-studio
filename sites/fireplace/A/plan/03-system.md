# Design system — fireplace-A

## Tokens

### Type scale (fluid)
```css
:root {
  --ff-display: "Young Serif", serif;
  --ff-text: "Work Sans", sans-serif;

  --fs--1: clamp(.875rem, .82rem + .25vw, 1rem);      /* captions, labels */
  --fs-0:  clamp(1rem, .94rem + .3vw, 1.125rem);      /* body */
  --fs-1:  clamp(1.125rem, 1.04rem + .4vw, 1.375rem); /* lead, status */
  --fs-2:  clamp(1.375rem, 1.2rem + .8vw, 1.75rem);   /* h3, phone */
  --fs-3:  clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem);    /* h2 */
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5rem); /* h1, Young Serif */
}
```
Headings: `font-family: var(--ff-display); text-wrap: balance; font-weight: 400;`
Body: `font-family: var(--ff-text); text-wrap: pretty; line-height: 1.55; max-width: 68ch;`
Lead paragraph: `font-size: var(--fs-1); font-weight: 450;`
Numbers (phone, prices, counters): `font-variant-numeric: tabular-nums;`

### Space
```css
:root {
  --s-1: .25rem;  --s-2: .5rem;  --s-3: .75rem;  --s-4: 1rem;
  --s-5: 1.5rem;  --s-6: 2rem;   --s-7: 3rem;    --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;
}
```

### Tone classes
Each sets background, ink, muted, rule and accent for the section. Components never pick colors themselves.
```css
.t-deep   { --bg:#1A1614; --ink:#F2EBE0; --muted:#B8AFA6; --rule:#3D3532; --accent:#D96A2B; }
.t-paper  { --bg:#F2EBE0; --ink:#1A1614; --muted:#5C534C; --rule:#D6CBBB; --accent:#8C3A0F; }
.t-mid    { --bg:#3D3532; --ink:#F2EBE0; --muted:#B8AFA6; --rule:#5C534C; --accent:#D96A2B; }
.t-light  { --bg:#FFFFFF; --ink:#1A1614; --muted:#5C534C; --rule:#E0D8CE; --accent:#8C3A0F; }
.t-accent { --bg:#D96A2B; --ink:#1A1614; --muted:#3D2416; --rule:#8C3A0F; --accent:#1A1614; }
```
Sections use `background: var(--bg); color: var(--ink);` etc.

### Motion tokens
```css
:root {
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io:  cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui:    200ms;
  --dur-page:  520ms;
  --dur-story: 900ms;
  --stagger:   60ms;
}
```
Gating: `.sw-motion` on `<html>` enables reveals. Without it, everything is visible. Hidden-before-reveal styles live under `.sw-motion` only.

### Focus
```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
}
```

## Components
- **Buttons:** `.btn` min-height 48px, padding-inline 1.5em, radius 2px. `.btn-primary` (accent bg, ink text on deep; ink bg, paper text on paper). `.btn-ghost` (transparent bg, accent border + text). `.btn-call` includes phone icon. Press: `:active{transform:scale(.97)}` 120ms.
- **Inputs:** 48px tall, 1.5px rule border, focus uses accent outline.
- **Cards:** `.card` with 1.5px rule border, padding var(--s-5), radius 2px. Level tag pill in top-right corner (mono, accent bg, ink text).
- **Sample tag:** `.sample-tag` — small uppercase label, 1px dashed border, muted ink, placed visibly on every review, price and rating block.
- **Rules:** 1.5px solid var(--rule). The signature flue rail is 2px solid var(--accent) with end ticks.
- **Frames:** `.frame` aspect-ratio container, overflow hidden, radius 2px. Photo grade applied to `img` inside.
- **Header:** `[data-header]` 4rem tall, transparent on top, gains `.is-scrolled` bg after 80px. Logo left, nav center, call right. Mobile: hamburger + drawer.
- **Mobile bar:** `[data-mobilebar]` sticky bottom under 900px, call + Price it, hides on scroll down and while `#contact` visible.

## Photo grade
One filter for every photo so the stock library reads as one shoot:
```css
img, video[poster] { filter: saturate(.85) contrast(1.08) sepia(.12); }
```
Warm palette keeps the sepia. Per-photo `object-position` set in plan/05-media.md.