import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Generate a premium 1200x630 Open Graph image with centered Mitsubishi logo.
// Safe zone: Centered within 480x480 so both wide (16:9 / 1.91:1) and square (1:1) link previews (WhatsApp, Telegram, Facebook, Twitter) stay perfectly framed without cropping.
const width = 1200;
const height = 630;

// Mitsubishi Logo Vector Elements (Official outlines)
const svgBanner = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141618" />
      <stop offset="50%" stop-color="#1A1C1E" />
      <stop offset="100%" stop-color="#0E0F10" />
    </linearGradient>

    <radialGradient id="glow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#E60012" stop-opacity="0.14" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background with subtle vignette -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <rect width="${width}" height="${height}" fill="url(#glow)" />

  <!-- Subtle bottom red accent bar (2px) -->
  <rect x="0" y="${height - 4}" width="${width}" height="4" fill="#E60012" />

  <!-- Centered Mitsubishi Logo Group (Diamonds + MITSUBISHI MOTORS wordmark) -->
  <!-- Scaled so total height is ~310px, perfectly fitting safe zone -->
  <g transform="translate(600, 305) scale(1.82) translate(-87.3, -86)">
    
    <!-- Red Diamonds -->
    <g id="diamonds" fill="#E60012">
      <polygon points="87,70.9 107.2,36 87,1.2 66.9,36" />
      <polygon points="87,70.9 107.2,105.7 147.4,105.7 127.3,70.9" />
      <polygon points="87,70.9 66.9,105.7 26.7,105.7 46.8,70.9" />
    </g>

    <!-- White Typography: MITSUBISHI MOTORS -->
    <g id="wordmark" fill="#FFFFFF">
      <!-- MITSUBISHI -->
      <polygon points="12.7,127.8 12.7,142.6 8,142.6 8,121.6 14.1,121.6 19.1,130.2 23.9,121.6 30.1,121.6 30.1,142.6 25.4,142.6 25.4,127.8 19.1,138.4" />
      <rect x="34.1" y="121.6" width="4.7" height="21" />
      <polygon points="51.3,126 51.3,142.6 46.5,142.6 46.5,126 40.9,126 40.9,121.6 57,121.6 57,126" />
      <path d="m58.7,142.4v-4.4c1,0.2 3.3,0.6 6.2,0.6 2.4,0 3.6,-0.3 3.6,-1.7 0,-1.5 -1,-1.7 -4.4,-3.3 -3.3,-1.5 -5.8,-2.8 -5.8,-6.4 0,-4.4 2.7,-5.9 7.9,-5.9 2.7,0 4.6,0.2 5.9,0.4v4.4c-1.2,-0.1 -3.3,-0.4 -5.7,-0.4 -2.8,0 -3.4,0.3 -3.4,1.5s1.5,1.8 3.8,2.8c3.5,1.6 6.3,2.9 6.3,6.9 0,4.2 -2.6,6.1 -8.2,6.1 -2.2,-0.1 -4.2,-0.3 -6.2,-0.6" />
      <path d="m76,135.5v-13.9h4.7v13.7c0,2.4 1.4,3.2 3.7,3.2 2.2,0 3.7,-0.8 3.7,-3.2v-13.7h4.7v13.9c0,5.1 -3.3,7.4 -8.4,7.4s-8.4,-2.3 -8.4,-7.4" />
      <path d="m96.8,121.6h9.2c4.3,0 6.7,1.6 6.7,5.4 0,3 -1.7,4 -3.3,4.6 1.9,0.6 3.9,1.6 3.9,5.1 0,3.7 -2.2,5.9 -6.9,5.9h-9.5v-21zm8.5,8.5c1.9,0 2.6,-1 2.6,-2.4 0,-1.7 -0.8,-2.1 -2.6,-2.1h-3.8v4.5zm0.3,8.6c1.9,0 2.7,-0.7 2.7,-2.5 0,-1.6 -0.7,-2.3 -2.5,-2.3h-4.3v4.8z" />
      <rect x="116" y="121.6" width="4.7" height="21" />
      <path d="m124.1,142.4v-4.4c1,0.2 3.3,0.6 6.2,0.6 2.4,0 3.6,-0.3 3.6,-1.7 0,-1.5 -1,-1.7 -4.4,-3.3 -3.3,-1.5 -5.8,-2.8 -5.8,-6.4 0,-4.4 2.7,-5.9 7.9,-5.9 2.7,0 4.6,0.2 5.9,0.4v4.4c-1.2,-0.1 -3.3,-0.4 -5.7,-0.4 -2.8,0 -3.4,0.3 -3.4,1.5s1.5,1.8 3.8,2.8c3.5,1.6 6.3,2.9 6.3,6.9 0,4.2 -2.6,6.1 -8.2,6.1 -2.1,-0.1 -4.2,-0.3 -6.2,-0.6" />
      <polygon points="145.8,142.6 141.1,142.6 141.1,121.6 145.8,121.6 145.8,129.9 153.3,129.9 153.3,121.6 158,121.6 158,142.6 153.3,142.6 153.3,134.3 145.8,134.3" />
      <rect x="161.9" y="121.6" width="4.7" height="21" />

      <!-- MOTORS -->
      <polygon points="34.8,156.1 34.8,170.9 30,170.9 30,149.9 36.1,149.9 41.1,158.4 46,149.9 52.2,149.9 52.2,170.9 47.4,170.9 47.4,156.1 41.1,166.7" />
      <path d="m55.4,160.4c0,-7.5 2.9,-10.8 9.1,-10.8s9.1,3.3 9.1,10.8 -2.9,10.8 -9.1,10.8 -9.1,-3.3 -9.1,-10.8m13.2,0c0,-4.3 -0.7,-6.5 -4.2,-6.5 -3.4,0 -4.2,2.2 -4.2,6.5s0.7,6.5 4.2,6.5 4.2,-2.2 4.2,-6.5" />
      <polygon points="84.7,154.3 84.7,170.9 80,170.9 80,154.3 74.3,154.3 74.3,149.9 90.4,149.9 90.4,154.3" />
      <path d="m91.2,160.4c0,-7.5 2.9,-10.8 9.1,-10.8s9.1,3.3 9.1,10.8 -2.9,10.8 -9.1,10.8 -9.1,-3.3 -9.1,-10.8m13.2,0c0,-4.3 -0.7,-6.5 -4.2,-6.5s-4.2,2.2 -4.2,6.5 0.7,6.5 4.2,6.5 4.2,-2.2 4.2,-6.5" />
      <path d="m112.5,149.9h8.5c4.5,0 7.4,1.7 7.4,6.7 0,3.3 -1.6,5.4 -4.3,6l5.2,8.3h-5.5l-4.4,-7.5h-2.1v7.5h-4.7v-21zm8.3,9.4c2.1,0 2.8,-1.1 2.8,-2.7s-0.7,-2.7 -2.8,-2.7h-3.5v5.4z" />
      <path d="m131.2,170.6v-4.4c1,0.2 3.3,0.6 6.2,0.6 2.4,0 3.6,-0.3 3.6,-1.7 0,-1.5 -1,-1.7 -4.4,-3.3 -3.3,-1.5 -5.8,-2.8 -5.8,-6.4 0,-4.4 2.7,-5.9 7.9,-5.9 2.7,0 4.6,0.2 5.9,0.4v4.4c-1.2,-0.1 -3.3,-0.4 -5.7,-0.4 -2.8,0 -3.4,0.3 -3.4,1.4 0,1.2 1.5,1.8 3.8,2.8c3.5,1.6 6.3,2.9 6.3,6.9 0,4.2 -2.6,6.1 -8.2,6.1 -2.1,0.1 -4.2,-0.1 -6.2,-0.5" />
    </g>
  </g>
</svg>
`;

async function run() {
  const outputPath = path.resolve('public', 'og-image.png');
  await sharp(Buffer.from(svgBanner))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);
  console.log(`[OG-Image] Successfully generated: ${outputPath}`);
}

run().catch((err) => {
  console.error('[OG-Image] Error generating image:', err);
  process.exit(1);
});
