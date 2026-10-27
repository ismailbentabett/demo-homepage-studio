# Blueprint — hvac-A

## Round 3 (fix + elevate)
Motion: the story is now one camera (one pinned SVG whose viewBox pans/zooms A→B→C) beside a single job ticket whose rows stamp in and accumulate; no crossfade, so the mustFix overlap is gone. Layout: the lower half is a single job sheet: work codes (R-/I-) with a sticky install aside, a line-item price sheet with one Sample stamp, a coverage-check card, and a 4-step tear-off stub form. All section reveals are removed (motion is now only the rail, the h1 split and the story). Header/footer show the Saltbush wordmark and glyph. Base: round-3 source from qa/last, because qa/best (round 2) had the photo frames.


## Section list (top to bottom)

### 1. Hero (t-dark)
- **Purpose:** Homeowner's first 5 seconds: trade + town + action + proof. Contractor wow: ticket header prints live.
- **Layout family:** sticky-pin-crop (family 12). Pinned photo left/center, text column right with clock rail.
- **Content tokens:** h1 "AC repair in {{biz.city}} run like a ticket", kicker "{{biz.tradeLabel}} · {{biz.stateName}}", proof line "Sample diagnostic {{proof.prices.0.from}}–{{proof.prices.0.to}} · [[i clock]] <span data-open-now>", CTA row `[[call]]` + `[[quote AC repair]]`.
- **Media slot:** `hero` → `hero-A1` (condenser at dusk beside block wall). Crop `object-position: 50% 40%`.
- **Hooks:** `data-sw-signature` on rail container, `data-split="lines"` on h1, `data-open-now`, `data-reveal`.
- **Entrance:** Ticket header lines print (intro); photo fades up. Text rises.

### 2. Symptom Sorter Tool (t-paper)
- **Purpose:** Objection "I don't understand SEER/tons" + conversion path tool→form.
- **Layout family:** split (tool left, explanation right on desktop; stacked mobile).
- **Content tokens:** h2 "What's it doing?", intro paragraph, symptom select options from brief §5 tool 1, output area with aria-live, CTA "Book this diagnosis" `[[quote symptom-sorter]]`.
- **Media slot:** none.
- **Hooks:** `data-symptom-sorter` (custom app.js), `data-service` on CTA.
- **Entrance:** Text rises; tool panel unclips.

### 3. Process Story (t-deep)
- **Purpose:** Objection "They'll say the whole system is dead" + signature moment. Shows arrival→reading→cause→fix as ticket entries.
- **Layout family:** sticky-pin-crop (pinned story, desktop ≥640 only; stacked cards with clip reveal on mobile). Height `calc(4 * 55svh + 100svh)`.
- **Content tokens:** Four entries, each with timestamp pill, heading, body using facts-derived language (e.g., "Reading: suction pressure 68 PSI, superheat 12° — sample reading"), sample chip `[[sample reading]]`. Entry subjects: Arrived (fan/grille), Reading (gauges), Cause (capacitor), Fixed (drain pan test).
- **Media slots:** `process-1` → `process-gauges`, `process-2` → `process-multimeter`, `process-3` → `process-coil-rinse`, `process-4` → `process-drain-line`. Each crops to the named part.
- **Hooks:** `data-sw-signature` (rail continues), `data-reveal="clip"` on photos, `data-count` on sample readings.
- **Entrance:** Timestamps light on scroll; photos unclip per entry.

### 4. Break Photo (t-dark)
- **Purpose:** Visual pause, full-bleed desert dusk atmosphere. Prevents two dark sections reading as one block by being a pure image band.
- **Layout family:** break (full-bleed, no text).
- **Content tokens:** none. Caption in credits only.
- **Media slot:** `break` → `weather-desert-sunset`. Crop `object-position: 50% 60%`.
- **Hooks:** `data-reveal="clip"`.
- **Entrance:** Image unclips.

### 5. Services Grid (t-paper)
- **Purpose:** Shows all services from facts; answers "Do they fix or only replace?".
- **Layout family:** grid (3-col desktop, 2 tablet, 1 mobile).
- **Content tokens:** Repeater `<!-- each services -->` with `{{.name}}`, `{{.blurb}}`, `[[quote {{.short}} btn-ghost]]`.
- **Media slot:** none.
- **Hooks:** `data-reveal-stagger` on grid items.
- **Entrance:** Cards stagger in.

