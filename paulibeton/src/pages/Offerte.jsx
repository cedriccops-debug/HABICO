import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Eyebrow } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { PhoneIcon } from '../components/Navbar'
import { families, findProduct, fmt } from '../data/products'
import { site } from '../data/site'

const needOptions = [
  { key: 'gewapend', label: families.gewapend.title, hint: 'WPG · WPR 13 & 16 cm' },
  { key: 'voorgespannen', label: families.voorgespannen.title, hint: 'VVP 16 · 20 · 26 cm' },
  { key: 'beton', label: families.beton.title, hint: '9 · 14 · 19 · 29 cm' },
  { key: 'pauli', label: families.pauli.title, hint: 'Liapor · 9 · 14 · 19 cm' },
  { key: 'advies', label: 'Advies / berekening', hint: 'Ik twijfel nog over het type' },
]
const projectTypes = ['Nieuwbouw woning', 'Renovatie / uitbreiding', 'Appartementen', 'Kantoor / KMO / industrie', 'Andere']
const timings = ['Zo snel mogelijk', 'Binnen 1 – 3 maanden', 'Later dan 3 maanden', 'Nog onbekend']
const roles = ['Aannemer', 'Architect / ingenieur', 'Projectontwikkelaar', 'Particulier', 'Handelaar']

function prefill(params) {
  const p = findProduct(params.get('product') || '')
  if (!p) return { needs: [], qty: '' }
  const parts = [p.code]
  const len = Number(params.get('lengte'))
  if (len) parts.push(`elementlengte ${fmt(len, 2)} m`)
  if (params.get('last')) parts.push(`nuttige last ${params.get('last')} kg/m²`)
  if (params.get('aantal')) parts.push(`${fmt(Number(params.get('aantal')))} stuks`)
  return { needs: [p.family], qty: parts.join(' — ') + (len ? '\nAantal elementen / m²: ' : '') }
}

