import { Link } from 'react-router-dom'
import Slab from './Slab'
import Block from './Block'
import { fmt } from '../data/products'

export function FloorCard({ p }) {
  return (
    <Link to={`/producten/${p.slug}`} className="pcard">
      <div className="pcard-art">
        <Slab product={p} depth={150} dims={false} />
        <span className="pcard-code mono">{p.code}</span>
      </div>
      <div className="pcard-body">
        <h3 className="pcard-title">{p.name}</h3>
        <span className="pcard-sub">
          Onderzijde {p.underside.toLowerCase()} · {p.family}
        </span>
        <dl className="pcard-specs">
          <div><dt>Dikte</dt><dd>{p.thickness} cm</dd></div>
          <div><dt>Breedte</dt><dd>{p.width} cm</dd></div>
          <div><dt>Max. lengte</dt><dd>{p.maxLength ? `${fmt(p.maxLength, p.maxLength % 1 ? 2 : 0)} m` : 'op aanvraag'}</dd></div>
          <div><dt>Gewicht</dt><dd>{p.weight ? `${p.weight} kg/m²` : '—'}</dd></div>
        </dl>
        <span className="link-arrow">{p.onRequest ? 'Info op aanvraag' : 'Bekijk fiche'}</span>
      </div>
    </Link>
  )
}

export function BlockCard({ b }) {
  return (
    <Link to={`/producten/${b.slug}`} className="pcard">
      <div className="pcard-art pcard-art--block">
        <Block block={b} dims={false} />
        <span className="pcard-code mono">{b.code}</span>
      </div>
      <div className="pcard-body">
        <h3 className="pcard-title">{b.family === 'pauli' ? 'Holle Pauli-blok' : 'Holle betonblok'} {b.dims[1] / 10}</h3>
        <span className="pcard-sub mono">{b.dims.join(' × ')} mm</span>
        <dl className="pcard-specs">
          <div><dt>Gewicht</dt><dd>{fmt(b.weight, b.weight % 1 ? 1 : 0)} kg</dd></div>
          <div><dt>Druksterkte f<sub>k</sub></dt><dd>{fmt(b.fk, b.fk % 1 ? 1 : 0)} N/mm²</dd></div>
          <div><dt>Volumemassa</dt><dd>{fmt(b.density)} kg/m³</dd></div>
          <div><dt>Brandreactie</dt><dd>A1</dd></div>
        </dl>
        <span className="link-arrow">Bekijk fiche</span>
      </div>
    </Link>
  )
}
