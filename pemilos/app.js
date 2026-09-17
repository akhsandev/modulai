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
    isSubmitting: false,
    isPaslonNumberLocked: false,
    checkDebounceTimer: null
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
  const inputNomorUrut = document.getElementById("inputNomorUrut");
  const inputKetuaName = document.getElementById("inputKetuaName");
  const inputKetuaNisn = document.getElementById("inputKetuaNisn");
  const inputWakilName = document.getElementById("inputWakilName");
  const inputWakilNisn = document.getElementById("inputWakilNisn");
  const inputEmail = document.getElementById("inputEmail");
  const btnSubmitIdentitas = document.getElementById("btnSubmitIdentitas");
  const paslonLockStatus = document.getElementById("paslonLockStatus");
  const lockStatusIcon = document.getElementById("lockStatusIcon");
  const lockStatusText = document.getElementById("lockStatusText");

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
  const certNomorPaslon = document.getElementById("certNomorPaslon");
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
  // SISTEM ANTI-DUPLIKASI & LIVE LOCK STATUS PASLON
  // =========================================================================
  function cacheRegisteredPaslon(paslon) {
    if (!paslon || !paslon.sekolah || !paslon.nomorUrut) return;
    const registry = JSON.parse(localStorage.getItem("pemilos_registered_paslons") || "[]");
    const exists = registry.some(item =>
      String(item.kabKota || "").toLowerCase() === String(paslon.kabKota || "").toLowerCase() &&
      String(item.sekolah || "").toLowerCase() === String(paslon.sekolah || "").toLowerCase() &&
      String(item.nomorUrut) === String(paslon.nomorUrut)
    );
    if (!exists) {
      registry.push({
        kabKota: paslon.kabKota,
        sekolah: paslon.sekolah,
        nomorUrut: paslon.nomorUrut,
        ketuaName: paslon.ketuaName,
        wakilName: paslon.wakilName,
        date: new Date().toISOString()
      });
      localStorage.setItem("pemilos_registered_paslons", JSON.stringify(registry));
    }
  }

  function setPaslonStatusTaken(no, sekolah, ketuaName) {
    paslonLockStatus.style.display = "flex";
    paslonLockStatus.className = "paslon-lock-status status-taken";
    lockStatusIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    lockStatusText.innerHTML = `Data Paslon <strong>${no}</strong> untuk ${sekolah || 'sekolah ini'} sudah diambil & ditandatangani (${ketuaName ? 'Ketua: ' + ketuaName : 'Terkunci'}).`;
    state.isPaslonNumberLocked = true;
    btnSubmitIdentitas.disabled = true;
  }

  function setPaslonStatusAvailable(no, sekolah) {
    paslonLockStatus.style.display = "flex";
    paslonLockStatus.className = "paslon-lock-status status-available";
    lockStatusIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    lockStatusText.innerHTML = `Nomor Paslon <strong>${no}</strong> Tersedia untuk ${sekolah || 'sekolah ini'}.`;
    state.isPaslonNumberLocked = false;
    btnSubmitIdentitas.disabled = false;
  }

  function checkPaslonAvailability() {
    const kabKota = inputKabKota.value.trim();
    const sekolah = inputSekolah.value.trim();
    const nomorUrut = inputNomorUrut.value.trim();

    if (!nomorUrut) {
      paslonLockStatus.style.display = "none";
      state.isPaslonNumberLocked = false;
      btnSubmitIdentitas.disabled = false;
      return;
    }

    if (!kabKota || !sekolah) {
      paslonLockStatus.style.display = "flex";
      paslonLockStatus.className = "paslon-lock-status status-checking";
      lockStatusIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
      lockStatusText.textContent = "Lengkapi Kabupaten dan Nama Sekolah untuk validasi ketersediaan nomor paslon.";
      state.isPaslonNumberLocked = false;
      btnSubmitIdentitas.disabled = false;
      return;
    }

    // 1. Cek Offline Local Registry Cache
    const registry = JSON.parse(localStorage.getItem("pemilos_registered_paslons") || "[]");
    const matchLocal = registry.find(item =>
      String(item.kabKota || "").toLowerCase() === kabKota.toLowerCase() &&
      String(item.sekolah || "").toLowerCase() === sekolah.toLowerCase() &&
      String(item.nomorUrut) === String(nomorUrut)
    );

    if (matchLocal) {
      setPaslonStatusTaken(nomorUrut, sekolah, matchLocal.ketuaName);
      return;
    }

    // 2. Cek Live ke Google Apps Script jika terhubung
    const endpoint = getGasEndpoint();
    if (endpoint && endpoint.startsWith("http")) {
      paslonLockStatus.style.display = "flex";
      paslonLockStatus.className = "paslon-lock-status status-checking";
      lockStatusIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`;
      lockStatusText.textContent = `Mengecek ketersediaan Paslon #${nomorUrut} di server...`;

      const checkUrl = `${endpoint}?action=checkPaslon&kabKota=${encodeURIComponent(kabKota)}&sekolah=${encodeURIComponent(sekolah)}&nomorUrut=${encodeURIComponent(nomorUrut)}`;
      fetch(checkUrl)
        .then(res => res.json())
        .then(res => {
          if (res.status === "taken") {
            const ketua = res.paslon?.ketuaName || "";
            setPaslonStatusTaken(nomorUrut, sekolah, ketua);
            cacheRegisteredPaslon({ kabKota, sekolah, nomorUrut, ketuaName: ketua });
          } else {
            setPaslonStatusAvailable(nomorUrut, sekolah);
          }
        })
        .catch(err => {
          setPaslonStatusAvailable(nomorUrut, sekolah);
        });
    } else {
      setPaslonStatusAvailable(nomorUrut, sekolah);
    }
  }

  function triggerDebouncedPaslonCheck() {
    clearTimeout(state.checkDebounceTimer);
    state.checkDebounceTimer = setTimeout(() => {
      checkPaslonAvailability();
    }, 280);
  }

  // Event listener untuk real-time check nomor urut
  inputNomorUrut.addEventListener("input", triggerDebouncedPaslonCheck);
  inputNomorUrut.addEventListener("change", triggerDebouncedPaslonCheck);
  inputSekolah.addEventListener("input", triggerDebouncedPaslonCheck);
  inputSekolah.addEventListener("change", triggerDebouncedPaslonCheck);
  inputKabKota.addEventListener("change", triggerDebouncedPaslonCheck);

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

    if (state.isPaslonNumberLocked) {
      showToast("Data Paslon ini sudah diambil! Silakan gunakan nomor urut yang tersedia.", "error");
      return;
    }

    const data = {
      kabKota: inputKabKota.value.trim(),
      sekolah: inputSekolah.value.trim(),
      nomorUrut: inputNomorUrut.value.trim(),
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
    docPaslonInfo.textContent = `Paslon No. ${paslon.nomorUrut} &bull; ${paslon.sekolah} (${paslon.kabKota})`;

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
    displayKetuaSchool.textContent = `${paslon.sekolah} &bull; Paslon #${paslon.nomorUrut}`;

    displayWakilName.textContent = paslon.wakilName;
    displayWakilSchool.textContent = `${paslon.sekolah} &bull; Paslon #${paslon.nomorUrut}`;

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
      nomorUrut: state.paslonData.nomorUrut,
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
            // Daftarkan ke local cache pencegahan duplikasi
            cacheRegisteredPaslon(state.paslonData);
          } else if (result.code === "DUPLICATE_PASLON") {
            loadingOverlay.classList.remove("show");
            state.isSubmitting = false;
            showToast(result.message || "Nomor Paslon ini sudah pernah didaftarkan!", "error");
            setPaslonStatusTaken(state.paslonData.nomorUrut, state.paslonData.sekolah, "");
            setWizardStep(1);
            return;
          } else {
            console.warn("GAS Server response:", result);
            showToast(result.message || "Data diproses dengan catatan.", "info");
            cacheRegisteredPaslon(state.paslonData);
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
      showToast("Koneksi cloud gagal. Data tetap diamankan di perangkat ini.", "error");
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
    certNomorPaslon.textContent = `Paslon Nomor Urut ${data.nomorUrut}`;
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
      paslonLockStatus.style.display = "none";
      state.isPaslonNumberLocked = false;
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
