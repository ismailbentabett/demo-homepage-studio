# appliance-C · Copy deck

## Header
Wordmark `{{biz.short}}` · nav: Thaw clock · What we fix · Prices · Area · Book a visit · `[[call]]` · Menu

## #hero
- kicker: Appliance repair · `{{biz.city}}, {{biz.state}}`
- h1: By November, most of the freezer is spoken for.
- lead: Chest freezers, garage fridges, washers and dryers, fixed around `{{biz.city}}` by people who know what they're holding.
- buttons: Call `{{biz.phone}}` · Text us
- proof: `{{hours|today}}` · `{{proof.rating}}` from `{{proof.reviewCount}}` reviews [Sample rating] · Diagnostic `{{proof.prices.0.from}}`-`{{proof.prices.0.to}}` [Sample pricing]
- tape: OCT The pheasant opener goes in the chest freezer · NOV A quarter of beef, wrapped and dated · JAN The garage fridge freezer goes soft · FEB The dryer vent to the roof fills with lint · JUL The compressor runs hard in the heat · SEP Freezer checkup, before it fills

## #thaw
- kicker: Freezer gone quiet
- h2: Keep the lid shut. Then call.
- lead: A full freezer holds about 48 hours with the lid closed, a half-full one about 24 (USDA guidance). Every look inside spends some of that.
- q1: How full is it? Full · About half
- q2: Has the lid been opened since it went quiet? Kept shut · Opened a few times
- result: About 48 hours / About 24 hours / Less than 48 hours / Less than 24 hours + "if the lid stays shut from here." / "Shut it now and leave it."
- caption: Chest freezer, lid down, frost line = time left
- buttons: Call `{{biz.phone}}` · Text a photo of the model tag

## #services
- kicker: All year · What we fix
- h2: Everything on the list, from the beef in the basement to the oven upstairs.
- line: `{{.name}}` / `{{.blurb}}` / Book this

## #lid (break)
- quote: Don't check on it. A shut lid buys you two days.
- sub: Call first. We'll tell you what to do until we're there.
- button: Call `{{biz.phone}}`

## #year
- kicker: Jan-Dec
- h2: A `{{biz.city}}` year, by what the machines are carrying.
- lead: Every month puts something different on the list. Scroll the year; each line gets its tick.
- JAN The garage fridge lets its freezer side go soft · FEB A winter of loads packs the dryer vent · MAR Mud season: the washer runs four loads a day · APR Move-in month: new laundry rooms hooked up · MAY Graduation parties fill the spare fridge · JUN The ice maker works every lake weekend · JUL The compressor runs hard in the heat · AUG Summer dust settles on the fridge coils · SEP Freezer checkup, before it fills · OCT The pheasant opener goes in the chest freezer · NOV The quarter of beef, and the oven before Thanksgiving · DEC The dishwasher after every holiday meal

## #garage
- kicker: Jan · The garage fridge
- h2: The garage got cold, so the fridge thinks it's done. The freezer side isn't.
- lead: On many single-thermostat fridges the thermostat sits in the fresh-food side. A cold garage keeps that side happy, the compressor rarely runs, and the freezer warms.
- labels: Month · Garage temperature (°F)
- results: cold / borderline / fine (see app.js)
- note: Many manuals list a minimum room temperature around 50-60°F. Typical; check yours.
- kit: Cold-weather kit, installed `{{proof.prices.2.from}}`-`{{proof.prices.2.to}}` [Sample pricing] · Book the winter fix

## #prices
- kicker: Any month · What it costs
- h2: The prices, before anyone comes out.
- line: `{{.item}}` / `{{.note}}` / `{{.from}}`-`{{.to}}`
- promise h3: If the part fails · `{{proof.guarantee}}` [Sample promise]
- tool h3: Fix it or replace it? · lead: If the repair costs more than the machine has left in it, we'll say so first.
- labels: Appliance · Age in years · result Worth fixing / Borderline / Probably replace · button Book a visit for this

## #reviews
- kicker: Notes under the tape
- h2: Notes from kitchens and basements around `{{biz.city}}`.
- rating: `{{proof.rating}}` from `{{proof.reviewCount}}` reviews [Sample rating]

## #area
- kicker: The route
- h2: `{{biz.city}}` and the towns a short drive out.
- lead: Ask for `{{biz.owner}}`. `{{proof.years}}` years on these roads [Sample].
- ZIP: Your ZIP code · Check · yes: "Yes, we drive to {zip}." · no: "{zip} is off our usual route. Call and we'll tell you straight."
- hours h3: Hours

## #contact
- kicker: (current month) · The last blank line
- h2: The last line on the list is yours.
- lead: Tell us the machine and the model number, and the tech brings the likely part.
- steps: What's acting up · The details · When suits you · How we reach you
- fields: Appliance · What is it doing? · Model number (on the tag, or "photo later") · ZIP code · Time window (First open slot · Morning · Afternoon · Saturday morning) · Your name · Phone · Email (optional)
- microcopy: We'll call you back to set up a visit.
- thanks: Thanks, {name}. In your version this goes straight to the shop's phone and inbox.

## Footer
- final entry: `{{biz.short}}` · `[[tel]]` · `{{biz.email}}`
- `{{demo.disclaimer}}` · `[[credits]]` · © `{{year}}` `{{biz.name}}`
