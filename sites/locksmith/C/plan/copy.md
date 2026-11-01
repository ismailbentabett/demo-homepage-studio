# locksmith-C · Copy deck

## Header
Logo `{{biz.short}}` / "Lock & Key". Nav: Doors · Prices · Rain · Move-in · Reviews · Area. `{{hours|today}}`. Button "Call {{biz.phone}}" (mobile: "Call").

## 1 Hero
- Kicker: "{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}" + `{{hours|today}}`
- h1: "Every door has a story."
- Lead: "Rain-swollen front doors, 1910 glass knobs, a rental between tenants. Call, tell us which door, and hear the price range before we drive."
- Buttons: "Call {{biz.phone}}" · "Count my doors"
- Proof row: "Range said on the phone" · "A text with your tech's name" · "ID checked at the door" · "{{proof.rating}} [Sample rating]"
- Door plates / captions: FRONT · Stadium Craftsman | BACK · Hilltop porch | SIDE · Proctor bungalow | GARAGE · South End rambler | BASEMENT · North End duplex
- Wall hint: "Tap each door that locks with a key."
- Counter: "[n] locks on one new key" / "First lock {{proof.prices.2.from}}–{{proof.prices.2.to}}, each added lock {{proof.prices.3.from}}–{{proof.prices.3.to}}." [Sample pricing] · button "Price these locks"
- Photo caption: "A two-storey porch with turned railings, 1930s survey photograph"

## 2 Doors (services)
- Kicker: "Eight doors, eight jobs"
- h2: "Pick the door. That's the job."
- Lead: "We do these eight things, and we do them on your porch, not from a call center."
- Plates: MOVE-IN · LOCKED OUT · RAIN · TURNOVER · NEW LOCK · OLD BRASS · CAR · KEYS
- Card: `{{.name}}` / `{{.blurb}}` / "Price it"

## 3 Arrival
- Kicker: "Before anyone touches the door"
- h2: "You'll know who is coming, and they'll know it's your door."
- Sample text: "Hi, it's {{biz.short}}. Your tech today is Sam, grey van with our name on both doors, arriving 2:40 to 3:05 pm. Sam will ask to see your ID before opening." [Sample text]
- Promises: "1 · The range, said out loud." "We tell you the price range on the phone, before anyone drives." / "2 · A name and a van." "A text with your tech's first name, the van and the arrival window." / "3 · Your ID, then the pick." `{{services.1.blurb}}`
- Caption: "A hand holding a phone in a lit walkway"

## 4 Prices
- Kicker: "Said on the phone, written here"
- h2: "The same range, on the phone and at the door."
- Lead: "No $19 bursts. These are the ranges we say out loud when you call, written the same way."
- Rows: item / from–to / unit / note (6 rows from proof.prices) + [Sample pricing]
- Foot: "Nights sit at the top of the lockout range. Anything else, we say before we start."

## 5 Street (break)
- h2: "Craftsman doors with beveled glass. Porch doors up the Hilltop. PCS rentals in {{biz.areas.1}}."
- Line: "Every one of them closes on a lock we can work on."

## 6 Rain
- Kicker: "Plate: RAIN"
- h2: "Every November, the bolt misses the plate."
- Steps: "1 · October. The bolt slides into the strike plate." / "2 · November. Rain swells the door, it drops a few millimetres, and the bolt hits the frame." / "3 · We move the plate. Strike moved, door adjusted, the bolt throws again, wet months too."
- Self-check h3: "Is it the strike plate?" Items: "The bolt turns easily with the door open." · "It binds only when the door is shut." · "It got worse after a week of rain." Results: 0 "Tick what you notice." 1 "One sign. Push the door toward the hinge and try the key." 2 "Two signs: most likely strike alignment, a short visit." 3 "All three: strike alignment. We fix that on the porch." Button "Price a sticky bolt".

## 7 Move-in
- Kicker: "Moving in? PCS orders?"
- h2: "Change every key before the movers unload."
- Lead: "Families arriving in {{biz.areas.1}} and new owners after closing: tick what came with the house."
- Chips: Front door · Back door · Side or patio door · Garage entry door · Garage keypad code · Mailbox key · Smart-lock codes · Spares from the last owner
- Result: 0 "Tick what came with the house." 1+ "{n} of {total} to change in one visit."
- Button "Price my move-in rekey"

## 8 Proof
- Kicker: "Door-backs" · h2: "What neighbours wrote on the back of the door."
- Summary: "{{proof.rating}} average across {{proof.reviewCount}} reviews" [Sample rating]
- Card: plate `{{.town}}`, `{{.stars}} of 5`, text, `{{.name}}` · `{{.service}}` [Sample review]

## 9 Area
- Kicker: "Do we come to your door?" · h2: "{{biz.city}} and the towns around the Narrows."
- ZIP label "Your ZIP code" · button "Check" · yes "Yes, we work in {zip}." · no "{zip} is outside our usual area. Call and we'll tell you honestly."
- Hours h3 "Phone hours" + after-hours line "Locked out after hours? Call: the emergency line still answers."

## 10 Contact
- Kicker "One form" · h2 "Tell us which door. We'll tell you the range."
- Steps: "Which job" · "The door" · "When" · "How to reach you"
- Microcopy: "We'll call you back with the range. Nothing is sent until you press send."
- Thank-you: "Thanks, {name}. In your version of this site, this request goes straight to your phone and inbox."
- Side: "Locked out right now? Don't fill in a form." + call

## Footer
Plate: "{{biz.short}}. One key ring." · "Ring the bell" knob = call · areas · email · "Licence # {{proof.license}} (sample)" · `{{demo.disclaimer}}` · credits
