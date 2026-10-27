---
name: logo-mark
description: Making the demo business's logo and favicon as inline SVG - wordmark vs monogram vs symbol lockups, construction from the signature system, sizing for header and favicon, colors from the palette, and what never to draw. Use when drawing the header logo, the footer lockup or the favicon (site.config.json), or fixing a brand/detail note about the logo.
---

# Logo mark

The demo is sold as "your site", so the logo must look like a real small business could own it: simple,
built from type, one idea from the signature. Not a clip-art house with a roof.

## Choose a lockup (from the concept)
- **Wordmark:** `{{biz.short}}` in the display face, one tweak (a cut letter, a ligature, a tighter pair).
  Best for serif / condensed type leads.
- **Monogram + name:** `{{biz.initials}}` in a shape that comes from the trade's world (a shingle
  hexagon, a brick, a pipe elbow, a tag, a stamp), name beside it in the text face at 600.
- **Symbol + name:** one geometric symbol, ≤ 6 paths, from the signature (the chalk line, the gauge needle,
  the course). Never a literal house, wrench, hammer, water drop, or lightning bolt clip-art.

## Build
- Inline SVG in the header (`<a href="#main" class="logo" aria-label="{{biz.name}} home">`), text as
  real text (`<text>` is fine, or HTML text beside an SVG mark) so tokens resolve; no outlined fake text.
- Height: 28-36px in the header at 1440, 24-28px at 390; the footer lockup may be 1.5×.
- Colors: `currentColor` + one accent (`var(--accent)`), so it works on every tone band.
- The favicon (site.config.json): the initials glyph or the symbol alone, on the accent or deep color,
  legible at 16px (2 letters max, weight ≥ 700, no thin strokes, ≥ 2px features at 32px).
- Clear space = the cap height on every side.

## Never
Use a real company's mark or a known brand's shape, add "Est." or a year not in the facts, add a
tagline in the lockup, use a gradient or drop shadow, or draw it as a raster image.
