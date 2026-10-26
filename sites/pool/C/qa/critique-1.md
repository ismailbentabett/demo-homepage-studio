COPY: needs copy-chief

# pool-C critique, round 1 (fast mode)

**Five-second test.** 1440-first.jpg: "Something called *The Desert Pool Almanac* in Scottsdale, $150–$210 a month, Get my number. Why them? No idea, and the right half of the screen says *Placeholder for hero-C1*." 390-first.jpg: same answer; the sticky bar gives me the phone. I know the trade and the city from the eyebrow and price line, not from the h1. The page reads as unfinished: there is no photograph anywhere on it.

## firstScreen: 6
- Earned: one primary (teal fill) + quieter outline secondary; proof line with hours, towns, Sample rating; Sample pricing chip; next band peeks ~64px (1440-first.jpg).
- 1440-first.jpg / 390-first.jpg: hero media is a text stub "Placeholder for hero-C1" filling the right half (390: the bottom half). The hero family (editorial cover) is not executed at all (−1.5, mustFix).
- 1440-first.jpg: h1 "The Desert Pool Almanac" is a masthead, not trade + city + outcome; the city lives only in a mono eyebrow (−0.5).
- 1440-first.jpg: no phone number in header or hero at desktop; header has "Get a number" plus a hamburger next to a full nav (−0.5).

## distinctiveness: 6
- Concept promises month spreads, folios, a J–D thumb-index, month pills on reviews and an "End of issue" footer. On screen (1440-rm-full.jpg) the signature is only the right-edge rail in the hero, labelled NOW / JUN / SRV / FIX / PRF: not months, not an almanac, cryptic. No folio numbers, no month pills on reviews (1440-scroll-75.jpg), footer has no strip (1440-rm-full.jpg). Signature only in the hero (−2.0).
- Sibling B (pool/B 1440-first.jpg) is also teal on warm off-white with Outfit; this site is close in palette family and shares a face.
- 1440-scroll-25.jpg: six beige cards with "Price it" in a 3×2 grid is the template services block.

## type: 7.5
- Crimson Pro display + Outfit text + DM Mono accent is a sound pair; h1 has scale (1440-first.jpg).
- 1440-first.jpg: 3+ tiny tracked mono caps/meta strings in one view (eyebrow, "Sample Issue · Scottsdale, AZ", proof line, chips), with middle-dot meta strings (−0.5).
- 1440-first.jpg: rail labels (NOW/JUN…) are ~9px, under 13px.
- No scale-contrast moment after the hero: every h2 is the same modest size (1440-scroll-50.jpg "Leak or just the sun?").

## layout: 7.5
- Tones alternate (sand / mid / white / deep / sand / teal / sand) and the rhythm is readable in 1440-rm-full.jpg.
- 1440-rm-full.jpg: "text left, tool right" repeats three times (monsoon story, scale check, leak) (−0.5).
- 1440-first.jpg and 1440-rm-full.jpg scale-check band: half the width is empty or a placeholder stub; columns at 1440 float in empty width.
- 1440-rm-full.jpg: resurface band and contact form both centred stacks; no grid-breaking moment, no full-bleed image break (the monsoon-sky "break" is a dark band with placeholder text).

## photo: 3
- 1440-rm-full.jpg / 390-rm-full.jpg: zero photographs. Four text placeholders: hero-C1, calcium-scale, waterline-tile, monsoon-sky. A caption "Pebble finish under desert light, Paradise Valley." sits under an empty dark band (1440-scroll-50.jpg). mustFix.

## copy: 8
- Specific and local: haboob, bucket test, "If it is evaporation, there is no bill", cure temperatures (1440-scroll-50.jpg). Sample labels on every review and price (1440-scroll-75.jpg).
- Primary action has three names: "Get a number" (header, mobile bar), "Get my number" (hero), "Get your number" (form h2) (390-first.jpg, 1440-rm-full.jpg) (−0.5).
- 1440-rm-full.jpg contact intro: "No spam, no obligation." is form-filler boilerplate (−0.5).
- h1 is a title, not a promise; rail labels SRV/FIX/PRF are jargon (1440-first.jpg). Credit back: tool copy is genuinely useful (+0.5 from the 8 anchor, net 8).

## mobile: 8
- 390-first.jpg: h1 2 lines, both actions above the fold, sticky bar with Call (480) 555‑0139 + Get a number.
- 390-first.jpg: the "re-cut" hero is the desktop stack with a placeholder below; no phone-specific decision. The promised horizontal tab pill row is absent in 390-rm-full.jpg.
- 390-full.jpg: sticky header and bar render mid-page in the full capture (capture artifact, not scored).

## a11y: 8
- 1440-rm-full.jpg / 390-rm-full.jpg show every section; one h1, h2→h3 order clean in dist; static and render checks clean.
- 1440-first.jpg: rail labels ~9px grey on sand look under 4.5:1 (should).
- Placeholder strings exposed as content will be read aloud (part of the photo mustFix).

