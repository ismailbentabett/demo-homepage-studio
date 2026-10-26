# Design System — autotuneup-B

## Fonts
- **Display:** Barlow Condensed (weights 600, 700). Preload `barlow-condensed-700-normal.woff2`.
- **Text:** Karla (variable, wght 300–800). Variable axis `wght` in use.
- **Accent:** DM Mono (weights 400, 500). Used for odometer digits, readings, prices, ZIP output.

## Type scale
```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12–13px, captions */
--fs-0:  clamp(0.9375rem, 0.875rem + 0.3vw, 1.0625rem); /* 15–17px, body */
--fs-1:  clamp(1.125rem, 1rem + 0.5vw, 1.375rem);       /* 18–22px, lead */
--fs-2:  clamp(1.375rem, 1.125rem + 1vw, 2rem);         /* 22–32px, h3 */
--fs-3:  clamp(1.75rem, 1.25rem + 2vw, 3rem);           /* 28–48px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* hero h1, condensed face allows tall stack */
```
- Display tracking: `-0.03em`. Line-height: `0.92`.
- Body: `--fs-0`, line-height `1.5`, measure `60–72ch`.
- Nothing under `--fs--1` (12px floor).

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
```
Section padding: tight `--s-7` (48px), normal `--s-8` (64px), loose `--s-9` (96px). Blueprint alternates tight/normal/loose.

## Grid
- Desktop: 12 columns, gutter 24px, max-width 1440px.
- Tablet: 8 columns, gutter 20px.
- Mobile: 4 columns, gutter 16px.
- Margin column: left 1-col reserved for odometer rail on desktop; collapses inline on mobile.

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Token | bg | ink | muted | rule | accent | focus | Contrast (body/large) |
|-------|----|-----|-------|------|--------|-------|-----------------------|
| t-light | #f4f1eb | #1a1d21 | #5a5e66 | #d4d0c8 | #0f5f7f | #0f5f7f | 15.00 / 15.00 ✓ |
| t-paper | #e6e2d8 | #1a1d21 | #5a5e66 | #c8c4ba | #0f5f7f | #0f5f7f | 13.07 / 13.07 ✓ |
| t-mid   | #d4d0c8 | #1a1d21 | #4a4e56 | #b8b4aa | #0f5f7f | #0f5f7f | 10.82 / 10.82 ✓ |
| t-deep  | #1a1d21 | #f4f1eb | #a8aab0 | #3a3d42 | #4da8cc | #4da8cc | 15.00 / 15.00 ✓ |
| t-accent| #0f5f7f | #ffffff | #d0e8f0 | #1a7fa0 | #ffffff | #ffffff | 7.08 / 7.08 ✓ |

Signal orange `#b53d0f` used only on t-light/t-paper/t-mid backgrounds for buttons and large pills (≥ 5.11:1). Never on t-deep.

## Radius & Shadow
- Radius: `2px` everywhere except buttons `4px` and pills `999px`.
- Shadow: only on sticky mobile bar (`0 -2px 8px rgba(0,0,0,0.08)`). No card shadows.

## Motion tokens
```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io:  cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui:    200ms;
--dur-page:  520ms;
--dur-story: 900ms;
--stagger:   60ms;
```

## Components
- **Buttons:** primary (signal bg, white text, ≥ 48px), secondary (outline accent), text (accent underline). All ≥ 48px tall.
- **Input:** mileage field with tabular-nums, mono digits, 48px height.
- **Card:** service card with odo-row header, no shadow, 2px top rule in accent.
- **Tag:** Sample label (mid-grey bg, ink text, mono type).
- **Frame:** photo container with 3:2 ratio, grade filter applied.
- **Header:** `--header-h: 64px`, logo left, phone right, nav center.
- **Mobile bar:** sticky bottom, call + text buttons, hides on scroll-down and over form.
- **Signature primitive:** `.odo-row` — flex row of six mono digit slots + status pill + label. Wipes via `clip-path: inset(0 100% 0 0)` → `inset(0)` driven by `--sw-p`.

## Photo grade
```css
filter: saturate(.85) contrast(1.05) sepia(.08);
```
Applied to every photo and video poster. No overlay.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) { button, a, input { border: 2px solid ButtonText; } }
```
Focus color passes 3:1 on every tone.