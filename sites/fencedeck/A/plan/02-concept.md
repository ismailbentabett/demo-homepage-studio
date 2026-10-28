# fencedeck-A · Concept

## 1. Three obvious concepts, rejected
- **Golden-hour cedar fence hero + "Quality fences built to last".** Full-bleed photo, scrim, two buttons. Every fence company in
  Boise has it (brief §4.1-2), and the library has no such photo anyway.
- **Wood-grain everything.** Plank textures behind sections, a "board" per service card. Brief §4.6 cliché; a template skin.
- **The string line as one hero animation.** The brief's seed taken literally: an orange line snaps under the h1 and is never seen
  again. One effect, not a system, and it would leave 90% of the page generic.

## 2. Thesis
**The page is the layout string of one Boise backyard fence: pulled tight at the hero, every section is a post the string sets,
and you build the fence by scrolling.** (Arguable: it makes a sales page into a build sequence and keeps photos to a minimum.)

## 3. Signature system: "Mason's String + Post Stations"
CSS primitive `.sl` = a 2px taut line (`--string`) on a 1px shadow rule, with `.sl-post` marks (12×28px rect, pine, square top) every
`--post-gap` and `.sl-tag` stake tags (mono, uppercase, 13px, sitting on the line like a tag on a stake: "POST 03 · 24 FT").
Hook: `data-sw-signature` on the page-long string (`<div class="sl-run">` fixed left gutter on ≥1024, top edge on mobile).
- **Hero:** string snaps tight left→right under the h1 (overshoot), first post drops; two corner stakes at the ends; tag "STAKE A → STAKE B".
- **Process story (7 steps):** horizontal drawn plates; each step adds a post on the string; tag counts "POST 01 · 0 FT" … "POST 07 · 48 FT".
- **Post-depth section:** the string turns vertical: it becomes the plumb line down the post cross-section to the frost-line tick.
- **Services:** each card hangs from the string by a post mark; card header = stake tag ("8 FT O.C.", "12 IN O.C.").
- **Reviews:** each review is a post with its town as the stake tag; the string sags 0px (taut), reviews sit below like pickets.
- **Estimator:** the user's feet draw a live string with real post count (one every 8 ft + ends + gate posts) — the signature becomes the tool.
- **Footer:** the string ends at Stake B; the counter reads the final "ft built", tag "WALK-THROUGH WITH YOU" + area towns as tags.
Variation: horizontal / vertical plumb / live (tool) / terminal. Global counter "ft built" bottom-left on desktop (aria-hidden, decorative).

## 4. Type
- Display + text: **Schibsted Grotesk** (variable wght 400-900; display 800, text 400/600). A sturdy newsroom grotesk: plain-spoken
  like a foreman, wide enough at 800 to feel built. Never used in the registry.
- Accent: **Martian Mono** (wdth 75-112.5, wght 100-800) for stake tags, feet, post counts and prices: tabular, wide (wdth 112.5) for the
  counter, narrow (wdth 87.5) for tags. Never used in the registry. Pair unique.

## 5. Palette: "Boise Sagebrush + Cedar String + Pine Ink"
| role | hex |
|---|---|
| ink (deep pine) | #1C3329 |
| paper (off-white) | #F3EFE4 |
| field (sage, lead color) | #A9B9A0 |
| mid (pale sage card) | #DCE3D2 |
| accent (cedar, words + buttons) | #9E3F1A |
| signal (string orange, shapes) | #E36A2E |
| deep2 (pine panel) | #2B4A3B |

