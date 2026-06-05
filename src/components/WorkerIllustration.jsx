import React from 'react'

/* ── Shared face / body parts ───────────────────────────────────────────── */
const Skin   = '#FDBCB4'
const SkinD  = '#F4A078'
const Hair   = '#4A2C0A'

const Face = () => (
  <>
    {/* Ears */}
    <ellipse cx="146" cy="198" rx="10" ry="13" fill={SkinD}/>
    <ellipse cx="254" cy="198" rx="10" ry="13" fill={SkinD}/>
    {/* Head */}
    <ellipse cx="200" cy="196" rx="54" ry="58" fill={Skin}/>
    {/* Hair peek */}
    <path d="M154,182 Q200,166 246,182 L248,164 Q200,146 152,164 Z" fill={Hair}/>
    {/* Eyes */}
    <ellipse cx="178" cy="191" rx="9" ry="10" fill="white"/>
    <ellipse cx="222" cy="191" rx="9" ry="10" fill="white"/>
    <circle  cx="180" cy="193" r="5.5"  fill="#1E293B"/>
    <circle  cx="224" cy="193" r="5.5"  fill="#1E293B"/>
    <circle  cx="182" cy="190" r="2"    fill="white"/>
    <circle  cx="226" cy="190" r="2"    fill="white"/>
    {/* Eyebrows */}
    <path d="M169,178 Q178,173 187,178" stroke={Hair} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M213,178 Q222,173 231,178" stroke={Hair} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Nose */}
    <path d="M196,207 Q200,218 204,207" stroke={SkinD} strokeWidth="1.8" fill="none"/>
    {/* Smile */}
    <path d="M184,220 Q200,234 216,220" stroke="#C17B5B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </>
)

/* ── Hats ───────────────────────────────────────────────────────────────── */
const HardHat = ({ c = '#FBBF24' }) => (
  <>
    <path d="M148,180 Q200,128 252,180 L248,192 L152,192 Z" fill={c}/>
    <rect x="140" y="190" width="120" height="14" rx="5" fill={c}/>
    <path d="M164,156 Q200,140 232,156" stroke="rgba(255,255,255,.35)" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="200" cy="162" r="4" fill="rgba(0,0,0,.1)"/>
  </>
)
const OrangeHardHat = () => <HardHat c="#F97316"/>
const BlueHardHat   = () => <HardHat c="#2563EB"/>
const WhiteHardHat  = () => <HardHat c="#F1F5F9"/>
const DarkHardHat   = () => <HardHat c="#374151"/>

const PainterCap = () => (
  <>
    <ellipse cx="200" cy="168" rx="68" ry="36" fill="white"/>
    <rect x="132" y="162" width="136" height="14" rx="5" fill="white"/>
    <path d="M118,176 Q200,185 282,176 L278,193 Q200,195 122,193 Z" fill="white"/>
    <path d="M164,168 Q200,160 232,168" stroke="rgba(0,0,0,.08)" strokeWidth="2" fill="none"/>
  </>
)

const WeldingMask = () => (
  <>
    {/* Override ears/hair with helmet */}
    <rect x="144" y="130" width="112" height="90" rx="10" fill="#1E293B"/>
    <rect x="158" y="148" width="84" height="52" rx="6" fill="#0F172A"/>
    <rect x="162" y="152" width="76" height="44" rx="4" fill="#0D2137"/>
    <path d="M166,158 Q200,155 234,158" stroke="rgba(99,179,237,.3)" strokeWidth="3" fill="none"/>
    <rect x="136" y="148" width="12" height="36" rx="4" fill="#1E293B"/>
    <rect x="252" y="148" width="12" height="36" rx="4" fill="#1E293B"/>
    <rect x="190" y="218" width="20" height="18" rx="5" fill="#374151"/>
  </>
)

/* ── Tools (positioned at right hand: ~x=368, y=407) ────────────────────── */
const Trowel = () => (
  <g transform="translate(360,400) rotate(-25)">
    <rect x="-5" y="-18" width="10" height="42" rx="4" fill="#92400E"/>
    <path d="M-18,-18 L18,-18 L24,14 L0,30 L-24,14 Z" fill="#94A3B8"/>
    <path d="M-13,-18 L13,-18 L18,8" stroke="rgba(255,255,255,.3)" strokeWidth="2" fill="none"/>
  </g>
)

