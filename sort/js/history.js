/* ==========================================================================
   SORTING LAB — HISTORY LOG & UNDO MANAGER (js/history.js)
   Renders real-time move steps in Arena and manages undo stack
   ========================================================================== */

class HistoryManager {
  constructor() {
    this.listContainer = null;
    this.badgeCount = null;
  }

  init() {
    this.listContainer = document.getElementById('history-log-list');
    this.badgeCount = document.getElementById('history-count-badge');
  }

  renderLogs() {
    if (!this.listContainer) this.init();
    if (!this.listContainer) return;

    const stack = window.gameState.historyStack;
    if (this.badgeCount) {
      this.badgeCount.textContent = stack.length;
    }

    if (stack.length === 0) {
      this.listContainer.innerHTML = '<div class="history-empty">Belum ada langkah diambil</div>';
      return;
    }

    this.listContainer.innerHTML = '';
    
    // Render in reverse order so latest step is at top
    [...stack].reverse().forEach((step) => {
      const item = document.createElement('div');
      item.className = 'history-item';
      
      const numPad = step.stepIndex.toString().padStart(2, '0');
      item.innerHTML = `
        <span class="step-num">Step ${numPad}</span>
        <span class="step-action">${step.fromVal} ↔ ${step.toVal}</span>
        <span class="step-time">${step.timestamp}</span>
      `;
      this.listContainer.appendChild(item);
    });
  }

  clear() {
    if (!this.listContainer) this.init();
    if (this.listContainer) {
      this.listContainer.innerHTML = '<div class="history-empty">Belum ada langkah diambil</div>';
    }
    if (this.badgeCount) {
      this.badgeCount.textContent = '0';
    }
  }
}

window.historyManager = new HistoryManager();
