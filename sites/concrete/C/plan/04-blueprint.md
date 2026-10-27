# Blueprint — concrete-C

## Round 3
Photo: the broken placeholder <img>s are gone. Each benchmark frame (BM-02 lens, BM-03 rebar, BM-04 ridge) is now an inline-SVG survey plate: a pine/granite-red duotone with contour lines, the BM number in the crop mark and a descriptive aria-label. A11y: story state is shown by structure, not dimming: a sliding "You are here" marker, a 5px signal rule, a signal label and aria-current, and every step keeps AA text. The BM-04 caption is ink on the ridge. The damage reader gets a full live announcement and a contour-field result card. Shoulds: the mobile bar hides while the hero ZIP card is on screen, the quote action is called "Price my slab" everywhere, "Neighbors" and "License" use US spelling, the hero kicker drops "Sheet 01", and the town pins are set in Figtree 14px sentence case.

## Round 2
Re-cut the hero as a drawn survey sheet (full-bleed contour map, town pins, map-legend ZIP box) and wrapped every photo in a survey-frame (duotone + contour mask + BM-## benchmark caption + drawn overlay: freeze-thaw lens, rebar plan, ridge profile) to lift photo and distinctiveness; motion now has one story: contours draw in, pins drop, an altimeter climbs the sheet, the ridge scrubs, the lens is pinned at ≥900 and changes layer per step. All kit hooks were rewired (tabs, checklist, estimator, multi-step form were inert before); tool outputs became stamped verdict cards and a lift/repair/replace gauge; h1 cut to 8 words; credits no longer render empty.

Sections: hero · promise · winter-story · services · base-spec · break · tools · reviews · area · contact.


Rhythm: 10 sections. Tone sequence avoids 3 same in a row and never two dark touching. Layout families alternate. ≥3 data-hook including data-sw-signature. One #contact form. Required content present.

## 1. hero · t-paper · layout: map-split · hook: data-zip, data-sw-signature
Purpose: trade+city in h1, ZIP checker embedded, call button, one proof line.
Content: h1 "Concrete for swelling clay and a hundred frozen nights · {{biz.city}}"; kicker "{{proof.years}} winters on this dirt · [[sample rating]]"; [[call]]; ZIP input in map.
Media: hero-C1 as map inset tile. Entrance: contour draw + pin drop + headline fade.

## 2. promise · t-mid · layout: statement
Purpose: answer "why this company" in one breath.
Content: short centered statement "We read the ground before we pour." Subline names clay, freeze-thaw, elevation. No media. Entrance: text rise.

## 3. winter-story · t-deep · layout: pinned-diagram · hook: data-reveal="clip"
Purpose: answer "it'll crack in a year" with local science.
Content: "One January night on a driveway" 4-step freeze-thaw diagram (melt → freeze → expand → scale) + what air-entrained mix and sealer do. Photo: scaling close-up.
Media: slots.story-1 = scaling. Entrance: clip reveal on diagram steps.

## 4. services · t-paper · layout: grid-3
Purpose: show all services from facts with price ranges and drainage note.
Content: <!-- each services --> card with h3 {{.name}}, p {{.blurb}}, sample price where available, "Price it" button with data-service="{{.short}}".
Media: none. Entrance: stagger text rise.

## 5. base-spec · t-accent · layout: split · hook: data-reveal
Purpose: answer "they'll pour thin / skip gravel".
Content: left column lists spec (thickness, base depth, steel, mix, joints); right column photo of rebar on chairs. Caption: "#4 rebar on chairs over compacted road base".
Media: slots.process-1 = rebar. Entrance: image unclip + text rise.

## 6. break · t-light · layout: full-bleed
Purpose: visual pause, show finished work in context.
Content: full-bleed photo of finished driveway at a Front Range home. Caption: "Broom-finished driveway at a split-level in {{biz.areas.0}}".
Media: slots.break = finished-driveway. Entrance: clip reveal.

## 7. tools · t-paper · layout: tabs · hook: data-tabs, data-checklist
Purpose: self-diagnose before calling; hand off to form.
Content: tabs for Winter Damage Reader and Lift-or-Replace Quiz. Each ends with CTA "Have us look at it" → #contact with diagnosis prefilled.
Media: none. Entrance: text rise.

## 8. reviews · t-mid · layout: rail
Purpose: social proof pinned by town on the map metaphor.
Content: <!-- each proof.reviews --> card with quote, name, town, service, stars. Each carries a small benchmark triangle. Label: [[sample review]].
Media: none. Entrance: stagger.

## 9. area · t-deep · layout: list · hook: data-open-now
Purpose: confirm service area and hours.
Content: "{{biz.city}} and {{biz.areas|list}}"; ZIP list via {{biz.zips|csv}} in sr-only; hours table via {{hours|table}}; open-now span.
Media: none. Entrance: text rise.

## 10. contact · t-paper · layout: form-stack · hook: data-lead
Purpose: single quote form, multi-step.
Content: form[data-lead] with service select, job details, timing, contact. Success state honest per demo rules. Footer follows inside same section: {{demo.disclaimer}}, [[credits]], license sample.
Media: none. Entrance: text rise.

## Rhythm check
Tones: paper, mid, deep, paper, accent, light, paper, mid, deep, paper. No 3 same in a row. No two dark touching (deep sections are 3 and 9, separated). One t-accent band (#5). One .break (#6). ≥3 hooks: data-zip (hero), data-sw-signature (hero), data-tabs (tools), data-checklist (tools), data-lead (contact), data-open-now (area), data-reveal (multiple). Layout families: map-split, statement, pinned-diagram, grid-3, split, full-bleed, tabs, rail, list, form-stack — all different neighbours. One #contact. All required content present.