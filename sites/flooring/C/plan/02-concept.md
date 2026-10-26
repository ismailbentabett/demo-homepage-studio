# Concept — flooring-C (Heart & Tide Floor Co.)

## Three obvious concepts, rejected

1. **Nautical rope-and-compass theme.** Anchor icons, navy stripes, "ahoy" copy. Rejected: every coastal contractor does this; it is clip-art nautical, not Norfolk-specific. The brief's seed taken literally as decoration.
2. **Historic-house museum tour.** Sepia photos, cursive script, "est. 1912" badges. Rejected: reads as a heritage society site, not a working floor company. Competitors in Ghent already lean on this. No conversion path.
3. **Water-damage emergency page.** Red banners, "flooded?" headline, insurance logos. Rejected: the business is 90% planned work; emergency framing misrepresents the ticket mix and uses banned words. Template disaster-site look.

## The thesis

The page is a tide gauge: every section sits at a water level, and the signature is the horizontal rule that rises and falls to show where wood meets water in Norfolk's old houses.

## The signature system

**Tide Line Gauge.** A thin horizontal rule with a left-aligned height tag (e.g. "KING TIDE 3.8 ft", "CRAWLSPACE 1.2 ft", "FINISH +0.0 ft") that moves vertically between sections like a harbour gauge. The rule carries a small tick mark and the reading in mono type.

- **Hero:** the tide line sits at the bottom of the hero, tagged "HEART PINE +0.0 ft", anchoring the promise to the wood.
- **Story (water damage):** the line rises to "STORM SURGE 2.4 ft" as the crawlspace-to-floor cross-section reveals cupping and standing water.
- **Proof / reviews:** the line settles to "SAMPLE READING 4.9" with a tick, tying the rating to the gauge motif.
- **Footer:** the line drops to "LOW TIDE −1.0 ft" with the demo disclaimer and credits, closing the gauge cycle.

The system is `data-sw-signature`. It is never just a divider: each instance carries a measurement that teaches something about the floor-water relationship.

## Type

- **Display:** Oswald (condensed, 7 weights). Tall harbour-warehouse lettering for headlines; fits the type-mask hero and the gauge tags. Used ≤ 3 times in registry (currently 0).
- **Text:** Source Sans 3 (grotesk, variable wght 200–900). Humanist, readable at body sizes, pairs with Oswald's industrial tone without competing.
- **Accent:** DM Mono (mono, label role). For tide-gauge readings, sample tags, spec numbers. Quiet, technical, never body text.

Why the pair suits the thesis: Oswald's condensed verticality echoes the tide gauge's up-down motion; Source Sans 3's warmth keeps the page from reading as pure signage. Unique pair in the niche (flooring-A uses Crimson Pro + Karla; flooring-B uses Archivo + Karla).

## Palette

**Family:** Tide Navy + Heart Pine Amber + Sand Paper

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| paper | #E8DCC8 | ink #0F1C24 | 12.79 | body on paper, reversed headings |
| ink | #0F1C24 | paper #E8DCC8 | 12.79 | body on paper, headings on paper |
| deep | #0F1C24 | paper #E8DCC8 | 12.79 | dark band bg |
| mid | #1A3040 | paper #E8DCC8 | 10.06 | secondary dark band, card bg |
| accent | #3BB9A6 | deep #0F1C24 | 7.15 | accent words on dark, gauge tags, buttons on dark |
| accent | #3BB9A6 | mid #1A3040 | 5.63 | accent words on mid |
| ink | #0F1C24 | accent #3BB9A6 | 7.15 | button text on accent bg |
| signal | #6B8E9E | deep #0F1C24 | 4.94 | large text on dark, rules, focus ring |
| focus | #6B8E9E | deep #0F1C24 | 4.94 | focus ring on dark (≥ 3 pass) |
| focus | #0F1C24 | paper #E8DCC8 | 12.79 | focus ring on paper (≥ 3 pass) |
| white | #FFFFFF | accent #D48A30 | 4.56 | button text on accent bg |

Note: #D48A30 on paper (2.07) and #6B8E9E on paper (2.58) fail for text. These pairs are used only for non-text elements (rules, shapes, decorative fills) on light backgrounds. All body text on paper uses ink #0F1C24. All accent text appears only on deep or mid backgrounds.

## Hero family

**Family 3: Type mask.** The word "HEART PINE" in huge condensed Oswald is a mask filled with a close-up of century-old heart pine grain (key `hero-C1`). The promise "Norfolk floors for old houses and high water" and the phone sit under the mask on the deep ground. Breaks the cliché by making the masked word the material itself, not a generic brand name. Unique in the niche (A uses family 9, B uses family 7). Family 3 used ≤ 3 times in library.

## Motion score

- **Intro:** Grain inside the "HEART PINE" mask drifts 20px vertically (parallax), headline lines rise with 70ms stagger, 700ms total, skippable via `sw-motion` gate. Never blocks reading.
- **Scroll story 1 (tide rise):** Pinned house cross-section (floor → joists → crawlspace). Tide line rises on scroll via `--sw-p`, problems appear in order (crawlspace humidity → cupping → standing water) with fix and sample price. Verb: *rise*. Height: `calc(3 * 55svh + 100svh)`. Reduced motion: three stacked diagrams with static tide-line positions.
- **Scroll story 2 (board lace-in):** A single board replacement photo unclips as the tide line crosses it, revealing the laced-in patch. Verb: *unclip*. Reduced motion: static photo with caption.
- **Hover:** Hairline underline grows `scaleX(0→1)` from left, 200ms, `@media (hover:hover)` only. One language.

## Tools

1. **House-age floor guide** (`house-age-guide`). Input: year-built slider (1890–2020), neighborhood type. Output: likely floor (heart pine pre-1920, oak strip 1920s–60s, plywood/slab post) and what can be done. Hand-off: "Pull a corner and send us a photo" prefills form service = "Heart pine restoration" or "Hardwood refinishing".
2. **Flood-recovery checklist** (`checklist`). Input: tick boxes (water stopped, standing water removed, fans running, crawlspace checked, photos taken). Output: next steps, what not to do, water-damage sample range. Hand-off: "Book a damage check" prefills form service = "Water-damaged floor repair".
3. **ZIP checker** (`zip`). Input: 5-digit ZIP. Output: served/not, from `biz.zips`. Hand-off: "yes" offers form with ZIP prefilled.
4. **Multi-step quote form** (`form`). Steps: service → rooms/sqft → current floor/water → photos → timing → contact. Honest demo thank-you state.

## Voice

Three sentences in the site's voice:
- "We read moisture under the house before we lay wood, and tell you plainly if it needs work first."
- "Old heart pine sanded gently, gaps filled with reclaimed slivers, finished to keep the amber."
- "After the nor'easter we dried them out over a week, replaced eleven boards, and the patch is invisible."

Five words it never uses: guaranteed, emergency, same-day, premium, craftsmanship.