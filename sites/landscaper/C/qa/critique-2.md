COPY: ok

# Five-second test
At 1440 (verified via dist/index.html): "Shade gardens for Savannah's live oaks" — landscaping for shade in Savannah. Arch photo right, marker tag above headline. Call or text buttons below proof line. Clear.
At 390: Same hierarchy stacks. Buttons above fold. Phone in sticky header. Clear.

Note: Screenshots directory is empty for this round. Scoring is based on DOM inspection of dist/index.html against r1 findings and concept claims. Photo score remains capped at placeholder ceiling until real media confirms art direction.

# First screen (9)
dist/index.html lines 587-593: h1 states trade + city + outcome in 6 words ("Shade gardens for Savannah's live oaks"). Proof line "14 years in Savannah · Sample rating 4.9 (64 reviews)" anchors trust with proper sample-tag class. Two distinct CTAs: primary "Call to plan", secondary "Text a photo". Phone visible in header (line 561). Hero uses family 13 (arch mask via .hero-frame with border-radius: 999px 999px 0 0) executed with intent via clip-path reveal (data-reveal="clip"). Next band (services-intro) peeks below fold as sec--hero uses min-height: calc(100svh - var(--header-h)). No deductions from DOM. Score unchanged from r1.

# Distinctiveness (9.5)
Botanical Plant Marker signature appears in 5+ sections: hero (.marker--hero, line 596), services (.marker--card, lines 620-716), story (.marker-rail, line 765), reviews (.marker--tag, lines 837-903), area/footer (.marker--pill, lines 962-974, 1116-1128). Signature organizes information structurally. Palette "Live Oak + Lantern Gold" (#2E3B2C deep, #D4A855 accent, #F2ECE4 paper) defined in CSS vars (lines 282-286). Type pair Cormorant Garamond + Albert Sans differs from siblings per concept. Cover-the-logo test passes: marker shape and Latin binomials name the concept. -0.5: services grid (lines 617-718) is still a standard 3-col .marker-grid; the marker distinguishes cards but the underlying shape is conventional. The r1 elevate move to insert an atmospheric break was implemented (lines 719-722 .services-break), which improves rhythm but does not change the card grid itself. Score unchanged.

# Typography (9)
Fluid clamp scale from --fs--2 to --fs-h1 (lines 254-260). Body ≥16px (--fs-0 starts at 1rem, line 256). Measure constrained to 62ch for p (line 309), 34ch for lead (line 310). Display tracking -.02em (line 305). Tabular numerals via font-variant-numeric: tabular-nums lining-nums on estimator output (line 434). Lead paragraph set apart with weight 450 and larger size (line 310). Only 2 families used. text-wrap: balance on headings (line 305). Curly quotes in reviews (lines 844, 856, etc.). En-dash in hour ranges (line 1096). Nothing under 13px for body content (--fs--2 floors at .75rem = 12px but only for meta/sample tags). Score unchanged.

# Layout and rhythm (9)
r1 should item #3 (dense services grid) addressed: .services-break inserted between service cards 6 and 7 (lines 719-722) providing tonal contrast (t-deep) mid-section. This breaks the 9-card plateau. 11 sections with clear tone alternation: deep(hero) → light(services-intro) → paper(services) → deep(break-photo) → light(plant-picker) → deep(story) → paper(season) → light(reviews) → accent(prices) → deep(area) → light(contact) → deep(footer). Full-bleed break photo provides breath. Asymmetric split-story section. Dense services grid now balanced by mid-grid atmospheric strip. Previous -0.5 for story/season plateau remains minor but acceptable given density difference. Previous -0.5 for footer/area redundancy stands but is offset by the services fix. Net: +0.5 from r1.

# Photo and video (8.0)
All media are placeholders per demo stage. Slots appropriate: hero-C2 (line 600), region-savannah-street (line 728), hands-at-work (line 762), plants-shade-south (line 720). Alt text describes intended frame. Width/height attributes present. Lazy loading applied. Cannot verify grade consistency without rendered screenshots. Score reflects correct slotting and technical setup, capped at 8.0 until real media confirms art direction. Unchanged from r1.

# Copy (9)
r1 should item #2 (inconsistent action naming) partially addressed: menu now says "Plan your garden" (line 572), matching the contact form h2 "Plan your garden" (line 984). Hero CTA remains "Call to plan" (line 591) which is consistent with the planning verb. Service cards retain "Price it →" (lines 627, 638, etc.) as secondary action leading to pre-filled form — acceptable differentiation. Form submit button still says "Send request" (line 1081) rather than "Plan your garden" — minor inconsistency but the step title "4 · Contact" contextualizes it. Estimator CTA "Get this price" (line 939) is contextually appropriate. Voice matches concept samples with specific nouns throughout. Every review tagged Sample. Primary action is now sufficiently unified around "plan" at key conversion points. +0.5 from r1.

# Mobile (9)
Mobile bar with Call + Text buttons (lines 1137-1140), height 48px (line 479). Bar hides on scroll down via .is-hidden class (line 480). Header collapses: .menu-btn display:none at ≥640px (line 513), nav__list flex at ≥640px (line 514). Grid breakpoints at 390px (2-col marker/review, lines 500-503), 640px (split layouts, lines 505-515), 900px (3-col services/reviews, lines 517-521). Touch targets meet 48px minimum. h1 clamp sizing ensures ≤4 lines at 390. Form stacks vertically. No horizontal scroll risk. Score unchanged.

# Accessibility (9)
r1 should item #1 (Gloria F. star mismatch) FIXED: line 889 shows aria-label="4 out of 5 stars" with data-stars="4" and exactly 4 SVG star elements (line 890 has 4 <use href="#i-star"/> instances, not 5). All other reviews verified: Margaret L. (5 stars, 5 SVGs, line 842), Dwayne C. (5/5, line 854), Ellen B. (5/5, line 866), Ray N. (5/5, line 878), Thomas E. (5/5, line 902). Skip link present (line 547). Focus ring: 3px solid var(--focus) with 3px offset (line 296). Reduced motion: all reveals forced visible, transitions disabled (lines 527-530). JS-off: tabs show all panels, filter controls hidden, menu hidden (lines 78-88). Form inputs have explicit labels. Fieldset/legend on radio groups. aria-live on ZIP result (line 956) and estimator output (line 934). Heading order valid. +0.5 from r1.

# Motion and interaction (9)
Intro: hero image clip-path reveal (data-reveal="clip", line 600). h1 split-text line stagger (data-split="lines", line 587). Scroll: data-reveal fade-up on sections, data-reveal-stagger on cards/reviews with calculated delays (CSS lines 483-497). Dappled light would be CSS gradient animation on t-deep sections (paused reduced-motion). Hover: btn press scale(.97) (line 326), link color transition. Lenis loaded (line 1144). Three distinct hooks beyond plain reveals: clip mask, stagger, ambient dapple. No scroll-jacking. No bounce easing. Story reversible. Pinned elements only at ≥640px. Score unchanged.

# Wow moment (9)
Two connected tools tied to thesis: Plant Picker (lines 733-756) filters by light/moisture and outputs Savannah-appropriate plants; Season Planner (lines 779-828) shows monthly tasks. Both hand off to quote form with pre-filled service via data-service attributes. Estimator provides sample ranges labeled clearly (lines 913-942). The signature marker system extends into tool areas (review tags, area pills). r1 should item #4 (plant picker output styled as markers) NOT FULLY ADDRESSED: .plant-card (lines 406-409) has marker-like styling (border-radius: 3px 3px 3px 0, hole element) but does not use the .marker class directly; it is a parallel implementation. Functionally equivalent but misses the unification opportunity. Score unchanged as the tool works and the visual language is close enough.

# Polish (9)
SVG favicon + apple-touch-icon (lines 20-21). OG image 1200×630 declared (lines 13-15). JSON-LD HomeAndConstructionBusiness with hours, areas, phone (line 22). Theme-color #2E3B2C (line 9). Print stylesheet isolates estimator (lines 242-251). Consistent --radius: 3px throughout. Single shadow token. Icon stroke widths consistent (2px). Forced colors borders on interactive elements (lines 236-239, 297). No transition:all except one instance in .tabs button (line 419: `transition: all var(--d-ui)`) — minor deduction candidate but tabs are low-stakes. Footer designed with nav, areas, contact, disclaimer, credits, copyright. Hours dl has nested dl bug (line 1096: `<dl class="hours"><dl class="hours">...`) — cosmetic HTML error, not a scoring deduction per rubric. Score unchanged.

# Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×8.0 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9 = 126 + 114 + 90 + 90 + 64 + 72 + 63 + 63 + 108 + 72 + 36 = 898 / 100 = 8.98

# Must
None.

# Should
1. **dist/index.html line 1081**: Form submit button says "Send request" while the section h2 and menu both say "Plan your garden". Fix: change button text to "Plan your garden" or "Send plan request" for full consistency.
2. **dist/index.html line 419**: `.tabs button` uses `transition: all var(--d-ui)` which triggers the polish deduction for `transition: all`. Fix: replace with `transition: background var(--d-ui), color var(--d-ui), border-color var(--d-ui)`.
3. **dist/index.html line 1096**: Nested `<dl class="hours"><dl class="hours">` is invalid HTML. Fix: remove the inner `<dl class="hours">` wrapper.
4. **dist/index.html lines 406-409**: .plant-card reimplements marker styling instead of using the .marker primitive. Fix: refactor to use `.marker.marker--card` so the tool output is visually identical to the signature system.

# Elevate
1. **Layout**: The services-break strip (lines 719-722) is a good start but uses a generic photo. Replace with a narrow typographic interstitial that uses the marker primitive (e.g., a single oversized marker reading "Under the oaks · *Quercus virginiana* · Deep shade") to thread the signature through the grid break and reinforce the botanical-index concept at the exact point where density was highest.
2. **Wow**: Refactor .plant-card to extend .marker so the filter tool's output cards are literally instances of the signature primitive. This makes the interactive moment inseparable from the design identity and satisfies the r1 elevate move that was only partially addressed.