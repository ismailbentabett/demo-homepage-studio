# carpenter-A · copy fixes, round 3

**Base file: `sites/carpenter/A/qa/last/src/index.html`** (the round-3 source the critic scored).
`score.mjs` restored `src/` to round 2, so copy `qa/last/src/*` back into `src/` first, then apply these
edits to `src/index.html`. Every `before` is the exact source text (tokens and macros unresolved), not
the dist render. Facts stay as `{{...}}` tokens.

Fraction rule for the whole page: Latin-1 glyphs only (½ ¼ ¾), number and glyph with no space or
hyphen (`14¾`, `2½`). No eighths: ⅜ and ⅝ are outside the DM Mono Latin subset and would fall back to
another font, so the two eighth dimensions move to quarters. Builder: add `white-space: nowrap` to
`.cut-rule__label` and `.dt` so no dimension breaks.

---

## A. Critique items (Should 1, 2, 6, 7, 8, 9, 10 + Copy/Type deductions)

### #area .open-now: repeated hours (Should 1, Polish)
- before: `<p class="open-now"><span data-open-now></span> · {{hours|today}}</p>`
- after:
  ```
  <p class="open-now">{{hours|today}}</p>
          {{hours|table}}
  ```
- why: `{{hours|today}}` already outputs a `data-open-now` span, so the bare span plus the token printed "Open now · until 4:30 pm" twice. One live line, then the week as a `<dl class="hours">`. That also fills part of the ~400px of empty space in the left column (Should 5). Builder: style `.area .hours` as a two-column mono list.

### #hero .proof-line: "Sample rating" tag with no rating (Should 2, First screen)
- before: `<p class="proof-line"><!-- if proof.years --><span>{{proof.years}} years splicing {{biz.stateName}} porches</span> · <!-- /if --><span data-open-now></span> · [[sample rating]]</p>`
- after: `<p class="proof-line"><!-- if proof.years --><span>{{proof.years}} years splicing {{biz.stateName}} porches</span> · <!-- /if --><span data-open-now></span> · <span class="nw">{{proof.rating}}/5 from {{proof.reviewCount}} reviews</span> [[sample rating]]</p>`
- why: the tag now labels a number. `.nw` = `white-space: nowrap`.

### #matched-trim .review-inline: straight quotes (Should 6, Type)
- before: `<p>"{{proof.reviews.4.text}}"</p>`
- after: `<p>“{{proof.reviews.4.text}}”</p>`
- why: curly quotes.

### #proof review 1: straight quotes (Should 6, Type)
- before: `<p>"{{proof.reviews.0.text}}"</p>`
- after: `<p>“{{proof.reviews.0.text}}”</p>`
- why: curly quotes.

### #proof review 2: straight quotes (Should 6, Type)
- before: `<p>"{{proof.reviews.2.text}}"</p>`
- after: `<p>“{{proof.reviews.2.text}}”</p>`
- why: curly quotes.

### #contact .lead-form__micro: straight apostrophe (Type)
- before: `<p class="lead-form__micro">We'll call you back to set up a visit.</p>`
- after: `<p class="lead-form__micro">We’ll call back to set a day to look at it.</p>`
- why: curly apostrophe. The new line also stops repeating the contact lead word for word.

### #story-rot .price-hint: price range read as a hyphen (Should 6, Type)
- before: `<p class="price-hint">Sample pricing: {{proof.prices.0.from}}–{{proof.prices.0.to}} {{proof.prices.0.unit}} [[sample pricing]]</p>`
- after: `<p class="price-hint">Sill patch: {{proof.prices.0.from}} to {{proof.prices.0.to}} {{proof.prices.0.unit}} [[sample pricing]]</p>`
- why: at 1440 the en dash rendered as a hyphen, so the range now uses "to", the same as the estimator output. "Sample pricing:" also doubled the tag next to it.

### #matched-trim CUT 03b: mixed fractions, broke inside "1-3/8" (Should 6, Type)
- before: `<span class="cut-rule__label">CUT 03b · SASH · 1-3/8 × 1-3/4 · PINE</span>`
- after: `<span class="cut-rule__label">CUT 03b · SASH RAIL · 1¾ × 2¼ · PINE</span>`
- why: one glyph style. Moved to quarters (heavy old sash) so no eighths are needed.

### #matched-trim CUT 03c: eighth fraction (Type)
- before: `<span class="cut-rule__label">CUT 03c · DOOR PANEL · 5/8 × 18 × 24 · PINE</span>`
- after: `<span class="cut-rule__label">CUT 03c · DOOR PANEL · ¾ × 18 × 24 · PINE</span>`
- why: one fraction style, no ⅝ glyph.

