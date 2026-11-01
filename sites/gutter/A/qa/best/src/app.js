/* gutter-A · Pitch Run: tools (always on) + signature motion (sw-motion only) */
(function () {
  'use strict';
  var root = document.documentElement;

  // ---------- helpers ----------
  function quarters(inches) {
    var q = Math.round(inches * 4);
    var whole = Math.floor(q / 4), part = q % 4;
    var frac = ['', '¼', '½', '¾'][part];
    if (!whole && !part) return '0 in';
    return (whole ? String(whole) : '') + frac + ' in';
  }
  function num(v, d, lo, hi) { var n = parseFloat(v); if (!isFinite(n)) n = d; return Math.min(hi, Math.max(lo, n)); }

  // ---------- tool 1: size check ----------
  var sc = document.querySelector('[data-size-check]');
  if (sc) {
    var trough = sc.querySelector('[data-trough]');
    var tLbl = sc.querySelector('[data-trough-lbl]');
    var verdict = sc.querySelector('[data-sc-verdict]');
    var why = sc.querySelector('[data-sc-why]');
    var fall = sc.querySelector('[data-sc-fall]');
    var bar = sc.querySelector('.fallbar__line');
    var last = null;
    var scRun = function () {
      var L = num(sc.len.value, 40, 10, 200);
      var D = num(sc.depth.value, 28, 10, 80);
      var area = Math.round(L * D / 2 * parseFloat(sc.pitch.value) * parseFloat(sc.rain.value) / 10) * 10;
      var six = area > 600;
      trough.setAttribute('data-trough', six ? '6' : '5');
      tLbl.textContent = six ? '6-inch' : '5-inch';
      verdict.textContent = six ? '6-inch is the safer choice.' : '5-inch is usually enough.';
      why.textContent = six
        ? 'About ' + area + ' sq ft of roof sheds into this run in a hard rain. Past 600, a 5-inch trough tends to overflow in the middle.'
        : 'About ' + area + ' sq ft of roof sheds into this run in a hard rain. A 5-inch trough with the right drops carries that.';
      var f = L / 40;
      fall.textContent = 'A ' + L + ' ft run hung at ¼ in per 10 ft falls ' + quarters(f) + '.';
      if (bar) { bar.style.setProperty('--fall-deg', Math.min(3, .4 + f * .5).toFixed(2) + 'deg'); bar.style.setProperty('--tick', (100 / Math.max(1, L / 10)).toFixed(2) + '%'); }
      last = { six: six, L: L, area: area, f: quarters(f) };
    };
    sc.addEventListener('input', scRun);
    sc.addEventListener('change', scRun);
    sc.addEventListener('submit', function (e) { e.preventDefault(); });
    scRun();
    var scBtn = sc.querySelector('[data-sc-quote]');
    if (scBtn) scBtn.addEventListener('click', function () {
      if (!window.SW || !last) return;
      SW.prefillForm({
        service: last.six ? 'Six-inch gutter upgrades' : 'Seamless gutter installation',
        details: 'Size check: ' + last.L + ' ft run, about ' + last.area + ' sq ft of roof, ' + (last.six ? '6-inch' : '5-inch') + ' suggested, fall ' + last.f + '.'
      }, { focus: 'service' });
    });
  }

  // ---------- tool 2: downspout count ----------
  var dc = document.querySelector('[data-drop-count]');
  if (dc) {
    var out = dc.querySelector('[data-dc-out]');
    var g = dc.querySelector('[data-drops]');
    var NS = 'http://www.w3.org/2000/svg';
    var lastD = null;
    var dcRun = function () {
      var L = num(dc.len.value, 70, 10, 200);
      var size = dc.querySelector('input[name="size"]:checked');
      var span = size && size.value === '6' ? 40 : 30;
      var corners = parseInt(dc.corners.value, 10) || 0;
      var n = Math.max(Math.ceil(L / span), corners >= 1 ? 2 : 1);
      var every = Math.round(L / n);
      out.textContent = n + ' downspout' + (n > 1 ? 's' : '') + ' on a ' + L + ' ft run, about one every ' + every + ' ft.';
      while (g.firstChild) g.removeChild(g.firstChild);
      for (var i = 0; i < n; i++) {
        var x = n === 1 ? 380 : 20 + i * (360 / (n - 1));
        var y = 18 + (x / 400) * 6;
        var p = document.createElementNS(NS, 'line');
        p.setAttribute('x1', x); p.setAttribute('x2', x); p.setAttribute('y1', y); p.setAttribute('y2', 52);
        p.setAttribute('class', 'p');
        var c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', x); c.setAttribute('cy', 55); c.setAttribute('r', 4); c.setAttribute('class', 'd');
        g.appendChild(p); g.appendChild(c);
      }
      lastD = { n: n, L: L, size: span === 40 ? '6-inch' : '5-inch' };
    };
    dc.addEventListener('input', dcRun);
    dc.addEventListener('change', dcRun);
    dc.addEventListener('submit', function (e) { e.preventDefault(); });
    dcRun();
    var dcBtn = dc.querySelector('[data-dc-quote]');
    if (dcBtn) dcBtn.addEventListener('click', function () {
      if (!window.SW || !lastD) return;
      SW.prefillForm({ service: 'Downspout additions', details: 'Downspout count: ' + lastD.n + ' drops on a ' + lastD.L + ' ft ' + lastD.size + ' run.' }, { focus: 'service' });
    });
  }

  // ---------- review text: curly apostrophes ----------
  Array.prototype.forEach.call(document.querySelectorAll('.rev blockquote p'), function (p) {
    if (p.textContent.indexOf("'") > -1) p.textContent = p.textContent.replace(/'/g, '’');
  });

  // ---------- hero: the ruler drops onto the real gutter, runs to its outlet, down the spout ----------
  // Points traced on the (mirrored) hero photo, in the image's own 0-1 coordinates.
  var heroEl = document.querySelector('.hero');
  var joinSvg = document.querySelector('[data-hero-join]');
  var joinRun = joinSvg && joinSvg.querySelector('.hero__join-run');
  var joinTicks = joinSvg && joinSvg.querySelector('.hero__join-ticks');
  var joinDrop = joinSvg && joinSvg.querySelector('.hero__join-drop');
  var heroImg = document.querySelector('.hero__img');
  var heroLine = document.querySelector('.hero__line');
  var join = { len: 0, path: null };
  function lipV(u) { var x = u * 800; return (262 - .325 * (x - 170)) / 533; }
  var SPOUT = [[.47, .47], [.468, .544], [.48, .713], [.548, .825], [.66, .976]];
  function buildJoin() {
    if (!joinSvg || !heroImg || !heroLine || !heroEl) return;
    if (!window.matchMedia('(min-width: 900px)').matches || !heroImg.naturalWidth) { join.len = 0; return; }
    var hr = heroEl.getBoundingClientRect(), ir = heroImg.getBoundingClientRect(), lr = heroLine.getBoundingClientRect();
    var W = ir.width, H = ir.height, iw = heroImg.naturalWidth, ih = heroImg.naturalHeight;
    var s = Math.max(W / iw, H / ih), w = iw * s, h = ih * s;
    var pos = (getComputedStyle(heroImg).objectPosition || '50% 50%').split(' ');
    var px = (parseFloat(pos[0]) || 50) / 100, py = (parseFloat(pos[1]) || 50) / 100;
    var ox = (W - w) * px, oy = (H - h) * py;
    var L = ir.left - hr.left, T = ir.top - hr.top;
    var pt = function (u, v) { return [L + W - (ox + u * w), T + oy + v * h]; };
    var sx = lr.left - hr.left + heroLine.offsetWidth, sy = lr.top + lr.height / 2 - hr.top;
    // where the lip sits under the ruler's end
    var u0 = (W - (sx + 36 - L) - ox) / w;
    u0 = Math.min(.98, Math.max(.56, u0));
    var pts = [];
    for (var u = u0; u > .485; u -= .02) pts.push(pt(u, lipV(u) - .012));
    SPOUT.forEach(function (p) { pts.push(pt(p[0], p[1])); });
    var f = function (n) { return n.toFixed(1); };
    var d = 'M' + f(sx) + ' ' + f(sy) + ' L' + f(pts[0][0]) + ' ' + f(pts[0][1]);
    for (var i = 1; i < pts.length; i++) d += ' L' + f(pts[i][0]) + ' ' + f(pts[i][1]);
    joinRun.setAttribute('d', d);
    // ticks across the lip, every ~10% of the photo's run
    var t = '', lipN = Math.floor((u0 - .49) / .06);
    for (var k = 0; k <= lipN; k++) {
      var uu = u0 - k * .06, a = pt(uu, lipV(uu) - .012);
      t += 'M' + f(a[0]) + ' ' + f(a[1] - 8) + ' L' + f(a[0]) + ' ' + f(a[1] + 1) + ' ';
    }
    joinTicks.setAttribute('d', t || 'M0 0');
    join.len = joinRun.getTotalLength();
    join.path = joinRun;
    var rest = joinRun.getPointAtLength(join.len * .5);
    var out = pt(.481, .47);
    joinDrop.setAttribute('cx', f(out[0])); joinDrop.setAttribute('cy', f(out[1]));
    if (rest) joinSvg.style.setProperty('--jl', join.len.toFixed(1));
  }
  var joinQ = 0;
  function queueJoin() { cancelAnimationFrame(joinQ); joinQ = requestAnimationFrame(buildJoin); }
  if (heroImg) { if (heroImg.complete) buildJoin(); else heroImg.addEventListener('load', buildJoin); }
  window.addEventListener('resize', queueJoin);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueJoin);

  // ---------- motion ----------
  var reduced = window.SW ? SW.reduced : !root.classList.contains('sw-motion');
  if (reduced || !root.classList.contains('sw-motion')) return;

  // rail readout: 0 → 90 ft, fall 0 → 2¼ in, in ¼ in steps
  var rail = document.querySelector('.rail');
  var lenEl = document.querySelector('[data-readout-len]');
  var fallEl = document.querySelector('[data-readout-fall]');
  var foot = document.querySelector('.site-foot');
  var queued = false;
  function readout() {
    queued = false;
    var max = root.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
    var step = Math.round(p * 9);
    if (rail) rail.style.setProperty('--rp', p.toFixed(4));
    if (lenEl) lenEl.textContent = (step * 10) + ' ft';
    if (fallEl) fallEl.textContent = quarters(step / 4);
  }
  window.addEventListener('scroll', function () { if (!queued) { queued = true; requestAnimationFrame(readout); } }, { passive: true });
  window.addEventListener('resize', readout);
  readout();

  // footer: the drop lands on the splash block
  if (foot && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { foot.classList.add('is-landed'); io.disconnect(); }
    }, { threshold: .3 });
    io.observe(foot);
  } else if (foot) foot.classList.add('is-landed');

  // hero intro: chalk-line snap (≤1.1 s, text never hidden)
  var hero = document.querySelector('.hero');
  var line = document.querySelector('.hero__line');
  var drop = document.querySelector('.hero__drop');
  var photo = document.querySelector('.hero__photo');
  if (window.gsap && hero && line && drop) {
    var wide = window.matchMedia('(min-width: 900px)').matches;
    var tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    var runW = line.getBoundingClientRect().width;
    tl.fromTo(line, { '--draw': 0 }, { '--draw': 1, duration: .52 }, 0);
    if (photo && wide) {
      tl.fromTo(photo, { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 82% 100%)' },
        { clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)', duration: .6, ease: 'power3.inOut', clearProps: 'clipPath' }, .15);
    }
    tl.fromTo(drop, { '--dx': (-runW + 12) + 'px', opacity: 0 }, { '--dx': '0px', opacity: 1, duration: .4, ease: 'power1.in' }, .55);
    var skip = function () { tl.progress(1); off(); };
    var off = function () { ['wheel', 'keydown', 'touchstart'].forEach(function (e) { window.removeEventListener(e, skip); }); };
    ['wheel', 'keydown', 'touchstart'].forEach(function (e) { window.addEventListener(e, skip, { passive: true }); });
    if (join.len && joinRun && joinDrop) {
      var jp = { p: 0 };
      tl.fromTo(joinSvg, { '--jo': join.len }, { '--jo': 0, duration: .5, ease: 'power1.inOut' }, .45);
      tl.fromTo(jp, { p: 0 }, { p: 1, duration: .5, ease: 'power2.in', onUpdate: function () {
        var q = join.path.getPointAtLength(jp.p * join.len); joinDrop.setAttribute('cx', q.x.toFixed(1)); joinDrop.setAttribute('cy', q.y.toFixed(1));
      } }, .7);
    }
    tl.eventCallback('onComplete', off);
  }

  // story: the drop rolls fitting to fitting (≥900 only; sticky stage, scrubbed --sw-p)
  var how = document.querySelector('.how');
  var fits = how ? Array.prototype.slice.call(how.querySelectorAll('.fit')) : [];
  if (window.gsap && window.ScrollTrigger && how) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        how.classList.add('is-story');
        var st = ScrollTrigger.create({
          trigger: how, start: 'top top', end: 'bottom bottom', scrub: true,
          onUpdate: function (self) {
            var p = self.progress;
            how.style.setProperty('--sw-p', p.toFixed(4));
            var at = Math.round(p * (fits.length - 1));
            fits.forEach(function (f, i) { f.classList.toggle('is-on', i <= at); });
          }
        });
        fits[0] && fits[0].classList.add('is-on');
        ScrollTrigger.refresh();
        return function () { st.kill(); how.classList.remove('is-story'); how.style.removeProperty('--sw-p'); fits.forEach(function (f) { f.classList.remove('is-on'); }); };
      }
    });
    var brk = document.querySelector('.break__fig');
    if (brk) ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var tw = gsap.fromTo(brk, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none',
          scrollTrigger: { trigger: brk, start: 'top 85%', end: 'top 35%', scrub: true } });
        return function () { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(brk, { clearProps: 'clipPath' }); };
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
