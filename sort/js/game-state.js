/* ==========================================================================
   SORTING LAB — GAME STATE MACHINE (js/game-state.js)
   Central reactive state store for active sorting session
   ========================================================================== */

class GameState {
  constructor() {
    this.studentName = window.storageManager.getStudentName();
    this.soundMuted = window.storageManager.isSoundMuted();
    
    this.activeAlgorithm = 'bubble'; // bubble | selection | insertion | merge | quick
    this.numberCount = 5;            // 5 | 7 | 10
    this.condition = 'random';       // random | nearly | reverse
    
    this.initialArray = [];
    this.currentArray = [];
    this.historyStack = [];
    
    this.moveCount = 0;
    this.swapCount = 0;
    this.elapsedSeconds = 0;
    this.timerInterval = null;

    this.isCompleted = false;
  }

  setStudentName(name) {
    this.studentName = name;
    window.storageManager.setStudentName(name);
  }

  setSoundMuted(muted) {
    this.soundMuted = muted;
    window.storageManager.setSoundMuted(muted);
    window.soundEngine.setMuted(muted);
  }

  setupNewGame(algo, count, condition, customInitialArray = null) {
    this.activeAlgorithm = algo || this.activeAlgorithm;
    this.numberCount = parseInt(count) || this.numberCount;
    this.condition = condition || this.condition;
    
    if (customInitialArray && Array.isArray(customInitialArray) && customInitialArray.length > 0) {
      this.initialArray = [...customInitialArray];
      this.numberCount = customInitialArray.length;
    } else {
      this.initialArray = this.generateNumbers(this.numberCount, this.condition);
    }
    this.currentArray = [...this.initialArray];
    this.historyStack = [];
    
    this.moveCount = 0;
    this.swapCount = 0;
    this.elapsedSeconds = 0;
    this.isCompleted = false;
    
    this.stopTimer();
    this.startTimer();
  }

  generateNumbers(count, condition) {
    let arr = [];
    // Generate distinct random positive integers e.g., between 5 and 99
    const pool = Array.from({ length: 90 }, (_, i) => i + 10);
    pool.sort(() => Math.random() - 0.5);
    arr = pool.slice(0, count);

    if (condition === 'random') {
      arr.sort(() => Math.random() - 0.5);
    } else if (condition === 'reverse') {
      arr.sort((a, b) => b - a);
    } else if (condition === 'nearly') {
      arr.sort((a, b) => a - b);
      // Swap 1 or 2 adjacent elements to make it "nearly sorted"
      if (arr.length >= 4) {
        const temp = arr[1];
        arr[1] = arr[2];
        arr[2] = temp;
      }
    }
    return arr;
  }

  recordMove(fromIndex, toIndex) {
    if (fromIndex === toIndex) return;

    const arrayBefore = [...this.currentArray];
    const fromVal = this.currentArray[fromIndex];
    const toVal = this.currentArray[toIndex];

    // Swap elements in currentArray
    const temp = this.currentArray[fromIndex];
    this.currentArray[fromIndex] = this.currentArray[toIndex];
    this.currentArray[toIndex] = temp;

    const arrayAfter = [...this.currentArray];
    this.moveCount++;
    this.swapCount++;

    const stepObj = {
      stepIndex: this.moveCount,
      fromIndex,
      toIndex,
      fromVal,
      toVal,
      arrayBefore,
      arrayAfter,
      timestamp: this.getFormattedTime()
    };

    this.historyStack.push(stepObj);
    return stepObj;
  }

  undoLastMove() {
    if (this.historyStack.length === 0) return null;

    const lastStep = this.historyStack.pop();
    this.currentArray = [...lastStep.arrayBefore];
    this.moveCount = Math.max(0, this.moveCount - 1);
    this.swapCount = Math.max(0, this.swapCount - 1);

    return lastStep;
  }

  resetGame() {
    this.currentArray = [...this.initialArray];
    this.historyStack = [];
    this.moveCount = 0;
    this.swapCount = 0;
    this.elapsedSeconds = 0;
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
      if (window.uiController) {
        window.uiController.updateHUDStats();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getFormattedTime() {
    const mins = Math.floor(this.elapsedSeconds / 60);
    const secs = this.elapsedSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}

window.gameState = new GameState();
