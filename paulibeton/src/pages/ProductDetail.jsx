import { Link, useParams } from 'react-router-dom'
import Slab from '../components/Slab'
import Block from '../components/Block'
import DruklaagTable from '../components/DruklaagTable'
import { FloorCard, BlockCard } from '../components/ProductCard'
import { CtaBand, Eyebrow, PageHero } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { allProducts, blockCommon, families, findProduct, fmt } from '../data/products'
import NotFound from './NotFound'

const benefits = {
  gewapend: [
    'Zelfdragend element: geen bekisting nodig',
    'Leverbaar voor 350 en 650 kg/m² nuttige last',
    'Lengte per 10 cm, passtukken van 30, 40 en 50 cm',
    'BENOR-gecertificeerd volgens PTV 201',
  ],
  voorgespannen: [
    'Grote overspanningen met een slanke vloer',
    'Gladde onderzijde, zichtbaar te laten',
    'Op lengte gemaakt tot op de centimeter',
    'Brandweerstand van 1 tot 2 uur',
  ],
  beton: [
    'Geschikt voor alle types dragend metselwerk',
    'Maatvast: maatafwijkingsklasse D1',
    'Onbrandbaar: Euroklasse A1',
    'CE-gemarkeerd volgens NBN EN 771-3',
  ],
  pauli: [
    '60% Liapor: lichter bouwen, minder last op de fundering',
    'Uitstekende thermische en akoestische eigenschappen',
    'Onbrandbaar: Euroklasse A1',
    'CE-gemarkeerd volgens NBN EN 771-3',
  ],
}

function floorSpecs(p) {
  return [
    ['Type', `Holle welfsels in ${p.family} beton`],
    ['Onderzijde', p.underside],
    ['Dikte', `${p.thickness} cm`],
    ['Breedte', `${p.width} cm`],
    ['Eigen gewicht', p.weight && `${p.weight} kg/m²`],
    ['Vulbeton', p.fill && `${p.fill} l/m²`],
    ['Max. lengte', p.maxLength && `${fmt(p.maxLength, p.maxLength % 1 ? 2 : 0)} m`],
    ['Lengte', p.lengthStep],
    ['Passtukken', p.fitPieces],
    ['Brandweerstand', p.fire],
    ['Nuttige last', p.loads && p.loads.map((l) => `${l} kg/m²`).join(' of ')],
  ].filter(([, v]) => v)
}

function blockSpecs(b) {
  return [
    ['Benaming', b.family === 'pauli' ? 'Holle Pauli-blok (isolerend)' : 'Holle betonblok (dragend)'],
    ['Fabricagematen', `${b.dims.join(' × ')} mm`],
    ['Gewicht', `${fmt(b.weight, b.weight % 1 ? 1 : 0)} kg (droog)`],
    ['Karakteristieke druksterkte', `${fmt(b.fk, b.fk % 1 ? 1 : 0)} N/mm²`],
    ['Genormaliseerde gem. druksterkte', `${fmt(b.fb, b.fb % 1 ? 1 : 0)} N/mm²`],
    ['Droge gem. volumemassa', `${fmt(b.density)} kg/m³`],
    ['Vochtgedrag', `${fmt(b.moisture, 2)} mm/m`],
    ['Categorie', blockCommon.category],
    ['Maatafwijkingsklasse', blockCommon.tolerance],
    ['Brandreactie', blockCommon.fireClass],
    ['Vorst/dooi', blockCommon.frost],
    ['Norm', blockCommon.standard],
  ]
}

