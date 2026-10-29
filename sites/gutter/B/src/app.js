/* gutter-B · Rain Cylinder Ledger: tools glue (always), filmstrip pause, intro + pour story (motion only). */
(function () {
  var fmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  var fmt1 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
  function num(el, def) { var v = parseFloat(el && el.value); return isFinite(v) && v > 0 ? v : def; }
  function firstService() { var s = SW.fact('services') || []; return s[0] ? s[0].name : ''; }

  SW.ready(function () {
    /* ---- runoff calculator: gallons = sq ft × in × 0.623, written into the big cylinder ---- */
    var ro = SW.$('[data-runoff]');
    if (ro) {
      var a = SW.$('[data-ro-sqft]', ro), r = SW.$('[data-ro-rain]', ro);
      var out = SW.$('[data-ro-gal]', ro), cyl = SW.$('[data-ro-cyl]', ro);
      var la = SW.$('[data-ro-a]', ro), lr = SW.$('[data-ro-r]', ro), lh = SW.$('[data-ro-h]', ro);
      var state = { sqft: 1000, rain: 1, gal: 623 };
      var calc = function () {
        state.sqft = Math.min(num(a, 1000), 20000);
        state.rain = Math.min(num(r, 1), 20);
        state.gal = Math.round(state.sqft * state.rain * 0.623);
        out.textContent = fmt.format(state.gal);
        la.textContent = fmt.format(state.sqft) + ' sq ft';
        lr.textContent = fmt1.format(state.rain) + ' in';
        lh.textContent = fmt.format(Math.round(state.gal / 2)) + ' gal';
        cyl.style.setProperty('--f', Math.min(state.gal / 3000, 1).toFixed(3));
      };
      a.addEventListener('input', calc);
      r.addEventListener('input', calc);
      var go = SW.$('[data-ro-go]', ro);
      go.addEventListener('click', function () {
        SW.prefillForm({ service: firstService(), details: 'Roof about ' + fmt.format(state.sqft) + ' sq ft: ' + fmt.format(Math.round(state.sqft * 0.623)) + ' gal per inch of rain.' }, { scroll: false });
      });
    }

    /* ---- gutter size check: 5-inch or 6-inch (rule of thumb) ---- */
    var sz = SW.$('[data-size]');
    if (sz) {
      var area = SW.$('[data-sz-area]', sz), box = SW.$('[data-sz-state]', sz);
      var verdict = SW.$('[data-sz-verdict]', sz), why = SW.$('[data-sz-why]', sz);
      var pick = function (n, d) { var c = SW.$('input[name="' + n + '"]:checked', sz); return c ? parseFloat(c.value) : d; };
      var size = '5';
      var run = function () {
        var p = pick('sz-pitch', 1.15), w = pick('sz-rain', 1.4);
        var score = Math.min(num(area, 600), 5000) * p * w;
        size = score > 1100 ? '6' : '5';
        box.setAttribute('data-sz-state', size);
        if (size === '6') {
          verdict.textContent = '6-inch is the safer choice.';
          why.textContent = (p > 1.2 ? 'A steep side throws water fast at the front lip. ' : 'That much roof sends a lot of water to one edge. ') + (w > 1.5 ? 'In a downpour a 5-inch spills before the drops can clear it.' : 'A 6-inch holds the surge while the downspouts catch up.');
        } else {
          verdict.textContent = '5-inch is usually enough.';
          why.textContent = 'A side this size sheds a moderate stream. A clean 5-inch with enough drops carries it.';
        }
      };
      sz.addEventListener('input', run);
      sz.addEventListener('change', run);
      SW.$('[data-sz-go]', sz).addEventListener('click', function () {
        SW.prefillForm({ service: firstService(), details: 'Size check: ' + size + '-inch for a ' + fmt.format(num(area, 600)) + ' sq ft roof side.' }, { scroll: false });
      });
      run();
    }

    /* ---- filmstrip pause ---- */
    var strip = SW.$('.strip'), btn = SW.$('[data-strip-btn]');
    if (strip && btn) {
      var lbl = SW.$('[data-strip-lbl]', btn), icon = SW.$('.strip__pi', btn);
      btn.addEventListener('click', function () {
        var paused = strip.classList.toggle('is-paused');
        btn.setAttribute('aria-pressed', String(paused));
        lbl.textContent = paused ? 'Play the filmstrip' : 'Pause the filmstrip';
        icon.textContent = paused ? '▶' : 'II';
      });
    }

    /* ---- motion only ---- */
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion') || !window.gsap) return;
    var gsap = window.gsap, ST = window.ScrollTrigger;
    if (ST) gsap.registerPlugin(ST);

    // intro: the first cylinder's numeral counts 0 → 623 while its fill rises (CSS)
    var hc = SW.$('[data-hero-count]');
    var frB = SW.$('.strip__group .fr--first .fr__lg b');
    [hc, frB].forEach(function (el) {
      if (!el) return;
      var o = { v: 0 }, suffix = el === frB ? ' gal' : '';
      gsap.to(o, { v: 623, duration: 1, delay: .3, ease: 'power2.out', onUpdate: function () { el.textContent = Math.round(o.v) + suffix; } });
    });

    if (!ST) return;
    // pour story: pinned (sticky) only ≥ 640px; the section's data-step is scrubbed by scroll
    var story = SW.$('#story');
    if (story) {
      ST.matchMedia({
        '(min-width: 640px)': function () {
          story.classList.add('is-story');
          story.setAttribute('data-step', '1');
          var t = ST.create({
            trigger: story, start: 'top top', end: 'bottom bottom',
            onUpdate: function (self) {
              var s = Math.min(4, 1 + Math.floor(self.progress * 4.2));
              if (story.getAttribute('data-step') !== String(s)) story.setAttribute('data-step', String(s));
            }
          });
          ST.refresh();
          return function () {
            t.kill();
            story.classList.remove('is-story');
            story.setAttribute('data-step', '4');
          };
        }
      });
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  });
})();
