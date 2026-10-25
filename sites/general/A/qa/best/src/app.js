/* general-A signature: crosstie track with advancing today-line */
(function () {
  if (typeof SW === 'undefined') return;

  /* --- Signature moment: hero rails draw + h1 line-mask reveal --- */
  SW.mod('signature', function () {
    if (SW.reduced) return;
    var hero = document.querySelector('.hero');
    if (!hero) return;

    gsap.set('.rail', { scaleY: 0, transformOrigin: 'top center' });
    gsap.to('.rail', {
      scaleY: 1,
      duration: 0.9,
      ease: 'power2.out',
      delay: 0.1
    });

    var lines = hero.querySelectorAll('[data-split="lines"] .line-inner');
    if (lines.length) {
      gsap.to(lines, {
        y: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power3.out',
        delay: 0.4
      });
    }
  });

  /* --- Track story: today-line scrub on desktop, clip reveal on mobile --- */
  SW.mod('track-story', function () {
    var section = document.querySelector('.track-story');
    if (!section) return;

    var ties = section.querySelectorAll('.tie');
    var todayLine = section.querySelector('[data-today-line]');

    if (!SW.reduced && window.matchMedia('(min-width: 640px)').matches && todayLine && ties.length) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
        onUpdate: function (self) {
          var progress = self.progress;
          todayLine.style.top = (progress * 100) + '%';

          ties.forEach(function (tie) {
            var rect = tie.getBoundingClientRect();
            var sectionRect = section.getBoundingClientRect();
            var tieProgress = (rect.top - sectionRect.top) / (sectionRect.height);
            if (tieProgress < progress) {
              tie.classList.add('is-done');
            } else {
              tie.classList.remove('is-done');
            }
          });
        }
      });
    }

    /* Mobile: clip reveal per tie via reveal module hook */
    if (!SW.reduced) {
      ties.forEach(function (tie) {
        tie.setAttribute('data-reveal', 'clip');
      });
    }
  });

  /* --- Budget station: animate mini-track bars on estimator submit --- */
  SW.mod('budget-station', function () {
    if (SW.reduced) return;
    var form = document.querySelector('[data-est-form]');
    var output = document.querySelector('[data-est-output]');
    if (!form || !output) return;

    form.addEventListener('submit', function () {
      setTimeout(function () {
        if (output.hidden) return;
        var bars = output.querySelectorAll('.mini-track__bar-fill');
        if (!bars.length) return;
        gsap.fromTo(bars,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.9, stagger: 0.12, ease: 'power2.inOut' }
        );
      }, 50);
    });
  });

  /* --- Refresh ScrollTrigger after fonts load --- */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  }
})();