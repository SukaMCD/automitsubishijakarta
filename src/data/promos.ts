import rawSheetsData from './sheetsData.json';

export interface PromoItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  targetCar: string;
  category: 'passenger' | 'lcv' | 'trade-in';
  image: string;
  carSlug: string;
  validPeriod: string;
  benefits: string[];
  highlight: string;
}

const defaultPromoList: PromoItem[] = [
  {
    id: 'promo-xpander-bunga-0',
    title: 'Program New Xpander: Bunga 0% & DP Ringan',
    badge: 'HOT DEAL',
    subtitle: 'Wujudkan MPV Impian Keluarga Tanpa Beban Bunga',
    description: 'Dapatkan fasilitas bunga 0% hingga tenor 2 tahun atau pilihan paket DP super ringan mulai 20 jutaan dengan proses kredit kilat dibantu sampai approve.',
    targetCar: 'New Xpander & Xpander Cross',
    category: 'passenger',
    image: '/images/cars/xpander/xpander-optimized.webp',
    carSlug: 'xpander',
    validPeriod: 'Berlaku s/d Akhir Bulan Ini',
    benefits: [
      'Bunga 0% tenor hingga 2 tahun via Dipo Star Finance',
      'Paket DP Ringan mulai 20 Juta-an',
      'Gratis Kaca Film Solar Gard / V-Kool bergaransi resmi',
      'Gratis Paket SMART Silver (Perawatan & Jasa s/d 50.000 KM / 4 Tahun)',
      'Cashback maksimal & suvenir resmi'
    ],
    highlight: 'DP Mulai 20 Jt / Bunga 0%'
  },
  {
    id: 'promo-pajero-sport',
    title: 'Program Pajero Sport: Cashback & Free Asuransi',
    badge: 'FLAGSHIP PROMO',
    subtitle: 'SUV Prestisius dengan Penawaran Kredit Terbaik di Jabodetabek',
    description: 'Nikmati kemewahan dan ketangguhan Pajero Sport dengan program subsidi DP istimewa, cashback puluhan juta rupiah, dan bonus paket aksesoris lengkap.',
    targetCar: 'New Pajero Sport Dakar & Dakar Ultimate',
    category: 'passenger',
    image: '/images/cars/pajero-sport/new-pajero-sport-optimized.webp',
    carSlug: 'pajero-sport',
    validPeriod: 'Unit Ready Stock Terbatas',
    benefits: [
      'Cashback maksimal hingga puluhan juta rupiah',
      'Paket Kredit Bunga Rendah mulai 2,75% per tahun',
      'Gratis Kaca Film V-Kool VIP bergaransi resmi',
      'Gratis Paket SMART Silver (Oli & Sparepart s/d 50.000 KM)',
      'Bonus Dashcam + Talang Air Original Mitsubishi'
    ],
    highlight: 'Cashback Terbesar + Kaca Film V-Kool'
  },
  {
    id: 'promo-xforce',
    title: 'XForce Urban Package: Gratis Servis & Sound Yamaha',
    badge: 'URBAN DEAL',
    subtitle: 'Compact SUV Terbaik dengan Teknologi Audio Konser Yamaha',
    description: 'Miliki Mitsubishi XForce sekarang dengan tenor fleksibel hingga 7 tahun atau paket bunga 0% plus gratis servis berkala.',
    targetCar: 'Mitsubishi XForce Exceed & Ultimate',
    category: 'passenger',
    image: '/images/cars/xforce/new-xforce-optimized.webp',
    carSlug: 'xforce',
    validPeriod: 'Promo Spesial Jakarta',
    benefits: [
      'DP ringan mulai 35 Juta-an',
      'Fasilitas test drive diantar langsung ke rumah atau kantor',
      'Gratis Biaya Jasa & Sparepart 50.000 KM / 4 Tahun',
      'Gratis Kaca Film Solar Gard Black Phantom',
      'Subsidi Trade-In mobil lama hingga Rp 10 Juta'
    ],
    highlight: 'DP 35 Jt-an / Tenor s/d 7 Tahun'
  },
  {
    id: 'promo-destinator',
    title: 'All New Destinator: Program Spesial Peluncuran 2026',
    badge: 'BARU 2026',
    subtitle: 'SUV Keluarga 7-Penumpang dengan Kabin Lapang dan Fitur Lengkap',
    description: 'Dapatkan jadwal alokasi unit pertama untuk wilayah Jakarta dan Jabodetabek, paket pembiayaan launching, serta paket aksesoris resmi pabrik.',
    targetCar: 'Mitsubishi Destinator',
    category: 'passenger',
    image: '/images/cars/destinator/destinator-optimized.webp',
    carSlug: 'destinator',
    validPeriod: 'Alokasi Terbatas Kuota Pertama',
    benefits: [
      'Prioritas alokasi delivery unit pertama di Jakarta',
      'Paket Bunga Spesial Launching 2,5% per tahun',
      'Gratis Perawatan Berkala SMART Package 4 Tahun',
      'Gratis Kaca Film Premium bergaransi resmi',
      'Souvenir eksklusif All New Destinator'
    ],
    highlight: 'Bunga Eksklusif 2,5% & Delivery Prioritas'
  },
  {
    id: 'promo-niaga-l300-triton',
    title: 'Paket Usaha Tangguh: L300 & All New Triton',
    badge: 'ARMADA USAHA',
    subtitle: 'Solusi Kendaraan Niaga Andal untuk Pengusaha Jakarta & Sekitarnya',
    description: 'Tingkatkan efisiensi operasional usaha Anda dengan pick-up L300 dan ketangguhan kabin ganda Triton bermesin Euro 4 bertenaga dan irit.',
    targetCar: 'Mitsubishi L300 & All New Triton',
    category: 'lcv',
    image: '/images/cars/l300/l300-optimized.webp',
    carSlug: 'l300',
    validPeriod: 'Berlaku Khusus Pembelian Bulan Ini',
    benefits: [
      'DP Minim L300 mulai 15 Juta-an',
      'Bunga Rendah / Angsuran Terjangkau untuk Usaha',
      'Gratis Jasa Servis & Konsultasi Karoseri',
      'Proses berkas data usaha dijemput langsung ke lokasi',
      'Diskon armada fleet pembelian lebih dari 1 unit'
    ],
    highlight: 'DP L300 Mulai 15 Jt-an / Cicilan Ringan'
  },
  {
    id: 'promo-trade-in-semua-merk',
    title: 'Program Tukar Tambah (Trade-In) Semua Merek',
    badge: 'TRADE-IN BONUS',
    subtitle: 'Tukar Mobil Lama Anda Menjadi Unit Baru Melalui Dealer Resmi',
    description: 'Inspeksi dan taksiran harga pasar mobil lama dari merek apa pun langsung di lokasi Anda, dengan tambahan subsidi trade-in hingga Rp 10 juta rupiah.',
    targetCar: 'Semua Model Mobil Penumpang & Niaga',
    category: 'trade-in',
    image: '/images/cars/xpander-cross/xpander-cross-optimized.webp',
    carSlug: 'xpander-cross',
    validPeriod: 'Terbuka untuk Semua Merek Mobil',
    benefits: [
      'Inspeksi dan taksiran mobil lama langsung di rumah atau kantor Anda',
      'Tambahan subsidi Trade-In hingga Rp 10 Juta',
      'Nilai taksiran langsung dialokasikan sebagai DP mobil baru',
      'Mobil lama tetap dapat digunakan sampai unit baru resmi dikirim',
      'Proses verifikasi berkas langsung di tempat tanpa perantara'
    ],
    highlight: 'Ekstra Subsidi s/d Rp 10 Juta'
  }
];

function formatImageUrl(url?: string): string {
  if (!url) return '/images/cars/xpander/xpander-optimized.webp';
  const trimmed = url.trim();
  const driveMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return trimmed;
}

export const promoList: PromoItem[] = (
  rawSheetsData.promos && rawSheetsData.promos.length > 0
    ? (rawSheetsData.promos as any[]).map((item, idx) => ({
        id: item.id || `promo-${idx + 1}`,
        title: item.title || '',
        badge: item.badge || 'PROMO',
        subtitle: item.subtitle || '',
        description: item.description || '',
        targetCar: item.targetCar || '',
        category: (item.category as 'passenger' | 'lcv' | 'trade-in') || 'passenger',
        image: formatImageUrl(item.image),
        carSlug: item.carSlug || '',
        validPeriod: item.validPeriod || 'Berlaku s/d Akhir Bulan Ini',
        benefits: Array.isArray(item.benefits)
          ? item.benefits
          : typeof item.benefits === 'string'
            ? item.benefits.split('|').map((b: string) => b.trim()).filter(Boolean)
            : [],
        highlight: item.highlight || ''
      }))
    : defaultPromoList
);

