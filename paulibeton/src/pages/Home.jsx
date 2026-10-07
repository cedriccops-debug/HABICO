import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SlabStack } from '../components/Slab'
import Slab from '../components/Slab'
import Block from '../components/Block'
import Vloerkiezer from '../components/Vloerkiezer'
import { CtaBand, Eyebrow, Faq, Icon } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { families, findProduct, blocks } from '../data/products'
import { site, yearsActive } from '../data/site'
import { faqHome } from '../data/faq'

const stats = [
  { value: site.founded, label: 'Opgericht in Munsterbilzen', mono: true },
  { value: '10 m', label: 'Max. lengte voorgespannen welfsels' },
  { value: '−33%', label: 'Gewicht Pauli-blok t.o.v. betonblok' },
  { value: 'BE · NL · FR', label: 'Leveringsgebied' },
]

const range = [
  {
    fam: families.gewapend,
    to: '/vloeren#gewapend',
    art: <Slab product={findProduct('wpr-13-60')} depth={170} dims={false} />,
    facts: ['13 & 16 cm', 'ruw of glad', '350 / 650 kg/m²'],
  },
  {
    fam: families.voorgespannen,
    to: '/vloeren#voorgespannen',
    art: <Slab product={findProduct('vvp-20-120')} depth={170} dims={false} />,
    facts: ['16 · 20 · 26 cm', '60 & 120 cm breed', 'tot 10 m'],
  },
  {
    fam: families.beton,
    to: '/metselstenen#beton',
    art: <Block block={blocks[2]} dims={false} />,
    facts: ['9 · 14 · 19 · 29 cm', 'tot 8 N/mm²', 'Euroklasse A1'],
  },
  {
    fam: families.pauli,
    to: '/metselstenen#pauli',
    art: <Block block={blocks[5]} dims={false} />,
    facts: ['60% Liapor', 'thermisch & akoestisch', 'vanaf 8 kg'],
  },
]

const usps = [
  { icon: 'factory', title: 'Rechtstreeks van de fabrikant', text: 'Vloeren en blokken komen van één site in Hoeselt. Eén aanspreekpunt van offerte tot levering — zonder tussenschakels.' },
  { icon: 'ruler', title: 'Op maat, tot op de centimeter', text: 'Voorgespannen welfsels maken we op lengte per cm, gewapende per 10 cm. Met passtukken van 25 tot 85 cm sluit uw vloer naadloos.' },
  { icon: 'shield', title: 'Gecertificeerde kwaliteit', text: 'Vloerelementen onder BENOR volgens PTV 201 en CE volgens EN 1168. Metselstenen CE-gemarkeerd volgens NBN EN 771-3.' },
  { icon: 'cog', title: 'Moderne productie', text: 'Sinds 2012 een volledig nieuwe fabriek voor voorgespannen vloerelementen, naast onze geautomatiseerde blokkenproductie.' },
  { icon: 'fire', title: 'Brandveilig gebouwd', text: 'Voorgespannen vloeren met een brandweerstand van 1 tot 2 uur. Alle metselstenen zijn onbrandbaar: Euroklasse A1.' },
  { icon: 'hand', title: 'Persoonlijk contact', text: 'Bij ons bent u geen dossiernummer. U spreekt mensen die de fabriek en het product door en door kennen.' },
]

