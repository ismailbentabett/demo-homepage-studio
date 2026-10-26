COPY: ok

## Five-second test
1440-first.jpg: "Exterior & Interior House Painting in Richmond" — trade, city, and outcome ("starts with the prep") are clear within 3 seconds. Phone number visible in header. Primary action "Price it" is prominent. Next band peeks at bottom of viewport. 390-first.jpg: Same clarity, h1 wraps to 3 lines, buttons above fold. The visibility bug from R2 is fixed; full content is now rendered.

## Category scores

### firstScreen (9)
1440-first.jpg: h1 states trade + city + outcome in 7 words. One primary action ("Price it") plus secondary ("Call"). Phone visible in header. Next band peeks ~80px. 390-first.jpg: h1 3 lines, both actions above fold. No deductions. Score 9.

### distinctiveness (8)
1440-full.jpg: The "Coat Schedule" stripe motif appears in the hero (vertical accent bar), process section (numbered steps with dry-time stamps), and footer (rail line). This signature system is visible in ≥4 sections. However, the overall layout families (hero-split, text-left/image-right, card-grid) are somewhat standard for the niche. Siblings not checked but motif is present. Score 8 because signature exists but layout variety could be stronger.

### type (8.5)
1440-full.jpg: Sora/Outfit pairing is clean. Fluid scale works across viewports. Body text ≥16px, measure ~65ch. Tabular numerals in pricing and hours. Lead paragraph set apart. No orphans in headings. Deduction: -0.5 for straight quotes in review cards ("The house was built...") — should use curly quotes. Score 8.5.

### layout (8.5)
1440-full.jpg: Good rhythm of tones (deep → light → paper → deep → accent → light → deep). Sections have distinct jobs. Asymmetric split in hero and area sections. Dense proof section balanced by quiet guarantee note. Deduction: -0.5 for two dark bands (navy hero-bottom and navy area-top) appearing close together at scroll transition, reading as one block briefly. -0.5 for centered paragraph in guarantee note exceeding 3 lines. Score 8.5.

### photo (6)
render.json: placeholderCount: 10. All images are grey placeholder boxes with alt text describing missing content. No real photography to evaluate. While placeholders are expected in demo, the rubric floor is 6 and this represents zero photographic art direction, grading consistency, or crop intentionality. Score 6 (floor). MustFix: replace with approved media.

### copy (9)
1440-full.jpg: Voice is specific and contractor-authentic ("washing, scraping, spot-priming", "wet-scraped everything", "ridge vent"). Buttons named for action ("Price it", "Check"). Sample labels present on all reviews, pricing, and guarantee. Microcopy under form ("We'll call you back to set up a visit"). Consistent primary action name throughout. No banned phrases. Score 9.

### mobile (9)
390-full.jpg: No horizontal scroll. Tap targets ≥48px (buttons measure ~52px height). Sticky mobile bar hides on scroll down. Hero re-cropped appropriately for phone. h1 ≤4 lines. ZIP checker usable with thumb. Form inputs properly sized. Score 9.

### a11y (9)
390-full.jpg and 1440-full.jpg: All content visible (R2 bug fixed). Skip link present. Focus styles defined (3px outline in accent color). Labels on all form inputs. Reduced motion would show same content (CSS respects prefers-reduced-motion). Heading order correct (one h1, sequential h2s). Honeypot field properly hidden. Score 9.

### motion (8.5)
1440-full.jpg: Reveal animations present on scroll (data-reveal attributes). Intro runs quickly. Hover states on buttons (scale .97 on press). Reduced motion respected via CSS media query. Deduction: -0.5 for same fade-up reveal on most sections (process cards, review cards, price lines all use identical translate-y reveal). Needs more variety in entrance types. Score 8.5.

### wow (8)
1440-full.jpg: The "Coat Schedule" tool concept is interesting but currently static — no interactive element visible in screenshots. The numbered process steps with dry-time stamps serve as a signature moment tied to the thesis. Deduction: -1.0 because the wow moment is not truly interactive or memorable enough to "show your partner" — it reads as well-designed content rather than a tool. Score 8.

### polish (8.5)
1440-full.jpg: SVG favicon, apple-touch-icon, OG tags, JSON-LD all present. Consistent radius (2px). Print stylesheet included. Lazy loading on images. Deduction: -0.5 for mixed icon stroke widths in mobile bar (phone icon vs button borders differ slightly). Score 8.5.

## Arithmetic
14×9 + 12×8 + 10×8.5 + 10×8.5 + 8×6 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8 + 4×8.5
= 126 + 96 + 85 + 85 + 48 + 72 + 63 + 63 + 102 + 64 + 34
= 838 / 100 = 8.38

## Must
- **where**: render.json, **problem**: placeholderCount: 10. All media is placeholder. **fix**: Replace all placeholder images with approved media from niches/painter/media/manifest.json using [[img]] macros. Ensure hero, process, and proof sections have on-topic, region-appropriate frames with consistent grade.

## Should
- **where**: 1440-full.jpg, #reviews, **problem**: Straight quotes in review text instead of curly quotes. **fix**: Update review copy to use typographic quotes (&ldquo; &rdquo;) or ensure build process converts them.
- **where**: 1440-full.jpg, .sec-area, **problem**: Two dark tone bands appear adjacent during scroll transition. **fix**: Insert a light or paper tone buffer section between hero-bottom and area-top, or adjust padding to create visual separation.
- **where**: 1440-full.jpg, .guarantee-note, **problem**: Centered paragraph exceeds 3 lines. **fix**: Left-align the guarantee note or break into shorter statements.
- **where**: 1440-full.jpg, [data-reveal], **problem**: Identical fade-up reveal on all sections lacks variety. **fix**: Vary entrance types: clip reveals for images, stagger for lists, fade-only for quiet sections. Use data-reveal="clip" or data-reveal="fade" selectively.
- **where**: 1440-full.jpg, .mobilebar__btn svg, **problem**: Icon stroke width inconsistent with button border weight. **fix**: Align SVG stroke-width to match --rule-w (1.5px) or adjust icon size.

## Elevate
- **category**: photo (weight 8): Source and integrate approved media that tells a sequence (prep → work → result) with consistent color grading. Apply the coat-stripe motif as a frame treatment or clip-path mask to make photography part of the signature system, not just decoration.
- **category**: wow (weight 8): Transform the static Coat Schedule into an interactive estimator where users select room count or exterior surface and receive a printable spec sheet styled in the signature language. The output should feel like a designed artifact, not plain text.