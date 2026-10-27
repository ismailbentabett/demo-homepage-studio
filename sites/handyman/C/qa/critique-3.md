COPY: ok

# Critique round 3: handyman-C (fast mode, scored as strict anchors)

## Five-second answer
1440-first.jpg / 390-first.jpg: "A handyman in Louisville who does the small fixes on old houses (porch boards, screen doors, plaster cracks) in Old Louisville, Germantown, Highlands and Crescent Hill. I price a visit or call (502) 555-0147. Why them: they know my house type and say what it costs (Sample rating 4.8)." Answered on both viewports.

What changed since round 2: the stock photos are gone; every image slot is now a drawn "sheet" (graph-paper frame, numbered red callouts, SHEET 00–05 title block naming house type and neighborhood). The skyline band "Four house types. One short list each." is new. Judged on what the screenshots show.

## firstScreen: 8.5
Earned: h1 "Small fixes for old Louisville houses." 6 words, 2 lines at 1440, 2 lines at 390; street-sign signature ("Louisville / HANDYMAN SERVICES") is in the hero; proof line with SAMPLE RATING; phone in the 1440 header; next paper band peeks ~56px (1440-first.jpg). Hero sheet swings on a nail: concept delivered.
- 1440-first.jpg: "Price a visit" and "Call (502) 555-0147" are both filled brass, same size, same weight. Two equally loud buttons (−0.5).
- 390-first.jpg: the drawing is entirely below the fold (only its hanger wire peeks behind the mobile bar); the phone first screen is text-only, so the signature sheet is not part of the phone composition. The two hero buttons are also misaligned (Call button starts ~2px right of "Price a visit" and is wider), which looks accidental.

## distinctiveness: 9.0
Earned: street-sign blade appears in hero, picker (390-full.jpg / 1440-rm-full.jpg), all four stops, skyline band (signs on posts at each house), review cards (neighborhood chips), footer (1440-full.jpg). Layout families a template would not use: drawn survey sheets, the house-type skyline on a dashed route, hand-drawn price tags with string holes, the Derby checklist driving a drawing (1440-scroll-75.jpg). Palette (bourbon brown + sign green + brass) and Aleo slab differ from Punchclock (A, cream/red grotesk timecard) and Pegboard (B, green/yellow condensed caps).
- Not a 10: four stops repeat "sign left rail, sheet + text" (1440-scroll-25.jpg, 1440-scroll-50.jpg); varied within, but cover-the-logo on a single stop reads "nice illustrated service section" more than "Camelback".

## type: 8.5
Earned: Aleo display at real scale contrast against Figtree body, DM Mono declared as accent, en-dash ranges in prices and hours (dist/index.html: "$320–$460", "7:30 am – 5 pm"), tight display leading.
- 1440-first.jpg: tracked mono caps everywhere in one view: HANDYMAN SERVICES, SCREEN DOOR, BOARDS, RAIL, SHEET 00 title, SAMPLE RATING (−0.5, 3+ tiny tracked caps labels).
- 1440-full.jpg: a mono eyebrow sits above every h2 (FOUR STOPS, ONE ROUTE / STOP 1–4 / BETWEEN STOPS / WHAT A VISIT COSTS / BEFORE THE FIRST SATURDAY IN MAY / FROM THE ROUTE / LAST STOP). Some earn their keep (STOP n), the rest are the eyebrow tell.

## layout: 8.5
Earned: 12 sections, tones alternate cleanly (dark hero → paper picker → brown stop 1 → paper stop 2 → dark skyline → light stop 3 → brown stop 4 → paper prices → teal checklist → light reviews → dark contact → paper footer), full-bleed skyline break, dense price tags vs quiet picker (1440-full.jpg). No two dark bands touch.
- 1440-full.jpg (bottom) / contact band: the form card ends ~600px above the end of the left column (hours + ZIP), leaving a dead brown rectangle under the form at 1440. Not half a screen, but the most unbalanced moment on the page.
- 1440-full.jpg: four stop sections share one skeleton (sign rail left, content right); the variation is inside the content, not in the section shape.

## photo: 9.0
Earned (judged as drawn treatments, no stock on page): one consistent "sheet" system across hero and every stop (graph paper, ink outlines, numbered red callouts, SHEET 0n title block naming house type + neighborhood). The checklist sheet "FRONT PORCH, AS FOUND / YOUR PORCH" (1440-scroll-75.jpg) uses the image as the tool output, which stock never does. Footer honestly says "Drawings are illustrations, not photos of real jobs." Nothing broken or blank.
- 1440-scroll-50.jpg / 1440-full.jpg: the Highlands sheet (ladder + fan) is visibly sparser than the others, more diagram than house; the one weak frame in the set.

## copy: 9.0
Earned: trade-native nouns ("plaster crack over the mantel", "Anything past the shutoff valve goes to a plumber", "Wood frame cottages swell in July and shrink in January"), honest limits box ("Where we stop"), pricing logic ("five small fixes cost what one trip costs"), the checklist's empty state "Nothing ticked yet. Your porch is ready, or you have not looked." All facts trace to facts.json (guarantee, prices, areas). Sample labels on every price and review (1440-full.jpg).
- 1440-scroll-25.jpg / 1440-scroll-50.jpg: per-stop CTAs each invent a new verb ("Price my porch", "Fix the screen door", "Book assembly", "Send my report", "Book this", "Book a porch visit") against the header/hero "Price a visit". Contextual, so not a full deduction, but the funnel has no single name below the hero.

