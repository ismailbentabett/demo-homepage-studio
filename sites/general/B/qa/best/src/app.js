/* general-B · Open Ledger: the cost sheet, filled in as you go */
(function () {
  if (typeof SW === 'undefined') return;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(fn, 0); });
    else setTimeout(fn, 0);
  }

  /* ---------- 1. Estimator: trade split per project (sample shares, no dollars) ---------- */
  var SPLITS = [
    ['Framing & insulation', 22, 'Electrical & HVAC', 18, 'Drywall & paint', 24, 'Flooring & trim', 16],
    ['Cabinets & counters', 34, 'Electrical & plumbing', 18, 'Demo, framing & drywall', 14, 'Flooring, tile & paint', 14],
    ['Waterproofing & tile', 30, 'Plumbing & fixtures', 26, 'Demo & framing', 12, 'Electrical & venting', 12],
    ['Footings & foundation', 20, 'Framing & roof', 28, 'Mechanicals', 16, 'Finishes', 16],
    ['Foundation cut', 30, 'Window & well', 30, 'Drain & backfill', 14, 'Interior finish', 6]
  ];
  function estimator() {
    var sel = $('[data-est-item]');
    var lines = $('[data-est-lines]');
    if (!sel || !lines) return;
    function paint() {
      var s = SPLITS[sel.selectedIndex] || SPLITS[0];
      for (var i = 0; i < 4; i++) {
        var l = $('[data-l="' + i + '"]', lines), p = $('[data-p="' + i + '"]', lines);
        if (l) l.textContent = s[i * 2];
        if (p) {
          p.textContent = s[i * 2 + 1] + '%';
          p.parentElement.style.setProperty('--w', (s[i * 2 + 1] / 100).toFixed(2));
        }
      }
    }
    sel.addEventListener('change', paint);
    paint();
  }

  /* ---------- 2. Contact: the draft cost sheet fills in line by line ---------- */
  function draftSheet() {
    var form = $('form[data-lead]');
    if (!form) return;
    function val(name) {
      var f = $$('[name="' + name + '"]', form);
      if (!f.length) return '';
      if (f[0].type === 'radio') {
        var c = f.filter(function (x) { return x.checked; })[0];
        if (!c) return '';
        var lab = c.closest('label');
        return lab ? lab.textContent.trim() : c.value;
      }
      return (f[0].value || '').trim();
    }
    function paint() {
      $$('[data-sum]').forEach(function (out) {
        var v = val(out.getAttribute('data-sum'));
        var next = v || 'Not picked yet';
        if (out.textContent !== next) {
          out.textContent = next;
          out.classList.toggle('is-set', !!v);
        }
      });
    }
    form.addEventListener('change', paint);
    form.addEventListener('input', paint);
    form.addEventListener('sw:prefill', function () { setTimeout(paint, 0); });
    paint();

    /* Next button says where it goes */
    var next = $('[data-next]', form);
    var labels = ['Next: describe the job', 'Next: when to call', 'Next: your contact', 'Next'];
    if (next && 'MutationObserver' in window) {
      new MutationObserver(function () {
        var n = parseInt(form.getAttribute('data-step-current'), 10) || 1;
        next.textContent = labels[n - 1] || 'Next';
      }).observe(form, { attributes: true, attributeFilter: ['data-step-current'] });
    }
  }

  /* ---------- 3. ZIP: check as soon as 5 digits are typed ---------- */
  function zipAuto() {
    var box = $('[data-zip]');
    if (!box) return;
    var input = $('input', box), btn = $('button', box);
    if (!input || !btn) return;
    input.addEventListener('input', function () {
      if (input.value.replace(/\D/g, '').length === 5) btn.click();
    });
  }

  ready(function () { estimator(); draftSheet(); zipAuto(); });

  /* ================= Motion (only with motion allowed) ================= */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  ready(function () {
    /* Running total: a bar that climbs with the page and lands in the footer TOTAL */
    var bar = document.createElement('div');
    bar.className = 'ledger-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    var totalEl = $('[data-total]');
    var fill = $('.footer__total-fill');
    var footer = $('.footer');

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: function (self) { bar.style.setProperty('--ledger-p', self.progress.toFixed(4)); }
    });
    if (fill && footer && totalEl) {
      /* the climb lands: the bar hands over to the footer TOTAL, which lights up once */
      gsap.timeline({ scrollTrigger: { trigger: footer, start: 'top 85%', once: true } })
        .to(bar, { opacity: 0, duration: 0.3 })
        .fromTo(fill, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power3.inOut', immediateRender: false }, 0)
        .fromTo(totalEl, { color: '#F6F3ED' }, { color: '#E07A63', duration: 0.6, immediateRender: false }, 0.6);
    }

    /* Hero: the cost sheet bars rule themselves in (h1 is never delayed) */
    var heroBars = $$('#hero .sheet__bar');
    if (heroBars.length) {
      gsap.from(heroBars, { scaleX: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out', delay: 0.25 });
    }

    /* Estimator bars re-rule when the project changes */
    var sel = $('[data-est-item]');
    if (sel) sel.addEventListener('change', function () {
      gsap.fromTo('#budget-tool .sheet__bar', { scaleX: 0 }, { scaleX: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out' });
    });

    /* Drawings: lines are drawn the way a sheet is ruled */
    function drawIn(svg, scrub) { /* scrub kept for reference; all draws play once */
      var parts = $$('path, circle', svg).filter(function (p) {
        return p.hasAttribute('pathLength') && !p.classList.contains('dash');
      });
      if (!parts.length) return;
      gsap.set(parts, { strokeDasharray: 1, strokeDashoffset: 1 });
      var tl = gsap.timeline({
        scrollTrigger: scrub
          ? { trigger: svg, start: 'top 85%', end: 'center 45%', scrub: 0.6 }
          : { trigger: svg, start: 'top 85%', once: true }
      });
      tl.to(parts, { strokeDashoffset: 0, duration: scrub ? 1 : 0.9, stagger: scrub ? 0.08 : 0.06, ease: 'power2.inOut' });
      var dots = $$('.red-dot', svg);
      if (dots.length) tl.from(dots, { scale: 0, transformOrigin: 'center', duration: 0.3, stagger: 0.1 }, '>-0.2');
    }
    $$('.house__draw').forEach(function (s) { drawIn(s, false); });
    $$('.stage__draw, .permit__sheet .draw, .egress__fig .draw').forEach(function (s) { drawIn(s, false); });

    /* Services: line numbers tick in as each row enters */
    $$('.svc-row').forEach(function (row) {
      gsap.from(row, {
        y: 16, opacity: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 92%', once: true }
      });
    });

    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