const HandSaw = () => (
  <g transform="translate(350,390) rotate(-20)">
    {/* Handle */}
    <rect x="-8" y="-8" width="16" height="48" rx="6" fill="#92400E"/>
    {/* Blade */}
    <rect x="-8" y="40" width="70" height="12" rx="2" fill="#9CA3AF"/>
    {/* Teeth */}
    {[0,10,20,30,40,50,60].map(i => (
      <path key={i} d={`M${-8+i+5},52 L${-8+i+8},62 L${-8+i+10},52`} fill="#6B7280"/>
    ))}
    <path d="-6,40 L-6,52 L62,52 L62,40" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1.5"/>
  </g>
)

const RoofRoll = () => (
  <g transform="translate(348,395)">
    {/* Roll cylinder */}
    <ellipse cx="0" cy="0" rx="22" ry="30" fill="#475569"/>
    <ellipse cx="0" cy="0" rx="18" ry="26" fill="#334155"/>
    {/* Roll stripes */}
    <line x1="-18" y1="-12" x2="18" y2="-12" stroke="rgba(255,255,255,.2)" strokeWidth="2"/>
    <line x1="-20" y1="0"  x2="20" y2="0"  stroke="rgba(255,255,255,.2)" strokeWidth="2"/>
    <line x1="-18" y1="12" x2="18" y2="12" stroke="rgba(255,255,255,.2)" strokeWidth="2"/>
    {/* End cap */}
    <ellipse cx="0" cy="-30" rx="22" ry="7" fill="#64748B"/>
    <ellipse cx="0" cy="30"  rx="22" ry="7" fill="#1E293B" opacity="0.4"/>
  </g>
)

const Cable = () => (
  <g transform="translate(355,398)">
    {/* Coil of cable - 3 concentric ovals */}
    <ellipse cx="0" cy="0" rx="24" ry="28" fill="none" stroke="#F59E0B" strokeWidth="8"/>
    <ellipse cx="0" cy="0" rx="12" ry="16" fill="none" stroke="#FBBF24" strokeWidth="8"/>
    {/* Cable end */}
    <line x1="24" y1="0" x2="42" y2="-15" stroke="#F59E0B" strokeWidth="7" strokeLinecap="round"/>
    <rect x="40" y="-24" width="12" height="18" rx="3" fill="#1E293B"/>
  </g>
)

const PipeWrench = () => (
  <g transform="translate(352,388) rotate(15)">
    {/* Handle */}
    <rect x="-6" y="10" width="12" height="55" rx="5" fill="#374151"/>
    {/* Jaw fixed */}
    <path d="M-16,-6 L16,-6 L16,14 L-16,14 Z" fill="#4B5563" rx="2"/>
    {/* Jaw movable */}
    <path d="M-14,-22 L14,-22 L16,-6 L-16,-6 Z" fill="#374151"/>
    {/* Teeth */}
    <line x1="-12" y1="-6" x2="12" y2="-6" stroke="rgba(255,255,255,.25)" strokeWidth="2"/>
    <line x1="-12" y1="-14" x2="12" y2="-14" stroke="rgba(255,255,255,.25)" strokeWidth="2"/>
    {/* Pipe stub */}
    <rect x="-10" y="-38" width="20" height="20" rx="10" fill="#B45309"/>
    <rect x="-8"  y="-36" width="16" height="16" rx="8"  fill="#92400E"/>
  </g>
)

const PlasterBoard = () => (
  <g transform="translate(355,350)">
    {/* Board */}
    <rect x="-20" y="-60" width="50" height="120" rx="4" fill="#F8FAFC"/>
    <rect x="-18" y="-58" width="46" height="116" rx="3" fill="#F1F5F9" opacity="0.8"/>
    {/* Board detail lines */}
    <line x1="-14" y1="-40" x2="26" y2="-40" stroke="#CBD5E1" strokeWidth="1.5"/>
    <line x1="-14" y1="-20" x2="26" y2="-20" stroke="#CBD5E1" strokeWidth="1.5"/>
    <line x1="-14" y1="0"   x2="26" y2="0"   stroke="#CBD5E1" strokeWidth="1.5"/>
    <line x1="-14" y1="20"  x2="26" y2="20"  stroke="#CBD5E1" strokeWidth="1.5"/>
    <line x1="-14" y1="40"  x2="26" y2="40"  stroke="#CBD5E1" strokeWidth="1.5"/>
  </g>
)

