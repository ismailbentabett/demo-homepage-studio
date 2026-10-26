COPY: needs copy-chief

# pool-A (Tileline Pool Care), critique round 1 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "A pool service, weekly, it writes down what it did. Tampa (I only know that from the small grey eyebrow). About $140–190 a month, sample. Call button top right, 'Get my number' is the main action." Why them: the report after every visit. That reads clearly. What it doesn't do is look like a pool company: there is no water, no pool and no photo. The right half of the hero is an empty blue gradient.

**Biggest problem:** all nine media slots are placeholders (`alt="Placeholder for hero-A2"` etc., grey-blue gradient boxes in 1440-rm-full.jpg). The concept promised a full-bleed video hero, and it isn't there. The promised signature, the sticky visit card that fills in as you scroll, is not on screen in any frame. As built, this is a well-typed wireframe.

## First screen: 7.0
- Earned: 1440-first.jpg has a 5-word h1 at 2 lines and one loud primary ("Get my number") beside a quieter ghost button. The phone is in the header at both sizes, the sample price line sits under the h1, and the paper band peeks about 64px. 390-first.jpg: h1 at 4 lines, both buttons above the fold.
- −1.0: the hero is family 1 (video + scrim) with no video and no image. 1440-first.jpg shows a dark gradient with a thin rule, and the right 55% of the frame is empty.
- −0.5: the h1 has no place in it. "Tampa, Florida" only appears in the 13px mono eyebrow.
- The signature shows up only as a 2px left rule, with no "07:58 Arrive" stamp and no visit card.

## Distinctiveness: 6.5
- Earned: the timestamps 08:02/08:09/08:15/08:22 on the process cards (1440-rm-full.jpg) are a real idea, and so is "End of log" in the footer.
- −1.0: the signature appears in fewer than 4 sections. The waterline rail shows only in the hero and the process band (1440-first.jpg, 1440-scroll-25.jpg). There are no stamps on reviews, pricing, ZIP or contact, and the sticky visit card, which is the core of the concept, is absent.
- −0.5: AI tells: mono micro-labels everywhere (SAMPLE REVIEW pills ×5 plus mono meta in 1440-scroll-75.jpg) and middle-dot meta strings ("Jennifer W. · Brandon · Weekly pool cleaning").
- Navy plus aqua with 2×2 bordered cards (process, reviews) and a 3×2 price grid reads like a SaaS dark template. Cover the logo and it isn't clearly a pool company.

## Typography: 7.5
- Earned: Sora at display size with tight tracking gives real scale contrast against Karla body (1440-first.jpg). En-dash ranges ($140–$190), curly quotes in reviews, body ≥ 16px.
- −0.5: 3+ tiny tracked mono caps labels in one view (1440-scroll-75.jpg: five "SAMPLE REVIEW" pills plus mono bylines).
- Section stamps set as mono h2s ("Sample pricing", "From real visits", 1440-scroll-50.jpg) are weaker than the Sora h2s next to them, so the hierarchy changes from section to section.

## Layout and rhythm: 7.0
- Earned: tones alternate (deep / paper / deep / mid / paper / aqua / deep in 1440-rm-full.jpg), there is a 3×2 pricing grid and a split repair section.
- −0.5: a blank gap over half a screen. The "Visual pause" break band (1440-scroll-25.jpg) is about 600px of empty gradient with vertical lines, and the troubleshooter's placeholder frame (1440-scroll-50.jpg) is another full-width blank block.
- −0.5: the same shape repeats ("heading-left + 2×2 bordered cards" for process and reviews, plus a stacked heading + card for troubleshooter, ZIP and contact, 1440-rm-full.jpg).
- Most of the 1440 width is unused in the troubleshooter and service area, which leave a narrow column on the left with nothing on the right (1440-rm-full.jpg).

## Photo and video: 4.0
- 1440-rm-full.jpg, 390-rm-full.jpg: every frame (hero, 4 process images, break, cloudy water, pump, neighbourhood) is a gradient placeholder. There is no video, though the concept promised a dusk lanai clip. The alt text reads "Placeholder for …". This is below the floor and blocks shipping (mustFix).

## Copy: 7.0 (mustFix present, capped)
- Earned: concrete trade nouns, like "skimmer and pump baskets", "filter pressure… clean or backwash", "a humming pump is often a small part". The voice matches the concept. "Price it" is used consistently on the price cards.
- mustFix: the h2 "From real visits" sits on top of reviews labelled Sample (1440-scroll-75.jpg). It says real, and the label says sample.
- mustFix: the form success text "We will text you a window and a sample number shortly" pretends the lead was sent (dist/index.html `[data-thanks]`). DEMO-RULES requires the honest demo success state.
- −0.5: 4 em dashes ("— every single week", "— no upsell, just the fix", "08:00 — Visit log", "Filter pressure checked — if…").
- −0.5: slogan endings, like "A written report you can trust." and "no upsell, just the fix". Limp microcopy: "ZIPs covered: see checker above or text us."
- "Salt cell check and swap" in the repair list is not a service in facts.json.

