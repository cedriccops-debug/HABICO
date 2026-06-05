import { Link } from 'react-router-dom'
import { sectoren } from '../data/sectoren'

export default function Sectoren() {
  return (
    <div>
      <section className="bg-[#1A1A2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sectoren & Profielen</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Eerlijke competentiematrices per profiel — zodat u precies weet wat u krijgt en wat niet.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F0] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectoren.map(s => (
              <Link
                key={s.slug}
                to={`/sectoren/${s.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className={`${s.kleur} h-2`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl">{s.icon}</span>
                      <h2 className="text-xl font-bold text-[#1A1A2E] mt-2 group-hover:text-[#E85D1A] transition-colors">
                        {s.naam}
                      </h2>
                    </div>
                    {s.beschikbaar > 0 && (
                      <div className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        {s.beschikbaar} beschikbaar
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{s.omschrijving}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {s.certificaten.slice(0, 3).map(c => (
                      <span key={c} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {c}
                      </span>
                    ))}
                    {s.certificaten.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        +{s.certificaten.length - 3} meer
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[#E85D1A] text-sm font-semibold">
                    Bekijk competentiematrix →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