const PaintRoller = () => (
  <g transform="translate(355,385) rotate(-10)">
    {/* Handle */}
    <rect x="-5" y="15" width="10" height="50" rx="4" fill="#7C3AED" opacity="0.8"/>
    {/* Roller frame */}
    <rect x="-5" y="-5" width="10" height="25" rx="3" fill="#374151"/>
    <rect x="-5" y="-5" width="38" height="8" rx="3" fill="#374151"/>
    {/* Roller cylinder */}
    <rect x="28" y="-20" width="24" height="54" rx="10" fill="#6D28D9"/>
    {/* Paint trail suggestion */}
    <rect x="30" y="-18" width="20" height="50" rx="9" fill="#7C3AED" opacity="0.5"/>
    {/* Cylinder highlight */}
    <path d="M32,-14 L32,30" stroke="rgba(255,255,255,.3)" strokeWidth="3" strokeLinecap="round"/>
  </g>
)

const DiagTablet = () => (
  <g transform="translate(348,390)">
    {/* Tablet body */}
    <rect x="-20" y="-40" width="52" height="68" rx="6" fill="#1E293B"/>
    <rect x="-16" y="-36" width="44" height="56" rx="4" fill="#0F172A"/>
    {/* Screen content */}
    <rect x="-12" y="-32" width="36" height="28" rx="2" fill="#0D2137"/>
    {/* Screen data lines */}
    <line x1="-8" y1="-24" x2="18" y2="-24" stroke="#22D3EE" strokeWidth="2"/>
    <line x1="-8" y1="-16" x2="12" y2="-16" stroke="#60A5FA" strokeWidth="2"/>
    <line x1="-8" y1="-8"  x2="16" y2="-8"  stroke="#34D399" strokeWidth="2"/>
    {/* Button */}
    <circle cx="6" cy="22" r="5" fill="#374151"/>
  </g>
)

const BoltWrench = () => (
  <g transform="translate(350,380) rotate(-30)">
    {/* Handle */}
    <rect x="-7" y="10" width="14" height="60" rx="6" fill="#374151"/>
    {/* Head */}
    <rect x="-18" y="-20" width="36" height="32" rx="5" fill="#4B5563"/>
    {/* Hex socket */}
    <polygon points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7" fill="#1E293B"/>
    <polygon points="0,-9 7,-4 7,4 0,9 -7,4 -7,-4" fill="#374151"/>
    {/* Bolt head in socket */}
    <polygon points="0,-6 5,-3 5,3 0,6 -5,3 -5,-3" fill="#6B7280"/>
  </g>
)

const WeldTorch = () => (
  <g transform="translate(348,385)">
    {/* Torch body */}
    <path d="M-14,40 L-10,-10 L10,-10 L14,40 Q0,48 -14,40 Z" fill="#374151"/>
    <path d="M-10,35 L-8,-8 L8,-8 L10,35 Q0,42 -10,35 Z" fill="#4B5563"/>
    {/* Nozzle */}
    <rect x="-8" y="-30" width="16" height="24" rx="3" fill="#1E293B"/>
    <rect x="-6" y="-28" width="12" height="8" rx="2" fill="#374151"/>
    {/* Flame */}
    <path d="M0,-30 Q8,-46 4,-58 Q16,-48 14,-36 Q18,-50 10,-60 Q22,-44 18,-30" fill="#F59E0B" opacity="0.9"/>
    <path d="M0,-30 Q-4,-44 -2,-56 Q6,-50 4,-40 Q10,-52 6,-60 Q14,-48 10,-36" fill="#FCD34D" opacity="0.8"/>
    <circle cx="4" cy="-30" r="6" fill="#FBBF24" opacity="0.6"/>
    {/* Hose connection */}
    <rect x="-6" y="38" width="12" height="14" rx="3" fill="#1E293B"/>
    {/* Valve knob */}
    <circle cx="-14" cy="5" r="8" fill="#4B5563"/>
    <circle cx="-14" cy="5" r="5" fill="#374151"/>
  </g>
)

const Shovel = () => (
  <g transform="translate(358,370) rotate(10)">
    {/* Handle */}
    <rect x="-5" y="-30" width="10" height="80" rx="4" fill="#92400E"/>
    {/* D-grip at top */}
    <path d="M-5,-30 Q-22,-44 -22,-54 Q-22,-66 -5,-66 L5,-66 Q22,-66 22,-54 Q22,-44 5,-30" fill="none" stroke="#92400E" strokeWidth="8" strokeLinecap="round"/>
    {/* Blade */}
    <path d="M-18,50 L18,50 L22,86 Q0,96 -22,86 Z" fill="#6B7280"/>
    <path d="M-14,52 L14,52 L18,82 Q0,90 -18,82 Z" fill="#94A3B8" opacity="0.5"/>
    {/* Blade hinge */}
    <rect x="-12" y="44" width="24" height="10" rx="3" fill="#4B5563"/>
  </g>
)

