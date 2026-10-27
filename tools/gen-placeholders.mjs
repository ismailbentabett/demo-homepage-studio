import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APPROVED = path.join(ROOT, 'niches', 'electrician', 'media', 'approved');
fs.mkdirSync(APPROVED, { recursive: true });

// Minimal valid WebP file (1x1 pixel, lossy VP8)
const WEBP = Buffer.from([
  0x52,0x49,0x46,0x46, 0x24,0x00,0x00,0x00, 0x57,0x45,0x42,0x50,
  0x56,0x50,0x38,0x20, 0x18,0x00,0x00,0x00, 0x30,0x01,0x00,0x9d,
  0x01,0x2a,0x01,0x00, 0x01,0x00,0x01,0x40, 0x25,0xa4,0x00,0x03,
  0x70,0x00,0xfe,0xfb, 0x44,0x00,0x00
]);

const keys = [
  'hero-C1',
  'process-testing',
  'process-outlet',
  'equip-ev-charger',
  'home-kc-bungalow',
  'home-living-room-night',
  'problem-knob-tube',
  'process-attic-wiring',
  'problem-old-fuse-box',
  'equip-gfci',
  'home-kitchen-lights',
  'home-garage',
  'tool-wire-spools',
  'process-switch'
];

for (const key of keys) {
  fs.writeFileSync(path.join(APPROVED, `${key}.webp`), WEBP);
  fs.writeFileSync(path.join(APPROVED, `${key}-1170.webp`), WEBP);
}
console.log(`Generated ${keys.length * 2} placeholder files in ${APPROVED}`);