/* consulting-C signature + scroll stories */
(function () {
  if (!window.SW) return;

  /* Signature: river rail injected into every [data-sw-signature] section */
  SW.mod('signature', function () {
    var sections = document.querySelectorAll('[data-sw-signature]');
    sections.forEach(function (sec) {
      if (sec.querySelector('.river-rail')) return;
      var rail = document.createElement('div');
      rail.className = 'river-rail';
      rail.setAttribute('aria-hidden', 'true');
      rail.innerHTML = '<span></span><span></span><span></span>';
      sec.appendChild(rail);
    });
  });

  /* Scroll story: h1 line-mask reveal */
  SW.mod('hero-reveal', function () {
    if (SW.reduced) return;
    if (!document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });

    /* Line mask stagger on hero h1 */
    var lines = document.querySelectorAll('.hero .split-line');
    if (lines.length) {
      gsap.set(lines, { overflow: 'clip' });
      var innerLines = document.querySelectorAll('.hero .split-line-inner');
      gsap.to(innerLines, {
        y: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'cubic-bezier(.2,.7,.1,1)',
        delay: 0.3,
        onStart: function () {
          lines.forEach(function (l) { l.classList.add('is-in'); });
        }
      });
    }
  });

  /* Scroll story: succession convergence (desktop only) */
  SW.mod('succession-story', function () {
    if (SW.reduced) return;
    if (!document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var succession = document.getElementById('succession');
        if (!succession) return;

        var rails = document.querySelectorAll('[data-sw-signature] .river-rail');
        if (!rails.length) return;

        /* As succession enters view, converge the three rails into one */
        ScrollTrigger.create({
          trigger: '#succession',
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          onUpdate: function (self) {
            var p = self.progress;
            rails.forEach(function (rail) {
              var spans = rail.querySelectorAll('span');
              if (spans.length >= 3) {
                /* Outer rails move toward center */
                spans[0].style.transform = 'translateX(' + (p * 50) + '%)';
                spans[2].style.transform = 'translateX(-' + (p * 50) + '%)';
                spans[0].style.opacity = 0.15 + (p * 0.35);
                spans[1].style.opacity = 0.15 + (p * 0.35);
                spans[2].style.opacity = 0.15 + (p * 0.35);
              }
            });
          }
        });
      }
    });
  });
})();