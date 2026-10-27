COPY: ok

## Five-second test (from dist/index.html; no screenshots available)

At 1440 and 390, the first screen shows: "Indianapolis plumbing, in order" kicker, stacked h1 "Find it. / Fix it. / Tag it.", proof line with hours + city + sample rating, two buttons ("Price a drain clear" primary, "Call (317) 555-0107" secondary), and a 21:9 cinematic strip below. Trade + city + outcome are clear in under 8 words. Phone is visible in header and hero. Next band (intro t-paper) should peek if hero is under 100vh; CSS uses `sec-loose` padding but no explicit 100vh, so peek depends on content height. On 390, the h1 is 3 lines (stacked), both buttons likely above fold given compact hero. **Score: 8.5** — strong composition but cannot verify peek or fold without screenshots; hero strip is placeholder so visual execution unconfirmed.

## First screen (8.5)

Earned: trade+city+outcome in h1 (6 words across 3 lines), one primary action named for the service, phone visible in header and hero CTA, proof line with hours and sample rating. Deductions: cannot confirm next-band peek from CSS alone (-0.5 uncertainty); hero image is placeholder so the "cinematic strip executed with intent" anchor for 9 is unmet (-0.5). No screenshots to verify 390 fold behaviour.

## Distinctiveness (8.5)

Earned: brass-tag + pipe-rail signature appears in hero, process, services, reviews, tools, footer (6 sections per concept.json). Palette (limestone/navy/brass) and type pair (Zilla Slab + Karla + DM Mono) are unique in registry. Layout families include stacked-headline-strip, pinned-rail-story (CSS only, not verified visually), tag-grid, dashed-review-rail. Deductions: no screenshots to confirm the signature does real work vs decoration at each instance (-0.5); cannot compare against siblings B/C (no sibling screenshots found) so distinctiveness against same-niche templates is assumed but not proven (-0.5).

## Typography (9)

Earned: Zilla Slab display with -0.02em tracking and 0.92 line-height; Karla body at clamp(1rem–1.0625rem) ≥ 16px; DM Mono accent for tags, prices, ZIPs, hours. Fluid scale with 6 steps + h1 clamp. Tabular numerals via `font-variant-numeric: tabular-nums` on counters. Lead paragraph set apart with `.lead` class. ≤ 5 sizes visible. No orphans in h1 (3 short lines). Deductions: none observed in markup/CSS. Cannot verify rag or measure in rendered output without screenshots, but CSS `p { max-width: 68ch }` is within 35–75ch range.

## Layout and rhythm (8.5)

Earned: 9 sections (hero, intro, process, services, break, tools, reviews, area, contact) + footer, each with one job. Tones alternate light/paper/deep/accent/light/deep/light/paper/light/deep — no two dark bands touch. Full-bleed break band. Asymmetric hero grid (1.2fr/0.8fr at 900+). Dense services grid vs quiet intro split. Deductions: process section uses same card shape 5 times in a row (-0.5 per §3.4 "same section shape used 3+ times"); cannot verify gap rhythm or blank gaps without screenshots (-0.5 uncertainty). Pinned story height not verifiable from CSS alone.

## Photo and video (7.5)

All media are placeholders (`alt="Placeholder for …"`). Per instructions, placeholder media is expected and not a blocker, but photo quality cannot be assessed. Frames use consistent aspect ratios (21:9 hero, 4:3 intro/tools, 3x2 process, 16x9 area). Alt text describes the slot, not "our work". No duplicate photos in markup. Deductions: cannot verify grade consistency, object-position, or crop quality (-1.0 for unverified execution); no video present despite concept mentioning cinematic strip (-0.5 for missing motion media). Score reflects placeholder reality honestly.

## Copy (9)

Earned: voice matches concept's three sentences (specific nouns: "shut-off", "brass tag", "camera footage", "gauge readings"). Every section answers a homeowner question from brief §1. Microcopy at form ("We'll call back within 2 hours"), ZIP checker, tool results. Primary action consistently named "Price it" throughout. Sample labels on reviews, pricing, licence, rating. No banned phrases. No tricolon headlines (h1 is three lines but not a tricolon slogan). Deductions: break-band CTA "Get my number" differs from "Price it" elsewhere (-0.5 for inconsistent primary action name per §3.6).

## Mobile (8.5)

Earned: responsive breakpoints at 640px and 900px. Mobile bar with call + price-it buttons, min-height 44px. Tap targets ≥ 48px on buttons. No horizontal scroll indicators in CSS. Form inputs have proper inputmode and autocomplete. Deductions: cannot verify 390×844 rendering without screenshots (-0.5 uncertainty); mobile bar hide-on-scroll behaviour depends on JS (app.js not read per rules), so cannot confirm it hides over form (-0.5 uncertainty). Floor is 8; score meets floor.

## Accessibility (8.5)

Earned: skip link present. Focus outline 3px solid var(--focus) with 3px offset. All form inputs have visible labels (no placeholder-only labels). ARIA roles on tabs (tablist, tab, tabpanel), aria-selected, aria-controls, aria-labelledby. Live regions on ZIP result and tool results. Reduced-motion safety net in CSS (§media prefers-reduced-motion). Honeypot field properly hidden. Forced-colors borders on interactive elements. Print stylesheet for estimator. Heading order: h1 → h2 → h3, no skips observed. Deductions: cannot verify reduced-motion screenshot shows all content (no screenshots) (-0.5); rotating word not present so no aria-hidden/sr-only concern. Floor is 8; score meets floor.

