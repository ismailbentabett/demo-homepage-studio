# appliance-A · Design system (copy into :root)

## Fonts
- Display: Roboto Slab, variable wght 100-900, `assets/fonts/roboto-slab/…-normal.woff2` → **preload** (only preload).
  h1 wght 800, h2 650, h3 600. No italics.
- Text: Libre Franklin variable (normal + italic), 400 body, 500 lead, 650 buttons/labels.
- Accent: JetBrains Mono wght 500 (labels, panel numbers, part names, model strings), 700 for prices. `font-variant-numeric: tabular-nums`.
- Labels: JetBrains Mono 500, `--fs--1`, uppercase, letter-spacing .08em.
```css
--f-display:"Roboto Slab",Rockwell,"Courier New",serif;
--f-text:"Libre Franklin",system-ui,sans-serif;
--f-mono:"JetBrains Mono",ui-monospace,monospace;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1:clamp(.8125rem,.79rem + .12vw,.875rem);   /* 13-14px, labels only */
--fs-0:clamp(1.0625rem,1.02rem + .2vw,1.1875rem); /* 17-19px body */
--fs-1:clamp(1.275rem,1.18rem + .45vw,1.58rem);
--fs-2:clamp(1.53rem,1.36rem + .85vw,2.1rem);
--fs-3:clamp(1.84rem,1.55rem + 1.45vw,2.8rem);
--fs-4:clamp(2.2rem,1.75rem + 2.3vw,3.75rem);
--fs-h1:clamp(2.5rem,min(8.4vw,9svh) + .1rem,4.9rem); /* slab is wide-ish: cap 4.9rem */
```
Display: letter-spacing -0.03em (h1), -0.02em (h2); line-height .96 (h1), 1.02 (h2/h3). Body line-height 1.5, measure 64ch.
Headings `text-wrap:balance`; p `text-wrap:pretty`.

## Space
```css
--s-1:4px;--s-2:8px;--s-3:12px;--s-4:16px;--s-5:24px;--s-6:32px;--s-7:48px;--s-8:64px;--s-9:96px;--s-10:120px;--s-11:160px;
--pad-tight:clamp(56px,7vw,80px);--pad:clamp(80px,9vw,120px);--pad-loose:clamp(112px,12vw,160px);
```

## Grid
12 cols ≥ 1100 / 8 cols 640-1099 / 4 cols < 640. Gutter `clamp(16px,2vw,24px)`. Max width 1320px; side margin `clamp(20px,4vw,56px)`.
Panel two-cell split: `grid-template-columns: minmax(0,1fr) var(--seam) minmax(0,1fr)` with `--seam:28px` (the seam column carries the screws on the midline); stacks < 760px with the seam turned horizontal (28px row).

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent (words) | focus | btn bg/ink |
|---|---|---|---|---|---|---|---|
| t-deep (default) | #141516 | #EEE9DF (15.11) | #A9A49A (7.36) | #3A3C40 | #F2A33A (8.77) | #F2A33A (8.77) | #F2A33A / #141516 (8.77) |
| t-mid (panel steel) | #1F2123 | #EEE9DF (13.35) | #A9A49A (6.51) | #3A3C40 | #F2A33A (7.74) | #F2A33A (7.74) | #F2A33A / #141516 |
| t-paper (prices, form) | #ECE7DD | #1A1B1C (13.99) | #5C5850 (5.74) | #C9C2B4 (shape only) | #8A4B00 (5.52) | #8A4B00 (5.52) | #B23A22 / #FFFFFF (5.96) |
| t-light (form inputs, cards on paper) | #F6F2EA | #1A1B1C (15.44) | #5C5850 (6.33) | #C9C2B4 | #8A4B00 (6.09) | #8A4B00 (6.09) | #B23A22 / #FFFFFF |
| t-accent (one band: mobile bar call button, "Call" CTA strip) | #F2A33A | #141516 (8.77) | #141516 | #141516 | #141516 | #141516 (8.77) | #141516 / #EEE9DF (15.11) |
Signal: #E0533A on deep (4.76), #B23A22 on paper (4.83). **#F2A33A on paper = 1.69: shapes only (screw heads, rules), never text.**
Rhythm: deep → mid → paper → deep …; never two deep bands touching (separate with t-mid panel or paper).

## Radius / rules / shadow
- Radius: 2px on panels, inputs, buttons, cards (sheet metal). Pills: none. Screw heads are circles.
- Rules: 1px `--rule`; panel seam = 1px #3A3C40 inset line + 1px rgba(255,255,255,.04) highlight beneath (stamped edge).
- Shadow: only floating things (mobile bar, lifted panel during story, hotspot popover): `0 18px 40px -18px rgba(0,0,0,.7)`.

