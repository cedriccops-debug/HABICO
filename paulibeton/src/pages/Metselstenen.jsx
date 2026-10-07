import { Link } from 'react-router-dom'
import Block from '../components/Block'
import BlockCalculator from '../components/BlockCalculator'
import { BlockCard } from '../components/ProductCard'
import { CtaBand, Eyebrow, Faq, Icon, PageHero } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { blocks, blockCommon, families, fmt } from '../data/products'
import { faqBlocks } from '../data/faq'

const beton = blocks.filter((b) => b.family === 'beton')
const pauli = blocks.filter((b) => b.family === 'pauli')

function weightBars() {
  return [9, 14, 19].map((t) => {
    const b = beton.find((x) => x.dims[1] === t * 10)
    const p = pauli.find((x) => x.dims[1] === t * 10)
    return { t, b, p, saving: Math.round((1 - p.weight / b.weight) * 100) }
  })
}

export default function Metselstenen() {
  usePageMeta(
    'Metselstenen — betonblokken en Pauli-blokken met Liapor',
    'Holle betonblokken voor dragend metselwerk en isolerende Pauli-blokken met 60% Liapor: tot 33% lichter. CE volgens NBN EN 771-3, Euroklasse A1.',
  )
  const bars = weightBars()
  const max = Math.max(...bars.map((x) => x.b.weight))

  return (
    <>
      <PageHero
        eyebrow="Metselstenen"
        title="Blokken voor dragend én isolerend metselwerk"
        crumbs={[{ label: 'Metselstenen' }]}
        aside={
          <div className="hero-blocks">
            <Block block={blocks[2]} dims={false} />
            <Block block={blocks[6]} dims={false} />
          </div>
        }
      >
        <p className="lead">
          Sinds 1954 het eerste product van Pauli. Holle betonblokken voor sterk dragend metselwerk, en Pauli-blokken
          met Liapor voor lichter bouwen met betere isolatie.
        </p>
        <nav className="anchor-nav" aria-label="Op deze pagina">
          <a href="#pauli">Pauli-blokken</a>
          <a href="#beton">Betonblokken</a>
          <a href="#vergelijk">Vergelijken</a>
          <a href="#berekening">Berekening</a>
          <a href="#faq">FAQ</a>
        </nav>
      </PageHero>

      <section className="section" id="pauli">
        <div className="wrap liapor">
          <div>
            <Eyebrow>Pauli-blok · Liapor</Eyebrow>
            <h2 className="h2">{families.pauli.title}: licht, isolerend en sterk</h2>
            <p className="section-intro">
              Onze Pauli-blokken bestaan voor 60% uit Liapor: geëxpandeerde kleikorrels, aangevuld met natuurlijke
              granulaten en cement. De luchtrijke korrels maken de steen lichter en zorgen voor uitstekende thermische en
              akoestische eigenschappen — met behoud van een grote druksterkte.
            </p>
            <div className="usp-mini">
              <div><Icon name="feather" /><strong>Tot 33% lichter</strong><span>dan een betonblok van dezelfde maat</span></div>
              <div><Icon name="leaf" /><strong>Thermisch isolerend</strong><span>dankzij 60% Liapor-korrels</span></div>
              <div><Icon name="sound" /><strong>Akoestisch</strong><span>geluiddempend metselwerk</span></div>
              <div><Icon name="fire" /><strong>Euroklasse A1</strong><span>onbrandbaar</span></div>
            </div>
          </div>
          <div className="weight-chart" aria-label="Gewichtsvergelijking per blok">
            <span className="eyebrow eyebrow--plain">Gewicht per blok (droog)</span>
            {bars.map(({ t, b, p, saving }) => (
              <div key={t} className="wc-row">
                <span className="wc-label mono">{t} cm</span>
                <div className="wc-bars">
                  <div className="wc-bar wc-bar--beton" style={{ width: `${(b.weight / max) * 100}%` }}>
                    <span>Beton {fmt(b.weight, b.weight % 1 ? 1 : 0)} kg</span>
                  </div>
                  <div className="wc-bar wc-bar--pauli" style={{ width: `${(p.weight / max) * 100}%` }}>
                    <span>Pauli {fmt(p.weight)} kg</span>
                  </div>
                </div>
                <span className="wc-save">−{saving}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="wrap">
          <div className="pgrid pgrid--3">
            {pauli.map((b) => (
              <BlockCard key={b.slug} b={b} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-concrete" id="beton">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Betonblok</Eyebrow>
              <h2 className="h2">{families.beton.title} voor dragend metselwerk</h2>
            </div>
            <p className="section-intro">
              Holle betonblokken in vier diktes, geschikt voor alle types metselwerk. Maatvast (klasse D1) en met een
              karakteristieke druksterkte tot 8 N/mm².
            </p>
          </div>
          <div className="pgrid">
            {beton.map((b) => (
              <BlockCard key={b.slug} b={b} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="vergelijk">
        <div className="wrap">
          <Eyebrow>Vergelijken</Eyebrow>
          <h2 className="h2">Alle metselstenen naast elkaar</h2>
          <div className="table-scroll">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Fabricagematen (mm)</th>
                  <th>Gewicht</th>
                  <th>
                    f<sub>k</sub> karakteristiek
                  </th>
                  <th>
                    f<sub>b</sub> genormaliseerd
                  </th>
                  <th>Volumemassa</th>
                  <th>Vochtgedrag</th>
                  <th>Fiche</th>
                </tr>
              </thead>
              <tbody>
                {[...pauli, ...beton].map((b) => (
                  <tr key={b.slug}>
                    <td>
                      <Link to={`/producten/${b.slug}`} className="mono strong-link">
                        {b.code}
                      </Link>
                    </td>
                    <td className="mono">{b.dims.join(' × ')}</td>
                    <td>{fmt(b.weight, b.weight % 1 ? 1 : 0)} kg</td>
                    <td>{fmt(b.fk, b.fk % 1 ? 1 : 0)} N/mm²</td>
                    <td>{fmt(b.fb, b.fb % 1 ? 1 : 0)} N/mm²</td>
                    <td>{fmt(b.density)} kg/m³</td>
                    <td>{fmt(b.moisture, 2)} mm/m</td>
                    <td>
                      <a href={b.pdf} target="_blank" rel="noreferrer" className="pdf-link">
                        PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note">
            Alle blokken: {blockCommon.standard} · categorie {blockCommon.category} · maatafwijkingsklasse{' '}
            {blockCommon.tolerance} · {blockCommon.fireClass}. Druksterktes bepaald 14 dagen na aanbrengen van de
            mortellaag. Vorst/dooi: {blockCommon.frost.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="section section-dark" id="berekening">
        <div className="wrap">
          <div className="section-head">
            <div>
              <Eyebrow light>Blokkenberekening</Eyebrow>
              <h2 className="h2">Hoeveel blokken heb ik nodig?</h2>
            </div>
            <p className="section-intro">
              Geef de afmetingen van uw muur in en kies een bloktype. U ziet meteen het aantal blokken en het totale
              gewicht.
            </p>
          </div>
          <BlockCalculator />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap faq-grid">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="h2">Vragen over metselstenen</h2>
          </div>
          <Faq items={faqBlocks} />
        </div>
      </section>

      <CtaBand title="Blokken nodig voor uw project?" text="Geef ons het type en de hoeveelheid door — of stuur de plannen, dan rekenen wij mee." />
    </>
  )
}
