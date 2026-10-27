import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APPROVED = path.join(ROOT, 'niches', 'roofer', 'media', 'approved');
fs.mkdirSync(APPROVED, { recursive: true });

// Minimal valid WebP file (1x1 pixel)
const WEBP = Buffer.from([
  0x52,0x49,0x46,0x46, 0x24,0x00,0x00,0x00, 0x57,0x45,0x42,0x50,
  0x56,0x50,0x38,0x20, 0x18,0x00,0x00,0x00, 0x30,0x01,0x00,0x9d,
  0x01,0x2a,0x01,0x00, 0x01,0x00,0x01,0x40, 0x25,0xa4,0x00,0x03,
  0x70,0x00,0xfe,0xfb, 0x44,0x00,0x00
]);

const keys = [
  'hero-A1','hero-A2','hero-A3','hero-B1','hero-B2','hero-B3','hero-C1','hero-C2','hero-C3',
  'process-tearoff','process-decking','process-drip-edge','process-membrane','process-starter',
  'process-nailgun','process-ridge','process-cleanup','process-dumpster',
  'material-shingle-texture','material-granules','material-metal-seam','material-pipe-boot','material-chimney',
  'tool-chalkline','tool-harness','tool-ladder',
  'finished-roofline','finished-skylight',
  'home-brick-ranch','home-street','home-bungalow',
  'weather-rain-shingles','weather-ice-branches','weather-prairie-sunset',
  'problem-ceiling-stain','problem-curled-shingles','problem-missing-shingles','problem-moss',
  'crew-from-behind','hands-pointing-damage'
];

for (const key of keys) {
  fs.writeFileSync(path.join(APPROVED, `${key}.webp`), WEBP);
  fs.writeFileSync(path.join(APPROVED, `${key}-1170.webp`), WEBP);
}
console.log(`Generated ${keys.length * 2} placeholder files in ${APPROVED}`);