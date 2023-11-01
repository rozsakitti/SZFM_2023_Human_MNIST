# Rendszerterv

## A rendszer célja

A rendszer alapvető célja, hogy statisztikát készítsen arról, hogy a felhasználók mennyire ismerik fel a különböző kézzel írt számokat.
A bejelentkezett felhasználó dönthet arról, hogy a hagyományos felmérésben vesz részt, vagy kihívásra vágyik, így a játék módban segíti a statisztika készítést.
Rendszer céljai közt szerepel továbbá az is, hogy a felhasználók visszatérjenek később is a weboldalra, ezért egy letisztult, könnyen kezelhető felületet kell összeállítani.
A program alapvető célja, hogy számítógépen keresztül érjük el a webes felületet.

## Projektterv



### Projekt szerepkörök
| Név       | Szerepkör |
|-------------|-----------|
| Halász Kata | Programozó |
| Rózsa Kitti | Programozó |
| Tolvaj Péter | Programozó |
| Kovács Dávid  | Programozó |

### Ütemterv

| Feladat | Határidő |
|---------|----------|
| - | 2023. x |
| - | 2023. x |
| - | 2023. x |
| - | 2023. x |
| - | 2023. x |

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


### Nem funkcionális követelmények


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


### Felhasználónak:


### Webalkalmazásnak:


## Fizikai környezet

- A rendszer Javascript nyelven fog íródni (természetesen HTML, CSS segítségével)
- A rendszer asztali számítógépekre készül jelenleg
- Használható Windows, Linux és MacOS rendszeren is használható
- Bármely ismert asztali számítógépen is futó böngészőre van szükség (Google Chrome, Firefox...)

## Fejlesztői eszközök:

  - Visual Studio Code
  - Visual Studio
  - Node.JS
  - Github

A fejlesztés során használt eszközök és technológiák magukban foglalják a Visual Studio Code-ot és a Visual Studio-t a kódszerkesztéshez, a Node.JS-t a JavaScript környezet biztosításához, valamint a GitHub-ot a verziókezeléshez és a csapatmunka támogatásához.


## Adatbázis terv


## Implementációs terv


## Tesztterv

Két fajta tesztet fogunk megkülönböztetni:

- Egységteszt:
  - Ezzel szükséges lefedni az üzleti logikát (ezzel biztosítva, hogy a kód az elvárt modon működik).
- Kézi tesztelés:
  - Ide tartozik a frontend tesztelése (megnézve, hogy azok szerepelnek a felületen amit akarunk, és úgy ahogy elvárjuk).
  - Felhasználói élmény figyelése (Ha már a fejlesztő/tesztelő nem találja komfortosnak a felületet használva, akkor a felhasználó végképp nem fogja).
  - Bugok keresése: Próbáljuk a programot nem az elvárt módon használni, így a le nem kezelt hibákat felfedezni.

## Telepítési terv


## Karbantartási terv

