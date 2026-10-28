# garagedoor-C · Design system (copy into :root)

## Fonts
- Display **Arvo** 400 + 700 normal (assets/fonts/arvo/arvo-700-normal.woff2 **preloaded**; 400 not preloaded). No variable axes.
- Text **Libre Franklin** variable wght 100–900 (normal + italic files), weights used 400 / 500 / 600 / 700.
- Labels: Libre Franklin 600, uppercase, letter-spacing .08em, --fs--1. Numbers everywhere: `font-variant-numeric: tabular-nums`.

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13–14px, floor */
--fs-0:  clamp(1.0625rem, 1.03rem + .15vw, 1.125rem); /* 17–18 body */
--fs-1:  clamp(1.275rem, 1.2rem + .4vw, 1.5rem);
--fs-2:  clamp(1.53rem, 1.4rem + .75vw, 2rem);
--fs-3:  clamp(1.836rem, 1.6rem + 1.3vw, 2.666rem);
--fs-4:  clamp(2.2rem, 1.85rem + 2vw, 3.553rem);
--fs-h1: clamp(2.4rem, min(8vw, 8.5svh) + .1rem, 4.6rem);  /* Arvo is wide: cap 4.6rem */
--fs-mask: clamp(9rem, 38vw, 34rem);                         /* the −8° hero mask, aria-hidden */
--fs-stamp: clamp(2.75rem, 2rem + 3vw, 4.5rem);
```
Display: Arvo 700, letter-spacing -.025em, line-height .98; h2 Arvo 700 lh 1.04 -.02em; stamps Arvo 700 lh 1, "°F" at .42em superscript, letter-spacing -.04em. Body Libre Franklin 400, lh 1.5, max-width 66ch. Headings `text-wrap:balance`, p `text-wrap:pretty`.

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px,7vw,80px)`, `--pad-normal: clamp(96px,10vw,120px)`, `--pad-loose: clamp(128px,13vw,160px)`.

## Grid
12 cols ≥1100 / 8 cols 640–1099 / 4 cols <640. Gutter `--gutter: clamp(16px,2vw,24px)`. `--max: 1320px`, side margin `clamp(20px,4vw,56px)`.
Margin column (≥1100): cols 1–2 hold the section's `.stamp`, sticky `top: calc(var(--header-h) + 24px)`; content cols 3–12. Below 1100 the stamp sits above the h2, left aligned.

## Tones (each sets --bg --ink --muted --rule --accent --focus --btn-bg --btn-ink)
| tone | bg | ink | muted | rule | accent (text) | focus | ratios |
|---|---|---|---|---|---|---|---|
| `t-deep` | #0F2340 | #EEF3F7 | #A9BCD0 | rgba(238,243,247,.18) | #F2A93B | #F2A93B | 14.08 / 8.08 / 7.87 / 7.87 |
| `t-mid` | #1B3A60 | #EEF3F7 | #B4C6D8 | rgba(238,243,247,.22) | #F2A93B | #F2A93B | 10.32 / 6.59 / 5.77 / 5.77 |
| `t-paper` | #EEF3F7 | #14202E | #4A5A6C | #C9D4DF (rule only) | #8A4B06 | #0F2340 | 14.73 / 6.32 / 6.08 / 14.08 |
| `t-light` | #FFFFFF | #0F2340 | #4A5A6C | #D6DEE6 | #8A4B06 | #0F2340 | 15.73 / 7.07 / ≥6.08 / 15.73 |
| `t-accent` (garage light band, quote form) | #F2A93B | #0F2340 | #0F2340 | rgba(15,35,64,.25) | #0F2340 | #0F2340 | 7.87 (all text deep; no muted grey on amber) |
Buttons: on deep/mid primary = amber bg #F2A93B + #0F2340 text (7.87); on paper/light primary = #0F2340 bg + #EEF3F7 text (14.08); on t-accent primary = #0F2340 bg + #EEF3F7. Stop button = #B8321C + #FFFFFF (5.98). Signal text on deep = #FFB4A2 (9.21). NEVER: amber text on paper (1.78), #B8321C on deep (2.63).

