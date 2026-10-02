export interface CommercialSpecItem {
  label: string;
  value: string;
}

export interface CommercialSpecCategory {
  id: string;
  title: string;
  group: 'dimensi' | 'mesin' | 'sasis' | 'kelistrikan' | 'performa' | 'fitur';
  icon: string;
  items: CommercialSpecItem[];
}

export interface CommercialQuickStat {
  label: string;
  value: string;
  sublabel: string;
  icon: string;
}

export interface CommercialModelSpec {
  modelName: string;
  quickStats: CommercialQuickStat[];
  categories: CommercialSpecCategory[];
}

export const commercialSpecs: Record<string, CommercialModelSpec> = {
  "canter-fe71": {
    "modelName": "Canter FE 71 L",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "108 PS",
        "sublabel": "108/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "300 Nm",
        "sublabel": "300/1.000 - 2.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "5.200 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "6.425 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "3.350 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "6.425 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.750 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "2.110 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "200 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.390 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.380 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.050 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "5.200 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "110 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "35 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "6.9 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-15-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "15x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT4"
          },
          {
            "label": "Tipe",
            "value": "Common Rail"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "108/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "300/1.000 - 2.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M025S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.181 - 2.865 - 1.593 - 1.000 - 0.739"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.181"
          },
          {
            "label": "Tipe Kopling",
            "value": "M025S5"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "4,444"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan",
            "value": "Laminated leaf springs dengan shock absorber"
          },
          {
            "label": "Suspensi Belakang",
            "value": "Laminated leaf springs dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Tipe internal expanding di belakang propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-fe74": {
    "modelName": "Canter FE 74",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "136 PS",
        "sublabel": "136/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "420 Nm",
        "sublabel": "420/1.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "8.250 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "6.365 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "3.350 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "6.365 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.970 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "2.130 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "200 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.400 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.495 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.500 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "8.250 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "118 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "33 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "7.1 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-16-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "16x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT1"
          },
          {
            "label": "Tipe",
            "value": "Common Rail"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "136/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "420/1.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M035S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.380 - 3.028 - 1.700 - 1.000 - 0.722"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.380"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "4.444"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Laminated leaf springs dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Internal expanding type on propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-fe74-hd": {
    "modelName": "Canter FE 74 HD",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "136 PS",
        "sublabel": "136/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "420 Nm",
        "sublabel": "420/1.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "8.250 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "5.960 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "3.350 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "5.960 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.970 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "2.245 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "210 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.400 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.495 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.530 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "8.250 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "95 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "44 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "7.1 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-16-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "16x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT1"
          },
          {
            "label": "Tipe",
            "value": "Common Rail, Turbo Intercooler"
          },
          {
            "label": "Standar Emisi",
            "value": "EURO4"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "136/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "420/1.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M035S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.380 - 3.028 - 1.700 - 1.000 - 0.722"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.380"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "6.166"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Semi elliptic, Laminated leaf springs"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Internal expanding type on propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-fe74-hds": {
    "modelName": "Canter FE 74 HDS",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "136 PS",
        "sublabel": "136/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "420 Nm",
        "sublabel": "420/1.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "8.250 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "5.960 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "3.350 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "5.960 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.970 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "2.245 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "210 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.400 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.495 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.450 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "8.250 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "103 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "44 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "7.1 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-16-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "16x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT1"
          },
          {
            "label": "Tipe",
            "value": "Common Rail, Turbo Intercooler"
          },
          {
            "label": "Standar Emisi",
            "value": "EURO4"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "136/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "420/1.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M035S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.380 - 3.028 - 1.700 - 1.000 - 0.722"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.380"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "5.517"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Laminated leaf spring dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Internal expanding type on propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-fe74l": {
    "modelName": "Canter FE 74 L",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "136 PS",
        "sublabel": "136/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "420 Nm",
        "sublabel": "420/1.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "8.250 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "7.420 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "4.200 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "7.420 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.970 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "2.130 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "200 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.400 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.495 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.570 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "8.250 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "118 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "33 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "8.8 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-16-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "16x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT1"
          },
          {
            "label": "Tipe",
            "value": "Common Rail, Turbo Intercooler"
          },
          {
            "label": "Standar Emisi",
            "value": "EURO4"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "136/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "420/1.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M035S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.380 - 3.028 - 1.700 - 1.000 - 0.722"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.380"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "4.444"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Laminated leaf springs dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Tipe internal expanding di belakang propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-fe-shdx": {
    "modelName": "Canter FE SHDX",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "136 PS",
        "sublabel": "136/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "420 Nm",
        "sublabel": "420/1.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "8.500 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "5.960 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "3.350 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "5.960 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.970 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "2.245 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "210 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.400 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.495 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.560 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "8.500 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "89 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "46 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "7.1 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-16-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "16x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT1"
          },
          {
            "label": "Tipe",
            "value": "Common Rail, Turbo Intercooler"
          },
          {
            "label": "Standar Emisi",
            "value": "EURO4"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "136/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "420/1.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M035S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.380 - 3.028 - 1.700 - 1.000 - 0.722"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.380"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "6.666"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Semi elliptic, Laminated leaf springs"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Internal expanding type on propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-fe71-bc": {
    "modelName": "Canter FE 71 BC",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "108 PS",
        "sublabel": "108/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "300 Nm",
        "sublabel": "300/1.000 - 2.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "5.150 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "4.735 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "70 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "2.500 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "4.735 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.750 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "2.055 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "200 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.390 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.380 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "1.965 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "5.150 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "105 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "27 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "5.2 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-15-12PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "15x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT4"
          },
          {
            "label": "Tipe",
            "value": "Common Rail, Turbo Intercooler"
          },
          {
            "label": "Standar Emisi",
            "value": "EURO4"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "108/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "300/1.000 - 2.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M025S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.181 - 2.865 - 1.593 - 1.000 - 0.739"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.181"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "4.875"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Laminated leaf springs dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Tipe internal expanding di belakang propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "70 liter"
          }
        ]
      }
    ]
  },
  "canter-fe84": {
    "modelName": "Canter FE 84G BC",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "136 PS",
        "sublabel": "136/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "420 Nm",
        "sublabel": "420/1.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "8.000 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "7.130 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "3.850 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "7.130 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "2.035 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "1.595 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "210 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.665 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.560 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.300 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "8.000 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "105 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "39 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "6.9 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-16-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "16x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT1"
          },
          {
            "label": "Tipe",
            "value": "Common Rail, Turbo Intercooler"
          },
          {
            "label": "Standar Emisi",
            "value": "EURO4"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "136/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "420/1.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M035S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.380 - 3.028 - 1.700 - 1.000 - 0.722"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.380"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "5.428"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Laminated leaf springs dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Internal expanding type on propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-bus": {
    "modelName": "Canter Bus",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "108 PS",
        "sublabel": "108/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "300 Nm",
        "sublabel": "300/1.000 - 2.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "5.200 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "6.515 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "3.350 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "6.515 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "1.750 mm"
          },
          {
            "label": "Tinggi Keseluruhan (Approx)",
            "value": "2.580 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "350 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.390 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.380 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Kosong Sebelum Karoseri",
            "value": "2.030 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "5.200 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "105 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "27 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "6.9 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "225/75-R16C"
          },
          {
            "label": "Ukuran Velg",
            "value": "WHEEL,AL(R16X7JJ)"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT4"
          },
          {
            "label": "Tipe",
            "value": "Common Rail, Turbo Intercooler"
          },
          {
            "label": "Standar Emisi",
            "value": "EURO4"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "108/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "300/1.000 - 2.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M025S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.181 - 2.865 - 1.593 - 1.000 - 0.739"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.181"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "4.875"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Laminated leaf springs dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Tipe internal expanding di belakang propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  },
  "canter-extra-long-bus": {
    "modelName": "Canter Extra Long Bus",
    "quickStats": [
      {
        "label": "Tenaga Mesin",
        "value": "136 PS",
        "sublabel": "136/2.500 PS/rpm",
        "icon": "bolt"
      },
      {
        "label": "Torsi Maksimum",
        "value": "420 Nm",
        "sublabel": "420/1.500 Nm/rpm",
        "icon": "gauge"
      },
      {
        "label": "Max G.V.W",
        "value": "8.000 kg",
        "sublabel": "Gross Vehicle Weight",
        "icon": "weight"
      },
      {
        "label": "Panjang Sasis",
        "value": "7.500 mm",
        "sublabel": "Panjang Keseluruhan",
        "icon": "ruler"
      },
      {
        "label": "Tangki BBM",
        "value": "100 liter",
        "sublabel": "Bahan Bakar Solar",
        "icon": "fuel"
      }
    ],
    "categories": [
      {
        "id": "dimensi",
        "title": "Dimensi",
        "group": "dimensi",
        "icon": "ruler",
        "items": [
          {
            "label": "Jarak Sumbu Roda",
            "value": "4.200 mm"
          },
          {
            "label": "Panjang Keseluruhan",
            "value": "7.500 mm"
          },
          {
            "label": "Lebar Keseluruhan",
            "value": "2.035 mm"
          },
          {
            "label": "Tinggi Keseluruhan",
            "value": "1.595 mm"
          },
          {
            "label": "Ground Clearance",
            "value": "210 mm"
          },
          {
            "label": "Jarak roda depan kiri-kanan",
            "value": "1.665 mm"
          },
          {
            "label": "Jarak roda belakang kiri-kanan",
            "value": "1.560 mm"
          }
        ]
      },
      {
        "id": "berat",
        "title": "Berat",
        "group": "dimensi",
        "icon": "weight",
        "items": [
          {
            "label": "Berat Chassis Termasuk Kabin",
            "value": "2.300 kg"
          },
          {
            "label": "Max G.V.W (Gross Vehicle Weight)",
            "value": "8.000 kg"
          }
        ]
      },
      {
        "id": "kemampuan",
        "title": "Kemampuan",
        "group": "dimensi",
        "icon": "speed",
        "items": [
          {
            "label": "Kecepatan Maksimum",
            "value": "105 km/jam"
          },
          {
            "label": "Daya tanjak",
            "value": "39 %"
          },
          {
            "label": "Radius putar minimum",
            "value": "6.9 m"
          }
        ]
      },
      {
        "id": "roda",
        "title": "Roda",
        "group": "sasis",
        "icon": "tire",
        "items": [
          {
            "label": "Ukuran Ban",
            "value": "7.50-16-14PR"
          },
          {
            "label": "Ukuran Velg",
            "value": "16x6.00GS, 6 studs"
          }
        ]
      },
      {
        "id": "mesin",
        "title": "Mesin",
        "group": "mesin",
        "icon": "engine",
        "items": [
          {
            "label": "Model",
            "value": "4V21-2AT1"
          },
          {
            "label": "Tipe",
            "value": "Common Rail"
          },
          {
            "label": "Spesifikasi Mesin",
            "value": "6LVWHP\u0003.RQWUROª(PLVL\u0003 (852\u0017"
          },
          {
            "label": "Jumlah Silinder",
            "value": "4 sejajar"
          },
          {
            "label": "Diameter X Langkah",
            "value": "104x115 mm"
          },
          {
            "label": "Isi Silinder",
            "value": "3.907 cc"
          },
          {
            "label": "Daya Maksimum",
            "value": "136/2.500 PS/rpm"
          },
          {
            "label": "Torsi Maksimum",
            "value": "420/1.500 Nm/rpm"
          }
        ]
      },
      {
        "id": "transmisi",
        "title": "Transmisi",
        "group": "mesin",
        "icon": "transmission",
        "items": [
          {
            "label": "Model Transmisi",
            "value": "M035S5"
          },
          {
            "label": "Tipe Transmisi",
            "value": "Tipe 5 gigi maju (synchromesh), 1 gigi mundur (constantmesh)"
          },
          {
            "label": "Perbandingan Gigi",
            "value": "5.380 - 3.028 - 1.700 - 1.000 - 0.722"
          },
          {
            "label": "Gigi Mundur",
            "value": "5.380"
          },
          {
            "label": "Tipe Kopling",
            "value": "Hydraulic control, single dry plate"
          }
        ]
      },
      {
        "id": "as",
        "title": "As (Gandar)",
        "group": "sasis",
        "icon": "axle",
        "items": [
          {
            "label": "Gandar Depan",
            "value": "Reverse Elliot,”I” Beam Type"
          },
          {
            "label": "Gandar Belakang",
            "value": "Full floating type"
          },
          {
            "label": "Perbandingan Gigi Akhir (Final Gear)",
            "value": "5.428"
          }
        ]
      },
      {
        "id": "setir",
        "title": "Setir",
        "group": "kelistrikan",
        "icon": "steering",
        "items": [
          {
            "label": "Tipe Kemudi",
            "value": "Ball nut type with power steering, tilt & telescopic steering column"
          }
        ]
      },
      {
        "id": "suspensi",
        "title": "Suspensi",
        "group": "sasis",
        "icon": "suspension",
        "items": [
          {
            "label": "Suspensi Depan & Belakang",
            "value": "Long tapered leaf springs dengan shock absorber"
          }
        ]
      },
      {
        "id": "rem",
        "title": "Rem",
        "group": "sasis",
        "icon": "brake",
        "items": [
          {
            "label": "Rem Kaki (Service Brake)",
            "value": "Sistem Hidraulis dengan Vacuum Servo Assistance, Dual Circuit"
          },
          {
            "label": "Rem Tangan (Parking Brake)",
            "value": "Internal expanding type on propeller shaft"
          },
          {
            "label": "Rem Pembantu (Exhaust Brake)",
            "value": "Sistem pengereman gas buang"
          }
        ]
      },
      {
        "id": "kelistrikan",
        "title": "Sistem Kelistrikan",
        "group": "kelistrikan",
        "icon": "battery",
        "items": [
          {
            "label": "Tegangan Accu / Battery",
            "value": "24 V"
          }
        ]
      },
      {
        "id": "bahan-bakar",
        "title": "Bahan Bakar",
        "group": "mesin",
        "icon": "fuel",
        "items": [
          {
            "label": "Kapasitas Tangki BBM",
            "value": "100 liter"
          }
        ]
      }
    ]
  }
};

export function getCommercialSpec(slug: string): CommercialModelSpec | undefined {
  return commercialSpecs[slug];
}
