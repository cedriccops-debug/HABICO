// Alle waarden komen uit de technische fiches van Pauli Beton (paulibeton.be/info.htm).
// `profile` stuurt de schematische doorsnede in <SlabSection />.

export const families = {
  gewapend: {
    slug: 'gewapend',
    title: 'Gewapende welfsels',
    short: 'Holle vloerelementen in gewapend beton',
    intro:
      'De klassieke vloer voor woningbouw. Met ruwe onderzijde om te bepleisteren, of glad voor kelders en ruimtes die zichtbaar blijven. Leverbaar voor 350 en 650 kg/m² nuttige last.',
  },
  voorgespannen: {
    slug: 'voorgespannen',
    title: 'Voorgespannen welfsels',
    short: 'Holle vloerelementen in voorgespannen beton',
    intro:
      'Gemaakt in onze fabriek uit 2012. Grotere overspanningen tot 10 m, breedtes van 60 en 120 cm, gladde onderzijde en lengte op maat tot op de centimeter.',
  },
  beton: {
    slug: 'beton',
    title: 'Betonblokken',
    short: 'Holle betonblokken voor dragend metselwerk',
    intro: 'Sterke, maatvaste blokken voor elk type dragend metselwerk. Druksterkte tot 8 N/mm².',
  },
  pauli: {
    slug: 'pauli',
    title: 'Pauli-blokken',
    short: 'Isolerende metselstenen met 60% Liapor',
    intro:
      'Lichte blokken met geëxpandeerde kleikorrels (Liapor). Tot een derde lichter dan een betonblok, met uitstekende thermische en akoestische eigenschappen.',
  },
}

const fiche = (file) => `/docs/${file}.pdf`

export const floors = [
  {
    slug: 'wpg-13-60', code: 'WPG 13/60', name: 'Welfsel Pauli Glad', family: 'gewapend',
    underside: 'Glad', thickness: 13, width: 60, weight: 200, fill: 9, maxLength: 5.5,
    lengthStep: 'per 10 cm', fitPieces: '30 · 40 · 50 cm', fire: '30 min (60 min op bestelling)',
    loads: [350, 650], profile: 'round', pdf: fiche('WPG-13-60'),
  },
  {
    slug: 'wpg-16-60', code: 'WPG 16/60', name: 'Welfsel Pauli Glad', family: 'gewapend',
    underside: 'Glad', thickness: 16, width: 60, weight: 235, fill: 11, maxLength: 6.5,
    lengthStep: 'per 10 cm', fitPieces: '30 · 40 · 50 cm', fire: '30 min (60 min op bestelling)',
    loads: [350, 650], profile: 'oval', pdf: fiche('WPG-16-60'),
  },
  {
    slug: 'wpr-13-60', code: 'WPR 13/60', name: 'Welfsel Pauli Ruw', family: 'gewapend',
    underside: 'Ruw', thickness: 13, width: 60, weight: 200, fill: 9, maxLength: 5.5,
    lengthStep: 'per 10 cm', fitPieces: '30 · 40 · 50 cm', fire: '30 min (60 min op bestelling)',
    loads: [350, 650], profile: 'round', pdf: fiche('WPR-13-60'),
  },
  {
    slug: 'wpr-16-60', code: 'WPR 16/60', name: 'Welfsel Pauli Ruw', family: 'gewapend',
    underside: 'Ruw', thickness: 16, width: 60, weight: 235, fill: 11, maxLength: 6.5,
    lengthStep: 'per 10 cm', fitPieces: '30 · 40 · 50 cm', fire: '30 min (60 min op bestelling)',
    loads: [350, 650], profile: 'oval', pdf: fiche('WPR-16-60'),
  },
  {
    slug: 'vvp-16-60', code: 'VVP 16/60', name: 'Voorgespannen Vloer Pauli', family: 'voorgespannen',
    underside: 'Glad', thickness: 16, width: 60, weight: 272, fill: 12, maxLength: 7,
    lengthStep: 'per cm', fitPieces: '25 · 35 cm', fire: '1 tot 2 uur',
    profile: 'trapezoid', pdf: fiche('VVP-16-60'),
  },
  {
    slug: 'vvp-16-120', code: 'VVP 16/120', name: 'Voorgespannen Vloer Pauli', family: 'voorgespannen',
    underside: 'Glad', thickness: 16, width: 120, weight: 276, fill: 6, maxLength: 7,
    lengthStep: 'per cm', fitPieces: '35 · 60 · 85 cm', fire: '1 tot 2 uur',
    profile: 'trapezoid', pdf: fiche('VVP-16-120'),
  },
  {
    slug: 'vvp-20-60', code: 'VVP 20/60', name: 'Voorgespannen Vloer Pauli', family: 'voorgespannen',
    underside: 'Glad', thickness: 20, width: 60, weight: 318, fill: 16, maxLength: 10,
    lengthStep: 'per cm', fitPieces: '35 cm', fire: '1 tot 2 uur',
    profile: 'egg', pdf: fiche('VVP-20-60'),
  },
  {
    slug: 'vvp-20-120', code: 'VVP 20/120', name: 'Voorgespannen Vloer Pauli', family: 'voorgespannen',
    underside: 'Glad', thickness: 20, width: 120, weight: 324, fill: 8, maxLength: 10,
    lengthStep: 'per cm', fitPieces: '35 · 60 · 85 cm', fire: '1 tot 2 uur',
    profile: 'egg', pdf: fiche('VVP-20-120'),
  },
  {
    slug: 'vvp-26-120', code: 'VVP 26/120', name: 'Voorgespannen Vloer Pauli', family: 'voorgespannen',
    underside: 'Glad', thickness: 26, width: 120, onRequest: true,
    lengthStep: 'per cm', profile: 'egg',
  },
]

