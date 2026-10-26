# Copy Deck — pest-B

## Hero
- Kicker: Every station checked, every visit logged
- H1: Termite & Pest Control in {{biz.city}}
- Lead: {{proof.rating}} stars · {{proof.reviewCount}} Sample reviews · Serving {{biz.areas|list}}
- CTA primary: Book an inspection
- CTA secondary: Compare liquid vs bait
- Log row sample: Sample log — scroll to see entries

## ZIP
- H2: Check your ZIP
- Label: Enter your ZIP code
- Placeholder: e.g. 70806
- Result served: Yes — we serve your area. Book an inspection below.
- Result not served: We do not serve that ZIP yet. Nearest served area: {{biz.areas.0}}.
- Log row: ZIP · CHECK · RESULT · NEXT

## Liquid vs Bait (compare-story)
- H2: Liquid vs Bait
- Lead: Two ways to protect a slab or raised house. Both carry a retreat guarantee.
- Tool label house type: House type
- Tool option slab: Slab on grade
- Tool option crawlspace: Crawlspace
- Tool option raised: Raised on piers
- Tool label wells: Wells or water nearby
- Tool label monitoring: Yearly monitoring preferred
- Output heading liquid: Liquid treatment
- Output heading bait: Bait station system
- Liquid description: Trenched and rodded around the foundation. Works as a barrier. One-day application.
- Bait description: Numbered stations around the perimeter. Monitored each visit. Colony eats and carries bait back.
- Sample price liquid: From {{proof.prices.1.from}} to {{proof.prices.1.to}} · {{proof.prices.1.note}}
- Sample price bait: From {{proof.prices.2.from}} to {{proof.prices.2.to}} · {{proof.prices.2.note}}
- Hand-off button: Ask which fits your house
- Log rows:
  - VISIT · LIQUID · TRENCH · ROD SOIL
  - VISIT · BAIT · READ STATION · REPLACE CAP

## Break
- Caption: Raised house with porch in South Louisiana; foundation type where bait stations are placed.

## Services
- H2: What we check and treat
- Card pattern: station badge BR-{{#2}}, h3 {{.name}}, p {{.blurb}}, CTA [[quote {{.short}} btn-ghost | Price it]]

## Plan Cost
- H2: Build your plan
- Lead: Pick what you need. The yearly range updates as you choose.
- Label termite plan: Termite plan
- Option none: None
- Option liquid: Liquid treatment
- Option bait: Bait stations
- Label renewal: Contract renewal
- Label quarterly: Quarterly pest visits
- Label mosquito: Mosquito months
- Output label: Sample yearly range
- Hand-off button: Get this plan in writing
- Log row: PLAN · ITEMS · RANGE · SAMPLE

## Mosquito
- H2: Mosquito season
- Lead: Monthly yard treatment from spring to first frost.
- Tab labels: Apr · May · Jun · Jul · Aug · Sep · Oct
- Panel text: Yard sprayed for shade and standing water. Per-visit sample price {{proof.prices.3.from}}–{{proof.prices.3.to}}.
- Hand-off button: Book mosquito season

## Proof
- H2: From the log
- Guarantee: {{proof.guarantee}}
- License line: License {{proof.license}} · {{proof.years}} years in {{biz.stateName}}
- Review pattern: station pill, {{.stars}} stars, "{{.text}}" — {{.name}}, {{.town}} · {{.service}} [[sample review]]

## Process Strip
- H2: How a visit reads
- Captions from media plan gallery slots

## Contact + Footer
- H2: Book an inspection
- Form step labels: Problem · House type · Closing date · Photos · Contact
- Microcopy under submit: We'll call you back to set up a visit.
- Open now text: {{hours|today}}
- Phone label: Call [[tel]]
- Email label: Email {{biz.email}}
- Areas label: Serving {{biz.areas|list}}
- Footer credits: [[credits]]
- Disclaimer: {{demo.disclaimer}}
- Copyright: © {{year}} {{biz.name}}
- Final log row: Next visit: scheduled.