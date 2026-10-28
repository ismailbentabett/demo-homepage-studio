/* appliance-C · Prairie Pantry: the freezer-lid tape list.
   Tools (always on): thaw clock, garage fridge cold check, fix-or-replace, this month's label on the form.
   Motion (only with sw-motion): hero intro tick, ledger ticks, the year ribbon scrub, the footer tick. */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function boot() {
    /* ---- the last blank line gets this month ---- */
    var m = $('[data-this-month]');
    if (m) m.textContent = MONTHS[new Date().getMonth()];

    /* ---- thaw clock ---- */
    var thaw = $('[data-thaw]');
    if (thaw) {
      var tOut = $('[data-thaw-out]', thaw), tFig = $('.thaw__fig', thaw);
      var thawUpdate = function () {
        var full = $('input[name="thaw-full"]:checked', thaw);
        var lid = $('input[name="thaw-lid"]:checked', thaw);
        var h = full ? parseInt(full.value, 10) : 48;
        var opened = lid && lid.value === 'open';
        var left = (h / 48) * (opened ? 0.7 : 1);
        tFig.style.setProperty('--left', left.toFixed(3));
        tOut.textContent = '';
        var b = document.createElement('strong');
        b.className = 'thaw__hours';
        b.textContent = (opened ? 'Less than ' : 'About ') + h + ' hours';
        var s = document.createElement('span');
        s.textContent = opened ? 'Every opening let cold out. Shut it now and leave it until we get there.' : 'if the lid stays shut from here. Don’t open it to check.';
        tOut.appendChild(b); tOut.appendChild(document.createTextNode(' ')); tOut.appendChild(s);
      };
      thaw.addEventListener('change', thawUpdate);
      thawUpdate();
    }

    /* ---- garage fridge cold check ---- */
    var cold = $('[data-cold]');
    if (cold) {
      var cm = $('[data-cold-month]', cold), ct = $('[data-cold-temp]', cold), cv = $('[data-cold-val]', cold);
      var co = $('[data-cold-out]', cold), cf = $('[data-cold-fig]', cold);
      var month = new Date().getMonth();
      if (cm) cm.selectedIndex = month;
      var coldUpdate = function () {
        var t = parseInt(ct.value, 10);
        cv.textContent = t + '°F';
        ct.setAttribute('aria-valuetext', t + ' degrees Fahrenheit');
        var head, body;
        if (t < 50) {
          head = 'At ' + t + '°F the fresh-food side is already cold.';
          body = 'The thermostat barely asks for cooling, so the freezer side drifts soft. That’s the winter problem, and a cold-weather kit or a move usually fixes it.';
          cf.style.setProperty('--hatch', 'url(#hatch-warm)');
          cf.style.setProperty('--hatch-o', Math.max(0.25, (50 - t) / 60 + 0.25).toFixed(2));
        } else if (t < 60) {
          head = 'At ' + t + '°F you’re near the edge.';
          body = 'Many fridges start to struggle around here. If the freezer side feels soft, the cold garage is the first suspect.';
          cf.style.setProperty('--hatch', 'url(#hatch-warm)');
          cf.style.setProperty('--hatch-o', '.3');
        } else {
          head = 'At ' + t + '°F the garage isn’t the problem.';
          body = 'A soft freezer at this temperature points to a fan, a defrost part or the gasket. That’s a regular fridge repair.';
          cf.style.setProperty('--hatch', 'url(#hatch-frost)');
          cf.style.setProperty('--hatch-o', '1');
        }
        co.textContent = '';
        var b = document.createElement('strong'); b.textContent = head;
        co.appendChild(b); co.appendChild(document.createTextNode(body));
      };
      cm.addEventListener('change', function () { ct.value = cm.value; coldUpdate(); });
      ct.addEventListener('input', coldUpdate);
      ct.value = cm.value;
      coldUpdate();
    }

    /* ---- fix or replace ---- */
    var fix = $('[data-fix]');
    if (fix) {
      var fa = $('[data-fix-app]', fix), fg = $('[data-fix-age]', fix), fv = $('[data-fix-val]', fix);
      var fo = $('[data-fix-out]', fix), fb = $('[data-fix-book]', fix);
      var services = (window.SW && SW.fact && SW.fact('services')) || [];
      var fixUpdate = function () {
        var opt = fa.options[fa.selectedIndex];
        var life = parseInt(opt.getAttribute('data-life'), 10);
        var age = parseInt(fg.value, 10);
        var name = opt.textContent;
        fv.textContent = age + (age === 1 ? ' year' : ' years');
        fg.setAttribute('aria-valuetext', age + ' years old');
        var r = age / life, head, body;
        if (r < 0.5) { head = 'Worth fixing.'; body = 'A ' + name.toLowerCase() + ' lasts about ' + life + ' years (typical), so this one has most of its life left.'; }
        else if (r < 0.85) { head = 'Borderline.'; body = 'It’s past half of a typical ' + life + '-year life. Fix it if the repair is under half the price of a new one; we’ll give you the number first.'; }
        else { head = 'Probably replace.'; body = 'At ' + age + ' years it’s near or past a typical ' + life + '-year life. We’ll still look, and we’ll tell you straight if it isn’t worth it.'; }
        fo.textContent = '';
        var b = document.createElement('strong'); b.textContent = head;
        fo.appendChild(b); fo.appendChild(document.createTextNode(body));
        var svc = services[parseInt(fa.value, 10)];
        if (svc && fb) {
          fb.setAttribute('data-service', svc.name);
          fb.setAttribute('data-age', name + ', about ' + age + ' years old');
        }
      };
      fa.addEventListener('change', fixUpdate);
      fg.addEventListener('input', fixUpdate);
      fixUpdate();
      if (fb) fb.addEventListener('click', function () {
        var d = fb.getAttribute('data-age');
        setTimeout(function () {
          var t = $('form[data-lead] [name="details"]');
          if (t && d && !t.value) t.value = d + '. ';
        }, 0);
      });
    }

    /* ---------------- motion ---------------- */
    var root = document.documentElement;
    var reduced = window.SW ? SW.reduced : !matchMedia('(prefers-reduced-motion: no-preference)').matches;
    if (reduced || !root.classList.contains('sw-motion')) return;

    // hero: the first tick draws at 0.9 s; any scroll or key skips to the end state
    var hero = $('.hero');
    if (hero) {
      requestAnimationFrame(function () { hero.classList.add('is-intro'); });
      var skip = function () { hero.classList.add('is-intro'); var h1 = $('.hero__h1'); if (h1) h1.classList.add('is-in'); };
      window.addEventListener('scroll', skip, { once: true, passive: true });
      window.addEventListener('keydown', skip, { once: true });
    }

    // ledger + small lists: tick as each line enters
    var watch = function (els, cls, stagger) {
      if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add(cls); }); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add(cls);
          io.unobserve(en.target);
        });
      }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });
      els.forEach(function (e, i) { if (stagger) e.style.setProperty('--i', i % 3); io.observe(e); });
    };
    watch($$('.ledger__line'), 'is-in', true);
    watch($$('.footer'), 'is-in', false);

    // the year ribbon
    var year = $('#year');
    if (!year) return;
    var cards = $$('.yr', year);
    var track = $('.year__track', year);
    var stick = $('.year__stick', year);
    var bar = $('.year__bar', year);
    var tickTo = function (p) {
      var n = Math.round(p * (cards.length - 1) + 0.35);
      cards.forEach(function (c, i) { c.classList.toggle('is-ticked', i < n || p > 0.985); });
    };

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      var mm = gsap.matchMedia();
      mm.add('(min-width: 640px)', function () {
        year.classList.add('is-pinned');
        var dist = function () { return Math.max(0, track.scrollWidth - stick.clientWidth); };
        var tw = gsap.to(track, {
          x: function () { return -dist(); }, ease: 'none',
          scrollTrigger: {
            trigger: year, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
            onUpdate: function (st) { tickTo(st.progress); if (bar) bar.style.setProperty('--yp', st.progress.toFixed(3)); }
          }
        });
        return function () { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(track, { clearProps: 'transform' }); year.classList.remove('is-pinned'); };
      });
      mm.add('(max-width: 639px)', function () { watch(cards, 'is-ticked', false); });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    } else {
      watch(cards, 'is-ticked', false);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
