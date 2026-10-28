/* assembly-C · Post & Beam: hero sheet intro, strap story, corner locator */
(function () {
  var doc = document.documentElement;
  var ROOMS = ['office', 'kids', 'bath', 'living', 'garage', 'kitchen', 'yard', 'atrium'];

  /* Corner locator (≥1440 only, decorative): lights the room of the section in view. */
  var loc = document.querySelector('[data-hook="locator"] svg');
  if (loc && 'IntersectionObserver' in window) {
    var light = function (room) {
      ROOMS.forEach(function (r) {
        loc.style.setProperty('--h-' + r, (room === r || room === 'all') ? 'rgb(154 63 40 / ' + (room === 'all' ? '.08' : '.35') + ')' : 'transparent');
      });
    };
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        light(e.target.getAttribute('data-room'));
        loc.parentNode.classList.toggle('is-on', e.target.id !== 'top' && e.target.id !== 'contact');
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    document.querySelectorAll('main > section[data-room]').forEach(function (s) { io.observe(s); });
  }

  if (!(window.SW && !SW.reduced && doc.classList.contains('sw-motion') && window.gsap)) return;
  var gsap = window.gsap;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* 1 · Signature intro: the fascia draws along the 3:12 rake, the sheet settles, the straps drop in. ≤1.1s, h1 untouched. */
  var fascia = document.querySelector('.sheet__fascia');
  var body = document.querySelector('.sheet__body');
  var ticks = document.querySelectorAll('.hs use');
  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (fascia) intro.fromTo(fascia, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: .6 }, 0);
  if (body) intro.from(body, { y: 24, opacity: 0, duration: .55 }, .15);
  if (ticks.length) intro.from(ticks, { opacity: 0, y: -10, duration: .3, stagger: .06, clearProps: 'opacity' }, .55);

  /* 2 · Strap story: each piece leans, a strap draws to the post, the piece stands up, the counter climbs. */
  var stage = document.querySelector('[data-hook="strap-story"]');
  if (!stage || !window.ScrollTrigger) return;
  var section = stage.closest('section');
  var pieces = stage.querySelectorAll('.el-piece');
  var straps = stage.querySelectorAll('.el-strap');
  var steps = stage.querySelectorAll('.step');
  var count = stage.querySelector('[data-anch]');
  var origins = ['262 480', '580 480', '749 352'];

  function build() {
    var tl = gsap.timeline({ paused: true });
    pieces.forEach(function (p, i) { gsap.set(p, { rotation: 6, svgOrigin: origins[i] }); });
    gsap.set(straps, { strokeDasharray: 1, strokeDashoffset: 1 });
    if (count) count.textContent = '0';
    steps.forEach(function (s) { s.classList.remove('is-on'); });
    pieces.forEach(function (p, i) {
      var at = i * 1;
      tl.add(function () { steps.forEach(function (s, j) { s.classList.toggle('is-on', j === i); }); }, at)
        .to(straps[i], { strokeDashoffset: 0, duration: .45, ease: 'power2.inOut' }, at + .05)
        .to(p, { rotation: 0, svgOrigin: origins[i], duration: .4, ease: 'back.out(1.6)' }, at + .45)
        .add(function () { if (count) count.textContent = String(i + 1); }, at + .7);
    });
    tl.add(function () {}, pieces.length);
    return tl;
  }

  function reset() {
    gsap.set(pieces, { rotation: 0 });
    gsap.set(straps, { strokeDashoffset: 0 });
    if (count) count.textContent = String(pieces.length);
  }

  ScrollTrigger.matchMedia({
    '(min-width: 900px)': function () {
      var tl = build();
      section.classList.add('is-pinned');
      var st = ScrollTrigger.create({
        trigger: stage, start: 'top top+=' + (parseInt(getComputedStyle(doc).getPropertyValue('--header-h'), 10) || 72),
        end: function () { return '+=' + Math.round(pieces.length * window.innerHeight * .55); },
        pin: true, scrub: .6, animation: tl, invalidateOnRefresh: true
      });
      return function () { st.kill(); tl.kill(); section.classList.remove('is-pinned'); reset(); };
    },
    '(max-width: 899px)': function () {
      var tl = build();
      var st = ScrollTrigger.create({
        trigger: stage.querySelector('.elev') || stage, start: 'top 70%', once: true,
        onEnter: function () { tl.duration(2.4); tl.play(); }
      });
      return function () { st.kill(); tl.kill(); reset(); };
    }
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
