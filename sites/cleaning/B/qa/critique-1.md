COPY: ok

# Critique — cleaning-B (Every Other Friday Cleaning), round 1

## Five-second test
1440-first.jpg / 390-first.jpg: "Huntsville house cleaning, priced line by line." Trade + city + value prop in 7 words. One loud sienna "Price it" button plus a quieter "Call" link. Proof line under h1 shows sample rating and review count. The receipt strip is visible at hero bottom with a torn edge. Next band peeks. A homeowner knows what this is, where, what to do, and why them (line-by-line pricing). Passes the 3-second test cleanly.

## firstScreen — 9.0
Earned: h1 states trade+city+value in ≤8 words; one primary + one secondary CTA (not two equal buttons); phone visible at 1440 (header) and 390 (sticky bar); proof line under h1; next band peeks; receipt signature visible in hero. Held below 10: the hero photo is a placeholder gray block so the marquee strip promised by the concept is not visually delivered; right half reads as empty until real media lands.

## distinctiveness — 8.5
Earned: the Running Receipt signature shows in ≥4 sections — hero header line, quote builder live tally, checklist explorer lines, reviews as receipt notes, and footer total (1440-full.jpg). Bricolage Grotesque as display face is an uncommon choice that carries the thermal-paper texture; DM Mono for prices makes the receipt feel printed. The sienna/paper palette avoids the yellow-glove cleaner cliché. Held below 9: with placeholder photos the identity is carried almost entirely by type and the receipt rule; section shapes are fairly conventional. No sibling cleaning sites exist yet to collide with.

## type — 9.0
Earned: Bricolage Grotesque (display) + Figtree (body) + DM Mono (accent) is a clean concept-driven trio; fluid clamp scale; tabular-nums on prices and receipt lines (1440-full.jpg pricing table); tracked-caps kickers; text-wrap balance/pretty. The mono accent is the receipt's voice made visible. No orphans, body ≥16px.

## layout — 7.5
Earned: real container grid, alternating tones (paper → mid → paper → accent → paper → deep → paper → deep), varied shapes (centered hero, ruled receipt rows, split story, tabbed checklist, narrow form). Deduction: three dark bands touch in the lower half — reviews (t-deep) → area/ZIP (t-deep) → contact form (t-deep) read as one long undifferentiated block (1440-full.jpg ~65–90% scroll) (−1.0). The accent tool band floats without enough contrast against surrounding paper sections.

## photo — 6.0
Every frame is a placeholder/broken fallback (alt="Placeholder for …", grey block) — 1440-first.jpg hero, 1440-full.jpg story/checklist frames, 390-full.jpg. Frame CSS exists but is invisible because no real image loads. Per task, placeholder media is expected and not a blocker. Floor is 6; this sits at floor because there is literally nothing to assess. Single biggest gap to a pass.

## copy — 9.0
Earned: concrete trade nouns throughout (baseboards, grout, oven add-on, pet hair visit, move-out PCS); every price and review carries visible "Sample" tag (1440-full.jpg pricing table, receipt reviews); form success state is honest ("This is a demo site — nothing was sent"); buttons named for action ("Price it", "Send request"), not "Submit"; voice matches the receipt thesis; no banned words. Footer disclaimer present.

## mobile — 9.0
Earned: 390-first.jpg / 390-full.jpg show composed-for-phone layout; h1 wraps cleanly; both actions above fold; sticky Call + Price-it bar pinned at bottom; receipt lines stack; form fields full-width; no horizontal scroll; tap targets ≥48px. 1024-first.jpg holds the layout without breaking.

## a11y — 9.0
Earned: skip-link present; :focus-visible outline defined; every form input has real <label for>; reduced-motion safety net reveals everything; forced-colors borders on controls; honeypot field aria-hidden; single h1 with h2 per section; lang="en"; noindex set. render.json reports zero console errors.

## motion — 8.0
Earned (from dist structure + kit CSS): clip-path wipe on receipt lines driven by --sw-p, SplitText reveals, Lenis smooth scroll, staggered reveals, press-scale on buttons. Reduced-motion fully respected. Capped below 9 because static screenshots cannot confirm easing/timing quality or that the receipt line wipe actually animates on interaction.

## wow — 7.5
Earned: the page-as-receipt idea plus the quote builder tool are tied to the thesis. The quote builder band is the signature moment. Held below 8: in 1440-full.jpg the quote builder reads as a flat mid-tone block with inputs but no visible live receipt output; the tool's interactive result is not visually compelling from the still.

## polish — 9.0
Earned: SVG favicon + apple-touch-icon, OG image meta (though plain color due to placeholder), JSON-LD @type HomeAndConstructionBusiness with areaServed + openingHours, theme-color, lazy images with explicit dimensions, forced-colors handling, preloaded display font. Consistent radius system, one rule weight, one accent. Footer is a designed receipt close.

## Arithmetic
14×9.0 + 12×8.5 + 10×9.0 + 10×7.5 + 8×6.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.0 + 8×7.5 + 4×9.0
= 126 + 102 + 90 + 75 + 48 + 72 + 63 + 63 + 96 + 60 + 36 = 831 / 100 = **8.31**

## Must
(none — placeholder media is expected per task; all Sample labels present, form is honest, no banned claims, no invented facts, no face-as-owner, no before/after.)

## Should
- **where:** 1440-full.jpg ~65–90% scroll, #reviews → #area → #contact | **problem:** three t-deep bands touch and read as one long dark block | **fix:** make the area/ZIP section t-paper so the run becomes deep → paper → deep; keep the accent tool band as the single color break.
- **where:** 1440-full.jpg, the quote builder band (#quote-builder) | **problem:** the tool area reads as a flat mid-tone block; the live receipt output is not visually doing anything in the still | **fix:** render a default visible receipt strip with sample line items and total inside the quote builder so the band shows the signature working, not just input fields.
- **where:** all .frame images | **problem:** every photo is a placeholder fallback | **fix:** land approved cleaning media once available.

## Elevate
The two weakest categories are **photo** (weight 8, score 6.0) and **layout** (weight 10, score 7.5).

- **photo → move:** Art-direct frames as a sequence: hero = clean kitchen in daylight (the thing they're buying), checklist tabs = process shots (oven, shower glass, mop, duster), story = detail shots (sink shine, vacuum lines, made bed), area = Huntsville suburban house. Apply existing saturate(.85)/contrast(1.05)/sepia(.08) grade uniformly. Tie at least one frame to the signature with a clip-reveal driven by the same --sw-p wipe as the receipt lines.
- **layout → move:** Re-tone the lower half so the scroll has visible loud→quiet→dense→breath shape: paper hero → mid quote-builder → paper services → paper checklist → break photo → paper story → deep reviews → **paper** area → deep contact → deep footer. Let the receipt rule run continuously across tonal breaks so the rule — not the background — is the through-line.