# Copy Deck — consulting-C

## Hero
kicker: For owner-run shops in the Miami Valley
h1: What comes next for your shop
lead: Succession, exit and growth plans written in plain words. Walk the floor with us, see the numbers, and leave with a dated plan you can hand to someone.
zip-label: Check your ZIP
zip-placeholder: e.g. 45402
cta-primary: Start the conversation
cta-secondary: Call [[tel]]

## Trust strip
open-now: {{hours|today}}
years: {{proof.years}} years advising Dayton shops (Sample)
rating: {{proof.rating}} from {{proof.reviewCount}} owners (Sample rating)
areas: Serving {{biz.areas|list}}

## Services
kicker: What we write down together
h2: Eight ways to get the shop off your shoulders
[[each services]]
title: {{.name}}
blurb: {{.blurb}}
cta: Price it →
[[/each]]

## Break
caption: Brick and steel along the Great Miami

## Succession
kicker: Mile marker 12
h2: Who takes over, and when
lead: A timeline from today to the year you choose, with every step dated: numbers in order, jobs written down, the next person trained, advisors brought in.
tool-label: Build your succession timeline
sample-range: Sample range: {{proof.prices.0.from}} – {{proof.prices.0.to}}
cta: Start the timeline

## Reviews
kicker: From the valley
h2: What owners are saying
[[each proof.reviews 0:3]]
text: "{{.text}}"
author: — {{.name}}, {{.town}}
service: {{.service}}
[[/each]]
sample-tag: [[sample review]]

## Pricing
kicker: Plain numbers
h2: What an engagement costs
lead: Fixed scope, fixed fee, written before we start. Stop after any month and keep everything we wrote.
[[each proof.prices]]
item: {{.item}}
range: {{.from}} – {{.to}}
note: {{.note}}
[[/each]]
sample-tag: [[sample pricing]]
cta: Get my number

## Area
kicker: Where we work
h2: In person across the Miami Valley
lead: We come to your shop in {{biz.city}}, {{biz.areas.0}}, {{biz.areas.1}}, {{biz.areas.2}}, {{biz.areas.3}}, {{biz.areas.4}}, {{biz.areas.5}} and {{biz.areas.6}}.
zip-label: Type your ZIP
zip-yes: Yes — we work in your town. Start the conversation.
zip-no: We may still help by video. Call to ask.
towns: {{biz.areas|list}}

## FAQ
h2: Questions owners ask
q1: What happens in the first meeting?
a1: We walk your floor with you, write down where the work waits, and name the one thing to fix first. You leave with a dated next step, not a binder.
q2: How do we stop if it is not working?
a2: Stop after any month with no penalty. Keep every page we wrote together.
q3: Do you tell me to fire people?
a3: No. We write who does what so the shop runs on a day you are out. If a role needs to change, you decide, at your pace.
q4: What do I need to bring?
a4: Your last twelve months of numbers, a list of who does what today, and an hour on your calendar. We bring the worksheets.

## Contact
kicker: Let us talk
h2: Start the conversation
step-service: What do you need?
step-details: Tell us about the shop
step-when: When works?
step-contact: How do we reach you?
submit: Send it
microcopy: We will call you back to set up a visit.
thank-you: Thanks, {name}. In your version this goes straight to your phone and inbox.
phone-label: Or call now
hours-label: {{hours|today}}

## Footer
disclaimer: {{demo.disclaimer}}
nav: Services · Succession · Pricing · Area · Contact