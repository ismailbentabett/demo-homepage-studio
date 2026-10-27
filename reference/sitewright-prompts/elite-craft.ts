/**
 * Elite Craft Standard — dense, concrete, imperative guidance with numeric values.
 * Split into subsets so each pipeline stage receives only what it needs:
 *   - ART_DIRECTION_SUBSET → concept stage
 *   - CSS_CRAFT_SUBSET     → design-system stage
 *   - COMPOSITION_SUBSET   → page-blueprint and page stages
 *   - COPY_CRAFT_SUBSET    → page and fix stages
 *   - REVIEW_RUBRIC        → critique and elevate stages
 *   - TRADE_VISUALS        → concept and page stages (per-trade visual/structural guidance)
 *
 * Nothing here overrides the safety model, FACT_RULES or TECH_CONTRACT.
 */

// ---------------------------------------------------------------------------
// Art direction (concept stage)
// ---------------------------------------------------------------------------

export const ART_DIRECTION_SUBSET = `
ART DIRECTION (decide these before anything else; the system and pages inherit them)

Design thesis
- State the site's design thesis in ONE sentence: what this site does visually that no other contractor site in this trade does.
- List THREE specific things this site will do differently (for example: "asymmetric hero with offset type over a full-bleed roof photo", "process timeline drawn as a ridge-line divider", "service list set as a ruled price-guide table"). Reject the first idea; generate three alternatives internally and pick the most distinctive that still converts.

Mood board in words
- Name THREE reference moods (never named brands or URLs): for example "industrial print shop", "mid-century architectural digest", "vintage national park poster". Each mood must be describable in 8-12 words and tied to the trade and the owner's brand.

Type pairing rationale
- Choose heading and body fonts from the allow-list with a stated reason tied to the trade: "condensed grotesk display + humanist body for a roofer because the condensed face echoes shingle courses and the humanist body reads well at 18px on a phone". Never pick Inter-only. Never use the same family for heading and body.
- Define the modular scale ratio: 1.2 for mobile-first, 1.333 for desktop-heavy. All sizes via clamp().
- Display headings: line-height 1.0-1.15, letter-spacing -0.02em to -0.04em. Body: 17-19px, line-height 1.55-1.7, measure 55-72ch. Max 5 distinct font sizes per page outside the scale.

Grid and spacing logic
- Declare the grid: 12-column at ≥1200px, 8-column at ≥900px, 4-column at ≥640px, single below. Gutter 16-24px. Margin matches gutter.
- Spacing scale: 4/8 base. Section padding varies: tight 56-80px, normal 96-120px, loose 128-160px (all via clamp). No two adjacent sections share the same padding value.
- Vertical rhythm: every section's top margin is a multiple of the base unit. Proximity groups related elements (8-16px gap); unrelated elements get 32-48px.

Image treatment spec
- Hero: at least 60% of the first screen on mobile, or a deliberate type-only hero with a signature device. Aspect ratio 16:9 or 3:2 landscape. object-position keeps the subject visible.
- Secondary/work photos: consistent aspect ratio per context (4:5 portrait for cards, 1:1 for gallery, 16:9 for feature bands). Consistent frame treatment from the shape language (radius, border, offset shadow, or none).
- Optional tint/duotone via CSS blend modes to unify uneven photos. Captions only from FACTS. Never stretch.
- When no photo exists for a slot, design the section without one (typography, numbers from FACTS, inline SVG pattern). Never leave a blank box.

Section-transition style
- Define how sections connect: hard edge, hairline rule, diagonal clip-path (CSS only), overlapping element, colour-block shift, or whitespace breath. Use at least two transition types across the site. Never repeat the same transition more than twice in a row.

Texture and pattern
- One texture maximum: paper grain, ruled lines, blueprint grid, hatching, halftone dots, or topo lines. Implemented via CSS gradients or inline SVG data images only. No glassmorphism, no blobs, no neon glow.

Iconography style
- Custom inline SVG with one stroke width (1.5-2px) and one cap style (round or square). Or typographic marks and numerals. Never emoji. Never identical icon-in-a-tinted-square rows.

Button personality
- Primary: solid fill, action colour, white text, min-height 48px, padding 12-16px vertical / 24-32px horizontal, radius from shape language, visible focus ring (2px offset, 3:1 contrast), pressed state (scale 0.97). Secondary: outline or ghost. One primary style, one secondary. Never gradient buttons.

Motion personality
- One motion vocabulary: one hero entrance (transform + opacity, under 600ms, ease-out cubic-bezier(0.23,1,0.32,1), once), OR underline draw, OR accordion grid-template-rows. Always content-visible without JS. Always respects prefers-reduced-motion (no transforms, opacity-only or none).

Signature device
- One memorable motif tied to the trade: ridge-line divider (roofing), pipe-bend connector (plumbing), blueprint grid mark (remodeling), airflow curve (HVAC), circuit trace (electrical), turf stripe (landscaping), paint-swatch fan (painting), tape-measure rule (general), stone-course line (masonry). Used in hero, section headings and CTA at consistent scale. Defined as a reusable CSS class or inline SVG.
`;

