window.LESSON_DATA = window.LESSON_DATA || {};

/* ============================================================
   T1A1 – Człowiek, tożsamość
============================================================ */
window.LESSON_DATA["T1A1"] = {
  tytul: "Człowiek – ja i inni",
  poziom: "A1",
  dzial: "T1",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Hi! My name is Anna. I am seventeen years old. I am from Poland. I live in Kraków. I am a student. I have a brother and a sister. I am tall and I have brown hair. I am friendly and hard-working. In my free time I like reading books and listening to music. Nice to meet you!
    </p>

    <h3>Podstawowe informacje o sobie</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">name</td><td class="pl">imię</td></tr>
      <tr><td class="en">surname</td><td class="pl">nazwisko</td></tr>
      <tr><td class="en">age</td><td class="pl">wiek</td></tr>
      <tr><td class="en">country</td><td class="pl">kraj</td></tr>
      <tr><td class="en">city</td><td class="pl">miasto</td></tr>
      <tr><td class="en">address</td><td class="pl">adres</td></tr>
    </table>

    <h3>Zwroty – o sobie</h3>
    <table>
      <tr><td class="en">My name is...</td><td class="pl">Nazywam się...</td></tr>
      <tr><td class="en">I am ... years old.</td><td class="pl">Mam ... lat.</td></tr>
      <tr><td class="en">I am from Poland.</td><td class="pl">Jestem z Polski.</td></tr>
      <tr><td class="en">I live in Warsaw.</td><td class="pl">Mieszkam w Warszawie.</td></tr>
      <tr><td class="en">I am a student.</td><td class="pl">Jestem uczniem.</td></tr>
      <tr><td class="en">Nice to meet you.</td><td class="pl">Miło mi cię poznać.</td></tr>
    </table>

    <h3>Wygląd – appearance</h3>
    <table>
      <tr><td class="en">tall / short</td><td class="pl">wysoki / niski</td></tr>
      <tr><td class="en">slim / fat</td><td class="pl">szczupły / gruby</td></tr>
      <tr><td class="en">long / short hair</td><td class="pl">długie / krótkie włosy</td></tr>
      <tr><td class="en">brown / blond / black hair</td><td class="pl">brązowe / blond / czarne włosy</td></tr>
      <tr><td class="en">blue / green / brown eyes</td><td class="pl">niebieskie / zielone / brązowe oczy</td></tr>
      <tr><td class="en">young / old</td><td class="pl">młody / stary</td></tr>
    </table>

    <h3>Charakter – personality</h3>
    <table>
      <tr><td class="en">friendly</td><td class="pl">przyjazny</td></tr>
      <tr><td class="en">kind</td><td class="pl">miły</td></tr>
      <tr><td class="en">funny</td><td class="pl">zabawny</td></tr>
      <tr><td class="en">shy</td><td class="pl">nieśmiały</td></tr>
      <tr><td class="en">hard-working</td><td class="pl">pracowity</td></tr>
      <tr><td class="en">lazy</td><td class="pl">leniwy</td></tr>
      <tr><td class="en">outgoing</td><td class="pl">towarzyski</td></tr>
      <tr><td class="en">quiet</td><td class="pl">cichy, spokojny</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">I have brown hair.</span> (mam brązowe włosy) – nie "I am brown hair".<br>
      <span class="en">I am tall.</span> (jestem wysoki) – o cechach używamy "be".
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">My ________ is Anna.</span>', answers: ["name"] },
    { type: "gap", text: '<span class="en">I am seventeen years ________.</span>', answers: ["old"] },
    { type: "gap", text: '<span class="en">I am ________ Poland.</span>', answers: ["from"] },
    { type: "gap", text: '<span class="en">I ________ in Kraków.</span>', answers: ["live"] },
    { type: "gap", text: '<span class="en">I am a ________.</span>', answers: ["student"] },
    { type: "gap", text: '<span class="en">I am ________ and hard-working.</span>', answers: ["friendly"] },
    { type: "header", text: "B. Dopasuj polski do angielskiego" },
    { type: "gap", text: '<span class="pl">wysoki → ________</span>', answers: ["tall"] },
    { type: "gap", text: '<span class="pl">nieśmiały → ________</span>', answers: ["shy"] },
    { type: "gap", text: '<span class="pl">miły → ________</span>', answers: ["kind"] },
    { type: "gap", text: '<span class="pl">leniwy → ________</span>', answers: ["lazy"] },
    { type: "gap", text: '<span class="pl">towarzyski → ________</span>', answers: ["outgoing"] },
    { type: "header", text: "C. Uzupełnij zdania o sobie" },
    { type: "gap", text: '<span class="en">My name ________ ...</span>', answers: ["is"] },
    { type: "gap", text: '<span class="en">I am ________ years old.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">I am ________ (kraj).</span>', answers: ["from"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Nazywam się Anna.</span>', answers: ["my name is anna", "my name is anna.", "my name's anna", "my name's anna."], wide: true },
    { type: "gap", text: '<span class="pl">Mam 17 lat.</span>', answers: ["i am seventeen years old", "i am 17 years old", "i am seventeen years old.", "i am 17 years old.", "i'm seventeen years old", "i'm 17 years old"], wide: true },
    { type: "gap", text: '<span class="pl">Jestem z Polski.</span>', answers: ["i am from poland", "i am from poland.", "i'm from poland", "i'm from poland."], wide: true },
    { type: "gap", text: '<span class="pl">Mieszkam w Warszawie.</span>', answers: ["i live in warsaw", "i live in warsaw.", "i live in warsaw"], wide: true },
    { type: "gap", text: '<span class="pl">Jestem uczniem.</span>', answers: ["i am a student", "i am a student.", "i'm a student", "i'm a student."], wide: true },
    { type: "gap", text: '<span class="pl">Mam brązowe włosy.</span>', answers: ["i have brown hair", "i have brown hair.", "i've got brown hair", "i've got brown hair."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań o sobie – imię, wiek, kraj, miasto, wygląd, charakter.", placeholder: "np. My name is... I am... I live in... I am tall and..." }
  ],
  test: [
    { q: "My name ______ Anna.", opcje: ["is", "am", "are", "be"], poprawna: 0, wyjasnienie: "My name is... – liczba pojedyncza." },
    { q: "I ______ 17 years old.", opcje: ["am", "is", "are", "have"], poprawna: 0, wyjasnienie: "Wiek: I am ... years old." },
    { q: "I am ______ Poland.", opcje: ["from", "in", "at", "on"], poprawna: 0, wyjasnienie: "Jestem z → I am from." },
    { q: "I ______ in Warsaw.", opcje: ["live", "living", "lives", "am live"], poprawna: 0, wyjasnienie: "I live in..." },
    { q: "Someone who doesn't talk much is ______.", opcje: ["quiet", "outgoing", "funny", "lazy"], poprawna: 0, wyjasnienie: "quiet = cichy, spokojny." },
    { q: "Someone who works hard is ______.", opcje: ["hard-working", "lazy", "shy", "quiet"], poprawna: 0, wyjasnienie: "hard-working = pracowity." },
    { q: "I ______ brown hair.", opcje: ["have", "am", "is", "has"], poprawna: 0, wyjasnienie: "Włosy: I have ... hair." },
    { q: "______ to meet you.", opcje: ["Nice", "Good", "Fine", "OK"], poprawna: 0, wyjasnienie: "Nice to meet you – utrwalone." },
    { q: "Someone who likes people and talks a lot is ______.", opcje: ["outgoing", "shy", "quiet", "lazy"], poprawna: 0, wyjasnienie: "outgoing = towarzyski." },
    { q: "I am tall ______ I have brown eyes.", opcje: ["and", "but", "or", "so"], poprawna: 0, wyjasnienie: "Dodawanie → and." }
  ]
};

/* ============================================================
   T2A1 – Rodzina, relacje
============================================================ */
window.LESSON_DATA["T2A1"] = {
  tytul: "Rodzina i relacje",
  poziom: "A1",
  dzial: "T2",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I have a big family. My mother is a teacher and my father is a doctor. I have one brother and two sisters. My grandmother lives with us. We are very close. My brother is funny and my sister is kind. We usually eat dinner together. On Sundays we visit my grandparents.
    </p>

    <h3>Członkowie rodziny</h3>
    <table>
      <tr><td class="en">mother</td><td class="pl">mama</td></tr>
      <tr><td class="en">father</td><td class="pl">tata</td></tr>
      <tr><td class="en">parents</td><td class="pl">rodzice</td></tr>
      <tr><td class="en">son / daughter</td><td class="pl">syn / córka</td></tr>
      <tr><td class="en">brother / sister</td><td class="pl">brat / siostra</td></tr>
      <tr><td class="en">grandmother / grandfather</td><td class="pl">babcia / dziadek</td></tr>
      <tr><td class="en">grandparents</td><td class="pl">dziadkowie</td></tr>
      <tr><td class="en">aunt / uncle</td><td class="pl">ciocia / wujek</td></tr>
      <tr><td class="en">cousin</td><td class="pl">kuzyn / kuzynka</td></tr>
      <tr><td class="en">wife / husband</td><td class="pl">żona / mąż</td></tr>
    </table>

    <h3>Zwroty o rodzinie</h3>
    <table>
      <tr><td class="en">I have a big family.</td><td class="pl">Mam dużą rodzinę.</td></tr>
      <tr><td class="en">I have one brother.</td><td class="pl">Mam jednego brata.</td></tr>
      <tr><td class="en">I have two sisters.</td><td class="pl">Mam dwie siostry.</td></tr>
      <tr><td class="en">I am an only child.</td><td class="pl">Jestem jedynakiem.</td></tr>
      <tr><td class="en">We are very close.</td><td class="pl">Jesteśmy bardzo zżyci.</td></tr>
      <tr><td class="en">We get on well.</td><td class="pl">Dobrze się dogadujemy.</td></tr>
    </table>

    <h3>Relacje</h3>
    <table>
      <tr><td class="en">close</td><td class="pl">bliski</td></tr>
      <tr><td class="en">supportive</td><td class="pl">wspierający</td></tr>
      <tr><td class="en">strict</td><td class="pl">surowy</td></tr>
      <tr><td class="en">kind</td><td class="pl">miły</td></tr>
      <tr><td class="en">funny</td><td class="pl">zabawny</td></tr>
      <tr><td class="en">helpful</td><td class="pl">pomocny</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">I have</span> (mam) – dla rodziny. <br>
      <span class="en">He has two brothers.</span> – 3 os. l.poj. z "has".
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I have a big ________.</span>', answers: ["family"] },
    { type: "gap", text: '<span class="en">My mother is a ________.</span>', answers: ["teacher"] },
    { type: "gap", text: '<span class="en">My father is a ________.</span>', answers: ["doctor"] },
    { type: "gap", text: '<span class="en">I have one ________ and two sisters.</span>', answers: ["brother"] },
    { type: "gap", text: '<span class="en">We are very ________.</span>', answers: ["close"] },
    { type: "gap", text: '<span class="en">On Sundays we visit my ________.</span>', answers: ["grandparents"] },
    { type: "header", text: "B. Kto to jest? Dopasuj" },
    { type: "gap", text: '<span class="pl">matka → ________</span>', answers: ["mother", "mum"] },
    { type: "gap", text: '<span class="pl">córka → ________</span>', answers: ["daughter"] },
    { type: "gap", text: '<span class="pl">ciocia → ________</span>', answers: ["aunt"] },
    { type: "gap", text: '<span class="pl">kuzyn → ________</span>', answers: ["cousin"] },
    { type: "gap", text: '<span class="pl">dziadek → ________</span>', answers: ["grandfather", "grandpa"] },
    { type: "gap", text: '<span class="pl">mąż → ________</span>', answers: ["husband"] },
    { type: "header", text: "C. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Mam dwóch braci.</span>', answers: ["i have two brothers", "i have two brothers.", "i have got two brothers", "i have got two brothers."], wide: true },
    { type: "gap", text: '<span class="pl">Moja mama jest nauczycielką.</span>', answers: ["my mother is a teacher", "my mother is a teacher.", "my mum is a teacher", "my mum is a teacher."], wide: true },
    { type: "gap", text: '<span class="pl">Jesteśmy bardzo zżyci.</span>', answers: ["we are very close", "we are very close.", "we're very close", "we're very close."], wide: true },
    { type: "gap", text: '<span class="pl">Mam jedną siostrę.</span>', answers: ["i have one sister", "i have one sister.", "i have got one sister", "i have got one sister."], wide: true },
    { type: "header", text: "D. Uzupełnij o sobie" },
    { type: "gap", text: '<span class="en">I have ________ brothers / sisters.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">My mother is a ________. (job)</span>', answers: ["-"] },
    { type: "header", text: "E. Napisz o swojej rodzinie" },
    { type: "open", text: "Napisz 5 zdań o swojej rodzinie – kto jest, ile osób, jakie ma zawody, jacy są.", placeholder: "np. I have a small family. My mother is... My father is..." }
  ],
  test: [
    { q: "My mother ______ a teacher.", opcje: ["is", "are", "am", "be"], poprawna: 0, wyjasnienie: "3 os. l.poj. → is." },
    { q: "I ______ two brothers.", opcje: ["have", "has", "am", "is"], poprawna: 0, wyjasnienie: "I + have." },
    { q: "She ______ one sister.", opcje: ["has", "have", "is", "are"], poprawna: 0, wyjasnienie: "3 os. l.poj. → has." },
    { q: "Your mother's mother is your ______.", opcje: ["grandmother", "aunt", "cousin", "sister"], poprawna: 0, wyjasnienie: "grandmother = babcia." },
    { q: "Your father's brother is your ______.", opcje: ["uncle", "aunt", "cousin", "brother"], poprawna: 0, wyjasnienie: "uncle = wujek." },
    { q: "Your aunt's son is your ______.", opcje: ["cousin", "brother", "nephew", "uncle"], poprawna: 0, wyjasnienie: "cousin = kuzyn." },
    { q: "We ______ very close.", opcje: ["are", "is", "am", "be"], poprawna: 0, wyjasnienie: "We + are." },
    { q: "My parents ______ doctors.", opcje: ["are", "is", "am", "be"], poprawna: 0, wyjasnienie: "Liczba mnoga → are." },
    { q: "I am an only ______.", opcje: ["child", "kid", "son", "boy"], poprawna: 0, wyjasnienie: "only child = jedynak." },
    { q: "We get ______ well.", opcje: ["on", "in", "at", "up"], poprawna: 0, wyjasnienie: "get on well = dobrze się dogadywać." }
  ]
};

/* ============================================================
   T3A1 – Dom i mieszkanie
============================================================ */
window.LESSON_DATA["T3A1"] = {
  tytul: "Dom i mieszkanie",
  poziom: "A1",
  dzial: "T3",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I live in a flat in Warsaw. It has three rooms: a living room, a bedroom and a kitchen. There is also a bathroom and a small balcony. In my bedroom I have a bed, a desk and a wardrobe. In the kitchen there is a fridge, a cooker and a table. My favourite room is the living room because it is big and comfortable.
    </p>

    <h3>Pomieszczenia</h3>
    <table>
      <tr><td class="en">living room</td><td class="pl">salon</td></tr>
      <tr><td class="en">bedroom</td><td class="pl">sypialnia</td></tr>
      <tr><td class="en">kitchen</td><td class="pl">kuchnia</td></tr>
      <tr><td class="en">bathroom</td><td class="pl">łazienka</td></tr>
      <tr><td class="en">hall</td><td class="pl">przedpokój</td></tr>
      <tr><td class="en">balcony</td><td class="pl">balkon</td></tr>
      <tr><td class="en">garden</td><td class="pl">ogród</td></tr>
      <tr><td class="en">garage</td><td class="pl">garaż</td></tr>
    </table>

    <h3>Meble i wyposażenie</h3>
    <table>
      <tr><td class="en">bed</td><td class="pl">łóżko</td></tr>
      <tr><td class="en">desk</td><td class="pl">biurko</td></tr>
      <tr><td class="en">wardrobe</td><td class="pl">szafa</td></tr>
      <tr><td class="en">table</td><td class="pl">stół</td></tr>
      <tr><td class="en">chair</td><td class="pl">krzesło</td></tr>
      <tr><td class="en">sofa</td><td class="pl">kanapa</td></tr>
      <tr><td class="en">fridge</td><td class="pl">lodówka</td></tr>
      <tr><td class="en">cooker</td><td class="pl">kuchenka</td></tr>
      <tr><td class="en">shower</td><td class="pl">prysznic</td></tr>
      <tr><td class="en">window</td><td class="pl">okno</td></tr>
      <tr><td class="en">door</td><td class="pl">drzwi</td></tr>
    </table>

    <h3>Zwroty o mieszkaniu</h3>
    <table>
      <tr><td class="en">I live in a flat / house.</td><td class="pl">Mieszkam w mieszkaniu / domu.</td></tr>
      <tr><td class="en">It has three rooms.</td><td class="pl">Ma trzy pokoje.</td></tr>
      <tr><td class="en">There is a sofa.</td><td class="pl">Jest kanapa. (l.poj.)</td></tr>
      <tr><td class="en">There are two beds.</td><td class="pl">Są dwa łóżka. (l.mn.)</td></tr>
      <tr><td class="en">My favourite room is...</td><td class="pl">Mój ulubiony pokój to...</td></tr>
      <tr><td class="en">It is big and comfortable.</td><td class="pl">Jest duży i wygodny.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">There is</span> (jest – jedna rzecz) vs <span class="en">There are</span> (są – wiele rzeczy).<br>
      ✅ <span class="en">There is a table.</span> · <span class="en">There are two tables.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I live in a ________ in Warsaw.</span>', answers: ["flat", "house"] },
    { type: "gap", text: '<span class="en">It has three ________.</span>', answers: ["rooms"] },
    { type: "gap", text: '<span class="en">There is also a small ________.</span>', answers: ["balcony"] },
    { type: "gap", text: '<span class="en">In my bedroom I have a ________, a desk and a wardrobe.</span>', answers: ["bed"] },
    { type: "gap", text: '<span class="en">My favourite room is the ________ room.</span>', answers: ["living"] },
    { type: "header", text: "B. W którym pomieszczeniu?" },
    { type: "gap", text: '<span class="pl">spimy → ________</span>', answers: ["bedroom"] },
    { type: "gap", text: '<span class="pl">gotujemy → ________</span>', answers: ["kitchen"] },
    { type: "gap", text: '<span class="pl">myjemy się → ________</span>', answers: ["bathroom"] },
    { type: "gap", text: '<span class="pl">oglądamy TV razem → ________</span>', answers: ["living room"] },
    { type: "gap", text: '<span class="pl">wieszamy kurtki → ________</span>', answers: ["hall"] },
    { type: "header", text: "C. There is czy there are?" },
    { type: "gap", text: '<span class="en">________ a table in the kitchen.</span>', answers: ["there is"] },
    { type: "gap", text: '<span class="en">________ two beds in the room.</span>', answers: ["there are"] },
    { type: "gap", text: '<span class="en">________ a shower in the bathroom.</span>', answers: ["there is"] },
    { type: "gap", text: '<span class="en">________ four chairs at the table.</span>', answers: ["there are"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Mieszkam w mieszkaniu.</span>', answers: ["i live in a flat", "i live in a flat.", "i live in a house", "i live in a house."], wide: true },
    { type: "gap", text: '<span class="pl">W kuchni jest stół.</span>', answers: ["there is a table in the kitchen", "there is a table in the kitchen.", "there's a table in the kitchen", "there's a table in the kitchen."], wide: true },
    { type: "gap", text: '<span class="pl">Mam duży pokój.</span>', answers: ["i have a big room", "i have a big room.", "i have a large room", "i have a large room."], wide: true },
    { type: "gap", text: '<span class="pl">Moje mieszkanie jest małe.</span>', answers: ["my flat is small", "my flat is small.", "my house is small", "my house is small."], wide: true },
    { type: "header", text: "E. Napisz o swoim mieszkaniu" },
    { type: "open", text: "Opisz swoje mieszkanie / dom – ile pokoi, co w nich jest, jaki jest twój ulubiony pokój.", placeholder: "np. I live in a flat in... It has..." }
  ],
  test: [
    { q: "You sleep in a ______.", opcje: ["bedroom", "kitchen", "bathroom", "hall"], poprawna: 0, wyjasnienie: "bedroom = sypialnia." },
    { q: "You cook in a ______.", opcje: ["kitchen", "hall", "bedroom", "balcony"], poprawna: 0, wyjasnienie: "kitchen = kuchnia." },
    { q: "There ______ a table in the room.", opcje: ["is", "are", "be", "am"], poprawna: 0, wyjasnienie: "Liczba pojedyncza → there is." },
    { q: "There ______ two chairs.", opcje: ["is", "are", "be", "am"], poprawna: 1, wyjasnienie: "Liczba mnoga → there are." },
    { q: "You wash in the ______.", opcje: ["bathroom", "kitchen", "bedroom", "hall"], poprawna: 0, wyjasnienie: "bathroom = łazienka." },
    { q: "______ in a flat in Warsaw.", opcje: ["I live", "I am live", "I living", "I am living"], poprawna: 0, wyjasnienie: "I live in..." },
    { q: "I have a ______ (łóżko) in my bedroom.", opcje: ["bed", "desk", "chair", "sofa"], poprawna: 0, wyjasnienie: "bed = łóżko." },
    { q: "You keep food cold in a ______.", opcje: ["fridge", "cooker", "table", "window"], poprawna: 0, wyjasnienie: "fridge = lodówka." },
    { q: "My ______ room is the living room.", opcje: ["favourite", "biggest", "best of", "most"], poprawna: 0, wyjasnienie: "favourite = ulubiony." },
    { q: "I have a big flat. It has three ______.", opcje: ["rooms", "room", "houses", "floors"], poprawna: 0, wyjasnienie: "Three rooms – liczba mnoga." }
  ]
};

/* ============================================================
   T4A1 – Czas wolny i hobby
============================================================ */
window.LESSON_DATA["T4A1"] = {
  tytul: "Czas wolny i hobby",
  poziom: "A1",
  dzial: "T4",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      In my free time I do many things. I like playing football with my friends. On Saturdays I usually go to the cinema or watch films at home. I also like listening to music and reading books. I don't like shopping. At the weekend I often meet my friends in a café. We talk and laugh a lot.
    </p>

    <h3>Aktywności – activities</h3>
    <table>
      <tr><td class="en">play football</td><td class="pl">grać w piłkę nożną</td></tr>
      <tr><td class="en">play computer games</td><td class="pl">grać w gry komputerowe</td></tr>
      <tr><td class="en">watch films</td><td class="pl">oglądać filmy</td></tr>
      <tr><td class="en">listen to music</td><td class="pl">słuchać muzyki</td></tr>
      <tr><td class="en">read books</td><td class="pl">czytać książki</td></tr>
      <tr><td class="en">go to the cinema</td><td class="pl">iść do kina</td></tr>
      <tr><td class="en">go swimming</td><td class="pl">iść pływać</td></tr>
      <tr><td class="en">meet friends</td><td class="pl">spotykać się z przyjaciółmi</td></tr>
      <tr><td class="en">go shopping</td><td class="pl">iść na zakupy</td></tr>
      <tr><td class="en">draw</td><td class="pl">rysować</td></tr>
      <tr><td class="en">cook</td><td class="pl">gotować</td></tr>
      <tr><td class="en">travel</td><td class="pl">podróżować</td></tr>
    </table>

    <h3>Hobby i zainteresowania</h3>
    <table>
      <tr><td class="en">hobby</td><td class="pl">hobby</td></tr>
      <tr><td class="en">sport</td><td class="pl">sport</td></tr>
      <tr><td class="en">music</td><td class="pl">muzyka</td></tr>
      <tr><td class="en">film</td><td class="pl">film</td></tr>
      <tr><td class="en">book</td><td class="pl">książka</td></tr>
      <tr><td class="en">game</td><td class="pl">gra</td></tr>
      <tr><td class="en">photography</td><td class="pl">fotografia</td></tr>
      <tr><td class="en">cooking</td><td class="pl">gotowanie</td></tr>
    </table>

    <h3>Wyrażanie upodobań</h3>
    <table>
      <tr><td class="en">I like...</td><td class="pl">Lubię...</td></tr>
      <tr><td class="en">I love...</td><td class="pl">Uwielbiam...</td></tr>
      <tr><td class="en">I enjoy...</td><td class="pl">Sprawia mi przyjemność...</td></tr>
      <tr><td class="en">I don't like...</td><td class="pl">Nie lubię...</td></tr>
      <tr><td class="en">I hate...</td><td class="pl">Nienawidzę...</td></tr>
      <tr><td class="en">My favourite hobby is...</td><td class="pl">Moje ulubione hobby to...</td></tr>
    </table>

    <div class="tip-box">
      <b>Ważne:</b> po <b>like / love / hate / enjoy</b> używamy <b>-ing</b>:<br>
      ✅ <span class="en">I like playing football.</span><br>
      ❌ <span style="color:#991b1b">I like play football.</span>
    </div>

    <h3>Częstotliwość</h3>
    <table>
      <tr><td class="en">always</td><td class="pl">zawsze</td></tr>
      <tr><td class="en">usually</td><td class="pl">zazwyczaj</td></tr>
      <tr><td class="en">often</td><td class="pl">często</td></tr>
      <tr><td class="en">sometimes</td><td class="pl">czasami</td></tr>
      <tr><td class="en">never</td><td class="pl">nigdy</td></tr>
    </table>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">In my ________ time I do many things.</span>', answers: ["free"] },
    { type: "gap", text: '<span class="en">I like playing ________ with my friends.</span>', answers: ["football"] },
    { type: "gap", text: '<span class="en">On Saturdays I usually go to the ________.</span>', answers: ["cinema"] },
    { type: "gap", text: '<span class="en">I also like listening to ________ and reading books.</span>', answers: ["music"] },
    { type: "gap", text: '<span class="en">I don\'t like ________.</span>', answers: ["shopping"] },
    { type: "gap", text: '<span class="en">At the weekend I often ________ my friends.</span>', answers: ["meet"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">czytać książki → ________</span>', answers: ["read books"] },
    { type: "gap", text: '<span class="pl">słuchać muzyki → ________</span>', answers: ["listen to music"] },
    { type: "gap", text: '<span class="pl">grać w gry → ________</span>', answers: ["play games", "play computer games"] },
    { type: "gap", text: '<span class="pl">iść na zakupy → ________</span>', answers: ["go shopping"] },
    { type: "gap", text: '<span class="pl">spotykać przyjaciół → ________</span>', answers: ["meet friends"] },
    { type: "header", text: "C. Like + -ing" },
    { type: "gap", text: '<span class="en">I like ________ (play) football.</span>', answers: ["playing"] },
    { type: "gap", text: '<span class="en">She loves ________ (read).</span>', answers: ["reading"] },
    { type: "gap", text: '<span class="en">We enjoy ________ (cook).</span>', answers: ["cooking"] },
    { type: "gap", text: '<span class="en">He hates ________ (shop).</span>', answers: ["shopping"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">W wolnym czasie lubię czytać.</span>', answers: ["in my free time i like reading", "in my free time i like reading.", "in my free time i like to read", "in my free time i like to read."], wide: true },
    { type: "gap", text: '<span class="pl">Lubię grać w piłkę nożną.</span>', answers: ["i like playing football", "i like playing football.", "i like to play football", "i like to play football."], wide: true },
    { type: "gap", text: '<span class="pl">Nie lubię zakupów.</span>', answers: ["i don't like shopping", "i don't like shopping.", "i do not like shopping", "i do not like shopping."], wide: true },
    { type: "gap", text: '<span class="pl">W weekend spotykam się z przyjaciółmi.</span>', answers: ["at the weekend i meet my friends", "at the weekend i meet my friends.", "on the weekend i meet my friends", "on the weekend i meet my friends."], wide: true },
    { type: "header", text: "E. Napisz o swoim hobby" },
    { type: "open", text: "Napisz 5 zdań o tym, co lubisz robić w wolnym czasie, a czego nie lubisz.", placeholder: "np. In my free time I like... I don't like..." }
  ],
  test: [
    { q: "I like ______ football.", opcje: ["playing", "play", "played", "to play"], poprawna: 0, wyjasnienie: "Po like używamy -ing." },
    { q: "She loves ______ books.", opcje: ["reading", "read", "reads", "to read"], poprawna: 0, wyjasnienie: "Po love używamy -ing." },
    { q: "______ is your favourite hobby?", opcje: ["What", "How", "Where", "Who"], poprawna: 0, wyjasnienie: "Pytanie o hobby → What." },
    { q: "We enjoy ______ films.", opcje: ["watching", "watch", "to watch", "watched"], poprawna: 0, wyjasnienie: "Po enjoy używamy -ing." },
    { q: "I ______ like shopping.", opcje: ["don't", "doesn't", "am not", "isn't"], poprawna: 0, wyjasnienie: "Z 'I' → don't." },
    { q: "In my free ______ I play games.", opcje: ["time", "hour", "day", "week"], poprawna: 0, wyjasnienie: "In my free time – utrwalone." },
    { q: "I ______ to music every day.", opcje: ["listen", "listens", "listening", "am listen"], poprawna: 0, wyjasnienie: "I + listen." },
    { q: "I like ______ books.", opcje: ["reading", "read", "reads", "to read"], poprawna: 0, wyjasnienie: "Po like → -ing." },
    { q: "I usually ______ my friends at the weekend.", opcje: ["meet", "meets", "meeting", "am meet"], poprawna: 0, wyjasnienie: "I + meet." },
    { q: "My favourite hobby ______ football.", opcje: ["is", "are", "am", "be"], poprawna: 0, wyjasnienie: "Liczba pojedyncza → is." }
  ]
};


/* ============================================================
   T5A1 – Jedzenie i picie
============================================================ */
window.LESSON_DATA["T5A1"] = {
  tytul: "Jedzenie i picie",
  poziom: "A1",
  dzial: "T5",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I usually eat three meals a day. For breakfast I have bread with butter and cheese. I drink tea or coffee. For lunch I eat soup and a second course. My favourite food is pizza. I don't like fish, but I love fruit. In the evening I have a light dinner. I try to eat healthy food and drink a lot of water.
    </p>

    <h3>Posiłki</h3>
    <table>
      <tr><td class="en">breakfast</td><td class="pl">śniadanie</td></tr>
      <tr><td class="en">lunch</td><td class="pl">lunch / drugie śniadanie</td></tr>
      <tr><td class="en">dinner</td><td class="pl">obiad / kolacja</td></tr>
      <tr><td class="en">supper</td><td class="pl">kolacja</td></tr>
      <tr><td class="en">snack</td><td class="pl">przekąska</td></tr>
    </table>

    <h3>Jedzenie</h3>
    <table>
      <tr><td class="en">bread</td><td class="pl">chleb</td></tr>
      <tr><td class="en">butter</td><td class="pl">masło</td></tr>
      <tr><td class="en">cheese</td><td class="pl">ser</td></tr>
      <tr><td class="en">ham</td><td class="pl">szynka</td></tr>
      <tr><td class="en">egg</td><td class="pl">jajko</td></tr>
      <tr><td class="en">meat</td><td class="pl">mięso</td></tr>
      <tr><td class="en">chicken</td><td class="pl">kurczak</td></tr>
      <tr><td class="en">fish</td><td class="pl">ryba</td></tr>
      <tr><td class="en">soup</td><td class="pl">zupa</td></tr>
      <tr><td class="en">rice</td><td class="pl">ryż</td></tr>
      <tr><td class="en">pasta</td><td class="pl">makaron</td></tr>
      <tr><td class="en">potato</td><td class="pl">ziemniak</td></tr>
      <tr><td class="en">vegetables</td><td class="pl">warzywa</td></tr>
      <tr><td class="en">fruit</td><td class="pl">owoce</td></tr>
      <tr><td class="en">apple</td><td class="pl">jabłko</td></tr>
      <tr><td class="en">banana</td><td class="pl">banan</td></tr>
    </table>

    <h3>Napoje</h3>
    <table>
      <tr><td class="en">water</td><td class="pl">woda</td></tr>
      <tr><td class="en">tea</td><td class="pl">herbata</td></tr>
      <tr><td class="en">coffee</td><td class="pl">kawa</td></tr>
      <tr><td class="en">juice</td><td class="pl">sok</td></tr>
      <tr><td class="en">milk</td><td class="pl">mleko</td></tr>
      <tr><td class="en">cola</td><td class="pl">cola</td></tr>
    </table>

    <h3>Zwroty w restauracji</h3>
    <table>
      <tr><td class="en">I'd like...</td><td class="pl">Chciałbym...</td></tr>
      <tr><td class="en">Can I have...?</td><td class="pl">Czy mogę dostać...?</td></tr>
      <tr><td class="en">The bill, please.</td><td class="pl">Rachunek poproszę.</td></tr>
      <tr><td class="en">Enjoy your meal!</td><td class="pl">Smacznego!</td></tr>
      <tr><td class="en">It's delicious.</td><td class="pl">To jest pyszne.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">I have breakfast</span> (jem śniadanie), ale <span class="en">I drink tea</span> (piję herbatę).<br>
      Bez "a" przed nazwami posiłków: ✅ <span class="en">I have breakfast.</span> ❌ <span style="color:#991b1b">I have a breakfast.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I usually eat three ________ a day.</span>', answers: ["meals"] },
    { type: "gap", text: '<span class="en">For breakfast I have bread with butter and ________.</span>', answers: ["cheese"] },
    { type: "gap", text: '<span class="en">For lunch I eat ________ and a second course.</span>', answers: ["soup"] },
    { type: "gap", text: '<span class="en">My favourite ________ is pizza.</span>', answers: ["food"] },
    { type: "gap", text: '<span class="en">I don\'t like ________, but I love fruit.</span>', answers: ["fish"] },
    { type: "gap", text: '<span class="en">I try to eat ________ food.</span>', answers: ["healthy"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">chleb → ________</span>', answers: ["bread"] },
    { type: "gap", text: '<span class="pl">ser → ________</span>', answers: ["cheese"] },
    { type: "gap", text: '<span class="pl">jajko → ________</span>', answers: ["egg"] },
    { type: "gap", text: '<span class="pl">mięso → ________</span>', answers: ["meat"] },
    { type: "gap", text: '<span class="pl">warzywa → ________</span>', answers: ["vegetables"] },
    { type: "gap", text: '<span class="pl">owoce → ________</span>', answers: ["fruit"] },
    { type: "gap", text: '<span class="pl">woda → ________</span>', answers: ["water"] },
    { type: "header", text: "C. Uzupełnij zdanie" },
    { type: "gap", text: '<span class="en">I usually ________ (jeść) breakfast at 7.</span>', answers: ["have", "eat"] },
    { type: "gap", text: '<span class="en">I ________ (pić) tea every morning.</span>', answers: ["drink"] },
    { type: "gap", text: '<span class="en">My favourite drink is ________.</span>', answers: ["-"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Lubię pizzę.</span>', answers: ["i like pizza", "i like pizza.", "i like pizzas", "i like pizzas."], wide: true },
    { type: "gap", text: '<span class="pl">Nie lubię ryb.</span>', answers: ["i don't like fish", "i don't like fish.", "i do not like fish", "i do not like fish."], wide: true },
    { type: "gap", text: '<span class="pl">Piję dużo wody.</span>', answers: ["i drink a lot of water", "i drink a lot of water.", "i drink lots of water", "i drink lots of water."], wide: true },
    { type: "gap", text: '<span class="pl">Chciałbym herbatę.</span>', answers: ["i'd like tea", "i'd like tea.", "i would like tea", "i would like tea.", "i'd like a tea"], wide: true },
    { type: "header", text: "E. Napisz o swoich nawykach" },
    { type: "open", text: "Napisz 5 zdań o tym, co jesz i pijesz – śniadanie, obiad, kolacja, ulubione jedzenie.", placeholder: "np. For breakfast I have... I like... I don't like..." }
  ],
  test: [
    { q: "I ______ breakfast at 7.", opcje: ["have", "am", "is", "eat up"], poprawna: 0, wyjasnienie: "I have breakfast – jem śniadanie." },
    { q: "I drink ______ every morning.", opcje: ["coffee", "bread", "cheese", "meat"], poprawna: 0, wyjasnienie: "coffee = kawa (napój)." },
    { q: "______ is my favourite food.", opcje: ["Pizza", "Water", "Tea", "Juice"], poprawna: 0, wyjasnienie: "Pizza – jedzenie." },
    { q: "My favourite ______ is tea.", opcje: ["drink", "food", "meal", "dinner"], poprawna: 0, wyjasnienie: "tea to napój → drink." },
    { q: "I don't like ______. (ryba)", opcje: ["fish", "meat", "fruit", "bread"], poprawna: 0, wyjasnienie: "fish = ryba." },
    { q: "I eat ______ for breakfast. (jajko)", opcje: ["eggs", "cheese", "fruit", "bread"], poprawna: 0, wyjasnienie: "eggs = jajka." },
    { q: "Chciałbym kawę. → I'd ______ a coffee.", opcje: ["like", "want", "have", "eat"], poprawna: 0, wyjasnienie: "I'd like = chciałbym." },
    { q: "Smacznego! = ______", opcje: ["Enjoy your meal!", "Good meal!", "Nice food!", "Eat well!"], poprawna: 0, wyjasnienie: "Enjoy your meal = smacznego." },
    { q: "Rachunek poproszę. → The ______, please.", opcje: ["bill", "menu", "money", "pay"], poprawna: 0, wyjasnienie: "bill = rachunek." },
    { q: "It's ______! (pyszne)", opcje: ["delicious", "expensive", "healthy", "sweet"], poprawna: 0, wyjasnienie: "delicious = pyszne." }
  ]
};

/* ============================================================
   T6A1 – Szkoła i edukacja
============================================================ */
window.LESSON_DATA["T6A1"] = {
  tytul: "Szkoła i edukacja",
  poziom: "A1",
  dzial: "T6",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I am a student at a secondary school. My favourite subject is English. I also like maths and history. Lessons start at 8 o'clock and finish at 3 p.m. I have a lot of homework every day. I always do my homework in the evening. My favourite teacher is Mrs Smith – she is very friendly. I want to pass all my exams and go to university.
    </p>

    <h3>Szkoła – słownictwo</h3>
    <table>
      <tr><td class="en">school</td><td class="pl">szkoła</td></tr>
      <tr><td class="en">classroom</td><td class="pl">klasa (sala)</td></tr>
      <tr><td class="en">lesson</td><td class="pl">lekcja</td></tr>
      <tr><td class="en">break</td><td class="pl">przerwa</td></tr>
      <tr><td class="en">teacher</td><td class="pl">nauczyciel</td></tr>
      <tr><td class="en">student</td><td class="pl">uczeń / student</td></tr>
      <tr><td class="en">classmate</td><td class="pl">kolega z klasy</td></tr>
      <tr><td class="en">homework</td><td class="pl">praca domowa</td></tr>
      <tr><td class="en">exam / test</td><td class="pl">egzamin / test</td></tr>
      <tr><td class="en">mark / grade</td><td class="pl">ocena</td></tr>
      <tr><td class="en">timetable</td><td class="pl">plan lekcji</td></tr>
    </table>

    <h3>Przedmioty szkolne</h3>
    <table>
      <tr><td class="en">English</td><td class="pl">angielski</td></tr>
      <tr><td class="en">Polish</td><td class="pl">polski</td></tr>
      <tr><td class="en">maths</td><td class="pl">matematyka</td></tr>
      <tr><td class="en">history</td><td class="pl">historia</td></tr>
      <tr><td class="en">geography</td><td class="pl">geografia</td></tr>
      <tr><td class="en">biology</td><td class="pl">biologia</td></tr>
      <tr><td class="en">physics</td><td class="pl">fizyka</td></tr>
      <tr><td class="en">chemistry</td><td class="pl">chemia</td></tr>
      <tr><td class="en">PE (physical education)</td><td class="pl">WF</td></tr>
      <tr><td class="en">IT</td><td class="pl">informatyka</td></tr>
      <tr><td class="en">art</td><td class="pl">plastyka</td></tr>
      <tr><td class="en">music</td><td class="pl">muzyka</td></tr>
    </table>

    <h3>Zwroty szkolne</h3>
    <table>
      <tr><td class="en">I am a student.</td><td class="pl">Jestem uczniem.</td></tr>
      <tr><td class="en">My favourite subject is...</td><td class="pl">Mój ulubiony przedmiot to...</td></tr>
      <tr><td class="en">I have a lot of homework.</td><td class="pl">Mam dużo pracy domowej.</td></tr>
      <tr><td class="en">I do my homework.</td><td class="pl">Odrabiam pracę domową.</td></tr>
      <tr><td class="en">I pass / fail an exam.</td><td class="pl">Zdaję / oblewam egzamin.</td></tr>
      <tr><td class="en">I go to school / university.</td><td class="pl">Chodzę do szkoły / na uniwersytet.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">I go to school</span> (uczę się – ogólnie) vs <span class="en">I go to the school</span> (idę do budynku).<br>
      <b>do homework</b>, <b>pass an exam</b> – utrwalone zwroty.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I am a ________ at a secondary school.</span>', answers: ["student"] },
    { type: "gap", text: '<span class="en">My favourite ________ is English.</span>', answers: ["subject"] },
    { type: "gap", text: '<span class="en">Lessons ________ at 8 o\'clock.</span>', answers: ["start"] },
    { type: "gap", text: '<span class="en">I have a lot of ________ every day.</span>', answers: ["homework"] },
    { type: "gap", text: '<span class="en">My favourite teacher is very ________.</span>', answers: ["friendly"] },
    { type: "gap", text: '<span class="en">I want to ________ all my exams.</span>', answers: ["pass"] },
    { type: "header", text: "B. Dopasuj przedmiot" },
    { type: "gap", text: '<span class="pl">angielski → ________</span>', answers: ["english"] },
    { type: "gap", text: '<span class="pl">matematyka → ________</span>', answers: ["maths", "math"] },
    { type: "gap", text: '<span class="pl">historia → ________</span>', answers: ["history"] },
    { type: "gap", text: '<span class="pl">biologia → ________</span>', answers: ["biology"] },
    { type: "gap", text: '<span class="pl">WF → ________</span>', answers: ["pe", "p.e.", "physical education"] },
    { type: "gap", text: '<span class="pl">informatyka → ________</span>', answers: ["it", "computing"] },
    { type: "header", text: "C. Uzupełnij zwrot" },
    { type: "gap", text: '<span class="en">I ________ my homework every day. (robię)</span>', answers: ["do"] },
    { type: "gap", text: '<span class="en">I ________ an exam. (zdaję)</span>', answers: ["pass"] },
    { type: "gap", text: '<span class="en">I ________ to school. (chodzę)</span>', answers: ["go"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Jestem uczniem.</span>', answers: ["i am a student", "i am a student.", "i'm a student", "i'm a student."], wide: true },
    { type: "gap", text: '<span class="pl">Mój ulubiony przedmiot to matematyka.</span>', answers: ["my favourite subject is maths", "my favourite subject is maths.", "my favorite subject is math", "my favorite subject is math.", "my favourite subject is math"], wide: true },
    { type: "gap", text: '<span class="pl">Mam dużo pracy domowej.</span>', answers: ["i have a lot of homework", "i have a lot of homework.", "i have lots of homework", "i have lots of homework."], wide: true },
    { type: "gap", text: '<span class="pl">Chodzę do szkoły.</span>', answers: ["i go to school", "i go to school."], wide: true },
    { type: "header", text: "E. Napisz o swojej szkole" },
    { type: "open", text: "Napisz 5 zdań o swojej szkole – jaki masz plan, ulubiony przedmiot, nauczycieli, pracę domową.", placeholder: "np. I am a student at... My favourite subject is... I have..." }
  ],
  test: [
    { q: "My favourite ______ is English.", opcje: ["subject", "lesson", "class", "school"], poprawna: 0, wyjasnienie: "subject = przedmiot szkolny." },
    { q: "I ______ to school every day.", opcje: ["go", "am go", "going", "went"], poprawna: 0, wyjasnienie: "I go to school – chodzę do szkoły." },
    { q: "I ______ my homework in the evening.", opcje: ["do", "make", "am", "have"], poprawna: 0, wyjasnienie: "do homework – utrwalone." },
    { q: "My favourite teacher is very ______.", opcje: ["friendly", "friendlying", "friend", "friends"], poprawna: 0, wyjasnienie: "friendly = przyjazny." },
    { q: "I want to ______ all my exams.", opcje: ["pass", "fail", "go", "take off"], poprawna: 0, wyjasnienie: "pass an exam = zdać." },
    { q: "Matematyka to po angielsku ______.", opcje: ["maths", "matematyka", "matematic", "mathic"], poprawna: 0, wyjasnienie: "maths / math." },
    { q: "Plan lekcji to ______.", opcje: ["timetable", "timetable lesson", "plan", "schedule"], poprawna: 0, wyjasnienie: "timetable = plan lekcji." },
    { q: "Ocena to ______.", opcje: ["mark", "point", "level", "subject"], poprawna: 0, wyjasnienie: "mark / grade = ocena." },
    { q: "Praca domowa to ______.", opcje: ["homework", "housework", "homejob", "workhome"], poprawna: 0, wyjasnienie: "homework = praca domowa." },
    { q: "Kolega z klasy to ______.", opcje: ["classmate", "schoolmate", "friend", "classman"], poprawna: 0, wyjasnienie: "classmate = kolega z klasy." }
  ]
};

/* ============================================================
   T7A1 – Praca i zawody
============================================================ */
window.LESSON_DATA["T7A1"] = {
  tytul: "Praca i zawody",
  poziom: "A1",
  dzial: "T7",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      My mother is a nurse. She works in a hospital. My father is an engineer and he works in an office. My sister is a teacher. She works at a primary school. My dream job is to be a doctor because I want to help people. I would like to work in a big hospital one day.
    </p>

    <h3>Popularne zawody</h3>
    <table>
      <tr><td class="en">doctor</td><td class="pl">lekarz</td></tr>
      <tr><td class="en">nurse</td><td class="pl">pielęgniarka</td></tr>
      <tr><td class="en">teacher</td><td class="pl">nauczyciel</td></tr>
      <tr><td class="en">engineer</td><td class="pl">inżynier</td></tr>
      <tr><td class="en">lawyer</td><td class="pl">prawnik</td></tr>
      <tr><td class="en">police officer</td><td class="pl">policjant</td></tr>
      <tr><td class="en">firefighter</td><td class="pl">strażak</td></tr>
      <tr><td class="en">driver</td><td class="pl">kierowca</td></tr>
      <tr><td class="en">cook / chef</td><td class="pl">kucharz</td></tr>
      <tr><td class="en">waiter / waitress</td><td class="pl">kelner / kelnerka</td></tr>
      <tr><td class="en">shop assistant</td><td class="pl">sprzedawca</td></tr>
      <tr><td class="en">farmer</td><td class="pl">rolnik</td></tr>
      <tr><td class="en">programmer</td><td class="pl">programista</td></tr>
      <tr><td class="en">designer</td><td class="pl">projektant</td></tr>
    </table>

    <h3>Miejsce pracy</h3>
    <table>
      <tr><td class="en">office</td><td class="pl">biuro</td></tr>
      <tr><td class="en">hospital</td><td class="pl">szpital</td></tr>
      <tr><td class="en">school</td><td class="pl">szkoła</td></tr>
      <tr><td class="en">factory</td><td class="pl">fabryka</td></tr>
      <tr><td class="en">shop</td><td class="pl">sklep</td></tr>
      <tr><td class="en">restaurant</td><td class="pl">restauracja</td></tr>
    </table>

    <h3>Zwroty o pracy</h3>
    <table>
      <tr><td class="en">What do you do?</td><td class="pl">Czym się zajmujesz?</td></tr>
      <tr><td class="en">I am a teacher.</td><td class="pl">Jestem nauczycielem.</td></tr>
      <tr><td class="en">I work in an office.</td><td class="pl">Pracuję w biurze.</td></tr>
      <tr><td class="en">I work as a nurse.</td><td class="pl">Pracuję jako pielęgniarka.</td></tr>
      <tr><td class="en">My dream job is...</td><td class="pl">Moja wymarzona praca to...</td></tr>
      <tr><td class="en">I want to be a doctor.</td><td class="pl">Chcę być lekarzem.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> przed nazwą zawodu zawsze <b>a / an</b>:<br>
      ✅ <span class="en">I am a doctor.</span> · <span class="en">She is an engineer.</span><br>
      ❌ <span style="color:#991b1b">I am doctor.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">My mother is a ________.</span>', answers: ["nurse"] },
    { type: "gap", text: '<span class="en">She works in a ________.</span>', answers: ["hospital"] },
    { type: "gap", text: '<span class="en">My father is an ________.</span>', answers: ["engineer"] },
    { type: "gap", text: '<span class="en">He works in an ________.</span>', answers: ["office"] },
    { type: "gap", text: '<span class="en">My sister is a ________.</span>', answers: ["teacher"] },
    { type: "gap", text: '<span class="en">My dream ________ is to be a doctor.</span>', answers: ["job"] },
    { type: "header", text: "B. Dopasuj zawód" },
    { type: "gap", text: '<span class="pl">lekarz → ________</span>', answers: ["doctor"] },
    { type: "gap", text: '<span class="pl">strażak → ________</span>', answers: ["firefighter"] },
    { type: "gap", text: '<span class="pl">kucharz → ________</span>', answers: ["cook", "chef"] },
    { type: "gap", text: '<span class="pl">kierowca → ________</span>', answers: ["driver"] },
    { type: "gap", text: '<span class="pl">programista → ________</span>', answers: ["programmer"] },
    { type: "gap", text: '<span class="pl">prawnik → ________</span>', answers: ["lawyer"] },
    { type: "header", text: "C. Uzupełnij zdania" },
    { type: "gap", text: '<span class="en">She works ________ a hospital.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">He works ________ an office.</span>', answers: ["in"] },
    { type: "gap", text: '<span class="en">I work ________ a nurse.</span>', answers: ["as"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Jestem nauczycielem.</span>', answers: ["i am a teacher", "i am a teacher.", "i'm a teacher", "i'm a teacher."], wide: true },
    { type: "gap", text: '<span class="pl">Moja mama pracuje w szpitalu.</span>', answers: ["my mother works in a hospital", "my mother works in a hospital.", "my mum works in a hospital", "my mum works in a hospital."], wide: true },
    { type: "gap", text: '<span class="pl">Chcę być lekarzem.</span>', answers: ["i want to be a doctor", "i want to be a doctor.", "i'd like to be a doctor", "i'd like to be a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">Pracuję jako pielęgniarka.</span>', answers: ["i work as a nurse", "i work as a nurse."], wide: true },
    { type: "header", text: "E. Napisz o pracy" },
    { type: "open", text: "Napisz 5 zdań o pracy – swoją wymarzoną pracę, pracę rodziców, gdzie chciałbyś pracować.", placeholder: "np. My dream job is... My mother is a..." }
  ],
  test: [
    { q: "I am ______ doctor.", opcje: ["a", "an", "the", "-"], poprawna: 0, wyjasnienie: "Zawody z a/an." },
    { q: "She is ______ engineer.", opcje: ["a", "an", "the", "-"], poprawna: 1, wyjasnienie: "engineer zaczyna się na samogłoskę → an." },
    { q: "My mother ______ in a hospital.", opcje: ["works", "work", "working", "is work"], poprawna: 0, wyjasnienie: "3 os. l.poj. → works." },
    { q: "He works ______ an office.", opcje: ["in", "on", "at", "by"], poprawna: 0, wyjasnienie: "in an office." },
    { q: "Czym się zajmujesz? = ______", opcje: ["What do you do?", "What are you?", "Who are you?", "What is your job?"], poprawna: 0, wyjasnienie: "What do you do? – pytanie o zawód." },
    { q: "kucharz = ______", opcje: ["cook", "cooker", "cooking", "chefing"], poprawna: 0, wyjasnienie: "cook = kucharz (uwaga: cooker = kuchenka!)." },
    { q: "Miejsce pracy lekarza to ______.", opcje: ["hospital", "office", "school", "shop"], poprawna: 0, wyjasnienie: "hospital = szpital." },
    { q: "Chcę być lekarzem. → I want to ______ a doctor.", opcje: ["be", "is", "am", "have"], poprawna: 0, wyjasnienie: "I want to be..." },
    { q: "Pracuję jako pielęgniarka. → I work ______ a nurse.", opcje: ["as", "in", "on", "at"], poprawna: 0, wyjasnienie: "work as = pracować jako." },
    { q: "Moja wymarzona praca to ______", opcje: ["My dream job is...", "My want job is...", "My job dream is...", "My dream work is..."], poprawna: 0, wyjasnienie: "dream job = wymarzona praca." }
  ]
};

/* ============================================================
   T8A1 – Natura, pogoda, środowisko
============================================================ */
window.LESSON_DATA["T8A1"] = {
  tytul: "Natura, pogoda, środowisko",
  poziom: "A1",
  dzial: "T8",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I love nature. In summer I usually go to the forest or to the lake. The weather is often sunny and warm. I like walking in the mountains. My favourite season is autumn because the leaves are colourful. In winter it is cold and it often snows. We should protect our environment and recycle rubbish.
    </p>

    <h3>Natura</h3>
    <table>
      <tr><td class="en">forest</td><td class="pl">las</td></tr>
      <tr><td class="en">lake</td><td class="pl">jezioro</td></tr>
      <tr><td class="en">river</td><td class="pl">rzeka</td></tr>
      <tr><td class="en">sea</td><td class="pl">morze</td></tr>
      <tr><td class="en">mountain</td><td class="pl">góra</td></tr>
      <tr><td class="en">beach</td><td class="pl">plaża</td></tr>
      <tr><td class="en">field</td><td class="pl">pole</td></tr>
      <tr><td class="en">tree</td><td class="pl">drzewo</td></tr>
      <tr><td class="en">flower</td><td class="pl">kwiat</td></tr>
      <tr><td class="en">animal</td><td class="pl">zwierzę</td></tr>
      <tr><td class="en">bird</td><td class="pl">ptak</td></tr>
      <tr><td class="en">fish</td><td class="pl">ryba</td></tr>
    </table>

    <h3>Pogoda</h3>
    <table>
      <tr><td class="en">sunny</td><td class="pl">słonecznie</td></tr>
      <tr><td class="en">rainy</td><td class="pl">deszczowo</td></tr>
      <tr><td class="en">cloudy</td><td class="pl">pochmurnie</td></tr>
      <tr><td class="en">windy</td><td class="pl">wietrznie</td></tr>
      <tr><td class="en">snowy</td><td class="pl">śnieżnie</td></tr>
      <tr><td class="en">foggy</td><td class="pl">mgliście</td></tr>
      <tr><td class="en">warm / hot</td><td class="pl">ciepło / gorąco</td></tr>
      <tr><td class="en">cold / cool</td><td class="pl">zimno / chłodno</td></tr>
      <tr><td class="en">It's raining.</td><td class="pl">Pada deszcz.</td></tr>
      <tr><td class="en">It's snowing.</td><td class="pl">Pada śnieg.</td></tr>
    </table>

    <h3>Pory roku</h3>
    <table>
      <tr><td class="en">spring</td><td class="pl">wiosna</td></tr>
      <tr><td class="en">summer</td><td class="pl">lato</td></tr>
      <tr><td class="en">autumn / fall</td><td class="pl">jesień</td></tr>
      <tr><td class="en">winter</td><td class="pl">zima</td></tr>
    </table>

    <h3>Środowisko</h3>
    <table>
      <tr><td class="en">environment</td><td class="pl">środowisko</td></tr>
      <tr><td class="en">pollution</td><td class="pl">zanieczyszczenie</td></tr>
      <tr><td class="en">rubbish</td><td class="pl">śmieci</td></tr>
      <tr><td class="en">recycle</td><td class="pl">recyklingować</td></tr>
      <tr><td class="en">protect</td><td class="pl">chronić</td></tr>
      <tr><td class="en">save water</td><td class="pl">oszczędzać wodę</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> pytania o pogodę:<br>
      <span class="en">What's the weather like?</span> (Jaka jest pogoda?)<br>
      <span class="en">It's sunny / rainy / cold.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">In summer I usually go to the ________ or to the lake.</span>', answers: ["forest"] },
    { type: "gap", text: '<span class="en">The weather is often ________ and warm.</span>', answers: ["sunny"] },
    { type: "gap", text: '<span class="en">I like walking in the ________.</span>', answers: ["mountains"] },
    { type: "gap", text: '<span class="en">My favourite ________ is autumn.</span>', answers: ["season"] },
    { type: "gap", text: '<span class="en">In winter it often ________.</span>', answers: ["snows"] },
    { type: "gap", text: '<span class="en">We should ________ our environment.</span>', answers: ["protect"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">las → ________</span>', answers: ["forest"] },
    { type: "gap", text: '<span class="pl">morze → ________</span>', answers: ["sea"] },
    { type: "gap", text: '<span class="pl">góra → ________</span>', answers: ["mountain"] },
    { type: "gap", text: '<span class="pl">plaża → ________</span>', answers: ["beach"] },
    { type: "gap", text: '<span class="pl">rzeka → ________</span>', answers: ["river"] },
    { type: "gap", text: '<span class="pl">jezioro → ________</span>', answers: ["lake"] },
    { type: "header", text: "C. Pogoda – uzupełnij" },
    { type: "gap", text: '<span class="en">What\'s the weather ________ today?</span>', answers: ["like"] },
    { type: "gap", text: '<span class="en">It\'s ________ (słonecznie) today.</span>', answers: ["sunny"] },
    { type: "gap", text: '<span class="en">It\'s ________ (zimno).</span>', answers: ["cold"] },
    { type: "gap", text: '<span class="en">It\'s ________ (pada deszcz).</span>', answers: ["raining"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Lubię lato.</span>', answers: ["i like summer", "i like summer.", "i love summer", "i love summer."], wide: true },
    { type: "gap", text: '<span class="pl">Jaka jest dzisiaj pogoda?</span>', answers: ["what is the weather like today", "what is the weather like today?", "what's the weather like today", "what's the weather like today?"], wide: true },
    { type: "gap", text: '<span class="pl">Jest zimno i pada deszcz.</span>', answers: ["it is cold and it is raining", "it is cold and it is raining.", "it's cold and it's raining", "it's cold and it's raining."], wide: true },
    { type: "gap", text: '<span class="pl">Chronimy środowisko.</span>', answers: ["we protect the environment", "we protect the environment.", "we should protect the environment", "we should protect the environment."], wide: true },
    { type: "header", text: "E. Napisz o przyrodzie" },
    { type: "open", text: "Napisz 5 zdań o swojej ulubionej porze roku, pogodzie i miejscu w przyrodzie.", placeholder: "np. My favourite season is... In summer I go to..." }
  ],
  test: [
    { q: "In summer I go to the ______. (las)", opcje: ["forest", "mountain", "sea", "field"], poprawna: 0, wyjasnienie: "forest = las." },
    { q: "It's ______ today. (słonecznie)", opcje: ["sunny", "sunnying", "sun", "suns"], poprawna: 0, wyjasnienie: "sunny = słonecznie." },
    { q: "My favourite ______ is autumn.", opcje: ["season", "weather", "time", "month"], poprawna: 0, wyjasnienie: "season = pora roku." },
    { q: "What's the weather ______?", opcje: ["like", "is", "as", "in"], poprawna: 0, wyjasnienie: "What's the weather like? – utrwalone." },
    { q: "We should ______ our environment.", opcje: ["protect", "protecting", "protected", "protection"], poprawna: 0, wyjasnienie: "protect = chronić." },
    { q: "It often ______ in winter.", opcje: ["snows", "snow", "snowing", "snowed"], poprawna: 0, wyjasnienie: "3 os. l.poj. → snows." },
    { q: "Morze po angielsku to ______.", opcje: ["sea", "lake", "river", "beach"], poprawna: 0, wyjasnienie: "sea = morze." },
    { q: "Plaża po angielsku to ______.", opcje: ["beach", "sea", "river", "field"], poprawna: 0, wyjasnienie: "beach = plaża." },
    { q: "Pada deszcz. → It's ______.", opcje: ["raining", "rainy", "rain", "rained"], poprawna: 0, wyjasnienie: "It's raining – utrwalone." },
    { q: "Śmieci po angielsku to ______.", opcje: ["rubbish", "garbage bags", "pollution", "trashings"], poprawna: 0, wyjasnienie: "rubbish (GB) = śmieci." }
  ]
};


/* ============================================================
   T9A1 – Technologia i internet
============================================================ */
window.LESSON_DATA["T9A1"] = {
  tytul: "Technologia i internet",
  poziom: "A1",
  dzial: "T9",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I use my phone every day. I have a smartphone, a laptop and a tablet. I use my computer for school and for fun. I often send messages to my friends and check social media. I also watch videos on the internet. I always use a password to protect my accounts. I never share my personal information online.
    </p>

    <h3>Urządzenia</h3>
    <table>
      <tr><td class="en">phone / smartphone</td><td class="pl">telefon / smartfon</td></tr>
      <tr><td class="en">computer / laptop</td><td class="pl">komputer / laptop</td></tr>
      <tr><td class="en">tablet</td><td class="pl">tablet</td></tr>
      <tr><td class="en">screen</td><td class="pl">ekran</td></tr>
      <tr><td class="en">keyboard</td><td class="pl">klawiatura</td></tr>
      <tr><td class="en">charger</td><td class="pl">ładowarka</td></tr>
      <tr><td class="en">headphones</td><td class="pl">słuchawki</td></tr>
      <tr><td class="en">camera</td><td class="pl">aparat / kamera</td></tr>
    </table>

    <h3>Internet i komputery</h3>
    <table>
      <tr><td class="en">internet</td><td class="pl">internet</td></tr>
      <tr><td class="en">website</td><td class="pl">strona internetowa</td></tr>
      <tr><td class="en">app / application</td><td class="pl">aplikacja</td></tr>
      <tr><td class="en">email</td><td class="pl">email</td></tr>
      <tr><td class="en">message</td><td class="pl">wiadomość</td></tr>
      <tr><td class="en">password</td><td class="pl">hasło</td></tr>
      <tr><td class="en">account</td><td class="pl">konto</td></tr>
      <tr><td class="en">social media</td><td class="pl">media społecznościowe</td></tr>
      <tr><td class="en">video</td><td class="pl">film / video</td></tr>
      <tr><td class="en">online / offline</td><td class="pl">online / offline</td></tr>
    </table>

    <h3>Zwroty – technologia</h3>
    <table>
      <tr><td class="en">I use my phone every day.</td><td class="pl">Używam telefonu codziennie.</td></tr>
      <tr><td class="en">I send messages.</td><td class="pl">Wysyłam wiadomości.</td></tr>
      <tr><td class="en">I check my email.</td><td class="pl">Sprawdzam email.</td></tr>
      <tr><td class="en">I watch videos online.</td><td class="pl">Oglądam filmy w internecie.</td></tr>
      <tr><td class="en">I download apps.</td><td class="pl">Ściągam aplikacje.</td></tr>
      <tr><td class="en">I charge my phone.</td><td class="pl">Ładuję telefon.</td></tr>
      <tr><td class="en">My phone is out of battery.</td><td class="pl">Telefon mi się rozładował.</td></tr>
    </table>

    <h3>Bezpieczeństwo w internecie</h3>
    <table>
      <tr><td class="en">password</td><td class="pl">hasło</td></tr>
      <tr><td class="en">private / public</td><td class="pl">prywatny / publiczny</td></tr>
      <tr><td class="en">share</td><td class="pl">udostępniać</td></tr>
      <tr><td class="en">safe / unsafe</td><td class="pl">bezpieczny / niebezpieczny</td></tr>
      <tr><td class="en">personal information</td><td class="pl">dane osobowe</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">I use</span> (używam), ale <span class="en">I play games</span> (gram w gry).<br>
      Nie myl: <b>phone</b> (telefon) i <b>photo</b> (zdjęcie).
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I use my ________ every day.</span>', answers: ["phone", "smartphone"] },
    { type: "gap", text: '<span class="en">I have a smartphone, a laptop and a ________.</span>', answers: ["tablet"] },
    { type: "gap", text: '<span class="en">I use my computer for school and for ________.</span>', answers: ["fun"] },
    { type: "gap", text: '<span class="en">I often send ________ to my friends.</span>', answers: ["messages"] },
    { type: "gap", text: '<span class="en">I always use a ________ to protect my accounts.</span>', answers: ["password"] },
    { type: "gap", text: '<span class="en">I never share my ________ information online.</span>', answers: ["personal"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">ekran → ________</span>', answers: ["screen"] },
    { type: "gap", text: '<span class="pl">hasło → ________</span>', answers: ["password"] },
    { type: "gap", text: '<span class="pl">konto → ________</span>', answers: ["account"] },
    { type: "gap", text: '<span class="pl">aplikacja → ________</span>', answers: ["app", "application"] },
    { type: "gap", text: '<span class="pl">wiadomość → ________</span>', answers: ["message"] },
    { type: "gap", text: '<span class="pl">ładowarka → ________</span>', answers: ["charger"] },
    { type: "header", text: "C. Uzupełnij zdania" },
    { type: "gap", text: '<span class="en">I ________ (używam) my phone every day.</span>', answers: ["use"] },
    { type: "gap", text: '<span class="en">I ________ (wysyłam) messages.</span>', answers: ["send"] },
    { type: "gap", text: '<span class="en">I ________ (sprawdzam) my email.</span>', answers: ["check"] },
    { type: "gap", text: '<span class="en">I ________ (ładuję) my phone.</span>', answers: ["charge"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Używam telefonu codziennie.</span>', answers: ["i use my phone every day", "i use my phone every day."], wide: true },
    { type: "gap", text: '<span class="pl">Wysyłam wiadomości do przyjaciół.</span>', answers: ["i send messages to my friends", "i send messages to my friends."], wide: true },
    { type: "gap", text: '<span class="pl">Sprawdzam email.</span>', answers: ["i check my email", "i check my email.", "i check email", "i check email."], wide: true },
    { type: "gap", text: '<span class="pl">Nigdy nie udostępniam danych osobowych.</span>', answers: ["i never share my personal information", "i never share my personal information.", "i never share personal information", "i never share personal information."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań o tym, jak używasz telefonu i internetu.", placeholder: "np. I use my phone every day. I often..." }
  ],
  test: [
    { q: "I ______ my phone every day.", opcje: ["use", "using", "am use", "used"], poprawna: 0, wyjasnienie: "I use – Present Simple." },
    { q: "I send ______ to my friends.", opcje: ["messages", "message", "messaging", "a message"], poprawna: 0, wyjasnienie: "Liczba mnoga → messages." },
    { q: "I ______ my email every morning.", opcje: ["check", "checks", "checking", "am check"], poprawna: 0, wyjasnienie: "I check – Present Simple." },
    { q: "I always use a ______ to protect my accounts.", opcje: ["password", "message", "charger", "screen"], poprawna: 0, wyjasnienie: "password = hasło." },
    { q: "My phone is out of ______.", opcje: ["battery", "charge", "power", "energy"], poprawna: 0, wyjasnienie: "out of battery – rozładowany." },
    { q: "Ekran po angielsku to ______.", opcje: ["screen", "scream", "screener", "monitor"], poprawna: 0, wyjasnienie: "screen = ekran." },
    { q: "Aplikacja po angielsku to ______.", opcje: ["app", "apply", "aplication", "appliance"], poprawna: 0, wyjasnienie: "app / application." },
    { q: "Ładuję telefon → I ______ my phone.", opcje: ["charge", "load", "charger", "charging"], poprawna: 0, wyjasnienie: "charge = ładować." },
    { q: "I never ______ personal information online.", opcje: ["share", "sharing", "shared", "shares"], poprawna: 0, wyjasnienie: "share = udostępniać." },
    { q: "Bezpieczny po angielsku to ______.", opcje: ["safe", "safety", "saves", "saving"], poprawna: 0, wyjasnienie: "safe = bezpieczny." }
  ]
};

/* ============================================================
   T10A1 – Media i informacje
============================================================ */
window.LESSON_DATA["T10A1"] = {
  tytul: "Media i informacje",
  poziom: "A1",
  dzial: "T10",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I read the news every day. I usually read news on my phone. Sometimes I watch TV or listen to the radio. My favourite source of information is the internet. I also watch videos on YouTube. I don't believe everything I read online – I always check the source. In the evening I read books and magazines.
    </p>

    <h3>Media – słownictwo</h3>
    <table>
      <tr><td class="en">media</td><td class="pl">media</td></tr>
      <tr><td class="en">news</td><td class="pl">wiadomości</td></tr>
      <tr><td class="en">newspaper</td><td class="pl">gazeta</td></tr>
      <tr><td class="en">magazine</td><td class="pl">czasopismo</td></tr>
      <tr><td class="en">TV / television</td><td class="pl">telewizja</td></tr>
      <tr><td class="en">radio</td><td class="pl">radio</td></tr>
      <tr><td class="en">internet</td><td class="pl">internet</td></tr>
      <tr><td class="en">website</td><td class="pl">strona internetowa</td></tr>
      <tr><td class="en">article</td><td class="pl">artykuł</td></tr>
      <tr><td class="en">headline</td><td class="pl">nagłówek</td></tr>
      <tr><td class="en">journalist</td><td class="pl">dziennikarz</td></tr>
      <tr><td class="en">source</td><td class="pl">źródło</td></tr>
      <tr><td class="en">advertisement / ad</td><td class="pl">reklama</td></tr>
      <tr><td class="en">information</td><td class="pl">informacja</td></tr>
    </table>

    <h3>Rodzaje wiadomości</h3>
    <table>
      <tr><td class="en">local news</td><td class="pl">wiadomości lokalne</td></tr>
      <tr><td class="en">world news</td><td class="pl">wiadomości światowe</td></tr>
      <tr><td class="en">sports news</td><td class="pl">wiadomości sportowe</td></tr>
      <tr><td class="en">weather forecast</td><td class="pl">prognoza pogody</td></tr>
      <tr><td class="en">breaking news</td><td class="pl">pilne wiadomości</td></tr>
    </table>

    <h3>Zwroty – media</h3>
    <table>
      <tr><td class="en">I read the news.</td><td class="pl">Czytam wiadomości.</td></tr>
      <tr><td class="en">I watch TV.</td><td class="pl">Oglądam telewizję.</td></tr>
      <tr><td class="en">I listen to the radio.</td><td class="pl">Słucham radia.</td></tr>
      <tr><td class="en">What's on TV tonight?</td><td class="pl">Co jest dziś w telewizji?</td></tr>
      <tr><td class="en">I check the source.</td><td class="pl">Sprawdzam źródło.</td></tr>
      <tr><td class="en">I don't believe everything.</td><td class="pl">Nie wierzę we wszystko.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">watch TV</span> (oglądać TV), <span class="en">listen to the radio</span> (słuchać radia), <span class="en">read the news</span> (czytać wiadomości).<br>
      Nie mówimy "look TV" ani "hear radio" – to częsty błąd.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I read the ________ every day.</span>', answers: ["news"] },
    { type: "gap", text: '<span class="en">I usually read news on my ________.</span>', answers: ["phone"] },
    { type: "gap", text: '<span class="en">Sometimes I watch TV or listen to the ________.</span>', answers: ["radio"] },
    { type: "gap", text: '<span class="en">My favourite source of information is the ________.</span>', answers: ["internet"] },
    { type: "gap", text: '<span class="en">I always check the ________.</span>', answers: ["source"] },
    { type: "gap", text: '<span class="en">In the evening I read books and ________.</span>', answers: ["magazines"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">gazeta → ________</span>', answers: ["newspaper"] },
    { type: "gap", text: '<span class="pl">reklama → ________</span>', answers: ["advertisement", "ad"] },
    { type: "gap", text: '<span class="pl">dziennikarz → ________</span>', answers: ["journalist"] },
    { type: "gap", text: '<span class="pl">nagłówek → ________</span>', answers: ["headline"] },
    { type: "gap", text: '<span class="pl">artykuł → ________</span>', answers: ["article"] },
    { type: "gap", text: '<span class="pl">źródło → ________</span>', answers: ["source"] },
    { type: "header", text: "C. Wybierz poprawny czasownik" },
    { type: "gap", text: '<span class="en">I ________ TV every evening. (watch / look / see)</span>', answers: ["watch"] },
    { type: "gap", text: '<span class="en">I ________ the radio in the morning. (listen to / hear)</span>', answers: ["listen to"] },
    { type: "gap", text: '<span class="en">I ________ the news online. (read / look)</span>', answers: ["read"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Czytam wiadomości codziennie.</span>', answers: ["i read the news every day", "i read the news every day.", "i read news every day", "i read news every day."], wide: true },
    { type: "gap", text: '<span class="pl">Oglądam telewizję wieczorem.</span>', answers: ["i watch tv in the evening", "i watch tv in the evening.", "i watch television in the evening", "i watch television in the evening."], wide: true },
    { type: "gap", text: '<span class="pl">Słucham radia w samochodzie.</span>', answers: ["i listen to the radio in the car", "i listen to the radio in the car."], wide: true },
    { type: "gap", text: '<span class="pl">Sprawdzam źródło informacji.</span>', answers: ["i check the source", "i check the source.", "i check the source of information", "i check the source of information."], wide: true },
    { type: "header", text: "E. Napisz o sobie" },
    { type: "open", text: "Napisz 5 zdań o tym, jak zdobywasz informacje: czytasz, oglądasz, słuchasz?", placeholder: "np. I read the news on my phone. I watch TV in the evening..." }
  ],
  test: [
    { q: "I read the ______ every day.", opcje: ["news", "new", "newspaper", "newspapers"], poprawna: 0, wyjasnienie: "the news = wiadomości." },
    { q: "I ______ TV in the evening.", opcje: ["watch", "look", "see", "look at"], poprawna: 0, wyjasnienie: "watch TV – utrwalone." },
    { q: "I ______ to the radio in the car.", opcje: ["listen", "hear", "watch", "see"], poprawna: 0, wyjasnienie: "listen to the radio – utrwalone." },
    { q: "What's ______ TV tonight?", opcje: ["on", "in", "at", "by"], poprawna: 0, wyjasnienie: "What's on TV? – utrwalone." },
    { q: "Gazeta po angielsku to ______.", opcje: ["newspaper", "magazine", "news", "paper"], poprawna: 0, wyjasnienie: "newspaper = gazeta." },
    { q: "Czasopismo po angielsku to ______.", opcje: ["magazine", "newspaper", "book", "journal"], poprawna: 0, wyjasnienie: "magazine = czasopismo." },
    { q: "Reklama po angielsku to ______.", opcje: ["advertisement", "advert", "advertise", "publicity"], poprawna: 0, wyjasnienie: "advertisement / ad = reklama." },
    { q: "Headline znaczy ______.", opcje: ["nagłówek", "tytuł gazety", "strona", "autor"], poprawna: 0, wyjasnienie: "headline = nagłówek." },
    { q: "Source znaczy ______.", opcje: ["źródło", "siła", "sens", "sort"], poprawna: 0, wyjasnienie: "source = źródło." },
    { q: "Dziennikarz po angielsku to ______.", opcje: ["journalist", "journey", "journal", "diary"], poprawna: 0, wyjasnienie: "journalist = dziennikarz." }
  ]
};

/* ============================================================
   T11A1 – Komunikacja w pracy
============================================================ */
window.LESSON_DATA["T11A1"] = {
  tytul: "Komunikacja w pracy",
  poziom: "A1",
  dzial: "T11",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I work in a small office. Every morning I check my emails and answer messages. I have a meeting with my boss at ten o'clock. My colleagues are very friendly. We often help each other. I always try to be polite and on time. When I don't understand something, I ask my manager for help.
    </p>

    <h3>Ludzie w pracy</h3>
    <table>
      <tr><td class="en">boss</td><td class="pl">szef</td></tr>
      <tr><td class="en">manager</td><td class="pl">kierownik</td></tr>
      <tr><td class="en">colleague</td><td class="pl">kolega z pracy</td></tr>
      <tr><td class="en">employee</td><td class="pl">pracownik</td></tr>
      <tr><td class="en">client / customer</td><td class="pl">klient</td></tr>
      <tr><td class="en">team</td><td class="pl">zespół</td></tr>
    </table>

    <h3>Komunikacja w pracy</h3>
    <table>
      <tr><td class="en">meeting</td><td class="pl">spotkanie</td></tr>
      <tr><td class="en">email</td><td class="pl">email</td></tr>
      <tr><td class="en">phone call</td><td class="pl">rozmowa telefoniczna</td></tr>
      <tr><td class="en">message</td><td class="pl">wiadomość</td></tr>
      <tr><td class="en">report</td><td class="pl">raport</td></tr>
      <tr><td class="en">project</td><td class="pl">projekt</td></tr>
      <tr><td class="en">deadline</td><td class="pl">termin</td></tr>
      <tr><td class="en">schedule</td><td class="pl">harmonogram</td></tr>
      <tr><td class="en">task</td><td class="pl">zadanie</td></tr>
    </table>

    <h3>Zwroty w pracy</h3>
    <table>
      <tr><td class="en">Can you help me?</td><td class="pl">Możesz mi pomóc?</td></tr>
      <tr><td class="en">I have a question.</td><td class="pl">Mam pytanie.</td></tr>
      <tr><td class="en">I don't understand.</td><td class="pl">Nie rozumiem.</td></tr>
      <tr><td class="en">Could you repeat that, please?</td><td class="pl">Możesz powtórzyć?</td></tr>
      <tr><td class="en">I'll send you an email.</td><td class="pl">Wyślę ci email.</td></tr>
      <tr><td class="en">I'll call you back.</td><td class="pl">Oddzwonię.</td></tr>
      <tr><td class="en">What's the deadline?</td><td class="pl">Jaki jest termin?</td></tr>
      <tr><td class="en">I'll do it now.</td><td class="pl">Zrobię to teraz.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <span class="en">I have a meeting</span> (mam spotkanie), <span class="en">I'm in a meeting</span> (jestem na spotkaniu).<br>
      W rozmowie telefonicznej: <span class="en">Hello, this is Anna.</span> (Halo, tu Anna) – nie "I am Anna".
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I work in a small ________.</span>', answers: ["office"] },
    { type: "gap", text: '<span class="en">I check my ________ every morning.</span>', answers: ["emails"] },
    { type: "gap", text: '<span class="en">I have a ________ with my boss at ten o\'clock.</span>', answers: ["meeting"] },
    { type: "gap", text: '<span class="en">My ________ are very friendly.</span>', answers: ["colleagues"] },
    { type: "gap", text: '<span class="en">I always try to be ________ and on time.</span>', answers: ["polite"] },
    { type: "gap", text: '<span class="en">I ask my ________ for help.</span>', answers: ["manager", "boss"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">szef → ________</span>', answers: ["boss"] },
    { type: "gap", text: '<span class="pl">pracownik → ________</span>', answers: ["employee"] },
    { type: "gap", text: '<span class="pl">klient → ________</span>', answers: ["client", "customer"] },
    { type: "gap", text: '<span class="pl">zespół → ________</span>', answers: ["team"] },
    { type: "gap", text: '<span class="pl">termin → ________</span>', answers: ["deadline"] },
    { type: "gap", text: '<span class="pl">zadanie → ________</span>', answers: ["task"] },
    { type: "gap", text: '<span class="pl">projekt → ________</span>', answers: ["project"] },
    { type: "header", text: "C. Uzupełnij dialog" },
    { type: "gap", text: '<span class="en">– Can you ________ me with this task?</span>', answers: ["help"] },
    { type: "gap", text: '<span class="en">– Of course. What\'s the ________?</span>', answers: ["deadline"] },
    { type: "gap", text: '<span class="en">– Tomorrow morning.</span>', answers: ["-"] },
    { type: "gap", text: '<span class="en">– OK, I\'ll do it ________.</span>', answers: ["now"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Mam pytanie.</span>', answers: ["i have a question", "i have a question.", "i've got a question", "i've got a question."], wide: true },
    { type: "gap", text: '<span class="pl">Nie rozumiem.</span>', answers: ["i don't understand", "i don't understand.", "i do not understand", "i do not understand."], wide: true },
    { type: "gap", text: '<span class="pl">Możesz powtórzyć?</span>', answers: ["can you repeat", "can you repeat?", "could you repeat", "could you repeat?", "could you repeat that", "could you repeat that?"], wide: true },
    { type: "gap", text: '<span class="pl">Wyślę ci email.</span>', answers: ["i'll send you an email", "i'll send you an email.", "i will send you an email", "i will send you an email."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Napisz krótki email do kolegi z pracy – pytasz o pomoc przy zadaniu.", placeholder: "np. Hi Tom, can you help me with...?" }
  ],
  test: [
    { q: "I have a ______ with my boss.", opcje: ["meeting", "met", "meet", "meeting room"], poprawna: 0, wyjasnienie: "meeting = spotkanie." },
    { q: "I ______ my emails every morning.", opcje: ["check", "checks", "checking", "am check"], poprawna: 0, wyjasnienie: "I check – Present Simple." },
    { q: "Kolega z pracy to ______.", opcje: ["colleague", "classmate", "friend", "companion"], poprawna: 0, wyjasnienie: "colleague = kolega z pracy." },
    { q: "Mój szef to ______.", opcje: ["my boss", "my chief", "my chef", "my header"], poprawna: 0, wyjasnienie: "boss = szef." },
    { q: "Termin po angielsku to ______.", opcje: ["deadline", "dateline", "timeline", "schedule"], poprawna: 0, wyjasnienie: "deadline = termin." },
    { q: "Możesz powtórzyć? → Could you ______?", opcje: ["repeat", "repeating", "repeats", "repeated"], poprawna: 0, wyjasnienie: "Could you repeat? – utrwalone." },
    { q: "I ______ understand.", opcje: ["don't", "doesn't", "am not", "not"], poprawna: 0, wyjasnienie: "I don't understand." },
    { q: "Wyślę ci email. → I'll ______ you an email.", opcje: ["send", "sending", "sent", "sends"], poprawna: 0, wyjasnienie: "send = wysłać." },
    { q: "Jestem na spotkaniu → I'm ______ a meeting.", opcje: ["in", "on", "at", "to"], poprawna: 0, wyjasnienie: "in a meeting." },
    { q: "Klient po angielsku to ______.", opcje: ["client", "clerk", "cleaner", "climb"], poprawna: 0, wyjasnienie: "client / customer = klient." }
  ]
};

/* ============================================================
   T12A1 – Prawa i obowiązki
============================================================ */
window.LESSON_DATA["T12A1"] = {
  tytul: "Prawa i obowiązki",
  poziom: "A1",
  dzial: "T12",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Every person has rights and duties. In my school we must respect the rules and be polite to teachers. We mustn't use phones during lessons. Students have the right to ask questions and to get help. My duty is to learn and do my homework. In my country, everyone has the right to education.
    </p>

    <h3>Prawa i obowiązki – słownictwo</h3>
    <table>
      <tr><td class="en">right</td><td class="pl">prawo (uprawnienie)</td></tr>
      <tr><td class="en">duty / responsibility</td><td class="pl">obowiązek / odpowiedzialność</td></tr>
      <tr><td class="en">rule</td><td class="pl">zasada</td></tr>
      <tr><td class="en">law</td><td class="pl">prawo (ustawa)</td></tr>
      <tr><td class="en">respect</td><td class="pl">szacunek / szanować</td></tr>
      <tr><td class="en">permission</td><td class="pl">pozwolenie</td></tr>
      <tr><td class="en">freedom</td><td class="pl">wolność</td></tr>
      <tr><td class="en">responsibility</td><td class="pl">odpowiedzialność</td></tr>
    </table>

    <h3>Modalne – must / mustn't / can</h3>
    <table>
      <tr><th>Angielski</th><th>Polski</th></tr>
      <tr><td class="en">I must...</td><td class="pl">Muszę...</td></tr>
      <tr><td class="en">I mustn't...</td><td class="pl">Nie wolno mi...</td></tr>
      <tr><td class="en">I can...</td><td class="pl">Mogę / potrafię...</td></tr>
      <tr><td class="en">I can't...</td><td class="pl">Nie mogę...</td></tr>
      <tr><td class="en">I have the right to...</td><td class="pl">Mam prawo do...</td></tr>
      <tr><td class="en">It is my duty to...</td><td class="pl">Moim obowiązkiem jest...</td></tr>
    </table>

    <h3>Zwroty – prawa i obowiązki</h3>
    <table>
      <tr><td class="en">We must respect the rules.</td><td class="pl">Musimy szanować zasady.</td></tr>
      <tr><td class="en">We mustn't use phones.</td><td class="pl">Nie wolno nam używać telefonów.</td></tr>
      <tr><td class="en">Students have the right to ask questions.</td><td class="pl">Uczniowie mają prawo zadawać pytania.</td></tr>
      <tr><td class="en">It's my duty to learn.</td><td class="pl">Moim obowiązkiem jest się uczyć.</td></tr>
      <tr><td class="en">Everyone has the right to education.</td><td class="pl">Każdy ma prawo do edukacji.</td></tr>
      <tr><td class="en">Be polite.</td><td class="pl">Bądź uprzejmy.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b><br>
      <b>must</b> = muszę (obowiązek) · <b>mustn't</b> = nie wolno (zakaz)<br>
      <b>have the right to</b> + czasownik (mam prawo do)<br>
      <b>It's my duty to</b> + czasownik (moim obowiązkiem jest)
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">Every person has ________ and duties.</span>', answers: ["rights"] },
    { type: "gap", text: '<span class="en">In my school we must ________ the rules.</span>', answers: ["respect"] },
    { type: "gap", text: '<span class="en">We must be ________ to teachers.</span>', answers: ["polite"] },
    { type: "gap", text: '<span class="en">We ________ use phones during lessons.</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">Students have the ________ to ask questions.</span>', answers: ["right"] },
    { type: "gap", text: '<span class="en">My ________ is to learn and do my homework.</span>', answers: ["duty"] },
    { type: "gap", text: '<span class="en">Everyone has the right to ________.</span>', answers: ["education"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">prawo (uprawnienie) → ________</span>', answers: ["right"] },
    { type: "gap", text: '<span class="pl">obowiązek → ________</span>', answers: ["duty"] },
    { type: "gap", text: '<span class="pl">zasada → ________</span>', answers: ["rule"] },
    { type: "gap", text: '<span class="pl">prawo (ustawa) → ________</span>', answers: ["law"] },
    { type: "gap", text: '<span class="pl">szacunek → ________</span>', answers: ["respect"] },
    { type: "gap", text: '<span class="pl">wolność → ________</span>', answers: ["freedom"] },
    { type: "header", text: "C. Must czy mustn't?" },
    { type: "gap", text: '<span class="en">We ________ respect the rules. (obowiązek)</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">We ________ use phones during lessons. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "gap", text: '<span class="en">We ________ be polite. (obowiązek)</span>', answers: ["must"] },
    { type: "gap", text: '<span class="en">We ________ smoke at school. (zakaz)</span>', answers: ["mustn't", "must not"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Musimy szanować zasady.</span>', answers: ["we must respect the rules", "we must respect the rules.", "we must respect rules", "we must respect rules."], wide: true },
    { type: "gap", text: '<span class="pl">Nie wolno używać telefonów.</span>', answers: ["we mustn't use phones", "we mustn't use phones.", "you mustn't use phones", "you mustn't use phones.", "we must not use phones"], wide: true },
    { type: "gap", text: '<span class="pl">Uczniowie mają prawo zadawać pytania.</span>', answers: ["students have the right to ask questions", "students have the right to ask questions.", "students have the right to ask questions"], wide: true },
    { type: "gap", text: '<span class="pl">Moim obowiązkiem jest się uczyć.</span>', answers: ["it's my duty to learn", "it's my duty to learn.", "it is my duty to learn", "it is my duty to learn."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Napisz 5 zdań o prawach i obowiązkach w twojej szkole lub domu.", placeholder: "np. In my school we must... We mustn't... I have the right to..." }
  ],
  test: [
    { q: "Every person has ______ and duties.", opcje: ["rights", "law", "rules", "freedom"], poprawna: 0, wyjasnienie: "rights and duties – utrwalone." },
    { q: "We ______ respect the rules.", opcje: ["must", "mustn't", "can", "don't"], poprawna: 0, wyjasnienie: "Obowiązek → must." },
    { q: "We ______ smoke at school.", opcje: ["mustn't", "must", "can", "don't"], poprawna: 0, wyjasnienie: "Zakaz → mustn't." },
    { q: "Students have the right ______ ask questions.", opcje: ["to", "for", "at", "of"], poprawna: 0, wyjasnienie: "have the right to..." },
    { q: "It's my ______ to learn.", opcje: ["duty", "law", "right", "freedom"], poprawna: 0, wyjasnienie: "It's my duty to... = moim obowiązkiem jest..." },
    { q: "Zasada po angielsku to ______.", opcje: ["rule", "ruler", "right", "law"], poprawna: 0, wyjasnienie: "rule = zasada." },
    { q: "Szacunek po angielsku to ______.", opcje: ["respect", "respecting", "respected", "respectful"], poprawna: 0, wyjasnienie: "respect = szacunek / szanować." },
    { q: "Wolność po angielsku to ______.", opcje: ["freedom", "free", "freely", "freed"], poprawna: 0, wyjasnienie: "freedom = wolność." },
    { q: "Każdy ma prawo do edukacji. → Everyone has the right to ______.", opcje: ["education", "educate", "educating", "educated"], poprawna: 0, wyjasnienie: "education = edukacja." },
    { q: "Być uprzejmym → Be ______.", opcje: ["polite", "politely", "polited", "polites"], poprawna: 0, wyjasnienie: "Be polite – utrwalone." }
  ]
};


/* ============================================================
   T13A1 – Przyszłość i AI
============================================================ */
window.LESSON_DATA["T13A1"] = {
  tytul: "Przyszłość i technologia",
  poziom: "A1",
  dzial: "T13",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I often think about the future. In 2050 the world will be very different. I think we will have flying cars and smart homes. Robots will help us at home and at work. Artificial intelligence will do many things for us. I hope technology will make our lives easier, but I am also a little afraid. I want to be a programmer in the future and work with new technologies.
    </p>

    <h3>Przyszłość – słownictwo</h3>
    <table>
      <tr><td class="en">future</td><td class="pl">przyszłość</td></tr>
      <tr><td class="en">past</td><td class="pl">przeszłość</td></tr>
      <tr><td class="en">present</td><td class="pl">teraźniejszość</td></tr>
      <tr><td class="en">tomorrow</td><td class="pl">jutro</td></tr>
      <tr><td class="en">next week / year</td><td class="pl">w przyszłym tygodniu / roku</td></tr>
      <tr><td class="en">soon</td><td class="pl">wkrótce</td></tr>
      <tr><td class="en">prediction</td><td class="pl">przewidywanie</td></tr>
      <tr><td class="en">plan</td><td class="pl">plan</td></tr>
    </table>

    <h3>Technologia przyszłości</h3>
    <table>
      <tr><td class="en">robot</td><td class="pl">robot</td></tr>
      <tr><td class="en">artificial intelligence (AI)</td><td class="pl">sztuczna inteligencja</td></tr>
      <tr><td class="en">smart home</td><td class="pl">inteligentny dom</td></tr>
      <tr><td class="en">flying car</td><td class="pl">latający samochód</td></tr>
      <tr><td class="en">spaceship</td><td class="pl">statek kosmiczny</td></tr>
      <tr><td class="en">device</td><td class="pl">urządzenie</td></tr>
      <tr><td class="en">technology</td><td class="pl">technologia</td></tr>
      <tr><td class="en">machine</td><td class="pl">maszyna</td></tr>
    </table>

    <h3>Zwroty – przewidywania</h3>
    <table>
      <tr><td class="en">I think...</td><td class="pl">Myślę, że...</td></tr>
      <tr><td class="en">I hope...</td><td class="pl">Mam nadzieję, że...</td></tr>
      <tr><td class="en">Maybe...</td><td class="pl">Może...</td></tr>
      <tr><td class="en">In the future...</td><td class="pl">W przyszłości...</td></tr>
      <tr><td class="en">I will be...</td><td class="pl">Będę...</td></tr>
      <tr><td class="en">I want to be...</td><td class="pl">Chcę być...</td></tr>
      <tr><td class="en">I would like to...</td><td class="pl">Chciałbym...</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> po <b>will</b> czasownik jest w formie podstawowej (bez "to"):<br>
      ✅ <span class="en">I will be a programmer.</span><br>
      ❌ <span style="color:#991b1b">I will to be a programmer.</span><br>
      Skrót: <b>I'll</b> = I will.
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I often think about the ________.</span>', answers: ["future"] },
    { type: "gap", text: '<span class="en">In 2050 the world ________ be very different.</span>', answers: ["will"] },
    { type: "gap", text: '<span class="en">I think we will have ________ cars.</span>', answers: ["flying"] },
    { type: "gap", text: '<span class="en">Robots will help us at home and at ________.</span>', answers: ["work"] },
    { type: "gap", text: '<span class="en">Artificial ________ will do many things for us.</span>', answers: ["intelligence"] },
    { type: "gap", text: '<span class="en">I hope technology will make our lives ________.</span>', answers: ["easier"] },
    { type: "gap", text: '<span class="en">I want to be a ________ in the future.</span>', answers: ["programmer"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">przyszłość → ________</span>', answers: ["future"] },
    { type: "gap", text: '<span class="pl">robot → ________</span>', answers: ["robot"] },
    { type: "gap", text: '<span class="pl">maszyna → ________</span>', answers: ["machine"] },
    { type: "gap", text: '<span class="pl">urządzenie → ________</span>', answers: ["device"] },
    { type: "gap", text: '<span class="pl">przewidywanie → ________</span>', answers: ["prediction"] },
    { type: "gap", text: '<span class="pl">technologia → ________</span>', answers: ["technology"] },
    { type: "header", text: "C. Uzupełnij zdania z will" },
    { type: "gap", text: '<span class="en">I ________ (be) a programmer in the future.</span>', answers: ["will be", "'ll be"] },
    { type: "gap", text: '<span class="en">Robots ________ (help) us at home.</span>', answers: ["will help", "'ll help"] },
    { type: "gap", text: '<span class="en">Technology ________ (change) our lives.</span>', answers: ["will change", "'ll change"] },
    { type: "gap", text: '<span class="en">I ________ (not / be) afraid of the future.</span>', answers: ["won't be", "will not be"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Myślę, że roboty będą nam pomagać.</span>', answers: ["i think robots will help us", "i think robots will help us."], wide: true },
    { type: "gap", text: '<span class="pl">W przyszłości chcę być programistą.</span>', answers: ["in the future i want to be a programmer", "in the future i want to be a programmer.", "in the future i would like to be a programmer"], wide: true },
    { type: "gap", text: '<span class="pl">Mam nadzieję, że technologia zmieni nasze życie.</span>', answers: ["i hope technology will change our lives", "i hope technology will change our lives.", "i hope technology will change our life", "i hope technology will change our life."], wide: true },
    { type: "gap", text: '<span class="pl">Sztuczna inteligencja zrobi wiele rzeczy.</span>', answers: ["artificial intelligence will do many things", "artificial intelligence will do many things.", "ai will do many things", "ai will do many things."], wide: true },
    { type: "header", text: "E. Napisz o przyszłości" },
    { type: "open", text: "Napisz 5 zdań o tym, jak wyobrażasz sobie świat w 2050 roku (użyj will).", placeholder: "np. In 2050 we will have... Robots will..." }
  ],
  test: [
    { q: "In the future I ______ a programmer.", opcje: ["will be", "will to be", "be", "am"], poprawna: 0, wyjasnienie: "will + czasownik (bez to)." },
    { q: "Robots ______ help us.", opcje: ["will", "will to", "are", "do"], poprawna: 0, wyjasnienie: "Future Simple: will + czasownik." },
    { q: "I ______ about the future.", opcje: ["think", "thinking", "am think", "thought"], poprawna: 0, wyjasnienie: "I think – Present Simple." },
    { q: "Artificial ______ is very popular.", opcje: ["intelligence", "intelligent", "intellect", "intel"], poprawna: 0, wyjasnienie: "AI = artificial intelligence." },
    { q: "I hope technology ______ our lives easier.", opcje: ["will make", "make", "makes", "making"], poprawna: 0, wyjasnienie: "Po hope – will + czasownik." },
    { q: "I will ______ a programmer in 2030.", opcje: ["be", "am", "to be", "being"], poprawna: 0, wyjasnienie: "will be – forma podstawowa." },
    { q: "My phone is a ______.", opcje: ["device", "devise", "devices", "devicing"], poprawna: 0, wyjasnienie: "device = urządzenie." },
    { q: "Urządzenie po angielsku to ______.", opcje: ["device", "machine", "technology", "robot"], poprawna: 0, wyjasnienie: "device = urządzenie." },
    { q: "Robots and cars are examples of ______.", opcje: ["technology", "technologies", "technologic", "technician"], poprawna: 0, wyjasnienie: "technology = technologia." },
    { q: "I ______ be a programmer. (przeczenie)", opcje: ["won't", "will not", "am not", "don't"], poprawna: 0, wyjasnienie: "won't = will not." }
  ]
};

/* ============================================================
   T14A1 – Problemy i rady
============================================================ */
window.LESSON_DATA["T14A1"] = {
  tytul: "Problemy i rady",
  poziom: "A1",
  dzial: "T14",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Yesterday I had a problem. I lost my wallet on the bus. I didn't know what to do. I called my mum and she said: "Don't worry, you should go to the police station." So I went there and explained the situation. The police officer was very nice and helped me. Now I always check my pockets before I leave the bus.
    </p>

    <h3>Problemy – słownictwo</h3>
    <table>
      <tr><td class="en">problem</td><td class="pl">problem</td></tr>
      <tr><td class="en">mistake</td><td class="pl">błąd</td></tr>
      <tr><td class="en">accident</td><td class="pl">wypadek</td></tr>
      <tr><td class="en">trouble</td><td class="pl">kłopot</td></tr>
      <tr><td class="en">difficulty</td><td class="pl">trudność</td></tr>
      <tr><td class="en">situation</td><td class="pl">sytuacja</td></tr>
      <tr><td class="en">worry</td><td class="pl">martwić się</td></tr>
      <tr><td class="en">lose</td><td class="pl">zgubić</td></tr>
    </table>

    <h3>Rozwiązania</h3>
    <table>
      <tr><td class="en">solution</td><td class="pl">rozwiązanie</td></tr>
      <tr><td class="en">advice</td><td class="pl">rada</td></tr>
      <tr><td class="en">help</td><td class="pl">pomoc</td></tr>
      <tr><td class="en">decision</td><td class="pl">decyzja</td></tr>
      <tr><td class="en">choice</td><td class="pl">wybór</td></tr>
      <tr><td class="en">answer</td><td class="pl">odpowiedź</td></tr>
    </table>

    <h3>Udzielanie rad</h3>
    <table>
      <tr><td class="en">You should...</td><td class="pl">Powinieneś...</td></tr>
      <tr><td class="en">You shouldn't...</td><td class="pl">Nie powinieneś...</td></tr>
      <tr><td class="en">Don't worry.</td><td class="pl">Nie martw się.</td></tr>
      <tr><td class="en">It's OK.</td><td class="pl">Jest OK.</td></tr>
      <tr><td class="en">I can help you.</td><td class="pl">Mogę ci pomóc.</td></tr>
      <tr><td class="en">Try again.</td><td class="pl">Spróbuj jeszcze raz.</td></tr>
    </table>

    <h3>Zwroty – reagowanie</h3>
    <table>
      <tr><td class="en">I have a problem.</td><td class="pl">Mam problem.</td></tr>
      <tr><td class="en">I don't know what to do.</td><td class="pl">Nie wiem, co robić.</td></tr>
      <tr><td class="en">Can I ask for help?</td><td class="pl">Czy mogę poprosić o pomoc?</td></tr>
      <tr><td class="en">I need your advice.</td><td class="pl">Potrzebuję twojej rady.</td></tr>
      <tr><td class="en">Thank you for your help.</td><td class="pl">Dziękuję za pomoc.</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>should</b> + czasownik (powinieneś) – rada.<br>
      ✅ <span class="en">You should go to the doctor.</span><br>
      ❌ <span style="color:#991b1b">You should to go to the doctor.</span>
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">Yesterday I had a ________.</span>', answers: ["problem"] },
    { type: "gap", text: '<span class="en">I ________ my wallet on the bus.</span>', answers: ["lost"] },
    { type: "gap", text: '<span class="en">I didn\'t know what to ________.</span>', answers: ["do"] },
    { type: "gap", text: '<span class="en">My mum said: "Don\'t ________."</span>', answers: ["worry"] },
    { type: "gap", text: '<span class="en">You ________ go to the police station.</span>', answers: ["should"] },
    { type: "gap", text: '<span class="en">The police officer ________ me.</span>', answers: ["helped"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">błąd → ________</span>', answers: ["mistake"] },
    { type: "gap", text: '<span class="pl">wypadek → ________</span>', answers: ["accident"] },
    { type: "gap", text: '<span class="pl">rozwiązanie → ________</span>', answers: ["solution"] },
    { type: "gap", text: '<span class="pl">rada → ________</span>', answers: ["advice"] },
    { type: "gap", text: '<span class="pl">decyzja → ________</span>', answers: ["decision"] },
    { type: "gap", text: '<span class="pl">wybór → ________</span>', answers: ["choice"] },
    { type: "header", text: "C. Udziel rady (should)" },
    { type: "gap", text: '<span class="en">I have a headache. → You ________ go to the doctor.</span>', answers: ["should"] },
    { type: "gap", text: '<span class="en">I am tired. → You ________ go to bed.</span>', answers: ["should"] },
    { type: "gap", text: '<span class="en">I lost my keys. → You ________ look for them.</span>', answers: ["should"] },
    { type: "gap", text: '<span class="en">I don\'t like my job. → You ________ change it.</span>', answers: ["should"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Mam problem.</span>', answers: ["i have a problem", "i have a problem.", "i've got a problem", "i've got a problem."], wide: true },
    { type: "gap", text: '<span class="pl">Nie wiem, co robić.</span>', answers: ["i don't know what to do", "i don't know what to do.", "i do not know what to do", "i do not know what to do."], wide: true },
    { type: "gap", text: '<span class="pl">Powinieneś iść do lekarza.</span>', answers: ["you should go to the doctor", "you should go to the doctor.", "you should go to a doctor", "you should go to a doctor."], wide: true },
    { type: "gap", text: '<span class="pl">Nie martw się.</span>', answers: ["don't worry", "don't worry.", "do not worry", "do not worry."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Opisz problem, który miałeś niedawno, i jak go rozwiązałeś.", placeholder: "np. Last week I had a problem. I... So I decided to..." }
  ],
  test: [
    { q: "I have a ______.", opcje: ["problem", "problems", "problemly", "probleming"], poprawna: 0, wyjasnienie: "I have a problem." },
    { q: "I don't know what ______ do.", opcje: ["to", "for", "at", "of"], poprawna: 0, wyjasnienie: "what to do – utrwalone." },
    { q: "You ______ go to the doctor.", opcje: ["should", "should to", "shoulds", "shoulding"], poprawna: 0, wyjasnienie: "should + czasownik (bez to)." },
    { q: "Błąd po angielsku to ______.", opcje: ["mistake", "mystake", "error", "wrong"], poprawna: 0, wyjasnienie: "mistake = błąd." },
    { q: "Wypadek po angielsku to ______.", opcje: ["accident", "accidently", "accidented", "accidence"], poprawna: 0, wyjasnienie: "accident = wypadek." },
    { q: "Rada po angielsku to ______.", opcje: ["advice", "advices", "advising", "advised"], poprawna: 0, wyjasnienie: "advice – niepoliczalne, bez -s." },
    { q: "Rozwiązanie po angielsku to ______.", opcje: ["solution", "solve", "solving", "solver"], poprawna: 0, wyjasnienie: "solution = rozwiązanie." },
    { q: "Don't ______.", opcje: ["worry", "worried", "worrying", "worries"], poprawna: 0, wyjasnienie: "Don't worry – utrwalone." },
    { q: "I ______ my wallet yesterday.", opcje: ["lost", "lose", "losing", "losed"], poprawna: 0, wyjasnienie: "lose → lost (Past Simple)." },
    { q: "Dziękuję za pomoc. → Thank you for your ______.", opcje: ["help", "helping", "helped", "helped me"], poprawna: 0, wyjasnienie: "help = pomoc." }
  ]
};

/* ============================================================
   T15A1 – Ubrania i moda
============================================================ */
window.LESSON_DATA["T15A1"] = {
  tytul: "Ubrania i moda",
  poziom: "A1",
  dzial: "T15",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      I like comfortable clothes. In winter I usually wear a warm coat, a scarf and gloves. In summer I wear T-shirts and shorts. My favourite colour is blue, so I have a lot of blue clothes. When I go to school I wear jeans and a hoodie. I don't like formal clothes like suits. My mother says I should dress smartly for important events.
    </p>

    <h3>Ubrania – podstawowe</h3>
    <table>
      <tr><td class="en">T-shirt</td><td class="pl">koszulka</td></tr>
      <tr><td class="en">shirt</td><td class="pl">koszula</td></tr>
      <tr><td class="en">jumper / sweater</td><td class="pl">sweter</td></tr>
      <tr><td class="en">hoodie</td><td class="pl">bluza z kapturem</td></tr>
      <tr><td class="en">jacket</td><td class="pl">kurtka</td></tr>
      <tr><td class="en">coat</td><td class="pl">płaszcz</td></tr>
      <tr><td class="en">jeans</td><td class="pl">dżinsy</td></tr>
      <tr><td class="en">trousers</td><td class="pl">spodnie</td></tr>
      <tr><td class="en">shorts</td><td class="pl">szorty</td></tr>
      <tr><td class="en">skirt</td><td class="pl">spódnica</td></tr>
      <tr><td class="en">dress</td><td class="pl">sukienka</td></tr>
      <tr><td class="en">suit</td><td class="pl">garnitur</td></tr>
    </table>

    <h3>Buty i dodatki</h3>
    <table>
      <tr><td class="en">shoes</td><td class="pl">buty</td></tr>
      <tr><td class="en">trainers</td><td class="pl">adidasy</td></tr>
      <tr><td class="en">boots</td><td class="pl">kozaki / buty zimowe</td></tr>
      <tr><td class="en">sandals</td><td class="pl">sandały</td></tr>
      <tr><td class="en">hat / cap</td><td class="pl">czapka / kask</td></tr>
      <tr><td class="en">scarf</td><td class="pl">szalik</td></tr>
      <tr><td class="en">gloves</td><td class="pl">rękawiczki</td></tr>
      <tr><td class="en">bag</td><td class="pl">torba</td></tr>
      <tr><td class="en">watch</td><td class="pl">zegarek</td></tr>
    </table>

    <h3>Zwroty – ubrania</h3>
    <table>
      <tr><td class="en">I wear...</td><td class="pl">Noszę...</td></tr>
      <tr><td class="en">I put on...</td><td class="pl">Zakładam...</td></tr>
      <tr><td class="en">I take off...</td><td class="pl">Zdejmuję...</td></tr>
      <tr><td class="en">I try on...</td><td class="pl">Przymierzam...</td></tr>
      <tr><td class="en">It fits me.</td><td class="pl">Pasuje na mnie.</td></tr>
      <tr><td class="en">It doesn't fit me.</td><td class="pl">Nie pasuje na mnie.</td></tr>
      <tr><td class="en">What size are you?</td><td class="pl">Jaki nosisz rozmiar?</td></tr>
      <tr><td class="en">What colour is it?</td><td class="pl">Jakiego to jest koloru?</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>wear</b> (nosić) – codziennie · <b>put on</b> (założyć) – czynność · <b>take off</b> (zdjąć).<br>
      Uwaga: <b>trousers, jeans, shorts</b> są w liczbie mnogiej – mówimy <span class="en">a pair of trousers</span> (jedna para spodni).
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">I like comfortable ________.</span>', answers: ["clothes"] },
    { type: "gap", text: '<span class="en">In winter I wear a warm ________.</span>', answers: ["coat"] },
    { type: "gap", text: '<span class="en">In summer I wear T-shirts and ________.</span>', answers: ["shorts"] },
    { type: "gap", text: '<span class="en">My favourite ________ is blue.</span>', answers: ["colour", "color"] },
    { type: "gap", text: '<span class="en">When I go to school I wear ________ and a hoodie.</span>', answers: ["jeans"] },
    { type: "gap", text: '<span class="en">I don\'t like formal clothes like ________.</span>', answers: ["suits"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">koszulka → ________</span>', answers: ["t-shirt", "tshirt"] },
    { type: "gap", text: '<span class="pl">sweter → ________</span>', answers: ["jumper", "sweater"] },
    { type: "gap", text: '<span class="pl">spódnica → ________</span>', answers: ["skirt"] },
    { type: "gap", text: '<span class="pl">sukienka → ________</span>', answers: ["dress"] },
    { type: "gap", text: '<span class="pl">adidasy → ________</span>', answers: ["trainers"] },
    { type: "gap", text: '<span class="pl">szalik → ________</span>', answers: ["scarf"] },
    { type: "gap", text: '<span class="pl">rękawiczki → ________</span>', answers: ["gloves"] },
    { type: "header", text: "C. Wear, put on czy take off?" },
    { type: "gap", text: '<span class="en">In winter I ________ a warm coat. (noszę)</span>', answers: ["wear"] },
    { type: "gap", text: '<span class="en">It\'s cold. ________ your jacket! (załóż)</span>', answers: ["put on"] },
    { type: "gap", text: '<span class="en">It\'s hot inside. ________ your coat! (zdejmij)</span>', answers: ["take off"] },
    { type: "gap", text: '<span class="en">Can I ________ this dress on? (przymierzyć)</span>', answers: ["try"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">Noszę dżinsy i koszulkę.</span>', answers: ["i wear jeans and a t-shirt", "i wear jeans and a t-shirt.", "i wear jeans and a tshirt", "i wear jeans and a tshirt."], wide: true },
    { type: "gap", text: '<span class="pl">Zimą noszę ciepły płaszcz.</span>', answers: ["in winter i wear a warm coat", "in winter i wear a warm coat."], wide: true },
    { type: "gap", text: '<span class="pl">Załóż czapkę!</span>', answers: ["put on a hat", "put on a hat!", "put on your hat", "put on your hat!"], wide: true },
    { type: "gap", text: '<span class="pl">To pasuje na mnie.</span>', answers: ["it fits me", "it fits me."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Opisz, co nosisz latem, zimą i do szkoły.", placeholder: "np. In summer I wear... In winter I wear... At school I..." }
  ],
  test: [
    { q: "In winter I ______ a warm coat.", opcje: ["wear", "wearing", "wears", "wore"], poprawna: 0, wyjasnienie: "I wear – Present Simple." },
    { q: "In summer I wear ______.", opcje: ["shorts", "coat", "scarf", "boots"], poprawna: 0, wyjasnienie: "shorts = szorty (lato)." },
    { q: "Koszulka po angielsku to ______.", opcje: ["T-shirt", "shirt", "sweater", "dress"], poprawna: 0, wyjasnienie: "T-shirt = koszulka (a shirt = koszula)." },
    { q: "Sweter po angielsku to ______.", opcje: ["jumper", "jacket", "coat", "shirt"], poprawna: 0, wyjasnienie: "jumper / sweater = sweter." },
    { q: "Sukienka po angielsku to ______.", opcje: ["dress", "skirt", "T-shirt", "suit"], poprawna: 0, wyjasnienie: "dress = sukienka (a skirt = spódnica)." },
    { q: "Zdejmij kurtkę! → ______ your jacket!", opcje: ["Take off", "Put on", "Wear", "Try on"], poprawna: 0, wyjasnienie: "take off = zdjąć." },
    { q: "Załóż kurtkę! → ______ your jacket!", opcje: ["Put on", "Take off", "Wear", "Try on"], poprawna: 0, wyjasnienie: "put on = założyć." },
    { q: "To pasuje na mnie. → It ______ me.", opcje: ["fits", "fit", "fitted", "fitting"], poprawna: 0, wyjasnienie: "It fits me (3 os. l.poj. → fits)." },
    { q: "Rękawiczki po angielsku to ______.", opcje: ["gloves", "glovers", "glovings", "handshoes"], poprawna: 0, wyjasnienie: "gloves = rękawiczki." },
    { q: "Adidasy po angielsku to ______.", opcje: ["trainers", "shoes", "boots", "sandals"], poprawna: 0, wyjasnienie: "trainers (GB) / sneakers (US) = adidasy." }
  ]
};

/* ============================================================
   T16A1 – Podróże
============================================================ */
window.LESSON_DATA["T16A1"] = {
  tytul: "Podróże i wakacje",
  poziom: "A1",
  dzial: "T16",
  teoria: `
    <h3>Tekst do zapamiętania</h3>
    <p class="en" style="display:block; padding:14px 18px; line-height:1.9;">
      Last summer I travelled to Spain with my family. We went by plane and stayed in a small hotel near the beach. Every day we swam in the sea and visited interesting places. I took a lot of photos. The food was delicious. I bought some souvenirs for my friends. Next year I would like to go to Italy. I love travelling and discovering new cultures.
    </p>

    <h3>Podróżowanie – słownictwo</h3>
    <table>
      <tr><td class="en">travel</td><td class="pl">podróżować</td></tr>
      <tr><td class="en">trip / journey</td><td class="pl">podróż / wycieczka</td></tr>
      <tr><td class="en">holiday / vacation</td><td class="pl">wakacje</td></tr>
      <tr><td class="en">abroad</td><td class="pl">za granicą</td></tr>
      <tr><td class="en">luggage</td><td class="pl">bagaż</td></tr>
      <tr><td class="en">suitcase</td><td class="pl">walizka</td></tr>
      <tr><td class="en">passport</td><td class="pl">paszport</td></tr>
      <tr><td class="en">ticket</td><td class="pl">bilet</td></tr>
    </table>

    <h3>Środki transportu</h3>
    <table>
      <tr><td class="en">by plane</td><td class="pl">samolotem</td></tr>
      <tr><td class="en">by train</td><td class="pl">pociągiem</td></tr>
      <tr><td class="en">by bus</td><td class="pl">autobusem</td></tr>
      <tr><td class="en">by car</td><td class="pl">samochodem</td></tr>
      <tr><td class="en">on foot</td><td class="pl">pieszo</td></tr>
    </table>

    <h3>Miejsca</h3>
    <table>
      <tr><td class="en">airport</td><td class="pl">lotnisko</td></tr>
      <tr><td class="en">station</td><td class="pl">dworzec</td></tr>
      <tr><td class="en">hotel</td><td class="pl">hotel</td></tr>
      <tr><td class="en">beach</td><td class="pl">plaża</td></tr>
      <tr><td class="en">city</td><td class="pl">miasto</td></tr>
      <tr><td class="en">museum</td><td class="pl">muzeum</td></tr>
      <tr><td class="en">restaurant</td><td class="pl">restauracja</td></tr>
    </table>

    <h3>Zwroty w podróży</h3>
    <table>
      <tr><td class="en">I went to...</td><td class="pl">Pojechałem do...</td></tr>
      <tr><td class="en">I stayed in a hotel.</td><td class="pl">Zatrzymałem się w hotelu.</td></tr>
      <tr><td class="en">I took photos.</td><td class="pl">Robiłem zdjęcia.</td></tr>
      <tr><td class="en">I bought souvenirs.</td><td class="pl">Kupiłem pamiątki.</td></tr>
      <tr><td class="en">How do I get to...?</td><td class="pl">Jak dostać się do...?</td></tr>
      <tr><td class="en">Where is the station?</td><td class="pl">Gdzie jest dworzec?</td></tr>
      <tr><td class="en">A ticket to London, please.</td><td class="pl">Bilet do Londynu poproszę.</td></tr>
      <tr><td class="en">One way / return</td><td class="pl">W jedną stronę / powrotny</td></tr>
    </table>

    <div class="tip-box">
      <b>Zapamiętaj:</b> <b>go to</b> + miejsce (jechać do): <span class="en">I go to Spain.</span><br>
      <b>go by</b> + środek transportu (jechać czymś): <span class="en">I go by plane.</span><br>
      Ale: <b>on foot</b> (pieszo) – nie "by foot".
    </div>
  `,
  karta: [
    { type: "header", text: "A. Uzupełnij zdanie słowem z tekstu" },
    { type: "gap", text: '<span class="en">Last summer I ________ to Spain.</span>', answers: ["travelled", "traveled", "went"] },
    { type: "gap", text: '<span class="en">We went by ________.</span>', answers: ["plane"] },
    { type: "gap", text: '<span class="en">We stayed in a small ________.</span>', answers: ["hotel"] },
    { type: "gap", text: '<span class="en">Every day we ________ in the sea.</span>', answers: ["swam"] },
    { type: "gap", text: '<span class="en">I took a lot of ________.</span>', answers: ["photos"] },
    { type: "gap", text: '<span class="en">I bought some ________ for my friends.</span>', answers: ["souvenirs"] },
    { type: "gap", text: '<span class="en">Next year I would like to go to ________.</span>', answers: ["italy"] },
    { type: "header", text: "B. Dopasuj" },
    { type: "gap", text: '<span class="pl">bagaż → ________</span>', answers: ["luggage"] },
    { type: "gap", text: '<span class="pl">walizka → ________</span>', answers: ["suitcase"] },
    { type: "gap", text: '<span class="pl">paszport → ________</span>', answers: ["passport"] },
    { type: "gap", text: '<span class="pl">lotnisko → ________</span>', answers: ["airport"] },
    { type: "gap", text: '<span class="pl">dworzec → ________</span>', answers: ["station"] },
    { type: "gap", text: '<span class="pl">plaża → ________</span>', answers: ["beach"] },
    { type: "gap", text: '<span class="pl">muzeum → ________</span>', answers: ["museum"] },
    { type: "header", text: "C. by czy on?" },
    { type: "gap", text: '<span class="en">I go to school ________ bus. (autobusem)</span>', answers: ["by"] },
    { type: "gap", text: '<span class="en">We went to Spain ________ plane. (samolotem)</span>', answers: ["by"] },
    { type: "gap", text: '<span class="en">I go to work ________ foot. (pieszo)</span>', answers: ["on"] },
    { type: "gap", text: '<span class="en">They travel ________ train. (pociągiem)</span>', answers: ["by"] },
    { type: "header", text: "D. Przetłumacz na angielski" },
    { type: "gap", text: '<span class="pl">W zeszłe wakacje pojechałem do Hiszpanii.</span>', answers: ["last summer i went to spain", "last summer i went to spain.", "last summer i travelled to spain", "last summer i travelled to spain."], wide: true },
    { type: "gap", text: '<span class="pl">Pojechaliśmy samolotem.</span>', answers: ["we went by plane", "we went by plane.", "we travelled by plane", "we travelled by plane."], wide: true },
    { type: "gap", text: '<span class="pl">Zatrzymaliśmy się w hotelu.</span>', answers: ["we stayed in a hotel", "we stayed in a hotel.", "we stayed at a hotel", "we stayed at a hotel."], wide: true },
    { type: "gap", text: '<span class="pl">Robiłem dużo zdjęć.</span>', answers: ["i took a lot of photos", "i took a lot of photos.", "i took lots of photos", "i took lots of photos."], wide: true },
    { type: "header", text: "E. Napisz" },
    { type: "open", text: "Opisz swoje ostatnie wakacje lub wymarzoną podróż.", placeholder: "np. Last summer I went to... We stayed in... I saw..." }
  ],
  test: [
    { q: "Last summer I ______ to Spain.", opcje: ["went", "go", "going", "gone"], poprawna: 0, wyjasnienie: "go → went (Past Simple)." },
    { q: "We went ______ plane.", opcje: ["by", "on", "in", "with"], poprawna: 0, wyjasnienie: "by plane = samolotem." },
    { q: "We stayed ______ a hotel.", opcje: ["in", "on", "at", "by"], poprawna: 0, wyjasnienie: "in a hotel." },
    { q: "Bagaż po angielsku to ______.", opcje: ["luggage", "baggages", "bag", "suitcase"], poprawna: 0, wyjasnienie: "luggage (niepoliczalne)." },
    { q: "Lotnisko po angielsku to ______.", opcje: ["airport", "station", "port", "airstation"], poprawna: 0, wyjasnienie: "airport = lotnisko." },
    { q: "Paszport po angielsku to ______.", opcje: ["passport", "pass", "port", "document"], poprawna: 0, wyjasnienie: "passport = paszport." },
    { q: "I go to school ______ foot.", opcje: ["on", "by", "in", "at"], poprawna: 0, wyjasnienie: "on foot = pieszo." },
    { q: "Bilet do Londynu proszę. → A ______ to London, please.", opcje: ["ticket", "bill", "paper", "pass"], poprawna: 0, wyjasnienie: "ticket = bilet." },
    { q: "Gdzie jest dworzec? → Where is the ______?", opcje: ["station", "airport", "stop", "hotel"], poprawna: 0, wyjasnienie: "station = dworzec." },
    { q: "Robiłem zdjęcia. → I ______ photos.", opcje: ["took", "take", "taking", "taked"], poprawna: 0, wyjasnienie: "take → took (Past Simple)." }
  ]
};