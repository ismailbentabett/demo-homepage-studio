COPY: ok

# Five-second test
At 1440: "Shade gardens for Savannah’s live oaks" — landscaping for shade in Savannah. Arch photo right, marker tag above headline. Call or text buttons below proof line. Clear.
At 390: Same hierarchy stacks. Buttons above fold. Phone in sticky header. Clear.

# First screen (9)
h1 states trade + city + outcome in 6 words. Proof line "14 years in Savannah · Sample 4.9 (64 reviews)" anchors trust. Two distinct CTAs: primary "Call to plan", secondary "Text a photo". Phone visible in header. Hero uses family 13 (arch mask) executed with intent via clip-path reveal. Next band (statement) peeks below fold. No deductions.

# Distinctiveness (9.5)
Botanical Plant Marker signature appears in 5 sections: hero (marker--hero), services (marker--card), story (marker inline), reviews (marker--tag), footer/service-area (marker--pill). Signature organizes information structurally, not decoratively. Palette "Live Oak + Lantern Gold" (#2E3B2C deep, #D4A855 accent, #F2ECE4 paper) is unique in niche. Type pair Cormorant Garamond + Albert Sans differs from A (slab serif) and B (mono-accent). Cover-the-logo test passes: the marker shape and Latin binomials name the concept immediately. -0.5: services grid is a standard 3-col card layout; the marker distinguishes it but the underlying shape is conventional.

# Typography (9)
Fluid clamp scale from --fs--2 to --fs-h1. Body ≥16px (--fs-0 starts at 1rem). Measure constrained to 62ch for p, 34ch for lead. Display tracking -.02em. Tabular numerals in estimator output and hero proof. Lead paragraph set apart with weight 450 and larger size. Only 2 families used. No orphans in headings (balance/balance text-wrap applied). Curly quotes used in reviews. En-dash in hour ranges. Nothing under 13px (--fs--2 floors at .75rem = 12px but only for meta/sample tags, acceptable).

# Layout and rhythm (8.5)
11 sections with clear tone alternation: deep(hero) → light(statement) → paper(services) → deep(break) → light(picker) → paper(story) → paper(season) → light(reviews) → accent(prices) → deep(area) → light(form) → deep(footer). No two adjacent sections share tone except paper-paper (story/season) which are separated by content density difference. Full-bleed break photo provides breath. Asymmetric split-story section. Dense services grid balanced by quiet statement section. -0.5: story and season are both t-paper and similar density; reads as a slight plateau. -0.5: services grid is 9 cards in 3 columns, creating a dense block that competes with the marker rhythm. -0.5: footer areas repeat the same marker-pill pattern as the area section above, redundant.

# Photo and video (8.0)
All media are placeholders per demo stage. Slots are appropriate to brief: hero-C2 (shaded courtyard), region-savannah-street (break), process-planting (story). Alt text describes intended frame. Width/height attributes present. Lazy loading applied. Cannot verify grade consistency, crop ratios, or object-position effectiveness without rendered screenshots. Score reflects correct slotting and technical setup but caps at 8.0 until real media confirms art direction. No off-topic frames detectable from filenames.

# Copy (8.5)
Voice matches concept samples: specific nouns (cast iron plant, holly fern, climbing fig, muhly grass, wax myrtle, saw palmetto, pine straw, tabby paths). Answers homeowner fears about plant survival ("chosen for the light, soil and salt your site actually has"). Microcopy at ZIP check ("confirm coverage"), form ("No budget field, no sales pitch"), estimator ("Sample pricing"). Every review tagged Sample. -0.5: inconsistent primary action naming — hero says "Call to plan", menu says "Get a quote", form button says "Send request", service cards say "Price it". Should unify to one verb. -0.5: service card blurbs reuse facts.json verbatim; could be more conversational to match the voice samples.

# Mobile (9)
Mobile bar with Call + Text buttons, min-height 48px each. Bar hides on scroll down via .is-hidden class. Header collapses to logo + menu button below 900px. Grid breakpoints at 640 (2-col), 900 (split layouts), 1100 (3-col services). Touch targets meet 48px minimum. h1 wraps to ≤4 lines at 390 based on clamp sizing. Form stacks vertically. No horizontal scroll risk from CSS inspection.

# Accessibility (8.5)
Skip link present. Focus ring: 3px solid var(--focus) with 3px offset on all interactive elements. Reduced motion: dapple animation paused, all reveals forced visible, transitions disabled. JS-off: tabs show all panels, filter controls hidden, compare falls back to stacked images, menu hidden. Form inputs have explicit labels. Fieldset/legend on radio group. aria-live on ZIP result and estimator output. Heading order valid (one h1, sequential h2s; sr-only h2 is acceptable). -0.5: Gloria F. review shows 5 star SVGs but aria-label says "4 out of 5 stars" — visual/programmatic mismatch. -0.5: star rating uses repeated inline SVGs without a reusable component; risk of count errors across 6 reviews.

# Motion and interaction (9)
Intro: hero image clip-path reveal (inset bottom to full). h1 split-text line stagger. Scroll: data-reveal fade-up on sections, data-reveal-stagger on cards/reviews with calculated delays. Dappled light CSS gradient animation on t-deep sections (8s cycle, paused reduced-motion). Hover: btn press scale(.97), link color transition. Lenis loaded for smooth scroll. Three distinct hooks beyond plain reveals: clip mask, stagger, dapple ambient. No scroll-jacking. No bounce easing. Story reversible (standard scroll). Pinned elements only at ≥640px (none detected).

# Wow moment (9)
Two connected tools tied to thesis: Plant Picker filters by light/moisture and outputs Savannah-appropriate plants; Season Planner shows monthly tasks. Both hand off to quote form with pre-filled service. Estimator provides sample ranges labeled clearly. The signature marker system extends into tool outputs (review tags, area pills). A homeowner would use the plant picker to validate expertise before calling. -0.5: plant picker output cards are plain text, not styled as markers; missed opportunity to make the tool's output *be* the signature.

# Polish (9)
SVG favicon + apple-touch-icon. OG image 1200×630 declared. JSON-LD HomeAndConstructionBusiness with hours, areas, phone. Theme-color #2E3B2C. Print stylesheet isolates estimator. Consistent --radius: 3px throughout. Single shadow token. Icon stroke widths consistent (2px). Forced colors borders on interactive elements. No transition:all. Footer designed with nav, areas, contact, disclaimer, credits, copyright.

# Arithmetic
14×9 + 12×9.5 + 10×9 + 10×8.5 + 8×8.0 + 8×8.5 + 7×9 + 7×8.5 + 12×9 + 8×9 + 4×9 = 126 + 114 + 90 + 85 + 64 + 68 + 63 + 59.5 + 108 + 72 + 36 = 885.5 / 100 = 8.86

# Must
None.

# Should
1. **dist/index.html line 983-985, #reviews**: Gloria F. review has 5 star SVGs but aria-label="4 out of 5 stars". Fix: remove one `<use href="#i-star"/>` element to match the 4-star rating, or update aria-label to 5 if the data was wrong. Check all 6 reviews for consistency.
2. **dist/index.html lines 619, 643, 1170**: Primary action named differently in menu ("Get a quote"), hero ("Call to plan"), and form ("Send request"). Fix: unify to "Plan your garden" or "Get a plan" across all touchpoints. Service card "Price it →" can stay as secondary since it leads to the same form with service pre-filled.
3. **dist/index.html #services**: 9-card grid creates a dense block. Fix: either show top 6 services with a "See all 9 services" link, or insert a tonal break/photo between service groups 3 and 4 to restore rhythm.
4. **dist/index.html #plant-picker output**: Plant cards are plain text. Fix: style `.plant-card` as `.marker.marker--card` so the tool output uses the signature primitive, reinforcing the concept.

# Elevate
1. **Layout**: Insert a narrow atmospheric photo strip or a t-deep quote break between the first 3 and last 6 service cards to break the dense grid rhythm and add tonal contrast mid-section.
2. **Wow**: Restyle the plant picker output cards using the `.marker` primitive so the tool's result is visually identical to the signature system, making the interactive moment inseparable from the design identity.