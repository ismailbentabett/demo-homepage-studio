// Run mode: "fast" (default, ~5 h for 90 sites with 10 workers) or "strict" (the original 9.5 bar).
// Chosen by env DHS_MODE, else data/run-config.json {"mode": "..."}, else "fast".
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

export const MODES = {
  strict: {
    name: "strict",
    passWeighted: 9.5, // weighted score needed to pass
    passMin: 9.0, // every category at least this...
    passPhoto: 8.5, // ...except photo (stock)
    elevateMin: 8.5, // below this (or under a floor) the verdict is FIX, above it ELEVATE
    maxRounds: 4, // after this many critique rounds: NEEDS_HUMAN
    capWeighted: null, // no "deliver at the round cap"
    render: {
      viewports: [
        { width: 1440, height: 900 }, { width: 1024, height: 768 }, { width: 390, height: 844 },
        { width: 375, height: 812 }, { width: 320, height: 640 },
      ],
      modes: ["normal", "reduced-motion", "no-js"],
    },
  },
  fast: {
    name: "fast",
    passWeighted: 9.0,
    passMin: 8.5,
    passPhoto: 8.0,
    elevateMin: 8.0,
    maxRounds: 2,
    capWeighted: 8.8, // at the round cap: deliver when weighted >= 8.8 and the checks have no blockers
    render: {
      viewports: [{ width: 390, height: 844 }, { width: 1024, height: 768 }, { width: 1440, height: 900 }],
      modes: ["normal", "reduced-motion"],
    },
  },
};

// The active mode object (see MODES).
export function runMode() {
  let name = process.env.DHS_MODE;
  if (!name) {
    try {
      name = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "run-config.json"), "utf8")).mode;
    } catch {}
  }
  name = String(name || "fast").toLowerCase().trim();
  if (!MODES[name]) {
    console.error(`ERROR: Unknown run mode "${name}". Use DHS_MODE=fast or DHS_MODE=strict (or edit data/run-config.json).`);
    process.exit(1);
  }
  return MODES[name];
}

// One line for humans: "fast: pass >= 9.0, every category >= 8.5 (photo 8.0), 2 rounds, cap 8.8"
export function describeMode(m = runMode()) {
  return `${m.name}: pass >= ${m.passWeighted}, every category >= ${m.passMin} (photo ${m.passPhoto}), ` +
    `${m.maxRounds} rounds${m.capWeighted ? `, then deliver at >= ${m.capWeighted} with no blockers` : ""}; ` +
    `render ${m.render.viewports.length} viewports x ${m.render.modes.length} modes`;
}
