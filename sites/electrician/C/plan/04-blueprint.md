# Blueprint — electrician-C (Bungalow Current Electric)

## Round 3
Layout elevate: #rooms is now one drawn house (roof + chimney over the attic card, bedroom/ceiling/inspection floor, front/living/kitchen floor, basement slab, dashed detached garage, yard trench) whose rooms hold the 9 service cards, and the lights come on room by room on scroll; #reviews is a kitchen-table spread of letters around the big quote (no empty column, no orphan). Stars now follow each rating (Erica 4/5); hero cut so ~90px of the ledger peeks at 1440x900; inactive story steps >=4.5:1, PATCHED/TESTED full ink; attic label clear of posts; break wires above the h2; mono eyebrows dropped on #reviews/#area/#contact; rating line in body type; room buttons 48px; copy-3 applied (sub-line buttons hand-written).
Open issues: hours stay 24h (hand-written dl) because {{hours|table}} prints "5 pm" and check-static flags any standalone 5 as an unlabelled rating (tools/check-static.mjs needLabel regex); fix the tool, then switch to {{hours|table}}. OG image is a plain color while the hero is a placeholder file.

## Round 2
Rebuilt src from scratch: reveals now live on small elements only (no whole-section fades, so full-page and reduced-motion shots show everything); placeholder photos sit over drawn period art (front room, attic knob-and-tube, porch facade, break run) that hides itself only when a real photo loads, with story-telling alts; a scrubbed "one room rewired" wall story (sticky drawing ≥900, self-drawing cable on phones); the room-marker + house-plan signature now runs hero → header mini-map → room cards → every section marker → footer house nav; kit markup corrected (checkbox decoder, estimator with data-est-item + live garage-distance sketch, zip form, 4-fieldset form). Invented facts removed.

| # | id | tone | purpose | layout | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #top | t-paper | trade + town + action + proof | arch | h1 city token, lead, quote+call, today/areas/rating | hero (over drawn room) | data-sw-signature (arch + 01 marker) | arch line draws, lamp warms, split lines |
| 2 | #visit | t-deep | "when can you come / do you serve me" | ledger | hours today + 24h table tokens, phone, areas list, how we work, family-owned Sample | — | opennow | none |
| 3 | #rewire | t-paper | "will you wreck my plaster" | story | 4 steps + wall SVG | — | data-hook=story | scrubbed wall drawing |
| 4 | #rooms | t-mid | every service | house | 9 services in 8 room cards with house mini-plans | — | prefill | stagger, house maps |
| 5 | .break | t-deep | why old wiring struggles | bleed | statement + then/now | break (over drawn run) | — | new run draws on scroll |
| 6 | #attic | t-paper | "do I have knob-and-tube" | tool-split | checkbox decoder + meter, inspection sample price | story-1 (over attic drawing) | data-hook=decoder | marker |
| 7 | #outlets | t-mid | two-hole outlet options | tabs | 3 tabs with outlet diagrams, sample price | — | data-hook=outlets | tab panel in |
| 8 | #garage | t-accent | EV charger cost | planner | range → garage distance sketch, sample price, print | — | data-hook=ev-planner | sketch moves |
| 9 | #reviews | t-paper | social proof | letters | lead quote + 5 Sample reviews, rating Sample | — | — | stagger |
| 10 | #area | t-deep | ZIP check | list-zip | areas repeater, zip form | homes-kc-bungalow-exterior (over facade drawing) | data-hook=zip | marker |
| 11 | #contact | t-paper | the one form | form | next steps, 4-step form | — | form | none |

Rhythm: 11 sections; tones paper/deep/paper/mid/deep/paper/mid/accent/paper/deep/paper (no darks touch, never 3 alike); 11 distinct layout families; 5 hooks incl. signature; one #contact; every CTA → #contact or tel:. Hours table written with 24h tokens (the kit's "5 pm" trips the rating-sample check). Header mini-map shows ≥1440 only.

Open issues: none. OG image is a plain color while hero is a placeholder file.

---

## Round 1 (superseded)
- Motion elevate: DrawSVG brass connector line animation added to app.js with graceful scaleY fallback; reveal patterns diversified (slide-left §3, slide-right §4, clip hero/break).
- Wow elevate: EV estimator output redesigned as arch-frame artifact with labeled cost breakdown and driver list instead of plain price range.
- Must-fix: All placeholder alt texts replaced with descriptive content; form thanks meta-commentary removed; CTAs unified to "Price my rewire".
- Should-fix: Trust strip phrasing corrected; service cards use consistent CTA; footer credits use [[credits]] macro.

