# Concept — plumber-A (Wrench & Wren)

## Three obvious concepts, rejected

1. **The Trusty Plumber.** Smiling owner portrait, blue water-drop palette, "Fast. Friendly. Reliable." headline, coupon wall. Rejected: every competitor does this; it is the brief's §4 cliché list verbatim.
2. **The Tool Dashboard.** Hero is a pressure gauge or camera feed with live readings; sections are instrument panels. Rejected: template-y SaaS dashboard look; B already owns the proof/reading axis and would collide.
3. **The Tagged Pipe (literal).** A photorealistic copper pipe runs down the page as a timeline; tags are JPEG cutouts. Rejected: takes the brief's seed literally without turning it into a reusable CSS system; heavy on images, light on structure.

## The thesis

The page is a copper pipe rail: every section hangs from it as a numbered brass tag, and scrolling fills the rail with color as each step of the visit clicks into place.

## The signature system: Brass Valve Tags on a Pipe Rail

A horizontal copper-colored rule (the pipe rail) tops every section. From it hangs a small brass-tag primitive: a rounded rectangle with a punched hole at top center, a two-digit number in mono accent type, and a short label beneath. The tag is drawn once in CSS/SVG and reused everywhere.

- **Hero:** three stacked headline lines ("Find it. / Fix it. / Tag it.") sit above the cinematic strip; a single oversized tag "No. 01" anchors the left edge of the strip, its hole aligned to an implied rail that continues off-screen.
- **Process story (6 steps):** the rail runs continuously across the pinned story; each step's card hangs a tag (02 Find the shut-off, 03 Show the problem, 04 Price it, 05 Fix it, 06 Tag it). On scroll, the tag swings gently into place (rotateZ -8deg → 0, 400ms, ease-out) and the rail segment behind it fills from copper-outline to solid copper via `--sw-p`.
- **Services grid:** each service card carries a tag stamped with its sample price range ("Drain · $165–$425") instead of a step number; the tag sits at the card's top-left corner, hole aligned to a faint rail line that runs across the grid header.
- **Reviews band:** each review card wears a tag showing the star count ("★★★★★") in the hole position and the service name as the label; the rail here is dashed (a "completed run" variation).
- **Footer:** the rail ends in a cap fitting; a final tag reads "{{biz.initials}} · Est. {{proof.years}}" (sample). The disclaimer sits below the cap.

The primitive is `.brass-tag` with `data-sw-signature` on the hero instance. Variants: `--tag-num`, `--tag-label`, `--tag-swatch` (copper / ink-on-brass / outline). Motion uses `--sw-p` for the rail fill and a staggered swing for tags entering view.

## Type

- **Display:** Zilla Slab (slab, friendly authority, strong numerals for tag digits). Used only in headings and the tag label. Not in registry for plumber niche; ≤ 3 uses overall.
- **Text:** Karla (humanist grotesk, warm, highly legible at body sizes). Pairs with Zilla Slab's bookish slab without competing.
- **Accent:** DM Mono (low-contrast mono for tag numbers, price ranges, ZIP codes, hours). Third voice kept to data only.

Why: Zilla Slab's slab serifs echo cast-brass stamping; Karla keeps body copy human and non-industrial; DM Mono makes the tag numbers read like stamped metal. None of these faces appear in the current registry for plumber; Zilla Slab appears 0 times in delivered sites.

## Palette: Limestone + Navy + Polished Brass

| Role | Hex | Name |
|---|---|---|
| paper | #F4F1EB | limestone white |
| ink | #1B2A3D | plumber's navy |
| accent | #B8860B | polished brass |
| deep | #0E1A2B | night navy |
| signal | #C44D2B | valve red |
| mid | #D6D1C7 | warm stone |

Family name: **"Limestone + Navy + Polished Brass"**. Unique in registry. Tone: light-led.

Contrast table (verified with `node tools/contrast.mjs`):

