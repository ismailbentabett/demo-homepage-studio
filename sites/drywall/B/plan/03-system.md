# drywall-B · Design system (copy into :root)

## Fonts
- Epilogue variable 100-900 normal (`assets/fonts/epilogue/epilogue-100-900-normal.woff2`) **preload**; use 800 (h1, 900 for the mask), 700 h2/h3.
- Albert Sans variable normal (+ italic file only if used) 400 / 600.
- Martian Mono variable 100-800, `font-stretch: 87.5%` (wdth 87.5), 400 / 500; `font-variant-numeric: tabular-nums`.
- `size-adjust` fallbacks: Epilogue → Arial 104%; Albert Sans → Arial 98%.

## Type scale
```
--ff-d:"Epilogue",Arial,sans-serif; --ff-t:"Albert Sans",Arial,sans-serif; --ff-m:"Martian Mono",ui-monospace,monospace;
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px mono labels, floor 13 */
--fs-0:  clamp(1.0625rem, 1.03rem + .17vw, 1.1875rem); /* body 17-19 */
--fs-1:  clamp(1.275rem, 1.2rem + .4vw, 1.583rem);
--fs-2:  clamp(1.53rem, 1.4rem + .7vw, 2.11rem);
--fs-3:  clamp(1.836rem, 1.6rem + 1.2vw, 2.81rem);
--fs-4:  clamp(2.2rem, 1.8rem + 2vw, 3.75rem);
--fs-h1: clamp(2.6rem, min(8.4vw, 9svh) + .1rem, 5rem);   /* Epilogue is wide: cap 5rem */
--lh-d: .94; --tr-d: -0.035em; --lh-t: 1.5; --measure: 66ch;
```
h1 900 weight, `text-wrap: balance`; h2 700 `--tr-d:-.025em`, lh 1.02. Mono labels uppercase, `letter-spacing:.06em`, 500.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad: clamp(96px, 10vw, 120px)`, `--pad-loose: clamp(128px, 13vw, 160px)`.

## Grid
12 cols ≥1024 (gutter 24px, max 1320px, side margin clamp(20px,5vw,72px)); 8 cols 640-1023 (gutter 20); 4 cols <640 (gutter 16).
No margin column. Grade strip sits on the content max-width, left-aligned to col 1.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| class | bg | ink | muted | rule | accent | focus | btn bg / ink | checked |
|---|---|---|---|---|---|---|---|---|
| t-deep (hero, footer) | #0B0C0E | #EDE6DA | #A39D93 | #2A2D33 | #8AD4E2 | #8AD4E2 | #8AD4E2 / #141517 | 15.77 / 7.26 / 11.73 |
| t-room (default) | #141517 | #EDE6DA | #A39D93 | #2E3137 | #8AD4E2 | #8AD4E2 | #8AD4E2 / #141517 | 14.73 / 6.78 / 10.95 |
| t-mid (cards, tool bands) | #22252A | #EDE6DA | #A39D93 | #3A3D43 | #8AD4E2 | #8AD4E2 | #8AD4E2 / #141517 | 12.39 / 5.71 / 9.22 |
| t-light (form band only) | #EFEAE1 | #17181A | #5E5A54 | #CFC7B9 | #0B6374 | #0B6374 | #0B6374 / #FFFFFF | 14.82 / 5.71 / 5.74; btn 6.88 |
| t-signal chip | #F2B544 | #17181A | - | - | - | #17181A | - | 9.70 |
Rules are shapes only (#2E3137 on #141517 is ~1.7: never text). Inputs on t-light: fill #E3DCD0, ink #17181A (13.04), placeholder #5E5A54 (5.02), border 1px #8C8478.

## Radius, rules, shadow
Radius **2px everywhere**, pills **999px** (grade chips only). Rules 1px var(--rule); grade strip cells 1px #3A3D43; lit cell fill accent.
Shadow only on mobile bar and popover: `0 -8px 24px rgba(0,0,0,.45)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **.btn** min-height 52px, padding 0 22px, radius 2px, Albert Sans 600 var(--fs-0); primary: --btn-bg/--btn-ink; secondary: 1.5px border var(--ink), transparent; text button: underline 1px offset 4px, accent. Press: `transform: translateY(1px)` 120ms. Icon 20px.
- **input/select:** height 52px, radius 2px, 1px border; label above in mono --fs--1; error: #F2B544 text on dark (9.97); on t-light the error is ink text + a signal-filled icon (no new hex).
- **.card:** t-mid, padding var(--s-6), 1px rule border, no shadow; hover side-light: `background-image: linear-gradient(120deg, rgba(237,230,218,.08), transparent 40%)` with `background-position` 0→30% 200ms.
- **.sample-tag:** mono --fs--1, 1px border var(--muted), radius 999px, padding 2px 8px, ink muted.
- **.frame:** not used for photos (none approved); `.lit-wall` frames take aspect 4/3 (swatch), 16/9 (story), radius 2px, 1px rule.
- **Header:** `--header-h: 64px` (72px ≥1024), t-deep, logo text (Epilogue 800 "Raking Light" + mono "DRYWALL"), anchors, call button; grade strip 28px under it (part of header, sticky).
- **Mobile bar** (<1024, appears when hero leaves): 2 equal 56px buttons: Call (accent) / Text (outline); `padding-bottom: env(safe-area-inset-bottom)`.
- **Signature primitive `.grade`:**
  ```css
  .grade{display:grid;grid-template-columns:repeat(6,minmax(36px,1fr)) auto;align-items:center;gap:0;font:500 var(--fs--1)/1 var(--ff-m);font-stretch:87.5%}
  .grade>i{font-style:normal;height:28px;display:grid;place-items:center;border:1px solid #3A3D43;margin-left:-1px;color:var(--muted)}
  .grade>i[data-on]{background:var(--accent);color:#141517;border-color:var(--accent)}  /* 10.95 */
  .grade>small{padding-left:var(--s-4);color:var(--muted)}   /* "checked at 8° · 0 seams flagged" */
  ```
  Level cells via `--lvl` (0-5) set by app.js from `--sw-p`; JS off: `data-on` written in HTML on the section's level.
