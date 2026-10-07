import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Icon, PageHero } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { site } from '../data/site'

export default function Contact() {
  usePageMeta('Contact', `Contacteer Pauli Beton, ${site.street}, ${site.zip} ${site.city}. Tel. ${site.phone} — ${site.email}.`)
  const [params] = useSearchParams()
  const [f, setF] = useState({ name: '', email: '', phone: '', subject: params.get('onderwerp') || '', message: '' })
  const [error, setError] = useState('')
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || !f.message.trim()) {
      setError('Vul uw naam, een geldig e-mailadres en uw bericht in.')
      return
    }
    setError('')
    const body = `${f.message}\n\n—\n${f.name}\n${f.email}\n${f.phone}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(f.subject || 'Vraag via website')}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Spreek met de fabriek" crumbs={[{ label: 'Contact' }]}>
        <p className="lead">
          Een vraag over een product, een levering of een technisch detail? U krijgt meteen iemand aan de lijn die het
          antwoord kent.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-cards">
            <a href={site.phoneHref} className="ccard">
              <Icon name="phone" />
              <span>Telefoon</span>
              <strong>{site.phone}</strong>
            </a>
            <a href={`mailto:${site.email}`} className="ccard">
              <Icon name="mail" />
              <span>E-mail</span>
              <strong>{site.email}</strong>
            </a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="ccard">
              <Icon name="pin" />
              <span>Fabriek & kantoor</span>
              <strong>
                {site.street}, {site.zip} {site.city}
              </strong>
              <em>Route plannen ↗</em>
            </a>
            <div className="ccard ccard--accent">
              <span>Prijs nodig?</span>
              <strong>Gebruik ons offerteformulier</strong>
              <Link to="/offerte" className="btn btn-light btn-sm">
                Offerte aanvragen →
              </Link>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            <h2 className="h3">Stuur ons een bericht</h2>
            <div className="field-row">
              <label className="field">
                <span className="field-label">Naam *</span>
                <input value={f.name} onChange={set('name')} autoComplete="name" />
              </label>
              <label className="field">
                <span className="field-label">Telefoon</span>
                <input type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" />
              </label>
            </div>
            <label className="field">
              <span className="field-label">E-mail *</span>
              <input type="email" value={f.email} onChange={set('email')} autoComplete="email" />
            </label>
            <label className="field">
              <span className="field-label">Onderwerp</span>
              <input value={f.subject} onChange={set('subject')} />
            </label>
            <label className="field">
              <span className="field-label">Bericht *</span>
              <textarea rows={5} value={f.message} onChange={set('message')} />
            </label>
            {error && <p className="err">{error}</p>}
            <button type="submit" className="btn btn-primary">
              Verstuur bericht →
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