## Rhythm check
- 10 sections total.
- Tone sequence: paper → deep → paper → mid → paper → accent → paper → deep → paper → deep. No two darks touch. One deep band (§2), one accent band (§6). At least one `.break` (§5).
- Layout families: arch-hero, split, rail, grid, stack, statement, list, mosaic, form, footer-rule. No two neighbours share a family.
- Hooks: `data-sw-signature` (hero room marker), `data-zip` (§7), `data-estimator` (§6), `data-tabs` (§4), `data-checklist` (§3), `data-open-now` (§2), `data-accordion` (#8 FAQ). 7 hooks ≥ 3 ✓.
- Form appears once at §9. Every CTA above points to `#contact` or `tel:`.
- Required content: services (§5), service area + ZIP (§7), hours/open-now (§2), sample reviews (§8), sample prices via estimator (§6), footer disclaimer + credits (§10).

---

## §1 Hero — t-paper, arch-hero
**Purpose:** Homeowner's first 5 seconds: trade + town + action + proof. Contractor's wow: arch-masked photo is the bungalow itself as frame.
**Layout:** Arch-masked photo (family 13) centered; headline below like a lintel; room marker "Front Porch" anchored bottom-left with brass connector line starting the vertical thread.
**Content tokens:** h1 "Kansas City bungalow rewiring, room by room"; kicker "Electrical for 1920s homes"; proof line "{{proof.years}} years · {{biz.areas.0}} to {{biz.areas.5}} · {{proof.rating}} [[sample rating]]".
**Media slot:** `hero` → hero-C1 (lamp-lit bungalow front room).
**Hooks:** `data-sw-signature` on first `.room-marker`.
**Entrance:** Arch mask expands (800ms), headline lines rise staggered (500ms each). Reduced motion: static arch, text visible.
**CTAs:** `[[quote rewire btn-primary | Price my rewire]]`, `[[call btn-secondary]]`.

## §2 Open Now + Trust Strip — t-deep, split
**Purpose:** Answer "Are they open?" and "Can I trust them?" in one glance. Dark band breaks the light hero.
**Layout:** Two-column split. Left: open-now status + hours summary. Right: three trust pills (family-owned, permits pulled, photos of every finding).
**Content tokens:** `{{hours|today}}`, "Family-owned since {{proof.years}} years ago", "Permits and inspections included", "Photos of every finding".
**Media slot:** none.
**Hooks:** `data-open-now`.
**Entrance:** Text rises from left, pills fade in from right. No animation on reduced motion.

## §3 Wiring Era Decoder — t-paper, rail
**Purpose:** Objection "Is my old wiring dangerous?" answered with a self-diagnosis tool that hands off to the form.
**Layout:** Horizontal rail: left side has the checklist tool (decade, outlet type, basement wiring visible); right side shows result card with likely wiring type + recommendation. Room marker "Living Room" at top.
**Content tokens:** Tool labels from facts context; result uses conditional copy.
**Media slot:** `process-testing` (meter on outlet) as small inset in result card.
**Hooks:** `data-checklist` (wiring-era-decoder variant).
**Entrance:** Rail slides in from left; result card unclips. 
**Hand-off:** "Book an inspection" button → `#contact` with service="Electrical inspections" prefilled.

## §4 Two-Prong Options — t-mid, stack
**Purpose:** Objection "What do I do about these old outlets?" explained without fear. Mid tone breaks paper→paper run.
**Layout:** Three stacked cards, each a legal path (ground wire, GFCI protection, replace-like). Tabs switch between them on desktop; accordion on mobile. Room marker "Kitchen" beside heading.
**Content tokens:** Service blurb from `{{services.3.blurb}}`; pros/cons per path.
**Media slot:** `process-outlet` (two-prong outlet close-up).
**Hooks:** `data-tabs` (desktop), `data-accordion` (mobile fallback).
**Entrance:** Cards stagger-rise. Tabs slide content horizontally.
**Hand-off:** Each card has `[[quote two-prong btn-ghost | Update my outlets]]`.

## §5 Services by Room — t-paper, grid
**Purpose:** All services from facts, grouped by room instead of a 60-item dump. Answers "Do you do X?" without overwhelming.
**Layout:** 3×3 grid of service cards, each inside a mini arch frame with a room tag (Attic, Kitchen, Basement, etc.). Room marker "Hallway" at section top.
**Content tokens:** `<!-- each services -->` repeater; card shows `{{.name}}`, `{{.blurb}}`, room tag derived from service short name.
**Media slot:** none (cards are text + arch frame).
**Hooks:** none (static grid).
**Entrance:** Grid items unclip in stagger (60ms delay each).
**CTAs:** Each card has `[[quote {{.short}} btn-ghost]]`.

## §6 EV Charger Estimator — t-accent, statement
**Purpose:** Objection "Can my house handle an EV charger?" + cost transparency. Accent band provides visual break and draws attention to high-value service.
**Layout:** Large statement heading left; estimator tool right. Sample price range displayed prominently with [[sample pricing]] tag. Room marker "Garage" at top.
**Content tokens:** Heading "Level 2 charging, planned around your house"; estimator inputs (parking spot, panel distance, hardwired vs plug); output uses `{{proof.prices.3.from}}`–`{{proof.prices.3.to}}`.
**Media slot:** `equipment-ev-charger` (EV charger on garage wall) as background image with multiply overlay.
**Hooks:** `data-estimator`.
**Entrance:** Statement text rises; estimator dials in.
**Hand-off:** "Get my EV quote" → `#contact` with service="EV chargers" prefilled.

## §7 Service Area + ZIP — t-paper, list
**Purpose:** Objection "Do you serve my street?" answered instantly. ZIP checker is the primary interaction.
**Layout:** Vertical list of areas served (from `{{biz.areas|list}}`) left; ZIP input + result right. Room marker "Porch" returns, closing the tour loop.
**Content tokens:** Areas list; ZIP checker against `{{biz.zips|csv}}`.
**Media slot:** none.
**Hooks:** `data-zip`.
**Entrance:** List items fade in sequentially; ZIP input slides up.
**Hand-off:** Yes result → form with ZIP prefilled. No result → "We may still help—call to ask."

## §8 Reviews + FAQ — t-deep, mosaic
**Purpose:** Social proof + remaining objections. Second dark band (not touching §2's dark). Mosaic layout breaks the list/grid pattern.
**Layout:** Asymmetric mosaic of 4 review cards + 3 FAQ accordions. Reviews carry [[sample review]] tag. FAQ answers permit, plaster patching, timeline questions.
**Content tokens:** `<!-- each proof.reviews 0:4 -->`; FAQ hardcoded from brief objections.
**Media slot:** `homes-kc-bungalow-exterior` as one mosaic tile (no face, no house number).
**Hooks:** `data-accordion` (FAQ).
**Entrance:** Mosaic tiles unclip in random order (stagger 80ms). FAQ accordions static.
**Note:** All reviews labelled Sample. Star rating shown as "{{proof.rating}} ([[sample rating]])".

## §9 Quote Form — t-paper, form
**Purpose:** Primary conversion. Multi-step form captures service, details, timing, contact. Only form on page.
**Layout:** Centered form card, max-width 640px. Four steps with progress indicator. Honest thank-you state: "Thanks, {name}. In your version this goes straight to your phone and inbox."
**Content tokens:** Service options from `<!-- each services -->`; honeypot `website2`; time trap `t`.
**Media slot:** none.
**Hooks:** `data-lead` (form module).
**Entrance:** Form card rises; no animation on steps (interaction-driven).
**Prefill:** Any `data-service` link above lands here with step 1 pre-selected.

## §10 Footer — t-deep, footer-rule
**Purpose:** Legal, credits, navigation. Floor-plan silhouette acts as divider; markers become nav links. Closes the bungalow tour metaphor.
**Layout:** Simplified floor-plan SVG as top border; three columns (nav, contact, legal); disclaimer line; credits list.
**Content tokens:** `{{demo.disclaimer}}`; `[[credits]]`; `{{biz.phone}}`; `{{biz.email}}`; nav anchors to #hero, #services, #area, #contact.
**Media slot:** none.
**Hooks:** none.
**Entrance:** Static (footer never animates).
**Signature echo:** Floor-plan markers reuse `.room-marker__dot` styling as nav bullets.