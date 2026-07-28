import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { profielen } from '../data/profielen'

/* Profielen-carousel voor de sectie "Op zoek naar versterking?".
   Grotere kaarten, vrijstaande cutout op een kleurverloop, pijlnavigatie
   en een voortgangsbalk zodat zichtbaar is dat er meer profielen zijn. */
export default function ProfielCarousel() {
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [zichtbaar, setZichtbaar] = useState(1)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const meet = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const ratio = max > 0 ? el.scrollLeft / max : 0
    const perKaart = el.scrollWidth / profielen.length
    const inBeeld = Math.max(1, Math.round(el.clientWidth / perKaart))
    setProgress(ratio)
    setZichtbaar(Math.min(profielen.length, Math.round(ratio * (profielen.length - inBeeld)) + inBeeld))
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= max - 2)
  }, [])

  useEffect(() => {
    meet()
    window.addEventListener('resize', meet)
    return () => window.removeEventListener('resize', meet)
  }, [meet])

  const scroll = dir => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.max(324, el.clientWidth * 0.8), behavior: 'smooth' })
  }

  const pijl = (dir, uit) => ({
    width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 18, lineHeight: 1, cursor: uit ? 'default' : 'pointer',
    transition: 'background .2s, border-color .2s, opacity .2s',
    opacity: uit ? 0.3 : 1,
    background: dir > 0 && !uit ? '#7BC4E2' : 'transparent',
    color: dir > 0 && !uit ? '#0A1628' : '#fff',
    border: dir > 0 && !uit ? 'none' : '1px solid rgba(255,255,255,.28)',
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginBottom: 18 }} className="carousel-nav">
        <button aria-label="Vorige profielen" onClick={() => scroll(-1)} disabled={atStart} style={pijl(-1, atStart)}>←</button>
        <button aria-label="Volgende profielen" onClick={() => scroll(1)} disabled={atEnd} style={pijl(1, atEnd)}>→</button>
      </div>

      <div
        ref={trackRef}
        onScroll={meet}
        className="scrollbar-hide profiel-track"
        style={{ display: 'flex', gap: 14, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4 }}
      >
        {profielen.map(p => (
          <Link
            key={p.slug}
            to={`/profielen/${p.slug}`}
            className="profiel-kaart"
            style={{
              position: 'relative', flexShrink: 0, width: 310, height: 470,
              borderRadius: 18, overflow: 'hidden', display: 'block',
              textDecoration: 'none', scrollSnapAlign: 'start',
              background: `linear-gradient(to top, ${p.kleur} 0%, ${p.kleur} 38%, ${p.kleur}59 70%, rgba(10,22,40,0) 100%)`,
            }}
          >
            <img
              src={`/professions-cutout/${p.slug}-v2.png`}
              alt={p.naam}
              loading="lazy"
              style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 92, height: 368, width: 'auto', display: 'block' }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 20 }}>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: 22, lineHeight: 1.2 }}>{p.naam}</p>
              <p style={{ color: 'rgba(255,255,255,.78)', fontSize: 14, lineHeight: 1.45, marginTop: 4 }}>{p.tagline}</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 18 }}>
        <div style={{ flex: 1, height: 3, borderRadius: 999, background: 'rgba(255,255,255,.12)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: `${progress * 70}%`, top: 0, height: '100%', width: '30%', borderRadius: 999, background: '#7BC4E2', transition: 'left .15s linear' }} />
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', flexShrink: 0 }}>{zichtbaar} / {profielen.length}</div>
      </div>
    </div>
  )
}