- **`.lit-wall` SVG** (inline, aria-hidden, once in a `<defs>` per preset): `feTurbulence type=fractalNoise baseFrequency` presets smooth .002 / orange-peel .9 numOctaves 2 / knockdown .045 numOctaves 3 / skip-trowel .02×.06 numOctaves 2 → `feDiffuseLighting lighting-color=#EDE6DA surfaceScale (0-6) diffuseConstant 1.1` → `feDistantLight azimuth elevation` → `feComposite` over #141517. app.js sets azimuth 165-200, elevation 6-14 via rAF only while in view.
  **Hero mask:** h1 is real HTML text, `color:#EDE6DA` set first (axe reads 15.77 on #0B0C0E), then inside
  `@supports (background-clip:text)`: `color:transparent; background: radial-gradient(ellipse 30% 140% at var(--bx,15%) 50%, #FFFFFF 0, #EDE6DA 40%, #A39D93 100%), url("data:image/svg+xml,…knockdown feTurbulence+feDiffuseLighting…"); background-blend-mode: multiply; -webkit-background-clip:text; background-clip:text`.
  Darkest stop #A39D93 = 7.26 on #0B0C0E, so every part of the letters stays readable. app.js tweens `--bx` 0%→100%→62% in the
  intro (inline data-URI texture, not a media file). Forced-colors / JS off: solid ink, `--bx:62%`.

## Photo grade
No photos placed (library has none for B). If photos are approved later: `filter: saturate(.7) contrast(1.12) brightness(.82)` + overlay `linear-gradient(90deg, rgba(11,12,14,.0) 30%, rgba(11,12,14,.65))` from the right = side light from the left.

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` (≥ 5.74 on every tone).
`@media (forced-colors:active){.grade>i[data-on]{forced-color-adjust:none;background:Highlight;color:HighlightText}.btn{border:2px solid ButtonText}h1{background:none;color:CanvasText}}`
