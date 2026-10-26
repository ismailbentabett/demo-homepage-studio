COPY: ok

# Critique: mechanic-C, round 2

Round 1 was scored with no screenshots, from the DOM alone. This round has real evidence (`qa/render.json`, 10 shots, captured 2026-10-26), and it shows a page that is badly broken in a way the DOM hid. **None of the six photos renders.** Every `dist/media/*.jpg` is a 122-byte stub JPEG. So is every file in `niches/mechanic/media/approved/`: the niche library was never really curated. Alt text paints over the header, and the photo frames are empty blocks of colour. Several round-1 scores of 9 do not survive the screenshots.

## Five-second test
- **1440 (`1440-first.jpg`):** "Auto repair in Anchorage. A pink 'Book a drop-off' button, and the phone is top right. 11 years, 187 reviews." I get what, where and what to do. "Why them" is only the proof line. A grey sentence ("Wide shot of a clean auto repair shop interior…") is printed over the logo. The nav is almost invisible. There is no photo, so it reads as a text slide, not a magazine cover.
- **390 (`390-first.jpg`):** same h1 in 3 lines, both actions above the fold, call bar at the bottom. The broken-image alt text overlaps the logo and the Call button in the header.

## First screen: 7.5
**Earned:** the h1 has 7 words and names the trade and the city. There is one primary action and a quieter outline secondary. The phone shows at both sizes. The proof line sits under the h1. A light band peeks about 70px at 1440. The thermo rail and "−8°F" are visible.
**Deductions:**
- `1440-first.jpg`, `390-first.jpg`: the hero image is broken. Its alt string renders as text across the top-left and covers the "FH" logo, and the hero is plain navy with no image (−0.5, mustFix in photo).
- `1440-first.jpg`, `1024-first.jpg`: the nav links (Winter, Breakup, Summer, Services, Area) and "Closed · opens 7:30 am" are ink on deep navy, well under 3:1, and effectively invisible (mustFix a11y; caps this category at 8).
- `1024-first.jpg`: the rail line runs through the kicker, the h1 ("Anchorage") and the proof line, because it sits at x≈78 inside the 24px gutter (−0.5).
- `1440-first.jpg`: the proof line breaks the license mid-token ("SAMPLE-AK- / ANC-11843").

## Distinctiveness: 8
**Earned:** Bodoni Moda with a glacier/fireweed/spruce palette clearly differs from mechanic-B (Syne-style grotesk, green, white). The season chips ("64°F · July", `1440-scroll-50.jpg`) and the seasonal grouping of services ("WINTER · STARTING & STOPPING", `1440-scroll-75.jpg`) carry the car-year idea.
**Deductions:**
- `1440-scroll-25.jpg`, `1440-scroll-50.jpg`, `1440-scroll-75.jpg`: the thermometer rail is not visible in any scroll frame. It lives only in the hero and the footer, so the "live readout ticking as you read" never appears mid-page (−0.5).
- `1440-rm-full.jpg`: mono micro-labels plus middle-dot meta strings on nearly every section are AI-slop tells (−0.5).
- Without photos, the "magazine issue" thesis reduces to a serif plus coloured bands.

## Typography: 8.5
**Earned:** Bodoni Moda display at a real scale contrast (`1440-first.jpg`), Source Sans 3 body at full size, DM Mono as a declared accent. Display tracking is tight and the line-height is display-appropriate. Service titles are well set (`1440-scroll-75.jpg`).
**Deductions:**
- `1440-first.jpg`: the license number breaks across lines at its hyphen. Use a no-break span (−0.5).
- `1440-scroll-75.jpg`: 3+ tracked caps labels in one view (section kickers plus two season group labels) (−0.5). Partly offset by the Bodoni scale contrast.

## Layout and rhythm: 7
**Earned:** the tones alternate (deep → paper → spruce → paper → deep → paper → glacier → paper → deep, `1440-rm-full.jpg`). The tools band is a dense section, the area checker a quiet one, and the services group by season.
**Deductions:**
- `1440-scroll-25.jpg`: a full 1440×900 frame of flat spruce green, with nothing in it. The breakup story's empty photo frame produces a blank gap over a screen tall (−0.5, and it is the most visible failure on the page).
- `1440-scroll-50.jpg`: the full-bleed break is a ~490px navy void with only a caption ("Summer highway, golden hour"). The summer story's left half is empty (−0.5).
- `1440-full.jpg`: the winter story's left column is blank, so the split-story reads as a lopsided right-hand text column floating in empty width.
- `1440-full.jpg`, `390-full.jpg` (motion on): between the tools band and the contact form there is a ~2,400px empty light stretch at 1440. Summer, proof, services and area only appear in the reduced-motion shots. Reveals that never fire without scrolling are a risk for any full-page grab or fast scroll (−0.5).
- `1440-rm-full.jpg`: the breakup story and the services list still stack similar card rows (carried from round 1, not fixed).

