# Design System — plumber-C (Thawhouse Plumbing)

## Fonts

- **Display:** Fraunces (variable, opsz 9–144, wght 300–900). Preload `assets/fonts/fraunces/fraunces-300-900-normal.woff2`. Used for masthead, department names, h1/h2. Tracking -0.03em at display sizes, line-height 0.92.
- **Text:** Source Sans 3 (variable, wght 200–900). Body, letters, articles. Line-height 1.5, measure 62ch max. Lead paragraph: weight 450, opsz 24 where available.
- **Accent:** DM Mono (static 300/400/500). Page numbers, price ranges, sample tags, tool readouts. Letter-spacing 0.02em.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values fluid via clamp().

```
--fs--1: clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem);   /* 12-13px, captions */
--fs-0:  clamp(0.875rem, 0.82rem + 0.28vw, 1rem);      /* 14-16px, meta */
--fs-1:  clamp(1rem, 0.92rem + 0.4vw, 1.2rem);         /* 16-19px, body */
--fs-2:  clamp(1.2rem, 1.05rem + 0.75vw, 1.6rem);      /* 19-26px, lead/subhead */
--fs-3:  clamp(1.6rem, 1.3rem + 1.5vw, 2.4rem);        /* 26-38px, h3/h2 */
--fs-4:  clamp(2rem, 1.5rem + 2.5vw, 3.2rem);          /* 32-51px, h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem); /* hero masthead */
```

Display tracking: -0.03em. Body line-height: 1.5. Heading line-height: 0.92–1.0. Nothing under 13px rendered.

## Space

```
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px;
```

Section padding (vertical): tight `var(--s-8)` (64px), normal `var(--s-9)` (96px), loose `128px`. Blueprint alternates tight/normal/loose to create editorial rhythm. Horizontal gutter: `var(--s-4)` mobile, `var(--s-5)` tablet, `var(--s-6)` desktop.

## Grid

12-column grid, max-width 1280px, gutter `var(--s-5)` (24px). Margin column on ≥1100px: 1fr side margins for page-number rail overflow. Breakpoints: 640px (8-col), 900px (12-col).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors. Contrast ratios verified via `node tools/contrast.mjs`.

### t-paper (snow)
- `--bg: #F4F1EB; --ink: #1E2328; --muted: #5A6068; --rule: #D6D9DE; --accent: #B8372B; --focus: #B8372B`
- Button primary: bg `#B8372B`, ink `#FFFFFF` (ratio 5.1 ≥ 4.5 ✓)
- Body ink/paper: 14.9 ≥ 4.5 ✓
- Muted/paper: 5.8 ≥ 4.5 ✓

### t-deep (lake blue)
- `--bg: #0B2545; --ink: #F4F1EB; --muted: #A8B4C4; --rule: #1E3A5F; --accent: #D4880F; --focus: #D4880F`
- Button primary: bg `#B8372B`, ink `#FFFFFF` (ratio 5.1 ≥ 4.5 ✓)
- Body ink/deep: 13.8 ≥ 4.5 ✓
- Accent/deep (signal amber): 5.4 ≥ 4.5 ✓ (used for interactive indicators, not body text)
- Focus ring on deep: 5.4 ≥ 3 ✓

### t-mid (ice gray band)
- `--bg: #D6D9DE; --ink: #1E2328; --muted: #5A6068; --rule: #0B2545; --accent: #8C2A20; --focus: #8C2A20`
- Used only for short break bands between deep and paper. Never two dark bands adjacent.
- Body ink/mid: 10.2 ≥ 4.5 ✓

### t-accent (furnace red band)
- `--bg: #B8372B; --ink: #FFFFFF; --muted: #F4D9D5; --rule: #8C2A20; --accent: #F4F1EB; --focus: #FFFFFF`
- Reserved for one CTA band or classified header. White on accent: 5.1 ≥ 4.5 ✓

## Radius & Rules

- Radius: 2px everywhere (cards, buttons, inputs, frames). No pills except sample tags (999px).
- Rules: 1.5px solid `var(--rule)`. Department masthead rule is the signature primitive.
- Shadow: only on sticky mobile bar (`box-shadow: 0 -2px 8px rgba(11,37,69,0.12)`).

## Motion tokens

```
--ease-out: cubic-bezier(.23,1,.32,1);
--ease-io: cubic-bezier(.77,0,.175,1);
--d-press: 120ms;
--d-ui: 200ms;
--d-page: 520ms;
--d-story: 900ms;
--d-stagger: 60ms;
```

## Components

- **Buttons:** primary (bg accent, ink white, min-height 48px, padding 12px 24px), secondary (border accent, ink accent), text (ink accent, underline on hover). All ≥48px tap target.
- **Input:** border 1.5px `var(--rule)`, bg `var(--bg)`, focus outline 3px `var(--focus)` offset 3px.
- **Card:** border 1.5px `var(--rule)`, padding `var(--s-5)`, radius 2px. Classified cards use mono price range.
- **Sample tag:** DM Mono `--fs--1`, bg `var(--rule)`, ink `var(--ink)`, padding 2px 8px, radius 999px. Always visible next to prices, ratings, reviews.
- **Frame:** aspect-ratio container with photo grade applied. Ratios: 16/9 hero, 4/3 story, 1/1 gallery.
- **Header:** height `--header-h: 64px` mobile, `72px` desktop. Logo left, tel/sms right. Background `var(--bg)` of current tone.
- **Mobile bar:** sticky bottom, height 56px, primary CTA + tel icon. Shadow above.
- **Signature primitive:** `.dept-rule` — 1.5px lake-blue line with department name (small caps Fraunces `--fs-0`) left and page number (DM Mono `--fs-0`) right. `data-sw-signature` on first instance. Under `.sw-motion`: `clip-path: inset(0 100% 0 0)` → `inset(0)` driven by `--sw-p`.

## Photo grade

One filter for every photo:
```css
img, video { filter: saturate(.8) contrast(1.08) sepia(.06) hue-rotate(-4deg); }
```
Cool palette adjustment (drop warm sepia, shift toward lake blue). Optional overlay on hero: `linear-gradient(180deg, rgba(11,37,69,0.3) 0%, rgba(11,37,69,0) 60%)` to ensure masthead contrast.

## Focus

```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
  .dept-rule { border-bottom: 2px solid CanvasText; }
}
```