import { useState } from 'react'

const inputBase = {
  width: '100%', border: '1px solid #E2E8F0', borderRadius: 10,
  padding: '11px 16px', fontSize: 14, outline: 'none', background: '#fff',
  color: '#0F172A',
}

export default function Contact() {
  const [type, setType] = useState('klant')
  const [form, setForm] = useState({
    naam: '', bedrijf: '', email: '', tel: '',
    sector: '', startdatum: '', bericht: '',
  })
  const [verzonden, setVerzonden] = useState(false)

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contactaanvraag via website — ${form.naam} (${form.bedrijf})`)
    const body = encodeURIComponent(
      `Naam: ${form.naam}\nBedrijf: ${form.bedrijf}\nE-mail: ${form.email}\nTelefoon: ${form.tel}\nSector: ${form.sector || '—'}\nStartdatum: ${form.startdatum || '—'}\n\nBericht:\n${form.bericht}`
    )
    window.location.href = `mailto:info@habico.be?subject=${subject}&body=${body}`
    setVerzonden(true)
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <span className="label-chip" style={{ background: 'rgba(37,99,235,.15)', color: '#93C5FD', marginBottom: 20 }}>
            Neem contact op
          </span>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 16 }}>
            Contact
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 560, lineHeight: 1.7, marginBottom: 28 }}>
            Werfleiders bellen. Maar u mag ook mailen of het formulier invullen — wij reageren binnen 24 uur.
          </p>
          <a
            href="tel:+3289714100"
            className="btn-primary"
            style={{ fontSize: 18, padding: '14px 32px' }}
          >
            📞 +32 89 71 41 00
          </a>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#F8FAFC', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'start' }}>
            {/* Contactinfo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 20 }}>Directe contacten</h3>
                <div>
                  <a href="tel:+3289714100" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, background: '#EFF6FF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: '#94A3B8', marginBottom: 2 }}>Telefoon</p>
                      <p style={{ fontWeight: 600, color: '#0F172A', fontSize: 14 }}>+32 89 71 41 00</p>
                    </div>
                  </a>
                  <a href="mailto:info@habico.be" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, background: '#EFF6FF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: '#94A3B8', marginBottom: 2 }}>E-mail</p>
                      <p style={{ fontWeight: 600, color: '#0F172A', fontSize: 14 }}>info@habico.be</p>
                    </div>
                  </a>
                  <a href="https://wa.me/32471428889" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                    <div style={{ width: 40, height: 40, background: '#F0FDF4', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="18" height="18" fill="#22C55E" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: '#94A3B8', marginBottom: 2 }}>WhatsApp</p>
                      <p style={{ fontWeight: 600, color: '#0F172A', fontSize: 14 }}>Stuur een bericht</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 6, fontSize: 14 }}>Locatie</h3>
                <p style={{ fontSize: 14, color: '#64748B' }}>Maasmechelen, België</p>
                <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>Actief in heel België</p>
              </div>

              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 14, padding: 16, fontSize: 13 }}>
                <p style={{ fontWeight: 700, color: '#166534', marginBottom: 4 }}>Reactietijd</p>
                <p style={{ color: '#15803D', lineHeight: 1.6 }}>Telefonisch: direct<br />Formulier/mail: binnen 24 uur</p>
              </div>
            </div>

            {/* Formulier */}
            <div>
              {/* Type selector */}
              <div style={{ display: 'flex', background: '#fff', borderRadius: 14, border: '1px solid #E2E8F0', padding: 4, marginBottom: 24 }}>
                <button
                  onClick={() => setType('klant')}
                  style={{
                    flex: 1, padding: '12px 16px', borderRadius: 10, fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer', transition: 'all .2s',
                    background: type === 'klant' ? '#0A1628' : 'transparent',
                    color: type === 'klant' ? '#fff' : '#64748B',
                    boxShadow: type === 'klant' ? '0 1px 4px rgba(0,0,0,.15)' : 'none',
                  }}
                >
                  🏗️ Ik zoek personeel
                </button>
                <button
                  onClick={() => setType('partner')}
                  style={{
                    flex: 1, padding: '12px 16px', borderRadius: 10, fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer', transition: 'all .2s',
                    background: type === 'partner' ? '#2563EB' : 'transparent',
                    color: type === 'partner' ? '#fff' : '#64748B',
                    boxShadow: type === 'partner' ? '0 1px 4px rgba(37,99,235,.3)' : 'none',
                  }}
                >
                  🤝 Ik lever personeel
                </button>
              </div>

              {verzonden ? (
                <div className="card" style={{ padding: '48px 32px', textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>Bericht ontvangen!</h3>
                  <p style={{ color: '#64748B', marginBottom: 20 }}>Wij nemen contact op binnen 24 uur.</p>
                  <a href="tel:+3289714100" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
                    Of bel direct: +32 89 71 41 00
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card" style={{ padding: 28 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Naam *</label>
                      <input name="naam" value={form.naam} onChange={update} required style={inputBase} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Bedrijf *</label>
                      <input name="bedrijf" value={form.bedrijf} onChange={update} required style={inputBase} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>E-mail *</label>
                      <input name="email" value={form.email} onChange={update} type="email" required style={inputBase} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Telefoon *</label>
                      <input name="tel" value={form.tel} onChange={update} type="tel" required style={inputBase} />
                    </div>
                  </div>
                  {type === 'klant' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Sector / Profiel</label>
                        <select name="sector" value={form.sector} onChange={update} style={inputBase}>
                          <option value="">Selecteer sector</option>
                          {['HVAC', 'Sloopwerken', 'Laswerken', 'Grondwerken', 'Elektriciteit', 'Dakwerken', 'Beton', 'Schilderwerken', 'Andere'].map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Wanneer heeft u personeel nodig?</label>
                        <input name="startdatum" value={form.startdatum} onChange={update} type="date" style={inputBase} />
                      </div>
                    </div>
                  )}
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Bericht *</label>
                    <textarea
                      name="bericht" value={form.bericht} onChange={update} required rows={5}
                      placeholder={type === 'klant' ? 'Beschrijf uw project, hoeveel mensen u nodig heeft en voor welke regio...' : 'Beschrijf uw beschikbare profielen, specialisaties en aantal mensen...'}
                      style={{ ...inputBase, resize: 'none', lineHeight: 1.6 }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%', justifyContent: 'center', fontSize: 16, padding: '15px 28px',
                      background: type === 'klant' ? '#0A1628' : '#2563EB',
                    }}
                  >
                    {type === 'klant' ? 'Vraag ploeg aan' : 'Word partner'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
