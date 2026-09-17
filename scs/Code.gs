/**
 * ==============================================================================
 * SISTEM PENGUMPULAN FOTO/SELFIE ABSENSI SCS (SMART CONTROLLING SCHOOL)
 * SMAN 1 SOPPENG - PROVINSI SULAWESI SELATAN
 * ==============================================================================
 * Back-End Engine: Google Apps Script + Google Drive + Google Sheets
 * 
 * Petunjuk Awal:
 * 1. Tempelkan seluruh kode ini ke Editor Google Apps Script.
 * 2. Jalankan fungsi setupEnvironment() satu kali untuk inisialisasi otomatis.
 * 3. Deploy sebagai Web App (Execute as: Me, Who has access: Anyone).
 * 4. Salin Web App URL dan tempelkan ke index.html (GAS_API_URL).
 * ==============================================================================
 */

// CONFIGURATION CONSTANTS
const CONFIG = {
  MAIN_FOLDER_NAME: "SCS_Foto_SMAN1_Soppeng",
  SHEET_NAME: "Database_Absensi_SCS",
  CLASSES: [
    // Kelas 10
    "X-1", "X-2", "X-3", "X-4", "X-5", "X-6", "X-7", "X-8", "X-9", "X-10", "X-11",
    // Kelas 11
    "XI-1", "XI-2", "XI-3", "XI-4", "XI-5", "XI-6", "XI-7", "XI-8", "XI-9", "XI-10", "XI-11",
    // Kelas 12
    "XII-1", "XII-2", "XII-3", "XII-4", "XII-5", "XII-6", "XII-7", "XII-8", "XII-9", "XII-10", "XII-11"
  ],
  TEACHER_ROLE_NAME: "Guru_Staf"
};

/**
 * 1. AUTO-SETUP & INISIALISASI SISTEM
 * Fungsi ini membuat folder utama, 33 sub-folder kelas + 1 folder guru,
 * serta menyiapkan Google Sheet database beserta sampel data master.
 */
function setupEnvironment() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const logMessages = [];
  
  // A. Buat atau dapatkan Folder Utama di Google Drive
  let mainFolder;
  const existingMainFolders = DriveApp.getFoldersByName(CONFIG.MAIN_FOLDER_NAME);
  if (existingMainFolders.hasNext()) {
    mainFolder = existingMainFolders.next();
    logMessages.push("✅ Folder Utama ditemukan: " + mainFolder.getName());
  } else {
    mainFolder = DriveApp.createFolder(CONFIG.MAIN_FOLDER_NAME);
    logMessages.push("🚀 Folder Utama berhasil dibuat: " + mainFolder.getName());
  }
  
  const mainFolderId = mainFolder.getId();
  scriptProperties.setProperty("MAIN_FOLDER_ID", mainFolderId);
  
  // B. Buat Sub-folder Kelas & Guru
  const allFoldersToCreate = [...CONFIG.CLASSES, CONFIG.TEACHER_ROLE_NAME];
  let createdFoldersCount = 0;
  
  allFoldersToCreate.forEach(folderName => {
    const subFolders = mainFolder.getFoldersByName(folderName);
    let targetFolder;
    if (subFolders.hasNext()) {
      targetFolder = subFolders.next();
    } else {
      targetFolder = mainFolder.createFolder(folderName);
      createdFoldersCount++;
    }
    // Simpan mapping ID folder ke Script Properties
    const propKey = "FOLDER_" + sanitizeKey(folderName);
    scriptProperties.setProperty(propKey, targetFolder.getId());
  });
  
  logMessages.push(`📁 Total ${allFoldersToCreate.length} Sub-folder (${CONFIG.CLASSES.length} Kelas + 1 Guru/Staf) telah siap dan di-map di PropertiesService.`);
  
  // C. Inisialisasi Google Sheet Database
  const ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.create("SCS_Database_SMAN1_Soppeng");
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    logMessages.push("📄 Sheet '" + CONFIG.SHEET_NAME + "' berhasil dibuat.");
  }
  
  // Header Struktur Kolom
  const headers = [
    "Timestamp", 
    "Category", 
    "Class_Role", 
    "NISN_NIP", 
    "Full_Name", 
    "Photo_Status", 
    "Drive_File_URL", 
    "Drive_File_ID"
  ];
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    // Format Header Style
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold")
               .setBackground("#1e293b")
               .setFontColor("#ffffff")
               .setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
    
    logMessages.push("🌱 Header tabel database berhasil disiapkan.");
  } else {
    logMessages.push("ℹ️ Database Sheet sudah memiliki data (" + (sheet.getLastRow() - 1) + " baris).");
  }
  
  logMessages.push("✨ PROSES SETUP SELESAI DENGAN SUKSES!");
  logMessages.push("🔗 Spreadsheet URL: " + ss.getUrl());
  logMessages.push("📂 Drive Folder URL: " + mainFolder.getUrl());
  
  Logger.log(logMessages.join("\n"));
  return logMessages.join("\n");
}

