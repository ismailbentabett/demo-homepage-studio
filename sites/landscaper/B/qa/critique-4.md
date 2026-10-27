COPY: ok

# landscaper-B (Half Inch Landscape Co.), critique round 4 (fast mode, final round)

Changes from round 3 to round 4:
- Both elevate moves landed. The L-1 "Today" and L-3 "Planned" readouts mirror the hero tool and count up on entry (data-mirror / data-countup in dist). The L-1 lawn hatch scales with the lawn slider (data-lawn). The Z-tags tick on in sequence (Z03 is active in 1440-scroll-25.jpg).
- Every round-3 Should item is fixed:
  - The Tool B price is on one line.
  - The 1024 size buttons read "ft²".
  - The footer roster and ZIP duplication is replaced by one zone line with a link.
  - The email no longer breaks.
  - The tags are renamed to Leak fix / Insured / Schedule.
  - The 390 proof line wraps cleanly.

None of these are listed again below.

## Five-second test
- **1440-first.jpg:** "An Austin landscaper who builds yards that survive the summer on less water. For my mid-size yard, it's 1,341 gal/wk of lawn today against 491 with native beds. I'd press 'Price my yard' or call (512) 555-0117." That answers what, where, what to do and why them.
- **390-first.jpg:** the same h1, a full-width "Price my yard" above the fold, the Sample rating, and the water card starting. Call is in the header and in the sticky bar. That answers all four.

## First screen: 9.0
**What earned it (1440-first.jpg):**
- The h1 is 8 words in 3 lines and states the outcome and the city.
- There is one filled primary button and one outlined secondary.
- The phone is in the header and the proof line is labelled.
- The signature card shows live numbers.

**Limit:** about 100px of empty paper sits under the proof line before the deep band (1440-first.jpg), so the hero still feels slightly under-filled. It is not 9.5.

## Distinctiveness: 9.5
**What earned it:** a single controller and plan-sheet system runs from top to bottom of 1440-full.jpg:
- Z0/Z1 hero tags
- L-1 existing conditions
- Z01–Z10 services (1440-scroll-25.jpg)
- L-2 process
- L-3 planted, with section A-A
- the footer's "Run windows" and "End · All zones off until your next watering day"

The new point I can name for the 9.5: the L-1 caption reads "2,800 sq ft · 70% lawn · set in your water budget" (c0 crop of 1440-full.jpg). The drawings are the visitor's own yard, not decoration. No sibling or library card does this.

## Typography: 9.0
**What earned it:**
- The price range is unbroken (1440-scroll-50.jpg) and the 1024 buttons are clean (1024-first.jpg).
- The Space Grotesk h2s are well scaled, and DM Mono is kept to data.

**Limit:** at 390, the "Schedule" footer tag text touches its own border (390-full.jpg, footer). The mono tag boxes are still everywhere. That is not scored, but it is why this is not 9.5.

## Layout and rhythm: 9.0
**What earned it:**
- Tones alternate: paper → deep L-1 → paper services → white process → mist tools → paper natives → deep reviews → white ZIP → juniper quote → paper footer (1440-full.jpg).
- The footer is now compact.

**Deduction kept at the 9:** in the c3 crop of 1440-full.jpg, the quote band's left column ("Rather talk? … Closed · opens tomorrow") ends near the top of a tall juniper band. That leaves an empty field beside the form card.

## Photo and video: 9.0
Per the orchestrator, the photos are placeholders. The page ships no `<img>`, so I judged the drawn sheet set.

**What earned it (1440-full.jpg):**
- It is a coherent drawing language: lawn hatch, plan-symbol plants, north arrow, scale bar and legend.
- The section A-A shows drip over amended soil over caliche.

**At 390 (390-full.jpg):** the sheets are re-cropped for the phone, not squashed.

**Limit:** there is no finished-yard image, which is why this stays at 9.

## Copy: 9.0
**What earned it:**
- Regional specifics: caliche, oak wilt, "Brown by July", the odd-address watering day.
- One action name, and plain tags (1440-scroll-50.jpg).
- Every review, the rating, the price and the estimate are Sample-labelled (1440-scroll-75.jpg).

