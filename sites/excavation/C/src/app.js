// excavation-C signature + scroll stories
// Soil Color Chip signature is CSS-only (no JS needed for chip rendering).
// This file handles: entrance reveals, drainage picker logic, ZIP checker, quote form stepper.
// ALL facts come from data-* attributes on DOM elements; nothing is hardcoded here.

(function () {
 'use strict';

 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if (reduced) {
 document.documentElement.classList.remove('sw-motion');
 revealAll();
 initTools();
 return;
 }

 document.documentElement.classList.add('sw-motion');

 // Wait for fonts before measuring
 document.fonts.ready.then(() => {
 initEntrances();
 initTools();
 });

 function revealAll() {
 document.querySelectorAll('.rise, .unclip').forEach(el => el.classList.add('is-visible'));
 }

 function initEntrances() {
 if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
 revealAll();
 return;
 }
 gsap.registerPlugin(ScrollTrigger);

 // Text rise
 gsap.utils.toArray('.rise').forEach(el => {
 ScrollTrigger.create({
 trigger: el,
 start: 'top 85%',
 onEnter: () => el.classList.add('is-visible'),
 once: true
 });
 });

 // Image unclip
 gsap.utils.toArray('.unclip').forEach(el => {
 ScrollTrigger.create({
 trigger: el,
 start: 'top 85%',
 onEnter: () => el.classList.add('is-visible'),
 once: true
 });
 });

 // Refresh after layout settles
 ScrollTrigger.refresh();
 }

 function initTools() {
 initDrainagePicker();
 initZipChecker();
 initQuoteForm();
 }

 // --- Drainage Picker ---
 // All fix/price/soil data comes from data-* attributes on the result element.
 function initDrainagePicker() {
 const form = document.querySelector('[data-drainage-picker] form');
 const result = document.querySelector('[data-dp-result]');
 if (!form || !result) return;

 // Read fix mappings from data attributes on the result container
 // Format: data-fix-<where>-<soil>="fixName|priceRange|soilChip"
 function getFix(where, soil) {
 const key = where + '-' + soil;
 const val = result.getAttribute('data-fix-' + key);
 if (val) {
 const parts = val.split('|');
 return { fix: parts[0], price: parts[1], soil: parts[2] };
 }
 // Fallback: try with "unsure" soil
 const fallback = result.getAttribute('data-fix-' + where + '-unsure');
 if (fallback) {
 const parts = fallback.split('|');
 return { fix: parts[0], price: parts[1], soil: parts[2] };
 }
 return null;
 }

 function check() {
 const where = form.querySelector('input[name="dp-where"]:checked')?.value;
 const soil = form.querySelector('input[name="dp-soil"]:checked')?.value;
 if (!where || !soil) return;

 const match = getFix(where, soil) || { fix: 'Site visit needed', price: 'Call for price', soil: 'wet' };

 result.querySelector('[data-dp-fix]').textContent = match.fix;
 result.querySelector('[data-dp-price]').textContent = match.price;
 const chip = result.querySelector('[data-dp-chip]');
 chip.setAttribute('data-soil', match.soil);
 chip.textContent = match.soil === 'wet' ? 'RED CLAY · WET' : match.soil === 'dry' ? 'RED CLAY · DRY' : 'SANDY LOAM';

 result.hidden = false;

 // Prefill quote form problem type based on fix name
 const qfProblem = document.getElementById('qf-problem');
 if (qfProblem) {
 const fixLower = match.fix.toLowerCase();
 if (fixLower.includes('french') || fixLower.includes('drain')) qfProblem.value = 'drainage';
 else if (fixLower.includes('swale') || fixLower.includes('regrade')) qfProblem.value = 'drainage';
 else if (fixLower.includes('culvert') || fixLower.includes('washout')) qfProblem.value = 'driveway';
 else if (fixLower.includes('foundation')) qfProblem.value = 'foundation';
 }
 }

 form.addEventListener('change', check);
 }

 // --- ZIP Checker ---
 // Valid ZIPs and area/soil mappings come from data-* attributes on the checker container.
 function initZipChecker() {
 const wrap = document.querySelector('[data-zip-checker]');
 if (!wrap) return;

 const input = wrap.querySelector('#zip-input');
 const btn = wrap.querySelector('[data-zip-submit]');
 const result = wrap.querySelector('[data-zip-result]');
 const fail = wrap.querySelector('[data-zip-fail]');

 // Read valid ZIPs from data-valid-zips attribute on the checker container
 const validZipsStr = wrap.getAttribute('data-valid-zips') || '';
 const validZips = validZipsStr.split(',').map(s => s.trim()).filter(Boolean);

 function check() {
 const zip = input.value.trim();
 if (zip.length !== 5 || !/^\d+$/.test(zip)) return;

 if (validZips.includes(zip)) {
 // Area and soil come from data-area-<zip> and data-soil-<zip>
 const area = wrap.getAttribute('data-area-' + zip) || 'your area';
 const soil = wrap.getAttribute('data-soil-' + zip) || 'wet';
 const chip = result.querySelector('[data-zip-chip]');
 chip.setAttribute('data-soil', soil);
 chip.textContent = soil === 'wet' ? 'RED CLAY · WET' : soil === 'dry' ? 'RED CLAY · DRY' : 'SANDY LOAM · ' + area.toUpperCase();
 result.querySelector('[data-zip-message]').textContent = 'We serve ' + area;
 result.hidden = false;
 fail.hidden = true;

 // Prefill quote form ZIP
 const qfZip = document.getElementById('qf-zip');
 if (qfZip) qfZip.value = zip;
 } else {
 result.hidden = true;
 fail.hidden = false;
 }
 }

 btn.addEventListener('click', check);
 input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); check(); } });
 }

 // --- Quote Form Stepper ---
 function initQuoteForm() {
 const form = document.querySelector('[data-quote-form] form');
 if (!form) return;

 const steps = form.querySelectorAll('.form-step');
 const thanks = form.querySelector('[data-thanks]');

 form.querySelectorAll('[data-next]').forEach(btn => {
 btn.addEventListener('click', () => {
 const current = btn.closest('.form-step');
 const nextNum = btn.getAttribute('data-next');
 const next = form.querySelector('[data-step="' + nextNum + '"]');
 if (current && next) {
 current.hidden = true;
 current.classList.remove('active');
 next.hidden = false;
 next.classList.add('active');
 }
 });
 });

 form.querySelectorAll('[data-prev]').forEach(btn => {
 btn.addEventListener('click', () => {
 const current = btn.closest('.form-step');
 const prevNum = btn.getAttribute('data-prev');
 const prev = form.querySelector('[data-step="' + prevNum + '"]');
 if (current && prev) {
 current.hidden = true;
 current.classList.remove('active');
 prev.hidden = false;
 prev.classList.add('active');
 }
 });
 });

 form.addEventListener('submit', e => {
 e.preventDefault();
 steps.forEach(s => { s.hidden = true; s.classList.remove('active'); });
 if (thanks) thanks.hidden = false;
 });
 }
})();