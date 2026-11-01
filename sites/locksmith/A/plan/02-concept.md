# locksmith-A · Concept

## 1. Three obvious concepts, rejected
1. **Big phone + "24/7 Emergency Locksmith" over a dark padlock photo.** Every call-center template; the brief's §4 list verbatim. Rejected: a competitor builds it.
2. **Vertical night timeline rail down the left edge with a ticking header clock.** The brief seed taken literally, and the library already has three rails/clocks (hvac-A Ticket Clock Rail, cleaning-A Visit Timeline Tick, pest-C Dusk Clock). Rejected: template-in-our-own-library.
3. **"Honesty pledge" trust page: three icon cards (Range / Text / ID) + review carousel.** Says the promises instead of showing them; it's every "why choose us" band. Rejected: claimed, not shown.

## 2. Thesis
The page is the split-flap arrivals board of one January lockout: each promise is a timestamp that flips into place, and the page lightens from 10:52 p.m. to 7:00 a.m. as the board clears.

## 3. Signature system: **Split-Flap Night Log** (`data-sw-signature="flaplog"`)
Primitive: a flap tile = dark card split by a 1px horizontal hinge line, Antonio digits/caps, top half 3% lighter; flips (rotateX on top half, 260 ms, 30 ms per character) when its section enters.
- **Hero:** the h1 is three flap rows (`10:52 / Locked out.` · `10:53 / Price said out loud.` · `11:24 / Picked, not drilled.`); times flip in, words line-mask.
- **Header:** a 5-tile mini board (`10:52`) that flips to the time of the section in view (10:53 → 10:55 → 11:21 → 11:24 → 11:30 → 7:00). Static `--:--` hidden; with JS off it shows "Open now" status instead.
- **Story (10:55, the text):** pinned phone; each SMS bubble carries its own flap stamp; bubbles stack as the board flips.
- **Price-it card:** the result range renders as flap tiles (`$95 – $185`), flipping digit by digit on every input change.
- **Proof (reviews):** each review card is a "departure row": flap tag shows the job word (`LOCKOUT`, `FROZEN`, `REKEY`, `DUPLEX`, `BROKEN KEY`) + town, row slides like a board refresh.
- **Services:** board rows (job | sample range | "TONIGHT" or "BOOK" status column in amber/cream).
- **Footer:** board reads `07:00 · NEXT MORNING · REKEY?`, all tiles cream on dawn paper: the board finally cleared.
- **Tone ramp:** section backgrounds step deep #0B1120 → mid #18223A → … → dawn #E4DCCB → paper #F3EEE4 after 11:24 "the door opens".
Wow moment: the header board and section board flip in sync as you scroll; on 11:24 the page flips from night to warm light.

## 4. Type
- Display **Antonio** (700/600, tall condensed, used 2× in library, 0× in niche): departure-board digits and stacked headlines.
- Text **Source Sans 3** (400/600, humanist, readable small on a cold phone in one hand). Pair Antonio+Source Sans 3 unused.
- Accent **JetBrains Mono** 500: SMS bubbles, receipt lines, sample tags only.

## 5. Palette: "Lake Night Navy + Flap-Board Cream + Sodium Amber + Dawn Milk"
| role | hex |
|---|---|
| deep (night bg) | #0B1120 |
| mid (night slate band) | #18223A |
| cream (text on night / flap digits) | #ECE6D6 |
| muted on night | #9AA6BC |
| accent sodium amber | #F0A339 |
| paper (dawn bg) | #F3EEE4 |
| dawn mid band | #E4DCCB |
| ink (text on dawn) | #121826 |
| muted on dawn | #4E5668 |
| amber-ink (accent words on dawn) | #8A4B00 |
| signal ember (on night only: "not drilled" strike, alerts) | #FF7A59 |
| signal brick (on dawn) | #B23A1E |

