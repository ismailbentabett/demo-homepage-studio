# hvac-C copy, round 1 (fast)

Note on the two alt mustFixes: the "Las Vegas" alts come from the shared niche manifest
(`niches/hvac/media/manifest.json`, written for hvac-A, which is in Las Vegas). Do not edit the
manifest (hvac-A uses it). Override per slot in `src/index.html`: `[[frame ...]]` writes the manifest alt
into `data-fallback` too, so replace those two macros with hand-written markup (or `[[img key | alt="..."]]`
inside your own `<figure class="frame ..." data-fallback="...">`), keeping the same classes, slot,
width/height and lazy loading. After the build, `grep -i vegas dist/index.html` must return nothing.

### #break img[data-slot="break"] alt + figure data-fallback (MUST)
- before: Desert sunset over Las Vegas valley rooftops
- after: Sunset over flat {{biz.city}} rooftops
- why: wrong city, an invented location fact; the city only comes through the token

### #14:00 band img[data-slot="story-3"] alt + figure data-fallback (MUST)
- before: Desert stucco home typical of the Las Vegas service area
- after: Stucco block house with a unit on the flat roof
- why: wrong city; describes the frame, no place claim needed

### #hero h1 .hero__line
- before: by noon. We're on the roof before the sun is.
- after: by noon. {{biz.city}} AC crews start at dawn.
- why: h1 now carries trade and town; 9 words with the 115° display line kept (critic should, 5-second test)

### #hero .kicker
- before: Phoenix · Heating & Cooling · Mon–Fri 5:30 am – 7 pm · Sat 6 am – 4 pm · Sun 7 am – 1 pm
- after: {{biz.tradeLabel}} in {{biz.city}}
- why: middle-dot meta string is a slop tell; hours already sit in the header. Drop the open-now span here (it is also nested twice in dist).

### #hero .proof-line
- before: 22 years · Tempe to Gilbert · 4.9
- after: {{proof.years}} years on {{biz.city}} roofs, {{biz.areas.0}} to {{biz.areas.5}}. Rated {{proof.rating}}
- why: plain sentence instead of a dotted stats line (critic should); keep `[[sample rating]]` right after it

### #hero .hero__reading (aria-hidden card)
- before: crew on the roof
- after: (remove the span; card reads "Shade line 05:00")
- why: cuts one tracked mono label from the first view (critic should: two per view)

### All bands .band__zone, sun icon (8 places: 05:00, 10:00, 14:00, 18:00)
- before: Sunlit · the problem
- after: Problem
- why: icon + one word, no middle dot (critic should); the sun icon carries "sunlit"

### All bands .band__zone, shade icon (same 4 bands)
- before: Shaded · the fix
- after: Fix
- why: same; the shade icon carries "shaded"

### #day (05:00) button
- before: Price a rooftop unit
- after: Price it: rooftop unit
- why: one name for the pricing action across the page (critic copy deduction)

### #sorter button
- before: Get a second opinion
- after: Price it with this answer
- why: same pricing name; says what happens next with the sorter result

### 18:00 band button
- before: Book a post-storm check
- after: Price it: storm check
- why: matches the hero, sticky bar and services list "Price it"

### #h-rev h2
- before: What they said after the crew came down.
- after: What they said once we came down.
- why: shorter line so "DOWN." is not an orphan in the narrow column (critic should)

### #reviews .review__who (4 cards)
- before: Teresa V. · Glendale · Rooftop package unit replacement
- after: {{.name}}, {{.town}}. {{.service}}
- why: no middle dots in the ledger; apply the same pattern to the template line, all cards follow

### #area hours kicker
- before: Hours · Mon–Fri 5:30 am – 7 pm · Sat 6 am – 4 pm · Sun 7 am – 1 pm
- after: Hours: {{hours|today}}
- why: drop the middle dot after "Hours"; keep the single open-now span (it is nested twice in dist)

### #contact step legends (4)
- before: Step 1 · What's it doing?
- after: 1. What's it doing?
- why: same for "2. The system", "3. When", "4. Contact"; removes four more middle-dot labels
