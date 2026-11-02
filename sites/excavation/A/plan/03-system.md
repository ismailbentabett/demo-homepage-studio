# Design System — excavation-A

## Tokens

```css
:root {
  /* Palette */
  --c-ink: #1A1714;
  --c-paper: #E8E4DC;
  --c-accent: #D45A1F;
  --c-deep: #0F0D0B;
  --c-signal: #E8B04A;
  --c-mid: #3D3630;
  --c-muted: #9C9588;

  /* Type scale */
  --fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --fs-0: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --fs-1: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --fs-2: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --fs-3: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --fs-4: clamp(2.5rem, 1.8rem + 3vw, 4rem);
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem);

  /* Space */
  --s-1: 0.25rem;
  --s-2: 0.5rem;
  --s-3: 0.75rem;
  --s-4: 1rem;
  --s-5: 1.5rem;
  --s-6: 2rem;
  --s-7: 3rem;
  --s-8: 4rem;
  --s-9: 6rem;
  --sec-y: clamp(4rem, 8svh, 8rem);
  --sec-x: clamp(1.25rem, 5vw, 4rem);

  /* Motion */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-press: 120ms;
  --dur-ui: 200ms;
  --dur-page: 520ms;
  --dur-story: 900ms;
  --dur-stagger: 60ms;

  /* Header */
  --header-h: 64px;
}
```

## Tone classes

- `.t-deep`: bg `--c-deep`, ink `--c-paper`, muted `--c-muted`, accent `--c-accent`, rule `--c-mid`.
- `.t-light`: bg `--c-paper`, ink `--c-ink`, muted `--c-mid`, accent `--c-accent`, rule `--c-mid`.
- `.t-mid`: bg `--c-mid`, ink `--c-paper`, muted `--c-muted`, accent `--c-signal`, rule `--c-ink`.
- `.t-accent`: bg `--c-accent`, ink `--c-deep`, muted `--c-mid`, accent `--c-deep`, rule `--c-deep`.

## Components

- **Buttons:** primary (accent bg, deep ink, ≥48px tall), secondary (transparent bg, current ink border, ≥48px), text (no bg, underline on hover). All have `border-radius: 2px`.
- **Inputs:** 48px tall, 2px border, focus outline 3px solid accent offset 3px.
- **Cards:** no shadow, 1px rule border, padding `--s-5`.
- **Tags:** "Sample" label in mono, uppercase, small caps, accent border.
- **Frames:** photo containers with aspect-ratio, overflow hidden, shared grade filter.
- **Stake:** SVG wooden stake with ribbon, positioned absolute left margin (desktop) or top center (mobile).

## Photo grade

```css
filter: saturate(0.85) contrast(1.05) sepia(0.08);
```

Per-photo object-position set via inline style or class.

## Focus

```css
:focus-visible {
  outline: 3px solid var(--c-accent);
  outline-offset: 3px;
}
```

## Gating

Build adds `sw-js` and `sw-motion` to `<html>`. Hidden-before-reveal styles live under `.sw-motion` only.