COPY: ok

## Five-second test (DOM-derived)

At 1440: h1 reads "Old-House Carpentry in Portland, ME" (6 words, trade + city + outcome implied). Primary CTA "Get my number" and secondary "See the work" are both above the fold. Phone is visible in header and mobile bar. Proof line shows "Sample · 4.9 ★ · 84 reviews · Portland & 7 towns". Next section peeks via filmstrip overflow. At 390: h1 wraps to ~3 lines with clamp(2.6rem, min(9vw, 9.5svh)+0.1rem, 5rem); both CTAs remain above fold due to flex-wrap. The signature cut-rule spans the hero top with "CUT 00 · SCARF & SASH · PORTLAND ME · WHITE OAK". Clear what it is, where, and what to do.

## First screen — 9.0

Earned: trade+city+outcome in ≤8 words, one primary + one quieter secondary, phone visible in header, proof line with Sample tag, next band peeks via filmstrip, signature visible in first screen. Deductions: none from DOM; without screenshots cannot verify intro timing or exact fold position at 390, but CSS clamp and flex layout suggest compliance. No deduction applied for unverified visual polish per placeholder-mode instructions.

## Distinctiveness — 9.0

Earned: Cut List + Kerf Rule signature appears in hero (`.cut-rule` with `data-sw-signature="cut-list"`), story-rot section, proof-trim cards, and footer (`cut-rule--footer`). Four sections confirmed in DOM. Filmstrip hero family (9) is unique in carpenter niche per concept.json. Palette (Harbor Teal + Clapboard Cream + Oxide Red + Brass) and type pair (Young Serif / Source Serif 4 / DM Mono) differ from siblings. Layout families include filmstrip rail, pinned SVG story, tool-split, and card grid. Deductions: none. Signature does real work as divider and information organizer, not decoration.

## Typography — 9.0

Earned: Three-family system (display Young Serif, text Source Serif 4 variable, accent DM Mono) used with purpose. Fluid scale via clamp(). Body ≥16px (--fs-0 clamps to 1rem min). Tabular numerals on `[data-count]` and `.sw-count-num`. Lead paragraph set apart with `.lead` class and weight 450. DM Mono used only for cut labels, kicker, proof-line, buttons — never body text. Display tracking -0.02em on h1 and brand. Deductions: none observable from DOM. Cannot verify orphans or exact measure without render, but CSS `text-wrap: balance` on h1 and `max-width: 60ch` on lead mitigate risk.

## Layout and rhythm — 8.5

Earned: 10 distinct sections, each with one job. Alternating tones (paper → deep → paper → mid → paper → deep → paper → accent → paper → deep). Full-bleed filmstrip breaks container. Asymmetric tool-split in area section. Dense proof section contrasts with quiet guarantee line. Gap between sections (--s-8/9) exceeds gap within. Deductions: -0.5 because two dark bands (story-rot t-deep at ~line 700 and contact t-deep at line 921) are separated by sufficient content, but the proof section's t-mid followed by area t-paper then contact t-deep creates a deep→mid→paper→deep rhythm that is varied; however, without screenshots cannot confirm no blank gaps over half-screen. Conservative -0.5 for unverified rhythm density. Actually, reviewing DOM: story-rot (t-deep) → services (t-paper) → process (t-deep) → proof (t-mid) → area (t-paper) → contact (t-deep). No two dark bands touch. Score stays 9.0. Revised: **9.0**.

Wait — re-evaluating. Sections: hero (t-paper), story-rot (t-deep), services (t-paper), process (t-deep), proof (t-mid), area (t-paper), contact (t-deep). That is 7 tone zones. No two same tones adjacent except potentially if proof t-mid reads as light. The pattern is paper/deep/paper/deep/mid/paper/deep — well alternated. ≥3 layout families: filmstrip, pinned-story, card-grid, tool-split, form-grid. One full-bleed break (filmstrip). Asymmetric section (tool-split). Dense section (proof with reviews + estimator). Quiet section (guarantee single line). This meets the 9 anchor. Score: **9.0**.

## Photo and video — 7.0

All media are placeholders (`placeholder-hero-A1.webp`, `placeholder-season-autumn-steps.webp`, etc.). Alt text is present and descriptive. Consistent aspect ratios via CSS (`aspect-ratio: 3/2` on filmstrip frames). Width/height attributes present on images for CLS. Lazy loading and decoding=async applied. However, placeholders cannot achieve the "one grade across every photo" or "art-directed crops" anchors for 8+. Per instructions, photo score is expected to be lower in placeholder mode. Score 7.0 reflects competent markup without visual execution. Floor is 6; pass mark is 8.5 in fast mode — this will trigger FIX unless elevated.

## Copy — 9.0

Earned: Voice matches concept's three sentences (splice/prime language, match-profile language, guarantee language). Specific nouns: "sill", "dutchman", "kerf", "scarf joint", "casing", "baluster". No banned words detected. Buttons named for action ("Get my number", "Price it", "Check"). Sample labels on reviews, prices, guarantee, license. Microcopy under form button ("We'll call you back to set up a visit"). Consistent primary action name "Get my number" in hero and contact; "Price it" in mobile bar and estimator is a secondary action tied to the tool, acceptable. Deductions: none. Reads like a carpenter wrote it.

## Mobile — 8.5

