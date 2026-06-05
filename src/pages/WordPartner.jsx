import { useState } from 'react'

const inputBase = {
  width: '100%', border: '1px solid #E2E8F0', borderRadius: 10,
  padding: '11px 16px', fontSize: 14, outline: 'none', background: '#fff',
  color: '#0F172A',
}

export default function WordPartner() {
  const [form, setForm] = useState({
    bedrijf: '', land: '', specialisatie: '', aantalPersonen: '',
    talen: '', certificaten: '', naam: '', email: '', tel: '', bericht: '',
  })
  const [verzonden, setVerzonden] = useState(false)

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setVerzonden(true)
  }

  const profielenGezocht = [
    { profiel: 'HVAC-monteurs', detail: 'CV, ventilatie, warmtepompen — TIG-lassen is een plus' },
    { profiel: 'Elektriciens', detail: 'Ruwbouw en afwerking — BA4/BA5 gewenst' },
    { profiel: 'Lassers TIG/MIG/MAG', detail: 'EN ISO 9606 certificering vereist' },
    { profiel: 'Sloopwerkers', detail: 'Ervaring met selectief slopen in bewoonde omgeving' },
    { profiel: 'Betonwerkers / Bekisting', detail: 'Ervaring met systeembekisting — stellingattest gewenst' },
    { profiel: 'Grondwerkers', detail: 'Rijbewijs C en heftruck een plus' },
    { profiel: 'Dakwerkers', detail: 'Plat en hellend dak — werk op hoogte attest vereist' },
    { profiel: 'Schilders', detail: 'Binnen en buiten — industriële beschermingslagen een plus' },
  ]

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <span className="label-chip" style={{ background: 'rgba(37,99,235,.15)', color: '#93C5FD', marginBottom: 20 }}>
            B2B — Detacheringsbedrijven
          </span>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 16 }}>
            Word detacheringspartner
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 560, lineHeight: 1.7 }}>
            HABICO is uw afzetmarkt in België. Heeft u erkende vaklieden beschikbaar? Wij plaatsen ze bij Belgische opdrachtgevers.
          </p>
        </div>
      </section>

      {/* Margemodel */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 28 }}>
                Hoe werkt de samenwerking?
              </h2>
              <div>
                {[
                  {
                    stap: 'U levert de mensen',
                    tekst: 'Uw detacheringsbedrijf stelt erkende vaklieden ter beschikking. U betaalt hun loon en draagt de sociale lasten in uw land.',
                  },
                  {
                    stap: 'HABICO regelt de Belgische administratie',
                    tekst: 'Limosa-aangifte, A1-attest, RSZ-registratie — wij zorgen dat alles correct is vóór dag 1. U hoeft de Belgische wetgeving niet te kennen.',
                  },
                  {
                    stap: 'HABICO factureert de Belgische klant',
                    tekst: 'Wij zijn het commerciële contact met de opdrachtgever. U ontvangt een afgesproken dagprijs per vakman, HABICO draagt de commerciële risico\'s.',
                  },
                  {
                    stap: 'Transparante afrekening',
                    tekst: 'Maandelijkse afrekening op basis van gepresteerde dagen. Duidelijke afspraken over tarieven, minimum inzet en annulatietermijnen.',
                  },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%', background: '#2563EB',
                      color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: 14,
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>{s.stap}</h3>
                      <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>{s.tekst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#F8FAFC', borderRadius: 20, padding: 28, border: '1px solid #E2E8F0' }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0F172A', marginBottom: 16 }}>Wie factureert wie?</h2>
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #E2E8F0', marginBottom: 8 }}>
                  <span style={{ fontSize: 24 }}>🏢</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 2 }}>Uw bedrijf → HABICO</p>
                    <p style={{ fontSize: 13, color: '#94A3B8' }}>U factureert HABICO per gepresteerde dag/vakman</p>
                  </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: 20, color: '#CBD5E1', marginBottom: 8 }}>↕</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: 24 }}>🇧🇪</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 2 }}>HABICO → Belgische opdrachtgever</p>
                    <p style={{ fontSize: 13, color: '#94A3B8' }}>HABICO factureert het volledige project of de regie aan de klant</p>
                  </div>
                </div>
              </div>
              <div style={{ background: '#EFF6FF', border: '1px solid #DBEAFE', borderRadius: 12, padding: 16, fontSize: 13, color: '#1E40AF' }}>
                <strong>Loonrisico:</strong> U betaalt uw mensen, HABICO draagt het risico op betaling door de Belgische klant. Uw inkomsten zijn gegarandeerd zodra de arbeiders ingezet zijn.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profielen gezocht */}
      <section style={{ background: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', padding: '96px 0' }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 12, textAlign: 'center' }}>
            Profielen die wij zoeken
          </h2>
          <p style={{ fontSize: 15, color: '#64748B', textAlign: 'center', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Heeft u vaklieden beschikbaar in één van deze profielen? Dan zijn we geïnteresseerd.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {profielenGezocht.map(p => (
              <div key={p.profiel} className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 8, fontSize: 15 }}>{p.profiel}</h3>
                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake formulier */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 12, textAlign: 'center' }}>
              Intake formulier
            </h2>
            <p style={{ fontSize: 15, color: '#64748B', textAlign: 'center', marginBottom: 40, lineHeight: 1.7 }}>
              Vul het formulier in en wij nemen contact op binnen 2 werkdagen.
            </p>

            {verzonden ? (
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 20, padding: '56px 40px', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#166534', marginBottom: 8 }}>Aanvraag ontvangen!</h3>
                <p style={{ color: '#15803D', fontSize: 15 }}>Wij nemen contact op binnen 2 werkdagen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Bedrijfsnaam *</label>
                    <input name="bedrijf" value={form.bedrijf} onChange={update} required style={inputBase} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Land *</label>
                    <select name="land" value={form.land} onChange={update} required style={inputBase}>
                      <option value="">Selecteer land</option>
                      {['Polen', 'Roemenië', 'Slowakije', 'Tsjechië', 'Hongarije', 'Bulgarije', 'Portugal', 'Ander'].map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Specialisatie(s) *</label>
                    <input name="specialisatie" value={form.specialisatie} onChange={update} required placeholder="bv. HVAC, lassen, elektriciteit" style={inputBase} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Aantal beschikbare mensen</label>
                    <input name="aantalPersonen" value={form.aantalPersonen} onChange={update} type="number" min="1" style={inputBase} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Taalkennis arbeiders</label>
                    <input name="talen" value={form.talen} onChange={update} placeholder="bv. NL, EN, FR" style={inputBase} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Certificaten aanwezig</label>
                    <input name="certificaten" value={form.certificaten} onChange={update} placeholder="bv. VCA, EN ISO 9606" style={inputBase} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Contactpersoon *</label>
                    <input name="naam" value={form.naam} onChange={update} required style={inputBase} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>E-mail *</label>
                    <input name="email" value={form.email} onChange={update} type="email" required style={inputBase} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Telefoon / WhatsApp</label>
                    <input name="tel" value={form.tel} onChange={update} style={inputBase} />
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Aanvullende informatie</label>
                  <textarea name="bericht" value={form.bericht} onChange={update} rows={4}
                    style={{ ...inputBase, resize: 'none', lineHeight: 1.6 }} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '15px 28px' }}>
                  Intake versturen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
