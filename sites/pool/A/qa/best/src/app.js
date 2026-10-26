/* pool-A signature: the Waterline Visit Log.
   Without JS or with reduced motion the visit card is a finished sample report and the rail is drawn in full.
   With motion: the rail follows the reader down the page and the card ticks one line per section. */
(function () {
  if (!window.SW || SW.reduced) return;
  if (!document.documentElement.classList.contains('sw-motion')) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });

  var main = document.getElementById('main');

  /* 1. Waterline rail: fills to the reader's position (tip 60% down the viewport).
     The phone/tablet margin rail and the desktop spine timeline both read --rail-p. */
  var root = document.documentElement;
  var book = document.querySelector('.logbook') || main;
  var railQueued = false;
  function railP() {
    railQueued = false;
    if (!main) return;
    var wide = window.matchMedia('(min-width: 1200px)').matches;
    var host = wide ? book : main;
    var r = host.getBoundingClientRect();
    var p = (window.innerHeight * 0.6 - r.top) / Math.max(1, r.height);
    if (wide) p = (window.innerHeight * 0.5 - r.top) / Math.max(1, r.height - window.innerHeight * 0.5);
    root.style.setProperty('--rail-p', Math.max(0, Math.min(1, p)).toFixed(4));
  }
  function queueRail() { if (!railQueued) { railQueued = true; requestAnimationFrame(railP); } }
  window.addEventListener('scroll', queueRail, { passive: true });
  window.addEventListener('resize', queueRail);
  ScrollTrigger.create({ trigger: main, start: 'top bottom', end: 'bottom top', onUpdate: queueRail, onRefresh: queueRail });
  railP();

  /* 1b. The filter gauge: the needle swings up to its reading as the 08:22 line arrives. */
  var needle = document.querySelector('.gauge__needle');
  if (needle) {
    gsap.from(needle, { rotation: -75, svgOrigin: '100 105', duration: 1.1, ease: 'elastic.out(1, 0.6)',
      scrollTrigger: { trigger: needle.closest('.gauge'), start: 'top 85%', once: true } });
  }

  /* 1c. The 08:09 readout: each marker slides to its reading. The 08:36 pump: callouts draw to the parts. */
  var marks = gsap.utils.toArray('.readout__bar span');
  if (marks.length) {
    gsap.from(marks, { left: '0%', duration: 0.9, ease: 'power3.out', stagger: 0.08,
      scrollTrigger: { trigger: '.readout', start: 'top 85%', once: true } });
  }
  var calls = gsap.utils.toArray('.pump .callout');
  if (calls.length) {
    gsap.from(calls, { opacity: 0, y: 8, duration: 0.5, ease: 'power2.out', stagger: 0.18,
      scrollTrigger: { trigger: '.pump', start: 'top 75%', once: true } });
    gsap.fromTo('.pump .p-cap', { fillOpacity: 0.2 }, { fillOpacity: 0.7, duration: 0.6, repeat: 3, yoyo: true, ease: 'sine.inOut',
      scrollTrigger: { trigger: '.pump', start: 'top 60%', once: true } });
  }

  /* 1d. The 08:24 break: the cobalt rail runs along the tile line with the scroll. */
  var bl = document.querySelector('.break-rail__line');
  if (bl) {
    gsap.fromTo(bl, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power2.inOut',
      scrollTrigger: { trigger: '.break-section', start: 'top 80%', once: true } });
  }

  /* 2. The visit card ticks a line per section; the phone bar shows the latest line. */
  var card = document.querySelector('[data-visit-card]');
  var lines = card ? Array.prototype.slice.call(card.querySelectorAll('[data-log]')) : [];
  var now = document.querySelector('[data-log-now]');
  var meterHost = document.querySelector('[data-mobilebar]');
  var nowT = document.querySelector('[data-vc-now-t]');
  var nowR = document.querySelector('[data-vc-now-r]');
  if (!card || !lines.length) return;

  card.classList.add('is-live');
  lines.forEach(function (li) { li.classList.remove('is-ticked'); });

  function sync() {
    var done = lines.filter(function (l) { return l.classList.contains('is-ticked'); });
    var p = done.length / lines.length;
    card.style.setProperty('--vc-p', p.toFixed(3));
    if (meterHost) meterHost.style.setProperty('--vc-p', p.toFixed(3));
    lines.forEach(function (l) { l.classList.remove('is-current'); });
    var last = done[done.length - 1];
    if (last) {
      last.classList.add('is-current');
      if (now) now.textContent = last.querySelector('.vc-t').textContent + ' ' + last.querySelector('.vc-l').textContent;
      if (nowT && nowR && nowT.textContent !== last.querySelector('.vc-t').textContent) {
        nowT.textContent = last.querySelector('.vc-t').textContent;
        nowR.textContent = last.getAttribute('data-read') || '';
        gsap.fromTo([nowT, nowR], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.05, clearProps: 'all' });
      }
    }
  }

  function tick(li, on) {
    if (li.classList.contains('is-ticked') === on) return;
    li.classList.toggle('is-ticked', on);
    if (on) {
      gsap.fromTo(li.querySelector('.vc-l'), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: 'power2.out', clearProps: 'clipPath' });
      gsap.fromTo(li.querySelector('.vc-dot'), { scale: 0.4 }, { scale: 1, duration: 0.35, ease: 'back.out(2)', clearProps: 'transform' });
    }
    sync();
  }

  lines.forEach(function (li) {
    var target = document.querySelector(li.getAttribute('data-log'));
    if (!target) { tick(li, true); return; }
    var isLast = li === lines[lines.length - 1];
    ScrollTrigger.create({
      trigger: target,
      start: isLast ? 'top 75%' : 'top 65%',
      onEnter: function () { tick(li, true); },
      onLeaveBack: function () { tick(li, false); }
    });
  });

  /* Reaching the very end always closes the report. */
  ScrollTrigger.create({
    trigger: document.body, start: 'bottom bottom+=4', end: 'bottom bottom',
    onEnter: function () { lines.forEach(function (li) { tick(li, true); }); }
  });

  sync();
})();
