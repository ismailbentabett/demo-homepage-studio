/* siding-C · Course-Cut Edges: the band edges are cut in the pattern you pick, tile by tile. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var PATTERNS = [
    { cut: 'straight', name: 'Straight', era: '1900s' },
    { cut: 'stagger', name: 'Staggered', era: '1920s' },
    { cut: 'fish', name: 'Fish-scale', era: '1880s' },
    { cut: 'diamond', name: 'Diamond', era: '1880s' },
    { cut: 'hexagon', name: 'Hexagon', era: '1890s' }
  ];
  var motion = !(window.SW && SW.reduced) && document.documentElement.classList.contains('sw-motion');

  /* ---------- glue (always on) ---------- */
  function onTab(root, fn) {
    if (!root) return;
    root.addEventListener('sw:tab', function (e) { fn(e.detail.index); });
    var sel = $$('[data-tab]', root).findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; });
    if (sel > -1) fn(sel, true);
  }

  // pattern book → the cut under it follows the open plate
  var follow = $('[data-cut-follow]');
  var followTag = $('[data-cut-tag]');
  onTab($('[data-hook="pattern-book"]'), function (i, first) {
    var p = PATTERNS[i]; if (!p || !follow) return;
    follow.setAttribute('data-cut', p.cut);
    if (followTag) followTag.textContent = 'Pl. 0' + (i + 1) + ' · ' + p.name + ' · ' + p.era;
    if (motion && !first && window.gsap) {
      gsap.fromTo(follow, { '--sw-p': 0 }, { '--sw-p': 1, duration: .5, ease: 'steps(12)' });
    }
  });

  // colour by street → repaint the elevation
  var elev = $('.elev');
  onTab($('[data-hook="color-by-street"]'), function (i) { if (elev) elev.setAttribute('data-scheme', String(i)); });

  // footer index → open the matching plate
  $$('[data-goto-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var tab = $$('[data-hook="pattern-book"] [data-tab]')[+a.getAttribute('data-goto-tab')];
      if (tab) tab.click();
    });
  });

  // squares calculator: wall area from length × stories, plus gables, minus openings
  var calc = $('[data-hook="squares-calculator"]');
  var lastArea = 0;
  function num(k) { var el = calc && $('[data-sq="' + k + '"]', calc); return el ? Math.max(0, parseFloat(el.value) || 0) : 0; }
  function sq() {
    if (!calc) return;
    var area = Math.max(0, Math.round(num('len') * num('stories') * 9 + num('gables') * 120 - num('openings') * 15));
    lastArea = area;
    var a = $('[data-sq-area]', calc), s = $('[data-sq-squares]', calc);
    if (a) a.textContent = area.toLocaleString('en-US');
    if (s) s.textContent = (area * 1.1 / 100).toLocaleString('en-US', { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  }
  if (calc) { calc.addEventListener('input', sq); calc.addEventListener('change', sq); sq(); }

  // extra prefill: the pattern picked, the wall size measured
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-pattern-pick],[data-sq-go]');
    if (!t || !window.SW || !SW.prefillForm) return;
    setTimeout(function () {
      if (t.hasAttribute('data-pattern-pick')) SW.prefillForm({ pattern: t.getAttribute('data-pattern-pick') }, { scroll: false });
      if (t.hasAttribute('data-sq-go') && lastArea) SW.prefillForm({ sqft: String(lastArea) }, { scroll: false });
    }, 0);
  });

  if (!motion || !window.gsap) return;

  /* ---------- motion ---------- */
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  var steps = function (n) { return 'steps(' + n + ')'; };

  // hero intro: the word fills from the bottom course up; the h1 is never touched
  var word = $('.mask-word__in');
  var heroCut = $('.hero .cut');
  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (word) intro.fromTo(word, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: .7, ease: steps(7), clearProps: 'clipPath' }, 0);
  if (heroCut) intro.fromTo(heroCut, { '--sw-p': 0 }, { '--sw-p': 1, duration: .45, ease: steps(16) }, .55);

  // every other cut is laid tile by tile as it reaches the viewport
  if (window.ScrollTrigger) {
    $$('.cut').forEach(function (c) {
      if (c === heroCut) return;
      gsap.set(c, { '--sw-p': 0 });
      ScrollTrigger.create({
        trigger: c, start: 'top 95%', once: true,
        onEnter: function () { gsap.to(c, { '--sw-p': 1, duration: .6, ease: steps(18) }); }
      });
    });
  }

  // the story: strip, check, wrap, then lay the courses bottom-up
  var story = $('#under');
  if (story && window.ScrollTrigger) {
    var wall = $('.wall__svg', story);
    var old = $('.w-old', story), soft = $('.w-soft', story);
    var wrap = $$('.w-wrap, .w-flash', story);
    var courses = $$('.w-course', story);
    var stepEls = $$('.step', story);
    function setStep(i) { stepEls.forEach(function (s, j) { s.classList.toggle('is-active', j === i); }); }
    function build() {
      if (old) old.style.display = 'inline';
      var tl = gsap.timeline({ paused: true });
      tl.set(soft, { opacity: 0 }).set(wrap, { opacity: 0 }).set(courses, { opacity: 0, y: 14 });
      tl.call(setStep, [0], 0)
        .to(old, { opacity: 0, y: 24, duration: 1, ease: 'power2.in' }, 0)
        .call(setStep, [1], 1)
        .to(soft, { opacity: 1, duration: .6, ease: steps(3) }, 1)
        .call(setStep, [2], 2)
        .to(wrap, { opacity: 1, duration: .8, stagger: .3, ease: 'power2.out' }, 2)
        .call(setStep, [3], 3)
        .to(courses, { opacity: 1, y: 0, duration: .4, stagger: .14, ease: 'power3.out' }, 3);
      return tl;
    }
    ScrollTrigger.matchMedia({
      '(min-width: 900px) and (min-height: 700px)': function () {
        var tl = build();
        var st = ScrollTrigger.create({
          trigger: story, start: 'top top+=68', end: 'bottom bottom', scrub: .6,
          animation: tl,
          onUpdate: function (self) { setStep(Math.min(3, Math.floor(self.progress * 4))); }
        });
        return function () { st.kill(); tl.progress(1).kill(); if (old) old.style.display = ''; gsap.set([soft].concat(wrap, courses), { clearProps: 'all' }); stepEls.forEach(function (s) { s.classList.remove('is-active'); }); };
      },
      '(max-width: 899px), (max-height: 699px)': function () {
        var tl = build();
        var st = ScrollTrigger.create({ trigger: wall || story, start: 'top 70%', once: true, onEnter: function () { tl.duration(3.2).play(); } });
        return function () { st.kill(); tl.progress(1).kill(); if (old) old.style.display = ''; gsap.set([soft].concat(wrap, courses), { clearProps: 'all' }); };
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
