COPY: ok

# Critique — plumber-B (Ledgerline Plumbing), round 1

## Five-second test
1440-first.jpg / 390-first.jpg: "Pittsburgh plumbing, written down." Trade (plumbing) + city (Pittsburgh) + outcome (documented/written down) in 4 words. One loud primary "Price it" (copper) plus a quieter "Call (412) 555-0108". Phone visible in the header at 1440 and in the sticky bar at 390. A proof line sits under the h1 (hours · areas · Sample rating). Three ledger entries (No.01/02/03 with OK/WATCH/FIX stamps) type the concept into the first screen. The next band peeks. A homeowner knows what this is, where, what to do, and why them (they write everything down). Passes the 3-second test cleanly.

## firstScreen — 9.0
Earned: h1 states trade+city+outcome in 4 words (≤8); one primary + one quieter secondary (not two equal buttons); phone visible at both 1440 (header) and 390 (sticky bar); proof line under h1; next band peeks; the ledger signature is already visible in the hero (1440-first.jpg, 390-first.jpg). Held below 10: the hero photo is a placeholder gray block, so the right-half "sewer camera still + foot counter" promised by the concept is not yet visually delivered, and the composition reads as text-left / empty-right until real media lands.

## distinctiveness — 8.5
Earned: the Ledger Rule + Status Stamp signature shows in ≥4 sections — hero entries, "What we fix" service rows, "From the ledger" reviews, and the footer total row (1440-full.jpg). IBM Plex Mono as a display face is a deliberate, uncommon choice that carries the "field ledger" idea; the iron/steel-blue/copper palette is unmistakably not the water-drop-blue plumber cliché the brief bans. Held below 9: with placeholder photos the identity is carried almost entirely by type and the rule, and the section shapes (split, stack, ruled grid) are fairly conventional — the signature decorates more than it organises once you scroll past the hero. No sibling plumber sites exist yet to collide with.

## type — 9.0
Earned: IBM Plex Mono (display/numerals) + Outfit (body) is a clean, concept-driven pair; fluid clamp scale; tabular-nums on prices, phone, hours and entry numbers (1440-full.jpg pricing table); lead paragraph set apart; tracked-caps kickers; text-wrap balance/pretty. The mono display is the concept's voice made visible — you could ID this site from a text-only screenshot. No orphans, no straight-quote ranges spotted, body ≥16px.

## layout — 7.5
Earned: real container grid, alternating tones in the upper half (deep → paper → deep → paper), varied shapes (50/50 hero, ruled ledger rows, split area, narrow stacked form), one full-bleed-ish steel-blue tool band. Deduction: three dark bands touch in the lower half — "From the ledger" (t-deep) → "Sample ranges" pricing (t-deep) → "Where we work" (t-deep) read as one long undifferentiated block (1440-full.jpg, ~62–86% scroll) (−1.0). The steel-blue tool band is the only tone break in a long dark run and it floats without enough contrast against the deep sections around it.

## photo — 6.5
Every frame on the page is a placeholder/broken fallback (alt="Placeholder for …", grey block) — 1440-first.jpg hero, 1440-full.jpg story/area frames, 390-full.jpg. The frame CSS (aspect ratios, the saturate/contrast/sepia grade, object-fit cover) exists but is invisible because no real image loads. Per the task, placeholder media is expected and not a blocker, so this is not a mustFix — but scored on what is actually visible, there is no photography to assess for grade consistency, crop, subject placement or art-direction. Floor is 6; this sits just above it because the framing system is clearly built and ready. This is the single biggest gap to a pass.

## copy — 9.0
Earned: concrete trade nouns throughout (lead service line, galvanized risers, sewer lateral, dye test, cleanout, PSI, backwater valve, curb stop); every price and review carries a visible "Sample pricing"/"Sample review" tag (1440-full.jpg pricing table, ledger reviews); the form's success state is honest ("This is a demo site — nothing was sent…"); buttons are named for the action ("Price it", "Get your number", "Send request"), not "Submit/Learn more"; voice matches the concept's "we write it down" thesis; no banned words (no guarantee/emergency-promise/24-7/bonded). Footer disclaimer present.

## mobile — 9.0
Earned: 390-first.jpg / 390-full.jpg show a composed-for-phone layout, not a squeezed desktop — h1 ~3 lines, both actions above the fold, sticky Call + Price-it bar pinned at the bottom, ledger entries stack cleanly, form fields full-width, no horizontal scroll, tap targets ≥48px (buttons carry min-height:48px). 1024-first.jpg holds the split without breaking.

