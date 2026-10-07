/* ============================================================
   KONFIGURACJA KURSU
============================================================ */

const KURS = {
  tytul: "Angielski online",
  wersja: "1.0",

  poziomy: [
    { id: "A1", nazwa: "A1", opis: "Podstawy" },
    { id: "A2", nazwa: "A2", opis: "Podstawy rozszerzone" },
    { id: "B1", nazwa: "B1", opis: "Średniozaawansowany" },
    { id: "B2", nazwa: "B2", opis: "Średniozaawansowany wyższy" },
    { id: "C1", nazwa: "C1", opis: "Zaawansowany" }
  ],

  gramatyka: {
    G1:  { tytul: "Present Tenses",              ikona: "⏰",  opis: "Czasy teraźniejsze: Present Simple, Continuous, Perfect" },
    G2:  { tytul: "Past Tenses",                 ikona: "📜",  opis: "Czasy przeszłe: Past Simple, Continuous, Perfect" },
    G3:  { tytul: "Future Forms",                ikona: "🚀",  opis: "Formy przyszłości: will, going to, Present Continuous" },
    G4:  { tytul: "Modal Verbs",                 ikona: "🔑",  opis: "Czasowniki modalne: can, must, should, may" },
    G5:  { tytul: "Conditionals",                ikona: "❓",  opis: "Okresy warunkowe 0, 1, 2, 3, mieszane" },
    G6:  { tytul: "Reported Speech",             ikona: "💬",  opis: "Mowa zależna: statements, questions, commands" },
    G7:  { tytul: "Passive Voice",               ikona: "🔄",  opis: "Strona bierna we wszystkich czasach" },
    G8:  { tytul: "Inversion & Emphasis",        ikona: "⚡",  opis: "Inwersja, emfaza, cleft sentences" },
    G9:  { tytul: "Articles a / an / the",       ikona: "📝",  opis: "Przedimki: a, an, the i ich brak" },
    G10: { tytul: "Quantifiers",                 ikona: "📊",  opis: "Określniki ilości: some, any, much, many" },
    G11: { tytul: "Prepositions",                ikona: "📍",  opis: "Przyimki czasu i miejsca oraz utrwalone zwroty" },
    G12: { tytul: "Comparatives & Superlatives", ikona: "⬆️", opis: "Stopniowanie przymiotników i przysłówków" },
    G13: { tytul: "Gerunds & Infinitives",       ikona: "🔗",  opis: "Bezokolicznik i forma -ing" },
    G14: { tytul: "Relative Clauses",            ikona: "🧩",  opis: "Zdania przydawkowe: who, which, that, whose" },
    G15: { tytul: "Question Formation",          ikona: "❔",  opis: "Tworzenie pytań: Yes/No, Wh-, question tags" },
    G16: { tytul: "Phrasal Verbs",               ikona: "🌀",  opis: "Czasowniki frazowe – najczęstsze i utrwalone" }
  },

  tematyka: {
    T1:  { tytul: "Człowiek, tożsamość",       ikona: "👤",     opis: "Wygląd, charakter, osobowość, tożsamość" },
    T2:  { tytul: "Rodzina, relacje",          ikona: "👨‍👩‍👧", opis: "Rodzina, związki, konflikty, wsparcie" },
    T3:  { tytul: "Dom i obowiązki domowe",    ikona: "🏠",     opis: "Mieszkanie, prace domowe, podział obowiązków" },
    T4:  { tytul: "Czas wolny, hobby",         ikona: "🎨",     opis: "Hobby, zainteresowania, czas wolny, wypoczynek" },
    T5:  { tytul: "Jedzenie",                  ikona: "🍎",     opis: "Jedzenie, restauracja, zdrowe odżywianie" },
    T6:  { tytul: "Szkoła, edukacja",          ikona: "🎓",     opis: "Szkoła, system edukacji, studia, nauka" },
    T7:  { tytul: "Praca, kariera",            ikona: "💼",     opis: "Zawody, praca, kariera, rozmowa kwalifikacyjna" },
    T8:  { tytul: "Natura, środowisko",        ikona: "🌳",     opis: "Natura, pogoda, ekologia, zmiany klimatu" },
    T9:  { tytul: "Technologia",               ikona: "💻",     opis: "Technologia, internet, AI, cyberbezpieczeństwo" },
    T10: { tytul: "Media",                     ikona: "📰",     opis: "Media, informacja, dezinformacja, krytyczne myślenie" },
    T11: { tytul: "Komunikacja w pracy",       ikona: "📧",     opis: "Email, telefony, spotkania, negocjacje" },
    T12: { tytul: "Prawa, obowiązki",          ikona: "⚖️",     opis: "Prawa człowieka, konsumenta, obowiązki obywatela" },
    T13: { tytul: "Przyszłość, AI",            ikona: "🤖",     opis: "Przyszłość, sztuczna inteligencja, technologie" },
    T14: { tytul: "Problemy, etyka",           ikona: "🤔",     opis: "Rozwiązywanie problemów, dylematy etyczne" },
    T15: { tytul: "Ubrania, moda",             ikona: "👕",     opis: "Ubrania, moda, zakupy, etyczna moda" },
    T16: { tytul: "Podróże",                   ikona: "✈️",     opis: "Podróże, wakacje, transport, turystyka" }
  },

  getDzial: function(lessonId) {
    const m = lessonId.match(/^([GT])(\d+)/);
    return m ? m[1] + m[2] : null;
  },

  getPoziom: function(lessonId) {
    const m = lessonId.match(/(A1|A2|B1|B2|C1)$/);
    return m ? m[1] : null;
  },

  getTyp: function(lessonId) {
    if (lessonId.startsWith("G")) return "gramatyka";
    if (lessonId.startsWith("T")) return "tematyka";
    return null;
  },

  getTytulDzialu: function(lessonId) {
    const dzial = this.getDzial(lessonId);
    if (!dzial) return "";
    if (dzial.startsWith("G") && this.gramatyka[dzial]) return this.gramatyka[dzial].tytul;
    if (dzial.startsWith("T") && this.tematyka[dzial]) return this.tematyka[dzial].tytul;
    return "";
  },

  getIkonaDzialu: function(lessonId) {
    const dzial = this.getDzial(lessonId);
    if (!dzial) return "📘";
    if (dzial.startsWith("G") && this.gramatyka[dzial]) return this.gramatyka[dzial].ikona;
    if (dzial.startsWith("T") && this.tematyka[dzial]) return this.tematyka[dzial].ikona;
    return "📘";
  },

  getAllLessonIds: function() {
    const ids = [];
    const poziomy = this.poziomy.map(p => p.id);
    Object.keys(this.gramatyka).forEach(d => poziomy.forEach(p => ids.push(d + p)));
    Object.keys(this.tematyka).forEach(d => poziomy.forEach(p => ids.push(d + p)));
    return ids;
  },

  getAllDzialy: function() {
    const out = [];
    Object.keys(this.gramatyka).forEach(k => out.push({ id: k, typ: "gramatyka", ...this.gramatyka[k] }));
    Object.keys(this.tematyka).forEach(k => out.push({ id: k, typ: "tematyka", ...this.tematyka[k] }));
    return out;
  },

  isValidLessonId: function(id) {
    return /^([GT])(\d+)(A1|A2|B1|B2|C1)$/.test(id);
  }
};

window.KURS = KURS;