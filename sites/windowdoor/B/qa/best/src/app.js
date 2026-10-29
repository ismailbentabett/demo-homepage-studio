/* windowdoor-B · Peel-Back Label: tools (always on) + signature motion (only with sw-motion). */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }

  ready(function () {
    /* ---- 1. Label explainer: a row picks its "ask for" line ---- */
    var label = $('[data-hook="label"]');
    if (label) {
      var btns = $$('.lrow__btn', label);
      var asks = $$('.ask', label);
      var pick = function (i) {
        btns.forEach(function (b, j) { b.setAttribute('aria-pressed', String(i === j)); });
        asks.forEach(function (a, j) { a.classList.toggle('is-on', i === j); });
        btns.forEach(function (b, j) { b.parentNode.classList.toggle('is-open', i === j); });
      };
      btns.forEach(function (b, i) { b.addEventListener('click', function () { pick(i); }); });
      pick(0);
    }

    /* ---- 2. Shutters vs impact glass ---- */
    var cmp = $('[data-hook="shutters"]');
    if (cmp) {
      var nIn = $('[data-cmp-n]', cmp), wIn = $('[data-cmp-w]', cmp);
      var WHO = {
        me: ['You, on a ladder, in the heat, the day the forecast turns your way.', 'Nobody. The house is ready whether you are home or not.'],
        paid: ['Someone you pay, if they can fit you in the same week as everyone else.', 'Nobody. No one to book in the busiest week of the year.'],
        away: ['Nobody, while you are away. The house waits for a neighbour or for you.', 'Nobody. Closed and locked is ready, from any distance.']
      };
      var update = function () {
        var n = parseInt(nIn.value, 10) || 1;
        var w = parseInt(wIn.value, 10) || 0;
        var who = ($('input[name="who"]:checked', cmp) || {}).value || 'me';
        $('[data-cmp-nout]', cmp).textContent = n;
        $('[data-cmp-wout]', cmp).textContent = w;
        var openings = n + (n === 1 ? ' opening' : ' openings');
        $('[data-cmp-work]', cmp).innerHTML = '<b>' + openings + '</b> to cover before every storm and uncover after it.' +
          (w > 0 ? ' Away ' + w + (w === 1 ? ' week' : ' weeks') + ' in season: someone has to be there to do it.' : '');
        $('[data-cmp-who]', cmp).textContent = WHO[who][0];
        $('[data-cmp-who2]', cmp).textContent = WHO[who][1];
        $('[data-cmp-price]', cmp).innerHTML = '<b>' + n + '</b> ' + (n === 1 ? 'opening' : 'openings') + ' ×';
        var cta = $('[data-cmp-cta] span', cmp);
        if (cta) cta.textContent = 'Price ' + openings;
        cmp._n = n;
      };
      cmp.addEventListener('input', update);
      cmp.addEventListener('change', update);
      update();
      var cmpCta = $('[data-cmp-cta]', cmp);
      if (cmpCta && window.SW && SW.prefillForm) cmpCta.addEventListener('click', function () {
        setTimeout(function () { SW.prefillForm({ openings: cmp._n || '' }); }, 0);
      });
    }

    /* ---- 3. Order-by timeline ---- */
    var ob = $('[data-hook="orderby"]');
    if (ob) {
      var bar = $('.ob__bar', ob), result = $('[data-ob-result]', ob);
      var part = function (m) {
        var f = m - Math.floor(m), mon = MONTHS[((Math.floor(m) % 12) + 12) % 12];
        var when = f < 0.34 ? 'early ' : f < 0.67 ? 'mid-' : 'late ';
        return when + mon + (m >= 12 ? ' (next year)' : '');
      };
      var chosen = 2;
      var show = function (m) {
        chosen = m;
        var sign = m + 0.05;
        var early = sign + 9 * 7 / 30.4;     // quick: 1 + 1 + 6 + 1 weeks
        var late = sign + 19 * 7 / 30.4;     // slow: 1 + 3 + 14 + 1 weeks
        bar.style.setProperty('--sign', sign.toFixed(2));
        bar.style.setProperty('--s', early.toFixed(2));
        bar.style.setProperty('--e', late.toFixed(2));
        $$('.mbtn', ob).forEach(function (b) { b.setAttribute('aria-pressed', String(Number(b.getAttribute('data-m')) === m)); });
        var verdict;
        if (late <= 5) verdict = 'Even a slow permit leaves you done before June 1.';
        else if (early <= 5) verdict = 'Most homes are in before June 1; a slow permit pushes yours into the season.';
        else if (sign >= 5 && sign < 11) verdict = 'Your install lands in the season. We plan the day around the forecast and keep the old openings closed until the new ones are in.';
        else verdict = 'Your install lands after the season starts. Signing a month or two earlier changes that.';
        result.innerHTML = 'Sign in <b>' + MONTHS[m] + '</b>: installed between <b>' + part(early) + '</b> and <b>' + part(late) + '</b>. ' + verdict;
      };
      $$('.mbtn', ob).forEach(function (b) {
        b.addEventListener('click', function () { show(Number(b.getAttribute('data-m'))); });
      });
      show(2);
      var obCta = $('[data-ob-cta]', ob);
      if (obCta && window.SW && SW.prefillForm) obCta.addEventListener('click', function () {
        setTimeout(function () { SW.prefillForm({ details: 'Planning to sign in ' + MONTHS[chosen] + '.' }); }, 0);
      });
    }

    /* ---- 4. Motion: signature curl, peel story, fill story ---- */
    var motion = window.SW && !SW.reduced && document.documentElement.classList.contains('sw-motion');
    if (!motion || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // Intro: the cover sticker's corner curls from flat to .14 (≤ 1.1 s). Text is readable from frame 0.
    var cover = $('[data-sw-signature="peel"]');
    if (cover) {
      var st = { p: 0 };
      cover.style.setProperty('--peel', 0);
      gsap.to(st, { p: 0.14, duration: 0.9, delay: 0.15, ease: 'power3.out', onUpdate: function () { cover.style.setProperty('--peel', st.p.toFixed(3)); } });
      gsap.from('.cover-lines li', { opacity: 0, x: -12, duration: 0.5, delay: 0.35, stagger: 0.06, ease: 'power3.out', clearProps: 'all' });
    }

    // Story 1 · peel: each label row lifts its corner and uncovers its meaning as it crosses mid-viewport.
    $$('.lrow').forEach(function (row) {
      row.style.setProperty('--sw-p', 0);
      ScrollTrigger.create({
        trigger: row, start: 'top 82%', end: 'top 48%', scrub: 0.4,
        onUpdate: function (self) { row.style.setProperty('--sw-p', self.progress.toFixed(3)); },
        onLeave: function () { row.style.setProperty('--sw-p', 1); }
      });
    });

    // Break: the rain photo settles (scale 1.12 to 1) as it crosses the screen; it is never hidden.
    var brk = $(".break-img");
    if (brk) gsap.fromTo(brk, { scale: 1.12 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".break", start: "top bottom", end: "bottom top", scrub: 0.6 } });

    // Story 2 · fill: the months fill left to right to the chosen install window, then the ORDER BY sticker drops on.
    var fill = $('[data-ob-fill]'), sticker = $('[data-ob-sticker]');
    if (fill) {
      gsap.fromTo(fill, { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: '.ob__bar', start: 'top 85%', end: 'top 45%', scrub: 0.5 }
      });
    }
    if (sticker) {
      gsap.fromTo(sticker, { y: -18 }, {
        y: 0, duration: 0.52, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.ob__bar', start: 'top 55%', once: true }
      });
    }

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
