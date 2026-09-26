/**
 * Black Mirror Mode Theme Controller with localStorage persistence
 */
(function() {
  const STORAGE_KEY = 'blackMirrorMode';

  function isStoredActive() {
    try {
      const val = localStorage.getItem(STORAGE_KEY);
      return val === 'true' || val === 'enabled';
    } catch (e) {
      return false;
    }
  }

  function setStoredActive(isActive) {
    try {
      localStorage.setItem(STORAGE_KEY, isActive ? 'true' : 'false');
    } catch (e) {
      console.warn('Unable to persist black mirror mode in localStorage', e);
    }
  }

  function applyBlackMirrorMode(isActive) {
    const html = document.documentElement;
    const body = document.body;

    if (isActive) {
      if (html) html.classList.add('black-mirror-mode', 'black-mirror');
      if (body) body.classList.add('black-mirror-mode', 'black-mirror');
    } else {
      if (html) html.classList.remove('black-mirror-mode', 'black-mirror');
      if (body) body.classList.remove('black-mirror-mode', 'black-mirror');
    }

    const btn = document.getElementById('toggleBlackMirror');
    if (btn) {
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      if (isActive) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }

  function toggleBlackMirror() {
    const target = document.body || document.documentElement;
    const currentState = target.classList.contains('black-mirror-mode');
    const newState = !currentState;
    applyBlackMirrorMode(newState);
    setStoredActive(newState);
    return newState;
  }

  // Expose globally so onclick="toggleBlackMirror()" works
  window.toggleBlackMirror = toggleBlackMirror;
  window.applyBlackMirrorMode = applyBlackMirrorMode;

  // Immediate execution if script is run in head or before DOM ready to prevent flash
  if (isStoredActive()) {
    if (document.documentElement) {
      document.documentElement.classList.add('black-mirror-mode', 'black-mirror');
    }
  }

  // Ensure body and button are updated as soon as DOM is ready
  function onReady() {
    const active = isStoredActive();
    applyBlackMirrorMode(active);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
