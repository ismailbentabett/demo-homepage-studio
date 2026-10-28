COPY: ok

# appliance-A · Critique round 2 (fast mode, scored as always)

## Five-second answer
1440-first.jpg / 390-first.jpg: "Appliance repair in Des Moines, IA. My dryer runs but won't heat; they open the back, find the blown thermal fuse and hand it to me. Book a visit, or call (515) 555-0170, or text a photo of the model tag. Open now until 6 pm, visit $89–$119 (sample)." The trade and the city now sit in a readable white line above the h1, not in a 13px eyebrow.

## What changed since round 1
- Story now sits on paper with a dark panel (1440-scroll-25.jpg): the dark-on-dark run hero→story is gone.
- Section boundaries are now screwed seams (1440-scroll-50.jpg, 1440-scroll-75.jpg): the panel became page grammar.
- Services: all 10 are screwed panels (1440-rm-full.jpg). Symptoms sit inside a screwed "04 YOU NOTICE" panel (1440-scroll-50.jpg). Vent check answers in a "BEHIND THE PANEL ≈ 39.5 ft" verdict card (1440-rm-full.jpg).
- Price h2 no longer splits the range (1440-scroll-75.jpg). Services h2 is "Ten machines we open from the back." One primary name, "Book a visit"; header button is outlined (1440-first.jpg).
- The electronics-bench photo was removed. The hero inset is now an SVG drawing of probes and a meter. dist/index.html contains **no raster photograph at all** (no img/picture/video).

## firstScreen: 9
Earned: 1440-first.jpg: the screwed panel with the seam and BLOWN tag is the composition; one amber "Book a visit", outlined Call, text-a-photo link, Sample-labelled proof. 390-first.jpg: h1 2 lines, both buttons above the fold, Call/Text/Book bar.
- 1440-first.jpg: the h1 itself still carries no place (the readable line above it covers it; no deduction this round).
- 1440-first.jpg: no next-band peek at 900px; the panel ends at the fold (noted).

## distinctiveness: 9
Earned: screwed seams between every band, screwed panels in hero, story, services, symptoms, reviews, price card, vent verdict, area, form, footer (1440-rm-full.jpg). Nothing shared with appliance-B.
- 1440-scroll-25.jpg / 1440-first.jpg: mono tracked micro-labels are still the second voice everywhere (ONE SERVICE CALL…, BEHIND THE PANEL, PANEL 05 ·…). Held at 9, not higher.

## type: 9
Earned: Roboto Slab / Libre Franklin / JetBrains Mono; the price h2 now breaks cleanly "$89–$119, and it" (1440-scroll-75.jpg); tabular mono prices; strong scale contrast.
- 1440-first.jpg: still 7+ mono caps labels in one view (−0.5, offset by the rag fix).

## layout: 8.5
Earned: tones now alternate deep / paper / deep / paper / amber / deep / paper / deep / amber / paper / deep (1440-rm-full.jpg) with seams marking each change.
- 1440-rm-full.jpg services (crop at ~y 4800): the staggered 2-col panels S-01–S-04 drop into the 3-col S-05–S-10 grid with no gutter; S-04's bottom edge and "Book a visit" butt against the S-07 panel top (−0.5).
- 1440-full.jpg: about 1,200px of empty paper below the pinned story in the motion capture (pin spacer; reads fine in 1440-scroll-25.jpg, noted, no deduction).

## photo: 7
Earned: the SVG drawings are one consistent hand and sit in the palette (1440-first.jpg, 1440-scroll-25.jpg).
- dist/index.html + 1440-rm-full.jpg: zero photographs on a 13,000px page. The one round-1 frame was off-trade; it was deleted rather than replaced. The homeowner never sees a real washer, dryer, fridge, basement or hand on a part, so the 8 anchor ("on-topic, region-appropriate frames") has nothing to stand on (−0.5 vs round 1).