## Mobile: 8.0
- Earned: 390-first.jpg composes well, with a call button in the header, h1 at 4 lines and both actions above the fold. 390-rm-full.jpg stacks cleanly, and render.json reports no overflow at 320/390.
- Nothing is re-cut for the phone (there's no image to re-cut). The pricing section on mobile (390-rm-full.jpg) is 6 stacked cards, about 1.5 screens of the same shape, which needs a phone-specific decision.

## Accessibility: 7.5
- Earned: there's a skip link, every word shows in 1440-rm-full.jpg and 390-rm-full.jpg, and the inputs are labelled.
- −1.0: all 9 images have meaningless alt text ("Placeholder for test-vials"), so a screen reader announces filenames.
- The success state misleads assistive-tech users as well (see copy).

## Motion and interaction: 6.5
- Earned: split-line h1, reveals, a clip reveal on frames, a stagger on the cards.
- −1.0: the same reveal on almost every section, with 58 `data-reveal` on one page. In 1440-scroll-50.jpg the pricing heading is in view but its six cards haven't appeared yet. In 1440-scroll-75.jpg "Service area" is in view with its body still blank. Content waits for the reveal.
- −0.5: neither motion story from the concept is visible. No visit-card lines type in, and the waterline doesn't advance past the process band (1440-scroll-25.jpg: the rail stops at the end of the process section).

## Wow moment: 6.0
- −1.0: the troubleshooter (1440-rm-full.jpg) is four checkboxes and a "Book a cleanup" button, and no cause or first-action output appears in any frame. The plan picker from the concept is missing.
- −1.0: the signature moment (a visit card that ends as a completed sample report) is not built. Nothing here would make a homeowner show their partner.

## Polish: 7.5
- Earned: SVG favicon, apple-touch, OG 1200×630, JSON-LD, print stylesheet, forced-colors rules, width/height on images.
- −0.5: stray separators. In 1440-rm-full.jpg the hours line starts with an orphan "·" (empty open-now span), and the footer reads "Top · · email · phone".

## Arithmetic
14×7 + 12×6.5 + 10×7.5 + 10×7 + 8×4 + 8×7 + 7×8 + 7×7.5 + 12×6.5 + 8×6 + 4×7.5
= 98 + 78 + 75 + 70 + 32 + 56 + 56 + 52.5 + 78 + 48 + 30 = 673.5 / 100 = **6.74** (6.735)

Verdict expected: **FIX** (photo below the floor, distinctiveness/motion/wow under the fast pass mark, a11y below its floor of 8, mustFix not empty).

## Must
1. **All media slots, 1440-rm-full.jpg / 390-rm-full.jpg.** Problem: every image is a placeholder and there is no hero video. Fix: fill all 9 slots from the approved pool library (screened lanai pool, brush on tile, test kit, baskets, pump pad, Tampa-area pool) and add the dusk hero video with a poster. If the niche library has no approved media, the site cannot be judged as finished: stop and send it to media curation.
2. **Image alt text, dist/index.html all `img[data-photo]`.** Problem: alt="Placeholder for …". Fix: describe each frame ("Brush working algae off the waterline tile of a screened pool").
3. **#reviews h2, 1440-scroll-75.jpg.** Problem: "From real visits" over Sample reviews. Fix: "From sample visit reports", or "What a Tuesday text looks like (sample reviews)".
4. **Form success `[data-thanks]`, dist/index.html.** Problem: "We will text you a window… shortly" pretends it sent. Fix: "Thanks, {name}. In your version this request goes straight to your phone and inbox. Nothing was sent."

## Should
1. **Hero h1, 1440-first.jpg.** Problem: no place in the h1. Fix: "Tampa pool care, written down." (5 words, keeps the idea).
2. **Signature, whole page.** Problem: the waterline and stamps stop after #process. Fix: put a timestamp stamp on every section head (08:30 Troubleshoot, 08:34 Price, 08:38 Reviews, 08:40 Area, 08:42 Report sent), and run the rail through every section to the footer.
3. **Break band, 1440-scroll-25.jpg.** Problem: about 600px of empty gradient. Fix: once there's a photo, cap it at 60svh with a stamp caption, or cut the band.
4. **Reveal timing, 1440-scroll-50.jpg / 1440-scroll-75.jpg.** Problem: content still hidden with its heading in view. Fix: trigger at `top 90%`, keep 600ms or less, and leave quiet sections (service area, pricing body) static.
5. **Mono labels, 1440-scroll-75.jpg.** Problem: 5 "SAMPLE REVIEW" pills plus a header pill. Fix: one "Sample reviews" label in the section head and a small inline "Sample" after each name, not a pill per card.
6. **Em dashes, dist/index.html.** Problem: 4 on the page. Fix: use a colon or a full stop in "— every single week", "— no upsell", "Filter pressure checked — if…" and "08:00 — Visit log" ("08:00 Visit log").
7. **#service-area note.** Problem: "ZIPs covered: see checker above or text us." Fix: list the 7 areas as chips beside the checker and drop the line.
8. **Repair list.** Problem: "Salt cell check and swap" is not a facts.json service. Fix: replace it with "Leak detection" (dye and pressure tests).
9. **Hours line and footer, 1440-rm-full.jpg.** Problem: leading "·" and a doubled "· ·". Fix: render the separator only when the open-now span has text, and remove the empty footer slot.
10. **Troubleshooter output.** Problem: no result shows when a box is ticked. Fix: write a cause + first action per symptom into `[data-checklist-result]` (e.g. Cloudy: "Usually low chlorine after rain or a dirty filter. First: test, shock, clean the cartridge.").

## Elevate
- **Photo (4.0):** Make the photos read as one Tuesday morning. Use one cool dawn grade across every frame. Frame each process photo as a log entry, with the timestamp burned into the frame corner like a phone photo attached to the report. Use one full-bleed waterline-tile close-up as the page's break, with the cobalt rail continuing straight out of the tile line.
- **Wow (6.0):** Build the visit card as the page's spine. It's a sticky report card at the right on desktop and a bottom sheet on phones, and it ticks in a line for each section as you pass it (Arrive, Skim, Brush, Test, Price, Report sent). The troubleshooter's answer should print in the same card format: symptom, likely cause, first action and a sample price, so the tool output and the signature are one object you'd screenshot and send.
