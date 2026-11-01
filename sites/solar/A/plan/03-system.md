# solar-A · Design system (copy into :root)

## Fonts
- Display: Saira Condensed 600 + 800 (static files `assets/fonts/saira-condensed/saira-condensed-{600,800}-normal.woff2`).
  **Preload 800 only** (h1). 600 for h2/h3 and step numbers.
- Text: Public Sans variable 100-900 (`public-sans-100-900-normal.woff2` + italic for review quotes). Weights used 400/500/700.
- Accent: JetBrains Mono variable, weight 500 (labels, pitch, counters, Sample tags), uppercase, tracking .06em.
- No `wdth`/`opsz` axes available; contrast comes from weight 800 vs 600 and from mono labels.

```css
--f-display:"Saira Condensed","Arial Narrow",sans-serif;
--f-text:"Public Sans",system-ui,sans-serif;
--f-mono:"JetBrains Mono",ui-monospace,monospace;
```

## Type scale (1.2 mobile → 1.333 desktop)
```css
--fs--2:.8125rem;                                   /* 13px floor: mono labels */
--fs--1:clamp(.875rem,.85rem + .1vw,.9375rem);
--fs-0:clamp(1.0625rem,1rem + .25vw,1.1875rem);     /* body 17→19px */
--fs-1:clamp(1.275rem,1.15rem + .55vw,1.583rem);
--fs-2:clamp(1.53rem,1.3rem + 1vw,2.11rem);
--fs-3:clamp(1.836rem,1.45rem + 1.7vw,2.81rem);
--fs-4:clamp(2.2rem,1.6rem + 2.7vw,3.75rem);
--fs-h1:clamp(2.9rem, min(10.5vw, 10.5svh) + .1rem, 6.25rem); /* condensed face: allowed up to 6.5rem */
```
- h1: Saira Condensed 800, uppercase NO (sentence case), `letter-spacing:-.02em`, `line-height:.9`, `text-wrap:balance`.
- h2: 600, `--fs-4`, -.015em, lh .95. h3: Public Sans 700 `--fs-1`, lh 1.2.
- Step numbers: Saira 800 `--fs-4`, `font-variant-numeric:tabular-nums`, color `--accent-ink` on light, `--accent` on deep.
- Body: Public Sans 400, `--fs-0`, lh 1.5, `max-width:66ch`, `text-wrap:pretty`. Lead: 500 `--fs-1` lh 1.4, 52ch.
- Mono label: `--fs--2`, 500, uppercase, `letter-spacing:.06em`.

## Space
```css
--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px; --s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:120px; --s-11:160px;
--pad-tight:clamp(56px,7vw,80px); --pad-normal:clamp(80px,9vw,120px); --pad-loose:clamp(104px,12vw,160px);
```
Blueprint alternates tight / normal / loose, never the same size twice in a row.

## Grid
- 12 cols ≥1024 (gutter 24px), 8 cols 640-1023 (gutter 20px), 4 cols <640 (gutter 16px).
- `--max:1320px`; side margin `clamp(16px,4vw,56px)`.
- `--oc` (rafter on-centre spacing, the signature rhythm): `32px` <640, `40px` 640-1023, `48px` ≥1024.
  Section content starts snap to multiples of `--oc` where possible (card widths, rafter row length).

## Tones
| class | --bg | --ink | --muted | --rule | --accent (words) | --focus | btn primary (bg / fg) | btn secondary |
|---|---|---|---|---|---|---|---|---|
| t-paper | #F5F2EA | #22262B | #4E555C | #8E979F | #8A5A00 | #1F5FA8 | #2C3640 / #FFFFFF | 2px #22262B border / #22262B |
| t-mid | #E6E3DA | #22262B | #4E555C | #8E979F | #8A5A00 | #1F5FA8 | #2C3640 / #FFFFFF | 2px #22262B / #22262B |
| t-deep | #2C3640 | #F5F2EA | #C9CDD1 | #5A6672 (shape) | #F2B705 | #F2B705 | #F2B705 / #22262B | 2px #F5F2EA / #F5F2EA |
| t-accent (sun band) | #F2B705 | #22262B | #2C3640 | #22262B | #22262B | #22262B | #2C3640 / #FFFFFF | 2px #22262B / #22262B |
| t-ink (footer) | #22262B | #FFFFFF | #B9C0C6 | #4E555C (shape) | #F2B705 | #F2B705 | #F2B705 / #22262B | 2px #FFFFFF / #FFFFFF |

Contrast (contrast.mjs): paper ink 13.60 · paper muted 6.75 · paper accent-ink 5.29 · paper focus 5.75 · mid ink 11.85 · mid
muted 5.89 · mid accent-ink 4.61 · mid focus 5.01 · deep paper 10.98 · deep muted 7.68 · deep yellow 6.75 · white on slate btn
12.28 · ink on yellow 8.36 · slate on yellow 6.75 · footer white 15.21 · footer muted 8.27 · yellow on ink 8.36.
Fails (shapes only): yellow on paper 1.62, roof grey on paper 2.65, blue on yellow 3.54 (never). The t-accent band is used once
(the quiz verdict / CTA band). Never two t-deep bands in a row; t-accent may touch t-deep.