/**
 * 2. API GET ENDPOINT (doGet)
 * Mengembalikan daftar kelas, list nama berdasarkan kelas/kategori, & status upload.
 */
function doGet(e) {
  try {
    const params = e ? e.parameter : {};
    const action = params.action || "getInitialData";
    
    let result = {};
    
    if (action === "getInitialData") {
      result = {
        success: true,
        categories: ["Siswa", "Guru/Staf"],
        classes: CONFIG.CLASSES
      };
    } 
    else if (action === "getNames") {
      const category = params.category || "Siswa";
      const className = params.className || "";
      
      const people = getPeopleFromSheet(category, className);
      result = {
        success: true,
        category: category,
        className: className,
        data: people
      };
    } 
    else if (action === "checkStatus") {
      const nisnNip = params.nisn_nip || "";
      if (!nisnNip) {
        throw new Error("Parameter nisn_nip wajib diisi.");
      }
      const personStatus = checkPersonStatus(nisnNip);
      result = {
        success: true,
        ...personStatus
      };
    } 
    else if (action === "getOverallRecap") {
      const recap = getOverallRecapFromSheet();
      result = {
        success: true,
        data: recap
      };
    }
    else {
      result = { success: false, message: "Action tidak dikenal: " + action };
    }
    
    return createJsonResponse(result);
  } catch (err) {
    return createJsonResponse({
      success: false,
      error: err.message || "Terjadi kesalahan internal server."
    });
  }
}

/**
 * 3. API POST ENDPOINT (doPost)
 * Menerima payload unggah foto (Base64), validasi ganda, simpan ke Drive, update Sheet.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Payload data tidak ditemukan.");
    }
    
    let payload;
    try {
      payload = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      throw new Error("Format JSON payload tidak valid.");
    }
    
    const rawNisn = payload.nisn_nip;
    const category = payload.category;
    const class_name = payload.class_name;
    const image_base64 = payload.image_base64;
    const image_mime = payload.image_mime;
    
    if (!rawNisn || !category || !image_base64) {
      throw new Error("Data tidak lengkap (nisn_nip, category, dan image_base64 wajib diisi).");
    }

    // NORMALISASI NISN: Pastikan 10 digit dengan leading zeros
    const nisn_nip = normalizeNisn(rawNisn, category);
    
    // A. VALIDASI GANDA: Cek Duplikasi Upload di Database
    const currentStatus = checkPersonStatus(nisn_nip, category);
    if (currentStatus.found && currentStatus.photo_status === "Done") {
      return createJsonResponse({
        success: false,
        message: "Pengunggahan ditolak! Foto untuk NISN/NIP " + nisn_nip + " sudah diunggah sebelumnya pada " + (currentStatus.timestamp || "waktu terdahulu") + "."
      });
    }
    
    // B. Tentukan Folder Target berdasarkan Rombel/Guru
    const scriptProperties = PropertiesService.getScriptProperties();
    const folderKeyName = (category === "Guru/Staf") ? CONFIG.TEACHER_ROLE_NAME : (class_name || "Lainnya");
    const targetFolderId = scriptProperties.getProperty("FOLDER_" + sanitizeKey(folderKeyName)) || scriptProperties.getProperty("MAIN_FOLDER_ID");
    
    let targetFolder;
    if (targetFolderId) {
      try {
        targetFolder = DriveApp.getFolderById(targetFolderId);
      } catch (fErr) {
        targetFolder = DriveApp.createFolder(folderKeyName);
      }
    } else {
      const mainId = scriptProperties.getProperty("MAIN_FOLDER_ID");
      targetFolder = mainId ? DriveApp.getFolderById(mainId) : DriveApp.getRootFolder();
    }
    
    // C. Decode Base64 Image to Blob
    let cleanBase64 = image_base64;
    if (cleanBase64.indexOf(",") !== -1) {
      cleanBase64 = cleanBase64.split(",")[1];
    }
    
    const decodedBytes = Utilities.base64Decode(cleanBase64);
    const mimeType = image_mime || "image/jpeg";
    const fileExtension = mimeType.indexOf("png") !== -1 ? ".png" : ".jpg";
    // NAMA FILE OTOMATIS: 10 DIGIT NISN (Contoh: 0051234567.jpg)
    const fileName = `${nisn_nip}${fileExtension}`;
    
    const blob = Utilities.newBlob(decodedBytes, mimeType, fileName);
    
    // D. Simpan File ke Google Drive
    const driveFile = targetFolder.createFile(blob);
    // Set file accessibility to anyone with link view (optional, suitable for SCS database link)
    driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    const fileUrl = driveFile.getUrl();
    const fileId = driveFile.getId();
    const formattedTimestamp = Utilities.formatDate(new Date(), "Asia/Makassar", "yyyy-MM-dd HH:mm:ss");
    
    // E. Update Row di Google Sheet Database
    const updateSuccess = updateSheetDatabase({
      nisn_nip: nisn_nip,
      category: category,
      class_role: class_name || CONFIG.TEACHER_ROLE_NAME,
      photo_status: "Done",
      timestamp: formattedTimestamp,
      file_url: fileUrl,
      file_id: fileId
    });
    
    return createJsonResponse({
      success: true,
      message: "Foto berhasil diunggah dan disimpan ke sistem SCS SMAN 1 Soppeng!",
      data: {
        nisn_nip: nisn_nip,
        timestamp: formattedTimestamp,
        drive_file_url: fileUrl,
        drive_file_id: fileId,
        sheet_updated: updateSuccess
      }
    });
    
  } catch (err) {
    return createJsonResponse({
      success: false,
      error: err.message || "Gagal memproses unggahan foto."
    });
  }
}

// ==============================================================================
// HELPER FUNCTIONS
// ==============================================================================

/**
 * Normalisasi NISN agar selalu 10 digit dengan padding '0' di depan jika terpotong
 */
