# Google Apps Script Backend – Undangan Digital

Backend pengganti Supabase/MySQL menggunakan Google Sheets sebagai database dan Google Apps Script sebagai API server. Gratis, tanpa server, dan otomatis setup.

---

## Cara Deploy

### 1. Buka Google Apps Script
Buka [script.google.com](https://script.google.com) → **New Project** → paste isi `code.gs`.

### 2. Jalankan `setup()`
Di editor GAS, pilih fungsi `setup` di dropdown → klik **Run**.  
Ini akan otomatis:
- Membuat folder `Undangan Assets` di Google Drive
- Membuat Spreadsheet `Undangan DB` dengan 4 sheet (users, comments, likes, app_config)
- Membuat akun admin default: `admin@undangan.com` / `password123`

### 3. Deploy sebagai Web App
**Deploy** → **New Deployment** → pilih tipe **Web App**:
- **Execute as**: Me
- **Who has access**: Anyone

Salin URL Web App yang dihasilkan (format: `https://script.google.com/macros/s/xxxxx/exec`).

### 4. Update `index.html` & `dashboard.html`
Ganti atribut `data-url` di `<body>`:
```html
<!-- Sebelum -->
<body data-url="https://api.ulems.my.id/">

<!-- Sesudah -->
<body data-url="https://script.google.com/macros/s/XXXXXXXXXX/exec/">
```

Juga ganti `data-key` di `index.html` dengan `access_key` yang ada di sheet **users** (kolom `access_key`).

---

## Struktur Spreadsheet

### Sheet: `users`
| Kolom | Deskripsi |
|-------|-----------|
| id | UUID unik admin |
| email | Email login |
| password | SHA-256 hash password |
| name | Nama tampilan |
| access_key | Token untuk autentikasi guest (50 char hex) |
| tz | Timezone (default: Asia/Jakarta) |
| is_filter | Filter kata kasar (true/false) |
| is_confetti_animation | Animasi confetti (true/false) |
| can_reply | Guest bisa reply (true/false) |
| can_edit | Guest bisa edit komentar milik sendiri |
| can_delete | Guest bisa hapus komentar milik sendiri |
| tenor_key | API key Tenor untuk GIF |
| created_at | Timestamp ISO |

### Sheet: `comments`
| Kolom | Deskripsi |
|-------|-----------|
| uuid | UUID komentar |
| own | Token kepemilikan (disimpan di localStorage guest) |
| name | Nama pengirim |
| presence | Kehadiran (true/false) |
| comment | Isi komentar |
| gif_url | URL GIF jika ada |
| ip | IP pengirim |
| user_agent | Browser/device info |
| parent_id | UUID parent (kosong = top-level) |
| created_at | Timestamp ISO |
| is_admin | Dikirim oleh admin (true/false) |
| updated_at | Terakhir diupdate |

### Sheet: `likes`
| Kolom | Deskripsi |
|-------|-----------|
| uuid | UUID like |
| comment_uuid | UUID komentar yang di-like |
| own | Token kepemilikan like |
| created_at | Timestamp ISO |

---

## Penting: Kenapa Semua Request Pakai GET?

Google Apps Script Web App punya batasan CORS yang ketat:
- Request dengan method non-GET (POST, PUT, PATCH, DELETE) trigger **preflight OPTIONS** oleh browser
- GAS **tidak handle OPTIONS** → browser block request dengan error CORS
- Satu-satunya solusi tanpa proxy adalah: **konversi semua request ke GET**

Frontend (`request.js`) secara otomatis melakukan ini saat `data-url` mengandung `script.google.com`:
- Method asli → `?_method=PUT`
- Body JSON → `?_body=<base64>`
- Bearer token → `?_token=<jwt>`
- Access key → `?_key=<key>`
- API path → `?_path=api/comment`

GAS menerima satu URL GET, membaca semua params ini, dan menjalankan logic yang sesuai.

## Modifikasi Frontend (`js/connection/request.js`)

**Tidak perlu modifikasi manual** — file ini sudah diupdate otomatis. Patch ada di fungsi `baseFetch()`:

```javascript
// Deteksi GAS via data-url, konversi semua ke GET
const isGAS = gasBase.includes('script.google.com');
if (isGAS) {
  // path, method, body, token semuanya jadi query params
}
```

---

## Ganti Password Admin Default
Setelah login pertama di dashboard, segera ganti password `password123` via menu **Setting → Change Password**.

---

## Konfigurasi `CONFIG.JWT_SECRET`
Ganti nilai `GANTI_SECRET_KEY_ANDA_DISINI` di baris 23 `code.gs` dengan string acak yang panjang dan unik sebelum deploy production.
