# Copy fixes: cleaning-A, round 3 (fast)

I checked the source first: `src/` and `dist/index.html` are byte-identical to `qa/best/src` and `qa/best/dist` (round 3, 8.59). There is no `qa/last/`. Each `before` below is the rendered text in `dist/index.html`. Edit `src/index.html`; the src line is noted where the dist text comes from a token or a loop.

---

## MustFix

### #contact .lead (src line 366)
- before: Four quick steps. Nothing leaves this page until you reskin it.
- after: Four quick steps. This is a sample form, so nothing is sent; call {{biz.phone}} to book.
- why: the old line spoke to the builder, not the homeowner (critique mustFix). The new one is honest about the demo and gives the real way to book.

### #contact .form-thankyou p (src line 409)
- before: In your version this goes straight to your phone and inbox. This demo does not send anything.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}, and they call you back.
- why: "your version" is the same builder voice as the mustFix line. This is the thank-you text the copy-chief spec requires, written to the homeowner.

---

## Should: #area as a route sheet (Should 2, Should 3, Elevate 2)

### #area h2 (src line 342)
- before: Serving Greenville and Greer, Simpsonville, Mauldin, Taylors, Travelers Rest, Easley and Fountain Inn
- after: On the route around {{biz.city}}
- why: the old h2 ran 4 lines. The new one is about 30 characters, so it sets in 2 lines in the split column at 1440. The town names move into the ticked rows below.

### #area .lead (src line 343)
- before: Check your ZIP or call to confirm.
- after: {{biz.city}} plus every town ticked below. Weekday visits, same two people each time.
- why: it answers "do you come out here?" in the sheet's own voice. "Weekday" is backed by the Mon–Fri hours, and "same two people" matches the hero and the reviews.

### #area ZIP line → town rows + ZIP list (src line 344)
- before: ZIPs: 29601,29605,29607,29609,29615,29617,29650,29651,29680,29681,29662,29687,29690,29640
- after (replace that one `<p class="mono">` with this markup):
```html
<ul class="route-list" aria-label="Towns on the route">
  <li><svg class="tk" aria-hidden="true" focusable="false"><use href="#i-tick"/></svg>{{biz.city}}</li>
  <!-- each biz.areas -->
  <li><svg class="tk" aria-hidden="true" focusable="false"><use href="#i-tick"/></svg>{{.}}</li>
  <!-- /each -->
</ul>
<p class="route-zips__label mono">ZIP codes on the sheet</p>
<ul class="route-zips mono">
  <!-- each biz.zips -->
  <li>{{.}}</li>
  <!-- /each -->
</ul>
```
- why: each town is now a ticked checklist row, and each ZIP is its own `<li>`. The builder styles `.route-zips li` with `white-space: nowrap` and a ", " separator in `::after`, so a ZIP never splits ("29 / 651") and no line starts with a comma. ZIPs are not paired to towns because facts.json doesn't map them.

### #area .area__stamp (src line 346)
- before: On the route every weekday
- after: Route runs Monday to Friday
- why: the h2 now says "On the route", so the stamp says when instead of repeating it.

### #area .zip-tool h3 (src line 349)
- before: Do you serve my ZIP?
- after: Is my ZIP on the sheet?
- why: keeps the clipboard voice.

### #area ZIP button (src line 355)
- before: Check
- after: Check my ZIP
- why: the button says what happens (conversion rule).

### #area ZIP doubt line (new, add after the `data-zip-result` div, src line 357)
- before: (none)
- after: `<p class="zip-note">Not on the list? Call {{biz.phone}} and ask before you book.</p>`
- why: this is the doubt microcopy the critique's Elevate 2 asks for.

### #area ZIP answers (add attributes to `<div class="zip-tool" data-zip>`, src line 348)
- before: (kit defaults)
- after: `data-zip-yes="{zip} is on the route. Pick a weekday and we'll put you on the sheet." data-zip-no="{zip} isn't on the route yet. Call {phone} and ask, edge-of-route visits happen."`
- why: yes and no answers in the page's voice. The kit fills `{zip}`/`{phone}` itself, and the invalid answer stays at the kit's "Enter a 5-digit ZIP code."
- note: if "edge-of-route visits happen" reads as a promise, use this instead: "Call {phone} and ask before you book."

---

## Should 5: the ten identical "Price my visit" links in #services

### #services .svc-card link (src line 311, the loop template; renders 10×, dist lines 970–1033)
- before: Price my visit
- after: Price: {{.short}}
- why: each link now names its service ("Price: Move-out", "Price: Reno dust", "Price: Windows & blinds"). That ends the ambiguous link list (A11y) and the filler repeat (Copy). `data-service="{{.short}}"` already prefills the form, so the label is accurate.

### #estimator CTA (src line 261, dist line 920)
- before: Price my visit
- after: Book this visit
- why: the estimator has just built the visit, so this button carries it to the form. That separates it from the hero CTA.

### #chooser CTA (src line 290, dist line 949)
- before: Price my visit
- after: Book from this sheet
- why: it follows the walk-through. "Price my visit" stays only on the hero, nav and mobile bar, where one consistent main CTA is correct.

---

## Should 10: chooser default output (not a bare prompt)

### #chooser result, zero ticks (src line 271 `data-checklist-results` "0:" entry + src line 287 initial text)
- before: Tick what you see in your house.
- after: Start with: {{services.0.name}}. Tick what you see and the sheet updates.
- why: the empty state now gives a recommendation and still invites the tick (critique Should 10 / Wow). Change both the `0:` entry in the attribute and the initial `<p data-checklist-result>` text so JS-off matches.

---

## Extra lines (score lift)

### #services .lead (src line 303)
- before: Every service runs the same top-down, dry-to-wet method. Each line gets its tick before we leave.
- after: Every service runs top to bottom, dry to wet. Each box below gets its tick before we lock up.
- why: "lock up" is the homeowner's own phrase from the move-out blurb and review. "Each box below" ties the copy to the service checkboxes the builder will now tick on enter (Should 6).

### #services h2 (src line 302)
- before: What we clean
- after: The full checklist
- why: the old h2 repeated the kicker's job without the motif. Set the kicker (src line 301, "The full list") to "Ten services, one method" so the two don't echo.

### #services kicker (src line 301)
- before: The full list
- after: Ten services, one method
- why: pairs with the new h2. The count matches the 10 services in facts.json.

---

## Checks
- Em dashes added: 0. The page stays well under 3.
- Banned words (DEMO-RULES §4): none used. There are no invented years, warranty, award or price claims. The ZIPs, towns, phone, city and services all appear as tokens.
- Not touched: the hero h1 and lead, which the five-second test passed.
