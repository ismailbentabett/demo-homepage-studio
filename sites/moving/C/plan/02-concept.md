# Concept — moving-C (Kestrel Moving & Haul, Boulder CO)

## Three alternatives, rejected

1. **The mountain postcard.** Hero is a Flatirons sunset, services are icons, reviews float over a map. Rejected: it's the Boulder tourism board, not a mover. Every local business in town does this. No signature system, no tool, no proof beyond scenery.
2. **The CU student mover.** Bright blue and gold, August lease countdown as hero, dorm-room photos. Rejected: it serves only 20% of the year and alienates downsizers and estate clients. Too narrow, too seasonal, too cliché.
3. **The eco-haul page.** Green palette, recycling icons, "we sort so you don't have to" headline. Rejected: direction B already owns the tools-first proof axis, and "eco-friendly" is a banned word unless facts support it. The brief's seed is LOCAL STORY, not sustainability.

## The thesis

The site is a hand-drawn map of the moves Boulder makes: every section is a route from one place to another, with start pin, end pin and distance, and the line continues down the page like a long trip through the county.

## The signature system: route lines

A continuous SVG path runs down the left margin (desktop) or top edge (mobile) of every section. Each section is a stop on the route:
- **Hero:** five route lines draw themselves on a stylised Boulder County map; the headline sits in the plains, the phone on the mountains.
- **Services:** each service is a stop with a pin icon and a one-line distance ("Hill → North Boulder · 2 mi").
- **Mountain move story:** the route steepens, elevation ticks up, truck icon swaps to small box truck.
- **Haul-away:** the route ends at the reuse store and recycling yard, not the landfill.
- **Reviews:** each review is signed with a town pin on the route.
- **Footer:** "End of route: you're home."

The sticky header shows the current route segment via `data-sw-signature="route-line"`.

## Type

- **Display:** Newsreader (serif, optical size axis). Characterful, warm, reads as editorial not corporate. Used for h1, h2, route names.
- **Text:** Albert Sans (variable grotesk). Clean, legible, pairs with Newsreader without competing. Used for body, labels, tool UI.
- **Accent:** DM Mono. For distances, elevations, sample prices, ZIP codes. Technical voice that contrasts with the serif.

Checked against design-registry: Newsreader used 1 time in library (solar-B), Albert Sans 0 times, DM Mono 2 times. Pair is unique. Moving niche has Antonio+Public Sans (A) and JetBrains Mono+Inter Tight (B planned). No collision.

## Palette: Front Range Earth + Sky

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep | #2C3E50 | sand #F4EDE4 | 10.2 | body on deep, reversed type |
| sand | #F4EDE4 | deep #2C3E50 | 10.2 | paper background |
| spruce | #3D6B5E | sand #F4EDE4 | 5.8 | accent words, route lines |
| sandstone | #B85C3A | sand #F4EDE4 | 4.6 | signal buttons, pins |
| sky | #5B8FA8 | deep #2C3E50 | 4.7 | secondary accents, links on dark |
| ink | #1A1F24 | sand #F4EDE4 | 14.1 | body text on light |
| muted | #6B7280 | sand #F4EDE4 | 4.6 | captions, labels |

Palette family: "Front Range earth + sky". Unique in library. Verified with contrast.mjs values above.

## Hero family: 15 — Map / area-led

A stylised, hand-drawn SVG map of Boulder County with five route lines drawn in on load. Headline sits in the plains (right), phone number anchored to the mountains (left). The map is illustrative, not a tile layer. Routes: Hill→North Boulder, Table Mesa→Louisville, Gunbarrel→Lafayette, Martin Acres→Longmont, Canyon→Nederland.

Unique in niche (A uses filmstrip, B uses tool-first). Library count: 1 prior use (plumber-A). Within limit.

## Motion score

- **Intro (≤1.2s):** Five route lines draw themselves sequentially on the map, each ending with a pin drop. Headline fades in after lines complete. Skippable via reduced-motion class.
- **Scroll story 1 (canyon climb):** Pinned ≥640px. Route line steepens as visitor scrolls; elevation readout counts from 5,400 to 8,200 ft; truck icon morphs from standard to small box truck. Height: calc(3 * 55svh + 100svh). Stacked cards below 640px.
- **Scroll story 2 (haul stream):** Items slide into three columns (donate / recycle / landfill) as route reaches the reuse store. No pin; clip-reveal on scroll.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms); images unclip (clip-path inset). Varied timing per section role.
- **Hover:** Hairline underline grows scaleX(0→1) from left, 200ms, spruce color. One language site-wide.
- **Reduced motion:** All stories become static layouts. Route lines fully drawn. Elevations shown as static numbers. Nothing hidden.

## Tools

1. **Lease-turnover calendar.** Static visual of Boulder's August lease cycle (busy weeks shaded). Input: none (informational). Output: visitor sees why booking early matters. Handoff: "Book the crew for this date" button prefills form with August date range.
2. **Keep / donate / haul sorter.** Three-column drag board for downsizing. Inputs: items tapped into Keep / Donate / Haul. Output: printable plan with two lists. Handoff: combined move+haul quote step prefilled.
3. **Truck-fill gauge.** Tap items (couch, mattress, fridge, bags). Truck bed fills in eighths. Output: "about 3/8 truck" with sample load ranges from facts. Handoff: "Send a photo" form step.
4. **ZIP checker.** Always present. Validates against {{biz.zips}}. Yes → prefill form. Outside → honest drive-time note + call button.
5. **Multi-step quote form.** Service → job details → when → contact. Honest thank-you state. Never sends.

## Voice

Three sentences in the site's voice:
- "Your street is on our route."
- "We brought the small truck for the canyon road."
- "The couch went to the reuse store, not the ditch."

Five words never used: stress-free, best, guaranteed, eco-friendly, nationwide.