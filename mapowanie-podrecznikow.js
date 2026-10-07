/* ============================================================
   MAPOWANIE PODRĘCZNIKÓW
   Nauczyciel wybiera podręcznik → widzi które nasze lekcje
   pasują do którego unitu.
============================================================ */

const MAPOWANIE_PODRECZNIKOW = {

  /* ========================================================
     English Class A1 (Pearson)
     ======================================================== */
  "english-class-a1": {
    nazwa: "English Class A1",
    wydawnictwo: "Pearson",
    poziom: "A1",
    units: {

      "INTRODUCTION": {
        tytul: "Wprowadzenie",
        nasze_lekcje: ["T1A1", "T2A1", "G1A1", "G4A1"],
        opis: "Poznajemy się, rodzina, podstawowe czasowniki (be, have got, can)"
      },

      "UNIT 1": {
        tytul: "My typical day",
        nasze_lekcje: ["T4A1", "G1A1", "G11A1", "T4A2"],
        opis: "Codzienna rutyna, Present Simple, przyimki czasu, czas wolny"
      },

      "UNIT 2": {
        tytul: "Crazy about sport",
        nasze_lekcje: ["T4A1", "T5A1", "G10A1", "T5A2"],
        opis: "Sport, jedzenie, there is/are, quantifiers, zamawianie jedzenia"
      },

      "UNIT 3": {
        tytul: "Clothes from around the world",
        nasze_lekcje: ["T15A1", "G1A2", "T1A2", "T9A1"],
        opis: "Ubrania, Present Continuous, wygląd, bezpieczeństwo online"
      },

      "UNIT 4": {
        tytul: "Houses and homes",
        nasze_lekcje: ["T3A1", "G12A1", "G11A1", "T16A1"],
        opis: "Dom, pomieszczenia, stopniowanie, przyimki miejsca, pytanie o drogę"
      },

      "UNIT 5": {
        tytul: "Arts, film and TV",
        nasze_lekcje: ["T16A1", "G2A1", "G4A2"],
        opis: "Sztuka, film, telewizja, Past Simple, could"
      },

      "UNIT 6": {
        tytul: "Technology and everyday items",
        nasze_lekcje: ["T9A1", "G2A1", "T9A2"],
        opis: "Technologia, Past Simple nieregularne, reklamacje, recenzje"
      },

      "UNIT 7": {
        tytul: "Life goals and jobs",
        nasze_lekcje: ["T7A1", "G3A1", "T7A2"],
        opis: "Zawody, plany, be going to, will, prezentacje"
      },

      "UNIT 8": {
        tytul: "Travel and tourism",
        nasze_lekcje: ["T16A1", "G1B1", "G16A1"],
        opis: "Podróże, Present Perfect, phrasal verbs, tag questions, pocztówka"
      }

    }
  },

  /* ========================================================
     ODWROTNA MAPA: nasza lekcja → podręczniki
     ======================================================== */
  nasza_lekcja_w_podrecznikach: {

    "G1A1": { "english-class-a1": ["INTRODUCTION", "UNIT 1"] },
    "G1A2": { "english-class-a1": ["UNIT 3"] },
    "G2A1": { "english-class-a1": ["UNIT 5", "UNIT 6"] },
    "G3A1": { "english-class-a1": ["UNIT 7"] },
    "G4A1": { "english-class-a1": ["INTRODUCTION"] },
    "G4A2": { "english-class-a1": ["UNIT 5"] },
    "G10A1": { "english-class-a1": ["UNIT 2"] },
    "G11A1": { "english-class-a1": ["UNIT 1", "UNIT 4"] },
    "G12A1": { "english-class-a1": ["UNIT 4"] },
    "G16A1": { "english-class-a1": ["UNIT 8"] },

    "T1A1": { "english-class-a1": ["INTRODUCTION"] },
    "T1A2": { "english-class-a1": ["UNIT 3"] },
    "T2A1": { "english-class-a1": ["INTRODUCTION"] },
    "T3A1": { "english-class-a1": ["UNIT 4"] },
    "T4A1": { "english-class-a1": ["UNIT 1", "UNIT 2"] },
    "T4A2": { "english-class-a1": ["UNIT 1"] },
    "T5A1": { "english-class-a1": ["UNIT 2"] },
    "T5A2": { "english-class-a1": ["UNIT 2"] },
    "T7A1": { "english-class-a1": ["UNIT 7"] },
    "T7A2": { "english-class-a1": ["UNIT 7"] },
    "T9A1": { "english-class-a1": ["UNIT 3", "UNIT 6"] },
    "T9A2": { "english-class-a1": ["UNIT 6"] },
    "T15A1": { "english-class-a1": ["UNIT 3"] },
    "T16A1": { "english-class-a1": ["UNIT 4", "UNIT 5", "UNIT 8"] }

  }

};

/* ============================================================
   FUNKCJE POMOCNICZE
============================================================ */
window.MAPOWANIE = {
  /* Zwraca listę naszych lekcji dla danego unitu podręcznika */
  lekcjeDlaUnitu: function(podrecznikId, unitId) {
    var p = MAPOWANIE_PODRECZNIKOW[podrecznikId];
    if (!p || !p.units[unitId]) return [];
    return p.units[unitId].nasze_lekcje;
  },

  /* Zwraca listę unitów podręcznika dla naszej lekcji */
  unityDlaLekcji: function(naszaLekcjaId) {
    var m = MAPOWANIE_PODRECZNIKOW.nasza_lekcja_w_podrecznikach[naszaLekcjaId];
    return m || {};
  },

  /* Lista wszystkich podręczników */
  wszystkiePodreczniki: function() {
    var out = [];
    for (var k in MAPOWANIE_PODRECZNIKOW) {
      if (MAPOWANIE_PODRECZNIKOW[k].nazwa) {
        out.push({ id: k, nazwa: MAPOWANIE_PODRECZNIKOW[k].nazwa, wydawnictwo: MAPOWANIE_PODRECZNIKOW[k].wydawnictwo });
      }
    }
    return out;
  }
};