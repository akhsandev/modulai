/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT: PORTAL VERIFIKASI DATA & UPLOAD FOTO KARTU PELAJAR
 * SMAN 1 SOPPENG
 * ==============================================================================
 * Fitur:
 * 1. autoSetupSpreadsheetAndDrive(): Setup otomatis header tabel, format status,
 *    dan folder penyimpanan Google Drive.
 * 2. doGet(e): Endpoint API untuk mengambil daftar siswa & status terkini.
 * 3. doPost(e): Endpoint API untuk update data kelengkapan (alamat, TTL, dll)
 *    dan upload pas foto berlatar merah langsung ke Google Drive.
 * 4. Proteksi: Mencegah siswa yang sudah berstatus 'Done' untuk upload ulang.
 * ==============================================================================
 */

// Konfigurasi Nama Sheet dan Folder Drive
const CONFIG = {
  // SPREADSHEET ID:
  // - Kosongkan jika script dibuka langsung dari Google Sheets (menu Ekstensi > Apps Script).
  // - Jika script dibuat standalone di script.google.com, tempelkan ID Spreadsheet Anda di sini.
  //   Contoh URL: https://docs.google.com/spreadsheets/d/[ID_SPREADSHEET_DISINI]/edit
  SPREADSHEET_ID: '', 

  SHEET_NAME: 'DATA_SISWA', // Nama lembar spreadsheet
  ROOT_FOLDER_NAME: 'FOTO_KARTU_PELAJAR_SMAN1_SOPPENG', // Nama folder di Google Drive
  COLUMNS: {
    NO: 1,
    KELAS: 2,
    NAMA: 3,
    TTL: 4,
    NISN: 5,
    JK: 6,
    ALAMAT: 7,
    QR_ID: 8,
    FOTO_URL: 9,
    STATUS: 10,
    TIMESTAMP: 11
  }
};

/**
 * Helper untuk mendapatkan Spreadsheet secara fleksibel:
 * 1. Dari spreadsheet aktif (jika dibuka dari menu Ekstensi > Apps Script)
 * 2. Dari CONFIG.SPREADSHEET_ID jika diisi
 * 3. Jika standalone tanpa ID, otomatis mencari atau membuat spreadsheet baru di Drive!
 */
function getSpreadsheet() {
  let ss = null;

  // 1. Coba dari spreadsheet aktif (hanya berfungsi jika script dibuka dari Sheets)
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
    // getActiveSpreadsheet() bisa return null tanpa melempar exception (standalone)
    if (!ss) ss = null;
  } catch (err) {
    ss = null;
  }

  // 2. Coba dari SPREADSHEET_ID jika diisi
  if (!ss && CONFIG.SPREADSHEET_ID && CONFIG.SPREADSHEET_ID.trim() !== '') {
    try {
      ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID.trim());
      Logger.log('Membuka spreadsheet via ID: ' + ss.getUrl());
    } catch (err) {
      Logger.log('Gagal membuka spreadsheet via ID: ' + err.toString());
      ss = null;
    }
  }

  // 3. Fallback: Otomatis cari atau buatkan file Google Spreadsheet di Google Drive
  if (!ss) {
    const fileName = 'DATA SISWA KARTU PELAJAR SMAN 1 SOPPENG';
    try {
      const files = DriveApp.getFilesByName(fileName);
      if (files.hasNext()) {
        ss = SpreadsheetApp.open(files.next());
        Logger.log('Menemukan spreadsheet di Google Drive: ' + ss.getUrl());
      } else {
        ss = SpreadsheetApp.create(fileName);
        Logger.log('Otomatis membuat Spreadsheet baru di Google Drive: ' + ss.getUrl());
      }
    } catch (err) {
      Logger.log('Gagal membuat/membuka spreadsheet: ' + err.toString());
    }
  }

  return ss;
}

/**
 * JALANKAN FUNGSI INI PERTAMA KALI DARI EDITOR APPS SCRIPT
 * Otomatis membuat struktur tabel, format kolom, dan folder Google Drive
 */
