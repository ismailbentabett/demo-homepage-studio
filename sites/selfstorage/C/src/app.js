/* selfstorage-C signature: tide-calendar + intro */
(function () {
  if (typeof SW === 'undefined') return;

  /* Tide calendar signature */
  SW.mod('tide-calendar', function () {
    var bands = document.querySelectorAll('[data-sw-signature="tide-calendar"], [data-tide-months]');
    if (!bands.length) return;

    var currentMonth = new Date().getMonth() + 1;

    function activateMonths(section) {
      var val = section.getAttribute('data-tide-months');
      if (!val || val === 'all') return null;
      if (val === 'reset') return currentMonth;
      return val.split(',').map(function (n) { return parseInt(n, 10); });
    }

    /* Set current month dot on hero band */
    var heroBand = document.querySelector('[data-sw-signature="tide-calendar"] .tide-band');
    if (heroBand) {
      var heroLi = heroBand.querySelector('li[data-month="' + currentMonth + '"]');
      if (heroLi) heroLi.classList.add('is-active');
    }

    /* IntersectionObserver lights story months */
    if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var months = activateMonths(entry.target);
          if (!months) return;
          var allBands = document.querySelectorAll('.tide-band');
          allBands.forEach(function (band) {
            band.querySelectorAll('li').forEach(function (li) { li.classList.remove('is-active'); });
            if (Array.isArray(months)) {
              months.forEach(function (m) {
                var li = band.querySelector('li[data-month="' + m + '"]');
                if (li) li.classList.add('is-active');
              });
            } else {
              var li = band.querySelector('li[data-month="' + months + '"]');
              if (li) li.classList.add('is-active');
            }
          });
        });
      }, { threshold: 0.3 });

      bands.forEach(function (b) {
        if (b.getAttribute('data-tide-months')) observer.observe(b);
      });
    }
  });

  /* Intro: cover photo settle + stagger lines + tide draw */
  if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
    document.fonts.ready.then(function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      var hero = document.getElementById('hero');
      if (!hero) return;

      var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      /* Photo settle from 1.05x */
      var heroImg = hero.querySelector('.hero-media img');
      if (heroImg) {
        gsap.fromTo(heroImg, { scale: 1.05 }, { scale: 1, duration: 1.2, ease: 'power2.out' });
      }

      /* Cover lines stagger up */
      var coverLines = hero.querySelectorAll('.cover-line');
      if (coverLines.length) {
        tl.from(coverLines, { y: 24, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.3);
      }

      /* Tide path draw */
      var tidePath = hero.querySelector('.tide-path');
      if (tidePath) {
        var len = tidePath.getTotalLength();
        gsap.fromTo(tidePath,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }
        );
      }

      ScrollTrigger.refresh();
    });
  }
})();