# Blueprint — mason-C (Kilnside Masonry)

**Round 3 (elevate distinctiveness + type):** Hero recut to a deep "kiln at night" band (deep header too) with the clay map bled to the right edge and a neighborhood chip rail filling the old dead lower-left; picking a hood sets `--hood` on the root so its clay travels into every section stamp, the finder card, the story rail, the ZIP answer border, the header progress, the logo brick and the footer stamp (named). Type: one pressed tabular DM Mono `.plate` voice for kicker city, proof line, stat rail, service numbers and story rail; loose tracked runs and the legend retired; contact h2 becomes the oversized serif moment. Fixes: review stamps → clay chips (stars + town), services stamp no longer stretches at 390, story labels on plates/halo and moved off the brick, curly apostrophe, one price verb ("Price it…"), season chart gets its one-line reading, rail labels lifted, finder mini map filled in clay.

**Round 2:** Placeholder photos were blank, so every photo slot is now an SVG drawing. Layout: services became a ledger, with 3 major entries stamp-divided on the left and 6 minor rows on the right, and the hero was recut so the h1 spans 2 lines over the copy and map. Motion: the story is now a sticky stage at ≥900px where six drawings wipe in and the frames unclip on phone, the brick-finder and tool outputs get the same clip wipe, `.btn` and `.check-row` press to .97, and the mobile bar hides on scroll-down and over the form. The chimney drawing lights its parts via `:has()`, and the credits were fixed (no photos are used, so the list is empty). Current section list: hero · neighborhood · story · services · break · chimney · proof · timing · contact (9).

Rhythm: 10 sections. Tone sequence avoids 3 same in a row and never two dark touching. Layout families alternate. At least one `.break`, one `t-deep`, one `t-accent`, 3+ `data-hook` including `data-sw-signature`.

## 1. Hero — t-paper, layout: map-hero
- **Purpose:** Homeowner sees their neighborhood named and brick-colored; contractor sees local clay knowledge as entry point.
- **Content:** H1 "Tuckpointing & brick repair for St. Louis soft brick"; kicker "{{biz.city}} · Soulard · Lafayette Square · The Hill"; [[call]]; [[quote tuckpointing]]; proof line "{{proof.years}} years on city brick · [[sample rating]]".
- **Media:** SVG map (inline, not a photo slot) with neighborhood fills animated on intro. No hero photo in this slot; the map IS the hero visual.
- **Hooks:** `data-sw-signature` on the large KM·STL stamp overlay; `data-reveal` on headline.
- **Entrance:** Headline rises; map neighborhoods fill westward (intro motion).

## 2. Neighborhood Brick Finder — t-mid, layout: split
- **Purpose:** Objection "do you know my brick?" answered; tool hand-off to form.
- **Content:** Tool `find-your-brick` (filter module): select neighborhood → output brick type, age, watch-for notes; CTA [[quote tuckpointing]] with `data-service="Tuckpointing"`.
- **Media:** Slot `story-1` = `home-stlouis` (brick four-family flat, object-position 50% 40%).
- **Hooks:** `data-filter`, `data-reveal`.
- **Entrance:** Text rises; image unclips.

## 3. The Kiln Story (scroll story) — t-paper, layout: stack
- **Purpose:** Teaches why soft brick needs soft mortar; signature stamp presses in.
- **Content:** Six-frame brick-life timeline: clay → kiln → laid 1890 → hard cement patch 1970 → spalling → tuckpointed with lime. Each frame labelled. Pinned scroll story (verb: fill via clip-path wipe). With reduced motion: six static frames stacked.
- **Media:** Slots `process-rake`, `process-mix`, `process-pack`, `detail-spalling`, `detail-joint-concave`, `material-lime` used as frame backgrounds within the story (not standalone photos).
- **Hooks:** `data-sw-signature` on each frame's stamp; `data-reveal="clip"` on frames.
- **Entrance:** Clip-path wipe per frame on scroll.

## 4. Services Grid — t-paper, layout: grid
- **Purpose:** All services from facts displayed; each card stamped with number.
- **Content:** `<!-- each services -->` repeater. Each card: stamp with `{{#2}}`, service name `{{.name}}`, blurb `{{.blurb}}`, [[quote {{.short}} btn-ghost]].
- **Media:** None (text + stamp cards only).
- **Hooks:** `data-reveal-stagger` on card list.
- **Entrance:** Cards stagger in (60ms).

