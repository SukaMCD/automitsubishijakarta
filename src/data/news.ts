import rawSheetsData from './sheetsData.json';

export interface NewsItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  readTime: string;
}

const defaultNewsList: NewsItem[] = [
  {
    slug: 'tips-merawat-transmisi-cvt-mitsubishi-xpander',
    title: 'Tips Merawat Transmisi CVT New Xpander Agar Selalu Responsif & Awet',
    category: 'Tips & Perawatan',
    date: '3 Oktober 2026',
    author: 'Kanhadi',
    image: '/images/cars/xpander/xpander-hero.webp',
    readTime: '4 menit baca',
    excerpt: 'Transmisi CVT pada New Xpander menawarkan efisiensi bahan bakar dan kehalusan berkendara luar biasa. Simak cara merawatnya agar tetap prima hingga ratusan ribu kilometer.',
    content: `Transmisi Continuously Variable Transmission (CVT) pada Mitsubishi New Xpander dirancang untuk memberikan akselerasi yang halus tanpa hentakan gigi konvensional, sekaligus memaksimalkan efisiensi konsumsi bahan bakar di lalu lintas perkotaan Jakarta yang padat.

Agar performa transmisi CVT Xpander Anda selalu optimal dan memiliki usia pakai panjang, berikut beberapa langkah perawatan penting yang wajib diperhatikan:

### 1. Rutin Mengganti Oli Khusus CVT Fluid
Transmisi CVT bekerja menggunakan sabuk baja (*steel belt*) dan puli presisi tinggi yang membutuhkan pelumasan khusus berspesifikasi tinggi (Mitsubishi Motors Genuine CVT Fluid ECO J4). Hindari memakai oli matik ATF konvensional karena viskositas dan zat aditifnya sangat berbeda. Lakukan pengecekan setiap servis berkala di bengkel resmi Mitsubishi Lautan Berlian.

### 2. Hindari Posisi 'D' Saat Berhenti Lama di Kemacetan
Saat terjebak lampu merah atau macet total di jalur Jakarta, biasakan memindahkan tuas transmisi ke posisi 'N' (Netral) dan aktifkan fitur Electronic Parking Brake (EPB) dengan Brake Auto Hold. Membiarkan transmisi di posisi 'D' sambil menginjak rem dalam waktu lama membebani konverter torsi dan meningkatkan suhu oli transmisi.

### 3. Kendalikan Gaya Akselerasi
Transmisi CVT bekerja paling efisien dengan injakan pedal gas yang lembut dan bertahap (*smooth throttle input*). Hindari kebiasaan menginjak pedal gas secara mendadak (kickdown kasar) dari posisi diam, karena dapat memberikan beban torsi kejut mendadak pada puli dan sabuk baja CVT.

### 4. Manfaatkan Gratis Servis Paket SMART
Setiap pembelian Mitsubishi New Xpander di Dealer Lautan Berlian Kebon Jeruk otomatis mendapatkan fasilitas Gratis Paket SMART Silver hingga 50.000 KM atau 4 tahun. Manfaatkan fasilitas ini untuk memastikan seluruh sistem transmisi dan mesin selalu terkalibrasi oleh teknisi bersertifikat pabrikan.`
  },
  {
    slug: 'komparasi-pajero-sport-dakar-vs-dakar-ultimate',
    title: 'Komparasi Lengkap: New Pajero Sport Dakar 4x2 vs Dakar Ultimate, Mana Pilihan Anda?',
    category: 'Panduan Membeli',
    date: '28 September 2026',
    author: 'Kanhadi',
    image: '/images/cars/pajero-sport/pajero-sport-hero.webp',
    readTime: '5 menit baca',
    excerpt: 'Bingung memilih antara Pajero Sport varian Dakar 4x2 standar atau Dakar Ultimate? Ketahui perbedaan fitur keselamatan aktif, interior mewah, dan selisih keuntungannya di sini.',
    content: `Mitsubishi Pajero Sport terus mempertahankan reputasinya sebagai SUV ladder frame terfavorit di kalangan eksekutif dan keluarga Indonesia. Dua varian diesel paling diminati di pasar Jakarta adalah Dakar 4x2 AT dan Dakar Ultimate 4x2 AT.

Keduanya mengusung mesin legendaris berkode 4N15 berkapasitas 2.400 cc MIVEC Turbo Diesel Intercooler bertenaga 181 PS dan torsi perkasa 430 Nm, dipadukan transmisi otomatis 8-percepatan yang halus dan tangguh. Lalu apa saja pembeda utama di antara keduanya?

### 1. Sistem Keselamatan Aktif Canggih (Advanced ADAS)
Varian Dakar Ultimate dilengkapi paket keselamatan aktif terlengkap:
- **Forward Collision Mitigation (FCM)**: Mencegah risiko tabrakan depan dengan pengereman darurat otomatis.
- **Adaptive Cruise Control (ACC)**: Mengikuti kecepatan mobil di depan secara otomatis di jalan tol.
- **Blind Spot Warning (BSW) & Lane Change Assist (LCA)**: Mendeteksi kendaraan di titik buta kaca spion.
- **Rear Cross Traffic Alert (RCTA)**: Membantu deteksi lalu lintas silang saat mundur keluar parkir.
- **Ultrasonic Misacceleration Mitigation System (UMS)**: Mencegah mobil menabrak akibat salah injak pedal gas di ruang sempit.

### 2. Interior & Fitur Kenyamanan
Pada Dakar Ultimate, penumpang belakang dimanjakan dengan Roof Monitor 12,1 inci dengan konektivitas hiburan lengkap. Sementara varian Dakar 4x2 reguler dilengkapi fitur Power Sunroof elektrik yang memberikan kesan lapang dan sporty bagi pengemudi dan penumpang depan.

### 3. Power Tailgate dengan Hands-Free Sensor
Dakar Ultimate dilengkapi pintu bagasi otomatis dengan sensor tendangan kaki (*kick sensor*) yang sangat praktis saat membawa barang belanjaan tanpa perlu menyentuh tuas bagasi.

### Kesimpulan Rekomendasi
Pilihlah **Dakar Ultimate** jika prioritas utama Anda adalah perlindungan keselamatan keluarga terlengkap dan kenyamanan hiburan anak-anak di baris belakang. Sementara **Dakar 4x2 reguler** adalah pilihan tepat bagi Anda yang menginginkan ketangguhan performa Pajero Sport dengan sensasi kemewahan Sunroof elektrik dan nilai investasi paling efisien.`
  },
  {
    slug: 'keunggulan-dynamic-sound-yamaha-mitsubishi-xforce',
    title: 'Mengenal Dynamic Sound Yamaha Premium di Mitsubishi XForce: Sensasi Konser di Kabin',
    category: 'Fitur & Teknologi',
    date: '15 September 2026',
    author: 'Kanhadi',
    image: '/images/cars/xforce/xforce-hero.webp',
    readTime: '3 menit baca',
    excerpt: 'Hasil kolaborasi perdana Mitsubishi Motors dan Yamaha Audio menghasilkan kualitas akustik kabin terbaik di kelas compact SUV. Simak 4 mode audio andalannya.',
    content: `Salah satu daya tarik terbesar Mitsubishi XForce yang menjadikannya primadona compact SUV masa kini adalah hadirnya sistem audio **Dynamic Sound Yamaha Premium**. 

Sistem ini bukan sekadar memasang speaker berlabel Yamaha, melainkan dirancang langsung bersama insinyur akustik Yamaha sejak tahap perancangan bodi rangka XForce.

### 1. Kalibrasi Akustik 8 Speaker Presisi
Sistem ini menggunakan konfigurasi 8 speaker berkualitas tinggi, terdiri dari tweeter di pilar A, woofer di pintu depan, dan speaker koaksial di pintu belakang. Material membran speaker menggunakan teknologi eksklusif Yamaha yang mampu mereproduksi vokal jernih dan dentuman bas rendah yang bertenaga tanpa distorsi.

### 2. Empat Pilihan Karakter Suara (Sound Mode)
Pengemudi dapat menyesuaikan tata suara sesuai genre musik dan suasana hati melalui layar sentuh 12,3 inci:
- **Lively**: Karakter vokal hidup dan cerah, cocok untuk lagu pop dan jazz modern.
- **Signature**: Karakter audio panggung seimbang (*audiophile*), mempertegas petikan instrumen akustik.
- **Powerful**: Menitikberatkan pada kedalaman bass dan dinamika drum, cocok untuk musik RnB, rock, dan EDM.
- **Relaxing**: Suara lembut dan tenang untuk menemani perjalanan jauh yang menenangkan.

### 3. Fitur Speed Compensated Volume (SCV)
Fitur SCV cerdas mampu mendeteksi tingkat kebisingan jalan dan deru angin saat kecepatan mobil bertambah, lalu secara otomatis mengoreksi volume dan frekuensi nada bass/treble agar kualitas audio yang didengar penumpang tetap stabil di segala kondisi jalanan Jakarta.

Ingin merasakan langsung kejernihan suara audio Yamaha di kabin Mitsubishi XForce? Anda dapat memesan jadwal test drive gratis langsung ke rumah atau kantor bersama kami.`
  },
  {
    slug: 'keunggulan-mitsubishi-colt-l300-euro-4-usaha-logistik',
    title: 'Alasan Mitsubishi Colt L300 Euro 4 Selalu Jadi Pilihan Utama Armada Bisnis Jakarta',
    category: 'Kendaraan Niaga',
    date: '10 September 2026',
    author: 'Kanhadi',
    image: '/images/cars/l300/l300-hero.webp',
    readTime: '4 menit baca',
    excerpt: 'Dikenal legendaris sejak puluhan tahun, New Colt L300 hadir dengan mesin Euro 4 yang lebih bertenaga, kargo 8% lebih luas, dan konsumsi solar yang tetap sangat irit.',
    content: `Mitsubishi Colt L300 telah menjadi tulang punggung mobilitas niaga dan logistik di Indonesia selama lebih dari 4 dekade. Di era standar emisi Euro 4 saat ini, New Colt L300 hadir dengan pembaruan signifikan yang semakin memperkuat posisinya sebagai raja pikap niaga ringan di Jabodetabek.

Bagi para pelaku usaha di Jakarta, berikut beberapa alasan utama mengapa New Colt L300 tetap menjadi investasi paling menguntungkan untuk armada operasional:

### 1. Mesin 4N14 Turbo Diesel Euro 4 Bertenaga & Irit
New Colt L300 dibekali mesin diesel 2.268 cc bertipe 4N14 DOHC 4 Silinder Segaris Direct Injection dengan Intercooler Common Rail Turbocharger. Tenaga yang dihasilkan melonjak hingga 99,25 PS dan torsi 200 Nm (meningkat sekitar 40% dibanding generasi sebelumnya). Tenaga berlimpah ini sangat terasa saat membawa muatan berat di jalanan menanjak maupun tol antar-kota.

### 2. Kapasitas Kargo Lebih Panjang 20 cm (+8% Lebih Luas)
Ukuran bak belakang New L300 kini lebih panjang 200 mm menjadi 2.630 mm, memberikan peningkatan kapasitas muat hingga 8% lebih lega. Ini memungkinkan pengusaha mengangkut lebih banyak volume barang dalam sekali jalan, menghemat waktu dan biaya operasional bahan bakar.

### 3. Kabin Lebih Lega & Nyaman
Kabin pengemudi diperbarui dengan ruang kaki yang lebih luas, spedometer modern, pegangan pintu baru, serta posisi duduk yang ergonomis dengan visibilitas jalan yang sangat jelas untuk bermanuver di gang sempit perkotaan.

### 4. Nilai Jual Kembali Paling Stabil & Suku Cadang Melimpah
Dukungan jaringan bengkel resmi Mitsubishi Lautan Berlian Kebon Jeruk memastikan ketersediaan suku cadang fast-moving dan kemudahan servis armada bisnis Anda. Nilai jual kembali (resale value) L300 terbukti paling tinggi dan stabil di pasaran mobil niaga.`
  }
];

export function formatImageUrl(url?: string): string {
  if (!url) return '/images/cars/xpander/xpander-optimized.webp';
  const trimmed = url.trim();
  const driveMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return trimmed;
}

export const newsList: NewsItem[] = (
  rawSheetsData.news && (rawSheetsData.news as any[]).length > 0
    ? (rawSheetsData.news as any[]).map((item, idx) => ({
        slug: item.slug || `berita-${idx + 1}`,
        title: item.title || 'Berita Mitsubishi Terbaru',
        category: item.category || 'Berita & Promo',
        date: item.date || 'Terbaru',
        author: item.author || 'Kanhadi',
        image: formatImageUrl(item.image),
        excerpt: item.excerpt || '',
        content: item.content || '',
        readTime: item.readTime || '3 menit baca'
      }))
    : defaultNewsList
);

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsList.find(n => n.slug === slug);
}
