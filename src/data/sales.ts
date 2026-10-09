import rawSheetsData from './sheetsData.json';

export interface SalesContact {
  name: string;
  nickname: string;
  role: string;
  nip?: string;
  dealer: string;
  dealerBranch: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  experienceYears: number;
  unitsDelivered: number;
  rating: number;
  operatingHours: string;
  googleMapsUrl: string;
  perks: {
    title: string;
    shortDesc?: string;
    description: string;
    icon: string;
  }[];
}

const defaultSalesData: SalesContact = {
  name: "Kanhadi",
  nickname: "Kanhadi",
  role: "Senior Certified Sales Consultant",
  nip: "LB20050013",
  dealer: "PT. Lautan Berlian Kebon Jeruk",
  dealerBranch: "Dealer Resmi Mitsubishi Motors 3S Jakarta Barat",
  address: "Jl. Panjang No.8, RT.11/RW.10, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, DKI Jakarta 11530",
  city: "Jakarta & Jabodetabek",
  phone: "+62 878-0809-7263",
  whatsapp: "6287808097263",
  whatsappDisplay: "+62 878-0809-7263",
  email: "kanhadi.mitsubishijakarta@gmail.com",
  experienceYears: 12,
  unitsDelivered: 850,
  rating: 4.8,
  operatingHours: "Senin sampai Minggu: 08.00 - 21.00 WIB (Fast response via WhatsApp)",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PT+Lautan+Berlian+Kebon+Jeruk+Jl+Panjang+No+8+Jakarta+Barat",
  perks: [
    {
      title: "DP 0% & Bunga Rendah",
      shortDesc: "Program cicilan ringan",
      description: "Pilihan pembiayaan fleksibel DP 0%, bunga rendah kompetitif, dan tenor hingga 5 tahun dari leasing rekanan resmi.",
      icon: "percent"
    },
    {
      title: "Proses Mudah & Cepat",
      shortDesc: "Data dibantu tuntas",
      description: "Konsultasi kelayakan kredit, berkas dijemput langsung ke alamat Anda, estimasi proses cepat 1-3 hari kerja sampai approve.",
      icon: "shield-check"
    },
    {
      title: "Diskon Maksimal",
      shortDesc: "Penawaran OTR terbaik",
      description: "Diskon maksimal, cashback menarik, dan fasilitas tukar tambah (trade-in) semua merk dengan taksiran transparan.",
      icon: "refresh"
    },
    {
      title: "Unit Ready Stock",
      shortDesc: "Armada siap kirim",
      description: "Ketersediaan armada Truk Fuso Canter, L300, dan mobil penumpang resmi siap kirim cepat ke wilayah Jakarta & Jabodetabek.",
      icon: "car"
    },
    {
      title: "Dealer Resmi 3S Terbesar",
      shortDesc: "Garansi pabrik & servis",
      description: "Jaminan unit resmi PT MMKSI, garansi pabrik 3 tahun / 100.000 KM, dan gratis paket servis berkala.",
      icon: "building"
    },
    {
      title: "Bonus Aksesoris Melimpah",
      shortDesc: "Kaca film, karpet & souvenir",
      description: "Gratis kaca film bergaransi, karpet original, dudukan plat, APAR, dan merchandise resmi Mitsubishi.",
      icon: "gift"
    }
  ]
};

const sheetsSales = (rawSheetsData as { sales?: Partial<SalesContact> | null }).sales;

let cleanWA = defaultSalesData.whatsapp;
if (sheetsSales?.whatsapp) {
  let wa = String(sheetsSales.whatsapp).replace(/[^0-9]/g, '');
  if (wa.startsWith('0')) wa = '62' + wa.slice(1);
  if (wa) cleanWA = wa;
}

export const salesData: SalesContact = {
  ...defaultSalesData,
  ...(sheetsSales || {}),
  whatsapp: cleanWA
};

export function getWhatsAppLink(customMessage?: string): string {
  const baseMessage = customMessage || `Halo ${salesData.nickname || salesData.name}, saya dapat kontak dari website. Mau tanya info promo dan simulasi kredit mobil Mitsubishi terbaru. Terima kasih!`;
  return `https://wa.me/${salesData.whatsapp}?text=${encodeURIComponent(baseMessage)}`;
}
