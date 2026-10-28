/* fencedeck-A · Stringline: the live string (estimator), the stake rows, the ft chip,
   and the two motion stories (posts drop along the process track, the cross-section draws). */
(function () {
  'use strict';
  var SW = window.SW;
  if (!SW) return;
  var doc = document;
  var NS = (doc.querySelector('svg') || {}).namespaceURI;
  var motion = !SW.reduced && doc.documentElement.classList.contains('sw-motion');

  function el(tag, attrs, parent) {
    var n = doc.createElementNS(NS, tag);
    Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(n);
    return n;
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* ---------- 1. the live string (works with or without motion) ---------- */
  function initEstimator() {
    var box = SW.$('[data-estimator]');
    if (!box) return;
    var svg = SW.$('[data-est-svg]', box);
    var ftIn = SW.$('[data-ft]', box);
    var ftR = SW.$('[data-ft-range]', box);
    var sel = SW.$('[data-est-item]', box);
    var outPosts = SW.$('[data-est-posts]', box);
    var outSecs = SW.$('[data-est-secs]', box);
    var outGates = SW.$('[data-est-gates]', box);
    var outFt = SW.$('[data-est-ft]', box);
    var send = SW.$('[data-est-send]', box);
    var lastPosts = 0;

    function val(name) {
      var c = SW.$('input[name="' + name + '"]:checked', box);
      return c ? parseInt(c.value, 10) : 0;
    }
    function feet() {
      var f = parseInt(ftIn.value, 10);
      if (!isFinite(f) || f < 8) f = 8;
      if (f > 2000) f = 2000;
      return f;
    }
    function draw() {
      var ft = feet();
      var h = val('est-h') || 6;
      var g = val('est-g');
      var secs = Math.ceil(ft / 8);
      var posts = secs + 1 + g;
      outPosts.textContent = String(posts);
      outSecs.textContent = String(secs);
      outGates.textContent = String(g);
      outFt.textContent = ft + ' ft';

      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var x0 = 44, x1 = 676, ground = 204;
      var top = ground - h * 20 - 8;          // post top
      var sy = top - 6;                       // string height follows the fence height
      var shown = Math.min(secs, 48);          // drawn sections (count text stays exact)
      var step = (x1 - x0) / shown;
      var gateAt = {};
      for (var k = 1; k <= g; k++) gateAt[Math.min(shown - 1, Math.round(k * shown / (g + 1)))] = true;

      // ground + hatch
      el('path', { 'class': 'e-gr', d: 'M8 ' + ground + 'H712' }, svg);
      var hd = '';
      for (var hx = 16; hx < 712; hx += 14) hd += 'M' + hx + ' ' + (ground + 6) + 'l-6 8';
      el('path', { 'class': 'e-pk', d: hd }, svg);
      // stakes A and B
      [20, 696].forEach(function (x) {
        el('path', { 'class': 'e-stk', d: 'M' + (x - 2.5) + ' ' + (sy - 18) + 'h5V' + (ground + 4) + 'l-2.5 7l-2.5-7Z' }, svg);
      });
      // pickets per section
      var pd = '';
      for (var s = 0; s < shown; s++) {
        if (gateAt[s]) continue;
        var a = x0 + s * step, b = a + step;
        var n = Math.max(1, Math.floor((b - a) / 5));
        for (var p = 1; p < n; p++) {
          var px = (a + p * (b - a) / n).toFixed(1);
          pd += 'M' + px + ' ' + (top + 6) + 'V' + (ground - 2);
        }
      }
      if (pd) el('path', { 'class': 'e-pk', d: pd }, svg);
      // gates
      Object.keys(gateAt).forEach(function (si) {
        var a = x0 + si * step + 3, b = a + step - 6;
        el('path', { 'class': 'e-gate', d: 'M' + a + ' ' + (top + 10) + 'H' + b + 'V' + (ground - 6) + 'H' + a + 'Z M' + a + ' ' + (ground - 6) + 'L' + b + ' ' + (top + 10) }, svg);
        el('path', { 'class': 'e-gate', d: 'M' + b + ' ' + (ground + 2) + 'Q' + ((a + b) / 2) + ' ' + (ground + 16) + ' ' + a + ' ' + (ground + 12), 'stroke-dasharray': '4 4' }, svg);
      });
      // posts
      var pw = Math.max(4, Math.min(9, step * .35));
      var nodes = [];
      for (var i = 0; i <= shown; i++) {
        var cx = x0 + i * step;
        nodes.push(el('rect', { 'class': 'e-post', x: (cx - pw / 2).toFixed(1), y: top, width: pw.toFixed(1), height: ground - top + 10 }, svg));
      }
      // the string, last so it sits on top
      el('path', { 'class': 'e-str', d: 'M20 ' + sy + 'H696' }, svg);

      if (motion && window.gsap && posts !== lastPosts) {
        window.gsap.from(nodes, { y: -16, opacity: 0, duration: .32, ease: 'back.out(2)', stagger: { each: .012, from: 'end' } });
      }
      lastPosts = posts;
    }

    function syncFromRange() { ftIn.value = ftR.value; draw(); }
    function syncFromNum() {
      var f = feet();
      ftR.value = String(Math.max(16, Math.min(400, f)));
      draw();
    }
    ftR.addEventListener('input', syncFromRange);
    ftIn.addEventListener('input', syncFromNum);
    ftIn.addEventListener('change', function () { ftIn.value = String(feet()); syncFromNum(); });
    SW.$$('input[name="est-h"], input[name="est-g"]', box).forEach(function (r) { r.addEventListener('change', draw); });
    sel.addEventListener('change', draw);

    if (send) {
      send.addEventListener('click', function () {
        var svc = sel.value === '1' ? SW.fact('services.1.name') : SW.fact('services.0.name');
        var opt = sel.options[sel.selectedIndex];
        var g = val('est-g');
        var details = feet() + ' ft of ' + (val('est-h') || 6) + ' ft ' + (opt ? opt.text : '') +
          ', ' + g + (g === 1 ? ' gate' : ' gates') + ' (about ' + outPosts.textContent + ' posts)';
        SW.prefillForm({ service: svc, details: details }, { focus: false });
      });
    }
    draw();
  }

  /* ---------- 2. stake rows + the ft chip ---------- */
  function initStakes() {
    var rows = SW.$$('.sl');
    var chip = SW.$('[data-ft-chip]');
    var chipBox = chip ? chip.parentNode : null;
    if (!('IntersectionObserver' in window)) { rows.forEach(function (r) { r.classList.add('is-set'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-set'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    rows.forEach(function (r) { io.observe(r); });

    if (!chip) return;
    // one master run: the chip reads the same stake tag the section shows, set as the tag enters.
    var tags = rows.map(function (r) {
      var t = SW.$('.sl-tag', r);
      return t ? t.textContent.split('·').slice(0, 2).join('·').trim() : '';
    });
    var run = SW.$('[data-ft-run]');
    var pk = [];
    if (run) {
      for (var q = 0; q < rows.length; q++) { var s = doc.createElement('span'); run.appendChild(s); pk.push(s); }
    }
    var hero = SW.$('#top');
    var proc = SW.$('#process');
    var last = -2;
    function onScroll() {
      var vh = window.innerHeight, enter = vh * .85, idx = -1;
      rows.forEach(function (r, i) { if (r.getBoundingClientRect().top < enter) idx = i; });
      var heroIn = hero && hero.getBoundingClientRect().bottom > vh * .5;
      var pr = proc ? proc.getBoundingClientRect() : null;
      var procIn = pr && pr.top < vh * .5 && pr.bottom > vh * .5;   // the process has its own big readout
      chipBox.classList.toggle('is-off', heroIn || procIn || idx < 0);
      if (idx >= 0 && idx !== last) {
        chip.textContent = tags[idx];
        pk.forEach(function (p, i) { p.classList.toggle('is-on', i <= idx); });
        last = idx;
      }
    }
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; onScroll(); });
    }, { passive: true });
    onScroll();
  }

  /* ---------- 3. motion: intro snap, process story, cross-section draw ---------- */
  function initMotion() {
    var gsap = window.gsap, ST = window.ScrollTrigger;
    if (!gsap || !ST) return;
    gsap.registerPlugin(ST);

    // intro: the string snaps tight (overshoot), a post drops on it. ≤ 1.2 s, h1 untouched.
    var line = SW.$('.hero-line');
    if (line) {
      var tl = gsap.timeline({ delay: .15 });
      tl.from('.hl-stake', { y: -26, opacity: 0, duration: .32, ease: 'power3.out', stagger: .08 })
        .fromTo('.hl-string', { scaleX: 0 }, { scaleX: 1, duration: .6, ease: 'back.out(2.2)' }, .2)
        .from('.hl-post', { y: -30, opacity: 0, duration: .36, ease: 'back.out(2.4)' }, .62)
        .from('.hl-tag', { opacity: 0, x: 10, duration: .3, ease: 'power2.out' }, .7);
    }

    // story 1 (stack): pinned track ≥ 640, posts drop as each step arrives, the count climbs.
    var sec = SW.$('#process');
    ST.matchMedia({
      '(min-width: 640px)': function () {
        if (!sec) return;
        var steps = SW.$$('.step', sec);
        var track = SW.$('.steps', sec);
        var view = SW.$('.proc-view', sec);
        var count = SW.$('[data-proc-count]', sec);
        sec.classList.add('is-story');
        steps.forEach(function (s) { s.classList.add('is-in'); });
        var dist = function () { return Math.max(0, track.scrollWidth - view.clientWidth + 48); };
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec, start: 'top top', end: 'bottom bottom', scrub: .6,
            pin: SW.$('.pin', sec), pinSpacing: false, invalidateOnRefresh: true,
            onUpdate: function (self) {
              var i = Math.min(steps.length - 1, Math.round(self.progress * (steps.length - 1)));
              if (count) count.textContent = 'Post ' + pad(i + 1) + ' · ' + (i * 8) + ' ft';
            }
          }
        });
        tl.to(track, { x: function () { return -dist(); }, ease: 'none', duration: steps.length }, 0);
        steps.forEach(function (s, i) {
          var at = Math.max(0, i - .9);
          tl.from(SW.$('.step-post', s), { y: -40, opacity: 0, ease: 'back.out(2)', duration: .4 }, at)
            .from(SW.$('.step-plate', s), { y: 18, opacity: .2, ease: 'power2.out', duration: .5 }, at);
        });
        if (count) count.textContent = 'Post 01 · 0 ft';
        return function () {
          sec.classList.remove('is-story');
          gsap.set(track, { clearProps: 'transform' });
          if (count) count.textContent = 'Post 07 · 48 ft';
        };
      }
    });

    // story 2 (draw): the cross-section draws itself, grade → footing → post → frost line → the string turns plumb.
    var xs = SW.$('[data-xs]');
    if (xs) {
      var groups = SW.$$('[data-xs-step]', xs);
      var labels = SW.$$('.xs-l', xs);
      var dtl = gsap.timeline({
        scrollTrigger: { trigger: xs, start: 'top 80%', end: 'bottom 30%', scrub: .5 }
      });
      var plumb = SW.$('.xs-plumb', xs), bob = SW.$('.xs-bob', xs), plumbL = SW.$('.xs-l-plumb', xs);
      groups.forEach(function (g, i) {
        if (g.getAttribute('data-xs-step') === '4') {
          // the moment: the layout string swings 90° off the post top and hangs plumb to the frost line
          if (plumb) dtl.fromTo(plumb, { rotation: 90, scaleY: .66, svgOrigin: '218 40' }, { rotation: 0, scaleY: 1, svgOrigin: '218 40', ease: 'back.out(1.4)', duration: 1.2 }, i);
          if (bob) dtl.from(bob, { opacity: 0, y: -12, duration: .4, ease: 'back.out(2)' }, i + 1);
          if (plumbL) dtl.from(plumbL, { opacity: 0, x: -8, duration: .4 }, i + 1.1);
          return;
        }
        var paths = SW.$$('.dr', g);
        var solid = paths.filter(function (p) { return !p.hasAttribute('stroke-dasharray'); });
        var dashed = paths.filter(function (p) { return p.hasAttribute('stroke-dasharray'); });
        if (solid.length) {
          gsap.set(solid, { strokeDasharray: '1 1' });
          dtl.fromTo(solid, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', duration: 1, stagger: .1 }, i);
        }
        if (dashed.length) dtl.from(dashed, { opacity: 0, duration: .6 }, i + .2);
        var rest = SW.$$(':scope > :not(.dr)', g);
        if (rest.length) dtl.from(rest, { opacity: 0, duration: .5 }, i + .5);
      });
      var early = labels.filter(function (l) { return l !== plumbL; });
      if (early.length) dtl.from(early, { opacity: 0, x: -8, duration: .4, stagger: .5 }, .5);
    }

    // stake B: the drawn run clip-wipes into the photograph of a built one (phones too, no pin)
    var rv = SW.$('[data-reveal-photo]');
    if (rv) {
      var ph = SW.$('.rv-photo', rv), edge = SW.$('.rv-edge', rv);
      var rtl = gsap.timeline({ scrollTrigger: { trigger: rv, start: 'top 85%', end: 'center 45%', scrub: .5 } });
      rtl.fromTo(ph, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 1 }, 0);
      if (edge) rtl.fromTo(edge, { left: '0%', opacity: 1 }, { left: '100%', ease: 'none', duration: 1 }, 0).to(edge, { opacity: 0, duration: .1 }, 1);
    }

    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { ST.refresh(); });
    window.addEventListener('load', function () { ST.refresh(); });
  }

  /* ---------- 4. the drawn run under the stake-B photo, service groups, stake-out print ---------- */
  function initExtras() {
    var d = SW.$('[data-rv-draw]');
    if (d) {
      var g = 384, p = '', r = '', k = '';
      for (var x = 40; x <= 1160; x += 160) p += 'M' + (x - 7) + ' 70h14V' + (g + 12) + 'h-14Z';
      for (var px = 58; px < 1150; px += 26) { if ((px - 40) % 160 < 14) continue; k += 'M' + px + ' ' + (g - 4) + 'V104l7-12l7 12V' + (g - 4) + 'Z'; }
      r = 'M40 150H1160M40 310H1160';
      el('path', { 'class': 'ln', d: 'M0 ' + g + 'H1200' }, d);
      el('path', { 'class': 'ht', d: r }, d);
      el('path', { 'class': 'ln pf', d: k }, d);
      el('path', { 'class': 'ln pf', d: p }, d);
      el('path', { 'class': 'ac', d: 'M10 64H1190' }, d);
    }
    var mq = window.matchMedia('(max-width: 639px)');
    var grps = SW.$$('[data-svc-grp]');
    if (mq.matches && grps.length > 1) grps.slice(1).forEach(function (gp) { gp.open = false; });
    var pr = SW.$('[data-est-print]');
    if (pr) pr.addEventListener('click', function () {
      doc.documentElement.classList.add('is-print-est');
      var off = function () { doc.documentElement.classList.remove('is-print-est'); window.removeEventListener('afterprint', off); };
      window.addEventListener('afterprint', off);
      window.print();
    });
  }

  SW.ready(function () {
    initEstimator();
    initStakes();
    initExtras();
    if (!SW.reduced && doc.documentElement.classList.contains('sw-motion')) initMotion();
  });
})();
