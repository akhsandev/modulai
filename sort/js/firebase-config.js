/* ==========================================================================
   SORTING LAB — FIREBASE REALTIME DATABASE CONFIG (js/firebase-config.js)
   Firebase SDK Initialization & Realtime Database Wrappers
   Includes Fallback Simulated Engine if credentials are not yet configured.
   ========================================================================== */

class FirebaseManager {
  constructor() {
    // ⚠️ MASUKKAN CONFIG FIREBASE ANDA DI SINI
    // Lihat panduan lengkap di file FIREBASE_SETUP_GUIDE.md
    this.config = {
      apiKey: "AIzaSyAmI2P1qMdkZhf7zn7rnCgspcblVwQ76rk",
      authDomain: "aplikasi-pengumpul-tugas.firebaseapp.com",
      databaseURL: "https://aplikasi-pengumpul-tugas-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "aplikasi-pengumpul-tugas",
      storageBucket: "aplikasi-pengumpul-tugas.firebasestorage.app",
      messagingSenderId: "443916292573",
      appId: "1:443916292573:web:8a3b3ad5d626018f7b6634",
      measurementId: "G-HLM12RKMDG"
    };

    this.app = null;
    this.db = null;
    this.isRealFirebase = false;

    // Fallback Local Storage / Memory database for offline testing
    this.fallbackStore = {
      rooms: {}
    };
  }

  init() {
    // Check if Firebase Web SDK is loaded and keys are customized
    if (window.firebase && this.config.apiKey && !this.config.apiKey.includes('YOUR_API_KEY')) {
      try {
        if (!firebase.apps.length) {
          this.app = firebase.initializeApp(this.config);
        } else {
          this.app = firebase.app();
        }
        this.db = firebase.database();
        this.isRealFirebase = true;
        console.log('🔥 Firebase Realtime Database connected successfully!');
      } catch (e) {
        console.warn('⚠️ Firebase initialization failed, running in Fallback Mode.', e);
        this.isRealFirebase = false;
      }
    } else {
      console.log('ℹ️ Firebase config set to Default/Fallback mode. Ready for local & simulated multiplayer.');
      this.isRealFirebase = false;
    }
  }

  // --- FIREBASE / FALLBACK WRAPPERS ---

  /**
   * Listen to all open rooms
   */
  listenRooms(callback) {
    if (this.isRealFirebase && this.db) {
      this.db.ref('rooms').on('value', (snapshot) => {
        const data = snapshot.val() || {};
        callback(data);
      });
    } else {
      // Fallback local store listener via BroadcastChannel or Interval
      const updateFallback = () => {
        try {
          const stored = localStorage.getItem('sorting_lab_multiplayer_rooms');
          const rooms = stored ? JSON.parse(stored) : this.fallbackStore.rooms;
          callback(rooms);
        } catch (e) {
          callback(this.fallbackStore.rooms);
        }
      };

      updateFallback();
      if (!this.fallbackTimer) {
        this.fallbackTimer = setInterval(updateFallback, 1000);
      }
    }
  }

  /**
   * Create new room (Teacher is Host, 5 Slots reserved for Students)
   */
  async createRoom(roomData) {
    const roomId = 'room_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 4);
    
    // Generate authoritative initial numbers for all participants in this room
    const count = parseInt(roomData.numberCount) || 5;
    const initialNumbers = roomData.initialArray || (window.gameState ? window.gameState.generateNumbers(count, 'random') : [42, 17, 89, 33, 65]);

    const roomPayload = {
      id: roomId,
      name: roomData.name,
      algorithm: roomData.algorithm,
      numberCount: count,
      initialArray: initialNumbers,
      hostName: roomData.hostName,
      hostId: roomData.hostId,
      status: 'waiting', // waiting | starting | playing | finished
      maxPlayers: 5,
      createdAt: Date.now(),
      players: {} // 5 slots reserved for students
    };

    if (this.isRealFirebase && this.db) {
      await this.db.ref(`rooms/${roomId}`).set(roomPayload);
    } else {
      this.saveFallbackRoom(roomId, roomPayload);
    }

    return roomId;
  }

  /**
   * Remove player from room (Kick by Teacher or Leave by Student)
   */
  async removePlayer(roomId, playerId) {
    if (this.isRealFirebase && this.db) {
      await this.db.ref(`rooms/${roomId}/players/${playerId}`).remove();
    } else {
      const rooms = this.getFallbackRooms();
      if (rooms[roomId] && rooms[roomId].players && rooms[roomId].players[playerId]) {
        delete rooms[roomId].players[playerId];
        this.fallbackStore.rooms = rooms;
        this.saveFallbackRoom(roomId, rooms[roomId]);
      }
    }
  }

