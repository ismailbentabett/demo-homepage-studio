/* junkremoval-B signature: three-column sort sheet + answer box */
(function () {
  if (typeof SW === 'undefined') return;

  /* --- Answer box --- */
  SW.mod('answer-box', function () {
    var box = document.querySelector('[data-answer-box]');
    if (!box) return;
    var input = box.querySelector('.tool-input');
    var result = box.querySelector('.tool-result');
    var chips = box.querySelectorAll('.chip');
    if (!input || !result) return;

    var answers = {
      sofa: { ok: true, dest: 'donate', note: '' },
      couch: { ok: true, dest: 'donate', note: '' },
      sectional: { ok: true, dest: 'donate', note: '' },
      mattress: { ok: true, dest: 'recycle', note: 'Steel and foam stripped at recycler' },
      'box spring': { ok: true, dest: 'recycle', note: '' },
      fridge: { ok: true, dest: 'recycle', note: 'Refrigerant recovered first' },
      refrigerator: { ok: true, dest: 'recycle', note: 'Refrigerant recovered first' },
      freezer: { ok: true, dest: 'recycle', note: 'Refrigerant recovered first' },
      washer: { ok: true, dest: 'recycle', note: '' },
      dryer: { ok: true, dest: 'recycle', note: '' },
      'water heater': { ok: true, dest: 'recycle', note: '' },
      boxes: { ok: true, dest: 'donate', note: 'Cardboard recycled, contents sorted' },
      treadmill: { ok: true, dest: 'recycle', note: 'Metal and electronics separated' },
      'patio set': { ok: true, dest: 'landfill', note: 'Weather-damaged wood usually lands' },
      'patio furniture': { ok: true, dest: 'landfill', note: '' },
      tv: { ok: true, dest: 'recycle', note: 'E-waste recycler' },
      television: { ok: true, dest: 'recycle', note: 'E-waste recycler' },
      desk: { ok: true, dest: 'donate', note: '' },
      table: { ok: true, dest: 'donate', note: '' },
      chair: { ok: true, dest: 'donate', note: '' },
      dresser: { ok: true, dest: 'donate', note: '' },
      bike: { ok: true, dest: 'donate', note: '' },
      bicycle: { ok: true, dest: 'donate', note: '' },
      carpet: { ok: true, dest: 'landfill', note: '' },
      drywall: { ok: true, dest: 'landfill', note: '' },
      tile: { ok: true, dest: 'landfill', note: '' },
      cabinets: { ok: true, dest: 'landfill', note: 'Usable ones go to donation' },
      paint: { ok: false, note: 'County household hazardous waste drop-off' },
      'paint cans': { ok: false, note: 'County household hazardous waste drop-off' },
      propane: { ok: false, note: 'County household hazardous waste drop-off' },
      tires: { ok: false, note: 'Tire recycler or county drop-off' },
      chemicals: { ok: false, note: 'County household hazardous waste drop-off' },
      batteries: { ok: false, note: 'Auto parts store or county HHW' },
      'hot tub': { ok: true, dest: 'landfill', note: 'Cut up on site, needs power disconnected first' },
      spa: { ok: true, dest: 'landfill', note: 'Cut up on site, needs power disconnected first' },
      piano: { ok: true, dest: 'donate', note: 'Needs two extra hands — mention on the form' }
    };

    function lookup(val) {
      var v = val.toLowerCase().trim();
      if (!v) return null;
      for (var key in answers) {
        if (v.indexOf(key) !== -1) return answers[key];
      }
      return { ok: true, dest: 'mixed', note: 'We will sort it on site' };
    }

    function show(ans) {
      if (!ans) { result.textContent = ''; return; }
      if (ans.ok) {
        var dest = ans.dest === 'mixed' ? 'Sorted on site' : ans.dest.charAt(0).toUpperCase() + ans.dest.slice(1);
        result.textContent = 'Yes, we take that.' + (ans.note ? ' Note: ' + ans.note + '.' : '') + ' Likely destination: ' + dest + '.';
      } else {
        result.textContent = 'No — ' + ans.note + '.';
      }
    }

    input.addEventListener('input', function () { show(lookup(input.value)); });
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        input.value = chip.getAttribute('data-item');
        show(lookup(input.value));
      });
    });
  });

  /* --- Sort story reveal --- */
  SW.mod('sorter', function () {
    if (SW.reduced) {
      document.querySelectorAll('.sort-item').forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    if (!document.documentElement.classList.contains('sw-motion')) {
      document.querySelectorAll('.sort-item').forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var items = document.querySelectorAll('.sort-item');
    if (!items.length) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var pin = document.querySelector('.sort-story__pin');
        if (!pin) return;
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.sort-story__track',
            start: 'top top',
            end: '+=' + (items.length * 55) + 'svh',
            pin: true,
            scrub: 0.5
          }
        });
        items.forEach(function (item, i) {
          tl.to(item, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, i * 0.08);
        });
      },
      '(max-width: 639px)': function () {
        items.forEach(function (item) {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 85%',
            once: true,
            onEnter: function () { item.classList.add('is-in'); }
          });
        });
      }
    });
  });

  /* --- Signature sheet rules draw on intro --- */
  SW.mod('sw-signature', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined') return;

    var sheets = document.querySelectorAll('.sheet__head, .price-sheet .sheet__head, .footer__sheet');
    if (!sheets.length) return;

    gsap.from(sheets, {
      opacity: 0,
      y: -12,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.3
    });
  });

})();