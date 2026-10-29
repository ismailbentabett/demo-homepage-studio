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

  // services on phone: one row per plate, the blurb behind its disclosure
  if (window.matchMedia('(max-width: 639px)').matches) $$('.svc__more').forEach(function (d) { d.removeAttribute('open'); });

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
  var story0 = $('#under');
  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (word) intro.fromTo(word, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: .7, ease: steps(7), clearProps: 'clipPath' }, 0);
  if (heroCut) intro.fromTo(heroCut, { '--sw-p': 0 }, { '--sw-p': 1, duration: .45, ease: steps(16) }, .55);

  // every other cut is laid tile by tile as it reaches the viewport
  if (window.ScrollTrigger) {
    $$('.cut').forEach(function (c) {
      if (c === heroCut || (story0 && story0.contains(c))) return;
      gsap.set(c, { '--sw-p': 0 });
      ScrollTrigger.create({
        trigger: c, start: 'top 95%', once: true,
        onEnter: function () { gsap.to(c, { '--sw-p': 1, duration: .6, ease: steps(18) }); }
      });
    });
  }

  // the story: the wall is built as you scroll (frame → sheathing → wrap → courses bottom-up),
  // it un-builds when you scroll back, and the section's own staggered edge is the last course.
  var story = $('#under');
  if (story && window.ScrollTrigger) {
    var wall = $('.wall', story);
    var studs = $('.w-studs', story), sheath = $('.w-sheath', story), soft = $('.w-soft', story);
    var wrapEl = $('.w-wrap', story), flash = $('.w-flash', story);
    var courses = $$('.w-course', story);
    var storyCut = $(':scope > .cut', story);
    var stepEls = $$('.step', story);
    var cur = -1;
    function setStep(i) { if (i === cur) return; cur = i; stepEls.forEach(function (s, j) { s.classList.toggle('is-active', j === i); }); }
    var tl = gsap.timeline({ paused: true, defaults: { ease: 'none' }, onUpdate: function () { setStep(Math.min(3, Math.floor(tl.time()))); } });
    tl.fromTo(studs, { opacity: .4 }, { opacity: 1, duration: 1 }, 0)
      .fromTo(sheath, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .8, ease: steps(4) }, 1)
      .fromTo(soft, { opacity: 0 }, { opacity: 1, duration: .2, ease: steps(2) }, 1.75)
      .fromTo(wrapEl, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .7, ease: steps(4) }, 2)
      .fromTo(flash, { opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }, { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: .3 }, 2.7)
      .fromTo(courses, { opacity: 0, y: -26 }, { opacity: 1, y: 0, duration: .25, stagger: .11, ease: 'power2.out' }, 3);
    if (storyCut) tl.fromTo(storyCut, { '--sw-p': 0 }, { '--sw-p': 1, duration: .5, ease: steps(14) }, 4);
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        var st = ScrollTrigger.create({ trigger: story, start: 'top 25%', end: 'bottom bottom', scrub: .5, animation: tl });
        return function () { st.kill(); };
      },
      '(max-width: 899px)': function () {
        var st = ScrollTrigger.create({ trigger: wall || story, start: 'top 80%', end: 'bottom 30%', scrub: .5, animation: tl });
        return function () { st.kill(); };
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
