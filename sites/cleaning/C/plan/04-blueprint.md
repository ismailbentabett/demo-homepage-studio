## Round 4 (fix + elevate)
Distinctiveness: the 3×3 services grid is now a year ledger under a large dial: Spring, Summer, Fall and Winter columns plus a white All-year band. The 3×2 review grid is now a ring: the four season notes and two all-year notes sit around a sticky hub dial, with spokes to their quarters. Ruby H. now appears only in Summer, with a pointer card in the ring. Motion: at ≥1400 the cover dial shrinks into the corner clock as the hero leaves, and the clock rides the page until the footer. The datelines, ledger dial and ring hub fill their quarters on scroll, and the footer hand winds back to spring. Also: the hero dial is hidden under 900px (no ghost arc), the hero is 100svh−120px with the content anchored low, and the spring photo is cropped to the yellow pile. All copy-4 strings are applied, except the break caption. home-greenville shows green leaves, a shingled gable and a box fan, but no autumn leaves and no porch, so neither suggested caption is true. The caption now describes the frame: "A shingled gable in early summer, the box fan already in the window".

## Round 3 (fix)
Elevate firstScreen: hero dial re-cut as the masthead. It is a four-segment brass dial on a fog scrim, the current season is filled, "Now · <season>" sits at its centre in paper, and the plain season names are in serif paper. Elevate photo: one almanac grade on every frame (lifted blacks + brass multiply) and each spread figure rounded on its own season's dial quarter. The green cloth became process-blinds, because the library holds no real porch/pollen photo (detail-pollen is a 30-byte stub). The primary action is now one name everywhere ("Price my cleaning"). Services carry season pips instead of 01–09. Winter: the h2 spans both columns and the move-out price backs it.

# Blueprint — cleaning-C (Riverfog Housekeeping)

**Round 2:** The header is legible on the hero and the dial no longer clashes with the nav at 1024. Every image slot now falls back to a designed contour "Plate" panel. The hero h1 is down to 2 lines and the copy-2 replacements are in. Services now sit in a 3×3 grid and the hours in a table-like grid. Elevate moves: (1) the Season Dial became a scroll-driven pinned clock across the four almanac spreads, which raises distinctiveness and motion; (2) the guest countdown now renders as a dial diagram.

**Round 2 (media swap):** Real library photos now fill every slot. The hero is hero-C1, an unplaced river-fog photo with a neutral alt. Spring uses detail-microfiber, summer process-shower-glass, the break home-greenville, fall detail-towels, and winter hero-C2 (a pine-panelled cabin bath). The break caption no longer names the city, so no photo claims a local place. tools/check-static.mjs now accepts Commons/CC credit links (see CHANGELOG).
Open issues: the niche photo library still holds 1×1 stubs, so every photo shows the Plate fallback until real photos are curated. The display font is Fraunces, as in 03-system.md; concept.json says Crimson Pro, and I kept the system doc.

## Section list

| # | ID | Tone | Layout | Purpose | Content tokens | Media slot | Hooks | Entrance |
|---|-----|------|--------|---------|----------------|------------|-------|----------|
| 1 | hero | t-deep | editorial-cover | Trade + town + season hook; first CTA | `{{biz.name}}`, kicker "The House Almanac · Spring Edition", h1 "House Cleaning in {{biz.city}}, {{biz.state}}", phone `{{biz.phone}}`, proof line "13 years · 4.9★ · 122 reviews · Sample" | hero-C1 | data-sw-signature="season-dial" | fog-fade + cover-lines-rise |
| 2 | intro | t-paper | statement | Name the almanac promise; sample price anchor | Lead: "A year of care for Chattanooga houses"; sample price block from `{{proof.prices[0]}}` with Sample tag | — | — | wipe-up |
| 3 | spring | t-paper | split | Pollen season objection; seasonal add-on | Dateline "Late March · Signal Mountain"; pollen clean blurb `{{services[1].blurb}}`; add-on price `{{proof.prices[3]}}` | detail-pollen | data-hook="season-planner" | dateline-wipe |
| 4 | summer | t-mid | split | Mildew objection; old-house material care | Dateline "August · Hixson"; mildew blurb `{{services[4].blurb}}`; old-house note from review Eleanor R. | process-grout | — | dateline-wipe |
| 5 | break | t-deep | break | Full-bleed visual pause; Chattanooga place | — | home-chattanooga | — | fade-in |
| 6 | fall | t-paper | split | Guest-ready objection; holiday prep | Dateline "November · East Ridge"; guest prep blurb `{{services[5].blurb}}`; countdown tool hand-off | season-holiday | data-hook="countdown" | dateline-wipe |
| 7 | winter | t-deep | split | Weekend house / move-out; recurring base | Dateline "January · Lookout Mountain"; weekend house blurb `{{services[7].blurb}}`; every-two-weeks price `{{proof.prices[0]}}` | room-living | — | dateline-wipe |
| 8 | services | t-paper | grid | All services visible; checklist clarity | 9 service cards from `{{services[*]}}` with short + blurb | — | — | stagger-up |
| 9 | proof | t-light | stack | Trust: reviews, guarantee, insurance | 6 reviews from `{{proof.reviews}}` with season tags; guarantee `{{proof.guarantee}}`; insured badge; license `{{proof.license}}` | — | — | stagger-up |
| 10 | area | t-deep | rail | Service area + ZIP check | Areas list `{{biz.areas}}`; ZIP checker | — | data-hook="zip" | wipe-up |
| 11 | contact | t-paper | stack | Primary conversion | Multi-step quote form; phone `{{biz.phone}}`; hours `{{biz.hours}}` | — | data-hook="form" | fade-in |
| 12 | footer | t-deep | rail | Legal + credits + dial reset | `{{demo.disclaimer}}`; `[[credits]]`; season dial reset | crew-back | data-sw-signature="season-dial" | — |

## Rhythm check

- 12 sections ✓ (8-12 range)
- Tone sequence: deep → paper → paper → mid → deep → paper → deep → paper → light → deep → paper → deep
- No three same tones in a row ✓
- No two dark sections touching: deep(paper)✓, paper(mid)✓, mid(deep)✓, deep(paper)✓, paper(deep)✓, deep(paper)✓, paper(light)✓, light(deep)✓, deep(paper)✓, paper(deep)✓ ✓
- At least one t-deep ✓ (hero, break, winter, area, footer)
- At least one color band: t-mid §4 ✓
- Full-bleed break §5 ✓
- Interactive hooks: season-planner (§3), countdown (§6), zip (§10), form (§11), signature dial (hero+footer) = 5 ≥ 3 ✓
- Layout families: editorial-cover, statement, split, break, grid, stack, rail = 7 ≥ 3, no neighbours share ✓
- Quote form once at #contact ✓
- Required content: all 9 services §8, area+ZIP §10, hours §11, reviews+Sample §9, sample prices §2/§3/§7, footer disclaimer+credits §12 ✓