## Radius, rules, shadow
- Radius: **2px everywhere** (cards, inputs, buttons, frames, chips). No pills. Mount glyph washer is a circle (it's an object).
- Rules: 1.5px solid `--rule`; signature rafter row rule 1.5px `--ink` (on deep: `--muted`).
- Shadow only on the mobile bar and popovers: `0 -6px 24px rgba(34,38,43,.18)`; quiz card in hero: `0 12px 32px rgba(34,38,43,.14)` (it floats over the photo).

## Motion tokens
```css
--ease-out:cubic-bezier(.23,1,.32,1); --ease-io:cubic-bezier(.77,0,.175,1);
--t-press:120ms; --t-ui:200ms; --t-page:520ms; --t-story:900ms; --stagger:60ms; --t-snap:180ms;
```

## Components
- **Buttons** min-height 52px, padding 14px 22px, Public Sans 700 `--fs-0`, radius 2px. Primary per tone table. Secondary =
  2px border. Text button: underline 2px `--focus` color offset 4px. `:active{transform:scale(.97)}` 120ms. Call button
  carries a 20px phone glyph + `{{biz.phone}}` tabular-nums.
- **Chips** (quiz choices): 48px tall, 1.5px `--rule` border, radius 2px; `[aria-pressed=true]` → bg `--deep`, fg #FFF, a
  4px yellow washer dot at left.
- **Input**: 52px, 1.5px #4E555C border (6.75 on paper ✓ for non-text ≥3), radius 2px, label above in 500 `--fs--1`,
  focus = outline rule below.
- **Card**: bg `--bg` of the next tone up (paper card on mid, mid card on paper), 1.5px `--rule` top only + 24px pad.
- **Sample tag**: mono `--fs--2`, 1.5px border currentColor, padding 2px 6px, text "SAMPLE"; inline after the number.
- **Frame**: photos in 3:2 (story), 16:9 (break, phone hero), 4:5 (detail); radius 2px; grade below; caption mono `--fs--2`
  under the frame, left aligned, preceded by a 12px rafter tick.
- **Header**: `--header-h:68px` (mobile 60px), t-paper, 1.5px bottom rule; wordmark = initials "RL" in Saira 800 inside a
  5/12 roof-pitch roof shape + `{{biz.short}}`; right: anchors (Install, Roof check, Prices, Reviews), Call button ≥1024.
- **Mobile bar** (<1024): fixed bottom, 64px incl. safe-area, t-deep, two halves: [Call] yellow primary | [Text] secondary;
  body gets `padding-bottom:72px`.

### Signature primitive (draw once, reuse everywhere)
```html
<div class="rafters" data-sw-signature style="--count:9" aria-hidden="true">
  <span class="rafters__chalk"></span>
  <i class="rafter"></i>… (×count)
  <svg class="mount" viewBox="0 0 40 40"><!-- plate 40x6 at y34, L bracket 6x28, lag bolt line, washer circle r4 --></svg>
</div>
```
```css
.rafters{position:relative;height:28px;display:grid;grid-auto-flow:column;grid-auto-columns:var(--oc);border-bottom:1.5px solid var(--ink)}
.rafter{width:6px;height:10px;align-self:end;background:var(--rule);justify-self:center}
.rafter.is-found{background:var(--ink)}
.rafters__chalk{position:absolute;inset:auto 0 -1px 0;height:2px;background:var(--signal);transform-origin:left;transform:scaleX(var(--snap,1))}
.sw-motion .rafters:not(.is-snapped) .rafters__chalk{--snap:0}
.rafters.is-snapped .rafters__chalk{transition:transform var(--t-snap) var(--ease-out)}
.mount{position:absolute;bottom:2px;width:28px;left:calc(var(--at,0) * var(--oc) + var(--oc)/2 - 14px);transition:transform 240ms var(--ease-out),opacity 240ms}
.sw-motion .rafters:not(.is-bolted) .mount{transform:translateY(-12px);opacity:0}
.mount .washer{fill:var(--accent)} .mount .plate,.mount .bracket{fill:var(--ink)} /* on deep: fill var(--bg-light) */
```
- Chalk dust: `.rafters__chalk::after` = same bar, `filter:blur(3px)`, opacity .6 → 0 over 400ms after snap.
- Hero variant `.rafters--pitch`: `transform:rotate(-22.62deg)` (5/12), with `.pitch-tri` SVG (12 run, 5 rise, mono labels).
- Counter: `.rafters__count` mono "MOUNT 03 / 09", tabular-nums, driven by `--n`.
- Reduced motion / JS off: chalk at scaleX(1), all mounts visible (the `.sw-motion` gate never applies).

## Photo grade
`filter:saturate(.82) contrast(1.06) sepia(.06) hue-rotate(-4deg)` on every img (cool slate palette, morning light).
Optional overlay for the break: `linear-gradient(0deg,rgba(44,54,64,.55),rgba(44,54,64,0) 45%)` multiply for caption legibility.

## Focus
```css
:focus-visible{outline:3px solid var(--focus);outline-offset:3px}
@media (forced-colors:active){
  .btn{border:2px solid CanvasText}
  .rafters__chalk,.rafter{background:CanvasText}
  .chip[aria-pressed=true]{outline:2px solid Highlight}
}
```
