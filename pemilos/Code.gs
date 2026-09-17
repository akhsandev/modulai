/**
 * =========================================================================
 * PEMILOS SERENTAK SULAWESI SELATAN 2026
 * Backend Google Apps Script: Auto Drive & Table Setup + Base64 TTD Receiver
 * =========================================================================
 * Petunjuk Singkat:
 * 1. Buka https://script.google.com/ lalu buat Project baru.
 * 2. Salin seluruh isi file ini ke editor (Code.gs).
 * 3. Klik menu "Deploy" > "New deployment".
 * 4. Pilih tipe "Web app".
 * 5. Set:
 *    - Description: "API TTD Deklarasi Pemilos Sulsel"
 *    - Execute as: "Me" (email akun Google Anda)
 *    - Who has access: "Anyone" (Siapa saja, agar form web bisa mengirim data)
 * 6. Klik "Deploy" dan izinkan hak akses (Authorize access).
 * 7. Salin Web App URL yang dihasilkan, lalu masukkan ke kolom Pengaturan di aplikasi Web!
 * =========================================================================
 */

// Konfigurasi Nama Folder & Spreadsheet
const CONFIG = {
  FOLDER_NAME: "Arsip TTD Deklarasi Pemilos Sulsel 2026",
  SPREADSHEET_NAME: "Rekapitulasi Deklarasi Pemilos Sulsel 2026",
  SHEET_TAB_NAME: "Data Deklarasi"
};

/**
 * Handle HTTP GET (Live Check Status Paslon / Health Check)
 */
