/* demolition-A · Layer Gauge: the peel story, the margin rail, the ticket gauge, the lead summary */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* The Layer Gauge: one instrument. The margin rail and the story drawing read the same value. */
  var Gauge = (function () {
    var rail = document.querySelector('[data-rail]');
    var rows = rail ? Array.prototype.slice.call(rail.querySelectorAll('.rail__row')) : [];
    var title = rail ? rail.querySelector('[data-rail-title]') : null;
    var state = { mode: '0', v: 0, ticket: 7, hover: 0 };
    var svcDepth = [7, 7, 4, 3, 2, 7, 7, 7];
    function clamp(x) { return Math.max(0, Math.min(1, x)); }
    function setTitle(t) { if (title && title.textContent !== t) title.textContent = t; }
    function peel(v) {
      var cur = Math.min(7, Math.floor(v) + 1);
      rail.classList.remove('is-idle');
      rows.forEach(function (r, i) {
        var n = i + 1;
        r.style.setProperty('--strike', n === 7 ? 0 : clamp(v - i).toFixed(3));
        r.classList.toggle('is-off', n < cur);
        r.classList.toggle('is-now', n === cur);
        r.classList.remove('is-reach');
      });
    }
    function reach(d) {
      rail.classList.add('is-idle');
      rows.forEach(function (r, i) {
        r.style.setProperty('--strike', 0);
        r.classList.remove('is-off', 'is-now');
        r.classList.toggle('is-reach', i < d);
      });
    }
    function list() {
      var boxes = document.querySelectorAll('[data-hook="layer-peeler"] input[type="checkbox"]');
      var any = false;
      rows.forEach(function (r, i) {
        var on = !!(boxes[i] && boxes[i].checked);
        any = any || on;
        r.style.setProperty('--strike', on ? 1 : 0);
        r.classList.toggle('is-off', on);
        r.classList.remove('is-now', 'is-reach');
      });
      rail.classList.toggle('is-idle', !any);
    }
    function render() {
      if (!rail) return;
      var m = state.mode;
      if (m === 'peel') { peel(state.v); setTitle('Pass ' + (state.v < 2 ? 1 : state.v < 4 ? 2 : state.v < 6 ? 3 : 4) + ' of 4'); }
      else if (m === 'services') { reach(state.hover); setTitle('Job depth'); }
      else if (m === 'peeler') { list(); setTitle('Your list'); }
      else if (m === 'ticket') { reach(state.ticket); setTitle('Job reaches'); }
      else { var n = +m || 0; peel(n === 7 ? 6.999 : n); setTitle(n === 7 ? 'At the studs' : 'Layer gauge'); }
    }
    return {
      mode: function (m) { state.mode = m; render(); },
      value: function (v) { state.v = v; if (state.mode === 'peel') render(); },
      ticket: function (d) { state.ticket = d; if (state.mode === 'ticket') render(); },
      hover: function (i) { state.hover = i < 0 ? 0 : (svcDepth[i] || 7); if (state.mode === 'services') render(); },
      list: function () { if (state.mode === 'peeler') render(); }
    };
  })();

  /* Ticket gauge: the chosen job lights the layers it reaches (works with or without motion). */
  SW.mod('ticket-depth', function () {
    var box = document.querySelector('[data-estimator]');
    if (!box) return;
    var sel = box.querySelector('[data-est-item]');
    var ticket = box.querySelector('.ticket');
    if (!sel || !ticket) return;
    var depth = [7, 7, 4, 7, 7];
    function set() {
      var d = depth[sel.selectedIndex] || 7;
      ticket.setAttribute('data-depth', String(d));
      Gauge.ticket(d);
    }
    sel.addEventListener('change', set);
    set();
  });

  /* Services and the layer peeler talk to the rail too. */
  SW.mod('gauge-inputs', function () {
    document.querySelectorAll('.svc').forEach(function (el, i) {
      el.addEventListener('mouseenter', function () { Gauge.hover(i); });
      el.addEventListener('focusin', function () { Gauge.hover(i); });
      el.addEventListener('mouseleave', function () { Gauge.hover(-1); });
    });
    var peeler = document.querySelector('[data-hook="layer-peeler"]');
    if (peeler) peeler.addEventListener('change', function () { Gauge.list(); });
  });

  /* Thank-you: repeat back what was sent. */
  SW.mod('lead-summary', function () {
    var form = document.querySelector('form[data-lead]');
    var list = document.querySelector('[data-lead-summary]');
    if (!form || !list) return;
    var rows = [['service', 'Job'], ['size', 'Size'], ['zip', 'ZIP'], ['when', 'When'], ['name', 'Name'], ['phone', 'Phone']];
    form.addEventListener('sw:lead', function () {
      var fd = new FormData(form);
      list.textContent = '';
      rows.forEach(function (r) {
        var v = (fd.get(r[0]) || '').toString().trim();
        if (!v) return;
        var d = document.createElement('div');
        var dt = document.createElement('dt'); dt.textContent = r[1];
        var dd = document.createElement('dd'); dd.textContent = v;
        d.appendChild(dt); d.appendChild(dd); list.appendChild(d);
      });
    });
  });

  if (!motion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Signature story: one value v (0 to 7 layers) wipes each layer off the drawing from the top,
     moves the score line, sets the pass counter and the step in focus, and drives the rail. */
  SW.mod('peel-story', function () {
    var story = document.querySelector('[data-hook="peel-story"]');
    if (!story) return;
    var svg = story.querySelector('.wall--peel');
    var steps = Array.prototype.slice.call(story.querySelectorAll('.step'));
    var count = story.querySelector('[data-peel-count]');
    var label = story.querySelector('[data-peel-label]');
    var score = svg.querySelector('[data-peel-score]');
    var clips = svg.querySelectorAll('.peel-clip');
    var ranges = [[0, .5], [.5, 1], [1, 2], [2, 3], [3, 4]];
    var state = { v: 0 };
    var lastFloor = 0;

    var html = '<g class="dust">';
    for (var i = 0; i < 12; i++) html += '<circle cx="' + (40 + i * 30) + '" cy="0" r="' + (5 + (i % 4) * 3) + '"/>';
    svg.insertAdjacentHTML('beforeend', html + '</g>');
    var dust = svg.querySelector('.dust');
    var puffs = dust.querySelectorAll('circle');

    function puff() {
      gsap.killTweensOf(puffs);
      gsap.set(dust, { y: 450 });
      gsap.fromTo(puffs, { opacity: .6, y: 0, scale: .5, transformOrigin: '50% 50%' },
        { opacity: 0, y: function (k) { return -24 - (k % 3) * 14; }, scale: 1.4, duration: .6, stagger: .015, ease: 'power2.out' });
    }

    function render(v) {
      var edge = -1;
      for (var k = 0; k < clips.length; k++) {
        var p = Math.max(0, Math.min(1, (v - ranges[k][0]) / (ranges[k][1] - ranges[k][0])));
        var y = Math.round(p * 500);
        clips[k].setAttribute('y', y);
        clips[k].setAttribute('height', 500 - y);
        if (p > 0 && p < 1) edge = y;
      }
      if (score) {
        score.style.opacity = edge < 0 ? 0 : 1;
        if (edge >= 0) score.setAttribute('transform', 'translate(0 ' + edge + ')');
      }
      var pass = v < 2 ? 1 : v < 4 ? 2 : v < 6 ? 3 : 4;
      if (count) count.textContent = String(pass);
      if (label) label.textContent = v < .5 ? 'Sealed, zipper door' : v < 2 ? 'Paint and plaster off' : v < 4 ? 'Lath and batts bagged' : v < 6 ? 'Lines capped, boxes tagged' : 'Studs, swept';
      svg.classList.toggle('is-capping', v >= 4 && v < 6);
      steps.forEach(function (s, n) { s.classList.toggle('is-now', n === pass - 1); });
      var f = Math.floor(v);
      if (f > lastFloor && f <= 4) puff();
      lastFloor = f;
      Gauge.value(v);
    }

    function go(target) {
      gsap.to(state, { v: target, duration: .35, ease: 'power2.out', overwrite: true, onUpdate: function () { render(state.v); } });
    }

    function fromSteps() {
      var probe = window.innerHeight * .6;
      var tops = steps.map(function (s) { return s.getBoundingClientRect().top; });
      var lastBottom = steps[steps.length - 1].getBoundingClientRect().bottom;
      if (probe < tops[0]) return 0;
      for (var n = 0; n < steps.length; n++) {
        var isLast = n === steps.length - 1;
        var bottom = isLast ? lastBottom : tops[n + 1];
        if (probe < bottom) {
          var t = Math.max(0, Math.min(1, (probe - tops[n]) / Math.max(1, bottom - tops[n])));
          return 2 * n + (isLast ? 1 : 2) * t;
        }
      }
      return 7;
    }

    render(0);
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        ScrollTrigger.create({
          trigger: story.querySelector('.steps'), start: 'top 75%', end: 'bottom 40%',
          onUpdate: function () { go(fromSteps()); },
          onRefresh: function () { go(fromSteps()); },
          onLeave: function () { go(7); },
          onLeaveBack: function () { go(0); }
        });
      },
      '(max-width: 899px)': function () {
        ScrollTrigger.create({
          trigger: story.querySelector('.plate--story'), start: 'top 85%', end: 'bottom 20%',
          onUpdate: function (self) { go(self.progress * 7); },
          onLeave: function () { go(7); },
          onLeaveBack: function () { go(0); }
        });
      }
    });
  });

  /* Margin rail: each section owns a layer state; the rail switches when the section holds the middle of the screen. */
  SW.mod('rail', function () {
    if (!document.querySelector('[data-rail]')) return;
    document.querySelectorAll('[data-layer]').forEach(function (sec) {
      if (sec.closest('[data-rail]') || sec.closest('.ticket')) return;
      ScrollTrigger.create({
        trigger: sec, start: 'top 50%', end: 'bottom 50%',
        onToggle: function (self) { if (self.isActive) Gauge.mode(sec.getAttribute('data-layer')); }
      });
    });
  });

  /* Haul-away: the trailer rolls in to the curb. */
  SW.mod('trailer', function () {
    var t = document.querySelector('[data-hook="trailer"]');
    if (!t) return;
    gsap.fromTo(t, { x: -140 }, {
      x: 0, ease: 'none',
      scrollTrigger: { trigger: t.closest('section'), start: 'top bottom', end: 'center center', scrub: .5 }
    });
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
