# gutter-B · copy fixes, round 1

src is tokenized: match the short src string shown in `src:` when it differs from the rendered `before`.

### #top h1
- before: Every inch of rain on your roof has to go somewhere.
- after: {{biz.city}} gutters, sized by the gallon.
- why: 6 words, trade + town through the token, one line at 1440; the slogan was 11 words with no trade or place

### #top kicker
- before: Seattle gutters · sized by the gallon
- src: {{biz.city}} gutters · sized by the gallon
- after: Gutters and downspouts · flow-tested
- why: the h1 now carries city + method; the kicker stops repeating it and adds the test

### #story h2
- before: Follow one inch of rain from the shingles to the yard.
- after: Follow one inch of rain to the yard.
- why: 2 lines at 1440 instead of 3

### #services h2
- before: Everything we do starts with how much water it has to carry.
- after: Every job starts with the water.
- why: ran 4 lines at 1440 (critic should #6)

### #tools h2
- before: Two numbers tell you whether your gutters are the problem.
- after: Two numbers that judge your gutters.
- why: ran 3 lines at 1440 (critic should #6)

### #contact h2
- before: Tell us about the roof. We'll come and measure it.
- after: Tell us about the roof.
- why: ran 3 lines; keep the promise as the lead below (next item)

### #contact lead (new line, insert right after the h2, before `ul.ct__ways`; class `ct__lead`, give it margin-bottom 1.5rem so the Call button stops touching the heading)
- before: (none)
- after: We come out, measure every roof plane and write the gallons per downspout on the estimate.
- why: carries the measuring line cut from the h2 and fixes the h2-on-button gap (should #2)

### #tools runoff calculator button
- before: Size gutters for this roof
- after: Price my roof
- why: one name for the primary action (should #7)

### #tools size-check button
- before: Price this size
- after: Price my roof
- why: one name for the primary action

### #guards button
- before: Price guards
- src: [[quote Guards btn-primary | Price guards]]
- after: [[quote Guards btn-primary | Price my roof]]
- why: one name for the primary action. Services row pills "Price it" stay as they are

### #top ZIP button (line ~72) and #area ZIP button (line ~450)
- before: Check
- src: <button class="btn btn-line" type="submit">Check</button>
- after: Check my ZIP
- why: the button says what happens (both occurrences; use replace_all on that exact src line)

### Eyebrows to remove (should #8: keep hero, story, prices, contact)
Delete the whole `<p class="kicker">…</p>` element for each of these:
- #services: Eight jobs, one method
- #tools: Do the math we do
- #guards: Under firs, maples and moss
- #reviews: Neighbours who watched the water
- #area: Where we work
- why: an eyebrow above every heading is a template tell; the ledger rows already carry the mono voice

### #contact kicker
- before: Price my roof
- src: <p class="kicker">Price my roof</p>
- after: (keep as is)
- why: it is the anchor every "Price my roof" button lands on, so the name matches the destination
