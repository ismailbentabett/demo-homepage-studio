# locksmith-A · Design system (copy into :root)

## Fonts
- Display **Antonio** 600/700, `assets/fonts/antonio/antonio-100-700-normal.woff2` → **preload** (only preload).
- Text **Source Sans 3** 400/600 (+ 450 lead), `source-sans-3-200-900-normal.woff2`. No italic file: never set italic.
- Accent **JetBrains Mono** 500, `jetbrains-mono-100-800-normal.woff2`: SMS bubbles, receipt, sample tags, flap labels ≤ `--fs--1`.
- Display: `text-transform:none` for sentences, uppercase only for flap words (`LOCKOUT`) with `letter-spacing:.04em`.
- Numbers: `font-variant-numeric: tabular-nums` on every time, price, phone.

```css
:root{
  --ff-display:"Antonio","Arial Narrow",sans-serif;
  --ff-text:"Source Sans 3",system-ui,sans-serif;
  --ff-mono:"JetBrains Mono",ui-monospace,monospace;
  --fs--1:clamp(.875rem,.85rem + .1vw,.9375rem);   /* 14-15px, floor 13px never crossed */
  --fs-0:clamp(1.0625rem,1rem + .25vw,1.1875rem);  /* 17-19px body */
  --fs-1:clamp(1.275rem,1.15rem + .55vw,1.583rem);
  --fs-2:clamp(1.53rem,1.3rem + 1vw,2.11rem);
  --fs-3:clamp(1.836rem,1.45rem + 1.8vw,2.81rem);
  --fs-4:clamp(2.2rem,1.6rem + 2.8vw,3.75rem);
  --fs-h1:clamp(2.9rem, min(10.5vw, 10svh) + .1rem, 6.25rem); /* Antonio is narrow: 3 timetable rows fit 390 at 2.9rem */
  --fs-flap:clamp(1.6rem,1.2rem + 1.6vw,2.6rem);   /* section time tiles */
  --lh-display:.94; --tr-display:-.02em; --lh-body:1.5; --measure:64ch;
  --s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:120px; --s-11:160px;
  --pad-tight:clamp(56px,7vw,80px); --pad-normal:clamp(80px,9vw,120px); --pad-loose:clamp(112px,12vw,160px);
  --max:1320px; --gutter:clamp(16px,2vw,24px); --margin:clamp(20px,5vw,72px);
  --header-h:68px; --bar-h:64px;
  --radius:2px; --pill:999px;           /* 2px on everything (flap tiles, cards, inputs, buttons); pills only for sample tags */
  --rule-w:1px;
  --ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1);
  --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms; --t-flap:260ms; --flap-char:30ms;
  /* palette */
  --c-deep:#0B1120; --c-mid:#18223A; --c-cream:#ECE6D6; --c-muted-n:#9AA6BC; --c-amber:#F0A339;
  --c-paper:#F3EEE4; --c-dawn:#E4DCCB; --c-ink:#121826; --c-muted-d:#4E5668; --c-amber-ink:#8A4B00;
  --c-ember:#FF7A59; --c-brick:#B23A1E; --c-hinge-n:#2F3B55; --c-rule-d:#C9BFA8;
}
```
Display h1 tracking `-.02em`, line-height `.94`; section h2 `--fs-4` Antonio 600 lh 1; h3 `--fs-2` Source Sans 600. Headings `text-wrap:balance`, p `text-wrap:pretty`, `max-width:var(--measure)`.

## Grid
12 cols ≥ 1100 / 8 cols 640-1099 / 4 cols < 640; gutter `--gutter`; content max `--max`; side margin `--margin`.
**Timetable grid** (the layout primitive): `grid-template-columns: minmax(0,3fr) minmax(0,9fr)` ≥ 900 (time col | event col), single column < 640 with time above.

