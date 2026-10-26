# pest-B · copy fixes, round 1

`before` is the exact text in dist/index.html. `after` uses tokens and goes into src/. Where a line comes from a `{{#each}}` template, edit the template once.
Em dashes on the page after these edits: 0 (the review meta and footer log row were the only ones). En dashes in the hours stay as they are.

## Must-fix (copy)

### #contact .form-thankyou (mustFix 4)
- before: Request received.
- after: This is a demo, nothing was sent.
- why: the demo form was pretending it sent (DEMO-RULES)

### #contact .form-thankyou second line
- before: We'll be in touch shortly.
- after: On the real site this goes to {{biz.short}}. To book today, call <a class="tel-plain" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>.
- why: honest close, and it still gives a way to act. Also set `data-thanks` on the form to the same two sentences, so the kit's thank-you box can't fall back to its default wording.

### #hero figure alt + data-fallback (mustFix 3)
- before: Daylight crawlspace entry under a coastal Carolina house
- after: Crawlspace entry under a raised house
- why: wrong region on a {{biz.city}} site. Remove the second duplicate `data-fallback` attribute. When the media plan swaps the hero frame (mustFix 2), write the alt from the new frame using this same plain, region-neutral wording.

### .break figure alt + data-fallback (mustFix 3)
- before: Crawlspace house in a leafy Wilmington-like neighborhood
- after: Raised house on piers with a front porch
- why: wrong region. Remove the duplicate `data-fallback`. If the approved frame turns out to be something else, describe that frame instead.

### .break__caption (mustFix 3)
- before: Raised house with porch in South Louisiana; foundation type where bait stations are placed.
- after: Raised on piers. The crawlspace gets a flashlight and a probe on every visit.
- why: the old caption described a frame that isn't shown. This one only works if the frame really is a raised house. If it isn't, write one line that describes the frame you actually place.

## Should (copy)

### #hero .lead (proof line runs 3 lines, middle dots)
- before: 4.8 stars · 309 Sample reviews · Serving Zachary, Denham Springs, Prairieville, Gonzales, Central, Baker, Port Allen and Walker
- after: Numbered stations around your house, read on every visit and written on a dated log you keep. Liquid or bait, priced side by side before you pick.
- why: answers the first objection ("what am I paying for every year?") in 26 words. The town list moves to the ZIP band.

### #hero (new line under .hero__ctas, all sizes)
- before: (none, add after `.hero__ctas`)
- after: <p class="hero__call">{{proof.rating}} stars from {{proof.reviewCount}} Sample reviews. Or call <a class="tel-plain" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>, Mon–Fri from 7 am.</p>
- why: the critic flagged no phone on either first screen. Keep the proof line here as plain sentence case, not mono.

### header (new link right of nav, ≥ 900px)
- before: (none, add before `.header__cta`)
- after: <a class="header__tel" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>
- why: no phone in the header

### #hero .kicker
- before: Every station checked, every visit logged
- after: (delete the element)
- why: it was one of 3 tracked caps strings in the first view, and the log row under the buttons already makes this point

