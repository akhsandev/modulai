/* ==========================================================================
   SORTING LAB — TACTILE DRAG & DROP ENGINE (js/drag-drop.js)
   Mouse Pointer & Multi-Touch Drag Engine with Smooth Spring Snap Swapping
   ========================================================================== */

class DragDropEngine {
  constructor() {
    this.containerCards = null;
    this.containerSlots = null;
    
    this.draggedCard = null;
    this.draggedIndex = -1;
    
    this.initialX = 0;
    this.initialY = 0;
    this.offsetX = 0;
    this.offsetY = 0;

    this.cardElements = [];
    this.slotElements = [];

    this.onMoveCallback = null;
  }

  init(cardsContainerId, slotsContainerId, onMoveCallback) {
    this.containerCards = document.getElementById(cardsContainerId);
    this.containerSlots = document.getElementById(slotsContainerId);
    this.onMoveCallback = onMoveCallback;

    if (!this.resizeAttached) {
      this.resizeAttached = true;
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (window.gameState.currentArray.length > 0) {
            this.renderArena();
          }
        }, 150);
      });
    }

    this.renderArena();
  }

  renderArena() {
    if (!this.containerCards) return;

    this.containerCards.innerHTML = '';
    this.cardElements = [];
    this.slotElements = [];

    const history = window.gameState.historyStack;
    const currentArr = window.gameState.currentArray;
    const initialArr = window.gameState.initialArray;
    const count = currentArr ? currentArr.length : 5;

    const workspace = document.querySelector('.arena-workspace');
    const availableWidth = workspace ? workspace.clientWidth - 48 : window.innerWidth * 0.85;

    const gap = count > 7 ? 10 : 16;
    const calcWidth = Math.floor((availableWidth - ((count + 1) * gap)) / count);
    const cardWidth = Math.max(46, Math.min(calcWidth, 85));
    const cardHeight = Math.max(64, Math.floor(cardWidth * 1.3));
    const fontSize = cardWidth < 52 ? '1.2rem' : (cardWidth < 68 ? '1.5rem' : '1.9rem');

    // 1. RENDER PAST COMPLETED STEP ROWS (WATERFALL HISTORY)
    if (history.length > 0) {
      // Row 0: Initial Array State
      const row0 = this.createPastStepRow('AWAL', initialArr, -1, -1, 'Data Awal Sebelum Sorting', gap);
      this.containerCards.appendChild(row0);

      // Rows 1 to N-1
      history.forEach((step) => {
        const row = this.createPastStepRow(
          `STEP ${step.stepIndex.toString().padStart(2, '0')}`,
          step.arrayAfter,
          step.fromIndex,
          step.toIndex,
          `Tukar: ${step.fromVal} ↔ ${step.toVal}`,
          gap
        );
        this.containerCards.appendChild(row);
      });
    }

    // 2. RENDER ACTIVE INTERACTIVE STEP ROW AT BOTTOM
    const activeRow = document.createElement('div');
    activeRow.className = 'step-row active-step';

    const stepLabelText = history.length === 0 
      ? 'LANGKAH AWAL (AKTIF)' 
      : `LANGKAH ${(history.length + 1).toString().padStart(2, '0')} (AKTIF)`;

    activeRow.innerHTML = `
      <div class="step-row-header">
        <span class="step-row-badge active">
          <i data-lucide="play-circle"></i> ${stepLabelText}
        </span>
        <span class="step-row-hint">Drag & drop angka pada baris ini untuk langkah berikutnya</span>
      </div>
      <div class="active-cards-wrapper">
        <div class="arena-slots-bg" style="gap: ${gap}px"></div>
        <div class="active-cards-container" style="gap: ${gap}px"></div>
      </div>
    `;

    const slotsBg = activeRow.querySelector('.arena-slots-bg');
    const cardsContainer = activeRow.querySelector('.active-cards-container');
    this.containerSlots = slotsBg;

    currentArr.forEach((val, idx) => {
      // 1. Create Target Slot Background
      const slot = document.createElement('div');
      slot.className = 'slot-target';
      slot.style.width = `${cardWidth}px`;
      slot.style.height = `${cardHeight}px`;
      slot.dataset.index = idx;
      slotsBg.appendChild(slot);
      this.slotElements.push(slot);

      // 2. Create Active Draggable Card
      const card = document.createElement('div');
      card.className = 'num-card';
      card.style.width = `${cardWidth}px`;
      card.style.height = `${cardHeight}px`;
      card.dataset.index = idx;
      card.dataset.value = val;

      card.innerHTML = `
        <div class="num-card-handle"></div>
        <div class="num-card-val" style="font-size: ${fontSize}">${val}</div>
        <div class="num-card-index">i: ${idx}</div>
      `;

      card.addEventListener('pointerdown', (e) => this.handlePointerDown(e, card, idx));

      cardsContainer.appendChild(card);
      this.cardElements.push(card);
    });

    this.containerCards.appendChild(activeRow);

    // Update Special Pointer Helpers for Quick / Merge Sort
    this.updateSubHelperIndicators();

    // Re-initialize Lucide Icons for dynamic row headers
    if (window.lucide) window.lucide.createIcons();

    // Smooth scroll workspace to bottom to focus on active step row
    if (workspace) {
      setTimeout(() => {
        workspace.scrollTo({ top: workspace.scrollHeight, behavior: 'smooth' });
      }, 60);
    }
  }

  createPastStepRow(label, arr, swappedIdx1, swappedIdx2, actionDesc, gap) {
    const row = document.createElement('div');
    row.className = 'step-row completed-step';

    const miniCardWidth = Math.max(38, Math.min(Math.floor(gap * 3.5), 52));
    const miniCardHeight = Math.floor(miniCardWidth * 1.15);

    row.innerHTML = `
      <div class="step-row-header">
        <span class="step-row-badge completed">${label}</span>
        <span class="step-row-desc">${actionDesc}</span>
      </div>
      <div class="past-cards-container" style="gap: ${gap}px">
        ${arr.map((val, i) => {
          const isSwapped = i === swappedIdx1 || i === swappedIdx2;
          return `
            <div class="mini-step-card ${isSwapped ? 'swapped-highlight' : ''}" style="width: ${miniCardWidth}px; height: ${miniCardHeight}px;">
              <span class="mini-card-val">${val}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    return row;
  }

  updateSubHelperIndicators() {
    const helperBar = document.getElementById('arena-sub-helper');
    const indicatorsContainer = document.getElementById('helper-indicators-container');
    const badgeText = document.getElementById('helper-badge-text');

    if (!helperBar || !indicatorsContainer) return;

    const algo = window.gameState.activeAlgorithm;
    if (algo === 'quick') {
      helperBar.classList.remove('hidden');
      badgeText.textContent = '⚡ QUICK SORT HELPER:';
      const arr = window.gameState.currentArray;
      const lastIdx = arr.length - 1;
      indicatorsContainer.innerHTML = `
        <span class="helper-tag pink">Pivot Candidate: Card <strong>${arr[lastIdx]}</strong> (Index ${lastIdx})</span>
      `;
    } else if (algo === 'merge') {
      helperBar.classList.remove('hidden');
      badgeText.textContent = '🔀 MERGE SORT HELPER:';
      const mid = Math.floor(window.gameState.currentArray.length / 2);
      indicatorsContainer.innerHTML = `
        <span class="helper-tag orange">Sub-group A: Index 0 to ${mid - 1}</span> | 
        <span class="helper-tag cyan">Sub-group B: Index ${mid} to ${window.gameState.currentArray.length - 1}</span>
      `;
    } else {
      helperBar.classList.add('hidden');
    }
  }

  handlePointerDown(e, card, index) {
    e.preventDefault();
    if (this.draggedCard) return;

    this.draggedCard = card;
    this.draggedIndex = index;

    card.setPointerCapture(e.pointerId);

    const rect = card.getBoundingClientRect();
    this.offsetX = e.clientX - rect.left;
    this.offsetY = e.clientY - rect.top;

    card.classList.add('is-dragging');
    window.soundEngine.playDragStart();

    const moveHandler = (evt) => this.handlePointerMove(evt);
    const upHandler = (evt) => this.handlePointerUp(evt, moveHandler, upHandler);

    card.addEventListener('pointermove', moveHandler);
    card.addEventListener('pointerup', upHandler);
    card.addEventListener('pointercancel', upHandler);
  }

  handlePointerMove(e) {
    if (!this.draggedCard) return;

    // Move card position relative to viewport
    const x = e.clientX - this.offsetX;
    const y = e.clientY - this.offsetY;

    this.draggedCard.style.position = 'fixed';
    this.draggedCard.style.left = `${x}px`;
    this.draggedCard.style.top = `${y}px`;

    // Detect hover over drop slot targets
    const targetIdx = this.findHoverTargetIndex(e.clientX, e.clientY);
    this.slotElements.forEach((slot, idx) => {
      if (idx === targetIdx && idx !== this.draggedIndex) {
        slot.classList.add('target-hover');
      } else {
        slot.classList.remove('target-hover');
      }
    });
  }

  handlePointerUp(e, moveHandler, upHandler) {
    if (!this.draggedCard) return;

    const card = this.draggedCard;
    const fromIndex = this.draggedIndex;
    const targetIndex = this.findHoverTargetIndex(e.clientX, e.clientY);

    card.releasePointerCapture(e.pointerId);
    card.removeEventListener('pointermove', moveHandler);
    card.removeEventListener('pointerup', upHandler);
    card.removeEventListener('pointercancel', upHandler);

    card.classList.remove('is-dragging');
    card.style.position = '';
    card.style.left = '';
    card.style.top = '';

    this.slotElements.forEach(slot => slot.classList.remove('target-hover'));

    this.draggedCard = null;
    this.draggedIndex = -1;

    if (targetIndex !== -1 && targetIndex !== fromIndex) {
      // Execute Swap Action
      const stepObj = window.gameState.recordMove(fromIndex, targetIndex);
      window.soundEngine.playSwap();

      // Trigger Snap Spring Animation on swap targets
      this.renderArena();

      // Trigger spring animation class on target cards
      if (this.cardElements[fromIndex]) this.cardElements[fromIndex].classList.add('snap-animation');
      if (this.cardElements[targetIndex]) this.cardElements[targetIndex].classList.add('snap-animation');

      if (this.onMoveCallback) this.onMoveCallback(stepObj);
    } else {
      // Returned to same slot
      window.soundEngine.playDropSnap();
      card.classList.add('snap-animation');
      setTimeout(() => card.classList.remove('snap-animation'), 400);
    }
  }

  findHoverTargetIndex(clientX, clientY) {
    for (let i = 0; i < this.slotElements.length; i++) {
      const rect = this.slotElements[i].getBoundingClientRect();
      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        return i;
      }
    }
    return -1;
  }
}

window.dragDropEngine = new DragDropEngine();
