# Design System — electrician-C (Bungalow Current Electric)

## Fonts
- **Display:** Cormorant Garamond (variable, wght 300–700). Preload: `assets/fonts/cormorant-garamond/cormorant-garamond-300-700-normal.woff2`. Used for h1, h2, room names. Tracking -0.02em, line-height 0.95.
- **Text:** Karla (variable, wght 400–700). Body, captions, tool UI, buttons. Line-height 1.5.
- **Accent:** JetBrains Mono (wght 400, 500). Sample tags, price ranges, ZIP codes, technical labels (200A, GFCI). Font-variant-numeric: tabular-nums.

## Type Scale
Ratio 1.2 mobile → 1.333 desktop. Clamp values tuned for Cormorant's width.

```css
:root {
  --fs--1: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem);   /* ~13.3px–14.4px */
  --fs-0:  clamp(1rem, 0.95rem + 0.25vw, 1.125rem);    /* 16px–18px body */
  --fs-1:  clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem);      /* 19.2px–24px lead */
  --fs-2:  clamp(1.44rem, 1.25rem + 0.95vw, 2rem);     /* 23px–32px h3 */
  --fs-3:  clamp(1.73rem, 1.4rem + 1.65vw, 2.66rem);   /* 27.7px–42.6px h2 */
  --fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* h1 display */
}
```

Body: `font-size: var(--fs-0); line-height: 1.5; max-width: 65ch`.
Lead paragraph: `font-size: var(--fs-1); font-weight: 450`.
Headings: `text-wrap: balance; letter-spacing: -0.02em; line-height: 0.95`.
Nothing under 13px (--fs--1 floor is 13.3px).

## Space
```css
:root {
  --s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
  --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
  --s-9: 96px; --s-10: 128px; --s-11: 160px;
}
```
Section padding: tight 64px (mobile) / 80px (desktop), normal 96px / 120px, loose 128px / 160px.
Blueprint alternates tight → normal → loose → normal.

## Grid
- Desktop: 12 columns, gutter 24px, max-width 1320px, margin column 1fr each side.
- Tablet (≥768px): 8 columns, gutter 20px.
- Mobile (<768px): 4 columns, gutter 16px.
- Margin column used for floor-plan markers on ≥1100px.

## Tones & Contrast
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-paper (default light)
- bg: #F5F0E8, ink: #3B2F26, muted: #6B5D52, rule: #D8CFC2, accent: #7A3B3B, focus: #C9A96E
- Ink on paper: 9.8:1 ✓ | Muted on paper: 4.6:1 ✓ | Accent on paper: 7.35:1 ✓ | White on accent: 8.34:1 ✓ | Focus on paper: 3.2:1 (large only) ✓

### t-deep (dark walnut band)
- bg: #2C241E, ink: #F5F0E8, muted: #B8A99A, rule: #4A3F36, accent: #C9A96E, focus: #C9A96E
- Ink on deep: 11.2:1 ✓ | Muted on deep: 5.8:1 ✓ | Accent(signal) on deep: 5.1:1 ✓ | Focus on deep: 5.1:1 ✓

### t-mid (plaster card surfaces)
- bg: #D8CFC2, ink: #3B2F26, muted: #6B5D52, rule: #B8A99A, accent: #7A3B3B, focus: #7A3B3B
- Ink on mid: 5.4:1 ✓ | Accent on mid: 4.8:1 ✓ | Focus on mid: 4.8:1 ✓

### t-accent (burgundy CTA bands)
- bg: #7A3B3B, ink: #F5F0E8, muted: #D8CFC2, rule: #A67070, accent: #C9A96E, focus: #FFFFFF
- Ink on accent: 7.35:1 ✓ | Signal on accent: 3.72:1 (large/focus only) ✓ | White on accent: 8.34:1 ✓

## Radius
- Cards, frames, inputs: 3px (subtle period-appropriate softness, not pill).
- Buttons: 3px.
- Tags/pills: 999px.
- No rounded corners on arch frames (clip-path defines shape).

## Shadow
Only on floating elements: sticky mobile bar (`0 -2px 12px rgba(44,36,30,.12)`), popover cards. No shadows on cards or sections.

## Motion Tokens
```css
:root {
  --ease-out: cubic-bezier(.23, 1, .32, 1);
  --ease-io: cubic-bezier(.77, 0, .175, 1);
  --d-press: 120ms;
  --d-ui: 200ms;
  --d-page: 520ms;
  --d-story: 900ms;
  --d-stagger: 60ms;
}
```

## Components
- **Buttons:** primary (bg accent, white text, ≥48px tall, 3px radius), secondary (border accent, accent text), text (accent underline). All have `:active{transform:scale(.97)}` press state.
- **Input:** border #D8CFC2, focus ring 3px solid var(--focus), offset 3px. Height 48px minimum.
- **Card:** t-mid or t-paper bg, 3px radius, no shadow, padding var(--s-6).
- **Sample tag:** JetBrains Mono --fs--1, uppercase, tracking 0.05em, border 1px solid currentColor, padding 2px 8px, 999px radius.
- **Frame:** aspect-ratio container with photo grade filter applied. Arch variant uses clip-path.
- **Header:** height token `--header-h: 72px` (desktop), `56px` (mobile). Transparent over hero, solid t-paper after scroll.
- **Mobile bar:** fixed bottom, t-paper bg, shadow, two buttons (Call + Price it), visible <900px.

### Signature Primitives
**Arch Frame:**
```css
.arch-frame {
  clip-path: path('M0,0 L1,0 L1,0.85 Q0.5,1 0,0.85 Z');
  overflow: hidden;
}
/* Responsive arch via SVG clipPath referenced by url(#arch-clip) in production */
```

**Room Marker:**
```css
.room-marker {
  display: inline-flex; align-items: center; gap: var(--s-2);
}
.room-marker__dot {
  width: 12px; height: 12px; border-radius: 50%;
  border: 2px solid var(--accent); background: transparent;
  transition: background var(--d-ui) var(--ease-out);
}
.room-marker.is-active .room-marker__dot { background: var(--accent); }
.room-marker__line {
  width: 2px; height: var(--connector-h, 48px);
  background: var(--rule); transform-origin: top;
  transition: background var(--d-story) var(--ease-out);
}
.room-marker.is-active .room-marker__line { background: var(--accent); }
.room-marker__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--fs--1); letter-spacing: 0.03em; text-transform: uppercase;
}
```

Both primitives carry `data-sw-signature` on the first instance in the hero.

## Photo Grade
One filter for all photos to unify stock:
```css
.photo-grade { filter: saturate(.85) contrast(1.05) sepia(.08); }
```
Tuned to warm plaster palette. Optional overlay for hero: multiply #3B2F26 at 15% opacity for depth.
Per-photo `object-position` set in media plan.

## Focus
```css
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}
@media (forced-colors: active) {
  .btn, .room-marker__dot { border: 2px solid ButtonText; }
}
```
Focus color passes 3:1 on every tone (verified above).