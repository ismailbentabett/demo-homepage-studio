/* painter-B · gallon formula (tool), test-card pulls (signature), prep layers story, big test-card scrub. */
(function () {
  'use strict';
  var SW = window.SW || {};
  var root = document.documentElement;

  /* ---- gallon calculator: works for everyone (it is a tool, not motion) ---- */
  function initGallons() {
    var form = document.querySelector('[data-gallons]');
    if (!form) return;
    var out = {
      gal: form.querySelector('[data-g-gal]'),
      area: form.querySelector('[data-g-area]'),
      coats: form.querySelector('[data-g-coats]'),
      buy: form.querySelector('[data-g-buy]'),
      cans: form.querySelectorAll('.can')
    };
    function num(name, min, max, dflt) {
      var el = form.elements[name];
      var v = parseFloat(el && el.value);
      if (!isFinite(v)) v = dflt;
      return Math.min(max, Math.max(min, v));
    }
    function update() {
      var L = num('length', 4, 60, 12), W = num('width', 4, 60, 12), H = num('height', 7, 20, 9);
      var doors = num('doors', 0, 8, 1), wins = num('windows', 0, 12, 2), coats = Math.round(num('coats', 1, 3, 2));
      var area = Math.max(0, Math.round(2 * (L + W) * H - doors * 21 - wins * 15));
      var gal = Math.round((area * coats / 350) * 10) / 10;
      var buy = Math.max(1, Math.ceil(gal));
      out.gal.textContent = gal.toFixed(1);
      out.area.textContent = String(area);
      out.coats.textContent = String(coats);
      out.buy.textContent = String(buy);
      for (var i = 0; i < out.cans.length; i++) out.cans[i].classList.toggle('is-on', i < Math.min(out.cans.length, buy));
    }
    form.addEventListener('input', update);
    form.addEventListener('submit', function (e) { e.preventDefault(); update(); });
    update();
  }

  /* ---- motion (signature + stories) ---- */
  function initMotion() {
    if (SW.reduced || !root.classList.contains('sw-motion')) return;

    // pullcard films draw once when their ticket grid comes into view
    var draws = document.querySelectorAll('[data-draw]');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.02, rootMargin: '0px 0px -5% 0px' });
      draws.forEach(function (d) { io.observe(d); });
    } else {
      draws.forEach(function (d) { d.classList.add('is-in'); });
    }

    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // the big test card: the scroll pulls the paint across the test card (no pin, every width)
    var big = document.querySelector('.bigpull');
    if (big) {
      var setCov = function (p) { big.style.setProperty('--cov', (28 + p * 68).toFixed(2) + '%'); };
      ScrollTrigger.create({
        trigger: big,
        start: 'top 85%',
        end: 'bottom 30%',
        scrub: true,
        onUpdate: function (self) { setCov(self.progress); },
        onLeave: function () { setCov(1); }
      });
    }

    // prep story: layers stack on the board as the four steps pass (sticky on ≥ 900px only)
    var track = document.querySelector('.prep__track');
    var board = document.querySelector('.board');
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        if (!track) return;
        var st = ScrollTrigger.create({
          trigger: track,
          start: 'top top+=' + (parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) || 68),
          end: 'bottom bottom',
          onUpdate: function (self) {
            var n = Math.min(4, Math.floor(self.progress * 4) + 1);
            if (track.getAttribute('data-active') !== String(n)) track.setAttribute('data-active', String(n));
            if (board) board.style.setProperty('--prog', (n / 4).toFixed(2));
          }
        });
        track.setAttribute('data-active', '1');
        if (board) board.style.setProperty('--prog', '0.25');
        st.refresh();
        return function () {
          track.removeAttribute('data-active');
          if (board) board.style.removeProperty('--prog');
        };
      }
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }

  function start() { initGallons(); initMotion(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
