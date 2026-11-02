# Design System — moving-C (Kestrel Moving & Haul)

## Type scale

```css
:root {
  --ff-display: "Newsreader", serif;
  --ff-text: "Albert Sans", sans-serif;
  --ff-accent: "DM Mono", monospace;

  --fs--1: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.95rem, 0.9rem + 0.3vw, 1.0625rem);
  --fs-1: clamp(1.1rem, 1rem + 0.5vw, 1.3rem);
  --fs-2: clamp(1.4rem, 1.2rem + 1vw, 1.8rem);
  --fs-3: clamp(1.8rem, 1.5rem + 1.5vw, 2.4rem);
  --fs-4: clamp(2.2rem, 1.8rem + 2vw, 3rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem);

  --lh-tight: 1.1;
  --lh-heading: 1.2;
  --lh-body: 1.55;
}
```

Headings use `font-family: var(--ff-display)` with `text-wrap: balance`. Body uses `var(--ff-text)` with `text-wrap: pretty` and measure 60-72ch. Accent numbers (distances, elevations, prices, ZIPs) use `var(--ff-accent)` with `font-variant-numeric: tabular-nums`. Lead paragraph: `--fs-1`, weight 450, `"opsz" 24` on Newsreader.

## Space

```css
:root {
  --s-1: 0.25rem;
  --s-2: 0.5rem;
  --s-3: 0.75rem;
  --s-4: 1rem;
  --s-5: 1.5rem;
  --s-6: 2rem;
  --s-7: 3rem;
  --s-8: 4rem;
  --s-9: 6rem;

  --sec-y: clamp(4rem, 6vw, 7rem);
  --sec-x: clamp(1.25rem, 4vw, 3rem);
  --header-h: 4rem;
}
```

## Tone classes

Each sets background, ink, muted, rule and accent so components never pick colors.

| Class | Background | Ink | Muted | Rule | Accent | Use |
|---|---|---|---|---|---|---|
| `t-light` | #F4EDE4 (sand) | #1A1F24 (ink) | #6B7280 | #D4CBC0 | #3D6B5E (spruce) | default paper sections |
| `t-paper` | #FFFDF9 | #1A1F24 | #6B7280 | #E8E0D6 | #3D6B5E | lighter cards, form |
| `t-mid` | #E8DDD0 | #1A1F24 | #5C6370 | #C8BEB2 | #3D6B5E | subtle contrast bands |
| `t-deep` | #2C3E50 | #F4EDE4 | #A0AAB4 | #3D5060 | #5B8FA8 (sky) | dark sections |
| `t-accent` | #3D6B5E | #F4EDE4 | #B8CCCA | #2D5548 | #B85C3A (sandstone) | color band, CTA emphasis |

Never two `t-deep` touching. Never three same tone in a row.

## Motion tokens

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;
}
```

No bounce, no elastic. All hidden-before-reveal styles under `.sw-motion` only.

## Focus

```css
:focus-visible {
  outline: 3px solid #3D6B5E;
  outline-offset: 3px;
}
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
}
```

Spruce (#3D6B5E) passes 3:1 on sand and paper backgrounds. Sky (#5B8FA8) used for focus on deep backgrounds.

## Components

- **Buttons:** ≥48px tall. Primary: sandstone bg, sand text. Secondary: spruce border, spruce text on light; sky border on dark. Ghost: text only with underline hover.
- **Inputs:** 48px height, 1px rule border, 8px radius. Focus ring matches :focus-visible.
- **Cards:** 1px rule border on light, subtle shadow on paper. No rounded corners mixed with square — all 4px radius site-wide.
- **Sample tag:** Small uppercase label in muted color with 1px border: `<span class="sample-tag">Sample pricing</span>`.
- **Route line:** SVG path stroke 2px spruce on light, sky on dark. Pins are 12px circles filled sandstone. Distance labels in DM Mono at --fs--1.
- **Frames:** Photo containers with aspect-ratio, overflow hidden. Grade applied to every img.
- **Header:** Sticky, transparent → sand bg on scroll. Logo left, nav center, call right. Progress bar top edge.
- **Mobile bar:** Sticky bottom under 900px. Call + Price it buttons. Hides on scroll down and when #contact visible.

## Photo grade

```css
img, video[poster] {
  filter: saturate(0.85) contrast(1.05) sepia(0.08) hue-rotate(-2deg);
}
```

Warm Colorado light: slight sepia, tiny cool shift to keep red rocks natural without orange oversaturation. Applied globally. Per-photo object-position in 05-media.md.