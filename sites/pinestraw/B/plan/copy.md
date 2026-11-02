# Copy Deck — pinestraw-B

## Hero
- Kicker: Counted bales in {{biz.city}}
- H1: Pine straw measured, counted and ticketed before we unload
- Lead: Three inches fresh, about 35 square feet per bale. Your ticket shows the count before the truck is emptied.
- Proof line: {{hours|today}} · {{biz.city}}, {{biz.state}} · {{proof.rating}} [[sample rating]]
- CTA primary: Price my beds → #contact
- CTA secondary: Call [[tel]]

## ZIP Check
- Label: Check your ZIP
- Placeholder: e.g. 31601
- Yes result: We cover {{.}}. Book this count → form prefilled
- No result: We don't cover {{.}} yet. Call to ask about your street.

## Bale Counter Story
- Section kicker: The arithmetic
- H2: How many bales your beds actually need
- Lead: Pick your bed size or enter the feet. We count at three inches fresh, 35 square feet per bale.
- Tool labels: Bed size (Small foundation / Medium foundation / Long foundation / Custom), New spread or top-up
- Tool output: {{.}} bales · Sample range {{proof.prices.0.from}}–{{proof.prices.0.to}} per bale [[sample pricing]]
- CTA: Book this count → #contact (prefills service + bale count)
- Ticket strip: |||| BALE COUNT: {{.}}

## Needle Guide
- Section kicker: What you're buying
- H2: Longleaf holds the slope and stays red longer
- Card titles: Longleaf, Slash, Loblolly
- Card details: Needle length, color life (months), slope hold (good/fair/poor), sample price band
- CTA per card: Ask for longleaf → #contact (prefills service)
- Ticket strip: |||| NEEDLE: LONGLEAF

## Process
- Section kicker: The order of work
- H2: Rake, edge, weed, shake, tuck, blow
- Step verbs: RAKE OUT, CUT THE LINE, PULL WEEDS, SHAKE LOOSE, TUCK UNDER, BLOW CLEAN
- Step captions: Old straw cleared and bagged · Spade-cut bed line, measured in feet · Weeds pulled by hand, bags counted · Bale shaken, not dumped · Straw tucked against the cut edge · Walks and driveway blown off
- Ticket strip per step: |||| STEP {{#}} OF 6

## Services
- Section kicker: What we do
- H2: Every service, counted and ticketed
- Repeater: {{services}} with h3 {{.name}}, p {{.blurb}}, CTA [[quote {{.short}} btn-ghost | Price it]]
- Ticket strip: |||| SERVICES: {{services.length}}

## Reviews
- Section kicker: What homeowners count
- H2: Tickets checked, bales verified
- Rating line: {{proof.rating}} out of 5 · {{proof.reviewCount}} reviews [[sample rating]]
- Guarantee: {{proof.guarantee}}
- Review repeater: {{proof.reviews 0:3}} with text, name, town, service; each carries [[sample review]] tag
- Ticket strip: |||| REVIEWS VERIFIED: {{proof.reviewCount}}

## Pricing
- Section kicker: Sample numbers
- H2: What the ticket says
- Lead: Prices from recent Valdosta jobs. Your count may differ by bed shape and access.
- Price repeater: {{proof.prices}} with item, from–to, unit, note; all carry [[sample pricing]]
- Ticket strip: |||| PRICE SHEET: CURRENT

## Contact
- Section kicker: Get your number
- H2: Measure, count, book
- Open-now: [[data-open-now]]
- Form steps: Service → Job details → When → Contact
- Step labels: Which service? · Tell us about the beds · Pick a day · Your name and number
- Thank-you: Thanks, {name}. In your version this goes straight to your phone and inbox.
- Phone: Call [[tel]] · Text {{biz.phone}}
- Ticket strip: |||| BOOKING: PENDING

## Footer
- Disclaimer: {{demo.disclaimer}}
- Credits: [[credits]]
- Nav anchors: Services · Process · Pricing · Contact
- Hours: {{hours|table}}
- Final ticket: |||| END OF TICKET · BY