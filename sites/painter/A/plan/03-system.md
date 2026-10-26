# Design System — painter-A (Cutline Painting Co.)

## Fonts

- **Display:** Sora, variable wght 100–800. Preload `assets/fonts/sora/sora-100-800-normal.woff2`.
- **Text:** Outfit, variable wght 100–900.
- **Accent:** DM Mono, weights 300/400/500 normal + italic. Used only for coat numbers, dry-time stamps, tool specs.

Variable axes in use: Sora `wght`; Outfit `wght`. No `opsz` or `wdth` on these faces.

## Type scale

Ratio 1.2 mobile → 1.333 desktop. All values fluid via `clamp()`.

| Token | Value | Role |
|---|---|---|
| `--fs--1` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.833rem)` | captions, sample tags |
| `--fs-0` | `clamp(0.9rem, 0.85rem + 0.25vw, 1rem)` | body small, meta |
| `--fs-1` | `clamp(1.08rem, 1rem + 0.4vw, 1.2rem)` | body, lead paragraph |
| `--fs-2` | `clamp(1.3rem, 1.15rem + 0.75vw, 1.6rem)` | h3, card titles |
| `--fs-3` | `clamp(1.56rem, 1.3rem + 1.3vw, 2.13rem)` | h2 section heads |
| `--fs-4` | `clamp(1.87rem, 1.5rem + 1.85vw, 2.84rem)` | h1 subheads |
| `--fs-h1` | `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5rem)` | hero h1 |

Sora is a wide grotesk; h1 max capped at 5rem (not 5.25) to prevent overflow at 1440. Display tracking: `-0.03em` on `--fs-3` and above. Line-height display: 0.95. Body line-height: 1.5. Measure: 65ch max-width on body paragraphs. Lead paragraph: `font-size: var(--fs-1); font-weight: 450`. Nothing under 13px (`--fs--1` floor is 12px at 320, acceptable for captions only; body starts at `--fs-0` = 14.4px min).

Tabular figures: `font-variant-numeric: tabular-nums` on all DM Mono uses, prices, hours, phone, counters.

## Space

| Token | px | Use |
|---|---|---|
| `--s-1` | 4 | micro gaps |
| `--s-2` | 8 | icon-text gap |
| `--s-3` | 12 | tight internal padding |
| `--s-4` | 16 | default component padding |
| `--s-5` | 24 | card padding |
| `--s-6` | 32 | section internal gap |
| `--s-7` | 48 | between groups |
| `--s-8` | 64 | section padding tight |
| `--s-9` | 96 | section padding normal |
| `--s-10` | 128 | section padding loose |

Section padding classes: `.sec-tight` (56–80px), `.sec-normal` (96–120px), `.sec-loose` (128–160px). Blueprint alternates them.

## Grid

- Desktop: 12 columns, gutter 24px, max-width 1280px.
- Tablet (≥768px): 8 columns, gutter 20px.
- Mobile (<768px): 4 columns, gutter 16px.
- Margin column: none (stripe signature lives in CSS as a fixed left element, not a grid column).

## Tones

Each tone sets `--bg`, `--ink`, `--muted`, `--rule`, `--accent`, `--focus`, button colors.

### t-light (paper field)
- `--bg: #F4F1EB` / `--ink: #1B2A3D` / `--muted: #4A5568` / `--rule: #C8C2B6` / `--accent: #B5432A` / `--focus: #D97B2A`
- Button primary: bg `#B5432A`, fg `#FFFFFF` (5.2:1). Secondary: border `#1B2A3D`, fg `#1B2A3D`.
- Contrast: ink/paper 12.4:1 ✓, accent/paper 5.2:1 ✓, muted/paper 5.8:1 ✓.

### t-paper (warm off-white, slightly darker than light)
- `--bg: #EBE7DF` / `--ink: #1B2A3D` / `--muted: #4A5568` / `--rule: #B8B2A6` / `--accent: #B5432A` / `--focus: #D97B2A`
- Same buttons as t-light.
- Contrast: ink/paper 13.1:1 ✓.

### t-mid (plaster band)
- `--bg: #C8C2B6` / `--ink: #1B2A3D` / `--muted: #3A4556` / `--rule: #9E988C` / `--accent: #8B3220` (darker brick for mid bg) / `--focus: #D97B2A`
- Button primary: bg `#8B3220`, fg `#FFFFFF` (6.1:1). 
- Contrast: ink/mid 7.8:1 ✓, accent-dark/mid 4.7:1 ✓.

