import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blocks, BLOCKS_PER_M2, fmt } from '../data/products'

export default function BlockCalculator() {
  const [mode, setMode] = useState('dims')
  const [wallLength, setWallLength] = useState('12')
  const [wallHeight, setWallHeight] = useState('2,7')
  const [area, setArea] = useState('30')
  const [slug, setSlug] = useState('pauliblok-14')
  const [waste, setWaste] = useState(5)

  const num = (v) => Math.max(0, Number(String(v).replace(',', '.')) || 0)
  const block = blocks.find((b) => b.slug === slug)
  const m2 = mode === 'dims' ? num(wallLength) * num(wallHeight) : num(area)

  const r = useMemo(() => {
    const count = Math.ceil(m2 * BLOCKS_PER_M2 * (1 + waste / 100))
    const weight = count * block.weight
    const counterpart = blocks.find((b) => b.family !== block.family && b.dims[1] === block.dims[1])
    const diff = counterpart ? (counterpart.weight - block.weight) * count : 0
    return { count, weight, perM2: block.weight * BLOCKS_PER_M2, counterpart, diff }
  }, [m2, waste, block])

  return (
    <div className="tool tool--light">
      <div className="tool-inputs">
        <div className="seg seg--small" role="tablist">
          <button type="button" className={mode === 'dims' ? 'is-on' : ''} onClick={() => setMode('dims')}>
            Lengte × hoogte
          </button>
          <button type="button" className={mode === 'area' ? 'is-on' : ''} onClick={() => setMode('area')}>
            Oppervlakte
          </button>
        </div>
        {mode === 'dims' ? (
          <div className="field-row">
            <label className="field">
              <span className="field-label">Lengte muur (m)</span>
              <input type="text" inputMode="decimal" value={wallLength} onChange={(e) => setWallLength(e.target.value)} />
            </label>
            <label className="field">
              <span className="field-label">Hoogte (m)</span>
              <input type="text" inputMode="decimal" value={wallHeight} onChange={(e) => setWallHeight(e.target.value)} />
            </label>
          </div>
        ) : (
          <label className="field">
            <span className="field-label">Wandoppervlakte (m²)</span>
            <input type="text" inputMode="decimal" value={area} onChange={(e) => setArea(e.target.value)} />
          </label>
        )}
        <label className="field">
          <span className="field-label">Bloktype</span>
          <select value={slug} onChange={(e) => setSlug(e.target.value)}>
            <optgroup label="Pauli-blokken (Liapor)">
              {blocks.filter((b) => b.family === 'pauli').map((b) => (
                <option key={b.slug} value={b.slug}>{b.code} — {b.dims.join(' × ')} mm</option>
              ))}
            </optgroup>
            <optgroup label="Betonblokken">
              {blocks.filter((b) => b.family === 'beton').map((b) => (
                <option key={b.slug} value={b.slug}>{b.code} — {b.dims.join(' × ')} mm</option>
              ))}
            </optgroup>
          </select>
        </label>
        <label className="field">
          <span className="field-label">
            Snijverlies <span className="field-hint">{waste}%</span>
          </span>
          <input type="range" min="0" max="15" step="1" value={waste} onChange={(e) => setWaste(Number(e.target.value))} />
        </label>
        <p className="tool-disclaimer">
          Berekend op modulemaat 400 × 200 mm (blok + voeg van 10 mm) = {fmt(BLOCKS_PER_M2, 1)} blokken per m². Openingen
          voor ramen en deuren trekt u af van de oppervlakte.
        </p>
      </div>

      <div className="tool-results calc-results" aria-live="polite">
        <div className="calc-big">
          <span className="calc-num">{fmt(r.count)}</span>
          <span className="calc-unit">blokken {block.code}</span>
          <span className="calc-sub">voor {fmt(m2, 1)} m² wand</span>
        </div>
        <dl className="calc-stats">
          <div>
            <dt>Totaal gewicht</dt>
            <dd>{fmt(r.weight / 1000, 1)} ton</dd>
          </div>
          <div>
            <dt>Wandgewicht (blokken)</dt>
            <dd>{fmt(r.perM2)} kg/m²</dd>
          </div>
        </dl>
        {r.counterpart && block.family === 'pauli' && r.diff > 0 && (
          <p className="calc-compare">
            <strong>{fmt(r.diff / 1000, 1)} ton lichter</strong> dan dezelfde muur in {r.counterpart.code}. Minder te
            heffen op de werf, minder last op de fundering.
          </p>
        )}
        {r.counterpart && block.family === 'beton' && (
          <p className="calc-compare">
            Isoleren én lichter bouwen? Met {r.counterpart.code} weegt deze muur{' '}
            <strong>{fmt(-r.diff / 1000, 1)} ton minder</strong>.
          </p>
        )}
        <Link to={`/offerte?product=${block.slug}&aantal=${r.count}`} className="btn btn-primary">
          Offerte voor {fmt(r.count)} blokken →
        </Link>
      </div>
    </div>
  )
}
