/* mechanic-B · code + plain signature, two small tools, one brake-pad scroll story */
(function () {
  var SW = window.SW || {};
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* ---- tool: code in plain English (works with or without motion) ---- */
  var codeIn = document.querySelector('[data-code-in]');
  var codeGo = document.querySelector('[data-code-go]');
  var codeOut = document.querySelector('[data-code-out]');
  if (codeIn && codeGo && codeOut) {
    var rows = Array.prototype.slice.call(document.querySelectorAll('.code-row[data-code]'));
    var lookup = function () {
      var q = (codeIn.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      rows.forEach(function (r) { r.classList.remove('is-hit'); });
      if (!q) { codeOut.textContent = 'Type a code like P0420.'; return; }
      var hit = rows.filter(function (r) { return r.getAttribute('data-code') === q; })[0];
      if (hit) {
        hit.classList.add('is-hit');
        var dd = hit.querySelector('dd');
        codeOut.textContent = q + ': ' + (dd ? dd.textContent : '');
      } else {
        codeOut.textContent = 'Not on this sample list. Text us the code and we’ll tell you what we’d test first.';
      }
    };
    codeGo.addEventListener('click', lookup);
    codeIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); lookup(); } });
  }

  /* ---- tool: fix it or move on ---- */
  var fix = document.querySelector('[data-fix]');
  if (fix) {
    var fixOut = fix.querySelector('[data-fix-out]');
    var fixCode = fix.querySelector('[data-fix-code]');
    var val = function (n) { var c = fix.querySelector('input[name="' + n + '"]:checked'); return c ? +c.value : 2; };
    var judge = function () {
      var s = val('fx-worth') + val('fx-keep') - val('fx-size');
      var code, text;
      if (s >= 4) { code = 'VERDICT · FIX'; text = 'Fix it.'; }
      else if (s >= 2) { code = 'VERDICT · FIX, PLAN AHEAD'; text = 'Fix it, and start saving for the next one.'; }
      else { code = 'VERDICT · SECOND LOOK'; text = 'Get a second look before you spend.'; }
      if (fixCode) fixCode.textContent = code;
      if (fixOut) fixOut.textContent = text;
    };
    fix.addEventListener('change', judge);
  }

  if (!motion) return;

  /* ---- scramble: code lines resolve as they enter ---- */
  var GLYPHS = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
  var scramble = function (el) {
    if (el.__done) return; el.__done = true;
    var vis = el.querySelector('.scr'); if (!vis) return;
    var final = vis.getAttribute('data-final');
    var t0 = performance.now(), dur = 450;
    var tick = function (now) {
      var p = Math.min(1, (now - t0) / dur), out = '';
      for (var i = 0; i < final.length; i++) {
        var ch = final[i];
        out += (ch === ' ' || i / final.length < p) ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      vis.textContent = out;
      if (p < 1) requestAnimationFrame(tick); else vis.textContent = final;
    };
    requestAnimationFrame(tick);
  };
  var scr = Array.prototype.slice.call(document.querySelectorAll('[data-scramble]'));
  scr.forEach(function (el) {
    var txt = el.textContent;
    el.textContent = '';
    var sr = document.createElement('span'); sr.className = 'sr-only'; sr.textContent = txt;
    var vis = document.createElement('span'); vis.className = 'scr'; vis.setAttribute('aria-hidden', 'true');
    vis.setAttribute('data-final', txt); vis.textContent = txt;
    el.appendChild(sr); el.appendChild(vis);
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { scramble(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.02, rootMargin: '0px 0px -5% 0px' });
    scr.forEach(function (el) { io.observe(el); });
  }

  /* ---- hero: the code types in (h1 is never delayed) ---- */
  var typed = document.querySelector('[data-type]');
  if (typed) {
    var full = typed.textContent, k = 0;
    typed.setAttribute('aria-label', full);
    typed.textContent = '';
    var step = function () {
      k++; typed.textContent = full.slice(0, k);
      if (k < full.length) setTimeout(step, 85);
      else { typed.removeAttribute('aria-label'); }
    };
    setTimeout(step, 120);
  }

  var gsap = window.gsap, ST = window.ScrollTrigger;
  if (!gsap || !ST) return;
  gsap.registerPlugin(ST);

  /* ---- services: scan meter follows the row in view ---- */
  var meter = document.querySelector('[data-scan-now]');
  var scanRows = Array.prototype.slice.call(document.querySelectorAll('[data-scan-row]'));
  var pad2 = function (n) { return (n < 10 ? '0' : '') + n; };
  if (meter && scanRows.length) {
    scanRows.forEach(function (row, i) {
      ST.create({
        trigger: row, start: 'top 60%', end: 'bottom 60%',
        onToggle: function (self) {
          if (self.isActive) {
            meter.textContent = 'Row ' + pad2(i + 1) + ' / ' + pad2(scanRows.length);
            row.classList.add('is-scanned');
          }
        }
      });
    });
  }

  /* ---- brakes: the pad wears from 10 mm to metal with scroll (desktop) ---- */
  var stage = document.querySelector('.stage');
  var svg = document.querySelector('.stage__svg');
  var mm = document.querySelector('[data-mm]');
  var steps = Array.prototype.slice.call(document.querySelectorAll('[data-mm-step]'));
  var list = document.querySelector('.brakes__steps');
  var body = document.querySelector('.brakes__body');
  var mmFn = gsap.matchMedia ? function (q, fn) { gsap.matchMedia().add(q, fn); } : function (q, fn) { var o = {}; o[q] = fn; ST.matchMedia(o); };
  if (stage && svg && list && steps.length) {
    mmFn('(min-width: 900px)', function () {
      var t = ST.create({
        trigger: body || list, start: 'top 15%', end: 'bottom bottom', scrub: true,
        onUpdate: function (self) {
          var p = self.progress;
          var pad = Math.max(0, 1 - p * 1.08);
          svg.style.setProperty('--pad', pad.toFixed(3));
          var val = Math.round(pad * 10);
          if (mm) mm.textContent = String(val);
          stage.classList.toggle('is-metal', val === 0);
          var idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
          steps.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
        }
      });
      return function () {
        t.kill();
        svg.style.removeProperty('--pad');
        if (mm) mm.textContent = '10';
        stage.classList.remove('is-metal');
      };
    });
  }

  /* ---- road test: the speed and rpm traces draw left to right, once ---- */
  var trace = document.querySelector('.trace__svg');
  if (trace) {
    var tag = document.querySelector('.trace__tag');
    var tl = gsap.timeline({ scrollTrigger: { trigger: trace, start: 'top 85%', once: true } });
    tl.fromTo(trace, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power2.inOut', clearProps: 'clipPath' });
    if (tag) tl.fromTo(tag, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: .3, clearProps: 'all' }, '-=.55');
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
})();
