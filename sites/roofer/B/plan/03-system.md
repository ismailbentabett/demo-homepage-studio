# Design system — roofer-B · Pinned Roof Plan

## Fonts (self-hosted, catalog files)
- Display `Instrument Sans` — `assets/fonts/instrument-sans/instrument-sans-400-700-normal.woff2` (57KB) **preload** (only preload). `font-stretch: 75% 100%`, weight 400 700. Use `font-stretch:82%` + 640 for h1/h2, `92%` + 600 for h3. Italic file not loaded.
- Text `Public Sans` — `public-sans-100-900-normal.woff2` + italic (for review quotes only). Body 400, lead 450, strong 650.
- Accent `Martian Mono` — `martian-mono-100-800-normal.woff2`. `font-stretch:87.5%`, 400 labels / 600 numbers & verdicts. Always `font-variant-numeric: tabular-nums`; uppercase labels tracking .04em. Min size 13px (it is wide: 13px Martian ≈ 15px sans).
- Fallbacks: display `"Instrument Sans", "Arial Narrow", Arial, sans-serif`; text `"Public Sans", system-ui, sans-serif` (fallback only); mono `"Martian Mono", ui-monospace, Menlo, monospace`.

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--1: clamp(.8125rem, .79rem + .1vw, .875rem);   /* 13-14px: mono labels, Sample tags */
--fs-0:  clamp(1.0625rem, 1.02rem + .2vw, 1.1875rem); /* 17-19px body */
--fs-1:  clamp(1.275rem, 1.18rem + .45vw, 1.58rem);  /* lead, h4 */
--fs-2:  clamp(1.53rem, 1.36rem + .85vw, 2.11rem);   /* h3, prices */
--fs-3:  clamp(1.84rem, 1.55rem + 1.45vw, 2.81rem);  /* h2 small */
--fs-4:  clamp(2.2rem, 1.75rem + 2.3vw, 3.75rem);    /* h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.5rem); /* stretch 82% lets it go to 5.5rem */
```
h1: Instrument Sans 640, stretch 82%, line-height .94, tracking -0.035em, `text-wrap:balance`. h2: 620, stretch 82%, lh 1.0, -0.03em. h3: 600, stretch 92%, lh 1.1, -0.015em. Body 1.5 lh, measure `max-width:66ch`. Lead: `--fs-1`, weight 450, lh 1.4. Mono kicker: `--fs--1`, 500, uppercase, tracking .04em, color `--signal-ink` (blue).

## Space
`--s-1:4px --s-2:8px --s-3:12px --s-4:16px --s-5:24px --s-6:32px --s-7:48px --s-8:64px --s-9:96px --s-10:120px --s-11:160px`
Section padding: `--pad-tight: clamp(56px, 7vw, 80px)`, `--pad-normal: clamp(80px, 10vw, 120px)`, `--pad-loose: clamp(104px, 13vw, 160px)`. Blueprint alternates them.

## Grid
- 12 col ≥ 1024 (gutter 24px, max-width 1320px, outer margin `clamp(16px, 4vw, 56px)`); 8 col 640-1023 (gutter 20); 4 col < 640 (gutter 16).
- **Margin column** ≥ 1024: cols 1-3 = the sticky plan rail (`.plan-dock`, 220px wide, `top: calc(var(--header-h) + 24px)`); content cols 4-12. Findings sections use it; other sections span full 12 to break rhythm.
- Report sheet (hero): cols 6-12 at ≥ 1024 (max 640px wide, aspect ~ 1:1.25 but height from content); full width < 1024.

## Tones (each sets the full set; contrast from node tools/contrast.mjs)
```css
.t-paper { --bg:#f6f4ef; --ink:#1b1f24; --muted:#585e66; --rule:#cfcac0; --accent:#c41e3a; --signal-ink:#1f5fbf; --focus:#1f5fbf; --btn-bg:#c41e3a; --btn-ink:#ffffff; --btn2-bd:#1b1f24; --btn2-ink:#1b1f24; }
.t-light { --bg:#ffffff; --ink:#1b1f24; --muted:#585e66; --rule:#d9d5cc; --accent:#c41e3a; --signal-ink:#1f5fbf; --focus:#1f5fbf; --btn-bg:#c41e3a; --btn-ink:#ffffff; --btn2-bd:#1b1f24; --btn2-ink:#1b1f24; }
.t-mid   { --bg:#e8e5dc; --ink:#1b1f24; --muted:#585e66; --rule:#bdb7aa; --accent:#c41e3a; --signal-ink:#1f5fbf; --focus:#1f5fbf; --btn-bg:#c41e3a; --btn-ink:#ffffff; --btn2-bd:#1b1f24; --btn2-ink:#1b1f24; }
.t-deep  { --bg:#1f252b; --ink:#f6f4ef; --muted:#a9b0b8; --rule:#3a424b; --accent:#ff8a96; --signal-ink:#8fb8ff; --focus:#8fb8ff; --btn-bg:#ff8a96; --btn-ink:#1b1f24; --btn2-bd:#f6f4ef; --btn2-ink:#f6f4ef; }
.t-accent{ --bg:#c41e3a; --ink:#ffffff; --muted:#f6f4ef; --rule:rgba(255,255,255,.45); --accent:#ffffff; --signal-ink:#ffffff; --focus:#ffffff; --btn-bg:#ffffff; --btn-ink:#a3182f; --btn2-bd:#ffffff; --btn2-ink:#ffffff; }
```
| Tone | pairs (ratio) |
|---|---|
| t-paper | ink 15.06 · muted 5.95 · accent 5.31 · blue 5.54 · btn white/#c41e3a 5.84 |
| t-light | ink 16.56 · muted 6.54 · accent 5.84 · blue 6.09 |
| t-mid | ink 13.14 · muted 5.19 · accent 4.63 (≥ 15px only) · blue 4.83 |
| t-deep | ink 14.07 · muted 7.06 · accent #ff8a96 6.86 · blue #8fb8ff 7.70 · btn #1b1f24/#ff8a96 7.35 |
| t-accent | white 5.84 · paper 5.31 · focus white 5.84 · btn #a3182f on #fff 7.69 |
Never: #1b1f24 on red (2.83), #c41e3a on deep (2.64), #1f5fbf on deep (2.53), #585e66 on deep (2.36), #ffd1d7 on red (4.27), blue on red (1.04).
t-accent is used once (the Texas deductible note band). t-deep: line items + footer, never touching.

## Radius · rules · shadow
- Radius **2px everywhere** (sheet, cards, inputs, buttons, photos). Pins and the circle are true circles (50%) — they are marks, not boxes.
- Rules: **1px** `var(--rule)` for structure; **1.5px** `#1f5fbf` (light) / `#8fb8ff` (deep) for plan lines + dimension lines; **dotted** `1px dotted var(--muted)` only for price leaders.
- Shadow only on floating: report sheet `0 1px 0 rgba(27,31,36,.08), 0 24px 48px -24px rgba(27,31,36,.35)`; mobile bar `0 -8px 24px rgba(27,31,36,.18)`; popover same as sheet.

## Motion tokens
`--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1); --t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms;`

## Components
- **Header** `--header-h:64px` (72 ≥ 1024): t-light, 1px bottom rule. Left: mark (pin with "SR" initials in mono, 32px) + `{{biz.name}}`; center ≥ 1024: anchors (Findings, Count, Claim, Prices, Contact); right: phone as text link mono 600 + primary button "Count my squares" (≥ 1024 only).
- **Buttons** min-height 48px (52 in hero), padding 0 22px, radius 2px, Public Sans 650 `--fs-0`. Primary `bg var(--btn-bg) / color var(--btn-ink)`, hover bg #a3182f on light tones. Secondary: transparent, 1.5px border `--btn2-bd`. Text button: Martian Mono 500 uppercase `--fs--1` + red-pen underline. Press `scale(.97)` 120ms.
- **Input** 52px, 1.5px #1b1f24 border on white, radius 2px, label above in mono `--fs--1`; error text #c41e3a (5.84 on white) with icon; focus ring standard.
- **Card (finding card)**: white sheet, 1px rule, header row = `[pin] F-03 · Hail claim help ........ [verdict]`, body, photo optional. No shadow.
- **Sample tag**: Martian Mono 500 13px uppercase, 1px border currentColor, padding 2px 6px, radius 2px, color `--muted`. Text "Sample rating" / "Sample review" / "Sample pricing" / "Licence # (sample)".
- **Frame (photo)**: radius 2px, 1px `--rule` border, ratios 4:3 (findings), 3:2 (break, 21:9 at ≥ 1024), 1:1 (report thumbs). Caption below in mono `--fs--1` `--muted` prefixed by the finding number: `F-02 · Rubber boot around a plumbing vent`.
- **Mobile bar** (< 1024): fixed bottom, t-light, 64px + `env(safe-area-inset-bottom)`, two halves: [Call] secondary-outline with phone icon, [Count my squares] primary. Hidden while #contact is in view.
- **Report sheet** `.sheet`: white, padding `clamp(20px,3vw,40px)`, 2px radius, shadow (floating), title block on top = 4 mono cells in a 1px ruled grid: `REPORT` / `{{biz.city}}, {{biz.state}}` / `ROOF` sample / `FINDINGS 7`.

### Signature primitives (draw once, reuse everywhere)
```css
.pin{--pin:28px;display:inline-grid;place-items:center;inline-size:var(--pin);block-size:var(--pin);border-radius:50%;
  background:var(--accent);color:#fff /* 5.84 on #c41e3a */;font:600 12px/1 "Martian Mono",monospace;font-stretch:87.5%;}
/* pin on deep: background #ff8a96, color #1b1f24 (7.35). As a link: wrap in 48px hit area (padding 10px, margin -10px). */
.pin.is-ok{background:transparent;color:var(--accent);box-shadow:inset 0 0 0 1.5px var(--accent)}  /* ticked state uses ✓ glyph */
.leader{stroke:var(--accent);stroke-width:1;fill:none;stroke-dasharray:1;stroke-dashoffset:calc(1 - var(--sw-p,1));} /* pathLength="1" on the path */
.leader-end{fill:var(--accent);r:2} /* 4px dot */
.pen-circle{stroke:var(--accent);stroke-width:2;fill:none;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:calc(1 - var(--sw-c,1))}
/* pen-circle path: one hand-drawn ellipse that overshoots its start by ~12% (not a perfect ellipse), pathLength="1",
   placed absolutely around .verdict with inset -6px -10px. */
.verdict{font:600 var(--fs--1)/1 "Martian Mono";letter-spacing:.06em;text-transform:uppercase;position:relative;padding:6px 10px}
.verdict--fix{color:var(--accent)} .verdict--watch{color:var(--signal-ink)} .verdict--ok{color:var(--muted)}
.facet{fill:transparent;stroke:var(--signal-ink);stroke-width:1.5;transition:fill var(--t-ui) var(--ease-out)}
.facet.is-counted{fill:color-mix(in srgb,var(--signal-ink) 9%,transparent)}
.dim{stroke:var(--signal-ink);stroke-width:1;marker-start/-end: 6px end ticks} .dim-label{font:500 12px "Martian Mono";fill:var(--signal-ink)}
```
SVG text inside the plan ≥ 12px rendered but decorative (aria-hidden); every number it shows also exists in HTML text (sheet summary / sr-only). The plan SVG is one `<symbol id="roofplan">` reused via `<use>` in hero, dock, estimator, footer (variation by classes).
Default (no JS / reduced motion): `--sw-p:1; --sw-c:1;` → everything drawn. JS sets them to 0 under `.sw-motion` only.

## Photo grade
Cool, overcast, documentary: `filter: saturate(.78) contrast(1.06) brightness(1.02) hue-rotate(-4deg);` on every img + poster.
Hero photo only: overlay `linear-gradient(0deg, rgba(31,37,43,.35), rgba(31,37,43,.1))` so the white sheet separates; no text sits on the photo (all text is on the sheet), so no scrim contrast to measure. Break photo: optional blue multiply `mix-blend-mode:multiply` layer `#1f5fbf` at 8%.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
.t-accent :focus-visible{outline-color:#fff}
@media (forced-colors:active){
  .btn{border:2px solid CanvasText} .pin{forced-color-adjust:none} .facet,.leader,.pen-circle{stroke:CanvasText}
  .sheet{border:1px solid CanvasText}
}
```
