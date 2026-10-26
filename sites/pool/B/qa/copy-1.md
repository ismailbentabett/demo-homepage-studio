# pool-B copy, round 1 (fast)

One name for the form action: **Get a written price**. It fits every service row (pumps, salt cells, acid wash), it matches the form's promise ("We call back with a price"), and it differs from pool-A ("Price my pool") and pool-C ("Get my number" / "Get a number").

## Critique items (copy should 2, should 3, should 4)

### #menu link to #contact
- before: Get my number
- after: Get a written price
- why: should 2: one name for the primary action; also clears the sibling overlap with pool-C

### #hero .btn--primary
- before: Get my number
- after: Get a written price
- why: should 2: same action, same name everywhere; says what you get back

### .mobilebar .btn--secondary
- before: Get my number
- after: Get a written price
- why: should 2: same as the hero

### #check (tick tool) .btn--light
- before: Book a water test
- after: Get a written price
- why: should 2: it goes to the same form, so it gets the same name

### #services rows .btn--text (all 8)
- before: Price it
- after: Get a written price
- why: should 2: the rows go to #contact with data-service prefill, not to the price table, so they use the form's name

### #contact p.kicker
- before: Get my number
- after: (delete the element)
- why: should 4: eyebrow over an h2, and a third name for the action

### #services p.kicker
- before: Services
- after: (delete the element)
- why: should 4: the h2 below carries the section

### #story p.kicker
- before: One visit, written down
- after: (delete the element)
- why: should 4: the h2 already says it ("You see the reading before you see the bill.")

### #area p.kicker
- before: Service area
- after: (delete the element)
- why: should 4: "Do you come to my street?" stands alone

### #faq p.kicker
- before: Questions
- after: (delete the element)
- why: should 4: the h2 is the question. Keep the Reviews and Prices kickers because they carry the Sample tag and a label.

### footer headline
- before: Seven readings. Every visit. Written down.
- after: If a reading is missing, the visit is free.
- why: should 3: removes the tricolon. Restates the guarantee from facts.proof.guarantee in a short form and closes on a promise, not a slogan

## Lines that raise the score

### #hero .hero__lead
- before: A weekly clean and a seven-point water test. Each number lands on a scale next to its ideal range, so you see what we found and what we added.
- after: Weekly cleaning plus a seven-point water test. Each reading sits next to its ideal range, so you can see what we found and what we added.
- why: 29 words down to 26 (the cap is 28). It answers "am I paying for chemicals I don't need" in the same sentence

### #services h2
- before: Measure first. Then clean, fix or replace.
- after: Measure first. Then fix only what reads wrong.
- why: removes the three-verb list. Makes the promise against upselling, which is the buyer's main objection (salt cells sold twice)

### #services .sec-head__lead
- before: Salt cells, pumps and filters get the same rule as the water: we read the number, write it down, and only then price the work.
- after: Salt cells, pumps and filters follow the same rule as the water. The number goes on the sheet before any price does.
- why: removes the second tricolon in the same block. Shorter, and it keeps the reading-first idea

### #prices gallons lead
- before: Every dose depends on it. Measure, type, and we check it on the first visit.
- after: Every chemical dose depends on this number. The tech checks yours on the first visit.
- why: "Measure, type, and we check" is a clumsy three-beat line. The new line is plain and backed by Ben H.'s review

### #area zip button
- before: Check
- after: Check my street
- why: says what happens, echoes the h2 "Do you come to my street?", and differs from pool-A's "Check my ZIP"

### #contact h2
- before: Tell us about your pool. We call back with a price.
- after: Tell us about your pool. We call back with a written price.
- why: matches the new button name, so the click and the promise line up

## Builder notes (not copy, from the same critique)
- "Placeholder for …" alt text comes from the media manifest. It gets fixed with the Photo mustFix (real frames + `[[img]]`). Don't hand-write alt for frames that don't exist.
- Hours "pm" orphan (should 1): `white-space: nowrap` on each range. Strings unchanged.
- Buttons in mono (should 6): set `.btn` and the form buttons in Outfit 600. The new label "Get a written price" fits the mobile-bar half-width at 390 in Outfit .8125rem.
