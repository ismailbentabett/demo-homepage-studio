# solar-B · design system (copy into :root)

## Fonts
- Display **Libre Franklin** variable `assets/fonts/libre-franklin/libre-franklin-100-900-normal.woff2` (29KB) → **preload**.
  Weights used: 800 (h1, h2), 700 (h3, numbers in results), 600 (buttons). No italic file.
- Text **Onest** `assets/fonts/onest/onest-100-900-normal.woff2`: 400 body, 500 lead, 600 labels. Not preloaded.
- Accent **JetBrains Mono** `assets/fonts/jetbrains-mono/jetbrains-mono-100-800-normal.woff2`: 500 rings, Sources rows,
  readouts, Sample tags; uppercase kickers at 500 + .08em tracking.
- Stacks: `--f-display:"Libre Franklin",Arial,sans-serif; --f-text:"Onest",system-ui,sans-serif;
  --f-mono:"JetBrains Mono",ui-monospace,monospace;` `font-variant-numeric:tabular-nums` on every number, price, phone.
- Fallback metrics: `@font-face{font-family:"LF-fallback";src:local(Arial);size-adjust:104%;ascent-override:92%}`.

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.875rem, .85rem + .1vw, .9375rem);   /* 14-15px, mono rows, captions; never < 13px */
--fs-0:  clamp(1.0625rem, 1rem + .25vw, 1.1875rem);  /* 17-19px body */
--fs-1:  clamp(1.25rem, 1.15rem + .45vw, 1.5rem);    /* lead */
--fs-2:  clamp(1.5rem, 1.3rem + .9vw, 2rem);         /* h3 / result number */
--fs-3:  clamp(1.8rem, 1.45rem + 1.6vw, 2.65rem);    /* h2 small */
--fs-4:  clamp(2.15rem, 1.6rem + 2.6vw, 3.55rem);    /* h2 */
--fs-h1: clamp(2.6rem, min(8.4vw, 9svh) + .1rem, 4.85rem); /* Franklin 800 is wide-ish: cap 4.85rem; half-width column */
```
h1 `font:800 var(--fs-h1)/.94 var(--f-display);letter-spacing:-.035em;text-wrap:balance`. h2 `800 var(--fs-4)/1
;letter-spacing:-.028em`. h3 `700 var(--fs-2)/1.1;-.015em`. Body `400 var(--fs-0)/1.5 var(--f-text)`, measure
`max-width:66ch`. Lead `500 var(--fs-1)/1.4`. Mono kicker `500 var(--fs--1)/1.3 var(--f-mono);letter-spacing:.08em;
text-transform:uppercase`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`.
Section padding: `--pad-tight:clamp(56px,7vw,80px)`, `--pad-normal:clamp(80px,9vw,120px)`, `--pad-loose:clamp(112px,12vw,160px)`.
Blueprint alternates tight / normal / loose; never two loose in a row.

## Grid
12 cols ≥ 1100 / 8 cols 700-1099 / 4 cols < 700. Gutter `--gut:clamp(16px,2vw,24px)`. Max `--max:1320px`, page
margin `--edge:clamp(20px,5vw,64px)`. **Source column:** at ≥ 1100 every content section reserves cols 11-12 as the
margin where ring callouts and the Sources strip head sit (content in cols 1-10). < 1100 callouts drop under content.

## Tones (each sets --bg --ink --muted --rule --accent --signal --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent (words) | signal | focus | btn-bg / btn-ink |
|---|---|---|---|---|---|---|---|---|
| `t-deep` | #15171A | #F3EDE3 (15.42) | #A9A49B (7.24) | #3A3F46 | #E08A52 (6.77) | #8FB8D6 (8.54) | #8FB8D6 (8.54) | #E08A52 / #15171A (6.77) |
| `t-mid` | #22262B | #F3EDE3 (13.06) | #A9A49B (6.13) | #3A3F46 | #E08A52 (5.74) | #8FB8D6 (7.24) | #8FB8D6 (7.24) | #E08A52 / #15171A (6.77) |
| `t-paper` | #F1EBDF | #1A1C1F (14.38) | #5C5850 (5.96) | #CFC6B6 | #9A461A (5.41) | #2F5F82 (5.74) | #2F5F82 (5.74) | #9A461A / #FFFFFF (6.43) |
| `t-accent` | #E08A52 | #15171A (6.77) | #15171A | #15171A33 | #15171A | #15171A | #15171A (6.77) | #15171A / #F3EDE3 (15.42) |
Hairline rule #3A3F46 on deep = 1.69: shapes only. Bright copper #E08A52 on paper = 2.23: never, not even rings.
`t-accent` is used once (the guarantee band). Dark runs: deep → mid is allowed only with a paper band within 2 sections.

