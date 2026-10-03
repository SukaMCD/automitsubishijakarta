import rawSheetsData from './sheetsData.json';

export interface CarVariantPackage {
  name: string;
  label: string;
  price: number;
  priceFormatted: string;
  dpEstimate?: string;
  cicilanEstimate?: string;
  highlights?: string[];
  featuresTooltip?: string;
}

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
  engine?: string;
  power?: string;
  image?: string;
  highlights?: string[];
  packages?: CarVariantPackage[];
}

export interface CarColor {
  name: string;
  hex: string;
  extraPriceFormatted?: string;
  extraPriceNum?: number;
  availableVariants?: string[];
  image?: string;
  imageTiers?: string[];
  tierImages?: Record<string, string>;
}

export interface HeroFeature {
  label: string;
  icon: string;
}

export interface CarModel {
  slug: string;
  name: string;
  tagline: string;
  logo?: string;
  logoWhite?: string;
  category: 'MPV' | 'SUV' | 'Commercial' | 'Truk' | 'Bus' | 'Bus Chassis' | 'Pick Up' | 'Truk & Bus';
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
  heroFeatures?: HeroFeature[];
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
  // New Xpander
  {
    slug: 'xpander',
    name: 'Xpander',
    tagline: 'Take control, stay ahead',
    logo: '/images/logo/cars-logo/xpander-black-optimized.webp',
    logoWhite: '/images/logo/cars-logo/xpander-white-optimized.webp',
    category: 'MPV',
    segment: 'passenger',
    startingPrice: 'Rp 270.100.000',
    startingPriceNum: 270100000,
    dpStart: 'Rp 27 Jt-an',
    dpMinNum: 27000000,
    cicilanStart: 'Rp 4,1 Jt/bln',
    cicilanNum: 4100000,
    image: '/images/cars/xpander/xpander-optimized.webp',
    heroImage: '/images/cars/xpander/xpander-hero.webp',
    galleryImages: [
      '/images/cars/xpander/xpander-hero.webp',
      '/images/cars/xpander/xpander-interior.webp',
      '/images/cars/xpander/xpander-ultimate-white.webp',
      '/images/cars/xpander/xpander-ultimate-black.webp',
      '/images/cars/xpander/xpander-ultimate-red.webp',
      '/images/cars/xpander/xpander-ultimate-gray.webp',
      '/images/cars/xpander/xpander-ultimate-silver.webp',
      '/images/cars/xpander/xpander-exceed-white.webp',
      '/images/cars/xpander/xpander-exceed-black.webp',
      '/images/cars/xpander/xpander-exceed-silver.webp',
      '/images/cars/xpander/xpander-gls-white.webp',
      '/images/cars/xpander/xpander-gls-black.webp',
      '/images/cars/xpander/xpander-gls-silver.webp'
    ],
    colors: [
      {
        name: 'Quartz White Pearl',
        hex: '#F8F9FA',
        extraPriceFormatted: '+Rp 1.500.000',
        extraPriceNum: 1500000,
        availableVariants: ['Ultimate', 'Exceed', 'GLS'],
        image: '/images/cars/xpander/xpander-ultimate-white.webp',
        tierImages: {
          'Ultimate': '/images/cars/xpander/xpander-ultimate-white.webp',
          'Exceed': '/images/cars/xpander/xpander-exceed-white.webp',
          'GLS': '/images/cars/xpander/xpander-gls-white.webp'
        }
      },
      {
        name: 'Jet Black Mica',
        hex: '#1A1A1A',
        availableVariants: ['Ultimate', 'Exceed', 'GLS'],
        image: '/images/cars/xpander/xpander-ultimate-black.webp',
        tierImages: {
          'Ultimate': '/images/cars/xpander/xpander-ultimate-black.webp',
          'Exceed': '/images/cars/xpander/xpander-exceed-black.webp',
          'GLS': '/images/cars/xpander/xpander-gls-black.webp'
        }
      },
      {
        name: 'Blade Silver Metallic',
        hex: '#C0C0C0',
        availableVariants: ['Ultimate', 'Exceed', 'GLS'],
        image: '/images/cars/xpander/xpander-ultimate-silver.webp',
        tierImages: {
          'Ultimate': '/images/cars/xpander/xpander-ultimate-silver.webp',
          'Exceed': '/images/cars/xpander/xpander-exceed-silver.webp',
          'GLS': '/images/cars/xpander/xpander-gls-silver.webp'
        }
      },
      {
        name: 'Red Metallic',
        hex: '#BA181B',
        availableVariants: ['Ultimate'],
        image: '/images/cars/xpander/xpander-ultimate-red.webp',
        tierImages: {
          'Ultimate': '/images/cars/xpander/xpander-ultimate-red.webp'
        }
      },
      {
        name: 'Graphite Gray Metallic',
        hex: '#4A4E51',
        availableVariants: ['Ultimate'],
        image: '/images/cars/xpander/xpander-ultimate-gray.webp',
        tierImages: {
          'Ultimate': '/images/cars/xpander/xpander-ultimate-gray.webp'
        }
      }
    ],
    highlights: [
      'Head Unit 10 inch touchscreen modern dengan Apple CarPlay & Android Auto nirkabel',
      'Meter cluster 8 inch Digital Driver Display canggih adaptasi SUV premium',
      'Fitur keselamatan maksimal: 6 SRS Airbags & Active Yaw Control (AYC)',
      'Multi Around Monitor (Kamera 360) & Parking Sensor untuk kemudahan parkir',
      'Electric Parking Brake (EPB) dengan Brake Auto Hold (BAH) & Wireless Charger',
      'Kabin 7-seater paling senyap & luas dengan fleksibilitas pelipatan kursi optimal'
    ],
    heroFeatures: [
      { label: 'Tampilan Elegan', icon: 'car-front' },
      { label: 'Interior Favorit Keluarga', icon: 'car-seat' },
      { label: 'Inovasi Teknologi Berkualitas', icon: 'bulb-spark' },
      { label: 'Sistem Keamanan Mumpuni', icon: 'car-radar' }
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

  // New Pajero Sport
  {
    slug: 'pajero-sport',
    name: 'Pajero Sport',
    tagline: 'Jelajahi Petualangan Tanpa Batas',
    logo: '/images/logo/cars-logo/pajero-black-optimized.webp',
    logoWhite: '/images/logo/cars-logo/pajero-white-optimized.webp',
    heroImage: '/images/cars/pajero-sport/pajero-sport-hero.webp',
    category: 'SUV',
    segment: 'passenger',
    startingPrice: 'Rp 577.700.000',
    startingPriceNum: 577700000,
    dpStart: 'Rp 85 Jt-an',
    dpMinNum: 85000000,
    cicilanStart: 'Rp 9,8 Jt/bln',
    cicilanNum: 9800000,
    image: '/images/cars/pajero-sport/new-pajero-sport-optimized.webp',
    galleryImages: [
      '/images/cars/pajero-sport/pajero-sport-hero.webp',
      '/images/cars/pajero-sport/pajero-dakar-white.webp',
      '/images/cars/pajero-sport/pajero-dakar-black.webp',
      '/images/cars/pajero-sport/pajero-dakar-gray.webp',
      '/images/cars/pajero-sport/pajero-dakar-silver.webp',
      '/images/cars/pajero-sport/pajero-exceed-white.webp',
      '/images/cars/pajero-sport/pajero-exceed-black.webp',
      '/images/cars/pajero-sport/pajero-exceed-gray.webp',
      '/images/cars/pajero-sport/pajero-exceed-silver.webp',
      '/images/cars/pajero-sport/pajero-glx-black.webp',
      '/images/cars/pajero-sport/pajero-glx-gray.webp',
      '/images/cars/pajero-sport/pajero-glx-silver.webp'
    ],
    colors: [
      {
        name: 'Quartz White Pearl',
        hex: '#F8F9FA',
        extraPriceFormatted: '+Rp 3.000.000',
        extraPriceNum: 3000000,
        availableVariants: ['Dakar', 'Exceed'],
        image: '/images/cars/pajero-sport/pajero-dakar-white.webp',
        tierImages: {
          'Dakar': '/images/cars/pajero-sport/pajero-dakar-white.webp',
          'Exceed': '/images/cars/pajero-sport/pajero-exceed-white.webp'
        }
      },
      {
        name: 'Jet Black Mica',
        hex: '#1A1A1A',
        availableVariants: ['Dakar', 'Exceed', 'GLX'],
        image: '/images/cars/pajero-sport/pajero-dakar-black.webp',
        tierImages: {
          'Dakar': '/images/cars/pajero-sport/pajero-dakar-black.webp',
          'Exceed': '/images/cars/pajero-sport/pajero-exceed-black.webp',
          'GLX': '/images/cars/pajero-sport/pajero-glx-black.webp'
        }
      },
      {
        name: 'Blade Silver Metallic',
        hex: '#C5C6C8',
        availableVariants: ['Dakar', 'Exceed', 'GLX'],
        image: '/images/cars/pajero-sport/pajero-dakar-silver.webp',
        tierImages: {
          'Dakar': '/images/cars/pajero-sport/pajero-dakar-silver.webp',
          'Exceed': '/images/cars/pajero-sport/pajero-exceed-silver.webp',
          'GLX': '/images/cars/pajero-sport/pajero-glx-silver.webp'
        }
      },
      {
        name: 'Graphite Gray Metallic',
        hex: '#4A4E51',
        availableVariants: ['Dakar', 'Exceed', 'GLX'],
        image: '/images/cars/pajero-sport/pajero-dakar-gray.webp',
        tierImages: {
          'Dakar': '/images/cars/pajero-sport/pajero-dakar-gray.webp',
          'Exceed': '/images/cars/pajero-sport/pajero-exceed-gray.webp',
          'GLX': '/images/cars/pajero-sport/pajero-glx-gray.webp'
        }
      }
    ],
    highlights: [
      'Mesin Diesel 2.4L 4N15 MIVEC Turbo VGIC 181 PS bertenaga monster & torsi 430 Nm',
      'Transmisi Otomatis 8-Kecepatan halus dengan Paddle Shift sporti',
      'Interior mewah Black & Burgundy dengan Synthetic Leather Seat bersertifikasi Heat Guard',
      'Teknologi keselamatan Diamond Sense ADAS: ACC, FCM, BSW, LCA, RCTA, UMS, & MAM 360',
      'Hands-Free Power Back Door dengan Kick Sensor & Sunroof elektrik'
    ],
    heroFeatures: [
      { label: 'Teknologi Keamanan Terkini', icon: 'car-radar' },
      { label: 'Mesin Tangguh & Bertenaga', icon: 'engine' },
      { label: 'Performa Mengemudi Gagah', icon: 'steering' },
      { label: 'Fitur Mewah Kendaraan', icon: 'stars' }
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '2.4L 4N15 MIVEC Turbo / 2.5L 4D56 Turbo Diesel',
      power: '181 PS (Dakar) / 136 PS (Exceed & GLX)',
      transmission: '8-Speed AT / 5-Speed MT & AT',
      groundClearance: '218 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Pajero Sport Dakar Ultimate (4x4) A/T',
        transmission: 'AT',
        price: 779650000,
        priceFormatted: 'Rp 779.650.000',
        dpEstimate: 'Rp 135 Jt-an',
        cicilanEstimate: 'Rp 14,5 Jt-an',
        tier: 'Dakar',
        transmissionDetail: '8-Speed Otomatis + Super Select 4WD-II',
        groundClearance: '218 mm',
        engine: '2.4L 4N15 MIVEC Turbo Diesel (2.442 cc)',
        power: '181 PS @ 3.500 rpm (430 Nm)',
        highlights: [
          'Sistem penggerak Super Select 4WD-II tercanggih dengan 4 pilihan mode traksi & Off-Road Mode',
          'Rear Differential Lock elektrik & Hill Descent Control (HDC) untuk performa off-road maksimal',
          'Power Sunroof elektrik & Hands-Free Power Back Door dengan Kick Sensor pintar',
          'Paket Diamond Sense ADAS lengkap: ACC, FCM, BSW, LCA, RCTA, UMS, & MAM Kamera 360',
          'Interior mewah Synthetic Leather Black & Burgundy dengan teknologi Heat Guard & Dual Zone AC Nanoe™ X',
          'Perlindungan maksimal 7 SRS Airbags (Front, Side, Curtain, & Knee) serta mesin 2.4L MIVEC Turbo 181 PS'
        ]
      },
      {
        name: 'Pajero Sport Dakar Ultimate (4x2) A/T',
        transmission: 'AT',
        price: 718450000,
        priceFormatted: 'Rp 718.450.000',
        dpEstimate: 'Rp 115 Jt-an',
        cicilanEstimate: 'Rp 12,9 Jt-an',
        tier: 'Dakar',
        transmissionDetail: '8-Speed Otomatis with Paddle Shift',
        groundClearance: '218 mm',
        engine: '2.4L 4N15 MIVEC Turbo Diesel (2.442 cc)',
        power: '181 PS @ 3.500 rpm (430 Nm)',
        highlights: [
          'Entertainment System with Roof Monitor eksklusif untuk hiburan keluarga di baris belakang',
          'Power Back Door Hands-Free dengan Kick Sensor pintar untuk kemudahan membuka bagasi',
          'Paket keselamatan aktif Diamond Sense ADAS: ACC, FCM, BSW, LCA, RCTA, & UMS',
          'Multi Around Monitor (Kamera 360) dengan pandangan menyeluruh tanpa blind spot',
          'Interior mewah Synthetic Leather Black & Burgundy Heat Guard, 7 SRS Airbags, & Dual Zone AC Nanoe™ X',
          'Mesin 2.4L MIVEC Turbo 181 PS bertenaga monster dipadu transmisi 8-Speed AT & Paddle Shift'
        ]
      },
      {
        name: 'Pajero Sport Dakar (4x2) A/T',
        transmission: 'AT',
        price: 665300000,
        priceFormatted: 'Rp 665.300.000',
        dpEstimate: 'Rp 105 Jt-an',
        cicilanEstimate: 'Rp 11,8 Jt-an',
        tier: 'Dakar',
        transmissionDetail: '8-Speed Otomatis with Paddle Shift',
        groundClearance: '218 mm',
        engine: '2.4L 4N15 MIVEC Turbo Diesel (2.442 cc)',
        power: '181 PS @ 3.500 rpm (430 Nm)',
        highlights: [
          'Power Sunroof elektrik mewah memberikan pengalaman berkendara lebih prestisius',
          'Mesin 2.4L 4N15 MIVEC Turbo VGIC bertenaga 181 PS & torsi 430 Nm dengan transmisi 8-Speed AT Paddle Shift',
          '8 Inch Digital Driver Display modern dengan 3 opsi tampilan informasi berkendara',
          'Multi Around Monitor (Kamera 360) serta fitur keselamatan aktif BSW, LCA, dan RCTA',
          'Electric Parking Brake (EPB) dengan Brake Auto Hold & Dual Zone Auto AC with Nanoe™ X',
          '7 SRS Airbags, jok Synthetic Leather Black & Burgundy Heat Guard, serta Headlamp LED with Cornering Lamp'
        ]
      },
      {
        name: 'Pajero Sport GLX (4x4) M/T',
        transmission: 'MT',
        price: 607150000,
        priceFormatted: 'Rp 607.150.000',
        dpEstimate: 'Rp 95 Jt-an',
        cicilanEstimate: 'Rp 10,5 Jt-an',
        tier: 'GLX',
        transmissionDetail: '5-Speed Manual + Easy Select 4WD',
        groundClearance: '218 mm',
        engine: '2.5L 4D56 Commonrail Turbo Diesel (2.477 cc)',
        power: '136 PS @ 4.000 rpm (324 Nm)',
        highlights: [
          'Sistem penggerak 4 Roda (4WD) Easy Select dengan Transfer Case tangguh untuk medan berat & perkebunan',
          'Mesin legendaris 2.5L 4D56 Commonrail Turbo Diesel 136 PS dengan torsi kuat di putaran bawah',
          'Underbody protection pelat baja tebal melindungi mesin dari benturan batu dan lumpur ekstrem',
          'Transmisi Manual 5-percepatan responsif dengan ground clearance tinggi 218 mm & velg 16 inch kokoh',
          'Interior fungsional High Grade Fabric Seat yang nyaman dan praktis dirawat',
          'Sistem keselamatan standar MMKSI: Dual SRS Airbags, ABS + EBD, Active Stability Control, & HSA'
        ]
      },
      {
        name: 'Pajero Sport Exceed (4x2) A/T',
        transmission: 'AT',
        price: 593000000,
        priceFormatted: 'Rp 593.000.000',
        dpEstimate: 'Rp 89 Jt-an',
        cicilanEstimate: 'Rp 10,1 Jt-an',
        tier: 'Exceed',
        transmissionDetail: '5-Speed Otomatis (A/T)',
        groundClearance: '218 mm',
        engine: '2.5L 4D56 Commonrail Turbo Diesel (2.477 cc)',
        power: '136 PS @ 4.000 rpm (324 Nm)',
        highlights: [
          'Mesin 2.5L 4D56 Commonrail Turbo Diesel 136 PS dipadu transmisi otomatis 5-kecepatan nyaman',
          'Interior elegan dengan Leather Seat warna hitam eksklusif & AC Climate Control',
          'Velg 18 inch Single-tone Alloy Wheel berdesain gagah dengan ban 265/60 R18',
          'Head Unit 7 inch Touch Screen Display dengan konektivitas Smartphone & Bluetooth',
          'Rear View Camera & Sensor Parkir belakang untuk kemudahan manuver di perkotaan',
          'Dual SRS Airbags, ABS + EBD, Active Stability & Traction Control, serta Hill Start Assist'
        ]
      },
      {
        name: 'Pajero Sport Exceed (4x2) M/T',
        transmission: 'MT',
        price: 577700000,
        priceFormatted: 'Rp 577.700.000',
        dpEstimate: 'Rp 85 Jt-an',
        cicilanEstimate: 'Rp 9,8 Jt-an',
        tier: 'Exceed',
        transmissionDetail: '5-Speed Manual (M/T)',
        groundClearance: '218 mm',
        engine: '2.5L 4D56 Commonrail Turbo Diesel (2.477 cc)',
        power: '136 PS @ 4.000 rpm (324 Nm)',
        highlights: [
          'Mesin 2.5L 4D56 Commonrail Turbo Diesel 136 PS tangguh & irit dipadu transmisi manual 5-percepatan',
          'Interior bernuansa premium dengan Leather Seat hitam & kabin senyap 7-penumpang',
          'Velg 18 inch Single-tone Alloy Wheel dengan ground clearance 218 mm tangguh di segala jalan',
          'Head Unit 7 inch Touch Screen Display dengan konektivitas Smartphone & Bluetooth',
          'Rear View Camera & Sensor Parkir untuk keamanan parkir optimal',
          'Dual SRS Airbags, ABS + EBD, Active Stability & Traction Control, serta Hill Start Assist'
        ]
      }
    ],
    description: 'Pajero Sport memadukan ketangguhan sasis ladder frame sejati dengan kemewahan kabin premium dan teknologi canggih. Pilihan tepat bagi Anda yang mengutamakan wibawa, performa off-road, dan kenyamanan keluarga berkelas.'
  },

  // Mitsubishi XForce
  {
    slug: 'xforce',
    name: 'New Xforce',
    tagline: 'Elevated Urban SUV',
    logo: '/images/logo/cars-logo/xforce-black-optimized.webp',
    logoWhite: '/images/logo/cars-logo/xforce-white-optimized.webp',
    heroImage: '/images/cars/xforce/xforce-hero.webp',
    category: 'SUV',
    segment: 'passenger',
    badge: 'BARU',
    startingPrice: 'Rp 381.900.000',
    startingPriceNum: 381900000,
    dpStart: 'Rp 40 Jt-an',
    dpMinNum: 40000000,
    cicilanStart: 'Rp 5,8 Jt/bln',
    cicilanNum: 5800000,
    image: '/images/cars/xforce/new-xforce-optimized.webp',
    galleryImages: [
      '/images/cars/xforce/xforce-hero.webp',
      '/images/cars/xforce/new-xforce-optimized.webp',
      '/images/cars/xforce/xforce-ultimate-white.webp',
      '/images/cars/xforce/xforce-ultimate-silver.webp',
      '/images/cars/xforce/xforce-ultimate-gray.webp',
      '/images/cars/xforce/xforce-ultimate-black.webp',
      '/images/cars/xforce/xforce-exceed-white.webp',
      '/images/cars/xforce/xforce-exceed-silver.webp',
      '/images/cars/xforce/xforce-exceed-gray.webp',
      '/images/cars/xforce/xforce-exceed-black.webp',
      '/images/cars/xforce/xforce-hev-white.webp',
      '/images/cars/xforce/xforce-hev-silver.webp',
      '/images/cars/xforce/xforce-hev-gray.webp',
      '/images/cars/xforce/xforce-hev-black.webp'
    ],
    colors: [
      {
        name: 'Quartz White Pearl',
        hex: '#F8F9FA',
        extraPriceFormatted: '+Rp 1.500.000',
        extraPriceNum: 1500000,
        availableVariants: ['Exceed', 'Ultimate', 'HEV'],
        image: '/images/cars/xforce/xforce-hev-white.webp',
        tierImages: {
          'HEV': '/images/cars/xforce/xforce-hev-white.webp',
          'Ultimate': '/images/cars/xforce/xforce-ultimate-white.webp',
          'Exceed': '/images/cars/xforce/xforce-exceed-white.webp'
        }
      },
      {
        name: 'Blade Silver Metallic',
        hex: '#C5C6C8',
        availableVariants: ['Exceed', 'Ultimate', 'HEV'],
        image: '/images/cars/xforce/xforce-hev-silver.webp',
        tierImages: {
          'HEV': '/images/cars/xforce/xforce-hev-silver.webp',
          'Ultimate': '/images/cars/xforce/xforce-ultimate-silver.webp',
          'Exceed': '/images/cars/xforce/xforce-exceed-silver.webp'
        }
      },
      {
        name: 'Graphite Gray Metallic',
        hex: '#4A4E51',
        availableVariants: ['Exceed', 'Ultimate', 'HEV'],
        image: '/images/cars/xforce/xforce-hev-gray.webp',
        tierImages: {
          'HEV': '/images/cars/xforce/xforce-hev-gray.webp',
          'Ultimate': '/images/cars/xforce/xforce-ultimate-gray.webp',
          'Exceed': '/images/cars/xforce/xforce-exceed-gray.webp'
        }
      },
      {
        name: 'Jet Black Mica',
        hex: '#1A1A1A',
        availableVariants: ['Exceed', 'Ultimate', 'HEV'],
        image: '/images/cars/xforce/xforce-hev-black.webp',
        tierImages: {
          'HEV': '/images/cars/xforce/xforce-hev-black.webp',
          'Ultimate': '/images/cars/xforce/xforce-ultimate-black.webp',
          'Exceed': '/images/cars/xforce/xforce-exceed-black.webp'
        }
      }
    ],
    highlights: [
      'Dynamic Sound Yamaha Premium 8-speaker kelas audiophile',
      'Dual Screen 12.3 inch Smartphone-link Display + 8 inch Digital Meter Cluster',
      'Tersedia varian Hybrid (HEV) canggih dengan Frameless Panoramic Roof & Electric Shifter',
      'Hingga 7 Drive Mode (Normal, Wet, Gravel, Mud, Tarmac, EV Priority, Charge)',
      'Ground clearance 222 mm tertinggi di kelasnya dengan Active Yaw Control (AYC)'
    ],
    heroFeatures: [
      { label: 'Hybrid Electric Vehicle', icon: 'hybrid' },
      { label: 'Frameless Panoramic Roof', icon: 'roof' },
      { label: '7 Drive Modes', icon: 'drive' },
      { label: 'Suspensi yang Disempurnakan', icon: 'suspension' }
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
      {
        name: 'XForce HEV',
        transmission: 'AT',
        price: 445000000,
        priceFormatted: 'Rp 445.000.000',
        dpEstimate: 'Rp 50 Jt-an',
        cicilanEstimate: 'Rp 7,0 Jt-an',
        tier: 'HEV',
        transmissionDetail: '2-Speed Dedicated Hybrid Transaxle',
        groundClearance: '212 mm',
        engine: '4A92 1.6L MIVEC DOHC (1.590 cc)',
        power: '107 PS (Mesin) + 116 PS (Motor Listrik)',
        highlights: [
          'Sistem Full Hybrid cerdas: Mesin 1.6L MIVEC dipadu Motor Listrik 116 PS yang instan & irit BBM',
          '7 Drive Mode lengkap termasuk mode murni listrik (EV Priority Mode & Charge Mode)',
          'Frameless Panoramic Glass Roof luas memberikan pemandangan langit dan kesan kabin lapang',
          'Electric Shifter modern & Digital Instrument Cluster khusus antarmuka energi Hybrid',
          'Baterai Lithium-ion berdaya tahan tinggi dengan garansi hingga 10 tahun',
          'Paket keselamatan aktif Diamond Sense ADAS komprehensif dengan Adaptive Cruise Control stop & go'
        ]
      },
      {
        name: 'XForce Ultimate',
        transmission: 'CVT',
        price: 414900000,
        priceFormatted: 'Rp 414.900.000',
        dpEstimate: 'Rp 45 Jt-an',
        cicilanEstimate: 'Rp 6,4 Jt-an',
        tier: 'Ultimate',
        transmissionDetail: 'CVT Otomatis with 4 Drive Mode',
        groundClearance: '222 mm',
        engine: '4A91 1.5L MIVEC DOHC (1.499 cc)',
        power: '105 PS @ 6.000 rpm (141 Nm)',
        highlights: [
          'Dynamic Sound Yamaha Premium 8-speaker dengan 4 sound preset (Signature, Lively, Powerful, Relaxing)',
          'Layar ganda monolitik: 12.3 inch Audio Touchscreen + 8 inch Digital Driver Display',
          'Hands-Free Power Liftgate dengan Kick Sensor pintar untuk kemudahan membuka bagasi',
          '4 Drive Mode cerdas: Normal, Wet Mode khusus jalanan basah Indonesia, Gravel, dan Mud',
          'Fitur kenyamanan tropis: Dual Zone Auto AC dengan teknologi nanoe™ X pemurni udara',
          'Wireless Smartphone Charger & Diamond Sense ADAS: BSW, RCTA, Auto Rain Sensor'
        ]
      },
      {
        name: 'XForce Exceed',
        transmission: 'CVT',
        price: 381900000,
        priceFormatted: 'Rp 381.900.000',
        dpEstimate: 'Rp 40 Jt-an',
        cicilanEstimate: 'Rp 5,8 Jt-an',
        tier: 'Exceed',
        transmissionDetail: 'CVT Otomatis',
        groundClearance: '222 mm',
        engine: '4A91 1.5L MIVEC DOHC (1.499 cc)',
        power: '105 PS @ 6.000 rpm (141 Nm)',
        highlights: [
          'Ground clearance 222 mm tertinggi di kelasnya dengan radius putar lincah 5.2 meter',
          'Active Yaw Control (AYC) menjamin mobil tetap stabil dan presisi saat bermanuver di tikungan',
          'Head Unit 8 inch Audio Display dengan Apple CarPlay & Android Auto responsif',
          'Dual Zone Auto AC dengan konsol tengah berpendingin (Console Box with Beverage Cooler)',
          'Lampu T-Shape LED Headlight & Tailgate yang ikonik dan visibilitas malam hari tajam',
          '6 SRS Airbags lengkap, ABS + EBD + BA, ASC, HSA, & Rear Camera'
        ]
      }
    ],
    description: 'Mitsubishi XForce diciptakan khusus untuk pengendara urban modern yang mendambakan kepraktisan compact SUV dengan nuansa futuristik, konser musik Yamaha, opsi ramah lingkungan Hybrid HEV, dan keamanan iklim tropis Indonesia.'
  },

  // New Xpander Cross
  {
    slug: 'xpander-cross',
    name: 'Xpander Cross',
    tagline: 'Step Up Your Adventure Level',
    logo: '/images/logo/cars-logo/xpander-cross-black-optimized.webp',
    logoWhite: '/images/logo/cars-logo/xpander-cross-white-optimized.webp',
    heroImage: '/images/cars/xpander-cross/xpander-cross-hero.webp',
    category: 'SUV',
    segment: 'passenger',
    startingPrice: 'Rp 348.000.000',
    startingPriceNum: 348000000,
    dpStart: 'Rp 35 Jt-an',
    dpMinNum: 35000000,
    cicilanStart: 'Rp 5,2 Jt/bln',
    cicilanNum: 5200000,
    image: '/images/cars/xpander-cross/xpander-cross-optimized.webp',
    galleryImages: [
      '/images/cars/xpander-cross/xpander-cross-hero.webp',
      '/images/cars/xpander-cross/xpander-cross-green-bronze.webp',
      '/images/cars/xpander-cross/xpander-cross-white.webp',
      '/images/cars/xpander-cross/xpander-cross-black.webp',
      '/images/cars/xpander-cross/xpander-cross-silver.webp',
      '/images/cars/xpander-cross/xpander-cross-gray.webp',
      '/images/cars/xpander-cross/xpander-cross-white-twotone.webp',
      '/images/cars/xpander-cross/xpander-cross-green-bronze-twotone.webp'
    ],
    colors: [
      {
        name: 'Green Bronze Metallic',
        hex: '#5C5B4F',
        availableVariants: ['CVT Premium', 'MT'],
        image: '/images/cars/xpander-cross/xpander-cross-green-bronze.webp',
        tierImages: {
          'CVT Premium': '/images/cars/xpander-cross/xpander-cross-green-bronze.webp',
          'MT': '/images/cars/xpander-cross/xpander-cross-green-bronze.webp'
        }
      },
      {
        name: 'Quartz White Pearl',
        hex: '#F8F9FA',
        extraPriceFormatted: '+Rp 1.500.000',
        extraPriceNum: 1500000,
        availableVariants: ['CVT Premium', 'MT'],
        image: '/images/cars/xpander-cross/xpander-cross-white.webp',
        tierImages: {
          'CVT Premium': '/images/cars/xpander-cross/xpander-cross-white.webp',
          'MT': '/images/cars/xpander-cross/xpander-cross-white.webp'
        }
      },
      {
        name: 'Jet Black Mica',
        hex: '#1A1A1A',
        availableVariants: ['CVT Premium', 'MT'],
        image: '/images/cars/xpander-cross/xpander-cross-black.webp',
        tierImages: {
          'CVT Premium': '/images/cars/xpander-cross/xpander-cross-black.webp',
          'MT': '/images/cars/xpander-cross/xpander-cross-black.webp'
        }
      },
      {
        name: 'Blade Silver Metallic',
        hex: '#C5C6C8',
        availableVariants: ['CVT Premium', 'MT'],
        image: '/images/cars/xpander-cross/xpander-cross-silver.webp',
        tierImages: {
          'CVT Premium': '/images/cars/xpander-cross/xpander-cross-silver.webp',
          'MT': '/images/cars/xpander-cross/xpander-cross-silver.webp'
        }
      },
      {
        name: 'Graphite Gray Metallic',
        hex: '#4A4E51',
        availableVariants: ['CVT Premium', 'MT'],
        image: '/images/cars/xpander-cross/xpander-cross-gray.webp',
        tierImages: {
          'CVT Premium': '/images/cars/xpander-cross/xpander-cross-gray.webp',
          'MT': '/images/cars/xpander-cross/xpander-cross-gray.webp'
        }
      },
      {
        name: 'Quartz White Pearl Two Tone',
        hex: 'linear-gradient(135deg, #F8F9FA 50%, #1A1A1A 50%)',
        extraPriceFormatted: '+Rp 5.000.000',
        extraPriceNum: 5000000,
        availableVariants: ['CVT Premium'],
        image: '/images/cars/xpander-cross/xpander-cross-white-twotone.webp',
        tierImages: {
          'CVT Premium': '/images/cars/xpander-cross/xpander-cross-white-twotone.webp'
        }
      },
      {
        name: 'Green Bronze Metallic Two Tone',
        hex: 'linear-gradient(135deg, #5C5B4F 50%, #1A1A1A 50%)',
        extraPriceFormatted: '+Rp 3.500.000',
        extraPriceNum: 3500000,
        availableVariants: ['CVT Premium'],
        image: '/images/cars/xpander-cross/xpander-cross-green-bronze-twotone.webp',
        tierImages: {
          'CVT Premium': '/images/cars/xpander-cross/xpander-cross-green-bronze-twotone.webp'
        }
      }
    ],
    highlights: [
      'Active Yaw Control (AYC) menjaga stabilitas mobil di tikungan tajam dan jalan basah',
      'Interior premium dual-tone Burgundy & Hitam dengan Synthetic Leather Seat Heat Guard',
      '10 Inch Audio Head Unit & 8 Inch LCD Meter Cluster adaptasi Pajero Sport',
      'Multi Around Monitor 360 derajat & 6 SRS Airbags untuk keselamatan maksimal',
      'Ground clearance 225 mm (MT) / 220 mm (CVT) dengan sasis rugged SUV'
    ],
    heroFeatures: [
      { label: 'Tampilan Gagah', icon: 'chassis' },
      { label: 'Kabin Super Luas', icon: 'interior' },
      { label: 'Mesin Irit & Responsif', icon: 'drive' },
      { label: 'Tangguh di Berbagai Medan', icon: 'suspension' }
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
      {
        name: 'Xpander Cross Premium CVT',
        transmission: 'CVT',
        price: 374000000,
        priceFormatted: 'Rp 374.000.000',
        dpEstimate: 'Rp 37 Jt-an',
        cicilanEstimate: 'Rp 5,6 Jt-an',
        tier: 'CVT Premium',
        transmissionDetail: 'CVT Otomatis',
        groundClearance: '220 mm',
        highlights: [
          'Active Yaw Control (AYC) meningkatkan kendali presisi dan kestabilan di tikungan tajam dan jalan basah',
          'Interior premium dual-tone Burgundy & Black dengan Synthetic Leather Heat Guard',
          'Layar ganda modern: 10 Inch Audio Touchscreen nirkabel & 8 Inch Digital Driver Display LCD Meter',
          'Multi Around Monitor (Kamera 360) & 6 SRS Airbags lengkap untuk proteksi keselamatan maksimal',
          'Cruise Control, Wireless Smartphone Charger & Electric Parking Brake (EPB) dengan Brake Auto Hold',
          'Ground clearance 220 mm dengan Special Tuned Suspension & Rebound Spring khas SUV tangguh'
        ]
      },
      {
        name: 'Xpander Cross MT',
        transmission: 'MT',
        price: 348000000,
        priceFormatted: 'Rp 348.000.000',
        dpEstimate: 'Rp 35 Jt-an',
        cicilanEstimate: 'Rp 5,2 Jt-an',
        tier: 'MT',
        transmissionDetail: '5-Speed Manual (M/T)',
        groundClearance: '225 mm',
        highlights: [
          'Ground clearance tertinggi 225 mm melibas jalan berlubang, bebatuan, dan genangan air dengan mantap',
          'Active Yaw Control (AYC) & Active Stability Control (ASC) untuk kestabilan optimal di setiap cuaca',
          'Layar Head Unit 10 inch touchscreen modern dengan Apple CarPlay & Android Auto nirkabel',
          'Meter cluster canggih 8 inch Digital Driver Display dengan setir 3-spoke berbalut kulit',
          'Multi Around Monitor 360 derajat & 6 SRS Airbags untuk rasa aman maksimal seluruh keluarga',
          'Kabin 7-seater paling senyap & lega dengan fleksibilitas pelipatan kursi serta banyak kompartemen'
        ]
      }
    ],
    description: 'Perpaduan sempurna antara kenyamanan kabin MPV 7 penumpang dengan ketangguhan dan ground clearance tinggi khas SUV sejati. Siap menemani segala petualangan keluarga Anda di kota maupun luar kota.'
  },

  // All-New Destinator
  {
    slug: 'destinator',
    name: 'Destinator',
    tagline: 'Premium Family SUV',
    logo: '/images/logo/cars-logo/destinator-black-optimized.webp',
    logoWhite: '/images/logo/cars-logo/destinator-white-optimized.webp',
    heroImage: '/images/cars/destinator/destinator-hero.webp',
    category: 'SUV',
    segment: 'passenger',
    startingPrice: 'Rp 402.000.000',
    startingPriceNum: 402000000,
    dpStart: 'Rp 40 Jt-an',
    dpMinNum: 40000000,
    cicilanStart: 'Rp 5,9 Jt/bln',
    cicilanNum: 5900000,
    image: '/images/cars/destinator/destinator-optimized.webp',
    galleryImages: [
      '/images/cars/destinator/destinator-hero.webp',
      '/images/cars/destinator/destinator-interior.webp',
      '/images/cars/destinator/dst-ultimate-blade-silver-metallic-optimized.webp',
      '/images/cars/destinator/dst-ultimate-white-pearl-optimized.webp',
      '/images/cars/destinator/dst-ultimate-graphite-gray-metallic-optimized.webp',
      '/images/cars/destinator/dst-ultimate-lunar-blue-mica-optimized.webp',
      '/images/cars/destinator/dst-ultimate-jet-black-mica-optimized.webp',
      '/images/cars/destinator/dst-exceed-blade-silver-metallic-optimized.webp',
      '/images/cars/destinator/dst-exceed-white-pearl-optimized.webp',
      '/images/cars/destinator/dst-exceed-graphite-gray-metallic-optimized.webp',
      '/images/cars/destinator/dst-exceed-jet-black-mica-optimized.webp',
      '/images/cars/destinator/dst-gls-blade-silver-metallic-optimized.webp',
      '/images/cars/destinator/dst-gls-white-pearl-optimized.webp',
      '/images/cars/destinator/dst-gls-graphite-gray-metallic-optimized.webp',
      '/images/cars/destinator/dst-gls-jet-black-mica-optimized.webp'
    ],
    colors: [
      {
        name: 'Blade Silver Metallic',
        hex: '#C5C6C8',
        availableVariants: ['Ultimate', 'Exceed', 'GLS'],
        image: '/images/cars/destinator/dst-ultimate-blade-silver-metallic-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/destinator/dst-ultimate-blade-silver-metallic-optimized.webp',
          'Exceed': '/images/cars/destinator/dst-exceed-blade-silver-metallic-optimized.webp',
          'GLS': '/images/cars/destinator/dst-gls-blade-silver-metallic-optimized.webp'
        }
      },
      {
        name: 'Quartz White Pearl',
        hex: '#F8F9FA',
        extraPriceFormatted: '+Rp 2.500.000',
        extraPriceNum: 2500000,
        availableVariants: ['Ultimate', 'Exceed', 'GLS'],
        image: '/images/cars/destinator/dst-ultimate-white-pearl-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/destinator/dst-ultimate-white-pearl-optimized.webp',
          'Exceed': '/images/cars/destinator/dst-exceed-white-pearl-optimized.webp',
          'GLS': '/images/cars/destinator/dst-gls-white-pearl-optimized.webp'
        }
      },
      {
        name: 'Graphite Gray Metallic',
        hex: '#4A4E51',
        availableVariants: ['Ultimate', 'Exceed', 'GLS'],
        image: '/images/cars/destinator/dst-ultimate-graphite-gray-metallic-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/destinator/dst-ultimate-graphite-gray-metallic-optimized.webp',
          'Exceed': '/images/cars/destinator/dst-exceed-graphite-gray-metallic-optimized.webp',
          'GLS': '/images/cars/destinator/dst-gls-graphite-gray-metallic-optimized.webp'
        }
      },
      {
        name: 'Lunar Blue Metallic',
        hex: '#1C3B6F',
        availableVariants: ['Ultimate'],
        image: '/images/cars/destinator/dst-ultimate-lunar-blue-mica-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/destinator/dst-ultimate-lunar-blue-mica-optimized.webp'
        }
      },
      {
        name: 'Jet Black Mica',
        hex: '#1A1A1A',
        availableVariants: ['Ultimate', 'Exceed', 'GLS'],
        image: '/images/cars/destinator/dst-ultimate-jet-black-mica-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/destinator/dst-ultimate-jet-black-mica-optimized.webp',
          'Exceed': '/images/cars/destinator/dst-exceed-jet-black-mica-optimized.webp',
          'GLS': '/images/cars/destinator/dst-gls-jet-black-mica-optimized.webp'
        }
      }
    ],
    highlights: [
      'Mesin 1.5L Turbo 4B40 bertenaga buas 163 PS dengan torsi melimpah 250 Nm',
      'Ground clearance 244 mm tertinggi di kelasnya dengan 5 Drive Mode (Normal, Wet, Gravel, Tarmac, Mud)',
      'Panoramic Sunroof & Hands-Free Electric Power Tailgate dengan Kick Sensor',
      'Layar ganda: 12.3-inch Smartphone-link Display Audio + 8-inch Digital Driver Display',
      'Fitur keselamatan aktif Diamond Sense ADAS lengkap & aplikasi pintar Mitsubishi Connect'
    ],
    heroFeatures: [
      { label: 'Confidence Booster for Energetic Family', icon: 'chassis' },
      { label: '5 Mode Berkendara', icon: 'drive' },
      { label: 'Teknologi Diamond Sense', icon: 'shield' },
      { label: 'Mitsubishi Connect', icon: 'connect' }
    ],
    keySpecs: {
      seating: '7 Penumpang',
      engine: '1.5L 4B40 Turbocharged DOHC 16-Valve',
      power: '163 PS (120 kW) @ 5.000 RPM / 250 Nm',
      transmission: 'CVT Otomatis with Drive Mode',
      groundClearance: '244 mm',
      fuelType: 'Bensin (RON 92+)'
    },
    variants: [
      {
        name: 'Destinator Ultimate',
        transmission: 'CVT',
        price: 487000000,
        priceFormatted: 'Rp 487.000.000',
        dpEstimate: 'Rp 50 Jt-an',
        cicilanEstimate: 'Rp 7,1 Jt-an',
        tier: 'Ultimate',
        transmissionDetail: 'CVT Otomatis with Paddle Shift',
        groundClearance: '244 mm',
        highlights: [
          'Panoramic Sunroof elektrik besar membentang luas menghadirkan kemewahan kabin',
          'Paket keselamatan aktif Diamond Sense ADAS lengkap: FCM, ACC, BSW, LCA, RCTA, & AHB',
          'Layar ganda canggih: 12.3 inch Display Audio nirkabel & 8 inch Digital Driver Display',
          'Multi Around Monitor (Kamera 360) & Multi-color Ambient Lights 64 pilihan warna',
          'Synthetic Leather Seat dengan fungsi anti-temperature rise (Heat Guard) & 6 SRS Airbags',
          'Konektivitas pintar Mitsubishi Connect & sistem stabilitas Active Yaw Control (AYC)'
        ],
        packages: [
          {
            name: 'Destinator Ultimate',
            label: 'Ultimate',
            price: 487000000,
            priceFormatted: 'Rp 487.000.000',
            dpEstimate: 'Rp 50 Jt-an',
            cicilanEstimate: 'Rp 7,1 Jt-an',
            highlights: [
              'Panoramic Sunroof elektrik besar membentang luas menghadirkan kemewahan kabin',
              'Paket keselamatan aktif Diamond Sense ADAS lengkap: FCM, ACC, BSW, LCA, RCTA, & AHB',
              'Layar ganda canggih: 12.3 inch Display Audio nirkabel & 8 inch Digital Driver Display',
              'Multi Around Monitor (Kamera 360) & Multi-color Ambient Lights 64 pilihan warna',
              'Synthetic Leather Seat dengan fungsi anti-temperature rise (Heat Guard) & 6 SRS Airbags',
              'Konektivitas pintar Mitsubishi Connect & sistem stabilitas Active Yaw Control (AYC)'
            ]
          },
          {
            name: 'Destinator Ultimate Premium',
            label: 'Ultimate Premium',
            featuresTooltip: 'Additional Feature:\n\nHands-free Power Tailgate, Power Seat Adjuster, Dynamic Sound YAMAHA Premium',
            price: 517000000,
            priceFormatted: 'Rp 517.000.000',
            dpEstimate: 'Rp 55 Jt-an',
            cicilanEstimate: 'Rp 7,6 Jt-an',
            highlights: [
              'Hands-free Power Tailgate dengan Kick Sensor otomatis',
              'Power Seat Adjuster 8-way pengemudi elektrik',
              'Dynamic Sound YAMAHA Premium (8 Speakers)',
              'Panoramic Sunroof elektrik besar & Ambient Light Multicolor 64 warna memikat',
              'Paket ADAS Diamond Sense: FCM, ACC, BSW with LCA, RCTA, & AHB',
              'Layar ganda 12.3 inch Smartphone Display Audio & 8 inch Digital Driver Display'
            ]
          }
        ]
      },
      {
        name: 'Destinator Exceed',
        transmission: 'CVT',
        price: 427000000,
        priceFormatted: 'Rp 427.000.000',
        dpEstimate: 'Rp 45 Jt-an',
        cicilanEstimate: 'Rp 6,3 Jt-an',
        tier: 'Exceed',
        transmissionDetail: 'CVT Otomatis with 5 Drive Mode',
        groundClearance: '244 mm',
        highlights: [
          'Drive Mode Selector dengan 5 mode berkendara (Normal, Wet, Gravel, Tarmac, Mud)',
          'Layar 8 inch Smartphone-link Display Audio dengan Apple CarPlay & Android Auto',
          'Meter cluster 8 inch Digital Driver Display canggih adaptasi SUV modern',
          'Cruise Control & Electronic Parking Brake (EPB) dengan Brake Auto Hold',
          'Dual Zone Automatic AC dengan tampilan digital & jok kulit sintetis Heat Guard',
          'Velg Two-tone Alloy Wheel 18 inch, Rear Disc Brake, AYC, & Rear View Camera'
        ]
      },
      {
        name: 'Destinator GLS',
        transmission: 'CVT',
        price: 402000000,
        priceFormatted: 'Rp 402.000.000',
        dpEstimate: 'Rp 40 Jt-an',
        cicilanEstimate: 'Rp 5,9 Jt-an',
        tier: 'GLS',
        transmissionDetail: 'CVT Otomatis with Drive Mode',
        groundClearance: '244 mm',
        highlights: [
          'Mesin tangguh 1.5L Turbo 4B40 bertenaga 163 PS dengan torsi besar 250 Nm',
          'Ground clearance 244 mm tertinggi di kelasnya dengan turning radius lincah 5.4 m',
          'Electronic Parking Brake (EPB) with Auto Hold & Active Yaw Control (AYC)',
          'Layar 8 inch Touchscreen Display Audio dengan Apple CarPlay & Android Auto',
          'Velg Single-tone Alloy Wheel 18 inch kokoh & lampu utama Front LED Headlamp',
          'Kabin lega 7-seater dengan Keyless Operation System (KOS) & Push Start Button'
        ]
      }
    ],
    description: 'Destinator adalah SUV 7-penumpang generasi baru bermesin Turbo bertenaga 163 PS. Memadukan kemewahan Panoramic Sunroof, sound system Yamaha 8-speaker, ground clearance 244 mm, dan ketangguhan sistem kendali Active Yaw Control (AYC).'
  },

  // Triton
  {
    slug: 'triton',
    name: 'Triton',
    tagline: 'Nyalakan Jiwa Petualangmu',
    logo: '/images/logo/cars-logo/triton-black-optimized.webp',
    logoWhite: '/images/logo/cars-logo/triton-white-optimized.webp',
    category: 'Pick Up',
    segment: 'lcv',
    startingPrice: 'Rp 310.200.000',
    startingPriceNum: 310200000,
    dpStart: 'Rp 45 Jt-an',
    dpMinNum: 45000000,
    cicilanStart: 'Rp 5,2 Jt/bln',
    cicilanNum: 5200000,
    heroImage: '/images/cars/triton/triton-hero.webp',
    image: '/images/cars/triton/all-new-triton-optimized.webp',
    galleryImages: [
      '/images/cars/triton/triton-hero.webp',
      '/images/cars/triton/ultimate-white-diamond-front-left-optimized.webp',
      '/images/cars/triton/ultimate-graphite-gray-front-left-optimized.webp',
      '/images/cars/triton/ultimate-black-mica-front-left-optimized.webp',
      '/images/cars/triton/exceed-white-diamond-front-left-optimized.webp',
      '/images/cars/triton/exceed-graphite-gray-front-left-optimized.webp',
      '/images/cars/triton/exceed-black-mica-front-left-optimized.webp',
      '/images/cars/triton/gls-black-mica-front-left-optimized.webp',
      '/images/cars/triton/gls-white-solid-front-left-optimized.webp',
      '/images/cars/triton/gls-blade-silver-metallic-front-left-optimized.webp',
      '/images/cars/triton/hdx-dc-white-solid-front-left-optimized.webp',
      '/images/cars/triton/hdx-dc-blade-silver-metallic-front-left-optimized.webp',
      '/images/cars/triton/hdx-dc-black-mica-front-left-optimized.webp',
      '/images/cars/triton/hdx-sc-white-solid-front-left-optimized.webp',
      '/images/cars/triton/hdx-sc-blade-silver-metallic-front-left-optimized.webp',
      '/images/cars/triton/hdx-sc-black-mica-front-left-optimized.webp',
      '/images/cars/triton/glx-sc-white-solid-front-left-optimized.webp',
      '/images/cars/triton/glx-sc-blade-silver-metallic-front-left-optimized.webp',
      '/images/cars/triton/glx-sc-black-mica-front-left-optimized.webp'
    ],
    colors: [
      {
        name: 'White Diamond',
        hex: '#F8F9FA',
        extraPriceFormatted: '+Rp 3.000.000',
        extraPriceNum: 3000000,
        availableVariants: ['Ultimate', 'Exceed'],
        image: '/images/cars/triton/ultimate-white-diamond-front-left-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/triton/ultimate-white-diamond-front-left-optimized.webp',
          'Exceed': '/images/cars/triton/exceed-white-diamond-front-left-optimized.webp'
        }
      },
      {
        name: 'Graphite Gray Metallic',
        hex: '#4A4E51',
        availableVariants: ['Ultimate', 'Exceed'],
        image: '/images/cars/triton/ultimate-graphite-gray-front-left-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/triton/ultimate-graphite-gray-front-left-optimized.webp',
          'Exceed': '/images/cars/triton/exceed-graphite-gray-front-left-optimized.webp'
        }
      },
      {
        name: 'White Solid',
        hex: '#FFFFFF',
        availableVariants: ['GLS', 'HDX DC', 'HDX SC', 'GLX'],
        image: '/images/cars/triton/gls-white-solid-front-left-optimized.webp',
        tierImages: {
          'GLS': '/images/cars/triton/gls-white-solid-front-left-optimized.webp',
          'HDX DC': '/images/cars/triton/hdx-dc-white-solid-front-left-optimized.webp',
          'HDX SC': '/images/cars/triton/hdx-sc-white-solid-front-left-optimized.webp',
          'GLX': '/images/cars/triton/glx-sc-white-solid-front-left-optimized.webp'
        }
      },
      {
        name: 'Blade Silver Metallic',
        hex: '#C5C6C8',
        availableVariants: ['GLS', 'HDX DC', 'HDX SC', 'GLX'],
        image: '/images/cars/triton/gls-blade-silver-metallic-front-left-optimized.webp',
        tierImages: {
          'GLS': '/images/cars/triton/gls-blade-silver-metallic-front-left-optimized.webp',
          'HDX DC': '/images/cars/triton/hdx-dc-blade-silver-metallic-front-left-optimized.webp',
          'HDX SC': '/images/cars/triton/hdx-sc-blade-silver-metallic-front-left-optimized.webp',
          'GLX': '/images/cars/triton/glx-sc-blade-silver-metallic-front-left-optimized.webp'
        }
      },
      {
        name: 'Jet Black Mica',
        hex: '#1A1A1A',
        availableVariants: ['Ultimate', 'Exceed', 'GLS', 'HDX DC', 'HDX SC', 'GLX'],
        image: '/images/cars/triton/ultimate-black-mica-front-left-optimized.webp',
        tierImages: {
          'Ultimate': '/images/cars/triton/ultimate-black-mica-front-left-optimized.webp',
          'Exceed': '/images/cars/triton/exceed-black-mica-front-left-optimized.webp',
          'GLS': '/images/cars/triton/gls-black-mica-front-left-optimized.webp',
          'HDX DC': '/images/cars/triton/hdx-dc-black-mica-front-left-optimized.webp',
          'HDX SC': '/images/cars/triton/hdx-sc-black-mica-front-left-optimized.webp',
          'GLX': '/images/cars/triton/glx-sc-black-mica-front-left-optimized.webp'
        }
      }
    ],
    highlights: [
      'Sasis Mega Frame generasi baru dengan torsional rigidity meningkat 60%',
      'Super Select 4WD-II dengan 7 Drive Mode (Normal, Eco, Gravel, Snow, Mud, Sand, Rock)',
      'Mesin Diesel 2.4L 4N16 Clean Diesel Turbo Euro 4 bertenaga hingga 184 PS & torsi 430 Nm',
      'Bak kargo terluas dan terkuat di kelasnya dengan kapasitas angkut maksimal',
      'Fitur keselamatan aktif lengkap ADAS Diamond Sense untuk varian Ultimate'
    ],
    heroFeatures: [
      { label: 'Mesin Tangguh & Ramah Lingkungan', icon: 'engine' },
      { label: 'Reliabilitas Tinggi', icon: 'shield' },
      { label: 'Kargo Luas', icon: 'cargo' },
      { label: 'Kenyamanan Maksimal', icon: 'car-seat' },
    ],
    keySpecs: {
      seating: '2 - 5 Penumpang',
      engine: '2.4L 4N16 Clean Diesel Turbo Euro 4',
      power: '110 - 184 PS / 200 - 430 Nm',
      transmission: '5/6-Speed MT & 6-Speed AT',
      groundClearance: '222 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Triton Ultimate AT Double Cab 4WD',
        transmission: 'AT',
        price: 545000000,
        priceFormatted: 'Rp 545.000.000',
        dpEstimate: 'Rp 85 Jt-an',
        cicilanEstimate: 'Rp 9,2 Jt-an',
        tier: 'Ultimate',
        transmissionDetail: '6-Speed Otomatis + Super Select 4WD-II (7 Drive Mode)',
        groundClearance: '222 mm',
        engine: '2.4L 4N16 Clean Diesel Turbo (High Power)',
        power: '184 PS / 430 Nm',
        highlights: [
          'Mesin 2.4L 4N16 High Power bertenaga buas 184 PS & torsi 430 Nm dengan transmisi 6-Speed AT',
          'Super Select 4WD-II dengan 7 Drive Mode (Normal, Eco, Gravel, Snow, Mud, Sand, Rock)',
          'Diamond Sense ADAS: Forward Collision Mitigation (FCM), Blind Spot Warning (BSW), RCTA, & Auto High Beam',
          'Multi Around Monitor (Kamera 360) & jok kulit premium eksklusif beraksen sporti',
          'Head Unit 9 inch dengan Apple CarPlay & Android Auto nirkabel serta Wireless Charger',
          '7 SRS Airbags (Front, Side, Curtain, Knee) untuk proteksi keselamatan maksimal'
        ]
      },
      {
        name: 'Triton Exceed MT Double Cab 4WD',
        transmission: 'MT',
        price: 505000000,
        priceFormatted: 'Rp 505.000.000',
        dpEstimate: 'Rp 75 Jt-an',
        cicilanEstimate: 'Rp 8,4 Jt-an',
        tier: 'Exceed',
        transmissionDetail: '6-Speed Manual + Super Select 4WD-II',
        groundClearance: '222 mm',
        engine: '2.4L 4N16 Clean Diesel Turbo (Mid Power)',
        power: '150 PS / 330 Nm',
        highlights: [
          'Sistem Super Select 4WD-II dengan Center Differential (bisa mode 4WD di jalan aspal kering)',
          'Lampu depan LED Projector dengan LED Daytime Running Light (DRL) modern & velg alloy 17"',
          'Meter cluster 7 inch Digital LCD Display informatif & interior Black Fabric sporti',
          'Rear Differential Lock elektrik untuk traksi maksimal saat salah satu roda menggantung',
          'Kenyamanan modern: Keyless Operation System (KOS), Push Start Engine & Dual Zone Auto AC',
          'Active Stability & Traction Control (ASTC), Hill Start Assist, & Hill Descent Control'
        ]
      },
      {
        name: 'Triton GLS MT Double Cab 4WD',
        transmission: 'MT',
        price: 475000000,
        priceFormatted: 'Rp 475.000.000',
        dpEstimate: 'Rp 70 Jt-an',
        cicilanEstimate: 'Rp 7,9 Jt-an',
        tier: 'GLS',
        transmissionDetail: '6-Speed Manual + Easy Select 4WD',
        groundClearance: '222 mm',
        engine: '2.4L 4N16 Clean Diesel Turbo (Mid Power)',
        power: '150 PS / 330 Nm',
        highlights: [
          'Sistem penggerak 4WD Easy Select (2H, 4H, 4L) tangguh di jalur tambang & perkebunan',
          'Mesin 2.4L 4N16 Turbo Diesel 150 PS / 330 Nm dengan transmisi manual 6-percepatan presisi',
          'Velg 17 inch Alloy Wheel kokoh dengan ban All-Terrain (A/T)',
          'Head Unit Touchscreen 8 inch dengan konektivitas smartphone & kamera mundur',
          'Kabin ganda 5 penumpang lega dan kedap dengan insulasi sasis Mega Frame generasi baru',
          'Dual SRS Airbags, ABS + EBD, Active Yaw Control (AYC), & Active Stability Control'
        ]
      },
      {
        name: 'Triton HDX MT Double Cab 4WD',
        transmission: 'MT',
        price: 435000000,
        priceFormatted: 'Rp 435.000.000',
        dpEstimate: 'Rp 65 Jt-an',
        cicilanEstimate: 'Rp 7,2 Jt-an',
        tier: 'HDX DC',
        transmissionDetail: '5-Speed Manual + Rear Diff Lock & Lever 4WD',
        groundClearance: '222 mm',
        engine: '2.4L 4N16 Clean Diesel Turbo (Low Power Heavy Duty)',
        power: '110 PS / 200 Nm',
        highlights: [
          'Dilengkapi Rear Differential Lock mekanikal untuk traksi ekstrem di lumpur dalam',
          'Transmisi 5-Speed Manual heavy duty dengan tuas transfer case 4WD mekanikal legendaris',
          'Kabin ganda 5 penumpang siap kerja keras untuk mobilitas kru tambang & perkebunan',
          'Material interior heavy duty tahan gores dan mudah dibersihkan dari lumpur tanah',
          'Underbody protection pelat baja pelindung bawah mesin & tangki bahan bakar tebal',
          'Sasis Mega Frame generasi baru dengan daya tahan puntir 60% lebih kuat'
        ]
      },
      {
        name: 'Triton HDX MT Single Cab 4WD',
        transmission: 'MT',
        price: 385000000,
        priceFormatted: 'Rp 385.000.000',
        dpEstimate: 'Rp 55 Jt-an',
        cicilanEstimate: 'Rp 6,4 Jt-an',
        tier: 'HDX SC',
        transmissionDetail: '5-Speed Manual + Lever 4WD (Transfer Case)',
        groundClearance: '222 mm',
        engine: '2.4L 4N16 Clean Diesel Turbo (Low Power Heavy Duty)',
        power: '110 PS / 200 Nm',
        highlights: [
          'Penggerak 4 Roda (4WD) mekanikal siap taklukkan medan off-road, tambang, & tanjakan terjal',
          'Bak kargo Single Cabin panjang dengan kapasitas angkut muatan lebih dari 1 ton',
          'Mesin 2.4L 4N16 Clean Diesel Euro 4 torsi badak di putaran rendah, bandel & irit',
          'Sasis Mega Frame baru lebih tebal dengan rigiditas tinggi untuk muatan berat',
          'Dilengkapi pelindung kolong tebal (underbody protector) & kait towing depan-belakang',
          'Dual SRS Airbags, ABS + EBD, serta suspensi heavy-duty reinforced leaf spring'
        ]
      },
      {
        name: 'Triton GLX MT Single Cab 2WD',
        transmission: 'MT',
        price: 310200000,
        priceFormatted: 'Rp 310.200.000',
        dpEstimate: 'Rp 45 Jt-an',
        cicilanEstimate: 'Rp 5,2 Jt-an',
        tier: 'GLX',
        transmissionDetail: '6-Speed Manual (4x2)',
        groundClearance: '222 mm',
        engine: '2.4L 4N16 Clean Diesel Turbo (Mid Power)',
        power: '150 PS / 330 Nm',
        highlights: [
          'Bak kargo Single Cabin paling panjang & luas, ideal untuk logistik muatan volume besar',
          'Mesin 2.4L 4N16 bertenaga optimal 150 PS / 330 Nm dengan transmisi 6-Speed Manual efisien',
          'Penggerak roda belakang (RWD / 4x2) hemat bahan bakar untuk distribusi antarkota',
          'Kabin 2-seater ergonomis dengan kenyamanan berkendara harian',
          'Sasis kokoh Mega Frame dengan kapasitas beban muatan tinggi',
          'Dual SRS Airbags, ABS + EBD, Active Stability & Traction Control (ASTC)'
        ]
      }
    ],
    description: 'All New Triton dirancang ulang dari nol dengan DNA reli tangguh Paris-Dakar. Menghadirkan ketangguhan tanpa tanding di area tambang, perkebunan, hingga gaya hidup adventure off-road perkotaan.'
  },

  // Colt L300 Euro 4
  {
    slug: 'l300',
    name: 'L300',
    tagline: 'Transportasi Bisnis yang Handal',
    logo: '/images/logo/cars-logo/l300-black-optimized.webp',
    logoWhite: '/images/logo/cars-logo/l300-white-optimized.webp',
    category: 'Pick Up',
    segment: 'lcv',
    startingPrice: 'Rp 243.650.000',
    startingPriceNum: 243650000,
    dpStart: 'Rp 18 Jt-an',
    dpMinNum: 18000000,
    cicilanStart: 'Rp 3,5 Jt/bln',
    cicilanNum: 3500000,
    heroImage: '/images/cars/l300/l300-hero.webp',
    image: '/images/cars/l300/l300-optimized.webp',
    galleryImages: [
      '/images/cars/l300/l300-hero.webp',
      '/images/cars/l300/l300-optimized.webp',
      '/images/cars/l300/pickup-flat-deck-optimized.webp',
      '/images/cars/l300/cab-chasis-optimized.webp'
    ],
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' }
    ],
    highlights: [
      'Mesin Diesel Baru 2.2L 4N14 Common Rail Turbo Euro 4: 40% lebih bertenaga (99.25 PS & 200 Nm)',
      'Bak kargo lebih panjang 2.630 mm (8% lebih panjang) dengan daya muat logistik ekstra',
      'Kemudi semakin nyaman dengan Power Steering enteng dan radius putar kompak 4.4 meter',
      'Nilai jual kembali (resale value) paling stabil dan dicari di seluruh pelosok Indonesia',
      'Didukung jaringan bengkel resmi dan ketersediaan suku cadang terlengkap di lebih dari 300 dealer'
    ],
    heroFeatures: [
      { label: 'Tangguh di Tanjakan', icon: 'climb' },
      { label: 'Hebat di Segala Medan', icon: 'terrain' },
      { label: 'Hemat Biaya Perawatan', icon: 'maintenance' },
      { label: 'Suku Cadang Mudah Dicari', icon: 'sparepart' }
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
      {
        name: 'Colt L300 Pick Up Flat Deck',
        transmission: 'MT',
        price: 248650000,
        priceFormatted: 'Rp 248.650.000',
        dpEstimate: 'Rp 20 Jt-an',
        cicilanEstimate: 'Rp 3,6 Jt-an',
        tier: 'Flat Deck',
        image: '/images/cars/l300/pickup-flat-deck-optimized.webp',
        transmissionDetail: '5-Speed Manual (M/T)',
        groundClearance: '195 mm',
        highlights: [
          'Bak kargo Flat Deck (Bak Rata) lebih panjang 200 mm (2.630 mm) dengan kapasitas muat ekstra 8%',
          'Mesin Diesel 2.2L 4N14 Common Rail Turbo Euro 4 bertenaga 99.25 PS & torsi 200 Nm (naik 40%)',
          'Bukaan bak 3 sisi memudahkan proses bongkar muat barang dari samping maupun belakang',
          'Kabin 3 penumpang lega dengan speedometer baru yang modern, Power Steering & audio hiburan',
          'Konsumsi solar lebih irit dan emisi gas buang bersih sesuai standar Euro 4',
          'Resale value (harga jual kembali) paling stabil dan tinggi di seluruh bursa mobil bekas Indonesia'
        ]
      },
      {
        name: 'Colt L300 Cab Chassis',
        transmission: 'MT',
        price: 243650000,
        priceFormatted: 'Rp 243.650.000',
        dpEstimate: 'Rp 18 Jt-an',
        cicilanEstimate: 'Rp 3,5 Jt-an',
        tier: 'Cab Chassis',
        image: '/images/cars/l300/cab-chasis-optimized.webp',
        transmissionDetail: '5-Speed Manual (M/T)',
        groundClearance: '195 mm',
        highlights: [
          'Basis sasis terkuat dan terfavorit untuk modifikasi bodi Box Aluminium, Box Pendingin (Cooler), dan Moko',
          'Mesin 2.2L 4N14 Common Rail Turbo Euro 4 terbukti tangguh melibas berbagai tanjakan dan jalan pedesaan',
          'Panjang sasis bertambah memberikan volume kubikasi box karoseri yang lebih luas dan efisien',
          'Sistem kemudi Power Steering ringan dan radius putar kompak 4.4 meter lincah di gang sempit',
          'Ketersediaan suku cadang dan montir resmi sangat melimpah di pelosok Nusantara',
          'Biaya perawatan harian sangat ekonomis menjamin keuntungan bisnis maksimal'
        ]
      }
    ],
    description: 'Lebih dari 40 tahun menjadi mitra terpercaya jutaan pengusaha di Indonesia. Colt L300 Euro 4 kini hadir dengan kargo lebih luas, mesin turbo common rail bertenaga tinggi, dan efisiensi bahan bakar maksimal.'
  },

  // Canter FE 71L
  {
    slug: 'canter-fe71',
    name: 'Canter FE 71L',
    tagline: 'Siap Berkontribusi Untuk Negeri',
    category: 'Truk',
    segment: 'commercial',
    badge: 'ENGKEL 4 BAN',
    startingPrice: 'Rp 388.000.000',
    startingPriceNum: 388000000,
    dpStart: 'Rp 28 Jt-an',
    dpMinNum: 28000000,
    cicilanStart: 'Rp 7,8 Jt/bln',
    cicilanNum: 7800000,
    heroImage: '/images/cars/canter-fe-71/1-4.webp',
    image: '/images/cars/canter-fe-71/karoseri-FE-71L-Box-Aluminium.webp',
    galleryImages: [
      '/images/cars/canter-fe-71/1-4.webp',
      '/images/cars/canter-fe-71/karoseri-FE-71L-Box-Aluminium.webp',
      '/images/cars/canter-fe-71/canter-fe71-optimized.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Mesin 4V21 Common Rail Turbo Euro 4 108 PS tangguh & irit bahan bakar',
      'Wheelbase panjang 3.350 mm dengan panjang sasis total 6.425 mm untuk volume kubikasi maksimal',
      'Radius putar lincah 5,1 meter mudah bermanuver di jalan kota dan komplek perumahan',
      'Bebas aturan pembatasan jam truk besar (berlaku aturan mobil barang ringan)',
      'Dilengkapi telematika Runner Fuso gratis, in-dash gear shift, dan kabin jungkit'
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
      {
        name: 'Canter FE 71L Karoseri Box Aluminium MT',
        transmission: 'MT',
        price: 425000000,
        priceFormatted: 'Rp 425.000.000',
        dpEstimate: 'Rp 32 Jt-an',
        cicilanEstimate: 'Rp 8,5 Jt-an',
        tier: 'Karoseri Box Aluminium',
        transmissionDetail: '5-Speed Manual M025S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-fe-71/karoseri-FE-71L-Box-Aluminium.webp',
        highlights: [
          'Aplikasi Box Aluminium kargo tertutup aman dari cuaca, hujan & pencurian',
          'Kapasitas volume kubikasi kargo hingga 14 m³ untuk ekspedisi, FMCG & e-commerce perkotaan',
          'Pintu samping dan pintu belakang ganda memudahkan proses bongkar muat'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE 71L adalah truk engkel 4 roda dengan sasis terpanjang di kelasnya. Sangat ideal untuk distribusi perkotaan dengan aplikasi Karoseri Box Aluminium untuk volume muat ekstra besar tanpa batasan jam truk besar.'
  },

  // Canter FE 74
  {
    slug: 'canter-fe74',
    name: 'Canter FE 74',
    tagline: 'Truk 6 Roda Serbaguna Paling Lincah - Pilihan Utama Logistik & Distribusi Antar Kota',
    category: 'Truk',
    segment: 'commercial',
    badge: 'DOUBLE 6 BAN',
    startingPrice: 'Rp 445.000.000',
    startingPriceNum: 445000000,
    dpStart: 'Rp 35 Jt-an',
    dpMinNum: 35000000,
    cicilanStart: 'Rp 8,9 Jt/bln',
    cicilanNum: 8900000,
    heroImage: '/images/cars/canter-fe-74/canter-fe74.webp',
    image: '/images/cars/canter-fe-74/karoseri-FE-74-Bak-besi-setengah.webp',
    galleryImages: [
      '/images/cars/canter-fe-74/canter-fe74.webp',
      '/images/cars/canter-fe-74/karoseri-FE-74-Bak-besi-setengah.webp',
      '/images/cars/canter-fe-74/canter-fe74-optimized.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Mesin Common Rail Euro 4 136 PS bertenaga tangguh dengan torsi 420 Nm',
      'Rasio gardan 4.444 lincah dan hemat bahan bakar untuk distribusi antarkota',
      'Panjang sasis 6.365 mm dengan daya angkut GVW hingga 8.250 kg',
      'Dilengkapi Exhaust Brake, Power Steering, dan Runner Fuso Telematics'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5 (Gigi Akhir 4.444)',
      groundClearance: '200 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter FE 74 Karoseri Bak Besi MT',
        transmission: 'MT',
        price: 475000000,
        priceFormatted: 'Rp 475.000.000',
        dpEstimate: 'Rp 40 Jt-an',
        cicilanEstimate: 'Rp 9,4 Jt-an',
        tier: 'Karoseri Bak Besi',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-fe-74/karoseri-FE-74-Bak-besi-setengah.webp',
        highlights: [
          'Bodi bak besi setengah pintu / full pintu kokoh untuk material dan kargo berat',
          'Sasis 6 ban kokoh membawa muatan hingga 8 ton dengan stabil',
          'Rasio gardan 4.444 lincah dan hemat bahan bakar untuk distribusi muatan antarkota'
        ]
      },
      {
        name: 'Canter FE 74 Karoseri Bak Kayu MT',
        transmission: 'MT',
        price: 478000000,
        priceFormatted: 'Rp 478.000.000',
        dpEstimate: 'Rp 41 Jt-an',
        cicilanEstimate: 'Rp 9,5 Jt-an',
        tier: 'Karoseri Bak Kayu',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-fe-74/karoseri-FE-74-Bak-Kayu.webp',
        highlights: [
          'Aplikasi bak kayu rangka besi tinggi untuk angkutan ekspedisi logistik dan sembako',
          'Kapasitas tonase maksimal dengan perlindungan terpal anti hujan',
          'Kekuatan rangka kayu merbau/bengkirai tebal tahan benturan kargo berat'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE 74 adalah truk 6 roda terfavorit di Indonesia untuk angkutan logistik antarkota. Ditenagai mesin Euro 4 136 PS dengan rasio gardan seimbang antara kecepatan dan daya angkut.'
  },

  // Canter FE 74 HD
  {
    slug: 'canter-fe74-hd',
    name: 'Canter FE 74 HD',
    tagline: 'Heavy Duty 6 Roda Rasio Gardan 5.571 - Perkasa di Tanjakan & Muatan Berat',
    category: 'Truk',
    segment: 'commercial',
    badge: 'HEAVY DUTY 6 BAN',
    startingPrice: 'Rp 458.000.000',
    startingPriceNum: 458000000,
    dpStart: 'Rp 38 Jt-an',
    dpMinNum: 38000000,
    cicilanStart: 'Rp 9,2 Jt/bln',
    cicilanNum: 9200000,
    heroImage: '/images/cars/canter-fe-74-hd/canter-fe74-hd.webp',
    image: '/images/cars/canter-fe-74-hd/karoseri-FE-74-HD-Dump-Truck.webp',
    galleryImages: [
      '/images/cars/canter-fe-74-hd/canter-fe74-hd.webp',
      '/images/cars/canter-fe-74-hd/karoseri-FE-74-HD-Dump-Truck.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Rasio final gear 5.571 (Heavy Duty) menghasilkan torsi tanjakan ekstra kuat',
      'Dilengkapi Rear View Camera dari pabrik untuk kemudahan mundur saat bermuatan',
      'As roda dan gardan diperkuat untuk daya tahan di jalan berlumpur & berbukit',
      'Aplikasi favorit: Dump Truck, Bak Kayu Tinggi, dan Truk Tangki'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5 (Gardan HD 5.571)',
      groundClearance: '210 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter FE 74 HD Karoseri Dump Truck MT',
        transmission: 'MT',
        price: 520000000,
        priceFormatted: 'Rp 520.000.000',
        dpEstimate: 'Rp 48 Jt-an',
        cicilanEstimate: 'Rp 10,2 Jt-an',
        tier: 'Karoseri Dump Truck',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-74-hd/karoseri-FE-74-HD-Dump-Truck.webp',
        highlights: [
          'Bak dump hidrolik kokoh untuk angkutan pasir, batu split, dan tanah galian',
          'Kamera parkir belakang memudahkan manuver pembongkaran muatan di area proyek',
          'Rasio final gear Heavy Duty 5.571 bertenaga badak melibas tanjakan curam bermuatan'
        ]
      },
      {
        name: 'Canter FE 74 HD Karoseri Bak Kayu Tinggi MT',
        transmission: 'MT',
        price: 495000000,
        priceFormatted: 'Rp 495.000.000',
        dpEstimate: 'Rp 44 Jt-an',
        cicilanEstimate: 'Rp 9,8 Jt-an',
        tier: 'Karoseri Bak Kayu Tinggi',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-74-hd/karoseri-FE-74-HD-Bak-Kayu.webp',
        highlights: [
          'Bak kayu rangka besi dinding tinggi untuk hasil perkebunan sawit, karet, dan muatan berat',
          'Gardan ekstra tebal tahan torsi puntir beban berat',
          'Daya angkut optimal GVW 8.250 kg menjamin efisiensi tonase setiap ritase'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE 74 HD dirancang untuk pengusaha yang membutuhkan daya angkut muatan berat di area perkebunan, pertambangan, dan proyek berbukit dengan rasio gardan bertenaga 5.571.'
  },

  // Canter FE 74 HDS
  {
    slug: 'canter-fe74-hds',
    name: 'Canter FE 74 HDS',
    tagline: 'High Speed 136 PS - Laju Kencang di Jalan Tol, Tangguh Bawa Beban Berat',
    category: 'Truk',
    segment: 'commercial',
    badge: 'HIGH SPEED 6 BAN',
    startingPrice: 'Rp 462.000.000',
    startingPriceNum: 462000000,
    dpStart: 'Rp 39 Jt-an',
    dpMinNum: 39000000,
    cicilanStart: 'Rp 9,3 Jt/bln',
    cicilanNum: 9300000,
    heroImage: '/images/cars/canter-fe-74-hds/canter-fe74-hds.webp',
    image: '/images/cars/canter-fe-74-hds/karoseri-FE-74-HDS-Box-Alumunium.webp',
    galleryImages: [
      '/images/cars/canter-fe-74-hds/canter-fe74-hds.webp',
      '/images/cars/canter-fe-74-hds/karoseri-FE-74-HDS-Box-Alumunium.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Rasio final gear 4.875 (High Speed) menghasilkan kecepatan jelajah tinggi & hemat BBM',
      'Pilihan utama perusahaan logistik paket kilat dan distribusi pangan segar antar provinsi',
      'Mesin Common Rail Euro 4 136 PS stabil dipacu pada kecepatan tinggi di jalan tol',
      'Dilengkapi Exhaust Brake ganda untuk pengereman aman saat melaju kencang'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5 (Gardan 4.875)',
      groundClearance: '210 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter FE 74 HDS Karoseri Box Ekspedisi Kilat MT',
        transmission: 'MT',
        price: 515000000,
        priceFormatted: 'Rp 515.000.000',
        dpEstimate: 'Rp 47 Jt-an',
        cicilanEstimate: 'Rp 10,1 Jt-an',
        tier: 'Karoseri Box Ekspedisi',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-74-hds/karoseri-FE-74-HDS-Box-Alumunium.webp',
        highlights: [
          'Aplikasi box kargo tertutup untuk ekspedisi kilat, pengiriman paket, dan logistik bandara',
          'Menghemat waktu tempuh perjalanan antarkota berkat rasio gardan High Speed',
          'Kecepatan maksimum hingga 117 km/jam optimal untuk rute lintas jalan tol antarkota'
        ]
      },
      {
        name: 'Canter FE 74 HDS Karoseri Bak Besi MT',
        transmission: 'MT',
        price: 489000000,
        priceFormatted: 'Rp 489.000.000',
        dpEstimate: 'Rp 42 Jt-an',
        cicilanEstimate: 'Rp 9,7 Jt-an',
        tier: 'Karoseri Bak Besi',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-74-hds/karoseri-FE-74-HDS-Bak-Besi.webp',
        highlights: [
          'Bodi bak besi kokoh untuk distribusi cepat material dan barang niaga',
          'Laju kencang di tol dengan kestabilan muatan maksimal',
          'Mesin Common Rail 136 PS bertenaga responsif dan sangat efisien bahan bakar'
        ]
      },
      {
        name: 'Canter FE 74 HDS Karoseri Bak Kayu MT',
        transmission: 'MT',
        price: 492000000,
        priceFormatted: 'Rp 492.000.000',
        dpEstimate: 'Rp 43 Jt-an',
        cicilanEstimate: 'Rp 9,8 Jt-an',
        tier: 'Karoseri Bak Kayu',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-74-hds/karoseri-FE-74-HDS-Bak-Kayu.webp',
        highlights: [
          'Bak kayu rangka besi untuk komoditas pangan segar dan hasil bumi antarkota',
          'Kombinasi kecepatan jelajah tinggi dan kapasitas muat ekstra',
          'Rasio gardan 4.875 menjaga putaran mesin tetap ekonomis pada kecepatan jelajah'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE 74 HDS memadukan tenaga 136 PS dengan rasio gardan High Speed 4.875, menjadikannya truk paling lincah dan cepat untuk ekspedisi jarak jauh di jalan tol.'
  },

  // Canter FE 74L
  {
    slug: 'canter-fe74l',
    name: 'Canter FE 74L',
    tagline: 'Super Long Wheelbase 4.200 mm - Volume Muatan Terbesar Kelas 6 Roda',
    category: 'Truk',
    segment: 'commercial',
    badge: 'SUPER LONG 6 BAN',
    startingPrice: 'Rp 473.000.000',
    startingPriceNum: 473000000,
    dpStart: 'Rp 42 Jt-an',
    dpMinNum: 42000000,
    cicilanStart: 'Rp 9,5 Jt/bln',
    cicilanNum: 9500000,
    heroImage: '/images/cars/canter-fe-74l/canter-fe74l.webp',
    image: '/images/cars/canter-fe-74l/karoseri-FE-74L-Box-Alumunium.webp',
    galleryImages: [
      '/images/cars/canter-fe-74l/canter-fe74l.webp',
      '/images/cars/canter-fe-74l/karoseri-FE-74L-Box-Alumunium.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Panjang total kendaraan 7.420 mm dengan jarak sumbu roda 4.200 mm terpanjang di kelasnya',
      'Kapasitas kubikasi kargo hingga 30+ meter kubik untuk muatan volume besar & FMCG',
      'Mesin Euro 4 136 PS sanggup menghela muatan panjang dengan efisiensi maksimal',
      'Struktur sasis baja dingin kokoh tanpa sambungan las menjamin kekuatan terhadap lenturan'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5',
      groundClearance: '200 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter FE 74L Karoseri Box Alumunium Jumbo MT',
        transmission: 'MT',
        price: 538000000,
        priceFormatted: 'Rp 538.000.000',
        dpEstimate: 'Rp 50 Jt-an',
        cicilanEstimate: 'Rp 10,5 Jt-an',
        tier: 'Karoseri Box Jumbo',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-fe-74l/karoseri-FE-74L-Box-Alumunium.webp',
        highlights: [
          'Volume kubikasi kargo raksasa mengangkut karton mie instan, popok, snack, dan packaging dalam jumlah maksimal',
          'Pintu samping lebar dan pintu belakang lipat mempermudah fork-lift',
          'Wheelbase terpanjang 4.200 mm memaksimalkan kapasitas muat kubikasi hingga 30+ m³'
        ]
      },
      {
        name: 'Canter FE 74L Karoseri Flat Deck Panjang MT',
        transmission: 'MT',
        price: 512000000,
        priceFormatted: 'Rp 512.000.000',
        dpEstimate: 'Rp 48 Jt-an',
        cicilanEstimate: 'Rp 10,1 Jt-an',
        tier: 'Karoseri Flat Deck',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-fe-74l/karoseri-FE-74L-Flat-Deck.webp',
        highlights: [
          'Lantai dek rata ekstra panjang untuk muatan pipa, besi, tiang, dan muatan pallet industri',
          'Sasis kokoh tanpa lendut dengan distribusi bobot merata',
          'Panjang sasis total 7.420 mm mempermudah bongkar muat forklift dari berbagai sudut'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE 74L adalah solusi bagi pengusaha kargo yang membutuhkan kapasitas volume angkut terbesar. Dengan sasis 7,4 meter, muatan volume ringan hingga sedang dapat diangkut maksimal dalam satu ritase.'
  },

  // Canter FE SHDX
  {
    slug: 'canter-fe-shdx',
    name: 'Canter FE SHDX',
    tagline: 'Super Heavy Duty X Rasio Gardan 6.666 - Rajanya Dump Truck Tanjakan & Tambang',
    category: 'Truk',
    segment: 'commercial',
    badge: 'SUPER DUMP 6 BAN',
    startingPrice: 'Rp 480.000.000',
    startingPriceNum: 480000000,
    dpStart: 'Rp 45 Jt-an',
    dpMinNum: 45000000,
    cicilanStart: 'Rp 9,7 Jt/bln',
    cicilanNum: 9700000,
    heroImage: '/images/cars/canter-fe-shdx/canter-fe-shdx.webp',
    image: '/images/cars/canter-fe-shdx/karoseri-FE-SHDX-Dump-Truck.webp',
    galleryImages: [
      '/images/cars/canter-fe-shdx/canter-fe-shdx.webp',
      '/images/cars/canter-fe-shdx/karoseri-FE-SHDX-Dump-Truck.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Rasio final gear tertinggi 6.666 monster tanjakan di area tambang, galian & proyek infrastruktur',
      'Diferensial belakang reinforced ultra-heavy duty tahan torsi kejut saat dump hidrolik bekerja',
      'Suspensi per daun (leaf spring) bertingkat ekstra tebal mampu menahan beban material batu & pasir',
      'Truk dump paling tangguh, teruji, dan paling bernilai jual kembali (resale value) tinggi di Indonesia'
    ],
    keySpecs: {
      seating: '3 Penumpang',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5 (Gardan Super 6.666)',
      groundClearance: '210 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter FE SHDX Karoseri Dump Truck Proyek MT',
        transmission: 'MT',
        price: 545000000,
        priceFormatted: 'Rp 545.000.000',
        dpEstimate: 'Rp 55 Jt-an',
        cicilanEstimate: 'Rp 10,7 Jt-an',
        tier: 'Karoseri Dump Proyek',
        transmissionDetail: '5-Speed Manual M035S5 (Gardan 6.666)',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-shdx/karoseri-FE-SHDX-Dump-Truck.webp',
        highlights: [
          'Bak dump hidrolik pompa KP75 tebal untuk pasir, batu belah, dan material bangunan',
          'Ketinggian ground clearance 210 mm aman di jalan proyek berbatu',
          'Rasio gardan Super High Gear 6.666 raja tanjakan untuk medan tambang & konstruksi ekstrem'
        ]
      },
      {
        name: 'Canter FE SHDX Karoseri Bak Kayu Muatan Berat MT',
        transmission: 'MT',
        price: 518000000,
        priceFormatted: 'Rp 518.000.000',
        dpEstimate: 'Rp 50 Jt-an',
        cicilanEstimate: 'Rp 10,2 Jt-an',
        tier: 'Karoseri Bak Kayu',
        transmissionDetail: '5-Speed Manual M035S5 (Gardan 6.666)',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-shdx/karoseri-FE-SHDX-Bak-Kayu.webp',
        highlights: [
          'Bak kayu rangka baja kuat untuk angkutan perkebunan sawit di jalan berlumpur & tanjakan curam',
          'Rasio gardan 6.666 menjamin daya dorong tanjakan maksimal',
          'Daya tahan suspensi dan as roda diperkuat khusus beban berat off-road perkebunan'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE SHDX adalah legenda truk dump Indonesia. Diciptakan dengan rasio gardan tertinggi 6.666 untuk menaklukkan medan tambang, galian C, dan proyek pembangunan terberat.'
  },

  // Canter FE 71 BC
  {
    slug: 'canter-fe71-bc',
    name: 'Canter FE 71 BC',
    tagline: 'Sasis Bus 4 Roda (Engkel) Terfavorit untuk Karoseri Microbus 16-19 Kursi',
    category: 'Bus Chassis',
    segment: 'commercial',
    badge: 'BUS CHASSIS 4 BAN',
    startingPrice: 'Rp 365.000.000',
    startingPriceNum: 365000000,
    dpStart: 'Rp 25 Jt-an',
    dpMinNum: 25000000,
    cicilanStart: 'Rp 7,3 Jt/bln',
    cicilanNum: 7300000,
    heroImage: '/images/cars/canter-fe-71-bc/canter-fe71-bc.webp',
    image: '/images/cars/canter-fe-71-bc/2.webp',
    galleryImages: [
      '/images/cars/canter-fe-71-bc/1.webp',
      '/images/cars/canter-fe-71-bc/2.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Sasis bus 4 ban (Engkel) dengan suspensi lembut dirancang khusus untuk kenyamanan penumpang',
      'Tersedia sasis standar (FE 71 BC) dan sasis panjang (FE 71L BC) untuk kapasitas muat fleksibel',
      'Mesin Euro 4 108 PS halus, minim getaran di dalam kabin penumpang, dan sangat hemat solar',
      'Alternator berdaya besar siap menopang instalasi AC ganda dan sistem audio video'
    ],
    keySpecs: {
      seating: '16 - 19 Penumpang (Karoseri)',
      engine: '3.9L 4V21 Common Rail Turbo Euro 4',
      power: '108 PS @ 2.500 RPM / 300 Nm',
      transmission: '5-Speed Manual M025S5',
      groundClearance: '200 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter FE 71 BC Karoseri Bus MT',
        transmission: 'MT',
        price: 365000000,
        priceFormatted: 'Rp 365.000.000',
        dpEstimate: 'Rp 25 Jt-an',
        cicilanEstimate: 'Rp 7,3 Jt-an',
        tier: 'Karoseri Bus Standard',
        transmissionDetail: '5-Speed Manual M025S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-fe-71-bc/1.webp',
        highlights: [
          'Aplikasi bodi microbus 16 kursi untuk armada travel pariwisata dan antar-jemput eksekutif',
          'Kenyamanan suspensi daun khusus penumpang',
          'Radius putar kompak 5,1 meter sangat lincah menjangkau jalan perumahan & gang perkotaan'
        ]
      },
      {
        name: 'Canter FE 71L BC Karoseri Bus Long MT',
        transmission: 'MT',
        price: 380000000,
        priceFormatted: 'Rp 380.000.000',
        dpEstimate: 'Rp 28 Jt-an',
        cicilanEstimate: 'Rp 7,6 Jt-an',
        tier: 'Karoseri Bus Long',
        transmissionDetail: '5-Speed Manual M025S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-fe-71-bc/2.webp',
        highlights: [
          'Sasis panjang 6.425 mm muat hingga 19+1 kursi dengan legroom lega',
          'Ruang bagasi belakang lebih dalam untuk koper travel bandara',
          'Alternator besar bertenaga tinggi siap menopang AC ganda ducting dingin merata'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE 71 BC Series adalah sasis microbus 4 roda paling terpercaya untuk pengusaha travel antarkota, pariwisata, dan antar-jemput karyawan. Nyaman, halus, dan menguntungkan.'
  },

  // Canter FE 84G BC
  {
    slug: 'canter-fe84',
    name: 'Canter FE 84G BC',
    tagline: 'Sasis Medium Bus 6 Roda Tapak Lebar - Kapasitas 29-35 Kursi Pariwisata',
    category: 'Bus Chassis',
    segment: 'commercial',
    badge: 'BUS CHASSIS 6 BAN',
    startingPrice: 'Rp 490.000.000',
    startingPriceNum: 490000000,
    dpStart: 'Rp 42 Jt-an',
    dpMinNum: 42000000,
    cicilanStart: 'Rp 9,8 Jt/bln',
    cicilanNum: 9800000,
    heroImage: '/images/cars/canter-fe-84g-bc/FE_84_G_BC.webp',
    image: '/images/cars/canter-fe-84g-bc/Canter-FE-84G-BC-1.webp',
    galleryImages: [
      '/images/cars/canter-fe-84g-bc/FE_84_G_BC.webp',
      '/images/cars/canter-fe-84g-bc/Canter-FE-84G-BC-1.webp'
    ],
    colors: [
      { name: 'Yellow Fuso Canter', hex: '#E5A91B' }
    ],
    highlights: [
      'Sasis 6 roda Super Capacity tapak lebar (Wide Chassis 2.035 mm) untuk stabilitas bodi bus pariwisata',
      'Mesin bertenaga perkasa 136 PS sanggup menghela bodi bus berpenumpang penuh di jalur pegunungan',
      'Panjang sasis 7.130 mm memberikan ruang untuk 29 hingga 35 kursi penumpang plus bagasi luas',
      'Dilengkapi Exhaust Brake, Tilt & Telescopic Steering, serta jaminan servis di 220+ bengkel Fuso'
    ],
    keySpecs: {
      seating: '29 - 35 Penumpang (Karoseri)',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5',
      groundClearance: '210 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter FE 84G BC Karoseri Medium Bus Pariwisata MT',
        transmission: 'MT',
        price: 680000000,
        priceFormatted: 'Rp 680.000.000',
        dpEstimate: 'Rp 80 Jt-an',
        cicilanEstimate: 'Rp 14,5 Jt-an',
        tier: 'Karoseri Medium Bus',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '210 mm',
        image: '/images/cars/canter-fe-84g-bc/Canter-FE-84G-BC-1.webp',
        highlights: [
          'Estimasi unit lengkap bodi karoseri medium bus 31 kursi eksekutif AC ducting',
          'Pilihan utama perusahaan otobus (PO) pariwisata dan shuttle premium',
          'Sasis 6 roda tapak lebar 136 PS memberikan stabilitas bodi tinggi yang aman dan nyaman'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter FE 84G BC adalah standar emas sasis medium bus di Indonesia. Menawarkan sasis tapak lebar yang stabil, mesin 136 PS bertenaga badak, dan kapasitas muat hingga 35 penumpang.'
  },

  // Canter Bus
  {
    slug: 'canter-bus',
    name: 'Canter Bus',
    tagline: 'Microbus 19+1 Seats Jadi Siap Pakai - Kabin Tinggi AC Ducting Reclining Seats',
    category: 'Bus',
    segment: 'commercial',
    badge: 'MICROBUS 20 SEATS',
    startingPrice: 'Rp 465.000.000',
    startingPriceNum: 465000000,
    dpStart: 'Rp 40 Jt-an',
    dpMinNum: 40000000,
    cicilanStart: 'Rp 9,2 Jt/bln',
    cicilanNum: 9200000,
    heroImage: '/images/cars/canter-bus/canter-bus-optimized.webp',
    image: '/images/cars/canter-bus/canter.webp',
    galleryImages: [
      '/images/cars/canter-bus/canter.webp',
      '/images/cars/canter-bus/canter-bus-optimized.webp'
    ],
    colors: [
      { name: 'Solid White', hex: '#F5F5F5' }
    ],
    highlights: [
      'Unit microbus utuh resmi pabrik siap pakai tanpa perlu menunggu lama pengerjaan karoseri',
      'Kapasitas angkut 19 + 1 kursi penumpang dengan legroom lega dan akses keluar masuk mudah',
      'High Roof Cabin dengan AC Ducting merata ke seluruh kisi-kisi kabin penumpang',
      'Reclining Seat kulit sintetis premium dengan port USB charger di setiap baris bangku',
      'Bagasi belakang luas dengan kursi baris paling belakang dapat dilipat (folding rear seat)'
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
      {
        name: 'Canter Bus Microbus 19+1 Seats Standard MT',
        transmission: 'MT',
        price: 465000000,
        priceFormatted: 'Rp 465.000.000',
        dpEstimate: 'Rp 40 Jt-an',
        cicilanEstimate: 'Rp 9,2 Jt-an',
        tier: 'Microbus 19+1 Standard',
        transmissionDetail: '5-Speed Manual M025S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-bus/canter.webp',
        highlights: [
          'Unit bus utuh bergaransi resmi siap langsung menghasilkan profit usaha',
          'AC ducting dingin merata dan audio entertainment 6 speakers',
          'Kabin lapang 19+1 kursi berkonfigurasi ergonomis untuk operasional travel & antar-jemput'
        ]
      },
      {
        name: 'Canter Bus Microbus 19+1 Seats Executive Reclining MT',
        transmission: 'MT',
        price: 480000000,
        priceFormatted: 'Rp 480.000.000',
        dpEstimate: 'Rp 44 Jt-an',
        cicilanEstimate: 'Rp 9,5 Jt-an',
        tier: 'Microbus 19+1 Executive',
        transmissionDetail: '5-Speed Manual M025S5',
        groundClearance: '200 mm',
        image: '/images/cars/canter-bus/canter.webp',
        highlights: [
          'Kursi reclining mewah dengan armrest dan USB fast charging port di setiap baris',
          'Plafon tinggi elegan dengan ambient reading lights',
          'Suspensi khusus microbus menghasilkan peredaman getaran lembut standar transportasi eksekutif'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter Bus dirancang untuk memaksimalkan keuntungan usaha pariwisata, travel antarkota, shuttle eksekutif, dan transportasi antar-jemput karyawan. Unit bus utuh siap jalan dengan kabin tinggi ber-AC dingin dan kursi reclining.'
  },

  // Canter Extra Long Bus
  {
    slug: 'canter-extra-long-bus',
    name: 'Canter Extra Long Bus',
    tagline: 'Bus 6 Roda Panjang 7,5 Meter 20+ Seats - Mewah, Nyaman & Profit Maksimal',
    category: 'Bus',
    segment: 'commercial',
    badge: 'LONG BUS 6 BAN',
    startingPrice: 'Rp 485.000.000',
    startingPriceNum: 485000000,
    dpStart: 'Rp 45 Jt-an',
    dpMinNum: 45000000,
    cicilanStart: 'Rp 9,6 Jt/bln',
    cicilanNum: 9600000,
    heroImage: '/images/cars/canter-extra-long-bus/canter-extra-long-bus.webp',
    image: '/images/cars/canter-extra-long-bus/extra-long-bus.webp',
    galleryImages: [
      '/images/cars/canter-extra-long-bus/extra-long-bus.webp',
      '/images/cars/canter-extra-long-bus/canter-extra-long-bus.webp'
    ],
    colors: [
      { name: 'Solid White', hex: '#F5F5F5' }
    ],
    highlights: [
      'Bodi bus ekstra panjang 7.500 mm berkapasitas 20 hingga 24 kursi penumpang paling lega',
      'Sasis 6 roda FE 84G BCL tapak lebar dengan mesin perkasa 136 PS & torsi 420 Nm',
      'Desain interior eksekutif dengan plafon tinggi, tirai jendela elegan & AC Nippon Denso Ducting',
      'Kompartemen bagasi samping & belakang ekstra dalam untuk koper penumpang travel bandara'
    ],
    keySpecs: {
      seating: '20 - 24 Penumpang',
      engine: '3.9L 4V21-2AT1 Common Rail Turbo Euro 4',
      power: '136 PS @ 2.500 RPM / 420 Nm',
      transmission: '5-Speed Manual M035S5',
      groundClearance: '210 mm',
      fuelType: 'Diesel (Euro 4)'
    },
    variants: [
      {
        name: 'Canter Extra Long Bus Karoseri Bus MT',
        transmission: 'MT',
        price: 485000000,
        priceFormatted: 'Rp 485.000.000',
        dpEstimate: 'Rp 45 Jt-an',
        cicilanEstimate: 'Rp 9,6 Jt-an',
        tier: 'Karoseri Bus',
        transmissionDetail: '5-Speed Manual M035S5',
        groundClearance: '210 mm',
        image: '/images/cars/canter-extra-long-bus/extra-long-bus.webp',
        highlights: [
          'Panjang bodi ekstra 7,5 meter kapasitas 20 hingga 24 kursi penumpang paling lega',
          'Sasis 6 ban tapak lebar stabil tanpa limbung di kecepatan tinggi jalan tol',
          'Kabin eksekutif nyaman berplafon tinggi dilengkapi AC ganda Nippon Denso Ducting'
        ]
      }
    ],
    description: 'Mitsubishi Fuso Canter Extra Long Bus adalah pilihan puncak bagi operator transportasi eksekutif. Menggabungkan panjang sasis 7,5 meter, sasis 6 roda tapak lebar yang stabil, dan kenyamanan interior premium.'
  }
];

function formatRupiah(num: number): string {
  return 'Rp ' + num.toLocaleString('id-ID');
}

// Terapkan override daftar harga dari Google Sheets jika tersedia
if (rawSheetsData.pricelist && Array.isArray(rawSheetsData.pricelist) && rawSheetsData.pricelist.length > 0) {
  for (const item of rawSheetsData.pricelist as any[]) {
    if (!item.carSlug) continue;
    const car = carsData.find(c => c.slug.toLowerCase() === String(item.carSlug).toLowerCase().trim());
    if (!car) continue;

    if (item.variantName) {
      const variant = car.variants.find(v => v.name.toLowerCase().trim() === String(item.variantName).toLowerCase().trim());
      if (variant) {
        if (item.price && !isNaN(Number(item.price))) {
          const p = Number(item.price);
          variant.price = p;
          variant.priceFormatted = formatRupiah(p);
        }
        if (item.dpEstimate) variant.dpEstimate = String(item.dpEstimate);
        if (item.cicilanEstimate) variant.cicilanEstimate = String(item.cicilanEstimate);
      }
    }

    if (item.startingPriceNum && !isNaN(Number(item.startingPriceNum))) {
      car.startingPriceNum = Number(item.startingPriceNum);
      car.startingPrice = formatRupiah(car.startingPriceNum);
    }
    if (item.dpStart) car.dpStart = String(item.dpStart);
    if (item.cicilanStart) car.cicilanStart = String(item.cicilanStart);
  }

  // Sinkronkan harga terendah (startingPrice) mobil dari varian termurahnya
  for (const car of carsData) {
    if (car.variants.length > 0) {
      const validPrices = car.variants.map(v => v.price).filter(p => typeof p === 'number' && p > 0);
      if (validPrices.length > 0) {
        const minPrice = Math.min(...validPrices);
        if (minPrice > 0 && isFinite(minPrice)) {
          car.startingPriceNum = minPrice;
          car.startingPrice = formatRupiah(minPrice);
        }
      }
    }
  }
}

export function getCarBySlug(slug: string): CarModel | undefined {
  return carsData.find(c => c.slug === slug);
}
