const fs = require('fs');
const path = require('path');

// 1. Parse Sales
let salesCode = fs.readFileSync('src/data/sales.ts', 'utf8');
salesCode = salesCode.replace(/import\s+[^;]+;/g, '');
salesCode = salesCode.replace(/export\s+interface[\s\S]*?^}/gm, '');
salesCode = salesCode.replace(/const\s+defaultSalesData:\s*SalesContact\s*=/g, 'const defaultSalesData =');
const cutSales = salesCode.indexOf('const sheetsSales');
if (cutSales !== -1) salesCode = salesCode.slice(0, cutSales);
salesCode += '; module.exports = { sales: defaultSalesData };';
const salesModule = eval(salesCode);
const salesData = salesModule.sales;

// 2. Parse Cars
let carsCode = fs.readFileSync('src/data/cars.ts', 'utf8');
carsCode = carsCode.replace(/import\s+[^;]+;/g, '');
carsCode = carsCode.replace(/export\s+interface[\s\S]*?^}/gm, '');
carsCode = carsCode.replace(/export\s+const\s+carsData:\s*CarModel\[\]\s*=/g, 'const carsData =');
const cutCars = carsCode.indexOf('function formatRupiah');
if (cutCars !== -1) carsCode = carsCode.slice(0, cutCars);
carsCode += '; module.exports = { carsData };';
const carsModule = eval(carsCode);
const carsData = carsModule.carsData;

// 3. Parse Promos
let promosCode = fs.readFileSync('src/data/promos.ts', 'utf8');
promosCode = promosCode.replace(/import\s+[^;]+;/g, '');
promosCode = promosCode.replace(/export\s+interface[\s\S]*?^}/gm, '');
promosCode = promosCode.replace(/const\s+defaultPromoList:\s*PromoItem\[\]\s*=/g, 'const defaultPromoList =');
const cutPromos = promosCode.indexOf('function formatImageUrl') !== -1
  ? promosCode.indexOf('function formatImageUrl')
  : promosCode.indexOf('export const promoList');
if (cutPromos !== -1) promosCode = promosCode.slice(0, cutPromos);
promosCode += '; module.exports = { promoList: defaultPromoList };';
const promosModule = eval(promosCode);
const promoList = promosModule.promoList;

// 4. Parse Testimonials
let testiCode = fs.readFileSync('src/data/testimonials.ts', 'utf8');
testiCode = testiCode.replace(/import\s+[^;]+;/g, '');
testiCode = testiCode.replace(/export\s+interface[\s\S]*?^}/gm, '');
testiCode = testiCode.replace(/const\s+defaultTestimonialsData:\s*TestimonialItem\[\]\s*=/g, 'const defaultTestimonialsData =');
const cutTesti = testiCode.indexOf('export const testimonialsData');
if (cutTesti !== -1) testiCode = testiCode.slice(0, cutTesti);
testiCode += '; module.exports = { testimonialsData: defaultTestimonialsData };';
const testiModule = eval(testiCode);
const testimonialsData = testiModule.testimonialsData;

// 5. Parse News
let newsCode = fs.readFileSync('src/data/news.ts', 'utf8');
newsCode = newsCode.replace(/import\s+[^;]+;/g, '');
newsCode = newsCode.replace(/export\s+interface[\s\S]*?^}/gm, '');
newsCode = newsCode.replace(/const\s+defaultNewsList:\s*NewsItem\[\]\s*=/g, 'const defaultNewsList =');
const cutNews = newsCode.indexOf('export function formatImageUrl');
if (cutNews !== -1) newsCode = newsCode.slice(0, cutNews);
newsCode += '; module.exports = { newsList: defaultNewsList };';
const newsModule = eval(newsCode);
const newsList = newsModule.newsList;