// ---------------------------------------------------------------------------
// CSS craft (design-system stage)
// ---------------------------------------------------------------------------

export const CSS_CRAFT_SUBSET = `
CSS CRAFT (the foundation every page inherits; write it precisely)

Variable-driven theme
- :root defines every token: colours (ink, paper, surface, line, primary, accent, plus OKLCH-derived tints with solid hex fallbacks), type scale (fluid clamp), spacing scale (4/8 base), radii, border widths, shadow (at most one elevation), z-layers, motion durations. Sections swap light/dark/accent backgrounds by setting --surface and --ink on a wrapper class.
- Colour contrast: ink on paper ≥7:1, white on accent ≥4.5:1, paper on primary ≥4.5:1. Check every pair you create. Text over photos gets a scrim (gradient or solid) guaranteeing 7:1.

Layer organisation (where sanitize.ts allows @layer)
- reset → tokens → base → layout → components → utilities → pages. If @layer is stripped, organise by comment blocks in the same order. No !important. Low specificity (max 0-2-1). No dead CSS.

Typography implementation
- Fluid type scale via clamp() with the concept's ratio. Heading line-height 1.0-1.2, negative tracking on display sizes. Body 17-19px, line-height 1.55-1.7. text-wrap: balance on headings, pretty on paragraphs. Tabular figures for numbers. All caps only for 3 words or fewer, letter-spacing 0.02-0.06em. Real small-caps or oldstyle numerals where the face offers them.

Layout primitives
- Container with max-width and gutter padding. Grid: 12-column capable, named areas where useful, subgrid fallbacks. Stack and cluster helpers. Section spacing variants (--section-tight, --section-normal, --section-loose). Full-bleed bands (negative margin + padding). Sticky aside layout. Asymmetric two-column (7/5, 8/4). Offset and overlapping images. Index-style lists. No bento grids.

Component gallery contract (define ALL of these with variants)
- Hero: at least 3 variants (split, full-bleed, type-only).
- Section headings: at least 4 variants (not one repeated pattern). Include the signature device in at least one.
- Cards: at least 5 treatments (ruled list, image-led strip, plain text column, flat colour panel, stacked editorial). No identical card repeated for services, benefits and posts.
- Image frames: at least 3 treatments matching the shape language.
- Dividers: at least 3 treatments (hairline, diagonal clip, colour-block shift, signature device).
- CTA bands: at least 2 treatments (full-width, inset).
- Proof strip: rating + review link + photo thumbnail row.
- Process timeline: numbered steps with the signature device connecting them.
- Comparison / "what affects price" block: honest factors from FACTS, laid out as a ruled list or table.
- Stat band: numbers from FACTS only, tabular figures, large.
- Pull-quote: for text from FACTS only, styled distinctly.
- FAQ accordion: details/summary with smooth height transition (grid-template-rows trick).
- Before/after-ready figure: two images side by side or slider-ready markup (hook exists in runtime-script.ts).

Responsive implementation
- Mobile-first. Breakpoints ~640, ~900, ~1200px. No horizontal overflow at 320px. 100dvh not 100vh. Safe-area insets for sticky bars. Tap targets ≥48px with 8px gaps. Thumb-zone placement of primary CTAs. Tables become stacked cards. No hover-only information. Images use sizes/srcset where tokens allow.

Detail polish
- Consistent radius system (from shape language). Optical alignment of icons and text. Button states: hover, active, focus-visible, disabled. Link underline offset and thickness. Selection colour. Custom scrollbar only if subtle. theme-color meta. Print styles (hide nav, bar, reveal all content).
- Logical properties (margin-inline, padding-block) throughout.
- :focus-visible on every interactive element (2px+ offset, 3:1 contrast). prefers-reduced-motion: reduce disables transforms, keeps opacity-only or none. prefers-color-scheme handled only if the concept calls for it. forced-colors safe.
`;

