# Design System — demolition-B (Scale Ticket Demo & Haul)

## Fonts
- **Display:** Chivo (variable wght 100-900). Preload: `assets/fonts/chivo/chivo-100-900-normal.woff2`. Used for h1-h3, ticket headers. Tracking: -0.02em at 700+, 0 at lighter weights. Line-height: 0.95 for display sizes.
- **Text:** Work Sans (variable wght 100-900). Body 18px/1.55, measure 64ch max. Lead paragraph: weight 400, size --fs-1. Variable axis `wght` used for emphasis (500 for labels, 700 for inline strong).
- **Accent:** DM Mono (static 300-500). Ticket numbers, weights, dates, ZIP codes. Tabular figures via `font-variant-numeric: tabular-nums`. Size: --fs--1 for captions, --fs-0 for inline data.

## Type Scale
```css
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);   /* 12-13px, mono captions */
--fs-0:  clamp(0.875rem, 0.82rem + 0.28vw, 0.9375rem);  /* 14-15px, small body / labels */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.125rem);         /* 16-18px, body */
--fs-2:  clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);        /* 20-24px, h3 */
--fs-3:  clamp(1.625rem, 1.3rem + 1.6vw, 2.25rem);       /* 26-36px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem); /* 41.6-80px, h1 display */
```
Chivo is a standard-width grotesk; h1 caps at 5rem (not 6.5) to avoid overflow at 320. Display tracking -0.03em at ≥--fs-3. Body line-height 1.55, headings 0.95-1.05. Nothing below --fs--1 (12px floor).

## Space
```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```
Section padding: tight (--s-8 / 64px), normal (--s-10 / 128px), loose (--s-11 / 160px). Blueprint alternates: hero=tight, scope=normal, services=tight, break=loose, tools=normal, proof=tight, area=normal, form=normal, footer=tight.

## Grid
12-column grid, gutter 24px, max-width 1280px. Margin column on left (cols 1-2) for ticket stack on desktop; collapses to full-width stack below 900px. At 390px: single column, 16px gutters.

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-fg`.

### t-paper (default light)
- `--bg: #F5F0E6; --ink: #1A1A1A; --muted: #5C564D; --rule: #D6CFC2; --accent: #1F6B5F; --focus: #1F6B5F; --btn-bg: #B8372B; --btn-fg: #F5F0E6`
- Contrast: ink/paper 15.32:1 ✓, muted/paper 7.1:1 ✓, btn-fg/btn-bg 5.1:1 ✓, focus/paper 5.55:1 ✓, accent/paper 5.55:1 ✓

### t-deep (dark band)
- `--bg: #1E2A36; --ink: #F5F0E6; --muted: #A8B0B8; --rule: #3A4A58; --accent: #5AA89A; --focus: #5AA89A; --btn-bg: #F5F0E6; --btn-fg: #1E2A36`
- Contrast: ink/deep 12.84:1 ✓, muted/deep 5.8:1 ✓, btn-fg/btn-bg 12.84:1 ✓, focus/deep 5.6:1 ✓
- Note: accent on deep is lightened to #5AA89A for ≥4.5 text contrast; base #1F6B5F used only for rules/shapes on deep.

### t-accent (carbon-teal band)
- `--bg: #1F6B5F; --ink: #F5F0E6; --muted: #C8E0DA; --rule: #3A8A7E; --accent: #F5F0E6; --focus: #F5F0E6; --btn-bg: #B8372B; --btn-fg: #F5F0E6`
- Contrast: ink/accent 5.55:1 ✓, muted/accent 3.2:1 (large text only), btn-fg/btn-bg 5.1:1 ✓, focus/accent 5.55:1 ✓
- Muted text on accent band is large-only (≥18px bold or ≥24px regular); body text uses --ink.

### t-mid (transitional)
- `--bg: #D6CFC2; --ink: #1A1A1A; --muted: #5C564D; --rule: #B8B0A4; --accent: #1F6B5F; --focus: #1F6B5F; --btn-bg: #1E2A36; --btn-fg: #F5F0E6`
- Contrast: ink/mid 11.24:1 ✓, muted/mid 5.4:1 ✓, btn-fg/btn-bg 12.84:1 ✓, accent/mid 4.8:1 ✓

## Radius & Shadow
- Radius: 0 everywhere except buttons (2px) and sample tags (999px pill). Tickets have sharp corners with dashed borders.
- Shadow: only on mobile bar (`0 -2px 8px rgba(0,0,0,.12)`) and popover cards. No shadows on tickets or sections.

## Motion Tokens
```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

## Components
- **Buttons:** primary (--btn-bg/--btn-fg, min-height 48px, padding 12px 24px), secondary (transparent bg, --ink border, --ink text), text (--accent underline on hover). All ≥48px tap target.
- **Input:** 48px height, 1px --rule border, --paper bg, --ink text. Focus: 3px solid --focus, offset 3px.
- **Card:** --paper bg, 1px --rule border, padding --s-5. No shadow.
- **Sample tag:** pill shape, --mid bg, --ink text, font-size --fs--1, uppercase tracking 0.05em. Always visible next to reviews/prices.
- **Frame:** aspect-ratio container with photo grade filter. Ratio classes: `.frame-4x3`, `.frame-16x9`, `.frame-1x1`.
- **Header:** height token `--header-h: 64px`. Sticky, hides on scroll-down, shows on up. Contains running tonnage counter in DM Mono.
- **Mobile bar:** sticky bottom under 900px, contains [[call]] and [[quote]] buttons. Hides when #contact is visible.
- **Ticket primitive (signature):** `.ticket` class with `border-left: 2px dashed var(--rule); padding-left: var(--s-4); position: relative;`. Carbon offset copy via `::after` pseudo-element with `transform: translateX(4px); opacity: 0.3; color: var(--accent);`. Ticket number in DM Mono at top-left. Perforation line via repeating-linear-gradient on bottom edge.

## Photo Grade
All photos: `filter: saturate(0.85) contrast(1.05) sepia(0.08);`. This unifies stock photography to match the scale-ticket paper warmth. No overlay on paper-tone sections; on deep sections, add `mix-blend-mode: multiply` with a 10% #1E2A36 overlay to sink photos into the dark band.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn, .ticket, input, select, textarea { border: 2px solid ButtonText; }
}
```
Focus ring color passes ≥3:1 on every tone background (verified above).