const outDir = path.resolve('google-sheets-setup');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to escape CSV cell
function escapeCSV(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

// --- CSV 1: Sales ---
const salesRows = [
  ['key', 'value'],
  ['name', salesData.name],
  ['nickname', salesData.nickname],
  ['role', salesData.role],
  ['dealer', salesData.dealer],
  ['dealerBranch', salesData.dealerBranch],
  ['address', salesData.address],
  ['city', salesData.city],
  ['phone', salesData.phone],
  ['whatsapp', salesData.whatsapp],
  ['whatsappDisplay', salesData.whatsappDisplay],
  ['email', salesData.email],
  ['experienceYears', salesData.experienceYears],
  ['unitsDelivered', salesData.unitsDelivered],
  ['rating', salesData.rating],
  ['operatingHours', salesData.operatingHours],
  ['googleMapsUrl', salesData.googleMapsUrl]
];
const salesCSV = salesRows.map(r => r.map(escapeCSV).join(',')).join('\n');
fs.writeFileSync(path.join(outDir, '1_Sales.csv'), salesCSV, 'utf8');

// --- CSV 2: Pricelist ---
const pricelistRows = [
  ['carSlug', 'carName', 'variantName', 'transmission', 'price', 'priceFormatted', 'dpEstimate', 'cicilanEstimate']
];
for (const car of carsData) {
  for (const v of car.variants) {
    pricelistRows.push([
      car.slug,
      car.name,
      v.name,
      v.transmission,
      v.price,
      v.priceFormatted,
      v.dpEstimate || '',
      v.cicilanEstimate || ''
    ]);
  }
}
const pricelistCSV = pricelistRows.map(r => r.map(escapeCSV).join(',')).join('\n');
fs.writeFileSync(path.join(outDir, '2_Pricelist.csv'), pricelistCSV, 'utf8');

// --- CSV 3: Promo ---
const promoRows = [
  ['id', 'title', 'badge', 'subtitle', 'description', 'targetCar', 'category', 'image', 'carSlug', 'validPeriod', 'benefits', 'highlight']
];
for (const p of promoList) {
  promoRows.push([
    p.id,
    p.title,
    p.badge,
    p.subtitle,
    p.description,
    p.targetCar,
    p.category,
    p.image,
    p.carSlug,
    p.validPeriod,
    p.benefits ? p.benefits.join(' | ') : '',
    p.highlight
  ]);
}
const promoCSV = promoRows.map(r => r.map(escapeCSV).join(',')).join('\n');
fs.writeFileSync(path.join(outDir, '3_Promo.csv'), promoCSV, 'utf8');

// --- CSV 4: Testimoni ---
const testiRows = [
  ['id', 'customerName', 'occupation', 'location', 'carPurchased', 'rating', 'deliveryDate', 'comment']
];
for (const t of testimonialsData) {
  testiRows.push([
    t.id,
    t.customerName,
    t.occupation,
    t.location,
    t.carPurchased,
    t.rating,
    t.deliveryDate,
    t.comment
  ]);
}
const testiCSV = testiRows.map(r => r.map(escapeCSV).join(',')).join('\n');
fs.writeFileSync(path.join(outDir, '4_Testimoni.csv'), testiCSV, 'utf8');

// --- CSV 5: Berita ---
const newsRows = [
  ['slug', 'title', 'category', 'date', 'author', 'image', 'excerpt', 'content', 'readTime']
];
for (const n of newsList) {
  newsRows.push([
    n.slug,
    n.title,
    n.category,
    n.date,
    n.author,
    n.image,
    n.excerpt,
    n.content,
    n.readTime
  ]);
}
const newsCSV = newsRows.map(r => r.map(escapeCSV).join(',')).join('\n');
fs.writeFileSync(path.join(outDir, '5_Berita.csv'), newsCSV, 'utf8');

console.log('Successfully generated CSV files in google-sheets-setup:');
console.log('  - 1_Sales.csv');
console.log('  - 2_Pricelist.csv (', pricelistRows.length - 1, 'variants )');
console.log('  - 3_Promo.csv (', promoRows.length - 1, 'promos )');
console.log('  - 4_Testimoni.csv (', testiRows.length - 1, 'testimonials )');
console.log('  - 5_Berita.csv (', newsRows.length - 1, 'articles )');

// --- Generate Code.gs ---
const codeGs = `/**
 * =========================================================================
 * GOOGLE APPS SCRIPT UNTUK CMS MITSUBISHI JAKARTA & CLOUDFLARE PAGES
 * =========================================================================
 * 
 * CARA MENGGUNAKAN:
 * 1. Di Google Sheets, buka menu "Extensions" > "Apps Script".
 * 2. Hapus semua kode default di Apps Script, lalu PASTE SELURUH KODE DI BAWAH INI.
 * 3. Jika sudah punya spreadsheet dan HANYA INGIN MENAMBAH TAB BERITA:
 *    - Di dropdown fungsi pilih "setupBeritaTabOnly", lalu klik "Run" (Jalankan).
 * 4. Jika spreadsheet masih baru kosong:
 *    - Di dropdown fungsi pilih "setupInitialTemplate", lalu klik "Run" (Jalankan).
 * 5. Ganti DEPLOY_HOOK_URL di bawah ini dengan URL Deploy Hook Cloudflare Pages Anda.
 * 6. Klik "Deploy" > "New deployment" > type "Web app":
 *    - Description: "Mitsubishi CMS API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Klik Deploy & copy URL-nya (masukkan ke Cloudflare Pages Env: GOOGLE_SHEET_API_URL).
 * 7. Refresh spreadsheet Anda. Menu "🚀 Website" akan muncul di baris menu atas!
 */

// GANTI DENGAN URL DEPLOY HOOK DARI CLOUDFLARE PAGES ANDA:
const DEPLOY_HOOK_URL = "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/GANTI_DENGAN_ID_DEPLOY_HOOK_ANDA";

/**
 * 1. MENU DI GOOGLE SHEETS
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🚀 Website')
    .addItem('Update Website Sekarang', 'triggerDeployHook')
    .addSeparator()
    .addItem('Tambah / Reset Tab Berita Saja', 'setupBeritaTabOnly')
    .addItem('Inisialisasi / Reset Semua Data Template', 'setupInitialTemplate')
    .addToUi();
}

/**
 * 2. TRIGGER RE-BUILD KE CLOUDFLARE PAGES
 */
function triggerDeployHook() {
  const ui = SpreadsheetApp.getUi();
  
  if (!DEPLOY_HOOK_URL || DEPLOY_HOOK_URL.includes("GANTI_DENGAN_ID")) {
    ui.alert("⚠️ Konfigurasi Belum Lengkap", "Silakan masukkan DEPLOY_HOOK_URL Cloudflare Pages pada file Code.gs terlebih dahulu.", ui.ButtonSet.OK);
    return;
  }

  const response = ui.alert(
    'Konfirmasi Update Website',
    'Apakah Anda yakin ingin mempublikasikan perubahan data harga, promo, kontak, ulasan, atau berita ke website sekarang?',
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    try {
      UrlFetchApp.fetch(DEPLOY_HOOK_URL, {
        method: 'post',
        muteHttpExceptions: true
      });

      ui.alert(
        '✅ Permintaan Update Berhasil Dikirim!',
        'Cloudflare Pages sedang memproses pembaruan website otomatis.\\n\\nWebsite akan ter-update dalam 1 - 2 menit. Silakan refresh website Anda nanti.',
        ui.ButtonSet.OK
      );
    } catch (err) {
      ui.alert('❌ Gagal Mengirim Update', 'Terjadi kesalahan: ' + err.toString(), ui.ButtonSet.OK);
    }
  }
}

/**
 * 3. JSON API ENDPOINT (Untuk ditarik oleh script build Astro)
 */
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      throw new Error("No active spreadsheet found");
    }
    
    const sales = getSalesData(ss);
    const pricelist = getSheetData(ss, 'Pricelist');
    const promos = getSheetData(ss, 'Promo');
    const testimonials = getSheetData(ss, 'Testimoni');
    const news = getSheetData(ss, 'Berita');

    const result = {
      status: 'success',
      timestamp: new Date().toISOString(),
      sales: sales,
      pricelist: pricelist,
      promos: promos,
      testimonials: testimonials,
      news: news
    };

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSalesData(ss) {
  const sheet = ss.getSheetByName('Sales');
  if (!sheet) return null;

  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return null;

  const sales = {};
  for (let i = 1; i < data.length; i++) {
    const key = String(data[i][0] || '').trim();
    const val = data[i][1];
    if (key) {
      sales[key] = val;
    }
  }
  return sales;
}

function getSheetData(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];

  const headers = data[0].map(h => String(h || '').trim());
  const rows = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const isEmpty = row.every(cell => cell === '' || cell === null || cell === undefined);
    if (isEmpty) continue;

    const obj = {};
    headers.forEach((header, colIndex) => {
      if (header) {
        obj[header] = row[colIndex];
      }
    });
    rows.push(obj);
  }

  return rows;
}

// Master Data Rows
const newsRows = ${JSON.stringify(newsRows, null, 2)};
const salesRows = ${JSON.stringify(salesRows, null, 2)};
const pricelistRows = ${JSON.stringify(pricelistRows, null, 2)};
const promoRows = ${JSON.stringify(promoRows, null, 2)};
const testiRows = ${JSON.stringify(testiRows, null, 2)};

/**
 * 4. HANYA MENAMBAH TAB BERITA (Tanpa merusak tab lain yang sudah diedit)
 */
function setupBeritaTabOnly() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    Logger.log('Tidak ada spreadsheet aktif.');
    return;
  }

  populateTab(ss, 'Berita', newsRows, '#D90000');
  SpreadsheetApp.flush();
  try {
    ss.toast('🎉 Tab Berita berhasil dibuat & diisi 3 artikel contoh!', 'Sukses', 8);
  } catch (e) {}
  Logger.log('🎉 Tab Berita berhasil dibuat!');
}

/**
 * 5. OTOMATIS MEMBUAT & MENGISI SELURUH 5 TAB
 */
function setupInitialTemplate() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    Logger.log('Tidak ada spreadsheet aktif. Membuat spreadsheet baru...');
    ss = SpreadsheetApp.create('CMS Mitsubishi Jakarta');
    Logger.log('✅ Spreadsheet baru dibuat di Google Drive Anda: ' + ss.getUrl());
  }

  populateTab(ss, 'Sales', salesRows, '#D90000');
  populateTab(ss, 'Pricelist', pricelistRows, '#1F2937');
  populateTab(ss, 'Promo', promoRows, '#D90000');
  populateTab(ss, 'Testimoni', testiRows, '#1F2937');
  populateTab(ss, 'Berita', newsRows, '#D90000');

  const defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('Sheet 1');
  if (defaultSheet && ss.getSheets().length > 1) {
    try { ss.deleteSheet(defaultSheet); } catch (e) {}
  }

  SpreadsheetApp.flush();
  try {
    ss.toast('🎉 Ke-5 sheet (Sales, Pricelist, Promo, Testimoni, Berita) berhasil dibuat!', 'Sukses', 8);
  } catch (e) {}
  Logger.log('🎉 Template Berhasil Dibuat! Silakan cek tab spreadsheet Anda.');
}

function populateTab(ss, tabName, rows, headerColor) {
  let sheet = ss.getSheetByName(tabName);
  if (!sheet) {
    sheet = ss.insertSheet(tabName);
  } else {
    sheet.clear();
  }

  if (rows.length === 0) return;

  const numRows = rows.length;
  const numCols = rows[0].length;
  const range = sheet.getRange(1, 1, numRows, numCols);
  range.setValues(rows);

  // Style Header
  const headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setBackground(headerColor);
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 35);
  sheet.setFrozenRows(1);

  // Borders
  range.setBorder(true, true, true, true, true, true, '#E5E7EB', SpreadsheetApp.BorderStyle.SOLID);
}
`;

fs.writeFileSync(path.join(outDir, 'Code.gs'), codeGs, 'utf8');
console.log('Successfully updated google-sheets-setup/Code.gs with Berita tab and seeder!');
