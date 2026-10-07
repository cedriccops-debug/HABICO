import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import DruklaagTable from '../components/DruklaagTable'
import { CtaBand, Eyebrow, Icon, PageHero } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { allProducts, families } from '../data/products'
import { site } from '../data/site'

const docs = [
  ...allProducts
    .filter((p) => p.pdf)
    .map((p) => ({
      title: `${p.code}${p.name ? ` — ${p.name}` : ''}`,
      cat: p.family,
      desc: 'thickness' in p ? `${p.thickness} × ${p.width} cm · onderzijde ${p.underside.toLowerCase()}` : `${p.dims.join(' × ')} mm`,
      href: p.pdf,
      page: `/producten/${p.slug}`,
    })),
  {
    title: 'Tabel met druklagen WPG + WPR',
    cat: 'tabellen',
    desc: '13/60 en 16/60 · 350 en 650 kg/m² · PTV 201',
    href: '/docs/Druklagentabel-WPG-WPR.pdf',
  },
]

const filters = [
  { key: 'alle', label: 'Alle' },
  { key: 'gewapend', label: families.gewapend.title },
  { key: 'voorgespannen', label: families.voorgespannen.title },
  { key: 'beton', label: families.beton.title },
  { key: 'pauli', label: families.pauli.title },
  { key: 'tabellen', label: 'Tabellen' },
]

const certs = [
  {
    name: 'BENOR',
    scope: 'Holle geprefabriceerde vloerelementen',
    text: 'Productcertificatie door Probeton volgens PTV 201, met inbegrip van de gebruikskenmerken. Productiezetel Hoeselt.',
  },
  {
    name: 'CE · EN 1168',
    scope: 'Holle vloerplaten',
    text: 'Productiecontrole in de fabriek gecertificeerd door Probeton (aangemelde instantie 1176).',
  },
  {
    name: 'CE · NBN EN 771-3',
    scope: 'Metselstenen van beton',
    text: 'Betonblokken en Pauli-blokken: categorie I, maatafwijkingsklasse D1, brandreactie Euroklasse A1.',
  },
]

export default function TechnischeInfo() {
  usePageMeta(
    'Technische info & downloads',
    'Download alle technische fiches van Pauli Beton: welfsels WPG, WPR, VVP, betonblokken en Pauli-blokken, plus de druklaagtabel.',
  )
  const [filter, setFilter] = useState('alle')
  const [q, setQ] = useState('')

  const list = useMemo(
    () =>
      docs.filter(
        (d) =>
          (filter === 'alle' || d.cat === filter) &&
          (!q || `${d.title} ${d.desc}`.toLowerCase().includes(q.toLowerCase())),
      ),
    [filter, q],
  )

  return (
    <>
      <PageHero eyebrow="Downloads" title="Technische info" crumbs={[{ label: 'Technische info' }]}>
        <p className="lead">
          Alle technische fiches, tabellen en certificeringen op één plek. Voor architecten, ingenieurs en aannemers die
          snel zekerheid willen.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="doc-toolbar">
            <div className="chips" role="tablist" aria-label="Filter op productgroep">
              {filters.map((f) => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={filter === f.key}
                  className={`chip ${filter === f.key ? 'is-on' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <input
              type="search"
              className="doc-search"
              placeholder="Zoek op type, bv. VVP 20"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Zoek in documenten"
            />
          </div>

          <ul className="doc-list">
            {list.map((d) => (
              <li key={d.href} className="doc">
                <Icon name="doc" />
                <div className="doc-main">
                  <strong>{d.title}</strong>
                  <span>{d.desc}</span>
                </div>
                {d.page && (
                  <Link to={d.page} className="link-arrow doc-page">
                    Productpagina
                  </Link>
                )}
                <a href={d.href} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                  PDF ↓
                </a>
              </li>
            ))}
            {list.length === 0 && <li className="doc doc--empty">Geen documenten gevonden.</li>}
          </ul>
        </div>
      </section>

      <section className="section section-concrete" id="certificaten">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Kwaliteit</Eyebrow>
              <h2 className="h2">Certificering</h2>
            </div>
            <p className="section-intro">
              Onze productie staat onder extern toezicht. De actuele certificaten bezorgen we u graag op aanvraag via{' '}
              <a href={`mailto:${site.email}?subject=Aanvraag certificaten`}>{site.email}</a>.
            </p>
          </div>
          <div className="cert-grid">
            {certs.map((c) => (
              <div key={c.name} className="cert">
                <span className="badge-cert badge-cert--lg">{c.name}</span>
                <h3 className="h4">{c.scope}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="druklagen">
        <div className="wrap druk-grid">
          <div>
            <Eyebrow>Tabellen</Eyebrow>
            <h2 className="h2">Druklagen gewapende welfsels</h2>
            <p className="section-intro">
              Of gebruik de <Link to="/vloeren#vloerkiezer">vloerkiezer</Link> om meteen het juiste element te vinden.
            </p>
          </div>
          <DruklaagTable />
        </div>
      </section>

      <CtaBand title="Een technische vraag?" text="Onze mensen kennen elk element tot in de details. Bel of mail ons — of stuur uw plannen voor een voorstel op maat." />
    </>
  )
}
