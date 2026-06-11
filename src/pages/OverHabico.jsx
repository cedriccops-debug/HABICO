export default function OverHabico() {
  const team = [
    { naam: 'Charles Cops',       rol: 'Zaakvoerder',  foto: '/team/Charles_square.jpg' },
    { naam: 'Joanna Foltynska',   rol: 'Operations',   foto: '/team/Joanna_square.jpg'  },
    { naam: 'Elisabeth Loyen',    rol: 'Key Account',  foto: '/team/1711020732588.jpeg' },
    { naam: 'Cedric Cops',        rol: 'Key Account',  foto: '/team/Cedric.jpg'  },
  ]

  const mijlpalen = [
    { jaar: '2009', tekst: 'HABICO opgericht in Hasselt' },
    { jaar: '2012', tekst: 'Eerste internationale partnerschappen (Polen)' },
    { jaar: '2015', tekst: 'Uitbreiding naar Roemenië en Slowakije' },
    { jaar: '2018', tekst: '100+ actieve plaatsingen bereikt' },
    { jaar: '2020', tekst: 'Gecertificeerde Limosa/A1-verwerking geautomatiseerd' },
    { jaar: '2024', tekst: '500+ plaatsingen — actief in heel Europa' },
  ]

  return (
    <div>
      {/* Team */}
      <section style={{ background: '#fff', padding: '96px 0 96px' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.09em',
              textTransform: 'uppercase', padding: '5px 14px', borderRadius: 9999,
              background: '#EFF6FF', color: '#2563EB', marginBottom: 16,
            }}>Ons team</span>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 12 }}>
              De mensen achter HABICO
            </h2>
            <p style={{ fontSize: 15, color: '#64748B', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
              U belt iemand die u kent. Ons team is klein, direct en aanspreekbaar.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {team.map(t => (
              <div key={t.naam} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100%', aspectRatio: '1/1', borderRadius: 20, overflow: 'hidden',
                  marginBottom: 16, background: '#E2E8F0',
                }}>
                  <img
                    src={t.foto}
                    alt={t.naam}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      filter: 'grayscale(100%)',
                      display: 'block',
                    }}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background = '#0A1628'
                      e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#7BC4E2;font-size:28px;font-weight:800">${t.naam.split(' ').map(n=>n[0]).join('')}</div>`
                    }}
                  />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>{t.naam}</h3>
                <p style={{ fontSize: 13, color: '#2563EB', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{t.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missie */}
      <section style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span style={{
                display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.09em',
                textTransform: 'uppercase', padding: '5px 14px', borderRadius: 9999,
                background: '#EFF6FF', color: '#2563EB', marginBottom: 16,
              }}>Onze missie</span>
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
                  { getal: '500+', label: 'Plaatsingen' },
                  { getal: '8', label: 'Landen' },
                  { getal: '6', label: 'Sectoren' },
                ].map(s => (
                  <div key={s.label} style={{ background: '#fff', borderRadius: 12, padding: 16, textAlign: 'center', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: '#2563EB', marginBottom: 4 }}>{s.getal}</div>
                    <div style={{ fontSize: 13, color: '#64748B' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>Bedrijfsgegevens</h3>
              <div style={{ marginBottom: 16 }}>
                {[
                  { label: 'Bedrijfsnaam',          value: 'HABICO BV' },
                  { label: 'BTW-nummer',             value: 'BE 0810.889.415' },
                  { label: 'KBO-nummer',             value: '0000.000.000' },
                  { label: 'Adres',                  value: 'Maasmechelen, België' },
                  { label: 'Erkenning aannemer',     value: 'Klasse D — Categorie D' },
                  { label: 'Limosa-registratie',     value: 'Gecertificeerde verwerker' },
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
