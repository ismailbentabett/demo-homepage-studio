// Site and niche paths for the build / check / media tools.
// Like parseId in common.mjs, but it also accepts the throwaway test trade "_test" (id "_test-A" -> sites/_test/A).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

// Print a plain message and stop with exit code 1.
export function die(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

// "roofer-A" -> { id, trade, dir, siteDir }. "_test-A" is allowed for tool tests.
export function siteFromId(id) {
  const m = /^([a-z]+|_test)-([ABC])$/.exec(String(id || "").trim());
  if (!m) die(`"${id ?? ""}" is not a site id. Use <trade>-<A|B|C>, e.g. roofer-A.`);
  return { id: `${m[1]}-${m[2]}`, trade: m[1], dir: m[2], siteDir: path.join(ROOT, "sites", m[1], m[2]) };
}

// niches/<trade>/media
export function mediaDir(trade) {
  if (!/^[a-z]+$/.test(String(trade || ""))) die(`"${trade ?? ""}" is not a trade name (lowercase letters only, e.g. drywall).`);
  return path.join(ROOT, "niches", trade, "media");
}

// Read JSON; a missing file returns `fallback` when one is given, otherwise stops with a plain message.
export function readJsonFile(file, fallback) {
  if (!fs.existsSync(file)) {
    if (arguments.length > 1) return fallback;
    die(`File not found: ${rel(file)}`);
  }
  try {
    return JSON.parse(fs.readFileSync(file, "utf8").replace(/^﻿/, ""));
  } catch (e) {
    die(`${rel(file)} is not valid JSON: ${e.message}`);
  }
}

export function writeJsonFile(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

// Path relative to ROOT with forward slashes, for messages.
export function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

// Tiny argv parser: positional args + --flag / --key value. `bool` lists flags that take no value.
export function parseArgs(argv, bool = []) {
  const pos = [];
  const opt = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const [k, inline] = a.slice(2).split("=", 2);
      if (inline !== undefined) opt[k] = inline;
      else if (bool.includes(k) || i + 1 >= argv.length || argv[i + 1].startsWith("--")) opt[k] = true;
      else opt[k] = argv[++i];
    } else pos.push(a);
  }
  return { pos, opt };
}

export function kb(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

// Total size of a folder (recursive).
export function dirSize(dir) {
  if (!fs.existsSync(dir)) return 0;
  let total = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    total += e.isDirectory() ? dirSize(p) : fs.statSync(p).size;
  }
  return total;
}
