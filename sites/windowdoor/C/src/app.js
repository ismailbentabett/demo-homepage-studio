/* windowdoor-C · River Route Stops + Lifting Sash */
(function () {
  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }

  ready(function () {
    var SWr = window.SW;
    if (!SWr) return;
    var motion = !SWr.reduced && document.documentElement.classList.contains('sw-motion');

    /* --- estimator: glyph per product + "Send this to the form" (works with or without motion) --- */
    var est = document.querySelector('[data-estimator]');
    if (est) {
      var sel = est.querySelector('[data-est-item]');
      var size = est.querySelector('[data-est-size]');
      var sketch = est.querySelector('[data-est-sketch]');
      var send = est.querySelector('[data-est-send]');
      var services = (SWr.fact && SWr.fact('services')) || [];
      var map = [1, 2, 3, 0, 6]; /* price row -> service index */
      var counts = ['1 to 2', '3 to 6', '7 or more'];
      function idx() { var v = parseInt(sel && sel.value, 10); return isNaN(v) ? 0 : v; }
      function syncEst() {
        var i = idx();
        if (sketch) {
          Array.prototype.forEach.call(sketch.querySelectorAll('use'), function (u, k) {
            u.setAttribute('href', '#g-' + (i + 1));
            u.parentNode.style.setProperty('--gi', k);
          });
          /* restart the unclip so the row redraws */
          sketch.classList.remove('is-redraw'); void sketch.offsetWidth; sketch.classList.add('is-redraw');
        }
        if (size) size.setAttribute('aria-valuetext', counts[parseInt(size.value, 10)] + ' openings');
      }
      if (sel) sel.addEventListener('change', syncEst);
      if (size) size.addEventListener('input', syncEst);
      setTimeout(syncEst, 0);
      if (send) send.addEventListener('click', function () {
        var i = idx();
        var svc = services[map[i]] ? services[map[i]].name : '';
        SWr.prefillForm({ service: svc, count: counts[parseInt(size ? size.value : 1, 10)] }, { focus: 'era' });
      });
    }

    /* --- #age: mini-river dot travels to the picked decade --- */
    var river = document.querySelector('.age__river');
    if (river) {
      var measure = function () { river.style.setProperty('--rw', river.getBoundingClientRect().width + 'px'); };
      measure();
      window.addEventListener('resize', measure);
      var tabsRoot = river.closest('[data-tabs]');
      function placeDot() {
        var tabs = river.querySelectorAll('[data-tab]');
        var on = river.querySelector('[aria-selected="true"]');
        var dot = river.querySelector('.age__dot');
        if (!on || !dot) return;
        var r = river.getBoundingClientRect(), t = on.getBoundingClientRect();
        dot.style.transform = 'translateX(' + (t.left - r.left + t.width / 2 - 9) + 'px)';
        void tabs;
      }
      if (tabsRoot) tabsRoot.addEventListener('sw:tab', placeDot);
      window.addEventListener('resize', placeDot);
      setTimeout(placeDot, 0);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeDot);
    }

    if (!motion || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    /* --- signature story: the river draws with scroll, each stop fills and its sash lifts --- */
    var sec = document.querySelector('[data-sw-signature]');
    if (sec) {
      var route = sec.querySelector('[data-route]');
      if (route) {
        route.style.setProperty('--sw-p', 0);
        ScrollTrigger.create({
          trigger: sec, start: 'top 60%', end: 'bottom 55%', scrub: 0.4,
          onUpdate: function (self) { route.style.setProperty('--sw-p', self.progress.toFixed(4)); }
        });
      }
      sec.querySelectorAll('[data-stop]').forEach(function (stop) {
        ScrollTrigger.create({
          trigger: stop, start: 'top 55%',
          onEnter: function () { stop.classList.add('is-reached'); },
          onLeaveBack: function () { stop.classList.remove('is-reached'); }
        });
      });
    }

    /* --- hero intro: the elevation bank eases in from 0 speed (rail only, text untouched) --- */
    var rail = document.querySelector('.bank__rail');
    if (rail) gsap.from(rail, { x: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
