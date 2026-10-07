window.LESSON_DATA = window.LESSON_DATA || {};

/* ============================================================
   G1B2 – Present Tenses – zaawansowane
============================================================ */
window.LESSON_DATA["G1B2"] = {
  tytul: "Czasy teraźniejsze – poziom zaawansowany",
  poziom: "B2",
  dzial: "G1",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I've been living in this city for about five years now, and I still discover new places every week. I've already visited most of the museums, but I haven't been to the new art gallery yet. At the moment I'm preparing for a promotion exam, so I've been studying almost every evening. I have known my best friend since primary school – we've been through a lot together. Recently I've been thinking about moving abroad, though I haven't made a final decision yet. My sister has just come back from Spain, and she says the experience has completely changed her perspective.
    </p>

    <h3>Present Perfect Simple vs Present Perfect Continuous</h3>
    <p>Oba czasy łączą przeszłość z teraźniejszością, ale <b>nacisk jest inny</b>.</p>
    <table>
      <tr><th>Present Perfect Simple</th><th>Present Perfect Continuous</th></tr>
      <tr>
        <td><b>rezultat, fakt, liczba</b><br>
        <span class="en">I've written three emails.</span><br>
        <span class="en">She has painted the whole room.</span><br>
        <span class="en">How many times have you been there?</span></td>
        <td><b>trwanie, proces, widoczny efekt</b><br>
        <span class="en">I've been writing emails all morning.</span><br>
        <span class="en">Her hands are covered in paint – she's been painting.</span><br>
        <span class="en">How long have you been waiting?</span></td>
      </tr>
    </table>

    <h3>Kiedy który wybrać?</h3>
    <table>
      <tr><th>Użyj Present Perfect Simple gdy…</th><th>Użyj Present Perfect Continuous gdy…</th></tr>
      <tr>
        <td>
          • podajesz <b>liczbę</b> (how many, three times)<br>
          • mówisz o <b>zakończonym rezultacie</b><br>
          • pytasz <b>ile</b>, <b>jak wiele</b><br>
          • z <b>already / yet / just / ever / never</b>
        </td>
        <td>
          • podajesz <b>czas trwania</b> (for, since, all day)<br>
          • czynność <b>trwa i widać jej skutki</b><br>
          • pytasz <b>jak długo</b><br>
          • podkreślasz <b>proces</b>, nie rezultat
        </td>
      </tr>
    </table>

    <h3>Czasowniki statyczne (stative verbs)</h3>
    <p>Nie występują w czasach Continuous – nawet w Present Perfect Continuous:</p>
    <p><span class="en">know, understand, believe, like, love, hate, want, need, mean, belong, contain, own, prefer, seem, cost, hear, see (= rozumieć)</span></p>
    <table>
      <tr><td class="en">I've known her for years. ✅</td></tr>
      <tr><td class="en">I've been knowing her… ❌</td></tr>
      <tr><td class="en">I've had this car since 2020. ✅ <span class="pl">(have = posiadać)</span></td></tr>
    </table>

    <h3>Present Simple vs Present Continuous – różnice znaczeń</h3>
    <table>
      <tr><th>Czasownik</th><th>Present Simple (stan)</th><th>Present Continuous (czynność)</th></tr>
      <tr><td class="en">think</td><td class="en">I think it's a good idea. <span class="pl">(sądzę)</span></td><td class="en">I'm thinking about it. <span class="pl">(rozważam)</span></td></tr>
      <tr><td class="en">have</td><td class="en">She has two brothers. <span class="pl">(ma)</span></td><td class="en">She's having lunch. <span class="pl">(je)</span></td></tr>
      <tr><td class="en">see</td><td class="en">I see what you mean. <span class="pl">(rozumiem)</span></td><td class="en">I'm seeing Tom tomorrow. <span class="pl">(spotykam się)</span></td></tr>
      <tr><td class="en">taste</td><td class="en">This soup tastes delicious. <span class="pl">(smakuje)</span></td><td class="en">Why are you tasting the soup? <span class="pl">(próbujesz)</span></td></tr>
      <tr><td class="en">look</td><td class="en">You look tired. <span class="pl">(wyglądasz)</span></td><td class="en">She's looking at the picture. <span class="pl">(patrzy)</span></td></tr>
    </table>

    <h3>Always + Present Continuous – irytacja lub zaskoczenie</h3>
    <table>
      <tr><td class="en">He is <b>always losing</b> his keys!</td><td class="pl">On zawsze gubi klucze! (irytacja)</td></tr>
      <tr><td class="en">She is <b>constantly checking</b> her phone.</td><td class="pl">Ona bez przerwy sprawdza telefon.</td></tr>
    </table>

    <h3>Present Perfect z określeniami</h3>
    <table>
      <tr><td class="en">just / already / yet</td><td class="pl">właśnie / już / jeszcze (nie)</td></tr>
      <tr><td class="en">ever / never</td><td class="pl">kiedykolwiek / nigdy</td></tr>
      <tr><td class="en">for / since</td><td class="pl">przez (okres) / od (punkt)</td></tr>
      <tr><td class="en">so far / up to now</td><td class="pl">jak dotąd / do tej pory</td></tr>
      <tr><td class="en">recently / lately</td><td class="pl">ostatnio</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>for</b> + okres (<span class="en">for two years</span>), <b>since</b> + punkt (<span class="en">since 2020</span>).<br>
      <b>Have you ever been to…?</b> – pytanie o doświadczenie. <b>How long have you been…?</b> – pytanie o trwanie.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Present Perfect Simple czy Continuous?" },
    { type: "gap", text: '<span class="en">I ________ (read) that book – it was brilliant.</span>', answers: ["have read"] },
    { type: "gap", text: '<span class="en">I ________ (read) all morning – I\'m exhausted.</span>', answers: ["have been reading"] },
    { type: "gap", text: '<span class="en">She ________ (work) here since 2020.</span>', answers: ["has worked", "has been working"] },
    { type: "gap", text: '<span class="en">How many times ________ (you / visit) London?</span>', answers: ["have you visited"] },
    { type: "gap", text: '<span class="en">My eyes are red because I ________ (study) all night.</span>', answers: ["have been studying"] },
    { type: "gap", text: '<span class="en">We ________ (wait) for two hours.</span>', answers: ["have been waiting"] },
    { type: "gap", text: '<span class="en">I ________ (know) her for years.</span>', answers: ["have known"] },
    { type: "gap", text: '<span class="en">He ________ (paint) the whole flat.</span>', answers: ["has painted"] },
    { type: "header", text: "B. Present Simple czy Present Continuous?" },
    { type: "gap", text: '<span class="en">I ________ (think) about moving abroad.</span>', answers: ["am thinking"] },
    { type: "gap", text: '<span class="en">I ________ (think) it\'s a good idea.</span>', answers: ["think"] },
    { type: "gap", text: '<span class="en">She ________ (have) a shower right now.</span>', answers: ["is having"] },
    { type: "gap", text: '<span class="en">She ________ (have) two brothers.</span>', answers: ["has"] },
    { type: "gap", text: '<span class="en">He ________ (always / lose) his keys! (irytacja)</span>', answers: ["is always losing", "'s always losing"] },
    { type: "gap", text: '<span class="en">This soup ________ (taste) delicious.</span>', answers: ["tastes"] },
    { type: "gap", text: '<span class="en">Why ________ you ________ (taste) the soup?</span>', answers: ["are tasting"] },
    { type: "header", text: "C. For czy since?" },
    { type: "gap", text: '<span class="en">I have lived here ________ 2018.</span>', answers: ["since"] },
    { type: "gap", text: '<span class="en">I have lived here ________ seven years.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">She has been learning English ________ last September.</span>', answers: ["since"] },
    { type: "gap", text: '<span class="en">They have been married ________ 20 years.</span>', answers: ["for"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I have been knowing her for ten years. → ________</span>', answers: ["i have known her for ten years", "i have known her for ten years.", "i've known her for ten years", "i've known her for ten years."], wide: true },
    { type: "gap", text: '<span class="en">She has been seeing that film three times. → ________</span>', answers: ["she has seen that film three times", "she has seen that film three times.", "she's seen that film three times", "she's seen that film three times."], wide: true },
    { type: "gap", text: '<span class="en">How long do you know him? → ________</span>', answers: ["how long have you known him", "how long have you known him?"], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Mieszkam tu od pięciu lat.</span>', answers: ["i have lived here for five years", "i have lived here for five years.", "i've lived here for five years", "i've lived here for five years.", "i have been living here for five years"], wide: true },
    { type: "gap", text: '<span class="pl">Czytam tę książkę od rana.</span>', answers: ["i have been reading this book all morning", "i have been reading this book all morning.", "i've been reading this book all morning", "i've been reading this book all morning."], wide: true },
    { type: "gap", text: '<span class="pl">Nigdy nie byłem w Hiszpanii.</span>', answers: ["i have never been to spain", "i have never been to spain.", "i've never been to spain", "i've never been to spain."], wide: true },
    { type: "gap", text: '<span class="pl">Właśnie skończyłem pracę.</span>', answers: ["i have just finished work", "i have just finished work.", "i've just finished work", "i've just finished work."], wide: true },
    { type: "gap", text: '<span class="pl">Ona od rana sprząta dom – jest zmęczona.</span>', answers: ["she has been cleaning the house all morning - she is tired", "she has been cleaning the house all morning - she's tired", "she has been cleaning the house all morning and she's tired"], wide: true },
    { type: "header", text: "F. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań o sobie: co ostatnio robiłeś, co robisz od jakiegoś czasu, czego jeszcze nie zrobiłeś. Użyj Present Perfect Simple i Continuous.", placeholder: "np. Recently I've been... I have already... I haven't... yet..." }
  ],
  test: [
    { q: "I ______ that book – it was brilliant.", opcje: ["have read", "have been reading", "read", "am reading"], poprawna: 0, wyjasnienie: "Rezultat – skończona czynność → Present Perfect Simple." },
    { q: "I ______ all morning – I'm exhausted.", opcje: ["have read", "have been reading", "read", "am reading"], poprawna: 1, wyjasnienie: "Proces, widoczny efekt → Present Perfect Continuous." },
    { q: "She ______ here since 2020.", opcje: ["works", "worked", "has worked", "is working"], poprawna: 2, wyjasnienie: "since + punkt → Present Perfect." },
    { q: "I ______ her for years.", opcje: ["have known", "have been knowing", "know", "am knowing"], poprawna: 0, wyjasnienie: "know = czasownik statyczny – bez -ing." },
    { q: "I ______ it's a good idea.", opcje: ["am thinking", "think", "have thought", "have been thinking"], poprawna: 1, wyjasnienie: "think = sądzić → Present Simple." },
    { q: "I ______ about moving abroad.", opcje: ["think", "am thinking", "have thought", "thought"], poprawna: 1, wyjasnienie: "think about = rozważać → Present Continuous." },
    { q: "He ______ his keys! (irytacja)", opcje: ["always loses", "is always losing", "always lost", "has always lost"], poprawna: 1, wyjasnienie: "always + Present Continuous = irytacja." },
    { q: "I have lived here ______ seven years.", opcje: ["since", "for", "from", "during"], poprawna: 1, wyjasnienie: "for + okres." },
    { q: "I have lived here ______ 2018.", opcje: ["since", "for", "from", "during"], poprawna: 0, wyjasnienie: "since + punkt." },
    { q: "How long ______ him?", opcje: ["do you know", "have you known", "have you been knowing", "are you knowing"], poprawna: 1, wyjasnienie: "How long + Present Perfect (know = statyczny)." }
  ]
};

/* ============================================================
   G2B2 – Past Tenses – zaawansowane
============================================================ */
window.LESSON_DATA["G2B2"] = {
  tytul: "Czasy przeszłe – poziom zaawansowany",
  poziom: "B2",
  dzial: "G2",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      When I finally arrived at the station, the train had already left. I had been running for almost twenty minutes and I was out of breath. Earlier that day, I had been working on a project all morning and had completely forgotten about the time. I used to be very punctual when I was younger, but recently I've been constantly late. While I was standing on the platform, I met an old friend I hadn't seen for years. We got talking and I missed the next train too – but by that point, I didn't even mind.
    </p>

    <h3>Cztery czasy przeszłe – porównanie</h3>
    <table>
      <tr><th>Czas</th><th>Użycie</th><th>Przykład</th></tr>
      <tr><td>Past Simple</td><td>zakończone wydarzenia w kolejności</td><td class="en">I got up, had breakfast and went out.</td></tr>
      <tr><td>Past Continuous</td><td>tło, czynność w trakcie</td><td class="en">It was raining and people were rushing home.</td></tr>
      <tr><td>Past Perfect</td><td>wydarzenie wcześniejsze niż inne</td><td class="en">When I arrived, she had left.</td></tr>
      <tr><td>Past Perfect Continuous</td><td>trwanie przed innym wydarzeniem</td><td class="en">I had been working for hours when he called.</td></tr>
    </table>

    <h3>Past Perfect vs Past Simple – kluczowa różnica</h3>
    <table>
      <tr><th>Past Simple</th><th>Past Perfect</th></tr>
      <tr>
        <td class="en">When I arrived, she left.</td>
        <td class="en">When I arrived, she had left.</td>
      </tr>
      <tr>
        <td class="pl">Wyszła po moim przyjeździe.</td>
        <td class="pl">Wyszła wcześniej, przed moim przyjazdem.</td>
      </tr>
    </table>

    <h3>Past Perfect Continuous</h3>
    <p>Podkreśla <b>jak długo</b> coś trwało przed innym wydarzeniem:</p>
    <table>
      <tr><td class="en">I had been working for three hours when he called.</td></tr>
      <tr><td class="en">She was tired because she had been studying all night.</td></tr>
      <tr><td class="en">They had been waiting for an hour before the bus arrived.</td></tr>
    </table>

    <h3>Used to / Would / Be used to / Get used to</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>used to + V</b></td><td>kiedyś (a już nie)</td><td class="en">I used to play the piano.</td></tr>
      <tr><td class="en"><b>would + V</b></td><td>powtarzalne czynności w przeszłości (narracja)</td><td class="en">Every summer we would go to the seaside.</td></tr>
      <tr><td class="en"><b>be used to + -ing</b></td><td>być przyzwyczajonym do</td><td class="en">I'm used to getting up early.</td></tr>
      <tr><td class="en"><b>get used to + -ing</b></td><td>przyzwyczajać się do</td><td class="en">I'm getting used to living alone.</td></tr>
    </table>
    <div class="tip-box">
      <b>Uwaga:</b> <b>used to</b> NIE ma formy Present – dla teraźniejszości używamy Present Simple: <span class="en">I usually get up early</span> (nie "I use to get up early").
    </div>

    <h3>Narrative tenses – jak opowiadać historię</h3>
    <p>Dobra narracja miesza cztery czasy:</p>
    <ul>
      <li><b>Past Continuous</b> – sceneria, tło: <span class="en">The sun was setting and the birds were singing.</span></li>
      <li><b>Past Simple</b> – główne wydarzenia: <span class="en">Suddenly, I heard a noise.</span></li>
      <li><b>Past Perfect</b> – retrospekcja: <span class="en">I realised I had forgotten my wallet.</span></li>
      <li><b>Past Perfect Continuous</b> – jak długo coś trwało: <span class="en">I had been walking for hours.</span></li>
    </ul>

    <h3>Określenia czasu w narracji</h3>
    <table>
      <tr><td class="en">by the time</td><td class="pl">zanim, do czasu gdy</td></tr>
      <tr><td class="en">as soon as</td><td class="pl">gdy tylko</td></tr>
      <tr><td class="en">no sooner ... than</td><td class="pl">ledwie ... gdy</td></tr>
      <tr><td class="en">hardly ... when</td><td class="pl">ledwo ... gdy</td></tr>
      <tr><td class="en">previously / earlier</td><td class="pl">wcześniej</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Wybierz właściwy czas" },
    { type: "gap", text: '<span class="en">When I arrived, she ________ (already / leave).</span>', answers: ["had already left"] },
    { type: "gap", text: '<span class="en">He was tired because he ________ (not / sleep) well.</span>', answers: ["hadn't slept", "had not slept"] },
    { type: "gap", text: '<span class="en">They couldn\'t enter because they ________ (forget) the key.</span>', answers: ["had forgotten"] },
    { type: "gap", text: '<span class="en">I ________ (walk) home when I ________ (see) Anna.</span>', answers: ["was walking, saw"] },
    { type: "gap", text: '<span class="en">She ________ (work) there for five years before she resigned.</span>', answers: ["had been working", "had worked"] },
    { type: "gap", text: '<span class="en">While I ________ (drive), I ________ (hear) a strange noise.</span>', answers: ["was driving, heard"] },
    { type: "gap", text: '<span class="en">After I ________ (finish) work, I went home.</span>', answers: ["had finished"] },
    { type: "gap", text: '<span class="en">It ________ (rain) when we left the house.</span>', answers: ["was raining"] },
    { type: "header", text: "B. Past Perfect czy Past Perfect Continuous?" },
    { type: "gap", text: '<span class="en">I ________ (wait) for two hours when the bus finally came.</span>', answers: ["had been waiting"] },
    { type: "gap", text: '<span class="en">She ________ (finish) the report before the meeting started.</span>', answers: ["had finished"] },
    { type: "gap", text: '<span class="en">They ________ (play) for an hour when it started to rain.</span>', answers: ["had been playing"] },
    { type: "gap", text: '<span class="en">He ________ (never / see) such a beautiful sunset before.</span>', answers: ["had never seen"] },
    { type: "gap", text: '<span class="en">He ________ (can\'t / say) that! It\'s not like him.</span>', answers: ["can't have said", "cannot have said"] },
    { type: "header", text: "C. Used to / would / be used to / get used to" },
    { type: "gap", text: '<span class="en">I ________ (play) the piano when I was a child.</span>', answers: ["used to play"] },
    { type: "gap", text: '<span class="en">I\'m ________ (get up) early every day.</span>', answers: ["used to getting up"] },
    { type: "gap", text: '<span class="en">She\'s slowly ________ (live) alone.</span>', answers: ["getting used to living"] },
    { type: "gap", text: '<span class="en">Every summer we ________ go to the seaside.</span>', answers: ["would"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">When I arrived, she already left. → ________</span>', answers: ["when i arrived she had already left", "when i arrived, she had already left", "when i arrived, she had already left."], wide: true },
    { type: "gap", text: '<span class="en">I use to get up early. → ________</span>', answers: ["i used to get up early", "i used to get up early."], wide: true },
    { type: "gap", text: '<span class="en">I am used to get up early. → ________</span>', answers: ["i am used to getting up early", "i am used to getting up early.", "i'm used to getting up early", "i'm used to getting up early."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Kiedy przyjechałem, pociąg już odjechał.</span>', answers: ["when i arrived the train had already left", "when i arrived, the train had already left", "when i arrived, the train had already left."], wide: true },
    { type: "gap", text: '<span class="pl">Czekałem dwie godziny, kiedy w końcu przyszedł autobus.</span>', answers: ["i had been waiting for two hours when the bus finally came", "i had been waiting for two hours when the bus finally came.", "i had been waiting for 2 hours when the bus finally came"], wide: true },
    { type: "gap", text: '<span class="pl">Kiedyś grałem w piłkę nożną, ale już nie gram.</span>', answers: ["i used to play football but i don't anymore", "i used to play football but i don't anymore.", "i used to play football but i no longer do"], wide: true },
    { type: "gap", text: '<span class="pl">Przyzwyczaiłem się do wstawania wcześnie.</span>', answers: ["i am used to getting up early", "i am used to getting up early.", "i'm used to getting up early", "i'm used to getting up early."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz wydarzenie z przeszłości, używając Past Simple, Past Continuous, Past Perfect i Past Perfect Continuous (min. 5 zdań).", placeholder: "np. Last summer I was... when suddenly... I had been... before..." }
  ],
  test: [
    { q: "When I arrived, she ______.", opcje: ["already left", "had already left", "has already left", "was leaving"], poprawna: 1, wyjasnienie: "Wydarzenie wcześniejsze → Past Perfect." },
    { q: "He was tired because he ______ all day.", opcje: ["worked", "had worked", "was working", "works"], poprawna: 1, wyjasnienie: "Przyczyna przed skutkiem → Past Perfect." },
    { q: "While I ______ home, I saw Peter.", opcje: ["walked", "was walking", "had walked", "walk"], poprawna: 1, wyjasnienie: "Czynność w trakcie → Past Continuous." },
    { q: "I ______ for two hours when the bus came.", opcje: ["waited", "had been waiting", "was waiting", "have waited"], poprawna: 1, wyjasnienie: "Trwanie przed wydarzeniem → Past Perfect Continuous." },
    { q: "I ______ play the piano when I was a child.", opcje: ["use to", "used to", "am used to", "would to"], poprawna: 1, wyjasnienie: "used to + bezokolicznik = kiedyś (a już nie)." },
    { q: "I'm ______ getting up early.", opcje: ["used to", "use to", "used for", "using to"], poprawna: 0, wyjasnienie: "be used to + -ing." },
    { q: "I'm slowly ______ living alone.", opcje: ["used to", "getting used to", "use to", "getting use to"], poprawna: 1, wyjasnienie: "get used to + -ing = przyzwyczajać się." },
    { q: "By the time we arrived, the film ______.", opcje: ["started", "had started", "was starting", "starts"], poprawna: 1, wyjasnienie: "by the time + Past Perfect." },
    { q: "She ______ the report before the meeting.", opcje: ["finished", "had finished", "was finishing", "has finished"], poprawna: 1, wyjasnienie: "Wcześniejsze zakończone → Past Perfect." },
    { q: "I realised that I ______ him before.", opcje: ["saw", "had seen", "was seeing", "see"], poprawna: 1, wyjasnienie: "Doświadczenie przed momentem w przeszłości → Past Perfect." }
  ]
};

/* ============================================================
   G3B2 – Future Forms – zaawansowane
============================================================ */
window.LESSON_DATA["G3B2"] = {
  tytul: "Formy przyszłości – poziom zaawansowany",
  poziom: "B2",
  dzial: "G3",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      By this time next year, I will have finished my studies and I will be looking for a job. I hope I will have found something interesting by then. This time next week I will be sitting on a beach in Greece – I can't wait! My brother is about to open his own restaurant, and he is to appear on a TV show next month. As soon as he gets his first customers, he will let me know. I'm on the point of booking my flights, so I should decide soon. I doubt anything will go wrong, but if it does, I'll deal with it then.
    </p>

    <h3>Sześć form przyszłości</h3>
    <table>
      <tr><th>Forma</th><th>Użycie</th><th>Przykład</th></tr>
      <tr><td>Future Simple (will)</td><td>decyzja teraz, obietnica, przewidywanie</td><td class="en">I'll help you.</td></tr>
      <tr><td>Be going to</td><td>zamiar, plan wcześniej obmyślany</td><td class="en">I'm going to study law.</td></tr>
      <tr><td>Present Continuous</td><td>ustalone plany, umowy</td><td class="en">I'm meeting Tom at 6.</td></tr>
      <tr><td>Present Simple</td><td>rozkłady, harmonogramy</td><td class="en">The train leaves at 8.</td></tr>
      <tr><td><b>Future Continuous</b></td><td>czynność w toku w przyszłości</td><td class="en">This time tomorrow I'll be flying to Rome.</td></tr>
      <tr><td><b>Future Perfect</b></td><td>czynność zakończona przed momentem w przyszłości</td><td class="en">By 2030 I will have finished my degree.</td></tr>
      <tr><td><b>Future Perfect Continuous</b></td><td>jak długo coś będzie trwać do danego momentu</td><td class="en">By June I will have been working here for five years.</td></tr>
    </table>

    <h3>Future Continuous – szczegóły</h3>
    <p><b>will be + -ing</b></p>
    <table>
      <tr><td class="en">This time next week I'll be lying on a beach.</td></tr>
      <tr><td class="en">Don't call at 8 – I'll be having dinner.</td></tr>
      <tr><td class="en">Will you be using the car tonight?</td></tr>
    </table>
    <p><b>Kiedy używać:</b> czynność w toku w określonym momencie w przyszłości; uprzejme pytania o plany.</p>

    <h3>Future Perfect – szczegóły</h3>
    <p><b>will have + III forma</b></p>
    <table>
      <tr><td class="en">By the end of the year I will have saved enough money.</td></tr>
      <tr><td class="en">By 2030 she will have written three novels.</td></tr>
      <tr><td class="en">I'll have finished the report by Friday.</td></tr>
    </table>
    <p><b>Kiedy używać:</b> czynność zakończona przed określonym momentem w przyszłości (by, by the time, before).</p>

    <h3>Future Perfect Continuous – szczegóły</h3>
    <p><b>will have been + -ing</b></p>
    <table>
      <tr><td class="en">By June I'll have been living here for ten years.</td></tr>
      <tr><td class="en">Next month she'll have been working for us for two years.</td></tr>
    </table>
    <p><b>Kiedy używać:</b> podkreślić jak długo coś będzie trwać do danego momentu.</p>

    <h3>Be to / Be about to / Be on the point of</h3>
    <table>
      <tr><th>Forma</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>be to + V</b></td><td>oficjalny plan, rozkaz, instrukcja</td><td class="en">The President is to visit Paris next week.</td></tr>
      <tr><td class="en"><b>be about to + V</b></td><td>za chwilę</td><td class="en">She's about to leave.</td></tr>
      <tr><td class="en"><b>be on the point of + -ing</b></td><td>właśnie ma zamiar</td><td class="en">I'm on the point of finishing.</td></tr>
    </table>

    <h3>Zdania czasowe – present, nie future</h3>
    <p>Po <b>when / before / after / as soon as / until / by the time</b> używamy <b>Present Simple</b> (albo Present Perfect), nie will:</p>
    <table>
      <tr><td class="en">I'll call you when I arrive. ✅</td></tr>
      <tr><td class="en">I'll call you when I will arrive. ❌</td></tr>
      <tr><td class="en">We'll start after she has come. ✅ <span class="pl">(Present Perfect dla podkreślenia zakończenia)</span></td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> Future Perfect + <b>by</b> = do (jakiegoś momentu).<br>
      Future Continuous = czynność <b>w toku</b> w przyszłości – jak Present Continuous przeniesiony w przyszłość.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wybierz właściwą formę przyszłości" },
    { type: "gap", text: '<span class="en">This time tomorrow I ________ (fly) to Rome.</span>', answers: ["will be flying", "'ll be flying"] },
    { type: "gap", text: '<span class="en">By 2030 I ________ (finish) my degree.</span>', answers: ["will have finished", "'ll have finished"] },
    { type: "gap", text: '<span class="en">By June I ________ (work) here for five years.</span>', answers: ["will have been working", "'ll have been working"] },
    { type: "gap", text: '<span class="en">Don\'t call at 8 – I ________ (have) dinner.</span>', answers: ["will be having", "'ll be having"] },
    { type: "gap", text: '<span class="en">By the end of the year she ________ (save) enough money.</span>', answers: ["will have saved", "'ll have saved"] },
    { type: "gap", text: '<span class="en">The President ________ (visit) Paris next week. (oficjalny plan)</span>', answers: ["is to visit"] },
    { type: "gap", text: '<span class="en">She ________ (about to / leave) – say goodbye quickly!</span>', answers: ["is about to leave", "'s about to leave"] },
    { type: "gap", text: '<span class="en">I ________ (on the point of / finish) my essay.</span>', answers: ["am on the point of finishing", "'m on the point of finishing"] },
    { type: "header", text: "B. Future Simple, Continuous czy Perfect?" },
    { type: "gap", text: '<span class="en">I ________ (call) you when I arrive.</span>', answers: ["will call", "'ll call"] },
    { type: "gap", text: '<span class="en">Next year I ________ (live) in Spain – that\'s the plan.</span>', answers: ["am going to live", "'m going to live"] },
    { type: "gap", text: '<span class="en">This time next month I ________ (sit) on a beach.</span>', answers: ["will be sitting", "'ll be sitting"] },
    { type: "gap", text: '<span class="en">By Friday I ________ (write) ten pages.</span>', answers: ["will have written", "'ll have written"] },
    { type: "header", text: "C. Zdania czasowe – poprawna forma" },
    { type: "gap", text: '<span class="en">I\'ll call you when I ________ (arrive).</span>', answers: ["arrive"] },
    { type: "gap", text: '<span class="en">We\'ll start as soon as everyone ________ (be) ready.</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">By the time you ________ (come back), I ________ (finish) everything.</span>', answers: ["come back, will have finished"] },
    { type: "gap", text: '<span class="en">I\'ll wait until you ________ (finish).</span>', answers: ["finish"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">I\'ll call you when I will arrive. → ________</span>', answers: ["i'll call you when i arrive", "i'll call you when i arrive.", "i will call you when i arrive", "i will call you when i arrive."], wide: true },
    { type: "gap", text: '<span class="en">This time tomorrow I will flying to Rome. → ________</span>', answers: ["this time tomorrow i will be flying to rome", "this time tomorrow i will be flying to rome.", "this time tomorrow i'll be flying to rome", "this time tomorrow i'll be flying to rome."], wide: true },
    { type: "gap", text: '<span class="en">By 2030 I will have finish my studies. → ________</span>', answers: ["by 2030 i will have finished my studies", "by 2030 i will have finished my studies.", "by 2030 i'll have finished my studies"], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Jutro o tej porze będę lecieć do Rzymu.</span>', answers: ["this time tomorrow i will be flying to rome", "this time tomorrow i will be flying to rome.", "this time tomorrow i'll be flying to rome", "this time tomorrow i'll be flying to rome."], wide: true },
    { type: "gap", text: '<span class="pl">Do 2030 roku skończę studia.</span>', answers: ["by 2030 i will have finished my studies", "by 2030 i will have finished my studies.", "by 2030 i'll have finished my studies", "by 2030 i'll have finished my studies."], wide: true },
    { type: "gap", text: '<span class="pl">W czerwcu będę pracować tu już pięć lat.</span>', answers: ["by june i will have been working here for five years", "by june i will have been working here for five years.", "in june i will have been working here for five years"], wide: true },
    { type: "gap", text: '<span class="pl">Ona właśnie ma zamiar wyjść.</span>', answers: ["she is about to leave", "she is about to leave.", "she's about to leave", "she's about to leave."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Napisz 5 zdań o swoich planach na najbliższe 5 lat. Użyj Future Continuous, Future Perfect i Future Perfect Continuous.", placeholder: "np. By 2030 I will have... This time next year I will be..." }
  ],
  test: [
    { q: "This time tomorrow I ______ to Rome.", opcje: ["will fly", "will be flying", "will have flown", "am flying"], poprawna: 1, wyjasnienie: "Czynność w toku w przyszłości → Future Continuous." },
    { q: "By 2030 I ______ my studies.", opcje: ["will finish", "will be finishing", "will have finished", "finish"], poprawna: 2, wyjasnienie: "by + moment → Future Perfect." },
    { q: "By June I ______ here for five years.", opcje: ["will work", "will be working", "will have been working", "work"], poprawna: 2, wyjasnienie: "Jak długo do momentu w przyszłości → Future Perfect Continuous." },
    { q: "Don't call at 8 – I ______ dinner.", opcje: ["will have", "will be having", "am having", "have"], poprawna: 1, wyjasnienie: "Czynność w toku o konkretnej godzinie → Future Continuous." },
    { q: "The President ______ visit Paris next week. (oficjalny plan)", opcje: ["will", "is to", "is about to", "is on the point of"], poprawna: 1, wyjasnienie: "be to + V = oficjalny plan." },
    { q: "She ______ leave – say goodbye quickly!", opcje: ["is about to", "will", "is to", "going to"], poprawna: 0, wyjasnienie: "be about to = za chwilę." },
    { q: "I'll call you when I ______.", opcje: ["will arrive", "arrive", "am arriving", "will be arriving"], poprawna: 1, wyjasnienie: "Po when → Present Simple." },
    { q: "We'll start as soon as everyone ______ ready.", opcje: ["will be", "is", "be", "is going to be"], poprawna: 1, wyjasnienie: "Po as soon as → Present Simple." },
    { q: "By the time you come back, I ______ everything.", opcje: ["finish", "will finish", "will have finished", "have finished"], poprawna: 2, wyjasnienie: "by the time + Future Perfect." },
    { q: "Które zdanie jest poprawne?", opcje: ["I'll tell you when I will know.", "I'll tell you when I know.", "I tell you when I will know.", "I will tell you when I will know."], poprawna: 1, wyjasnienie: "Po when – Present Simple, nie will." }
  ]
};

/* ============================================================
   G4B2 – Modal Verbs – zaawansowane
============================================================ */
window.LESSON_DATA["G4B2"] = {
  tytul: "Czasowniki modalne – dedukcja i przeszłość",
  poziom: "B2",
  dzial: "G4",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I can't find my keys anywhere. They must be somewhere in the house – I had them this morning. They can't have disappeared into thin air! Maybe I left them in the car. I should have checked before coming in. My sister might have taken them by mistake; she's always picking up the wrong set. I could have sworn they were on the kitchen table. Well, I'd better look again – they must be here somewhere. If I still can't find them, I'll have to use the spare set. I shouldn't have put them down without thinking.
    </p>

    <h3>Modalne dedukcji – teraźniejszość</h3>
    <table>
      <tr><th>Modal</th><th>Pewność</th><th>Przykład</th></tr>
      <tr><td class="en"><b>must</b> + V</td><td>na pewno tak (99%)</td><td class="en">She must be tired – she worked all day.</td></tr>
      <tr><td class="en"><b>can't</b> + V</td><td>na pewno nie (99%)</td><td class="en">He can't be serious!</td></tr>
      <tr><td class="en"><b>may / might / could</b> + V</td><td>może (50%)</td><td class="en">She might be at home.</td></tr>
      <tr><td class="en"><b>should</b> + V</td><td>powinno być (oczekiwanie)</td><td class="en">He should be here by now.</td></tr>
    </table>
    <div class="tip-box">
      <b>Uwaga:</b> w dedukcji <b>must</b> = na pewno (nie "musi"), <b>can't</b> = na pewno nie (nie "nie może").
    </div>

    <h3>Modalne dedukcji – przeszłość (modal perfect)</h3>
    <table>
      <tr><th>Modal</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>must have + III</b></td><td>na pewno tak było</td><td class="en">She must have missed the train.</td></tr>
      <tr><td class="en"><b>can't have + III</b></td><td>na pewno tak nie było</td><td class="en">He can't have said that!</td></tr>
      <tr><td class="en"><b>might / may / could have + III</b></td><td>możliwe, że tak było</td><td class="en">She might have forgotten.</td></tr>
      <tr><td class="en"><b>should have + III</b></td><td>powinien był (a nie zrobił)</td><td class="en">You should have told me.</td></tr>
      <tr><td class="en"><b>shouldn't have + III</b></td><td>nie powinien był (a zrobił)</td><td class="en">I shouldn't have said that.</td></tr>
      <tr><td class="en"><b>could have + III</b></td><td>mógł (ale nie zrobił) / możliwe</td><td class="en">We could have won the match.</td></tr>
      <tr><td class="en"><b>needn't have + III</b></td><td>nie było potrzeby, a zrobił</td><td class="en">You needn't have come.</td></tr>
    </table>

    <h3>Must vs can't – dedukcja</h3>
    <table>
      <tr><td class="en">She must be tired. <span class="pl">(widzę, że pracowała cały dzień)</span></td></tr>
      <tr><td class="en">She can't be tired. <span class="pl">(właśnie wróciła z urlopu)</span></td></tr>
      <tr><td class="en">She might be tired. <span class="pl">(nie jestem pewien)</span></td></tr>
    </table>

    <h3>Should have / Could have / Would have</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th></tr>
      <tr><td class="en">should have done</td><td>powinienem był zrobić (żal, krytyka)</td></tr>
      <tr><td class="en">shouldn't have done</td><td>nie powinienem był zrobić</td></tr>
      <tr><td class="en">could have done</td><td>mogłem był zrobić (niewykorzystana możliwość)</td></tr>
      <tr><td class="en">would have done</td><td>zrobiłbym (w III okresie warunkowym)</td></tr>
      <tr><td class="en">might have done</td><td>mogłem był zrobić (przypuszczenie)</td></tr>
    </table>

    <h3>Dedukcja vs obowiązek</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th></tr>
      <tr><td class="en">He must be at work.</td><td>Na pewno jest w pracy. <span class="pl">(dedukcja)</span></td></tr>
      <tr><td class="en">He must go to work.</td><td>Musi iść do pracy. <span class="pl">(obowiązek)</span></td></tr>
      <tr><td class="en">He must have gone to work.</td><td>Na pewno poszedł do pracy. <span class="pl">(dedukcja o przeszłości)</span></td></tr>
    </table>

    <h3>Uprzejme formy i inne modalne</h3>
    <table>
      <tr><td class="en">I'd better / You'd better</td><td class="pl">lepiej bym / lepiej byś (silna rada)</td></tr>
      <tr><td class="en">I'd rather</td><td class="pl">wolałbym</td></tr>
      <tr><td class="en">be supposed to</td><td class="pl">mieć coś zrobić (zgodnie z planem)</td></tr>
      <tr><td class="en">be bound to</td><td class="pl">na pewno się zdarzy</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>must have done</b> = na pewno zrobił (dedukcja o przeszłości)<br>
      <b>should have done</b> = powinien był zrobić (a nie zrobił) – żal, krytyka<br>
      <b>could have done</b> = mógł był zrobić (ale nie zrobił)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Dedukcja teraźniejsza – must / can't / might" },
    { type: "gap", text: '<span class="en">She worked all day. She ________ be tired.</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">He just came back from holiday. He ________ be tired.</span>', answers: ["can't", "cannot"] },
    { type: "gap", text: '<span class="en">I\'m not sure where she is. She ________ be at home.</span>', answers: ["might", "may", "could"] },
    { type: "gap", text: '<span class="en">That story is impossible. You ________ be joking!</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">He said he would be here at 5. He ________ be here by now.</span>', answers: ["should"] },
    { type: "header", text: "B. Dedukcja o przeszłości – must / can't / might have" },
    { type: "gap", text: '<span class="en">She missed the train – she ________ (get up) late.</span>', answers: ["must have got up", "must have gotten up"] },
    { type: "gap", text: '<span class="en">He\'s not answering. He ________ (go) out.</span>', answers: ["might have gone", "may have gone", "could have gone"] },
    { type: "gap", text: '<span class="en">The window is broken. Someone ________ (break) in.</span>', answers: ["must have broken"] },
    { type: "gap", text: '<span class="en">She looks happy. She ________ (get) good news.</span>', answers: ["must have got", "must have gotten"] },
    { type: "header", text: "C. Should have / Could have / Needn't have" },
    { type: "gap", text: '<span class="en">You ________ (tell) me earlier – I would have helped.</span>', answers: ["should have told"] },
    { type: "gap", text: '<span class="en">I ________ (not / say) that – I really regret it.</span>', answers: ["shouldn't have said", "should not have said"] },
    { type: "gap", text: '<span class="en">We ________ (win) the match, but we didn\'t play well.</span>', answers: ["could have won"] },
    { type: "gap", text: '<span class="en">You ________ (come) – the meeting was cancelled.</span>', answers: ["needn't have come", "need not have come"] },
    { type: "gap", text: '<span class="en">She ________ (study) harder – she failed the exam.</span>', answers: ["should have studied"] },
    { type: "header", text: "D. Popraw błędy" },
    { type: "gap", text: '<span class="en">She must have went to the shop. → ________</span>', answers: ["she must have gone to the shop", "she must have gone to the shop."], wide: true },
    { type: "gap", text: '<span class="en">You should have came earlier. → ________</span>', answers: ["you should have come earlier", "you should have come earlier."], wide: true },
    { type: "gap", text: '<span class="en">He can\'t have stole it. → ________</span>', answers: ["he can't have stolen it", "he can't have stolen it.", "he cannot have stolen it"], wide: true },
    { type: "gap", text: '<span class="en">I might have forgot. → ________</span>', answers: ["i might have forgotten", "i might have forgotten."], wide: true },
    { type: "header", text: "E. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Musi być zmęczona – pracowała cały dzień.</span>', answers: ["she must be tired - she worked all day", "she must be tired - she's been working all day", "she must be tired, she worked all day"], wide: true },
    { type: "gap", text: '<span class="pl">Na pewno przegapiła pociąg.</span>', answers: ["she must have missed the train", "she must have missed the train."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogła tego powiedzieć.</span>', answers: ["she can't have said that", "she can't have said that.", "she cannot have said that", "she cannot have said that."], wide: true },
    { type: "gap", text: '<span class="pl">Powinieneś był mi powiedzieć.</span>', answers: ["you should have told me", "you should have told me."], wide: true },
    { type: "gap", text: '<span class="pl">Mogliśmy wygrać, ale nie graliśmy dobrze.</span>', answers: ["we could have won but we didn't play well", "we could have won, but we didn't play well", "we could have won, but we didn't play well."], wide: true },
    { type: "header", text: "F. Napisz" },
    { type: "open", text: "Opisz sytuację, w której musiałeś coś wywnioskować. Użyj must have, might have, can't have.", placeholder: "np. Yesterday my friend didn't come. She must have... She can't have... She might have..." }
  ],
  test: [
    { q: "She worked all day. She ______ be tired.", opcje: ["must", "can't", "might", "should"], poprawna: 0, wyjasnienie: "Pewność → must (dedukcja teraz)." },
    { q: "He just came back from a holiday. He ______ be tired.", opcje: ["must", "can't", "should", "may"], poprawna: 1, wyjasnienie: "Na pewno nie → can't (dedukcja)." },
    { q: "She missed the train – she ______ late.", opcje: ["must get up", "must have got up", "must getting up", "must to get up"], poprawna: 1, wyjasnienie: "Dedukcja o przeszłości → must have + III." },
    { q: "He can't ______ said that!", opcje: ["have", "has", "had", "having"], poprawna: 0, wyjasnienie: "can't have + III – modal perfect." },
    { q: "You ______ told me earlier!", opcje: ["should have", "should has", "should had", "should having"], poprawna: 0, wyjasnienie: "should have + III = powinieneś był." },
    { q: "I ______ said that – I really regret it.", opcje: ["shouldn't have", "mustn't have", "couldn't have", "needn't have"], poprawna: 0, wyjasnienie: "Żal, krytyka → shouldn't have + III." },
    { q: "We ______ won the match, but we didn't play well.", opcje: ["could have", "must have", "should have", "may have"], poprawna: 0, wyjasnienie: "Niewykorzystana możliwość → could have + III." },
    { q: "You ______ come – the meeting was cancelled.", opcje: ["needn't have", "mustn't have", "shouldn't have", "can't have"], poprawna: 0, wyjasnienie: "Nie było potrzeby, a zrobił → needn't have + III." },
    { q: "He's not answering. He ______ out.", opcje: ["must go", "might have gone", "should go", "can't go"], poprawna: 1, wyjasnienie: "Możliwość w przeszłości → might have gone." },
    { q: "Które zdanie jest poprawne?", opcje: ["She must have went home.", "She must have gone home.", "She must have go home.", "She must went home."], poprawna: 1, wyjasnienie: "Po must have – III forma (gone)." }
  ]
};


/* ============================================================
   G5B2 – Conditionals – Second, Third, Mixed
============================================================ */
window.LESSON_DATA["G5B2"] = {
  tytul: "Okresy warunkowe 2, 3 i mieszane",
  poziom: "B2",
  dzial: "G5",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      If I had more free time, I would definitely learn another language. If I had known how difficult the exam would be, I would have started revising much earlier. But looking back, if I hadn't failed that test last year, I wouldn't have changed my study methods – and today I wouldn't be doing so well. It's strange how things work out. If I were you, I would stop worrying about the past and focus on the present. After all, if we spent all our time thinking about what might have been, we would never get anything done.
    </p>

    <h3>Przypomnienie – 0, 1, 2 okres warunkowy</h3>
    <table>
      <tr><th>Typ</th><th>Budowa</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td>Zero</td><td class="en">If + Present, Present</td><td>fakt, zasada</td><td class="en">If you heat water, it boils.</td></tr>
      <tr><td>First</td><td class="en">If + Present, will + V</td><td>realna przyszłość</td><td class="en">If it rains, I will stay home.</td></tr>
      <tr><td>Second</td><td class="en">If + Past, would + V</td><td>hipoteza (teraźniejszość)</td><td class="en">If I had money, I would travel.</td></tr>
    </table>

    <h3>Second Conditional – hipoteza teraźniejsza</h3>
    <p><b>If + Past Simple, would / could / might + V</b></p>
    <table>
      <tr><td class="en">If I had more time, I would learn Spanish.</td></tr>
      <tr><td class="en">If I were you, I would apologise.</td></tr>
      <tr><td class="en">If she lived closer, she could visit us more often.</td></tr>
      <tr><td class="en">If we won the lottery, we might buy a house.</td></tr>
    </table>
    <p><b>Kiedy używać:</b> sytuacje nierealne, hipotetyczne, mało prawdopodobne w teraźniejszości lub przyszłości.</p>

    <h3>Third Conditional – żal o przeszłość</h3>
    <p><b>If + Past Perfect, would have + III forma</b></p>
    <table>
      <tr><td class="en">If I had known, I would have told you.</td></tr>
      <tr><td class="en">If she had studied harder, she would have passed.</td></tr>
      <tr><td class="en">If we hadn't missed the train, we would have arrived on time.</td></tr>
      <tr><td class="en">If they had left earlier, they could have avoided the traffic.</td></tr>
    </table>
    <p><b>Kiedy używać:</b> nierealne sytuacje w przeszłości – mówimy, co <b>by było</b>, gdyby coś się stało inaczej.</p>

    <h3>Mixed Conditionals – mieszane</h3>
    <p>Gdy warunek dotyczy jednego czasu, a rezultat drugiego:</p>
    <table>
      <tr><th>Typ</th><th>Budowa</th><th>Przykład</th></tr>
      <tr>
        <td>Przeszłość → teraźniejszość</td>
        <td class="en">If + Past Perfect, would + V</td>
        <td class="en">If I had studied medicine, I would be a doctor now.</td>
      </tr>
      <tr>
        <td>Teraźniejszość → przeszłość</td>
        <td class="en">If + Past Simple, would have + III</td>
        <td class="en">If I were braver, I would have spoken up yesterday.</td>
      </tr>
    </table>
    <table>
      <tr><td class="en">If I hadn't moved to London, I wouldn't be here today.</td><td class="pl">(przyczyna w przeszłości → skutek teraz)</td></tr>
      <tr><td class="en">If she weren't so shy, she would have talked to him.</td><td class="pl">(cecha teraz → skutek w przeszłości)</td></tr>
    </table>

    <h3>Alternatywy dla "if"</h3>
    <table>
      <tr><td class="en"><b>unless</b> = if not</td><td class="en">Unless you hurry, you'll be late.</td></tr>
      <tr><td class="en"><b>provided / as long as</b></td><td class="en">I'll help you provided you ask nicely.</td></tr>
      <tr><td class="en"><b>otherwise</b> = if not</td><td class="en">Hurry up – otherwise we'll miss the bus.</td></tr>
      <tr><td class="en"><b>in case</b> = na wypadek gdyby</td><td class="en">Take an umbrella in case it rains.</td></tr>
      <tr><td class="en"><b>suppose / supposing</b> = przypuśćmy, że</td><td class="en">Suppose you won the lottery – what would you do?</td></tr>
    </table>

    <h3>Inwersja z if (formalnie)</h3>
    <table>
      <tr><td class="en">If I had known → <b>Had I known</b>, I would have told you.</td></tr>
      <tr><td class="en">If I were you → <b>Were I you</b>, I would apologise.</td></tr>
      <tr><td class="en">If she should come → <b>Should she come</b>, let me know.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>Second</b> = hipoteza teraz / w przyszłości: <span class="en">If I had money, I would travel.</span><br>
      <b>Third</b> = żal o przeszłość: <span class="en">If I had had money, I would have travelled.</span><br>
      <b>Mixed</b> = mieszamy czasy. <b>If I were you</b> – utrwalone dla rad.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Second Conditional – uzupełnij" },
    { type: "gap", text: '<span class="en">If I ________ (have) more time, I ________ (learn) Italian.</span>', answers: ["had, would learn"] },
    { type: "gap", text: '<span class="en">If she ________ (live) closer, she ________ (visit) us more often.</span>', answers: ["lived, would visit"] },
    { type: "gap", text: '<span class="en">If we ________ (win) the lottery, we ________ (buy) a house.</span>', answers: ["won, would buy"] },
    { type: "gap", text: '<span class="en">If I ________ (be) you, I ________ (apologise).</span>', answers: ["were, would apologise", "were, would apologize"] },
    { type: "gap", text: '<span class="en">If he ________ (know) the answer, he ________ (tell) us.</span>', answers: ["knew, would tell"] },
    { type: "header", text: "B. Third Conditional – uzupełnij" },
    { type: "gap", text: '<span class="en">If I ________ (know), I ________ (tell) you.</span>', answers: ["had known, would have told"] },
    { type: "gap", text: '<span class="en">If she ________ (study) harder, she ________ (pass).</span>', answers: ["had studied, would have passed"] },
    { type: "gap", text: '<span class="en">If we ________ (not / miss) the train, we ________ (arrive) on time.</span>', answers: ["hadn't missed, would have arrived", "had not missed, would have arrived"] },
    { type: "gap", text: '<span class="en">If they ________ (leave) earlier, they ________ (avoid) the traffic.</span>', answers: ["had left, would have avoided", "had left, could have avoided"] },
    { type: "header", text: "C. Mixed Conditionals" },
    { type: "gap", text: '<span class="en">If I ________ (study) medicine, I ________ (be) a doctor now.</span>', answers: ["had studied, would be"] },
    { type: "gap", text: '<span class="en">If she ________ (not / move) to London, she ________ (not / be) here today.</span>', answers: ["hadn't moved, wouldn't be", "had not moved, would not be"] },
    { type: "gap", text: '<span class="en">If I ________ (be) braver, I ________ (speak) up yesterday.</span>', answers: ["were, would have spoken"] },
    { type: "header", text: "D. Alternatywy dla if – uzupełnij" },
    { type: "gap", text: '<span class="en">________ you hurry, you\'ll be late. (= if not)</span>', answers: ["unless"] },
    { type: "gap", text: '<span class="en">I\'ll help you ________ you ask nicely. (= pod warunkiem, że)</span>', answers: ["provided", "as long as"] },
    { type: "gap", text: '<span class="en">Hurry up – ________ we\'ll miss the bus.</span>', answers: ["otherwise"] },
    { type: "gap", text: '<span class="en">Take an umbrella ________ it rains.</span>', answers: ["in case"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">If I would have more money, I would travel. → ________</span>', answers: ["if i had more money i would travel", "if i had more money, i would travel", "if i had more money, i would travel."], wide: true },
    { type: "gap", text: '<span class="en">If I was you, I would leave. → ________</span>', answers: ["if i were you i would leave", "if i were you, i would leave", "if i were you, i would leave."], wide: true },
    { type: "gap", text: '<span class="en">If she would have studied, she would have passed. → ________</span>', answers: ["if she had studied she would have passed", "if she had studied, she would have passed", "if she had studied, she would have passed."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Gdybym miał więcej czasu, uczyłbym się hiszpańskiego.</span>', answers: ["if i had more time i would learn spanish", "if i had more time, i would learn spanish", "if i had more time, i would learn spanish."], wide: true },
    { type: "gap", text: '<span class="pl">Gdybym wiedział, powiedziałbym ci.</span>', answers: ["if i had known i would have told you", "if i had known, i would have told you", "if i had known, i would have told you."], wide: true },
    { type: "gap", text: '<span class="pl">Gdybym nie przeprowadził się do Londynu, nie byłbym tu dzisiaj.</span>', answers: ["if i hadn't moved to london i wouldn't be here today", "if i hadn't moved to london, i wouldn't be here today", "if i hadn't moved to london, i wouldn't be here today."], wide: true },
    { type: "gap", text: '<span class="pl">Na twoim miejscu porozmawiałbym z nim.</span>', answers: ["if i were you i would talk to him", "if i were you, i would talk to him", "if i were you, i would talk to him."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Napisz 5 zdań: co byś zrobił, gdybyś miał więcej czasu / pieniędzy; co byś zmienił w swojej przeszłości. Użyj 2., 3. i mixed conditionals.", placeholder: "np. If I had more time, I would... If I had known, I would have... If I hadn't..., I wouldn't be..." }
  ],
  test: [
    { q: "If I ______ more money, I would travel more.", opcje: ["have", "had", "would have", "has"], poprawna: 1, wyjasnienie: "Second Conditional → Past Simple w warunku." },
    { q: "If I were you, I ______ talk to him.", opcje: ["will", "would", "am", "do"], poprawna: 1, wyjasnienie: "If I were you → would." },
    { q: "If she ______ harder, she would have passed.", opcje: ["study", "studies", "had studied", "would study"], poprawna: 2, wyjasnienie: "Third Conditional → Past Perfect w warunku." },
    { q: "If I ______ known, I would have told you.", opcje: ["have", "had", "would have", "did"], poprawna: 1, wyjasnienie: "If + Past Perfect → would have + III." },
    { q: "If I ______ studied medicine, I would be a doctor now.", opcje: ["have", "had", "would have", "did"], poprawna: 1, wyjasnienie: "Mixed: przeszłość → teraźniejszość." },
    { q: "If I were braver, I ______ spoken up yesterday.", opcje: ["would", "would have", "will have", "had"], poprawna: 1, wyjasnienie: "Mixed: teraźniejszość → przeszłość." },
    { q: "______ you hurry, you'll be late.", opcje: ["If", "Unless", "Provided", "Suppose"], poprawna: 1, wyjasnienie: "Unless = if not." },
    { q: "Hurry up – ______ we'll miss the bus.", opcje: ["unless", "otherwise", "in case", "provided"], poprawna: 1, wyjasnienie: "otherwise = w przeciwnym razie." },
    { q: "Take an umbrella ______ it rains.", opcje: ["unless", "otherwise", "in case", "provided"], poprawna: 2, wyjasnienie: "in case = na wypadek gdyby." },
    { q: "Które zdanie jest poprawne?", opcje: ["If I would have known, I would have told you.", "If I had known, I would have told you.", "If I had known, I would told you.", "If I have known, I would have told you."], poprawna: 1, wyjasnienie: "Po if – Past Perfect (nie would have); po would – have + III." }
  ]
};

/* ============================================================
   G6B2 – Reported Speech – zaawansowane
============================================================ */
window.LESSON_DATA["G6B2"] = {
  tytul: "Mowa zależna – poziom zaawansowany",
  poziom: "B2",
  dzial: "G6",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My boss told me that he had been very impressed with my work. He said that the company was planning to open a new office in Berlin and asked whether I would be interested in a transfer. I replied that I would need some time to think about it. He suggested meeting again the following week to discuss the details. Later, my friend warned me not to make a decision too quickly. She reminded me that I had always wanted to live abroad. I admitted that she had a point and promised to consider the offer seriously.
    </p>

    <h3>Zmiana czasów – przypomnienie</h3>
    <table>
      <tr><th>Direct</th><th>Reported</th></tr>
      <tr><td class="en">Present Simple</td><td class="en">Past Simple</td></tr>
      <tr><td class="en">Present Continuous</td><td class="en">Past Continuous</td></tr>
      <tr><td class="en">Past Simple</td><td class="en">Past Perfect</td></tr>
      <tr><td class="en">Present Perfect</td><td class="en">Past Perfect</td></tr>
      <tr><td class="en">will</td><td class="en">would</td></tr>
      <tr><td class="en">can</td><td class="en">could</td></tr>
      <tr><td class="en">must</td><td class="en">had to</td></tr>
      <tr><td class="en">may / might</td><td class="en">might</td></tr>
    </table>

    <h3>Reporting verbs – zaawansowane</h3>
    <table>
      <tr><th>Verb</th><th>Konstrukcja</th><th>Przykład</th></tr>
      <tr><td class="en"><b>accuse sb of</b></td><td>accuse sb of doing</td><td class="en">He accused me of lying.</td></tr>
      <tr><td class="en"><b>admit</b></td><td>admit doing / admit that</td><td class="en">She admitted breaking the vase.</td></tr>
      <tr><td class="en"><b>apologise for</b></td><td>apologise for doing</td><td class="en">He apologised for being late.</td></tr>
      <tr><td class="en"><b>complain about</b></td><td>complain about sth</td><td class="en">They complained about the noise.</td></tr>
      <tr><td class="en"><b>deny</b></td><td>deny doing</td><td class="en">He denied stealing the money.</td></tr>
      <tr><td class="en"><b>insist on</b></td><td>insist on doing</td><td class="en">She insisted on paying.</td></tr>
      <tr><td class="en"><b>offer</b></td><td>offer to do</td><td class="en">He offered to help.</td></tr>
      <tr><td class="en"><b>promise</b></td><td>promise to do</td><td class="en">She promised to call.</td></tr>
      <tr><td class="en"><b>refuse</b></td><td>refuse to do</td><td class="en">He refused to answer.</td></tr>
      <tr><td class="en"><b>remind sb</b></td><td>remind sb to do</td><td class="en">She reminded me to lock the door.</td></tr>
      <tr><td class="en"><b>suggest</b></td><td>suggest doing</td><td class="en">He suggested going out.</td></tr>
      <tr><td class="en"><b>threaten</b></td><td>threaten to do</td><td class="en">He threatened to leave.</td></tr>
      <tr><td class="en"><b>warn sb</b></td><td>warn sb not to do</td><td class="en">They warned us not to go there.</td></tr>
      <tr><td class="en"><b>agree / decide</b></td><td>agree / decide to do</td><td class="en">She agreed to come.</td></tr>
    </table>

    <h3>Reported Questions – powtórzenie</h3>
    <table>
      <tr><th>Direct</th><th>Reported</th></tr>
      <tr><td class="en">"Where do you live?"</td><td class="en">He asked me where I lived.</td></tr>
      <tr><td class="en">"Are you tired?"</td><td class="en">She asked me if I was tired.</td></tr>
      <tr><td class="en">"What time does it start?"</td><td class="en">He asked what time it started.</td></tr>
      <tr><td class="en">"Have you finished?"</td><td class="en">She asked if I had finished.</td></tr>
    </table>
    <p><b>Uwaga:</b> brak inwersji, brak "do/does/did".</p>

    <h3>Reported Commands & Requests – powtórzenie</h3>
    <table>
      <tr><td class="en">"Close the door." → He told me to close the door.</td></tr>
      <tr><td class="en">"Don't touch it." → She told me not to touch it.</td></tr>
      <tr><td class="en">"Please help me." → He asked me to help him.</td></tr>
    </table>

    <h3>Zmiana określeń czasu i miejsca</h3>
    <table>
      <tr><td class="en">now → then</td><td class="en">here → there</td></tr>
      <tr><td class="en">today → that day</td><td class="en">this → that</td></tr>
      <tr><td class="en">tomorrow → the next day</td><td class="en">these → those</td></tr>
      <tr><td class="en">yesterday → the day before</td><td class="en">next week → the following week</td></tr>
      <tr><td class="en">last week → the week before</td><td class="en">ago → before</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> gdy czasownik wprowadzający jest w <b>Present Simple</b> – <b>NIE</b> cofamy czasów.<br>
      <span class="en">He says he is tired.</span> (nie "was tired") – bo to wciąż prawda.<br>
      Ale: <span class="en">He said he was tired.</span> – bo mówił w przeszłości.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Przekształć na mowę zależną (statements)" },
    { type: "gap", text: '<span class="en">"I am very busy." → He said he ________ very busy.</span>', answers: ["was"], wide: true },
    { type: "gap", text: '<span class="en">"I have finished my homework." → She said she ________ her homework.</span>', answers: ["had finished"], wide: true },
    { type: "gap", text: '<span class="en">"I will call you." → He said he ________ call me.</span>', answers: ["would"], wide: true },
    { type: "gap", text: '<span class="en">"I can help." → She said she ________ help.</span>', answers: ["could"], wide: true },
    { type: "gap", text: '<span class="en">"I saw him yesterday." → He said he ________ him ________.</span>', answers: ["had seen, the day before"] },
    { type: "header", text: "B. Reported questions" },
    { type: "gap", text: '<span class="en">"Are you tired?" → She asked me ________ I was tired.</span>', answers: ["if", "whether"], wide: true },
    { type: "gap", text: '<span class="en">"Where do you live?" → He asked me where ________.</span>', answers: ["i lived"], wide: true },
    { type: "gap", text: '<span class="en">"What time is it?" → She asked me what time ________.</span>', answers: ["it was"], wide: true },
    { type: "gap", text: '<span class="en">"Have you finished?" → He asked me if I ________.</span>', answers: ["had finished"], wide: true },
    { type: "gap", text: '<span class="en">"Can you help me?" → She asked me if I ________ help her.</span>', answers: ["could"], wide: true },
    { type: "header", text: "C. Reported commands / requests" },
    { type: "gap", text: '<span class="en">"Close the door." → He told me ________ the door.</span>', answers: ["to close"], wide: true },
    { type: "gap", text: '<span class="en">"Don\'t touch it." → She told me ________ touch it.</span>', answers: ["not to"], wide: true },
    { type: "gap", text: '<span class="en">"Please help me." → He asked me ________ him.</span>', answers: ["to help"], wide: true },
    { type: "gap", text: '<span class="en">"Wait for me!" → She told me ________ for her.</span>', answers: ["to wait"], wide: true },
    { type: "header", text: "D. Reporting verbs – uzupełnij" },
    { type: "gap", text: '<span class="en">He ________ me of lying. (accuse)</span>', answers: ["accused"] },
    { type: "gap", text: '<span class="en">She ________ breaking the vase. (admit)</span>', answers: ["admitted"] },
    { type: "gap", text: '<span class="en">He ________ for being late. (apologise)</span>', answers: ["apologised", "apologized"] },
    { type: "gap", text: '<span class="en">He ________ stealing the money. (deny)</span>', answers: ["denied"] },
    { type: "gap", text: '<span class="en">She ________ on paying. (insist)</span>', answers: ["insisted"] },
    { type: "gap", text: '<span class="en">He ________ to help. (offer)</span>', answers: ["offered"] },
    { type: "gap", text: '<span class="en">He ________ to answer. (refuse)</span>', answers: ["refused"] },
    { type: "gap", text: '<span class="en">He ________ going out. (suggest)</span>', answers: ["suggested"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">She asked me where did I live. → ________</span>', answers: ["she asked me where i lived", "she asked me where i lived."], wide: true },
    { type: "gap", text: '<span class="en">He said me he was tired. → ________</span>', answers: ["he told me he was tired", "he told me he was tired.", "he said he was tired", "he said he was tired."], wide: true },
    { type: "gap", text: '<span class="en">He suggested to go out. → ________</span>', answers: ["he suggested going out", "he suggested going out."], wide: true },
    { type: "gap", text: '<span class="en">She accused me to lie. → ________</span>', answers: ["she accused me of lying", "she accused me of lying."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Powiedział, że jest zmęczony.</span>', answers: ["he said he was tired", "he said he was tired.", "he said that he was tired", "he said that he was tired."], wide: true },
    { type: "gap", text: '<span class="pl">Zapytała mnie, czy mam czas.</span>', answers: ["she asked me if i had time", "she asked me if i had time.", "she asked me whether i had time", "she asked me whether i had time."], wide: true },
    { type: "gap", text: '<span class="pl">Powiedział mi, żebym zamknął drzwi.</span>', answers: ["he told me to close the door", "he told me to close the door.", "he asked me to close the door", "he asked me to close the door."], wide: true },
    { type: "gap", text: '<span class="pl">Zaproponował, żebyśmy poszli do kina.</span>', answers: ["he suggested going to the cinema", "he suggested going to the cinema."], wide: true },
    { type: "gap", text: '<span class="pl">Obiecał mi pomóc.</span>', answers: ["he promised to help me", "he promised to help me."], wide: true },
    { type: "gap", text: '<span class="pl">Ostrzegł mnie, żebym tam nie szedł.</span>', answers: ["he warned me not to go there", "he warned me not to go there.", "she warned me not to go there", "she warned me not to go there."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Przekształć 5 zdań, które ktoś powiedział, na mowę zależną. Użyj różnych czasowników wprowadzających.", placeholder: "np. My mother told me... My friend asked... He suggested..." }
  ],
  test: [
    { q: "He said he ______ tired.", opcje: ["is", "was", "were", "be"], poprawna: 1, wyjasnienie: "am → was." },
    { q: "She asked me ______ I had time.", opcje: ["if", "that", "what", "when"], poprawna: 0, wyjasnienie: "Yes/No question → if / whether." },
    { q: "He asked me where ______.", opcje: ["did I live", "I lived", "do I live", "I live"], poprawna: 1, wyjasnienie: "Bez inwersji w reported question." },
    { q: "He told me ______ the door.", opcje: ["close", "to close", "closing", "closed"], poprawna: 1, wyjasnienie: "Command → tell sb to do." },
    { q: "She told me ______ touch it.", opcje: ["not", "to not", "not to", "don't to"], poprawna: 2, wyjasnienie: "not to + czasownik." },
    { q: "He ______ going out.", opcje: ["suggested", "advised", "told", "warned"], poprawna: 0, wyjasnienie: "suggest + -ing." },
    { q: "She ______ to help me.", opcje: ["offered", "offering", "offers", "offer"], poprawna: 0, wyjasnienie: "offer to do." },
    { q: "He ______ me of lying.", opcje: ["accused", "blamed", "told", "said"], poprawna: 0, wyjasnienie: "accuse sb of doing." },
    { q: '"I will come." → He said he ______ come.', opcje: ["will", "would", "is", "can"], poprawna: 1, wyjasnienie: "will → would." },
    { q: "Które zdanie jest poprawne?", opcje: ["She asked me where did I live.", "She asked me where I lived.", "She asked me where do I live.", "She asked me where I live."], poprawna: 1, wyjasnienie: "Reported question – bez inwersji, cofamy czas." }
  ]
};

/* ============================================================
   G7B2 – Passive Voice – zaawansowane
============================================================ */
window.LESSON_DATA["G7B2"] = {
  tytul: "Strona bierna – poziom zaawansowany",
  poziom: "B2",
  dzial: "G7",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      The old town hall is being renovated at the moment. It is said to be one of the oldest buildings in the region, and it has been visited by thousands of tourists over the years. Before the renovation started, all the documents had been moved to a safe place. The work is expected to be finished by the end of next year. Unfortunately, some of the original features had to be replaced, and the paintings will have to be carefully restored. It is believed that the renovation will attract even more visitors to the city.
    </p>

    <h3>Powtórzenie podstaw</h3>
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

    <h3>Nowe czasy i konstrukcje</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Budowa</th><th>Przykład</th></tr>
      <tr><td>Present Continuous</td><td class="en">am/is/are being + III</td><td class="en">The house is being built.</td></tr>
      <tr><td>Past Continuous</td><td class="en">was/were being + III</td><td class="en">The car was being repaired.</td></tr>
      <tr><td>Future Perfect</td><td class="en">will have been + III</td><td class="en">The bridge will have been completed by June.</td></tr>
      <tr><td>Modal Perfect</td><td class="en">modal + have been + III</td><td class="en">The letter should have been sent.</td></tr>
      <tr><td>Infinityw bierny</td><td class="en">to be + III</td><td class="en">The room needs to be cleaned.</td></tr>
      <tr><td>Gerund bierny</td><td class="en">being + III</td><td class="en">I hate being told what to do.</td></tr>
    </table>

    <h3>Impersonal Passive – it is said / he is said to…</h3>
    <p>Gdy mówimy, że <b>ktoś coś twierdzi</b>, ale nie wskazujemy autora wypowiedzi.</p>
    <table>
      <tr><th>Forma</th><th>Przykład</th></tr>
      <tr><td class="en"><b>It is said / believed / thought that…</b></td><td class="en">It is said that he is very rich.</td></tr>
      <tr><td class="en"><b>He is said to + V</b></td><td class="en">He is said to be very rich.</td></tr>
      <tr><td class="en"><b>He is said to have + III</b></td><td class="en">He is said to have left the country.</td></tr>
      <tr><td class="en"><b>It is reported / expected / known that…</b></td><td class="en">It is reported that the company will close.</td></tr>
    </table>
    <table>
      <tr><td class="en">People say he is a genius. = <b>It is said that he is a genius. = He is said to be a genius.</b></td></tr>
      <tr><td class="en">People believe she stole the money. = <b>It is believed that she stole the money. = She is believed to have stolen the money.</b></td></tr>
    </table>

    <h3>Passive with two objects</h3>
    <table>
      <tr><th>Active</th><th>Passive 1</th><th>Passive 2</th></tr>
      <tr>
        <td class="en">They gave me a present.</td>
        <td class="en">I was given a present. <span class="pl">(bardziej naturalne)</span></td>
        <td class="en">A present was given to me.</td>
      </tr>
      <tr>
        <td class="en">They will send you the details.</td>
        <td class="en">You will be sent the details.</td>
        <td class="en">The details will be sent to you.</td>
      </tr>
    </table>

    <h3>Have something done (kausatywne)</h3>
    <p>Gdy <b>ktoś inny wykonuje dla nas czynność</b>:</p>
    <table>
      <tr><td class="en">I had my hair cut. <span class="pl">(fryzjer obciął mi włosy)</span></td></tr>
      <tr><td class="en">She had her car repaired. <span class="pl">(mechanik naprawił jej auto)</span></td></tr>
      <tr><td class="en">We are having our house painted. <span class="pl">(malarze malują nasz dom)</span></td></tr>
      <tr><td class="en">He got his shoes cleaned. <span class="pl">(get – potocznie)</span></td></tr>
    </table>

    <h3>Passive + by + wykonawca</h3>
    <table>
      <tr><td class="en">The book was written <b>by</b> Orwell.</td></tr>
      <tr><td class="en">The song was composed <b>by</b> Chopin.</td></tr>
      <tr><td class="en">The building was designed <b>by</b> a famous architect.</td></tr>
    </table>
    <p>Jeśli wykonawca jest nieznany, nieistotny lub oczywisty – <b>pomijamy</b> "by".</p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>be being + III</b> = Continuous Passive (w trakcie)<br>
      <b>It is said that…</b> = impersonalna forma – formalnie, w mediach i tekstach naukowych<br>
      <b>have sth done</b> = ktoś inny to zrobił dla nas
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij passive (Continuous / Perfect / Future)" },
    { type: "gap", text: '<span class="en">The house ________ (build) at the moment.</span>', answers: ["is being built"] },
    { type: "gap", text: '<span class="en">The car ________ (repair) when I arrived.</span>', answers: ["was being repaired"] },
    { type: "gap", text: '<span class="en">The work ________ (finish) already.</span>', answers: ["has been finished"] },
    { type: "gap", text: '<span class="en">The documents ________ (send) before the meeting.</span>', answers: ["had been sent"] },
    { type: "gap", text: '<span class="en">The bridge ________ (complete) by June.</span>', answers: ["will have been completed"] },
    { type: "gap", text: '<span class="en">The letter ________ (should / send) yesterday.</span>', answers: ["should have been sent"] },
    { type: "header", text: "B. Zamień na stronę bierną" },
    { type: "gap", text: '<span class="en">They are building a new school. → A new school ________.</span>', answers: ["is being built"], wide: true },
    { type: "gap", text: '<span class="en">Someone has stolen my bike. → My bike ________.</span>', answers: ["has been stolen"], wide: true },
    { type: "gap", text: '<span class="en">You must follow the rules. → The rules ________.</span>', answers: ["must be followed"], wide: true },
    { type: "gap", text: '<span class="en">They will announce the results tomorrow. → The results ________ tomorrow.</span>', answers: ["will be announced"], wide: true },
    { type: "gap", text: '<span class="en">They gave me a present. → I ________ a present.</span>', answers: ["was given"], wide: true },
    { type: "gap", text: '<span class="en">They will send you the details. → You ________ the details.</span>', answers: ["will be sent"], wide: true },
    { type: "header", text: "C. Impersonal Passive – przekształć" },
    { type: "gap", text: '<span class="en">People say he is very rich. → It is ________ that he is very rich.</span>', answers: ["said"], wide: true },
    { type: "gap", text: '<span class="en">People believe she stole the money. → She is ________ to have stolen the money.</span>', answers: ["believed"], wide: true },
    { type: "gap", text: '<span class="en">They report that the company will close. → It is ________ that the company will close.</span>', answers: ["reported"], wide: true },
    { type: "gap", text: '<span class="en">People think he lives abroad. → He is ________ to live abroad.</span>', answers: ["thought"], wide: true },
    { type: "header", text: "D. Have something done – uzupełnij" },
    { type: "gap", text: '<span class="en">I ________ my hair ________ yesterday. (obciąć)</span>', answers: ["had, cut"] },
    { type: "gap", text: '<span class="en">She ________ her car ________ last week. (naprawić)</span>', answers: ["had, repaired"] },
    { type: "gap", text: '<span class="en">We are ________ our house ________. (malować)</span>', answers: ["having, painted"] },
    { type: "gap", text: '<span class="en">He ________ his shoes ________. (wyczyścić – potocznie)</span>', answers: ["got, cleaned"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">The house is being build. → ________</span>', answers: ["the house is being built", "the house is being built."], wide: true },
    { type: "gap", text: '<span class="en">The work has being finished. → ________</span>', answers: ["the work has been finished", "the work has been finished."], wide: true },
    { type: "gap", text: '<span class="en">He is said to be very rich. (ktoś bogaty) → ________ (z People say)</span>', answers: ["people say he is very rich", "people say he is very rich.", "people say that he is very rich", "people say that he is very rich."], wide: true },
    { type: "gap", text: '<span class="en">I cut my hair yesterday. (fryzjer) → ________</span>', answers: ["i had my hair cut yesterday", "i had my hair cut yesterday."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Dom jest w tej chwili remontowany.</span>', answers: ["the house is being renovated at the moment", "the house is being renovated at the moment.", "the house is being renovated right now"], wide: true },
    { type: "gap", text: '<span class="pl">Mówi się, że jest bardzo bogaty.</span>', answers: ["it is said that he is very rich", "it is said that he is very rich.", "he is said to be very rich", "he is said to be very rich."], wide: true },
    { type: "gap", text: '<span class="pl">Wierzy się, że ukradła pieniądze.</span>', answers: ["it is believed that she stole the money", "it is believed that she stole the money.", "she is believed to have stolen the money", "she is believed to have stolen the money."], wide: true },
    { type: "gap", text: '<span class="pl">Obciąłem wczoraj włosy (u fryzjera).</span>', answers: ["i had my hair cut yesterday", "i had my hair cut yesterday."], wide: true },
    { type: "gap", text: '<span class="pl">Raport powinien był zostać wysłany wczoraj.</span>', answers: ["the report should have been sent yesterday", "the report should have been sent yesterday."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Opisz budynek lub miejsce w twoim mieście, używając różnych form strony biernej (is being, has been, will be, is said to...).", placeholder: "np. The old church was built... It is being renovated... It is said to be..." }
  ],
  test: [
    { q: "The house ______ at the moment.", opcje: ["is building", "is being built", "is built", "has built"], poprawna: 1, wyjasnienie: "Continuous Passive → is being + III." },
    { q: "The car ______ when I arrived.", opcje: ["was repairing", "was being repaired", "was repaired", "has repaired"], poprawna: 1, wyjasnienie: "Past Continuous Passive → was being + III." },
    { q: "The work ______ already.", opcje: ["has finished", "has been finished", "is finishing", "was finish"], poprawna: 1, wyjasnienie: "Present Perfect Passive → has been + III." },
    { q: "The bridge ______ by June.", opcje: ["will complete", "will be completed", "will have been completed", "is completing"], poprawna: 2, wyjasnienie: "Future Perfect Passive → will have been + III." },
    { q: "The letter ______ yesterday.", opcje: ["should send", "should be sent", "should have been sent", "should been sent"], poprawna: 2, wyjasnienie: "Modal Perfect Passive → should have been + III." },
    { q: "People say he is a genius. → ______ said that he is a genius.", opcje: ["He is", "It is", "There is", "That is"], poprawna: 1, wyjasnienie: "Impersonal Passive → It is said that…" },
    { q: "People believe she stole the money. → She is believed to ______ stolen the money.", opcje: ["have", "has", "having", "had"], poprawna: 0, wyjasnienie: "is believed to have + III." },
    { q: "They gave me a present. → I ______ a present.", opcje: ["was given", "was gave", "gave", "have given"], poprawna: 0, wyjasnienie: "Passive with two objects → I was given." },
    { q: "I had my hair ______ yesterday.", opcje: ["cut", "cutting", "to cut", "cuts"], poprawna: 0, wyjasnienie: "have sth done → III forma (cut)." },
    { q: "Które zdanie jest poprawne?", opcje: ["The house is being build.", "The house is being built.", "The house is been built.", "The house is being building."], poprawna: 1, wyjasnienie: "be + being + III forma." }
  ]
};

/* ============================================================
   G8B2 – Inversion & Emphasis
============================================================ */
window.LESSON_DATA["G8B2"] = {
  tytul: "Inwersja i emfaza",
  poziom: "B2",
  dzial: "G8",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Never have I seen such a spectacular sunset. Not only was the sky a brilliant orange, but the whole valley was bathed in golden light. Rarely do we get the chance to witness something so beautiful. Hardly had the sun set when the stars began to appear. Only then did I realise how small we are compared to nature. Not until I saw it with my own eyes did I truly understand its power. Little did I know that this moment would stay with me forever.
    </p>

    <h3>Po co stosujemy inwersję i emfazę?</h3>
    <p>Żeby <b>podkreślić</b> informację, wywołać wrażenie, nadać formalny lub literacki styl. Częsta w:
      <b>literaturze</b>, <b>przemówieniach</b>, <b>tekstach formalnych</b>, <b>dziennikarstwie</b>.</p>

    <h3>Inwersja po wyrażeniach przeczących</h3>
    <p>Gdy zdanie zaczyna się od <b>negatywnego przysłówka</b> – operator idzie przed podmiot:</p>
    <table>
      <tr><th>Bez inwersji</th><th>Z inwersją (formalnie)</th></tr>
      <tr><td class="en">I have never seen such a thing.</td><td class="en"><b>Never have I seen</b> such a thing.</td></tr>
      <tr><td class="en">I rarely complain.</td><td class="en"><b>Rarely do I</b> complain.</td></tr>
      <tr><td class="en">She had hardly arrived when…</td><td class="en"><b>Hardly had she arrived</b> when…</td></tr>
      <tr><td class="en">I had no sooner left than…</td><td class="en"><b>No sooner had I left</b> than…</td></tr>
      <tr><td class="en">I little knew that…</td><td class="en"><b>Little did I know</b> that…</td></tr>
      <tr><td class="en">I seldom see him.</td><td class="en"><b>Seldom do I</b> see him.</td></tr>
      <tr><td class="en">We not only lost the match, but…</td><td class="en"><b>Not only did we lose</b> the match, but…</td></tr>
      <tr><td class="en">I have never before met him.</td><td class="en"><b>Never before have I met</b> him.</td></tr>
    </table>

    <h3>Inwersja po "only"</h3>
    <table>
      <tr><td class="en">I only realised later that…</td><td class="en"><b>Only later did I realise</b> that…</td></tr>
      <tr><td class="en">I understood only then.</td><td class="en"><b>Only then did I understand</b>.</td></tr>
      <tr><td class="en">We can succeed only by working together.</td><td class="en"><b>Only by working together can we succeed</b>.</td></tr>
      <tr><td class="en">I found out only when she called.</td><td class="en"><b>Only when she called did I find out</b>.</td></tr>
    </table>

    <h3>So / Such dla emfazy</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>so + przymiotnik + that</b></td><td>tak … że</td><td class="en">The view was so beautiful that we stopped.</td></tr>
      <tr><td class="en"><b>such a + przymiotnik + rzeczownik + that</b></td><td>taki … że</td><td class="en">It was such a difficult test that many failed.</td></tr>
      <tr><td class="en"><b>so + przysłówek</b></td><td>tak</td><td class="en">She spoke so quietly that I couldn't hear.</td></tr>
      <tr><td class="en"><b>so much / so many</b></td><td>tak dużo / tak wiele</td><td class="en">There were so many people that we couldn't move.</td></tr>
    </table>
    <div class="tip-box">
      <b>Uwaga:</b> "so" + przymiotnik, "such" + rzeczownik.<br>
      ✅ <span class="en">so beautiful</span> · <span class="en">such a beautiful day</span><br>
      ❌ <span class="en">so a beautiful day</span>
    </div>

    <h3>Emfaza przez "do / does / did"</h3>
    <p>W twierdzeniach możemy dodać <b>do / does / did</b> dla podkreślenia:</p>
    <table>
      <tr><td class="en">I <b>do</b> like this song! <span class="pl">(naprawdę lubię)</span></td></tr>
      <tr><td class="en">She <b>does</b> care about you.</td></tr>
      <tr><td class="en">I <b>did</b> tell you! <span class="pl">(mówiłem ci!)</span></td></tr>
    </table>

    <h3>Cleft sentences – zdania rozszczepione</h3>
    <p>Rozbijają zdanie, żeby podkreślić konkretną informację:</p>
    <table>
      <tr><th>Typ</th><th>Budowa</th><th>Przykład</th></tr>
      <tr><td>It-cleft</td><td class="en">It is / was … that / who</td><td class="en">It was John who broke the window.</td></tr>
      <tr><td>Wh-cleft</td><td class="en">What … is / was</td><td class="en">What I need is a holiday.</td></tr>
      <tr><td>All-cleft</td><td class="en">All … is / was</td><td class="en">All I want is peace and quiet.</td></tr>
      <tr><td>The thing/reason</td><td class="en">The thing / reason … is / was</td><td class="en">The reason I called is to apologise.</td></tr>
    </table>

    <h3>Emfaza przez "the very", "indeed", "on earth"</h3>
    <table>
      <tr><td class="en">This is <b>the very</b> book I was looking for!</td></tr>
      <tr><td class="en">Thank you <b>very much indeed</b>.</td></tr>
      <tr><td class="en">What <b>on earth</b> are you doing?</td></tr>
      <tr><td class="en">It was <b>himself</b> who called. <span class="pl">(on sam)</span></td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      Inwersja pojawia się po: <b>Never, Rarely, Seldom, Hardly, No sooner, Little, Not only, Only then, Only when</b>.<br>
      <b>Hardly had … when …</b> · <b>No sooner had … than …</b> – typowe pary.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Przekształć na inwersję" },
    { type: "gap", text: '<span class="en">I have never seen such a thing. → Never ________ such a thing.</span>', answers: ["have i seen"], wide: true },
    { type: "gap", text: '<span class="en">I rarely complain. → Rarely ________ complain.</span>', answers: ["do i"], wide: true },
    { type: "gap", text: '<span class="en">She had hardly arrived when the phone rang. → Hardly ________ when the phone rang.</span>', answers: ["had she arrived"], wide: true },
    { type: "gap", text: '<span class="en">I had no sooner left than it started raining. → No sooner ________ than it started raining.</span>', answers: ["had i left"], wide: true },
    { type: "gap", text: '<span class="en">I little knew that she would become famous. → Little ________ that she would become famous.</span>', answers: ["did i know"], wide: true },
    { type: "gap", text: '<span class="en">I only realised later that I had made a mistake. → Only later ________ that I had made a mistake.</span>', answers: ["did i realise", "did i realize"], wide: true },
    { type: "gap", text: '<span class="en">We can succeed only by working together. → Only by working together ________.</span>', answers: ["can we succeed"], wide: true },
    { type: "header", text: "B. So czy such?" },
    { type: "gap", text: '<span class="en">The view was ________ beautiful that we stopped.</span>', answers: ["so"] },
    { type: "gap", text: '<span class="en">It was ________ a difficult test that many students failed.</span>', answers: ["such"] },
    { type: "gap", text: '<span class="en">She spoke ________ quietly that I couldn\'t hear her.</span>', answers: ["so"] },
    { type: "gap", text: '<span class="en">There were ________ many people that we couldn\'t move.</span>', answers: ["so"] },
    { type: "gap", text: '<span class="en">He is ________ a nice person.</span>', answers: ["such"] },
    { type: "gap", text: '<span class="en">The film was ________ boring that I fell asleep.</span>', answers: ["so"] },
    { type: "header", text: "C. Emfaza przez do / does / did" },
    { type: "gap", text: '<span class="en">I ________ like this song! (naprawdę lubię)</span>', answers: ["do"] },
    { type: "gap", text: '<span class="en">She ________ care about you. (naprawdę jej zależy)</span>', answers: ["does"] },
    { type: "gap", text: '<span class="en">I ________ tell you! (mówiłem ci!)</span>', answers: ["did"] },
    { type: "header", text: "D. Cleft sentences – uzupełnij" },
    { type: "gap", text: '<span class="en">John broke the window. → It was John ________ broke the window.</span>', answers: ["who", "that"], wide: true },
    { type: "gap", text: '<span class="en">I need a holiday. → What I need ________ a holiday.</span>', answers: ["is"], wide: true },
    { type: "gap", text: '<span class="en">I want peace and quiet. → All I want ________ peace and quiet.</span>', answers: ["is"], wide: true },
    { type: "gap", text: '<span class="en">I called to apologise. → The reason I called ________ to apologise.</span>', answers: ["is", "was"], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">Never I have seen such a thing. → ________</span>', answers: ["never have i seen such a thing", "never have i seen such a thing."], wide: true },
    { type: "gap", text: '<span class="en">Rarely I complain. → ________</span>', answers: ["rarely do i complain", "rarely do i complain."], wide: true },
    { type: "gap", text: '<span class="en">So a beautiful day! → ________</span>', answers: ["such a beautiful day", "such a beautiful day!"], wide: true },
    { type: "gap", text: '<span class="en">Little I knew that... → ________</span>', answers: ["little did i know that", "little did i know that...", "little did i know"], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Nigdy nie widziałem takiego widoku.</span>', answers: ["never have i seen such a view", "never have i seen such a view.", "i have never seen such a view", "i have never seen such a view."], wide: true },
    { type: "gap", text: '<span class="pl">Ledwo wszedł, kiedy zadzwonił telefon.</span>', answers: ["hardly had he come in when the phone rang", "hardly had he come in when the phone rang.", "hardly had he entered when the phone rang"], wide: true },
    { type: "gap", text: '<span class="pl">Dopiero później zdałem sobie sprawę, że się myliłem.</span>', answers: ["only later did i realise that i was wrong", "only later did i realise that i was wrong.", "only later did i realize that i was wrong"], wide: true },
    { type: "gap", text: '<span class="pl">Był tak zmęczony, że zasnął od razu.</span>', answers: ["he was so tired that he fell asleep immediately", "he was so tired that he fell asleep immediately.", "he was so tired that he fell asleep at once"], wide: true },
    { type: "gap", text: '<span class="pl">To Jan wygrał konkurs.</span>', answers: ["it was john who won the competition", "it was john who won the competition.", "it was john that won the competition"], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Napisz krótką historię lub opinię, używając inwersji i emfazy (Never have I..., Hardly had..., Only then..., It was... who...).", placeholder: "np. Never have I felt... Hardly had I arrived when... It was my friend who..." }
  ],
  test: [
    { q: "Never ______ such a thing.", opcje: ["I have seen", "have I seen", "I saw", "did I see"], poprawna: 1, wyjasnienie: "Po 'Never' na początku – inwersja." },
    { q: "Rarely ______ complain.", opcje: ["do I", "I do", "I", "am I"], poprawna: 0, wyjasnienie: "Inwersja po 'Rarely'." },
    { q: "Hardly ______ when the phone rang.", opcje: ["had she arrived", "she had arrived", "she arrived", "did she arrive"], poprawna: 0, wyjasnienie: "Inwersja z Past Perfect." },
    { q: "No sooner ______ than it started raining.", opcje: ["had I left", "I had left", "I left", "did I leave"], poprawna: 0, wyjasnienie: "No sooner had + podmiot + III." },
    { q: "Little ______ that she would become famous.", opcje: ["I knew", "did I know", "I did know", "knew I"], poprawna: 1, wyjasnienie: "Inwersja po 'Little'." },
    { q: "Only later ______ my mistake.", opcje: ["I realised", "did I realise", "I did realise", "realised I"], poprawna: 1, wyjasnienie: "Po 'Only later' – inwersja." },
    { q: "The view was ______ beautiful that we stopped.", opcje: ["so", "such", "such a", "very"], poprawna: 0, wyjasnienie: "so + przymiotnik." },
    { q: "It was ______ a difficult test that many failed.", opcje: ["so", "such", "such a", "so a"], poprawna: 1, wyjasnienie: "such + a + przymiotnik + rzeczownik." },
    { q: "______ John who broke the window.", opcje: ["It was", "There was", "He was", "That was"], poprawna: 0, wyjasnienie: "It-cleft: It was … who/that." },
    { q: "______ I need is a holiday.", opcje: ["What", "That", "Which", "It"], poprawna: 0, wyjasnienie: "Wh-cleft: What I need is…" }
  ]
};


/* ============================================================
   G9B2 – Articles a/an/the – zaawansowane
============================================================ */
window.LESSON_DATA["G9B2"] = {
  tytul: "Przedimki – poziom zaawansowany",
  poziom: "B2",
  dzial: "G9",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      The internet has completely changed the way we live. When I was a child, there was no internet at home, and going online was a special event. Now I use the internet every day – I read the news, watch videos on YouTube and message my friends. The information on some websites is not always reliable, so I try to check the source. What I like most about the internet is that it connects people from all over the world. What I dislike is that it can waste a lot of our time. On the whole, I think the advantages outweigh the disadvantages. Life without the internet seems almost impossible today.
    </p>

    <h3>Zaawansowane użycie THE</h3>
    <table>
      <tr><th>Kiedy używamy "the"</th><th>Przykład</th></tr>
      <tr><td>Unikaty (jedno w swoim rodzaju)</td><td class="en">the sun, the moon, the internet, the sky</td></tr>
      <tr><td>Rzeki, morza, oceany, pasma górskie</td><td class="en">the Vistula, the Baltic, the Alps</td></tr>
      <tr><td>Kraje w liczbie mnogiej i z "of"</td><td class="en">the Netherlands, the USA, the United Kingdom</td></tr>
      <tr><td>Instrumenty muzyczne</td><td class="en">play the piano, play the guitar</td></tr>
      <tr><td>Rodziny, narodowości</td><td class="en">the Smiths, the Polish, the French</td></tr>
      <tr><td>Superlatywy i "the only", "the first"</td><td class="en">the best, the only, the first</td></tr>
      <tr><td>Konkretna grupa (gdy dodajemy szczegół)</td><td class="en">The students in my class are hard-working.</td></tr>
      <tr><td>Media i rozrywka</td><td class="en">the radio, the news, the cinema, the theatre</td></tr>
    </table>

    <h3>Zaawansowane użycie A / AN</h3>
    <table>
      <tr><th>Kiedy używamy "a/an"</th><th>Przykład</th></tr>
      <tr><td>Pierwsza wzmianka</td><td class="en">I saw a film yesterday.</td></tr>
      <tr><td>Zawody, narodowości (w liczbie pojedynczej)</td><td class="en">She is a doctor. He is an Italian.</td></tr>
      <tr><td>"Jeden z wielu"</td><td class="en">Give me a pen.</td></tr>
      <tr><td>Okresy czasu (a week, a month)</td><td class="en">twice a week, 5 euros a kilo</td></tr>
      <tr><td>"taki, jakiś" (opis)</td><td class="en">That's a very interesting idea.</td></tr>
      <tr><td>Zamiast liczby "jeden"</td><td class="en">A hundred people came.</td></tr>
    </table>

    <h3>Zero article (bez przedimka)</h3>
    <table>
      <tr><th>Kiedy NIE używamy przedimka</th><th>Przykład</th></tr>
      <tr><td>Liczba mnoga ogólnie</td><td class="en">I like dogs. (nie "the dogs")</td></tr>
      <tr><td>Niepoliczalne ogólnie</td><td class="en">Water is essential for life.</td></tr>
      <tr><td>Większość krajów, miast, kontynentów</td><td class="en">Poland, Warsaw, Europe</td></tr>
      <tr><td>Posiłki</td><td class="en">I eat breakfast at 8.</td></tr>
      <tr><td>Sport, gry</td><td class="en">I play football. I play chess.</td></tr>
      <tr><td>Języki, przedmioty szkolne</td><td class="en">I speak English. I study history.</td></tr>
      <tr><td>Dni, miesiące, święta</td><td class="en">on Monday, in May, at Christmas</td></tr>
      <tr><td>Instytucje (ogólnie, w funkcji)</td><td class="en">go to school, at work, at home, in prison</td></tr>
      <tr><td>Imiona, nazwiska, tytuły</td><td class="en">Anna, Mr Smith, President Biden</td></tr>
    </table>

    <h3>Trudne przypadki – zmiana znaczenia</h3>
    <table>
      <tr><th>Bez przedimka (ogólnie, funkcja)</th><th>Z "the" (konkretne miejsce)</th></tr>
      <tr><td class="en">go to school <span class="pl">(uczyć się)</span></td><td class="en">go to the school <span class="pl">(iść do budynku)</span></td></tr>
      <tr><td class="en">go to bed <span class="pl">(iść spać)</span></td><td class="en">go to the bed <span class="pl">(podejść do łóżka)</span></td></tr>
      <tr><td class="en">be in hospital <span class="pl">(jako pacjent)</span></td><td class="en">be in the hospital <span class="pl">(w budynku)</span></td></tr>
      <tr><td class="en">be in prison <span class="pl">(jako więzień)</span></td><td class="en">be in the prison <span class="pl">(w budynku)</span></td></tr>
      <tr><td class="en">at university <span class="pl">(studiować)</span></td><td class="en">at the university <span class="pl">(w miejscu)</span></td></tr>
      <tr><td class="en">at sea <span class="pl">(na morzu)</span></td><td class="en">at the sea <span class="pl">(nad morzem)</span></td></tr>
    </table>

    <h3>Uniwersalne zwroty bez przedimka</h3>
    <table>
      <tr><td class="en">by car / by bus / by train / by plane</td><td class="pl">samochodem / autobusem / pociągiem / samolotem</td></tr>
      <tr><td class="en">on foot</td><td class="pl">pieszo</td></tr>
      <tr><td class="en">at night / at noon / at midnight</td><td class="pl">w nocy / w południe / o północy</td></tr>
      <tr><td class="en">in the morning / in the afternoon / in the evening</td><td class="pl">rano / po południu / wieczorem</td></tr>
      <tr><td class="en">watch TV / listen to the radio</td><td class="pl">oglądać TV / słuchać radia</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> przedimek zależy od tego, <b>jak myślimy o rzeczy</b> – ogólnie (bez przedimka) czy konkretnie (the).<br>
      <span class="en">Life is beautiful.</span> (życie ogólnie) vs <span class="en">The life of a soldier is hard.</span> (konkretne życie)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Wstaw a / an / the lub – (nic)" },
    { type: "gap", text: '<span class="en">________ sun is very bright today.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I go to ________ school every day.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">She plays ________ piano beautifully.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">________ Netherlands is in Europe.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I like ________ music.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">I eat ________ breakfast at 8.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">He is ________ honest man.</span>', answers: ["an"] },
    { type: "gap", text: '<span class="en">________ Smiths are my neighbours.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I speak ________ English and ________ French.</span>', answers: ["-, -"] },
    { type: "gap", text: '<span class="en">She is ________ best student in the class.</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I go to work by ________ bus.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">We went to ________ Alps last summer.</span>', answers: ["the"] },
    { type: "header", text: "B. Wybierz poprawną formę" },
    { type: "gap", text: '<span class="en">He is in ________ hospital – he had an accident. (jako pacjent)</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">I need to go to ________ hospital to visit my aunt. (budynek)</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">My son goes to ________ school. (uczy się)</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">The parents went to ________ school to meet the teacher. (budynek)</span>', answers: ["the"] },
    { type: "gap", text: '<span class="en">I usually go to ________ bed at 11. (spać)</span>', answers: ["-"] },
    { type: "header", text: "C. Popraw błędy (jeśli są)" },
    { type: "gap", text: '<span class="en">I like the dogs. → ________</span>', answers: ["i like dogs", "i like dogs."], wide: true },
    { type: "gap", text: '<span class="en">She is doctor. → ________</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="en">Sun is very hot today. → ________</span>', answers: ["the sun is very hot today", "the sun is very hot today."], wide: true },
    { type: "gap", text: '<span class="en">I go to the school every day. → ________ (uczę się)</span>', answers: ["i go to school every day", "i go to school every day."], wide: true },
    { type: "gap", text: '<span class="en">I saw a elephant. → ________</span>', answers: ["i saw an elephant", "i saw an elephant."], wide: true },
    { type: "gap", text: '<span class="en">Poland is in the Europe. → ________</span>', answers: ["poland is in europe", "poland is in europe."], wide: true },
    { type: "header", text: "D. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Internet zmienił nasze życie.</span>', answers: ["the internet has changed our lives", "the internet has changed our lives.", "the internet has changed our life", "the internet has changed our life."], wide: true },
    { type: "gap", text: '<span class="pl">Ona jest lekarką.</span>', answers: ["she is a doctor", "she is a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię psy i koty.</span>', answers: ["i like dogs and cats", "i like dogs and cats."], wide: true },
    { type: "gap", text: '<span class="pl">Jestem w szpitalu (jako pacjent).</span>', answers: ["i am in hospital", "i am in hospital.", "i'm in hospital", "i'm in hospital."], wide: true },
    { type: "gap", text: '<span class="pl">Gram na gitarze.</span>', answers: ["i play the guitar", "i play the guitar."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Opisz swój typowy dzień, używając różnych przedimków (a/an, the, brak). Podkreśl trudne przypadki.", placeholder: "np. In the morning I... I go to school by... After school I play the..." }
  ],
  test: [
    { q: "______ sun is very bright today.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Unikat → the." },
    { q: "I go to ______ school every day.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Szkoła ogólnie, w funkcji → bez przedimka." },
    { q: "She plays ______ piano.", opcje: ["a", "an", "the", "-"], poprawna: 2, wyjasnienie: "Instrumenty → the." },
    { q: "I like ______ music.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Niepoliczalne ogólnie → bez przedimka." },
    { q: "He is ______ honest man.", opcje: ["a", "an", "the", "-"], poprawna: 1, wyjasnienie: "Przed samogłoską (h nieme – /ˈɒnɪst/) → an." },
    { q: "He is in ______ hospital (jako pacjent).", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Funkcja: pacjent → bez przedimka." },
    { q: "My son goes to ______ school (uczy się).", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "Funkcja: uczeń → bez przedimka." },
    { q: "______ Smiths are my neighbours.", opcje: ["A", "An", "The", "-"], poprawna: 2, wyjasnienie: "Rodzina → the Smiths." },
    { q: "I go to work by ______ bus.", opcje: ["a", "an", "the", "-"], poprawna: 3, wyjasnienie: "by bus – utrwalone, bez przedimka." },
    { q: "Które zdanie jest poprawne?", opcje: ["Poland is in the Europe.", "Poland is in Europe.", "The Poland is in Europe.", "Poland is in a Europe."], poprawna: 1, wyjasnienie: "Kontynenty – bez przedimka." }
  ]
};

/* ============================================================
   G10B2 – Quantifiers – zaawansowane
============================================================ */
window.LESSON_DATA["G10B2"] = {
  tytul: "Określniki ilości – poziom zaawansowany",
  poziom: "B2",
  dzial: "G10",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      There are plenty of reasons to learn a foreign language, but not everyone has enough time to do it properly. Some people pick up a few phrases here and there, while others spend hours studying every single day. Both approaches have their advantages. Personally, I've tried several methods and I've found that a great deal of progress comes from regular practice rather than long, intensive sessions. Neither of my parents speaks English fluently, but they both encourage me. There's hardly any chance I'll give up now. Most of my friends study languages too, and quite a few of them are already fluent.
    </p>

    <h3>Policzalne i niepoliczalne – przypomnienie</h3>
    <table>
      <tr><th>Policzalne</th><th>Niepoliczalne</th></tr>
      <tr><td>a book, two books, many books</td><td>water, money, advice, information, news, furniture, luggage</td></tr>
      <tr><td>few / a few</td><td>little / a little</td></tr>
      <tr><td>many</td><td>much</td></tr>
      <tr><td>a number of</td><td>an amount of</td></tr>
      <tr><td>a great many</td><td>a great deal of</td></tr>
    </table>

    <h3>Some / Any – utrwalenia</h3>
    <table>
      <tr><td class="en"><b>some</b> – twierdzenia, prośby, propozycje</td><td class="en">Would you like some tea? Could you lend me some money?</td></tr>
      <tr><td class="en"><b>any</b> – pytania, przeczenia</td><td class="en">Do you have any questions? I don't have any.</td></tr>
      <tr><td class="en"><b>any</b> w twierdzeniach – "jakikolwiek"</td><td class="en">Take any book you like.</td></tr>
    </table>

    <h3>Much / Many / A lot of / Plenty of</h3>
    <table>
      <tr><th>Wyrażenie</th><th>Policzalne / Niepoliczalne</th><th>Użycie</th></tr>
      <tr><td class="en">much</td><td>niepoliczalne</td><td>przeczenia, pytania</td></tr>
      <tr><td class="en">many</td><td>policzalne</td><td>przeczenia, pytania</td></tr>
      <tr><td class="en">a lot of / lots of</td><td>oba</td><td>twierdzenia (potocznie)</td></tr>
      <tr><td class="en">plenty of</td><td>oba</td><td>twierdzenia (wystarczająco dużo)</td></tr>
      <tr><td class="en">a great deal of</td><td>niepoliczalne</td><td>formalnie</td></tr>
      <tr><td class="en">a great many</td><td>policzalne</td><td>formalnie</td></tr>
    </table>

    <h3>Few / A few / Little / A little – różnice</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>a few</b></td><td>kilka (pozytywne)</td><td class="en">I have a few friends. <span class="pl">(mam kilku – OK)</span></td></tr>
      <tr><td class="en"><b>few</b></td><td>niewielu (negatywne)</td><td class="en">I have few friends. <span class="pl">(niewielu – smutne)</span></td></tr>
      <tr><td class="en"><b>a little</b></td><td>trochę (pozytywne)</td><td class="en">I have a little money. <span class="pl">(mam trochę – OK)</span></td></tr>
      <tr><td class="en"><b>little</b></td><td>mało (negatywne)</td><td class="en">I have little time. <span class="pl">(mało – problem)</span></td></tr>
      <tr><td class="en"><b>only a few / only a little</b></td><td>tylko kilka / tylko trochę</td><td class="en">There are only a few seats left.</td></tr>
      <tr><td class="en"><b>quite a few</b></td><td>całkiem dużo</td><td class="en">Quite a few people came.</td></tr>
    </table>

    <h3>Both / Either / Neither / None / All</h3>
    <table>
      <tr><th>Wyrażenie</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>both</b> (of)</td><td>oba (z dwóch)</td><td class="en">Both of my sisters are doctors.</td></tr>
      <tr><td class="en"><b>either</b> (of)</td><td>jeden z dwóch / obojętnie który</td><td class="en">Either of them can come.</td></tr>
      <tr><td class="en"><b>neither</b> (of)</td><td>żaden z dwóch</td><td class="en">Neither of them came.</td></tr>
      <tr><td class="en"><b>all</b> (of)</td><td>wszyscy / wszystko (3+)</td><td class="en">All of my friends came.</td></tr>
      <tr><td class="en"><b>none</b> (of)</td><td>żaden z (3+)</td><td class="en">None of them came.</td></tr>
    </table>
    <p><b>Uwaga:</b> po <b>both / all</b> – czasownik w liczbie mnogiej. Po <b>neither / none</b> – może być pojedyncza lub mnoga (formalnie: pojedyncza).</p>

    <h3>Each / Every</h3>
    <table>
      <tr><td class="en"><b>each</b></td><td>każdy osobno (2 lub więcej)</td><td class="en">Each student got a book.</td></tr>
      <tr><td class="en"><b>every</b></td><td>każdy (3+, jako grupa)</td><td class="en">Every student must attend.</td></tr>
    </table>
    <p>Oba + <b>liczba pojedyncza</b>: <span class="en">Each student is… Every student is…</span></p>

    <h3>Whole / All / Both – różnice</h3>
    <table>
      <tr><td class="en"><b>all</b> the students / all students</td><td class="pl">wszyscy uczniowie</td></tr>
      <tr><td class="en"><b>the whole</b> class</td><td class="pl">cała klasa</td></tr>
      <tr><td class="en"><b>every</b> student</td><td class="pl">każdy uczeń (osobno)</td></tr>
      <tr><td class="en"><b>both</b> students</td><td class="pl">obaj uczniowie</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>few</b> i <b>little</b> bez "a" = negatywne (mało, prawie nic)<br>
      <b>a few</b> i <b>a little</b> = pozytywne (kilka, trochę – wystarczająco)<br>
      <b>quite a few</b> = całkiem dużo (paradoksalnie!)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Some / Any – uzupełnij" },
    { type: "gap", text: '<span class="en">Would you like ________ tea?</span>', answers: ["some"] },
    { type: "gap", text: '<span class="en">Do you have ________ questions?</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ money with me.</span>', answers: ["any"] },
    { type: "gap", text: '<span class="en">Take ________ book you like. (= jakikolwiek)</span>', answers: ["any"] },
    { type: "header", text: "B. Much / Many / A lot of / Plenty of" },
    { type: "gap", text: '<span class="en">How ________ money do you have?</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">How ________ books did you read?</span>', answers: ["many"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ time today.</span>', answers: ["much"] },
    { type: "gap", text: '<span class="en">There were ________ people at the concert.</span>', answers: ["a lot of", "lots of", "many"] },
    { type: "gap", text: '<span class="en">Don\'t worry – we have ________ of time.</span>', answers: ["plenty"] },
    { type: "gap", text: '<span class="en">She has made ________ progress this year. (formalnie)</span>', answers: ["a great deal of"] },
    { type: "header", text: "C. Few / A few / Little / A little" },
    { type: "gap", text: '<span class="en">I have ________ friends in this city – I feel lonely. (negatywne)</span>', answers: ["few"] },
    { type: "gap", text: '<span class="en">I have ________ friends here – I\'m happy. (pozytywne)</span>', answers: ["a few"] },
    { type: "gap", text: '<span class="en">We have ________ time left – we need to hurry! (negatywne)</span>', answers: ["little"] },
    { type: "gap", text: '<span class="en">We have ________ time left, so let\'s relax. (pozytywne)</span>', answers: ["a little"] },
    { type: "gap", text: '<span class="en">________ people came to the meeting – only three! (negatywne)</span>', answers: ["few"] },
    { type: "gap", text: '<span class="en">________ people came – the room was almost full! (pozytywne)</span>', answers: ["quite a few"] },
    { type: "header", text: "D. Both / Either / Neither / All / None" },
    { type: "gap", text: '<span class="en">________ of my parents are teachers. (oboje)</span>', answers: ["both"] },
    { type: "gap", text: '<span class="en">________ of them came – I was disappointed. (żaden z dwóch)</span>', answers: ["neither"] },
    { type: "gap", text: '<span class="en">You can take ________ bus – they both go to the centre.</span>', answers: ["either"] },
    { type: "gap", text: '<span class="en">________ of my friends came to the party. (wszyscy)</span>', answers: ["all"] },
    { type: "gap", text: '<span class="en">________ of them came – I was the only one. (żaden z wielu)</span>', answers: ["none"] },
    { type: "header", text: "E. Each czy every?" },
    { type: "gap", text: '<span class="en">________ student got a book. (osobno)</span>', answers: ["each"] },
    { type: "gap", text: '<span class="en">________ student must attend the meeting. (grupa)</span>', answers: ["every"] },
    { type: "gap", text: '<span class="en">I go to the gym ________ day.</span>', answers: ["every"] },
    { type: "gap", text: '<span class="en">________ of the two boys was given a prize.</span>', answers: ["each"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">I have a little friends. → ________</span>', answers: ["i have a few friends", "i have a few friends."], wide: true },
    { type: "gap", text: '<span class="en">How much books? → ________</span>', answers: ["how many books", "how many books?"], wide: true },
    { type: "gap", text: '<span class="en">Every students are here. → ________</span>', answers: ["every student is here", "every student is here."], wide: true },
    { type: "gap", text: '<span class="en">Both of them is coming. → ________</span>', answers: ["both of them are coming", "both of them are coming."], wide: true },
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
    { q: "Would you like ______ tea?", opcje: ["some", "any", "many", "much"], poprawna: 0, wyjasnienie: "Propozycja → some." },
    { q: "Do you have ______ questions?", opcje: ["some", "any", "many", "much"], poprawna: 1, wyjasnienie: "Pytanie → any." },
    { q: "How ______ money do you have?", opcje: ["much", "many", "some", "any"], poprawna: 0, wyjasnienie: "Niepoliczalne → much." },
    { q: "I have ______ friends – I feel lonely.", opcje: ["a few", "few", "a little", "little"], poprawna: 1, wyjasnienie: "Negatywne → few." },
    { q: "We have ______ time – let's relax.", opcje: ["a few", "few", "a little", "little"], poprawna: 2, wyjasnienie: "Pozytywne, niepoliczalne → a little." },
    { q: "______ of my parents are teachers.", opcje: ["Both", "Neither", "Either", "None"], poprawna: 0, wyjasnienie: "Oboje → both." },
    { q: "______ student must attend the meeting.", opcje: ["Each", "Every", "All", "None"], poprawna: 1, wyjasnienie: "every + l.poj. (grupa)." },
    { q: "Które zdanie jest poprawne?", opcje: ["Every students are here.", "Every student is here.", "Every students is here.", "Every student are here."], poprawna: 1, wyjasnienie: "every + l.poj. → is." },
    { q: "There were ______ people at the concert.", opcje: ["much", "a lot of", "a little", "little"], poprawna: 1, wyjasnienie: "Policzalne w twierdzeniu → a lot of." },
    { q: "I don't have ______ time.", opcje: ["some", "any", "many", "few"], poprawna: 1, wyjasnienie: "Przeczenie → any." }
  ]
};

/* ============================================================
   G11B2 – Prepositions – zaawansowane
============================================================ */
window.LESSON_DATA["G11B2"] = {
  tytul: "Przyimki – poziom zaawansowany",
  poziom: "B2",
  dzial: "G11",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I've been thinking about changing my career for a while now. I'm tired of doing the same things every day, and I don't get on well with my new manager. I'm interested in marketing, and I'd like to work for a bigger company. Last week I applied for a job at a small agency. I was a bit nervous before the interview, but it went really well. Now I'm waiting for their reply. I hope they will offer me the position. In my opinion, changing jobs is not just about money – it's also about personal growth and job satisfaction.
    </p>

    <h3>Przyimki czasu – powtórzenie</h3>
    <table>
      <tr><th>Przyimek</th><th>Kiedy</th><th>Przykład</th></tr>
      <tr><td class="en">at</td><td>godziny, noc, weekend, święta</td><td class="en">at 5, at night, at the weekend, at Christmas</td></tr>
      <tr><td class="en">on</td><td>dni, daty</td><td class="en">on Monday, on 5th May</td></tr>
      <tr><td class="en">in</td><td>miesiące, lata, pory roku, pory dnia</td><td class="en">in May, in 2025, in the morning</td></tr>
      <tr><td class="en">during</td><td>podczas (jakiegoś okresu)</td><td class="en">during the summer, during the meeting</td></tr>
      <tr><td class="en">for</td><td>przez (jak długo)</td><td class="en">for two hours, for a week</td></tr>
      <tr><td class="en">since</td><td>od (punkt)</td><td class="en">since 2020, since Monday</td></tr>
      <tr><td class="en">by</td><td>do (moment, deadline)</td><td class="en">by 5 o'clock, by Friday</td></tr>
      <tr><td class="en">until</td><td>do (moment, kontynuacja)</td><td class="en">until 8 p.m., until Monday</td></tr>
      <tr><td class="en">within</td><td>w ciągu (okres)</td><td class="en">within a week</td></tr>
      <tr><td class="en">over</td><td>przez (okres, w trakcie)</td><td class="en">over the last few years</td></tr>
      <tr><td class="en">throughout</td><td>przez cały</td><td class="en">throughout the year</td></tr>
    </table>

    <h3>Przyimki miejsca – powtórzenie</h3>
    <table>
      <tr><th>Przyimek</th><th>Kiedy</th><th>Przykład</th></tr>
      <tr><td class="en">at</td><td>konkretne punkty, miejsca, wydarzenia</td><td class="en">at the door, at the party, at school</td></tr>
      <tr><td class="en">on</td><td>powierzchnie, transport</td><td class="en">on the table, on a bus, on the floor</td></tr>
      <tr><td class="en">in</td><td>przestrzenie, kraje, miasta</td><td class="en">in a box, in Poland, in Warsaw</td></tr>
      <tr><td class="en">under / over</td><td>pod / nad</td><td class="en">under the table, over the bridge</td></tr>
      <tr><td class="en">above / below</td><td>ponad / poniżej</td><td class="en">above the clouds, below zero</td></tr>
      <tr><td class="en">between / among</td><td>między (2) / wśród (wielu)</td><td class="en">between the two houses, among friends</td></tr>
      <tr><td class="en">behind / in front of</td><td>za / przed</td><td class="en">behind the door, in front of the building</td></tr>
      <tr><td class="en">beside / next to</td><td>obok</td><td class="en">beside me, next to the window</td></tr>
      <tr><td class="en">opposite</td><td>naprzeciwko</td><td class="en">opposite the bank</td></tr>
      <tr><td class="en">against</td><td>o (oparty), przeciwko</td><td class="en">against the wall, against the rules</td></tr>
    </table>

    <h3>Czasowniki + przyimek – utrwalone zwroty</h3>
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
      <tr><td class="en">pay for</td><td class="pl">płacić za</td></tr>
      <tr><td class="en">wait for</td><td class="pl">czekać na</td></tr>
      <tr><td class="en">look forward to</td><td class="pl">czekać z niecierpliwością na</td></tr>
    </table>

    <h3>Przymiotnik + przyimek – utrwalone zwroty</h3>
    <table>
      <tr><th>Zwrot</th><th>Polski</th></tr>
      <tr><td class="en">good / bad at</td><td class="pl">dobry / słaby w</td></tr>
      <tr><td class="en">interested in</td><td class="pl">zainteresowany</td></tr>
      <tr><td class="en">afraid / scared of</td><td class="pl">przerażony / bojący się</td></tr>
      <tr><td class="en">proud of</td><td class="pl">dumny z</td></tr>
      <tr><td class="en">tired of</td><td class="pl">zmęczony czymś</td></tr>
      <tr><td class="en">similar to</td><td class="pl">podobny do</td></tr>
      <tr><td class="en">different from / to</td><td class="pl">inny niż</td></tr>
      <tr><td class="en">responsible for</td><td class="pl">odpowiedzialny za</td></tr>
      <tr><td class="en">famous for</td><td class="pl">słynny z</td></tr>
      <tr><td class="en">angry with sb / about sth</td><td class="pl">zły na kogoś / o coś</td></tr>
      <tr><td class="en">excited about</td><td class="pl">podekscytowany</td></tr>
      <tr><td class="en">keen on</td><td class="pl">lubiący coś robić</td></tr>
      <tr><td class="en">aware of</td><td class="pl">świadomy</td></tr>
      <tr><td class="en">capable of</td><td class="pl">zdolny do</td></tr>
      <tr><td class="en">addicted to</td><td class="pl">uzależniony od</td></tr>
    </table>

    <h3>Zwroty z przyimkami</h3>
    <table>
      <tr><td class="en">in my opinion</td><td class="pl">moim zdaniem</td></tr>
      <tr><td class="en">on purpose</td><td class="pl">celowo</td></tr>
      <tr><td class="en">by mistake</td><td class="pl">przez pomyłkę</td></tr>
      <tr><td class="en">in advance</td><td class="pl">z góry, wcześniej</td></tr>
      <tr><td class="en">at first / at last</td><td class="pl">na początku / w końcu</td></tr>
      <tr><td class="en">in fact</td><td class="pl">w rzeczywistości</td></tr>
      <tr><td class="en">on time / in time</td><td class="pl">na czas / w porę</td></tr>
      <tr><td class="en">in the end</td><td class="pl">w końcu</td></tr>
      <tr><td class="en">by chance / by accident</td><td class="pl">przypadkiem</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> czasowniki i przymiotniki z przyimkami trzeba <b>nauczyć się na pamięć</b> – nie ma tu reguły.<br>
      <b>at</b> + konkretny punkt / wydarzenie · <b>on</b> + powierzchnia · <b>in</b> + wnętrze / duży obszar.
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
    { type: "gap", text: '<span class="en">I\'m looking forward ________ seeing you.</span>', answers: ["to"] },
    { type: "header", text: "B. Przymiotnik + przyimek" },
    { type: "gap", text: '<span class="en">I\'m good ________ maths.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">She\'s interested ________ art.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">He\'s afraid ________ flying.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">I\'m proud ________ my sister.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">I\'m tired ________ waiting.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">This is different ________ what I expected.</span>', answers: ["from", "to"] },
    { type: "gap", text: '<span class="en">She\'s responsible ________ the whole project.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">Poland is famous ________ its food.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">I\'m aware ________ the problem.</span>', answers: ["of"] },
    { type: "gap", text: '<span class="en">He\'s addicted ________ computer games.</span>', answers: ["to"] },
    { type: "header", text: "C. Zwroty utrwalone" },
    { type: "gap", text: '<span class="en">________ my opinion, it\'s a bad idea.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">I did it ________ purpose.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">I sent the email ________ mistake.</span>', answers: ["by"] },
    { type: "gap", text: '<span class="en">Book your tickets ________ advance.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">________ first, it seemed easy.</span>', answers: ["at"] },
    { type: "gap", text: '<span class="en">________ fact, I\'ve never been there.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">The train arrived ________ time.</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">________ the end, we decided to stay.</span>', answers: ["in"] },
    { type: "header", text: "D. Przyimki czasu" },
    { type: "gap", text: '<span class="en">I\'ve been waiting ________ two hours.</span>', answers: ["for"] },
    { type: "gap", text: '<span class="en">I\'ve been waiting ________ 5 o\'clock.</span>', answers: ["since"] },
    { type: "gap", text: '<span class="en">I\'ll finish the report ________ Friday.</span>', answers: ["by"] },
    { type: "gap", text: '<span class="en">Wait here ________ I come back.</span>', answers: ["until"] },
    { type: "gap", text: '<span class="en">I fell asleep ________ the film.</span>', answers: ["during"] },
    { type: "gap", text: '<span class="en">________ the last few years, a lot has changed.</span>', answers: ["over"] },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">I depend of my parents. → ________</span>', answers: ["i depend on my parents", "i depend on my parents."], wide: true },
    { type: "gap", text: '<span class="en">I\'m good in English. → ________</span>', answers: ["i'm good at english", "i'm good at english.", "i am good at english", "i am good at english."], wide: true },
    { type: "gap", text: '<span class="en">I\'m interested on music. → ________</span>', answers: ["i'm interested in music", "i'm interested in music.", "i am interested in music", "i am interested in music."], wide: true },
    { type: "gap", text: '<span class="en">He apologised of being late. → ________</span>', answers: ["he apologised for being late", "he apologised for being late."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zależy to od ciebie.</span>', answers: ["it depends on you", "it depends on you."], wide: true },
    { type: "gap", text: '<span class="pl">Interesuję się muzyką.</span>', answers: ["i am interested in music", "i am interested in music.", "i'm interested in music", "i'm interested in music."], wide: true },
    { type: "gap", text: '<span class="pl">Boję się latania.</span>', answers: ["i am afraid of flying", "i am afraid of flying.", "i'm afraid of flying", "i'm afraid of flying."], wide: true },
    { type: "gap", text: '<span class="pl">Zrobiłem to celowo.</span>', answers: ["i did it on purpose", "i did it on purpose."], wide: true },
    { type: "gap", text: '<span class="pl">Moim zdaniem to dobry pomysł.</span>', answers: ["in my opinion it is a good idea", "in my opinion, it is a good idea", "in my opinion, it's a good idea", "in my opinion it's a good idea"], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Napisz o sobie – co lubisz, w czym jesteś dobry, na czym ci zależy. Użyj czasowników/przymiotników z przyimkami.", placeholder: "np. I'm good at... I'm interested in... It depends on..." }
  ],
  test: [
    { q: "It depends ______ the weather.", opcje: ["on", "of", "in", "at"], poprawna: 0, wyjasnienie: "depend on – utrwalone." },
    { q: "This book belongs ______ me.", opcje: ["on", "to", "at", "in"], poprawna: 1, wyjasnienie: "belong to – utrwalone." },
    { q: "I'm good ______ maths.", opcje: ["at", "in", "on", "with"], poprawna: 0, wyjasnienie: "be good at – utrwalone." },
    { q: "She's interested ______ art.", opcje: ["on", "at", "in", "of"], poprawna: 2, wyjasnienie: "be interested in." },
    { q: "He's afraid ______ flying.", opcje: ["of", "for", "from", "with"], poprawna: 0, wyjasnienie: "be afraid of." },
    { q: "I apologise ______ being late.", opcje: ["of", "for", "on", "at"], poprawna: 1, wyjasnienie: "apologise for – utrwalone." },
    { q: "I've been waiting ______ two hours.", opcje: ["since", "from", "for", "during"], poprawna: 2, wyjasnienie: "for + okres." },
    { q: "I've been waiting ______ 5 o'clock.", opcje: ["since", "from", "for", "during"], poprawna: 0, wyjasnienie: "since + punkt." },
    { q: "In my ______, it's a bad idea.", opcje: ["opinion", "opinions", "think", "view"], poprawna: 0, wyjasnienie: "in my opinion – utrwalone." },
    { q: "I did it ______ purpose.", opcje: ["on", "in", "by", "at"], poprawna: 0, wyjasnienie: "on purpose = celowo." }
  ]
};

/* ============================================================
   G12B2 – Comparatives & Superlatives – zaawansowane
============================================================ */
window.LESSON_DATA["G12B2"] = {
  tytul: "Stopniowanie – poziom zaawansowany",
  poziom: "B2",
  dzial: "G12",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My sister and I are quite similar, but she is definitely more talkative than me. She is also far more organised – her room is always much tidier than mine. When we were younger, she was a bit taller than me, but now we are exactly the same height. My brother is by far the tallest in the family – he's almost 1.95 metres. The more I think about it, the more I realise that money is far less important than health. My parents always say: "The sooner you learn to appreciate small things, the happier you will be." I couldn't agree more.
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
      <tr><td class="en">little</td><td class="en">less</td><td class="en">the least</td></tr>
      <tr><td class="en">many / much</td><td class="en">more</td><td class="en">the most</td></tr>
    </table>

    <h3>Konstrukcje porównawcze</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en">as ... as</td><td>tak ... jak</td><td class="en">I'm as tall as my father.</td></tr>
      <tr><td class="en">not as / so ... as</td><td>nie tak ... jak</td><td class="en">She isn't as tall as me.</td></tr>
      <tr><td class="en">... than</td><td>... niż</td><td class="en">He's taller than me.</td></tr>
      <tr><td class="en">the ... in / of</td><td>naj ... w / z</td><td class="en">He's the best in the class.</td></tr>
      <tr><td class="en">the same as</td><td>taki sam jak</td><td class="en">My bag is the same as yours.</td></tr>
      <tr><td class="en">similar to</td><td>podobny do</td><td class="en">This is similar to that one.</td></tr>
      <tr><td class="en">different from / to</td><td>inny niż</td><td class="en">This is different from that.</td></tr>
      <tr><td class="en">twice / three times as ... as</td><td>dwa / trzy razy ... jak</td><td class="en">This room is twice as big as mine.</td></tr>
    </table>

    <h3>Wzmacnianie porównań</h3>
    <table>
      <tr><th>Wzmocnienie</th><th>Znaczenie</th><th>Przykład</th></tr>
      <tr><td class="en"><b>much / far</b> + stopień wyższy</td><td>dużo, znacznie</td><td class="en">She is much taller than me.</td></tr>
      <tr><td class="en"><b>a lot</b> + stopień wyższy</td><td>o wiele</td><td class="en">This is a lot more interesting.</td></tr>
      <tr><td class="en"><b>a bit / a little / slightly</b> + stopień wyższy</td><td>trochę</td><td class="en">He is a bit taller.</td></tr>
      <tr><td class="en"><b>no</b> + stopień wyższy</td><td>wcale nie</td><td class="en">He's no better than me.</td></tr>
      <tr><td class="en"><b>by far</b> + stopień najwyższy</td><td>zdecydowanie</td><td class="en">She is by far the best.</td></tr>
      <tr><td class="en"><b>easily</b> + stopień najwyższy</td><td>zdecydowanie</td><td class="en">He's easily the tallest.</td></tr>
    </table>

    <h3>The more... the more...</h3>
    <p>Podwójne porównanie – gdy jedna rzecz rośnie, druga też:</p>
    <table>
      <tr><td class="en">The more you practise, the better you get.</td></tr>
      <tr><td class="en">The earlier you start, the sooner you finish.</td></tr>
      <tr><td class="en">The more expensive the hotel, the better the service.</td></tr>
      <tr><td class="en">The less you worry, the happier you are.</td></tr>
    </table>

    <h3>Zbyt / wystarczająco / tak ... że</h3>
    <table>
      <tr><td class="en">too + przymiotnik</td><td class="en">too expensive (za drogi)</td></tr>
      <tr><td class="en">przymiotnik + enough</td><td class="en">old enough (dość stary)</td></tr>
      <tr><td class="en">enough + rzeczownik</td><td class="en">enough money (dość pieniędzy)</td></tr>
      <tr><td class="en">so + przymiotnik + that</td><td class="en">so beautiful that we stopped</td></tr>
      <tr><td class="en">such a + przymiotnik + rzeczownik + that</td><td class="en">such a difficult test that many failed</td></tr>
      <tr><td class="en">too ... to</td><td class="en">He's too young to drive.</td></tr>
      <tr><td class="en">... enough to</td><td class="en">She's old enough to drive.</td></tr>
    </table>

    <h3>Powtórzenia – "more and more", "less and less"</h3>
    <table>
      <tr><td class="en">More and more people work from home.</td></tr>
      <tr><td class="en">Less and less time is spent reading books.</td></tr>
      <tr><td class="en">Everything is getting more and more expensive.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>as ... as</b> – tak ... jak · <b>not as ... as</b> – nie tak ... jak<br>
      <b>much / far / a lot</b> + stopień wyższy = dużo / znacznie<br>
      <b>by far / easily</b> + stopień najwyższy = zdecydowanie
    </div>
  `,
  karta: [
    { type: "header", text: "A. Utwórz stopnie" },
    { type: "gap", text: '<span class="en">happy → ________ → ________</span>', answers: ["happier, happiest"] },
    { type: "gap", text: '<span class="en">expensive → ________ → ________</span>', answers: ["more expensive, most expensive"] },
    { type: "gap", text: '<span class="en">good → ________ → ________</span>', answers: ["better, best"] },
    { type: "gap", text: '<span class="en">far → ________ → ________</span>', answers: ["further, furthest", "farther, farthest"] },
    { type: "gap", text: '<span class="en">little → ________ → ________</span>', answers: ["less, least"] },
    { type: "gap", text: '<span class="en">many → ________ → ________</span>', answers: ["more, most"] },
    { type: "header", text: "B. Wstaw w zdanie" },
    { type: "gap", text: '<span class="en">She\'s much ________ (tall) than me.</span>', answers: ["taller"] },
    { type: "gap", text: '<span class="en">This is ________ (expensive) restaurant in town.</span>', answers: ["the most expensive"] },
    { type: "gap", text: '<span class="en">He is ________ (good) student in the class.</span>', answers: ["the best"] },
    { type: "gap", text: '<span class="en">My sister is a bit ________ (organised) than me.</span>', answers: ["more organised", "more organized"] },
    { type: "gap", text: '<span class="en">This exam was ________ (easy) than the last one.</span>', answers: ["easier"] },
    { type: "gap", text: '<span class="en">He is by far ________ (tall) in the family.</span>', answers: ["the tallest"] },
    { type: "gap", text: '<span class="en">This bag is ________ (cheap) than that one.</span>', answers: ["cheaper"] },
    { type: "header", text: "C. Konstrukcje porównawcze" },
    { type: "gap", text: '<span class="en">I\'m not ________ tall ________ my brother.</span>', answers: ["as as", "as, as"] },
    { type: "gap", text: '<span class="en">My bag is the same ________ yours.</span>', answers: ["as"] },
    { type: "gap", text: '<span class="en">This is very similar ________ that one.</span>', answers: ["to"] },
    { type: "gap", text: '<span class="en">This is different ________ what I expected.</span>', answers: ["from", "to"] },
    { type: "gap", text: '<span class="en">This room is twice ________ big ________ mine.</span>', answers: ["as as", "as, as"] },
    { type: "header", text: "D. The more... the more..." },
    { type: "gap", text: '<span class="en">The more you practise, the ________ you get. (dobry)</span>', answers: ["better"] },
    { type: "gap", text: '<span class="en">The earlier you start, the ________ you finish. (szybko)</span>', answers: ["sooner"] },
    { type: "gap", text: '<span class="en">The ________ you learn, the more you understand. (dużo)</span>', answers: ["more"] },
    { type: "gap", text: '<span class="en">The less you worry, the ________ you are. (szczęśliwy)</span>', answers: ["happier"] },
    { type: "header", text: "E. Too / Enough / So / Such" },
    { type: "gap", text: '<span class="en">This jacket is ________ expensive for me. (za)</span>', answers: ["too"] },
    { type: "gap", text: '<span class="en">She is old ________ to drive. (dość)</span>', answers: ["enough"] },
    { type: "gap", text: '<span class="en">I don\'t have ________ money. (dość)</span>', answers: ["enough"] },
    { type: "gap", text: '<span class="en">It was ________ cold to go outside. (za)</span>', answers: ["too"] },
    { type: "gap", text: '<span class="en">The view was ________ beautiful that we stopped.</span>', answers: ["so"] },
    { type: "gap", text: '<span class="en">It was ________ a difficult test that many failed.</span>', answers: ["such"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">She is taller then me. → ________</span>', answers: ["she is taller than me", "she is taller than me."], wide: true },
    { type: "gap", text: '<span class="en">He is the goodest student. → ________</span>', answers: ["he is the best student", "he is the best student."], wide: true },
    { type: "gap", text: '<span class="en">This is more cheaper. → ________</span>', answers: ["this is cheaper", "this is cheaper."], wide: true },
    { type: "gap", text: '<span class="en">I\'m gooder at maths than her. → ________</span>', answers: ["i'm better at maths than her", "i'm better at maths than her.", "i am better at maths than her", "i am better at maths than her."], wide: true },
    { type: "gap", text: '<span class="en">She is more tall than me. → ________</span>', answers: ["she is taller than me", "she is taller than me."], wide: true },
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
    { q: "Które zdanie jest poprawne?", opcje: ["She is taller then me.", "She is taller than me.", "She is more tall than me.", "She is tallest than me."], poprawna: 1, wyjasnienie: "niż = than, krótkie → -er." }
  ]
};


/* ============================================================
   G13B2 – Gerunds & Infinitives – zaawansowane
============================================================ */
window.LESSON_DATA["G13B2"] = {
  tytul: "Bezokolicznik i -ing – poziom zaawansowany",
  poziom: "B2",
  dzial: "G13",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I remember meeting my best friend for the first time. I'll never forget seeing her standing there in the school corridor. Since then, we've been through a lot together. She suggested joining the same club, and I agreed to try it. At first, I was afraid of failing, but she persuaded me to keep going. Now I can't imagine not having her in my life. I'm used to spending time with her, and I look forward to seeing her every weekend. She's the kind of person who makes you want to become a better version of yourself.
    </p>

    <h3>Grupa 1: czasownik + to + bezokolicznik</h3>
    <table>
      <tr><td class="en">agree, decide, hope, plan, promise, refuse, offer, learn, manage, fail, afford, expect, want, need, would like</td></tr>
    </table>
    <table>
      <tr><td class="en">I decided to stay. / She offered to help. / He refused to answer.</td></tr>
    </table>

    <h3>Grupa 2: czasownik + -ing</h3>
    <table>
      <tr><td class="en">enjoy, finish, mind, avoid, suggest, keep, practise, admit, deny, imagine, consider, recommend, miss, risk</td></tr>
    </table>
    <table>
      <tr><td class="en">I enjoy reading. / He admitted stealing. / They suggested going out.</td></tr>
    </table>

    <h3>Grupa 3: oba bez zmiany znaczenia</h3>
    <table>
      <tr><td class="en">like, love, hate, prefer, begin, start, continue, intend</td></tr>
    </table>
    <table>
      <tr><td class="en">I like swimming. = I like to swim.</td></tr>
    </table>

    <h3>Grupa 4: oba, ale zmiana znaczenia</h3>
    <table>
      <tr><th>Bezokolicznik (to do)</th><th>-ing (doing)</th></tr>
      <tr><td class="en">stop to smoke = zatrzymać się, żeby zapalić</td><td class="en">stop smoking = rzucić palenie</td></tr>
      <tr><td class="en">remember to lock = pamiętać, żeby zamknąć</td><td class="en">remember locking = pamiętać, że się zamknęło</td></tr>
      <tr><td class="en">forget to buy = zapomnieć kupić</td><td class="en">forget buying = zapomnieć, że się kupiło</td></tr>
      <tr><td class="en">try to open = próbować otworzyć</td><td class="en">try opening = spróbować otworzyć (eksperyment)</td></tr>
      <tr><td class="en">go on to do = zrobić coś nowego</td><td class="en">go on doing = kontynuować</td></tr>
      <tr><td class="en">regret to say = z żalem mówić (formalnie)</td><td class="en">regret saying = żałować, że się powiedziało</td></tr>
    </table>

    <h3>Po przyimkach zawsze -ing</h3>
    <table>
      <tr><td class="en">good at / bad at</td><td class="en">I'm good at drawing.</td></tr>
      <tr><td class="en">interested in</td><td class="en">I'm interested in learning.</td></tr>
      <tr><td class="en">think of / about</td><td class="en">I'm thinking of moving.</td></tr>
      <tr><td class="en">look forward to</td><td class="en">I look forward to seeing you.</td></tr>
      <tr><td class="en">before / after</td><td class="en">After finishing work, I went home.</td></tr>
      <tr><td class="en">instead of</td><td class="en">Instead of watching TV, let's go out.</td></tr>
      <tr><td class="en">succeed in</td><td class="en">She succeeded in passing.</td></tr>
      <tr><td class="en">apologise for</td><td class="en">He apologised for being late.</td></tr>
      <tr><td class="en">insist on</td><td class="en">She insisted on paying.</td></tr>
      <tr><td class="en">accuse sb of</td><td class="en">They accused him of cheating.</td></tr>
      <tr><td class="en">prevent sb from</td><td class="en">They prevented us from leaving.</td></tr>
    </table>

    <h3>Konstrukcje z dopełnieniem</h3>
    <table>
      <tr><th>Konstrukcja</th><th>Przykład</th></tr>
      <tr><td class="en">want / need / expect sb <b>to do</b></td><td class="en">I want you to help me.</td></tr>
      <tr><td class="en">ask / tell sb <b>to do</b></td><td class="en">She asked me to wait.</td></tr>
      <tr><td class="en">advise / persuade / remind sb <b>to do</b></td><td class="en">He advised me to rest.</td></tr>
      <tr><td class="en">let / make sb <b>do</b> (bez to)</td><td class="en">Let me help. He made me wait.</td></tr>
      <tr><td class="en">help sb (to) do</td><td class="en">She helped me (to) study.</td></tr>
    </table>

    <h3>Perfect infinitive i passive infinitive</h3>
    <table>
      <tr><td class="en">to have done</td><td class="en">He seems to have forgotten.</td></tr>
      <tr><td class="en">to be done</td><td class="en">This needs to be cleaned.</td></tr>
      <tr><td class="en">having done (gerund perfect)</td><td class="en">Having finished work, I went home.</td></tr>
      <tr><td class="en">being done (gerund passive)</td><td class="en">I hate being told what to do.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>make / let</b> + bez "to" (He made me go. Let me help.)<br>
      <b>Ale w passive:</b> I was made to wait.<br>
      <b>Po przyimkach zawsze -ing</b> – bez wyjątków.
    </div>
  `,
  karta: [
    { type: "header", text: "A. To czy -ing?" },
    { type: "gap", text: '<span class="en">I\'ve decided ________ (learn) Spanish.</span>', answers: ["to learn"] },
    { type: "gap", text: '<span class="en">I enjoy ________ (learn) languages.</span>', answers: ["learning"] },
    { type: "gap", text: '<span class="en">He admitted ________ (steal) the money.</span>', answers: ["stealing"] },
    { type: "gap", text: '<span class="en">My friend suggested ________ (join) a course.</span>', answers: ["joining"] },
    { type: "gap", text: '<span class="en">I agreed ________ (try) it.</span>', answers: ["to try"] },
    { type: "gap", text: '<span class="en">I\'m looking forward to ________ (start) next week.</span>', answers: ["starting"] },
    { type: "gap", text: '<span class="en">I hope ________ (become) fluent.</span>', answers: ["to become"] },
    { type: "gap", text: '<span class="en">I can\'t imagine ________ (live) without music.</span>', answers: ["living"] },
    { type: "gap", text: '<span class="en">She persuaded me ________ (join).</span>', answers: ["to join"] },
    { type: "gap", text: '<span class="en">He denied ________ (take) the money.</span>', answers: ["taking"] },
    { type: "header", text: "B. Po przyimkach zawsze -ing" },
    { type: "gap", text: '<span class="en">I\'m good at ________ (read).</span>', answers: ["reading"] },
    { type: "gap", text: '<span class="en">I\'m interested in ________ (learn) new things.</span>', answers: ["learning"] },
    { type: "gap", text: '<span class="en">I\'m thinking of ________ (move).</span>', answers: ["moving"] },
    { type: "gap", text: '<span class="en">After ________ (finish) work, I went home.</span>', answers: ["finishing"] },
    { type: "gap", text: '<span class="en">I\'m tired of ________ (wait).</span>', answers: ["waiting"] },
    { type: "gap", text: '<span class="en">Instead of ________ (watch) TV, let\'s go out.</span>', answers: ["watching"] },
    { type: "gap", text: '<span class="en">She succeeded in ________ (pass) the exam.</span>', answers: ["passing"] },
    { type: "gap", text: '<span class="en">He apologised for ________ (be) late.</span>', answers: ["being"] },
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
    { type: "gap", text: '<span class="en">She helped me ________ (study). (opcjonalnie z/bez to)</span>', answers: ["study", "to study"] },
    { type: "header", text: "E. Perfect / Passive infinitive & gerund" },
    { type: "gap", text: '<span class="en">He seems ________ (forget) about our meeting.</span>', answers: ["to have forgotten"] },
    { type: "gap", text: '<span class="en">This needs ________ (clean).</span>', answers: ["to be cleaned", "cleaning"] },
    { type: "gap", text: '<span class="en">________ (finish) my work, I went out.</span>', answers: ["having finished"] },
    { type: "gap", text: '<span class="en">I hate ________ (tell) what to do. (passive gerund)</span>', answers: ["being told"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">I want going home. → ________</span>', answers: ["i want to go home", "i want to go home."], wide: true },
    { type: "gap", text: '<span class="en">She suggested to go out. → ________</span>', answers: ["she suggested going out", "she suggested going out."], wide: true },
    { type: "gap", text: '<span class="en">I\'m interested to learn English. → ________</span>', answers: ["i'm interested in learning english", "i'm interested in learning english.", "i am interested in learning english", "i am interested in learning english."], wide: true },
    { type: "gap", text: '<span class="en">He made me to wait. → ________</span>', answers: ["he made me wait", "he made me wait."], wide: true },
    { type: "gap", text: '<span class="en">I look forward to see you. → ________</span>', answers: ["i look forward to seeing you", "i look forward to seeing you."], wide: true },
    { type: "header", text: "G. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Zdecydowałem się nauczyć hiszpańskiego.</span>', answers: ["i decided to learn spanish", "i decided to learn spanish.", "i've decided to learn spanish", "i've decided to learn spanish."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię uczyć się języków.</span>', answers: ["i enjoy learning languages", "i enjoy learning languages.", "i like learning languages", "i like learning languages."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogę się doczekać spotkania z tobą.</span>', answers: ["i'm looking forward to seeing you", "i'm looking forward to seeing you.", "i am looking forward to seeing you", "i am looking forward to seeing you."], wide: true },
    { type: "gap", text: '<span class="pl">Zasugerował, żebyśmy poszli do kina.</span>', answers: ["he suggested going to the cinema", "he suggested going to the cinema."], wide: true },
    { type: "gap", text: '<span class="pl">Chcę, żebyś mi pomógł.</span>', answers: ["i want you to help me", "i want you to help me."], wide: true },
    { type: "header", text: "H. Napisz" },
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
    { q: "This needs ______.", opcje: ["to be cleaned", "cleaning", "clean", "to clean"], poprawna: 0, wyjasnienie: "need to be + III (passive) lub need -ing – obie formy poprawne, wybieramy dłuższą." }
  ]
};

/* ============================================================
   G14B2 – Relative Clauses – zaawansowane
============================================================ */
window.LESSON_DATA["G14B2"] = {
  tytul: "Zdania przydawkowe – poziom zaawansowany",
  poziom: "B2",
  dzial: "G14",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My best friend, who lives in Kraków, is coming to visit me next week. She works for a company which designs computer games. The company, which was founded in 2010, is one of the biggest in Poland. My friend, whose parents are both teachers, is very ambitious. She has a small flat, where she lives with her cat. She has a job that she really loves. Her boss, who is quite demanding, expects a lot from her, but she doesn't mind. The project she is working on at the moment is the most exciting one she has ever done.
    </p>

    <h3>Defining vs Non-defining – różnice</h3>
    <table>
      <tr><th>Defining (określające)</th><th>Non-defining (opisowe)</th></tr>
      <tr>
        <td>• <b>bez przecinków</b><br>
        • informacja <b>konieczna</b> do zrozumienia<br>
        • można użyć <b>that</b><br>
        • zaimek można <b>pominąć</b>, gdy jest dopełnieniem</td>
        <td>• <b>z przecinkami</b><br>
        • informacja <b>dodatkowa</b>, można usunąć<br>
        • <b>NIE</b> można użyć "that"<br>
        • zaimka <b>NIE można pominąć</b></td>
      </tr>
      <tr>
        <td class="en">The man <b>who lives next door</b> is my uncle.</td>
        <td class="en">My uncle, <b>who lives next door</b>, is a doctor.</td>
      </tr>
    </table>

    <h3>Zaimki względne – podsumowanie</h3>
    <table>
      <tr><th>Zaimek</th><th>Dotyczy</th><th>Defining</th><th>Non-defining</th></tr>
      <tr><td class="en">who</td><td>osoby</td><td>✓</td><td>✓</td></tr>
      <tr><td class="en">which</td><td>rzeczy</td><td>✓</td><td>✓</td></tr>
      <tr><td class="en">that</td><td>osoby i rzeczy</td><td>✓</td><td>✗</td></tr>
      <tr><td class="en">whose</td><td>czyj</td><td>✓</td><td>✓</td></tr>
      <tr><td class="en">where</td><td>miejsca</td><td>✓</td><td>✓</td></tr>
      <tr><td class="en">when</td><td>czas</td><td>✓</td><td>✓</td></tr>
      <tr><td class="en">why</td><td>powód (po "the reason")</td><td>✓</td><td>✗</td></tr>
    </table>

    <h3>Kiedy można pominąć zaimek?</h3>
    <p>Tylko w <b>defining</b>, gdy zaimek jest <b>dopełnieniem</b> (nie podmiotem):</p>
    <table>
      <tr><td class="en">The book (that / which) I bought is interesting. ✅ <span class="pl">(bought → I bough it)</span></td></tr>
      <tr><td class="en">The man (who / that) I met was nice. ✅</td></tr>
      <tr><td class="en">The man who lives next door… ❌ (who = podmiot)</td></tr>
      <tr><td class="en">My car, which I bought last year,… ❌ (non-defining – nie pomijamy)</td></tr>
    </table>

    <h3>Prepositions + relative pronouns</h3>
    <p>W formalnym stylu przyimek idzie na początek:</p>
    <table>
      <tr><th>Formalnie</th><th>Potocznie</th></tr>
      <tr><td class="en">The man <b>to whom</b> I spoke was nice.</td><td class="en">The man (who) I spoke to was nice.</td></tr>
      <tr><td class="en">The house <b>in which</b> I live is old.</td><td class="en">The house (which) I live in is old.</td></tr>
      <tr><td class="en">The friend <b>with whom</b> I travelled…</td><td class="en">The friend (who) I travelled with…</td></tr>
    </table>

    <h3>Non-defining – dodatkowe uwagi</h3>
    <table>
      <tr><td class="en">My sister, who lives in London, is a doctor. <span class="pl">(mam jedną siostrę – informacja dodatkowa)</span></td></tr>
      <tr><td class="en">My sister who lives in London is a doctor. <span class="pl">(mam więcej sióstr – określam którą)</span></td></tr>
    </table>
    <p><b>Uwaga:</b> "which" w non-defining może odnosić się do <b>całego zdania</b>:</p>
    <table>
      <tr><td class="en">He arrived late, <b>which</b> annoyed everyone.</td></tr>
      <tr><td class="en">She passed the exam, <b>which</b> surprised nobody.</td></tr>
    </table>

    <h3>Cleft relative – "the one", "the thing"</h3>
    <table>
      <tr><td class="en">This is the one (that) I want.</td></tr>
      <tr><td class="en">The thing (that) I like most is the atmosphere.</td></tr>
      <tr><td class="en">The reason (why) I called is to apologise.</td></tr>
    </table>

    <h3>Reduced relative clauses</h3>
    <p>Można skrócić, gdy zaimek jest podmiotem w zdaniu defining:</p>
    <table>
      <tr><th>Pełna forma</th><th>Skrócona</th></tr>
      <tr><td class="en">The man who is standing there is my boss.</td><td class="en">The man standing there is my boss.</td></tr>
      <tr><td class="en">The book which was written by Orwell…</td><td class="en">The book written by Orwell…</td></tr>
      <tr><td class="en">Anyone who wants to come…</td><td class="en">Anyone wanting to come…</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>Defining</b> = bez przecinków, można "that", można pominąć zaimek-dopełnienie.<br>
      <b>Non-defining</b> = z przecinkami, NIE "that", NIE pomijamy.<br>
      "Which" może odnosić się do <b>całego zdania</b>.
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
    { type: "gap", text: '<span class="en">The reason ________ I called is to apologise.</span>', answers: ["why", "that"] },
    { type: "header", text: "C. Połącz zdania" },
    { type: "gap", text: '<span class="en">I have a dog. It barks a lot. → I have a dog ________ barks a lot.</span>', answers: ["which", "that"] },
    { type: "gap", text: '<span class="en">I know a girl. Her father is famous. → I know a girl ________ father is famous.</span>', answers: ["whose"] },
    { type: "gap", text: '<span class="en">That\'s the restaurant. We ate there. → That\'s the restaurant ________ we ate.</span>', answers: ["where"] },
    { type: "gap", text: '<span class="en">This is the day. I was born then. → This is the day ________ I was born.</span>', answers: ["when", "that"] },
    { type: "gap", text: '<span class="en">He arrived late. This annoyed everyone. → He arrived late, ________ annoyed everyone.</span>', answers: ["which"] },
    { type: "header", text: "D. Pomijanie zaimka – zaznacz (pomiń, gdzie można)" },
    { type: "gap", text: '<span class="en">The book (that) I bought… – można pominąć "that"? (tak / nie)</span>', answers: ["tak"] },
    { type: "gap", text: '<span class="en">The man who lives here… – można pominąć "who"? (tak / nie)</span>', answers: ["nie"] },
    { type: "gap", text: '<span class="en">My car, which I bought last year… – można pominąć "which"? (tak / nie)</span>', answers: ["nie"] },
    { type: "gap", text: '<span class="en">The film (that) we watched… – można pominąć "that"? (tak / nie)</span>', answers: ["tak"] },
    { type: "header", text: "E. Prepositions – formal vs informal" },
    { type: "gap", text: '<span class="en">The man to ________ I spoke was nice. (formal)</span>', answers: ["whom"] },
    { type: "gap", text: '<span class="en">The house in ________ I live is old. (formal)</span>', answers: ["which"] },
    { type: "gap", text: '<span class="en">The friend with ________ I travelled… (formal)</span>', answers: ["whom"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">My car, that I bought last year, is fast. → ________</span>', answers: ["my car which i bought last year is fast", "my car, which i bought last year, is fast", "my car, which i bought last year, is fast."], wide: true },
    { type: "gap", text: '<span class="en">The man which lives here is old. → ________</span>', answers: ["the man who lives here is old", "the man who lives here is old.", "the man that lives here is old", "the man that lives here is old."], wide: true },
    { type: "gap", text: '<span class="en">The book who I bought is good. → ________</span>', answers: ["the book which i bought is good", "the book which i bought is good.", "the book that i bought is good", "the book that i bought is good."], wide: true },
    { type: "header", text: "G. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Moja siostra, która mieszka w Londynie, jest lekarką.</span>', answers: ["my sister who lives in london is a doctor", "my sister, who lives in london, is a doctor", "my sister, who lives in london, is a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">To jest chłopiec, którego ojciec jest nauczycielem.</span>', answers: ["this is the boy whose father is a teacher", "this is the boy whose father is a teacher."], wide: true },
    { type: "gap", text: '<span class="pl">To kawiarnia, w której się poznaliśmy.</span>', answers: ["this is the café where we met", "this is the café where we met.", "this is the cafe where we met", "this is the cafe where we met."], wide: true },
    { type: "gap", text: '<span class="pl">Książka, którą kupiłem, jest bardzo ciekawa.</span>', answers: ["the book which i bought is very interesting", "the book which i bought is very interesting.", "the book that i bought is very interesting", "the book that i bought is very interesting."], wide: true },
    { type: "gap", text: '<span class="pl">Spóźnił się, co wszystkich zirytowało.</span>', answers: ["he arrived late which annoyed everyone", "he arrived late, which annoyed everyone", "he arrived late, which annoyed everyone."], wide: true },
    { type: "header", text: "H. Napisz" },
    { type: "open", text: "Opisz 3 osoby i 2 miejsca, używając defining i non-defining relative clauses. Użyj whose i where.", placeholder: "np. My friend, who is a doctor, lives in... The place where I grew up is..." }
  ],
  test: [
    { q: "The man ______ lives next door is my uncle.", opcje: ["who", "which", "whose", "where"], poprawna: 0, wyjasnienie: "Osoba → who." },
    { q: "My sister, ______ lives in London, is a doctor.", opcje: ["who", "that", "which", "what"], poprawna: 0, wyjasnienie: "Non-defining – nie używamy 'that'." },
    { q: "The book ______ I bought is interesting.", opcje: ["who", "which", "whose", "where"], poprawna: 1, wyjasnienie: "Rzecz → which / that." },
    { q: "That's the boy ______ mother is a teacher.", opcje: ["who", "which", "whose", "that"], poprawna: 2, wyjasnienie: "Czyj → whose." },
    { q: "The house ______ we live is old.", opcje: ["who", "which", "where", "that"], poprawna: 2, wyjasnienie: "Miejsce → where." },
    { q: "Które zdanie jest poprawne?", opcje: ["My car, that I bought, is fast.", "My car, which I bought, is fast.", "My car which I bought, is fast.", "My car, who I bought, is fast."], poprawna: 1, wyjasnienie: "Non-defining: which, przecinki, NIE that." },
    { q: "This is the day ______ we first met.", opcje: ["where", "which", "when", "who"], poprawna: 2, wyjasnienie: "Czas → when." },
    { q: "I know a girl ______ father is famous.", opcje: ["who", "which", "whose", "that"], poprawna: 2, wyjasnienie: "Czyj → whose." },
    { q: "The film ______ we watched was great.", opcje: ["who", "which", "whose", "where"], poprawna: 1, wyjasnienie: "Rzecz → which / that." },
    { q: "He arrived late, ______ annoyed everyone.", opcje: ["who", "which", "whose", "that"], poprawna: 1, wyjasnienie: "which odnosi się do całego zdania." }
  ]
};

/* ============================================================
   G15B2 – Question Formation – zaawansowane
============================================================ */
window.LESSON_DATA["G15B2"] = {
  tytul: "Pytania – poziom zaawansowany",
  poziom: "B2",
  dzial: "G15",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      You're coming to the party, aren't you? Oh, you don't like big parties, do you? Well, what kind of parties do you like then? Could you tell me what time the party starts? I'm not sure if I can come, but I'll let you know. Do you know where Anna lives? I think she moved recently. By the way, how long have you known her? And what do you think of her new boyfriend? It's not really my business, is it? Anyway, let me know what you decide, will you?
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
      <tr><td class="en">Close the window,</td><td class="en">will you? / won't you?</td></tr>
      <tr><td class="en">Don't be late,</td><td class="en">will you?</td></tr>
      <tr><td class="en">There's a problem,</td><td class="en">isn't there?</td></tr>
    </table>

    <h3>Indirect questions – uprzejme pytania</h3>
    <p><b>Bez inwersji</b> – szyk jak w zdaniu twierdzącym.</p>
    <table>
      <tr><th>Bezpośrednie</th><th>Pośrednie</th></tr>
      <tr><td class="en">Where is the station?</td><td class="en">Could you tell me where the station is?</td></tr>
      <tr><td class="en">What time does it start?</td><td class="en">Do you know what time it starts?</td></tr>
      <tr><td class="en">How much does it cost?</td><td class="en">Could you tell me how much it costs?</td></tr>
      <tr><td class="en">Is she coming?</td><td class="en">Do you know if she's coming?</td></tr>
      <tr><td class="en">Did he call?</td><td class="en">I wonder if he called.</td></tr>
    </table>

    <p><b>Zwroty wprowadzające:</b></p>
    <table>
      <tr><td class="en">Could you tell me...?</td><td class="en">Do you know...?</td></tr>
      <tr><td class="en">I wonder...</td><td class="en">Have you any idea...?</td></tr>
      <tr><td class="en">Would you mind telling me...?</td><td class="en">Can I ask you...?</td></tr>
    </table>

    <h3>Pytania o podmiot vs dopełnienie</h3>
    <table>
      <tr><th>Pytanie o podmiot (bez do)</th><th>Pytanie o dopełnienie (z do)</th></tr>
      <tr>
        <td class="en">Who called you? <span class="pl">(kto – podmiot)</span></td>
        <td class="en">Who did you call? <span class="pl">(kogo – dopełnienie)</span></td>
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
    <p>Często wyrażają zdziwienie lub oczekują potwierdzenia:</p>
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
      <tr><td class="en">Whichever</td><td class="pl">którykolwiek</td></tr>
    </table>

    <h3>What... like vs How</h3>
    <table>
      <tr><td class="en">What is she like?</td><td class="pl">Jaka jest? (charakter)</td></tr>
      <tr><td class="en">What does she look like?</td><td class="pl">Jak wygląda?</td></tr>
      <tr><td class="en">How is she?</td><td class="pl">Jak się czuje?</td></tr>
      <tr><td class="en">What does she like?</td><td class="pl">Co lubi?</td></tr>
    </table>

    <h3>Echo questions – pytania odbijające</h3>
    <table>
      <tr><td class="en">– I'm going to Paris. – <b>Are you?</b></td></tr>
      <tr><td class="en">– She doesn't like it. – <b>Doesn't she?</b></td></tr>
      <tr><td class="en">– I've finished. – <b>Have you?</b></td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>Question tag</b>: twierdzenie → przeczenie, przeczenie → twierdzenie.<br>
      <b>Indirect question</b>: bez inwersji, bez "do".<br>
      <b>Echo question</b>: powtarzamy operator z osobą, wyrażamy reakcję.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Question tags – uzupełnij" },
    { type: "gap", text: '<span class="en">You\'re Polish, ________?</span>', answers: ["aren't you", "are not you"] },
    { type: "gap", text: '<span class="en">She works here, ________?</span>', answers: ["doesn't she", "does not she"] },
    { type: "gap", text: '<span class="en">You don\'t smoke, ________?</span>', answers: ["do you"] },
    { type: "gap", text: '<span class="en">They went home, ________?</span>', answers: ["didn't they"] },
    { type: "gap", text: '<span class="en">Let\'s go, ________?</span>', answers: ["shall we"] },
    { type: "gap", text: '<span class="en">I\'m right, ________?</span>', answers: ["aren't I"] },
    { type: "gap", text: '<span class="en">Nobody called, ________?</span>', answers: ["did they"] },
    { type: "gap", text: '<span class="en">Close the window, ________?</span>', answers: ["will you", "won't you"] },
    { type: "gap", text: '<span class="en">There\'s a problem, ________?</span>', answers: ["isn't there"] },
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
    { type: "gap", text: '<span class="en">________ you like coffee? (Nie lubisz kawy?)</span>', answers: ["don't", "do not"] },
    { type: "gap", text: '<span class="en">________ you know? (Nie wiedziałeś?)</span>', answers: ["didn't", "did not"] },
    { type: "gap", text: '<span class="en">Why ________ we go out? (Może wyjdziemy?)</span>', answers: ["don't", "do not"] },
    { type: "header", text: "E. What... like vs How" },
    { type: "gap", text: '<span class="en">________ is she like? (Jaka jest z charakteru?)</span>', answers: ["what"] },
    { type: "gap", text: '<span class="en">________ does she look like? (Jak wygląda?)</span>', answers: ["what"] },
    { type: "gap", text: '<span class="en">________ is she? (Jak się czuje?)</span>', answers: ["how"] },
    { type: "gap", text: '<span class="en">________ does she like? (Co lubi?)</span>', answers: ["what"] },
    { type: "header", text: "F. Popraw błędy" },
    { type: "gap", text: '<span class="en">Do you know where is the station? → ________</span>', answers: ["do you know where the station is", "do you know where the station is?"], wide: true },
    { type: "gap", text: '<span class="en">Where you live? → ________</span>', answers: ["where do you live", "where do you live?"], wide: true },
    { type: "gap", text: '<span class="en">Who did called you? → ________</span>', answers: ["who called you", "who called you?"], wide: true },
    { type: "gap", text: '<span class="en">Do you can help me? → ________</span>', answers: ["can you help me", "can you help me?"], wide: true },
    { type: "header", text: "G. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Czy możesz mi powiedzieć, gdzie jest dworzec?</span>', answers: ["could you tell me where the station is", "could you tell me where the station is?", "can you tell me where the station is", "can you tell me where the station is?"], wide: true },
    { type: "gap", text: '<span class="pl">Nie wiem, czy ona przyjdzie.</span>', answers: ["i don't know if she's coming", "i don't know if she's coming.", "i don't know if she is coming", "i don't know whether she is coming"], wide: true },
    { type: "gap", text: '<span class="pl">Jesteś Polakiem, prawda?</span>', answers: ["you are polish aren't you", "you are polish, aren't you", "you are polish, aren't you?", "you're polish aren't you"], wide: true },
    { type: "gap", text: '<span class="pl">Jaka ona jest?</span>', answers: ["what is she like", "what is she like?", "what's she like", "what's she like?"], wide: true },
    { type: "gap", text: '<span class="pl">Jak ona się czuje?</span>', answers: ["how is she", "how is she?", "how's she", "how's she?"], wide: true },
    { type: "header", text: "H. Napisz" },
    { type: "open", text: "Napisz 5 uprzejmych pytań po angielsku (np. pytasz o drogę, o czas, o opinię). Użyj indirect questions.", placeholder: "np. Could you tell me... Do you know if... I wonder..." }
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
    { q: "Które zdanie jest poprawne?", opcje: ["Do you know where is the station?", "Do you know where the station is?", "Do you know where does the station is?", "Do you know where are the station?"], poprawna: 1, wyjasnienie: "Indirect – bez inwersji." },
    { q: "Nobody called, ______?", opcje: ["did they", "didn't they", "did it", "does it"], poprawna: 0, wyjasnienie: "Nobody → tag 'did they'." }
  ]
};

/* ============================================================
   G16B2 – Phrasal Verbs – zaawansowane
============================================================ */
window.LESSON_DATA["G16B2"] = {
  tytul: "Czasowniki frazowe – poziom zaawansowany",
  poziom: "B2",
  dzial: "G16",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Last month I decided to take up a new hobby, so I signed up for a photography course. At first it was difficult to keep up with the group, but I didn't give up. I found out that I really enjoy it. I also met some great people – we get along really well. Sometimes we hang out after the classes and talk about our photos. I'm looking forward to our first exhibition next year. My teacher says I should keep at it, because I'm making progress. I think it was one of the best decisions I've made recently. I'm planning to put together a small portfolio by the end of the year.
    </p>

    <h3>Phrasal verbs – typy</h3>
    <p>Rozróżniamy <b>rozłączne</b> (dopełnienie można wstawić w środek) i <b>nierozłączne</b> (dopełnienie zawsze po).</p>
    <table>
      <tr><th>Rozłączne</th><th>Nierozłączne</th></tr>
      <tr>
        <td class="en">turn <b>on</b> the TV = turn the TV <b>on</b><br>pick <b>up</b> the phone = pick the phone <b>up</b><br>give <b>back</b> the book = give the book <b>back</b></td>
        <td class="en">look <b>after</b> the baby (nie: look the baby after)<br>look <b>forward to</b> the trip<br>get <b>on</b> with sb<br>put <b>up</b> with sth</td>
      </tr>
    </table>
    <p><b>Z zaimkiem</b> – zawsze w środku (rozłączne):</p>
    <table>
      <tr><td class="en">Turn <b>it</b> on. ✅ · Turn on it. ❌</td></tr>
      <tr><td class="en">Pick <b>them</b> up. ✅ · Pick up them. ❌</td></tr>
    </table>

    <h3>Kategorie – phrasal verbs B2</h3>

    <p><b>1. Relacje i zachowanie</b></p>
    <table>
      <tr><td class="en">get on / along with</td><td class="pl">dogadywać się z</td></tr>
      <tr><td class="en">fall out with</td><td class="pl">pokłócić się z</td></tr>
      <tr><td class="en">make up with</td><td class="pl">pogodzić się z</td></tr>
      <tr><td class="en">look up to</td><td class="pl">podziwiać</td></tr>
      <tr><td class="en">look down on</td><td class="pl">patrzeć z góry na</td></tr>
      <tr><td class="en">put up with</td><td class="pl">znosić</td></tr>
      <tr><td class="en">take after</td><td class="pl">być podobnym do</td></tr>
    </table>

    <p><b>2. Nauka i praca</b></p>
    <table>
      <tr><td class="en">take up</td><td class="pl">zacząć (hobby)</td></tr>
      <tr><td class="en">give up</td><td class="pl">poddawać się</td></tr>
      <tr><td class="en">keep up with</td><td class="pl">nadążać za</td></tr>
      <tr><td class="en">keep at</td><td class="pl">nie przestawać (czegoś robić)</td></tr>
      <tr><td class="en">sign up for</td><td class="pl">zapisać się na</td></tr>
      <tr><td class="en">hand in</td><td class="pl">oddać (pracę)</td></tr>
      <tr><td class="en">hand out</td><td class="pl">rozdawać</td></tr>
      <tr><td class="en">find out</td><td class="pl">dowiedzieć się</td></tr>
      <tr><td class="en">figure out</td><td class="pl">rozgryźć, zrozumieć</td></tr>
      <tr><td class="en">catch up on</td><td class="pl">nadrobić (zaległości)</td></tr>
    </table>

    <p><b>3. Problemy i rozwiązania</b></p>
    <table>
      <tr><td class="en">sort out</td><td class="pl">uporać się z</td></tr>
      <tr><td class="en">deal with</td><td class="pl">poradzić sobie z</td></tr>
      <tr><td class="en">get over</td><td class="pl">dojść do siebie po</td></tr>
      <tr><td class="en">come up with</td><td class="pl">wymyślić</td></tr>
      <tr><td class="en">look into</td><td class="pl">zbadać sprawę</td></tr>
      <tr><td class="en">turn out</td><td class="pl">okazać się</td></tr>
      <tr><td class="en">run out of</td><td class="pl">skończyć się (zapasy)</td></tr>
      <tr><td class="en">put off</td><td class="pl">przełożyć (na później)</td></tr>
    </table>

    <p><b>4. Życie codzienne i plany</b></p>
    <table>
      <tr><td class="en">meet up with</td><td class="pl">spotykać się z</td></tr>
      <tr><td class="en">hang out</td><td class="pl">spędzać czas</td></tr>
      <tr><td class="en">go out</td><td class="pl">wychodzić (do miasta)</td></tr>
      <tr><td class="en">set off</td><td class="pl">wyruszać</td></tr>
      <tr><td class="en">give back</td><td class="pl">oddawać</td></tr>
      <tr><td class="en">throw away</td><td class="pl">wyrzucać</td></tr>
      <tr><td class="en">put together</td><td class="pl">złożyć, skompletować</td></tr>
      <tr><td class="en">try on</td><td class="pl">przymierzać</td></tr>
      <tr><td class="en">dress up</td><td class="pl">ubrać się elegancko</td></tr>
    </table>

    <p><b>5. Komunikacja</b></p>
    <table>
      <tr><td class="en">bring up</td><td class="pl">poruszyć temat / wychować</td></tr>
      <tr><td class="en">point out</td><td class="pl">wskazać, zwrócić uwagę</td></tr>
      <tr><td class="en">speak up</td><td class="pl">mówić głośniej / zabrać głos</td></tr>
      <tr><td class="en">speak out</td><td class="pl">publicznie protestować</td></tr>
      <tr><td class="en">talk over</td><td class="pl">przedyskutować</td></tr>
      <tr><td class="en">get through to</td><td class="pl">dodzwonić się / dotrzeć (z przekazem)</td></tr>
      <tr><td class="en">bring about</td><td class="pl">spowodować</td></tr>
    </table>

    <h3>Phrasal verbs – 3-członowe</h3>
    <table>
      <tr><td class="en">look forward to</td><td class="pl">czekać z niecierpliwością</td></tr>
      <tr><td class="en">get on with</td><td class="pl">dogadywać się</td></tr>
      <tr><td class="en">put up with</td><td class="pl">znosić</td></tr>
      <tr><td class="en">come up with</td><td class="pl">wymyślić</td></tr>
      <tr><td class="en">catch up with</td><td class="pl">dogonić</td></tr>
      <tr><td class="en">keep up with</td><td class="pl">nadążać</td></tr>
      <tr><td class="en">look out for</td><td class="pl">wypatrywać, uważać na</td></tr>
    </table>
    <p><b>Te są zawsze nierozłączne.</b></p>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      Z zaimkiem (it, them) – zawsze w środku przy rozłącznych: <span class="en">Turn it off.</span><br>
      3-członowe phrasal verbs – NIE rozdzielamy: <span class="en">look forward to sth</span>, nie "look sth forward to".
    </div>
  `,
  karta: [
    { type: "header", text: "A. Dopasuj phrasal verb do znaczenia" },
    { type: "gap", text: '<span class="pl">wstawać → get ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">opiekować się → look ________</span>', answers: ["after"] },
    { type: "gap", text: '<span class="pl">poddawać się → give ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">dowiedzieć się → find ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">dogadywać się → get ________ with</span>', answers: ["on", "along"] },
    { type: "gap", text: '<span class="pl">spędzać czas → hang ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">podziwiać → look ________ to</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">zacząć (hobby) → take ________</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">nadążać za → keep ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">zapisać się na → sign ________ for</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">znosić → put ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">dojść do siebie po → get ________</span>', answers: ["over"] },
    { type: "gap", text: '<span class="pl">wymyślić → come ________ with</span>', answers: ["up"] },
    { type: "gap", text: '<span class="pl">okazać się → turn ________</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">skończyć się (zapasy) → run ________ of</span>', answers: ["out"] },
    { type: "gap", text: '<span class="pl">przełożyć → put ________</span>', answers: ["off"] },
    { type: "gap", text: '<span class="pl">zbadać sprawę → look ________</span>', answers: ["into"] },
    { type: "gap", text: '<span class="pl">poruszyć temat → bring ________</span>', answers: ["up"] },
    { type: "header", text: "B. Uzupełnij zdanie" },
    { type: "gap", text: '<span class="en">I decided to ________ (zacząć) a new hobby.</span>', answers: ["take up"] },
    { type: "gap", text: '<span class="en">I ________ (zapisałem się) for a photography course.</span>', answers: ["signed up"] },
    { type: "gap", text: '<span class="en">It was hard to ________ (nadążać) with the group.</span>', answers: ["keep up"] },
    { type: "gap", text: '<span class="en">I didn\'t ________ (poddawać się).</span>', answers: ["give up"] },
    { type: "gap", text: '<span class="en">I ________ (dowiedziałem się) that I love it.</span>', answers: ["found out"] },
    { type: "gap", text: '<span class="en">We ________ (dogadujemy się) really well.</span>', answers: ["get on", "get along"] },
    { type: "gap", text: '<span class="en">We ________ (spędzamy czas) after classes.</span>', answers: ["hang out"] },
    { type: "gap", text: '<span class="en">I\'m ________ (czekam z niecierpliwością) our exhibition.</span>', answers: ["looking forward to"] },
    { type: "header", text: "C. Rozłączne – wstaw zaimek" },
    { type: "gap", text: '<span class="en">Turn on the TV. → Turn ________ on.</span>', answers: ["it"] },
    { type: "gap", text: '<span class="en">Pick up your toys. → Pick ________ up.</span>', answers: ["them"] },
    { type: "gap", text: '<span class="en">Turn off the light. → Turn ________ off.</span>', answers: ["it"] },
    { type: "gap", text: '<span class="en">Give back the book. → Give ________ back.</span>', answers: ["it"] },
    { type: "header", text: "D. Nierozłączne – popraw jeśli źle" },
    { type: "gap", text: '<span class="en">Look the baby after. → ________</span>', answers: ["look after the baby", "look after the baby."], wide: true },
    { type: "gap", text: '<span class="en">Put up with it, I can\'t it. → ________</span>', answers: ["i can't put up with it", "i can't put up with it.", "i cannot put up with it", "i cannot put up with it."], wide: true },
    { type: "gap", text: '<span class="en">Look forward to it, I really it. → ________</span>', answers: ["i'm really looking forward to it", "i'm really looking forward to it.", "i am really looking forward to it", "i am really looking forward to it."], wide: true },
    { type: "header", text: "E. Popraw błędy" },
    { type: "gap", text: '<span class="en">Turn off it. → ________</span>', answers: ["turn it off", "turn it off."], wide: true },
    { type: "gap", text: '<span class="en">I look forward to see you. → ________</span>', answers: ["i look forward to seeing you", "i look forward to seeing you."], wide: true },
    { type: "gap", text: '<span class="en">I get on good with my sister. → ________</span>', answers: ["i get on well with my sister", "i get on well with my sister.", "i get along well with my sister", "i get along well with my sister."], wide: true },
    { type: "gap", text: '<span class="en">We ran out gas. → ________</span>', answers: ["we ran out of gas", "we ran out of gas.", "we ran out of petrol", "we ran out of petrol."], wide: true },
    { type: "header", text: "F. Przetłumacz" },
    { type: "gap", text: '<span class="pl">Postanowiłem zacząć nowe hobby.</span>', answers: ["i decided to take up a new hobby", "i decided to take up a new hobby."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogę się doczekać spotkania.</span>', answers: ["i'm looking forward to seeing you", "i'm looking forward to seeing you.", "i am looking forward to seeing you", "i am looking forward to seeing you."], wide: true },
    { type: "gap", text: '<span class="pl">Dobrze dogaduję się z moim bratem.</span>', answers: ["i get on well with my brother", "i get on well with my brother.", "i get along well with my brother", "i get along well with my brother."], wide: true },
    { type: "gap", text: '<span class="pl">Nie mogę tego znieść.</span>', answers: ["i can't put up with it", "i can't put up with it.", "i cannot put up with it", "i cannot put up with it."], wide: true },
    { type: "gap", text: '<span class="pl">Skończyło nam się paliwo.</span>', answers: ["we ran out of petrol", "we ran out of petrol.", "we ran out of gas", "we ran out of gas."], wide: true },
    { type: "header", text: "G. Napisz" },
    { type: "open", text: "Opisz nowe hobby lub aktywność, którą zacząłeś niedawno – użyj phrasal verbs (take up, sign up for, keep up with, look forward to...).", placeholder: "np. Last month I took up... I signed up for... I'm getting on well with..." }
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
    { q: "skończyć się (zapasy) = ______", opcje: ["run out of", "run into", "run over", "run away"], poprawna: 0, wyjasnienie: "run out of – skończyć się." },
    { q: "okazać się = ______", opcje: ["turn out", "turn on", "turn off", "turn up"], poprawna: 0, wyjasnienie: "turn out – okazać się." }
  ]
};