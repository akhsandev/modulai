/**
 * KONFIGURASI APLIKASI DEKLARASI PEMILOS SULSEL 2026
 */

const APP_CONFIG = {
  // Title & Metadata
  appName: "Deklarasi Pilketos Serentak Sulsel 2026",
  year: 2026,
  province: "Sulawesi Selatan",

  // URL Default Google Apps Script Web App (Bisa diisi atau diset via Settings di web)
  // Contoh: "https://script.google.com/macros/s/AKfycbx.../exec"
  gasEndpointUrl: localStorage.getItem("pemilos_gas_endpoint") || "",

  // Daftar 24 Kabupaten & Kota di Sulawesi Selatan
  kabupatenKotaSulsel: [
    "Kota Makassar",
    "Kabupaten Gowa",
    "Kabupaten Maros",
    "Kabupaten Pangkajene dan Kepulauan (Pangkep)",
    "Kabupaten Barru",
    "Kabupaten Bone",
    "Kabupaten Soppeng",
    "Kabupaten Wajo",
    "Kabupaten Sidenreng Rappang (Sidrap)",
    "Kabupaten Pinrang",
    "Kota Parepare",
    "Kabupaten Enrekang",
    "Kabupaten Luwu",
    "Kabupaten Luwu Utara",
    "Kabupaten Luwu Timur",
    "Kota Palopo",
    "Kabupaten Tana Toraja",
    "Kabupaten Toraja Utara",
    "Kabupaten Sinjai",
    "Kabupaten Bulukumba",
    "Kabupaten Bantaeng",
    "Kabupaten Jeneponto",
    "Kabupaten Takalar",
    "Kabupaten Kepulauan Selayar"
  ],

  // Naskah Ikrar Resmi
  naskahDeklarasi: {
    judul: "Naskah Ikrar Deklarasi",
    subjudul: "DEKLARASI KAMPANYE DAMAI PILKETOS SULAWESI SELATAN TAHUN 2026",
    pembuka: "Kami, seluruh calon Ketua dan Wakil Ketua OSIS peserta Pilketos Serentak Provinsi Sulawesi Selatan Tahun 2026, dengan penuh kesadaran dan rasa tanggung jawab menyatakan:",
    poin: [
      "Pertama. Siap melaksanakan kampanye secara damai, santun, jujur, adil, dan bertanggung jawab.",
      "Kedua. Siap menyampaikan visi, misi, dan program secara positif tanpa menjatuhkan, menghina, atau menyebarkan informasi yang merugikan calon lain.",
      "Ketiga. Siap menghormati perbedaan pilihan dan menjunjung tinggi persaudaraan antarsiswa.",
      "Keempat. Siap menolak segala bentuk kampanye negatif, provokasi, perundungan (bullying), intimidasi, dan diskriminasi.",
      "Kelima. Siap menerima hasil pemilihan dengan sportif serta menghormati pilihan seluruh pemilih.",
      "Keenam. Siap menjadikan Pilketos sebagai pembelajaran demokrasi bagi generasi muda Sulawesi Selatan."
    ],
    penutup: [
      "Kami berbeda pilihan, tetapi tetap satu sebagai pelajar.",
      "Kami berkompetisi untuk berprestasi, bukan untuk bermusuhan.",
      "Kami siap menyukseskan Pilketos Serentak Provinsi Sulawesi Selatan Tahun 2026.",
      "Beda pilihan, tetap bersaudara!",
      "Pilketos Sulsel: Damai! Demokratis! Jujur! Adil!"
    ]
  }
};