const audiences = {
  aannemer: {
    label: 'Aannemer',
    title: 'Snel en zonder verrassingen een vloer op de werf',
    points: [
      'Elementen op lengte geleverd, met passtukken om uw vloer sluitend te maken',
      'Druklaagtabel en technische fiches meteen beschikbaar',
      'Gewapende welfsels zelfdragend: geen bekisting nodig',
      'Vloeren en metselstenen bij één leverancier',
    ],
    cta: { to: '/offerte', label: 'Stuur uw plannen' },
  },
  architect: {
    label: 'Architect & ingenieur',
    title: 'Technische zekerheid vanaf het ontwerp',
    points: [
      'Overspanningen tot 10 m met voorgespannen elementen van 16, 20 en 26 cm',
      'Brandweerstand 1 tot 2 uur (voorgespannen), 30 min tot 1 uur (gewapend)',
      'Gladde onderzijde voor ruimtes die zichtbaar blijven',
      'Alle fiches als PDF, druklagen volgens PTV 201',
    ],
    cta: { to: '/technische-info', label: 'Naar de technische fiches' },
  },
  ontwikkelaar: {
    label: 'Projectontwikkelaar',
    title: 'Volume en planning in vertrouwde handen',
    points: [
      'Eigen productie in Hoeselt: korte lijnen voor planning en opvolging',
      'Breedtes van 120 cm voor sneller plaatsen bij grotere oppervlaktes',
      'Gecertificeerde kwaliteit (BENOR & CE) voor elk project',
      'Levering in België, Nederland en Frankrijk',
    ],
    cta: { to: '/contact', label: 'Plan een gesprek' },
  },
  particulier: {
    label: 'Bouwheer',
    title: 'Een stevige vloer en een goed geïsoleerde woning',
    points: [
      'Welfsels: de snelle, droge vloer voor uw woning of kelder',
      'Pauli-blokken met Liapor: licht, isolerend en geluiddempend',
      'Bereken zelf hoeveel blokken u nodig hebt',
      'Vraag vrijblijvend advies — samen met uw aannemer of architect',
    ],
    cta: { to: '/metselstenen#berekening', label: 'Bereken uw blokken' },
  },
}

const steps = [
  { n: '01', title: 'Plannen doorsturen', text: 'Via het offerteformulier of per mail. Een schets met maten volstaat om te starten.' },
  { n: '02', title: 'Voorstel & offerte', text: 'We kiezen samen het juiste element, de lengtes, passtukken en eventuele druklaag.' },
  { n: '03', title: 'Productie in Hoeselt', text: 'Uw elementen worden op maat gemaakt in onze fabriek — voorgespannen tot op de cm.' },
  { n: '04', title: 'Levering op de werf', text: 'Wij leveren op uw werf in België, Nederland en Frankrijk, met onze eigen kraanwagen.' },
]

