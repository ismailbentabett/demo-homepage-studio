/* painter-B — TintCard Painting Co. signature + glue */
(function () {
  'use strict';

  var SW = window.SW || {};
  var reduced = SW.reduced || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* TintCard bar animation */
  function initTintCardBars() {
    var bars = document.querySelectorAll('.film-bar[data-tint-card-width]');
    if (!bars.length) return;

    bars.forEach(function (bar) {
      var w = parseFloat(bar.getAttribute('data-tint-card-width')) / 100;
      bar.style.setProperty('--dw', String(w));
    });

    if (reduced) {
      bars.forEach(function (bar) { bar.classList.add('is-drawn'); });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      bars.forEach(function (bar) { bar.classList.add('is-drawn'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-drawn');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px -5% 0px' });

    bars.forEach(function (bar) { io.observe(bar); });
  }

  /* Hero h1 line-mask reveal */
  function initLineMask() {
    var masks = document.querySelectorAll('.line-mask');
    if (!masks.length) return;

    if (reduced || !document.documentElement.classList.contains('sw-motion')) {
      masks.forEach(function (m) { m.classList.add('is-revealed'); });
      return;
    }

    var stagger = 70;
    masks.forEach(function (m, i) {
      setTimeout(function () {
        m.classList.add('is-revealed');
      }, 300 + i * stagger);
    });
  }

  /* Init on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initTintCardBars();
      initLineMask();
    });
  } else {
    initTintCardBars();
    initLineMask();
  }
})();