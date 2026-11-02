/* irrigation-C signature + glue */
(function () {
  if (typeof SW === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  document.fonts.ready.then(function () {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });

  /* Soil line crack story: pinned on desktop, amplitude grows with scroll */
  var soilLines = document.querySelectorAll('.soil-line');
  if (!soilLines.length) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var sections = document.querySelectorAll('section[data-hook^="season-"]');
        if (!sections.length) return;

        sections.forEach(function (sec) {
          var line = sec.querySelector('.soil-line');
          if (!line) return;
          var isSummer = sec.id === 'summer';
          gsap.fromTo(line, { '--sw-p': 0 }, {
            '--sw-p': 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sec,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        });
      }
    });
  }

  /* Entrance reveals handled by kit/reveal via data-reveal / data-unclip attributes added at build or manually */
  var revealEls = document.querySelectorAll('[data-reveal], [data-unclip]');
  if (revealEls.length && typeof IntersectionObserver !== 'undefined') {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }
})();