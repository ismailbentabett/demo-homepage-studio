/* moving-C signature: route-line draw + canyon elevation story + haul sorter */
(function () {
  if (typeof SW === 'undefined') return;

  /* Route line intro is handled by CSS animation under .sw-motion */

  /* Scroll story: canyon climb (pinned >=640px) */
  SW.mod('canyon-story', function () {
    if (SW.reduced) return;
    if (!document.documentElement.classList.contains('sw-motion')) return;

    var section = document.getElementById('canyon-story');
    if (!section) return;

    var elevEl = section.querySelector('[data-count]');
    if (!elevEl) return;

    /* Pin only at >=640px per METHOD §5 and LEARNINGS T10 */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=165svh',
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        });

        /* Animate elevation number from 5400 to target */
        var target = parseInt(elevEl.getAttribute('data-count'), 10) || 8200;
        var obj = { val: 5400 };
        tl.to(obj, {
          val: target,
          duration: 1,
          ease: 'none',
          onUpdate: function () {
            elevEl.textContent = Math.round(obj.val).toLocaleString();
          }
        }, 0);

        /* Subtle background parallax */
        var bg = section.querySelector('.canyon__bg img');
        if (bg) {
          tl.fromTo(bg, { objectPosition: 'center 30%' }, { objectPosition: 'center 50%', duration: 1, ease: 'none' }, 0);
        }
      }
    });
  });

  /* Varied section entrances */
  SW.mod('section-reveals', function () {
    if (SW.reduced) return;
    if (!document.documentElement.classList.contains('sw-motion')) return;

    /* Fade reveals */
    gsap.utils.toArray('[data-reveal="fade"]').forEach(function (el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    /* Clip reveals */
    gsap.utils.toArray('[data-reveal="clip"]').forEach(function (el) {
      gsap.to(el, {
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    /* Scale reveals */
    gsap.utils.toArray('[data-reveal="scale"]').forEach(function (el) {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    /* Stagger reveals */
    gsap.utils.toArray('[data-reveal="stagger"]').forEach(function (container) {
      var children = container.children;
      if (!children.length) return;
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });

  /* Haul sorter — interactive keep/donate/haul tool */
  SW.mod('haul-sorter', function () {
    var sorter = document.querySelector('[data-haul-sorter]');
    if (!sorter) return;

    var pool = document.querySelector('[data-haul-pool]');
    var plan = document.querySelector('[data-haul-plan]');
    var summary = document.querySelector('[data-haul-summary]');
    var printBtn = document.querySelector('[data-haul-print]');
    var resetBtn = document.querySelector('[data-haul-reset]');

    if (!pool) return;

    /* Show the pool */
    pool.removeAttribute('hidden');

    var items = Array.from(pool.querySelectorAll('[data-haul-item]'));
    var targets = ['donate', 'recycle', 'landfill'];
    var state = {};

    /* Initialize: place items in their default columns */
    items.forEach(function (item) {
      var name = item.getAttribute('data-haul-item');
      var def = item.getAttribute('data-haul-default') || 'landfill';
      state[name] = def;
      moveItemToColumn(item, def);
    });

    updateCounts();

    /* Tap to cycle through targets */
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        var name = item.getAttribute('data-haul-item');
        var current = state[name];
        var idx = targets.indexOf(current);
        var next = targets[(idx + 1) % targets.length];
        state[name] = next;
        moveItemToColumn(item, next);
        updateCounts();
        updatePlan();
      });
    });

    function moveItemToColumn(item, target) {
      var col = sorter.querySelector('[data-haul-items="' + target + '"]');
      if (col) col.appendChild(item);
    }

    function updateCounts() {
      targets.forEach(function (t) {
        var countEl = sorter.querySelector('[data-haul-count="' + t + '"]');
        var colItems = sorter.querySelectorAll('[data-haul-items="' + t + '"] .haul-item');
        if (countEl) countEl.textContent = colItems.length;
      });
    }

    function updatePlan() {
      if (!summary || !plan) return;

      var grouped = { donate: [], recycle: [], landfill: [] };
      items.forEach(function (item) {
        var name = item.getAttribute('data-haul-item');
        grouped[state[name]].push(name);
      });

      var html = '';
      if (grouped.donate.length) {
        html += '<dt>Donate (' + grouped.donate.length + ')</dt><dd>' + grouped.donate.join(', ') + '</dd>';
      }
      if (grouped.recycle.length) {
        html += '<dt>Recycle (' + grouped.recycle.length + ')</dt><dd>' + grouped.recycle.join(', ') + '</dd>';
      }
      if (grouped.landfill.length) {
        html += '<dt>Landfill (' + grouped.landfill.length + ')</dt><dd>' + grouped.landfill.join(', ') + '</dd>';
      }

      summary.innerHTML = html;
      plan.removeAttribute('hidden');
    }

    if (printBtn) {
      printBtn.addEventListener('click', function () {
        window.print();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        items.forEach(function (item) {
          var name = item.getAttribute('data-haul-item');
          var def = item.getAttribute('data-haul-default') || 'landfill';
          state[name] = def;
          moveItemToColumn(item, def);
        });
        updateCounts();
        if (plan) plan.setAttribute('hidden', '');
      });
    }
  });

  /* Refresh ScrollTrigger after fonts load */
  if (typeof ScrollTrigger !== 'undefined' && document.fonts) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
})();