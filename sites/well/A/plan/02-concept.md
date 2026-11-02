# Concept: well-A (Static Level Water Wells)

## Rejected alternatives
1. **"Pure Water Solutions"** — Blue gradient, water drop logo, "clean water for your family." This is every softener franchise. Rejected: the brief §4 explicitly bans it, and it ignores the drilling reality of the Ogallala.
2. **"Pump Gallery"** — Wall of submersible pumps on tailgates with specs. This is what every Lubbock well driller already has. Rejected: it speaks to other drillers, not homeowners who don't know what a pump looks like.
3. **"Drill Rig Hero Video"** — Full-bleed rig footage with overlay text. This is hero family #1, the default everyone uses. Rejected: it doesn't differentiate from mining/oil imagery and wastes the chance to show the *ground* rather than the machine.

## Thesis
The site is a borehole: scrolling takes you down through the South Plains ground, and each stratum (topsoil, caliche, Ogallala sand, water, red bed) is one step of how Static Level sits, drills, cases, pumps, and proves a well. The homeowner experiences the work as a drill log—the paper every customer gets—rather than as a sales pitch.

## Signature system: the depth ruler
A left-edge vertical ruler counts feet from 0 at the hero to ~320 at the contact block. Behind each section, drawn strata bands represent the geological layer at that depth. The static water line is a single blue rule that the site crosses once (at the #water-table section). The ruler appears in:
1. **Hero:** 0 ft mark, ruler draws down as intro.
2. **Process:** Strata bands slide past while counter ticks.
3. **Services:** Each service card has a depth annotation (e.g., "pump set @ 280 ft").
4. **Reviews:** Review cards sit on the caliche band with a depth marker.
5. **Contact:** Bottom of the borehole, ~320 ft, ruler ends.

This is not a decorative sidebar; it is the structural spine that makes every section part of one continuous cross-section.

## Type
- **Display:** Barlow Condensed (tall industrial condensed for depth numbers, headlines, and labels). Distinctive for trade/industrial sites; not used in well niche siblings.
- **Text:** DM Sans (plain grotesk body, high legibility at small sizes, pairs cleanly with Barlow Condensed).
- **Accent:** JetBrains Mono (monospaced for depth readings, gauge values, prices, and technical labels).

Pair rationale: Barlow Condensed carries the verticality of the borehole; DM Sans stays out of the way for body copy; JetBrains Mono marks every number as a measured reading, not marketing.

## Palette: night-earth + caliche + ogallala-blue
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep | #1A1714 | caliche #F0EBE3 | 15.2 | Body on dark bands, reversed |
| caliche | #F0EBE3 | deep #1A1714 | 15.2 | Body on light bands, paper |
| ogallala | #3B7A9E | deep #1A1714 | 5.1 | Water line, accent words on dark |
| rust | #A0522D | caliche #F0EBE3 | 5.3 | Accent words on light, CTAs |
| mid | #5C534A | caliche #F0EBE3 | 4.6 | Muted text on light |
| ink | #2C2620 | caliche #F0EBE3 | 11.8 | Headings on light |

Palette family: "night-earth + caliche". Unique in library (no sibling uses this combination).

## Hero family: 12 (sticky photo, scrolling text)
A tall photo of a drill mast against West Texas dusk stays pinned while three short lines scroll past: "Site it.", "Drill it.", "Prove it with a log." First statement visible without scrolling. Photo is warm low light, flat horizon, no faces or logos.

## Motion
- **Intro:** Depth ruler draws down from 0 to 20 ft as hero settles (≤ 1.2s, skippable).
- **Scroll story 1:** Strata band behind #process slides vertically while depth counter ticks; water line fills blue when crossed. Pinned ≥ 640px only; stacked cards below.
- **Scroll story 2:** Drill log cross-section wipe in #proof: a line drawing of the borehole reveals the photo beneath as you scroll, driven by `--sw-p`.
- **Entrance patterns:** Text rises (opacity + translateY), images unclip (clip-path inset). Quiet sections (#area, #footer) do not animate.
- **Hover:** Hairline under links/buttons grows `scaleX(0→1)` from left, 200ms, consistent site-wide.
- **Reduced motion:** All stories become static complete layouts; ruler is fully drawn; content visible without animation.

## Tools
1. **Depth and drill log explainer** (`data-drill-log`): Input = town selector (Wolfforth / Shallowater / Idalou / Slaton / Ransom Canyon / New Deal / Abernathy / Lubbock). Output = drawn cross-section of typical layers and depth range for that town, labelled "typical, not a promise." Handoff = "Price a new well" button prefills form with town.
2. **No-water triage** (`data-triage`): Inputs = tap state (nothing / sputter / weak), gauge reading, breaker state, recent storm/outage. Output = likely cause (power / switch / tank / pump / water level) and safe checks before calling. Handoff = "Call with this reading" prefills form with answers.
3. **ZIP checker** (`data-zip`): Standard kit module against biz.zips.
4. **Multi-step quote form** (`form[data-lead]`): Service → job details → when → contact. Prefilled by tools.

## Voice
- "We measure before we move the rig."
- "Your drill log is yours in writing, every foot."
- "If deepening saves you a new hole, we'll tell you."

Never uses: pure, clean, guaranteed, best, award, free estimate, 24/7, eco-friendly.