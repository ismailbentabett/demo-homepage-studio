# demolition-B, copy round 3

Source of each line: `src/index.html` unless noted. `before` is the text as rendered in `dist/index.html`.
The guarantee token `{{proof.guarantee}}` stays; the h2 above it changes so the two stop repeating.

### #scope h2 (should 1)
- before: Your written scope is the price.
- after: Nothing comes down that isn't on the sheet.
- why: the lead under it is `{{proof.guarantee}}`, which opens with the same 6 words. Keep the fact token, change the h2 so it adds the "only what's written" rule from the sheet.

### #scope .scope-promise (should 1, keep as is)
- before: Your written scope is the price; if we find more, we stop and show you before any extra work.
- after: {{proof.guarantee}}
- why: no change to the text; listed so the builder doesn't also cut it. With the new h2 it now reads as the price promise, said once.

### #scope kicker (should 7, delete)
- before: Before anything comes down
- after: (delete the whole `<p class="kicker mono">` element)
- why: an eyebrow with no ticket number; the h2 carries the meaning

### #services kicker (should 7, delete)
- before: The ticket book
- after: (delete the whole `<p class="kicker mono">` element)
- why: same

### #tools kicker (should 7, delete)
- before: Before you call
- after: (delete the whole `<p class="kicker mono">` element)
- why: same

### #reviews kicker (should 7, delete)
- before: Signed on the back
- after: (delete the whole `<p class="kicker mono">` element)
- why: same, and the line moves into the h2 below

### #process kicker (should 7, delete)
- before: Four tickets per job
- after: (delete the whole `<p class="kicker mono">` element)
- why: same

### #area kicker (should 7, delete)
- before: The route
- after: (delete the whole `<p class="kicker mono">` element)
- why: same. Kept: hero "No. 0401 …", story "Ticket 0412 …", contact "Ticket 0001 · yours".

### #reviews h2 (should 6)
- before: What Toledo homeowners wrote on the ticket
- after: Signed on the back by {{biz.city}} homeowners
- why: 7 words in a stronger order, fits ≤ 3 lines in the narrow column, and it takes over from the deleted eyebrow

### #reviews .back-sign, all 7 cards (should 2)
- before (dist HTML, e.g.): `<p class="back-sign"><cite>Craig W.</cite>, Perrysburg <span class="sample-tag">Sample review</span></p>`
- before (src template, line 281): `<p class="back-sign"><cite>{{.name}}</cite>, {{.town}} <span class="sample-tag">Sample review</span></p>`
- after (src template): `<p class="back-sign"><span class="who"><cite>{{.name}}</cite>, {{.town}}</span> <span class="sample-tag">Sample review</span></p>`
- why: `.back-sign` is `display:flex; gap: 6px 8px`, so the bare ", Perrysburg" text node becomes its own flex item and gets the 8px gap before the comma. Wrapping name + town in one span puts the comma back against the name. Renders "Craig W., Perrysburg".

### #reviews .back-head, all 7 cards (should 5)
- before (dist, e.g.): Back of ticket 0502 / Hot tub removal
- before (src template, line 278): `<p class="back-head mono"><span>Back of ticket 05{{#2}}</span><span>{{.service}}</span></p>`
- after (src template): `<p class="back-head mono"><span>Ticket 05{{#2}}</span><span>{{.service}}</span></p>`
- why: "Back of" repeated the old eyebrow and the new h2 already says it. Shorter label leaves room for the service name. Builder: also stack the two spans (number above, service below) so "Shed and garage removal" stays on one line at 320px.

### #tools house-year output, stamp words (should 8, app.js MSG + stub)
- before (src/app.js MSG keys' first strings): Test first. / Test first. / Usually clear to start. / We will check.
- after: Test first / Test first / Clear to start / We check first
- why: these become the red stamp on the year stub the builder renders (matching the sizer ticket). Stamps don't take full stops. "We check first" replaces "We will check." so the stamp says what happens.

### #tools house-year output, default line (should 8)
- before: Houses built before 1978 can have lead paint, and some older floor tile, mastic and pipe wrap can contain asbestos. We test the materials we'll disturb before we start. If a test comes back positive, that part waits for a crew that does that work.
- after: Pick the year your house was built. Before 1978, we test the paint, tile, mastic and pipe wrap we'll disturb, and the result goes on your written scope.
- why: the default state now tells the visitor what to do and keeps the honest test-first rule. Drops the repeat of "waits for a crew" (the era answers already say it), so the stub fits.

### footer photo credits (should 9, note to builder)
- before: Photo by Demo Homepage Studio on Pexels (×2)
- after: no copy change. Credits come from the media macro. If the prints stay fully drawn, the builder either shows the photo through the print or drops the credits for photos the visitor never sees. Copy can't fix this.
