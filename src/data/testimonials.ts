import rawSheetsData from './sheetsData.json';

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

const defaultTestimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    customerName: 'Keluarga Konsumen Destinator',
    occupation: 'Pembelian Mobil Keluarga',
    location: 'Jakarta Barat',
    carPurchased: 'Mitsubishi Destinator 2026',
    rating: 5,
    deliveryDate: 'Oktober 2026',
    comment: 'Pelayanan Om Hadi sangat memuaskan, proses kredit dibantu cepat dan unit diantar langsung ke rumah lengkap dengan serah terima resmi bersama tim Lautan Berlian.',
    image: '/images/delivery/serah-terima-destinator.png'
  },
  {
    id: 'testi-2',
    customerName: 'Mitra Usaha Logistik & Niaga',
    occupation: 'Armada Niaga & Distribusi',
    location: 'Jabodetabek',
    carPurchased: 'Mitsubishi Fuso Canter Euro 4',
    rating: 5,
    deliveryDate: 'Oktober 2026',
    comment: 'Pengadaan armada truk Canter dibantu tuntas dengan program DP ringan dan proses berkas cepat. Unit ready stock langsung siap beroperasi di lapangan.',
    image: '/images/delivery/serah-terima-canter.jpg'
  },
  {
    id: 'testi-3',
    customerName: 'Dealer Resmi 3S Kebon Jeruk',
    occupation: 'Tim Penjualan & Servis MMKSI 3S',
    location: 'Jl. Panjang No. 8, Jakarta Barat',
    carPurchased: 'PT Lautan Berlian Kebon Jeruk',
    rating: 5,
    deliveryDate: 'Dealer Resmi MMKSI & Fuso',
    comment: 'Komitmen pelayanan purna jual terbaik langsung dari dealer resmi 3S PT Lautan Berlian Kebon Jeruk. Kami siap mendampingi kebutuhan kendaraan penumpang & niaga Anda.',
    image: '/images/delivery/dealer-lautan-berlian-team.jpg'
  }
];

export const testimonialsData: TestimonialItem[] = (
  rawSheetsData.testimonials && rawSheetsData.testimonials.length > 0
    ? (rawSheetsData.testimonials as any[]).map((item, idx) => ({
        id: item.id || `testi-${idx + 1}`,
        customerName: item.customerName || 'Pelanggan Mitsubishi',
        occupation: item.occupation || '',
        location: item.location || 'Jakarta',
        carPurchased: item.carPurchased || 'Mitsubishi',
        rating: Number(item.rating) || 5,
        deliveryDate: item.deliveryDate || '',
        comment: item.comment || '',
        image: item.image || undefined
      }))
    : defaultTestimonialsData
);

