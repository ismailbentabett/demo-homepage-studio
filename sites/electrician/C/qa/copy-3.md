# electrician-C, copy round 3

The main action has one name everywhere: **Price my rewire**. The form already preselects the job through
`data-service`, so the button label stays the same and a sub-line names the room or the job where the context
needs it. Sub-line markup (write the anchor by hand instead of the `[[quote]]` macro, keep `data-service`):
`<a class="btn btn--primary btn--sub" href="#contact" data-service="…">Price my rewire<small>…</small></a>`
CSS: `.btn--sub{flex-direction:column;align-items:flex-start;gap:2px}` `.btn--sub small{font:400 .8rem/1.2 var(--f-body);opacity:.85}`.
The `before` lines below are dist text. The `after` lines go into src with tokens.

## Action name (critique: copy, "action names drift")

### #services, all nine card links (src lines 266–318, `[[quote {{services.N.short}} textlink | Price it]]`)
- before: Price it
- after: Price my rewire
- why: "Price it" was one of the five names. The room label above each card already says where, so no sub-line is needed. Keep `data-service`. This also covers the 48px tap-area should (padding is CSS).

### #decoder primary button (src 375)
- before: Book an inspection
- after: Price my rewire<small>Starts with the {{proof.prices.4.from}} inspection</small>
- why: same name; the sub-line keeps the result's advice ("start with an inspection") and its price, which is Sample-tagged in the card above. Keep data-service="Inspections".

### #outlets primary button (src 468)
- before: Price my outlets
- after: Price my rewire<small>{{services.3.short}}, living room</small>
- why: same name, with the room as a sub-line.

### #ev primary button (src 512)
- before: Price my charger
- after: Price my rewire<small>Panel to garage, the run you just drew</small>
- why: same name; the sub-line ties the button to the slider the buyer just set.

## Reassurance at hesitation points

### #decoder result states (src 357, the `data-checklist-results` attribute; edit the whole attribute value)
- before: 0:Tick what you see. None of these means trouble on its own.|1:One sign. Worth a question at your next visit.|2:{n} of {total}. An inspection would look at the attic, the panel and a few outlets.|4:{n} of {total}. Original wiring is likely still in use. Start with an inspection; an electrician confirms on site.
- after: 0:Tick what you see. None of these means trouble on its own.|1:One sign. Lots of bungalows have one. Ask about it on the phone.|2:{n} of {total}. An inspection would look at the attic, the panel and a few outlets. Nothing gets opened that day.|4:{n} of {total}. Original wiring is likely still running. That is normal for a house this age, and it comes out one room at a time.
- why: the 4-tick result is the moment of fear. It now ends on the thesis instead of a warning. The "electrician confirms" line moves to the note below.

### #decoder, new line under the button (add `<p class="decoder__note">` after the button)
- before: (none: insert after the "Book an inspection" button, which becomes "Price my rewire")
- after: Read us your ticks when you call. The inspection starts from them, and the report says what can wait.
- why: the critique asks for doubt-moment copy at the decoder result. "What can wait" mirrors the Tom B. review without quoting it.

### #ev, new line under the planner actions (add `<p class="planner__note">` after `.planner__actions`)
- before: (none: insert after the "Print this plan" button row)
- after: Print this and keep it by the panel. We start from it on the first visit.
- why: this is the critique's own example. It turns "Print this plan" into a reason to act.

### #ev planner result (data-est-out static text; the kit may rewrite it, so match the kit's format)
- before: EV charger installation: $850 to $2,400 (longer runs to a detached garage cost more)
- after: (no change in wording; keep the Sample pricing tag)
- why: listed only so the builder knows not to touch it.

## Hours (critique should #3)

### #ledger hours table (src 155: `<dl class="hours">…{{biz.hours.mon.0}}–{{biz.hours.mon.1}}…</dl>`)
- before: Mon–Thu 08:00–17:00 Fri 08:00–16:00 Sat–Sun Closed
- after: `{{hours|table}}`
- why: the build's table writes "8 am – 5 pm" from facts, which matches the open-now line. Set `.ledger dl.hours` to `grid-template-columns:auto 1fr` and keep it at .95rem so 7 rows stay compact.

### #footer hours table (src 696, same `<dl>`)
- before: Mon–Thu 08:00–17:00 Fri 08:00–16:00 Sat–Sun Closed
- after: `{{hours|table}}`
- why: same format everywhere on the page.

## Rating line (critique should #4)

### #reviews .reviews__score (src 525)
- before: 5 out of five, from 96 reviews
- after: Rated {{proof.rating}} out of 5 by {{proof.reviewCount}} neighbors
- why: drop the `<b>` so the 5 no longer drops into an old-style display figure. It is set in body type inside the sentence. Keep `[[sample rating]]` right after it.

## Other lines that lift the score

### #area ZIP button (src 562)
- before: Check
- after: Check my ZIP
- why: a button should say what happens.

### #services lead (src ~262)
- before: Nine kinds of work, all on old houses. Pick the room; we will tell you what it usually needs.
- after: Nine kinds of work, all on old houses. Find the room, then price the job from its card.
- why: it points at the now-uniform card action.

### #contact micro line under the form steps
- before: We'll call you back to set up a visit. Nothing is sent from this sample page.
- after: We call you back to set up a visit, and the price range comes before anyone opens a wall. This is a demo, nothing is sent from this page.
- why: hesitation point at the last step. It repeats the promise from step 3 of the contact list, and the demo wording matches the thank-you rule.
