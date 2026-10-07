import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Slab from './Slab'
import Block from './Block'
import { families, floors, blocks } from '../data/products'
import { site } from '../data/site'

const menu = [
  { to: '/vloeren#gewapend', fam: families.gewapend, art: <Slab product={floors[2]} depth={90} dims={false} /> },
  { to: '/vloeren#voorgespannen', fam: families.voorgespannen, art: <Slab product={floors[7]} depth={90} dims={false} /> },
  { to: '/metselstenen#beton', fam: families.beton, art: <Block block={blocks[1]} dims={false} /> },
  { to: '/metselstenen#pauli', fam: families.pauli, art: <Block block={blocks[5]} dims={false} /> },
]

const links = [
  { to: '/vloeren', label: 'Vloeren' },
  { to: '/metselstenen', label: 'Metselstenen' },
  { to: '/technische-info', label: 'Technische info' },
  { to: '/over-ons', label: 'Over Pauli' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const closeTimer = useRef()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // menu's sluiten bij navigatie (state aanpassen tijdens render i.p.v. in een effect)
  const route = pathname + hash
  const [prevRoute, setPrevRoute] = useState(route)
  if (route !== prevRoute) {
    setPrevRoute(route)
    setOpen(false)
    setMega(false)
  }

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setMega(false), setOpen(false))
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const enteredAt = useRef(0)
  const enter = () => {
    clearTimeout(closeTimer.current)
    if (!mega) enteredAt.current = Date.now()
    setMega(true)
  }
  // een klik vlak na hover-open mag het menu niet meteen weer sluiten
  const click = () => setMega((m) => (Date.now() - enteredAt.current < 400 ? true : !m))
  const leave = () => {
    closeTimer.current = setTimeout(() => setMega(false), 140)
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>Prefab betonproducent in Hoeselt sinds {site.founded} · BENOR &amp; CE</span>
          <span className="topbar-links">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>

      <div className="wrap nav-inner">
        <Link to="/" className="nav-logo" aria-label="Pauli Beton — home">
          <Logo />
        </Link>

        <nav className="nav-desktop" aria-label="Hoofdnavigatie">
          <div className="nav-mega-wrap" onMouseEnter={enter} onMouseLeave={leave}>
            <button
              className={`nav-link nav-link--btn ${mega ? 'is-open' : ''}`}
              aria-expanded={mega}
              aria-controls="mega"
              onClick={click}
            >
              Producten
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <div id="mega" className={`mega ${mega ? 'is-open' : ''}`} onMouseEnter={enter} onMouseLeave={leave}>
              <div className="mega-grid">
                {menu.map((m) => (
                  <Link key={m.to} to={m.to} className="mega-card">
                    <span className="mega-art">{m.art}</span>
                    <span className="mega-title">{m.fam.title}</span>
                    <span className="mega-desc">{m.fam.short}</span>
                  </Link>
                ))}
              </div>
              <div className="mega-side">
                <span className="eyebrow eyebrow--plain">Tools</span>
                <Link to="/vloeren#vloerkiezer">Vloerkiezer: welk welfsel past?</Link>
                <Link to="/metselstenen#berekening">Hoeveel blokken heb ik nodig?</Link>
                <Link to="/technische-info">Alle technische fiches (PDF)</Link>
              </div>
            </div>
          </div>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={site.phoneHref} className="nav-phone">
            <PhoneIcon /> {site.phone}
          </a>
          <Link to="/offerte" className="btn btn-primary btn-sm">
            Offerte aanvragen
          </Link>
        </div>

        <button className="nav-burger" aria-label={open ? 'Menu sluiten' : 'Menu openen'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-group">
          <span className="eyebrow eyebrow--plain">Producten</span>
          {menu.map((m) => (
            <Link key={m.to} to={m.to} className="drawer-link drawer-link--sub">
              {m.fam.title}
            </Link>
          ))}
        </div>
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="drawer-link">
            {l.label}
          </Link>
        ))}
        <div className="drawer-cta">
          <Link to="/offerte" className="btn btn-primary">Offerte aanvragen</Link>
          <a href={site.phoneHref} className="btn btn-outline">Bel {site.phone}</a>
        </div>
      </div>
    </header>
  )
}

export function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
        fill="currentColor"
      />
    </svg>
  )
}
