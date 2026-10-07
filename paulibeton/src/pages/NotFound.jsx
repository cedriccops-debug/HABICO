import { Link } from 'react-router-dom'
import { usePageMeta } from '../usePageMeta'

export default function NotFound() {
  usePageMeta('Pagina niet gevonden')
  return (
    <section className="section">
      <div className="wrap narrow">
        <span className="mono muted">404</span>
        <h1 className="h2">Deze pagina bestaat niet (meer)</h1>
        <p className="lead-dark">Misschien vindt u wat u zoekt via onze producten of technische fiches.</p>
        <div className="hero-actions">
          <Link to="/vloeren" className="btn btn-primary">Vloeren</Link>
          <Link to="/metselstenen" className="btn btn-outline">Metselstenen</Link>
          <Link to="/technische-info" className="btn btn-outline">Technische info</Link>
        </div>
      </div>
    </section>
  )
}
