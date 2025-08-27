const copyKeyBtn = document.getElementById("copyKeyBtn");
const toast = document.getElementById("toast");

// Show toast message
function showToast(msg) {
  toast.textContent = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(20px)";
  }, 1800);
}

// Copy public key text
copyKeyBtn?.addEventListener("click", async () => {
  const keyText = document.getElementById("pubkey").innerText.trim();
  try {
    await navigator.clipboard.writeText(keyText);
    showToast("Public key copied!");
  } catch {
    showToast("Failed to copy key");
  }
});

