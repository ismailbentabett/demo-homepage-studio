COPY: ok

## Five-second test (DOM-only, no screenshots)

At 1440: the hero shows "HEART PINE" as a type-mask headline, the kicker "Norfolk floors for old houses and high water", a lead about reading moisture under the house, two actions ("Price it" primary, "Text Andre" secondary), and a sample-rating proof line. Phone is visible in the sticky header. Trade + city + outcome are clear within three seconds. At 390: the same content stacks; the h1 is one word ("HEART PINE") so it cannot exceed four lines; both buttons sit above the fold because the hero media is hidden below 900px. The next band (trust row) peeks because the hero is `calc(100svh - header-h)` not 100vh. Passes the five-second test cleanly.

## First screen — 9.0

What earned it: trade + city + outcome in the kicker and masked h1; one primary action ("Price it") plus a quieter secondary ("Text Andre"); phone visible in the header at both sizes; sample-tagged proof line under the hero; next band peeks because hero height subtracts the header; intro uses `data-split="lines"` with `data-reveal` that resolves instantly under reduced motion (CSS sets opacity/transform to final state when `.sw-motion` is absent).

Deductions: none material. The h1 is a single masked word, which is unconventional but still communicates the material and concept. No screenshot to verify the exact visual weight of the mask, so I withhold the 10 anchor until render evidence exists.

## Distinctiveness — 9.0

What earned it: the Tide Line Gauge signature (`data-sw-signature="tide-line"`) appears in the hero, heart-pine story (3 steps), water-damage section, services, break, house-age guide, spotlight, zip-check, contact, and footer — well over four sections, including hero and footer. Each instance carries a measurement that teaches something (KING TIDE 3.8 ft, CRAWLSPACE 1.2 ft, STORM SURGE 2.4 ft, READING 1.2 ft, SERVICE AREA 0.0 ft, CONTACT −1.0 ft, LOW TIDE −1.0 ft). Layout families include: type-mask hero, pinned scroll story, checklist + two-up media, 3-column service grid, full-bleed break, tool panel with slider, 3-column review grid, asymmetric spotlight, centered ZIP checker, two-column contact form, three-column footer. Type pair (Oswald + Source Sans 3 + DM Mono accent) differs from flooring-A (Crimson Pro + Karla) and flooring-B (Archivo + Karla). Palette (Tide Navy / Heart Pine Amber / Sand Paper) is unique in the niche.

Deductions: without screenshots I cannot confirm the cover-the-logo test, so I stop at 9 rather than 10. The signature does real work (it organises information by water level), not decoration.

## Typography — 9.0

What earned it: fluid scale via clamp tokens; body ≥ 16px at full ink (`--fs-1` clamps to 1rem–1.125rem); measure capped at 65ch on paragraphs; Oswald display with negative tracking (-0.03em) and tight line-height (0.92); Source Sans 3 body with variable weight range; DM Mono used consistently for gauge readings, sample tags, hours, phone, licence, and form labels; tabular-nums on trust values and counters; ≤ 5 distinct sizes visible in the markup; no orphans in headings (single-word h1, short h2s). Lead paragraph set apart via `.lead` class with muted color and larger size.

Deductions: none observable from DOM. Without screenshots I cannot verify curly quotes or en-dash usage in every instance, but the copy uses proper apostrophes (`nor'easter`) and en-dashes in ranges (`Mon–Thu`, `7:30 am – 5 pm`). Score stays at 9 pending visual confirmation of micro-typography.

## Layout and rhythm — 9.0

What earned it: 11 sections each with one job; alternating tones (deep → paper → deep → mid → paper → deep → accent → paper → paper → paper → deep → paper); ≥ 3 layout families with no two neighbours alike; full-bleed break section; asymmetric spotlight (text left, stacked media right at desktop); dense service grid followed by quiet ZIP checker; gap between sections (`section-pad-normal` / `section-pad-loose`) exceeds gap within (card padding). No blank gaps over half a screen observable from CSS.

Deductions: without screenshots I cannot confirm whether any two dark bands touch visually. The markup alternates tones correctly, so I assume the builder respected the rhythm. Score 9, not 10, until render evidence confirms the scroll shape.

## Photo and video — 8.0

What earned it: all frames use on-topic keys from the niche manifest (hero-C1, process-sander, detail-grain-redoak, detail-cupping, weather-rain, finished-living, hands-sample, detail-stairs, detail-transition); consistent aspect ratio (3/2) via `.frame`; alt text present on every img; width/height attributes set; lazy loading on non-hero images; hero image preloaded with fetchpriority="high"; consistent CSS filter (saturate 0.85, contrast 1.05, sepia 0.08) applied uniformly to create a single grade.

Deductions: all photos are placeholders with generic alt text ("Placeholder for ..."). This is expected in placeholder mode and caps the category at 8.0 per the task instructions. No off-topic frames, no faces presented as owner, no logos, no duplicate photos. When real media is loaded, this should rise to 8.5+.

## Copy — 9.0

What earned it: voice matches the concept's three sentences exactly (moisture reading, gentle sanding, invisible patch); every section answers a homeowner question from the brief; microcopy at moments of doubt ("Your number comes after we see the floor", "Each price is a sample range"); consistent primary action name ("Price it" everywhere except the damage check which uses "Book a damage check" — appropriate contextual variation); sample tags on rating, licence, pricing, and reviews; no banned words; no tricolon headlines; no "Get started" / "Learn more" / "Submit"; buttons named for the action.

Deductions: none. The copy reads like the best person at the company wrote it: concrete nouns (heart pine, cupped boards, reclaimed slivers, vapor barrier, satin polyurethane), honest "it depends" framing, and not one line that could paste onto another trade's site.

## Mobile — 9.0

