# Blueprint — pool-C (Low Desert Pool Co.)

## Round 3
Elevate (motion + type): "the year turns as you read" is now one visible gesture. Every spread's folio has a 12-cell month ruler. On entry, the numeral rolls in a digit slot from the previous spread's month (03→06→07→08→11), the ruler fills cell by cell, and the rail tab slides, all on one 500ms ease-out. The ruler keeps a still-frame trace: the months just turned are tinted terracotta and the month you came from is ticked. Type is now printed matter: the folio labels, TOC head and form steps are Crimson italic small caps, the entry header is Outfit 600, and prices and the TOC numbers are in the serif. Each month spread opens with a drop cap and a run-in. Crimson italic is now loaded for real (it was synthesized). Mono is kept only on the rail, the cover/footer month index and the Sample chips.
Fixes: Plate V (clear-after, off-subject) is replaced by a no-photo printed chart, "The pour window" (12 months: pour / wait / November marked). The detail-2 slot is removed from media.json. The 900–1199px cover caption moves to the top of the frame. The rail hides while a full-bleed band (monsoon, Plate V) passes. The "now" key has a paper backing. Empty review months collapse into thin italic rows. At 390, the rating comes first in the proof line, and the plate is 2:1 with tighter gaps, so all three proof items clear the sticky bar. `html` smooth scroll is now `:focus-within` only: it was stalling the capture walk, which left lazy plates blank and the lower folios unturned. The two "In…" openers were reworded so the drop caps aren't "I".

## Round 2
Elevate (photo + motion): the vector plates are replaced by a real plate series under one sand-and-ink grade (soft-light terracotta→slate wash). I scottsdale-neighborhood (dusk pool, hero), II drained-pool, III waterline-tile, IV monsoon-sky (break, scroll-tied clip from a narrow column to full bleed), V clear-after (as detail-2; pebble-finish is not in the manifest). hero-C1 is dropped because it shows no pool. Motion idea: "the year turns as you read". Each folio rolls from the last month seen and its 12-cell bar fills to that cell (500ms ease-out), and the rail tab slides on the same curve. All shared opacity reveals are removed, so reviews and stats are static.
Fixes: the rail has two states (teal = reading, terracotta dot = this month) plus a "now" key and an sr-only legend, and .hero reserves 56px for it at ≥1200. The proof line is a nowrap list with square markers, so no orphan dots. At 390 the hero crop keeps the water and the month row sits under the plate. The July spread is copy left with a ledger of large numerals right, plus a doubt-killer under the CTA. Reviews are a 12-month column with empty months dimmed. The TOC rows are tighter on phones, and there are fewer DM Mono strings (cover-line months, TOC words, stat units).

## Round 1
Elevate move (distinctiveness + photo): re-cut the hero as an almanac cover (masthead, issue line set to the current month, cover lines to Jun/Mar/Nov) and made the 12-month thumb-index the signature in 7 places: fixed rail ≥1200px, cover index, contents month bars, folio rulers, review month pills, footer year, and the current month marked everywhere. Placeholder stub photos now sit on drawn SVG "plates" (I–V), one per season, so frames read as illustrations, not as broken images.
Section order (year turns as you scroll): hero (now) → contents table (replaces 3×2 cards) → tile/Mar → leak gauge/Jun → monsoon break/Jul (t-deep) → story/Jul → proof/Aug → resurface planner/Nov (t-accent) → area → contact. One action name everywhere: "Get my price"; phone in header ≥900px. Tool outputs are now almanac entry cards (scale radios and leak verdicts wired in app.js per copy-1).
Notes: `detail-2` (pebble) is not in the manifest, so plate V uses `clear-after`; review 4 dropped (its text uses a banned phrase); "Apr" spelled out (static flags "APR"); the mobile menu uses an opacity fade instead of translateX (the translated menu caused overflow at 320px).

## Section list

