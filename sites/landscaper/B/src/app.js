/* landscaper-B · Zone Schedule: the hero water controller + the process plan that builds a layer per step */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');
  // reveal hidden states only apply once this script is alive (no JS = nothing hidden)
  if (motion) root.classList.add('sw-rv');

  function fmt(n) { return Math.round(n).toLocaleString('en-US'); }

  /* ── hero controller: gallons per week ─────────────────────────── */
  SW.mod('lsb-water', function () {
    var box = document.querySelector('[data-water]');
    if (!box) return;
    var cfg = { factors: { turf: 0.62, native: 0.15, gravel: 0 } };
    try { cfg = JSON.parse(box.getAttribute('data-water-config')) || cfg; } catch (e) {}
    var f = cfg.factors;
    var sizes = box.querySelectorAll('[data-water-size]');
    var turf = box.querySelector('[data-water-turf]');
    var bars = box.querySelector('.bars');
    function out(k) { return box.querySelector('[data-water-out="' + k + '"]'); }

    function calc() {
      var sq = 2800;
      sizes.forEach(function (r) { if (r.checked) sq = +r.value; });
      var t = (+turf.value) / 100;
      var current = sq * t * f.turf + sq * (1 - t) * f.native;
      var plan = sq * 0.15 * f.turf + sq * 0.55 * f.native + sq * 0.30 * f.gravel;
      if (plan > current) plan = current;
      return { t: t, sq: sq, current: current, plan: plan, save: current - plan };
    }

    // the drawings below read the same numbers: L-1 shows today's lawn, L-3 the planted yard
    var last = null;
    var mirrors = Array.prototype.slice.call(document.querySelectorAll('[data-mirror]'));
    var lawns = Array.prototype.slice.call(document.querySelectorAll('[data-lawn] rect'));
    var gauges = Array.prototype.slice.call(document.querySelectorAll('.gauge'));
    function val(v, key, k) {
      if (key === 'turf') return Math.round(v.t * 100) + '%';
      if (key === 'sq') return fmt(v.sq);
      return fmt(v[key] * k);
    }

    function paint(v, k) {
      k = k == null ? 1 : k;
      last = v;
      out('turf').textContent = Math.round(v.t * 100) + '%';
      turf.setAttribute('aria-valuetext', Math.round(v.t * 100) + '% lawn');
      out('plan').textContent = fmt(v.plan * k);
      out('plan2').textContent = fmt(v.plan * k);
      out('current').textContent = fmt(v.current * k);
      out('save').textContent = fmt(v.save * k);
      var ratio = v.current ? (v.plan / v.current).toFixed(3) : 0;
      if (bars) bars.style.setProperty('--plan', ratio);
      gauges.forEach(function (g) { g.style.setProperty('--plan', ratio); });
      // lawn hatch grows from the street side to the share of the yard that is lawn today
      lawns.forEach(function (r) {
        var y0 = +r.getAttribute('data-y'), h0 = +r.getAttribute('data-h'), h = h0 * v.t;
        r.setAttribute('y', (y0 + h0 - h).toFixed(1));
        r.setAttribute('height', h.toFixed(1));
      });
      mirrors.forEach(function (el) {
        if (el._counting) return;
        var key = el.getAttribute('data-mirror');
        el.textContent = val(v, key, el.hasAttribute('data-countup') ? 1 : k);
        if (el.hasAttribute('data-countup') && el._done) {
          el.classList.remove('is-tick'); void el.offsetWidth; el.classList.add('is-tick');
        }
      });
    }

    // each sheet's readout counts from 0 the first time it scrolls into view
    if (motion && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          var el = en.target._num || en.target, key = el.getAttribute('data-mirror'), t0 = null;
          el._counting = true;
          var run = function (ts) {
            if (t0 === null) t0 = ts;
            var p = Math.min(1, (ts - t0) / 1400);
            var target = last ? last[key] : 0;
            el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(run);
            else { el._counting = false; el._done = true; el.textContent = fmt(target); }
          };
          requestAnimationFrame(run);
        });
      }, { threshold: 0.35 });
      mirrors.forEach(function (el) {
        if (!el.hasAttribute('data-countup')) return;
        el._fig = el.closest('figure') || el;
        el._fig._num = el;
        io.observe(el._fig);
      });
    } else {
      mirrors.forEach(function (el) { el._done = true; });
    }

    sizes.forEach(function (r) { r.addEventListener('change', function () { paint(calc()); }); });
    turf.addEventListener('input', function () { paint(calc()); });

    var v = calc();
    if (motion && window.requestAnimationFrame) {
      var t0 = null;
      var tick = function (ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / 800);
        paint(v, 1 - Math.pow(1 - p, 3));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    } else {
      paint(v);
    }
  });

  /* ── price readout: keep the range on its own unbroken line ───── */
  SW.mod('lsb-price', function () {
    var out = document.querySelector('.panel--price [data-est-out]');
    if (!out || !('MutationObserver' in window)) return;
    var split = function () {
      var r = out.querySelector('.sw-est-range');
      if (!r || r.querySelector('.est__num')) return;
      var txt = r.textContent, i = txt.indexOf(': ');
      if (i < 0) return;
      r.textContent = '';
      var a = document.createElement('span'); a.className = 'est__item'; a.textContent = txt.slice(0, i);
      var b = document.createElement('span'); b.className = 'est__num'; b.textContent = txt.slice(i + 2);
      r.appendChild(a); r.appendChild(document.createTextNode(' ')); r.appendChild(b);
      var n = out.querySelector('.sw-est-note');
      if (n) { n.className = 'est__note'; n.textContent = n.textContent.replace(/^\s*\(|\)\s*$/g, ''); }
    };
    new MutationObserver(split).observe(out, { childList: true });
    split();
  });

  /* ── services: the controller steps through Z01–Z10 once ────────── */
  SW.mod('lsb-run', function () {
    var list = document.querySelector('[data-run]');
    var outEl = document.querySelector('[data-run-out]');
    if (!motion || !list || !('IntersectionObserver' in window)) return;
    var rows = list.querySelectorAll('.sched__row');
    var rest = outEl ? outEl.textContent : '';
    var io = new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      io.disconnect();
      var box = list.closest('section');
      if (box) box.classList.add('is-running');
      var i = 0;
      var step = function () {
        if (i > 0) { rows[i - 1].classList.remove('is-run'); rows[i - 1].classList.add('is-done'); }
        if (i >= rows.length) {
          if (box) box.classList.remove('is-running');
          if (outEl) outEl.textContent = 'All ' + rows.length + ' zones checked · tap one to price it';
          setTimeout(function () { if (outEl) outEl.textContent = rest; }, 2400);
          return;
        }
        var row = rows[i], tag = row.querySelector('.ztag'), name = row.querySelector('.sched__name');
        row.classList.add('is-run');
        if (outEl) outEl.textContent = (tag ? tag.textContent : '') + ' running · ' + (name ? name.textContent : '');
        i++;
        setTimeout(step, 600);
      };
      setTimeout(step, 300);
    }, { threshold: 0.25 });
    io.observe(list);
  });

  /* ── process: the sketch gains a layer per step (desktop, scroll-driven) ── */
  if (!motion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  var stepsList = document.querySelector('[data-steps]');
  var fig = document.querySelector('[data-proc-fig]');
  if (stepsList && fig) {
    var steps = stepsList.querySelectorAll('.step');
    var layers = fig.querySelectorAll('.layer');
    var readout = fig.querySelector('[data-proc-readout]');
    var current = 0;

    var setStep = function (n) {
      if (n === current) return;
      current = n;
      steps.forEach(function (s, i) { s.classList.toggle('is-active', i === n - 1); });
      layers.forEach(function (l) { l.classList.toggle('on', +l.getAttribute('data-layer') <= n); });
      if (readout) readout.textContent = 'Step ' + n + ' of ' + steps.length;
    };

    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        root.classList.add('proc-live');
        current = 0;
        setStep(1);
        var st = ScrollTrigger.create({
          trigger: stepsList,
          start: 'top 60%',
          end: 'bottom 60%',
          onUpdate: function (self) {
            setStep(Math.min(steps.length, 1 + Math.floor(self.progress * steps.length * 0.999)));
          },
          onLeave: function () { setStep(steps.length); }
        });
        return function () {
          st.kill();
          root.classList.remove('proc-live');
          layers.forEach(function (l) { l.classList.add('on'); });
          steps.forEach(function (s) { s.classList.remove('is-active'); });
          if (readout) readout.textContent = 'Step ' + steps.length + ' of ' + steps.length;
          current = 0;
        };
      }
    });
  }

  var refresh = function () { ScrollTrigger.refresh(); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  window.addEventListener('load', refresh);
})();
