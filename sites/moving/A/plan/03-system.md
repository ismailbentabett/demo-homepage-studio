# Design System — moving-A (Tag & Lift Moving)

## Type scale

```css
:root {
  --ff-display: 'Antonio', sans-serif;
  --ff-text: 'Public Sans', sans-serif;
  --ff-mono: 'DM Mono', monospace;

  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-body: 1.55;
  --lh-loose: 1.7;

  --ls-tight: -0.02em;
  --ls-normal: 0;
  --ls-wide: 0.04em;
}
```

Headings use `text-wrap: balance`; body uses `text-wrap: pretty`. Measure capped at 68ch for body text. Lead paragraph uses `--fs-1` with weight 450 where the face supports it.

## Space

```css
:root {
  --s-1: 0.25rem;   /* 4px */
  --s-2: 0.5rem;    /* 8px */
  --s-3: 0.75rem;   /* 12px */
  --s-4: 1rem;      /* 16px */
  --s-5: 1.5rem;    /* 24px */
  --s-6: 2rem;      /* 32px */
  --s-7: 3rem;      /* 48px */
  --s-8: 4rem;      /* 64px */
  --s-9: 6rem;      /* 96px */

  --sec-y: clamp(3rem, 6svh, 6rem);
  --sec-x: clamp(1rem, 4vw, 3rem);
  --header-h: 64px;
  --mobilebar-h: 56px;
}
```

## Tone classes

Each tone sets background, ink, muted ink, rule color, and accent so components never pick colors themselves.

```css
.t-light {
  --bg: var(--c-paper);
  --ink: var(--c-ink);
  --ink-muted: var(--c-muted);
  --rule: var(--c-rule);
  --accent: var(--c-accent);
  background: var(--bg);
  color: var(--ink);
}

.t-paper {
  --bg: #EDE8DF;
  --ink: var(--c-ink);
  --ink-muted: var(--c-muted);
  --rule: var(--c-rule);
  --accent: var(--c-accent);
  background: var(--bg);
  color: var(--ink);
}

.t-mid {
  --bg: #D8D0C4;
  --ink: var(--c-ink);
  --ink-muted: #4A443C;
  --rule: #B8B0A4;
  --accent: var(--c-accent);
  background: var(--bg);
  color: var(--ink);
}

.t-deep {
  --bg: var(--c-deep);
  --ink: var(--c-paper);
  --ink-muted: #A8A098;
  --rule: #4A443C;
  --accent: var(--c-signal);
  background: var(--bg);
  color: var(--ink);
}

.t-accent {
  --bg: var(--c-accent);
  --ink: #FFFFFF;
  --ink-muted: rgba(255,255,255,0.8);
  --rule: rgba(255,255,255,0.3);
  --accent: #FFFFFF;
  background: var(--bg);
  color: var(--ink);
}
```

## Color tokens

```css
:root {
  --c-paper: #F5F0E8;
  --c-ink: #1A1814;
  --c-accent: #C45A1C;
  --c-deep: #2B2520;
  --c-signal: #E8A840;
  --c-muted: #6B6358;
  --c-rule: #D8D0C4;
}
```

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

No bounce, no elastic. All motion gated under `.sw-motion`.

## Gating

The build adds `sw-js` and `sw-motion` to `<html>` before first paint. Every hidden-before-reveal style lives under `.sw-motion` only. Without JS or with reduced motion, all content is visible and complete.

## Focus

```css
:focus-visible {
  outline: 3px solid var(--c-accent);
  outline-offset: 3px;
}

@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
}
```

## Components

### Buttons
- Primary: `--c-accent` bg, white text, ≥48px tall, radius 2px.
- Secondary: transparent bg, `--c-accent` border and text, ≥48px tall.
- Ghost: no border, `--c-accent` text, underline on hover.
- Press: `:active { transform: scale(0.97); transition: var(--dur-press); }`

### Tags (inventory tag signature)
```css
.tag {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--s-3) var(--s-4);
  background: var(--c-paper);
  border: 1.5px solid var(--c-rule);
  border-radius: 2px;
  position: relative;
  font-family: var(--ff-mono);
}
.tag::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--c-rule);
  position: absolute;
  top: -4px;
  left: var(--s-4);
  background: var(--bg, var(--c-paper));
}
.tag__num {
  font-family: var(--ff-display);
  font-size: var(--fs-2);
  line-height: var(--lh-tight);
  color: var(--c-accent);
}
.tag__room {
  font-size: var(--fs--1);
  letter-spacing: var(--ls-wide);
  text-transform: uppercase;
}
.tag__cond {
  font-size: var(--fs--1);
  color: var(--ink-muted);
}
```

### Frames
Photo containers with aspect ratio and shared grade:
```css
.frame img, .vid video, .vid poster {
  filter: saturate(0.85) contrast(1.05) sepia(0.08);
}
```

### Sample tag
```css
.sample-tag {
  display: inline-block;
  font-family: var(--ff-mono);
  font-size: var(--fs--1);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  padding: 2px 6px;
  border: 1px solid var(--c-rule);
  border-radius: 2px;
  color: var(--ink-muted);
  vertical-align: middle;
}
```

### Header
Sticky, 64px tall, paper background. Shows logo left, current tag number center (via signature), phone + CTA right. Hides on scroll down, shows on up.

### Mobile bar
Sticky bottom bar under 900px with call and "Price it" buttons. Hides when #contact form is visible.

## Photo grade

One shared filter for every photo:
```css
filter: saturate(0.85) contrast(1.05) sepia(0.08);
```
Warm palette keeps the sepia. Applied to every `img`, video poster, and frame fallback. Per-photo `object-position` set in media plan.