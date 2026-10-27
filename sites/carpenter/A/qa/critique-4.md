COPY: ok

# carpenter-A: critique, round 4 (fast mode, final round)

**Five-second test (1440-first.jpg, 390-first.jpg):** "An old-house carpenter in Portland, Maine, who cuts out rot and splices new oak in instead of covering it. I call (207) 555-0167 or price a repair. Why them: 14 years on Maine porches, and the drawings show they actually measure and cut." Passes on both viewports.

**What changed since round 3:** the footer is now a paper "Cut list, finished" that reassembles CUT 00-09, the proof band has an h2, the reviews use curly quotes, fractions use true glyphs, the estimator select matches its output, the open-now duplicate and the Pexels credits are gone, the secondary action has one name, and mobile services became an accordion. **New break:** the PL 04 porch elevation is clipped at 1440.

## firstScreen: 9.0
1440-first.jpg: 5-word h1 with trade and city, a loud Call button and a quiet "Price a repair", the phone in the header, a proof line with a Sample rating chip, the CUT 00 rule and the mark/measure/square/saw plate rail in view, and the navy band peeking about 70px. 390-first.jpg: the h1 takes 3 lines and both actions sit above the fold. Not a 10: at 1440 the rail ends on a cropped fourth plate rather than a composed edge.

## distinctiveness: 9.0
1440-rm-full.jpg: the CUT rule organises the hero, story, trim, proof, area and footer. The footer cut list (00-09, "TOTAL · TEN CUTS · ONE FINISHED JOINT") is the signature doing real work. Short of 10 because B/qa/screens/1440-first.jpg still shares the cream paper, the line-drawn elevation and the mono dimension labels.

## type: 8.5
Fixed: curly quotes and consistent fraction glyphs (1440-rm-full.jpg, 1440-scroll-25.jpg), and every h2 has strong numeral-versus-headline contrast. −0.5: tracked mono caps appear at 4+ sizes and in long chains ("CUT 01 · SILL DUTCHMAN · 2¼ × 7 × 38 · WHITE OAK", 1440-first.jpg; trim labels, 1440-scroll-25.jpg).

## layout: 8.5
Fixed: contact navy now ends on a paper footer, and the tones alternate (1440-rm-full.jpg). −0.5: in #proof, about 300px of empty left column sits under the 4.9/5 figure (1440-rm-full.jpg). The porch band's dead navy belongs to the mustFix and is not counted twice.

## photo: 8.5 (capped by mustFix)
Judged as drawn plates in placeholder mode: one coherent system (grid/blueprint ground, one stroke, brass and oxide dimensions, PL captions) across 1440-first.jpg and 1440-scroll-25/50/75.jpg. Capped because PL 04 is sliced through the porch in 1440-full.jpg and 1440-rm-full.jpg.

## copy: 9.0
One secondary verb ("Price a repair") everywhere, real trade nouns, and every review, price, rating and guarantee is Sample-labelled (1440-rm-full.jpg). The check results speak plainly (1440-scroll-50.jpg).

## mobile: 9.0
390-full.jpg / 390-rm-full.jpg: the numbered services accordion, the whole porch elevation with a readable legend, no overflow at 390 or 320 (render.json). Minor: the PL 05 label touches the plate edge (390-rm-full.jpg).

## a11y: 9.0
Every word shows in 1440-rm-full.jpg and 390-rm-full.jpg. The proof band now has an h2. Labelled inputs and an aria-live estimator. The clipped porch legend is logged once under photo, and its caption carries the same information.

## motion: 9.0
1440-full.jpg no longer has blank stretches waiting on reveals. Purposeful hooks: split h1, checklist, hotspots, estimator, lead steps. Not a 10: nothing in the 25/50/75 frames shows the splice itself animating as the explanation of the craft.

## wow: 8.5
The estimator now agrees with itself (1440-rm-full.jpg proof), and the footer cut list is a memorable close. −0.5: the full-bleed porch elevation, the page's one big moment, is visibly cut off at 1440 (1440-full.jpg).

## polish: 8.5
The open-now duplicate is gone, and the footer credit now reads "Drawings made for this sample site". −0.5: "SPLICE LINE · SOUND ABOVE" runs into the PL 05 plate edge (1440-scroll-50.jpg, 390-rm-full.jpg).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×8.5 + 4×8.5
= 126 + 108 + 85 + 85 + 68 + 72 + 63 + 63 + 108 + 68 + 34 = 880 / 100 = **8.80**

The last-round rule needs weighted ≥ 8.8 **and** an empty mustFix. mustFix is not empty → **NEEDS_HUMAN**.

## Must
1. **1440-full.jpg / 1440-rm-full.jpg, #porch-elevation (PL 04):** the house drawing is clipped through the porch. Hotspot 1 is a half circle, the porch floor and post bases are missing, legend line "2 RAIL CAP" is cut off, and about 100px of dead navy sits below. It renders whole at 390. **Fix:** size the drawing box to the d-house symbol's ratio (viewBox 600×240 → `aspect-ratio: 600/240`, `preserveAspectRatio="xMidYMid meet"`, `overflow: visible`) instead of the fixed `clamp(320px, 52vw, 620px)` height with 10% bottom padding. Then check that the full porch, both hotspots and both legend lines appear at 1440.

## Should
1. **#porch-safety PL 05 (1440-scroll-50.jpg, 390-rm-full.jpg):** "SPLICE LINE · SOUND ABOVE" touches or overruns the right edge of the plate. Fix: anchor the text at `text-anchor="end"` with about 16 viewBox units of inset, or shorten it to "SPLICE · SOUND ABOVE".
2. **#proof (1440-rm-full.jpg):** the left column is empty under 4.9/5. Fix: move the Sample guarantee line and the PL 07 finished-joint plate into that column, under the figure.
3. **Labels site-wide (1440-first.jpg, 1440-scroll-25.jpg):** too many tracked mono caps. Fix: keep caps for the "CUT nn" token only and set the dimension and wood text in mixed-case mono at letter-spacing .02em.

## Elevate
- **Type:** let the cut sheet discipline the type. Use three voices only (display numerals, serif reading text, small mono spec), with tracked caps reserved for the CUT token, so that a text-only screenshot reads like a joiner's cut list rather than a wall of caps.
- **Layout:** make the porch elevation the page's one off-grid moment. Let the drawing break out of its band and overlap the porch-check panel, and rebalance #proof so the big 4.9 anchors a column that the reviews hang from. Both dead fields disappear.
