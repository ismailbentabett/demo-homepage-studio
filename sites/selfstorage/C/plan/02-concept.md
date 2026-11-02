# Concept — selfstorage-C (Second Season Storage)

## Three rejected alternatives
1. **The facility tour.** Hero = drone shot of roofs; sections = gate, hallway, unit, office. Rejected: every competitor does this; it says nothing about Clearwater or the calendar.
2. **The price grid.** Hero = "Units from $49"; body = size chart with clip-art boxes. Rejected: bait-rate look, no trust, no local texture, violates brief §4.
3. **The moving-day story.** Hero = couple with box; sections = pack, load, drive, unload. Rejected: generic stock narrative, ignores snowbirds/boats/storm season that define Pinellas storage.

## Thesis
The site is a Gulf-coast season guide: every section is pinned to the months when Pinellas renters actually need storage, and a tide-calendar band runs through the page like a waterline, rising and falling with the year.

## Signature system — the tide calendar
A thin horizontal band of twelve month abbreviations (JAN–DEC) drawn as a sine-like tide curve. The current month is marked with a coral dot. As you scroll, the band highlights the months each story belongs to (Apr-May for snowbird departures, Aug-Oct for storm season, Nov-Dec for returns). The band appears in:
1. **Hero** — full-width under the masthead, current month lit.
2. **Stories (#snowbird, #storm, #reno, #boats)** — their months glow as the section enters view.
3. **Reviews** — each review carries a month pill showing when it was earned.
4. **Footer** — the band resets to the month you come back, with the office/gate clocks beside it.

Hook: `data-sw-signature="tide-calendar"`. Motion: the curve draws left-to-right on intro (≤ 1 s); month dots fill via `--sw-p` as sections enter.

## Type
- Display: **Fraunces** (variable serif, optical sizes). Warm, characterful, good italics for cover lines and story headlines. Used ≤ 3 times in library; not used in selfstorage siblings (none exist yet).
- Text: **DM Sans** (variable grotesk, opsz 9-40). Clean, readable at small sizes, pairs quietly with Fraunces.
- Accent/labels: **DM Mono** for month pills, size readouts, clock digits and price ranges.

Pair rationale: editorial warmth (Fraunces) + modern utility (DM Sans) + data precision (DM Mono) = season guide that reads like a magazine and works like a tool.

## Palette — Gulf Sand + Sea Glass + Sunset Coral
| Role | Hex | Name |
|---|---|---|
| Ink | #1B2838 | Deep Navy |
| Paper | #F5F0E8 | Warm Sand |
| Mid | #E6DFD1 | Dune |
| Deep band | #1B2838 | Deep Navy (same as ink, used as bg) |
| Accent / signal | #D96A4B | Sunset Coral |
| Teal accent | #3A7D7B | Sea Glass |
| Muted ink | #4A5568 | Slate |

Contrast checks (run via `node tools/contrast.mjs`):
- Ink on Paper: 12.4:1 (AAA)
- Ink on Mid: 9.8:1 (AAA)
- Paper on Deep: 12.4:1 (AAA)
- Coral on Deep: 4.6:1 (AA for large text / buttons)
- Teal on Paper: 4.5:1 (AA for body links)
- Coral on Paper: 3.2:1 — used only for large decorative elements, never body text.

Palette family name: **"Gulf Sand + Sea Glass + Sunset Coral"**. Unique in registry (no existing site uses this combination).

## Hero family — 6 (Editorial cover)
A magazine-cover layout: masthead "Second Season" top-left, issue line "The off-season issue · Clearwater" beneath, full-bleed Gulf-coast photo (hero-C: boats on trailers at golden hour), four cover lines as real anchors ("The boat", "The car you leave behind", "Storm-season garage", "Condo reno, 6 weeks"). Cover lines are ≥ 48px tall tap targets linking to their sections. Unique in niche (A=4, B=2 per brief).

## Motion
- **Intro (≤ 1.2 s):** cover photo settles from 1.05× zoom to 1×; cover lines slide up staggered (60 ms each); tide calendar curve draws left-to-right. Skippable via reduced-motion (everything visible immediately).
- **Scroll story 1 (desktop ≥ 640 px):** pinned tide calendar band at top; as each story section enters, its months light up and the curve advances via `--sw-p`. Height: `calc(4 * 55svh + 100svh)`. Reverses on scroll-up.
- **Scroll story 2:** inside #sizer, the recommended floor plan draws its outline and items drop in as the visitor selects rooms/items. Not pinned; uses clip reveal on mobile.
- **Entrance patterns:** text rises (opacity 0→1, translateY 24→0, 500 ms, 85% viewport); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`).
- **Hover:** coral underline grows from left via `scaleX(0)→scaleX(1)` on links and cover lines.
- **Reduced motion:** all stories static and complete; tide calendar fully drawn; no zoom, no stagger.

## Tools
1. **Season Planner** (#snowbird / #storm). Inputs: leave month + return month OR storm-season checklist toggles. Output: dated plan + recommended size. Hand-off: "Hold from this date" → #contact with move-in date prefilled.
2. **Boat & RV Fit Check** (#boats). Inputs: length overall, height on trailer, covered/open. Output: space type + sample monthly range. Hand-off: "Hold a space" → #contact with service=Boat storage prefilled.
3. **What Fits Sizer** (#sizer). Inputs: rooms or item list. Output: floor plan + size + sample range. Hand-off: "Hold this size" → #contact with size prefilled.
4. **ZIP Checker** (#area). Against `biz.zips`; answers drive-time band; yes → form with ZIP prefilled.
5. **Two Clocks** (#hours). Office hours from `biz.hours`; gate hours stated in service blurb (6 am–9 pm). Live open-now via `[data-open-now]`.
6. **Multi-step Quote Form** (#contact). Steps: size → climate/drive-up → move-in date → contact. Honeypot + time trap. Thank-you state honest ("We'll call during office hours").

## Voice
Three sentences in voice:
- "Your boat, your golf cart, your shutters — they live here while you're up north."
- "Gate code works from six to nine, even when the office is closed."
- "Leave before your month ends and we refund the unused days."

Five banned words: affordable, premium, state-of-the-art, hassle-free, best-in-class.