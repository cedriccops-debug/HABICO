// Tabel met druklagen voor WPG + WPR (gewapende welfsels).
// Bron: druklagentabel Pauli Beton — volgens PTV 201 Probeton BENOR, doorbuiging 1/800.
// Waarden in cm druklaag per elementlengte (m). `null` = niet leverbaar voor die lengte/last.

const rows = [
  // lengte,  13/60@350, 13/60@650, 16/60@350, 16/60@650
  [3.3, 0, 0, 0, 0],
  [3.4, 0, 3, 0, 0],
  [3.5, 0, 3, 0, 0],
  [3.6, 0, 3, 0, 0],
  [3.7, 0, 3, 0, 0],
  [3.8, 0, 3, 0, 0],
  [3.9, 0, 3, 0, 0],
  [4.0, 0, 3, 0, 0],
  [4.1, 0, 3, 0, 0],
  [4.2, 3, 4, 0, 0],
  [4.3, 3, 4, 0, 3],
  [4.4, 3, 5, 0, 3],
  [4.5, 3, 5, 0, 3],
  [4.6, 3, 6, 0, 3],
  [4.7, 3, 6, 0, 3],
  [4.8, 3, 6, 0, 3],
  [4.9, 3, 6, 0, 3],
  [5.0, 4, 7, 0, 3],
  [5.1, 4, 7, 3, 4],
  [5.2, 5, 8, 3, 5],
  [5.3, 5, 8, 3, 5],
  [5.4, 5, 9, 3, 6],
  [5.5, 6, 9, 3, 6],
  [5.6, null, null, 3, 7],
  [5.7, null, null, 3, null],
  [5.8, null, null, 3, null],
  [5.9, null, null, 3, null],
  [6.0, null, null, 4, null],
  [6.1, null, null, 4, null],
  [6.2, null, null, 5, null],
  [6.3, null, null, 5, null],
  [6.4, null, null, 5, null],
  [6.5, null, null, 5, null],
]

export const MIN_LENGTH = 0.7

const column = { '13-350': 1, '13-650': 2, '16-350': 3, '16-650': 4 }

/**
 * Vereiste druklaag (cm) voor een gewapend welfsel.
 * Tussenliggende lengtes worden naar boven afgerond op de tabelstap van 10 cm.
 * Geeft `null` als het element voor die lengte/last niet leverbaar is.
 */
export function druklaag(thickness, load, length) {
  if (length < MIN_LENGTH) return null
  const col = column[`${thickness}-${load}`]
  if (!col) return null
  const rounded = Math.ceil(Math.round(length * 100) / 10) / 10
  if (rounded <= rows[0][0]) return 0
  const row = rows.find((r) => r[0] >= rounded - 1e-9)
  return row ? row[col] : null
}

// Volledige tabel voor weergave (0,70 m t.e.m. 3,30 m = 0 cm wordt samengevat in één rij).
export const druklaagTable = rows
