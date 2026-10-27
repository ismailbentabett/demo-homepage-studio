/**
 * Builds every request Sitewright sends to the designer: strategy, concept, design system, each page, the design critique, the claims check,
 * and the fixes. Each returns `{ system, user }`.
 */
import { availableEmbeds } from "../../embeds";
import { imageCatalog, videoCatalog } from "../../plan";
import { fontMenu } from "../../fonts";
import type { SitePage } from "../../types";
import { A11Y_SEO, ANTI_SLOP, BASE_SYSTEM, CONVERSION_RULEBOOK, COPY_RULEBOOK, DESIGN_RULEBOOK, FACT_RULES, TECH_CONTRACT } from "./rulebook";
import { describePlaybook, playbookFor } from "./trades";
import {
  ART_DIRECTION_SUBSET,
  COMPOSITION_SUBSET,
  COPY_CRAFT_SUBSET,
  CSS_CRAFT_SUBSET,
  describeVisualGuide,
  formatRubricForPrompt,
  RUBRIC_ELEVATE_MIN,
  visualGuideFor,
} from "./elite-craft";
import { DESIGN_TELLS, DOCTRINE_FOR_PROMPTS } from "./design-doctrine";
import { MOTION_BUDGET, MOTION_MINIMUMS, awardCraftForPrompts, serviceVariant } from "./award-craft";
import { effectsCatalogue } from "../../runtime/manifest";
import {
  HERO_ARCHETYPES,
  LAYOUT_RHYTHMS,
  MOTIONS,
  PALETTE_APPROACHES,
  SHAPE_LANGUAGES,
  TYPE_FEELS,
  type Concept,
  type PageSpec,
  type QaIssue,
  type SiteFiles,
  type SiteModel,
  type Strategy,
} from "../../types";

export type Prompt = { system: string; user: string };

const section = (title: string, body: string) => `## ${title}\n${body.trim()}\n`;

export function factsBlock(model: SiteModel): string {
  const lines: string[] = [];
  lines.push(`Business name: ${model.name}`);
  lines.push(`Trade: ${model.tradeLabel} (main service: ${model.broadService})`);
  if (model.city) lines.push(`Home town: ${[model.city, model.state].filter(Boolean).join(", ")}`);
  if (model.ownerFirstName) lines.push(`Owner first name: ${model.ownerFirstName}`);
  if (model.tagline) lines.push(`Tagline written for this business: ${model.tagline}`);
  if (model.description) lines.push(`Company description: ${model.description}`);
  if (model.about) lines.push(`About text:\n${model.about}`);
  lines.push(`Phone (show exactly): ${model.phone ? `${model.phone.display} (tel digits ${model.phone.tel})` : "none"}`);
  lines.push(`Email: ${model.email ?? "none"}`);
  lines.push(`Hours: ${model.hours.length ? model.hours.map((h) => `${h.day} ${h.text}`).join("; ") : "none listed"}`);
  lines.push(
    `Google rating: ${model.rating ? `${model.rating.value} stars from ${model.rating.count} reviews` : "none (do not show any rating)"}${model.reviewLink ? `; review link {{reviewLink}}` : ""}`
  );
  lines.push(`Google Maps link: ${model.mapLink ? "{{mapLink}}" : "none"}`);
  lines.push(`Social links: ${model.socials.length ? model.socials.map((s) => `${s.label} ${s.url}`).join("; ") : "none"}`);
  lines.push(`Referral offer: ${model.referralOffer ?? "none"}`);
  lines.push(...proofLines(model));
  const embedKinds = (["calendar", "form", "chat"] as const).filter((kind) => availableEmbeds(model.embeds)[kind]);
  lines.push(`GoHighLevel embeds available (place with <div data-sw-embed="KIND"></div>): ${embedKinds.length ? embedKinds.join(", ") : "none (do not write any embed hook)"}`);
  lines.push(`Brand colors given by the client: main (deep) ${model.colors.main}, action ${model.colors.secondary}`);
  lines.push("");
  lines.push("Services (use these names and slugs; the text under each is written for this business):");
  model.services.forEach((service, index) => {
    lines.push(`${index + 1}. ${service.name} [slug ${service.slug}]${service.image ? ` [image key service${index + 1}]` : ""}`);
    if (service.blurb) lines.push(`   Summary: ${service.blurb}`);
    service.text.forEach((paragraph) => lines.push(`   Text: ${paragraph}`));
  });
  lines.push("");
  lines.push("Service areas (use these names and slugs):");
  model.areas.forEach((area, index) => {
    lines.push(`${index + 1}. ${area.name} [slug ${area.slug}]`);
    area.text.forEach((paragraph) => lines.push(`   Text: ${paragraph}`));
  });
  if (model.posts.length) {
    lines.push("");
    lines.push("Blog posts (full text is inserted by the site; you only design around it):");
    model.posts.forEach((post, index) => lines.push(`${index + 1}. ${post.title} [slug ${post.slug}] - ${post.excerpt}`));
  }
  return lines.join("\n");
}

/** Trust, price, ZIP and testimonial facts. Each missing one says what NOT to do, so tools and trust strips never invent. */
export function proofLines(model: SiteModel): string[] {
  const p = model.proof ?? {};
  const lines: string[] = [];
  lines.push(`Licence: ${p.licence ?? "none given (never write licensed)"}; insured: ${p.insured ? "yes" : "not stated (never write insured or bonded)"}`);
  lines.push(`Warranty: ${p.warranty ?? "none given (never promise a warranty or guarantee)"}`);
  lines.push(`In business since: ${p.yearFounded ?? "not given (never state years in business)"}`);
  lines.push(`Financing: ${p.financing ?? "none (never mention financing)"}`);
  if (p.certifications?.length) lines.push(`Certifications: ${p.certifications.join("; ")}`);
  lines.push(
    `ZIP codes served: ${p.postalCodes?.length ? p.postalCodes.join(", ") : "none listed (a ZIP checker matches the service-area town names only and offers a call for anything else)"}`
  );
  lines.push(
    p.prices?.length
      ? `Price ranges the owner gave (the ONLY prices allowed anywhere): ${p.prices.map((x) => `${x.service}: ${x.range}${x.note ? ` (${x.note})` : ""}`).join("; ")}`
      : "Price ranges: none given. Never show a price, range or $ figure; an estimator scopes the job (size, urgency, access) and carries the answers into the quote form."
  );
  lines.push(
    p.testimonials?.length
      ? `Real testimonials (quote exactly, with the author as given): ${p.testimonials.map((t) => `"${t.quote}" (${t.author}${t.source ? `, ${t.source}` : ""})`).join(" | ")}`
      : "Testimonials: none supplied. Never write a quote or a named reviewer; use the Google rating and the review link instead."
  );
  return lines;
}

