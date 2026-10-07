import { useId } from 'react'

// Schuin geprojecteerde holle metselsteen, in mm volgens de technische fiche.
const ANGLE = (32 * Math.PI) / 180
const K = 0.62

function cellRects(cells, L, T) {
  const s = 30
  if (cells === 'slots') {
    const v0 = T / 2 - 9
    const v1 = T / 2 + 9
    return [[40, 185, v0, v1], [205, 350, v0, v1]]
  }
  if (cells === 4) {
    const w = (L - 2 * s - 25) / 2
    const d = (T - 2 * s - 25) / 2
    const out = []
    for (let i = 0; i < 2; i++)
      for (let j = 0; j < 2; j++) out.push([s + i * (w + 25), s + i * (w + 25) + w, s + j * (d + 25), s + j * (d + 25) + d])
    return out
  }
  const w = (L - 2 * s - 2 * 25) / 3
  return [0, 1, 2].map((i) => [s + i * (w + 25), s + i * (w + 25) + w, s, T - s])
}

export default function Block({ block, dims = true, className = '' }) {
  const gid = useId().replace(/:/g, '')
  const [L, T, H] = block.dims
  const c = Math.cos(ANGLE) * K
  const sn = Math.sin(ANGLE) * K
  const P = (u, v, z = 0) => [u + v * c, -v * sn + z]
  const pts = (arr) => arr.map((p) => p.join(' ')).join(' L')
  const dx = T * c
  const dy = -T * sn
  const pauli = block.family === 'pauli'
  const fs = 26

  const top = `M${pts([P(0, 0), P(L, 0), P(L, T), P(0, T)])} Z`
  const side = `M${pts([P(L, 0), P(L, T), P(L, T, H), P(L, 0, H)])} Z`

  return (
    <svg
      viewBox={`${dims ? -90 : -6} ${dy - 10} ${L + dx + (dims ? 140 : 16)} ${H - dy + (dims ? 70 : 20)}`}
      className={`block-svg ${pauli ? 'is-pauli' : ''} ${className}`}
      role="img"
      aria-label={`${block.code}: ${L} × ${T} × ${H} mm`}
    >
      <defs>
        <linearGradient id={`${gid}-f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--blk-face-1)" />
          <stop offset="1" stopColor="var(--blk-face-2)" />
        </linearGradient>
        <linearGradient id={`${gid}-wall`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--blk-wall-1)" />
          <stop offset="1" stopColor="var(--blk-wall-2)" />
        </linearGradient>
        <pattern id={`${gid}-grain`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="5" r="2.2" className="grain" />
          <circle cx="15" cy="3" r="1.4" className="grain" />
          <circle cx="11" cy="13" r="2.6" className="grain" />
          <circle cx="19" cy="18" r="1.8" className="grain" />
          <circle cx="3" cy="17" r="1.3" className="grain" />
        </pattern>
      </defs>

      <path d={side} className="blk-side" />
      <path d={top} className="blk-top" />
      {cellRects(block.cells, L, T).map(([u0, u1, v0, v1], i) => {
        const hole = `M${pts([P(u0, v0), P(u1, v0), P(u1, v1), P(u0, v1)])} Z`
        const wallDepth = Math.min((v1 - v0) * sn * 0.85, 40)
        const wall = `M${pts([P(u0, v1), P(u1, v1), [P(u1, v1)[0], P(u1, v1)[1] + wallDepth], [P(u0, v1)[0], P(u0, v1)[1] + wallDepth]])} Z`
        return (
          <g key={i}>
            <path d={hole} className="blk-hole" />
            <path d={wall} fill={`url(#${gid}-wall)`} />
          </g>
        )
      })}
      <rect x="0" y="0" width={L} height={H} fill={`url(#${gid}-f)`} className="blk-front" />
      {pauli && (
        <>
          <rect x="0" y="0" width={L} height={H} fill={`url(#${gid}-grain)`} />
          <path d={side} fill={`url(#${gid}-grain)`} opacity="0.7" />
        </>
      )}

      {dims && (
        <g className="dim">
          <line x1="0" y1={H + 22} x2={L} y2={H + 22} />
          <line x1="0" y1={H + 14} x2="0" y2={H + 30} />
          <line x1={L} y1={H + 14} x2={L} y2={H + 30} />
          <text x={L / 2} y={H + 22 + fs * 1.15} fontSize={fs} textAnchor="middle">{L}</text>
          <line x1="-22" y1="0" x2="-22" y2={H} />
          <line x1="-30" y1="0" x2="-14" y2="0" />
          <line x1="-30" y1={H} x2="-14" y2={H} />
          <text x="-34" y={H / 2} fontSize={fs} textAnchor="end" dominantBaseline="middle">{H}</text>
          <line x1={L + 22} y1={H} x2={L + 22 + dx} y2={H + dy} />
          <text
            x={L + 34 + dx / 2}
            y={H + dy / 2 + fs * 0.9}
            fontSize={fs}
            transform={`rotate(${(-ANGLE * 180) / Math.PI} ${L + 34 + dx / 2} ${H + dy / 2 + fs * 0.9})`}
          >
            {T}
          </text>
        </g>
      )}
    </svg>
  )
}
