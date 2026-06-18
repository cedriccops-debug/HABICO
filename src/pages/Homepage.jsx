import { Link } from 'react-router-dom'
import { profielen } from '../data/profielen'

const klanten = ['Allco', 'LVE', 'Toplas', 'Groep Maes', 'Dethier', 'TechBuild']

const usps = [
  { icon: '⚡', titel: 'Binnen 2 tot 4 weken op de werf', tekst: 'U geeft de startdatum — wij zorgen dat de ploeg er staat.' },
  { icon: '🔁', titel: '80% van onze klanten komt terug', tekst: 'Niet omdat we goedkoopst zijn, maar omdat we leveren wat we beloven.' },
  { icon: '📋', titel: 'Papierwerk? Dat regelen wij',     tekst: 'Limosa, A1, RSZ, Dimona — alles in orde vóór dag één.' },
  { icon: '🤝', titel: 'Eén vast aanspreekpunt',          tekst: 'Geen callcenter. Direct iemand die uw werf kent.' },
  { icon: '✅', titel: 'Eerlijk over wat we leveren',     tekst: 'Competentiematrix per profiel — geen overselling, geen verrassingen.' },
  { icon: '⚖️', titel: 'Juridisch volledig conform',     tekst: 'Loon- en arbeidsvoorwaarden, sociale dumping, aansprakelijkheid — allemaal geregeld.' },
]

const steps = [
  { nr: '01', titel: 'Contact',         tekst: 'Bel, mail of formulier — reactie binnen 24u.' },
  { nr: '02', titel: 'Analyse',          tekst: 'Korte intake: project, timing, vereiste profielen.' },
  { nr: '03', titel: 'Profiel match',    tekst: '2–3 geverifieerde kandidaten gepresenteerd.' },
  { nr: '04', titel: 'Contract & admin', tekst: 'Limosa, A1 & Dimona geregeld. Klaar.' },
  { nr: '05', titel: 'Op de werf',       tekst: 'Uw ploeg staat er — wij blijven aanspreekpunt.' },
]

const testimonials = [
  { bedrijf: 'Allco NV',      naam: 'Koen V.',  quote: 'HABICO leverde 3 HVAC-monteurs die naadloos inpasten in ons team. Limosa en A1 waren op dag 1 in orde.', context: '3 HVAC-monteurs · 18 maanden · 40+ wooneenheden' },
  { bedrijf: 'LVE Construct', naam: 'Lars D.',  quote: 'HABICO reageerde binnen een dag en binnen de week stonden de mensen op de werf. Uitstekende service.', context: '2 sloopploegen · 6 maanden · industrieel complex' },
  { bedrijf: 'Toplas Bouw',   naam: 'Petra M.', quote: 'TIG-lassers van HABICO — gecertificeerd, nauwkeurig en zelfstandig werkend. Precies wat wij nodig hadden.', context: '2 TIG-lassers · 3 maanden · roestvrij staal' },
]

/* ── Shared section header (centred) ──────────────────────────────────────── */
const SectionHeader = ({ chip, title, subtitle, light = false, center = true }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 56 }}>
    {chip && (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase',
        padding: '5px 14px', borderRadius: 9999, marginBottom: 16,
        background: light ? 'rgba(123,196,226,.15)' : '#EFF6FF',
        color: light ? '#7BC4E2' : '#2563EB',
      }}>{chip}</span>
    )}
    <h2 style={{
      fontSize: 'clamp(1.75rem, 3vw, 2.625rem)', fontWeight: 800,
      lineHeight: 1.15, letterSpacing: '-.025em',
      color: light ? '#fff' : '#0F172A',
      margin: chip ? '0 0 16px' : '0 0 16px',
    }}>{title}</h2>
    {subtitle && (
      <p style={{
        fontSize: 'clamp(.9375rem, 1.5vw, 1.125rem)', color: light ? 'rgba(255,255,255,.6)' : '#64748B',
        lineHeight: 1.7, maxWidth: 560,
        margin: center ? '0 auto' : '0',
      }}>{subtitle}</p>
    )}
  </div>
)

