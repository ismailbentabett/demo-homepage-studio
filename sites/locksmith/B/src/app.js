/* locksmith-B · the red pen: bill story + strike-on-view. Behaviour glue for the lock counter. */
(function () {
  var root = document.documentElement;

  /* Lock counter → form hand-off (behaviour, works with or without motion). */
  SW.ready(function () {
    var go = document.querySelector('[data-locks-go]');
    if (!go) return;
    go.addEventListener('click', function () {
      var n = document.querySelectorAll('.counter__list input:checked').length;
      setTimeout(function () {
        var f = document.getElementById('f-locks');
        if (f && n) { f.value = String(n); f.dispatchEvent(new Event('input', { bubbles: true })); }
      }, 0);
    });
  });

  if (SW.reduced || !root.classList.contains('sw-motion')) return;

  SW.ready(function () {
    /* strike-on-view for the bill (under 900) and the break */
    var targets = document.querySelectorAll('.bill, .rule__in');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.45 });
      targets.forEach(function (t) { io.observe(t); });
    } else {
      targets.forEach(function (t) { t.classList.add('is-in'); });
    }

    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    var bait = document.getElementById('bait');
    var bill = bait && bait.querySelector('.bill');
    if (bait && bill) {
      ScrollTrigger.matchMedia({
        '(min-width: 900px)': function () {
          bait.classList.add('is-live');
          bait.setAttribute('data-step', '1');
          bill.classList.add('is-in');
          bill.style.setProperty('--sw-p', '0');
          var st = ScrollTrigger.create({
            trigger: bait,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: function (self) {
              var p = self.progress;
              var step = p < 0.3 ? 1 : p < 0.62 ? 2 : 3;
              if (bait.getAttribute('data-step') !== String(step)) bait.setAttribute('data-step', String(step));
              var strike = Math.min(1, Math.max(0, (p - 0.62) / 0.22));
              bill.style.setProperty('--sw-p', strike.toFixed(3));
            }
          });
          return function () {
            st.kill();
            bait.classList.remove('is-live');
            bait.removeAttribute('data-step');
            bill.style.removeProperty('--sw-p');
          };
        }
      });
    }

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
