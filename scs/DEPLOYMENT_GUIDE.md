# 📘 Panduan Deployment & Setup Sistem Pengumpulan Foto Absensi SCS
### SMAN 1 Soppeng — Provinsi Sulawesi Selatan

Panduan ini berisi langkah-langkah lengkap untuk memasang (*deploy*) backend Google Apps Script, menginisialisasi folder Google Drive dan Google Sheets, serta menyambungkan front-end `index.html`.

---

## 📋 LANGKAH 1: Setup Backend Google Apps Script (`Code.gs`)

1. **Buka Google Apps Script**:
   - Buka browser dan kunjungi [script.google.com](https://script.google.com/).
   - Klik **Project Baru** (*New Project*).
   - Beri nama proyek pada bagian kiri atas, misalnya: `SCS_Backend_SMAN1_Soppeng`.

2. **Salin Kode Backend**:
   - Hapus semua kode default di file `Code.gs`.
   - Buka file [Code.gs](file:///d:/PROJECT/scs/Code.gs) pada proyek ini, salin seluruh kodenya, lalu tempel (*paste*) ke dalam editor Google Apps Script.
   - Klik tombol **Simpan** (ikon disket / `Ctrl + S`).

3. **Inisialisasi Otomatis (`setupEnvironment`)**:
   - Di bagian atas editor GAS, pilih fungsi `setupEnvironment` pada menu dropdown fungsi.
   - Klik tombol **Run** (Jalankan).
   - **Otorisasi Izin**: Google akan meminta izin akses Google Drive dan Google Sheets. Klik *Review Permissions* -> Pilih Akun Google -> Klik *Advanced* (*Lanjutan*) -> Klik *Go to SCS_Backend_SMAN1_Soppeng (unsafe)* -> Klik *Allow* (*Izinkan*).
   - **Hasil Inisialisasi**:
     - Fungsi akan otomatis membuat Folder Utama `"SCS_Foto_SMAN1_Soppeng"` di Google Drive.
     - Membuat **33 Sub-folder Kelas** (`X-1` s.d. `X-11`, `XI-1` s.d. `XI-11`, `XII-1` s.d. `XII-11`) dan 1 folder `"Guru_Staf"`.
     - Membuat Google Sheet database `"SCS_Database_SMAN1_Soppeng"` beserta sampel data master awal.
     - Menyimpan mapping ID folder ke `PropertiesService`.

---

## 🚀 LANGKAH 2: Deployment Web App & CORS Setup

 Agar front-end di web hosting pribadi dapat mengakses API tanpa terkendala CORS:

1. Di editor Google Apps Script, klik tombol **Deploy** di sudut kanan atas -> pilih **New Deployment** (*Deployment Baru*).
2. Klik ikon Roda Gigi (*Select type*) -> pilih **Web App**.
3. Isi konfigurasi sebagai berikut:
   - **Description**: `Versi 1.0 Production SCS SMAN 1 Soppeng`
   - **Execute as** (*Jalankan sebagai*): **`Me`** (Email Google Anda)
   - **Who has access** (*Siapa yang memiliki akses*): **`Anyone`** (*Siapa saja*) — *Wajib diisi Anyone agar front-end siswa/guru tidak perlu login akun Google internal*.
4. Klik **Deploy**.
5. Salin **Web App URL** yang dihasilkan (format URL: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 🌐 LANGKAH 3: Hubungkan URL API ke Front-End (`index.html`)

Terdapat 2 cara untuk memasukkan Web App URL ke front-end:

### Cara A: Pengaturan via Antarmuka Web App (Tanpa Edit Kode)
1. Buka file `index.html` di browser.
2. Klik tombol **Pengaturan Endpoint** (atau ikon roda gigi) di header kanan atas.
3. Tempelkan Web App URL hasil deployment ke inputan, lalu klik **Simpan Endpoint**.
4. URL akan tersimpan otomatis di `localStorage` browser.

### Cara B: Hardcode URL di File `index.html` (Direkomendasikan untuk Hosting Publik)
1. Buka file [index.html](file:///d:/PROJECT/scs/index.html).
2. Cari baris berikut di bagian `<script>` (sekitar baris 420):
   ```javascript
   let GAS_API_URL = localStorage.getItem('SCS_GAS_API_URL') || '';
   ```
3. Ubah menjadi Web App URL Anda:
   ```javascript
   let GAS_API_URL = localStorage.getItem('SCS_GAS_API_URL') || 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
4. Simpan file `index.html`.

---

## 🖥️ LANGKAH 4: Hosting Front-End `index.html`

File `index.html` bersifat **standalone (terpisah)** dan dapat dihosting di mana saja:

- **GitHub Pages** (Gratis):
  - Upload `index.html` ke repositori GitHub.
  - Aktifkan GitHub Pages di menu *Settings -> Pages*.
- **Netlify / Vercel** (Gratis):
  - Drag and drop folder tempat `index.html` berada ke dashboard Netlify/Vercel.
- **Hosting cPanel / Domain Sekolah**:
  - Upload `index.html` langsung ke folder `public_html` domain sekolah Anda (misal: `https://absensi.sman1soppeng.sch.id`).

---

## 📊 Struktur Database Google Sheet

Struktur kolom pada sheet `"Database_Absensi_SCS"`:

| Kolom | Nama Header | Keterangan |
| :--- | :--- | :--- |
| **A** | `Timestamp` | Waktu pengunggahan foto (`YYYY-MM-DD HH:mm:ss`) |
| **B** | `Category` | Kategori pengguna (`Siswa` atau `Guru/Staf`) |
| **C** | `Class_Role` | Kelas (`X-1` s.d. `XII-11`) atau `Guru_Staf` |
| **D** | `NISN_NIP` | NISN Siswa atau NIP Guru (Primary Key) |
| **E** | `Full_Name` | Nama Lengkap Siswa / Guru |
| **F** | `Photo_Status` | Status Foto (`Pending` atau `Done`) |
| **G** | `Drive_File_URL` | Direct Link File Foto di Google Drive |
| **H** | `Drive_File_ID` | File ID Google Drive |

---

## 🔒 Fitur Anti-Duplikasi & Keamanan

1. **Anti-Duplicate Check**: Jika NISN/NIP yang sama mencoba mengunggah foto kembali saat statusnya sudah `"Done"`, sistem Google Apps Script akan menolak transaksi dan mengembalikan respons peringatan.
2. **Penamaan File Standar**: File foto disimpan langsung di sub-folder kelas masing-masing dengan format penamaan `<NISN_NIP>.jpg` (Contoh: `0051234567.jpg`) sehingga mempermudah integrasi script pengenalan wajah / absensi otomatis SCS.