// ---------------------------------------------------------------------------
// Composition (page-blueprint and page stages)
// ---------------------------------------------------------------------------

export const COMPOSITION_SUBSET = `
PAGE COMPOSITION (plan before writing markup)

Blueprint required for every page kind
- Ordered sections, each with: purpose, layout family (from the component gallery), density (tight/normal/loose), background/theme (paper/surface/primary/accent/dark), focal element, image slot (key from IMAGES or "none"), copy intent (what the visitor learns or feels), CTA (primary/secondary/none), transition into the next section.

Hard composition rules
- No two adjacent sections share the same layout family.
- Every long page (home, service, area, about) has at least: one full-bleed moment, one asymmetric section, one dense/data section, one quiet breathing section.
- Every long page has its own ONE "signature moment" (marked data-sw-signature) using the concept's signature device; neighbouring pages use different kinds of moment.
- Pages of the same kind (the service pages, the area pages) never share one skeleton: different section order, different opening, different signature moment.
- Home page hero occupies at least 60% of the first phone screen, or is a deliberate type-only hero with the signature device.
- Inner pages (service, area, about, FAQ, contact, blog, 404, thanks) receive the SAME ambition as the home page. Service pages are editorial landing pages: problem framing, "how we do it" timeline, what affects cost, local proof, objection handling, internal links. Area pages are genuinely local. About pages are human. Contact is frictionless.

Density map
- Alternate loud → quiet → dense → breath down the page. A page with five sections of equal density fails.
- Front-load the most important content. Progressive disclosure (details/summary) for secondary detail.

Focal points
- One focal point per screen. Test by squinting: is there a clear hierarchy? Cover the logo: could this be any other contractor? If yes, the page is not distinctive enough.

Narrative arc per page kind
- Home (a menu of sections, not a fixed order; pick and order them for this business, 6-8 sections): promise, proof, services (3-5 featured, designed, not a grid), process, towns, people, questions, ask.
- Service: problem → who it's for → step-by-step process → what affects cost → towns → related services → questions → ask.
- Area: local angle (from FACTS) → services available → why this business serves this town → neighbouring areas → ask.
- About: person behind the business → how they work → proof (rating, photos) → towns → ask.
- Contact: form (main event) → phone (large tap-to-call) → what happens next → hours → areas → map.
- Gallery: masonry or rhythm of large/small frames → lightbox → captions from FACTS → ask.
- FAQ: grouped questions → honest answers → ask.
- Blog index: designed cards (different from service cards) → ask.
- Post: title → intro → {{post.body}} in .prose → sidebar/end CTA → related services.
- Thanks: confirmation → what happens next (FACTS only) → phone for urgent → links.
- 404: human message → links to services/home/phone.
`;

// ---------------------------------------------------------------------------
// Copy craft (page and fix stages)
// ---------------------------------------------------------------------------

export const COPY_CRAFT_SUBSET = `
COPY CRAFT (write like the best salesperson in the trade)

Voice and rhythm
- Plain, specific, concrete. Short paragraphs. Active voice. Say what the crew DOES, not what the company "provides". Vary sentence length. Reading level grade 7-8.
- Headlines in the visitor's words, benefit-first. Name fears out loud, then resolve them with facts. Numbers only from FACTS.
- Avoid: rule of three, "not just X but Y", slogan endings, rhetorical-question stacks, "Whether you need X or Y". Every section ends with a next step or a transition, never a slogan.

Microcopy
- Button verbs match reality: "Get my free estimate" ONLY if estimates are free in FACTS; otherwise "Request a quote" or "Call for pricing". Form helper text explains what happens next. Empty/error/success states are specific. 404 humor is dry and on-brand.

Page-specific copy requirements
- Service pages: who it's for, problems solved, step-by-step process in real trade terms, what affects cost (honest, "it depends on X, Y, Z" where true), towns served, 4-6 questions with honest answers.
- Area pages: written for people WHO LIVE THERE. Real services, believable local angle from FACTS. Never invent landmarks, projects or neighbourhood facts.
- About: human, specific, from FACTS only. No mission statement. Owner name, how they work, rating with review link.
- Contact: low-pressure. Say what happens after submission (only from FACTS). Large tap-to-call. Hours. Areas. Map link.

Banned phrases stay banned. Extend the list when new slop is found.
`;

