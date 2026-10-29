# windowdoor-B, copy fixes, round 1

US spelling. Apply in `src/index.html` (and `src/app.js` where noted). `before` is the text as rendered in
`dist/index.html`. Where src holds a token or loop variable, the src line is given too.
Curly apostrophes use the ’ character (U+2019), not `&rsquo;`, so the split-text hooks keep working.

## Should 1: h1 names trade and town

### #top h1
- before: Read the label before you sign.
- after: Read the impact-window label in {{biz.city}} before you sign.
- why: trade + town in the h1 (5-second test), thesis kept. 9 words, 2 lines at 1440.

### #top .kicker (drop the duplicate city, the h1 carries it now)
- before: Impact windows &amp; sliders · Naples, FL
- src: `Impact windows &amp; sliders · {{biz.city}}, {{biz.state}}`
- after: Impact windows, sliders &amp; doors · {{biz.state}}
- why: the town is in the h1; the kicker adds what the h1 does not cover (sliders, doors).

## Should 2: one count, five numbers everywhere

### #top .lead
- before: Every impact window carries a sticker with four numbers that decide its price. We read them with you, opening by opening, before anyone asks for a deposit.
- after: Every impact window carries a sticker with five numbers that decide its price. We read them with you, opening by opening, before anyone asks for a deposit.
- why: matches the #label h2 "Five numbers" and the five label rows. 28 words.

### #top hero sticker, row 4 (whole `<li>`)
- before: `<li><a href="#orderby"><span class="cl-k">Order by</span><span class="cl-v">Early Mar</span><span class="cl-t">Done before June 1</span></a></li>`
- after: `<li><a href="#label"><span class="cl-k">U-factor</span><span class="cl-v">0.45</span><span class="cl-t">Heat through the glass</span></a></li>`
- why: the hero sticker now shows the same five label numbers as #label. Order-by stays in its own section.

### #top hero sticker, row 5 (whole `<li>`)
- before: `<li><a href="#prices"><span class="cl-k">Price</span><span class="cl-v">Per opening</span><span class="cl-t">Sample ranges</span></a></li>`
- after: `<li><a href="#label"><span class="cl-k">VT</span><span class="cl-v">0.50</span><span class="cl-t">Daylight you keep</span></a></li>`
- why: fifth label number (visible light), same value as #label row 4.

### #top hero sticker, row order
- Move the new U-factor row so it sits between Missile and SHGC. Final order: DP, Missile, U-factor, SHGC, VT (same order as #label).

### #top hero sticker head
- before: Sample label Read it
- src: `<span>Sample label</span><span>Read it</span>`
- after: `<span>Sample label</span><span>5 numbers</span>`
- why: the sticker states the count once, the same count the lead and h2 use.

## Should 4: curly apostrophes (every visible string with one)

### #orderby h2
- before: Pick the month you'd sign. See when it's in.
- after: Pick the month you’d sign. See when it’s in.

### #contact h2
- before: Send the openings. We'll read the label with you.
- after: Send the openings. We’ll read the label with you.

### #contact step 1 legend
- before: What's the job?
- after: What’s the job?

### #prices .lead
- before: Lift the corner of any tag. What's under it is the reason two quotes for the same window are not the same number.
- after: Lift the corner of any tag. What’s under it is the reason two quotes for the same window are not the same number.

### #compare .cmp__note
- before: We don't quote insurance savings. Your agent can tell you what wind mitigation is worth on your policy.
- after: We don’t quote insurance savings. Your agent can tell you what wind mitigation is worth on your policy.

### #compare chip
- before: Nobody, we're away
- after: Nobody, we’re away

### #contact .form-micro
- before: We'll call you back to set up a measure.
- after: We’ll call you back to set up a measure.
- note: the `{{hours|today}}` token after it stays as is.

### #area ZIP answers (attributes on `form.zip`)
- before: `data-zip-yes="Yes, {zip} is on our map. Send the openings and we'll set a measure."`
- after: `data-zip-yes="Yes, {zip} is on our map. Send the openings and we’ll set a measure."`
- before: `data-zip-no="{zip} is outside our usual map. Call {phone} and we'll tell you honestly."`
- after: `data-zip-no="{zip} is outside our usual map. Call {phone} and we’ll tell you plainly."`
- why: curly apostrophe; "honestly" is a trust adjective, "plainly" fits the label voice.

## Should 7: decorative numbering (copy side)

### #openings card row (in the `<!-- each services -->` loop)
- before (dist, ×8): Opening 01 Impact … Opening 08 Impact
- src: `<p class="card__row"><span>Opening {{#2}}</span><span>Impact</span></p>`
- after (src): `<p class="card__row"><span>{{.short}}</span><span>Impact</span></p>`
- why: drops the 01–08 card count (the section numbers stay); the row now names the job.

## Should 9: one primary action name, "Price it"

### #label aside button
- before: Have us read your quote
- after: Price it: send your quote
- why: same action name as every other route into the form.

### #orderby button
- before: Plan my dates
- after: Price it for my month
- why: same verb as the rest; still tied to the month picker.

### #compare button (initial text; app.js rewrites it live)
- before: Price my openings
- after: Price 12 openings
- why: matches the live state the JS produces for the default 12, so the label doesn't jump on first input.
- app.js line 45 stays: `cta.textContent = 'Price ' + openings;` (gives "Price 1 opening" / "Price 12 openings").

## Note for the builder (not copy, flagged in the critique)
- Hero caption: keep the text, set it as one left-aligned line (Should 6). No wording change needed.
- Em dashes: none added here.
