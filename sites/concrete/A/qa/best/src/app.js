/* concrete-A: the pour ticket feeds in; the cross-section builds dig → cure (layer wipes in, its label arrives on a leader);
   the 28-day curve picks up where 08 cure lands; the calculator slab redraws and re-cuts its joints live. */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion') && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  /* ---------- A. Calculator sketch (JS on, any motion setting): the slab redraws and its joints are re-cut ---------- */
  function calculator() {
    var box = document.querySelector('[data-estimator]');
    if (!box) return;
    var size = box.querySelector('[data-est-size]');
    var svg = box.querySelector('[data-est-sketch] svg');
    var tag = box.querySelector('[data-est-panels]');
    var out = box.querySelector('[data-est-out]');
    if (out) {
      var tidy = function () {
        var note = out.querySelector('.sw-est-note');
        if (!note) return;
        var t = note.textContent.replace(/(\d)-(\d)/g, function (m, a, b) { return a + '–' + b; }).replace(/ (in\.|ft)/g, function (m, u) { return ' ' + u; });
        if (t !== note.textContent) note.textContent = t;
      };
      tidy();
      new MutationObserver(tidy).observe(out, { childList: true });
    }
    if (!size || !svg) return;
    var fills = svg.querySelectorAll('.est__fill');
    var edge = svg.querySelector('.est__edge');
    var joints = svg.querySelector('.est__joints');
    var dim = svg.querySelector('.est__dim');
    var SIZES = [{ c: 2, r: 1, name: 'small' }, { c: 3, r: 2, name: 'typical' }, { c: 4, r: 2, name: 'large' }];
    var PW = 56, PH = 50, CX = 150, CY = 84;
    function geom(s) { var w = s.c * PW, h = s.r * PH; return { x: CX - w / 2, y: CY - h / 2, w: w, h: h }; }
    function cuts(g, s) {
      var d = '';
      for (var i = 1; i < s.c; i++) { var x = g.x + i * g.w / s.c; d += 'M' + x + ' ' + g.y + ' V' + (g.y + g.h) + ' '; }
      for (var j = 1; j < s.r; j++) { var y = g.y + j * g.h / s.r; d += 'M' + g.x + ' ' + y + ' H' + (g.x + g.w) + ' '; }
      return d.trim();
    }
    function paint(g) {
      [].forEach.call(fills, function (r) { r.setAttribute('x', g.x); r.setAttribute('y', g.y); r.setAttribute('width', g.w); r.setAttribute('height', g.h); });
      edge.setAttribute('x', g.x); edge.setAttribute('y', g.y); edge.setAttribute('width', g.w); edge.setAttribute('height', g.h);
      var top = g.y - 16;
      dim.setAttribute('d', 'M' + g.x + ' ' + top + ' H' + (g.x + g.w) + ' M' + g.x + ' ' + (top - 6) + ' V' + (top + 6) + ' M' + (g.x + g.w) + ' ' + (top - 6) + ' V' + (top + 6));
    }
    var cur = -1;
    function draw() {
      var level = Math.max(0, Math.min(2, Math.round(parseFloat(size.value) || 0)));
      if (level === cur) return;
      var s = SIZES[level], g = geom(s);
      if (tag) tag.textContent = 'Plan · ' + s.name + ' · ' + (s.c * s.r) + ' panels, joints 10 ft apart or less';
      if (motion && cur > -1) {
        var from = geom(SIZES[cur]);
        var o = { x: from.x, y: from.y, w: from.w, h: from.h };
        gsap.killTweensOf(joints);
        gsap.set(joints, { opacity: 0 });
        gsap.to(o, { x: g.x, y: g.y, w: g.w, h: g.h, duration: 0.45, ease: 'power3.out', onUpdate: function () { paint(o); },
          onComplete: function () {
            joints.setAttribute('d', cuts(g, s));
            gsap.fromTo(joints, { opacity: 1, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
              { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.35, ease: 'power2.out', clearProps: 'clipPath' });
          } });
      } else {
        paint(g);
        joints.setAttribute('d', cuts(g, s));
      }
      cur = level;
    }
    size.addEventListener('input', draw);
    size.addEventListener('change', draw);
    draw();
  }
  calculator();

  if (!motion) return;
  gsap.registerPlugin(ScrollTrigger);

  function pick(list, k) { for (var i = 0; i < list.length; i++) if (list[i].getAttribute('data-step') === String(k)) return list[i]; return null; }
  var HIDE = 'polygon(-4% -6%, -4% -6%, -4% 106%, -4% 106%)';
  var SHOW = 'polygon(-4% -6%, 104% -6%, 104% 106%, -4% 106%)';

  function init() {
    /* 1. Signature intro: ticket lines feed up one by one, the stamp lands. Under 1.2 s, h1 untouched. */
    var ticket = document.querySelector('[data-sw-signature="ticket"]');
    if (ticket) {
      var lines = ticket.querySelectorAll('.tl');
      var stamp = ticket.querySelector('[data-stamp]');
      var draw = ticket.querySelector('.slab-draw');
      var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (draw) tl.from(draw, { clipPath: 'inset(0 100% 0 0)', duration: 0.55, clearProps: 'clipPath' }, 0.1);
      if (lines.length) tl.from(lines, { clipPath: 'inset(0 0 100% 0)', y: 10, duration: 0.42, stagger: 0.06, clearProps: 'clipPath,transform' }, 0.25);
      if (stamp) tl.fromTo(stamp, { scale: 1.08, opacity: 0, rotation: -4 }, { scale: 1, opacity: 1, rotation: -4, duration: 0.2, ease: 'power2.out' }, 0.8);
    }

    /* 2. Story "stack": one continuous build. Each ticked line wipes its layer in from the left,
          the leader draws, and the label lands on it a beat later. Pinned on desktop only. */
    var proc = document.querySelector('#process');
    if (proc) {
      var layers = proc.querySelectorAll('.xs-layer');
      var leads = proc.querySelectorAll('.xs-lead');
      var labs = proc.querySelectorAll('.xs-lab');
      var items = proc.querySelectorAll('.pl');
      var n = layers.length;
      var build = function (tl) {
        for (var k = 1; k <= n; k++) {
          var t = k - 1;
          var layer = pick(layers, k), lead = pick(leads, k), lab = pick(labs, k);
          if (layer) tl.fromTo(layer, { clipPath: HIDE }, { clipPath: SHOW, duration: 0.6, ease: 'power2.out' }, t);
          if (lead) {
            var path = lead.querySelector('path'), dot = lead.querySelector('circle');
            tl.fromTo(dot, { opacity: 0 }, { opacity: 1, duration: 0.08 }, t + 0.42);
            tl.fromTo(path, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.25, ease: 'none' }, t + 0.45);
          }
          if (lab) tl.fromTo(lab, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.22, ease: 'power2.out' }, t + 0.62);
        }
        return tl;
      };
      var reset = function () {
        gsap.set([].slice.call(layers).concat([].slice.call(labs)), { clearProps: 'all' });
        [].forEach.call(leads, function (l) { gsap.set(l.querySelectorAll('path, circle'), { clearProps: 'all' }); });
        [].forEach.call(items, function (it) { it.classList.remove('is-on'); });
        proc.classList.remove('is-pinned');
      };
      ScrollTrigger.matchMedia({
        '(min-width: 900px) and (min-height: 760px)': function () {
          proc.classList.add('is-pinned');
          var setOn = function (k) { [].forEach.call(items, function (it, j) { it.classList.toggle('is-on', j <= k); }); };
          setOn(-1);
          build(gsap.timeline({
            scrollTrigger: {
              trigger: proc, start: 'top top', end: '+=' + (n * 55) + '%', pin: true, scrub: 0.5, invalidateOnRefresh: true,
              onUpdate: function (self) { setOn(self.progress < 0.01 ? -1 : Math.min(n - 1, Math.floor(self.progress * n))); }
            }
          }));
          return reset;
        },
        '(max-width: 899px), (max-height: 759px)': function () {
          /* phone and short screens: no pin. The section builds as the drawing scrolls through the screen. */
          var vis = proc.querySelector('.process__visual');
          build(gsap.timeline({ scrollTrigger: { trigger: vis, start: 'top 80%', end: 'bottom 30%', scrub: 0.4 } }));
          [].forEach.call(items, function (it) {
            gsap.from(it, { clipPath: 'inset(0 0 100% 0)', duration: 0.5, ease: 'power2.out', clearProps: 'clipPath',
              scrollTrigger: { trigger: it, start: 'top 92%', once: true } });
          });
          return reset;
        }
      });
    }

    /* 3. Story "count": the 28-day curve starts the moment 08 cure lands (the pin releases into it). */
    var cure = document.querySelector('#cure');
    if (cure) {
      var line = cure.querySelector('[data-cure-line]');
      var carbon = cure.querySelector('[data-cure-carbon]');
      var area = cure.querySelector('.cv-area');
      var day = cure.querySelector('[data-cure-day]');
      var start = cure.querySelector('.cure__start');
      if (line) {
        gsap.set([line, carbon], { strokeDasharray: 1, strokeDashoffset: 1 });
        if (area) gsap.set(area, { opacity: 0 });
        if (day) day.textContent = '0';
        var st = { p: 0 };
        gsap.to(st, {
          p: 1, ease: 'none',
          scrollTrigger: { trigger: cure, start: 'top bottom', end: 'center 40%', scrub: 0.5 },
          onUpdate: function () {
            line.style.strokeDashoffset = String(1 - st.p);
            if (carbon) carbon.style.strokeDashoffset = String(1 - st.p);
            if (area) area.style.opacity = String(st.p);
            if (day) day.textContent = String(Math.round(st.p * 28));
          }
        });
        if (start) gsap.from(start, { opacity: 0, x: -12, duration: 0.4, ease: 'power2.out', scrollTrigger: { trigger: cure, start: 'top 95%', once: true } });
      }
    }

    ScrollTrigger.refresh();
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(init); else init();
})();
