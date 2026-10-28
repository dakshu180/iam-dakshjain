import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const artwork = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="78%" cy="45%" r="55%">
      <stop offset="0" stop-color="#e5132b" stop-opacity=".45"/>
      <stop offset="1" stop-color="#e5132b" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="letter" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ff3d5a"/>
      <stop offset="1" stop-color="#b98bff"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#07070a"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="78" y="350" font-family="Georgia, serif" font-size="360" fill="url(#letter)" opacity=".8">D</text>
  <text x="420" y="290" font-family="Arial, sans-serif" font-size="78" font-weight="700" fill="#f4f1ec" letter-spacing="3">DAKSH JAIN</text>
  <text x="424" y="352" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#ff3d5a" letter-spacing="12">THE SERIES</text>
  <text x="424" y="430" font-family="Arial, sans-serif" font-size="20" font-weight="600" fill="#a7a6ad" letter-spacing="3">SYSTEMS ENGINEERING · AI · ROBOTICS</text>
</svg>`);

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#07070a' } })
  .composite([{ input: artwork }])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('social image built');
