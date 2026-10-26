/* autotuneup-C · the altitude gauge (signature), the drifting hero strip, and the "what's due" readout */
(function () {
  if (!window.SW) return;

  /* ---------- Tool: what's due at my mileage (works with or without motion) ---------- */
  var due = document.querySelector('[data-due]');
  if (due) {
    var miles = due.querySelector('[data-due-miles]');
    var roads = due.querySelector('[data-due-roads]');
    var out = due.querySelector('[data-due-out]');
    var render = function () {
      var m = parseInt((miles.value || '').replace(/\D/g, ''), 10);
      if (isNaN(m) || m <= 0) {
        out.textContent = 'Oil and a filter look at every visit. Enter your mileage for the rest of the list.';
        return;
      }
      var r = roads.value;
      var list = ['Oil change at your manual’s interval'];
      if (r === 'dirt' || m >= 15000) list.push(r === 'dirt' ? 'Engine and cabin air filters (dirt roads: every visit)' : 'Engine and cabin air filters');
      list.push('Tire rotation and pressure');
      if (m >= 30000) list.push('Coolant test, exchange at your manual’s interval');
      if (m >= 45000 || r === 'ski') list.push('Battery load test');
      if (m >= 60000) list.push('Spark plugs and coils checked');
      if (r === 'ski') list.push('Tread measured for the ski road');
      list.push('Wipers, belts and hoses looked over');
      out.textContent = '';
      var head = document.createElement('span');
      head.textContent = 'At ' + m.toLocaleString('en-US') + ' miles, sample schedule:';
      var ul = document.createElement('ul');
      list.forEach(function (t) {
        var li = document.createElement('li');
        li.textContent = t;
        ul.appendChild(li);
      });
      out.appendChild(head);
      out.appendChild(ul);
    };
    miles.addEventListener('input', render);
    roads.addEventListener('change', render);
  }

  /* ---------- Motion ---------- */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(init, 50);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    /* Signature: the altitude gauge climbs (and comes back down) as each stop enters */
    var gauge = document.querySelector('.alt-gauge');
    var gValue = gauge && gauge.querySelector('.alt-gauge__value');
    var gPlace = gauge && gauge.querySelector('.alt-gauge__place');
    var state = { alt: 7199 };
    var MIN = 6000, MAX = 8500;
    var setP = function (a) { gauge.style.setProperty('--alt-p', ((a - MIN) / (MAX - MIN)).toFixed(3)); };
    if (gauge) setP(7199);

    var goTo = function (alt, place) {
      if (!gauge) return;
      gsap.to(state, {
        alt: alt,
        duration: 0.9,
        ease: 'power2.inOut',
        overwrite: true,
        onUpdate: function () { gValue.textContent = Math.round(state.alt).toLocaleString('en-US'); }
      });
      setP(alt);
      if (gPlace.textContent !== place) {
        gauge.classList.add('is-swapping');
        setTimeout(function () {
          gPlace.textContent = place;
          gauge.classList.remove('is-swapping');
        }, 200);
      }
    };

    document.querySelectorAll('[data-sw-signature="altitude-marker"]').forEach(function (sec) {
      var alt = parseInt(sec.getAttribute('data-altitude'), 10);
      var place = sec.getAttribute('data-place') || '';
      if (isNaN(alt)) return;
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: function () { goTo(alt, place); },
        onEnterBack: function () { goTo(alt, place); }
      });
      /* the in-frame pill counts up from the last stop when its band arrives */
      var pill = sec.querySelector('.story-band__media .alt-pill b');
      if (pill) {
        var o = { v: alt - 400 };
        gsap.to(o, {
          v: alt,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: sec, start: 'top 75%', once: true },
          onUpdate: function () { pill.textContent = Math.round(o.v).toLocaleString('en-US') + ' ft'; }
        });
      }
    });

    /* Story: the hero strip drifts left as you leave the statement (desktop), like the road out of town */
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        var strip = document.querySelector('.hero__strip');
        var track = document.querySelector('.strip__track');
        if (!strip || !track) return;
        strip.style.overflow = 'hidden';
        var tw = gsap.fromTo(track, { x: 0 }, {
          x: function () { return -Math.max(0, track.scrollWidth - strip.clientWidth) ; },
          ease: 'none',
          scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true }
        });
        return function () { tw.kill(); strip.style.overflow = ''; gsap.set(track, { x: 0 }); };
      }
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
  init();
})();
