COPY: needs copy-chief (copy 8.0: "Same crew. Same list. Every Other Friday." is followed straight away by "Same crew, same Friday, same list."; the footer shows placeholder credit copy)

# Critique: cleaning-B (Every Other Friday Cleaning), round 3

**Evidence note.** Only the `.jpg` shots in `qa/screens/` are fresh (10:15 today, after the 10:14 dist build). The `.png` files and `qa/render.json` are still from 2026-10-25 20:12 and show the old build. I scored the JPGs: `1440-first.jpg`, `1024-first.jpg`, `390-first.jpg`, `1440-full.jpg` and `390-full.jpg` (read in slices). No reduced-motion shots and no 25/50/75 % frames exist, so a11y and motion are scored without them.

Since round 2 the page has been rebuilt. Fixed items I am not re-listing: the placeholder text, the phone, the h1, the broken mobile bar, the hidden sections, footer contrast, the "EST." lockup and the sitemap footer.

## Five-second test
`1440-first.jpg`: "House cleaning in Huntsville that shows you the price line by line before anyone comes. Press 'Price my house' or call (256) 555-0153. Why them: the room checklist is on the page, the same crew comes every visit, and the 4.8 rating is marked Sample." A thermal-ticket strip on the left says 'receipt' at once. `390-first.jpg`: the same answer. The h1 runs 3 lines, the CTA and phone are above the fold, and the sticky bar has Call plus Price.

## firstScreen: 9.0
Earned: the h1 "Huntsville house cleaning, priced line by line." has 7 words in 3 lines and names trade, city and outcome. There is one primary action with a quieter "or call" link, and the phone shows in the header (`1440-first.jpg`, `1024-first.jpg`). The proof line reads "Open now · until 5:30 pm · 4.8 ★ Sample rating". The grey band peeks about 75px, and the receipt-strip signature is in the first screen.
Holding it under 10:
- The left third of the composition is a hatched placeholder fill (`1440-first.jpg` ticket photo). That is scored under photo, but it weakens the hero.
- The name is said three times in one view: the header "Every Other Friday / EOF · Huntsville", the kicker "Every Other Friday · Huntsville, AL" and the ticket "EOF · Huntsville" (`1440-first.jpg`). The kicker adds nothing.
- The intro timing cannot be checked because there are no frames.