function normalizeNisn(nisnNip, category) {
  if (!nisnNip) return "";
  let str = String(nisnNip).trim();
  if ((!category || category === "Siswa") && /^\d+$/.test(str) && str.length < 10) {
    while (str.length < 10) {
      str = "0" + str;
    }
  }
  return str;
}

function getSheetInstance() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss) {
    const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (sheet) return sheet;
  }
  // Fallback via ScriptProperties ID or search by name
  const files = DriveApp.getFilesByName("SCS_Database_SMAN1_Soppeng");
  if (files.hasNext()) {
    const file = files.next();
    const openedSs = SpreadsheetApp.open(file);
    return openedSs.getSheetByName(CONFIG.SHEET_NAME);
  }
  throw new Error("Google Sheet Database '" + CONFIG.SHEET_NAME + "' tidak ditemukan. Silakan jalankan setupEnvironment() terlebih dahulu.");
}

/**
 * Normalisasi status agar akurat tanpa terpengaruh huruf besar/kecil atau spasi
 */
function normalizeStatus(rawStatus) {
  if (!rawStatus) return "Pending";
  const s = String(rawStatus).trim().toLowerCase();
  if (s === "done" || s === "terverifikasi" || s === "sudah" || s === "ok" || s === "1") {
    return "Done";
  }
  return "Pending";
}

/**
 * Rekapitulasi progres pengumpulan foto untuk seluruh kelas (33 rombel) dan guru/staf
 */
function getOverallRecapFromSheet() {
  const sheet = getSheetInstance();
  const lastRow = sheet.getLastRow();
  
  const classStats = {};
  CONFIG.CLASSES.forEach(cls => {
    classStats[cls] = { total: 0, done: 0, pending: 0, percentage: 0 };
  });
  
  const teacherStats = { total: 0, done: 0, pending: 0, percentage: 0 };
  const overallStudent = { total: 0, done: 0, pending: 0, percentage: 0 };

  if (lastRow > 1) {
    // Read range [Category(2), Class_Role(3), NISN_NIP(4), Full_Name(5), Photo_Status(6)]
    const values = sheet.getRange(2, 2, lastRow - 1, 5).getValues();
    values.forEach(row => {
      const cat = String(row[0] || "").trim();
      const cls = String(row[1] || "").trim();
      const status = normalizeStatus(row[4]);
      const isDone = (status === "Done");

      if (cat === "Siswa") {
        if (!classStats[cls]) {
          classStats[cls] = { total: 0, done: 0, pending: 0, percentage: 0 };
        }
        classStats[cls].total++;
        overallStudent.total++;
        if (isDone) {
          classStats[cls].done++;
          overallStudent.done++;
        } else {
          classStats[cls].pending++;
          overallStudent.pending++;
        }
      } else if (cat === "Guru/Staf" || cls === CONFIG.TEACHER_ROLE_NAME) {
        teacherStats.total++;
        if (isDone) {
          teacherStats.done++;
        } else {
          teacherStats.pending++;
        }
      }
    });
  }

  // Hitung persentase
  CONFIG.CLASSES.forEach(cls => {
    const s = classStats[cls];
    s.percentage = s.total > 0 ? Number(((s.done / s.total) * 100).toFixed(1)) : 0;
  });

  teacherStats.percentage = teacherStats.total > 0 ? Number(((teacherStats.done / teacherStats.total) * 100).toFixed(1)) : 0;
  overallStudent.percentage = overallStudent.total > 0 ? Number(((overallStudent.done / overallStudent.total) * 100).toFixed(1)) : 0;

  return {
    timestamp: Utilities.formatDate(new Date(), "Asia/Makassar", "dd MMMM yyyy, HH:mm 'WITA'"),
    overallStudent: overallStudent,
    teacherStats: teacherStats,
    classes: classStats
  };
}

