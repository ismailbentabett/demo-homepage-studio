COPY: needs copy-chief (copy 8.5: the scope band's lead paragraph repeats its h2 word for word)

# demolition-B, round 3 critique

**Five-second test (1440-first.jpg, 390-first.jpg):** "A Toledo outfit that tears out decks, sheds and garages, writes down the scope first and weighs every trailer. Call (419) 555-0180 or price it. I'd trust them because there's paperwork: a scope, a load estimate and a weigh ticket." All four questions are answered in under 5 s on both viewports.

This is the first round with real screenshots (rounds 1 and 2 were scored blind). Scores are rebuilt from evidence, not carried over. The sr-only h1 from round 2 is fixed (dist h1 has an sr-only span plus an aria-hidden split copy), so it is not re-listed.

---

### firstScreen: 9.0
- 1440-first.jpg: the h1 "Deck, shed & garage demolition in Toledo." is 7 words with trade and city, on 3 lines. There is one loud red "Call (419) 555-0180" and a quieter outlined "Price it". The phone shows in the header and in the hero. The proof line under the buttons reads "Closed · opens tomorrow 7 am · 4.8 ★ SAMPLE RATING". The three-ticket strip (0401/0402/0403) peeks about 250 px, so the signature is on the first screen. The pinned "walk-through sketch" card with the red "OUT" ellipse belongs to this concept and no other.
- 390-first.jpg: the h1 is 2 lines and both actions are above the fold, with the call bar below. Good.
- Held back from 9.5: the hero is still the standard "text block left, card right" split. The red ellipse is the only drawn gesture that ties the sketch to the ticket strip. Nothing crosses from the sketch into the tickets.

### distinctiveness: 9.0
- 1440-rm-full.jpg: the perforated ticket does real work in ≥ 8 sections. It appears in the hero strip, the scope sheet (signature line), the services "ticket book", the story ledger (0412), the sizer's printed EST ticket, the review cards ("Back of ticket 0501"), the process stubs, the contact form ticket and the footer "0420 JOB CLOSED". It organises the information rather than decorating it, and it passes the cover-the-logo test for most sections.
- −0.5: 1440-rm-full.jpg has a tracked mono eyebrow above every h2 ("BEFORE ANYTHING COMES DOWN", "THE TICKET BOOK", "BEFORE YOU CALL", "SIGNED ON THE BACK", "FOUR TICKETS PER JOB", "THE ROUTE", "TICKET 0001 · YOURS"). That is a §5 tell, even in ticket voice.
- No sibling screenshots exist in sites/demolition/A or C (qa/screens missing), so the sibling swap test can't be run. Palette and fonts are judged from concept.json only.

### type: 8.5
- What earned it: Chivo black at about −0.03em with tight leading, Work Sans body at full ink, and DM Mono tabular figures in the weigh ledger (1440-scroll-50.jpg: "2.2 t / 1.0 t / 0.6 t / 0.3 t"). The scale contrast between the 4.8 rating and the small text is a strong moment (1440-rm-full.jpg reviews).
- −0.5: 1440-first.jpg shows ≥ 6 tracked mono caps labels in one view (kicker, WRITTEN SCOPE, LOAD ESTIMATE, WEIGH TICKET, SAMPLE RATING, SAMPLE PRICING, ON THE SCALE).
- −0.5 (partly offset by the scale contrast): in 1440-rm-full.jpg the reviews h2 "What Toledo / homeowners / wrote on / the ticket" breaks to 4 lines in a narrow column. The review card heads wrap badly ("BACK OF / TICKET 0502" stacked against "HOT TUB / REMOVAL").

### layout: 8.5
- What earned it: 10 sections, each with one job. Tones run paper → teal → paper → deep → mid → paper → teal → deep → paper → deep. The staggered process tickets (1440-scroll-75.jpg) are a real off-grid move, and the story ledger is a full-bleed dense band.
- −0.5: in 1440-rm-full.jpg the process band (teal #1F6B5F) runs straight into the area band (navy). Two dark bands touch and read as one long dark block before the contact section.
- −0.5: in 1440-rm-full.jpg and 390-full.jpg a large stray navy wedge sits in the top-right corner of the area map, clipped square on the right edge. It reads as a rendering artifact, not a design element.
- Also noted: services are a uniform 4×2 grid of equal cards (1440-scroll-25.jpg). It is ticket-styled, but it is the most template-shaped band on the page.

### photo: 8.5
- Per the brief, the stock photos are temporary placeholders. The page covers them with drawn "print" art (dist: `figure.frame.print` plus `svg.print-art`). Judged on that: 1440-first.jpg (deck elevation with the red OUT ellipse) and 1440-scroll-75.jpg (trailer with an "NET 1.87 t" label) are one line weight, one buff ground and one ink, so they look like one hand. Sketch → load → ticket forms a sequence. Nothing is visibly broken or blank, so there is no mustFix.
- Held at 8.5: only two drawn frames are on the page. The services, reviews and contact sections carry no image at all. The footer still credits two "Photo by Demo Homepage Studio on Pexels" lines for photos the visitor never sees (1440-rm-full.jpg footer).

### copy: 8.5
- What earned it: trade nouns throughout ("tare", "transfer station", "mastic and pipe wrap", "check the gate width for the trailer", "nails picked up with a magnet"). The pre-1978 lead/asbestos answer is an honest "it depends". Microcopy at the moment of doubt: "Nothing is booked until you sign the scope." "Price it" is used consistently. Every sample item is labelled.
- −0.5: 1440-rm-full.jpg scope band. The h2 "Your written scope is the price." is followed by a lead starting "Your written scope is the price; if we find more…". The same line appears twice in a row.
- Middle-dot meta strings appear in the hero, contact and footer ("Closed · opens tomorrow 7 am · …"). They are tolerable but count toward the tell.

### mobile: 9.0
- 390-full.jpg: composed, not collapsed. The services become a stacked ticket book with vertical stub labels. The story ledger becomes one column with no pin. The tools stack with the printed ticket under the sizer. The process stubs stack. The form options become one column. The call bar sits at the bottom (390-first.jpg). There is no overflow (render.json 320/390 scrollWidth clean). The h1 is 2 lines.
- Not 9.5: in 390-first.jpg the hero ticket strip squeezes the "OUT / boards, joists, posts, footings" values into right-aligned 2-line wraps. The strip reads cramped rather than designed at phone width.

### a11y: 9.0
- 1440-rm-full.jpg and 390-rm-full.jpg show every word. The story ledger, tools and reviews are all visible with no hidden reveals. The h1 has a static sr-only copy plus an aria-hidden split. The ZIP input has a visible label ("Check your ZIP code"). There is a 3px focus outline with 3px offset in the CSS, plus a skip link and forced-colors borders. The render.json axe/errors arrays are empty.
- Not higher: the teal "→ wood pile at the transfer station" mono text on navy (1440-scroll-50.jpg) is small and on the edge of contrast. It wasn't measured, so no deduction.

### motion: 8.5
- Evidence: 1440-full.jpg shows about 2,000 px of navy pin spacer under the story, so the 0412 ledger is pinned at desktop and not at 390 (390-full.jpg). 1440-scroll-50.jpg shows the stacked bar fully filled. The header "ON THE SCALE 4.1 t" counter ties to the story's "Net 4.1 t". The hooks are split h1, header tonnage counter, pinned ledger fill, staggered process stubs and ticket hover, which is ≥ 3 beyond reveals.
- Held at 8.5: the frames show nothing a visitor would describe in one sentence beyond "a bar fills". The concept promised "ticket feeds from the top slot; digits print sequentially", and no frame shows a ticket feeding or printing. The pin is about 2.2 screens for a 4-row ledger, which is generous for one idea.

### wow: 9.0
- 1440-rm-full.jpg tools band: the tear-out sizer prints its answer as a weigh ticket. It shows trailer pictograms filled by load count, crew days, loads, weight and a SAMPLE PRICE, plus a "Print this ticket" button. That output is in the signature's language, and a homeowner would keep it. The ledger story "What left the yard, and where it went" (1440-scroll-50.jpg) is tied to the thesis, and its 4.1 t matches the header counter.
- Not 9.5: the house-year check answers with a plain grey paragraph (1440-rm-full.jpg), not a ticket. The two moments don't connect visually: the sizer ticket never feeds the story or the header tonnage.

### polish: 8.5
- What earned it: SVG favicon, apple-touch, OG 1200×630, GeneralContractor JSON-LD, print stylesheet, no `transition: all`, and a footer designed as a closing ticket.
- −0.5: in 1440-rm-full.jpg and 390-full.jpg the review cites render "Craig W. , Perrysburg" / "Lynn T. , Sylvania" / "Marcus D. , Toledo", with a stray space before every comma.
- Also noted: the duplicate generic photo credits and the stray navy wedge on the map (counted under layout, not twice).

---

**Arithmetic**
14×9.0 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.5 + 8×8.5 + 7×9.0 + 7×9.0 + 12×8.5 + 8×9.0 + 4×8.5
= 126 + 108 + 85 + 85 + 68 + 68 + 63 + 63 + 102 + 72 + 34
= 874 / 100 = **8.74**

---

## Must
None. No DEMO-RULES breach was seen: reviews, rating, price and licence are all Sample-labelled, the email is `.example`, the phone is 555-01xx, and there's no face and no before/after. The reduced-motion shots show every word and there's no overflow.

## Should
1. **#scope band lead (1440-rm-full.jpg)**: the paragraph repeats the h2. Replace the lead with a line that adds information, e.g. "If we open a wall and find more, we stop, show you, and write it on the sheet before any extra work."
2. **Review cites (1440-rm-full.jpg, 390-full.jpg)**: "Craig W. , Perrysburg". Remove the whitespace between `</cite>` and the comma in each review card, or put the comma inside the cite.
3. **Area map (1440-rm-full.jpg, 390-full.jpg)**: the navy wedge in the map's top-right corner is clipped square. Remove the shape or bring it inside the map's viewBox, so the map ends on the dotted radius and the route line only.
4. **Process → area seam (1440-rm-full.jpg)**: teal touches navy. Put the process band on paper with the stubs in teal ink, or move the area band onto `mid`, so the run reads teal | paper | navy.
5. **Review card heads (1440-rm-full.jpg)**: "BACK OF TICKET 0502" and the service name both wrap. Put the service name on its own line under the ticket number, or shorten the label to "0502 · HOT TUB", so each head stays one line at the 320 px card width.
6. **Reviews h2 (1440-rm-full.jpg)**: it wraps to 4 lines in the 300 px column. Widen the intro column to about 5/12, or cut the h2 to "Signed on the back by Toledo homeowners", so it sits in ≤ 3 lines.
7. **Eyebrows (1440-rm-full.jpg)**: keep the mono ticket kicker only where it carries a ticket number (hero NO. 0401, story TICKET 0412, contact TICKET 0001) and delete the other four eyebrows. The h2s carry the meaning on their own.
8. **House-year check output (1440-rm-full.jpg)**: render the answer as a stub with a red "TEST FIRST" stamp and the year band, matching the sizer ticket, instead of a grey paragraph.
9. **Footer credits (1440-rm-full.jpg)**: two identical credits are listed for photos that are fully covered by drawings. Either credit them correctly or, if the prints stay fully drawn, show the photo through the print (see Elevate) so the credit makes sense.
10. **390 hero ticket strip (390-first.jpg)**: the "OUT / STAYS" values wrap to 2–3 right-aligned lines. At < 480 px, stack label over value (left-aligned) or show only the 0401 ticket's first two rows.

## Elevate
1. **motion (8.5, weight 12)**: make the concept's promised moment happen. As the hero loads, the 0403 weigh ticket feeds down out of a slot under the header "ON THE SCALE" counter. Its GROSS / TARE / NET digits print one by one (≤ 1.2 s), and the WEIGHED stamp lands last. Then, in the 0412 story, each ledger row's tonnage prints into the header counter as its bar segment fills. The scale ticket becomes the one motion idea a visitor would describe: "every load prints a ticket and the total climbs."
2. **layout (8.5, weight 10)**: give the scroll a visible shape and break the grid once on purpose. Retire the uniform 4×2 services grid for a torn-off ticket book: one long featured stub (Written scope) across the full width, and the other eight as a staggered roll whose perforations line up with the process stubs further down. Re-tone the process band to paper so the page alternates loud dark / quiet paper / dense ledger cleanly from top to footer.