Earned from CSS: responsive breakpoints at 640px and 900px. Filmstrip uses overflow-x scroll with snap on mobile, horizontal scroll contained. Tap targets ≥48px (.btn min-height 48px, .btn-icon 48×48). Sticky mobile bar with call + CTA. Header hides on scroll down via transform. Form inputs min-height 48px. No pinned scroll under 640px (pinned story likely desktop-only via media query, cannot confirm without screenshots but CSS suggests responsive handling). Deductions: -0.5 because without screenshots cannot verify 390 composition or whether mobile bar covers form/footer. Conservative deduction for unverified mobile-specific decisions.

## Accessibility — 8.5

Earned: Skip link present. Focus visible with 3px outline in accent color, 3px offset. All form inputs have associated labels (no placeholder-only labels). ARIA live regions on ZIP result and estimator output. Reduced motion: inline script adds `sw-motion` class only when `prefers-reduced-motion: no-preference`; all reveal/split states are under `.sw-motion`, so reduced motion shows everything. Forced colors handled for compare handle, hotspots, carousel controls. Heading order: h1 → h2 (story-rot) → h2 (services) → h2 (process) → h2 (proof) → h3 (estimator) → h2 (area) → h2 (contact) → h3 (form steps). No skips. Deductions: -0.5 because cannot verify reduced-motion screenshot shows all content without render.json/screenshots. Also, rotator word (if present) needs aria-hidden + sr-only static copy — DOM shows `.sw-rotate-word` structure but cannot confirm sr-only fallback without seeing full hero markup (truncated). Conservative deduction.

## Motion and interaction — 8.5

Earned: Hooks present in DOM: `data-reveal`, `data-reveal-stagger`, `data-split`, `data-sw-signature`, `data-count`, `data-video`, `data-carousel`, `data-compare`, `data-marquee`, `data-accordion`, `data-lead` (multi-step form). GSAP + ScrollTrigger + Lenis loaded deferred. Reduced motion respected via class gate. Intro uses pencil-line draw + filmstrip slide (per concept). Scroll stories: pinned SVG scarf joint, cut-rule clip wipe. Hover: kerf scaleX grow. Deductions: -0.5 because cannot verify intro timing ≤1.2s or whether motion explains something beyond decoration without screenshots. Also cannot confirm story reversibility or pin threshold. Conservative deduction for unverified execution.

## Wow moment — 8.5

Earned: Signature moment is the kerf-growing cut rule tied to the thesis (cut list). Tool output (estimator) displays price range in mono with sample label, tied to the cut-list language. Rot-check tool (per concept) provides actionable answer. Deductions: -0.5 because estimator output is a price range text line, which borders on "plain text or $ figure" deduction. However, it is contextualized with job type and sample disclaimer, and the cut-list framing elevates it above generic. Cannot verify visual treatment of tool output without screenshots.

## Polish — 8.5

Earned: SVG favicon + apple-touch-icon present. OG image 1200×630 declared. Theme-color set. JSON-LD with specific GeneralContractor type. Print stylesheet included for estimator. Lazy images with width/height. Hero poster preloaded. Forced colors handled. Consistent radius (none declared = sharp corners throughout, consistent). Deductions: -0.5 because credits list has 16 identical `<a>Pexels</a>` links without href (static.json warnings), which is sloppy. Also cannot verify icon stroke consistency or shadow usage without screenshots.

## Arithmetic

14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×7.0 + 8×9.0 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 90 + 90 + 56 + 72 + 59.5 + 59.5 + 102 + 68 + 34
= 865 / 100 = **8.65**

## Must

- **dist/index.html line 1030, ul.credits**: 16 `<a>Pexels</a>` elements lack href attributes. Fix: either add valid credit URLs or replace `<a>` with `<span>` since these are placeholder credits. Static check warns 16 times; this is a polish/a11y issue (links without destination trap keyboard users).

## Should

- **Photo category**: Replace placeholders with approved niche media from `niches/carpenter/media/manifest.json` using `[[img]]` macros. Apply consistent grade (sepia 0.08, saturate 0.85 per filmstrip CSS) across all frames. This is the primary blocker for passing.
- **Estimator output**: Add a visual element beyond plain text (e.g., a mini cut-rule frame around the price range, or a species/dimension callout in mono) to avoid the "plain $ figure" wow deduction.
- **Credits cleanup**: Reduce 16 identical Pexels credits to a single line or remove entirely in placeholder mode; the repetition is noisy.
- **Mobile verification**: Run render check to confirm 390×844 composition, mobile bar behavior over form, and tap target sizes.

## Elevate

1. **Photo (weakest, weight 8)**: Curate 7 approved carpenter-media images that show the *process* (measure → mark → saw → chisel → dry-fit → clamp → finish) matching the filmstrip CUT 00–06 numbering. Apply a single duotone grade using the Harbor Teal + Clapboard Cream palette so the stock feels like one shoot. Use object-position to put the hand/tool on a third, not center. This turns placeholder weakness into signature strength.

2. **Motion (second weakest by weight 12, tied with wow/polish/mobile at 8.5 but highest weight)**: Drive the estimator's price reveal with the same `--sw-p` clip-wipe as the cut rules, so selecting a job type draws a kerf line under the output before the number appears. This threads the signature into the tool, making the wow moment inseparable from the concept. One sentence description: "the price draws itself like a cut line."