## Motion and interaction (8)

Earned: intro clip-path reveal on hero strip, split-text line stagger (70ms/140ms delays), tag swing (rotateZ -8→0, 400ms), rail fill via --sw-p, staggered reveals with 60ms delay. Hover underline language on desktop nav. Reduced-motion respected (all start states visible without .sw-motion). ≥ 3 hooks beyond plain reveals (clip, swing, stagger, counter). Deductions: same `data-reveal` translateY(24px) fade-up on most sections (-1.0 per §3.9 "same reveal on every section"); cannot verify timing or reversibility without screenshots/render.json (-0.5 uncertainty). Story pin not verifiable from CSS alone.

## Wow moment (8)

Earned: the brass-tag system itself is the signature moment, tied to the thesis (every valve tagged). Tools (shut-off finder checklist, water heater estimator, pressure check) are functional and tied to the trade. Deductions: tool outputs are text-only results (`tool-result` div, `estimator-result` div) rather than designed artifacts like a printable sheet or SVG sketch (-1.0 per §3.10 "tool's output is a plain text line"); cannot verify the wow moment in reduced motion without screenshots (-0.5 uncertainty). The concept promised a printable tag card and SVG heater sketch; these are not visible in the markup.

## Polish (8.5)

Earned: SVG favicon + apple-touch-icon preloaded. OG image 1200×630 declared. JSON-LD with specific Plumber type. Theme-color set. Consistent 2px border-radius throughout. Print stylesheet present. Lazy images with width/height. Hero poster preloaded. Forced-colors handled. Deductions: credits list says "Photo by unknown on Pexels" 12 times — placeholder credit is honest but repetitive (-0.5); cannot verify forced-colors rendering or print output without screenshots (-0.5 uncertainty).

## Arithmetic

14×8.5 + 12×8.5 + 10×9 + 10×8.5 + 8×7.5 + 8×9 + 7×8.5 + 7×8.5 + 12×8 + 8×8 + 4×8.5
= 119 + 102 + 90 + 85 + 60 + 72 + 59.5 + 59.5 + 96 + 64 + 34
= 841 / 100 = **8.41**

## Must

- **where**: qa/screens/ (missing entirely)
  **problem**: No screenshots exist; render check has not been run. Cannot verify any visual claim.
  **fix**: Run `node tools/check-render.mjs plumber-A` to generate screenshots before round 2 scoring.

- **where**: dist/index.html, #break CTA
  **problem**: Break-band button says "Get my number" while every other CTA says "Price it" — inconsistent primary action name.
  **fix**: Change `<a class="btn btn-primary" href="#contact" data-service="Drains">Get my number</a>` to `Price it` or `Price a drain clear`.

- **where**: dist/index.html, #tools tab panels
  **problem**: Concept promises printable tag card (@media print) and SVG heater sketch; neither appears in markup. Tool outputs are plain text divs.
  **fix**: Add the printable tag card markup inside #tool-shutoff and the SVG sketch inside #tool-heater as specified in plan/02-concept.md §Tools.

## Should

- **where**: dist/index.html, .process-rail
  **problem**: Five process cards use identical layout (tag + content + image) in sequence; reads as repetitive shape.
  **fix**: Alternate card layouts — e.g., cards 1/3/5 image-left/text-right, cards 2/4 text-left/image-right — or vary the tag position to break the monotony.

- **where**: dist/index.html, [data-reveal]
  **problem**: Most sections use the same translateY(24px) fade-up reveal; motion lacks variety.
  **fix**: Use `data-reveal="clip"` on process images, `data-reveal="scale"` on service cards, and keep fade for text-only sections. Vary entrance by role.

- **where**: dist/index.html, .credits
  **problem**: Twelve identical "Photo by unknown on Pexels" lines look unfinished even as placeholders.
  **fix**: Consolidate to one line: "Photos from Pexels (placeholders)" or use distinct credit slots that map to actual manifest entries once media is curated.

- **where**: dist/index.html, #hero .hero-strip
  **problem**: Hero strip uses a static placeholder image; concept specifies a cinematic strip that slides open. No video element present.
  **fix**: Add a `<video>` element with poster for the cinematic strip, or ensure the clip-path intro animation on the placeholder image delivers the intended "valve opening" effect visibly.

## Elevate

1. **Layout** (weight 10, weakest tie-broken by weight over photo): Break the process-card repetition by introducing an asymmetric overlap — let one card's image bleed into the rail gutter and sit behind the next card's tag, creating depth and a scroll-driven parallax layer that makes the rail feel physical rather than decorative.

2. **Motion** (weight 12): Replace the uniform fade-up reveals with role-specific entrances: text rises, process images clip-wipe left-to-right (matching the rail fill direction), service cards stamp in with a scale pulse echoing the brass-tag press, and the break band holds still as a breath. This turns motion from a blanket effect into a narrative tool that reinforces the "in order" thesis.