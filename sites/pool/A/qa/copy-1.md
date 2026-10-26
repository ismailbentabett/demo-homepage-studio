# pool-A copy, round 1 (fast)

`before` is the text as it appears in dist/index.html. `after` uses tokens. Builder: apply in src/index.html.
Em dashes after this pass: 0 (the hours line uses en dashes only).

## mustFix

### #reviews h2
- before: From real visits
- after: From sample visit reports
- why: mustFix. "Real" over Sample reviews contradicts the label. Also drop `mono section-stamp` from the h2 and set it in Sora; put the stamp in a kicker above it: `08:38 Reviews`

### #contact [data-thanks] h3
- before: Got it.
- after: Thanks, {name}.
- why: mustFix (DEMO-RULES §3). `{name}` is filled in by kit/lib/form.js

### #contact [data-thanks] p
- before: We will text you a window and a sample number shortly. If you need us sooner, <a class="tel-plain" href="tel:+18135550137">(813) 555-0137</a>.
- after: This is a demo, nothing was sent. On the real site this request goes straight to {{biz.short}}'s phone and inbox, with the service and the best time to reach you.
- why: mustFix. The success state was pretending the lead had been sent

### Image alt text (all 9 slots, mustFix)
The manifest alt is "Placeholder for …", so override it per slot with the macro's imgattrs (`alt="…"`) and the matching `data-fallback`. Each alt describes what the slot's frame shows, taken from niches/pool/media-queries.json.

| slot (key) | before | after |
|---|---|---|
| hero (hero-A2) | Placeholder for hero-A2 | Screened lanai pool at dusk, the cage frame throwing thin shadows across lit blue water |
| process-1 (brushing) | Placeholder for brushing | Pool brush working along a wall below the waterline |
| process-2 (test-vials) | Placeholder for test-vials | Test vials of pool water with chlorine and pH drops added |
| process-3 (chemicals) | Placeholder for chemicals | Chlorine tablets in a floater on clear pool water |
| process-4 (baskets) | Placeholder for baskets | Skimmer basket lifted out with wet leaves in it |
| break (waterline-tile) | Placeholder for waterline-tile | Blue waterline tile meeting the pool surface |
| story-1 (cloudy-water) | Placeholder for cloudy-water | Backyard pool with hazy, milky water and the floor barely visible |
| detail-1 (pump) | Placeholder for pump | Pool pump on a concrete equipment pad beside a house |
| detail-2 (tampa-neighborhood) | Placeholder for tampa-neighborhood | Florida residential street with single-storey homes and palm trees |

Hero video, if the builder adds it: aria-label "Slow pan across a screened pool at dusk, water lit from below". Pause button stays "Pause background video".

Order note: the process photos and card titles don't match. Card 1 "Skim & surface" has the brushing photo, and card 2 "Brush walls & tile" has the test vials. Shift the photos down one card: brushing on 08:09, test-vials on 08:15, chemicals on 08:15 as well or dropped, baskets on 08:22. Another option is to keep the photos where they are and retitle the cards to match. The alts above describe the photos, so they stay correct whichever card each photo ends up on.

## should

### #hero h1
- before: Weekly pool care,<br>written down.
- after: {{biz.city}} pool care,<br>written down.
- why: should #1. The place is now in the h1 (5 words, 2 lines), and "weekly" moves to the lead

### #hero kicker
- before: Tampa, Florida · Pool Service
- after: 07:58 Arrive
- why: should #2. This is the first stamp of the visit log, and the city is already in the h1

### #hero lead
- before: Same tech, same weekday, a photo and the readings after every stop. Sample range <span class="mono price-range">$140–$190 per month</span> <span class="sample-tag">Sample pricing</span>.
- after: Same tech on the same weekday. After every stop you get the time, the readings and a photo of your water. Sample range <span class="mono price-range">{{proof.prices.0.from}}–{{proof.prices.0.to}} {{proof.prices.0.unit}}</span> <span class="sample-tag">Sample pricing</span>.
- why: answers "did they even show up?" (the objection the reviews repeat). 21 words before the price

### #hero primary button
- before: Get my number
- after: Price my pool
- why: says what happens and names the object

### #promise h2
- before: One tech. One weekday.<br>A written report you can trust.
- after: One tech, one weekday,<br>and the readings in writing.
- why: should #6 / slogan ending. Cuts "you can trust" and keeps the claim concrete

### #promise lead
- before: No rotating crew, no mystery visits. You get a text with the time we arrived, what we added, and a photo of your water — every single week.
- after: No rotating crew, no mystery visits. After each stop you get a text with the time we arrived, what went in the water, and a photo of it.
- why: removes em dash 1 of 4 and drops "every single week" (the h2 already says weekday)

### #process h2
- before: 08:00 — Visit log
- after: 08:00 Visit log
- why: em dash 2 of 4. Set it in Sora like the other h2s and keep the time in mono only if the builder splits it into its own span

### #process card 4 p
- before: Skimmer and pump baskets emptied. Filter pressure checked — if it is high, we clean or backwash.
- after: Skimmer and pump baskets emptied. Filter pressure read on the gauge. If it is high, the cartridge gets cleaned or the sand gets backwashed.
- why: em dash 3 of 4, plus real nouns (gauge, cartridge, sand)

### Break section aria-label + caption
- before: Visual pause
- after: Waterline tile
- why: screen readers were announcing "Visual pause". Add a figcaption that describes the frame: `08:09 The tile line, where scale and algae show first.`

### #troubleshooter kicker (new, above h2)
- after: 08:30 Troubleshoot
- why: should #2, the stamp on every section

