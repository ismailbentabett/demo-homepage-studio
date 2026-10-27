// Design doctrine distilled from the leading design skills (Oct 2026):
// Anthropic frontend-design, taste-skill / design-taste-frontend, Impeccable,
// emil-design-eng, interface-design, Vercel web-interface-guidelines,
// UI UX Pro Max. The gateway cannot load skills, so their rules live here.
// high-end-visual-design was left out: it promotes the tells listed below.

export const DESIGN_TELLS = `
AI-SLOP TELLS (a site showing any of these reads as machine-made; never produce them)

2023-24 wave
- Violet/indigo/purple-to-pink gradients, gradient text, aurora or mesh blobs.
- Glass: frosted/backdrop-blur panels, glowing or gradient buttons, glow shadows.
- A soft shadow on every card; cards inside cards; a bordered rounded box around everything; a coloured left stripe on cards.
- Three identical icon-in-rounded-square cards as the default features section. Emoji as icons.
- The centered hero: pill badge, giant centered headline, grey subtitle, two buttons.

2025 wave
- Eyebrow/kicker labels or pill badges above headlines ("OUR SERVICES", "✦ Trusted locally").
- One accent word in a heading set in italic serif, a different colour or a hand-drawn underline.
- Bento grids; near-black background with a neon accent and glow; a floating pill nav with blur.
- Pulsing status dots; fade-and-rise on every section; hover lift on every card; bounce easing.

2025-26 wave
- Cream background + terracotta/rust as a "tasteful" default; a serif display face used only to look premium.
- Broadsheet hairlines with zero radius everywhere; performative labels ("Field notes", "Quietly trusted by", "Est. 2024").

Gallery fashion
- Monospace micro-labels; index numbering (01 / 02, "Step 02") as decoration. Use a real <ol> only for real sequences.
- 3+ hairline-outlined boxes in a row; design-tool chrome (fake cursors, frames, rulers).
- Micro-meta strings joined by middle dots ("Roofing · Since 1998 · Austin"); a "Scroll" cue; 3+ tiny tracked uppercase captions on a page.

Copy tells
- Genre verbs and adjectives: unlock, unleash, supercharge, elevate, empower, streamline, transform your, seamless, effortless, robust, cutting-edge, next-generation, world-class, all-in-one, "Welcome to".
- "Not just X, it's Y" corrections; tricolon headlines ("Fast. Fair. Local."); "Get started", "Learn more", "Submit" buttons.
- Arrows on every link (one arrow at most, on the primary button). More than a handful of em dashes on a page.
- Captions that narrate the design. Always exactly three items: use the number the content has.
- Any sentence another company could print unchanged. Invented stats, logos or testimonials.
`;

export const DESIGN_DOCTRINE = `
DESIGN DOCTRINE (what the best designers do instead)

Composition
- One focal point on the first screen; the hero photo or colour field covers at least half of it. Off-centre beats centred.
- Hero headline about 5 words; any headline at most 2 lines. Every section has a heading and ONE job.
- Neighbouring sections use different compositions; avoid the stock order (hero, features, testimonials, CTA).
- The gap between sections is clearly larger than gaps inside a section. Equal outer margins. No blank gap taller than half a screen.
- Removing ornament is not enough: fill space with scale, real content, a real photo or a flat colour field.
- Under 72% of text centred; never centre a paragraph longer than 3 lines; never justify.

Type
- At most 2 families, at most 5 sizes, far apart on a ratio scale. Weight and colour carry hierarchy as well as size.
- Never Inter, Roboto, Arial or system-ui as the display face.
- Display: tracking -0.02 to -0.05em, line-height 0.85-1.05 (1.15 max). Body 16-20px, line-height 1.45-1.6, 45-75 characters per line, full ink (not grey).
- text-wrap: balance on headings, pretty on paragraphs; tabular-nums for prices, phones and figures.
- All caps only for 3 words or fewer, tracking 0.02-0.06em. Nothing under 13px.
- Real characters: curly quotes, … ellipsis, en dash for ranges (8–10am), &nbsp; between a number and its unit.

Colour and surface
- One ground, one ink, one accent (about 60/30/10). The accent marks the action. Colours come from the trade's world.
- Neutrals tinted toward the brand hue; avoid pure #000 text on pure #fff.
- Separate surfaces with a tone step, not lines or shadows. Shadows only on things that float.
- Corners: square or fully round, chosen once; never 12-16px radius on everything. Nested radius is concentric (outer = inner + padding).

Motion
- One signature system per site (a motif carried through hero, scroll story, cards and footer). Animate only transform, opacity and clip-path; never "transition: all".
- Ease-out cubic-bezier(0.23,1,0.32,1); ease-in-out cubic-bezier(0.77,0,0.175,1); never ease-in for UI. UI motion under 300ms.
- Press feedback scale(0.97); never animate from scale(0). Hover effects inside @media (hover:hover).
- prefers-reduced-motion removes movement. Content is never hidden waiting for a reveal.

Craft
- Every interactive element has hover, active, focus-visible and disabled states; hit areas at least 44px.
- Nav: wordmark, 3-5 links, one action. The footer is a designed close, not a link dump.
- Buttons name the action in 1-3 words ("Call now", "Get my quote"); the primary action keeps one name everywhere.
- Phone numbers are tel: links; inputs have real labels, the right type/autocomplete and 16px+ text.
- Images carry width/height or aspect-ratio; hero image eager, others lazy.

Process
- Before writing, name the direction (purpose, tone, the one memorable thing) and fix the tokens first.
- After writing, review your own output against AI-SLOP TELLS and the brief; rewrite anything generic before answering.
`;

export const DOCTRINE_FOR_PROMPTS = `${DESIGN_TELLS}\n${DESIGN_DOCTRINE}`;
