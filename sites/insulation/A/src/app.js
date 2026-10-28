/* insulation-A · heat riser + seal stitch */
(function () {
  var SW = window.SW || {};
  var root = document.documentElement;

  // glue (works without motion): season "Book for …" pre-fills the form timing
  document.querySelectorAll('[data-when]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (typeof SW.prefillForm !== 'function') return;
      e.preventDefault();
      SW.prefillForm({ when: a.getAttribute('data-when') }, { focus: 'when' });
    });
  });

  if (!(!SW.reduced && root.classList.contains('sw-motion'))) return;
  if (!window.gsap || !window.ScrollTrigger) return;
  var gsap = window.gsap, ST = window.ScrollTrigger;
  gsap.registerPlugin(ST);

  // level notches stitch shut as each level enters view
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('is-sealed'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -35% 0px' });
  document.querySelectorAll('.lvl').forEach(function (el) { io.observe(el); });

  // the riser turns from amber (leaking) to ice (sealed) as you scroll through each level
  document.querySelectorAll('main .lv:not(.hero)').forEach(function (sec) {
    ST.create({
      trigger: sec, start: 'top 60%', end: 'bottom 60%',
      onUpdate: function (s) { sec.style.setProperty('--sp', s.progress.toFixed(3)); },
      onLeave: function () { sec.style.setProperty('--sp', '1'); }
    });
  });

  // the stitch story: five leaks, sealed in order
  var order = document.getElementById('order');
  if (order) {
    order.classList.add('is-story');
    var pin = order.querySelector('.order__pin');
    var steps = order.querySelectorAll('.step');
    var leaks = order.querySelectorAll('.leak');
    var house = order.querySelector('.house');
    var count = order.querySelector('[data-sealed]');
    var n = steps.length;
    var setStep = function (i) {
      steps.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
      leaks.forEach(function (l, k) { l.classList.toggle('is-sealed', k < i || (i === n - 1 && k === i && house.classList.contains('is-done'))); l.classList.toggle('is-on', k === i); });
    };
    ST.matchMedia({
      '(min-width: 900px)': function () {
        order.classList.add('is-pinned');
        setStep(0);
        var st = ST.create({
          trigger: pin, start: 'top top', end: function () { return '+=' + Math.round(n * 0.55 * innerHeight); },
          pin: true, anticipatePin: 1,
          onUpdate: function (s) {
            var p = s.progress;
            var i = Math.min(n - 1, Math.floor(p * n));
            var sealed = Math.min(n, Math.floor(p * n + 0.35));
            steps.forEach(function (el, k) { el.classList.toggle('is-on', k === i); });
            leaks.forEach(function (l, k) { l.classList.toggle('is-sealed', k < sealed); l.classList.toggle('is-on', k === i && k >= sealed); });
            house.classList.toggle('is-done', p > 0.96);
            if (count) count.textContent = sealed;
          }
        });
        return function () {
          order.classList.remove('is-pinned');
          steps.forEach(function (s) { s.classList.remove('is-on'); });
          st.kill();
        };
      },
      '(max-width: 899px)': function () {
        // phones: no pin; each leak stitches when its step scrolls past
        var sts = [];
        steps.forEach(function (s, k) {
          sts.push(ST.create({ trigger: s, start: 'top 70%', onEnter: function () {
            if (leaks[k]) leaks[k].classList.add('is-sealed');
            if (k === n - 1) house.classList.add('is-done');
          } }));
        });
        return function () { sts.forEach(function (t) { t.kill(); }); };
      }
    });
  }

  // the break: one striped roof fills to even snow
  var brk = document.getElementById('roofline');
  if (brk) ST.create({ trigger: brk, start: 'top 55%', once: true, onEnter: function () { brk.classList.add('is-even'); } });

  // hero intro: riser draws down from the ridge (≤ 1 s, text already readable)
  var hero = document.querySelector('.hero');
  if (hero) {
    var lvlTop = hero.querySelector('.lvl');
    if (lvlTop) setTimeout(function () { lvlTop.classList.add('is-sealed'); }, 650);
  }

  document.fonts && document.fonts.ready.then(function () { ST.refresh(); });
})();
