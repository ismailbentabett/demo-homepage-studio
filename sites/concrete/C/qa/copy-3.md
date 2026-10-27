# copy-3: concrete-C (round 3, fast)

The quote action now has one name everywhere: **"Price my slab"**. The hero, the 8 service rows, the menu, the contact kicker, the footer, the mobile bar and the final form submit all use it. "Call {{biz.phone}}" stays the primary. "Next" becomes "Next step" (it moves you through the form; it does not start a quote). "Print this sheet" and "Check my ZIP" are separate actions with their own names.

Each service row reads the same visible text, so give each one an sr-only service name to keep link names distinct (kit/base.css has `.sr-only`). Label-in-name still holds because the visible text comes first.

---

### #hero .hero__ctas secondary button
- before: Price my driveway
- after: Price my slab
- why: copy should-2: one name for the quote action, used everywhere. "Slab" covers drives, patios, walks and garage floors.

### #services .svc__cta (all 8 rows, keep each row's data-service)
- before: `<a class="btn btn-text svc__cta" href="#contact" data-service="Driveways">Price it</a>`
- after: `<a class="btn btn-text svc__cta" href="#contact" data-service="{{services.0.short}}">Price my slab<span class="sr-only">: {{services.0.short}}</span></a>`
- why: copy should-2. Apply the same pattern to rows 1–7 with `{{services.1.short}}` … `{{services.7.short}}` (Slab lifting, Patios, Walks &amp; steps, Winter repair, Stamped, Garage floors, Sealing). The sr-only suffix keeps 8 identical visible links distinct for screen readers.

### #site-menu .menu-overlay__links last item
- before: `<li><a href="#contact">Get a number</a></li>`
- after: `<li><a href="#contact">Price my slab</a></li>`
- why: copy should-2.

### #contact .kicker (text after the EL. 7,600 FT marker)
- before: Get a number
- after: Price my slab
- why: copy should-2. The kicker repeats the button that sent you here.

### #contact .lead-form__nav next button
- before: `<button class="btn btn-primary" type="button" data-next>Next</button>`
- after: `<button class="btn btn-primary" type="button" data-next>Next step</button>`
- why: the brief named "Next" as a fourth name. "Next step" reads as moving through the 4 steps, not as another quote action.

### #contact .lead-form__nav submit button
- before: `<button class="btn btn-primary" type="submit" data-submit>Send</button>`
- after: `<button class="btn btn-primary" type="submit" data-submit>Price my slab</button>`
- why: copy should-2. The button that ends the form does what every other button promised. "Send" was a fifth name.

### footer .footer__links last link
- before: `<a href="#contact">Get a number</a>`
- after: `<a href="#contact">Price my slab</a>`
- why: copy should-2.

### .mobilebar secondary button
- before: `<a class="btn btn-secondary btn-block" href="#contact" data-service="Driveways">Get a number</a>`
- after: `<a class="btn btn-secondary btn-block" href="#contact" data-service="{{services.0.short}}">Price my slab</a>`
- why: copy should-2 (390-first.jpg mobile bar).

### #hero zip button
- before: `<button class="btn btn-primary zip__btn" type="submit">Check</button>`
- after: `<button class="btn btn-primary zip__btn" type="submit">Check my ZIP</button>`
- why: a button should say what it does. A bare "Check" is unclear when you only see the bar.

---

### #reviews h2
- before: Neighbours on clay, slush and steep lots
- after: Neighbors on clay, slush and steep lots
- why: copy should-3: US spelling, to match "neighbor's" and "colored".

### footer .footer__line (licence)
- before: Licence # SAMPLE-CO-PPRBD-0133
- after: License # {{proof.license}}
- why: same UK/US slip as "Neighbours". Colorado spells it "License". Keep the Sample tag next to it.

### #hero .kicker (text after the EL. 6,035 FT marker)
- before: Sheet 01 · Driveways, patios, slab lifting
- after: {{services.0.short}}, patios, slab lifting
- why: copy should-4: drop the "Sheet 01 ·" prefix so the EL. pill is the only marker above the h1. The text resolves to "Driveways, patios, slab lifting". If the builder prefers literal words over a token here, "Driveways, patios, slab lifting" is fine because it is not a fact.

### #break .break__cap (BM-04)
- before: BM-04 · Broom-finished driveway at a split-level home. Broom texture grips on icy mornings.
- after: BM-04 · The ridge above {{biz.city}}. Every driveway we pour below it gets a broom finish for icy mornings.
- why: copy should-5: the old caption describes a photo that isn't there. The new one describes the drawn ridge and keeps the real noun, the broom finish. (The colour of this caption is the a11y mustFix-3 and goes to the builder.)

### #winter-story lens figcaption (BM-02)
- before: BM-02 · The top quarter inch of a slab, magnified. Behind it: surface scaling after a winter of road salt.
- after: BM-02 · The top quarter inch of a slab, magnified: ice lifts the paste into flakes after a winter of road salt.
- why: "Behind it:" pointed at the placeholder photo that mustFix-1 removes. The caption now describes the drawn lens.

### #base-spec figcaption (BM-03)
- before: BM-03 · #4 bar on chairs, drawn over compacted road base before the pour.
- after: BM-03 · #4 bar on chairs at 18 in. on center, over compacted road base, before the pour.
- why: it matches the "18 IN." dimension in the drawing and adds one more real detail. The text is a process statement, not a claim.

### figure labels replacing "Placeholder for …" (mustFix-1; put on the figure as aria-label/alt if the img is dropped)
- before: alt="Placeholder for scaling"
- after: alt="Magnified slab surface: ice lifting the top layer into flakes"
- before: alt="Placeholder for rebar"
- after: alt="Drawing of #4 rebar on chairs in an 18-inch grid over compacted base"
- before: alt="Placeholder for finished-driveway"
- after: alt="Drawn ridge line of the mountains above the town"
- why: a11y note from the critique. Alt text describes what is drawn and never says "Placeholder".

### #contact form data-thanks
- before: Thanks, {name}. In your version this goes straight to your phone and inbox. For this demo, nothing was sent.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}, and they call you back to set up a visit.
- why: the honest thank-you from the copy rules. The old line talked to the contractor ("your version") instead of the homeowner who filled in the form.
