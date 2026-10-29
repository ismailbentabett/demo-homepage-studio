# windowdoor-C · copy fixes, round 1

Apply with Edit in `src/index.html`. `before` is the dist text with facts resolved. `after` uses tokens.

## Critique "should" items (copy)

### #hero h1
- before: Every Jacksonville window, Riverside to the Beaches.
- after: {{biz.city}} windows and doors. Repair priced first.
- why: the h1 had the place but no outcome. The strategy's promise now goes in the h1 (5-second test). 8 words, 2 lines at 1440.

### #hero lead
- before: Old wood sashes restored, sliders that stop leaking, impact glass near the ocean. We price the repair before the replacement.
- after: Old wood sashes restored, sliders that stop leaking, impact glass near the ocean. From {{biz.areas.0}} to the Beaches.
- why: the promise moved into the h1, so the lead now carries the area span the h1 dropped. 19 words.

### #hero proof line (last item)
- before: <span>Repair priced first</span>
- after: <span>Restore and replace, priced side by side</span>
- why: the old line repeated the new h1 word for word. This one comes from the guarantee fact ("price both").

### .bank__rail aria-label
- before: aria-label="Window types by neighbourhood"
- after: aria-label="Window types by neighborhood"
- why: US spelling.

### #stops h2
- before: Five neighbourhoods, five kinds of window.
- after: Five neighborhoods, five kinds of window.
- why: US spelling.

### #repair checklist results attribute (empty state)
- before: 0:Tick what you see.
- after: 0:Nothing checked yet. A sound sash is usually worth restoring.
- why: "Tick" is British. The empty state now gives a default verdict. The builder should draw it with the restored-sash elevation, per the critique.

### #repair checklist output (static text)
- before: <p class="check__out" data-checklist-result>Tick what you see.</p>
- after: <p class="check__out" data-checklist-result>Nothing checked yet. A sound sash is usually worth restoring.</p>
- why: same as above. With JS off, the reader still gets a verdict.

### #reviews h2
- before: What neighbours said.
- after: What neighbors said.
- why: US spelling.

### #area lead (the 10-area comma list)
- before: Jacksonville and Riverside, Avondale, San Marco, Springfield, Mandarin, Jacksonville Beach, Atlantic Beach, Neptune Beach, Orange Park and Ponte Vedra Beach.
- after: Both banks of the St. Johns, {{biz.areas.8}} to {{biz.areas.9}}. Not sure? Check your ZIP below.
- why: the list repeated the map labels just below it and the footer. One line now points to the tool.

### footer license line
- before: Licence SAMPLE-FL-CGC-0145
- after: License {{proof.license}}
- why: US spelling. In src the tag is the macro `[[sample licence]]`. Change it to `[[sample license]]` if the macro takes free text. If it renders a fixed string, fix the "Sample licence" label wherever the macro is defined.

## Extra lines (score)

### #contact form thank-you (data-thanks)
- before: data-thanks="Thanks, {name}. In your version of this site, this goes straight to your phone and inbox."
- after: data-thanks="Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}."
- why: the thank-you text has to be honest and use the standard wording (copy-chief rules / DEMO-RULES).

### #repair primary button
- before: <a class="btn btn--primary" href="#contact" data-service="Wood window restoration">Price it</a>
- after: <a class="btn btn--primary" href="#contact" data-service="Wood window restoration">Price restore and replace</a>
- why: the button now says what you get (both prices). It also stops echoing the header "Price it" pill, which the critique flagged as competing.

### #area hours card h3 (only if the builder keeps a card in that slot; the critique's should #3 removes the hours card)
- before: <h3>Hours</h3>
- after: <h3>Nearest stop</h3>
- why: hours appear three times. If the slot becomes the ZIP / nearest-stop answer, it needs a heading that names it.
