/* nursery-C — Valley Almanac signature + scroll stories */
(function () {
 'use strict';

 if (!window.SW || SW.reduced) return;
 if (!document.documentElement.classList.contains('sw-motion')) return;

 var facts = SW.facts || {};
 var validZips = facts.zips || [];
 var bizCity = facts.city || '';

 /* ── Entrance reveals (text-rise + image-unclip) ── */
 var revealEls = document.querySelectorAll('[data-entrance]');
 if (revealEls.length && 'IntersectionObserver' in window) {
 var io = new IntersectionObserver(
 function (entries) {
 entries.forEach(function (e) {
 if (e.isIntersecting) {
 e.target.classList.add('is-visible');
 io.unobserve(e.target);
 }
 });
 },
 { threshold: 0.15, rootMargin: '0px 0px -15% 0px' }
 );
 revealEls.forEach(function (el) { io.observe(el); });
 }

 /* ── Almanac ribbon: advance marker + season band on scroll ── */
 var sections = document.querySelectorAll('section[data-season], footer[data-season]');
 var ribbons = document.querySelectorAll('.almanac-ribbon');

 var seasonMonths = {
 fog: [1, 2, 12],
 bloom: [3, 4, 5],
 rush: [3, 4, 5],
 heat: [6, 7, 8, 9],
 second: [10, 11],
 };

 function updateRibbon(season) {
 var months = seasonMonths[season] || [1];
 ribbons.forEach(function (ribbon) {
 ribbon.querySelectorAll('span').forEach(function (s) {
 var m = parseInt(s.dataset.month, 10);
 s.classList.toggle('active', months.indexOf(m) !== -1);
 });
 var band = ribbon.querySelector('.season-band');
 if (band) {
 var first = months[0];
 var last = months[months.length - 1];
 var pct = function (n) { return ((n - 1) / 12) * 100; };
 band.style.left = pct(first) + '%';
 band.style.width = (pct(last) - pct(first) + (100 / 12)) + '%';
 }
 });
 }

 if (sections.length && 'IntersectionObserver' in window) {
 var currentMonth = new Date().getMonth() + 1;
 var activeSeason = 'fog';
 for (var s in seasonMonths) {
 if (seasonMonths[s].indexOf(currentMonth) !== -1) { activeSeason = s; break; }
 }
 updateRibbon(activeSeason);

 var sectionIO = new IntersectionObserver(
 function (entries) {
 entries.forEach(function (e) {
 if (e.isIntersecting && e.intersectionRatio > 0.3) {
 var season = e.target.dataset.season;
 if (season) updateRibbon(season);
 }
 });
 },
 { threshold: [0.3, 0.6], rootMargin: '-10% 0px -10% 0px' }
 );
 sections.forEach(function (sec) { sectionIO.observe(sec); });
 }

 /* ── Header scroll state ── */
 var header = document.querySelector('[data-header]');
 if (header) {
 var ticking = false;
 window.addEventListener('scroll', function () {
 if (!ticking) {
 requestAnimationFrame(function () {
 header.classList.toggle('is-scrolled', window.scrollY > 40);
 ticking = false;
 });
 ticking = true;
 }
 }, { passive: true });
 }

 /* ── Planting calendar tool ── */
 var calSelect = document.getElementById('cal-plant');
 var calResult = calSelect ? calSelect.closest('.tool-card') : null;
 var calResultEl = calResult ? calResult.querySelector('[data-result]') : null;
 var calHandoff = calResult ? calResult.querySelector('.tool-handoff') : null;

 var calData = {
 'fruit-tree': { window: 'January–February', sizes: 'bare-root and 5-gallon' },
 'shade-tree': { window: 'October–March', sizes: '15-gallon and box' },
 'vegetables': { window: 'March–May (warm) · September–October (cool)', sizes: '4-inch starts' },
 'perennials': { window: 'March–May · September–November', sizes: '1-gallon and 5-gallon' },
 'natives': { window: 'October–December', sizes: '1-gallon and 5-gallon' },
 };

 if (calSelect && calResultEl) {
 calSelect.addEventListener('change', function () {
 var val = calSelect.value;
 if (val && calData[val]) {
 var d = calData[val];
 calResultEl.textContent = 'In Stanislaus County, ' + val.replace('-', ' ') + ' goes in the ground ' + d.window + '. We have ' + d.sizes + ' on the benches now.';
 calResultEl.hidden = false;
 if (calHandoff) calHandoff.hidden = false;
 } else {
 calResultEl.hidden = true;
 if (calHandoff) calHandoff.hidden = true;
 }
 });
 }

 /* ── Mature-size check tool ── */
 var sizeSpot = document.getElementById('size-spot');
 var sizeDist = document.getElementById('size-dist');
 var sizeCard = sizeSpot ? (sizeSpot.closest('.tool-card') || sizeSpot.closest('[data-hook="mature-size-check"]')) : null;
 var sizeResult = sizeCard ? sizeCard.querySelector('[data-result]') : null;
 var sizeHandoff = sizeCard ? sizeCard.querySelector('.tool-handoff') : null;

 var sizeLimits = {
 wall: { max: 25, label: 'trees up to 25 ft fit without lifting the slab' },
 wire: { max: 20, label: 'trees up to 20 ft fit under typical service lines' },
 drive: { max: 30, label: 'trees up to 30 ft fit with roots clear of the drive' },
 open: { max: 60, label: 'any size fits; we\'ll help you pick the right one' },
 };

 function updateSize() {
 var spot = sizeSpot ? sizeSpot.value : '';
 var dist = parseInt(sizeDist ? sizeDist.value || '0' : '0', 10);
 if (spot && sizeLimits[spot]) {
 var lim = sizeLimits[spot];
 var fits = dist >= 5 ? lim.label : 'at less than 5 ft, consider a shrub or espalier instead';
 if (sizeResult) {
 sizeResult.textContent = 'At ' + (dist || '?') + ' ft from the structure, ' + fits + '.';
 sizeResult.hidden = false;
 }
 if (sizeHandoff) sizeHandoff.hidden = false;
 } else {
 if (sizeResult) sizeResult.hidden = true;
 if (sizeHandoff) sizeHandoff.hidden = true;
 }
 }

 if (sizeSpot) sizeSpot.addEventListener('change', updateSize);
 if (sizeDist) sizeDist.addEventListener('input', updateSize);

 /* ── ZIP checker ── */
 var zipInput = document.getElementById('zip-input');
 var zipBtn = document.querySelector('.zip-btn');
 var zipResult = document.querySelector('[data-hook="zip-check"] [data-result]');

 if (zipBtn && zipInput && zipResult) {
 zipBtn.addEventListener('click', function () {
 var zip = zipInput.value.trim();
 if (/^\d{5}$/.test(zip)) {
 if (validZips.indexOf(zip) !== -1) {
 zipResult.textContent = 'We deliver to ' + zip + '. Delivery days: Tuesday, Thursday, Saturday.';
 } else {
 zipResult.textContent = 'We don\'t deliver to ' + zip + ' yet. You\'re welcome to visit the yard in ' + bizCity + '.';
 }
 zipResult.hidden = false;
 } else {
 zipResult.textContent = 'Enter a valid 5-digit ZIP code.';
 zipResult.hidden = false;
 }
 });
 }

 /* ── Multi-step quote form ── */
 var form = document.querySelector('.quote-form');
 if (form) {
 var steps = form.querySelectorAll('.form-step');
 var thankyou = form.querySelector('.form-thankyou');
 var current = 0;

 function showStep(n) {
 steps.forEach(function (s, i) { s.hidden = i !== n; s.classList.toggle('active', i === n); });
 }

 form.querySelectorAll('.form-next').forEach(function (btn) {
 btn.addEventListener('click', function () {
 if (current < steps.length - 1) { current++; showStep(current); }
 });
 });

 form.querySelectorAll('.form-prev').forEach(function (btn) {
 btn.addEventListener('click', function () {
 if (current > 0) { current--; showStep(current); }
 });
 });

 form.addEventListener('submit', function (e) {
 e.preventDefault();
 steps.forEach(function (s) { s.hidden = true; });
 if (thankyou) thankyou.hidden = false;
 });
 }

 /* ── GSAP scroll story: hero mosaic parallax on desktop ── */
 if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger);

 document.fonts.ready.then(function () {
 ScrollTrigger.refresh();
 });

 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function () {
 var heroSection = document.getElementById('hero');
 var heroMosaic = heroSection ? heroSection.querySelector('.hero-mosaic') : null;
 if (heroSection && heroMosaic) {
 gsap.to(heroMosaic, {
 scrollTrigger: {
 trigger: heroSection,
 start: 'top top',
 end: 'bottom top',
 scrub: true,
 },
 yPercent: 15,
 ease: 'none',
 });
 }
 },
 });
 }
})();