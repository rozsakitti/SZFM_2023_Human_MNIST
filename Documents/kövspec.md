# Követelmény specifikáció
## 1. Jelenlegi helyzet leírása
A kézírás értelmezése a mai világban is kihívást jelent az emberek számára, amihez hatalmas segítséget nyújt a MNIST, ami egy nagyméretű adathalmaz. Jelenleg 60.000 tanító és 10.000 teszt képet tartalmaz, ami kézírásos számjegyeket ábrázol 0-tól 9-ig. 
Manapság általában a dokumentumok már nem szoktak kézzel íródni, hiszen egyre inkább divatossá, természetbarátabbá és gördülékenyebbé válik a digitális írás. Azonban vannak olyan területek, ahol elkerülhetetlen a kézírás használata, jelentsen ez még elavult papíralapon működőt vagy digitális formában megvalósuló írást. Ilyenek például a személyes okmányok azonosítói, dátumok, melyeket a személyazonosság jelölése érdekében sok helyen kézzel írva kell megadni. 
Ilyen kézzel írt információk feldolgozásakor előfordulhatnak olyan értelmezési problémák, amiket nehéz tisztázni. Ilyen esetekben nincs rendelkezésre álló olyan eszköz, ami segítené az olvasót az értelmezésben, illetve a szerző kézírásához hozzáférésre lenne szüksége az írás helyes értelmezésére. Ennek eredményeként a dokumentum érvénytelenné vákhat, és újraírásra lehet szükség, ami időigényes lehet.

## 2. Vágyálomrendszer leírása
-Célunk olyan statisztikát biztosítani weboldal formájában, amely segíti a különböző módon írt számok valós értékének megértését. Felmérjük, hogy adott képet ki milyen számként értelmez és ebből egy statisztikát készítünk, illetve lesz olyan része is a programunknak, ahol időre "játszhat" a felhasználó és adhatja meg, hogy ő milyen számot lát a megadott képen.

-Célunk 2 eltérő felület létrehozása lesz, az egyikben a felhasználó segít statisztikát készteni azzal, hogy bejelöli ő milyen számként értelmezi az adott képet. Ezt egy statisztikát ábrázoló ablakban fogjuk megjeleníteni.
-Másik felületünkön pedig egy úgynevezett játék lesz majd, aminek a teljesítésével a felhasználó pontokat gyűjthet időre.

-A használathoz bejelentkezésre/regisztrációra lesz szükség.

-A beírandó számot nem a fizikai billentyűzettel, hanem egy képernyőn lévővel kell bevinni.

--Ennek kivitelezését alábbiak szerint képzeljük el: A képernyőn egy mini billentyűzet, gombok segítségével fogják tudni megadni a válaszaikat, a 0-tól 9-ig terjedő számok valamelyikét.


## 3. Jelenlegi üzleti folyamatok leírása

Jelenleg nincs olyan webes felületünk, ami olyan megfelelő dizájnnal és könnyen értelmezhető felülettel rendelkezne, aminek segítségével párhuzamosan készül statisztika, illetve játékos tanulás.
Az adatok elemzése során felmerülő értelmezési problémákat manuálisan kellene tisztázni,ha nem készülne el a mi igényeinknek megfelelő webes felület.

## 4. Igényelt üzleti folyamatok modellje
### 4.1 Előkészületek
  - 4.1.1 Regisztráció: Ahhoz, hogy részt tudjon valaki venni a mérésben, ahhoz előzetesen regisztrálnia kell az oldalunkra. Ehhez szükséges lesz legalább egy email cím, és egy jelszó párpsra
  - 4.1.2 Bejelentkezés: Amint regisztrált a felhasználó, akkor már sikeresen be tud jelentkezni a felületre, a regisztráció során megadott email és jelszó párossal. Amint bejelentkezett, elérhetővé válik számára a rendszer által nyújtott lehetőségek.
### 4.2 Mérési folyamat 
  - 4.2.1 Bejelentkezett felhasználó elindítja a mérési folyamatot, ekkor a rendszer megjelenít számára 15 képet, amiről meg kell mondani, hogy pontosan milyen számot lát.
  - 4.2.2 Amint megválaszolta a kérdéseket, akkor lehetősége van újra elvégezni egy ilyen felmérést, vagy akár egyből megtudja nézni a teljes statisztikát arról, hogy más emberek hogyan látták azokat a képeket, amiket ő is kitöltött.
