import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/profielen',           label: 'Profielen' },
  { to: '/hoe-werkt-het',       label: 'Hoe werkt het' },
  { to: '/referenties',         label: 'Referenties' },
  { to: '/word-partner',        label: 'Word partner' },
  { to: '/over-habico',         label: 'Over ons' },
]

const Logo = ({ light = false }) => (
  <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
    <rect x="0"  y="3"  width="6" height="22" rx="1.5" fill="#7BC4E2"/>
    <rect x="0"  y="12" width="19" height="5.5" rx="1.5" fill="#7BC4E2"/>
    <rect x="13" y="3"  width="6" height="22" rx="1.5" fill="#7BC4E2"/>
    <text x="24" y="22" fontFamily="Inter,system-ui,sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.5" fill={light ? '#ffffff' : '#0F172A'}>ABICO</text>
  </svg>
)

export default function Navbar() {
  const [open,    setOpen]    = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      borderBottom: '1px solid #E2E8F0',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 #E2E8F0, 0 4px 24px rgba(0,0,0,.06)' : 'none',
      transition: 'box-shadow .2s'
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        <Link to="/" style={{ flexShrink: 0 }}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
          {links.map(l => {
            const active = pathname === l.to || pathname.startsWith(l.to + '/')
            return (
              <Link key={l.to} to={l.to} style={{
                padding: '8px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                color: active ? '#2563EB' : '#475569',
                background: active ? '#EFF6FF' : 'transparent',
                textDecoration: 'none', transition: 'all .15s'
              }}>
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden-mobile">
          <a href="tel:+3289714100" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 14, fontWeight: 600, color: '#475569', textDecoration: 'none'
          }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +32 89 71 41 00
          </a>
          <Link to="/contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>
            Vraag ploeg aan
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', gap: 5, width: 40, height: 40, background: 'none', border: 'none', cursor: 'pointer' }}
          className="show-mobile"
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#475569', borderRadius: 2, transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none', transition: 'transform .2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#475569', borderRadius: 2, opacity: open ? 0 : 1, transition: 'opacity .2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#475569', borderRadius: 2, transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none', transition: 'transform .2s' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #E2E8F0', background: '#fff' }}>
          <div className="wrap" style={{ paddingTop: 8, paddingBottom: 20 }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500,
                color: pathname === l.to ? '#2563EB' : '#475569',
                textDecoration: 'none', borderBottom: '1px solid #F1F5F9'
              }}>
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+3289714100" className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>📞 +32 89 71 41 00</a>
              <Link to="/contact" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>Vraag ploeg aan</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
