# Blueprint — landscaper-C

## Round 2
Elevate layout: services break is now a typographic specimen tag (Under the oaks / Quercus virginiana / Deep shade) set between beds 06 and 07, so the signature itself breaks the grid. Elevate wow: plant finder output is 18 static .marker tags filtered by the kit filter (visible with JS off), swinging in on change. Also: tone classes now paint their ground (they did not), drawn botanical plates (oak arch, allée, fern plate) under every placeholder slot, kit form/tabs/estimator markup, submit = "Plan your garden", no transition:all, single hours dl, gold text on light grounds removed for contrast. Signature sections now: hero, services, plant-picker, story, season, proof, area, footer.

## Round 1
Elevate layout: inserted t-deep atmospheric photo strip (detail-1) after services marker-grid to break dense 9-card rhythm and restore tonal contrast mid-section. Elevate wow: restyled plant-picker output cards as `.marker.marker--card` primitives so tool result is visually identical to signature system. Should-fix: unified primary CTA copy ("Plan your garden" in menu, "Send request" on form), added `data-stars` + JS trim for Gloria F. 4-star review a11y.

## Section list (top to bottom)

### 1. hero
- **Tone:** t-deep
- **Purpose:** Homeowner first 5s: trade + town + shade proof; contractor wow (arch + marker). Answers "is this for Savannah?" and "do they know shade?"
- **Layout:** arch-masked-hero (family 13). Photo in tall arch right/center; headline wraps arch curve left; marker primitive centered below headline.
- **Content tokens:** `{{biz.name}}`, `{{biz.city}}`, `{{biz.stateName}}`, `{{proof.years}}`, `{{proof.rating}}`, `{{proof.reviewCount}}`. Headline: "Shade gardens for {{biz.city}}'s live oaks". Proof line: "{{proof.years}} years in {{biz.city}} · Sample {{proof.rating}} ({{proof.reviewCount}} reviews)".
- **Media slot:** `hero` (hero-C2 preferred: shaded courtyard with brick and ferns). Crop `object-position: 50% 40%`.
- **Hooks:** `data-sw-signature` on hero marker. CTA buttons: primary "Call to plan" → `tel:{{biz.phoneE164}}`, secondary "Text a photo" → `sms:{{biz.phoneE164}}`.
- **Entrance:** arch clip-path reveal + headline stagger (intro motion).

### 2. services-intro
- **Tone:** t-light
- **Purpose:** Answer "what do they actually do?" without generic icons. Sets up service cards as markers.
- **Layout:** statement (single column, centered lead paragraph + rule).
- **Content tokens:** Lead from facts services intro voice. Rule below.
- **Media slot:** none.
- **Hooks:** none.
- **Entrance:** text rise (opacity+translateY 500ms).

### 3. services-grid
- **Tone:** t-paper
- **Purpose:** All 9 services from facts, each as a plant marker card. Answers "do they handle my specific need (marsh-edge, azaleas, lighting)?"
- **Layout:** marker-grid (3-col desktop, 2-col tablet, 1-col mobile). Each card: marker primitive at top, blurb below.
- **Content tokens:** Loop `{{services.*.name}}`, `{{services.*.short}}`, `{{services.*.blurb}}`. Each marker has common name = service short, Latin italic = invented botanical tag tied to service (e.g. *Hortus conclusus* for courtyards), location/light line from facts blurb keywords.
- **Media slot:** none (markers are the visual).
- **Hooks:** none.
- **Entrance:** marker press-in staggered 60ms per card.

### 4. break-photo
- **Tone:** t-deep (full-bleed photo with dark overlay)
- **Purpose:** Atmospheric pause; shows dappled shade mood. Breaks light→dark rhythm.
- **Layout:** break (21:9 aspect, full-width).
- **Content tokens:** Caption only: "Spanish moss over a brick path at dusk".
- **Media slot:** `break` (region-savannah-street). Crop `object-position: 50% 60%`. Grade + grain overlay.
- **Hooks:** none.
- **Entrance:** image unclip (clip-path inset reveal).

### 5. plant-picker-tool
- **Tone:** t-light
- **Purpose:** Interactive proof of local plant knowledge. Answers "will they pick plants that survive my yard?" Tool → form hand-off.
- **Layout:** tool-panel (split: tool left, explanation/right or stacked mobile).
- **Content tokens:** Tool title "Find plants for your light". Instructions. Output: 6 plant cards from fixed list. Hand-off button "Book a shade design" → quote form prefill service=garden-design.
- **Media slot:** none.
- **Hooks:** `data-hook="filter"` (plant-picker kit module). Prefill via URL params or hidden input.
- **Entrance:** text rise + tool panel slide-in.