export default function Offerte() {
  usePageMeta('Offerte aanvragen', 'Vraag vrijblijvend een offerte aan voor welfsels, betonblokken of Pauli-blokken. Stuur uw plannen en wij stellen de juiste oplossing voor.')
  const [params] = useSearchParams()
  const initial = useMemo(() => prefill(params), [params])

  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({
    needs: initial.needs,
    qty: initial.qty,
    type: '',
    location: '',
    timing: '',
    plans: false,
    notes: '',
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
  })

  const set = (k, v) => setF((s) => ({ ...s, [k]: v }))
  const toggleNeed = (k) => set('needs', f.needs.includes(k) ? f.needs.filter((n) => n !== k) : [...f.needs, k])
  const needLabels = f.needs.map((n) => needOptions.find((o) => o.key === n)?.label).filter(Boolean)

  const validate = (s) => {
    const e = {}
    if (s === 1 && f.needs.length === 0) e.needs = 'Kies minstens één productgroep.'
    if (s === 2 && !f.location.trim()) e.location = 'Vul de gemeente of postcode van de werf in.'
    if (s === 3) {
      if (!f.name.trim()) e.name = 'Vul uw naam in.'
      if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Vul een geldig e-mailadres in.'
      if (f.phone.replace(/\D/g, '').length < 8) e.phone = 'Vul een telefoonnummer in zodat we u kunnen bellen.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => validate(step) && setStep(step + 1)

  const submit = (e) => {
    e.preventDefault()
    if (!validate(3)) return
    const subject = `Offerteaanvraag — ${needLabels.join(', ')} — ${f.location}`
    const body = [
      'OFFERTEAANVRAAG VIA WEBSITE',
      '',
      `Producten: ${needLabels.join(', ')}`,
      `Hoeveelheden / details: ${f.qty || '—'}`,
      '',
      `Type project: ${f.type || '—'}`,
      `Locatie werf: ${f.location}`,
      `Timing: ${f.timing || '—'}`,
      `Plannen beschikbaar: ${f.plans ? 'ja (in bijlage)' : 'nee'}`,
      `Opmerkingen: ${f.notes || '—'}`,
      '',
      `Naam: ${f.name}`,
      `Bedrijf: ${f.company || '—'}`,
      `Rol: ${f.role || '—'}`,
      `E-mail: ${f.email}`,
      `Telefoon: ${f.phone}`,
    ].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <section className="section quote-done">
        <div className="wrap narrow">
          <span className="done-check" aria-hidden="true">✓</span>
          <h1 className="h2">Bedankt, {f.name.split(' ')[0]}!</h1>
          <p className="lead-dark">
            Uw e-mailprogramma opende een bericht met uw aanvraag aan {site.email}.{' '}
            {f.plans && <strong>Vergeet uw plannen niet als bijlage toe te voegen. </strong>}
            Na verzending nemen we zo snel mogelijk contact met u op.
          </p>
          <p>
            Opende er geen e-mail? Mail ons rechtstreeks op <a href={`mailto:${site.email}`}>{site.email}</a> of bel{' '}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
          <div className="hero-actions">
            <Link to="/" className="btn btn-outline">Terug naar home</Link>
            <Link to="/technische-info" className="btn btn-primary">Technische fiches bekijken</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section quote">
      <div className="wrap quote-grid">
        <div>
          <Eyebrow>Offerte aanvragen</Eyebrow>
          <h1 className="h2">Vertel ons wat u bouwt</h1>
          <p className="section-intro">Drie korte stappen. We bekijken uw aanvraag en stellen de juiste elementen voor.</p>

          <ol className="stepper" aria-label="Stappen">
            {['Producten', 'Project', 'Contact'].map((s, i) => (
              <li key={s} className={step === i + 1 ? 'is-current' : step > i + 1 ? 'is-done' : ''}>
                <span className="mono">{i + 1}</span> {s}
              </li>
            ))}
          </ol>

          <form className="quote-form" onSubmit={submit} noValidate>
            {step === 1 && (
              <div className="qstep">
                <fieldset>
                  <legend className="field-label">Waarvoor wenst u een offerte?</legend>
                  <div className="choice-grid">
                    {needOptions.map((o) => (
                      <button
                        type="button"
                        key={o.key}
                        className={`choice ${f.needs.includes(o.key) ? 'is-on' : ''}`}
                        aria-pressed={f.needs.includes(o.key)}
                        onClick={() => toggleNeed(o.key)}
                      >
                        <strong>{o.label}</strong>
                        <span>{o.hint}</span>
                      </button>
                    ))}
                  </div>
                  {errors.needs && <p className="err">{errors.needs}</p>}
                </fieldset>
                <label className="field">
                  <span className="field-label">
                    Type, hoeveelheden of afmetingen <span className="field-hint">optioneel</span>
                  </span>
                  <textarea
                    rows={4}
                    value={f.qty}
                    onChange={(e) => set('qty', e.target.value)}
                    placeholder="bv. ± 120 m² vloer, overspanning 4,8 m — of 600 Pauli 14"
                  />
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="qstep">
                <div className="field-row">
                  <label className="field">
                    <span className="field-label">Type project</span>
                    <select value={f.type} onChange={(e) => set('type', e.target.value)}>
                      <option value="">Kies…</option>
                      {projectTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span className="field-label">Gemeente of postcode werf *</span>
                    <input value={f.location} onChange={(e) => set('location', e.target.value)} placeholder="bv. 3500 Hasselt" />
                    {errors.location && <span className="err">{errors.location}</span>}
                  </label>
                </div>
                <fieldset>
                  <legend className="field-label">Wanneer heeft u de producten nodig?</legend>
                  <div className="chips">
                    {timings.map((t) => (
                      <button type="button" key={t} className={`chip ${f.timing === t ? 'is-on' : ''}`} aria-pressed={f.timing === t} onClick={() => set('timing', t)}>
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <label className="check">
                  <input type="checkbox" checked={f.plans} onChange={(e) => set('plans', e.target.checked)} />
                  <span>
                    Ik heb plannen beschikbaar
                    <small>U voegt ze als bijlage toe aan de e-mail die opent bij het verzenden.</small>
                  </span>
                </label>
                <label className="field">
                  <span className="field-label">
                    Opmerkingen <span className="field-hint">optioneel</span>
                  </span>
                  <textarea rows={3} value={f.notes} onChange={(e) => set('notes', e.target.value)} placeholder="Bereikbaarheid werf, gewenste leverdatum, …" />
                </label>
              </div>
            )}

            {step === 3 && (
              <div className="qstep">
                <fieldset>
                  <legend className="field-label">U bent</legend>
                  <div className="chips">
                    {roles.map((r) => (
                      <button type="button" key={r} className={`chip ${f.role === r ? 'is-on' : ''}`} aria-pressed={f.role === r} onClick={() => set('role', r)}>
                        {r}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="field-row">
                  <label className="field">
                    <span className="field-label">Naam *</span>
                    <input value={f.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" />
                    {errors.name && <span className="err">{errors.name}</span>}
                  </label>
                  <label className="field">
                    <span className="field-label">
                      Bedrijf <span className="field-hint">optioneel</span>
                    </span>
                    <input value={f.company} onChange={(e) => set('company', e.target.value)} autoComplete="organization" />
                  </label>
                </div>
                <div className="field-row">
                  <label className="field">
                    <span className="field-label">E-mail *</span>
                    <input type="email" value={f.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </label>
                  <label className="field">
                    <span className="field-label">Telefoon *</span>
                    <input type="tel" value={f.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" />
                    {errors.phone && <span className="err">{errors.phone}</span>}
                  </label>
                </div>
              </div>
            )}

            <div className="qnav">
              {step > 1 ? (
                <button type="button" className="btn btn-outline" onClick={() => setStep(step - 1)}>
                  ← Vorige
                </button>
              ) : (
                <span />
              )}
              {/* aparte keys: anders wordt de 'Volgende'-knop tijdens de klik een submitknop */}
              {step < 3 ? (
                <button key="next" type="button" className="btn btn-primary" onClick={next}>
                  Volgende →
                </button>
              ) : (
                <button key="submit" type="submit" className="btn btn-primary">
                  Offerte aanvragen →
                </button>
              )}
            </div>
          </form>
        </div>

        <aside className="quote-aside">
          <div className="summary">
            <span className="eyebrow eyebrow--plain">Uw aanvraag</span>
            <dl>
              <div>
                <dt>Producten</dt>
                <dd>{needLabels.length ? needLabels.join(', ') : <span className="muted">nog niets gekozen</span>}</dd>
              </div>
              {f.qty && (
                <div>
                  <dt>Details</dt>
                  <dd className="pre">{f.qty}</dd>
                </div>
              )}
              {f.location && (
                <div>
                  <dt>Werf</dt>
                  <dd>{f.location}</dd>
                </div>
              )}
              {f.timing && (
                <div>
                  <dt>Timing</dt>
                  <dd>{f.timing}</dd>
                </div>
              )}
            </dl>
          </div>
          <div className="aside-contact">
            <strong>Liever meteen iemand spreken?</strong>
            <a href={site.phoneHref} className="btn btn-outline">
              <PhoneIcon /> {site.phone}
            </a>
            <ul className="checklist checklist--small">
              <li>Vrijblijvend voorstel</li>
              <li>Rechtstreeks van de fabrikant</li>
              <li>BENOR- en CE-gecertificeerd</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
