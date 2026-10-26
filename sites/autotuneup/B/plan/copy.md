# Copy Deck — autotuneup-B

## Hero (t-light)
- Kicker: Car maintenance by mileage
- H1: What's due at your odometer in {{biz.city}}
- Lead: Enter your miles. See what's due now, what's next, and what can wait — no upsell.
- Input label: Current odometer
- Input placeholder: e.g. 45000
- Button: Check my interval
- Result labels: Due Now · Next 5k · Not Yet
- Proof line: Mon–Sat 7:30–6 · {{biz.areas|list}} · {{proof.rating}} ({{proof.label}} rating)

## Service Intervals (t-mid)
- Kicker: By the book, not by the bay
- H2: Three intervals, one honest list
- Band headers: 30,000 mi · 60,000 mi · 100,000 mi
- Tab labels: 30k · 60k · 100k
- CTA per band: [[quote Oil change btn-ghost | Price it]]

## Break (full-bleed)
- Caption: High desert light on the way to the shop

## What We Show You (t-deep)
- Kicker: Readings, not guesses
- H2: A sample report you can hold
- Card 1 title: Air filter
- Card 1 reading: Dust visible
- Card 1 status: Replace
- Card 2 title: Front tread
- Card 2 reading: 4/32"
- Card 2 status: Rotate & watch
- Card 3 title: Brake fluid
- Card 3 reading: Moisture OK
- Card 3 status: Check again at 60k
- Sample tag: [[sample report]]

## Oil Type Explainer (t-accent)
- Kicker: Right oil for your spec
- H2: Conventional, blend, or full synthetic
- Body: Your owner's manual sets the spec. We match it, note the viscosity on your receipt, and post the next change by mileage — not by calendar.
- Table headers: Type · Change interval · Best for
- Row 1: Conventional · 3,000–5,000 mi · Older engines, short trips
- Row 2: Synthetic blend · 5,000–7,500 mi · Daily drivers, mixed use
- Row 3: Full synthetic · 7,500–10,000 mi · Turbos, towing, extreme temps
- Note: Ranges vary by make and driving. Your spec wins.

## Tread & Wiper Check (t-light)
- Kicker: Two-minute self-check
- H2: Tread depth and wiper condition
- Tread labels: New 10/32" · Watch 4/32" · Replace 2/32"
- Wiper labels: New blade · Cracked edge
- Body: Run a quarter across three grooves. If the tread meets Washington's head, you're above 4/32. Lift each blade; if rubber is cracked or streaks after one pass, swap them before the next storm.
- CTA: [[quote Tire rotation and tread check btn-primary | Book a rotation]]

## Wait or Drop Planner (t-mid)
- Kicker: Plan your morning
- H2: Wait for it or drop it off
- Select label: Choose services
- Time result label: Estimated bay time
- Option A: Wait in the lounge
- Option B: Drop at 7:30, pick up by noon
- CTA: [[call btn-primary]]

## Proof & Reviews (t-light)
- Kicker: From neighbors, with mileage
- H2: What drivers in {{biz.city}} are saying
- Sample tag: [[sample reviews]]
- Review 1: {{proof.reviews.0.text}} — {{proof.reviews.0.name}}, {{proof.reviews.0.town}} · {{proof.reviews.0.service}}
- Review 2: {{proof.reviews.1.text}} — {{proof.reviews.1.name}}, {{proof.reviews.1.town}} · {{proof.reviews.1.service}}
- Review 3: {{proof.reviews.2.text}} — {{proof.reviews.2.name}}, {{proof.reviews.2.town}} · {{proof.reviews.2.service}}

## ZIP Checker + Hours (t-deep)
- Kicker: Near you, open now
- H2: Serving {{biz.city}} and {{biz.areas|list}}
- ZIP label: Enter your ZIP
- ZIP placeholder: e.g. 89501
- ZIP yes: Yes — we service your ZIP. Book below.
- ZIP no: We don't cover that ZIP yet. Call to confirm.
- Hours heading: Shop hours
- Open-now: {{hours|today}}
- CTA: [[call btn-primary]]

## Contact Form + Footer (t-light)
- Form heading: Get your interval plan
- Step 1 label: Mileage
- Step 2 label: Services
- Step 3 label: Timing
- Step 4 label: Contact
- Mileage field label: Current odometer
- Services field label: What's due
- Timing field label: Wait or drop
- Name field label: Name
- Phone field label: Phone
- Email field label: Email (optional)
- Submit: Send my plan
- Microcopy: We'll call you back to set up a visit.
- Thank-you heading: Plan received
- Thank-you body: We'll call within one business day to confirm your bay time.
- Footer reminder label: NEXT INTERVAL
- Footer reminder body: We'll text you when your odometer hits it.
- Disclaimer: {{demo.disclaimer}}
- Credits: [[credits]]