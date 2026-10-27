// WCAG 2.x contrast ratio between two colors.
//   node tools/contrast.mjs "#1d2430" "#f4efe6"
//   node tools/contrast.mjs 1d2430 fff --json
// Prints the ratio and AA / AAA verdicts for normal text (4.5 / 7) and large text (3 / 4.5).
import { parseArgs, fail } from "./lib/common.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["json"]);
if (pos.length < 2) fail('Usage: node tools/contrast.mjs <foreground> <background> [--json]   e.g. "#1d2430" "#f4efe6"');

// "#abc", "abc", "#aabbcc" or "rgb(1,2,3)" -> [r, g, b] 0-255
function parseColor(s) {
  const t = String(s).trim().toLowerCase();
  const rgb = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/.exec(t);
  if (rgb) return rgb.slice(1, 4).map(Number);
  let h = t.replace(/^#/, "");
  if (/^[0-9a-f]{3}$/.test(h)) h = h.split("").map((c) => c + c).join("");
  if (/^[0-9a-f]{8}$/.test(h)) h = h.slice(0, 6); // ignore alpha
  if (!/^[0-9a-f]{6}$/.test(h)) fail(`"${s}" is not a color. Use a hex value like #1d2430 or rgb(29,36,48).`);
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

// Relative luminance (WCAG 2.x definition).
function luminance([r, g, b]) {
  const lin = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

const [fg, bg] = [parseColor(pos[0]), parseColor(pos[1])];
const [l1, l2] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
const ratio = Math.floor(((l1 + 0.05) / (l2 + 0.05)) * 100) / 100; // floor: never round up into a pass
const verdict = {
  normal: { AA: ratio >= 4.5, AAA: ratio >= 7 },
  large: { AA: ratio >= 3, AAA: ratio >= 4.5 },
};

if (opt.json) {
  console.log(JSON.stringify({ foreground: pos[0], background: pos[1], ratio, ...verdict }, null, 2));
} else {
  const yn = (b) => (b ? "pass" : "FAIL");
  console.log(`${pos[0]} on ${pos[1]}: ${ratio.toFixed(2)}:1`);
  console.log(`normal text  AA ${yn(verdict.normal.AA)} (4.5)  AAA ${yn(verdict.normal.AAA)} (7)`);
  console.log(`large text   AA ${yn(verdict.large.AA)} (3)    AAA ${yn(verdict.large.AAA)} (4.5)   large = 24px+, or 18.66px+ bold`);
}
