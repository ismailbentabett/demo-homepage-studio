# autobody-C · Concept

## 1. Three obvious concepts, rejected
- **Wet-look gloss.** Dark hero, water beading on black paint, "Protect your investment", ceramic tiers Bronze/Silver/Gold.
  Obvious: every detailing studio in Broward does it (brief §4.7), and it hides the collision half of the shop.
- **Coastal postcard.** Palm-tree hero, sunset gradient, script logo, "Your local Fort Lauderdale shine experts".
  Obvious: a template; "local" as wallpaper, says nothing about salt or the job.
- **Half-chalky / half-glossy slider everywhere.** One compare slider in the hero and on each service.
  Obvious: the brief's seed taken literally and a disguised before/after (banned on stock).

## 2. Thesis
**The page is a hull hauled out at the dock: a boot stripe runs along every section, and as you scroll the
gloss climbs down over the chalk until the whole page sits at the waterline.** Material: gel coat. Verb: draw (the stripe).
Arguable: it says cars and boats are one job (salt + UV on a finish), which a pure collision shop would dispute.

## 3. Signature system: "Boot Stripe"
Primitive: a double rule, navy 6px over coral 3px with 3px gap (the waterline stripe painted on a hull), always
ending at the left in a **bow chevron** (an SVG bow profile, 28×20) that serves as the section marker. Above the
stripe = finished surface (paper/teal, clean); below = "chalk" (the mid tone #E4DFD2 with a fine SVG stipple
at 6% opacity). Hook `data-sw-signature="boot-stripe"`, scroll var `--sw-p` draws it (scaleX from left).
| Section | Form / variation |
|---|---|
| hero | Stripe draws left→right across the whole hero at the bow mask's waterline; the h1 sits above it, the proof line below it. The bow mask itself is the chevron at hero scale. |
| seasons (story) | Stripe becomes the year's track: Nov→Oct month ticks hang under it, the bow chevron sails along it with scroll (`--sw-p` → translateX), each season's band tint changes above the line. |
| services "driveway / dock" | Stripe splits the section horizontally: car services above it (label "Driveway"), boat services below (label "Dock"); collision sits on the stripe itself as the line between them. |
| hull calculator | Stripe becomes a measuring rule along a drawn hull profile SVG; the hull stretches with the feet input (16-60 ft), ticks every 5 ft, mono numbers. |
| claim path | Stripe stands vertical as the left spine of the numbered steps; bow chevrons mark who acts (you / insurer / shop). |
| proof | Review cards sit on a dock line = the stripe; each card's top edge carries a 40px stripe stub, the bow chevron as quote mark. |
| footer | Full-bleed final waterline; above it hours + phone on paper, below it the chalk band with areas and the Sample disclaimer. |
Never in registry: "Waterline Visit Log" (pool-A) is a log list, "Tide Line Gauge" (flooring-C) a gauge; ours is a painted hull stripe dividing finish states.

## 4. Type
- Display **Instrument Serif** 400 (+ italic): condensed high-contrast serif, reads like the lettering on a nautical
  chart and a transom; italic for water and place names ("the canal dock", "{{biz.city}}"). 0 uses in registry.
- Text **Rethink Sans** (variable 400-800 + italic): refined grotesk with small quirks, open and legible at 18px on teal. (Hanken Grotesk was refused by check-unique: pair taken by tattoo-A.)
- Accent **JetBrains Mono** 500: chart soundings style for feet, months, sample prices, ZIPs only (≤ 13 words per screen).