### 6. story-shade
- **Tone:** t-deep
- **Purpose:** Process proof for shade/marsh work. Answers "will they damage my oak roots / understand salt spray?" Split story with hands-at-work photo.
- **Layout:** split-story (photo left, text right on desktop; stacked mobile). Margin column for marker rail showing "Quercus virginiana · Live oak · Part shade · Year-round".
- **Content tokens:** Review quote from Dwayne C. (Isle of Hope, shade design) or Ellen B. (Wilmington Island, marsh-edge). Service context from facts.
- **Media slot:** `story-1` (hands-at-work or process-planting). Crop `object-position: 40% 50%`.
- **Hooks:** none.
- **Entrance:** text rise + image unclip.

### 7. season-planner-tool
- **Tone:** t-paper
- **Purpose:** Shows seasonal rhythm specific to Savannah. Answers "when should I book?" Tool → form hand-off.
- **Layout:** tool-panel (tabs for months, output below).
- **Content tokens:** Tab labels Jan–Dec. Output: planting/pruning/install tasks per month from brief seasonality table + facts services. Hand-off "Book this window" → form prefill service + month.
- **Media slot:** none.
- **Hooks:** `data-hook="tabs"` (season-planner kit module).
- **Entrance:** text rise.

### 8. proof-reviews
- **Tone:** t-light
- **Purpose:** Social proof tied to neighborhoods and services. Answers "have they done this near me?" Reviews as hanging markers.
- **Layout:** review-grid (3-col desktop, 1-col mobile). Each review: quote, name, town, service, stars. Small marker tag above each with neighborhood + service.
- **Content tokens:** Loop `{{proof.reviews.*.text}}`, `.name`, `.town`, `.service`, `.stars`. Sample label on rating.
- **Media slot:** none.
- **Hooks:** none.
- **Entrance:** marker press-in staggered.

### 9. prices-estimator
- **Tone:** t-accent
- **Purpose:** Transparent cost ranges without budget-first form. Answers "what does this cost?" Estimator → form hand-off.
- **Layout:** tool-panel (project type selector + size → range output). Ranges from `{{proof.prices.*}}` with Sample tag.
- **Content tokens:** Project types: garden design, courtyard install, lighting, cleanup, drip. Output: from/to/note. Hand-off "Get this price" → form prefill project type.
- **Media slot:** none.
- **Hooks:** `data-hook="estimator"`.
- **Entrance:** text rise + number count-up.

### 10. service-area-zip
- **Tone:** t-deep
- **Purpose:** Confirms coverage of Tybee, Pooler, Richmond Hill, etc. ZIP checker → form. Footer area markers.
- **Layout:** split (ZIP input left, area list as marker pills right).
- **Content tokens:** `{{biz.areas}}` loop as mini-markers. ZIP input label "Check your ZIP". Result message. Hand-off to form.
- **Media slot:** none.
- **Hooks:** `data-hook="zip"`.
- **Entrance:** text rise + marker pills stagger.

### 11. contact-form
- **Tone:** t-light
- **Purpose:** Primary conversion. Multi-step quote form, no budget field.
- **Layout:** form-centered (max-width 640px, centered).
- **Content tokens:** Form steps: contact → project type → details. Prefill from tools above. Phone/email/hours displayed beside.
- **Media slot:** none.
- **Hooks:** `data-hook="form"`.
- **Entrance:** text rise.

### 12. footer
- **Tone:** t-deep
- **Purpose:** Legal, credits, disclaimer, area markers.
- **Layout:** stack (logo, nav anchors, area markers row, disclaimer, credits).
- **Content tokens:** `{{biz.name}}`, `{{biz.phone}}`, `{{biz.email}}`, `{{biz.hours}}`, `{{demo.disclaimer}}`, `[[credits]]`. Area markers as `.marker--pill`.
- **Media slot:** none.
- **Hooks:** none.
- **Entrance:** none (static).

## Rhythm check
- Tones: deep → light → paper → deep(break) → light → deep → paper → light → accent → deep → light → deep. No two dark touching (deep→light→paper→deep is ok because break is full-bleed photo, not content band; after break it goes light). Wait: section 6 is t-deep and section 4 is t-deep break. They are separated by section 5 (t-light). Good. Section 10 is t-deep, section 11 is t-light. Good. Never 3 same tone in a row. At least one t-deep (multiple), one t-accent (section 9). Full-bleed break present (section 4). 3+ interactive hooks: plant-picker (5), season-planner (7), estimator (9), zip (10), signature (1). 3+ layout families: arch-masked-hero, statement, marker-grid, break, tool-panel, split-story, review-grid, form-centered, stack. Quote form once (#contact). All required content present.