## copy: 9
Earned: "Ten machines we open from the back." fixed; one primary verb "Book a visit" everywhere; trade nouns (thermal fuse, defrost heater, braided lines); honest replace rule; every review, rating, price and the part promise Sample-labelled (1440-scroll-75.jpg, 1440-rm-full.jpg). Facts check: 4.9/214, 90 days, $89, 7:30 all in facts.json.

## mobile: 8.5
Earned: 390-first.jpg composed for the thumb; render.json no overflow at 320/390.
- 390-full.jpg: still 17,854px (~21 screens); the 7 story panels remain stacked full panels with drawings, no phone density decision (−0.5).

## a11y: 8.5
Earned: static.json / render.json clean; 1440-rm-full.jpg and 390-rm-full.jpg show every story panel open, nothing hidden; skip link, tabs with aria-selected, forced-colors, print.
- dist/index.html: one aria-live region for ZIP, vent check, filter and form status; designed focus not shown in any frame. 9 anchor unmet (held).

## motion: 8.5
Earned: pinned story with live index (1440-scroll-25.jpg), tabs, accordions, vent bar, open-now.
- 1440-scroll-50.jpg / 1440-scroll-75.jpg: the new seam screws are static; everything below the story enters with the same reveal family (26 data-reveal in dist). The signature only moves in one place (−0.5).

## wow: 9
Earned: story + review "behind the panel" part tags + the vent check now answering as a screwed BEHIND THE PANEL verdict with "≈ 39.5 ft" in amber (1440-rm-full.jpg). Tied to the trade and to the signature.

## polish: 9
Earned: favicon, OG, JSON-LD, theme-color, print and forced-colors; one radius, one rule weight; designed footer close (1440-rm-full.jpg).
- 1440-rm-full.jpg price card: its "Book a visit" is fuse red while every other primary is amber (noted).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×7 + 8×9 + 7×8.5 + 7×8.5 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 90 + 85 + 56 + 72 + 59.5 + 59.5 + 102 + 72 + 36 = 866 / 100 = **8.66**. Photo is under its 8.5 pass line. Verdict hint: ELEVATE.

## Must
None. No DEMO-RULES breach, every sample is labelled, reduced motion shows everything, no overflow.

## Should
1. **#services grid** (1440-rm-full.jpg). Problem: S-04 collides with the S-05–S-10 row. Fix: give the 3-col sub-grid `margin-top: 24px` (same as the column gap) or drop the stagger offset on S-02/S-04 so both rows share one baseline.
2. **Price card CTA** (1440-scroll-75.jpg). Problem: red primary button, amber everywhere else. Fix: make it the amber primary; keep fuse red only for the BLOWN/fault state.
3. **390 story** (390-full.jpg). Problem: 7 full panels stacked. Fix: under 640px show the 7 steps as compact rows (number, title, one line), with the drawing only on the open row.
4. **aria-live** (dist/index.html). Problem: one live region for four tools. Fix: one `aria-live="polite"` output per tool (ZIP result, vent verdict, symptom answer, form status).
5. **Mono labels** (1440-first.jpg, 1440-scroll-25.jpg). Problem: tracked mono caps on every block. Fix: keep the panel numbers and BEHIND THE PANEL; drop the eyebrows above the h2s ("ONE SERVICE CALL, PANEL BY PANEL", "CLOTHES TAKE TWO CYCLES?").

## Elevate
- **photo (7)**: put real photographs inside the panel system. The BEHIND THE PANEL half of story steps 03–05 and the hero inset open onto approved-library frames of the inside of a real machine (the back of a dryer cabinet, a fridge's rear wall, a hand holding a part), each clipped by the panel's seam and graded into the enamel-black/amber palette, with the line drawing as a fine overlay on the photo. The page then shows a homeowner their own machine, opened.
- **motion (8.5)**: make the screws the page's motion. Every seam's screws turn a quarter-turn out as the band enters, and the vent verdict and the form steps drive a screw home when they resolve, so the signature moves in every section, not only in the pinned story, while the quiet copy bands stay still.