function videoNote(model: SiteModel): string {
  const { videos, posters } = videoCatalog(model);
  const keys = Object.keys(videos);
  if (!keys.length) return "\nNo videos exist: never use <video>.";
  const list = keys.map((k) => "{{video." + k + "}}" + (posters[k] ? " (poster {{poster." + k + "}})" : "")).join(", ");
  return `\nAvailable video keys: ${list}. At most one muted looping video per page, always with its poster.`;
}

export function imagesBlock(model: SiteModel): string {
  const catalog = imageCatalog(model);
  const keys = Object.keys(catalog);
  if (keys.length === 0) return "No photos at all. Design every section so it works without photography (typography, shapes, numbers from FACTS, inline SVG).";
  const notes: string[] = [];
  if (catalog.hero) notes.push("hero: the main photo of the business (use it large, high on the home page).");
  if (keys.some((k) => k.startsWith("secondary"))) notes.push("secondary1/secondary2: supporting photos.");
  if (keys.some((k) => k.startsWith("work"))) notes.push(`work1..work${keys.filter((k) => k.startsWith("work")).length}: photos of finished work (real; use them for proof and a gallery).`);
  if (keys.some((k) => k.startsWith("service"))) notes.push("serviceN: the photo for service N in the Services list.");
  if (keys.some((k) => k.startsWith("before"))) notes.push("beforeN/afterN: real before-and-after pairs of the same job; use them together in a data-sw-compare slider.");
  if (catalog["logo.dark"] || catalog["logo.light"]) notes.push("logo.dark is the logo for dark backgrounds, logo.light for light backgrounds. Use each only on the background it is made for.");
  return `Available image keys: ${keys.join(", ")}\n${notes.join("\n")}\nNo other photos exist. Never invent an image address. HARD RULE: on a page, every photo key is used AT MOST ONCE (the logo excepted). Count the photos available and give photos only to that many sections; every other section is designed without a photo (type, numbers from FACTS, shapes, inline SVG). Repeating a photo, or cropping one photo into several tiles, fails the page.${videoNote(model)}`;
}

/** A home page demo is a plan with the home page alone. */
export const isDemoPlan = (plan: PageSpec[]): boolean => plan.length === 1 && plan[0]!.kind === "home";

const DEMO_NOTE = `\n\nTHIS IS A ONE-PAGE HOME PAGE DEMO. The home page above is the whole site: no other page exists, so never link to one (no {{base}}/services, /contact, /about or any other path, and no service or area pages). Everything a visitor needs is on this page: the main navigation, the footer links and the buttons point to in-page anchors (href="#services", "#process", "#areas", "#reviews", "#faq", "#quote") that match section ids you give the sections, or to tel: and mailto: links. The quote form sits in a section with id="quote". The page must still be a complete, premium, final-quality home page: show the best version of this business in one scroll.`;

export function pagesBlock(plan: PageSpec[]): string {
  const list = plan.map((page) => `${page.path === "/" ? "{{base}}/" : `{{base}}${page.path}`}  (${page.kind}: ${page.title})`).join("\n");
  return isDemoPlan(plan) ? `${list}${DEMO_NOTE}` : list;
}

const sharedRules = (): string => [DESIGN_RULEBOOK, CONVERSION_RULEBOOK, COPY_RULEBOOK, ANTI_SLOP, DOCTRINE_FOR_PROMPTS, A11Y_SEO, awardCraftForPrompts()].join("\n");

const factRules = (): string => FACT_RULES.map((rule) => `- ${rule}`).join("\n");

// ------------------------------------------------------------------ strategy

export function strategyPrompt(model: SiteModel): Prompt {
  const playbook = playbookFor(model.tradeLabel, model.broadService, model.name);
  return {
    system: `${BASE_SYSTEM}\n\nYou are doing the research and positioning step before any design. Think like a conversion strategist who has studied hundreds of local contractor sites and knows which ones win calls.`,
    user: [
      section("FACTS", factsBlock(model)),
      section("TRADE LENS", describePlaybook(playbook)),
      section("RULES", factRules()),
      section(
        "TASK",
        `Write the positioning brief for this business's website. Be specific to this business, its town and its services. Use only facts from FACTS; where you reason about the customer, reason from the trade lens and the town.

Return exactly one <sw-strategy> tag containing JSON with this shape (no other text):
{
 "customer": "who calls and what is happening in their day when they search (2-3 sentences, specific)",
 "fears": ["3-5 concrete fears this customer has about hiring this trade"],
 "triggers": ["3-5 situations that make them search"],
 "differentiators": ["2-4 things that truly set THIS business apart, taken from FACTS (services, towns, reviews, how the work is described). If FACTS offers little, say what to emphasise instead"],
 "proof": ["the proof available in FACTS and how to show it (rating, photos, towns, details)"],
 "promise": "the one-sentence promise for the hero, in the customer's words, supported by FACTS",
 "primaryAction": "call" or "quote",
 "secondaryAction": "the second action and when it makes sense",
 "voice": "how this business should sound, in 2 sentences, with 3 words it would use and 3 it never would",
 "objections": [{"question": "a real question a nervous homeowner asks", "answerAngle": "the honest answer's angle, using only FACTS"}] (6-8 items),
 "searchIntents": ["8-12 phrases people type, with services and towns from FACTS"],
 "doNotSay": ["claims and phrases to avoid for this business because FACTS does not support them"]
}`
      ),
    ].join("\n"),
  };
}

// ------------------------------------------------------------------ concept

export type Signature = Pick<Concept, "heroArchetype" | "shapeLanguage" | "typeFeel" | "paletteApproach" | "layoutRhythm" | "headingFont" | "signatureDevice" | "name">;

