/**
 * SIGNATURE PAD WITH DYNAMIC LUMINOUS TRAIL EFFECT
 * Designed for High-DPI touchscreens & desktop pen/mouse input.
 */

class PremiumSignaturePad {
  constructor(canvasElement, options = {}) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext("2d");

    // Opsi konfigurasi
    this.options = Object.assign({
      strokeColor: "#0f172a",       // Tinta resmi hitam pekat/midnight navy
      strokeWidth: 2.8,             // Ketebalan garis tanda tangan
      glowColor: "rgba(56, 189, 248, 0.8)", // Cyan / Electric Blue glow trail
      trailParticleCount: 4,        // Partikel per gerak kursor
      enableParticles: true,
      onBegin: null,
      onEnd: null,
      onChange: null
    }, options);

    // State Canvas & History
    this.isDrawing = false;
    this.points = [];
    this.history = [];
    this.particles = [];
    this.trailPoints = []; // Jejak cahaya sementara
    this.lastTime = performance.now();

    // Canvas terpisah untuk partikel & trail agar tidak merusak tinta permanen
    this.createOverlayCanvas();

    // Setup DPI & Event Listeners
    this.resize();
    this.bindEvents();

    // Loop animasi partikel trail
    this.animating = true;
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  createOverlayCanvas() {
    this.overlayCanvas = document.createElement("canvas");
    this.overlayCanvas.className = "signature-trail-overlay";
    this.overlayCanvas.style.position = "absolute";
    this.overlayCanvas.style.top = "0";
    this.overlayCanvas.style.left = "0";
    this.overlayCanvas.style.width = "100%";
    this.overlayCanvas.style.height = "100%";
    this.overlayCanvas.style.pointerEvents = "none";
    this.overlayCtx = this.overlayCanvas.getContext("2d");

    const parent = this.canvas.parentElement;
    if (parent) {
      if (getComputedStyle(parent).position === "static") {
        parent.style.position = "relative";
      }
      parent.appendChild(this.overlayCanvas);
    }
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.dpr = dpr;

    // Simpan isi canvas sebelum di-resize jika sudah ada goresan
    let tempImage = null;
    if (this.canvas.width > 0 && this.canvas.height > 0 && !this.isEmpty()) {
      tempImage = this.toDataURL();
    }

    const w = rect.width || 400;
    const h = rect.height || 180;

    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.ctx.scale(dpr, dpr);

    if (this.overlayCanvas) {
      this.overlayCanvas.width = w * dpr;
      this.overlayCanvas.height = h * dpr;
      this.overlayCtx.scale(dpr, dpr);
    }

    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";

    // Pulihkan tanda tangan jika ada
    if (tempImage) {
      this.fromDataURL(tempImage);
    }
  }

  bindEvents() {
    const canvas = this.canvas;

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const pos = this.getCoordinates(e);
      this.points = [pos];
      this.saveSnapshot();

      // Tambahkan titik awal
      this.ctx.beginPath();
      this.ctx.arc(pos.x, pos.y, this.options.strokeWidth / 2, 0, Math.PI * 2);
      this.ctx.fillStyle = this.options.strokeColor;
      this.ctx.fill();

      this.spawnParticles(pos.x, pos.y, 6);
      if (this.options.onBegin) this.options.onBegin();
    };

    const moveDraw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = this.getCoordinates(e);
      this.points.push(pos);

      // Gambar kurva halus (Smooth Bezier Spline)
      this.drawSmoothCurve();

      // Spawn partikel trail keren
      this.spawnParticles(pos.x, pos.y, this.options.trailParticleCount);

      // Rekam jejak trail bercahaya
      this.trailPoints.push({
        x: pos.x,
        y: pos.y,
        life: 1.0,
        radius: Math.random() * 3 + 2
      });

