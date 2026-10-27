// Banned words and phrases, shared by validate-niche (facts text) and check-static (page text).
//
// Two lists:
//   SLOP_PHRASES  machine-written marketing copy (from reference/sitewright-prompts/rulebook.ts). Always banned.
//   DEMO_RULES    claims a demo may not make (docs/DEMO-RULES.md §4). Some are allowed when facts.json makes them true.
//
// Use findBanned(text, facts) -> [{ id, label, match, index }]. Matching is case-insensitive, whole words.

export const SLOP_PHRASES = [
  "welcome to", "passionate about", "passion for", "cutting-edge", "cutting edge", "state-of-the-art",
  "state of the art", "world-class", "world class", "second to none", "second-to-none", "one-stop shop",
  "one stop shop", "dedicated team of professionals", "dedicated team", "team of experts", "unparalleled",
  "unmatched", "elevate your", "elevating", "seamless", "seamlessly", "game-changer", "game changer",
  "revolutionize", "transform your home", "transform your space", "take your .{1,30} to the next level",
  "in today's fast-paced", "look no further", "your trusted partner", "trusted partner",
  "commitment to excellence", "excellence in everything", "exceeding expectations", "exceed your expectations",
  "customer satisfaction is our top priority", "customer satisfaction is our priority", "peace of mind",
  "no job too big or too small", "no job too big or small", "no job is too big", "we pride ourselves",
  "pride ourselves", "our mission is", "your satisfaction is", "tailored solutions", "tailored to your needs",
  "comprehensive solutions", "holistic", "synergy", "leverage", "delve", "tapestry", "testament to",
  "realm of", "navigate the", "stands as", "embark on", "journey", "ever-evolving", "top-notch", "top notch",
  "premier", "reliable and affordable", "quality workmanship you can trust", "quality workmanship",
  "built on trust", "where quality meets", "your vision", "bring your vision to life", "dream home",
  "hassle-free", "stress-free", "with ease", "lorem ipsum", "why choose us", "why work with us",
  "our commitment", "we understand", "we know how important", "rest assured", "you deserve", "don't settle",
  "the difference is", "experience the difference", "family-owned and operated", "locally owned",
  "serving the community", "years of experience", "highly trained", "fully licensed and insured",
  "satisfaction guaranteed", "free consultation", "competitive pricing", "affordable prices",
  "best in the business", "number one", "award-winning", "certified professionals", "industry-leading",
  "unbeatable", "guaranteed results", "we are passionate", "quality you can trust", "transform", "elevate",
];

// Phrases that count as "highly recommend" (at most once per niche in reviews).
export const HIGHLY_RECOMMEND = /\bhighly recommend(ed|s|ing)?\b/gi;