/* ── Vest / jacket helpers ───────────────────────────────────────────────── */
const Body = ({ jc, vc, showVest = true }) => (
  <>
    {/* Jacket */}
    <path d="M55,500 L55,295 Q130,268 200,262 Q270,268 345,295 L345,500 Z" fill={jc}/>
    {/* Vest */}
    {showVest && (
      <path d="M150,291 L150,500 L250,500 L250,291 Q226,270 200,265 Q174,270 150,291 Z" fill={vc}/>
    )}
    {/* Reflective stripes */}
    {showVest && (
      <>
        <rect x="157" y="338" width="86" height="11" rx="4" fill="rgba(255,255,255,.55)"/>
        <rect x="157" y="373" width="86" height="11" rx="4" fill="rgba(255,255,255,.55)"/>
      </>
    )}
    {/* Collar / white shirt peek */}
    <path d="M176,268 L200,292 L224,268 L236,258 Q200,248 164,258 Z" fill="white" opacity="0.88"/>
    {/* Neck */}
    <rect x="184" y="244" width="32" height="26" rx="7" fill={Skin}/>
  </>
)

const Arms = ({ jc }) => (
  <>
    {/* Left arm */}
    <path d="M55,295 L24,392 L42,402 L75,318" fill={jc}/>
    <ellipse cx="28" cy="410" rx="17" ry="13" fill={Skin}/>
    {/* Right arm */}
    <path d="M345,295 L376,392 L358,402 L325,318" fill={jc}/>
    <ellipse cx="372" cy="410" rx="17" ry="13" fill={Skin}/>
  </>
)

/* ── 11 trade configs ────────────────────────────────────────────────────── */
const CONFIGS = {
  metser: {
    jc: '#E86518', vc: '#FCD34D', showVest: true,
    hat: <HardHat c="#FBBF24"/>,
    tool: <Trowel/>,
  },
  schrijnwerker: {
    jc: '#166534', vc: null, showVest: false,
    hat: <WhiteHardHat/>,
    tool: <HandSaw/>,
  },
  dakdekker: {
    jc: '#1E293B', vc: '#64748B', showVest: true,
    hat: <WhiteHardHat/>,
    tool: <RoofRoll/>,
  },
  elektricien: {
    jc: '#78350F', vc: '#FBBF24', showVest: true,
    hat: <HardHat c="#FBBF24"/>,
    tool: <Cable/>,
  },
  loodgieter: {
    jc: '#1E40AF', vc: null, showVest: false,
    hat: <BlueHardHat/>,
    tool: <PipeWrench/>,
  },
  plaatser: {
    jc: '#991B1B', vc: '#FBBF24', showVest: true,
    hat: <WhiteHardHat/>,
    tool: <PlasterBoard/>,
  },
  schilder: {
    jc: '#EDE9FE', vc: null, showVest: false,
    hat: <PainterCap/>,
    tool: <PaintRoller/>,
  },
  technieker: {
    jc: '#164E63', vc: '#22D3EE', showVest: true,
    hat: <HardHat c="#0891B2"/>,
    tool: <DiagTablet/>,
  },
  monteur: {
    jc: '#374151', vc: '#F97316', showVest: true,
    hat: <OrangeHardHat/>,
    tool: <BoltWrench/>,
  },
  lasser: {
    jc: '#1C1917', vc: null, showVest: false,
    hat: <WeldingMask/>,
    tool: <WeldTorch/>,
  },
  grondwerker: {
    jc: '#78350F', vc: '#FCD34D', showVest: true,
    hat: <OrangeHardHat/>,
    tool: <Shovel/>,
  },
}

/* ── Main export ─────────────────────────────────────────────────────────── */
export default function WorkerIllustration({ slug, kleur, style = {} }) {
  const cfg = CONFIGS[slug] || CONFIGS.metser

  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
      aria-label={`Worker illustration: ${slug}`}
    >
      {/* Background */}
      <rect width="400" height="500" fill={kleur}/>

      {/* Subtle depth circles */}
      <circle cx="200" cy="290" r="210" fill="rgba(255,255,255,.06)"/>
      <ellipse cx="200" cy="495" rx="120" ry="16" fill="rgba(0,0,0,.12)"/>

      {/* Body, vest, collar */}
      <Body jc={cfg.jc} vc={cfg.vc} showVest={cfg.showVest}/>

      {/* Arms */}
      <Arms jc={cfg.jc}/>

      {/* Face */}
      <Face/>

      {/* Hat (rendered above face) */}
      {cfg.hat}

      {/* Tool */}
      {cfg.tool}
    </svg>
  )
}
