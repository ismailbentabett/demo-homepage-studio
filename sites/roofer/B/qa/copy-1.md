# roofer-B · copy round 1

The main action now has two names:
- **Count my squares** opens the tool (`#count`). It stays as it is in the header, hero, prices and mobile bar.
- **Book my inspection** opens the form (`#contact`). Every other "price / request / ask / book" CTA uses this name.

`before` = the text as rendered in dist/index.html. Edit the matching source in src/index.html, which may hold a token where dist shows the resolved value. Use ’ for every apostrophe in the new lines.

---

## Should 1 · h1 with trade + town

### #hero h1
- before: Counted before you&nbsp;sign.
- after: {{biz.city}} roofs, counted before you&nbsp;sign.
- why: the h1 had no trade and no place. Now it carries the city and the trade and keeps the promise. 7 words, 2 lines at 1440 with the current clamp.

### #hero .lead
- before: Squares measured, findings photographed, every line priced. A report you can lay next to the other two bids.
- after: We count your roof in squares and photograph every problem before we price it. Lay the report next to your other bids, line by line.
- why: removes the tricolon. Answers the first objection ("three bids, three sizes") in 26 words.

## Should 3 · one name for the primary action

### #findings .index__go (×8 rows)
- before: Price it
- after: Book this
- why: "Price it" was a third name for the form. These rows prefill the service, so "Book this" reads as the same booking action. If the builder deletes the index (critique Should 9), skip this line.

### #findings F-01 pen link
- before: Book an inspection with a photo report
- after: Book my inspection
- why: one name for the form action.

### #count result button
- before: Send me the real count
- after: Book my inspection
- why: this button goes to the form, so it uses the form's name. The note under it ("A rough count from the ground…") already explains the real count.

### #claim primary button
- before: Book the inspection before you call your insurer
- after: Book my inspection
- why: one name. It was also 7 words long. The timing moves to the h3/lead line below.

### #claim phone link
- before: Or ask us on the phone first
- after: Or call {{biz.phone}} before your insurer
- why: the button says what happens and keeps the "before your insurer" order the timeline teaches.

### #contact kicker
- before: Request a report
- after: F-08 · Book my inspection
- why: drops the fourth name and continues the finding numbering used everywhere else.

### #contact h2
- before: Ask for your&nbsp;count.
- after: Book your inspection in&nbsp;{{biz.city}}.
- why: the fifth name is gone. The h2 matches the button and repeats the town at the close.

### #contact form submit
- before: Send my request
- after: Book my inspection
- why: the submit button says the same thing as every link that led here.

### #contact form hint
- before: We'll call you back to set up a visit. Nothing is sent from this demo.
- after: We’ll call you back to set a time on your roof. Nothing is sent from this demo.
- why: curly apostrophe, and "on your roof" is the concrete version of "a visit".

### footer nav
- before: Request a report
- after: Book my inspection
- why: one name.

## Should 4 · cut the repeat in #findings

### #findings h2
- before: Every problem gets a number, a photo and a call: fix it or watch it.
- after: Every problem gets a number and a call: fix it or watch it.
- why: the photo idea belongs to F-01 now. This also removes a tricolon.

### #findings F-01 h3
- before: A roof diagram with every problem pinned on it.
- after: The report you keep: a printed sheet and a PDF.
- why: this said the same thing as the h2. Now it describes the report as a physical object.

### #findings F-01 body
- before: Every problem pinned on a roof diagram, with its photo and a clear fix-or-watch call. The report holds the photos, the squares and the price lines, so you can hold it up against any other bid.
- after: The roof plan with its pins, a photo for each finding, then the square count and the price lines. Hold it up against any other bid.
- why: the opening sentence was {{services.0.blurb}}, which repeats the h2. Drop that token here.

### #findings F-02 run-in (bold blurb)
- before: <strong>Low-slope coating.</strong> Flat porch or patio holding water? Silicone coating on flat porch and patio sections to stop ponding leaks and bounce summer sun.
- after: A flat porch roof that holds water gets a level laid across it first, then a silicone coat so rain runs to the gutter.
- why: this was a pasted blurb, and it said "flat porch and patio" twice. Now it is one plain sentence with no bold run-in.

