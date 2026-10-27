COPY: ok

## Five-second test
1440: Hardwood floor refinishing in Knoxville, TN. Book a sample visit or price it. Phone in header. Proof line with sample price, hours, rating. Filmstrip hero with grit rail "36".
390: Same h1 stacks to ~3 lines. Both CTAs above fold. Mobile bar with phone + Book a visit.

## firstScreen — 8.5
DOM shows h1 at 6 words with trade + city. Phone visible in header and mobile bar. Primary CTA "Book a sample visit" distinct from secondary "Price it". Proof line includes sample price, hours, and sample-tagged rating. Hero uses `min-height: calc(100svh - var(--header-h))` so next band peeks. Deduction: cannot verify intro timing or filmstrip swipe without screenshots; only one frame in DOM (placeholder mode).

## distinctiveness — 9.0
Grit Sequence Rail signature appears in hero (36), story (60·100·STAIN), proof (COAT 1·2·3), footer (FINISH) — four sections. Grit pills in reviews. Noise texture overlay. Palette Raw Maple/Walnut/Amber, not generic. Type pair Crimson Pro + Karla + DM Mono. Layout families exceed three (filmstrip, split, pinned, full-bleed break, grid, estimator shell, CTA strip, review stack, contact grid). No sibling screenshots available but concept.json confirms differentiation.

## type — 9.0
Crimson Pro display, Karla text, DM Mono accent. Fluid clamp scale. Body ≥1rem. Lead uses opsz variation. Tabular nums on prices and rating. Kicker tracked caps. H1 tracking -.03em. En-dash in price range. No orphans in headings. Sample tags consistently styled.

## layout — 9.0
Tones alternate paper→deep→cream→deep→paper→cream→deep→accent→paper→cream→deep. No two dark bands touch. Full-bleed break section. Asymmetric splits. Pinned story at ≥640px. Dense services grid. Quiet CTA strip. Section gaps (--s-8/--s-9) exceed internal gaps.

## photo — 7.0
All images are placeholders with descriptive alt text. Slots match niche manifest (hero-A1, detail-cupping, process-sander, process-stain, process-finish, detail-grain-redoak, material-sawdust, detail-stain-samples). No faces as owner. No logos. Consistent .frame treatment. Cannot verify grade consistency, crop, or object-position without screenshots. Placeholder mode expected deduction; structure is sound.

## copy — 8.5
Voice matches concept: specific trade nouns (sanding passes, bare wood, cupped, lacing). No banned phrases. Buttons named for action. Sample labels on rating, reviews, pricing, guarantee, licence. Hours shown. One em dash. Deduction: primary action named "Book a sample visit" in hero/CTA/contact but "Schedule a sample visit" in picker section (-0.5).

## mobile — 8.5
CSS shows mobile bar at ≤899px with phone + CTA. Tap targets ≥48px. No horizontal scroll (container max-width, flex-wrap). Story pinned only at ≥640px. H1 clamp keeps ≤4 lines at 390. Menu overlay full-screen. Cannot verify actual rendering without screenshots; CSS composition is correct.

## a11y — 9.0
Skip link present. Focus outline 3px solid var(--focus). All form inputs labelled. Honeypot hidden. ARIA live regions on ZIP, checklist, estimator. Reduced motion shows all content (html:not(.sw-motion) rules). JS-off hides controls but content remains. Heading order correct (h1 then h2s, no skips). Stars have aria-label. Grit rails aria-hidden.

## motion — 8.0
Hooks present: data-reveal, data-reveal-stagger, data-reveal="clip", data-carousel, data-story, data-checklist, data-estimator, data-zip, data-menu (≥3 beyond plain reveals). Reduced motion respected. Pinned story only at ≥640px. Lenis loaded, no scroll-jacking. Cannot verify easing, timing, or intro duration without screenshots.

## wow — 8.0
Signature grit rail + pinned story crossfade tied to thesis. Estimator SVG sketch. Checklist gives instant diagnosis. Tool output designed with tabular nums and print button. Cannot verify visual impact without screenshots.

## polish — 8.5
SVG favicon + apple-touch-icon. OG 1200×630. JSON-LD HomeAndConstructionBusiness. Print stylesheet for estimator. Lazy images with width/height. Hero preloaded. Forced colors handled. Consistent 2px radius. No transition:all. Credits links missing href (static.json warning, not blocker).

## Arithmetic
14×8.5 + 12×9.0 + 10×9.0 + 10×9.0 + 8×7.0 + 8×8.5 + 7×8.5 + 7×9.0 + 12×8.0 + 8×8.0 + 4×8.5 = 119 + 108 + 90 + 90 + 56 + 68 + 59.5 + 63 + 96 + 64 + 34 = 847.5 / 100 = 8.48

## Must
None.

## Should
- **dist/index.html line 853, #stain-picker**: Primary action says "Schedule a sample visit" but hero/CTA/contact say "Book a sample visit". Fix: change to "Book a sample visit" for consistency.
- **dist/index.html line 1155, ul.credits**: Eight `<a>` tags lack href attributes (static.json warning). Fix: add `href="https://www.pexels.com"` or remove the anchor tags and render plain text.
- **Photo category at 7.0**: Below 8.5 pass mark. When real media is curated, ensure consistent grade, object-position on thirds, and one unified look across all frames to reach 8.5+.

## Elevate
1. **Motion**: Tie the grit rail's --sw-p clip-path wipe directly to scroll progress via ScrollTrigger so the signature animates continuously as the visitor scrolls, making the grit progression feel like a real sanding pass rather than a static label.
2. **Wow**: Animate the estimator SVG sketch fill opacity and size proportionally to the slider value in real time, so the tool output is visually responsive and the homeowner sees their room "fill up" as they drag — turning a number into a spatial feeling.