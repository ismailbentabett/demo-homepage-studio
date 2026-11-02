# Design system — farm-C (Sand Road Farm)

## Tokens

Copy these exactly into `src/style.css :root`.

```css
:root {
  /* palette */
  --c-ink: #2B2318;
  --c-paper: #F2E8D5;
  --c-accent: #2D6A5A;
  --c-deep: #1E1A14;
  --c-signal: #D4943A;
  --c-pine: #2D4A3E;

  /* type scale (mobile-first, clamp at 390 / 1440) */
  --fs--2: clamp(0.694rem, 0.66rem + 0.18vw, 0.8rem);
  --fs--1: clamp(0.833rem, 0.78rem + 0.27vw, 1rem);
  --fs-0: clamp(1rem, 0.93rem + 0.36vw, 1.25rem);
  --fs-1: clamp(1.2rem, 1.1rem + 0.5vw, 1.563rem);
  --fs-2: clamp(1.44rem, 1.28rem + 0.8vw, 1.953rem);
  --fs-3: clamp(1.728rem, 1.48rem + 1.24vw, 2.441rem);
  --fs-4: clamp(2.074rem, 1.7rem + 1.87vw, 3.052rem);
  --fs-5: clamp(2.488rem, 1.95rem + 2.69vw, 3.815rem);

  /* spacing */
  --sp-xs: clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem);
  --sp-sm: clamp(0.75rem, 0.65rem + 0.5vw, 1rem);
  --sp-md: clamp(1rem, 0.85rem + 0.75vw, 1.5rem);
  --sp-lg: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
  --sp-xl: clamp(2rem, 1.5rem + 2.5vw, 4rem);
  --sp-2xl: clamp(3rem, 2rem + 5vw, 6rem);

  /* layout */
  --header-h: 64px;
  --gutter: clamp(1rem, 0.5rem + 2.5vw, 2rem);
  --max-w: 1320px;

  /* motion */
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-io: cubic-bezier(.77, 0, .175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --stagger: 60ms;
}
```

## Tone classes

| Class | Background | Text | Use |
|---|---|---|---|
| `.t-paper` | `var(--c-paper)` | `var(--c-ink)` | Default body, services, proof |
| `.t-deep` | `var(--c-deep)` | `var(--c-paper)` | Season spreads, field-to-stand break |
| `.t-accent` | `var(--c-accent)` | `var(--c-paper)` | CTA bands, almanac active month |
| `.t-pine` | `var(--c-pine)` | `var(--c-paper)` | Footer, secondary bands |

## Components

- **Month marker:** `<span class="month-mark" data-month="mar">Mar</span>` — serif display, thin accent rule beneath, 3-letter abbreviation. Active state via `[data-active]` or parent `.is-active`.
- **Almanac rail:** horizontal scroll-snap container on desktop, stacked cards on mobile. Each card carries `.month-mark`, crop name, weather line, field photo.
- **Field frame:** `<figure class="frame">` with warm grade overlay; caption describes the frame, never invents a job.
- **Sample tag:** `<span class="sample-tag">Sample</span>` — small, honest, designed in.
- **Open-now badge:** `[data-open-now]` filled by kit; signal color on deep background.
- **Tool result:** live region with `aria-live="polite"`, mono numbers, pre-fill button to form.

## Section rhythm (blueprint gate)

Tone sequence must pass: no 3 same tones in a row, no two dark sections touching, ≥1 t-deep, ≥1 color band, ≥1 full-bleed .break.

Proposed sequence:
1. hero (t-paper) — cinematic field photo + month statement
2. open-now + hours (t-accent) — color band
3. season-spring (t-deep) — almanac spread
4. season-summer (t-paper) — almanac spread
5. field-to-stand (t-deep) — full-bleed .break photo wipe
6. season-harvest (t-paper) — almanac spread
7. services (t-paper) — grid with month pills
8. proof (t-deep) — reviews with month corners
9. season-winter (t-accent) — almanac spread + CTA
10. contact (t-paper) — multi-step form
11. footer (t-pine) — credits + disclaimer

## Signature hook

`data-sw-signature="almanac-month"` on every section that carries a month marker. The kit reads this and advances the active month via `--sw-p` as the visitor scrolls.