**Facts check:** the owner Teresa, 4.8 / 143, 9 years and SAMPLE-TX-LI-20734 all match facts.json.

## Mobile: 9.0
**What earned it:**
- No overflow at 390 or 320 (render.json).
- The primary button is above the fold and the sticky bar is there (390-first.jpg).
- The footer is now a tight run schedule (390-full.jpg).
- The sheets, services and tools all stack cleanly.

## Accessibility: 9.0
**What earned it:**
- In 1440-rm-full.jpg every section and every readout is visible with final values.
- The switches and the ZIP field have labels, and the Sample tags are legible in both tones.

**Limit:** in 1440-scroll-25.jpg the active Z03 tag is caught mid-tick as pale text on grey-green, with low contrast for that moment. It is transient, so it goes under Should, not Must.

## Motion and interaction: 9.0
**What earned it:**
- The zone tags step on in sequence with an active fill (1440-scroll-25.jpg).
- The sheet readouts count up on entry: "Today 1,341" (c0) and "Planned 491" (c1 crop of 1440-full.jpg).
- The process sheet adds layers per step, and the progress rule runs.

Together this reads as a controller cycling, not as generic fades.

**Not 9.5:** the reviews, ZIP and quote bands still use only the plain reveal.

## Wow moment: 9.0
**What earned it:**
- The hero water budget is live on load (1440-first.jpg).
- The L-1 and L-3 readouts and the "You" gauge mirror it, and the L-1 lawn hatch follows the slider (c0 and c1 crops).

The tool and the yard now talk.

**Not 9.5:** the payoff only shows if the visitor changes the slider and then scrolls. Nothing on the sheet itself invites the change.

## Polish: 9.0
**What earned it:** the email is on one line, the hours are aligned, the credits are honest, and there is no duplicated roster (c3 crop of 1440-full.jpg). The ft² buttons are clean (1024-first.jpg).

**Limit:** the washed-out mid-tick tag (1440-scroll-25.jpg).

## Arithmetic
14×9.0 + 12×9.5 + 10×9.0 + 10×9.0 + 8×9.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 114 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 72 + 36 = **906 / 100 = 9.06**

(Order: firstScreen, distinctiveness, type, layout, photo, copy, mobile, a11y, motion, wow, polish.)

## Must
None. There is no DEMO-RULES breach, no visible a11y failure and no phone breakage. static.json and render.json have zero blockers and zero warnings.

## Should
- **Active zone tag, `#services` tag tick (1440-scroll-25.jpg):**
  - Problem: during the tick, the Z03 tag shows pale text on a grey-green fill.
  - Fix: switch the fill and the text colour in one step (no opacity tween on the text), so the active state is deep fill with paper text at full contrast for its whole duration.
- **Quote band left column, `#quote` (c3 crop of 1440-full.jpg):**
  - Problem: the left column ends at the top of a tall band.
  - Fix: make the left column `position: sticky; top: 6rem`. Or add the three-step "what happens next" as a mono run list (Site walk → Plan sheet → Install day) under "Rather talk?" so the column carries weight.
- **Hero bottom space (1440-first.jpg):**
  - Problem: there is about 100px of dead paper under the proof line.
  - Fix: reduce the hero's bottom padding so the L-1 sheet frame peeks about 120px into the 900px viewport, which invites the scroll.
- **390 footer "Schedule" tag (390-full.jpg):**
  - Problem: the text touches the tag border.
  - Fix: give the tag the same horizontal padding as the other tags (about 0.5em).
- **Wow invitation (c0 crop of 1440-full.jpg):**
  - Problem: nothing on the L-1 sheet tells the visitor it is drawn from their numbers.
  - Fix: add a small "Change your yard ↑" link on the L-1 caption that scrolls back to `#hero`'s water budget.

## Elevate
None. The weighted score is 9.06 and every category is ≥ 8.5 (photo ≥ 8.0), which meets the fast-mode pass line. The Should items are polish, not structure.
