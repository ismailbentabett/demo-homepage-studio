/* cleaning-B · Running Receipt
   1. The live receipt (always on): every pick in the quote builder prints a line on the strip.
   2. Motion (only with sw-motion): hero ticket print-in, strip rule draws, crew triptych drift.
   Nothing here hides content: every start state is a transform or a clip that ends visible within 1.2 s,
   and the page reads complete with JS off or reduced motion. */
(function () {
  if (!window.SW) return;

  function num(s) { var n = parseFloat(String(s || '').replace(/[^0-9.]/g, '')); return isNaN(n) ? 0 : n; }
  function sym(s) { var m = String(s || '').match(/^[^0-9]*/); return m ? m[0] : ''; }

  SW.mod('receipt-live', function () {
    var rc = document.querySelector('[data-rc]');
    var form = document.querySelector('[data-rc-form]');
    if (!rc || !form) return;
    var prices = SW.fact('proof.prices') || [];
    var lines = rc.querySelector('[data-rc-lines]');
    var total = rc.querySelector('[data-rc-total]');
    var send = document.querySelector('[data-rc-send]');
    var visits = Array.prototype.slice.call(form.querySelectorAll('[data-rc-visit]'));
    if (visits.length && !visits.some(function (v) { return v.checked; })) visits[0].checked = true;
    var addOn = prices[prices.length - 1] || {};

    function line(label, value) {
      var li = document.createElement('li');
      li.className = 'tk__line';
      var a = document.createElement('span'); a.textContent = label;
      var i = document.createElement('i');
      var b = document.createElement('span'); b.textContent = value;
      li.appendChild(a); li.appendChild(i); li.appendChild(b);
      return li;
    }
    function flash(el) { el.classList.remove('is-new'); void el.offsetWidth; el.classList.add('is-new'); }

    var last = '';
    function update(changed) {
      var v = form.querySelector('[data-rc-visit]:checked');
      var p = prices[v ? parseInt(v.value, 10) - 1 : 0] || prices[0] || {};
      var size = form.querySelector('[data-rc-size]:checked');
      var sizeText = size ? size.nextElementSibling.textContent : (p.note || '');
      var adds = Array.prototype.slice.call(form.querySelectorAll('[data-rc-add]:checked'));
      var lo = num(p.from), hi = num(p.to), cur = sym(p.from);
      var frag = document.createDocumentFragment();
      frag.appendChild(line('Visit', p.item || ''));
      frag.appendChild(line('House', sizeText));
      if (!adds.length) frag.appendChild(line('Add-ons', 'none'));
      adds.forEach(function (a) {
        var label = a.nextElementSibling.textContent;
        if (a.hasAttribute('data-priced') && addOn.from) {
          lo += num(addOn.from); hi += num(addOn.to);
          frag.appendChild(line(label, addOn.from + '–' + addOn.to));
        } else {
          frag.appendChild(line(label, 'priced at walk-through'));
        }
      });
      var key = (p.item || '') + sizeText + adds.map(function (a) { return a.value; }).join();
      lines.innerHTML = '';
      lines.appendChild(frag);
      total.textContent = cur + lo + ' to ' + cur + hi;
      if (send && p.item) send.setAttribute('data-service', p.item);
      if (changed && key !== last && !SW.reduced) {
        var kids = lines.children;
        flash(kids[changed === 'visit' ? 0 : changed === 'size' ? 1 : kids.length - 1]);
        flash(total);
      }
      last = key;
    }
    form.addEventListener('change', function (e) {
      var t = e.target;
      update(t.hasAttribute('data-rc-visit') ? 'visit' : t.hasAttribute('data-rc-size') ? 'size' : 'add');
    });
    update(null);
  });

  if (SW.reduced || !document.documentElement.classList.contains('sw-motion') || !window.gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* Signature intro: the hero ticket prints its lines (first viewport only, ≤ 1.2 s, transforms + clip only). */
  SW.mod('hero-print', function () {
    var tk = document.querySelector('.spine--hero .tk');
    if (!tk) return;
    var rows = tk.querySelectorAll('.tk__line, .tk__total, .tk__foot');
    gsap.fromTo(rows, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.45, stagger: 0.07, ease: 'power3.out', delay: 0.15, clearProps: 'clipPath' });
    var photo = tk.querySelector('.tk__photo');
    if (photo) gsap.fromTo(photo, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' });
  });

  /* Each strip's red rule draws when it enters view (decorative; the strip itself is always visible). */
  SW.mod('strip-rules', function () {
    var spines = document.querySelectorAll('[data-print]');
    if (!('IntersectionObserver' in window)) { spines.forEach(function (s) { s.classList.add('is-printed'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-printed'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -15% 0px' });
    spines.forEach(function (s) { io.observe(s); });
  });

  /* Story: the three visits drift at different speeds on desktop (transform only, no pin). */
  SW.mod('crew-drift', function () {
    if (!window.ScrollTrigger) return;
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        var steps = document.querySelectorAll('[data-crew] .step');
        steps.forEach(function (s, i) {
          gsap.fromTo(s, { y: 40 * (i + 1) }, { y: 0, ease: 'none', scrollTrigger: { trigger: '[data-crew]', start: 'top bottom', end: 'center center', scrub: 0.6 } });
        });
      }
    });
  });

  if (document.fonts && document.fonts.ready && window.ScrollTrigger) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
