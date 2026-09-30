export interface PromoItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  targetCar: string;
  validPeriod: string;
  benefits: string[];
  highlight: string;
}

export const promoList: PromoItem[] = [
  {
    id: 'promo-xpander-bunga-0',
    title: 'Program New Xpander: Bunga 0% & DP Ringan',
    badge: 'HOT DEAL',
    subtitle: 'Wujudkan MPV Impian Keluarga Tanpa Beban Bunga',
    description: 'Dapatkan fasilitas bunga 0% hingga tenor 2 tahun atau pilihan paket DP super ringan mulai 20 jutaan dengan proses kredit kilat dibantu sampai approve.',
    targetCar: 'New Xpander & Xpander Cross',
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
    validPeriod: 'Promo Spesial Jakarta',
    benefits: [
      'DP ringan mulai 35 Juta-an',
      'Fasilitas test drive diantar langsung ke rumah atau kantor',
      'Gratis Biaya Jasa & Sparepart 50.000 KM / 4 Tahun',
      'Gratis Kaca Film Solar Gard Black Phantom',
      'Subsidi Trade-In mobil lama hingga Rp 10 Juta'
    ],
    highlight: 'DP 35 Jt-an / Tenor s/d 7 Tahun'
  }
];