function autoSetupSpreadsheetAndDrive() {
  const ss = getSpreadsheet();
  if (!ss) {
    throw new Error('Gagal mengakses Google Spreadsheet. Silakan tempel ID Spreadsheet Anda di CONFIG.SPREADSHEET_ID pada Code.gs');
  }

  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  // Jika sheet belum ada, buat baru atau gunakan sheet aktif
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  // Siapkan Header jika baris 1 masih kosong
  const headers = [
    'NO',
    'KELAS',
    'NAMA LENGKAP (DAPODIK)',
    'TTL',
    'NIS/NISN',
    'JENIS KELAMIN',
    'ALAMAT',
    'QR ID (UNTUK FORMULA)',
    'FOTO_URL',
    'STATUS',
    'TIMESTAMP'
  ];

  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const isHeaderEmpty = !firstRow[0] || firstRow[0] === '';

  if (isHeaderEmpty) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  // Format Header (Neo-Brutalism Style in Sheets: Kuning tebal dengan border)
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#FFE500')
             .setFontColor('#000000')
             .setFontWeight('bold')
             .setFontFamily('Arial')
             .setHorizontalAlignment('center')
             .setVerticalAlignment('middle');
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);

  // Buat atau cari Folder Utama di Google Drive
  const folder = getOrCreateFolder(CONFIG.ROOT_FOLDER_NAME);
  
  // Berikan akses view siapapun yang memiliki link agar foto bisa tampil
  try {
    folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (err) {
    Logger.log('Izin sharing: ' + err.toString());
  }

  // Atur Conditional Formatting untuk kolom STATUS (Pending = Kuning, Done = Hijau)
  setupConditionalFormatting(sheet);

  Logger.log('SETUP SELESAI!');
  Logger.log('URL Spreadsheet: ' + ss.getUrl());
  Logger.log('ID Folder Google Drive: ' + folder.getId());
  Logger.log('URL Folder Drive: ' + folder.getUrl());

  return {
    status: 'success',
    message: 'Setup Google Sheets & Google Drive Selesai!',
    spreadsheetUrl: ss.getUrl(),
    folderUrl: folder.getUrl(),
    sheetName: sheet.getName()
  };
}

/**
 * Setup Conditional Formatting untuk Status
 */
function setupConditionalFormatting(sheet) {
  const statusColumnRange = sheet.getRange("J2:J1000");
  const rules = sheet.getConditionalFormatRules();

  // Rule Done (Hijau)
  const doneRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("Done")
    .setBackground("#D1FADF")
    .setFontColor("#027A48")
    .setRanges([statusColumnRange])
    .build();

  // Rule Pending (Kuning)
  const pendingRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("Pending")
    .setBackground("#FEF08A")
    .setFontColor("#854D0E")
    .setRanges([statusColumnRange])
    .build();

  rules.push(doneRule);
  rules.push(pendingRule);
  sheet.setConditionalFormatRules(rules);
}

/**
 * Mencari atau membuat folder Google Drive (dengan Cache ScriptProperties agar cepat)
 */
function getOrCreateFolder(folderName, parentFolder) {
  const parent = parentFolder || DriveApp;
  const isRoot = !parentFolder;
  const cacheKey = 'DIR_' + (isRoot ? 'ROOT_' : parentFolder.getId() + '_') + folderName.replace(/[^a-zA-Z0-9]/g, '_');
  const props = PropertiesService.getScriptProperties();
  const cachedId = props.getProperty(cacheKey);

  if (cachedId) {
    try {
      const folder = DriveApp.getFolderById(cachedId);
      if (folder && !folder.isTrashed()) {
        return folder;
      }
    } catch (e) {
      // ID cache tidak valid, lanjutkan pencarian biasa
    }
  }

  const folders = parent.getFoldersByName(folderName);
  let folder;
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = parent.createFolder(folderName);
    try {
      folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (err) {}
  }

  try {
    props.setProperty(cacheKey, folder.getId());
  } catch (e) {}

  return folder;
}

/**
 * Handler GET Request (Mengambil Data Siswa / Cek Koneksi / Cek Status Siswa)
 */
