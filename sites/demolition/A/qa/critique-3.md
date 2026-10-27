COPY: ok

## Five-second test
1440-first.jpg: "An Akron company that takes rooms down to the studs, in plastic, testing older houses first. Call (330) 555-0179 or price it. 4.9 rating (Sample)." The drawn wall section on the right shows exactly what "to the studs" means.
390-first.jpg: same answer; h1 3 lines, Call + Price it above the fold, sticky call bar.

Round 3 is the first round with real screenshots. Round 2's provisional deductions are replaced by evidence below. Round 2's mustFix ("Get my number") is fixed: the page uses "Price it" throughout.

---

## First screen: 9.5
Earned: h1 "Akron tear-outs to the studs", 5 words, 3 lines at 1440 and 390; one filled primary (Call) and a quiet underlined secondary (Price it); phone in header + hero; status line + "4.9 from 98 reviews" with a Sample rating chip; the signature drawing fills the right half; paper rail peeks ~74px (1440-first.jpg). 390-first.jpg: both actions above the fold, drawing peeks under the CTAs.
Short of 10: the Layer Gauge rail floats at x=15 with a ~60px gap to the content column and reads as a pasted sidebar widget (1440-first.jpg).

## Distinctiveness: 8.5
Earned: the wall-section / Layer Gauge system appears in the hero (1440-first.jpg), the pinned story (1440-scroll-25.jpg), the service depth bars (1440-scroll-50.jpg), the tear-off sheets, the pricing ticket layer chips (1440-scroll-75.jpg) and the footer row (1440-rm-full.jpg). Charcoal + plaster + safety palette and Bitter/Outfit differ from sibling B.
- 1440-scroll-25.jpg: the story is at "Pass 3 of 4" (05 Wiring / 06 Plumbing) while the rail lights 02 Plaster; 1440-scroll-50.jpg lights 04 Insulation over services. The rail does not track the content, so it reads as decoration (−0.5).
- B/qa/screens/1440-first.jpg: sibling B also uses split text-left + framed line drawing right and the same "Price it" label. Palette and faces differ, so no −2.0, but the cover-the-logo test is not airtight.

## Typography: 8.5
Earned: Bitter at a real scale-contrast moment (1440-first.jpg), tight display tracking, balanced heads, curly quotes, en-dash hours, body ≥16px.
- 1440-scroll-50.jpg: four tiny DM Mono depth captions plus three "Sheet 0N · …" mono labels in one view (−0.5).
- Middot meta strings everywhere: hero kicker, status line, figcaption "Wall section · drawn to the layer", sheet labels (1440-first.jpg, 1440-scroll-50.jpg). A listed tell; noted in Should.

## Layout and rhythm: 9.0
Earned (1440-rm-full.jpg): deep → paper rail → deep story → paper services grid (dense) → signal sheets → paper pricing → deep full-bleed trailer (quiet) → paper reviews (asymmetric big quote + 3) → deep contact → paper footer. No two dark bands touch.
- 1440-scroll-75.jpg: in #pricing the left half sits empty below the heading and the "Price it" button hangs alone under the ticket (Should).

## Photo and video: 8.5
No photographs render; the imagery is drawn, in one language and palette: the wall section (1440-first.jpg), the framing passes (1440-scroll-25.jpg), the trailer/scrap/clean wood (1440-scroll-75.jpg). On-trade and art-directed. Judged on merit as directed.
- 1440-scroll-25.jpg: mid-pass the batts sit semi-transparent over the studs and the "DEAD · TAGGED" / "CAPPED" labels are ghosted to near-invisible: a muddy frame right where the copy talks about tags (−0.5).

## Copy: 9.0
Earned: trade nouns (zipper seam, ram board, air scrubber, runner on the haul path, mortar bed, joists); an honest "we stop if it carries weight"; one primary action name ("Price it"); Sample labels on rating, reviews, pricing, keep-list terms and license; microcopy at the form. 0 em dashes. Keep-list repair line is in facts.json (`guarantee`). The plastic/zipper idea repeats in five places, but that is the thesis; not deducted.

## Mobile: 9.0
390-first.jpg: composed for the phone, drawing re-placed below the CTAs, two-button sticky bar. 390-rm-full.jpg: services stacked with depth bars, sheets stacked, ticket legible, form full width. render.json: no overflow at 320/390.

## Accessibility: 8.0 (capped by mustFix)
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word; skip link, labelled inputs, tab ARIA, live regions (dist).
- **mustFix** 1440-scroll-50.jpg, #tools: the intro paragraph "Three sheets. Fill them in…" is #1a1c20 on #b84a1a, about 3.3:1 at ~18px regular. AA needs 4.5:1.

