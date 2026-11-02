/* irrigation-B app.js — coverage-grid signature + audit story */
(function () {
  if (!window.SW) return;

  /* Signature: coverage-grid cups fill via --sw-p as sections enter view */
  SW.mod('coverage-grid', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    var sigSections = document.querySelectorAll('[data-sw-signature="coverage-grid"]');
    if (!sigSections.length) return;

    var heroCups = document.querySelectorAll('.cup-grid--hero .cup');
    if (!heroCups.length) return;

    /* Intro: staggered cup fill on load */
    heroCups.forEach(function (cup, i) {
      var target = parseFloat(cup.style.getPropertyValue('--fill')) || 0.5;
      cup.style.setProperty('--fill', '0');
      setTimeout(function () {
        cup.style.setProperty('--fill', String(target));
      }, 200 + i * 60);
    });

    /* Scroll-driven: update a global --sw-p that footer cups can reference */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: function (self) {
          document.documentElement.style.setProperty('--sw-p', self.progress.toFixed(3));
        }
      });

      /* Refresh after fonts ready */
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () {
          ScrollTrigger.refresh();
        });
      }
    }
  });
})();