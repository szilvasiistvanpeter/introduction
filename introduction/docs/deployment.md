# A CI/CD Folyamat Oktatási Segédlet

Ebben a dokumentumban a portfólió oldal automatizált közzétételét elemezzük. A folyamat célja a manuális hibák kiküszöbölése és a magas kódminőség fenntartása.

## CI.yml részletes elemzése (Sorról sorra)

Nézzük meg a konfigurációs fájlt, amely a GitHub Actions lelkét adja.

### Eseményindítók (Triggers)

`   `YAML
on:
push:
branches: [ main ]

```

Magyarázat: Ez a szakasz definiálja a "mikort". A pipeline akkor indul el, ha valaki közvetlenül a main ágba tölt fel kódot. Senior környezetben ez garantálja, hogy csak a véglegesített, jóváhagyott kód kerülhet ki élesbe.

```

### Jogosultságok (Permissions)

```YAML
permissions:
contents: read
pages: write
id-token: write
```

Magyarázat: Biztonsági okokból szigorúan korlátozzuk az Action jogköreit. Csak olvasni tudja a kódot, de írási joga van a GitHub Pages tárhelyre és az azonosító tokenek kezelésére.

### A környezet beállítása (Jobs & Defaults)

```YAML
jobs:
test-and-build:
runs-on: ubuntu-latest
defaults:
run:
working-directory: introduction
```

Magyarázat: Meghatározzuk, hogy egy friss Ubuntu Linux operációs rendszeren fussanak a parancsok. Mivel a szoftverünk az introduction mappában lakik, minden parancs alapértelmezetten onnan fog indulni.

### A technológiai stack előkészítése

```YAML
steps: - uses: actions/checkout@v4 # Kód letöltése - uses: pnpm/action-setup@v3 # pnpm telepítése - uses: actions/setup-node@v4 # Node.js környezet (v20)
Magyarázat: Itt "behúzzuk" a szükséges szerszámokat. A pnpm használata azért fontos, mert hatékonyabban kezeli a függőségeket (dependencies), mint az npm, ami kritikus a gyors build folyamatoknál.

```

### Minőségellenőrzés (A legfontosabb lépés!)

```YAML
name: Test (Typecheck)
run: pnpm tsc
Magyarázat: Ez a Senior fejlesztői szemlélet kulcsa. Mielőtt bármit építenénk, a TypeScript fordítóval (tsc) ellenőrizzük a típusokat. Ha a hallgató elrontott egy interfészt, a folyamat itt azonnal megáll, és nem engedi a hibás kódot publikálni.

```

### Az alkalmazás és a dokumentáció gyártása

```YAML
name: Build React App
run: pnpm build - name: Build Documentation
run: mkdocs build --site-dir dist/docs
Magyarázat: Először a React appot fordítjuk le statikus fájlokká a dist mappába. Ezután az MkDocs következik, amely a Markdown leírásokat HTML fájlokká alakítja, és beilleszti azokat a weboldal docs alkönyvtárába.

```

### A GitHub Pages specifikus trükk

```YAML
name: Create 404 page for SPA
run: cp dist/index.html dist/404.html
Magyarázat: Mivel a GitHub Pages nem szerveroldali technológia, a /about jellegű útvonalakat nem ismerné fel. Ezzel a másolással becsapjuk a rendszert: bármilyen ismeretlen útvonalnál a React alkalmazás töltődik be, ami aztán kliensoldalon tudja, hová kell navigálni.
```

## 📖 Összegzés a hallgatóknak

Ez a folyamat (Pipeline) biztosítja, hogy:

A kód mindig tesztelt: Nincs típus-hiba az éles oldalon.

A dokumentáció mindig friss: Nincs kódváltoztatás leírás nélkül.

Az URL-ek tiszták: Nincs felesleges mappa-elérés a domainben.

Ez a professzionális hozzáállás teszi lehetővé, hogy komplex rendszereket (mint a Siemens vagy a Deutsche Telekom projektjei) biztonságosan kezeljünk.
