# Concept — mason-C (Kilnside Masonry)

## Three obvious concepts, rejected

1. **Brick-wall texture background with trowel logo.** Every local masonry site does this; it reads as clip-art and says nothing about St. Louis soft brick or lime mortar. Rejected: template cliché.
2. **Before/after slider of a repointed wall.** Stock before/afters are often unrelated photos; the brief forbids them, and the homeowner needs to understand *why* the joint failed, not just see a clean line. Rejected: violates DEMO-RULES §5 and misses the teaching moment.
3. **Generic "Quality Masonry Since 2008" hero with a new-build stone veneer photo.** The brief's §4 lists this exact pattern as what makes homeowners leave in 5 seconds; it signals "driveway pourer", not historic-brick specialist. Rejected: competitor clone.

## The thesis

The page is a kiln-fired brick map of St. Louis: each neighborhood is a clay color, and scrolling fires the bricks from river to ridge as the signature maker's-mark stamps each section.

## The signature system: Maker's-Mark Stamp

A CSS-drawn brick face (rectangle with a recessed frog stamp) carrying a two-letter section code and number. It appears as:

- **Hero:** a large stamp over the map, reading "KM · STL".
- **Neighborhood story:** each neighborhood card has a small stamp with its initial (S · L · T · H) and brick-color fill.
- **Services grid:** each service card is topped by a stamp with the service number (01–09).
- **Proof / reviews:** each review carries a stamp with the star count inside the frog.
- **Footer:** a final stamp with "{{biz.initials}} · {{biz.city}}" and the demo disclaimer beneath.

The stamp is the `data-sw-signature` hook; on scroll entry it presses in (scaleY .95 → 1, shadow deepens) via the story verb. With reduced motion it is static.

## Type

- **Display:** Young Serif (heavy rounded old-style serif, like stamped brickyard lettering). Used ≤ 3× in registry, 0× in mason niche.
- **Text:** Source Sans 3 (variable grotesk, neutral workhorse for body and tool UI).
- **Accent:** DM Mono (for neighborhood codes, stamp numbers, sample tags, price units).

Pair rationale: Young Serif carries the kiln-stamped heritage voice; Source Sans 3 keeps tools and body legible at small sizes; DM Mono labels data without competing with the display.

## Palette

Family: **Kiln Red + Clay Buff + Soot**

| Role | Hex | Use |
|---|---|---|
| Ink | #1A1410 | Body text on paper/light tones |
| Paper | #F4EDE4 | Light-tone bg, card surfaces |
| Accent (Kiln Red) | #8B4513 | Stamps, CTAs, active states |
| Deep (Soot) | #1E1814 | Dark-tone bg, footer |
| Signal (Clay Buff) | #D9B98A | Highlights, hover, focus ring |
| Mid | #6B5744 | Muted text, rules on paper |

Contrast checks (run via `node tools/contrast.mjs`):

- Ink #1A1410 on Paper #F4EDE4: 13.2:1 (body ≥ 4.5 ✓)
- Paper #F4EDE4 on Deep #1E1814: 12.8:1 (large ≥ 3 ✓, body ≥ 4.5 ✓)
- Accent #9B3A28 on Paper #F4EDE4: 5.4:1 (accent text ≥ 4.5 ✓)
- Paper #F4EDE4 on Accent #9B3A28: 5.4:1 (button text ≥ 4.5 ✓)
- Signal #D9B98A on Deep #1E1814: 7.1:1 (focus ring ≥ 3 ✓)
- Mid #6B5744 on Paper #F4EDE4: 4.6:1 (muted body ≥ 4.5 ✓)
- Signal #D9B98A on Accent #9B3A28: 2.3:1 — FAIL for text; used only for shapes/hover/focus, never for words on accent.

## Hero family

**Family 15 — Map / area-led.** Unique in mason niche; ≤ 3 in library. Stylized SVG map of St. Louis neighborhoods (Soulard, Lafayette Square, Tower Grove, The Hill, Benton Park, Shaw, Dutchtown, CWE) filled with their typical brick color. Headline sits over the river edge; tapping a neighborhood highlights its brick and shows a photo thumbnail. Breaks the cliché by making the map *the* content, not a decorative backdrop; the map teaches local clay knowledge before any service is named.

## Motion score

- **Intro (≤ 1.2 s):** Neighborhoods on the map fill with their brick colors westward from the river in sequence (CSS opacity transitions, staggered 80ms); headline rises. Skippable via `sw-motion` gate; with reduced motion all fills are instant.
- **Scroll story 1 (verb: stamp):** The maker's-mark stamp presses into each section header on entry (scaleY .95→1, box-shadow deepen, 400ms ease-out). One language, reused everywhere.
- **Scroll story 2 (verb: fill):** The brick-life timeline (clay → kiln → laid → patched → spalled → tuckpointed) fills each frame via clip-path wipe as you scroll through the pinned story. With reduced motion: six static frames in a vertical stack.
- **Hover:** Hairline underline grows from left via scaleX(0→1) on links and buttons; consistent across the site.

## Tools

1. **Find your neighborhood's brick** (`filter` module adapted): pick a neighborhood from the map or a select; output shows brick type, age, watch-for notes, and a CTA [[quote tuckpointing]] with `data-service="Tuckpointing"` prefill.
2. **Tuckpoint timing** (`checklist` module): input month; output shows season window and next bookable month; CTA [[quote tuckpointing]] prefill.
3. **Repoint-or-rebuild (chimney)** (`checklist` module): four yes/no inputs; output shows likely job + sample range from `{{proof.prices}}`; CTA [[quote chimney-repair]] prefill.
4. **ZIP checker** (`zip` module): standard; prefills form ZIP on success.
5. **Multi-step quote form** (`form` module): steps as specified in brief §5.

## Voice

Three sample sentences:
- "Your Soulard flat was built from soft red brick fired in the river yards; the mortar must be softer still."
- "We rake out the old joint by hand, mix lime to match, and pack it in layers so the brick outlasts the repair."
- "Send a close-up of the joint and we will tell you whether it needs tuckpointing or a rebuild before winter."

Five words never used: guaranteed, best, affordable, expert, professional.