## Radius, rules, shadow
Radius 2px everywhere (stamped plates), buttons 2px too (no pills). Rules 1px var(--rule); stamp box 2px solid currentColor. Shadow only on mobile bar + popover: `0 -8px 24px rgba(15,35,64,.28)`.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1); --ease-io: cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms`

## Components
- `.btn` min-height 52px, padding 0 22px, Libre Franklin 650 --fs-0, 2px radius; `.btn--primary`, `.btn--secondary` (2px border currentColor, transparent), `.btn--text` (underline 2px offset 4px, inline-block padding-block 12px). Press: translateY(1px) 120ms.
- `.input` 52px, 2px border var(--rule) → focus border var(--ink), bg var(--bg) lightened (deep: #13294A; paper: #FFFFFF), label above in label style.
- `.card` 1px rule border, 2px radius, padding var(--s-6), `.frost` edge on top border.
- `.tag-sample` "Sample": Libre Franklin 600 --fs--1 uppercase, 1px border currentColor, padding 2px 6px.
- `.frame` 4:5 (portrait), 3:2 (story), 21:9 (break); `overflow:clip`, photo grade below.
- Header `--header-h: 68px` (mobile 60px), t-deep, phone as text link ≥1024; Call button always.
- Mobile bar <768: fixed bottom, 2 × 50% [Call (amber) | Text (mid)], height 60px + env(safe-area-inset-bottom); body padding-bottom 72px.
- **Signature primitive:**
```css
.stamp{display:inline-flex;align-items:flex-start;gap:.06em;font:700 var(--fs-stamp)/1 "Arvo",serif;letter-spacing:-.04em;
  padding:.12em .22em .08em;border:2px solid currentColor;border-radius:2px;font-variant-numeric:tabular-nums;
  transition:color var(--t-ui) var(--ease-out)}
.stamp sup{font-size:.42em;margin-top:.12em;letter-spacing:0}
.stamp + .stamp__line{font:600 var(--fs--1)/1.3 "Libre Franklin";text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
.frost{--cold:0;position:relative}
.frost::before{content:"";position:absolute;inset:0;pointer-events:none;border-radius:inherit;
  background:url(frost.svg) top left/320px auto repeat-x, url(frost.svg) bottom left/320px auto repeat-x;
  -webkit-mask:linear-gradient(#000 0 0);opacity:calc(.15 + var(--cold)*.7);
  clip-path:inset(0 0 calc(100% - var(--cold)*28px) 0);transition:opacity var(--t-ui) var(--ease-out)}
.frost:is(:hover,:focus-within)::before{opacity:.12}   /* thaw */
```
`frost.svg` = inline SVG data-URI of white branching crystal strokes (stroke #EEF3F7, opacity .9, ~1.2KB), drawn by builder. `--cold` per section: hero 1, 104° 0, 88° .35, 34° .7, −8° 1, prices .5, footer 0.
- Hero mask: `.mask{font:700 var(--fs-mask)/.8 "Arvo";background:url(hero) 50% 40%/cover;-webkit-background-clip:text;color:transparent}` with fallback color #A9BCD0 when `background-clip:text` unsupported (`@supports`). Builder may instead use SVG `<text>` clipPath with `[[img]]` inside; either way aria-hidden.

## Photo grade
`filter: saturate(.82) contrast(1.06) brightness(.98) hue-rotate(-4deg)`; cool overlay on deep bands: `::after{background:#0F2340;mix-blend-mode:multiply;opacity:.22}`. Warm garage-light photos keep amber: no overlay on those (story 104° / break).

## Focus
`:focus-visible{outline:3px solid var(--focus);outline-offset:3px}` per tone above (≥5.77 everywhere).
`@media (forced-colors:active){.btn,.stamp,.card{border:2px solid CanvasText}.mask{color:CanvasText;background:none}.frost::before{display:none}:focus-visible{outline-color:Highlight}}`
