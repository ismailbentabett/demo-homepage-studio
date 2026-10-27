/* concrete-B · the spec sheet signature: every tool writes a line, the rail and the form keep it.
   Tools work with or without motion; only the core-sample story is gated on motion + width. */
(function () {
  'use strict';
  var SW = window.SW;
  if (!SW) return;
  var $ = SW.$, $$ = SW.$$;
  var html = document.documentElement;

  /* ---------------- spec state ---------------- */
  var ORDER = ['size', 'use', 'slab', 'steel', 'base', 'grade', 'finish', 'pour'];
  var LABEL = { size: 'Size', use: 'Use', slab: 'Slab', steel: 'Steel', base: 'Base', grade: 'Grade', finish: 'Finish', pour: 'Pour' };
  var DEF = { slab: '5 in.', steel: '#4 @ 16 in. o.c.', base: '4 in. compacted', grade: 'Sloped to drain' };
  var spec = {};
  var notes = [];
  var field = $('[data-spec-field]');
  var fieldEdited = false;
  if (field) SW.on(field, 'input', function (e) { if (e.isTrusted) fieldEdited = true; });

  /* the open-now line reads as a sentence, not a dotted string */
  $$('[data-open-now]').forEach(function (el) {
    var fix = function () {
      var t = el.textContent.trim(), m, out = t;
      if ((m = /^Closed · opens (.*?)(\d[\d:]* ?[ap]m)$/i.exec(t))) out = 'Closed now. Opens ' + m[1] + 'at ' + m[2] + '.';
      else if ((m = /^Open now · until (.*)$/i.exec(t))) out = 'Open now, until ' + m[1] + '.';
      else if (t === 'Closed') out = 'Closed now.';
      if (out !== t) el.textContent = out;
    };
    fix();
    if ('MutationObserver' in window) new MutationObserver(fix).observe(el, { childList: true, characterData: true, subtree: true });
  });
  function count() { return ORDER.filter(function (k) { return spec[k]; }).length; }
  function text() {
    var parts = ORDER.filter(function (k) { return spec[k] || DEF[k]; }).map(function (k) { return LABEL[k] + ': ' + (spec[k] || DEF[k] + ' (our default)'); });
    if (notes.length) parts.push('Notes: ' + notes.join('; '));
    return parts.join(' · ');
  }
  function short() {
    if (!count()) return 'Nothing picked yet. Our default: 5 in. slab, #4 @ 16 in., 4 in. base, sloped to drain';
    return ORDER.filter(function (k) { return spec[k]; }).map(function (k) { return LABEL[k] + ' ' + spec[k]; }).join(', ');
  }

  var flashT = 0;
  function render(changed) {
    var n = count() + '/8';
    $$('[data-spec-count]').forEach(function (el) {
      el.textContent = n;
      if (changed && !SW.reduced) { el.classList.remove('is-bump'); void el.offsetWidth; el.classList.add('is-bump'); }
    });
    $$('[data-tick]').forEach(function (t) {
      var k = t.getAttribute('data-tick');
      t.classList.toggle('is-set', !!spec[k]);
      t.classList.toggle('is-hot', k === changed);
    });
    $$('[data-spec-list], [data-spec-mirror]').forEach(function (list) {
      $$('[data-line]', list).forEach(function (row) {
        var k = row.getAttribute('data-line');
        var dd = $('dd', row);
        if (dd) dd.textContent = spec[k] || (DEF[k] ? 'Our default: ' + DEF[k].charAt(0).toLowerCase() + DEF[k].slice(1) : 'Not set');
        row.classList.toggle('is-set', !!spec[k]);
        row.classList.toggle('is-new', k === changed);
      });
    });
    $$('[data-spec-notes]').forEach(function (p) {
      p.hidden = !notes.length;
      p.textContent = notes.length ? 'Notes: ' + notes.join('; ') : '';
    });
    var r = $('[data-receipt-text]');
    if (r) r.textContent = short();
    if (field && !fieldEdited) field.value = text();
    if (changed) {
      var flash = $('[data-rail-flash]');
      if (flash) {
        flash.textContent = '+ ' + LABEL[changed] + ': ' + spec[changed];
        flash.classList.add('is-on');
        clearTimeout(flashT);
        flashT = setTimeout(function () {
          flash.classList.remove('is-on');
          $$('[data-tick].is-hot, [data-line].is-new').forEach(function (x) { x.classList.remove('is-hot', 'is-new'); });
        }, 2200);
      }
      say(LABEL[changed] + ' added to your spec. ' + count() + ' of 8 lines set.');
    }
  }
  var live = document.createElement('p');
  live.className = 'sr-only'; live.setAttribute('role', 'status'); live.setAttribute('aria-live', 'polite');
  document.body.appendChild(live);
  function say(msg) { live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 40); }

  function set(k, v, quiet) { spec[k] = v; render(quiet ? null : k); }
  function confirm(btn, label) {
    if (!btn) return;
    var old = btn.getAttribute('data-label-old') || btn.innerHTML;
    btn.setAttribute('data-label-old', old);
    btn.classList.add('is-added');
    btn.lastChild.textContent = ' ' + (label || 'Added to your spec');
    setTimeout(function () { btn.innerHTML = old; btn.classList.remove('is-added'); }, 2400);
  }

  $$('[data-spec-set]').forEach(function (b) {
    SW.on(b, 'click', function () { set(b.getAttribute('data-spec-set'), b.getAttribute('data-spec-val')); confirm(b, 'Added: ' + b.getAttribute('data-spec-val')); });
  });
  $$('[data-spec-note]').forEach(function (b) {
    SW.on(b, 'click', function () {
      var v = b.getAttribute('data-spec-note');
      if (notes.indexOf(v) < 0) notes.push(v);
      render(null);
      b.classList.add('is-added');
      b.lastChild.textContent = ' Added to your notes';
      say('Added to your spec notes.');
    });
  });

  /* ---------------- sheet dialog ---------------- */
  var sheet = $('[data-spec-sheet]');
  var opener = null;
  function openSheet(btn) {
    if (!sheet) return;
    opener = btn;
    if (typeof sheet.showModal === 'function') sheet.showModal(); else sheet.setAttribute('open', '');
  }
  function closeSheet() {
    if (!sheet) return;
    if (typeof sheet.close === 'function') sheet.close(); else sheet.removeAttribute('open');
  }
  $$('[data-spec-open]').forEach(function (b) { SW.on(b, 'click', function () { openSheet(b); }); });
  $$('[data-sheet-close]').forEach(function (b) { SW.on(b, 'click', closeSheet); });
  if (sheet) {
    SW.on(sheet, 'click', function (e) { if (e.target === sheet) closeSheet(); });
    SW.on(sheet, 'close', function () { if (opener) SW.focusEl(opener); opener = null; });
  }
  $$('[data-spec-send]').forEach(function (a) {
    SW.on(a, 'click', function (e) {
      e.preventDefault();
      opener = null;
      closeSheet();
      fieldEdited = false;
      var svc = spec.use === 'RV or boat pad' ? 'RV' : null;
      var data = { spec: text() };
      if (svc) data.service = svc;
      SW.prefillForm(data, { focus: 'service' });
    });
  });
  $$('[data-print]').forEach(function (b) {
    SW.on(b, 'click', function () {
      html.classList.add('print-sheet');
      if (sheet && !sheet.open) sheet.setAttribute('open', '');
      setTimeout(function () {
        window.print();
        html.classList.remove('print-sheet');
        if (sheet && !opener) sheet.removeAttribute('open');
      }, 30);
    });
  });

  /* ---------------- range fill ---------------- */
  function fill(input) {
    var min = +input.min, max = +input.max;
    input.style.setProperty('--fill', ((+input.value - min) / (max - min) * 100).toFixed(1) + '%');
  }
  $$('input[type="range"]').forEach(function (i) { fill(i); SW.on(i, 'input', function () { fill(i); }); });

  function tick(el, val) {
    if (!el || el.textContent === String(val)) return;
    el.textContent = val;
    if (!SW.reduced) { el.classList.remove('is-tick'); void el.offsetWidth; el.classList.add('is-tick'); }
  }
  function setAttrs(el, o) { if (el) Object.keys(o).forEach(function (k) { el.setAttribute(k, o[k]); }); }

  /* ---------------- tool 01 · slab calculator ---------------- */
  var calc = $('[data-calc]');
  var USE = { walk: 'Walkway', patio: 'Patio', car: 'Driveway (cars)', rv: 'RV or boat pad' };
  if (calc) {
    var plan = $('[data-calc-plan]');
    var P = function (k) { return plan && $('[data-p="' + k + '"]', plan); };
    var lastUse = null;
    var update = function () {
      var L = +calc.elements.len.value, W = +calc.elements.wid.value;
      var useIn = $('input[name="use"]:checked', calc);
      var use = useIn ? useIn.value : 'car';
      var rec = useIn ? +useIn.getAttribute('data-t') : 5;
      if (use !== lastUse) {
        lastUse = use;
        var tIn = $('input[name="t"][value="' + rec + '"]', calc);
        if (tIn) tIn.checked = true;
      }
      var tSel = $('input[name="t"]:checked', calc);
      var t = tSel ? +tSel.value : rec;
      $('[data-out="len"]', calc).textContent = L + ' ft';
      $('[data-out="wid"]', calc).textContent = W + ' ft';
      var area = L * W;
      var yd = area * t / 12 / 27 * 1.1;
      tick($('[data-r="area"]'), area);
      tick($('[data-r="yd"]'), yd.toFixed(1));
      tick($('[data-r="t"]'), t);
      var steel = $('[data-r="steel"]');
      if (steel) steel.textContent = use === 'walk' ? 'Wire mesh or #3 bar' : '#4 @ 16 in.';
      $$('[data-range]').forEach(function (s) { s.classList.toggle('is-off', s.getAttribute('data-range').split(' ').indexOf(use) < 0); });
      var warn = $('[data-calc-warn]', calc);
      if (warn) warn.textContent = t < rec ? 'We’d pour ' + rec + ' in. for this use. Thinner slabs crack under the load.' : '';
      if (plan) {
        var s = Math.min(300 / L, 190 / W);
        var w = L * s, h = W * s, x = 200 - w / 2, y = 150 - h / 2;
        setAttrs(P('slab'), { x: x.toFixed(1), y: y.toFixed(1), width: w.toFixed(1), height: h.toFixed(1) });
        var g = P('joints');
        if (g) {
          var nx = Math.ceil(L / 10), ny = Math.ceil(W / 10), d = '';
          for (var i = 1; i < nx; i++) { var jx = (x + i * w / nx).toFixed(1); d += 'M' + jx + ' ' + y.toFixed(1) + 'v' + h.toFixed(1); }
          for (var j = 1; j < ny; j++) { var jy = (y + j * h / ny).toFixed(1); d += 'M' + x.toFixed(1) + ' ' + jy + 'h' + w.toFixed(1); }
          g.innerHTML = d ? '<path d="' + d + '" fill="none"/>' : '';
        }
        var top = y - 22, right = x + w + 18;
        setAttrs(P('dimx'), { d: 'M' + x.toFixed(1) + ' ' + top.toFixed(1) + 'h' + w.toFixed(1) + 'M' + x.toFixed(1) + ' ' + (top - 6).toFixed(1) + 'v12M' + (x + w).toFixed(1) + ' ' + (top - 6).toFixed(1) + 'v12' });
        var tx = P('tx'); if (tx) { setAttrs(tx, { x: (x + w / 2).toFixed(1), y: (top - 10).toFixed(1) }); tx.textContent = L + ' FT'; }
        setAttrs(P('dimy'), { d: 'M' + right.toFixed(1) + ' ' + y.toFixed(1) + 'v' + h.toFixed(1) + 'M' + (right - 6).toFixed(1) + ' ' + y.toFixed(1) + 'h12M' + (right - 6).toFixed(1) + ' ' + (y + h).toFixed(1) + 'h12' });
        var ty = P('ty'); if (ty) { setAttrs(ty, { x: (right + 8).toFixed(1), y: (y + h / 2 + 5).toFixed(1) }); ty.textContent = W + ' FT'; }
      }
      return { L: L, W: W, area: area, t: t, use: use };
    };
    SW.on(calc, 'input', update);
    SW.on(calc, 'change', update);
    SW.on(calc, 'submit', function (e) { e.preventDefault(); });
    update();
    var add = $('[data-calc-add]');
    if (add) SW.on(add, 'click', function () {
      var r = update();
      spec.size = r.L + ' × ' + r.W + ' ft (' + r.area + ' sq ft)';
      spec.use = USE[r.use];
      spec.slab = r.t + ' in.';
      render('size');
      confirm(add, 'Added: size, use, slab');
    });
  }

  /* ---------------- tool 03 · RV pad sizer ---------------- */
  var rv = $('[data-rv]');
  if (rv) {
    var rplan = $('[data-rv-plan]');
    var R = function (k) { return rplan && $('[data-p="' + k + '"]', rplan); };
    var rvUpdate = function () {
      var rig = +rv.elements.rig.value, side = +rv.elements.side.value, gate = +rv.elements.gate.value;
      $('[data-out="rig"]', rv).textContent = rig + ' ft';
      $('[data-out="side"]', rv).textContent = side + ' ft';
      $('[data-out="gate"]', rv).textContent = gate + ' ft';
      var padL = Math.ceil((rig + 6) / 2) * 2;
      var padW = Math.max(12, Math.ceil(8.5 + 2 * side));
      tick($('[data-rv="pad"]'), padL + ' × ' + padW);
      tick($('[data-rv="area"]'), padL * padW);
      var warn = $('[data-rv-warn]');
      if (warn) warn.textContent = gate < 11 ? 'A gate under 11 ft is tight for an 8.5 ft wide rig. Plan to widen it; we can quote that too.' : '';
      if (rplan) {
        var s = Math.min(8, 330 / padL, 200 / padW);
        var cy = 170, pw = padL * s, ph = padW * s, px = 60, py = cy - ph / 2;
        setAttrs(R('pad'), { x: px, y: py.toFixed(1), width: pw.toFixed(1), height: ph.toFixed(1) });
        var rw = rig * s, rh = 8.5 * s;
        setAttrs(R('rig'), { x: (px + (pw - rw) / 2).toFixed(1), y: (cy - rh / 2).toFixed(1), width: rw.toFixed(1), height: rh.toFixed(1) });
        var gh = gate * s;
        setAttrs(R('gate'), { y: (cy - gh / 2).toFixed(1), height: gh.toFixed(1), fill: gate < 11 ? '#B8432F' : '#D4880F' });
        var top = py - 18, right = px + pw + 18;
        setAttrs(R('dl'), { d: 'M' + px + ' ' + top.toFixed(1) + 'H' + (px + pw).toFixed(1) + 'M' + px + ' ' + (top - 6).toFixed(1) + 'v12M' + (px + pw).toFixed(1) + ' ' + (top - 6).toFixed(1) + 'v12' });
        var tl = R('tl'); if (tl) { setAttrs(tl, { x: (px + pw / 2).toFixed(1), y: (top - 10).toFixed(1) }); tl.textContent = padL + ' FT'; }
        setAttrs(R('dw'), { d: 'M' + right.toFixed(1) + ' ' + py.toFixed(1) + 'V' + (py + ph).toFixed(1) + 'M' + (right - 6).toFixed(1) + ' ' + py.toFixed(1) + 'h12M' + (right - 6).toFixed(1) + ' ' + (py + ph).toFixed(1) + 'h12' });
        var tw = R('tw'); if (tw) { setAttrs(tw, { x: (right + 8).toFixed(1), y: (cy + 5).toFixed(1) }); tw.textContent = padW + ' FT'; }
        var tg = R('tg'); if (tg) { setAttrs(tg, { y: (Math.max(cy + gh / 2, py + ph) + 26).toFixed(1) }); tg.textContent = 'GATE ' + gate + ' FT'; }
        var tr = R('tr'); if (tr) { setAttrs(tr, { x: (px + pw / 2).toFixed(1), y: (cy + 5).toFixed(1) }); tr.textContent = 'RIG ' + rig + ' FT'; }
      }
      return { padL: padL, padW: padW };
    };
    SW.on(rv, 'input', rvUpdate);
    SW.on(rv, 'submit', function (e) { e.preventDefault(); });
    rvUpdate();
    var rvAdd = $('[data-rv-add]');
    if (rvAdd) SW.on(rvAdd, 'click', function () {
      var r = rvUpdate();
      spec.size = r.padL + ' × ' + r.padW + ' ft (' + (r.padL * r.padW) + ' sq ft)';
      spec.use = 'RV or boat pad';
      spec.slab = '6 in.';
      render('size');
      confirm(rvAdd, 'Added: pad, use, 6 in. slab');
    });
  }

  render(null);

  /* ---------------- story: reading a layer writes its line (all widths, motion or not) ---------------- */
  var LAYER = ['finish', 'slab', 'steel', 'base', 'grade'];
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var k = LAYER[+e.target.getAttribute('data-layer')];
        io.unobserve(e.target);
        if (k && DEF[k] && !spec[k]) set(k, DEF[k]);
      });
    }, { rootMargin: '0px 0px -40% 0px', threshold: 0 });
    $$('#story .step').forEach(function (s) { io.observe(s); });
  }

  /* ---------------- numbers: draw the dimension lines when the ledger arrives ---------------- */
  var ledger = $('.ledger');
  if (ledger) $$('.dimline', ledger).forEach(function (d, i) { d.style.setProperty('--i', i); });

  /* ---------------- story: the core sample lights layer by layer (motion + ≥640 only) ---------------- */
  if (!SW.reduced && html.classList.contains('sw-motion')) {
    var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
    var story = $('#story');
    if (gsap && ScrollTrigger && story) {
      gsap.registerPlugin(ScrollTrigger);
      var steps = $$('.step', story);
      var light = function (cur) {
        $$('.L, .D', story).forEach(function (g) {
          var l = +g.getAttribute('data-l');
          g.classList.toggle('is-on', l <= cur);
          g.classList.toggle('is-cur', l === cur);
        });
        steps.forEach(function (s, i) { s.classList.toggle('is-cur', i === cur); });
        var tickKey = ['finish', 'slab', 'steel', 'base', 'grade'][cur];
        $$('[data-tick]').forEach(function (t) { t.classList.toggle('is-hot', t.getAttribute('data-tick') === tickKey); });
      };
      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          story.classList.add('is-armed');
          var whole = ScrollTrigger.create({
            trigger: story, start: 'top 62%', end: 'bottom 38%',
            onToggle: function (self) { if (!self.isActive) $$('[data-tick].is-hot').forEach(function (t) { t.classList.remove('is-hot'); }); },
          });
          var made = steps.map(function (s, i) {
            return ScrollTrigger.create({
              trigger: s, start: 'top 62%', end: 'bottom 62%',
              onToggle: function (self) { if (self.isActive) light(i); },
            });
          });
          return function () {
            made.forEach(function (t) { t.kill(); });
            whole.kill();
            story.classList.remove('is-armed');
            $$('.is-on, .is-cur', story).forEach(function (x) { x.classList.remove('is-on', 'is-cur'); });
          };
        },
      });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  }
})();
