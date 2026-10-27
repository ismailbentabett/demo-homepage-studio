# roofer-C · copy round 3 (fast)

Rule for this round: the season bands say what that season does to a roof, in their own words. The service blurbs (`{{services.N.blurb}}`) appear once only, on the index cards. Leave the index cards as they are.

## Critique copy items (should 3, 4, 7, 8)

### #season-apr-jun .svc-pair (whole block)
- before: What we do in hail season / Hail damage repair / Bruised and cracked shingles found slope by slope and replaced to match the rest of the roof. / Storm tarping / Holes and torn slopes covered with a tarp and boards so the next storm stays outside.
- after: (delete the whole `<div class="svc-pair">` block; the index already lists both jobs)
- why: verbatim repeat of two index cards (should 3) and one less mono label in the hail band (should 8)

### #season-sep-oct .build__head .lead
- before: Old roof off, deck checked board by board, new roof on, yard swept with a magnet.
- after: One tear-off, dawn to dark. Ask, and we'll show you the bare deck before anything covers it.
- why: was the Full replacement card word for word (should 3); now it describes the day the sun arc shows

### #season-mar .lead
- before: Lifted tabs and blown-off ridge caps reset or replaced before the next front blows through.
- after: Most March calls are a few lifted tabs or a ridge cap lying in the grass. Caught early, it's usually an afternoon's work.
- why: same repeat as should 3 (was the Wind damage repair card word for word)

### #season-nov-feb .lead
- before: Limbs lifted off, punctured decking patched and shingles rebuilt after ice brings trees down.
- after: An ice storm leaves two jobs: the limb on the roof and the leak it starts. We handle both, in that order.
- why: same repeat (was the Ice and fallen-limb card word for word)

### #season-jul-aug .split__text p (the line under the lead)
- before: Class 4 shingles made for Oklahoma hail; many insurers here offer a lower premium, so ask yours.
- after: A Class 4 shingle dents where an ordinary one bruises. Many insurers in {{biz.stateName}} take something off the premium for it, so ask your agent.
- why: same repeat (was the Impact-resistant card word for word)

### header .season-pill__label + #hero data-season-label
- before: The year
- after: This season (static fallback). On load, app.js sets the pill to the live month the same way it sets `[data-now-label]`: `'Now · ' + MON[m] + ' · ' + SEASON[m]` (e.g. "Now · Oct · Build"). Give the hero section that same computed string as its `data-season-label`, so scrolling back to the top shows the live month again and never says "The year".
- why: "THE YEAR" doesn't say what the pill shows (should 7); now it reads as today's date on the almanac

### #services .ledger .row__note (Shingle roof replacement)
- before: typical 1,800-2,400 sq ft home
- after: typical 1,800–2,400 sq ft home
- why: hyphen range (should 4). This string comes from `facts.json` `proof.prices.1.note` through the `{{.note}}` loop, so fix it there: hyphen → en dash (U+2013). Same fact, typography only. If the build allows entities in facts, use `1,800–2,400&nbsp;sq&nbsp;ft` so it doesn't wrap.

### #season-mar .look__h
- before: From the yard
- after: (delete the label; the three tick items read fine under the paragraph without it)
- why: should 8, too many tracked mono labels in one view

### #season-apr-jun .sheet__legend
- before: Ground check · after the storm
- after: Your ground check
- why: should 8. Drop the middle-dot meta string; the builder sets it as a Garamond italic subhead, not mono caps

## Extra lines (first screen)

### #hero h1
- before: Roofs built for the sky over Oklahoma City.
- after: `<span class="h1-l">Hail, wind and ice roof repair</span> <span class="h1-l">across {{biz.city}}.</span>`
- why: critic −0.5, "built for the sky" was a slogan. Now it names the trade, the three storms and the town in 8 words on 2 lines. The city keeps the gold italic on line 2

### #hero .kicker
- before: Hail, wind &amp; ice roofing · Oklahoma City metro
- after: Family-owned, on call when the storm hits
- why: the new h1 carries trade and town, so the kicker stops repeating it and drops the middle-dot meta string. Sourced from `familyOwned` + `emergency` in facts
