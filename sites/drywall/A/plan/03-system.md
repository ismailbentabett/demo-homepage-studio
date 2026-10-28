# drywall-A · Design system

## Fonts
- Display: Hanken Grotesk, `assets/fonts/hanken-grotesk/hanken-grotesk-100-900-normal.woff2` (**preload**), weights 700/800.
  h1 800, h2 750, labels 700 uppercase .08em at --fs--1. `font-variant-numeric: tabular-nums` on prices, phone, visits, ZIP.
- Text: Public Sans `public-sans-100-900-normal.woff2` + italic (not preloaded), 400 / 600. No variable axes beyond wght.

## Type scale
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px, floor */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* body 17-18px */
--fs-1:  clamp(1.275rem, 1.2rem + .35vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.38rem + .7vw, 2rem);
--fs-3:  clamp(1.836rem, 1.55rem + 1.3vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.7rem + 2.3vw, 3.555rem);
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 4.9rem);  /* Hanken is mid-width: cap 4.9rem */
h1{letter-spacing:-.04em;line-height:.94} h2{letter-spacing:-.03em;line-height:1} body{line-height:1.5}
p{max-width:66ch}
```

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px,7vw,80px)`, `--pad: clamp(80px,10vw,120px)`, `--pad-loose: clamp(112px,13vw,160px)`.

## Grid
12 cols ≥1100 / 8 cols 640-1099 / 4 cols <640; gutter `clamp(16px,2vw,24px)`; max width 1280px; page margin
`clamp(20px,5vw,64px)`. No margin column (avoid painter-A's rail).

## Tones (bands step from rough to smooth down the page)
| class | --bg | --ink | --muted | --rule | --accent | --focus | btn bg / text |
|---|---|---|---|---|---|---|---|
| `t-board` (mid) | #D5D6D2 | #1D2327 (10.87) | #4A5357 (5.39) | #A7ACAA | #0E5C4C (5.41) | #0E5C4C | #0E5C4C / #FFF (7.91) |
| `t-skim` | #E6E2D8 | #1D2327 (12.28) | #50595D (5.54) | #C7C2B6 | #0E5C4C (6.11) | #0E5C4C | #0E5C4C / #FFF |
| `t-paper` | #F3F0E8 | #1D2327 (13.94) | #50595D (6.29) | #D3CEC2 | #0E5C4C (6.94) | #0E5C4C | #0E5C4C / #FFF |
| `t-light` (final coat) | #FFFFFF | #1D2327 (15.88) | #50595D | #E2DED4 | #0E5C4C (7.91) | #0E5C4C | #0E5C4C / #FFF |
| `t-deep` | #16282A | #F3F0E8 (13.44) | #A9B6B8 (7.34) | #2E4244 | #7FC7BF (7.89) | #7FC7BF | #7FC7BF / #16282A (7.89) |
| `t-accent` (spruce band) | #0E5C4C | #F3F0E8 (6.94) | #F3F0E8 | #3D7A6D | #E0C98F (4.86) | #E0C98F | #F3F0E8 / #0E5C4C (6.94) |
Mud #7D8B91 (3.08 on paper) = rules, swatches, blade body only. Tape #E0C98F = tape strips; text on it is #1D2327 (9.77).

## Shape, rules, shadow
Radius: 0 everywhere (cut board), inputs 2px; pills none. Rules 1px `var(--rule)`; ledger rows 1px; cut edges 2px #1D2327.
Shadow only on mobile bar + popover: `0 8px 24px rgba(22,40,42,.18)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms`

## Components
- **Buttons** min-height 52px, padding 0 22px, Hanken 700 --fs-0. Primary: accent bg/white. Secondary: 2px ink border,
  transparent. Text button: accent + knife underline. `:active{transform:translateY(1px)}` 120ms.
- **Input**: 52px, 1px #50595D border (on white 7.6:1 as UI), 2px radius, label above 600 --fs--1.
- **Card / test board**: square (`aspect-ratio:1` ≥900, auto below), bg `t-paper`, 1px rule, 28px top-left texture swatch.
- **Sample tag**: Hanken 700 11px→ use 13px uppercase, 1px currentColor border, 2px 6px padding, text "Sample".
- **Frame (patch)**: `aspect-ratio: 4/5` hero (3:2 elsewhere), 2px #1D2327 cut edge, four tape strips
  (`::before/::after` + 2 spans) #E0C98F 18px wide at 70% opacity; rotate(-1.2deg) ≥900 only.
- **Header**: `--header-h: 72px` (64 <640); paper bg; phone right in tabular nums.
- **Mobile bar** (<900): fixed bottom 64px, 3 equal buttons Call / Text / Price it, safe-area padding; deep bg.
- **Signature primitive `.pass`** (draw once, reuse):
  ```css
  .pass{--sw-p:0;position:relative;isolation:isolate}
  .pass::after{content:"";position:absolute;inset:0;pointer-events:none;
    background:var(--pass-surface,var(--bg));
    -webkit-mask:url(#feather) right/48px 100% no-repeat, linear-gradient(#000 0 0) left/calc(100% - 48px) 100% no-repeat;
    transform:translateX(calc((var(--sw-p) - 1) * 100%));} /* blade body = the smoothed surface sliding in */
  .seam{height:16px;margin-top:-16px;background:var(--next-bg);
    mask:url(assets/feather-edge.svg) bottom/auto 100% repeat-x;--amp:14px}
  ```
  `feather-edge.svg`: one inline SVG `<symbol>` with an irregular 14-tooth trailing edge; seam amplitude per band:
  14 / 10 / 7 / 4 / 2 / 0px. Blade head (visual): 6px #0E5C4C bar with 2px #1D2327 handle line, shown only while moving.

## Photo grade
`filter: saturate(.78) contrast(1.06) sepia(.06) brightness(1.02)`; overlay on hero-A2 break: `mix-blend-mode:multiply`
#D5D6D2 at 35% so the texture sits in the gypsum tone. Video poster same filter.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}`
`@media (forced-colors:active){.pass::after,.seam{display:none}.btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}}`
