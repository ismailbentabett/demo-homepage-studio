# insulation-B · copy deck (fast)

## Header
Wordmark {{biz.short}} · nav: Depth · Air leaks · Line items · Attic ruler · Notes · Price · Call {{biz.phone}} · menu "Menu" / "Close"
Skip link: Skip to content

## #top · F-00
- Kicker: {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}} · Finding F-00
- h1: Measured in six spots before any price.
- Lead: A written attic check: depth in inches, leaks photographed, an estimated R-value, then a number.
- Buttons: Call {{biz.phone}} · Read your attic depth
- Proof line: {{hours|today}} · {{biz.areas.0}}, {{biz.areas.1}}, {{biz.areas.2}} · {{proof.rating}} from {{proof.reviewCount}} reviews [Sample rating]
- Plate caption: P-01 · Ranch on a frosted street, late winter
- Attic cut caption: Six depth rulers, one attic [Sample readings]
- Ruler labels: Over bedroom 3.5 in · By hatch 1 in (below target) · Centre 6 in · North eave 4.5 in · Garage side 2 in · South eave 5 in

## #depth · F-01 Depth
- Kicker: F-01 · Depth
- h2: Your price starts from an inch number.
- Lead: One ruler, read four times. The fill climbs to the depth your report promises.
- Steps:
  1. 3.5 in · about R-10 · "What a thin attic reads over a bedroom. The ceiling below is doing a third of its job."
  2. 10 in · about R-30 · "Seal first. Top plates, wire holes and light boxes get foam before any fill goes in."
  3. 14 in · about R-42 · "Fill to the depth on your report, with baffles keeping the eave vents open."
  4. 17 in · about R-51 · "Past R-49, the typical target here. The rulers stay stapled to the rafters for the next inspector."
- Note: R per inch is about 3 for blown cellulose (typical). R-49 to R-60: typical ENERGY STAR / DOE attic range for zone 6.

## #leaks · F-02 Air leaks
- Kicker: F-02 · Air leaks first
- h2: Fill on top of a leak just hides it.
- Lead: Warm air rides up through the gaps in your ceiling and melts the snow from underneath. That is your icicle. So we seal before we fill.
- Log title: Seal log · one photo per seal
- Rows: Top plates · foam, then caulk · photographed | Wire holes · foam · photographed | Light boxes · caulk at the box edge · photographed | Attic hatch · weatherstrip, insulated lid · photographed
- Footer line: {{services.2.name}}: {{services.2.blurb}}

## #vents · F-03 Ventilation
- Kicker: F-03 · Ventilation
- h2: The fill stops at the baffle. The roof keeps breathing.
- Callouts: 1 Baffle at every eave · keeps soffit air moving under the roof boards · 2 Bath fan ducted outside · {{services.7.blurb}} · 3 Fill depth even to the edge · no low strip where icicles start
- Caption: Drawing · a ranch attic in section, soffit to ridge

## #services · F-04 Line items
- Kicker: F-04 · Line items
- h2: Each job priced on its own line.
- Lead: You get the line items your attic needs, not the whole list. Pick one and we start there.
- Rows (repeater): {{.name}} · {{.blurb}} · Price it

## #ruler · F-05 Your reading
- Kicker: F-05 · Your reading
- h2: Read your own attic depth.
- Lead: Stand on the hatch ladder, lay a tape in the fill, and slide the ruler to what it reads.
- Controls: "Depth you read" (0-20 in) · "What it looks like": Loose grey or white fluff · Loose yellow or pink fluff · Batts in rows · Grey-brown pebbles · Not sure
- Output: "{d} in · about R-{lo} to R-{hi}" · "Typical target R-49 to R-60" · "Add about {a} to {b} in" / "At or past the typical target"
- Pebbles output: "Stop here. Pebbles like these can be vermiculite. Leave them alone and read F-06."
- Button: Send this reading · microcopy: "A tape reading is a start. We measure six spots on the visit."
- No-JS: Tell us the number on the phone: Call {{biz.phone}}

## #pebbles · F-06 Pebbles
- Kicker: F-06 · Test first
- h2: Pebbles like kitty litter? We stop.
- Lead: {{services.5.blurb}}
- Checks: It looks like small pebbles, not fluff · Grey-brown or gold, with shiny flecks · The house was built before 1990
- Results: 0 Tick what you see from the hatch. · 1 One sign. Send a photo before anyone touches it. · 2 Two signs. Leave it alone and ask us about a lab test. · 3 Possibly vermiculite: do not touch, keep kids out, get a lab test. We will not blow over it until you know.
- Ruler label: Test first
- Button: Call {{biz.phone}}

## #notes · F-07 Homeowner notes
- Kicker: F-07 · Homeowner notes
- h2: What people read off their own attic.
- Rating: {{proof.rating}} from {{proof.reviewCount}} reviews [Sample rating]
- Notes (repeater): {{.text}} · {{.name}}, {{.town}} · stub {{.service}} [Sample review]

## #prices · F-08 Price
- Kicker: F-08 · Price
- h2: A ballpark before you call.
- Lead: Tick the lines you think you need. Your attic decides the real number.
- Receipt head: Sample price list [Sample pricing]
- Total: "Tick a line to see a range." / "{n} lines: {lo} to {hi}"
- Button: Get my real number

## #contact · F-09 Visit
- Kicker: F-09 · The visit
- h2: One visit, one written report, then a number.
- Steps: Boards across the joists, so no foot comes through your ceiling · Depth read in six spots · Every leak photographed · The report and the price, line by line
- ZIP: "Your ZIP code" · Check · yes "Yes, we measure attics in {zip}." · no "{zip} is outside our usual area. Call and we'll tell you straight."
- Hours: {{hours|today}} · Call {{biz.phone}} · Text us
- Form legends: 1 Your house and the job · 2 Cold rooms and your reading · 3 ZIP and timing · 4 Where we reach you
- Step 4 ruler: Your depth: __ in
- Buttons: Back · Next · Send my request · microcopy "We'll call you back to set up a visit."
- Thank you: "Thanks, {name}. In your version this goes straight to your phone and inbox."

## Footer · Sign-off
- Ruler 0-20 · Sign-off
- {{biz.name}} · {{biz.tradeLabel}} in {{biz.city}} and {{biz.areas|list}}
- Depth promise [Sample]: {{proof.guarantee}}
- Licence # (sample): {{proof.license}}
- {{demo.disclaimer}} · © {{year}} · credits
- Mobile bar: Call · Text · Price it
