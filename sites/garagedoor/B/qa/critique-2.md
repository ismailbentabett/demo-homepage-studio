COPY: ok

# garagedoor-B · critique round 2 (fast mode)

## Five-second test
1440-first.jpg: "Garage door repair in Cleveland (the black stamped label on the h1). Tap what I heard and what the door does, and the plate tells me the part and if it's safe. Call (216) 555-0147 in yellow. Why them: they put the part and the price on a plate before they come." It answers fully now. A real door photo sits over the drawing, and the deep band peeks about 50px under the hero.
390-first.jpg: the label, the h1 in 2 lines, both finder questions and the top of the READING plate with the yellow SAFE TO LIFT band are all above the fold. The hero Call is below, but the header Call and the Call / Text / Price it bar carry the action.

## What changed since round 1
- The h1 now carries trade and city ("Garage door repair, Cleveland." label inside the h1, as dist shows).
- The hero has a peek at 1440 (1440-first.jpg, deep band at about 850px).
- Two photographs were added: the hero door from the drive, and a carriage door in repair-or-replace (1440-full.jpg). Both are captioned PHOTOGRAPH in the plate language.
- `.svc__go` is 48px tall (dist). The mustFix is closed.
- "measured at your door" is down to 1 use. Quote intent is unified on "Price it" (16×) plus "Price both" / "Price this reading".

## firstScreen: 9
1440-first.jpg: trade and city plus a question h1, one loud Call and a quieter outlined Price it, the phone in the header and the hero, and a Sample proof line. The plate crosses the photo/drawing seam, so the signature is in the first screen. 390-first.jpg: h1 2 lines, and the plate shows above the fold.
- Not 9.5: 390-first.jpg puts the hero Call and the proof line below the fold (the bar saves it), and the label + h1 + tracked kicker stack three voices above the question.

## distinctiveness: 9
1440-full.jpg / 1440-rm-full.jpg: the plate shows in the hero, story, services, parts ledger, verdict, insulation, reviews, area and footer, and it does work there. It differs from the A/C siblings in palette and face. The CC-0N margin serials are still decoration, and mono caps sit on every heading (absorbed). Unchanged from round 1.

## type: 8.5
The Franklin 800 + Public Sans + Martian Mono voice is coherent, with tabular prices (1440-scroll-50.jpg).
- 1440-first.jpg: tracked mono caps on the kicker, the plate rows, the proof line, the photo caption and the drawing caption, all in one view (−0.5). The chips are still mono.
- 1440-scroll-75.jpg: the plate meta (HIGH, READING FROM UPSTAIRS) sits at about 12–13px. That blocks a 9.

## layout: 8.5
A good tone run, with no dark bands touching (1440-full.jpg).
- 1440-full.jpg, services: the S-01 Torsion springs plate is still about 550px with a large empty zinc field (−0.5).
- 1440-scroll-50.jpg, #ror: the h2 left / verdict plate right starts about 180px lower than the heading, leaving an empty blue field top right. Heading-left / plate-right still repeats about 5× (parts, ror, warm, area, contact) (−0.5).
- +0.5 for the hero seam break with the photo above the drawing.

## photo: 8
1440-first.jpg, 1440-full.jpg: two on-topic residential frames, captioned in the plate language. The hero pairs the photo with the drawing ("the same kind of door, from inside"), which is a real idea.
- The two frames don't share a grade. The hero is saturated summer green, and the #ror carriage door is flat grey daylight (−0.5).
- Two photos on a 12,000px page. The rest is drawn, so the "one shoot / sequence" anchor can't be met. Better than round 1's zero (+0.5 from 7.5).

## copy: 9
Trade nouns throughout ("winding cone", "wire, length and inside diameter get measured before we quote", "Road salt eats the bottom panel first"). Doubt microcopy ("If you heard a bang: no. Call."). One primary name ("Price it"). Sample labels on the rating, prices, terms and reviews (1440-scroll-50.jpg, 1440-scroll-75.jpg). 1 em dash.
- Not 9.5: the review plates stamp "STARS 5 / 5" on every card (1440-scroll-75.jpg). The aggregate does that job already.

