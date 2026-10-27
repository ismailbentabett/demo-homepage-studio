---
name: copy-craft
description: How the demo homepages are written - the contractor's voice, h1/lead/button formulas, real trade nouns, answering objections, honest sample proof, captions, banned words and structures, and before/after examples. Use when writing plan/copy.md, the qa/copy-N.md replacements, any visible string in src/index.html, or fixing a copy score under 9.
---

# Copy craft

The page sounds like the best contractor the homeowner ever hired: short, specific, calm, a little
dry. Specific beats clever. One detail beats three adjectives.

## Formulas
- **h1** (≤ 9 words, ≤ 2 lines at 1440): trade or outcome + town or promise.
  "Roofs in Tulsa, priced on the first visit." · "Hot water back by tonight in Mesa." ·
  "Fences built to the survey line, not the guess."
- **Lead** (≤ 28 words): answers the buyer's first fear from brief §1, in their words.
  "We photograph every problem before we quote, so you see what we see. Written price, start date,
  and a crew that leaves the driveway cleaner than they found it."
- **Proof line** under the h1: facts only, `·` separated: hours · area · Sample rating.
- **Buttons say what happens:** "Call (918) 555-0104" (via `[[call]]`), "Price my roof", "Check my ZIP",
  "Book a look", "Send my details". Never "Submit", "Learn more", "Get started", "Click here", "Contact us".
- **h2**: a claim or a question the homeowner asks, never a label. Not "Our Services" → "What we fix,
  and what it usually costs." Not "Testimonials" → "What neighbours in Jenks said (sample reviews)."
- **Card**: title = the homeowner's name for the problem ("Leak in the ceiling"); line = what we do
  and what you get, 8-18 words.

## Vocabulary
Use brief §2's pairs: the homeowner word in headings ("water stain on the ceiling"), the pro word in
the detail ("usually failed flashing at the chimney"). That pairing reads as expertise without jargon.
Real nouns: drip edge, valley, P-trap, condenser coil, GFCI, stringers, footing, grout haze, R-value.

## Honesty rules (DEMO-RULES §4-§6)
- Facts only from tokens: `{{biz.*}}`, `{{services.*}}`, `{{proof.*}}`. Never a literal number, price, year.
- Reviews, rating and prices always with a Sample tag nearby (`[[sample review]]`, `[[sample pricing]]`).
- No invented award, certification, "licensed and insured" unless `proof.insured`, no "since 19xx"
  except `{{proof.years}}`, no "#1", "best in", "guaranteed lowest".
- Captions describe the frame: "Ridge cap shingles going on at dusk." Never "our work", "our team",
  "our crew", "a recent project", "before / after".
- The form's thank-you: "This is a demo, nothing was sent. On the real site this goes straight to
  {{biz.short}}." Never pretend to send.

## Banned (check-static flags most of these)
Words: quality you can trust, top-notch, second to none, one-stop shop, look no further, we've got you
covered, peace of mind (unless followed by what gives it), passionate, dedicated team, cutting-edge,
state-of-the-art, seamless, elevate, unleash, transform your, dream home, nestled, tailored solutions.
Structures: tricolons ("Fast. Fair. Friendly."), stacked rhetorical questions, slogan endings
("…because you deserve the best."), exclamation marks, "Welcome to…", more than 3 em dashes on the page,
every heading ending in a period-fragment pair.

## Rewrites
- "Quality Roofing Services You Can Trust" → "Roofs in {{biz.city}}, priced on the first visit."
- "We are a family-owned company dedicated to excellence." → "Two trucks, one owner who still climbs
  the ladder on every estimate." (only if `familyOwned`)
- "Contact us today for a free estimate!" → "Tell us the street and the problem. You'll have a written
  number by tomorrow evening."
- "Our team of experts" → "The person who quotes it is the person who runs the job."

## Sections that sell (each answers one objection)
Price fear → estimator with sample ranges. "Will they show up" → hours, open-now, ZIP checker. "Will
they mess my house" → the process steps with the cleanup step named. "Are they real" → Sample reviews
with town + service, licence line, guarantee in one plain sentence.

## Check before writing it down
Read each line aloud as the owner on the phone. If he wouldn't say it, cut it.
