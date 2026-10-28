# fencedeck-B · copy fixes, round 1

The primary action has one name everywhere: **Count my deck**. "Next" stays only between form steps.

### #hero h1 (Should 1)
- before: Count it before you pay for it.
- after: {{biz.city}} decks and fences, counted before you pay.
- why: the trade and the town go in the h1 and the thesis stays (7 words, about 2 lines at 1440, 3 to 4 at 390)

### #hero kicker
- before: Decks &amp; fences · Denver, CO
- after: Every board on the quote · {{biz.state}}
- why: the h1 now names the trade and the city, so the eyebrow stops repeating them and carries the proof instead

### #counter hand-off button (Should 3)
- before: Put these counts on my quote
- after: Count my deck
- why: one name for the primary action (the critique counted 5 names)

### #ledger button (Should 3)
- before: Get my ledger checked
- after: Count my deck
- why: same path into the form, same name. Keep `data-service="Deck repair"` on the link so the form still preselects the repair

### #prices button (Should 3)
- before: Get my number
- after: Count my deck
- why: one name for the primary action. This is the `.btn.btn-primary` inside #prices, around line 1257

### footer link (Should 3)
- before: <li><a href="#contact">Get my number</a></li>
- after: <li><a href="#contact">Count my deck</a></li>
- why: one name for the primary action

### #contact submit (Should 3)
- before: Send my request
- after: Count my deck
- why: the last step does the action the buttons promised. "Next" stays on the earlier steps

### mobile bar main button (Should 3)
- before: <span>Count</span>
- after: <span>Count my deck</span>
- why: same label as the hero, nav and form. If it wraps in the 3-way bar at 320, shrink the font on `.mbar__main` and keep the words

### #permit result, default state (Should 5)
- before: <p class="checks__out" data-checklist-result>Tick what fits your plan.</p>
- after: <p class="checks__out" data-checklist-result>0 of 4 ticked. No permit flagged yet.</p>
- why: the empty state shows a count, so it reads like a stamped result instead of an empty slab

### #permit result map, "0" key (Should 5)
- before: data-checklist-results="0:Tick what fits your plan.|
- after: data-checklist-results="0:0 of 4 ticked. No permit flagged yet.|
- why: matches the default text, so unticking everything returns the same line

### #permit result map, "1" key
- before: 1:That usually needs a permit or a city check. We find out before anyone digs.|
- after: 1:{n} of {total} ticked. That usually means a permit or a city check. We find out before anyone digs.|
- why: every state shows the tally, which carries the count-first signature into the tool output

### #hero photo tile count
- before: <span>5 stacks</span>
- after: <span>5 stacks of boards</span>
- why: with Should 6 (set tile captions in Onest sentence case, not mono caps), this reads as a plain line, not a code
