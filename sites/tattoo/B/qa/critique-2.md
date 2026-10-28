COPY: ok

# tattoo-B, critique round 2 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "A tattoo and piercing studio in Philadelphia that opens every needle in front of you and puts its prices on the page. I book a consult or text them. Why them: the sterilization log is on the counter and I'm allowed to see it." The answer is now in the h1, not only in the eyebrow.

Fixed since round 1, so not listed again: the h1 now names the trade and city; the photo crop no longer shows the grip lettering or the sticker wall; the tape-label underscores are gone; the ear map opens on LOBE; the ear-map and estimator h2s are 2 lines each; the services ledger is grouped into tattoo, piercing and care.

## First screen: 9
"Philadelphia tattoos, logged clean." gives trade, city and promise in 4 words (1440-first.jpg). The session sheet with tape, clip, needle pouch and CHECKED stamp is the signature at 0%. There is one loud primary and a quiet Text us, the phone is in the header, and the proof line carries a SAMPLE RATING pill. 390-first.jpg: h1 in 3 lines, both buttons above the fold, the sheet peeks, and the call bar is present.
- The next band still peeks only as tape plus about 20px of paper at 1440 (1440-first.jpg). Not enough to lose the 9, but it keeps it from 9.5.

## Distinctiveness: 9
The indicator tape seals every tone change ("ENTRY 01 · SERVICES", "ENTRY 06 · PIERCING"; 1440-first.jpg, 1440-scroll-75.jpg). The session sheet comes back as the estimator output and the CHECKED stamp repeats (1440-scroll-50.jpg). Nothing like sibling A.
- Mono micro-labels and middle-dot strings are still in most views (1440-scroll-25.jpg "01 · LOAD", 1440-first.jpg status line), −0.5.

## Typography: 8.5
The Geist 800 / Hanken / Martian Mono system reads like a printed form (1440-first.jpg).
- The FAQ h2 "Ask anything. Nobody here thinks it's a silly question." runs 4 lines at 1440 (1440-rm-full.jpg, ~83% down), and the cycle and hygiene h2s run 3 lines each (1440-scroll-25.jpg, 1440-scroll-50.jpg), −0.5.
- Still a lot of tracked mono caps per view (1440-first.jpg: eyebrow, sheet keys, status line, pills), −0.5. Recovered slightly by the cleaner tape labels.

## Layout: 9
The tone rhythm is deep / paper / deep / light / photo / paper / deep / paper / rose / light / deep (1440-rm-full.jpg). The grouped ledger breaks the flat 10-row run.
- 1440-scroll-50.jpg: the hygiene left column under the stamp and the link is still about 150px of empty space next to the tall checklist. Minor.

## Photo: 8
1440-scroll-50.jpg: the re-crop is clean (no lettering or sticker wall) and on-topic, and the rose duotone fits the palette.
- It is still the only photograph on a tattoo homepage. There is no sequence (setup, cycle, result) and no healed work, so the page proves process but never shows skin. Below the 8.5 floor.

## Copy: 9
The h1 now works. The voice is on concept throughout: "Your needles come sealed. You watch us open them." (1440-scroll-25.jpg), "The price on this page is the price in the chair." and "Too small to hold up? We'll say so." (1440-rm-full.jpg). The primary action is the same everywhere and Sample labels are on the rating, sheet, prices and reviews. No invented claims against facts.json.
- The FAQ h2 is wordy (covered under Type).

## Mobile: 9
390-first.jpg is composed and the bar is present. In 390-full.jpg the ledger, cycle cards, estimator and ear map stack cleanly. Overflow is clean at 320 and 390 (render.json).

## Accessibility: 9
1440-rm-full.jpg and 390-rm-full.jpg show every word, with the gauge static and the tapes drawn. dist has :focus-visible rings in rose / rose-deep with 3px offset, aria-labelledby on every section, aria-live on the ear tag, and forced-colors and print rules. Tap targets in 390-first.jpg are large.

## Motion: 8.5
The pinned autoclave story with the dialling gauge and active step explains the cycle order (1440-scroll-25.jpg).
- Everything else is a uniform fade. The tape-darkening, which is the concept's thesis, never shows as a moment in any frame.
- 1440-full.jpg shows ~1400px of empty graphite after the cycle section (the pin spacer). It is probably a capture artefact, but check that the unpin leaves no dead scroll.

## Wow: 9
The gauge story, the estimator printing a session sheet in the hero's language, and the ear map with a pre-filled tape tag (1440-scroll-75.jpg) are tied to the trade's real fear.

## Polish: 9
The tape labels are clean now (1440-first.jpg "CYCLE 0412 · PASS"). apple-touch, OG, JSON-LD, print and forced-colors are present.

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×9 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×9
= 126 + 108 + 85 + 90 + 64 + 72 + 63 + 63 + 102 + 72 + 36 = 881 / 100 = **8.81** (ELEVATE; Photo below its 8.5 floor, Type and Motion below 9)

## Must
None.

## Should
1. **#faq h2:** 4 lines at 1440. Cut to ≤ 2 lines, e.g. "Ask anything. No silly questions."
2. **#cycle h2 and #hygiene h2:** 3 lines at 1440. Widen the heading column (max-width ~14ch → 18ch) or trim, e.g. "Seven checks before the needle." Aim for 2 lines.
3. **#hero:** cut to ~88svh, or move the tape up, so 60-100px of the services ledger (heading start) shows under the fold at 1440×900.
4. **#hygiene left column:** fill the empty space under the stamp and link. Pin the column sticky beside the checklist, or put the sample cycle-log excerpt there.
5. **Cycle pin:** confirm the 1440-full.jpg gap is only the capture. If real scroll also has dead graphite after step 05, shorten the pin end (`end: "+=" + steps*~60vh`).
6. **Mono labels:** drop the low-value mono prefixes (for example the status line's middle-dot run in the hero proof line) so each view holds at most 2 tracked-caps labels.

## Elevate
- **Photo:** give photography a role in the log. Set 2-3 approved frames (sealed pouch or tray setup, the current machine-in-caps frame, a healed piece) as taped evidence prints clipped into the cycle, hygiene and reviews entries, all in the same rose duotone. The page then reads setup → cycle → result and finally shows skin.
- **Motion:** make the indicator tape visibly cycle. As each section enters, its tape stripes scrub from pre-cycle tan to cycled umber with the label ticking "PASS" and the CHECKED stamp landing at the end. The thesis then becomes the scroll language instead of uniform fades (reduced motion: tapes drawn dark, no scrub).
