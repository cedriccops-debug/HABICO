// Vlakke hertekening van het bestaande Pauli-logo (ter validatie — vervang door officiële vector indien beschikbaar).
export function LogoMark({ size = 40, className = '' }) {
  return (
    <svg viewBox="40 30 425 545" width={size * 0.78} height={size} className={className} aria-hidden="true">
      <path d="M45 35 H130 V400 H108 Q45 400 45 337 Z" fill="#8FC3D9" />
      <path d="M150 75 H176 L206 185 H180 Z M220 142 H240 V185 H220 Z M248 70 H272 L294 185 H270 Z" fill="#8FC3D9" />
      <path
        d="M150 190 H352 A110 110 0 0 1 352 410 H270 V570 H150 Z M196 270 H318 A37.5 37.5 0 0 1 318 345 H196 A37.5 37.5 0 0 1 196 270 Z"
        fill="#0E8CB5"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default function Logo({ inverted = false }) {
  return (
    <span className={`logo ${inverted ? 'logo--inv' : ''}`}>
      <LogoMark size={38} />
      <span className="logo-word">
        <span className="logo-name">PAULI</span>
        <span className="logo-sub">BETON</span>
      </span>
    </span>
  )
}
