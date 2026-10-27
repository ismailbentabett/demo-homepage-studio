/* flooring-C app.js: house age guide (always on) + Tide Line Gauge motion (motion mode only) */
(function () {
  if (!window.SW) return;

  /* ── House age guide: year → likely floor, typical height above grade, live tide reading ── */
  SW.mod('house-age-guide', function () {
    var box = document.querySelector('[data-house-age]');
    if (!box) return;
    var slider = box.querySelector('[data-year-input]');
    var output = box.querySelector('[data-year-output]');
    var floor = box.querySelector('[data-age-floor]');
    var advice = box.querySelector('[data-age-advice]');
    var swatch = box.querySelector('.swatch');
    var reading = box.querySelector('[data-age-reading]');
    var readingText = box.querySelector('[data-age-reading-text]');
    var cta = box.querySelector('[data-age-cta]');
    var section = document.getElementById('house-age-guide');
    var ERAS = [
      { max: 1919, era: 'pine', ft: '3.0', svc: 'Heart pine', floor: 'Likely: heart pine or old-growth oak',
        advice: 'Sand gently: these boards are thin from a century of sanding. Expect paint at the edges and gaps worth filling with reclaimed slivers.' },
      { max: 1959, era: 'oak', ft: '2.0', svc: 'Refinishing', floor: 'Likely: oak strip on joists',
        advice: 'Can be sanded and refinished. Look for pet stains and water rings near outside walls.' },
      { max: 1989, era: 'ply', ft: '1.5', svc: 'Engineered wood', floor: 'Likely: plywood under carpet or vinyl',
        advice: 'Engineered hardwood or waterproof plank both suit it. We read the crawlspace before choosing.' },
      { max: 9999, era: 'slab', ft: '0.5', svc: 'Waterproof plank', floor: 'Likely: concrete slab under carpet or tile',
        advice: 'Close to the ground and to high water. Waterproof plank or tile, after a moisture test on the slab.' }
    ];
    var last = null;
    function update() {
      var year = parseInt(slider.value, 10);
      output.textContent = year;
      var e = ERAS.filter(function (x) { return year <= x.max; })[0];
      slider.setAttribute('aria-valuetext', year + ', ' + e.floor.replace('Likely: ', 'likely ') + ', typical floor ' + e.ft + ' ft above grade');
      if (e === last) return;
      last = e;
      floor.textContent = e.floor;
      advice.textContent = e.advice;
      swatch.setAttribute('data-era', e.era);
      var txt = 'Typical floor · ' + e.ft + ' ft above grade';
      reading.setAttribute('data-tide-reading', txt);
      reading.style.setProperty('--h', e.ft);
      if (readingText) readingText.textContent = 'Typical floor height: ' + e.ft + ' ft above grade';
      if (section) section.style.setProperty('--age-ft', e.ft);
      if (cta) cta.setAttribute('data-service', e.svc);
    }
    slider.addEventListener('input', update);
    update();
  });

  /* ── Motion: only with JS + motion allowed ── */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Intro (≤ 1.2 s): h1 lines rise inside their masks, the grain drifts, the tide comes up the gauge */
  var lines = document.querySelectorAll('.hero__line > span');
  if (lines.length) gsap.from(lines, { yPercent: 105, duration: 0.7, stagger: 0.07, ease: 'power3.out', delay: 0.05, clearProps: 'transform' });
  var mask = document.querySelector('.hero__mask');
  if (mask) gsap.fromTo(mask, { backgroundPosition: '0px -20px, 0 0, 0 0' }, { backgroundPosition: '0px 0px, 0 0, 0 0', duration: 1.2, ease: 'power2.out' });
  var water = document.querySelector('.xsec__water');
  if (water) gsap.from(water, { y: 96, duration: 1.1, ease: 'power2.out', delay: 0.1 });
  var mark = document.querySelector('.xsec__mark');
  if (mark) gsap.from(mark, { y: 96, duration: 1.1, ease: 'power2.out', delay: 0.1 });

  /* Tide lines draw in from the left as each section arrives */
  gsap.utils.toArray('.tide-line[data-sw-signature]').forEach(function (line) {
    if (line.closest('.hero')) return;
    gsap.from(line, { scaleX: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: line, start: 'top 92%', once: true } });
  });

  ScrollTrigger.matchMedia({
    /* Story: the tide staff fills as the three passes go by (sticky rail, no pin, scrubbed) */
    '(min-width: 900px)': function () {
      var body = document.querySelector('[data-scroll-story="tide-rise"]');
      if (!body) return;
      body.style.setProperty('--sw-p', 0.06);
      ScrollTrigger.create({
        trigger: body, start: 'top 65%', end: 'bottom 70%', scrub: true,
        onUpdate: function (self) { body.style.setProperty('--sw-p', (0.06 + self.progress * 0.94).toFixed(3)); }
      });
      return function () { body.style.removeProperty('--sw-p'); };
    }
  });

  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
