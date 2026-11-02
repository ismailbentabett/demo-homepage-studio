# Copy deck — farm-A

## Header
- Trade label: {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}
- Open-now: data-open-now (kit fills)
- Nav: What's Ripe · CSA · Beef · Reviews · Reserve
- CTA: [[call]]

## Hero
- Kicker: Picked at first light
- H1: On the stand by ten
- Lead: We pick at first light because a peach cut at two is soft by supper. See what's ripe this week, then call or text.
- Primary button: See what's ripe → #ripe
- Secondary: [[tel]]
- Clock stamp: 5:45 PICK## Process (#process)
- H2: The morning clock
- Lead: Every hour has its job. By ten, what left the field at dawn is cooled, washed and on the table.
- Step 1 (7:15): Eggs gathered before eight, hens moved to fresh grass
- Step 2 (8:00): Cooled and washed in the shed
- Step 3 (9:30): CSA boxes packed with a note on cooking it
- Clock stamps: 7:15 EGGS · 8:00 COOLED · 9:30 PACKED

## Ripe this week (#ripe)
- H2: Ripe this week
- Lead: Updated each morning. Text us before you drive if you're coming far.
- Board items (sample): Strawberries — picked today · Peaches — coming next week · Okra — done for the year
- CTA: Text before you drive → sms:{{biz.phoneE164}}
- Clock stamp: 10:00 ON THE STAND
- Sample tag: [[sample board]]

## Services (#services)
- H2: What we grow and raise
- Lead: Nine things from our fields and pastures, each in its own Midlands month.
- Card titles + blurbs: from facts.services via repeater
- Card CTA: [[quote {{.short}} btn-ghost | Price it]]

## CSA shares (#csa)
- H2: A box every week, sized right
- Lead: Half or full, twelve weeks, with a note on how to cook what's inside. Hold a week for the beach with one text.
- Tool label: Share sizer
- Tool inputs: People at home · How often you cook
- Tool output: Recommended share + sample week box + price range
- Price line: Half share {{proof.prices.0.from}}–{{proof.prices.0.to}} · Full share {{proof.prices.1.from}}–{{proof.prices.1.to}}
- Guarantee: {{proof.guarantee}}
- CTA: Reserve your share → #contact (data-service="CSA shares")
- Sample tag: [[sample pricing]]
- Clock stamp: 9:30 PACKED

## Grass-fed beef (#beef)
- H2: Quarter or half, wrapped and labelled
- Lead: Quarters and halves, wrapped by cut, picked up on a set Saturday. We explain hanging weight without making you ask twice.
- Tool label: Freezer math
- Tool inputs: Quarter or half · Your freezer size
- Tool output: Take-home pounds + fits/tight/too big + sample price
- Price line: Quarter {{proof.prices.4.from}}–{{proof.prices.4.to}} · about 100 lb take-home
- CTA: Reserve a pickup date → #contact (data-service="Grass-fed beef")
- Sample tag: [[sample pricing]]
- Clock stamp: 14:00 PICKUP

## Proof (#proof)
- H2: From people who drove here
- Lead: Sample reviews from Lexington, Irmo, Forest Acres, Blythewood, Chapin and Cayce.
- Review cards: <!-- each proof.reviews 0:4 --> "{{.text}}" — {{.name}}, {{.town}} · {{.service}}
- Rating line: {{proof.rating}} stars · {{proof.reviewCount}} reviews · [[sample review]]
- Clock stamp per card: VISITED AT [hour]

## Prices (#prices)
- H2: Sample prices
- Lead: Ranges from last season. Current prices on the stand board or by text.
- Table rows: <!-- each proof.prices --> {{.item}} · {{.from}}–{{.to}} · {{.note}}{{.unit}}
- Sample tag: [[sample pricing]]

## Farm tours (#tours)
- H2: An hour in the rows
- Lead: For families and classes. See the hen pasture, the wash shed and the peach rows. Best months: April, June, October.
- CTA: Book a tour → #contact (data-service="Farm tours")
- Clock stamp: 10:00 WELCOME

## Contact (#contact)
- H2: Reserve or ask
- Lead: Tell us what you need and when. We text back within the day.
- Form steps: Service → Details → When → Contact
- Thank-you: Got it. We'll text you within the day to confirm.
- ZIP checker label: Check your ZIP
- ZIP result yes: You're in our area. Reserve below.
- ZIP result no: We don't reach your ZIP yet. Call to ask about delivery points.
- Hours heading: Stand hours
- Hours: {{hours|table}}
- Open-now: {{hours|today}}
- Clock stamp: 18:00 STAND CLOSES

## Footer
- Disclaimer: {{demo.disclaimer}}
- Credits: [[credits]]
- Links: What's Ripe · CSA · Beef · Reviews · Reserve
- Phone: [[tel]]
- Reset stamp: 5:45 TOMORROW