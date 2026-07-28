import { useParams, Link } from 'react-router-dom'
import { profielen } from '../data/profielen'

const HABICO_STATS = [
  { getal: '17+',  label: 'Jaar actief' },
  { getal: '500+', label: 'Plaatsingen' },
  { getal: '8',    label: 'Landen' },
  { getal: '100%', label: 'Limosa & A1 geregeld' },
]

const getVoordelen = (_pc) => [
  { icon: '⚡', titel: 'Snel inzetbaar',             tekst: 'Binnen 1 tot 3 weken staat uw ploeg op de werf — volledig klaar voor de opdracht.' },
  { icon: '🗣️', titel: 'Taalvaardig',               tekst: 'Minimaal één persoon per ploeg spreekt Nederlands of Engels.' },
  { icon: '💶', titel: 'Geen onnodige kosten',        tekst: 'Geen werving, selectie, opleiding of ontslag. U betaalt gepresteerde dagen.' },
  { icon: '📋', titel: 'Administratief ontzorgd',    tekst: 'Limosa, A1, RSZ & Dimona — allemaal in orde vóór dag één.' },
  { icon: '🌍', titel: 'Actief in heel Europa',      tekst: 'Wij werken met vaste partners uit heel Europa en kunnen klanten in heel Europa bedienen.' },
  { icon: '🦺', titel: "Eigen PBM's en gereedschap", tekst: 'Elke vakman beschikt over eigen persoonlijke beschermingsmiddelen én vakspecifiek gereedschap.' },
  { icon: '✅', titel: 'Geverifieerde certificaten', tekst: 'Elk attest en elke kwalificatie wordt gecontroleerd op geldigheid vóór de start van de opdracht.' },
  { icon: '⚖️', titel: 'Juridisch correct',         tekst: 'Wij werken volledig conform de geldende loon- en arbeidsvoorwaarden. Minimumloon, vakantiegeld en eindejaarspremie — alles inbegrepen.' },
]

const COMPLIANCE = [
  { label: 'A1-attest',         tekst: 'Sociaalzekerheidsattest uit het land van herkomst — verplicht voor elke gedetacheerde werknemer.' },
  { label: 'Limosa-aangifte',   tekst: 'Voorafgaande melding bij de Belgische overheid — HABICO regelt dit voor aanvang.' },
  { label: 'VCA-certificering', tekst: 'Veiligheidsattest voor risicovolle werven — aanwezig bij elk profiel dat wij plaatsen.' },
  { label: 'Dimona & RSZ',      tekst: 'Dagelijkse aangifte bij RSZ — correct en tijdig voor elke opdracht.' },
]

const Chip = ({ children, light = false }) => (
  <span style={{
    display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.09em',
    textTransform: 'uppercase', padding: '5px 14px', borderRadius: 9999, marginBottom: 14,
    background: light ? 'rgba(123,196,226,.15)' : '#EFF6FF',
    color: light ? '#7BC4E2' : '#2563EB',
  }}>{children}</span>
)

