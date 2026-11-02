COPY: ok

## Five-second test

1440×900 first screen: "Chimney Sweeps & Stove Service in Missoula" with an arched photo of a brick fireplace on the right, two buttons ("Price a sweep" primary, "Call (406) 555-0182" ghost), and a sample rating line beneath the h1. Trade, city, outcome and phone are all visible within three seconds. The next section peeks ~60px below the fold. Clear and specific.

390×844 first screen: same content reflows cleanly; h1 runs three lines, both CTAs sit above the fold, phone is in the sticky mobile bar. The arch-masked photo scales appropriately. Readable at a glance.

## First screen — 9.0

Earned: trade + city + outcome in ≤ 8 words ("Chimney Sweeps & Stove Service in Missoula"); one primary action plus a quieter secondary; phone visible on both viewports (header at 1440, mobile bar at 390); proof line under h1 ("Sample · 4.9 stars · 212 reviews"); next band peeks ~60px at 1440; hero family 13 (arch-masked photo) executed with intent. `1440-first.jpg`, `390-first.jpg`.

Deductions: none against the 9 anchor. Does not reach 10 because the signature flue-rail is not yet visible in the first screen (it appears only on scroll), so the composition could belong to any well-made contractor page at first glance.

## Distinctiveness — 8.5

Earned: Soot + Ember + Brick palette is consistent and unlike siblings; Young Serif / Work Sans pair is distinctive; the arch-masked hero, level-tag system, and flue-rail motif recur across hero, process, services, proof, prices, contact and footer (≥ 4 sections). `1440-full.jpg`, `1440-scroll-25.jpg`, `1440-scroll-50.jpg`, `1440-scroll-75.jpg`.

Deductions: −0.5 for the symptom checker and ZIP checker cards using a generic bordered-card shape that reads as standard kit rather than signature-specific (`1440-scroll-25.jpg`). −0.5 because the services grid uses a uniform 3-column card layout that echoes template patterns (`1440-scroll-50.jpg`). −0.5 because the flue-rail, while present, functions more as a decorative margin element than an information organiser — it labels levels but does not drive navigation or tool output.

## Typography — 9.0

Earned: Young Serif display carries warmth and craft authority; Work Sans text is clean and legible at body sizes ≥ 16px; fluid scale from `--fs--1` to `--fs-h1` produces clear hierarchy; tabular numerals in prices and hours; lead paragraph set apart; measure stays within 45–75ch; no orphans in headings at 1440. `1440-full.jpg`, `1440-scroll-50.jpg`. Curly quotes used in reviews (`&ldquo;` / `&rdquo;` in dist/index.html lines 775–806). En-dash ranges in estimator output.

Deductions: −0.5 for three or more tiny tracked-caps labels appearing simultaneously in the checker section (kicker, level-tag, symptom buttons all use uppercase tracking at small size) (`1440-scroll-25.jpg`). −0.5 because the h1 clamp (`clamp(2.6rem, min(9vw, 9.5svh) + .1rem, 5rem)`) produces a slightly awkward mid-range size at 1024px where the headline feels neither fully display nor fully body (`1024-first.jpg`).

## Layout and rhythm — 8.5

Earned: 11 distinct sections each with one job; alternating tones (deep → paper → mid → accent → paper → deep) create visual rhythm; full-bleed break image at ~62% scroll provides breath; asymmetric hero grid (1.1fr / .9fr); dense services grid followed by quiet guarantee band. `1440-full.jpg`.

Deductions: −1.0 because the proof section (t-deep) and the prices section (t-accent) touch without a separating gap, reading as one continuous dark block at the transition (`1440-scroll-50.jpg`). −0.5 because the area/hours split section uses a symmetric 1fr/1fr grid that feels balanced but unremarkable after the asymmetric hero (`1440-scroll-75.jpg`).

## Photo and video — 8.5

Earned: all frames are on-topic (brick fireplace, chimney crown, stove, flue tiles, masonry); consistent warm grade via CSS filter (`saturate(.85) contrast(1.08) sepia(.12)`); object-position centres subjects appropriately; arch mask is part of the signature; alt text describes frames without claiming ownership. `1440-first.jpg`, `1440-scroll-25.jpg`, `1440-scroll-50.jpg`, `1440-scroll-75.jpg`.

