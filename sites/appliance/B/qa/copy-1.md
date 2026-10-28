# appliance-B · copy fixes, round 1

The primary action now has one name everywhere: **Book a visit** (calc bar, contact kicker, footer, form submit "Book my visit", mobile bar "Book"). Call stays the first button.

### #hero h1
- before: Fix it or buy new? We’ll tell you which.
- after: Fix it or buy new? {{biz.city}} appliance repair says which.
- why: Should 1. The h1 now carries the trade and the town (9 words). The line break still falls after "Fix it" for the seam split.

### #hero .kicker
- before: Appliance Repair · Allentown, PA
- after: {{biz.name}}
- why: the trade and city moved into the h1, so the eyebrow would repeat them. This also takes one tracked label out of the first screen (type note).

### #hero .lead
- before: Three taps on the check and you have the answer our tech gives at your door. If it’s a 12-year-old fridge with a tired compressor, we say so on the phone and save you the visit.
- after: Three taps give you the answer our tech gives at the door. A 12-year-old fridge with a tired compressor, we tell you on the phone.
- why: the old lead was 37 words. This one is 25 (the cap is 28) and keeps the compressor detail that answers "will they upsell me".

### #calc .calc__book span
- before: Book a visit. We’ll tell you the same in person.
- after: Book a visit
- why: one name for the primary action. Shorter label on the copper bar, so it competes less with the call button (firstScreen note).

### #contact .kicker
- before: Book the visit
- after: Book a visit
- why: same action, same name.

### #contact h2
- before: Bring us the model number. We bring the likely part.
- after: Tell us the machine. We’ll call back with a time and a price band.
- why: Should 6. The old line repeated the #tag headline almost word for word and had a tense slip. The new one says what this form gets you.

### #contact form submit [data-submit]
- before: Send my request
- after: Book my visit
- why: the submit button carries the primary action's name.

### #contact form [data-thanks] attribute
- before: Thanks, {name}. In your version this goes straight to the shop’s phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the honest demo thank-you required by the rules. `{name}` stays as the kit placeholder.

### #services row links (9× "Price it")
Should 7. Each row link now says where it goes, and the wording varies. Several rows point at the real price band, so the link stops promising a price it never shows. **Builder: change the href as noted, and remove the CSS arrow (`→`/`::after`) from `.btn-text` in `.svc__list`.** Each "before" is the text `Price it` inside `a[data-service="…"]`.

- `a[data-service="Fridge & freezer"]` · before: Price it · after: See the not-cooling band · href `#prices`
- `a[data-service="Washer"]` · before: Price it · after: Book a washer visit · href `#contact` (keep)
- `a[data-service="Dryer"]` · before: Price it · after: See the no-heat band · href `#prices`
- `a[data-service="Dishwasher"]` · before: Price it · after: Find the model tag · href `#tag`
- `a[data-service="Range & oven"]` · before: Price it · after: Book a range visit · href `#contact` (keep)
- `a[data-service="Microwave"]` · before: Price it · after: See the mounting band · href `#prices`
- `a[data-service="Disposal"]` · before: Price it · after: Book a disposal visit · href `#contact` (keep)
- `a[data-service="Installation"]` · before: Price it · after: Book a hookup · href `#contact` (keep)
- `a[data-service="Second opinion"]` · before: Price it · after: Run the check first · href `#top`

### #lifespan .kicker
- before: Typical lifespans
- after: How long they last
- why: Should 8. Plainer words, set in sentence case (Jakarta 600 per the critique, not mono caps).

### #symptoms .kicker
- before: Symptom finder
- after: Before you call
- why: Should 8. It now says what the section is for instead of naming the widget. Sentence case.

### #services .kicker
- before: What we open up
- after: What we open up
- why: no wording change. Builder: set it in sentence case like the other eyebrows (Should 8).