function doGet(e) {
  try {
    // 1. Aksi Cek Ketersediaan Nomor Paslon
    if (e && e.parameter && e.parameter.action === "checkPaslon") {
      const kabKota = (e.parameter.kabKota || "").trim().toLowerCase();
      const sekolah = (e.parameter.sekolah || "").trim().toLowerCase();
      const nomorUrut = (e.parameter.nomorUrut || "").trim();

      if (!kabKota || !sekolah || !nomorUrut) {
        return responseJSON({
          status: "available",
          message: "Parameter belum lengkap."
        });
      }

      const driveFolder = getOrCreateFolder(CONFIG.FOLDER_NAME);
      const sheet = getOrCreateSpreadsheet(CONFIG.SPREADSHEET_NAME, CONFIG.SHEET_TAB_NAME, driveFolder);
      const lastRow = sheet.getLastRow();

      if (lastRow > 1) {
        // Kolom 1-15: [ID, Waktu, KabKota, Sekolah, NoPaslon, Ketua, NisnKetua, Wakil, NisnWakil, ...]
        const dataValues = sheet.getRange(2, 1, lastRow - 1, 9).getValues();
        for (let i = 0; i < dataValues.length; i++) {
          const rowKab = String(dataValues[i][2] || "").trim().toLowerCase();
          const rowSekolah = String(dataValues[i][3] || "").trim().toLowerCase();
          const rowNo = String(dataValues[i][4] || "").trim();

          if (rowKab === kabKota && rowSekolah === sekolah && rowNo === nomorUrut) {
            return responseJSON({
              status: "taken",
              message: "Nomor Paslon " + nomorUrut + " untuk sekolah ini sudah diambil!",
              paslon: {
                nomorUrut: rowNo,
                ketuaName: dataValues[i][5],
                wakilName: dataValues[i][7],
                witaTimestamp: dataValues[i][1]
              }
            });
          }
        }
      }

      return responseJSON({
        status: "available",
        message: "Nomor Paslon " + nomorUrut + " tersedia."
      });
    }

    // Default Health Check
    return responseJSON({
      status: "success",
      message: "API Google Apps Script Pemilos Sulsel aktif dan siap menerima data deklarasi.",
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return responseJSON({
      status: "error",
      message: "Gagal memproses permintaan: " + err.toString()
    });
  }
}

/**
 * Handle HTTP POST (Menerima Payload Tanda Tangan & Data Paslon)
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Kunci script selama 30 detik untuk mencegah race condition pada penulisan sheet
  lock.tryLock(30000);

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({
        status: "error",
        message: "Tidak ada data yang dikirim (Payload kosong)."
      });
    }

    const data = JSON.parse(e.postData.contents);

    // Validasi data minimal
    if (!data.ketuaName || !data.wakilName || !data.sekolah || !data.kabKota) {
      return responseJSON({
        status: "error",
        message: "Data identitas paslon tidak lengkap."
      });
    }

    // 1. Dapatkan atau Buat Folder di Google Drive
    const driveFolder = getOrCreateFolder(CONFIG.FOLDER_NAME);

    // 2. Dapatkan atau Buat Google Spreadsheet & Tab Sheet
    const sheet = getOrCreateSpreadsheet(CONFIG.SPREADSHEET_NAME, CONFIG.SHEET_TAB_NAME, driveFolder);

    // 3. Verifikasi Anti-Duplikasi (Pencegahan Nomor Paslon Ganda di Sekolah yang Sama)
    const reqKab = String(data.kabKota || "").trim().toLowerCase();
    const reqSekolah = String(data.sekolah || "").trim().toLowerCase();
    const reqNo = String(data.nomorUrut || "").trim();
    const lastRow = sheet.getLastRow();

    if (lastRow > 1 && reqNo) {
      const existingData = sheet.getRange(2, 3, lastRow - 1, 3).getValues();
      for (let i = 0; i < existingData.length; i++) {
        const rowKab = String(existingData[i][0] || "").trim().toLowerCase();
        const rowSekolah = String(existingData[i][1] || "").trim().toLowerCase();
        const rowNo = String(existingData[i][2] || "").trim();

        if (rowKab === reqKab && rowSekolah === reqSekolah && rowNo === reqNo) {
          return responseJSON({
            status: "error",
            code: "DUPLICATE_PASLON",
            message: "Data Paslon " + data.nomorUrut + " untuk " + data.sekolah + " sudah pernah didaftarkan dan ditandatangani sebelumnya!"
          });
        }
      }
    }

    // 4. Simpan Gambar Tanda Tangan ke Google Drive
    const timestampStr = Utilities.formatDate(new Date(), "Asia/Makassar", "yyyyMMdd_HHmmss");
    const sanitizedSchool = sanitizeFilename(data.sekolah);
    const sanitizedKabKota = sanitizeFilename(data.kabKota);

    let ttdKetuaUrl = "-";
    let ttdKetuaFileId = "";
    if (data.ttdKetuaBase64) {
      const fileKetua = saveBase64ToDrive(
        data.ttdKetuaBase64,
        `TTD_KETUA_${sanitizedKabKota}_${sanitizedSchool}_Paslon${reqNo}_${timestampStr}.png`,
        driveFolder,
        "image/png"
      );
      ttdKetuaUrl = fileKetua.getUrl();
      ttdKetuaFileId = fileKetua.getId();
    }

    let ttdWakilUrl = "-";
    let ttdWakilFileId = "";
    if (data.ttdWakilBase64) {
      const fileWakil = saveBase64ToDrive(
        data.ttdWakilBase64,
        `TTD_WAKIL_${sanitizedKabKota}_${sanitizedSchool}_Paslon${reqNo}_${timestampStr}.png`,
        driveFolder,
        "image/png"
      );
      ttdWakilUrl = fileWakil.getUrl();
      ttdWakilFileId = fileWakil.getId();
    }

    // 5. Masukkan Baris Baru ke Google Spreadsheet
    const witaDate = Utilities.formatDate(new Date(), "Asia/Makassar", "dd/MM/yyyy HH:mm:ss");
    const declarationId = data.declarationId || ("DECL-" + Utilities.getUuid().substring(0, 8).toUpperCase());

    sheet.appendRow([
      declarationId,                         // ID Deklarasi
      witaDate,                              // Waktu TTD (WITA)
      data.kabKota,                          // Kabupaten / Kota di Sulsel
      data.sekolah,                          // Nama Sekolah
      data.nomorUrut || "-",                 // Nomor Urut Paslon
      data.ketuaName,                        // Nama Calon Ketua OSIS
      data.ketuaNisn || "-",                 // NISN Ketua
      data.wakilName,                        // Nama Calon Wakil Ketua OSIS
      data.wakilNisn || "-",                 // NISN Wakil
      data.kontak || "-",                    // No. HP / WhatsApp
      data.email || "-",                     // Email
      ttdKetuaUrl,                           // Link TTD Ketua di Drive
      ttdWakilUrl,                           // Link TTD Wakil di Drive
      data.userAgent || "-",                 // Perangkat / Browser
      "TERVERIFIKASI & TERCATAT"             // Status
    ]);

    // Beri styling auto wrap dan alignment
    const updatedLastRow = sheet.getLastRow();
    sheet.getRange(updatedLastRow, 1, 1, 15).setVerticalAlignment("middle");

    return responseJSON({
      status: "success",
      message: "Data deklarasi dan tanda tangan berhasil disimpan ke Google Drive dan Google Sheets!",
      data: {
        declarationId: declarationId,
        witaTimestamp: witaDate,
        spreadsheetUrl: sheet.getParent().getUrl(),
        driveFolderUrl: driveFolder.getUrl(),
        ttdKetuaUrl: ttdKetuaUrl,
        ttdWakilUrl: ttdWakilUrl
      }
    });

  } catch (err) {
    return responseJSON({
      status: "error",
      message: "Gagal memproses data: " + err.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Mendapatkan Folder Drive yang ada atau otomatis membuatnya jika belum ada
 */
function getOrCreateFolder(folderName) {
  const props = PropertiesService.getScriptProperties();
  const cachedFolderId = props.getProperty("DRIVE_FOLDER_ID");
  if (cachedFolderId) {
    try {
      return DriveApp.getFolderById(cachedFolderId);
    } catch (e) {
      props.deleteProperty("DRIVE_FOLDER_ID");
    }
  }

  const folders = DriveApp.getFoldersByName(folderName);
  let folder;
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(folderName);
    folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }
  props.setProperty("DRIVE_FOLDER_ID", folder.getId());
  return folder;
}

/**
 * Mendapatkan Google Spreadsheet yang ada atau membuatnya otomatis di dalam folder
 */
function getOrCreateSpreadsheet(spreadsheetName, tabName, folder) {
  const props = PropertiesService.getScriptProperties();
  const cachedSheetId = props.getProperty("SPREADSHEET_ID");
  if (cachedSheetId) {
    try {
      const ss = SpreadsheetApp.openById(cachedSheetId);
      let targetSheet = ss.getSheetByName(tabName);
      if (!targetSheet) targetSheet = ss.insertSheet(tabName);
      return targetSheet;
    } catch (e) {
      props.deleteProperty("SPREADSHEET_ID");
    }
  }

  const files = folder.getFilesByName(spreadsheetName);
  let spreadsheet;

  if (files.hasNext()) {
    const file = files.next();
    spreadsheet = SpreadsheetApp.openById(file.getId());
  } else {
    spreadsheet = SpreadsheetApp.create(spreadsheetName);
    const ssFile = DriveApp.getFileById(spreadsheet.getId());
    folder.addFile(ssFile);
    DriveApp.getRootFolder().removeFile(ssFile);

    const activeSheet = spreadsheet.getActiveSheet();
    activeSheet.setName(tabName);

    const headers = [
      "ID Deklarasi",
      "Waktu TTD (WITA)",
      "Kabupaten / Kota",
      "Nama Sekolah",
      "No. Paslon",
      "Calon Ketua OSIS",
      "NISN Ketua",
      "Calon Wakil Ketua OSIS",
      "NISN Wakil",
      "Kontak / WA",
      "Email",
      "Link TTD Ketua (Drive)",
      "Link TTD Wakil (Drive)",
      "User Agent / Perangkat",
      "Status Verifikasi"
    ];

    activeSheet.appendRow(headers);

    const headerRange = activeSheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0F172A");
    headerRange.setFontColor("#F8FAFC");
    headerRange.setFontWeight("bold");
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    activeSheet.setRowHeight(1, 35);
    activeSheet.setFrozenRows(1);

    for (let i = 1; i <= headers.length; i++) {
      activeSheet.setColumnWidth(i, 160);
    }
    activeSheet.setColumnWidth(4, 220);
    activeSheet.setColumnWidth(12, 220);
    activeSheet.setColumnWidth(13, 220);
  }

  props.setProperty("SPREADSHEET_ID", spreadsheet.getId());
  let targetSheet = spreadsheet.getSheetByName(tabName);
  if (!targetSheet) {
    targetSheet = spreadsheet.insertSheet(tabName);
  }
  return targetSheet;
}

/**
 * Menyimpan data gambar Base64 menjadi file di Google Drive
 */
function saveBase64ToDrive(base64Data, filename, folder, mimeType) {
  // Hapus header Data URI jika ada (misal: "data:image/png;base64,...")
  let cleanBase64 = base64Data;
  if (base64Data.indexOf(",") > -1) {
    cleanBase64 = base64Data.split(",")[1];
  }

  const decodedBytes = Utilities.base64Decode(cleanBase64);
  const blob = Utilities.newBlob(decodedBytes, mimeType, filename);
  const file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file;
}

/**
 * Sanitasi string untuk nama file aman di Drive
 */
function sanitizeFilename(text) {
  return (text || "UNSPECIFIED")
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .substring(0, 40);
}

/**
 * Helper untuk response JSON
 */
function responseJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