## mobile: 8.5
390-full.jpg: no overflow (render.json at 320/390 clean), 2-column chips, the story stacked and unpinned, the bottom bar, and 48px `.svc__go`. There are 389px and 639px breakpoints in dist.
- 390-full.jpg, services: the 11 plates still stack full-width, a long run of identical cards. Collapsed, not composed (−0.5).

## a11y: 9
1440-rm-full.jpg: every word of the story, the plates and the footer is visible. dist has a skip link, a 3px accent focus with per-tone colour, aria-live regions, forced-colors rules, one h1 and ordered h2s. Not 9.5: the hero readout is still a heading-led widget, not a labelled region.

## motion: 8.5
1440-scroll-25.jpg: the spring story explains (cycles, gap, bang line, call). Easing is custom, with no bounce.
- Plates still lift on hover everywhere, and data-reveal is one entrance for most blocks (−0.5).
- No frame shows the finder driving the drawing or the photo. The second motion idea is still unproven.

## wow: 9
1440-scroll-25.jpg + 1440-rm-full.jpg: the 10,000-cycle spring snap ends on a $280–$450 sample price and a Call. The hero finder stamps a plate. It reads in reduced motion. Not 9.5: the finder's filled state is never shown, and its output is text rows.

## polish: 8.5
dist: apple-touch, OG, JSON-LD, print stylesheet, forced colors, one square radius.
- 1440-full.jpg, footer nameplate: still dense small mono in narrow columns, not a stamped close at a glance (−0.5).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×8.5 + 8×8 + 8×9 + 7×8.5 + 7×9 + 12×8.5 + 8×9 + 4×8.5
= 126 + 108 + 85 + 85 + 64 + 72 + 59.5 + 63 + 102 + 72 + 34 = 870.5 / 100 = **8.71**

Round 2 is the fast-mode last round, and 8.71 < 8.8 → expected **NEEDS_HUMAN**.

## Must
None.

## Should
1. **#services S-01 plate (1440-full.jpg).** Fill the empty zinc with the measured-spring rows (WIRE / LENGTH / ID / CYCLES fill-ins), or drop the plate to its neighbours' row height.
2. **#ror (1440-scroll-50.jpg).** Pull the verdict plate up to align with the h2's top (`align-items:start`), or put the carriage-door photo top right so the blue field isn't empty.
3. **Photo grade.** Bring the two frames to one grade: desaturate the hero greens about 20% and add the same cool zinc tint to both (`filter: saturate(.8) contrast(1.05)`, same on each).
4. **Hero caps (1440-first.jpg).** Set the chips in Public Sans 16px sentence case. Keep mono only for the plate rows and the kicker.
5. **390 services.** Under 640px, turn the 11 plates into a scroll-snap rail with an 18% peek, or an accordion of short-name rows.
6. **Review plates.** Replace "STARS 5 / 5" with a row that differs per review (the part replaced or the visit length), keeping the Sample label.
7. **Footer nameplate.** Give it fewer, larger rows (name, LIC, hours, phone) at 15px+ and move the email to its own row.

## Elevate
- **photo (8).** Make the photo/drawing pairing the system, not a one-off. Each photo is one plate's "PHOTOGRAPH" half, with the matching line drawing wiping over it on the same seam: hero (door from the drive → drawing from inside), salt band (a real bottom section → the drawn salt line), repair-or-replace (an old door → the plate verdict). All three share one cool zinc grade, so the stock reads as evidence for each reading.
- **motion (8.5).** Let the finder animate the signature: when a symptom is tapped, the matching part on the hero drawing lights up in yellow and the plate rows stamp in one by one (a 60ms stagger, a press-in on each value). Retire the hover-lift on every plate in favour of one hairline-underline hover language, so the hero and the spring story become two connected motion moments.
