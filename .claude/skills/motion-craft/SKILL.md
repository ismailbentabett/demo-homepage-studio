---
name: motion-craft
description: Exact motion values for the demo homepages - easing curves, durations, staggers, the h1 line-mask intro, scroll stories with GSAP ScrollTrigger (pin only at >= 640px), reduced-motion and JS-off behaviour, and the kit modules to use instead of hand-written effects. Use when planning the motion score (stage 2), writing app.js or style.css transitions, or fixing a motion score under 9.
---

# Motion craft

Motion is a sentence, not decoration: each effect has a verb from the concept (lay, seal, draw, pour,
fold, measure). A site with one real scroll story beats a site with twenty fades. Juries score
"motion and interaction" on: one memorable moment, consistency, no jank, and nothing lost when it's off.

## The gate (never break it)
- Hidden-before-reveal styles live **only** under `.sw-motion` (`html.sw-motion [data-reveal]{opacity:0}`).
  Without JS or with reduced motion, every word and photo is visible on first paint.
- `app.js` effects sit inside `if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) { … }`.
- Never animate `width`, `height`, `top`, `left`, `margin`, `filter: blur()` on big areas, or
  `box-shadow` on scroll. Only `transform`, `opacity`, `clip-path`, and CSS variables that feed them.
- No scroll cue arrows, no "scroll" text, no cursor followers, no preloader screens, no popup on load.

## Tokens (put them in `:root`)
```css
--ease-out: cubic-bezier(.2,.7,.1,1);      /* entrances, the default */
--ease-in-out: cubic-bezier(.65,0,.35,1);  /* things that move and stay: tabs, sliders, pinned panels */
--ease-snap: cubic-bezier(.3,1.3,.5,1);    /* small UI only (toggle, chip), never headings */
--d-1: 160ms;  /* hover, focus, press */
--d-2: 280ms;  /* UI state change: tab, accordion, form step */
--d-3: 600ms;  /* entrance of a block */
--d-4: 900ms;  /* hero image / signature moment */
```
- Hover: `transform: translateY(-2px)` max, `var(--d-1) var(--ease-out)`. Buttons press to `scale(.98)`.
- Block entrance: `translateY(24px) → 0` + `opacity 0 → 1`, `var(--d-3)`. Never more than 40px.
- Stagger children 60ms (the kit `[data-reveal-stagger]` does this), max 6 children staggered, the rest at once.
- Image clip reveal: `clip-path: inset(0 0 100% 0) → inset(0)`, `var(--d-4) var(--ease-out)`, with the
  inner image `scale(1.08) → 1` over the same time.

## The intro (first screen)
- ≤ 1.2 s total, starts ≤ 100 ms after `DOMContentLoaded`, and the h1 is in the DOM and readable
  before anything moves (the masks only exist under `.sw-motion`).
- h1 line mask: `[data-split="lines"]`, each line `overflow:clip`, inner `translateY(100%) → 0`,
  70 ms stagger, 700 ms, `--ease-out`, once, no bounce.
- Order: h1 lines → lead (+120 ms) → buttons (+80 ms) → hero media (clip, in parallel from 0) → proof line.
- The header is never animated in; it's simply there.

## Scroll stories (1-2 per site, from the concept's motion score)
- GSAP + ScrollTrigger only. Register once: `gsap.registerPlugin(ScrollTrigger)`.
- **Pins only at ≥ 640px:** `ScrollTrigger.matchMedia({ '(min-width: 640px)': () => { … } })`. Under
  640px, the same steps are stacked cards with a clip reveal.
- Story height: `calc(var(--n) * 55svh + 100svh)` (4 steps ≈ 2,800px). Never 85svh per step.
- `scrub: 0.6` (never `true`: it feels like lag-free jank), `anticipatePin: 1`, `invalidateOnRefresh: true`.
- One timeline per story, labels per step, `ease: 'none'` inside a scrubbed timeline (the scroll is the ease).
- After fonts: `document.fonts.ready.then(() => ScrollTrigger.refresh())`.
- With Lenis (`html[data-smooth]`): the kit syncs it; don't create a second ticker.
- Good story verbs: a line drawn along the steps (DrawSVG, `stroke-dashoffset`), layers of a roof /
  wall / floor assembling in order, a measuring tape running out to a number, a map route traced through
  the service towns, a material sample flipping from worn to new (never a before/after of a real job).

## Signature moment
One effect only this site has, tied to its signature system, e.g. the section stamps "sealed", the job
sheet tears off, the grout lines draw across the section. 600-1200 ms, runs once, readable without it.

## Use the kit, don't rewrite it
`reveal`, `split`, `rotator` (2.6 s interval), `counters`, `marquee`, `video`, `pointer`
(`[data-magnetic]`, `[data-tilt]`, `[data-spotlight]`: fine pointer only), `compare`, `filter` (FLIP),
`lenis`. They already handle reduced motion. app.js is only for the stories and the signature moment.

## Reduced motion and JS off
- Reduced motion: no smooth scroll, no pins, no parallax, no autoplay video (poster shows), counters
  show the final number, rotator shows the first word, marquee static. Fades of ≤ 200 ms on opacity
  only are allowed.
- JS off: the page reads top to bottom with every image, the form shows step 1 with a "call instead" line.

## What costs points
Everything fading up the same way (monotone), a pin that lasts more than 3 screens, motion that
delays reading the h1, a parallax on body text, jank on the 390 frame, an effect with no verb.
