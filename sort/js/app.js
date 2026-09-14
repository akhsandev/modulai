/* ==========================================================================
   SORTING LAB — BOOTSTRAP APP (js/app.js)
   Application initialization & window lifecycle handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI Controller
  window.uiController.init();

  // Attach button ripple effect handlers
  attachRippleEffects();

  // Listen to orientation change & window resize for portrait warning
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', checkOrientation);
  checkOrientation();

  // Console info banner for CS Teachers / Developers
  console.log(
    '%c SORTING LAB v2.6 %c CS Highschool Interactive Game UI Ready! ',
    'background:#8b5cf6; color:white; font-weight:bold; padding:4px 8px; border-radius:4px;',
    'background:#06b6d4; color:white; padding:4px 8px; border-radius:4px;'
  );
});

function attachRippleEffects() {
  document.querySelectorAll('.ripple-target').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;

      const rect = btn.getBoundingClientRect();
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');

      const ripple = btn.getElementsByClassName('ripple')[0];
      if (ripple) {
        ripple.remove();
      }

      btn.appendChild(circle);
    });
  });
}

function checkOrientation() {
  const portraitWarning = document.getElementById('portrait-warning');
  if (!portraitWarning) return;

  const isPortrait = window.innerHeight > window.innerWidth && window.innerWidth <= 768;
  if (isPortrait) {
    portraitWarning.classList.remove('hidden');
  } else {
    portraitWarning.classList.add('hidden');
  }
}
