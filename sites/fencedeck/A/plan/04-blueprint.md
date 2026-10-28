# fencedeck-A · Blueprint (Stringline Fence & Deck)

Signature = **Mason's String + Post Stations**. Every section opens on a `.sl` stake row (2px string, square post, mono stake tag
"POST 0N · NN FT" = the section's kicker). ≥1024 a 2px string runs down the left gutter of every section (per-section `::before`, so
its colour follows the tone), a fixed "ft built" chip (aria-hidden, JS only) counts posts × 8 ft as sections pass.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-field | 5-s answer: fence + deck, town, per-ft sample price, call / price it | `filmstrip` | kicker `{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}`, h1, lead, `[[call]]`, "Price it by the foot" → #estimator, proof line rating + `{{proof.prices.0.*}}` + `{{hours|today}}`; stake A → stake B string; marquee of 8 plates | `hero` (etching, plate 04) + 7 SVG plates | `data-sw-signature` (hero string) | string snaps (600ms overshoot), post drops, h1 line mask |
| 2 | `#process` | t-paper | "wrong side of the line", "gas line": the 7-step build | `story` (pinned track ≥640) | 7 steps: stake, 811, dig, posts, rails, pickets, gate + walk | 7 SVG plates (symbols) | `data-hook="stack"` | posts drop onto the string, track slides, POST 0N · NN FT counts |
| 3 | `#estimator` | t-mid | "no price until consultation" | `tool` (form left, live drawing right) | feet / height / material / gates → post count + `proof.prices` range + gate range, 811 line, "Send these numbers" | live SVG string | `data-hook="estimator"` | live string redraws on input |
| 4 | `#posts` | t-deep | "posts will lean in 3 years" | `diagram` (text left, cross-section right) | 8 ft o.c., concrete, below frost, plumb to string, `{{proof.guarantee}}` [Sample] | inline cross-section SVG | `data-hook="draw"` | story 2: cross-section draws grade → frost line |
| 5 | `#services` | t-paper | every service + deck framing / HOA | `post-grid` (cards hang from a string) | `<!-- each services -->` 9 cards + deck framing plate (12 in. o.c., ledger flashing) | deck SVG | — | cards rise, stagger 60ms |
| 6 | `#gate` .break | t-cedar | "gate will sag and drag" | `statement` (full-bleed) | "Your gate should close on its own. Ours do." + gate detail drawing, `[[quote Gates]]` | gate SVG (large) | — | none (quiet) |
| 7 | `#reviews` | t-paper | social proof, Sample | `pickets` (dog-eared review pickets under one string) | rating line + 6 `proof.reviews` with town as stake tag, `[[sample review]]` | — | — | pickets rise, stagger |
| 8 | `#fix` | t-field | "repair or replace?" | `checklist` (drawing left, quiz right) | 5 yes/no, live result, `[[quote Fence repair]]` | leaning-post SVG | — | none |
| 9 | `#faq` | t-paper | property line / permit / HOA / 811 / wood vs vinyl / decks | `accordion` (sticky head left) | 5 hedged answers | — | — | none (quiet) |
| 10 | `#contact` | t-deep | the one form + ZIP + hours | `form` (info left, paper card right) | call, text, `{{hours|table}}`, open-now, ZIP checker, 4-step form | — | — | form card unclips |
| — | footer | t-paper | the string ends at Stake B | — | wordmark, nav, phone, email, areas as stake tags, licence (sample), `{{demo.disclaimer}}`, `[[credits]]` | — | — | — |

## Rhythm gate
- 10 sections (8-12) ✔. Hero `min-height: calc(100svh - var(--header-h))`, process band peeks ✔.
- Tones: color · light · mid · dark · light · color · light · color · light · dark. No 3 alike, no dark touching ✔.
- t-deep ×2 ✔, colour bands (t-field ×2, t-cedar) ✔, full-bleed `.break` = #gate ✔.
- Hooks: signature (hero string) + stack + estimator + draw = 4 ✔.
- Layout families: 10 distinct, no neighbours alike ✔.
- One `#contact`; every CTA → `#contact`, `#estimator` (a tool that hands off to #contact) or `tel:` / `sms:` ✔.
- Required content: 9 services (repeater), ZIP checker + areas (contact + footer), hours + open-now (hero proof line, contact),
  sample reviews with tag, prices only in the estimator + its sample price list, footer disclaimer + credits ✔.
- Signature in concept sections: hero (stakes + snap), process (posts drop, ft count), post-depth (string turns plumb), services
  (cards hang from string), proof (pickets under string, town tags), estimator (live string), footer (Stake B, final count) ✔.

## Decisions (headless)
- Form has 4 steps (contract) not 3: job → yard numbers → when → contact.
- Estimator: the kit estimator shows the facts range (no dollar math); app.js counts posts (ceil(ft/8)+1+gates) and draws the string.
- The "ft built" chip counts 8 ft per section post passed (a layout count from the 8-ft spacing, not a claim).
- Mobile bar <900px: [Call] [Text] [Price it].

## Open issues
(none yet)

## Round 1
Elevate photo + motion: the etching is gone (plate 04 is now a drawn "Braced plumb"). Hero key is `pickets`, revealed at Stake B, where the drawn run clip-wipes into a duotone photo. `weathered-fence` sits in #fix as the worn "before". The page is now one continuous run: process posts 01-07 (0-48 ft), then each section adds one post (08 · 56 ft … Stake B · 112 ft). The fixed chip reads each section's tag as it enters, drops one picket per section, and hides in the hero and the process (which has its own readout). At #posts the string swings 90° into the plumb line, down to the frost line. Also: Boise h1, CTA block raised, hero 72px shorter, one "Sample" tag, "Price my …" verbs, fact-style h2s, Schibsted spec heads, a phone rail for process, services grouped into 2 accordions, and a stake-out print.
