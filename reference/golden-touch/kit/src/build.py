import re, sys, os, html, json
from collections import Counter
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1]

Q = "?auto=compress&cs=tinysrgb&w=1170&h=780&fit=crop"
P = {
 "hero-1": ("8961339", "A construction worker with a hard hat uses a power drill on a wooden plank at a renovation site.", "Mikael Blomkvist", "https://www.pexels.com/photo/man-in-black-t-shirt-and-yellow-hard-hat-holding-gray-metal-hand-tool-8961339/"),
 "hero-2": ("8470037", "Architects wearing hard hats review blueprints inside a building under construction.", "Thirdman", "https://www.pexels.com/photo/people-holding-a-piece-of-a-sheet-of-paper-while-standing-by-the-white-wall-8470037/"),
 "hero-3": ("7937359", "Diverse construction team in hard hats reviewing blueprints inside a building project.", "Pavel Danilyuk", "https://www.pexels.com/photo/clients-standing-and-seller-walking-behind-and-talking-on-phone-7937359/"),
 "service-1": ("8961695", "Construction worker with hard hat installing electrical cables on a site.", "Mikael Blomkvist", "https://www.pexels.com/photo/man-in-black-t-shirt-holding-a-wire-8961695/"),
 "service-2": ("8961401", "A construction worker using a power drill on a building site, outdoors during the day.", "Mikael Blomkvist", "https://www.pexels.com/photo/man-in-black-shirt-holding-black-power-tool-8961401/"),
 "service-3": ("8482646", "Architect wearing hard hat and mask reviews floor plans on site for new construction project.", "Thirdman", "https://www.pexels.com/photo/a-man-in-black-long-sleeve-shirt-holding-white-paper-on-concrete-wall-8482646/"),
 "service-4": ("8470031", "Three architects wearing hard hats reviewing blueprints indoors for a construction project.", "Thirdman", "https://www.pexels.com/photo/people-in-hard-hats-looking-at-the-big-sheet-of-paper-8470031/"),
 "service-5": ("38867950", "Silhouette of construction workers on a building site with one pointing towards the distance.", "wal_ 172619", "https://www.pexels.com/photo/black-and-white-construction-workers-on-site-38867950/"),
 "service-6": ("30379883", "A construction worker using a theodolite for land surveying at a building site.", "Mukhtar Shuaib Mukhtar", "https://www.pexels.com/photo/construction-worker-using-survey-equipment-outdoors-30379883/"),
 "service-7": ("35493895", "Open basement room with neutral gray walls and plush carpeting, ideal for remodeling.", "Peter Vang", "https://www.pexels.com/photo/spacious-empty-basement-room-with-carpet-flooring-35493895/"),
 "service-8": ("29735767", "Male construction worker building a foundation outdoors in Londrina, Brazil.", "Rodolfo Gaion", "https://www.pexels.com/photo/construction-worker-building-foundation-outdoors-29735767/"),
 "service-9": ("37121405", "Team of construction workers using power tools to level freshly poured concrete on a building site.", "SÀI GÒN CÔNG TY CP SẢN XUẤT - THƯƠNG MẠI", "https://www.pexels.com/photo/construction-workers-smoothing-fresh-concrete-outdoors-37121405/"),
 "service-10": ("14578285", "Workers on a multi-storey building site using tools amidst a cloudy backdrop.", "Connor Scott McManus", "https://www.pexels.com/photo/men-working-on-top-of-a-building-14578285/"),
 "service-11": ("36217330", "Construction workers in hard hats and vests laying a fresh concrete floor inside a building in Dallas, Texas.", "Craftsman Concrete Floors", "https://www.pexels.com/photo/construction-workers-laying-new-concrete-floor-36217330/"),
 "service-12": ("17797264", "Two construction workers in helmets and vests review blueprints on a site.", "José Carlos Alexandre", "https://www.pexels.com/photo/construction-workers-in-helmets-and-reflective-vests-17797264/"),
}
def purl(k):
    i = P[k][0]
    return f"https://images.pexels.com/photos/{i}/pexels-photo-{i}.jpeg{Q}"
V = {
 "hero": ("https://videos.pexels.com/video-files/6474257/6474257-hd_1920_1080_25fps.mp4", "https://images.pexels.com/videos/6474257/pexels-photo-6474257.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200", "Tima Miroshnichenko", "https://www.pexels.com/video/woman-choosing-colors-6474257/", "A person holds paint colour swatches up to a wall to choose a shade."),
 "work1": ("https://videos.pexels.com/video-files/4957773/4957773-hd_1920_1080_25fps.mp4", "https://images.pexels.com/videos/4957773/pexels-photo-4957773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200", "Tima Miroshnichenko", "https://www.pexels.com/video/man-doing-woodworks-4957773/", "A man doing woodwork at a bench."),
 "work2": ("https://videos.pexels.com/video-files/31025079/13261760_1920_1080_24fps.mp4", "https://images.pexels.com/videos/31025079/pexels-photo-31025079.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200", "K", "https://www.pexels.com/video/aerial-view-of-workers-building-a-wooden-house-frame-31025079/", "Aerial view of workers building a wooden house frame."),
 "work3": ("https://videos.pexels.com/video-files/6183914/6183914-hd_1366_720_24fps.mp4", "https://images.pexels.com/videos/6183914/best-friends-christmas-christmas-atmosphere-christmas-cookies-6183914.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200", "Yaroslav Shuraev", "https://www.pexels.com/video/video-of-a-country-house-in-the-middle-of-the-woods-6183914/", "A country house among trees."),
}
ICON_SVG = '<svg aria-hidden="true" focusable="false"><use href="#i-{}"/></svg>'

