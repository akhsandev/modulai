/* ==========================================================================
   SORTING LAB — MULTIPLAYER MANAGER (js/multiplayer.js)
   Real-Time Match Controller, Room Browser, Live Progress HUD & Victory Podium
   ========================================================================== */

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
window.escapeHtml = escapeHtml;

class MultiplayerManager {
  constructor() {
    this.playerId = this.getOrCreatePlayerId();
    this.currentRoomId = null;
    this.roomDetailUnsub = null;
    this.isHost = false;
    this.isMatchActive = false;
    this.activeRoomData = null;

    this.isTeacherLoggedIn = sessionStorage.getItem('sorting_lab_teacher_logged') === 'true';
    this.teacherEmail = sessionStorage.getItem('sorting_lab_teacher_email') || '';
  }

  getOrCreatePlayerId() {
    let pid = sessionStorage.getItem('sorting_lab_player_id');
    if (!pid) {
      pid = 'player_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 4);
      sessionStorage.setItem('sorting_lab_player_id', pid);
    }
    return pid;
  }

  init() {
    window.firebaseManager.init();
    this.updateAdminUIState();
    this.subscribeOpenRooms();
  }

  updateAdminUIState() {
    const btnHeaderLogin = document.getElementById('btn-open-admin-login');
    const tagHeaderActive = document.getElementById('hud-admin-active-tag');
    const btnCreateRoom = document.getElementById('btn-create-room-trigger');
    const btnLobbyLogin = document.getElementById('btn-login-guru-lobby');
    const titleElem = document.getElementById('lobby-browser-title');
    const subElem = document.getElementById('lobby-browser-subtitle');
    const emptyTitle = document.getElementById('empty-rooms-title');
    const emptyDesc = document.getElementById('empty-rooms-desc');

    if (this.isTeacherLoggedIn) {
      // ADMIN CONTROL MODE
      if (btnHeaderLogin) btnHeaderLogin.classList.add('hidden');
      if (tagHeaderActive) tagHeaderActive.classList.remove('hidden');
      if (btnCreateRoom) btnCreateRoom.classList.remove('hidden');
      if (btnLobbyLogin) btnLobbyLogin.classList.add('hidden');

      if (titleElem) titleElem.textContent = '👨‍🏫 ADMIN CONTROL CENTER — MULTIPLAYER';
      if (subElem) subElem.textContent = 'Mode Admin Guru Aktif. Anda dapat membuat room kelas baru atau menghapus room yang ada.';
      if (emptyTitle) emptyTitle.textContent = 'Belum Ada Room Kelas Terbuka';
      if (emptyDesc) emptyDesc.textContent = 'Klik tombol "BUAT ROOM BARU" di atas untuk membuka arena pertandingan kelas!';

    } else {
      // STUDENT PLAYER MODE
      if (btnHeaderLogin) btnHeaderLogin.classList.remove('hidden');
      if (tagHeaderActive) tagHeaderActive.classList.add('hidden');
      if (btnCreateRoom) btnCreateRoom.classList.add('hidden');
      if (btnLobbyLogin) btnLobbyLogin.classList.remove('hidden');

      if (titleElem) titleElem.textContent = '⚡ MULTIPLAYER MATCH BROWSER';
      if (subElem) subElem.textContent = 'Pilih Room terbuka yang dibuat oleh Guru untuk bergabung dalam pertandingan (Maksimal 5 Players/Room).';
      if (emptyTitle) emptyTitle.textContent = 'Belum ada Room Terbuka';
      if (emptyDesc) emptyDesc.textContent = 'Menunggu Guru membuat room pertandingan kelas baru...';
    }

    if (window.lucide) window.lucide.createIcons();
  }

