# Pauli Beton — nieuwe website (voorstel)

Commerciële website voor Pauli Beton NV (Hoeselt): welfsels en metselstenen.
Stack: React 19 + Vite + React Router (zelfde stack als de HABICO-site), plain CSS.

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # statische output in dist/
```

## Structuur

- `src/data/products.js`: alle producten met specs uit de technische fiches (één bron voor kaarten, tabellen en productpagina's)
- `src/data/druklagen.js`: druklaagtabel WPG/WPR (PTV 201, doorbuiging 1/800), gebruikt door de vloerkiezer
- `src/data/site.js`: adres, telefoon, e-mail, oprichtingsjaar
- `src/components/Slab.jsx` / `Block.jsx`: technische SVG-tekeningen, gegenereerd uit de productmaten
- `public/docs/`: de technische fiches (PDF) van de huidige site, hernoemd
- `public/img/`: de 5 foto's van de huidige site (450×400 px)

## Te valideren met de klant vóór livegang

1. **Eigendom**: Pauli Beton werd overgenomen door Construct Materials Group (CMG). De site noemt dit één keer (Over ons, tijdlijn "Vandaag"). Moet de formulering anders, of moet CMG-branding erbij?
2. **Oprichtingsjaar**: de huidige site zegt 1954, de CMG-communicatie zegt 1951. De nieuwe site gebruikt 1954.
3. **Certificaten**: de CE- en BENOR-certificaten op de oude site zijn verlopen (2014). Ze worden niet meer gepubliceerd. Vraag de actuele versies op.
4. **Claims om te bevestigen**: levering met eigen kraanwagen, leveringsgebied BE/NL/FR, VVP 26/120 (staat op de oude site, maar er is geen fiche voor), "zelfdragend, geen bekisting nodig".
5. **Logo**: vlak hertekend als SVG op basis van het bestaande logo. Vervang het door de officiële vector als die bestaat.
6. **Wettelijk**: ondernemingsnummer (KBO/btw) in de footer, privacyverklaring en cookiebeleid ontbreken nog.
7. **Formulieren** werken nu via `mailto:`. Voor productie is een formulier-backend nodig (met upload van plannen).
8. **Foto's**: de beschikbare foto's zijn klein (450×400). Een fotoshoot (fabriek, werven, drone) zou het grootste visuele verschil maken.
9. **Taal**: de oude site had een Franstalige versie. Deze versie is enkel Nederlandstalig.
10. **Hosting**: BrowserRouter heeft een rewrite naar `index.html` nodig voor deeplinks, bv. `/producten/vvp-20-120`.
