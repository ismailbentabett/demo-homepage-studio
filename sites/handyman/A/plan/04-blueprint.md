# Blueprint — handyman-A

## Round 3
Elevate photo: the 10:30 break now has its own portrait plate under 640px (tiles, tub corner, the bead crossing the frame, the gun on the right third; caption up in the tile field, band 56svh) and the bead never drops below 35%, so no frame is blank. Elevate motion: the page is the clock. A header pill runs 08:00→12:00 with scroll, each rail pill presses in and inks solid red when reached (it reverses on the way back), the hero time card's In→Out bar fills, and the footer Punch-out slams at 12:00. Shoulds: proof line is now a Work Sans sentence, mono kept for times and prices only, #how/#area on #FAF6EE, the footer's right column is a punched weekly hours card (Sun struck), review pills carry the service, the area card has no late reveal, the 07:50 card is 4/3 with the dial inside on phones, bylines use hyphens: manual, and a hero time card fills the empty right side at ≥1100.

## Round 2 (reopened)
Elevate photo: every frame is now a drawn job ticket (ink line drawing on the buff ruled time card, punched time stamp + label); the 1×1 placeholder PNGs are hidden by CSS so no blank/green frame shows, with or without JS; the break is a full-bleed drawn tub whose caulk bead runs with scroll under the 10:30 stamp. Elevate motion: reveals vary by role (service rows wipe, visit cards drop, reviews scale, planner/area/contact still), rails ink down on scrub, stamps punch in, "How a visit runs" scrubs a clock dial 08:00→12:00 and lights the steps (no pin, so the page never stalls), footer 12:00 stamp slams. Fixes: h1 carries trade + city on one sentence; planner rebuilt as a "Visit card" artifact (punch holes, numbered rows, prefill of the booking form, printable card); services split into two time-card visits + ruled repair rows; fewer tracked caps; review sample tags per card; kit split h1 bug (hidden forever under motion) removed; 320px overflow fixed.

## Round 1 fix
Elevated photo by adding a timestamp overlay (`.break__stamp`) on the break photo so photography participates in the Time Card Punch signature. Elevated copy by unifying every primary CTA to "Book a visit" (hero, service cards, pricing, form submit, mobile bar). Fixed h1 to include trade+city ("{{biz.city}} handyman:"). Replaced straight hyphens with en-dashes in time ranges. Broke uniform 9-card service grid into three sub-groups (Visit lengths / Repairs & fixes / Specialty) for rhythm. Redesigned planner output as a stamped time-card artifact (`.planner-card`). Updated media.json alt text to visitor-facing descriptions. Credits warning (11 placeholder `<a>` without href) is a known tool limitation with placeholder media; documented as open issue.

### Open issues
- `check-static` reports 11 warnings for `<a>` without href in `ul.credits`. Root cause: `tools/build.mjs` emits `<a>Pexels</a>` when manifest entries lack `credit.url` (all placeholders). Fix requires either editing the build tool or adding credit URLs to the niche manifest. Neither is permitted mid-fix. Warning is cosmetic and does not block delivery.

## Rhythm check
- 10 sections. Tones: paper → light → deep → paper → accent → paper → deep → light → paper → deep. No two dark touching. One color band (t-accent). One break. 4 layout families. 4 hooks including signature.

## Sections

### 1. Hero (t-paper, statement + marquee)
- **Purpose:** First 5 seconds: promise, time card visual, CTA.
- **Layout:** Centered statement, marquee strip below.
- **Content:** Kicker "Handyman visits in {{biz.city}}", h1 "8:00 to 12:00. Your list, done.", proof line "{{hours|today}} · Sample {{proof.rating}} rating · {{proof.reviewCount}} reviews". Buttons: [[quote half-day btn-primary]] + [[call btn-secondary]].
- **Media:** hero-A1 (marquee tiles: fix-drywall-patch, fix-shelf, fix-door-rehung, fix-faucet).
- **Hook:** `[data-sw-signature]` on time rail container; first stamp "08:00" visible.
- **Entrance:** Line-mask h1 reveal; marquee starts after intro.