export function conceptPrompt(model: SiteModel, strategy: Strategy, avoid: Signature[], rejected?: string): Prompt {
  const playbook = playbookFor(model.tradeLabel, model.broadService, model.name);
  const visualGuide = visualGuideFor(model.tradeLabel, model.broadService, model.name);
  const avoidBlock = avoid.length
    ? `These sites already exist. Your concept must be clearly different from every one of them (different hero archetype, shape language and type feel, and a different signature device):\n${avoid
        .map((s) => `- "${s.name}": hero ${s.heroArchetype}, shapes ${s.shapeLanguage}, type ${s.typeFeel}, palette ${s.paletteApproach}, rhythm ${s.layoutRhythm}, heading font ${s.headingFont}, device: ${s.signatureDevice}`)
        .join("\n")}`
    : "No other sites to compare with yet.";
  return {
    system: `${BASE_SYSTEM}\n\nYou are the art director. You choose one strong, specific design direction for this business and nothing generic. Reject the first idea — it is usually the average of the training data. Generate three alternatives internally and pick the most distinctive that still converts.\n\n${ART_DIRECTION_SUBSET}

${DOCTRINE_FOR_PROMPTS}`,
    user: [
      section("FACTS", factsBlock(model)),
      section("IMAGES", imagesBlock(model)),
      section("STRATEGY", JSON.stringify(strategy, null, 1)),
      section("TRADE LENS", describePlaybook(playbook)),
      section("TRADE VISUAL GUIDE", describeVisualGuide(visualGuide)),
      section("DESIGN RULES", DESIGN_RULEBOOK + ANTI_SLOP),
      section("VARIETY", avoidBlock + (rejected ? `\n\nYour last attempt was rejected: ${rejected}` : "")),
      section("FONTS (choose only from this list)", fontMenu()),
      section(
        "TASK",
        `Design the visual direction for this one business. Start from who they are, where they work, what their photos look like and what the customer fears. Pick a direction a real design studio would be proud of, one that makes this site look unlike any other contractor site.

The brand colours from FACTS must stay recognisable: "primary" is the client's main colour (keep its hue; you may use the exact hex) and "accent" is their action colour (exact hex). You choose ink, paper, surface and line. Check contrast: ink on paper at least 7:1, white text on accent at least 4.5:1, paper text on primary at least 4.5:1.

Use the TRADE VISUAL GUIDE to inform your signature device, texture, imagery and layout priority. The design metaphor suggested there is a starting point — adapt it to this specific business.

Return exactly one <sw-concept> tag containing JSON (no other text):
{
 "name": "a short evocative name for the direction (2-4 words)",
 "idea": "3-4 sentences describing the look, the layout logic, how the photography is used and what the visitor feels",
 "heroArchetype": one of ${JSON.stringify(HERO_ARCHETYPES)},
 "shapeLanguage": one of ${JSON.stringify(SHAPE_LANGUAGES)},
 "typeFeel": one of ${JSON.stringify(TYPE_FEELS)},
 "paletteApproach": one of ${JSON.stringify(PALETTE_APPROACHES)},
 "layoutRhythm": one of ${JSON.stringify(LAYOUT_RHYTHMS)},
 "motion": one of ${JSON.stringify(MOTIONS)},
 "headingFont": "a family from the list that matches typeFeel",
 "bodyFont": "a family from the list, readable at 18px, different in character from the heading",
 "signatureDevice": "the one memorable design element and where it repeats (for example 'a ridge-line divider that also underlines section headings')",
 "imagery": "how photos are cropped, framed and treated across the site",
 "colors": {"ink":"#hex","paper":"#hex","primary":"#hex","accent":"#hex","surface":"#hex","line":"#hex"},
 "tone": "the emotional register in a phrase",
 "thesis": "ONE sentence: what this site does visually that no other contractor site in this trade does",
 "moods": ["three reference moods in words, each 8-12 words, never named brands"],
 "typeRationale": "why the heading and body fonts were paired, tied to the trade and the owner's brand",
 "gridLogic": "grid declaration (e.g. '12-col ≥1200, 8-col ≥900, 4-col ≥640, single below')",
 "spacingRhythm": "spacing scale and section padding values (e.g. '4/8 base; tight 64px, normal 104px, loose 144px')",
 "imageTreatment": "crop ratios, frame treatment, optional tint/duotone, caption style — more specific than 'imagery'",
 "sectionTransitions": ["at least two ways sections connect (hard edge, hairline, diagonal clip, overlap, colour shift, breath)"],
 "texture": "one CSS-only texture maximum (paper grain, ruled lines, blueprint grid, hatching, topo) or 'none'",
 "iconStyle": "stroke width and cap style for inline SVG icons, or 'typographic marks only'. Never emoji.",
 "buttonPersonality": "primary and secondary button styles, radius, focus ring, pressed state",
 "motionVocabulary": "one motion pattern (reveal-on-scroll, hover lift, underline draw, accordion). Respects prefers-reduced-motion.",
 "designMetaphor": "the trade-specific visual motif (ridge-line, pipe-bend, blueprint grid, airflow curve, etc.)",
 "heroComposition": "specific hero layout beyond the archetype (e.g. 'asymmetric 7/5 split, type left, photo right, scrim gradient')",
 "navStyle": "navigation layout (inline, centered, split logo-left/nav-right, hamburger-only mobile)",
 "cardFamily": "card treatment vocabulary (ruled list, ruled entry, image-led strip, bento tile, stacked editorial)",
 "densityMode": "airy" | "balanced" | "dense",
 "contrastMode": "light" | "dark" | "duotone" | "mixed"
}`
      ),
    ].join("\n"),
  };
}

export const conceptText = (concept: Concept): string => JSON.stringify(concept, null, 1);

// ------------------------------------------------------------------ page blueprints (composition plan)

/**
 * Asks the model to produce a composition blueprint for every page kind before any markup is written.
 * The blueprint defines narrative arc, section sequence, layout families, density, theme, focal points,
 * image slots and transitions so that pages are composed with intent rather than assembled from generic sections.
 */
/** Each service page's composition variant, by its position, so the service pages never share a skeleton. */
export function serviceVariantsBlock(plan: PageSpec[]): string {
  const services = plan.filter((page) => page.kind === "service");
  if (services.length < 2) return "";
  return services.map((page, index) => `${page.path}: ${serviceVariant(index)}`).join("\n");
}