## distinctiveness: 8.5
Earned: the Running Receipt now does real work in at least 7 places. It is the hero ticket, the live estimator output ("RANGE $135 to $185", `1440-full.jpg` #price), the checklist room tabs, the frequency answer slip, the price list, the torn-edge review stubs and the footer "SUBTOTAL / TOTAL / TODAY" close (`1440-full.jpg`, `390-full.jpg`). Cover the logo on any section and it still reads "receipt".
Deductions:
- The same section shape is used 6 times: spine-left strip with content on the right for hero, price, list, how-often, services and contact (`1440-full.jpg`, −0.5).
- The #services dark band is a 3×3 grid with decorative "01…09" numbering and nine identical outline "Price it" buttons. That is the most template-like part of the page (`1440-full.jpg` services, −0.5).
- Mono micro-labels on almost every block ("LINE 02 · SAMPLE", "TICKET 0001 · FRIDAY", "Visit 01"). This is on-concept, but it is the §5 tell in bulk. I counted it in type, not here.

## type: 8.0
Earned: Bricolage display with tight tracking, Figtree body ≥ 16px and DM Mono for receipt lines. There is a real scale-contrast moment in the 4.8★ against the small mono meta (`1440-full.jpg` #reviews). Prices sit in tabular mono.
Deductions:
- Hyphen ranges. The price list reads "$135-$185 … $35-$50" (`1440-full.jpg` price list strip, `390-full.jpg`) and the hours read "8 am - 5:30 pm" (`1440-full.jpg` #area). The estimator already uses "$135 to $185", so the page contradicts itself (−0.5).
- There are 3+ tiny tracked-caps labels in one view: "HOW OFTEN, OR WHAT KIND OF VISIT", "SIZE OF THE HOUSE", "ADD TO THE VISIT", "LINE 02", "SAMPLE" and the asterisk rule (`1440-full.jpg` #price, −0.5).
- The crew triptych body text is a lighter grey than the rest of the body copy, so there are two body inks (`1440-full.jpg` "Which sink spots…").

## layout: 8.0
Earned: the full-bleed sienna break with its photo frame, the staggered (offset) crew triptych, the staggered review stubs and the dark/paper/grey alternation all work. No two dark bands touch (`1440-full.jpg`).
Deductions:
- The spine strip runs the full band height but its content stops early. That leaves about 450px of empty lined paper under the price ticket (`1440-full.jpg` #price, left column) and about 900px under the price list beside the services grid (`1440-full.jpg` #services, left column). It is a blank gap over half a screen (−0.5).
- Hero, price and list are neighbours with the same spine-left shape (`1440-full.jpg` top third, −0.5).
- In #area the left column ends at the ZIP box, and about 400px of grey sits under it next to the photo and hours stack (`1440-full.jpg` #area).

## photo: 5.5
What is shown: every frame is a hatched beige fill with a mono caption ("Photo · Bright, tidy family kitchen in daylight", "Photo · Modest residential kitchen in daylight"). That covers the hero ticket, checklist, the full-bleed break, the triptych, the area photo and the contact ticket (`1440-first.jpg`, `1440-full.jpg`, `390-full.jpg`). The crops are consistent, the captions are on-topic and the frames are built into the signature, which is better than round 2's bare text. But a visitor sees no photograph anywhere, and the half-screen full-bleed break is an empty hatched field (`1440-full.jpg` #break). Still below the floor of 6.
- mustFix: place the approved photos.

## copy: 8.0
Earned: the voice is concrete and trade-true. "Pick your rooms, pick how often, see the number. No phone call required." / "By day ten the house starts to slip" / "Military move-out cleans timed around the packers". There is microcopy at moments of doubt: "We confirm the price on a short walk-through before the first visit.", "Rather talk?" and "We'll call you back to set up a walk-through." Every review, the rating and the prices carry Sample labels (`1440-full.jpg`).
Deductions:
- The same idea appears in back-to-back sections: break h2 "Same crew. Same list. Every Other Friday." and crew h2 "Same crew, same Friday, same list.", plus the hero bullet "Same crew every visit" (`1440-full.jpg`, −0.5).
- Both of those h2s are tricolons (−0.5).
- The footer "Demo images. Photographer credits print here with the licensed photos." and a bare "Image list" read as builder notes, not page copy (`1440-full.jpg` footer).
- The action has many names: "Price my house", "Send my price", "Price this frequency", "Price it" and "Next". They all share the "price" verb, so I am not deducting, but the services buttons could just say "Price it" in the estimator's words.

## mobile: 8.0 (capped: mustFix)
Earned: `390-first.jpg` has the h1 in 3 lines, the CTA and phone above the fold, and a sticky bar with two targets of ≥ 48px. The receipt strips are reordered above their content, the option grids stack to full-width thumb targets and the review stubs stack cleanly (`390-full.jpg`). That is phone-composed, not collapsed.
Deductions:
- `390-full.jpg` is 434px wide, not 390. Every band (header, the grey #price band, the dark #services and #contact bands) stops at x≈390 and leaves a 44px blank strip on the right for the full height of the page. Something is wider than the viewport, which means sideways scroll. **mustFix.**
- I could not check the 320 width from shots. The CSS has `min-width: 390px` and 640 breakpoints only, so the 3-up spine content is untested below 390.

## a11y: 8.0 (capped: mustFix)
Earned: every section's content is now visible in both full-page captures (`1440-full.jpg`, `390-full.jpg`), which was round 2's mustFix. There is one h1 with h2 → h3 order and no skips (dist). The ZIP field has a visible label ("CHECK YOUR ZIP CODE"), and there are forced-colors and reduced-motion media queries in the CSS.
Deductions:
- No reduced-motion screenshot exists and `qa/render.json` is a day old (it lists 5 PNGs from the previous build). So "nothing hidden with reduced motion" is unproven. That was carried as a mustFix last round and is still open. **mustFix.**
- The empty answer bar on the frequency slip (`1440-full.jpg` #how-often) gives no visible "nothing ticked yet" text, so it is unclear what a screen reader hears.

## motion: 8.0
No scroll frames to judge, so this is scored from the hooks in dist: `data-split` (chars and lines), `data-reveal` clip, scale and fade variants, a stagger, the tabbed checklist, the live estimator ticket and the quiz slip. That is more than 3 hooks beyond plain reveals, and entrances vary by role. Nothing in the captures shows motion that explains the thesis: no screenshot shows lines printing onto the strip or a tally building as you scroll. So it stays at the 8 anchor.

## wow: 8.5
Earned: the estimator prints straight onto the receipt ("VISIT / HOUSE / ADD-ONS / RANGE $135 to $185 · Sample pricing", `1440-full.jpg` #price, `390-full.jpg`). The checklist is a receipt with line counts per room. The frequency quiz "prints on the slip". The tool output is in the signature's language, which a homeowner would use.
Deductions:
- The two moments are not connected in motion. There is no visible printing or tally, and the quiz slip shows only an empty bar before input (`1440-full.jpg` #how-often).
- There is no keep/print/text-me action on the priced ticket, so the output can't be kept.

## polish: 8.5
Earned: the header lockup is fixed. The footer is a designed receipt close with a torn top edge and "THANK YOU · SEE YOU FRIDAY" (`1440-full.jpg`). The head has an SVG favicon, apple-touch icon, print and forced-colors styles.
Deductions:
- There are two corner styles: 2px-radius buttons and fields next to fully round "Sample" pills (`1440-first.jpg`, `1440-full.jpg`, −0.5).
- The footer has a stray "Image list" line, and the footer lockup "EOF  Every Other Friday Cleaning" is missing the "·" every other ticket uses (`1440-full.jpg` footer).

## Arithmetic
14×9.0 + 12×8.5 + 10×8.0 + 10×8.0 + 8×5.5 + 8×8.0 + 7×8.0 + 7×8.0 + 12×8.0 + 8×8.5 + 4×8.5
= 126 + 102 + 80 + 80 + 44 + 64 + 56 + 56 + 96 + 68 + 34 = 806 / 100 = **8.06**

Verdict hint: **FIX**. Photo is below its floor and three mustFix items are open.

## Must
1. **Photo** (`1440-first.jpg`, `1440-full.jpg`, `390-full.jpg`: every `[data-photo]` frame). All frames are hatched placeholder fills. Place the approved photos from `niches/cleaning/media/manifest.json`, one per slot, and don't use any photo twice. Until the niche library has real images this site cannot clear the photo floor.
2. **Horizontal overflow at 390** (`390-full.jpg` is 434px wide and every band ends at x≈390). Find the element wider than the viewport. Likely suspects are the full-width spine strip or ticket, the sticky bar, or a torn-edge pseudo-element. Constrain it (`max-width: 100%`, `inset-inline: 0`), and set `overflow-x: clip` on `html, body` as a backstop. Re-capture at 390 and confirm the image is 390px wide.
3. **Stale evidence and missing reduced motion** (`qa/render.json` dated 2026-10-25, PNGs in `qa/screens/` stale). Re-run check-render so render.json lists the current shots and includes the reduced-motion full page, plus 25/50/75 % frames at 1440.

## Should
- **#break / #crew copy:** cut one of the two "same crew" tricolons. Keep the break h2 as "Same crew. Same list. Every Other Friday." (on-name). Retitle #crew to something that answers a different question, e.g. "By the third visit, they know your house." Drop the hero bullet "Same crew every visit" or swap it for "Prices for 3 bed / 2 bath on this page".
- **Price list and hours ranges:** use en dashes or "to" everywhere: "$135–$185" (or "$135 to $185" to match the estimator) and "8 am–5:30 pm" (`#services` strip, `#area` hours).
- **Spine strips:** end the strip at its content (`align-self: start`, `height: auto`) or make it sticky (`position: sticky; top: 96px`) so it rides beside the long #price and #services columns instead of leaving 450–900px of blank paper.
- **#services grid:** remove the decorative "01–09" numbers. Turn the nine cards into receipt lines (name · one-line blurb · "from $X" where `proof.prices` has it), with one "Price it" link per row in the hover/underline language instead of nine outline buttons.
- **Hero kicker:** delete "Every Other Friday · Huntsville, AL" above the h1, since the header and ticket already say it. Use a line that adds information, e.g. "Mon–Fri 8 am–5:30 pm · Sat 9–1".
- **Footer "Photos" column:** remove "Image list" and the "credits print here" sentence. Render real credits from the manifest once the photos are placed.
- **Radius:** pick one. Either give the Sample badges the same 2px corner as the buttons (a stamped look fits a receipt), or round everything.
- **Frequency slip empty state:** print "— nothing ticked yet —" in the bar so the slip never shows an empty box. Make the bar an `aria-live="polite"` region.
- **Typography labels:** in #price, drop "LINE 02 / SAMPLE" or the field labels to sentence case at 15px so there are no more than 2 tracked-caps labels per view.

## Elevate (two weakest: photo 5.5, motion 8.0, motion wins the 8.0 tie by weight)
- **photo:** once real frames land, print them as thermal images. Apply one warm charcoal-on-paper duotone grade across every photo so they read as one shoot printed on the receipt. Cut the hero and ticket photos with the same torn-edge clip-path as the stubs. In the checklist, have each room tab swap in its own process photo (oven, shower glass, mop, high dust), clip-wiped downward like paper feeding out of the printer.
- **motion:** make the scroll print the receipt. As each section enters, its spine-strip lines wipe in left to right one after another (clip-path driven by `--sw-p`). Have the hero ticket's "ROOMS / HOW OFTEN / PRICE" lines fill in from the reader's actual estimator and quiz choices as they pass those sections, so the footer "TOTAL" line arrives already populated. Reduced motion shows every line printed.
