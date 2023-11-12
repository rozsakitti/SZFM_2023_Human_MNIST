# Funkcionális Specifikáció 
## 1. Jelenlegi helyzet leírása
A kézírás értelmezése a mai világban is kihívást jelent az emberek számára, azonban saját kézírásunk elkerülhetetlen, hiszen ezzel tudjuk igazolni személyünk azonosságát. 
Az MNIST adathalmaz egy jelentős méretű gyűjtemény kézzel írt számjegyekről, amely általában különböző képfeldolgozó rendszerek tanítására szolgál. Az adatbázist széles körben használják képzésre és tesztelésre is a gépi tanulás területén.

Az írásos dokumentumok napjainkban általában már nem kézzel készülnek, mivel az elektronikus írás egyre inkább elterjed, emellett környezetbarátabb és hatékonyabb is. Azonban léteznek olyan szakterületek, ahol elengedhetetlen a kézírás alkalmazása. 
Az ilyen kézzel írt információk feldolgozásakor gyakran előfordulnak értelmezési nehézségek, melyeket nem egyszerű tisztázni. Ilyen helyzetekben hiányzik egy olyan eszköz, ami segítené az olvasót az értelmezésben. 

## 2. Vágyálomrendszer leírása
Célunk egy olyan rendszer létrehozása, mely segít a felhasználónak gyakorlottan felismerni a különböző írásos számokat. 
Ez a weboldal megfelelő lesz számunkra is egy statisztikát készíteni, hogy jelenleg az emberek milyen arányban gyakorlottak ezen számok ismerésében, valamint egy motiváló játékot is elérhetnek majd a felületen, ahol időre tudnak gyakorolni és tanulni, hogy minél jobbak legyenek a képességeik az írásos számok ismeretében.

## 3. Jelenlegi üzleti folyamatok modellje
Jelenleg nincs olyan webes felületünk, ami olyan megfelelő dizájnnal és könnyen értelmezhető felülettel rendelkezne, aminek segítségével párhuzamosan készül statisztika, illetve játékos tanulás.
Az adatok elemzése során felmerülő értelmezési problémákat manuálisan kellene tisztázni,ha nem készülne el a mi igényeinknek megfelelő webes felület.

## 4. Igényelt üzleti folyamatok leírása
1. A felhasználónak regisztrációs lehetősége.
2. Regisztráció után átkerülnek a következő oldalra, ahol eltudják dönteni, hogy egy statisztikai mrésen vegyenek részt vagy egy játékot játszanak.
3. Bármelyik sorrendben haladhatnak, akár a játékkal kezdeni, ezt ismételten akár többször is megcsinálni vagy a mérésen részt venni.
4. A mérésen 10-15 random képről eldönteni, hogy melyik számjegyet ábrázolja, egy számbillenytűzet segítségével.
5. A játék esetében pontszerzésre lesz lehetőség, bizonys időhatáron belül, ami szerint rangsoroljuk a játékosokat.
6. Mind a mérés, mind a játék eredményeit, statisztikáját meg lehet majd a későbbiekben tekinteni.


## 5. Követelménylista
|    ID   |            Név             |    Kifejtés    |
|---------|:----------------------------------:|--------|
| **K01** |   Regisztráció   |A felhasználók számára biztosított kell legyen a könnyű regisztrálási lehetőség. |
| **K02** |    Bejelentkezés   |A regisztrált felhasználók számára biztosítani kell az egyszerű belépési lehetőséget az oldalra. |
| **K03** |          Jelszavak titkosítása         |A felhasználók jelszavait a megfelelő titkosítás mellett kell tárolni.  |
| **K04** |          Megfelelően látható képek          |Minden felhasználó olyan képet kapjon az adatbázisból, ami egyértelműen jól látható.  |
| **K05** |          Pontrendszer          |A felhasználók verseny szerűen gyűjtik a pontokat és így rangsoroljuk őket.  |
| **K06** |          Statisztikai felület          |A felhasználóknak lehetőségük van megtekinteni a statisztikai táblát.  |

## 6. A rendszer célja és nem célja

