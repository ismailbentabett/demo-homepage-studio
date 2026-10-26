# pest-C copy, round 1 (fast)

h1 stays as it is: "Formosan termites in {{biz.city}}" (5 words, pest + town, 2 lines at 390).

## Must

### #proof .kicker
- before: From real porches
- after: Sample reviews, {{biz.city}}
- why: mustFix. Called Sample reviews "real". This is the critic's exact replacement.

### #proof .lead
- before: Sample reviews from New Orleans homeowners.
- after: Written the way people here describe a swarm night. Names and stories are samples.
- why: the kicker now says "Sample reviews", so repeating it is wasted. The new line keeps the demo honest without a second "real" implication.

## Should

### #hero .proof-line (src line 58)
- before: Sample Formosan plan renewal $275–$475/per year ·  · Serving Metairie, Kenner, Gretna, Chalmette, Harvey, Arabi and River Ridge
- after (src): Sample Formosan plan renewal {{proof.prices.3.from}}–{{proof.prices.3.to}} a year · Serving {{biz.city}} and {{biz.areas|list}}
- why: "/per year" fixed to "a year". Dropped the `<span data-open-now></span>` because the header already shows it, which brings the line down to 2 at 1440.

### #services link ×9 ("Price it", src lines 823–879, keyed by data-service)
- before: Price it
- after, by data-service:
  - Formosan plan: Price my Formosan plan
  - Inspection: Book an inspection
  - Treatment: Price liquid or bait
  - Wood damage: Book a damage check
  - Roaches: Ask about roaches
  - Mosquitoes: Price yard visits
  - Roof rats: Ask about roof rats
  - Ants: Ask about ants
  - Swarm visit: Book a swarm visit
- why: nine identical "Price it" links read as a template. Each label now says what happens, and every link still goes to #contact.

### #prices .est-total (initial state)
- before: Sample yearly range: —
- after: Tick a plan above to see a sample yearly range.
- why: "—" looked like a broken result. If the estimator module overwrites the text on load, put this in its empty-state option instead.

### Kickers: keep 2 (hero, #proof); remove the `<p class="kicker">` element on the rest
- before: Tonight's window → after: (remove)
- before: Your house type → after: (remove)
- before: What we do → after: (remove)
- before: Sample prices → after: (remove). The h2 and lead already say "sample", and the table has its own Sample tag.
- before: The promise → after: (remove)
- before: Service area → after: (remove)
- before: Book the visit → after: (remove)
- why: the critic flagged the mono eyebrow on every heading. Each h2 reads fine on its own.

## Raise the score

### #hero .lead
- before: Swarmers gather at dusk from late April through June. We check your lights, windows and eaves that same evening.
- after: Swarmers at the porch light don't always mean they're in the walls. A May evening visit checks your lights, windows and eaves and tells you which.
- why: answers the buyer's first fear (is my house infested?). Also drops "that same evening", a promise that isn't in facts. 26 words.

### #house-types .lead
- before: Shotgun, Creole cottage, camelback or slab — each has its own entry points. The inspection checks them by name.
- after: Shotguns, Creole cottages, camelbacks and slabs each let termites in somewhere different. The inspection checks yours by name.
- why: removes one of the 2 em dashes on the page and puts the plural nouns up front.

### #services h2
- before: Named plainly
- after: Termites first, then the rest
- why: "Named plainly" is a label about the copy rather than the job. The new h2 shows the order of the list (Formosan plan down to ants).

### #services .lead
- before: Every service says what is applied and where. The product label stays with you.
- after: Each visit ends with what was applied and where. You keep the product label.
- why: tighter, and the second clause is concrete.

### #prices .lead
- before: Ranges from past jobs in New Orleans, labelled sample. Your number comes after the inspection.
- after: Sample ranges for {{biz.city}} houses. Your number comes after someone has been under the house.
- why: "past jobs" implies a job history the fictional business doesn't have. The new ending uses the piers/crawlspace image from brief §2.

### #contact .lead
- before: We'll call you back to set up a visit.
- after: Four quick steps. {{biz.short}} calls back to set the visit.
- why: sets the effort of the 4-step form. The h2 already asks the question. (This string shows twice in the built page, once in the section head and once in the form. Change both.)

### #contact thank-you h3
- before: Request received
- after: Demo only, nothing was sent
- why: DEMO-RULES says the thank-you text must be honest.

### #contact thank-you p
- before: We'll call you within one business day to confirm the time.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the old line promised a response time that isn't in facts. This is the required honest text.

### #reviews quotes (all 6)
- before: "Mother's Day weekend the swarmers … (straight " … ")
- after: “{{proof.reviews.N.text}}” (curly “ ” in the template around the token)
- why: typography should from the critic. Change the template once and it fixes all 6.

### .footer__clock
- before: Dusk clock reset · 9:30 pm
- after: 9:30 pm. Porch light back on.
- why: ends the dusk story with an image instead of a system message.
