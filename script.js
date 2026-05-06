function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar.classList.contains("open")) {
    closeMenu();
  } else {
    sidebar.classList.add("open");
    overlay.style.display = "block";
  }
}

function closeMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.remove("open");
  overlay.style.display = "none";
}

function goHome() {
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
