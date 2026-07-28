import { Link } from 'react-router-dom'
import Watermerk from './Watermerk'
import Logo from './Logo'

const profielLinks = [
  { slug: 'metser',      naam: 'Metsers' },
  { slug: 'elektricien', naam: 'Elektriciens' },
  { slug: 'lasser',      naam: 'Lassers' },
  { slug: 'loodgieter',  naam: 'Loodgieters' },
  { slug: 'grondwerker', naam: 'Grondwerkers' },
  { slug: 'dakdekker',   naam: 'Dakdekkers' },
]

const nav = [
  { to: '/hoe-werkt-het',       label: 'Hoe het werkt' },
  { to: '/word-partner',        label: 'Word partner' },
  { to: '/referenties',         label: 'Referenties' },
  { to: '/over-habico',         label: 'Over ons' },
  { to: '/contact',             label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A1628', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Watermerk kant="rechts" dekking={0.03} />

      {/* CTA band — Persoonlijk met Cedric */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,.1)', position: 'relative' }}>
        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 56, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32 }}>
          <img
            src="/team/Cedric.jpg"
            alt="Cedric Cops — HABICO"
            style={{
              width: 96, height: 96, borderRadius: '50%', objectFit: 'cover',
              border: '3px solid rgba(123,196,226,.3)', flexShrink: 0, boxShadow: '0 8px 24px rgba(0,0,0,.35)',
            }}
          />
          <div style={{ flex: '1 1 320px', minWidth: 260 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#7BC4E2', marginBottom: 8 }}>
              Direct contact
            </p>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-.02em', marginBottom: 10, lineHeight: 1.15 }}>
              Ploeg nodig voor uw volgende project?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.6, marginBottom: 4 }}>
              Ik neem persoonlijk elke aanvraag op — geen callcenter, geen wachttijd. Bel of mail me direct.
            </p>
            <p style={{ fontSize: 13, color: '#7BC4E2', fontWeight: 600 }}>
              — Cedric Cops, Key Account HABICO
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="tel:+3289714100" className="btn-ghost-white">📞 +32 89 71 41 00</a>
            <Link to="/contact" className="btn-primary">Vraag ploeg aan</Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2', minWidth: 200 }}>
            <Logo light size={34} />
            <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.7, marginTop: 16, marginBottom: 20, maxWidth: 280 }}>
              Ervaren bouwploegen, morgen beschikbaar. Al 17 jaar verbinding tussen Europese vaklieden en de Belgische bouwsector.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Limosa', 'A1-attest', 'VCA', 'PC 124'].map(b => (
                <span key={b} style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 9999, border: '1px solid rgba(255,255,255,.15)', color: '#94A3B8' }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Profielen */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: 16 }}>Profielen</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {profielLinks.map(p => (
                <li key={p.slug}>
                  <Link to={`/profielen/${p.slug}`} style={{ color: '#94A3B8', fontSize: 14, textDecoration: 'none' }}>{p.naam}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: 16 }}>Diensten</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {nav.map(l => (
                <li key={l.to}>
                  <Link to={l.to} style={{ color: '#94A3B8', fontSize: 14, textDecoration: 'none' }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: 16 }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { href: 'tel:+3289714100', label: '+32 89 71 41 00' },
                { href: 'mailto:info@habico.be', label: 'info@habico.be' },
                { href: 'https://wa.me/32471428889', label: 'WhatsApp' },
                { href: 'https://www.linkedin.com/company/habicobe', label: 'LinkedIn' },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', fontSize: 14, textDecoration: 'none' }}>{c.label}</a>
              ))}
              <a href="https://maps.app.goo.gl/rgZABzGBZo8Rz2yo8" target="_blank" rel="noopener noreferrer" style={{ color: '#64748B', fontSize: 14, textDecoration: 'none' }}>
                📍 Koninginnelaan 105, 3630 Maasmechelen
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
        <div className="wrap" style={{ paddingTop: 20, paddingBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: '#475569' }}>© {new Date().getFullYear()} HABICO BV — BTW BE 0810.889.415</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/over-habico" style={{ fontSize: 12, color: '#475569', textDecoration: 'none' }}>Over ons</Link>
            <Link to="/privacy" style={{ fontSize: 12, color: '#475569', textDecoration: 'none' }}>Privacybeleid</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
