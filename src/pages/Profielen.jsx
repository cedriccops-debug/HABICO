import { Link } from 'react-router-dom'
import Watermerk from '../components/Watermerk'
import { profielen } from '../data/profielen'

export default function Profielen() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <Watermerk kant="rechts" />
        <div className="wrap" style={{ textAlign: 'center', position: 'relative' }}>
          <span className="label-chip" style={{ background: 'rgba(37,99,235,.15)', color: '#93C5FD', marginBottom: 20 }}>
            Onze profielen
          </span>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 20 }}>
            Op zoek naar<br />
            <span style={{ color: '#2563EB' }}>versterking?</span>
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.7 }}>
            HABICO levert gespecialiseerde bouwploegen uit 8 Europese landen — gedocumenteerd, gecertificeerd en snel inzetbaar in heel België.
          </p>
          <Link to="/contact" className="btn-primary">
            Vraag uw ploeg aan
          </Link>
        </div>
      </section>

      {/* Profielen grid */}
      <section style={{ background: '#F8FAFC', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {profielen.map(p => (
              <Link
                key={p.slug}
                to={`/profielen/${p.slug}`}
                style={{
                  display: 'block', position: 'relative', overflow: 'hidden', borderRadius: 16,
                  aspectRatio: '3/4', textDecoration: 'none',
                  background: `linear-gradient(to top, ${p.kleur} 0%, ${p.kleur} 38%, ${p.kleur}59 70%, ${p.kleur}1A 100%)`,
                }}
              >
                <img
                  src={p.foto}
                  alt={p.naam}
                  loading="lazy"
                  style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '22%', height: '76%', width: 'auto', display: 'block' }}
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to top, ${p.kleur}E6 0%, ${p.kleur}00 42%)`,
                  }}
                />
                {/* Label top */}
                <div style={{ position: 'relative', zIndex: 10, padding: 16 }}>
                  <span style={{
                    background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(4px)',
                    color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '.1em',
                    textTransform: 'uppercase', padding: '4px 12px', borderRadius: 9999,
                    border: '1px solid rgba(255,255,255,.3)',
                  }}>
                    {p.naam}
                  </span>
                </div>
                {/* Bottom info */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, padding: 20 }}>
                  <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 20, lineHeight: 1.2, marginBottom: 4 }}>{p.naam}</h3>
                  <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 12, marginBottom: 12, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{p.tagline}</p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    color: '#fff', fontSize: 12, fontWeight: 600,
                    background: 'rgba(255,255,255,.2)', padding: '4px 12px', borderRadius: 9999,
                  }}>
                    Meer info →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ background: '#0A1628', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, textAlign: 'center' }}>
            {[
              { icon: '📋', titel: 'Limosa & A1', tekst: 'Alle buitenlandse werknemers zijn correct gemeld. Geen risico op boetes of werfstop.' },
              { icon: '🛡️', titel: 'VCA gecertificeerd', tekst: 'Elk profiel beschikt over de vereiste veiligheidsattesten voor uw specifieke werf.' },
              { icon: '⚡', titel: 'Binnen 1–3 weken', tekst: 'Van aanvraag tot vakman op de werf — gemiddeld 1 tot 3 weken.' },
            ].map(b => (
              <div key={b.titel} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 8 }}>{b.titel}</h3>
                <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.6 }}>{b.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