// Demo-safety claims. `unless(facts)` returns true when facts.json makes the claim true (then it is allowed).
// `allow` lists regexes tested on the text around a match: a hit means the use is harmless (e.g. "works best").
export const DEMO_RULES = [
  { id: "licensed", label: "licensed (only with proof.license, via the token)", re: /\blicen[cs]ed\b/gi, unless: (f) => !!f?.proof?.license },
  { id: "bonded", label: "bonded", re: /\bbonded\b/gi },
  { id: "insured", label: "insured (only when proof.insured is true)", re: /\binsured\b/gi, unless: (f) => f?.proof?.insured === true },
  { id: "certified", label: "certified / certification", re: /\bcertifi(ed|cation|cations)\b/gi },
  { id: "accredited", label: "accredited", re: /\baccredit(ed|ation)\b/gi },
  { id: "guarantee", label: "guarantee / guaranteed (only with proof.guarantee)", re: /\bguarantee(d|s)?\b/gi, unless: (f) => !!f?.proof?.guarantee },
  { id: "warranty", label: "warranty (only with proof.guarantee)", re: /\bwarrant(y|ies)\b/gi, unless: (f) => !!f?.proof?.guarantee },
  { id: "financing", label: "financing", re: /\bfinanc(ing|ed)\b/gi },
  { id: "apr", label: "0% APR", re: /\b0\s?%\s*APR\b|\bAPR\b/gi },
  { id: "24-7", label: "24/7", re: /\b24\s*\/\s*7\b|\b24-7\b|\b24 hours a day\b|\bround[- ]the[- ]clock\b/gi, unless: allDayEveryDay },
  { id: "same-day", label: "same-day", re: /\bsame[- ]day\b/gi },
  { id: "emergency", label: "emergency as a promise (only when biz.emergency is true)", re: /\bemergenc(y|ies)\b/gi, unless: (f) => f?.biz?.emergency === true },
  { id: "award", label: "award / award-winning", re: /\baward(s|ed|-winning)?\b/gi },
  { id: "number-one", label: "#1 / number one", re: /#\s?1\b|\bnumber one\b|\bno\.\s?1\b/gi },
  {
    id: "best", label: "best (as a claim)", re: /\bbest\b/gi,
    allow: [/\b(works?|worked|fits?|suits?|looks?|done|do|does|serve[sd]?|holds?|knows?|lasts?|reads?) best\b/i,
      /\bbest (time|times|way|ways|fit|guess|bet|to|for|if|when|before|left|move|first|next|order|light|days?|months?|season)\b/i,
      /\bat best\b/i, /\bbest[- ]case\b/i, /\byour best\b/i],
  },
  { id: "top-rated", label: "top-rated", re: /\btop[- ]rated\b/gi },
  { id: "voted", label: "voted", re: /\bvoted\b/gi },
  { id: "a-plus", label: "A+ rating", re: /\bA\+\s*(rating|rated)?/g },
  { id: "bbb", label: "BBB / Better Business Bureau", re: /\bBBB\b|\bbetter business bureau\b/gi },
  { id: "directories", label: "Angi / HomeAdvisor / Thumbtack / Yelp badges", re: /\bangi\b|\bangie'?s list\b|\bhome ?advisor\b|\bthumbtack\b|\byelp\b/gi },
  { id: "eco", label: "eco-friendly / green claims", re: /\beco[- ]?friendly\b|\bgo(ing)? green\b|\bgreen (company|business|choice|products?|practices|solutions?|cleaning|energy|building|certified|methods?)\b/gi },
  { id: "family-owned", label: "family-owned (only when biz.familyOwned is true)", re: /\bfamily[- ](owned|run|operated)\b/gi, unless: (f) => f?.biz?.familyOwned === true },
  { id: "since-year", label: "since <year> (only when proof.years exists)", re: /\bsince (19|20)\d\d\b/gi, unless: (f) => !!f?.proof?.years },
  { id: "years-in-business", label: "<N> years in business / of experience (only from proof.years)", re: /\b(\d+|one|two|three|four|five|ten|twenty|thirty|forty|fifty)\+?\s+years?\s+(of\s+)?(experience|in business|in the trade|serving|on the job)\b|\b(over|more than)\s+\d+\s+years\b/gi, unless: (f) => !!f?.proof?.years },
  { id: "free-estimate", label: "free estimate (say \"Price it\" / \"Get a number\")", re: /\bfree (estimates?|quotes?|inspections?)\b/gi },
];

// True when hours say open around the clock every day (the only way "24/7" is true).
function allDayEveryDay(f) {
  const h = f?.biz?.hours;
  if (!h) return false;
  return ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].every((d) => Array.isArray(h[d]) && h[d][0] === "00:00" && h[d][1] >= "23:59");
}

// Trade terms that contain a slop word but are real products ("seamless gutters").
const SLOP_ALLOW = {
  seamless: [/\bseamless (gutters?|steel|aluminum|siding|flooring|floors?|showers?|glass|epoxy|countertops?|tile)\b/i],
};

const slopRegexes = SLOP_PHRASES.map((p) => ({
  id: `slop:${p}`,
  label: `"${p}" (machine-written phrase)`,
  allow: SLOP_ALLOW[p],
  // phrases may contain regex (".{1,30}"); escape everything else
  re: new RegExp(`(?<![\\w-])${p.split(".{1,30}").map(escapeRe).join(".{1,30}")}(?![\\w-])`, "gi"),
}));

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Find every banned word/phrase in text. `facts` lets conditional claims through when they are true.
// Options: { skip: ["guarantee", ...] } ignores those rule ids (e.g. in the field that states the fact).
export function findBanned(text, facts = null, { skip = [] } = {}) {
  const hits = [];
  if (!text) return hits;
  const s = String(text);
  for (const rule of [...DEMO_RULES, ...slopRegexes]) {
    if (skip.includes(rule.id)) continue;
    if (rule.unless && facts && rule.unless(facts)) continue;
    rule.re.lastIndex = 0;
    let m;
    while ((m = rule.re.exec(s))) {
      const around = s.slice(Math.max(0, m.index - 20), m.index + m[0].length + 20);
      if (!(rule.allow || []).some((a) => a.test(around))) {
        hits.push({ id: rule.id, label: rule.label, match: m[0], index: m.index });
      }
      if (m[0].length === 0) rule.re.lastIndex++;
    }
  }
  // "transform"/"elevate" also match inside longer slop phrases; keep only one hit per position
  const seen = new Set();
  return hits.filter((h) => {
    const k = `${h.index}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

// Any dollar amount in text ("$350", "$ 9,500").
export const DOLLAR_RE = /\$\s?\d[\d,]*(\.\d+)?/g;
