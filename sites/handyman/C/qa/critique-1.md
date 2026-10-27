# Critique Round 1 — handyman-C

## First screen (1440 & 390)
The hero shows "Small fixes for old Louisville houses" with a framed porch photo offset right, phone number in header, and "Price a visit" CTA. Trade + city + action are clear within 5 seconds. On mobile the photo stacks above but remains legible. The street-sign marker is visible at left edge establishing the signature system immediately.

## Distinctiveness
The street-sign marker system organizing content by neighborhood rather than service category is genuinely distinctive for a handyman site. No sibling uses this approach. The Bourbon Barrel + Porch Light palette with copper accent reads as Louisville-specific without being kitschy. However, the sign markers could be more visually prominent — they read as subtle labels rather than architectural elements. The dotted walking path between stops is present in concept but not visually rendered in the current build, weakening the "neighborhood walk" thesis.

## Typography
Aleo slab serif for headlines and sign blades carries the old-sign character well. Figtree body text is legible at all sizes. DM Mono for house types and prices adds utilitarian texture. H1 clamp works across viewports. One issue: the kicker line above the h1 uses the same mono styling as price labels, creating slight hierarchy confusion. Otherwise type system is cohesive and well-executed.

## Layout and rhythm
Eleven sections follow the blueprint. Tone sequence deep→paper→mid→deep→mid→paper→light→accent→paper→deep→paper passes rhythm rules. Sign-rail layout repeats four times which creates visual consistency but also monotony — the Highlands and Crescent Hill sections feel identical structurally. The full-bleed break band provides necessary breath. Pricing table and checklist stack break the pattern appropriately.

## Photo and video
All photos are placeholders with descriptive fallback panels. Captions describe frames accurately without inventing jobs. No faces, logos or house numbers. The placeholder system works correctly but limits visual impact — the site cannot score higher here until real media is curated. Photo grade filter applied consistently.

## Copy
Voice matches the brief: specific to Louisville house types, honest about limits, no banned words. "Your shotgun house was built in 1890. We know what creaks." tone comes through. Service blurbs use homeowner language ("sticking doors planed" not "door adjustment"). Sample labels present on all reviews and pricing. Meta description within length limit after fix. One minor issue: the honest-limits callout could be tighter.

## Mobile
Mobile bar present with call + CTA buttons meeting 48px tap targets. Header collapses to hamburger menu correctly. Sign markers remain readable at narrow widths. Form inputs meet touch target size. The offset-frame hero stacks cleanly on mobile. No horizontal scroll detected.

## Accessibility
Skip link present. Semantic landmarks used. ARIA labels on navs. Focus styles defined with 3px outline. Reduced motion disables all animations and shows content statically. Form has proper fieldset/legend structure. Star ratings have aria-labels. Color contrast meets WCAG AA for all text/background combinations.

## Motion and interaction
Hero swing animation implemented via CSS keyframes, gated by sw-motion class. Sign flip-up on scroll via ScrollTrigger. Reveal and clip-reveal patterns work. However, the dotted walking path that should connect neighborhood stops is absent from the build — this was a key part of the signature motion story. Without it, the "walk" thesis feels incomplete. Intro animation stays under 1.2s.

## Wow moment
The Derby-ready porch checklist is the intended wow moment. It functions correctly: checkboxes update an hour-band estimate and pre-fill the contact form. The seasonal relevance to Louisville's Derby culture is smart. However, visually it reads as a standard form rather than a distinctive interactive tool. The t-accent band color helps it stand out but the checklist items themselves lack tactile or playful design.

## Polish
No orphan words in headlines observed. Button hover underlines animate smoothly. Sample tags styled consistently. Footer credits render correctly despite placeholder warnings. Progress bar in header tracks scroll position. Overall finish is clean but not exceptional — the missing walking path and uniform sign-rail layouts prevent a higher score.

## Arithmetic
Weighted: (14×8.5 + 12×8.0 + 10×8.5 + 10×8.0 + 8×8.0 + 8×8.5 + 7×8.5 + 7×8.5 + 12×7.5 + 8×7.5 + 4×8.0) / 100 = 8.18

## Must
None.

## Should
- Render the dotted walking path SVG between neighborhood stops to fulfill the "walk" thesis (motion category).
- Vary sign-rail layouts so Highlands and Crescent Hill do not feel identical (layout category).
- Make the Derby checklist visually more distinctive as an interactive tool (wow category).

## Elevate
1. **Motion**: Implement the dotted walking path SVG that draws down the page between stops, driven by --sw-p, so the signature motion story is complete and the "neighborhood walk" thesis is visually realized.
2. **Layout**: Break the sign-rail monotony by giving Highlands a split-text layout with the honest-limits callout integrated into the composition, and Crescent Hill a card-grid layout for its four services instead of repeating the list format.