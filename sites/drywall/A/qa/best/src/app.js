/* drywall-A · Knife & Hawk · Feathered Knife Pass + tools glue */
(function () {
  function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    var services = (SW.fact('services') || []);
    function svc(i) { return services[i] ? services[i].name : ''; }
    function val(root, name) { var el = root.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : ''; }
    function label(root, name) { var el = root.querySelector('input[name="' + name + '"]:checked'); return el ? el.parentNode.textContent.trim() : ''; }

    /* ---------- patch sizer ---------- */
    var sizer = document.querySelector('[data-sizer]');
    if (sizer) {
      var sel = sizer.querySelector('[data-est-item]');
      var sketch = sizer.querySelector('[data-est-sketch]');
      var visitsEl = sizer.querySelector('[data-visits]');
      var dustEl = sizer.querySelector('[data-dust]');
      var book = sizer.querySelector('[data-sizer-book]');
      var state = {};
      function sizeIt() {
        var sz = val(sizer, 'sz'), sf = val(sizer, 'sf'), fn = val(sizer, 'fn');
        var idx = 0, service = svc(0);
        if (sf === 'ceiling' && (sz === 'plate' || sz === 'door')) { idx = 1; service = svc(5); }
        else if (sz === 'door') { idx = 1; service = svc(1); }
        else if (fn === 'textured') { idx = 2; service = svc(3); }
        else if (sf === 'ceiling') { service = svc(5); }
        if (sel && sel.value !== String(idx)) { sel.value = String(idx); sel.dispatchEvent(new Event('change')); }
        var visits = 3 + (fn === 'textured' || sz === 'door' ? 1 : 0);
        if (visitsEl) visitsEl.textContent = String(visits);
        if (dustEl) dustEl.textContent = sf === 'ceiling'
          ? 'Plastic over the floor and furniture below, sanding kept to the room.'
          : 'Plastic at the doorway, sanding kept to the room.';
        if (sketch) { sketch.setAttribute('data-size', sz); sketch.setAttribute('data-surface', sf); sketch.setAttribute('data-finish', fn); }
        state = { service: service, size: label(sizer, 'sz'), surface: label(sizer, 'sf'),
          details: 'From the patch sizer: ' + label(sizer, 'sz') + ', ' + label(sizer, 'sf').toLowerCase() + ', ' + label(sizer, 'fn').toLowerCase() + ', about ' + visits + ' visits.' };
      }
      sizer.addEventListener('change', function (e) { if (e.target.name === 'sz' || e.target.name === 'sf' || e.target.name === 'fn') sizeIt(); });
      if (book) book.addEventListener('click', function (e) {
        if (!document.querySelector('form[data-lead]')) return;
        e.preventDefault();
        SW.prefillForm(state, { focus: 'service' });
      });
      sizeIt();
    }

    /* ---------- crack & nail-pop timer ---------- */
    var timer = document.querySelector('[data-timer]');
    if (timer) {
      var vEl = timer.querySelector('[data-timer-verdict]');
      var wEl = timer.querySelector('[data-timer-why]');
      var go = timer.querySelector('[data-timer-go]');
      var spring = false, tState = {};
      function judge() {
        var k = val(timer, 'tk'), w = val(timer, 'tw'), g = val(timer, 'tg');
        var v, why;
        spring = false;
        if (g === 'yes') { v = 'Fix now'; why = 'A crack that keeps getting bigger means something is still moving. We find out why before we patch it.'; }
        else if (k === 'stain') { v = 'Fix now, after the leak'; why = 'Fix the leak first, then the ceiling. A stain-blocking primer goes on before paint so it can’t bleed back through.'; }
        else if (k === 'plaster') { v = 'Book a look'; why = 'Pin it, don’t just caulk it. Loose plaster is screwed back to the lath with plaster washers, then skimmed.'; }
        else if (w === 'winter') { spring = true; v = 'Spring list'; why = 'Framing dries out in the heating season. Fixed now, the pops can come back; fixed in spring, they stay fixed.'; }
        else { v = 'Fix now'; why = 'It has been through a heating season already, so the framing has settled. Now is a good time.'; }
        vEl.textContent = v; wEl.textContent = why;
        go.firstChild.nodeValue = spring ? 'Put me on the spring list ' : 'Book a visit now ';
        var svcName = k === 'stain' ? svc(5) : k === 'seam' ? svc(2) : svc(0);
        tState = { service: svcName, when: spring ? 'Spring list' : 'This week', details: label(timer, 'tk') + ', ' + label(timer, 'tw').toLowerCase() + '. Growing: ' + label(timer, 'tg').toLowerCase() + '.' };
      }
      timer.addEventListener('change', judge);
      go.addEventListener('click', function (e) {
        if (!document.querySelector('form[data-lead]')) return;
        e.preventDefault();
        SW.prefillForm(tState, { focus: 'service' });
      });
      judge();
    }

    /* ---------- small one-shot reveals (pass lines, ledger skim) ---------- */
    var ledger = document.querySelector('[data-hook="ledger"]');
    if (ledger) Array.prototype.forEach.call(ledger.querySelectorAll('.row'), function (r, i) { r.style.setProperty('--i', i); });
    var once = document.querySelectorAll('.pass-line, [data-hook="ledger"]');
    if (!document.documentElement.classList.contains('sw-motion') || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(once, function (el) { el.classList.add('is-in', 'is-skimmed'); });
    } else {
      var io = new IntersectionObserver(function (ens) {
        ens.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in', 'is-skimmed'); io.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });
      Array.prototype.forEach.call(once, function (el) { io.observe(el); });
    }

    /* ---------- motion: the knife pass ---------- */
    if (!SW.reduced && document.documentElement.classList.contains('sw-motion') && window.gsap) {
      var g = window.gsap;
      if (window.ScrollTrigger) g.registerPlugin(window.ScrollTrigger);

      // 1. hero intro: one blade sweep, ghost word smoothed, patch feathered (0.9s, skippable)
      var hero = document.querySelector('.hero');
      var blade = hero && hero.querySelector('.blade--hero');
      var patch = hero && hero.querySelector('[data-patch]');
      if (hero && blade) {
        var hw = hero.offsetWidth, bw = blade.offsetWidth;
        var pr = patch ? patch.getBoundingClientRect() : null, hr = hero.getBoundingClientRect();
        var at = pr ? Math.max(0, Math.min(.85, (pr.left - hr.left) / hw)) : .5;
        var tl = g.timeline({ delay: .15 });
        tl.set(blade, { opacity: 1, x: -bw })
          .to(blade, { x: hw + 4, duration: .9, ease: 'power2.inOut' }, 0)
          .to(hero, { '--gp': 1, duration: .9, ease: 'power2.inOut' }, 0)
          .to(hero, { '--hf': 1, duration: .4, ease: 'power1.out' }, .9 * at)
          .set(blade, { opacity: 0 });
        var skip = function () { tl.progress(1); off(); };
        var off = function () { ['wheel', 'keydown', 'touchstart'].forEach(function (t) { window.removeEventListener(t, skip); }); };
        ['wheel', 'keydown', 'touchstart'].forEach(function (t) { window.addEventListener(t, skip, { passive: true, once: true }); });
        tl.eventCallback('onComplete', off);
      }

      if (window.ScrollTrigger) {
        // 2. coats story: pinned (sticky) on wide screens, one pass per step
        var coats = document.querySelector('.coats');
        var wp = coats && coats.querySelector('[data-wp]');
        if (coats && wp) {
          var steps = coats.querySelectorAll('.step');
          var wpBlade = wp.querySelector('.blade');
          var lab = coats.querySelector('[data-wp-label]'), coat = coats.querySelector('[data-wp-coat]');
          var labels = ['Visit 1', 'Visit 1', 'Visit 1', 'Visits 2 and 3', 'Last visit'];
          var coatsN = ['0', '0', '1', '3', '3'];
          var cur = -1;
          function setStep(s) {
            if (s === cur) return;
            cur = s;
            wp.setAttribute('data-s', String(s));
            Array.prototype.forEach.call(steps, function (st, i) { st.classList.toggle('is-active', i === s - 1 || (s === 0 && i === 0)); });
            if (lab) lab.textContent = labels[s];
            if (coat) coat.textContent = coatsN[s];
            if (wpBlade && s > 0) g.fromTo(wpBlade, { opacity: 1, x: -wpBlade.offsetWidth }, { x: wp.offsetWidth + 4, duration: .7, ease: 'power2.inOut', overwrite: true, onComplete: function () { g.set(wpBlade, { opacity: 0 }); } });
          }
          var mm = g.matchMedia();
          mm.add('(min-width: 900px)', function () {
            coats.classList.add('is-pinned');
            setStep(0);
            var st = ScrollTrigger.create({
              trigger: coats, start: 'top top', end: 'bottom bottom',
              onUpdate: function (self) { var p = self.progress; setStep(p < .04 ? 0 : Math.min(4, Math.floor(p * 4) + 1)); }
            });
            ScrollTrigger.refresh();
            return function () { st.kill(); coats.classList.remove('is-pinned'); Array.prototype.forEach.call(steps, function (x) { x.classList.remove('is-active'); }); cur = -1; };
          });
        }

        // 3. break: the knife skims a stripe across the wet mud photo
        var brk = document.querySelector('.break');
        if (brk) {
          g.fromTo(brk, { '--sw-p': 0 }, { '--sw-p': 1.08, ease: 'none',
            scrollTrigger: { trigger: brk, start: 'top 85%', end: 'center 45%', scrub: .4 } });
        }
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
      }
    }
  });
})();