## 5. Palette: "Intracoastal Teal + Gel-Coat White + Boot-Stripe Coral + Chart Navy"
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink (chart navy) | #0E2238 | paper #F6F3EC | 14.52 | body on light |
| muted | #4A5868 | paper #F6F3EC | 6.56 | captions |
| muted | #3F4F5E | chalk #E4DFD2 | 6.33 | captions on chalk |
| ink | #0E2238 | chalk #E4DFD2 | 12.09 | body on chalk |
| ink | #0E2238 | seafoam #D6E8E4 | 12.66 | body on seafoam |
| muted | #3F4F5E | seafoam #D6E8E4 | 6.63 | captions on seafoam |
| paper | #F6F3EC | teal #0F5E66 | 6.73 | body/h1 on teal field |
| foam | #D7ECE9 | teal #0F5E66 | 6.06 | muted on teal |
| coral-pale | #FFD9CF | teal #0F5E66 | 5.71 | accent words + focus on teal |
| paper | #F6F3EC | navy #0E2238 | 14.52 | body on deep |
| mist | #9FB3C4 | navy #0E2238 | 7.45 | muted on deep |
| coral-light | #FFB4A3 | navy #0E2238 | 9.43 | accent words + focus on deep |
| coral-ink (accent) | #9E3220 | paper / chalk / seafoam | 6.46 / 5.38 / 5.63 | accent words, links, focus on light tones |
| teal | #0F5E66 | paper / chalk / seafoam | 6.73 / 5.61 / 5.87 | headings accent on light |
| white | #FFFFFF | coral #B83A25 | 5.72 | primary button text |
| coral (signal) | #B83A25 | paper | 5.16 | ok for words, but used for button fill + stripe |
| coral #B83A25 | on teal | 1.30 | **never** on teal (no button, no words); stripe on teal uses navy+#FFB4A3 |
| coral #B83A25 | on navy | 2.81 | shapes only (stripe), button OK because label is white 5.72 |
| #E8644C | paper | 2.98 | **rejected**, rules only — not used |
| navy | on teal | 2.15 | **never for words**; navy stripe on teal is a shape only |

## 6. Hero family 13: shape-masked photo
Library count for 13 is 3 (cleaning-B, electrician-C, landscaper-C): over the cap like every family; brief §6 assigns 13, noted and accepted.
Cliché breaker: the mask is not a soft blob/arch; it's a **hull bow in profile** (sheer line, stem rake, flat bottom
line) bleeding off the right edge at ≥ 900px, with the boot stripe painted ON the mask at its waterline and
continuing out across the page under the h1. Below the stripe the photo is overlaid by the chalk stipple veil
(drawn texture, clearly graphic) that wipes off on intro. On 390 the bow sits under the h1 as a 16:10 band.
If no honest hull photo exists, the mask holds the drawn hull (SVG, gel-coat white with stripe, on teal) — the page still works.

## 7. Motion score
- **Intro (≤ 1.1 s):** h1 lines mask up (70ms stagger, 700ms); the boot stripe draws left→right 600ms starting at 200ms; the chalk veil below the stripe wipes right (clip-path, 700ms). Text readable from first paint; click/scroll/key ends it.
- **Story 1, seasons (verb: slide):** pinned ≥ 640px (4 seasons → 4×55svh+100svh); the month rail translates X, bow chevron rides the stripe, band tint crossfades per season. < 640px: stacked season cards with clip reveal.
- **Story 2, hull calc (verb: stretch):** the hull SVG scales in X to the length input (transform, 200ms ui ease), the stripe ticks redraw.
- **Hover (one language):** the boot stripe's coral line grows under links/cards scaleX 0→1 from left, 200ms; cards lift 0.
- **Reduced motion:** stripes drawn at full, no pin (seasons as a static 4-column/stacked grid), veil absent, hull at input size with no tween.

## 8. Tools
1. **Hull size calculator** — `estimator`. Inputs: length in ft (range 16-60 + number), oxidation light/medium/heavy. Output: sample range from `proof.prices[0]` per-foot × length (Sample tag) + "your number after a look at the hull". Hand-off: "Price my hull" → form prefilled service=Gel coat oxidation removal, notes="{len} ft, {level}".
2. **Restoration planner** — `checklist`. Inputs (≤ 5): car or boat; parked outside / under carport or garage (boat: in the water / on a lift or trailer); swirls or water spots; chalky or faded; goal sell / keep. Output line: "Correction, then coating" / "Gel coat compound, then coating" / "Correction only" + sample ranges from prices[1]/[2]. Hand-off: "Plan it with us" → form service prefilled.
3. **Claim path** — `tabs`. Tabs: someone hit me / my fault / storm limb or flood / parking lot, no other car. Panel: 4-6 numbered steps on a vertical stripe, who acts (You / Insurer / {{biz.short}}), "You choose the shop" first. No day counts (not in facts): steps say "same day" only where a review fact supports photos same afternoon; else no timing. Hand-off: "Send photos" → form service=Insurance claim help.
4. **ZIP checker** — `zip`, in the seasons/area band; yes → form with ZIP.
5. **Quote form** — `form` 4 steps: what (service chips) → car or boat → photos (optional) + note → name/phone/contact pref. Microcopy: "We text back with a range, then set a look."

## 9. Voice
- "Salt doesn't care whether it's sitting on a hood or a hull. Neither do we."
- "We polish one test spot first, so you see the shine before we touch the rest."
- "Your insurer can recommend a shop. You still choose one."
Never: "premium", "pristine", "showroom", "luxury", "trust".
