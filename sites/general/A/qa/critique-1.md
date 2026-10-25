# Critique — general-A (Round 1)

## Overall impression
The crosstie track concept is distinctive and well-executed across sections. The amber today-line advancing on scroll creates a strong visual metaphor that ties the whole page together. Typography pairing (Barlow Condensed + Work Sans + DM Mono) reads industrial without feeling generic. Placeholder images are functional but lack the warmth real photos would bring.

## Category assessments

### Distinctiveness (9/10)
The rail-track thesis is original for a general contractor site. The signature system appears consistently in hero, track-story, services, proof and footer. No two sections share the same layout family. The week-number stenciling and Friday report cards give it a voice competitors won't copy.

**Elevate move:** Push the signature into the weekly-report section by adding a tie-bar header above the tabs, and add a small rail accent to the contact form panel so the track language reaches every interactive moment.

### Motion (8/10)
The hero rails draw and h1 line-mask reveal work within the 1.2s budget. The today-line scrub on the track-story is the core scroll story and feels purposeful. Missing: no second scroll story at the estimator/budget section as promised in concept.md. Mobile uses clip reveals which is correct but could feel more tied to the track verb.

**Elevate move:** Add the budget station scroll story at the timeline-tool section — when the user selects project type/size, animate a horizontal amber bar filling segment-by-segment using the same ease-io as the today-line. This gives the site its second promised scroll story.

### Copy (8/10)
Headlines carry the thesis ("Week 1 to week 20. A report every Friday."). The three voice sentences from concept.md appear naturally. Sample labels are present on reviews and pricing. The lead form thank-you state is honest. Minor issue: some service blurbs could be tighter; the "Price it" CTA label varies between buttons.

### Photo (7/10)
Placeholder panels with solid colors and text labels serve the build but score low on visual appeal. They communicate the intended content but lack atmosphere, texture and the creosote palette's photo-grade filter treatment. Real Pexels photos would elevate this significantly.

### Layout (9/10)
12 sections with no two neighbours sharing a layout family. Split, statement, pinned-stack, full-bleed, rail-grid, tabs, checklist, telegram-grid, estimator, split, form, rail-terminate — excellent variety. The rhythm alternates deep/paper/deep correctly with one accent band and one mid break.

### Type (9/10)
Barlow Condensed display at clamp(2.8rem, min(9vw, 9.5svh) + 0.1rem, 6rem) with -0.03em tracking and 0.95 line-height reads authoritative. Work Sans body at 1.5 line-height and 60-72ch measure is legible. DM Mono for week numbers and phase labels locks the numeric rhythm. All headings use `text-wrap: balance`.

### Conversion (8/10)
Multiple CTAs point to #contact. The multi-step form has prefill hooks from tools. The mobile bar hides on scroll-down and over #contact. ZIP checker offers form hand-off. The estimator outputs a mini-track but the "Get a real number" CTA could be more prominent.

### Accessibility (9/10)
Skip link present. Header nav has aria-label. Tabs use role=tablist/tab/tabpanel with aria-selected. Form fields have labels. Focus rings use #e8c96a which passes 3:1 on dark tones. Reduced motion guard wraps all GSAP code. Landmarks on navs. No skipped heading levels.

### Performance (9/10)
No external fonts loaded from CDN. Self-hosted woff2 subsets. GSAP/Lenis from vendor/. No tracking scripts. Images lazy-loaded except hero. Preloads for eager images. dist size 464 KB is reasonable.

### Uniqueness (9/10)
Font pair (Barlow Condensed + Work Sans + DM Mono) is unique vs roofer-A (Fraunces + Inter Tight). Palette family (creosote + work-light) differs from slate + copper. Hero family 1 is within the ≤2 allowed for general niche. Check-unique ran clean.

### Demo Safety (9/10)
All facts go through tokens. Reviews carry [[sample Sample review]]. Pricing carries [[sample Sample pricing]]. Licence number labelled sample. Footer has {{demo.disclaimer}}. Phone uses 555-01NN range. Email uses .example domain. No banned words used.

## Must-fix items
None from static/render checks (both clean).

## Should-improve items
1. Add second scroll story at timeline-tool (budget station) as promised in concept.
2. Push signature into weekly-report section with a tie-bar header.
3. Replace placeholder images with real Pexels photos when key becomes available.
4. Standardize CTA labels — "Price it" vs "Price an addition" vs "Get a number".

## Two weakest categories
1. **Motion (8/10)** — missing second scroll story at estimator.
2. **Photo (7/10)** — placeholders lack visual impact.

## Elevate moves summary
1. Add budget station scroll story: animate horizontal amber bar filling segment-by-segment at timeline-tool section using same ease-io ease as today-line.
2. Push signature into weekly-report: add a tie-bar header above tabs with week number and phase label styling consistent with track-story ties.