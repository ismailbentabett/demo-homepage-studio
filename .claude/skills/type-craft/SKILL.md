---
name: type-craft
description: Typography values for the demo homepages - choosing a display + text pair from data/fonts-catalog.json, the fluid type scale, h1 sizing that fits 1440x900 and 390, line lengths, leading, tracking, numerals, and the type leads (serif, grotesk, condensed, mono-accent, slab). Use when choosing fonts (stage 2), writing the design system tokens (stage 3) or fixing a typography score under 9.
---

# Type craft

Type is the cheapest way to look expensive and the fastest way to look like a template. The jury
reads type before photos.

## Choosing the pair
- Only fonts in `data/fonts-catalog.json` (the build refuses others). Display font: never one the
  registry has reserved or delivered (check-unique enforces it). Max 2 families, 4 files total.
- Pair by contrast of one axis only: a serif display with a grotesk text, a condensed display with a
  humanist text, a slab with a neutral grotesk, a mono-accent (labels, numbers) beside one family.
- The type lead from the brief §6 is binding: `serif | grotesk | condensed | mono-accent | slab`.
- Never: Inter/Roboto/Open Sans as display, two geometric sans together, a script face, a "construction"
  stencil face, all caps for more than 4 words.

## Scale (fluid, 320 → 1440)
```css
--fs--2: clamp(.75rem, .72rem + .15vw, .8125rem);   /* legal, credits */
--fs--1: clamp(.875rem, .85rem + .12vw, .9375rem);  /* labels, proof line, captions */
--fs-0:  clamp(1rem, .97rem + .18vw, 1.125rem);     /* body */
--fs-1:  clamp(1.2rem, 1.1rem + .45vw, 1.45rem);    /* lead, card titles */
--fs-2:  clamp(1.5rem, 1.3rem + 1vw, 2.1rem);       /* h3, numbers */
--fs-3:  clamp(2rem, 1.6rem + 2vw, 3.2rem);         /* h2 */
--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5.25rem);
```
- The h1 `svh` term keeps it on the first screen at 1440×900 and 1024×768; condensed faces may go to
  6rem max, wide grotesks stay ≤ 5rem. Check the 390 shot: 3-4 lines, no orphan word (fix with
  `text-wrap: balance`, then with a `<br class="lg">` only if needed).
- One h1. h2 per section. Never skip a level for size; use a class.

## Rhythm
- Body: `line-height: 1.55`, measure `max-width: 62ch` (cards 38-46ch). Lead: `1.4`, ≤ 34ch wide at 1440.
- Headings: `line-height: 1.02-1.1` (display ≥ 4rem → `.95-1.02`), `letter-spacing: -0.02em` for
  grotesk/serif display, `0` for condensed, `+0.06em` to `+0.12em` for small caps labels (`--fs--1`, uppercase).
- `text-wrap: balance` on h1-h3, `text-wrap: pretty` on paragraphs.
- Numbers: `font-variant-numeric: tabular-nums lining-nums` for prices, hours, counters, phone.
  Use the display face for big numbers only if its figures are good; otherwise the text face at weight 600.
- Weights: max 3 in use (e.g. 400, 600, 800). Bold body inline ≤ 1 phrase per paragraph.
- Literal characters in content and CSS (`·`, `→`, `–`, curly quotes), never CSS escapes. En dash in
  ranges ("Mon–Sat 8–6"), not a hyphen.

## Signature type moves (pick at most two)
- One oversized word or number in a section (`clamp(6rem, 18vw, 14rem)`), cropped by its section edge.
- Mixed-weight headline: one word in italic or in the display's other width.
- Labels in mono-accent with a rule: `font: 500 var(--fs--1)/1 var(--font-mono); letter-spacing:.08em`.
- Hanging punctuation on pull quotes (`text-indent: -.45em`).
- Numbers set like a spec sheet: value at `--fs-2`, unit at `--fs--1` raised.

## Loading
Preload the display file only (the config does it). `font-display: swap`. Size-adjusted fallback in
the stack (`font-family: "Display", "Display Fallback", Georgia, serif`) so the h1 doesn't jump.

## What costs points
Template pairing (geometric sans + same sans), widows in the h1, tracking on body text, centered body
paragraphs over 3 lines, more than 6 sizes in use, caps headings everywhere, a lead wider than 70ch.
