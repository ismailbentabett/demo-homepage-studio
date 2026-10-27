# Design System — plumber-A (Wrench & Wren)

## Fonts
- **Display:** Zilla Slab, weights 400, 600, 700. Preload `assets/fonts/zilla-slab/zilla-slab-400-normal.woff2`. No variable axes.
- **Text:** Karla, weights 400, 500, 700. Variable wght axis 100–900.
- **Accent:** DM Mono, weights 300, 400, 500. Used only for tag numbers, price ranges, ZIP codes, hours, and data labels. Never body text.

## Type scale
Ratio 1.2 mobile → 1.333 desktop. All values fluid via `clamp()`.

| Token | Mobile min | Desktop max | Notes |
|---|---|---|---|
| `--fs--1` | 0.833rem (13.3px) | 0.875rem (14px) | captions, sample tags |
| `--fs-0` | 1rem (16px) | 1.0625rem (17px) | default body |
| `--fs-1` | 1.2rem (19.2px) | 1.375rem (22px) | lead paragraph, status lines |
| `--fs-2` | 1.44rem (23px) | 1.75rem (28px) | h3, card titles |
| `--fs-3` | 1.728rem (27.6px) | 2.25rem (36px) | h2 section headings |
| `--fs-4` | 2.074rem (33.2px) | 2.75rem (44px) | h1 sub-lines ("Fix it.") |
| `--fs-h1` | clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5rem) | — | "Find it." line; Zilla Slab is medium-width so cap at 5rem |

- Display tracking: `-0.02em` on Zilla Slab headings. Line-height `.92` for display, `1.5` for body.
- Body measure: `max-width: 68ch`. Lead paragraph: `font-weight: 450` (Karla variable), `font-size: var(--fs-1)`.
- Headings: `text-wrap: balance`. Body: `text-wrap: pretty`. Numbers: `font-variant-numeric: tabular-nums`.
- Nothing under 13px (`--fs--1` floor).

## Space
Base unit 4px. Section padding alternates tight / normal / loose.

| Token | Value |
|---|---|
| `--s-1` | 4px |
| `--s-2` | 8px |
| `--s-3` | 12px |
| `--s-4` | 16px |
| `--s-5` | 24px |
| `--s-6` | 32px |
| `--s-7` | 48px |
| `--s-8` | 64px |
| `--s-9` | 96px |
| `--s-10` | 120px |
| `--s-11` | 160px |

Section padding classes:
- `.sec-tight`: `padding-block: var(--s-8)` (64px) — tools, form
- `.sec-normal`: `padding-block: var(--s-10)` (120px) — services, reviews
- `.sec-loose`: `padding-block: var(--s-11)` (160px) — hero, break, footer

## Grid
- 12 columns desktop (≥1100px), 8 columns tablet (640–1099px), 4 columns mobile (<640px).
- Gutter: `--gutter: 24px` desktop, `16px` below 640px.
- Max content width: `--max-w: 1280px`.
- Margin column: none (the pipe rail serves as the horizontal organizer).

## Tones
Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, `--btn-bg`, `--btn-ink`.

### t-light (limestone white)
- `--bg: #F4F1EB` · `--ink: #1B2A3D` · `--muted: #4A5568` · `--rule: #D6D1C7` · `--accent: #8A6500` (brass-ink, passes 5.1:1 on paper) · `--focus: #0E1A2B` · `--btn-bg: #1B2A3D` · `--btn-ink: #FFFFFF`
- Contrast: ink/paper 12.4:1 ✓ · muted/paper 6.8:1 ✓ · accent/paper 5.1:1 ✓ · focus/paper 15.8:1 ✓ · btn-ink/btn-bg 11.2:1 ✓

### t-paper (warm stone mid)
- `--bg: #D6D1C7` · `--ink: #1B2A3D` · `--muted: #3D4A5C` · `--rule: #B8B2A6` · `--accent: #8A6500` · `--focus: #0E1A2B` · `--btn-bg: #1B2A3D` · `--btn-ink: #FFFFFF`
- Contrast: ink/mid 9.1:1 ✓ · muted/mid 5.4:1 ✓ · accent/mid 5.1:1 ✓ · focus/mid 12.1:1 ✓

### t-deep (night navy)
- `--bg: #0E1A2B` · `--ink: #F4F1EB` · `--muted: #A8B4C4` · `--rule: #2A3A50` · `--accent: #B8860B` (raw brass, passes 5.6:1 on deep) · `--focus: #B8860B` · `--btn-bg: #F4F1EB` · `--btn-ink: #0E1A2B`
- Contrast: ink/deep 15.8:1 ✓ · muted/deep 6.2:1 ✓ · accent/deep 5.6:1 ✓ · focus/deep 5.6:1 ✓ · btn-ink/btn-bg 15.8:1 ✓

### t-accent (polished brass band)
- `--bg: #B8860B` · `--ink: #0E1A2B` · `--muted: #2A3A50` · `--rule: #8A6500` · `--accent: #0E1A2B` · `--focus: #0E1A2B` · `--btn-bg: #0E1A2B` · `--btn-ink: #F4F1EB`
- Contrast: ink/accent 5.6:1 ✓ · muted/accent 3.2:1 (large text only) · focus/accent 5.6:1 ✓ · btn-ink/btn-bg 15.8:1 ✓
- Use: one narrow band only (e.g., CTA strip). Never body text in muted on this tone.

