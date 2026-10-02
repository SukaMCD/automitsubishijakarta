export interface SalesContact {
  name: string;
  nickname: string;
  role: string;
  dealer: string;
  dealerBranch: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string; // international format for links: 628...
  whatsappDisplay: string;
  email: string;
  experienceYears: number;
  unitsDelivered: number;
  rating: number;
  operatingHours: string;
  googleMapsUrl: string;
  perks: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const salesData: SalesContact = {
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
      description: "Jaminan unit resmi PT MMKSI, garansi pabrik 3 tahun / 100.000 KM, dan gratis paket servis SMART.",
      icon: "building"
    },
    {
      title: "Data Dibantu Sampai Approve",
      description: "Konsultasi BI Checking / SLIK OJK, proses berkas dijemput ke rumah/kantor, approval kilat 1-3 hari.",
      icon: "shield-check"
    },
    {
      title: "DP Minim & Bunga 0%",
      description: "Pilihan pembiayaan fleksibel dari leasing rekanan terpercaya: Dipo Star Finance, BCA Finance, Maybank, Mandiri Tunas Finance.",
      icon: "percent"
    },
    {
      title: "Layanan Test Drive di Rumah",
      description: "Ingin coba mobil langsung bersama keluarga? Kanhadi siap bawa unit test drive ke rumah atau kantor Anda.",
      icon: "car"
    },
    {
      title: "Tukar Tambah (Trade-In) Tertinggi",
      description: "Menerima tukar tambah semua merk mobil lama Anda dengan taksiran harga pasar paling transparan dan tinggi.",
      icon: "refresh"
    },
    {
      title: "Bonus Aksesoris Melimpah",
      description: "Gratis kaca film bergaransi (Solar Gard/V-Kool), karpet original, dudukan plat, APAR, dan merchandise eksklusif.",
      icon: "gift"
    }
  ]
};

export function getWhatsAppLink(customMessage?: string): string {
  const baseMessage = customMessage || `Halo Kanhadi, saya dapat kontak dari website. Mau tanya info promo dan simulasi kredit mobil Mitsubishi terbaru. Terima kasih!`;
  return `https://wa.me/${salesData.whatsapp}?text=${encodeURIComponent(baseMessage)}`;
}