### #matched-trim CUT 03a: lowercase glyph check (Type)
- before: `<span class="cut-rule__label">CUT 03a · CASING · ¾ × 3¼ · PINE</span>`
- after: (unchanged; this is the reference style)
- why: listed so the builder doesn't "fix" it the wrong way.

### svg #d-mark label
- before: `<text class="dt" x="99" y="60" text-anchor="middle">14-3/4</text>`
- after: `<text class="dt" x="99" y="60" text-anchor="middle">14¾</text>`
- why: one fraction style (plate CUT 00 in the hero).

### svg #d-measure label
- before: `<text class="dt" x="177" y="164" text-anchor="middle">SILL END · 7-1/2</text>`
- after: `<text class="dt" x="177" y="164" text-anchor="middle">SILL END · 7½</text>`
- why: one fraction style.

### svg #d-sill label
- before: `<text class="dt" x="203" y="156" text-anchor="middle">DUTCHMAN · 2-1/2 × 7 × 38</text>`
- after: `<text class="dt" x="203" y="156" text-anchor="middle">DUTCHMAN · 2½ × 7 × 38</text>`
- why: matches the CUT 02 rule, which already says 2½.

### svg #d-casing labels (two lines)
- before: `<text class="dt" x="150" y="194" text-anchor="middle">3-1/4</text><text class="dt" x="276" y="114">3/4</text>`
- after: `<text class="dt" x="150" y="194" text-anchor="middle">3¼</text><text class="dt" x="276" y="114">¾</text>`
- why: matches CUT 03a "¾ × 3¼".

### svg #d-sash label
- before: `<text class="dt" x="130" y="12" text-anchor="middle">1-3/8</text>`
- after: `<text class="dt" x="130" y="12" text-anchor="middle">1¾</text>`
- why: matches the new CUT 03b.

### svg #d-steps labels
- before: `<text class="dt" x="102" y="286">7-1/2 RISE</text>`
- after: `<text class="dt" x="102" y="286">7½ RISE</text>`
- why: one fraction style.

- before: `<text class="dt" x="98" y="212">10-1/4 RUN</text>`
- after: `<text class="dt" x="98" y="212">10¼ RUN</text>`
- why: one fraction style.

### #story-rot PL 02a caption
- before: `<figcaption class="plate__cap"><span class="plate__no">PL 02a</span>The soft end before the saw. Screwdriver sinks past 1/4 in.</figcaption>`
- after: `<figcaption class="plate__cap"><span class="plate__no">PL 02a</span>The soft end before the saw. Screwdriver sinks past ¼ in.</figcaption>`
- why: matches the rot checklist ("¼ in").

### #proof: no h2 for the reviews (Should 7, A11y)
- before: `    <div class="container proof__grid">`
- after:
  ```
      <h2 class="container proof__title" data-reveal>What neighbors said, and what it costs</h2>
      <div class="container proof__grid">
  ```
- why: gives the reviews and prices a section heading so "Price it by the job" stays an h3 under it. US spelling for a Maine site. Builder: this h2 replaces part of the ~200px of empty space at the top of the band, so halve the band's top padding.

### Secondary action: one name, "Price a repair" (Should 8, Copy)
All of these go to the same form. Call stays the primary button.

#### #story-rot button
- before: `[[quote {{services.0.short}} | Send a photo]]`
- after: `[[quote {{services.0.short}} | Price a repair]]`
- why: one name.

#### #rot-check button
- before: `[[quote {{services.0.short}} | Send a photo of the damage]]`
- after: `[[quote {{services.0.short}} | Price a repair]]`
- why: one name. The photo now belongs only to form step 3.

#### #porch-safety button
- before: `[[quote {{services.1.short}} | Book a porch inspection]]`
- after: `[[quote {{services.1.short}} | Price a repair]]`
- why: one name. `data-service` still preselects porch repair.

#### #services row button (repeater, renders 9 times)
- before: `          [[quote {{.short}} btn-ghost]]`
- after: `          [[quote {{.short}} btn-ghost | Price a repair]]`
- why: the macro defaults to "Price it". This was the ×9 name.

#### #proof estimator button
- before: `[[quote {{services.0.short}} | Get my number]]`
- after: `[[quote {{services.0.short}} | Price a repair]]`
- why: one name.

#### #contact h2
- before: `<h2>Get a number</h2>`
- after: `<h2>Price a repair</h2>`
- why: the buttons all say this, so the section they land on should too.

#### #menu link
- before: `<li><a href="#contact">Get a number</a></li>`
- after: `<li><a href="#contact">Price a repair</a></li>`
- why: one name.

