const fs = require('fs');

const studentsData = JSON.parse(fs.readFileSync('students_data.json', 'utf8'));
console.log('Read ' + studentsData.length + ' students from students_data.json');

const minifiedStudentsJson = JSON.stringify(studentsData);

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal Kartu Pelajar SMAN 1 Soppeng | Verifikasi Data & Upload Pas Foto</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Space+Grotesk:wght@600;700;900&display=swap" rel="stylesheet">
  
  <script>
    // =========================================================================
    // ⚙️ KONFIGURASI UTAMA GOOGLE APPS SCRIPT (EMBED URL DI SINI)
    // =========================================================================
    // Siswa tinggal membuka file index.html ini dan langsung memilih nama & upload foto!
    // Cukup ganti nilai URL di bawah dengan Web App URL hasil Deploy Google Apps Script Anda:
    window.EMBEDDED_GAS_URL = "https://script.google.com/macros/s/AKfycbx_GANTI_DENGAN_URL_DEPLOY_APPS_SCRIPT_ANDA/exec";
  </script>

  <style>
    :root {
      --bg: #FBF8F1;
      --surface: #FFFFFF;
      --black: #000000;
      --yellow: #FFE600;
      --red: #FF334B;
      --red-bg: #FFE5E8;
      --green: #00E599;
      --green-dark: #00875A;
      --cyan: #00F0FF;
      --purple: #8B5CF6;
      --blue: #3B82F6;
      --orange: #FF7A00;
      --border: 3.5px solid #000000;
      --border-thin: 2px solid #000000;
      --shadow: 5px 5px 0px #000000;
      --shadow-lg: 8px 8px 0px #000000;
      --shadow-sm: 3px 3px 0px #000000;
      --radius: 12px;
      --radius-sm: 6px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg);
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--black);
      min-height: 100vh;
      line-height: 1.5;
      background-image: radial-gradient(#000000 1.2px, transparent 1.2px);
      background-size: 24px 24px;
      padding-bottom: 80px;
    }

    h1, h2, h3, h4, .font-display {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }

    /* Neo-Brutalism Utilities */
    .neo-box {
      background: var(--surface);
      border: var(--border);
      box-shadow: var(--shadow);
      border-radius: var(--radius);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .neo-box-yellow {
      background: var(--yellow);
    }
    .neo-box-red {
      background: var(--red);
      color: #fff;
    }
    .neo-box-cyan {
      background: var(--cyan);
    }
    .neo-box-green {
      background: var(--green);
    }

    .neo-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 24px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      background: var(--yellow);
      color: var(--black);
      border: var(--border);
      box-shadow: var(--shadow);
      border-radius: var(--radius-sm);
      cursor: pointer;
      text-decoration: none;
      transition: all 0.1s ease;
      user-select: none;
    }

    .neo-btn:hover {
      transform: translate(-2px, -2px);
      box-shadow: 7px 7px 0px var(--black);
    }

    .neo-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px var(--black);
    }

    .neo-btn-red {
      background: var(--red);
      color: #FFFFFF;
    }
    .neo-btn-cyan {
      background: var(--cyan);
      color: var(--black);
    }
    .neo-btn-green {
      background: var(--green);
      color: var(--black);
    }
    .neo-btn-white {
      background: #FFFFFF;
      color: var(--black);
    }
    .neo-btn-black {
      background: var(--black);
      color: #FFFFFF;
    }

    .neo-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      border: var(--border-thin);
      box-shadow: 2px 2px 0px var(--black);
      border-radius: 999px;
    }

    .neo-badge-pending {
      background: var(--yellow);
      color: #000;
    }
    .neo-badge-done {
      background: var(--green);
      color: #000;
    }
    .neo-badge-danger {
      background: var(--red);
      color: #fff;
    }

    /* Container */
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 16px;
    }

    /* Ticker */
    .ticker-wrap {
      background: var(--black);
      color: var(--yellow);
      overflow: hidden;
      white-space: nowrap;
      padding: 10px 0;
      border-bottom: var(--border);
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.5px;
    }
    .ticker-move {
      display: inline-block;
      animation: ticker 28s linear infinite;
    }
    @keyframes ticker {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }

    /* Header */
    header {
      padding: 24px 0 16px;
    }
    .header-card {
      padding: 20px 24px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      background: #FFFFFF;
      position: relative;
    }
    .brand-section {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .school-logo-frame {
      width: 76px;
      height: 76px;
      background: #FFFFFF;
      border: var(--border);
      box-shadow: var(--shadow-sm);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      flex-shrink: 0;
    }
    .school-logo-frame img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .brand-text h1 {
      font-size: 1.5rem;
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .brand-text p {
      font-size: 0.88rem;
      font-weight: 600;
      color: #555;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* Stepper Bar */
    .stepper-nav {
      margin: 24px 0 32px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }
    @media (max-width: 768px) {
      .stepper-nav {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .step-item {
      padding: 12px;
      background: #FFFFFF;
      border: var(--border);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      opacity: 0.55;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .step-item.active {
      opacity: 1;
      background: var(--yellow);
      transform: translate(-2px, -2px);
      box-shadow: 4px 4px 0px #000;
    }
    .step-item.completed {
      opacity: 1;
      background: #D1FADF;
    }
    .step-number {
      width: 28px;
      height: 28px;
      background: #000;
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .step-item.active .step-number {
      background: #000;
      color: var(--yellow);
    }

    /* Section Views */
    .view-section {
      display: none;
      animation: fadeIn 0.2s ease forwards;
    }
    .view-section.active {
      display: block;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* STEP 1: PILIH KELAS & NAMA */
    .filter-panel {
      padding: 24px;
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 1.4rem;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .section-desc {
      font-size: 0.95rem;
      color: #444;
      margin-bottom: 20px;
      font-weight: 500;
    }

    /* Class Pills */
    .class-pills-label {
      font-size: 0.85rem;
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: block;
    }
    .class-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }
    .class-pill {
      padding: 8px 16px;
      border: var(--border-thin);
      background: #FFFFFF;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 2px 2px 0px #000;
      transition: all 0.1s ease;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .class-pill:hover {
      background: #f0f0f0;
      transform: translate(-1px, -1px);
    }
    .class-pill.active {
      background: var(--yellow);
      box-shadow: 3px 3px 0px #000;
      transform: translate(-2px, -2px);
    }

    /* Search Bar */
    .search-box-container {
      position: relative;
      margin-bottom: 20px;
    }
    .search-input {
      width: 100%;
      padding: 16px 20px 16px 52px;
      font-size: 1.05rem;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 600;
      border: var(--border);
      border-radius: var(--radius-sm);
      box-shadow: var(--shadow-sm);
      outline: none;
      background: #FFFFFF;
      transition: all 0.15s ease;
    }
    .search-input:focus {
      box-shadow: var(--shadow);
      transform: translate(-2px, -2px);
      background: #FFFDE6;
    }
    .search-icon {
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.3rem;
    }
    .search-clear {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      background: #000;
      color: #fff;
      border: none;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }

    /* Students List Grid */
    .students-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      font-weight: 700;
      font-size: 0.95rem;
    }
    .students-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 16px;
    }
    .student-card {
      padding: 18px;
      background: #FFFFFF;
      border: var(--border);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radius-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;
      transition: all 0.15s ease;
      position: relative;
    }
    .student-card:hover {
      transform: translate(-2px, -2px);
      box-shadow: var(--shadow);
    }
    .student-card.is-done {
      border-left: 8px solid var(--green);
    }
    .student-card.is-pending {
      border-left: 8px solid var(--yellow);
    }
    .student-info-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }
    .student-name {
      font-size: 1.1rem;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 4px;
    }
    .student-meta {
      font-size: 0.82rem;
      color: #555;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .data-warning-pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.75rem;
      font-weight: 800;
      background: var(--red-bg);
      color: var(--red);
      border: 1.5px solid var(--red);
      padding: 2px 8px;
      border-radius: 4px;
      width: fit-content;
      margin-top: 4px;
    }

    /* STEP 2: CEK & EDIT DATA */
    .data-check-panel {
      padding: 28px;
    }
    .alert-banner {
      padding: 16px 20px;
      background: #FFF3CD;
      border: var(--border);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radius-sm);
      margin-bottom: 24px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      font-size: 0.95rem;
      font-weight: 600;
    }
    .alert-banner.danger {
      background: #FFE5E8;
      border-color: var(--black);
    }
    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .form-group.full-width {
      grid-column: 1 / -1;
    }
    .form-label {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .form-input, .form-select, .form-textarea {
      width: 100%;
      padding: 14px 16px;
      border: var(--border);
      border-radius: var(--radius-sm);
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      background: #FFFFFF;
      box-shadow: var(--shadow-sm);
      outline: none;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      background: #FFFEEB;
      box-shadow: var(--shadow);
      transform: translate(-1px, -1px);
    }
    .form-input[readonly] {
      background: #EEEEEE;
      cursor: not-allowed;
      color: #444;
    }
    .input-need-fix {
      border: 3.5px solid var(--red) !important;
      background: #FFF8F8 !important;
    }
    .form-hint {
      font-size: 0.8rem;
      font-weight: 600;
      color: #666;
    }
    .form-hint.text-danger {
      color: var(--red);
      font-weight: 700;
    }

    /* STEP 3: UPLOAD FOTO MERAH */
    .photo-panel {
      padding: 28px;
    }
    .guide-box {
      padding: 20px;
      background: #FFFFFF;
      border: var(--border);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radius-sm);
      margin-bottom: 24px;
    }
    .guide-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-top: 14px;
    }
    .guide-item {
      padding: 12px;
      background: #F9F9F9;
      border: var(--border-thin);
      border-radius: var(--radius-sm);
      font-size: 0.85rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .guide-badge {
      width: 32px;
      height: 32px;
      background: var(--red);
      color: #fff;
      border-radius: 6px;
      border: 2px solid #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    .upload-container {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 24px;
      margin-bottom: 28px;
    }
    @media (max-width: 860px) {
      .upload-container {
        grid-template-columns: 1fr;
      }
    }

    .upload-dropzone {
      border: 3.5px dashed var(--black);
      background: #FFFDF5;
      padding: 36px 20px;
      border-radius: var(--radius);
      text-align: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      transition: all 0.2s ease;
      min-height: 320px;
    }
    .upload-dropzone:hover, .upload-dropzone.dragover {
      background: #FFF5D0;
      border-color: var(--black);
      transform: scale(1.01);
    }
    .dropzone-icon {
      width: 72px;
      height: 72px;
      background: var(--yellow);
      border: var(--border);
      box-shadow: var(--shadow-sm);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    .preview-box {
      border: var(--border);
      box-shadow: var(--shadow);
      background: #FFFFFF;
      border-radius: var(--radius);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      min-height: 320px;
    }
    .photo-canvas-wrap {
      width: 240px;
      height: 320px;
      border: var(--border);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radius-sm);
      overflow: hidden;
      position: relative;
      background: #B91C1C; /* Background merah formal pas foto */
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #previewCanvas {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .canvas-face-guide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .face-oval {
      width: 130px;
      height: 170px;
      border: 2.5px dashed rgba(255, 255, 255, 0.85);
      border-radius: 50%;
      margin-top: -30px;
      box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.15);
    }
    .face-shoulder-line {
      width: 190px;
      height: 2px;
      border-top: 2px dashed rgba(255, 255, 255, 0.7);
      margin-top: 15px;
    }

    .red-check-banner {
      margin-top: 14px;
      width: 100%;
      padding: 10px 14px;
      border-radius: var(--radius-sm);
      font-size: 0.85rem;
      font-weight: 700;
      text-align: center;
      border: var(--border-thin);
    }
    .red-check-ok {
      background: #D1FADF;
      color: #027A48;
      border-color: #027A48;
    }
    .red-check-warn {
      background: #FEF08A;
      color: #854D0E;
      border-color: #854D0E;
    }

    /* STEP 4: SELESAI / KARTU DIGITAL */
    .success-panel {
      padding: 32px;
      text-align: center;
    }
    .stamp-done {
      display: inline-block;
      padding: 12px 32px;
      background: var(--green);
      color: #000;
      border: 4px solid #000;
      box-shadow: var(--shadow);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.8rem;
      font-weight: 900;
      transform: rotate(-3deg);
      border-radius: 8px;
      margin-bottom: 24px;
    }

    /* Digital Student Card */
    .card-preview-wrapper {
      max-width: 580px;
      margin: 0 auto 32px;
    }
    .digital-card {
      background: #FFFFFF;
      border: 4px solid #000000;
      box-shadow: var(--shadow-lg);
      border-radius: 16px;
      overflow: hidden;
      text-align: left;
      position: relative;
    }
    .card-top-bar {
      background: var(--yellow);
      border-bottom: 3.5px solid #000;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .card-top-logo {
      width: 54px;
      height: 54px;
      background: #fff;
      border: 2.5px solid #000;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px;
    }
    .card-top-logo img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .card-top-text h3 {
      font-size: 1.15rem;
      margin-bottom: 2px;
    }
    .card-top-text p {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .card-body-content {
      padding: 20px;
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 20px;
    }
    @media (max-width: 560px) {
      .card-body-content {
        grid-template-columns: 1fr;
      }
    }
    .card-photo-frame {
      width: 140px;
      height: 186px;
      border: 3px solid #000;
      box-shadow: 3px 3px 0px #000;
      background: #B91C1C;
      border-radius: 6px;
      overflow: hidden;
    }
    .card-photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .card-data-table {
      font-size: 0.85rem;
    }
    .card-data-row {
      display: grid;
      grid-template-columns: 90px 1fr;
      padding: 4px 0;
      border-bottom: 1px dashed #ddd;
    }
    .card-data-label {
      font-weight: 700;
      color: #666;
    }
    .card-data-val {
      font-weight: 800;
      color: #000;
    }
    .card-footer-bar {
      background: #F4F0EA;
      border-top: 2.5px solid #000;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      font-weight: 700;
    }

    /* Modal Styling */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 999;
      padding: 16px;
    }
    .modal-overlay.open {
      display: flex;
    }
    .modal-card {
      background: #FFFFFF;
      border: 4px solid #000;
      box-shadow: 10px 10px 0px #000;
      border-radius: 14px;
      width: 100%;
      max-width: 580px;
      padding: 28px;
      position: relative;
      max-height: 90vh;
      overflow-y: auto;
    }
    .modal-close {
      position: absolute;
      top: 18px;
      right: 18px;
      background: var(--yellow);
      border: 2px solid #000;
      box-shadow: 2px 2px 0px #000;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      font-weight: 900;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Camera Modal */
    #cameraVideo {
      width: 100%;
      border: 3px solid #000;
      border-radius: 8px;
      transform: scaleX(-1); /* Mirror camera */
      background: #000;
    }

    /* Toast Notification */
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--yellow);
      border: var(--border);
      box-shadow: var(--shadow);
      padding: 14px 20px;
      border-radius: var(--radius-sm);
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 800;
      font-size: 0.95rem;
      z-index: 10000;
      display: none;
      align-items: center;
      gap: 10px;
      animation: slideUp 0.2s ease forwards;
    }
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* Loading Overlay */
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      z-index: 20000;
      color: #FFFFFF;
      font-family: 'Space Grotesk', sans-serif;
    }
    .loading-overlay.open {
      display: flex;
    }
    .spinner-brutal {
      width: 60px;
      height: 60px;
      background: var(--yellow);
      border: 4px solid #000;
      box-shadow: 5px 5px 0px #fff;
      animation: spinBox 1s infinite ease-in-out;
    }
    @keyframes spinBox {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(180deg) scale(1.1); background: var(--cyan); }
      100% { transform: rotate(360deg); background: var(--yellow); }
    }

    /* Print Styles */
    @media print {
      body * {
        visibility: hidden;
      }
      .digital-card, .digital-card * {
        visibility: visible;
      }
      .digital-card {
        position: absolute;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        width: 100%;
        max-width: 600px;
        box-shadow: none !important;
        border: 2px solid #000 !important;
      }
    }
  </style>
