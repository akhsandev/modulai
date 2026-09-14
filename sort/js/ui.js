/* ==========================================================================
   SORTING LAB — UI & SCREEN ROUTER (js/ui.js)
   Viewport screen navigation, modal management, Bento cards, review popups
   ========================================================================== */

class UIController {
  constructor() {
    this.activeScreenId = 'screen-menu';
  }

  init() {
    this.bindEvents();
    this.updateHUDStats();
    this.renderStudentNames();
    
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  switchScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      if (screen.id === screenId) {
        screen.classList.remove('hidden');
        screen.classList.add('active');
      } else {
        screen.classList.add('hidden');
        screen.classList.remove('active');
      }
    });

    const globalHud = document.getElementById('global-hud');
    if (screenId === 'screen-menu') {
      globalHud.classList.add('hidden');
    } else {
      globalHud.classList.remove('hidden');
    }

    this.activeScreenId = screenId;
    window.soundEngine.playClick();
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      window.soundEngine.playClick();
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      window.soundEngine.playClick();
    }
  }

  updateHUDStats() {
    const algoBadge = document.getElementById('hud-algorithm-badge');
    const movesCount = document.getElementById('hud-moves-count');
    const swapsCount = document.getElementById('hud-swaps-count');
    const timer = document.getElementById('hud-timer');

    if (algoBadge) algoBadge.textContent = window.gameState.activeAlgorithm.toUpperCase() + ' SORT';
    if (movesCount) movesCount.textContent = window.gameState.moveCount.toString().padStart(2, '0');
    if (swapsCount) swapsCount.textContent = window.gameState.swapCount.toString().padStart(2, '0');
    if (timer) timer.textContent = window.gameState.getFormattedTime();
  }

  renderStudentNames() {
    const name = window.gameState.studentName;
    const menuDisplay = document.getElementById('menu-student-name-display');
    const hudDisplay = document.getElementById('hud-student-name');
    const settingInput = document.getElementById('setting-student-name-input');
    const teacherInput = document.getElementById('teacher-student-name');

    if (menuDisplay) menuDisplay.textContent = name;
    if (hudDisplay) hudDisplay.textContent = name;
    if (settingInput) settingInput.value = name;
    if (teacherInput) teacherInput.value = name;
  }

  bindEvents() {
    // 1. HUD Navigation
    document.getElementById('btn-hud-back')?.addEventListener('click', () => {
      this.switchScreen('screen-menu');
    });

    document.getElementById('btn-sound-toggle')?.addEventListener('click', () => {
      const isMuted = !window.gameState.soundMuted;
      window.gameState.setSoundMuted(isMuted);
      this.updateSoundIcons();
    });

    document.getElementById('btn-open-settings')?.addEventListener('click', () => {
      this.openModal('modal-settings');
    });

    // 2. Main Menu Actions
    document.getElementById('btn-menu-play')?.addEventListener('click', () => {
      this.switchScreen('screen-select');
    });

    document.getElementById('btn-menu-how')?.addEventListener('click', () => {
      this.openModal('modal-how-to-play');
    });

    document.getElementById('btn-menu-learn')?.addEventListener('click', () => {
      this.renderLearnContent('bubble');
      this.openModal('modal-learn');
    });

    document.getElementById('btn-menu-progress')?.addEventListener('click', () => {
      this.renderProgressModal();
      this.openModal('modal-progress');
    });

    document.getElementById('btn-menu-settings')?.addEventListener('click', () => {
      this.openModal('modal-settings');
    });

    document.getElementById('btn-menu-multiplayer')?.addEventListener('click', () => {
      window.soundEngine?.playClick();
      if (window.multiplayerManager) {
        window.multiplayerManager.init();
      }
      this.switchScreen('screen-multiplayer-lobby');
    });

    document.getElementById('btn-back-from-multiplayer')?.addEventListener('click', () => {
      window.soundEngine?.playClick();
      this.switchScreen('screen-menu');
    });

    document.getElementById('btn-spectator-close')?.addEventListener('click', () => {
      window.soundEngine?.playClick();
      this.switchScreen('screen-menu');
    });

    document.getElementById('btn-create-room-trigger')?.addEventListener('click', () => {
      window.soundEngine?.playClick();
      this.openModal('modal-create-room');
    });

    document.getElementById('btn-open-admin-login')?.addEventListener('click', () => {
      window.soundEngine?.playClick();
      this.openModal('modal-teacher-login');
    });

    document.getElementById('btn-login-guru-lobby')?.addEventListener('click', () => {
      window.soundEngine?.playClick();
      this.openModal('modal-teacher-login');
    });

    document.getElementById('btn-submit-teacher-login')?.addEventListener('click', () => {
      const email = document.getElementById('teacher-login-email').value || '';
      const pass = document.getElementById('teacher-login-pass').value || '';
      if (window.multiplayerManager) {
        window.multiplayerManager.loginTeacher(email, pass);
      }
    });

    document.getElementById('btn-admin-logout')?.addEventListener('click', () => {
      window.multiplayerManager?.logoutTeacher();
    });

    document.getElementById('btn-teacher-logout')?.addEventListener('click', () => {
      window.multiplayerManager?.logoutTeacher();
    });

    document.getElementById('btn-submit-create-room')?.addEventListener('click', () => {
      const name = document.getElementById('input-room-name').value || 'Kelas 10-A Race';
      const algo = document.getElementById('select-room-algo').value || 'bubble';
      const count = parseInt(document.getElementById('select-room-count').value) || 5;

      window.soundEngine?.playSuccess();
      this.closeModal('modal-create-room');
      window.multiplayerManager?.handleCreateRoom(name, algo, count);
    });

    document.getElementById('btn-lobby-start-match')?.addEventListener('click', () => {
      window.soundEngine?.playSuccess();
      window.multiplayerManager?.triggerStartMatch();
    });

    document.getElementById('btn-lobby-delete-room')?.addEventListener('click', () => {
      window.multiplayerManager?.handleDeleteCurrentRoom();
    });

    document.getElementById('btn-lobby-leave-room')?.addEventListener('click', () => {
      window.multiplayerManager?.handleLeaveCurrentRoom();
    });

    document.getElementById('btn-prompt-name')?.addEventListener('click', () => {
      const newName = prompt('Masukkan Nama Siswa:', window.gameState.studentName);
      if (newName && newName.trim()) {
        window.gameState.setStudentName(newName.trim());
        this.renderStudentNames();
      }
    });

    // 3. Algorithm Selection Screen Buttons
    document.querySelectorAll('.btn-select-algo, .algo-card').forEach(elem => {
      elem.addEventListener('click', (e) => {
        const algo = elem.dataset.algo || elem.querySelector('.btn-select-algo')?.dataset.algo;
        if (algo) {
          window.gameState.activeAlgorithm = algo;
          this.updateSetupScreen(algo);
          this.switchScreen('screen-setup');
        }
      });
    });

    // 4. Setup Screen Controls
    document.querySelectorAll('#control-count .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#control-count .segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.gameState.numberCount = parseInt(btn.dataset.val);
        window.soundEngine.playClick();
      });
    });

    document.querySelectorAll('#control-condition .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#control-condition .segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.gameState.condition = btn.dataset.val;
        window.soundEngine.playClick();
      });
    });

    document.getElementById('btn-start-challenge')?.addEventListener('click', () => {
      this.startArenaGame();
    });

    // 5. Arena Action Buttons
    document.getElementById('btn-arena-undo')?.addEventListener('click', () => {
      const undone = window.gameState.undoLastMove();
      if (undone) {
        window.soundEngine.playUndo();
        window.dragDropEngine.renderArena();
        window.historyManager.renderLogs();
        this.updateHUDStats();
        if (window.multiplayerManager?.isMatchActive) {
          window.multiplayerManager.broadcastProgress();
        }
      }
    });

    document.getElementById('btn-arena-reset')?.addEventListener('click', () => {
      window.gameState.resetGame();
      window.soundEngine.playUndo();
      window.dragDropEngine.renderArena();
      window.historyManager.clear();
      this.updateHUDStats();
      if (window.multiplayerManager?.isMatchActive) {
        window.multiplayerManager.broadcastProgress();
      }
    });

    document.getElementById('btn-arena-verify')?.addEventListener('click', () => {
      this.triggerVerificationModal();
    });

    // 6. Modal Close Buttons
    document.querySelectorAll('.btn-modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.modal;
        if (modalId) this.closeModal(modalId);
      });
    });

    // 7. Learn Modal Tabs
    document.querySelectorAll('.learn-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.learn-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.renderLearnContent(tab.dataset.tab);
        window.soundEngine.playClick();
      });
    });

    // 8. Settings Modal Controls
    document.getElementById('btn-save-settings')?.addEventListener('click', () => {
      const input = document.getElementById('setting-student-name-input');
      if (input && input.value.trim()) {
        window.gameState.setStudentName(input.value.trim());
        this.renderStudentNames();
      }
      const soundCheck = document.getElementById('setting-sound-toggle');
      if (soundCheck) {
        window.gameState.setSoundMuted(!soundCheck.checked);
        this.updateSoundIcons();
      }
      this.closeModal('modal-settings');
    });

    document.getElementById('btn-reset-storage')?.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin menghapus seluruh data lokal dan riwayat latihan?')) {
        window.storageManager.clearAllData();
        window.gameState.studentName = 'Siswa CS';
        this.renderStudentNames();
        alert('Data berhasil di-reset.');
        this.closeModal('modal-settings');
      }
    });

    // 9. Teacher Review Save Action
    document.getElementById('btn-save-teacher-review')?.addEventListener('click', () => {
      this.saveTeacherReview();
    });

    document.getElementById('btn-review-play-again')?.addEventListener('click', () => {
      this.closeModal('modal-review');

      if (window.multiplayerManager?.isMatchActive || window.multiplayerManager?.currentRoomId) {
        // MULTIPLAYER MODE: Return student back to Multiplayer Lobby Browser!
        window.multiplayerManager.isMatchActive = false;
        window.multiplayerManager.currentRoomId = null;
        const oppHud = document.getElementById('arena-multiplayer-hud');
        if (oppHud) oppHud.classList.add('hidden');
        this.switchScreen('screen-multiplayer-lobby');
      } else {
        // SOLO MODE: Immediately start fresh arena game!
        this.startArenaGame();
      }
    });
  }

  updateSoundIcons() {
    const icon = document.getElementById('sound-icon');
    const check = document.getElementById('setting-sound-toggle');
    if (icon) {
      icon.setAttribute('data-lucide', window.gameState.soundMuted ? 'volume-x' : 'volume-2');
      if (window.lucide) window.lucide.createIcons();
    }
    if (check) {
      check.checked = !window.gameState.soundMuted;
    }
  }

  updateSetupScreen(algo) {
    const info = window.SortingAlgorithms.getAlgorithmInfo(algo);
    const titleElem = document.getElementById('setup-algo-title');
    const subtitleElem = document.getElementById('setup-algo-subtitle');
    const iconBox = document.getElementById('setup-algo-icon');

    if (titleElem) titleElem.textContent = info.title.toUpperCase();
    if (subtitleElem) subtitleElem.textContent = info.tagline;

    if (iconBox) {
      iconBox.className = `algo-icon-large ${algo === 'bubble' ? 'purple' : algo === 'selection' ? 'blue' : algo === 'insertion' ? 'green' : algo === 'merge' ? 'orange' : 'pink'}`;
    }
  }

  startArenaGame() {
    window.gameState.setupNewGame();
    this.updateHUDStats();
    
    // Setup Arena Drag Engine
    window.dragDropEngine.init('sorting-arena-cards', 'arena-slots-bg', () => {
      this.updateHUDStats();
      window.historyManager.renderLogs();
    });

    window.historyManager.clear();

    const textElem = document.getElementById('arena-instruction-text');
    const tagElem = document.getElementById('arena-algo-tag');
    if (textElem) {
      textElem.textContent = `Pindahkan kartu angka secara manual untuk mengurutkan data (${window.gameState.activeAlgorithm.toUpperCase()} SORT).`;
    }
    if (tagElem) {
      tagElem.textContent = `${window.gameState.activeAlgorithm.toUpperCase()} SORT`;
    }

    this.switchScreen('screen-arena');
  }

  triggerVerificationModal() {
    window.gameState.stopTimer();
    
    const algo = window.gameState.activeAlgorithm;
    const initialArr = window.gameState.initialArray;
    const finalArr = window.gameState.currentArray;
    const history = window.gameState.historyStack;

    const evalResult = window.SortingAlgorithms.evaluateStudentPerformance(algo, initialArr, finalArr, history);

    if (window.multiplayerManager?.isMatchActive) {
      window.multiplayerManager.submitStudentFinish();
    }

    if (evalResult.isSuccess) {
      window.soundEngine.playSuccess();
    }

    // Populate Review Banner
    const banner = document.getElementById('review-status-banner');
    const bannerTitle = document.getElementById('review-banner-title');
    const bannerDesc = document.getElementById('review-banner-desc');
    const bannerIcon = document.getElementById('review-banner-icon');

    if (evalResult.isSuccess) {
      banner.className = 'status-banner banner-success';
      bannerTitle.textContent = 'SORTING SELESAI & BENAR! ✓';
      bannerDesc.textContent = 'Semua angka terurut sempurna dari kecil ke besar!';
      if (bannerIcon) bannerIcon.setAttribute('data-lucide', 'check-circle-2');
    } else {
      banner.className = 'status-banner banner-warning';
      bannerTitle.textContent = 'SORTING BELUM TEPAT ⚠️';
      bannerDesc.textContent = 'Urutan angka akhir belum sepenuhnya terurut secara benar.';
      if (bannerIcon) bannerIcon.setAttribute('data-lucide', 'alert-triangle');
    }

    // Populate Arrays
    const finalRow = document.getElementById('review-final-array');
    const idealRow = document.getElementById('review-ideal-array');
    if (finalRow) {
      finalRow.innerHTML = finalArr.map(num => `<div class="mini-card">${num}</div>`).join('');
    }
    if (idealRow) {
      idealRow.innerHTML = evalResult.idealSorted.map(num => `<div class="mini-card">${num}</div>`).join('');
    }

    // Populate Stats
    document.getElementById('review-stat-moves').textContent = window.gameState.moveCount;
    document.getElementById('review-stat-swaps').textContent = window.gameState.swapCount;
    document.getElementById('review-stat-time').textContent = window.gameState.getFormattedTime();
    document.getElementById('review-stat-accuracy').textContent = evalResult.accuracyScore + '%';

    // Populate Logs
    const logsContainer = document.getElementById('review-logs-container');
    if (logsContainer) {
      if (history.length === 0) {
        logsContainer.innerHTML = '<div class="history-empty">Tidak ada langkah dilakukan.</div>';
      } else {
        logsContainer.innerHTML = history.map(step => `
          <div class="history-item">
            <span>Step ${step.stepIndex}:</span>
            <span>${step.fromVal} ↔ ${step.toVal}</span>
            <span>(${step.timestamp})</span>
          </div>
        `).join('');
      }
    }

    // Populate Compliance Analysis
    const comp = evalResult.compliance;
    const compBadge = document.getElementById('review-compliance-badge');
    const compStatus = document.getElementById('review-compliance-status');
    const compSummary = document.getElementById('review-compliance-summary');
    const compList = document.getElementById('review-compliance-list');

    if (compBadge && compStatus && compSummary && compList) {
      compBadge.className = `status-banner ${comp.statusBadgeClass}`;
      compStatus.textContent = comp.statusText;
      compSummary.textContent = comp.summaryText;

      if (comp.stepAudits.length === 0) {
        compList.innerHTML = '<div class="history-empty">Belum ada langkah yang dievaluasi.</div>';
      } else {
        compList.innerHTML = comp.stepAudits.map(audit => `
          <div class="compliance-item ${audit.isCorrect ? 'audit-pass' : 'audit-fail'}">
            <div class="compliance-item-header">
              <span class="audit-icon">${audit.isCorrect ? '✓' : '✗'}</span>
              <span class="audit-step-title">Step ${audit.stepIndex}: (${audit.fromVal} ↔ ${audit.toVal})</span>
            </div>
            <p class="audit-msg">${audit.msg}</p>
          </div>
        `).join('');
      }
    }

    // Populate Teacher Form & Auto-generate Diagnostic Notes
    document.getElementById('teacher-student-name').value = window.gameState.studentName;
    document.getElementById('teacher-score').value = evalResult.accuracyScore;

    const complianceNote = comp.complianceScore === 100 
      ? `Siswa mengurutkan angka dengan TERURUT (✓) dan 100% SESUAI KAIDAH ${algo.toUpperCase()} SORT.`
      : `Hasil Akhir: ${evalResult.isSorted ? 'Terurut (✓)' : 'Belum Terurut (✗)'}. Kesesuaian Kaidah ${algo.toUpperCase()} SORT: ${comp.complianceScore}%. ${comp.summaryText}`;

    document.getElementById('teacher-notes').value = complianceNote;

    document.getElementById('teacher-save-alert').classList.add('hidden');

    if (window.lucide) window.lucide.createIcons();
    this.openModal('modal-review');
  }

  saveTeacherReview() {
    const studentName = document.getElementById('teacher-student-name').value || window.gameState.studentName;
    const score = parseInt(document.getElementById('teacher-score').value) || 100;
    const notes = document.getElementById('teacher-notes').value || '';

    const reviewRecord = {
      id: Date.now(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      studentName,
      algorithm: window.gameState.activeAlgorithm.toUpperCase(),
      initialArray: window.gameState.initialArray,
      finalArray: window.gameState.currentArray,
      moveCount: window.gameState.moveCount,
      swapCount: window.gameState.swapCount,
      time: window.gameState.getFormattedTime(),
      teacherScore: score,
      teacherNotes: notes
    };

    window.storageManager.saveReview(reviewRecord);
    window.soundEngine.playSuccess();

    const alertBox = document.getElementById('teacher-save-alert');
    if (alertBox) {
      alertBox.classList.remove('hidden');
      setTimeout(() => alertBox.classList.add('hidden'), 3000);
    }
  }

  renderLearnContent(algoKey) {
    const info = window.SortingAlgorithms.getAlgorithmInfo(algoKey);
    const contentBox = document.getElementById('learn-tab-content');
    if (!contentBox) return;

    contentBox.innerHTML = `
      <div class="learn-header-badge">
        <h3>${info.title}</h3>
        <p class="tagline">"${info.tagline}"</p>
      </div>
      
      <p class="learn-desc">${info.explanation}</p>
      
      <div class="learn-complexity-badge">
        <code>${info.complexity}</code>
      </div>

      <div class="learn-steps-box">
        <h4>Langkah-Langkah Utama Algoritma:</h4>
        <ol class="learn-steps-list">
          ${info.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    `;
  }

  renderProgressModal() {
    const listContainer = document.getElementById('progress-list-container');
    const emptyState = document.getElementById('progress-empty');

    const reviews = window.storageManager.getReviews();

    if (!listContainer || !emptyState) return;

    if (reviews.length === 0) {
      emptyState.classList.remove('hidden');
      listContainer.innerHTML = '';
      return;
    }

    emptyState.classList.add('hidden');
    const esc = window.escapeHtml || (s => s);
    listContainer.innerHTML = reviews.map(rev => `
      <div class="progress-card glass-panel">
        <div class="prog-header">
          <div>
            <h4>${esc(rev.algorithm)} SORT</h4>
            <span class="prog-date">${esc(rev.date)}</span>
          </div>
          <div class="prog-score-badge">${rev.teacherScore} / 100</div>
        </div>
        <div class="prog-body">
          <p><strong>Siswa:</strong> ${esc(rev.studentName)}</p>
          <p><strong>Moves:</strong> ${rev.moveCount} | <strong>Time:</strong> ${esc(rev.time)}</p>
          <div class="prog-notes">
            <em>"${esc(rev.teacherNotes || 'Belum ada catatan.')}"</em>
          </div>
        </div>
      </div>
    `).join('');
  }
}

window.uiController = new UIController();