#### .mobilebar
- before: `[[quote {{services.0.short}} | Price it]]`
- after: `[[quote {{services.0.short}} | Price a repair]]`
- why: one name.

#### #rot-check result text (rendered after 3+ ticks)
- before: `3:{n} of {total}: a bigger splice, maybe a new matched piece. Send a photo.`
- after: `3:{n} of {total}: a bigger splice, maybe a new matched piece. Worth a visit.`
- why: removes the last "Send a photo" call to action.

### #matched-trim cards repeat three service rows (Should 9, Copy)
The cards now tell the profile-matching story and drop the service blurbs and buttons, so the nine-row list stays the only place each service appears. Delete the `[[quote … btn-ghost]]` line in each card.

#### Card 03a
- before:
  ```
          <h3>{{services.3.name}}</h3>
          <p>{{services.3.blurb}}</p>
          [[quote {{services.3.short}} btn-ghost]]
  ```
- after:
  ```
          <h3>Traced from the offcut</h3>
          <p>Six inches of the old casing is enough. We trace the profile, and a knife is ground to it.</p>
  ```
- why: the profile story (offcut, knife). No repeat of the services list.

#### Card 03b
- before:
  ```
          <h3>{{services.2.name}}</h3>
          <p>{{services.2.blurb}}</p>
          [[quote {{services.2.short}} btn-ghost]]
  ```
- after:
  ```
          <h3>Run to the old section</h3>
          <p>New rail stock is milled to the same width and the same putty bed, so the glass sits where it sat.</p>
  ```
- why: profile story (gauge, mill). No repeat.

#### Card 03c
- before:
  ```
          <h3>{{services.6.name}}</h3>
          <p>{{services.6.blurb}}</p>
          [[quote {{services.6.short}} btn-ghost]]
  ```
- after:
  ```
          <h3>One panel, frame kept</h3>
          <p>The split panel comes out and a new one goes into the old groove. Stiles, rails and hardware stay put.</p>
  ```
- why: profile story (installed). No repeat.

### Footer credits: claims photos that aren't on the page (Should 10, Polish)
- before: `<ul class="credits"><li>Sample photos via Pexels (placeholder mode)</li></ul>`
- after: `<ul class="credits"><li>Drawings made for this sample site</li></ul>`
- why: true to what is on screen.

---

## B. Extra lines that lift the score

### #hero .kicker (three tracked-caps lines in view)
- before: `<p class="kicker">{{biz.stateName}} · rot repair · matched trim · built-ins</p>`
- after: `<p class="kicker">Rot repair and matched trim · {{biz.stateName}}</p>`
- why: shorter, one fewer list beat, and it no longer competes with the cut rule.

### #contact lead (tricolon)
- before: `<p class="lead">Tell us what is broken, what it is made of, and when you need it done. We will call you back to set up a visit.</p>`
- after: `<p class="lead">Tell us which part has gone soft or stuck. We look at it in person before we put a number on it.</p>`
- why: drops the tricolon and answers the "will they quote blind?" worry.

### #contact step 3 title + hint (absorbs "Send a photo")
- before: `<h3 class="lead-step__title">Step 3 · Photo note</h3>`
- after: `<h3 class="lead-step__title">Step 3 · Photo of the damage</h3>`
- why: the photo action now lives here only.

- before: `<p class="lead-step__hint">No upload in this demo. In your version this step accepts photos.</p>`
- after: `<p class="lead-step__hint">No upload in this demo. On the real site you attach a photo here, ruler in frame if you can.</p>`
- why: honest, and the ruler detail matches the trim lead.

### #contact submit
- before: `<button class="btn" type="submit">Send</button>`
- after: `<button class="btn" type="submit">Ask for a visit</button>`
- why: the button says what happens.

### #contact thank-you (demo honesty rule)
- before: `<p>In your version this goes straight to your phone and inbox. For now, call [[tel]] to reach {{biz.short}}.</p>`
- after: `<p>This is a demo, nothing was sent. On the real site this goes to {{biz.short}}. To talk now, call [[tel]].</p>`
- why: the required honest line from the copy rules.

### Footer licence spelling
- before: `<p class="footer__biz">{{biz.name}} · {{biz.city}}, {{biz.state}} · Licence # {{proof.license}} [[sample license]]</p>`
- after: `<p class="footer__biz">{{biz.name}} · {{biz.city}}, {{biz.state}} · License # {{proof.license}} [[sample license]]</p>`
- why: US spelling, and it matches the tag.

---

Not copy, for the builder: the estimator output must render from the select's current value on load
(Wow, Should 3). Em dashes on the page stay at 3 (the review footers).
