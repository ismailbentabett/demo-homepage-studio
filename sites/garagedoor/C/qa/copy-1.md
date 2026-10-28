# garagedoor-C · copy fixes, round 1

Apply with Edit in `src/`. `before` is the text as it appears in `dist/index.html` (facts resolved). `after` uses tokens.

### #hero h1
- before: Door won’t lift on the coldest morning? We come out.
- after: Garage door won’t lift in {{biz.city}}? We come out.
- why: 9 words, trade and town now in the h1 itself (critique firstScreen −0.5). The voice and the one question stay.

### #hero price card note (stray middle dot)
- before: `<p class="reading__note">most two-car doors · <span class="sample-tag">Sample pricing</span></p>`
- after: `<p class="reading__note">{{proof.prices.0.note}}</p><p class="reading__note"><span class="sample-tag">Sample pricing</span></p>`
- why: drops the trailing "·" and gives the Sample label its own line (Should 9).

### All `.btn--text` links: arrow (CSS, style.css)
- before: `.btn--text::after { content: "→"; text-decoration: none; display: inline-block; transition: transform var(--t-ui) var(--ease-out); }`
- after: delete this rule and the `.btn--text:hover::after { transform: translateX(4px); }` rule. Plain underlined links only.
- why: an arrow on 15 links (copy −0.5). Every link loses it, including the hero one.

### Main action: one name, "Price my repair" (every link to #contact)
- before: `<a class="btn btn--text" href="#contact" data-service="New opener">Price it</a>` (and the same for Hail damage in #readings)
- after: `<a class="btn btn--text" href="#contact" data-service="New opener">Price my repair</a>` (same for Hail damage)
- before: `<a class="btn btn--text svc__cta" href="#contact" data-service="…">Price it</a>` (all 10 rows in #services)
- after: `<a class="btn btn--text svc__cta" href="#contact" data-service="…">Price my repair</a>` (keep each data-service as is)
- before: `<button class="btn btn--dark" type="submit" data-submit>Send my request</button>`
- after: `<button class="btn btn--dark" type="submit" data-submit>Price my repair</button>`
- why: the nav, hero, contact kicker and footer already say "Price my repair". Now every route to the form, and the form's own last button, has that one name.

### #prices row 2 stamp (insulated door)
- before: `<p class="stamp stamp--sm"><span>10</span><sup>°F</sup></p>`
- after: `<p class="stamp stamp--sm stamp--word"><span>All winter</span></p>`
- why: 10 °F is not one of the story's four readings. The review cards already use a season word here (Should 4).

### #prices row 3 stamp (fall tune-up)
- before: `<p class="stamp stamp--sm"><span>34</span><sup>°F</sup></p>`
- after: `<p class="stamp stamp--sm stamp--word"><span>October</span></p>`
- why: in the story, 34 °F belongs to the frozen seal. The tune-up is booked in October (see Shonda's review), so the stamp says that.

### #prices row 3 note
- before: Before the first freeze
- after: Before the first freeze, springs to seals
- why: says what the visit covers, using the nouns from {{services.9.blurb}}.

### #prices h2
- before: The price sheet, coldest reading first.
- after: The price sheet, coldest reading first, then the seasons.
- why: the order now runs −8, All winter, October, 88, 104, and the heading has to say so or it reads as a broken scale.

### #proof h2
- before: What the neighbours said after the cold snap.
- after: What the neighbors said after the cold snap.
- why: US spelling on an Omaha page, which matches Doug's "neighbor" (Should 6).

### #footer licence line
- before: Licence # (sample) SAMPLE-NE-41562
- after: License # (sample) {{proof.license}}
- why: US spelling, and the number goes through the token.

### #area ZIP button
- before: `<button class="btn btn--primary" type="submit">Check</button>`
- after: `<button class="btn btn--primary" type="submit">Check my ZIP</button>`
- why: the button says what happens.

### #area ZIP "no" answer
- before: {zip} is outside our usual map. Call {phone}, we’ll tell you who to ring.
- after: {zip} is outside our usual map. Call {phone} and we’ll tell you who to ring.
- why: the comma splice reads as a typo.

### #contact form thank-you (data-thanks)
- before: Thanks, {name}. In your version this goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the demo has to say plainly that nothing was sent (DEMO-RULES).

### #readings scene 3 price line
- before: Stop pressing the button. Call, and we price it on the phone.
- after: Stop pressing the button. Call and we’ll price it on the phone.
- why: drops the stray comma and reads the way someone would say it.
