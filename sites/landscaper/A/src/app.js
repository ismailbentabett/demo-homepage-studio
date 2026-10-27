/* landscaper-A: depth gauge (signature rail), overseeding countdown, pinned horizon story. */
(function () {
  if (!window.SW) return;

  /* Depth gauge: --depth-pct follows how far down the soil profile the reader is. Not motion, just state. */
  SW.mod('depth-gauge', function () {
    var gauge = document.querySelector('.depth-gauge');
    if (!gauge) return;
    var ticking = false;
    function update() {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, Math.max(0, (window.pageYOffset / max) * 100)) : 0;
      gauge.style.setProperty('--depth-pct', pct.toFixed(1));
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  });

  /* Countdown to the fall fescue window (Sept 15 to Oct 15). The static text stays when JS is off. */
  SW.mod('countdown', function () {
    var el = document.querySelector('[data-countdown-days]');
    if (!el) return;
    var label = el.parentElement.querySelector('.countdown-label');
    var day = 864e5;
    var now = new Date();
    var y = now.getFullYear();
    var start = new Date(y, 8, 15), end = new Date(y, 9, 15);
    if (now > end) { start = new Date(y + 1, 8, 15); end = new Date(y + 1, 9, 15); }
    if (now >= start && now <= end) {
      el.textContent = Math.ceil((end - now) / day) + ' days left';
      if (label) label.textContent = 'Fescue seeding window is open';
    } else {
      el.textContent = Math.ceil((start - now) / day) + ' days';
      if (label) label.textContent = 'Until the next fescue seeding window';
    }
  });

  /* Motion only from here. */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  SW.mod('horizon-story', function () {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    var story = document.querySelector('#profile');

    ScrollTrigger.matchMedia({
      /* Pinned soil-profile story: sticky stage, roots draw down, one layer and one fix per step. */
      '(min-width: 640px)': function () {
        if (!story) return;
        var steps = 4;
        var w = window.innerWidth;
        function setVh() { story.style.setProperty('--vh', window.innerHeight + 'px'); }
        function onResize() { if (window.innerWidth !== w) { w = window.innerWidth; setVh(); } }
        setVh();
        window.addEventListener('resize', onResize);
        story.classList.add('is-pinned');
        story.setAttribute('data-active', '1');
        var st = ScrollTrigger.create({
          trigger: story,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: function (self) {
            var p = self.progress;
            story.style.setProperty('--sw-p', p.toFixed(3));
            var n = Math.min(steps, Math.floor(p * steps) + 1);
            if (story.getAttribute('data-active') !== String(n)) story.setAttribute('data-active', String(n));
          }
        });
        ScrollTrigger.refresh();
        return function () {
          st.kill();
          window.removeEventListener('resize', onResize);
          story.classList.remove('is-pinned');
          story.style.removeProperty('--sw-p');
          story.setAttribute('data-active', '1');
        };
      },

      /* Phone: no pin. The core draws its roots once as it enters. */
      '(max-width: 639px)': function () {
        if (!story) return;
        var roots = story.querySelectorAll('.core__roots path');
        var tw = gsap.fromTo(roots, { strokeDashoffset: 1 }, {
          strokeDashoffset: 0, duration: 1.4, ease: 'power2.out', stagger: 0.12,
          scrollTrigger: { trigger: story.querySelector('.core'), start: 'top 80%', once: true }
        });
        return function () { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(roots, { clearProps: 'strokeDashoffset' }); };
      }
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  });
})();
