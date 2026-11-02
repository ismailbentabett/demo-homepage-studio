/* junkremoval-A · signature + scroll stories */
(function () {
 'use strict';

 if (!window.SW || SW.reduced) return;
 if (!document.documentElement.classList.contains('sw-motion')) return;

 var facts = window.SW && SW.facts ? SW.facts : {};

 /* ── Entrance reveals (text rise + image unclip) ─────────────── */
 var revealEls = document.querySelectorAll('[data-sw-reveal]');
 var unclipEls = document.querySelectorAll('[data-sw-unclip]');

 if ('IntersectionObserver' in window) {
 var io = new IntersectionObserver(
 function (entries) {
 entries.forEach(function (e) {
 if (e.isIntersecting) {
 e.target.classList.add('is-visible');
 io.unobserve(e.target);
 }
 });
 },
 { threshold: 0, rootMargin: '0px 0px -15% 0px' }
 );
 revealEls.forEach(function (el) { io.observe(el); });
 unclipEls.forEach(function (el) { io.observe(el); });
 } else {
 revealEls.forEach(function (el) { el.classList.add('is-visible'); });
 unclipEls.forEach(function (el) { el.classList.add('is-visible'); });
 }

 /* ── Load Sizer interaction ──────────────────────────────────── */
 var sizerItems = document.querySelectorAll('.sizer-item');
 var sizerShare = document.querySelector('.sizer-share strong');
 var sizerRange = document.querySelector('.sizer-range strong');
 var sizerCta = document.querySelector('.sizer-cta');

 /* Build price map from facts.proof.prices injected by build into #sw-facts */
 var prices = (facts.proof && facts.proof.prices) || [];
 var priceMap = {};
 prices.forEach(function (p) {
 var key = (p.item || '').toLowerCase();
 if (key.indexOf('quarter') !== -1) priceMap.quarter = p;
 else if (key.indexOf('half') !== -1) priceMap.half = p;
 else if (key.indexOf('full') !== -1) priceMap.full = p;
 else if (key.indexOf('single') !== -1) priceMap.single = p;
 });

 var selectedShare = null;

 sizerItems.forEach(function (btn) {
 btn.setAttribute('aria-pressed', 'false');
 btn.addEventListener('click', function () {
 var wasActive = btn.getAttribute('aria-pressed') === 'true';
 sizerItems.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });

 if (wasActive) {
 selectedShare = null;
 if (sizerShare) sizerShare.textContent = '—';
 if (sizerRange) sizerRange.textContent = '—';
 if (sizerCta) sizerCta.hidden = true;
 } else {
 btn.setAttribute('aria-pressed', 'true');
 selectedShare = btn.dataset.share;
 var p = priceMap[selectedShare];
 if (p && sizerShare) {
 var shareLabel = selectedShare === 'quarter' ? 'a quarter' : selectedShare === 'half' ? 'half' : selectedShare === 'full' ? 'a full' : selectedShare;
 sizerShare.textContent = shareLabel;
 }
 if (p && sizerRange) sizerRange.textContent = p.from + ' – ' + p.to;
 if (sizerCta) sizerCta.hidden = false;
 }
 });
 });

 /* ── Multi-step quote form ───────────────────────────────────── */
 var form = document.querySelector('[data-quote-form]');
 if (!form) return;

 var steps = form.querySelectorAll('.form-step');
 var prevBtn = form.querySelector('.form-prev');
 var nextBtn = form.querySelector('.form-next');
 var submitBtn = form.querySelector('.form-submit');
 var thankyou = form.querySelector('.form-thankyou');
 var currentStep = 0;

 function showStep(idx) {
 steps.forEach(function (s, i) {
 s.classList.toggle('active', i === idx);
 });
 if (prevBtn) prevBtn.disabled = idx === 0;
 if (nextBtn) nextBtn.hidden = idx === steps.length - 1;
 if (submitBtn) submitBtn.hidden = idx !== steps.length - 1;
 }

 if (prevBtn) {
 prevBtn.addEventListener('click', function () {
 if (currentStep > 0) {
 currentStep--;
 showStep(currentStep);
 }
 });
 }

 if (nextBtn) {
 nextBtn.addEventListener('click', function () {
 if (currentStep < steps.length - 1) {
 currentStep++;
 showStep(currentStep);
 }
 });
 }

 form.addEventListener('submit', function (e) {
 e.preventDefault();
 steps.forEach(function (s) { s.classList.remove('active'); });
 if (prevBtn) prevBtn.hidden = true;
 if (nextBtn) nextBtn.hidden = true;
 if (submitBtn) submitBtn.hidden = true;
 if (thankyou) thankyou.hidden = false;
 });

 /* ── ZIP checker ─────────────────────────────────────────────── */
 var zipForm = document.querySelector('[data-zip-checker]');
 if (zipForm) {
 var zipInput = zipForm.querySelector('#zip-input');
 var zipResult = zipForm.querySelector('.zip-result');
 var validZips = (facts.biz && facts.biz.zips) || [];

 zipForm.addEventListener('submit', function (e) {
 e.preventDefault();
 var val = (zipInput.value || '').trim();
 if (!/^\d{5}$/.test(val)) {
 if (zipResult) zipResult.textContent = 'Enter a 5-digit ZIP.';
 return;
 }
 if (validZips.indexOf(val) !== -1) {
 if (zipResult) zipResult.textContent = 'Yes — we cover ' + val + '.';
 } else {
 if (zipResult) zipResult.textContent = 'A little outside our usual area. Call and we’ll tell you honestly.';
 }
 });
 }

 /* ── Open-now badge ──────────────────────────────────────────── */
 var openNowEl = document.querySelector('[data-open-now-text]');
 if (openNowEl) {
 var now = new Date();
 var day = now.getDay();
 var hhmm = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

 var schedule = [
 null,
 ['07:00', '18:00'],
 ['07:00', '18:00'],
 ['07:00', '18:00'],
 ['07:00', '18:00'],
 ['07:00', '18:00'],
 ['08:00', '14:00']
 ];

 var today = schedule[day];
 if (today && hhmm >= today[0] && hhmm < today[1]) {
 openNowEl.textContent = 'Open now until ' + today[1];
 } else {
 var nextDay = day === 6 ? 1 : day + 1;
 var nextSched = schedule[nextDay];
 var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 openNowEl.textContent = 'Opens ' + (nextSched ? nextSched[0] : '') + ' ' + dayNames[nextDay];
 }
 }

 /* ── GSAP ScrollTrigger story: clearing floor plan (desktop only) ── */
 if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger);

 document.fonts.ready.then(function () {
 ScrollTrigger.refresh();
 });

 var heroType = document.querySelector('.hero-type');
 var heroPhoto = document.querySelector('.hero-photo img');
 if (heroType && heroPhoto) {
 var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
 tl.from(heroType, { y: 24, opacity: 0, duration: 0.8 })
 .from(heroPhoto, { clipPath: 'inset(0 0 100% 0)', duration: 0.9 }, '-=0.5');
 }

 var stepCards = document.querySelectorAll('.step-card');
 if (stepCards.length) {
 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function () {
 gsap.from(stepCards, {
 scrollTrigger: {
 trigger: '.section-process',
 start: 'top 85%',
 toggleActions: 'play none none reverse'
 },
 y: 24,
 opacity: 0,
 duration: 0.5,
 stagger: 0.06,
 ease: 'power3.out'
 });
 }
 });
 }
 }
})();