import { useParams, Link } from 'react-router-dom'
import { sectoren } from '../data/sectoren'

export default function SectorDetail() {
  const { slug } = useParams()
  const sector = sectoren.find(s => s.slug === slug)

  if (!sector) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Sector niet gevonden</h1>
        <Link to="/sectoren" className="text-[#E85D1A] hover:underline">← Terug naar sectoren</Link>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-[#1A1A2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/sectoren" className="text-gray-400 hover:text-white text-sm mb-4 inline-block">
            ← Alle sectoren
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{sector.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{sector.naam}</h1>
              {sector.beschikbaar > 0 && (
                <div className="inline-flex items-center gap-2 mt-2 bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full border border-green-500/30">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  {sector.beschikbaar} profiel(en) beschikbaar — {sector.regio}
                </div>
              )}
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">{sector.omschrijving}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Competentiematrix */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
                  <span>📊</span> Competentiematrix
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                      Kan WEL
                    </h3>
                    <ul className="space-y-2">
                      {sector.kan_wel.map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-green-900">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-white text-sm">✗</span>
                      Kan NIET
                    </h3>
                    <ul className="space-y-2">
                      {sector.kan_niet.map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-red-900">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certificaten */}
              <div className="bg-[#F5F5F0] rounded-xl p-6">
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                  <span>📋</span> Certificaten & Vereisten
                </h2>
                <div className="flex flex-wrap gap-2">
                  {sector.certificaten.map(c => (
                    <span key={c} className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium shadow-sm">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-[#1A1A2E] text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Interesse in dit profiel?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Vertel ons uw project en wij zoeken de juiste mensen.
                </p>
                <Link
                  to="/contact"
                  className="block bg-[#E85D1A] hover:bg-[#c94d15] text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Vraag profiel aan
                </Link>
                <a
                  href="tel:+3289714100"
                  className="block mt-3 border border-white/30 hover:bg-white/10 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  📞 Bel direct
                </a>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-green-700 font-semibold mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Beschikbaarheid
                </div>
                <p className="text-sm text-green-800">
                  <strong>{sector.beschikbaar} profiel(en)</strong> beschikbaar in regio <strong>{sector.regio}</strong>
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
                <p className="font-semibold mb-1">Administratief geregeld</p>
                <p>Alle profielen worden geleverd met Limosa-aangifte, A1-attest en RSZ-registratie. HABICO regelt dit volledig.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Andere sectoren */}
      <section className="bg-[#F5F5F0] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Andere sectoren</h2>
          <div className="flex flex-wrap gap-3">
            {sectoren.filter(s => s.slug !== slug).map(s => (
              <Link
                key={s.slug}
                to={`/sectoren/${s.slug}`}
                className="bg-white border border-gray-200 hover:border-[#E85D1A] hover:text-[#E85D1A] px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                {s.icon} {s.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
