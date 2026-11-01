# locksmith-B · Design system (copy into :root)

## Fonts
- Display: Schibsted Grotesk var 400-900, `assets/fonts/schibsted-grotesk/schibsted-grotesk-400-900-normal.woff2` — **preload** (only preload). Use 800 (h1, h2), 700 (h3, masthead 900).
- Text: Source Serif 4 var 200-900 + opsz 8-60, normal + italic. Body 400 opsz auto; lead 450 `"opsz" 24`; pull-quotes italic 400 `"opsz" 48`.
- Accent: IBM Plex Mono 400 + 600 normal (files 400-normal, 600-normal). Prices, folios, footnotes, sidenotes, checklist, phone digits, tags.
- Stacks: `--ff-d:"Schibsted Grotesk",Arial,sans-serif; --ff-t:"Source Serif 4",Georgia,serif; --ff-m:"IBM Plex Mono",ui-monospace,monospace;`
- `font-variant-numeric: tabular-nums` on every price, phone, rating, hour.

## Type scale (1.2 mobile → 1.333 desktop)
```
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px: footnotes, tags (never < 13px) */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem); /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.15rem + .6vw, 1.58rem);
--fs-2:  clamp(1.53rem, 1.3rem + 1.1vw, 2.11rem);
--fs-3:  clamp(1.84rem, 1.45rem + 1.9vw, 2.81rem);
--fs-4:  clamp(2.2rem, 1.6rem + 3vw, 3.75rem);
--fs-h1: clamp(2.6rem, min(8.6vw, 9svh) + .1rem, 5rem);   /* wide-ish grotesk: cap 5rem */
--fs-mast: clamp(3.4rem, 15vw, 9.5rem);                    /* "Open Book" masthead, 900, -0.045em */
```
- h1: 800, line-height .96, tracking -0.035em, `text-wrap:balance`. h2: 800, lh 1.02, -0.025em. h3: 700, lh 1.15, -0.01em.
- Body: lh 1.5, measure `max-width: 66ch`; `text-wrap: pretty`. Mono labels: 500→400, tracking .02em, uppercase only for folios.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: tight `clamp(56px,7vw,80px)`, normal `clamp(96px,9vw,120px)`, loose `clamp(128px,11vw,160px)`. Blueprint alternates them.

## Grid
- 12 cols ≥1100 / 8 cols 640-1099 / 4 cols <640. Gutter `clamp(16px,2vw,24px)`. Max width 1320px, page margin `clamp(20px,4vw,56px)`.
- Article layout ≥1100: text cols 1-8 (measure 66ch), **margin column 10-12** (sidenotes, sticky inside article `top: calc(var(--header-h) + 24px)`), col 9 empty air. 640-1099: sidenotes inline after their paragraph in a bordered box. <640: `sup.fn` is a button that toggles the note inline (`aria-expanded`); notes visible with JS off.
- Folio header in every article: mono `--fs--1`, `p. 04 — What a lockout costs`, 1px ink rule above, number left, title right.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| class | bg | ink | muted | rule | accent | focus | btn |
|---|---|---|---|---|---|---|---|
| t-paper (default) | #F5F1E8 | #17150F (16.19) | #5A5448 (6.66) | #CFC6B4 (rule only, 1.50) | #B42318 (5.83) | #B42318 (5.83) | #B42318 / #FFFFFF (6.57) |
| t-light (forms, cards) | #FFFFFF | #17150F (18.25) | #5A5448 (7.50) | #CFC6B4 | #B42318 (6.57) | #B42318 | #B42318 / #FFFFFF |
| t-mid (pull-out kraft) | #E8E0CE | #17150F (13.89) | #5A5448 (5.71) | #17150F 1px dashed | #B42318 (5.00) | #B42318 (5.00) | #B42318 / #FFFFFF |
| t-deep (back cover) | #1C1B18 | #F5F1E8 (15.27) | #B5AD9C (7.72) | rgba(245,241,232,.22) | #FF7A6B (6.76) words; #E9C46A (10.30) ticks | #E9C46A (10.30) | #E9C46A / #17150F (10.92) |
| t-accent (red band, one thin "correction" strip max) | #B42318 | #FFFFFF (6.57) | #F5F1E8 (5.83) | rgba(255,255,255,.35) | #FFFFFF | #E9C46A (3.93, ring only) | #F5F1E8 / #B42318 (5.83) |
Never: #E9C46A text on #B42318 (3.93) below 24px; #CFC6B4 for any text.