</head>
<body>

  <!-- TOP RUNNING MARQUEE / TICKER -->
  <div class="ticker-wrap">
    <div class="ticker-move">
      🔴 WAJIB PAS FOTO LATAR BELAKANG MERAH POLOS ★ FORMAT FORMAL 3X4 SERAGAM SEKOLAH SMAN 1 SOPPENG ★ PASTIKAN DATA DAPODIK LENGKAP ★ SISWA YANG SUDAH UPLOAD BERSTATUS "DONE" TIDAK BISA UPLOAD ULANG ★ VERIFIKASI SEKARANG JUGA! ★
    </div>
  </div>

  <div class="container">
    <!-- HEADER BRANDING -->
    <header>
      <div class="header-card neo-box">
        <div class="brand-section">
          <div class="school-logo-frame">
            <img src="https://arafx.vercel.app/logo.png" alt="Logo SMAN 1 Soppeng" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23FFE600\\'/><text x=\\'50\\' y=\\'55\\' font-family=\\'Arial\\' font-size=\\'18\\' font-weight=\\'bold\\' text-anchor=\\'middle\\'>SMAN 1</text></svg>';">
          </div>
          <div class="brand-text">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
              <span class="neo-badge neo-badge-pending">OFFICIAL PORTAL</span>
              <span class="neo-badge" style="background: #00F0FF;">TAHUN 2026/2027</span>
            </div>
            <h1>SMAN 1 SOPPENG</h1>
            <p>Sistem Verifikasi Data Dapodik & Unggah Pas Foto Kartu Pelajar</p>
          </div>
        </div>

        <div class="header-actions">
          <div class="neo-badge neo-badge-done" style="font-size: 0.85rem; padding: 6px 14px;">
            🟢 SERVER AKTIF / SIAP DIGUNAKAN
          </div>
          <button class="neo-btn neo-btn-white" id="btnOpenConfig" title="Konfigurasi URL Google Apps Script" style="padding: 8px 14px; font-size: 0.8rem;">
            ⚙️ ADMIN
          </button>
        </div>
      </div>
    </header>

    <!-- STEPPER PROGRESS NAVIGATION -->
    <nav class="stepper-nav" aria-label="Progress Alur Siswa">
      <div class="step-item active" id="stepIndicator1" onclick="navigateToStep(1)">
        <div class="step-number">1</div>
        <div>
          <div style="font-size: 0.72rem; color: #555;">LANGKAH 1</div>
          <div>Pilih Nama</div>
        </div>
      </div>
      <div class="step-item" id="stepIndicator2" onclick="navigateToStep(2)">
        <div class="step-number">2</div>
        <div>
          <div style="font-size: 0.72rem; color: #555;">LANGKAH 2</div>
          <div>Cek & Edit Data</div>
        </div>
      </div>
      <div class="step-item" id="stepIndicator3" onclick="navigateToStep(3)">
        <div class="step-number">3</div>
        <div>
          <div style="font-size: 0.72rem; color: #555;">LANGKAH 3</div>
          <div>Upload Foto Merah</div>
        </div>
      </div>
      <div class="step-item" id="stepIndicator4" onclick="navigateToStep(4)">
        <div class="step-number">4</div>
        <div>
          <div style="font-size: 0.72rem; color: #555;">LANGKAH 4</div>
          <div>Kartu Bukti</div>
        </div>
      </div>
    </nav>

    <!-- =================================================================== -->
    <!-- STEP 1: PILIH KELAS & CARI NAMA SISWA                               -->
    <!-- =================================================================== -->
    <section class="view-section active" id="viewStep1">
      <div class="filter-panel neo-box">
        <h2 class="section-title">
          <span>🏫</span> PILIH KELAS & CARI NAMA ANDA
        </h2>
        <p class="section-desc">
          Silakan pilih kelas Anda terlebih dahulu, kemudian gunakan kolom pencarian untuk menemukan nama Anda dengan cepat.
        </p>

        <!-- Filter Kelas -->
        <span class="class-pills-label">PILIH KELAS:</span>
        <div class="class-pills" id="classPillsContainer">
          <!-- Diisi otomatis oleh Javascript -->
        </div>

        <!-- Kolom Pencarian Nama / NISN -->
        <div class="search-box-container">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            id="searchInput" 
            class="search-input" 
            placeholder="Ketik Nama Lengkap atau NISN Anda di sini untuk mencari..."
            autocomplete="off"
          >
          <button class="search-clear" id="searchClearBtn" title="Hapus pencarian">✕</button>
        </div>

        <div class="students-stats">
          <div>
            <span id="displayCountLabel">Menampilkan 0 Siswa</span>
            <span id="activeClassLabel" style="margin-left: 8px; font-weight: 800; color: #2563EB;"></span>
          </div>
          <div style="display: flex; gap: 8px;">
            <span class="neo-badge neo-badge-pending" id="badgePendingCount">0 Pending</span>
            <span class="neo-badge neo-badge-done" id="badgeDoneCount">0 Done</span>
          </div>
        </div>

        <!-- Daftar Kartu Siswa -->
        <div class="students-grid" id="studentsGrid">
          <!-- Card Siswa di-render otomatis -->
        </div>

        <!-- State Empty / Tidak Ada Hasil -->
        <div id="noResultsBox" style="display: none; padding: 40px; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">🤔</div>
          <h3 style="font-size: 1.2rem;">Nama Siswa Tidak Ditemukan</h3>
          <p style="color: #666; font-size: 0.9rem; margin-top: 4px;">Pastikan ejaan nama sesuai data Dapodik atau coba cari berdasarkan NISN.</p>
        </div>
      </div>
    </section>

    <!-- =================================================================== -->
    <!-- STEP 2: CEK DATA & LENGKAPI DATA KOSONG (-)                         -->
    <!-- =================================================================== -->
    <section class="view-section" id="viewStep2">
      <div class="data-check-panel neo-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <button class="neo-btn neo-btn-white" onclick="navigateToStep(1)">
            ⬅️ GANTI SISWA / PILIH KEMBALI
          </button>
          <div id="step2StatusBadge">
            <!-- Badge Status Pending / Done -->
          </div>
        </div>

        <h2 class="section-title">
          <span>📋</span> VERIFIKASI KELENGKAPAN DATA SISWA
        </h2>
        <p class="section-desc">
          Periksa data identitas Anda di bawah ini. Jika ada kolom yang kosong atau bertanda <strong>(-)</strong>, silakan lengkapi sebelum mengunggah foto.
        </p>

        <!-- Banner jika ada data kosong (-) -->
        <div class="alert-banner danger" id="incompleteNotice" style="display: none;">
          <div style="font-size: 1.6rem; flex-shrink: 0;">⚠️</div>
          <div>
            <div style="font-weight: 800; font-family: 'Space Grotesk'; font-size: 1rem;">DATA BELUM LENGKAP ATAU BERTANDA (-)</div>
            <p style="margin-top: 2px;">Terdapat kolom yang belum terisi (seperti Alamat atau TTL). Silakan isi dengan data yang benar di bawah ini. Data yang Anda ketik akan otomatis menimpa dan memperbarui data di spreadsheet.</p>
          </div>
        </div>

        <!-- Banner jika status sudah DONE -->
        <div class="alert-banner" id="alreadyDoneNotice" style="display: none; background: #D1FADF; border-color: #000;">
          <div style="font-size: 1.6rem; flex-shrink: 0;">✅</div>
          <div>
            <div style="font-weight: 800; font-family: 'Space Grotesk'; font-size: 1rem;">DATA & FOTO ANDA SUDAH TERVERIFIKASI (STATUS: DONE)</div>
            <p style="margin-top: 2px;">Data Anda sudah lengkap dan foto berlatar merah sudah berhasil tersimpan. Anda tidak perlu mengupload foto lagi.</p>
          </div>
        </div>

        <!-- Form Edit Siswa -->
        <form id="studentDataForm" onsubmit="event.preventDefault(); goToPhotoStep();">
          <div class="form-grid">
            <!-- Nama Lengkap (Dapodik) -->
            <div class="form-group">
              <label class="form-label" for="editNama">
                <span>Nama Lengkap (Dapodik)</span>
                <span class="neo-badge neo-badge-pending" style="font-size: 0.65rem;">DAPODIK</span>
              </label>
              <input type="text" id="editNama" class="form-input" readonly>
            </div>

            <!-- Kelas -->
            <div class="form-group">
              <label class="form-label" for="editKelas">
                <span>Kelas</span>
              </label>
              <input type="text" id="editKelas" class="form-input" readonly>
            </div>

            <!-- NIS / NISN -->
            <div class="form-group">
              <label class="form-label" for="editNisn">
                <span>NIS / NISN</span>
              </label>
              <input type="text" id="editNisn" class="form-input" readonly>
            </div>

            <!-- Jenis Kelamin -->
            <div class="form-group">
              <label class="form-label" for="editJk">
                <span>Jenis Kelamin</span>
              </label>
              <select id="editJk" class="form-select">
                <option value="LAKI-LAKI">LAKI-LAKI</option>
                <option value="PEREMPUAN">PEREMPUAN</option>
              </select>
            </div>

            <!-- Tempat, Tanggal Lahir (TTL) -->
            <div class="form-group">
              <label class="form-label" for="editTtl">
                <span>Tempat, Tanggal Lahir (TTL)</span>
                <span id="ttlBadgeAlert"></span>
              </label>
              <input type="text" id="editTtl" class="form-input" placeholder="Contoh: SOPPENG, 12 MEI 2010" required>
              <span class="form-hint" id="ttlHint">Format: KOTA, TANGGAL BULAN TAHUN</span>
            </div>

            <!-- QR ID / Siswa ID -->
            <div class="form-group">
              <label class="form-label" for="editQrId">
                <span>QR ID Siswa</span>
              </label>
              <input type="text" id="editQrId" class="form-input" readonly>
            </div>

            <!-- Alamat Lengkap (Seringkali berisi '-') -->
            <div class="form-group full-width">
              <label class="form-label" for="editAlamat">
                <span>Alamat Tempat Tinggal / Domisili</span>
                <span id="alamatBadgeAlert"></span>
              </label>
              <textarea id="editAlamat" class="form-textarea" rows="2" placeholder="Masukkan alamat lengkap (Nama Jalan/Dusun/Desa, RT/RW, Kelurahan, Kecamatan)..." required></textarea>
              <span class="form-hint" id="alamatHint">Wajib diisi dengan alamat lengkap domisili siswa saat ini.</span>
            </div>
          </div>

          <div style="display: flex; justify-content: flex-end; gap: 14px; flex-wrap: wrap;">
            <button type="button" class="neo-btn neo-btn-white" onclick="navigateToStep(1)">
              BATAL
            </button>
            <button type="submit" class="neo-btn neo-btn-yellow" id="btnProceedToPhoto">
              LANJUT KE UPLOAD FOTO ➜
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- =================================================================== -->
    <!-- STEP 3: UPLOAD PAS FOTO BERLATAR MERAH                              -->
    <!-- =================================================================== -->
    <section class="view-section" id="viewStep3">
      <div class="photo-panel neo-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <button class="neo-btn neo-btn-white" onclick="navigateToStep(2)">
            ⬅️ KEMBALI CEK DATA
          </button>
          <div id="step3StudentTag" class="neo-badge" style="background: #00F0FF; font-size: 0.9rem;">
            <!-- Nama Siswa & Kelas -->
          </div>
        </div>

        <h2 class="section-title">
          <span>📸</span> UPLOAD PAS FOTO BERLATAR MERAH (3X4)
        </h2>
        <p class="section-desc">
          Foto ini akan dicetak langsung pada <strong>Kartu Pelajar SMAN 1 Soppeng</strong>. Pastikan foto memenuhi standar resmi sekolah.
        </p>

        <!-- KOTAK KHUSUS JIKA SUDAH DONE (TERKUNCI) -->
        <div id="lockedPhotoContainer" style="display: none; margin-bottom: 24px;">
          <div class="alert-banner" style="background: #FFE5E8; border: 4px solid #000; box-shadow: var(--shadow);">
            <div style="font-size: 2.2rem; flex-shrink: 0;">🔒</div>
            <div>
              <div style="font-family: 'Space Grotesk'; font-size: 1.25rem; font-weight: 900; color: #B91C1C;">
                FOTO & DATA ANDA TELAH TERVERIFIKASI (STATUS: DONE)
              </div>
              <p style="margin-top: 4px; font-weight: 600;">
                Siswa atas nama ini sudah menyelesaikan proses upload foto dan data telah dikunci di database Google Spreadsheet. Untuk menjaga keaslian data kartu pelajar, <strong>siswa tidak dapat mengunggah foto ulang</strong>.
              </p>
              <div style="margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="neo-btn neo-btn-green" onclick="navigateToStep(4)">
                  LIHAT KARTU BUKTI DIGITAL ➜
                </button>
                <button class="neo-btn neo-btn-white" onclick="navigateToStep(1)">
                  PILIH SISWA LAIN
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- FORM UPLOAD FOTO AKTIF (JIKA MASIH PENDING) -->
        <div id="activeUploadContainer">
          <!-- Panduan Ketentuan Pas Foto -->
          <div class="guide-box">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
              <h3 style="font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                <span>📌</span> SYARAT WAJIB PAS FOTO KARTU PELAJAR:
              </h3>
              <span class="neo-badge neo-badge-danger">LATAR BELAKANG MERAH</span>
            </div>

            <div class="guide-list">
              <div class="guide-item">
                <div class="guide-badge">🔴</div>
                <div>Latar Belakang <strong>Merah Polos</strong> (bukan biru/pemandangan)</div>
              </div>
              <div class="guide-item">
                <div class="guide-badge">👔</div>
                <div>Mengenakan <strong>Seragam Sekolah Lengkap</strong> & rapi berkerah</div>
              </div>
              <div class="guide-item">
                <div class="guide-badge">👤</div>
                <div>Wajah <strong>Menghadap Tegak Lurus</strong> ke kamera (tidak miring/selfie)</div>
              </div>
              <div class="guide-item">
                <div class="guide-badge">✨</div>
                <div>Pencahayaan terang & jelas, <strong>tidak memakai kacamata hitam/filter</strong></div>
              </div>
            </div>
          </div>

          <!-- Upload Dropzone & Canvas Preview -->
          <div class="upload-container">
            <!-- Sisi Kiri: Pilihan File & Kamera -->
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div class="upload-dropzone" id="dropZone">
                <div class="dropzone-icon">📷</div>
                <div style="font-family: 'Space Grotesk'; font-size: 1.15rem; font-weight: 800;">
                  TARIK & LETAKKAN FOTO DI SINI
                </div>
                <p style="font-size: 0.85rem; color: #666; max-width: 280px;">
                  Mendukung format JPG, PNG, atau WEBP. Maksimal 10 MB (akan dikompres otomatis).
                </p>

                <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 8px;">
                  <button type="button" class="neo-btn neo-btn-yellow" onclick="document.getElementById('fileInput').click()">
                    📁 PILIH DARI FILE / HP
                  </button>
                  <button type="button" class="neo-btn neo-btn-cyan" id="btnStartCamera">
                    📸 BUKA KAMERA
                  </button>
                </div>
                <input type="file" id="fileInput" accept="image/*" style="display: none;">
              </div>

              <!-- Tombol Opsi Panduan -->
              <div style="background: #fff; padding: 14px; border: var(--border-thin); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: space-between;">
                <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px;" for="toggleGuideCheck">
                  <input type="checkbox" id="toggleGuideCheck" checked style="width: 18px; height: 18px;">
                  Tampilkan Garis Panduan Wajah (Oval)
                </label>
                <button type="button" class="neo-btn neo-btn-white" style="padding: 4px 10px; font-size: 0.75rem;" id="btnResetPhoto" style="display: none;">
                  HAPUS FOTO
                </button>
              </div>
            </div>

            <!-- Sisi Kanan: Pratinjau Foto 3:4 & Cek Latar Merah -->
            <div class="preview-box">
              <span class="neo-badge neo-badge-pending" style="position: absolute; top: 12px; left: 16px;">
                PRATINJAU 3:4
              </span>

              <div class="photo-canvas-wrap" id="canvasWrapper">
                <canvas id="previewCanvas" width="600" height="800"></canvas>
                
                <div class="canvas-face-guide" id="faceGuideOverlay">
                  <div class="face-oval"></div>
                  <div class="face-shoulder-line"></div>
                </div>
              </div>

              <!-- Hasil Deteksi Latar Belakang Merah -->
              <div id="redDetectAlert" class="red-check-banner red-check-warn">
                ⚠️ Belum ada foto yang dipilih. Silakan upload pas foto latar merah Anda.
              </div>

              <div style="font-size: 0.75rem; color: #666; margin-top: 8px; text-align: center;">
                *Pastikan posisi kepala pas di dalam oval garis putus-putus.
              </div>
            </div>
          </div>

          <!-- Tombol Kirim / Submit -->
          <div style="display: flex; justify-content: flex-end; gap: 14px; flex-wrap: wrap;">
            <button type="button" class="neo-btn neo-btn-white" onclick="navigateToStep(2)">
              ⬅️ KEMBALI KE DATA
            </button>
            <button type="button" class="neo-btn neo-btn-green" id="btnSubmitAll" style="font-size: 1.1rem; padding: 14px 32px;">
              🚀 SIMPAN DATA & UPLOAD FOTO RESMI
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- =================================================================== -->
    <!-- STEP 4: SELESAI & KARTU TANDA BUKTI DIGITAL                         -->
    <!-- =================================================================== -->
    <section class="view-section" id="viewStep4">
      <div class="success-panel neo-box">
        <div class="stamp-done">
          VERIFIED & DONE ★
        </div>

        <h2 style="font-size: 1.8rem; margin-bottom: 8px;">
          DATA & FOTO BERHASIL DIVERIFIKASI!
        </h2>
        <p style="font-size: 1rem; color: #444; max-width: 600px; margin: 0 auto 28px; font-weight: 600;">
          Terima kasih! Pas foto latar merah dan data diri Anda telah tercatat dengan aman di database pembuatan Kartu Pelajar SMAN 1 Soppeng.
        </p>

        <!-- KARTU DIGITAL SISWA SMAN 1 SOPPENG -->
        <div class="card-preview-wrapper">
          <div class="digital-card" id="studentDigitalCard">
            <!-- Header Kartu -->
            <div class="card-top-bar">
              <div class="card-top-logo">
                <img src="https://arafx.vercel.app/logo.png" alt="Logo SMAN 1 Soppeng">
              </div>
              <div class="card-top-text">
                <h3>SMAN 1 SOPPENG</h3>
                <p>KARTU TANDA BUKTI VERIFIKASI SISWA</p>
              </div>
            </div>

            <!-- Konten Kartu -->
            <div class="card-body-content">
              <!-- Foto -->
              <div class="card-photo-frame">
                <img id="cardPhotoImg" src="" alt="Pas Foto Siswa">
              </div>

              <!-- Tabel Data -->
              <div class="card-data-table">
                <div class="card-data-row">
                  <span class="card-data-label">NAMA</span>
                  <span class="card-data-val" id="cardValNama">-</span>
                </div>
                <div class="card-data-row">
                  <span class="card-data-label">KELAS</span>
                  <span class="card-data-val" id="cardValKelas">-</span>
                </div>
                <div class="card-data-row">
                  <span class="card-data-label">NISN</span>
                  <span class="card-data-val" id="cardValNisn">-</span>
                </div>
                <div class="card-data-row">
                  <span class="card-data-label">TTL</span>
                  <span class="card-data-val" id="cardValTtl">-</span>
                </div>
                <div class="card-data-row">
                  <span class="card-data-label">L/P</span>
                  <span class="card-data-val" id="cardValJk">-</span>
                </div>
                <div class="card-data-row">
                  <span class="card-data-label">ALAMAT</span>
                  <span class="card-data-val" id="cardValAlamat">-</span>
                </div>
                <div class="card-data-row" style="border-bottom: none; margin-top: 6px;">
                  <span class="card-data-label">STATUS</span>
                  <span class="neo-badge neo-badge-done" style="font-size: 0.72rem; padding: 2px 8px;">TERVERIFIKASI (DONE)</span>
                </div>
              </div>
            </div>

            <!-- Footer Kartu -->
            <div class="card-footer-bar">
              <div id="cardQrCodeWrapper" style="display: flex; align-items: center; gap: 8px;">
                <div id="cardQrCodeBox" style="width: 44px; height: 44px; background: #fff; border: 1.5px solid #000; padding: 2px;">
                  <img id="cardQrImg" src="" style="width: 100%; height: 100%;" alt="QR">
                </div>
                <div>
                  <div style="font-size: 0.7rem; color: #555;">ID DOKUMEN:</div>
                  <div id="cardValQrId" style="font-size: 0.75rem; font-family: 'Space Grotesk'; font-weight: 800;">-</div>
                </div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 0.68rem; color: #666;">TANGGAL TERBIT:</div>
                <div id="cardValDate" style="font-size: 0.78rem;">-</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
          <button class="neo-btn neo-btn-cyan" onclick="window.print()">
            🖨️ CETAK / SIMPAN BUKTI (PDF)
          </button>
          <button class="neo-btn neo-btn-yellow" onclick="resetToHome()">
            🔄 KEMBALI KE AWAL (SISWA LAIN)
          </button>
        </div>
      </div>
    </section>

  </div> <!-- End .container -->

  <!-- =================================================================== -->
  <!-- MODAL: BUKA KAMERA LANGSUNG                                         -->
  <!-- =================================================================== -->
  <div class="modal-overlay" id="cameraModal">
    <div class="modal-card">
      <button class="modal-close" onclick="closeCamera()">✕</button>
      <h3 style="font-size: 1.3rem; margin-bottom: 8px;">📸 AMBIL PAS FOTO DENGAN KAMERA</h3>
      <p style="font-size: 0.85rem; color: #666; margin-bottom: 16px;">
        Posisikan kepala Anda tegak dan simetris menghadap kamera. Pastikan latar belakang Anda adalah dinding/kain berwarna merah polos.
      </p>

      <div style="position: relative; overflow: hidden; border-radius: 8px;">
        <video id="cameraVideo" autoplay playsinline></video>
        <div class="canvas-face-guide">
          <div class="face-oval" style="margin-top: -10px;"></div>
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 18px;">
        <button class="neo-btn neo-btn-white" onclick="closeCamera()">BATAL</button>
        <button class="neo-btn neo-btn-red" id="btnCapturePhoto">AMBIL FOTO 📷</button>
      </div>
    </div>
  </div>

  <!-- =================================================================== -->
  <!-- MODAL: PENGATURAN API GOOGLE APPS SCRIPT                            -->
  <!-- =================================================================== -->
  <div class="modal-overlay" id="configModal">
    <div class="modal-card">
      <button class="modal-close" onclick="closeConfigModal()">✕</button>
      <h3 style="font-size: 1.3rem; margin-bottom: 8px;">⚙️ PENGATURAN GOOGLE APPS SCRIPT</h3>
      <p style="font-size: 0.88rem; color: #666; margin-bottom: 20px;">
        Hubungkan aplikasi ini secara langsung ke Google Spreadsheet & Google Drive sekolah Anda dengan memasukkan URL Web App Google Apps Script.
      </p>

      <div class="form-group" style="margin-bottom: 16px;">
        <label class="form-label" for="gasUrlInput">URL Web App (Google Apps Script)</label>
        <input 
          type="url" 
          id="gasUrlInput" 
          class="form-input" 
          placeholder="https://script.google.com/macros/s/AKfycb.../exec"
        >
        <span class="form-hint">Dapatkan dari menu Deploy > New deployment > Web app di editor Google Apps Script.</span>
      </div>

      <div style="background: #F4F0EA; border: var(--border-thin); padding: 14px; border-radius: 8px; margin-bottom: 20px;">
        <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 4px;">STATUS KONEKSI SAAT INI:</div>
        <div id="apiConnectionStatus" style="font-size: 0.9rem; font-weight: 700;">
          🟡 Mode Demo / Penyimpanan Browser Aktif
        </div>
        <div style="margin-top: 10px; display: flex; gap: 8px;">
          <button type="button" class="neo-btn neo-btn-white" style="font-size: 0.8rem; padding: 6px 14px;" id="btnTestConnection">
            ⚡ TEST KONEKSI
          </button>
          <button type="button" class="neo-btn neo-btn-white" style="font-size: 0.8rem; padding: 6px 14px;" id="btnSyncFromSheet">
            📥 SYNC DARI SHEET
          </button>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <button type="button" class="neo-btn neo-btn-white" style="font-size: 0.8rem; color: #B91C1C;" id="btnResetLocalStorage">
          RESET DATA DEMO
        </button>
        <div style="display: flex; gap: 10px;">
          <button type="button" class="neo-btn neo-btn-white" onclick="closeConfigModal()">TUTUP</button>
          <button type="button" class="neo-btn neo-btn-yellow" id="btnSaveConfig">SIMPAN PENGATURAN</button>
        </div>
      </div>
    </div>
  </div>

  <!-- LOADING OVERLAY -->
  <div class="loading-overlay" id="loadingOverlay">
    <div class="spinner-brutal"></div>
    <div style="font-size: 1.3rem; font-weight: 900; letter-spacing: 0.5px;" id="loadingText">
      MEMPROSES DATA...
    </div>
    <div style="font-size: 0.85rem; opacity: 0.9;">Mohon tunggu, jangan menutup halaman ini</div>
  </div>

  <!-- TOAST NOTIFICATION -->
  <div class="toast" id="toastBox">
    <span id="toastIcon">🔔</span>
    <span id="toastMsg">Notifikasi</span>
  </div>

  <!-- =================================================================== -->
  <!-- JAVASCRIPT LOGIC & EMBEDDED STUDENTS DATA                           -->
  <!-- =================================================================== -->
  <script>
    // =========================================================================
    // ⚙️ KONFIGURASI URL GOOGLE APPS SCRIPT (DI-EMBED LANGSUNG DI SINI)
    // Siswa cukup buka index.html ini langsung di browser dan mulai mengisi data & upload foto!
    // Ganti URL di bawah dengan Web App URL hasil Deploy Google Apps Script sekolah Anda:
    // =========================================================================
    const EMBEDDED_GAS_URL = "https://script.google.com/macros/s/AKfycbx_GANTI_DENGAN_URL_DEPLOY_APPS_SCRIPT_ANDA/exec";

    // Gunakan URL yang di-embed langsung, atau URL tersimpan di browser
    let gasWebAppUrl = (EMBEDDED_GAS_URL && !EMBEDDED_GAS_URL.includes("GANTI_DENGAN_URL")) 
                       ? EMBEDDED_GAS_URL 
                       : (localStorage.getItem('SMAN1_GAS_URL') || '');

    // Embedded Data 387 Siswa Kelas X SMAN 1 Soppeng dari KARTU_PERPUS_KELAS_X.csv
    const INITIAL_STUDENTS = ${minifiedStudentsJson};

    // State Aplikasi
    let students = [];
    let selectedClass = 'SEMUA';
    let currentStudent = null;
    let currentPhotoBase64 = '';
    let videoStream = null;

    // Inisialisasi Aplikasi Saat Load
    document.addEventListener('DOMContentLoaded', () => {
      initStudentsData();
      renderClassPills();
      renderStudentsGrid();
      setupEventListeners();
      checkApiStatus();
      drawInitialPlaceholderCanvas();
      
      // Jika URL Google Apps Script sudah di-embed, otomatis lakukan background sync
      if (gasWebAppUrl) {
        autoSyncFromSheetSilently();
      }
    });

    // Inisialisasi Data dari LocalStorage atau Data Awal
    function initStudentsData() {
      const saved = localStorage.getItem('SMAN1_STUDENTS_DATA');
      if (saved) {
        try {
          students = JSON.parse(saved);
        } catch (e) {
          students = [...INITIAL_STUDENTS];
        }
      } else {
        students = [...INITIAL_STUDENTS];
        saveStudentsDataLocal();
      }
    }

    function saveStudentsDataLocal() {
      localStorage.setItem('SMAN1_STUDENTS_DATA', JSON.stringify(students));
    }

    // Render Tombol Pilihan Kelas (X. 1 s/d X. 11 & SEMUA)
    function renderClassPills() {
      const classSet = new Set();
      students.forEach(s => {
        if (s.kelas) classSet.add(s.kelas);
      });
      
      const classList = Array.from(classSet).sort((a, b) => {
        // Sort kelas seperti X. 1, X. 2 ... X. 10
        const numA = parseInt(a.replace(/[^0-9]/g, '')) || 0;
        const numB = parseInt(b.replace(/[^0-9]/g, '')) || 0;
        return numA - numB;
      });

      const container = document.getElementById('classPillsContainer');
      container.innerHTML = '';

      // Pill 'SEMUA KELAS'
      const allPill = document.createElement('button');
      allPill.className = \`class-pill \${selectedClass === 'SEMUA' ? 'active' : ''}\`;
      allPill.innerHTML = \`<span>Semua Kelas (\${students.length})</span>\`;
      allPill.onclick = () => selectClassFilter('SEMUA');
      container.appendChild(allPill);

      // Pill masing-masing kelas
      classList.forEach(cls => {
        const count = students.filter(s => s.kelas === cls).length;
        const pill = document.createElement('button');
        pill.className = \`class-pill \${selectedClass === cls ? 'active' : ''}\`;
        pill.innerHTML = \`<span>\${cls}</span> <span style="font-size: 0.75rem; opacity: 0.7;">(\${count})</span>\`;
        pill.onclick = () => selectClassFilter(cls);
        container.appendChild(pill);
      });
    }

    function selectClassFilter(cls) {
      selectedClass = cls;
      document.querySelectorAll('.class-pill').forEach(p => p.classList.remove('active'));
      renderClassPills();
      renderStudentsGrid();
    }

    // Render Grid Siswa Berdasarkan Kelas & Filter Pencarian
    function renderStudentsGrid() {
      const searchKeyword = (document.getElementById('searchInput').value || '').trim().toLowerCase();
      const grid = document.getElementById('studentsGrid');
      const noResults = document.getElementById('noResultsBox');

      let filtered = students.filter(s => {
        const matchClass = (selectedClass === 'SEMUA' || s.kelas === selectedClass);
        const matchSearch = !searchKeyword || 
          s.nama.toLowerCase().includes(searchKeyword) || 
          (s.nisn && s.nisn.toLowerCase().includes(searchKeyword)) ||
          (s.alamat && s.alamat.toLowerCase().includes(searchKeyword));
        return matchClass && matchSearch;
      });

      // Update counters
      const pendingCount = filtered.filter(s => s.status !== 'Done').length;
      const doneCount = filtered.filter(s => s.status === 'Done').length;
      document.getElementById('displayCountLabel').textContent = \`Menampilkan \${filtered.length} Siswa\`;
      document.getElementById('badgePendingCount').textContent = \`\${pendingCount} Pending\`;
      document.getElementById('badgeDoneCount').textContent = \`\${doneCount} Done\`;
      document.getElementById('activeClassLabel').textContent = selectedClass === 'SEMUA' ? '' : \`• Kelas \${selectedClass}\`;

      grid.innerHTML = '';

      if (filtered.length === 0) {
        noResults.style.display = 'block';
        return;
      }
      noResults.style.display = 'none';

      filtered.forEach(student => {
        const isDone = (student.status === 'Done');
        const hasMissingAddress = (!student.alamat || student.alamat.trim() === '-' || student.alamat.trim() === '');
        const hasMissingTtl = (!student.ttl || student.ttl.trim() === '-' || student.ttl.trim() === '');
        const isIncomplete = hasMissingAddress || hasMissingTtl;

        const card = document.createElement('div');
        card.className = \`student-card \${isDone ? 'is-done' : 'is-pending'}\`;

        card.innerHTML = \`
          <div>
            <div class="student-info-top">
              <span class="neo-badge" style="background: #E2E8F0; font-size: 0.75rem;">\${student.kelas}</span>
              <span class="neo-badge \${isDone ? 'neo-badge-done' : 'neo-badge-pending'}">
                \${isDone ? '✅ DONE' : '⏳ PENDING'}
              </span>
            </div>
            
            <div class="student-name" style="margin-top: 8px;">\${student.nama}</div>
            
            <div class="student-meta">
              <div><strong>NIS/NISN:</strong> \${student.nisn || '-'}</div>
              <div><strong>TTL:</strong> \${student.ttl || '-'}</div>
              <div><strong>Alamat:</strong> \${hasMissingAddress ? '<span style="color: #FF334B; font-weight: 800;">Belum Lengkap (-)</span>' : escapeHtml(student.alamat)}</div>
            </div>

            \${isIncomplete ? '<div class="data-warning-pill">⚠️ Perlu Lengkapi Data (-)</div>' : ''}
          </div>

          <div style="margin-top: 14px;">
            <button class="neo-btn \${isDone ? 'neo-btn-green' : 'neo-btn-yellow'}" style="width: 100%; font-size: 0.88rem; padding: 10px 14px;" onclick="selectStudent('\${student.nisn || student.qrId || student.nama}')">
              \${isDone ? 'LIHAT DATA & BUKTI ➜' : 'PILIH NAMA & UPLOAD ➜'}
            </button>
          </div>
        \`;

        grid.appendChild(card);
      });
    }

    // Navigasi Langkah (Stepper)
    function navigateToStep(step) {
      if ((step === 2 || step === 3 || step === 4) && !currentStudent) {
        showToast('Silakan pilih nama siswa terlebih dahulu!', '⚠️');
        return;
      }

      // Update Tab Views
      document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
      document.getElementById(\`viewStep\${step}\`).classList.add('active');

      // Update Stepper Nav
      document.querySelectorAll('.step-item').forEach((item, idx) => {
        item.classList.remove('active');
        if (idx + 1 < step) item.classList.add('completed');
        else item.classList.remove('completed');
        if (idx + 1 === step) item.classList.add('active');
      });

      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    // Pilih Siswa dari Daftar
    function selectStudent(identifier) {
      const s = students.find(item => 
        (item.nisn && item.nisn === identifier) || 
        (item.qrId && item.qrId === identifier) || 
        item.nama === identifier
      );

      if (!s) return;
      currentStudent = s;

      // Populate Form di Step 2
      document.getElementById('editNama').value = s.nama;
      document.getElementById('editKelas').value = s.kelas;
      document.getElementById('editNisn').value = s.nisn;
      document.getElementById('editJk').value = (s.jk && s.jk.toUpperCase().includes('PEREMPUAN')) ? 'PEREMPUAN' : 'LAKI-LAKI';
      document.getElementById('editTtl').value = (s.ttl && s.ttl !== '-') ? s.ttl : '';
      document.getElementById('editQrId').value = s.qrId || '-';
      document.getElementById('editAlamat').value = (s.alamat && s.alamat !== '-') ? s.alamat : '';

      // Tampilkan Badge & Alert jika data (-)
      const isDone = (s.status === 'Done');
      const isMissingAddress = (!s.alamat || s.alamat === '-');
      const isMissingTtl = (!s.ttl || s.ttl === '-');

      document.getElementById('incompleteNotice').style.display = (isMissingAddress || isMissingTtl) ? 'flex' : 'none';
      document.getElementById('alreadyDoneNotice').style.display = isDone ? 'flex' : 'none';

      const step2Badge = document.getElementById('step2StatusBadge');
      step2Badge.innerHTML = \`<span class="neo-badge \${isDone ? 'neo-badge-done' : 'neo-badge-pending'}">\${isDone ? '✅ STATUS: DONE' : '⏳ STATUS: PENDING'}</span>\`;

      // Highlight input jika kosong
      const alamatInput = document.getElementById('editAlamat');
      if (isMissingAddress) {
        alamatInput.classList.add('input-need-fix');
        document.getElementById('alamatBadgeAlert').innerHTML = '<span class="neo-badge neo-badge-danger" style="font-size: 0.65rem;">KOSONG (-) WAJIB DIISI</span>';
      } else {
        alamatInput.classList.remove('input-need-fix');
        document.getElementById('alamatBadgeAlert').innerHTML = '';
      }

      const ttlInput = document.getElementById('editTtl');
      if (isMissingTtl) {
        ttlInput.classList.add('input-need-fix');
        document.getElementById('ttlBadgeAlert').innerHTML = '<span class="neo-badge neo-badge-danger" style="font-size: 0.65rem;">KOSONG (-) WAJIB DIISI</span>';
      } else {
        ttlInput.classList.remove('input-need-fix');
        document.getElementById('ttlBadgeAlert').innerHTML = '';
      }

      // Atur tombol proceed
      const proceedBtn = document.getElementById('btnProceedToPhoto');
      if (isDone) {
        proceedBtn.textContent = 'LIHAT FOTO & BUKTI TERVERIFIKASI ➜';
        proceedBtn.className = 'neo-btn neo-btn-green';
      } else {
        proceedBtn.textContent = 'LANJUT KE UPLOAD FOTO ➜';
        proceedBtn.className = 'neo-btn neo-btn-yellow';
      }

      // Update Tag Step 3
      document.getElementById('step3StudentTag').textContent = \`\${s.nama} (\${s.kelas})\`;

      // Setup State Step 3
      setupStep3View();

      // Pindah ke Step 2
      navigateToStep(2);
    }

    // Step 2 Form Handler: Validasi & Simpan Perubahan Data Lokal
    function goToPhotoStep() {
      const inputAlamat = document.getElementById('editAlamat').value.trim();
      const inputTtl = document.getElementById('editTtl').value.trim();

      if (!inputAlamat || inputAlamat === '-') {
        showToast('Mohon isi alamat lengkap Anda terlebih dahulu!', '⚠️');
        document.getElementById('editAlamat').focus();
        return;
      }
      if (!inputTtl || inputTtl === '-') {
        showToast('Mohon lengkapi Tempat, Tanggal Lahir Anda!', '⚠️');
        document.getElementById('editTtl').focus();
        return;
      }

      // Update memory data
      currentStudent.alamat = inputAlamat;
      currentStudent.ttl = inputTtl;
      currentStudent.jk = document.getElementById('editJk').value;

      setupStep3View();
      navigateToStep(3);
    }

    // Setup Tampilan Step 3 (Apakah Locked / Active)
    function setupStep3View() {
      const isDone = (currentStudent.status === 'Done');
      const lockedContainer = document.getElementById('lockedPhotoContainer');
      const activeContainer = document.getElementById('activeUploadContainer');

      if (isDone) {
        // SISWA SUDAH DONE -> KUNCI FORM!
        lockedContainer.style.display = 'block';
        activeContainer.style.display = 'none';

        // Tampilkan foto yang sudah diupload jika ada
        if (currentStudent.fotoUrl) {
          loadExistingPhotoToCanvas(currentStudent.fotoUrl);
        }
      } else {
        // SISWA MASIH PENDING -> BISA UPLOAD
        lockedContainer.style.display = 'none';
        activeContainer.style.display = 'block';
      }
    }

    // Canvas & Image Processing (Kompresi & Deteksi Warna Latar Merah)
    function handleSelectedFile(file) {
      if (!file || !file.type.startsWith('image/')) {
        showToast('Pilih file foto/gambar yang valid!', '❌');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        processImageIntoCanvas(e.target.result);
      };
      reader.readAsDataURL(file);
    }

    function processImageIntoCanvas(dataUrl) {
      const img = new Image();
      img.onload = () => {
        const canvas = document.getElementById('previewCanvas');
        const ctx = canvas.getContext('2d');

        // Dimensi 3:4 standar (600x800)
        canvas.width = 600;
        canvas.height = 800;

        // Gambar foto dengan fit cover
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);

        // Ekspor base64 JPEG
        currentPhotoBase64 = canvas.toDataURL('image/jpeg', 0.85);

        // Analisis Deteksi Warna Latar Belakang (Sampel di pojok atas kiri dan kanan)
        analyzeRedBackground(ctx, canvas.width, canvas.height);

        document.getElementById('btnResetPhoto').style.display = 'inline-block';
        showToast('Foto berhasil dimuat!', '✅');
      };
      img.src = dataUrl;
    }

    // Deteksi tone warna latar belakang untuk memberi panduan siswa
    function analyzeRedBackground(ctx, width, height) {
      const banner = document.getElementById('redDetectAlert');

      try {
        // Ambil piksel dari pojok kiri atas (x: 20-50, y: 20-50) & kanan atas (x: width-50-width-20)
        const p1 = ctx.getImageData(30, 30, 20, 20).data;
        const p2 = ctx.getImageData(width - 50, 30, 20, 20).data;

        let totalR = 0, totalG = 0, totalB = 0, count = 0;
        for (let i = 0; i < p1.length; i += 4) {
          totalR += p1[i] + p2[i];
          totalG += p1[i + 1] + p2[i + 1];
          totalB += p1[i + 2] + p2[i + 2];
          count += 2;
        }

        const avgR = totalR / count;
        const avgG = totalG / count;
        const avgB = totalB / count;

        // Indikator Merah: R dominan jauh di atas G dan B
        const isRed = (avgR > 110 && avgR > (avgG * 1.4) && avgR > (avgB * 1.4));

        if (isRed) {
          banner.className = 'red-check-banner red-check-ok';
          banner.innerHTML = '✅ <strong>Latar Merah Terdeteksi!</strong> Warna latar belakang foto memenuhi kriteria formal kartu pelajar.';
        } else {
          banner.className = 'red-check-banner red-check-warn';
          banner.innerHTML = '⚠️ <strong>Perhatian:</strong> Warna latar belakang kurang merah (terdeteksi RGB ' + Math.round(avgR) + ',' + Math.round(avgG) + ',' + Math.round(avgB) + '). Pastikan foto berlatar merah polos!';
        }
      } catch (err) {
        banner.className = 'red-check-banner red-check-ok';
        banner.innerHTML = '📸 Foto berhasil disiapkan dalam rasio pas foto 3:4.';
      }
    }

    function drawInitialPlaceholderCanvas() {
      const canvas = document.getElementById('previewCanvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 600;
      canvas.height = 800;
      ctx.fillStyle = '#B91C1C'; // Merah pas foto
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = 'bold 24px Space Grotesk, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('PAS FOTO 3X4', canvas.width / 2, canvas.height / 2 - 20);
      ctx.font = '16px Plus Jakarta Sans, sans-serif';
      ctx.fillText('LATAR BELAKANG MERAH', canvas.width / 2, canvas.height / 2 + 15);
    }

    function loadExistingPhotoToCanvas(url) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.getElementById('previewCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 800;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = url;
    }

    // Submit Akhir: Kirim ke Google Apps Script atau Simpan Demo Lokal
    document.getElementById('btnSubmitAll').addEventListener('click', async () => {
      if (!currentStudent) return;

      if (currentStudent.status === 'Done') {
        showToast('Siswa ini sudah berstatus Done! Tidak dapat upload ulang.', '⛔');
        return;
      }

      if (!currentPhotoBase64) {
        showToast('Wajib mengupload atau mengambil pas foto berlatar merah terlebih dahulu!', '⚠️');
        return;
      }

      showLoading('MENGUPLOAD FOTO & MENYIMPAN KE SPREADSHEET...');

      const payload = {
        action: 'submitStudentPhoto',
        nama: currentStudent.nama,
        kelas: currentStudent.kelas,
        nisn: currentStudent.nisn,
        ttl: currentStudent.ttl,
        jk: currentStudent.jk,
        alamat: currentStudent.alamat,
        qrId: currentStudent.qrId,
        photoBase64: currentPhotoBase64
      };

      try {
        if (gasWebAppUrl) {
          // Kirim ke Google Apps Script Web App
          const response = await fetch(gasWebAppUrl, {
            method: 'POST',
            body: JSON.stringify(payload)
          });
          const resJson = await response.json();

          if (resJson.status === 'locked') {
            hideLoading();
            showToast(resJson.message, '⛔');
            currentStudent.status = 'Done';
            renderStudentsGrid();
            setupStep3View();
            return;
          }

          if (resJson.status === 'error') {
            throw new Error(resJson.message);
          }

          // Sukses dari Google Apps Script
          if (resJson.student && resJson.student.fotoUrl) {
            currentStudent.fotoUrl = resJson.student.fotoUrl;
          }
        } else {
          // Mode Demo / Local Storage
          await new Promise(r => setTimeout(r, 900)); // Simulasi network delay
          currentStudent.fotoUrl = currentPhotoBase64;
        }

        // Tandai status siswa menjadi DONE
        currentStudent.status = 'Done';
        currentStudent.timestamp = new Date().toLocaleString('id-ID');

        // Simpan ke local storage
        saveStudentsDataLocal();
        renderClassPills();
        renderStudentsGrid();

        hideLoading();
        showToast('Data dan foto berhasil disimpan!', '🎉');

        // Tampilkan Step 4 (Kartu Digital)
        populateDigitalCard();
        navigateToStep(4);

      } catch (err) {
        hideLoading();
        console.error(err);
        showToast('Gagal mengirim ke Google Apps Script: ' + err.message + '. Data tersimpan di browser (Mode Demo).', '⚠️');
        
        // Tetap tandai lokal agar pengguna tidak kehilangan data
        currentStudent.status = 'Done';
        currentStudent.fotoUrl = currentPhotoBase64;
        currentStudent.timestamp = new Date().toLocaleString('id-ID');
        saveStudentsDataLocal();
        renderStudentsGrid();
        populateDigitalCard();
        navigateToStep(4);
      }
    });

    // Buat Pratinjau Kartu Pelajar Digital (Step 4)
    function populateDigitalCard() {
      if (!currentStudent) return;

      document.getElementById('cardValNama').textContent = currentStudent.nama;
      document.getElementById('cardValKelas').textContent = currentStudent.kelas;
      document.getElementById('cardValNisn').textContent = currentStudent.nisn || '-';
      document.getElementById('cardValTtl').textContent = currentStudent.ttl || '-';
      document.getElementById('cardValJk').textContent = currentStudent.jk || '-';
      document.getElementById('cardValAlamat').textContent = currentStudent.alamat || '-';
      document.getElementById('cardValQrId').textContent = currentStudent.qrId || \`SMAN1-\${currentStudent.nisn}\`;
      document.getElementById('cardValDate').textContent = currentStudent.timestamp || new Date().toLocaleDateString('id-ID');

      // Gambar Pas Foto di Kartu
      const photoImg = document.getElementById('cardPhotoImg');
      photoImg.src = currentStudent.fotoUrl || currentPhotoBase64;

      // QR Code Generator (menggunakan QR API publik atau SVG)
      const qrData = encodeURIComponent(\`SMAN1_SOPPENG|\${currentStudent.nama}|\${currentStudent.nisn}|\${currentStudent.kelas}|STATUS:DONE\`);
      document.getElementById('cardQrImg').src = \`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=\${qrData}\`;
    }

    // Kamera Langsung
    document.getElementById('btnStartCamera').addEventListener('click', async () => {
      const modal = document.getElementById('cameraModal');
      const video = document.getElementById('cameraVideo');

      try {
        videoStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        video.srcObject = videoStream;
        modal.classList.add('open');
      } catch (err) {
        showToast('Tidak dapat mengakses kamera: ' + err.message, '❌');
      }
    });

    document.getElementById('btnCapturePhoto').addEventListener('click', () => {
      const video = document.getElementById('cameraVideo');
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = video.videoWidth || 640;
      tempCanvas.height = video.videoHeight || 480;
      const ctx = tempCanvas.getContext('2d');
      
      // Mirroring agar sesuai pandangan pengguna
      ctx.translate(tempCanvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);

      processImageIntoCanvas(tempCanvas.toDataURL('image/jpeg', 0.95));
      closeCamera();
    });

    function closeCamera() {
      if (videoStream) {
        videoStream.getTracks().forEach(t => t.stop());
        videoStream = null;
      }
      document.getElementById('cameraModal').classList.remove('open');
    }

    // Pengaturan Google Apps Script Web App
    document.getElementById('btnOpenConfig').addEventListener('click', () => {
      document.getElementById('gasUrlInput').value = gasWebAppUrl;
      document.getElementById('configModal').classList.add('open');
    });

    function closeConfigModal() {
      document.getElementById('configModal').classList.remove('open');
    }

    document.getElementById('btnSaveConfig').addEventListener('click', () => {
      const url = document.getElementById('gasUrlInput').value.trim();
      gasWebAppUrl = url;
      localStorage.setItem('SMAN1_GAS_URL', url);
      checkApiStatus();
      closeConfigModal();
      showToast('URL Google Apps Script berhasil disimpan!', '✅');
    });

    async function checkApiStatus() {
      const statusEl = document.getElementById('apiConnectionStatus');
      if (!gasWebAppUrl) {
        statusEl.innerHTML = '🟡 <strong>Mode Demo Aktif</strong> (Offline / LocalStorage Browser)';
        return;
      }

      statusEl.innerHTML = '🔄 Menguji koneksi ke Apps Script...';
      try {
        const pingUrl = gasWebAppUrl + (gasWebAppUrl.includes('?') ? '&' : '?') + 'action=ping';
        const res = await fetch(pingUrl);
        const data = await res.json();
        if (data.status === 'ok') {
          statusEl.innerHTML = '🟢 <strong>Tersambung ke Google Apps Script SMAN 1 Soppeng!</strong>';
        } else {
          statusEl.innerHTML = '🟡 Tersambung, namun respons berbeda.';
        }
      } catch (err) {
        statusEl.innerHTML = '🔴 <strong>Gagal Terhubung:</strong> Periksa URL Web App Anda dan pastikan setelan akses "Anyone".';
      }
    }

    document.getElementById('btnTestConnection').addEventListener('click', checkApiStatus);

    document.getElementById('btnSyncFromSheet').addEventListener('click', async () => {
      if (!gasWebAppUrl) {
        showToast('Masukkan URL Google Apps Script terlebih dahulu!', '⚠️');
        return;
      }
      showLoading('MENGAMBIL DATA DARI GOOGLE SPREADSHEET...');
      try {
        const fetchUrl = gasWebAppUrl + (gasWebAppUrl.includes('?') ? '&' : '?') + 'action=getStudents';
        const res = await fetch(fetchUrl);
        const data = await res.json();
        if (data.status === 'success' && Array.isArray(data.data) && data.data.length > 0) {
          students = data.data;
          saveStudentsDataLocal();
          renderClassPills();
          renderStudentsGrid();
          hideLoading();
          showToast(\`Berhasil sinkron \${students.length} data siswa dari Sheet!\`, '🎉');
        } else {
          throw new Error(data.message || 'Format data tidak sesuai');
        }
      } catch (err) {
        hideLoading();
        showToast('Gagal sinkron data: ' + err.message, '❌');
      }
    });

    // Sinkronisasi otomatis di latar belakang saat aplikasi dibuka siswa
    async function autoSyncFromSheetSilently() {
      if (!gasWebAppUrl) return;
      try {
        const fetchUrl = gasWebAppUrl + (gasWebAppUrl.includes('?') ? '&' : '?') + 'action=getStudents';
        const res = await fetch(fetchUrl);
        const data = await res.json();
        if (data.status === 'success' && Array.isArray(data.data) && data.data.length > 0) {
          students = data.data;
          saveStudentsDataLocal();
          renderClassPills();
          renderStudentsGrid();
          console.log('Sinkronisasi otomatis Google Sheet berhasil: ' + students.length + ' siswa.');
        }
      } catch (err) {
        console.warn('Sinkronisasi otomatis background dilewati (menggunakan data tersimpan):', err);
      }
    }

    document.getElementById('btnResetLocalStorage').addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin mereset seluruh data ke kondisi awal CSV (387 siswa)?')) {
        localStorage.removeItem('SMAN1_STUDENTS_DATA');
        initStudentsData();
        renderClassPills();
        renderStudentsGrid();
        showToast('Data demo berhasil direset ke awal!', '🔄');
      }
    });

    function resetToHome() {
      currentStudent = null;
      currentPhotoBase64 = '';
      drawInitialPlaceholderCanvas();
      navigateToStep(1);
    }

    // Drag and Drop & Event Listeners
    function setupEventListeners() {
      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          handleSelectedFile(e.target.files[0]);
        }
      });

      ['dragenter', 'dragover'].forEach(name => {
        dropZone.addEventListener(name, (e) => {
          e.preventDefault();
          dropZone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(name => {
        dropZone.addEventListener(name, (e) => {
          e.preventDefault();
          dropZone.classList.remove('dragover');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleSelectedFile(e.dataTransfer.files[0]);
        }
      });

      // Search Box Events
      const searchInput = document.getElementById('searchInput');
      const searchClearBtn = document.getElementById('searchClearBtn');

      searchInput.addEventListener('input', () => {
        searchClearBtn.style.display = searchInput.value ? 'flex' : 'none';
        renderStudentsGrid();
      });

      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
        renderStudentsGrid();
        searchInput.focus();
      });

      // Toggle Face Guide
      document.getElementById('toggleGuideCheck').addEventListener('change', (e) => {
        document.getElementById('faceGuideOverlay').style.display = e.target.checked ? 'flex' : 'none';
      });

      // Reset Photo
      document.getElementById('btnResetPhoto').addEventListener('click', () => {
        currentPhotoBase64 = '';
        drawInitialPlaceholderCanvas();
        document.getElementById('btnResetPhoto').style.display = 'none';
        document.getElementById('redDetectAlert').className = 'red-check-banner red-check-warn';
        document.getElementById('redDetectAlert').innerHTML = '⚠️ Belum ada foto yang dipilih. Silakan upload pas foto latar merah Anda.';
      });
    }

    // UI Helpers
    function showToast(msg, icon = '🔔') {
      const toast = document.getElementById('toastBox');
      document.getElementById('toastMsg').textContent = msg;
      document.getElementById('toastIcon').textContent = icon;
      toast.style.display = 'flex';
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => {
        toast.style.display = 'none';
      }, 4000);
    }

    function showLoading(text) {
      document.getElementById('loadingText').textContent = text;
      document.getElementById('loadingOverlay').classList.add('open');
    }

    function hideLoading() {
      document.getElementById('loadingOverlay').classList.remove('open');
    }

    function escapeHtml(text) {
      if (!text) return '';
      return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Successfully created index.html!');