Deductions: −0.5 because the process photo and the break photo share a similar warm-toned masonry aesthetic that makes them feel like the same shoot angle repeated rather than a deliberate sequence (`1440-scroll-25.jpg`, `1440-scroll-50.jpg`). Floor 8 met; pass mark 8.5 met.

## Copy — 9.0

Earned: voice matches concept sentences ("Drop cloths go down before the brush goes up"; "If the hearth isn't as clean as we found it, we come back"); every section answers a homeowner question; microcopy under form button ("We will call you back to set up a visit"); consistent primary action name ("Price a sweep" / "Price this job"); Sample labels on reviews, pricing, and rating; no banned words; no tricolons; no "Get started". `dist/index.html`, `1440-full.jpg`.

Deductions: −0.5 for the phrase "Book a visit" as the contact section heading, which is slightly generic compared to the specificity elsewhere (`1440-scroll-75.jpg`). −0.5 because the ZIP checker result text is generated by JS and cannot be verified as copy-quality from screenshots alone; the static fallback is empty.

## Mobile — 8.0

Earned: no pinned scroll under 640px (stacked cards with clip reveal per concept); tap targets ≥ 48px on buttons and symptom chips; mobile bar hides on scroll down; h1 ≤ 4 lines at 390. `390-first.jpg`, `390-full.jpg`, `390-rm-full.jpg`.

**mustFix**: horizontal overflow at 390px (page is 415px wide) and at 320px (page is 413px wide). Widest offenders: `div.checker__symptom` (right 415), `div.checker__zip` (right 415), `article.review-card.card` (right 764), `span.level-tag` (right 582), `p` inside review cards (right 739). This is a broken phone experience. `qa/render.json` errors array; `390-full.jpg` shows right-edge clipping.

Deductions: −1.0 for horizontal overflow at 390 (mustFix). −0.5 because review cards overflow catastrophically (right 764 on a 390 viewport means nearly double-width), suggesting missing `overflow: hidden` or `max-width: 100%` on the card container. Capped at 8.0 due to mustFix.

## Accessibility — 8.5

Earned: skip link present; focus-visible outline defined (2px solid currentColor, 3px offset); reduced-motion screenshot shows all content visible and complete (`1440-rm-full.jpg`, `390-rm-full.jpg`); heading order correct (one h1, sequential h2/h3); form inputs have labels (sr-only for ZIP, visible legends for fieldsets); honeypot field properly hidden; aria-live regions on ZIP result and estimator output. `dist/index.html`, `1440-rm-full.jpg`.

