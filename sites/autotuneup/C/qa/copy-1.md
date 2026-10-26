# autotuneup-C · copy round 1 (fast)

`before` = text as rendered in dist/index.html. `after` uses tokens. Where a line comes from a loop in
src/index.html, the src line is given too.

## Must

### #gallery h2 (mustFix 4)
- before: Hands, tools, no logos
- after: What happens while you wait
- why: media-curation instruction leaked as a heading; now ties the frames (oil pour, tire gauge, keys) to the visit and to "wait with coffee" in #contact

### #gallery kicker
- before: Shop floor
- after: In the bay
- why: pairs with the new h2; "shop floor" said nothing to a driver

### .sample-tag (price rows read "SAMPLE · SAMPLE", Should + copy deduction)
- before (style.css): `content: "Sample · ";`
- after (style.css): `content: none;`
- why: the span already says "Sample"; the ::before doubled it on all 5 rows. Keep one `<span class="sample-tag">Sample</span>` per row.

## Should

### #hero h1
- before: Tuned for high country.
- after: {{biz.city}} tune-ups, set for seven thousand feet.
- why: no city in the h1 and 4 lines at 1440; now trade + town + the altitude promise in 7 words (5-second test)

### #hero kicker
- before: Tune-Ups &amp; Maintenance · Santa Fe, NM
- after: {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}} and up the hill
- why: kicker now leads into the altitude idea instead of only restating the address

### Story CTAs (4×, "Price it" vs "Book a time")
- before: `<a class="btn btn-primary" href="#contact" data-service="Filters">Price it</a>`
- after: `<a class="btn btn-primary" href="#contact" data-service="Filters">Book a time</a>`
- same for data-service="Rubber parts" and data-service="Battery"
- why: one name for the primary action across header, hero, story bands and mobile bar

### #services card buttons (8×, src line 87 loop)
- before: Price it
- after: Book this
- why: they go to the form with the service pre-filled; "Price it" promised a price the form doesn't give

### Review cites (4×, em dashes; src line 225)
- before: — Lucia M., Tire rotation and pressure   (and Daniel C., Ana V., Peter G.)
- after (src): `{{.name}} · {{.town}}`
- why: drops 4 visible em dashes (the other 10 are HTML comments); the section lead promises "every tag shows where the reviewer drives", so the town goes on the tag

### Review quotes (src line 224)
- before (src): `<blockquote>"{{.text}}"</blockquote>`
- after (src): `<blockquote>“{{.text}}”</blockquote>`
- why: straight quotes flagged in type

### Apostrophes in headings and nav
- before: Check what's due before you book
- after: Check what’s due before you book
- before: What's due at my mileage?
- after: What’s due at my mileage?
- before: What's due   (header link, menu link, footer link: 3×)
- after: What’s due
- why: curly apostrophes in display type

### #proof h2 (repeats the hero's altitude point)
- before: Real cars, real altitude
- after: Reviews from {{biz.areas.0}} to {{biz.areas.3}}
- why: slogan parallel that restates the hero; now places a driver knows

### Story 3 h2 + paragraph (repeats hero lead "battery works harder on cold mornings")
- before: Cold mornings find weak batteries first
- after: Test the battery before the first frost
- before: Seven thousand feet and a November dawn is the worst time to learn your battery is done. A five-minute load test tells you before the first frost does.
- after: A five-minute load test reads the battery against its rating. If it’s weak, you hear it from us in the bay, not from a dead click in a cold parking lot.
- why: same point as the hero lead; now the procedure, not the weather

## Lines that raise the score

### Thank-you (src line 325, not honest, invents a call-back promise)
- before: We'll call within one business day to set up your slot. If it's urgent, call (505) 555-0190.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}, and you’d hear back to set the slot. In a hurry? Call [[tel]].
- before: Request received
- after: Got it (demo)

### Form micro line (src line 321)
- before: We'll call you back to confirm.
- after: {{biz.short}} calls back to confirm the slot.

### #contact lead
- before: We'll call you back to set up a visit. Drop-off at 7:30, ready by noon, or wait with coffee down the street.
- after: Tell us the car and the roads it drives. Drop it off when the bay opens, or wait with a coffee down the street.
- why: "ready by noon" is a turnaround promise not in facts; 7:30 was a typed fact

### Gallery / photo fallback captions (alt + data-fallback, visible while photos are missing)
- before: Battery load tester clamped to terminals, reading visible but no brand logo.
- after: Load tester clamped to the battery terminals, needle on the reading.
- before: Tire pressure gauge held to valve stem, dial face generic.
- after: Pressure gauge on the valve stem after a cold night.
- before: Hand holding car keys, fob generic, no logo visible.
- after: Keys handed back across the counter.
- before: Oil stream pouring into funnel, amber liquid against dark bay background.
- after: Fresh oil running into the funnel in a dark bay.
- why: "no logo / generic" are curation notes, not captions; captions describe the frame (DEMO-RULES §5)

### Footer altitude rail
- before: Sea level is a long way down. Next interval at 7,199 ft.
- after: {{biz.city}} Plaza
- why: slogan ending that means nothing; the rail labels are places everywhere else

### Season tool heading + intro
- before: Season check list
- after: Season checklist
- before: Tick what sounds familiar. We'll pre-fill your booking.
- after: Tick what you’ve noticed. The booking form fills in from here.