| FG | BG | Ratio | Use |
|---|---|---|---|
| #1B2A3D (ink) | #F4F1EB (paper) | 12.4:1 | body on paper ✓ |
| #1B2A3D (ink) | #D6D1C7 (mid) | 9.1:1 | body on mid ✓ |
| #F4F1EB (paper) | #0E1A2B (deep) | 15.8:1 | reversed text on deep ✓ |
| #B8860B (accent) | #0E1A2B (deep) | 5.6:1 | accent words on deep ✓ |
| #8A6500 (brass-ink) | #F4F1EB (paper) | 5.1:1 | accent words on paper ✓ |
| #B8860B (accent) | #F4F1EB (paper) | 2.3:1 | **never for words**, rules/shapes/tag fill only |
| #C44D2B (signal) | #F4F1EB (paper) | 4.6:1 | signal buttons, error states ✓ |
| #FFFFFF | #C44D2B (signal) | 4.6:1 | white text on signal button ✓ |
| #FFFFFF | #1B2A3D (ink) | 11.2:1 | white on ink button ✓ |
| #0E1A2B (deep) | #F4F1EB (paper) | 15.8:1 | focus ring on paper ✓ |
| #B8860B (accent) | #0E1A2B (deep) | 5.6:1 | focus ring on deep ✓ |

Note: raw brass (#B8860B) fails 4.5:1 on paper; use darkened brass-ink (#8A6500) for any word set in brass on light backgrounds. Brass on paper is reserved for the tag shape, rules, and decorative fills only.

## Hero family: 4 — Stacked headline + cinematic strip

Three stacked display lines ("Find it. / Fix it. / Tag it.") on limestone paper occupy the top ~60% of the first screen. Below them, a wide 21:9 cinematic strip shows copper pipes and a brass valve in warm basement light. The strip peeks 80px into the next band at 1440×900. What breaks the cliché: the strip is not a background; it is a *specimen* framed by the page's own rail system, and the No. 01 tag physically anchors it to the page structure rather than floating over it.

Unique in plumber niche. Family 4 used 1 time in library (landscaper-A); well under the 3-use cap.

## Motion score

- **Intro (≤ 1.2 s, skippable):** the cinematic strip slides open from center (clip-path inset(0 50% 0 50%) → inset(0)) while the three headline lines mask-reveal upward with 70ms stagger. Text is readable at 0 ms under reduced motion (mask only exists under `.sw-motion`). Total duration 900ms.
- **Scroll story 1 (process rail):** pinned from 640px up; each tag swings in (rotateZ -8→0, 400ms ease-out, staggered 120ms) as its section enters; the rail segment fills via `--sw-p` driven clip-path. Height: calc(6 × 55svh + 100svh). Reverses on scroll-up. Under 640px: stacked cards with clip reveal, no pin.
- **Scroll story 2 (services price stamp):** services grid tags stamp in (scale .92→1, opacity 0→1, 300ms, stagger 60ms) as the grid enters. No pin.
- **Hover language:** a hairline underline that grows scaleX(0→1) from left, 200ms, on links and card titles. One language site-wide, inside `@media (hover:hover)`.
- **Reduced motion:** all content visible statically; rail is fully filled; tags are upright; strip is fully open; no animation runs.

## Tools

1. **Shut-off finder** (`checklist` module). Inputs: house decade dropdown, basement/crawl/slab radio. Output: a guided picture walk (3 frames from manifest) showing where the main shut-off sits in that house type, plus a printable "Tag your valve" card (`@media print`). Hand-off: "Price a valve replacement" button pre-fills form with service="Shut-off tags".
2. **Water heater life check** (`estimator` module). Inputs: tank age slider (0–20), type radio (gas/electric/tankless), signs checkboxes (rumbling, rusty, leak, not enough hot). Output: maintain / plan / replace-soon verdict with reason, flush + anode notes, and a live SVG sketch of the heater with highlighted parts. Hand-off: "Price a water heater" button pre-fills form.
3. **Pressure check** (`checklist` module). Inputs: visitor types their hose-bib gauge reading. Output: below 40 / 40–80 normal / above 80 needs regulator, with next-step explanation. Hand-off: "Price a regulator" button pre-fills form when outside normal range.
4. **ZIP checker** (`zip` module). Checks against `{{biz.zips}}`; yes-answer offers the form with ZIP prefilled.
5. **Multi-step booking form** (`form` module). Steps: service → job details (with optional photo upload) → preferred time → contact. Honeypot + time trap. Honest thank-you state.

## Voice

Three sentences in the site's voice:
- "We find the shut-off before we touch anything else, and we hang a brass tag on it so you can too."
- "Your water heater is thirteen years old and rumbling; let's flush it today and plan the replacement for a Tuesday that suits you."
- "The camera showed roots at forty-two feet. Here's the video, here are your options, and here's what each one costs."

Five words it never uses: emergency, guaranteed, same-day, bonded, award-winning.