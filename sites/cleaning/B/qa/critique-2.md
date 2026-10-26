COPY: needs copy-chief (copy 7.5; visible "Placeholder hero B1" text, three names for the primary action, footer credits read "Photo by unknown")

# Critique: cleaning-B (Every Other Friday Cleaning), round 2

**Evidence warning.** Every file in `qa/screens/` and `qa/render.json` dates from 2026-10-25 20:11 (render timestamp 00:12Z). `dist/index.html` was rebuilt on 2026-10-26 08:23. The screenshots therefore show the round-1 build, not the current dist. Example: dist has `#contact.t-deep`, but `1440-full.png` shows contact on paper. RUBRIC §2.5 says a score goes up only when a screenshot changes, so this round is scored on the screenshots that exist. **Re-run check-render before round 3.** No reduced-motion or 25/50/75 % frames were produced (render.json lists only 5 shots), so I could not open them.

The round-1 critique and an interrupted round-2 draft described a hero ("Huntsville house cleaning, priced line by line", a "Price it" button, a receipt strip with a torn edge, receipt reviews) that does not appear in any screenshot. Those scores were not supported by the screenshots and are not carried forward.

## Five-second test
`1440-first.png`: "A house cleaner in Huntsville, AL (the small mono kicker says so). Big headline 'Every Other Friday, the house gets done.' The right half is empty except for the words 'Placeholder hero B1'. One brown 'Build your quote' button. No phone number. I don't know why I'd pick them." `390-first.png`: the h1 reads in 3 lines, but a broken bottom bar overlaps the fold: a dark blob, clipped "0153" digits, an unstyled "Build quote" label and the primary button stacked on it.

## firstScreen: 6.5
Earned: trade and city are in the kicker, there is one primary action, and the sample rating line under the CTA is labelled (`1440-first.png`).
Deductions:
- The h1 has no trade ("the house gets done"). It reads as a slogan, and trade and place sit only in the 13px kicker (−0.5).
- The h1 runs 4 lines at 1440 with "done." alone on line 4 (`1440-first.png`, −0.5).
- No phone in the header or hero at 1440 or 1024 (`1440-first.png`, `1024-first.png`). The phone at 390 is a clipped fragment (`390-first.png`, −1.0).
- The hero is taller than 900px and the next band does not peek (`1440-first.png`, −0.5).
- Half the composition is literal placeholder text. The signature is not in the first screen.

## distinctiveness: 6.0
The concept promises a "Running Receipt" (thermal strip, torn edge, line items wiping in, running tally) in hero, quote builder, checklist, reviews and footer. In `1440-full.png` and `390-full.png` there is no strip, no torn edge, no dashed rule and no tally anywhere. What remains is a beige form page: plain select boxes, a radio quiz, a 2×3 radio grid and a 4-column footer. Bricolage plus sienna is a reasonable identity, but cover the logo and nothing names the business. Signature in < 4 sections (−1.0), standard section shapes (−0.5), template footer with a "Pages" column (−0.5).

## type: 7.5
Earned: Bricolage Grotesque display with tight tracking, Figtree body ≥ 16px, DM Mono kickers (listed as concept accent), so the pairing is good (`1440-first.png`).
Deductions:
- "done." is an orphan on the 1440 h1 (`1440-first.png`, −0.5).
- The footer mixes a mono "Pages" heading at display size, pale grey Figtree links and pale grey mono legal text, so there is no hierarchy (`1440-full.png` footer, −0.5).
- Several tiny tracked-caps labels per view ("HOUSE CLEANING · HUNTSVILLE, AL", "STEP 1 · SERVICE", the boxed "SAMPLE RATING"). No scale-contrast moment beyond the h1.

