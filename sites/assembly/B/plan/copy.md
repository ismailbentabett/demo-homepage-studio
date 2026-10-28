# assembly-B · Copy deck

## Header
Wordmark: PC plate + {{biz.name}} · nav: Pieces · Walls · Buildings · Area · Price my list · phone [[tel]]

## Hero
- kicker: Furniture assembly & TV mounting · {{biz.city}}, {{biz.state}}
- h1: Price your list before anyone rings the buzzer.
- lead: Tap what came in the boxes. Every piece shows its own sample range, so the number is on the table before we climb the stairs.
- buttons: Call {{biz.phone}} · Book this list
- proof: {{hours|today}} · {{biz.areas.0}}, {{biz.areas.1}} and {{biz.city}} · {{proof.rating}} from {{proof.reviewCount}} reviews (Sample rating)
- board head: The packing list · Sample pricing · "Tap + for every piece"
- tiles: DSK Desk · DRS Dresser · BKC Bookcase · BED Storage bed · TV-D TV on drywall · TV-C TV on brick or concrete · GYM Treadmill or home gym · BOX Boxes out
- board foot: PC 00 · "pieces on your list" · Book this list · "One total on the call, built from these lines."
- JS off: "Call and read us the list. These are the sample ranges per piece."

## Rail / sheet
- plate PC 00 · empty: "Tap a piece. It lands here." · Book this list · Text a photo of the wall · Clear

## Pieces (PC 01)
- kicker: PC 01 · By the piece
- h2: Nine kinds of job. One line each on the bill.
- lead: Cam locks set by hand, panels squared before the back goes on, drawers run before we pack up.
- card button: Price it
- guarantee: {{proof.guarantee}} (Sample come-back terms)

## Walls (PC 02)
- kicker: PC 02 · What holds the TV
- h2: Poured concrete eats drywall anchors.
- lead: Pick your wall. Each one gets its own anchor, and the anchor decides the drill.
- WALL 01 Drywall: Lag bolts into two studs. Never a plastic plug alone. {{proof.prices.2.from}}–{{proof.prices.2.to}}, {{proof.prices.2.note}}
- WALL 02 Plaster & lath: Pilot holes first so the plaster doesn't crack, then lags into the stud behind the lath. Priced from a photo.
- WALL 03 Brick: Sleeve anchors in the mortar joint, not the face of the brick. {{proof.prices.3.from}}–{{proof.prices.3.to}}
- WALL 04 Poured concrete: Hammer drill, then sleeve anchors set to depth. Tower walls in {{biz.city}} are mostly this. {{proof.prices.3.from}}–{{proof.prices.3.to}}
- buttons: Add this TV · Mount on this wall · Text a photo of your wall

## Haul (break)
- h2: Boxes out. Trash room clear.
- body: {{services.8.blurb}} · {{proof.prices.5.from}}–{{proof.prices.5.to}} {{proof.prices.5.unit}} · Sample pricing · Add boxes out

## Visit (PC 03)
- h2: The visit, in four moves.
- 01 Send the list: Tap it here, or text a photo of the box labels.
- 02 Get one number: We call back with the total and ask about the elevator, the stairs and the wall.
- 03 We bring the drill: Hammer drill, level, stud finder, sleeve anchors and toggles in the van.
- 04 Built, tested, boxes out: Drawers run, the bed is loaded, the treadmill runs five minutes, cardboard goes down with us.

## Proof (PC 04)
- h2: Read the labels.
- plate {{proof.rating}} · {{proof.reviewCount}} reviews · Sample rating
- each: plate {{.service}} · {{.town}}, text, {{.name}}, Sample review

## Building (PC 05)
- h2: Your building has rules. Tick them.
- lead: Tell us now and the visit fits the building, not the other way round.
- ELEV Freight elevator needs booking · COI Management wants an insurance certificate · HRS Quiet hours after a set time · WALK-UP No elevator, stairs only · BOX Trash room has carton rules
- result: 0: Tick what your building asks. | 1: {n} rule noted. We plan the visit around it. | 2: {n} rules noted. We plan the visit around them.
- button: Add to my booking · note: Ask for the certificate and we email it to your management office.

## Area (PC 06)
- h2: Hudson County, river to the Heights.
- body: {{biz.city}}, {{biz.areas|list}}.
- ZIP: Your ZIP code · Check · yes: Yes, we build in {zip}. · no: {zip} is outside our usual map. Call and we'll tell you straight.
- hours: Hours · {{hours|table}}

## Contact (PC 07)
- h2: Book this list.
- lead: Four short steps. We call back with one number before anything is booked.
- steps: 1/4 What you're building · 2/4 Where it goes · 3/4 When works · 4/4 How to reach you
- submit: Send my list · micro: We'll call you back to set up a visit. Nothing is booked until we talk.
- thanks: Thanks, {name}. In your version of this site, this list goes straight to your phone and inbox.

## Footer
- plate PC 00 · boxes out · "Flat, tied, carried down." · [[call]] · Licence # (sample) {{proof.license}} · {{demo.disclaimer}} · [[credits]]
