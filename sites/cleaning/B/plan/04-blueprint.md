# Blueprint — cleaning-B (Every Other Friday Cleaning)

## Round 5
Elevate layout: from 1200px one continuous paper strip runs down the left edge of <main>. Every ticket (hero, price, list, quiz, price list, hours, form) prints straight onto it, with perforations at section joins. Crew and reviews print a strip line, and the footer receipt is the strip's torn end. The bands use the remaining width: services became a full-width 3-column ledger, and the dead left columns are gone. Elevate photo: every frame is a "photo slip" (paper margin, mono timestamp "Fri 09:05 · kitchen"…), one paper grade (multiply onto paper plus a warm wash). Swaps: break = process-shower-glass (was the cabin tub), story-2 = process-vacuum stairs (was the dirty mop), checklist bath = detail-towels, floors = detail-microfiber. MustFix: lazy images are promoted to eager after load, and frames carry real sizes, so the 1170 files load. The triptych was confirmed in 1440-full and 1440-rm-full. Shoulds: labelled row links, en-dash hours with nowrap, quiz slip after the question on phones, footer Visit/House lines echo like the hero, price stays on line one, copy-5 applied.

## Round 3 (photo pass)
Real photos placed (mustFix 1): hero-B2 (towels on a made bed, ticket hero), checklist process-oven / shower-glass / blinds / mop, break room-bath, crew detail-sink / process-vacuum / detail-towels, area home-greenville (no caption names a place), contact detail-microfiber. hero-A3 / hero-C1 / hero-C2 left to the siblings. Footer credits now render real Commons credits; the quiz meter shows a faint empty track instead of a blank box.

## Round 3
Elevate (motion): the scroll now prints the receipt. Each strip's lines feed out left to right one after another (GSAP clip, plays once). The services receipt prints row by row. The estimator picks echo into the hero ticket and the footer TOTAL. Layout: the strips hang from the band top, end at their content with a torn edge and stay sticky beside long columns. Strips alternate left/right (price, frequency and contact flipped). #services is now ledger rows, not a 3×3 card grid. Fixes: the 390/320 overflow (.area/.zip auto grid tracks + the mobile bar at 320; overflow-x: clip backstop), one 2px radius, sentence-case labels, an aria-live empty slip, the credits disclosure removed, a print-ticket action and every copy-3 replacement. Photo stays placeholder (the niche has no real photos).

## Round 2
Rebuilt src in full: every section is now a receipt spine (left third, paper strip running through the bands) plus content, with no reveal/pin/GSAP from-state hiding content (the cause of the blank bands in fullPage captures). Photos are printed inside the strips as tinted, captioned frames that read without real images. Live receipt quote builder in app.js, real tabs markup, copy-2 applied, footer Pages column removed, 390 header and mobile bar fixed.

## Round 2
Rebuilt src in full: every section is now a receipt spine (left third, paper strip running through the bands) plus content, with no reveal/pin/GSAP from-state hiding content (the cause of the blank bands in fullPage captures). Photos are printed inside the strips as tinted, captioned frames that read without real images. Live receipt quote builder in app.js, real tabs markup, copy-2 applied, footer Pages column removed, 390 header and mobile bar fixed.

## Round 1
Elevate photo: swap every placeholder frame for approved manifest keys (hero-A1 kitchen daylight hero; checklist tabs use process-oven/shower-glass/mop/high-dust; crew story uses detail-sink/vacuum/bed; area uses home-huntsville; break uses room-kitchen). Apply uniform grade saturate(.85)/contrast(1.05)/sepia(.08) in CSS. Tie hero frame to signature with clip-reveal driven by --sw-p wipe.
Elevate layout: re-tone lower half so #area becomes t-paper (was t-deep), keeping reviews t-deep as single dark band before it. Sequence now paper hero -> mid quote-builder -> paper crew -> mid checklist -> accent break -> paper frequency -> deep services -> paper proof -> paper area -> deep contact -> deep footer. Receipt rule runs across tonal breaks via dashed left border on .receipt-strip regardless of section tone.

## Rhythm
Tone sequence: paper → mid → paper → mid → accent → paper → deep → paper → paper → deep → deep.
Padding alternation: loose (hero) → tight (quote builder) → normal (crew) → tight (checklist) → none (break) → normal (frequency) → tight (services) → normal (proof) → normal (area) → loose (contact) → loose (footer).
No three consecutive same-tone bands. Accent band appears once (break). Deep reserved for services, contact, footer. Paper used for area to break up lower-half density.

## Sections

