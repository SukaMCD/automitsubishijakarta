export interface CarVariant {
  name: string;
  transmission: 'MT' | 'CVT' | 'AT';
  price: number;
  priceFormatted: string;
  dpEstimate?: string;
  cicilanEstimate?: string;
  tier?: string;
  transmissionDetail?: string;
  groundClearance?: string;
  highlights?: string[];
}

export interface CarColor {
  name: string;
  hex: string;
  extraPriceFormatted?: string;
  availableVariants?: string[];
}

export interface CarModel {
  slug: string;
  name: string;
  tagline: string;
  category: 'MPV' | 'SUV' | 'Commercial' | 'Truk' | 'Bus' | 'Pick Up' | 'Truk & Bus';
  segment: 'passenger' | 'lcv' | 'commercial';
  badge?: string;
  startingPrice: string;
  startingPriceNum: number;
  dpStart: string;
  dpMinNum: number;
  cicilanStart: string;
  cicilanNum: number;
  image: string;
  heroImage?: string;
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
  // ─── 1. NEW XPANDER ───────────────────────────────────────────────────────────
  {
    slug: 'xpander',
    name: 'New Mitsubishi Xpander',
    tagline: 'Be The Life Xpander - MPV Keluarga Terbaik di Kelasnya',
    category: 'MPV',
    segment: 'passenger',
    badge: 'BEST SELLER',
    startingPrice: 'Rp 270.100.000',
    startingPriceNum: 270100000,
    dpStart: 'Rp 27 Jt-an',
    dpMinNum: 27000000,
    cicilanStart: 'Rp 4,1 Jt/bln',
    cicilanNum: 4100000,
    image: '/images/cars/xpander-optimized.webp',
    heroImage: '/images/cars/xpander-hero.webp',
    galleryImages: [
      '/images/cars/xpander-hero.webp',
      '/images/cars/xpander-interior.webp',
      '/images/cars/xpander-optimized.webp'
    ],
    colors: [
      { name: 'Quartz White Pearl', hex: '#F8F9FA', extraPriceFormatted: '+Rp 1.500.000', availableVariants: ['Ultimate', 'Exceed', 'GLS'] },
      { name: 'Jet Black Mica', hex: '#1A1A1A', availableVariants: ['Ultimate', 'Exceed', 'GLS'] },
      { name: 'Blade Silver Metallic', hex: '#C0C0C0', availableVariants: ['Ultimate', 'Exceed', 'GLS'] },
      { name: 'Red Metallic', hex: '#BA181B', availableVariants: ['Ultimate'] },
      { name: 'Graphite Gray Metallic', hex: '#4A4E51', availableVariants: ['Ultimate'] }
    ],
    highlights: [
      'Head Unit 10 inch touchscreen modern dengan Apple CarPlay & Android Auto nirkabel',
      'Meter cluster 8 inch Digital Driver Display canggih adaptasi SUV premium',
      'Fitur keselamatan maksimal: 6 SRS Airbags & Active Yaw Control (AYC)',
      'Multi Around Monitor (Kamera 360) & Parking Sensor untuk kemudahan parkir',
      'Electric Parking Brake (EPB) dengan Brake Auto Hold (BAH) & Wireless Charger',
      'Kabin 7-seater paling senyap & luas dengan fleksibilitas pelipatan kursi optimal'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '1.5L MIVEC DOHC 16-Valve',
      power: '105 PS (77 kW) @ 6.000 RPM',
      transmission: 'CVT / 5-Speed Manual',
      groundClearance: '220 - 225 mm',
      fuelType: 'Bensin (Tangki 45L)'
    },
    variants: [
      {
        name: 'Xpander Ultimate CVT',
        transmission: 'CVT',
        price: 337800000,
        priceFormatted: 'Rp 337.800.000',
        dpEstimate: 'Rp 34 Jt-an',
        cicilanEstimate: 'Rp 5,0 Jt-an',
        tier: 'Ultimate',
        transmissionDetail: 'CVT Otomatis',
        groundClearance: '220 mm',
        highlights: [
          'Head Unit 10 inch touchscreen modern dengan Apple CarPlay & Android Auto nirkabel',
          'Meter cluster 8 inch Digital Driver Display canggih adaptasi SUV premium',
          'Fitur keselamatan maksimal: 6 SRS Airbags & Active Yaw Control (AYC)',
          'Active Yaw Control (AYC) & Cruise Control untuk kenyamanan perjalanan jarak jauh',
          'Multi Around Monitor (Kamera 360) & Parking Sensor untuk kemudahan parkir aman',
          'Electric Parking Brake (EPB) dengan Brake Auto Hold (BAH) & Wireless Charger'
        ]
      },
      {
        name: 'Xpander Ultimate MT',
        transmission: 'MT',
        price: 322500000,
        priceFormatted: 'Rp 322.500.000',
        dpEstimate: 'Rp 32 Jt-an',
        cicilanEstimate: 'Rp 4,8 Jt-an',
        tier: 'Ultimate',
        transmissionDetail: '5-Speed Manual (M/T)',
        groundClearance: '225 mm',
        highlights: [
          'Head Unit 10 inch touchscreen modern dengan Apple CarPlay & Android Auto nirkabel',
          'Meter cluster 8 inch Digital Driver Display canggih adaptasi SUV premium',
          'Fitur keselamatan maksimal: 6 SRS Airbags & Active Yaw Control (AYC)',
          'Multi Around Monitor (Kamera 360) untuk pantauan blind spot menyeluruh',
          'Keyless Operating System (KOS) dengan tombol Start-Stop Engine',
          'Interior Black Soft Pad mewah, setir & tuas transmisi kulit, serta Wireless Charger'
        ]
      },
      {
        name: 'Xpander Exceed Tourer CVT',
        transmission: 'CVT',
        price: 297900000,
        priceFormatted: 'Rp 297.900.000',
        dpEstimate: 'Rp 30 Jt-an',
        cicilanEstimate: 'Rp 4,4 Jt-an',
        tier: 'Exceed',
        transmissionDetail: 'CVT Otomatis',
        groundClearance: '220 mm',
        highlights: [
          'Velg 17 inch Two-Tone Alloy Wheel & LED Projector Headlamp berdesain sporty',
          'Transmisi CVT baru yang halus, minim hentakan, dan efisien konsumsi bahan bakar',
          'Head Unit 8 inch Audio Touchscreen responsif dengan Hands-free Switch di kemudi',
          'Rear View Camera (Kamera Parkir Mundur) & Sensor Parkir belakang',
          'Digital Air Conditioner modern & Shark Fin Antenna aerodinamis',
          'Sistem keselamatan lengkap: Dual SRS Airbags, ABS + EBD + BA, ASC & HSA'
        ]
      },
      {
        name: 'Xpander Exceed Tourer MT',
        transmission: 'MT',
        price: 288700000,
        priceFormatted: 'Rp 288.700.000',
        dpEstimate: 'Rp 29 Jt-an',
        cicilanEstimate: 'Rp 4,3 Jt-an',
        tier: 'Exceed',
        transmissionDetail: '5-Speed Manual (M/T)',
        groundClearance: '225 mm',
        highlights: [
          'Velg 17 inch Two-Tone Alloy Wheel & LED Projector Headlamp berdesain sporty',
          'Transmisi manual 5-percepatan responsif dengan ground clearance tinggi 225 mm',
          'Head Unit 8 inch Audio Touchscreen dengan Hands-free Switch di kemudi',
          'Rear View Camera (Kamera Parkir Mundur) & Sensor Parkir belakang',
          'Digital Air Conditioner modern & Shark Fin Antenna aerodinamis',
          'Sistem keselamatan lengkap: Dual SRS Airbags, ABS + EBD + BA, ASC & HSA'
        ]
      },
      {
        name: 'Xpander GLS CVT',
        transmission: 'CVT',
        price: 279100000,
        priceFormatted: 'Rp 279.100.000',
        dpEstimate: 'Rp 28 Jt-an',
        cicilanEstimate: 'Rp 4,2 Jt-an',
        tier: 'GLS',
        transmissionDetail: 'CVT Otomatis',
        groundClearance: '220 mm',
        highlights: [
          'Kabin 7-seater paling senyap & lega di kelasnya dengan legroom baris ke-2 lapang',
          'Transmisi CVT baru yang halus, minim hentakan, dan efisien konsumsi bahan bakar',
          'Ground clearance 220 mm tangguh melibas berbagai kondisi jalan Jabodetabek',
          'Head Unit 7 inch Audio Touchscreen dengan konektivitas smartphone & USB',
          'Active Stability Control (ASC) & Hill Start Assist (HSA) untuk stabilitas berkendara',
          'Keselamatan terpadu MMKSI: Dual SRS Airbags, ABS + EBD + BA, ISOFIX & Alarm'
        ]
      },
      {
        name: 'Xpander GLS MT',
        transmission: 'MT',
        price: 270100000,
        priceFormatted: 'Rp 270.100.000',
        dpEstimate: 'Rp 27 Jt-an',
        cicilanEstimate: 'Rp 4,1 Jt-an',
        tier: 'GLS',
        transmissionDetail: '5-Speed Manual (M/T)',
        groundClearance: '225 mm',
        highlights: [
          'Kabin 7-seater paling senyap & lega di kelasnya dengan fleksibilitas kursi optimal',
          'Mesin 1.5L MIVEC bertenaga 105 PS dipadu transmisi manual 5-percepatan yang andal',
          'Ground clearance tertinggi 225 mm, sangat percaya diri melewati jalan bergelombang',
          'Head Unit 7 inch Audio Touchscreen dengan konektivitas smartphone & USB',
          'Active Stability Control (ASC) & Hill Start Assist (HSA) untuk stabilitas berkendara',
          'Keselamatan terpadu MMKSI: Dual SRS Airbags, ABS + EBD + BA, ISOFIX & Alarm'
        ]
      }
    ],
    description: 'Mitsubishi New Xpander hadir mendefinisikan ulang standar MPV keluarga di Indonesia dengan bahasa desain Dynamic Shield yang berkarakter, interior bernuansa hitam elegan, kabin senyap berkapasitas 7 penumpang, serta kenyamanan suspensi berteknologi tinggi khas Mitsubishi Motors.'
  },

