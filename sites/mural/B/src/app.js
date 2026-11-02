/* mural-B app.js — signature + scroll stories */
(function () {
  if (!window.SW) return;
  var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');
  if (reduced) return;

  /* === Intro: crop marks draw + color bar fills === */
  function introAnim() {
    var crops = document.querySelectorAll('#hero .crop');
    var swatches = document.querySelectorAll('#hero .color-bar .swatch');
    if (!crops.length) return;

    var tl = gsap.timeline({ delay: 0.1 });
    crops.forEach(function (c, i) {
      gsap.set(c, { opacity: 0, scale: 0.5, transformOrigin: 'center' });
      tl.to(c, { opacity: 0.5, scale: 1, duration: 0.4, ease: 'power2.out' }, i * 0.08);
    });
    swatches.forEach(function (s, i) {
      gsap.set(s, { scaleY: 0, transformOrigin: 'top' });
      tl.to(s, { scaleY: 1, duration: 0.3, ease: 'power2.out' }, 0.3 + i * 0.2);
    });
  }

  /* === Scroll story: pinned proof sequence (desktop only) === */
  function proofStory() {
    var section = document.getElementById('process');
    if (!section) return;
    var cards = section.querySelectorAll('.proof-card');
    if (cards.length < 2) return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=165svh',
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        });
        cards.forEach(function (card, i) {
          if (i === 0) return;
          gsap.set(card, { opacity: 0, y: 40 });
          tl.to(card, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, i * 0.6);
        });
      }
    });
  }

  /* === Estimator sketch fill === */
  function estSketch() {
    var est = document.querySelector('[data-estimator]');
    if (!est) return;
    var fill = est.querySelector('.sk-fill');
    var sqftEl = est.querySelector('[data-est-sqft]');
    if (!fill || !sqftEl) return;

    var observer = new MutationObserver(function () {
      var txt = sqftEl.textContent || '';
      var num = parseFloat(txt.replace(/[^0-9.]/g, ''));
      if (!num || isNaN(num)) {
        gsap.to(fill, { attr: { width: 0 }, duration: 0.4, ease: 'power2.out' });
        return;
      }
      var max = 2000;
      var pct = Math.min(num / max, 1);
      gsap.to(fill, { attr: { width: 180 * pct }, duration: 0.6, ease: 'power2.out' });
    });
    observer.observe(sqftEl, { childList: true, characterData: true, subtree: true });
  }

  /* === Finish check tool (JS enhancement) === */
  function finishCheck() {
    var form = document.querySelector('[data-hook="finish-check"]');
    if (!form) return;
    var result = form.querySelector('[data-ff-result]');
    if (!result) return;

    var plans = {
      stucco: { north: 'Acrylic primer, two coats exterior acrylic, UV clear coat.', south: 'Acrylic primer, two coats exterior acrylic, UV clear coat + sacrificial anti-graffiti wax.', east: 'Acrylic primer, two coats exterior acrylic, UV clear coat.', west: 'Acrylic primer, two coats exterior acrylic, UV clear coat + sacrificial anti-graffiti wax.' },
      brick: { north: 'Masonry primer, mineral silicate paint, breathable sealer.', south: 'Masonry primer, mineral silicate paint, UV-stable sealer + anti-graffiti coat.', east: 'Masonry primer, mineral silicate paint, breathable sealer.', west: 'Masonry primer, mineral silicate paint, UV-stable sealer + anti-graffiti coat.' },
      block: { north: 'Block filler, masonry primer, exterior acrylic, clear seal.', south: 'Block filler, masonry primer, exterior acrylic, UV clear + anti-graffiti.', east: 'Block filler, masonry primer, exterior acrylic, clear seal.', west: 'Block filler, masonry primer, exterior acrylic, UV clear + anti-graffiti.' },
      wood: { north: 'Oil primer, two coats exterior acrylic enamel, spar urethane topcoat.', south: 'Oil primer, two coats exterior acrylic enamel, UV spar urethane + anti-graffiti.', east: 'Oil primer, two coats exterior acrylic enamel, spar urethane topcoat.', west: 'Oil primer, two coats exterior acrylic enamel, UV spar urethane + anti-graffiti.' },
      metal: { north: 'Rust-inhibitive primer, oil-based enamel, clear polyurethane.', south: 'Rust-inhibitive primer, oil-based enamel, UV polyurethane + anti-graffiti.', east: 'Rust-inhibitive primer, oil-based enamel, clear polyurethane.', west: 'Rust-inhibitive primer, oil-based enamel, UV polyurethane + anti-graffiti.' }
    };

    function update() {
      var mat = form.querySelector('[name="material"]').value;
      var sun = form.querySelector('[name="sun"]').value;
      var plan = (plans[mat] && plans[mat][sun]) || 'Call us to confirm your wall\'s finish plan.';
      result.textContent = plan;
    }

    form.addEventListener('change', update);
    update();
  }

  /* === Timeline counter === */
  function timelineTool() {
    var form = document.querySelector('[data-hook="timeline"]');
    if (!form) return;
    var input = form.querySelector('[name="target"]');
    var result = form.querySelector('[data-tl-result]');
    if (!input || !result) return;

    input.addEventListener('change', function () {
      var val = input.value;
      if (!val) { result.textContent = ''; return; }
      var target = new Date(val + 'T00:00:00');
      if (isNaN(target.getTime())) { result.textContent = 'Enter a valid date.'; return; }
      var now = new Date();
      var diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
      if (diff < 14) {
        result.textContent = 'That date is very close. Call ' + SW.facts.biz.phone + ' to check availability.';
        return;
      }
      var sketchDays = Math.max(7, Math.round(diff * 0.3));
      var approveDays = Math.max(3, Math.round(diff * 0.15));
      var paintDays = Math.max(3, diff - sketchDays - approveDays);
      var sketchDate = new Date(target); sketchDate.setDate(sketchDate.getDate() - sketchDays - approveDays);
      var approveDate = new Date(target); approveDate.setDate(approveDate.getDate() - paintDays);
      var fmt = function (d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); };
      result.innerHTML = 'Sketch by ' + fmt(sketchDate) + ' · Approve by ' + fmt(approveDate) + ' · Paint ' + fmt(approveDate) + ' – ' + fmt(target) + ' (' + paintDays + ' days on site).';
    });
  }

  /* === Init after fonts ready === */
  document.fonts.ready.then(function () {
    gsap.registerPlugin(ScrollTrigger);
    introAnim();
    proofStory();
    estSketch();
    finishCheck();
    timelineTool();
    ScrollTrigger.refresh();
  });
})();