function doGet(e) {
  try {
    const action = (e && e.parameter && e.parameter.action) || 'getStudents';
    
    if (action === 'ping') {
      return createJsonResponse({ status: 'ok', message: 'SMAN 1 Soppeng Apps Script Online', timestamp: new Date() });
    }

    // Endpoint cepat untuk cek status satu siswa (menghindari stuck loading)
    if (action === 'checkStatus') {
      const targetNisn = String((e && e.parameter && e.parameter.nisn) || '').trim();
      const targetNama = String((e && e.parameter && e.parameter.nama) || '').trim().toLowerCase();

      const ss = getSpreadsheet();
      let sheet = ss.getSheetByName(CONFIG.SHEET_NAME) || ss.getSheets()[0];
      const data = sheet.getDataRange().getValues();

      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const rowNama = String(row[2] || '').trim().toLowerCase();
        const rowNisn = String(row[4] || '').trim();

        const matchNisn = targetNisn && (rowNisn === targetNisn || rowNisn.indexOf(targetNisn) !== -1 || targetNisn.indexOf(rowNisn) !== -1);
        const matchNama = targetNama && (rowNama === targetNama);

        if (matchNisn || matchNama) {
          return createJsonResponse({
            status: 'success',
            found: true,
            student: {
              nama: row[2],
              kelas: row[1],
              nisn: row[4],
              ttl: row[3],
              jk: row[5],
              alamat: row[6],
              fotoUrl: row[8] || '',
              status: row[9] || 'Pending',
              timestamp: row[10] || ''
            }
          });
        }
      }
      return createJsonResponse({ status: 'success', found: false });
    }

    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return createJsonResponse({ status: 'success', data: [], message: 'Sheet masih kosong' });
    }

    const headers = data[0];
    const students = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[1] && !row[2]) continue; // Lewati baris kosong
      
      students.push({
        rowIndex: i + 1,
        no: row[0],
        kelas: String(row[1]).trim(),
        nama: String(row[2]).trim(),
        ttl: row[3] || '',
        nisn: String(row[4] || '').trim(),
        jk: row[5] || '',
        alamat: row[6] || '-',
        qrId: row[7] || '',
        fotoUrl: row[8] || '',
        status: row[9] || 'Pending',
        timestamp: row[10] || ''
      });
    }

    return createJsonResponse({
      status: 'success',
      total: students.length,
      data: students
    });

  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: error.toString()
    });
  }
}

/**
 * Handler POST Request (Upload Foto & Update Data Siswa)
 */
