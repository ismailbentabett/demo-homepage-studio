# Design System — pool-B (Clear Reading Pool Co.)

## Fonts
- **Display:** IBM Plex Mono (mono). Weights: 400, 500, 600. Preload: `assets/fonts/ibm-plex-mono/ibm-plex-mono-400-normal.woff2`. Variable axes: none (static weights). Used for h1-h3, all numeric labels, gauge markers, test-pad labels. Tracking: -0.02em on display sizes.
- **Text:** Outfit (grotesk). Variable axis: wght 300-900. Body weight: 400; lead paragraph: 300 at 1.1rem. Line-height: 1.5. Measure: 60-72ch.
- **Accent:** null (IBM Plex Mono serves as mono accent for data).

## Type scale
```css
--fs--1: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);   /* captions, mono labels */
--fs-0:  clamp(1rem, 0.95rem + 0.25vw, 1.125rem);     /* body */
--fs-1:  clamp(1.125rem, 1rem + 0.5vw, 1.375rem);      /* lead, h4 */
--fs-2:  clamp(1.375rem, 1.1rem + 1vw, 1.75rem);       /* h3 */
--fs-3:  clamp(1.75rem, 1.3rem + 1.5vw, 2.5rem);       /* h2 */
--fs-h1: clamp(2.4rem, min(8vw, 9svh) + 0.1rem, 4.5rem); /* h1 — mono, condensed feel allows tighter fit */
```
Display tracking: -0.03em. Display line-height: 0.95. Body line-height: 1.5. Nothing under 13px (--fs--1 floor is 12.8px at 320, rounds to 13px).

## Space
```css
--s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px;
```
Section padding: tight 64px (tools, proof), normal 96px (services, story), loose 128px (hero bottom, footer top). Blueprint alternates tight/normal/loose.

## Grid
12-column grid, gutter 24px, max-width 1280px. Margin column: none (gauge scales use full width). At 768px: 8 columns. At 480px: 4 columns, gutter 16px.

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

| Token | bg | ink | muted | rule | accent | focus | Notes |
|-------|----|-----|-------|------|--------|-------|-------|
| t-light | #ffffff | #1a2b3c | #5a6a7a | #d4d0c8 | #0e7c7b | #0e7c7b | Hero tool area, cards |
| t-paper | #f5f3ee | #1a2b3c | #5a6a7a | #d4d0c8 | #0e7c7b | #0e7c7b | Default body, services |
| t-mid | #e8e4db | #1a2b3c | #4a5a6a | #c4c0b8 | #0e7c7b | #0e7c7b | Alternating bands |
| t-deep | #1a2b3c | #f5f3ee | #a0aab4 | #2a3b4c | #0e7c7b (shapes only) | #d4a03c | Proof, CTA band |
| t-accent | #0e7c7b | #ffffff | #d0e8e8 | #0a6b6a | #f5f3ee | #ffffff | Rare highlight band |

Contrast verified: ink/paper 13.01:1, accent/paper 4.52:1, white/accent 5.01:1, ink/mid 11.37:1, signal/deep 4.62:1 (large text only). Accent on deep fails for text (2.87:1) — used only for gauge tracks, rules, and marker shapes on deep backgrounds.

## Radius
0px everywhere except buttons and interactive elements: 3px. Test pads: 2px. Gauge markers: 50% (circle). No pills.

## Shadow
Only on floating mobile bar and popovers: `0 2px 8px rgba(26,43,60,0.12)`. No shadows on cards or gauges.

## Motion tokens
```css
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--stagger: 60ms;
```

## Components
- **Buttons:** primary (teal bg, white text, ≥48px tall, 3px radius), secondary (transparent bg, teal border, teal text), text (teal, underline on hover). All ≥48px tap target.
- **Input:** 48px tall, 1px #d4d0c8 border, 3px radius, focus ring 3px solid var(--focus) offset 3px.
- **Card:** paper bg, 1px rule border, 3px radius, no shadow. Contains mini-gauge at bottom.
- **Sample tag:** inline pill, 1px border, mono font, uppercase, 0.75rem.
- **Frame:** aspect-ratio container with photo grade filter applied.
- **Header:** height token `--header-h: 64px`. Logo left, phone right, nav hidden on mobile.
- **Mobile bar:** sticky bottom, 56px tall, teal primary button + sms button, hides on scroll down and over #contact form.
- **Gauge scale primitive (.gauge-scale):** track (1px rule color), ideal band (shaded accent at 20% opacity), marker (filled accent circle, 12px). CSS custom properties: `--gauge-min`, `--gauge-max`, `--gauge-low`, `--gauge-high`, `--gauge-value`. Marker position computed via calc().
- **Test pad primitive (.test-pad):** rectangle 48×32px, 2px radius, fill set by `--pad-color` (yellow #e8c84a, coral #d4735e, violet #8b6aae, aqua #4abfbf, amber #d4a03c, teal #0e7c7b). Fills via clip-path wipe on scroll entry.

## Photo grade
One filter for every photo: `saturate(0.9) contrast(1.05) brightness(1.02) sepia(0.05)`. Bright, clean, daylight-balanced to match paper-white palette. No overlay on most photos; hero tool area uses no photo. Optional duotone (teal + paper) only on break photo if needed for contrast.

## Focus
`:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }`. On t-deep: `--focus: #d4a03c`. Forced-colors: button borders preserved, gauge markers get forced-colors border.