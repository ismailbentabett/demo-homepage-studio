# Golden Touch Contracting: build report

Live site: https://claude.ai/artifact/8e6f44joJB132WxmdXSQQM (private until shared)
Local files: `golden-touch.html` plus the `media/` folder (keep them together).

## The 12 stages

1. **STRATEGY.** The audience is Clearwater and Pinellas homeowners planning a remodel, a paint job or a multi-trade renovation. The site has one job: get a call to (727) 692-4446 or a quote request. The reason to trust them is the 4.1★ average across 17 Google reviews and the themes those reviewers repeat. The site makes no claims beyond the facts block.
2. **CONCEPT.** The theme is a plan turning into a finished build. The pinned "story" walks through four steps (estimate, plan, coordinate trades, finish on time), drawn from what the reviews praise. The compare slider shows Planning and Build only.
3. **DESIGN SYSTEM.** Warm stone neutrals, deep slate for dark bands, and a muted gold accent that fits the name. A condensed display face is paired with a readable sans for body text. The spacing and type scales are tokens, and there is a light theme and a dark theme.
4. **BLUEPRINT.** 17 hash-routed pages: home, services, 6 service pages (remodels, painting, renovations, project management, consulting, coordination), projects, reviews, areas, estimator, FAQ, about, contact, thank-you, not-found.
5. **MEDIA PLAN.** 15 Pexels photos and 4 Pexels videos. No photo repeats on the same page, and every item is credited in the footer.
6. **PAGES.** All copy is built only from the facts block and has been checked against the banned list. The two button labels are "Request a quote" and "Call (727) 692-4446".
7. **STATIC CHECK.** The build script checks every page and passes clean:
   - Title is 50–60 characters and description 120–155.
   - One h1.
   - No banned words, `$`, "licensed", "insured", warranty or year counts.
   - No repeated photo.
8. **RENDER CHECK.** Tested in a real browser at desktop and 375px width:
   - The ZIP checker gives the right answer for both a matching and a non-matching ZIP.
   - The lead form shows an honest "could not be sent" message with a retry button.
   - The estimator prefills the quote form.
   - The popup traps focus and closes with Esc.
   - The lightbox works with the keyboard.
   - Reduced-motion mode shows all content.
   - Nothing scrolls sideways.
9. **CRITIQUE.** Problems found:
   - The story step text sat underneath the photo on desktop.
   - The mobile Call button wrapped onto two lines.
   - The back-to-top button overlapped text on phones.
   - The story was too tall on short laptop screens.
   - Images from Pexels are blocked inside the artifact viewer.
10. **ELEVATE.** Story text moved to its own column. Headings are tighter on short screens. Media is now served from the artifact itself.
11. **FIX.** Every problem from stage 9 is fixed and rebuilt, and the static check still passes clean. One video ("aerial view of workers building a wooden house frame", 35 MB) is over the 15 MB file limit. It now shows its poster image instead of playing.
12. **DELIVER.** The site is published, and this report is included.

## Delivery report

### Confirm with the client
- Is the owner's name Henry? The site doesn't use the name.
- Which optional services do they offer? Kitchen and bathroom remodeling, interior painting, drywall repair, flooring installation, storm damage repair. None of these appear on the site yet.
- Which towns do they serve? Largo, Dunedin, Safety Harbor, Palm Harbor, Oldsmar, Belleair. The site names only Clearwater and Pinellas County, plus the 14 ZIP codes.
- Where should quote requests go? Confirm the `/api/public/site-lead` endpoint is live and routes leads to them. Until it is, the form says the request could not be sent and points people to the phone number.
- Is the business address public, or should only the service area show?

### Missing facts (left off the site on purpose)
- An email address.
- Their own project photos. All photos are stock, so the Projects page frames them as examples of the kinds of work.
- Licence number and insurance details.
- Warranty terms.
- Years in business.
- Prices, or even price ranges. The estimator gives a scope summary, not a dollar amount.
- Testimonials the client is allowed to quote. The site lists review themes only.