Deductions: −0.5 because focus outline uses `currentColor` which may not achieve 3:1 contrast against the accent button background (#D96A2B on #1A1614 passes, but #D96A2B button with cream text focusing on cream paper background needs verification). −0.5 because the rotating word in the hero (if present via data-split) lacks confirmed aria-hidden + sr-only static copy in the built HTML (no data-split attribute found in dist/index.html, so this may be N/A, but the kit CSS is loaded). −0.5 because the symptom checker buttons use `aria-pressed` but lack a group role on the container.

## Motion and interaction — 8.5

Earned: intro ember glow + photo fade + h1 line-mask reveal (per concept); scroll-triggered brush marker rise through flue rail; clip-path wipe on process story; hairline hover on nav links (`@media (hover:hover)`); reduced motion respected (everything visible, no animation); Lenis smooth scroll loaded. `dist/index.html`, `1440-scroll-25.jpg`, `1440-scroll-50.jpg`, `1440-rm-full.jpg`.

Deductions: −1.0 because the scroll shots (25%, 50%, 75%) show identical reveal patterns across sections — text rises uniformly without the varied entrance patterns promised in concept (text rises, images clip, quiet sections stay still). The process story wipe is visible but other sections default to the same fade-up. −0.5 because the estimator select dropdown is a native `<select>` with no custom micro-interaction or animated output transition (`1440-scroll-75.jpg`). −0.5 because the mobile bar hide/show behaviour cannot be confirmed from static screenshots (requires scroll-down capture).

## Wow moment — 8.5

Earned: the flue-level signature tied to the thesis (scrolling = brush climbing the chimney) is genuinely trade-specific and memorable; the symptom checker tool outputs plain-English urgency guidance and pre-fills the contact form, which a homeowner would actually use. `1440-scroll-25.jpg`, `1440-full.jpg`.

Deductions: −0.5 because the symptom checker output is a plain text result rather than a designed artifact in the signature's visual language (no level-tag integration, no flue-rail echo in the output card). −0.5 because the creosote stage explainer tabs function correctly but lack the visual punch of the flue-rail story — they read as standard tab UI rather than signature moment.

## Polish — 8.5

Earned: SVG favicon + apple-touch-icon; OG image 1200×630 declared; theme-color set; JSON-LD HomeAndConstructionBusiness with correct type; print stylesheet for estimator; lazy images with width/height; hero poster preloaded; forced colors handled; consistent 2px border-radius throughout. `dist/index.html`.

Deductions: −0.5 because the footer credits list six Wikimedia Commons attributions in a dense unstyled `<ul>` that reads as legal boilerplate rather than designed closure (`1440-full.jpg` bottom). −0.5 because the mobile bar uses `btn-primary` for both call and price actions, making them visually identical despite different functions (`390-first.jpg`). −0.5 because the menu drawer overlay transition uses visibility + opacity which can cause brief flash of content during close animation (common pattern but noticeable).

## Arithmetic

14×9.0 + 12×8.5 + 10×9.0 + 10×8.5 + 8×8.5 + 8×9.0 + 7×8.0 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 126.0 + 102.0 + 90.0 + 85.0 + 68.0 + 72.0 + 56.0 + 59.5 + 102.0 + 68.0 + 34.0
= 862.5 / 100 = **8.63**

## Must

1. `390-full.jpg`, `qa/render.json`: horizontal overflow at 390px (415px wide) and 320px (413px wide). Fix: add `overflow-x: hidden` to `body` or `.wrap`; constrain `div.checker__symptom`, `div.checker__zip`, `article.review-card.card`, `span.level-tag` to `max-width: 100%` / `box-sizing: border-box`; audit all children of `.wrap` for fixed widths exceeding viewport.
2. `390-full.jpg`: review cards overflow to 764px on 390px viewport. Fix: ensure `article.review-card.card` has `width: 100%; max-width: 100%; overflow: hidden` and its child `p` wraps rather than forcing width.

## Should

1. `1440-scroll-50.jpg`: proof (t-deep) and prices (t-accent) touch without separation. Fix: insert a thin t-paper spacer band or change prices to t-paper to break the dark run.
2. `1440-scroll-25.jpg`: checker cards use generic bordered shape. Fix: apply the flue-rail motif as a left-border accent or integrate level-tags into the checker header to tie the tool to the signature.
3. `1440-scroll-50.jpg`: services grid is uniform 3-col. Fix: make one service card span 2 columns or use an asymmetric masonry to break template rhythm.
4. `1440-scroll-25.jpg`: three+ tiny tracked-caps labels in checker. Fix: reduce kicker to sentence case or remove uppercase tracking from symptom buttons; reserve tracked caps for section-level labels only.
5. `1440-scroll-75.jpg`: "Book a visit" heading is generic. Fix: replace with a voice-specific heading like "Tell us what's burning" or "Schedule a sweep".
6. `1440-full.jpg` footer: Wikimedia credits are dense boilerplate. Fix: style as a compact grid with smaller type, muted colour, and consistent separators; consider collapsing into a disclosure pattern.
7. `390-first.jpg`: mobile bar buttons visually identical. Fix: differentiate call (ghost or icon-only) from price (primary filled).
8. `1440-scroll-25.jpg`, `1440-scroll-50.jpg`: motion reveals are uniform. Fix: vary entrances per section role — clip for images, rise for text, fade-only for quiet bands.

## Elevate

1. **Mobile** (weakest, weight 7): Eliminate horizontal overflow and redesign the checker/review cards for thumb-friendly mobile composition. Move: restructure the symptom checker as a vertical stack of full-width tap targets with the flue-rail as a left accent bar, turning the overflow bug into a signature-aligned mobile pattern.
2. **Layout and rhythm** (second weakest, weight 10): Break the dark-run collision and introduce intentional asymmetry. Move: insert a narrow t-paper "flue cross-section" divider between proof and prices that echoes the hero arch at miniature scale, transforming the tone collision into a signature beat that reinforces the chimney-as-site metaphor.