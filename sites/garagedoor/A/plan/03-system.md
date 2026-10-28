# 03 Design system: garagedoor-A "Winding Count"

## Fonts
- Display: Saira Condensed 700 + 800 (static files, `assets/fonts/saira-condensed/`). **Preload 700 only.**
  Headings uppercase only for kickers/labels; h1/h2 sentence case.
- Text: Libre Franklin variable 100-900, use 400 / 500 / 600. Not preloaded.
- Accent: JetBrains Mono variable, use 500 / 700, `font-variant-numeric: tabular-nums`. Counter, prices, ZIPs, hours.
```css
--f-display:"Saira Condensed","Arial Narrow",sans-serif;
--f-text:"Libre Franklin",system-ui,sans-serif;
--f-mono:"JetBrains Mono",ui-monospace,monospace;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1:clamp(.875rem,.84rem + .15vw,.9375rem);   /* 14-15px, min for labels 13px */
--fs-0:clamp(1.0625rem,1rem + .25vw,1.1875rem);   /* 17-19px body */
--fs-1:clamp(1.275rem,1.15rem + .55vw,1.58rem);
--fs-2:clamp(1.53rem,1.3rem + 1vw,2.11rem);
--fs-3:clamp(1.84rem,1.45rem + 1.7vw,2.81rem);
--fs-4:clamp(2.2rem,1.6rem + 2.8vw,3.75rem);
--fs-h1:clamp(2.9rem,min(10.5vw,11svh) + .1rem,6.4rem);   /* condensed face */
--fs-count:clamp(1rem,.9rem + .5vw,1.25rem);               /* mono counter */
```
h1: Saira Condensed 800, line-height .9, letter-spacing -.02em, `text-wrap:balance`, max 12ch.
h2: 700, lh .96, -.015em. Kicker: mono 500 `--fs--1`, uppercase, .08em tracking, color accent.
Body: Libre Franklin 400, `--fs-0`, lh 1.55, max-width 66ch, `text-wrap:pretty`. Lead: 500 `--fs-1` lh 1.4.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight:clamp(56px,7vw,80px)`, `--pad-normal:clamp(80px,9vw,120px)`, `--pad-loose:clamp(104px,12vw,160px)`.

## Grid
12 cols ≥1100 / 8 cols 640-1099 / 4 cols <640; gutter `clamp(16px,2vw,24px)`; `--max:1320px`.
**Margin column** (the spring rail): `--rail:72px` at ≥1100 (fixed left, z 5, content shifts by 72px);
48px 640-1099 (spring hidden, counter only, top-left of each section kicker); <640: none, counter
lives in the mobile bar's left edge as `¼ 16/30`. Page margin `clamp(20px,4vw,48px)`.

## Tones (every tone sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent (words) | focus | btn bg / ink |
|---|---|---|---|---|---|---|---|
| `t-paper` (default dark) | #15161A | #F1ECE4 15.37 | #A9A69F 7.44 | #3A3C42 (shape) | #F26B2A 5.95 | #FFB547 10.29 | #F26B2A / #15161A 5.95 |
| `t-deep` | #0C0D0F | #F1ECE4 16.53 | #A9A69F 8.00 | #2A2C31 | #F26B2A 6.39 | #FFB547 11.06 | #F26B2A / #15161A 5.95 |
| `t-mid` (concrete panel) | #2A2C31 | #F1ECE4 11.88 | #B4B1AA 6.52 | #44464C | #F26B2A 4.59 (≥18px only) | #FFB547 7.95 | #F26B2A / #15161A 5.95 |
| `t-light` (chalk concrete) | #E7E2D9 | #15161A 14.01 | #55575C 5.60 | #C9C3B8 | #A6470A 4.61 | #A6470A 4.61 | #A6470A / #FFFFFF 5.95 |
| `t-accent` (sodium band) | #F26B2A | #15161A 5.95 | #15161A | #15161A | #15161A | #15161A 5.95 | #15161A / #F1ECE4 15.37 |
Never: white on sodium (3.03), sodium on light (2.35), #3A3C42 as text (1.63).

## Radius / rules / shadow
Radius 2px everywhere (door-panel corners), pills 999px for the counter chip only.
Rules: 1px `--rule`; panel seam = 2px `#0C0D0F` + 1px `rgba(241,236,228,.08)` below.
Shadow only on mobile bar + popovers: `0 -8px 24px rgba(0,0,0,.45)`.

