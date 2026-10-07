window.LESSON_DATA = window.LESSON_DATA || {};

/* ============================================================
   G1A2 – Czasy teraźniejsze – porównanie
============================================================ */
window.LESSON_DATA["G1A2"] = {
  tytul: "Present Simple i Present Continuous",
  poziom: "A2",
  dzial: "G1",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I usually get up at seven and have breakfast with my family. I go to school by bus. But this week I am staying at my grandmother's house, so I am walking to school every morning. I like walking because I can listen to music. My brother is playing football this month in a special tournament, so he trains every day. Normally he plays only twice a week.
    </p>

    <h3>Kiedy Present Simple, a kiedy Present Continuous?</h3>
    <table>
      <tr><th>Present Simple</th><th>Present Continuous</th></tr>
      <tr>
        <td><b>stałe sytuacje, rutyna, fakty</b><br><span class="en">I work in a shop.</span><br><span class="en">She usually gets up at 7.</span><br><span class="en">Water boils at 100°C.</span></td>
        <td><b>teraz, tymczasowo, w trakcie</b><br><span class="en">I am working now.</span><br><span class="en">She is staying with her friend this week.</span><br><span class="en">Look! It is raining.</span></td>
      </tr>
    </table>

    <h3>Określenia czasu</h3>
    <table>
      <tr><th>Present Simple</th><th>Present Continuous</th></tr>
      <tr>
        <td>always, usually, often, sometimes, never<br>every day, on Mondays</td>
        <td>now, at the moment, today, this week<br>Look!, Listen!</td>
      </tr>
    </table>

    <h3>Porównaj</h3>
    <table>
      <tr><td class="en">I work in a restaurant. <span class="pl">(moja praca – stała)</span></td></tr>
      <tr><td class="en">I am working in a restaurant this month. <span class="pl">(tymczasowo)</span></td></tr>
      <tr><td class="en">She usually walks to school. <span class="pl">(zawsze tak robi)</span></td></tr>
      <tr><td class="en">She is walking to school today. <span class="pl">(dzisiaj, wyjątkowo)</span></td></tr>
    </table>

    <h3>Czasowniki statyczne</h3>
    <p>Niektóre czasowniki <b>nie występują</b> w Continuous (dotyczą stanu, nie czynności):</p>
    <p><span class="en">know, understand, believe, like, love, hate, want, need, remember, mean</span></p>
    <div class="tip-box">
      ✅ <span class="en">I know him.</span> · <span class="en">I understand.</span><br>
      ❌ <span style="color:#991b1b">I am knowing him. · I am understanding.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Present Simple czy Present Continuous?" },
    { type: "gap", text: '<span class="en">I usually ________ (go) to work by bus.</span>', answers: ["go"] },
    { type: "gap", text: '<span class="en">Today I ________ (walk) because it\'s sunny.</span>', answers: ["am walking"] },
    { type: "gap", text: '<span class="en">She ________ (live) in Warsaw.</span>', answers: ["lives"] },
    { type: "gap", text: '<span class="en">This month she ________ (stay) with her sister.</span>', answers: ["is staying"] },
    { type: "gap", text: '<span class="en">He ________ (know) the answer.</span>', answers: ["knows"] },
    { type: "gap", text: '<span class="en">Why ________ you ________ (wear) my jacket?</span>', answers: ["are wearing"] },
    { type: "gap", text: '<span class="en">The shop ________ (open) at 9 every day.</span>', answers: ["opens"] },
    { type: "gap", text: '<span class="en">We ________ (study) for an exam this week.</span>', answers: ["are studying"] },
    { type: "header", text: "B. Popraw błędy" },
    { type: "gap", text: '<span class="en">She is knowing my brother. → ________</span>', answers: ["she knows my brother", "she knows my brother."], wide: true },
    { type: "gap", text: '<span class="en">I am usually going to work by car. → ________</span>', answers: ["i usually go to work by car", "i usually go to work by car."], wide: true },
    { type: "gap", text: '<span class="en">Does he working here? → ________</span>', answers: ["does he work here", "does he work here?"], wide: true },
    { type: "gap", text: '<span class="en">They are live in Kraków. → ________</span>', answers: ["they live in kraków", "they live in krakow", "they live in kraków.", "they live in krakow."], wide: true },
    { type: "gap", text: '<span class="en">I am wanting a new phone. → ________</span>', answers: ["i want a new phone", "i want a new phone."], wide: true },
    { type: "header", text: "C. Uzupełnij zdania" },
    { type: "gap", text: '<span class="en">I usually ________ (work) from Monday to Friday.</span>', answers: ["work"] },
    { type: "gap", text: '<span class="en">This week I ________ (work) on a special project.</span>', answers: ["am working"] },
    { type: "gap", text: '<span class="en">She ________ (not / understand) the question.</span>', answers: ["doesn't understand", "does not understand"] },
    { type: "gap", text: '<span class="en">Why ________ you ________ (laugh)?</span>', answers: ["are laughing"] },
    { type: "gap", text: '<span class="en">My brother ________ (play) football every Sunday.</span>', answers: ["plays"] },
    { type: "gap", text: '<span class="en">He ________ (play) football now.</span>', answers: ["is playing"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zazwyczaj chodzę do szkoły pieszo.</span>', answers: ["i usually walk to school", "i usually walk to school.", "i usually go to school on foot", "i usually go to school on foot."], wide: true },
    { type: "gap", text: '<span class="pl">W tym tygodniu pracuję nad projektem.</span>', answers: ["this week i am working on a project", "this week i am working on a project.", "this week i'm working on a project", "this week i'm working on a project."], wide: true },
    { type: "gap", text: '<span class="pl">Ona nie rozumie pytania.</span>', answers: ["she doesn't understand the question", "she doesn't understand the question.", "she does not understand the question", "she does not understand the question."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 4 zdania o swojej rutynie (Present Simple) i 2 zdania o tym, co robisz teraz inaczej (Present Continuous).", placeholder: "np. I usually... But this week I am..." }
  ],
  test: [
    { q: "I usually ______ to work by bus.", opcje: ["go", "am going", "going", "goes"], poprawna: 0, wyjasnienie: "usually → Present Simple." },
    { q: "Look! It ______.", opcje: ["rains", "is raining", "rained", "rain"], poprawna: 1, wyjasnienie: "Look! → Present Continuous." },
    { q: "She ______ in Warsaw.", opcje: ["lives", "is living", "live", "living"], poprawna: 0, wyjasnienie: "Stała sytuacja → Present Simple." },
    { q: "This week she ______ with her sister.", opcje: ["stays", "is staying", "stay", "staying"], poprawna: 1, wyjasnienie: "this week → Present Continuous (tymczasowo)." },
    { q: "He ______ the answer.", opcje: ["knows", "is knowing", "know", "knowing"], poprawna: 0, wyjasnienie: "know to czasownik statyczny – bez -ing." },
    { q: "Why ______ you ______ my jacket?", opcje: ["do / wear", "are / wearing", "is / wearing", "does / wear"], poprawna: 1, wyjasnienie: "Czynność teraz → Present Continuous." },
    { q: "The shop ______ at 9 every day.", opcje: ["opens", "is opening", "open", "opening"], poprawna: 0, wyjasnienie: "every day → Present Simple." },
    { q: "We ______ for an exam this week.", opcje: ["study", "are studying", "studied", "studies"], poprawna: 1, wyjasnienie: "this week → Present Continuous." },
    { q: "Which is correct?", opcje: ["I am knowing him.", "I know him.", "I am know him.", "I knowing him."], poprawna: 1, wyjasnienie: "know = statyczny → Present Simple." },
    { q: "Which is correct?", opcje: ["I am usually going to school by bus.", "I usually am going to school by bus.", "I usually go to school by bus.", "I go usually to school by bus."], poprawna: 2, wyjasnienie: "Przysłówek + Present Simple dla rutyny." }
  ]
};

/* ============================================================
   G2A2 – Czasy przeszłe – porównanie
============================================================ */
window.LESSON_DATA["G2A2"] = {
  tytul: "Past Simple i Past Continuous",
  poziom: "A2",
  dzial: "G2",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Yesterday evening I was watching TV when my friend called me. She said she was having a problem with her homework. I was helping her on the phone for two hours. While we were talking, my mother came into the room and brought us some snacks. When I finally finished, it was already midnight, so I went straight to bed.
    </p>

    <h3>Past Simple – zakończone czynności</h3>
    <p><b>Budowa:</b> <span class="en">V-ed (regularne) / II forma (nieregularne)</span></p>
    <p><span class="en">I worked yesterday. She went to London last year.</span></p>
    <p><b>Kiedy:</b> zakończone czynności, konkretny moment w przeszłości, kolejne wydarzenia.</p>

    <h3>Past Continuous – czynność w trakcie</h3>
    <p><b>Budowa:</b> <span class="en">was / were + czasownik-ing</span></p>
    <p><span class="en">I was working. She was sleeping. They were playing.</span></p>
    <p><b>Kiedy:</b> czynność trwała w danym momencie; tło dla innego wydarzenia; dwie czynności jednocześnie.</p>

    <h3>Past Simple + Past Continuous razem</h3>
    <table>
      <tr>
        <th>Past Continuous</th>
        <th>Past Simple</th>
      </tr>
      <tr>
        <td>czynność dłuższa, w trakcie</td>
        <td>krótkie wydarzenie, które przerwało</td>
      </tr>
    </table>
    <p><span class="en">I was watching TV when she called.</span></p>
    <p><span class="en">She was cooking when the phone rang.</span></p>
    <p><span class="en">They were walking home when it started to rain.</span></p>

    <h3>WHEN i WHILE</h3>
    <table>
      <tr><td class="en"><b>when</b> + Past Simple</td><td class="pl">kiedy coś się stało (krótkie)</td></tr>
      <tr><td class="en"><b>while</b> + Past Continuous</td><td class="pl">podczas gdy coś trwało</td></tr>
    </table>
    <p><span class="en">I was sleeping when you called.</span></p>
    <p><span class="en">While I was walking home, it started to rain.</span></p>

    <div class="tip-box">
      <b>Zapamiętaj:</b> czynność w trakcie = Past Continuous, przerywające wydarzenie = Past Simple.<br>
      <span class="en">I <b>was reading</b> a book when the lights <b>went out</b>.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wybierz poprawny czas" },
    { type: "gap", text: '<span class="en">I ________ (watch) TV when she called.</span>', answers: ["was watching"] },
    { type: "gap", text: '<span class="en">They ________ (play) football at 5 p.m.</span>', answers: ["were playing"] },
    { type: "gap", text: '<span class="en">She ________ (cook) when I arrived.</span>', answers: ["was cooking"] },
    { type: "gap", text: '<span class="en">We ________ (go) to school yesterday.</span>', answers: ["went"] },
    { type: "gap", text: '<span class="en">He ________ (work) at 8 p.m.</span>', answers: ["was working"] },
    { type: "gap", text: '<span class="en">It ________ (rain) when we left.</span>', answers: ["was raining"] },
    { type: "header", text: "B. Uzupełnij – Past Simple czy Past Continuous?" },
    { type: "gap", text: '<span class="en">I ________ (watch) TV when the phone ________ (ring).</span>', answers: ["was watching, rang", "was watching rang"] },
    { type: "gap", text: '<span class="en">She ________ (cook) dinner at 7 p.m.</span>', answers: ["was cooking"] },
    { type: "gap", text: '<span class="en">They ________ (play) football when it ________ (start) to rain.</span>', answers: ["were playing, started"] },
    { type: "gap", text: '<span class="en">We ________ (walk) home when we ________ (see) Tom.</span>', answers: ["were walking, saw"] },
    { type: "gap", text: '<span class="en">He ________ (sleep) when I ________ (call).</span>', answers: ["was sleeping, called"] },
    { type: "header", text: "C. When czy while?" },
    { type: "gap", text: '<span class="en">I was sleeping ________ you called.</span>', answers: ["when"] },
    { type: "gap", text: '<span class="en">________ I was walking home, I met Anna.</span>', answers: ["while"] },
    { type: "gap", text: '<span class="en">She was cooking ________ her husband arrived.</span>', answers: ["when"] },
    { type: "gap", text: '<span class="en">________ they were playing football, it started to rain.</span>', answers: ["while"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I was watch TV when he called. → ________</span>', answers: ["i was watching tv when he called", "i was watching tv when he called."], wide: true },
    { type: "gap", text: '<span class="en">They was playing football. → ________</span>', answers: ["they were playing football", "they were playing football."], wide: true },
    { type: "gap", text: '<span class="en">She were cooking dinner. → ________</span>', answers: ["she was cooking dinner", "she was cooking dinner."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Oglądałem telewizję, kiedy zadzwoniła.</span>', answers: ["i was watching tv when she called", "i was watching tv when she called.", "i was watching television when she called", "i was watching television when she called."], wide: true },
    { type: "gap", text: '<span class="pl">Spałem, kiedy zadzwoniłeś.</span>', answers: ["i was sleeping when you called", "i was sleeping when you called."], wide: true },
    { type: "gap", text: '<span class="pl">Kiedy szedłem do domu, zaczęło padać.</span>', answers: ["while i was walking home it started to rain", "while i was walking home, it started to rain", "while i was walking home, it started to rain.", "when i was walking home it started to rain"], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz, co robiłeś wczoraj o 7 wieczorem – coś się wydarzyło, gdy byłeś w trakcie innej czynności.", placeholder: "np. Yesterday at 7 I was... when..." }
  ],
  test: [
    { q: "I ______ TV when she called.", opcje: ["watched", "was watching", "watch", "watching"], poprawna: 1, wyjasnienie: "Czynność w trakcie → Past Continuous." },
    { q: "They ______ football at 6 p.m.", opcje: ["played", "were playing", "play", "playing"], poprawna: 1, wyjasnienie: "O konkretnej godzinie → Past Continuous." },
    { q: "She ______ dinner when I arrived.", opcje: ["cooked", "was cooking", "cooks", "cooking"], poprawna: 1, wyjasnienie: "Czynność przerwana → Past Continuous." },
    { q: "We ______ to school yesterday.", opcje: ["went", "were going", "go", "going"], poprawna: 0, wyjasnienie: "Zakończona czynność → Past Simple." },
    { q: "He ______ when the alarm rang.", opcje: ["slept", "was sleeping", "sleeps", "sleeping"], poprawna: 1, wyjasnienie: "W trakcie → Past Continuous." },
    { q: "I was walking home ______ I saw Peter.", opcje: ["when", "while", "during", "at"], poprawna: 0, wyjasnienie: "when + Past Simple (krótkie wydarzenie)." },
    { q: "______ I was reading, she was cooking.", opcje: ["When", "While", "During", "At"], poprawna: 1, wyjasnienie: "while + Past Continuous (dwie czynności równoległe)." },
    { q: "Which is correct?", opcje: ["They was playing.", "They were playing.", "They was play.", "They were play."], poprawna: 1, wyjasnienie: "Z 'they' → were + -ing." },
    { q: "She ______ TV when the phone rang.", opcje: ["watched", "was watching", "watch", "watches"], poprawna: 1, wyjasnienie: "Czynność przerwana → Past Continuous." },
    { q: "It ______ when we left the house.", opcje: ["rained", "was raining", "rains", "raining"], poprawna: 1, wyjasnienie: "Tło → Past Continuous." }
  ]
};

/* ============================================================
   G3A2 – Wybór formy przyszłości
============================================================ */
window.LESSON_DATA["G3A2"] = {
  tytul: "Wybór formy przyszłości",
  poziom: "A2",
  dzial: "G3",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Next weekend I am meeting my friend in a café – we arranged it yesterday. In the evening I'm going to study because I have an important exam on Monday. I hope I will pass it. If the weather is good on Sunday, we will probably go to the lake. I think it will be a great weekend. My train leaves at 8 a.m. on Saturday, so I need to get up early.
    </p>

    <h3>Trzy sposoby mówienia o przyszłości</h3>
    <table>
      <tr><th>Forma</th><th>Kiedy</th><th>Przykład</th></tr>
      <tr><td class="en"><b>will</b> + czasownik</td><td>decyzja teraz, obietnica, przewidywanie bez dowodów</td><td class="en">I'll help you. I think it will rain.</td></tr>
      <tr><td class="en"><b>going to</b></td><td>zamiar, plan, przewidywanie na podstawie oznak</td><td class="en">I'm going to study tonight. Look! It's going to rain.</td></tr>
      <tr><td class="en"><b>Present Continuous</b></td><td>ustalone plany, konkretne umowy</td><td class="en">I'm meeting Tom tomorrow at 6.</td></tr>
    </table>

    <h3>Present Simple dla rozkładów</h3>
    <p>Rozkłady jazdy, programy, harmonogramy:</p>
    <p><span class="en">The train leaves at 8 a.m. The film starts at 7 p.m. The lesson begins at 9.</span></p>

    <h3>Zdania czasowe</h3>
    <p>Po <b>when / before / after / as soon as / until</b> mówimy o przyszłości, ale używamy <b>Present Simple</b>:</p>
    <table>
      <tr><td class="en">I'll call you when I <b>arrive</b>.</td></tr>
      <tr><td class="en">We'll start after she <b>comes</b>.</td></tr>
      <tr><td class="en">I'll wait until you <b>finish</b>.</td></tr>
    </table>
    <div class="tip-box">
      ❌ <span class="en">I'll call you when I will arrive.</span><br>
      ✅ <span class="en">I'll call you when I arrive.</span>
    </div>

    <h3>Porównaj</h3>
    <table>
      <tr><td class="en">I'll get you some water. <span class="pl">(decyzja teraz)</span></td></tr>
      <tr><td class="en">I'm going to study tonight. <span class="pl">(zaplanowane wcześniej)</span></td></tr>
      <tr><td class="en">I'm meeting Anna tomorrow. <span class="pl">(umówione)</span></td></tr>
      <tr><td class="en">The train leaves at 8. <span class="pl">(rozkład)</span></td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Wybierz właściwą formę" },
    { type: "gap", text: '<span class="en">I ________ (meet) Tom tomorrow at 6. We arranged it.</span>', answers: ["am meeting"] },
    { type: "gap", text: '<span class="en">The train ________ (leave) at 8 tomorrow.</span>', answers: ["leaves"] },
    { type: "gap", text: '<span class="en">Look at those clouds! It ________ (rain).</span>', answers: ["is going to rain", "'s going to rain"] },
    { type: "gap", text: '<span class="en">I think she ________ (pass) the exam.</span>', answers: ["will pass"] },
    { type: "gap", text: '<span class="en">We ________ (fly) to Italy on Friday – we have tickets.</span>', answers: ["are flying"] },
    { type: "header", text: "B. Uzupełnij" },
    { type: "gap", text: '<span class="en">I ________ (meet) Anna tomorrow.</span>', answers: ["am meeting"] },
    { type: "gap", text: '<span class="en">The train ________ (leave) at 7:30.</span>', answers: ["leaves"] },
    { type: "gap", text: '<span class="en">We ________ (visit) our grandparents on Sunday.</span>', answers: ["are visiting"] },
    { type: "gap", text: '<span class="en">I think it ________ (be) difficult.</span>', answers: ["will be"] },
    { type: "gap", text: '<span class="en">Look at him! He ________ (fall).</span>', answers: ["is going to fall"] },
    { type: "header", text: "C. Zdania czasowe – wybierz" },
    { type: "gap", text: '<span class="en">I\'ll call you when I ________ (arrive).</span>', answers: ["arrive"] },
    { type: "gap", text: '<span class="en">We\'ll eat after she ________ (come).</span>', answers: ["comes"] },
    { type: "gap", text: '<span class="en">I\'ll wait until you ________ (finish).</span>', answers: ["finish"] },
    { type: "gap", text: '<span class="en">As soon as he ________ (get) here, we\'ll start.</span>', answers: ["gets"] },
    { type: "gap", text: '<span class="en">Before we ________ (leave), we need to check everything.</span>', answers: ["leave"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I\'ll call you when I will arrive. → ________</span>', answers: ["i'll call you when i arrive", "i'll call you when i arrive.", "i will call you when i arrive", "i will call you when i arrive."], wide: true },
    { type: "gap", text: '<span class="en">We will meeting Tom tomorrow. → ________</span>', answers: ["we are meeting tom tomorrow", "we are meeting tom tomorrow.", "we're meeting tom tomorrow", "we're meeting tom tomorrow."], wide: true },
    { type: "gap", text: '<span class="en">The train will leaves at 8. → ________</span>', answers: ["the train leaves at 8", "the train leaves at 8."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Spotykam się z Tomem jutro o 6.</span>', answers: ["i am meeting tom tomorrow at 6", "i am meeting tom tomorrow at 6.", "i'm meeting tom tomorrow at 6", "i'm meeting tom tomorrow at 6."], wide: true },
    { type: "gap", text: '<span class="pl">Zamierzam uczyć się dziś wieczorem.</span>', answers: ["i am going to study tonight", "i am going to study tonight.", "i'm going to study tonight", "i'm going to study tonight."], wide: true },
    { type: "gap", text: '<span class="pl">Zadzwonię do ciebie, kiedy przyjadę.</span>', answers: ["i'll call you when i arrive", "i'll call you when i arrive.", "i will call you when i arrive", "i will call you when i arrive."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz o swoich planach na najbliższy weekend – co masz umówione, co zamierzasz zrobić, co prawdopodobnie się wydarzy.", placeholder: "np. On Saturday I am meeting... I'm going to... I think I will..." }
  ],
  test: [
    { q: "I ______ Tom tomorrow at 6. We arranged it.", opcje: ["meet", "am meeting", "will meeting", "meeting"], poprawna: 1, wyjasnienie: "Ustalony plan → Present Continuous." },
    { q: "The train ______ at 8.", opcje: ["leaves", "is leaving", "will leaves", "leave"], poprawna: 0, wyjasnienie: "Rozkład → Present Simple." },
    { q: "Look at those clouds! It ______ rain.", opcje: ["will", "is going to", "is", "does"], poprawna: 1, wyjasnienie: "Widzę oznaki → going to." },
    { q: "I think she ______ pass the exam.", opcje: ["will", "is going", "going to", "is"], poprawna: 0, wyjasnienie: "Przewidywanie → will." },
    { q: "We ______ to Spain next week. We have tickets.", opcje: ["fly", "are flying", "will flying", "flying"], poprawna: 1, wyjasnienie: "Zaplanowane → Present Continuous." },
    { q: "I'll call you when I ______.", opcje: ["will arrive", "arrive", "arriving", "arrived"], poprawna: 1, wyjasnienie: "Po when → Present Simple (nie will)." },
    { q: "We'll start as soon as everyone ______ ready.", opcje: ["will be", "is", "be", "was"], poprawna: 1, wyjasnienie: "Po as soon as → Present Simple." },
    { q: "I ______ go to the party. I promise.", opcje: ["will", "am", "going", "do"], poprawna: 0, wyjasnienie: "Obietnica → will." },
    { q: "She ______ buy a new phone. She saved money.", opcje: ["will", "is going to", "going to", "is"], poprawna: 1, wyjasnienie: "Zamiar → going to." },
    { q: "Which is correct?", opcje: ["I'll call you when I will arrive.", "I call you when I arrive.", "I'll call you when I arrive.", "I will call you when I will arrive."], poprawna: 2, wyjasnienie: "Po when → Present Simple." }
  ]
};

/* ============================================================
   G4A2 – Modalne – rozszerzenie
============================================================ */
window.LESSON_DATA["G4A2"] = {
  tytul: "Modalne – rady, obowiązki, prośby",
  poziom: "A2",
  dzial: "G4",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My friend says she has a headache. I think she should see a doctor. She must also drink a lot of water and she shouldn't work so much. Yesterday I had to work late, but I didn't have to get up early today. Tomorrow I could help her, but I'm not sure if I will be able to. Maybe I should call her later to ask how she feels.
    </p>

    <h3>Powtórzenie – can / must / should</h3>
    <table>
      <tr><td class="en"><b>can</b></td><td>umiejętność, prośba: <span class="en">Can you help me?</span></td></tr>
      <tr><td class="en"><b>must</b></td><td>silny obowiązek (osobisty): <span class="en">I must study.</span></td></tr>
      <tr><td class="en"><b>should</b></td><td>rada: <span class="en">You should rest.</span></td></tr>
    </table>

    <h3>Nowe modalne</h3>
    <table>
      <tr><th>Modal</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>have to</b></td><td>obowiązek z zewnątrz</td><td class="en">I have to wear a uniform at work.</td></tr>
      <tr><td class="en"><b>don't have to</b></td><td>nie muszę</td><td class="en">You don't have to come.</td></tr>
      <tr><td class="en"><b>could</b></td><td>przeszłość (umiejętność), uprzejma prośba</td><td class="en">I could swim when I was 5. Could you help?</td></tr>
      <tr><td class="en"><b>may / might</b></td><td>możliwość</td><td class="en">It may rain. She might come.</td></tr>
      <tr><td class="en"><b>be able to</b></td><td>być w stanie (zamiast can w innych czasach)</td><td class="en">I will be able to help.</td></tr>
      <tr><td class="en"><b>ought to</b></td><td>rada (formalnie)</td><td class="en">You ought to rest.</td></tr>
    </table>

    <h3>Must vs have to</h3>
    <table>
      <tr><th>must</th><th>have to</th></tr>
      <tr><td>osobista konieczność, mówiący czuje</td><td>obowiązek z przepisów, sytuacji</td></tr>
      <tr><td class="en">I must call my mother.</td><td class="en">I have to wear a helmet (przepis).</td></tr>
    </table>

    <h3>Mustn't vs don't have to</h3>
    <table>
      <tr><th>mustn't</th><th>don't have to</th></tr>
      <tr><td>zakaz (nie wolno)</td><td>brak obowiązku (nie musisz)</td></tr>
      <tr><td class="en">You mustn't smoke here.</td><td class="en">You don't have to come.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> modalne bez "to" (wyjątek: have to, ought to, be able to).<br>
      ❌ <span class="en">I must to go.</span> ✅ <span class="en">I must go.</span><br>
      ❌ <span class="en">You should to rest.</span> ✅ <span class="en">You should rest.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij modalnym" },
    { type: "gap", text: '<span class="en">You look tired. You ________ rest.</span>', answers: ["should"] },
    { type: "gap", text: '<span class="en">I ________ work tomorrow. (obowiązek)</span>', answers: ["must", "have to"] },
    { type: "gap", text: '<span class="en">It ________ rain later. I\'m not sure.</span>', answers: ["might", "may"] },
    { type: "gap", text: '<span class="en">When I was young, I ________ run fast.</span>', answers: ["could"] },
    { type: "gap", text: '<span class="en">________ you help me, please?</span>', answers: ["could", "can"] },
    { type: "gap", text: '<span class="en">I will ________ to help you tomorrow.</span>', answers: ["be able"] },
    { type: "header", text: "B. Must czy have to?" },
    { type: "gap", text: '<span class="en">I ________ call my mother. I promised.</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">Students ________ wear uniforms at this school.</span>', answers: ["have to", "must"] },
    { type: "gap", text: '<span class="en">I ________ finish this today. I promised.</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">We ________ show our passports at the airport.</span>', answers: ["have to", "must"] },
    { type: "header", text: "C. Mustn't czy don't have to?" },
    { type: "gap", text: '<span class="en">You ________ smoke here. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">You ________ come tomorrow. (nie musisz)</span>', answers: ["don't have to", "do not have to"] },
    { type: "gap", text: '<span class="en">You ________ touch this machine. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">She ________ bring anything. (nie musi)</span>', answers: ["doesn't have to", "does not have to"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">You should to study more. → ________</span>', answers: ["you should study more", "you should study more."], wide: true },
    { type: "gap", text: '<span class="en">I must to go now. → ________</span>', answers: ["i must go now", "i must go now."], wide: true },
    { type: "gap", text: '<span class="en">Could you to help me? → ________</span>', answers: ["could you help me", "could you help me?"], wide: true },
    { type: "gap", text: '<span class="en">She might to be late. → ________</span>', answers: ["she might be late", "she might be late."], wide: true },
    { type: "gap", text: '<span class="en">He could played football. → ________</span>', answers: ["he could play football", "he could play football."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Powinieneś odpocząć.</span>', answers: ["you should rest", "you should rest.", "you should take a rest", "you should take a rest."], wide: true },
    { type: "gap", text: '<span class="pl">Nie wolno tu palić.</span>', answers: ["you mustn't smoke here", "you mustn't smoke here.", "you must not smoke here", "you must not smoke here."], wide: true },
    { type: "gap", text: '<span class="pl">Nie musisz przychodzić.</span>', answers: ["you don't have to come", "you don't have to come.", "you do not have to come", "you do not have to come."], wide: true },
    { type: "gap", text: '<span class="pl">Możesz mi pomóc?</span>', answers: ["can you help me", "can you help me?", "could you help me", "could you help me?"], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 5 zdań o obowiązkach i radach: co musisz robić, czego nie wolno, co powinieneś.", placeholder: "np. I have to... I mustn't... I should..." }
  ],
  test: [
    { q: "You look tired. You ______ rest.", opcje: ["should", "should to", "mustn't", "can to"], poprawna: 0, wyjasnienie: "Rada → should + czasownik." },
    { q: "I ______ work tomorrow. (obowiązek)", opcje: ["have to", "must to", "have", "should"], poprawna: 0, wyjasnienie: "have to = obowiązek z zewnątrz." },
    { q: "It ______ rain later. I'm not sure.", opcje: ["must", "might", "should", "can to"], poprawna: 1, wyjasnienie: "Możliwość niepewna → might." },
    { q: "When I was young, I ______ run fast.", opcje: ["can", "could", "could to", "am able"], poprawna: 1, wyjasnienie: "Przeszłość → could." },
    { q: "You ______ smoke here.", opcje: ["mustn't", "don't have to", "shouldn't to", "not must"], poprawna: 0, wyjasnienie: "Zakaz → mustn't." },
    { q: "You ______ come tomorrow. (nie musisz)", opcje: ["mustn't", "don't have to", "shouldn't", "can't"], poprawna: 1, wyjasnienie: "Brak obowiązku → don't have to." },
    { q: "Which is correct?", opcje: ["I must to go.", "I must go.", "I must going.", "I must to going."], poprawna: 1, wyjasnienie: "Modalne bez 'to'." },
    { q: "I will ______ to help you tomorrow.", opcje: ["can", "be able", "able", "could"], poprawna: 1, wyjasnienie: "will be able to." },
    { q: "Which is correct?", opcje: ["You should to study.", "You should studying.", "You should study.", "You should to studying."], poprawna: 2, wyjasnienie: "should + czasownik." },
    { q: "She ______ be late, but I'm not sure.", opcje: ["must", "might", "will", "should"], poprawna: 1, wyjasnienie: "Niepewna możliwość → might." }
  ]
};


/* ============================================================
   G5A2 – Zero i First Conditional
============================================================ */
window.LESSON_DATA["G5A2"] = {
  tytul: "Zero i First Conditional",
  poziom: "A2",
  dzial: "G5",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      If I have time tomorrow, I will go to the gym. I usually feel great after training. If you heat water to 100 degrees, it boils – that's science. My friend often says: "If it rains, we will stay at home and watch a film." If I don't sleep enough, I can't concentrate at school. So I always try to go to bed before eleven.
    </p>

    <h3>Zero Conditional – fakty i zasady</h3>
    <p>Mówimy o rzeczach <b>zawsze prawdziwych</b> (nauka, zasady, rutyna).</p>
    <p><b>Budowa:</b> <span class="en">If + Present Simple, Present Simple</span></p>
    <table>
      <tr><td class="en">If you heat water, it boils.</td></tr>
      <tr><td class="en">If I drink coffee late, I can't sleep.</td></tr>
      <tr><td class="en">If people don't eat, they get hungry.</td></tr>
      <tr><td class="en">If you don't water plants, they die.</td></tr>
    </table>

    <h3>First Conditional – realna przyszłość</h3>
    <p>Mówimy o <b>realnej możliwości w przyszłości</b>.</p>
    <p><b>Budowa:</b> <span class="en">If + Present Simple, will + czasownik</span></p>
    <table>
      <tr><td class="en">If it rains, I will stay at home.</td></tr>
      <tr><td class="en">If I have time, I will call you.</td></tr>
      <tr><td class="en">If she studies, she will pass the exam.</td></tr>
      <tr><td class="en">If we leave now, we will catch the bus.</td></tr>
    </table>

    <div class="tip-box">
      <b>Ważne:</b> po <b>if</b> NIE używamy will – nawet gdy mówimy o przyszłości.<br>
      ✅ <span class="en">If it rains, I will stay.</span><br>
      ❌ <span style="color:#991b1b">If it will rain, I will stay.</span>
    </div>

    <h3>UNLESS = if not</h3>
    <p><span class="en">Unless you hurry, you will be late.</span> = <span class="en">If you don't hurry, you will be late.</span></p>
    <p><b>unless</b> = jeśli nie / chyba że</p>

    <h3>Możliwe modyfikacje w głównej części</h3>
    <table>
      <tr><td class="en">If it rains, we <b>may</b> stay home.</td><td class="pl">(możliwość)</td></tr>
      <tr><td class="en">If you finish early, you <b>can</b> go home.</td><td class="pl">(pozwolenie)</td></tr>
      <tr><td class="en">If you see John, <b>call</b> me.</td><td class="pl">(tryb rozkazujący)</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Zero Conditional – uzupełnij" },
    { type: "gap", text: '<span class="en">If you heat ice, it ________ (melt).</span>', answers: ["melts"] },
    { type: "gap", text: '<span class="en">If I drink coffee late, I ________ (not / sleep).</span>', answers: ["don't sleep", "do not sleep"] },
    { type: "gap", text: '<span class="en">If people don\'t sleep, they ________ (feel) tired.</span>', answers: ["feel"] },
    { type: "gap", text: '<span class="en">If you mix blue and yellow, you ________ (get) green.</span>', answers: ["get"] },
    { type: "gap", text: '<span class="en">If water reaches 100°C, it ________ (boil).</span>', answers: ["boils"] },
    { type: "header", text: "B. First Conditional – uzupełnij" },
    { type: "gap", text: '<span class="en">If it ________ (rain), I ________ (stay) at home.</span>', answers: ["rains, will stay", "rains, i will stay"] },
    { type: "gap", text: '<span class="en">If I ________ (have) time, I ________ (call) you.</span>', answers: ["have, will call", "have, i will call"] },
    { type: "gap", text: '<span class="en">If she ________ (study), she ________ (pass).</span>', answers: ["studies, will pass", "studies, she will pass"] },
    { type: "gap", text: '<span class="en">If we ________ (leave) now, we ________ (catch) the bus.</span>', answers: ["leave, will catch", "leave, we will catch"] },
    { type: "gap", text: '<span class="en">If you ________ (not / hurry), you ________ (miss) the train.</span>', answers: ["don't hurry, will miss", "do not hurry, will miss"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">If it will rain, I will stay home. → ________</span>', answers: ["if it rains, i will stay home", "if it rains, i will stay home.", "if it rains, i'll stay home", "if it rains, i'll stay home."], wide: true },
    { type: "gap", text: '<span class="en">If she will study, she will pass. → ________</span>', answers: ["if she studies, she will pass", "if she studies, she will pass."], wide: true },
    { type: "gap", text: '<span class="en">When I will finish school, I will travel. → ________</span>', answers: ["when i finish school, i will travel", "when i finish school, i will travel."], wide: true },
    { type: "header", text: "D. UNLESS – zamień" },
    { type: "gap", text: '<span class="en">If you don\'t hurry, you will be late. → Unless you ________, you will be late.</span>', answers: ["hurry"], wide: true },
    { type: "gap", text: '<span class="en">If you don\'t study, you won\'t pass. → Unless you ________, you won\'t pass.</span>', answers: ["study"], wide: true },
    { type: "gap", text: '<span class="en">If it doesn\'t stop raining, we won\'t go out. → Unless it ________ raining, we won\'t go out.</span>', answers: ["stops"], wide: true },
    { type: "header", text: "E. Zero czy First?" },
    { type: "gap", text: '<span class="en">If you heat water to 100°C, it ________ (boil).</span>', answers: ["boils"] },
    { type: "gap", text: '<span class="en">If I have time tomorrow, I ________ (call) you.</span>', answers: ["will call", "'ll call"] },
    { type: "gap", text: '<span class="en">If people don\'t eat, they ________ (get) hungry.</span>', answers: ["get"] },
    { type: "gap", text: '<span class="en">If it rains tomorrow, we ________ (stay) at home.</span>', answers: ["will stay", "'ll stay"] },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Jeśli będzie padać, zostanę w domu.</span>', answers: ["if it rains i will stay at home", "if it rains, i will stay at home", "if it rains, i will stay at home.", "if it rains i'll stay at home", "if it rains, i'll stay at home"], wide: true },
    { type: "gap", text: '<span class="pl">Jeśli się pospieszysz, złapiesz autobus.</span>', answers: ["if you hurry you will catch the bus", "if you hurry, you will catch the bus", "if you hurry, you will catch the bus.", "if you hurry you'll catch the bus", "if you hurry, you'll catch the bus"], wide: true },
    { type: "gap", text: '<span class="pl">Jeśli nie będziesz się uczyć, nie zdasz.</span>', answers: ["if you don't study you won't pass", "if you don't study, you won't pass", "if you don't study, you won't pass.", "if you do not study you will not pass"], wide: true },
    { type: "header", text: "G. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań First Conditional o swoich planach (co zrobisz, jeśli...).", placeholder: "np. If I have time tomorrow, I will... If it rains, I will..." }
  ],
  test: [
    { q: "If you heat water, it ______.", opcje: ["boils", "will boil", "boiled", "is boiling"], poprawna: 0, wyjasnienie: "Zero Conditional – fakt." },
    { q: "If I have time, I ______ you.", opcje: ["call", "will call", "called", "would call"], poprawna: 1, wyjasnienie: "First – will w głównej części." },
    { q: "If it ______ tomorrow, we'll stay home.", opcje: ["rains", "will rain", "rained", "is raining"], poprawna: 0, wyjasnienie: "Po if – Present Simple." },
    { q: "Unless you hurry, you ______ late.", opcje: ["will be", "are", "were", "would be"], poprawna: 0, wyjasnienie: "Unless + Present, will + V." },
    { q: "If she ______, she will pass.", opcje: ["studies", "will study", "studied", "is studying"], poprawna: 0, wyjasnienie: "Po if – Present Simple." },
    { q: "If people don't eat, they ______ hungry.", opcje: ["get", "will get", "got", "are getting"], poprawna: 0, wyjasnienie: "Zero – fakt ogólny." },
    { q: "Which is correct?", opciones: [], opcje: ["If it will rain, I will stay.", "If it rains, I will stay.", "If it rains, I stay.", "If rains, I will stay."], poprawna: 1, wyjasnienie: "Po if NIE używamy will." },
    { q: "If you don't study, you ______ the exam.", opcje: ["won't pass", "don't pass", "wouldn't pass", "aren't passing"], poprawna: 0, wyjasnienie: "First – przeczenie woli = won't." },
    { q: "Unless you study, you ______ the test.", opcje: ["will fail", "fail", "failed", "would fail"], poprawna: 0, wyjasnienie: "Unless + will w głównej." },
    { q: "If it doesn't rain, we ______ to the park.", opcje: ["will go", "go", "went", "would go"], poprawna: 0, wyjasnienie: "First – will go." }
  ]
};

/* ============================================================
   G6A2 – Reported Speech – podstawy
============================================================ */
window.LESSON_DATA["G6A2"] = {
  tytul: "Mowa zależna – podstawy",
  poziom: "A2",
  dzial: "G6",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Yesterday my friend told me that she was very tired. She said she had worked all day and she didn't want to go out. She also said that she would call me the next day. I told her that I understood. Later I met Tom and he said he was going to the cinema on Saturday. I asked him if I could join him.
    </p>

    <h3>SAY czy TELL?</h3>
    <table>
      <tr><th>SAY</th><th>TELL</th></tr>
      <tr><td>bez osoby: <span class="en">She said (that)...</span></td><td>z osobą: <span class="en">She told me (that)...</span></td></tr>
      <tr><td class="en">He said he was tired.</td><td class="en">He told me he was tired.</td></tr>
    </table>
    <div class="tip-box">
      ❌ <span class="en">She said me...</span> → ✅ <span class="en">She told me...</span>
    </div>

    <h3>Zmiana czasów – cofamy o jeden</h3>
    <table>
      <tr><th>Direct speech</th><th>Reported speech</th></tr>
      <tr><td class="en">Present Simple</td><td class="en">Past Simple</td></tr>
      <tr><td class="en">Present Continuous</td><td class="en">Past Continuous</td></tr>
      <tr><td class="en">Past Simple</td><td class="en">Past Perfect</td></tr>
      <tr><td class="en">will</td><td class="en">would</td></tr>
      <tr><td class="en">can</td><td class="en">could</td></tr>
      <tr><td class="en">must</td><td class="en">had to</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><td class="en">"I <b>am</b> happy." → She said she <b>was</b> happy.</td></tr>
      <tr><td class="en">"I <b>work</b> here." → He said he <b>worked</b> there.</td></tr>
      <tr><td class="en">"I <b>am reading</b>." → She said she <b>was reading</b>.</td></tr>
      <tr><td class="en">"I <b>saw</b> him." → He said he <b>had seen</b> him.</td></tr>
      <tr><td class="en">"I <b>will</b> come." → She said she <b>would</b> come.</td></tr>
      <tr><td class="en">"I <b>can</b> help." → He said he <b>could</b> help.</td></tr>
    </table>

    <h3>Zmiana określeń czasu i miejsca</h3>
    <table>
      <tr><td class="en">now → then</td></tr>
      <tr><td class="en">today → that day</td></tr>
      <tr><td class="en">tomorrow → the next day</td></tr>
      <tr><td class="en">yesterday → the day before</td></tr>
      <tr><td class="en">here → there</td></tr>
      <tr><td class="en">this → that</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> "that" po say/tell można pominąć.<br>
      <span class="en">She said (that) she was tired.</span> – obie wersje są OK.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Say czy tell?" },
    { type: "gap", text: '<span class="en">She ________ me the truth.</span>', answers: ["told"] },
    { type: "gap", text: '<span class="en">He ________ that he was tired.</span>', answers: ["said"] },
    { type: "gap", text: '<span class="en">I ________ her my name.</span>', answers: ["told"] },
    { type: "gap", text: '<span class="en">She ________ hello.</span>', answers: ["said"] },
    { type: "gap", text: '<span class="en">He ________ me to wait.</span>', answers: ["told"] },
    { type: "gap", text: '<span class="en">She ________ she was hungry.</span>', answers: ["said"] },
    { type: "header", text: "B. Zmiana czasów – uzupełnij" },
    { type: "gap", text: '<span class="en">"I am tired." → He said he ________ tired.</span>', answers: ["was"], wide: true },
    { type: "gap", text: '<span class="en">"I work here." → She said she ________ there.</span>', answers: ["worked"], wide: true },
    { type: "gap", text: '<span class="en">"I will call you." → He said he ________ call me.</span>', answers: ["would"], wide: true },
    { type: "gap", text: '<span class="en">"I can swim." → She said she ________ swim.</span>', answers: ["could"], wide: true },
    { type: "gap", text: '<span class="en">"I am reading." → He said he ________ reading.</span>', answers: ["was"], wide: true },
    { type: "gap", text: '<span class="en">"I saw him." → She said she ________ him.</span>', answers: ["had seen"], wide: true },
    { type: "gap", text: '<span class="en">"I have finished." → He said he ________ finished.</span>', answers: ["had"], wide: true },
    { type: "header", text: "C. Zmiana określeń" },
    { type: "gap", text: '<span class="en">"I am busy today." → He said he was busy ________.</span>', answers: ["that day"], wide: true },
    { type: "gap", text: '<span class="en">"I will do it tomorrow." → She said she would do it ________.</span>', answers: ["the next day"], wide: true },
    { type: "gap", text: '<span class="en">"I saw him yesterday." → He said he had seen him ________.</span>', answers: ["the day before"], wide: true },
    { type: "gap", text: '<span class="en">"I live here." → She said she lived ________.</span>', answers: ["there"], wide: true },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">She said me she was tired. → ________</span>', answers: ["she told me she was tired", "she told me she was tired.", "she told me that she was tired", "she told me that she was tired."], wide: true },
    { type: "gap", text: '<span class="en">He said he will come. → ________</span>', answers: ["he said he would come", "he said he would come.", "he said that he would come", "he said that he would come."], wide: true },
    { type: "gap", text: '<span class="en">She told that she was sad. → ________</span>', answers: ["she said she was sad", "she said she was sad.", "she said that she was sad", "she said that she was sad."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Powiedział, że jest zmęczony.</span>', answers: ["he said he was tired", "he said he was tired.", "he said that he was tired", "he said that he was tired."], wide: true },
    { type: "gap", text: '<span class="pl">Powiedziała mi, że pracuje w banku.</span>', answers: ["she told me she worked in a bank", "she told me she worked in a bank.", "she told me that she worked in a bank", "she told me that she worked in a bank."], wide: true },
    { type: "gap", text: '<span class="pl">Powiedział, że przyjdzie.</span>', answers: ["he said he would come", "he said he would come.", "he said that he would come", "he said that he would come."], wide: true },
    { type: "gap", text: '<span class="pl">Powiedziała, że nie rozumie.</span>', answers: ["she said she didn't understand", "she said she didn't understand.", "she said that she didn't understand", "she said that she didn't understand."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Przekształć 5 zdań, które powiedzieli ci ostatnio znajomi, na mowę zależną.", placeholder: "np. My friend said (that) he was tired..." }
  ],
  test: [
    { q: "She ______ that she was tired.", opcje: ["said", "told", "asked", "say"], poprawna: 0, wyjasnienie: "Bez osoby → said." },
    { q: "He ______ me that he was busy.", opcje: ["told", "said", "ask", "say"], poprawna: 0, wyjasnienie: "Z osobą → told me." },
    { q: '"I am happy." → She said she ______ happy.', opcje: ["was", "is", "were", "has been"], poprawna: 0, wyjasnienie: "am → was." },
    { q: '"I work here." → He said he worked ______.', opcje: ["there", "here", "this", "now"], poprawna: 0, wyjasnienie: "here → there." },
    { q: '"I will come." → She said she ______ come.', opcje: ["would", "will", "can", "could"], poprawna: 0, wyjasnienie: "will → would." },
    { q: '"I can help." → He said he ______ help.', opcje: ["could", "can", "would", "will"], poprawna: 0, wyjasnienie: "can → could." },
    { q: "today → ______ w mowie zależnej.", opcje: ["that day", "the next day", "yesterday", "tomorrow"], poprawna: 0, wyjasnienie: "today → that day." },
    { q: "tomorrow → ______ w mowie zależnej.", opcje: ["the next day", "that day", "yesterday", "today"], poprawna: 0, wyjasnienie: "tomorrow → the next day." },
    { q: "Popraw: She said me the truth.", opcje: ["She told me the truth.", "She said to the truth.", "She tell me the truth.", "She said me it."], poprawna: 0, wyjasnienie: "tell + osoba → told me." },
    { q: '"I saw him." → She said she ______ him.', opcje: ["had seen", "saw", "has seen", "sees"], poprawna: 0, wyjasnienie: "Past Simple → Past Perfect." }
  ]
};

/* ============================================================
   G7A2 – Passive Voice – Present i Past
============================================================ */
window.LESSON_DATA["G7A2"] = {
  tytul: "Strona bierna – Present i Past",
  poziom: "A2",
  dzial: "G7",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My school was built in 1975 and it is cleaned every day by the caretaker. Many things are made in our town – cars, furniture and clothes. Yesterday a new bridge was opened by the mayor. English is spoken all over the world. My bike was stolen last week, so now I go to school on foot. Tickets for the concert are sold online.
    </p>

    <h3>Strona czynna vs bierna</h3>
    <table>
      <tr><th>Active (ktoś coś robi)</th><th>Passive (coś jest zrobione)</th></tr>
      <tr>
        <td class="en">People clean the room every day.</td>
        <td class="en">The room is cleaned every day.</td>
      </tr>
      <tr>
        <td class="en">Someone stole my bike.</td>
        <td class="en">My bike was stolen.</td>
      </tr>
    </table>

    <h3>Budowa</h3>
    <p><b>be + III forma czasownika (Past Participle)</b></p>
    <table>
      <tr><th>Czas</th><th>Budowa</th><th>Przykład</th></tr>
      <tr><td>Present Simple</td><td class="en">am / is / are + III</td><td class="en">The room is cleaned.</td></tr>
      <tr><td>Past Simple</td><td class="en">was / were + III</td><td class="en">The bridge was built.</td></tr>
    </table>

    <h3>Kiedy używać strony biernej</h3>
    <ul>
      <li>Gdy <b>nie wiemy</b> kto to zrobił: <span class="en">My bike was stolen.</span></li>
      <li>Gdy <b>nie jest ważne</b> kto: <span class="en">English is spoken here.</span></li>
      <li>W opisach, instrukcjach, regulaminach: <span class="en">The tickets are sold online.</span></li>
    </ul>

    <h3>Wykonawca – "by"</h3>
    <p>Jeśli chcemy powiedzieć <b>kto</b> coś zrobił, używamy <b>by</b>:</p>
    <table>
      <tr><td class="en">The bridge was opened <b>by the mayor</b>.</td></tr>
      <tr><td class="en">The room is cleaned <b>by the caretaker</b>.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> "be" zmienia się przez osoby:<br>
      <span class="en">I am · you are · he/she/it is · we/they are</span> (Present)<br>
      <span class="en">I/he/she/it was · you/we/they were</span> (Past)
    </div>
  `,
  karta: [
    { type: "header", text: "A. is czy are?" },
    { type: "gap", text: '<span class="en">The door ________ closed.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">The rooms ________ cleaned every day.</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">The food ________ prepared here.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">The windows ________ open.</span>', answers: ["are"] },
    { type: "gap", text: '<span class="en">English ________ spoken here.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">Cars ________ made in this factory.</span>', answers: ["are"] },
    { type: "header", text: "B. Present Simple Passive" },
    { type: "gap", text: '<span class="en">The room ________ (clean) every day.</span>', answers: ["is cleaned"] },
    { type: "gap", text: '<span class="en">Cars ________ (produce) in this factory.</span>', answers: ["are produced"] },
    { type: "gap", text: '<span class="en">The food ________ (serve) here.</span>', answers: ["is served"] },
    { type: "gap", text: '<span class="en">English ________ (speak) all over the world.</span>', answers: ["is spoken"] },
    { type: "gap", text: '<span class="en">Tickets ________ (sell) online.</span>', answers: ["are sold"] },
    { type: "header", text: "C. Past Simple Passive" },
    { type: "gap", text: '<span class="en">The house ________ (build) in 1990.</span>', answers: ["was built"] },
    { type: "gap", text: '<span class="en">The car ________ (repair) yesterday.</span>', answers: ["was repaired"] },
    { type: "gap", text: '<span class="en">The windows ________ (clean) last week.</span>', answers: ["were cleaned"] },
    { type: "gap", text: '<span class="en">The documents ________ (send) on Monday.</span>', answers: ["were sent"] },
    { type: "gap", text: '<span class="en">The bridge ________ (open) in 2010.</span>', answers: ["was opened"] },
    { type: "header", text: "D. Zamień na stronę bierną" },
    { type: "gap", text: '<span class="en">People clean the room every day. → The room ________ every day.</span>', answers: ["is cleaned"], wide: true },
    { type: "gap", text: '<span class="en">They built the bridge in 2010. → The bridge ________ in 2010.</span>', answers: ["was built"], wide: true },
    { type: "gap", text: '<span class="en">People speak English here. → English ________ here.</span>', answers: ["is spoken"], wide: true },
    { type: "gap", text: '<span class="en">They make cars in this factory. → Cars ________ in this factory.</span>', answers: ["are made"], wide: true },
    { type: "gap", text: '<span class="en">Someone stole my bike. → My bike ________.</span>', answers: ["was stolen"], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Ten dom został zbudowany w 1990.</span>', answers: ["this house was built in 1990", "this house was built in 1990.", "the house was built in 1990", "the house was built in 1990."], wide: true },
    { type: "gap", text: '<span class="pl">Angielski jest używany na całym świecie.</span>', answers: ["english is spoken all over the world", "english is spoken all over the world."], wide: true },
    { type: "gap", text: '<span class="pl">Mój rower został skradziony.</span>', answers: ["my bike was stolen", "my bike was stolen."], wide: true },
    { type: "gap", text: '<span class="pl">Bilety są sprzedawane online.</span>', answers: ["tickets are sold online", "tickets are sold online."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 3 zdania w stronie biernej o swoim mieście lub szkole.", placeholder: "np. My school was built in... English is spoken..." }
  ],
  test: [
    { q: "The door ______ closed.", opcje: ["is", "are", "be", "am"], poprawna: 0, wyjasnienie: "Liczba poj. → is + III." },
    { q: "The rooms ______ cleaned every day.", opcje: ["is", "are", "am", "be"], poprawna: 1, wyjasnienie: "The rooms = l.mn. → are." },
    { q: "The house ______ built in 1990.", opcje: ["was", "is", "were", "are"], poprawna: 0, wyjasnienie: "Past Passive l.poj." },
    { q: "The windows ______ cleaned last week.", opcje: ["was", "were", "is", "are"], poprawna: 1, wyjasnienie: "The windows = l.mn. → were." },
    { q: "English ______ in many countries.", opcje: ["is spoken", "speaks", "is speaking", "spoke"], poprawna: 0, wyjasnienie: "Present Passive → is + III." },
    { q: "The car ______ repaired yesterday.", opcje: ["was", "is", "were", "are"], poprawna: 0, wyjasnienie: "Past Passive, l.poj." },
    { q: "Zamień: People clean the room. → The room ______.", opcje: ["is cleaned", "cleans", "was clean", "is cleaning"], poprawna: 0, wyjasnienie: "Present Passive." },
    { q: "Zamień: They built the bridge in 2010. → The bridge ______ in 2010.", opcje: ["was built", "is built", "built", "was building"], poprawna: 0, wyjasnienie: "Past Passive." },
    { q: "Zamień: They make cars here. → Cars ______ here.", opcje: ["are made", "make", "is made", "are making"], poprawna: 0, wyjasnienie: "l.mn. Present Passive." },
    { q: "Wykonawcę w stronie biernej wprowadzamy przez ______.", opcje: ["by", "with", "from", "of"], poprawna: 0, wyjasnienie: "by + wykonawca." }
  ]
};

/* ============================================================
   G8A2 – Szyk zdania i przysłówki
============================================================ */
window.LESSON_DATA["G8A2"] = {
  tytul: "Szyk zdania i przysłówki",
  poziom: "A2",
  dzial: "G8",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I always get up early. I usually have breakfast at 7. My sister often goes to school by bike. She never takes the bus. She is always on time. I sometimes meet my friends after lessons. We usually go to a café in the centre. Yesterday we stayed there for two hours. I like coffee very much, but I never drink it after 6 p.m.
    </p>

    <h3>Szyk zdania angielskiego</h3>
    <p><b>Podmiot + czasownik + dopełnienie + określenia (sposób → miejsce → czas)</b></p>
    <table>
      <tr><th>Podmiot</th><th>Czas.</th><th>Dopełn.</th><th>Sposób</th><th>Miejsce</th><th>Czas</th></tr>
      <tr><td class="en">I</td><td class="en">watched</td><td class="en">a film</td><td class="en">carefully</td><td class="en">at home</td><td class="en">yesterday.</td></tr>
    </table>

    <h3>Miejsce przysłówków częstotliwości</h3>
    <p>always, usually, often, sometimes, never idą <b>przed czasownikiem głównym</b>, ale <b>po "be"</b>.</p>
    <table>
      <tr><th>Z czasownikiem głównym</th><th>Z "be"</th></tr>
      <tr><td class="en">I always get up at 7.</td><td class="en">She is always late.</td></tr>
      <tr><td class="en">She usually walks to work.</td><td class="en">I am never tired.</td></tr>
      <tr><td class="en">They often eat out.</td><td class="en">We are sometimes busy.</td></tr>
    </table>

    <h3>Kolejność określeń miejsca i czasu</h3>
    <p>Najpierw <b>miejsce</b>, potem <b>czas</b>:</p>
    <table>
      <tr><td class="en">I saw him at school yesterday.</td></tr>
      <tr><td class="en">We met in London last year.</td></tr>
    </table>

    <h3>SO / NEITHER – krótkie reakcje</h3>
    <table>
      <tr><th>Zdanie wyjściowe</th><th>Reakcja</th></tr>
      <tr><td class="en">I like coffee.</td><td class="en">So do I. <span class="pl">(Ja też)</span></td></tr>
      <tr><td class="en">She is tired.</td><td class="en">So am I.</td></tr>
      <tr><td class="en">I don't like tea.</td><td class="en">Neither do I. <span class="pl">(Ja też nie)</span></td></tr>
      <tr><td class="en">He isn't happy.</td><td class="en">Neither am I.</td></tr>
    </table>

    <div class="tip-box">
      ✅ <span class="en">I always get up early.</span><br>
      ❌ <span style="color:#991b1b">I get up always early.</span><br>
      ❌ <span style="color:#991b1b">Always I get up early.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Ułóż zdania w prawidłowej kolejności" },
    { type: "gap", text: '<span class="en">[music / like / I / very much] → ________</span>', answers: ["i like music very much", "i like music very much."], wide: true },
    { type: "gap", text: '<span class="en">[at school / saw / I / him / yesterday] → ________</span>', answers: ["i saw him at school yesterday", "i saw him at school yesterday.", "yesterday i saw him at school"], wide: true },
    { type: "gap", text: '<span class="en">[English / speak / they / well] → ________</span>', answers: ["they speak english well", "they speak english well."], wide: true },
    { type: "header", text: "B. Wstaw przysłówek we właściwym miejscu" },
    { type: "gap", text: '<span class="en">I get up at 7. (always) → ________</span>', answers: ["i always get up at 7", "i always get up at 7.", "i always get up at seven", "i always get up at seven."], wide: true },
    { type: "gap", text: '<span class="en">She walks to work. (usually) → ________</span>', answers: ["she usually walks to work", "she usually walks to work."], wide: true },
    { type: "gap", text: '<span class="en">He smokes. (never) → ________</span>', answers: ["he never smokes", "he never smokes."], wide: true },
    { type: "gap", text: '<span class="en">They eat out. (often) → ________</span>', answers: ["they often eat out", "they often eat out."], wide: true },
    { type: "gap", text: '<span class="en">She is late. (always) → ________</span>', answers: ["she is always late", "she is always late."], wide: true },
    { type: "gap", text: '<span class="en">I am tired. (never) → ________</span>', answers: ["i am never tired", "i am never tired.", "i'm never tired", "i'm never tired."], wide: true },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I get up always early. → ________</span>', answers: ["i always get up early", "i always get up early."], wide: true },
    { type: "gap", text: '<span class="en">She is late always. → ________</span>', answers: ["she is always late", "she is always late."], wide: true },
    { type: "gap", text: '<span class="en">Always I have breakfast at 7. → ________</span>', answers: ["i always have breakfast at 7", "i always have breakfast at 7.", "i always have breakfast at seven", "i always have breakfast at seven."], wide: true },
    { type: "header", text: "D. So czy neither?" },
    { type: "gap", text: '<span class="en">I like coffee. → ________ I.</span>', answers: ["so do"] },
    { type: "gap", text: '<span class="en">She is tired. → ________ I.</span>', answers: ["so am"] },
    { type: "gap", text: '<span class="en">I don\'t like tea. → ________ I.</span>', answers: ["neither do"] },
    { type: "gap", text: '<span class="en">He isn\'t happy. → ________ I.</span>', answers: ["neither am"] },
    { type: "gap", text: '<span class="en">They can swim. → ________ I.</span>', answers: ["so can"] },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zawsze wstaję o 7.</span>', answers: ["i always get up at 7", "i always get up at 7.", "i always get up at seven", "i always get up at seven."], wide: true },
    { type: "gap", text: '<span class="pl">Ona nigdy nie pije kawy.</span>', answers: ["she never drinks coffee", "she never drinks coffee."], wide: true },
    { type: "gap", text: '<span class="pl">Czasami spotykam znajomych po lekcjach.</span>', answers: ["i sometimes meet my friends after lessons", "i sometimes meet my friends after lessons.", "sometimes i meet my friends after lessons"], wide: true },
    { type: "gap", text: '<span class="pl">Lubię kawę. – Ja też.</span>', answers: ["i like coffee so do i", "i like coffee. so do i", "i like coffee. so do i."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 5 zdań o swojej codzienności, używając przysłówków always, usually, often, sometimes, never.", placeholder: "np. I always... I usually... I never..." }
  ],
  test: [
    { q: "Which sentence is correct?", opcje: ["I like music.", "I music like.", "Music I like.", "Like I music."], poprawna: 0, wyjasnienie: "Szyk: podmiot + czasownik + dopełnienie." },
    { q: "Which sentence is correct?", opcje: ["She always is late.", "She is always late.", "Always she is late.", "She late always is."], poprawna: 1, wyjasnienie: "Przysłówek po 'be'." },
    { q: "Which sentence is correct?", opcje: ["I get always up early.", "I always get up early.", "Always I get up early.", "I get up always early."], poprawna: 1, wyjasnienie: "Przysłówek przed czasownikiem głównym." },
    { q: "I like coffee. So ______ I.", opcje: ["do", "am", "have", "will"], poprawna: 0, wyjasnienie: "Present Simple → so do I." },
    { q: "She is tired. So ______ I.", opcje: ["am", "do", "have", "will"], poprawna: 0, wyjasnienie: "Czasownik 'be' → so am I." },
    { q: "I don't like tea. Neither ______ I.", opcje: ["do", "am", "have", "will"], poprawna: 0, wyjasnienie: "Przeczenie z do → neither do I." },
    { q: "Where did you see him? – I saw him ______.", opcje: ["at school yesterday", "yesterday at school", "yesterday school", "school yesterday"], poprawna: 0, wyjasnienie: "Kolejność: miejsce + czas." },
    { q: "Which is correct?", opcje: ["He never smokes.", "He smokes never.", "Never he smokes.", "He never smokes not."], poprawna: 0, wyjasnienie: "never przed czasownikiem głównym." },
    { q: "They play football. (often) →", opcje: ["They often play football.", "They play often football.", "Often they play football.", "They play football often."], poprawna: 0, wyjasnienie: "Przysłówek przed czasownikiem." },
    { q: "She works here. (never) →", opcje: ["She never works here.", "She works never here.", "Never works she here.", "She never here works."], poprawna: 0, wyjasnienie: "Przysłówek przed czasownikiem." }
  ]
};


/* ============================================================
   G9A2 – Przedimki – rozszerzenie
============================================================ */
window.LESSON_DATA["G9A2"] = {
  tytul: "Przedimki – zasady i wyjątki",
  poziom: "A2",
  dzial: "G9",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Yesterday I bought a book and a magazine. The book is about the history of Poland. I read it in the evening before I went to bed. My sister has an interesting hobby – she collects old coins. She has a coin from the Roman Empire. In the morning I usually drink a cup of coffee, but today I had tea. I love the smell of fresh bread.
    </p>

    <h3>Kiedy a / an</h3>
    <p><b>a / an</b> = przedimek nieokreślony – gdy mówimy o czymś <b>po raz pierwszy</b>, o jednej rzeczy z wielu.</p>
    <table>
      <tr><td class="en">a</td><td>przed spółgłoską: <span class="en">a book, a car, a university</span></td></tr>
      <tr><td class="en">an</td><td>przed samogłoską: <span class="en">an apple, an egg, an hour, an MBA</span></td></tr>
    </table>
    <p><b>Uwaga:</b> <span class="en">an hour</span> (h nieme), <span class="en">a university</span> (wymowa /juː/ jak spółgłoska).</p>

    <h3>Kiedy the</h3>
    <p><b>the</b> = przedimek określony – gdy mówimy o <b>konkretnej rzeczy</b>.</p>
    <table>
      <tr><td class="en">Już wspomniane:</td><td class="en">I have a cat. The cat is black.</td></tr>
      <tr><td class="en">Jedno w swoim rodzaju:</td><td class="en">the sun, the moon, the sky</td></tr>
      <tr><td class="en">Konkretna rzecz:</td><td class="en">The book on the table is mine.</td></tr>
      <tr><td class="en">Superlatywy:</td><td class="en">the best, the tallest</td></tr>
      <tr><td class="en">Rzeki, morza:</td><td class="en">the Vistula, the Baltic</td></tr>
      <tr><td class="en">Państwa w lm.:</td><td class="en">the Netherlands, the USA, the UK</td></tr>
      <tr><td class="en">Instrumenty:</td><td class="en">play the piano, play the guitar</td></tr>
    </table>

    <h3>Kiedy BEZ przedimka</h3>
    <table>
      <tr><td class="en">Liczba mnoga ogólnie:</td><td class="en">I like dogs.</td></tr>
      <tr><td class="en">Niepoliczalne:</td><td class="en">I like music.</td></tr>
      <tr><td class="en">Imiona:</td><td class="en">Anna, Tom</td></tr>
      <tr><td class="en">Większość państw, miast:</td><td class="en">Poland, Warsaw</td></tr>
      <tr><td class="en">Posiłki:</td><td class="en">I eat breakfast at 8.</td></tr>
      <tr><td class="en">Sport:</td><td class="en">I play football.</td></tr>
      <tr><td class="en">Języki:</td><td class="en">I speak English.</td></tr>
      <tr><td class="en">Dni, miesiące:</td><td class="en">on Monday, in May</td></tr>
    </table>

    <h3>Trudne przypadki</h3>
    <table>
      <tr><td class="en">go to school / go to <b>the</b> school</td><td class="pl">uczyć się / iść do budynku</td></tr>
      <tr><td class="en">go to bed / go to <b>the</b> bed</td><td class="pl">iść spać / podejść do łóżka</td></tr>
      <tr><td class="en">at home / at <b>the</b> home</td><td class="pl">w domu / w domu opieki</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> pierwsza wzmianka = <b>a/an</b>, druga wzmianka = <b>the</b>.<br>
      <span class="en">I saw a film. The film was great.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wstaw a / an / the lub – (nic)" },
    { type: "gap", text: '<span class="en">I have ________ dog. ________ dog is very friendly.</span>', answers: ["a, the", "a the"] },
    { type: "gap", text: '<span class="en">She is ________ engineer.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">________ sun is very bright today.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I like ________ music.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">I go to ________ school every day.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">I eat ________ breakfast at 8.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">It was ________ hour before we left.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">________ Netherlands is in Europe.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">She plays ________ piano very well.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I live in ________ Poland.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">We saw ________ elephant at the zoo. ________ elephant was huge.</span>', answers: ["an, the", "an the"] },
    { type: "header", text: "B. Wstaw właściwy przedimek w tekście" },
    { type: "gap", text: '<span class="en">Yesterday I bought ________ book and ________ magazine.</span>', answers: ["a, a", "a a"] },
    { type: "gap", text: '<span class="en">________ book is about ________ history of Poland.</span>', answers: ["the, the", "the the"] },
    { type: "gap", text: '<span class="en">I read it before I went to ________ bed.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">My sister has ________ interesting hobby.</span>', answers: ["an"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I have a apple. → ________</span>', answers: ["i have an apple", "i have an apple."], wide: true },
    { type: "gap", text: '<span class="en">She is doctor. → ________</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="en">I like the dogs. → ________</span>', answers: ["i like dogs", "i like dogs."], wide: true },
    { type: "gap", text: '<span class="en">Sun is hot today. → ________</span>', answers: ["the sun is hot today", "the sun is hot today."], wide: true },
    { type: "gap", text: '<span class="en">I go to the school every day. → ________ (uczę się)</span>', answers: ["i go to school every day", "i go to school every day."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">To jest ciekawa książka. Ta książka jest o Polsce.</span>', answers: ["this is an interesting book the book is about poland", "this is an interesting book. the book is about poland", "this is an interesting book. the book is about poland."], wide: true },
    { type: "gap", text: '<span class="pl">Ona jest lekarką.</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię psy.</span>', answers: ["i like dogs", "i like dogs."], wide: true },
    { type: "gap", text: '<span class="pl">Słońce jest dzisiaj jasne.</span>', answers: ["the sun is bright today", "the sun is bright today."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Napisz 5 zdań o rzeczach, które kupiłeś / masz / lubisz. Użyj różnych przedimków.", placeholder: "np. I have a dog. The dog is... I like music. Yesterday I bought..." }
  ],
  test: [
    { q: "I have ______ dog.", opcje: ["a", "an", "the", "-"], poprawna: 0, wyjasnienie: "Pierwsza wzmianka, przed spółgłoską → a." },
    { q: "She has ______ apple.", opcje: ["a", "an", "the", "-"], poprawna: 1, wyjasnienie: "Przed samogłoską → an." },
    { q: "He is ______ doctor.", opcje: ["a", "an", "the", "-"], poprawna: 0, wyjasnienie: "Zawody z a/an." },
    { q: "I have a cat. ______ cat is black.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Druga wzmianka → the." },
    { q: "______ sun is very bright.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Jedno w swoim rodzaju → the." },
    { q: "I like ______ music.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Niepoliczalne → bez przedimka." },
    { q: "I go to ______ school every day.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Szkoła ogólnie → bez przedimka." },
    { q: "It was ______ hour.", opcje: ["a", "an", "the", "-"], poprawna: 1, wyjasnienie: "Nieme 'h' → an." },
    { q: "I eat ______ breakfast at 8.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Posiłki → bez przedimka." },
    { q: "She plays ______ piano.", opcje: ["a", "an", "the", "-"], poprawna: 2, wyjasnienie: "Instrumenty → the." }
  ]
};

/* ============================================================
   G10A2 – Określniki ilości
============================================================ */
window.LESSON_DATA["G10A2"] = {
  tytul: "Określniki – some, any, much, many",
  poziom: "A2",
  dzial: "G10",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      In my kitchen I have some apples, some bread and a little cheese. There isn't any milk in the fridge, so I need to buy some. How much money do I have? I don't have much, only a few coins. How many eggs are there? There are a few, maybe three or four. I usually don't put much sugar in my tea, just a little. There are a lot of vegetables in the shop.
    </p>

    <h3>Some czy any?</h3>
    <table>
      <tr><th>SOME (twierdzenia)</th><th>ANY (pytania i przeczenia)</th></tr>
      <tr>
        <td class="en">I have some money.<br>There are some books.</td>
        <td class="en">Do you have any money?<br>I don't have any money.</td>
      </tr>
    </table>
    <p><b>Wyjątek:</b> w uprzejmych pytaniach możemy użyć <b>some</b>:<br>
    <span class="en">Would you like some tea? (uprzejma propozycja)</span></p>

    <h3>Much czy many?</h3>
    <table>
      <tr><th>MUCH – niepoliczalne</th><th>MANY – policzalne</th></tr>
      <tr>
        <td class="en">How much money?<br>I don't have much time.</td>
        <td class="en">How many books?<br>How many people?</td>
      </tr>
    </table>

    <h3>A lot of – działa z oboma</h3>
    <p><span class="en">I have a lot of money. I have a lot of books.</span></p>

    <h3>A few / a little</h3>
    <table>
      <tr><th>A FEW – policzalne</th><th>A LITTLE – niepoliczalne</th></tr>
      <tr>
        <td class="en">I have a few books. <span class="pl">(kilka)</span></td>
        <td class="en">I have a little money. <span class="pl">(trochę)</span></td>
      </tr>
    </table>

    <h3>Few / little – bez "a" (negatywne)</h3>
    <table>
      <tr><th>FEW = mało (prawie nic)</th><th>LITTLE = mało (prawie nic)</th></tr>
      <tr>
        <td class="en">I have few friends. <span class="pl">(niewielu – to smutne)</span></td>
        <td class="en">I have little time. <span class="pl">(prawie wcale)</span></td>
      </tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>some</b> – twierdzenia · <b>any</b> – pytania/przeczenia<br>
      <b>much</b> – niepoliczalne · <b>many</b> – policzalne<br>
      <b>a few</b> = kilka · <b>a little</b> = trochę
    </div>
  `,
  karta: [
    { type: "header", text: "A. some czy any?" },
    { type: "gap", text: '<span class="en">I have ________ money.</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">Do you have ________ questions?</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ time.</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">There are ________ books on the table.</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">Is there ________ milk in the fridge?</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">Would you like ________ tea?</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">I need to buy ________ bread.</span>', answers: ["some"] },
    { type: "header", text: "B. much czy many?" },
    { type: "gap", text: '<span class="en">How ________ money do you have?</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">How ________ books are there?</span>', answers: ["many"] },
    { type: "gap", text: '<span class="en">How ________ people came?</span>', answers: ["many"] },
    { type: "gap", text: '<span class="en">How ________ water is there?</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ time.</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">She doesn\'t have ________ friends.</span>', answers: ["many"] },
    { type: "header", text: "C. a few czy a little?" },
    { type: "gap", text: '<span class="en">I have ________ books.</span>', answers: ["a few"] },
    { type: "gap", text: '<span class="en">I have ________ money.</span>', answers: ["a little"] },
    { type: "gap", text: '<span class="en">I speak ________ English.</span>', answers: ["a little"] },
    { type: "gap", text: '<span class="en">There are ________ apples.</span>', answers: ["a few"] },
    { type: "gap", text: '<span class="en">I have ________ sugar in my tea.</span>', answers: ["a little"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I don\'t have some money. → ________</span>', answers: ["i don't have any money", "i don't have any money.", "i do not have any money", "i do not have any money."], wide: true },
    { type: "gap", text: '<span class="en">How many money? → ________</span>', answers: ["how much money", "how much money?"], wide: true },
    { type: "gap", text: '<span class="en">How much books? → ________</span>', answers: ["how many books", "how many books?"], wide: true },
    { type: "gap", text: '<span class="en">I have a little books. → ________</span>', answers: ["i have a few books", "i have a few books."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam trochę pieniędzy.</span>', answers: ["i have some money", "i have some money.", "i have a little money", "i have a little money."], wide: true },
    { type: "gap", text: '<span class="pl">Ile masz pieniędzy?</span>', answers: ["how much money do you have", "how much money do you have?"], wide: true },
    { type: "gap", text: '<span class="pl">Ile masz książek?</span>', answers: ["how many books do you have", "how many books do you have?"], wide: true },
    { type: "gap", text: '<span class="pl">Nie mam dużo czasu.</span>', answers: ["i don't have much time", "i don't have much time.", "i do not have much time", "i do not have much time."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 5 zdań o tym, co masz: ile masz pieniędzy, książek, czasu, przyjaciół, jedzenia.", placeholder: "np. I have a few books. I don't have much time..." }
  ],
  test: [
    { q: "I have ______ money.", opcje: ["some", "any", "many", "much"], poprawna: 0, wyjasnienie: "Twierdzenie → some." },
    { q: "Do you have ______ questions?", opcje: ["some", "any", "many", "much"], poprawna: 1, wyjasnienie: "Pytanie → any." },
    { q: "How ______ money?", opcje: ["much", "many", "some", "any"], poprawna: 0, wyjasnienie: "Money – niepoliczalne → much." },
    { q: "How ______ books?", opcje: ["much", "many", "some", "any"], poprawna: 1, wyjasnienie: "Books – policzalne → many." },
    { q: "There are ______ books on the table.", opcje: ["some", "any", "much", "a little"], poprawna: 0, wyjasnienie: "Twierdzenie → some." },
    { q: "I have ______ books. (kilka)", opcje: ["a few", "a little", "much", "any"], poprawna: 0, wyjasnienie: "Policzalne → a few." },
    { q: "I have ______ money. (trochę)", opcje: ["a few", "a little", "many", "any"], poprawna: 1, wyjasnienie: "Niepoliczalne → a little." },
    { q: "I don't have ______ questions.", opcje: ["some", "any", "much", "many"], poprawna: 1, wyjasnienie: "Przeczenie → any." },
    { q: "How ______ people came?", opcje: ["much", "many", "some", "any"], poprawna: 1, wyjasnienie: "People – policzalne → many." },
    { q: "I don't have ______ time.", opcje: ["some", "any", "many", "few"], poprawna: 1, wyjasnienie: "Przeczenie z 'time' (niepoliczalne) → any." }
  ]
};

/* ============================================================
   G11A2 – Przyimki – rozszerzenie
============================================================ */
window.LESSON_DATA["G11A2"] = {
  tytul: "Przyimki – powtórzenie i utrwalone zwroty",
  poziom: "A2",
  dzial: "G11",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I was born in 2006. My birthday is on 5th May. I usually get up at 7 a.m. In the morning I go to school by bus. At school I sit next to my best friend. After lessons I go home and have lunch at 3 p.m. In the evening I do my homework and sometimes I watch a film on TV. At night I go to bed at about 11 p.m. On Saturday I usually visit my grandparents.
    </p>

    <h3>Przyimki czasu – powtórzenie</h3>
    <table>
      <tr><th>IN</th><th>ON</th><th>AT</th></tr>
      <tr>
        <td>miesiące, lata, pory roku<br>pory dnia (oprócz nocy)<br><span class="en">in May, in 2025, in summer<br>in the morning</span></td>
        <td>dni tygodnia, daty<br>dni z częścią dnia<br><span class="en">on Monday, on 5th May<br>on Monday morning</span></td>
        <td>godziny, noc, święta<br>weekend<br><span class="en">at 7, at night, at Christmas<br>at the weekend</span></td>
      </tr>
    </table>
    <p><b>Bez przyimka:</b> next week, last year, this month, tomorrow, yesterday, today.</p>

    <h3>Przyimki miejsca – powtórzenie</h3>
    <table>
      <tr><th>IN</th><th>ON</th><th>AT</th></tr>
      <tr>
        <td>zamknięte przestrzenie, kraje, miasta<br><span class="en">in a box, in Poland, in Warsaw</span></td>
        <td>powierzchnie, transport<br><span class="en">on the table, on a bus</span></td>
        <td>konkretne miejsca, budynki<br><span class="en">at the door, at school</span></td>
      </tr>
    </table>

    <h3>Utrwalone zwroty z przyimkami</h3>
    <table>
      <tr><th>Zwrot</th><th>Znaczenie</th></tr>
      <tr><td class="en">be good <b>at</b> something</td><td class="pl">być dobrym w czymś</td></tr>
      <tr><td class="en">be interested <b>in</b></td><td class="pl">interesować się</td></tr>
      <tr><td class="en">depend <b>on</b></td><td class="pl">zależeć od</td></tr>
      <tr><td class="en">listen <b>to</b></td><td class="pl">słuchać</td></tr>
      <tr><td class="en">look <b>at</b></td><td class="pl">patrzeć na</td></tr>
      <tr><td class="en">look <b>for</b></td><td class="pl">szukać</td></tr>
      <tr><td class="en">look <b>after</b></td><td class="pl">opiekować się</td></tr>
      <tr><td class="en">wait <b>for</b></td><td class="pl">czekać na</td></tr>
      <tr><td class="en">ask <b>for</b></td><td class="pl">prosić o</td></tr>
      <tr><td class="en">belong <b>to</b></td><td class="pl">należeć do</td></tr>
      <tr><td class="en">apologise <b>for</b></td><td class="pl">przepraszać za</td></tr>
      <tr><td class="en">complain <b>about</b></td><td class="pl">skarżyć się na</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">in the morning</span>, ale <span class="en">at night</span>.<br>
      <span class="en">on Monday</span>, ale <span class="en">in May</span>.<br>
      Czasowniki z przyimkami trzeba <b>zapamiętać</b> – nie ma reguły.
    </div>
  `,
  karta: [
    { type: "header", text: "A. In / on / at – czas" },
    { type: "gap", text: '<span class="en">I was born ________ 2006.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">My birthday is ________ 5th May.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">I get up ________ 7 a.m.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">________ the morning I go to school.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">________ night I go to bed at 11.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">________ Saturday I visit my grandparents.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">We\'ll see you ________ Christmas.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">I usually go on holiday ________ summer.</span>', answers: ["in"] },
    { type: "header", text: "B. In / on / at – miejsce" },
    { type: "gap", text: '<span class="en">I live ________ Warsaw.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">The book is ________ the table.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">I\'ll meet you ________ the bus stop.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">She\'s ________ home.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">We are ________ the car.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">I sit ________ my best friend (obok).</span>', answers: ["next to", "beside"] },
    { type: "header", text: "C. Uzupełnij przyimek w zwrocie" },
    { type: "gap", text: '<span class="en">I\'m good ________ maths.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">She is interested ________ music.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">It depends ________ the weather.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">I\'m listening ________ the radio.</span>', answers: ["to"] },
    { type: "gap", text: '<span class="en">Look ________ this photo!</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">I\'m looking ________ my keys.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">She looks ________ her little brother.</span>', answers: ["after"] },
    { type: "gap", text: '<span class="en">Wait ________ me, please.</span>', answers: ["for"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Urodziłem się w maju.</span>', answers: ["i was born in may", "i was born in may."], wide: true },
    { type: "gap", text: '<span class="pl">Spotkajmy się w poniedziałek.</span>', answers: ["let's meet on monday", "let's meet on monday.", "we will meet on monday", "we'll meet on monday"], wide: true },
    { type: "gap", text: '<span class="pl">Jestem dobry z matematyki.</span>', answers: ["i am good at maths", "i am good at maths.", "i'm good at maths", "i'm good at maths.", "i am good at math"], wide: true },
    { type: "gap", text: '<span class="pl">Czekam na autobus.</span>', answers: ["i am waiting for the bus", "i am waiting for the bus.", "i'm waiting for the bus", "i'm waiting for the bus."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Napisz 5 zdań o swoim dniu, używając przyimków czasu (in, on, at).", placeholder: "np. I was born in... I get up at... On Monday I..." }
  ],
  test: [
    { q: "I was born ______ May.", opcje: ["in", "on", "at", "-"], poprawna: 0, wyjasnienie: "Miesiące → in." },
    { q: "See you ______ Monday.", opcje: ["in", "on", "at", "-"], poprawna: 1, wyjasnienie: "Dni → on." },
    { q: "The meeting starts ______ 9 o'clock.", opcje: ["in", "on", "at", "-"], poprawna: 2, wyjasnienie: "Godziny → at." },
    { q: "I get up early ______ the morning.", opcje: ["in", "on", "at", "-"], poprawna: 0, wyjasnienie: "Pory dnia → in the morning." },
    { q: "I live ______ Warsaw.", opcje: ["in", "on", "at", "-"], poprawna: 0, wyjasnienie: "Miasta → in." },
    { q: "The book is ______ the table.", opcje: ["in", "on", "at", "-"], poprawna: 1, wyjasnienie: "Powierzchnie → on." },
    { q: "She's ______ home.", opcje: ["in", "on", "at", "-"], poprawna: 2, wyjasnienie: "at home – utrwalone." },
    { q: "I'm good ______ maths.", opcje: ["in", "on", "at", "of"], poprawna: 2, wyjasnienie: "be good at – utrwalone." },
    { q: "It depends ______ the weather.", opcje: ["in", "on", "at", "of"], poprawna: 1, wyjasnienie: "depend on – utrwalone." },
    { q: "I'm looking ______ my keys.", opcje: ["after", "for", "at", "to"], poprawna: 1, wyjasnienie: "look for = szukać." }
  ]
};

/* ============================================================
   G12A2 – Stopniowanie – porównania
============================================================ */
window.LESSON_DATA["G12A2"] = {
  tytul: "Stopniowanie i porównania",
  poziom: "A2",
  dzial: "G12",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My sister is two years older than me, but I am taller than her. We both like sport, but she is much better at tennis than me. I am the youngest person in my family. My grandmother is the oldest. She is also the kindest person I know. My brother is as tall as my father now. Our dog is the most friendly animal in the world.
    </p>

    <h3>Stopniowanie – powtórzenie</h3>
    <table>
      <tr><th>Stopień równy</th><th>Stopień wyższy</th><th>Stopień najwyższy</th></tr>
      <tr><td class="en">tall</td><td class="en">taller</td><td class="en">the tallest</td></tr>
      <tr><td class="en">big</td><td class="en">bigger</td><td class="en">the biggest</td></tr>
      <tr><td class="en">happy</td><td class="en">happier</td><td class="en">the happiest</td></tr>
      <tr><td class="en">expensive</td><td class="en">more expensive</td><td class="en">the most expensive</td></tr>
    </table>
    <p><b>Nieregularne:</b> <span class="en">good → better → best · bad → worse → worst · far → further → furthest</span></p>

    <h3>Konstrukcje porównawcze</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en">as ... as</td><td class="pl">tak ... jak</td><td class="en">I'm as tall as my father.</td></tr>
      <tr><td class="en">not as ... as</td><td class="pl">nie tak ... jak</td><td class="en">She isn't as tall as me.</td></tr>
      <tr><td class="en">... than</td><td class="pl">... niż</td><td class="en">She is taller than me.</td></tr>
      <tr><td class="en">the ... in / of</td><td class="pl">naj ... w / z</td><td class="en">He is the tallest in the class.</td></tr>
    </table>

    <h3>Wzmacnianie porównań</h3>
    <table>
      <tr><td class="en"><b>much</b> + stopień wyższy</td><td class="en">She is much taller than me. <span class="pl">(dużo wyższa)</span></td></tr>
      <tr><td class="en"><b>a bit</b> + stopień wyższy</td><td class="en">He is a bit taller. <span class="pl">(trochę wyższy)</span></td></tr>
      <tr><td class="en"><b>a lot</b> + stopień wyższy</td><td class="en">This is a lot better. <span class="pl">(o wiele lepszy)</span></td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> "niż" = <b>than</b> (nie "then"!).<br>
      <span class="en">She is taller than me. ✅</span><br>
      <span style="color:#991b1b">She is taller then me. ❌</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Utwórz stopnie" },
    { type: "gap", text: '<span class="en">tall → ________ → ________</span>', answers: ["taller, tallest", "taller tallest"] },
    { type: "gap", text: '<span class="en">big → ________ → ________</span>', answers: ["bigger, biggest", "bigger biggest"] },
    { type: "gap", text: '<span class="en">happy → ________ → ________</span>', answers: ["happier, happiest", "happier happiest"] },
    { type: "gap", text: '<span class="en">expensive → ________ → ________</span>', answers: ["more expensive, most expensive"] },
    { type: "gap", text: '<span class="en">good → ________ → ________</span>', answers: ["better, best", "better best"] },
    { type: "gap", text: '<span class="en">bad → ________ → ________</span>', answers: ["worse, worst", "worse worst"] },
    { type: "header", text: "B. Wstaw w zdanie (stopień wyższy)" },
    { type: "gap", text: '<span class="en">She is ________ (tall) than me.</span>', answers: ["taller"] },
    { type: "gap", text: '<span class="en">This book is ________ (interesting) than that one.</span>', answers: ["more interesting"] },
    { type: "gap", text: '<span class="en">My house is ________ (big) than yours.</span>', answers: ["bigger"] },
    { type: "gap", text: '<span class="en">This exam is ________ (bad) than the last one.</span>', answers: ["worse"] },
    { type: "gap", text: '<span class="en">She is ________ (good) at maths than me.</span>', answers: ["better"] },
    { type: "header", text: "C. Stopień najwyższy" },
    { type: "gap", text: '<span class="en">He is ________ (good) student in the class.</span>', answers: ["the best"] },
    { type: "gap", text: '<span class="en">This is ________ (expensive) restaurant in town.</span>', answers: ["the most expensive"] },
    { type: "gap", text: '<span class="en">She is ________ (happy) person I know.</span>', answers: ["the happiest"] },
    { type: "gap", text: '<span class="en">He is ________ (tall) in the class.</span>', answers: ["the tallest"] },
    { type: "header", text: "D. as ... as – uzupełnij" },
    { type: "gap", text: '<span class="en">I am ________ tall ________ my father.</span>', answers: ["as as", "as, as"] },
    { type: "gap", text: '<span class="en">She isn\'t ________ clever ________ her sister.</span>', answers: ["as as", "as, as"] },
    { type: "gap", text: '<span class="en">This test was ________ easy ________ the last one.</span>', answers: ["as as", "as, as"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">She is more tall than me. → ________</span>', answers: ["she is taller than me", "she is taller than me."], wide: true },
    { type: "gap", text: '<span class="en">He is the goodest student. → ________</span>', answers: ["he is the best student", "he is the best student."], wide: true },
    { type: "gap", text: '<span class="en">This is more cheap. → ________</span>', answers: ["this is cheaper", "this is cheaper."], wide: true },
    { type: "gap", text: '<span class="en">She is taller then me. → ________</span>', answers: ["she is taller than me", "she is taller than me."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Ona jest wyższa niż ja.</span>', answers: ["she is taller than me", "she is taller than me.", "she's taller than me", "she's taller than me."], wide: true },
    { type: "gap", text: '<span class="pl">To jest najładniejszy dom w mieście.</span>', answers: ["this is the most beautiful house in the city", "this is the most beautiful house in the city.", "this is the nicest house in the city", "this is the nicest house in the city."], wide: true },
    { type: "gap", text: '<span class="pl">On jest tak samo wysoki jak jego ojciec.</span>', answers: ["he is as tall as his father", "he is as tall as his father.", "he's as tall as his father", "he's as tall as his father."], wide: true },
    { type: "gap", text: '<span class="pl">Mam lepszy pomysł.</span>', answers: ["i have a better idea", "i have a better idea.", "i've got a better idea", "i've got a better idea."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Porównaj siebie z 3 osobami z rodziny lub znajomych – kto jest starszy, wyższy, lepszy w czymś.", placeholder: "np. My brother is older than me. My sister is the tallest..." }
  ],
  test: [
    { q: "She is ______ than me.", opcje: ["taller", "more tall", "the tallest", "tall"], poprawna: 0, wyjasnienie: "Krótkie → -er + than." },
    { q: "He is ______ student in the class.", opcje: ["the best", "better", "the goodest", "more good"], poprawna: 0, wyjasnienie: "Nieregularny: good → the best." },
    { q: "This book is ______ than that one.", opcje: ["more interesting", "interestinger", "the most interesting", "interesting"], poprawna: 0, wyjasnienie: "Długie → more + przymiotnik." },
    { q: "My house is ______ than yours.", opcje: ["bigger", "more big", "the biggest", "big"], poprawna: 0, wyjasnienie: "1 sylaba CVC → podwój: bigger." },
    { q: "This exam is ______ than the last one.", opcje: ["worse", "more bad", "the worst", "badder"], poprawna: 0, wyjasnienie: "Nieregularny: bad → worse." },
    { q: "I am ______ tall ______ my father.", opcje: ["so / like", "as / as", "as / like", "so / as"], poprawna: 1, wyjasnienie: "as ... as – konstrukcja równa." },
    { q: "This is ______ restaurant in town.", opcje: ["the most expensive", "more expensive", "the expensivest", "the more expensive"], poprawna: 0, wyjasnienie: "Długie → the most + przymiotnik." },
    { q: "happy → ?", opcje: ["happier", "more happy", "happyer", "happiest"], poprawna: 0, wyjasnienie: "Spółgłoska + y → -ier." },
    { q: "My car is ______ than yours.", opcje: ["better", "gooder", "the best", "more good"], poprawna: 0, wyjasnienie: "Nieregularny: good → better." },
    { q: "She is ______ girl in the class.", opcje: ["the nicest", "nicer", "more nice", "the most nice"], poprawna: 0, wyjasnienie: "nice → nicer → the nicest." }
  ]
};


/* ============================================================
   G13A2 – Bezokolicznik i -ing (rozszerzenie)
============================================================ */
window.LESSON_DATA["G13A2"] = {
  tytul: "Bezokolicznik i forma -ing – rozszerzenie",
  poziom: "A2",
  dzial: "G13",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I enjoy learning new languages, but I hate getting up early. Yesterday I decided to start a new hobby. I want to learn to play the guitar. My friend suggested going to a music school together. I agreed to try it. I hope to become a good musician one day. I'm also interested in learning about other cultures, so I'm thinking of travelling more.
    </p>

    <h3>Trzy grupy czasowników</h3>
    <p><b>1. Czasownik + to + bezokolicznik</b></p>
    <table>
      <tr><td class="en">want</td><td class="en">I want to go home.</td></tr>
      <tr><td class="en">need</td><td class="en">I need to sleep.</td></tr>
      <tr><td class="en">would like</td><td class="en">I would like to help.</td></tr>
      <tr><td class="en">decide</td><td class="en">She decided to stay.</td></tr>
      <tr><td class="en">hope</td><td class="en">I hope to see you.</td></tr>
      <tr><td class="en">try</td><td class="en">He tried to call.</td></tr>
      <tr><td class="en">forget</td><td class="en">Don't forget to buy milk.</td></tr>
      <tr><td class="en">learn</td><td class="en">I'm learning to drive.</td></tr>
      <tr><td class="en">agree</td><td class="en">She agreed to come.</td></tr>
      <tr><td class="en">promise</td><td class="en">He promised to help.</td></tr>
      <tr><td class="en">plan</td><td class="en">We plan to travel.</td></tr>
      <tr><td class="en">manage</td><td class="en">She managed to finish.</td></tr>
    </table>

    <p><b>2. Czasownik + -ing</b></p>
    <table>
      <tr><td class="en">like</td><td class="en">I like swimming.</td></tr>
      <tr><td class="en">love</td><td class="en">She loves reading.</td></tr>
      <tr><td class="en">hate</td><td class="en">He hates waiting.</td></tr>
      <tr><td class="en">enjoy</td><td class="en">I enjoy cooking.</td></tr>
      <tr><td class="en">finish</td><td class="en">She finished working.</td></tr>
      <tr><td class="en">stop</td><td class="en">He stopped smoking.</td></tr>
      <tr><td class="en">start / begin</td><td class="en">It started raining.</td></tr>
      <tr><td class="en">suggest</td><td class="en">He suggested going out.</td></tr>
      <tr><td class="en">avoid</td><td class="en">I avoid eating sugar.</td></tr>
      <tr><td class="en">mind</td><td class="en">Do you mind waiting?</td></tr>
      <tr><td class="en">keep</td><td class="en">She keeps asking questions.</td></tr>
    </table>

    <p><b>3. Po przyimkach – zawsze -ing</b></p>
    <table>
      <tr><td class="en">good at</td><td class="en">I'm good at drawing.</td></tr>
      <tr><td class="en">interested in</td><td class="en">I'm interested in learning English.</td></tr>
      <tr><td class="en">think of / about</td><td class="en">I'm thinking of moving.</td></tr>
      <tr><td class="en">before / after</td><td class="en">Before going out, I check my phone.</td></tr>
      <tr><td class="en">afraid of</td><td class="en">He's afraid of flying.</td></tr>
      <tr><td class="en">tired of</td><td class="en">I'm tired of waiting.</td></tr>
    </table>

    <h3>Różnice znaczenia</h3>
    <table>
      <tr><td class="en">stop smoking <span class="pl">= rzucić palenie</span></td></tr>
      <tr><td class="en">stop to smoke <span class="pl">= zatrzymać się, żeby zapalić</span></td></tr>
      <tr><td class="en">remember to do <span class="pl">= pamiętać, żeby zrobić</span></td></tr>
      <tr><td class="en">remember doing <span class="pl">= pamiętać, że się zrobiło</span></td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>want / need / would like / decide / hope / plan + TO</b><br>
      <b>like / love / hate / enjoy / finish / suggest + -ING</b><br>
      <b>Po przyimkach zawsze -ING</b>
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
    { type: "gap", text: '<span class="en">He suggested ________ (go) to the cinema.</span>', answers: ["going"] },
    { type: "gap", text: '<span class="en">She keeps ________ (ask) questions.</span>', answers: ["asking"] },
    { type: "header", text: "B. Uzupełnij zdanie" },
    { type: "gap", text: '<span class="en">I\'m good at ________ (draw).</span>', answers: ["drawing"] },
    { type: "gap", text: '<span class="en">I\'m interested in ________ (learn) English.</span>', answers: ["learning"] },
    { type: "gap", text: '<span class="en">Don\'t forget ________ (buy) milk.</span>', answers: ["to buy"] },
    { type: "gap", text: '<span class="en">He stopped ________ (smoke). (rzucił palenie)</span>', answers: ["smoking"] },
    { type: "gap", text: '<span class="en">I\'m learning ________ (drive).</span>', answers: ["to drive"] },
    { type: "gap", text: '<span class="en">I\'m thinking of ________ (move) to another city.</span>', answers: ["moving"] },
    { type: "gap", text: '<span class="en">She promised ________ (call) me.</span>', answers: ["to call"] },
    { type: "gap", text: '<span class="en">He\'s afraid of ________ (fly).</span>', answers: ["flying"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I want going home. → ________</span>', answers: ["i want to go home", "i want to go home."], wide: true },
    { type: "gap", text: '<span class="en">She likes to swim. (o hobby) → ________</span>', answers: ["she likes swimming", "she likes swimming."], wide: true },
    { type: "gap", text: '<span class="en">I need sleeping. → ________</span>', answers: ["i need to sleep", "i need to sleep."], wide: true },
    { type: "gap", text: '<span class="en">He suggested to go out. → ________</span>', answers: ["he suggested going out", "he suggested going out."], wide: true },
    { type: "gap", text: '<span class="en">I am interested to learn English. → ________</span>', answers: ["i am interested in learning english", "i am interested in learning english.", "i'm interested in learning english", "i'm interested in learning english."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Chcę iść do domu.</span>', answers: ["i want to go home", "i want to go home."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię czytać książki.</span>', answers: ["i like reading books", "i like reading books."], wide: true },
    { type: "gap", text: '<span class="pl">Potrzebuję odpocząć.</span>', answers: ["i need to rest", "i need to rest."], wide: true },
    { type: "gap", text: '<span class="pl">Zasugerował wyjście.</span>', answers: ["he suggested going out", "he suggested going out.", "she suggested going out", "she suggested going out."], wide: true },
    { type: "gap", text: '<span class="pl">Interesuję się nauką języków.</span>', answers: ["i am interested in learning languages", "i am interested in learning languages.", "i'm interested in learning languages", "i'm interested in learning languages."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Napisz 5 zdań: co lubisz, czego nie lubisz, co chcesz zrobić, co planujesz.", placeholder: "np. I like swimming. I hate getting up early. I want to..." }
  ],
  test: [
    { q: "I want ______ home.", opcje: ["to go", "going", "go", "to going"], poprawna: 0, wyjasnienie: "want + to + bezokolicznik." },
    { q: "She likes ______.", opcje: ["swimming", "to swim", "swim", "swims"], poprawna: 0, wyjasnienie: "like + -ing." },
    { q: "I need ______.", opcje: ["to sleep", "sleeping", "sleep", "slept"], poprawna: 0, wyjasnienie: "need + to." },
    { q: "They enjoy ______.", opcje: ["cooking", "to cook", "cook", "cooked"], poprawna: 0, wyjasnienie: "enjoy + -ing." },
    { q: "I would like ______ you.", opcje: ["to help", "helping", "help", "helped"], poprawna: 0, wyjasnienie: "would like + to." },
    { q: "I'm good at ______.", opcje: ["drawing", "to draw", "draw", "drew"], poprawna: 0, wyjasnienie: "Po przyimku → -ing." },
    { q: "She finished ______.", opcje: ["working", "to work", "work", "worked"], poprawna: 0, wyjasnienie: "finish + -ing." },
    { q: "Don't forget ______ milk.", opcje: ["to buy", "buying", "buy", "bought"], poprawna: 0, wyjasnienie: "forget + to." },
    { q: "He suggested ______ out.", opcje: ["going", "to go", "go", "went"], poprawna: 0, wyjasnienie: "suggest + -ing." },
    { q: "I hope ______ you soon.", opcje: ["to see", "seeing", "see", "saw"], poprawna: 0, wyjasnienie: "hope + to." }
  ]
};

/* ============================================================
   G14A2 – Zdania przydawkowe (who / which / that / where)
============================================================ */
window.LESSON_DATA["G14A2"] = {
  tytul: "Zdania przydawkowe – rozszerzenie",
  poziom: "A2",
  dzial: "G14",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I have a friend who lives in Spain. His house, which is near the beach, is very big. He has a dog that loves swimming in the sea. We often go to a café where we can sit for hours and talk. I also have a cousin whose mother is from Italy. She speaks three languages, which is very impressive. The book that I'm reading now is about a man who travels the world.
    </p>

    <h3>Zaimki względne</h3>
    <table>
      <tr><th>Zaimek</th><th>Dla</th><th>Przykład</th></tr>
      <tr><td class="en"><b>who</b></td><td>osoby</td><td class="en">The man who lives next door.</td></tr>
      <tr><td class="en"><b>which</b></td><td>rzeczy</td><td class="en">The book which I bought.</td></tr>
      <tr><td class="en"><b>that</b></td><td>osoby i rzeczy</td><td class="en">The car that I want.</td></tr>
      <tr><td class="en"><b>where</b></td><td>miejsca</td><td class="en">The house where I live.</td></tr>
      <tr><td class="en"><b>whose</b></td><td>czyj</td><td class="en">The girl whose father is a doctor.</td></tr>
    </table>

    <h3>Łączenie dwóch zdań</h3>
    <table>
      <tr><td class="en">I have a friend. He lives in Spain. → I have a friend <b>who</b> lives in Spain.</td></tr>
      <tr><td class="en">This is a book. I bought it. → This is the book <b>which</b> I bought.</td></tr>
      <tr><td class="en">This is a café. We sit here. → This is the café <b>where</b> we sit.</td></tr>
    </table>

    <h3>That zamiast who / which</h3>
    <p>W mowie potocznej <b>that</b> może zastąpić <b>who</b> i <b>which</b>:</p>
    <table>
      <tr><td class="en">The girl that sings is my sister. (= who)</td></tr>
      <tr><td class="en">The car that I want is red. (= which)</td></tr>
    </table>
    <p><b>Ale nie zastępuje "where" ani "whose".</b></p>

    <h3>Pomijanie zaimka</h3>
    <p>Gdy zaimek jest <b>dopełnieniem</b>, można go pominąć:</p>
    <table>
      <tr><td class="en">The film (that) we watched was great. ✅</td></tr>
      <tr><td class="en">The man (who) I met was nice. ✅</td></tr>
    </table>
    <p>Ale gdy jest <b>podmiotem</b> – nie pomijamy:</p>
    <table>
      <tr><td class="en">The man who lives here. <span class="pl">(nie można pominąć)</span></td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>who</b> – osoby · <b>which</b> – rzeczy · <b>that</b> – oba (potocznie)<br>
      <b>where</b> – miejsca · <b>whose</b> – czyj
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wstaw właściwy zaimek" },
    { type: "gap", text: '<span class="en">The man ________ lives next door is my uncle.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">The book ________ I bought is interesting.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">The house ________ I live is old.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">The girl ________ sings is my sister.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">The film ________ we watched was great.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">The girl ________ father is a doctor is my friend.</span>', answers: ["whose"] },
    { type: "gap", text: '<span class="en">The café ________ we sit is nice.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">I have a friend ________ lives in Spain.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">The car ________ I want is red.</span>', answers: ["which", "that"] },
    { type: "header", text: "B. Połącz dwa zdania" },
    { type: "gap", text: '<span class="en">I have a dog. It barks a lot. → I have a dog ________ barks a lot.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">I know a girl. She speaks French. → I know a girl ________ speaks French.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">This is a car. It is very fast. → This is a car ________ is very fast.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">This is the café. I met her here. → This is the café ________ I met her.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">That\'s the boy. His mother is a teacher. → That\'s the boy ________ mother is a teacher.</span>', answers: ["whose"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">The man which lives here is old. → ________</span>', answers: ["the man who lives here is old", "the man who lives here is old.", "the man that lives here is old", "the man that lives here is old."], wide: true },
    { type: "gap", text: '<span class="en">The book who I bought is good. → ________</span>', answers: ["the book which i bought is good", "the book which i bought is good.", "the book that i bought is good", "the book that i bought is good."], wide: true },
    { type: "gap", text: '<span class="en">The house which I live is old. → ________</span>', answers: ["the house where i live is old", "the house where i live is old."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam przyjaciela, który mówi po hiszpańsku.</span>', answers: ["i have a friend who speaks spanish", "i have a friend who speaks spanish.", "i have a friend that speaks spanish", "i have a friend that speaks spanish."], wide: true },
    { type: "gap", text: '<span class="pl">To jest książka, którą kupiłem.</span>', answers: ["this is the book which i bought", "this is the book which i bought.", "this is the book that i bought", "this is the book that i bought."], wide: true },
    { type: "gap", text: '<span class="pl">To jest kawiarnia, w której się spotykamy.</span>', answers: ["this is the café where we meet", "this is the café where we meet.", "this is the cafe where we meet", "this is the cafe where we meet."], wide: true },
    { type: "gap", text: '<span class="pl">To jest chłopiec, którego ojciec jest lekarzem.</span>', answers: ["this is the boy whose father is a doctor", "this is the boy whose father is a doctor."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Opisz 3 osoby lub miejsca, używając who / which / where / whose.", placeholder: "np. I have a friend who lives in... This is the café where..." }
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
    { q: "That's the boy ______ mother is a teacher.", opcje: ["who", "whose", "which", "that"], poprawna: 1, wyjasnienie: "Czyj → whose." },
    { q: "This is the boy ______ won the competition.", opcje: ["who", "which", "where", "what"], poprawna: 0, wyjasnienie: "Osoba → who." }
  ]
};

/* ============================================================
   G15A2 – Pytania – rozszerzenie (Question tags, indirect)
============================================================ */
window.LESSON_DATA["G15A2"] = {
  tytul: "Pytania – rozszerzenie",
  poziom: "A2",
  dzial: "G15",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      You're Polish, aren't you? Yes, I am. You like coffee, don't you? Oh yes, very much. Could you tell me where the station is? I'm not sure. Do you know when the next train leaves? Let me check. Excuse me, could you tell me how to get to the museum? Sure, go straight and turn left. What time does it open? At 10 a.m.
    </p>

    <h3>Question tags – pytania ogonkowe</h3>
    <p>Krótkie pytania na końcu zdania. Zasada: twierdzenie → przeczenie, przeczenie → twierdzenie.</p>
    <table>
      <tr><th>Zdanie</th><th>Question tag</th></tr>
      <tr><td class="en">You're Polish,</td><td class="en">aren't you?</td></tr>
      <tr><td class="en">She works here,</td><td class="en">doesn't she?</td></tr>
      <tr><td class="en">He can swim,</td><td class="en">can't he?</td></tr>
      <tr><td class="en">They went home,</td><td class="en">didn't they?</td></tr>
      <tr><td class="en">You don't smoke,</td><td class="en">do you?</td></tr>
      <tr><td class="en">She isn't late,</td><td class="en">is she?</td></tr>
      <tr><td class="en">Let's go,</td><td class="en">shall we?</td></tr>
      <tr><td class="en">I'm right,</td><td class="en">aren't I?</td></tr>
    </table>

    <h3>Pytania zależne – uprzejme pytania</h3>
    <p><b>Bez inwersji</b> – szyk jak w zdaniu twierdzącym.</p>
    <table>
      <tr><th>Bezpośrednie</th><th>Pośrednie</th></tr>
      <tr><td class="en">Where is the station?</td><td class="en">Could you tell me where the station is?</td></tr>
      <tr><td class="en">What time is it?</td><td class="en">Do you know what time it is?</td></tr>
      <tr><td class="en">How can I get there?</td><td class="en">Can you tell me how to get there?</td></tr>
      <tr><td class="en">Is she coming?</td><td class="en">I wonder if she's coming.</td></tr>
    </table>

    <p><b>Typowe zwroty wprowadzające:</b></p>
    <table>
      <tr><td class="en">Could you tell me...?</td></tr>
      <tr><td class="en">Do you know...?</td></tr>
      <tr><td class="en">Can you tell me...?</td></tr>
      <tr><td class="en">I wonder...</td></tr>
      <tr><td class="en">Do you mind telling me...?</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> w pytaniach pośrednich <b>nie ma</b> inwersji ani operatora "do".<br>
      ❌ <span class="en">Do you know where is the station?</span><br>
      ✅ <span class="en">Do you know where the station is?</span>
    </div>

    <h3>Krótkie odpowiedzi</h3>
    <table>
      <tr><td class="en">Yes, I am.</td><td class="en">No, I'm not.</td></tr>
      <tr><td class="en">Yes, I do.</td><td class="en">No, I don't.</td></tr>
      <tr><td class="en">Yes, I have.</td><td class="en">No, I haven't.</td></tr>
      <tr><td class="en">Yes, I can.</td><td class="en">No, I can't.</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Dodaj question tag" },
    { type: "gap", text: '<span class="en">You\'re Polish, ________?</span>', answers: ["aren't you", "are not you"] },
    { type: "gap", text: '<span class="en">She works here, ________?</span>', answers: ["doesn't she", "does not she"] },
    { type: "gap", text: '<span class="en">He can swim, ________?</span>', answers: ["can't he", "cannot he"] },
    { type: "gap", text: '<span class="en">They went home, ________?</span>', answers: ["didn't they", "did not they"] },
    { type: "gap", text: '<span class="en">You don\'t smoke, ________?</span>', answers: ["do you"] },
    { type: "gap", text: '<span class="en">She isn\'t late, ________?</span>', answers: ["is she"] },
    { type: "gap", text: '<span class="en">Let\'s go, ________?</span>', answers: ["shall we"] },
    { type: "gap", text: '<span class="en">It\'s cold today, ________?</span>', answers: ["isn't it", "is not it"] },
    { type: "header", text: "B. Pytanie bezpośrednie → pośrednie" },
    { type: "gap", text: '<span class="en">Where is the station? → Could you tell me where ________.</span>', answers: ["the station is"], wide: true },
    { type: "gap", text: '<span class="en">What time is it? → Do you know what time ________?</span>', answers: ["it is"], wide: true },
    { type: "gap", text: '<span class="en">Where does he live? → Do you know where ________?</span>', answers: ["he lives"], wide: true },
    { type: "gap", text: '<span class="en">How can I get there? → Can you tell me how ________?</span>', answers: ["to get there", "i can get there"], wide: true },
    { type: "gap", text: '<span class="en">Is she coming? → I wonder if ________.</span>', answers: ["she's coming", "she is coming"], wide: true },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">Where you live? → ________</span>', answers: ["where do you live", "where do you live?"], wide: true },
    { type: "gap", text: '<span class="en">Do you know where is the station? → ________</span>', answers: ["do you know where the station is", "do you know where the station is?"], wide: true },
    { type: "gap", text: '<span class="en">What means this word? → ________</span>', answers: ["what does this word mean", "what does this word mean?"], wide: true },
    { type: "gap", text: '<span class="en">Do you can help me? → ________</span>', answers: ["can you help me", "can you help me?"], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Gdzie jest dworzec? (bezpośrednio)</span>', answers: ["where is the station", "where is the station?"], wide: true },
    { type: "gap", text: '<span class="pl">Czy możesz mi powiedzieć, gdzie jest dworzec?</span>', answers: ["could you tell me where the station is", "could you tell me where the station is?", "can you tell me where the station is", "can you tell me where the station is?"], wide: true },
    { type: "gap", text: '<span class="pl">Czy wiesz, o której odjeżdża pociąg?</span>', answers: ["do you know what time the train leaves", "do you know what time the train leaves?", "do you know when the train leaves", "do you know when the train leaves?"], wide: true },
    { type: "gap", text: '<span class="pl">Jesteś Polakiem, prawda?</span>', answers: ["you are polish aren't you", "you are polish, aren't you", "you are polish, aren't you?", "you're polish aren't you", "you're polish, aren't you"], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Napisz 5 uprzejmych pytań po angielsku (np. pytasz o drogę, o czas, o cenę).", placeholder: "np. Could you tell me where... Do you know how much..." }
  ],
  test: [
    { q: "You're Polish, ______?", opcje: ["aren't you", "are you", "isn't it", "don't you"], poprawna: 0, wyjasnienie: "Twierdzenie → przeczenie: aren't you." },
    { q: "She works here, ______?", opcje: ["does she", "doesn't she", "isn't she", "doesn't he"], poprawna: 1, wyjasnienie: "Present Simple 3 os. → doesn't she." },
    { q: "Let's go, ______?", opcje: ["will we", "shall we", "do we", "don't we"], poprawna: 1, wyjasnienie: "Let's → tag 'shall we'." },
    { q: "Could you tell me where ______?", opcje: ["is the station", "the station is", "the station", "does the station"], poprawna: 1, wyjasnienie: "Pytanie zależne – bez inwersji." },
    { q: "Do you know what time ______?", opcje: ["is it", "it is", "does it", "it does"], poprawna: 1, wyjasnienie: "Pytanie zależne → szyk twierdzący." },
    { q: "______ is this book? – It's mine.", opcje: ["Who", "Whose", "Which", "What"], poprawna: 1, wyjasnienie: "Whose = czyj." },
    { q: "You don't smoke, ______?", opcje: ["do you", "don't you", "are you", "isn't it"], poprawna: 0, wyjasnienie: "Przeczenie → twierdzący tag." },
    { q: "______ do you live with?", opcje: ["Who", "What", "Whose", "Which"], poprawna: 0, wyjasnienie: "Who – o osobę." },
    { q: "She isn't late, ______?", opcje: ["is she", "isn't she", "does she", "doesn't she"], poprawna: 0, wyjasnienie: "Przeczenie z be → tag 'is she'." },
    { q: "How ______ is your school from here?", opciones: [], opcje: ["much", "many", "far", "long"], poprawna: 2, wyjasnienie: "How far – jak daleko." }
  ]
};

/* ============================================================
   G16A2 – Phrasal Verbs – rozszerzenie
============================================================ */
window.LESSON_DATA["G16A2"] = {
  tytul: "Phrasal verbs – rozszerzenie",
  poziom: "A2",
  dzial: "G16",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Every morning I get up at 6:30 and wake up my brother. We have breakfast and then I look for my keys – I always lose them! After school I usually meet up with my friends. Sometimes we hang out at the park or go to a café. On Saturdays I look after my little sister while my parents go out. In the evening I turn off my phone and read a book before going to bed.
    </p>

    <h3>Phrasal verbs – przypomnienie</h3>
    <p><b>Phrasal verb</b> = czasownik + przyimek/przysłówek, które razem mają <b>nowe znaczenie</b>.</p>

    <h3>Najczęstsze (podstawowe)</h3>
    <table>
      <tr><td class="en">get up</td><td class="pl">wstawać</td></tr>
      <tr><td class="en">wake up</td><td class="pl">budzić (się)</td></tr>
      <tr><td class="en">turn on / off</td><td class="pl">włączać / wyłączać</td></tr>
      <tr><td class="en">look for</td><td class="pl">szukać</td></tr>
      <tr><td class="en">look after</td><td class="pl">opiekować się</td></tr>
      <tr><td class="en">give up</td><td class="pl">poddawać się</td></tr>
      <tr><td class="en">find out</td><td class="pl">dowiedzieć się</td></tr>
      <tr><td class="en">put on</td><td class="pl">zakładać (ubranie)</td></tr>
      <tr><td class="en">take off</td><td class="pl">zdejmować / startować</td></tr>
      <tr><td class="en">come back</td><td class="pl">wracać</td></tr>
      <tr><td class="en">come in</td><td class="pl">wchodzić</td></tr>
      <tr><td class="en">get on / off</td><td class="pl">wsiadać / wysiadać</td></tr>
    </table>

    <h3>Nowe phrasal verbs (A2)</h3>
    <table>
      <tr><td class="en"><b>meet up</b> with</td><td class="pl">spotykać się z</td></tr>
      <tr><td class="en"><b>hang out</b></td><td class="pl">spędzać czas (potocznie)</td></tr>
      <tr><td class="en"><b>grow up</b></td><td class="pl">dorastać</td></tr>
      <tr><td class="en"><b>grow into</b></td><td class="pl">wyrastać na</td></tr>
      <tr><td class="en"><b>get along</b> with</td><td class="pl">dogadywać się z</td></tr>
      <tr><td class="en"><b>get together</b></td><td class="pl">spotykać się (grupowo)</td></tr>
      <tr><td class="en"><b>come up</b> with</td><td class="pl">wymyślić</td></tr>
      <tr><td class="en"><b>look forward to</b></td><td class="pl">czekać z niecierpliwością na</td></tr>
      <tr><td class="en"><b>give back</b></td><td class="pl">oddawać</td></tr>
      <tr><td class="en"><b>throw away</b></td><td class="pl">wyrzucać</td></tr>
      <tr><td class="en"><b>turn up / down</b></td><td class="pl">podgłośnić / przyciszyć</td></tr>
      <tr><td class="en"><b>check in / out</b></td><td class="pl">zameldować / wymeldować się</td></tr>
    </table>

    <h3>Phrasal verbs z dopełnieniem</h3>
    <p>Niektóre są <b>rozdzielne</b> – dopełnienie można wstawić w środek:</p>
    <table>
      <tr><td class="en">Turn <b>on</b> the TV. = Turn the TV <b>on</b>. ✅</td></tr>
      <tr><td class="en">Turn <b>off</b> the light. = Turn the light <b>off</b>. ✅</td></tr>
      <tr><td class="en">Ale nie: <span style="color:#991b1b">Turn on it.</span> ❌ → <span class="en">Turn it on.</span> ✅</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> gdy dopełnienie to <b>zaimek</b> (it, them), musi być w środku:<br>
      ✅ <span class="en">Turn it off.</span> · <span class="en">Pick them up.</span> · <span class="en">Give it back.</span><br>
      ❌ <span class="en">Turn off it.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Dopasuj phrasal verb do znaczenia" },
    { type: "gap", text: '<span class="pl">wstawać → get ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">szukać → look ________</span>', answers: ["for"] },
    { type: "gap", text: '<span class="pl">opiekować się → look ________</span>', answers: ["after"] },
    { type: "gap", text: '<span class="pl">poddawać się → give ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">dowiedzieć się → find ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">wracać → come ________</span>', answers: ["back"] },
    { type: "gap", text: '<span class="pl">spotykać się z (kimś) → meet ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">spędzać czas → hang ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">dogadywać się z → get ________ with</span>', answers: ["along", "on"] },
    { type: "gap", text: '<span class="pl">wymyślić → come ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">wyrzucać → throw ________</span>', answers: ["away"] },
    { type: "gap", text: '<span class="pl">czekać z niecierpliwością → look ________ to</span>', answers: ["forward"] },
    { type: "header", text: "B. Uzupełnij zdanie" },
    { type: "gap", text: '<span class="en">I ________ at 7 every morning. (wstaję)</span>', answers: ["get up"] },
    { type: "gap", text: '<span class="en">Please ________ the TV. (wyłącz)</span>', answers: ["turn off"] },
    { type: "gap", text: '<span class="en">I\'m ________ my keys. (szukam)</span>', answers: ["looking for"] },
    { type: "gap", text: '<span class="en">She ________ her little brother. (opiekuje się)</span>', answers: ["looks after", "look after"] },
    { type: "gap", text: '<span class="en">Never ________! (poddawaj się)</span>', answers: ["give up"] },
    { type: "gap", text: '<span class="en">I ________ with my friends every weekend. (spotykam się)</span>', answers: ["meet up"] },
    { type: "gap", text: '<span class="en">We ________ at the park. (spędzamy czas)</span>', answers: ["hang out"] },
    { type: "gap", text: '<span class="en">I ________ my old friend yesterday. (spotkałem przypadkowo)</span>', answers: ["ran into", "met up with"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">Turn off it. → ________</span>', answers: ["turn it off", "turn it off."], wide: true },
    { type: "gap", text: '<span class="en">I get up always at 7. → ________</span>', answers: ["i always get up at 7", "i always get up at 7.", "i always get up at seven", "i always get up at seven."], wide: true },
    { type: "gap", text: '<span class="en">I want to meet with my friends. → I want to ________ my friends.</span>', answers: ["meet up with"], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Wstaję o 7.</span>', answers: ["i get up at 7", "i get up at 7.", "i get up at seven", "i get up at seven."], wide: true },
    { type: "gap", text: '<span class="pl">Szukam mojego telefonu.</span>', answers: ["i am looking for my phone", "i am looking for my phone.", "i'm looking for my phone", "i'm looking for my phone."], wide: true },
    { type: "gap", text: '<span class="pl">Włącz telewizor.</span>', answers: ["turn on the tv", "turn on the tv.", "turn the tv on", "turn the tv on."], wide: true },
    { type: "gap", text: '<span class="pl">Wyrzuć to!</span>', answers: ["throw it away", "throw it away!", "throw that away", "throw that away!"], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogę się doczekać wakacji.</span>', answers: ["i am looking forward to the holidays", "i am looking forward to the holidays.", "i'm looking forward to the holidays", "i'm looking forward to the holidays."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Opisz swój dzień, używając phrasal verbs (get up, meet up, hang out, turn on/off, look after itd.).", placeholder: "np. I get up at 7. After school I meet up with..." }
  ],
  test: [
    { q: "wstawać = ______", opcje: ["get up", "get on", "get off", "get out"], poprawna: 0, wyjasnienie: "get up = wstawać." },
    { q: "szukać = ______", opcje: ["look for", "look after", "look at", "look up"], poprawna: 0, wyjasnienie: "look for = szukać." },
    { q: "opiekować się = ______", opcje: ["look after", "look for", "look at", "look up"], poprawna: 0, wyjasnienie: "look after = opiekować się." },
    { q: "poddawać się = ______", opcje: ["give up", "give in", "give out", "give back"], poprawna: 0, wyjasnienie: "give up = poddawać się." },
    { q: "I ______ at 7 every morning.", opcje: ["get up", "get on", "get off", "get in"], poprawna: 0, wyjasnienie: "get up – wstaję." },
    { q: "Please ______ the light. (wyłącz)", opcje: ["turn off", "turn on", "turn up", "turn down"], poprawna: 0, wyjasnienie: "turn off = wyłączyć." },
    { q: "I'm ______ my keys.", opcje: ["looking for", "looking after", "looking at", "looking up"], poprawna: 0, wyjasnienie: "looking for – szukam." },
    { q: "Turn ______ it. (przycisk – zaimek w środku)", opcje: ["off", "on", "up", "down"], poprawna: 0, wyjasnienie: "Turn it off – zaimek w środku." },
    { q: "hang out = ______", opcje: ["spędzać czas", "wisieć", "wyjść", "wypaść"], poprawna: 0, wyjasnienie: "hang out = spędzać czas (potocznie)." },
    { q: "meet up = ______", opcje: ["spotykać się", "poznać", "żegnać", "mijać"], poprawna: 0, wyjasnienie: "meet up with = spotykać się z." }
  ]
};