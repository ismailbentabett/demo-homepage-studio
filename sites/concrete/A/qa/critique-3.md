COPY: ok

# concrete-A, round 3 (fast mode)

**Five-second test.** From 1440-first.jpg, a visitor would say: "Salt Lake City concrete. They write base depth, rebar and joints on the quote before the truck comes. Price my slab, or call (801) 555-0131. Closed now, opens tomorrow 7 am, 4.9 (Sample). The ticket shows what's under the driveway."

390-first.jpg gives the same answer in a 3-line h1, with Price my slab above the fold and Call + Price in the bottom bar. All four questions are answered.

**What changed since round 2.** These are all fixed on screen, so they are not re-listed:
- **#proc story (1440-rm-full.jpg, 1440-scroll-25.jpg):** labels moved to a leader-line gutter numbered 01–08, bottom-up. Subgrade (hatch) and base (aggregate) now fill.
- **Story on the phone (390-rm-full.jpg):** it is re-cut with readable gutter labels.
- **Hand-off to the curve:** a "08 cure → day 0" tag now leads into it.
- **#under:** "mid-slab" is no longer clipped.
- **Small fixes:** `5&nbsp;in.` in the hero. Town and service numbering is gone. Buttons are unified. #area is cut down to the ZIP check plus a one-line open-now, and the hero gap is shorter.
- **Drawings:** they now carry blue carbon strokes and scale tags. The crack reader is a real map-crazing plan.

## firstScreen: 9 (×14)
- 1440-first.jpg:
  - The h1 is 7 words on 3 lines and names the city and the thing.
  - There is one solid primary and an outlined call, and the phone is in the header.
  - There is a proof line with a Sample rating, and the stone band peeks below.
  - The ticket (cross-section, scale note, 5 spec lines, SAMPLE TICKET stamp) is the hero.
- 390-first.jpg: the h1 is 3 lines and the primary is above the fold. The ticket starts at about 480px.
- Why not 9.5:
  - The left column ends at about y=600 at 1440, leaving about 250px of blank paper under the proof line while the ticket runs to 760 (1440-first.jpg).
  - 1024-first.jpg: the ticket title wraps so that line 2 starts with "· 5 in. slab", with an orphan middle dot leading the line.

## distinctiveness: 9.5 (×12)
- The ticket system does real work everywhere:
  - hero ticket
  - #under perforated columns with scale tags
  - #proc "Section A-A" with numbered leader lines
  - the curve tag "08 cure → day 0"
  - services as ticket lines
  - tools Page 1 / Page 2 with perforated tops
  - reviews as dashed job-file entries
  - contact "Ticket page 2 / CUSTOMER COPY"
  - perforated footer edge (1440-rm-full.jpg)
- The decorative numbering is gone.
- The siblings (concrete-B and C cards) share nothing with it.
- Not 10: the carbon offset under the cards still reads as a flat drop-shadow slab rather than a duplicate sheet (1440-scroll-75.jpg, the tools cards).

