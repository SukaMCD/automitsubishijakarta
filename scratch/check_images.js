import fs from 'fs';

const content = fs.readFileSync('src/data/cars.ts', 'utf8');
const regex = /['"](\/images\/cars\/[^'"]+)['"]/g;
let match;
const paths = [];
while ((match = regex.exec(content)) !== null) {
  paths.push(match[1]);
}

console.log('Found ' + paths.length + ' image paths in cars.ts');
let missing = 0;
for (const p of paths) {
  const localPath = './public' + p;
  if (!fs.existsSync(localPath)) {
    console.error('MISSING: ' + localPath);
    missing++;
  } else {
    console.log('OK: ' + localPath);
  }
}

if (missing === 0) {
  console.log('SUCCESS: ALL ' + paths.length + ' IMAGE PATHS EXIST ON DISK!');
} else {
  console.error('FAIL: ' + missing + ' files missing!');
  process.exit(1);
}
