# appliance-C · copy fixes, round 1

Covers critique Should 3, 4, 5, 7 (copy parts) and the copy deductions (double period, h2s over 2 lines, h1 without trade + town, middle-dot eyebrow). Layout items (hero dead band, review tape overlap, orphan note, vignettes) are builder work, not here.
All `after` lines use typographic apostrophes (’). Where a string lives in `src/app.js` or a `data-*` attribute, edit it there.

## Should 3: double period

### #area .lead
- before: Ask for Lars E.. 9 years on these roads
- after: `<span class="tnum">{{proof.years}}</span> years on these roads <span class="sample-tag">Sample years</span>. Ask for {{biz.owner}}`
- why: the owner token already ends in "E.", so the literal period doubled it. Now the token's period closes the sentence. Keep the Sample tag next to the years.

## First screen: trade + town in the h1

### #top h1
- before: By November, most of the freezer is spoken for.
- after: {{biz.city}} appliance repair, before the beef thaws.
- why: 8 words with trade, town and outcome, so it passes the 5-second test. The November line moves up into the kicker.

### #top .kicker
- before: Appliance Repair · Sioux Falls, SD
- after: By November, most of the freezer is spoken for.
- why: the h1 now carries the trade and town, so this drops the middle-dot meta string and keeps the voice line as the first entry on the lid. Set it as plain text, without the two spans or the dot.

### #top .hero__lead
- before: Chest freezers, garage fridges, washers and dryers, fixed around Sioux Falls by people who know what they're holding.
- after: Chest freezers, garage fridges, washers and dryers, fixed around {{biz.city}} by people who know what they’re holding.
- why: curly apostrophe (Should 4), and the city goes through a token.

## Should 5: headlines kept to 2 lines at 1440

### #garage h2
- before: The garage got cold, so the fridge thinks it's done. The freezer side isn't.
- after: Cold garage, soft freezer.
- why: this was 5 lines and the heaviest block on the page. The explanation moves into the lead below.

### #garage .lead
- before: On many single-thermostat fridges the thermostat sits in the fresh-food side. A cold garage keeps that side happy, the compressor rarely runs, and the freezer warms.
- after: The fridge thinks it’s done. On many models the thermostat sits in the fresh-food side, so the compressor rests and the freezer warms.
- why: 23 words. It keeps the h2's old punchline and the "on many models" hedge.

### #services h2
- before: Everything on the list, from the beef in the basement to the oven upstairs.
- after: From the basement freezer to the oven upstairs.
- why: was 3 lines, now 2. The same span of rooms, with fewer words.

### #year h2
- before: A Sioux Falls year, by what the machines are carrying.
- after: A {{biz.city}} year, month by month.
- why: was 3 lines, now 2. The months on the tape show what the machines carry, so the h2 doesn't need to say it.

### #reviews h2
- before: Notes from kitchens and basements around Sioux Falls.
- after: Notes from {{biz.city}} kitchens and basements.
- why: was 3 lines. Shorter, same place, token for the city.

## Should 7: margin tags are months, one label per heading

### #services .margin-month chip
- before: All year
- after: Jan–Dec
- why: a month range, in the same language as the tape.

### #prices .margin-month chip
- before: Any month
- after: Sep
- why: September is the checkup month on the list, when people price repairs before the freezer fills.

### #reviews .margin-month chip
- before: Notes
- after: Dec
- why: a month, the year-end notes. It also stops repeating the eyebrow.

### #area .margin-month chip
- before: Route
- after: Feb
- why: February is the snow-road month, which fits "years on these roads".

### #year .tape__month (the April card)
- before: April
- after: Apr
- why: every other month is cut to three letters (desktop and the stacked list under 640).

### kickers beside a margin tag (#thaw, #services, #garage, #prices, #reviews, #area, #contact)
- before: Freezer gone quiet / What we fix / The garage fridge / What it costs / Notes under the tape / The route / The last blank line
- after: (delete the `<p class="kicker">` in each of these sections. The margin month is the only label.)
- why: these doubled the label next to the margin tag and stacked 3+ tracked caps in one view. Keep the `#year` kicker "Jan–Dec", which has no margin tag. Under 640, place the margin tag above the h2, not after the button.

## Should 4: curly apostrophes, site-wide

### #lid h2
- before: Don't check on it. A shut lid buys you two days.
- after: Don’t check on it. A shut lid buys you two days.

### #lid line under the quote
- before: Call first. We'll tell you what to do until we're there.
- after: Call first. We’ll tell you what to do until we’re there.

### #garage .garage__out (app.js output, January state)
- before: The thermostat barely asks for cooling, so the freezer side drifts soft. That's the January problem.
- after: The thermostat barely asks for cooling, so the freezer side drifts soft. That’s the January problem.
- why: also fix any other `'` in the cold-check strings in app.js.

### #prices fix-or-replace line
- before: If the repair costs more than the machine has left in it, we'll say so first.
- after: If the repair costs more than the machine has left in it, we’ll say so first.

### #contact form step label
- before: What's acting up
- after: What’s acting up

### #contact form final-step line
- before: We'll call you back to set up a visit.
- after: We’ll call you back to set up a visit.

### #area ZIP "no" answer (data attribute)
- before: {zip} is off our usual route. Call and we'll tell you straight.
- after: {zip} is off our usual route. Call and we’ll tell you straight.

## Honest thank-you

### #contact form data-thanks
- before: Thanks, {name}. In your version this goes straight to the shop's phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the agent spec requires this honest demo line.
