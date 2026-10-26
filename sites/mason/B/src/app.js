/* mason-B app.js — Flemish Bond signature + two scroll stories */
(function () {
  'use strict';

  if (!window.SW) return;
  var reduced = SW.reduced;
  var motion = document.documentElement.classList.contains('sw-motion');

  /* ── Mortar Match Live Panel ─────────────────────────────── */
  SW.mod('mortar-match', function () {
    var panel = document.querySelector('[data-match]');
    if (!panel) return;
    var bricks = panel.querySelectorAll('.brick');
    var form = document.querySelector('.match-controls');
    if (!form) return;

    function update() {
      var brickVal = form.querySelector('input[name="brick"]:checked');
      var mortarVal = form.querySelector('input[name="mortar"]:checked');
      var profileVal = form.querySelector('input[name="profile"]:checked');
      if (!brickVal || !mortarVal || !profileVal) return;
      var bc = brickVal.value;
      var mc = mortarVal.value;
      var bw = profileVal.value === 'raked' ? '3px' : profileVal.value === 'flush' ? '0px' : '2px';
      for (var i = 0; i < bricks.length; i++) {
        bricks[i].style.setProperty('--brick', bc);
        bricks[i].style.setProperty('--mortar', mc);
        bricks[i].style.setProperty('--bw', bw);
      }
      // Update border width via pseudo-element override
      var styleId = 'match-style';
      var el = document.getElementById(styleId);
      if (!el) {
        el = document.createElement('style');
        el.id = styleId;
        document.head.appendChild(el);
      }
      el.textContent = '.brick::after { border-width: ' + bw + '; }';
    }

    form.addEventListener('change', update);
    update();
  });

  /* ── Facade Elevation Pinned Story (≥640 only) ──────────── */
  SW.mod('elevation-story', function () {
    if (reduced || !motion) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var stage = document.querySelector('.elevation-stage');
    if (!stage) return;
    var hotspots = stage.querySelectorAll('.hotspot');
    if (!hotspots.length) return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.sec-elevation',
            start: 'top top',
            end: '+=275svh',
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        });

        // Light each hotspot in sequence
        for (var i = 0; i < hotspots.length; i++) {
          var card = hotspots[i].querySelector('.hotspot-card');
          var dot = hotspots[i].querySelector('.hotspot-dot');
          tl.to(dot, { scale: 1.3, duration: 0.3 }, i * 0.6)
            .to(card, { opacity: 1, visibility: 'visible', duration: 0.3 }, '<')
            .to({}, { duration: 0.3 }) // hold
            .to(card, { opacity: 0, visibility: 'hidden', duration: 0.2 }, '+=0.1')
            .to(dot, { scale: 1, duration: 0.2 }, '<');
        }
      }
    });
  });

  /* ── Estimator Sketch Draw ───────────────────────────────── */
  SW.mod('estimator-sketch', function () {
    var sketch = document.querySelector('[data-est-sketch]');
    if (!sketch) return;
    var wall = sketch.querySelector('.sk-wall');
    var joints = sketch.querySelectorAll('.sk-joint');
    if (!wall) return;

    var inputs = document.querySelectorAll('[data-est-input]');
    function draw() {
      var wInput = document.querySelector('[data-est-input="width"]');
      var sInput = document.querySelector('[data-est-input="stories"]:checked');
      if (!wInput || !sInput) return;
      var w = parseInt(wInput.value, 10);
      var stories = parseInt(sInput.value, 10);
      // Scale wall height by stories
      var baseH = 200;
      var h = baseH * (stories / 2);
      wall.setAttribute('height', h);
      // Adjust joint positions
      if (joints.length >= 2) {
        joints[0].setAttribute('y1', h * 0.33);
        joints[0].setAttribute('y2', h * 0.33);
        joints[1].setAttribute('y1', h * 0.66);
        joints[1].setAttribute('y2', h * 0.66);
      }
      // Animate stroke dashoffset on change
      if (motion && !reduced && typeof gsap !== 'undefined') {
        gsap.fromTo([wall].concat(Array.from(joints)),
          { strokeDashoffset: 400 },
          { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }
        );
      }
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', draw);
      inputs[i].addEventListener('change', draw);
    }
    draw();
  });

  /* ── Signature Intro: Mosaic Tiles Course-by-Course ──────── */
  SW.mod('signature-intro', function () {
    if (reduced || !motion) return;
    if (typeof gsap === 'undefined') return;

    var heroTiles = document.querySelectorAll('.bond-grid--hero .bond-tile');
    if (!heroTiles.length) return;

    // Bottom-up stagger: reverse order so bottom tiles appear first
    var ordered = Array.from(heroTiles).reverse();
    var tl = gsap.timeline({ delay: 0.1 });

    tl.from(ordered, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.5,
      stagger: 0.06,
      ease: 'power3.out'
    });

    // Headline rises after last tile
    var headline = document.querySelector('.bond-tile--headline h1');
    if (headline) {
      tl.from(headline, { y: 24, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.15');
    }
  });

  /* ── Refresh ScrollTrigger after fonts ───────────────────── */
  if (typeof ScrollTrigger !== 'undefined' && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }

})();