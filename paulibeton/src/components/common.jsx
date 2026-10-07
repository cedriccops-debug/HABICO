import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { PhoneIcon } from './Navbar'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function MobileCta() {
  const { pathname } = useLocation()
  if (pathname === '/offerte') return null
  return (
    <div className="mobile-cta">
      <a href={site.phoneHref} className="btn btn-outline">
        <PhoneIcon /> Bellen
      </a>
      <Link to="/offerte" className="btn btn-primary">
        Offerte aanvragen
      </Link>
    </div>
  )
}

export function Eyebrow({ children, light }) {
  return <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{children}</span>
}

export function PageHero({ eyebrow, title, children, aside, crumbs }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-grid">
        <div>
          {crumbs && (
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link to="/">Home</Link>
              {crumbs.map((c) =>
                c.to ? (
                  <Link key={c.label} to={c.to}>
                    {c.label}
                  </Link>
                ) : (
                  <span key={c.label}>{c.label}</span>
                ),
              )}
            </nav>
          )}
          {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
          <h1 className="h1">{title}</h1>
          {children}
        </div>
        {aside && <div className="page-hero-aside">{aside}</div>}
      </div>
    </section>
  )
}

export function CtaBand({ title = 'Klaar om te bouwen?', text }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-band-inner">
        <div>
          <h2 className="h2">{title}</h2>
          <p>
            {text ||
              'Stuur ons uw plannen of lijst met hoeveelheden. We stellen de juiste elementen voor en bezorgen u een offerte op maat.'}
          </p>
        </div>
        <div className="cta-band-actions">
          <Link to="/offerte" className="btn btn-light">
            Offerte aanvragen →
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost-light">
            <PhoneIcon /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

export function Faq({ items, id }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  }
  return (
    <div className="faq" id={id}>
      {items.map((i) => (
        <details key={i.q} className="faq-item">
          <summary>
            {i.q}
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <p>{i.a}</p>
        </details>
      ))}
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </div>
  )
}

export function Icon({ name }) {
  const paths = {
    factory: 'M3 21V10l5 3V10l5 3V6l3-3h3v18zM7 17h2m3 0h2m3 0h2',
    ruler: 'M3 17 17 3l4 4L7 21zM7 13l2 2m1-5 2 2m1-5 2 2',
    shield: 'M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6zM8.5 12l2.5 2.5 4.5-5',
    truck: 'M2 6h11v10H2zM13 10h4l4 3v3h-8M6 19a2 2 0 1 0 0-.01M17 19a2 2 0 1 0 0-.01',
    hand: 'M7 11V5a1.5 1.5 0 0 1 3 0v5m0-1V4a1.5 1.5 0 0 1 3 0v6m0-4a1.5 1.5 0 0 1 3 0v6m0-2a1.5 1.5 0 0 1 3 0v4c0 4-3 7-7 7h-1c-3 0-4.5-1.5-6-4l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L7 15',
    cog: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-5v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1',
    fire: 'M12 21c-4 0-7-2.7-7-6.5C5 10 9 8 9 3c3 2 4.5 4.5 4.5 7 1-1 1.5-2 1.5-3.5 2.5 2 4 5 4 8C19 18.3 16 21 12 21z',
    leaf: 'M5 19C5 10 10 5 20 4c-1 10-6 15-15 15zm0 0 7-7',
    sound: 'M4 9v6h4l5 4V5L8 9zm12 0a4 4 0 0 1 0 6m2.5-8.5a7.5 7.5 0 0 1 0 11',
    feather: 'M20 4c-7 0-13 5-13 12v4m0-4h7M9 12h7m-3-4h6',
    doc: 'M6 2h8l5 5v15H6zM14 2v5h5M9 13h7m-7 4h7',
    pin: 'M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
    phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  }
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
