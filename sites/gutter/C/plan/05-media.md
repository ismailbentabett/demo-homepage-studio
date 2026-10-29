# gutter-C — Media plan

Only 2 approved C frames exist (CURATION.md: no process / home / problem frames usable; A and B keys are off-limits).
So the brief's 10-16 keys cannot be met: **2 keys, every other visual is drawn** (SVG specimen drawings, range map,
season bars). This is a choice the concept already makes (a field guide is a drawn book), not a gap to fill with stock.
No photo appears twice.

| Key | Section | Crop | Treatment | Caption (Newsreader italic first word) |
|---|---|---|---|---|
| `hero-C1` | Hero, small "habitat" inset (4:5, ~34% of the map plate width at ≥ 1024; below the h1 + buttons at 390, 16:10) inside the range-map plate | `object-position: 62% 45%` (keeps the rusted trough edge + the falling stream; the blurred ferns fill the left) | grade (03-system) + 1px rule + 8px bone mat; no scrim, no text on the photo | "*Habitat:* rain running off the end of a rusted channel into ferns." |
| `hero-C2` | `.break` full-bleed between the specimen plates and the price ledger (21:9 ≥ 1024, 4:5 at 390) | `object-position: 50% 40%` (centres the red maple leaves; 390 crop on the yellow leaf + red pair) | grade + `hue-rotate(-12deg)` to cool the cyan water into fir green; bottom 30% gradient to #0e1712 at 70% for the caption | "*Specimen No. 2 in the wild:* fallen maple and oak leaves on standing water, November colour." |

Rules for the builder:
- **hero-C1 is not a job photo.** It's a rusted garden channel. Never caption it as our gutter, a cleaning or a repair;
  it's a mood/habitat inset only. Its rust echoes the rust-tag accent: keep it small, the drawn map leads the hero.
- hero-C2 has mixed leaves (oak shapes are visible): caption says "maple and oak", never "bigleaf maple" alone.
- LCP is the h1 text + inline SVG; hero-C1 `loading="eager"` `fetchpriority="high"` with `-1170` small source at ≤ 1170px.
- Credits (CC BY-SA) go in the footer photo-credit line via the macros.
- Specimen plates No. 1-5 (fir needle sprig, maple leaf, moss cushion, cottonwood seed tuft, ice-coated twig) are
  inline SVG line drawings, 1.25px stroke, no fills, drawn on entry.
