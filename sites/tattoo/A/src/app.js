/* tattoo-A · the tracing sheet stack (process board redraw), slips landing, timeline draw, estimator glue. */
(function () {
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* Estimator glue: sittings band in words + placement, and a stencil redraw on change. Works with or without motion. */
  var est = document.querySelector('[data-hook="estimator"]');
  if (est) {
    var item = est.querySelector('[data-est-item]');
    var size = est.querySelector('[data-est-size]');
    var place = est.querySelector('[data-est-place]');
    var sit = est.querySelector('[data-sittings]');
    var placeOut = est.querySelector('[data-est-placeout]');
    var mark = est.querySelector('.est__mark');
    var BANDS = [
      ['One sitting', 'One sitting', 'One sitting'],
      ['One sitting', 'One sitting', 'One or two sittings'],
      ['Two or three sittings', 'Two to four sittings', 'Several sittings over months']
    ];
    var update = function () {
      var i = parseInt(item.value, 10) || 0;
      var s = size ? parseInt(size.value, 10) : 1;
      if (sit) sit.textContent = BANDS[Math.min(i, 2)][Math.min(Math.max(s, 0), 2)];
      if (placeOut && place) placeOut.textContent = 'on your ' + place.value.toLowerCase();
      if (mark && motion) { mark.classList.remove('is-redraw'); void mark.getBBox(); mark.classList.add('is-redraw'); }
    };
    [item, size, place].forEach(function (el) { if (el) { el.addEventListener('change', update); el.addEventListener('input', update); } });
    update();
  }

  if (!motion) return;

  var io = function (els, cls, cb) {
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add(cls); }); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add(cls); if (cb) cb(e.target); obs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });
    els.forEach(function (el) { obs.observe(el); });
  };

  /* Review slips land one after another. */
  var slips = document.querySelector('.slips');
  if (slips) {
    Array.prototype.forEach.call(slips.children, function (c, i) { c.style.setProperty('--i', i); });
    io([slips], 'is-in');
  }

  /* Healing timeline: the violet line draws day 1 to 42, the day dots tick after it. */
  var tl = document.querySelector('[data-hook="timeline"]');
  if (tl) {
    Array.prototype.forEach.call(tl.querySelectorAll('.tl__days li'), function (li, i) { li.style.setProperty('--i', i); });
    io([tl], 'is-drawn');
  }

  /* The signature: each step sheet that lands redraws the drawing on the board beneath (>= 900px). */
  var stack = document.querySelector('[data-sw-signature]');
  if (!stack || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  var board = stack.querySelector('[data-board]');
  var label = stack.querySelector('[data-board-label]');
  var steps = Array.prototype.slice.call(stack.querySelectorAll('.sheet--step'));
  var NAMES = ['01 · idea', '02 · drawing', '03 · stencil', '04 · lines', '05 · healed'];
  var setState = function (n) {
    board.setAttribute('data-state', String(n));
    if (label) label.textContent = NAMES[n - 1];
    steps.forEach(function (s, i) { s.classList.toggle('is-active', i === n - 1); });
  };

  var mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', function () {
    setState(1);
    var triggers = steps.map(function (s, i) {
      return ScrollTrigger.create({
        trigger: s,
        start: 'top 62%',
        end: 'bottom 62%',
        onEnter: function () { setState(i + 1); },
        onEnterBack: function () { setState(i + 1); }
      });
    });
    return function () {
      triggers.forEach(function (t) { t.kill(); });
      board.setAttribute('data-state', '5');
      steps.forEach(function (s) { s.classList.remove('is-active'); });
    };
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