### #findings F-05 run-in (bold blurb)
- before: <strong>Roof replacement.</strong> Your roof measured in squares, priced line by line, then rebuilt with the shingle you pick.
- after: (delete the paragraph)
- why: a pasted services blurb that repeats the hero and #count. The F-05 body already does this job.

### #findings F-06 run-in (bold blurb)
- before: <strong>Gutters with a new roof.</strong> Seamless gutters sized to your roof area and hung on the same visit as the new roof.
- after: Want seamless gutters too? They’re sized from the same square count and hung the same visit.
- why: removes the bold run-in. The sentence links gutters to the count, so "Add gutters to the count" now has a reason.

### #count .band__note
- before: Class 3 and Class 4 shingles compared side by side, with what each one adds to the price.
- after: The Class 4 line is what the upgrade adds on top. Your report shows both.
- why: this was {{services.4.blurb}} pasted again. Now it explains the band it sits under.

## Should 5 · headlines to 2 lines at 1440

### #count h2
- before: Three bids, three roof sizes? Here's how we count&nbsp;ours.
- after: Three bids gave three sizes. Here’s our&nbsp;math.
- why: 3 lines down to 2. Also fixes the curly apostrophe.

### #count lead
- before: One square is 100 sq ft of roof. Set your house and watch the math we'd write on your report.
- after: One square is 100 sq ft of roof. Set your house and watch the math we’d write on your report.
- why: curly apostrophe.

### #deductible h2
- before: We won't touch your deductible. Texas law says we can't, and we'd rather tell you&nbsp;now.
- after: We won’t touch your deductible. {{biz.stateName}} law says we&nbsp;can’t.
- why: 3 lines down to 2. Uses the state token and curly apostrophes.

### #deductible body
- before: Anyone offering to waive it or "cover it" is asking you to sign a claim that isn't true. Texas Insurance Code, chapter 707.
- after: Anyone offering to waive it or “cover it” is asking you to sign a claim that isn’t true. {{biz.stateName}} Insurance Code, chapter 707.
- why: curly quotes and apostrophe, plus the state token.

### #notes h2
- before: What homeowners wrote after the last line was checked.
- after: What homeowners wrote after sign-off.
- why: 3 lines down to 2. "Sign-off" ties to the red ticks.

### #local h2
- before: Based in Fort Worth. Still here after the storm trucks&nbsp;leave.
- after: Based in {{biz.city}}, here after the storm trucks&nbsp;leave.
- why: 3 lines down to 2.

## Should 6 · typography (copy-side)

### #findings-b h2
- before: What's under the old roof, and what's left in your yard.
- after: What’s under the old roof, and what’s left in your yard.
- why: curly apostrophes.

### #findings F-02 run-in
- before: <strong>When it's more than one leak:</strong>
- after: <strong>When it’s more than one leak:</strong>
- why: curly apostrophe.

### #count no-JS fallback
- before: The sliders need JavaScript. Here is the math for a typical 2,200 sq ft hip roof; call and we'll run yours with you.
- after: The sliders need JavaScript. Here is the math for a typical 2,200 sq ft hip roof. Call and we’ll run yours with you.
- why: curly apostrophe, and the semicolon becomes a full stop.

- note for the builder: "2,000-2,600 sq ft home" (prices band + count band) comes from the {{prices.1.note}} token in facts.json. Don't type the value into src/. Swap the hyphen for an en dash at render time (a `-` to `–` filter between digits on that token), or raise it to the orchestrator as a facts edit. Reviews also render straight apostrophes from facts (That's, doesn't). Apply the same filter there.

## Should 11 · break caption (text unchanged, placement is the builder's)

### #break caption
- before: Signed off when the count, the photos and the invoice&nbsp;match.
- after: Signed off when the count, the photos and the invoice&nbsp;match.
- why: no wording change. It moves onto the image as the sign-off block (critique Should 11). Listed so the builder doesn't rewrite it.