### 1. Hero (editorial cover)
- **Tone:** t-paper
- **Purpose:** Homeowner's first 5 seconds: trade + town + seasonal hook + sample price + action.
- **Layout:** editorial-cover (family 6). Masthead top-left, issue line top-right, hero photo center-right, cover lines stacked left.
- **Content:** `{{biz.name}}`, kicker "Scottsdale pool care, by the season", issue line "The Desert Pool Almanac · Sample Issue", cover-line anchors (This Month · Services · Proof · Plan Your Month), sample monthly range `{{proof.prices.0.from}}–{{proof.prices.0.to}}` with Sample tag.
- **Media:** `hero` slot (desert backyard pool with mountains).
- **Hooks:** `data-sw-signature="almanac-tab"` (current-season tab pulses once on load).
- **Entrance:** cover photo settles 1.04→1.0 scale; cover lines slide in from right, stagger 60ms.

### 2. This Month in Your Pool (season spread)
- **Tone:** t-sand
- **Purpose:** Local truth: what desert water is doing right now. Answers "cloudy after haboob" and "chlorine burns off" objections.
- **Layout:** split (text left, photo right).
- **Content:** Current month name, 3 bullet truths (evaporation rate, chlorine demand, monsoon debris), link to weekly service.
- **Media:** `story-1` slot (monsoon sky or dust haze over pool).
- **Hooks:** none.
- **Entrance:** text rises; photo unclips.

### 3. Weekly Balance (service spread)
- **Tone:** t-paper
- **Purpose:** Answers "chemicals eating plaster / eyes burning" objection. Shows plain-language ideal ranges.
- **Layout:** list (3-column grid of service cards).
- **Content:** Weekly service, chemical balance, monsoon cleanup cards with blurbs from `{{services.*}}`. Sample tag on any price mention.
- **Media:** none.
- **Hooks:** none.
- **Entrance:** cards rise with stagger 60ms.

### 4. Calcium & Tile Cleaning (tool spread)
- **Tone:** t-light
- **Purpose:** Answers "white crust on tile" objection. Interactive calcium scale check tool.
- **Layout:** split (tool left, explanation + sample range right).
- **Content:** Calcium scale check tool (`checklist` module), sample range `{{proof.prices.2.from}}–{{proof.prices.2.to}}` with Sample tag, bead-blast result description.
- **Media:** `detail-tile` slot (tile line close-up with scale).
- **Hooks:** `data-hook="checklist"`.
- **Entrance:** text rises; photo unclips.

### 5. Break (full-bleed photo)
- **Tone:** t-deep
- **Purpose:** Visual pause; desert light mood.
- **Layout:** break (full-bleed photo, 21:9 strip).
- **Content:** Caption only: "Pebble finish under low desert light, Paradise Valley."
- **Media:** `break` slot (pebble finish texture under water or sheer descent at golden hour).
- **Hooks:** none.
- **Entrance:** photo unclips.

### 6. Leak or Evaporation (tool spread)
- **Tone:** t-paper
- **Purpose:** Answers "losing water: leak or sun?" objection. Bucket test tool with hedged evaporation note.
- **Layout:** split (explanation left, tool right).
- **Content:** Bucket test leak log tool (`estimator` module), hedged note "¼–½ in./day normal in desert summer", sample leak-check price if applicable.
- **Media:** `story-2` slot (waterline tile or drained pool edge).
- **Hooks:** `data-hook="estimator"`.
- **Entrance:** text rises; tool fades in.

### 7. Resurfacing Month Planner (tool spread)
- **Tone:** t-accent
- **Purpose:** Answers "resurfacing in summer = bad cure" objection. Interactive month planner.
- **Layout:** stack (tool centered, explanation below).
- **Content:** Resurfacing month planner tool (`tabs` module), cool-month recommendation, sample range `{{proof.prices.1.from}}–{{proof.prices.1.to}}` with Sample tag.
- **Media:** none.
- **Hooks:** `data-hook="tabs"`.
- **Entrance:** tool rises; text rises.

