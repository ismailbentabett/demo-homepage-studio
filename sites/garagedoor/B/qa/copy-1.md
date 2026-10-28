# garagedoor-B · copy fixes, round 1

Tokens in `after`, resolved text in `before`. Prices are ranges joined with an en dash (not an em dash). Keep the `.sample-tag` "Sample" chip next to every price row (add one to each service plate that now shows a price).

## Hero

### #hero h1
- before: What broke? Two taps.
- after: `<span class="h1__a">Garage door repair, {{biz.city}}.</span> What broke? <span class="h1__b">Two taps.</span>`
- why: trade + town now sit in the h1 itself (5-second test, firstScreen −0.5). 7 words. Set `.h1__a` as the smaller stamped first line above the existing two.

### #hero .kicker
- before: Garage Door Repair · Cleveland, OH
- after: Springs · openers · cables · bottom sections
- why: the h1 now carries trade + city; the kicker stops repeating it and lists the real parts instead.

### #hero secondary button
- before: Get a written quote
- after: Price it
- why: one name for every quote action (critique should #2).

### #hero plate, Sample range default fill
- before: measured at your door
- after: follows the part
- why: cuts the repeated phrase; tells the reader the price appears once the part is known.

### #hero plate, send-reading button
- before: Send this reading to us
- after: Price this reading
- why: same verb as every other quote action.

## #services, the READING row on each plate (11 rows share the same `before`; find each one by the plate's `data-service` / S-number)

### S-01 Torsion springs, reading
- before: measured at your door
- after: {{proof.prices.0.from}}–{{proof.prices.0.to}} a pair
- why: facts has the price. Add the Sample tag.

### S-01 Torsion springs, new rows under the blurb (fills the empty zinc, critique should #3)
- before: (none, insert above the READING row)
- after: three `plate__row`s: `Wire size` … `measured at your door` / `Length` … `measured at your door` / `Inside diameter` … `measured at your door`. Render as one row if space is short: `Wire · length · ID` … `measured at your door`.
- why: the spring readout belongs in this plate. This is the only place left using the phrase (1 use, or 2 if the builder needs a second row).

### S-02 Stretch springs, reading
- before: measured at your door
- after: Conversion {{proof.prices.1.from}}–{{proof.prices.1.to}}
- why: facts prices the stretch-to-torsion conversion, so the label says that. Add the Sample tag.

### S-03 Openers, reading
- before: measured at your door
- after: {{proof.prices.3.from}}–{{proof.prices.3.to}} installed
- why: price from facts. Add the Sample tag.

### S-04 Bottom section, reading
- before: measured at your door
- after: {{proof.prices.2.from}}–{{proof.prices.2.to}}
- why: price from facts. Add the Sample tag.

### S-05 Cables & rollers, reading
- before: measured at your door
- after: cable fray, roller play
- why: names what actually gets checked.

### S-06 Insulated doors, reading
- before: measured at your door
- after: {{proof.prices.4.from}}–{{proof.prices.4.to}}, 16x7
- why: price from facts. Add the Sample tag.

### S-07 Weather seal, reading
- before: measured at your door
- after: seal length, gap at the slab
- why: names what actually gets checked.

### S-08 Sensors, reading
- before: measured at your door
- after: reversing force, eye alignment
- why: names what actually gets checked.

### S-09 Remotes, reading
- before: measured at your door
- after: every code in memory
- why: names the job (pair, erase lost remotes).

### S-10 Maintenance, reading
- before: measured at your door
- after: {{proof.prices.5.from}}–{{proof.prices.5.to}}
- why: price from facts. Add the Sample tag.

### S-11 Won't open, reading
- before: measured at your door
- after: call before you lift it
- why: the right instruction for a stuck door, and it matches the hero's safety line.

## Quote buttons (one name: "Price it"; "Call" stays for the phone)

### #services, the 11 `.svc__go` links
- before: Price it
- after: Price it (no change, already the house verb)
- why: listed so the builder keeps them as they are while doing the 48px tap-target mustFix.

### #parts button
- before: Get a written quote
- after: Price it
- why: one name.

### #ror button
- before: Get both numbers in writing
- after: Price both
- why: same verb; "both" is the repair number and the replace number this tool just showed.

### #salt button
- before: Price the bottom section
- after: Price it
- why: one name; the section heading already says bottom section.

### #warm (insulation) button
- before: Ask for door options
- after: Price it
- why: one name.

### Mobile bar, third button
- before: Quote
- after: Price it
- why: the bar's action now uses the page's quote verb. Leave the "Quote" links in the header and footer nav as they are: they name a section, not an action.

## #contact

### form data-thanks
- before: Thanks, {name}. In your version this goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: an honest thank-you (DEMO-RULES, the copy-chief rule).

### form micro line
- before: We’ll call you back to set up a visit. Nothing is sent in this sample.
- after: On the real site, {{biz.short}} calls you back with a number. Nothing is sent in this demo.
- why: matches the thank-you and repeats the promise from the contact lead.