### 2. How It Works (t-light, split)
- **Purpose:** Answer "They'll say 8–5 and show at 4" with clocked sequence.
- **Layout:** Split: left text steps, right photo.
- **Content:** 3 steps: "08:00 Punch in & walk the list", "08:10–11:40 Work in agreed order", "11:55 Clean up & punch out". Each step has timestamp pill.
- **Media:** tools-bag (right column).
- **Hook:** None (quiet section).
- **Entrance:** Text rises; image unclips.

### 3. Half-Day Planner (t-deep, tool)
- **Purpose:** Answer "Too many items for one visit" + conversion path.
- **Layout:** Tool centered, full width.
- **Content:** `[data-checklist]` with items from services. Output: "Fits a 4-hour visit" + order suggestion. Button: "Book this list" → #contact prefill.
- **Media:** None.
- **Hook:** `[data-checklist]`, `[data-service]`.
- **Entrance:** Tool fades in static (no motion on interactive).

### 4. Services (t-paper, grid)
- **Purpose:** Show what fits in a visit; answer "Trip charge for one thing".
- **Layout:** 3-column grid of service cards.
- **Content:** `<!-- each services -->` card with name, blurb, [[quote .short btn-text]]. Timestamp pill per card group.
- **Media:** None.
- **Hook:** `[data-service]` on each quote button.
- **Entrance:** Staggered card rise.

### 5. Price By Visit (t-accent, table)
- **Purpose:** Answer "How much?" with sample ranges.
- **Layout:** Centered table on accent band.
- **Content:** Table from `{{proof.prices}}` with columns Item / From / To / Note. [[sample pricing]] tag above.
- **Media:** None.
- **Hook:** None.
- **Entrance:** Table rises as one block.

### 6. Break (full-bleed photo)
- **Purpose:** Visual pause, show real work texture.
- **Layout:** Full-bleed, 60svh min-height.
- **Content:** Caption: "Fresh caulk along a tub edge, residential bath."
- **Media:** fix-caulk-tub.
- **Hook:** None.
- **Entrance:** Image unclips.

### 7. Proof / Reviews (t-deep, annotated list)
- **Purpose:** Answer "Sloppy patch" fear with specific outcomes.
- **Layout:** Vertical list with timestamp annotations.
- **Content:** 3 reviews from `{{proof.reviews}}` with star count, town, service. Each has timestamp pill ("11:40") and handwritten-style note. [[sample review]] tag.
- **Media:** None.
- **Hook:** None.
- **Entrance:** Review cards rise with stagger.

### 8. Service Area (t-light, split)
- **Purpose:** Confirm ZIP coverage; secondary conversion.
- **Layout:** Split: left text + ZIP checker, right map illustration (SVG drawn, no tiles).
- **Content:** "We serve {{biz.areas|list}}." `[data-zip]` input. Below: hours table `{{hours|table}}`.
- **Media:** region-grand-rapids-house (right column).
- **Hook:** `[data-zip]`.
- **Entrance:** Text rises; image unclips.

### 9. Quote Form (t-paper, form)
- **Purpose:** Primary conversion.
- **Layout:** Centered form, max-width 640px.
- **Content:** Multi-step form `[data-lead]`. Microcopy: "We'll call you back to set up a visit." Phone beside: [[tel]].
- **Media:** None.
- **Hook:** `[data-lead]`, `[data-service]` (prefill target).
- **Entrance:** Form rises static.

### 10. Footer (t-deep, punch-out)
- **Purpose:** Final CTA + legal.
- **Layout:** Centered stack.
- **Content:** "12:00 PUNCH OUT" stamp with [[call btn-primary]] inside. Links: anchors only. `{{demo.disclaimer}}`. [[credits]]. Licence: {{proof.license}} ([[sample licence]]).
- **Media:** None.
- **Hook:** Signature stamp variation.
- **Entrance:** Static.