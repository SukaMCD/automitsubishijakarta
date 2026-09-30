export interface TestimonialItem {
  id: string;
  customerName: string;
  occupation: string;
  location: string;
  carPurchased: string;
  rating: number;
  deliveryDate: string;
  comment: string;
  image?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    customerName: 'Bapak Hendra Wijaya',
    occupation: 'Wiraswasta / Pengusaha',
    location: 'Jakarta Selatan',
    carPurchased: 'Pajero Sport Dakar Ultimate 4x2',
    rating: 5,
    deliveryDate: 'September 2026',
    comment: 'Pelayanan Om Hadi luar biasa memuaskan! Data saya sempat ragu karena berkas usaha, tapi dibantu sampai tuntas dan leasing langsung approve 2 hari. Mobil sampai rumah tepat waktu dan bonus aksesorisnya komplit. Recommended sales!'
  },
  {
    id: 'testi-2',
    customerName: 'Ibu Ratna Paramitha',
    occupation: 'Dokter Spesialis',
    location: 'Bintaro, Tangerang Selatan',
    carPurchased: 'New Xpander Ultimate CVT White Pearl',
    rating: 5,
    deliveryDate: 'Agustus 2026',
    comment: 'Awalnya cuma tanya-tanya simulasi kredit via WhatsApp jam 9 malam, langsung dibalas ramah sama Om Hadi. Besoknya dibawakan unit test drive ke rumah. Anak-anak dan suami langsung suka sama suspensi nyamannya. Terima kasih Om Hadi!'
  },
  {
    id: 'testi-3',
    customerName: 'Mas Dimas Pratama',
    occupation: 'IT Consultant',
    location: 'Jakarta Barat',
    carPurchased: 'Mitsubishi XForce Ultimate',
    rating: 5,
    deliveryDate: 'Agustus 2026',
    comment: 'Puas banget ambil XForce di Om Hadi. Diskonnya paling jujur dan transparan dibanding dealer lain yang sempat saya kontak. Sound Yamaha-nya mantap banget buat macet-macetan di Sudirman. Sukses terus Om Hadi!'
  },
  {
    id: 'testi-4',
    customerName: 'Bapak Suryadi',
    occupation: 'Logistik & Distribusi',
    location: 'Bekasi Timur',
    carPurchased: 'Colt L300 Euro 4 Flat Deck',
    rating: 5,
    deliveryDate: 'Juli 2026',
    comment: 'Beli 2 unit L300 untuk armada logistik kantor. Pengurusan STNK, Keur, dan plat nomor sangat cepat. Om Hadi sangat paham seluk beluk kredit kendaraan niaga. Nanti kalau nambah armada pasti kontak Om Hadi lagi.'
  }
];