### 6. Hot-Day Plan Tool (t-accent)
- **Purpose:** Color band requirement + emergency objection ("nobody can come today"). Printable value.
- **Layout family:** stack (centered content, max-width 720px).
- **Content tokens:** h2 "While you wait", 6-step checklist (close blinds, check breaker, fan-only to thaw, water for pets, don't run frozen, text us your address), print button, CTA `[[quote emergency]]`.
- **Media slot:** none.
- **Hooks:** `data-hot-day-plan` (custom app.js for print trigger).
- **Entrance:** Text rises.

### 7. Proof / Reviews (t-deep)
- **Purpose:** Trust via sample reviews echoing ticket format.
- **Layout family:** rail (vertical stack with left clock rail continuation).
- **Content tokens:** Repeater `<!-- each proof.reviews 0:4 -->` with `{{.text}}`, `{{.name}}, {{.town}}`, `{{.service}}`, star rating, date-as-timestamp pill, `[[sample review]]` tag. Aggregate line "{{proof.rating}} · {{proof.reviewCount}} reviews (Sample rating)".
- **Media slot:** none.
- **Hooks:** `data-sw-signature` (rail), `data-reveal-stagger`.
- **Entrance:** Cards stagger; timestamps light.

### 8. Service Area + ZIP (t-paper)
- **Purpose:** "Is this local?" objection + ZIP checker tool.
- **Layout family:** split (map/list left, ZIP form right).
- **Content tokens:** h2 "Serving {{biz.city}} and {{biz.areas|list}}", ZIP input, aria-live answer region, prefill hand-off to form. Areas list via `{{biz.areas|list}}`.
- **Media slot:** none.
- **Hooks:** `data-zip`, `data-reveal`.
- **Entrance:** Text rises; form unclips.

### 9. Pricing Estimator (t-dark)
- **Purpose:** Price transparency without fake urgency. Sample ranges only.
- **Layout family:** list (vertical price cards with ticket-style layout).
- **Content tokens:** Repeater `<!-- each proof.prices -->` with `{{.item}}`, `{{.from}}–{{.to}}`, `{{.note}}`, `[[sample pricing]]` tag. Lead-in "Sample pricing for typical {{biz.city}} jobs".
- **Media slot:** none.
- **Hooks:** `data-reveal-stagger`.
- **Entrance:** Items stagger.

### 10. Quote Form (t-paper)
- **Purpose:** Primary conversion endpoint. Multi-step booking.
- **Layout family:** stack (centered, max-width 640px).
- **Content tokens:** h2 "Get a number", form steps (symptom → system type → best time → contact), honeypot, honest thank-you state. All fields use tokens for labels where applicable.
- **Media slot:** none.
- **Hooks:** `data-lead` on form, `data-service` prefill target.
- **Entrance:** Form unclips.

### 11. Footer (t-dark)
- **Purpose:** Required disclaimer, credits, final signature moment.
- **Layout family:** stack (multi-column links, single-column mobile).
- **Content tokens:** `{{biz.name}}`, `{{biz.phone}}`, `{{biz.email}}`, hours via `{{hours|table}}`, `{{demo.disclaimer}}`, `[[credits]]`, license `{{proof.license}} (Sample)`, final timestamp pill "DISPATCH CLOSED".
- **Media slot:** none.
- **Hooks:** `data-sw-signature` (rail ends with saltbush glyph stamp).
- **Entrance:** Static (no animation on footer).

## Rhythm compliance
- 11 sections (within 8-12).
- Tone sequence: dark → paper → deep → dark(break) → paper → accent → deep → paper → dark → paper → dark. No three same tones in a row. No two dark sections touching (break is image-only, not a content dark band; t-dark hero → t-paper tool breaks the run).
- At least one dark band (t-deep at #3, #7). At least one color band (t-accent at #6).
- One full-bleed break (#4).
- Interactive hooks: `data-symptom-sorter`, `data-zip`, `data-lead`, `data-hot-day-plan`, `data-sw-signature` (≥3).
- Layout families: sticky-pin-crop, split, grid, stack, break, rail, list (≥3, no two neighbours share).
- One `#contact` form (#10).
- Required content: services (#5), service area + ZIP (#8), hours/open-now (#1 hero + #11 footer), sample reviews (#7), sample prices (#9), disclaimer + credits (#11).
## Round 2 (fix)
Photo + wow elevate: grey placeholder frames replaced by drawn plates: one schematic condenser (symbol `art-unit`), cropped A fan guard / B run capacitor / C drain line along the pinned process story, plus a drawn dusk valley (`art-valley`) for the break. The sorter now ships a real ticket stub (works JS-off), a tear-off strip with the phone number, and print scoped to the ticket or the hot-day list. Process story rebuilt as a pinned in-place swap (≥640, motion on). h1 → "AC repair in {{biz.city}}, on a ticket you can read". Rail now 3px with clock ticks. Credits: one note line instead of "by unknown". `[[quote]]` with multi-word services replaced by anchors (data-service tokens). Mobile bar: Price it is the primary button.
