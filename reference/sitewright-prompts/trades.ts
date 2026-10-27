/**
 * What a homeowner in each trade is thinking, what they fear, and what proves a contractor is real. Used by the strategy and concept
 * prompts so the site speaks to the right person. These are buyer-psychology notes, not facts about any business.
 */
export type TradePlaybook = {
  key: string;
  match: RegExp;
  buyer: string;
  fears: string[];
  triggers: string[];
  proof: string[];
  designNotes: string;
  questions: string[];
};

export const TRADE_PLAYBOOKS: TradePlaybook[] = [
  {
    key: "roofing",
    match: /roof|shingle|gutter|siding|soffit/i,
    buyer: "A homeowner with a leak, storm damage or a roof at the end of its life, often an insurance claim in motion, who cannot judge the work from the ground.",
    fears: ["Storm chasers who vanish after a deposit", "A repair that fails after the first rain", "Surprise costs once the old roof is off", "Mess, nails in the yard, damaged landscaping"],
    triggers: ["Active leak or missing shingles after a storm", "A quote from someone else that felt off", "Selling or insuring the house", "The roof is 15-25 years old"],
    proof: ["Photos of finished roofs in the area", "How the crew protects the property and cleans up", "What a roof inspection includes", "Local towns served"],
    designNotes: "Solid, grounded, trustworthy. Big roof photography with clear skies; strong ink + one action colour; sturdy type. Emergency repair should be impossible to miss.",
    questions: ["How do I know if I need a repair or a full replacement?", "Will you work with my insurance company?", "How long does a roof replacement take?", "What happens if it rains mid-job?", "What shingles or materials do you use?"],
  },
  {
    key: "plumbing",
    match: /plumb|drain|sewer|water heater|pipe|septic/i,
    buyer: "Someone with water where it should not be or no hot water, who wants a person to answer and show up now, and who dreads being upsold.",
    fears: ["Being overcharged in an emergency", "A strange person in the house", "A fix that does not last", "Hidden fees"],
    triggers: ["Burst pipe, backed-up drain, no hot water", "A dripping fixture that has become a habit", "A remodel that needs new lines"],
    proof: ["Clear answer on how a call is handled", "Real photos of the crew and trucks", "Explain how pricing is given before work starts (only if FACTS supports it)", "Towns served"],
    designNotes: "Calm and clear for a stressful moment: high-contrast call button, short paths, practical language. A water-blue is cliche; pick a distinctive palette.",
    questions: ["Do you offer emergency service?", "How is the price decided?", "Can you fix a leak without tearing up the wall?", "Do I need a new water heater or a repair?"],
  },
  {
    key: "hvac",
    match: /hvac|heating|cooling|air condition|furnace|heat pump|\bac\b/i,
    buyer: "A homeowner whose system died in the wrong season, or who is tired of high bills, deciding between repair and replace.",
    fears: ["Being sold a system they do not need", "A tech who cannot explain the problem", "Comfort lost for days"],
    triggers: ["No cooling in a heat wave or no heat in a freeze", "A noisy or short-cycling system", "A system older than 12-15 years"],
    proof: ["How a diagnosis is explained", "Brands and options (only if FACTS lists them)", "Maintenance plans only if in FACTS", "Towns served"],
    designNotes: "Seasonal confidence, clean and technical-but-friendly; comfort imagery from the client's own photos.",
    questions: ["Should I repair or replace my system?", "How long does an install take?", "What size system do I need?", "How often should I service it?"],
  },
  {
    key: "electrical",
    match: /electric|wiring|panel|generator|lighting/i,
    buyer: "A homeowner worried about safety or a failed inspection, who wants someone licensed and tidy.",
    fears: ["Fire or shock risk", "An unlicensed worker", "Walls cut open and not repaired", "Surprise permit costs"],
    triggers: ["Flickering lights, tripped breakers, dead outlets", "An old panel", "EV charger, generator or remodel"],
    proof: ["Licence details only if in FACTS", "Photos of tidy panel and wiring work", "Explanation of permits and inspections"],
    designNotes: "Precise and safe: crisp grid, technical details, a single sharp accent colour used like a warning label.",
    questions: ["Do I need a permit?", "Is my panel safe?", "How long without power during an upgrade?"],
  },
  {
    key: "landscaping",
    match: /landscap|lawn|garden|turf|sod|irrigation|mow|hardscape|patio|paver/i,
    buyer: "A homeowner who wants the yard to look right and to stop worrying about it, or who is planning a bigger outdoor project.",
    fears: ["No-shows and uneven quality", "A design that looks nothing like the picture", "Plants that die", "Costs that creep"],
    triggers: ["Seasonal start-up", "A new home or a hosting season", "A neglected yard that embarrasses them"],
    proof: ["Before/after style photos only if provided", "A clear seasonal rhythm of work", "Towns served"],
    designNotes: "Organic but not cute: texture, natural palette, editorial photography, generous space; a garden-like rhythm of sections.",
    questions: ["How often will you visit?", "Can you design the whole yard?", "What does a project cost to start?"],
  },
  {
    key: "painting",
    match: /paint|stain|drywall|wallpaper|coating/i,
    buyer: "A homeowner investing in how the home feels, wary of sloppy prep and colour regrets.",
    fears: ["Drips and bad lines", "Furniture and floors damaged", "Paint that peels in a year", "Never finishing"],
    triggers: ["Selling soon", "A big colour change", "Water damage or peeling"],
    proof: ["Close-up photos of crisp lines", "How surfaces are prepared", "Colour consultation if offered in FACTS"],
    designNotes: "Colour-confident and refined; let the work's colour carry the palette; fine typography and whitespace.",
    questions: ["How do you prepare the walls?", "Do you move the furniture?", "How long will it take?"],
  },
  {
    key: "remodeling",
    match: /remodel|renovat|general contract|kitchen|bath|addition|builder|carpent|cabinet|basement/i,
    buyer: "A homeowner about to spend a lot and live through disruption, who needs to trust the person in their house for weeks.",
    fears: ["Budget blowouts", "Months over schedule", "A contractor who disappears", "Living in dust"],
    triggers: ["Outdated kitchen or bath", "A growing family", "A move-in or a sale"],
    proof: ["Project photos", "How communication and scheduling work", "The step-by-step process from estimate to cleanup"],
    designNotes: "Editorial and premium: big project photography, calm palette, serif or refined grotesk, clear process timeline.",
    questions: ["How does the estimate process work?", "How do you handle changes?", "How long will my project take?"],
  },
  {
    key: "concrete",
    match: /concrete|asphalt|paving|driveway|masonry|brick|stone|foundation|excavat/i,
    buyer: "A homeowner with a cracked, sinking or ugly surface who wants it done right once.",
    fears: ["Cracks after a year", "A messy site", "Pricing that is vague"],
    triggers: ["Cracking or pooling water", "A new build, pool or addition"],
    proof: ["Finished surface photos", "Prep and base work described", "Curing and timeline explained"],
    designNotes: "Raw, tactile, industrial materials: grid, texture, heavy type, restrained colour.",
    questions: ["How long before I can drive on it?", "How do you prevent cracks?", "Do you remove the old surface?"],
  },
  {
    key: "fence-deck",
    match: /fence|fencing|deck|pergola|gate|railing/i,
    buyer: "A homeowner who wants privacy, a safe yard for kids or pets, or an outdoor room, and a straight price.",
    fears: ["Wrong property lines or permits", "Leaning posts", "Long delays"],
    triggers: ["New pet or pool", "Storm damage", "A neighbour dispute"],
    proof: ["Photos of completed fences or decks", "Materials explained", "Permit and utility-marking handled"],
    designNotes: "Crafted and warm: wood-grain textures in CSS, strong lines, a visual rhythm borrowed from pickets or boards.",
    questions: ["Do I need a permit?", "Wood or vinyl?", "How long will it last?"],
  },
  {
    key: "cleaning",
    match: /clean|maid|janitor|pressure wash|power wash|window wash|carpet/i,
    buyer: "A busy household or owner who wants a reliable, trustworthy person in the house or on the property.",
    fears: ["Strangers in the house", "Damage or missed spots", "Bait-and-switch pricing"],
    triggers: ["Move-in/out, hosting, or a regular schedule"],
    proof: ["How a visit works step by step", "What is included", "Towns served"],
    designNotes: "Fresh and light with clear contrast, human warmth, simple booking path.",
    questions: ["What is included?", "Do I need to be home?", "Do you bring supplies?"],
  },
  {
    key: "pest",
    match: /pest|termite|rodent|exterminat|mosquito|wildlife/i,
    buyer: "A homeowner who found something crawling and wants it gone safely, today.",
    fears: ["Chemicals around kids and pets", "The problem coming back", "Embarrassment"],
    triggers: ["A sighting", "Seasonal return", "A home purchase inspection"],
    proof: ["How treatment works and how safety is handled", "Follow-up visits only if in FACTS"],
    designNotes: "Discreet and reassuring; clear, calm layout; strong call path.",
    questions: ["Is it safe for pets?", "How fast does it work?", "Will they come back?"],
  },
  {
    key: "tree",
    match: /tree|stump|arborist|lot clearing/i,
    buyer: "A homeowner with a dangerous or unwanted tree who worries about damage to the house and about cost.",
    fears: ["Damage to roof or fence", "A crew without insurance", "Mess left behind"],
    triggers: ["A storm, a leaning tree, or a neighbour's complaint"],
    proof: ["Equipment and method described", "Cleanup explained", "Photos of work"],
    designNotes: "Strong, outdoorsy, rugged; heavy type and big photos.",
    questions: ["Do you haul everything away?", "Can you grind the stump?", "Do you work after storms?"],
  },
  {
    key: "garage-door",
    match: /garage|overhead door|door repair/i,
    buyer: "A homeowner whose door is stuck or unsafe and who wants same-day help and a fair price.",
    fears: ["Springs that injure", "Pushy upsell"],
    triggers: ["Broken spring, off-track door, opener failure"],
    proof: ["Photos of installs", "How repair vs replace is decided"],
    designNotes: "Bold and quick; emergency call front and centre.",
    questions: ["Repair or replace?", "How long does it take?"],
  },
  {
    key: "flooring-windows",
    match: /floor|tile|window|door install|glass|insulation|solar|pool/i,
    buyer: "A homeowner planning a visible upgrade, comparing options and installers.",
    fears: ["Wrong product", "Poor install", "Delays"],
    triggers: ["Renovation, energy bills, selling"],
    proof: ["Install photos", "Options explained", "Process"],
    designNotes: "Product-forward and tactile; strong photography and material textures.",
    questions: ["How long will the install take?", "What options fit my home?"],
  },
  {
    key: "handyman",
    match: /handyman|repair|maintenance|odd job|fix/i,
    buyer: "A homeowner with a list of small jobs who wants one dependable person.",
    fears: ["No-shows", "Half-finished jobs", "Surprise hourly charges"],
    triggers: ["A growing to-do list, a move, a sale"],
    proof: ["Range of jobs actually done", "How scheduling works"],
    designNotes: "Friendly and practical; a visible list of jobs, a personal voice.",
    questions: ["What jobs do you take?", "How do you price small jobs?"],
  },
];