export default function Home() {
  usePageMeta(
    null,
    'Pauli Beton maakt gewapende en voorgespannen welfsels tot 10 m en isolerende Pauli-blokken met Liapor. BENOR & CE. Sinds 1954 in Hoeselt.',
  )
  const [aud, setAud] = useState('aannemer')
  const a = audiences[aud]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Eyebrow light>Prefab beton · Hoeselt · sinds {site.founded}</Eyebrow>
            <h1 className="display">
              Sterke vloeren.
              <br />
              Lichte blokken.
              <br />
              <span className="accent">Recht uit de fabriek.</span>
            </h1>
            <p className="lead">
              Gewapende en voorgespannen welfsels tot 10 meter, betonblokken en isolerende Pauli-blokken met Liapor.
              Gemaakt in Hoeselt, BENOR-gecertificeerd, geleverd in België, Nederland en Frankrijk.
            </p>
            <div className="hero-actions">
              <Link to="/offerte" className="btn btn-primary btn-lg">
                Vraag een offerte →
              </Link>
              <Link to="/vloeren#vloerkiezer" className="btn btn-ghost-light btn-lg">
                Welk welfsel past?
              </Link>
            </div>
            <ul className="hero-checks">
              <li>Elementen op maat tot op de cm</li>
              <li>Technische fiches direct downloadbaar</li>
              <li>{yearsActive} jaar ervaring in beton</li>
            </ul>
          </div>
          <div className="hero-visual">
            <SlabStack product={findProduct('vvp-20-120')} />
            <div className="hero-chip hero-chip--a">
              <span className="mono">VVP 20/120</span>
              <strong>Voorgespannen</strong>
            </div>
            <div className="hero-chip hero-chip--b">
              <span className="mono">Rf</span>
              <strong>1 – 2 uur</strong>
            </div>
            <div className="hero-chip hero-chip--c">
              <span className="mono">BENOR</span>
              <strong>PTV 201</strong>
            </div>
          </div>
        </div>
        <div className="wrap">
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* GAMMA */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Ons gamma</Eyebrow>
              <h2 className="h2">Twee productlijnen, één fabriek</h2>
            </div>
            <p className="section-intro">
              Van de vloerplaat tot de muur: alles wat we leveren, maken we zelf. Kies uw productfamilie of vraag ons
              meteen advies voor uw project.
            </p>
          </div>
          <div className="range-grid">
            {range.map((r) => (
              <Link key={r.to} to={r.to} className="range-card">
                <div className="range-art">{r.art}</div>
                <div className="range-body">
                  <h3 className="h3">{r.fam.title}</h3>
                  <p>{r.fam.intro}</p>
                  <ul className="facts">
                    {r.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <span className="link-arrow">Ontdek {r.fam.title.toLowerCase()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VLOERKIEZER */}
      <section className="section section-dark" id="vloerkiezer">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow light>Vloerkiezer</Eyebrow>
              <h2 className="h2">Welk welfsel past bij uw overspanning?</h2>
            </div>
            <p className="section-intro">
              Geef de lengte en belasting in. U ziet meteen welke elementen geschikt zijn en of er een druklaag nodig
              is — rechtstreeks uit onze technische tabellen.
            </p>
          </div>
          <Vloerkiezer />
        </div>
      </section>

      {/* WAAROM */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Waarom Pauli Beton</Eyebrow>
              <h2 className="h2">Gebouwd op beton — en op vertrouwen</h2>
            </div>
            <p className="section-intro">
              Al {yearsActive} jaar kiezen aannemers, architecten en bouwheren voor de combinatie van industriële
              precisie en de korte lijnen van een Limburgse fabriek.
            </p>
          </div>
          <div className="usp-grid">
            {usps.map((u) => (
              <div key={u.title} className="usp">
                <Icon name={u.icon} />
                <h3 className="h4">{u.title}</h3>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="section section-concrete">
        <div className="wrap">
          <Eyebrow>Voor wie</Eyebrow>
          <h2 className="h2">Wat kunnen we voor u doen?</h2>
          <div className="aud">
            <div className="aud-tabs" role="tablist" aria-label="Doelgroep">
              {Object.entries(audiences).map(([k, v]) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={aud === k}
                  className={`aud-tab ${aud === k ? 'is-on' : ''}`}
                  onClick={() => setAud(k)}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <div className="aud-panel" role="tabpanel">
              <h3 className="h3">{a.title}</h3>
              <ul className="checklist">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link to={a.cta.to} className="btn btn-primary">
                {a.cta.label} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Zo werken we</Eyebrow>
              <h2 className="h2">Van plan tot werf in vier stappen</h2>
            </div>
            <Link to="/offerte" className="btn btn-outline">
              Start met stap 1 →
            </Link>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n} className="step">
                <span className="step-n mono">{s.n}</span>
                <h3 className="h4">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FABRIEK */}
      <section className="section section-dark factory">
        <div className="wrap factory-grid">
          <div className="factory-copy">
            <Eyebrow light>Onze fabriek</Eyebrow>
            <h2 className="h2">Alles op één site in Hoeselt</h2>
            <p>
              In 1980 verhuisde Pauli van Munsterbilzen naar het industrieterrein van Hoeselt. Daar werden alle
              productielijnen gecentraliseerd en verregaand geautomatiseerd. In 2012 volgde een nagelnieuwe fabriek voor
              voorgespannen vloerelementen.
            </p>
            <p>
              Het resultaat: korte lijnen tussen productie, stock en levering — en een gamma dat aansluit bij de vraag
              van de bouwmarkt in de Benelux.
            </p>
            <Link to="/over-ons" className="btn btn-ghost-light">
              Ons verhaal →
            </Link>
          </div>
          <div className="mosaic">
            <figure className="m1">
              <img src="/img/levering-kraanwagen.jpg" alt="Pauli-vrachtwagen met kraan geladen met welfsels" loading="lazy" />
              <figcaption>Levering met eigen kraanwagen</figcaption>
            </figure>
            <figure className="m2">
              <img src="/img/werf-rolbrug.jpg" alt="Stockterrein met rolbrug en gestapelde welfsels" loading="lazy" />
              <figcaption>Stockterrein met rolbrug</figcaption>
            </figure>
            <figure className="m3">
              <img src="/img/stock-metselstenen.jpg" alt="Paletten met metselstenen" loading="lazy" />
              <figcaption>Metselstenen op stock</figcaption>
            </figure>
            <figure className="m4">
              <img src="/img/fabriek-hoeselt.jpg" alt="Productiehal Pauli Beton in Hoeselt met silo's" loading="lazy" />
              <figcaption>Productie in Hoeselt</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap faq-grid">
          <div>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
            <h2 className="h2">Goed om te weten</h2>
            <p className="section-intro">
              Staat uw vraag er niet bij? Bel ons op <a href={site.phoneHref}>{site.phone}</a> of mail naar{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <Faq items={faqHome} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
