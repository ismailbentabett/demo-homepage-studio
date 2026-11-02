COPY: ok

## Five-second test
1440-first.jpg: "Chimney inspections in Bend, OR / with a written note" is immediately readable; the numbered finding primitive (F-00) and OK/WATCH/FIX chips are visible in the hero preview; phone is in the header; primary CTA "Book a visit" is above the fold. 390-first.jpg: h1 wraps to 3 lines, both CTAs visible, phone in header, next section peeks. Clear trade + city + outcome in under 8 words. Visitor knows what it is, where, and what to do.

## firstScreen — 9.0
1440-first.jpg: h1 states trade + city + outcome ("Chimney inspections in Bend, OR / with a written note") in 7 words across 2 lines; primary CTA "Book a visit" and secondary "See sample prices" both above fold; phone visible in header; proof line "Sample rating · 4.8 · 167 visits" present; next band peeks ~80px. 390-first.jpg: h1 3 lines, both CTAs above fold, phone visible. Signature finding primitive visible in hero preview. Deduction: none at 9 anchor.

## distinctiveness — 9.0
1440-full.jpg: Finding-note signature system appears in hero (F-00), services (F-01 through F-08), prices (01–05), reviews (01–04), contact (F-12), and footer (END) — 6 sections. Three layout families: hero split, services list, review rail, price table, contact split. Palette (pumice paper + ink + tri-signal) and type pair (Outfit + JetBrains Mono) are unique per concept. Siblings A and C use different hero families and type pairs. Deduction: none at 9 anchor.

## type — 9.0
1440-full.jpg: Outfit display + JetBrains Mono accent for finding numbers, chips, kicker labels, and proof line. Fluid scale from --fs--2 to --fs-h1. Body ≥16px (clamp .9375rem–1rem). Measure constrained to 65ch on p, 58ch on lead. Tabular numerals on finding numbers and prices via font-variant-numeric. Lead paragraph set apart with larger size. ≤5 distinct sizes visible. No orphans in headings. 1440-scroll-50.jpg: price ranges use en-dash and tabular alignment. Deduction: none at 9 anchor.

## layout — 9.0
1440-full.jpg: 11 sections with alternating tones (paper → deep → paper → mid → paper → deep → paper → accent → deep → paper → light). ≥3 layout families (hero split, services vertical list, area split, tools grid, process numbered, prices table, reviews horizontal rail, contact split). Full-bleed break at process section. Asymmetric hero. Dense services section followed by quiet area section. 1440-scroll-75.jpg: process t-deep and contact t-deep are now separated by a clear t-paper FAQ/tools band with ruled frame, creating a distinct breath between dark runs. Previous rhythm deduction resolved. Deduction: none at 9 anchor.

## photo — 8.5
1440-first.jpg: Hero flue photo clipped to circle scope shape, consistent sepia/saturate grade applied via CSS filter. 1440-scroll-25.jpg: service photos in consistent aspect ratio with object-position center 40%. All frames on-topic (chimney, stove, flue, cap). Alt text describes frames without "our work". Reduced-motion screenshot shows all photos static and visible. Deduction: photos are stock with CSS grade rather than art-directed sequence; the scope wipe is now implemented as a scroll-triggered clip reveal but remains a single moment rather than a full photographic narrative — stays at 8.5 anchor, not 9.

## copy — 9.0
1440-full.jpg: Voice matches concept sentences ("We write down what we saw"; "If it's fine, we say fine"). Every section answers one homeowner question. Microcopy under form button ("In your version this goes straight to your phone"), next to phone, at ZIP check. Primary action consistently named "Book a visit" throughout. Sample labels on all reviews, prices, and rating. No banned phrases. No tricolon headlines. No "Get started" or "Learn more". Concrete nouns from trade ("flue", "smoke shelf", "baffle", "chase cover", "spark mesh"). Deduction: none at 9 anchor.

## mobile — 9.0
390-first.jpg and 390-full.jpg: No horizontal scroll at 390px (render.json confirms scrollWidth=390, no wide elements). Tap targets ≥48px (buttons min-height 48px, menu button 48×48). Sticky mobile bar with call + price-it CTAs. h1 ≤4 lines at 390. Tools usable with thumb. 390-rm-full.jpg: all content visible under reduced motion. Previous overflow issue resolved. Deduction: none at 9 anchor.

## a11y — 9.0
1440-rm-full.jpg and 390-rm-full.jpg: All content visible under reduced motion; no hidden text. Focus outline 3px solid watch color with 3px offset (visible in CSS). Skip link present. All form inputs have labels (fieldset/legend pattern). Heading order: h1 → h2 → h3, no skips. Rotating word not used (no rotator in markup). Video not autoplay (no video element). Forced colors handled for buttons and chips. Deduction: none at 9 anchor.

## motion — 9.0
1440-scroll-25.jpg through 1440-scroll-50.jpg: Camera-scope wipe is now implemented as a pinned circular clip-path on the flue photo in the sweep finding section, revealing the interior as the user scrolls. Reveal animations (translateY + opacity) on sections; stagger on finding chips; clip reveal on images. Reduced-motion screenshots show everything visible without animation. Hooks present: data-reveal, data-reveal-stagger, data-count, data-lead, data-zip, data-open-now, data-menu-btn, plus ScrollTrigger pin for scope wipe. Intro runs within budget. Previous deduction for missing signature scroll moment resolved. Deduction: none at 9 anchor.

## wow — 9.0
1440-first.jpg and 1440-scroll-25.jpg: The finding-note signature is the wow moment — a visit note as the page itself, with numbered findings and status chips. The camera-scope wipe in the sweep section connects the static hero signature to an animated scroll moment, creating two connected moments tied to thesis and trade. Tool outputs (ZIP checker, symptom checker, sweep planner, firewood dry-check) are designed in the finding language. Deduction: none at 9 anchor.

## polish — 9.0
dist/index.html: SVG favicon + apple-touch-icon present. OG image 1200×630 declared. theme-color set. JSON-LD HomeAndConstructionBusiness with correct type. Print stylesheet for estimator. Lazy images with width/height. Consistent radius (--r-sm: 2px, --r-md: 4px, --r-pill: 999px). One rule weight (--rule-w: 1.5px). Footer designed with finding primitive. No console errors. Deduction: none at 9 anchor.

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36
= 896 / 100 = 8.96

## Must
(none)

## Should
(none)

## Elevate
1. **photo** (weight 8): Art-direct the photo sequence so crops tell a plan→work→result story across the services and process sections, using the scope clip as a recurring frame treatment that ties every image to the finding-note signature rather than applying it only to the hero.
2. **wow** (weight 8): Make the scope wipe output a printable finding sheet that the homeowner can save or share, so the tool's output is designed in the signature's language and the wow becomes something they keep, not just something they watch.