  // ─── 2. NEW PAJERO SPORT ──────────────────────────────────────────────────────
  {
    slug: 'pajero-sport',
    name: 'New Pajero Sport',
    tagline: 'Live The Adventure - Raja SUV Tangguh, Wibawa & Mewah',
    category: 'SUV',
    segment: 'passenger',
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
      { name: 'Quartz White Pearl', hex: '#F2F2F2' },
      { name: 'Blade Silver Metallic', hex: '#A8A8A8' },
      { name: 'Jet Black Mica', hex: '#111111' },
      { name: 'Graphite Gray Metallic', hex: '#4F4F4F' }
    ],
    highlights: [
      'Mesin Diesel 2.4L 4N15 MIVEC Turbo VGIC 181 PS bertenaga monster & torsi 430 Nm',
      'Transmisi Otomatis 8-Kecepatan halus dengan Paddle Shift sporti',
      'Interior mewah Black & Burgundy dengan Synthetic Leather Seat bersertifikasi Heat Guard',
      'Teknologi keselamatan Diamond Sense ADAS: ACC, FCM, BSW, LCA, RCTA, UMS, & MAM 360',
      'Hands-Free Power Back Door dengan Kick Sensor & Sunroof elektrik'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '2.4L 4N15 MIVEC Turbo / 2.5L 4D56 Turbo Diesel',
      power: '181 PS @ 3.500 RPM / 430 Nm (Dakar)',
      transmission: '8-Speed AT / 5-Speed MT & AT',
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
    description: 'Pajero Sport memadukan ketangguhan sasis ladder frame sejati dengan kemewahan kabin premium dan teknologi canggih. Pilihan tepat bagi Anda yang mengutamakan wibawa, performa off-road, dan kenyamanan keluarga berkelas.'
  },

