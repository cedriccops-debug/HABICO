import { useState } from 'react'
import { sectoren } from '../data/sectoren'

const cases = [
  {
    bedrijf: 'Allco NV',
    sector: 'hvac',
    quote: 'HABICO leverde 3 HVAC-monteurs die naadloos inpasten in ons team. Limosa en A1 waren op dag 1 in orde — geen enkele vertraging op de werf.',
    context: '3 HVAC-monteurs • 18 maanden • 40+ wooneenheden',
    contact: 'Koen V., werfleider',
    regio: 'Hasselt',
    jaar: '2023',
  },
  {
    bedrijf: 'LVE Construct',
    sector: 'sloopwerken',
    quote: 'We hadden ploegen nodig voor een groot sloopproject in Antwerpen. HABICO reageerde binnen een dag en binnen de week stonden de mensen op de werf.',
    context: '2 sloopploegen (6 man) • 6 maanden • industrieel complex',
    contact: 'Lars D., projectmanager',
    regio: 'Antwerpen',
    jaar: '2024',
  },
  {
    bedrijf: 'Toplas Bouw',
    sector: 'laswerken',
    quote: 'TIG-lassers van HABICO — gecertificeerd, nauwkeurig en zelfstandig werkend. Precies wat wij nodig hadden voor ons roestvrijstalen project.',
    context: '2 TIG-lassers • 3 maanden • roestvrijstalen installaties',
    contact: 'Petra M., technisch directeur',
    regio: 'Gent',
    jaar: '2023',
  },
  {
    bedrijf: 'Groep Maes',
    sector: 'elektriciteit',
    quote: 'Vijf elektriciens ingezet voor een groot appartementsproject. Vlekkeloos: VCA, Dimona, alles geregeld. Wij deden wat wij moesten doen: bouwen.',
    context: '5 elektriciens • 9 maanden • 120 appartementen',
    contact: 'Jan M., zaakvoerder',
    regio: 'Leuven',
    jaar: '2024',
  },
  {
    bedrijf: 'TechBuild Solutions',
    sector: 'beton',
    quote: 'HABICO begreep exact wat wij zochten: bekistingswerkers met ervaring in prefab. Gevonden binnen 2 weken, sterk profiel, geen verrassingen.',
    context: '3 bekistingswerkers • 4 maanden • prefab-montage',
    contact: 'Nathalie S., site manager',
    regio: 'Brussel',
    jaar: '2023',
  },
  {
    bedrijf: 'Renovatiegroep Noord',
    sector: 'dakwerken',
    quote: 'Uitstekende dakwerkers voor een renovatieproject van 60 woningen. Werk op hoogte attest aanwezig, geen incidenten, perfecte oplevering.',
    context: '2 dakwerkers • 5 maanden • 60 woningrenovaties',
    contact: 'Marc V., projectverantwoordelijke',
    regio: 'Brugge',
    jaar: '2024',
  },
]

export default function Referenties() {
  const [filterSector, setFilterSector] = useState('alle')

  const gefilterd = filterSector === 'alle'
    ? cases
    : cases.filter(c => c.sector === filterSector)

  const gebruikteSectoren = [...new Set(cases.map(c => c.sector))]

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <span className="label-chip" style={{ background: 'rgba(37,99,235,.15)', color: '#93C5FD', marginBottom: 20 }}>
            Referenties
          </span>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 16 }}>
            Referenties &amp; Cases
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 560, lineHeight: 1.7 }}>
            Concrete samenwerkingen met context — niet enkel een quote, maar sector, duur en resultaat.
          </p>
        </div>
      </section>

      {/* Filter + cases */}
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
            {gebruikteSectoren.map(slug => {
              const s = sectoren.find(s => s.slug === slug)
              return (
                <button
                  key={slug}
                  onClick={() => setFilterSector(slug)}
                  style={{
                    padding: '8px 18px', borderRadius: 9999, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    background: filterSector === slug ? '#2563EB' : '#fff',
                    color: filterSector === slug ? '#fff' : '#64748B',
                    boxShadow: filterSector === slug ? 'none' : '0 0 0 1px #E2E8F0',
                  }}
                >
                  {s?.icon} {s?.naam}
                </button>
              )
            })}
          </div>

          {/* Cases grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {gefilterd.map((c, i) => {
              const sector = sectoren.find(s => s.slug === c.sector)
              return (
                <div key={i} className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 4, borderRadius: 9999, background: '#2563EB', marginBottom: 20 }} />
                  <div style={{ marginBottom: 16 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 17, color: '#0F172A', marginBottom: 4 }}>{c.bedrijf}</h3>
                    <span style={{ fontSize: 13, color: '#64748B' }}>{sector?.icon} {sector?.naam} — {c.jaar}</span>
                  </div>
                  <blockquote style={{ fontSize: 14, color: '#374151', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
                    "{c.quote}"
                  </blockquote>
                  <div style={{ background: '#F8FAFC', borderRadius: 10, padding: 12, fontSize: 12, color: '#64748B', marginBottom: 12 }}>
                    <strong>📊 Context:</strong> {c.context}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: '#94A3B8' }}>
                    <span>— {c.contact}</span>
                    <span>📍 {c.regio}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats */}
          <div style={{ marginTop: 56, background: '#0A1628', borderRadius: 20, padding: '48px 40px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 36 }}>HABICO in cijfers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
              {[
                { getal: '17+', label: 'jaar ervaring' },
                { getal: '200+', label: 'plaatsingen' },
                { getal: '8', label: 'landen actief' },
                { getal: '98%', label: 'tevreden opdrachtgevers' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: '#2563EB', marginBottom: 6 }}>{s.getal}</div>
                  <div style={{ fontSize: 14, color: '#94A3B8' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