## type: 9 (×10)
- Chivo / Karla / DM Mono.
- The featured review at display scale against the body reviews is a strong contrast (1440-rm-full.jpg #rev).
- The story labels are now crisp mono in a gutter (1440-scroll-25.jpg). There are curly quotes, en-dash hours, and `5&nbsp;in.` in the hero.
- −0.5 details:
  - "(4-5 in. slab on new compacted base)" still uses a hyphen range (1440-scroll-75.jpg #tools).
  - The middle dot orphans at the start of the ticket title's line 2 (1024-first.jpg, 390-first.jpg).

## layout: 9 (×10)
- 1440-rm-full.jpg: the tone rhythm is paper → stone → deep → paper → white → deep → paper → stone → orange → deep.
- There is a full-bleed curve break, an asymmetric story and a dense services table.
- Reviews are now featured + 3 + centred 2, with no lone orphan.
- −0.5:
  - The #tools cards have unequal heights, so the crack reader card ends about 210px above the calculator and leaves a dark void under it (1440-rm-full.jpg #tools).
  - The featured review's right column holds only stars + name, floating in about 300px of empty width (1440-rm-full.jpg #rev).

## photo: 9 (×8)
- These are placeholders: the drawn treatments are judged on merit.
- The elevate move was delivered:
  - Every drawing has blue duplicate strokes offset behind the ink.
  - There is a scale tag per drawing ("1 in. = 4 in.", "1 in. = 3 ft", "1 in. = 2 ft").
  - The crack reader shows a proper plan of map crazing (1440-rm-full.jpg #tools).
  - The story section fills every layer (1440-rm-full.jpg #proc).
- It is one hand throughout, honestly footnoted.
- Not 9.5: the calculator's slab plan is the weakest drawing (a stippled 3×2 box), and the drainage sketch's water squiggles are clip-art-ish (1440-rm-full.jpg #under).

## copy: 9 (×8)
- The #under h2 is now concrete: "Base, steel and fall: the three lines most quotes leave blank."
- The trade nouns are right: lifts, chairs, bleed water, joints at 2 to 3× depth, sand not salt.
- The doubt microcopy is right ("Your real number comes after we walk the site", "Nothing is booked until you say so").
- Every rating, review, price, licence and guarantee is Sample-labelled. The guarantee matches facts.json.
- Not 9.5:
  - "Read back from the job file." is a slightly forced h2.
  - "full hours in the footer" is a navigational crutch inside the open-now line (1440-rm-full.jpg #area).

## mobile: 9 (×7)
- render.json: no overflow at 390 or 320.
- 390-rm-full.jpg: the story diagram is re-cut with readable gutter labels.
- The services stack with their "Price it" links, the tools stack, and the two-button bar is 56px.
- −0.5: 390-full.jpg (motion on) shows the #proc diagram as an empty dark box with one dotted line, sitting above an 8-item list. On a phone the layers build while the reader is scrolling the list *below* it, so the build happens off-screen and the visitor sees a void.

## a11y: 9 (×7)
- 1440-rm-full.jpg and 390-rm-full.jpg: every word is present, and the story and curve are in their final state (Day 28).
- render.json errors are empty. There is one h1, an ordered tree, and the story labels are legible.
- −0.5: footer fine print ("Drawings on this page are illustrations…") is about 13px grey on navy, and the services column headings are about 12px tracked caps in mid-grey (1440-rm-full.jpg footer).

## motion: 9 (×12)
- 1440-scroll-25.jpg: the pinned story ticks lines 01–04 while the section builds dig → base → steel → forms, each with its leader label.
- 1440-scroll-50.jpg: the curve is mid-draw at Day 15 with a dotted forecast ahead. The hand-off tag "08 cure → day 0" makes it one idea.
- This is motion that explains order.
- −0.5: on the phone the build is unpinned and runs out of view (390-full.jpg, empty diagram box). The calculator slab redraw can't be confirmed from stills.

## wow: 8.5 (×8)
- The story → curve sequence is now a genuine memorable moment (1440-scroll-25.jpg → 1440-scroll-50.jpg).
- −0.5 (unchanged from round 2): the tool a homeowner would actually play with still answers with a per-sq-ft range from a 3-stop Small/Typical/Large slider, with no square feet, no total and no thickness choice (1440-scroll-75.jpg, 1440-rm-full.jpg #tools). The headline interactive is the weakest piece of a site built on "we show you the numbers".

## polish: 9 (×4)
- dist/index.html: SVG favicon, OG, JSON-LD, print and forced-colors.
- There is one button language now: the blue primary for "Next", and the footer call is outlined like the hero secondary (1440-rm-full.jpg).
- −0.5: there are two "Page 2" labels (the crack reader card and the contact "Ticket page 2"), and the tools cards have unequal heights (1440-rm-full.jpg).

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×9 + 8×9 + 7×9 + 7×9 + 12×9 + 8×8.5 + 4×9
= 126 + 114 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 68 + 36 = **902 / 100 = 9.02** → ELEVATE (wow 8.5 is below the 9.0 pass mark; checks are clean and there is no mustFix).

## Must
None.

## Should
1. **#tools note** (1440-scroll-75.jpg): change "4-5 in." to "4–5&nbsp;in." in the price note data.
2. **Hero ticket title** (1024-first.jpg, 390-first.jpg): put the middle dot inside a nowrap span with the size ("&nbsp;·&nbsp;5&nbsp;in.&nbsp;slab"), or set the size on its own mono line under the title, so no line starts with "·".
3. **#tools card heights** (1440-rm-full.jpg): use `align-items: stretch` on the two-card grid, and push "Have us look at it" to the card bottom (`margin-top: auto`). Alternatively, add the crack reader's "what it costs / how long" two-line spec block so the cards end together.
4. **#rev featured** (1440-rm-full.jpg): move the stars, name and Sample tag under the featured quote at the left edge and let the quote span the full 12 columns, or put the 4.9 rating block in that right column as a large stamped figure. Don't leave meta floating alone in an empty column.
5. **#proc on phones** (390-full.jpg): below 768px, either pin the diagram (sticky, top 64px, height ≤ 45vh) above the scrolling list so the build stays in view, or render the finished section statically and animate only the list ticks. Never show an empty box.
6. **Labels**:
   - Rename the contact stamp to "Ticket page 3", or rename the tools cards to "Tool 1 / Tool 2", so "Page 2" isn't used twice.
   - Cut "· full hours in the footer" from the #area open-now line.
7. **Footer fine print** (1440-rm-full.jpg): raise it to 14px, and raise the footer column headings to at least #b8c2cf on navy.
8. **Hero left column** (1440-first.jpg): fill the about 250px under the proof line. For example, add a short three-item "What's on your ticket" mini key, or vertically centre the copy block against the ticket.

## Elevate
- **wow (8.5)**: make the calculator the most satisfying thing on the page, a real take-off sheet.
  - Replace the 3-stop slider with two drag handles directly on the drawn slab plan (length × width in feet, snapping to 1 ft).
  - The plan re-cuts its control joints live at ≤ 10 ft panels.
  - The ticket below the plan writes itself as ticket lines: area in sq ft, yards of concrete at the chosen 4 / 5 / 6 in., panel count, and a Sample total range.
  - "Print this ticket" then prints exactly that ticket.
  - The homeowner should leave with *their* driveway drawn and numbered, which is the thesis of the site in their hands.
- **firstScreen (9, ties broken by weight)**: make the hero ticket the protagonist of the first screen rather than a card beside the copy.
  - Let the ticket overlap the stone band below by about 80px and tilt it 1–2° like a sheet set on a table.
  - Run its cross-section drawing at the full ticket width.
  - Have the intro "stamp" the SAMPLE TICKET mark and tick the five lines in sequence.
  - The left column's dead space then becomes the ticket's shadow and the fold line, and the first screen reads as one composed object, not two columns.
