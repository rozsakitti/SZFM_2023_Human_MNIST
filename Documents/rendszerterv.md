# Rendszerterv

## A rendszer célja

A rendszer alapvető célja, hogy statisztikát készítsen arról, hogy a felhasználók mennyire ismerik fel a különböző kézzel írt számokat.
A bejelentkezett felhasználó dönthet arról, hogy a hagyományos felmérésben vesz részt, vagy kihívásra vágyik, így a játék módban segíti a statisztika készítést.
Rendszer céljai közt szerepel továbbá az is, hogy a felhasználók visszatérjenek később is a weboldalra, ezért egy letisztult, könnyen kezelhető felületet kell összeállítani.
A program alapvető célja, hogy számítógépen keresztül érjük el a webes felületet.

## Projektterv
1. Felhasználói felület kialakítása:
   - létrehozni a megfelelő regisztráció/bejelentkezés felületet
   - elkészíteni a mérés/játék felületeket a megfelelő gombokkal és funkciókkal
     
2. Fájlrendszer implementálása:
   - létrehozni a fájlrendszert, ami megfelelően kezel minden beérkező adatot, amire szükség van
   
3. Adatok kezelése:
   - számon tartani a felhasználó által elért pontokat

4. Hibás és helyes válaszok kezelése:
   - megfelelően eltárolni, hogy a statisztikát el tudjuk készteni a megfelelő adatokból

5. Nehézségi fokozatok kezelése:
   megvalósítani a nehézségi fokozatok beállítását és tesztelését, hogy a felhasználó szint szerint fejlessze a kézírásos felismerési képességeit.
   
### Projekt szerepkörök
| Név       | Szerepkör |
|-------------|-----------|
| Halász Kata | Programozó |
| Rózsa Kitti Evelin | Programozó |
| Tolvaj Péter | Programozó |
| Kovács Dávid  | Programozó |

### Ütemterv

| Feladat | Határidő |
|---------|----------|
| Követelményspecifikáció megírása, tervek előkészítése. | 2023. 10.02. |
| Funkcionális specifikáció, illetve rendszerterv írása. Projekt alapjainak letétele. | 2023. 10.09. |
| Alap felületek megírása, adatbázis létrehozása a felhasználóknak-> regisztrációs/bejelentkező felület megfelelő lekezelése, mérés és játék alapjainak elkészítése. | 2023. 10.16. |
| Human MNIST adatbázis felhasználása a kódban, alap mérés felület elkészítése ezekkel a képekkel, illetve a 3 szint elkészítése a játék felületen.| 2023. 10.30. |
| Projekt demo bemutatása | 2023. 11.06. |
| Statisztika felület véglegesítésé a képekkel, illetve bemutató mérés felület megfelelő kezelése. A játék módok esetleges bővítése, minden nehézségi szint megfelelő beállítása.| 2023. 11.13. |
| Tesztelések megírása a mérés és játék felületekhez egyaránt. | 2023. 11.20. |
| Projekt bemutatása | 2023. 11.27. |


### Mérföldkövek

| Feladat |
|---------|
| Adatok beszerzése |
| A program alapvető kinézetének megléte |
| A mérés és statisztika sikeresen működik |
| Játék része megfelelően működik |
| A program tesztelése |
| A tesztlog kitöltése |
| A program kinézetének dizájnolása |

## Üzleti folyamatok modellje
### Üzleti szereplők:

 **_1.)_ Felhasználók**


 **_2.)_ Kérdési adatbázis szolgáltató (JSON fájl):**


### Üzleti folyamatok:

**_1.)_** Az oldalon található regisztrációs gomb megnyomásával elkerül a regisztrációs felületre.

**_2.)_** A regisztrációs felületen a felhasználónév és jelszó megadásával bekerül az adatbázisba.

**_3.)_** Sikeres regisztrációt követően a bejelentkezés gomb megnyomásával átirányításra kerül a bejelentkezési felületre.

**_4.)_** A bejelentkezési felületen a regisztráció során megadott adatokkal sikeres bejelentkezést hajt végre.