## 5. Break — full-bleed photo
- **Purpose:** Visual breath; shows St. Louis brick cornice in late sun.
- **Content:** Caption "Corbelled cornice on a Tower Grove flat, late afternoon".
- **Media:** Slot `break` = `hero-C1` (red brick flats with ornate cornices, object-position 50% 30%).
- **Hooks:** `data-reveal="clip"`.
- **Entrance:** Image unclips.

## 6. Chimney Rebuild vs Repair — t-mid, layout: split
- **Purpose:** Objection "rebuild or repair?" answered via tool.
- **Content:** Tool `repoint-or-rebuild` (checklist module): four yes/no inputs → likely job + sample range from `{{proof.prices.2}}`; CTA [[quote chimney-repair]] prefill.
- **Media:** Slot `story-2` = `detail-chimney-crack` (cracked crown, object-position 50% 50%).
- **Hooks:** `data-checklist`, `data-reveal`.
- **Entrance:** Text rises; image unclips.

## 7. Proof Band — t-accent, layout: rail
- **Purpose:** Sample rating, review count, years, guarantee shown on color band; breaks tone sequence.
- **Content:** Stats in mono: "{{proof.rating}} ★ · {{proof.reviewCount}} reviews · {{proof.years}} years · [[sample rating]]". Guarantee line from `{{proof.guarantee}}`. Three review excerpts from `{{proof.reviews.0..2}}` with `[[sample review]]` tags.
- **Media:** None.
- **Hooks:** `data-count` on rating and review count; `data-sw-signature` on each review's star stamp.
- **Entrance:** Numbers count up; stamps press in.

## 8. Tuckpoint Timing + ZIP — t-paper, layout: split
- **Purpose:** Seasonality objection + service area check; dual tool section.
- **Content:** Left: `tuckpoint-timing` (checklist) → season window + next bookable month; CTA [[quote tuckpointing]]. Right: `zip` checker → served/not + form prefill.
- **Media:** Slot `story-3` = `weather-frost` (frost on old brick, object-position 50% 60%).
- **Hooks:** `data-checklist`, `data-zip`, `data-reveal`.
- **Entrance:** Text rises; image unclips.

## 9. Contact Form — t-deep, layout: stack
- **Purpose:** Primary conversion; multi-step quote form.
- **Content:** `form[data-lead]` with steps: service → house age → photos → timing → contact. Honest thank-you state. Phone [[tel]] always visible above form.
- **Media:** None.
- **Hooks:** `data-lead`, `data-open-now`.
- **Entrance:** Form rises.

## 10. Footer — t-deep, layout: stack
- **Purpose:** Demo disclaimer, credits, final stamp.
- **Content:** Final maker's-mark stamp "{{biz.initials}} · {{biz.city}}"; `{{demo.disclaimer}}`; `[[credits]]`; nav anchors; hours `{{hours|table}}`.
- **Media:** None.
- **Hooks:** `data-sw-signature` on footer stamp.
- **Entrance:** Stamp presses in.

## Rhythm check
- Tones: paper → mid → paper → paper → break(photo) → mid → accent → paper → deep → deep. **VIOLATION: sections 9 and 10 are both t-deep.** Fix: change section 10 footer to t-mid.
- Corrected tone sequence: paper → mid → paper → paper → break → mid → accent → paper → deep → mid. No two dark touching. ✓
- Dark band: section 9 (t-deep). ✓
- Color band: section 7 (t-accent). ✓
- Break: section 5. ✓
- Layout families: map-hero, split, stack, grid, break, split, rail, split, stack, stack. **VIOLATION: sections 9 and 10 both stack.** Fix: change section 10 to list layout.
- Corrected layouts: map-hero, split, stack, grid, break, split, rail, split, stack, list. No two neighbours share family. ✓
- Interactive hooks: data-filter (2), data-checklist (6,8), data-zip (8), data-lead (9), data-sw-signature (1,3,7,10). ≥3. ✓
- One #contact form in section 9. ✓
- Required content: services (4), service area + ZIP (8), hours/open-now (9), sample reviews (7), sample prices via tool outputs (2,6), footer disclaimer (10). ✓