import { Link } from 'react-router-dom'
import Logo from './Logo'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo inverted />
          <p>
            Producent van gewapende en voorgespannen welfsels, betonblokken en isolerende Pauli-blokken. Alles gemaakt op
            één site in Hoeselt.
          </p>
          <div className="footer-badges">
            <span className="badge-cert">BENOR</span>
            <span className="badge-cert">CE</span>
            <span className="badge-cert">PTV 201</span>
          </div>
        </div>
        <div>
          <h3 className="footer-h">Producten</h3>
          <Link to="/vloeren#gewapend">Gewapende welfsels</Link>
          <Link to="/vloeren#voorgespannen">Voorgespannen welfsels</Link>
          <Link to="/metselstenen#beton">Betonblokken</Link>
          <Link to="/metselstenen#pauli">Pauli-blokken (Liapor)</Link>
          <Link to="/technische-info">Technische fiches</Link>
        </div>
        <div>
          <h3 className="footer-h">Bedrijf</h3>
          <Link to="/over-ons">Over Pauli Beton</Link>
          <Link to="/over-ons#fabriek">Onze fabriek</Link>
          <Link to="/over-ons#jobs">Werken bij Pauli</Link>
          <Link to="/offerte">Offerte aanvragen</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3 className="footer-h">Contact</h3>
          <address>
            {site.legal}
            <br />
            {site.street}
            <br />
            {site.zip} {site.city}
          </address>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer">
            Route plannen ↗
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.legal}
        </span>
        <span>Levering in {site.markets.join(' · ')}</span>
      </div>
    </footer>
  )
}
