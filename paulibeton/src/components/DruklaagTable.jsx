import { druklaagTable } from '../data/druklagen'
import { fmt } from '../data/products'

const cell = (v) => (v === null ? <span className="muted">—</span> : v === 0 ? <span className="muted">0</span> : <strong>{v}</strong>)

export default function DruklaagTable({ only }) {
  const cols = [
    { key: 1, t: 13, load: 350 },
    { key: 2, t: 13, load: 650 },
    { key: 3, t: 16, load: 350 },
    { key: 4, t: 16, load: 650 },
  ].filter((c) => !only || c.t === only)

  return (
    <div className="table-scroll">
      <table className="spec-table druk-table">
        <caption>
          Vereiste druklaag (cm) voor WPG + WPR — volgens PTV 201 Probeton BENOR, doorbuiging 1/800
        </caption>
        <thead>
          {!only && (
            <tr>
              <th rowSpan={2}>Lengte welfsel</th>
              <th colSpan={2}>WPG + WPR 13/60</th>
              <th colSpan={2}>WPG + WPR 16/60</th>
            </tr>
          )}
          <tr>
            {only && <th>Lengte welfsel</th>}
            {cols.map((c) => (
              <th key={c.key}>{c.load} kg/m²</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mono">0,70 – 3,30 m</td>
            {cols.map((c) => (
              <td key={c.key}>{cell(0)}</td>
            ))}
          </tr>
          {druklaagTable.slice(1).map((r) => {
            const vals = cols.map((c) => r[c.key])
            if (vals.every((v) => v === null)) return null
            return (
              <tr key={r[0]}>
                <td className="mono">{fmt(r[0], 2)} m</td>
                {cols.map((c) => (
                  <td key={c.key}>{cell(r[c.key])}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