## Photo and video: 5
**Earned:** alt text is descriptive now (the round-1 placeholder alts were fixed). There are width/height attributes and no duplicates.
**Deductions:**
- `1440-first.jpg`, `1440-scroll-25.jpg`, `1440-scroll-50.jpg`, `1440-rm-full.jpg`, `390-rm-full.jpg`: **zero photos render.** All six `dist/media/*.jpg` are 122-byte stubs, and the niche library `niches/mechanic/media/approved/` is stubs as well. Every frame is a broken-image icon with alt text or an empty colour block. This is below the 6 anchor ("off-topic frames"), because there are no frames at all. mustFix.
- The alt strings now describe photographs nobody has seen ("a customer at the counter", "gloved hand pointing at a cracked rubber hose"). Once real files land, every alt must be re-checked against the actual frame.

## Copy: 9
**Earned:** concrete trade nouns and Anchorage specifics ("Before Seward, Denali or the Haul Road: belts, hoses, brakes, tires and the spare", `1440-scroll-50.jpg`; "Studs on and off within the state's dates", `1440-scroll-75.jpg`). "Price it" is used consistently on the services. The Sample labels show on reviews and pricing (`1440-rm-full.jpg`). There is honest microcopy under the tools. "We show you what we found before we fix anything" is the guarantee from facts, in plain words.
**Deductions:** none worth a half point. The kicker "Breakup issue" on the first screen sits oddly next to a navy winter hero showing −8°F, but that is a concept issue, not copy.

## Mobile: 8
**Earned:** no horizontal scroll at 320 or 390 (`render.json` overflow is empty). Sections stack cleanly, there is a sticky call/book bar, and the h1 runs 3 lines (`390-first.jpg`).
**Deductions:**
- `390-first.jpg`: the broken hero alt text overlaps the logo and the header Call button (counted in photo, noted here).
- `390-first.jpg`: the mobile bar's "Call (907) 555-0187" wraps to 2 lines in a 48px button. Shorten it to "Call" with the number on one line, or use an icon plus the number (−0.5).
- `390-first.jpg`: the Call button appears twice (header pill and bottom bar) with nothing between them. The header one should go on phones (−0.5).
- `390-rm-full.jpg`: the breakup story's empty frame still leaves a tall blank green block on the phone.