def img(k, attrs=""):
    alt = html.escape(P[k][1], quote=True)
    lazy = 'loading="lazy"' if 'eager' not in attrs else ''
    attrs = attrs.replace('eager', 'fetchpriority="high"')
    return f'<img src="{purl(k)}" alt="{alt}" width="1170" height="780" {lazy} decoding="async" data-photo="{k}" {attrs}>'

def frame(k, cls="", attrs="", imgattrs=""):
    alt = html.escape(P[k][1], quote=True)
    return f'<figure class="frame {cls}" data-fallback="{alt}" {attrs}>{img(k, imgattrs)}</figure>'

def video(k, cls="", attrs=""):
    src, poster, _, _, desc = V[k]
    d = html.escape(desc, quote=True)
    return (f'<figure class="frame {cls}" data-fallback="{d}" {attrs}>'
            f'<video muted loop playsinline preload="none" poster="{poster}" data-src="{src}" data-video="{k}" aria-label="{d}"></video>'
            f'<button class="vid-btn" type="button" aria-label="Pause video" data-vid-btn>{ICON_SVG.format("pause")}</button></figure>')

def credits():
    li = []
    for k, (i, alt, who, url) in P.items():
        li.append(f'<li>{k}: Photo by {html.escape(who)} on <a href="{url}" rel="noopener" target="_blank">Pexels</a></li>')
    for k, (s, p, who, url, d) in V.items():
        li.append(f'<li>{k} video: Video by {html.escape(who)} on <a href="{url}" rel="noopener" target="_blank">Pexels</a></li>')
    return "<ul>" + "".join(li) + "</ul>"

def macro(m):
    parts = [p.strip() for p in m.group(1).split("|")]
    head = parts[0].split()
    kind = head[0]
    if kind == "frame":
        return frame(head[1], " ".join(head[2:]), parts[1] if len(parts) > 1 else "", parts[2] if len(parts) > 2 else "")
    if kind == "img":
        return img(head[1], parts[1] if len(parts) > 1 else "")
    if kind == "video":
        return video(head[1], " ".join(head[2:]), parts[1] if len(parts) > 1 else "")
    if kind == "purl":
        return purl(head[1])
    if kind == "credits":
        return credits()
    if kind == "i":
        return ICON_SVG.format(head[1])
    if kind == "tel":
        return '<a class="tel-plain" href="tel:+17276924446">(727) 692-4446</a>'
    if kind == "call":
        cls = " ".join(head[1:]) or "btn--ghost"
        return f'<a class="btn {cls}" href="tel:+17276924446">{ICON_SVG.format("phone")}Call (727) 692-4446</a>'
    if kind == "quote":
        svc = head[1] if len(head) > 1 else ""
        cls = " ".join(head[2:]) or "btn--primary"
        ds = f' data-service="{svc}"' if svc and svc != "-" else ""
        return f'<a class="btn {cls}" href="#contact"{ds}>Request a quote</a>'
    raise ValueError(kind)

def render(s):
    return re.sub(r"\[\[(.+?)\]\]", macro, s, flags=re.S)

css = open(os.path.join(HERE, "style.css"), encoding="utf-8").read() + "\n" + open(os.path.join(HERE, "extra.css"), encoding="utf-8").read()
body = render(open(os.path.join(HERE, "pages.html"), encoding="utf-8").read())
js = open(os.path.join(HERE, "app.js"), encoding="utf-8").read()