**_5.)_** Bejelentkezést követően lehetőség van két különböző mód arra, hogy elkezdjük a felmérést. Mérés és a játék mód.

**_6.)_** Mérés módban megjelenik 10-15 kérdés, amelyre válaszol a felhasználó. Folyamatos vissza jelzést kap róla, hogy sikerült eltaláni a helyes választ vagy sem.

**_7.)_** Játék módban 3 szint elérhető, 1 perc van mindegyik szinten, viszont egyre több kérdés kerül megjelenítésre. Amint hibázik a felhasználó, akkor a játék véget ér.

**_8.)_** Lehetőség van a válaszokból készített statisztika megnézésére is.


## Követelmények

### Funkcionális követelmények
#### Felhasználói Regisztráció és Bejelentkezés:
- Felhasználói regisztráció: A felhasználóknak meg kell adniük a felhasználónevüket és jelszavukat a regisztráció során.
- Bejelentkezés: A felhasználóknak be kell tudniuk jelentkezni az alkalmazásba a regisztrált felhasználói adataikkal.
- Eredmények tárolása: Az azonosított számokat és az azonosítás időpontját az alkalmazásnak az adatbázisban kell tárolnia.
#### Statisztika Készítése:
- Statisztika létrehozása: Az alkalmazásnak lehetőséget kell biztosítania a felhasználóknak statisztikai adatok készítésére az azonosított számokról, például a leggyakrabban felismert számokról.
- Felhasználói Profilkezelés:
- Felhasználói profil: A felhasználóknak lehetőséget kell biztosítaniuk a saját profiljuk szerkesztésére, például név, e-mail cím és profilkép beállítására.

### Nem funkcionális követelmények
- Teljesítmény: Az alkalmazásnak hatékonyan kell működnie, és gyorsan kell válaszolnia a felhasználói interakciókra. A kézi számok felismerése ne okozzon számottevő várakozási időt.
- Biztonság: Az alkalmazásnak megfelelő biztonsági intézkedéseket kell tartalmaznia az adatok védelme érdekében, például jelszókezelést, hitelesítést és hozzáférési jogosultságokat. Az adatoknak biztonságosan kell tárolódni az adatbázisban.
- Skálázhatóság: Az alkalmazásnak lehetőséget kell nyújtania a bővítésre, és skálázhatónak kell lennie, hogy megbirkózzon a növekvő adatmennyiséggel és felhasználói forgalommal.
- Adatméret és Tárhely: Az alkalmazásnak figyelembe kell vennie a felhasználók által generált adatok méretét és tárhelyigényét. Az adatbázisnak elegendő tárhelyet kell biztosítania az azonosított számok és a felhasználói profilok tárolásához.
- Felhasználói Élmény: Az alkalmazásnak felhasználóbarát és intuitív felhasználói felülettel kell rendelkeznie, hogy a felhasználók könnyen használhassák azt.
- Adatbázis Kapcsolódás: Az alkalmazásnak megbízható adatbáziskapcsolatokat kell biztosítania az adatok lekérdezéséhez és tárolásához. Az adatbáziskapcsolatoknak titkosítottnak kell lenniük adatai védelme érdekében.

### Törvényi előírások, szabványok

1.	Adatvédelem és Adatvédelmi Irányelvek (GDPR):
•	A felhasználók személyes adatainak védelméről és kezeléséről szóló európai rendelet. Biztosítani kell, hogy az adatokat biztonságosan tároljuk és kezeljük.

2.	Szellemi Tulajdonjogok és Tartalomvédelem:
•	Meg kell győződni arról, hogy a kvíz tartalma nem sért semmilyen szerzői jogot vagy más szellemi tulajdont.
•	Nem szabad olyan alkalmazást létrehoznunk, amely bármilyen módon félrevezeti a felhasználókat.
•	Ne próbáljuk meg más személynek vagy alkalmazásnak tettetni magunkat.

3.	Spam és használhatóság:
•	Minimális követelmény az alkalmazások felé, hogy valamilyen alapszintű funkcionalitást és tisztességes felhasználói élményt biztosítsanak.
•	Ne omoljon össze az alkalmazás használat közben.