Contrast (node tools/contrast.mjs, real output):
| fg / bg | ratio | use |
|---|---|---|
| #ECE6D6 / #0B1120 | 15.11 | body on night ✓ |
| #9AA6BC / #0B1120 | 7.67 | muted on night ✓ |
| #F0A339 / #0B1120 | 8.96 | amber words + focus ring on night ✓ |
| #ECE6D6 / #18223A | 12.68 | body on mid ✓ |
| #9AA6BC / #18223A | 6.43 | muted on mid ✓ |
| #F0A339 / #18223A | 7.52 | amber words + focus on mid ✓ |
| #0B1120 / #F0A339 | 8.96 | **primary button text (deep on amber; we do not use white on amber)** ✓ |
| #121826 / #F3EEE4 | 15.33 | body on paper ✓ / focus ring on paper ✓ |
| #4E5668 / #F3EEE4 | 6.36 | muted on paper ✓ |
| #8A4B00 / #F3EEE4 | 5.88 | amber-ink words + focus on paper ✓ |
| #121826 / #E4DCCB | 13.00 | body on dawn ✓ |
| #4E5668 / #E4DCCB | 5.39 | muted on dawn ✓ |
| #8A4B00 / #E4DCCB | 4.98 | amber-ink on dawn ✓ |
| #FFFFFF / #8A4B00 | 6.80 | primary button on dawn tones (white on amber-ink) ✓ |
| #F3EEE4 / #121826 | 15.33 | ink button on paper ✓ |
| #FF7A59 / #0B1120 | 7.33 | ember words on night ✓ |
| #B23A1E / #F3EEE4 | 5.16 | brick words on paper ✓ |
| #F0A339 / #F3EEE4 | **1.81 FAIL** | never words or focus on paper; glow shapes only |
| #2F3B55 / #0B1120 | **1.68 FAIL** | flap hinge lines / rules on night only |
| #C9BFA8 / #F3EEE4 | **1.57 FAIL** | rules on paper only |

## 6. Hero family 4: stacked headline above a cinematic strip
Unique in niche (B=6, C=8), 6 uses in library (max 7). Cliché broken: the stacked lines are not a slogan but a timetable (time column + event column, tabular), and the strip is not decoration: it's "10:52 p.m., outside" with a live open-now flap beside it; the strip warms (filter brightness .7 → 1, amber radial glow at 70% 35%) like a porch light switching on.

## 7. Motion score
- **Intro (≤1.1 s, skippable, text readable at 0 ms):** time tiles flip 10:52/10:53/11:24 (30 ms per char, 260 ms each), event words line-mask up (70 ms stagger), strip glow fades 0 → 1 over 900 ms. Any scroll/key ends it.
- **Story 1 "10:55 · stack":** ≥ 900px, pinned phone (height `calc(4*55svh + 100svh)`): 4 SMS bubbles stack in (call summary → range → tech + van + window → "they'll ask for ID"), header board flips per bubble. < 640px: stacked bubbles, clip reveal.
- **Story 2 "11:24 · wipe":** the night→dawn band: a scroll-driven `--sw-p` wipes the background from #0B1120 to #F3EEE4 top-down while the flap board flips 11:24 → 11:30 and the receipt rows type in (no pin).
- **Hover:** one language: flap hinge line under links/cards slides scaleX 0→1 from left, 200 ms, (hover:hover) only.
- **Reduced motion:** all tiles show final values, no flips, no pin; tones are static per section; phone shows all 4 bubbles.

## 8. Tools
1. **Price it before we drive** (kit `estimator` + `tabs`): inputs what's locked (house/car/safe) · time (day/evening/night) · broken key/damaged lock (y/n) → sample range from facts.proof.prices (+ "what pushes it to the top": nights/holidays, damaged lock) in flap tiles. Hand-off: "Call, we'll say the same range" (tel:) + "Send it to us" prefills form `service`, `when`.
2. **Frozen lock self-check** (kit `checklist`): 3 safe steps (warm the key in your hand, no forcing / no oil, check if the bolt binds only when the door is shut) → "Still stuck? That's our 11:24." → call.
3. **Rekey counter** (kit `estimator`): number of outside locks 1–8 → $65–$95 first + $20–$35 each (Sample) → prefill form service "Rekey after moving in" + count.
4. **ZIP checker** (kit `zip`): facts zips → yes / "outside our usual area, call and we'll tell you honestly" → prefills form ZIP.
5. **Quote form** (kit `form`, multi-step): what's locked → where (ZIP) → when (now / today / book) → how to reach you.

## 9. Voice
- "10:53 p.m. We say the range before anyone drives: $95 to $185 for a house lockout (Sample)."
- "He'll ask for ID first. If he didn't, he'd open your neighbor's door for a stranger too."
- "We pick the lock. If it won't pick, we tell you why before we drill, and what it costs."
Never: "fast", "affordable", "24/7 guaranteed", "best", "secure your world".