function getPeopleFromSheet(category, className) {
  const sheet = getSheetInstance();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return [];
  
  // Read all data range [Timestamp(1), Category(2), Class_Role(3), NISN_NIP(4), Full_Name(5), Photo_Status(6), Drive_File_URL(7), Drive_File_ID(8)]
  const values = sheet.getRange(2, 1, lastRow - 1, 8).getValues();
  const filtered = [];
  
  values.forEach(row => {
    const rowCat = row[1];
    const rowClass = row[2];
    const rawNisn = String(row[3]);
    const nisnNip = normalizeNisn(rawNisn, rowCat);
    const fullName = row[4];
    const status = normalizeStatus(row[5]);
    const fileUrl = row[6] || "";
    
    if (rowCat === category) {
      if (category === "Siswa") {
        if (!className || rowClass === className) {
          filtered.push({
            nisn_nip: nisnNip,
            full_name: fullName,
            class_role: rowClass,
            photo_status: status,
            drive_file_url: fileUrl
          });
        }
      } else {
        // Guru/Staf
        filtered.push({
          nisn_nip: nisnNip,
          full_name: fullName,
          class_role: rowClass,
          photo_status: status,
          drive_file_url: fileUrl
        });
      }
    }
  });
  
  return filtered;
}

function checkPersonStatus(nisnNip, category) {
  const sheet = getSheetInstance();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return { found: false };
  
  const values = sheet.getRange(2, 1, lastRow - 1, 8).getValues();
  const targetNisn = normalizeNisn(nisnNip, category);
  
  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    const rowCat = row[1];
    const rowNisn = normalizeNisn(row[3], rowCat);
    if (rowNisn === targetNisn) {
      const status = normalizeStatus(row[5]);
      return {
        found: true,
        rowIndex: i + 2,
        timestamp: row[0],
        category: rowCat,
        class_role: row[2],
        nisn_nip: rowNisn,
        full_name: row[4],
        photo_status: status,
        drive_file_url: row[6] || "",
        drive_file_id: row[7] || ""
      };
    }
  }
  
  return { found: false };
}

function updateSheetDatabase(data) {
  const sheet = getSheetInstance();
  const lastRow = sheet.getLastRow();
  const targetNisn = normalizeNisn(data.nisn_nip, data.category);
  
  if (lastRow > 1) {
    const values = sheet.getRange(2, 1, lastRow - 1, 4).getValues();
    for (let i = 0; i < values.length; i++) {
      const rowCat = values[i][1];
      const rowNisn = normalizeNisn(values[i][3], rowCat);
      if (rowNisn === targetNisn) {
        const rowIndex = i + 2;
        // Update [Timestamp, Category, Class_Role, NISN_NIP, Full_Name, Photo_Status, Drive_File_URL, Drive_File_ID]
        sheet.getRange(rowIndex, 1).setValue(data.timestamp);
        sheet.getRange(rowIndex, 4).setValue(targetNisn); // Simpan NISN 10 digit di sheet
        sheet.getRange(rowIndex, 6).setValue(data.photo_status);
        sheet.getRange(rowIndex, 7).setValue(data.file_url);
        sheet.getRange(rowIndex, 8).setValue(data.file_id);
        return true;
      }
    }
  }
  
  // Jika NISN belum ada di sheet master, tambahkan baris baru
  sheet.appendRow([
    data.timestamp,
    data.category,
    data.class_role,
    targetNisn,
    "Siswa / Guru Baru",
    data.photo_status,
    data.file_url,
    data.file_id
  ]);
  return true;
}

function sanitizeKey(key) {
  return String(key).replace(/[^a-zA-Z0-9_-]/g, "_");
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
