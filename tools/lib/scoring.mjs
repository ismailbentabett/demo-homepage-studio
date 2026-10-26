// Scoring rules shared by score.mjs, deliver.mjs and status.mjs (docs/RUBRIC.md, CLAUDE.md pass rule).
import fs from "node:fs";
import path from "node:path";
import { siteDir, readJson, newestMtime, loadSite } from "./common.mjs";
import { runMode } from "./mode.mjs";

// category: [weight, floor]. Weights sum to 100.
export const CATEGORIES = {
  firstScreen: [14, 7],
  distinctiveness: [12, 7],
  type: [10, 7],
  layout: [10, 7],
  photo: [8, 6],
  copy: [8, 7],
  mobile: [7, 8],
  a11y: [7, 8],
  motion: [12, 7],
  wow: [8, 7],
  polish: [4, 6],
};

// Newest qa/scores-N.json of a site: { round, file, data } or null.
export function latestScores(id) {
  const qa = path.join(siteDir(id), "qa");
  if (!fs.existsSync(qa)) return null;
  const files = fs.readdirSync(qa).map((f) => /^scores-(\d+)\.json$/.exec(f)).filter(Boolean)
    .map((m) => ({ round: Number(m[1]), file: path.join(qa, m[0]) })).sort((a, b) => b.round - a.round);
  if (!files.length) return null;
  return { ...files[0], data: readJson(files[0].file) };
}

// A category value may be a number or { score, notes }.
const num = (v) => (typeof v === "number" ? v : typeof v?.score === "number" ? v.score : NaN);

// Validate and read the categories. Returns { scores: {cat: n}, problems: [] }.
export function readCategories(data) {
  const problems = [];
  const scores = {};
  const cats = data?.categories || {};
  for (const k of Object.keys(CATEGORIES)) {
    const n = num(cats[k]);
    if (!Number.isFinite(n) || n < 0 || n > 10) problems.push(`categories.${k} is missing or not a 0-10 number (got ${JSON.stringify(cats[k])}).`);
    else scores[k] = n;
  }
  for (const k of Object.keys(cats)) if (!CATEGORIES[k]) problems.push(`categories.${k} is not a rubric category (use: ${Object.keys(CATEGORIES).join(", ")}).`);
  return { scores, problems };
}

export function weighted(scores) {
  let sum = 0;
  for (const [k, [w]] of Object.entries(CATEGORIES)) sum += (scores[k] ?? 0) * w;
  return Math.round((sum / 100) * 100) / 100;
}

// Count blockers/warnings in a check report, whatever its exact shape:
// { blockers: 2 } / { blockers: [...] } / { summary: { blockers } } / { issues: [{ severity }] }
function countOf(report, key) {
  const singular = key.replace(/s$/, "");
  for (const v of [report?.[key], report?.summary?.[key], report?.counts?.[key]]) {
    if (typeof v === "number") return v;
    if (Array.isArray(v)) return v.length;
  }
  const list = report?.issues || report?.problems || report?.findings;
  if (Array.isArray(list)) return list.filter((i) => String(i?.severity || i?.level || "").toLowerCase().startsWith(singular)).length;
  return 0;
}

// State of qa/static.json and qa/render.json: { name: { exists, blockers, warnings, fresh, mtime } }, clean, fresh.
export function checkState(id) {
  const base = siteDir(id);
  const srcTime = newestMtime(path.join(base, "src"));
  const out = { srcTime };
  for (const name of ["static", "render"]) {
    const f = path.join(base, "qa", `${name}.json`);
    if (!fs.existsSync(f)) {
      out[name] = { exists: false, blockers: 0, warnings: 0, fresh: false };
      continue;
    }
    let report = null;
    try {
      report = JSON.parse(fs.readFileSync(f, "utf8"));
    } catch {}
    const mtime = fs.statSync(f).mtimeMs;
    out[name] = report
      ? { exists: true, blockers: countOf(report, "blockers"), warnings: countOf(report, "warnings"), fresh: mtime > srcTime, mtime }
      : { exists: true, broken: true, blockers: 1, warnings: 0, fresh: false, mtime };
  }
  out.fresh = out.static.fresh && out.render.fresh;
  out.noBlockers = out.static.exists && out.render.exists && out.static.blockers === 0 && out.render.blockers === 0;
  out.clean = out.noBlockers && out.static.warnings === 0 && out.render.warnings === 0;
  return out;
}

