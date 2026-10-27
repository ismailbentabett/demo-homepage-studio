/* electrician-A signature: one-line trace + scroll stories */
(function () {
  if (!window.SW) return;

  /* Signature: copper line draw + node activation via ScrollTrigger */
  SW.mod('signature', function () {
    var nodes = document.querySelectorAll('.one-line__node');
    var sections = document.querySelectorAll('[data-sw-signature]');
    if (!nodes.length || !sections.length) return;

    /* Inject trace SVG into each one-line container for DrawSVG animation */
    var hasMotion = !SW.reduced && document.documentElement.classList.contains('sw-motion');
    var hasDrawSVG = hasMotion && typeof gsap !== 'undefined' && typeof DrawSVGPlugin !== 'undefined';

    if (hasDrawSVG) {
      gsap.registerPlugin(DrawSVGPlugin);
      document.querySelectorAll('.one-line').forEach(function (line) {
        var trace = document.createElement('div');
        trace.className = 'one-line__trace' + (line.classList.contains('one-line--right') ? ' one-line__trace--right' : '');
        trace.innerHTML = '<svg preserveAspectRatio="none"><path d="M0,0 L0,100%"/></svg>';
        line.parentNode.insertBefore(trace, line.nextSibling);
        var path = trace.querySelector('path');
        gsap.set(path, { drawSVG: '0%' });

        /* Find which section this line belongs to by walking up or matching index */
        var parentSec = line.closest('.sec');
        if (parentSec) {
          ScrollTrigger.create({
            trigger: parentSec,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 0.5,
            onUpdate: function (self) {
              gsap.to(path, { drawSVG: (self.progress * 100) + '%', duration: 0.1, overwrite: true });
            }
          });
        }
      });
    }

    /* Node activation: toggle is-active as sections enter view */
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = Array.prototype.indexOf.call(sections, entry.target);
          nodes.forEach(function (n, i) {
            n.classList.toggle('is-active', i <= idx);
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(function (s) { observer.observe(s); });
  });

  /* Scroll story: hero entrance (GSAP) */
  SW.mod('hero-story', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();

      var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      /* Photo slides in from right */
      var photo = document.querySelector('.offset-frame__media');
      if (photo) {
        gsap.set(photo, { x: 60, opacity: 0 });
        tl.to(photo, { x: 0, opacity: 1, duration: 0.6 }, 0);
      }

      /* h1 line-mask reveal handled by split module + CSS; just trigger is-in */
      var h1 = document.querySelector('#hero h1');
      if (h1) {
        tl.add(function () { h1.classList.add('is-in'); }, 0.2);
      }
    });
  });

  /* Scroll story: break photo unclip */
  SW.mod('break-story', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var breakPhoto = document.querySelector('#break-process .statement-stack__photo');
    if (!breakPhoto) return;

    ScrollTrigger.create({
      trigger: '#break-process',
      start: 'top 85%',
      once: true,
      onEnter: function () {
        breakPhoto.classList.add('is-in');
      }
    });
  });

  /* EV Load Estimator: render SVG diagram in result */
  SW.mod('ev-diagram', function () {
    var form = document.querySelector('[data-estimator]');
    if (!form) return;
    var resultEl = form.querySelector('.tool-result');
    if (!resultEl) return;

    /* Observe mutations to inject diagram after kit populates text */
    var mo = new MutationObserver(function () {
      var text = resultEl.textContent || '';
      if (!text || resultEl.querySelector('.load-diagram')) return;

      /* Parse capacity info from result text */
      var serviceMatch = text.match(/(\d+)\s*amp/i);
      var serviceSize = serviceMatch ? parseInt(serviceMatch[1], 10) : 200;
      var fits = /likely fits/i.test(text);
      var needsUpgrade = /needs upgrade|may need/i.test(text);

      /* Calculate visual load bars */
      var loads = form.querySelectorAll('[name="loads"]:checked');
      var loadCount = loads.length;
      var chargerAmps = parseInt(form.querySelector('[name="amps"]').value, 10) || 32;
      var totalLoadPct = Math.min(100, Math.round(((loadCount * 15) + chargerAmps) / serviceSize * 100));
      var barColor = fits ? 'var(--accent)' : (needsUpgrade ? '#c0392b' : 'var(--muted)');

      var svg = '<div class="load-diagram">' +
        '<svg viewBox="0 0 200 120" role="img" aria-label="Load calculation diagram showing ' + totalLoadPct + '% of ' + serviceSize + ' amp capacity">' +
        '<line class="bus" x1="20" y1="10" x2="20" y2="110"/>' +
        '<text x="8" y="8" text-anchor="middle">' + serviceSize + 'A</text>' +
        '<rect class="load-bar" x="30" y="' + (110 - totalLoadPct) + '" width="40" height="' + totalLoadPct + '" fill="' + barColor + '"/>' +
        '<text x="50" y="' + (105 - totalLoadPct) + '" text-anchor="middle">' + totalLoadPct + '%</text>' +
        '<line class="capacity" x1="25" y1="' + (110 - 80) + '" x2="75" y2="' + (110 - 80) + '"/>' +
        '<text x="80" y="' + (114 - 80) + '">80% safe</text>' +
        '<line class="trace" x1="70" y1="' + (110 - totalLoadPct / 2) + '" x2="120" y2="' + (110 - totalLoadPct / 2) + '"/>' +
        '<circle cx="130" cy="' + (110 - totalLoadPct / 2) + '" r="8" fill="' + barColor + '"/>' +
        '<text x="145" y="' + (114 - totalLoadPct / 2) + '">' + (fits ? 'Fits' : (needsUpgrade ? 'Upgrade' : 'Check')) + '</text>' +
        '</svg></div>';

      resultEl.insertAdjacentHTML('beforeend', svg);
    });

    mo.observe(resultEl, { childList: true, subtree: true, characterData: true });
  });
})();