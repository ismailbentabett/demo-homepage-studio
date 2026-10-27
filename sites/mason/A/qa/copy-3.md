# mason-A, copy fixes for round 3 (fast mode)

**Read first:** the needs-human step put `src/` and `dist/` back to the round-2 best. The copy the critic scored
in round 3 is in `qa/last/src` and `qa/last/dist`. Every `before` below is taken from `qa/last/dist/index.html`
(as rendered) or from `qa/last/src/app.js`. Start the fix from the round-3 source (copy `qa/last/src` over `src`),
then apply these edits to `src/` with tokens and rebuild.

---

## mustFix

### #prices .price-list (row 1, Lime mortar repointing)
- before: `<dd>$14–$28</dd>`
- after: `<dd>{{proof.prices.0.from}}–{{proof.prices.0.to}} <span class="price-unit">{{proof.prices.0.unit}}</span><span class="price-note">{{proof.prices.0.note}}</span></dd>`
- why: mustFix. The bare "$14–$28" reads as the whole job; facts give "per sq ft" and "by joint depth and access".

### #prices .price-list (row 5, Retaining wall rebuild)
- before: `<dd>$60–$120</dd>`
- after: `<dd>{{proof.prices.4.from}}–{{proof.prices.4.to}} <span class="price-unit">{{proof.prices.4.unit}}</span></dd>`
- why: mustFix. Facts say "per face sq ft".

### #prices .price-list (row 4, Brick replacement)
- before: `<dd>$350–$950</dd>`
- after: `<dd>{{proof.prices.3.from}}–{{proof.prices.3.to}}<span class="price-note">{{proof.prices.3.note}}</span></dd>`
- why: the facts note ("small area, matched brick") scopes the range in the same way the unit does.
- **build note:** the src uses `<!-- each proof.prices -->` with `<dd>{{.from}}–{{.to}}</dd>`. `{{.unit}}` cannot
  go inside the loop, because the build dies on an unknown token for rows that have no unit. Unroll the loop into
  6 explicit `.price-item` rows using `{{proof.prices.N.item}}`, `{{proof.prices.N.from}}` and `{{proof.prices.N.to}}`.
  Add `.unit` only on rows 0 and 4 and `.note` only on rows 0 and 3. Style: `.price-unit` in the price mono at
  0.85em, muted ink. `.price-note` as a block line below in Source Sans `--fs--1`, muted.

## should (copy)

### #proof kicker (remove)
- before: `<p class="kicker">Walls we were asked back to</p>`
- after: (delete the element)
- why: the line moves up to the h2 (critique copy −0.5, should 7)

### #proof h2
- before: `What homeowners say <span class="sample-tag">Sample reviews</span>`
- after: `Walls we were asked back to <span class="sample-tag">Sample reviews</span>`
- why: "What homeowners say" is the stock heading. This line is specific to the trade.

### #hero .proof-line (split into two set lines, Source Sans, not mono)
- before: `<p class="proof-line"><span class="nowrap">21 years on soft brick</span> · <span class="nowrap"><span data-open-now>Mon–Thu 7 am – 5 pm · Fri 7 am – 4 pm</span></span> · <span class="nowrap">4.9 rating <span class="sample-tag">Sample</span></span></p>`
- after: `<p class="proof-line"><span class="proof-line__a nowrap">{{proof.years}} years on soft brick</span><span class="proof-line__b nowrap">{{hours|today}} · {{proof.rating}} from {{proof.reviewCount}} reviews <span class="sample-tag">Sample</span></span></p>`
- why: the middle-dot string left a "· 4.9 rating" orphan at 1440 and a line starting with "·" at 390. Two lines,
  each nowrap, `display:block` on `__a` / `__b`. The review count is in the facts and makes the rating mean something.

### #objection .note (pull line, Source Sans italic/medium in ink, not mono red)
- before: `That gray patch with crumbled brick around it? That is what we put right.`
- after: `A gray patch with crumbled brick around it means someone used cement. We cut it out and repoint in lime.`
- why: the most human sentence on the page. The question-then-slogan is gone, and it now says what the patch is and what happens to it.

### #tools tab 1
- before: `<button type="button" data-tab>Mortar softness</button>`
- after: `<button type="button" data-tab>Mortar</button>`
- why: the three tabs wrapped at 390 with "When to book" alone on a second row (mobile −0.5). The panel h3 keeps the full name.

### #tools tab 2
- before: `<button type="button" data-tab>Repoint or rebuild</button>`
- after: `<button type="button" data-tab>Chimney</button>`
- why: same. All three now fit on one line at 320. The panel h3 "Repoint or rebuild" stays.

### #tools tab 3
- before: `<button type="button" data-tab>When to book</button>`
- after: `<button type="button" data-tab>Timing</button>`
- why: same. The panel h3 "When to book" stays.

## more lines that raise the score

### #hero .lead
- before: `We rake out the old joint by hand, mix lime mortar to match your wall, pack it in layers and tool the profile to match.`
- after: `We rake old joints out by hand and refill them with lime mortar matched to your wall, softer than the brick so the brick stays whole.`
- why: the old lead said "match" twice and only listed steps. This one answers the buyer's first fear (cement that wrecks soft brick) in 26 words.

### #contact form data-thanks (thank-you text)
- before: `Thanks, {name}. In your version this goes straight to your phone and inbox, and we would call within one business day to set up a visit.`
- after: `Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}, and {{biz.owner}} calls back to set up a visit and a mortar match.`
- why: the honest demo line the rules require. "within one business day" is a promise that isn't in the facts, so it's cut.

### src/app.js mortar result, lime (line 90)
- before: `Likely lime mortar. It needs lime again: a cement repoint would crack this brick.`
- after: `Likely lime mortar. It needs lime again, done in the four stages above. Cement would crack this brick.`
- why: wow −0.5 said the checklist didn't point back to the cross-section. This ties the two moments together.

### src/app.js mortar result, either (line 92)
- before: `Could be either. A scratch test on site and a small test panel settle it.`
- after: `Could be either. A scratch test on site and a small test panel beside your wall settle it.`
- why: uses the mortar-matching noun from the services, so the answer reads as a site visit.

### src/app.js timing, summer (line 119)
- before: `: warm and steady, the best weather for lime. Most jobs start within a few weeks.`
- after: `: warm and steady, the best weather for lime. Book now to get on the summer list.`
- why: "within a few weeks" is a lead-time claim that isn't in the facts.

### #tools .joint-diagram__label (chimney panel, empty state)
- before: `Your answer builds as you go.`
- after: `The verdict fills in as you answer.`
- why: matches the mortar panel's line ("Your joint fills in as you answer."), and "answer builds" was vague.