export function describeChecks(c) {
  const one = (n) => (!c[n].exists ? `${n}: not run` : c[n].broken ? `${n}: unreadable` :
    `${n}: ${c[n].blockers} blockers, ${c[n].warnings} warnings${c[n].fresh ? "" : " (OLDER than src/: re-run)"}`);
  return `${one("static")}; ${one("render")}`;
}

// The verdict for a round. Returns { verdict, reason, weighted, scores, lowest, checks, round, mode, cap }.
// verdict: PASS | ELEVATE | FIX | NEEDS_HUMAN (rules: docs/RUBRIC.md "Verdict")
export function verdictFor(id, data, round, mode = runMode()) {
  const { scores, problems } = readCategories(data);
  if (problems.length) return { verdict: "INVALID", problems };
  const w = weighted(scores);
  const checks = checkState(id);
  const lowest = Object.entries(scores).sort((a, b) => a[1] - b[1] || CATEGORIES[b[0]][0] - CATEGORIES[a[0]][0]).slice(0, 2).map(([k]) => k);
  const under = Object.entries(scores).filter(([k, v]) => v < CATEGORIES[k][1]).map(([k, v]) => `${k} ${v} < floor ${CATEGORIES[k][1]}`);
  const belowMin = Object.entries(scores).filter(([k, v]) => v < (k === "photo" ? mode.passPhoto : mode.passMin))
    .map(([k, v]) => `${k} ${v} < ${k === "photo" ? mode.passPhoto : mode.passMin}`);
  // mustFix: the critic's blocking items (docs/RUBRIC.md). Any item stops a PASS and forces FIX.
  const mustFix = Array.isArray(data.mustFix) ? data.mustFix.filter((m) => m && (typeof m !== "object" || Object.keys(m).length)) : [];
  const base = { weighted: w, scores, lowest, checks, round, mode: mode.name, mustFix: mustFix.length };

  if (w >= mode.passWeighted && !belowMin.length && checks.clean && checks.fresh && !mustFix.length) {
    return { ...base, verdict: "PASS", reason: `weighted ${w} >= ${mode.passWeighted}, every category at the bar, checks clean, no mustFix` };
  }
  const failWhy = [
    w < mode.passWeighted ? `weighted ${w} < ${mode.passWeighted}` : null,
    belowMin.length ? `under the bar: ${belowMin.join(", ")}` : null,
    !checks.clean ? `checks not clean (${describeChecks(checks)})` : null,
    checks.clean && !checks.fresh ? "checks are older than src/ (re-run check-static and check-render)" : null,
    mustFix.length ? `${mustFix.length} mustFix item${mustFix.length > 1 ? "s" : ""} open` : null,
  ].filter(Boolean).join("; ");

  // A reopened site (tools/reopen.mjs) carries its own cap in site.json.roundCap.
  const cap = Number(loadSite(id)?.roundCap) || mode.maxRounds;
  if (round >= cap) {
    // Fast mode: at the round cap a good-enough site with no blockers is delivered.
    if (mode.capWeighted != null && w >= mode.capWeighted && checks.noBlockers && checks.fresh && !under.length && !mustFix.length) {
      return { ...base, verdict: "PASS", cap: true, reason: `round cap ${cap} reached: weighted ${w} >= ${mode.capWeighted}, no blockers (${failWhy})` };
    }
    return { ...base, verdict: "NEEDS_HUMAN", reason: `round ${round} of ${cap} still fails: ${failWhy}` };
  }
  if (under.length || !checks.noBlockers || w < mode.elevateMin || mustFix.length) {
    return { ...base, verdict: "FIX", reason: [under.length ? `under a floor: ${under.join(", ")}` : null, failWhy].filter(Boolean).join("; ") };
  }
  if (!checks.clean || !checks.fresh) return { ...base, verdict: "FIX", reason: failWhy };
  return { ...base, verdict: "ELEVATE", reason: `${failWhy}. Rewrite the two weakest categories: ${lowest.join(" and ")}` };
}