## mobile: 8.0 (capped by mustFix)
Earned: no horizontal scroll at 320/390 (render.json), sticky Call / Price a visit bar, picker stacks into a sign list with services under each (390-full.jpg), price tags stack one per row, checklist rows thumb-sized.
- 390-full.jpg (contact, form step 1): the form's "Next" button renders as an unstyled browser-default button, about 32px tall: under the 48px tap target and the only control that advances the lead form. mustFix.
- 390-first.jpg: hero not re-cut for the phone; the drawing falls under the fold.
- 390-full.jpg (footer): "(502) 555-0147 ·" wraps with the middle dot hanging at the line end and the email alone on the next line.
- 390-first.jpg: mobile bar's "Price a visit" is signal red while the same action is brass in the hero above it; two colours for one action.

## a11y: 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word, sign and sheet (the picker signs that are hidden pre-flip in 1440-full.jpg are present in reduced motion). One h1, h2 → h3 order without skips (dist/index.html). focus-visible 3px brass outline with 3px offset, forced-colors media query, skip link, ZIP and checklist live text.
- 1440-full.jpg / 390-full.jpg: the default "Next" control in the lead form takes no part in the designed focus system (browser default chrome on a cream card).

## motion: 8.5
Earned: distinct hooks: hero sheet swings on its nail, dotted route draws down the stop rail (dashed line in 1440-scroll-25.jpg / 1440-scroll-50.jpg), street signs flip up on arrival (hidden pre-trigger in 1440-full.jpg picker, present in 1440-rm-full.jpg), checklist ticks mark fixes on the porch drawing (1440-scroll-75.jpg), skyline route with its traveller dot (1440-full.jpg). Entrances vary by role.
- No single motion idea a visitor would retell; the route line is a thin dashed rule on the far-left gutter (1440-scroll-25.jpg) and reads as a margin ornament, not as "walking from house to house".

## wow: 8.5
Earned: the Derby checklist is tied to the trade, the city and the season ("Before the first Saturday in May"), and its output is the drawing itself with numbered callouts (1440-scroll-75.jpg). A homeowner would use it.
- 1440-scroll-75.jpg: the text result is a plain dark box with one line; no visit recommendation shown in the empty state, no printable/keepable sheet in the screenshots. Short of "the tool's output is designed in the signature's language".

## polish: 8.0
Earned: SVG + apple-touch icon, OG 1200×630, JSON-LD, print stylesheet and forced-colors in dist/index.html; hand-drawn price tags and sheet title blocks are consistent.
- 1440-full.jpg / 390-full.jpg: unstyled default "Next" button in the lead form, the one stray browser style on the page (−0.5).
- 1440-scroll-50.jpg: on the "Inspection repair lists" card the ruled-paper lines do not sit on the text baselines; rules slice through the body copy and the mono checklist items.
- Radius mix: pill chips in the form, 4px buttons, square sheets, rounded review cards (1440-full.jpg).

## Arithmetic
14×8.5 + 12×9.0 + 10×8.5 + 10×8.5 + 8×9.0 + 8×9.0 + 7×8.0 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.0
= 119 + 108 + 85 + 85 + 72 + 72 + 56 + 59.5 + 102 + 68 + 32 = 858.5 / 100 = 8.59 (8.585)

## Must
1. **#contact lead form, step 1 "Next" button** (390-full.jpg, 1440-full.jpg): unstyled browser-default button, ~32px tall, below 48px tap target. Fix: give the form's step buttons the site's primary button class (brass fill, ink text, min-height 48px, 0 18px padding, same 4px radius and focus ring as "Price a visit"), label it "Next: your street" or similar, full width under 640px.

## Should
1. **Hero buttons** (1440-first.jpg): both filled brass. Make "Call (502) 555-0147" the quiet secondary: transparent fill, 2px brass border, cream text; keep "Price a visit" filled.
2. **Hero buttons on 390** (390-first.jpg): Call button sits ~2px right of and wider than "Price a visit". Make both `width:100%` (or both auto) with the same left edge.
3. **Mobile bar colour** (390-first.jpg): "Price a visit" is red in the bar, brass in the hero/header. Use brass for the bar's primary to match; keep red for callouts only.
4. **Footer contact line on 390** (390-full.jpg footer): drop the middle dot under 640px and stack phone and email as two lines, each a 48px link.
5. **Inspection card rules** (1440-scroll-50.jpg, #crescent-hill card 2): set the ruled background `background-size` to the text line-height (e.g. 1.75em lines at the body size) and offset so rules sit under baselines, or drop the rules on body text and keep them only behind the mono checklist.
6. **Contact band balance** (1440-full.jpg bottom): the form card ends far above the left column. Move the ZIP check under the form in the right column at ≥900px so both columns end within ~80px.
7. **Highlands sheet** (1440-scroll-50.jpg): the ladder/fan diagram is the thinnest drawing; draw the bungalow (porch, tapered columns) with the 12-foot ceiling shown as a section cut, so it matches the other house sheets.
8. **Eyebrows** (1440-full.jpg): keep STOP n and the sheet labels; delete the mono eyebrow above "Pick your street", "Four house types", "Most lists fit in a half day" and "Neighbors, by street" to get under 3 tracked caps per view.

## Elevate
- **mobile**: compose the phone first screen instead of collapsing the desktop one. Bring a cropped detail of the hero sheet (the porch with callouts 1–3) up beside or behind the street sign so the 390 first screen shows sign + drawing + h1, and give each stop a phone-specific order (sign → sheet crop → fixes) so 390 reads as its own walk.
- **polish**: carry the "sheet" language into the last controls. Make the lead form a numbered survey sheet (SHEET 06, YOUR LIST) with the same graph-paper frame, title block and red callout numbers for its steps, so the form, ZIP check and footer close the walk in the same drawn system instead of ending on generic form chrome.