## Tones (class on each section)
| tone | --bg | --ink | --muted | --rule | --accent (words) | --focus | button bg/fg |
|---|---|---|---|---|---|---|---|
| `t-night` | #0B1120 | #ECE6D6 (15.11) | #9AA6BC (7.67) | #2F3B55 (shape only) | #F0A339 (8.96) | #F0A339 (8.96) | #F0A339 / #0B1120 (8.96) |
| `t-slate` | #18223A | #ECE6D6 (12.68) | #9AA6BC (6.43) | #2F3B55 | #F0A339 (7.52) | #F0A339 (7.52) | #F0A339 / #0B1120 |
| `t-dawn` | #E4DCCB | #121826 (13.00) | #4E5668 (5.39) | #C9BFA8 | #8A4B00 (4.98) | #121826 (13.00) | #8A4B00 / #FFFFFF (6.80) |
| `t-paper` | #F3EEE4 | #121826 (15.33) | #4E5668 (6.36) | #C9BFA8 | #8A4B00 (5.88) | #121826 (15.33) | #8A4B00 / #FFFFFF (6.80) |
Signal: `--signal` = #FF7A59 on night (7.33), #B23A1E on paper (5.16). Amber #F0A339 on paper = 1.81: **never text/focus on light tones**, only glow shapes.
Order rule: never t-night next to t-night; put t-slate between.

## Components
- **Buttons** min-height 52px, padding 0 22px, radius 2px, Source Sans 600 `--fs-0`. Primary = tone button colors. Secondary = 1.5px border currentColor, transparent. Text button = underline offset 4px + 48px hit area (padding-block trick). Press `scale(.97)` 120ms.
- **Input** 52px, bg transparent, 1.5px border `--muted`, radius 2px, label above `--fs--1` 600; error text in `--signal`.
- **Card / board row** border-top 1px `--rule`, padding `--s-5` 0; no shadows, no rounded boxes.
- **Sample tag** pill, JetBrains Mono 500 `--fs--1` (min 13px), 1px border currentColor, padding 2px 10px, text "Sample".
- **Frame**: hero strip `aspect-ratio:21/9` (≥ 900) / `4/3` (< 640); story frames 4/5; radius 2px; grade below.
- **Header** `--header-h` 68px, t-night bg rgba(11,17,32,.92) + backdrop-filter blur(8px); logo wordmark Antonio 600 uppercase; mini flap board (5 tiles, 28×36px) center-right; Call button right. Hidden board < 480px (phone + Call only).
- **Mobile bar** < 900px: fixed bottom, `--bar-h` 64px, 3 equal targets (Call | Text | Price it), bg #0B1120, top 1px #2F3B55, shadow `0 -8px 24px rgba(0,0,0,.35)`, `padding-bottom:env(safe-area-inset-bottom)`.
- **Signature primitive: the flap tile** (draw once, reuse everywhere)
```css
.flap{display:inline-grid;grid-auto-flow:column;gap:3px;font:600 var(--fs-flap)/1 var(--ff-display);font-variant-numeric:tabular-nums;letter-spacing:.02em}
.flap>span{position:relative;display:grid;place-items:center;min-width:.78em;padding:.12em .1em;background:#18223A;color:#ECE6D6;border-radius:2px;
  background-image:linear-gradient(#1E2A45 0 50%,#18223A 50%);}
.flap>span::after{content:"";position:absolute;inset:50% 0 auto;height:1px;background:#0B1120}  /* hinge seam */
.t-dawn .flap>span,.t-paper .flap>span{background:#121826;color:#F3EEE4;background-image:linear-gradient(#1B2232 0 50%,#121826 50%)}
.sw-motion .flap.is-flipping>span{animation:flap var(--t-flap) var(--ease-io) calc(var(--i)*var(--flap-char)) both}
@keyframes flap{0%{transform:rotateX(0)}50%{transform:rotateX(-90deg)}100%{transform:rotateX(0)}}
```
  Tiles are real text (`aria-hidden` on the tile spans, `.sr-only` sibling reads "10:52 p.m."). Flap word tiles (LOCKOUT) use the same class with `--fs-0`.
- **Hinge hairline** (hover language): `::after` 1px `currentColor` under links/rows, `transform:scaleX(0)` → 1, origin left, 200ms `--ease-out`, inside `@media (hover:hover)`.

## Photo grade
Cool night palette: `filter: saturate(.8) contrast(1.08) brightness(.92) hue-rotate(-4deg)` on every img.
Hero strip overlay: `linear-gradient(0deg, rgba(11,17,32,.7) 0%, rgba(11,17,32,0) 45%)` + amber glow `radial-gradient(40% 60% at 70% 35%, rgba(240,163,57,.22), transparent 70%)` with `mix-blend-mode:screen`. On dawn tones images use `saturate(.85) contrast(1.05) sepia(.08)`.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` (≥ 4.98:1 on every tone).
`@media (forced-colors:active){.flap>span{border:1px solid CanvasText;background:Canvas;color:CanvasText}.btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}}`.
Reduced motion: no flips, no pin, no wipe; tiles show final values; tone per section static.
