# Concept — general-A (Crosstie Building Co.)

## Three obvious concepts, rejected

1. **The timeline strip.** A horizontal Gantt chart of phases across the hero with icons for demo/framing/drywall. Rejected: every GC template has a "our process" step row; this is just a prettier version of the four-icon Consult/Design/Build/Enjoy cliché.
2. **The Friday report card as hero.** A single oversized clipboard mockup filling the first screen with "Week 12" stamped on it. Rejected: takes the brief's seed literally and becomes a gimmick; no room for trade + city + action above the fold.
3. **Rail-yard photography collage.** A mosaic of steel rails, ties and work lights with type overlaid. Rejected: reads as an aesthetic, not a system; the crosstie rhythm disappears below the hero and the site becomes generic dark-mode contractor.

## The thesis

The page is a rail track of crossties: every section is one tie laid down with its week number stenciled on the end, and scrolling moves the amber "today" line forward so each tie flips from upcoming to done.

## The signature system — crosstie track

A horizontal bar (the tie) with a stenciled week number on its left end, the phase name in condensed caps, and a small Friday-report card on the right (done / next / decisions). Two steel rails run continuously down the left margin; an amber "today" line sits at the active tie and advances on scroll.

- **Hero:** the rails draw themselves down from the header as the video fades up; the h1 sits beside week 1's tie, the CTA row is bolted to the tie like a spike plate.
- **Track story (process):** pinned section where four ties (demo → footings → framing inspection → walk-through) stack vertically; the today-line wipes down and each tie's report card stamps "DONE" as it passes. On mobile (<640px) this becomes stacked cards with a clip reveal, no pin.
- **Services:** each service is a branch line off the main track — a shorter tie with the service name and a one-line blurb, grouped by kitchen line / addition line / whole-home line.
- **Proof / reviews:** quoted lines pulled from actual weekly reports, set as telegrams clipped to the tie with a paper-clamp accent; each carries the Sample tag.
- **Footer:** the final tie, week 20, with the disclaimer and credits stamped into its end grain; the rails terminate in a buffer stop.

`data-sw-signature` hook lives on the track container; `app.js` drives the today-line via ScrollTrigger scrub.

## Type

- **Display:** Barlow Condensed (700). Industrial condensed sans, stenciled-week-number voice; ≤ 3 uses in registry, none in general niche.
- **Text:** Work Sans (400, 500, 700 variable). Slightly wide grotesk tuned for screens; reads well against the condensed display and carries body, blurbs and report cards without competing.
- **Accent:** DM Mono (400, 500). For week numbers, phase labels and the telegram quotes; tabular figures keep the track aligned.

Pair rationale: Barlow Condensed gives the rail-car stencil authority; Work Sans keeps the report cards and body legible at small sizes; DM Mono locks the numeric rhythm. None are Inter/Roboto/system-ui; pair is unique vs roofer-A (Fraunces + Inter).

## Palette — creosote + rail-steel + work-light

| Role | Hex | Name |
|---|---|---|
| ink | #f2efe8 | chalk white |
| paper | #1b1915 | creosote black-brown |
| deep | #2a2722 | ballast |
| mid | #5c564c | rail steel |
| accent | #d49a2a | work-light amber |
| signal | #e8c96a | spike gold |
| focus | #e8c96a | spike gold |

Family name: **creosote + work-light**. Unique in registry (roofer-A is Slate + Copper).

Contrast pairs (run through contrast.mjs before build):
- chalk on creosote: ≥ 12:1 (body ✓)
- chalk on ballast: ≥ 9:1 (large text ✓)
- work-light amber on creosote: ≥ 4.6:1 (accent words ✓)
- spike gold on creosote: ≥ 7:1 (focus ring ✓)
- chalk on work-light amber: fails → amber never carries body text; only rules, stamps and the today-line.
- chalk on rail steel: ~4.2:1 → used only for large phase labels (≥ 24px), never body.

## Hero family — 1 (full-bleed video + scrim)

Unique in the general niche; library count = 1 after this reservation (≤ 2 allowed). Breaks the cliché: the scrim is not a flat gradient but a left-aligned vertical band that matches the creosote paper tone and contains the two steel rails; the video occupies only the right 60% and shows framing at dusk under real work lights, not a sunlit money shot. The headline is set as the week count ("Week 1 to week 20"), not a slogan.

## Motion score

- **Intro (≤ 1.2 s):** the two rails draw down from the header (DrawSVG, 900 ms), then the h1 line-masks reveal (70 ms stagger); skippable via `prefers-reduced-motion` which shows the static layout immediately.
- **Scroll story 1 — track advance:** the amber today-line scrubs down the track as you scroll (900 ms ease-io), each tie's report card flips and stamps DONE at the crossing; reverses on scroll-up. Pinned only ≥ 640 px; below that, stacked cards with clip-path reveal.
- **Scroll story 2 — budget station:** at the estimator, the same today-line pauses and a horizontal bar fills segment-by-segment as scope choices are made; the bar uses the same amber and eases with the track verb.
- **Hover language:** a hairline rule grows from the left (`scaleX(0→1)`, `transform-origin: left`, 200 ms) under every tie, button and card; one language site-wide, inside `@media (hover:hover)`.
- **Reduced motion:** all ties visible with their final state (report cards show DONE or UPCOMING statically), today-line hidden, video replaced by its poster, no clip reveals.

## Tools

1. **Project timeline builder** (`estimator` module repurposed). Inputs: project type (select), size S/M/L (radio), start month (select). Output: a week-by-week schedule rendered as a mini-track of ties with phase labels; ends with "expected move-back week". Hand-off: project type prefills the quote form via `data-service`.
2. **Weekly report preview** (`tabs` module). Three tabs: Done this week / Next week / Decisions needed. Each tab shows a sample report card in the telegram style with a photo slot. Hand-off: "Want your own every Friday?" CTA scrolls to #contact.
3. **Live-in-or-move-out guide** (`checklist` module). Inputs: project type, kids yes/no, home office yes/no. Output: a list of hard weeks (no kitchen, dust, noise) with a live result line. Hand-off: result summary prefills the form's job-details step.
4. **ZIP checker** (`zip`). Standard.
5. **Quote form** (`form`). Multi-step; receives prefills from all three tools.

## Voice

Three sentences in the site's voice:
- "Every Friday you get a report: what we did, what is next, what we need from you by Monday."
- "The framing inspection slipped a week; the report said so before you could ask."
- "Your temporary kitchen goes in on day three, and the counter install date is written on the schedule."

Five words the site never uses: dream, vision, seamless, turnkey, hassle-free.