// ---------------------------------------------------------------------------
// Quality rubric (critique and elevate stages)
// ---------------------------------------------------------------------------

export type RubricCategory = {
  name: string;
  weight: number;
  floor: number;
  description: string;
};

export const QUALITY_RUBRIC: RubricCategory[] = [
  { name: "First-screen clarity and conversion (phone)", weight: 14, floor: 7, description: "Within 3 seconds on a phone, without scrolling: what the business does, where, why them, what to do next. Primary CTA visible. One trust cue." },
  { name: "Visual distinctiveness (cover-the-logo test)", weight: 12, floor: 7, description: "With the logo covered, could this be any other contractor site? Signature device present and consistent. Not generic." },
  { name: "Typography and hierarchy", weight: 10, floor: 7, description: "Type pairing has a stated rationale. Scale is fluid. Heading/body contrast is structural, not just weight. Measure 55-72ch. Line heights correct." },
  { name: "Layout rhythm and composition", weight: 10, floor: 7, description: "No two adjacent sections share layout family. Density alternates. At least one full-bleed, one asymmetric, one dense, one breathing section per long page. A dark or primary section and an image break on every long page. Pages of the same kind do not share one skeleton." },
  { name: "Photography use and art direction", weight: 8, floor: 6, description: "Photos are art-directed: consistent aspect ratios, framing, crop to subject. No stretching. Captions from FACTS. Sections without photos are designed to not need them." },
  { name: "Copy specificity and truthfulness", weight: 8, floor: 7, description: "Every claim supported by FACTS. No banned phrases. Specific beats general. Voice matches the strategy. No filler." },
  { name: "Mobile usability and responsiveness", weight: 7, floor: 8, description: "Tap targets ≥48px, 8px gaps. No horizontal scroll 320-1920px. Sticky bar doesn't cover content. Navigation works. Thumb-zone CTAs." },
  { name: "Accessibility and technical quality", weight: 7, floor: 8, description: "WCAG AA contrast. Visible focus. Semantic HTML. Heading order. Alt text. Reduced motion respected. No layout shift. LCP candidate marked." },
  { name: "Motion and interaction", weight: 12, floor: 7, description: "Motion has a purpose and stays inside the motion budget: one intro moment, page transitions, one or two scroll stories, varied reveals, ease-out curves, no bounce, no autoplay carousel, no popup on load. Hover/focus feedback on every control. Everything readable with reduced motion." },
  { name: "Wow moment", weight: 8, floor: 7, description: "Each page has one moment a visitor would screenshot or show someone, built from the signature device (a pinned story, a before/after slider, a type reveal, a video band). It serves the message and never hides content or the call to action." },
  { name: "Polish (states, details, consistency)", weight: 4, floor: 6, description: "Button states complete. Link underlines styled. Selection colour. Radius system consistent. No orphan styles. Print styles exist." },
];

export const RUBRIC_PASS_THRESHOLD = 8.0;
export const RUBRIC_ELEVATE_MIN = 7.0;
export const RUBRIC_ELEVATE_MAX = 8.0;

export function formatRubricForPrompt(passScore: number = RUBRIC_PASS_THRESHOLD): string {
  return `QUALITY RUBRIC (score each 0-10; publish only when weighted score ≥${passScore.toFixed(1)} AND every category meets its floor)

${QUALITY_RUBRIC.map((c) => `- ${c.name} (weight ${c.weight}%, floor ${c.floor}): ${c.description}`).join("\n")}

Scoring:
- Weighted score ≥${passScore.toFixed(1)} AND all floors met → publish.
- Score ${RUBRIC_ELEVATE_MIN}-${passScore.toFixed(1)} → run elevate pass on the lowest two categories before publishing.
- Below ${RUBRIC_ELEVATE_MIN} → fix, then re-check.

The elevate pass rewrites weak sections against this rubric and lists at least 3 concrete improvements made.`;
}

