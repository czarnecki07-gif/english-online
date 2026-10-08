/* ============================================================
   STRONA GŁÓWNA – logika (z obsługą A0)
============================================================ */

document.addEventListener("DOMContentLoaded", function() {
  var state = { level: "all", type: "all", search: "" };
  var container = document.getElementById("lessonsContainer");
  var searchInput = document.getElementById("searchInput");

  function render() {
    var html = "";

    /* ============ BLOK A0 ============ */
    if (KURS.a0 && (state.type === "all" || state.type === "a0") &&
        (state.level === "all" || state.level === "A0")) {

      var lekcjeA0 = KURS.a0.lekcje;
      if (state.search) {
        var q0 = state.search.toLowerCase();
        lekcjeA0 = lekcjeA0.filter(function(l) {
          return l.id.toLowerCase().indexOf(q0) !== -1 || l.tytul.toLowerCase().indexOf(q0) !== -1;
        });
      }

      if (lekcjeA0.length) {
        html += '<div class="dzial">';
        html += '<div class="dzial-header">';
        html += '<div>';
        html += '<h3>A0 — dla początkujących</h3>';
        html += '<p class="dzial-opis">Kurs dla osób, które nigdy nie uczyły się angielskiego</p>';
        html += '</div>';
        html += '<span class="dzial-badge">Start</span>';
        html += '</div>';
        html += '<div class="lekcje-grid">';
        lekcjeA0.forEach(function(l) {
          html += '<a class="lekcja-card" href="lekcja.html?id=' + l.id + '">';
          html += '<span class="lekcja-level">A0</span>';
          html += '<span class="lekcja-id">' + l.id + '</span>';
          html += '<span class="lekcja-arrow">→</span>';
          html += '</a>';
        });
        html += '</div></div>';
      }
    }

    /* ============ BLOKI G i T ============ */
    var dzialy = KURS.getAllDzialy();

    dzialy.forEach(function(dzial) {
      if (state.type !== "all" && dzial.typ !== state.type) return;

      var lekcje = KURS.poziomy
        .filter(function(p) {
          if (state.level === "all") return p.id !== "A0";
          return p.id === state.level;
        })
        .map(function(p) {
          var id = dzial.id + p.id;
          return {
            id: id,
            poziom: p.id,
            tytul: dzial.tytul,
            ikona: dzial.ikona,
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