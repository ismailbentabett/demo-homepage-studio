/* carpenter-C app.js: the triple-decker is the navigation, and it builds as you scroll */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  var motionOn = function () { return !SW.reduced && root.classList.contains('sw-motion'); };

  /* House rail: light the floor you are standing on (works with or without motion) */
  SW.mod('house-rail', function () {
    var rail = document.querySelector('[data-house]');
    if (!rail || !('IntersectionObserver' in window)) return;
    var map = { 'floor-1': '1', 'services': '1', 'floor-2': '2', 'proof': '2', 'floor-3': '3', 'area': '3', 'contact': '3' };
    var links = rail.querySelectorAll('.hr-fl');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var f = map[en.target.id] || '';
        links.forEach(function (a) {
          var on = a.getAttribute('data-floor') === f;
          a.classList.toggle('is-active', on);
          if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    ['hero'].concat(Object.keys(map)).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  });

  /* Mobile bar waits until the hero buttons have scrolled away */
  SW.mod('bar-hold', function () {
    var bar = document.querySelector('[data-mobilebar]');
    var ctas = document.querySelector('[data-hero-ctas]');
    if (!bar || !ctas || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      var visible = entries[entries.length - 1].isIntersecting;
      bar.classList.toggle('is-held', visible);
      if (visible) bar.inert = true;
      else if (!bar.classList.contains('is-hidden')) bar.inert = false;
    });
    io.observe(ctas);
  });

  /* Safety check: the chosen porch lights on the drawn house, rust when it needs work */
  SW.mod('porch-check', function () {
    var box = document.querySelector('[data-checklist]');
    if (!box) return;
    var card = box.querySelector('.check-result');
    var floors = box.querySelectorAll('.mh-fl');
    var railFloors = document.querySelectorAll('.house-rail .hr-fl');
    function update() {
      var n = box.querySelectorAll('.checklist-items input:checked').length;
      var pick = box.querySelector('input[name="porch-floor"]:checked');
      var f = pick ? pick.value : '1';
      var level = n === 0 ? 0 : n === 1 ? 1 : n < 4 ? 2 : 3;
      if (card) card.setAttribute('data-level', String(level));
      floors.forEach(function (r) { r.classList.toggle('is-pick', r.getAttribute('data-mh') === f); });
      railFloors.forEach(function (a) { a.classList.toggle('is-flag', level >= 2 && a.getAttribute('data-floor') === f); });
    }
    box.addEventListener('change', update);
    update();
  });

  /* Baluster rules draw on entry */
  SW.mod('baluster-draw', function () {
    if (!motionOn()) return;
    var rules = document.querySelectorAll('.baluster-rule');
    if (!rules.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    rules.forEach(function (r) { io.observe(r); });
  });

  /* Story: each porch on the rail builds (posts, rail, balusters) as its floor enters; the hero house drifts */
  SW.mod('house-build', function () {
    if (!motionOn()) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var hero = document.getElementById('hero');
        if (hero) {
          gsap.to('.hero-dwg, .floor-nav', {
            yPercent: 7, ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
          });
        }
        ['1', '2', '3'].forEach(function (f) {
          var link = document.querySelector('.hr-fl[data-floor="' + f + '"]');
          var band = document.getElementById('floor-' + f);
          if (!link || !band) return;
          var parts = ['.p-post', '.p-rail', '.p-bal'].map(function (s) { return link.querySelector(s); }).filter(Boolean);
          gsap.set(parts, { strokeDashoffset: 1 });
          var tl = gsap.timeline({
            scrollTrigger: { trigger: band, start: 'top 90%', end: 'top 35%', scrub: 0.6 }
          });
          tl.to(parts[0], { strokeDashoffset: 0, ease: 'none', duration: 1 })
            .to(parts[1], { strokeDashoffset: 0, ease: 'none', duration: 1 })
            .to(parts[2], { strokeDashoffset: 0, ease: 'none', duration: 1.2 });
        });
      }
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  });
})();
