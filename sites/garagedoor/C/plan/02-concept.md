# garagedoor-C · Concept

## 1. Three obvious concepts, rejected
- **Snowy hero video + "24/7 Emergency" badge + service icon grid.** Every chain franchise. Also family 1 is at its library max (pool-A, general-A), so the brief's seed hero is closed. Rejected.
- **The thermometer rail (brief seed taken literally).** A vertical mercury gauge down the left edge. mechanic-C already shipped "Car-Year Thermometer Rail"; it would read as a reskin. Rejected.
- **Weather-app dashboard** (forecast cards, live temperature widget). Template-y, needs fake live data, fights the call action. Rejected.

## 2. Thesis
The page is an Omaha winter morning stamped in degrees: every section is struck with its temperature like a road-sign numeral, and frost creeps in from the edges the colder the reading gets.

## 3. Signature system: Degree Stamp + Frost Edge (`data-sw-signature`)
Primitive = `.stamp` (Arvo 700 numeral + `°F` superscript in a 2px rule box, tabular nums) + `.frost` (SVG crystal edge, `--cold` 0–1 sets mask depth 0–28px).
- **Hero:** giant "−8°" in Arvo 700 (~38vw desktop) is the type mask showing the blue-hour snow photo; frost clears from the centre on load. Real h1 is set below it in plain text.
- **Story (pinned, ≥640px):** "Omaha's year, in four readings": 104°F opener motor overheats → 88°F hail (May–July) → 34°F bottom seal freezes → −8°F springs snap. The stamp counts down, `--cold` 0 → .35 → .7 → 1 grows the frost on the scene frame. Each scene: problem, what we do (services blurb), sample range, call button.
- **Proof:** review cards each carry a small stamp of their season ("−6°F · January" for Megan T., from her text; others use the season of their service: Hail "May", Frozen door "ice storm", Fall tune-up "October"). Only words from the review text.
- **Prices:** sample price sheet as a weather table, coldest row first, each row led by its stamp.
- **Tools:** checklist score shows as a stamp ("4/6 ready"), frost leaves each ticked row.
- **Footer:** "0°" brand stamp (Zero Degree) large; on hover/focus it thaws to amber.
Variation: size (38vw → 4rem → 1.5rem), colour (frost white on blue, deep on paper, amber in footer), frost depth by temperature.

## 4. Type
Display **Arvo** (geometric slab, 400/700; stamped road-sign and feed-store numerals, the degree digits are its best glyphs) + text **Libre Franklin** (variable 100–900; the Franklin Gothic of Midwestern newspapers and weather pages). No accent face: Libre Franklin 600 uppercase +.08em tracking for labels. Arvo: 2 uses in registry, none in niche (sibling A condensed, B grotesk+mono). Pair unique.

## 5. Palette: Blue Hour Winter + Frost White + Garage-Light Amber
| role | hex |
|---|---|
| deep (main field) | #0F2340 |
| mid (band) | #1B3A60 |
| paper (frost white) | #EEF3F7 |
| ink | #14202E |
| accent (garage light) | #F2A93B |
| accent-text on paper | #8A4B06 |
| signal (stop / don't touch) | #B8321C |
| muted on deep / mid / paper | #A9BCD0 / #B4C6D8 / #4A5A6C |
| signal text on deep | #FFB4A2 |

Contrast (node tools/contrast.mjs):
| pair | ratio | use |
|---|---|---|
| #EEF3F7 on #0F2340 | 14.08 | body on deep |
| #A9BCD0 on #0F2340 | 8.08 | muted on deep |
| #F2A93B on #0F2340 | 7.87 | accent words, focus ring on deep |
| #0F2340 on #F2A93B | 7.87 | **button text on amber** (buttons use deep text, never white) |
| #EEF3F7 on #1B3A60 | 10.32 | body on mid |
| #B4C6D8 on #1B3A60 | 6.59 | muted on mid |
| #F2A93B on #1B3A60 | 5.77 | accent/focus on mid |
| #14202E on #EEF3F7 | 14.73 | body on paper |
| #4A5A6C on #EEF3F7 | 6.32 | muted on paper |
| #8A4B06 on #EEF3F7 | 6.08 | accent words on paper |
| #0F2340 on #EEF3F7 | 14.08 | focus ring on paper, deep button bg with paper text |
| #B8321C on #EEF3F7 | 5.35 | signal text on paper |
| #FFFFFF on #B8321C | 5.98 | stop-panel button |
| #FFB4A2 on #0F2340 | 9.21 | signal text on deep |
| #F2A93B on #14202E | 8.24 | amber on ink (footer) |
| #F2A93B on #EEF3F7 | **1.78 FAIL** | shapes/rules only, never text, never focus |
| #B8321C on #0F2340 | **2.63 FAIL** | never; use #FFB4A2 on deep |

## 6. Hero family 3 (type mask)
Unique in niche (A=4, B=7), 4th use in library (max 6). Cliché broken: the mask isn't the brand name or the h1, it's a reading, "−8°", the morning springs snap; the photo shows through the numerals like light through a frosted window. The h1 + call buttons sit below on deep blue, readable at 320 with `sr-only`-free real text; mask is `aria-hidden`.

## 7. Motion score
- **Intro (≤1.0 s):** radial mask clears frost from the "−8°" from centre out (900 ms, --ease-out) while h1 lines rise (70 ms stagger). Content is in DOM, visible without JS; any tap/scroll skips.
- **Story (count):** 4 scenes pinned ≥640px, height calc(4*55svh + 100svh); stamp numerals count down (GSAP snap 1), `--cold` scrubs frost in. <640px: stacked cards with clip reveal.
- **Hover (thaw):** on cards/buttons frost edge recedes (--cold → 0, 200 ms) and stamp tints amber.
- **Reduced motion:** static −8° mask with photo visible, all four scenes as stacked cards with their final frost, no count.

## 8. Tools
- **Winter-ready checklist** (`checklist`): 6 ticks (bottom seal, rollers, spring gap, opener battery backup, sensors, lube) → score stamp + items needing a pro + fall tune-up sample $99–$160 → "Book the fall tune-up" prefills form service=Fall tune-up, notes=unticked items.
- **Hail dent check** (`estimator`): dented sections (0–4), creased vs dimpled, rolls smoothly y/n → "section replacement" ($380–$850 per section, Sample) or "full door" ($1,800–$4,000, Sample) + photo checklist → "Send my dent count" prefills service=Hail-damaged doors, notes.
- **ZIP checker** (`zip`): 5 digits vs {{biz.zips}} → in area "We cover {{zip}}" + book; out → "we'll tell you who to call".
- **Quote form** (`form`, multi-step): what's wrong → car stuck inside? → door size + photos → timing → contact.

## 9. Voice
- "At minus eight the spring lets go. We'll have it replaced in pairs and balanced before we leave."
- "Two dented panels is a section swap, not a new door. We'll tell you which one you have."
- "Don't touch the spring. Pull the red cord only if the door is down and level."
Never: "premier", "solutions", "best-in-class", "hassle-free", "state-of-the-art".
