# Blueprint — cannabis-B

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Trade + town + open-now + pre-order/call + one honest line | document-card | biz.name, biz.city, biz.stateName, open-now, h1, lead, CTA buttons | hero-B | data-sw-signature="batch-tag" | text-rise + tag-print intro |
| 2 | first-visit | t-paper | "I don't know what to ask for" | split-explainer | first-visit walk-through tool (5 steps), CTA to pre-order | store-hands-counter | data-hook="first-visit" | text-rise |
| 3 | lab | t-light | "Is this stuff tested?" | data-rail | lab sheet reader tool, sample COA lines, B-02 tag | lab-sheet-clipboard | data-hook="lab-reader", data-sw-signature="batch-tag" | image-unclip + line-highlight story |
| 4 | formats | t-mid | "Edibles hit too hard last time" | grid | format explainer cards (flower, pre-roll, edible, vape, concentrate, tincture), start-low card | flower-trichomes | data-hook="format-explainer" | text-rise |
| 5 | price | t-light | "What's the real price per gram?" | split-explainer | price-per-gram compare tool, sample price ranges from facts, B-03 tag | store-scale-weighing | data-hook="price-compare", data-sw-signature="batch-tag" | counter story |
| 6 | tax | t-deep | "What's the real price after tax?" | statement | out-the-door estimate tool, state tax explanation, B-04 tag | — | data-hook="tax-estimate", data-sw-signature="batch-tag" | text-rise |
| 7 | services | t-paper | All services visible | grid | services repeater (all 10 from facts) | store-jar-shelf | — | text-rise |
| 8 | proof | t-light | Trust: reviews + guarantee + licence | list | sample reviews (Sample tag), guarantee, licence, years, rating | store-interior-bright | data-hook="reviews" | text-rise |
| 9 | area | t-mid | "Where do I pick up / is this my area?" | split-explainer | ZIP checker, areas list, hours, pickup lane process, B-05 tag | local-kalamazoo-autumn-street | data-hook="zip-checker", data-sw-signature="batch-tag" | image-unclip |
| 10 | contact | t-light | Pre-order form | stack | multi-step quote form (4 steps), thank-you text | — | data-hook="quote-form" | text-rise |
| 11 | break | t-accent | Full-bleed visual pause | break | — | hero-B-2 | — | image-unclip |
| 12 | footer | t-deep | Disclaimer + credits + batch complete tag | stack | demo.disclaimer, credits, final batch tag | — | data-sw-signature="batch-tag" | text-rise |

## Rhythm gate check
- 12 sections: pass (8-12).
- Hero height: calc(100svh - var(--header-h)); next band (first-visit) peeks in: pass.
- Never 3 same tone in a row: light → paper → light → mid → light → deep → paper → light → mid → light → accent → deep. Pass.
- Never two dark sections touching: deep at #6, next is paper; deep at #12 is last. Pass.
- ≥1 t-deep: #6 and #12. Pass.
- ≥1 color band: #11 t-accent. Pass.
- ≥1 full-bleed .break: #11. Pass.
- ≥3 data-hooks: first-visit, lab-reader, format-explainer, price-compare, tax-estimate, zip-checker, quote-form, reviews (8 total). Pass.
- data-sw-signature present: hero, lab, price, tax, area, footer (6 sections). Pass.
- ≥3 layout families: document-card, split-explainer, data-rail, grid, statement, list, stack, break (8 families). No neighbours share. Pass.
- Exactly one #contact: yes. Every CTA points to #contact or tel:. Pass.
- Required content: all services (#7), area + ZIP (#9), hours/open-now (#1, #9), sample reviews with Sample tag (#8), sample prices via estimator (#5), footer with disclaimer + credits (#12). Pass.
- Signature in concept.json.signature.sections: hero, lab, price, tax, pickup (area), footer — all present. Pass.

## Open issues
- **Hero family collision (hard stop):** All 15 hero families (1–15) are at the library cap of 7 uses each. No unique hero family is available for cannabis-B. The site cannot pass `check-unique --concept` without a library slot opening or a registry cap increase. Marking as needs-human per METHOD §12 round-limit rule. Static check is clean; render stage could not be entered due to this collision.