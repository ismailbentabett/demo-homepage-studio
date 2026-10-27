// A small, tolerant HTML parser for the static check (no dependency).
// parse(html) -> root node. Nodes: {type:"el", tag, attrs, children, parent, pos} | {type:"text", text, parent, pos}
// | {type:"comment", text, parent, pos}. `pos` is the offset in the source (for "line N" messages).
// An end tag closes up to the matching open element; a stray end tag is ignored.

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
const RAW = new Set(["script", "style", "textarea", "title"]);
// Opening one of these closes an open <p> (as browsers do).
const CLOSES_P = new Set(["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "figure", "footer", "form",
  "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul", "details", "dialog"]);

export function parse(html) {
  const root = { type: "el", tag: "#root", attrs: {}, children: [], parent: null, pos: 0 };
  const stack = [root];
  const top = () => stack[stack.length - 1];
  const add = (node) => { node.parent = top(); top().children.push(node); return node; };
  let i = 0;
  const n = html.length;
  while (i < n) {
    const lt = html.indexOf("<", i);
    if (lt === -1) { add({ type: "text", text: html.slice(i), pos: i }); break; }
    if (lt > i) add({ type: "text", text: html.slice(i, lt), pos: i });
    if (html.startsWith("<!--", lt)) {
      const end = html.indexOf("-->", lt + 4);
      const stop = end === -1 ? n : end + 3;
      add({ type: "comment", text: html.slice(lt + 4, end === -1 ? n : end), pos: lt });
      i = stop;
      continue;
    }
    if (html[lt + 1] === "!" || html[lt + 1] === "?") { // doctype / processing instruction
      const end = html.indexOf(">", lt);
      i = end === -1 ? n : end + 1;
      continue;
    }
    if (html[lt + 1] === "/") {
      const m = /^<\/\s*([a-zA-Z][\w:-]*)\s*>/.exec(html.slice(lt, lt + 80));
      if (!m) { add({ type: "text", text: "<", pos: lt }); i = lt + 1; continue; }
      const tag = m[1].toLowerCase();
      for (let s = stack.length - 1; s > 0; s--) {
        if (stack[s].tag === tag) { stack.length = s; break; }
      }
      i = lt + m[0].length;
      continue;
    }
    const tagM = /^<([a-zA-Z][\w:-]*)/.exec(html.slice(lt, lt + 60));
    if (!tagM) { add({ type: "text", text: "<", pos: lt }); i = lt + 1; continue; }
    const tag = tagM[1].toLowerCase();
    // Read attributes up to the closing ">" (quotes respected).
    let j = lt + tagM[0].length;
    const attrs = {};
    const attrOrder = [];
    let selfClose = false;
    while (j < n) {
      while (j < n && /\s/.test(html[j])) j++;
      if (html[j] === ">") { j++; break; }
      if (html[j] === "/" && html[j + 1] === ">") { selfClose = true; j += 2; break; }
      if (html[j] === "/") { j++; continue; }
      const am = /^[^\s=>\/"']+/.exec(html.slice(j, j + 200));
      if (!am) { j++; continue; }
      const name = am[0].toLowerCase();
      j += am[0].length;
      while (j < n && /\s/.test(html[j])) j++;
      let value = "";
      if (html[j] === "=") {
        j++;
        while (j < n && /\s/.test(html[j])) j++;
        const q = html[j];
        if (q === '"' || q === "'") {
          const end = html.indexOf(q, j + 1);
          value = html.slice(j + 1, end === -1 ? n : end);
          j = end === -1 ? n : end + 1;
        } else {
          const vm = /^[^\s>]*/.exec(html.slice(j));
          value = vm[0];
          j += vm[0].length;
        }
      }
      if (!(name in attrs)) { attrs[name] = decode(value); attrOrder.push(name); }
    }
    if (tag === "p" || CLOSES_P.has(tag)) {
      if (top().tag === "p") stack.pop();
    }
    if ((tag === "li" && top().tag === "li") || ((tag === "dt" || tag === "dd") && (top().tag === "dt" || top().tag === "dd")) ||
      (tag === "option" && top().tag === "option")) stack.pop();
    const el = add({ type: "el", tag, attrs, attrOrder, children: [], pos: lt });
    if (RAW.has(tag) && !selfClose) {
      const re = new RegExp(`</${tag}\\s*>`, "i");
      const rest = html.slice(j);
      const m = re.exec(rest);
      const body = m ? rest.slice(0, m.index) : rest;
      if (body) el.children.push({ type: "text", text: tag === "textarea" || tag === "title" ? decode(body) : body, raw: true, parent: el, pos: j });
      i = m ? j + m.index + m[0].length : n;
      continue;
    }
    if (!VOID.has(tag) && !selfClose) stack.push(el);
    i = j;
  }
  return root;
}

const NAMED = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", lsquo: "‘",
  rdquo: "”", ldquo: "“", mdash: "—", ndash: "–", hellip: "…", middot: "·", copy: "©",
  times: "×", rarr: "→", larr: "←", bull: "•", deg: "°", thinsp: " ", shy: "" };
export function decode(s) {
  if (!s || s.indexOf("&") === -1) return s;
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") {
      const code = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    const v = NAMED[e.toLowerCase()];
    return v === undefined ? m : v;
  });
}

// Depth-first walk over every node (fn may return false to skip children).
export function walk(node, fn) {
  for (const c of node.children || []) {
    if (fn(c) === false) continue;
    if (c.type === "el") walk(c, fn);
  }
}

export function elements(root, pred = () => true) {
  const out = [];
  walk(root, (n) => { if (n.type === "el" && pred(n)) out.push(n); });
  return out;
}

export const hasClass = (el, cls) => (el.attrs?.class || "").split(/\s+/).includes(cls);
export const classes = (el) => (el.attrs?.class || "").split(/\s+/).filter(Boolean);

export function closest(el, pred) {
  for (let p = el; p && p.tag !== "#root"; p = p.parent) if (p.type === "el" && pred(p)) return p;
  return null;
}

// Visible text (skips script/style/template/noscript-less defs and svg symbols).
const HIDDEN_TEXT = new Set(["script", "style", "template", "defs", "symbol", "title"]);
export function textOf(node) {
  if (node.type === "text") return decode(node.text);
  if (node.type !== "el" || HIDDEN_TEXT.has(node.tag)) return "";
  let s = "";
  for (const c of node.children) s += textOf(c) + (c.type === "el" && /^(p|div|li|h\d|br|td|th|dt|dd|section|figcaption|label|option|button|a)$/.test(c.tag) ? " " : "");
  return s;
}

// "section#work.t-deep > h2" style label for messages.
export function describe(el) {
  if (!el || el.type !== "el") return "?";
  const self = (e) => e.tag + (e.attrs.id ? `#${e.attrs.id}` : "") + classes(e).slice(0, 2).map((c) => `.${c}`).join("");
  const parts = [self(el)];
  let p = el.parent;
  while (p && p.tag !== "#root" && parts.length < 3) {
    parts.unshift(self(p));
    if (p.attrs.id) break;
    p = p.parent;
  }
  return parts.join(" > ");
}

// 1-based line number of an offset.
export function lineOf(src, pos) {
  let line = 1;
  for (let k = 0; k < pos && k < src.length; k++) if (src.charCodeAt(k) === 10) line++;
  return line;
}
