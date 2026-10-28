# fencedeck-C · Torrey Rail · blueprint

## Round 1
Elevate photo + firstScreen: the hero is re-cut as one engraved plate (title block with {{biz.city}} in the h1, lead and actions in one left column; the 4 PM section on the right with a navy/amber duotone of rotten-post in its sky, cut by the ridge line), and the night band reveals staining-deck through the finished rail panel as lamps light left to right. Also: generic eyebrows cut, fire drawing filled by default and aligned to the checklist, estimator draws every section, price rows stacked, contact columns balanced, footer deck unclipped, 3 live regions.

The page is photo-free. hero-C1 (a forest road with a readable "HAER NO. WA-48-4" stamp, a road sign, parked cars and a
black and white film border) could not be cropped clean, and it could not be toned into a believable atmosphere, so it is
off the page. It is kept only as the `og` slot, for the share image. Every visual is the one slope-section drawing
(`<symbol>` parts in the sprite, reused by `<use>`, driven by one CSS var `--built` 0-6).

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-deep | first 5 s: "they build on slopes like mine", Call / Price it | stack (h1 over 21:9 drawn strip) | tradeLabel, city, h1, lead, [[call]], [[quote]], sms, hours\|today, proof.rating + Sample | none (drawn strip, built 0, "4:00 PM · bare slope") | `data-sw-signature="slope-section"`, split | h1 line mask; footing stakes drop |
| 2 | `#slope` | t-paper | "Can you even build on my slope?" thesis + the promise | statement (big serif line + 3 local truths in a ruled row) | proof.guarantee, owner | none | — | none (quiet) |
| 3 | `#build` | t-mid | the six-hour story: footings → posts → joists → boards → rail → lamps; rot, marine layer, fire, salt | story (hour rail + pinned drawing ≥ 900, stacked cards < 900) | services.0 | drawn, --built 1-6 | `data-hook="story"` | pinned scrub ≥ 900; cards clip < 900 |
| 4 | `#services` | t-sand | all 8 services; deck parts uphill, fence parts downhill | strip (cards hanging on one grade line) | each services (name, blurb, short) | drawn part crops | prefill | stagger rise |
| 5 | `#fire` | t-dusk | "Fire zone: will the city reject it?" | split (checklist left, board row drawing right) | — | drawn board row hatches amber as ticked | `data-hook="checklist"` | none |
| 6 | `#exposure` | t-paper | "Salt air rusts everything": material by exposure | tabs (3 tabs, spec sheet) | services.1/2 | drawn fastener detail | `data-hook="tabs"` | rise |
| 7 | `#estimate` | t-sand | "Fence on a slope looks like a staircase" + "what will it cost" | workbench (inputs left, live stepped-fence drawing + sample price sheet right) | proof.prices.* + Sample | drawn, live | `data-hook="estimator"` | rise |
| 8 | `#night` `.break` | t-deep | the full-bleed night plate: the finished deck at 9 PM, lamps lit; voice line | break (full-bleed drawing) | — | drawn, built 6 | — | lamps fade on |
| 9 | `#reviews` | t-paper | proof: six sample reviews hung on a cable rail, rating as lit lamps | rail | proof.rating, reviewCount, each proof.reviews + Sample | drawn rail slices | — | stagger rise |
| 10 | `#contact` | t-lamp | the one form + ZIP + hours + call | split (form card t-deep left, call/ZIP/hours right) | phone, hours\|table, hours\|today, zips | none | `data-hook="form"`, `data-hook="zip"` | none |
| — | footer | t-deep | 10 PM: finished silhouette, areas as spot elevations, disclaimer, credits | — | areas, hours, license (sample), disclaimer, [[credits]] | drawn | — | — |

## Rhythm check
- 10 sections; hero `min-height: calc(100svh - var(--header-h))`, the paper band of #slope peeks under the strip.
- Tones: deep · paper · mid · sand · dusk · paper · sand · deep · paper · lamp. No three of a category in a row
  (dark, light, mid, color, color, light, color, dark, light, color). The visually dark bands (deep, mid, dusk) never touch:
  each sits between paper/sand. Footer deep follows the amber lamp band.
- ≥ 1 t-deep (hero, #night), color bands (sand, dusk, lamp), full-bleed `.break` = #night (drawn plate, no photo exists).
- Hooks: signature (hero) + story, checklist, tabs, estimator, zip, form = 7.
- Layout families: stack, statement, story, strip, split, tabs, workbench, break, rail, split. No neighbours share one.
- Exactly one `#contact`; every CTA is `#contact` (via [[quote]] / prefill) or `tel:` / `sms:`.
- Required content: 8 services (repeater), ZIP checker + areas (contact + footer), hours/open-now (hero, contact, footer),
  sample reviews with tags, prices only in the estimator's sample price sheet, footer disclaimer + credits.
- Signature in: hero (built 0), story (1-6), services (part crops), tools (estimator steps panels on the grade; checklist
  board row), proof (rail slices + lamp rating), footer (finished deck, lamps lit, areas as spot elevations). Also #night.

## Decisions taken headless
- Photo dropped (see top). `src/media.json` keeps hero-C1 only as `og`, never placed on the page.
- The story pins from 900px (inside the ≥ 640 matchMedia), so the hour rail has room; 640-899 gets the stacked cards.
- The fence estimator is site code in app.js (posts every 8 ft, stepped panels); prices shown are the facts' sample ranges.

## Open issues
- none yet
