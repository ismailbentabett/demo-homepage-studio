COPY: needs copy-chief

## Five-second test (no screenshots available)

From `dist/index.html` alone: the page presents itself as "Hillside Builders & Remodels in Asheville, NC" with a phone number in the header and a mobile call bar. The promised topographic-map hero with embedded ZIP checker is absent; the visitor sees a standard headline over a placeholder image. A homeowner would understand the trade and city but not why this builder differs from any other Asheville GC. Without screenshots I cannot verify fold position or next-band peek on 390x844.

## First screen — 8.0

What earned it: h1 states trade + city + outcome in 7 words; phone visible in header and mobilebar; primary CTA present.

Deductions:
- dist/index.html lines 27-28 preload hero images but no SVG topo map or ZIP checker is rendered; the signature hero promised in concept.json (heroFamily 15) is missing. The first screen reads as a stock photo + text block rather than the concept's map-led entry (-0.5 from the 8.5 anchor).
- Cannot verify next-band peek or fold on 390x844 without screenshots; scored at 8 anchor conservatively.

## Distinctiveness — 7.5

What earned it: Zilla Slab / Source Serif 4 / DM Mono type pair and Blue Ridge Slate + Moss + Rust palette are unique per concept.json; contour-line SVGs and elevation-tag CSS exist.

Deductions:
- Signature appears in only 2 of the 4 required sections (area and footer carry `data-sw-signature`; hero and story do not). Concept.json requires hero, story, services, footer (-1.0 for < 4 sections).
- No sibling screenshots exist to confirm distinctiveness against general-A and general-B; cannot verify cover-the-logo test.

## Typography — 8.5

What earned it: Three families loaded correctly (Zilla Slab display, Source Serif 4 body, DM Mono accent); fluid scale from --fs--1 to --fs-h1; body clamp >= 16px; paragraph max-width 65ch; kicker uses tracked mono uppercase; hours use en-dash ranges.

Deductions:
- No evidence of tabular numerals applied to prices, hours or phone beyond the generic `[data-count]` rule; DM Mono's tabular figures are not explicitly leveraged in the price list or hours block (-0.5 from 9 anchor).
- Cannot verify orphan control or scale-contrast moments without screenshots.

## Layout and rhythm — 8.0

What earned it: Sections alternate t-deep / t-paper / t-mid / t-accent tones; wrap grid with asymmetric area-grid and footer-grid; contour lines provide visual rhythm breaks between sections.

Deductions:
- Missing hero map and story wipe reduce the number of distinct layout families below the 3 required for a 9; the page relies on tone alternation and contour dividers rather than fundamentally different section shapes (-0.5).
- Cannot verify adjacent-tone collisions or density variation without full-page screenshots.

## Photo and video — 7.0

What earned it: Consistent CSS filter applied to all `.frame img` elements (saturate .82, contrast 1.06, sepia .06, hue-rotate -2deg); images have width/height attributes and lazy loading.

Deductions:
- All images are placeholders with alt text reading "Placeholder for crew-from-behind" etc. (dist/index.html line 1186); credits list "Photo by unknown on Pexels" with bare `<a>` tags lacking href (line 1315). Placeholder integration is visually broken and fails the "one grade across every photo" anchor (-1.0).
- Nine `<a>` elements without href in credits are both an a11y failure and a polish failure (static.json warnings).
- Pass mark is 8.5; this category is below floor.

## Copy — 8.5

What earned it: Reviews quote specific slope, flood and bungalow details from facts.json; services use homeowner language ("Hillside additions", "Porch rebuilds"); form thank-you is honest about demo status.

Deductions:
- Mobilebar CTA says "Price it" (line 1325) while form heading says "Get a number for your project" (line 1195): two different names for the primary action (-0.5).
- Review cards lack explicit "Sample" label despite facts.json proof.label being "Sample"; DEMO-RULES requires unlabeled reviews to be marked (mustFix).

## Mobile — 8.0

What earned it: Mobilebar with call and anchor links; buttons and inputs have min-height 48px; header hides on scroll via data-header.is-hidden.

Deductions:
- Cannot verify h1 line count, fold position, or whether mobilebar covers the form/footer without 390x844 screenshots; scored at 8 anchor pending render evidence.

## Accessibility — 8.0

What earned it: Skip link present; focus-visible outline 3px solid with 3px offset; forced-colors borders on interactive elements; reduced-motion safety net disables all animation; honeypot and time-trap in form.

