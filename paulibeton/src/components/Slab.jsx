import { useId } from 'react'

// Schematische doorsnede van een welfsel, getekend in cm op basis van de technische fiche.
// depth = 0 → vlakke doorsnede met maatlijnen; depth > 0 → schuin geprojecteerd element.

const ANGLE = (32 * Math.PI) / 180
const K = 0.5

function outline({ width: W, thickness: H, family, underside }) {
  if (family === 'gewapend') {
    const top = [`M0 0`, `H${W}`, `V${H * 0.25}`, `L${W - 1.5} ${H}`]
    let bottom = `H1.5`
    if (underside === 'Ruw') {
      const pts = []
      for (let x = W - 1.5, i = 0; x > 1.5; x -= 1.2, i++) pts.push(`L${x} ${H + (i % 2 ? 0.35 : 0)}`)
      bottom = pts.join(' ') + ` L1.5 ${H}`
    }
    return [...top, bottom, `L0 ${H * 0.25}`, 'Z'].join(' ')
  }
  // voorgespannen: profiel met voegsleutel + V-groef onderaan bij 120 cm breedte
  const notch = W >= 120 ? `H${W / 2 + 1} L${W / 2} ${H - 0.9} L${W / 2 - 1} ${H}` : ''
  return [
    `M0 0 H${W} V${H * 0.3}`,
    `L${W - 0.8} ${H * 0.42} V${H * 0.62} L${W} ${H * 0.72}`,
    `V${H - 2} L${W - 0.6} ${H}`,
    notch,
    `H0.6 L0 ${H - 2} V${H * 0.72}`,
    `L0.8 ${H * 0.62} V${H * 0.42} L0 ${H * 0.3} Z`,
  ].join(' ')
}

function cores({ width: W, thickness: H, profile }) {
  if (profile === 'round' || profile === 'oval') {
    const h = H - 3.5
    return [8.8, 19.4, 30, 40.6, 51.2].map((cx) =>
      profile === 'round'
        ? `M${cx - 4.75} ${2 + h / 2} a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0 Z`
        : `M${cx - 4.75} ${6.75} a4.75 4.75 0 0 1 9.5 0 V${2 + h - 4.75} a4.75 4.75 0 0 1 -9.5 0 Z`,
    )
  }
  const xs = []
  for (let x = 12; x < W - 1; x += 12) xs.push(x)
  const y0 = 3
  const y1 = H - 3
  if (profile === 'trapezoid') {
    return xs.map(
      (cx) =>
        `M${cx - 4.5} ${y0 + 1.5} Q${cx - 4.5} ${y0} ${cx - 3} ${y0} H${cx + 3} Q${cx + 4.5} ${y0} ${cx + 4.5} ${y0 + 1.5} ` +
        `L${cx + 3.3} ${y1 - 1.4} Q${cx + 3.1} ${y1} ${cx + 1.7} ${y1} H${cx - 1.7} Q${cx - 3.1} ${y1} ${cx - 3.3} ${y1 - 1.4} Z`,
    )
  }
  return xs.map(
    (cx) =>
      `M${cx - 4.5} ${y0 + 4.5} C${cx - 4.5} ${y0 - 0.6} ${cx + 4.5} ${y0 - 0.6} ${cx + 4.5} ${y0 + 4.5} ` +
      `L${cx + 3.8} ${y1 - 3} C${cx + 3.5} ${y1 + 0.7} ${cx - 3.5} ${y1 + 0.7} ${cx - 3.8} ${y1 - 3} Z`,
  )
}

function strands({ width: W, thickness: H, family }) {
  if (family === 'gewapend') {
    const bottom = [3.4, 14.1, 24.7, 35.3, 45.9, 56.6].map((x) => [x, H - 1.1])
    return [...bottom, [14.1, 1.1], [45.9, 1.1]]
  }
  const pts = []
  for (let x = 6; x < W; x += 12) pts.push([x, H - 3])
  for (let x = 18; x < W; x += 24) pts.push([x, 2.6])
  return pts
}

function Section({ p, gid, x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={outline(p)} fill={`url(#${gid}-face)`} className="slab-edge" fillRule="evenodd" />
      {cores(p).map((d, i) => (
        <g key={i}>
          <path d={d} fill={`url(#${gid}-core)`} />
          <path d={d} fill="none" className="slab-core-edge" />
        </g>
      ))}
      {strands(p).map(([sx, sy], i) => (
        <circle key={i} cx={sx} cy={sy} r={0.42} className="slab-strand" />
      ))}
    </g>
  )
}

function Extruded({ p, gid, depth, x = 0, y = 0 }) {
  const W = p.width
  const H = p.thickness
  const dx = depth * K * Math.cos(ANGLE)
  const dy = -depth * K * Math.sin(ANGLE)
  const top = `M0 0 L${dx} ${dy} L${W + dx} ${dy} L${W} 0 Z`
  const side = `M${W} 0 L${W + dx} ${dy} L${W + dx} ${H + dy} L${W} ${H} Z`
  // voegprofiel als lijnen op het zijvlak
  const keyY = p.family === 'gewapend' ? [H * 0.25] : [H * 0.3, H * 0.72]
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={side} fill={`url(#${gid}-side)`} className="slab-edge" />
      {keyY.map((ky, i) => (
        <line key={i} x1={W} y1={ky} x2={W + dx} y2={ky + dy} className="slab-key" />
      ))}
      <path d={top} fill={`url(#${gid}-top)`} className="slab-edge" />
      <Section p={p} gid={gid} />
    </g>
  )
}