## Motion tokens
```css
--ease-out:cubic-bezier(.23,1,.32,1);--ease-io:cubic-bezier(.77,0,.175,1);
--t-press:120ms;--t-ui:200ms;--t-page:520ms;--t-story:900ms;--stagger:60ms;
```

## Components
- **Buttons ≥ 48px:** primary `min-height:52px;padding:0 22px;background:var(--btn-bg);color:var(--btn-ink);font:650 var(--fs-0)/1 var(--f-text);border-radius:2px`; label + mono phone. Press `transform:translateY(1px)` 120ms. Secondary: 1.5px solid currentColor border, transparent bg, same size. Text button: underline 1px offset 4px + inline-block padding-block 12px / margin-block -12px.
- **Input:** 52px tall, bg #F6F2EA, 1.5px #5C5850 border (5.74 vs paper ≥ 3 for non-text), label above in mono `--fs--1`; error text #B23A22.
- **Card (service panel):** t-mid, 2px radius, 4 screws 8px, padding 24px, face = symptom (h3 slab 600), behind = cause (Libre Franklin 400, amber mono part name).
- **Sample tag:** mono `--fs--1` uppercase, 1px border currentColor, padding 2px 6px, text "Sample". On paper use #5C5850.
- **Frame (photo):** 2px radius, 1px #3A3C40 border, ratio 4/3 default, 3/2 for inset; grade below; mono caption under it.
- **Header:** `--header-h:68px` (60px < 640). Deep bg, wordmark "{{biz.short}}" in slab 700 + 2 screws; nav anchors; phone (mono) + Text + "Get a quote" on the right. Sticky, 1px bottom rule.
- **Mobile bar (< 900):** fixed bottom, 64px + safe-area, t-deep with shadow; 3 cells: Call (t-accent bg #F2A33A/#141516), Text, Quote; each ≥ 48px.
- **Signature primitive: `.panel`**
```html
<svg width="0" height="0" aria-hidden="true"><symbol id="screw" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2B2D30" stroke="#55585D"/><circle cx="12" cy="12" r="8.5" fill="none" stroke="#0E0F10" stroke-opacity=".5"/><path d="M12 6v12M6 12h12" stroke="#0E0F10" stroke-width="2.4" stroke-linecap="round"/></symbol></svg>
```
```css
.panel{position:relative;background:var(--bg);border:1px solid var(--rule);border-radius:2px;padding:clamp(24px,4vw,56px);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04)}
.panel__label{font:500 var(--fs--1)/1 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.panel__screw{position:absolute;width:var(--screw-size,14px);aspect-ratio:1;transform:rotate(var(--screw,0deg));
  transition:transform var(--t-ui) var(--ease-out)}
.panel__screw--tl{top:10px;left:10px}.panel__screw--tr{top:10px;right:10px}
.panel__screw--bl{bottom:10px;left:10px}.panel__screw--br{bottom:10px;right:10px}
.panel__split{display:grid;grid-template-columns:minmax(0,1fr) var(--seam) minmax(0,1fr)}
.panel__seam{background:linear-gradient(90deg,transparent 13px,var(--rule) 13px 14px,transparent 14px)}
.panel__behind{color:var(--ink)} .panel__behind .part{font:700 var(--fs-0) var(--f-mono);color:var(--accent)}
.sw-motion .panel[data-state="shut"] .panel__behind{clip-path:inset(0 0 0 100%)}
.panel[data-state="open"] .panel__behind{clip-path:inset(0);transition:clip-path var(--t-story) var(--ease-io)}
.panel[data-state="open"] .panel__screw{--screw:-720deg;opacity:.0;transition:transform 300ms var(--ease-out),opacity 300ms 200ms}
@media (hover:hover){.panel:hover .panel__screw--tr{--screw:90deg}}
```
Screw on paper tone: fill #D8D1C3 stroke #9C9486 slot #5C5850; amber screw (tightened state in the form): fill #F2A33A.
- **Work-light cone:** `radial-gradient(60% 80% at var(--lx,70%) 30%, rgba(242,163,58,.22), transparent 70%)` over the lit half; never under text with < 4.5 (text sits outside the cone or on solid steel).
- **Part tag (BLOWN / WORN):** mono 700 `--fs--1`, color #E0533A, 1px border #E0533A, leader line 1px #E0533A.

## Photo grade
`filter:saturate(.7) contrast(1.08) brightness(.88) sepia(.12)` on every photo + overlay `linear-gradient(0deg,rgba(20,21,22,.55),rgba(20,21,22,0) 55%)` multiply; inside the lit half add `mix-blend-mode:normal` amber wash `rgba(242,163,58,.10)`.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){.panel{border:1px solid CanvasText}.btn{border:2px solid ButtonText}.panel__screw{forced-color-adjust:auto}:focus-visible{outline-color:Highlight}}
```
