/* ============================================================
   STRAŻNIK — wspólny skrypt bramki dla plików nauczycielskich
   Wklej na początku <body>:  <script src="strażnik.js"></script>
============================================================ */
(function() {
  try {
    var dane = JSON.parse(localStorage.getItem("angielski_dostep") || "null");
    if (dane && dane.wazne && dane.wazne > Date.now()) {
      /* OK — użytkownik zalogowany, nic nie rób */
      return;
    }
  } catch (e) {}
  /* Brak ważnego biletu — przekieruj do bramki */
  window.location.replace("bramka.html");
})();

/* Funkcja sprawdzająca, czy użytkownik jest zalogowany (dla skryptów w pliku) */
function czyNauczyciel() {
  try {
    var dane = JSON.parse(localStorage.getItem("angielski_dostep") || "null");
    return !!(dane && dane.wazne && dane.wazne > Date.now());
  } catch (e) { return false; }
}