  /**
   * Delete room (Teacher only)
   */
  async deleteRoom(roomId) {
    if (this.isRealFirebase && this.db) {
      await this.db.ref(`rooms/${roomId}`).remove();
    } else {
      const rooms = this.getFallbackRooms();
      if (rooms[roomId]) {
        delete rooms[roomId];
        this.fallbackStore.rooms = rooms;
        try {
          localStorage.setItem('sorting_lab_multiplayer_rooms', JSON.stringify(rooms));
        } catch (e) {}
      }
    }
  }

  /**
   * Join an existing room
   */
  async joinRoom(roomId, player) {
    if (this.isRealFirebase && this.db) {
      const snap = await this.db.ref(`rooms/${roomId}`).once('value');
      const room = snap.val();
      if (!room) throw new Error('Room tidak ditemukan!');
      
      const players = room.players || {};
      const playerKeys = Object.keys(players);

      if (playerKeys.length >= 5 && !players[player.id]) {
        throw new Error('Room sudah Penuh (Maksimal 5 Pemain)!');
      }

      await this.db.ref(`rooms/${roomId}/players/${player.id}`).set({
        id: player.id,
        name: player.name,
        isHost: false,
        isReady: true,
        progress: 0,
        isFinished: false,
        finishTime: null,
        accuracyScore: 0
      });
    } else {
      const rooms = this.getFallbackRooms();
      const room = rooms[roomId];
      if (!room) throw new Error('Room tidak ditemukan!');

      const players = room.players || {};
      if (Object.keys(players).length >= 5 && !players[player.id]) {
        throw new Error('Room sudah Penuh (Maksimal 5 Pemain)!');
      }

      players[player.id] = {
        id: player.id,
        name: player.name,
        isHost: false,
        isReady: true,
        progress: 0,
        isFinished: false,
        finishTime: null,
        accuracyScore: 0
      };

      this.saveFallbackRoom(roomId, room);
    }
  }

  /**
   * Start Match
   */
  async startMatch(roomId) {
    if (this.isRealFirebase && this.db) {
      await this.db.ref(`rooms/${roomId}`).update({
        status: 'playing',
        startTime: Date.now()
      });
    } else {
      const rooms = this.getFallbackRooms();
      if (rooms[roomId]) {
        rooms[roomId].status = 'playing';
        rooms[roomId].startTime = Date.now();
        this.saveFallbackRoom(roomId, rooms[roomId]);
      }
    }
  }

  /**
   * Update live player progress & array cards during match
   */
  async updatePlayerProgress(roomId, playerId, progressPercent, isFinished, finishTimeStr, score, extraData = {}) {
    const payload = {
      progress: progressPercent,
      isFinished: isFinished || false,
      ...extraData
    };
    if (finishTimeStr) payload.finishTime = finishTimeStr;
    if (score) payload.accuracyScore = score;

    if (this.isRealFirebase && this.db) {
      await this.db.ref(`rooms/${roomId}/players/${playerId}`).update(payload);
    } else {
      const rooms = this.getFallbackRooms();
      if (rooms[roomId] && rooms[roomId].players[playerId]) {
        Object.assign(rooms[roomId].players[playerId], payload);
        this.saveFallbackRoom(roomId, rooms[roomId]);
      }
    }
  }

  /**
   * Listen to single room updates
   */
  listenRoomDetail(roomId, callback) {
    if (this.isRealFirebase && this.db) {
      const ref = this.db.ref(`rooms/${roomId}`);
      ref.on('value', (snap) => {
        callback(snap.val());
      });
      return () => ref.off();
    } else {
      const updateDetail = () => {
        const rooms = this.getFallbackRooms();
        callback(rooms[roomId] || null);
      };
      updateDetail();
      const timer = setInterval(updateDetail, 500);
      return () => clearInterval(timer);
    }
  }

  // --- FALLBACK HELPERS ---
  getFallbackRooms() {
    try {
      const stored = localStorage.getItem('sorting_lab_multiplayer_rooms');
      return stored ? JSON.parse(stored) : this.fallbackStore.rooms;
    } catch (e) {
      return this.fallbackStore.rooms;
    }
  }

  saveFallbackRoom(roomId, roomObj) {
    const rooms = this.getFallbackRooms();
    rooms[roomId] = roomObj;
    this.fallbackStore.rooms = rooms;
    try {
      localStorage.setItem('sorting_lab_multiplayer_rooms', JSON.stringify(rooms));
    } catch (e) {}
  }
}

window.firebaseManager = new FirebaseManager();