## Motion and interaction: 8.5
Earned: pinned 4-pass wall peel with a pass counter, rail strike-offs (1440-scroll-25.jpg), the drawn trailer band (1440-scroll-75.jpg), header progress bar, scaleX hover rule.
- The rail follows page percent instead of the layer on screen (1440-scroll-25.jpg Pass 3 vs rail 02; 1440-scroll-75.jpg pricing vs rail 06). The motion contradicts the story it claims to explain (−0.5).
- The ghosted crossfade (1440-scroll-25.jpg) is scored under photo, not again here.

## Wow moment: 9.0
The thesis-tied wall peel (1440-scroll-25.jpg) plus a printable tear-out ticket that lights the layers a job reaches (1440-scroll-75.jpg), plus three tear-off sheets (1440-scroll-50.jpg). Not a 10: the rail and the drawing disagree about the current layer, so the two moments never lock together.

## Polish: 8.5
Earned: SVG favicon, apple-touch, theme-color, OG, JSON-LD GeneralContractor, print rules for the ticket, consistent 3–4px radius.
- 1440-rm-full.jpg footer: three "Photo by Demo Homepage Studio on Pexels" credits for photos that appear nowhere on the page (−0.5).

---

## Arithmetic
14×9.5 + 12×8.5 + 10×8.5 + 10×9.0 + 8×8.5 + 8×9.0 + 7×9.0 + 7×8.0 + 12×8.5 + 8×9.0 + 4×8.5
= 133 + 102 + 85 + 90 + 68 + 72 + 63 + 56 + 102 + 72 + 34
= 877 / 100 = **8.77**

---

## Must
1. **Where:** 1440-scroll-50.jpg, #tools signal band intro paragraph. **Problem:** #1a1c20 on #b84a1a is ~3.3:1 at ~18px regular, which fails AA 4.5:1. **Fix:** change the band ground to #ff5f1f (ink on it is ~5.7:1), or set that paragraph at ≥24px so the large-text 3:1 rule applies. Re-check the muted #2e1a0e text and the ZIP strip on that tone.

## Should
1. **Where:** fixed `.layer-gauge` rail (1440-scroll-25.jpg, -50, -75). **Problem:** the active row follows page progress, not content: Pass 3 of the story shows 02 Plaster. **Fix:** give each section a `data-layer` (story passes 1–4 → 01–07 pairs, services → none/neutral, pricing → the selected job's reach, footer → 07) and set the rail from the section in view, not from page %.
2. **Where:** story drawing, pass 2→3 (1440-scroll-25.jpg). **Problem:** layers crossfade, so batts and the "DEAD · TAGGED" / "CAPPED" labels sit ghosted at ~30–50% opacity. **Fix:** replace the opacity crossfade with a clip-path wipe (inset from top) so every frame shows whole layers and labels at full ink.
3. **Where:** #pricing (1440-scroll-75.jpg). **Problem:** the left column is empty below the heading and "Price it" floats under the ticket. **Fix:** make the heading column `position: sticky` beside the ticket, and move "Price it" into it under the lead, or inside the ticket footer next to "Print this ticket".
4. **Where:** footer `.credits` (1440-rm-full.jpg). **Problem:** three Pexels credits for photos that are not on the page. **Fix:** remove the credits list, or show only credits for media that actually renders.
5. **Where:** hero kicker, status line, `figcaption`, sheet labels (1440-first.jpg, 1440-scroll-50.jpg). **Problem:** middot meta strings and stacked mono micro-labels (7 in one view at 50%). **Fix:** set the service depth captions in Outfit 14px sentence case, drop the "Sheet 0N ·" prefix to just the sheet name, and replace the middots in the kicker and status line with a comma or a line break.
6. **Where:** `.layer-gauge` at 1440 (1440-first.jpg). **Problem:** it sits at left:16px, detached from the 1200px column. **Fix:** anchor it to the column gutter (left: calc((100vw − var(--max-w))/2 − 120px)) so it reads as part of the page grid.

## Elevate
1. **Accessibility (8.0):** re-tone the sheets band as a designed safety-orange worksite tone (#ff5f1f ground, ink text, deep sheet shadows), so contrast passes by construction and the band reads as hazard tape, not a dim brick block.
2. **Motion (8.5, weight 12):** turn the Layer Gauge into a real instrument. Bind it to the layer each section owns and drive the rail strike-off and the drawing's layer wipe from one shared value, so the rail and the wall peel move together and the pricing ticket's lit layers echo on the rail when a job is picked.
