export interface CarVariant {
  name: string;
  transmission: 'MT' | 'CVT' | 'AT';
  price: number;
  priceFormatted: string;
}

export interface CarColor {
  name: string;
  hex: string;
}

export interface CarModel {
  slug: string;
  name: string;
  tagline: string;
  category: 'MPV' | 'SUV' | 'Commercial';
  badge?: string;
  startingPrice: string;
  startingPriceNum: number;
  dpStart: string;
  dpMinNum: number;
  cicilanStart: string;
  cicilanNum: number;
  image: string;
  galleryImages: string[];
  colors: CarColor[];
  highlights: string[];
  keySpecs: {
    seating: string;
    engine: string;
    power: string;
    transmission: string;
    groundClearance: string;
    fuelType: string;
  };
  variants: CarVariant[];
  description: string;
}

export const carsData: CarModel[] = [
  {
    slug: 'xpander',
    name: 'New Mitsubishi Xpander',
    tagline: 'Be The Life Xpander - MPV Keluarga Terbaik di Kelasnya',
    category: 'MPV',
    badge: 'BEST SELLER',
    startingPrice: 'Rp 270.400.000',
    startingPriceNum: 270400000,
    dpStart: 'Rp 20 Jt-an',
    dpMinNum: 20000000,
    cicilanStart: 'Rp 4,2 Jt/bln',
    cicilanNum: 4200000,
    image: '/images/cars/xpander-optimized.webp',
    galleryImages: [
      '/images/cars/xpander-optimized.webp'
    ],
    colors: [
      { name: 'Quartz White Pearl', hex: '#EAEAEA' },
      { name: 'Jet Black Mica', hex: '#1C1C1C' },
      { name: 'Blade Silver Metallic', hex: '#9E9E9E' },
      { name: 'Graphite Gray Metallic', hex: '#4A4A4A' },
      { name: 'Red Metallic', hex: '#C01818' }
    ],
    highlights: [
      'Kabin 7-seater paling senyap & luas dengan legroom lapang',
      'Suspensi ternyaman di kelas MPV hasil adaptasi Lancer Evolution',
      'Head Unit 9 inci dengan Apple CarPlay & Android Auto',
      'Electric Parking Brake (EPB) dengan Brake Auto Hold (BAH)',
      'Ground clearance 220 mm tertinggi di kelas Low MPV'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '1.5L MIVEC DOHC 16-Valve',
      power: '105 PS @ 6.000 RPM',
      transmission: 'CVT / 5-Speed Manual',
      groundClearance: '220 mm',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      { name: 'Xpander GLS MT', transmission: 'MT', price: 270400000, priceFormatted: 'Rp 270.400.000' },
      { name: 'Xpander GLS CVT', transmission: 'CVT', price: 279600000, priceFormatted: 'Rp 279.600.000' },
      { name: 'Xpander Exceed MT', transmission: 'MT', price: 283500000, priceFormatted: 'Rp 283.500.000' },
      { name: 'Xpander Exceed CVT', transmission: 'CVT', price: 292800000, priceFormatted: 'Rp 292.800.000' },
      { name: 'Xpander Ultimate CVT', transmission: 'CVT', price: 324500000, priceFormatted: 'Rp 324.500.000' }
    ],
    description: 'Mitsubishi New Xpander hadir mendefinisikan ulang standar MPV keluarga di Indonesia dengan desain Dynamic Shield yang berkarakter, interior mewah layaknya sedan premium, dan kenyamanan suspensi terbaik.'
  },
  {
    slug: 'pajero-sport',
    name: 'New Pajero Sport',
    tagline: 'Live The Adventure - Raja SUV Tangguh & Mewah',
    category: 'SUV',
    badge: 'FLAGSHIP SUV',
    startingPrice: 'Rp 578.600.000',
    startingPriceNum: 578600000,
    dpStart: 'Rp 75 Jt-an',
    dpMinNum: 75000000,
    cicilanStart: 'Rp 9,8 Jt/bln',
    cicilanNum: 9800000,
    image: '/images/cars/new-pajero-sport-optimized.webp',
    galleryImages: [
      '/images/cars/new-pajero-sport-optimized.webp'
    ],
    colors: [
      { name: 'Diamond Black Mica', hex: '#111111' },
      { name: 'Quartz White Pearl', hex: '#F2F2F2' },
      { name: 'Blade Silver Metallic', hex: '#A8A8A8' },
      { name: 'Medium Red', hex: '#941B1B' }
    ],
    highlights: [
      'Mesin Diesel 2.4L MIVEC Turbo VGIC 181 PS bertenaga monster & irit',
      'Transmisi Otomatis 8-Kecepatan dengan Paddle Shift',
      'Advanced Driver Assistance: ACC, FCM, BSW, RCTA, Ultrasonic Misacceleration',
      'Mitsubishi Remote Control terhubung ke smartphone iOS & Android',
      'Sunroof elektrik & Power Tailgate dengan Kick Sensor'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '2.4L 4N15 MIVEC Turbo Diesel',
      power: '181 PS @ 3.500 RPM / 430 Nm',
      transmission: '8-Speed Automatic',
      groundClearance: '218 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Pajero Sport Exceed 4x2 MT', transmission: 'MT', price: 578600000, priceFormatted: 'Rp 578.600.000' },
      { name: 'Pajero Sport Exceed 4x2 AT', transmission: 'AT', price: 593800000, priceFormatted: 'Rp 593.800.000' },
      { name: 'Pajero Sport GLX 4x4 MT', transmission: 'MT', price: 606100000, priceFormatted: 'Rp 606.100.000' },
      { name: 'Pajero Sport Dakar 4x2 AT', transmission: 'AT', price: 657700000, priceFormatted: 'Rp 657.700.000' },
      { name: 'Pajero Sport Dakar Ultimate 4x2 AT', transmission: 'AT', price: 708300000, priceFormatted: 'Rp 708.300.000' },
      { name: 'Pajero Sport Dakar Ultimate 4x4 AT', transmission: 'AT', price: 775100000, priceFormatted: 'Rp 775.100.000' }
    ],
    description: 'Pajero Sport memadukan ketangguhan sasis ladder frame sejati dengan kemewahan kabin premium dan teknologi canggih. Pilihan tepat bagi Anda yang mengutamakan wibawa, performa off-road, dan kenyamanan keluarga.'
  },
  {
    slug: 'xforce',
    name: 'Mitsubishi XForce',
    tagline: 'Infinite Xcitement - Compact SUV Futuristik dengan Yamaha Audio',
    category: 'SUV',
    badge: 'BARU',
    startingPrice: 'Rp 381.900.000',
    startingPriceNum: 381900000,
    dpStart: 'Rp 35 Jt-an',
    dpMinNum: 35000000,
    cicilanStart: 'Rp 5,9 Jt/bln',
    cicilanNum: 5900000,
    image: '/images/cars/new-xforce-optimized.webp',
    galleryImages: [
      '/images/cars/new-xforce-optimized.webp'
    ],
    colors: [
      { name: 'Energetic Yellow Metallic', hex: '#D6A800' },
      { name: 'Quartz White Pearl', hex: '#F0F0F0' },
      { name: 'Blade Silver Metallic', hex: '#A2A2A2' },
      { name: 'Graphite Gray Metallic', hex: '#3B3B3B' },
      { name: 'Jet Black Mica', hex: '#161616' },
      { name: 'Red Metallic', hex: '#B81313' }
    ],
    highlights: [
      'Dynamic Sound Yamaha Premium 8-speaker kelas audiophile',
      'Dual Screen 12.3 inch Smartphone-link Display + 8 inch Digital Meter',
      '4 Mode Berkendara: Normal, Wet (jalan basah licin), Gravel, & Mud',
      'Active Yaw Control (AYC) untuk manuver stabil di tikungan tajam',
      'Console Box dengan Coolbox pendingin minuman'
    ],
    keySpecs: {
      seating: '5 Penumpang',
      engine: '1.5L 4A91 DOHC MIVEC',
      power: '105 PS @ 6.000 RPM',
      transmission: 'CVT Automatic',
      groundClearance: '222 mm (Tertinggi di kelasnya)',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      { name: 'XForce Exceed CVT', transmission: 'CVT', price: 381900000, priceFormatted: 'Rp 381.900.000' },
      { name: 'XForce Ultimate CVT', transmission: 'CVT', price: 414900000, priceFormatted: 'Rp 414.900.000' },
      { name: 'XForce Ultimate with Diamond Sense', transmission: 'CVT', price: 422900000, priceFormatted: 'Rp 422.900.000' }
    ],
    description: 'Mitsubishi XForce diciptakan khusus untuk pengendara urban modern yang mendambakan kepraktisan compact SUV dengan nuansa futuristik, sound system Yamaha konser musik, dan rasa aman berkendara di iklim tropis Indonesia.'
  },
  {
    slug: 'xpander-cross',
    name: 'New Xpander Cross',
    tagline: 'Rise to Your Life’s Adventure - SUV Crossover Mewah & Tangguh',
    category: 'SUV',
    badge: 'ADVENTURE',
    startingPrice: 'Rp 329.750.000',
    startingPriceNum: 329750000,
    dpStart: 'Rp 28 Jt-an',
    dpMinNum: 28000000,
    cicilanStart: 'Rp 5,1 Jt/bln',
    cicilanNum: 5100000,
    image: '/images/cars/xpander-cross-optimized.webp',
    galleryImages: [
      '/images/cars/xpander-cross-optimized.webp'
    ],
    colors: [
      { name: 'Green Bronze Metallic', hex: '#4B5320' },
      { name: 'Quartz White Pearl', hex: '#EDEDED' },
      { name: 'Blade Silver Metallic', hex: '#A8A8A8' },
      { name: 'Graphite Gray Metallic', hex: '#444444' },
      { name: 'Jet Black Mica', hex: '#1A1A1A' }
    ],
    highlights: [
      'Active Yaw Control (AYC) menjaga stabilitas mobil di tikungan tajam dan basah',
      'Desain Bumper & Grille Rugged SUV yang jauh lebih gagah dan maskulin',
      'LCD Meter Cluster 8 inch serba digital adaptasi Pajero Sport',
      'Multi Around Monitor 360 derajat memudahkan parkir di area sempit',
      'Wireless Charger & Micron Air Filtration menjaga udara kabin selalu bersih'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '1.5L MIVEC DOHC 16-Valve',
      power: '105 PS @ 6.000 RPM',
      transmission: 'CVT / 5-Speed Manual',
      groundClearance: '220 mm',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      { name: 'Xpander Cross MT', transmission: 'MT', price: 329750000, priceFormatted: 'Rp 329.750.000' },
      { name: 'Xpander Cross Premium CVT', transmission: 'CVT', price: 355650000, priceFormatted: 'Rp 355.650.000' }
    ],
    description: 'Perpaduan sempurna antara kenyamanan kabin MPV 7 penumpang dengan ketangguhan dan ground clearance tinggi khas SUV sejati. Siap menemani segala petualangan keluarga Anda di kota maupun luar kota.'
  },
  {
    slug: 'destinator',
    name: 'All-New Destinator',
    tagline: 'The Ultimate 7-Seater Turbo SUV - Prestise & Tenaga Tanpa Kompromi',
    category: 'SUV',
    badge: 'BARU',
    startingPrice: 'Rp 395.000.000',
    startingPriceNum: 395000000,
    dpStart: 'Rp 40 Jt-an',
    dpMinNum: 40000000,
    cicilanStart: 'Rp 6,2 Jt/bln',
    cicilanNum: 6200000,
    image: '/images/cars/destinator-optimized.webp',
    galleryImages: [
      '/images/cars/destinator-optimized.webp'
    ],
    colors: [
      { name: 'Imperial Red Metallic', hex: '#8B0000' },
      { name: 'Pearl White', hex: '#F5F5F5' },
      { name: 'Cosmic Black', hex: '#111111' },
      { name: 'Titanium Gray', hex: '#4F4F4F' }
    ],
    highlights: [
      'Mesin 1.5L Turbocharged bertenaga 163 PS dengan torsi melimpah 250 Nm',
      'Predikat 5 Bintang Uji Keselamatan ASEAN NCAP',
      'Mitsubishi Connect: Nyalakan AC, lacak posisi mobil, & buka pintu via smartphone',
      'Panoramic Sunroof & Hands-Free Power Tailgate dengan Sensor Kaki',
      'Konfigurasi 7-Seater lega dengan kursi captain seat baris kedua'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '1.5L Direct Injection Turbocharged',
      power: '163 PS @ 5.500 RPM / 250 Nm',
      transmission: 'Direct-Drive CVT',
      groundClearance: '215 mm',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      { name: 'Destinator Sport Turbo CVT', transmission: 'CVT', price: 395000000, priceFormatted: 'Rp 395.000.000' },
      { name: 'Destinator Ultimate Turbo CVT', transmission: 'CVT', price: 468000000, priceFormatted: 'Rp 468.000.000' },
      { name: 'Destinator Prestige AWD Turbo', transmission: 'CVT', price: 517000000, priceFormatted: 'Rp 517.000.000' }
    ],
    description: 'Destinator menjembatani segmen compact SUV dan full-size SUV dengan tenaga turbo responsif, fitur keselamatan bintang lima, serta kemewahan interior berkelas eksekutif untuk 7 penumpang.'
  },
  {
    slug: 'triton',
    name: 'All New Mitsubishi Triton',
    tagline: 'Engineered Beyond Tough - Rajanya Double Cabin 4x4',
    category: 'Commercial',
    badge: 'TANGGUH',
    startingPrice: 'Rp 310.200.000',
    startingPriceNum: 310200000,
    dpStart: 'Rp 35 Jt-an',
    dpMinNum: 35000000,
    cicilanStart: 'Rp 5,4 Jt/bln',
    cicilanNum: 5400000,
    image: '/images/cars/all-new-triton-optimized.webp',
    galleryImages: [
      '/images/cars/all-new-triton-optimized.webp'
    ],
    colors: [
      { name: 'White Solid', hex: '#FAFAFA' },
      { name: 'Blade Silver Metallic', hex: '#A8A8A8' },
      { name: 'Jet Black Mica', hex: '#141414' },
      { name: 'Yamabuki Orange Metallic', hex: '#E06B00' }
    ],
    highlights: [
      'Sasis Mega Frame generasi baru dengan torsional rigidity meningkat 60%',
      'Super Select 4WD-II dengan 7 Drive Mode (Normal, Eco, Gravel, Snow, Mud, Sand, Rock)',
      'Mesin Diesel 2.4L Bi-Turbo bertenaga hingga 204 PS & torsi badak 470 Nm',
      'Bak kargo terluas dan terkuat di kelasnya dengan kapasitas angkut maksimal',
      'Fitur keselamatan aktif lengkap ADAS untuk varian Ultimate'
    ],
    keySpecs: {
      seating: '2 - 5 Penumpang',
      engine: '2.4L 4N16 Clean Diesel Turbo / Bi-Turbo',
      power: '150 - 204 PS',
      transmission: '6-Speed MT / 6-Speed AT',
      groundClearance: '222 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Triton GLX Single Cabin 4x2 MT', transmission: 'MT', price: 310200000, priceFormatted: 'Rp 310.200.000' },
      { name: 'Triton HDX Single Cabin 4x4 MT', transmission: 'MT', price: 388500000, priceFormatted: 'Rp 388.500.000' },
      { name: 'Triton HDX Double Cabin 4x4 MT', transmission: 'MT', price: 435000000, priceFormatted: 'Rp 435.000.000' },
      { name: 'Triton GLS Double Cabin 4x4 MT', transmission: 'MT', price: 470000000, priceFormatted: 'Rp 470.000.000' },
      { name: 'Triton Ultimate Double Cabin 4x4 AT', transmission: 'AT', price: 571000000, priceFormatted: 'Rp 571.000.000' }
    ],
    description: 'All New Triton dirancang ulang dari nol dengan DNA reli tangguh Paris-Dakar. Menghadirkan ketangguhan tanpa tanding di area tambang, perkebunan, hingga gaya hidup adventure off-road perkotaan.'
  },
  {
    slug: 'l300',
    name: 'New Colt L300 Euro 4',
    tagline: 'Rajanya Pick Up - Lebih Irit, Lebih Bertenaga, Muat Lebih Banyak',
    category: 'Commercial',
    badge: 'LEGENDA NIAGA',
    startingPrice: 'Rp 234.150.000',
    startingPriceNum: 234150000,
    dpStart: 'Rp 15 Jt-an',
    dpMinNum: 15000000,
    cicilanStart: 'Rp 3,5 Jt/bln',
    cicilanNum: 3500000,
    image: '/images/cars/l300-optimized.webp',
    galleryImages: [
      '/images/cars/l300-optimized.webp'
    ],
    colors: [
      { name: 'Black Solid', hex: '#181818' }
    ],
    highlights: [
      'Mesin Diesel 2.2L 4N14 Common Rail Turbo Euro 4: 40% lebih bertenaga & ramah lingkungan',
      'Kargo lebih panjang 200 mm (2.630 mm) dengan daya angkut ekstra 8%',
      'Interior baru lebih lega dengan speedometer modern & audio entertainment',
      'Nilai jual kembali (resale value) paling stabil dan dicari di seluruh pelosok Indonesia',
      'Jaringan bengkel resmi dan ketersediaan sparepart paling melimpah'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '2.2L 4N14 DOHC Common Rail Turbo Euro 4',
      power: '99.25 PS @ 3.500 RPM / 200 Nm',
      transmission: '5-Speed Manual',
      groundClearance: '195 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Colt L300 Cab Chassis', transmission: 'MT', price: 234150000, priceFormatted: 'Rp 234.150.000' },
      { name: 'Colt L300 Flat Deck (Bak Rata)', transmission: 'MT', price: 251650000, priceFormatted: 'Rp 251.650.000' }
    ],
    description: 'Lebih dari 40 tahun menjadi mitra terpercaya jutaan pengusaha di Indonesia. Colt L300 Euro 4 kini hadir dengan kargo lebih luas, mesin turbo common rail bertenaga tinggi, dan efisiensi bahan bakar maksimal.'
  }
];

export function getCarBySlug(slug: string): CarModel | undefined {
  return carsData.find(c => c.slug === slug);
}
