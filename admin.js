/* ============================================================
   ADMIN.JS — tryb admina. Skrót: Ctrl+Shift+L. Hasło: admin
   Wersja uproszczona: klasa "admin" na <body>, CSS decyduje.
============================================================ */

var ADMIN_KLUCZ = "angielski_admin";
var ADMIN_WAZNOSC = 30 * 24 * 60 * 60 * 1000;
var ADMIN_HASLO = "admin";

function czyAdmin() {
  try {
    var d = JSON.parse(localStorage.getItem(ADMIN_KLUCZ) || "null");
    return !!(d && d.wazne && d.wazne > Date.now());
  } catch (e) { return false; }
}

function odswiezWidokAdmina() {
  if (czyAdmin()) document.body.classList.add("admin");
  else document.body.classList.remove("admin");
}

document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.shiftKey && (e.key === "L" || e.key === "l")) {
    e.preventDefault();
    if (czyAdmin()) {
      if (confirm("Tryb admina aktywny. Wylogować?")) {
        localStorage.removeItem(ADMIN_KLUCZ);
        odswiezWidokAdmina();
        alert("Wylogowano z trybu admina.");
      }
    } else {
      var h = prompt("Hasło administratora:");
      if (h === ADMIN_HASLO) {
        localStorage.setItem(ADMIN_KLUCZ, JSON.stringify({ wazne: Date.now() + ADMIN_WAZNOSC }));
        odswiezWidokAdmina();
        alert("Tryb admina aktywny.");
      } else if (h !== null) {
        alert("Błędne hasło.");
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", odswiezWidokAdmina);