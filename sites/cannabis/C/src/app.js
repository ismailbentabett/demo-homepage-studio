/* cannabis-C signature: fog-dial + scroll stories */
(function () {
  if (typeof SW === 'undefined') return;

  /* Fog dial signature: rotates gradient from fog teal to poppy orange via --sw-p */
  SW.mod('fog-dial', function () {
    var dials = document.querySelectorAll('[data-sw-signature="fog-dial"]');
    if (!dials.length) return;

    if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
      var sections = document.querySelectorAll('.sec');
      var totalSections = sections.length;

      sections.forEach(function (sec, i) {
        var progress = i / Math.max(totalSections - 1, 1);
        sec.style.setProperty('--sw-p', progress.toFixed(3));
      });

      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
          trigger: 'main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: function (self) {
            var p = self.progress;
            dials.forEach(function (dial) {
              dial.style.setProperty('--sw-p', p.toFixed(3));
            });
          }
        });
      }
    } else {
      /* Static fallback: noon position */
      dials.forEach(function (dial) {
        dial.style.setProperty('--sw-p', '0.5');
      });
    }
  });

  /* Our-day hour-band story: pinned on desktop only */
  SW.mod('our-day-story', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var bandSection = document.querySelector('.our-day');
    if (!bandSection) return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var bands = bandSection.querySelectorAll('.hour-band');
        if (bands.length < 2) return;

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: bandSection,
            start: 'top top',
            end: '+=' + (bands.length * 55) + 'svh',
            pin: true,
            scrub: 1
          }
        });

        bands.forEach(function (band, i) {
          if (i === 0) return;
          tl.fromTo(band,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            i * 0.25
          );
        });
      }
    });
  });

  /* Area map town-pin stagger (IntersectionObserver, no pin) */
  SW.mod('area-map-story', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    var areaSection = document.querySelector('.area');
    if (!areaSection) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });

    observer.observe(areaSection);
  });

  /* Refresh ScrollTrigger after fonts load */
  if (typeof ScrollTrigger !== 'undefined' && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
})();