What earned it: hero media hidden below 900px so the 390 first screen is text-only and fast; mobile bar fixed at bottom with Call and Price-it buttons, hidden at ≥ 900px; tap targets ≥ 48px on buttons and inputs; menu overlay with large Oswald links; no horizontal scroll possible (container max-width + padding, flex-wrap on actions); form inputs min-height 48px; radio cards with adequate padding; ZIP input min-width 120px with flex: 1. CSS breakpoints at 640px and 900px restructure grids appropriately. Reduced motion shows everything (no content hidden behind `.sw-motion` gates).

Deductions: without 390×844 screenshots I cannot verify the exact line count of the h1 or whether the mobile bar covers the footer credits. The CSS suggests correct behaviour. Score 9 pending render evidence. Cannot assess 320×640 in fast mode (not required).

## Accessibility — 9.0

What earned it: skip link present; focus-visible outline 3px solid var(--focus) with 3px offset on every tone; forced-colors rules for compare handle, hotspots, carousel controls, zip button, and broken frame fallback; reduced-motion safety net kills all animation durations; JS-off hides only JS-dependent controls (menu button, vid button, tablist, filter buttons, carousel nav, marquee toggle, est-print, compare handle, js-only elements); all form inputs have labels (sr-only for ZIP, visible spans for others); fieldset/legend structure on multi-step form; aria-live on ZIP result and age-guide output; aria-expanded on menu button; aria-label on star ratings; honeypot field properly hidden; time-trap hidden input for spam detection.

Deductions: without reduced-motion screenshots I cannot confirm every word is visible, but the CSS architecture guarantees it (`.sw-motion` gates all hiding). Heading order is correct (one h1, h2s for each section, h3s for subsections). No heading skips. Score 9 pending visual confirmation.

## Motion and interaction — 9.0

What earned it: ≥ 3 hooks beyond plain reveals (type-mask hero with split-text lines, pinned scroll story with tide-rise data attribute, clip-path reveals on frames, counter-ready trust values); intro uses `data-split="lines"` with stagger that respects reduced motion; entrances vary by role (text rises via translate-y, images clip via clip-path, quiet sections stay still); one hover language (ghost button underline scaleX from left, 200ms, @media hover:hover only); story is reversible (ScrollTrigger-based, not scroll-jacking); no bounce or elastic easing in CSS tokens; no layout property animations (only transform, opacity, clip-path, filter); Lenis loaded for smooth scroll.

Deductions: without scroll screenshots I cannot verify the pinned story's exact behaviour or whether it stays pinned only at ≥ 640px. The DOM has `data-scroll-story="tide-rise"` which suggests correct implementation. Score 9 pending render evidence.

## Wow moment — 9.0

What earned it: the Tide Line Gauge is tied to the thesis (water level as organiser) and the trade (floor-water relationship in Norfolk); the house-age guide is a tool a homeowner would actually use and keep (slide to your year, get a floor type and advice, hand off with a prefilled service); the tool's output is designed in the signature's language (DM Mono output, tide-line reading below); the signature moment (gauge rising through the story) and the tool are connected by the same measurement vocabulary.

Deductions: without screenshots I cannot confirm the tool's output is visually designed beyond the DOM structure. The markup shows proper aria-live, output element, and handoff button. Score 9 pending visual polish confirmation.

## Polish — 9.0

What earned it: SVG favicon + apple-touch-icon referenced; theme-color set; OG image with dimensions; JSON-LD with specific HomeAndConstructionBusiness type; print stylesheet hides nav/mobilebar/menu/tide-line and forces light background; lazy images with width/height; hero poster preloaded; forced colors handled; consistent 2px border-radius throughout; no shadows on non-floating elements; consistent icon stroke width (2px); no `transition: all` in CSS.

Deductions: none observable from DOM. Footer is designed with brand, nav, contact, legal, and credits. Score 9 pending visual confirmation of concentric nesting and stroke consistency.

## Arithmetic

14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0 = 126 + 108 + 90 + 90 + 64 + 72 + 63 + 63 + 108 + 72 + 36 = 892 / 100 = 8.92

## Must

None. All demo-rules are respected: sample tags on rating, licence, pricing, and reviews; no "our work" / "our team"; no before/after claims; no real address; no face presented as owner; form has honest thank-you state ("In your version this goes straight to your phone and inbox"); no banned words.

## Should

1. **Where:** dist/index.html line 1562, hero image alt text. **Problem:** Alt text reads "Close-up of century-old heart pine grain with amber patina, Norfolk VA" which is descriptive and good, but other images still use generic fallback text patterns. **Fix:** Ensure all alt texts are equally descriptive when real media loads. Current state is acceptable for placeholder mode.

2. **Where:** dist/index.html lines 2029, footer credits. **Problem:** Nine identical credit lines "Photo by unknown on Pexels" provide no attribution value and look unfinished. **Fix:** Either populate with real photographer names when media is curated, or remove the credits list entirely until real data exists.

## Elevate

1. **Category: photo (weakest at 8.0).** Move: When real media loads, apply the type-mask treatment from the hero to at least one other section (e.g., mask the word "CUPPING" in the water-damage section with the detail-cupping photo) so the signature extends into the photography itself and the photo category earns its 10 anchor ("at least one image is used in a way stock never is"). Note: the DOM already shows `<span class="type-mask-word" data-mask-img="detail-cupping">CUPPING</span>` at line 1642, so this move is partially implemented in markup — verify it renders correctly when media loads.

2. **Category: distinctiveness (tied weakest at 9.0 by weight).** Move: Thread the tide-line gauge into the house-age guide's output as a dynamic reading (e.g., "LIKELY FLOOR 1.2 ft" that updates with the slider) so the signature does double duty as both divider and tool output, making the cover-the-logo test pass on any section screenshot.