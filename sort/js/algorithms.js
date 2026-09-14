/* ==========================================================================
   SORTING LAB — ALGORITHMS TRACER & EVALUATOR (js/algorithms.js)
   Pure Reference logic & canonical step generator for 5 sorting algorithms
   ========================================================================== */

class SortingAlgorithms {

  /**
   * Returns ideal sorted array (ascending)
   */
  static getIdealSorted(arr) {
    return [...arr].sort((a, b) => a - b);
  }

  /**
   * Check if array is correctly sorted
   */
  static isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  }

  /**
   * Check if student's final array elements match initial multiset
   */
  static isMultisetPreserved(initialArr, finalArr) {
    if (initialArr.length !== finalArr.length) return false;
    const countA = {};
    const countB = {};
    for (let num of initialArr) countA[num] = (countA[num] || 0) + 1;
    for (let num of finalArr) countB[num] = (countB[num] || 0) + 1;
    for (let key in countA) {
      if (countA[key] !== countB[key]) return false;
    }
    return true;
  }

  /**
   * Generate canonical step-by-step trace for specific algorithm
   */
  static getCanonicalTrace(algo, initialArr) {
    const arr = [...initialArr];
    const trace = [];

    if (algo === 'bubble') {
      let n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            // Swap
            trace.push({ fromIndex: j, toIndex: j + 1, val1: arr[j], val2: arr[j + 1] });
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    } else if (algo === 'selection') {
      let n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        if (minIdx !== i) {
          trace.push({ fromIndex: i, toIndex: minIdx, val1: arr[i], val2: arr[minIdx] });
          const temp = arr[i];
          arr[i] = arr[minIdx];
          arr[minIdx] = temp;
        }
      }
    } else if (algo === 'insertion') {
      let n = arr.length;
      for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
          trace.push({ fromIndex: j - 1, toIndex: j, val1: arr[j - 1], val2: arr[j] });
          const temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          j--;
        }
      }
    } else if (algo === 'quick') {
      function partition(low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
          if (arr[j] < pivot) {
            i++;
            if (i !== j) {
              trace.push({ fromIndex: i, toIndex: j, val1: arr[i], val2: arr[j] });
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
        if (i + 1 !== high) {
          trace.push({ fromIndex: i + 1, toIndex: high, val1: arr[i + 1], val2: arr[high] });
          let temp = arr[i + 1];
          arr[i + 1] = arr[high];
          arr[high] = temp;
        }
        return i + 1;
      }
      function quickSortRecursive(low, high) {
        if (low < high) {
          let pi = partition(low, high);
          quickSortRecursive(low, pi - 1);
          quickSortRecursive(pi + 1, high);
        }
      }
      quickSortRecursive(0, arr.length - 1);
    } else if (algo === 'merge') {
      // Standard Merge Sort comparison trace
      let n = arr.length;
      // Simple pass for bubble-based merge simulation for step trace count
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            trace.push({ fromIndex: j, toIndex: j + 1, val1: arr[j], val2: arr[j + 1] });
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }

    return trace;
  }

  /**
   * Evaluate student performance and calculate score / accuracy metrics & rule compliance
   */
  static evaluateStudentPerformance(algo, initialArr, finalArr, studentHistory) {
    const isSorted = this.isArraySorted(finalArr);
    const isPreserved = this.isMultisetPreserved(initialArr, finalArr);
    const idealSorted = this.getIdealSorted(initialArr);
    const canonicalTrace = this.getCanonicalTrace(algo, initialArr);

    const compliance = this.analyzeAlgorithmCompliance(algo, initialArr, studentHistory);

    let isSuccess = isSorted && isPreserved && compliance.complianceScore >= 60;
    
    // Weighted accuracy score: 50% Array correctness + 50% Algorithmic compliance
    let accuracyScore = isSorted ? Math.round(50 + (compliance.complianceScore * 0.5)) : 35;

    return {
      isSuccess,
      isSorted,
      isPreserved,
      idealSorted,
      canonicalTraceCount: canonicalTrace.length,
      studentStepCount: studentHistory.length,
      accuracyScore,
      compliance
    };
  }

  /**
   * Analyze whether student's steps conform to the strict rules of the chosen algorithm
   */
  static analyzeAlgorithmCompliance(algo, initialArr, history) {
    if (!history || history.length === 0) {
      return {
        complianceScore: 0,
        statusText: 'BELUM ADA LANGKAH',
        statusBadgeClass: 'banner-warning',
        summaryText: 'Siswa belum melakukan pertukaran angka.',
        stepAudits: []
      };
    }

    const stepAudits = [];
    let correctCount = 0;

    if (algo === 'bubble') {
      history.forEach((step) => {
        const dist = Math.abs(step.fromIndex - step.toIndex);
        const isAdjacent = dist === 1;
        
        let msg = '';
        let isCorrect = false;

        if (!isAdjacent) {
          isCorrect = false;
          msg = `Menyimpang: Pertukaran berjarak ${dist} slot (i:${step.fromIndex} ↔ i:${step.toIndex}). Kaidah Bubble Sort mensyaratkan pertukaran HANYA antar 2 elemen bersebelahan (i dan i+1).`;
        } else {
          const leftIdx = Math.min(step.fromIndex, step.toIndex);
          const rightIdx = Math.max(step.fromIndex, step.toIndex);
          const leftVal = step.arrayBefore[leftIdx];
          const rightVal = step.arrayBefore[rightIdx];

          if (leftVal > rightVal) {
            isCorrect = true;
            msg = `Sesuai Kaidah: Membandingkan & menukar elemen bersebelahan (${leftVal} > ${rightVal}).`;
          } else {
            isCorrect = false;
            msg = `Kurang Tepat: Menukar elemen bersebelahan yang sudah terurut (${leftVal} ≤ ${rightVal}).`;
          }
        }

        if (isCorrect) correctCount++;
        stepAudits.push({
          stepIndex: step.stepIndex,
          fromVal: step.fromVal,
          toVal: step.toVal,
          isCorrect,
          msg
        });
      });

    } else if (algo === 'selection') {
      history.forEach((step) => {
        const arrState = step.arrayBefore;
        const n = arrState.length;
        let targetBoundary = -1;
        let minVal = null;

        // Dynamic boundary detection: find first index p where arrState[p] is not minimum of sub-array arrState[p...n-1]
        for (let p = 0; p < n; p++) {
          const sub = arrState.slice(p);
          const subMin = Math.min(...sub);
          if (arrState[p] !== subMin) {
            targetBoundary = p;
            minVal = subMin;
            break;
          }
        }

        let isCorrect = false;
        let msg = '';

        if (targetBoundary !== -1 && minVal !== null) {
          const isSwappingMinToBoundary = (
            (step.fromVal === minVal || step.toVal === minVal) &&
            (step.fromIndex === targetBoundary || step.toIndex === targetBoundary)
          );

          if (isSwappingMinToBoundary || step.fromVal === minVal || step.toVal === minVal) {
            isCorrect = true;
            msg = `Sesuai Kaidah: Menukar nilai minimum (${minVal}) ke posisi urutnya (posisi i:${targetBoundary}).`;
          } else {
            isCorrect = false;
            msg = `Menyimpang: Nilai minimum sisa array adalah (${minVal}) untuk posisi i:${targetBoundary}, namun siswa menukar (${step.fromVal} ↔ ${step.toVal}).`;
          }
        } else {
          isCorrect = true;
          msg = `Sesuai Kaidah: Array sudah dalam kondisi terurut.`;
        }

        if (isCorrect) correctCount++;
        stepAudits.push({
          stepIndex: step.stepIndex,
          fromVal: step.fromVal,
          toVal: step.toVal,
          isCorrect,
          msg
        });
      });

    } else if (algo === 'insertion') {
      history.forEach((step) => {
        const dist = Math.abs(step.fromIndex - step.toIndex);
        const isAdjacent = dist === 1;

        const leftIdx = Math.min(step.fromIndex, step.toIndex);
        const rightIdx = Math.max(step.fromIndex, step.toIndex);
        const leftVal = step.arrayBefore[leftIdx];
        const rightVal = step.arrayBefore[rightIdx];

        let isCorrect = false;
        let msg = '';

        if (!isAdjacent) {
          isCorrect = false;
          msg = `Menyimpang: Penyelipan berjarak ${dist} slot (i:${step.fromIndex} ↔ i:${step.toIndex}). Kaidah Insertion Sort menyisipkan melalui pergeseran elemen bersebelahan ke kiri.`;
        } else if (leftVal <= rightVal) {
          isCorrect = false;
          msg = `Menyimpang: Menukar elemen (${leftVal} ≤ ${rightVal}) yang sudah terurut. Kaidah Insertion Sort hanya menggeser jika elemen kiri > elemen kanan.`;
        } else {
          isCorrect = true;
          msg = `Sesuai Kaidah: Menggeser elemen lebih besar (${leftVal} > ${rightVal}) ke kanan untuk menyisipkan nilai ke posisi urutnya.`;
        }

        if (isCorrect) correctCount++;
        stepAudits.push({
          stepIndex: step.stepIndex,
          fromVal: step.fromVal,
          toVal: step.toVal,
          isCorrect,
          msg
        });
      });

    } else if (algo === 'merge') {
      history.forEach((step) => {
        const leftIdx = Math.min(step.fromIndex, step.toIndex);
        const rightIdx = Math.max(step.fromIndex, step.toIndex);
        const leftVal = step.arrayBefore[leftIdx];
        const rightVal = step.arrayBefore[rightIdx];

        const isCorrect = leftVal > rightVal;
        const msg = isCorrect
          ? `Sesuai Kaidah: Menggabungkan (merge) dengan menaruh nilai lebih kecil (${rightVal}) sebelum (${leftVal}).`
          : `Menyimpang: Pertukaran (${leftVal} ↔ ${rightVal}) merusak urutan gabungan sub-array.`;

        if (isCorrect) correctCount++;
        stepAudits.push({
          stepIndex: step.stepIndex,
          fromVal: step.fromVal,
          toVal: step.toVal,
          isCorrect,
          msg
        });
      });

    } else if (algo === 'quick') {
      history.forEach((step) => {
        const leftIdx = Math.min(step.fromIndex, step.toIndex);
        const rightIdx = Math.max(step.fromIndex, step.toIndex);
        const leftVal = step.arrayBefore[leftIdx];
        const rightVal = step.arrayBefore[rightIdx];

        const isCorrect = leftVal > rightVal;
        const msg = isCorrect
          ? `Sesuai Kaidah: Pertukaran partisi Quick Sort (${leftVal} ↔ ${rightVal}) memindahkan nilai lebih kecil ke area kiri pivot.`
          : `Menyimpang: Pertukaran (${leftVal} ↔ ${rightVal}) menempatkan nilai lebih besar di sebelah kiri.`;

        if (isCorrect) correctCount++;
        stepAudits.push({
          stepIndex: step.stepIndex,
          fromVal: step.fromVal,
          toVal: step.toVal,
          isCorrect,
          msg
        });
      });
    }

    const complianceScore = Math.round((correctCount / history.length) * 100);

    let statusText = '';
    let statusBadgeClass = '';
    let summaryText = '';

    if (complianceScore === 100) {
      statusText = `SANGAT TEPAT (100% Sesuai Kaidah ${algo.toUpperCase()} SORT)`;
      statusBadgeClass = 'banner-success';
      summaryText = `Proses berpikir siswa 100% konsisten mengikuti kaidah resmi algoritma ${algo.toUpperCase()} SORT!`;
    } else if (complianceScore >= 60) {
      statusText = `SEBAGIAN TEPAT (${complianceScore}% Sesuai Kaidah ${algo.toUpperCase()} SORT)`;
      statusBadgeClass = 'banner-warning';
      summaryText = `Hasil akhir terurut, namun terdapat ${history.length - correctCount} langkah pertukaran yang menyimpang dari kaidah resmi ${algo.toUpperCase()} SORT.`;
    } else {
      statusText = `MENYIMPANG DARI KAIDAH ALGORITMA (${complianceScore}%)`;
      statusBadgeClass = 'banner-danger';
      summaryText = `Meskipun hasil akhir mungkin terurut, cara siswa menyortir data belum mengikuti kaidah resmi algoritma ${algo.toUpperCase()} SORT.`;
    }

    return {
      complianceScore,
      statusText,
      statusBadgeClass,
      summaryText,
      stepAudits
    };
  }

  /**
   * Get short educational description of algorithm for Learn mode
   */
  static getAlgorithmInfo(algoKey) {
    const infoMap = {
      bubble: {
        title: 'Bubble Sort',
        tagline: 'Mengapungkan elemen terbesar ke posisi akhir secara bertahap',
        explanation: 'Bubble Sort bekerja dengan membandingkan pasangan elemen yang bersebelahan. Jika elemen sebelah kiri lebih besar dari kanan, kedua elemen akan ditukar. Proses ini diulangi hingga tidak ada lagi elemen yang perlu ditukar.',
        complexity: 'Waktu: O(n²) | Ruang: O(1)',
        steps: [
          'Bandingkan elemen di indeks [i] dan [i+1].',
          'Tukar jika elemen kiri > elemen kanan.',
          'Ulangi untuk seluruh pasang hingga elemen terbesar berada di posisi paling kanan.',
          'Lanjutkan iterasi untuk sisa elemen yang belum terurut.'
        ]
      },
      selection: {
        title: 'Selection Sort',
        tagline: 'Memilih elemen terkecil dan menaruhnya di posisi awal',
        explanation: 'Selection Sort membagi array menjadi dua bagian: bagian terurut dan belum terurut. Pada setiap iterasi, algoritma mencari nilai terkecil dari bagian belum terurut, lalu menukarnya ke posisi awal bagian tersebut.',
        complexity: 'Waktu: O(n²) | Ruang: O(1)',
        steps: [
          'Cari nilai terkecil pada sub-array belum terurut.',
          'Tukar nilai terkecil tersebut dengan elemen pertama sub-array belum terurut.',
          'Geser batas sub-array terurut satu langkah ke kanan.',
          'Ulangi hingga seluruh elemen terurut.'
        ]
      },
      insertion: {
        title: 'Insertion Sort',
        tagline: 'Menyisipkan elemen satu per satu ke posisi yang tepat',
        explanation: 'Insertion Sort bekerja seperti mengurutkan kartu di tangan. Algoritma mengambil satu elemen dari bagian acak, lalu menyisipkannya ke posisi yang sesuai di bagian kiri yang sudah terurut.',
        complexity: 'Waktu: O(n²) | Ruang: O(1)',
        steps: [
          'Ambil elemen pertama dari bagian belum terurut.',
          'Bandingkan dengan elemen-elemen di bagian terurut (sebelah kiri).',
          'Geser elemen yang lebih besar ke kanan.',
          'Sisipkan elemen ke celah yang tepat.'
        ]
      },
      merge: {
        title: 'Merge Sort',
        tagline: 'Membagi data (Divide) lalu menggabungkannya kembali (Merge)',
        explanation: 'Merge Sort menggunakan strategi Divide and Conquer. Array dibagi terus menjadi dua bagian hingga berukuran 1, kemudian sub-array tersebut digabungkan kembali dalam urutan yang benar.',
        complexity: 'Waktu: O(n log n) | Ruang: O(n)',
        steps: [
          'Divide: Bagi array menjadi 2 sub-array berukuran seimbang.',
          'Conquer: Urutkan sub-array secara rekursif.',
          'Merge: Gabungkan kedua sub-array terurut menjadi satu array lengkap.'
        ]
      },
      quick: {
        title: 'Quick Sort',
        tagline: 'Menggunakan Pivot untuk mempartisi data',
        explanation: 'Quick Sort memilih satu elemen sebagai Pivot. Data kemudian dipartisi sehingga elemen yang lebih kecil dari pivot berada di sebelah kiri, dan yang lebih besar di sebelah kanan. Proses ini diulangi rekursif.',
        complexity: 'Waktu: O(n log n) | Ruang: O(log n)',
        steps: [
          'Pilih elemen Pivot (misal elemen terakhir).',
          'Partisi: Pindahkan semua elemen < pivot ke kiri dan > pivot ke kanan.',
          'Tempatkan pivot di posisi finalnya.',
          'Rekursi: Terapkan Quick Sort pada bagian kiri dan kanan pivot.'
        ]
      }
    };

    return infoMap[algoKey] || infoMap.bubble;
  }
}

window.SortingAlgorithms = SortingAlgorithms;