export default function ProductDetail() {
  const { slug } = useParams()
  const p = findProduct(slug)
  const isFloor = p && 'thickness' in p
  usePageMeta(
    p ? `${p.code}${isFloor ? ` — ${p.name}` : ''}` : 'Product niet gevonden',
    p &&
      (isFloor
        ? `${p.code}: holle welfsels in ${p.family} beton, ${p.thickness} × ${p.width} cm${p.maxLength ? `, tot ${fmt(p.maxLength, 1)} m` : ''}. Technische fiche en offerte bij Pauli Beton.`
        : `${p.code}: ${p.dims.join(' × ')} mm, ${p.weight} kg, ${p.fk} N/mm². Technische fiche en offerte bij Pauli Beton.`),
  )
  if (!p) return <NotFound />

  const fam = families[p.family]
  const familyAnchor = isFloor ? `/vloeren#${p.family}` : `/metselstenen#${p.family}`
  const specs = isFloor ? floorSpecs(p) : blockSpecs(p)
  const related = allProducts.filter((x) => x.family === p.family && x.slug !== p.slug)

  return (
    <>
      <PageHero
        eyebrow={fam.title}
        title={
          <>
            <span className="mono h1-code">{p.code}</span>
            {isFloor ? p.name : p.family === 'pauli' ? 'Holle Pauli-blok' : 'Holle betonblok'}
          </>
        }
        crumbs={[
          { label: isFloor ? 'Vloeren' : 'Metselstenen', to: isFloor ? '/vloeren' : '/metselstenen' },
          { label: fam.title, to: familyAnchor },
          { label: p.code },
        ]}
      >
        <p className="lead">{fam.intro}</p>
        <div className="hero-actions">
          <Link to={`/offerte?product=${p.slug}`} className="btn btn-primary btn-lg">
            Offerte voor {p.code} →
          </Link>
          {p.pdf ? (
            <a href={p.pdf} target="_blank" rel="noreferrer" className="btn btn-ghost-light btn-lg">
              Technische fiche (PDF)
            </a>
          ) : (
            <Link to={`/contact?onderwerp=${encodeURIComponent(`Technische fiche ${p.code}`)}`} className="btn btn-ghost-light btn-lg">
              Fiche aanvragen
            </Link>
          )}
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap detail-grid">
          <div className="detail-visual">
            <div className="drawing-card">
              <span className="drawing-label mono">Schematische weergave · maten in {isFloor ? 'cm' : 'mm'}</span>
              {isFloor ? <Slab product={p} depth={0} /> : <Block block={p} />}
            </div>
            {isFloor && (
              <div className="drawing-card drawing-card--soft">
                <Slab product={p} depth={260} dims={false} />
              </div>
            )}
          </div>
          <div>
            <Eyebrow>Technische gegevens</Eyebrow>
            <h2 className="h3">
              {p.code} in cijfers
            </h2>
            {p.onRequest && (
              <p className="notice">
                Voor de VVP 26/120 stellen we de technische gegevens op maat van uw project op. Neem contact op voor de
                fiche en een berekening.
              </p>
            )}
            <dl className="spec-list">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <ul className="checklist">
              {benefits[p.family].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.family === 'gewapend' && (
        <section className="section section-concrete">
          <div className="wrap druk-grid">
            <div>
              <Eyebrow>Druklagen</Eyebrow>
              <h2 className="h2">Druklaag voor {p.thickness}/60</h2>
              <p className="section-intro">
                Vereiste druklaag per elementlengte, voor WPG en WPR {p.thickness}/60. Twijfelt u? Gebruik de{' '}
                <Link to="/vloeren#vloerkiezer">vloerkiezer</Link> of vraag het ons.
              </p>
            </div>
            <DruklaagTable only={p.thickness} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <Eyebrow>Ook in dit gamma</Eyebrow>
            <h2 className="h2">Andere {fam.title.toLowerCase()}</h2>
            <div className="pgrid">
              {related.slice(0, 4).map((r) => (isFloor ? <FloorCard key={r.slug} p={r} /> : <BlockCard key={r.slug} b={r} />))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Prijs voor ${p.code}?`} text="Geef ons de hoeveelheden of stuur uw plannen door. U krijgt een offerte op maat van uw project." />
    </>
  )
}
