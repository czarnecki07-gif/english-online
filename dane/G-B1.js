window.LESSON_DATA = window.LESSON_DATA || {};

/* ============================================================
   G1B1 – Czasy teraźniejsze – zaawansowane użycie
============================================================ */
window.LESSON_DATA["G1B1"] = {
  tytul: "Czasy teraźniejsze – zaawansowane użycie",
  poziom: "B1",
  dzial: "G1",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I have been learning English for over five years now, and I still find new things to discover every day. At the moment I am preparing for my final exams, so I have been studying really hard recently. I have already finished most of my revision, but I haven't started the history part yet. My best friend says she has never seen me so focused. I usually spend about four hours a day on schoolwork, but this week I have been working even more. I hope it will pay off.
    </p>

    <h3>Present Perfect – użycie zaawansowane</h3>
    <p>Używamy gdy łączymy przeszłość z teraźniejszością:</p>
    <table>
      <tr><th>Użycie</th><th>Przykład</th></tr>
      <tr><td>Doświadczenie życiowe (bez daty)</td><td class="en">I have visited Spain three times.</td></tr>
      <tr><td>Skutek widoczny teraz</td><td class="en">I have lost my keys. I can't get in.</td></tr>
      <tr><td>Czynność trwająca do teraz (for/since)</td><td class="en">She has worked here since 2020.</td></tr>
      <tr><td>Świeżo zakończone (just)</td><td class="en">He has just arrived.</td></tr>
      <tr><td>Do tej pory (already / yet)</td><td class="en">I have already eaten. Have you finished yet?</td></tr>
    </table>

    <h3>Present Perfect Continuous</h3>
    <p>Podkreśla <b>trwanie</b> i <b>proces</b>:</p>
    <table>
      <tr><td class="en">I have been reading this book all morning.</td><td class="pl">(czytam od rana)</td></tr>
      <tr><td class="en">She has been working here for three years.</td><td class="pl">(pracuje tu od trzech lat)</td></tr>
    </table>

    <h3>Porównanie</h3>
    <table>
      <tr><th>Present Perfect</th><th>Present Perfect Continuous</th></tr>
      <tr>
        <td><b>skutek, rezultat</b><br><span class="en">I have written five emails.</span><br><span class="pl">(napisałem – 5 gotowych)</span></td>
        <td><b>trwanie, proces</b><br><span class="en">I have been writing emails all morning.</span><br><span class="pl">(pisałem przez cały ranek)</span></td>
      </tr>
    </table>

    <h3>Czasowniki statyczne</h3>
    <p>Nie występują w Continuous – nawet w Present Perfect Continuous:</p>
    <p><span class="en">know, understand, believe, like, love, hate, want, need, mean, belong, contain, own, prefer, seem, cost</span></p>
    <table>
      <tr><td class="en">I have known her for ten years. ✅</td></tr>
      <tr><td class="en">I have been knowing her... ❌</td></tr>
    </table>

    <h3>For vs Since</h3>
    <table>
      <tr><th>FOR + okres</th><th>SINCE + punkt</th></tr>
      <tr>
        <td class="en">for two years<br>for three weeks<br>for a long time</td>
        <td class="en">since 2020<br>since Monday<br>since I was a child</td>
      </tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>for</b> = jak długo (okres), <b>since</b> = od kiedy (punkt).<br>
      <span class="en">I have lived here <b>for</b> five years.</span> · <span class="en">I have lived here <b>since</b> 2020.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Present Perfect czy Present Perfect Continuous?" },
    { type: "gap", text: '<span class="en">I ________ (read) that book – it was brilliant.</span>', answers: ["have read"] },
    { type: "gap", text: '<span class="en">I ________ (read) all morning and I\'m tired.</span>', answers: ["have been reading"] },
    { type: "gap", text: '<span class="en">She ________ (work) here since 2020.</span>', answers: ["has worked", "has been working"] },
    { type: "gap", text: '<span class="en">They ________ (wait) for two hours and they\'re still waiting.</span>', answers: ["have been waiting"] },
    { type: "gap", text: '<span class="en">I ________ (already / finish) my homework.</span>', answers: ["have already finished"] },
    { type: "gap", text: '<span class="en">He ________ (just / arrive).</span>', answers: ["has just arrived"] },
    { type: "gap", text: '<span class="en">We ________ (know) each other for years.</span>', answers: ["have known"] },
    { type: "header", text: "B. For czy since?" },
    { type: "gap", text: '<span class="en">I have lived here ________ 2015.</span>', answers: ["since"] },
    { type: "gap", text: '<span class="en">I have lived here ________ eight years.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">She has been working here ________ January.</span>', answers: ["since"] },
    { type: "gap", text: '<span class="en">She has been working here ________ six months.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">I haven\'t seen him ________ a long time.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">I haven\'t seen him ________ last summer.</span>', answers: ["since"] },
    { type: "header", text: "C. Popraw błędy" },
    { type: "gap", text: '<span class="en">I have seen him yesterday. → ________</span>', answers: ["i saw him yesterday", "i saw him yesterday."], wide: true },
    { type: "gap", text: '<span class="en">I have been knowing her for ten years. → ________</span>', answers: ["i have known her for ten years", "i have known her for ten years.", "i've known her for ten years", "i've known her for ten years."], wide: true },
    { type: "gap", text: '<span class="en">She has went home. → ________</span>', answers: ["she has gone home", "she has gone home."], wide: true },
    { type: "gap", text: '<span class="en">I have lived here since five years. → ________</span>', answers: ["i have lived here for five years", "i have lived here for five years.", "i've lived here for five years", "i've lived here for five years."], wide: true },
    { type: "gap", text: '<span class="en">Did you ever visit Spain? → ________</span>', answers: ["have you ever visited spain", "have you ever visited spain?"], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mieszkam tu od pięciu lat.</span>', answers: ["i have lived here for five years", "i have lived here for five years.", "i've lived here for five years", "i've lived here for five years."], wide: true },
    { type: "gap", text: '<span class="pl">Uczę się angielskiego od 2018 roku.</span>', answers: ["i have been learning english since 2018", "i have been learning english since 2018.", "i've been learning english since 2018", "i've been learning english since 2018."], wide: true },
    { type: "gap", text: '<span class="pl">Nigdy nie byłem w Hiszpanii.</span>', answers: ["i have never been to spain", "i have never been to spain.", "i've never been to spain", "i've never been to spain."], wide: true },
    { type: "gap", text: '<span class="pl">Właśnie skończyłem pracę.</span>', answers: ["i have just finished work", "i have just finished work.", "i've just finished work", "i've just finished work."], wide: true },
    { type: "gap", text: '<span class="pl">Czekam tu od godziny.</span>', answers: ["i have been waiting here for an hour", "i have been waiting here for an hour.", "i've been waiting here for an hour", "i've been waiting here for an hour."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań o sobie, używając Present Perfect i Present Perfect Continuous.", placeholder: "np. I have lived in... I have been learning English since..." }
  ],
  test: [
    { q: "I ______ that film three times.", opcje: ["saw", "have seen", "have been seeing", "see"], poprawna: 1, wyjasnienie: "Doświadczenie bez daty → Present Perfect." },
    { q: "She ______ here for five years.", opcje: ["works", "worked", "has worked", "is working"], poprawna: 2, wyjasnienie: "for + okres → Present Perfect." },
    { q: "I ______ my keys. I can't get in.", opcje: ["lose", "lost", "have lost", "was losing"], poprawna: 2, wyjasnienie: "Skutek teraz → Present Perfect." },
    { q: "They ______ for two hours and they're still waiting.", opcje: ["waited", "have waited", "have been waiting", "are waiting"], poprawna: 2, wyjasnienie: "Trwanie do teraz → Present Perfect Continuous." },
    { q: "I ______ him yesterday.", opcje: ["have seen", "saw", "have been seeing", "see"], poprawna: 1, wyjasnienie: "Konkretna data → Past Simple." },
    { q: "I have known her ______ ten years.", opcje: ["since", "from", "for", "during"], poprawna: 2, wyjasnienie: "FOR + okres." },
    { q: "She has worked here ______ January.", opcje: ["since", "from", "for", "during"], poprawna: 0, wyjasnienie: "SINCE + punkt." },
    { q: "Which is correct?", opcje: ["I have been knowing her for years.", "I have known her for years.", "I know her for years.", "I am knowing her for years."], poprawna: 1, wyjasnienie: "know = statyczny → Present Perfect." },
    { q: "He ______ just ______.", opcje: ["has / arrived", "have / arrived", "is / arriving", "did / arrive"], poprawna: 0, wyjasnienie: "just → Present Perfect: has just arrived." },
    { q: "Have you ______ been to London?", opcje: ["ever", "never", "yet", "already"], poprawna: 0, wyjasnienie: "Have you ever been? – pytanie o doświadczenie." }
  ]
};

/* ============================================================
   G2B1 – Czasy przeszłe – narracja i Past Perfect
============================================================ */
window.LESSON_DATA["G2B1"] = {
  tytul: "Czasy przeszłe – narracja i Past Perfect",
  poziom: "B1",
  dzial: "G2",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      When I arrived at the station, the train had already left. I had been running for almost twenty minutes, but I had still arrived too late. The platform was almost empty. A few minutes earlier, people had been rushing towards the train, but now everything was quiet. I stood there wondering what to do next. I had never missed a train before, and I didn't know when the next one was due. While I was waiting for the next train, I met an old friend I hadn't seen for years.
    </p>

    <h3>Czasy przeszłe – przypomnienie</h3>
    <table>
      <tr><th>Czas</th><th>Użycie</th><th>Przykład</th></tr>
      <tr><td>Past Simple</td><td>główne wydarzenia w kolejności</td><td class="en">I opened the door and walked in.</td></tr>
      <tr><td>Past Continuous</td><td>tło, czynność w trakcie</td><td class="en">It was raining and people were rushing home.</td></tr>
      <tr><td>Past Perfect</td><td>wydarzenie wcześniejsze niż inne w przeszłości</td><td class="en">When I arrived, she had already left.</td></tr>
      <tr><td>Past Perfect Continuous</td><td>trwanie czynności przed inną czynnością</td><td class="en">I had been working for hours when he called.</td></tr>
    </table>

    <h3>Past Perfect vs Past Simple</h3>
    <table>
      <tr><th>Past Simple</th><th>Past Perfect</th></tr>
      <tr>
        <td class="en">When I arrived, she left.</td>
        <td class="en">When I arrived, she had left.</td>
      </tr>
      <tr>
        <td class="pl">Wyszła, gdy przyjechałem (po moim przyjeździe).</td>
        <td class="pl">Wyszła wcześniej, przed moim przyjazdem.</td>
      </tr>
    </table>

    <h3>Past Perfect Continuous</h3>
    <p>Podkreśla <b>jak długo</b> coś trwało przed innym wydarzeniem:</p>
    <table>
      <tr><td class="en">I had been working for three hours when he called.</td></tr>
      <tr><td class="en">She was tired because she had been studying all night.</td></tr>
    </table>

    <h3>Określenia czasu</h3>
    <table>
      <tr><td class="en">already / just / never / before</td><td class="pl">już / właśnie / nigdy / wcześniej</td></tr>
      <tr><td class="en">by the time</td><td class="pl">zanim / do czasu gdy</td></tr>
      <tr><td class="en">after / before</td><td class="pl">po tym jak / zanim</td></tr>
      <tr><td class="en">when / while</td><td class="pl">kiedy / podczas gdy</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> gdy w opowieści są dwa wydarzenia i jedno jest wcześniejsze – to wcześniejsze idzie w <b>Past Perfect</b>.<br>
      <span class="en">When we arrived, the film <b>had already started</b>.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wybierz właściwy czas" },
    { type: "gap", text: '<span class="en">When I arrived, she ________ (already / leave).</span>', answers: ["had already left"] },
    { type: "gap", text: '<span class="en">He was tired because he ________ (not / sleep) well.</span>', answers: ["hadn't slept", "had not slept"] },
    { type: "gap", text: '<span class="en">They couldn\'t enter because they ________ (forget) the key.</span>', answers: ["had forgotten"] },
    { type: "gap", text: '<span class="en">After I ________ (finish) work, I went home.</span>', answers: ["had finished"] },
    { type: "gap", text: '<span class="en">She was hungry because she ________ (not / eat).</span>', answers: ["hadn't eaten", "had not eaten"] },
    { type: "header", text: "B. Uzupełnij – Past Perfect czy Past Simple?" },
    { type: "gap", text: '<span class="en">When I ________ (arrive), they ________ (already / leave).</span>', answers: ["arrived, had already left"] },
    { type: "gap", text: '<span class="en">I ________ (walk) home when I ________ (see) Anna.</span>', answers: ["was walking, saw"] },
    { type: "gap", text: '<span class="en">She was tired because she ________ (work) all day.</span>', answers: ["had been working", "had worked"] },
    { type: "gap", text: '<span class="en">After we ________ (finish) dinner, we went out.</span>', answers: ["had finished"] },
    { type: "gap", text: '<span class="en">While I ________ (drive), I heard a strange noise.</span>', answers: ["was driving"] },
    { type: "header", text: "C. Ułóż wydarzenia w odpowiedniej kolejności" },
    { type: "gap", text: '<span class="en">[I arrived / The train left] → When I arrived, the train ________.</span>', answers: ["had left"] },
    { type: "gap", text: '<span class="en">[She finished dinner / We arrived] → She ________ dinner before we arrived.</span>', answers: ["had finished"] },
    { type: "gap", text: '<span class="en">[He lost his keys / He couldn\'t open the door] → He couldn\'t open the door because he ________ his keys.</span>', answers: ["had lost"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">When I arrived, she already left. → ________</span>', answers: ["when i arrived she had already left", "when i arrived, she had already left", "when i arrived, she had already left.", "when i arrived she had already left."], wide: true },
    { type: "gap", text: '<span class="en">He was tired because he didn\'t slept. → ________</span>', answers: ["he was tired because he hadn't slept", "he was tired because he hadn't slept.", "he was tired because he had not slept"], wide: true },
    { type: "gap", text: '<span class="en">After I had finished work, I was went home. → ________</span>', answers: ["after i had finished work i went home", "after i had finished work, i went home", "after i had finished work, i went home."], wide: true },
    { type: "gap", text: '<span class="en">While I walked home, I saw Peter. → ________</span>', answers: ["while i was walking home i saw peter", "while i was walking home, i saw peter", "while i was walking home, i saw peter."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Kiedy przyjechałem, pociąg już odjechał.</span>', answers: ["when i arrived the train had already left", "when i arrived, the train had already left", "when i arrived, the train had already left."], wide: true },
    { type: "gap", text: '<span class="pl">Był zmęczony, bo pracował cały dzień.</span>', answers: ["he was tired because he had been working all day", "he was tired because he had been working all day.", "he was tired because he had worked all day", "he was tired because he had worked all day."], wide: true },
    { type: "gap", text: '<span class="pl">Kiedy wróciłem do domu, moi rodzice już zjedli.</span>', answers: ["when i got home my parents had already eaten", "when i got home, my parents had already eaten", "when i got home, my parents had already eaten."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz wydarzenie, które miało miejsce wcześniej niż inne. Użyj Past Simple i Past Perfect.", placeholder: "np. Yesterday I... But I had already..." }
  ],
  test: [
    { q: "When I arrived, she ______.", opcje: ["already left", "had already left", "has already left", "was leaving"], poprawna: 1, wyjasnienie: "Wydarzenie wcześniejsze → Past Perfect." },
    { q: "He was tired because he ______ all day.", opcje: ["worked", "had worked", "was working", "works"], poprawna: 1, wyjasnienie: "Przyczyna przed skutkiem → Past Perfect." },
    { q: "After we ______ dinner, we went out.", opcje: ["had finished", "finish", "were finishing", "finished"], poprawna: 0, wyjasnienie: "Po 'after' – Past Perfect dla wcześniejszej." },
    { q: "While I ______ home, I saw Peter.", opcje: ["walked", "was walking", "had walked", "walk"], poprawna: 1, wyjasnienie: "Czynność w trakcie → Past Continuous." },
    { q: "They couldn't enter because they ______ the key.", opcje: ["lost", "had lost", "were losing", "lose"], poprawna: 1, wyjasnienie: "Wcześniejsze → Past Perfect." },
    { q: "I had been working for three hours ______ he called.", opcje: ["when", "while", "since", "after"], poprawna: 0, wyjasnienie: "when + Past Simple (krótkie wydarzenie)." },
    { q: "She was exhausted because she ______ all night.", opcje: ["studied", "had been studying", "studies", "was studying"], poprawna: 1, wyjasnienie: "Trwanie przed wydarzeniem → Past Perfect Continuous." },
    { q: "It ______ heavily when we left the house.", opcje: ["rained", "was raining", "had rained", "rains"], poprawna: 1, wyjasnienie: "Tło → Past Continuous." },
    { q: "By the time we arrived, the meeting ______.", opcje: ["started", "had started", "was starting", "starts"], poprawna: 1, wyjasnienie: "by the time + Past Perfect." },
    { q: "I realised that I ______ him before.", opcje: ["saw", "had seen", "was seeing", "see"], poprawna: 1, wyjasnienie: "Wcześniejsze doświadczenie → Past Perfect." }
  ]
};

/* ============================================================
   G3B1 – Formy przyszłości – wybór
============================================================ */
window.LESSON_DATA["G3B1"] = {
  tytul: "Wybór formy przyszłości",
  poziom: "B1",
  dzial: "G3",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Next summer I am going to travel around Europe with my two best friends. We have already booked our first flight. We are leaving on 1st July and we are going to visit six countries in three weeks. We might not have enough money for hotels, so we will probably sleep in hostels or use couchsurfing. The train from Berlin to Prague leaves at 8 a.m., so we will have to get up early. I am sure it will be an amazing adventure, although I'm a bit worried about getting lost. If we plan carefully, everything should go well.
    </p>

    <h3>Formy przyszłości</h3>
    <table>
      <tr><th>Forma</th><th>Kiedy używać</th><th>Przykład</th></tr>
      <tr><td class="en"><b>will</b></td><td>decyzja teraz, obietnica, oferta, przewidywanie bez dowodów</td><td class="en">I'll help you. It will rain tomorrow.</td></tr>
      <tr><td class="en"><b>going to</b></td><td>zamiar, plan podjęty wcześniej; przewidywanie na podstawie oznak</td><td class="en">I'm going to study law. Look! It's going to rain.</td></tr>
      <tr><td class="en"><b>Present Continuous</b></td><td>ustalone plany, umowy</td><td class="en">I'm meeting Tom at 6.</td></tr>
      <tr><td class="en"><b>Present Simple</b></td><td>rozkłady, harmonogramy</td><td class="en">The train leaves at 8.</td></tr>
    </table>

    <h3>May / might / could – możliwość</h3>
    <table>
      <tr><td class="en">It <b>may</b> rain tomorrow.</td><td class="pl">(może, ale niepewnie)</td></tr>
      <tr><td class="en">She <b>might</b> come later.</td><td class="pl">(mniejsza pewność)</td></tr>
      <tr><td class="en">We <b>could</b> go to the cinema.</td><td class="pl">(propozycja / możliwość)</td></tr>
    </table>

    <h3>Future in the past</h3>
    <p>Gdy mówimy o przyszłości z perspektywy przeszłości:</p>
    <table>
      <tr><td class="en">I knew she <b>would</b> come.</td></tr>
      <tr><td class="en">He said he <b>would</b> call me.</td></tr>
      <tr><td class="en">They thought it <b>was going to</b> rain.</td></tr>
    </table>

    <h3>Was/Were going to – zamiar, który się nie zrealizował</h3>
    <table>
      <tr><td class="en">I was going to call you, but I forgot.</td></tr>
      <tr><td class="en">She was going to study, but she fell asleep.</td></tr>
    </table>

    <h3>Zdania czasowe</h3>
    <p>Po <b>when / before / after / as soon as / until</b> używamy Present Simple, nie will:</p>
    <table>
      <tr><td class="en">I'll call you when I <b>arrive</b>.</td></tr>
      <tr><td class="en">We'll start after she <b>comes</b>.</td></tr>
      <tr><td class="en">I'll wait until you <b>finish</b>.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>going to</b> = plan, <b>will</b> = decyzja teraz.<br>
      <span class="en">I'm going to study medicine (zaplanowane).</span><br>
      <span class="en">I'll help you (decyzja teraz).</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wybierz właściwą formę przyszłości" },
    { type: "gap", text: '<span class="en">I ________ (meet) Tom at 6 tomorrow. It\'s arranged.</span>', answers: ["am meeting"] },
    { type: "gap", text: '<span class="en">The train ________ (leave) at 8 tomorrow.</span>', answers: ["leaves"] },
    { type: "gap", text: '<span class="en">Look! It ________ (rain).</span>', answers: ["is going to rain", "'s going to rain"] },
    { type: "gap", text: '<span class="en">I think she ________ (pass) the exam.</span>', answers: ["will pass"] },
    { type: "gap", text: '<span class="en">We ________ (fly) to Spain next week – we have tickets.</span>', answers: ["are flying"] },
    { type: "gap", text: '<span class="en">I\'m tired. I ________ (go) to bed.</span>', answers: ["will go", "'ll go"] },
    { type: "gap", text: '<span class="en">She ________ (come) later, but she isn\'t sure.</span>', answers: ["might come", "may come", "could come"] },
    { type: "header", text: "B. Zdania czasowe – uzupełnij" },
    { type: "gap", text: '<span class="en">I\'ll call you when I ________ (arrive).</span>', answers: ["arrive"] },
    { type: "gap", text: '<span class="en">We\'ll start as soon as everyone ________ (be) ready.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">I\'ll wait until you ________ (finish).</span>', answers: ["finish"] },
    { type: "gap", text: '<span class="en">Before we ________ (leave), we need to check everything.</span>', answers: ["leave"] },
    { type: "gap", text: '<span class="en">After she ________ (come), we\'ll eat.</span>', answers: ["comes"] },
    { type: "header", text: "C. Was/Were going to" },
    { type: "gap", text: '<span class="en">I ________ (call) you, but I forgot.</span>', answers: ["was going to call"] },
    { type: "gap", text: '<span class="en">She ________ (study), but she fell asleep.</span>', answers: ["was going to study"] },
    { type: "gap", text: '<span class="en">They ________ (move) abroad, but they changed their plans.</span>', answers: ["were going to move"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I\'ll call you when I will arrive. → ________</span>', answers: ["i'll call you when i arrive", "i'll call you when i arrive.", "i will call you when i arrive", "i will call you when i arrive."], wide: true },
    { type: "gap", text: '<span class="en">I knew she will come. → ________</span>', answers: ["i knew she would come", "i knew she would come."], wide: true },
    { type: "gap", text: '<span class="en">It might to rain later. → ________</span>', answers: ["it might rain later", "it might rain later."], wide: true },
    { type: "gap", text: '<span class="en">The train will leaves at 8. → ________</span>', answers: ["the train leaves at 8", "the train leaves at 8."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zamierzam studiować medycynę.</span>', answers: ["i am going to study medicine", "i am going to study medicine.", "i'm going to study medicine", "i'm going to study medicine."], wide: true },
    { type: "gap", text: '<span class="pl">Myślę, że będzie padać.</span>', answers: ["i think it will rain", "i think it will rain.", "i think it'll rain", "i think it'll rain."], wide: true },
    { type: "gap", text: '<span class="pl">Może przyjdę później.</span>', answers: ["i might come later", "i might come later.", "i may come later", "i may come later."], wide: true },
    { type: "gap", text: '<span class="pl">Zadzwonię, kiedy przyjadę.</span>', answers: ["i'll call when i arrive", "i'll call when i arrive.", "i will call when i arrive", "i will call when i arrive."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz o planach na najbliższy miesiąc i przewidywaniach na następny rok.", placeholder: "np. Next month I'm going to... I think I will..." }
  ],
  test: [
    { q: "I ______ Tom at 6 tomorrow. We arranged it.", opcje: ["meet", "am meeting", "will meet", "meeting"], poprawna: 1, wyjasnienie: "Ustalony plan → Present Continuous." },
    { q: "The train ______ at 8.", opcje: ["leaves", "is leaving", "will leaves", "leave"], poprawna: 0, wyjasnienie: "Rozkład → Present Simple." },
    { q: "Look at those clouds! It ______ rain.", opcje: ["will", "is going to", "is", "does"], poprawna: 1, wyjasnienie: "Oznaki → going to." },
    { q: "I think she ______ the exam.", opcje: ["will pass", "is going", "going to pass", "passes"], poprawna: 0, wyjasnienie: "Przewidywanie → will." },
    { q: "We ______ to Spain next week. We have tickets.", opcje: ["fly", "are flying", "will flying", "flying"], poprawna: 1, wyjasnienie: "Zaplanowane → Present Continuous." },
    { q: "I'll call you when I ______.", opcje: ["will arrive", "arrive", "arriving", "arrived"], poprawna: 1, wyjasnienie: "Po when → Present Simple." },
    { q: "I knew she ______ come.", opcje: ["will", "would", "is", "was"], poprawna: 1, wyjasnienie: "Future in the past → would." },
    { q: "I ______ call you, but I forgot.", opcje: ["was going to", "will", "am going", "go"], poprawna: 0, wyjasnienie: "Zamiar, który się nie zrealizował." },
    { q: "She ______ come later, but she isn't sure.", opcje: ["will definitely", "might", "is going to", "must"], poprawna: 1, wyjasnienie: "Niepewność → might." },
    { q: "We'll start as soon as everyone ______ ready.", opcje: ["will be", "is", "be", "was"], poprawna: 1, wyjasnienie: "Po as soon as → Present Simple." }
  ]
};

/* ============================================================
   G4B1 – Czasowniki modalne – zaawansowane
============================================================ */
window.LESSON_DATA["G4B1"] = {
  tytul: "Czasowniki modalne – obowiązki i rady",
  poziom: "B1",
  dzial: "G4",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      At my new job I have to wear a uniform and I mustn't use my phone during work. I don't have to start very early – my shift begins at 9. My manager says I should ask questions if I'm not sure about something. When I was younger, I could stay up late, but now I need to get enough sleep. I needn't work at weekends, which is great. I'm also able to work from home one day a week. I think everyone ought to have a good work-life balance.
    </p>

    <h3>Modalne – obowiązki</h3>
    <table>
      <tr><th>Modal</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>must</b></td><td>silna osobista konieczność</td><td class="en">I must call my mother.</td></tr>
      <tr><td class="en"><b>have to</b></td><td>obowiązek z zewnątrz (przepis, sytuacja)</td><td class="en">I have to wear a uniform.</td></tr>
      <tr><td class="en"><b>mustn't</b></td><td>zakaz</td><td class="en">You mustn't smoke here.</td></tr>
      <tr><td class="en"><b>don't have to</b></td><td>brak obowiązku</td><td class="en">You don't have to come.</td></tr>
      <tr><td class="en"><b>need to</b></td><td>potrzeba</td><td class="en">You need to practise more.</td></tr>
      <tr><td class="en"><b>needn't</b></td><td>nie ma potrzeby</td><td class="en">You needn't come tomorrow.</td></tr>
    </table>

    <h3>Modalne – rady</h3>
    <table>
      <tr><td class="en"><b>should / shouldn't</b></td><td>rada, oczekiwanie</td><td class="en">You should talk to him.</td></tr>
      <tr><td class="en"><b>ought to</b></td><td>rada (formalnie)</td><td class="en">You ought to rest.</td></tr>
      <tr><td class="en"><b>had better</b></td><td>silniejsza rada / ostrzeżenie</td><td class="en">You'd better hurry.</td></tr>
    </table>

    <h3>Modalne – umiejętności</h3>
    <table>
      <tr><td class="en"><b>can</b></td><td>umiejętność teraz</td><td class="en">I can swim.</td></tr>
      <tr><td class="en"><b>could</b></td><td>umiejętność w przeszłości</td><td class="en">I could swim when I was 5.</td></tr>
      <tr><td class="en"><b>be able to</b></td><td>w innych czasach</td><td class="en">I will be able to help you.</td></tr>
    </table>

    <h3>Could vs was/were able to</h3>
    <table>
      <tr><th>could – ogólna umiejętność</th><th>was/were able to – udało się (jednorazowo)</th></tr>
      <tr>
        <td class="en">I could swim when I was five.</td>
        <td class="en">We were able to solve the problem.</td>
      </tr>
    </table>

    <h3>Must vs have to – niuanse</h3>
    <table>
      <tr><th>must – mówiący czuje</th><th>have to – okoliczności</th></tr>
      <tr>
        <td class="en">I must study more. (osobiste)</td>
        <td class="en">I have to study more. (zasady, plan)</td>
      </tr>
    </table>
    <p><b>Przeczenia:</b> <span class="en">mustn't</span> = zakaz · <span class="en">don't have to</span> = nie muszę.</p>

    <div class="tip-box">
      <b>Zapamiętaj różnicę:</b><br>
      <span class="en">You mustn't go.</span> = Nie wolno ci iść.<br>
      <span class="en">You don't have to go.</span> = Nie musisz iść (możesz zostać).
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wybierz właściwy modal" },
    { type: "gap", text: '<span class="en">I ________ (obowiązek) wear a uniform at work.</span>', answers: ["have to", "must"] },
    { type: "gap", text: '<span class="en">You ________ (zakaz) smoke here.</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">You ________ (nie musisz) come tomorrow.</span>', answers: ["don't have to", "needn't", "do not have to"] },
    { type: "gap", text: '<span class="en">You ________ (rada) see a doctor.</span>', answers: ["should"] },
    { type: "gap", text: '<span class="en">When I was five, I ________ swim very well.</span>', answers: ["could"] },
    { type: "gap", text: '<span class="en">I will ________ (będę mógł) to help you tomorrow.</span>', answers: ["be able"] },
    { type: "header", text: "B. Must czy have to?" },
    { type: "gap", text: '<span class="en">I ________ call my mum – I promised.</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">Students ________ wear uniforms at this school.</span>', answers: ["have to", "must"] },
    { type: "gap", text: '<span class="en">We ________ show our passports at the airport.</span>', answers: ["have to", "must"] },
    { type: "gap", text: '<span class="en">I ________ finish this today – I promised myself.</span>', answers: ["must"] },
    { type: "header", text: "C. Mustn\'t czy don\'t have to?" },
    { type: "gap", text: '<span class="en">You ________ use your phone during the lesson. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">You ________ bring anything – we have everything. (brak obowiązku)</span>', answers: ["don't have to", "do not have to", "needn't"] },
    { type: "gap", text: '<span class="en">You ________ touch this machine. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">She ________ come – it\'s optional. (brak obowiązku)</span>', answers: ["doesn't have to", "does not have to", "needn't"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">You should to study more. → ________</span>', answers: ["you should study more", "you should study more."], wide: true },
    { type: "gap", text: '<span class="en">I must to go now. → ________</span>', answers: ["i must go now", "i must go now."], wide: true },
    { type: "gap", text: '<span class="en">She might to be late. → ________</span>', answers: ["she might be late", "she might be late."], wide: true },
    { type: "gap", text: '<span class="en">He could played football. → ________</span>', answers: ["he could play football", "he could play football."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Muszę nosić mundurek w pracy.</span>', answers: ["i have to wear a uniform at work", "i have to wear a uniform at work.", "i must wear a uniform at work", "i must wear a uniform at work."], wide: true },
    { type: "gap", text: '<span class="pl">Nie wolno ci tu palić.</span>', answers: ["you mustn't smoke here", "you mustn't smoke here.", "you must not smoke here", "you must not smoke here."], wide: true },
    { type: "gap", text: '<span class="pl">Nie musisz przychodzić.</span>', answers: ["you don't have to come", "you don't have to come.", "you don't need to come", "you needn't come"], wide: true },
    { type: "gap", text: '<span class="pl">Powinieneś odpocząć.</span>', answers: ["you should rest", "you should rest.", "you should take a rest", "you ought to rest"], wide: true },
    { type: "gap", text: '<span class="pl">W przyszłym roku będę mógł pomóc.</span>', answers: ["next year i will be able to help", "next year i will be able to help.", "next year i'll be able to help", "next year i'll be able to help."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz swoje obowiązki w pracy/szkole i zasady, których musisz przestrzegać.", placeholder: "np. I have to... I mustn't... I don't have to..." }
  ],
  test: [
    { q: "I ______ wear a uniform at work.", opcje: ["have to", "must to", "have", "should"], poprawna: 0, wyjasnienie: "Obowiązek z zewnątrz → have to." },
    { q: "You ______ smoke here.", opcje: ["mustn't", "don't have to", "shouldn't to", "not must"], poprawna: 0, wyjasnienie: "Zakaz → mustn't." },
    { q: "You ______ come tomorrow – it's optional.", opcje: ["mustn't", "don't have to", "shouldn't", "can't"], poprawna: 1, wyjasnienie: "Brak obowiązku → don't have to." },
    { q: "You ______ see a doctor.", opcje: ["should", "should to", "shoulds", "must to"], poprawna: 0, wyjasnienie: "Rada → should." },
    { q: "When I was five, I ______ swim very well.", opcje: ["can", "could", "could to", "am able"], poprawna: 1, wyjasnienie: "Przeszłość → could." },
    { q: "I will ______ help you tomorrow.", opcje: ["can", "be able", "able", "could"], poprawna: 1, wyjasnienie: "will be able to." },
    { q: "Which is correct?", opcje: ["I must to go.", "I must go.", "I must going.", "I must to going."], poprawna: 1, wyjasnienie: "Modalne bez 'to'." },
    { q: "Which is correct?", opcje: ["You should to study.", "You should studying.", "You should study.", "You should to studying."], poprawna: 2, wyjasnienie: "should + czasownik." },
    { q: "You ______ hurry – the train leaves in five minutes.", opcje: ["had better", "would better", "have better", "will better"], poprawna: 0, wyjasnienie: "had better + czasownik = silna rada." },
    { q: "I'm tired. I ______ go to bed.", opcje: ["should", "should to", "shoulds", "must to"], poprawna: 0, wyjasnienie: "Rada → should." }
  ]
};


/* ============================================================
   G5B1 – Okresy warunkowe – Second Conditional
============================================================ */
window.LESSON_DATA["G5B1"] = {
  tytul: "Okresy warunkowe 0, 1, 2",
  poziom: "B1",
  dzial: "G5",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      If I had more free time, I would definitely learn to play the piano. If I won the lottery, I would travel around the world and I would probably buy a house near the sea. But in reality, if I want to achieve my goals, I have to work hard every day. If I study consistently, I will pass my exams with good grades. If I had been born in another country, my life would be completely different. My father always says: "If I were you, I would start today, not tomorrow."
    </p>

    <h3>Zero Conditional – fakty</h3>
    <p><span class="en">If + Present Simple, Present Simple</span></p>
    <table>
      <tr><td class="en">If you heat water, it boils.</td></tr>
      <tr><td class="en">If I don't sleep enough, I feel tired.</td></tr>
    </table>

    <h3>First Conditional – realna przyszłość</h3>
    <p><span class="en">If + Present Simple, will + czasownik</span></p>
    <table>
      <tr><td class="en">If it rains, I will stay at home.</td></tr>
      <tr><td class="en">If you study hard, you will pass the exam.</td></tr>
    </table>

    <h3>Second Conditional – hipoteza</h3>
    <p><span class="en">If + Past Simple, would + czasownik</span></p>
    <p>Używamy, gdy mówimy o sytuacjach <b>nierealnych, hipotetycznych, mało prawdopodobnych</b> w teraźniejszości lub przyszłości.</p>
    <table>
      <tr><td class="en">If I had more money, I would travel more.</td></tr>
      <tr><td class="en">If I were you, I would apologise.</td></tr>
      <tr><td class="en">If I lived abroad, I would learn another language.</td></tr>
    </table>

    <h3>Would / could / might</h3>
    <table>
      <tr><th>Modal</th><th>Znaczenie</th></tr>
      <tr><td class="en"><b>would</b></td><td>pewny rezultat</td></tr>
      <tr><td class="en"><b>could</b></td><td>możliwość</td></tr>
      <tr><td class="en"><b>might</b></td><td>mniej pewna możliwość</td></tr>
    </table>
    <table>
      <tr><td class="en">If I had more time, I <b>would</b> travel.</td></tr>
      <tr><td class="en">If I had more time, I <b>could</b> travel.</td></tr>
      <tr><td class="en">If I had more time, I <b>might</b> travel.</td></tr>
    </table>

    <h3>If I were you</h3>
    <p>Utrwalona konstrukcja do udzielania rad:</p>
    <table>
      <tr><td class="en">If I were you, I would talk to him.</td></tr>
      <tr><td class="en">If I were you, I wouldn't accept the offer.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>First Conditional</b> = realna możliwość: <span class="en">If it rains, I will stay.</span><br>
      <b>Second Conditional</b> = hipoteza, marzenie: <span class="en">If I had a car, I would drive to work.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Zero, First czy Second?" },
    { type: "gap", text: '<span class="en">If you heat ice, it ________ (melt).</span>', answers: ["melts"] },
    { type: "gap", text: '<span class="en">If it ________ (rain) tomorrow, we will stay home.</span>', answers: ["rains"] },
    { type: "gap", text: '<span class="en">If I ________ (have) more money, I would travel.</span>', answers: ["had"] },
    { type: "gap", text: '<span class="en">If I ________ (be) you, I would apologise.</span>', answers: ["were"] },
    { type: "gap", text: '<span class="en">If you don\'t eat, you ________ (get) hungry.</span>', answers: ["get"] },
    { type: "gap", text: '<span class="en">If she ________ (study) hard, she will pass.</span>', answers: ["studies"] },
    { type: "header", text: "B. Uzupełnij Second Conditional" },
    { type: "gap", text: '<span class="en">If I ________ (have) more time, I ________ (learn) Italian.</span>', answers: ["had, would learn"] },
    { type: "gap", text: '<span class="en">If she ________ (live) closer, she ________ (visit) us more often.</span>', answers: ["lived, would visit"] },
    { type: "gap", text: '<span class="en">If we ________ (win) the lottery, we ________ (buy) a house.</span>', answers: ["won, would buy"] },
    { type: "gap", text: '<span class="en">If he ________ (know) the answer, he ________ (tell) us.</span>', answers: ["knew, would tell"] },
    { type: "gap", text: '<span class="en">If I ________ (be) you, I ________ (not / accept) the offer.</span>', answers: ["were, wouldn't accept", "was, wouldn't accept"] },
    { type: "header", text: "C. Would, could czy might?" },
    { type: "gap", text: '<span class="en">If I had more money, I ________ (would / could / might) buy a new car.</span>', answers: ["would"] },
    { type: "gap", text: '<span class="en">If she studied harder, she ________ (would / could / might) pass the exam.</span>', answers: ["might", "could"] },
    { type: "gap", text: '<span class="en">If we had a car, we ________ (would / could / might) drive to the beach.</span>', answers: ["could", "would"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">If I would have more money, I would travel. → ________</span>', answers: ["if i had more money i would travel", "if i had more money, i would travel", "if i had more money, i would travel."], wide: true },
    { type: "gap", text: '<span class="en">If I was you, I would leave. → ________</span>', answers: ["if i were you i would leave", "if i were you, i would leave", "if i were you, i would leave."], wide: true },
    { type: "gap", text: '<span class="en">If she would study, she would pass. → ________</span>', answers: ["if she studied she would pass", "if she studied, she would pass", "if she studied, she would pass."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Gdybym miał więcej czasu, uczyłbym się hiszpańskiego.</span>', answers: ["if i had more time i would learn spanish", "if i had more time, i would learn spanish", "if i had more time, i would learn spanish."], wide: true },
    { type: "gap", text: '<span class="pl">Na twoim miejscu porozmawiałbym z nim.</span>', answers: ["if i were you i would talk to him", "if i were you, i would talk to him", "if i were you, i would talk to him."], wide: true },
    { type: "gap", text: '<span class="pl">Gdyby wygrali na loterii, kupiliby dom.</span>', answers: ["if they won the lottery they would buy a house", "if they won the lottery, they would buy a house", "if they won the lottery, they would buy a house."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 5 zdań Second Conditional o swoich marzeniach (co byś zrobił, gdybyś...).", placeholder: "np. If I had more money, I would... If I could travel, I would..." }
  ],
  test: [
    { q: "If I ______ more money, I would travel more.", opcje: ["have", "had", "would have", "has"], poprawna: 1, wyjasnienie: "Second Conditional → Past Simple." },
    { q: "If I were you, I ______ talk to him.", opcje: ["will", "would", "am", "do"], poprawna: 1, wyjasnienie: "If I were you → would." },
    { q: "If she ______ harder, she would pass.", opcje: ["study", "studies", "studied", "will study"], poprawna: 2, wyjasnienie: "Second – Past Simple w warunku." },
    { q: "If it ______ tomorrow, we will stay home.", opcje: ["rains", "will rain", "rained", "would rain"], poprawna: 0, wyjasnienie: "First Conditional – Present Simple." },
    { q: "If you heat water, it ______.", opcje: ["boils", "will boil", "would boil", "boiled"], poprawna: 0, wyjasnienie: "Zero Conditional – fakt." },
    { q: "If we ______ the lottery, we would buy a house.", opcje: ["win", "won", "will win", "would win"], poprawna: 1, wyjasnienie: "Second Conditional." },
    { q: "Which is correct?", opcje: ["If I would have money...", "If I had money...", "If I will have money...", "If I have money..."], poprawna: 1, wyjasnienie: "Second – Past Simple (nie would)." },
    { q: "If I had more time, I ______ learn Italian.", opcje: ["will", "would", "am", "do"], poprawna: 1, wyjasnienie: "would + czasownik." },
    { q: "If he ______ the answer, he would tell us.", opcje: ["knows", "knew", "know", "will know"], poprawna: 1, wyjasnienie: "Past Simple w warunku." },
    { q: "If I ______ you, I would apologise.", opcje: ["am", "was", "were", "be"], poprawna: 2, wyjasnienie: "If I were you – utrwalone." }
  ]
};

/* ============================================================
   G6B1 – Reported Speech – rozszerzenie
============================================================ */
window.LESSON_DATA["G6B1"] = {
  tytul: "Mowa zależna – rozszerzenie",
  poziom: "B1",
  dzial: "G6",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Yesterday my friend asked me if I had finished the project. I told her that I hadn't started it yet. She said she could help me if I wanted. I asked her when she was free, and she said she would come to my house the next day. She also promised to bring her notes. I thanked her and said that I really appreciated her help. She replied that I would have done the same for her.
    </p>

    <h3>Reported Statements – powtórzenie</h3>
    <table>
      <tr><th>Direct</th><th>Reported</th></tr>
      <tr><td class="en">"I am tired."</td><td class="en">He said (that) he was tired.</td></tr>
      <tr><td class="en">"I work here."</td><td class="en">She said she worked there.</td></tr>
      <tr><td class="en">"I will come."</td><td class="en">He said he would come.</td></tr>
      <tr><td class="en">"I have finished."</td><td class="en">She said she had finished.</td></tr>
    </table>

    <h3>Reported Questions</h3>
    <table>
      <tr><th>Typ</th><th>Direct</th><th>Reported</th></tr>
      <tr>
        <td>Yes/No</td>
        <td class="en">"Are you tired?"</td>
        <td class="en">She asked me <b>if</b> I was tired.</td>
      </tr>
      <tr>
        <td>Wh-</td>
        <td class="en">"Where do you live?"</td>
        <td class="en">She asked me <b>where</b> I lived.</td>
      </tr>
      <tr>
        <td>Wh-</td>
        <td class="en">"What time is it?"</td>
        <td class="en">He asked me what time it was.</td>
      </tr>
    </table>
    <p><b>Uwaga:</b> w reported questions <b>nie ma</b> szyku pytającego ani "do":</p>
    <table>
      <tr><td class="en">She asked me where <b>I lived</b>. ✅</td></tr>
      <tr><td class="en">She asked me where <b>did I live</b>. ❌</td></tr>
    </table>

    <h3>Reported Commands / Requests</h3>
    <table>
      <tr><th>Direct</th><th>Reported</th></tr>
      <tr><td class="en">"Close the door."</td><td class="en">He told me <b>to close</b> the door.</td></tr>
      <tr><td class="en">"Don't touch it."</td><td class="en">She told me <b>not to touch</b> it.</td></tr>
      <tr><td class="en">"Please help me."</td><td class="en">He asked me <b>to help</b> him.</td></tr>
    </table>

    <h3>Reporting Verbs – rozszerzenie</h3>
    <table>
      <tr><th>Verb</th><th>Konstrukcja</th><th>Przykład</th></tr>
      <tr><td class="en"><b>advise</b></td><td>advise sb to do</td><td class="en">He advised me to wait.</td></tr>
      <tr><td class="en"><b>warn</b></td><td>warn sb to do / not to do</td><td class="en">She warned me not to go.</td></tr>
      <tr><td class="en"><b>promise</b></td><td>promise to do</td><td class="en">He promised to help.</td></tr>
      <tr><td class="en"><b>offer</b></td><td>offer to do</td><td class="en">She offered to drive.</td></tr>
      <tr><td class="en"><b>refuse</b></td><td>refuse to do</td><td class="en">He refused to answer.</td></tr>
      <tr><td class="en"><b>suggest</b></td><td>suggest doing</td><td class="en">He suggested going out.</td></tr>
      <tr><td class="en"><b>invite</b></td><td>invite sb to do</td><td class="en">She invited me to stay.</td></tr>
    </table>

    <h3>Zmiana określeń</h3>
    <table>
      <tr><td class="en">now → then</td><td class="en">today → that day</td></tr>
      <tr><td class="en">tomorrow → the next day</td><td class="en">yesterday → the day before</td></tr>
      <tr><td class="en">here → there</td><td class="en">this → that</td></tr>
      <tr><td class="en">these → those</td><td class="en">next week → the following week</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>say / tell + that</b> – statements<br>
      <b>ask + if / wh-</b> – questions<br>
      <b>tell / ask + to do</b> – commands and requests
    </div>
  `,
  karta: [
    { type: "header", text: "A. Przekształć na mowę zależną (statements)" },
    { type: "gap", text: '<span class="en">"I am very busy." → He said he ________ very busy.</span>', answers: ["was"], wide: true },
    { type: "gap", text: '<span class="en">"I have finished my homework." → She said she ________ her homework.</span>', answers: ["had finished"], wide: true },
    { type: "gap", text: '<span class="en">"I will call you." → He said he ________ call me.</span>', answers: ["would"], wide: true },
    { type: "header", text: "B. Reported questions" },
    { type: "gap", text: '<span class="en">"Are you tired?" → She asked me ________ I was tired.</span>', answers: ["if", "whether"], wide: true },
    { type: "gap", text: '<span class="en">"Where do you live?" → He asked me where ________.</span>', answers: ["i lived"], wide: true },
    { type: "gap", text: '<span class="en">"What time is it?" → She asked me what time ________.</span>', answers: ["it was"], wide: true },
    { type: "gap", text: '<span class="en">"Can you help me?" → He asked me ________ I could help him.</span>', answers: ["if", "whether"], wide: true },
    { type: "header", text: "C. Reported commands / requests" },
    { type: "gap", text: '<span class="en">"Close the door." → He told me ________ the door.</span>', answers: ["to close"], wide: true },
    { type: "gap", text: '<span class="en">"Don\'t touch it." → She told me ________ touch it.</span>', answers: ["not to"], wide: true },
    { type: "gap", text: '<span class="en">"Please help me." → He asked me ________ him.</span>', answers: ["to help"], wide: true },
    { type: "gap", text: '<span class="en">"Wait for me!" → She told me ________ for her.</span>', answers: ["to wait"], wide: true },
    { type: "header", text: "D. Reporting verbs" },
    { type: "gap", text: '<span class="en">He advised me ________ (wait).</span>', answers: ["to wait"] },
    { type: "gap", text: '<span class="en">She warned me ________ (not / go).</span>', answers: ["not to go"] },
    { type: "gap", text: '<span class="en">He suggested ________ (go) out.</span>', answers: ["going"] },
    { type: "gap", text: '<span class="en">She refused ________ (answer).</span>', answers: ["to answer"] },
    { type: "gap", text: '<span class="en">He offered ________ (drive).</span>', answers: ["to drive"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">She asked me where did I live. → ________</span>', answers: ["she asked me where i lived", "she asked me where i lived."], wide: true },
    { type: "gap", text: '<span class="en">He said me he was tired. → ________</span>', answers: ["he told me he was tired", "he told me he was tired.", "he said he was tired", "he said he was tired."], wide: true },
    { type: "gap", text: '<span class="en">She told to me the truth. → ________</span>', answers: ["she told me the truth", "she told me the truth."], wide: true },
    { type: "gap", text: '<span class="en">He suggested to go out. → ________</span>', answers: ["he suggested going out", "he suggested going out."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Powiedział, że jest zmęczony.</span>', answers: ["he said he was tired", "he said he was tired.", "he said that he was tired", "he said that he was tired."], wide: true },
    { type: "gap", text: '<span class="pl">Zapytała mnie, czy mam czas.</span>', answers: ["she asked me if i had time", "she asked me if i had time.", "she asked me whether i had time", "she asked me whether i had time."], wide: true },
    { type: "gap", text: '<span class="pl">Powiedział mi, żebym zamknął drzwi.</span>', answers: ["he told me to close the door", "he told me to close the door.", "he asked me to close the door", "he asked me to close the door."], wide: true },
    { type: "gap", text: '<span class="pl">Zaproponował, żebyśmy poszli do kina.</span>', answers: ["he suggested going to the cinema", "he suggested going to the cinema.", "she suggested going to the cinema", "she suggested going to the cinema."], wide: true },
    { type: "gap", text: '<span class="pl">Obiecał mi pomóc.</span>', answers: ["he promised to help me", "he promised to help me.", "he promised me to help", "he promised me to help."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Przekształć 5 zdań, które ktoś powiedział w mowie zależnej.", placeholder: "np. My mother told me to... My friend asked me if..." }
  ],
  test: [
    { q: "He said he ______ tired.", opcje: ["is", "was", "were", "be"], poprawna: 1, wyjasnienie: "am → was." },
    { q: "She asked me ______ I had time.", opcje: ["if", "that", "what", "when"], poprawna: 0, wyjasnienie: "Yes/No question → if / whether." },
    { q: "He asked me where ______.", opcje: ["did I live", "I lived", "do I live", "I live"], poprawna: 1, wyjasnienie: "Bez inwersji w reported question." },
    { q: "He told me ______ the door.", opcje: ["close", "to close", "closing", "closed"], poprawna: 1, wyjasnienie: "Command → tell sb to do." },
    { q: "She told me ______ touch it.", opcje: ["not", "to not", "not to", "don't to"], poprawna: 2, wyjasnienie: "not to + czasownik." },
    { q: "He ______ going out.", opcje: ["suggested", "advised", "told", "warned"], poprawna: 0, wyjasnienie: "suggest + -ing." },
    { q: "She ______ to help me.", opcje: ["offered", "offering", "offers", "offer"], poprawna: 0, wyjasnienie: "offer to do." },
    { q: "He ______ me to wait.", opcje: ["advised", "said", "told to", "suggested"], poprawna: 0, wyjasnienie: "advise sb to do." },
    { q: '"I will come." → He said he ______ come.', opcje: ["will", "would", "is", "can"], poprawna: 1, wyjasnienie: "will → would." },
    { q: "She told me the truth. (kto?)", opcje: ["She said to me the truth.", "She told me the truth.", "She said me the truth.", "She told to me the truth."], poprawna: 1, wyjasnienie: "tell + osoba." }
  ]
};

/* ============================================================
   G7B1 – Passive Voice – B1
============================================================ */
window.LESSON_DATA["G7B1"] = {
  tytul: "Strona bierna – rozszerzenie",
  poziom: "B1",
  dzial: "G7",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      The first pyramids in Egypt were built more than 4,000 years ago. They were constructed by thousands of workers over many years. Today, the pyramids are visited by millions of tourists every year. Many objects from ancient Egypt have been discovered by archaeologists. Some of them have been displayed in the British Museum. New discoveries are still being made every year. In the future, more secrets of the pyramids will probably be revealed with the help of new technology. Historians hope that the buildings will be protected for future generations.
    </p>

    <h3>Passive – przypomnienie</h3>
    <p><b>be + III forma (Past Participle)</b></p>
    <table>
      <tr><th>Czas</th><th>Budowa</th><th>Przykład</th></tr>
      <tr><td>Present Simple</td><td class="en">am/is/are + III</td><td class="en">The room is cleaned.</td></tr>
      <tr><td>Past Simple</td><td class="en">was/were + III</td><td class="en">The bridge was built.</td></tr>
      <tr><td>Present Perfect</td><td class="en">have/has been + III</td><td class="en">The work has been finished.</td></tr>
      <tr><td>Past Perfect</td><td class="en">had been + III</td><td class="en">The work had been completed.</td></tr>
      <tr><td>Future</td><td class="en">will be + III</td><td class="en">The work will be done.</td></tr>
      <tr><td>Modal</td><td class="en">modal + be + III</td><td class="en">The work must be done.</td></tr>
    </table>

    <h3>By + wykonawca</h3>
    <table>
      <tr><td class="en">The book was written <b>by</b> George Orwell.</td></tr>
      <tr><td class="en">The building was designed <b>by</b> a famous architect.</td></tr>
    </table>
    <p>Gdy wykonawca nie jest ważny – pomijamy:</p>
    <table>
      <tr><td class="en">The car was stolen. (nie wiemy kto)</td></tr>
    </table>

    <h3>Passive with two objects</h3>
    <table>
      <tr><th>Active</th><th>Passive 1</th><th>Passive 2</th></tr>
      <tr>
        <td class="en">They gave me a present.</td>
        <td class="en">I was given a present.</td>
        <td class="en">A present was given to me.</td>
      </tr>
    </table>

    <h3>Pytania i przeczenia w passive</h3>
    <table>
      <tr><td class="en">Was the room cleaned?</td><td class="pl">Czy pokój został posprzątany?</td></tr>
      <tr><td class="en">The room wasn't cleaned.</td><td class="pl">Pokój nie został posprzątany.</td></tr>
      <tr><td class="en">Has the report been sent?</td><td class="pl">Czy raport został wysłany?</td></tr>
    </table>

    <h3>Kiedy używamy passive</h3>
    <ul>
      <li>Gdy nie wiemy kto: <span class="en">My phone was stolen.</span></li>
      <li>Gdy nie jest ważne kto: <span class="en">English is spoken here.</span></li>
      <li>W opisach naukowych, formalnych: <span class="en">The results were analysed.</span></li>
      <li>W regulaminach, instrukcjach: <span class="en">Tickets must be shown.</span></li>
    </ul>

    <div class="tip-box">
      <b>Zapamiętaj:</b> w passive <b>be</b> zmienia się przez czas, a <b>III forma</b> zostaje stała.<br>
      <span class="en">is cleaned · was cleaned · has been cleaned · will be cleaned · must be cleaned</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij passive (Present / Past Simple)" },
    { type: "gap", text: '<span class="en">The pyramids ________ (build) thousands of years ago.</span>', answers: ["were built"] },
    { type: "gap", text: '<span class="en">The pyramids ________ (visit) by millions of tourists every year.</span>', answers: ["are visited"] },
    { type: "gap", text: '<span class="en">The room ________ (clean) every day.</span>', answers: ["is cleaned"] },
    { type: "gap", text: '<span class="en">The car ________ (repair) yesterday.</span>', answers: ["was repaired"] },
    { type: "gap", text: '<span class="en">English ________ (speak) all over the world.</span>', answers: ["is spoken"] },
    { type: "header", text: "B. Uzupełnij passive (Perfect / Future / Modal)" },
    { type: "gap", text: '<span class="en">The work ________ (finish) already.</span>', answers: ["has been finished"] },
    { type: "gap", text: '<span class="en">The documents ________ (send) before the meeting.</span>', answers: ["had been sent"] },
    { type: "gap", text: '<span class="en">The results ________ (announce) tomorrow.</span>', answers: ["will be announced"] },
    { type: "gap", text: '<span class="en">The problem ________ (must / solve).</span>', answers: ["must be solved"] },
    { type: "gap", text: '<span class="en">The rules ________ (should / follow).</span>', answers: ["should be followed"] },
    { type: "header", text: "C. Zamień na stronę bierną" },
    { type: "gap", text: '<span class="en">They built the bridge in 2010. → The bridge ________ in 2010.</span>', answers: ["was built"], wide: true },
    { type: "gap", text: '<span class="en">People speak English all over the world. → English ________ all over the world.</span>', answers: ["is spoken"], wide: true },
    { type: "gap", text: '<span class="en">Someone has stolen my bike. → My bike ________.</span>', answers: ["has been stolen"], wide: true },
    { type: "gap", text: '<span class="en">They will announce the results tomorrow. → The results ________ tomorrow.</span>', answers: ["will be announced"], wide: true },
    { type: "gap", text: '<span class="en">You must follow the rules. → The rules ________.</span>', answers: ["must be followed"], wide: true },
    { type: "header", text: "D. By + wykonawca" },
    { type: "gap", text: '<span class="en">The book was written ________ George Orwell.</span>', answers: ["by"] },
    { type: "gap", text: '<span class="en">The building was designed ________ a famous architect.</span>', answers: ["by"] },
    { type: "gap", text: '<span class="en">The song was composed ________ Chopin.</span>', answers: ["by"] },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Ten dom został zbudowany w 1990 roku.</span>', answers: ["this house was built in 1990", "this house was built in 1990.", "the house was built in 1990", "the house was built in 1990."], wide: true },
    { type: "gap", text: '<span class="pl">Raport został już wysłany.</span>', answers: ["the report has already been sent", "the report has already been sent.", "the report has been sent already"], wide: true },
    { type: "gap", text: '<span class="pl">Wyniki zostaną ogłoszone jutro.</span>', answers: ["the results will be announced tomorrow", "the results will be announced tomorrow."], wide: true },
    { type: "gap", text: '<span class="pl">Problem musi zostać rozwiązany.</span>', answers: ["the problem must be solved", "the problem must be solved."], wide: true },
    { type: "gap", text: '<span class="pl">Ten film został nakręcony przez Spielberga.</span>', answers: ["this film was directed by spielberg", "this film was directed by spielberg.", "the film was directed by spielberg", "the film was directed by spielberg."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz swoje miasto lub szkołę, używając strony biernej (was built, is located, was renovated...).", placeholder: "np. My school was built in... It is located..." }
  ],
  test: [
    { q: "The pyramids ______ thousands of years ago.", opcje: ["built", "were built", "are built", "have built"], poprawna: 1, wyjasnienie: "Past Passive, l.mn. → were built." },
    { q: "The room ______ every day.", opcje: ["cleans", "is cleaned", "cleaned", "cleaning"], poprawna: 1, wyjasnienie: "Present Passive → is cleaned." },
    { q: "The report ______ already ______.", opcje: ["has / sent", "has / been sent", "is / sent", "was / send"], poprawna: 1, wyjasnienie: "Present Perfect Passive." },
    { q: "The results ______ tomorrow.", opcje: ["announce", "will announce", "will be announced", "are announcing"], poprawna: 2, wyjasnienie: "Future Passive." },
    { q: "The problem ______ solved.", opcje: ["must", "must be", "must been", "must to be"], poprawna: 1, wyjasnienie: "Modal Passive: modal + be + III." },
    { q: "The book was written ______ Orwell.", opcje: ["by", "from", "with", "of"], poprawna: 0, wyjasnienie: "by + wykonawca." },
    { q: "My bike ______.", opcje: ["has stolen", "has been stolen", "is stealing", "was steal"], poprawna: 1, wyjasnienie: "Present Perfect Passive." },
    { q: "English ______ all over the world.", opcje: ["speaks", "is spoken", "is speaking", "spoke"], poprawna: 1, wyjasnienie: "Present Passive." },
    { q: "Zamień: They built the bridge. → The bridge ______.", opcje: ["built", "is built", "was built", "was building"], poprawna: 2, wyjasnienie: "Past Passive." },
    { q: "The work ______ before we arrived.", opcje: ["finished", "had been finished", "was finishing", "has finished"], poprawna: 1, wyjasnienie: "Past Perfect Passive." }
  ]
};

/* ============================================================
   G8B1 – Szyk zdania i inwersja – wprowadzenie
============================================================ */
window.LESSON_DATA["G8B1"] = {
  tytul: "Szyk zdania i inwersja",
  poziom: "B1",
  dzial: "G8",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I always try to plan my day carefully. Usually I get up early, but yesterday I stayed in bed until nine. Never have I felt so tired in my life! I think it was because I had been working late the previous evening. Not only was I tired, but I was also hungry. So I made myself a big breakfast. Rarely do I eat so much in the morning, but that day was special. Only when I had eaten did I start to feel better.
    </p>

    <h3>Podstawowy szyk zdania</h3>
    <p><b>Podmiot + czasownik + dopełnienie + określenia (sposób → miejsce → czas)</b></p>
    <table>
      <tr><th>P</th><th>C</th><th>D</th><th>Sposób</th><th>Miejsce</th><th>Czas</th></tr>
      <tr><td class="en">She</td><td class="en">reads</td><td class="en">books</td><td class="en">slowly</td><td class="en">in the garden</td><td class="en">every evening.</td></tr>
    </table>

    <h3>Pozycja przysłówków</h3>
    <table>
      <tr><th>Przysłówek</th><th>Pozycja</th><th>Przykład</th></tr>
      <tr><td>always, usually, often, sometimes, never</td><td>przed czasownikiem głównym, po "be"</td><td class="en">I always get up early. She is always late.</td></tr>
      <tr><td>carefully, slowly, well</td><td>po dopełnieniu</td><td class="en">She speaks English well.</td></tr>
      <tr><td>yesterday, today, tomorrow</td><td>na końcu lub na początku</td><td class="en">I saw him yesterday. Yesterday I saw him.</td></tr>
    </table>

    <h3>So / Neither</h3>
    <table>
      <tr><th>Zdanie</th><th>Reakcja</th></tr>
      <tr><td class="en">I like coffee.</td><td class="en">So do I.</td></tr>
      <tr><td class="en">She is tired.</td><td class="en">So am I.</td></tr>
      <tr><td class="en">I don't like tea.</td><td class="en">Neither do I.</td></tr>
      <tr><td class="en">He isn't happy.</td><td class="en">Neither am I.</td></tr>
    </table>

    <h3>Inwersja po wyrażeniach negatywnych</h3>
    <p>Gdy zdanie zaczyna się od <b>przysłówka negatywnego</b>, stosujemy inwersję (jak w pytaniu):</p>
    <table>
      <tr><th>Bez inwersji</th><th>Z inwersją (formalnie)</th></tr>
      <tr>
        <td class="en">I have never seen such a thing.</td>
        <td class="en"><b>Never have I seen</b> such a thing.</td>
      </tr>
      <tr>
        <td class="en">I rarely complain.</td>
        <td class="en"><b>Rarely do I</b> complain.</td>
      </tr>
      <tr>
        <td class="en">She had hardly arrived when...</td>
        <td class="en"><b>Hardly had she arrived</b> when...</td>
      </tr>
      <tr>
        <td class="en">I had no sooner left than...</td>
        <td class="en"><b>No sooner had I left</b> than...</td>
      </tr>
    </table>

    <h3>Not only... but also</h3>
    <table>
      <tr><td class="en">Not only <b>did she sing</b>, but she also danced.</td></tr>
      <tr><td class="en">Not only <b>is he intelligent</b>, but he is also kind.</td></tr>
    </table>

    <h3>So / Such dla podkreślenia</h3>
    <table>
      <tr><td class="en">The view was <b>so beautiful</b> that we stopped.</td></tr>
      <tr><td class="en">It was <b>such a difficult test</b> that many students failed.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> inwersja jest używana głównie w <b>formalnym stylu</b> i w <b>literaturze</b>. W codziennej mowie raczej mówimy normalnie.<br>
      <span class="en">Never have I seen... (formalnie)</span> = <span class="en">I have never seen... (normalnie)</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Podstawowy szyk – ułóż zdania" },
    { type: "gap", text: '<span class="en">[books / reads / she / every evening] → ________</span>', answers: ["she reads books every evening", "she reads books every evening."], wide: true },
    { type: "gap", text: '<span class="en">[at school / I / saw / him / yesterday] → ________</span>', answers: ["i saw him at school yesterday", "i saw him at school yesterday."], wide: true },
    { type: "gap", text: '<span class="en">[English / speaks / she / very well] → ________</span>', answers: ["she speaks english very well", "she speaks english very well."], wide: true },
    { type: "header", text: "B. Wstaw przysłówek we właściwym miejscu" },
    { type: "gap", text: '<span class="en">I get up early. (always) → ________</span>', answers: ["i always get up early", "i always get up early."], wide: true },
    { type: "gap", text: '<span class="en">She is late. (always) → ________</span>', answers: ["she is always late", "she is always late."], wide: true },
    { type: "gap", text: '<span class="en">He has finished his work. (just) → ________</span>', answers: ["he has just finished his work", "he has just finished his work."], wide: true },
    { type: "header", text: "C. So / Neither" },
    { type: "gap", text: '<span class="en">I like coffee. → ________ I.</span>', answers: ["so do"] },
    { type: "gap", text: '<span class="en">She is tired. → ________ I.</span>', answers: ["so am"] },
    { type: "gap", text: '<span class="en">I don\'t like tea. → ________ I.</span>', answers: ["neither do"] },
    { type: "gap", text: '<span class="en">He isn\'t happy. → ________ I.</span>', answers: ["neither am"] },
    { type: "gap", text: '<span class="en">They can swim. → ________ I.</span>', answers: ["so can"] },
    { type: "header", text: "D. Inwersja – przekształć" },
    { type: "gap", text: '<span class="en">I have never seen such a thing. → Never ________ such a thing.</span>', answers: ["have i seen"], wide: true },
    { type: "gap", text: '<span class="en">I rarely complain. → Rarely ________ complain.</span>', answers: ["do i"], wide: true },
    { type: "gap", text: '<span class="en">She had hardly arrived when the phone rang. → Hardly ________ when the phone rang.</span>', answers: ["had she arrived"], wide: true },
    { type: "gap", text: '<span class="en">I had no sooner left than it started raining. → No sooner ________ than it started raining.</span>', answers: ["had i left"], wide: true },
    { type: "header", text: "E. So / Such" },
    { type: "gap", text: '<span class="en">The view was ________ beautiful that we stopped.</span>', answers: ["so"] },
    { type: "gap", text: '<span class="en">It was ________ a difficult test that many students failed.</span>', answers: ["such"] },
    { type: "gap", text: '<span class="en">He is ________ a nice person.</span>', answers: ["such"] },
    { type: "gap", text: '<span class="en">The film was ________ boring that I fell asleep.</span>', answers: ["so"] },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Nigdy nie widziałem takiej rzeczy.</span>', answers: ["never have i seen such a thing", "never have i seen such a thing.", "i have never seen such a thing", "i have never seen such a thing."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię kawę. – Ja też.</span>', answers: ["i like coffee so do i", "i like coffee. so do i", "i like coffee. so do i."], wide: true },
    { type: "gap", text: '<span class="pl">Rzadko narzekam.</span>', answers: ["rarely do i complain", "rarely do i complain.", "i rarely complain", "i rarely complain."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Napisz krótką historię, używając inwersji (Never have I..., Rarely do I..., Hardly had I...).", placeholder: "np. Never have I felt so... When I..." }
  ],
  test: [
    { q: "Which sentence is correct?", opcje: ["She reads books every evening.", "She every evening reads books.", "Every evening she reads books slowly.", "She reads every evening books."], poprawna: 0, wyjasnienie: "Standardowy szyk: podmiot + czasownik + dopełnienie + czas." },
    { q: "I ______ get up early.", opcje: ["always", "get always", "am always", "always am"], poprawna: 0, wyjasnienie: "Przysłówek przed czasownikiem głównym." },
    { q: "She is ______ late.", opcje: ["always", "always is", "get always", "often is"], poprawna: 0, wyjasnienie: "Po 'be' przysłówek idzie za nim." },
    { q: "I like coffee. So ______ I.", opcje: ["do", "am", "have", "will"], poprawna: 0, wyjasnienie: "Present Simple → so do I." },
    { q: "I don't like tea. Neither ______ I.", opcje: ["do", "am", "have", "did"], poprawna: 0, wyjasnienie: "Przeczenie z 'do' → neither do I." },
    { q: "Never ______ such a thing.", opcje: ["I have seen", "have I seen", "I saw", "did I see"], poprawna: 1, wyjasnienie: "Po 'Never' na początku – inwersja." },
    { q: "Rarely ______ complain.", opcje: ["do I", "I do", "I", "am I"], poprawna: 0, wyjasnienie: "Inwersja po 'rarely'." },
    { q: "Hardly ______ when the phone rang.", opcje: ["had she arrived", "she had arrived", "she arrived", "did she arrive"], poprawna: 0, wyjasnienie: "Inwersja z Past Perfect." },
    { q: "The film was ______ boring that I fell asleep.", opcje: ["so", "such", "such a", "very"], poprawna: 0, wyjasnienie: "so + przymiotnik." },
    { q: "It was ______ a difficult test.", opcje: ["so", "such", "such a", "so a"], poprawna: 1, wyjasnienie: "such + a + przymiotnik + rzeczownik." }
  ]
};


/* ============================================================
   G9B1 – Przedimki – użycie zaawansowane
============================================================ */
window.LESSON_DATA["G9B1"] = {
  tytul: "Przedimki – użycie zaawansowane",
  poziom: "B1",
  dzial: "G9",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      The internet has changed the way we live. When I was a child, we didn't have a computer at home, and going online was a special event. Now I use the internet every day. I read the news online, watch videos on YouTube and message my friends. The information on some websites is not always reliable, so I try to check the source. The best thing about the internet is that it connects people from all over the world. The worst thing is that it can waste a lot of our time.
    </p>

    <h3>A / An – przedimek nieokreślony</h3>
    <table>
      <tr><td class="en">a</td><td>przed spółgłoską: <span class="en">a book, a car, a university</span></td></tr>
      <tr><td class="en">an</td><td>przed samogłoską: <span class="en">an apple, an hour, an MBA</span></td></tr>
    </table>
    <p><b>Używamy:</b></p>
    <ul>
      <li>Pierwsza wzmianka: <span class="en">I saw a film yesterday.</span></li>
      <li>Zawody: <span class="en">She is a doctor.</span></li>
      <li>„Jeden z wielu": <span class="en">Give me a pen.</span></li>
      <li>W znaczeniu "za każdy": <span class="en">twice a week, 5 euros a kilo</span></li>
    </ul>

    <h3>The – przedimek określony</h3>
    <p><b>Używamy gdy:</b></p>
    <ul>
      <li>Już wspomniane: <span class="en">I have a cat. The cat is black.</span></li>
      <li>Jedno w swoim rodzaju: <span class="en">the sun, the moon, the internet</span></li>
      <li>Konkretna rzecz: <span class="en">The book on the table is mine.</span></li>
      <li>Superlatywy: <span class="en">the best, the tallest</span></li>
      <li>Rzeki, morza, oceany: <span class="en">the Vistula, the Baltic, the Pacific</span></li>
      <li>Państwa w lm.: <span class="en">the Netherlands, the USA, the UK</span></li>
      <li>Instrumenty: <span class="en">play the piano, play the guitar</span></li>
      <li>Rodziny: <span class="en">the Smiths (rodzina Smithów)</span></li>
      <li>Narodowości (jako grupa): <span class="en">the Polish, the French</span></li>
    </ul>

    <h3>Zero article – bez przedimka</h3>
    <table>
      <tr><td class="en">Liczba mnoga ogólnie:</td><td class="en">I like dogs.</td></tr>
      <tr><td class="en">Niepoliczalne:</td><td class="en">I like music.</td></tr>
      <tr><td class="en">Imiona:</td><td class="en">Anna, Tom</td></tr>
      <tr><td class="en">Większość państw / miast:</td><td class="en">Poland, Warsaw</td></tr>
      <tr><td class="en">Posiłki:</td><td class="en">I eat breakfast at 8.</td></tr>
      <tr><td class="en">Sport:</td><td class="en">I play football.</td></tr>
      <tr><td class="en">Języki:</td><td class="en">I speak English.</td></tr>
      <tr><td class="en">Dni, miesiące:</td><td class="en">on Monday, in May</td></tr>
      <tr><td class="en">Szkoła / praca / dom (ogólnie):</td><td class="en">go to school, at work, at home</td></tr>
    </table>

    <h3>Trudne przypadki</h3>
    <table>
      <tr><td class="en">go to school / go to <b>the</b> school</td><td class="pl">uczyć się / iść do budynku</td></tr>
      <tr><td class="en">go to bed / go to <b>the</b> bed</td><td class="pl">iść spać / podejść do łóżka</td></tr>
      <tr><td class="en">at home / at <b>the</b> home</td><td class="pl">w domu / w domu opieki</td></tr>
      <tr><td class="en">in hospital / in <b>the</b> hospital</td><td class="pl">jako pacjent / w budynku</td></tr>
      <tr><td class="en">in prison / in <b>the</b> prison</td><td class="pl">jako więzień / w budynku</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> Internet, radio, telewizja, pogoda – z <b>the</b>:<br>
      <span class="en">the internet, the radio, the TV, the weather, the news, the cinema, the theatre</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wstaw a / an / the lub – (nic)" },
    { type: "gap", text: '<span class="en">I have ________ cat. ________ cat is black.</span>', answers: ["a, the"] },
    { type: "gap", text: '<span class="en">She is ________ engineer.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">________ internet has changed our lives.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I like ________ music.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">I go to ________ school every day.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">We saw ________ film yesterday. ________ film was great.</span>', answers: ["a, the"] },
    { type: "gap", text: '<span class="en">She plays ________ piano very well.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">________ Smiths are my neighbours.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I live in ________ Poland.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">I go to work by ________ bus.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">We visited ________ Netherlands last summer.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I read ________ news online.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">It\'s ________ interesting book.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">I have two sisters. ________ older one is a doctor.</span>', answers: ["the"] },
    { type: "header", text: "B. Popraw błędy" },
    { type: "gap", text: '<span class="en">I like the dogs. → ________</span>', answers: ["i like dogs", "i like dogs."], wide: true },
    { type: "gap", text: '<span class="en">She is doctor. → ________</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="en">I go to the school every day. (uczę się) → ________</span>', answers: ["i go to school every day", "i go to school every day."], wide: true },
    { type: "gap", text: '<span class="en">Sun is bright today. → ________</span>', answers: ["the sun is bright today", "the sun is bright today."], wide: true },
    { type: "gap", text: '<span class="en">I saw a elephant. → ________</span>', answers: ["i saw an elephant", "i saw an elephant."], wide: true },
    { type: "header", text: "C. Wybierz właściwy przedimek w tekście" },
    { type: "gap", text: '<span class="en">________ internet has changed ________ way we live.</span>', answers: ["the, the"] },
    { type: "gap", text: '<span class="en">When I was ________ child, we didn\'t have ________ computer at home.</span>', answers: ["a, a"] },
    { type: "gap", text: '<span class="en">Now I use ________ internet every day.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I read ________ news online.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">________ information on some websites is not reliable.</span>', answers: ["the"] },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Internet zmienił nasze życie.</span>', answers: ["the internet has changed our lives", "the internet has changed our lives.", "the internet has changed our life"], wide: true },
    { type: "gap", text: '<span class="pl">Ona jest lekarką.</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię psy i koty.</span>', answers: ["i like dogs and cats", "i like dogs and cats."], wide: true },
    { type: "gap", text: '<span class="pl">Chodzę do pracy autobusem.</span>', answers: ["i go to work by bus", "i go to work by bus."], wide: true },
    { type: "gap", text: '<span class="pl">Widziałem wczoraj film. Ten film był świetny.</span>', answers: ["i saw a film yesterday the film was great", "i saw a film yesterday. the film was great", "i saw a film yesterday. the film was great."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Opisz swoje popołudnie – powiedz, co robiłeś, używając przedimków.", placeholder: "np. In the afternoon I went to... I read a book about... The book was..." }
  ],
  test: [
    { q: "I have ______ cat. ______ cat is black.", opcje: ["a / the", "the / a", "a / a", "the / the"], poprawna: 0, wyjasnienie: "Pierwsza wzmianka: a. Druga: the." },
    { q: "She is ______ engineer.", opcje: ["a", "an", "the", "-"], poprawna: 1, wyjasnienie: "Przed samogłoską: an." },
    { q: "______ internet has changed our lives.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Internet – jedno w swoim rodzaju → the." },
    { q: "I like ______ music.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Niepoliczalne → bez przedimka." },
    { q: "I go to ______ school every day.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Szkoła ogólnie → bez przedimka." },
    { q: "She plays ______ piano.", opcje: ["a", "an", "the", "-"], poprawna: 2, wyjasnienie: "Instrumenty → the." },
    { q: "I live in ______ Poland.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Państwa – bez przedimka." },
    { q: "I read ______ news online.", opcje: ["a", "an", "the", "-"], poprawna: 2, wyjasnienie: "the news – utrwalone." },
    { q: "I go to work ______ bus.", opcje: ["by", "by a", "by the", "on"], poprawna: 0, wyjasnienie: "by bus – utrwalone." },
    { q: "I have two sisters. ______ older one is a doctor.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Konkretna → the older one." }
  ]
};

/* ============================================================
   G10B1 – Określniki ilości – B1
============================================================ */
window.LESSON_DATA["G10B1"] = {
  tytul: "Określniki ilości – rozszerzenie",
  poziom: "B1",
  dzial: "G10",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I don't have much free time during the week, so I try to make the most of my weekends. On Saturday mornings I usually do a bit of shopping and prepare a few meals for the whole week. There are only a few shops near my flat, but they're enough for everyday needs. I don't have many friends who live close by, but the ones I have are very close to me. I also spend a little money on books every month because reading is one of my favourite things. I try to read as many books as possible.
    </p>

    <h3>Some / Any – powtórzenie</h3>
    <table>
      <tr><th>SOME (twierdzenia)</th><th>ANY (pytania, przeczenia)</th></tr>
      <tr>
        <td class="en">I have some money.</td>
        <td class="en">I don't have any money. Do you have any?</td>
      </tr>
    </table>
    <p><b>Wyjątki:</b> w uprzejmych prośbach / propozycjach: <span class="en">Would you like some tea?</span></p>

    <h3>Much / Many / A lot of</h3>
    <table>
      <tr><th>MUCH</th><th>MANY</th><th>A LOT OF</th></tr>
      <tr>
        <td>niepoliczalne<br><span class="en">much money</span></td>
        <td>policzalne<br><span class="en">many books</span></td>
        <td>oba (potocznie)<br><span class="en">a lot of money / books</span></td>
      </tr>
    </table>
    <p><b>much / many</b> najczęściej w przeczeniach i pytaniach; <b>a lot of</b> w twierdzeniach.</p>

    <h3>A few / A little vs Few / Little</h3>
    <table>
      <tr><th>Pozytywne</th><th>Negatywne</th></tr>
      <tr>
        <td class="en"><b>A few</b> books = kilka (jest trochę)</td>
        <td class="en"><b>Few</b> books = niewiele (prawie nic)</td>
      </tr>
      <tr>
        <td class="en"><b>A little</b> money = trochę</td>
        <td class="en"><b>Little</b> money = mało (prawie nic)</td>
      </tr>
    </table>
    <table>
      <tr><td class="en">I have <b>a few</b> friends. <span class="pl">(mam kilku – OK)</span></td></tr>
      <tr><td class="en">I have <b>few</b> friends. <span class="pl">(mam niewielu – smutne)</span></td></tr>
    </table>

    <h3>Both / Neither / Either</h3>
    <table>
      <tr><th>Wyrażenie</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>both</b></td><td>oba (dwa)</td><td class="en">Both of my sisters are doctors.</td></tr>
      <tr><td class="en"><b>neither</b></td><td>żaden z dwóch</td><td class="en">Neither of them came.</td></tr>
      <tr><td class="en"><b>either</b></td><td>jeden z dwóch / oba (w przeczeniu)</td><td class="en">You can take either book.</td></tr>
      <tr><td class="en"><b>all</b></td><td>wszyscy / wszystko (3+)</td><td class="en">All my friends came.</td></tr>
      <tr><td class="en"><b>none</b></td><td>żaden (3+)</td><td class="en">None of them came.</td></tr>
    </table>

    <h3>Each / Every</h3>
    <table>
      <tr><td class="en"><b>each</b></td><td>każdy osobno (2 lub więcej)</td><td class="en">Each student got a book.</td></tr>
      <tr><td class="en"><b>every</b></td><td>każdy (3+, grupa)</td><td class="en">Every student must attend.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>every</b> + liczba pojedyncza. <span class="en">Every student is here.</span> (nie "are")<br>
      <b>a few</b> = kilka (pozytywne) · <b>few</b> = niewiele (negatywne).
    </div>
  `,
  karta: [
    { type: "header", text: "A. Some / Any" },
    { type: "gap", text: '<span class="en">I have ________ money in my wallet.</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">Do you have ________ questions?</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ time today.</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">Would you like ________ coffee?</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">There aren\'t ________ shops in my area.</span>', answers: ["any"] },
    { type: "header", text: "B. Much / Many / A lot of" },
    { type: "gap", text: '<span class="en">How ________ money do you have?</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">How ________ books did you read?</span>', answers: ["many"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ free time.</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">There were ________ people at the party.</span>', answers: ["a lot of", "many"] },
    { type: "gap", text: '<span class="en">She doesn\'t have ________ friends.</span>', answers: ["many"] },
    { type: "header", text: "C. A few / A little vs Few / Little" },
    { type: "gap", text: '<span class="en">I have ________ books to read. (pozytywnie)</span>', answers: ["a few"] },
    { type: "gap", text: '<span class="en">I have ________ money left. (pozytywnie – trochę)</span>', answers: ["a little"] },
    { type: "gap", text: '<span class="en">I have ________ friends – I feel lonely. (negatywnie)</span>', answers: ["few"] },
    { type: "gap", text: '<span class="en">There is ________ hope. (prawie żadnej)</span>', answers: ["little"] },
    { type: "gap", text: '<span class="en">I speak ________ Spanish – only a few words.</span>', answers: ["a little"] },
    { type: "header", text: "D. Both / Neither / Either / All / None" },
    { type: "gap", text: '<span class="en">________ of my sisters are doctors. (obie)</span>', answers: ["both"] },
    { type: "gap", text: '<span class="en">________ of them came to the party. (żaden z dwóch)</span>', answers: ["neither"] },
    { type: "gap", text: '<span class="en">You can take ________ book – I don\'t mind. (jeden z dwóch)</span>', answers: ["either"] },
    { type: "gap", text: '<span class="en">________ my friends came. (wszyscy)</span>', answers: ["all"] },
    { type: "gap", text: '<span class="en">________ of them came. (żaden z wielu)</span>', answers: ["none"] },
    { type: "header", text: "E. Each czy every?" },
    { type: "gap", text: '<span class="en">________ student got a book. (pojedynczo)</span>', answers: ["each"] },
    { type: "gap", text: '<span class="en">________ student must attend the meeting. (wszyscy)</span>', answers: ["every"] },
    { type: "gap", text: '<span class="en">I go to the gym ________ day.</span>', answers: ["every"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">I have a little friends. → ________</span>', answers: ["i have a few friends", "i have a few friends."], wide: true },
    { type: "gap", text: '<span class="en">How much books? → ________</span>', answers: ["how many books", "how many books?"], wide: true },
    { type: "gap", text: '<span class="en">Every students are here. → ________</span>', answers: ["every student is here", "every student is here."], wide: true },
    { type: "gap", text: '<span class="en">I don\'t have some time. → ________</span>', answers: ["i don't have any time", "i don't have any time."], wide: true },
    { type: "header", text: "G. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mam kilku przyjaciół w tym mieście.</span>', answers: ["i have a few friends in this city", "i have a few friends in this city."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mam dużo czasu.</span>', answers: ["i don't have much time", "i don't have much time.", "i don't have a lot of time", "i don't have a lot of time."], wide: true },
    { type: "gap", text: '<span class="pl">Ile masz książek?</span>', answers: ["how many books do you have", "how many books do you have?"], wide: true },
    { type: "gap", text: '<span class="pl">Oba moje koty są czarne.</span>', answers: ["both of my cats are black", "both of my cats are black.", "both my cats are black", "both my cats are black."], wide: true },
    { type: "gap", text: '<span class="pl">Każdy uczeń dostał książkę.</span>', answers: ["each student got a book", "each student got a book.", "every student got a book", "every student got a book."], wide: true },
    { type: "header", text: "H. Napisz" },
    { type: "open", text: "Opisz swój tydzień – ile masz czasu, ile masz zajęć, ilu masz znajomych. Użyj różnych określników.", placeholder: "np. I don't have much free time. I have a few friends. Every day I..." }
  ],
  test: [
    { q: "I have ______ money in my wallet.", opcje: ["some", "any", "many", "much"], poprawna: 0, wyjasnienie: "Twierdzenie → some." },
    { q: "Do you have ______ questions?", opcje: ["some", "any", "many", "much"], poprawna: 1, wyjasnienie: "Pytanie → any." },
    { q: "How ______ money do you have?", opcje: ["much", "many", "some", "any"], poprawna: 0, wyjasnienie: "Niepoliczalne → much." },
    { q: "How ______ books?", opcje: ["much", "many", "some", "any"], poprawna: 1, wyjasnienie: "Policzalne → many." },
    { q: "I have ______ books to read. (pozytywnie)", opcje: ["a few", "few", "a little", "little"], poprawna: 0, wyjasnienie: "a few = kilka (pozytywne)." },
    { q: "I have ______ friends – I feel lonely. (negatywnie)", opcje: ["a few", "few", "a little", "little"], poprawna: 1, wyjasnienie: "few = niewielu (negatywne)." },
    { q: "______ of my sisters are doctors. (obie)", opcje: ["Both", "Neither", "Either", "None"], poprawna: 0, wyjasnienie: "Both = oba." },
    { q: "______ student must attend the meeting.", opcje: ["Each", "Every", "All", "None"], poprawna: 1, wyjasnienie: "every + l.poj. – grupa." },
    { q: "Which is correct?", opcje: ["Every students are here.", "Every student is here.", "Every students is here.", "Every student are here."], poprawna: 1, wyjasnienie: "every + l.poj. → is." },
    { q: "I don't have ______ time.", opcje: ["some", "any", "many", "few"], poprawna: 1, wyjasnienie: "Przeczenie → any." }
  ]
};

/* ============================================================
   G11B1 – Przyimki – B1
============================================================ */
window.LESSON_DATA["G11B1"] = {
  tytul: "Przyimki – utrwalone zwroty i czasowniki",
  poziom: "B1",
  dzial: "G11",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I've been thinking about changing my job recently. I'm tired of doing the same things every day and I don't get on well with my new manager. I'm interested in marketing and I'd like to work for a big company. Last week I applied for a job at a small agency and they invited me for an interview. I was a bit nervous before it, but the interview went really well. Now I'm waiting for their reply. I hope they will offer me the position.
    </p>

    <h3>Przyimki czasu – powtórzenie</h3>
    <table>
      <tr><td class="en">at</td><td>godziny, noc, weekend (GB), święta: <span class="en">at 5, at night, at the weekend, at Christmas</span></td></tr>
      <tr><td class="en">on</td><td>dni, daty: <span class="en">on Monday, on 5th May</span></td></tr>
      <tr><td class="en">in</td><td>miesiące, lata, pory roku: <span class="en">in May, in 2025, in summer</span></td></tr>
      <tr><td class="en">during</td><td>podczas (jakiegoś okresu): <span class="en">during the summer</span></td></tr>
      <tr><td class="en">for</td><td>przez (jak długo): <span class="en">for two hours</span></td></tr>
      <tr><td class="en">since</td><td>od (punkt): <span class="en">since 2020</span></td></tr>
      <tr><td class="en">by</td><td>do (moment): <span class="en">by 5 o'clock</span></td></tr>
      <tr><td class="en">until</td><td>do (moment): <span class="en">until 8 p.m.</span></td></tr>
    </table>

    <h3>Przyimki miejsca – powtórzenie</h3>
    <table>
      <tr><td class="en">in</td><td>zamknięte przestrzenie, kraje, miasta: <span class="en">in a box, in Poland</span></td></tr>
      <tr><td class="en">on</td><td>powierzchnie, transport: <span class="en">on the table, on a bus</span></td></tr>
      <tr><td class="en">at</td><td>konkretne miejsca: <span class="en">at the door, at the party</span></td></tr>
      <tr><td class="en">under / over / above / below</td><td>pod / nad / ponad / poniżej</td></tr>
      <tr><td class="en">between / among</td><td>między (2) / wśród (wielu)</td></tr>
      <tr><td class="en">behind / in front of / beside</td><td>za / przed / obok</td></tr>
    </table>

    <h3>Czasowniki z przyimkami – trzeba zapamiętać</h3>
    <table>
      <tr><th>Zwrot</th><th>Polski</th></tr>
      <tr><td class="en">depend on</td><td class="pl">zależeć od</td></tr>
      <tr><td class="en">belong to</td><td class="pl">należeć do</td></tr>
      <tr><td class="en">consist of</td><td class="pl">składać się z</td></tr>
      <tr><td class="en">refer to</td><td class="pl">odnosić się do</td></tr>
      <tr><td class="en">insist on</td><td class="pl">nalegać na</td></tr>
      <tr><td class="en">rely on</td><td class="pl">polegać na</td></tr>
      <tr><td class="en">apologise for</td><td class="pl">przepraszać za</td></tr>
      <tr><td class="en">complain about</td><td class="pl">skarżyć się na</td></tr>
      <tr><td class="en">think about / of</td><td class="pl">myśleć o</td></tr>
      <tr><td class="en">agree with sb / on sth</td><td class="pl">zgadzać się z kimś / co do czegoś</td></tr>
      <tr><td class="en">succeed in</td><td class="pl">odnieść sukces w</td></tr>
      <tr><td class="en">believe in</td><td class="pl">wierzyć w</td></tr>
    </table>

    <h3>Przymiotnik + przyimek</h3>
    <table>
      <tr><td class="en">good / bad at</td><td class="en">interested in</td><td class="en">afraid of</td></tr>
      <tr><td class="en">proud of</td><td class="en">tired of</td><td class="en">similar to</td></tr>
      <tr><td class="en">different from</td><td class="en">responsible for</td><td class="en">famous for</td></tr>
      <tr><td class="en">angry with sb / about sth</td><td class="en">excited about</td><td class="en">keen on</td></tr>
    </table>

    <h3>Zwroty z przyimkami</h3>
    <table>
      <tr><td class="en">in my opinion</td><td class="pl">moim zdaniem</td></tr>
      <tr><td class="en">on purpose</td><td class="pl">celowo</td></tr>
      <tr><td class="en">by mistake</td><td class="pl">przez pomyłkę</td></tr>
      <tr><td class="en">in advance</td><td class="pl">z góry, wcześniej</td></tr>
      <tr><td class="en">at first</td><td class="pl">na początku</td></tr>
      <tr><td class="en">in fact</td><td class="pl">w rzeczywistości</td></tr>
      <tr><td class="en">on time</td><td class="pl">na czas</td></tr>
      <tr><td class="en">in time</td><td class="pl">w porę</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> czasowniki i przymiotniki z przyimkami trzeba się <b>nauczyć na pamięć</b>. Nie ma tu reguły.<br>
      <span class="en">depend on, belong to, good at, interested in, afraid of</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij przyimek w czasowniku" },
    { type: "gap", text: '<span class="en">It depends ________ the weather.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">This book belongs ________ me.</span>', answers: ["to"] },
    { type: "gap", text: '<span class="en">The team consists ________ five players.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">I apologise ________ being late.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">They complained ________ the food.</span>', answers: ["about"] },
    { type: "gap", text: '<span class="en">I agree ________ you.</span>', answers: ["with"] },
    { type: "gap", text: '<span class="en">She succeeded ________ passing the exam.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">I believe ________ you.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">I rely ________ my friends.</span>', answers: ["on"] },
    { type: "header", text: "B. Przymiotnik + przyimek" },
    { type: "gap", text: '<span class="en">I\'m good ________ maths.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">She\'s interested ________ art.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">He\'s afraid ________ flying.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">I\'m proud ________ my sister.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">I\'m tired ________ waiting.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">This is different ________ what I expected.</span>', answers: ["from"] },
    { type: "gap", text: '<span class="en">She\'s responsible ________ the whole project.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">Poland is famous ________ its food.</span>', answers: ["for"] },
    { type: "header", text: "C. Zwroty utrwalone" },
    { type: "gap", text: '<span class="en">________ my opinion, it\'s a bad idea.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">I did it ________ purpose.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">I sent the email ________ mistake.</span>', answers: ["by"] },
    { type: "gap", text: '<span class="en">Book your tickets ________ advance.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">________ first, it seemed easy.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">________ fact, I\'ve never been there.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">The train arrived ________ time.</span>', answers: ["on"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I depend of my parents. → ________</span>', answers: ["i depend on my parents", "i depend on my parents."], wide: true },
    { type: "gap", text: '<span class="en">I\'m good in English. → ________</span>', answers: ["i'm good at english", "i'm good at english.", "i am good at english", "i am good at english."], wide: true },
    { type: "gap", text: '<span class="en">I\'m interested on music. → ________</span>', answers: ["i'm interested in music", "i'm interested in music.", "i am interested in music", "i am interested in music."], wide: true },
    { type: "gap", text: '<span class="en">He apologised of being late. → ________</span>', answers: ["he apologised for being late", "he apologised for being late."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zależy to od ciebie.</span>', answers: ["it depends on you", "it depends on you."], wide: true },
    { type: "gap", text: '<span class="pl">Interesuję się muzyką.</span>', answers: ["i am interested in music", "i am interested in music.", "i'm interested in music", "i'm interested in music."], wide: true },
    { type: "gap", text: '<span class="pl">Boję się latania.</span>', answers: ["i am afraid of flying", "i am afraid of flying.", "i'm afraid of flying", "i'm afraid of flying."], wide: true },
    { type: "gap", text: '<span class="pl">Zrobiłem to celowo.</span>', answers: ["i did it on purpose", "i did it on purpose."], wide: true },
    { type: "gap", text: '<span class="pl">Moim zdaniem to dobry pomysł.</span>', answers: ["in my opinion it is a good idea", "in my opinion, it is a good idea", "in my opinion, it's a good idea", "in my opinion it's a good idea"], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz o sobie – co lubisz, w czym jesteś dobry, na czym ci zależy. Użyj czasowników/przymiotników z przyimkami.", placeholder: "np. I'm good at... I'm interested in... It depends on..." }
  ],
  test: [
    { q: "It depends ______ the weather.", opcje: ["on", "of", "in", "at"], poprawna: 0, wyjasnienie: "depend on – utrwalone." },
    { q: "This book belongs ______ me.", opcje: ["on", "to", "at", "in"], poprawna: 1, wyjasnienie: "belong to – utrwalone." },
    { q: "I'm good ______ maths.", opcje: ["at", "in", "on", "with"], poprawna: 0, wyjasnienie: "be good at – utrwalone." },
    { q: "She's interested ______ art.", opcje: ["on", "at", "in", "of"], poprawna: 2, wyjasnienie: "be interested in." },
    { q: "He's afraid ______ flying.", opcje: ["of", "for", "from", "with"], poprawna: 0, wyjasnienie: "be afraid of." },
    { q: "I apologise ______ being late.", opcje: ["of", "for", "on", "at"], poprawna: 1, wyjasnienie: "apologise for – utrwalone." },
    { q: "They complained ______ the food.", opcje: ["of", "on", "about", "with"], poprawna: 2, wyjasnienie: "complain about." },
    { q: "I agree ______ you.", opcje: ["with", "on", "at", "of"], poprawna: 0, wyjasnienie: "agree with sb." },
    { q: "In my ______, it's a bad idea.", opcje: ["opinion", "opinions", "think", "view"], poprawna: 0, wyjasnienie: "in my opinion – utrwalone." },
    { q: "I did it ______ purpose.", opcje: ["on", "in", "by", "at"], poprawna: 0, wyjasnienie: "on purpose = celowo." }
  ]
};

/* ============================================================
   G12B1 – Stopniowanie – B1 (rozszerzenie)
============================================================ */
window.LESSON_DATA["G12B1"] = {
  tytul: "Stopniowanie i porównania – rozszerzenie",
  poziom: "B1",
  dzial: "G12",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My sister and I are quite similar, but she is definitely more talkative than me. She is also more organised – her room is always much tidier than mine. When we were younger, she was a bit taller than me, but now we are exactly the same height. My brother is the tallest in the family – he's almost 1.95 metres. I think the most important thing in a family is respect. Money is much less important than health. My parents always say: "The more you learn, the more you understand the world."
    </p>

    <h3>Stopniowanie – przypomnienie</h3>
    <table>
      <tr><th>Stopień równy</th><th>Wyższy</th><th>Najwyższy</th></tr>
      <tr><td class="en">tall</td><td class="en">taller</td><td class="en">the tallest</td></tr>
      <tr><td class="en">big</td><td class="en">bigger</td><td class="en">the biggest</td></tr>
      <tr><td class="en">happy</td><td class="en">happier</td><td class="en">the happiest</td></tr>
      <tr><td class="en">expensive</td><td class="en">more expensive</td><td class="en">the most expensive</td></tr>
      <tr><td class="en">good</td><td class="en">better</td><td class="en">the best</td></tr>
      <tr><td class="en">bad</td><td class="en">worse</td><td class="en">the worst</td></tr>
      <tr><td class="en">far</td><td class="en">further / farther</td><td class="en">the furthest / farthest</td></tr>
    </table>

    <h3>Konstrukcje porównawcze</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en">as ... as</td><td>tak ... jak</td><td class="en">I'm as tall as my father.</td></tr>
      <tr><td class="en">not as ... as</td><td>nie tak ... jak</td><td class="en">She isn't as tall as me.</td></tr>
      <tr><td class="en">... than</td><td>... niż</td><td class="en">He's taller than me.</td></tr>
      <tr><td class="en">the ... in / of</td><td>naj ... w / z</td><td class="en">He's the best in the class.</td></tr>
      <tr><td class="en">the same as</td><td>taki sam jak</td><td class="en">My bag is the same as yours.</td></tr>
      <tr><td class="en">similar to</td><td>podobny do</td><td class="en">This is similar to that one.</td></tr>
      <tr><td class="en">different from</td><td>inny niż</td><td class="en">This is different from that.</td></tr>
    </table>

    <h3>Wzmacnianie porównań</h3>
    <table>
      <tr><td class="en"><b>much / far</b> + stopień wyższy</td><td class="en">much taller, far better</td></tr>
      <tr><td class="en"><b>a lot</b> + stopień wyższy</td><td class="en">a lot more interesting</td></tr>
      <tr><td class="en"><b>a bit / a little</b> + stopień wyższy</td><td class="en">a bit taller, a little more expensive</td></tr>
      <tr><td class="en"><b>slightly</b> + stopień wyższy</td><td class="en">slightly bigger</td></tr>
      <tr><td class="en"><b>no</b> + stopień wyższy</td><td class="en">no better, no worse</td></tr>
    </table>

    <h3>The more... the more...</h3>
    <p>Podwójne porównanie – gdy jedna rzecz rośnie, druga też:</p>
    <table>
      <tr><td class="en">The more you practise, the better you get.</td></tr>
      <tr><td class="en">The earlier you start, the sooner you finish.</td></tr>
      <tr><td class="en">The more expensive the hotel, the better the service.</td></tr>
    </table>

    <h3>Zbyt / wystarczająco</h3>
    <table>
      <tr><td class="en">too + przymiotnik</td><td class="en">too expensive (za drogi)</td></tr>
      <tr><td class="en">przymiotnik + enough</td><td class="en">old enough (dość stary)</td></tr>
      <tr><td class="en">enough + rzeczownik</td><td class="en">enough money (dość pieniędzy)</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> "niż" = <b>than</b> (nie "then"!).<br>
      <span class="en">The more you learn, the more you earn.</span> – klasyczne powiedzenie.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Utwórz stopnie" },
    { type: "gap", text: '<span class="en">happy → ________ → ________</span>', answers: ["happier, happiest"] },
    { type: "gap", text: '<span class="en">expensive → ________ → ________</span>', answers: ["more expensive, most expensive"] },
    { type: "gap", text: '<span class="en">good → ________ → ________</span>', answers: ["better, best"] },
    { type: "gap", text: '<span class="en">far → ________ → ________</span>', answers: ["further, furthest", "farther, farthest"] },
    { type: "header", text: "B. Wstaw w zdanie" },
    { type: "gap", text: '<span class="en">She\'s much ________ (tall) than me.</span>', answers: ["taller"] },
    { type: "gap", text: '<span class="en">This is ________ (expensive) restaurant in town.</span>', answers: ["the most expensive"] },
    { type: "gap", text: '<span class="en">He is ________ (good) student in the class.</span>', answers: ["the best"] },
    { type: "gap", text: '<span class="en">My sister is a bit ________ (organised) than me.</span>', answers: ["more organised", "more organized"] },
    { type: "gap", text: '<span class="en">This exam was ________ (easy) than the last one.</span>', answers: ["easier"] },
    { type: "header", text: "C. Konstrukcje porównawcze" },
    { type: "gap", text: '<span class="en">I\'m not ________ tall ________ my brother.</span>', answers: ["as as", "as, as"] },
    { type: "gap", text: '<span class="en">My bag is the same ________ yours.</span>', answers: ["as"] },
    { type: "gap", text: '<span class="en">This is very similar ________ that one.</span>', answers: ["to"] },
    { type: "gap", text: '<span class="en">This is different ________ what I expected.</span>', answers: ["from", "to"] },
    { type: "header", text: "D. The more... the more..." },
    { type: "gap", text: '<span class="en">The more you practise, the ________ you get. (dobry)</span>', answers: ["better"] },
    { type: "gap", text: '<span class="en">The earlier you start, the ________ you finish. (szybko)</span>', answers: ["sooner"] },
    { type: "gap", text: '<span class="en">The ________ you learn, the more you understand. (dużo)</span>', answers: ["more"] },
    { type: "header", text: "E. Too / Enough" },
    { type: "gap", text: '<span class="en">This jacket is ________ expensive for me. (za)</span>', answers: ["too"] },
    { type: "gap", text: '<span class="en">She is old ________ to drive. (dość)</span>', answers: ["enough"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ money. (dość)</span>', answers: ["enough"] },
    { type: "gap", text: '<span class="en">It\'s ________ cold to go outside. (za)</span>', answers: ["too"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">She is taller then me. → ________</span>', answers: ["she is taller than me", "she is taller than me."], wide: true },
    { type: "gap", text: '<span class="en">He is the goodest student. → ________</span>', answers: ["he is the best student", "he is the best student."], wide: true },
    { type: "gap", text: '<span class="en">This is more cheaper. → ________</span>', answers: ["this is cheaper", "this is cheaper."], wide: true },
    { type: "gap", text: '<span class="en">I\'m gooder at maths than her. → ________</span>', answers: ["i'm better at maths than her", "i'm better at maths than her.", "i am better at maths than her", "i am better at maths than her."], wide: true },
    { type: "header", text: "G. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Jestem tak samo wysoki jak mój ojciec.</span>', answers: ["i am as tall as my father", "i am as tall as my father.", "i'm as tall as my father", "i'm as tall as my father."], wide: true },
    { type: "gap", text: '<span class="pl">To jest o wiele lepsze.</span>', answers: ["this is much better", "this is much better.", "it is much better", "it's much better."], wide: true },
    { type: "gap", text: '<span class="pl">Im więcej ćwiczysz, tym lepszy jesteś.</span>', answers: ["the more you practise the better you get", "the more you practise, the better you get", "the more you practice the better you get", "the more you practice, the better you get"], wide: true },
    { type: "gap", text: '<span class="pl">Ona jest starsza ode mnie.</span>', answers: ["she is older than me", "she is older than me.", "she's older than me", "she's older than me."], wide: true },
    { type: "gap", text: '<span class="pl">On jest moim najlepszym przyjacielem.</span>', answers: ["he is my best friend", "he is my best friend.", "he's my best friend", "he's my best friend."], wide: true },
    { type: "header", text: "H. Napisz" },
    { type: "open", text: "Porównaj siebie z innymi ludźmi – rodziną, znajomymi. Użyj różnych konstrukcji (as... as, than, the most, the more... the more).", placeholder: "np. My sister is more... than me. I'm as... as... The more..." }
  ],
  test: [
    { q: "She's much ______ than me.", opcje: ["taller", "more tall", "the tallest", "tall"], poprawna: 0, wyjasnienie: "much + stopień wyższy krótkiego przymiotnika." },
    { q: "He is ______ student in the class.", opcje: ["the best", "better", "the goodest", "more good"], poprawna: 0, wyjasnienie: "good → the best – nieregularny." },
    { q: "This is ______ restaurant in town.", opcje: ["the most expensive", "more expensive", "the expensivest", "expensive"], poprawna: 0, wyjasnienie: "the most + długi przymiotnik." },
    { q: "I'm ______ tall ______ my father.", opcje: ["as / as", "so / as", "as / like", "so / like"], poprawna: 0, wyjasnienie: "as... as – konstrukcja równa." },
    { q: "My bag is the same ______ yours.", opcje: ["as", "like", "than", "to"], poprawna: 0, wyjasnienie: "the same as – utrwalone." },
    { q: "This is different ______ what I expected.", opcje: ["from", "of", "than", "as"], poprawna: 0, wyjasnienie: "different from (GB) / than (US)." },
    { q: "The more you practise, the ______ you get.", opcje: ["better", "good", "best", "well"], poprawna: 0, wyjasnienie: "the more... the better – utrwalone." },
    { q: "This jacket is ______ expensive for me.", opcje: ["too", "enough", "very", "much"], poprawna: 0, wyjasnienie: "too + przymiotnik = za." },
    { q: "She is old ______ to drive.", opcje: ["enough", "too", "very", "much"], poprawna: 0, wyjasnienie: "przymiotnik + enough." },
    { q: "Which is correct?", opcje: ["She is taller then me.", "She is taller than me.", "She is more tall than me.", "She is tallest than me."], poprawna: 1, wyjasnienie: "niż = than, krótkie → -er." }
  ]
};


/* ============================================================
   G13B1 – Bezokolicznik i -ing – B1
============================================================ */
window.LESSON_DATA["G13B1"] = {
  tytul: "Bezokolicznik i -ing – B1",
  poziom: "B1",
  dzial: "G13",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I've decided to learn a new language this year. I'm thinking of starting Spanish. I enjoy learning languages, but I hate memorising vocabulary. My friend suggested joining an online course, and I agreed to try it. I'm looking forward to starting next week. I hope to become fluent in a few years. I also need to practise speaking every day, so I'm planning to find a language partner. I'm quite good at reading, but I struggle with listening. Anyway, I've promised myself not to give up.
    </p>

    <h3>Trzy grupy – przypomnienie</h3>
    <table>
      <tr><th>Grupa 1: + to + bezokolicznik</th><th>Grupa 2: + -ing</th><th>Grupa 3: oba (bez zmiany)</th></tr>
      <tr>
        <td class="en">want, need, decide, hope, plan, promise, agree, refuse, offer, learn, manage, fail</td>
        <td class="en">enjoy, finish, mind, avoid, suggest, keep, practise, admit, deny, imagine</td>
        <td class="en">like, love, hate, prefer, begin, start, continue</td>
      </tr>
    </table>

    <h3>Różnice znaczenia</h3>
    <table>
      <tr><th>Bezokolicznik (to do)</th><th>-ing (doing)</th></tr>
      <tr>
        <td class="en"><b>stop to smoke</b> = zatrzymać się, żeby zapalić</td>
        <td class="en"><b>stop smoking</b> = rzucić palenie</td>
      </tr>
      <tr>
        <td class="en"><b>remember to do</b> = pamiętać, żeby zrobić</td>
        <td class="en"><b>remember doing</b> = pamiętać, że się zrobiło</td>
      </tr>
      <tr>
        <td class="en"><b>forget to do</b> = zapomnieć coś zrobić</td>
        <td class="en"><b>forget doing</b> = zapomnieć, że się zrobiło</td>
      </tr>
      <tr>
        <td class="en"><b>try to do</b> = próbować coś zrobić</td>
        <td class="en"><b>try doing</b> = spróbować (eksperyment)</td>
      </tr>
    </table>

    <h3>Po przyimkach zawsze -ing</h3>
    <table>
      <tr><td class="en">good at / bad at</td><td class="en">I'm good at drawing.</td></tr>
      <tr><td class="en">interested in</td><td class="en">I'm interested in learning.</td></tr>
      <tr><td class="en">think of / about</td><td class="en">I'm thinking of moving.</td></tr>
      <tr><td class="en">look forward to</td><td class="en">I look forward to seeing you.</td></tr>
      <tr><td class="en">before / after</td><td class="en">After finishing work, I went home.</td></tr>
      <tr><td class="en">afraid of / tired of</td><td class="en">I'm tired of waiting.</td></tr>
      <tr><td class="en">instead of</td><td class="en">Instead of watching TV, let's go out.</td></tr>
      <tr><td class="en">succeed in</td><td class="en">She succeeded in passing the exam.</td></tr>
    </table>

    <h3>Konstrukcje z dopełnieniem</h3>
    <table>
      <tr><td class="en">want sb to do</td><td class="en">I want you to help me.</td></tr>
      <tr><td class="en">ask sb to do</td><td class="en">She asked me to wait.</td></tr>
      <tr><td class="en">tell sb to do</td><td class="en">He told me to leave.</td></tr>
      <tr><td class="en">advise sb to do</td><td class="en">I advise you to rest.</td></tr>
      <tr><td class="en">let sb do (bez to)</td><td class="en">Let me help you.</td></tr>
      <tr><td class="en">make sb do (bez to)</td><td class="en">He made me wait.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>make / let</b> + bez "to": <span class="en">He made me go. Let me help.</span><br>
      Ale w passive: <span class="en">I was made to wait.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. To czy -ing?" },
    { type: "gap", text: '<span class="en">I\'ve decided ________ (learn) Spanish.</span>', answers: ["to learn"] },
    { type: "gap", text: '<span class="en">I enjoy ________ (learn) languages.</span>', answers: ["learning"] },
    { type: "gap", text: '<span class="en">I hate ________ (memorise) vocabulary.</span>', answers: ["memorising", "memorizing"] },
    { type: "gap", text: '<span class="en">My friend suggested ________ (join) a course.</span>', answers: ["joining"] },
    { type: "gap", text: '<span class="en">I agreed ________ (try) it.</span>', answers: ["to try"] },
    { type: "gap", text: '<span class="en">I\'m looking forward to ________ (start) next week.</span>', answers: ["starting"] },
    { type: "gap", text: '<span class="en">I hope ________ (become) fluent.</span>', answers: ["to become"] },
    { type: "gap", text: '<span class="en">I need ________ (practise) speaking.</span>', answers: ["to practise", "to practice"] },
    { type: "gap", text: '<span class="en">I\'m planning ________ (find) a language partner.</span>', answers: ["to find"] },
    { type: "gap", text: '<span class="en">I\'ve promised myself not ________ (give up).</span>', answers: ["to give up"] },
    { type: "header", text: "B. Po przyimkach zawsze -ing" },
    { type: "gap", text: '<span class="en">I\'m good at ________ (read).</span>', answers: ["reading"] },
    { type: "gap", text: '<span class="en">I\'m interested in ________ (learn) new things.</span>', answers: ["learning"] },
    { type: "gap", text: '<span class="en">I\'m thinking of ________ (move).</span>', answers: ["moving"] },
    { type: "gap", text: '<span class="en">After ________ (finish) work, I went home.</span>', answers: ["finishing"] },
    { type: "gap", text: '<span class="en">I\'m tired of ________ (wait).</span>', answers: ["waiting"] },
    { type: "gap", text: '<span class="en">Instead of ________ (watch) TV, let\'s go out.</span>', answers: ["watching"] },
    { type: "gap", text: '<span class="en">She succeeded in ________ (pass) the exam.</span>', answers: ["passing"] },
    { type: "header", text: "C. Różnice znaczenia" },
    { type: "gap", text: '<span class="en">He stopped ________ (smoke). (rzucił palenie)</span>', answers: ["smoking"] },
    { type: "gap", text: '<span class="en">He stopped ________ (smoke). (zatrzymał się, żeby zapalić)</span>', answers: ["to smoke"] },
    { type: "gap", text: '<span class="en">Remember ________ (lock) the door! (nie zapomnij)</span>', answers: ["to lock"] },
    { type: "gap", text: '<span class="en">I remember ________ (lock) the door. (pamiętam, że to zrobiłem)</span>', answers: ["locking"] },
    { type: "header", text: "D. Konstrukcje z dopełnieniem" },
    { type: "gap", text: '<span class="en">I want you ________ (help) me.</span>', answers: ["to help"] },
    { type: "gap", text: '<span class="en">She asked me ________ (wait).</span>', answers: ["to wait"] },
    { type: "gap", text: '<span class="en">He told me ________ (leave).</span>', answers: ["to leave"] },
    { type: "gap", text: '<span class="en">Let me ________ (help) you. (bez to)</span>', answers: ["help"] },
    { type: "gap", text: '<span class="en">He made me ________ (wait). (bez to)</span>', answers: ["wait"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">I want going home. → ________</span>', answers: ["i want to go home", "i want to go home."], wide: true },
    { type: "gap", text: '<span class="en">She suggested to go out. → ________</span>', answers: ["she suggested going out", "she suggested going out."], wide: true },
    { type: "gap", text: '<span class="en">I\'m interested to learn English. → ________</span>', answers: ["i'm interested in learning english", "i'm interested in learning english.", "i am interested in learning english", "i am interested in learning english."], wide: true },
    { type: "gap", text: '<span class="en">He made me to wait. → ________</span>', answers: ["he made me wait", "he made me wait."], wide: true },
    { type: "gap", text: '<span class="en">I look forward to see you. → ________</span>', answers: ["i look forward to seeing you", "i look forward to seeing you."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zdecydowałem się nauczyć hiszpańskiego.</span>', answers: ["i decided to learn spanish", "i decided to learn spanish.", "i've decided to learn spanish", "i've decided to learn spanish."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię uczyć się języków.</span>', answers: ["i enjoy learning languages", "i enjoy learning languages.", "i like learning languages", "i like learning languages."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogę się doczekać spotkania z tobą.</span>', answers: ["i'm looking forward to seeing you", "i'm looking forward to seeing you.", "i am looking forward to seeing you", "i am looking forward to seeing you."], wide: true },
    { type: "gap", text: '<span class="pl">Zasugerował, żebyśmy poszli do kina.</span>', answers: ["he suggested going to the cinema", "he suggested going to the cinema."], wide: true },
    { type: "gap", text: '<span class="pl">Chcę, żebyś mi pomógł.</span>', answers: ["i want you to help me", "i want you to help me."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Napisz o swoich planach na najbliższy rok – czego chcesz się nauczyć, co zamierzasz robić, na co czekasz z niecierpliwością.", placeholder: "np. This year I've decided to... I'm thinking of... I'm looking forward to..." }
  ],
  test: [
    { q: "I want ______ home.", opcje: ["to go", "going", "go", "to going"], poprawna: 0, wyjasnienie: "want + to + bezokolicznik." },
    { q: "She enjoys ______.", opcje: ["reading", "to read", "read", "reads"], poprawna: 0, wyjasnienie: "enjoy + -ing." },
    { q: "I'm interested ______ learning languages.", opcje: ["in", "on", "at", "of"], poprawna: 0, wyjasnienie: "interested in + -ing." },
    { q: "I'm looking forward ______ you.", opcje: ["to seeing", "to see", "seeing", "see"], poprawna: 0, wyjasnienie: "look forward to + -ing." },
    { q: "He ______ smoking last year.", opcje: ["stopped", "stop", "stopping", "stops"], poprawna: 0, wyjasnienie: "stop + -ing = rzucić coś." },
    { q: "Remember ______ the door!", opcje: ["to lock", "locking", "lock", "locked"], poprawna: 0, wyjasnienie: "remember to do = nie zapomnij zrobić." },
    { q: "He made me ______.", opcje: ["wait", "to wait", "waiting", "waited"], poprawna: 0, wyjasnienie: "make sb do – bez 'to'." },
    { q: "Let me ______ you.", opcje: ["help", "to help", "helping", "helped"], poprawna: 0, wyjasnienie: "let sb do – bez 'to'." },
    { q: "She suggested ______ out.", opcje: ["going", "to go", "go", "went"], poprawna: 0, wyjasnienie: "suggest + -ing." },
    { q: "I decided ______ medicine.", opcje: ["to study", "studying", "study", "studied"], poprawna: 0, wyjasnienie: "decide + to." }
  ]
};

/* ============================================================
   G14B1 – Zdania przydawkowe – defining / non-defining
============================================================ */
window.LESSON_DATA["G14B1"] = {
  tytul: "Zdania przydawkowe – defining i non-defining",
  poziom: "B1",
  dzial: "G14",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My best friend, who lives in Kraków, is coming to visit me next week. She works for a company which designs computer games. The company, which was founded in 2010, is one of the biggest in Poland. My friend, whose parents are both teachers, is very ambitious. She has a small flat, where she lives with her cat. She has a job that she really loves. Her boss, who is quite demanding, expects a lot from her, but she doesn't mind.
    </p>

    <h3>Defining relative clauses – bez przecinków</h3>
    <p>Określają <b>które</b> rzeczy/osoby dokładnie mamy na myśli. <b>Nie da się</b> ich usunąć bez zmiany znaczenia.</p>
    <table>
      <tr><td class="en">The man <b>who lives next door</b> is my uncle.</td></tr>
      <tr><td class="en">The book <b>that I bought</b> is interesting.</td></tr>
    </table>
    <p>Zaimek można pominąć, gdy jest dopełnieniem:</p>
    <table>
      <tr><td class="en">The book (that) I bought is interesting. ✅</td></tr>
      <tr><td class="en">The man who lives next door... (nie można pominąć – podmiot)</td></tr>
    </table>

    <h3>Non-defining relative clauses – z przecinkami</h3>
    <p>Dodają <b>dodatkową informację</b>. Można je usunąć bez zmiany głównego znaczenia.</p>
    <table>
      <tr><td class="en">My sister, <b>who lives in London</b>, is a doctor.</td></tr>
      <tr><td class="en">This book, <b>which I bought yesterday</b>, is great.</td></tr>
    </table>
    <p><b>W non-defining:</b></p>
    <ul>
      <li>ZAWSZE przecinki</li>
      <li><b>NIE używamy "that"</b> – tylko who / which</li>
      <li><b>NIE można pominąć</b> zaimka</li>
    </ul>

    <h3>Zaimki względne</h3>
    <table>
      <tr><th>Zaimek</th><th>Defining</th><th>Non-defining</th></tr>
      <tr><td class="en">who</td><td>osoby</td><td>osoby</td></tr>
      <tr><td class="en">which</td><td>rzeczy</td><td>rzeczy</td></tr>
      <tr><td class="en">that</td><td>osoby i rzeczy ✅</td><td>❌ (nie używamy)</td></tr>
      <tr><td class="en">where</td><td>miejsca</td><td>miejsca</td></tr>
      <tr><td class="en">when</td><td>czas</td><td>czas</td></tr>
      <tr><td class="en">whose</td><td>czyj</td><td>czyj</td></tr>
    </table>

    <h3>Przykłady</h3>
    <table>
      <tr><th>Defining</th><th>Non-defining</th></tr>
      <tr>
        <td class="en">The woman <b>who called you</b> is my aunt.</td>
        <td class="en">My aunt, <b>who called you</b>, is a teacher.</td>
      </tr>
      <tr>
        <td class="en">The car <b>that I want</b> is red.</td>
        <td class="en">My new car, <b>which I bought last week</b>, is red.</td>
      </tr>
    </table>

    <h3>Whose</h3>
    <table>
      <tr><td class="en">That's the boy <b>whose</b> mother is a teacher.</td></tr>
      <tr><td class="en">I met a girl <b>whose</b> father works in Hollywood.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>that</b> NIE występuje w non-defining relative clauses.<br>
      ✅ <span class="en">My car, which I bought last year, is fast.</span><br>
      ❌ <span class="en">My car, that I bought last year, is fast.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Defining czy non-defining?" },
    { type: "gap", text: '<span class="en">The man ________ lives next door is my uncle.</span>', answers: ["who", "that"] },
    { type: "gap", text: '<span class="en">My sister, ________ lives in London, is a doctor.</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">The book ________ I bought is interesting.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">This book, ________ I bought yesterday, is great.</span>', answers: ["which"] },
    { type: "gap", text: '<span class="en">The house ________ we live is old.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">My house, ________ is quite old, needs renovation.</span>', answers: ["which"] },
    { type: "header", text: "B. Wstaw odpowiedni zaimek" },
    { type: "gap", text: '<span class="en">That\'s the boy ________ mother is a teacher.</span>', answers: ["whose"] },
    { type: "gap", text: '<span class="en">I know a man ________ speaks five languages.</span>', answers: ["who", "that"] },
    { type: "gap", text: '<span class="en">This is the café ________ we met.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">I remember the day ________ we first met.</span>', answers: ["when", "that"] },
    { type: "gap", text: '<span class="en">The film ________ we watched was great.</span>', answers: ["which", "that"] },
    { type: "header", text: "C. Połącz zdania" },
    { type: "gap", text: '<span class="en">I have a dog. It barks a lot. → I have a dog ________ barks a lot.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">I know a girl. Her father is famous. → I know a girl ________ father is famous.</span>', answers: ["whose"] },
    { type: "gap", text: '<span class="en">That\'s the restaurant. We ate there. → That\'s the restaurant ________ we ate.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">This is the day. I was born then. → This is the day ________ I was born.</span>', answers: ["when", "that"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">My car, that I bought last year, is fast. → ________</span>', answers: ["my car which i bought last year is fast", "my car, which i bought last year, is fast", "my car, which i bought last year, is fast."], wide: true },
    { type: "gap", text: '<span class="en">The man which lives here is old. → ________</span>', answers: ["the man who lives here is old", "the man who lives here is old.", "the man that lives here is old", "the man that lives here is old."], wide: true },
    { type: "gap", text: '<span class="en">The book who I bought is good. → ________</span>', answers: ["the book which i bought is good", "the book which i bought is good.", "the book that i bought is good", "the book that i bought is good."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Moja siostra, która mieszka w Londynie, jest lekarką.</span>', answers: ["my sister who lives in london is a doctor", "my sister, who lives in london, is a doctor", "my sister, who lives in london, is a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">To jest chłopiec, którego ojciec jest nauczycielem.</span>', answers: ["this is the boy whose father is a teacher", "this is the boy whose father is a teacher."], wide: true },
    { type: "gap", text: '<span class="pl">To kawiarnia, w której się poznaliśmy.</span>', answers: ["this is the café where we met", "this is the café where we met.", "this is the cafe where we met", "this is the cafe where we met."], wide: true },
    { type: "gap", text: '<span class="pl">Książka, którą kupiłem, jest bardzo ciekawa.</span>', answers: ["the book which i bought is very interesting", "the book which i bought is very interesting.", "the book that i bought is very interesting", "the book that i bought is very interesting."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz 3 osoby i 2 miejsca, używając defining i non-defining relative clauses.", placeholder: "np. My friend, who is a doctor, lives in... The place where I grew up is..." }
  ],
  test: [
    { q: "The man ______ lives next door is my uncle.", opcje: ["who", "which", "whose", "where"], poprawna: 0, wyjasnienie: "Osoba → who." },
    { q: "My sister, ______ lives in London, is a doctor.", opcje: ["who", "that", "which", "what"], poprawna: 0, wyjasnienie: "Non-defining – nie używamy 'that'." },
    { q: "The book ______ I bought is interesting.", opcje: ["who", "which", "whose", "where"], poprawna: 1, wyjasnienie: "Rzecz → which / that." },
    { q: "That's the boy ______ mother is a teacher.", opcje: ["who", "which", "whose", "that"], poprawna: 2, wyjasnienie: "Czyj → whose." },
    { q: "The house ______ we live is old.", opcje: ["who", "which", "where", "that"], poprawna: 2, wyjasnienie: "Miejsce → where." },
    { q: "Which is correct?", opcje: ["My car, that I bought, is fast.", "My car, which I bought, is fast.", "My car which I bought, is fast.", "My car, who I bought, is fast."], poprawna: 1, wyjasnienie: "Non-defining: which, przecinki." },
    { q: "This is the day ______ we first met.", opcje: ["where", "which", "when", "who"], poprawna: 2, wyjasnienie: "Czas → when." },
    { q: "I know a girl ______ father is famous.", opcje: ["who", "which", "whose", "that"], poprawna: 2, wyjasnienie: "Czyj → whose." },
    { q: "The film ______ we watched was great.", opcje: ["who", "which", "whose", "where"], poprawna: 1, wyjasnienie: "Rzecz → which / that." },
    { q: "This is the café ______ we met.", opcje: ["who", "which", "where", "that"], poprawna: 2, wyjasnienie: "Miejsce → where." }
  ]
};

/* ============================================================
   G15B1 – Pytania – rozszerzenie B1
============================================================ */
window.LESSON_DATA["G15B1"] = {
  tytul: "Pytania – rozszerzenie",
  poziom: "B1",
  dzial: "G15",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      You're coming to the party, aren't you? Oh, you don't like big parties, do you? Well, what kind of parties do you like then? Could you tell me what time the party starts? I'm not sure if I can come, but I'll let you know. Do you know where Anna lives? I think she moved recently. By the way, how long have you known her? And what do you think of her new boyfriend? It's not really my business, is it?
    </p>

    <h3>Question tags – powtórzenie i rozszerzenie</h3>
    <table>
      <tr><th>Zdanie</th><th>Question tag</th></tr>
      <tr><td class="en">You're Polish,</td><td class="en">aren't you?</td></tr>
      <tr><td class="en">She works here,</td><td class="en">doesn't she?</td></tr>
      <tr><td class="en">They went home,</td><td class="en">didn't they?</td></tr>
      <tr><td class="en">You don't smoke,</td><td class="en">do you?</td></tr>
      <tr><td class="en">She isn't late,</td><td class="en">is she?</td></tr>
      <tr><td class="en">Let's go,</td><td class="en">shall we?</td></tr>
      <tr><td class="en">I'm right,</td><td class="en">aren't I?</td></tr>
      <tr><td class="en">Nobody called,</td><td class="en">did they?</td></tr>
      <tr><td class="en">Nothing happened,</td><td class="en">did it?</td></tr>
    </table>

    <h3>Indirect questions – rozszerzenie</h3>
    <p>Uprzejme pytania. Bez inwersji.</p>
    <table>
      <tr><th>Bezpośrednie</th><th>Pośrednie</th></tr>
      <tr><td class="en">Where is the station?</td><td class="en">Could you tell me where the station is?</td></tr>
      <tr><td class="en">What time does it start?</td><td class="en">Do you know what time it starts?</td></tr>
      <tr><td class="en">How much does it cost?</td><td class="en">Could you tell me how much it costs?</td></tr>
      <tr><td class="en">Is she coming?</td><td class="en">Do you know if she's coming?</td></tr>
      <tr><td class="en">Did he call?</td><td class="en">I wonder if he called.</td></tr>
    </table>
    <p><b>Zwroty wprowadzające:</b></p>
    <ul>
      <li><span class="en">Could you tell me...?</span></li>
      <li><span class="en">Do you know...?</span></li>
      <li><span class="en">I wonder...</span></li>
      <li><span class="en">Do you mind telling me...?</span></li>
      <li><span class="en">Have you any idea...?</span></li>
    </ul>

    <h3>Pytania o podmiot i dopełnienie</h3>
    <table>
      <tr><th>Pytanie o podmiot (bez do)</th><th>Pytanie o dopełnienie (z do)</th></tr>
      <tr>
        <td class="en">Who called you?<br><span class="pl">(kto – podmiot)</span></td>
        <td class="en">Who did you call?<br><span class="pl">(kogo – dopełnienie)</span></td>
      </tr>
      <tr>
        <td class="en">What happened?</td>
        <td class="en">What did you do?</td>
      </tr>
      <tr>
        <td class="en">Who wants coffee?</td>
        <td class="en">Who do you want to invite?</td>
      </tr>
    </table>

    <h3>Negative questions</h3>
    <p>Pytania przeczące – często wyrażają zdziwienie lub oczekują potwierdzenia:</p>
    <table>
      <tr><td class="en">Don't you like coffee?</td><td class="pl">Nie lubisz kawy?</td></tr>
      <tr><td class="en">Didn't you know?</td><td class="pl">Nie wiedziałeś?</td></tr>
      <tr><td class="en">Why don't we go out?</td><td class="pl">Może wyjdziemy?</td></tr>
      <tr><td class="en">Wouldn't it be nice?</td><td class="pl">Czyż nie byłoby miło?</td></tr>
    </table>

    <h3>Question words + ever</h3>
    <table>
      <tr><td class="en">Whatever</td><td class="pl">cokolwiek</td></tr>
      <tr><td class="en">Whenever</td><td class="pl">kiedykolwiek</td></tr>
      <tr><td class="en">Wherever</td><td class="pl">gdziekolwiek</td></tr>
      <tr><td class="en">Whoever</td><td class="pl">ktokolwiek</td></tr>
      <tr><td class="en">However</td><td class="pl">jakkolwiek / jednak</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>What... like?</b> vs <b>How...?</b><br>
      <span class="en">What is she like?</span> = Jaka jest? (charakter)<br>
      <span class="en">What does she look like?</span> = Jak wygląda?<br>
      <span class="en">How is she?</span> = Jak się czuje?
    </div>
  `,
  karta: [
    { type: "header", text: "A. Question tags" },
    { type: "gap", text: '<span class="en">You\'re Polish, ________?</span>', answers: ["aren\'t you", "are not you"] },
    { type: "gap", text: '<span class="en">She works here, ________?</span>', answers: ["doesn\'t she", "does not she"] },
    { type: "gap", text: '<span class="en">You don\'t smoke, ________?</span>', answers: ["do you"] },
    { type: "gap", text: '<span class="en">They went home, ________?</span>', answers: ["didn\'t they"] },
    { type: "gap", text: '<span class="en">Let\'s go, ________?</span>', answers: ["shall we"] },
    { type: "gap", text: '<span class="en">I\'m right, ________?</span>', answers: ["aren\'t I"] },
    { type: "gap", text: '<span class="en">Nobody called, ________?</span>', answers: ["did they"] },
    { type: "header", text: "B. Indirect questions" },
    { type: "gap", text: '<span class="en">Where is the station? → Could you tell me where ________?</span>', answers: ["the station is"], wide: true },
    { type: "gap", text: '<span class="en">What time does it start? → Do you know what time ________?</span>', answers: ["it starts"], wide: true },
    { type: "gap", text: '<span class="en">How much does it cost? → Could you tell me how much ________?</span>', answers: ["it costs"], wide: true },
    { type: "gap", text: '<span class="en">Is she coming? → Do you know ________ she\'s coming?</span>', answers: ["if", "whether"], wide: true },
    { type: "gap", text: '<span class="en">Did he call? → I wonder ________ he called.</span>', answers: ["if", "whether"], wide: true },
    { type: "header", text: "C. Pytania o podmiot czy dopełnienie?" },
    { type: "gap", text: '<span class="en">Kto dzwonił? → ________ called?</span>', answers: ["who"] },
    { type: "gap", text: '<span class="en">Do kogo dzwoniłeś? → Who ________ you call?</span>', answers: ["did"] },
    { type: "gap", text: '<span class="en">Co się stało? → What ________?</span>', answers: ["happened"] },
    { type: "gap", text: '<span class="en">Co zrobiłeś? → What ________ you do?</span>', answers: ["did"] },
    { type: "header", text: "D. Negative questions" },
    { type: "gap", text: '<span class="en">________ you like coffee? (Nie lubisz kawy?)</span>', answers: ["don\'t", "do not"] },
    { type: "gap", text: '<span class="en">________ you know? (Nie wiedziałeś?)</span>', answers: ["didn\'t", "did not"] },
    { type: "gap", text: '<span class="en">Why ________ we go out? (Może wyjdziemy?)</span>', answers: ["don\'t", "do not"] },
    { type: "header", text: "E. What... like vs How" },
    { type: "gap", text: '<span class="en">________ is she like? (Jaka jest z charakteru?)</span>', answers: ["what"] },
    { type: "gap", text: '<span class="en">________ does she look like? (Jak wygląda?)</span>', answers: ["what"] },
    { type: "gap", text: '<span class="en">________ is she? (Jak się czuje?)</span>', answers: ["how"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">Do you know where is the station? → ________</span>', answers: ["do you know where the station is", "do you know where the station is?"], wide: true },
    { type: "gap", text: '<span class="en">Where you live? → ________</span>', answers: ["where do you live", "where do you live?"], wide: true },
    { type: "gap", text: '<span class="en">Who did called you? → ________</span>', answers: ["who called you", "who called you?"], wide: true },
    { type: "header", text: "G. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Czy możesz mi powiedzieć, gdzie jest dworzec?</span>', answers: ["could you tell me where the station is", "could you tell me where the station is?", "can you tell me where the station is", "can you tell me where the station is?"], wide: true },
    { type: "gap", text: '<span class="pl">Nie wiem, czy ona przyjdzie.</span>', answers: ["i don't know if she's coming", "i don't know if she's coming.", "i don't know if she is coming", "i don't know whether she is coming"], wide: true },
    { type: "gap", text: '<span class="pl">Jesteś Polakiem, prawda?</span>', answers: ["you are polish aren't you", "you are polish, aren't you", "you are polish, aren't you?", "you're polish aren't you"], wide: true },
    { type: "gap", text: '<span class="pl">Jaka ona jest?</span>', answers: ["what is she like", "what is she like?", "what's she like", "what's she like?"], wide: true },
    { type: "gap", text: '<span class="pl">Jak ona się czuje?</span>', answers: ["how is she", "how is she?", "how's she", "how's she?"], wide: true },
    { type: "header", text: "H. Napisz" },
    { type: "open", text: "Napisz 5 uprzejmych pytań po angielsku (np. pytasz o drogę, o czas, o opinię).", placeholder: "np. Could you tell me... Do you know if... I wonder..." }
  ],
  test: [
    { q: "You're Polish, ______?", opcje: ["aren't you", "are you", "don't you", "isn't it"], poprawna: 0, wyjasnienie: "Twierdzenie → przeczenie: aren't you." },
    { q: "Let's go, ______?", opcje: ["will we", "shall we", "do we", "don't we"], poprawna: 1, wyjasnienie: "Let's → shall we." },
    { q: "Could you tell me where ______?", opcje: ["is the station", "the station is", "the station", "does the station"], poprawna: 1, wyjasnienie: "Indirect question – bez inwersji." },
    { q: "Do you know ______ she's coming?", opcje: ["if", "that", "what", "when"], poprawna: 0, wyjasnienie: "Yes/No question → if / whether." },
    { q: "Who ______ you call?", opcje: ["did", "do", "does", "have"], poprawna: 0, wyjasnienie: "Pytanie o dopełnienie → did." },
    { q: "Who ______ you? (kto cię odwiedził)", opcje: ["did visit", "visited", "does visit", "visit"], poprawna: 1, wyjasnienie: "Pytanie o podmiot – bez do." },
    { q: "______ is she like?", opcje: ["What", "How", "Who", "Where"], poprawna: 0, wyjasnienie: "What is she like? – charakter." },
    { q: "______ is she? (Jak się czuje?)", opcje: ["What", "How", "Who", "Which"], poprawna: 1, wyjasnienie: "How is she? – samopoczucie." },
    { q: "Which is correct?", opcje: ["Do you know where is the station?", "Do you know where the station is?", "Do you know where does the station is?", "Do you know where are the station?"], poprawna: 1, wyjasnienie: "Indirect – bez inwersji." },
    { q: "Nobody called, ______?", opcje: ["did they", "didn't they", "did it", "does it"], poprawna: 0, wyjasnienie: "Nobody → tag 'did they'." }
  ]
};

/* ============================================================
   G16B1 – Phrasal Verbs – B1
============================================================ */
window.LESSON_DATA["G16B1"] = {
  tytul: "Phrasal verbs – B1",
  poziom: "B1",
  dzial: "G16",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Last month I decided to take up a new hobby, so I signed up for a photography course. At first it was difficult to keep up with the group, but I didn't give up. I found out that I really enjoy it. I also met some great people – we get along really well. Sometimes we hang out after the classes and talk about our photos. I'm looking forward to our first exhibition next year. My teacher says I should keep at it, because I'm making progress. I think it was one of the best decisions I've made recently.
    </p>

    <h3>Phrasal verbs – kategorie</h3>

    <p><b>1. Codzienne czynności</b></p>
    <table>
      <tr><td class="en">get up</td><td class="pl">wstawać</td></tr>
      <tr><td class="en">wake up</td><td class="pl">budzić (się)</td></tr>
      <tr><td class="en">turn on / off</td><td class="pl">włączać / wyłączać</td></tr>
      <tr><td class="en">put on / take off</td><td class="pl">zakładać / zdejmować</td></tr>
      <tr><td class="en">look after</td><td class="pl">opiekować się</td></tr>
    </table>

    <p><b>2. Relacje i spotkania</b></p>
    <table>
      <tr><td class="en">meet up with</td><td class="pl">spotykać się z</td></tr>
      <tr><td class="en">hang out</td><td class="pl">spędzać czas</td></tr>
      <tr><td class="en">get on / along with</td><td class="pl">dogadywać się z</td></tr>
      <tr><td class="en">fall out with</td><td class="pl">pokłócić się z</td></tr>
      <tr><td class="en">make up with</td><td class="pl">pogodzić się z</td></tr>
      <tr><td class="en">look up to</td><td class="pl">podziwiać</td></tr>
      <tr><td class="en">look down on</td><td class="pl">patrzeć z góry na</td></tr>
    </table>

    <p><b>3. Nauka i praca</b></p>
    <table>
      <tr><td class="en">take up</td><td class="pl">zacząć (hobby, sport)</td></tr>
      <tr><td class="en">give up</td><td class="pl">poddawać się</td></tr>
      <tr><td class="en">keep up with</td><td class="pl">nadążać za</td></tr>
      <tr><td class="en">sign up for</td><td class="pl">zapisać się na</td></tr>
      <tr><td class="en">hand in</td><td class="pl">oddać (pracę)</td></tr>
      <tr><td class="en">hand out</td><td class="pl">rozdawać</td></tr>
      <tr><td class="en">find out</td><td class="pl">dowiedzieć się</td></tr>
      <tr><td class="en">figure out</td><td class="pl">rozgryźć, zrozumieć</td></tr>
    </table>

    <p><b>4. Problemy i rozwiązania</b></p>
    <table>
      <tr><td class="en">sort out</td><td class="pl">uporać się z</td></tr>
      <tr><td class="en">deal with</td><td class="pl">poradzić sobie z</td></tr>
      <tr><td class="en">put up with</td><td class="pl">znosić</td></tr>
      <tr><td class="en">get over</td><td class="pl">dojść do siebie po</td></tr>
      <tr><td class="en">come up with</td><td class="pl">wymyślić</td></tr>
      <tr><td class="en">look into</td><td class="pl">zbadać sprawę</td></tr>
      <tr><td class="en">turn out</td><td class="pl">okazać się</td></tr>
    </table>

    <h3>Rozdzielność phrasal verbs</h3>
    <p>Niektóre są <b>rozdzielne</b> – dopełnienie można wstawić w środek:</p>
    <table>
      <tr><td class="en">Turn <b>on</b> the TV. = Turn the TV <b>on</b>. ✅</td></tr>
      <tr><td class="en">Ale z zaimkiem: <b>Turn it on.</b> ✅ (nie: Turn on it. ❌)</td></tr>
    </table>

    <p><b>Nierozdzielne</b> – nie można wstawić w środek:</p>
    <table>
      <tr><td class="en">look after the baby (nie: look the baby after ❌)</td></tr>
      <tr><td class="en">look forward to seeing you (nie: look seeing you forward ❌)</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>get on with</b>, <b>look forward to</b>, <b>put up with</b>, <b>come up with</b> – najczęstsze phrasal verbs w codziennym angielskim.<br>
      Z zaimkiem zawsze w środku: <span class="en">Pick it up. Turn it off. Give it back.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Dopasuj phrasal verb do znaczenia" },
    { type: "gap", text: '<span class="pl">wstawać → get ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">opiekować się → look ________</span>', answers: ["after"] },
    { type: "gap", text: '<span class="pl">poddawać się → give ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">dowiedzieć się → find ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">dogadywać się z → get ________ with</span>', answers: ["on", "along"] },
    { type: "gap", text: '<span class="pl">spędzać czas → hang ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">podziwiać → look ________ to</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">zacząć (hobby) → take ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">nadążać za → keep ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">zapisać się na → sign ________ for</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">znosić → put ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">dojść do siebie po → get ________</span>', answers: ["over"] },
    { type: "gap", text: '<span class="pl">wymyślić → come ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">okazać się → turn ________</span>', answers: ["out"] },
    { type: "header", text: "B. Uzupełnij zdanie" },
    { type: "gap", text: '<span class="en">I decided to ________ (zacząć) a new hobby.</span>', answers: ["take up"] },
    { type: "gap", text: '<span class="en">I ________ (zapisałem się) for a photography course.</span>', answers: ["signed up"] },
    { type: "gap", text: '<span class="en">It was hard to ________ (nadążać) with the group.</span>', answers: ["keep up"] },
    { type: "gap", text: '<span class="en">I didn\'t ________ (poddawać się).</span>', answers: ["give up"] },
    { type: "gap", text: '<span class="en">I ________ (dowiedziałem się) that I love it.</span>', answers: ["found out"] },
    { type: "gap", text: '<span class="en">We ________ (dogadujemy się) really well.</span>', answers: ["get on", "get along"] },
    { type: "gap", text: '<span class="en">We ________ (spędzamy czas) after classes.</span>', answers: ["hang out"] },
    { type: "gap", text: '<span class="en">I\'m ________ (czekam z niecierpliwością) our exhibition.</span>', answers: ["looking forward to"] },
    { type: "header", text: "C. Rozdzielne – wstaw zaimek" },
    { type: "gap", text: '<span class="en">Turn on the TV. → Turn ________ on.</span>', answers: ["it"] },
    { type: "gap", text: '<span class="en">Pick up your toys. → Pick ________ up.</span>', answers: ["them"] },
    { type: "gap", text: '<span class="en">Turn off the light. → Turn ________ off.</span>', answers: ["it"] },
    { type: "gap", text: '<span class="en">Give back the book. → Give ________ back.</span>', answers: ["it"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">Turn off it. → ________</span>', answers: ["turn it off", "turn it off."], wide: true },
    { type: "gap", text: '<span class="en">I look forward to see you. → ________</span>', answers: ["i look forward to seeing you", "i look forward to seeing you."], wide: true },
    { type: "gap", text: '<span class="en">I get on good with my sister. → ________</span>', answers: ["i get on well with my sister", "i get on well with my sister.", "i get along well with my sister", "i get along well with my sister."], wide: true },
    { type: "gap", text: '<span class="en">Put up with it – I can\'t it. → ________</span>', answers: ["i can't put up with it", "i can't put up with it.", "i cannot put up with it", "i cannot put up with it."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Postanowiłem zacząć nowe hobby.</span>', answers: ["i decided to take up a new hobby", "i decided to take up a new hobby."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogę się doczekać spotkania.</span>', answers: ["i'm looking forward to seeing you", "i'm looking forward to seeing you.", "i am looking forward to seeing you"], wide: true },
    { type: "gap", text: '<span class="pl">Dobrze dogaduję się z moim bratem.</span>', answers: ["i get on well with my brother", "i get on well with my brother.", "i get along well with my brother", "i get along well with my brother."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogę tego znieść.</span>', answers: ["i can't put up with it", "i can't put up with it.", "i cannot put up with it", "i cannot put up with it."], wide: true },
    { type: "gap", text: '<span class="pl">Włączyć telewizor? – Tak, włącz go.</span>', answers: ["turn on the tv yes turn it on", "turn on the tv. yes turn it on"], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz nowe hobby lub aktywność, którą zacząłeś niedawno – użyj phrasal verbs.", placeholder: "np. Last month I took up... I signed up for... I'm getting on well with..." }
  ],
  test: [
    { q: "wstawać = ______", opcje: ["get up", "get on", "get off", "get in"], poprawna: 0, wyjasnienie: "get up – wstawać." },
    { q: "opiekować się = ______", opcje: ["look after", "look for", "look at", "look up"], poprawna: 0, wyjasnienie: "look after – opiekować się." },
    { q: "poddawać się = ______", opcje: ["give up", "give in", "give out", "give back"], poprawna: 0, wyjasnienie: "give up – poddawać się." },
    { q: "dogadywać się = ______", opcje: ["get on with", "get up with", "get off with", "get in with"], poprawna: 0, wyjasnienie: "get on with – dogadywać się." },
    { q: "Nie mogę się doczekać = I'm ______ to", opcje: ["looking forward", "looking for", "looking after", "looking up"], poprawna: 0, wyjasnienie: "look forward to." },
    { q: "Turn ______ it. (przycisk + zaimek w środku)", opcje: ["off", "on", "up", "out"], poprawna: 0, wyjasnienie: "Turn it off – zaimek w środku." },
    { q: "znosić = ______", opcje: ["put up with", "put on", "put off", "put away"], poprawna: 0, wyjasnienie: "put up with – znosić." },
    { q: "wymyślić = ______", opcje: ["come up with", "come on", "come off", "come across"], poprawna: 0, wyjasnienie: "come up with – wymyślić." },
    { q: "zacząć (hobby) = ______", opcje: ["take up", "take off", "take on", "take in"], poprawna: 0, wyjasnienie: "take up – zacząć coś robić." },
    { q: "dowiedzieć się = ______", opcje: ["find out", "find in", "find for", "find up"], poprawna: 0, wyjasnienie: "find out – dowiedzieć się." }
  ]
};