---
name: layout-composition
description: Layout and composition for the demo homepages - the section rhythm gate, tone sequencing, the layout families, grids and spacing values, the hero compositions, breaking the card grid, full-bleed breaks and mobile-first breakpoints. Use when writing the blueprint (stage 4), the design system spacing, the section CSS, or fixing a layout score under 9.
---

# Layout composition

A template is a stack of centered headings over three equal cards. An award site has a rhythm: each
section has a different shape, density and tone, and the eye knows where to land.

## The rhythm gate (blueprint, METHOD §4)
- 8-12 sections. Hero `min-height: calc(100svh - var(--header-h))`, the next band peeks in.
- Never 3 of the same tone in a row; never two dark (`t-deep`) bands touching.
- ≥ 1 `t-deep`, ≥ 1 color band (`t-color`), ≥ 1 full-bleed `.break` (photo or texture, ≥ 60svh at 1440).
- ≥ 3 layout families in use; neighbours never share one.
- Density alternates: dense (tool, prices, form) → open (a statement, a photo) → dense.

## Layout families (name them in the blueprint)
`split` (text 5 / media 7) · `asym-stack` (offset blocks on a 12-col grid) · `index` (numbered rows
with a rule) · `bento` (mixed cells, max 5, one dominant) · `rail` (horizontal scroll-snap) ·
`sticky-side` (sticky heading left, scrolling content right ≥ 900px) · `full-bleed` · `ledger`
(table-like rows: service · what · range) · `map` (towns as a diagram) · `story` (pinned steps) ·
`statement` (one sentence, huge) · `gallery-mosaic` · `form-split` (form + what happens next).

## Grid and space
```css
--gutter: clamp(1rem, .6rem + 2vw, 2rem);
--max: 82rem;                     /* content width; text measure separate */
--sp-1:.5rem; --sp-2:1rem; --sp-3:1.5rem; --sp-4:2.5rem; --sp-5:4rem; --sp-6:clamp(4rem,3rem + 5vw,8rem);
--section-y: clamp(4.5rem, 3rem + 6vw, 9rem);
```
- 12 columns ≥ 900px (`grid-template-columns: repeat(12, minmax(0,1fr))`), 6 at 640-899, 1-2 below.
- Always `minmax(0, …fr)`, never `auto` columns (one column collapses, see LEARNINGS B1).
- Vertical rhythm from the scale only; a section's top and bottom space may differ (more above a
  statement, less above a band that continues the previous one).
- Align to edges on purpose: one strong left edge per section; centered only for a statement or the form's confirmation.

## Breaking the card grid
- Never 3 or 6 equal cards with icon + title + text. Instead: a `ledger` of services with ranges, a
  `bento` with one large cell (the most common job) and 4 small, an `index` with numbers and a
  hover photo, or services as tabs with a photo per tab.
- Vary card sizes by importance; let one element cross a section edge (a photo hanging 4rem into the next band).
- Overlap with intent: a number or a label over a photo edge, a form card over a texture break.

## Hero compositions (one per site, no two siblings alike, from METHOD §2)
Full-bleed photo + scrim + left text column · split 5/7 with a cropped vertical photo · type-only with
a small photo strip · video background with a text plate · a diagram/sketch of the job beside the h1 ·
a "job sheet" document layout · map of the service area · oversized number with a photo inset.
Whatever it is: the h1 at the optical left third, the call button in the thumb zone on phones.

## Breakpoints (mobile first)
Base = 320-389, then `min-width` 390 / 640 / 900 / 1200 / 1440. Check 390 first: one column, 16-20px
gutters, the h1 3-4 lines, buttons full width or 2 equal, photos 4:5 or 1:1, no pin, no hover-only info.
1024×768: the hero must still fit (that's the `svh` term), sticky-side stays off below 900px.

## What costs points
Everything centered, equal-height everything, two neighbours with the same shape, a section that is
only a heading and a paragraph, the same max-width for text and images, dead white space that has no
edge to hold it, a layout that only works at 1440.
