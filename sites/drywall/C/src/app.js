/* drywall-C · Era Plate: drawn cut-away walls that build layer by layer (--sw-p 0 → 1). */
(function () {
  var SW = window.SW;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var PLATES = {
    '1890': { href: '#plate-1890', name: 'Plate I', cap: 'horsehair plaster on wood lath, before 1920. Pin and skim.', service: 'Plaster crack repair' },
    '1920': { href: '#plate-1950', name: 'Plate II', cap: 'gypsum plaster on rock lath, 1920 to 1969. Reset, tape, skim.', service: 'Plaster crack repair' },
    '1950': { href: '#plate-1950', name: 'Plate II', cap: 'gypsum plaster on rock lath, 1920 to 1969. Reset, tape, skim.', service: 'Plaster crack repair' },
    '2005': { href: '#plate-2005', name: 'Plate III', cap: 'board, paper tape and three coats, 1970 on. Patch and refinish.', service: 'Patch repair' }
  };

  /* ---- Plate IV in the footer: the visitor's own wall ---- */
  var iv = $('[data-plate-iv]'), ivUse = $('[data-plate-iv-use]'), ivCap = $('[data-plate-iv-cap]');
  function setPlateIV(era) {
    var p = PLATES[era];
    if (!iv || !p) return;
    ivUse.setAttribute('href', p.href);
    ivCap.textContent = 'your wall: ' + p.cap;
    iv.classList.add('is-filled');
    iv.setAttribute('data-era', era);
    if (!SW || !SW.reduced) { iv.style.setProperty('--sw-p', 0); requestAnimationFrame(function () { requestAnimationFrame(function () { iv.style.setProperty('--sw-p', 1); }); }); }
  }
  if (iv) iv.style.transition = '--sw-p 1.2s cubic-bezier(.23,1,.32,1)';

  /* ---- Wall-era identifier ---- */
  var ident = $('[data-ident]');
  if (ident) {
    var say = $('[data-ident-say]', ident), cta = $('[data-ident-cta]', ident), gap = $('.ecard__gap', ident);
    var NAMES = { '1890': 'Plate I, horsehair on wood lath', '1950': 'Plate II, gypsum on rock lath', '2005': 'Plate III, drywall board' };
    var score = function () {
      var v = function (n) { var c = $('[name="' + n + '"]:checked', ident); return c ? c.value : null; };
      var d = v('decade'), k = v('knock'), t = v('tack'), b = v('branch');
      if (!d && !k && !t && !b) return null;
      var s = { '1890': 0, '1950': 0, '2005': 0 };
      if (d === '1890') s['1890'] += 3; else if (d === '1920') { s['1950'] += 2; s['1890'] += 1; } else if (d === '1950') s['1950'] += 3; else if (d === '2005') s['2005'] += 3;
      if (k === 'hollow') s['1890'] += 2; else if (k === 'solid') { s['1950'] += 1; s['2005'] += 1; }
      if (t === 'easy') s['2005'] += 3; else if (t === 'hard') { s['1890'] += 1; s['1950'] += 1; }
      if (b === 'yes') s['1890'] += 2; else if (b === 'no') { s['1950'] += 1; s['2005'] += 1; }
      return { era: Object.keys(s).sort(function (a, c) { return s[c] - s[a]; })[0], hollow: k === 'hollow' };
    };
    var last = null;
    ident.addEventListener('change', function () {
      var r = score();
      if (!r) return;
      ident.setAttribute('data-result', r.era);
      $$('[data-era-card]', ident).forEach(function (c) { c.classList.toggle('is-match', c.getAttribute('data-era-card') === r.era); });
      if (gap) gap.hidden = !(r.era === '1890' && r.hollow);
      say.innerHTML = '';
      var lead = document.createTextNode('Most likely: '), strong = document.createElement('strong');
      strong.textContent = NAMES[r.era];
      say.appendChild(lead); say.appendChild(strong); say.appendChild(document.createTextNode('. It is drawn into Plate IV at the foot of the page.'));
      var card = $('[data-era-card="' + r.era + '"] .plate', ident);
      if (card && last !== r.era && (!SW || !SW.reduced)) {
        card.style.transition = 'none'; card.style.setProperty('--sw-p', 0);
        requestAnimationFrame(function () { requestAnimationFrame(function () { card.style.transition = '--sw-p .9s cubic-bezier(.23,1,.32,1)'; card.style.setProperty('--sw-p', 1); }); });
      }
      last = r.era;
      setPlateIV(r.era);
    });
    if (cta) cta.addEventListener('click', function (e) {
      var era = ident.getAttribute('data-result');
      if (!era || !SW || !SW.prefillForm) return;
      e.preventDefault();
      SW.prefillForm({ era: era, service: PLATES[era].service });
    });
  }

  /* ---- Season tabs and other prefill buttons ---- */
  $$('[data-fill]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (!SW || !SW.prefillForm) return;
      var data; try { data = JSON.parse(a.getAttribute('data-fill')); } catch (err) { return; }
      e.preventDefault();
      SW.prefillForm(data);
    });
  });

  /* ---- Lead form era → Plate IV ---- */
  var fEra = $('form[data-lead] [name="era"]');
  if (fEra) fEra.addEventListener('change', function () { if (fEra.value) setPlateIV(fEra.value); });

  /* ---- Patch sizer: size names ---- */
  var size = $('[data-est-size]'), sizeName = $('[data-size-name]');
  var SIZES = ['Coin', 'Fist', 'Plate', 'Door'];
  if (size && sizeName) {
    var showSize = function () { sizeName.textContent = SIZES[parseInt(size.value, 10)] || ''; };
    size.addEventListener('input', showSize); showSize();
  }

  /* ---- Motion ---- */
  if (!SW || SW.reduced || !document.documentElement.classList.contains('sw-motion') || !window.gsap) return;
  var gsap = window.gsap, ST = window.ScrollTrigger;
  if (ST) gsap.registerPlugin(ST);

  // Hero intro (≤ 1.1 s): the mill-window arch opens from a slit and Plate I draws in. The h1 is never hidden.
  var hero = $('#hero'), heroPlate = $('.plate--hero');
  if (hero && heroPlate) {
    hero.classList.add('is-intro');
    gsap.fromTo(heroPlate, { '--sw-p': 0 }, { '--sw-p': 1, duration: 1.05, delay: .1, ease: 'power2.out' });
    gsap.from('.arch__fan', { opacity: 0, duration: .6, delay: .5, ease: 'power1.out' });
  }

  if (!ST) return;
  // Each era plate builds as it scrolls through the viewport.
  $$('.plate--era, .plate--season').forEach(function (p) {
    gsap.fromTo(p, { '--sw-p': 0 }, { '--sw-p': 1, ease: 'none', scrollTrigger: { trigger: p.closest('.era') || p, start: 'top 85%', end: 'top 25%', scrub: .6 } });
  });
  // Era years drift against the plates (desktop only).
  ST.matchMedia({
    '(min-width: 900px)': function () {
      $$('.era').forEach(function (era) {
        var y = $('.era__no', era);
        if (y) gsap.fromTo(y, { yPercent: 18 }, { yPercent: -18, ease: 'none', scrollTrigger: { trigger: era, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    }
  });
  // Season: the bands wipe across the year as the section enters.
  var bands = $$('.yearline__band');
  if (bands.length) gsap.fromTo(bands, { '--sw-p': 0 }, { '--sw-p': 1, ease: 'none', stagger: .25, scrollTrigger: { trigger: '.yearline', start: 'top 90%', end: 'top 45%', scrub: .5 } });
  // Break: the lath line and key wave draw.
  var keys = $('.keys-line');
  if (keys) ST.create({ trigger: keys, start: 'top 80%', once: true, onEnter: function () { keys.classList.add('is-in'); } });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
})();
