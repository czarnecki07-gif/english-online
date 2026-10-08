/* ============================================================
   KURS A0 — dla całkowitych początkujących
   Działy A0-1 do A0-4 (pierwsza część)
============================================================ */

window.LESSON_DATA = window.LESSON_DATA || {};

/* ============================================================
   A0-1 — Alfabet i wymowa
============================================================ */
window.LESSON_DATA["A0-1"] = {
  tytul: "Alfabet i wymowa",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Alfabet angielski</h3>
    <p>Alfabet angielski ma <b>26 liter</b>. Posłuchaj, jak wymawiamy każdą z nich:</p>
    <table>
      <tr><th>Litera</th><th>Wymowa (po polsku)</th><th>Przykład</th></tr>
      <tr><td class="en">A a</td><td>ej</td><td class="en">apple 🍎</td></tr>
      <tr><td class="en">B b</td><td>bi</td><td class="en">banana 🍌</td></tr>
      <tr><td class="en">C c</td><td>si</td><td class="en">cat 🐱</td></tr>
      <tr><td class="en">D d</td><td>di</td><td class="en">dog 🐶</td></tr>
      <tr><td class="en">E e</td><td>i</td><td class="en">egg 🥚</td></tr>
      <tr><td class="en">F f</td><td>ef</td><td class="en">fish 🐟</td></tr>
      <tr><td class="en">G g</td><td>dżi</td><td class="en">girl 👧</td></tr>
      <tr><td class="en">H h</td><td>ejcz</td><td class="en">house 🏠</td></tr>
      <tr><td class="en">I i</td><td>aj</td><td class="en">ice 🧊</td></tr>
      <tr><td class="en">J j</td><td>dżej</td><td class="en">jump 🤸</td></tr>
      <tr><td class="en">K k</td><td>kej</td><td class="en">key 🔑</td></tr>
      <tr><td class="en">L l</td><td>el</td><td class="en">lion 🦁</td></tr>
      <tr><td class="en">M m</td><td>em</td><td class="en">milk 🥛</td></tr>
      <tr><td class="en">N n</td><td>en</td><td class="en">nose 👃</td></tr>
      <tr><td class="en">O o</td><td>oł</td><td class="en">orange 🍊</td></tr>
      <tr><td class="en">P p</td><td>pi</td><td class="en">pig 🐷</td></tr>
      <tr><td class="en">Q q</td><td>kju</td><td class="en">queen 👑</td></tr>
      <tr><td class="en">R r</td><td>ar</td><td class="en">rabbit 🐰</td></tr>
      <tr><td class="en">S s</td><td>es</td><td class="en">sun ☀️</td></tr>
      <tr><td class="en">T t</td><td>ti</td><td class="en">tree 🌳</td></tr>
      <tr><td class="en">U u</td><td>ju</td><td class="en">umbrella ☂️</td></tr>
      <tr><td class="en">V v</td><td>wi</td><td class="en">van 🚐</td></tr>
      <tr><td class="en">W w</td><td>dabl-ju</td><td class="en">water 💧</td></tr>
      <tr><td class="en">X x</td><td>eks</td><td class="en">box 📦</td></tr>
      <tr><td class="en">Y y</td><td>łaj</td><td class="en">yellow 💛</td></tr>
      <tr><td class="en">Z z</td><td>zed / zi</td><td class="en">zebra 🦓</td></tr>
    </table>

    <h3>Samogłoski i spółgłoski</h3>
    <p><b>Samogłoski</b> (5): <span class="en">a, e, i, o, u</span> — to one tworzą dźwięk.</p>
    <p><b>Spółgłoski</b> (21): cała reszta.</p>

    <h3>Jak przeliterować swoje imię?</h3>
    <p>Po angielsku pytamy: <span class="en">How do you spell your name?</span> (Jak przeliterujesz swoje imię?)</p>
    <p>Odpowiadamy literując: <span class="en">A-N-N-A</span> → „Anna".</p>
    <p>Przykład: <span class="en">— How do you spell your name?<br>— T-O-M. Tom.</span></p>

    <h3>Wielkie i małe litery</h3>
    <p>W angielskim:</p>
    <ul>
      <li>Imiona zawsze z <b>wielkiej litery</b>: <span class="en">Anna, Tom, London</span></li>
      <li>Pierwsze słowo zdania z <b>wielkiej litery</b>: <span class="en">I am a student.</span></li>
      <li>Zaimki „ja" (<span class="en">I</span>) zawsze z <b>wielkiej litery</b>.</li>
      <li>Reszta — z małej.</li>
    </ul>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>26 liter</b> — 5 samogłosek, 21 spółgłosek.<br>
      • Zawsze pisz <b>I</b> (ja) wielką literą.<br>
      • Imiona i nazwy miast — wielką literą.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wybierz poprawną wymowę" },
    { type: "gap", text: '<span class="en">Litera "A" wymawia się:</span>', answers: ["ej"] },
    { type: "gap", text: '<span class="en">Litera "E" wymawia się:</span>', answers: ["i"] },
    { type: "gap", text: '<span class="en">Litera "I" wymawia się:</span>', answers: ["aj"] },
    { type: "gap", text: '<span class="en">Litera "U" wymawia się:</span>', answers: ["ju"] },
    { type: "gap", text: '<span class="en">Litera "Y" wymawia się:</span>', answers: ["łaj", "waj"] },
    { type: "header", text: "B. Ile liter ma alfabet?" },
    { type: "gap", text: '<span class="en">Alfabet angielski ma ____ liter.</span>', answers: ["26", "dwadzieścia sześć"] },
    { type: "gap", text: '<span class="en">Ile samogłosek ma alfabet angielski?</span>', answers: ["5", "pięć"] },
    { type: "header", text: "C. Przeliteruj" },
    { type: "gap", text: '<span class="en">Jak przeliterujesz "cat"?</span>', answers: ["c-a-t", "c a t", "cat"] },
    { type: "gap", text: '<span class="en">Jak przeliterujesz "dog"?</span>', answers: ["d-o-g", "d o g", "dog"] },
    { type: "gap", text: '<span class="en">Jak przeliterujesz "Ann"?</span>', answers: ["a-n-n", "a n n", "ann"] },
    { type: "header", text: "D. Wielka czy mała litera?" },
    { type: "gap", text: '<span class="en">W zdaniu "i am a student" — które słowo powinno być wielką literą?</span>', answers: ["i", "ja"] },
    { type: "gap", text: '<span class="en">Napisz poprawne zdanie: "i am tom"</span>', answers: ["i am tom", "i am tom.", "i'm tom", "i'm tom."], wide: true },
    { type: "gap", text: '<span class="en">Napisz poprawne zdanie: "anna is my friend"</span>', answers: ["anna is my friend", "anna is my friend."], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">Jakie słowo po angielsku oznacza "ja"?</span>', answers: ["i"] },
    { type: "gap", text: '<span class="en">Czy zaimki "you", "he", "she" piszemy wielką literą w środku zdania? (tak / nie)</span>', answers: ["nie"] }
  ],
  test: [
    { q: "Ile liter ma alfabet angielski?", opcje: ["24", "25", "26", "27"], poprawna: 2, wyjasnienie: "Angielski alfabet ma 26 liter." },
    { q: "Która litera wymawia się jak „ej"?", opcje: ["E", "A", "I", "U"], poprawna: 1, wyjasnienie: "„A" = „ej". „E" = „i"." },
    { q: "Która litera wymawia się jak „i"?", opcje: ["A", "I", "E", "Y"], poprawna: 2, wyjasnienie: "„E" = „i" (jak w „egg")." },
    { q: "Ile samogłosek ma alfabet angielski?", opcje: ["3", "4", "5", "6"], poprawna: 2, wyjasnienie: "5 samogłosek: a, e, i, o, u." },
    { q: "Jak przeliterujesz „dog"?", opcje: ["d-o-g", "d-o-j", "d-a-g", "d-u-g"], poprawna: 0, wyjasnienie: "„dog" = d-o-g." },
    { q: "Które zdanie jest poprawne?", opcje: ["i am tom", "I am Tom", "i am Tom", "I Am Tom"], poprawna: 1, wyjasnienie: "„I" zawsze wielką literą; imiona też." }
  ]
};

/* ============================================================
   A0-2 — Liczby 0–20
============================================================ */
window.LESSON_DATA["A0-2"] = {
  tytul: "Liczby 0–20",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Liczby od 0 do 20</h3>
    <table>
      <tr><th>Liczba</th><th>Angielski</th><th>Wymowa (po polsku)</th></tr>
      <tr><td>0</td><td class="en">zero</td><td>zyroł</td></tr>
      <tr><td>1</td><td class="en">one</td><td>łan</td></tr>
      <tr><td>2</td><td class="en">two</td><td>tu</td></tr>
      <tr><td>3</td><td class="en">three</td><td>fri</td></tr>
      <tr><td>4</td><td class="en">four</td><td>for</td></tr>
      <tr><td>5</td><td class="en">five</td><td>fajw</td></tr>
      <tr><td>6</td><td class="en">six</td><td>syks</td></tr>
      <tr><td>7</td><td class="en">seven</td><td>sewen</td></tr>
      <tr><td>8</td><td class="en">eight</td><td>ejt</td></tr>
      <tr><td>9</td><td class="en">nine</td><td>najn</td></tr>
      <tr><td>10</td><td class="en">ten</td><td>ten</td></tr>
      <tr><td>11</td><td class="en">eleven</td><td>ilewen</td></tr>
      <tr><td>12</td><td class="en">twelve</td><td>tłelw</td></tr>
      <tr><td>13</td><td class="en">thirteen</td><td>frtin</td></tr>
      <tr><td>14</td><td class="en">fourteen</td><td>fortin</td></tr>
      <tr><td>15</td><td class="en">fifteen</td><td>fiftin</td></tr>
      <tr><td>16</td><td class="en">sixteen</td><td>sykstin</td></tr>
      <tr><td>17</td><td class="en">seventeen</td><td>sewentyn</td></tr>
      <tr><td>18</td><td class="en">eighteen</td><td>ejtin</td></tr>
      <tr><td>19</td><td class="en">nineteen</td><td>najntin</td></tr>
      <tr><td>20</td><td class="en">twenty</td><td>tłenty</td></tr>
    </table>

    <h3>Jak zapytać o wiek?</h3>
    <p><span class="en">How old are you?</span> — Ile masz lat?</p>
    <p>Odpowiedź: <span class="en">I am ten.</span> (Mam 10 lat.)</p>

    <h3>Jak zapytać o numer telefonu?</h3>
    <p><span class="en">What is your phone number?</span> — Jaki masz numer telefonu?</p>
    <p>Odpowiedź: <span class="en">My phone number is 5-0-1-2-3-4-5-6-7.</span></p>
    <p>Uwaga: <b>0</b> w numerze telefonu mówimy „oh" (oł), a nie „zero".</p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>13–19</b> kończą się na <b>-teen</b> (thirteen, fourteen…)<br>
      • <b>20, 30, 40…</b> kończą się na <b>-ty</b> (twenty, thirty…)<br>
      • <b>0</b> w numerze telefonu = <b>oh</b> (oł)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz liczby słowami" },
    { type: "gap", text: '<span class="en">5 = ________</span>', answers: ["five"] },
    { type: "gap", text: '<span class="en">8 = ________</span>', answers: ["eight"] },
    { type: "gap", text: '<span class="en">12 = ________</span>', answers: ["twelve"] },
    { type: "gap", text: '<span class="en">15 = ________</span>', answers: ["fifteen"] },
    { type: "gap", text: '<span class="en">20 = ________</span>', answers: ["twenty"] },
    { type: "header", text: "B. Ile to jest?" },
    { type: "gap", text: '<span class="en">three + four = ________</span>', answers: ["seven", "7"] },
    { type: "gap", text: '<span class="en">ten - five = ________</span>', answers: ["five", "5"] },
    { type: "gap", text: '<span class="en">six + two = ________</span>', answers: ["eight", "8"] },
    { type: "header", text: "C. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam 12 lat.</span>', answers: ["i am twelve", "i'm twelve", "i am twelve.", "i'm twelve."], wide: true },
    { type: "gap", text: '<span class="pl">Ile masz lat?</span>', answers: ["how old are you", "how old are you?"], wide: true },
    { type: "gap", text: '<span class="pl">Mam na imię Anna i mam 10 lat.</span>', answers: ["my name is anna and i am ten", "my name is anna and i'm ten", "my name is anna and i am ten."], wide: true },
    { type: "header", text: "D. Popraw" },
    { type: "gap", text: '<span class="en">Napisz słownie 3:</span>', answers: ["three"] },
    { type: "gap", text: '<span class="en">Napisz słownie 0:</span>', answers: ["zero", "oh"] },
    { type: "gap", text: '<span class="en">Jak wymawiamy 0 w numerze telefonu?</span>', answers: ["oh", "oł"] }
  ],
  test: [
    { q: "Co znaczy „seven"?", opcje: ["6", "7", "8", "9"], poprawna: 1, wyjasnienie: "„Seven" = 7." },
    { q: "Jak napisać „12"?", opcje: ["twelve", "twenteen", "twenty", "two"], poprawna: 0, wyjasnienie: "12 = twelve." },
    { q: "Co znaczy „How old are you"?", opcje: ["Jak masz na imię?", "Ile masz lat?", "Skąd jesteś?", "Gdzie mieszkasz?"], poprawna: 1, wyjasnienie: "„How old are you?" = Ile masz lat?" },
    { q: "Które słowo to „20"?", opcje: ["twelve", "twenty", "teen", "ten"], poprawna: 1, wyjasnienie: "20 = twenty." },
    { q: "Jak wymawiamy „0" w numerze telefonu?", opcje: ["zero", "oh", "null", "none"], poprawna: 1, wyjasnienie: "0 w numerze = „oh"." },
    { q: "Co znaczy „fifteen"?", opcje: ["5", "15", "50", "55"], poprawna: 1, wyjasnienie: "„Fifteen" = 15." }
  ]
};

/* ============================================================
   A0-3 — Powitania i pożegnania
============================================================ */
window.LESSON_DATA["A0-3"] = {
  tytul: "Powitania i pożegnania",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Powitania — kiedy się wita</h3>
    <table>
      <tr><th>Angielski</th><th>Kiedy</th><th>Polski</th></tr>
      <tr><td class="en">Hello 👋</td><td>zawsze</td><td>Cześć / Witaj</td></tr>
      <tr><td class="en">Hi 👋</td><td>potocznie</td><td>Cześć</td></tr>
      <tr><td class="en">Good morning 🌅</td><td>do 12:00</td><td>Dzień dobry (rano)</td></tr>
      <tr><td class="en">Good afternoon ☀️</td><td>12:00–18:00</td><td>Dzień dobry (po południu)</td></tr>
      <tr><td class="en">Good evening 🌆</td><td>po 18:00</td><td>Dobry wieczór</td></tr>
    </table>

    <h3>Pożegnania</h3>
    <table>
      <tr><td class="en">Goodbye 👋</td><td>Do widzenia</td></tr>
      <tr><td class="en">Bye 👋</td><td>Pa / Cześć (na pożegnanie)</td></tr>
      <tr><td class="en">See you later</td><td>Do zobaczenia później</td></tr>
      <tr><td class="en">See you tomorrow</td><td>Do zobaczenia jutro</td></tr>
      <tr><td class="en">Good night 🌙</td><td>Dobranoc</td></tr>
    </table>

    <h3>Jak zapytać, jak się ktoś ma?</h3>
    <table>
      <tr><td class="en">How are you?</td><td>Jak się masz?</td></tr>
      <tr><td class="en">How are you today?</td><td>Jak się dzisiaj masz?</td></tr>
    </table>

    <h3>Jak odpowiedzieć?</h3>
    <table>
      <tr><td class="en">I'm fine, thank you.</td><td>Mam się dobrze, dziękuję. 🙂</td></tr>
      <tr><td class="en">I'm OK.</td><td>Jest OK.</td></tr>
      <tr><td class="en">Not bad.</td><td>Nieźle.</td></tr>
      <tr><td class="en">Very well, thank you.</td><td>Bardzo dobrze, dziękuję.</td></tr>
    </table>

    <h3>Uprzejme słowa</h3>
    <table>
      <tr><td class="en">Please</td><td>Proszę</td></tr>
      <tr><td class="en">Thank you / Thanks</td><td>Dziękuję</td></tr>
      <tr><td class="en">You're welcome</td><td>Nie ma za co</td></tr>
      <tr><td class="en">Sorry</td><td>Przepraszam</td></tr>
      <tr><td class="en">Excuse me</td><td>Przepraszam (żeby zwrócić uwagę)</td></tr>
    </table>

    <h3>Przykładowy dialog</h3>
    <p class="en">
      — Good morning, Anna! 👋<br>
      — Good morning, Tom! How are you?<br>
      — I'm fine, thank you. And you?<br>
      — Very well, thanks.<br>
      — See you later!<br>
      — Bye!
    </p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>Good morning</b> = rano (do 12:00)<br>
      • <b>Good afternoon</b> = po południu<br>
      • <b>Good evening</b> = wieczorem (powitanie)<br>
      • <b>Good night</b> = dobranoc (pożegnanie przed snem)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Jak powiesz po angielsku?" },
    { type: "gap", text: '<span class="pl">Cześć (potocznie):</span>', answers: ["hi"] },
    { type: "gap", text: '<span class="pl">Dzień dobry (rano):</span>', answers: ["good morning"] },
    { type: "gap", text: '<span class="pl">Dobry wieczór:</span>', answers: ["good evening"] },
    { type: "gap", text: '<span class="pl">Do widzenia:</span>', answers: ["goodbye", "bye"] },
    { type: "gap", text: '<span class="pl">Do zobaczenia później:</span>', answers: ["see you later"] },
    { type: "header", text: "B. Uzupełnij dialog" },
    { type: "gap", text: '<span class="en">— Hello! How are ________?<br>— I\'m fine, thank you.</span>', answers: ["you"] },
    { type: "gap", text: '<span class="en">— Good ________, Anna! (rano)<br>— Good morning!</span>', answers: ["morning"] },
    { type: "gap", text: '<span class="en">— Thank you very much!<br>— You\'re ________.</span>', answers: ["welcome"] },
    { type: "gap", text: '<span class="en">— ________ night! (przed snem)<br>— Good night!</span>', answers: ["good"] },
    { type: "header", text: "C. Uprzejme słowa" },
    { type: "gap", text: '<span class="pl">Proszę (gdy o coś prosimy):</span>', answers: ["please"] },
    { type: "gap", text: '<span class="pl">Dziękuję:</span>', answers: ["thank you", "thanks"] },
    { type: "gap", text: '<span class="pl">Przepraszam (za coś):</span>', answers: ["sorry"] },
    { type: "gap", text: '<span class="pl">Nie ma za co:</span>', answers: ["you're welcome", "you are welcome"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Dzień dobry, jak się masz?</span>', answers: ["good morning how are you", "good morning, how are you", "good morning how are you?", "good morning, how are you?"], wide: true },
    { type: "gap", text: '<span class="pl">Mam się dobrze, dziękuję.</span>', answers: ["i am fine thank you", "i'm fine thank you", "i am fine, thank you", "i'm fine, thank you"], wide: true },
    { type: "gap", text: '<span class="pl">Do zobaczenia jutro!</span>', answers: ["see you tomorrow", "see you tomorrow!"], wide: true }
  ],
  test: [
    { q: "Co znaczy „Good morning"?", opcje: ["Dobry wieczór", "Dzień dobry (rano)", "Dobranoc", "Cześć"], poprawna: 1, wyjasnienie: "„Good morning" = dzień dobry rano." },
    { q: "Jak powiesz „Dobranoc"?", opcje: ["Good evening", "Good morning", "Good night", "Bye"], poprawna: 2, wyjasnienie: "„Good night" = dobranoc (przed snem)." },
    { q: "Co znaczy „How are you"?", opcje: ["Kim jesteś?", "Ile masz lat?", "Jak się masz?", "Skąd jesteś?"], poprawna: 2, wyjasnienie: "„How are you?" = Jak się masz?" },
    { q: "Jak odpowiedzieć na „Thank you"?", opcje: ["Sorry", "Please", "You're welcome", "Good night"], poprawna: 2, wyjasnienie: "„You're welcome" = Nie ma za co." },
    { q: "Co znaczy „See you later"?", opcje: ["Do zobaczenia później", "Do widzenia", "Dobranoc", "Dzień dobry"], poprawna: 0, wyjasnienie: "„See you later" = Do zobaczenia później." },
    { q: "Które powitanie używamy po 18:00?", opcje: ["Good morning", "Good afternoon", "Good evening", "Good night"], poprawna: 2, wyjasnienie: "„Good evening" = dobry wieczór." }
  ]
};

/* ============================================================
   A0-4 — Przedstawianie się
============================================================ */
window.LESSON_DATA["A0-4"] = {
  tytul: "Przedstawianie się",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Jak się przedstawić?</h3>
    <p>Podstawowe zwroty:</p>
    <table>
      <tr><td class="en">My name is Anna.</td><td>Mam na imię Anna.</td></tr>
      <tr><td class="en">I am Anna.</td><td>Jestem Anna.</td></tr>
      <tr><td class="en">I'm Anna.</td><td>Jestem Anna. (skrót)</td></tr>
      <tr><td class="en">Nice to meet you.</td><td>Miło mi Cię poznać.</td></tr>
    </table>

    <h3>Jak zapytać kogoś o imię?</h3>
    <table>
      <tr><td class="en">What is your name?</td><td>Jak masz na imię?</td></tr>
      <tr><td class="en">What's your name?</td><td>Jak masz na imię? (skrót)</td></tr>
    </table>

    <h3>Skąd jesteś?</h3>
    <table>
      <tr><td class="en">Where are you from?</td><td>Skąd jesteś?</td></tr>
      <tr><td class="en">I am from Poland.</td><td>Jestem z Polski.</td></tr>
      <tr><td class="en">I'm from Warsaw.</td><td>Jestem z Warszawy.</td></tr>
    </table>

    <h3>Gdzie mieszkasz?</h3>
    <table>
      <tr><td class="en">Where do you live?</td><td>Gdzie mieszkasz?</td></tr>
      <tr><td class="en">I live in Kraków.</td><td>Mieszkam w Krakowie.</td></tr>
    </table>

    <h3>Jak masz na nazwisko?</h3>
    <table>
      <tr><td class="en">What is your surname?</td><td>Jak masz na nazwisko?</td></tr>
      <tr><td class="en">My surname is Kowalski.</td><td>Moje nazwisko to Kowalski.</td></tr>
    </table>

    <h3>Ile masz lat?</h3>
    <table>
      <tr><td class="en">How old are you?</td><td>Ile masz lat?</td></tr>
      <tr><td class="en">I am 12 (years old).</td><td>Mam 12 lat.</td></tr>
    </table>

    <h3>Przykładowa rozmowa</h3>
    <p class="en">
      — Hello! What's your name?<br>
      — Hi! My name is Anna. And you?<br>
      — I'm Tom. Nice to meet you.<br>
      — Nice to meet you too. Where are you from?<br>
      — I'm from Poland. I live in Warsaw. And you?<br>
      — I'm from Spain. I live in Madrid.
    </p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>I am = I'm</b> — skrót (mówimy „ajm")<br>
      • <b>My name is = My name's</b> — skrót<br>
      • <b>What is = What's</b> — skrót<br>
      • „Nice to meet you" — mówimy gdy kogoś POZNAJEMY (nie gdy się żegnamy!)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij" },
    { type: "gap", text: '<span class="en">— What is your ________?<br>— My name is Anna.</span>', answers: ["name"] },
    { type: "gap", text: '<span class="en">— Where are you ________?<br>— I\'m from Poland.</span>', answers: ["from"] },
    { type: "gap", text: '<span class="en">— Where do you ________?<br>— I live in Kraków.</span>', answers: ["live"] },
    { type: "gap", text: '<span class="en">— How ________ are you?<br>— I\'m twelve.</span>', answers: ["old"] },
    { type: "gap", text: '<span class="en">— Nice to ________ you!<br>— Nice to meet you too.</span>', answers: ["meet"] },
    { type: "gap", text: '<span class="en">— What is your ________?<br>— My surname is Kowalski.</span>', answers: ["surname"] },
    { type: "header", text: "B. Skróty" },
    { type: "gap", text: '<span class="en">I am = ________</span>', answers: ["i'm"] },
    { type: "gap", text: '<span class="en">What is = ________</span>', answers: ["what's"] },
    { type: "gap", text: '<span class="en">My name is = ________</span>', answers: ["my name's"] },
    { type: "gap", text: '<span class="en">You are = ________</span>', answers: ["you're"] },
    { type: "header", text: "C. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam na imię Anna.</span>', answers: ["my name is anna", "my name's anna", "i am anna", "i'm anna"], wide: true },
    { type: "gap", text: '<span class="pl">Miło mi Cię poznać.</span>', answers: ["nice to meet you", "nice to meet you."], wide: true },
    { type: "gap", text: '<span class="pl">Skąd jesteś?</span>', answers: ["where are you from", "where are you from?"], wide: true },
    { type: "gap", text: '<span class="pl">Jestem z Polski. Mieszkam w Warszawie.</span>', answers: ["i am from poland i live in warsaw", "i'm from poland i live in warsaw", "i am from poland, i live in warsaw"], wide: true },
    { type: "gap", text: '<span class="pl">Jak masz na imię?</span>', answers: ["what is your name", "what's your name", "what is your name?", "what's your name?"], wide: true },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">"my name is Tom" → (poprawnie)</span>', answers: ["my name is tom", "my name is tom.", "my name's tom", "my name's tom."], wide: true },
    { type: "gap", text: '<span class="en">"i am from poland" → (poprawnie)</span>', answers: ["i am from poland", "i'm from poland", "i am from poland.", "i'm from poland."], wide: true },
    { type: "gap", text: '<span class="en">"where you from?" → (poprawnie)</span>', answers: ["where are you from", "where are you from?"], wide: true }
  ],
  test: [
    { q: "Jak powiesz „Mam na imię Anna"?", opcje: ["I have Anna", "My name is Anna", "I am name Anna", "Name my Anna"], poprawna: 1, wyjasnienie: "„My name is Anna" lub „I am Anna"." },
    { q: "Co znaczy „Where are you from"?", opcje: ["Kim jesteś?", "Skąd jesteś?", "Gdzie mieszkasz?", "Jak się masz?"], poprawna: 1, wyjasnienie: "„Where are you from?" = Skąd jesteś?" },
    { q: "Jak zapytać o nazwisko?", opcje: ["What is your name?", "What is your surname?", "How old are you?", "Where do you live?"], poprawna: 1, wyjasnienie: "„Surname" = nazwisko." },
    { q: "Skrót od „I am" to:", opcje: ["Im", "I'm", "Im'", "I-am"], poprawna: 1, wyjasnienie: "„I am" = „I'm" (z apostrofem)." },
    { q: "Co znaczy „Nice to meet you"?", opcje: ["Do zobaczenia", "Miło mi Cię poznać", "Jak się masz?", "Skąd jesteś?"], poprawna: 1, wyjasnienie: "„Nice to meet you" = Miło mi Cię poznać." },
    { q: "Jak zapytać „Gdzie mieszkasz"?", opcje: ["Where are you from?", "Where do you live?", "How old are you?", "What is your name?"], poprawna: 1, wyjasnienie: "„Where do you live?" = Gdzie mieszkasz?" }
  ]
};


/* ============================================================
   A0-9 — Ubrania
============================================================ */
window.LESSON_DATA["A0-9"] = {
  tytul: "Ubrania",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Podstawowe ubrania</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">T-shirt 👕</td><td>koszulka</td></tr>
      <tr><td class="en">shirt 👔</td><td>koszula</td></tr>
      <tr><td class="en">trousers 👖</td><td>spodnie (brytyjski)</td></tr>
      <tr><td class="en">pants 👖</td><td>spodnie (amerykański)</td></tr>
      <tr><td class="en">jeans 👖</td><td>dżinsy</td></tr>
      <tr><td class="en">skirt 👗</td><td>spódnica</td></tr>
      <tr><td class="en">dress 👗</td><td>sukienka</td></tr>
      <tr><td class="en">jacket 🧥</td><td>kurtka</td></tr>
      <tr><td class="en">coat 🧥</td><td>płaszcz</td></tr>
      <tr><td class="en">sweater 🧶</td><td>sweter</td></tr>
      <tr><td class="en">shoes 👟</td><td>buty</td></tr>
      <tr><td class="en">socks 🧦</td><td>skarpetki</td></tr>
      <tr><td class="en">hat 🧢</td><td>czapka</td></tr>
      <tr><td class="en">cap 🧢</td><td>bejsbolówka</td></tr>
      <tr><td class="en">gloves 🧤</td><td>rękawiczki</td></tr>
      <tr><td class="en">scarf 🧣</td><td>szalik</td></tr>
    </table>

    <h3>Uwaga: „trousers" są zawsze w liczbie mnogiej</h3>
    <p>Po angielsku mówimy: <span class="en">These trousers are blue.</span> (Te spodnie są niebieskie.) — <b>are</b>, nie <b>is</b>. Tak samo: <span class="en">jeans, socks, shoes, glasses</span>.</p>

    <h3>Co masz na sobie?</h3>
    <p><span class="en">What are you wearing?</span> — Co masz na sobie?</p>
    <p>Odpowiedź: <span class="en">I am wearing a blue T-shirt and black jeans.</span> — Mam na sobie niebieską koszulkę i czarne dżinsy.</p>

    <h3>„I have got" i „I'm wearing"</h3>
    <table>
      <tr><td class="en">I have got a red hat.</td><td>Mam czerwoną czapkę.</td></tr>
      <tr><td class="en">I'm wearing a red hat.</td><td>Mam czerwoną czapkę na sobie.</td></tr>
    </table>

    <h3>Przymiotniki przed rzeczownikiem</h3>
    <p>Po angielsku kolor idzie <b>przed</b> rzeczownikiem:</p>
    <table>
      <tr><td class="en">a blue T-shirt ✓</td><td>niebieska koszulka</td></tr>
      <tr><td class="en">a T-shirt blue ✗</td><td>(błąd)</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>trousers / jeans / shoes / socks</b> — zawsze liczba mnoga: <span class="en">are</span>, nie <span class="en">is</span>.<br>
      • Kolor zawsze <b>przed</b> rzeczownikiem: <span class="en">a red hat</span>.<br>
      • „Mam na sobie" = <b>I am wearing</b>.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz po angielsku" },
    { type: "gap", text: '<span class="pl">koszulka:</span>', answers: ["t-shirt", "tshirt", "t shirt", "shirt"] },
    { type: "gap", text: '<span class="pl">spodnie:</span>', answers: ["trousers", "pants", "jeans"] },
    { type: "gap", text: '<span class="pl">buty:</span>', answers: ["shoes"] },
    { type: "gap", text: '<span class="pl">skarpetki:</span>', answers: ["socks"] },
    { type: "gap", text: '<span class="pl">kurtka:</span>', answers: ["jacket"] },
    { type: "gap", text: '<span class="pl">czapka:</span>', answers: ["hat", "cap"] },
    { type: "gap", text: '<span class="pl">szalik:</span>', answers: ["scarf"] },
    { type: "header", text: "B. Uzupełnij" },
    { type: "gap", text: '<span class="en">I am ________ a blue T-shirt. (mam na sobie)</span>', answers: ["wearing"] },
    { type: "gap", text: '<span class="en">My trousers ________ black. (są)</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">These jeans ________ blue. (są)</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">I have ________ a red hat. (mam)</span>', answers: ["got"] },
    { type: "header", text: "C. Kolejność słów" },
    { type: "gap", text: '<span class="en">"a T-shirt blue" → (poprawnie)</span>', answers: ["a blue t-shirt", "a blue t-shirt."], wide: true },
    { type: "gap", text: '<span class="en">"a red jacket" — przetłumacz:</span>', answers: ["czerwona kurtka", "czerwona kurtka."], wide: true },
    { type: "gap", text: '<span class="en">"black shoes" — przetłumacz:</span>', answers: ["czarne buty", "czarne buty."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam na sobie niebieską koszulkę.</span>', answers: ["i am wearing a blue t-shirt", "i'm wearing a blue t-shirt", "i am wearing a blue t-shirt.", "i'm wearing a blue t-shirt."], wide: true },
    { type: "gap", text: '<span class="pl">Mam czarne spodnie.</span>', answers: ["i have black trousers", "i have got black trousers", "i have black trousers.", "i have got black trousers."], wide: true },
    { type: "gap", text: '<span class="pl">Co masz na sobie?</span>', answers: ["what are you wearing", "what are you wearing?"], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">"My trousers is black." → (poprawnie)</span>', answers: ["my trousers are black", "my trousers are black."], wide: true },
    { type: "gap", text: '<span class="en">"I wearing a hat." → (poprawnie)</span>', answers: ["i am wearing a hat", "i'm wearing a hat", "i am wearing a hat.", "i'm wearing a hat."], wide: true }
  ],
  test: [
    { q: "Co znaczy „shoes"?", opcje: ["skarpetki", "buty", "spodnie", "czapka"], poprawna: 1, wyjasnienie: "„Shoes" = buty." },
    { q: "Jak powiesz „spodnie"?", opcje: ["trouser", "trousers", "pant", "trouseres"], poprawna: 1, wyjasnienie: "„Trousers" — zawsze liczba mnoga." },
    { q: "Które zdanie jest poprawne?", opcje: ["My trousers is black", "My trousers are black", "My trouser is black", "My trousers be black"], poprawna: 1, wyjasnienie: "„Trousers" — liczba mnoga → „are"." },
    { q: "Jak powiesz „Mam na sobie czerwoną koszulkę"?", opcje: ["I have a red T-shirt", "I am wearing a red T-shirt", "I wear a red T-shirt", "I red T-shirt wearing"], poprawna: 1, wyjasnienie: "„I am wearing" = mam na sobie." },
    { q: "Które zdanie jest poprawne?", opcje: ["a T-shirt blue", "a blue T-shirt", "blue a T-shirt", "T-shirt a blue"], poprawna: 1, wyjasnienie: "Kolor zawsze przed rzeczownikiem." },
    { q: "Co znaczy „socks"?", opcje: ["buty", "skarpetki", "spodnie", "rękawiczki"], poprawna: 1, wyjasnienie: "„Socks" = skarpetki." }
  ]
};

/* ============================================================
   A0-10 — Dom i pokoje
============================================================ */
window.LESSON_DATA["A0-10"] = {
  tytul: "Dom i pokoje",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Pokoje w domu</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">house 🏠</td><td>dom (budynek)</td></tr>
      <tr><td class="en">flat / apartment 🏢</td><td>mieszkanie</td></tr>
      <tr><td class="en">room</td><td>pokój</td></tr>
      <tr><td class="en">kitchen 🍳</td><td>kuchnia</td></tr>
      <tr><td class="en">bedroom 🛏️</td><td>sypialnia</td></tr>
      <tr><td class="en">bathroom 🚿</td><td>łazienka</td></tr>
      <tr><td class="en">living room 🛋️</td><td>salon</td></tr>
      <tr><td class="en">toilet 🚽</td><td>toaleta</td></tr>
      <tr><td class="en">garden 🌳</td><td>ogród</td></tr>
      <tr><td class="en">garage 🚗</td><td>garaż</td></tr>
    </table>

    <h3>Meble i przedmioty</h3>
    <table>
      <tr><td class="en">table 🪑</td><td>stół</td></tr>
      <tr><td class="en">chair 🪑</td><td>krzesło</td></tr>
      <tr><td class="en">bed 🛏️</td><td>łóżko</td></tr>
      <tr><td class="en">sofa 🛋️</td><td>kanapa</td></tr>
      <tr><td class="en">door 🚪</td><td>drzwi</td></tr>
      <tr><td class="en">window 🪟</td><td>okno</td></tr>
      <tr><td class="en">lamp 💡</td><td>lampa</td></tr>
      <tr><td class="en">TV 📺</td><td>telewizor</td></tr>
      <tr><td class="en">fridge 🧊</td><td>lodówka</td></tr>
      <tr><td class="en">cooker 🍳</td><td>kuchenka</td></tr>
    </table>

    <h3>„There is" i „there are"</h3>
    <p><b>There is</b> (pojedyncze): <span class="en">There is a table in the kitchen.</span> — W kuchni jest stół.</p>
    <p><b>There are</b> (wiele): <span class="en">There are two chairs in the kitchen.</span> — W kuchni są dwa krzesła.</p>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">I live in a big house. 🏠</td><td>Mieszkam w dużym domu.</td></tr>
      <tr><td class="en">There is a bed in my bedroom. 🛏️</td><td>W mojej sypialni jest łóżko.</td></tr>
      <tr><td class="en">The sofa is in the living room. 🛋️</td><td>Kanapa jest w salonie.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>There is</b> = jest (pojedyncze)<br>
      • <b>There are</b> = są (wiele)<br>
      • <b>in</b> = w (środku): <span class="en">in the kitchen</span><br>
      • <b>on</b> = na: <span class="en">on the table</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz po angielsku" },
    { type: "gap", text: '<span class="pl">kuchnia:</span>', answers: ["kitchen"] },
    { type: "gap", text: '<span class="pl">sypialnia:</span>', answers: ["bedroom"] },
    { type: "gap", text: '<span class="pl">łazienka:</span>', answers: ["bathroom"] },
    { type: "gap", text: '<span class="pl">salon:</span>', answers: ["living room"] },
    { type: "gap", text: '<span class="pl">stół:</span>', answers: ["table"] },
    { type: "gap", text: '<span class="pl">krzesło:</span>', answers: ["chair"] },
    { type: "gap", text: '<span class="pl">łóżko:</span>', answers: ["bed"] },
    { type: "gap", text: '<span class="pl">okno:</span>', answers: ["window"] },
    { type: "gap", text: '<span class="pl">drzwi:</span>', answers: ["door"] },
    { type: "header", text: "B. There is czy there are?" },
    { type: "gap", text: '<span class="en">________ a table in the kitchen.</span>', answers: ["there is"] },
    { type: "gap", text: '<span class="en">________ two chairs in the kitchen.</span>', answers: ["there are"] },
    { type: "gap", text: '<span class="en">________ a bed in my bedroom.</span>', answers: ["there is"] },
    { type: "gap", text: '<span class="en">________ four people in my family.</span>', answers: ["there are"] },
    { type: "header", text: "C. in czy on?" },
    { type: "gap", text: '<span class="en">The lamp is ________ the table. (na)</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">The sofa is ________ the living room. (w)</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">The TV is ________ the wall. (na)</span>', answers: ["on"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">W kuchni jest stół.</span>', answers: ["there is a table in the kitchen", "there is a table in the kitchen.", "there's a table in the kitchen"], wide: true },
    { type: "gap", text: '<span class="pl">W salonie są dwie kanapy.</span>', answers: ["there are two sofas in the living room", "there are two sofas in the living room."], wide: true },
    { type: "gap", text: '<span class="pl">Mieszkam w dużym domu.</span>', answers: ["i live in a big house", "i live in a big house."], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">"There is two chairs." → (poprawnie)</span>', answers: ["there are two chairs", "there are two chairs."], wide: true },
    { type: "gap", text: '<span class="en">"The lamp is in the table." → (poprawnie)</span>', answers: ["the lamp is on the table", "the lamp is on the table."], wide: true }
  ],
  test: [
    { q: "Co znaczy „kitchen"?", opcje: ["łazienka", "kuchnia", "sypialnia", "salon"], poprawna: 1, wyjasnienie: "„Kitchen" = kuchnia." },
    { q: "Jak powiesz „łóżko"?", opcje: ["table", "bed", "sofa", "chair"], poprawna: 1, wyjasnienie: "„Bed" = łóżko." },
    { q: "Które jest poprawne?", opcje: ["There is two chairs", "There are two chairs", "There has two chairs", "There be two chairs"], poprawna: 1, wyjasnienie: "Wiele → „there are"." },
    { q: "Gdzie jest lampa? „on the table" znaczy:", opcje: ["w stole", "na stole", "pod stołem", "obok stołu"], poprawna: 1, wyjasnienie: "„On" = na (powierzchni)." },
    { q: "Co znaczy „bathroom"?", opcje: ["sypialnia", "łazienka", "kuchnia", "ogród"], poprawna: 1, wyjasnienie: "„Bathroom" = łazienka." },
    { q: "Które zdanie jest poprawne?", opcje: ["The sofa is on the living room", "The sofa is in the living room", "The sofa on living room is", "The sofa is at the living room"], poprawna: 1, wyjasnienie: "W pomieszczeniu → „in"." }
  ]
};

/* ============================================================
   A0-11 — Zwierzęta
============================================================ */
window.LESSON_DATA["A0-11"] = {
  tytul: "Zwierzęta",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Zwierzeta domowe (pets)</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">dog 🐶</td><td>pies</td></tr>
      <tr><td class="en">cat 🐱</td><td>kot</td></tr>
      <tr><td class="en">rabbit 🐰</td><td>królik</td></tr>
      <tr><td class="en">hamster 🐹</td><td>chomik</td></tr>
      <tr><td class="en">fish 🐟</td><td>rybka</td></tr>
      <tr><td class="en">bird 🐦</td><td>ptak</td></tr>
      <tr><td class="en">parrot 🦜</td><td>papuga</td></tr>
      <tr><td class="en">turtle 🐢</td><td>żółw</td></tr>
    </table>

    <h3>Zwierzeta w zoo / na farmie</h3>
    <table>
      <tr><td class="en">lion 🦁</td><td>lew</td></tr>
      <tr><td class="en">tiger 🐯</td><td>tygrys</td></tr>
      <tr><td class="en">elephant 🐘</td><td>słoń</td></tr>
      <tr><td class="en">monkey 🐵</td><td>małpa</td></tr>
      <tr><td class="en">bear 🐻</td><td>niedźwiedź</td></tr>
      <tr><td class="en">cow 🐮</td><td>krowa</td></tr>
      <tr><td class="en">horse 🐴</td><td>koń</td></tr>
      <tr><td class="en">pig 🐷</td><td>świnia</td></tr>
      <tr><td class="en">chicken 🐔</td><td>kurczak</td></tr>
      <tr><td class="en">sheep 🐑</td><td>owca</td></tr>
      <tr><td class="en">duck 🦆</td><td>kaczka</td></tr>
    </table>

    <h3>Jak powiedzieć, że masz zwierzę?</h3>
    <table>
      <tr><td class="en">I have a dog.</td><td>Mam psa.</td></tr>
      <tr><td class="en">I have got a cat.</td><td>Mam kota.</td></tr>
      <tr><td class="en">My dog is big.</td><td>Mój pies jest duży.</td></tr>
      <tr><td class="en">I don't have a pet.</td><td>Nie mam zwierzęcia.</td></tr>
    </table>

    <h3>Jak zapytać o zwierzę?</h3>
    <p><span class="en">Do you have a pet?</span> — Masz zwierzę?</p>
    <p><span class="en">What pet do you have?</span> — Jakie masz zwierzę?</p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>pet</b> = zwierzę domowe<br>
      • <b>dog</b> = pies, <b>cat</b> = kot<br>
      • <b>I have a dog</b> — z „a" przed zwierzęciem<br>
      • Liczba mnoga: <span class="en">two dogs, three cats</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz po angielsku" },
    { type: "gap", text: '<span class="pl">pies:</span>', answers: ["dog"] },
    { type: "gap", text: '<span class="pl">kot:</span>', answers: ["cat"] },
    { type: "gap", text: '<span class="pl">rybka:</span>', answers: ["fish"] },
    { type: "gap", text: '<span class="pl">ptak:</span>', answers: ["bird"] },
    { type: "gap", text: '<span class="pl">królik:</span>', answers: ["rabbit"] },
    { type: "gap", text: '<span class="pl">koń:</span>', answers: ["horse"] },
    { type: "gap", text: '<span class="pl">krowa:</span>', answers: ["cow"] },
    { type: "gap", text: '<span class="pl">lew:</span>', answers: ["lion"] },
    { type: "header", text: "B. Liczba mnoga" },
    { type: "gap", text: '<span class="en">one dog → two ________</span>', answers: ["dogs"] },
    { type: "gap", text: '<span class="en">one cat → three ________</span>', answers: ["cats"] },
    { type: "gap", text: '<span class="en">one bird → four ________</span>', answers: ["birds"] },
    { type: "header", text: "C. Uzupełnij" },
    { type: "gap", text: '<span class="en">I have ________ dog. 🐶 (mam psa)</span>', answers: ["a"] },
    { type: "gap", text: '<span class="en">My cat ________ small. 🐱</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">I ________ have a pet. (nie mam)</span>', answers: ["don't", "do not"] },
    { type: "gap", text: '<span class="en">________ you have a pet?</span>', answers: ["do"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam psa.</span>', answers: ["i have a dog", "i have a dog.", "i have got a dog"], wide: true },
    { type: "gap", text: '<span class="pl">Mój kot jest mały.</span>', answers: ["my cat is small", "my cat is small."], wide: true },
    { type: "gap", text: '<span class="pl">Mam dwa psy.</span>', answers: ["i have two dogs", "i have two dogs.", "i have got two dogs"], wide: true },
    { type: "gap", text: '<span class="pl">Czy masz zwierzę?</span>', answers: ["do you have a pet", "do you have a pet?", "have you got a pet"], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">"I have dog." → (poprawnie)</span>', answers: ["i have a dog", "i have a dog.", "i've got a dog"], wide: true },
    { type: "gap", text: '<span class="en">"My cat are small." → (poprawnie)</span>', answers: ["my cat is small", "my cat is small."], wide: true }
  ],
  test: [
    { q: "Co znaczy „dog"?", opcje: ["kot", "pies", "koń", "krowa"], poprawna: 1, wyjasnienie: "„Dog" = pies." },
    { q: "Jak powiesz „kot"?", opcje: ["dog", "cat", "bird", "fish"], poprawna: 1, wyjasnienie: "„Cat" = kot." },
    { q: "Które zdanie jest poprawne?", opcje: ["I have dog", "I have a dog", "I have dogs a", "I a dog have"], poprawna: 1, wyjasnienie: "„I have a dog" — z „a" przed zwierzęciem." },
    { q: "Co znaczy „pet"?", opcje: ["zwierzę domowe", "pies", "kot", "farma"], poprawna: 0, wyjasnienie: "„Pet" = zwierzę domowe (pies, kot, itp.)." },
    { q: "Co znaczy „lion"?", opcje: ["tygrys", "lew", "niedźwiedź", "słoń"], poprawna: 1, wyjasnienie: "„Lion" = lew." },
    { q: "Jak zapytać „Masz zwierzę"?", opcje: ["You have a pet?", "Do you have a pet?", "Have you pet?", "You pet have?"], poprawna: 1, wyjasnienie: "„Do you have a pet?" — z „do" na początku." }
  ]
};

/* ============================================================
   A0-12 — Dni tygodnia i miesiące
============================================================ */
window.LESSON_DATA["A0-12"] = {
  tytul: "Dni tygodnia i miesiące",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Dni tygodnia</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">Monday</td><td>poniedziałek</td></tr>
      <tr><td class="en">Tuesday</td><td>wtorek</td></tr>
      <tr><td class="en">Wednesday</td><td>środa</td></tr>
      <tr><td class="en">Thursday</td><td>czwartek</td></tr>
      <tr><td class="en">Friday</td><td>piątek</td></tr>
      <tr><td class="en">Saturday</td><td>sobota</td></tr>
      <tr><td class="en">Sunday</td><td>niedziela</td></tr>
    </table>

    <h3>Miesiące</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">January</td><td>styczeń</td></tr>
      <tr><td class="en">February</td><td>luty</td></tr>
      <tr><td class="en">March</td><td>marzec</td></tr>
      <tr><td class="en">April</td><td>kwiecień</td></tr>
      <tr><td class="en">May</td><td>maj</td></tr>
      <tr><td class="en">June</td><td>czerwiec</td></tr>
      <tr><td class="en">July</td><td>lipiec</td></tr>
      <tr><td class="en">August</td><td>sierpień</td></tr>
      <tr><td class="en">September</td><td>wrzesień</td></tr>
      <tr><td class="en">October</td><td>październik</td></tr>
      <tr><td class="en">November</td><td>listopad</td></tr>
      <tr><td class="en">December</td><td>grudzień</td></tr>
    </table>

    <h3>Uwaga: zawsze wielką literą!</h3>
    <p>Po angielsku dni tygodnia i miesiące zawsze piszemy <b>wielką literą</b>: <span class="en">Monday</span>, <span class="en">January</span> — w przeciwieństwie do polskiego (poniedziałek, styczeń z małej).</p>

    <h3>Przyimki z dniami i miesiącami</h3>
    <table>
      <tr><td class="en">on Monday</td><td>w poniedziałek</td></tr>
      <tr><td class="en">in January</td><td>w styczniu</td></tr>
      <tr><td class="en">at the weekend</td><td>w weekend</td></tr>
    </table>

    <h3>Pory dnia</h3>
    <table>
      <tr><td class="en">morning 🌅</td><td>rano</td></tr>
      <tr><td class="en">afternoon ☀️</td><td>popołudnie</td></tr>
      <tr><td class="en">evening 🌆</td><td>wieczór</td></tr>
      <tr><td class="en">night 🌙</td><td>noc</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">Today is Monday.</td><td>Dzisiaj jest poniedziałek.</td></tr>
      <tr><td class="en">My birthday is in May.</td><td>Moje urodziny są w maju.</td></tr>
      <tr><td class="en">I go to school on Monday.</td><td>W poniedziałek idę do szkoły.</td></tr>
      <tr><td class="en">What day is it today?</td><td>Jaki dziś dzień?</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • Dni i miesiące <b>zawsze wielką literą</b>: Monday, January<br>
      • <b>on + dzień</b>: <span class="en">on Monday</span> (w poniedziałek)<br>
      • <b>in + miesiąc</b>: <span class="en">in May</span> (w maju)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz po angielsku" },
    { type: "gap", text: '<span class="pl">poniedziałek:</span>', answers: ["monday"] },
    { type: "gap", text: '<span class="pl">środa:</span>', answers: ["wednesday"] },
    { type: "gap", text: '<span class="pl">piątek:</span>', answers: ["friday"] },
    { type: "gap", text: '<span class="pl">sobota:</span>', answers: ["saturday"] },
    { type: "gap", text: '<span class="pl">styczeń:</span>', answers: ["january"] },
    { type: "gap", text: '<span class="pl">marzec:</span>', answers: ["march"] },
    { type: "gap", text: '<span class="pl">maj:</span>', answers: ["may"] },
    { type: "gap", text: '<span class="pl">grudzień:</span>', answers: ["december"] },
    { type: "header", text: "B. on czy in?" },
    { type: "gap", text: '<span class="en">________ Monday (w poniedziałek)</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">________ May (w maju)</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">________ Saturday (w sobotę)</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">________ December (w grudniu)</span>', answers: ["in"] },
    { type: "header", text: "C. Pory dnia" },
    { type: "gap", text: '<span class="pl">rano:</span>', answers: ["morning"] },
    { type: "gap", text: '<span class="pl">wieczór:</span>', answers: ["evening"] },
    { type: "gap", text: '<span class="pl">noc:</span>', answers: ["night"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Dzisiaj jest poniedziałek.</span>', answers: ["today is monday", "today is monday."], wide: true },
    { type: "gap", text: '<span class="pl">Moje urodziny są w maju.</span>', answers: ["my birthday is in may", "my birthday is in may."], wide: true },
    { type: "gap", text: '<span class="pl">W poniedziałek idę do szkoły.</span>', answers: ["i go to school on monday", "i go to school on monday."], wide: true },
    { type: "gap", text: '<span class="pl">Jaki dziś dzień?</span>', answers: ["what day is it today", "what day is it today?"], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">"in Monday" → (poprawnie)</span>', answers: ["on monday", "on monday."], wide: true },
    { type: "gap", text: '<span class="en">"on May" → (poprawnie)</span>', answers: ["in may", "in may."], wide: true }
  ],
  test: [
    { q: "Co znaczy „Wednesday"?", opcje: ["poniedziałek", "wtorek", "środa", "czwartek"], poprawna: 2, wyjasnienie: "„Wednesday" = środa." },
    { q: "Jak powiesz „styczeń"?", opcje: ["June", "January", "July", "March"], poprawna: 1, wyjasnienie: "„January" = styczeń." },
    { q: "Który przyimek z dniami?", opcje: ["in Monday", "on Monday", "at Monday", "by Monday"], poprawna: 1, wyjasnienie: "Dni tygodnia → „on"." },
    { q: "Który przyimek z miesiącami?", opcje: ["in May", "on May", "at May", "by May"], poprawna: 0, wyjasnienie: "Miesiące → „in"." },
    { q: "Co znaczy „evening"?", opcje: ["rano", "popołudnie", "wieczór", "noc"], poprawna: 2, wyjasnienie: "„Evening" = wieczór." },
    { q: "Jak piszemy dni tygodnia?", opcje: ["z małej litery", "z wielkiej litery", "bez różnicy", "tylko pierwszy dzień z wielkiej"], poprawna: 1, wyjasnienie: "Dni i miesiące zawsze wielką literą." }
  ]
};


/* ============================================================
   A0-13 — Podstawowe czasowniki
============================================================ */
window.LESSON_DATA["A0-13"] = {
  tytul: "Podstawowe czasowniki",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Najważniejsze czasowniki</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">go</td><td>iść / jechać 🚶</td></tr>
      <tr><td class="en">eat</td><td>jeść 🍽️</td></tr>
      <tr><td class="en">drink</td><td>pić 🥤</td></tr>
      <tr><td class="en">sleep</td><td>spać 😴</td></tr>
      <tr><td class="en">like</td><td>lubić ❤️</td></tr>
      <tr><td class="en">love</td><td>kochać / uwielbiać 💖</td></tr>
      <tr><td class="en">want</td><td>chcieć 🎯</td></tr>
      <tr><td class="en">have</td><td>mieć</td></tr>
      <tr><td class="en">work</td><td>pracować 💼</td></tr>
      <tr><td class="en">play</td><td>bawić się / grać ⚽</td></tr>
      <tr><td class="en">read</td><td>czytać 📖</td></tr>
      <tr><td class="en">write</td><td>pisać ✍️</td></tr>
      <tr><td class="en">speak / talk</td><td>mówić 💬</td></tr>
      <tr><td class="en">listen</td><td>słuchać 👂</td></tr>
      <tr><td class="en">watch</td><td>oglądać 📺</td></tr>
      <tr><td class="en">see</td><td>widzieć 👀</td></tr>
      <tr><td class="en">live</td><td>mieszkać 🏠</td></tr>
    </table>

    <h3>Odmiana — Present Simple</h3>
    <p>W czasie teraźniejszym czasowniki prawie się nie zmieniają. <b>Tylko w 3. osobie liczby pojedynczej (he / she / it) dodajemy -s.</b></p>
    <table>
      <tr><th>Osoba</th><th>go (iść)</th><th>like (lubić)</th></tr>
      <tr><td class="en">I</td><td class="en">go</td><td class="en">like</td></tr>
      <tr><td class="en">You</td><td class="en">go</td><td class="en">like</td></tr>
      <tr><td class="en">He / She / It</td><td class="en">go<b>es</b></td><td class="en">like<b>s</b></td></tr>
      <tr><td class="en">We</td><td class="en">go</td><td class="en">like</td></tr>
      <tr><td class="en">They</td><td class="en">go</td><td class="en">like</td></tr>
    </table>

    <h3>Pisownia -s w 3. osobie</h3>
    <table>
      <tr><td>Zazwyczaj <b>+s</b></td><td class="en">like → likes, live → lives</td></tr>
      <tr><td>Po <b>-s, -sh, -ch, -x, -o</b> → <b>+es</b></td><td class="en">go → goes, watch → watches</td></tr>
      <tr><td>Spółgłoska + <b>y</b> → <b>-ies</b></td><td class="en">study → studies</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">I like pizza. 🍕</td><td>Lubię pizzę.</td></tr>
      <tr><td class="en">She likes pizza. 🍕</td><td>Ona lubi pizzę.</td></tr>
      <tr><td class="en">They go to school. 🏫</td><td>Oni chodzą do szkoły.</td></tr>
      <tr><td class="en">He goes to school. 🏫</td><td>On chodzi do szkoły.</td></tr>
      <tr><td class="en">We watch TV. 📺</td><td>Oglądamy telewizję.</td></tr>
      <tr><td class="en">She watches TV. 📺</td><td>Ona ogląda telewizję.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • 3. osoba (he / she / it) → czasownik <b>+ -s</b><br>
      • <b>I like</b>, ale <b>he likeS</b><br>
      • <b>go → goes</b>, <b>watch → watches</b> (bo kończy się na -o / -ch)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij czasownik w 3. osobie" },
    { type: "gap", text: '<span class="en">I like → He ________</span>', answers: ["likes"] },
    { type: "gap", text: '<span class="en">I live → She ________</span>', answers: ["lives"] },
    { type: "gap", text: '<span class="en">I go → He ________</span>', answers: ["goes"] },
    { type: "gap", text: '<span class="en">I watch → She ________</span>', answers: ["watches"] },
    { type: "gap", text: '<span class="en">I play → He ________</span>', answers: ["plays"] },
    { type: "header", text: "B. Wybierz poprawną formę" },
    { type: "gap", text: '<span class="en">She ________ (like / likes) pizza.</span>', answers: ["likes"] },
    { type: "gap", text: '<span class="en">We ________ (go / goes) to school.</span>', answers: ["go"] },
    { type: "gap", text: '<span class="en">He ________ (watch / watches) TV.</span>', answers: ["watches"] },
    { type: "gap", text: '<span class="en">I ________ (eat / eats) breakfast.</span>', answers: ["eat"] },
    { type: "gap", text: '<span class="en">They ________ (live / lives) in Warsaw.</span>', answers: ["live"] },
    { type: "header", text: "C. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Ona lubi pizzę.</span>', answers: ["she likes pizza", "she likes pizza."], wide: true },
    { type: "gap", text: '<span class="pl">On chodzi do szkoły.</span>', answers: ["he goes to school", "he goes to school."], wide: true },
    { type: "gap", text: '<span class="pl">Mieszkam w Warszawie.</span>', answers: ["i live in warsaw", "i live in warsaw."], wide: true },
    { type: "gap", text: '<span class="pl">Ona ogląda telewizję.</span>', answers: ["she watches tv", "she watches tv."], wide: true },
    { type: "gap", text: '<span class="pl">Chcę pizzę.</span>', answers: ["i want a pizza", "i want a pizza.", "i want pizza", "i want pizza."], wide: true },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">"She like pizza." → (poprawnie)</span>', answers: ["she likes pizza", "she likes pizza."], wide: true },
    { type: "gap", text: '<span class="en">"He go to school." → (poprawnie)</span>', answers: ["he goes to school", "he goes to school."], wide: true }
  ],
  test: [
    { q: "Jak powiesz „Ona lubi"?", opcje: ["She like", "She likes", "She liking", "She is like"], poprawna: 1, wyjasnienie: "3. osoba → +s: „She likes"." },
    { q: "Które jest poprawne?", opcje: ["He go to school", "He goes to school", "He going to school", "He gone to school"], poprawna: 1, wyjasnienie: "„go → goes" w 3. osobie." },
    { q: "Co znaczy „sleep"?", opcje: ["jeść", "spać", "pić", "chodzić"], poprawna: 1, wyjasnienie: "„Sleep" = spać." },
    { q: "Jak powiesz „Oni mieszkają w Krakowie"?", opcje: ["They lives in Kraków", "They live in Kraków", "They living in Kraków", "They is live in Kraków"], poprawna: 1, wyjasnienie: "„They" → czasownik bez -s: „They live"." },
    { q: "„watch → on" (3. osoba):", opcje: ["watchs", "watches", "watch", "watching"], poprawna: 1, wyjasnienie: "Po -ch dodajemy -es: „watches"." },
    { q: "Co znaczy „read"?", opcje: ["pisać", "czytać", "mówić", "słuchać"], poprawna: 1, wyjasnienie: "„Read" = czytać." }
  ]
};

/* ============================================================
   A0-14 — Czasownik „to be" (am / is / are)
============================================================ */
window.LESSON_DATA["A0-14"] = {
  tytul: 'Czasownik "to be" (am / is / are)',
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>„Być" — jedno z najważniejszych słów</h3>
    <p>Angielskie „być" ma trzy formy w czasie teraźniejszym: <b>am, is, are</b>. Zależy, z kim mówimy.</p>
    <table>
      <tr><th>Osoba</th><th>Forma</th><th>Skrót</th><th>Przykład</th></tr>
      <tr><td class="en">I</td><td class="en">am</td><td class="en">I'm</td><td class="en">I am a student.</td></tr>
      <tr><td class="en">You</td><td class="en">are</td><td class="en">you're</td><td class="en">You are my friend.</td></tr>
      <tr><td class="en">He</td><td class="en">is</td><td class="en">he's</td><td class="en">He is tall.</td></tr>
      <tr><td class="en">She</td><td class="en">is</td><td class="en">she's</td><td class="en">She is nice.</td></tr>
      <tr><td class="en">It</td><td class="en">is</td><td class="en">it's</td><td class="en">It is a cat.</td></tr>
      <tr><td class="en">We</td><td class="en">are</td><td class="en">we're</td><td class="en">We are happy.</td></tr>
      <tr><td class="en">They</td><td class="en">are</td><td class="en">they're</td><td class="en">They are at home.</td></tr>
    </table>

    <h3>Zapamiętaj — trzy grupy</h3>
    <ul>
      <li><b>am</b> — tylko z <span class="en">I</span></li>
      <li><b>is</b> — z <span class="en">he, she, it</span> (pojedyncze osoby i rzeczy)</li>
      <li><b>are</b> — z <span class="en">you, we, they</span> (kilka osób)</li>
    </ul>

    <h3>Przeczenie</h3>
    <p>Dodajemy <b>not</b> po formie:</p>
    <table>
      <tr><td class="en">I am not / I'm not</td><td>Nie jestem</td></tr>
      <tr><td class="en">You are not / You aren't</td><td>Nie jesteś</td></tr>
      <tr><td class="en">He is not / He isn't</td><td>Nie jest</td></tr>
      <tr><td class="en">We are not / We aren't</td><td>Nie jesteśmy</td></tr>
      <tr><td class="en">They are not / They aren't</td><td>Nie są</td></tr>
    </table>

    <h3>Pytanie</h3>
    <p>Zamieniamy formę <b>am / is / are</b> na początek:</p>
    <table>
      <tr><td class="en">Are you a student?</td><td>Czy jesteś studentem?</td></tr>
      <tr><td class="en">Is she your sister?</td><td>Czy ona jest twoją siostrą?</td></tr>
      <tr><td class="en">Are they at home?</td><td>Czy oni są w domu?</td></tr>
    </table>
    <p>Odpowiedź: <span class="en">Yes, I am. / No, I'm not.</span></p>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">I am from Poland. 🇵🇱</td><td>Jestem z Polski.</td></tr>
      <tr><td class="en">She is 12 years old.</td><td>Ona ma 12 lat.</td></tr>
      <tr><td class="en">We are at school.</td><td>Jesteśmy w szkole.</td></tr>
      <tr><td class="en">The cat is black.</td><td>Kot jest czarny.</td></tr>
      <tr><td class="en">They are my friends.</td><td>Oni są moimi przyjaciółmi.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>I → am</b>, <b>he / she / it → is</b>, <b>you / we / they → are</b><br>
      • Skróty: <b>I'm, you're, he's, she's, it's, we're, they're</b><br>
      • „Mam 12 lat" → <b>I am 12.</b> (nie „I have 12")
    </div>
  `,
  karta: [
    { type: "header", text: "A. am, is czy are?" },
    { type: "gap", text: '<span class="en">I ________ from Poland.</span>', answers: ["am"] },
    { type: "gap", text: '<span class="en">She ________ my sister.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">They ________ my friends.</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">He ________ 10 years old.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">We ________ at school.</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">You ________ a student.</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">It ________ a cat.</span>', answers: ["is"] },
    { type: "header", text: "B. Skróty" },
    { type: "gap", text: '<span class="en">I am = ________</span>', answers: ["i'm"] },
    { type: "gap", text: '<span class="en">She is = ________</span>', answers: ["she's"] },
    { type: "gap", text: '<span class="en">We are = ________</span>', answers: ["we're"] },
    { type: "gap", text: '<span class="en">They are = ________</span>', answers: ["they're"] },
    { type: "header", text: "C. Przeczenie (isn't / aren't / am not)" },
    { type: "gap", text: '<span class="en">She is nice. → She ________ nice.</span>', answers: ["isn't", "is not"] },
    { type: "gap", text: '<span class="en">They are at home. → They ________ at home.</span>', answers: ["aren't", "are not"] },
    { type: "gap", text: '<span class="en">I am tired. → I ________ tired.</span>', answers: ["am not", "'m not"] },
    { type: "header", text: "D. Pytanie" },
    { type: "gap", text: '<span class="en">________ you a student?</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">________ she your sister?</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">________ they at home?</span>', answers: ["are"] },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Jestem z Polski.</span>', answers: ["i am from poland", "i'm from poland", "i am from poland.", "i'm from poland."], wide: true },
    { type: "gap", text: '<span class="pl">Ona ma 12 lat.</span>', answers: ["she is 12", "she is twelve", "she's 12", "she's twelve"], wide: true },
    { type: "gap", text: '<span class="pl">Oni są w szkole.</span>', answers: ["they are at school", "they're at school", "they are at school."], wide: true },
    { type: "gap", text: '<span class="pl">Nie jestem zmęczony.</span>', answers: ["i am not tired", "i'm not tired", "i am not tired.", "i'm not tired."], wide: true },
    { type: "gap", text: '<span class="pl">Czy ona jest twoją siostrą?</span>', answers: ["is she your sister", "is she your sister?"], wide: true },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">"I is from Poland." → (poprawnie)</span>', answers: ["i am from poland", "i'm from poland", "i am from poland.", "i'm from poland."], wide: true },
    { type: "gap", text: '<span class="en">"She are my sister." → (poprawnie)</span>', answers: ["she is my sister", "she is my sister."], wide: true },
    { type: "gap", text: '<span class="en">"I have 12 years old." → (poprawnie)</span>', answers: ["i am 12 years old", "i am twelve years old", "i'm 12", "i'm 12 years old"], wide: true }
  ],
  test: [
    { q: "Które jest poprawne?", opcje: ["I is", "I am", "I are", "I be"], poprawna: 1, wyjasnienie: "Z „I" zawsze „am"." },
    { q: "„She ________ my friend." — co wpisać?", opcje: ["am", "is", "are", "be"], poprawna: 1, wyjasnienie: "Z „she" → is." },
    { q: "„They ________ at school." — co wpisać?", opcje: ["am", "is", "are", "be"], poprawna: 2, wyjasnienie: "Z „they" → are." },
    { q: "Jak powiesz „Ona ma 12 lat"?", opcje: ["She has 12 years", "She is 12", "She have 12", "She 12"], poprawna: 1, wyjasnienie: "Po angielsku: „She is 12" — nie „She has"." },
    { q: "Skrót od „We are" to:", opcje: ["we'are", "were", "we're", "weare"], poprawna: 2, wyjasnienie: "„We are" = „we're" (z apostrofem)." },
    { q: "Jak zapytać „Czy jesteś studentem"?", opcje: ["You are a student?", "Are you a student?", "Is you a student?", "Do you student?"], poprawna: 1, wyjasnienie: "Pytanie: „are" na początku." }
  ]
};

/* ============================================================
   A0-15 — Czasownik „have got"
============================================================ */
window.LESSON_DATA["A0-15"] = {
  tytul: 'Czasownik "have got"',
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>„Mieć" — have got / have</h3>
    <p>W brytyjskim angielskim „mieć" to najczęściej <b>have got</b>. W amerykańskim wystarczy <b>have</b>. Oba są poprawne.</p>
    <table>
      <tr><th>Osoba</th><th>have got</th><th>Skrót</th><th>have (amerykański)</th></tr>
      <tr><td class="en">I</td><td class="en">have got</td><td class="en">I've got</td><td class="en">have</td></tr>
      <tr><td class="en">You</td><td class="en">have got</td><td class="en">you've got</td><td class="en">have</td></tr>
      <tr><td class="en">He</td><td class="en">has got</td><td class="en">he's got</td><td class="en">has</td></tr>
      <tr><td class="en">She</td><td class="en">has got</td><td class="en">she's got</td><td class="en">has</td></tr>
      <tr><td class="en">It</td><td class="en">has got</td><td class="en">it's got</td><td class="en">has</td></tr>
      <tr><td class="en">We</td><td class="en">have got</td><td class="en">we've got</td><td class="en">have</td></tr>
      <tr><td class="en">They</td><td class="en">have got</td><td class="en">they've got</td><td class="en">have</td></tr>
    </table>

    <h3>Kiedy używamy „have got"?</h3>
    <p>Gdy mówimy o tym, co posiadamy, co mamy:</p>
    <table>
      <tr><td class="en">I have got a dog. 🐶</td><td>Mam psa.</td></tr>
      <tr><td class="en">She has got blue eyes. 👁️</td><td>Ona ma niebieskie oczy.</td></tr>
      <tr><td class="en">They have got a big house. 🏠</td><td>Oni mają duży dom.</td></tr>
      <tr><td class="en">He has got a bike. 🚲</td><td>On ma rower.</td></tr>
    </table>

    <h3>Przeczenie — haven't got / hasn't got</h3>
    <table>
      <tr><td class="en">I haven't got a car.</td><td>Nie mam samochodu.</td></tr>
      <tr><td class="en">She hasn't got a cat.</td><td>Ona nie ma kota.</td></tr>
      <tr><td class="en">They haven't got any money.</td><td>Oni nie mają pieniędzy.</td></tr>
    </table>

    <h3>Pytanie — Have you got…? / Has she got…?</h3>
    <table>
      <tr><td class="en">Have you got a pen?</td><td>Czy masz długopis?</td></tr>
      <tr><td class="en">Has she got a brother?</td><td>Czy ona ma brata?</td></tr>
      <tr><td class="en">Have they got a car?</td><td>Czy oni mają samochód?</td></tr>
    </table>
    <p>Odpowiedź: <span class="en">Yes, I have. / No, I haven't.</span></p>

    <h3>Have got czy have?</h3>
    <p>W Wielkiej Brytanii → <b>have got</b> (potocznie). W USA → <b>have</b>. Oba są poprawne. Na maturze: bezpieczniej używać <b>have got</b> w brytyjskim stylu.</p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>I / you / we / they + have got</b><br>
      • <b>he / she / it + has got</b> (z „s"!)<br>
      • Przeczenie: <b>haven't got / hasn't got</b><br>
      • Pytanie: <b>Have you got…? / Has she got…?</b>
    </div>
  `,
  karta: [
    { type: "header", text: "A. have got czy has got?" },
    { type: "gap", text: '<span class="en">I ________ got a dog.</span>', answers: ["have", "'ve"] },
    { type: "gap", text: '<span class="en">She ________ got a brother.</span>', answers: ["has", "'s"] },
    { type: "gap", text: '<span class="en">We ________ got a big house.</span>', answers: ["have", "'ve"] },
    { type: "gap", text: '<span class="en">He ________ got a bike.</span>', answers: ["has", "'s"] },
    { type: "gap", text: '<span class="en">They ________ got two cats.</span>', answers: ["have", "'ve"] },
    { type: "header", text: "B. Uzupełnij (skróty)" },
    { type: "gap", text: '<span class="en">I have got = ________</span>', answers: ["i've got"] },
    { type: "gap", text: '<span class="en">She has got = ________</span>', answers: ["she's got"] },
    { type: "gap", text: '<span class="en">They have got = ________</span>', answers: ["they've got"] },
    { type: "header", text: "C. Przeczenie" },
    { type: "gap", text: '<span class="en">I have got a car. → I ________ got a car. (nie mam)</span>', answers: ["haven't", "have not"] },
    { type: "gap", text: '<span class="en">She has got a cat. → She ________ got a cat.</span>', answers: ["hasn't", "has not"] },
    { type: "header", text: "D. Pytanie" },
    { type: "gap", text: '<span class="en">________ you got a pen?</span>', answers: ["have"] },
    { type: "gap", text: '<span class="en">________ she got a brother?</span>', answers: ["has"] },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam psa.</span>', answers: ["i have got a dog", "i've got a dog", "i have a dog", "i have got a dog."], wide: true },
    { type: "gap", text: '<span class="pl">Ona ma niebieskie oczy.</span>', answers: ["she has got blue eyes", "she's got blue eyes", "she has blue eyes", "she has got blue eyes."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mam samochodu.</span>', answers: ["i haven't got a car", "i have not got a car", "i don't have a car", "i haven't got a car."], wide: true },
    { type: "gap", text: '<span class="pl">Czy masz długopis?</span>', answers: ["have you got a pen", "have you got a pen?", "do you have a pen", "do you have a pen?"], wide: true },
    { type: "gap", text: '<span class="pl">Oni mają duży dom.</span>', answers: ["they have got a big house", "they've got a big house", "they have a big house", "they have got a big house."], wide: true },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">"She have got a cat." → (poprawnie)</span>', answers: ["she has got a cat", "she's got a cat", "she has got a cat."], wide: true },
    { type: "gap", text: '<span class="en">"I has got a dog." → (poprawnie)</span>', answers: ["i have got a dog", "i've got a dog", "i have got a dog."], wide: true }
  ],
  test: [
    { q: "„She ________ got a cat." — co wpisać?", opcje: ["have", "has", "is", "are"], poprawna: 1, wyjasnienie: "Z „she" → has got." },
    { q: "Które jest poprawne?", opcje: ["I has got a dog", "I have got a dog", "I have get a dog", "I got have a dog"], poprawna: 1, wyjasnienie: "„I have got" — z „I" używamy „have"." },
    { q: "Jak powiesz „Nie mam samochodu"?", opcje: ["I not have a car", "I haven't got a car", "I no have a car", "I don't got a car"], poprawna: 1, wyjasnienie: "„I haven't got a car" — przeczenie." },
    { q: "Jak zapytać „Czy masz psa"?", opcje: ["Have you got a dog?", "Has you got a dog?", "Do you got a dog?", "Are you got a dog?"], poprawna: 0, wyjasnienie: "„Have you got…?" — z „you" używamy „have"." },
    { q: "„He ________ got a bike." — co wpisać?", opcje: ["have", "has", "is", "are"], poprawna: 1, wyjasnienie: "Z „he" → has got." },
    { q: "Skrót od „I have got" to:", opcje: ["I'have got", "I've got", "I got", "I have'got"], poprawna: 1, wyjasnienie: "„I have got" = „I've got"." }
  ]
};

/* ============================================================
   A0-16 — Proste zdania i pytania
============================================================ */
window.LESSON_DATA["A0-16"] = {
  tytul: "Proste zdania i pytania",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Kolejność słów w zdaniu</h3>
    <p>Po angielsku kolejność jest <b>stała</b>:</p>
    <p style="text-align:center;font-size:1.1rem;"><b>Kto?</b> → <b>Co robi?</b> → <b>Co?</b></p>
    <table>
      <tr><th>Kto</th><th>Co robi</th><th>Co</th></tr>
      <tr><td class="en">I</td><td class="en">like</td><td class="en">pizza.</td></tr>
      <tr><td class="en">She</td><td class="en">reads</td><td class="en">books.</td></tr>
      <tr><td class="en">We</td><td class="en">watch</td><td class="en">TV.</td></tr>
      <tr><td class="en">Tom</td><td class="en">eats</td><td class="en">breakfast.</td></tr>
    </table>
    <p><b>Uwaga:</b> po polsku można powiedzieć „Pizzę lubię", ale po angielsku <b>tylko</b>: <span class="en">I like pizza.</span></p>

    <h3>Pytania — ogólne (Yes/No)</h3>
    <p>Zaczynają się od czasownika pomocniczego:</p>
    <table>
      <tr><td class="en">Do you like pizza?</td><td>Czy lubisz pizzę?</td></tr>
      <tr><td class="en">Does she like pizza?</td><td>Czy ona lubi pizzę?</td></tr>
      <tr><td class="en">Are you a student?</td><td>Czy jesteś studentem?</td></tr>
      <tr><td class="en">Is he at home?</td><td>Czy on jest w domu?</td></tr>
      <tr><td class="en">Have you got a dog?</td><td>Czy masz psa?</td></tr>
    </table>
    <p>Odpowiedź: <span class="en">Yes, I do. / No, I don't.</span></p>

    <h3>Pytania szczegółowe (Wh-)</h3>
    <table>
      <tr><td class="en">What</td><td>co / jaki</td><td class="en">What is your name?</td></tr>
      <tr><td class="en">Where</td><td>gdzie</td><td class="en">Where do you live?</td></tr>
      <tr><td class="en">When</td><td>kiedy</td><td class="en">When is your birthday?</td></tr>
      <tr><td class="en">Who</td><td>kto</td><td class="en">Who is he?</td></tr>
      <tr><td class="en">Why</td><td>dlaczego</td><td class="en">Why are you sad?</td></tr>
      <tr><td class="en">How</td><td>jak</td><td class="en">How are you?</td></tr>
      <tr><td class="en">How old</td><td>ile lat</td><td class="en">How old are you?</td></tr>
    </table>

    <h3>Przykłady — pytania i odpowiedzi</h3>
    <table>
      <tr><td class="en">— What is your name?<br>— My name is Anna.</td></tr>
      <tr><td class="en">— Where do you live?<br>— I live in Kraków.</td></tr>
      <tr><td class="en">— How old are you?<br>— I am twelve.</td></tr>
      <tr><td class="en">— Do you like pizza?<br>— Yes, I do. / No, I don't.</td></tr>
      <tr><td class="en">— Have you got a pet?<br>— Yes, I have. I've got a dog.</td></tr>
    </table>

    <h3>Przeczenie — don't / doesn't</h3>
    <table>
      <tr><td class="en">I don't like fish.</td><td>Nie lubię ryby.</td></tr>
      <tr><td class="en">She doesn't like fish.</td><td>Ona nie lubi ryby.</td></tr>
      <tr><td class="en">They don't have a car.</td><td>Oni nie mają samochodu.</td></tr>
    </table>
    <p><b>Uwaga:</b> w 3. osobie → <b>doesn't</b> (nie „don't she"), i czasownik bez -s: <span class="en">She doesn't like</span> (nie „she doesn't likes").</p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • Kolejność: <b>Kto → co robi → co</b><br>
      • Pytanie ogólne: <b>Do / Does / Are / Is / Have / Has</b> na początku<br>
      • Pytanie szczegółowe: <b>What / Where / When / Who / Why / How</b> na początku<br>
      • Po <b>doesn't</b> czasownik <b>bez -s</b>: <span class="en">She doesn't like</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Ułóż zdanie w poprawnej kolejności" },
    { type: "gap", text: '<span class="en">[pizza / I / like] → ________</span>', answers: ["i like pizza", "i like pizza."], wide: true },
    { type: "gap", text: '<span class="en">[books / reads / she] → ________</span>', answers: ["she reads books", "she reads books."], wide: true },
    { type: "gap", text: '<span class="en">[TV / watch / we] → ________</span>', answers: ["we watch tv", "we watch tv."], wide: true },
    { type: "gap", text: '<span class="en">[breakfast / Tom / eats] → ________</span>', answers: ["tom eats breakfast", "tom eats breakfast."], wide: true },
    { type: "header", text: "B. Pytanie — do czy does?" },
    { type: "gap", text: '<span class="en">________ you like pizza?</span>', answers: ["do"] },
    { type: "gap", text: '<span class="en">________ she like pizza?</span>', answers: ["does"] },
    { type: "gap", text: '<span class="en">________ they live in Warsaw?</span>', answers: ["do"] },
    { type: "gap", text: '<span class="en">________ he have a car?</span>', answers: ["does"] },
    { type: "header", text: "C. Wstaw słowo pytające" },
    { type: "gap", text: '<span class="en">________ is your name? — My name is Anna.</span>', answers: ["what"] },
    { type: "gap", text: '<span class="en">________ do you live? — In Kraków.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">________ old are you? — I am twelve.</span>', answers: ["how"] },
    { type: "gap", text: '<span class="en">________ is your birthday? — In May.</span>', answers: ["when"] },
    { type: "header", text: "D. Przeczenie" },
    { type: "gap", text: '<span class="en">I like fish. → I ________ like fish.</span>', answers: ["don't", "do not"] },
    { type: "gap", text: '<span class="en">She likes fish. → She ________ like fish.</span>', answers: ["doesn't", "does not"] },
    { type: "gap", text: '<span class="en">They have a car. → They ________ have a car.</span>', answers: ["don't", "do not"] },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Lubię pizzę.</span>', answers: ["i like pizza", "i like pizza."], wide: true },
    { type: "gap", text: '<span class="pl">Ona czyta książki.</span>', answers: ["she reads books", "she reads books."], wide: true },
    { type: "gap", text: '<span class="pl">Czy lubisz pizzę?</span>', answers: ["do you like pizza", "do you like pizza?"], wide: true },
    { type: "gap", text: '<span class="pl">Gdzie mieszkasz?</span>', answers: ["where do you live", "where do you live?"], wide: true },
    { type: "gap", text: '<span class="pl">Ona nie lubi ryby.</span>', answers: ["she doesn't like fish", "she does not like fish", "she doesn't like fish.", "she does not like fish."], wide: true },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">"She doesn\'t likes fish." → (poprawnie)</span>', answers: ["she doesn't like fish", "she does not like fish", "she doesn't like fish.", "she does not like fish."], wide: true },
    { type: "gap", text: '<span class="en">"Does she likes pizza?" → (poprawnie)</span>', answers: ["does she like pizza", "does she like pizza?"], wide: true },
    { type: "gap", text: '<span class="en">"I pizza like." → (poprawnie)</span>', answers: ["i like pizza", "i like pizza."], wide: true }
  ],
  test: [
    { q: "Które zdanie jest poprawne?", opcje: ["Pizza I like", "I like pizza", "Like I pizza", "I pizza like"], poprawna: 1, wyjasnienie: "Kolejność: kto + co robi + co." },
    { q: "„________ she like pizza?" — co wpisać?", opcje: ["Do", "Does", "Is", "Are"], poprawna: 1, wyjasnienie: "3. osoba → does." },
    { q: "Jak zapytać „Gdzie mieszkasz"?", opcje: ["Where you live?", "Where do you live?", "Where live you?", "You live where?"], poprawna: 1, wyjasnienie: "„Where do you live?" — z „do"." },
    { q: "Które jest poprawne?", opcje: ["She doesn't likes fish", "She doesn't like fish", "She don't like fish", "She not like fish"], poprawna: 1, wyjasnienie: "Po „doesn't" — czasownik bez -s." },
    { q: "„How old are you?" znaczy:", opcje: ["Gdzie jesteś?", "Ile masz lat?", "Jak się masz?", "Kim jesteś?"], poprawna: 1, wyjasnienie: "„How old are you?" = Ile masz lat?" },
    { q: "Które słowo pytające znaczy „kiedy"?", opcje: ["What", "Where", "When", "Who"], poprawna: 2, wyjasnienie: "„When" = kiedy." }
  ]
};


/* ============================================================
   A0-5 — Kolory
============================================================ */
window.LESSON_DATA["A0-5"] = {
  tytul: "Kolory",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Podstawowe kolory</h3>
    <table>
      <tr><th>Kolor</th><th>Angielski</th><th>Wymowa</th></tr>
      <tr><td>🔴</td><td class="en">red</td><td>red</td></tr>
      <tr><td>🔵</td><td class="en">blue</td><td>blu</td></tr>
      <tr><td>🟢</td><td class="en">green</td><td>grin</td></tr>
      <tr><td>🟡</td><td class="en">yellow</td><td>jeloł</td></tr>
      <tr><td>⚫</td><td class="en">black</td><td>blek</td></tr>
      <tr><td>⚪</td><td class="en">white</td><td>łajt</td></tr>
      <tr><td>🟠</td><td class="en">orange</td><td>oryndż</td></tr>
      <tr><td>🟣</td><td class="en">purple</td><td>pypl</td></tr>
      <tr><td>🩷</td><td class="en">pink</td><td>pink</td></tr>
      <tr><td>🟤</td><td class="en">brown</td><td>brałn</td></tr>
      <tr><td>⬜</td><td class="en">grey / gray</td><td>grej</td></tr>
    </table>

    <h3>Jak zapytać o kolor?</h3>
    <p><span class="en">What colour is it?</span> — Jakiego to jest koloru?</p>
    <p>Odpowiedź: <span class="en">It is red.</span> albo <span class="en">It's red.</span></p>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">The apple is red. 🍎</td><td>Jabłko jest czerwone.</td></tr>
      <tr><td class="en">The sun is yellow. ☀️</td><td>Słońce jest żółte.</td></tr>
      <tr><td class="en">The sky is blue. 🌤️</td><td>Niebo jest niebieskie.</td></tr>
      <tr><td class="en">The grass is green. 🌿</td><td>Trawa jest zielona.</td></tr>
      <tr><td class="en">The snow is white. ❄️</td><td>Śnieg jest biały.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>colour</b> (brytyjski) = <b>color</b> (amerykański) — oba poprawne.<br>
      • Przedmiot + <b>is</b> + kolor: <span class="en">The ball is green.</span><br>
      • Pytanie: <span class="en">What colour is it?</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz kolor po angielsku" },
    { type: "gap", text: '<span class="pl">czerwony:</span>', answers: ["red"] },
    { type: "gap", text: '<span class="pl">niebieski:</span>', answers: ["blue"] },
    { type: "gap", text: '<span class="pl">zielony:</span>', answers: ["green"] },
    { type: "gap", text: '<span class="pl">żółty:</span>', answers: ["yellow"] },
    { type: "gap", text: '<span class="pl">czarny:</span>', answers: ["black"] },
    { type: "gap", text: '<span class="pl">biały:</span>', answers: ["white"] },
    { type: "gap", text: '<span class="pl">pomarańczowy:</span>', answers: ["orange"] },
    { type: "gap", text: '<span class="pl">różowy:</span>', answers: ["pink"] },
    { type: "gap", text: '<span class="pl">brązowy:</span>', answers: ["brown"] },
    { type: "header", text: "B. Jakiego koloru jest...?" },
    { type: "gap", text: '<span class="en">The apple is ________. 🍎</span>', answers: ["red"] },
    { type: "gap", text: '<span class="en">The sun is ________. ☀️</span>', answers: ["yellow"] },
    { type: "gap", text: '<span class="en">The snow is ________. ❄️</span>', answers: ["white"] },
    { type: "gap", text: '<span class="en">The grass is ________. 🌿</span>', answers: ["green"] },
    { type: "header", text: "C. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Jaki to kolor?</span>', answers: ["what colour is it", "what color is it", "what colour is it?", "what color is it?"], wide: true },
    { type: "gap", text: '<span class="pl">To jest czerwone.</span>', answers: ["it is red", "it's red", "it is red.", "it's red."], wide: true },
    { type: "gap", text: '<span class="pl">Piłka jest zielona.</span>', answers: ["the ball is green", "the ball is green."], wide: true },
    { type: "gap", text: '<span class="pl">Jabłko jest czerwone.</span>', answers: ["the apple is red", "the apple is red."], wide: true },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">"The ball red is" → (poprawnie)</span>', answers: ["the ball is red", "the ball is red."], wide: true },
    { type: "gap", text: '<span class="en">"It red." → (poprawnie)</span>', answers: ["it is red", "it's red", "it is red.", "it's red."], wide: true }
  ],
  test: [
    { q: "Co znaczy „green"?", opcje: ["czerwony", "zielony", "niebieski", "żółty"], poprawna: 1, wyjasnienie: "„Green" = zielony." },
    { q: "Jak powiesz „różowy"?", opcje: ["purple", "pink", "red", "orange"], poprawna: 1, wyjasnienie: "„Pink" = różowy. „Purple" = fioletowy." },
    { q: "Co znaczy „What colour is it"?", opcje: ["Jaki to kształt?", "Jaki to kolor?", "Gdzie to jest?", "Co to jest?"], poprawna: 1, wyjasnienie: "„What colour is it?" = Jaki to kolor?" },
    { q: "Jak powiesz „Jabłko jest czerwone"?", opcje: ["The apple red is", "Red the apple is", "The apple is red", "Apple is red the"], poprawna: 2, wyjasnienie: "Kolejność: podmiot + is + kolor." },
    { q: "Co znaczy „black"?", opcje: ["biały", "czarny", "brązowy", "zielony"], poprawna: 1, wyjasnienie: "„Black" = czarny." },
    { q: "Jak zapytać o kolor po angielsku?", opcje: ["What colour is it?", "What colour are you?", "How is colour?", "Colour what is?"], poprawna: 0, wyjasnienie: "„What colour is it?" = Jaki to kolor?" }
  ]
};

/* ============================================================
   A0-6 — Rodzina
============================================================ */
window.LESSON_DATA["A0-6"] = {
  tytul: "Rodzina",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Członkowie rodziny</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">mother / mum 👩</td><td>mama, matka</td></tr>
      <tr><td class="en">father / dad 👨</td><td>tata, ojciec</td></tr>
      <tr><td class="en">parents 👫</td><td>rodzice</td></tr>
      <tr><td class="en">sister 👧</td><td>siostra</td></tr>
      <tr><td class="en">brother 👦</td><td>brat</td></tr>
      <tr><td class="en">grandmother / grandma 👵</td><td>babcia</td></tr>
      <tr><td class="en">grandfather / grandpa 👴</td><td>dziadek</td></tr>
      <tr><td class="en">aunt 👩</td><td>ciocia</td></tr>
      <tr><td class="en">uncle 👨</td><td>wujek</td></tr>
      <tr><td class="en">cousin 🧑</td><td>kuzyn / kuzynka</td></tr>
      <tr><td class="en">son 👦</td><td>syn</td></tr>
      <tr><td class="en">daughter 👧</td><td>córka</td></tr>
      <tr><td class="en">baby 👶</td><td>niemowlę</td></tr>
      <tr><td class="en">family 👨‍👩‍👧</td><td>rodzina</td></tr>
    </table>

    <h3>Zaimki dzierżawcze</h3>
    <table>
      <tr><td class="en">my</td><td>mój / moja / moje</td></tr>
      <tr><td class="en">your</td><td>twój / twoja / twoje</td></tr>
      <tr><td class="en">his</td><td>jego</td></tr>
      <tr><td class="en">her</td><td>jej</td></tr>
      <tr><td class="en">our</td><td>nasz / nasza</td></tr>
      <tr><td class="en">their</td><td>ich</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">This is my mother. 👩</td><td>To jest moja mama.</td></tr>
      <tr><td class="en">I have one brother. 👦</td><td>Mam jednego brata.</td></tr>
      <tr><td class="en">Her name is Anna.</td><td>Ona ma na imię Anna.</td></tr>
      <tr><td class="en">My family is big. 👨‍👩‍👧‍👦</td><td>Moja rodzina jest duża.</td></tr>
    </table>

    <h3>Jak powiedzieć „mam brata / siostrę"?</h3>
    <p><span class="en">I have a brother.</span> — Mam brata.</p>
    <p><span class="en">I have two sisters.</span> — Mam dwie siostry.</p>
    <p><span class="en">I don't have a brother.</span> — Nie mam brata.</p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>my</b> = mój / moja / moje (bez zmiany!)<br>
      • <b>brother</b> = brat, <b>sister</b> = siostra<br>
      • <b>I have a brother</b> = Mam brata. (z „a" przed „brother")
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz po angielsku" },
    { type: "gap", text: '<span class="pl">mama:</span>', answers: ["mother", "mum", "mom"] },
    { type: "gap", text: '<span class="pl">tata:</span>', answers: ["father", "dad"] },
    { type: "gap", text: '<span class="pl">siostra:</span>', answers: ["sister"] },
    { type: "gap", text: '<span class="pl">brat:</span>', answers: ["brother"] },
    { type: "gap", text: '<span class="pl">babcia:</span>', answers: ["grandmother", "grandma"] },
    { type: "gap", text: '<span class="pl">dziadek:</span>', answers: ["grandfather", "grandpa"] },
    { type: "gap", text: '<span class="pl">rodzina:</span>', answers: ["family"] },
    { type: "header", text: "B. Zaimki dzierżawcze" },
    { type: "gap", text: '<span class="en">________ mother (moja mama)</span>', answers: ["my"] },
    { type: "gap", text: '<span class="en">________ father (twój tata)</span>', answers: ["your"] },
    { type: "gap", text: '<span class="en">________ brother (jej brat)</span>', answers: ["her"] },
    { type: "gap", text: '<span class="en">________ sister (jego siostra)</span>', answers: ["his"] },
    { type: "gap", text: '<span class="en">________ family (nasza rodzina)</span>', answers: ["our"] },
    { type: "header", text: "C. Uzupełnij" },
    { type: "gap", text: '<span class="en">I ________ a brother. (mam)</span>', answers: ["have"] },
    { type: "gap", text: '<span class="en">I ________ ________ a sister. (nie mam)</span>', answers: ["don't have", "do not have"] },
    { type: "gap", text: '<span class="en">My mother ________ Anna. (ma na imię)</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">________ is my father. 👨</span>', answers: ["this"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">To jest moja mama.</span>', answers: ["this is my mother", "this is my mother.", "this is my mum", "this is my mum."], wide: true },
    { type: "gap", text: '<span class="pl">Mam jednego brata.</span>', answers: ["i have one brother", "i have one brother.", "i have a brother", "i have a brother."], wide: true },
    { type: "gap", text: '<span class="pl">Moja rodzina jest duża.</span>', answers: ["my family is big", "my family is big."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mam siostry.</span>', answers: ["i don't have a sister", "i do not have a sister", "i don't have a sister.", "i don't have any sister"], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">"I have sister." → (poprawnie)</span>', answers: ["i have a sister", "i have a sister."], wide: true },
    { type: "gap", text: '<span class="en">"My name mother is Anna." → (poprawnie)</span>', answers: ["my mother is anna", "my mother is anna.", "my mother's name is anna", "my mother's name is anna."], wide: true }
  ],
  test: [
    { q: "Co znaczy „brother"?", opcje: ["siostra", "brat", "mama", "tata"], poprawna: 1, wyjasnienie: "„Brother" = brat." },
    { q: "Jak powiesz „babcia"?", opcje: ["grandfather", "mother", "grandmother", "aunt"], poprawna: 2, wyjasnienie: "„Grandmother" = babcia." },
    { q: "Co znaczy „my family"?", opcje: ["twoja rodzina", "moja rodzina", "jego rodzina", "ich rodzina"], poprawna: 1, wyjasnienie: "„My" = mój/moja/moje." },
    { q: "Jak powiesz „Mam brata"?", opcje: ["I have brother", "I have a brother", "I am a brother", "I a brother have"], poprawna: 1, wyjasnienie: "„I have a brother" (z „a" przed „brother")." },
    { q: "Co znaczy „sister"?", opcje: ["brat", "siostra", "ciocia", "kuzynka"], poprawna: 1, wyjasnienie: "„Sister" = siostra." },
    { q: "Który zaimek znaczy „jej"?", opcje: ["his", "her", "our", "their"], poprawna: 1, wyjasnienie: "„Her" = jej. „His" = jego." }
  ]
};

/* ============================================================
   A0-7 — Ciało
============================================================ */
window.LESSON_DATA["A0-7"] = {
  tytul: "Ciało",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Części ciała</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">head</td><td>głowa 👤</td></tr>
      <tr><td class="en">hair</td><td>włosy 💇</td></tr>
      <tr><td class="en">face</td><td>twarz 🙂</td></tr>
      <tr><td class="en">eye / eyes</td><td>oko / oczy 👁️</td></tr>
      <tr><td class="en">ear / ears</td><td>ucho / uszy 👂</td></tr>
      <tr><td class="en">nose</td><td>nos 👃</td></tr>
      <tr><td class="en">mouth</td><td>usta 👄</td></tr>
      <tr><td class="en">tooth / teeth</td><td>ząb / zęby 🦷</td></tr>
      <tr><td class="en">hand / hands</td><td>ręka / ręce ✋</td></tr>
      <tr><td class="en">arm / arms</td><td>ramiona 💪</td></tr>
      <tr><td class="en">leg / legs</td><td>noga / nogi 🦵</td></tr>
      <tr><td class="en">foot / feet</td><td>stopa / stopy 🦶</td></tr>
      <tr><td class="en">body</td><td>ciało</td></tr>
    </table>

    <h3>Liczba mnoga nieregularna</h3>
    <table>
      <tr><td class="en">one tooth → two teeth</td><td>jeden ząb → dwa zęby</td></tr>
      <tr><td class="en">one foot → two feet</td><td>jedna stopa → dwie stopy</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">I have two eyes. 👁️👁️</td><td>Mam dwoje oczu.</td></tr>
      <tr><td class="en">My hair is brown.</td><td>Moje włosy są brązowe.</td></tr>
      <tr><td class="en">I have a small nose.</td><td>Mam mały nos.</td></tr>
      <tr><td class="en">I have big hands.</td><td>Mam duże dłonie.</td></tr>
    </table>

    <h3>Przymiotniki — duży i mały</h3>
    <table>
      <tr><td class="en">big</td><td>duży</td></tr>
      <tr><td class="en">small</td><td>mały</td></tr>
      <tr><td class="en">long</td><td>długi</td></tr>
      <tr><td class="en">short</td><td>krótki</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>tooth → teeth</b> (ząb → zęby)<br>
      • <b>foot → feet</b> (stopa → stopy)<br>
      • <b>hair</b> — nie ma liczby mnogiej: <span class="en">My hair is long.</span> (nie „hairs")
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz po angielsku" },
    { type: "gap", text: '<span class="pl">głowa:</span>', answers: ["head"] },
    { type: "gap", text: '<span class="pl">oko:</span>', answers: ["eye"] },
    { type: "gap", text: '<span class="pl">ucho:</span>', answers: ["ear"] },
    { type: "gap", text: '<span class="pl">nos:</span>', answers: ["nose"] },
    { type: "gap", text: '<span class="pl">usta:</span>', answers: ["mouth"] },
    { type: "gap", text: '<span class="pl">ręka:</span>', answers: ["hand"] },
    { type: "gap", text: '<span class="pl">noga:</span>', answers: ["leg"] },
    { type: "gap", text: '<span class="pl">włosy:</span>', answers: ["hair"] },
    { type: "header", text: "B. Liczba mnoga" },
    { type: "gap", text: '<span class="en">one tooth → two ________</span>', answers: ["teeth"] },
    { type: "gap", text: '<span class="en">one foot → two ________</span>', answers: ["feet"] },
    { type: "gap", text: '<span class="en">one eye → two ________</span>', answers: ["eyes"] },
    { type: "gap", text: '<span class="en">one hand → two ________</span>', answers: ["hands"] },
    { type: "header", text: "C. Uzupełnij" },
    { type: "gap", text: '<span class="en">I have two ________. 👁️👁️</span>', answers: ["eyes"] },
    { type: "gap", text: '<span class="en">My ________ is brown. (włosy)</span>', answers: ["hair"] },
    { type: "gap", text: '<span class="en">I have a small ________. 👃</span>', answers: ["nose"] },
    { type: "gap", text: '<span class="en">My ________ is big. (głowa)</span>', answers: ["head"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam dwoje oczu.</span>', answers: ["i have two eyes", "i have two eyes.", "i've got two eyes"], wide: true },
    { type: "gap", text: '<span class="pl">Moje włosy są długie.</span>', answers: ["my hair is long", "my hair is long."], wide: true },
    { type: "gap", text: '<span class="pl">Mam mały nos.</span>', answers: ["i have a small nose", "i have a small nose."], wide: true },
    { type: "gap", text: '<span class="pl">Moja ręka jest duża.</span>', answers: ["my hand is big", "my hand is big."], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">"two foots" → (poprawnie)</span>', answers: ["two feet", "two feet."], wide: true },
    { type: "gap", text: '<span class="en">"two tooths" → (poprawnie)</span>', answers: ["two teeth", "two teeth."], wide: true }
  ],
  test: [
    { q: "Co znaczy „head"?", opcje: ["ręka", "głowa", "noga", "oko"], poprawna: 1, wyjasnienie: "„Head" = głowa." },
    { q: "Jak powiesz „oko"?", opcje: ["ear", "eye", "nose", "mouth"], poprawna: 1, wyjasnienie: "„Eye" = oko." },
    { q: "Liczba mnoga od „tooth" to:", opcje: ["tooths", "toothes", "teeth", "tooth"], poprawna: 2, wyjasnienie: "„Tooth → teeth" — nieregularna." },
    { q: "Liczba mnoga od „foot" to:", opcje: ["foots", "feets", "feet", "footes"], poprawna: 2, wyjasnienie: "„Foot → feet" — nieregularna." },
    { q: "Co znaczy „hand"?", opcje: ["głowa", "ręka", "noga", "stopa"], poprawna: 1, wyjasnienie: "„Hand" = ręka (dłoń)." },
    { q: "Jak powiesz „Mam dwoje oczu"?", opcje: ["I have two eyes", "I have two eye", "I has two eyes", "I two eyes have"], poprawna: 0, wyjasnienie: "„I have two eyes" — z liczbą mnogą." }
  ]
};

/* ============================================================
   A0-8 — Jedzenie i picie
============================================================ */
window.LESSON_DATA["A0-8"] = {
  tytul: "Jedzenie i picie",
  poziom: "A0",
  dzial: "A0",
  teoria: `
    <h3>Podstawowe jedzenie</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">apple 🍎</td><td>jabłko</td></tr>
      <tr><td class="en">banana 🍌</td><td>banan</td></tr>
      <tr><td class="en">orange 🍊</td><td>pomarańcza</td></tr>
      <tr><td class="en">bread 🍞</td><td>chleb</td></tr>
      <tr><td class="en">cheese 🧀</td><td>ser</td></tr>
      <tr><td class="en">egg 🥚</td><td>jajko</td></tr>
      <tr><td class="en">meat 🍖</td><td>mięso</td></tr>
      <tr><td class="en">fish 🐟</td><td>ryba</td></tr>
      <tr><td class="en">rice 🍚</td><td>ryż</td></tr>
      <tr><td class="en">soup 🍲</td><td>zupa</td></tr>
      <tr><td class="en">salad 🥗</td><td>sałatka</td></tr>
      <tr><td class="en">pizza 🍕</td><td>pizza</td></tr>
      <tr><td class="en">chocolate 🍫</td><td>czekolada</td></tr>
    </table>

    <h3>Picie</h3>
    <table>
      <tr><td class="en">water 💧</td><td>woda</td></tr>
      <tr><td class="en">milk 🥛</td><td>mleko</td></tr>
      <tr><td class="en">tea 🍵</td><td>herbata</td></tr>
      <tr><td class="en">coffee ☕</td><td>kawa</td></tr>
      <tr><td class="en">juice 🧃</td><td>sok</td></tr>
    </table>

    <h3>Posiłki</h3>
    <table>
      <tr><td class="en">breakfast 🍳</td><td>śniadanie</td></tr>
      <tr><td class="en">lunch 🥪</td><td>lunch (obiad w szkole)</td></tr>
      <tr><td class="en">dinner 🍽️</td><td>obiad (wieczorem)</td></tr>
    </table>

    <h3>„Lubię" i „nie lubię"</h3>
    <table>
      <tr><td class="en">I like pizza. 🍕</td><td>Lubię pizzę.</td></tr>
      <tr><td class="en">I love chocolate. 🍫</td><td>Uwielbiam czekoladę.</td></tr>
      <tr><td class="en">I don't like fish. 🐟</td><td>Nie lubię ryby.</td></tr>
      <tr><td class="en">I hate soup. 🍲</td><td>Nie cierpię zupy.</td></tr>
    </table>

    <h3>Jak zapytać, co ktoś lubi?</h3>
    <p><span class="en">Do you like pizza?</span> — Lubisz pizzę?</p>
    <p>Odpowiedź: <span class="en">Yes, I do.</span> / <span class="en">No, I don't.</span></p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      • <b>I like</b> = Lubię<br>
      • <b>I don't like</b> = Nie lubię<br>
      • <b>I love</b> = Uwielbiam<br>
      • <b>I hate</b> = Nie cierpię<br>
      • Po „I like" rzeczownik bez „a": <span class="en">I like pizza.</span> (nie „I like a pizza")
    </div>
  `,
  karta: [
    { type: "header", text: "A. Napisz po angielsku" },
    { type: "gap", text: '<span class="pl">jabłko:</span>', answers: ["apple"] },
    { type: "gap", text: '<span class="pl">chleb:</span>', answers: ["bread"] },
    { type: "gap", text: '<span class="pl">mleko:</span>', answers: ["milk"] },
    { type: "gap", text: '<span class="pl">woda:</span>', answers: ["water"] },
    { type: "gap", text: '<span class="pl">ser:</span>', answers: ["cheese"] },
    { type: "gap", text: '<span class="pl">jajko:</span>', answers: ["egg"] },
    { type: "gap", text: '<span class="pl">ryba:</span>', answers: ["fish"] },
    { type: "gap", text: '<span class="pl">herbata:</span>', answers: ["tea"] },
    { type: "header", text: "B. Uzupełnij" },
    { type: "gap", text: '<span class="en">I ________ pizza. 🍕 (lubię)</span>', answers: ["like"] },
    { type: "gap", text: '<span class="en">I ________ like fish. 🐟 (nie lubię)</span>', answers: ["don't", "do not"] },
    { type: "gap", text: '<span class="en">I ________ chocolate. 🍫 (uwielbiam)</span>', answers: ["love"] },
    { type: "gap", text: '<span class="en">Do you ________ pizza?</span>', answers: ["like"] },
    { type: "gap", text: '<span class="en">Yes, I ________.</span>', answers: ["do"] },
    { type: "gap", text: '<span class="en">No, I ________.</span>', answers: ["don't", "do not"] },
    { type: "header", text: "C. Posiłki" },
    { type: "gap", text: '<span class="pl">śniadanie:</span>', answers: ["breakfast"] },
    { type: "gap", text: '<span class="pl">obiad (wieczorem):</span>', answers: ["dinner"] },
    { type: "gap", text: '<span class="pl">lunch (w szkole):</span>', answers: ["lunch"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Lubię pizzę.</span>', answers: ["i like pizza", "i like pizza."], wide: true },
    { type: "gap", text: '<span class="pl">Nie lubię ryby.</span>', answers: ["i don't like fish", "i do not like fish", "i don't like fish.", "i do not like fish."], wide: true },
    { type: "gap", text: '<span class="pl">Lubisz czekoladę?</span>', answers: ["do you like chocolate", "do you like chocolate?"], wide: true },
    { type: "gap", text: '<span class="pl">Uwielbiam wodę.</span>', answers: ["i love water", "i love water."], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">"I like a pizza." → (poprawnie)</span>', answers: ["i like pizza", "i like pizza."], wide: true },
    { type: "gap", text: '<span class="en">"I no like fish." → (poprawnie)</span>', answers: ["i don't like fish", "i do not like fish", "i don't like fish.", "i don't like fish at all"], wide: true }
  ],
  test: [
    { q: "Co znaczy „bread"?", opcje: ["masło", "chleb", "ser", "jajko"], poprawna: 1, wyjasnienie: "„Bread" = chleb." },
    { q: "Jak powiesz „woda"?", opcje: ["milk", "water", "tea", "juice"], poprawna: 1, wyjasnienie: "„Water" = woda." },
    { q: "Co znaczy „I like pizza"?", opcje: ["Mam pizzę", "Lubię pizzę", "Jem pizzę", "Chcę pizzę"], poprawna: 1, wyjasnienie: "„I like" = Lubię." },
    { q: "Jak powiesz „Nie lubię ryby"?", opcje: ["I no like fish", "I don't like fish", "I not like fish", "I doesn't like fish"], poprawna: 1, wyjasnienie: "„I don't like" = Nie lubię." },
    { q: "Co znaczy „breakfast"?", opcje: ["obiad", "kolacja", "śniadanie", "lunch"], poprawna: 2, wyjasnienie: "„Breakfast" = śniadanie." },
    { q: "Które zdanie jest poprawne?", opcje: ["I like a pizza", "I like pizza", "I likes pizza", "I like pizzas"], poprawna: 1, wyjasnienie: "Po „I like" rzeczownik bez „a": „I like pizza"." }
  ]
};