### 8. Proof (review spread)
- **Tone:** t-paper
- **Purpose:** Trust: sample reviews with local towns, specific services, star ratings. Guarantee badge.
- **Layout:** grid (3×2 review cards).
- **Content:** 6 reviews from `{{proof.reviews}}` with Sample tag, star rating, town, service. Guarantee text from `{{proof.guarantee}}`. License badge `{{proof.license}}`.
- **Media:** none.
- **Hooks:** none.
- **Entrance:** cards rise with stagger 60ms.

### 9. Service Area + ZIP Checker
- **Tone:** t-sand
- **Purpose:** Confirm coverage; prefill quote form.
- **Layout:** split (area list left, ZIP checker right).
- **Content:** `{{biz.city}}`, `{{biz.areas}}`, ZIP list, ZIP checker tool (`zip` module).
- **Media:** none.
- **Hooks:** `data-hook="zip"`.
- **Entrance:** text rises; tool fades in.

### 10. Quote Form (#contact)
- **Tone:** t-deep
- **Purpose:** Primary conversion: multi-step form with prefill from tools.
- **Layout:** stack (form centered, max-width 640px).
- **Content:** Multi-step quote form (`form` module): service type → pool size → contact. Phone `{{biz.phone}}` and email `{{biz.email}}` as fallback links.
- **Media:** none.
- **Hooks:** `data-hook="form"`.
- **Entrance:** form rises.

### 11. Footer
- **Tone:** t-deep
- **Purpose:** Legal, credits, almanac signature reset.
- **Layout:** stack (centered).
- **Content:** `{{biz.name}}`, `{{biz.phone}}`, `{{biz.email}}`, hours from `{{biz.hours}}`, `{{demo.disclaimer}}`, `[[credits]]`. Almanac tabs collapse to "Year complete" pill.
- **Media:** none.
- **Hooks:** `data-sw-signature="almanac-tab"` (reset state).
- **Entrance:** text rises.

## Rhythm check

- 11 sections (within 8–12).
- Tones: paper → sand → paper → light → deep → paper → accent → paper → sand → deep → deep. No 3 same in a row. Two dark sections (10, 11) touch — **fix**: swap section 10 to t-paper so dark bands are separated.
- Dark band present (section 5 break).
- Color band present (section 7 t-accent).
- Full-bleed break present (section 5).
- Interactive hooks: checklist (4), estimator (6), tabs (7), zip (9), form (10) = 5 hooks ≥ 3.
- Signature hook in hero (1) and footer (11).
- Layout families: editorial-cover, split, list, split, break, split, stack, grid, split, stack, stack. Neighboring duplicates: split at 4/6 (separated by break at 5 — OK); stack at 7/10/11 (10/11 adjacent — **fix**: change 11 to rail layout).
- #contact appears once (section 10).
- Required content: services (3), area+ZIP (9), hours (11), reviews+Sample (8), prices via tools with Sample (4,7), footer disclaimer+credits (11).

## Fixes applied

- Section 10 tone changed to t-paper (dark bands no longer touch).
- Section 11 layout changed to rail (horizontal rule with logo left, links center, credits right) to avoid adjacent stack with section 10.

## Open issues

- Static check blocker: "before and after" phrase in `proof.reviews[4].text` ("measured before and after") triggers banned-word scanner. This is a false positive — the review describes water measurements, not stock photo comparisons. Cannot edit `facts.json` per build contract. Review text is factual and appropriate; scanner rule may need refinement to distinguish measurement context from photo-comparison context.
## Build resume (fast)

- "before and after" blocker resolved in src, not facts: reviews render as `each proof.reviews 0:4` + `5:6` (review 5 of 6 skipped); 5-card grid = 2 wide + 3 narrow at 1100+.
- `.t-accent` bg was self-referencing `--accent` (resolved to paper): now literal #2A7B6F; tabs, primary button and Sample tag re-coloured for the band.
- Stars: repeat macro unsupported; 5 icons clipped by `--stars` width.
- Mobile bar: call button on one line, secondary button in paper.
