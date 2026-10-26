COPY: needs copy-chief (hero hours line contradicts facts.json; copy 7.5)

# concrete-A, round 1 (fast mode)

**Five-second test.** 1440-first.jpg: "A concrete company in Salt Lake City, it's open now, there's a Price it button and a phone number... but the big picture is a grey box saying 'Placeholder for hero-A2', and a giant phone icon is hanging off the top of the page." 390-first.jpg: same, plus the call button sits on top of the eyebrow and three phone buttons fill the screen. A homeowner would think the site is broken. The trade, the city and what to do come through. Why them doesn't.

The headline problem: **no photo on the page renders** (all 9 slots are `media/placeholder-*.webp`), and **icon SVGs have no size**, so they wreck the header, the mobile bar and #area. Fix those before anything else.

## firstScreen: 5.5 (×14)
- What earned it: the h1 has an opinion and is trade-specific, and there's one primary "Price it". Hours, area and a Sample rating sit under it, and the phone is in the header.
- 1440-first.jpg: hero ticket image is a placeholder (−1.0 from the anchor). Header call button is a 515px blue slab with a cropped 150px phone glyph (−1.0). h1 is 9 words on 4 lines (−0.5). The secondary call button below the fold is another giant icon.
- 390-first.jpg: logo wraps to 2 lines, the call slab overlaps the "CONCRETE ·" eyebrow, and there are three phone CTAs in one view (−0.5).

## distinctiveness: 6.5 (×12)
- Dashed ticket lines show in services (1440-scroll-50.jpg) and reviews (1440-scroll-75.jpg), plus the SAMPLE TICKET stamp (1440-first.jpg).
- The carbon-blue offset copy and the 28-day strength curve promised in concept.json appear in no frame (−1.0). Mono 01–09 numbering is decoration (−0.5). With grey boxes everywhere it reads as a wireframe.

## type: 7 (×10)
- Chivo / Karla / DM Mono (accent declared) is a good pair. The display is tight and confident (1440-first.jpg).
- 1440-scroll-75.jpg: straight quotes in every review (−0.5). 1440-first.jpg: 4 tracked mono caps labels in one view (−0.5).

## layout: 6 (×10)
- 1440-scroll-25.jpg: the navy story is an empty 600px column. There's a half-screen blank gap between BASE and SCREED (−0.5) and the band runs about 3 screens for one idea (−1.0).
- 1440-full.jpg: #area is a column of 80px pin glyphs and a clock icon beside a full-width grey placeholder. The footer band is sparse (−0.5).

## photo: 3 (×8)
- 1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-full.jpg: there isn't a single photograph. All 9 slots are "Placeholder for …" boxes. Below the floor; mustFix.

## copy: 7.5 (×8)
- Real trade nouns earn it: road base in lifts, bleed water, control joints at 1.5× thickness, rebar on chairs (1440-scroll-25.jpg, 1440-scroll-75.jpg). Reviews are Sample-labelled.
- 1440-first.jpg: "Mon-Sat 7:00-5:30" is false per facts.json (Fri until 4, Sat 8–12). That's a mustFix, so the category is capped at 8. It also uses a hyphen range.
- The contact h2 says "Get a number." while the primary action everywhere else is "Price it" (−0.5).