## a11y — 9.0
Earned: skip-link present and styled; :focus-visible outline defined; every form input has a real <label for> (not placeholder-only); reduced-motion safety net forces all transitions/animations to ~0 and reveals everything (.sw-motion gating means content is in the DOM and visible without motion); forced-colors borders on interactive controls; honeypot field aria-hidden + tabindex -1; single h1 with h2 per section; lang="en"; noindex set. render.json reports zero console errors.

## motion — 8.0
Earned (from structure in dist/index.html + the kit CSS, confirmed against the stills): well beyond plain fade-up — clip-path wipe on the ledger rule driven by --sw-p, count-up numerals, SplitText line/word reveals, a rotator slot, Lenis smooth scroll, staggered reveals, press-scale on buttons. Reduced-motion fully respected via the @media safety net and .sw-motion gating. Capped below 9 because static screenshots cannot confirm easing/timing quality, intro duration (<1.2s) or that the foot-counter story actually reverses — the hooks are present and correctly gated, but their execution is unverified visually.

## wow — 8.0
Earned: the page-as-ledger idea plus the diagnostic tools (pipe-material identifier, pressure check, sewer-era check) are tied to the thesis and are things a homeowner would actually use before calling. The steel-blue "Take your own readings first" band is the signature moment. Held below 9: in 1440-full.jpg the tool band reads as a flat steel-blue block — the tool's interactive output and its design in the ledger's language are not yet visually compelling/confirmed from the stills.

## polish — 9.0
Earned: SVG favicon + 180 apple-touch-icon, OG image 1200×630 with twitter card, JSON-LD @type Plumber with areaServed + openingHours, theme-color, a print stylesheet scoped to the estimator, lazy images with explicit width/height, forced-colors handling, preloaded display font. Consistent zero-radius system, one rule weight (1.5px), one accent. Footer is a designed ledger close (total row + final rule).

## Arithmetic
14×9.0 + 12×8.5 + 10×9.0 + 10×7.5 + 8×6.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.0 + 8×8.0 + 4×9.0
= 126 + 102 + 90 + 75 + 52 + 72 + 63 + 63 + 96 + 64 + 36 = 839 / 100 = **8.39**

## Must
(none — placeholder media is expected per task and not a demo-rule breach; all Sample labels present, form is honest, no banned claims, no invented facts, no face-as-owner, no before/after.)

## Should
- **where:** 1440-full.jpg ~62–86% scroll, #reviews → #pricing → #area | **problem:** three t-deep bands touch and read as one long dark block | **fix:** make the pricing section t-paper (or t-mid) so the run becomes deep → paper → deep; keep the steel-blue tool band as the single accent break.
- **where:** 1440-full.jpg, the steel-blue "Take your own readings first" band | **problem:** the tool area reads as a flat empty accent block in the still; the wow tool is not visually doing anything yet | **fix:** render the active tool UI (inputs + live reading output styled as a ledger entry with a status stamp) so the band shows the signature working, not just a colour field.
- **where:** all .frame images (hero, story, area) | **problem:** every photo is a placeholder fallback, so the right-half hero and the photo grade are invisible | **fix:** land the approved plumber media (sewer-camera still for hero, basement/gauge frames for story, brick-house for area) so the saturate/contrast grade and object-position thirds can actually be judged.
- **where:** 1440-first.jpg hero right half | **problem:** with no photo the 50/50 split reads as text-left / empty-right | **fix:** once media lands, add the footage-counter overlay in mono ticking in sync with the ledger typing, as the concept promises, to make the seam between halves intentional.

## Elevate
The two weakest categories are **photo** (weight 8, score 6.5) and **layout** (weight 10, score 7.5).

- **photo → move:** Art-direct the frames as a plan→work→result sequence in one grade: hero = sewer-camera still of a clay joint with root (the thing they log by the foot), story band = gauge-on-hosebib + galvanized/lead pipes under a work light, area = Pittsburgh brick row house at dusk. Apply the existing saturate(.8)/contrast(1.1)/sepia(.05) grade uniformly and set object-position to a third so the subject is never centred. Tie at least one frame to the signature with a clip-reveal driven by the same --sw-p wipe as the ledger rule, so a photo and the rule draw in together.
- **layout → move:** Re-tone the lower half so the scroll has a visible loud→quiet→dense→breath shape: deep hero → paper services → deep tools → paper estimator → deep reviews → **paper** pricing → deep area → paper form → deep footer. Then let the ledger rule run continuously across the tonal breaks (it already animates per section) so the rule — not the background — is the through-line, and the dark bands stop merging.