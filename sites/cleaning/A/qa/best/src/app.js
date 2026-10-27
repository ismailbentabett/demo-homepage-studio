/* cleaning-A · Visit Timeline Tick: the visit clock story + the estimator tick */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  if (SW.reduced || !root.classList.contains('sw-motion')) return;

  /* Story 1: the visit clock. The rail fills as you scroll, the sticky clock jumps to each room's start time,
     and the room's dot fills when it becomes the current room. No pin: the clock is CSS sticky on desktop. */
  SW.mod('visit-clock', function () {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    var rail = document.querySelector('.timeline-rail');
    if (!rail) return;
    var cards = Array.prototype.slice.call(rail.querySelectorAll('.room-card'));
    var clock = document.querySelector('[data-visit-clock]');
    var room = document.querySelector('[data-visit-room]');
    var box = document.querySelector('.visit-clock');

    rail.style.setProperty('--rail', '0');
    if (box) box.style.setProperty('--p', '0');
    ScrollTrigger.create({
      trigger: rail,
      start: 'top 65%',
      end: 'bottom 65%',
      onUpdate: function (self) {
        var p = self.progress.toFixed(3);
        rail.style.setProperty('--rail', p);
        if (box) box.style.setProperty('--p', p);
      }
    });

    function setCurrent(card) {
      cards.forEach(function (c) { c.classList.toggle('is-current', c === card); });
      if (clock && clock.textContent !== card.dataset.time) {
        clock.textContent = card.dataset.time;
        if (room) room.textContent = card.dataset.room;
        gsap.fromTo(clock, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.35, ease: 'power3.out' });
      }
    }
    cards.forEach(function (card) {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 60%',
        end: 'bottom 60%',
        onToggle: function (self) { if (self.isActive) setCurrent(card); }
      });
    });
  });

  /* Story 2: the estimator bar stretches with the house size, then the tick lands at the end of the visit. */
  SW.mod('estimator-tick', function () {
    var est = document.querySelector('[data-estimator]');
    var bar = est && est.querySelector('.est-bar');
    if (!bar) return;
    var t;
    function tick() {
      bar.classList.remove('is-ticked');
      clearTimeout(t);
      t = setTimeout(function () { bar.classList.add('is-ticked'); }, 620);
    }
    est.addEventListener('change', tick);
    est.addEventListener('input', tick);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { tick(); io.disconnect(); }
      }, { rootMargin: '0px 0px -20% 0px' });
      io.observe(bar);
    } else { bar.classList.add('is-ticked'); }
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  }
})();