  // ─── 3. MITSUBISHI XFORCE ─────────────────────────────────────────────────────
  {
    slug: 'xforce',
    name: 'Mitsubishi XForce',
    tagline: 'Infinite Xcitement - Compact SUV Futuristik dengan Yamaha Audio & Pilihan Hybrid',
    category: 'SUV',
    segment: 'passenger',
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
      { name: 'Energetic Yellow', hex: '#D6A800' },
      { name: 'Quartz White Pearl', hex: '#F0F0F0' },
      { name: 'Blade Silver Metallic', hex: '#A2A2A2' },
      { name: 'Graphite Gray Metallic', hex: '#3B3B3B' },
      { name: 'Jet Black Mica', hex: '#161616' },
      { name: 'Red Metallic', hex: '#B81313' }
    ],
    highlights: [
      'Dynamic Sound Yamaha Premium 8-speaker kelas audiophile',
      'Dual Screen 12.3 inch Smartphone-link Display + 8 inch Digital Meter Cluster',
      'Tersedia varian Hybrid (HEV) canggih dengan Panoramic Glass Roof & Electric Shifter',
      'Hingga 7 Drive Mode (Normal, Wet, Gravel, Mud, Tarmac, EV Priority, Charge)',
      'Ground clearance 222 mm tertinggi di kelasnya dengan Active Yaw Control (AYC)'
    ],
    keySpecs: {
      seating: '5 Penumpang',
      engine: '1.5L 4A91 MIVEC / 1.6L 4A92 HEV Hybrid',
      power: '105 PS (ICE) / 107 PS + 116 PS Motor Listrik (HEV)',
      transmission: 'CVT Automatic / 2-Speed Transaxle (HEV)',
      groundClearance: '222 mm (ICE) / 212 mm (HEV)',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      { name: 'XForce Exceed CVT', transmission: 'CVT', price: 381900000, priceFormatted: 'Rp 381.900.000' },
      { name: 'XForce Ultimate CVT', transmission: 'CVT', price: 414900000, priceFormatted: 'Rp 414.900.000' },
      { name: 'XForce HEV (Hybrid Electric Vehicle)', transmission: 'AT', price: 445000000, priceFormatted: 'Rp 445.000.000' }
    ],
    description: 'Mitsubishi XForce diciptakan khusus untuk pengendara urban modern yang mendambakan kepraktisan compact SUV dengan nuansa futuristik, konser musik Yamaha, opsi ramah lingkungan Hybrid HEV, dan keamanan iklim tropis Indonesia.'
  },

  // ─── 4. NEW XPANDER CROSS ─────────────────────────────────────────────────────
  {
    slug: 'xpander-cross',
    name: 'New Xpander Cross',
    tagline: 'Rise to Your Life’s Adventure - Crossover SUV Tangguh & Mewah',
    category: 'SUV',
    segment: 'passenger',
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
      'Active Yaw Control (AYC) menjaga stabilitas mobil di tikungan tajam dan jalan basah',
      'Interior premium dual-tone Burgundy & Hitam dengan Synthetic Leather Seat Heat Guard',
      '10 Inch Audio Head Unit & 8 Inch LCD Meter Cluster adaptasi Pajero Sport',
      'Multi Around Monitor 360 derajat & 6 SRS Airbags untuk keselamatan maksimal',
      'Ground clearance 225 mm (MT) / 220 mm (CVT) dengan sasis rugged SUV'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '1.5L MIVEC DOHC 16-Valve Euro 4',
      power: '105 PS (77 kW) @ 6.000 RPM / 141 Nm',
      transmission: 'CVT / 5-Speed Manual',
      groundClearance: '220 - 225 mm',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      { name: 'Xpander Cross MT', transmission: 'MT', price: 329750000, priceFormatted: 'Rp 329.750.000' },
      { name: 'Xpander Cross CVT Premium Package', transmission: 'CVT', price: 355650000, priceFormatted: 'Rp 355.650.000' }
    ],
    description: 'Perpaduan sempurna antara kenyamanan kabin MPV 7 penumpang dengan ketangguhan dan ground clearance tinggi khas SUV sejati. Siap menemani segala petualangan keluarga Anda di kota maupun luar kota.'
  },

  // ─── 5. ALL-NEW DESTINATOR ────────────────────────────────────────────────────
  {
    slug: 'destinator',
    name: 'All-New Destinator',
    tagline: 'The Ultimate 7-Seater Turbo SUV - Prestise & Tenaga Tanpa Kompromi',
    category: 'SUV',
    segment: 'passenger',
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
      { name: 'Jet Black Mica', hex: '#111111' },
      { name: 'Quartz White Pearl', hex: '#F5F5F5' },
      { name: 'Blade Silver Metallic', hex: '#A8A8A8' },
      { name: 'Graphite Grey Metallic', hex: '#4F4F4F' },
      { name: 'Lunar Blue', hex: '#1B365D' }
    ],
    highlights: [
      'Mesin 1.5L Turbo 4B40 bertenaga buas 163 PS dengan torsi melimpah 250 Nm',
      'Ground clearance 244 mm tertinggi di kelasnya dengan 5 Drive Mode (Normal, Wet, Gravel, Tarmac, Mud)',
      'Panoramic Sunroof & Hands-Free Electric Power Tailgate dengan Kick Sensor',
      'Layar ganda: 12.3-inch Smartphone-link Display Audio + 8-inch Digital Driver Display',
      'Fitur keselamatan aktif Diamond Sense ADAS lengkap & aplikasi pintar Mitsubishi Connect'
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '1.5L 4B40 Turbocharged DOHC 16-Valve',
      power: '163 PS (120 kW) @ 5.000 RPM / 250 Nm',
      transmission: 'CVT Automatic with Drive Mode',
      groundClearance: '244 mm (Highest in class)',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      { name: 'Destinator GLS CVT', transmission: 'CVT', price: 395000000, priceFormatted: 'Rp 395.000.000' },
      { name: 'Destinator Exceed CVT', transmission: 'CVT', price: 435000000, priceFormatted: 'Rp 435.000.000' },
      { name: 'Destinator Ultimate CVT', transmission: 'CVT', price: 475000000, priceFormatted: 'Rp 475.000.000' },
      { name: 'Destinator Ultimate Premium Package', transmission: 'CVT', price: 495000000, priceFormatted: 'Rp 495.000.000' }
    ],
    description: 'Destinator adalah SUV 7-penumpang generasi baru bermesin Turbo bertenaga 163 PS. Memadukan kemewahan Panoramic Sunroof, sound system Yamaha 8-speaker, ground clearance 244 mm, dan ketangguhan sistem kendali Active Yaw Control (AYC).'
  },

  // ─── 6. ALL NEW TRITON ────────────────────────────────────────────────────────
  {
    slug: 'triton',
    name: 'All New Mitsubishi Triton',
    tagline: 'Engineered Beyond Tough - Rajanya Double & Single Cabin 4x4',
    category: 'Pick Up',
    segment: 'lcv',
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
      { name: 'White Diamond', hex: '#F5F5F5' },
      { name: 'Blade Silver Metallic', hex: '#A8A8A8' },
      { name: 'Graphite Gray Metallic', hex: '#484848' },
      { name: 'White Solid', hex: '#FAFAFA' },
      { name: 'Jet Black Mica', hex: '#141414' }
    ],
    highlights: [
      'Sasis Mega Frame generasi baru dengan torsional rigidity meningkat 60%',
      'Super Select 4WD-II dengan 7 Drive Mode (Normal, Eco, Gravel, Snow, Mud, Sand, Rock)',
      'Mesin Diesel 2.4L 4N16 Clean Diesel Turbo bertenaga hingga 184 PS & torsi 430 Nm',
      'Bak kargo terluas dan terkuat di kelasnya dengan kapasitas angkut maksimal',
      'Fitur keselamatan aktif lengkap ADAS Diamond Sense untuk varian Ultimate'
    ],
    keySpecs: {
      seating: '2 - 5 Penumpang',
      engine: '2.4L 4N16 Clean Diesel Turbo Intercooler',
      power: '150 - 184 PS / 430 Nm',
      transmission: '6-Speed MT / 6-Speed AT',
      groundClearance: '222 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Triton GLX Single Cabin 4x2 MT', transmission: 'MT', price: 310200000, priceFormatted: 'Rp 310.200.000' },
      { name: 'Triton HDX Single Cabin 4x4 MT', transmission: 'MT', price: 388500000, priceFormatted: 'Rp 388.500.000' },
      { name: 'Triton HDX Double Cabin 4x4 MT', transmission: 'MT', price: 435000000, priceFormatted: 'Rp 435.000.000' },
      { name: 'Triton GLS Double Cabin 4x4 MT', transmission: 'MT', price: 470000000, priceFormatted: 'Rp 470.000.000' },
      { name: 'Triton Exceed Double Cabin 4x4 MT', transmission: 'MT', price: 510000000, priceFormatted: 'Rp 510.000.000' },
      { name: 'Triton Ultimate Double Cabin 4x4 AT', transmission: 'AT', price: 571000000, priceFormatted: 'Rp 571.000.000' }
    ],
    description: 'All New Triton dirancang ulang dari nol dengan DNA reli tangguh Paris-Dakar. Menghadirkan ketangguhan tanpa tanding di area tambang, perkebunan, hingga gaya hidup adventure off-road perkotaan.'
  },

  // ─── 7. COLT L300 EURO 4 ──────────────────────────────────────────────────────
  {
    slug: 'l300',
    name: 'New Colt L300 Euro 4',
    tagline: 'Rajanya Pick Up - Lebih Irit, Lebih Bertenaga, Muat Lebih Banyak',
    category: 'Pick Up',
    segment: 'lcv',
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
      'Mesin Diesel 2.2L 4N14 Common Rail Turbo Euro 4: 40% lebih bertenaga & irit BBM',
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
  },

  // ─── 8. CANTER FE 71 SERIES (ENGKEL 4 BAN) ────────────────────────────────────
  {
    slug: 'canter-fe71',
    name: 'Canter FE 71 Series',
    tagline: 'Truk Ringan 4 Roda (Engkel) Teruji, Lincah & Irit untuk Bisnis Perkotaan',
    category: 'Truk',
    segment: 'commercial',
    badge: 'ENGKEL 4 BAN',
    startingPrice: 'Rp 375.000.000',
    startingPriceNum: 375000000,
    dpStart: 'Rp 25 Jt-an',
    dpMinNum: 25000000,
    cicilanStart: 'Rp 7,5 Jt/bln',
    cicilanNum: 7500000,
    image: '/images/cars/karoseri-FE-71-Box-Alumunium.webp',
    galleryImages: [
      '/images/cars/karoseri-FE-71-Box-Alumunium.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Mesin 4V21 Common Rail Turbo Intercooler Euro 4: 108 PS bertenaga & irit BBM',
      'Sasis 4 Roda / Engkel lincah bermanuver di jalan kota dan bebas aturan truk besar',
      'Kabin jungkit memudahkan perawatan berkala & pemeriksaan mesin harian',
      'Pilihan karoseri fleksibel: Box Alumunium, Box Pendingin (Cooler), Bak Kayu/Besi, dan Moko',
      'Dilengkapi telematika Runner Fuso, kamera mundur, radio USB MP3 & in-dash gear shift'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '3.9L 4V21-2AT4 Common Rail Turbo Euro 4',
      power: '108 PS @ 2.500 RPM / 300 Nm',
      transmission: '5-Speed Manual M025S5',
      groundClearance: '200 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Canter FE 71 Standard MT', transmission: 'MT', price: 375000000, priceFormatted: 'Rp 375.000.000' },
      { name: 'Canter FE 71L (Long Chassis) MT', transmission: 'MT', price: 388000000, priceFormatted: 'Rp 388.000.000' },
      { name: 'Canter FE 71 BC (Bus Chassis) MT', transmission: 'MT', price: 365000000, priceFormatted: 'Rp 365.000.000' },
      { name: 'Canter FE 71L BC (Long Bus Chassis) MT', transmission: 'MT', price: 380000000, priceFormatted: 'Rp 380.000.000' },
      { name: 'Canter FE 71L BCL NC MT', transmission: 'MT', price: 395000000, priceFormatted: 'Rp 395.000.000' }
    ],
    description: 'Mitsubishi Fuso Canter FE 71 Series adalah tulang punggung armada niaga ringan perkotaan di Indonesia. Mengusung mesin Common Rail Euro 4 108 PS bertenaga tangguh, kabin lega dengan tuas transmisi in-dash, serta kemudahan modifikasi berbagai jenis karoseri.'
  },

  // ─── 9. CANTER FE 74 SERIES (DOUBLE 6 BAN) ───────────────────────────────────
  {
    slug: 'canter-fe74',
    name: 'Canter FE 74 Series',
    tagline: 'Rajanya Truk 6 Roda (Double) - Muatan Berat, Ekspedisi Antar Kota & Proyek',
    category: 'Truk',
    segment: 'commercial',
    badge: 'DOUBLE 6 BAN',
    startingPrice: 'Rp 445.000.000',
    startingPriceNum: 445000000,
    dpStart: 'Rp 35 Jt-an',
    dpMinNum: 35000000,
    cicilanStart: 'Rp 8,9 Jt/bln',
    cicilanNum: 8900000,
    image: '/images/cars/karoseri-FE-74-Bak-besi-setengah.webp',
    galleryImages: [
      '/images/cars/karoseri-FE-74-Bak-besi-setengah.webp',
      '/images/cars/canter-fe74-optimized.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Mesin Common Rail Euro 4 bertenaga buas 136 PS dengan torsi badak 420 Nm',
      'Sasis kokoh 6 ban dengan kapasitas muatan besar (Max GVW hingga 8.250 kg)',
      'Tersedia varian Super HDX (SHDX) dengan rasio gardan tinggi khusus tanjakan terjal & area proyek tambang',
      'Aplikasi karoseri serbaguna: Bak Besi, Bak Kayu Tinggi, Dump Truck, Box Ekspedisi Long, dan Tangki',
      'Sistem pengereman gas buang (Exhaust Brake) untuk keamanan berkendara saat membawa muatan berat di turunan'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5',
      groundClearance: '210 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Canter FE 74 Standard MT', transmission: 'MT', price: 445000000, priceFormatted: 'Rp 445.000.000' },
      { name: 'Canter FE 74 HD (Heavy Duty) MT', transmission: 'MT', price: 458000000, priceFormatted: 'Rp 458.000.000' },
      { name: 'Canter FE 74 HDS (High Speed) MT', transmission: 'MT', price: 462000000, priceFormatted: 'Rp 462.000.000' },
      { name: 'Canter FE 74L (Long Chassis) MT', transmission: 'MT', price: 473000000, priceFormatted: 'Rp 473.000.000' },
      { name: 'Canter FE SHDX (Super HDX Tipper/Dump) MT', transmission: 'MT', price: 480000000, priceFormatted: 'Rp 480.000.000' }
    ],
    description: 'Mitsubishi Fuso Canter FE 74 Series adalah standar emas truk logistik, ekspedisi, dan armada proyek di Indonesia. Ditenagai mesin 136 PS yang perkasa di tanjakan, sasis baja berdaya tahan tinggi, dan ketersediaan suku cadang resmi terlengkap di seluruh pelosok Nusantara.'
  },

  // ─── 10. CANTER FE 84 SERIES (SUPER CAPACITY & BUS CHASSIS 6 BAN) ─────────────
  {
    slug: 'canter-fe84',
    name: 'Canter FE 84 Series',
    tagline: 'Sasis Truk & Bus 6 Roda Super Capacity - Daya Angkut Maksimal & Muatan Ekstra Luas',
    category: 'Truk & Bus',
    segment: 'commercial',
    badge: 'SUPER CAPACITY 6 BAN',
    startingPrice: 'Rp 490.000.000',
    startingPriceNum: 490000000,
    dpStart: 'Rp 40 Jt-an',
    dpMinNum: 40000000,
    cicilanStart: 'Rp 9,8 Jt/bln',
    cicilanNum: 9800000,
    image: '/images/cars/Canter-FE-84G-BC-1.webp',
    galleryImages: [
      '/images/cars/Canter-FE-84G-BC-1.webp',
      '/images/cars/extra-long-bus.png'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Sasis 6 roda Super Capacity dengan tapak lebih lebar (Wide Chassis) untuk stabilitas bodi maksimal',
      'Mesin Common Rail Euro 4 136 PS bertenaga besar & efisiensi bahan bakar optimal',
      'Basis utama sasis pembuatan Medium Bus Pariwisata 30+ seats dan bodi box kargo kubikasi besar',
      'Kapasitas Gross Vehicle Weight (GVW) hingga 8.500 kg siap mengangkut beban muatan ekstra',
      'Dilengkapi fitur Exhaust Brake, Power Steering, Telescopic Steering, dan Fuso Runner Telematics'
    ],
    keySpecs: {
      seating: '3 Penumpang / 31 Penumpang (Karoseri Bus)',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5',
      groundClearance: '210 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Canter FE 84G MT', transmission: 'MT', price: 485000000, priceFormatted: 'Rp 485.000.000' },
      { name: 'Canter FE 84G BC (Bus Chassis 6 Ban) MT', transmission: 'MT', price: 490000000, priceFormatted: 'Rp 490.000.000' },
      { name: 'Canter FE 84 HDL MT', transmission: 'MT', price: 505000000, priceFormatted: 'Rp 505.000.000' }
    ],
    description: 'Mitsubishi Fuso Canter FE 84 Series dirancang khusus untuk pengusaha logistik volume besar serta perusahaan otobus pariwisata. Menawarkan dimensi sasis ekstra lebar dan panjang dengan kapasitas muat paling lapang di kelasnya.'
  },

  // ─── 11. CANTER BUS & MICROBUS ───────────────────────────────────────────────
  {
    slug: 'canter-bus',
    name: 'Canter Bus & Microbus',
    tagline: 'Solusi Transportasi Penumpang 19+1 Seats - Nyaman, Tangguh & Menguntungkan',
    category: 'Bus',
    segment: 'commercial',
    badge: 'MICROBUS 20 SEATS',
    startingPrice: 'Rp 465.000.000',
    startingPriceNum: 465000000,
    dpStart: 'Rp 40 Jt-an',
    dpMinNum: 40000000,
    cicilanStart: 'Rp 9,2 Jt/bln',
    cicilanNum: 9200000,
    image: '/images/cars/canter.webp',
    galleryImages: [
      '/images/cars/canter.webp'
    ],
    colors: [
      { name: 'Solid White', hex: '#F5F5F5' }
    ],
    highlights: [
      'Kapasitas angkut 19 + 1 kursi penumpang dengan legroom lega dan akses keluar masuk mudah',
      'Reclining Seat kulit sintetis premium dengan port USB charger di setiap baris bangku',
      'High Roof Cabin dengan AC Ducting merata ke seluruh kabin penumpang',
      'Audio entertainment 6 speakers membuat perjalanan wisata atau antar jemput makin menyenangkan',
      'Bagasi belakang luas dengan kursi baris belakang lipat (folding rear seat)'
    ],
    keySpecs: {
      seating: '19 + 1 Penumpang',
      engine: '3.9L 4V21 Common Rail Turbo Euro 4',
      power: '108 PS @ 2.500 RPM / 300 Nm',
      transmission: '5-Speed Manual M025S5',
      groundClearance: '200 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      { name: 'Canter Bus Microbus 19+1 Seats MT', transmission: 'MT', price: 465000000, priceFormatted: 'Rp 465.000.000' },
      { name: 'Canter Extra Long Bus 20+ Seats MT', transmission: 'MT', price: 485000000, priceFormatted: 'Rp 485.000.000' },
      { name: 'Canter Bus Chassis Only FE 71 BC MT', transmission: 'MT', price: 365000000, priceFormatted: 'Rp 365.000.000' },
      { name: 'Canter Bus Chassis Only FE 84G BC (6 Ban) MT', transmission: 'MT', price: 490000000, priceFormatted: 'Rp 490.000.000' }
    ],
    description: 'Mitsubishi Fuso Canter Bus dirancang untuk memaksimalkan keuntungan usaha pariwisata, travel antarkota, shuttle eksekutif, dan transportasi antar-jemput karyawan. Menawarkan kabin tinggi ber-AC dingin, kursi reclining mewah, dan efisiensi mesin diesel Euro 4.'
  }
];

export function getCarBySlug(slug: string): CarModel | undefined {
  return carsData.find(c => c.slug === slug);
}