## Shape
Radius: **0 everywhere**, rings and pills `999px` (rings are the only circles). Rules: 1.5px `var(--rule)`; signature
lines 1.5px copper. Shadow only on mobile bar + ring popover: `0 8px 24px rgba(0,0,0,.35)`.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --d-press:120ms; --d-ui:200ms;
--d-page:520ms; --d-story:900ms; --stagger:60ms;`

## Components
- **Buttons** min-height 52px, padding 0 22px, `600 var(--fs-0) var(--f-text)`, radius 0. Primary `var(--btn-bg)/
  var(--btn-ink)`; secondary 1.5px border `currentColor`, transparent; text button = copper text + hover hairline.
  `:active{transform:scale(.97)}` 120ms. Phone button carries a 16px handset SVG + tabular number.
- **Input** 52px, 1.5px border `var(--rule)` (paper: #8A8172 for 3:1 border), bg transparent, mono value, label above
  in mono kicker. Error text in accent words color.
- **Card** border-top 1.5px `var(--ink)`, no box, padding-top 16px, ring tag top-right.
- **Sample tag** mono 13px uppercase, 1px border currentColor, padding 2px 6px, text "SAMPLE".
- **Frame** photos 4:5 (hero half), 3:2 (break), 1:1 (details); 1.5px inner hairline `inset 0 0 0 1.5px #F3EDE31a`.
- **Header** `--header-h:68px` (56px < 700): wordmark (Franklin 800 "PW" in a ring + name), anchors, phone primary.
  bg #15171Aeb + backdrop blur 8px after 40px scroll.
- **Mobile bar** < 900: fixed bottom, 64px + safe-area, 3 buttons Call · Text · Size it, #22262B, shadow token.
- **Signature primitive (draw once, reuse):**
```css
.src{--c:var(--accent);display:inline-grid;place-items:center;inline-size:1.5em;block-size:1.5em;min-inline-size:24px;
  border:1.5px solid var(--c);border-radius:999px;font:500 .72em/1 var(--f-mono);color:var(--c);
  vertical-align:super;margin-inline-start:.15em;transition:background var(--d-ui),color var(--d-ui)}
button.src,a.src{padding:12px;margin:-12px -12px -12px calc(.15em - 12px);background-clip:content-box} /* 48px hit */
.src.is-hot,.src:hover{background:var(--signal);border-color:var(--signal);color:#15171A}
.src--fill{background:var(--c);color:var(--bg)}               /* ticked checklist ring */
.lead-line{fill:none;stroke:var(--accent);stroke-width:1.5;stroke-dasharray:2 4;vector-effect:non-scaling-stroke}
.sw-motion .lead-line[data-draw]{stroke-dasharray:var(--len);stroke-dashoffset:calc(var(--len) * (1 - var(--sw-p,0)))}
.sources{border-top:1.5px solid var(--ink);margin-top:var(--s-8);font:500 var(--fs--1)/1.45 var(--f-mono)}
.sources li{display:grid;grid-template-columns:3ch 1fr;gap:var(--s-3);padding:10px 0;border-bottom:1px solid var(--rule);
  background:linear-gradient(var(--signal),var(--signal)) 0 0/0 100% no-repeat;transition:background-size var(--d-ui) var(--ease-out)}
.sources li.is-hot{background-size:100% 100%;color:#15171A}
.sw-motion .sources li[data-reveal]{clip-path:inset(0 100% 0 0)} .sw-motion .sources li.is-in{clip-path:inset(0);transition:clip-path var(--d-page) var(--ease-out)}
```
  Ring `aria-describedby` → its Sources row id; rings that are buttons get `aria-label="Source 3: your bill"`.
  Ring on light tone uses `--accent:#9A461A`, hot state `--signal:#2F5F82` with `color:#F1EBDF` (5.74 inverse).

## Photo grade
Every img: `filter:saturate(.78) contrast(1.06) brightness(.92) hue-rotate(-4deg)` (cool, night). Hero panel macro:
duotone via `mix-blend-mode:multiply` over a #15171A→#2F5F82 gradient + `filter:grayscale(1) contrast(1.15)`, so the
cells read night-blue and the copper lines pop. Detail photos on paper tone: `sepia(.06)` added.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` (≥ 5.74 on every tone).
```css
@media (forced-colors:active){.btn{border:2px solid CanvasText}.src{border-color:CanvasText;color:CanvasText}
 .lead-line{stroke:CanvasText}.sources li.is-hot{outline:2px solid Highlight}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.lead-line{stroke-dashoffset:0!important}}
```