// ---------------------------------------------------------------------------
// Trade visuals (concept and page stages)
// ---------------------------------------------------------------------------

export type TradeVisualGuide = {
  key: string;
  match: RegExp;
  signatureImagery: string;
  materialsAndTextures: string;
  processSteps: string;
  emergencyVsPlanned: "emergency-first" | "proof-first" | "balanced";
  regulatoryTalkingPoints: string;
  commonObjections: string[];
  designMetaphor: string;
};

export const TRADE_VISUAL_GUIDES: TradeVisualGuide[] = [
  {
    key: "roofing",
    match: /roof|shingle|gutter|siding|soffit/i,
    signatureImagery: "Aerial or ground-level roof photos with clear sky lines; close-ups of shingle courses, flashing, ridge caps.",
    materialsAndTextures: "Asphalt shingle texture, metal standing seam, cedar shake grain. Subtle grain or topo-line CSS texture.",
    processSteps: "Inspection → tear-off → deck repair → underlayment → shingles → flashing → cleanup. Show nail-magnet sweep.",
    emergencyVsPlanned: "emergency-first",
    regulatoryTalkingPoints: "Building permits, wind ratings, manufacturer warranties, insurance claim documentation.",
    commonObjections: ["Will you work with my insurance?", "What if it rains mid-job?", "How do I know the deck is sound?"],
    designMetaphor: "Ridge-line: angled dividers, overlapping layers, strong horizontal lines echoing shingle courses.",
  },
  {
    key: "plumbing",
    match: /plumb|drain|sewer|water heater|pipe|septic/i,
    signatureImagery: "Clean copper and PEX runs, tidy solder joints, labelled shut-offs. Truck and crew photos.",
    materialsAndTextures: "Copper patina, PVC white, stainless steel. Ruled-line or pipe-bend CSS texture.",
    processSteps: "Diagnose → explain options and price → protect the area → repair/install → test → clean up.",
    emergencyVsPlanned: "emergency-first",
    regulatoryTalkingPoints: "Code compliance, backflow prevention, permit requirements for water heaters and re-pipes.",
    commonObjections: ["Will I be upsold?", "Is the fix permanent?", "Do you clean up?"],
    designMetaphor: "Pipe-bend connector: curved section dividers, flow-direction arrows, circular motifs.",
  },
  {
    key: "hvac",
    match: /hvac|heating|cooling|air condition|furnace|heat pump|\bac\b/i,
    signatureImagery: "Clean ductwork, thermostat close-ups, outdoor condenser units, seasonal comfort shots.",
    materialsAndTextures: "Sheet metal, insulated duct wrap, brushed aluminium. Airflow-curve CSS texture.",
    processSteps: "Load calculation → equipment recommendation → install day → commissioning → maintenance plan.",
    emergencyVsPlanned: "balanced",
    regulatoryTalkingPoints: "Manual J load calculations, refrigerant handling certification, energy-efficiency ratings, rebate eligibility.",
    commonObjections: ["Do I really need a new system?", "How long will I be without heat/AC?", "What size do I need?"],
    designMetaphor: "Airflow curve: gentle S-curves in dividers, vent-grille patterns, soft directional movement.",
  },
  {
    key: "electrical",
    match: /electric|wiring|panel|generator|lighting/i,
    signatureImagery: "Tidy panel interiors, labelled breakers, conduit runs, generator installs. Crisp close-ups.",
    materialsAndTextures: "Copper wire, PVC conduit, steel panels. Circuit-trace or grid CSS texture.",
    processSteps: "Assessment → code review → permit → rough-in → inspection → trim-out → final test.",
    emergencyVsPlanned: "balanced",
    regulatoryTalkingPoints: "NEC code compliance, permit and inspection requirements, AFCI/GFCI, panel upgrade triggers.",
    commonObjections: ["Do I need a permit?", "Is my panel safe?", "How long without power?"],
    designMetaphor: "Circuit trace: right-angle dividers, node-and-line connectors, precise grid alignment.",
  },
  {
    key: "landscaping",
    match: /landscap|lawn|garden|turf|sod|irrigation|mow|hardscape|patio|paver/i,
    signatureImagery: "Wide lawn shots, planting beds in season, hardscape details, before/after pairs.",
    materialsAndTextures: "Grass texture, stone pavers, mulch, wood edging. Organic or topo-line CSS texture.",
    processSteps: "Consultation → design → prep → install → seasonal maintenance. Show the rhythm of visits.",
    emergencyVsPlanned: "proof-first",
    regulatoryTalkingPoints: "HOA approvals, drainage easements, irrigation permits, native plant ordinances.",
    commonObjections: ["Will plants survive?", "Does the design match the picture?", "What does ongoing cost?"],
    designMetaphor: "Turf stripe: alternating-band dividers, organic curves, layered depth like planting beds.",
  },
  {
    key: "painting",
    match: /paint|stain|drywall|wallpaper|coating/i,
    signatureImagery: "Crisp cut-lines, colour-fan decks, prep work (taping, sanding), finished rooms in natural light.",
    materialsAndTextures: "Paint swatch gradients, brush-stroke texture, paper grain. Swatch-fan CSS motif.",
    processSteps: "Colour consultation → prep (wash, scrape, sand, caulk, prime) → paint → trim → cleanup.",
    emergencyVsPlanned: "proof-first",
    regulatoryTalkingPoints: "Lead-safe practices for pre-1978 homes, VOC limits, HOA colour approvals.",
    commonObjections: ["Will the colour look right?", "How do you protect my furniture?", "How long until I can move back in?"],
    designMetaphor: "Paint-swatch fan: fanned colour chips as dividers, gradient transitions, crisp edge lines.",
  },
  {
    key: "remodeling",
    match: /remodel|renovat|general contract|kitchen|bath|addition|builder|carpent|cabinet|basement/i,
    signatureImagery: "Project photography at every stage, material close-ups, finished spaces in context.",
    materialsAndTextures: "Wood grain, tile, stone, drywall. Blueprint-grid or ruled-line CSS texture.",
    processSteps: "Design → estimate → demo → rough-in → inspections → finishes → punch list → walkthrough.",
    emergencyVsPlanned: "proof-first",
    regulatoryTalkingPoints: "Building permits, zoning setbacks, structural engineering, lead/asbestos abatement.",
    commonObjections: ["Will it go over budget?", "How long will I live in dust?", "Who actually shows up?"],
    designMetaphor: "Blueprint grid: faint grid lines as section backgrounds, dimension-line dividers, measured precision.",
  },
  {
    key: "concrete",
    match: /concrete|asphalt|paving|driveway|masonry|brick|stone|foundation|excavat/i,
    signatureImagery: "Finished surfaces, formwork, rebar, curing compound, broom-finish close-ups.",
    materialsAndTextures: "Concrete texture, aggregate, brick bond, stone coursing. Heavy grain CSS texture.",
    processSteps: "Excavation → base prep → forms → pour → finish → cure → seal.",
    emergencyVsPlanned: "proof-first",
    regulatoryTalkingPoints: "Permits for driveways and foundations, setback requirements, drainage plans.",
    commonObjections: ["Will it crack?", "How long before I can drive on it?", "Do you remove the old surface?"],
    designMetaphor: "Stone-course line: heavy horizontal rules, stacked-block layouts, raw tactile edges.",
  },
  {
    key: "fence-deck",
    match: /fence|fencing|deck|pergola|gate|railing/i,
    signatureImagery: "Completed fences and decks, post-detail, hardware close-ups, yard-in-context shots.",
    materialsAndTextures: "Wood grain, vinyl texture, composite decking, metal post caps. Board-rhythm CSS texture.",
    processSteps: "Utility marking → layout → post-setting → framing → decking/pickets → stain/seal → cleanup.",
    emergencyVsPlanned: "proof-first",
    regulatoryTalkingPoints: "Property lines, setback permits, HOA fence-height limits, pool-fence codes.",
    commonObjections: ["Wood or vinyl?", "How long will it last?", "Do I need a permit?"],
    designMetaphor: "Board rhythm: repeating vertical lines, picket-spaced dividers, warm wood-tone accents.",
  },
  {
    key: "cleaning",
    match: /clean|maid|janitor|pressure wash|power wash|window wash|carpet/i,
    signatureImagery: "Before/after pairs, crew in uniform, equipment, sparkling results.",
    materialsAndTextures: "Sparkle highlights, water droplets, fresh linen. Light-dot CSS texture.",
    processSteps: "Walkthrough → scope → clean → inspect → sign-off. Regular schedule explained.",
    emergencyVsPlanned: "balanced",
    regulatoryTalkingPoints: "Insurance and bonding, green-product certifications, background checks.",
    commonObjections: ["Do I need to be home?", "Do you bring supplies?", "What if something breaks?"],
    designMetaphor: "Fresh-line: clean horizontal rules, generous whitespace, light-and-airy spacing.",
  },
  {
    key: "pest",
    match: /pest|termite|rodent|exterminat|mosquito|wildlife/i,
    signatureImagery: "Discreet treatment photos, inspection tools, exclusion work, before/after evidence.",
    materialsAndTextures: "Clean clinical surfaces, subtle shield or checkmark motifs. Minimal texture.",
    processSteps: "Inspection → identification → treatment plan → apply → monitor → follow-up.",
    emergencyVsPlanned: "emergency-first",
    regulatoryTalkingPoints: "State licensing, pesticide application records, pet/kid safety intervals, termite bond terms.",
    commonObjections: ["Is it safe for pets?", "Will they come back?", "How fast does it work?"],
    designMetaphor: "Shield mark: protective badge motifs, clean enclosed sections, reassuring geometry.",
  },
  {
    key: "tree",
    match: /tree|stump|arborist|lot clearing/i,
    signatureImagery: "Canopy shots, crane work, stump grinding, chipper trucks, clean yards after.",
    materialsAndTextures: "Bark texture, wood-chip pattern, rope and rigging. Heavy organic CSS texture.",
    processSteps: "Assessment → rigging plan → climb/bucket → cut → lower → chip → haul → grind.",
    emergencyVsPlanned: "emergency-first",
    regulatoryTalkingPoints: "Tree-removal permits, heritage-tree ordinances, utility-right-of-way, insurance certificates.",
    commonObjections: ["Will you damage my house?", "Do you haul everything?", "Can you grind the stump?"],
    designMetaphor: "Growth-ring: concentric arcs, organic curves, heavy grounded typography.",
  },
  {
    key: "garage-door",
    match: /garage|overhead door|door repair/i,
    signatureImagery: "Installed doors, spring mechanisms, opener units, before/after replacements.",
    materialsAndTextures: "Steel panel texture, wood-grain overlay, hardware close-ups. Bold horizontal CSS lines.",
    processSteps: "Diagnose → recommend repair or replace → install → balance → test safety sensors.",
    emergencyVsPlanned: "emergency-first",
    regulatoryTalkingPoints: "Safety sensor compliance, spring-tension standards, wind-load ratings.",
    commonObjections: ["Repair or replace?", "Is it dangerous?", "How long does it take?"],
    designMetaphor: "Panel-line: bold horizontal bands, segmented layouts echoing door panels, strong vertical rhythm.",
  },
  {
    key: "flooring-windows",
    match: /floor|tile|window|door install|glass|insulation|solar|pool/i,
    signatureImagery: "Installed product close-ups, material samples, room-in-context shots, installation process.",
    materialsAndTextures: "Wood plank, tile grout lines, glass reflections, fabric weave. Material-specific CSS texture.",
    processSteps: "Measure → select product → prep → install → trim → cleanup → walkthrough.",
    emergencyVsPlanned: "proof-first",
    regulatoryTalkingPoints: "Energy-star ratings, building-code egress for windows, waterproofing standards, pool fencing.",
    commonObjections: ["How long will install take?", "What options fit my home?", "Is there a warranty?"],
    designMetaphor: "Material swatch: tiled sample grids, texture-forward sections, product-spec callouts.",
  },
  {
    key: "handyman",
    match: /handyman|repair|maintenance|odd job|fix/i,
    signatureImagery: "Variety of completed jobs, tool belt, organised workspace, satisfied homeowners.",
    materialsAndTextures: "Tool-texture, pegboard grid, worn leather. Practical ruled-line CSS texture.",
    processSteps: "Describe the job → quote → schedule → do the work → clean up → confirm satisfaction.",
    emergencyVsPlanned: "balanced",
    regulatoryTalkingPoints: "Licence limits (what a handyman can vs cannot do), insurance, small-job minimums.",
    commonObjections: ["Do you do small jobs?", "How do you price?", "Will you show up?"],
    designMetaphor: "Checklist: tick-mark bullets, task-list layouts, practical and friendly spacing.",
  },
];