## Accessibility: 7.5
**Earned:** skip link, labelled inputs, ARIA on the tabs and filter group, live regions. Reduced motion shows every section (`1440-rm-full.jpg`, `390-rm-full.jpg`).
**Deductions:**
- `1440-first.jpg`, `1024-first.jpg`: the header nav links and the hours line render in ink (#1A2634) on the transparent header over the deep (#0F1923) hero, roughly 1.2:1 and invisible. mustFix (−1.0).
- `1440-first.jpg`: the broken-image alt text overlaps interactive header content.
- `1440-full.jpg`, `390-full.jpg`: with motion on, large blocks stay invisible until scrolled. That is acceptable, because the reduced-motion shots show them, so it carries no a11y deduction.

## Motion and interaction: 8
**Earned:** reveals fire on scroll (`1440-scroll-75.jpg` shows services visible). There is a split-line h1, tabs and filters, and reduced motion is respected. There are at least 3 hooks beyond reveals.
**Deductions:**
- `dist/index.html` `.header__progress`: animates `width` with `transition: width 100ms linear`, a layout property (−0.5). Use `transform: scaleX(var(--p))` with `transform-origin: left`.
- `1440-scroll-25.jpg`, `1440-scroll-50.jpg`: the promised "photo unclips vertically" story move has no photo to unclip, and the rail readout is not visible to tick mid-scroll. The motion idea a visitor would describe does not show up (−0.5). Round-1 note on uniform reveals still applies.

## Wow moment: 7.5
**Earned:** the warning-light decoder (`1440-full.jpg`, tools band) is a genuinely useful tool. The thermo rail is tied to the thesis.
**Deductions:**
- `1440-scroll-25.jpg`, `1440-scroll-50.jpg`, `1440-scroll-75.jpg`: the signature rail is absent from every mid-page frame. A static line plus "−8°F" in the hero is all a visitor sees (−0.5).
- The estimator output is still a plain text line in a box (carried from round 1, not fixed) (−0.5 vs the 8 anchor, offset by the decoder).

## Polish: 7
**Earned:** favicon, apple-touch icon, OG image, JSON-LD AutoRepair, theme-color, forced colors.
**Deductions:**
- `1440-first.jpg`, `1024-first.jpg`, `390-first.jpg`: a broken-image glyph and an alt string in the header on all three viewports (−1.0). Nothing looks less finished.
- `.header__progress`: `transition: width` (counted in motion, not twice).
- `1440-scroll-50.jpg`: a caption ("Summer highway, golden hour") captioning an empty navy rectangle.

## Arithmetic
14×7.5 + 12×8 + 10×8.5 + 10×7 + 8×5 + 8×9 + 7×8 + 7×7.5 + 12×8 + 8×7.5 + 4×7
= 105 + 96 + 85 + 70 + 40 + 72 + 56 + 52.5 + 96 + 60 + 28 = 760.5 / 100 = **7.61** (7.605)

Photo (5 < floor 6) and a11y (7.5 < floor 8) are below their floors, so the verdict is FIX. This is round 2 in fast mode, so expect NEEDS_HUMAN.

## Must
1. **where:** `1440-first.jpg`, `1440-scroll-25.jpg`, `1440-scroll-50.jpg`, `1440-rm-full.jpg`, `390-rm-full.jpg`; `dist/media/*.jpg`
   **problem:** all six photos are 122-byte stub JPEGs, and so is the whole of `niches/mechanic/media/approved/`. No image renders anywhere on the page.
   **fix:** re-run media curation for the mechanic niche (`/next-niche mechanic`) so the approved library holds real files. Rebuild, then check every alt string against the actual frame.
2. **where:** `1440-first.jpg`, `1024-first.jpg`: `.header__links a`, `.header__hours` on the transparent header over `t-deep`
   **problem:** the nav links and hours are ink on navy, about 1.2:1 and invisible.
   **fix:** while the header is not `.is-scrolled` and sits over the deep hero, set the header colour to the paper ink (#F4F6F8) for the links and to a ≥4.5:1 muted paper tone for the hours. Keep ink only once `.is-scrolled` gives it a paper background.

## Should
1. **where:** `1024-first.jpg`, `.hero__rail`
   **problem:** the rail line runs through the kicker, h1 and proof text at 1024.
   **fix:** put the rail in its own grid column (or `left: calc(var(--gutter) / 2)`), and pad the hero content by rail width + 16px below 1200px.
2. **where:** `1440-first.jpg`, the hero proof line
   **problem:** "SAMPLE-AK-ANC-11843" breaks at its hyphen.
   **fix:** wrap the license in `<span style="white-space:nowrap">`, or use non-breaking hyphens (U+2011).
3. **where:** `390-first.jpg`, the mobile bar
   **problem:** the Call button text wraps to 2 lines, and the header Call pill duplicates the bar.
   **fix:** bar label "Call" plus the phone icon (the number goes in `aria-label`). Hide the header Call pill under 900px.
4. **where:** `.header__progress`
   **problem:** animates `width`.
   **fix:** `width:100%; transform: scaleX(var(--p,0)); transform-origin: left; transition: transform 100ms linear`.
5. **where:** `1440-full.jpg`, `390-full.jpg`
   **problem:** summer, proof, services and area are invisible in the full-page motion shot, about 2,400px of blank.
   **fix:** start `[data-reveal]` from `opacity:.001` with a short translate, and trigger at `top 95%`. Alternatively, make sure the reveal script marks everything already passed or at load as revealed, so nothing stays hidden if the observer misses it.
6. **where:** `1440-scroll-25.jpg`, `#breakup-story`
   **problem:** even with a real photo, the frame takes a full screen of height before the heading.
   **fix:** cap the story frame at `min(70svh, 640px)` and put the heading beside or over it, not 900px below.
7. **where:** `1440-rm-full.jpg`, the estimator result
   **problem:** the output is a plain text line (carried from round 1).
   **fix:** render it as a seasonal "ticket": a mono temperature/season stamp, the range in Bodoni at display size, and the note underneath.

## Elevate
1. **photo (weight 8, weakest):** once real files exist, art-direct them as one Alaskan shoot. Grade every frame into a two-tone of the section's own season colour (glacier for winter, spruce for breakup, warm paper for summer), so each photo becomes a "page" of the car-year issue. Tie the vertical unclip to the rail, so the photo opens as the temperature ticks to that season.
2. **layout (weight 10, tied with polish at 7, broken by weight):** give the scroll a magazine-spread shape. Each season story becomes a spread: the photo bleeds off one edge, the season temperature is set huge in Bodoni across the gutter (type over image, the one grid-break), and the copy column sits tight beside it. Alternate the bleed side and the spread width so that winter, breakup and summer read as three different pages, not three equal splits.
