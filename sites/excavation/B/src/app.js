(function () {
 if (typeof SW === 'undefined') return;
 var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');

 /* Dirt calculator */
 var calc = document.querySelector('[data-dirt-calc]');
 if (calc) {
 var lIn = calc.querySelector('[data-calc-l]');
 var wIn = calc.querySelector('[data-calc-w]');
 var dIn = calc.querySelector('[data-calc-d]');
 var bankOut = calc.querySelector('[data-calc-bank]');
 var looseOut = calc.querySelector('[data-calc-loose]');
 var trucksOut = calc.querySelector('[data-calc-trucks]');
 function updateCalc() {
 var l = parseFloat(lIn.value) || 0;
 var w = parseFloat(wIn.value) || 0;
 var d = parseFloat(dIn.value) || 0;
 var cubicFt = l * w * (d / 12);
 var bankYd = cubicFt / 27;
 var looseYd = bankYd * 1.25;
 var trucks = Math.ceil(looseYd / 12);
 bankOut.textContent = bankYd.toFixed(1);
 looseOut.textContent = looseYd.toFixed(1);
 trucksOut.textContent = trucks;
 }
 [lIn, wIn, dIn].forEach(function (el) {
 el.addEventListener('input', updateCalc);
 });
 updateCalc();
 }

 /* Gravel estimator — ranges injected by build via data attrs */
 var est = document.querySelector('[data-gravel-est]');
 if (est) {
 var eL = est.querySelector('[data-est-l]');
 var eW = est.querySelector('[data-est-w]');
 var eType = est.querySelector('[data-est-type]');
 var eBase = est.querySelector('[data-est-base]');
 var eTop = est.querySelector('[data-est-top]');
 var eRange = est.querySelector('[data-est-range]');
 var rangeNew = est.dataset.rangeNew || '';
 var rangeRetop = est.dataset.rangeRetop || '';
 function updateEst() {
 var l = parseFloat(eL.value) || 0;
 var w = parseFloat(eW.value) || 0;
 var isNew = eType.value === 'new';
 var baseDepth = isNew ? 6 : 0;
 var topDepth = isNew ? 4 : 3;
 var area = l * w;
 var baseTons = (area * (baseDepth / 12)) / 21.6;
 var topTons = (area * (topDepth / 12)) / 21.6;
 eBase.textContent = baseTons.toFixed(1);
 eTop.textContent = topTons.toFixed(1);
 eRange.textContent = isNew ? rangeNew : rangeRetop;
 }
 [eL, eW, eType].forEach(function (el) {
 el.addEventListener('input', updateEst);
 });
 updateEst();
 }

 /* Drainage picker — sample ranges injected by build via data attrs */
 var drain = document.querySelector('[data-drainage-pick]');
 if (drain) {
 var result = drain.querySelector('[data-drain-result]');
 var radios = drain.querySelectorAll('input[type="radio"]');
 var rFoundGutter = drain.dataset.rFoundGutter || '';
 var rFoundNoGutter = drain.dataset.rFoundNoGutter || '';
 var rYard = drain.dataset.rYard || '';
 var rDrive = drain.dataset.rDrive || '';
 function updateDrain() {
 var where = drain.querySelector('input[name="drain-where"]:checked').value;
 var gutter = drain.querySelector('input[name="drain-gutter"]:checked').value;
 var fix = '';
 if (where === 'foundation') {
 fix = gutter === 'yes' ? rFoundGutter : rFoundNoGutter;
 } else if (where === 'yard') {
 fix = rYard;
 } else {
 fix = rDrive;
 }
 result.textContent = fix;
 }
 radios.forEach(function (r) { r.addEventListener('change', updateDrain); });
 updateDrain();
 }

 /* Motion: reveal + laser rule wipe */
 if (!reduced && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger);
 document.fonts.ready.then(function () { ScrollTrigger.refresh(); });

 /* Text rise reveals */
 gsap.utils.toArray('[data-reveal]').forEach(function (el) {
 gsap.fromTo(el,
 { opacity: 0, y: 24 },
 { opacity: 1, y: 0, duration: 0.52, ease: 'power3.out',
 scrollTrigger: { trigger: el, start: 'top 85%', once: true }
 }
 );
 });

 /* Clip reveals for break frame */
 gsap.utils.toArray('[data-reveal="clip"]').forEach(function (el) {
 gsap.fromTo(el,
 { clipPath: 'inset(0 0 100% 0)' },
 { clipPath: 'inset(0)', duration: 0.9, ease: 'power2.inOut',
 scrollTrigger: { trigger: el, start: 'top 85%', once: true }
 }
 );
 });

 /* Laser rule wipes per section */
 gsap.utils.toArray('.laser-rule').forEach(function (rule) {
 gsap.fromTo(rule,
 { scaleX: 0 },
 { scaleX: 1, duration: 0.9, ease: 'power2.inOut',
 scrollTrigger: { trigger: rule.closest('section') || rule.parentElement, start: 'top 80%', once: true }
 }
 );
 });

 /* Process story pinned on desktop */
 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function () {
 var steps = gsap.utils.toArray('.process-steps .step');
 if (steps.length > 1) {
 gsap.to(steps, {
 scrollTrigger: {
 trigger: '.process-story',
 start: 'top top',
 end: 'bottom bottom',
 scrub: 0.6,
 pin: true
 },
 opacity: 1,
 stagger: 0.15
 });
 }
 }
 });
 }
})();