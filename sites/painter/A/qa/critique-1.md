COPY: ok

## Five-second test
Cannot be performed. No screenshots exist in `qa/screens/` and `qa/render.json` is missing (render-check.json warnings confirm this). The five-second test requires 1440x900-first.png and 390x844-first.png per RUBRIC §3.1. Without them, firstScreen and every other category cannot be scored above floor.

## Category scores

### firstScreen (7)
No screenshots available. RUBRIC §2.1 requires evidence from `qa/screens/*.png`. render-check.json confirms "qa/screens/ directory not found". Cannot verify h1 word count, button placement, phone visibility, or next-band peek. Score set to floor.

### distinctiveness (7)
No screenshots available. Cannot verify signature system presence across sections, compare with siblings, or check for AI-slop tells. Score set to floor.

### type (7)
No screenshots available. Cannot verify font rendering, scale contrast, measure, or orphan control. HTML references Sora/Outfit/DM Mono correctly but visual confirmation is impossible without screenshots. Score set to floor.

### layout (7)
No screenshots available. Cannot verify section rhythm, tone alternation, grid usage, or density map. Score set to floor.

### photo (6)
No screenshots available. Cannot verify photo relevance, grade consistency, crop ratios, or alt text accuracy. HTML uses placeholder credits ("Photo by unknown on Pexels") which suggests media may not be curated. Score set to floor.

### copy (7)
HTML copy appears specific and avoids banned phrases. Sample labels present on reviews, pricing, guarantee, and licence. However, cannot verify visual hierarchy, headline line counts, or microcopy placement without screenshots. Score set to floor pending visual confirmation.

### mobile (8)
No screenshots available. Cannot verify tap targets, horizontal scroll, pinned elements, or 390x844 composition. CSS includes mobile breakpoints and mobilebar but visual confirmation is impossible. Score set to floor (mobile floor is 8).

### a11y (8)
No screenshots available. Cannot verify reduced-motion visibility, focus states, or JS-off fallback. HTML includes skip link, sr-only class, aria-live regions, and reduced-motion media query. render-check.json shows no axe blockers but screenshots are required per RUBRIC §2.8. Score set to floor (a11y floor is 8).

### motion (7)
No screenshots available. Cannot verify intro timing, reveal variety, scroll story reversibility, or hover language. HTML includes GSAP/ScrollTrigger/Lenis scripts and data-reveal attributes but visual confirmation is impossible. Score set to floor.

### wow (7)
No screenshots available. Cannot verify signature moment execution or tool output design. Concept promises coat-schedule stripe and dry-time planner but visual confirmation is impossible. Score set to floor.

### polish (6)
No screenshots available. Cannot verify favicon rendering, radius consistency, icon stroke widths, or print stylesheet. HTML includes SVG favicon, apple-touch-icon, OG tags, and JSON-LD but visual confirmation is impossible. Score set to floor.

## Arithmetic
14×7 + 12×7 + 10×7 + 10×7 + 8×6 + 8×7 + 7×8 + 7×8 + 12×7 + 8×7 + 4×6 = 98 + 84 + 70 + 70 + 48 + 56 + 56 + 56 + 84 + 56 + 24 = 702 / 100 = 7.02

## Must
- **where**: qa/screens/ directory, **problem**: Screenshots not captured; render-check.json warns "qa/screens/ directory not found", **fix**: Run render check to capture all required viewports (1440x900, 390x844 at minimum for fast mode) before re-critique
- **where**: qa/render.json, **problem**: Render metadata missing; render-check.json warns "qa/render.json not found", **fix**: Run render check to generate render.json with viewport list and timings before re-critique

## Should
- **where**: dist/index.html footer credits, **problem**: Photo credits say "Photo by unknown on Pexels" five times, suggesting media not properly attributed or curated, **fix**: Verify each photo against niches/painter/media/manifest.json and update credits with actual photographer names
- **where**: dist/index.html hours markup, **problem**: Nested `<dl>` inside `<dl>` at line 1080 is invalid HTML, **fix**: Remove outer `<dl class="hours">` wrapper or restructure as single dl with div groups

## Elevate
Cannot provide elevate moves without visual evidence. Once screenshots are captured, the two weakest categories (likely photo and polish based on HTML inspection) should receive design moves that tie the coat-schedule signature to media treatment and footer detailing.