### 4.3 Játék
  - 4.3.1 A játék megnevezést azért kapta, mert ebben a lehetőségben a felhasználó különböző "akadályok" elé lesz állítva.
  - 4.3.2 Elsődleges játék: 3 level elérhető, 1 perces határidővel, és szintenként egyre több képre kell tudni helyesen válaszolni. Amint a felhasználó helytelen választ ad valamelyik kérdésre, akkor elvesztette a játékot.
### 4.4 Statisztika
  - Itt láthatóak lesznek azon képek statisztikája (hány %-ban tudják megmondani, hogy milyen szám látható a képen), amelyeket már legalább 1 ember kitöltött.
  
## 5. A rendszerre vonatkozó szabályok 
- 5.1 A webes felület alapjai a html lesz.
  
- 5.2 A kliens oldali funkcionalitást javascript fogja végezni.
  
- 5.3 A dizájn elérése érdekében css-t fogunk használni.

- 5.2 Adatok tárolására adatbázist kell használni.

- 5.3 Az alkalmazás alapvetően számítógépre kell optimalizálni.
  
- 5.4 A felhasználók adatait bizalmasan kell kezelni

## 6. Követelménylista
|    ID   |            Név             |    Kifejtés    |
|---------|:----------------------------------:|--------|
| **K01** |   Könnyen üzemeltethető rendszer   |    Felnőttek, gyerekek számára is egyaránt értelmezhető rendszer kialakítása.    |
| **K02** |    Grafikus felhasználói felület   |    Színes felület létrehozása a szórakoztathatóság érdekében.    |
| **K03** |          Reszponzív dizájn         |    Rugalmasan megjeleníthető legyen bármilyen eszközön. Akár telefonon,számítógépen.    |
| **K04** |          Könnyű használat          |    Gyerekek számára is könnyedén értelmezhető felület kialakítása.    |
| **K05** |  Regisztrációs felület   |    A felhasználók számára biztosítani kel egy könnyű regisztrációs felületet.    |
| **K06** |   Bejelentkezés  |    Regisztrált felhasználók egyszerű belépési lehetőséget kapnak.    |
| **K07** |   Jelszavak titkosítása  |    A felhasználók jelszavait erős titkosítással védelmezzük.    |
| **K08** |   Jól látható képek  |    Biztosítjuk, hogy a felhasználók számára jól látható képeket jelenítünk meg.    |
| **K09** |   Pontrenszer  |    Versenyszerű pontgyűjtés és rangsorolás a felhasználók között.    |


## 7. Fejlesztői igényspecifikáció:

- 7.1 Hardveres, szoftveres, illetve emberi erőforrásokkal lefejleszhető legyen a termék.

- 7.2 A kommunikáció gördülékenységét biztosítani a megrendelővel.

- 7.3 Megfelelően becsülhető fejlesztési idő.

- 7.4 Homályos, kérdéses részek nélküli terv készítése.

- 7.5 Bármiféle extra kérés vagy terv módosításról időben való tudosítás.

- 7.6 Egy tiszta elképzelés arról hogy mit szeretnénk csinálni és ez alapján egy tervet készíteni.

- 7.7 Nem lehetetlen határidők szabása, hogy a munka tempója normális legyen és ne legyen a minőség kárára.

- 7.8 A szoftverben használt képek minősége megfelelő legyen és jogtiszták legyen.

- 7.9 Pontos, precíz terv kidolgozása ami mentén haladva a fejlesztés zökkenőmentes haladása biztosítva lesz.

- 7.10 Emberi erőforrás biztositása az állandó tesztelési folyamatokra.
  
## 8. A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása
## 9. Fogalomszótár:
- **MNIST database (Modified National Institute of Standards and Technology database)** - egy nagyméretű, kézzel írt számjegyek adatbázisa, amelyet általában különféle képfeldolgozó rendszerek betanítására használnak. Az adatbázist széles körben használják képzésre és tesztelésre is a gépi tanulás területén.
- *Reszponzív dizájn:* Célja, hogy weboldalunk olyan kialakítással rendelkezzen, mely rugalmasan alkalmazkodik különböző böngészők képernyőjének méretéhez. 
