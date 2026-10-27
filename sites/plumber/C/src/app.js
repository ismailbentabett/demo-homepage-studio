/* plumber-C · The Thaw Issue: folio rail turns with each department; The Double draws itself on scroll. */
(function () {
  if (!window.SW) return;

  SW.mod('thaw', function () {
    /* Folio rail: the page number that advances (works with or without motion). */
    var rail = document.querySelector('[data-folio-rail]');
    var num = rail && rail.querySelector('.folio__num');
    var name = rail && rail.querySelector('.folio__name');
    var secs = document.querySelectorAll('[data-folio]');
    if (rail && num && name && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var n = e.target.getAttribute('data-folio');
          if (num.textContent === n) return;
          num.textContent = n;
          name.textContent = e.target.getAttribute('data-folio-name') || '';
          rail.classList.remove('is-turning'); void rail.offsetWidth; rail.classList.add('is-turning');
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      secs.forEach(function (s) { io.observe(s); });
    }

    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    /* Story: The Double. Pipes draw in order as the reader scrolls past the cutaway. */
    var fig = document.querySelector('[data-draw]');
    if (fig) {
      var paths = fig.querySelectorAll('.dr');
      var tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 80%', end: 'center 45%', scrub: 0.6 } });
      paths.forEach(function (p, i) {
        var len = p.getTotalLength ? p.getTotalLength() : 600;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(p, { strokeDashoffset: 0, ease: 'none', duration: 1 }, i * 0.45);
      });
      var labs = fig.querySelectorAll('.db-lab, .db-num');
      if (labs.length) tl.from(labs, { opacity: 0, y: 6, stagger: 0.05, duration: 0.4 }, 0.3);
    }

    /* Cover plate: slow parallax as the cover scrolls away. */
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        var plate = document.querySelector('.plate--cover svg');
        if (plate) gsap.to(plate, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      }
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
