/* carpenter-B · pole: the page is the stick every height is marked on.
   1. The story-pole marker climbs 0″ → 132″ as the visitor reads (desktop margin ruler + phone strip).
   2. Drawn elevations (hero doorway, rowhouse street) draw themselves once.
   3. Tool sketches: rot probe verdict, molding run (8-ft sticks), built-in wall elevation.
   Tools work without motion; only the drawing animations sit behind sw-motion. */
(function () {
  if (typeof SW === 'undefined') return;
  var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');
  var hasGsap = typeof gsap !== 'undefined';
  var hasST = typeof ScrollTrigger !== 'undefined';
  if (hasGsap && hasST) gsap.registerPlugin(ScrollTrigger);

  /* ---------- shared drawing helpers (pure strings, no namespaces needed) ---------- */
  function r1(n) { return Math.round(n * 10) / 10; }
  function inch(n) {
    var q = Math.round(n * 4) / 4, w = Math.floor(q), f = q - w;
    var fr = f === 0.75 ? '¾' : f === 0.5 ? '½' : f === 0.25 ? '¼' : '';
    return (w ? w : (fr ? '' : '0')) + fr + '″';
  }
  function ln(x1, y1, x2, y2, cls) { return '<line class="' + (cls || 'ln') + '" x1="' + r1(x1) + '" y1="' + r1(y1) + '" x2="' + r1(x2) + '" y2="' + r1(y2) + '"/>'; }
  function rect(x, y, w, h, cls, extra) { return '<rect class="' + (cls || 'ln') + '" x="' + r1(x) + '" y="' + r1(y) + '" width="' + r1(w) + '" height="' + r1(h) + '"' + (extra || '') + '/>'; }
  function txt(x, y, s, cls, extra) { return '<text class="' + (cls || 'dim') + '" x="' + r1(x) + '" y="' + r1(y) + '"' + (extra || '') + '>' + s + '</text>'; }

  /* Built-in wall elevation. Bays 24-36″ (the planner rule), base cabinets 30″, shelves every ~12″. */
  function builtinPlan(W, H, obstacle) {
    W = Math.min(144, Math.max(24, W || 104));
    H = Math.min(144, Math.max(84, H || 132));
    var bays = Math.ceil(W / 30);
    while (bays > 1 && W / bays < 24) bays--;
    var bayW = W / bays, base = 30, top = H - 6;
    var shelves = Math.max(1, Math.floor((top - base - 1.5) / 12));
    var seat = obstacle ? Math.floor(bays / 2) : -1;
    var s = Math.min(520 / W, 340 / H);
    var ww = W * s, x0 = 70 + (520 - ww) / 2, yF = 380, yC = yF - H * s, yT = yF - top * s, yB = yF - base * s;
    var o = '';
    o += ln(x0 - 34, yF, x0 + ww + 34, yF, 'ln ln-heavy');
    o += ln(x0 - 34, yC, x0 + ww + 34, yC, 'ln ln-soft');
    o += '<path class="ln ln-soft" d="M' + r1(x0 - 3) + ' ' + r1(yC) + ' Q' + r1(x0 - 9) + ' ' + r1((yC + yF) / 2) + ' ' + r1(x0 - 2) + ' ' + r1(yF) + '"/>';
    o += '<path class="ln ln-soft" d="M' + r1(x0 + ww + 3) + ' ' + r1(yC) + ' Q' + r1(x0 + ww + 8) + ' ' + r1(yC + (yF - yC) * 0.3) + ' ' + r1(x0 + ww + 2) + ' ' + r1(yF) + '"/>';
    o += rect(x0, yC, ww, 6 * s, 'ln hatch');
    o += rect(x0, yT, ww, yF - yT, 'ln ln-heavy');
    o += ln(x0, yF - 4 * s, x0 + ww, yF - 4 * s);
    for (var b = 0; b < bays; b++) {
      var bx = x0 + b * bayW * s, bw = bayW * s, g = '';
      if (b > 0) o += ln(bx, yT, bx, yF, 'ln ln-heavy');
      if (b === seat) {
        var wTop = yF - Math.min(96, top - 6) * s;
        g += rect(bx + bw * 0.12, wTop, bw * 0.76, yB - 6 * s - wTop, 'ln win');
        g += ln(bx + bw / 2, wTop, bx + bw / 2, yB - 6 * s);
        g += ln(bx + bw * 0.12, (wTop + yB - 6 * s) / 2, bx + bw * 0.88, (wTop + yB - 6 * s) / 2);
        g += rect(bx + 3, yB - 3 * s, bw - 6, 3 * s, 'ln seat');
        g += txt(bx + bw / 2, yB + 14, 'seat', 'dim dim-sm', ' text-anchor="middle"');
      } else {
        g += ln(bx, yB, bx + bw, yB, 'ln ln-heavy');
        g += rect(bx + 4, yB + 4, bw / 2 - 6, yF - 4 * s - yB - 8);
        g += rect(bx + bw / 2 + 2, yB + 4, bw / 2 - 6, yF - 4 * s - yB - 8);
        var gap = (yB - yT) / (shelves + 1);
        for (var k = 1; k <= shelves; k++) g += ln(bx + 3, yB - k * gap, bx + bw - 3, yB - k * gap, 'ln shelf');
      }
      o += '<g class="bay" style="--i:' + b + '">' + g + '</g>';
      if (bays > 1) o += txt(bx + bw / 2, yF + 18, inch(bayW), 'dim dim-sm', ' text-anchor="middle"');
    }
    var yd = yF + (bays > 1 ? 40 : 24);
    o += ln(x0, yd, x0 + ww, yd, 'ln dimline') + ln(x0, yd - 6, x0, yd + 6, 'ln dimline') + ln(x0 + ww, yd - 6, x0 + ww, yd + 6, 'ln dimline');
    o += txt(x0 + ww / 2, yd - 6, inch(W) + ' wall', 'dim', ' text-anchor="middle"');
    var xd = x0 + ww + 22;
    o += ln(xd, yC, xd, yF, 'ln dimline') + ln(xd - 6, yC, xd + 6, yC, 'ln dimline') + ln(xd - 6, yF, xd + 6, yF, 'ln dimline') + ln(xd - 6, yB, xd + 6, yB, 'ln dimline');
    o += txt(xd + 10, (yC + yB) / 2, inch(H) + ' ceiling', 'dim', ' dominant-baseline="middle"');
    o += txt(xd + 10, (yB + yF) / 2, '30″ base', 'dim dim-sm', ' dominant-baseline="middle"');
    return { bays: bays, bayW: bayW, shelves: shelves, seat: seat >= 0, svg: o };
  }

  /* Molding run: perimeter + 10% for miters and scarfs, in 8-ft sticks. */
  function runPlan(perim) {
    perim = Math.min(200, Math.max(10, perim || 48));
    var lf = Math.ceil(perim * 1.1), sticks = Math.ceil(lf / 8), o = '';
    for (var i = 0; i < sticks; i++) {
      var col = i % 10, row = Math.floor(i / 10);
      o += rect(4 + col * 63, 6 + row * 22, 58, 12, 'stick', ' style="--i:' + i + '"');
    }
    return { perim: perim, lf: lf, sticks: sticks, rows: Math.ceil(sticks / 10), svg: o };
  }

  SW.draw = { builtin: builtinPlan, run: runPlan };

  /* ---------- 1. Story-pole marker ---------- */
  SW.mod('story-pole', function () {
    var poles = SW.$$('[data-pole]');
    var secs = SW.$$('main [data-mark]');
    if (!poles.length || !secs.length) return;
    var marks = secs.map(function (el) { return { el: el, h: parseFloat(el.getAttribute('data-mark')) || 0, name: el.getAttribute('data-mark-name') || '' }; });
    var labels = SW.$$('[data-pole-label]');
    var lastIdx = -1;
    function update() {
      var y = window.scrollY + window.innerHeight * 0.45;
      var i = 0;
      for (var k = 0; k < marks.length; k++) if (marks[k].el.offsetTop <= y) i = k;
      var a = marks[i], b = marks[i + 1], h = a.h;
      if (b) {
        var t0 = a.el.offsetTop, t1 = b.el.offsetTop;
        var t = Math.min(1, Math.max(0, (y - t0) / Math.max(1, t1 - t0)));
        h = a.h + (b.h - a.h) * t;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) { h = 132; i = marks.length - 1; }
      poles.forEach(function (p) { p.style.setProperty('--h', h.toFixed(2)); });
      if (i !== lastIdx) {
        lastIdx = i;
        labels.forEach(function (l) { l.textContent = marks[i].h + '″ · ' + marks[i].name; });
        marks.forEach(function (m, n) { m.el.classList.toggle('is-marked', n === i); });
        SW.$$('[data-pole-tick]').forEach(function (t) { t.classList.toggle('is-active', parseFloat(t.getAttribute('data-pole-tick')) === marks[i].h); });
      }
    }
    if (!motion) { update(); window.addEventListener('scroll', function () { update(); }, { passive: true }); return; }
    var queued = false;
    window.addEventListener('scroll', function () { if (!queued) { queued = true; requestAnimationFrame(function () { queued = false; update(); }); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
    if (hasGsap) {
      SW.$$('.story-pole__track, .pole-strip__track').forEach(function (t) {
        gsap.fromTo(t, { scaleY: t.classList.contains('pole-strip__track') ? 1 : 0, scaleX: t.classList.contains('pole-strip__track') ? 0 : 1 },
          { scaleY: 1, scaleX: 1, duration: 1.1, ease: 'power2.out', delay: 0.1 });
      });
    }
  });

  /* ---------- 2. Drawn elevations draw themselves (once) ---------- */
  SW.mod('drawings', function () {
    if (!motion || !hasGsap) return;
    function prep(svg) {
      var els = svg.querySelectorAll('.ln');
      els.forEach(function (el) { el.setAttribute('pathLength', '1'); el.style.strokeDasharray = '1'; el.style.strokeDashoffset = '0'; });
      return els;
    }
    var hero = SW.$('.hero-draw');
    if (hero) {
      var hl = prep(hero);
      gsap.from(hl, { strokeDashoffset: 1, duration: 0.9, ease: 'power2.out', stagger: { amount: 0.3 }, delay: 0.15 });
      SW.$$('.hero-frame .dim-callout').forEach(function (el) {
        var m = (el.textContent || '').match(/^(\d+)(.*)$/);
        if (!m) return;
        var target = parseInt(m[1], 10), rest = m[2], o = { v: 0 };
        gsap.to(o, { v: target, duration: 1.0, ease: 'power2.out', delay: 0.2, onUpdate: function () { el.textContent = Math.round(o.v) + rest; } });
      });
    }
    if (!hasST) return;
    SW.$$('.street-draw, .svc-draw').forEach(function (svg) {
      var els = prep(svg);
      gsap.set(els, { strokeDashoffset: 1 });
      ScrollTrigger.create({
        trigger: svg, start: 'top 88%', once: true,
        onEnter: function () { gsap.to(els, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.out', stagger: { amount: 0.5, from: 'start' } }); }
      });
    });
  });

  /* ---------- 3a. Repair or replace: probe verdict ---------- */
  SW.mod('rot-check', function () {
    var box = SW.$('[data-rot]');
    if (!box) return;
    var out = SW.$('[data-rot-out]', box);
    var head = SW.$('[data-rot-head]', box);
    var PART = { sill: 'Window sill', casing: 'Door casing', corner: 'Corner board', post: 'Porch post', tread: 'Stair tread' };
    function val(name) { var c = box.querySelector('input[name="' + name + '"]:checked'); return c ? c.value : ''; }
    function update() {
      var part = val('part'), probe = val('probe');
      box.setAttribute('data-probe', probe || 'none');
      if (!part && !probe) return;
      var name = PART[part] || 'That piece';
      var h, t;
      if (!probe) { h = name + ': now probe it.'; t = 'Push a screwdriver into the softest spot and pick how far it goes in.'; }
      else if (probe === 'shallow') { h = name + ': likely repairable.'; t = 'We cut out the soft wood, glue in a matched patch (a dutchman), prime it and you repaint one piece, not the whole run.'; }
      else if (probe === 'deep') { h = name + ': likely a new piece, matched.'; t = 'We mill the replacement to the old profile, prime all six sides and scarf it in so the joint disappears under paint.'; }
      else if (part === 'post' || part === 'tread') { h = name + ': keep weight off it.'; t = 'Rot that goes through a ' + name.toLowerCase() + ' can reach the framing. Send a photo and we’ll tell you how soon to look.'; }
      else { h = name + ': have us look.'; t = 'Rot that goes through can reach the framing behind it. Send a photo with a ruler in it and we’ll say what it needs.'; }
      head.textContent = h;
      out.textContent = t;
    }
    box.addEventListener('change', update);
  });

  /* ---------- 3b. Molding picker: profile + run of sticks ---------- */
  SW.mod('molding', function () {
    var box = SW.$('[data-molding]');
    if (!box) return;
    var perim = SW.$('#mold-perim', box);
    var sketch = SW.$('[data-run-sketch]', box);
    var out = SW.$('[data-run-out]', box);
    var big = SW.$('[data-profile-big]', box);
    var bigName = SW.$('[data-profile-name]', box);
    function update() {
      var c = box.querySelector('input[name="profile"]:checked');
      var kind = c ? c.getAttribute('data-kind') : 'casing';
      box.setAttribute('data-kind', kind);
      if (c && big) {
        big.setAttribute('href', '#p-' + c.value);
        if (bigName) bigName.textContent = c.getAttribute('data-label');
      }
      var p = runPlan(parseFloat(perim.value));
      sketch.setAttribute('viewBox', '0 0 640 ' + (p.rows * 22 + 8));
      sketch.innerHTML = p.svg;
      out.textContent = p.perim + ' ft of wall → ' + p.lf + ' linear ft with 10% for miters → ' + p.sticks + ' sticks at 8 ft';
    }
    box.addEventListener('change', update);
    perim.addEventListener('input', update);
    update();
  });

  /* ---------- 3c. Built-in planner: live wall elevation ---------- */
  SW.mod('builtin', function () {
    var box = SW.$('[data-builtin]');
    if (!box) return;
    var w = SW.$('#bi-width', box), h = SW.$('#bi-height', box), ob = SW.$('#bi-obstacle', box);
    var svg = SW.$('[data-bi-sketch]', box);
    var f = { bays: SW.$('[data-bi="bays"]', box), bay: SW.$('[data-bi="bay"]', box), shelves: SW.$('[data-bi="shelves"]', box), seat: SW.$('[data-bi="seat"]', box) };
    var t;
    function update() {
      var p = builtinPlan(parseFloat(w.value), parseFloat(h.value), ob.checked);
      svg.innerHTML = p.svg;
      f.bays.textContent = p.bays;
      f.bay.textContent = inch(p.bayW);
      f.shelves.textContent = p.shelves + ' per bay';
      f.seat.textContent = p.seat ? 'window seat in bay ' + (Math.floor(p.bays / 2) + 1) : 'none';
    }
    function queue() { clearTimeout(t); t = setTimeout(update, 180); }
    w.addEventListener('input', queue);
    h.addEventListener('input', queue);
    ob.addEventListener('change', update);
  });

  // Bays rise and sticks lay out when the drawing comes into view (motion only; CSS keys off .is-live).
  if (motion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-live'); io.unobserve(e.target); } });
    }, { threshold: 0.25 });
    document.querySelectorAll('[data-builtin], [data-molding]').forEach(function (el) { io.observe(el); });
  }

  if (hasST && document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
