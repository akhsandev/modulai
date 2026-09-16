# Panduan Setup Google Apps Script & Google Spreadsheet
## Portal Verifikasi Data & Upload Foto Kartu Pelajar SMAN 1 Soppeng

Berikut adalah panduan praktis untuk memasang backend di Google Spreadsheet dan menghubungkannya dengan aplikasi `index.html`.

---

### Langkah 1: Buat Spreadsheet di Google Drive
1. Buka [Google Drive](https://drive.google.com) akun sekolah / admin.
2. Buat spreadsheet baru dan beri nama misalnya: **DATA SISWA KARTU PELAJAR SMAN 1 SOPPENG**.
3. Import atau paste data siswa dari file `KARTU_PERPUS_KELAS_X.csv` ke dalam sheet bernama `DATA_SISWA`.
   - Kolom yang dibutuhkan:
     `NO | KELAS | NAMA LENGKAP (DAPODIK) | TTL | NIS/NISN | JENIS KELAMIN | ALAMAT | QR ID (UNTUK FORMULA) | FOTO_URL | STATUS | TIMESTAMP`

---

### Langkah 2: Masukkan Kode Apps Script
1. Di Google Sheets, klik menu **Extensions (Ekstensi)** > **Apps Script**.
2. Hapus kode default di file `Code.gs`, lalu copy dan paste seluruh isi file [`Code.gs`](file:///c:/project/baru/Code.gs).
3. Klik tombol **Save (Simpan / Ikon Disket)**.

---

### Langkah 3: Jalankan Auto-Setup Folder Drive & Tabel
1. Pada dropdown fungsi di bagian atas editor Apps Script, pilih fungsi `autoSetupSpreadsheetAndDrive`.
2. Klik tombol **Run (Jalankan)**.
3. Google akan meminta izin akses (Authorization):
   - Klik **Review Permissions** $\rightarrow$ pilih akun Google Anda.
   - Klik **Advanced** $\rightarrow$ klik **Go to Untitled project (unsafe)**.
   - Klik **Allow**.
4. Selesai! Script akan otomatis:
   - Merapikan header tabel dengan warna kuning tebal.
   - Menambahkan *Conditional Formatting* (Status **Done** otomatis hijau, **Pending** otomatis kuning).
   - Membuat folder Google Drive bernama `FOTO_KARTU_PELAJAR_SMAN1_SOPPENG` dan mengaktifkan akses publik foto.

---

### Langkah 4: Deploy sebagai Web App
1. Di editor Apps Script, klik tombol biru **Deploy** di pojok kanan atas $\rightarrow$ **New deployment**.
2. Klik ikon gerigi (Select type) $\rightarrow$ pilih **Web app**.
3. Isi konfigurasi berikut (**PENTING**):
   - **Description**: `Versi 1.0 Upload Foto Kartu Pelajar`
   - **Execute as**: `Me (email anda)`
   - **Who has access**: `Anyone` *(Pilih 'Anyone' agar siswa bisa mengirim foto tanpa perlu login Google)*.
4. Klik **Deploy**.
5. Salin (Copy) **Web App URL** yang diberikan (formatnya: `https://script.google.com/macros/s/.../exec`).

---

---

### Langkah 5: Hubungkan ke `index.html` (Embed Langsung)
Cukup buka berkas `index.html` menggunakan Text Editor (Notepad / VS Code):
1. Lihat baris **17** di bagian atas berkas:
   ```html
   window.EMBEDDED_GAS_URL = "https://script.google.com/macros/s/AKfycbx_GANTI_DENGAN_URL_DEPLOY_APPS_SCRIPT_ANDA/exec";
   ```
2. Ganti URL tersebut dengan **Web App URL** yang Anda salin dari Langkah 4.
3. Simpan berkas (`Ctrl + S`).
4. **Selesai!** Sekarang siswa tinggal membuka `index.html` di browser mereka, memilih nama, memeriksa data, dan mengupload foto tanpa perlu melakukan pengaturan apapun lagi.

---

### 📂 Format Penyimpanan Foto di Google Drive
Foto yang diunggah siswa akan otomatis disimpan di Google Drive dalam folder `FOTO_KARTU_PELAJAR_SMAN1_SOPPENG/[KELAS]/` dengan format nama berkas:
```text
NAMA_NISN_KELAS.jpg
```
*Contoh:* `A_AFIQA_ARSAD_19873_0104224865_X_1.jpg`

> **Catatan:**
> Jika belum melakukan deploy, aplikasi `index.html` tetap dapat digunakan secara penuh dengan **Mode Demo / Offline Storage**. Semua 387 data siswa sudah terpasang dan dapat langsung diuji coba.
