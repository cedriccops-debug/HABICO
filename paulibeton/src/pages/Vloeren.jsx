import { Link } from 'react-router-dom'
import Slab from '../components/Slab'
import Vloerkiezer from '../components/Vloerkiezer'
import DruklaagTable from '../components/DruklaagTable'
import { FloorCard } from '../components/ProductCard'
import { CtaBand, Eyebrow, Faq, PageHero } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { families, floors, findProduct, fmt } from '../data/products'
import { faqFloors } from '../data/faq'

const gewapend = floors.filter((f) => f.family === 'gewapend')
const voorgespannen = floors.filter((f) => f.family === 'voorgespannen')

function SpecTable({ items }) {
  return (
    <div className="table-scroll">
      <table className="spec-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Onderzijde</th>
            <th>Dikte × breedte</th>
            <th>Eigen gewicht</th>
            <th>Vulbeton</th>
            <th>Max. lengte</th>
            <th>Lengte</th>
            <th>Passtukken</th>
            <th>Brandweerstand</th>
            <th>Fiche</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p) => (
            <tr key={p.slug}>
              <td>
                <Link to={`/producten/${p.slug}`} className="mono strong-link">
                  {p.code}
                </Link>
              </td>
              <td>{p.underside}</td>
              <td className="mono">{p.thickness} × {p.width} cm</td>
              <td>{p.weight ? `${p.weight} kg/m²` : '—'}</td>
              <td>{p.fill ? `${p.fill} l/m²` : '—'}</td>
              <td>{p.maxLength ? `${fmt(p.maxLength, p.maxLength % 1 ? 2 : 0)} m` : 'op aanvraag'}</td>
              <td>{p.lengthStep}</td>
              <td>{p.fitPieces || '—'}</td>
              <td>{p.fire || '—'}</td>
              <td>
                {p.pdf ? (
                  <a href={p.pdf} target="_blank" rel="noreferrer" className="pdf-link">
                    PDF
                  </a>
                ) : (
                  <span className="muted">op aanvraag</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Vloeren() {
  usePageMeta(
    'Welfsels — gewapend en voorgespannen',
    'Gewapende welfsels WPG/WPR 13 en 16 cm en voorgespannen welfsels VVP 16, 20 en 26 cm tot 10 m. Druklaagtabel, vloerkiezer en technische fiches.',
  )
  return (
    <>
      <PageHero
        eyebrow="Vloerelementen"
        title="Welfsels voor elke overspanning"
        crumbs={[{ label: 'Vloeren' }]}
        aside={<Slab product={findProduct('vvp-16-120')} depth={220} dims={false} className="hero-slab" />}
      >
        <p className="lead">
          Holle vloerelementen in gewapend en voorgespannen beton, van de kelder van een woning tot een kantoorvloer van
          10 meter. BENOR-gecertificeerd en op maat gemaakt in Hoeselt.
        </p>
        <nav className="anchor-nav" aria-label="Op deze pagina">
          <a href="#gewapend">Gewapend</a>
          <a href="#voorgespannen">Voorgespannen</a>
          <a href="#vloerkiezer">Vloerkiezer</a>
          <a href="#druklagen">Druklagen</a>
          <a href="#faq">FAQ</a>
        </nav>
      </PageHero>

      <section className="section" id="gewapend">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow>WPG · WPR</Eyebrow>
              <h2 className="h2">{families.gewapend.title}</h2>
            </div>
            <p className="section-intro">{families.gewapend.intro}</p>
          </div>

          <div className="compare-2">
            <div className="compare-card">
              <Slab product={findProduct('wpr-16-60')} depth={0} />
              <div>
                <h3 className="h4">Ruwe onderzijde — WPR</h3>
                <p>Voor plafonds die nadien bepleisterd worden. De ruwe structuur zorgt voor een goede hechting.</p>
              </div>
            </div>
            <div className="compare-card">
              <Slab product={findProduct('wpg-16-60')} depth={0} />
              <div>
                <h3 className="h4">Gladde onderzijde — WPG</h3>
                <p>Uitermate geschikt voor kelders en ruimtes waar de vloer nadien zichtbaar blijft.</p>
              </div>
            </div>
          </div>

          <div className="pgrid">
            {gewapend.map((p) => (
              <FloorCard key={p.slug} p={p} />
            ))}
          </div>
          <SpecTable items={gewapend} />
        </div>
      </section>

      <section className="section section-concrete" id="voorgespannen">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow>VVP</Eyebrow>
              <h2 className="h2">{families.voorgespannen.title}</h2>
            </div>
            <p className="section-intro">{families.voorgespannen.intro}</p>
          </div>
          <ul className="benefits">
            <li><strong>Tot 10 m</strong> overspanning met VVP 20</li>
            <li><strong>Lengte per cm</strong> minder zaagwerk op de werf</li>
            <li><strong>120 cm breed</strong> minder elementen, sneller gelegd</li>
            <li><strong>Rf 1 – 2 uur</strong> brandweerstand</li>
          </ul>
          <div className="pgrid pgrid--5">
            {voorgespannen.map((p) => (
              <FloorCard key={p.slug} p={p} />
            ))}
          </div>
          <SpecTable items={voorgespannen} />
        </div>
      </section>

      <section className="section section-dark" id="vloerkiezer">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow light>Vloerkiezer</Eyebrow>
              <h2 className="h2">Vind het juiste element in 10 seconden</h2>
            </div>
            <p className="section-intro">
              Elementlengte, nuttige last en afwerking van het plafond: meer hebben we niet nodig voor een eerste
              voorstel.
            </p>
          </div>
          <Vloerkiezer />
        </div>
      </section>

      <section className="section" id="druklagen">
        <div className="wrap druk-grid">
          <div>
            <Eyebrow>Druklagen</Eyebrow>
            <h2 className="h2">Tabel met druklagen</h2>
            <p className="section-intro">
              Vereiste druklaag in cm voor gewapende welfsels WPG en WPR, per elementlengte en nuttige last. Opgesteld
              volgens PTV 201 Probeton BENOR met een toegelaten doorbuiging van 1/800.
            </p>
            <a href="/docs/Druklagentabel-WPG-WPR.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              Download als PDF
            </a>
          </div>
          <DruklaagTable />
        </div>
      </section>

      <section className="section section-concrete" id="faq">
        <div className="wrap faq-grid">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="h2">Vragen over welfsels</h2>
          </div>
          <Faq items={faqFloors} />
        </div>
      </section>

      <CtaBand title="Uw vloer uitgerekend?" text="Stuur ons uw plannen. We stellen de juiste elementen, lengtes en passtukken voor en bezorgen u een offerte." />
    </>
  )
}
