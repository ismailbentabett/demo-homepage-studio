# Design system — landclearing-B

## Tokens

```css
:root {
  /* palette */
  --c-ink: #1a1a18;
  --c-sand: #f4f0e8;
  --c-deep: #2c2a24;
  --c-pink: #d94f7a;
  --c-pink-ink: #a33258;
  --c-muted: #6b6860;
  --c-rule: rgba(26,26,24,.12);

  /* type scale */
  --fs--1: clamp(.75rem, .7rem + .25vw, .875rem);
  --fs-0: clamp(.875rem, .8rem + .35vw, 1rem);
  --fs-1: clamp(1rem, .9rem + .5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1rem + 1vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.2rem + 2vw, 2.5rem);
  --fs-h1: clamp(2.4rem, min(8.5vw, 9svh) + .2rem, 4.75rem);

  /* space */
  --s-1: .25rem; --s-2: .5rem; --s-3: .75rem; --s-4: 1rem;
  --s-5: 1.5rem; --s-6: 2rem; --s-7: 3rem; --s-8: 4rem; --s-9: 6rem;
  --sec-y: clamp(4rem, 8svh, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;

  /* motion */
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;

  /* radius / rule */
  --r: 2px;
  --rule-w: 1.5px;
}
```

## Tone classes
- `.t-light` — bg `--c-sand`, ink `--c-ink`, rule `--c-rule`
- `.t-paper` — bg `#faf8f4`, ink `--c-ink`, faint hatch texture via CSS background-image (SVG data URI of dots/crosses/dashes/lines at 3% opacity)
- `.t-mid` — bg `#e8e4dc`, ink `--c-ink`
- `.t-deep` — bg `--c-deep`, ink `--c-sand`, rule `rgba(244,240,232,.15)`
- `.t-accent` — bg `--c-pink`, ink `#fff` (large text only, ratio 4.6:1)

## Components
- Buttons: primary (`--c-pink` bg, white text), secondary (outlined `--c-ink`), ghost (text only + underline). Min-height 48px.
- Tags: `.sample-tag` small mono uppercase with border, `--c-muted`.
- Frames: `.frame` with aspect-ratio container, shared photo grade `filter: saturate(.85) contrast(1.05) sepia(.04) hue-rotate(-2deg)`.
- Inputs: 48px tall, 1.5px border, focus outline 3px `--c-pink` offset 3px.
- Mobile bar: sticky bottom under 900px, call + price-it buttons.

## Photo grade
Applied to every `img` and video poster: `filter: saturate(.85) contrast(1.05) sepia(.04) hue-rotate(-2deg)`. Bright Florida light, slightly desaturated to unify stock.

## Focus
`:focus-visible { outline: 3px solid var(--c-pink); outline-offset: 3px }`. Forced colors: buttons get 2px CanvasText border.

## Gating
Build adds `sw-js` and `sw-motion`. Hidden-before-reveal styles live under `.sw-motion` only. Content fully readable with JS off or reduced motion.