/* insulation-B · Inchwise · app glue: depth story, attic ruler, price receipt, form ruler */
(function () {
  'use strict';
  function fmt(n) { return (Math.round(n * 2) / 2).toString(); }

  SW.ready(function () {
    var $ = SW.$, $$ = SW.$$;

    /* ---------- F-05 attic ruler (works without motion) ---------- */
    var box = $('[data-attic-ruler]');
    if (box) {
      var range = $('[data-ar-depth]', box);
      var flat = $('.flat', box);
      var outIn = $('[data-ar-in]', box), outR = $('[data-ar-r]', box), outAdd = $('[data-ar-add]', box), outStop = $('[data-ar-stop]', box);
      var send = $('[data-ar-send]', box);
      var mat = function () { var c = $('[data-ar-mat]:checked', box); return c ? c.value : ''; };
      var paint = function () {
        var d = parseFloat(range.value) || 0;
        var m = mat();
        var stopped = /pebbles/i.test(m);
        flat.style.setProperty('--val', d);
        range.setAttribute('aria-valuetext', fmt(d) + ' inches');
        outIn.textContent = fmt(d);
        box.classList.toggle('is-stopped', stopped);
        box.classList.toggle('is-low', !stopped && d < 10);
        outStop.hidden = !stopped;
        if (stopped) {
          outR.textContent = 'No R-value until it is tested.';
          outAdd.textContent = 'Nothing gets blown over it before a lab result.';
          return;
        }
        var lo = Math.round(d * 2.5), hi = Math.round(d * 3.7);
        outR.textContent = d === 0 ? 'About R-0 today.' : 'About R-' + lo + ' to R-' + hi + ' today.';
        if (d >= 16.5) outAdd.textContent = 'At or past the typical R-49 to R-60 target. We would check for gaps and low edges.';
        else {
          var a = Math.max(0, Math.round(16.3 - d)), b = Math.round(20 - d);
          outAdd.textContent = 'Add about ' + a + ' to ' + b + ' in to reach the typical R-49 to R-60.';
        }
      };
      range.addEventListener('input', paint);
      $$('[data-ar-mat]', box).forEach(function (r) { r.addEventListener('change', paint); });
      paint();
      if (send) send.addEventListener('click', function (e) {
        e.preventDefault();
        SW.prefillForm({ depth: fmt(parseFloat(range.value) || 0), material: mat() }, { focus: 'service' });
      });
    }

    /* ---------- F-08 price receipt: sums the sample ranges from facts ---------- */
    var pb = $('[data-price-builder]');
    var prices = (SW.facts && SW.facts.proof && SW.facts.proof.prices) || [];
    if (pb && prices.length) {
      var out = $('[data-pb-out]', pb);
      var pbSend = $('[data-pb-send]', pb);
      var num = function (s) { return parseFloat(String(s).replace(/[^\d.]/g, '')) || 0; };
      var pre = String(prices[0].from).replace(/[\d,.\s]/g, '');
      var money = function (n) { return pre + Math.round(n).toLocaleString('en-US'); };
      var picked = function () { return $$('[data-pb]:checked', pb).map(function (c) { return prices[+c.value - 1]; }).filter(Boolean); };
      var sum = function () {
        var p = picked();
        if (!p.length) { out.textContent = 'Tick a line to see a range.'; return; }
        var lo = 0, hi = 0;
        p.forEach(function (x) { lo += num(x.from); hi += num(x.to); });
        out.innerHTML = '';
        out.appendChild(document.createTextNode(p.length + (p.length === 1 ? ' line: ' : ' lines: ')));
        var b = document.createElement('b'); b.textContent = money(lo) + ' to ' + money(hi); out.appendChild(b);
      };
      $$('[data-pb]', pb).forEach(function (c) { c.addEventListener('change', sum); });
      sum();
      if (pbSend) pbSend.addEventListener('click', function (e) {
        var p = picked();
        if (!p.length) return;
        e.preventDefault();
        SW.prefillForm({ details: 'Price lines: ' + p.map(function (x) { return x.item; }).join(', ') }, { focus: 'service' });
      });
    }

    /* ---------- form step 4: your depth on a ruler ---------- */
    var form = $('form[data-lead]');
    var depthIn = form && $('[name="depth"]', form);
    var fill = $('[data-form-fill]'), dtxt = $('[data-form-depth]');
    if (depthIn && fill && dtxt) {
      var showD = function () {
        var d = parseFloat(String(depthIn.value).replace(',', '.'));
        var ok = !isNaN(d);
        d = ok ? Math.max(0, Math.min(20, d)) : 0;
        fill.parentNode.parentNode.style.setProperty('--d', d);
        fill.style.setProperty('--d', d);
        dtxt.textContent = ok ? fmt(d) : '__';
      };
      depthIn.addEventListener('input', showD);
      form.addEventListener('sw:prefill', showD);
      showD();
    }

    /* ---------- F-04 blurbs: open on tablet/desktop, a tap-to-open line on phones ---------- */
    var wide = window.matchMedia('(min-width: 640px)');
    var setOpen = function () { $$('[data-open-wide]').forEach(function (d) { d.open = wide.matches; }); };
    setOpen();
    if (wide.addEventListener) wide.addEventListener('change', setOpen);

    /* ---------- motion: the ruler is the one moving part ---------- */
    if (!SW.reduced && document.documentElement.classList.contains('sw-motion') && window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      /* 1 · F-01 depth story: the figure sticks (640+), four readings scroll past it */
      var story = $('#depth');
      var fig = story && $('[data-story-fig]', story);
      if (fig) {
        var steps = $$('.sstep', story);
        var list = $('.story__steps', story);
        var vals = steps.map(function (s) { return parseFloat(s.style.getPropertyValue('--v')) || 0; });
        var inEl = $('[data-story-in]', fig), rEl = $('[data-story-r]', fig);
        var t49 = $('[data-target="49"]', fig), t60 = $('[data-target="60"]', fig);
        var rail = $('.ruler--rail', story);
        var setVal = function (v, idx) {
          var shown = parseFloat(fmt(v));
          fig.style.setProperty('--val', v.toFixed(2));
          if (rail) rail.style.setProperty('--val', v.toFixed(2));
          inEl.textContent = fmt(v);
          rEl.textContent = Math.floor(shown * 3);
          fig.classList.toggle('is-past', shown >= 16.5);
          if (t49) t49.classList.toggle('is-passed', shown >= 16.5);
          if (t60) t60.classList.toggle('is-passed', shown >= 20);
          steps.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
        };
        ScrollTrigger.matchMedia({
          '(min-width: 640px)': function () {
            var state = { p: 0 };
            setVal(vals[0], 0);
            var tw = gsap.to(state, {
              p: 1, ease: 'none',
              scrollTrigger: { trigger: list, start: 'top 45%', end: 'bottom 75%', scrub: 0.4 },
              onUpdate: function () {
                var seg = state.p * (vals.length - 1);
                var i = Math.min(vals.length - 2, Math.floor(seg));
                var f = seg - i;
                var v = vals[i] + (vals[i + 1] - vals[i]) * f;
                setVal(v, Math.round(seg));
              }
            });
            return function () { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); setVal(vals[vals.length - 1], -1); };
          }
        });
      }

      /* 2 · section rails: each rail ruler fills with its own section's scroll */
      $$('.rail-grid .ruler--rail').forEach(function (r) {
        var sec = r.closest('section');
        if (!sec || sec.id === 'depth' || r.classList.contains('ruler--gaps')) return;
        var to = parseFloat(r.style.getPropertyValue('--val')) || 0;
        gsap.fromTo(r, { '--val': 0 }, { '--val': to, ease: 'none', scrollTrigger: { trigger: sec, start: 'top 80%', end: 'bottom 70%', scrub: 0.5 } });
      });

      /* 3 · F-05 tool: the flat ruler fills to its default reading on entry */
      if (box) {
        var flatEl = $('.flat', box), rng = $('[data-ar-depth]', box);
        var target = parseFloat(rng.value) || 0, proxy = { v: 0 };
        flatEl.style.setProperty('--val', 0);
        var fillIn = gsap.to(proxy, {
          v: target, duration: 1.1, ease: 'power2.out', paused: true,
          onUpdate: function () { flatEl.style.setProperty('--val', proxy.v.toFixed(2)); outIn.textContent = fmt(proxy.v); },
          onComplete: function () { paint(); }
        });
        ScrollTrigger.create({ trigger: box, start: 'top 75%', once: true, onEnter: function () { fillIn.play(); } });
        rng.addEventListener('input', function () { if (fillIn.isActive()) fillIn.kill(); }, { once: true });
      }

      /* 4 · footer sign-off: the flat ruler draws its ticks 0 to 20 */
      var so = $('[data-signoff]');
      if (so) {
        var card = $('.signoff__card', so), nums = $$('.signoff__nums span', so);
        var tl = gsap.timeline({ scrollTrigger: { trigger: so, start: 'top 92%', end: 'top 55%', scrub: 0.5 } });
        tl.fromTo(card, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none', duration: 1 }, 0);
        tl.fromTo(nums, { opacity: 0, y: 6 }, { opacity: 1, y: 0, ease: 'none', duration: 0.2, stagger: 0.08 }, 0);
      }

      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  });
})();
