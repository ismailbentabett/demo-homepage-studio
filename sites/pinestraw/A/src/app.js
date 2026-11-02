/* pinestraw-A: bed-line signature + process story */
(function () {
  if (!window.SW) return;
  var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');

  /* Bed line SVG injection */
  function injectBedLine(container, variant) {
    if (!container) return;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 48 1000');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList.add('bed-line-path');
    /* Slightly irregular spade-cut line with notches */
    var d = variant === 'footer'
      ? 'M24 0 L24 80 Q24 95 12 95 L0 95'
      : 'M24 0 L24 120 L12 125 L24 130 L24 280 L12 285 L24 290 L24 440 L12 445 L24 450 L24 600 L12 605 L24 610 L24 760 L12 765 L24 770 L24 920 L12 925 L24 930 L24 1000';
    path.setAttribute('d', d);
    var len = 2200;
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = reduced ? '0' : String(len);
    svg.appendChild(path);
    container.appendChild(svg);
    return { path: path, len: len };
  }

  var heroLine = injectBedLine(document.querySelector('.bed-line-svg'), 'main');
  var footerLine = injectBedLine(document.querySelector('.bed-line-footer'), 'footer');

  /* Intro: draw bed line on load */
  if (!reduced && heroLine && typeof gsap !== 'undefined') {
    gsap.to(heroLine.path, {
      strokeDashoffset: 0,
      duration: 1.1,
      ease: 'power2.out',
      delay: 0.1
    });
  }

  /* Process story: pinned scroll on desktop only */
  if (!reduced && typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var steps = document.querySelectorAll('.process__steps .step');
        if (steps.length < 2) return;
        var section = document.getElementById('process');
        if (!section) return;
        /* Pinned story height: calc(n * 55svh + 100svh), n=6 steps */
        /* We pin the first steps container and scrub through photos */
        steps.forEach(function (step, i) {
          var img = step.querySelector('img');
          if (!img) return;
          gsap.fromTo(img,
            { clipPath: 'inset(0 0 100% 0)' },
            {
              clipPath: 'inset(0 0 0% 0)',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                end: 'top 40%',
                scrub: 1
              }
            }
          );
        });
      }
    });

    /* Refresh after fonts ready */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        ScrollTrigger.refresh();
      });
    }
  }

  /* Slope check tool logic */
  SW.mod('slope-check', function () {
    var hook = document.querySelector('[data-hook="slope-check"]');
    if (!hook) return;
    var radios = hook.querySelectorAll('input[name="slope"]');
    var downspout = hook.querySelector('input[name="downspout"]');
    var result = hook.querySelector('[data-slope-result]');
    if (!result) return;

    function update() {
      var slope = 'flat';
      radios.forEach(function (r) { if (r.checked) slope = r.value; });
      var ds = downspout && downspout.checked;
      var msg = '';
      if (slope === 'flat') {
        msg = 'Flat bed: standard 3 in spread, tuck at edge. No extra pinning needed.';
      } else if (slope === 'gentle') {
        msg = 'Gentle slope: tuck 2 in deeper at the low edge. Consider edge pins every 4 ft.';
      } else {
        msg = ds
          ? 'Steep slope + downspout: mulch border recommended at the top, deep tuck + pins at bottom. Book a washout re-tuck visit.'
          : 'Steep slope: deep tuck (4 in) at the low edge, pins every 3 ft. Long-leaf straw holds best here.';
      }
      result.textContent = msg;
    }

    radios.forEach(function (r) { r.addEventListener('change', update); });
    if (downspout) downspout.addEventListener('change', update);
    update();
  });

  /* Bale counter tool logic */
  SW.mod('bale-counter', function () {
    var hook = document.querySelector('[data-hook="bale-counter"]');
    if (!hook) return;
    var sizeSel = hook.querySelector('select[name="bed-size"]');
    var typeSel = hook.querySelector('select[name="bed-type"]');
    var result = hook.querySelector('[data-bale-result]');
    if (!result || !sizeSel || !typeSel) return;

    /* Sample bale counts per size (new vs top-up) */
    var counts = {
      small:  { new: 25, topup: 15 },
      medium: { new: 50, topup: 30 },
      long:   { new: 80, topup: 50 }
    };

    function update() {
      var size = sizeSel.value;
      var type = typeSel.value;
      var bales = (counts[size] && counts[size][type]) || 30;
      /* Price range from facts token is rendered by build; we show count + sample label */
      result.innerHTML = '<strong>' + bales + ' bales</strong> at 3 in fresh · Sample pricing applies';
    }

    sizeSel.addEventListener('change', update);
    typeSel.addEventListener('change', update);
    update();
  });
})();