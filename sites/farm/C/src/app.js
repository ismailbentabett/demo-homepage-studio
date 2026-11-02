/* farm-C signature: Wiregrass almanac month marker + field-to-stand wipe */
(function () {
  if (typeof SW === 'undefined') return;
  var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');
  if (reduced) return;

  document.fonts.ready.then(function () {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });

  /* ── Intro: DrawSVG county roads (if SVG exists) ── */
  var introPaths = document.querySelectorAll('.hero__map path[data-draw]');
  if (introPaths.length && typeof DrawSVGPlugin !== 'undefined' && typeof gsap !== 'undefined') {
    gsap.set(introPaths, { drawSVG: '0%' });
    gsap.to(introPaths, {
      drawSVG: '100%',
      duration: 1.4,
      ease: 'power2.out',
      delay: 0.2,
      onComplete: function () {
        var activeMark = document.querySelector('.hero .month-mark.is-active');
        if (activeMark) gsap.from(activeMark, { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' });
      }
    });
  }

  /* ── Scroll story 1: almanac rail month activation via --sw-p ── */
  var almanacSections = document.querySelectorAll('[data-sw-signature="almanac-month"]');
  if (almanacSections.length && typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    almanacSections.forEach(function (sec) {
      var marks = sec.querySelectorAll('.month-mark');
      if (!marks.length) return;
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 60%',
        end: 'bottom 40%',
        onToggle: function (self) {
          if (!self.isActive) return;
          marks.forEach(function (m) { m.classList.remove('is-active'); });
          var active = sec.querySelector('.month-mark[data-active], .month-mark.is-active');
          if (active) active.classList.add('is-active');
        }
      });
    });
  }

  /* ── Scroll story 2: field-to-stand clip-path wipe ── */
  var breakSection = document.querySelector('#field-break');
  if (breakSection && typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    var breakImg = breakSection.querySelector('.break__frame img, .break__media img');
    if (breakImg) {
      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          gsap.fromTo(breakImg,
            { clipPath: 'inset(0 100% 0 0)' },
            {
              clipPath: 'inset(0 0% 0 0)',
              ease: 'none',
              scrollTrigger: {
                trigger: breakSection,
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: true
              }
            }
          );
        }
      });
    }
  }

  /* ── Entrance patterns: text rise + image unclip via kit reveal ── */
  /* Handled by kit/lib/reveal.js via [data-reveal] and [data-unclip] classes added at build time */
})();