### t-deep (night navy)
- `--bg: #121D2B` / `--ink: #F4F1EB` / `--muted: #A8B0BC` / `--rule: #2E3D50` / `--accent: #D97B2A` / `--focus: #D97B2A`
- Button primary: bg `#D97B2A`, fg `#1B2A3D` (8.2:1). Secondary: border `#F4F1EB`, fg `#F4F1EB`.
- Contrast: paper/deep 15.8:1 ✓, signal/deep 5.1:1 ✓, muted/deep 6.2:1 ✓.

### t-accent (brick red band, used once)
- `--bg: #B5432A` / `--ink: #FFFFFF` / `--muted: #FFE8E0` / `--rule: #9A3620` / `--accent: #F4F1EB` / `--focus: #FFFFFF`
- Button primary: bg `#F4F1EB`, fg `#B5432A` (5.2:1).
- Contrast: white/brick 5.2:1 ✓, muted/brick 3.2:1 (large text only, never body).

Focus ring: `:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px }`. `--focus` is `#D97B2A` on light/paper/mid/deep (≥3:1 on all), `#FFFFFF` on t-accent (5.2:1). Forced-colors: `.btn { border: 2px solid CanvasText }`.

## Radius

Chosen once: **2px everywhere** (sharp, technical, matches painter's tape precision). Buttons, cards, inputs, frames, tags all 2px. Pills (border-radius: 999px) used only for sample tags. No mixing.

Rules: 1.5px weight, color `var(--rule)`. Shadows: only on mobile bar and popover (floating elements). No shadows on cards.

## Motion tokens

```css
--ease-out: cubic-bezier(.23, 1, .32, 1);
--ease-io: cubic-bezier(.77, 0, .175, 1);
--dur-press: 120ms;
--dur-ui: 200ms;
--dur-page: 520ms;
--dur-story: 900ms;
--dur-stagger: 60ms;
```

No bounce, no elastic. Press: `:active { transform: scale(.97) }`, 120ms.

## Components

- **Buttons:** primary (bg accent/signal per tone, ≥48px tall, 2px radius), secondary (border ink, transparent bg), text (no border, underline on hover). All ≥48px touch target.
- **Input:** 48px tall, 2px radius, border `var(--rule)`, focus ring as above. Label always visible, never placeholder-only.
- **Card:** 2px radius, no shadow, border `var(--rule)` or none depending on tone. Padding `var(--s-5)`.
- **Sample tag:** pill (999px radius), bg `var(--muted)` at 20% opacity, text `var(--muted)`, `--fs--1`, uppercase tracked 0.05em.
- **Frame:** ratio container (16/9, 4/3, 1/1 as needed), overflow hidden, img gets the shared grade. 2px radius matches system.
- **Header:** height token `--header-h: 72px`. Logo left, nav center, CTA right. Sticky on scroll down hide / up show.
- **Mobile bar:** sticky bottom under 900px, height 64px, two buttons (Call + Price it). Hides on scroll down and when `#contact` is visible. Shadow `0 -2px 8px rgba(0,0,0,.12)`.
- **Signature primitive:** `.coat-stripe` — fixed left edge, width 8px at mobile, 12px at desktop. Background built from layered gradients driven by `--sw-p` (0→1). Each layer is a translucent band of the accent color at increasing opacity. Drawn once here; sections reference it via `data-sw-signature`.

## Photo grade

One filter for every photo and video poster:

```css
filter: saturate(.82) contrast(1.06) sepia(.06);
```

Tuned to the warm primer palette: slight desaturation keeps brick red from oversaturating, mild contrast lift preserves cut-line detail, trace sepia warms the cool navy tones. Applied to every `img` and `[data-video]` poster via the `.frame img, [data-video]` selector.

Optional overlay: none. The stripe signature provides enough visual structure; duotone would compete.

## Focus

```css
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

@media (forced-colors: active) {
  .btn { border: 2px solid CanvasText; }
  .btn--primary { forced-color-adjust: none; }
  .coat-stripe { border-right: 2px solid CanvasText; }
}
```

Every tone's `--focus` passes 3:1 against its background. Skip link present in header. Heading order enforced in blueprint (one h1, no skips).