4.	Kiskorúak Védelme:
•	Fontos, hogy megfelelő intézkedéseket tegyünk annak érdekében, hogy a kvíz ne tartalmazzon olyan anyagokat, amelyek nem megfelelőek vagy károsak lehetnek kiskorúak számára.

5.	Hozzáférési és Használati Korlátozások:
•	Feltehetően szabályozni kell, ki használhatja az alkalmazást, valamint a felhasználókmit tehetnek és nem tehetnek.

6.	Fizetések és Tranzakciók (ha alkalmazható):
•	Ha az alkalmazásban fizetési folyamatok vannak, biztosítani kell, hogy azok biztonságosak és megfelelnek a vonatkozó jogszabályoknak.

## Funkcionális terv

![Flowchart%Diagram](Flowchart%20Diagram.png)

### Felhasználónak:


### Webalkalmazásnak:


## Fizikai környezet

- A rendszer Javascript nyelven fog íródni (természetesen HTML, CSS segítségével)
- A rendszer asztali számítógépekre készül jelenleg
- Használható Windows, Linux és MacOS rendszeren is használható
- Bármely ismert asztali számítógépen is futó böngészőre van szükség (Google Chrome, Firefox...)

## Fejlesztői eszközök:

  - IntelliJ IDEA
  - Visual Studio Code
  - Visual Studio
  - Node.JS
  - Github

A fejlesztés során használt eszközök és technológiák magukban foglalják a Visual Studio Code-ot és a Visual Studio-t a kódszerkesztéshez, a Node.JS-t a JavaScript környezet biztosításához, valamint a GitHub-ot a verziókezeléshez és a csapatmunka támogatásához.


## Adatbázis terv


## Implementációs terv

**1.) Felhasználói interfész kialakítása:**
- Készíteni egy regisztrációs felületet, ahol a felhasználó meg adja az adatait.
- Készíteni egy bejelentkezés felületet, ahol a felhasználó be tud lépni.

**2.) Képek megjelenítése:**
- A képeket az az adabázisból tölti be.
- A képeket dinamikusan jeleníti meg a felhasználói felületen.
  
**3.) Kérdéskezelés:**
- Minden választ letárolunk, ellenőrizzük annak helyességét.
- A válasz helyessége alapján a képhez tartozó statisztikát újra számítjuk.

**4.) Statisztika:**
- A felhasználó válaszainak nyomonkövetése a helyes és helytelen válaszok alapján. 
- A mérés végén megjelennek a helyes és helytelen válaszok száma.

## Tesztterv

Két fajta tesztet fogunk megkülönböztetni:

- Egységteszt:
  - Ezzel szükséges lefedni az üzleti logikát (ezzel biztosítva, hogy a kód az elvárt modon működik).
- Kézi tesztelés:
  - Ide tartozik a frontend tesztelése (megnézve, hogy azok szerepelnek a felületen amit akarunk, és úgy ahogy elvárjuk).
  - Felhasználói élmény figyelése (Ha már a fejlesztő/tesztelő nem találja komfortosnak a felületet használva, akkor a felhasználó végképp nem fogja).
  - Bugok keresése: Próbáljuk a programot nem az elvárt módon használni, így a le nem kezelt hibákat felfedezni.