Deductions:
- Nine `<a>` tags without href in credits (static.json warnings) are a11y failures: keyboard-focusable elements with no destination (-0.5).
- Cannot verify that all content is visible in reduced-motion or JS-off states without screenshots.

## Motion and interaction — 7.5

What earned it: Kit provides reveal, split-text, rotator, counter, marquee, compare hooks; GSAP and Lenis loaded deferred; data-reveal attributes present on sections.

Deductions:
- Concept promises SVG contour draw intro, elevation counter climb, and plan-to-build wipe; none of these custom motions are implemented beyond generic data-reveal attributes. Fewer than 3 distinct hooks beyond plain reveals caps motion at 6 per rubric; bumped to 7.5 for kit infrastructure being present but signature motion undelivered (-1.0 from 8.5 anchor).

## Wow moment — 7.0

What earned it: Multi-step form is functional.

Deductions:
- Concept promises elevation counter climbing live + contour parallax as the wow moment; neither is implemented. The estimator tool and lot-slope-check from concept.json tools list are absent from dist/index.html. Generic form does not meet the 8 anchor ("one interesting moment tied to the concept") (-1.0).

## Polish — 8.0

What earned it: SVG favicon and apple-touch-icon preloaded; OG 1200x630 declared; theme-color set; JSON-LD GeneralContractor with openingHoursSpecification; print stylesheet for estimator; lazy images with width/height.

Deductions:
- Credits `<a>` without href is a polish failure (-0.5).
- Mixed radius: global --radius is 2px but sample-tag uses 999px pill (line 413); inconsistent border-radius treatment (-0.5).

## Arithmetic

14×8.0 + 12×7.5 + 10×8.5 + 10×8.0 + 8×7.0 + 8×8.5 + 7×8.0 + 7×8.0 + 12×7.5 + 8×7.0 + 4×8.0 = 112 + 90 + 85 + 80 + 56 + 68 + 56 + 56 + 90 + 56 + 32 = 781 / 100 = 7.81

## Must

1. **dist/index.html line 1315, ul.credits > li > a**: Nine photo credit links have no href attribute; static.json flags 9 warnings. These are broken interactive elements and an a11y failure. Fix: either add valid Pexels URLs to each `<a>` or replace `<a>Pexels</a>` with plain text `<span>Pexels</span>` since placeholder mode has no real credits.
2. **dist/index.html lines 1144-1168, blockquote.review-card**: Review cards do not display the word "Sample" despite facts.json proof.label being "Sample". DEMO-RULES requires unlabeled reviews to be marked. Fix: add `<span class="sample-tag">Sample</span>` inside each review-card footer or before the cite element.

## Should

1. **Hero section**: The SVG topo map with embedded ZIP checker and elevation tag promised in concept.json (heroFamily 15) is not rendered. The hero reads as a generic photo + text block. Fix: implement the map-led hero with contour lines drawing on intro and the ZIP checker embedded as the functional entry point.
2. **Story section**: Lacks `data-sw-signature` and the plan-to-build clip wipe. Fix: add the contour band treatment and the line-drawing-to-photo wipe driven by --sw-p so the signature appears in all 4 required sections.
3. **Mobilebar vs form CTA naming**: "Price it" (mobilebar) and "Get a number for your project" (form heading) are two names for the same action. Fix: pick one name and use it consistently across all CTAs.
4. **Tabular numerals**: Prices, hours and phone numbers do not explicitly leverage DM Mono's tabular figures. Fix: apply `font-variant-numeric: tabular-nums` to the price list, hours dl and phone links.
5. **Credits markup**: Replace bare `<a>Pexels</a>` with either valid links or plain `<span>` to eliminate 9 static warnings and the a11y failure.
6. **Border radius consistency**: sample-tag uses 999px pill while global --radius is 2px. Fix: either adopt the pill as the system radius for tags or align sample-tag to --radius.

## Elevate

1. **Distinctiveness** (weight 12, weakest after wow): Deliver the contour-band signature in the hero and story sections as promised in concept.json. Add `data-sw-signature` to the hero section, render the SVG topo map with elevation tags, and thread the elevation counter into the story so the signature appears in all 4 required sections. This is not a patch; it is the core thesis made visible.
2. **Wow moment** (weight 8, tied weakest with photo): Implement the elevation counter climb and at least one niche tool (lot-slope-check or cost-estimator) from concept.json tools list, using the signature's contour language for the tool output. The wow moment must be tied to the thesis ("climbing the mountain") rather than being a generic form. Reference docs/LEARNINGS.md §3 for moves that take an 8 to a 10: the tool output should be designed in the signature's language, not bolted on.