export default function Homepage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-section" style={{ display: 'flex', flexDirection: 'column', background: '#0d2745' }}>

        {/* Team photo — absolute right half, full height, all workers visible */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '65%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/Banner Hero/Screenshot 2026-06-12 at 16.58.34.png"
            alt="HABICO bouwploeg"
            style={{ width: '100%', height: '90%', objectFit: 'contain', objectPosition: 'center center', display: 'block' }}
          />
          {/* Left-edge fade — blends image's navy wall into page background */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0d2745 0%, rgba(13,39,69,0.3) 18%, transparent 35%)', pointerEvents: 'none' }} />
        </div>

        {/* Main hero content — grows to fill space */}
        <div className="wrap hero-inner" style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <div className="hero-text">
            <div className="trust-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="pulse-dot" style={{ width: 8, height: 8, background: '#4ADE80', borderRadius: '50%' }} />
              Vakkundige teams beschikbaar!
            </div>
            <h1 className="hero-h1">
              Gespecialiseerde bouwploegen,{' '}
              <span style={{ color: '#7BC4E2' }}>direct inzetbaar</span>
            </h1>
            <p className="hero-lead">
              HABICO levert erkende vaklieden voor de Belgische bouwsector. HVAC, sloopwerken, lassen, elektriciteit — volledig gedocumenteerd, direct inzetbaar.
            </p>
            <div className="hero-cta-row">
              <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>
                Vraag uw ploeg aan →
              </Link>
            </div>
            <div className="hero-badge-row">
              {[
                { label: '15+ jaar ervaring',    e: '🏆' },
                { label: '500+ plaatsingen',      e: '👷' },
                { label: 'Juridisch conform',     e: '⚖️' },
                { label: 'Actief in heel Europa', e: '🌍' },
              ].map(t => (
                <span key={t.label} className="trust-badge" style={{ fontSize: 13 }}>{t.e} {t.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Logobar — pinned at bottom, inside viewport */}
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,.08)', background: 'rgba(0,0,0,.25)', backdropFilter: 'blur(4px)', padding: '14px 0' }}>
          <div className="wrap" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px 32px', justifyContent: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', flexShrink: 0 }}>
              Vertrouwd door
            </span>
            {klanten.map(k => (
              <span key={k} style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,.35)', letterSpacing: '-.01em' }}>{k}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFIELEN GRID ───────────────────────────────────────────────── */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <SectionHeader chip="11 specialisaties" title={<>Op zoek naar <span style={{ color: '#7BC4E2' }}>versterking?</span></>} subtitle="Klik op een profiel — eerlijke competentie-info, vakspecifieke kennis, directe CTA." light center />
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }} className="scrollbar-hide">
            {profielen.map(p => (
              <Link key={p.slug} to={`/profielen/${p.slug}`} style={{ position: 'relative', flexShrink: 0, width: 160, aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', display: 'block', textDecoration: 'none' }}>
                <img src={p.foto} alt={p.naam} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display = 'none'} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${p.kleur}F0 0%, ${p.kleur}88 45%, transparent 100%)` }} />
                <div style={{ position: 'absolute', top: 10, left: 10 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.9)', background: 'rgba(0,0,0,.25)', padding: '3px 8px', borderRadius: 999, border: '1px solid rgba(255,255,255,.2)' }}>{p.naam}</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 14 }}>
                  <p style={{ color: '#fff', fontWeight: 800, fontSize: 14, lineHeight: 1.2 }}>{p.naam}</p>
                  <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 11, marginTop: 3 }}>{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/profielen" className="btn-ghost-white" style={{ fontSize: 14 }}>Alle 11 profielen →</Link>
          </div>
        </div>
      </section>

      {/* ── WAAROM HABICO ────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 64, alignItems: 'start' }}>
            {/* Left sticky */}
            <div style={{ position: 'sticky', top: 100 }}>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 9999, background: '#EFF6FF', color: '#2563EB', marginBottom: 16 }}>Waarom HABICO</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 800, lineHeight: 1.18, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 16 }}>
                Gebouwd op vertrouwen. Bewezen door resultaten.
              </h2>
              <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.7, marginBottom: 28 }}>
                Wij zijn geen uitzendbureau. HABICO is een gespecialiseerde detacheringspartner die de Belgische bouwsector van binnenuit kent.
              </p>
              <Link to="/over-habico" className="btn-secondary" style={{ fontSize: 14 }}>Meer over HABICO →</Link>
            </div>
            {/* Right grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {usps.map(u => (
                <div key={u.titel} className="card" style={{ padding: 24 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>{u.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>{u.titel}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.65 }}>{u.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', padding: '56px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
            {[
              { getal: '15+',  label: 'Jaar actief in detachering' },
              { getal: '500+', label: 'Succesvolle plaatsingen' },
              { getal: '8',    label: 'Europese partnerlanden' },
              { getal: '2–4',  label: 'Weken tot op de werf' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#2563EB', letterSpacing: '-.04em' }}>{s.getal}</div>
                <div style={{ fontSize: 14, color: '#64748B', fontWeight: 500, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOE WERKT HET ────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <SectionHeader chip="Werkwijze" title="Van eerste contact tot uw ploeg op de werf" subtitle="Transparant, snel en administratief volledig ontzorgd." />
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 28, left: '10%', right: '10%', height: 1, background: '#DBEAFE' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
              {steps.map(s => (
                <div key={s.nr} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: '#EFF6FF', border: '2px solid #DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: '#2563EB', marginBottom: 16 }}>{s.nr}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>{s.titel}</h3>
                  <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>{s.tekst}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/hoe-werkt-het" className="btn-secondary" style={{ fontSize: 14 }}>Alles over onze werkwijze →</Link>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE BAND ──────────────────────────────────────────────── */}
      <section style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '32px 0' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px 32px' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#94A3B8', flexShrink: 0 }}>Volledig conform</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              { label: 'Limosa-aangifte',   bg: '#F0FDF4', color: '#16A34A', border: '#BBF7D0' },
              { label: 'A1-attest',          bg: '#EFF6FF', color: '#2563EB', border: '#BFDBFE' },
              { label: 'VCA-certificering',  bg: '#FFF7ED', color: '#C2410C', border: '#FED7AA' },
              { label: 'Dimona & RSZ',       bg: '#FAF5FF', color: '#7C3AED', border: '#DDD6FE' },
              { label: 'Minimumloon conform PC', bg: '#F0FDFA', color: '#0F766E', border: '#99F6E4' },
            ].map(c => (
              <span key={c.label} style={{ fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 9999, border: `1px solid ${c.border}`, background: c.bg, color: c.color }}>
                ✓ {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERENTIES ──────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 9999, background: '#EFF6FF', color: '#2563EB', marginBottom: 12 }}>Referenties</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-.025em' }}>Wat onze klanten zeggen</h2>
            </div>
            <Link to="/referenties" className="btn-secondary" style={{ fontSize: 14, flexShrink: 0 }}>Alle referenties →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {testimonials.map(r => (
              <div key={r.bedrijf} className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#2563EB', fontSize: 14, flexShrink: 0 }}>{r.bedrijf[0]}</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, color: '#0F172A' }}>{r.bedrijf}</p>
                    <p style={{ fontSize: 12, color: '#94A3B8' }}>{r.naam}</p>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#FBBF24', fontSize: 12 }}>★</span>)}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>"{r.quote}"</p>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#64748B', fontWeight: 500 }}>
                  📊 {r.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="hero-mesh" style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .05, backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 9999, background: 'rgba(123,196,226,.15)', color: '#7BC4E2', marginBottom: 20 }}>Direct starten</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', fontWeight: 800, color: '#fff', letterSpacing: '-.03em', marginBottom: 16 }}>
            Ploeg nodig voor uw volgende project?
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.6)', maxWidth: 440, margin: '0 auto 40px' }}>
            Bel ons of vul het formulier in — wij reageren binnen 24 uur.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+3289714100" className="btn-ghost-white" style={{ fontSize: 16, padding: '14px 28px' }}>📞 +32 89 71 41 00</a>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>Stuur een bericht →</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
