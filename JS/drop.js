const DROP = {
  active: true, // change to false to test DROP CLOSED
  endTime: "2025-12-31T23:59:59"
};

// Apply body state
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add(DROP.active ? "drop-active" : "drop-closed");

  const timerEl = document.getElementById("drop-timer");
  if (!timerEl) return;

  if (!DROP.active) {
    timerEl.textContent = "DROP CLOSED";
    return;
  }

  const end = new Date(DROP.endTime).getTime();

  setInterval(() => {
    const now = Date.now();
    const diff = end - now;

    if (diff <= 0) {
      timerEl.textContent = "DROP CLOSED";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    timerEl.textContent = `Next Drop In: ${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
});
