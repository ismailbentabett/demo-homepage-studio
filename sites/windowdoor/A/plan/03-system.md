# windowdoor-A · Design system (copy into :root)

## Fonts
- Display **Spectral** static: 600 normal (h1/h2, PRELOAD `assets/fonts/spectral/spectral-600-normal.woff2`), 700 normal
  (tags), 400 italic (notes/captions). Text **Onest** variable 100-900 (use 400, 500, 600). Accent **JetBrains Mono**
  variable (500 only, sizes/prices/tabular). One preload only (Spectral 600). No variable axes beyond wght.
- `--f-display:"Spectral",Georgia,serif; --f-text:"Onest",system-ui,sans-serif; --f-mono:"JetBrains Mono",ui-monospace,monospace;`

## Type scale (1.2 mobile → 1.333 desktop)
```
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, captions/tags; nothing < 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem);  /* 17-19 body */
--fs-1:  clamp(1.275rem, 1.15rem + .5vw, 1.5rem);    /* lead */
--fs-2:  clamp(1.53rem, 1.3rem + 1vw, 2rem);
--fs-3:  clamp(1.836rem, 1.45rem + 1.8vw, 2.667rem);  /* h2 */
--fs-4:  clamp(2.2rem, 1.6rem + 2.8vw, 3.555rem);     /* statement */
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 5rem); /* Spectral is wide-ish: cap 5rem */
```
h1/h2: Spectral 600, `letter-spacing:-.025em`, `line-height:.98` (h1) / 1.05 (h2), `text-wrap:balance`.
Body Onest 400, 1.5 line-height, `max-width:66ch`, `text-wrap:pretty`. Mono 500 `--fs--1`, `tabular-nums`, letter-spacing 0.
Kicker: Onest 600 `--fs--1`, uppercase, `letter-spacing:.08em`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:128px --s-11:160px`
Section padding: `--pad-tight:clamp(56px,7vw,80px)`, `--pad-normal:clamp(80px,9vw,120px)`, `--pad-loose:clamp(104px,12vw,160px)`.

## Grid
12 cols ≥ 1100 (gutter 24px, max 1320px, side margin clamp(20px,4vw,56px)); 8 cols 640-1099 (gutter 20); 4 cols < 640 (gutter 16).
**Margin rail:** desktop cols 1-2 carry the section's `.tag` + its schedule row label (sticky top: calc(var(--header-h) + 24px)); content cols 3-12.
Tablet: rail collapses to a tag above the h2. `--header-h: 68px` (60px < 640).

## Tones (each sets --bg --ink --muted --rule --accent --focus + buttons)
| class | --bg | --ink | --muted | --rule | --accent (text) | --focus | btn primary (bg/fg) | contrast |
|---|---|---|---|---|---|---|---|---|
| t-light | #FFFBF4 | #14243A | #4A5568 | rgba(20,36,58,.18) | #17605B | #14243A | #17605B / #FFFFFF | 15.15 · 7.29 · 7.11 · btn 7.34 |
| t-paper | #F6EFE4 | #14243A | #4A5568 | rgba(20,36,58,.18) | #17605B | #14243A | #17605B / #FFFFFF | 13.68 · 6.58 · 6.42 · btn 7.34 |
| t-mid | #EFD9C4 | #14243A | #4A5568 | rgba(20,36,58,.22) | #17605B | #14243A | #14243A / #F6EFE4 | 11.45 · 5.51 · 5.38 · btn 13.68 |
| t-deep | #14243A | #F6EFE4 | #B9C1CC | rgba(246,239,228,.2) | #9FD3C9 | #9FD3C9 | #9FD3C9 / #14243A | 13.68 · 8.60 · 9.40 · btn 9.40 |
| t-coral (color band) | #E8826A | #14243A | #2E2A33 | rgba(20,36,58,.3) | #14243A (no teal!) | #14243A | #14243A / #F6EFE4 | 5.83 · 5.23 · focus 5.83 · btn 13.68 |
Forbidden: teal text/rings on coral (2.73), light text on coral (2.34), coral text on paper (2.34), sea glass on paper (1.45).
Coral on navy (5.83) is allowed for tags/kickers in t-deep.

## Radius / rules / shadow
Radius: 2px everywhere (cards, inputs, buttons); hex tags have no radius; pills nowhere. Rules: 1px `--rule`; schedule
sheet heavy rule 2px `--ink`; jamb section lines 1.5px `--ink`. Shadow only on the mobile bar and popovers:
`0 -6px 24px rgba(20,36,58,.18)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **Buttons** min-height 52px, padding 0 24px, Onest 600 `--fs-0`, radius 2px. Primary = tone's btn; secondary = 2px
  border `--ink`, transparent; text button = underline offset 6px + hairline hover. `:active{transform:scale(.97)}`.
- **Input** 52px, 1.5px border `--ink` on #FFFBF4, label above (Onest 500 --fs--1), error #8A2B1C text (check 8.0 on light
  before use via contrast.mjs; if not checked, use --ink + icon).
- **Card** #FFFBF4 on paper/mid, 1px --rule, padding 24px, a `.tag` in top-left breaking the top edge by 50%.
- **Sample tag** `.sample`: mono 500 13px uppercase, 1px border currentColor, padding 2px 6px, text "Sample".
- **Frame `.jamb`** (signature primitive 1): wrapper `position:relative; padding:14px 14px 30px; background:#EFD9C4`;
  inline SVG overlay `viewBox="0 0 100 100" preserveAspectRatio="none"` with `vector-effect:non-scaling-stroke` paths:
  head (top band + 4px drip notch at both ends), jambs (two inner verticals 6px in), sill (bottom trapezoid sloping 4°
  outwards, plus a dashed line = sill pan). Stroke #14243A 1.5px. Photo ratio 4:5 (hero, story) or 3:2 (cards).
  The coral sill line: 3px #E8826A bottom rule (shape only).
- **Tag `.tag`** (signature primitive 2): flat-top hexagon `clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)`,
  56×48px, double layer (outer navy, inner #FFFBF4 inset 2px) → navy text Spectral 700 1.125rem "W1". Door variant `.tag--d`:
  rounded square radius 6px. Optional string: `::before` 1px × 28px navy line + 6px dot pin. On t-deep: outer #9FD3C9, inner #14243A, text #F6EFE4.
- **Schedule row `.sched-row`** (signature primitive 3): grid `56px 1.4fr .8fr 1fr 1fr 96px` (tag | opening | size | glass |
  sample range | status), 1px --rule bottom, mono for size/range, status = empty 14px square → teal check (#17605B stroke 2px).
  Strip version (`data-sw-signature`, sticky in rail, ≥1100): 6 compact rows tag + status only.
- **Header** 68px, paper, logo wordmark Spectral 700 "{{biz.short}}" with a mini hex; right: phone (mono) + primary button.
- **Mobile bar** < 900px: fixed bottom, 64px, two buttons Call | Text a photo, paper bg, top 1px rule, shadow token,
  `padding-bottom:env(safe-area-inset-bottom)`; body gets `padding-bottom:72px`.

## Photo grade
`filter:saturate(.88) contrast(1.05) sepia(.07) brightness(1.02)` on every photo. Optional overlay on the break: `mix-blend-mode:
multiply` layer #E8826A at 14% (warms toward coral). B&W archival frames: `filter:contrast(1.08) sepia(.18)` + duotone navy/sand
(navy #14243A shadows, sand #F6EFE4 highlights) so they belong to the palette.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` (≥ 5.8:1 on every tone, see table).
`@media (forced-colors:active){.tag,.jamb svg *{forced-color-adjust:auto;stroke:CanvasText}.btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}}`