export function blueprintPrompt(model: SiteModel, strategy: Strategy, concept: Concept, plan: PageSpec[]): Prompt {
  return {
    system: `${BASE_SYSTEM}
You are the information architect and art director. You plan every page's composition BEFORE any markup is written.
${COMPOSITION_SUBSET}
${MOTION_BUDGET}
${MOTION_MINIMUMS}

${effectsCatalogue()}`,
    user: [
      section("FACTS", factsBlock(model)),
      section("IMAGES", imagesBlock(model)),
      section("STRATEGY", JSON.stringify(strategy, null, 1)),
      section("CONCEPT", conceptText(concept)),
      section("PAGES", pagesBlock(plan)),
      ...(serviceVariantsBlock(plan) ? [section("SERVICE PAGE VARIANTS (each service page opens and is ordered its own way)", serviceVariantsBlock(plan))] : []),
      section(
        "TASK",
        `Produce a composition blueprint for EVERY page listed above. Each blueprint is a JSON object inside a <sw-blueprints> tag.

For each page, define:
- path: the page path
- kind: the page kind
- narrativeArc: one sentence describing the emotional/informational journey
- signatureMoment: which section uses the concept's signature device and how
- sections: an ordered array of section objects, each with:
  - purpose: what this section achieves for the visitor
  - layoutFamily: the component variant used (from the design system's gallery — e.g. "split-hero", "ruled-list", "ruled entry", "bento-tile", "full-bleed-band", "asymmetric-two-col", "stat-strip", "process-timeline", "faq-accordion", "proof-strip", "image-led-strip", "stacked-editorial")
  - density: "tight" | "normal" | "loose"
  - theme: "paper" | "surface" | "primary" | "accent" | "dark"
  - focalElement: the single most important element in this section
  - imageSlot: the IMAGES key used, or "none"
  - copyIntent: what the visitor learns or feels here
  - cta: "primary" | "secondary" | "none"
  - transition: how this section connects to the next (hard-edge, hairline, diagonal-clip, overlap, colour-shift, breath)
  - effects: the data-sw-* hooks this section uses (for example ["data-sw-split=\"words\"", "data-sw-parallax=\"0.2\""]), or []

Hard rules:
- No two adjacent sections share the same layoutFamily.
- Every long page (home, service, area, about) has at least one full-bleed moment, one asymmetric section, one dense/data section and one quiet breathing section.
- Every long page has its OWN signature moment (one per page, built from the concept's signature system, different in kind from neighbouring pages); the home page's is the biggest. Every section lists its effects (only hooks from the EFFECTS catalogue) within the MOTION BUDGET and above the MOTION MINIMUMS: at least 3 different award hooks per long page, and the site's page transition on.
- BACKGROUND RHYTHM: every long page has at least one "dark" or "primary" section, one full-bleed section and one image/video break. Never more than two "paper" sections in a row.
- Home hero occupies at least 60% of the first phone screen, or is a deliberate type-only hero.
- Service pages are editorial landing pages that cover: problem framing, process, cost factors, local proof, objection handling, internal links. They do NOT share a skeleton: each follows its SERVICE PAGE VARIANT, so no two service pages have the same section order, the same opening layoutFamily or the same signature moment.
- Area pages are genuinely local. About pages are human. Contact is frictionless.
- Alternate loud → quiet → dense → breath down the page. Five sections of equal density fails.
- Home page: 6 to 8 sections at most. Choose the section order from this concept's layout rhythm and this business's strongest proof; do not default to hero, proof, services, process, towns, about, FAQ, ask.
- Each imageSlot key is used at most once on a page. A section with no photo left uses imageSlot "none" and is designed without one.

Return exactly one <sw-blueprints> tag containing a JSON array of all page blueprints. No other text.`
      ),
    ].join("\n"),
  };
}

// ------------------------------------------------------------------ design system

export function systemPrompt(model: SiteModel, strategy: Strategy, concept: Concept, plan: PageSpec[]): Prompt {
  const navPages = plan.filter((page) => ["services", "about", "gallery", "blog", "contact"].includes(page.kind));
  const demo = isDemoPlan(plan);
  return {
    system: `${BASE_SYSTEM}\n\nYou are writing the shared design system and chrome of the site: the CSS every page uses, the header, the footer and the mobile action bar.\n\n${CSS_CRAFT_SUBSET}

${DOCTRINE_FOR_PROMPTS}`,
    user: [
      section("FACTS", factsBlock(model)),
      section("IMAGES", imagesBlock(model)),
      section("STRATEGY", JSON.stringify(strategy, null, 1)),
      section("CONCEPT (follow it faithfully)", conceptText(concept)),
      section("PAGES", pagesBlock(plan)),
      section("RULES", sharedRules()),
      section("TECHNICAL CONTRACT", TECH_CONTRACT),
      section(
        "TASK",
        `Write the design system for this site, so that every page, written next, can be built from it and still look specifically designed. This is a premium foundation: craft matters as much as completeness.

1. <sw-fonts>: the Google Fonts families used, one per line, as "Family:wght@400;700" (only the concept's heading and body fonts, with only the weights you use).
2. <sw-css>: the complete shared stylesheet. Follow the CSS CRAFT rules above precisely. In addition to those requirements:
   - :root custom properties for every colour (from the concept), the type scale (fluid with clamp), spacing scale, radii, borders, shadows (at most one elevation), widths, and z-layers. Dark/light surfaces as variables so sections can swap theme by setting --surface and --ink on a wrapper class.
   - Colour contrast: ink on paper ≥7:1, white on accent ≥4.5:1, paper on primary ≥4.5:1. Text over photos gets a scrim guaranteeing 7:1.
   - A modern reset, base typography, link and focus styles, selection colour, image defaults, tabular numbers. text-wrap: balance on headings, pretty on paragraphs.
   - Layout primitives: container, a 12-column-capable grid with named areas where useful, stack/cluster helpers, section spacing variants (--section-tight, --section-normal, --section-loose via clamp), full-bleed bands, a sticky-aside layout, asymmetric two-column (7/5, 8/4).
   - COMPONENT GALLERY CONTRACT — define ALL of these with variants:
     * Hero: at least 3 variants (split, full-bleed, type-only).
     * Section headings: at least 4 variants (not one repeated pattern). Include the signature device in at least one.
     * Cards: at least 5 treatments (ruled list, ruled entry, image-led strip, bento tile, stacked editorial). No identical card repeated for services, benefits and posts.
     * Image frames: at least 3 treatments matching the shape language.
     * Dividers: at least 3 treatments (hairline, diagonal clip, colour-block shift, signature device).
     * CTA bands: at least 2 treatments (full-width, inset).
     * Proof strip: rating + review link + photo thumbnail row.
     * Process timeline: numbered steps with the signature device connecting them.
     * Comparison / "what affects price" block: honest factors from FACTS, laid out as a ruled list or table.
     * Stat band: numbers from FACTS only, tabular figures, large.
     * Pull-quote: for text from FACTS only, styled distinctly.
     * FAQ accordion: details/summary with smooth height transition (grid-template-rows trick).
     * Before/after-ready figure: two images side by side or slider-ready markup.
   - Buttons: primary (solid fill, action colour, white text, min-height 48px, visible focus ring 2px offset 3:1, pressed scale 0.98), secondary (outline or ghost), on-dark variant. Never gradient buttons.
   - Form fields with clear labels, inline validation text, error/success states. Breadcrumb. Pagination-free blog cards. Gallery grid. Tags.
   - The header, menu (styled for [data-open="true"]), the footer and the mobile action bar (fixed bottom, hidden at 900px and wider, shown with safe-area padding; add padding-bottom to the body so it never covers content). .is-visible reveal states written so content is visible without JavaScript (hidden state only under html.sw-js). prefers-reduced-motion handling. Print basics.
   - Logical properties (margin-inline, padding-block) throughout. :focus-visible on every interactive element. forced-colors safe.
   - Mobile-first with breakpoints at about 640, 900 and 1200px. No horizontal overflow at 320px. Tap targets ≥48px with 8px gaps.
   - Between 450 and 900 lines of real CSS. No placeholders, no unused boilerplate, no vendor frameworks. No !important. Low specificity (max 0-2-1).
3. <sw-header>: the header markup (logo from {{img.logo.light}} or {{img.logo.dark}} depending on the header background, or the business name set in type when no logo exists; the main navigation with ${demo ? "in-page anchor links to the home page's sections (for example #services, #process, #areas, #reviews, #quote)" : `links to ${navPages.map((p) => p.title).join(", ")}`}; the phone button; the menu button using the data-sw-menu hooks). Include a skip link.
4. <sw-footer>: the footer markup (business name and tagline, contact details exactly from FACTS, hours, ${demo ? "services list and areas list as plain text or in-page anchors (there are no service or area pages)," : "services list linking to the service pages, areas list linking to area pages,"} social links from FACTS, the rating with its review link when FACTS has one, a closing call to action, the copyright with <span data-sw-year></span>). Footer text ≥14px and ≥4.5:1 contrast.
5. <sw-mobilebar>: the fixed bottom bar for phones with the call button (href="tel:{{tel}}") and the quote button (link to ${demo ? "#quote" : "{{base}}/contact"}), carrying the data-sw-sticky hook.

Wrap each part in its tag exactly (<sw-fonts>, <sw-css>, <sw-header>, <sw-footer>, <sw-mobilebar>) and write nothing else outside them.`
      ),
    ].join("\n"),
  };
}

