# Blueprint — flooring-B (Twelve Mil Flooring)

## Round 4 (fix + elevate)
- Rebased on the src critique-4 actually scored (drawn treatments, kit-wired tools), not the photo-macro round 3. Elevate moves: (1) the hero is split into a statement on the left and the fit tool on the right, and the chip that fits ("Fits your room") is the answer, with no second result chip; (2) the story got a real scrubbed verb: the plank comes apart one layer per statement, the peel starts before the pin, and it's pinned at 640px and wider only.
- Fixes: muted text darkened to #5E5046 on the light tones and #CDBFB0 on deep, accent text #9A4A2A, the t-accent band #A44F2E (all at least 4.5:1). Footer now paints dark (a deep strip with a signal edge). Tracked-caps labels cut (Karla sentence-case). The form uses kit [data-form-nav] Back/Next/Submit at 48px. ZIP go and call at 44px. Copy-4 strings applied. Moisture tool sticky at 1200px and wider. Story texture seam fixed.

## Round 3 (fix + elevate)
- Photo: every placeholder frame is now a chip-cut drawing (moisture probe in slab, plank edge-on break with a 4-layer legend, route map from area tokens, chip-masked oak grain behind the story). No grey boxes, no broken jpgs.
- Layout: service chips run standard · standard · detail. Chips 1 and 6 are two-column spec callouts with an inline drawn cross-section, and chip 6 is dark. Every chip has a "Sample No." index.
- Should: the nested open-now span is gone. Hero compare, slab checklist, estimator, ZIP and form were rewired to the kit APIs (before, none of them worked). The compare answer is a styled "Best fit" chip and it marks the matching hero chip. Hero rebalanced: inputs under the copy, chips and answer on the right.
- Signature also on the proof bar (rating chip). The story pin is now a 100svh stage inside a 265svh section, desktop with motion only. Hidden reveal states are scoped to .sw-motion.


## Section list

### 1. Hero (t-paper)
- **Purpose:** First 5 seconds: trade + town, promise, tool entry, sample proof.
- **Layout:** Family 7 (Tool-first). Left: kicker "Flooring · Atlanta, GA", h1 "See the spec before you choose", proof line, primary CTA "Compare floors". Right: Material Compare tool (room/pets/slab inputs) + stacked sample chips fanning out.
- **Content tokens:** `{{biz.tradeLabel}}`, `{{biz.city}}`, `{{biz.state}}`, `{{proof.prices.*}}` (in tool output only).
- **Media slots:** none (tool + CSS chips).
- **Hooks:** `data-hook="compare"`, `data-sw-signature` (on chip stack).
- **Entrance:** chips stagger-unclip; text rises.

### 2. Proof Line Bar (t-mid)
- **Purpose:** Trust at a glance: rating, area, hours.
- **Layout:** Horizontal rail, 3 columns.
- **Content:** "Sample rating {{proof.rating}} ({{proof.reviewCount}} reviews)" · "{{biz.city}} + {{biz.areas[0..3]}}" · "{{hours|today}}".
- **Hooks:** none.
- **Entrance:** text rises, no animation on bar itself.

### 3. Sample Cards Grid (t-light)
- **Purpose:** Services as physical chips with specs visible. Answers "cheap vinyl peels" and "no prices".
- **Layout:** 4-column grid (2-col tablet, 1-col mobile). Each card is a `.chip`.
- **Content:** 8 services from facts.json. Each chip shows: service name, blurb, spec strip (wear layer / thickness / water / refinishable), sample price range with Sample tag.
- **Media slots:** none (CSS chips).
- **Hooks:** `data-hook="estimator"` (each chip links to estimator pre-filled with that service).
- **Entrance:** stagger unclip per chip.

### 4. Cross-Section Story (t-deep)
- **Purpose:** Show what mil number buys. Signature moment.
- **Layout:** Pinned scroll story (640px+). Centered plank cross-section diagram; three layers peel apart vertically with labels. Below: 3 short statements that scroll past.
- **Content:** Layer 1: wear layer (mil = dog scratch resistance). Layer 2: print layer (grain realism). Layer 3: core (SPC/WPC stability on slab). Statements: "12 mil survives dogs", "Printed grain reads real at arm's length", "Rigid core lies flat on Atlanta slabs".
- **Media slots:** `detail-grain-whiteoak` (background texture behind diagram).
- **Hooks:** `data-sw-signature` (cross-section peel).
- **Entrance:** layers separate via --sw-p; labels draw in.