## motion: 7.5
- Hooks present: rail tab activation, bucket-test slider readout (1440-scroll-50.jpg), scale checklist, month tabs, ZIP, multi-step form.
- 1440-full.jpg: from the scale check down to the footer the motion-on full capture is blank bands, i.e. every section is gated behind the same opacity reveal (−0.5 same reveal language). Folio count-up promised in the concept is not on the page.
- No motion explains anything: the rail lights a cryptic label; nothing turns the year.

## wow: 7.5
- Bucket-test slider with a big "½ in./day" readout and a plain verdict (1440-scroll-50.jpg) is a tool a homeowner would use. The month planner is useful too.
- Outputs are plain text lines ("Normal summer evaporation. No leak likely.", "Tile bead blasting $500–$1,200") and not in an almanac language (−1.0). Signature in motion is near-invisible.

## polish: 7.5
- apple-touch icon, OG 1200×630, specific JSON-LD, print and forced-colors styles in dist.
- 1440-first.jpg: hamburger shown at desktop next to a complete nav and CTA (−0.5).
- Placeholder strings shipped on a "finished" page (counted in photo).

## Arithmetic
14×6 + 12×6 + 10×7.5 + 10×7.5 + 8×3 + 8×8 + 7×8 + 7×8 + 12×7.5 + 8×7.5 + 4×7.5
= 84 + 72 + 75 + 75 + 24 + 64 + 56 + 56 + 90 + 60 + 30 = 686 / 100 = **6.86**

Verdict expected: **FIX** (photo below floor 6, firstScreen and distinctiveness below floor 7, mustFix not empty).

## Must
1. **Photo / all media slots** (1440-rm-full.jpg, 390-rm-full.jpg): four "Placeholder for …" stubs (hero-C1, calcium-scale, waterline-tile, monsoon-sky). Fix: place the approved niche frames via `[[img]]`; if the pool library is not approved, the site cannot be judged: run media curation first. Never ship placeholder text.
2. **#hero** (1440-first.jpg, 390-first.jpg): the editorial-cover hero has no cover image. Fix: the cover photo fills the right column at 1440 (full-height, object-position on the pool) and is re-cut tall above or behind the masthead at 390.
3. **Signature** (1440-first.jpg, 1440-rm-full.jpg): the thumb-index carries NOW/JUN/SRV/FIX/PRF and appears only in the hero. Fix: make it the promised 12-month index (J F M A M J J A S O N D) and thread it into ≥ 4 sections (story spreads with folios, reviews with month pills, footer "End of issue" strip).

## Should
- **header, 1440-first.jpg**: no phone at desktop and a hamburger beside a full nav. Fix: replace the hamburger ≥ 900px with `tel:` link "(480) 555‑0139" in tabular figures; keep "Get a number" as the button.
- **Primary action name** (390-first.jpg, 1440-rm-full.jpg): "Get a number" / "Get my number" / "Get your number". Fix: one name everywhere, e.g. "Get my number", and the form h2 "Get your monthly number".
- **#contact intro** (1440-rm-full.jpg): cut "No spam, no obligation." Replace with a doubt-killer from facts: "Ramon’s office answers 6 am–4 pm, Monday to Thursday."
- **Rail labels** (1440-first.jpg): ~9px grey. Fix: ≥ 13px, ink on sand (13.9:1), active state teal with white.
- **Hero h1** (1440-first.jpg): masthead only. Fix: keep the masthead as a small Crimson Pro title and make the h1 an outcome with trade + city, e.g. "Scottsdale pool care, month by month".
- **#services** (1440-scroll-25.jpg): 3×2 beige card grid is a template. Fix: set services as an almanac table of contents (service, best months, Sample price) with month ticks aligned to the index.
- **Reveals** (1440-full.jpg): every section waits for the same opacity reveal. Fix: let quiet sections (services, area) render static; reserve motion for the index and tool outputs.
- **Tool outputs** (1440-scroll-50.jpg, 1440-rm-full.jpg): plain lines. Fix: render each result as an almanac entry card (month, verdict, Sample price, folio) printable via the existing print stylesheet.

## Elevate
- **photo** (weakest): once real frames are in, art-direct them as almanac plates: one season per frame (monsoon sky, scale band on tile, drain in winter light, finished pebble), each with a folio and month caption in DM Mono, same warm grade, so the photo sequence *is* the year.
- **firstScreen** (tied with distinctiveness at 6, wins on weight 14): make the cover a real almanac cover (full-height plate, lit current month, cover lines that link to the spreads). Distinctiveness follows from the same move: make the year the structure. The right-edge 12-month index lights the month each spread covers, each section opens with a folio "— 07 — July" and the footer closes the issue with all months dimmed but the current one; the cover's three cover lines jump to those spreads. A screenshot of any band should name the almanac.
