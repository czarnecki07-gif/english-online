/* ============================================================
   STRONA GŁÓWNA – logika
============================================================ */

document.addEventListener("DOMContentLoaded", function() {
  var state = { level: "all", type: "all", search: "" };
  var container = document.getElementById("lessonsContainer");
  var searchInput = document.getElementById("searchInput");

  function render() {
    var dzialy = KURS.getAllDzialy();
    var html = "";

    dzialy.forEach(function(dzial) {
      if (state.type !== "all" && dzial.typ !== state.type) return;

      var lekcje = KURS.poziomy
        .filter(function(p) { return state.level === "all" || p.id === state.level; })
        .map(function(p) {
          var id = dzial.id + p.id;
          return {
            id: id,
            poziom: p.id,
            tytul: dzial.tytul,
            typ: dzial.typ,
            opis: dzial.opis
          };
        });

      if (state.search) {
        var q = state.search.toLowerCase();
        lekcje = lekcje.filter(function(l) {
          return l.id.toLowerCase().indexOf(q) !== -1
              || l.tytul.toLowerCase().indexOf(q) !== -1
              || l.opis.toLowerCase().indexOf(q) !== -1;
        });
      }

      if (!lekcje.length) return;

      html += '<div class="dzial">';
      html += '<div class="dzial-header">';
      html += '<div>';
      html += '<h3>' + dzial.id + ' – ' + dzial.tytul + '</h3>';
      html += '<p class="dzial-opis">' + dzial.opis + '</p>';
      html += '</div>';
      html += '<span class="dzial-badge">' + (dzial.typ === "gramatyka" ? "Gramatyka" : "Tematyka") + '</span>';
      html += '</div>';
      html += '<div class="lekcje-grid">';

      lekcje.forEach(function(l) {
        html += '<a class="lekcja-card" href="lekcja.html?id=' + l.id + '">';
        html += '<span class="lekcja-level">' + l.poziom + '</span>';
        html += '<span class="lekcja-id">' + l.id + '</span>';
        html += '<span class="lekcja-arrow">→</span>';
        html += '</a>';
      });

      html += '</div></div>';
    });

    if (!html) html = '<p class="no-results">Brak lekcji spełniających kryteria.</p>';
    container.innerHTML = html;
  }

  /* Filtry poziomów i typów */
  document.querySelectorAll(".chip").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var kind = btn.dataset.level ? "level" : "type";
      document.querySelectorAll('.chip[data-' + kind + ']').forEach(function(b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      state[kind] = btn.dataset[kind];
      render();
    });
  });

  /* Wyszukiwarka */
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      state.search = searchInput.value.trim();
      render();
    });
  }

  render();
});