# 🛠️ Felhasznált Technológiák és Eszközök

Ebben a projektben egy modern, ipari sztenderdeknek megfelelő Full-Stack eszköztárat állítottunk össze. A választott technológiák célja a sebesség, a típusbiztonság és a kiváló fejlesztői élmény (DX).

## Alaptechnológiák

### React 18

A felhasználói felület (UI) motorja. A komponensalapú megközelítés lehetővé teszi, hogy a kódot újrahasznosítható egységekre bontsuk, ami megkönnyíti a karbantartást.

Miért ezt választottuk? Gyors renderelés (Virtual DOM) és hatalmas ökoszisztéma.

### TypeScript

A JavaScript típusos kiterjesztése. Senior szinten a típusbiztonság nem opció, hanem alapkövetelmény.

Előnye: Már a fejlesztés során elkapja a tipikus hibákat (pl. elgépelt változónevek), így stabilabb kódot eredményez.

### Material UI (MUI) v6

A Google Material Design irányelveit követő komponenskönyvtár.

Felhasználás: Ezzel hoztuk létre az elegáns sötét módú felületet, az idővonalat (Timeline) és a reszponzív navigációt.

## ⚙️ Fejlesztői Környezet és Automatizáció

### Vite

A modern webes build-eszköz, amely fénysebességgel fordítja a kódot.

### pnpm (Performant NPM)

Egy hatékony csomagkezelő, amely szimbolikus linkekkel (symlinks) dolgozik.

Miért? Helytakarékos, gyorsabb a telepítés és szigorúbb a függőségek kezelése, ami megakadályozza a "ghost dependency" hibákat.

### Prettier & ESLint

A kód minőségéért és egységes megjelenéséért felelős eszközök.

Cél: Megszünteti a "hogyan formázzunk" vitákat; a kód mindenhol ugyanúgy néz ki, függetlenül attól, ki írta.

## Infrastruktúra és CI/CD

### GitHub Actions

A projekt automatizált "gyártósora". Minden feltöltésnél automatikusan:

Ellenőrzi a TypeScript típusokat.

Lefordítja a projektet (Build).

Publikálja a változtatásokat a GitHub Pages-re.

### MkDocs (Material Theme)

Python alapú statikus dokumentáció generátor.

Szerepe: Lehetővé teszi, hogy a technikai leírást egyszerű Markdown fájlokban tartsuk, miközben a végeredmény egy kereshető, profi dokumentációs oldal.
