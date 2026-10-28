# appliance-B · Blueprint (Ohm & Hinge · verdict seam)

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | `t-fix` (seam copper/teal; bone strip <900) | "Fix or buy new?" answered in 3 taps; call ≤10 s | `seam-split` | kicker {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}; h1; Call [[call]] + sms model-tag; proof line {{proof.prices.0.from}}–{{proof.prices.0.to}} · {{proof.rating}} ({{proof.reviewCount}}) Sample · {{hours\|today}}; calculator card (chips with {{services.N.name}} + {{proof.prices.N.from/to}}) | none (LCP = text) | `data-sw-signature="verdict-seam"`, `data-hook="calc"` | CSS intro: copper field wipes from left 520ms, gold seam line draws 500ms; h1 static |
| 2 | `#lifespan` | `t-paper` | "Talked into a repair on a dying machine" | `pinned-dial` | 4 age steps 2/6/10/14 yrs with FIX/CALL/NEW + typical lifespans ruler | drawn washer outline | `data-hook="age-dial"` | ≥900 + motion: sticky dial, scrub age 0→15, seam 80%→20%; <900: stacked cards, clip reveal |
| 3 | `#symptoms` | `t-deep` (teal) | "Is it safe to wait? What do I check?" | `tabs-cards` | 5 tabs (fridge, washer, dryer, dishwasher, range): causes, one safe self-check, when to stop; hand-off prefills {{services.N.name}} + symptom | drawn part icons | `data-hook="symptom-finder"` | text rises (stagger 60ms) |
| 4 | `#services` | `t-paper` | "Do you fix mine?" every service | `index-list` | `<!-- each services -->` name, blurb, [[quote]] | none | none | still (quiet index) |
| 5 | `#prices` | `t-cream` (sand) | "$150 to look, then told to buy new" | `ruler-rows` | `<!-- each proof.prices -->` ruler bar from→to, note, FIX tag, Sample pricing; seam rule at the top edge | none | `data-hook="price-rulers"` | bars grow scaleX from left |
| 6 | `#rule` `.break` | `t-fix` (full-bleed seam band) | The 50% rule said out loud, before anyone sells | `statement` | "Fix it while it's young." (copper) / "Replace it when the math says so." (teal) + teal-duotone kitchen inset + caption | `hero` (hero-B2, inset, never full-bleed) | none | image unclips |
| 7 | `#tag` | `t-paper` | "Shows up without the part" | `hotspot-diagram` | 4 SVG outlines with typical tag spots; readout card; focus model field; sms photo of the tag | drawn outlines | `data-hook="tag-locator"` (hotspots) | still drawings, card fades |
| 8 | `#reviews` | `t-deep` (with copper seam field) | "Will they upsell me?" | `split-wall` | `<!-- each proof.reviews 0:4 -->` + `5:6` on copper (FIX), `4:5` on teal (NEW: Aisha's microwave); rating {{proof.rating}} · {{proof.reviewCount}} Sample | none | `data-hook="review-wipe"` | seam wipes in once (900ms), cards settle 60ms stagger |
| 9 | `#area` | `t-cream` | "Random call center? Day off work?" | `ledger` | {{biz.city}} + `<!-- each biz.areas -->`, ZIP check, {{hours\|table}}, {{biz.owner}}, {{proof.years}} Sample, {{proof.guarantee}} Sample | none | `data-hook="zip"` | still |
| 10 | `#contact` | `t-paper` | Book the visit with model + verdict carried | `form-split` | phone, sms, {{hours\|today}}; 4-step form (machine+symptom+verdict → model+age+ZIP → when → contact) | none | form | still |
| — | footer | `t-ink` | NAP, disclaimer, credits | — | {{demo.disclaimer}}, [[credits]], level seam (0°) | — | `data-hook="level-seam"` | none |

## Rhythm gate
- 10 sections; hero `min-height: calc(100svh - var(--header-h))`, #lifespan's top edge peeks (≥900). ✔
- Tones: color · light · dark · light · light · color · light · dark · light · light: never 3 alike, no dark pair. ✔
- `t-deep` ×2 (#symptoms, #reviews), colour bands ×2 (hero, #rule), `.break` = #rule (full-bleed seam band). ✔
- Hooks: verdict-seam (signature), calc, age-dial, symptom-finder, price-rulers, tag-locator, review-wipe, zip, level-seam. ✔
- 10 different layout families, no neighbours alike. ✔
- One `#contact`; CTAs → `#contact` or `tel:` (plus `sms:` for the model-tag photo). Mobile bar = Call | Text | Book. ✔
- Required content: 9 services (#services), area + ZIP (#area), hours + open-now (hero proof + #area + #contact), sample reviews tagged (#reviews), prices only in sample ruler block (#prices) + calculator output (Sample pricing), footer disclaimer + credits. ✔
- Signature in concept sections: hero (seam + tag), age-story (seam slides, tag flips), prices (seam rule + FIX tags), symptoms (12° copper/teal clipped corners + tags), reviews (split band + FIX/NEW tags), form (verdict line), footer (level seam). ✔

## Decisions (headless)
- The one photo (hero-B2) sits as the teal-duotone inset in the REPLACE field of the #rule seam band, not in the hero: the hero
  is color-led and the calculator needs the room; the photo still lives "in the replace field" as concept §6 asks. ogPhoto stays `hero`.
- The manifest alt for hero-B2 is a junk Wikimedia string: overridden in the `[[img]]` attrs.
- Mobile bar third button is "Book" (#contact), not "Check it": every CTA goes to #contact or tel/sms; the calculator is the hero.
- Age story uses CSS sticky + ScrollTrigger scrub inside `gsap.matchMedia('(min-width: 900px)')` (ScrollTrigger.matchMedia is deprecated in 3.13).
- Review split relies on facts order (review 4 = the "new one costs about the same" microwave review); a reskin must keep a NEW-leaning review at index 4.
- Gold is never used for words (user rule): tags CALL = gold fill with ink text; t-deep accent words are bone.

## Open issues
(none yet)

## Round 1
Photo + firstScreen elevate: the one library photo now sits ON the verdict seam (12° clipped frame, warm grade on the repair side, lighter teal grade on the replace side, gold seam line scrubbed across it), and three drawn seam plates (panel off → part → running/buy new) carry the visit sequence in #services, because no other approved, relevant frame exists in the manifest (A1/A3 off-topic, B1 a banned 3D render, A2 sibling's hero). The hero answers before any tap (washer · 5 yrs → FIX, seam preset at 72%), the h1 carries city + trade, and the hero is 80px shorter at ≥1024 so the lifespan band peeks. Lifespan story is now a sticky dial beside a scrolling card column (no empty spacer); reviews put the NEW card beside the headline; services rows lose the arrow links for specific targets; eyebrows are sentence-case Jakarta; copy-1 replacements applied.