head = '''<title>Golden Touch Contracting | Clearwater General Contractor</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="Golden Touch Contracting LLC is a Clearwater, FL general contractor for remodels, renovations, exterior painting and multi-trade projects.">
<meta name="theme-color" content="#0E2233">
<meta property="og:title" content="Golden Touch Contracting | Clearwater General Contractor">
<meta property="og:description" content="Golden Touch Contracting LLC is a Clearwater, FL general contractor for remodels, renovations, exterior painting and multi-trade projects.">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%23E0A526'/%3E%3Ctext x='32' y='43' font-family='Arial,sans-serif' font-size='28' font-weight='700' text-anchor='middle' fill='%230E2233'%3EGT%3C/text%3E%3C/svg%3E">
<link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%23E0A526'/%3E%3Ctext x='32' y='43' font-family='Arial,sans-serif' font-size='28' font-weight='700' text-anchor='middle' fill='%230E2233'%3EGT%3C/text%3E%3C/svg%3E">
<script type="application/ld+json">{"@context": "https://schema.org", "@type": "GeneralContractor", "name": "Golden Touch Contracting LLC", "telephone": "+1-727-692-4446", "address": {"@type": "PostalAddress", "streetAddress": "669 Fairwood Forest Dr", "addressLocality": "Clearwater", "addressRegion": "FL", "postalCode": "33759", "addressCountry": "US"}, "openingHours": "Mo-Sa 08:00-18:00", "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.1", "reviewCount": "17"}, "areaServed": ["Clearwater", "Pinellas County"]}</script>
<script>document.documentElement.classList.add('sw-js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('sw-motion');</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Source+Serif+4:opsz,wght@8..60,400..600&display=swap">
'''
libs = '''<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
'''
out = head + "<style>\n" + css + "\n</style>\n" + body + "\n" + libs + "<script>\n" + js + "\n</script>\n"
open(OUT, "w", encoding="utf-8").write(out)

# ---------------- STATIC CHECK ----------------
problems = []
text_only = re.sub(r"<script.*?</script>|<style.*?</style>", " ", out, flags=re.S)
visible = re.sub(r"<[^>]+>", " ", text_only)
visible = html.unescape(visible)
low = visible.lower()
banned = ["welcome to","seamless","elevate","transform your home","peace of mind","journey","premier","top-notch","hassle-free","stress-free","your vision","dream home","rest assured","you deserve","why choose us","years of experience","free consultation","competitive pricing","#1","number one","trusted partner","pride ourselves","tailored","holistic","leverage","delve","testament to","stands as","embark on","locally owned","family-owned","serving the community","with ease","the difference is","our commitment","we understand","licensed","licence","license","insured","warranty","financing","free estimate","get started","learn more","submit","24/7","same-day","same day","award","certified","guarantee"]
for b in banned:
    if b in low: problems.append(f"banned phrase: {b!r}")
if "$" in visible: problems.append("dollar sign in visible text")
# also check JS strings for $ shown to users (template literals ok)
for m in re.finditer(r"'([^'\n]*)'", js):
    if re.search(r"\$\d", m.group(1)): problems.append("$ figure in js string")
# photo urls only from list
allowed = {purl(k) for k in P} | {v[1] for v in V.values()}
for u in set(re.findall(r'https://images\.pexels\.com[^"\')\s]+', out)):
    u2 = html.unescape(u)
    if u2 not in allowed: problems.append("unknown image url " + u2)
# per-page checks
pages = re.findall(r'<section id="([\w-]+)" data-page(.*?)</section><!--/page-->', body, flags=re.S)
seen_pages = set()
for pid, chunk in pages:
    seen_pages.add(pid)
    photos = re.findall(r'data-photo="([\w-]+)"', chunk)
    dup = [k for k, c in Counter(photos).items() if c > 1]
    if dup: problems.append(f"{pid}: photo used twice {dup}")
    h1 = chunk.count("<h1")
    if h1 != 1: problems.append(f"{pid}: {h1} h1")
    t = re.search(r'data-title="([^"]+)"', chunk); d = re.search(r'data-desc="([^"]+)"', chunk)
    if not t or not (50 <= len(html.unescape(t.group(1))) <= 60): problems.append(f"{pid}: title len {len(html.unescape(t.group(1))) if t else None}")
    if not d or not (120 <= len(html.unescape(d.group(1))) <= 155): problems.append(f"{pid}: desc len {len(html.unescape(d.group(1))) if d else None}")
    if 'data-long' in chunk[:400]:
        if 'data-sw-signature' not in chunk[:400]: problems.append(f"{pid}: no signature")
        if 't-deep' not in chunk: problems.append(f"{pid}: no dark section")
        if 'class="break' not in chunk: problems.append(f"{pid}: no break")
        hooks = set(re.findall(r'data-hook="([\w-]+)"', chunk))
        if len(hooks) < 3: problems.append(f"{pid}: hooks {hooks}")
        # light run check
        themes = re.findall(r'<(?:section|div|header|aside) class="[^"]*\b(t-light|t-paper|t-mid|t-deep|t-gold|break)\b', chunk)
        run = 0; mx = 0
        for th in themes:
            run = run + 1 if th in ("t-light", "t-paper") else 0
            mx = max(mx, run)
        if mx >= 5: problems.append(f"{pid}: {mx} light sections in a row")
sigs = re.findall(r'data-sw-signature="([\w-]+)"', body)
if len(sigs) != len(set(sigs)): problems.append("duplicate signatures")
for href in set(re.findall(r'href="#([\w-]+)"', body)):
    if href not in seen_pages and f'id="{href}"' not in body: problems.append("dead hash link #" + href)
print("pages:", sorted(seen_pages))
print("bytes:", len(out))
print("\n".join(problems) if problems else "STATIC CHECK: clean")
