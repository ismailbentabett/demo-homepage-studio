COPY: ok

# concrete-A, round 2 (fast mode)

**Five-second test.** 1440-first.jpg: "Salt Lake City concrete. They write base depth, rebar and joints on the quote before the truck comes. Hit 'Price my slab' or call (801) 555-0131. It's open until 5:30, rated 4.9 (Sample). The ticket on the right shows me what's under my driveway." 390-first.jpg gives the same answer in 3 h1 lines, with Price my slab above the fold and Call + Price in a 56px bar. All four questions get answered, and the "why them" (they show you the under-slab) comes from the ticket drawing, not from a slogan.

**What changed since round 1.** Every round-1 mustFix is resolved on screen:
- the placeholder boxes are replaced by a consistent drawn-diagram language, with a footer note saying "Drawings on this page are illustrations"
- icons are sized
- render.json shows no overflow at 390 or 320
- the hours are true and use en dashes (1440-rm-full.jpg #area and footer)

On top of that, the reviews use curly quotes, the strength curve now exists, and the story builds layers. Most of the jump is real.

## firstScreen: 9 (×14)
- 1440-first.jpg: the h1 is 7 words on 3 lines and names the city and the thing (slabs). There's one solid primary and a quieter outlined call, and the phone is in the header. The proof line (open now, until 5:30, 4.9 ★ Sample rating) sits under the CTAs, and the next band peeks about 48px. The signature, a ticket with a cross-section and the SAMPLE TICKET stamp, *is* the hero.
- 390-first.jpg: the h1 is 3 lines and Price my slab is above the fold. The ticket starts at 470px.
- Why not 10: there's about 190px of dead paper between the header and the h1 at 1440, so the h1 floats low. 390-first.jpg: the ticket title breaks "5 / in. slab" across lines, with no nbsp between number and unit.

## distinctiveness: 9 (×12)
- The ticket system does real work in ≥ 8 sections: hero ticket; perforated #under columns; story line items; curve-day stubs; services ticket list (1440-scroll-50.jpg); tools "Page 1 / Page 2" with perforated tops; reviews as dashed job-file entries (1440-scroll-75.jpg); #area ZIP stub; contact "Ticket page 2 / CUSTOMER COPY"; perforated footer edge (1440-rm-full.jpg).
- The strength curve (1440-rm-full.jpg) is a full-bleed chart no template would ship. Siblings (library/cards/concrete-B.jpg dark condensed, concrete-C.jpg serif with wave texture) share nothing with it.
- −0.5: mono 01–09 numbering on services and 01–07 on the town list (1440-rm-full.jpg #area) is decoration. Towns have no order.
- The carbon-blue offset is barely perceptible. It reads as a flat drop-shadow block (1440-rm-full.jpg tools cards).

## type: 8.5 (×10)
- Chivo / Karla / DM Mono (the accent is declared). The display tracking is tight. The featured review set at h3 scale against the small column reviews is a real scale-contrast moment (1440-scroll-75.jpg). Curly quotes are now in place.
- −0.5: the story cross-section labels ("06 screed + float", "04 forms", "05 pour") collide with the wave, the texture and each other (1440-scroll-25.jpg, 1440-rm-full.jpg). On 390-full.jpg they render at about 8px.
- −0.5 (details): "4-5 in." is a hyphen range under the calculator result (1440-rm-full.jpg #tools), and "5 in." is split across lines (390-first.jpg).

## layout: 8.5 (×10)
- 1440-rm-full.jpg: the tone rhythm works (paper → stone → deep → paper → white → deep → paper → stone → orange → deep), with no dark-on-dark touches. There's a full-bleed chart break, an asymmetric story, and a dense services table followed by quiet tool cards.
- −0.5: 1440-scroll-75.jpg, the reviews grid is lopsided. The featured quote leaves about 400px of empty column under it, while the 5 small reviews run 2-up with the last one alone.
- −0.5: #area does three jobs (towns + ZIP check + a full hours table). The ZIP checker already appears in the calculator card, and the hours table repeats in the footer (1440-rm-full.jpg).

## photo: 8 (×8)
- No photographs. Per the orchestrator, the drawn treatments are judged on merit.
- One consistent hand: the same aggregate stipple, rebar orange and form-board tan across the hero ticket, #under, the story, the calculator slab and the crack reader (1440-rm-full.jpg). It is honestly labelled in the footer.
- Below 9: the drawings are diagrams, not art direction. The crack reader's "hairline" is three thick black polylines on stipple (1440-rm-full.jpg #tools). The story's base and dig layers are an empty void (1440-rm-full.jpg #proc). Nothing has the texture or weight of a real slab. Not a mustFix: nothing is blank or broken.

## copy: 9 (×8)
- Trade nouns throughout: road base in lifts, #4 rebar on chairs, bleed water, air-entrained, joints at 2–3× slab depth, "Sand, not salt, the first winter" (1440-scroll-25.jpg).
- Honest microcopy at the points of doubt: "Your real number comes after we walk the site" (#tools), and "We call back to set up a visit. Nothing is booked until you say so." (#contact).
- The action family is consistent (Price my slab / Price it / Price your slab), and every review, rating, price, licence and guarantee carries a Sample label.
- Why not 10: "What goes under matters more than what you see." is a slogan-ish h2.

## mobile: 8.5 (×7)
- render.json: no overflow at 390 or 320. 390-first.jpg: compact header with a 48px call square, two-button bar. 390-full.jpg: the story is stacked with no pin, and the curve and tools stack cleanly.
- −0.5: 390-full.jpg, the story diagram is shrunk to about 340px wide and its labels drop to about 8px. It's the desktop drawing squeezed, not re-cut.
- 390-full.jpg #under: the "steel mid-sla" label is clipped at the card edge. 390-first.jpg: the ticket's blue offset runs into the right viewport edge.

## a11y: 8.5 (×7)
- 1440-rm-full.jpg and 390-rm-full.jpg: every section and word is present, and the story and curve show their final state (Day 28). render.json has no errors. There's one h1 and an ordered h2/h3 tree. The tabs and estimator hooks are present.
- −0.5: the illegible 8–11px overlapping labels inside the story SVG (390-full.jpg) carry information (layer names). Footer fine print is about 12px grey on navy (1440-rm-full.jpg).

## motion: 8.5 (×12)
- Hooks: split h1 lines, a pinned stack story with lines dimming until reached (1440-scroll-25.jpg shows lines 01–05 lit and 06–08 dim, the layers built to "pour"), a Day 0→28 count with a curve draw (1440-full.jpg shows Day 0, 1440-rm-full.jpg shows Day 28), tabs, estimator. Motion explains order, which is the 9 behaviour.
- −0.5: the layer build is hard to read because labels overlap the layers as they land (1440-scroll-25.jpg: "06 screed + float" over the forms line, "05 pour" buried in stipple). The base and subgrade never fill, so the stack starts from a black void.
- The intro and the hover pull on ticket lines can't be confirmed from stills.

## wow: 8.5 (×8)
- The signature story plus the 28-day curve are tied to the thesis, and the curve is something a homeowner would show ("walk on it day 1, park day 7").
- −0.5: the calculator's headline output is a $ range line (1440-rm-full.jpg #tools). There's no sq ft or yards and no thickness: "Size" is a 3-stop slider (Small/Typical/Large). The drawn slab with joints and "Print this ticket" partly save it.

## polish: 8.5 (×4)
- dist/index.html: SVG favicon + apple-touch, OG 1200×630, JSON-LD, print and forced-colors media, no `transition: all`.
- −0.5: three button languages. There's the blue primary, the black "Next" in the contact form, and a pale-blue footer call button (1440-rm-full.jpg). The "steel mid-sla" label is also clipped (1440-rm-full.jpg #under).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×8.5 + 8×8 + 8×9 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 85 + 85 + 64 + 72 + 59.5 + 59.5 + 102 + 68 + 34 = **863 / 100 = 8.63** → ELEVATE (inside 8.0–9.0, floors met, checks clean, no mustFix; the round cap is 4 per site.json).

## Must
None.

## Should
1. **#proc diagram labels** (1440-scroll-25.jpg, 390-full.jpg). The layer labels collide and are about 8px on the phone.
   - Move every label to a leader line in a right-hand gutter outside the slab, one per layer, stacked bottom-up: 01 dig at the bottom, 08 cure at the top.
   - Give the labels a minimum 13px rendered size: on <640px, draw a taller, narrower viewBox rather than scaling the 16:9 one.
   - Fill the subgrade (hatch) and base (aggregate dots) layers so step 01/02 visibly draws something.
2. **#under steel card** (1440-rm-full.jpg, 390-full.jpg). "steel mid-sla" is clipped. Shorten it to "mid-slab" and anchor the text `end` inside the viewBox, or widen the viewBox.
3. **#rev grid** (1440-scroll-75.jpg). Fix the lopsided layout: either span the featured quote across the full width above a 3-column row of 3 + 2 with the last two centred, or run 6 reviews as 3 × 2 with the featured one taking 2 rows. No empty 400px column.
4. **#area** (1440-rm-full.jpg). Drop the full hours table here, since the footer has it. Keep one "Open now · until 5:30 pm" line. Either drop the ZIP form from the calculator card or from #area, not both.
5. **Numbering** (#svc, #area towns). Remove 01–07 from the town list. Keep the 01–09 numbers only if services become actual ticket line items (qty/unit column); otherwise drop them.
6. **Details**:
   - Use "4–5&nbsp;in." in the calculator note.
   - Use `5&nbsp;in.` in the hero ticket title.
   - Unify buttons: the contact "Next" uses the blue primary style, and the footer call uses the same outlined style as the hero secondary.
7. **Hero spacing** (1440-first.jpg). Cut the about 190px gap above the h1 to about 96px so the h1 sits on the ticket's top third.

## Elevate
- **photo (8)**: make the drawings into the business's illustration system, not diagrams.
  - Draw them as carbon-copy ink: blue duplicate strokes offset 2px behind every drawn line, consistent with the ticket's carbon offset.
  - Give each a real-world scale tag ("1 in. = 6 in.").
  - Make the crack reader's three tabs into three precise plan-view sketches of actual crack patterns (map crazing, a joint-following crack, a dropped panel in section).
  - The aim is that the illustrations themselves become the reason the site looks expensive.
- **motion (8.5)**: make the story one readable build.
  - Each line item's tick drops its layer into the section with a clip wipe from the left.
  - The label arrives on its leader line 120ms later.
  - The Day 0→28 curve then picks up exactly where "08 cure" lands, so dig → cure → strength reads as one continuous scroll idea.
  - Mirror it in the calculator: changing the size slider redraws the slab and re-cuts its joints live.