// ------------------------------------------------------------------ pages

const PAGE_BRIEFS: Record<PageSpec["kind"], (spec: PageSpec, model: SiteModel) => string> = {
  home: () =>
    `The home page is the pitch. In order of importance: the hero (promise, trade and town, primary action, one trust cue, a real photo used boldly in the concept's hero archetype), proof, the services (as an unmistakably designed section, not a plain card grid), how the work goes step by step in this trade's real terms, the towns served, about the people behind the business (only from FACTS), questions, and a closing call to action with the quote form. Pace the page so no two consecutive sections share the same layout. Include the quote form once. Keep it short: 6 to 8 sections, never a wall of text. Feature 3 to 5 services (grouped by what the customer is trying to solve) and link the rest to the services page; never list every service on the home page. The order above is a menu, not a script: put the sections in the order this concept and this business call for (a trade that wins on proof leads with proof; an emergency trade leads with the call), and do not reuse the order of the other sites.`,
  services: () =>
    `The services overview: help a visitor find their problem fast. Every service from FACTS links to its page with a specific one-line benefit, the photo when there is one, and a clear next step. Add short guidance on how to choose between services where that is honest. End with the call to action and quote form.`,
  service: (spec, model) => {
    const idx = model.services.findIndex((s) => s.slug === spec.ref);
    return `The service page for "${spec.title}" — an editorial landing page, not a brochure blurb. Cover ALL of the content below, but this list is a CHECKLIST, not a section order: the order, the opening and the signature moment come from this page's variant and its blueprint, so it never looks like the other service pages.
LAYOUT VARIANT FOR THIS PAGE: ${serviceVariant(Math.max(0, idx))}

1. PROBLEM FRAME: name the specific problem this service solves in the visitor's words. One sentence that makes them think "yes, that's exactly my situation." Pair with the service photo (service${idx + 1}) when it exists, used boldly per the concept's hero archetype.
2. WHO IT'S FOR: be specific about the homeowner profile and property type. Not "residential and commercial" — name the actual situations.
3. SIGNS YOU NEED THIS: 3-5 concrete symptoms a homeowner would recognise, written as short punchy statements, not a bulleted list of generic warnings.
4. HOW THE WORK GOES: step-by-step process in real trade terms (not "we assess, plan, execute"). Name the actual stages a crew goes through. Use the concept's signature device or process timeline component if the blueprint calls for it. Each step gets one sentence of plain explanation.
5. WHAT AFFECTS THE COST: honest factors without invented figures. "It depends on X, Y, Z" where true. Lay this out as a ruled list or comparison block so it reads as transparency, not evasion.
6. WHAT TO EXPECT DURING AND AFTER: timeline ranges only if FACTS supports them, otherwise general trade norms stated honestly. What the homeowner needs to do before, during, after. Cleanup standards. Warranty scope from FACTS only.
7. TOWNS SERVED: link to each area page. One sentence per town only if FACTS says something specific about serving it.
8. RELATED SERVICES: link to 2-4 other services with a one-line reason someone reading THIS page might also need them.
9. QUESTIONS HOMEOWNERS ASK: 4-6 questions with honest, specific answers. Not FAQ filler — real objections and uncertainties for THIS service.
10. CALL TO ACTION: the quote form plus phone. Restate the promise from the hero.

Title and description target "${spec.title}${model.city ? ` ${model.city}` : ""}". Every claim comes from FACTS. No banned phrases. No rule-of-three stacks.`;
  },
  area: (spec, model) =>
    `The page for the service area "${spec.title}" — written for people WHO LIVE THERE, not a generic service page with a town name swapped in. Structure:

1. LOCAL ANGLE HERO: open with something specific to this place and this trade. Why does ${model.name} serve this town? What do homeowners here deal with that others don't? Only from FACTS — never invent landmarks, neighbourhood character, local regulations, weather patterns or project history.
2. SERVICES AVAILABLE HERE: the relevant services from FACTS, each with a one-line local relevance where truthful. Link to each service page.
3. WHY THIS BUSINESS IN THIS TOWN: response time, familiarity with local conditions, any FACTS-backed connection. Not "we proudly serve" — show, don't tell.
4. NEIGHBOURING AREAS: link to adjacent area pages with a brief note on proximity or shared characteristics.
5. PROOF FROM THIS AREA: if FACTS mentions work done here, reference it. Otherwise skip this section entirely — never fabricate local projects.
6. CALL TO ACTION: quote form and phone. Restate availability for this specific area.

If FACTS has nothing specific about this area beyond its name, keep the page short and honest rather than padding it with generic content. A thin truthful page beats a thick fake one.`,
  about: () =>
    `The about page: the person behind the business, not a corporate mission statement. Structure as a human portrait:

1. OPENING: who is ${`{{owner}}`} (use the owner's first name from FACTS)? One vivid sentence that places them in their work, not a title. "So-and-so has been [doing X] since [year/era]" only if FACTS says so.
2. HOW THEY WORK: the owner's actual approach, drawn from the about text in FACTS. Specific habits, standards, or practices — not values statements. Show through detail, not adjectives.
3. THE BUSINESS TODAY: services offered, team size if FACTS mentions it, the towns served. Grounded facts, not growth narratives.
4. PROOF: the real rating with its review link when FACTS has one. Photo of the owner or team if FACTS provides one. Never invent testimonials or credentials.
5. WHY A HOMEOWNER CAN RELY ON THEM: answered through accumulated evidence above, not restated as a closing claim. Let the reader conclude it.
6. CALL TO ACTION: invite contact. Keep it warm but not gushing.

Every sentence must trace back to FACTS. If the about text in FACTS is thin, write a short honest page rather than inflating it. The about page earns trust through restraint.`,
  contact: () =>
    `The contact page: the quote form (the main event), the phone number as a large tap-to-call, email, hours, service areas, the Google Maps link when FACTS has one, and what happens after the visitor reaches out (honest, only from FACTS). Make it feel easy and low-pressure.`,
  gallery: () =>
    `The gallery of finished work using the work photos (work1..workN) in a layout with character (a masonry or a rhythm of large and small frames, each linking to a lightbox with data-sw-lightbox). Short captions only if they can be written from FACTS without inventing details. Add a call to action.`,
  faq: () =>
    `The questions page: an honest reference, not SEO filler. Structure:

1. OPENING: one sentence framing this as straight answers from people who do this work every day. Not "Got questions? We've got answers!" — something grounded.
2. QUESTIONS GROUPED BY THEME: organise 10-14 questions into 3-4 natural groups (e.g. "Before you hire", "During the job", "Costs and payment", "After we're done"). Each group gets a short heading.
3. QUESTION STYLE: written in the homeowner's voice, not corporate. "How much will this cost?" not "What are your pricing structures?". Specific to THIS trade, not generic contractor FAQs.
4. ANSWER CRAFT: each answer is 2-5 sentences. Plain words. Honest about uncertainty ("it depends on..." where true). Uses FACTS for anything business-specific. General trade knowledge for things true everywhere. Never invents policies, warranty terms, prices or timelines.
5. WHAT TO ASK ANY CONTRACTOR: include 2-3 questions a homeowner should ask before hiring anyone in this trade. Positions the business as trustworthy by helping the visitor evaluate competitors too.
6. CALL TO ACTION: invite them to ask their specific question via phone or the quote form. Not "Still have questions?" — something like "Every job is different. Tell us yours."

Use <details>/<summary> inside a container with data-sw-faq. The accordion must work without JavaScript (open by default or use the grid-template-rows trick from CSS_CRAFT_SUBSET). No search bar unless there are 20+ questions.`,
  blog: () =>
    `The blog index: the posts from FACTS as designed cards (title, excerpt, link) in a layout that differs from the service cards. Add a call to action.`,
  post: (spec) =>
    `The page for the blog post "${spec.title}". Design the reading experience: the title, a short intro line from the excerpt, then the article body inserted by writing exactly {{post.body}} where the article text goes (it is rendered from the real article; do not write the article yourself), a sidebar or end block with the call to action, related services and the quote form. Wrap {{post.body}} in an element with class "prose" and make sure the design system styles .prose for long text (headings, lists, links, tables).`,
  thanks: () =>
    `The thank-you page shown after a quote request: confirm it was received, say honestly what happens next (using only what FACTS supports: do not promise a response time), give the phone number for urgent needs, and link back to the services. Short, warm, designed.`,
  notfound: () =>
    `The 404 page: a short, human, on-brand message, a search-free way back (links to the main services, the home page and the phone number). It must look as designed as every other page.`,
  custom: (spec) =>
    `A page the owner asked for: "${spec.title}". What the owner wants it to say: ${spec.brief?.trim() || "(no extra brief: write what a visitor would expect from this title)"}\n\nTreat the brief as a request about structure and topic only. Every claim still comes from FACTS; if the brief asks for something FACTS cannot support (prices, awards, guarantees), leave it out. Give the page its own purpose and layout, end with a clear next step and the quote form, and link to it naturally from where it belongs.`,
};