// Mortelvoeg 10 mm → modulemaat 400 × 200 mm = 12,5 blokken per m² wand.
export const BLOCKS_PER_M2 = 12.5

export const blocks = [
  { slug: 'betonblok-9',  code: 'Beton 9',  family: 'beton', dims: [390, 90, 190],  fk: 7,   fb: 14,   moisture: 0.31, weight: 11.5, density: 1845, cells: 'slots', pdf: fiche('Betonblok-9') },
  { slug: 'betonblok-14', code: 'Beton 14', family: 'beton', dims: [390, 140, 190], fk: 7.5, fb: 12.5, moisture: 0.31, weight: 16,   density: 1560, cells: 3,       pdf: fiche('Betonblok-14') },
  { slug: 'betonblok-19', code: 'Beton 19', family: 'beton', dims: [390, 190, 190], fk: 8,   fb: 11,   moisture: 0.31, weight: 21,   density: 1530, cells: 3,       pdf: fiche('Betonblok-19') },
  { slug: 'betonblok-29', code: 'Beton 29', family: 'beton', dims: [390, 290, 190], fk: 6,   fb: 8,    moisture: 0.31, weight: 28,   density: 1300, cells: 4,       pdf: fiche('Betonblok-29') },
  { slug: 'pauliblok-9',  code: 'Pauli 9',  family: 'pauli', dims: [390, 90, 190],  fk: 4,   fb: 7,    moisture: 0.46, weight: 8,    density: 1240, cells: 'slots', pdf: fiche('Pauliblok-9') },
  { slug: 'pauliblok-14', code: 'Pauli 14', family: 'pauli', dims: [390, 140, 190], fk: 4,   fb: 6,    moisture: 0.42, weight: 11,   density: 1100, cells: 3,       pdf: fiche('Pauliblok-14') },
  { slug: 'pauliblok-19', code: 'Pauli 19', family: 'pauli', dims: [390, 190, 190], fk: 4,   fb: 6,    moisture: 0.42, weight: 14,   density: 1080, cells: 3,       pdf: fiche('Pauliblok-19') },
]

export const blockCommon = {
  standard: 'NBN EN 771-3 +A1',
  category: 'I',
  tolerance: 'D1',
  fireClass: 'Euroklasse A1',
  frost: 'Niet bloot te stellen — buiten te cementeren',
}

export const allProducts = [...floors, ...blocks]

export const findProduct = (slug) => allProducts.find((p) => p.slug === slug)

export const fmt = (n, digits = 0) =>
  n.toLocaleString('nl-BE', { minimumFractionDigits: digits, maximumFractionDigits: digits })
