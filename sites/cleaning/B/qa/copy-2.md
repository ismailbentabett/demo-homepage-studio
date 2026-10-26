# copy-2: cleaning-B (fast, round 2)

The primary action now has one verb: **Price**. The visible label is "Price my house" in the header, hero, mobile menu and sticky bar. Both submits say "Send my price" (builder and the step 4 form), and the service cards keep "Price it". Strategy §1 and blueprint §header already named the action "Price it".
No line depends on what a photo shows (the library is placeholders for now).

## mustFix / should from critique-2

### #hero figure alt + data-fallback (hero-B1)
- before: Placeholder hero B1
- after: Bright, tidy family kitchen in daylight
- why: mustFix, placeholder text is visible. The alt comes from `niches/cleaning/media/manifest.json` → `hero-B1.alt`, so the orchestrator or media-curator must change it there, because a builder edit in src cannot reach it. The wording follows media-queries.json slot hero-B1 ("clean family kitchen", "bright tidy kitchen"). No `alt` or `data-fallback` anywhere on the page may contain "Placeholder". Apply the same rule to any other placeholder alt the macros print.

### #footer .credits (both items)
- before: Photo by unknown on Pexels
- after: Demo images. Photographer credits print here with the licensed photos.
- why: mustFix, "unknown" credits a photographer who doesn't exist. Show this one line only while every placed manifest entry has no photographer. When the real photos land, `[[credits]]` prints the names. Do not print this line twice.

### #hero h1
- before: Every Other Friday, the house gets done.
- after: {{biz.city}} house cleaning, priced line by line.
- why: should, the h1 had no trade word and read as a slogan in 4 lines. Now it has trade + town + the strategy promise in 7 words (the blueprint h1). Keep `max-width: 14ch`, 3 lines or fewer, no orphan.

### #hero .kicker
- before: House Cleaning · Huntsville, AL
- after: {{biz.short}} · {{biz.city}}, {{biz.state}}
- why: the trade is now in the h1, so the kicker carries the name the h1 dropped (blueprint kicker).

### #hero ul li (1st)
- before: Your price, line by line
- after: The room checklist is on this page
- why: repeated the new h1. This one answers the "what do they actually clean" objection.

### #hero primary button
- before: Build your quote
- after: Price my house
- why: should, one name for the primary action. Point the href at `#quote-builder`, not `#contact` (blueprint §hero).

### #hero secondary line (new, under the button)
- before: (none, insert after the primary button)
- after: or call <a class="tel-plain" href="tel:{{biz.phoneE164}}">{{biz.phone}}</a>
- why: should, no phone was visible in the 1440 hero.

### header .btn-primary
- before: Build your quote
- after: Price my house
- why: one name for the primary action, href `#quote-builder`. Also add `[[call]]` / `{{biz.phone}}` in mono beside it (critique should).

### header .receipt-strip__masthead + #hero receipt masthead (both)
- before: EOF · EST.
- after: {{biz.initials}} · {{biz.city}}
- why: should, "EST." with no year read as unfinished. There's no founding year in facts.

### header nav (1st link)
- before: Quote
- after: Price
- why: same verb as the action.

### mobile menu, #quote-builder link
- before: Quote builder
- after: Price my house
- why: one name.

### mobile menu, #contact link
- before: Book a visit
- after: Send my price
- why: "Book" was the 3rd name for the action.

### .mobile-bar secondary button
- before: Build quote
- after: Price my house
- why: mustFix, the 4th name. Href `#quote-builder`. Two targets of 48px or more: "Call {{biz.phone}}" + "Price my house".

### #quote-builder h2
- before: Build your quote
- after: Price your house
- why: same verb. The lead below stays.

### #quote-builder submit
- before: Send this quote request
- after: Send my price
- why: should, one action name (the builder submit hands the receipt to the form).

### #quote-builder .receipt-strip__note
- before: Sample pricing — final price after walk-through
- after: Sample pricing · final price after walk-through
- why: drops an em dash and uses the receipt's own separator.

### #checklist .btn-secondary
- before: That's the list we follow
- after: End of list. (D) lines come with a deep clean.
- why: should, it was styled as a button but did nothing. Render it as a closing receipt line (mono, dashed rule above, not a link or button).

### #frequency result button
- before: Book this frequency
- after: Price this frequency
- why: same verb.

### #contact h2
- before: Book your visit
- after: Your price, confirmed before the first visit.
- why: drops the "Book" name. The lead "We'll confirm the price before anyone shows up." still fits under it.

### #contact step 4 submit
- before: Send request
- after: Send my price
- why: matches the builder submit, so the action has one name end to end.

### #contact success body (thank-you)
- before: We have your details. Someone from the crew will call within one business day to confirm the visit and the price.
- after: This is a demo, nothing was sent. On the real site this goes to {{biz.short}}, and they call you to confirm the visit and the price.
- why: the thank-you must be honest (DEMO-RULES). "Within one business day" was an invented promise.

### #footer .footer__nav h3 + list
- before: Pages
- after: (delete the whole "Pages" column)
- why: should, a sitemap on a one-page site. It also held another "Book a visit".

### #footer receipt total line
- before: THANK YOU · (256) 555-0153
- after: THANK YOU · SEE YOU FRIDAY · {{biz.phone}}
- why: should, the footer closes the receipt, and the line ties back to the name.