### 1. Header (t-paper, sticky)
- Left: `{{biz.name}}` in Bricolage Grotesque display, tracked -0.03em.
- Right desktop: nav links (Services · Checklist · Reviews · Area) + "Price it" primary button + phone `[[call]]`.
- Mobile: hamburger menu + sticky bottom bar with Call + Price it buttons.
- Signature hook: receipt-strip header line prints biz name as first receipt entry on load.

### 2. Hero (t-paper, loose padding, heroFamily 13)
- Layout: centered statement + marquee strip beneath.
- H1: `{{biz.city}} house cleaning, priced line by line.` (clamp h1 scale).
- Kicker above h1: mono DM Mono caps "EVERY OTHER FRIDAY · HUNTSVILLE AL".
- Proof line below h1: `Sample {{proof.rating}} · {{proof.reviewCount}} reviews · Same crew every visit`.
- Two CTAs: "Price it" (primary, scrolls to #quote-builder) + "Call [[call]]" (secondary).
- Receipt strip primitive: dashed left border, torn bottom clip-path. Header line already printed. Hero adds h1 as second receipt line.
- Marquee: slow horizontal scroll of 3 clean-room photos (hero-B1 + room-kitchen + detail-sink), pauses on hover, stops with reduced motion. Bottom fade overlay to paper.
- Next band peeks: 80px of mid-tone visible at viewport bottom.

### 3. Quote Builder (t-mid, tight padding, tool: estimator)
- Section kicker mono: "BUILD YOUR RECEIPT".
- H2: "See your price before anyone comes over."
- Tool UI: beds select, baths select, frequency radio (weekly/EOW/monthly), add-ons checkboxes (oven, fridge, windows, pet hair). All inputs styled per system tokens.
- Live output: `.receipt-strip` updates on each input change. Each selection prints a new `.receipt-line` with mono label, description, and tabular price right-aligned. Total line at bottom with "Sample range" disclaimer.
- CTA below receipt: "Send this quote request" scrolls to #contact and prefills form via data attributes.
- Signature moment: receipt lines wipe in via clip-path driven by --sw-p as user interacts; total counts up.
- Photo slot: none (tool-focused band).

### 4. Services (t-paper, normal padding)
- Section kicker mono: "WHAT WE CLEAN".
- H2: "Line items, not surprises."
- Grid: 3-column desktop / 1-column mobile. Each service card is a receipt-line variant: mono number (01–09), service name in display, blurb in body, sample price range in mono right-aligned.
- Cards use `.card` component with rule border, no shadow.
- Deep-only services marked with status pill "DEEP" in signal green.
- Data from `{{services}}` array.

### 5. Checklist Explorer (t-paper, tight padding, tool: tabs)
- Section kicker mono: "THE LIST".
- H2: "Exactly what gets done, room by room."
- Tabs: Kitchen · Bath · Bedroom · Living · Floors. Visit type toggle: Recurring / Deep.
- Tab content: checklist items rendered as receipt lines. Deep-only items carry "DEEP" pill.
- Photo slots beside tabs on desktop (2-col split): checklist-kitchen, checklist-bath, checklist-floors, checklist-dust rotate based on active tab. Mobile: photo above tabs.
- Disclaimer: "Sample checklist — your house may need more or less."
- Signature: checklist items stack in as receipt lines with stagger on tab switch.

### 6. Break (full-bleed, t-paper)
- Photo: room-kitchen at object-position 50% 50%.
- Treatment: grade + duotone multiply overlay in mid tone.
- Height: 60vh desktop, 40vh mobile.
- No text overlay. Visual breath between dense tool bands.

### 7. Same Crew Story (t-paper, normal padding)
- Section kicker mono: "SAME TEAM EVERY VISIT".
- H2: "They learn your house, your pets, your preferences."
- Split layout desktop: left copy (3 short paragraphs about dedicated crew, pet handling, key entry), right photo stack (story-1 detail-sink, story-2 process-vacuum, story-3 detail-bed) with receipt-line captions beneath each.
- Mobile: stacked copy then photos.
- Trust signals: "Insured · Re-clean within 24h · Key on file or lockbox" as mono pills.

### 8. Reviews (t-deep, normal padding)
- Section kicker mono: "FROM THE RECEIPT BOX".
- H2: "What Huntsville homeowners say."
- Grid: 3-col desktop / 1-col mobile. Each review card styled as receipt note: star rating as quantity, town as SKU, service as line item, quote as description. Sample tag visible.
- Data from `{{proof.reviews}}`.
- Photo slot: proof-2 crew-back as sidebar image on desktop (right edge), hidden mobile.

### 9. Pricing Table (t-paper, tight padding)
- Section kicker mono: "SAMPLE RANGES".
- H2: "What neighbors pay."
- Table: receipt-style rows with item, from-to range, unit, note. All prices prefixed "$". Disclaimer: "Sample pricing — final after walk-through or photos."
- Data from `{{proof.prices}}`.
- No photo. Dense information band.

### 10. Area Served (t-paper, normal padding)
- Section kicker mono: "WHERE WE WORK".
- H2: "Huntsville and six surrounding towns."
- Content: areas list as mono pills, ZIP checker tool inline (input + served/not-served output), home-huntsville photo (proof-1) right-aligned on desktop.
- ZIP checker uses `zip` kit module. Output styled as receipt line with status pill (SERVED / NOT YET).

### 11. Contact Form (t-deep, loose padding, tool: form)
- Section kicker mono: "BOOK YOUR FIRST VISIT".
- H2: "Send your receipt as the request."
- Multi-step form: visit type → house size → frequency → pets/entry → preferred day → contact. Prefilled from quote builder if user interacted.
- Success state: honest demo message "This is a demo site — nothing was sent. In production, this would email your receipt to {{biz.email}}."
- Phone and email displayed beside form on desktop.
- Signature: form submission prints final receipt line "REQUEST SENT" with timestamp.

### 12. Footer (t-deep, loose padding)
- Receipt total line: "THANK YOU" in display, running total of sections visited (decorative counter).
- Fine print: demo disclaimer, license `{{proof.license}}`, insured badge.
- Nav repeat: anchor links + tel + mailto.
- Torn top edge (inverted clip-path) mirrors hero's torn bottom.
- Signature close: final receipt line wipes in on scroll end.

## Signature Integration
Hook: `data-sw-signature="running-receipt"` on `<body>` or main wrapper.
CSS primitive: `.receipt-strip` with `.receipt-line` children. Each line has mono label, description, price. Wipe-in via `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` driven by `--sw-p`.
Sections using signature: hero (header line), quote-builder (live lines), checklist (tab lines), reviews (note lines), pricing (table rows), footer (total line).
Variation per section: hero = static print; quote-builder = interactive add; checklist = staggered stack; reviews = faded note style; pricing = ruled table row; footer = bold total.

## Motion Plan
- Intro: receipt strip slides up from bottom (translateY 40px → 0, 0.8s ease-out); three header lines type in sequentially (DM Mono, 0.3s each, stagger 0.15s). Marquee fades in after. Total ≤1.1s. Skippable via reduced-motion.
- Scroll story 1 (quote builder): each input change triggers receipt line wipe-in (clip-path, 0.4s ease-out). Total counts up with numeral tween.
- Scroll story 2 (checklist): tab switch triggers staggered line stack-in (0.3s each, stagger 0.06s). Deep pills fade in after lines land.
- Hover: receipt lines grow sienna underline from left via scaleX (0.2s ease-out). Consistent across all receipt-line instances.
- Reduced motion: all content visible statically. Receipt lines fully rendered. Marquee paused. No clip-path or stagger animations. Intro skipped.

## Tool Hand-offs
- Quote builder → form: data attributes on CTA button pass beds, baths, frequency, add-ons. Form reads on mount and pre-selects matching fields.
- Frequency quiz → quote builder: sets frequency radio and scrolls to #quote-builder.
- ZIP checker: standalone, no hand-off. Output is informational.
- Checklist explorer: no hand-off. Informational trust builder.

## Accessibility Notes
- All receipt lines have semantic structure (dl/dt/dd or role="listitem"). Prices use `<span>` with aria-label for screen readers.
- Form labels explicit `<label for>`. Error states announced via aria-live.
- Marquee has `aria-hidden="true"` and pauses on hover/focus. Reduced motion stops it entirely.
- Focus ring 3px solid var(--focus), offset 3px on all interactive elements.
- Skip link to #quote-builder as primary action.
## Round 4 (fix, reopened)
Photo: the set was recast as one residential shoot (hero living room hero-A3, #break home bath hero-C2, story fridge/mop/bungalow, checklist vacuum stairs). The hotel, cabin, sweet-potato and green-cloth frames are gone, and every frame shares one warm paper grade (filter plus a multiply wash). The area and contact photos were dropped, because the library has only 9 usable real frames. Motion: each strip now prints top-down under a travelling print head, the quiz answer echoes into the hero ticket, and the footer total arrives filled from the estimator. Also: #services is 2 columns with whole-row links (the label shows on row 1 and on hover/focus), the ticket footers are sentence case, and the copy-4 replacements are applied.
