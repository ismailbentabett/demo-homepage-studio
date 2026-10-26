# autotuneup-B: copy fixes, round 1

`before` = as rendered in dist/index.html. `after` = goes into src/ with tokens. Use curly apostrophes (’) everywhere listed.
After these edits the page has 0 em dashes in visible copy (it had 3).

## Must (copy side of critique Must 4 + the image slots)

### #hero estimator, row 1 digits
- before: 000000
- after: 045000
- why: Must 4. The default state has to be true for the number shown. At 0 mi nothing is "Due now".

### #hero estimator, new line above the three rows (insert before `.est-results`)
- before: (none)
- after: <p class="est-sample">Sample: 45,000 mi</p>
- why: Must 4 asks for the label. The rows then read as a worked example until the visitor types their own miles.

### #hero estimator, row 3 label
- before: Spark plugs · Brake fluid
- after: Spark plugs · Coolant
- why: the sample report says brake fluid gets checked at 60k, so the hero shouldn’t list it as “not yet at 100k”. Keeps the two sections consistent.

### #hero .hero-frame / #report frames / #check frame / .break-frame: alt text shown as page copy
- before: Placeholder for hero-B1 (also: Placeholder for place-reno-desert, Placeholder for process-brake-fluid)
- after: (no visible text. The fallback is a designed panel. Set `data-fallback=""` so CSS never prints it. Keep a real `alt` for whatever frame ships.)
- why: Must 1–3. Alt text must never print as copy. “Placeholder for …” must not appear in alt text either.

### .break__caption
- before: High desert light on the way to the shop
- after: Desert dust off this road ends up in your air filter.
- why: Must 2. If the band stays, the caption earns its place by tying the place to the job. If the band is deleted, delete this line too.

## Should

### #hero h1
- before: What's due at your odometer in Reno
- after: What’s due at your odometer in {{biz.city}}
- why: curly apostrophe (critique: Typography).

### #hero .lead
- before: Enter your miles. See what's due now, what's next, and what can wait — no upsell.
- after: Type your mileage. We show what’s due now and what can wait, with the reading behind each call.
- why: removes an em dash and a tricolon. It answers the upsell objection with proof (the reading), not with a claim. 18 words.

### #hero #odo-hint (proof line, split into two lines)
- before: Mon–Sat 7:30–6 · Sparks, Sun Valley, Lemmon Valley, Verdi and Carson City · 4.8 (Sample rating)
- after (line 1): {{hours|today}}
- after (line 2): {{biz.city}}, {{biz.areas|list}} · {{proof.rating}} from {{proof.reviewCount}} reviews ({{proof.label}})
- why: the old line was **factually wrong** (Saturday is 8–2, not 7:30–6). The hours token can’t drift from the facts. The critique also asks for two lines at 15px full ink.

### #services .btn-ghost (all 10 instances)
- before: Price it
- after: Get my plan
- why: one name for the primary action across the page (critique: Copy).

### #check .btn-primary
- before: Book a rotation
- after: Get my plan
- why: same action name.

### #contact h2
- before: Get your interval plan
- after: Your plan in four short steps
- why: the h2 tells you how much work the form is. The button carries the action name.

### #contact submit button
- before: Send my plan
- after: Get my plan
- why: same action name as the bar and the section buttons.

### #planner bay-time value (static text; nothing in app.js fills it)
- before: —
- after: Confirmed when we call you back
- why: removes the lone dash. We have no bay-time facts, so we promise the process and not a number.

### #planner .planner__time-label
- before: Estimated bay time
- after: Bay time
- why: “Estimated” suggests a number the page doesn’t have.

### #planner, new button above the Call button
- before: (none; the card’s only button is Call (775) 555-0189)
- after: <a class="btn btn-primary" href="#contact">Get my plan</a> (the Call button stays below it as secondary)
- why: the critique asks for a booking action where the visitor has just chosen services.

### #services kicker (delete)
- before: By the book, not by the bay
- after: (remove the element)
- why: too many eyebrows (critique: Distinctiveness/Typography). Report and reviews keep theirs.

### #oil kicker (delete)
- before: Right oil for your spec
- after: (remove the element)
- why: same.

### #check kicker (delete)
- before: Two-minute self-check
- after: (remove the element)
- why: same.

### #planner kicker (delete)
- before: Plan your morning
- after: (remove the element)
- why: same.

### #area kicker (delete)
- before: Near you, open now
- after: (remove the element)
- why: same. The open-now chip already says it.

### #area h2
- before: Serving Reno and Sparks, Sun Valley, Lemmon Valley, Verdi and Carson City
- after: Check your ZIP before you drive in
- why: a headline, not a list. The towns already appear in the hero proof line and the ZIP answers. Fits on one line.

### Logo (header)
- before: NI
- after: {{biz.initials}} <span class="logo__name">{{biz.short}}</span>
- why: the critique says to pair the initials with the short name. The builder adds the odometer-slot mark.

## Extra lines

### #oil table header (banned word)
- before: Best for
- after: Suits
- why: “best” is on the DEMO-RULES §4 banned list.

### #oil paragraph
- before: Your owner's manual sets the spec. We match it, note the viscosity on your receipt, and post the next change by mileage — not by calendar.
- after: Your owner’s manual sets the spec. We match it, write the viscosity on your receipt, and stick the next change on the windshield by mileage, not by date.
- why: removes an em dash. Uses the sticker from the oil-change blurb in facts, a real object.

### #contact .form-thankyou h3
- before: Plan received
- after: Demo only
- why: honesty rule. Nothing was received.

### #contact .form-thankyou p
- before: We'll call within one business day to confirm your bay time.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: required honest thank-you. “One business day” is also an invented promise.

### #contact .form-microcopy
- before: We'll call you back to set up a visit.
- after: {{biz.short}} calls back to set a bay time. Rather talk now? {{biz.phone}}.
- why: says who calls and gives the faster route.

### footer odometer row label
- before: We'll text you when your odometer hits it.
- after: Written on a sticker at every oil change.
- why: texting reminders aren’t a fact. The sticker comes from the services.0 blurb.

### Mobile menu last link
- before: Book now
- after: Get my plan
- why: same action name in the menu.

### #services h2
- before: Three intervals, one honest list
- after: 30k, 60k, 100k: what the manual calls for
- why: “honest list” asks to be trusted. Naming the source (the manual) is the thesis, and the mileage numbers carry the signature into the heading.
