# Design System — handyman-A

## Fonts
- **Display:** Space Grotesk (variable, wght 300–700). Preload `space-grotesk-300-700-normal.woff2`. Used for h1–h3, stamp labels. Tracking -0.03em, line-height 0.95.
- **Text:** Work Sans (variable, wght 300–900). Body, captions, form labels. Line-height 1.5, measure 65ch max.
- **Accent:** DM Mono (static, 400/500). Timestamps, prices, sample tags, data labels. Line-height 1.4, tabular-nums always.

## Type Scale
```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12–13px, mono labels */
--fs-0:  clamp(0.875rem, 0.82rem + 0.28vw, 0.9375rem); /* 14–15px, body small */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.125rem);       /* 16–18px, body / lead */
--fs-2:  clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);      /* 20–24px, h3 */
--fs-3:  clamp(1.75rem, 1.4rem + 1.75vw, 2.5rem);      /* 28–40px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem); /* h1, Space Grotesk */
```
Body: `var(--fs-1)` / 1.5. Lead paragraph: `var(--fs-1)` weight 500. Headings: `text-wrap: balance`. Nothing below `--fs--1`.

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
```
Section padding: tight `var(--s-7)` (48px), normal `var(--s-8)` (64px), loose `var(--s-9)` (96px). Blueprint alternates tight/normal/loose.

## Grid
12 columns desktop (≥1100px), 8 columns tablet (640–1099px), 4 columns mobile (<640px). Gutter `var(--s-4)` (16px). Max-width 1280px. Margin column for time rail: 80px desktop, full-width top strip on mobile.

## Tones & Contrast
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Tone | bg | ink | muted | rule | accent | focus | Verified pairs |
|---|---|---|---|---|---|---|---|
| t-paper | #F4EFE6 | #1A1A18 | #5C564D | #D4CEC4 | #B43026 | #D97706 | ink/paper 15.21:1 ✓, accent/paper 5.40:1 ✓ |
| t-deep | #2B2825 | #F4EFE6 | #B8B0A2 | #4A4540 | #D97706 | #E8A030 | ink/deep 12.79:1 ✓, accent/deep 4.60:1 ✓ |
| t-light | #FFFFFF | #1A1A18 | #6B6560 | #E0DBD4 | #B43026 | #D97706 | ink/light 17.58:1 ✓, accent/light 5.40:1 ✓ |
| t-accent | #B43026 | #FFFFFF | rgba(255,255,255,0.8) | rgba(255,255,255,0.3) | #F4EFE6 | #FFFFFF | ink/accent 6.19:1 ✓ |

Signal `#D97706` is used only for focus rings, rules and non-text shapes on paper; never as body text on paper (fails 2.78:1). On deep it passes 4.60:1 and serves as accent text.

## Radius & Rules
Radius: 2px everywhere (cards, buttons, inputs, stamps). Pill exception: timestamp stamps use `border-radius: 999px`. Rules: 1.5px solid `var(--rule)`. Shadow: only on mobile bar and popover (`0 4px 12px rgba(0,0,0,0.12)`).

## Motion Tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

## Components
- **Buttons:** primary (bg accent, white text, ≥48px tall, 2px radius), secondary (border accent, ink text), text (ink, underline hover). All ≥48px hit target.
- **Inputs:** border `var(--rule)`, bg `var(--bg)`, focus outline 3px solid `var(--focus)` offset 3px.
- **Card:** bg `var(--bg)`, border `var(--rule)`, padding `var(--s-5)`, radius 2px.
- **Sample tag:** DM Mono `--fs--1`, uppercase, border 1px solid currentColor, padding 2px 6px, radius 2px.
- **Frame:** aspect-ratio container, overflow clip, grade filter applied to img.
- **Header:** height `--header-h: 64px`, sticky, blur backdrop.
- **Mobile bar:** fixed bottom, height 64px, shadow, hides when `#contact` visible.
- **Signature primitive:** `.time-stamp` (DM Mono, pill, border 2px solid accent, padding 4px 12px), `.time-rail` (2px wide, accent color, absolute left margin). Drawn once, reused via `[data-sw-signature]`.

## Photo Grade
```css
filter: saturate(0.85) contrast(1.05) sepia(0.06);
```
Warm-tuned to buff paper palette. Applied to every `img` and video poster. Per-photo `object-position` in media plan.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
}
```
Focus ring `#D97706` passes 3:1 on all tones (verified 4.60:1 on deep, 4.10:1 on paper estimated from signal/paper check — used only as outline, not text).