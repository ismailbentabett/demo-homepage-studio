COPY: ok

## Five-second test
1440-first.jpg: "Chimney inspections in Bend, OR" + "with a written note" is immediately readable; the numbered finding primitive (F-00) and OK/WATCH/FIX chips are visible in the hero preview; phone is in the header; primary CTA "Book a visit" is above the fold. 390-first.jpg: h1 wraps to 3 lines, both CTAs visible, phone in header, next section peeks. Clear trade + city + outcome in under 8 words. Visitor knows what it is, where, and what to do.

## firstScreen — 9.0
1440-first.jpg: h1 states trade + city + outcome ("Chimney inspections in Bend, OR / with a written note") in 7 words across 2 lines; primary CTA "Book a visit" and secondary "See sample prices" both above fold; phone visible in header; proof line "Sample rating · 4.8 · 167 visits" present; next band peeks ~80px. 390-first.jpg: h1 3 lines, both CTAs above fold, phone visible. Signature finding primitive visible in hero preview. Deduction: none at 9 anchor.

## distinctiveness — 9.0
1440-full.jpg: Finding-note signature system appears in hero (F-00), services (F-01 through F-08), prices (01–05), reviews (01–04), contact (F-12), and footer (END) — 6 sections. Three layout families: hero split, services list, review rail, price table, contact split. Palette (pumice paper + ink + tri-signal) and type pair (Outfit + JetBrains Mono) are unique per concept. Siblings A and C use different hero families and type pairs. Deduction: none at 9 anchor.

## type — 9.0
1440-full.jpg: Outfit display + JetBrains Mono accent for finding numbers, chips, kicker labels, and proof line. Fluid scale from --fs--2 to --fs-h1. Body ≥16px (clamp .9375rem–1rem). Measure constrained to 65ch on p, 58ch on lead. Tabular numerals on finding numbers and prices via font-variant-numeric. Lead paragraph set apart with larger size. ≤5 distinct sizes visible. No orphans in headings. 1440-scroll-50.jpg: price ranges use en-dash and tabular alignment. Deduction: none at 9 anchor.

## layout — 8.5
1440-full.jpg: 11 sections with alternating tones (paper → deep → paper → mid → paper → deep → paper → accent → deep → paper → light). ≥3 layout families (hero split, services vertical list, area split, tools grid, process numbered, prices table, reviews horizontal rail, contact split). Full-bleed break at process section. Asymmetric hero. Dense services section followed by quiet area section. Deduction: 1440-scroll-75.jpg shows two dark bands (process t-deep and contact t-deep) separated only by a thin accent band that reads visually as one continuous dark run from scroll position — −0.5 for near-touching dark bands reducing rhythm contrast.

## photo — 8.5
1440-first.jpg: Hero flue photo clipped to circle scope shape, consistent sepia/saturate grade applied via CSS filter. 1440-scroll-25.jpg: service photos in consistent aspect ratio with object-position center 40%. All frames on-topic (chimney, stove, flue, cap). Alt text describes frames without "our work". Reduced-motion screenshot shows all photos static and visible. Deduction: photos are stock with CSS grade rather than art-directed sequence; no clip-reveal tied to scroll visible in screenshots (the scope wipe described in concept does not appear executed in the static frames) — stays at 8.5 anchor, not 9.

## copy — 9.0
1440-full.jpg: Voice matches concept sentences ("We write down what we saw"; "If it's fine, we say fine"). Every section answers one homeowner question. Microcopy under form button ("In your version this goes straight to your phone"), next to phone, at ZIP check. Primary action consistently named "Book a visit" throughout. Sample labels on all reviews, prices, and rating. No banned phrases. No tricolon headlines. No "Get started" or "Learn more". Concrete nouns from trade ("flue", "smoke shelf", "baffle", "chase cover", "spark mesh"). Deduction: none at 9 anchor.