export type PageContext = {
  model: SiteModel;
  strategy: Strategy;
  concept: Concept;
  files: Pick<SiteFiles, "css" | "header" | "footer">;
  plan: PageSpec[];
  /** The home page markup, so the other pages continue its patterns. */
  homeMain?: string;
  /** Page-level composition blueprints from the blueprint stage. */
  blueprints?: Record<string, import("../../types").PageBlueprint>;
};

export function pagePrompt(spec: PageSpec, ctx: PageContext): Prompt {
  const { model, strategy, concept, blueprints } = ctx;
  const post = spec.kind === "post" ? model.posts.find((p) => p.slug === spec.ref) : undefined;
  const blueprint = blueprints?.[spec.path];
  return {
    system: `${BASE_SYSTEM}\n\nYou are writing one page of the site. The shared CSS, header and footer already exist; you write the content that goes between them.\n\n${COMPOSITION_SUBSET}\n\n${COPY_CRAFT_SUBSET}

${DOCTRINE_FOR_PROMPTS}`,
    user: [
      section("FACTS", factsBlock(model)),
      section("IMAGES", imagesBlock(model)),
      section("STRATEGY", JSON.stringify(strategy, null, 1)),
      section("CONCEPT", conceptText(concept)),
      section("PAGES", pagesBlock(ctx.plan)),
      blueprint ? section("PAGE BLUEPRINT (follow this composition plan exactly)", JSON.stringify(blueprint, null, 1)) : "",
      section("SHARED CSS (already on every page; use its classes, extend it with a page <style> only when you need something new)", ctx.files.css),
      section("HEADER (already on every page)", ctx.files.header),
      section("FOOTER (already on every page)", ctx.files.footer),
      ctx.homeMain && spec.kind !== "home" ? section("THE HOME PAGE AS WRITTEN (continue its voice and patterns; do not copy its sections)", ctx.homeMain.slice(0, 9000)) : "",
      post ? section("THIS POST", `Title: ${post.title}\nExcerpt: ${post.excerpt}`) : "",
      section("RULES", `${sharedRules()}\n${factRules()}`),
      section("TECHNICAL CONTRACT", TECH_CONTRACT),
      section(
        "TASK",
        `Write the page for ${spec.path} (${spec.kind}: "${spec.title}"). This is a premium page: craft matters as much as completeness.

${PAGE_BRIEFS[spec.kind](spec, model)}

${spec.brief && spec.kind !== "custom" ? `OWNER'S NOTE FOR THIS REWRITE (follow it; FACTS still limit every claim): ${spec.brief}\n` : ""}
${blueprint ? `Follow the PAGE BLUEPRINT above precisely: use the specified layout families, density, theme, focal elements, image slots and transitions in order. Do not skip sections or reorder them (a page brief above is a content checklist; the blueprint sets the order). If the blueprint names a signature moment, make it visually unmistakable and mark its section data-sw-signature.` : ""}

Requirements:
- Write only the content of <main> (no html, head, body, header or footer elements, no script). One h1. Sections with real structure and variety, following the concept and the home page's patterns.
- Reuse the shared CSS classes. Add a single <style> block at the top of your markup only for page-specific layout. Never restate existing rules.
- Every link goes to a page in PAGES or to tel:/mailto:/#anchors/the review and maps links in FACTS. Use only image keys from IMAGES.
- The quote form follows the technical contract. Include it where the brief says so.
- No claim that is not in FACTS. No banned phrase. No filler.
- Apply COPY CRAFT: plain, specific, concrete. Headlines in the visitor's words, benefit-first. Name fears out loud then resolve them with facts. Vary sentence length. Reading level grade 7-8. Every section ends with a next step or transition, never a slogan. Button verbs match reality.
- Apply COMPOSITION rules: no two adjacent sections share the same layout family. Alternate loud → quiet → dense → breath. One focal point per screen. Test by squinting.

Return exactly these three tags and nothing else:
<sw-title>page title, 50-60 characters, specific</sw-title>
<sw-description>meta description, 120-155 characters</sw-description>
<sw-main>the page markup</sw-main>`
      ),
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

// ------------------------------------------------------------------ review

export function critiquePrompt(model: SiteModel, concept: Concept, pages: Array<{ path: string; viewport: string }>, issues: QaIssue[], passScore?: number): Prompt {
  return {
    system: `${BASE_SYSTEM}\n\nYou are now the harshest creative director and conversion reviewer in the studio. You judge the screenshots honestly against the weighted quality rubric. A mediocre site gets a mediocre score; you never flatter.`,
    user: [
      section("BUSINESS", `${model.name}, ${model.tradeLabel}${model.city ? ` in ${model.city}` : ""}.`),
      section("INTENDED CONCEPT", conceptText(concept)),
      section("SCREENSHOTS (in order)", pages.map((p, index) => `${index + 1}. ${p.path} at ${p.viewport}`).join("\n")),
      issues.length ? section("ALREADY FOUND BY AUTOMATIC CHECKS", issues.slice(0, 40).map((i) => `- [${i.severity}] ${i.path ?? "site"}: ${i.message}`).join("\n")) : "",
      section("QUALITY RUBRIC", formatRubricForPrompt(passScore)),
      section("WHAT TO JUDGE", `${DESIGN_RULEBOOK}\n${ANTI_SLOP}\n${DESIGN_TELLS}\n${MOTION_BUDGET}\n${MOTION_MINIMUMS}\nEvery tell you find costs points in distinctiveness; name each one and where it is. Service pages that share one skeleton (same section order, same opening) cost points in "Layout rhythm" and "Visual distinctiveness"; a long page without its own signature moment costs points in "Wow moment".`),
      section(
        "TASK",
        `Review the screenshots like a buyer comparing contractors on a phone, and like a design director scoring against the rubric above.

Score EACH rubric category 0-10 individually. Then compute the weighted overall score using the weights in the rubric. Also score each page 0-10.

For each category below its floor, list what specifically fails and how to fix it. List concrete defects: layout bugs, overlapping or cut-off elements, low contrast, weak hierarchy, a repeated generic pattern, an image used badly, empty areas, text too small, a missing or buried call to action, anything that looks AI-made. For each give the fix in one sentence a front-end engineer can act on.

Identify the TWO lowest-scoring categories — these will be the targets if the elevate pass runs.

Return exactly one <sw-review> tag containing JSON (no other text):
{"score": number, "categoryScores": [{"name": "category name", "score": number, "floor": number, "notes": ["what fails"]}], "lowestTwo": ["category name 1", "category name 2"], "pages": [{"path": "/", "score": number, "notes": ["short note"]}], "issues": [{"severity": "blocker" or "warning", "path": "/ or null for the whole site", "scope": "page" or "css", "message": "what is wrong", "fix": "what to change"}]}
Use "blocker" only for things that must be fixed before the site is shown to a customer (broken layout, unreadable text, missing call to action, a clear generic/machine look, or any category below its floor when the overall score is ≥${RUBRIC_ELEVATE_MIN}).`
      ),
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

/** Every page in full, in plan order, until about 90,000 characters; the rest are named so the model knows they exist and leaves them alone. */
function elevatePagesBlock(pages: Record<string, SitePage>): string {
  let budget = 90_000;
  const shown: string[] = [];
  const hidden: string[] = [];
  for (const [path, p] of Object.entries(pages)) {
    if (p.main.length <= budget) {
      shown.push(`### ${path}\nTitle: ${p.title}\n${p.main}`);
      budget -= p.main.length;
    } else hidden.push(path);
  }
  return shown.join("\n\n") + (hidden.length ? `\n\n(Not shown, do not change: ${hidden.join(", ")})` : "");
}

export function elevatePrompt(model: SiteModel, concept: Concept, files: Pick<SiteFiles, "css" | "header" | "footer" | "mobilebar">, pages: Record<string, SitePage>, lowestCategories: string[], critiqueNotes: string[], passScore?: number): Prompt {
  return {
    system: `${BASE_SYSTEM}\n\nYou are the elevate pass: a senior designer rewriting the weakest parts of a site to bring it above the publish threshold. You do NOT regenerate the entire site. You surgically improve the two lowest-scoring rubric categories with at least 3 concrete improvements each.`,
    user: [
      section("BUSINESS", `${model.name}, ${model.tradeLabel}${model.city ? ` in ${model.city}` : ""}.`),
      section("INTENDED CONCEPT", conceptText(concept)),
      section("LOWEST CATEGORIES TO ELEVATE", lowestCategories.join(", ")),
      section("CRITIQUE NOTES ON THESE CATEGORIES", critiqueNotes.join("\n")),
      section("CURRENT CSS", files.css),
      section("CURRENT PAGES", elevatePagesBlock(pages)),
      section("QUALITY RUBRIC", formatRubricForPrompt(passScore)),
      section("COMPOSITION RULES", COMPOSITION_SUBSET),
      section("COPY CRAFT", COPY_CRAFT_SUBSET),
      section("AI-SLOP TELLS", DESIGN_TELLS),
      section("MOTION AND EFFECTS (switch effects on only with these hooks; still no JavaScript)", `${MOTION_BUDGET}\n${MOTION_MINIMUMS}\n\n${effectsCatalogue()}`),
      section(
        "TASK",
        `Elevate the site by fixing the two lowest categories: ${lowestCategories.join(" and ")}.

Make AT LEAST 3 concrete, visible improvements per category. Do not rewrite sections that already score well. Do not make the site more generic. Do not add facts not in FACTS.

For CSS changes: return ONLY the new or changed CSS rules, each as a complete rule (selector, declarations, and its @media wrapper when it has one). They are added after the current stylesheet, so a restated selector replaces the earlier rule. Do not return the whole stylesheet.
For page changes: return the complete updated markup for each changed page.

Return exactly these tags and nothing else (one <sw-file> block per CHANGED page, complete markup, no JSON):
<sw-css>only the new or changed CSS rules (or an empty tag if no CSS changes)</sw-css>
<sw-file path="/the-page-path"><sw-title>...</sw-title><sw-description>...</sw-description><sw-main>the complete page markup</sw-main></sw-file>
<sw-elevations>["improvement 1", "improvement 2", ...]</sw-elevations>

The elevations list must name every concrete change made, tied to the rubric category it addresses.`
      ),
    ].join("\n"),
  };
}

export function truthPrompt(model: SiteModel, pages: Array<{ path: string; text: string }>): Prompt {
  return {
    system: `${BASE_SYSTEM}\n\nYou are the fact-checker. You compare website text with the facts sheet and flag every statement the facts do not support.`,
    user: [
      section("FACTS", factsBlock(model)),
      section("RULES", factRules()),
      section("PAGE TEXT", pages.map((p) => `### ${p.path}\n${p.text.slice(0, 6000)}`).join("\n\n")),
      section(
        "TASK",
        `Find statements about THIS business that FACTS does not support: invented years, numbers, licences, insurance, awards, guarantees or warranties, prices, response times, availability promises (24/7, same day), team size, customer counts, testimonials or quotes, named customers or projects, local landmarks or facts, founding stories, certifications or brands. General advice about the trade that is true everywhere is fine. A phone number, email, address, hours, rating or review count that differs from FACTS is an error.

Return exactly one <sw-truth> tag containing JSON (no other text):
{"unsupported": [{"path": "/services/x", "claim": "the exact words", "why": "why FACTS does not support it", "fix": "how to rewrite it using only FACTS, or remove it"}]}
If everything is supported, return {"unsupported": []}.`
      ),
    ].join("\n"),
  };
}

export function fixPrompt(spec: PageSpec, ctx: PageContext, current: { title: string; description: string; main: string }, issues: QaIssue[]): Prompt {
  const base = pagePrompt(spec, ctx);
  return {
    system: base.system,
    user: [
      base.user.split("## TASK")[0],
      section("CURRENT PAGE", `Title: ${current.title}\nDescription: ${current.description}\n\n${current.main}`),
      section(
        "PROBLEMS TO FIX",
        issues.map((issue, index) => `${index + 1}. [${issue.severity}] ${issue.message}${issue.fix ? `\n   Fix: ${issue.fix}` : ""}`).join("\n")
      ),
      section(
        "TASK",
        `Fix every problem above in the current page for ${spec.path}. Keep everything that works. Do not make the page more generic. Do not add facts. Where a problem is about copy (banned phrase, unsupported claim), rewrite it concretely from FACTS.

Return exactly these three tags and nothing else:
<sw-title>...</sw-title>
<sw-description>...</sw-description>
<sw-main>the complete corrected page markup</sw-main>`
      ),
    ].join("\n"),
  };
}

export function cssFixPrompt(model: SiteModel, concept: Concept, files: Pick<SiteFiles, "css" | "header" | "footer" | "mobilebar">, issues: QaIssue[]): Prompt {
  return {
    system: `${BASE_SYSTEM}\n\nYou are fixing the shared design system of a site after review.`,
    user: [
      section("BUSINESS", `${model.name} (${model.tradeLabel})`),
      section("CONCEPT", conceptText(concept)),
      section("CURRENT CSS", files.css),
      section("CURRENT HEADER", files.header),
      section("CURRENT FOOTER", files.footer),
      section("CURRENT MOBILE BAR", files.mobilebar),
      section("RULES", `${DESIGN_RULEBOOK}\n${TECH_CONTRACT}\n${DOCTRINE_FOR_PROMPTS}`),
      section("PROBLEMS TO FIX", issues.map((issue, index) => `${index + 1}. [${issue.severity}] ${issue.path ? `(${issue.path}) ` : ""}${issue.message}${issue.fix ? `\n   Fix: ${issue.fix}` : ""}`).join("\n")),
      section(
        "TASK",
        `Correct the problems in the shared CSS (and the header, footer or mobile bar markup when they are the cause). Keep the concept, the class names pages already use, and everything that works.

In <sw-css> return ONLY the CSS rules that are new or changed, each as a complete rule (its selector and all its declarations, inside its @media wrapper when it has one). Your rules are added after the current stylesheet, so a selector you restate replaces the earlier rule; to cancel something, restate the selector with the corrected declarations. Do not repeat rules that stay as they are, and do not return the whole stylesheet.
Return <sw-header>, <sw-footer> or <sw-mobilebar> only when that markup changes, and then complete.`
      ),
    ].join("\n"),
  };
}

export function editPrompt(
  model: SiteModel,
  concept: Concept,
  files: SiteFiles,
  plan: PageSpec[],
  instruction: string,
  visualEditContext?: import("../../types").VisualEditContext
): Prompt {
  const pageList = Object.entries(files.pages)
    .map(([path, page]) => `${path} - ${page.title}`)
    .join("\n");
  const editedPath = visualEditContext?.pagePath && files.pages[visualEditContext.pagePath] ? visualEditContext.pagePath : "/";

  // When the admin clicked a specific element in the visual editor, enrich the prompt
  // with that element's context so the AI knows exactly what to change.
  const visualContextSection = visualEditContext
    ? section(
        "VISUAL EDIT CONTEXT",
        `The owner clicked on this specific element in the visual editor and wants to change it:
Selector: ${visualEditContext.selector}
Page: ${visualEditContext.pagePath}
Current markup (truncated):
${visualEditContext.elementSnippet}
Visible text: ${visualEditContext.visibleText || "(none)"}

Apply the requested change to THIS SPECIFIC ELEMENT. Preserve all tokens ({{...}}), classes, and structural patterns. Only modify what was asked. Do not rewrite surrounding sections.`
      )
    : "";

  return {
    system: `${BASE_SYSTEM}\n\nYou are editing a finished site at the owner's request. You change exactly what they ask and keep everything else.${visualEditContext ? "\n\nIMPORTANT: The owner selected a specific element visually. Target your changes precisely to that element." : ""}`,
    user: [
      section("FACTS", factsBlock(model)),
      section("IMAGES", imagesBlock(model)),
      section("CONCEPT", conceptText(concept)),
      section("PAGES", pagesBlock(plan)),
      section("CURRENT PAGES", pageList),
      section("CURRENT CSS", files.css),
      section("HEADER", files.header),
      section("FOOTER", files.footer),
      section("MOBILE BAR", files.mobilebar),
      // The page the owner is looking at is given in full (it is the one most likely to change); the home page only sets the pattern.
      editedPath && files.pages[editedPath] ? section(`THE PAGE THE OWNER IS LOOKING AT (${editedPath})`, files.pages[editedPath]!.main.slice(0, 40000)) : "",
      editedPath !== "/" ? section("HOME PAGE", files.pages["/"]?.main.slice(0, 12000) ?? "") : "",
      section("RULES", `${sharedRules()}\n${factRules()}`),
      section("TECHNICAL CONTRACT", TECH_CONTRACT),
      visualContextSection,
      section(
        "REQUEST FROM THE OWNER",
        `${instruction}

Decide which pages and shared parts must change. Return only the files you changed, complete. For each changed page use a block <sw-file path="/the-path"><sw-title>..</sw-title><sw-description>..</sw-description><sw-main>..</sw-main></sw-file>. For shared parts use <sw-css>, <sw-header>, <sw-footer>, <sw-mobilebar>. If the request would need a claim FACTS does not support, do not add it; make the closest honest change and say so in one <sw-note>sentence</sw-note>.`
      ),
    ]
      .filter(Boolean)
      .join("\n"),
  };
}
