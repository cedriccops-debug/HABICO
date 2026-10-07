import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { druklaag, MIN_LENGTH } from '../data/druklagen'
import { findProduct, fmt } from '../data/products'
import Slab from './Slab'

const TOPPING_KG_PER_CM = 24 // 1 cm druklaag ≈ 24 kg/m² (beton 2400 kg/m³)

function evaluate(length, load, visible) {
  const g = visible ? 'wpg' : 'wpr'
  const options = []

  for (const t of [13, 16]) {
    const p = findProduct(`${g}-${t}-60`)
    const d = druklaag(t, load, length)
    const ok = d !== null && length <= p.maxLength
    options.push({
      key: p.slug,
      product: p,
      title: p.code,
      subtitle: `${p.name} · gewapend`,
      ok,
      weight: ok ? p.weight + d * TOPPING_KG_PER_CM : null,
      note: ok
        ? d === 0
          ? 'Geen druklaag nodig'
          : `Druklaag ${d} cm vereist`
        : length > p.maxLength
          ? `Max. ${fmt(p.maxLength, 2)} m`
          : `Niet leverbaar voor ${load} kg/m² op deze lengte`,
      detail: ok ? `${p.weight} kg/m² eigen gewicht${d ? ` + ${d} cm druklaag` : ''}` : null,
      quote: `/offerte?product=${p.slug}&lengte=${length}&last=${load}`,
    })
  }

  for (const t of [16, 20]) {
    const p60 = findProduct(`vvp-${t}-60`)
    const p120 = findProduct(`vvp-${t}-120`)
    const ok = length >= MIN_LENGTH && length <= p60.maxLength
    options.push({
      key: p120.slug,
      product: p120,
      title: `VVP ${t}/60 · ${t}/120`,
      subtitle: 'Voorgespannen · gladde onderzijde',
      ok,
      weight: ok ? p60.weight : null,
      note: ok ? 'Geschikt — wapening op maat berekend' : `Max. ${fmt(p60.maxLength)} m`,
      detail: ok ? `${p60.weight}–${p120.weight} kg/m² · lengte per cm` : null,
      quote: `/offerte?product=${p120.slug}&lengte=${length}&last=${load}`,
    })
  }

  const ok = options.filter((o) => o.ok)
  const lightest = ok.length ? ok.reduce((a, b) => (b.weight < a.weight ? b : a)) : null
  if (lightest) lightest.best = true
  return { options: [...ok, ...options.filter((o) => !o.ok)], none: ok.length === 0 }
}

export default function Vloerkiezer() {
  const [length, setLength] = useState(4.6)
  const [text, setText] = useState('4,6')
  const [load, setLoad] = useState(350)
  const [visible, setVisible] = useState(false)

  const result = useMemo(() => evaluate(length, load, visible), [length, load, visible])

  const fromRange = (v) => {
    const n = Number(v)
    setLength(n)
    setText(fmt(n, 1))
  }
  const fromText = (v) => {
    setText(v)
    const n = Number(String(v).replace(',', '.'))
    if (n >= MIN_LENGTH && n <= 12) setLength(Math.round(n * 100) / 100)
  }

  return (
    <div className="tool">
      <div className="tool-inputs">
        <div className="field">
          <label htmlFor="vk-len" className="field-label">
            Elementlengte
            <span className="field-hint">vrije overspanning + oplegging</span>
          </label>
          <div className="len-row">
            <input
              id="vk-len-range"
              type="range"
              min="1"
              max="11"
              step="0.1"
              value={Math.min(11, length)}
              onChange={(e) => fromRange(e.target.value)}
              aria-label="Elementlengte in meter"
            />
            <div className="len-input">
              <input
                id="vk-len"
                type="text"
                inputMode="decimal"
                value={text}
                onChange={(e) => fromText(e.target.value)}
                onBlur={() => setText(fmt(length, Math.round(length * 100) % 10 ? 2 : 1))}
              />
              <span>m</span>
            </div>
          </div>
        </div>

        <fieldset className="field">
          <legend className="field-label">Nuttige last</legend>
          <div className="seg">
            {[
              [350, 'standaard'],
              [650, 'zwaardere belasting'],
            ].map(([v, hint]) => (
              <button key={v} type="button" className={load === v ? 'is-on' : ''} aria-pressed={load === v} onClick={() => setLoad(v)}>
                <strong>{v} kg/m²</strong>
                <span>{hint}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="field">
          <legend className="field-label">Onderzijde</legend>
          <div className="seg">
            <button type="button" className={!visible ? 'is-on' : ''} aria-pressed={!visible} onClick={() => setVisible(false)}>
              <strong>Wordt bepleisterd</strong>
              <span>ruw volstaat</span>
            </button>
            <button type="button" className={visible ? 'is-on' : ''} aria-pressed={visible} onClick={() => setVisible(true)}>
              <strong>Blijft zichtbaar</strong>
              <span>gladde onderzijde</span>
            </button>
          </div>
        </fieldset>

        <p className="tool-disclaimer">
          Indicatief, op basis van onze druklaagtabel volgens PTV 201 (doorbuiging 1/800). De definitieve keuze maken we
          samen op basis van uw plannen.
        </p>
      </div>

      <div className="tool-results" aria-live="polite">
        <div className="tool-results-head">
          <span className="mono">{fmt(length, 2)} m · {load} kg/m²</span>
          <span>{result.options.filter((o) => o.ok).length} van {result.options.length} geschikt</span>
        </div>
        {result.none && (
          <div className="result result--special">
            <strong>Grotere overspanning?</strong>
            <p>
              Boven 10 m denken we graag mee — onder meer met ons voorgespannen element VVP 26/120. Stuur ons uw plannen.
            </p>
            <Link to={`/offerte?product=vvp-26-120&lengte=${length}&last=${load}`} className="btn btn-primary btn-sm">
              Advies aanvragen
            </Link>
          </div>
        )}
        {result.options.map((o) => (
          <div key={o.key} className={`result ${o.ok ? 'is-ok' : 'is-no'} ${o.best ? 'is-best' : ''}`}>
            <div className="result-art">
              <Slab product={o.product} depth={60} dims={false} />
            </div>
            <div className="result-body">
              <div className="result-title">
                <strong>{o.title}</strong>
                {o.best && <span className="tag tag--best">Minste eigen gewicht</span>}
              </div>
              <span className="result-sub">{o.subtitle}</span>
              <span className={`result-note ${o.ok ? '' : 'muted'}`}>
                <span className={`dot ${o.ok ? 'dot--ok' : 'dot--no'}`} aria-hidden="true" />
                {o.note}
              </span>
              {o.detail && <span className="result-detail">{o.detail}</span>}
            </div>
            {o.ok && (
              <div className="result-actions">
                <Link to={`/producten/${o.product.slug}`} className="link-arrow">
                  Fiche
                </Link>
                <Link to={o.quote} className="btn btn-primary btn-sm">
                  Offerte
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