### Photo credits (Pexels)
| Use | Photographer | Link |
|---|---|---|
| Hero 1 | Mikael Blomkvist | https://www.pexels.com/photo/man-in-black-t-shirt-and-yellow-hard-hat-holding-gray-metal-hand-tool-8961339/ |
| Hero 2 | Thirdman | https://www.pexels.com/photo/people-holding-a-piece-of-a-sheet-of-paper-while-standing-by-the-white-wall-8470037/ |
| Hero 3 | Pavel Danilyuk | https://www.pexels.com/photo/clients-standing-and-seller-walking-behind-and-talking-on-phone-7937359/ |
| Service 1 | Mikael Blomkvist | https://www.pexels.com/photo/man-in-black-t-shirt-holding-a-wire-8961695/ |
| Service 2 | Mikael Blomkvist | https://www.pexels.com/photo/man-in-black-shirt-holding-black-power-tool-8961401/ |
| Service 3 | Thirdman | https://www.pexels.com/photo/a-man-in-black-long-sleeve-shirt-holding-white-paper-on-concrete-wall-8482646/ |
| Service 4 | Thirdman | https://www.pexels.com/photo/people-in-hard-hats-looking-at-the-big-sheet-of-paper-8470031/ |
| Service 5 | wal_ 172619 | https://www.pexels.com/photo/black-and-white-construction-workers-on-site-38867950/ |
| Service 6 | Mukhtar Shuaib Mukhtar | https://www.pexels.com/photo/construction-worker-using-survey-equipment-outdoors-30379883/ |
| Service 7 | Peter Vang | https://www.pexels.com/photo/spacious-empty-basement-room-with-carpet-flooring-35493895/ |
| Service 8 | Rodolfo Gaion | https://www.pexels.com/photo/construction-worker-building-foundation-outdoors-29735767/ |
| Service 9 | SÀI GÒN CÔNG TY CP SẢN XUẤT - THƯƠNG MẠI | https://www.pexels.com/photo/construction-workers-smoothing-fresh-concrete-outdoors-37121405/ |
| Service 10 | Connor Scott McManus | https://www.pexels.com/photo/men-working-on-top-of-a-building-14578285/ |
| Service 11 | Craftsman Concrete Floors | https://www.pexels.com/photo/construction-workers-laying-new-concrete-floor-36217330/ |
| Service 12 | José Carlos Alexandre | https://www.pexels.com/photo/construction-workers-in-helmets-and-reflective-vests-17797264/ |

### Video credits (Pexels)
| Use | Creator | Link |
|---|---|---|
| Hero | Tima Miroshnichenko | https://www.pexels.com/video/woman-choosing-colors-6474257/ |
| Work 1 | Tima Miroshnichenko | https://www.pexels.com/video/man-doing-woodworks-4957773/ |
| Work 2 (poster image only) | K | https://www.pexels.com/video/aerial-view-of-workers-building-a-wooden-house-frame-31025079/ |
| Work 3 | Yaroslav Shuraev | https://www.pexels.com/video/video-of-a-country-house-in-the-middle-of-the-woods-6183914/ |

### 10/10 pass (version 3)
These are items 1–13 from `golden-touch-10-of-10.md`. The static check is still clean and the site was re-checked in a browser at 1440×900 and 375px.
- **Trust row:** the four columns are balanced, and the hours line is quieter.
- **Hero:**
  - The scrim is lighter on the photo side, so the photo shows through.
  - The heading is sized by screen height, so the proof line stays above the fold at 1440×900.
  - A proof line under the buttons shows the rating, hours and address.
- **Tap targets:** inline text links have a 48px tap area.
- **Story:** it is 35% shorter on desktop. Phones don't pin it any more. Each photo slides in above its step.
- **Rotator:** screen readers hear one full sentence instead of the changing words.
- **Dark bands:** the "What reviewers say most" section is now light, which breaks up the run of dark sections.
- **Service pages:** each one has a job-sheet title block (sheet number, scope, area, hours). Projects has a film-strip bar, and Contact shows the phone number in large type.
- **Home break:** the blueprint wipes away as you scroll to show the real video, with Plan and Build labels on the seam. It shows Planning and Build only, never before/after.
- **Photos:** a light shared colour grade and better crops. The two most off-topic shots were swapped out.
- **Copy:**
  - "On paper" is used less.
  - There is a callback line under the form.
  - The 404 page is friendlier and has a call line.
- **Estimator:**
  - A floor-plan sketch lights the rooms that match your answers.
  - Hatching shows the condition, and a dashed outline means the outside.
  - It prints as a one-page scope sheet.
- **Polish:**
  - Headings rise into view.
  - Line breaks are balanced.
  - The serif font now covers the full weight range.
  - New favicon, Open Graph tags, and GeneralContractor schema (only facts: phone, address, hours, 4.1 from 17 reviews, area).
  - The video button now says "background video".

### Final rubric
| Category | Weight | Floor | v2 | v3 |
|---|---|---|---|---|
| First screen | 14% | 7 | 8.5 | 9 |
| Distinctiveness | 12% | 7 | 8 | 9 |
| Type | 10% | 7 | 8.5 | 9 |
| Layout | 10% | 7 | 8.5 | 9 |
| Photo | 8% | 6 | 7 | 7.5 |
| Copy | 8% | 7 | 8.5 | 9 |
| Mobile | 7% | 8 | 8.5 | 9.5 |
| A11y | 7% | 8 | 8.5 | 9.5 |
| Motion | 12% | 7 | 8.5 | 9 |
| Wow | 8% | 7 | 8 | 9 |
| Polish | 4% | 6 | 8 | 9.5 |
| **Weighted** | | | **8.26** | **8.97** |

Every floor is met. Photo is still the lowest score because every image is stock. Getting to 10 now depends on things outside the code: the client's own job photos, review quotes they are allowed to use, and confirmation of the facts listed above.
