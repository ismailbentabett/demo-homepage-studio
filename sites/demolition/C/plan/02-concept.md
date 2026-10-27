# Concept — demolition-C

## Three obvious concepts, rejected

1. **"We tear it down so you can build it up!"** with a sledgehammer hero. Obvious because every competitor uses this exact headline and pose; it ignores the hillside reality and the homeowner's fear of damage. Rejected.
2. **Before/after slider of a cleared lot.** Obvious because the brief §4 explicitly bans before/after with unrelated stock, and an empty dirt lot says nothing to a kitchen client. Rejected.
3. **Generic service grid with excavator photo.** Obvious because it treats residential hillside removal like commercial wrecking; no local texture, no dust answer, no trust. Rejected.

## The thesis

The page is a surveyor's field book opened on a Roanoke hillside: every section is a plotted parcel, and the signature is the reclaimed-space ruler that measures what came back to the yard as you scroll.

## The signature system: Reclaimed-Space Ruler

A vertical ruler line runs down the left margin (desktop) or top rail (mobile) with tick marks and sq-ft labels. Each section adds a job entry ("+180 sq ft · shed, Grandin", "+420 sq ft · deck, Cave Spring") and the running total grows via `--sw-p`. Variations:
- **Hero:** ruler starts at 0; the word "GONE" masks the shed photo; on scroll the photo crossfades to cleared lawn and the first tick appears.
- **Services:** each service card carries a footprint outline scaled to the ruler; the sq-ft number is the card's tag.
- **Reviews:** each review displays its reclaimed sq-ft as a large numeral beside the quote.
- **Footer:** the ruler ends with the town total ("sq ft given back this year") and the final tick mark.

CSS primitive: `.ruler` with `border-left: 2px solid var(--accent)`, tick marks as `::before` pseudo-elements, labels in mono accent font. Hook: `data-sw-signature` on the hero ruler instance.

## Type

- **Display:** Anton (condensed, heavy, one weight). Giant "GONE" hero mask; section headings. Never used elsewhere in the registry for demolition.
- **Text:** Crimson Pro (serif, variable wght 200-900). Warm book-face body for trust; optical size axis for lead paragraph.
- **Accent:** DM Mono (mono, label). Sq-ft numbers, ruler ticks, tool outputs, tags.
- **Why:** Condensed display + book serif + mono labels = surveyor's field-book feel. Anton is ≤3 in registry, never in demolition niche. Pair is unique.

## Palette

Family: **Blue Ridge Pine + Dogwood Cream + Red Clay**

| Role | Hex | Name |
|---|---|---|
| ink | #1B3A2E | pine green |
| paper | #F4F1EB | dogwood cream |
| mid | #E6E1D6 | weathered wood |
| deep | #1B3A2E | pine green (same as ink for dark bands) |
| accent | #A33E22 | red clay |
| signal | #567265 | sage (rules/shapes only on paper) |

**Contrast table (verified):**
| FG | BG | Ratio | AA normal | Use |
|---|---|---|---|---|
| #1B3A2E | #F4F1EB | 11.01:1 | pass | body on paper |
| #1B3A2E | #E6E1D6 | 9.52:1 | pass | body on mid |
| #A33E22 | #F4F1EB | 5.69:1 | pass | accent words on paper |
| #567265 | #F4F1EB | 4.66:1 | pass | sage labels on paper |
| #F4F1EB | #1B3A2E | 11.01:1 | pass | reversed text on deep |
| #A33E22 | #1B3A2E | 1.93:1 | FAIL | **never for text on deep** (shapes/rules only) |
| #567265 | #1B3A2E | 2.35:1 | FAIL | **never for text on deep** (shapes/rules only) |

Focus ring: #A33E22 on paper (5.69:1 ≥ 3), #F4F1EB on deep (11.01:1 ≥ 3). White on button #A33E22: 5.69:1 ≥ 4.5.

## Hero family

**Family 3 — Type mask.** Giant condensed "GONE" fills the hero; through the letters, a photo of a leaning wooden shed on a green hillside lot is visible. On scroll, the photo crossfades to a cleared lawn in morning light. Unique in demolition niche; ≤3 in library. Breaks the cliché by making the type the reveal mechanism, not just overlay text.

## Motion score

- **Intro (≤1.2s):** Letters of "GONE" slide in from below one by one (line-mask reveal); shed photo fades in behind them. Skippable via reduced motion (static layout shows cleared lawn + full headline).
- **Scroll story 1 (wipe):** The ruler draws downward as sections enter view; each tick and label staggers in. Verb: draw.
- **Scroll story 2 (count):** Sq-ft counters in reviews and footer count up once in view. Verb: count.
- **Hover language:** Hairline underline grows from left via scaleX(0→1), 200ms, on links and cards. One language site-wide.
- **Reduced motion:** All content visible statically; ruler fully drawn; counters show final value; no animation blocks reading.

## Tools

1. **Space-back ruler** (`estimator` module). Inputs: structure type (shed/deck/garage/pool), size (sq ft or small/avg/large). Output: reclaimed sq ft displayed on the ruler + sample price range from facts. Prefill: structure type + size → quote form step 1.
2. **Tear-out sizer** (`estimator` module). Inputs: room/structure, size, contents. Output: crew-days, trailer loads, sample range. Prefill: job type → form.
3. **Debris load estimator** (`estimator` module). Inputs: job type + size. Output: trailer loads vs dumpster yards, honest cost note. Prefill: debris estimate → form notes.
4. **ZIP checker** (`zip` module). Standard.
5. **Quote form** (`form` module). Steps: structure/room → size/details → timeline → contact.

## Voice

Three sample sentences:
- "Your shed sat at the bottom of a yard you could barely mow. We carried it up in pieces, wall by wall, to the trailer on the street."
- "Houses built before 1978 can have lead paint. We test the materials we'll disturb before we start."
- "We leave the ground graded and seeded, and we come back if it washes out the first month."

Five words never used: guaranteed, emergency, same-day, award-winning, free estimate.