export const GENERIC_VISUAL_GUIDE: TradeVisualGuide = {
  key: "home-services",
  match: /./,
  signatureImagery: "Real photos of the crew, trucks, completed work and the towns served.",
  materialsAndTextures: "Subtle paper grain or ruled-line CSS texture. Clean and confident.",
  processSteps: "Call or request a quote → estimate → schedule → do the work → clean up → follow up.",
  emergencyVsPlanned: "balanced",
  regulatoryTalkingPoints: "Licence and insurance (only if in FACTS), permits where applicable.",
  commonObjections: ["Will you show up?", "Is the price fair?", "Will the work last?"],
  designMetaphor: "Confident-line: strong horizontal rules, clear hierarchy, generous whitespace.",
};

export function visualGuideFor(...labels: Array<string | undefined | null>): TradeVisualGuide {
  const text = labels.filter(Boolean).join(" ");
  return TRADE_VISUAL_GUIDES.find((g) => g.match.test(text)) ?? GENERIC_VISUAL_GUIDE;
}

export function describeVisualGuide(guide: TradeVisualGuide): string {
  return [
    `Trade visual guide (${guide.key}):`,
    `- Signature imagery: ${guide.signatureImagery}`,
    `- Materials and textures: ${guide.materialsAndTextures}`,
    `- Honest process steps: ${guide.processSteps}`,
    `- Layout priority: ${guide.emergencyVsPlanned === "emergency-first" ? "Emergency call-first (call button dominant, proof secondary)" : guide.emergencyVsPlanned === "proof-first" ? "Proof-and-process-first (editorial, detailed, call at natural decision points)" : "Balanced (call and proof share the first screen)"}`,
    `- Regulatory talking points (true everywhere): ${guide.regulatoryTalkingPoints}`,
    `- Common objections: ${guide.commonObjections.join("; ")}`,
    `- Design metaphor: ${guide.designMetaphor}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Expanded anti-slop (additions to BANNED_PHRASES and ANTI_SLOP)
// ---------------------------------------------------------------------------

export const ADDITIONAL_BANNED_PHRASES: string[] = [
  "why choose us",
  "why work with us",
  "our commitment",
  "we understand",
  "we know how important",
  "rest assured",
  "you deserve",
  "don't settle",
  "the difference is",
  "experience the difference",
  "family-owned and operated",
  "locally owned",
  "serving the community",
  "years of experience",
  "highly trained",
  "fully licensed and insured",
  "satisfaction guaranteed",
  "free consultation",
  "competitive pricing",
  "affordable prices",
  "best in the business",
  "number one",
  "#1",
  "award-winning",
  "certified professionals",
  "industry-leading",
  "unbeatable",
  "guaranteed results",
];

export const ADDITIONAL_ANTI_SLOP_PATTERNS = `
ADDITIONAL MACHINE TELLS (never produce these)

- "Why choose us" or "Why work with us" as a section heading followed by a grid of icons.
- Identical three-card rows for services, benefits, testimonials and blog posts on the same page.
- Eyebrow label + centered heading + grey subtitle + three-column grid repeated more than once.
- Everything rounded-2xl with shadow-lg and a pastel accent.
- Unbroken centered text columns wider than 72ch on desktop.
- Walls of text with no subheadings, lists or visual breaks.
- Tiny low-contrast footer text below 14px or below 4.5:1.
- Hero text over a busy photo without a scrim or solid panel behind it.
- Autoplaying carousels, popups on page load, cookie-banner clones, the same fade-up on every section.
- Copy that could be pasted onto any business in any town without changing a word.
- Fake stat counters ("1,000+ happy customers") without a source in FACTS.
- Stock handshake, hard-hat-on-blueprint, or smiling-model imagery.
- Gradient-text headings, purple-to-blue hero gradients, neon glows.
- Glassmorphism blur panels, floating blurred blobs, rainbow accents.
- Emoji used as icons or decorative elements.
- "Family-owned", "locally owned", "serving the community" unless FACTS explicitly says so.
- "Years of experience", "highly trained", "fully licensed and insured" unless FACTS provides the specifics.
`;