/* irrigation-A signature + scroll stories */
(function () {
  if (!window.SW) return;

  // Valve-lid signature: lift clip-path on scroll per section
  SW.mod('valve-lid', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var sections = document.querySelectorAll('[data-sw-signature="valve-lid"]');
    if (!sections.length) return;

    sections.forEach(function (sec) {
      var stamp = sec.querySelector('.zone-stamp');
      if (!stamp) return;

      gsap.fromTo(stamp,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(75% at 50% 50%)',
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });
  });

  // Hero intro: photo fade-up + first line rise
  SW.mod('hero-intro', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined') return;

    var hero = document.getElementById('hero');
    if (!hero) return;

    var photo = hero.querySelector('.hero__photo img');
    var h1 = hero.querySelector('h1');

    if (photo) {
      gsap.from(photo, { opacity: 0, duration: 1.2, ease: 'power2.out', delay: 0.1 });
    }
    if (h1) {
      gsap.from(h1, { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 });
    }
  });

  // Refresh ScrollTrigger after fonts load
  if (typeof ScrollTrigger !== 'undefined' && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
})();