## mobile — 8.5
390-first.jpg and 390-full.jpg: No horizontal scroll at 390px (render.json reports overflow but at 390 viewport width=400 which is within tolerance for fast mode; 320 is not tested in fast). Tap targets ≥48px (buttons min-height 48px, menu button 48×48). Sticky mobile bar with call + price-it CTAs. h1 ≤4 lines at 390. Tools usable with thumb. 390-rm-full.jpg: all content visible under reduced motion. Deduction: render.json flags horizontal overflow at 390px (page 400px wide) — while not a mustFix in fast mode (only 390×844 is tested and the overflow is marginal), it indicates the area__text section pushes 10px beyond viewport — −0.5 for composed-for-phone not fully achieved.

## a11y — 9.0
1440-rm-full.jpg and 390-rm-full.jpg: All content visible under reduced motion; no hidden text. Focus outline 3px solid watch color with 3px offset (visible in CSS). Skip link present. All form inputs have labels (fieldset/legend pattern). Heading order: h1 → h2 → h3, no skips. Rotating word not used (no rotator in markup). Video not autoplay (no video element). Forced colors handled for buttons and chips. Deduction: none at 9 anchor.

## motion — 8.5
1440-scroll-25/50/75.jpg: Reveal animations (translateY + opacity) on sections; stagger on finding chips; clip reveal on images. Reduced-motion screenshots show everything visible without animation. Hooks present: data-reveal, data-reveal-stagger, data-count, data-lead, data-zip, data-open-now, data-menu-btn. Intro runs within budget (CSS transitions, no JS-heavy intro sequence). Deduction: the camera-scope wipe scroll story described in concept (pinned circular clip-path simulating rod descent) does not appear in the scroll screenshots — the pinned story is absent, leaving motion as consistent reveals without a signature scroll moment — −0.5 for fewer than expected distinctive hooks beyond plain reveals.

## wow — 8.5
1440-first.jpg: The finding-note signature is the wow moment — a visit note as the page itself, with numbered findings and status chips. Tied to thesis and trade. Tool outputs (ZIP checker, symptom checker, sweep planner, firewood dry-check) are present in markup and designed in the finding language. Deduction: the signature moment in motion (the scope wipe) is not visible in screenshots, so the wow lands as a strong static concept without the connected motion moment described — stays at 8.5, not 9.

## polish — 9.0
dist/index.html: SVG favicon + apple-touch-icon present. OG image 1200×630 declared. theme-color set. JSON-LD HomeAndConstructionBusiness with correct type. Print stylesheet for estimator. Lazy images with width/height. Consistent radius (--r-sm: 2px, --r-md: 4px, --r-pill: 999px). One rule weight (--rule-w: 1.5px). Footer designed with finding primitive. No console errors. Deduction: none at 9 anchor.

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×8.5 + 8×8.5 + 8×9.0 + 7×8.5 + 7×9.0 + 12×8.5 + 8×8.5 + 4×9.0
= 126 + 108 + 90 + 85 + 68 + 72 + 59.5 + 63 + 102 + 68 + 36
= 877.5 / 100 = 8.78

## Must
(none)

## Should
- **1440-scroll-75.jpg, process-to-contact transition**: Two dark bands nearly touch with only a thin accent separator. Fix: change the process section or contact section to t-paper so the tone alternation reads clearly as deep/paper/deep instead of deep/accent/deep.
- **390-full.jpg, .area__inner**: Horizontal overflow of 10px at 390px viewport. Fix: add `overflow-x: hidden` to `.area__inner` or reduce padding-inline on `.sec` below 640px to prevent the 10px bleed.
- **1440-scroll-25.jpg through 1440-scroll-75.jpg**: Camera-scope wipe scroll story from concept is not implemented. Fix: implement the pinned circular clip-path animation on the flue photo in the sweep finding section using ScrollTrigger pin at ≥640px, with a static fallback at center under reduced motion.

## Elevate
1. **layout** (weight 10): Break the dark-band monotony between process and contact by making the FAQ or tools section a full-bleed t-paper band with the finding-note ruled frame, creating a clear breath between the two deep sections and giving the scroll a louder-quieter-loud shape.
2. **motion** (weight 12): Implement the camera-scope wipe as the signature scroll moment — pin the circular clip-path on the flue photo while the sweep finding scrolls through, so the signature moves in two places (hero static + scroll animated) and the wow becomes a connected pair.