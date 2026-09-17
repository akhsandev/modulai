# Aplikasi Penandatanganan Deklarasi Pemilos Serentak Sulawesi Selatan 2026

Aplikasi berbasis web modern untuk proses penandatanganan pakta integritas dan ikrar kampanye damai Pemilihan Ketua dan Wakil Ketua OSIS (Pemilos/Pilketos) Serentak se-Provinsi Sulawesi Selatan dengan metode e-Voting.

---

## 🌟 Fitur Unggulan

1. **Alur Wizard Terstruktur & Responsif**:
   - **Langkah 1:** Registrasi identitas pasangan calon (Asal Sekolah, Pilihan 24 Kabupaten/Kota se-Sulsel, Nomor Urut Paslon, Nama Calon Ketua, NISN, Nama Calon Wakil Ketua, NISN, Kontak & Email).
   - **Langkah 2:** *Animated Gradient Commitment Popup* — Pop-up animatik bergradasi elegan (bukan generic AI-slop) memuat pernyataan tekad menyukseskan Pemilos Sulsel e-Voting.
   - **Langkah 3:** Pembacaan Naskah Ikrar Deklarasi Resmi (sesuai naskah `Naskah Ikrar Deklarasi.docx` di repo ini) dengan kotak persetujuan integritas.
   - **Langkah 4:** *Dual Signature Pad with Luminous Trail Effect* — Dua kotak tanda tangan digital terpisah (Calon Ketua & Calon Wakil Ketua) dengan label nama otomatis sesuai identitas awal dan efek aurora trail/partikel bercahaya saat kursor atau jari menggores kanvas.
   - **Langkah 5:** Pengesahan Digital & Download Bukti/Sertifikat (dapat dicetak langsung atau disimpan sebagai PDF dengan layout resmi).

2. **Integrasi Backend Google Apps Script (`Code.gs`)**:
   - **Auto-Create Google Drive Folder**: Otomatis membuat folder `"Arsip TTD Deklarasi Pemilos Sulsel 2026"` di akun Google Drive Anda.
   - **Auto-Create Google Sheet Table**: Otomatis membuat spreadsheet `"Rekapitulasi Deklarasi Pemilos Sulsel 2026"` lengkap dengan header tabel yang rapi, nomor registrasi unik, data paslon, dan tautan file tanda tangan.
   - **Base64 PNG Storage**: Mengubah coretan tanda tangan resolusi tinggi menjadi file gambar PNG di Google Drive.

3. **Touch-Friendly & High-DPI Canvas**:
   - Sangat lancar digunakan di smartphone, tablet (iPad/Android dengan stylus/jari), maupun laptop/PC.

---

## 🚀 Panduan Setup Backend Google Apps Script (Hanya 3 Menit)

Agar hasil tanda tangan dan data otomatis masuk ke Google Drive & Google Sheet Anda:

1. Buka browser dan kunjungi [https://script.google.com/](https://script.google.com/).
2. Klik tombol **New project** (Proyek Baru).
3. Beri nama proyek, misalnya: `Backend Pemilos Sulsel 2026`.
4. Hapus isi default pada editor `Code.gs`, lalu salin seluruh isi file [`Code.gs`](./Code.gs) yang ada di repo ini ke editor tersebut.
5. Klik ikon **Save** (Simpan).
6. Klik tombol **Deploy** di pojok kanan atas > Pilih **New deployment**.
7. Pada menu roda gigi *Select type*, pilih **Web app**.
8. Konfigurasikan:
   - **Description**: `API TTD Deklarasi Pemilos Sulsel`
   - **Execute as**: `Me (email-anda@gmail.com)`
   - **Who has access**: `Anyone` *(Wajib dipilih Anyone agar form web dapat mengirim tanda tangan tanpa login Google)*
9. Klik **Deploy**.
10. Berikan izin akses akun Google Anda (*Authorize access* > pilih akun Anda > *Advanced* > *Go to Backend Pemilos (unsafe)* > *Allow*).
11. Salin **Web app URL** yang muncul (berakhiran `/exec`).
12. **Tempel Langsung ke `index.html`**:
    - Buka file [`index.html`](./index.html) dan cari baris:
      ```javascript
      window.GAS_ENDPOINT_URL = "https://script.google.com/macros/s/.../exec";
      ```
    - Tempelkan URL Web App Anda di antara tanda kutip tersebut.
    - Selesai! Paslon tidak perlu mengatur apa pun lagi saat membuka web.
    
    *(Atau jika dibagikan lewat link, cukup tambahkan parameter: `http://localhost:3000/?gas=URL_APPS_SCRIPT_ANDA`)*

> **Catatan:** Jika URL belum dimasukkan, aplikasi web tetap dapat digunakan dalam **Mode Standalone/Demo**, data dan sertifikat tanda tangan tersimpan secara lokal dan dapat langsung dicetak/diunduh sebagai PDF resmi!

---

## 💻 Cara Menjalankan Aplikasi Web

Aplikasi ini dibuat menggunakan standar web modern native tanpa perlu install dependensi npm yang rumit. Cukup jalankan server lokal atau langsung buka `index.html`:

### Opsi 1: Menggunakan Python HTTP Server (Rekomendasi)
Buka terminal / PowerShell di folder ini, lalu jalankan:
```bash
python -m http.server 3000
```
Buka browser di: [http://localhost:3000](http://localhost:3000)

### Opsi 2: Menggunakan Live Server di IDE / Double Click
- Buka file `index.html` langsung dengan browser pilihan Anda (Chrome, Edge, Firefox, Safari).

---

## 📁 Struktur File Proyek

```
ttd_deklarasi/
├── index.html                   # Antarmuka web utama
├── style.css                    # Desain visual, gradasi modern, animatik & media print
├── app.js                       # Logika form wizard, modal, API handler
├── signature-pad.js             # Engine canvas tanda tangan + Luminous Dynamic Trail
├── config.js                    # Konfigurasi data 24 Kab/Kota Sulsel & Naskah Deklarasi
├── Code.gs                      # Script backend Google Apps Script (Drive & Sheets)
├── Naskah Ikrar Deklarasi.docx  # Sumber naskah deklarasi resmi
└── README.md                    # Dokumentasi lengkap
```
