import rawSheetsData from './sheetsData.json';

export interface SalesContact {
  name: string;
  nickname: string;
  role: string;
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
  operatingHours: "Senin – Minggu: 08.00 – 21.00 WIB (Fast Response 24 Jam via WhatsApp)",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PT+Lautan+Berlian+Kebon+Jeruk+Jl+Panjang+No+8+Jakarta+Barat",
  perks: [
    {
      title: "Dealer Resmi 3S Terbesar",
      shortDesc: "Garansi 3 Th & Paket SMART",
      description: "Jaminan unit resmi PT MMKSI, garansi pabrik 3 tahun / 100.000 KM, dan gratis paket servis SMART.",
      icon: "building"
    },
    {
      title: "Data Dibantu Sampai Approve",
      shortDesc: "Proses cepat 1–3 hari kerja",
      description: "Konsultasi BI Checking / SLIK OJK, proses berkas dijemput ke rumah/kantor, approval kilat 1-3 hari.",
      icon: "shield-check"
    },
    {
      title: "DP Minim & Bunga 0%",
      shortDesc: "Pilihan leasing terpercaya",
      description: "Pilihan pembiayaan fleksibel dari leasing rekanan terpercaya: Dipo Star Finance, BCA Finance, Maybank, Mandiri Tunas Finance.",
      icon: "percent"
    },
    {
      title: "Layanan Test Drive di Rumah",
      shortDesc: "Gratis antar ke alamat Anda",
      description: "Ingin coba mobil langsung bersama keluarga? Kami siap bawa unit test drive ke rumah atau kantor Anda.",
      icon: "car"
    },
    {
      title: "Tukar Tambah (Trade-In) Tertinggi",
      shortDesc: "Trade-in semua merk mobil",
      description: "Menerima tukar tambah semua merk mobil lama Anda dengan taksiran harga pasar paling transparan dan tinggi.",
      icon: "refresh"
    },
    {
      title: "Bonus Aksesoris Melimpah",
      shortDesc: "Kaca film, karpet & souvenir",
      description: "Gratis kaca film bergaransi (Solar Gard/V-Kool), karpet original, dudukan plat, APAR, dan merchandise eksklusif.",
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
