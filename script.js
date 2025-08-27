// Robust theme toggle + copy + toast
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const copyBtn = document.getElementById('copyBtn');
  const publicKeyEl = document.getElementById('publicKey');
  const toast = document.getElementById('toast');
  const yearEl = document.getElementById('year');

  // Set year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Theme initialization ----
  const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
  let initial;
  if (saved === 'light' || saved === 'dark') {
    initial = saved;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    initial = 'light';
  } else {
    initial = 'dark';
  }
  html.setAttribute('data-theme', initial);
  updateThemeButton(themeToggle, initial);

  // Toggle action
  themeToggle?.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = cur === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeButton(themeToggle, next);
    showToast(`${next[0].toUpperCase() + next.slice(1)} mode`);
  });

  // Update toggle icon & aria
  function updateThemeButton(btn, theme) {
    if (!btn) return;
    btn.textContent = theme === 'light' ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  }

  // ---- Copy to clipboard ----
  copyBtn?.addEventListener('click', async () => {
    const text = publicKeyEl?.innerText.trim();
    if (!text) return showToast('No key found');

    try {
      await navigator.clipboard.writeText(text);
      // quick inline feedback: change button briefly
      const prev = copyBtn.innerHTML;
      copyBtn.innerHTML = '✅ Copied';
      showToast('Public key copied to clipboard');
      setTimeout(() => { copyBtn.innerHTML = prev; }, 1500);
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast('Copied (fallback)'); }
      catch { showToast('Copy failed'); }
      document.body.removeChild(ta);
    }
  });

  // ---- toast helper ----
  let toastTimer = null;
  function showToast(msg = '') {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
  }

  // If user clears localStorage and wants system changes live (optional):
  // keep listening for OS-level changes and respect saved pref:
  if (!saved && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      // only apply if user hasn't explicitly chosen a theme
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        updateThemeButton(themeToggle, newTheme);
      }
    });
  }
});