function doPost(e) {
  try {
    let payload;
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      payload = e.parameter;
    } else {
      throw new Error('Tidak ada data payload yang diterima');
    }

    const ss = getSpreadsheet();
    let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    const data = sheet.getDataRange().getValues();
    const targetNisn = String(payload.nisn || '').trim();
    const targetNama = String(payload.nama || '').trim().toLowerCase();
    const targetKelas = String(payload.kelas || '').trim().toLowerCase();

    let targetRowIndex = -1;
    let currentRowData = null;

    // Cari baris siswa berdasarkan NISN atau kombinasi Nama & Kelas
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const rowKelas = String(row[1]).trim().toLowerCase();
      const rowNama = String(row[2]).trim().toLowerCase();
      const rowNisn = String(row[4]).trim();

      const matchNisn = targetNisn && (rowNisn === targetNisn || rowNisn.indexOf(targetNisn) !== -1 || targetNisn.indexOf(rowNisn) !== -1);
      const matchNamaKelas = (rowNama === targetNama && rowKelas === targetKelas);

      if (matchNisn || matchNamaKelas) {
        targetRowIndex = i + 1; // 1-indexed untuk Google Sheet
        currentRowData = row;
        break;
      }
    }

    if (targetRowIndex === -1) {
      return createJsonResponse({
        status: 'error',
        message: 'Data siswa tidak ditemukan di database sheet: ' + payload.nama + ' (' + payload.kelas + ')'
      });
    }

    // Validasi Keamanan: Jika status sudah "Done", tolak upload foto ulang!
    const currentStatus = String(currentRowData[CONFIG.COLUMNS.STATUS - 1] || '').trim();
    if (currentStatus.toLowerCase() === 'done' && !payload.forceAdmin) {
      return createJsonResponse({
        status: 'locked',
        message: 'Foto dan data siswa ini sudah diverifikasi (Status: Done). Tidak diperbolehkan mengupload ulang.',
        fotoUrl: currentRowData[CONFIG.COLUMNS.FOTO_URL - 1]
      });
    }

    // Proses Foto Base64 jika ada
    let finalPhotoUrl = currentRowData[CONFIG.COLUMNS.FOTO_URL - 1] || '';

    if (payload.photoBase64) {
      const rootFolder = getOrCreateFolder(CONFIG.ROOT_FOLDER_NAME);
      const classFolder = getOrCreateFolder(payload.kelas, rootFolder);

      // Bersihkan header base64 (e.g., data:image/jpeg;base64,)
      let base64Data = payload.photoBase64;
      let contentType = 'image/jpeg';

      if (base64Data.indexOf(';base64,') !== -1) {
        const parts = base64Data.split(';base64,');
        contentType = parts[0].replace('data:', '');
        base64Data = parts[1];
      }

      const decodedBytes = Utilities.base64Decode(base64Data);
      
      // Format nama file sesuai instruksi: NAMA_NISN_KELAS.jpg
      const cleanNama = (payload.nama || 'NAMA').trim().replace(/[^a-zA-Z0-9]/g, '_');
      const cleanNisn = (payload.nisn || 'NO_NISN').trim().replace(/[^a-zA-Z0-9]/g, '_');
      const cleanKelas = (payload.kelas || 'KELAS').trim().replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `${cleanNama}_${cleanNisn}_${cleanKelas}.jpg`;

      const blob = Utilities.newBlob(decodedBytes, contentType, fileName);
      const file = classFolder.createFile(blob);

      // Buat file dapat diakses dengan link
      try {
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      } catch (err) {
        Logger.log('Sharing file error: ' + err.toString());
      }

      // Gunakan direct thumbnail URL agar bisa di-embed sebagai <img> di aplikasi
      // Format: https://drive.google.com/thumbnail?id=FILE_ID&sz=w600
      finalPhotoUrl = `https://drive.google.com/thumbnail?id=${file.getId()}&sz=w600`;
    }

    // Update Spreadsheet secara batch (jauh lebih cepat dan menghindari request timeout)
    const nowStr = Utilities.formatDate(new Date(), 'Asia/Makassar', 'dd/MM/yyyy HH:mm:ss');

    if (payload.alamat && payload.alamat !== '-') {
      currentRowData[CONFIG.COLUMNS.ALAMAT - 1] = payload.alamat;
    }
    if (payload.ttl && payload.ttl !== '-') {
      currentRowData[CONFIG.COLUMNS.TTL - 1] = payload.ttl;
    }
    if (payload.jk) {
      currentRowData[CONFIG.COLUMNS.JK - 1] = payload.jk;
    }
    if (finalPhotoUrl) {
      currentRowData[CONFIG.COLUMNS.FOTO_URL - 1] = finalPhotoUrl;
    }
    currentRowData[CONFIG.COLUMNS.STATUS - 1] = 'Done';
    currentRowData[CONFIG.COLUMNS.TIMESTAMP - 1] = nowStr;

    // Tulis sekaligus 1 baris (1 operasi I/O, ~50ms vs ~3 detik)
    sheet.getRange(targetRowIndex, 1, 1, currentRowData.length).setValues([currentRowData]);
    SpreadsheetApp.flush();

    return createJsonResponse({
      status: 'success',
      message: 'Data dan foto berlatar merah berhasil disimpan ke sistem!',
      student: {
        nama: payload.nama,
        kelas: payload.kelas,
        nisn: payload.nisn,
        alamat: payload.alamat,
        fotoUrl: finalPhotoUrl,
        status: 'Done',
        timestamp: nowStr
      }
    });

  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: 'Gagal memproses data: ' + error.toString()
    });
  }
}

/**
 * Helper Output JSON dengan Header CORS
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