## Radius / rules / shadow
- Radius **0 everywhere** (print). Exception: none — buttons square too. Tag chips square.
- Rules: 1px `var(--ink)` for folios and table rows; 3px ink double rule (`border-top: 3px double`) under the masthead and above the colophon; 1px dashed for the pull-out perforation.
- Shadow only on mobile bar and sidenote popover: `0 8px 24px rgba(23,21,15,.18)`.

## Motion tokens
```
--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1);
--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;
```
Under `.sw-motion` only. Reduced motion: final state, no pin, no typing.

## Components
- **Buttons** (min-height 52px, padding 0 24px, Schibsted 700 `--fs-0`, radius 0):
  primary `bg:var(--btn-bg); color:var(--btn-ink)`; secondary `border:2px solid var(--ink); color:var(--ink); bg:transparent`; text button = red link with hover underline. `:active{transform:scale(.97)}`.
  Phone button: label "Call" in display + number in mono tabular.
- **Input**: 52px high, `bg:#FFFFFF`, 1px ink border, radius 0, mono label above `--fs--1`, focus = outline token. Error text #B42318 on white (6.57).
- **Card / article page**: no box, a 1px ink top rule + folio. Pull-out: t-mid, dashed perforation top + bottom with a mono "✂ pull-out page" label, desktop `rotate(-.6deg)`.
- **Sample tag**: mono 600 `--fs--1`, `border:1.5px solid currentColor; padding:2px 6px; text-transform:uppercase; letter-spacing:.06em` — red on paper ("SAMPLE"), stamped look via `rotate(-2deg)` only in hero flag.
- **Frame**: 4:5 cover photo, 3:2 inline photos; 1px ink border with 8px paper inset (`outline:1px solid var(--ink); outline-offset:-9px` on the img wrapper). Caption mono `--fs--1` + "fig. 1".
- **Header**: `--header-h: 64px` (56px <640). Left: "Open Book" mono-caps small masthead; center (≥1100): table of contents anchors "Contents 02 03 04 05 06 07"; right: open-now status + Call button. Paper bg, 1px ink bottom rule.
- **Mobile bar** (<900px): fixed bottom, 64px incl. safe-area, Call (60% width, red) + Text (40%, outline), shadow token.
- **Signature primitive** (draw once, reuse):
  ```css
  .errata{position:relative;display:inline-block;color:var(--muted)}
  .errata::after{content:"";position:absolute;left:-4%;right:-4%;top:52%;height:.11em;min-height:3px;
    background:var(--accent);transform-origin:left;transform:scaleX(var(--sw-p,1)) rotate(-4deg)}
  .caret-fix{font-family:var(--ff-m);font-weight:600;color:var(--accent);position:relative}
  .caret-fix::before{content:"‸";position:absolute;left:-.55em;bottom:-.35em;font-size:1.2em}
  sup.fn{font-family:var(--ff-m);font-size:.62em;color:var(--accent);font-weight:600}
  sup.fn a{display:inline-block;padding:12px 6px;margin:-12px -6px}   /* 48px hit */
  .sidenote{font:400 var(--fs--1)/1.45 var(--ff-m);color:var(--muted);border-top:2px solid var(--accent);padding-top:8px}
  .sidenote b{color:var(--accent)}  /* the number */
  .tick,.cross{stroke:var(--accent);stroke-width:3;fill:none;stroke-linecap:round;stroke-dasharray:40;stroke-dashoffset:calc(40 * (1 - var(--sw-p,1)))}
  ```
  On t-deep: `--accent:#FF7A6B` for strikes, ticks use `#E9C46A`. Default `--sw-p:1` so JS-off shows the drawn state; JS sets 0 then animates.

## Photo grade
`img{filter:saturate(.8) contrast(1.06) sepia(.12) brightness(1.02)}` (warm newsprint). Hero cover photo: plus `mix-blend-mode:multiply` on a #F5F1E8 frame bg so blacks sit in the ink, highlights take the paper. No duotone elsewhere.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}`
`@media (forced-colors:active){.errata::after,.sidenote{forced-color-adjust:none;background:CanvasText}.btn{border:2px solid ButtonText}:focus-visible{outline-color:Highlight}}`
