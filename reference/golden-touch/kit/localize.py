import re, sys
p = sys.argv[1]
s = open(p, encoding="utf-8").read()
def name(u):
    i = re.search(r"/(\d+)/", u).group(1)
    if u.endswith(".mp4"): return f"media/v-{i}.mp4"
    if "images.pexels.com/videos" in u: return f"media/poster-{i}.jpg"
    return f"media/p-{i}.jpg"
# Drop the 35MB clip (over the 15MB file limit); its poster stays.
s, n = re.subn(r'(<video[^>]*?) data-src="https://videos\.pexels\.com/video-files/31025079/[^"]+"([^>]*></video>)<button class="vid-btn"[^>]*>.*?</button>', r'\1\2', s, flags=re.S)
print("work2 clip removed:", n)
s = re.sub(r'https://(?:images|videos)\.pexels\.com/[^"\' )]+', lambda m: name(m.group(0)), s)
open(p, "w", encoding="utf-8").write(s)
print("left:", len(re.findall(r'https://(?:images|videos)\.pexels', s)))