### A rendszer céljai:
- Olyan felület, amely könnyen kezelhető
- Azonnali válasz feldolgozás, statisztika készítése
- Felmérje, hogy az emberek hány %-a tudja megmondani helyesen a nehezen felismerhető képeket

## 7. Használati esetek

## 8. Képernyőtervek

## 9. Funkció - követelmény megfeleltetés
### Funkciókövetelmények megfeleltetés:
- **Felhasználói fiókok kezelése:** Regisztráció, bejelentkezés, válaszok elmentése
- **Platformfüggetlen működés:** A rendszer több féle operációs rendszeren is megfelelően működik. (pl.: windows, linux)

### Nem Funkció-követelmény megfeleltetés:
- Letisztult, minimalista felület
- Egyszerűen használható kezelőfelület
- Felhasználók adatainak biztonságos tárolása
- 
## 10. Áttekintés

- Az oldal **regisztrációval** fog kezdődni.
	 - Regisztrációnál a felhasználónak meg kell majd adnia a továbbiakat:
        - Nevét
        - Életkorát
        - Nemét
        - Regisztráció után szükséges bejelentkezni
	- Amint kész vannak a bejelentkezéssel lehetőségük van vagy egy statisztikai mérésen részt venni, vagy akár egy játék segítségével vethetik össze másokkal a gyorsaságuk és ügyességük.

- **Statistzika mérés** lehetősége
	 - Statisztikai mérés esetében 10-15 random képet fognak kapni.
   - A felhasználónak az oldalon megjelenő számbillentyűkre kattintva meg kell adnia, hogy szerinte melyik számot látja a képen.
   - A mérés eredményét a későbbiekben meg lehet tekinteni.
   - A mérést bármennyiszer újra lehet csinálni.
 

- **Játék** lehetősége
	 - Játéknál kapnak 20 random képet.
   - A felhasználónak az oldalon megjelenő számbillentyűkre kattintva meg kell adnia, hogy szerinte melyik számot látja a képen.
   - 20 random kép megjelenítése után a felhasználó megkapja az eredményét.
   - A játékot egy fix időn belül kell teljesíteni.
   - A pontjaik és idejük alapján lesznek rangsorolva a játékosok.
   - A rangsort a későbbiekben bármikor vissza lehet nézni.
   - Rossz válasz esetén a játék véget ér.

## 11. Célközönség
Az alkalmazás célközönsége olyan felhasználók, akik szeretnének gyakorolni a kézzel írott számok felismerését. A főbb célcsoportok a következők:

- Diákok: Azok, akik javítani szeretnék a kézírásukat és gyakorolni akarják a számok felismerését.

- Oktatók és Pedagógusok: Azok, akik tanítják a kézírást és szeretnék segíteni tanulóikat a gyakorlásban.

- Hobbikézírók: Azok, akik a kézírást saját érdeklődésből szeretnék fejleszteni és szórakozásnak tekintik a számok felismerését.

## 12. Felhasználói követelmények
### Jogosultságok:
- Megtekintheti a felismerési eredményeket.
- Szerkesztheti a saját profiladatait (felhasználónév, jelszó).
- Jelszóerősség feleljen meg az alul irottaknak

### Jelszóerősség
A jelszavaknak meg kell felelniük a következő követelményeknek:
- Legalább 8 karakter hosszúak.
- Tartalmazzanak legalább egy kisbetűt, egy nagybetűt, egy számot és egy speciális karaktert.
- Ne tartalmazzanak könnyen kitalálható személyes információkat (pl. felhasználónév, születési dátum).


## 13. Fogalomszótár
- **MNIST database (Modified National Institute of Standards and Technology database)** - egy nagyméretű, kézzel írt számjegyek adatbázisa, amelyet általában különféle képfeldolgozó rendszerek betanítására használnak. Az adatbázist széles körben használják képzésre és tesztelésre is a gépi tanulás területén.
- *Reszponzív dizájn:* Célja, hogy weboldalunk olyan kialakítással rendelkezzen, mely rugalmasan alkalmazkodik különböző böngészők képernyőjének méretéhez.
- *Platformfüggetlen:* A rendszer nem csak egy bizonyos operációs rendszeren képes működni, hanem az összes ismert rendszeren.
  
