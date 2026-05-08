# Bevezetés

Az alapalkalmazás létrehozása a következő paranccsal:
`pnpm create vite@latest projekt-neve --template react-ts`

## A projektről

Ez a projekt egy React és TypeScript segítségével épített önéletrajz (CV) weboldal. A cél egy modern, reszponzív és interaktív platform létrehozása a szakmai tapasztalatok, készségek és eredmények bemutatására.

## Miért a React?

A React egy népszerű JavaScript könyvtár felhasználói felületek építéséhez. Lehetővé teszi a fejlesztők számára, hogy újrahasznosítható komponenseket hozzanak létre, hatékonyan kezeljék az alkalmazás állapotát, valamint dinamikus és interaktív webalkalmazásokat építsenek. A React ökoszisztémája és közösségi támogatása kiváló választássá teszi a modern webfejlesztéshez.

## Miért a PNPM?

A PNPM (Performant NPM) egy gyors, lemezterület-takarékos csomagkezelő. Azért esett rá a választás ebben a projektben, mert:

Egyedi, szimbolikus linkeken (symlink) alapuló megközelítést használ, amivel lemezterületet takarít meg és felgyorsítja a telepítéseket.

Konzisztens függőség-feloldást (dependency resolution) biztosít, csökkentve a potenciális problémákat a csapatmunkában.

Kompatibilis az npm-mel és a Yarn-nal, így könnyen integrálható a meglévő munkafolyamatokba.

A React, a TypeScript és a PNPM kombinálásával ez a projekt modern eszközökre támaszkodva biztosít egy kiváló minőségű önéletrajz oldalt.

## UI Keretrendszer: Material UI (MUI)

A professzionális és konzisztens megjelenés elérése érdekében a projekt a Material UI-t használja. Ez a Google Material Design elveit követő, azonnal használható komponensek robusztus készletét kínálja.

### Főbb UI jellemzők

- Reszponzív elrendezés: A MUI Grid és Container rendszereinek használata a "mobile-first" (mobilra optimalizált) dizájn érdekében.

- Témázás (Theming): Egyedi színpaletta a "standard Google-megjelenés" elkerülésére és a professzionális arculathoz való igazodásra.

- Ikonográfia: Integrált Material Ikonok a vizuális támpontokhoz a készségek (skills) és a kapcsolat (contact) szekciókban.

#### Telepítés

A repó klónozása után telepítsd a függőségeket a pnpm segítségével:

` pnpm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto`

Első lépések
Téma beállítása: Csomagold az alkalmazásodat a ThemeProvider-be, hogy engedélyezd az egyedi arculatot.

Betűtípusok importálása: Add hozzá a Roboto betűtípusokat a main.tsx fájlodban:

```typeScript
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

Fejlesztői szerver indítása:

` pnpm dev`
Projektstruktúra

```
- src/components: Újrahasznosítható UI elemek (Navbar, ProjectCards, stb.)
- src/theme: Egyedi MUI téma konfiguráció
- src/assets: Képek és szakmai dokumentumok (CV PDF)
```