export const GENERIC_PLAYBOOK: TradePlaybook = {
  key: "home-services",
  match: /./,
  buyer: "A local homeowner who needs a job done properly, by someone who shows up, and who has been burned before.",
  fears: ["No-shows", "Poor workmanship", "Hidden costs", "Mess"],
  triggers: ["A problem that cannot wait", "A planned improvement"],
  proof: ["Photos of real work", "The towns served", "How the job is done"],
  designNotes: "Confident, clear and local.",
  questions: ["How does the estimate work?", "How soon can you start?", "What areas do you serve?"],
};

export function playbookFor(...labels: Array<string | undefined | null>): TradePlaybook {
  const text = labels.filter(Boolean).join(" ");
  return TRADE_PLAYBOOKS.find((book) => book.match.test(text)) ?? GENERIC_PLAYBOOK;
}

export function describePlaybook(book: TradePlaybook): string {
  return [
    `Trade lens (${book.key}):`,
    `- Buyer: ${book.buyer}`,
    `- Fears: ${book.fears.join("; ")}`,
    `- What sends them looking: ${book.triggers.join("; ")}`,
    `- Proof that works: ${book.proof.join("; ")}`,
    `- Design mood: ${book.designNotes}`,
    `- Questions they ask: ${book.questions.join(" | ")}`,
  ].join("\n");
}
