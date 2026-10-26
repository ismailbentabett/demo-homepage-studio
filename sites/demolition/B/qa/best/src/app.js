/* demolition-B · weigh-ticket glue + the two motion moments */
(function () {
  if (!window.SW) return;
  var root = document.documentElement;

  SW.ready(function () {
    /* ---------- tear-out sizer: crew days, loads, tons per job and size ---------- */
    var box = SW.$('[data-estimator]');
    if (box) {
      var sel = SW.$('[data-est-item]', box), size = SW.$('[data-est-size]', box);
      var days = SW.$('[data-est-days]', box), loads = SW.$('[data-est-loads]', box), tons = SW.$('[data-est-tons]', box);
      var note = SW.$('[data-est-note]', box), title = SW.$('[data-est-title]', box), cta = SW.$('[data-est-cta]', box);
      var trailers = SW.$$('[data-est-sketch] .i', box);
      // per price row (deck, hot tub, pool, shed, garage, concrete): [days, loads, tons] for small / typical / large
      var T = [
        [['1 day', 1, 1.2], ['1 to 2 days', 2, 2.6], ['2 days', 3, 4.1]],
        [['half a day', 1, 0.4], ['half a day', 1, 0.6], ['1 day', 1, 0.9]],
        [['half a day', 1, 0.5], ['1 day', 1, 0.8], ['1 day', 2, 1.2]],
        [['half a day', 1, 0.7], ['1 day', 1, 1.3], ['1 to 2 days', 2, 2.2]],
        [['2 days', 3, 5.5], ['2 to 3 days', 4, 8.0], ['3 days', 6, 11.5]],
        [['1 day', 2, 3.0], ['1 to 2 days', 3, 5.5], ['2 days', 5, 9.0]]
      ];
      var NOTES = [
        'A dump trailer that leaves each day keeps your driveway clear.',
        'Cut into pieces on site and carried out. No crane, no torn-up lawn.',
        'Liner, panels and frame sorted: the steel goes to the scrap yard.',
        'Roof, walls and floor out; we tell you before we touch a slab.',
        'This size often fits a 20-yard container better than daily trailers. We say which on the scope.',
        'Concrete is heavy: small loads, and every one goes to the recycler.'
      ];
      // map price rows to the service names in the lead form
      var svcInputs = SW.$$('input[name="service"]');
      var SVC = [0, 2, 3, 1, 1, 4];
      var update = function () {
        var i = Math.max(0, Math.min(T.length - 1, parseInt(sel.value, 10) || 0));
        var lvl = size ? Math.round(parseFloat(size.value)) : 1;
        var r = T[i][Math.max(0, Math.min(2, lvl))];
        if (days) days.textContent = r[0];
        if (loads) loads.textContent = r[1] + (r[1] === 1 ? ' trailer load' : ' trailer loads');
        if (tons) tons.textContent = 'about ' + r[2].toFixed(1) + ' t';
        if (note) note.textContent = NOTES[i];
        if (title && sel.options[sel.selectedIndex]) title.textContent = sel.options[sel.selectedIndex].text;
        trailers.forEach(function (t, k) { t.classList.toggle('is-on', k < r[1]); });
        var svc = svcInputs[SVC[i]];
        if (cta && svc) cta.setAttribute('data-service', svc.value);
      };
      if (sel) {
        sel.addEventListener('change', update);
        if (size) size.addEventListener('input', update);
        update();
      }
    }

    /* ---------- house-year check: answers on a stub with a stamp ---------- */
    var yc = SW.$('[data-yearcheck]');
    if (yc) {
      var band = SW.$('[data-year-band]', yc), stamp = SW.$('[data-year-stamp]', yc), ytext = SW.$('[data-year-text]', yc);
      var add = SW.$('[data-year-add]', yc), picked = '';
      var MSG = {
        'Before 1950': ['Test first', 'Paint this old is likely to contain lead, and old tile, mastic or pipe wrap can contain asbestos. We test what we will disturb before we start. A positive part waits for a crew that does that work.'],
        '1950 to 1977': ['Test first', 'Houses from these years can have lead paint and asbestos in floor tile, mastic or pipe wrap. We test the materials we will disturb before we start, and it goes on your written scope.'],
        '1978 or later': ['Clear to start', 'Lead paint is unlikely after 1978. If we open something that looks like old tile or wrap, we stop and test it first.'],
        'Not sure': ['We check first', 'Tell us roughly when it was built, or we look at the walk-through. Anything that could be older gets tested before we disturb it.']
      };
      var moving = !SW.reduced && root.classList.contains('sw-motion') && window.gsap;
      SW.$$('input[name="era"]', yc).forEach(function (r) {
        r.addEventListener('change', function () {
          picked = r.value;
          var m = MSG[picked];
          if (band) band.textContent = picked;
          if (stamp) {
            stamp.textContent = m[0];
            stamp.classList.toggle('is-ok', picked === '1978 or later');
            if (moving) window.gsap.fromTo(stamp, { scale: 1.5, opacity: 0, rotation: -8 }, { scale: 1, opacity: 1, rotation: -8, duration: 0.3, ease: 'back.out(2)' });
          }
          if (ytext) ytext.textContent = m[1];
          if (add) add.hidden = false;
        });
      });
      if (add) add.addEventListener('click', function () {
        if (picked) SW.prefillForm({ year: picked });
      });
    }

    /* ---------- motion ---------- */
    if (SW.reduced || !root.classList.contains('sw-motion') || !window.gsap) return;
    var gsap = window.gsap;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    // type a value out, character by character, like a ticket printer
    function printInto(tl, el, at, dur) {
      var full = el.textContent, o = { n: 0 };
      tl.to(o, { n: full.length, duration: dur, ease: 'none',
        onStart: function () { el.textContent = ' '; },
        onUpdate: function () { el.textContent = full.slice(0, Math.round(o.n)) || ' '; },
        onComplete: function () { el.textContent = full; } }, at);
    }

    var tally = SW.$('[data-tally]');
    var tallyBox = SW.$('[data-tally-box]');
    var tallyAdd = SW.$('[data-tally-add]');

    // signature intro (≤ 1.2 s, h1 untouched): stubs 0401/0402 feed out of the docket slot;
    // 0403, the weigh ticket, feeds down out of the slot under the header scale and its digits print
    var stubs = SW.$$('.docket-strip .stub');
    var weighStub = SW.$('.stub-weigh');
    if (stubs.length && weighStub) {
      var others = stubs.filter(function (x) { return x !== weighStub; });
      var tl = gsap.timeline({ delay: 0.1 });
      tl.from(others, { yPercent: -18, clipPath: 'inset(0 0 100% 0)', duration: 0.5, ease: 'power3.out', stagger: 0.1 }, 0);
      var tb = tallyBox && tallyBox.getBoundingClientRect();
      var fromScale = tb && tb.width > 0 && window.scrollY < 40 && window.matchMedia('(min-width: 1200px)').matches;
      if (fromScale) {
        var sr = weighStub.getBoundingClientRect();
        var dx = (tb.left + tb.width / 2) - (sr.left + sr.width / 2);
        dx = Math.min(dx, window.innerWidth - 16 - sr.right);
        var dy = tb.bottom + 14 - sr.top;
        gsap.set(weighStub, { zIndex: 6 });
        tl.fromTo(weighStub, { x: dx, y: dy - sr.height, clipPath: 'inset(100% 0 0 0)' },
          { x: dx, y: dy, clipPath: 'inset(0% 0 0 0)', duration: 0.42, ease: 'power2.out' }, 0.05);
        if (tally) {
          var tv = { v: 0 };
          tl.fromTo(tv, { v: 0 }, { v: 1.87, duration: 0.3, ease: 'none', onUpdate: function () { tally.textContent = tv.v.toFixed(2); } }, 0.5);
        }
        tl.to(weighStub, { x: 0, y: 0, duration: 0.34, ease: 'power3.inOut', clearProps: 'transform,zIndex,clipPath' }, 0.86);
      } else {
        tl.from(weighStub, { yPercent: -18, clipPath: 'inset(0 0 100% 0)', duration: 0.5, ease: 'power3.out' }, 0.2);
      }
      SW.$$('.prt', weighStub).forEach(function (el, k) { printInto(tl, el, 0.42 + k * 0.1, 0.14); });
      tl.from('.stub-weigh .stamp', { scale: 1.6, opacity: 0, duration: 0.24, ease: 'back.out(2)' }, 0.76);
    }

    if (!window.ScrollTrigger) return;
    var ST = window.ScrollTrigger;
    var weigh = SW.$('#weigh');
    var segs = SW.$$('.weigh-bar .seg');
    var rows = SW.$$('.weigh-rows .w-row');
    var TONS = [2.2, 1.0, 0.6, 0.3];

    ST.matchMedia({
      '(min-width: 640px)': function () {
        if (!weigh || !segs.length) return;
        weigh.classList.add('is-story');
        gsap.set(segs, { scaleX: 0 });
        var state = { p: 0 }, printed = [];
        // each ledger row prints its tonnage and adds it to the header scale as its bar segment fills
        var printRow = function (i) {
          var t = SW.$('.w-t', rows[i]);
          if (t) { var ptl = gsap.timeline(); printInto(ptl, t, 0, 0.25); }
          if (tallyAdd && tallyBox && tallyBox.offsetWidth) {
            tallyAdd.textContent = '+' + TONS[i].toFixed(1) + ' t';
            gsap.killTweensOf(tallyAdd);
            gsap.fromTo(tallyAdd, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' });
            gsap.to(tallyAdd, { opacity: 0, duration: 0.3, delay: 0.8 });
          }
        };
        var tw = gsap.to(state, {
          p: segs.length,
          ease: 'none',
          scrollTrigger: { trigger: weigh, start: 'top top', end: 'bottom bottom', scrub: 0.4 },
          onUpdate: function () {
            var total = 0;
            segs.forEach(function (s, i) {
              var f = Math.max(0, Math.min(1, state.p - i));
              s.style.transform = 'scaleX(' + f.toFixed(3) + ')';
              var on = f > 0.02;
              if (rows[i]) rows[i].classList.toggle('is-on', on);
              if (on && !printed[i]) { printed[i] = true; printRow(i); }
              if (!on) printed[i] = false;
              total += TONS[i] * f;
            });
            if (tally) tally.textContent = total.toFixed(2);
          }
        });
        return function () {
          tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill();
          weigh.classList.remove('is-story');
          segs.forEach(function (s) { s.style.transform = ''; });
          rows.forEach(function (r) { r.classList.remove('is-on'); });
          if (tally) tally.textContent = '4.1';
        };
      },
      '(max-width: 639px)': function () {
        // phone: the bar fills once, as a clip, when it scrolls in
        if (!segs.length) return;
        var t = gsap.from(segs, { scaleX: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12, scrollTrigger: { trigger: '.weigh-bar', start: 'top 85%' } });
        return function () { t.scrollTrigger && t.scrollTrigger.kill(); t.revert(); };
      }
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  });
})();