### 5. Slab Moisture Explainer (t-paper)
- **Purpose:** Answer "floor on wet slab" fear. Tool section.
- **Layout:** Split (text left, checklist tool right).
- **Content:** Why RH probe matters, what high reading means, leveling sample range. Tool inputs: slab age, ground-floor room, past water. Output: recommendation + "Book a moisture test" CTA.
- **Media slots:** `process-moisture`.
- **Hooks:** `data-hook="checklist"`.
- **Entrance:** text rises; image unclips.

### 6. Break Photo (t-light)
- **Purpose:** Visual breath, material texture.
- **Layout:** Full-bleed photo, 50svh height.
- **Media slots:** `hands-sample`.
- **Caption:** "Hand holding LVP sample against finished floor, edges and wear layer visible."
- **Entrance:** image unclip.

### 7. Reviews (t-mid)
- **Purpose:** Social proof with Sample label. Answers "stain won't match" and "floor clicks".
- **Layout:** 3-column grid of `.chip` review cards. Quote mark replaces cross-section.
- **Content:** 6 reviews from facts.json (Danielle P., Kevin O., Gloria T., Nate H., Imani J., Chris L.). Each shows: quote, name, town, service, stars. Sample tag on rating.
- **Media slots:** none.
- **Hooks:** none.
- **Entrance:** stagger rise.

### 8. Square-Foot Estimator (t-accent)
- **Purpose:** Price transparency. Primary conversion tool.
- **Layout:** Tool centered, max-width 800px. Inputs above, result below.
- **Content:** Room selector (preset sizes or L×W), service dropdown, stairs count. Output: total sq ft, sample price range (from `{{proof.prices.*}}`), days out of room. CTA: "Send these numbers" → quote form pre-filled.
- **Media slots:** none.
- **Hooks:** `data-hook="estimator"`.
- **Entrance:** static (tool section, no reveal).

### 9. Service Area + ZIP (t-deep)
- **Purpose:** Confirm coverage. Secondary conversion gate.
- **Layout:** Stack: heading, ZIP input, area list.
- **Content:** "We serve {{biz.city}} and {{biz.areas.length}} surrounding cities." ZIP checker. Area pills. Hours.
- **Media slots:** `home-atlanta`.
- **Hooks:** `data-hook="zip"`.
- **Entrance:** text rises; image unclips.

### 10. Contact Form (t-paper)
- **Purpose:** Primary conversion capture.
- **Layout:** Single column, max-width 640px. Multi-step form.
- **Content:** Steps: service → rooms + sq ft → current floor + water → photos → timing → contact. Microcopy: "We'll call you back to set up a visit." Phone beside: `{{hours|today}}`.
- **Media slots:** none.
- **Hooks:** `data-hook="form"`, id="contact".
- **Entrance:** static.

### 11. Footer (t-deep)
- **Purpose:** Legal, credits, signature close.
- **Layout:** 4-column grid + bottom bar.
- **Content:** Logo + initials chip (signature variant). Licence `{{proof.license}}`. Demo disclaimer `{{demo.disclaimer}}`. Photo credits `[[credits]]`. Nav anchors.
- **Media slots:** none.
- **Hooks:** `data-sw-signature` (footer chip).
- **Entrance:** static.

## Rhythm check
- Tones: paper → mid → light → deep → paper → light → mid → accent → deep → paper → deep
- No 3 same tones in row: PASS
- No two dark touching: PASS (deep→paper→light between deep sections)
- Dark band present: YES (sections 4, 9, 11)
- Color band present: YES (section 8, t-accent)
- Full-bleed break: YES (section 6)
- Interactive hooks ≥ 3: compare, estimator (×2), checklist, zip, form = 6
- data-sw-signature: hero, cross-section, footer = 3
- Layout families: tool-first, rail, grid, pinned-story, split, break, grid, tool-center, stack, form, footer-grid = 9 unique, no neighbours alike
- #contact appears once: YES