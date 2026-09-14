# 🌐 PANDUAN PENGATURAN FIREBASE MULTIPLAYER (FREE TIER) — SORTING LAB

Dokumen ini berisi panduan langkah demi langkah untuk Guru/Admin dalam mengonfigurasi **Firebase Realtime Database (Free Tier / Gratis)** agar fitur **Multiplayer Arena (Maksimal 5 Siswa per Room)** berjalan secara real-time antar perangkat siswa di kelas.

---

## 🎁 Mengapa Menggunakan Firebase Free Tier (Spark Plan)?

Firebase Spark Plan 100% GRATIS dan sangat cukup untuk penggunaan di sekolah:
- **Realtime Database**: Gratis hingga 100 koneksi simultan (bisa dipakai 20 room @ 5 siswa sekaligus).
- **Kapasitas Penyimpanan**: Gratis 1 GB data.
- **Transfer Data**: Gratis 10 GB per bulan.
- **Kecepatan**: Sangat cepat & sinkronisasi real-time instan tanpa server backend tambahan.

---

## 🛠️ LANGKAH 1: Membuat Proyek Firebase Baru

1. Buka browser dan masuk ke [Google Firebase Console](https://console.firebase.google.com/).
2. Login menggunakan Akun Google Anda.
3. Klik tombol **"Add project"** (Tambah Proyek).
4. Masukkan nama proyek, misalnya: `sorting-lab-sma`.
5. *(Opsional)* Matikan "Google Analytics" jika tidak diperlukan, lalu klik **"Create project"**.
6. Tunggu beberapa detik hingga proyek selesai dibuat, lalu klik **"Continue"**.

---

## 🗄️ LANGKAH 2: Membuat Firebase Realtime Database

1. Di menu navigasi sebelah kiri Firebase Console, pilih **Build** ➔ **Realtime Database**.
2. Klik tombol **"Create Database"**.
3. Pilih lokasi database (misal: `United States` atau lokasi terdekat), lalu klik **Next**.
4. Pada pilihan aturan keamanan (Security Rules), pilih **"Start in test mode"**, lalu klik **Enable**.

---

## 🔓 LANGKAH 3: Mengatur Rules (Hak Akses Database)

Agar seluruh perangkat siswa di kelas dapat membuat & masuk ke room tanpa perlu login akun Google:

1. Di tab **Realtime Database**, pilih sub-tab **Rules** di bagian atas.
2. Ubah isi aturan menjadi seperti berikut:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

3. Klik tombol **"Publish"** di kanan atas untuk menyimpan aturan.

---

## 🔑 LANGKAH 4: Mengambil Kunci Konfigurasi (Web App Credentials)

1. Di menu kiri atas Firebase Console, klik ikon roda gigi ⚙️ **Project settings**.
2. Gulir ke bawah ke bagian **"Your apps"**, lalu klik ikon Web `</>`.
3. Masukkan App nickname, misal: `Sorting Lab Web`, lalu klik **Register app**.
4. Anda akan melihat kode konfigurasi JavaScript seperti ini:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD-XXXXXX...",
  authDomain: "sorting-lab-sma.firebaseapp.com",
  databaseURL: "https://sorting-lab-sma-default-rtdb.firebaseio.com",
  projectId: "sorting-lab-sma",
  storageBucket: "sorting-lab-sma.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef..."
};
```

---

## 📝 LANGKAH 5: Memasang Kunci ke Aplikasi `js/firebase-config.js`

1. Buka file [js/firebase-config.js](file:///d:/PROJECT/ayang/sort2/js/firebase-config.js) di editor Anda.
2. Salin nilai `apiKey`, `authDomain`, `databaseURL`, `projectId`, dll. dari Firebase Console ke dalam objek `this.config` di `js/firebase-config.js`:

```javascript
this.config = {
  apiKey: "AIzaSyD-XXXXXX...",
  authDomain: "sorting-lab-sma.firebaseapp.com",
  databaseURL: "https://sorting-lab-sma-default-rtdb.firebaseio.com",
  projectId: "sorting-lab-sma",
  storageBucket: "sorting-lab-sma.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef..."
};
```

3. Simpan file `js/firebase-config.js`.

---

## ⚡ Mode Fallback (Offline / Tanpa Firebase)

Jika Anda belum memasang kunci Firebase:
- Aplikasi **Sorting Lab** secara otomatis mengaktifkan **Fallback Mode**.
- Guru dan siswa tetap dapat mencoba fitur Multiplayer Arena secara lokal di satu browser atau jaringan yang sama menggunakan LocalStorage & memori internal!

---

## 🔐 KEAMANAN ROOM & AUTENTIKASI GURU (TEACHER LOGIN)

Untuk mencegah siswa mengutak-atik pembuatan room atau memulai pertandingan tanpa izin:
- **HANYA GURU / ADMIN** yang telah login yang dapat:
  - Membuat Room Baru (`BUAT ROOM BARU`).
  - Memulai Pertandingan (`START MULTIPLAYER MATCH`).
- **SISWA (GUEST)** hanya bisa masuk (*JOIN*) ke room yang dibuat oleh Guru.

### Kredensial Default Guru (Siap Pakai):
- **Email Guru**: `guru@sortinglab.com`
- **Password Guru**: `guru123`

*(Catatan: Anda juga dapat mendaftarkan Email/Password Guru di Firebase Authentication ➔ Email/Password Sign-in).*

---

## 🎮 CARA PENGGUNAAN DI KELAS (Dua Peran)

### 👨‍🏫 Peran GURU / ADMIN:
1. Buka aplikasi ➔ Klik **⚡ MULTIPLAYER ARENA**.
2. Klik **"BUAT ROOM BARU (GURU)"**.
3. Masukkan Email (`guru@sortinglab.com`) dan Password (`guru123`) saat diminta login Guru.
4. Masukkan Nama Room (misal: *Kelas 10-A Match 1*), Pilih Algoritma (*Bubble Sort*), dan Jumlah Angka (*5 Angka*).
5. Bagikan Nama Room ke siswa.
6. Setelah siswa bergabung (maksimal 5 siswa), Guru klik **"START MULTIPLAYER MATCH"**.

### 👩‍🎓 Peran SISWA (Guest):
1. Buka aplikasi ➔ Masukkan Nama Siswa di menu utama.
2. Klik **⚡ MULTIPLAYER ARENA**.
3. Pada daftar **Open Rooms**, cari nama room yang dibuat Guru.
4. Perhatikan status player `(misal: 3 / 5 Players Joined)`.
5. Klik **"JOIN MATCH"**. (Jika room sudah 5/5, status menjadi `FULL` dan siswa harus memilih room lain).
6. Saat Guru memulai game, layar akan menghitung `3... 2... 1... SORT!` dan siswa berlomba mengurutkan angka paling cepat & paling tepat!