## mobile: 5 (×7)
- render.json: overflow at 390 (416px, #area) and 320 (414px, #tools tabs). mustFix.
- 390-first.jpg: the header call slab overlaps content and the phone wraps to 4 lines. The sticky bar is two ~150px tiles with giant icons, eating about 20% of the viewport (−0.5).

## a11y: 7 (×7)
- 390-rm-full.jpg and 1440-rm-full.jpg: text is present in reduced motion.
- Every alt is "Placeholder for …", which describes nothing (−0.5). Small grey meta lines on paper in 1440-scroll-75.jpg are borderline. The static.json link warnings are a check failure and aren't re-scored here.

## motion: 6.5 (×12)
- 1440-scroll-25.jpg: the pinned cross-section is empty navy. Its layers never fill and lines 03–04 are missing mid-pin, so the story explains nothing (−1.0). No strength curve shows in the 25/50/75 frames. Hooks exist (split h1, pin, tabs, ZIP), so it isn't capped at 6.

## wow: 6 (×8)
- 1440-full.jpg: the estimator is a plain tabbed form, and its output isn't drawn as a ticket. The signature story is empty. There's no moment worth showing anyone.

## polish: 5 (×4)
- Unsized SVG icons across 1440-first.jpg, all 1440-scroll-*.jpg (cropped phone glyph pinned at the top), #area in 1440-full.jpg and the 390-first.jpg bar. The footer is a sparse band.

## Arithmetic
14×5.5 + 12×6.5 + 10×7 + 10×6 + 8×3 + 8×7.5 + 7×5 + 7×7 + 12×6.5 + 8×6 + 4×5
= 77 + 78 + 70 + 60 + 24 + 60 + 35 + 49 + 78 + 48 + 20 = **599 / 100 = 5.99** → FIX (photo 3 < floor 6, mobile 5 < floor 8, a11y 7 < floor 8, polish 5 < floor 6; checks not clean; mustFix not empty).

## Must
1. **All images are placeholders** (1440-first.jpg, 1440-scroll-25/50.jpg, 1440-full.jpg). Resolve every `[[img]]` slot to an approved file from `niches/concrete/media/manifest.json`, then rebuild. No `placeholder-*.webp` may remain in dist.
2. **Unsized SVG icons** (1440-first.jpg header, 390-first.jpg header + bar, #area pins/clock). Add width/height attributes to every inline svg, plus `.icon{width:1.25em;height:1.25em;flex:none}`. The header call becomes one ≈48px pill.
3. **Horizontal overflow** at 390 (#area `.area__info`, `ul.area__list`) and 320 (#tools `.tabs__list`), per render.json. Set `min-width:0` on grid children and let the tabs wrap or scroll inside their own box.
4. **False hours** in the hero proof line (1440-first.jpg). Render from facts: "Mon–Thu 7–5:30 · Fri 7–4 · Sat 8–noon".

## Should
- #hero h1 (1440-first.jpg): 4 lines / 9 words. Widen the h1 column to about 12ch per line, or trim to "A slab is decided in the dirt." with the rest in the lead, so it sits in 3 lines at 1440.
- #proc (1440-scroll-25.jpg): build the cross-section layers for real (dig/base/steel/pour/screed/joints/cure/seal) and close the empty gap between BASE and SCREED. Keep the pin to ≤ `calc(8 × 55svh + 100svh)`.
- #rev (1440-scroll-75.jpg): use curly quotes “ ” in every review.
- #contact h2: rename "Get a number." to match the primary action ("Price it" / "Price your slab").
- Hero labels (1440-first.jpg): drop the eyebrow or the TICKET # label so there are at most 2 mono caps labels in view.
- #area (1440-full.jpg): replace the pin column with a ticket-line list of towns. Use one 20px icon at most.
- Mobile bar (390-first.jpg): make it 56px tall with two side-by-side buttons ("Call", "Price it"). Hide it on scroll down and over #contact.
- alt text: describe each frame once real photos land (e.g. "Compacted road base inside wood forms before the pour").
- static.json: give the Pexels credit links real hrefs.

## Elevate
- **photo**: art-direct the approved concrete frames as the ticket's attachments. Staple the hero photo to the ticket with the carbon-blue offset copy behind it. Clip-reveal the story frames as each line item ticks, so dig → base → steel → pour → cure reads as one shoot.
- **mobile**: re-cut the phone page as a pocket ticket. Use a compact header with one 48px call pill and crop the hero ticket tall to the slab. Add a slim two-button bar that hides on scroll down, and stack the process lines as ticket stubs with no pin under 640px.
