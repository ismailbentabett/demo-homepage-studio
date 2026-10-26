/* cleaning-B — Running Receipt signature + scroll stories */
(function () {
  if (!window.SW) return;

  /* Signature: receipt strip wipe-in on scroll via clip-path */
  SW.mod('receipt-signature', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    var strips = document.querySelectorAll('[data-sw-signature="receipt"] .receipt-strip');
    if (!strips.length) return;

    gsap.registerPlugin(ScrollTrigger);

    strips.forEach(function (strip) {
      gsap.fromTo(strip,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: strip,
            start: 'top 85%',
            once: true
          }
        }
      );
    });
  });

  /* Story: hero h1 line-mask reveal handled by split module + CSS;
     this adds staggered cover lines rise */
  SW.mod('hero-entrance', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    var lines = document.querySelectorAll('.hero__lines li');
    if (!lines.length) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(lines,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.52,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.4,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          once: true
        }
      }
    );
  });

  /* Refresh ScrollTrigger after fonts load */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  }
})();