  async loginTeacher(email, password) {
    const errorElem = document.getElementById('teacher-login-error');
    const errorText = document.getElementById('teacher-login-error-text');

    if (!email || !password) {
      if (errorElem) errorElem.classList.remove('hidden');
      if (errorText) errorText.textContent = 'Mohon isi Email dan Password Guru!';
      return false;
    }

    let isSuccess = false;

    // Check Default Teacher Credentials or Firebase Auth
    if (email === 'guru@sortinglab.com' && password === 'guru123') {
      isSuccess = true;
    } else if (window.firebaseManager.isRealFirebase && window.firebase && firebase.auth) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        isSuccess = true;
      } catch (e) {
        if (errorElem) errorElem.classList.remove('hidden');
        if (errorText) errorText.textContent = 'Auth Fail: ' + e.message;
        return false;
      }
    } else {
      if (password === 'guru123' || password === 'admin') {
        isSuccess = true;
      }
    }

    if (isSuccess) {
      this.isTeacherLoggedIn = true;
      this.teacherEmail = email;
      sessionStorage.setItem('sorting_lab_teacher_logged', 'true');
      sessionStorage.setItem('sorting_lab_teacher_email', email);

      this.updateAdminUIState();
      if (errorElem) errorElem.classList.add('hidden');
      window.uiController.closeModal('modal-teacher-login');
      window.soundEngine.playSuccess();
      return true;
    } else {
      if (errorElem) errorElem.classList.remove('hidden');
      if (errorText) errorText.textContent = 'Email atau Password Guru salah!';
      return false;
    }
  }

  logoutTeacher() {
    this.isTeacherLoggedIn = false;
    this.teacherEmail = '';
    sessionStorage.removeItem('sorting_lab_teacher_logged');
    sessionStorage.removeItem('sorting_lab_teacher_email');
    this.updateAdminUIState();
    window.soundEngine.playClick();
  }

  subscribeOpenRooms() {
    window.firebaseManager.listenRooms((roomsObj) => {
      this.renderOpenRoomsList(roomsObj);
    });
  }

  renderOpenRoomsList(roomsObj) {
    const listContainer = document.getElementById('multiplayer-rooms-list');
    const emptyState = document.getElementById('multiplayer-rooms-empty');

    if (!listContainer || !emptyState) return;

    const rooms = Object.values(roomsObj || {}).filter(r => r && r.status !== 'finished');

    if (rooms.length === 0) {
      emptyState.classList.remove('hidden');
      listContainer.innerHTML = '';
      return;
    }

    emptyState.classList.add('hidden');
    const isAdmin = this.isTeacherLoggedIn;

    listContainer.innerHTML = rooms.map(room => {
      const players = Object.values(room.players || {});
      const count = players.length;
      const isFull = count >= 5;

      return `
        <div class="room-card glass-panel ${isFull ? 'room-full' : ''}">
          <div class="room-card-header">
            <div>
              <h4>${escapeHtml(room.name)}</h4>
              <span class="room-algo-badge">${escapeHtml(room.algorithm).toUpperCase()} SORT • ${room.numberCount} Angka</span>
            </div>
            <div class="room-capacity-badge ${isFull ? 'full' : ''}">
              <i data-lucide="users"></i>
              <span>${count} / 5</span>
              ${isFull ? '<strong class="full-tag">FULL</strong>' : ''}
            </div>
          </div>
          <div class="room-card-body">
            <p class="room-host">Host Guru: <strong>${escapeHtml(room.hostName)}</strong></p>
          </div>
          <div class="room-card-footer flex-gap">
            <button class="btn-join-room ${isFull && !isAdmin ? 'btn-disabled' : 'btn-primary-gradient'}" 
                    data-roomid="${room.id}" ${isFull && !isAdmin ? 'disabled' : ''}>
              <span>${isAdmin ? 'MASUK LOBBY' : (isFull ? 'ROOM FULL' : 'JOIN MATCH')}</span>
              <i data-lucide="${isAdmin ? 'eye' : (isFull ? 'lock' : 'arrow-right')}"></i>
            </button>
            ${isAdmin ? `
              <button class="btn-card-delete-room" data-roomid="${room.id}" title="Hapus room ini">
                <i data-lucide="trash-2"></i>
                <span>HAPUS</span>
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Attach Join Listeners
    listContainer.querySelectorAll('.btn-join-room').forEach(btn => {
      btn.addEventListener('click', () => {
        const roomId = btn.dataset.roomid;
        if (roomId) this.handleJoinRoom(roomId);
      });
    });

    // Attach Admin Card Delete Listeners
    listContainer.querySelectorAll('.btn-card-delete-room').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const roomId = btn.dataset.roomid;
        if (roomId && confirm('Hapus room pertandingan ini secara permanen?')) {
          await window.firebaseManager.deleteRoom(roomId);
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  async handleCreateRoom(name, algo, count) {
    try {
      const hostName = window.gameState.studentName || 'Guru CS';
      const roomId = await window.firebaseManager.createRoom({
        name,
        algorithm: algo,
        numberCount: count,
        hostId: this.playerId,
        hostName
      });

      this.isHost = true;
      this.enterRoomLobby(roomId);
    } catch (e) {
      alert('Gagal membuat room: ' + e.message);
    }
  }

  async handleJoinRoom(roomId) {
    try {
      const playerName = window.gameState.studentName || 'Siswa CS';
      await window.firebaseManager.joinRoom(roomId, {
        id: this.playerId,
        name: playerName
      });

      this.isHost = false;
      this.enterRoomLobby(roomId);
    } catch (e) {
      alert(e.message);
    }
  }

  enterRoomLobby(roomId) {
    this.currentRoomId = roomId;

    if (this.roomDetailUnsub) {
      this.roomDetailUnsub();
    }

    this.roomDetailUnsub = window.firebaseManager.listenRoomDetail(roomId, (room) => {
      if (!room) return;
      this.activeRoomData = room;

      if (!this.isMatchActive) {
        this.renderLobbyUI(room);
      }

      // Launch arena when match is starting or playing
      if ((room.status === 'starting' || room.status === 'playing') && !this.isMatchActive) {
        this.launchMultiplayerArena(room);
      }

      // Always update live Spectator Grid & Opponent HUD while match is active
      if (this.isMatchActive) {
        this.updateLiveOpponentProgress(room);
      }
    });

    window.uiController.openModal('modal-room-lobby');
  }

  renderLobbyUI(room) {
    const titleElem = document.getElementById('lobby-room-title');
    const metaElem = document.getElementById('lobby-room-meta');
    const slotsContainer = document.getElementById('lobby-player-slots');
    const joinedCountElem = document.getElementById('lobby-joined-count');
    const btnStart = document.getElementById('btn-lobby-start-match');
    const btnDelete = document.getElementById('btn-lobby-delete-room');
    const btnLeave = document.getElementById('btn-lobby-leave-room');

    if (titleElem) titleElem.textContent = room.name.toUpperCase();
    if (metaElem) metaElem.textContent = `${room.algorithm.toUpperCase()} SORT • ${room.numberCount} ANGKA • HOST GURU: ${room.hostName}`;

    const players = Object.values(room.players || {});
    if (joinedCountElem) joinedCountElem.textContent = players.length;

    const isTeacher = this.isTeacherLoggedIn || room.hostId === this.playerId;
    const isPlayerInRoom = room.players && room.players[this.playerId];

    // If student was kicked while in lobby, eject to room browser
    if (!isTeacher && !isPlayerInRoom && this.currentRoomId) {
      window.uiController.closeModal('modal-room-lobby');
      this.currentRoomId = null;
      alert('Anda telah keluar atau dikeluarkan dari room oleh Guru.');
      return;
    }

    if (slotsContainer) {
      slotsContainer.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        const p = players[i];
        const slotCard = document.createElement('div');
        slotCard.className = `lobby-slot-card glass-panel ${p ? 'filled' : 'empty'}`;

        if (p) {
          const isSelf = p.id === this.playerId;
          slotCard.innerHTML = `
            <div class="slot-avatar">
              <i data-lucide="user"></i>
            </div>
            <div class="slot-info">
              <h4>${escapeHtml(p.name)} ${isSelf ? '(Anda)' : ''}</h4>
              <span class="slot-role">SISWA ${i + 1}</span>
            </div>
            <div class="slot-ready-tag">READY ✓</div>
            ${isTeacher ? `<button class="btn-kick-player" data-playerid="${p.id}" title="Hapus siswa dari room">🚫 HAPUS</button>` : ''}
            ${!isTeacher && isSelf ? `<button class="btn-leave-slot" data-playerid="${p.id}">🚪 KELUAR</button>` : ''}
          `;
        } else {
          slotCard.innerHTML = `
            <div class="slot-avatar empty-avatar">
              <i data-lucide="user-plus"></i>
            </div>
            <div class="slot-info">
              <h4 class="text-muted">Menunggu Siswa...</h4>
              <span class="slot-role">SLOT ${i + 1} TERBUKA</span>
            </div>
          `;
        }
        slotsContainer.appendChild(slotCard);
      }

      // Attach Kick & Leave handlers inside slots
      slotsContainer.querySelectorAll('.btn-kick-player').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const targetPid = btn.dataset.playerid;
          if (targetPid && confirm('Keluarkan siswa ini dari room?')) {
            await window.firebaseManager.removePlayer(this.currentRoomId, targetPid);
          }
        });
      });

      slotsContainer.querySelectorAll('.btn-leave-slot').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          if (this.currentRoomId && confirm('Apakah Anda ingin keluar dari room ini?')) {
            await window.firebaseManager.removePlayer(this.currentRoomId, this.playerId);
            window.uiController.closeModal('modal-room-lobby');
            this.currentRoomId = null;
          }
        });
      });
    }

    // Controls display based on Teacher vs Student role
    if (isTeacher) {
      if (btnStart) {
        btnStart.classList.remove('hidden');
        btnStart.disabled = players.length < 1;
      }
      if (btnDelete) btnDelete.classList.remove('hidden');
      if (btnLeave) btnLeave.classList.add('hidden');
    } else {
      if (btnStart) btnStart.classList.add('hidden');
      if (btnDelete) btnDelete.classList.add('hidden');
      if (btnLeave) btnLeave.classList.remove('hidden');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  async handleDeleteCurrentRoom() {
    if (!this.currentRoomId) return;
    if (confirm('Hapus room pertandingan ini secara permanen?')) {
      await window.firebaseManager.deleteRoom(this.currentRoomId);
      window.uiController.closeModal('modal-room-lobby');
      this.currentRoomId = null;
    }
  }

  async handleLeaveCurrentRoom() {
    if (!this.currentRoomId) return;
    if (confirm('Keluar dari room ini?')) {
      await window.firebaseManager.removePlayer(this.currentRoomId, this.playerId);
      window.uiController.closeModal('modal-room-lobby');
      this.currentRoomId = null;
    }
  }

  async triggerStartMatch() {
    if (!this.currentRoomId) return;
    await window.firebaseManager.startMatch(this.currentRoomId);
  }

  launchMultiplayerArena(room) {
    this.isMatchActive = true;
    window.uiController.closeModal('modal-room-lobby');

    const isTeacher = this.isTeacherLoggedIn || room.hostId === this.playerId;

    // Configure Game State for this match using the synchronized initialArray from room
    window.gameState.setupNewGame(room.algorithm, room.numberCount, 'random', room.initialArray);
    window.uiController.updateHUDStats();

    if (isTeacher) {
      // TEACHER SPECTATOR DASHBOARD
      const titleElem = document.getElementById('spectator-room-title');
      const metaElem = document.getElementById('spectator-room-meta');
      if (titleElem) titleElem.textContent = `SPECTATOR: ${room.name.toUpperCase()}`;
      if (metaElem) metaElem.textContent = `${room.algorithm.toUpperCase()} SORT • ${room.numberCount} ANGKA • MONITORING LIVE SISWA`;

      this.renderTeacherSpectatorGrid(room);
      window.uiController.switchScreen('screen-teacher-spectator');

    } else {
      // STUDENT PLAYER MODE
      const oppHud = document.getElementById('arena-multiplayer-hud');
      if (oppHud) oppHud.classList.remove('hidden');

      const instElem = document.getElementById('arena-instruction-text');
      if (instElem) instElem.textContent = `Pindahkan kartu angka secara manual untuk mengurutkan data (${room.algorithm.toUpperCase()} SORT).`;

      // Init Drag Engine for Student
      window.dragDropEngine.init('sorting-arena-cards', 'arena-slots-bg', () => {
        window.uiController.updateHUDStats();
        window.historyManager.renderLogs();
        this.broadcastProgress();
      });

      window.historyManager.clear();
      window.uiController.switchScreen('screen-arena');
    }

    // Trigger Countdown Overlay
    this.runCountdownOverlay(() => {
      // Game started
    });
  }

  broadcastProgress() {
    if (!this.currentRoomId) return;

    const currentArr = window.gameState.currentArray;
    const idealSorted = window.SortingAlgorithms.getIdealSorted(window.gameState.initialArray);
    
    // Calculate how many elements are in correct sorted index
    let sortedCount = 0;
    currentArr.forEach((val, idx) => {
      if (val === idealSorted[idx]) sortedCount++;
    });

    const progressPercent = Math.round((sortedCount / currentArr.length) * 100);

    // Broadcast current live array and progress (does NOT auto-finish)
    window.firebaseManager.updatePlayerProgress(
      this.currentRoomId,
      this.playerId,
      progressPercent,
      false,
      null,
      null,
      {
        currentArray: currentArr,
        moves: window.gameState.moveCount,
        swaps: window.gameState.swapCount
      }
    );
  }

  async submitStudentFinish() {
    if (!this.currentRoomId) return;

    const currentArr = window.gameState.currentArray;
    const timeStr = window.gameState.getFormattedTime();
    const evalResult = window.SortingAlgorithms.evaluateStudentPerformance(
      window.gameState.activeAlgorithm,
      window.gameState.initialArray,
      currentArr,
      window.gameState.historyStack
    );

    await window.firebaseManager.updatePlayerProgress(
      this.currentRoomId,
      this.playerId,
      100,
      true,
      timeStr,
      evalResult.accuracyScore,
      {
        currentArray: currentArr,
        moves: window.gameState.moveCount,
        swaps: window.gameState.swapCount
      }
    );

    window.soundEngine?.playSuccess();
    setTimeout(() => this.triggerVictoryPodium(), 300);
  }

  updateLiveOpponentProgress(room) {
    const isTeacher = this.isTeacherLoggedIn || room.hostId === this.playerId;
    if (isTeacher) {
      this.renderTeacherSpectatorGrid(room);
      return;
    }

    const oppContainer = document.getElementById('multiplayer-opponents-list');
    if (!oppContainer || !room.players) return;

    const players = Object.values(room.players);
    oppContainer.innerHTML = players.map(p => `
      <div class="opp-bar-item">
        <div class="opp-info">
          <span>${escapeHtml(p.name)} ${p.id === this.playerId ? '(You)' : ''}</span>
          <span>${p.isFinished ? `🏆 ${p.finishTime}` : `${p.progress || 0}%`}</span>
        </div>
        <div class="opp-progress-track">
          <div class="opp-progress-fill ${p.isFinished ? 'finished' : ''}" style="width: ${p.progress || 0}%"></div>
        </div>
      </div>
    `).join('');
  }

  renderTeacherSpectatorGrid(room) {
    const grid = document.getElementById('spectator-students-grid');
    if (!grid || !room.players) return;

    const players = Object.values(room.players);

    if (players.length === 0) {
      grid.innerHTML = '<div class="rooms-empty glass-panel"><h3>Belum ada Siswa yang Bertanding</h3></div>';
      return;
    }

    grid.innerHTML = players.map((p, idx) => {
      const arr = p.currentArray || [];
      return `
        <div class="spectator-student-card glass-panel ${p.isFinished ? 'finished-card' : ''}">
          <div class="spectator-card-header">
            <div class="student-profile-info">
              <div class="student-avatar-circle">${idx + 1}</div>
              <div>
                <h4>${escapeHtml(p.name)}</h4>
                <span class="student-stats-sub">Moves: ${p.moves || 0} • Swaps: ${p.swaps || 0}</span>
              </div>
            </div>
            <div class="spectator-status-tag ${p.isFinished ? 'tag-finished' : 'tag-active'}">
              ${p.isFinished ? `🏆 ${p.finishTime}` : 'SORTING ⚡'}
            </div>
          </div>

          <div class="spectator-cards-row">
            ${arr.length > 0 
              ? arr.map(val => `<div class="mini-spectator-num">${val}</div>`).join('') 
              : '<span class="text-dim">Menunggu gerakan pertama...</span>'
            }
          </div>

          <div class="spectator-progress-box">
            <div class="spectator-progress-text">
              <span>Progress Real-Time</span>
              <strong>${p.isFinished ? '100% (SELESAI)' : (p.progress || 0) + '%'}</strong>
            </div>
            <div class="opp-progress-track">
              <div class="opp-progress-fill ${p.isFinished ? 'finished' : ''}" style="width: ${p.isFinished ? 100 : (p.progress || 0)}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  runCountdownOverlay(onComplete) {
    let overlay = document.getElementById('match-countdown-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'match-countdown-overlay';
      overlay.className = 'countdown-overlay';
      document.body.appendChild(overlay);
    }

    overlay.classList.remove('hidden');
    let count = 3;
    overlay.innerHTML = `<div class="countdown-number">${count}</div>`;
    window.soundEngine.playDragStart();

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        overlay.innerHTML = `<div class="countdown-number">${count}</div>`;
        window.soundEngine.playDragStart();
      } else if (count === 0) {
        overlay.innerHTML = `<div class="countdown-number go">SORT!</div>`;
        window.soundEngine.playSuccess();
      } else {
        clearInterval(interval);
        overlay.classList.add('hidden');
        if (onComplete) onComplete();
      }
    }, 900);
  }

  triggerVictoryPodium() {
    if (!this.activeRoomData) return;

    const modal = document.getElementById('modal-victory-podium');
    const list = document.getElementById('podium-rankings-list');
    if (!modal || !list) return;

    const players = Object.values(this.activeRoomData.players || {});
    // Sort players by finished status & finish time
    players.sort((a, b) => {
      if (a.isFinished && !b.isFinished) return -1;
      if (!a.isFinished && b.isFinished) return 1;
      return (a.finishTime || '99:99').localeCompare(b.finishTime || '99:99');
    });

    list.innerHTML = players.map((p, idx) => {
      const rank = idx + 1;
      const trophy = rank === 1 ? '🥇 WINNER' : (rank === 2 ? '🥈 2ND PLACE' : (rank === 3 ? '🥉 3RD PLACE' : `RANK ${rank}`));
      return `
        <div class="podium-rank-card glass-panel rank-${rank}">
          <div class="rank-badge">${trophy}</div>
          <div class="rank-player-name">${escapeHtml(p.name)} ${p.id === this.playerId ? '(You)' : ''}</div>
          <div class="rank-stats">
            <span>Waktu: <strong>${p.finishTime || 'Proses'}</strong></span> | 
            <span>Kaidah: <strong>${p.accuracyScore || 100}%</strong></span>
          </div>
        </div>
      `;
    }).join('');

    window.uiController.openModal('modal-victory-podium');
  }
}

window.multiplayerManager = new MultiplayerManager();
