"""One command to rebuild the site from source.

    python golden-touch-kit/make.py            -> writes golden-touch.html next to the kit
    python golden-touch-kit/make.py out.html   -> writes to another path

Step 1 runs src/build.py (assemble + static check).
Step 2 runs localize.py (swap Pexels URLs for the local media/ files).
Stops with exit code 1 if the static check finds anything.
"""
import os, subprocess, sys

KIT = os.path.dirname(os.path.abspath(__file__))
out = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(KIT, "..", "golden-touch.html"))

r = subprocess.run([sys.executable, os.path.join(KIT, "src", "build.py"), out], capture_output=True, text=True, encoding="utf-8")
print(r.stdout.strip())
if r.returncode or "STATIC CHECK: clean" not in r.stdout:
    print(r.stderr.strip())
    sys.exit("Build stopped: fix the static check problems above.")

r = subprocess.run([sys.executable, "-I", os.path.join(KIT, "localize.py"), out], capture_output=True, text=True, encoding="utf-8")
print(r.stdout.strip())
if r.returncode or "left: 0" not in r.stdout:
    print(r.stderr.strip())
    sys.exit("Localize stopped: some Pexels URLs were not swapped.")

print("Built", out)
