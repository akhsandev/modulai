/* ==========================================================================
   SORTING LAB — STORAGE MANAGER (js/storage.js)
   LocalStorage persistence for student profiles, sessions, and teacher reviews
   ========================================================================== */

class StorageManager {
  constructor() {
    this.KEYS = {
      STUDENT_NAME: 'sorting_lab_student_name',
      SOUND_MUTED: 'sorting_lab_sound_muted',
      REVIEWS: 'sorting_lab_teacher_reviews'
    };
  }

  getStudentName() {
    return localStorage.getItem(this.KEYS.STUDENT_NAME) || 'Siswa CS';
  }

  setStudentName(name) {
    if (name && name.trim()) {
      localStorage.setItem(this.KEYS.STUDENT_NAME, name.trim());
    }
  }

  isSoundMuted() {
    return localStorage.getItem(this.KEYS.SOUND_MUTED) === 'true';
  }

  setSoundMuted(muted) {
    localStorage.setItem(this.KEYS.SOUND_MUTED, muted ? 'true' : 'false');
  }

  getReviews() {
    try {
      const data = localStorage.getItem(this.KEYS.REVIEWS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to parse teacher reviews from LocalStorage', e);
      return [];
    }
  }

  saveReview(reviewObj) {
    const reviews = this.getReviews();
    reviews.unshift(reviewObj); // Add newest at beginning
    localStorage.setItem(this.KEYS.REVIEWS, JSON.stringify(reviews));
  }

  clearAllData() {
    localStorage.removeItem(this.KEYS.STUDENT_NAME);
    localStorage.removeItem(this.KEYS.SOUND_MUTED);
    localStorage.removeItem(this.KEYS.REVIEWS);
  }
}

window.storageManager = new StorageManager();
