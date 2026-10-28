# tattoo-C · copy fixes, round 1

The primary action is called **Hold** everywhere: "Hold this sheet" on the rail, "Hold a ..." on the other
buttons, "Hold my spot" on the form. "Call" is only for the phone. "Text us a photo" is only for SMS.
Section names become short ribbon labels (builder: swap `<p class="kicker">` for
`<span class="ribbon ribbon--sm ...">` with the same ribbon ends as the rest of the page). #contact loses its label
because its h2 already starts with the action.

### #hero h1
- before: Flash off the wall, a block from the water. (source: `a&nbsp;block from the <em>water.</em>`)
- after: {{biz.city}} flash, off the wall <em>today.</em>
- why: "a block from the water" is not in facts.json. This version puts the city in the h1 (critic's first-screen note) and keeps the same-day promise from services.0.blurb. 7 words.

### #hero ribbon
- before: Tattoo & Piercing · Long Beach
- after: {{biz.tradeLabel}} · Walk-ins Tue–Sun
- why: the city is in the h1 now. The open days come from the hours (Monday is null).

### #flash kicker → ribbon
- before: This week's wall
- after: The wall
- why: short ribbon label, not a tracked eyebrow

### #flash lead
- before: Hold one and walk in when it suits you.
- after: Hold one, then walk in when it suits you.
- why: the primary verb comes first, and the order of the two steps is clear

### #clean kicker → ribbon
- before: The clean bench
- after: Clean bench
- why: ribbon label, 2 words

### #svc kicker → ribbon
- before: The whole wall
- after: Every service
- why: "wall" already names the flash rail. Two sections should not share one name.

### #tide kicker → ribbon
- before: Healing, written for the beach
- after: Healing
- why: ribbon label. The h2 already carries the beach angle.

### #tide lead
- before: Living near the water changes your aftercare. Here's the plain version, day by day.
- after: Sand, salt water and sun each change your aftercare. Here's the plain version.
- why: drops the location claim ("living near the water") and the "day by day" that repeats the h2. Uses the buyer's real nouns.

### #tide button
- before: Book a touch-up check
- after: Hold a touch-up check
- why: one name for the primary action

### #cover kicker → ribbon
- before: Cover-up check
- after: Cover-ups
- why: ribbon label. "check" is already the tool's own name.

### #cover secondary button
- before: Ask in the form
- after: Hold a cover-up check
- why: says what happens, and uses the primary verb

### #reviews kicker → ribbon
- before: Notes under the sheets
- after: Notes
- why: ribbon label. The Sample tags stay where they are.

### #prices kicker → ribbon
- before: The price board
- after: Price board
- why: ribbon label

### #visit kicker → ribbon
- before: Walk in
- after: Walk in
- why: no text change. Convert it to a ribbon so all section names look the same.

### #visit ZIP button
- before: Check
- after: Check my ZIP
- why: the button says what happens

### #visit ZIP yes (data-zip-yes)
- before: {zip} is close. Walk in, or hold a sheet first.
- after: {zip} is close. Walk in, or hold a sheet first so it's yours.
- why: keeps the Hold verb and gives the reason to use it

### #contact kicker
- before: Hold a sheet
- after: (remove the element)
- why: it repeated the h2 word for word. Cuts one eyebrow (critic should #6).

### #contact h2
- before: Hold a sheet or ask about a cover-up.
- after: Hold a sheet. We text back with a time.
- why: one action, plus what happens next. Cover-ups are already a choice in step 1 of the form.

### #contact lead
- before: Tell us what you want. We'll text you back to set a time.
- after: Pick the service, the sheet number or your idea, and a day that suits you.
- why: the old lead repeated the new h2 and the form's micro line. This one tells people what the 4 steps ask for.

### #contact form submit
- before: Send my request
- after: Hold my spot
- why: the final button uses the primary action's name

### #contact form thank-you (data-thanks)
- before: Thanks, {name}. In your version of this site, this request goes straight to the shop's phone and inbox. Nothing was sent from this demo.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the honest standard line from the copy rules

## Not a copy line (for the builder)
- #prices "most need 2-3 sittings" comes from `{{proof.prices.2.note}}` in facts.json. Copy cannot change a fact token. Render ranges with an en dash at build time (e.g. a `|dash` filter or a replace in the price-board loop), or bring it to the orchestrator.
