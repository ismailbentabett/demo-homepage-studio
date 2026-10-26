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

  /* 1. Waterline rail: its tip sits 60% down the viewport, so the line is always "drawn to here". */
  var rail = document.querySelector('[data-page-rail]');
  if (rail && main) {
    var railY = function () {
      var top = main.getBoundingClientRect().top;
      var y = Math.max(0, Math.min(main.offsetHeight, window.innerHeight * 0.6 - top));
      rail.style.setProperty('--sw-y', y.toFixed(0) + 'px');
    };
    gsap.fromTo(rail, { '--sw-y': '0px' }, { '--sw-y': (window.innerHeight * 0.6).toFixed(0) + 'px', duration: 1, ease: 'power2.out', delay: 0.1, onComplete: function () {
      ScrollTrigger.create({ trigger: main, start: 'top top', end: 'bottom bottom', onUpdate: railY, onRefresh: railY });
      railY();
    } });
  }

  /* 2. The visit card ticks a line per section; the phone bar shows the latest line. */
  var card = document.querySelector('[data-visit-card]');
  var lines = card ? Array.prototype.slice.call(card.querySelectorAll('[data-log]')) : [];
  var now = document.querySelector('[data-log-now]');
  var meterHost = document.querySelector('[data-mobilebar]');
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