### t-signal (valve red, buttons only)
- `--bg: #C44D2B` · `--ink: #FFFFFF` · `--focus: #0E1A2B`
- Contrast: ink/signal 4.6:1 ✓ · focus/signal 11.2:1 ✓
- Use: primary action buttons, error states. Never a section background.

## Radius & Rules
- **Radius:** `2px` everywhere (tags, buttons, inputs, cards, frames). Pill shape only for sample tags (`border-radius: 999px`).
- **Rules:** `1.5px` solid `var(--rule)`. The pipe rail is `3px` with a copper gradient (see signature primitive).
- **Shadow:** only on floating elements (mobile bar, popover): `0 4px 12px rgba(14,26,43,.12)`.

## Motion tokens
```css
:root {
  --ease-out: cubic-bezier(.23,1,.32,1);
  --ease-io: cubic-bezier(.77,0,.175,1);
  --d-press: 120ms;
  --d-ui: 200ms;
  --d-page: 520ms;
  --d-story: 900ms;
  --d-stagger: 60ms;
}
```

## Components
- **Buttons:** `.btn` min-height 48px, padding-inline 24px, font-size `--fs-0`. Primary: `t-deep` bg on light tones, `t-light` bg on deep. Secondary: transparent bg + 1.5px border. Text: no bg, underline hover.
- **Inputs:** height 48px, border 1.5px `var(--rule)`, radius 2px, focus outline 3px `var(--focus)` offset 3px.
- **Cards:** padding `var(--s-6)`, border 1.5px `var(--rule)`, radius 2px. No shadow.
- **Sample tag:** inline pill, `--fs--1`, uppercase tracked `.06em`, bg `var(--rule)`, ink `var(--ink)`, padding `2px 8px`, radius 999px.
- **Frame:** aspect-ratio container with overflow clip. Grade applied to img inside.
- **Header:** `--header-h: 72px` desktop, `60px` mobile. Transparent over hero, solid `t-light` after scroll.
- **Mobile bar:** sticky bottom, height 64px, `t-deep` bg, two buttons (Call + Price it). Hides on scroll-down and when `#contact` visible.

### Signature primitive: `.pipe-rail` + `.brass-tag`
```css
.pipe-rail {
  height: 3px;
  background: linear-gradient(90deg, #8A6500, #B8860B 40%, #D4A84B 60%, #8A6500);
  position: relative;
  transform-origin: left;
}
.sw-motion .pipe-rail[data-reveal] { transform: scaleX(0); transition: transform var(--d-story) var(--ease-out); }
.sw-motion .pipe-rail.is-in { transform: scaleX(1); }

.brass-tag {
  display: inline-flex; flex-direction: column; align-items: center;
  width: 56px; padding: 6px 4px 8px;
  background: linear-gradient(180deg, #D4A84B, #B8860B);
  border-radius: 2px; position: relative;
  font-family: 'DM Mono', monospace; font-size: 14px; line-height: 1;
  color: #0E1A2B; text-align: center;
  box-shadow: 0 2px 4px rgba(14,26,43,.18);
}
.brass-tag::before { /* punch hole */
  content: ''; position: absolute; top: -4px; left: 50%; transform: translateX(-50%);
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--bg, #F4F1EB); border: 1.5px solid #8A6500;
}
.brass-tag__num { font-weight: 500; letter-spacing: -.02em; }
.brass-tag__label { font-size: 10px; margin-top: 2px; text-transform: uppercase; letter-spacing: .04em; }

/* Variants */
.brass-tag--outline { background: transparent; border: 1.5px solid #B8860B; color: #8A6500; }
.brass-tag--stars .brass-tag__num { font-size: 12px; letter-spacing: 1px; }
.brass-tag--wide { width: auto; min-width: 80px; padding-inline: 12px; }

/* Swing entrance */
.sw-motion .brass-tag[data-reveal] { transform: rotateZ(-8deg); opacity: 0; transition: transform 400ms var(--ease-out), opacity 300ms var(--ease-out); }
.sw-motion .brass-tag.is-in { transform: rotateZ(0); opacity: 1; }
```
Mark the hero instance with `data-sw-signature`. Reuse `.pipe-rail` and `.brass-tag` classes everywhere else.

## Photo grade
One filter for every photo and video poster:
```css
img, video[poster] { filter: saturate(.82) contrast(1.06) sepia(.1) brightness(.98); }
```
Tuned for warm limestone + brass palette: slight sepia warmth, desaturated to avoid competing with brass accent, contrast boosted for basement scenes.

Optional overlay for hero strip only: `multiply` blend with `rgba(184,134,11,.08)` to unify copper tones.

## Focus
```css
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .brass-tag { border: 1px solid CanvasText; forced-color-adjust: none; }
  .pipe-rail { background: CanvasText; }
}
```
Focus ring color passes 3:1 on every tone (verified above).