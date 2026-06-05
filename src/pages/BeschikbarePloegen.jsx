import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sectoren } from '../data/sectoren'

const ploegen = [
  { id: 1, naam: 'Pavel K.', profiel: 'HVAC-monteur', sector: 'hvac', ervaring: '12 jaar', regio: 'Limburg', talen: ['NL', 'RU', 'EN'], certificaten: ['VCA', 'Limosa', 'A1'], beschikbaar: 'Direct' },
  { id: 2, naam: 'Dzmitry M.', profiel: 'HVAC-monteur (CV)', sector: 'hvac', ervaring: '9 jaar', regio: 'Antwerpen', talen: ['NL', 'RU'], certificaten: ['VCA', 'Limosa', 'A1'], beschikbaar: 'Direct' },
  { id: 3, naam: 'Roman S.', profiel: 'HVAC-monteur (ventilatie)', sector: 'hvac', ervaring: '7 jaar', regio: 'Limburg', talen: ['NL', 'PL', 'EN'], certificaten: ['VCA', 'Limosa', 'A1', 'F-gassen'], beschikbaar: 'Binnen 1 week' },
  { id: 4, naam: 'Marek W.', profiel: 'Elektricien', sector: 'elektriciteit', ervaring: '14 jaar', regio: 'Heel België', talen: ['NL', 'PL'], certificaten: ['VCA', 'Limosa', 'A1', 'BA4'], beschikbaar: 'Direct' },
  { id: 5, naam: 'Ionuț P.', profiel: 'Elektricien', sector: 'elektriciteit', ervaring: '8 jaar', regio: 'Brussel/Vlaams-Brabant', talen: ['FR', 'RO', 'EN'], certificaten: ['VCA', 'Limosa', 'A1'], beschikbaar: 'Direct' },
  { id: 6, naam: 'Sergiu D.', profiel: 'Lasser TIG/MIG', sector: 'laswerken', ervaring: '11 jaar', regio: 'Antwerpen', talen: ['NL', 'RO'], certificaten: ['VCA', 'Limosa', 'A1', 'EN ISO 9606-1'], beschikbaar: 'Direct' },
  { id: 7, naam: 'Andrei B.', profiel: 'Sloopwerker', sector: 'sloopwerken', ervaring: '6 jaar', regio: 'Heel België', talen: ['NL', 'RO'], certificaten: ['VCA', 'Limosa', 'A1'], beschikbaar: 'Direct' },
  { id: 8, naam: 'Tomasz K.', profiel: 'Betonwerker', sector: 'beton', ervaring: '10 jaar', regio: 'Heel België', talen: ['NL', 'PL'], certificaten: ['VCA', 'Limosa', 'A1', 'Stellingen'], beschikbaar: 'Binnen 1 week' },
]

const beschikbaarStijl = {
  'Direct': { background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' },
  'Binnen 1 week': { background: '#FEF9C3', color: '#A16207', border: '1px solid #FDE68A' },
}

const inputBase = {
  width: '100%', border: '1px solid #E2E8F0', borderRadius: 10,
  padding: '10px 16px', fontSize: 14, outline: 'none', background: '#fff',
}

export default function BeschikbarePloegen() {
  const [filterSector, setFilterSector] = useState('alle')

  const gefilterd = filterSector === 'alle'
    ? ploegen
    : ploegen.filter(p => p.sector === filterSector)

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,.15)', color: '#4ADE80', fontSize: 13, padding: '6px 16px', borderRadius: 9999, marginBottom: 24, border: '1px solid rgba(34,197,94,.3)' }}>
            <span style={{ width: 8, height: 8, background: '#4ADE80', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            Live bijgewerkt
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 16 }}>
            Beschikbare ploegen
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 560, lineHeight: 1.7 }}>
            Overzicht van vaklieden die nu of binnenkort inzetbaar zijn. Direct contact via het formulier hieronder.
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section style={{ background: '#F8FAFC', padding: '80px 0' }}>
        <div className="wrap">
          {/* Filter buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            <button
              onClick={() => setFilterSector('alle')}
              style={{
                padding: '8px 18px', borderRadius: 9999, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                background: filterSector === 'alle' ? '#0A1628' : '#fff',
                color: filterSector === 'alle' ? '#fff' : '#64748B',
                boxShadow: filterSector === 'alle' ? 'none' : '0 0 0 1px #E2E8F0',
              }}
            >
              Alle sectoren
            </button>
            {sectoren.map(s => (
              <button
                key={s.slug}
                onClick={() => setFilterSector(s.slug)}
                style={{
                  padding: '8px 18px', borderRadius: 9999, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  background: filterSector === s.slug ? '#2563EB' : '#fff',
                  color: filterSector === s.slug ? '#fff' : '#64748B',
                  boxShadow: filterSector === s.slug ? 'none' : '0 0 0 1px #E2E8F0',
                }}
              >
                {s.icon} {s.naam}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {gefilterd.map(p => {
              const sector = sectoren.find(s => s.slug === p.sector)
              return (
                <div key={p.id} className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%', background: '#0A1628',
                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: 13, marginBottom: 8,
                      }}>
                        {p.naam.split(' ')[0][0]}{p.naam.split(' ')[1]?.[0]}
                      </div>
                      <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 2 }}>{p.naam}</h3>
                      <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13 }}>{p.profiel}</p>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 9999, ...beschikbaarStijl[p.beschikbaar] }}>
                      {p.beschikbaar}
                    </span>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    {[
                      { icon: '📍', text: p.regio },
                      { icon: '⏱️', text: `${p.ervaring} ervaring` },
                      { icon: '🗣️', text: p.talen.join(' · ') },
                    ].map(row => (
                      <div key={row.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#64748B', marginBottom: 6 }}>
                        <span>{row.icon}</span> {row.text}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 16 }}>
                    {p.certificaten.map(c => (
                      <span key={c} style={{ background: '#F1F5F9', color: '#64748B', fontSize: 11, padding: '3px 8px', borderRadius: 6 }}>
                        {c}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/contact?profiel=${p.profiel}`}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Vraag dit profiel aan
                  </Link>
                </div>
              )
            })}
          </div>

          {gefilterd.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0', color: '#64748B' }}>
              <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Geen profielen gevonden voor deze sector.</p>
              <p style={{ fontSize: 14, marginBottom: 20 }}>Neem contact op — wij zoeken actief naar nieuwe partners.</p>
              <Link to="/contact" className="btn-primary">Neem contact op</Link>
            </div>
          )}

          {/* CTA bar */}
          <div style={{ marginTop: 40, background: '#0A1628', borderRadius: 16, padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 4 }}>Profiel niet gevonden?</p>
              <p style={{ color: '#94A3B8', fontSize: 14 }}>Wij matchen ook op maat. Vertel ons wat u nodig heeft.</p>
            </div>
            <Link to="/contact" className="btn-primary">
              Specifieke aanvraag
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