      if (this.options.onChange) this.options.onChange();
    };

    const endDraw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      this.isDrawing = false;
      this.points = [];
      if (this.options.onEnd) this.options.onEnd();
      if (this.options.onChange) this.options.onChange();
    };

    // Pointer Events (Support Mouse, Touch, & Stylus Pen)
    canvas.addEventListener("pointerdown", startDraw);
    window.addEventListener("pointermove", moveDraw);
    window.addEventListener("pointerup", endDraw);
    window.addEventListener("pointercancel", endDraw);

    window.addEventListener("resize", () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(() => this.resize(), 150);
    });
  }

  getCoordinates(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      time: performance.now()
    };
  }

  drawSmoothCurve() {
    const points = this.points;
    if (points.length < 3) {
      if (points.length === 2) {
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        this.ctx.lineTo(points[1].x, points[1].y);
        this.ctx.strokeStyle = this.options.strokeColor;
        this.ctx.lineWidth = this.options.strokeWidth;
        this.ctx.stroke();
      }
      return;
    }

    const p0 = points[points.length - 3];
    const p1 = points[points.length - 2];
    const p2 = points[points.length - 1];

    const mid1 = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
    const mid2 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };

    this.ctx.beginPath();
    this.ctx.moveTo(mid1.x, mid1.y);
    this.ctx.quadraticCurveTo(p1.x, p1.y, mid2.x, mid2.y);
    this.ctx.strokeStyle = this.options.strokeColor;
    this.ctx.lineWidth = this.options.strokeWidth;
    this.ctx.stroke();
  }

  spawnParticles(x, y, count) {
    if (!this.options.enableParticles) return;
    const colors = [
      "rgba(37, 99, 235, ",   // Royal Sapphire
      "rgba(14, 165, 233, ",  // Electric Azure
      "rgba(217, 119, 6, ",   // Amber Gold
      "rgba(124, 58, 237, "   // Vibrant Violet
    ];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2.4 + 0.6;
      const baseColor = colors[Math.floor(Math.random() * colors.length)];

      this.particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.35,
        size: Math.random() * 3.8 + 1.8,
        life: 1.0,
        decay: Math.random() * 0.035 + 0.025,
        color: baseColor
      });
    }
  }

  animate(now) {
    const dt = (now - this.lastTime) / 1000;
    this.lastTime = now;

    if (this.overlayCtx && (this.particles.length > 0 || this.trailPoints.length > 0)) {
      const w = this.canvas.getBoundingClientRect().width;
      const h = this.canvas.getBoundingClientRect().height;
      this.overlayCtx.clearRect(0, 0, w, h);

      // 1. Gambar Glowing Trail Line
      if (this.trailPoints.length > 1) {
        this.overlayCtx.save();
        for (let i = 1; i < this.trailPoints.length; i++) {
          const ptA = this.trailPoints[i - 1];
          const ptB = this.trailPoints[i];
          const avgLife = (ptA.life + ptB.life) / 2;

          this.overlayCtx.beginPath();
          this.overlayCtx.moveTo(ptA.x, ptA.y);
          this.overlayCtx.lineTo(ptB.x, ptB.y);
          this.overlayCtx.strokeStyle = `rgba(37, 99, 235, ${avgLife * 0.75})`;
          this.overlayCtx.lineWidth = 4 + avgLife * 3;
          this.overlayCtx.shadowColor = "rgba(37, 99, 235, 0.7)";
          this.overlayCtx.shadowBlur = 6;
          this.overlayCtx.stroke();
        }
        this.overlayCtx.restore();

        // Update trail life
        for (let i = this.trailPoints.length - 1; i >= 0; i--) {
          this.trailPoints[i].life -= 0.05;
          if (this.trailPoints[i].life <= 0) {
            this.trailPoints.splice(i, 1);
          }
        }
      }

      // 2. Gambar Particle Sparks
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.overlayCtx.save();
        this.overlayCtx.beginPath();
        this.overlayCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        this.overlayCtx.fillStyle = `${p.color}${p.life * 0.85})`;
        this.overlayCtx.shadowColor = `${p.color}1)`;
        this.overlayCtx.shadowBlur = 6;
        this.overlayCtx.fill();
        this.overlayCtx.restore();
      }
    }

    if (this.animating) {
      requestAnimationFrame(this.animate);
    }
  }

  saveSnapshot() {
    if (this.history.length > 20) {
      this.history.shift();
    }
    this.history.push(this.toDataURL());
  }

  undo() {
    if (this.history.length === 0) {
      this.clear();
      return;
    }
    const previous = this.history.pop();
    this.fromDataURL(previous);
    if (this.options.onChange) this.options.onChange();
  }

  clear() {
    const rect = this.canvas.getBoundingClientRect();
    this.ctx.clearRect(0, 0, rect.width, rect.height);
    if (this.overlayCtx) {
      this.overlayCtx.clearRect(0, 0, rect.width, rect.height);
    }
    this.points = [];
    this.history = [];
    this.particles = [];
    this.trailPoints = [];
    if (this.options.onChange) this.options.onChange();
  }

  isEmpty() {
    // Memeriksa apakah canvas kosong dengan sampling pixel
    const rect = this.canvas.getBoundingClientRect();
    const w = Math.floor(rect.width * (this.dpr || 1));
    const h = Math.floor(rect.height * (this.dpr || 1));
    if (w <= 0 || h <= 0) return true;

    try {
      const imgData = this.ctx.getImageData(0, 0, w, h).data;
      for (let i = 3; i < imgData.length; i += 32) {
        if (imgData[i] > 10) {
          return false; // Ada tinta
        }
      }
    } catch (e) {
      // Cross-origin / permission fallback
      return this.points.length === 0 && this.history.length === 0;
    }
    return true;
  }

  toDataURL(type = "image/png", quality = 1.0) {
    return this.canvas.toDataURL(type, quality);
  }

  fromDataURL(dataUrl) {
    if (!dataUrl) {
      this.clear();
      return;
    }
    const img = new Image();
    img.onload = () => {
      const rect = this.canvas.getBoundingClientRect();
      this.ctx.clearRect(0, 0, rect.width, rect.height);
      this.ctx.drawImage(img, 0, 0, rect.width, rect.height);
    };
    img.src = dataUrl;
  }

  destroy() {
    this.animating = false;
    if (this.overlayCanvas && this.overlayCanvas.parentElement) {
      this.overlayCanvas.parentElement.removeChild(this.overlayCanvas);
    }
  }
}
