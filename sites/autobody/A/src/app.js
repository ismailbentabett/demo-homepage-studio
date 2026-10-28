/* autobody-A · Booth Nine: filmstrip pause, dent check verdict, the nine-station peel story */
(function () {
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* filmstrip pause (only exists to stop a moving strip) */
  var strip = document.querySelector('[data-strip]');
  var sbtn = document.querySelector('[data-strip-btn]');
  if (strip && sbtn) {
    if (!motion) { sbtn.hidden = true; }
    else {
      sbtn.addEventListener('click', function () {
        var paused = strip.classList.toggle('is-paused');
        sbtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
        sbtn.querySelector('span').textContent = paused ? 'Play the strip' : 'Pause the strip';
        var use = sbtn.querySelector('use');
        if (use) use.setAttribute('href', paused ? '#i-play' : '#i-pause');
      });
    }
  }

  /* dent check: likely route, announced */
  var dq = document.querySelector('[data-dent]');
  if (dq) {
    var live = document.querySelector('[data-dent-live]');
    var pdr = document.querySelector('.verdict--pdr');
    var body = document.querySelector('.verdict--body');
    dq.addEventListener('submit', function (e) { e.preventDefault(); });
    dq.addEventListener('change', function () {
      var v = function (n) { var el = dq.querySelector('[name="' + n + '"]:checked'); return el ? el.value : ''; };
      var size = v('size'), paint = v('paint'), edge = v('edge');
      var toBody = size === 'big' || paint === 'yes' || edge === 'yes';
      var toPdr = size && size !== 'big' && paint === 'no' && edge === 'no';
      pdr.classList.toggle('is-hit', !!toPdr);
      body.classList.toggle('is-hit', !!toBody);
      if (toBody) live.textContent = 'Likely body and paint: stations 5 to 8. Send photos for a range.';
      else if (toPdr) live.textContent = 'Likely paintless: the dent is pushed out from behind and the factory paint stays.';
      else live.textContent = 'Keep going: answer all three questions.';
    });
  }

  /* photo slots: show the chosen file name in the taped slot */
  Array.prototype.forEach.call(document.querySelectorAll('.slot__in'), function (inp) {
    inp.addEventListener('change', function () {
      var slot = inp.closest('.slot');
      var out = slot && slot.querySelector('[data-slot-file]');
      if (!out) return;
      var f = inp.files && inp.files[0];
      out.textContent = f ? f.name : 'Add photo';
      slot.classList.toggle('is-filled', !!f);
    });
  });

  /* curly quotes inside review text (facts keep straight ones) */
  Array.prototype.forEach.call(document.querySelectorAll('[data-quotes]'), function (p) {
    p.textContent = p.textContent
      .replace(/(^|[\s(])'/g, function (m, a) { return a + '‘'; }).replace(/'/g, '’')
      .replace(/(^|[\s(])"/g, function (m, a) { return a + '“'; }).replace(/"/g, '”');
  });

  if (!(motion && window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  /* gloss break: the photo settles as it arrives, like a panel coming out of the booth */
  var gimg = document.querySelector('.gloss__ph img');
  if (gimg) {
    gsap.fromTo(gimg, { scale: 1.14, yPercent: -4 }, {
      scale: 1, yPercent: 4, ease: 'none',
      scrollTrigger: { trigger: '.gloss', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  /* the peel: each station's tape comes off as it reaches the middle of the screen */
  var stns = gsap.utils.toArray('.stn');
  stns.forEach(function (el) {
    ScrollTrigger.create({
      trigger: el, start: 'top 62%', end: 'bottom 38%',
      onEnter: function () { el.classList.add('is-done'); },
      onLeaveBack: function () { el.classList.remove('is-done'); }
    });
  });

  /* sticky stage ≥ 900: the door panel changes finish, the counter ticks */
  var panel = document.querySelector('[data-panel]');
  var num = document.querySelector('[data-stage-n]');
  var cap = document.querySelector('[data-stage-cap]');
  var names = ['Check-in', 'Teardown', 'Supplement', 'Measure', 'Metal', 'Prime and block', 'The booth', 'Polish', 'Wash, keys back'];
  ScrollTrigger.matchMedia({
    '(min-width: 900px)': function () {
      stns.forEach(function (el, i) {
        ScrollTrigger.create({
          trigger: el, start: 'top center', end: 'bottom center',
          onToggle: function (self) {
            el.classList.toggle('is-current', self.isActive);
            if (!self.isActive) return;
            panel.setAttribute('data-stage', String(i + 1));
            num.textContent = String(i + 1);
            cap.textContent = names[i];
            gsap.fromTo(num, { yPercent: 18, opacity: .4 }, { yPercent: 0, opacity: 1, duration: .45, ease: 'power3.out' });
          }
        });
      });
      gsap.fromTo('.panel', { scale: .96 }, {
        scale: 1.02, ease: 'none',
        scrollTrigger: { trigger: '.stn-list', start: 'top center', end: 'bottom center', scrub: true }
      });
    }
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
