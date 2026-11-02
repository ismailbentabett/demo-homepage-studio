# Copy deck — pinestraw-C

## Hero
- kicker: Two Seasons Pine Straw · Marietta
- h1: Pine straw, twice a year. / Marietta.
- lead: Spring when the dogwoods open. Fall before Thanksgiving. Edged, weeded and tucked around every shrub.
- proof line: Mon–Sat 8–6 · Cobb County · {{proof.rating}} ★ ([[sample rating]])
- CTA primary: Price it → #contact
- CTA secondary: [[tel]]

## Seasons (#seasons)
- h2: The two weeks that matter
- spring kicker: SPRING
- spring body: Dogwoods and azaleas open, HOA walk-throughs start. We spread fresh long-leaf while the blooms are out so the beds read clean for the inspection.
- fall kicker: FALL
- fall body: Oaks drop their leaves, family drives in for Thanksgiving. We clear the beds, recut the edge and put down a deep red-brown layer before company arrives.
- refresh clock label: When will my straw look gray?
- refresh clock inputs: Month of last spread · Sun or shade
- refresh clock output: Top-up in {month} · Next full refresh: {season}
- refresh clock CTA: Put me on that week → #contact (prefill)

## Process (#process)
- h2: Rake, edge, pull, spread, blow
- step 1 title: Rake the old out
- step 1 body: Faded straw and oak leaves pulled from the beds and hauled away.
- step 2 title: Cut the bed line
- step 2 body: A spade recuts the curve where the clay has crept into the lawn.
- step 3 title: Pull the weeds
- step 3 body: Hand-pulled before the new straw goes down so they do not come back through.
- step 4 title: Shake and tuck
- step 4 body: Long-leaf flakes shaken loose and tucked under the drip line, off the stems.
- step 5 title: Blow the walks
- step 5 body: Driveway, path and porch cleaned up before we leave.
- guarantee: If your HOA flags a bed we spread, we fix it before your deadline.

## Break (#break)
- caption: Red clay and long-leaf needles at a Cobb County bed edge.

## Services (#services)
- h2: What we do
- card CTA: Price it → #contact (data-service={{.short}})

## Pricing (#pricing)
- kicker: Sample pricing
- h2: Counted bales, not guesses
- body: Long-leaf pine straw, edged and weeded. Prices below are sample ranges for typical Cobb front-and-back beds; your count comes from the estimator.
- per-bale: {{proof.prices.0.from}}–{{proof.prices.0.to}} per bale · {{proof.prices.0.note}}
- refresh: {{proof.prices.1.from}}–{{proof.prices.1.to}} · {{proof.prices.1.note}}
- two-season: {{proof.prices.2.from}}–{{proof.prices.2.to}} · {{proof.prices.2.note}}
- leaves: {{proof.prices.3.from}}–{{proof.prices.3.to}} · {{proof.prices.3.note}}
- hoa: {{proof.prices.4.from}}–{{proof.prices.4.to}} · {{proof.prices.4.note}}
- CTA: Get a number → #contact

## Area (#area)
- h2: Do you serve my street?
- zip label: Enter your ZIP
- zip yes: Yes — we cover {{biz.city}}, {{biz.areas|list}}.
- zip no: Sorry, we stick to Cobb and north Fulton. Try {{biz.areas.0}} or {{biz.areas.1}}.
- towns: Serving {{biz.city}}, {{biz.areas|list}}
- CTA: Price it → #contact

## Reviews (#reviews)
- kicker: [[sample review]]
- h2: From neighbors on your street
- Each review card shows {{.text}}, {{.name}}, {{.town}}, service {{.service}}.

## HOA (#hoa)
- kicker: HOA deadline?
- h2: Book before the letter lands
- body: Tell us the walk-through date and how many beds. We tell you the book-by date and crew-day estimate.
- planner inputs: Walk-through date · Number of beds
- planner output: Book by {date} · Crew estimate: {n} days
- planner CTA: Lock in that date → #contact (prefill)
- guarantee repeat: If your HOA flags a bed we spread, we fix it before your deadline.

## Contact (#contact)
- h2: Price it
- microcopy: We'll call you back to set up a visit.
- hours: {{hours|today}}
- form steps: Season → Beds → When → Contact
- thank-you: Thanks, {name}. In your version this goes straight to Corinne's phone and inbox.

## Footer
- disclaimer: {{demo.disclaimer}}
- credits: [[credits]]
- nav: Services · Area · Pricing · Reviews · Price it