Contrast (node tools/contrast.mjs, real ratios):
| pair | ratio | use |
|---|---|---|
| #1C3329 on #A9B9A0 | 6.51 | body + headings on sage |
| #2B4036 on #A9B9A0 | 5.36 | muted text on sage |
| #1C3329 on #F3EFE4 | 11.75 | body on paper |
| #45584B on #F3EFE4 | 6.64 | muted on paper |
| #1C3329 on #DCE3D2 | 10.26 | body on cards |
| #9E3F1A on #F3EFE4 | 5.74 | accent words/links on paper |
| #9E3F1A on #DCE3D2 | 5.01 | accent words on cards |
| #9E3F1A on #A9B9A0 | 3.18 | **string/shape only on sage, ≥18.66px bold max**; never body |
| #F3EFE4 on #1C3329 | 11.75 | text on deep |
| #B8C7AE on #1C3329 | 7.60 | muted on deep |
| #F3EFE4 on #2B4A3B | 8.51 | text on pine panel |
| #FFFFFF on #9E3F1A | 6.60 | primary button |
| #F3EFE4 on #9E3F1A | 5.74 | text on cedar band |
| #E36A2E on #1C3329 | 4.09 | string + focus on deep; large text only (≥24px) |
| #E36A2E on #2B4A3B | 2.96 | **FAIL: never pair** |
| #E36A2E on #A9B9A0 | 1.59 | **FAIL: never on sage; use #9E3F1A string there** |
| #F3EFE4 on #A9B9A0 | 1.80 | **FAIL: no paper text on sage** |
| #1C3329 on #9E3F1A | 2.04 | **FAIL: no pine text on cedar** |
Focus ring: #1C3329 on sage 6.51 / paper 11.75 / mid 10.26; #E36A2E on deep 4.09; #F3EFE4 on cedar 5.74.

## 6. Hero family: 9 — horizontal filmstrip
Family 9 is at 3 in the library (cap note: the orchestrator says no family meets the cap; brief picks 9; logged, not stalled). Unique in niche.
Cliché broken: the strip is **not stock photos**. It is 7 square plates in one etched-line drawing style (stake & string, 811 flags,
auger hole, post in concrete, rails, pickets, self-closing gate) plus one real 19th-century etching of a cedar and a rail fence
(hero-A2, Childe Hassam, public domain) as the plate "CEDAR". Frames sit *on the string*: each plate hangs from a post mark, and the
strip's motion is the string being paid out. Sage field, h1 left, plates below, peeks into the next band.

## 7. Motion score
- **Intro (≤1.0 s, skippable, text visible from frame 0):** string scaleX 0→1.02→1 from Stake A (600ms, --ease-out), first post drops 12px (200ms); h1 line-mask rises in parallel.
- **Story 1, verb "stack":** process steps; on scroll each post mark drops onto the string and the ft counter counts 0→48 (`--sw-p`).
- **Story 2, verb "draw":** post-depth cross-section draws (DrawSVG) top→bottom: grade, gravel, concrete, frost tick, depth dimension.
- **Hover (one language):** the "pluck": hovered card/plate lifts 2px and its string segment vibrates 1 cycle (translateY ±1.5px, 240ms). Focus = same.
- **Filmstrip:** 60s/loop translateX, pauses on hover/focus-within, pause button (WCAG 2.2.2).
- **Reduced motion:** string drawn full, all posts placed, counter shows final value, filmstrip static and horizontally scrollable.

## 8. Tools
- **Fence estimator** (`estimator`): feet (slider + number), height 4/6/8 (radios), material cedar/vinyl, gates 0-3 → posts = ceil(ft/8)+1+gates×1,
  sample range from facts.proof.prices per ft + gate range, line "Call 811 before anyone digs. We make the call." Live SVG string with posts.
  Hand-off: "Send these numbers" → #quote with `?ft&height&material&gates&posts` prefilled into form fields.
- **Fix or replace quiz** (`checklist`): 5 yes/no (age > 10 yrs, >2 posts lean, rot at base, gate drags, boards missing) → "Repair a section" /
  "Reset posts, keep panels" / "Replace" (hedged: "we confirm on site"). Hand-off: prefills service = Fence repair + note.
- **ZIP checker** (`zip`) beside the form. **Quote form** (`form`) 3 steps: job → yard numbers → contact.

## 9. Voice
- "We pull a string before anyone picks up a shovel."
- "Posts every 8 feet, set in concrete below the frost line. It's written on your quote."
- "Your gate should close on its own. Ours do."
Never: quality, solutions, vision, craftsmanship, premier.
