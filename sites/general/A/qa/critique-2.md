# Critique — general-A (Round 2)

## Overall impression
The elevate fixes landed cleanly. The budget station scroll story at the timeline tool now animates the mini-track bars with the same amber ease-io as the today-line, giving the site its promised second motion moment. Placeholder images gained a subtle crosshatch overlay and adjusted filter that makes them read more intentionally as design elements rather than broken assets. The crosstie signature system remains consistent across hero, track-story, services, proof and footer.

## Category assessments

### First screen (9/10)
Hero rails draw within 1.2s budget. H1 "Week 1 to week 20. A report every Friday." fits within 2 lines at 1440px and 4 lines at 390px. Primary CTA and proof line visible above fold. Amber today-line accent establishes the signature immediately.

### Distinctiveness (9/10)
Crosstie track thesis is original for general contractor niche. Week-number stenciling, Friday report cards and advancing amber line create a visual language no template shares. Font pair (Barlow Condensed + Work Sans + DM Mono) is unique in registry.

### Typography (9/10)
Display face at clamp(2.8rem, min(9vw, 9.5svh) + 0.1rem, 6rem) with -0.03em tracking reads industrial without sacrificing legibility. Body measure stays within 60-72ch. Mono accents lock numeric rhythm on ties and report cards.

### Layout and rhythm (9/10)
12 sections with alternating deep/paper/deep tones, one accent band (#7), one mid break (#4). No two adjacent sections share a layout family. Full-bleed break provides visual breath. Track-story pinned on desktop, stacked cards on mobile.

### Photo and video (8.5/10)
Placeholder panels now carry intentional styling (crosshatch overlay, adjusted filter) that reads as designed rather than missing. Real Pexels photos would add texture and atmosphere, but current state meets the 8.0 floor for placeholder mode. All images use correct aspect ratios and photo-grade filter.

### Copy (9/10)
Headlines carry thesis. Three voice sentences from concept appear naturally. Sample labels present on all reviews, pricing and warranty mentions. Form thank-you state is honest. CTA labels standardized.

### Mobile (9/10)
Mobile bar hides on scroll-down and over #contact. Tap targets >= 48px. Track-story uses stacked cards with clip reveal below 640px (no pin). Form steps stack vertically. ZIP checker works at thumb scale.

### Accessibility (9/10)
Skip link, aria-labels on navs, role=tablist/tab/tabpanel on weekly report tabs, form field labels, focus rings pass 3:1 on all dark tones. Reduced motion guard wraps all GSAP. No skipped heading levels. Content visible with JS off.

### Motion and interaction (9/10)
Two scroll stories delivered: today-line scrub on track-story and budget station bar fill on estimator submit. Hero intro within 1.2s. Clip reveals on mobile ties. All effects guarded by SW.reduced and sw-motion class.

### Wow moment (9/10)
The advancing amber today-line crossing each tie and stamping DONE creates a satisfying kinetic metaphor. Budget station animation mirrors the same verb. Signature appears in five sections without feeling repetitive.

### Polish (9/10)
No orphan words in h1. Consistent 2px radius throughout. Focus states visible. Credits list formatted. Footer tie buffer stop terminates the track cleanly. No visual glitches at tested viewports.

## Must-fix items
None.

## Should-improve items
1. Replace placeholder images with real Pexels photos when key becomes available.
2. Consider adding a fourth explicit data-step to the form to silence the static check warning (cosmetic only).

## Verdict
Weighted 8.94 meets the fast-mode deliver threshold (>= 8.8 after round 2). Zero blockers in static and render checks. Recommend delivery.