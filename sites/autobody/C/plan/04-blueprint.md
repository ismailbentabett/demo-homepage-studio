# autobody-C · Blueprint (Saltline, Boot Stripe)

Built with NO photos (autobody library still downloading). Every visual is drawn; photos arrive in the fix round
(see 05-media.md). Prospect fit: Like New Restorations (paint correction, ceramic coating, boat gel coat): the
services and tools are all restoration-first with collision as the line between car and boat.

## Round 1
Hero re-cut so the headline (trade + city) and the bow sit above the boot stripe and the lead, buttons and proof sit below it in the chalk zone, hero ends ~90px early so services peek (firstScreen). The test spot porthole is now a drawn clear-coat panel (sky and shore reflection, specular streak, metal flake, water beading) with a chalk veil the pad wipes off on scroll, since the niche library has no approved photos (photo + motion). Also: one action name ("Send photos"), kickers on hero/seasons/claim only, fewer italic tails, no service numbers, sticky zone labels, hours as day | time rows, 13px floor, square tags (round = choices only), full-width guarantee, hull "note to us" ticket that fills the form.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-teal (color) | 5-s answer: cars and boats, call / send photos | `mask` h1 full-width, lead+CTA left, drawn hull bow right bleeding off edge, stripe row, proof row with water reflection | tradeLabel, city, phone, hours/today, rating + Sample | none (drawn hull in bow shape) | `data-sw-signature="boot-stripe"` (hero stripe + chalk veil wipe) | h1 line mask, stripe draws, veil wipes, one sheen pass |
| 2 | services | t-paper (light) | "do you do my car AND my boat?", paint match | `horizon` Driveway above the stripe, Collision on it, Dock below (chalk zone) | services 2-4, 8-9 / 5-7 / 0-1 via repeaters, [[quote]] | none (car + hull line drawings) | `data-hook="horizon"` stripe | text rises; stripe scrubs |
| 3 | seasons | t-chalk (color) | local story: what each month brings; ZIP later | `rail` Nov-Oct rail, pinned ≥640 (4×55svh+100svh), stacked < 640 | services names, review-free process copy | none (season line icons) | `data-hook="seasons"` | horizontal slide, bow rides stripe, tint crossfade |
| 4 | hull | t-teal (color) | "what does my hull cost" | `instrument` inputs left, stretching hull + measuring stripe right | proof.prices.0 from/to/unit + Sample, hand-off to form | none (drawn hull) | `data-hook="hull"` | hull stretches with input |
| 5 | testspot | t-paper (light) `.break` | "will you burn through my gel coat / clear" | `break` full-bleed chalk surface with a round polished test spot (gloss drawing) | services.0 blurb idea, statement h2 | none | `data-hook="testspot"` | spot widens with scroll |
| 6 | claim | t-deep (dark) | "will insurance make me use their shop", supplement | `spine` heading left, tabs + steps on a vertical stripe right | biz.short, Insurance claim help | none | `data-hook="claim"` (tabs) | still (quiet tool) |
| 7 | planner | t-seafoam (color) | "correction, coating or both?" | `tool-split` 4 radio questions left, plan card right | prices 1-3 + Sample | none | `data-hook="planner"` | text rises |
| 8 | proof | t-paper (light) | trust: other owners nearby | `dock` reviews hang on a full-bleed dock-line stripe, one large + three | reviews 0,1,2,4 + Sample, rating, reviewCount, guarantee + Sample | none | stripe stubs | stagger |
| 9 | area | t-chalk (color) | "do you serve me / are you open" | `ledger` 3 columns: towns, ZIP checker, hours | areas, city, zips via kit, hours table, open-now | none | zip | still |
| 10 | contact | t-deep (dark) | the one #contact: 4-step "Send photos" form | `form-split` | phone, sms, hours/today | none | form | still |
| - | footer | t-paper over a chalk band | waterline end | full-bleed stripe between paper (hours, phone) and chalk (areas, disclaimer, credits) | disclaimer, credits, license + Sample | none | stripe | stripe draws |

## Rhythm gate
- 10 sections. Hero `min-height: calc(100svh - var(--header-h))` under a fixed header, so ~72px of #services peeks. ✓
- Tones: color, light, color, color, light, dark, color, light, color, dark. No 3 of a category in a row; the two darks (6, 10) never touch; footer is paper. ✓
- ≥1 t-deep (claim, contact) ✓ · color bands (teal ×2, chalk ×2, seafoam) ✓ · full-bleed `.break` (#testspot) ✓
- Hooks: boot-stripe (signature), horizon, seasons, hull, testspot, claim, planner = 7 ✓
- Layout families: mask, horizon, rail, instrument, break, spine, tool-split, dock, ledger, form-split: 10, no neighbours alike ✓
- One `#contact`; every CTA is tel:, sms: or #contact ✓
- Required content: all 10 services (services section), area + ZIP checker (#area), hours + open-now (hero proof line, #area, #contact), sample reviews with Sample tag (#proof), prices only in the hull tool and the planner (Sample tags), footer with `{{demo.disclaimer}}` + `[[credits]]` ✓
- Signature in every concept section: hero (stripe at the waterline), seasons (stripe = month track, bow rides it), services (stripe splits Driveway/Dock), hull (stripe = measuring rule), claim (vertical stripe spine), proof (dock line + stubs), footer (waterline) ✓

## Decisions taken headless
- Hull calculator multiplies the sample per-foot range (`proof.prices.0`) by the length in app.js; the result is labelled
  Sample and the per-foot figure is shown beside it, so the math is visible. Oxidation level moves a marker on the range,
  it does not invent a price.
- The planner is custom (radios + prewritten plan cards with tokens), because the kit checklist only counts ticks.
  Without JS all plans show as a list.
- On teal, the stripe pair is navy + #FFB4A3 (coral is 1.30 on teal); on the drawn hull the real coral #B83A25 is used.
- No Lenis (one less moving part; native scroll + ScrollTrigger scrub).

## Open issues
- (none yet)