## layout: 5.5
Deductions from `1440-full.png`:
- The white band after `#quote-builder` (≈ y 1900–2300) is about 400px of nothing.
- The `#checklist` tab panel is empty: a ~350px blank under the tabs.
- A second white void (≈ y 3050–3550).
- A dark `t-deep` band about 1,100px tall that is completely empty (≈ y 4550–5480).
- About 1,400px of blank paper after it (≈ y 5480–6640).
- That is 3+ blank gaps over half a screen (−0.5 each, counted once as −1.5, plus −1.0 because over a third of the page is empty).
- The "Closed · opens tomorrow 8 am" line sits flush at x=0 outside the container in a band with nothing else (`1440-full.png` ≈ y 6650, −0.5).
- `#frequency` and `#contact` are narrow centred columns that leave 2/3 of the 1440 width unused.

## photo: 5.0
There is not one photograph on the page. The hero shows the text "Placeholder hero B1" (`1440-first.png`, `390-first.png`). No frame appears anywhere in `1440-full.png`. The footer still credits "Photo by unknown on Pexels" twice for images the visitor never sees. This is below the floor of 6. The niche has an approved library: use it.

## copy: 7.5
Earned: the voice is plain and specific in places: "Pick your rooms, pick how often, see the number. No phone call required." / "Tell us about your house. We'll confirm the price before anyone shows up." / "Room by room, line by line. Deep-only items marked (D)." The services in the form match `facts.json`, and the rating is labelled Sample (`1440-first.png`).
Deductions:
- "Placeholder hero B1" is visible to the visitor (`1440-first.png`, −0.5).
- The primary action has three names: "Build your quote" (hero/header), "Send this quote request" (builder), "Book your visit" (contact). The 390 bar says "Build quote" (`1440-full.png`, `390-first.png`, −0.5).
- "That's the list we follow" is styled as a button but is a statement (`1440-full.png` #checklist).
- Footer "Photo by unknown on Pexels" (`1440-full.png`).
- Reviews and prices are not visible in any screenshot, so their Sample labels cannot be verified.

## mobile: 6.5
Earned: no sideways scroll, the h1 is 3 lines, and form fields are full width (`390-full.png`).
Deductions:
- The sticky bar at the bottom of `390-first.png` is broken: a dark rounded shape overlaps the clipped "0153" text, "Build quote" floats as unstyled text, and the "Build your quote" button sits on top (−1.0, and a mustFix).
- `390-full.png` carries the same long empty bands as desktop (the dark empty band and the blank paper run, −0.5).
- The hero is the desktop stack with a placeholder box, not a re-cut.

## a11y: 6.0
`1440-full.png` and `390-full.png` show:
- The `#checklist` tab panel is empty.
- The `#services` dark band is empty.
- `#proof` / `#area` are blank.

That content exists in dist, so it is being hidden by reveal or JS state and never shown in the capture. Content invisible = mustFix (−1.5). The footer link and legal text is pale grey on white and looks well under 4.5:1 (`1440-full.png` footer, −0.5). There are no reduced-motion screenshots in this render to clear the "nothing hidden" rule. Skip link and labels exist in the DOM.

## motion: 6.0
None of the promised motion is visible: no receipt line wipes, no tally, no strip intro. The only evidence of motion is negative: whole sections are stuck at their pre-reveal state in the full-page captures (`1440-full.png` dark band, checklist panel). Motion that hides content in a capture is worse than no motion. With no 25/50/75 frames there is nothing to credit.

## wow: 6.0
The quote builder in `1440-full.png` is four plain controls and a submit button. It shows no live number and no receipt output, so the tool's output is not visible at all (−1.0). The frequency quiz shows four radio groups and no answer. Nothing a homeowner would show their partner.

## polish: 6.5
Earned: a favicon and OG are in the head, and the sienna button style is consistent.
Deductions:
- The footer is undesigned: a mixed mono/sans scale, grey-on-white legal text, "Photo by unknown" credits, and an "EOF" wordmark in a different face from the header lockup (`1440-full.png`, −0.5).
- The status line is misaligned at x=0 (`1440-full.png`).
- The header logo lockup "EOF · EST." ends in a dangling "EST." with no year (`1440-first.png`, −0.5).

## Arithmetic
14×6.5 + 12×6.0 + 10×7.5 + 10×5.5 + 8×5.0 + 8×7.5 + 7×6.5 + 7×6.0 + 12×6.0 + 8×6.0 + 4×6.5
= 91 + 72 + 75 + 55 + 40 + 60 + 45.5 + 42 + 72 + 48 + 26 = 626.5 / 100 = **6.27** (6.265)

Verdict hint: **FIX**. Photo is below its floor, mobile and a11y are below their floor of 8, and there are mustFix items.

## Must
1. **Stale evidence** (`qa/render.json` timestamp vs `dist/` mtime). Re-run `check-render` on the current dist so the screenshots match the build. Also produce the reduced-motion full page, which is required to clear a11y.
2. **Hidden content** (`1440-full.png` / `390-full.png`: `#checklist` panel, `#services` t-deep band, `#proof`, `#area`). These sections render empty. Make content visible by default (no `opacity:0` / `visibility:hidden` before JS). Reveal only adds motion, and the active tab panel is not `hidden` in the HTML.
3. **Placeholder hero** (`1440-first.png`, `390-first.png` `#hero`). Replace "Placeholder hero B1" with a real approved image from `niches/cleaning/media/manifest.json` via `[[img]]`. No placeholder text may ever reach the page.
4. **Broken mobile bar** (`390-first.png`, bottom). The sticky bar renders an overlapping blob, clipped "0153" digits and an unstyled "Build quote" label. Rebuild it as two ≥ 48px targets ("Call (256) 555-0153" via `{{biz.phone}}` + "Build your quote") with its own background. It must not overlap the hero CTA.
5. **Footer contrast** (`1440-full.png` footer). Links, legal and credits are pale grey on white. Raise them to ≥ 4.5:1 (e.g. ink at 72 % on paper).
6. **Photo credits** (`1440-full.png` footer). "Photo by unknown on Pexels" credits images that don't appear on the page. Credits must match the photos shown, with the photographer's name from the manifest.

## Should
- **#hero, 1440:** no phone visible. Add `tel:` `{{biz.phone}}` in mono to the header right, next to the button, and as a quieter secondary under the h1 ("or call (256) 555-0153").
- **#hero h1:** no trade word, 4 lines at 1440. Keep the name line as a kicker and make the h1 carry trade + outcome. Example: "Huntsville house cleaning, priced line by line." Cap it at `max-width: 14ch` so it runs ≤ 3 lines with no orphan.
- **#hero height:** shorten it to about 88svh so the quote builder band peeks 60–100px.
- **Primary action naming:** use one name everywhere ("Build your quote"). Builder submit: "Send my quote". Contact h2 can stay, but the CTA should match.
- **#checklist "That's the list we follow":** this is styled as an outline button but does nothing. Make it a closing receipt line (mono, dashed rule above) or remove it.
- **#area status line:** "Closed · opens tomorrow 8 am" sits at x=0. Put it inside `.container` and pair it with hours and the ZIP check so the band has one job and real content.
- **Header lockup "EOF · EST.":** "EST." with no year reads as unfinished. Use "EOF · Huntsville" or the full short name.
- **Footer:** delete the "Pages" sitemap column (it's a one-page site). Make the footer the receipt's close: total line, dashed rule, a "Thank you, see you Friday" line, and the legal text in ink.

## Elevate (two weakest: photo 5.0, layout 5.5)
- **photo:** treat the approved cleaning photos as the paper the receipt is printed on. The hero frame should be a tall portrait strip with a torn bottom edge cut by the same `clip-path` as the receipt. Use one warm-paper grade across all frames. In the checklist, each room tab swaps a process photo (kitchen counter, shower glass, bed corner, baseboard) that clip-wipes in with the line items. The images then become part of the signature instead of decoration.
- **layout:** give the scroll a shape built on one physical object. A single receipt strip runs down the left third of the page from the hero to the footer, and each section prints one line item onto it (rooms → frequency → add-ons → total) while the right two-thirds carry that section's content. The tall empty bands disappear because every section has a strip line and real content. The page then reads loud → dense tool → quiet checklist → dark proof → total, with one deliberate overlap where the strip's torn edge crosses into the dark proof band.
