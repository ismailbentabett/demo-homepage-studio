# gutter-B · Copy deck

## Header
Nav: Gallons · Tools · Guards · Prices · Reviews · Area · button "Call {{biz.phone}}" (phone: icon, "Call {{biz.short}}")

## 1 Hero
- Kicker: {{biz.city}} gutters · sized by the gallon
- h1: Every inch of rain on your roof has to go somewhere.
- Lead: We size the gutter to the water your roof sheds, then flow-test each downspout before we leave.
- Proof ledger: 1,000 sq ft × 1 in ······ 623 gal (example) / seamless gutters ······ {{proof.prices.0.from}}–{{proof.prices.0.to}} {{proof.prices.0.unit}} [Sample pricing] / {{proof.rating}} · {{proof.reviewCount}} reviews [Sample rating]
- Buttons: Call {{biz.phone}} · Price my roof · text link "or do the gallon math"
- ZIP: label "Do you come to my ZIP?" · button "Check" · yes "Yes, we work in {zip}." · no "{zip} is outside our usual area. Call and we'll tell you straight."
- Hours: {{hours|today}}
- Strip frames: No. 01 "1,000 sq ft × 1 in" 623 gal · No. 02 photo "Rain beading on a rail, the start of every gallon." · No. 03 "5-inch or 6-inch" sized to the roof · No. 04 "one 2x3 drop vs two 3x4" 623 / 312 each · No. 05 "micro-mesh under fir" hose-tested · No. 06 "rain barrel + overflow" to a rain garden · loop copy No. 02 drawn "a drop on the rail"
- Pause button: "Pause the filmstrip" / "Play the filmstrip"

## 2 Gallons band
- Kicker: The arithmetic on every estimate
- h2: 1,000 sq ft × 1 in × 0.623 = 623 gallons.
- Line: That is one ordinary inch of rain on a small roof. Your gutters and downspouts have to carry every gallon of it, all winter.

## 3 Story
- Kicker: Where 623 gallons go
- h2: Follow one inch of rain from the shingles to the yard.
- Steps: 01 The roof sheds it — "1,000 sq ft of roof, one inch of rain. It all slides to the edge." row "into the gutter · 623 gal"
  02 One 2x3 drop takes it all — "A single small downspout at the far corner. The trough backs up and spills over the front." row "one 2x3 drop · 623 gal"
  03 A second drop, both 3x4 — "Split the run, widen the pipe. Each drop carries half, and the gutter drains before it fills." row "two 3x4 drops · 312 gal each"
  04 Turned away from the wall — "An elbow and an extension onto a splash block, so the water lands in the yard." row "at the foundation · 0 gal"

## 4 Break caption
A downspout pouring onto a splash block, steered off the foundation.

## 5 Services
- Kicker: Eight jobs, one method
- h2: Everything we do starts with how much water it has to carry.
- Rows: {{services.*.name}} / {{.blurb}} / "Price it"

## 6 Tools
- Kicker: Do the math we do
- h2: Two numbers tell you whether your gutters are the problem.
- Runoff: h3 "Runoff calculator" · labels "Roof footprint (sq ft)", "Rain (inches)" · output "{gal} gal off the roof" · rows roof / rain / off the roof · button "Size gutters for this roof" · note "Gallons = square feet × inches of rain × 0.623."
- Size check: h3 "5-inch or 6-inch?" · "Area of one roof side (sq ft)", "Roof pitch" low / medium / steep, "Heavy rain where you live" light / steady / downpours · results "5-inch is usually enough." / "6-inch is the safer choice." + reason · button "Price this size" · note "A rule of thumb. We confirm it with a tape on the visit."
- No JS: "Without JavaScript the example stays: 1,000 sq ft and 1 in make 623 gallons. Call and we'll run yours."

## 7 Guards
- Kicker: Under firs, maples and moss
- h2: Which guard works under your trees, honestly.
- Columns: Screen / Micro-mesh / Reverse curve; rows "Stops", "Slips through", "Under firs", "Upkeep"
- Micro-mesh range {{proof.prices.2.from}}–{{proof.prices.2.to}} {{proof.prices.2.unit}} [Sample pricing] · "Hose-tested before the crew leaves." · button "Price guards"

## 8 Prices
- Kicker: Before anyone climbs a ladder
- h2: Sample prices, per foot and per visit.
- Rows: {{.item}} · {{.from}}–{{.to}} {{.unit}} · {{.note}} · [Sample pricing] · footnote "Your number comes after we measure the roof planes and count the drops."

## 9 Reviews
- Kicker: Neighbours who watched the water
- h2: What people said after the next storm.
- Rating: {{proof.rating}} average · {{proof.reviewCount}} reviews [Sample rating] · each card [Sample review], name, town, service

## 10 Area
- Kicker: Where we work
- h2: {{biz.city}} and the towns around the lake.
- Lists: areas, ZIP checker, hours table, today, licence # {{proof.license}} (sample)

## 11 Contact
- Kicker: Price my roof
- h2: Tell us about the roof. We'll come and measure it.
- Steps: "What needs doing?" / "About the house" (ZIP, "What's happening? Overflow, a loose downspout, needles…") / "When suits you?" (This week · Next two weeks · Before the fall rains · Just pricing for now) / "How do we reach you?"
- Submit "Send my request" · microcopy "We'll call you back to set up a visit."
- Thanks: "Thanks, {name}. In your version of this site, this request goes straight to your phone and inbox."
- Aside: Call {{biz.phone}} · Text a photo of your gutter · {{biz.email}} · {{hours|today}}

## Footer
- Ledger: This page ······ 1 in of rain on 1,000 sq ft = 623 gal · Your roof ······ [Price my roof]
- {{biz.name}} · {{biz.city}}, {{biz.state}} · {{biz.areas|list}} · {{demo.disclaimer}} · [[credits]]
- Mobile bar: Call · Text a photo
