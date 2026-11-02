# Design System — junkremoval-A

## Tokens

### Type scale
```css
--ff-display: 'Barlow Condensed', sans-serif;
--ff-text: 'Public Sans', sans-serif;
--ff-mono: 'DM Mono', monospace;

--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* captions, mono labels */
--fs-0:  clamp(0.9rem, 0.85rem + 0.3vw, 1rem);          /* body */
--fs-1:  clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem);      /* lead, card titles */
--fs-2:  clamp(1.3rem, 1.1rem + 1vw, 1.75rem);          /* h3 */
--fs-3:  clamp(1.7rem, 1.3rem + 2vw, 2.5rem);           /* h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* h1, condensed */
```

Headings: `text-wrap: balance`. Body: `text-wrap: pretty`, measure 60-72ch. Lead paragraph: `font-size: var(--fs-1); font-weight: 450;` (Public Sans variable weight).

### Space
```css
--s-1: 0.25rem;  --s-2: 0.5rem;   --s-3: 0.75rem;  --s-4: 1rem;
--s-5: 1.5rem;   --s-6: 2rem;     --s-7: 3rem;     --s-8: 4rem;
--s-9: 6rem;
--sec-y: clamp(4rem, 8svh, 7rem);
--sec-x: clamp(1.25rem, 4vw, 3rem);
```

### Tone classes
Each sets background, ink, muted ink, rule color, accent. Components never pick colors themselves.

| Class | Background | Ink | Muted | Rule | Accent | Use |
|---|---|---|---|---|---|---|
| `.t-light` | `#ffffff` | `#1a2b2f` | `#4a5c60` | `#c8bfb0` | `#5a6b6f` | Default light sections |
| `.t-paper` | `#f0e9dc` | `#1a2b2f` | `#4a5c60` | `#c8bfb0` | `#5a6b6f` | Sand-paper inserts |
| `.t-mid` | `#d8d0c4` | `#1a2b2f` | `#3a4a4e` | `#a8a090` | `#5a6b6f` | Transition bands |
| `.t-deep` | `#1a2b2f` | `#f0e9dc` | `#a8b8bc` | `#3a4b4f` | `#5a6b6f` | Dark bands |
| `.t-accent` | `#5a6b6f` | `#f0e9dc` | `#f0d8c8` | `#e8a070` | `#1a2b2f` | Signal CTAs, one band only |

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

No bounce, no elastic.

### Gating
Build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion` only. Content is fully visible with JS off and with reduced motion.

### Focus
```css
:focus-visible {
  outline: 3px solid #5a6b6f;
  outline-offset: 3px;
}
@media (forced-colors: active) {
  button, a.button { border: 2px solid ButtonText; }
}
```

Accent `#5a6b6f` passes 3:1 on white, paper, mid and deep backgrounds.

### Components
- **Buttons:** primary (accent bg, paper text), secondary (paper bg, ink text, accent border), text (ink, underline on hover). Min-height 48px, padding ≥ 16px horizontal.
- **Inputs:** 48px tall, 1px rule border, focus ring matches global focus.
- **Cards:** paper or light bg, 1px rule border, 8px radius, shadow only on hover.
- **Tags:** "Sample" tag in mono, muted ink on paper bg, 24px tall.
- **Rules:** 1px solid `var(--rule)`, full width or contained.
- **Frames:** photo containers with aspect-ratio + shared grade filter.
- **Sticky mobile bar:** fixed bottom, accent bg, paper text, phone + "Get a number" buttons, z-index above content.
- **Header:** transparent on hero, paper bg on scroll, logo left, nav right (desktop), phone CTA always visible.

### Photo grade
Shared filter for all photos so stock looks like one shoot:
```css
filter: saturate(.85) contrast(1.05) sepia(.08);
```
Per-photo `object-position` set in media plan.