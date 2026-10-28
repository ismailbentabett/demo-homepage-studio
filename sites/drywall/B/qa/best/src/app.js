/* drywall-B · Raking Light: the work light, the grade strip, and the three small tools. */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var root = document.documentElement;

  function setGrade(strip, lvl, cumulative) {
    if (!strip) return;
    $$('.grade__cells > i', strip).forEach(function (c, i) {
      var on = cumulative ? i <= lvl : i === lvl;
      if (on) c.setAttribute('data-on', ''); else c.removeAttribute('data-on');
    });
  }
  function checked(name) { var el = $('input[name="' + name + '"]:checked'); return el ? el.value : ''; }

  function init() {
    var SW = window.SW || {};
    var fact = SW.fact ? SW.fact.bind(SW) : function () { return null; };

    /* ---- hero mask texture: a lit knockdown tile, drawn once (no file, no request) ---- */
    var h1 = $('.hero__h1');
    if (h1 && window.XMLSerializer) {
      try {
        var box = document.createElement('div');
        box.innerHTML = '<svg width="360" height="360" viewBox="0 0 360 360"><filter id="t" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">' +
          '<feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7" stitchTiles="stitch"/>' +
          '<feComponentTransfer><feFuncA type="table" tableValues="0 0 0.05 0.55 0.8 0.85 1"/></feComponentTransfer>' +
          '<feDiffuseLighting surfaceScale="3" diffuseConstant="1.05" lighting-color="#FFFFFF"><feDistantLight azimuth="190" elevation="34"/></feDiffuseLighting>' +
          '<feComponentTransfer><feFuncR type="linear" slope="0.42" intercept="0.36"/><feFuncG type="linear" slope="0.42" intercept="0.36"/><feFuncB type="linear" slope="0.42" intercept="0.36"/></feComponentTransfer>' +
          '</filter><rect width="360" height="360" filter="url(#t)"/></svg>';
        var str = new XMLSerializer().serializeToString(box.firstChild);
        h1.style.setProperty('--tex', 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(str) + '")');
        h1.classList.add('has-tex');
      } catch (e) { /* solid ink stays */ }
    }

    /* ---- prefill extras: level / size / texture ride along with data-service ---- */
    document.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-level],[data-size],[data-texture]') : null;
      if (!t || !SW.prefillForm || t.closest('form[data-lead]')) return;
      var d = {};
      if (t.getAttribute('data-level')) d.level = t.getAttribute('data-level');
      if (t.getAttribute('data-size')) d.size = t.getAttribute('data-size');
      if (t.getAttribute('data-texture')) d.texture = t.getAttribute('data-texture');
      setTimeout(function () { SW.prefillForm(d, { scroll: false }); }, 30);
    });

    /* ---- header strip: the grade of the section in view ---- */
    var hdrStrip = $('[data-grade-live]');
    if (hdrStrip && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (x) {
          if (x.isIntersecting && !(x.target.id === 'levels' && root.classList.contains('is-story'))) setGrade(hdrStrip, +x.target.getAttribute('data-grade'));
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main > section[data-grade]').forEach(function (s) { io.observe(s); });
    }

    /* ---- finish-level picker ---- */
    var pk = $('[data-picker]');
    function picker() {
      var room = checked('pk-room'), win = checked('pk-win'), sheen = checked('pk-sheen'), tex = checked('pk-tex');
      var lvl = 4, why = 'Three coats, sanded. Under your ceiling light the seams are gone.';
      if (tex === 'yes') { lvl = 3; why = 'Texture on top hides the seams. Two coats is enough, and you pay for less sanding.'; }
      else if (win === 'yes') { lvl = 5; why = 'Low sun across a big window shows every seam. A skim over the whole wall flattens it.'; }
      else if (sheen === 'semi') { lvl = 5; why = 'Shiny paint shows every ridge. A skim over the whole wall flattens it.'; }
      else if (room === 'garage') { lvl = 3; why = 'A garage wall takes knocks, not sunset light. Two coats is the usual call.'; }
      else if (room === 'hall' && sheen !== 'flat') { lvl = 4; why = 'Three coats. If a window lights the hall from the end, ask us about Level 5.'; }
      setGrade($('[data-picker-grade]', pk), lvl);
      $('[data-picker-level]', pk).textContent = 'Level ' + lvl + ' for this room.';
      $('[data-picker-why]', pk).textContent = why;
      $('[data-picker-n]', pk).textContent = lvl;
      var go = $('[data-picker-go]', pk);
      go.setAttribute('data-service', lvl === 5 ? 'Smooth wall skim coat' : 'Taping and finishing');
      go.setAttribute('data-level', 'Level ' + lvl);
      if (window.__beam) window.__beam(lvl);
    }
    if (pk) { pk.addEventListener('change', picker); picker(); }

    /* ---- patch sizer (prices come from facts, never typed here) ---- */
    var sz = $('[data-sizer]');
    var prices = fact('proof.prices', 'prices') || [];
    function sizer() {
      var size = checked('sz-size'), where = checked('sz-where'), tex = checked('sz-tex');
      var p = prices[0], tm = prices[3];
      var visits = { coin: 1, fist: 2, plate: 2, door: 3 }[size] || 2;
      var range = $('[data-sizer-range]', sz), item = $('[data-sizer-item]', sz);
      if (size === 'door') {
        range.textContent = 'Measured on a visit';
        item.textContent = 'Bigger than a patch: new board, taped and finished to the level you choose.';
      } else if (p) {
        range.textContent = p.from + ' to ' + p.to;
        item.textContent = p.item + (p.note ? ', ' + p.note : '') + '.' + (tex === 'yes' && tm ? ' Texture match on top: ' + tm.from + ' to ' + tm.to + ' a wall.' : '');
      }
      if (tex === 'yes') visits += 1;
      $('[data-sizer-visits]', sz).textContent = visits + (visits === 1 ? ' visit' : ' visits');
      $('[data-sizer-coats]', sz).textContent = size === 'coin' ? 'quick-set mud, two coats the same day' : '3 coats, dry overnight between them' + (tex === 'yes' ? ', texture on the last visit' : '');
      $('[data-sizer-dust]', sz).textContent = where === 'ceiling' ? 'Dust: plastic over the floor and furniture below, vacuum sander overhead.' : 'Dust: plastic on the floor, sanded with a vacuum sander.';
      var go = $('[data-sizer-go]', sz);
      go.setAttribute('data-size', { coin: 'Coin', fist: 'Fist', plate: 'Plate', door: 'Door-sized' }[size] || '');
      go.setAttribute('data-service', size === 'door' ? 'Taping and finishing' : 'Patch repair');
    }
    if (sz) { sz.addEventListener('change', sizer); sizer(); }

    /* ---- popcorn test-first checker ---- */
    var pop = $('[data-pop]');
    function popcorn() {
      var dec = checked('pc-dec'), paint = checked('pc-paint'), test = checked('pc-test');
      var out = $('[data-pop-out]', pop), html;
      if (test === 'neg') html = '<b>Clean result on file.</b> Bring the lab sheet; the scrape is next.';
      else if (dec === 'pre60' || dec === '6070') html = '<b>Test first.</b> A small sample goes to a lab before anyone scrapes.';
      else if (dec === '80s') html = '<b>Test it anyway.</b> Ceilings from the early 1980s can still hold it, and a sample settles it.';
      else html = '<b>Probably clear to scrape.</b> We still ask about the year before the first pass.';
      if (paint === 'yes') html += ' Painted popcorn soaks up less water, so the scrape takes longer.';
      out.innerHTML = html;
    }
    if (pop) { pop.addEventListener('change', popcorn); popcorn(); }

    /* ======================= motion (the work light) ======================= */
    if (SW.reduced || !root.classList.contains('sw-motion') || !window.gsap) return;
    var gsap = window.gsap, ST = window.ScrollTrigger;
    if (ST) gsap.registerPlugin(ST);

    function light(id) { return $$('#' + id + ' feDistantLight'); }
    function setAz(list, az, el) { list.forEach(function (l) { l.setAttribute('azimuth', az.toFixed(1)); if (el != null) l.setAttribute('elevation', el.toFixed(1)); }); }

    /* intro: the beam sweeps once across the h1, then stays at 62% */
    var hero = $('.hero');
    var knock = light('f-knock');
    var beam = { bx: 0, az: 200 };
    function paintBeam() {
      h1.style.setProperty('--bx', beam.bx.toFixed(1) + '%');
      hero.style.setProperty('--bx', beam.bx.toFixed(1) + '%');
      setAz(knock, beam.az);
    }
    var intro = gsap.timeline({ onUpdate: paintBeam })
      .fromTo(beam, { bx: 0, az: 200 }, { bx: 100, az: 165, duration: 0.75, ease: 'power2.inOut', onUpdate: paintBeam })
      .to(beam, { bx: 62, az: 178, duration: 0.35, ease: 'power2.out', onUpdate: paintBeam });
    function skip() { if (intro.isActive()) intro.progress(1); }
    window.addEventListener('wheel', skip, { once: true, passive: true });
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('touchstart', skip, { once: true, passive: true });
    /* the picker nudges the beam: higher level, lower light */
    window.__beam = function (lvl) {
      if (intro.isActive()) return;
      gsap.to(beam, { bx: 40 + lvl * 8, az: 170 + lvl * 3, duration: 0.6, ease: 'power2.out', onUpdate: paintBeam });
    };

    if (!ST) return;

    /* levels story: scroll dials the strip L0 → L5 while the seams flatten */
    var track = $('.levels__track');
    var seamScale = $('#f-seam feDiffuseLighting');
    var seamLight = light('f-seam');
    var sGrade = $('[data-story-grade]');
    var flags = $('[data-story-flags]');
    var steps = $$('.levels .step');
    var lastLvl = -1;
    function story(p) {
      var lvl = Math.min(5, Math.round(p * 5.4));
      seamScale.setAttribute('surfaceScale', (6 * Math.pow(1 - Math.min(1, p * 1.05), 1.3) + 0.15).toFixed(2));
      setAz(seamLight, 196 - p * 22, 8 + p * 4);
      if (lvl === lastLvl) return;
      lastLvl = lvl;
      setGrade(sGrade, lvl, true);
      setGrade(hdrStrip, lvl);
      flags.textContent = lvl <= 2 ? '3' : lvl === 3 ? '2' : lvl === 4 ? '1' : '0';
      var idx = lvl <= 2 ? 0 : lvl - 2;
      steps.forEach(function (s, i) { s.classList.toggle('is-on', i === idx); });
    }
    ST.matchMedia({
      '(min-width: 900px)': function () {
        root.classList.add('is-story');
        var st = ST.create({
          trigger: track, start: 'top top+=' + ($('[data-header]').offsetHeight || 92), end: 'bottom bottom',
          onUpdate: function (self) { story(self.progress); }, onRefresh: function (self) { story(self.progress); }
        });
        return function () { st.kill(); root.classList.remove('is-story'); };
      },
      '(max-width: 899px)': function () {
        var sts = steps.map(function (s, i) {
          return ST.create({ trigger: s, start: 'top 70%', end: 'bottom 30%', onToggle: function (self) { if (self.isActive) story([0, 0.6, 0.78, 1][i]); } });
        });
        gsap.set(steps, { clipPath: 'inset(0 0 100% 0)' });
        sts.push(ST.batch(steps, { start: 'top 95%', once: true, onEnter: function (b) { gsap.to(b, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.out', stagger: 0.08 }); } }));
        return function () { gsap.set(steps, { clearProps: 'clipPath' }); };
      }
    });

    /* texture matcher: the light rakes across each swatch once (verb: wipe) */
    var TEX = ['f-smooth', 'f-peel', 'f-knock', 'f-skip'];
    function rake(id, delay) {
      var l = light(id), o = { az: 262, el: 3 };
      setAz(l, o.az, o.el);
      gsap.to(o, { az: 190, el: 9, duration: 1.1, delay: delay || 0, ease: 'power2.out', onUpdate: function () { setAz(l, o.az, o.el); } });
    }
    ST.create({ trigger: '#texture .tex__tool', start: 'top 75%', once: true, onEnter: function () { TEX.forEach(function (id, i) { rake(id, i * 0.18); }); } });
    var tabs = $('#texture [data-tabs]');
    if (tabs) tabs.addEventListener('sw:tab', function (e) { rake(TEX[e.detail.index], 0); });

    /* break: the sun sets, so the window light slides across the wall with the scroll */
    var brk = $('#break');
    ST.create({ trigger: brk, start: 'top bottom', end: 'bottom top', onUpdate: function (s) {
      brk.style.setProperty('--wx', (12 + s.progress * 52).toFixed(1) + '%');
    } });

    /* footer: L5 reached, the light switches off */
    var foot = $('.foot');
    ST.create({ trigger: foot, start: 'top 85%', once: true, onEnter: function () { setTimeout(function () { foot.classList.add('is-off'); }, 700); } });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }

  if (document.readyState === 'complete') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
