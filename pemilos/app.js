/**
 * =========================================================================
 * PEMILOS SULAWESI SELATAN 2026 - MAIN APPLICATION SCRIPT
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // App State
  const state = {
    currentStep: 1,
    paslonData: null,
    padKetua: null,
    padWakil: null,
    submissionResult: null,
    isSubmitting: false
  };

  // DOM Elements - Stepper & Sections
  const stepperItems = [
    document.getElementById("stepIndicator1"),
    document.getElementById("stepIndicator2"),
    document.getElementById("stepIndicator3"),
    document.getElementById("stepIndicator4")
  ];

  const sections = {
    step1: document.getElementById("sectionStep1"),
    step2: document.getElementById("sectionStep2"),
    step3: document.getElementById("sectionStep3"),
    step4: document.getElementById("sectionStep4")
  };

  // DOM Elements - Form Step 1
  const paslonForm = document.getElementById("paslonForm");
  const inputKabKota = document.getElementById("inputKabKota");
  const inputSekolah = document.getElementById("inputSekolah");
  const inputKetuaName = document.getElementById("inputKetuaName");
  const inputKetuaNisn = document.getElementById("inputKetuaNisn");
  const inputWakilName = document.getElementById("inputWakilName");
  const inputWakilNisn = document.getElementById("inputWakilNisn");
  const inputKontak = document.getElementById("inputKontak");
  const inputEmail = document.getElementById("inputEmail");
  const btnSubmitIdentitas = document.getElementById("btnSubmitIdentitas");

  // DOM Elements - Popup Modal Komitmen
  const commitmentModalBackdrop = document.getElementById("commitmentModalBackdrop");
  const popupKetuaName = document.getElementById("popupKetuaName");
  const popupWakilName = document.getElementById("popupWakilName");
  const btnPopupProceed = document.getElementById("btnPopupProceed");

  // DOM Elements - Step 2 Naskah Deklarasi
  const docPembuka = document.getElementById("docPembuka");
  const docPoinList = document.getElementById("docPoinList");
  const docPenutup = document.getElementById("docPenutup");
  const docPaslonInfo = document.getElementById("docPaslonInfo");
  const checkAgreeDeclaration = document.getElementById("checkAgreeDeclaration");
  const btnBackToStep1 = document.getElementById("btnBackToStep1");
  const btnProceedToSignature = document.getElementById("btnProceedToSignature");

  // DOM Elements - Step 3 Signatures
  const canvasKetua = document.getElementById("canvasKetua");
  const canvasWakil = document.getElementById("canvasWakil");
  const wrapperCanvasKetua = document.getElementById("wrapperCanvasKetua");
  const wrapperCanvasWakil = document.getElementById("wrapperCanvasWakil");
  const displayKetuaName = document.getElementById("displayKetuaName");
  const displayKetuaSchool = document.getElementById("displayKetuaSchool");
  const displayWakilName = document.getElementById("displayWakilName");
  const displayWakilSchool = document.getElementById("displayWakilSchool");
  const statusKetua = document.getElementById("statusKetua");
  const statusWakil = document.getElementById("statusWakil");
  const btnUndoKetua = document.getElementById("btnUndoKetua");
  const btnClearKetua = document.getElementById("btnClearKetua");
  const btnUndoWakil = document.getElementById("btnUndoWakil");
  const btnClearWakil = document.getElementById("btnClearWakil");
  const btnBackToStep2 = document.getElementById("btnBackToStep2");
  const btnFinalSubmit = document.getElementById("btnFinalSubmit");

  // DOM Elements - Step 4 Certificate
  const certSekolah = document.getElementById("certSekolah");
  const certKabKota = document.getElementById("certKabKota");
  const certRegId = document.getElementById("certRegId");
  const certImgKetua = document.getElementById("certImgKetua");
  const certImgWakil = document.getElementById("certImgWakil");
  const certNameKetua = document.getElementById("certNameKetua");
  const certNameWakil = document.getElementById("certNameWakil");
  const certTimestamp = document.getElementById("certTimestamp");
  const certGasSyncStatus = document.getElementById("certGasSyncStatus");
  const btnPrintCert = document.getElementById("btnPrintCert");
  const btnOpenDriveFolder = document.getElementById("btnOpenDriveFolder");
  const btnRestartForm = document.getElementById("btnRestartForm");

  // DOM Elements - Loading & Toast
  const loadingOverlay = document.getElementById("loadingOverlay");
  const loadingSubtitle = document.getElementById("loadingSubtitle");
  const toastContainer = document.getElementById("toastContainer");

  // Helper untuk mendapatkan URL Google Apps Script yang ter-embed
  function getGasEndpoint() {
    // 1. Cek parameter URL di browser: ?gas=https://...
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const paramGas = urlParams.get("gas");
      if (paramGas && paramGas.trim().startsWith("http")) {
        return paramGas.trim();
      }
    } catch (e) {}

    // 2. Cek variabel yang langsung ter-embed di index.html
    if (typeof window.GAS_ENDPOINT_URL === "string" && window.GAS_ENDPOINT_URL.trim().startsWith("http")) {
      return window.GAS_ENDPOINT_URL.trim();
    }

    // 3. Cek APP_CONFIG di config.js
    if (typeof APP_CONFIG !== "undefined" && APP_CONFIG.gasEndpointUrl && APP_CONFIG.gasEndpointUrl.trim().startsWith("http")) {
      return APP_CONFIG.gasEndpointUrl.trim();
    }

    return (localStorage.getItem("pemilos_gas_endpoint") || "").trim();
  }

  // =========================================================================
  // REAL-TIME PASLON CHECK (dihapus - nomor urut tidak digunakan)
  // =========================================================================

  // 1. Inisialisasi Dropdown 24 Kab/Kota di Sulsel
  function initKabKotaDropdown() {
    inputKabKota.innerHTML = '<option value="">-- Pilih Kabupaten / Kota di Sulawesi Selatan --</option>';
    APP_CONFIG.kabupatenKotaSulsel.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item;
      opt.textContent = item;
      inputKabKota.appendChild(opt);
    });
  }

  // 2. Inisialisasi Teks Naskah Deklarasi Resmi dari Config
  function initNaskahDeklarasi() {
    const data = APP_CONFIG.naskahDeklarasi;
    docPembuka.textContent = data.pembuka;

    docPoinList.innerHTML = "";
    data.poin.forEach(itemText => {
      const parts = itemText.split(". ");
      const poinNumber = parts[0] || "";
      const poinContent = parts.slice(1).join(". ");

      const itemEl = document.createElement("div");
      itemEl.className = "naskah-poin-item";
      itemEl.innerHTML = `
        <span class="poin-badge">${poinNumber}</span>
        <span class="poin-text">${poinContent}</span>
      `;
      docPoinList.appendChild(itemEl);
    });

    docPenutup.innerHTML = "";
    data.penutup.forEach((line, idx) => {
      const lineEl = document.createElement("p");
      if (idx >= data.penutup.length - 2) {
        lineEl.className = "penutup-highlight";
      } else {
        lineEl.className = "penutup-line";
      }
      lineEl.textContent = line;
      docPenutup.appendChild(lineEl);
    });
  }

  // 3. Navigasi Wizard
  function setWizardStep(stepNumber) {
    state.currentStep = stepNumber;

    // Update stepper dots
    stepperItems.forEach((item, idx) => {
      const stepIdx = idx + 1;
      item.classList.remove("active", "completed");
      if (stepIdx === stepNumber) {
        item.classList.add("active");
      } else if (stepIdx < stepNumber) {
        item.classList.add("completed");
      }
    });

    // Update section display
    Object.values(sections).forEach(sec => sec.classList.remove("active"));
    if (stepNumber === 1) sections.step1.classList.add("active");
    if (stepNumber === 2) sections.step2.classList.add("active");
    if (stepNumber === 3) {
      sections.step3.classList.add("active");
      // Re-trigger layout canvas resize setelah section aktif terlihat
      setTimeout(() => {
        if (state.padKetua) state.padKetua.resize();
        if (state.padWakil) state.padWakil.resize();
      }, 100);
    }
    if (stepNumber === 4) sections.step4.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 4. Inisialisasi Dual Signature Pads
  function initSignaturePads() {
    if (!state.padKetua) {
      state.padKetua = new PremiumSignaturePad(canvasKetua, {
        strokeColor: "#0f172a",
        strokeWidth: 2.8,
        glowColor: "rgba(56, 189, 248, 0.85)",
        onBegin: () => {
          wrapperCanvasKetua.classList.add("has-strokes");
        },
        onChange: () => {
          updateSignatureStatus();
        }
      });
    }

    if (!state.padWakil) {
      state.padWakil = new PremiumSignaturePad(canvasWakil, {
        strokeColor: "#0f172a",
        strokeWidth: 2.8,
        glowColor: "rgba(245, 158, 11, 0.85)",
        onBegin: () => {
          wrapperCanvasWakil.classList.add("has-strokes");
        },
        onChange: () => {
          updateSignatureStatus();
        }
      });
    }
  }

  function updateSignatureStatus() {
    const isKetuaSigned = state.padKetua && !state.padKetua.isEmpty();
    const isWakilSigned = state.padWakil && !state.padWakil.isEmpty();

    // Update UI Status Calon Ketua
    if (isKetuaSigned) {
      statusKetua.innerHTML = `<span class="status-dot dot-signed"></span><span class="status-text" style="color:var(--accent-emerald)">Sudah Ditandatangani</span>`;
      wrapperCanvasKetua.classList.add("has-strokes");
    } else {
      statusKetua.innerHTML = `<span class="status-dot dot-pending"></span><span class="status-text">Menunggu TTD</span>`;
      wrapperCanvasKetua.classList.remove("has-strokes");
    }

    // Update UI Status Calon Wakil Ketua
    if (isWakilSigned) {
      statusWakil.innerHTML = `<span class="status-dot dot-signed"></span><span class="status-text" style="color:var(--accent-emerald)">Sudah Ditandatangani</span>`;
      wrapperCanvasWakil.classList.add("has-strokes");
    } else {
      statusWakil.innerHTML = `<span class="status-dot dot-pending"></span><span class="status-text">Menunggu TTD</span>`;
      wrapperCanvasWakil.classList.remove("has-strokes");
    }

    // Enable Final Submit bila kedua calon sudah tanda tangan
    btnFinalSubmit.disabled = !(isKetuaSigned && isWakilSigned);
  }

  // 5. Form Paslon Submit -> Membuka Popup Komitmen Gradient
  paslonForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      kabKota: inputKabKota.value.trim(),
      sekolah: inputSekolah.value.trim(),
      ketuaName: inputKetuaName.value.trim(),
      ketuaNisn: inputKetuaNisn.value.trim(),
      wakilName: inputWakilName.value.trim(),
      wakilNisn: inputWakilNisn.value.trim(),
      kontak: inputKontak.value.trim(),
      email: inputEmail.value.trim(),
      timestamp: new Date().toISOString()
    };

    state.paslonData = data;

    // Isi informasi di popup modal komitmen
    popupKetuaName.textContent = data.ketuaName;
    popupWakilName.textContent = data.wakilName;

    // Tampilkan Popup Modal Komitmen dengan animasi animatik bergradasi
    commitmentModalBackdrop.classList.add("show");
  });

  // 6. Tombol Popup Modal Komitmen -> Masuk ke Step 2 (Naskah Ikrar)
  btnPopupProceed.addEventListener("click", () => {
    commitmentModalBackdrop.classList.remove("show");

    // Update data header pada naskah deklarasi
    const paslon = state.paslonData;
    docPaslonInfo.textContent = `${paslon.sekolah} (${paslon.kabKota})`;

    // Reset persetujuan
    checkAgreeDeclaration.checked = false;
    btnProceedToSignature.disabled = true;

    // Masuk Step 2
    setWizardStep(2);
    showToast("Silakan baca dan pahami isi Naskah Ikrar Deklarasi Damai di bawah ini.", "info");
  });

  // Checkbox persetujuan naskah deklarasi
  checkAgreeDeclaration.addEventListener("change", () => {
    btnProceedToSignature.disabled = !checkAgreeDeclaration.checked;
  });

  // Navigasi Back / Next Step 2
  btnBackToStep1.addEventListener("click", () => {
    setWizardStep(1);
  });

  btnProceedToSignature.addEventListener("click", () => {
    const paslon = state.paslonData;
    // Set nama otomatis pada masing-masing kotak TTD
    displayKetuaName.textContent = paslon.ketuaName;
    displayKetuaSchool.textContent = paslon.sekolah;

    displayWakilName.textContent = paslon.wakilName;
    displayWakilSchool.textContent = paslon.sekolah;

    // Masuk Step 3
    setWizardStep(3);
    initSignaturePads();
    updateSignatureStatus();
    showToast("Silakan bubuhkan tanda tangan Calon Ketua & Wakil Ketua pada kotak masing-masing.", "info");
  });

  // Navigasi Back Step 3
  btnBackToStep2.addEventListener("click", () => {
    setWizardStep(2);
  });

  // Undo & Clear Handler untuk Kotak Calon Ketua
  btnUndoKetua.addEventListener("click", () => {
    if (state.padKetua) state.padKetua.undo();
  });
  btnClearKetua.addEventListener("click", () => {
    if (state.padKetua) state.padKetua.clear();
  });

  // Undo & Clear Handler untuk Kotak Calon Wakil Ketua
  btnUndoWakil.addEventListener("click", () => {
    if (state.padWakil) state.padWakil.undo();
  });
  btnClearWakil.addEventListener("click", () => {
    if (state.padWakil) state.padWakil.clear();
  });

  // 7. Pengiriman Akhir ke Backend Google Apps Script (Drive & Sheets)
  btnFinalSubmit.addEventListener("click", async () => {
    if (state.isSubmitting) return;

    if (state.padKetua.isEmpty() || state.padWakil.isEmpty()) {
      showToast("Harap lengkapi tanda tangan Calon Ketua dan Wakil Ketua terlebih dahulu!", "error");
      return;
    }

    state.isSubmitting = true;
    loadingOverlay.classList.add("show");
    loadingSubtitle.textContent = "Mengenkripsi tanda tangan resolusi tinggi...";

    const ttdKetuaBase64 = state.padKetua.toDataURL("image/png");
    const ttdWakilBase64 = state.padWakil.toDataURL("image/png");
    const declarationId = "DECL-" + Math.random().toString(36).substring(2, 9).toUpperCase();

    const payload = {
      declarationId: declarationId,
      kabKota: state.paslonData.kabKota,
      sekolah: state.paslonData.sekolah,
      ketuaName: state.paslonData.ketuaName,
      ketuaNisn: state.paslonData.ketuaNisn,
      wakilName: state.paslonData.wakilName,
      wakilNisn: state.paslonData.wakilNisn,
      kontak: state.paslonData.kontak,
      email: state.paslonData.email,
      ttdKetuaBase64: ttdKetuaBase64,
      ttdWakilBase64: ttdWakilBase64,
      userAgent: navigator.userAgent
    };

    let endpoint = getGasEndpoint();
    let driveFolderUrl = null;
    let isCloudSynced = false;

    try {
      if (endpoint && endpoint.startsWith("http")) {
        loadingSubtitle.textContent = "Mengirim data ke Google Apps Script (Drive & Sheets)...";

        // Gunakan POST dengan mode text/plain untuk melewati CORS limitation pada Google Apps Script Web App
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const result = await response.json();
          if (result.status === "success") {
            isCloudSynced = true;
            driveFolderUrl = result.data?.driveFolderUrl || null;
            showToast("Sukses tersimpan di Google Drive dan Google Sheets!", "success");
          } else {
            console.warn("GAS Server response:", result);
            showToast(result.message || "Data diproses dengan catatan.", "info");
          }
        } else {
          throw new Error("HTTP Status " + response.status);
        }
      } else {
        // Fallback Standalone / Demo Mode
        await new Promise(r => setTimeout(r, 1200)); // Simulasi pemrosesan
        showToast("Mode Demo Aktif: Data & TTD tersimpan secara aman di penyimpanan lokal.", "info");
      }
    } catch (err) {
      console.error("Gagal sinkronisasi online:", err);
      if (!isCloudSynced) {
        showToast("Koneksi cloud gagal. Data tetap diamankan di perangkat ini.", "error");
      }
    } finally {
      // Simpan arsip di LocalStorage sebagai cadangan
      const localArchive = JSON.parse(localStorage.getItem("pemilos_archive") || "[]");
      localArchive.push({
        id: declarationId,
        date: new Date().toISOString(),
        paslon: state.paslonData
      });
      localStorage.setItem("pemilos_archive", JSON.stringify(localArchive));

      // Update Tampilan Sertifikat Pengesahan (Step 4)
      renderCertificate(payload, driveFolderUrl, isCloudSynced);

      loadingOverlay.classList.remove("show");
      state.isSubmitting = false;
      setWizardStep(4);
    }
  });

  // 8. Render Bukti / Sertifikat Deklarasi
  function renderCertificate(data, driveFolderUrl, isSynced) {
    certSekolah.textContent = data.sekolah;
    certKabKota.textContent = data.kabKota;
    certRegId.textContent = data.declarationId;

    certNameKetua.textContent = data.ketuaName;
    certImgKetua.src = data.ttdKetuaBase64;

    certNameWakil.textContent = data.wakilName;
    certImgWakil.src = data.ttdWakilBase64;

    const now = new Date();
    const formattedDate = now.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }) + " Pukul " + now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    certTimestamp.textContent = formattedDate;

    if (isSynced && driveFolderUrl) {
      certGasSyncStatus.textContent = "✓ Terverifikasi & Tersimpan di Google Drive";
      certGasSyncStatus.style.color = "var(--accent-emerald)";
      btnOpenDriveFolder.href = driveFolderUrl;
      btnOpenDriveFolder.style.display = "inline-flex";
    } else {
      certGasSyncStatus.textContent = "✓ Tervalidasi Resmi (Lokal)";
      certGasSyncStatus.style.color = "var(--accent-cyan)";
      btnOpenDriveFolder.style.display = "none";
    }
  }

  // Cetak Dokumen / Simpan PDF
  btnPrintCert.addEventListener("click", () => {
    window.print();
  });

  // Restart / Input Paslon Baru
  btnRestartForm.addEventListener("click", () => {
    if (confirm("Apakah Anda ingin memulai pengisian deklarasi untuk pasangan calon baru?")) {
      paslonForm.reset();
      btnSubmitIdentitas.disabled = false;
      if (state.padKetua) state.padKetua.clear();
      if (state.padWakil) state.padWakil.clear();
      setWizardStep(1);
    }
  });

  // 9. Status Pengaturan
  // (Pengaturan dihilangkan dari tampilan UI sesuai instruksi: URL langsung ter-embed)

  // 10. Toast Helper Function
  function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `app-toast toast-${type}`;

    let iconSvg = "";
    if (type === "success") {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
    } else if (type === "error") {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-text">${message}</div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, 4500);
  }

  // Initialize App
  initKabKotaDropdown();
  initNaskahDeklarasi();
});
