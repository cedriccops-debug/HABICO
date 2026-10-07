import { testimonials } from '../data/testimonials'

export default function Referenties() {
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
            Wat onze klanten zeggen over hun samenwerking met HABICO.
          </p>
        </div>
      </section>

      {/* Filter + cases */}
      <section style={{ background: '#F8FAFC', padding: '80px 0' }}>
        <div className="wrap">
          {/* Getuigenissen */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, max(340px, calc((100% - 20px) / 2))), 1fr))', gap: 20 }}>
            {testimonials.map(t => (
              <div key={t.bedrijf} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 4, borderRadius: 9999, background: '#2563EB', marginBottom: 20 }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 6 }}>{t.bedrijf}</span>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 12 }}>{t.titel}</h3>
                <blockquote style={{ fontSize: 15, color: '#374151', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                  "{t.quote}"
                </blockquote>
                <p style={{ fontSize: 13, color: '#64748B' }}>
                  <strong style={{ color: '#0F172A' }}>{t.naam}</strong> — {t.functie}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ marginTop: 56, background: '#0A1628', borderRadius: 20, padding: '48px 40px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 36 }}>HABICO in cijfers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
              {[
                { getal: '17+', label: 'jaar ervaring' },
                { getal: '500+', label: 'succesvolle projecten' },
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
