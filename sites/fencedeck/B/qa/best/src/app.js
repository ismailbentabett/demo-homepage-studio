/* fencedeck-B · Tallyboard. Board counter, material fit, review tally block, and the tally signature motion. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var NS = 'http://www.w3.org/2000/svg';
  var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');

  /* ---------- tally glyph (4 uprights + a slash), hand-wobbled ---------- */
  var STROKES = ['M7 4 7.8 28', 'M15 3.5 15.3 28.5', 'M23 4.5 22.4 28', 'M31 4 31.7 27.5'];
  var SLASH = 'M3 23.5 37 8.5';
  function tallySVG(n, i) {
    var paths = '';
    for (var k = 0; k < Math.min(n, 4); k++) paths += '<path pathLength="1" d="' + STROKES[k] + '"/>';
    if (n >= 5) paths += '<path class="tally__slash" pathLength="1" d="' + SLASH + '"/>';
    return '<svg class="tally" viewBox="0 0 44 32" style="--i:' + (i || 0) + '"><g>' + paths + '</g></svg>';
  }
  function tallyStrip(total, cap) {
    var groups = Math.floor(total / 5), rest = total % 5, out = '', shown = 0;
    cap = cap || 20;
    for (var g = 0; g < groups && shown < cap; g++, shown++) out += tallySVG(5, shown);
    if (rest && shown < cap) { out += tallySVG(rest, shown); shown++; }
    var left = total - Math.min(total, cap * 5);
    if (left > 0) out += '<span class="tc-more">+' + left + '</span>';
    return out;
  }

  /* ---------- 1 · board counter ---------- */
  var counter = $('[data-counter]');
  var takeoff = { done: false };
  if (counter) {
    var wIn = $('[data-c="w"]', counter), dIn = $('[data-c="d"]', counter);
    var wR = $('[data-c-range="w"]', counter), dR = $('[data-c-range="d"]', counter);
    var plan = $('[data-c-plan]', counter);
    var out = function (k) { return $('[data-out="' + k + '"]', counter); };
    var clamp = function (v, lo, hi) { v = Math.round(Number(v)); if (!isFinite(v)) v = lo; return Math.max(lo, Math.min(hi, v)); };
    var state = {};

    var calc = function () {
      var w = clamp(wIn.value, 6, 40), d = clamp(dIn.value, 4, 30);
      var s = Number(($('input[name="s"]:checked', counter) || {}).value || 16);
      var m = ($('input[name="m"]:checked', counter) || {}).value || 'composite';
      var rows = Math.ceil(d * 12 / 5.6875);
      var perRow = Math.ceil(w / 16);
      var boards = Math.ceil(rows * perRow * 1.1);
      var joists = Math.floor(w * 12 / s) + 1;
      state = { w: w, d: d, s: s, m: m, rows: rows, boards: boards, joists: joists, sqft: w * d };
      return state;
    };

    var drawPlan = function (st) {
      if (!plan) return;
      var X0 = 24, Y0 = 31, MW = 272, MH = 215;
      var k = Math.min(MW / st.w, MH / st.d);
      var W = st.w * k, H = st.d * k, x0 = X0 + (MW - W) / 2;
      var g = '';
      g += '<rect class="ln-thin" x="' + x0.toFixed(1) + '" y="' + (Y0 - 9) + '" width="' + W.toFixed(1) + '" height="9" fill="url(#p-hatch-ink)"/>';
      g += '<text class="lbl lbl--c" x="' + (x0 + W / 2).toFixed(1) + '" y="' + (Y0 - 15) + '">HOUSE · LEDGER</text>';
      // boards (parallel to the house), one hair line per row, thinned on big decks
      var rowH = H / st.rows, every = st.rows > 60 ? 2 : 1;
      for (var r = 1; r < st.rows; r += every) {
        var y = (Y0 + r * rowH).toFixed(1);
        g += '<path class="c-board" d="M' + x0.toFixed(1) + ' ' + y + 'H' + (x0 + W).toFixed(1) + '"/>';
      }
      // butt seams where a run is longer than one 16 ft board (staggered per row band)
      if (st.w > 16) {
        for (var b = 0; b < st.rows; b += 1) {
          var off = (b % 2) ? 8 : 0;
          for (var f = 16 - off; f < st.w; f += 16) {
            if (f <= 0) continue;
            var sx = (x0 + f * k).toFixed(1), y1 = (Y0 + b * rowH).toFixed(1), y2 = (Y0 + (b + 1) * rowH).toFixed(1);
            g += '<path class="c-seam" d="M' + sx + ' ' + y1 + 'V' + y2 + '"/>';
          }
        }
      }
      // joists (perpendicular to the house)
      var sp = st.s / 12 * k;
      for (var j = 0; j < st.joists; j++) {
        var jx = Math.min(x0 + j * sp, x0 + W).toFixed(1);
        g += '<path class="c-joist" d="M' + jx + ' ' + Y0 + 'V' + (Y0 + H).toFixed(1) + '"/>';
      }
      g += '<rect class="ln" x="' + x0.toFixed(1) + '" y="' + Y0 + '" width="' + W.toFixed(1) + '" height="' + H.toFixed(1) + '" fill="none"/>';
      // dimensions
      var yb = (Y0 + H + 18).toFixed(1);
      g += '<path class="dim" d="M' + x0.toFixed(1) + ' ' + yb + 'H' + (x0 + W).toFixed(1) + 'M' + x0.toFixed(1) + ' ' + (yb - 6) + 'v12M' + (x0 + W).toFixed(1) + ' ' + (yb - 6) + 'v12"/>';
      g += '<text class="lbl lbl--a lbl--c" x="' + (x0 + W / 2).toFixed(1) + '" y="' + (Number(yb) + 18) + '">' + st.w + ' FT</text>';
      var xr = (x0 + W + 12).toFixed(1);
      g += '<path class="dim" d="M' + xr + ' ' + Y0 + 'V' + (Y0 + H).toFixed(1) + 'M' + (xr - 6) + ' ' + Y0 + 'h12M' + (xr - 6) + ' ' + (Y0 + H).toFixed(1) + 'h12"/>';
      g += '<text class="lbl lbl--a" x="' + (Number(xr) + 6) + '" y="' + (Y0 + H / 2 + 4).toFixed(1) + '">' + st.d + ' FT</text>';
      plan.innerHTML = g;
      plan.setAttribute('aria-label', 'Plan of a ' + st.w + ' by ' + st.d + ' foot deck: ' + st.joists + ' joists, ' + st.rows + ' rows of boards.');
    };

    var render = function () {
      var st = calc();
      out('sqft').textContent = st.sqft;
      out('boards').textContent = st.boards;
      out('joists').textContent = st.joists;
      out('spacing').textContent = st.s + ' in. apart';
      $('[data-tally="boards"]', counter).innerHTML = tallyStrip(st.boards, 12);
      $('[data-tally="joists"]', counter).innerHTML = tallyStrip(st.joists, 12);
      $$('[data-range]', counter).forEach(function (p) { p.hidden = p.getAttribute('data-range') !== st.m; });
      drawPlan(st);
      if (takeoff.done) writeTakeoff(st);
    };

    var writeTakeoff = function (st) {
      var body = $('[data-takeoff-body]');
      if (body) body.innerHTML = '<b>' + st.w + ' × ' + st.d + ' ft</b> · <b>' + st.boards + '</b> boards · <b>' + st.joists + '</b> joists at ' + st.s + ' in. · ' + (st.m === 'wood' ? 'wood' : 'composite') + ' boards';
      var fb = $('[data-foot-boards]'), fu = $('[data-foot-unit]');
      if (fb) fb.textContent = st.boards + ' boards';
      if (fu) fu.textContent = 'for your deck';
    };

    var sync = function (from, to) { to.value = from.value; };
    wIn.addEventListener('input', function () { sync(wIn, wR); takeoff.done = true; render(); });
    dIn.addEventListener('input', function () { sync(dIn, dR); takeoff.done = true; render(); });
    wIn.addEventListener('change', function () { wIn.value = clamp(wIn.value, 6, 40); sync(wIn, wR); render(); });
    dIn.addEventListener('change', function () { dIn.value = clamp(dIn.value, 4, 30); sync(dIn, dR); render(); });
    wR.addEventListener('input', function () { sync(wR, wIn); takeoff.done = true; render(); });
    dR.addEventListener('input', function () { sync(dR, dIn); takeoff.done = true; render(); });
    $$('input[type="radio"]', counter).forEach(function (r) { r.addEventListener('change', function () { takeoff.done = true; render(); }); });
    var cform = $('form', counter);
    if (cform) cform.addEventListener('submit', function (e) { e.preventDefault(); });

    var send = $('[data-c-send]', counter);
    if (send) send.addEventListener('click', function (e) {
      e.preventDefault();
      var st = calc();
      takeoff.done = true;
      writeTakeoff(st);
      var svc = SW.fact('services') || [];
      var name = svc[st.m === 'wood' ? 1 : 0] && svc[st.m === 'wood' ? 1 : 0].name;
      SW.prefillForm({
        service: name || '',
        size: st.w + ' × ' + st.d + ' ft deck (' + st.sqft + ' sq ft)',
        material: st.m === 'wood' ? 'Pressure-treated wood' : 'Composite',
        details: 'Counter: ' + st.boards + ' deck boards (16 ft, +10%), ' + st.joists + ' joists at ' + st.s + ' in.'
      }, { focus: 'zip' });
    });
    render();
  }

  /* ---------- 5 · materials: upkeep → fits; pick → form ---------- */
  var mats = $('[data-materials]');
  if (mats) {
    var up = $('[data-upkeep]', mats), upOut = $('[data-upkeep-out]', mats);
    var FIT = [[3], [2, 3], [0, 1, 2, 3]];
    var SAY = ['nothing at all', 'a wash and a look', 'a stain every 2-3 years'];
    var apply = function () {
      var v = Math.max(0, Math.min(2, Number(up.value) || 0));
      if (upOut) upOut.textContent = SAY[v];
      $$('[data-mat]', mats).forEach(function (c) { c.classList.toggle('is-fit', FIT[v].indexOf(Number(c.getAttribute('data-mat'))) > -1); });
    };
    if (up) { up.addEventListener('input', apply); apply(); }
    $$('[data-pick]', mats).forEach(function (b) {
      b.addEventListener('click', function () { SW.prefillForm({ material: b.getAttribute('data-pick') }, { focus: 'material' }); });
    });
  }

  /* ---------- 8 · review tally block: one stroke per review ---------- */
  var block = $('[data-tallyblock]');
  var countEl = $('[data-review-count]');
  if (block && countEl) {
    var n = parseInt(String(countEl.textContent).replace(/\D/g, ''), 10) || 0;
    var html = '', groups = Math.floor(n / 5), rest = n % 5;
    for (var g = 0; g < groups; g++) html += tallySVG(5, g);
    if (rest) html += tallySVG(rest, groups);
    block.innerHTML = html;
    if (motion) {
      block.classList.add('is-armed');
      SW.inView(block, function () { block.classList.add('is-in'); }, { threshold: .25 });
    }
  }

  /* ---------- motion only ---------- */
  if (!motion) return;

  // hero intro: joists draw, then the joist tally counts to 10 (≤ 1.2 s, h1 already readable)
  var mosaic = $('.mosaic');
  if (mosaic) requestAnimationFrame(function () { requestAnimationFrame(function () { mosaic.classList.add('is-in'); }); });

  // grade stamps thunk on as they arrive
  $$('[data-stamp]').forEach(function (st) {
    SW.inView(st, function () {
      st.classList.add('is-in', 'is-thunk');
      setTimeout(function () { st.classList.remove('is-thunk'); }, 420);
    }, { threshold: .02 });
  });

  // 4 · posts story
  var posts = $('#posts');
  if (posts) {
    var track = $('[data-posts-track]', posts);
    var els = $$('.el-post', posts), fill = $('.el-fill', posts);
    var steps = $$('[data-pstep]', posts);
    var tpaths = $$('[data-posts-tally] path', posts);
    var nOut = $('[data-posts-n]', posts);
    var setP = function (p) {
      var shown = Math.max(1, Math.min(5, Math.ceil(p / .3 * 5)));
      var step = p < .3 ? 0 : p < .55 ? 1 : p < .8 ? 2 : 3;
      els.forEach(function (e, i) { e.classList.toggle('is-on', i < shown); });
      tpaths.forEach(function (t, i) { t.classList.toggle('is-on', i < shown); });
      if (nOut) nOut.textContent = shown;
      if (fill) fill.classList.toggle('is-on', step >= 3);
      steps.forEach(function (s, i) { s.classList.toggle('is-on', i === step); });
      posts.setAttribute('data-phase', step);
    };
    var playAll = function () {
      els.forEach(function (e, i) { setTimeout(function () { e.classList.add('is-on'); if (tpaths[i]) tpaths[i].classList.add('is-on'); if (nOut) nOut.textContent = i + 1; }, 140 * i); });
      if (fill) setTimeout(function () { fill.classList.add('is-on'); }, 140 * els.length + 120);
    };
    posts.classList.add('is-armed');

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.matchMedia({
        '(min-width: 900px)': function () {
          posts.classList.add('is-scrub');
          setP(0);
          var tr = ScrollTrigger.create({
            trigger: track, start: 'top top', end: 'bottom bottom', scrub: true,
            onUpdate: function (self) { setP(self.progress); },
            onRefresh: function (self) { setP(self.progress); }
          });
          return function () { tr.kill(); posts.classList.remove('is-scrub'); };
        },
        '(max-width: 899px)': function () {
          els.forEach(function (e) { e.classList.remove('is-on'); });
          tpaths.forEach(function (t) { t.classList.remove('is-on'); });
          if (fill) fill.classList.remove('is-on');
          var tr = ScrollTrigger.create({ trigger: $('.posts__fig', posts), start: 'top 75%', once: true, onEnter: playAll });
          return function () { tr.kill(); };
        }
      });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    } else {
      SW.inView($('.posts__fig', posts), playAll, { threshold: .3 });
    }
  }
})();
