export default function OverHabico() {
  const team = [
    { naam: 'Tom Habico', rol: 'Zaakvoerder & Commercieel', initials: 'TH' },
    { naam: 'Sarah Claes', rol: 'Operationeel Coördinator', initials: 'SC' },
    { naam: 'Michał Kowalski', rol: 'Partner Relations (PL/RO)', initials: 'MK' },
  ]

  const mijlpalen = [
    { jaar: '2009', tekst: 'HABICO opgericht in Hasselt' },
    { jaar: '2012', tekst: 'Eerste internationale partnerschappen (Polen)' },
    { jaar: '2015', tekst: 'Uitbreiding naar Roemenië en Slowakije' },
    { jaar: '2018', tekst: '100+ actieve plaatsingen bereikt' },
    { jaar: '2020', tekst: 'Gecertificeerde Limosa/A1-verwerking geautomatiseerd' },
    { jaar: '2024', tekst: '200+ plaatsingen — 8 landen actief' },
  ]

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <span className="label-chip" style={{ background: 'rgba(37,99,235,.15)', color: '#93C5FD', marginBottom: 20 }}>
            Over ons
          </span>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 16 }}>
            Over HABICO
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 560, lineHeight: 1.7 }}>
            15 jaar verbinding tussen Europese vaklieden en de Belgische bouwsector. Transparant, gedocumenteerd, betrouwbaar.
          </p>
        </div>
      </section>

      {/* Missie */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 20 }}>
                Onze missie
              </h2>
              <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.7, marginBottom: 16 }}>
                HABICO verbindt erkende Europese vaklieden met Belgische bouwbedrijven die nood hebben aan gespecialiseerde ploegen. Wij doen dit met maximale transparantie: eerlijke competentiematrices, volledige administratieve correctheid en een directe communicatiestijl.
              </p>
              <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.7, marginBottom: 32 }}>
                We geloven dat eerlijkheid over wat een profiel kan en niet kan leidt tot betere samenwerkingen. Geen valse beloften, geen verrassingen op de werf.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { getal: '15+', label: 'Jaar ervaring' },
                  { getal: '200+', label: 'Plaatsingen' },
                  { getal: '8', label: 'Landen' },
                  { getal: '6', label: 'Sectoren' },
                ].map(s => (
                  <div key={s.label} style={{ background: '#F8FAFC', borderRadius: 12, padding: 16, textAlign: 'center', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: '#2563EB', marginBottom: 4 }}>{s.getal}</div>
                    <div style={{ fontSize: 13, color: '#64748B' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#F8FAFC', borderRadius: 20, padding: 28, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>Bedrijfsgegevens</h3>
              <div style={{ marginBottom: 16 }}>
                {[
                  { label: 'Bedrijfsnaam', value: 'HABICO BV' },
                  { label: 'BTW-nummer', value: 'BE 0810.889.415' },
                  { label: 'KBO-nummer', value: '0000.000.000' },
                  { label: 'Adres', value: 'Maasmechelen, België' },
                  { label: 'Erkenning aannemer', value: 'Klasse D — Categorie D' },
                  { label: 'Limosa-registratie', value: 'Gecertificeerde verwerker' },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: 14 }}>
                    <span style={{ color: '#64748B' }}>{r.label}</span>
                    <span style={{ fontWeight: 600, color: '#0F172A' }}>{r.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ background: '#DCFCE7', color: '#166534', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 9999, border: '1px solid #BBF7D0' }}>✓ Limosa</span>
                <span style={{ background: '#DBEAFE', color: '#1D4ED8', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 9999, border: '1px solid #BFDBFE' }}>✓ A1-attest</span>
                <span style={{ background: '#FEF3C7', color: '#B45309', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 9999, border: '1px solid #FDE68A' }}>✓ VCA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', padding: '96px 0' }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 12, textAlign: 'center' }}>
            Ons team
          </h2>
          <p style={{ fontSize: 15, color: '#64748B', textAlign: 'center', maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.7 }}>
            U belt iemand die u kent. Ons team is klein, direct en aanspreekbaar.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 700, margin: '0 auto' }}>
            {team.map(t => (
              <div key={t.naam} className="card" style={{ padding: 28, textAlign: 'center' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%', background: '#0A1628',
                  color: '#fff', fontSize: 22, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  {t.initials}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>{t.naam}</h3>
                <p style={{ fontSize: 13, color: '#64748B' }}>{t.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 48, textAlign: 'center' }}>
              Onze geschiedenis
            </h2>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 0, bottom: 0, width: 2, background: '#E2E8F0' }} />
              {mijlpalen.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 28, position: 'relative' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%', background: '#2563EB',
                    color: '#fff', fontSize: 13, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, position: 'relative', zIndex: 1,
                  }}>
                    {m.jaar.slice(2)}
                  </div>
                  <div style={{ paddingTop: 12 }}>
                    <span style={{ color: '#2563EB', fontWeight: 700, fontSize: 14 }}>{m.jaar}</span>
                    <p style={{ fontSize: 15, color: '#374151', marginTop: 2 }}>{m.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
