import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const targetFile = path.join(projectRoot, 'src', 'data', 'sheetsData.json');

// Helper to read local .env if present without external dependencies
function loadEnv() {
  const envPath = path.join(projectRoot, '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const sheetApiUrl = process.env.GOOGLE_SHEET_API_URL;

async function syncSheets() {
  if (!sheetApiUrl) {
    console.log('\x1b[33m[Sheets Sync]\x1b[0m GOOGLE_SHEET_API_URL not found. Skipping Google Sheets sync (using local default data).');
    return;
  }

  console.log(`\x1b[36m[Sheets Sync]\x1b[0m Fetching data from Google Sheets...`);
  
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout
    
    const response = await fetch(sheetApiUrl, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || typeof data !== 'object') {
      throw new Error('Invalid JSON format received from Google Sheets API');
    }

    // Ensure baseline structure
    const normalizedData = {
      sales: data.sales || null,
      pricelist: Array.isArray(data.pricelist) ? data.pricelist : [],
      promos: Array.isArray(data.promos) ? data.promos : [],
      testimonials: [],
      news: Array.isArray(data.news) ? data.news : []
    };

    fs.writeFileSync(targetFile, JSON.stringify(normalizedData, null, 2), 'utf-8');
    console.log(`\x1b[32m[Sheets Sync]\x1b[0m Successfully synced data from Google Sheets!`);
    console.log(`  - Sales Profile: ${normalizedData.sales ? 'Updated' : 'Default'}`);
    console.log(`  - Pricelist: ${normalizedData.pricelist.length} variant(s) updated`);
    console.log(`  - Promos: ${normalizedData.promos.length} item(s)`);
    console.log(`  - Testimonials: Static (Locked to official delivery photo records)`);
    console.log(`  - News / Articles: ${normalizedData.news.length} article(s)`);

  } catch (error) {
    console.error(`\x1b[31m[Sheets Sync Error]\x1b[0m Failed to sync Google Sheets:`, error.message);
    console.log(`\x1b[33m[Sheets Sync]\x1b[0m Continuing build using existing/local data...`);
  }
}

syncSheets();