### #hero .log-row (4 spans)
- before: Sample visit | ST-04 | Bait read | No hits
- after: Sample · May 14 | BR-04 | Bait read | No hits
- why: the log needs a date and the same BR- numbering the rest of the page uses (ST-04 didn't match)

### #zip .section__title
- before: Check your ZIP
- after: Check your ZIP before you book
- why: says why the box is here

### #zip (new line under the h2, fills the empty width)
- before: (none)
- after: <p class="zip__areas">We cover {{biz.city}} and {{biz.areas|list}}.</p>
- why: puts the served areas next to the check, as the critic asked. The town list was cut from the hero.

### #zip .zip__btn
- before: Check
- after: Check my ZIP
- why: the button says what happens

### #zip [data-zip] attributes (yes / no answers)
- before: (kit defaults)
- after: data-zip-yes="Yes, {zip} is on our route. Book an inspection and we'll set the first visit." data-zip-no="{zip} is outside our usual route. Call {{biz.phone}} and we'll tell you straight."
- why: wording matches the voice. The invalid answer stays as the kit default ("Enter a 5-digit ZIP code.")

### #zip .log-row
- before: ZIP | CHECK | RESULT | NEXT
- after: (delete the element)
- why: an empty header row that only looked unfinished

### #compare .lead
- before: Two ways to protect a slab or raised house. Both carry a retreat guarantee.
- after: Liquid is a barrier trenched and rodded into the soil in a day. Bait is numbered stations, read every visit. Either one can sit under a contract with a retreat.
- why: says what each one physically is, in the trade's nouns. Also drops the word "guarantee", which isn't the facts' wording.

### #compare legend 2
- before: Wells or water nearby
- after: Well, pond or ditch near the house
- why: real things a {{biz.city}} yard has. Sentence case.

### #compare legend 3
- before: Yearly monitoring preferred
- after: Want stations read every visit
- why: plain words, not form-speak

### #compare .log-row 1 (4 spans)
- before: VISIT | LIQUID | TRENCH | ROD SOIL
- after: Sample · Mar 3 | Perimeter | Trenched and rodded | Barrier done
- why: was column words with no date or reading. Now it reads like a log entry.

### #compare .log-row 2 (4 spans)
- before: VISIT | BAIT | READ STATION | REPLACE CAP
- after: Sample · May 14 | BR-07 | AC pad: hits | Bait replaced
- why: a real reading, and it lines up with the station 7 Sample review

### #compare CTA
- before: Ask which fits your house
- after: Price liquid and bait for my house
- why: says what the visitor gets

### #services (9 × "Price it")
- before: Price it
- after: (delete from each `.svc-card`; add one button under the grid) Price a service for my house
- why: nine identical buttons made the wall-of-services shape and 9 extra taps on mobile. The `data-service` prefill can move to a click on the card title.

### #plan-cost .lead
- before: Pick what you need. The yearly range updates as you choose.
- after: Tick what your house needs. The sample yearly range adds itself up below.
- why: tighter, and says where the result shows up

### #plan-cost .estimator__total (empty state)
- before: Select options above
- after: Pick a termite plan or a service to see your yearly range.
- why: an empty state that tells you what to do

### #plan-cost checkbox 1
- before: Contract renewal
- after: Termite contract renewal
- why: names what is being renewed

### #plan-cost mosquito month label
- before: April
- after: Apr
- why: matches May, Jun… (the tabs in #mosquito keep their own fix below)

### #plan-cost .log-row
- before: PLAN | ITEMS | RANGE | SAMPLE
- after: (delete the element)
- why: column words with no reading in them

### #mosquito .lead (price lives here once)
- before: Monthly yard treatment from spring to first frost.
- after: One yard treatment a month, April to first frost. {{proof.prices.3.from}}–{{proof.prices.3.to}} a visit.
- why: the price is said once, outside the tabs. Keep a `Sample pricing` tag right after it.

### #mosquito #panel-apr
- before: Yard sprayed for shade and standing water. Per-visit sample price $65–$95. Sample pricing
- after: First visit as the yard warms. Shrubs, the fence line and the shady side of the house get treated.
- why: the old line was the same sentence 7 times. Delete the per-panel price and Sample tag in all 7 panels.

### #mosquito #panel-may
- before: (same text as above)
- after: Rain fills plant saucers, buckets and clogged gutters. Each one found goes on the ticket.

### #mosquito #panel-jun
- before: (same)
- after: In the heat they rest in the shade under decks and along the ditch. That's where the treatment goes.

### #mosquito #panel-jul
- before: (same)
- after: Afternoon storms refill the low spots. The ticket lists each one found that visit.

### #mosquito #panel-aug
- before: (same)
- after: Same yard, same shade. The ticket notes anything that changed since July.

### #mosquito #panel-sep
- before: (same)
- after: Storm rain sits in tarps, boats and low corners. Each one gets checked.

### #mosquito #panel-oct
- before: (same)
- after: Last visit before first frost. The ticket closes out the season.

### #mosquito CTA
- before: Book mosquito season
- after: Book mosquito visits
- why: names the thing you're actually booking

### #proof .section__title + new lead
- before: From the log
- after: From the log · add `<p class="lead">Sample reviews from {{biz.city}} and nearby towns, each pinned to the station or visit it came from.</p>`
- why: the heading had nothing under it

### #proof .guarantee
- before: If termites show up in a treated area during your contract, we retreat at no charge.
- after: Retreat terms: {{proof.guarantee}}
- why: labels it as the contract term, not a log entry

### #proof .license
- before: License SAMPLE-LA-57106 · 19 years in Louisiana
- after: License {{proof.license}}. {{proof.years}} years on the job.
- why: "in Louisiana" is not in the facts. Drops the middle dot.

### #proof review text (template `"{{.text}}"`, all 7)
- before: "The renewal came with a printed log of every station and every visit for the year. Station 7 by the AC pad had hits in May, and they showed me what they did about it."
- after: “{{.text}}”
- why: curly quotes in the template fix all 7 reviews

### #proof review meta (template, all 7)
- before: — Monica L., Prairieville · Bait station monitoring
- after: {{.name}} in {{.town}}, {{.service}}
- why: takes out 7 em dashes and 7 middle dots

### #process .section__title + new lead
- before: How a visit reads
- after: How a visit reads · add `<p class="lead">Four lines on every ticket, in the order the work gets done.</p>`
- why: the heading sat over four empty boxes with no text

### #process (four rows, one per frame; these are text rows, not captions)
- before: (none)
- after:
  1. Arrive · Walk the foundation with a flashlight and a probe. Mud tubes get marked where they are.
  2. Read · Every station opened, every reading written down by number.
  3. Treat · Only where a reading says so, with the product named on the ticket.
  4. Leave · A dated ticket with what was used, where, and the re-entry time from the label.
- why: makes the band a visit log, as the critic suggested. Frame alts stay as they describe their own frames.

### #contact step buttons
- before: Next (step 1) / Next (step 2) / Next (step 3)
- after: Next: house type / Next: details / Next: your number
- why: each button says where it goes

### #contact step 3 label
- before: Closing date (if applicable)
- after: Closing date, if you need a termite letter
- why: uses the buyer's own word for the WDI report

### #contact .form-submit
- before: Send request
- after: Send my request
- why: matches the kit and reads in the buyer's voice

### #contact .form-microcopy
- before: We'll call you back to set up a visit.
- after: {{biz.short}} calls you back to set a visit time.
- why: concrete. The thank-you carries the demo wording.

### #contact-footer closing .log-row (4 spans)
- before: Next visit | — | scheduled | —
- after: Next visit | BR-01 to BR-12 | All stations read | Scheduled
- why: the stray dashes are gone and the row closes the log

### .mobilebar (add Call, rename Book)
- before: Book
- after: <a class="btn btn-secondary mobilebar__call" href="tel:{{biz.phoneE164}}">Call</a> + Book a visit
- why: no phone on mobile. The bar needs both actions.