export default function ProfielDetail() {
  const { slug } = useParams()
  const profiel = profielen.find(p => p.slug === slug)

  if (!profiel) {
    return (
      <div className="wrap" style={{ paddingTop: 96, paddingBottom: 96, textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Profiel niet gevonden</h1>
        <Link to="/profielen" style={{ color: '#2563EB' }}>← Terug naar profielen</Link>
      </div>
    )
  }

  const andere = profielen.filter(p => p.slug !== slug).slice(0, 4)

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: profiel.kleur, position: 'relative', overflow: 'hidden', minHeight: 460 }}>
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0, position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', minHeight: 460, alignItems: 'center' }}>
            <div style={{ paddingTop: 64, paddingBottom: 64 }}>
              <Link to="/profielen" style={{ display: 'inline-block', fontSize: 13, color: 'rgba(255,255,255,.7)', textDecoration: 'none', marginBottom: 24 }}>
                ← Alle profielen
              </Link>
              <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(255,255,255,.3)', background: 'rgba(255,255,255,.15)', color: '#fff', marginBottom: 18 }}>
                {profiel.naam}
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.08, letterSpacing: '-.035em', marginBottom: 18, display: 'block' }}>
                {profiel.tagline}
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,.82)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
                {profiel.intro}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary" style={{ background: '#fff', color: profiel.kleur, boxShadow: 'none' }}>
                  Vraag {profiel.meervoud.toLowerCase()} aan
                </Link>
                <a href="tel:+3289714100" className="btn-ghost-white">📞 Bel direct</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%', overflow: 'hidden' }}>
              <img
                src={`/professions-cutout/${profiel.slug}.png`}
                alt={profiel.naam}
                style={{
                  height: 500,
                  width: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  display: 'block',
                }}
                onError={e => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #DBEAFE' }}>
        <div className="wrap" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', gap: 24 }}>
            {HABICO_STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 900, color: '#2563EB', letterSpacing: '-.04em' }}>{s.getal}</div>
                <div style={{ fontSize: 13, color: '#64748B', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KERNVAARDIGHEDEN ─────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <Chip>Vakkennis</Chip>
            <h2 style={{ fontSize: 'clamp(1.625rem, 2.8vw, 2.375rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.18, letterSpacing: '-.025em', marginBottom: 14 }}>
              Wat maakt een goede {profiel.naam.toLowerCase()}?
            </h2>
            <p style={{ fontSize: 17, color: '#64748B', lineHeight: 1.7 }}>
              Wij begrijpen het vak. Onze {profiel.meervoud.toLowerCase()} worden gescreend op deze kerncompetenties — zodat u zeker bent van wie er op uw werf staat.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {profiel.kernvaardigheden.map(k => (
              <div key={k.titel} className="card" style={{ padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: profiel.kleur + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16 }}>{k.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 10, lineHeight: 1.35 }}>{k.titel}</h3>
                <p style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.65 }}>{k.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOORDELEN ────────────────────────────────────────────────────── */}
      <section style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 100 }}>
              <Chip>Waarom HABICO</Chip>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, letterSpacing: '-.025em', marginBottom: 16 }}>
                Vind de juiste versterking via HABICO
              </h2>
              <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.7, marginBottom: 28 }}>
                Al 17 jaar brengt HABICO erkende Europese vaklieden samen met Belgische bouwbedrijven.
              </p>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 14 }}>
                Vraag nu {profiel.meervoud.toLowerCase()} aan
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {getVoordelen(profiel.pc).map(v => (
                <div key={v.titel} className="card" style={{ padding: 20, display: 'flex', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{v.icon}</div>
                  <div>
                    <h3 style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A', marginBottom: 5 }}>{v.titel}</h3>
                    <p style={{ fontSize: 12.5, color: '#64748B', lineHeight: 1.6 }}>{v.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ───────────────────────────────────────────────────── */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Chip light>Wetgeving</Chip>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 800, color: '#fff', lineHeight: 1.18, letterSpacing: '-.025em', marginBottom: 16 }}>
                Conform de Europese & Belgische wetgeving
              </h2>
              <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginBottom: 24 }}>
                Arbeidsdetachering zoals het hoort: volledig conform de Belgische arbeids- en loonvoorwaarden. Alle vereiste documenten ontvangt u vóór de opstart.
              </p>
              {/* Paritair comité — met nuance, want het definitieve PC volgt uit
                  de hoofdactiviteit van de opdrachtgever, niet uit het beroep. */}
              <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: 20, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: profiel.kleur, letterSpacing: '-.02em' }}>PC {profiel.pc}</span>
                  <span style={{ fontSize: 13, color: '#CBD5E1', fontWeight: 600 }}>{profiel.pcLabel}</span>
                </div>
                <p style={{ fontSize: 12.5, color: '#94A3B8', lineHeight: 1.6 }}>{profiel.pcToelichting}</p>
              </div>
              <Link to="/hoe-werkt-het" style={{ fontSize: 14, fontWeight: 600, color: profiel.kleur, textDecoration: 'none' }}>
                Meer over werkwijze & contractmodellen →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {COMPLIANCE.map(c => (
                <div key={c.label} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: profiel.kleur, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>✓</span>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: 13 }}>{c.label}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#94A3B8', lineHeight: 1.6 }}>{c.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STAPPENPLAN + CTA SIDEBAR ─────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-.025em', marginBottom: 32 }}>
                Van aanvraag tot {profiel.naam.toLowerCase()} op de werf
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
                {[
                  { nr: 1, tekst: 'U neemt contact op' },
                  { nr: 2, tekst: 'Wij matchen het juiste profiel' },
                  { nr: 3, tekst: 'Contract & admin geregeld' },
                  { nr: 4, tekst: `${profiel.naam} staat op de werf` },
                ].map(s => (
                  <div key={s.nr} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: 20, textAlign: 'center' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: profiel.kleur, color: '#fff', fontWeight: 800, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>{s.nr}</div>
                    <p style={{ fontSize: 13, color: '#475569', fontWeight: 600, lineHeight: 1.4 }}>{s.tekst}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 14 }}>Certificaten & documenten bij dit profiel</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {profiel.certificaten.map(c => (
                    <span key={c} style={{ background: '#fff', border: '1px solid #E2E8F0', color: '#475569', fontSize: 13, padding: '5px 12px', borderRadius: 8, fontWeight: 500 }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ background: profiel.kleur, borderRadius: 16, padding: 28, color: '#fff' }}>
                <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Waarom HABICO voor {profiel.meervoud.toLowerCase()}?</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,.88)' }}>{profiel.habico_voordeel}</p>
              </div>
              <Link to="/contact" style={{ display: 'block', background: profiel.kleur, color: '#fff', textAlign: 'center', fontWeight: 700, padding: '14px 20px', borderRadius: 12, textDecoration: 'none', fontSize: 15 }}>
                Vraag nu {profiel.meervoud.toLowerCase()} aan →
              </Link>
              <a href="tel:+3289714100" style={{ display: 'block', background: '#0A1628', color: '#fff', textAlign: 'center', fontWeight: 600, padding: '14px 20px', borderRadius: 12, textDecoration: 'none', fontSize: 15 }}>
                📞 +32 89 71 41 00
              </a>
              <a href="https://wa.me/32471428889" style={{ display: 'block', background: '#22C55E', color: '#fff', textAlign: 'center', fontWeight: 600, padding: '14px 20px', borderRadius: 12, textDecoration: 'none', fontSize: 15 }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANDERE PROFIELEN ─────────────────────────────────────────────── */}
      <section style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', padding: '64px 0' }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(1.375rem, 2vw, 1.875rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-.025em', marginBottom: 28 }}>Andere profielen</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {andere.map(p => (
              <Link key={p.slug} to={`/profielen/${p.slug}`} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 240, display: 'block', textDecoration: 'none', background: `linear-gradient(to top, ${p.kleur} 0%, ${p.kleur} 38%, ${p.kleur}59 70%, ${p.kleur}1A 100%)` }}>
                <img src={p.foto} alt={p.naam} loading="lazy" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 58, height: 180, width: 'auto', display: 'block' }} onError={e => e.target.style.display = 'none'} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${p.kleur}E6 0%, ${p.kleur}00 40%)` }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16 }}>
                  <p style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>{p.naam}</p>
                  <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 12, marginTop: 3 }}>{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/profielen" style={{ fontSize: 14, fontWeight: 600, color: '#2563EB', textDecoration: 'none' }}>Alle 11 profielen →</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