function Defs({ gid }) {
  return (
    <defs>
      <linearGradient id={`${gid}-face`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--slab-face-1)" />
        <stop offset="1" stopColor="var(--slab-face-2)" />
      </linearGradient>
      <linearGradient id={`${gid}-top`} x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="var(--slab-top-1)" />
        <stop offset="1" stopColor="var(--slab-top-2)" />
      </linearGradient>
      <linearGradient id={`${gid}-side`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="var(--slab-side-1)" />
        <stop offset="1" stopColor="var(--slab-side-2)" />
      </linearGradient>
      <radialGradient id={`${gid}-core`} cx="0.62" cy="0.7" r="0.85">
        <stop offset="0" stopColor="var(--slab-core-1)" />
        <stop offset="1" stopColor="var(--slab-core-2)" />
      </radialGradient>
    </defs>
  )
}

function Dim({ x1, y1, x2, y2, label, fs, offset = 0, vertical }) {
  const t = fs * 0.35
  return (
    <g className="dim">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {vertical ? (
        <>
          <line x1={x1 - t} y1={y1} x2={x1 + t} y2={y1} />
          <line x1={x2 - t} y1={y2} x2={x2 + t} y2={y2} />
          <text x={x1 - fs * 0.55 + offset} y={(y1 + y2) / 2} fontSize={fs} textAnchor="end" dominantBaseline="middle">
            {label}
          </text>
        </>
      ) : (
        <>
          <line x1={x1} y1={y1 - t} x2={x1} y2={y1 + t} />
          <line x1={x2} y1={y2 - t} x2={x2} y2={y2 + t} />
          <text x={(x1 + x2) / 2} y={y1 + fs * 1.25 + offset} fontSize={fs} textAnchor="middle">
            {label}
          </text>
        </>
      )}
    </g>
  )
}

export default function Slab({ product, depth = 0, dims = true, className = '', title }) {
  const gid = useId().replace(/:/g, '')
  const W = product.width
  const H = product.thickness
  const fs = Math.max(2.8, W * 0.042)
  const dx = depth * K * Math.cos(ANGLE)
  const dy = -depth * K * Math.sin(ANGLE)
  const padL = dims ? fs * 3.2 : 2
  const padB = dims ? fs * 2.6 : 2
  const vb = [-padL, dy - 2, W + dx + padL * 0.4 + 2, H - dy + padB + 2]

  return (
    <svg
      viewBox={vb.join(' ')}
      className={`slab-svg ${className}`}
      role="img"
      aria-label={title || `Schematische doorsnede ${product.code}: ${W} cm breed, ${H} cm dik`}
      style={{ '--sw': `${Math.max(0.12, W * 0.0028)}px` }}
    >
      <Defs gid={gid} />
      {depth > 0 ? <Extruded p={product} gid={gid} depth={depth} /> : <Section p={product} gid={gid} />}
      {dims && (
        <>
          <Dim x1={0} y1={H + fs * 0.7} x2={W} y2={H + fs * 0.7} label={W} fs={fs} />
          <Dim x1={-fs * 0.7} y1={0} x2={-fs * 0.7} y2={H} label={H} fs={fs} vertical />
        </>
      )}
    </svg>
  )
}

// Hero: stapel voorgespannen elementen zoals op ons stockterrein.
export function SlabStack({ product, depth = 420, count = 3 }) {
  const gid = useId().replace(/:/g, '')
  const W = product.width
  const H = product.thickness
  const gap = 4
  const dx = depth * K * Math.cos(ANGLE)
  const dy = -depth * K * Math.sin(ANGLE)
  const stackH = count * H + (count - 1) * gap
  const fs = 5.2
  // houten latten tussen de elementen, zichtbaar waar ze aan de zijkant uitsteken
  const batten = (f, y) => {
    const ox = W - 2 + dx * f
    const oy = y + dy * f
    const bdx = 8 * K * Math.cos(ANGLE)
    const bdy = -8 * K * Math.sin(ANGLE)
    return (
      <g key={f}>
        <path
          d={`M${ox + 8} ${oy} L${ox + 8 + bdx} ${oy + bdy} V${oy + bdy + gap} L${ox + 8} ${oy + gap} Z`}
          className="batten-side"
        />
        <rect x={ox} y={oy} width={8} height={gap} className="batten-front" />
      </g>
    )
  }
  const slabs = []
  for (let i = count - 1; i >= 0; i--) {
    const y = i * (H + gap)
    slabs.push(
      <g key={i} className="stack-slab" style={{ animationDelay: `${(count - 1 - i) * 140}ms` }}>
        {i < count - 1 && [0.1, 0.5, 0.88].map((f) => batten(f, y + H))}
        <Extruded p={product} gid={gid} depth={depth} y={y} />
      </g>,
    )
  }
  return (
    <svg
      viewBox={`-30 ${dy - 26} ${W + dx + 52} ${stackH - dy + 52}`}
      className="slab-svg slab-stack"
      role="img"
      aria-label={`Stapel voorgespannen welfsels ${product.code}`}
      style={{ '--sw': '0.32px' }}
    >
      <Defs gid={gid} />
      {slabs}
      <g className="dim dim-hero">
        <Dim x1={0} y1={stackH + 6} x2={W} y2={stackH + 6} label={`${W} cm`} fs={fs} />
        <Dim x1={-7} y1={0} x2={-7} y2={H} label={H} fs={fs} vertical />
        <line x1={dx * 0.04 - 4} y1={dy * 0.04 - 10} x2={dx - 4} y2={dy - 10} />
        <text
          x={dx * 0.5 - 8}
          y={dy * 0.5 - 14}
          fontSize={fs}
          textAnchor="middle"
          transform={`rotate(${(-ANGLE * 180) / Math.PI} ${dx * 0.5 - 8} ${dy * 0.5 - 14})`}
        >
          lengte op maat · tot 10 m
        </text>
      </g>
    </svg>
  )
}
