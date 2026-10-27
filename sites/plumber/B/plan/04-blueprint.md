# Blueprint — plumber-B (Ledgerline Plumbing)

## Round 2
Photo 6.0 / layout 7.5 elevate: every placeholder photo became a drawn SVG (sewer-cam hero feed, a 3-step camera story, the full-bleed lateral trace, a sketch map of the area); the lower half was re-toned (services and pricing on t-bone, so there is no dark run); the tools became three working cards (lead checklist, psi reading, estimator) plus the ZIP check; every section got an Entry-numbered kicker and a scroll-drawn ledger rule. Fixes: smooth scrolling is now limited to html:focus-within, plus a reveal catch-up after the pin (the lower bands had been rendering empty), and icons got an explicit size.
Tones now: deep · paper · bone · deep(story) · paper(break) · accent · paper · bone · deep · paper · footer deep. No dark sections touch, never 3 of the same tone in a row.

## Section list

### 1. Hero (`#hero`, t-deep, split-50-50)
- **Purpose:** Homeowner's first 5 seconds: trade + city + outcome, proof line, primary action. Contractor's "nobody has this" moment via the ledger entry typing.
- **Layout:** Family 2 (50/50 split). Left column: kicker `{{biz.name}} · {{biz.city}}, {{biz.stateName}}` in mono --fs-0; h1 "Pittsburgh plumbing, written down." in IBM Plex Mono --fs-h1; three sample ledger entries type in (No. 01 Pressure 62 psi OK / No. 02 Lead 3/4" WATCH / No. 03 Camera 47 ft FIX); proof line "Mon–Sat 7:00–17:30 · Mt. Lebanon to Penn Hills · 4.8 Sample rating" in --fs--1; two buttons: primary "Price it" → #contact, secondary "Text a photo" → sms:. Right column: [[img hero]] sewer camera still with footage counter overlay in mono. Ledger rule draws across seam into photo.
- **Hooks:** `data-sw-signature` on the rule animation; `data-hook="rotator"` is not used here (static entries typed via GSAP SplitText or CSS steps).
- **Entrance:** Text rises (opacity + translateY), ledger rows stagger-type, image unclips. Intro ≤ 1.2 s.
- **Content tokens:** `{{biz.name}}`, `{{biz.city}}`, `{{biz.stateName}}`, `{{hours|today}}`, `{{proof.rating}}` with [[sample Sample rating]].

### 2. Trust strip (`#trust`, t-paper, rail)
- **Purpose:** Answer "$400 just to show up" and "will they explain what's wrong" with immediate proof.
- **Layout:** Horizontal rail of four ledger-entry cards in a single row (scrollable on mobile). Each card: mono entry number, reading label, value, status stamp. Cards: (1) Licence SAMPLE-ACHD-22914 OK, (2) Reviews 197 Sample OK, (3) Years 9 Sample OK, (4) Insured Yes OK. Rule under each.
- **Hooks:** none (static proof).
- **Entrance:** Cards fade in staggered, rules draw.
- **Content tokens:** `{{proof.license}}`, `{{proof.reviewCount}}`, `{{proof.years}}`, all with [[sample]] labels.

### 3. Services (`#services`, t-mid, ruled-grid)
- **Purpose:** Show all services from facts as ledger rows with sample price ranges; answer "upsell" by listing repair before replacement.
- **Layout:** 2-column grid at ≥900px, single column below. Each service is a `.ledger-entry`: entry no. (mono), service name (body), sample price range as the reading (mono), status pill derived from typical urgency (OK for maintenance, WATCH for age, FIX for failure), action verb ("Inspect" / "Replace" / "Clear"). All prices carry [[sample Sample pricing]].
- **Hooks:** `data-hook="tabs"` optional to filter by category (supply / drain / heater), but default view shows all.
- **Entrance:** Rows reveal top-to-bottom with rule wipe.
- **Content tokens:** `{{services.*.name}}`, `{{proof.prices.*}}`.

### 4. Camera story (`#camera-story`, t-deep, pinned-story)
- **Purpose:** Answer "dig up my whole yard" by showing how the camera finds the exact break. The signature's foot-counter scroll story lives here.
- **Layout:** Pinned story (≥640px only; stacked cards below). Three steps: (1) "Run the camera" — [[img story-1]] camera reel + text; (2) "Log by the foot" — ledger entries appear (12 ft cleanout OK, 31 ft offset joint WATCH, 47 ft roots FIX); (3) "Repair at the break" — [[img story-2]] trenchless repair detail. Vertical foot-counter in margin column climbs with scroll, stops at named findings.
- **Hooks:** `data-sw-signature` drives the foot-counter and the ledger rule within each step.
- **Entrance:** Image unclip, text rise, counter counts up. Reversible on scroll-up.
- **Media slots:** `story-1`, `story-2`.

### 5. Break (`#break`, t-paper, full-bleed)
- **Purpose:** Visual breath between two dark-led sections; avoid dark-dark run. Full-bleed photo of Pittsburgh row houses at dusk with steel-blue duotone overlay.
- **Layout:** Full-width frame, aspect-ratio 21/9 desktop, 16/9 mobile. No text. Photo grade + duotone multiply.
- **Hooks:** none.
- **Entrance:** Image unclip.
- **Media slot:** `break`.

### 6. Tools (`#tools`, t-accent, stack)
- **Purpose:** Let homeowner take their own first reading; hand off to quote form. Answers "don't know where shut-off is" and "what does this mean".
- **Layout:** Three tool cards stacked vertically, each with title, description, interactive area, and CTA button that prefills the quote form. Tools: (1) Pipe material identifier (`data-hook="checklist"`), (2) Pressure check (`data-hook="estimator"`), (3) Sewer lateral era check (`data-hook="compare"`). Below tools: ZIP checker (`data-hook="zip"`) as a compact inline field.
- **Hooks:** `data-hook="checklist"`, `data-hook="estimator"`, `data-hook="compare"`, `data-hook="zip"`. Each tool outputs a result summary that becomes a prefill token for #contact.
- **Entrance:** Cards rise staggered.
- **Content:** Tool inputs/output described in concept.json; kit modules handle logic.

### 7. Reviews (`#reviews`, t-paper, ledger-row)
- **Purpose:** Social proof in the ledger voice; every review quotes the written log.
- **Layout:** Single-column ledger entries. Each review: entry no., reviewer name + town (mono), excerpt as the reading (body), star rating as status stamp (5★ = OK, 4★ = WATCH), service tag. All carry [[sample Sample review]]. Six reviews from facts.
- **Hooks:** none (static).
- **Entrance:** Rows reveal with rule wipe.
- **Content tokens:** `{{proof.reviews.*}}`.

### 8. Pricing (`#pricing`, t-mid, ruled-grid)
- **Purpose:** Transparent sample ranges; answer "$400 just to show up" with real numbers.
- **Layout:** Compact ledger table. Columns: Entry no., Item, From, To, Note. Five rows from `{{proof.prices}}`. Header row in mono, body rows alternate subtle bg shift. All cells carry [[sample Sample pricing]]. CTA below: "Get your number" → #contact.
- **Hooks:** none.
- **Entrance:** Table fades in, rule draws under header.
- **Content tokens:** `{{proof.prices.*}}`.

### 9. Service area (`#area`, t-deep, split)
- **Purpose:** Confirm coverage; answer "do you serve my town".
- **Layout:** Left: heading + list of areas from `{{biz.areas}}` in mono. Right: stylized SVG map outline of Pittsburgh metro with area dots (no real map tiles). Below: ZIP checker inline if not used in tools section (fallback). Hours block: `{{hours|today}}` with open/closed indicator.
- **Hooks:** `data-hook="open-now"` for live hours status.
- **Entrance:** Text rise, map unclip.
- **Content tokens:** `{{biz.areas}}`, `{{biz.zips}}`, `{{hours|today}}`.

### 10. Contact (`#contact`, t-paper, stack)
- **Purpose:** Primary conversion. Multi-step quote form.
- **Layout:** Centered max-width 640px. Form steps: (1) Problem type + optional photo upload, (2) Preferred time, (3) Contact info. Microcopy under button: "We'll call you back to set up a visit." Phone beside form: `{{biz.phone}}` with `tel:` link and hours. SMS link: `sms:{{biz.phoneE164}}`. Email: `mailto:{{biz.email}}`. Success state: honest demo message per DEMO-RULES §3.
- **Hooks:** `data-hook="form"`. Prefill tokens from tools.
- **Entrance:** Form rises, no animation on inputs.
- **Content tokens:** `{{biz.phone}}`, `{{biz.email}}`, `{{biz.phoneE164}}`.

### 11. Footer (`#footer`, t-deep, ledger-row)
- **Purpose:** Close the ledger; legal; credits.
- **Layout:** Final ledger entry row: "Total inspected: Sample feet" as summary. Below: `{{demo.disclaimer}}`, `[[credits]]`, licence `{{proof.license}}` with [[sample]], nav anchors. Rule extends full width as the closing line.
- **Hooks:** `data-sw-signature` on the closing rule.
- **Entrance:** Static (no animation on footer).
- **Content tokens:** `{{demo.disclaimer}}`, `[[credits]]`, `{{proof.license}}`.

## Rhythm check
Tones: deep → paper → mid → deep → paper → accent → paper → mid → deep → paper → deep.
- No three same tones in a row: ✓
- No two dark sections touching: deep(1) → paper(2) ✓; mid(3) → deep(4) ✓; deep(4) → paper(5) ✓; paper(5) → accent(6) ✓; accent(6) → paper(7) ✓; paper(7) → mid(8) ✓; mid(8) → deep(9) ✓; deep(9) → paper(10) ✓; paper(10) → deep(11) ✓.
- At least one dark band: ✓ (multiple)
- At least one color band: ✓ (t-accent at #tools)
- At least one full-bleed break: ✓ (#break)
- At least 3 interactive hooks: ✓ (checklist, estimator, compare, zip, form, open-now = 6)
- data-sw-signature present: ✓ (hero, camera-story, footer)
- Layout families: split-50-50, rail, ruled-grid, pinned-story, full-bleed, stack, ledger-row, split = 8 families, no neighbours alike ✓
- Quote form appears once: ✓ (#contact only)
- Required content: services ✓, area + ZIP ✓, hours/open-now ✓, sample reviews ✓, sample prices ✓, footer disclaimer + credits ✓

## Media slots needed
- hero: sewer camera still
- story-1: camera reel / inspection
- story-2: trenchless repair detail
- break: Pittsburgh row houses dusk
- Additional gallery/detail slots may be added during media plan if manifest allows.