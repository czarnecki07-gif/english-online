window.LESSON_DATA = window.LESSON_DATA || {};

/* ============================================================
   G1A1 – Present Simple
============================================================ */
window.LESSON_DATA["G1A1"] = {
  tytul: "Present Simple",
  poziom: "A1",
  dzial: "G1",
  teoria: `
    <h3>Kiedy używamy Present Simple?</h3>
    <p>Present Simple używamy, gdy mówimy o:</p>
    <ul>
      <li><b>codziennych czynnościach</b> – <span class="en">I get up at 7.</span></li>
      <li><b>zwyczajach i nawykach</b> – <span class="en">She drinks coffee every morning.</span></li>
      <li><b>faktach</b> – <span class="en">Water boils at 100°C.</span></li>
      <li><b>rzeczach, które zazwyczaj się zdarzają</b> – <span class="en">He plays football on Saturdays.</span></li>
    </ul>

    <h3>Budowa zdania</h3>
    <table>
      <tr><th>Osoba</th><th>Twierdzenie</th><th>Przeczenie</th><th>Pytanie</th></tr>
      <tr><td>I / You / We / They</td><td class="en">work</td><td class="en">don't work</td><td class="en">Do you work?</td></tr>
      <tr><td>He / She / It</td><td class="en">work<b>s</b></td><td class="en">doesn't work</td><td class="en">Does she work?</td></tr>
    </table>

    <div class="tip-box">
      <b>⚠️ Pamiętaj:</b> w 3. osobie liczby pojedynczej (he / she / it) dodajemy <b>-s</b> do czasownika.<br>
      <span class="en">She works. He lives here. It rains a lot.</span>
    </div>

    <h3>Końcówka -s – zasady pisowni</h3>
    <table>
      <tr><th>Zasada</th><th>Przykład</th></tr>
      <tr><td>Zazwyczaj dodajemy <b>-s</b></td><td class="en">work → works</td></tr>
      <tr><td>Po <b>-s, -sh, -ch, -x, -o</b> dodajemy <b>-es</b></td><td class="en">go → goes, watch → watches</td></tr>
      <tr><td>Spółgłoska + <b>y</b> → <b>-ies</b></td><td class="en">study → studies</td></tr>
      <tr><td>Samogłoska + <b>y</b> → <b>-s</b></td><td class="en">play → plays</td></tr>
    </table>

    <h3>Przeczenie i pytania</h3>
    <p>W przeczeniach i pytaniach używamy <b>do / does + czasownik w formie podstawowej</b>:</p>
    <ul>
      <li><span class="en">I don't work.</span> <span class="pl">(Nie pracuję.)</span></li>
      <li><span class="en">She doesn't work.</span> <span class="pl">(Ona nie pracuje.)</span></li>
      <li><span class="en">Do you work?</span> <span class="pl">(Czy pracujesz?)</span></li>
      <li><span class="en">Does she work?</span> <span class="pl">(Czy ona pracuje?)</span></li>
    </ul>

    <div class="tip-box">
      <b>⚠️ Ważne:</b> po <b>does / doesn't</b> czasownik jest w formie podstawowej (bez -s).<br>
      ✅ <span class="en">Does she work?</span> &nbsp;&nbsp; ❌ <span style="color:#ef4444">Does she works?</span>
    </div>

    <h3>Typowe określenia czasu</h3>
    <table>
      <tr><td class="en">always</td><td class="pl">zawsze</td><td class="en">usually</td><td class="pl">zazwyczaj</td></tr>
      <tr><td class="en">often</td><td class="pl">często</td><td class="en">sometimes</td><td class="pl">czasami</td></tr>
      <tr><td class="en">never</td><td class="pl">nigdy</td><td class="en">every day</td><td class="pl">codziennie</td></tr>
      <tr><td class="en">every week</td><td class="pl">co tydzień</td><td class="en">on Mondays</td><td class="pl">w poniedziałki</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdania poprawną formą czasownika" },
    { type: "gap", text: '<span class="en">I ________ (work) in a shop.</span>', answers: ["work"] },
    { type: "gap", text: '<span class="en">She ________ (go) to school every day.</span>', answers: ["goes"] },
    { type: "gap", text: '<span class="en">He ________ (watch) TV every evening.</span>', answers: ["watches"] },
    { type: "gap", text: '<span class="en">My sister ________ (study) at university.</span>', answers: ["studies"] },
    { type: "gap", text: '<span class="en">We ________ (play) football on Sundays.</span>', answers: ["play"] },
    { type: "gap", text: '<span class="en">Tom ________ (live) in Warsaw.</span>', answers: ["lives"] },
    { type: "header", text: "B. Zrób przeczenie" },
    { type: "gap", text: '<span class="en">She works here. → She ________ here.</span>', answers: ["doesn't work", "does not work"], wide: true },
    { type: "gap", text: '<span class="en">They like fish. → They ________ fish.</span>', answers: ["don't like", "do not like"], wide: true },
    { type: "gap", text: '<span class="en">He lives in London. → He ________ in London.</span>', answers: ["doesn't live", "does not live"], wide: true },
    { type: "header", text: "C. Zrób pytanie" },
    { type: "gap", text: '<span class="en">You work here. → ________ here?</span>', answers: ["do you work", "do you work?"], wide: true },
    { type: "gap", text: '<span class="en">She speaks English. → ________ English?</span>', answers: ["does she speak", "does she speak?"], wide: true },
    { type: "gap", text: '<span class="en">They live in Kraków. → ________ in Kraków?</span>', answers: ["do they live", "do they live?"], wide: true },
    { type: "header", text: "D. Wybierz poprawną formę" },
    { type: "gap", text: '<span class="en">My mother ________ (drink/drinks) coffee every morning.</span>', answers: ["drinks"] },
    { type: "gap", text: '<span class="en">We ________ (don\'t have / doesn\'t have) a car.</span>', answers: ["don't have", "do not have"], wide: true },
    { type: "gap", text: '<span class="en">My brother ________ (have/has) a dog.</span>', answers: ["has"] },
    { type: "header", text: "E. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Ona pracuje w sklepie.</span>', answers: ["she works in a shop", "she works in a shop."], wide: true },
    { type: "gap", text: '<span class="pl">Wstaję o 7.</span> <span style="color:#64748b;font-size:.85rem;">(get up – wstawać)</span>', answers: ["i get up at 7", "i get up at seven", "i get up at 7.", "i get up at seven."], wide: true },
    { type: "gap", text: '<span class="pl">On nie lubi kawy.</span>', answers: ["he doesn't like coffee", "he does not like coffee", "he doesn't like coffee.", "he does not like coffee."], wide: true },
    { type: "gap", text: '<span class="pl">Czy mówisz po angielsku?</span>', answers: ["do you speak english", "do you speak english?"], wide: true },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">She go to school every day. → ________</span>', answers: ["she goes to school every day", "she goes to school every day."], wide: true },
    { type: "gap", text: '<span class="en">Does you like tea? → ________</span>', answers: ["do you like tea", "do you like tea?"], wide: true },
    { type: "gap", text: '<span class="en">He don\'t work here. → ________</span>', answers: ["he doesn't work here", "he does not work here", "he doesn't work here.", "he does not work here."], wide: true },
    { type: "gap", text: '<span class="en">I get up usually at 7. → ________</span> <span style="color:#64748b;font-size:.85rem;">(przysłówki częstości idą przed czasownikiem)</span>', answers: ["i usually get up at 7", "i usually get up at seven", "i usually get up at 7.", "i usually get up at seven."], wide: true },
    { type: "header", text: "G. Napisz o sobie" },
    { type: "open", text: "Napisz 3 zdania o swojej codziennej rutynie. Użyj Present Simple.", placeholder: "np. I get up at 7. I go to school by bus. I watch TV in the evening." }
  ],
  test: [
    { q: "She ______ to school every day.", opcje: ["go", "goes", "is going", "gone"], poprawna: 1, wyjasnienie: "3 os. l.poj. (she) → czasownik + -s → goes." },
    { q: "I ______ coffee.", opcje: ["don't like", "doesn't like", "am not like", "not like"], poprawna: 0, wyjasnienie: "Z 'I' przeczenie tworzymy przez 'don't' + czasownik." },
    { q: "______ he work here?", opcje: ["Do", "Does", "Is", "Are"], poprawna: 1, wyjasnienie: "Pytanie w 3 os. l.poj. → Does + czasownik (bez -s)." },
    { q: "They ______ football on Sundays.", opcje: ["play", "plays", "is playing", "playing"], poprawna: 0, wyjasnienie: "Z 'they' czasownik jest w formie podstawowej." },
    { q: "My father ______ in a bank.", opcje: ["work", "works", "working", "is work"], poprawna: 1, wyjasnienie: "3 os. l.poj. (my father = he) → works." },
    { q: "We ______ to the cinema very often.", opcje: ["go", "goes", "don't go", "doesn't go"], poprawna: 2, wyjasnienie: "Przeczenie z 'we' → don't go." },
    { q: "______ you like tea?", opcje: ["Do", "Does", "Are", "Is"], poprawna: 0, wyjasnienie: "Pytanie z 'you' → Do you...?" },
    { q: "She ______ TV every evening.", opcje: ["watch", "watches", "is watch", "watching"], poprawna: 1, wyjasnienie: "3 os. l.poj. + końcówka -es po 'ch' → watches." },
    { q: "I ______ from Poland.", opcje: ["am", "is", "are", "be"], poprawna: 0, wyjasnienie: "Czasownik 'be' z 'I' → am." },
    { q: "He ______ have a car.", opcje: ["don't", "doesn't", "isn't", "aren't"], poprawna: 1, wyjasnienie: "Przeczenie z 'he' → doesn't + czasownik podstawowy." }
  ]
};

/* ============================================================
   G2A1 – Past Simple (was/were + regularne)
============================================================ */
window.LESSON_DATA["G2A1"] = {
  tytul: "Past Simple – podstawy",
  poziom: "A1",
  dzial: "G2",
  teoria: `
    <h3>Kiedy używamy Past Simple?</h3>
    <p>Past Simple używamy, gdy mówimy o czynnościach, które:</p>
    <ul>
      <li><b>wydarzyły się w przeszłości</b> – <span class="en">I visited my grandmother yesterday.</span></li>
      <li><b>zakończyły się</b> – <span class="en">She worked in a shop last year.</span></li>
      <li><b>miały miejsce w określonym czasie</b> – <span class="en">They went to London in 2024.</span></li>
    </ul>

    <h3>Budowa zdania</h3>
    <table>
      <tr><th>Osoba</th><th>Twierdzenie</th><th>Przeczenie</th><th>Pytanie</th></tr>
      <tr><td>wszystkie osoby</td><td class="en">worked</td><td class="en">didn't work</td><td class="en">Did you work?</td></tr>
    </table>

    <div class="tip-box">
      <b>⚠️ Ważne:</b> po <b>did / didn't</b> czasownik jest w formie podstawowej (bez -ed).<br>
      ✅ <span class="en">Did you go?</span> &nbsp;&nbsp; ❌ <span style="color:#ef4444">Did you went?</span>
    </div>

    <h3>Czasowniki regularne – dodajemy -ed</h3>
    <table>
      <tr><th>Zasada</th><th>Przykład</th></tr>
      <tr><td>Zazwyczaj <b>-ed</b></td><td class="en">work → worked</td></tr>
      <tr><td>Kończy się na <b>-e</b> → <b>-d</b></td><td class="en">like → liked</td></tr>
      <tr><td>Spółgłoska + <b>y</b> → <b>-ied</b></td><td class="en">study → studied</td></tr>
      <tr><td>1 sylaba CVC → podwój spółgłoskę</td><td class="en">stop → stopped</td></tr>
    </table>

    <h3>Najważniejsze czasowniki nieregularne</h3>
    <table>
      <tr><th>Bezokolicznik</th><th>Past Simple</th><th>Tłumaczenie</th></tr>
      <tr><td class="en">be</td><td class="en">was / were</td><td class="pl">być</td></tr>
      <tr><td class="en">go</td><td class="en">went</td><td class="pl">iść, jechać</td></tr>
      <tr><td class="en">have</td><td class="en">had</td><td class="pl">mieć</td></tr>
      <tr><td class="en">do</td><td class="en">did</td><td class="pl">robić</td></tr>
      <tr><td class="en">see</td><td class="en">saw</td><td class="pl">widzieć</td></tr>
      <tr><td class="en">get</td><td class="en">got</td><td class="pl">dostać</td></tr>
      <tr><td class="en">make</td><td class="en">made</td><td class="pl">robić, tworzyć</td></tr>
      <tr><td class="en">take</td><td class="en">took</td><td class="pl">brać</td></tr>
      <tr><td class="en">come</td><td class="en">came</td><td class="pl">przychodzić</td></tr>
      <tr><td class="en">buy</td><td class="en">bought</td><td class="pl">kupować</td></tr>
      <tr><td class="en">eat</td><td class="en">ate</td><td class="pl">jeść</td></tr>
    </table>

    <h3>Was / Were (czasownik „być" w przeszłości)</h3>
    <table>
      <tr><th>Osoba</th><th>Twierdzenie</th><th>Przeczenie</th><th>Pytanie</th></tr>
      <tr><td>I / He / She / It</td><td class="en">was</td><td class="en">wasn't</td><td class="en">Was he...?</td></tr>
      <tr><td>You / We / They</td><td class="en">were</td><td class="en">weren't</td><td class="en">Were they...?</td></tr>
    </table>
    <p><span class="en">I was tired. He was at home. We were late. They were at school.</span></p>

    <h3>Określenia czasu</h3>
    <table>
      <tr><td class="en">yesterday</td><td class="pl">wczoraj</td><td class="en">last week</td><td class="pl">w zeszłym tygodniu</td></tr>
      <tr><td class="en">last year</td><td class="pl">w zeszłym roku</td><td class="en">two days ago</td><td class="pl">dwa dni temu</td></tr>
      <tr><td class="en">in 2023</td><td class="pl">w 2023 roku</td><td class="en">on Monday</td><td class="pl">w poniedziałek</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij czasownikiem regularnym" },
    { type: "gap", text: '<span class="en">I ________ (watch) TV yesterday.</span>', answers: ["watched"] },
    { type: "gap", text: '<span class="en">She ________ (visit) her grandmother last week.</span>', answers: ["visited"] },
    { type: "gap", text: '<span class="en">We ________ (play) football on Saturday.</span>', answers: ["played"] },
    { type: "gap", text: '<span class="en">He ________ (work) yesterday.</span>', answers: ["worked"] },
    { type: "gap", text: '<span class="en">They ________ (study) English last year.</span>', answers: ["studied"] },
    { type: "gap", text: '<span class="en">We ________ (stop) at the station.</span>', answers: ["stopped"] },
    { type: "header", text: "B. Uzupełnij czasownikiem nieregularnym" },
    { type: "gap", text: '<span class="en">They ________ (go) to London last year.</span>', answers: ["went"] },
    { type: "gap", text: '<span class="en">I ________ (have) breakfast at 8.</span>', answers: ["had"] },
    { type: "gap", text: '<span class="en">She ________ (see) a film yesterday.</span>', answers: ["saw"] },
    { type: "gap", text: '<span class="en">We ________ (buy) a new computer.</span>', answers: ["bought"] },
    { type: "gap", text: '<span class="en">He ________ (eat) pizza last night.</span>', answers: ["ate"] },
    { type: "gap", text: '<span class="en">They ________ (come) home late.</span>', answers: ["came"] },
    { type: "header", text: "C. Was czy were?" },
    { type: "gap", text: '<span class="en">I ________ tired yesterday.</span>', answers: ["was"] },
    { type: "gap", text: '<span class="en">She ________ at home.</span>', answers: ["was"] },
    { type: "gap", text: '<span class="en">We ________ late.</span>', answers: ["were"] },
    { type: "gap", text: '<span class="en">They ________ happy.</span>', answers: ["were"] },
    { type: "gap", text: '<span class="en">You ________ at school.</span>', answers: ["were"] },
    { type: "header", text: "D. Zrób przeczenie" },
    { type: "gap", text: '<span class="en">I watched TV. → I ________ TV.</span>', answers: ["didn't watch", "did not watch"], wide: true },
    { type: "gap", text: '<span class="en">She went home. → She ________ home.</span>', answers: ["didn't go", "did not go"], wide: true },
    { type: "gap", text: '<span class="en">We were tired. → We ________ tired.</span>', answers: ["weren't", "were not"], wide: true },
    { type: "header", text: "E. Zrób pytanie" },
    { type: "gap", text: '<span class="en">You watched TV. → ________ TV?</span>', answers: ["did you watch", "did you watch?"], wide: true },
    { type: "gap", text: '<span class="en">She went home. → ________ home?</span>', answers: ["did she go", "did she go?"], wide: true },
    { type: "gap", text: '<span class="en">They were tired. → ________ tired?</span>', answers: ["were they", "were they?"], wide: true },
    { type: "header", text: "F. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Wczoraj poszedłem do szkoły.</span>', answers: ["i went to school yesterday", "yesterday i went to school", "i went to school yesterday.", "yesterday i went to school."], wide: true },
    { type: "gap", text: '<span class="pl">Ona kupiła nowy telefon.</span>', answers: ["she bought a new phone", "she bought a new phone."], wide: true },
    { type: "gap", text: '<span class="pl">Byliśmy zmęczeni.</span>', answers: ["we were tired", "we were tired."], wide: true },
    { type: "header", text: "G. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań o tym, co robiłeś wczoraj. Użyj Past Simple.", placeholder: "np. Yesterday I got up at 7. I went to school..." }
  ],
  test: [
    { q: "I ______ to school yesterday.", opcje: ["go", "went", "gone", "going"], poprawna: 1, wyjasnienie: "'go' jest nieregularny → Past Simple = went." },
    { q: "She ______ TV last night.", opcje: ["watched", "watch", "watching", "watches"], poprawna: 0, wyjasnienie: "Czasownik regularny + -ed → watched." },
    { q: "We ______ breakfast at 8.", opcje: ["have", "had", "has", "having"], poprawna: 1, wyjasnienie: "'have' nieregularny → had." },
    { q: "They ______ at home yesterday.", opcje: ["was", "were", "are", "is"], poprawna: 1, wyjasnienie: "Z 'they' → were." },
    { q: "He ______ his friend on Monday.", opcje: ["saw", "see", "sees", "seeing"], poprawna: 0, wyjasnienie: "'see' nieregularny → saw." },
    { q: "______ you go to the cinema?", opcje: ["Do", "Did", "Was", "Were"], poprawna: 1, wyjasnienie: "Pytanie w Past Simple → Did + czasownik podstawowy." },
    { q: "She ______ go to school yesterday.", opcje: ["doesn't", "didn't", "wasn't", "weren't"], poprawna: 1, wyjasnienie: "Przeczenie w Past Simple → didn't + czasownik." },
    { q: "I ______ a new phone last week.", opcje: ["buy", "bought", "buyed", "buying"], poprawna: 1, wyjasnienie: "'buy' nieregularny → bought." },
    { q: "We ______ football on Saturday.", opcje: ["play", "played", "plaied", "playing"], poprawna: 1, wyjasnienie: "Regularny: play → played." },
    { q: "She ______ tired yesterday.", opcje: ["was", "were", "is", "are"], poprawna: 0, wyjasnienie: "Z 'she' → was." }
  ]
};

/* ============================================================
   G3A1 – Future Simple (will / going to)
============================================================ */
window.LESSON_DATA["G3A1"] = {
  tytul: "Future Simple – will i going to",
  poziom: "A1",
  dzial: "G3",
  teoria: `
    <h3>Kiedy używamy Future Simple (will)?</h3>
    <p>Używamy <b>will + czasownik</b>, gdy mówimy o:</p>
    <ul>
      <li><b>decyzjach podjętych w chwili mówienia</b> – <span class="en">I'll help you.</span></li>
      <li><b>obietnicach</b> – <span class="en">I'll call you tomorrow.</span></li>
      <li><b>ofertach</b> – <span class="en">I'll carry your bag.</span></li>
      <li><b>przewidywaniach</b> – <span class="en">I think it will rain tomorrow.</span></li>
    </ul>

    <h3>Budowa zdań z will</h3>
    <table>
      <tr><th>Twierdzenie</th><th>Przeczenie</th><th>Pytanie</th></tr>
      <tr>
        <td class="en">I will work.</td>
        <td class="en">I won't work.</td>
        <td class="en">Will you work?</td>
      </tr>
    </table>
    <p>Forma jest taka sama dla wszystkich osób. Skróty: <span class="en">I'll = I will</span>, <span class="en">won't = will not</span>.</p>

    <h3>Be going to</h3>
    <p>Używamy <b>be going to + czasownik</b>, gdy:</p>
    <ul>
      <li><b>mamy zamiar coś zrobić</b> – <span class="en">I'm going to learn English.</span></li>
      <li><b>coś planujemy</b> – <span class="en">She's going to buy a new phone.</span></li>
      <li><b>przewidujemy na podstawie tego, co widzimy</b> – <span class="en">Look at those clouds! It's going to rain.</span></li>
    </ul>
    <table>
      <tr><th>Osoba</th><th>Budowa</th><th>Przykład</th></tr>
      <tr><td>I</td><td class="en">am going to</td><td class="en">I am going to work.</td></tr>
      <tr><td>He / She / It</td><td class="en">is going to</td><td class="en">She is going to study.</td></tr>
      <tr><td>You / We / They</td><td class="en">are going to</td><td class="en">They are going to travel.</td></tr>
    </table>

    <div class="tip-box">
      <b>Will czy going to?</b><br>
      <span class="en">I think it will rain tomorrow.</span> – moje <b>przewidywanie</b> (bez dowodów).<br>
      <span class="en">Look at those clouds! It's going to rain.</span> – <b>widzę oznaki</b>, że zaraz będzie padać.
    </div>

    <h3>Określenia czasu</h3>
    <table>
      <tr><td class="en">tomorrow</td><td class="pl">jutro</td><td class="en">tonight</td><td class="pl">dziś wieczorem</td></tr>
      <tr><td class="en">next week</td><td class="pl">w przyszłym tygodniu</td><td class="en">next month</td><td class="pl">w przyszłym miesiącu</td></tr>
      <tr><td class="en">next year</td><td class="pl">w przyszłym roku</td><td class="en">soon</td><td class="pl">wkrótce</td></tr>
      <tr><td class="en">later</td><td class="pl">później</td><td class="en">in two days</td><td class="pl">za dwa dni</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij will" },
    { type: "gap", text: '<span class="en">I ________ (help) you.</span>', answers: ["will help", "'ll help"] },
    { type: "gap", text: '<span class="en">She ________ (come) tomorrow.</span>', answers: ["will come", "'ll come"] },
    { type: "gap", text: '<span class="en">We ________ (visit) you next week.</span>', answers: ["will visit", "'ll visit"] },
    { type: "gap", text: '<span class="en">They ________ (be) happy.</span>', answers: ["will be", "'ll be"] },
    { type: "gap", text: '<span class="en">He ________ (call) you later.</span>', answers: ["will call", "'ll call"] },
    { type: "header", text: "B. Zrób przeczenie z will" },
    { type: "gap", text: '<span class="en">I will go. → I ________ go.</span>', answers: ["won't", "will not"], wide: true },
    { type: "gap", text: '<span class="en">She will come. → She ________ come.</span>', answers: ["won't", "will not"], wide: true },
    { type: "gap", text: '<span class="en">They will help us. → They ________ help us.</span>', answers: ["won't", "will not"], wide: true },
    { type: "header", text: "C. Zrób pytanie z will" },
    { type: "gap", text: '<span class="en">You will come. → ________ come?</span>', answers: ["will you", "will you come", "will you come?"], wide: true },
    { type: "gap", text: '<span class="en">She will help us. → ________ us?</span>', answers: ["will she help", "will she help us", "will she help us?"], wide: true },
    { type: "gap", text: '<span class="en">They will be there. → ________ there?</span>', answers: ["will they be", "will they be there", "will they be there?"], wide: true },
    { type: "header", text: "D. Uzupełnij going to" },
    { type: "gap", text: '<span class="en">I ________ (study) tonight.</span>', answers: ["am going to study", "'m going to study"] },
    { type: "gap", text: '<span class="en">She ________ (buy) a car.</span>', answers: ["is going to buy", "'s going to buy"] },
    { type: "gap", text: '<span class="en">They ________ (travel) next month.</span>', answers: ["are going to travel", "'re going to travel"] },
    { type: "gap", text: '<span class="en">We ________ (watch) a film.</span>', answers: ["are going to watch", "'re going to watch"] },
    { type: "header", text: "E. Will czy going to?" },
    { type: "gap", text: '<span class="en">I think Poland ________ (will / going to) win.</span> <span style="color:#64748b;font-size:.85rem;">(przewidywanie)</span>', answers: ["will"] },
    { type: "gap", text: '<span class="en">Look at the clouds! It ________ (will / going to) rain.</span> <span style="color:#64748b;font-size:.85rem;">(widzę oznaki)</span>', answers: ["is going to", "'s going to"] },
    { type: "gap", text: '<span class="en">I\'m tired. I ________ (will / going to) go to bed.</span> <span style="color:#64748b;font-size:.85rem;">(decyzja teraz)</span>', answers: ["will"] },
    { type: "gap", text: '<span class="en">We have bought the tickets. We ________ (will / going to) travel to London.</span> <span style="color:#64748b;font-size:.85rem;">(plan)</span>', answers: ["are going to", "'re going to"] },
    { type: "header", text: "F. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Pomogę ci.</span>', answers: ["i will help you", "i'll help you", "i will help you.", "i'll help you."], wide: true },
    { type: "gap", text: '<span class="pl">Zamierzam uczyć się angielskiego.</span>', answers: ["i am going to learn english", "i'm going to learn english", "i am going to learn english.", "i'm going to learn english."], wide: true },
    { type: "gap", text: '<span class="pl">Myślę, że będzie padać.</span>', answers: ["i think it will rain", "i think it'll rain", "i think it will rain.", "i think it'll rain."], wide: true },
    { type: "header", text: "G. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań o swoich planach na przyszły tydzień. Użyj will i going to.", placeholder: "np. Next week I'm going to visit my grandmother. I will help her in the garden..." }
  ],
  test: [
    { q: "I ______ help you.", opcje: ["will", "am", "going", "do"], poprawna: 0, wyjasnienie: "Future Simple → will + czasownik." },
    { q: "She ______ visit us tomorrow.", opcje: ["will", "is", "does", "going"], poprawna: 0, wyjasnienie: "Future Simple z 'she' → will + czasownik." },
    { q: "They ______ travel next month.", opcje: ["are going to", "will to", "going", "is going"], poprawna: 0, wyjasnienie: "'be going to' z 'they' → are going to." },
    { q: "Look at the clouds! It ______ rain.", opcje: ["will", "is going to", "is", "does"], poprawna: 1, wyjasnienie: "Widzę oznaki → going to." },
    { q: "I think he ______ be happy.", opcje: ["will", "is going", "going to", "does"], poprawna: 0, wyjasnienie: "Przewidywanie → will be." },
    { q: "I ______ go to the party. I promise.", opcje: ["will", "am", "going", "do"], poprawna: 0, wyjasnienie: "Obietnica → will." },
    { q: "We ______ buy a new car. We have saved money.", opcje: ["will", "are going to", "going", "is"], poprawna: 1, wyjasnienie: "Plan podjęty wcześniej → going to." },
    { q: "It's cold. I ______ close the window.", opcje: ["will", "am", "going", "do"], poprawna: 0, wyjasnienie: "Decyzja w chwili mówienia → will." },
    { q: "She ______ study medicine next year.", opcje: ["will", "is going to", "going", "does"], poprawna: 1, wyjasnienie: "Zamiar → going to." },
    { q: "______ you help me?", opcje: ["Will", "Do", "Are", "Going"], poprawna: 0, wyjasnienie: "Pytanie o przyszłość → Will you help?" }
  ]
};


/* ============================================================
   G4A1 – Modal Verbs (can, must, should)
============================================================ */
window.LESSON_DATA["G4A1"] = {
  tytul: "Czasowniki modalne",
  poziom: "A1",
  dzial: "G4",
  teoria: `
    <h3>Co to są czasowniki modalne?</h3>
    <p>To specjalne czasowniki, które łączą się z <b>bezokolicznikiem bez "to"</b>: <span class="en">I can swim</span> (nie: I can to swim).</p>
    <p>Najważniejsze: <b>can, must, should</b>. Forma jest taka sama dla wszystkich osób (bez -s w 3 os.).</p>

    <h3>CAN – umiejętność i prośba</h3>
    <table>
      <tr><th>Twierdzenie</th><th>Przeczenie</th><th>Pytanie</th></tr>
      <tr><td class="en">I can swim.</td><td class="en">I can't swim.</td><td class="en">Can you swim?</td></tr>
    </table>
    <p><b>Umiejętność:</b> <span class="en">She can drive. They can speak English.</span></p>
    <p><b>Prośba:</b> <span class="en">Can you help me? Can I open the window?</span></p>

    <h3>MUST – konieczność</h3>
    <table>
      <tr><th>Twierdzenie</th><th>Przeczenie (zakaz)</th></tr>
      <tr><td class="en">You must wear a seat belt.</td><td class="en">You mustn't smoke here.</td></tr>
    </table>
    <p><b>must</b> = muszę (osobiste przekonanie, silna konieczność).</p>
    <p><b>mustn't</b> = nie wolno (zakaz).</p>

    <h3>SHOULD – rada</h3>
    <table>
      <tr><th>Twierdzenie</th><th>Przeczenie</th></tr>
      <tr><td class="en">You should study more.</td><td class="en">You shouldn't worry.</td></tr>
    </table>
    <p><b>should</b> = powinienem (dobre rady).</p>

    <div class="tip-box">
      <b>Ważne:</b> po modalnych <b>NIE dodajemy</b> "to" ani "-s" w 3 os.<br>
      ✅ <span class="en">She can swim.</span> &nbsp;&nbsp; ❌ <span style="color:#991b1b">She can to swim / She cans swim.</span>
    </div>

    <h3>Must vs have to</h3>
    <table>
      <tr><th>must</th><th>have to</th></tr>
      <tr><td>osobista konieczność<br><span class="en">I must call my mother.</span></td><td>obowiązek z zewnątrz<br><span class="en">I have to wear a uniform at work.</span></td></tr>
    </table>
    <p>Przeczenie: <b>don't have to</b> = nie muszę. <b>mustn't</b> = nie wolno.</p>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij can / can't" },
    { type: "gap", text: '<span class="en">I ________ (swim).</span>', answers: ["can swim"] },
    { type: "gap", text: '<span class="en">She ________ (drive).</span>', answers: ["can drive"] },
    { type: "gap", text: '<span class="en">They ________ (speak) English.</span>', answers: ["can speak"] },
    { type: "gap", text: '<span class="en">He ________ (cook).</span>', answers: ["can cook"] },
    { type: "gap", text: '<span class="en">I ________ (not / dance).</span>', answers: ["can't dance", "cannot dance"] },
    { type: "header", text: "B. Zrób przeczenie" },
    { type: "gap", text: '<span class="en">I can swim. → I ________ swim.</span>', answers: ["can't", "cannot"], wide: true },
    { type: "gap", text: '<span class="en">She can drive. → She ________ drive.</span>', answers: ["can't", "cannot"], wide: true },
    { type: "gap", text: '<span class="en">They can come. → They ________ come.</span>', answers: ["can't", "cannot"], wide: true },
    { type: "header", text: "C. Zrób pytanie z can" },
    { type: "gap", text: '<span class="en">You can swim. → ________ swim?</span>', answers: ["can you", "can you swim", "can you swim?"], wide: true },
    { type: "gap", text: '<span class="en">She can drive. → ________ drive?</span>', answers: ["can she", "can she drive", "can she drive?"], wide: true },
    { type: "header", text: "D. Must czy mustn't?" },
    { type: "gap", text: '<span class="en">You ________ wear a seat belt. (obowiązek)</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">You ________ smoke here. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">You ________ touch this machine. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">You ________ be careful. (obowiązek)</span>', answers: ["must"] },
    { type: "header", text: "E. Should – udziel rady" },
    { type: "gap", text: '<span class="en">You ________ (study) more.</span>', answers: ["should study"] },
    { type: "gap", text: '<span class="en">She ________ (see) a doctor.</span>', answers: ["should see"] },
    { type: "gap", text: '<span class="en">You ________ (not / worry).</span>', answers: ["shouldn't worry", "should not worry"] },
    { type: "header", text: "F. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Potrafię pływać.</span>', answers: ["i can swim", "i can swim."], wide: true },
    { type: "gap", text: '<span class="pl">Nie wolno tu palić.</span>', answers: ["you mustn't smoke here", "you must not smoke here", "you mustn't smoke here.", "you must not smoke here."], wide: true },
    { type: "gap", text: '<span class="pl">Powinieneś się więcej uczyć.</span>', answers: ["you should study more", "you should study more."], wide: true },
    { type: "gap", text: '<span class="pl">Czy możesz mi pomóc?</span>', answers: ["can you help me", "can you help me?"], wide: true },
    { type: "header", text: "G. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań: co potrafisz, co musisz robić, czego nie wolno ci robić.", placeholder: "np. I can swim. I must study every day..." }
  ],
  test: [
    { q: "I ______ swim.", opcje: ["can", "must", "should", "have"], poprawna: 0, wyjasnienie: "Umiejętność → can." },
    { q: "______ you help me?", opcje: ["Can", "Must", "Should", "Do"], poprawna: 0, wyjasnienie: "Prośba → Can you help me?" },
    { q: "You ______ smoke here.", opcje: ["mustn't", "don't must", "mustn't to", "not must"], poprawna: 0, wyjasnienie: "Zakaz → mustn't + czasownik (bez to)." },
    { q: "You ______ wear a seat belt.", opcje: ["must", "must to", "can to", "should to"], poprawna: 0, wyjasnienie: "Obowiązek → must + czasownik (bez to)." },
    { q: "You ______ study more.", opcje: ["should", "mustn't", "can to", "should to"], poprawna: 0, wyjasnienie: "Rada → should + czasownik." },
    { q: "She ______ speak English.", opcje: ["can", "cans", "can to", "to can"], poprawna: 0, wyjasnienie: "Po modalnych bez -s, bez to → can speak." },
    { q: "I ______ drive.", opcje: ["can't", "don't can", "can't to", "not can"], poprawna: 0, wyjasnienie: "Przeczenie can → can't." },
    { q: "You ______ worry.", opcje: ["shouldn't", "don't should", "shouldn't to", "not should"], poprawna: 0, wyjasnienie: "Przeczenie should → shouldn't." },
    { q: "______ she swim?", opcje: ["Can", "Cans", "Do", "Is"], poprawna: 0, wyjasnienie: "Pytanie z can → Can + osoba + czasownik?" },
    { q: "You ______ be careful.", opcje: ["must", "can", "should to", "must to"], poprawna: 0, wyjasnienie: "Obowiązek → must + czasownik." }
  ]
};

/* ============================================================
   G5A1 – Conditionals (zero + first)
============================================================ */
window.LESSON_DATA["G5A1"] = {
  tytul: "Okresy warunkowe (0 i 1)",
  poziom: "A1",
  dzial: "G5",
  teoria: `
    <h3>Co to są okresy warunkowe?</h3>
    <p>Zdania z <b>if</b> (jeśli). Mówią, co się stanie, jeśli coś innego się wydarzy.</p>

    <h3>Zero Conditional – fakty</h3>
    <p>Gdy mówimy o rzeczach <b>zawsze prawdziwych</b> (fakty, prawa natury).</p>
    <p><b>Budowa:</b> <span class="en">If + Present Simple, Present Simple</span></p>
    <table>
      <tr><td class="en">If you heat water, it boils.</td></tr>
      <tr><td class="en">If I drink coffee late, I can't sleep.</td></tr>
      <tr><td class="en">If people don't eat, they get hungry.</td></tr>
    </table>

    <h3>First Conditional – realne możliwości</h3>
    <p>Gdy mówimy o <b>realnej sytuacji w przyszłości</b> – coś się może wydarzyć.</p>
    <p><b>Budowa:</b> <span class="en">If + Present Simple, will + czasownik</span></p>
    <table>
      <tr><td class="en">If it rains, I will stay at home.</td></tr>
      <tr><td class="en">If I have time, I will call you.</td></tr>
      <tr><td class="en">If she studies, she will pass the exam.</td></tr>
    </table>

    <div class="tip-box">
      <b>Ważne:</b> po <b>if</b> NIE używamy will.<br>
      ✅ <span class="en">If it rains, I will stay.</span><br>
      ❌ <span style="color:#991b1b">If it will rain, I will stay.</span>
    </div>

    <h3>UNLESS = if not</h3>
    <p><span class="en">Unless you hurry, you will be late.</span> = <span class="en">If you don't hurry, you will be late.</span></p>
    <p><b>Unless</b> = jeśli nie / chyba że.</p>

    <h3>Wskazówka</h3>
    <p><b>Zero</b> = zawsze prawda (nauka, zasady). <b>First</b> = konkretna przyszłość.</p>
  `,
  karta: [
    { type: "header", text: "A. Zero Conditional – uzupełnij" },
    { type: "gap", text: '<span class="en">If you heat ice, it ________ (melt).</span>', answers: ["melts"] },
    { type: "gap", text: '<span class="en">If I drink coffee late, I ________ (not / sleep).</span>', answers: ["don't sleep", "do not sleep"] },
    { type: "gap", text: '<span class="en">If people don\'t eat, they ________ (get) hungry.</span>', answers: ["get"] },
    { type: "gap", text: '<span class="en">If you don\'t water plants, they ________ (die).</span>', answers: ["die"] },
    { type: "gap", text: '<span class="en">If it rains, the ground ________ (get) wet.</span>', answers: ["gets"] },
    { type: "header", text: "B. First Conditional – uzupełnij" },
    { type: "gap", text: '<span class="en">If it ________ (rain), I ________ (stay) at home.</span>', answers: ["rains, will stay", "rains, i will stay"] },
    { type: "gap", text: '<span class="en">If she ________ (study), she ________ (pass) the test.</span>', answers: ["studies, will pass", "studies, she will pass"] },
    { type: "gap", text: '<span class="en">If we ________ (leave) now, we ________ (catch) the bus.</span>', answers: ["leave, will catch", "leave, we will catch"] },
    { type: "gap", text: '<span class="en">If I ________ (have) time, I ________ (call) you.</span>', answers: ["have, will call", "have, i will call"] },
    { type: "gap", text: '<span class="en">If they ________ (not / hurry), they ________ (miss) the train.</span>', answers: ["don't hurry, will miss", "do not hurry, will miss"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">If it will rain, I\'ll stay home. → ________</span>', answers: ["if it rains, i'll stay home", "if it rains, i will stay home", "if it rains, i'll stay home.", "if it rains, i will stay home."], wide: true },
    { type: "gap", text: '<span class="en">If she will study, she will pass. → ________</span>', answers: ["if she studies, she will pass", "if she studies, she will pass."], wide: true },
    { type: "header", text: "D. Unless – przekształć" },
    { type: "gap", text: '<span class="en">If you don\'t hurry, you\'ll be late. → Unless you ________, you\'ll be late.</span>', answers: ["hurry"], wide: true },
    { type: "gap", text: '<span class="en">If you don\'t study, you won\'t pass. → Unless you ________, you won\'t pass.</span>', answers: ["study"], wide: true },
    { type: "header", text: "E. Zero czy First?" },
    { type: "gap", text: '<span class="en">If you heat water to 100°C, it ________ (boil).</span>', answers: ["boils"] },
    { type: "gap", text: '<span class="en">If I have time tomorrow, I ________ (call) you.</span>', answers: ["will call", "'ll call"] },
    { type: "header", text: "F. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Jeśli będzie padać, zostanę w domu.</span>', answers: ["if it rains, i will stay at home", "if it rains, i'll stay at home", "if it rains, i will stay at home.", "if it rains, i'll stay at home."], wide: true },
    { type: "gap", text: '<span class="pl">Jeśli się pospieszysz, złapiesz autobus.</span>', answers: ["if you hurry, you will catch the bus", "if you hurry, you'll catch the bus", "if you hurry, you will catch the bus.", "if you hurry, you'll catch the bus."], wide: true },
    { type: "header", text: "G. Napisz o sobie" },
    { type: "open", text: "Napisz 3 zdania First Conditional o swoich planach (co zrobisz, jeśli...).", placeholder: "np. If I have time tomorrow, I will..." }
  ],
  test: [
    { q: "If you heat water, it ______.", opcje: ["boils", "will boil", "boiled", "is boiling"], poprawna: 0, wyjasnienie: "Zero Conditional: If + Present, Present." },
    { q: "If I have time, I ______ you.", opcje: ["will call", "call", "called", "would call"], poprawna: 0, wyjasnienie: "First Conditional: If + Present, will + czasownik." },
    { q: "If it ______ tomorrow, we'll stay home.", opcje: ["rains", "will rain", "rained", "is raining"], poprawna: 0, wyjasnienie: "Po if w First – Present Simple, nie will." },
    { q: "Unless you hurry, you ______ late.", opcje: ["will be", "are", "were", "would be"], poprawna: 0, wyjasnienie: "Unless + Present, will + czasownik." },
    { q: "If she ______, she will pass.", opcje: ["studies", "will study", "studied", "is studying"], poprawna: 0, wyjasnienie: "Po if – Present Simple (nie will)." },
    { q: "If people don't eat, they ______ hungry.", opcje: ["get", "will get", "got", "are getting"], poprawna: 0, wyjasnienie: "Zero Conditional – fakt zawsze prawdziwy." },
    { q: "I ______ stay home if it rains.", opcje: ["will", "am", "do", "would"], poprawna: 0, wyjasnienie: "First Conditional – will w głównej części." },
    { q: "If you don't study, you ______ the exam.", opcje: ["won't pass", "don't pass", "wouldn't pass", "aren't passing"], poprawna: 0, wyjasnienie: "First – przeczenie will = won't." },
    { q: "Unless you study, you ______ the test.", opcje: ["will fail", "fail", "failed", "would fail"], poprawna: 0, wyjasnienie: "Unless + Present, will + czasownik." },
    { q: "If it doesn't rain, we ______ to the park.", opcje: ["will go", "go", "went", "would go"], poprawna: 0, wyjasnienie: "First Conditional – will w zdaniu głównym." }
  ]
};

/* ============================================================
   G6A1 – Reported Speech (podstawy)
============================================================ */
window.LESSON_DATA["G6A1"] = {
  tytul: "Mowa zależna",
  poziom: "A1",
  dzial: "G6",
  teoria: `
    <h3>Co to jest mowa zależna?</h3>
    <p>Przekazujemy, co powiedziała inna osoba – nie cytujemy dosłownie, tylko <b>relacjonujemy</b>.</p>
    <table>
      <tr><th>Direct speech (cytat)</th><th>Reported speech (relacja)</th></tr>
      <tr><td class="en">"I am tired."</td><td class="en">She said (that) she was tired.</td></tr>
      <tr><td class="en">"I work here."</td><td class="en">He said (that) he worked there.</td></tr>
    </table>

    <h3>SAY czy TELL?</h3>
    <table>
      <tr><th>SAY</th><th>TELL</th></tr>
      <tr><td>bez osoby: <span class="en">She said...</span></td><td>z osobą: <span class="en">She told me...</span></td></tr>
      <tr><td><span class="en">He said he was tired.</span></td><td><span class="en">He told me he was tired.</span></td></tr>
    </table>
    <div class="tip-box">
      <b>Pamiętaj:</b> <span class="en">say something</span>, ale <span class="en">tell somebody something</span>.<br>
      ❌ <span class="en">She said me</span> → ✅ <span class="en">She told me</span>
    </div>

    <h3>Zmiana czasów – cofamy o jeden</h3>
    <table>
      <tr><th>Direct</th><th>Reported</th></tr>
      <tr><td class="en">am / is</td><td class="en">was</td></tr>
      <tr><td class="en">are</td><td class="en">were</td></tr>
      <tr><td class="en">work</td><td class="en">worked</td></tr>
      <tr><td class="en">will</td><td class="en">would</td></tr>
      <tr><td class="en">can</td><td class="en">could</td></tr>
    </table>

    <h3>Zmiana określeń czasu i miejsca</h3>
    <table>
      <tr><td class="en">now</td><td class="en">then</td></tr>
      <tr><td class="en">today</td><td class="en">that day</td></tr>
      <tr><td class="en">tomorrow</td><td class="en">the next day / the following day</td></tr>
      <tr><td class="en">yesterday</td><td class="en">the day before</td></tr>
      <tr><td class="en">here</td><td class="en">there</td></tr>
      <tr><td class="en">this</td><td class="en">that</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">"I am happy." → She said she was happy.</td></tr>
      <tr><td class="en">"I work in a bank." → He said he worked in a bank.</td></tr>
      <tr><td class="en">"I will call you." → She said she would call me.</td></tr>
      <tr><td class="en">"I can help." → He said he could help.</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Say czy tell?" },
    { type: "gap", text: '<span class="en">She ________ me the truth.</span>', answers: ["told"] },
    { type: "gap", text: '<span class="en">He ________ that he was tired.</span>', answers: ["said"] },
    { type: "gap", text: '<span class="en">I ________ her my name.</span>', answers: ["told"] },
    { type: "gap", text: '<span class="en">She ________ hello.</span>', answers: ["said"] },
    { type: "gap", text: '<span class="en">He ________ me to wait.</span>', answers: ["told"] },
    { type: "header", text: "B. Przekształć na mowę zależną" },
    { type: "gap", text: '<span class="en">"I am tired." → He said that he ________ tired.</span>', answers: ["was"], wide: true },
    { type: "gap", text: '<span class="en">"I work here." → She said that she ________ there.</span>', answers: ["worked"], wide: true },
    { type: "gap", text: '<span class="en">"I will call you." → He said that he ________ call me.</span>', answers: ["would"], wide: true },
    { type: "gap", text: '<span class="en">"I can swim." → She said that she ________ swim.</span>', answers: ["could"], wide: true },
    { type: "gap", text: '<span class="en">"I am happy." → They said that they ________ happy.</span>', answers: ["were"], wide: true },
    { type: "header", text: "C. Zmiana określeń czasu" },
    { type: "gap", text: '<span class="en">"I am busy today." → He said he was busy ________.</span>', answers: ["that day"], wide: true },
    { type: "gap", text: '<span class="en">"I will do it tomorrow." → She said she would do it ________.</span>', answers: ["the next day", "the following day"], wide: true },
    { type: "gap", text: '<span class="en">"I saw him yesterday." → He said he had seen him ________.</span>', answers: ["the day before"], wide: true },
    { type: "gap", text: '<span class="en">"I live here." → She said she lived ________.</span>', answers: ["there"], wide: true },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">She said me she was tired. → ________</span>', answers: ["she told me she was tired", "she told me she was tired."], wide: true },
    { type: "gap", text: '<span class="en">He said he will come. → ________</span>', answers: ["he said he would come", "he said he would come."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Powiedział, że jest zmęczony.</span>', answers: ["he said he was tired", "he said that he was tired", "he said he was tired.", "he said that he was tired."], wide: true },
    { type: "gap", text: '<span class="pl">Powiedziała mi, że pracuje w banku.</span>', answers: ["she told me she worked in a bank", "she told me that she worked in a bank", "she told me she worked in a bank.", "she told me that she worked in a bank."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 3 zdania – co powiedzieli twoi znajomi (użyj reported speech).", placeholder: "np. My friend said he was tired..." }
  ],
  test: [
    { q: "She ______ that she was tired.", opcje: ["said", "told", "asked", "say"], poprawna: 0, wyjasnienie: "Bez osoby → said." },
    { q: "He ______ me that he was busy.", opcje: ["told", "said", "say", "asked"], poprawna: 0, wyjasnienie: "Z osobą → told me." },
    { q: '"I am happy." → She said she ______ happy.', opcje: ["was", "is", "were", "has been"], poprawna: 0, wyjasnienie: "am → was w mowie zależnej." },
    { q: '"I work here." → He said he worked ______.', opcje: ["there", "here", "this", "now"], poprawna: 0, wyjasnienie: "here → there." },
    { q: '"I will come." → She said she ______ come.', opcje: ["would", "will", "can", "could"], poprawna: 0, wyjasnienie: "will → would." },
    { q: '"I can help." → He said he ______ help.', opcje: ["could", "can", "would", "will"], poprawna: 0, wyjasnienie: "can → could." },
    { q: "today → ______ w mowie zależnej.", opcje: ["that day", "the next day", "yesterday", "tomorrow"], poprawna: 0, wyjasnienie: "today → that day." },
    { q: "tomorrow → ______ w mowie zależnej.", opcje: ["the next day", "that day", "yesterday", "today"], poprawna: 0, wyjasnienie: "tomorrow → the next day / the following day." },
    { q: "Popraw: She said me the truth.", opcje: ["She told me the truth.", "She said to the truth.", "She tell me the truth.", "She said me it."], poprawna: 0, wyjasnienie: "tell + osoba → She told me." },
    { q: '"I am reading." → He said he ______ reading.', opcje: ["was", "is", "were", "be"], poprawna: 0, wyjasnienie: "am → was." }
  ]
};

/* ============================================================
   G7A1 – Passive Voice (podstawy)
============================================================ */
window.LESSON_DATA["G7A1"] = {
  tytul: "Strona bierna",
  poziom: "A1",
  dzial: "G7",
  teoria: `
    <h3>Co to jest strona bierna?</h3>
    <p>W <b>stronie czynnej</b> ważne jest KTO coś robi. W <b>biernej</b> – CO się dzieje (nie kto).</p>
    <table>
      <tr><th>Strona czynna (active)</th><th>Strona bierna (passive)</th></tr>
      <tr><td class="en">People clean the room.</td><td class="en">The room is cleaned.</td></tr>
      <tr><td class="en">Someone stole the car.</td><td class="en">The car was stolen.</td></tr>
    </table>

    <h3>Budowa</h3>
    <p><b>be + III forma czasownika (Past Participle)</b></p>
    <table>
      <tr><th>Czas</th><th>Budowa</th><th>Przykład</th></tr>
      <tr><td>Present Simple</td><td class="en">am/is/are + III</td><td class="en">The room is cleaned every day.</td></tr>
      <tr><td>Past Simple</td><td class="en">was/were + III</td><td class="en">The car was repaired yesterday.</td></tr>
      <tr><td>Future</td><td class="en">will be + III</td><td class="en">The work will be finished tomorrow.</td></tr>
    </table>

    <h3>Jak zamienić zdanie na stronę bierną?</h3>
    <p><span class="en">People clean the room every day.</span> → <span class="en">The room is cleaned every day.</span></p>
    <ul>
      <li>Dopełnienie (the room) → podmiot</li>
      <li>Czasownik → be + III forma</li>
      <li>Wykonawca ("people") zwykle pomijany</li>
    </ul>

    <div class="tip-box">
      <b>Ważne:</b> w stronie biernej <b>be</b> odmienia się przez osoby: <b>am / is / are / was / were</b>.
    </div>

    <h3>Typowe użycie</h3>
    <ul>
      <li><b>Regulaminy:</b> <span class="en">English is spoken here.</span></li>
      <li><b>Fakty:</b> <span class="en">Cars are made in this factory.</span></li>
      <li><b>Wydarzenia przeszłe:</b> <span class="en">The window was broken.</span></li>
    </ul>
  `,
  karta: [
    { type: "header", text: "A. Wybierz is / are" },
    { type: "gap", text: '<span class="en">The door ________ closed.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">The rooms ________ cleaned.</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">The food ________ prepared here.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">The windows ________ open.</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">English ________ spoken here.</span>', answers: ["is"] },
    { type: "header", text: "B. Uzupełnij Present Simple Passive" },
    { type: "gap", text: '<span class="en">The room ________ (clean) every day.</span>', answers: ["is cleaned"] },
    { type: "gap", text: '<span class="en">Cars ________ (produce) in this factory.</span>', answers: ["are produced"] },
    { type: "gap", text: '<span class="en">The food ________ (serve) here.</span>', answers: ["is served"] },
    { type: "gap", text: '<span class="en">English ________ (speak) all over the world.</span>', answers: ["is spoken"] },
    { type: "header", text: "C. Uzupełnij Past Simple Passive" },
    { type: "gap", text: '<span class="en">The house ________ (build) in 1990.</span>', answers: ["was built"] },
    { type: "gap", text: '<span class="en">The car ________ (repair) yesterday.</span>', answers: ["was repaired"] },
    { type: "gap", text: '<span class="en">The windows ________ (clean) last week.</span>', answers: ["were cleaned"] },
    { type: "gap", text: '<span class="en">The documents ________ (send) on Monday.</span>', answers: ["were sent"] },
    { type: "header", text: "D. Zamień na stronę bierną" },
    { type: "gap", text: '<span class="en">People clean the room every day. → The room ________ every day.</span>', answers: ["is cleaned"], wide: true },
    { type: "gap", text: '<span class="en">They built the bridge in 2010. → The bridge ________ in 2010.</span>', answers: ["was built"], wide: true },
    { type: "gap", text: '<span class="en">People speak English here. → English ________ here.</span>', answers: ["is spoken"], wide: true },
    { type: "gap", text: '<span class="en">They make cars in this factory. → Cars ________ in this factory.</span>', answers: ["are made"], wide: true },
    { type: "header", text: "E. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Ten dom został zbudowany w 1990.</span>', answers: ["this house was built in 1990", "this house was built in 1990.", "the house was built in 1990", "the house was built in 1990."], wide: true },
    { type: "gap", text: '<span class="pl">Angielski jest używany na całym świecie.</span>', answers: ["english is spoken all over the world", "english is spoken all over the world.", "english is used all over the world", "english is used all over the world."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 3 zdania w stronie biernej o swoim mieście lub szkole.", placeholder: "np. The school was built in..." }
  ],
  test: [
    { q: "The door ______ closed.", opcje: ["is", "are", "be", "was been"], poprawna: 0, wyjasnienie: "Present Passive, liczba pojedyncza → is + III." },
    { q: "The rooms ______ cleaned every day.", opcje: ["is", "are", "was", "be"], poprawna: 1, wyjasnienie: "The rooms = liczba mnoga → are + III." },
    { q: "The house ______ built in 1990.", opcje: ["was", "is", "were", "are"], poprawna: 0, wyjasnienie: "Past Passive, l.poj. → was built." },
    { q: "The windows ______ cleaned last week.", opcje: ["was", "were", "is", "are"], poprawna: 1, wyjasnienie: "The windows = l.mn. → were cleaned." },
    { q: "The work ______ finished tomorrow.", opcje: ["will be", "will", "is", "was"], poprawna: 0, wyjasnienie: "Future Passive → will be + III." },
    { q: "English ______ in many countries.", opcje: ["is spoken", "speaks", "is speaking", "was spoken"], poprawna: 0, wyjasnienie: "Fakt teraz → is spoken (Present Passive)." },
    { q: "The car ______ repaired yesterday.", opcje: ["was", "is", "were", "are"], poprawna: 0, wyjasnienie: "Past Passive, l.poj. → was repaired." },
    { q: "Zamień: People clean the room. → The room ______.", opcje: ["is cleaned", "cleans", "was clean", "is cleaning"], poprawna: 0, wyjasnienie: "Present Passive → is cleaned." },
    { q: "Zamień: They built the bridge in 2010. → The bridge ______ in 2010.", opcje: ["was built", "is built", "built", "was building"], poprawna: 0, wyjasnienie: "Past Passive → was built." },
    { q: "Zamień: They make cars here. → Cars ______ here.", opcje: ["are made", "make", "is made", "are making"], poprawna: 0, wyjasnienie: "Cars = l.mn. Present Passive → are made." }
  ]
};


/* ============================================================
   G8A1 – Szyk zdania i przysłówki
============================================================ */
window.LESSON_DATA["G8A1"] = {
  tytul: "Szyk zdania i przysłówki",
  poziom: "A1",
  dzial: "G8",
  teoria: `
    <h3>Podstawowy szyk zdania angielskiego</h3>
    <p>W angielskim szyk zdania jest <b>stały</b>: <b>podmiot → czasownik → dopełnienie</b>.</p>
    <table>
      <tr><th>Podmiot</th><th>Czasownik</th><th>Dopełnienie</th></tr>
      <tr><td class="en">I</td><td class="en">like</td><td class="en">music.</td></tr>
      <tr><td class="en">She</td><td class="en">reads</td><td class="en">books.</td></tr>
      <tr><td class="en">They</td><td class="en">play</td><td class="en">football.</td></tr>
    </table>
    <div class="tip-box">
      <b>Uwaga:</b> po polsku można powiedzieć <span class="pl">Muzykę lubię</span>, ale po angielsku <b>tylko</b>: <span class="en">I like music.</span>
    </div>

    <h3>Miejsce przysłówków częstotliwości</h3>
    <p>Przysłówki (always, usually, often, sometimes, never) idą <b>przed czasownikiem głównym</b>, ale <b>po "be"</b>.</p>
    <table>
      <tr><th>Przysłówek</th><th>Zdanie</th></tr>
      <tr><td class="en">always</td><td class="en">I always get up at 7.</td></tr>
      <tr><td class="en">usually</td><td class="en">She usually walks to work.</td></tr>
      <tr><td class="en">often</td><td class="en">They often eat out.</td></tr>
      <tr><td class="en">never</td><td class="en">He never smokes.</td></tr>
    </table>
    <p><b>Z "be":</b> <span class="en">She is always late. I am never tired.</span></p>

    <div class="tip-box">
      ✅ <span class="en">I always get up early.</span><br>
      ❌ <span style="color:#991b1b">I get always up early.</span>
    </div>

    <h3>Kolejność określeń miejsca i czasu</h3>
    <p>Najpierw <b>miejsce</b>, potem <b>czas</b>.</p>
    <table>
      <tr><td class="en">I saw him at school yesterday.</td></tr>
      <tr><td class="en">We met in London last year.</td></tr>
    </table>

    <h3>SO / NEITHER – krótkie reakcje</h3>
    <table>
      <tr><th>Zdanie wyjściowe</th><th>Reakcja</th></tr>
      <tr><td class="en">I like coffee.</td><td class="en">So do I.</td></tr>
      <tr><td class="en">She is tired.</td><td class="en">So am I.</td></tr>
      <tr><td class="en">I don't like tea.</td><td class="en">Neither do I.</td></tr>
      <tr><td class="en">He isn't happy.</td><td class="en">Neither am I.</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Ułóż zdania w prawidłowej kolejności" },
    { type: "gap", text: '<span class="en">[music / like / I] → ________</span>', answers: ["i like music", "i like music."], wide: true },
    { type: "gap", text: '<span class="en">[books / reads / she] → ________</span>', answers: ["she reads books", "she reads books."], wide: true },
    { type: "gap", text: '<span class="en">[football / play / they] → ________</span>', answers: ["they play football", "they play football."], wide: true },
    { type: "header", text: "B. Wstaw przysłówek we właściwym miejscu" },
    { type: "gap", text: '<span class="en">I get up at 7. (always) → ________</span>', answers: ["i always get up at 7", "i always get up at 7.", "i always get up at seven", "i always get up at seven."], wide: true },
    { type: "gap", text: '<span class="en">She walks to work. (usually) → ________</span>', answers: ["she usually walks to work", "she usually walks to work."], wide: true },
    { type: "gap", text: '<span class="en">He smokes. (never) → ________</span>', answers: ["he never smokes", "he never smokes."], wide: true },
    { type: "gap", text: '<span class="en">They eat out. (often) → ________</span>', answers: ["they often eat out", "they often eat out."], wide: true },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I get up always early. → ________</span>', answers: ["i always get up early", "i always get up early."], wide: true },
    { type: "gap", text: '<span class="en">She is late always. → ________</span>', answers: ["she is always late", "she is always late."], wide: true },
    { type: "header", text: "D. SO czy NEITHER?" },
    { type: "gap", text: '<span class="en">I like coffee. → ________ I.</span>', answers: ["so do"] },
    { type: "gap", text: '<span class="en">She is tired. → ________ I.</span>', answers: ["so am"] },
    { type: "gap", text: '<span class="en">I don\'t like tea. → ________ I.</span>', answers: ["neither do"] },
    { type: "gap", text: '<span class="en">He isn\'t happy. → ________ I.</span>', answers: ["neither am"] },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zawsze wstaję o 7.</span>', answers: ["i always get up at 7", "i always get up at seven", "i always get up at 7.", "i always get up at seven."], wide: true },
    { type: "gap", text: '<span class="pl">Ona nigdy nie pije kawy.</span>', answers: ["she never drinks coffee", "she never drinks coffee."], wide: true },
    { type: "header", text: "F. Napisz o sobie" },
    { type: "open", text: "Napisz 3 zdania o swojej rutynie, używając przysłówków always, usually, never.", placeholder: "np. I always drink coffee in the morning..." }
  ],
  test: [
    { q: "Which sentence is correct?", opcje: ["I like music.", "I music like.", "Music I like.", "Like I music."], poprawna: 0, wyjasnienie: "Szyk: podmiot + czasownik + dopełnienie." },
    { q: "Which sentence is correct?", opcje: ["She always is late.", "She is always late.", "Always she is late.", "She late always is."], poprawna: 1, wyjasnienie: "Przysłówek po 'be'." },
    { q: "Which sentence is correct?", opcje: ["I get always up early.", "I always get up early.", "Always I get up early.", "I get up always early."], poprawna: 1, wyjasnienie: "Przysłówek przed czasownikiem głównym." },
    { q: "I like coffee. So ______ I.", opcje: ["do", "am", "have", "will"], poprawna: 0, wyjasnienie: "Present Simple → so do I." },
    { q: "She is tired. So ______ I.", opcje: ["am", "do", "have", "will"], poprawna: 0, wyjasnienie: "Czasownik 'be' → so am I." },
    { q: "I don't like tea. Neither ______ I.", opcje: ["do", "am", "have", "will"], poprawna: 0, wyjasnienie: "Przeczenie z do → neither do I." },
    { q: "Where did you see him? → I saw him ______.", opcje: ["at school yesterday", "yesterday at school", "yesterday school", "school yesterday"], poprawna: 0, wyjasnienie: "Kolejność: miejsce + czas." },
    { q: "Which sentence is correct?", opcje: ["He never smokes.", "He smokes never.", "Never he smokes.", "He never smokes not."], poprawna: 0, wyjasnienie: "never przed czasownikiem głównym." },
    { q: "They play football. (often) →", opcje: ["They often play football.", "They play often football.", "Often they play football.", "They play football often."], poprawna: 0, wyjasnienie: "Przysłówek przed czasownikiem głównym." },
    { q: "She works here. (never) →", opcje: ["She never works here.", "She works never here.", "Never works she here.", "She never here works."], poprawna: 0, wyjasnienie: "Przysłówek przed czasownikiem." }
  ]
};

/* ============================================================
   G9A1 – Przedimki a / an / the
============================================================ */
window.LESSON_DATA["G9A1"] = {
  tytul: "Przedimki a / an / the",
  poziom: "A1",
  dzial: "G9",
  teoria: `
    <h3>Co to są przedimki?</h3>
    <p>Małe słówka przed rzeczownikami: <b>a</b>, <b>an</b>, <b>the</b>. Po polsku ich nie ma, dlatego są trudne.</p>

    <h3>A / AN – przedimek nieokreślony</h3>
    <p>Używamy z rzeczownikiem <b>policzalnym w liczbie pojedynczej</b>, gdy mówimy o czymś <b>nieokreślonym</b> (pierwszy raz, "jakiś").</p>
    <table>
      <tr><th>a</th><th>an</th></tr>
      <tr><td>przed spółgłoską<br><span class="en">a book, a car, a dog</span></td><td>przed samogłoską<br><span class="en">an apple, an egg, an hour</span></td></tr>
    </table>
    <p><b>Kiedy używamy:</b></p>
    <ul>
      <li>Pierwsza wzmianka: <span class="en">I have a cat.</span></li>
      <li>Zawody: <span class="en">She is a doctor.</span></li>
      <li>"Jeden" z wielu: <span class="en">Give me a pen.</span></li>
    </ul>

    <h3>THE – przedimek określony</h3>
    <p>Gdy mówimy o <b>konkretnej rzeczy</b> – tej, o której już było, albo jedynej w swoim rodzaju.</p>
    <ul>
      <li>Już wspomniane: <span class="en">I have a cat. The cat is black.</span></li>
      <li>Jedno w swoim rodzaju: <span class="en">the sun, the moon, the sky</span></li>
      <li>Konkretna rzecz: <span class="en">The book on the table is mine.</span></li>
    </ul>

    <h3>BRAK przedimka – zero article</h3>
    <p>NIE używamy przedimka gdy:</p>
    <ul>
      <li>Liczba mnoga ogólnie: <span class="en">I like dogs.</span></li>
      <li>Niepoliczalne: <span class="en">I like music.</span></li>
      <li>Imiona i nazwiska: <span class="en">Anna, Tom</span></li>
      <li>Większość krajów i miast: <span class="en">Poland, Warsaw</span></li>
      <li>Posiłki: <span class="en">I eat breakfast at 8.</span></li>
      <li>Sport: <span class="en">I play football.</span></li>
      <li>Języki: <span class="en">I speak English.</span></li>
    </ul>

    <div class="tip-box">
      <b>Uwaga na wyjątki:</b><br>
      <span class="en">go to school</span> (uczyć się) vs <span class="en">go to the school</span> (iść do budynku)<br>
      <span class="en">go to bed</span> (spać) vs <span class="en">go to the bed</span> (podejść do łóżka)
    </div>

    <h3>Uwaga – nieme "h"</h3>
    <p><span class="en">an hour</span> (bo "h" nieme, wymawia się /aʊər/ jak samogłoska).</p>
  `,
  karta: [
    { type: "header", text: "A. Wstaw a lub an" },
    { type: "gap", text: '<span class="en">I have ________ dog.</span>', answers: ["a"] },
    { type: "gap", text: '<span class="en">She has ________ apple.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">He is ________ doctor.</span>', answers: ["a"] },
    { type: "gap", text: '<span class="en">I need ________ umbrella.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">We saw ________ elephant.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">Wait ________ minute.</span>', answers: ["a"] },
    { type: "gap", text: '<span class="en">It was ________ hour.</span>', answers: ["an"] },
    { type: "header", text: "B. Wstaw a / an / the lub – (nic)" },
    { type: "gap", text: '<span class="en">I have ________ cat. ________ cat is black.</span>', answers: ["a, the", "a the"] },
    { type: "gap", text: '<span class="en">She is ________ teacher.</span>', answers: ["a"] },
    { type: "gap", text: '<span class="en">________ sun is very bright today.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I like ________ music.</span>', answers: ["-", "brak", "nic", "0"] },
    { type: "gap", text: '<span class="en">I go to ________ school every day.</span>', answers: ["-", "brak", "nic", "0"] },
    { type: "gap", text: '<span class="en">I eat ________ breakfast at 8.</span>', answers: ["-", "brak", "nic", "0"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I have a apple. → ________</span>', answers: ["i have an apple", "i have an apple."], wide: true },
    { type: "gap", text: '<span class="en">She is doctor. → ________</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="en">I like the dogs. → ________</span>', answers: ["i like dogs", "i like dogs."], wide: true },
    { type: "gap", text: '<span class="en">Sun is hot. → ________</span>', answers: ["the sun is hot", "the sun is hot."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam psa.</span>', answers: ["i have a dog", "i have a dog."], wide: true },
    { type: "gap", text: '<span class="pl">Ona jest lekarką.</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię psy.</span>', answers: ["i like dogs", "i like dogs."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Opisz 3 rzeczy, które masz lub lubisz (użyj a/an albo braku przedimka).", placeholder: "np. I have a bike. I like music." }
  ],
  test: [
    { q: "I have ______ dog.", opcje: ["a", "an", "the", "-"], poprawna: 0, wyjasnienie: "Przed spółgłoską, pierwsza wzmianka → a." },
    { q: "She has ______ apple.", opcje: ["a", "an", "the", "-"], poprawna: 1, wyjasnienie: "Przed samogłoską → an." },
    { q: "He is ______ doctor.", opcje: ["a", "an", "the", "-"], poprawna: 0, wyjasnienie: "Zawody z a/an." },
    { q: "I have a cat. ______ cat is black.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Już wspomniane → the." },
    { q: "______ sun is very bright.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Jedno w swoim rodzaju → the." },
    { q: "I like ______ music.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Niepoliczalne → bez przedimka." },
    { q: "I go to ______ school every day.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Szkoła ogólnie → bez przedimka." },
    { q: "It was ______ hour.", opcje: ["a", "an", "the", "-"], poprawna: 1, wyjasnienie: "Nieme 'h' → an." },
    { q: "I eat ______ breakfast at 8.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Posiłki → bez przedimka." },
    { q: "I like ______ dogs.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Liczba mnoga ogólnie → bez przedimka." }
  ]
};

/* ============================================================
   G10A1 – Quantifiers (some / any / much / many)
============================================================ */
window.LESSON_DATA["G10A1"] = {
  tytul: "Określniki ilości",
  poziom: "A1",
  dzial: "G10",
  teoria: `
    <h3>Policzalne i niepoliczalne</h3>
    <table>
      <tr><th>Policzalne (countable)</th><th>Niepoliczalne (uncountable)</th></tr>
      <tr>
        <td>można policzyć: <span class="en">a book → two books</span><br>apple, dog, car, house</td>
        <td>nie da się policzyć: <span class="en">water, money, milk</span><br>water, bread, milk, money, time</td>
      </tr>
    </table>

    <h3>SOME / ANY</h3>
    <table>
      <tr><th>SOME (twierdzenia)</th><th>ANY (pytania, przeczenia)</th></tr>
      <tr>
        <td class="en">I have some money.<br>There are some books.</td>
        <td class="en">Do you have any money?<br>I don't have any money.</td>
      </tr>
    </table>

    <h3>MUCH / MANY</h3>
    <table>
      <tr><th>MUCH</th><th>MANY</th></tr>
      <tr>
        <td>z niepoliczalnymi<br><span class="en">How much money?<br>I don't have much time.</span></td>
        <td>z policzalnymi<br><span class="en">How many books?<br>How many people?</span></td>
      </tr>
    </table>

    <h3>A LOT OF</h3>
    <p>Działa z oboma – policzalne i niepoliczalne:</p>
    <p><span class="en">I have a lot of money. I have a lot of books.</span></p>

    <h3>A FEW / A LITTLE</h3>
    <table>
      <tr><th>A FEW (policzalne)</th><th>A LITTLE (niepoliczalne)</th></tr>
      <tr>
        <td class="en">I have a few books.</td>
        <td class="en">I have a little money.</td>
      </tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>much</b> = dużo (niepoliczalne) · <b>many</b> = dużo (policzalne)<br>
      <b>some</b> w twierdzeniach · <b>any</b> w pytaniach i przeczeniach
    </div>

    <h3>HOW MUCH / HOW MANY</h3>
    <table>
      <tr><td class="en">How much money do you have?</td></tr>
      <tr><td class="en">How many books do you have?</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. some czy any?" },
    { type: "gap", text: '<span class="en">I have ________ money.</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">Do you have ________ questions?</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ time.</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">There are ________ books on the table.</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">Is there ________ milk in the fridge?</span>', answers: ["any"] },
    { type: "header", text: "B. much czy many?" },
    { type: "gap", text: '<span class="en">How ________ money do you have?</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">How ________ books are there?</span>', answers: ["many"] },
    { type: "gap", text: '<span class="en">How ________ people came?</span>', answers: ["many"] },
    { type: "gap", text: '<span class="en">How ________ water is there?</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ time.</span>', answers: ["much"] },
    { type: "header", text: "C. a few czy a little?" },
    { type: "gap", text: '<span class="en">I have ________ books.</span>', answers: ["a few"] },
    { type: "gap", text: '<span class="en">I have ________ money.</span>', answers: ["a little"] },
    { type: "gap", text: '<span class="en">I speak ________ English.</span>', answers: ["a little"] },
    { type: "gap", text: '<span class="en">There are ________ apples.</span>', answers: ["a few"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I don\'t have some money. → ________</span>', answers: ["i don't have any money", "i don't have any money.", "i do not have any money", "i do not have any money."], wide: true },
    { type: "gap", text: '<span class="en">How many money? → ________</span>', answers: ["how much money", "how much money?"], wide: true },
    { type: "gap", text: '<span class="en">How much books? → ________</span>', answers: ["how many books", "how many books?"], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam trochę pieniędzy.</span>', answers: ["i have some money", "i have some money.", "i have a little money", "i have a little money."], wide: true },
    { type: "gap", text: '<span class="pl">Ile masz pieniędzy?</span>', answers: ["how much money do you have", "how much money do you have?"], wide: true },
    { type: "gap", text: '<span class="pl">Ile masz książek?</span>', answers: ["how many books do you have", "how many books do you have?"], wide: true },
    { type: "header", text: "F. Napisz o sobie" },
    { type: "open", text: "Napisz 3 zdania o tym, co masz: ile masz pieniędzy, książek, czasu (użyj some / much / many / a few / a little).", placeholder: "np. I have a few books. I don't have much time." }
  ],
  test: [
    { q: "I have ______ money.", opcje: ["some", "any", "many", "much"], poprawna: 0, wyjasnienie: "Twierdzenie → some." },
    { q: "Do you have ______ questions?", opcje: ["some", "any", "many", "much"], poprawna: 1, wyjasnienie: "Pytanie → any." },
    { q: "I don't have ______ time.", opcje: ["some", "any", "much", "many"], poprawna: 2, wyjasnienie: "Niepoliczalne + dużo w przeczeniu → much (albo any)." },
    { q: "How ______ money?", opcje: ["much", "many", "some", "any"], poprawna: 0, wyjasnienie: "Money – niepoliczalne → much." },
    { q: "How ______ books?", opcje: ["much", "many", "some", "any"], poprawna: 1, wyjasnienie: "Books – policzalne → many." },
    { q: "There are ______ books on the table.", opcje: ["some", "any", "much", "a little"], poprawna: 0, wyjasnienie: "Twierdzenie → some." },
    { q: "I have ______ books. (kilka)", opcje: ["a few", "a little", "much", "any"], poprawna: 0, wyjasnienie: "Policzalne → a few." },
    { q: "I have ______ money. (trochę)", opcje: ["a few", "a little", "many", "any"], poprawna: 1, wyjasnienie: "Niepoliczalne → a little." },
    { q: "I don't have ______ questions.", opcje: ["some", "any", "much", "many"], poprawna: 1, wyjasnienie: "Przeczenie → any." },
    { q: "How ______ people came?", opcje: ["much", "many", "some", "any"], poprawna: 1, wyjasnienie: "People – policzalne → many." }
  ]
};

/* ============================================================
   G11A1 – Przyimki in / on / at
============================================================ */
window.LESSON_DATA["G11A1"] = {
  tytul: "Przyimki in / on / at",
  poziom: "A1",
  dzial: "G11",
  teoria: `
    <h3>Przyimki czasu – in / on / at</h3>
    <table>
      <tr><th>IN</th><th>ON</th><th>AT</th></tr>
      <tr>
        <td>miesiące: <span class="en">in May</span><br>lata: <span class="en">in 2025</span><br>pory roku: <span class="en">in summer</span><br>pory dnia: <span class="en">in the morning</span></td>
        <td>dni tygodnia: <span class="en">on Monday</span><br>daty: <span class="en">on 5th May</span><br>dni + pora: <span class="en">on Monday morning</span></td>
        <td>godziny: <span class="en">at 5 o'clock</span><br>noc: <span class="en">at night</span><br>święta: <span class="en">at Christmas</span></td>
      </tr>
    </table>
    <p><b>Brak przyimka:</b> <span class="en">next week, last year, this month, tomorrow, yesterday, today</span></p>

    <h3>Przyimki miejsca – in / on / at</h3>
    <table>
      <tr><th>IN</th><th>ON</th><th>AT</th></tr>
      <tr>
        <td>zamknięte przestrzenie: <span class="en">in a box</span><br>kraje, miasta: <span class="en">in Poland</span><br>woda: <span class="en">in the sea</span></td>
        <td>powierzchnie: <span class="en">on the table</span><br>transport: <span class="en">on a bus</span><br>piętra: <span class="en">on the first floor</span></td>
        <td>konkretne miejsca: <span class="en">at the door</span><br>budynki (ogólnie): <span class="en">at school, at home</span></td>
      </tr>
    </table>

    <h3>Inne ważne przyimki miejsca</h3>
    <table>
      <tr><td class="en">under</td><td class="pl">pod</td><td class="en">over</td><td class="pl">nad</td></tr>
      <tr><td class="en">above</td><td class="pl">ponad</td><td class="en">below</td><td class="pl">poniżej</td></tr>
      <tr><td class="en">between</td><td class="pl">między (2)</td><td class="en">among</td><td class="pl">wśród</td></tr>
      <tr><td class="en">behind</td><td class="pl">za</td><td class="en">in front of</td><td class="pl">przed</td></tr>
      <tr><td class="en">next to</td><td class="pl">obok</td><td class="en">near</td><td class="pl">blisko</td></tr>
      <tr><td class="en">opposite</td><td class="pl">naprzeciwko</td><td class="en">between</td><td class="pl">pomiędzy</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">in the morning</span>, ale <span class="en">at night</span>.<br>
      <span class="en">on Monday</span>, ale <span class="en">in May</span>.<br>
      <span class="en">at home, at school, at work</span> – bez "the" gdy chodzi o ogólną ideę.
    </div>
  `,
  karta: [
    { type: "header", text: "A. In / on / at – czas" },
    { type: "gap", text: '<span class="en">I was born ________ May.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">See you ________ Monday.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">The meeting starts ________ 9 o\'clock.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">I usually get up early ________ the morning.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">We\'ll see you ________ Christmas.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">She was born ________ 2005.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">I\'ll call you ________ Friday evening.</span>', answers: ["on"] },
    { type: "header", text: "B. In / on / at – miejsce" },
    { type: "gap", text: '<span class="en">I live ________ Warsaw.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">The book is ________ the table.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">I\'ll meet you ________ the bus stop.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">She\'s ________ home.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">We are ________ the car.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">She goes to work ________ a bus.</span>', answers: ["on"] },
    { type: "header", text: "C. Uzupełnij przyimkami miejsca" },
    { type: "gap", text: '<span class="en">The cat is ________ the table. (pod)</span>', answers: ["under"] },
    { type: "gap", text: '<span class="en">The bank is ________ the post office. (obok)</span>', answers: ["next to", "beside"] },
    { type: "gap", text: '<span class="en">The shop is ________ the school. (naprzeciwko)</span>', answers: ["opposite"] },
    { type: "gap", text: '<span class="en">The ball is ________ the box. (w)</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">He is sitting ________ me. (obok)</span>', answers: ["next to", "beside"] },
    { type: "gap", text: '<span class="en">The picture is ________ the wall. (na)</span>', answers: ["on"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Urodziłem się w maju.</span>', answers: ["i was born in may", "i was born in may.", "i was born in may"], wide: true },
    { type: "gap", text: '<span class="pl">Spotkajmy się w poniedziałek.</span>', answers: ["let's meet on monday", "let's meet on monday.", "we will meet on monday", "we'll meet on monday"], wide: true },
    { type: "gap", text: '<span class="pl">Książka jest na stole.</span>', answers: ["the book is on the table", "the book is on the table."], wide: true },
    { type: "gap", text: '<span class="pl">Mieszkam w Polsce.</span>', answers: ["i live in poland", "i live in poland."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 3 zdania: kiedy się urodziłeś, gdzie mieszkasz, gdzie chodzisz do szkoły (użyj in/on/at).", placeholder: "np. I was born in July. I live in..." }
  ],
  test: [
    { q: "I was born ______ May.", opcje: ["in", "on", "at", "-"], poprawna: 0, wyjasnienie: "Miesiące → in." },
    { q: "See you ______ Monday.", opcje: ["in", "on", "at", "-"], poprawna: 1, wyjasnienie: "Dni tygodnia → on." },
    { q: "The meeting starts ______ 9 o'clock.", opcje: ["in", "on", "at", "-"], poprawna: 2, wyjasnienie: "Godziny → at." },
    { q: "I get up early ______ the morning.", opcje: ["in", "on", "at", "-"], poprawna: 0, wyjasnienie: "Pory dnia → in the morning." },
    { q: "I live ______ Warsaw.", opcje: ["in", "on", "at", "-"], poprawna: 0, wyjasnienie: "Miasta → in." },
    { q: "The book is ______ the table.", opcje: ["in", "on", "at", "-"], poprawna: 1, wyjasnienie: "Powierzchnie → on." },
    { q: "She's ______ home.", opcje: ["in", "on", "at", "-"], poprawna: 2, wyjasnienie: "At home – utrwalone." },
    { q: "We'll see you ______ Christmas.", opcje: ["in", "on", "at", "-"], poprawna: 2, wyjasnienie: "Święta → at." },
    { q: "The cat is ______ the table. (pod)", opcje: ["in", "on", "under", "at"], poprawna: 2, wyjasnienie: "Pod → under." },
    { q: "I'll meet you ______ the bus stop.", opcje: ["in", "on", "at", "-"], poprawna: 2, wyjasnienie: "Konkretne miejsce → at." }
  ]
};

/* ============================================================
   G12A1 – Stopniowanie przymiotników
============================================================ */
window.LESSON_DATA["G12A1"] = {
  tytul: "Stopniowanie przymiotników",
  poziom: "A1",
  dzial: "G12",
  teoria: `
    <h3>Co to jest stopniowanie?</h3>
    <p>Porównujemy rzeczy: <b>stopień równy, wyższy, najwyższy</b>.</p>
    <table>
      <tr><th>Równy</th><th>Wyższy</th><th>Najwyższy</th></tr>
      <tr><td class="en">tall</td><td class="en">taller</td><td class="en">the tallest</td></tr>
      <tr><td class="en">big</td><td class="en">bigger</td><td class="en">the biggest</td></tr>
      <tr><td class="en">happy</td><td class="en">happier</td><td class="en">the happiest</td></tr>
    </table>

    <h3>Zasady – przymiotniki krótkie (1–2 sylaby)</h3>
    <table>
      <tr><th>Zasada</th><th>Przykład</th></tr>
      <tr><td>Zazwyczaj <b>-er / -est</b></td><td class="en">tall → taller → the tallest</td></tr>
      <tr><td>Końcówka -e → <b>-r / -st</b></td><td class="en">nice → nicer → the nicest</td></tr>
      <tr><td>Spółgłoska + y → <b>-ier / -iest</b></td><td class="en">happy → happier → the happiest</td></tr>
      <tr><td>1 sylaba CVC → podwój spółgłoskę</td><td class="en">big → bigger → the biggest</td></tr>
    </table>

    <h3>Przymiotniki długie (2+ sylaby)</h3>
    <p><b>more / the most + przymiotnik</b></p>
    <table>
      <tr><td class="en">beautiful → more beautiful → the most beautiful</td></tr>
      <tr><td class="en">expensive → more expensive → the most expensive</td></tr>
      <tr><td class="en">interesting → more interesting → the most interesting</td></tr>
    </table>

    <h3>Nieregularne – trzeba zapamiętać</h3>
    <table>
      <tr><td class="en">good → better → the best</td></tr>
      <tr><td class="en">bad → worse → the worst</td></tr>
      <tr><td class="en">far → further → the furthest</td></tr>
      <tr><td class="en">much / many → more → the most</td></tr>
    </table>

    <h3>Użycie w zdaniach</h3>
    <table>
      <tr><th>Stopień</th><th>Konstrukcja</th><th>Przykład</th></tr>
      <tr><td>Równy</td><td class="en">as ... as</td><td class="en">I am as tall as you.</td></tr>
      <tr><td>Wyższy</td><td class="en">... than</td><td class="en">She is taller than me.</td></tr>
      <tr><td>Najwyższy</td><td class="en">the ...</td><td class="en">He is the tallest in the class.</td></tr>
    </table>

    <div class="tip-box">
      <b>Ważne:</b> "niż" = <b>than</b> (nie "then"!).<br>
      ✅ <span class="en">She is taller than me.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Utwórz stopień wyższy i najwyższy" },
    { type: "gap", text: '<span class="en">tall → ________ → ________</span>', answers: ["taller, tallest", "taller tallest", "taller / tallest"] },
    { type: "gap", text: '<span class="en">big → ________ → ________</span>', answers: ["bigger, biggest", "bigger biggest", "bigger / biggest"] },
    { type: "gap", text: '<span class="en">happy → ________ → ________</span>', answers: ["happier, happiest", "happier happiest", "happier / happiest"] },
    { type: "gap", text: '<span class="en">expensive → ________ → ________</span>', answers: ["more expensive, most expensive", "more expensive most expensive"] },
    { type: "gap", text: '<span class="en">beautiful → ________ → ________</span>', answers: ["more beautiful, most beautiful", "more beautiful most beautiful"] },
    { type: "header", text: "B. Nieregularne – uzupełnij" },
    { type: "gap", text: '<span class="en">good → ________ → ________</span>', answers: ["better, best", "better best", "better / best"] },
    { type: "gap", text: '<span class="en">bad → ________ → ________</span>', answers: ["worse, worst", "worse worst", "worse / worst"] },
    { type: "header", text: "C. Wstaw w zdanie (stopień wyższy)" },
    { type: "gap", text: '<span class="en">She is ________ (tall) than me.</span>', answers: ["taller"] },
    { type: "gap", text: '<span class="en">This book is ________ (interesting) than that one.</span>', answers: ["more interesting"] },
    { type: "gap", text: '<span class="en">My house is ________ (big) than yours.</span>', answers: ["bigger"] },
    { type: "gap", text: '<span class="en">This exam is ________ (bad) than the last one.</span>', answers: ["worse"] },
    { type: "header", text: "D. Wstaw w zdanie (stopień najwyższy)" },
    { type: "gap", text: '<span class="en">He is ________ (good) student in the class.</span>', answers: ["the best"] },
    { type: "gap", text: '<span class="en">This is ________ (expensive) restaurant in town.</span>', answers: ["the most expensive"] },
    { type: "gap", text: '<span class="en">She is ________ (happy) person I know.</span>', answers: ["the happiest"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">She is more tall than me. → ________</span>', answers: ["she is taller than me", "she is taller than me."], wide: true },
    { type: "gap", text: '<span class="en">He is the goodest student. → ________</span>', answers: ["he is the best student", "he is the best student."], wide: true },
    { type: "gap", text: '<span class="en">This is more cheap. → ________</span>', answers: ["this is cheaper", "this is cheaper."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Ona jest wyższa niż ja.</span>', answers: ["she is taller than me", "she is taller than me.", "she's taller than me", "she's taller than me."], wide: true },
    { type: "gap", text: '<span class="pl">To jest najładniejszy dom w mieście.</span>', answers: ["this is the most beautiful house in the city", "this is the most beautiful house in the city.", "this is the nicest house in the city", "this is the nicest house in the city."], wide: true },
    { type: "gap", text: '<span class="pl">On jest najlepszym uczniem w klasie.</span>', answers: ["he is the best student in the class", "he is the best student in the class.", "he's the best student in the class", "he's the best student in the class."], wide: true },
    { type: "header", text: "G. Napisz o sobie" },
    { type: "open", text: "Porównaj siebie z 3 osobami: kto jest wyższy, kto starszy, kto lepszy w czymś.", placeholder: "np. My brother is taller than me. My friend is the best at football." }
  ],
  test: [
    { q: "She is ______ than me.", opcje: ["taller", "more tall", "the tallest", "tall"], poprawna: 0, wyjasnienie: "Krótkie → -er. 'taller than'." },
    { q: "He is ______ student in the class.", opcje: ["the best", "better", "the goodest", "more good"], poprawna: 0, wyjasnienie: "Nieregularny: good → best → the best." },
    { q: "This book is ______ than that one.", opcje: ["more interesting", "interestinger", "the most interesting", "interesting"], poprawna: 0, wyjasnienie: "Długie → more + przymiotnik." },
    { q: "My house is ______ than yours.", opcje: ["bigger", "more big", "the biggest", "big"], poprawna: 0, wyjasnienie: "1 sylaba CVC → podwój: bigger." },
    { q: "This exam is ______ than the last one.", opcje: ["worse", "more bad", "the worst", "badder"], poprawna: 0, wyjasnienie: "Nieregularny: bad → worse." },
    { q: "Which is correct?", opcje: ["She is taller than me.", "She is more tall than me.", "She is tallest than me.", "She is taller then me."], poprawna: 0, wyjasnienie: "Krótkie → -er + than (nie then)." },
    { q: "This is ______ restaurant in town.", opcje: ["the most expensive", "more expensive", "the expensivest", "the more expensive"], poprawna: 0, wyjasnienie: "Długie → the most + przymiotnik." },
    { q: "happy → ?", opcje: ["happier", "more happy", "happyer", "happiest"], poprawna: 0, wyjasnienie: "Spółgłoska + y → -ier: happier." },
    { q: "My car is ______ than yours.", opcje: ["better", "gooder", "the best", "more good"], poprawna: 0, wyjasnienie: "Nieregularny: good → better." },
    { q: "She is ______ girl in the class.", opcje: ["the nicest", "nicer", "more nice", "the most nice"], poprawna: 0, wyjasnienie: "nice → nicer → the nicest." }
  ]
};

/* ============================================================
   G13A1 – Bezokolicznik i -ing
============================================================ */
window.LESSON_DATA["G13A1"] = {
  tytul: "Bezokolicznik i forma -ing",
  poziom: "A1",
  dzial: "G13",
  teoria: `
    <h3>Dwie formy czasownika</h3>
    <p>Po niektórych czasownikach używamy <b>to + bezokolicznik</b>, po innych <b>czasownik + -ing</b>. Trzeba zapamiętać które.</p>

    <h3>Czasowniki + to + bezokolicznik</h3>
    <table>
      <tr><td class="en">want</td><td class="en">I want to go home.</td></tr>
      <tr><td class="en">need</td><td class="en">I need to sleep.</td></tr>
      <tr><td class="en">would like</td><td class="en">I would like to help.</td></tr>
      <tr><td class="en">decide</td><td class="en">She decided to stay.</td></tr>
      <tr><td class="en">hope</td><td class="en">I hope to see you.</td></tr>
      <tr><td class="en">try</td><td class="en">He tried to call.</td></tr>
      <tr><td class="en">forget</td><td class="en">Don't forget to buy milk.</td></tr>
      <tr><td class="en">learn</td><td class="en">I'm learning to drive.</td></tr>
    </table>

    <h3>Czasowniki + -ing</h3>
    <table>
      <tr><td class="en">like</td><td class="en">I like swimming.</td></tr>
      <tr><td class="en">love</td><td class="en">She loves reading.</td></tr>
      <tr><td class="en">hate</td><td class="en">He hates waiting.</td></tr>
      <tr><td class="en">enjoy</td><td class="en">I enjoy cooking.</td></tr>
      <tr><td class="en">finish</td><td class="en">She finished working.</td></tr>
      <tr><td class="en">stop</td><td class="en">He stopped smoking.</td></tr>
      <tr><td class="en">start / begin</td><td class="en">It started raining.</td></tr>
    </table>

    <h3>Po przyimkach zawsze -ing</h3>
    <table>
      <tr><td class="en">good at</td><td class="en">I'm good at drawing.</td></tr>
      <tr><td class="en">interested in</td><td class="en">I'm interested in learning English.</td></tr>
      <tr><td class="en">before / after</td><td class="en">Before going out, I always check my phone.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>want / need / would like / hope / decide + TO</b><br>
      <b>like / love / hate / enjoy + -ING</b>
    </div>
  `,
  karta: [
    { type: "header", text: "A. To czy -ing?" },
    { type: "gap", text: '<span class="en">I want ________ (go) home.</span>', answers: ["to go"] },
    { type: "gap", text: '<span class="en">She likes ________ (swim).</span>', answers: ["swimming"] },
    { type: "gap", text: '<span class="en">I need ________ (sleep).</span>', answers: ["to sleep"] },
    { type: "gap", text: '<span class="en">They enjoy ________ (cook).</span>', answers: ["cooking"] },
    { type: "gap", text: '<span class="en">He hates ________ (wait).</span>', answers: ["waiting"] },
    { type: "gap", text: '<span class="en">I would like ________ (help) you.</span>', answers: ["to help"] },
    { type: "gap", text: '<span class="en">We decided ________ (stay).</span>', answers: ["to stay"] },
    { type: "gap", text: '<span class="en">She finished ________ (work).</span>', answers: ["working"] },
    { type: "gap", text: '<span class="en">I hope ________ (see) you soon.</span>', answers: ["to see"] },
    { type: "header", text: "B. Uzupełnij zdanie" },
    { type: "gap", text: '<span class="en">I\'m good at ________ (draw).</span>', answers: ["drawing"] },
    { type: "gap", text: '<span class="en">I\'m interested in ________ (learn) English.</span>', answers: ["learning"] },
    { type: "gap", text: '<span class="en">Don\'t forget ________ (buy) milk.</span>', answers: ["to buy"] },
    { type: "gap", text: '<span class="en">He stopped ________ (smoke).</span>', answers: ["smoking"] },
    { type: "gap", text: '<span class="en">I\'m learning ________ (drive).</span>', answers: ["to drive"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I want going home. → ________</span>', answers: ["i want to go home", "i want to go home."], wide: true },
    { type: "gap", text: '<span class="en">She likes to swim. (jeśli chodzi o hobby) → ________</span>', answers: ["she likes swimming", "she likes swimming."], wide: true },
    { type: "gap", text: '<span class="en">I need sleeping. → ________</span>', answers: ["i need to sleep", "i need to sleep."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Chcę iść do domu.</span>', answers: ["i want to go home", "i want to go home."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię czytać książki.</span>', answers: ["i like reading books", "i like reading books."], wide: true },
    { type: "gap", text: '<span class="pl">Potrzebuję odpocząć.</span>', answers: ["i need to rest", "i need to rest.", "i need to have a rest", "i need to have a rest."], wide: true },
    { type: "gap", text: '<span class="pl">Ona lubi gotować.</span>', answers: ["she likes cooking", "she likes cooking."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 4 zdania: co lubisz robić, czego nie lubisz, co chcesz zrobić, co potrafisz robić.", placeholder: "np. I like swimming. I hate cooking. I want to travel. I'm good at drawing." }
  ],
  test: [
    { q: "I want ______ home.", opcje: ["to go", "going", "go", "to going"], poprawna: 0, wyjasnienie: "want + to + bezokolicznik." },
    { q: "She likes ______.", opcje: ["swimming", "to swim", "swim", "swims"], poprawna: 0, wyjasnienie: "like + -ing (o hobby)." },
    { q: "I need ______.", opcje: ["to sleep", "sleeping", "sleep", "slept"], poprawna: 0, wyjasnienie: "need + to + bezokolicznik." },
    { q: "They enjoy ______.", opcje: ["cooking", "to cook", "cook", "cooked"], poprawna: 0, wyjasnienie: "enjoy + -ing." },
    { q: "I would like ______ you.", opcje: ["to help", "helping", "help", "helped"], poprawna: 0, wyjasnienie: "would like + to." },
    { q: "I'm good at ______.", opcje: ["drawing", "to draw", "draw", "drew"], poprawna: 0, wyjasnienie: "Po przyimku 'at' → -ing." },
    { q: "She finished ______.", opcje: ["working", "to work", "work", "worked"], poprawna: 0, wyjasnienie: "finish + -ing." },
    { q: "Don't forget ______ milk.", opcje: ["to buy", "buying", "buy", "bought"], poprawna: 0, wyjasnienie: "forget + to." },
    { q: "He stopped ______.", opcje: ["smoking", "to smoke", "smoke", "smoked"], poprawna: 0, wyjasnienie: "stop + -ing." },
    { q: "I hope ______ you soon.", opcje: ["to see", "seeing", "see", "saw"], poprawna: 0, wyjasnienie: "hope + to." }
  ]
};

/* ============================================================
   G14A1 – Zdania przydawkowe (who / which / that)
============================================================ */
window.LESSON_DATA["G14A1"] = {
  tytul: "Zdania przydawkowe",
  poziom: "A1",
  dzial: "G14",
  teoria: `
    <h3>Co to są zdania przydawkowe?</h3>
    <p>Dodają informację o osobie lub rzeczy: <span class="en">The man who lives next door is my uncle.</span> (Mężczyzna, który mieszka obok, to mój wujek.)</p>

    <h3>Zaimki względne</h3>
    <table>
      <tr><th>Zaimek</th><th>Kiedy</th><th>Przykład</th></tr>
      <tr><td class="en">who</td><td>osoby</td><td class="en">The girl who sings is my sister.</td></tr>
      <tr><td class="en">which</td><td>rzeczy</td><td class="en">The book which I bought is good.</td></tr>
      <tr><td class="en">that</td><td>osoby i rzeczy (potoczne)</td><td class="en">The car that I want is red.</td></tr>
      <tr><td class="en">where</td><td>miejsca</td><td class="en">The house where I live is old.</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">I know a man who speaks five languages.</td></tr>
      <tr><td class="en">This is the film which won an Oscar.</td></tr>
      <tr><td class="en">The boy that you met yesterday is my cousin.</td></tr>
      <tr><td class="en">This is the school where I study.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>who</b> = dla osób · <b>which</b> = dla rzeczy · <b>that</b> = dla obu (potocznie) · <b>where</b> = dla miejsc
    </div>
  `,
  karta: [
    { type: "header", text: "A. Who czy which?" },
    { type: "gap", text: '<span class="en">The man ________ lives next door is my uncle.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">The book ________ I bought is interesting.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">The girl ________ sings is my sister.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">The car ________ I want is red.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">I have a friend ________ speaks Japanese.</span>', answers: ["who"] },
    { type: "header", text: "B. That, who, which czy where?" },
    { type: "gap", text: '<span class="en">The house ________ I live is old.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">This is the school ________ I study.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">The teacher ________ teaches us is nice.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">The film ________ we watched was great.</span>', answers: ["which", "that"] },
    { type: "header", text: "C. Połącz dwa zdania (użyj who / which)" },
    { type: "gap", text: '<span class="en">I have a dog. It barks a lot. → I have a dog ________ barks a lot.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">I know a girl. She speaks French. → I know a girl ________ speaks French.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">This is a car. It is very fast. → This is a car ________ is very fast.</span>', answers: ["which", "that"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam przyjaciela, który mówi po hiszpańsku.</span>', answers: ["i have a friend who speaks spanish", "i have a friend who speaks spanish."], wide: true },
    { type: "gap", text: '<span class="pl">To jest książka, którą kupiłem.</span>', answers: ["this is the book which i bought", "this is the book which i bought.", "this is the book that i bought", "this is the book that i bought."], wide: true },
    { type: "gap", text: '<span class="pl">To jest szkoła, do której chodzę.</span>', answers: ["this is the school where i go", "this is the school where i go."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Opisz 3 osoby lub rzeczy, używając who / which / where.", placeholder: "np. I have a friend who lives in Spain. This is the café where I study." }
  ],
  test: [
    { q: "The man ______ lives next door is my uncle.", opcje: ["who", "which", "where", "what"], poprawna: 0, wyjasnienie: "Osoba → who." },
    { q: "The book ______ I bought is interesting.", opcje: ["who", "which", "where", "when"], poprawna: 1, wyjasnienie: "Rzecz → which / that." },
    { q: "The house ______ I live is old.", opcje: ["who", "which", "where", "that"], poprawna: 2, wyjasnienie: "Miejsce → where." },
    { q: "This is the school ______ I study.", opcje: ["who", "which", "where", "what"], poprawna: 2, wyjasnienie: "Miejsce → where." },
    { q: "The girl ______ sings is my sister.", opcje: ["who", "which", "where", "what"], poprawna: 0, wyjasnienie: "Osoba → who." },
    { q: "The film ______ we watched was great.", opcje: ["who", "which", "where", "when"], poprawna: 1, wyjasnienie: "Rzecz → which / that." },
    { q: "I know a man ______ speaks 5 languages.", opcje: ["who", "which", "where", "what"], poprawna: 0, wyjasnienie: "Osoba → who." },
    { q: "This is the café ______ I met her.", opcje: ["who", "which", "where", "what"], poprawna: 2, wyjasnienie: "Miejsce → where." },
    { q: "Which is correct?", opcje: ["The car that I want is red.", "The car who I want is red.", "The car where I want is red.", "The car what I want is red."], poprawna: 0, wyjasnienie: "Rzecz → that / which." },
    { q: "This is the boy ______ won the competition.", opcje: ["who", "which", "where", "what"], poprawna: 0, wyjasnienie: "Osoba → who." }
  ]
};

/* ============================================================
   G15A1 – Pytania (powtórzenie i rozszerzenie)
============================================================ */
window.LESSON_DATA["G15A1"] = {
  tytul: "Pytania – powtórzenie",
  poziom: "A1",
  dzial: "G15",
  teoria: `
    <h3>Pytania Yes/No – zaczynają się od operatora</h3>
    <table>
      <tr><th>Czas</th><th>Pytanie</th></tr>
      <tr><td>Present Simple</td><td class="en">Do you work? / Does she work?</td></tr>
      <tr><td>Present Continuous</td><td class="en">Are you working?</td></tr>
      <tr><td>Past Simple</td><td class="en">Did you work?</td></tr>
      <tr><td>Present Perfect</td><td class="en">Have you worked?</td></tr>
      <tr><td>Future</td><td class="en">Will you work?</td></tr>
      <tr><td>Modal</td><td class="en">Can you help?</td></tr>
    </table>

    <h3>Pytania Wh- (otwarte)</h3>
    <table>
      <tr><td class="en">What</td><td class="pl">co / jaki</td></tr>
      <tr><td class="en">Where</td><td class="pl">gdzie</td></tr>
      <tr><td class="en">When</td><td class="pl">kiedy</td></tr>
      <tr><td class="en">Why</td><td class="pl">dlaczego</td></tr>
      <tr><td class="en">Who</td><td class="pl">kto</td></tr>
      <tr><td class="en">Whose</td><td class="pl">czyj</td></tr>
      <tr><td class="en">Which</td><td class="pl">który</td></tr>
      <tr><td class="en">How</td><td class="pl">jak</td></tr>
      <tr><td class="en">How much / many</td><td class="pl">ile</td></tr>
      <tr><td class="en">How long</td><td class="pl">jak długo</td></tr>
    </table>

    <p><b>Budowa:</b> <span class="en">Wh- + operator + podmiot + czasownik?</span></p>
    <p><span class="en">Where do you live? What are you doing? Why did she leave?</span></p>

    <h3>Pytania o podmiot</h3>
    <p>Gdy pytamy o wykonawcę – <b>bez "do"</b>:</p>
    <table>
      <tr><td class="en">Who called you?</td><td class="pl">Kto do ciebie dzwonił?</td></tr>
      <tr><td class="en">Who wants coffee?</td><td class="pl">Kto chce kawy?</td></tr>
    </table>

    <h3>How + przymiotnik</h3>
    <table>
      <tr><td class="en">How old are you?</td><td class="pl">Ile masz lat?</td></tr>
      <tr><td class="en">How tall is he?</td><td class="pl">Jak wysoki jest?</td></tr>
      <tr><td class="en">How far is it?</td><td class="pl">Jak daleko to jest?</td></tr>
      <tr><td class="en">How often do you...?</td><td class="pl">Jak często...?</td></tr>
    </table>

    <div class="tip-box">
      <b>Uwaga:</b> <span class="en">How are you?</span> to nie pytanie o wygląd, tylko o samopoczucie.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Ułóż pytanie" },
    { type: "gap", text: '<span class="en">You work here. → ________ here?</span>', answers: ["do you work", "do you work?"], wide: true },
    { type: "gap", text: '<span class="en">She speaks English. → ________ English?</span>', answers: ["does she speak", "does she speak?"], wide: true },
    { type: "gap", text: '<span class="en">They went home. → ________ home?</span>', answers: ["did they go", "did they go?"], wide: true },
    { type: "gap", text: '<span class="en">He can swim. → ________ swim?</span>', answers: ["can he", "can he swim", "can he swim?"], wide: true },
    { type: "header", text: "B. Wstaw słowo pytające" },
    { type: "gap", text: '<span class="en">________ do you live? – In Warsaw.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">________ is your name? – Tom.</span>', answers: ["what"] },
    { type: "gap", text: '<span class="en">________ are you? – I\'m fine, thanks.</span>', answers: ["how"] },
    { type: "gap", text: '<span class="en">________ old are you? – I\'m 17.</span>', answers: ["how"] },
    { type: "gap", text: '<span class="en">________ do you get up? – At 7.</span>', answers: ["when"] },
    { type: "gap", text: '<span class="en">________ book is this? – It\'s mine.</span>', answers: ["whose"] },
    { type: "gap", text: '<span class="en">________ do you like? – Pizza or pasta?</span>', answers: ["which"] },
    { type: "header", text: "C. Połącz" },
    { type: "gap", text: '<span class="en">________ is your birthday? – In May.</span>', answers: ["when"] },
    { type: "gap", text: '<span class="en">________ are you late? – Because I missed the bus.</span>', answers: ["why"] },
    { type: "gap", text: '<span class="en">________ much is it? – 5 euros.</span>', answers: ["how"] },
    { type: "gap", text: '<span class="en">________ many books? – Ten.</span>', answers: ["how"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">Where you live? → ________</span>', answers: ["where do you live", "where do you live?"], wide: true },
    { type: "gap", text: '<span class="en">What means this word? → ________</span>', answers: ["what does this word mean", "what does this word mean?"], wide: true },
    { type: "gap", text: '<span class="en">Do you can help me? → ________</span>', answers: ["can you help me", "can you help me?"], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Gdzie mieszkasz?</span>', answers: ["where do you live", "where do you live?"], wide: true },
    { type: "gap", text: '<span class="pl">Ile masz lat?</span>', answers: ["how old are you", "how old are you?"], wide: true },
    { type: "gap", text: '<span class="pl">Kiedy masz urodziny?</span>', answers: ["when is your birthday", "when is your birthday?", "when's your birthday", "when's your birthday?"], wide: true },
    { type: "gap", text: '<span class="pl">Dlaczego się spóźniłeś?</span>', answers: ["why were you late", "why were you late?", "why are you late", "why are you late?"], wide: true },
    { type: "header", text: "F. Napisz o sobie" },
    { type: "open", text: "Napisz 5 pytań, które chciałbyś zadać nowemu koledze (użyj różnych słów pytających).", placeholder: "np. Where are you from? What music do you like?" }
  ],
  test: [
    { q: "______ you like coffee?", opcje: ["Do", "Does", "Are", "Is"], poprawna: 0, wyjasnienie: "Z 'you' → Do you...?" },
    { q: "______ she work here?", opcje: ["Do", "Does", "Is", "Are"], poprawna: 1, wyjasnienie: "3 os. l.poj. → Does." },
    { q: "______ did you go yesterday?", opcje: ["Where", "What", "Who", "Which"], poprawna: 0, wyjasnienie: "Pytanie o miejsce → Where." },
    { q: "______ are you? – I'm fine.", opcje: ["How", "What", "Where", "Who"], poprawna: 0, wyjasnienie: "How are you? – utrwalone." },
    { q: "______ old are you?", opcje: ["How", "What", "Where", "Who"], poprawna: 0, wyjasnienie: "How old – ile lat." },
    { q: "______ book is this?", opcje: ["Whose", "Who", "What", "Which"], poprawna: 0, wyjasnienie: "Czyj → Whose." },
    { q: "______ did you come late? – Because I missed the bus.", opcje: ["Why", "How", "When", "Where"], poprawna: 0, wyjasnienie: "Powód → Why." },
    { q: "Which is correct?", opcje: ["Where do you live?", "Where you live?", "Where does you live?", "Where are you live?"], poprawna: 0, wyjasnienie: "Poprawna kolejność: Wh- + do + podmiot + czasownik." },
    { q: "______ is your birthday?", opcje: ["When", "What", "Where", "Who"], poprawna: 0, wyjasnienie: "Kiedy → When." },
    { q: "______ many books do you have?", opcje: ["How", "What", "Where", "Which"], poprawna: 0, wyjasnienie: "How many – ile (policzalne)." }
  ]
};

/* ============================================================
   G16A1 – Phrasal Verbs (podstawowe)
============================================================ */
window.LESSON_DATA["G16A1"] = {
  tytul: "Czasowniki frazowe",
  poziom: "A1",
  dzial: "G16",
  teoria: `
    <h3>Co to są phrasal verbs?</h3>
    <p>Czasownik + przyimek/przysłówek, które razem mają <b>nowe znaczenie</b>:</p>
    <p><span class="en">get up</span> = wstawać, <span class="en">look after</span> = opiekować się.</p>

    <h3>Najczęstsze – trzeba zapamiętać</h3>
    <table>
      <tr><th>Phrasal verb</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en">get up</td><td class="pl">wstawać</td><td class="en">I get up at 7.</td></tr>
      <tr><td class="en">wake up</td><td class="pl">budzić się</td><td class="en">I wake up early.</td></tr>
      <tr><td class="en">go on</td><td class="pl">kontynuować</td><td class="en">Please go on.</td></tr>
      <tr><td class="en">turn on</td><td class="pl">włączać</td><td class="en">Turn on the TV.</td></tr>
      <tr><td class="en">turn off</td><td class="pl">wyłączać</td><td class="en">Turn off the light.</td></tr>
      <tr><td class="en">look for</td><td class="pl">szukać</td><td class="en">I'm looking for my keys.</td></tr>
      <tr><td class="en">look after</td><td class="pl">opiekować się</td><td class="en">She looks after her sister.</td></tr>
      <tr><td class="en">give up</td><td class="pl">poddawać się</td><td class="en">Never give up!</td></tr>
      <tr><td class="en">find out</td><td class="pl">dowiedzieć się</td><td class="en">I found out the truth.</td></tr>
      <tr><td class="en">put on</td><td class="pl">zakładać (ubranie)</td><td class="en">Put on your coat.</td></tr>
      <tr><td class="en">take off</td><td class="pl">zdejmować / startować</td><td class="en">Take off your shoes.</td></tr>
      <tr><td class="en">come back</td><td class="pl">wracać</td><td class="en">Come back soon.</td></tr>
      <tr><td class="en">come in</td><td class="pl">wchodzić</td><td class="en">Come in, please.</td></tr>
      <tr><td class="en">get on</td><td class="pl">wsiadać (do autobusu)</td><td class="en">Get on the bus.</td></tr>
      <tr><td class="en">get off</td><td class="pl">wysiadać</td><td class="en">Get off at the next stop.</td></tr>
      <tr><td class="en">sit down</td><td class="pl">siadać</td><td class="en">Sit down, please.</td></tr>
      <tr><td class="en">stand up</td><td class="pl">wstawać (stać)</td><td class="en">Stand up, please.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> phrasal verbs traktujemy jak jedno słowo. Znaczenie często nie wynika z czasownika (np. <span class="en">give up</span> = poddawać się, nie "dawać w górę").
    </div>
  `,
  karta: [
    { type: "header", text: "A. Dopasuj phrasal verb do znaczenia" },
    { type: "gap", text: '<span class="pl">wstawać → get ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">budzić się → wake ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">szukać → look ________</span>', answers: ["for"] },
    { type: "gap", text: '<span class="pl">opiekować się → look ________</span>', answers: ["after"] },
    { type: "gap", text: '<span class="pl">poddawać się → give ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">dowiedzieć się → find ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">włączać → turn ________</span>', answers: ["on"] },
    { type: "gap", text: '<span class="pl">wyłączać → turn ________</span>', answers: ["off"] },
    { type: "gap", text: '<span class="pl">wracać → come ________</span>', answers: ["back"] },
    { type: "header", text: "B. Uzupełnij zdanie odpowiednim phrasal verb" },
    { type: "gap", text: '<span class="en">I ________ at 7 every morning. (wstaję)</span>', answers: ["get up"] },
    { type: "gap", text: '<span class="en">Please ________ the TV. (włącz)</span>', answers: ["turn on"] },
    { type: "gap", text: '<span class="en">I\'m ________ my keys. (szukam)</span>', answers: ["looking for"] },
    { type: "gap", text: '<span class="en">She ________ her little brother. (opiekuje się)</span>', answers: ["looks after", "look after"] },
    { type: "gap", text: '<span class="en">Never ________! (poddawaj się)</span>', answers: ["give up"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I get up at 7 always. → ________</span>', answers: ["i always get up at 7", "i always get up at 7.", "i always get up at seven", "i always get up at seven."], wide: true },
    { type: "gap", text: '<span class="en">Please turn the TV on. → ________</span>', answers: ["please turn on the tv", "please turn on the tv.", "please turn the tv on", "please turn the tv on."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Wstaję o 7.</span>', answers: ["i get up at 7", "i get up at seven", "i get up at 7.", "i get up at seven."], wide: true },
    { type: "gap", text: '<span class="pl">Szukam mojego telefonu.</span>', answers: ["i am looking for my phone", "i am looking for my phone.", "i'm looking for my phone", "i'm looking for my phone."], wide: true },
    { type: "gap", text: '<span class="pl">Proszę, wejdź.</span>', answers: ["come in please", "come in, please", "come in please.", "come in, please."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 4 zdania o swojej codzienności, używając phrasal verbs (get up, wake up, turn on, look for...).", placeholder: "np. I get up at 6. I turn on the radio..." }
  ],
  test: [
    { q: "wstawać = ______", opcje: ["get up", "get on", "get off", "get out"], poprawna: 0, wyjasnienie: "get up = wstawać." },
    { q: "szukać = ______", opcje: ["look for", "look after", "look at", "look up"], poprawna: 0, wyjasnienie: "look for = szukać." },
    { q: "opiekować się = ______", opcje: ["look after", "look for", "look at", "look up"], poprawna: 0, wyjasnienie: "look after = opiekować się." },
    { q: "poddawać się = ______", opcje: ["give up", "give in", "give out", "give back"], poprawna: 0, wyjasnienie: "give up = poddawać się." },
    { q: "I ______ at 7 every morning.", opcje: ["get up", "get on", "get off", "get in"], poprawna: 0, wyjasnienie: "Wstaję → get up." },
    { q: "Please ______ the light. (wyłącz)", opcje: ["turn off", "turn on", "turn up", "turn down"], poprawna: 0, wyjasnienie: "Wyłączyć → turn off." },
    { q: "Please ______ the TV. (włącz)", opcje: ["turn on", "turn off", "turn up", "turn down"], poprawna: 0, wyjasnienie: "Włączyć → turn on." },
    { q: "I'm ______ my keys.", opcje: ["looking for", "looking after", "looking at", "looking up"], poprawna: 0, wyjasnienie: "Szukam → looking for." },
    { q: "wracać = ______", opcje: ["come back", "come in", "come on", "come out"], poprawna: 0, wyjasnienie: "come back = wracać." },
    { q: "wsiadać (do autobusu) = ______", opcje: ["get on", "get off", "get up", "get out"], poprawna: 0, wyjasnienie: "get on = wsiadać. (get off = wysiadać)" }
  ]
};