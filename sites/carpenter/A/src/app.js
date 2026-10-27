/* carpenter-A: the cut list. Signature = kerf rules that grow as you scroll; story = the scarf-joint splice;
   tool moment = the estimator price drawn in like a cut line. */
(function () {
  /* Drawn plates stay on top until a real photo actually loads (placeholder mode = drawings). Not motion. */
  document.querySelectorAll('.plate > img').forEach(function (img) {
    function ok() { if (img.naturalWidth > 2) img.parentNode.classList.add('has-photo'); }
    if (img.complete) ok(); else img.addEventListener('load', ok);
  });

  /* Services: an open list on desktop, an accordion on phones. Layout, not motion; JS off keeps every row open. */
  var svcRows = document.querySelectorAll('[data-svc-list] details');
  if (svcRows.length && window.matchMedia) {
    var phone = window.matchMedia('(max-width: 639px)');
    var setRows = function () { svcRows.forEach(function (d) { d.open = !phone.matches; }); };
    setRows();
    if (phone.addEventListener) phone.addEventListener('change', setRows);
    svcRows.forEach(function (d) {
      d.querySelector('summary').addEventListener('click', function (e) { if (!phone.matches) e.preventDefault(); });
    });
  }

  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  var root = document.documentElement;
  root.classList.add('sw-kerf');

  /* Intro (≤ 1.1 s, the h1 is split by the kit and readable at once): hero rule draws L→R, plates slide in */
  var heroRule = document.querySelector('#hero .cut-rule');
  var frames = document.querySelectorAll('.filmstrip__frame');
  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (heroRule) intro.fromTo(heroRule, { '--sw-p': 0 }, { '--sw-p': 1, duration: 0.7, ease: 'power2.inOut' }, 0.1);
  if (frames.length) intro.from(frames, { x: 48, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.25);

  /* Signature: every other cut rule's kerf is cut as it crosses the viewport (scrubbed, reversible) */
  document.querySelectorAll('.cut-rule[data-sw-signature]').forEach(function (rule) {
    if (rule.closest('#hero') || rule.closest('.card--trim')) return;
    gsap.fromTo(rule, { '--sw-p': 0 }, { '--sw-p': 1, ease: 'none',
      scrollTrigger: { trigger: rule, start: 'top 92%', end: 'top 45%', scrub: 0.4 } });
  });
  /* Trim cards: the kerf is cut once when the card arrives; hover re-cuts it (CSS) */
  document.querySelectorAll('.card--trim .cut-rule').forEach(function (rule, i) {
    gsap.set(rule, { '--sw-p': 0 });
    ScrollTrigger.create({ trigger: rule, start: 'top 85%', once: true,
      onEnter: function () { gsap.to(rule, { '--sw-p': 1, duration: 0.6, delay: i * 0.08, ease: 'power2.inOut' }); } });
  });

  /* Story: the splice. 3 steps — cut back, fit new oak, prime. Scrubbed on ≥ 640, played once on phones. */
  var scarf = document.querySelector('[data-scarf]');
  if (scarf) {
    var cut = scarf.querySelector('.sc-cut'), rot = scarf.querySelector('.sc-rot'),
        neu = scarf.querySelector('.sc-new'), prime = scarf.querySelector('.sc-prime'),
        steps = scarf.querySelectorAll('.scarf__steps li');
    function mark(n) { steps.forEach(function (li, i) { li.classList.toggle('is-on', i < n); }); }
    function build() {
      var tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
      tl.set(rot, { opacity: 1, x: 0, y: 0 })
        .set(neu, { x: 240, opacity: 0 })
        .set(prime, { opacity: 0 })
        .fromTo(cut, { scaleY: 0, transformOrigin: '50% 0%' }, { scaleY: 1, duration: 1, onStart: function () { mark(1); }, onReverseComplete: function () { mark(0); } })
        .to(rot, { x: 60, y: 46, rotation: 6, opacity: 0, duration: 1 }, '+=0.2')
        .to(neu, { x: 0, opacity: 1, duration: 1.2, onStart: function () { mark(2); }, onReverseComplete: function () { mark(1); } }, '<0.3')
        .fromTo(prime, { opacity: 0, scale: 0.98, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.8, onStart: function () { mark(3); }, onReverseComplete: function () { mark(2); } }, '+=0.2');
      return tl;
    }
    /* Scrubbed while the drawing crosses the viewport (no pin, so no spacer gap in any capture); played once on phones. */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var tl = build();
        ScrollTrigger.create({ trigger: scarf, start: 'top 85%', end: 'bottom 25%', scrub: 0.6, animation: tl });
      },
      '(max-width: 639px)': function () {
        var tl = build().pause(0);
        ScrollTrigger.create({ trigger: scarf, start: 'top 70%', once: true, onEnter: function () { tl.duration(2.4).play(); } });
      }
    });
  }

  /* Cut heads: the big number is stamped up into its slot as the heading arrives (transform only, once) */
  document.querySelectorAll('.cut-head__n').forEach(function (n) {
    ScrollTrigger.create({ trigger: n, start: 'top 92%', once: true,
      onEnter: function () { gsap.fromTo(n, { yPercent: 35, rotation: -4 }, { yPercent: 0, rotation: 0, duration: 0.7, ease: 'back.out(1.6)' }); } });
  });

  /* Tool moment: the price draws itself like a cut line, each time the job changes */
  var ticket = document.querySelector('.est-ticket');
  var sel = document.querySelector('[data-est-item]');
  if (ticket && sel) {
    var recut = function () { ticket.classList.remove('is-cutting'); void ticket.offsetWidth; ticket.classList.add('is-cutting'); };
    sel.addEventListener('change', function () { requestAnimationFrame(recut); });
    ScrollTrigger.create({ trigger: ticket, start: 'top 80%', once: true, onEnter: recut });
  }

  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
