/* demolition-C: the Reclaimed-Space Ruler, one running "sq ft back to lawn" instrument.
   The HTML already shows the finished value everywhere (192 sq ft on Plot 01), so JS-off and reduced motion
   read the final number. With JS:
   1. Typography pass on fact strings (curly apostrophes, a real ×).
   2. Estimator: the field-book sketch redraws to the chosen footprint; choosing one sets the instrument's final value.
   3. Motion only: the story plot changes state per stage beside a sticky drawing, the header meter ticks with
      the story, and the footer ruler lands on the final value (it never counts from 0). */
(function () {
  if (!window.SW) return;
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion') &&
    typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  /* 1. typography */
  function typo(s) {
    return s.replace(/(\w)'(?=\w)/g, function (m, a) { return a + '’'; })
      .replace(/(\d)\s?x\s?(?=\d)/g, function (m, a) { return a + ' × '; });
  }
  function typoTree(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) { var t = typo(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
  }
  document.querySelectorAll('.review-card blockquote, .price-row__note').forEach(typoTree);

  /* the instrument */
  var MAX = 400;
  var final = 192;
  var userSet = false;
  var hdr = document.querySelector('[data-meter]');
  var hdrNum = document.querySelector('[data-meter-num]');
  var footNum = document.querySelector('[data-foot-num]');
  var footLabel = document.querySelector('[data-foot-label]');
  var footRuler = document.querySelector('.ruler-h');
  var storyNum = document.querySelector('[data-story-num]');
  function showHeader(v) {
    if (hdrNum) hdrNum.textContent = String(v);
    if (hdr) hdr.style.setProperty('--m', Math.min(1, v / MAX).toFixed(3));
  }
  function setFinal(v) {
    final = v;
    userSet = true;
    showHeader(v);
    root.classList.add('sw-meter-live');
    if (footNum) footNum.textContent = String(v);
    if (footLabel) footLabel.textContent = 'your sketch';
    if (footRuler) footRuler.style.setProperty('--sw-f', Math.min(1, v / MAX).toFixed(3));
    if (storyNum) storyNum.textContent = String(v);
  }

  /* 2. estimator sketch: illustrative footprints (ft) per sample price row, small / typical / large */
  var SIZES = [
    [[8, 10], [10, 12], [12, 16]],
    [[10, 12], [12, 16], [16, 20]],
    [[12, 20], [14, 22], [16, 24]],
    [[10, 18], [12, 20], [20, 20]],
    [[10, 12], [12, 16], [16, 20]]
  ];
  var COMPARE = [
    'That footprint is about the floor of a bedroom, handed back to the yard.',
    'The ground under a high deck sees daylight again: room for a patio or just grass.',
    'A one-car garage and its slab: roughly the room to park two cars, or plant a garden.',
    'About one parking space of gravel raked level, or grass when it grows back.',
    'Topsoil and straw over the old footprint, so the lawn can grow back across it.'
  ];
  var est = document.querySelector('[data-estimator]');
  if (est) {
    var sel = est.querySelector('[data-est-item]');
    var size = est.querySelector('[data-est-size]');
    var line = est.querySelector('[data-est-compare]');
    var out = est.querySelector('[data-est-out]');
    var card = est.querySelector('[data-est-sketch]');
    var sq = est.querySelector('[data-est-sqft]');
    var dims = est.querySelector('[data-est-dims]');
    var rects = est.querySelectorAll('[data-fp]');
    var dw = est.querySelector('[data-dim-w]'), dwt = est.querySelector('[data-dim-wt]');
    var dd = est.querySelector('[data-dim-d]'), ddt = est.querySelector('[data-dim-dt]');
    var X = 200, Y = 56, PX = 8;

    var draw = function (user) {
      var i = sel ? parseInt(sel.value, 10) : 0;
      if (isNaN(i) || !SIZES[i]) i = 0;
      var l = size ? parseInt(size.value, 10) : 2;
      if (isNaN(l)) l = 2;
      var d = SIZES[i][Math.max(0, Math.min(2, l))];
      var w = d[0] * PX, h = d[1] * PX, area = d[0] * d[1];
      if (line) line.textContent = COMPARE[i] || '';
      if (sq) sq.textContent = String(area);
      if (dims) dims.textContent = d[0] + ' × ' + d[1] + ' ft footprint';
      if (card) card.style.setProperty('--sq', Math.min(1, area / MAX).toFixed(3));
      var by = Y + h + 12, rx = X + w + 12;
      var attrs = [
        [dw, { d: 'M' + X + ' ' + by + ' H' + (X + w) + ' M' + X + ' ' + (by - 6) + ' V' + (by + 6) + ' M' + (X + w) + ' ' + (by - 6) + ' V' + (by + 6) }],
        [dwt, { x: X + w / 2, y: by + 18 }],
        [dd, { d: 'M' + rx + ' ' + Y + ' V' + (Y + h) + ' M' + (rx - 6) + ' ' + Y + ' H' + (rx + 6) + ' M' + (rx - 6) + ' ' + (Y + h) + ' H' + (rx + 6) }],
        [ddt, { x: rx + 8, y: Y + h / 2 + 4 }]
      ];
      Array.prototype.forEach.call(rects, function (r) { attrs.push([r, { width: w, height: h }]); });
      if (dwt) dwt.textContent = d[0] + ' FT';
      if (ddt) ddt.textContent = d[1] + ' FT';
      attrs.forEach(function (a) {
        if (!a[0]) return;
        if (user && motion) gsap.to(a[0], { attr: a[1], duration: 0.55, ease: 'power3.out', overwrite: true });
        else Object.keys(a[1]).forEach(function (k) { a[0].setAttribute(k, a[1][k]); });
      });
      if (user) setFinal(area);
    };
    if (sel) sel.addEventListener('change', function () { draw(true); });
    if (size) size.addEventListener('input', function () { draw(true); });
    draw(false);
    if (out && window.MutationObserver) {
      typoTree(out);
      new MutationObserver(function () { typoTree(out); }).observe(out, { childList: true, subtree: true, characterData: true });
    }
  }

  /* 3. motion */
  if (!motion) return;
  gsap.registerPlugin(ScrollTrigger);

  var story = document.querySelector('[data-story]');
  if (story) {
    ScrollTrigger.matchMedia({
      /* desktop: the drawing is pinned (sticky) and changes state at each stage; the meters tick with it */
      '(min-width: 900px)': function () {
        var list = story.querySelector('.story__steps');
        var steps = story.querySelectorAll('[data-step-n]');
        var rest = function () {
          story.removeAttribute('data-stage');
          story.style.removeProperty('--sw-p');
          if (storyNum) storyNum.textContent = String(final);
          if (!userSet) root.classList.remove('sw-meter-live');
        };
        steps.forEach(function (step) {
          ScrollTrigger.create({
            trigger: step, start: 'top 62%', end: 'bottom 62%',
            onToggle: function (self) { if (self.isActive) story.setAttribute('data-stage', step.getAttribute('data-step-n')); }
          });
        });
        ScrollTrigger.create({
          trigger: list, start: 'top 62%', end: 'bottom 62%',
          onEnter: function () { root.classList.add('sw-meter-live'); },
          onEnterBack: function () { root.classList.add('sw-meter-live'); },
          onUpdate: function (self) {
            var v = Math.round(final * self.progress);
            story.style.setProperty('--sw-p', self.progress.toFixed(3));
            if (storyNum) storyNum.textContent = String(v);
            showHeader(v);
          },
          onLeave: function () {
            story.setAttribute('data-stage', '4');
            story.style.setProperty('--sw-p', '1');
            if (storyNum) storyNum.textContent = String(final);
            showHeader(final);
          },
          onLeaveBack: rest
        });
        return rest;
      },
      /* phones and tablets: no pin; the header meter shows the plot total once the story is reached */
      '(max-width: 899px)': function () {
        ScrollTrigger.create({
          trigger: story, start: 'top 60%',
          onEnter: function () { showHeader(final); root.classList.add('sw-meter-live'); },
          onLeaveBack: function () { if (!userSet) root.classList.remove('sw-meter-live'); }
        });
      }
    });
  }

  /* footer: the ruler lands on the final value; the number is never animated, so it always reads the total */
  if (footRuler) {
    ScrollTrigger.create({
      trigger: footRuler, start: 'top 95%', once: true,
      onEnter: function () {
        showHeader(final);
        gsap.fromTo(footRuler, { '--sw-f': 0 }, { '--sw-f': Math.min(1, final / MAX), duration: 0.9, ease: 'power3.out' });
      }
    });
  }

  /* ridge lines drift at different speeds (transform only) */
  var ridges = gsap.utils.toArray('.ridge');
  ridges.forEach(function (r, i) {
    gsap.fromTo(r, { yPercent: (ridges.length - i) * 3 }, {
      yPercent: 0, ease: 'none',
      scrollTrigger: { trigger: '.sec-break', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