## Motion tokens
```css
--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1);
--d-press:120ms; --d-ui:200ms; --d-page:520ms; --d-story:900ms; --stagger:60ms;
```

## Components
- **Header** `--header-h:64px` (72 ≥1100), t-deep, wordmark left (display 800 "{{biz.short}}" + mono "DOOR CO."), call button right.
- **Buttons** min-height 52px, padding 0 24px, radius 2px, display 700 `--fs-1` letter-spacing .01em.
  Primary: btn-bg/btn-ink. Secondary: transparent, 2px border `--ink`, ink text. Text button: underline 2px accent offset 4px, padding-block trick.
  Press: `scale(.98)` 120ms. Hover "lift": `translateY(-3px)` 200ms + `.seam__roller` `translateX(8px)`.
- **Input** 52px, bg `#0C0D0F` on dark / #FFFFFF on light, 1px rule, 2px radius, label above in mono `--fs--1`.
- **Card / door panel** `.panel`: bg `--bg`, padding `--s-6`, top edge = seam primitive, inset 1px rule; no shadow.
- **Sample tag** mono 500 13px, uppercase, 1px border currentColor, padding 2px 6px, radius 2px: "SAMPLE".
- **Frame** `.frame{aspect-ratio:var(--ar,3/2);overflow:hidden;border-radius:2px}` hero strip `--ar:21/9` (<640: `4/3`; ≥1100 `3/1`).
- **Mobile bar** (<900px) fixed bottom, t-deep, 3 cells Call | Text | Price, each ≥ 56px tall, counter chip on far left (aria-hidden).
- **Signature primitive** (draw once, reuse):
```css
/* seam: door-panel joint with a roller at the right end */
.seam{position:relative;height:3px;background:linear-gradient(#0C0D0F 0 2px,rgba(241,236,228,.08) 2px 3px)}
.seam__roller{position:absolute;right:0;top:50%;width:14px;height:14px;border-radius:50%;
  background:#0C0D0F;border:2px solid var(--accent);transform:translate(0,-50%);transition:transform var(--d-ui) var(--ease-out)}
/* turn mark: tick on the rail + mono label */
.turn{display:inline-flex;align-items:center;gap:8px;font:500 var(--fs--1)/1 var(--f-mono);color:var(--accent);letter-spacing:.06em}
.turn::before{content:"";width:18px;height:2px;background:currentColor}
.turn.is-on::before{width:28px;height:4px}
/* counter */
.count{font:700 var(--fs-count)/1 var(--f-mono);font-variant-numeric:tabular-nums}
```
  Spring SVG (`.spring`, `data-sw-signature`): viewBox 0 0 40 600; a winding cone (rect 40×28 with 4
  circles r3) at top, coil = one `<path>` of 60 zig-zag strokes (stroke #A9A69F 2px, cone + active
  stroke sodium); JS scrubs `--sw-p` 0→1: coil `transform:scaleY(calc(1 - .06*var(--sw-p)))` and
  stroke-dashoffset on an overlay sodium path; counter = round(30·p). Static default = fully drawn.
- **Estimator spring bar:** same coil path horizontal (viewBox 600×40), used part stroke sodium, rest
  muted; at ≥100% a 14px gap with two short break lines.

## Photo grade
`filter:saturate(.8) contrast(1.06) sepia(.12) brightness(.96)`; hero strip spring photo: placed on a
warm field `background:#E9D7BF` with `mix-blend-mode:multiply` so its white background turns into
driveway light, plus `linear-gradient(0deg,rgba(242,107,42,.18),transparent 60%)` overlay from the bottom.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){:focus-visible{outline-color:Highlight}.btn{border:2px solid ButtonText}.spring,.seam__roller{forced-color-adjust:auto}}
```
