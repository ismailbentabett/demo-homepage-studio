/* tile-C signature + glue */
(function () {
  if (typeof SW === 'undefined') return;

  /* Hex map fill on scroll (signature) */
  SW.mod('hex-map', function () {
    var map = document.querySelector('[data-sw-signature="hex-map"] .hex-map');
    if (!map) return;
    var tiles = map.querySelectorAll('.hex-map__tile');
    if (!tiles.length) return;

    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) {
      tiles.forEach(function (t) { t.style.opacity = '1'; });
      return;
    }

    tiles.forEach(function (t) { t.style.opacity = '0'; t.style.transition = 'opacity 400ms var(--ease-out)'; });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var idx = Array.prototype.indexOf.call(tiles, e.target);
          setTimeout(function () { e.target.style.opacity = '1'; }, idx * 60);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });

    tiles.forEach(function (t) { io.observe(t); });
  });

  /* Hero hex mask intro */
  SW.mod('hex-intro', function () {
    var hero = document.querySelector('.sec-hero__photo.hex-mask');
    if (!hero) return;
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    hero.style.transform = 'scale(0.3)';
    hero.style.opacity = '0';
    hero.style.transition = 'transform 900ms var(--ease-out), opacity 600ms var(--ease-out)';

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.style.transform = 'scale(1)';
        hero.style.opacity = '1';
      });
    });
  });

  /* Grout color preview */
  SW.mod('grout-preview', function () {
    var card = document.querySelector('.grout-preview');
    if (!card) return;

    var tileBtns = card.querySelectorAll('[data-tile]');
    var groutBtns = card.querySelectorAll('[data-grout]');
    var result = card.querySelector('[data-grout-result]');
    var note = card.querySelector('[data-grout-note]');
    var currentTile = '#f4f1ec';
    var currentGrout = '#f8f6f2';

    function update() {
      if (!result) return;
      var tileEl = result.querySelector('.grout-tile');
      var lineEl = result.querySelector('.grout-line');
      if (tileEl) tileEl.style.background = currentTile;
      if (lineEl) lineEl.style.background = currentGrout;
      if (note) note.textContent = 'White grout shows dirt faster in a steamy bathroom. Charcoal hides it but darkens the room.';
    }

    tileBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tileBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        currentTile = btn.style.getPropertyValue('--tile').trim();
        update();
      });
    });

    groutBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        groutBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        currentGrout = btn.style.getPropertyValue('--grout').trim();
        update();
      });
    });
  });

  /* H1 line-mask reveal after hex intro */
  SW.mod('h1-reveal', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    var lines = document.querySelectorAll('.split-line');
    if (!lines.length) return;

    setTimeout(function () {
      lines.forEach(function (line, i) {
        setTimeout(function () { line.classList.add('is-in'); }, i * 70);
      });
    }, 900);
  });
})();