### #troubleshooter h2
- before: Cloudy water before the party?
- after: What is your water doing?
- why: works for all four symptoms, not only cloudy. It's one question with no stack

### #troubleshooter lead
- before: Tell us what you see and when it started. We will tell you the likely cause and what we would do first — no upsell, just the fix.
- after: Tick what you see. The likely cause and the first thing we would do show up below, before anyone books anything.
- why: em dash 4 of 4, slogan ending removed, matches what the tool actually does

### #troubleshooter result states (`[data-checklist-result]`, should #10)
- empty: Tick what you see. The likely cause shows here.
- cloudy: Cloudy or milky: usually low chlorine after rain, or a dirty filter. First: test, shock, clean the cartridge. Sample cleanup {{proof.prices.1.from}}–{{proof.prices.1.to}}.
- algae: Green or slimy walls: chlorine dropped long enough for algae to hold on. First: brush every wall and step, shock, run the filter until it clears.
- smell: Strong chlorine smell: usually used-up chlorine (chloramines), not too much of it. First: test free and total chlorine, then shock to burn it off.
- foam: Foam or scum line: sunscreen, oils or pollen sitting at the tile. First: skim, wipe the waterline tile, check the filter pressure.
- 2+ ticked: {n} signs at once. Worth a visit this week: tell us what you see below.
- why: the tool had no output. Print each line in the visit-card format (symptom, cause, first action), one line per ticked symptom

### #troubleshooter button
- before: Book a cleanup
- after: Price my cleanup
- why: names the outcome. It matches "Price it" on the price cards

### #pricing kicker + h2
- before: Sample pricing
- after: kicker `08:34 Price`, h2 (Sora, not mono) `Monthly service and one-time jobs`
- why: the mono h2 was weaker than the Sora h2s next to it. The Sample tags stay on the cards

### #pricing lead
- before: Monthly plans and one-time jobs, labelled sample. Your exact number comes after we see the pool.
- after: These ranges are samples. Your number comes after one look at the pool and the equipment pad.
- why: it repeated the new h2. "Equipment pad" is a real noun

### #repair list item
- before: Salt cell check and swap
- after: Leak detection, dye and pressure tests
- why: should #8. A salt cell isn't a service in facts. Use `{{services.7.name}}`

### #repair button
- before: Diagnose my equipment
- after: Check my pump
- why: shorter and more concrete. It still prefills "Pump & filter"

### #reviews proof-line tag
- before: Sample review
- after: Sample rating
- why: the tag sits on the 4.9 / 312 line, not on a review (the first of the 5 "Sample review" occurrences)

### #reviews meta + per-card tag (×4)
- before: Jennifer W. · Brandon · Weekly pool cleaning
- after: {{proof.reviews.0.name}}, {{proof.reviews.0.town}}. {{proof.reviews.0.service}}
- before: Raul C. · Riverview · Cloudy and algae cleanup
- after: {{proof.reviews.1.name}}, {{proof.reviews.1.town}}. {{proof.reviews.1.service}}
- before: Steve P. · Carrollwood · Pump and filter repair
- after: {{proof.reviews.2.name}}, {{proof.reviews.2.town}}. {{proof.reviews.2.service}}
- before: Donna R. · Lutz · Screen enclosure pool care
- after: {{proof.reviews.3.name}}, {{proof.reviews.3.town}}. {{proof.reviews.3.service}}
- per-card tag: keep it, but change the text "Sample review" to "Sample" and set it inline after the name rather than as a separate pill
- why: should #5. Drops the middle-dot meta strings and the pill on every card

### #area kicker + h2
- before: Service area
- after: kicker `08:40 Area`, h2 `Weekly routes around {{biz.city}}`
- why: should #2. The heading now says what's on offer, not just names the section

### #area lead
- before: Weekly routes through Tampa and Brandon, Riverview, Lutz, Valrico, Carrollwood, Apollo Beach and Wesley Chapel.
- after: Type your ZIP to see if your street is on a route. These are the towns we run each week.
- why: the town list moves into chips (next item), so the lead does a different job

### #area note → chips
- before: ZIPs covered: see checker above or text us.
- after: chip list beside the checker: `{{biz.city}}`, `{{biz.areas.0}}`, `{{biz.areas.1}}`, `{{biz.areas.2}}`, `{{biz.areas.3}}`, `{{biz.areas.4}}`, `{{biz.areas.5}}`, `{{biz.areas.6}}`
- why: should #7. Cuts the limp line

### #area ZIP button + answers
- before: Check
- after: Check my ZIP
- ZIP yes (`data-zip-yes`): {zip} is on a weekly route. Tell us about the pool and we will give you a weekday.
- ZIP no (`data-zip-no`): {zip} is off our routes for now. Call {phone} and we will tell you who to try.
- ZIP invalid: keep the kit's "Enter a 5-digit ZIP code."

### #contact kicker (new)
- after: 08:42 Book
- why: should #2, the stamp chain

### #contact submit
- before: Send
- after: Send my request
- why: says what happens. Never "Submit"

### #contact hours line
- before: <span data-open-now></span> · <span data-open-now>Mon–Fri 7 am – 5 pm · Sat 8 am – noon</span>
- after: <span data-open-now></span> <span>Mon–Fri 7 am–5 pm, Sat 8 am–noon, Sun closed</span>
- why: should #9. Removes the orphan "·" and the second `data-open-now`, which was overwriting the hours (from `{{biz.hours}}`)

### Footer stamp
- before: End of log · 2026
- after: 08:45 Report sent. End of log.
- why: closes the visit-log chain from 07:58 Arrive

### Mobile bar primary
- before: Text us
- after: Text {{biz.short}}
- why: it names who you're texting and keeps the sms: link
