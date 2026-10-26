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
    function echo(key, text) {
      document.querySelectorAll('[data-echo="' + key + '"]').forEach(function (el) { el.textContent = text; });
    }
    var keep = rc.querySelector('[data-print-ticket]');
    if (keep) keep.addEventListener('click', function () {
      var root = document.documentElement;
      root.classList.add('print-ticket');
      window.addEventListener('afterprint', function done() { root.classList.remove('print-ticket'); window.removeEventListener('afterprint', done); });
      window.print();
    });

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
      /* the reader's own picks print onto the hero ticket and the footer receipt */
      if (changed) {
        var range = total.textContent + ' (sample)';
        echo('size', sizeText); echo('visit', p.item || ''); echo('total', range);
      }
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

  /* Photo slips never wait on the lazy loader once the page is in: after load, every remaining
     lazy image is fetched (small files via sizes), so no frame is ever caught empty. */
  SW.mod('photos-eager', function () {
    function go() {
      document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
        img.loading = 'eager';
        if (img.decode) img.decode().then(function () { img.closest('.frame') && img.closest('.frame').classList.add('is-loaded'); }, function () {});
      });
    }
    if (document.readyState === 'complete') setTimeout(go, 200);
    else window.addEventListener('load', function () { setTimeout(go, 200); });
  });

  /* The frequency quiz answer prints onto the hero ticket's How often line too. */
  SW.mod('quiz-echo', function () {
    var out = document.querySelector('[data-checklist-result]');
    if (!out || !window.MutationObserver) return;
    var map = [[/every other week/i, 'Every other week'], [/monthly/i, 'Monthly'], [/weekly/i, 'Weekly']];
    new MutationObserver(function () {
      var t = out.textContent || '';
      for (var i = 0; i < map.length; i++) if (map[i][0].test(t)) {
        document.querySelectorAll('[data-echo="visit"]').forEach(function (el) { el.textContent = map[i][1]; });
        return;
      }
    }).observe(out, { childList: true, characterData: true, subtree: true });
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

  /* Story: the scroll prints the receipt. As each strip enters, its lines feed out left to right,
     one after another, like a till printing (clip only, plays once, ends fully visible). */
  SW.mod('scroll-print', function () {
    if (!window.ScrollTrigger) return;
    document.querySelectorAll('[data-print]:not(.spine--hero), .footer__receipt').forEach(function (strip) {
      var rows = strip.querySelectorAll('.tk__mast, .tk__meta, .tk__line, .tk__tab, .tk__total, .tk__answer, .tk__note, .tk__foot, .footer__mast, .footer__thanks');
      if (!rows.length) return;
      /* a print head runs down the strip while its lines feed out under it, top to bottom */
      var host = strip.querySelector('.tk') || strip;
      var head = document.createElement('span');
      head.className = 'tk__head'; head.setAttribute('aria-hidden', 'true');
      host.appendChild(head);
      var tl = gsap.timeline({ scrollTrigger: { trigger: strip, start: 'top 80%', once: true } });
      tl.fromTo(rows, { clipPath: 'inset(0 0 100% 0)', y: -8 }, {
        clipPath: 'inset(0 0 0% 0)', y: 0, duration: 0.38, stagger: 0.11, ease: 'power2.out', clearProps: 'clipPath,transform'
      }, 0);
      tl.fromTo(head, { top: '0%', autoAlpha: 1 }, { top: '100%', duration: Math.min(0.38 + rows.length * 0.11, 2.2), ease: 'none' }, 0)
        .to(head, { autoAlpha: 0, duration: 0.2 });
      var photo = strip.querySelector('.frame');
      if (photo) gsap.fromTo(photo, { clipPath: 'inset(0 0 100% 0)' }, {
        clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath',
        scrollTrigger: { trigger: photo, start: 'top 90%', once: true }
      });
    });
    /* the services receipt prints its lines too */
    var svc = document.querySelectorAll('.svc__item');
    if (svc.length) gsap.fromTo(svc, { clipPath: 'inset(0 100% 0 0)' }, {
      clipPath: 'inset(0 0% 0 0)', duration: 0.45, stagger: 0.06, ease: 'power2.out', clearProps: 'clipPath',
      scrollTrigger: { trigger: '.svc', start: 'top 85%', once: true }
    });
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
          gsap.fromTo(s, { y: 20 * i }, { y: 0, ease: 'none', scrollTrigger: { trigger: '[data-crew]', start: 'top bottom', end: 'center center', scrub: 0.6 } });
        });
      }
    });
  });

  if (document.fonts && document.fonts.ready && window.ScrollTrigger) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
