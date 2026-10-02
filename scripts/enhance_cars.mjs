import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function getWebpFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(await getWebpFiles(fullPath));
    } else if (entry.name.endsWith('.webp')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  const dir = './public/images/cars';
  const filePaths = await getWebpFiles(dir);

  console.log(`Starting enhancement for ${filePaths.length} car images...`);

  for (const filePath of filePaths) {
    const f = path.relative(dir, filePath);
    const buf = fs.readFileSync(filePath);
    const meta = await sharp(buf).metadata();

    const targetWidth = Math.round(meta.width * 2.5); // 1520 px
    const targetHeight = Math.round(meta.height * 2.5); // 660 px

    console.log(`Enhancing ${f} (${meta.width}x${meta.height} -> ${targetWidth}x${targetHeight})...`);

    const enhanced = await sharp(buf)
      .resize({
        width: targetWidth,
        height: targetHeight,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        kernel: sharp.kernel.lanczos3,
        fastShrinkOnLoad: false
      })
      .sharpen({
        sigma: 1.1,
        m1: 1.0,
        m2: 2.0,
        x1: 2,
        y2: 10,
        y3: 20
      })
      .webp({
        quality: 95,
        alphaQuality: 100,
        effort: 6,
        lossless: false
      })
      .toBuffer();

    fs.writeFileSync(filePath, enhanced);
    console.log(`✓ Saved ${f} (${enhanced.length} bytes)`);
  }

  console.log('All car images successfully enhanced!');
}

main().catch((err) => {
  console.error('Enhancement error:', err);
  process.exit(1);
});
