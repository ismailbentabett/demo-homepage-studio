# Concept — concrete-C (Red Grit Concrete)

## Three obvious concepts, rejected

1. **"Built to last in Colorado."** Generic trust slogan over a finished driveway photo. Rejected: every competitor says it; no local geology, no signature, no tool.
2. **"Decorative concrete gallery."** Pinterest-style stamped patio slider with wet-look sealer shine. Rejected: brief §4 cliché #3/#4; ignores the freeze-thaw story that actually sells here.
3. **"Free estimate for your slab."** Single CTA, no ranges, no thickness talk. Rejected: brief §4 cliché #5; homeowner leaves without a number.

## The thesis

The page is a topographic survey sheet: every section sits at an elevation band marked by contour lines, and the site climbs from valley floor to ridge as you scroll, proving this company reads the ground before it pours.

## The signature system — Contour Line + Elevation Marker

A system, not one effect. Soft terracotta contour lines run behind every section as a repeating SVG pattern; each section header carries an elevation marker (a trail-sign pill: "6,035 FT · YOUR DRIVEWAY IN JANUARY") in slab serif; a corner elevation counter counts up on scroll via `--sw-p`; every photo caption ends with a small benchmark triangle (▲); reviews are pinned by town name on a mini-map in the proof section. Appears in: hero (map + pins), winter story (frost-line contour), services (elevation-tagged cards), proof (town pins), footer (ridge marker).

## Type

Display: **Young Serif** (heavy rounded old-style slab-serif, trail-sign authority for headlines). Text: **Figtree** (friendly geometric sans, readable at body sizes). Accent: **DM Mono** (low-contrast mono for elevation numbers, ZIP codes, spec values). Why: Young Serif's weight reads like carved park signage against the contour field; Figtree stays neutral so the geology story leads; DM Mono marks measurements without competing. Neither display nor text face is used by concrete-A (Chivo/Karla) or concrete-B (Oswald/Outfit); Young Serif appears 0 times in registry.

## Palette — Pikes Peak Granite + Pine + Snow

| Role | Hex | Name |
|---|---|---|
| paper | #F5F3F0 | Snow |
| ink | #1A2622 | Pine Deep |
| accent | #8C3B2E | Granite Red |
| deep | #1A2622 | Pine Deep |
| signal | #E07A5F | Sandstone (on deep only) |
| mid | #D6CFC7 | Fog |

Contrast table (verified):
- ink #1A2622 on paper #F5F3F0: 14.10:1 (AA/AAA pass, body + large)
- accent #8C3B2E on paper #F5F3F0: 6.82:1 (AA pass body, AAA pass large)
- paper #F5F3F0 on deep #1A2622: 14.10:1 (AA/AAA pass)
- signal #E07A5F on deep #1A2622: 5.29:1 (AA pass body, AAA pass large) — used ONLY on deep backgrounds
- signal #E07A5F on paper #F5F3F0: 2.66:1 FAIL — never used for text on paper; shapes/rules only
- accent #8C3B2E on deep #1A2622: 2.06:1 FAIL — never used for text on deep; shapes only
- focus ring #E07A5F on deep: 5.29:1 ≥ 3 pass; on paper use #8C3B2E (6.82:1 ≥ 3 pass)

Palette family name unique in registry (no "Pikes Peak Granite" or "Granite + Pine" exists).

## Hero family — 15 (Map / area-led)

Unique in niche (A=14, B=3). ≤ 3 uses in library (general-C also uses 15; this is #2). Stylised topographic map of Pikes Peak region with contour lines drawing in on intro, town pins dropping at real elevations, ZIP checker embedded as a search field on the map, headline left-aligned on paper. Breaks the cliché by making the map the *tool*, not decoration: the ZIP answer lives inside the map, not beside it.

## Motion score

Intro (≤ 1.2 s, skippable): contour lines draw via stroke-dashoffset staggered 60 ms per line, then town pins drop (translateY -12→0, 300 ms), headline fades up. Scroll stories: (1) "One January night" freeze-thaw diagram advances in 4 steps pinned to a frosted-slab photo; (2) base-layer cross-section builds subgrade→base→steel→slab as elevation counter climbs. Hover: hairline rule grows from left via scaleX(0→1), 200 ms, consistent everywhere. Reduced motion: all stories render as complete static diagrams; elevation counter shows final value; contours are pre-drawn.

## Tools

1. **Winter Damage Reader** (`checklist` module). Inputs: 6 photo choices (hairline web, straight joint crack, sunken slab, flaky surface, popouts, lifted edge). Output: diagnosis card with cause, repair-vs-replace verdict, matching service. Hand-off: "Have us look at it" scrolls to #contact with `data-service` prefilled.
2. **Lift or Replace Quiz** (`checklist` module). Inputs: 5 yes/no questions (sink amount, cracked plates?, age, drainage toward house?, trees nearby). Output: lift candidate vs tear-out verdict with reason. Hand-off: same as above.
3. **ZIP Checker** (`zip` module). Embedded in hero map. Input: 5-digit ZIP. Output: aria-live "Yes, we pour in 80919" or "Not in our area"; yes offers form with ZIP prefilled.
4. **Multi-step Quote Form** (`form` module). 4 steps; receives prefill from tools via data-service and data-zip.

## Voice

Three sample sentences:
- "Your driveway sits at 6,035 feet on clay that swells when it drinks and shrinks when it dries; the mix and the base have to account for both."
- "Magnesium chloride from the roads eats new concrete the first winter; we seal it in fall so the salt stays out."
- "We cut joints the same day we pour, because waiting lets the slab pick its own crack line."

Five words never used: premium, guaranteed, best, affordable, expert.