## Telepítési terv
- Indítsd el a letelepített XAMP szoftvert! 
- Ezen belül pedig az Apache és MySQL szolgáltatásokat a XAMPP vezérlőpulton keresztül.
- Nyisd meg a PHPMyAdmin-t a böngésződben általában: [phpMyAdmin](http://localhost/phpmyadmin). -> itt szerkeszthető a már meglévő adatbázisunk, illetve adhatunk is hozzá újakat, ha szükséges.
- Itt ha még friss telepítés akkot a phpMyAdmin felületén belépve az mnist.sql tartalmát lefuttatva hozzuk létre a helyi gépen a friss és üres adatbázist.
- A test adatképek betöltése az adatbázisba a 'python add_images.py' parancs lefuttatásával.
- Indítsd el a terminált, majd navigálj a projekt mappájába.
- Telepítsd a projekt függőségeit a npm install parancs segítségével.
- Indítsd el az alkalmazást a npm start paranccsal.
- Ezután írd a bongésződbe a következőt: http://localhost:35000/ és már működni is fog a megadott weboldal.

## Karbantartási terv
#### Adatbázis karbantartása:
- Az adatbázisunkat bizonyos időközönként ellenőrizni kell, hogy meggyőződjünk a megfelelő működésről. Különösen azért fontos erre ügyelni, hogy az újonnan beregisztráló felhasználóknak, valamint a már bejelentkezett felhasználóknak is ugyanúgy működjön kellően nagy adatbázis esetén is. Figyelnünk kell arra, hogy a rendszerünk megfelelő teljesítménnyel szolgál-e kis mennyiségű, illetve nagy mennyiségű adatbázis esetén is.
  
- Amennyiben az adatbázisban hiba merül fel, el kell végezni a webszerver ideiglenes leállítását. Ezt követően értesíteni kell a felhasználókat a leállásról. Az adatbázis hiba kijavítása után szükséges ellenőrizni, hogy a webszerver megfelelően felismeri-e az adatbázist, és képes-e azt megfelelően kezelni.
  
- Ezek mellett pedig a képekkel teli MNIST adatbázis megfelelő használatát is folyamatosan biztosítanunk kell a felhasználóinknak.

#### Weboldal karbantartása: 
- Az alkalmazást lehetőség szerint felhasználói vagy megrendelői igények alapján lehet bővíteni. Ez magában foglalhatja új elemek fejlesztését, vagy meglévő elemek viselkedésének módosítását a felhasználói visszajelzések alapján. Ezeknek az igényeknek folyamatosan eleget kell tennünk, ha biztosítani szeretnénk a felhasználóink maxiális elégedettségét.
  
- A weboldal bővítése vagy hibajavítása esetén elegendő a frissebb állományokkal felülírni az eredeti állományokat.
- Komplexebb vagy kompatibilitást érintő módosítások esetén javasolt a szolgáltatás ideiglenes (pár perc) szüneteltetése. Ebben az esetben nem feltétlenül szükséges a felhasználókat értesíteni a szüneteltetésről.

## Architektúra
Az alkalmazás egy háromrétegű architektúrával rendelkezik, amely magában foglalja a következő rétegeket:

- Prezentációs Réteg
A felhasználói felület és a felhasználói interakciók kezelése.
Felhasználói regisztráció, bejelentkezés, képek betöltése és statisztika megtekintése.
- Logikai Réteg
A gépi tanulási modell használata a kézi számok felismerésére.
Az adatbázis kezelése, beleértve az azonosított számok és a felhasználói profilok tárolását.
- Adatelérési Réteg
Az adatbázisrendszerrel való kommunikáció és adatbázis műveletek végrehajtása.
Adatbázis kapcsolatok, lekérdezések és adatmanipuláció.

## Komponensek
Az alkalmazás következő komponenseket tartalmazza:

- Felhasználói Felület
Az alkalmazás grafikus felhasználói felülete.
A felhasználók regisztrációja, bejelentkezése, képek betöltése és statisztika megtekintése ezen a felületen történik.
- Adatbázis
Az azonosított számok és a felhasználói profilok tárolására használt adatbázisrendszer.
A felhasználók regisztrációs adatok, kézi számok és statisztikai adatok tárolása ezen a komponensen keresztül történik.

## Felhasználói funkciók

- Regisztráció
A felhasználók regisztrálhatnak egy fiókot az alkalmazásban, megadva a felhasználónevüket és jelszavukat.
A regisztrációs adatokat az adatbázisban tárolják el, biztonságos jelszókezeléssel.
- Bejelentkezés
A felhasználók bejelentkezhetnek az alkalmazásba a felhasználónevük és jelszavuk megadásával.
A felhasználók hozzáférhetnek a saját profiljukhoz és az alkalmazás funkcióihoz.
- Statisztika Készítése
Az alkalmazás egy statisztikai adatot készít az azonosított számok eloszlásáról és egyéb releváns információkról.
A statisztikai adatokat grafikonokon jeleníti meg a felhasználók számára.
