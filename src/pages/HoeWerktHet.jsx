import { Link } from 'react-router-dom'
import Watermerk from '../components/Watermerk'

const stappen = [
  {
    nr: 1,
    titel: 'Contact',
    tekst: 'Bel ons, mail of vul het formulier in. Wij reageren binnen 24 uur — bij urgentie dezelfde dag.',
    detail: 'U vertelt ons welke sector, hoeveel mensen, voor welke regio en met welke startdatum. Hoe meer info, hoe sneller wij matchen.',
  },
  {
    nr: 2,
    titel: 'Behoefteanalyse',
    tekst: 'Een korte intake van 15 min — telefonisch of op locatie. Wij bespreken uw project, vereisten en budget.',
    detail: 'Wij stellen gerichte vragen: welke certificaten zijn vereist, wat zijn de werfomstandigheden, welk contractmodel past best?',
  },
  {
    nr: 3,
    titel: 'Partner Match',
    tekst: 'Wij zoeken de juiste ploeg beschikkend over de nodige vaardigheden om jouw projecten succesvol op te leveren.',
    detail: 'We screenen elke partner grondig — zowel op de vakbekwaamheid van het team als op juridische compliance.',
  },
  {
    nr: 4,
    titel: 'Contract & Administratie',
    tekst: 'Snelle contractopmaak. HABICO regelt alle Belgische verplichtingen: Limosa, A1-attest, RSZ, Dimona.',
    detail: 'U hoeft niets te regelen qua buitenlandse arbeid. Wij zorgen dat alles correct gedocumenteerd is vóór dag 1 op de werf.',
  },
  {
    nr: 5,
    titel: 'Werf',
    tekst: 'Uw ploeg staat klaar. Wij blijven aanspreekpunt tijdens het project voor alles wat administratief of operationeel misloopt.',
    detail: 'Bij ziekte, verlenging of bijkomende profielen — één telefoontje volstaat.',
  },
]

const contractmodellen = [
  {
    naam: 'Aanneemovereenkomst',
    omschrijving: 'U bestelt een uitgevoerde taak of hoeveelheid werk. HABICO of de partner is verantwoordelijk voor de uitvoering.',
    voordelen: ['Vaste prijs per opdracht', 'Resultaatgericht', 'Minder operationele opvolging'],
    gebruik: 'Ideaal voor afgelijnde deelwerken (bv. volledige riolering leggen, dak waterdicht maken).',
  },
  {
    naam: 'Dienstencontract',
    omschrijving: 'U huurt specifieke vaklieden in per dag/uur. Zij werken onder uw werfleiding.',
    voordelen: ['Volledige controle over uitvoering', 'Flexibel aanpasbaar', 'Transparant uurtarief'],
    gebruik: 'Ideaal als u al een eigen werfleider heeft en mensen wil aanvullen in drukke periodes.',
  },
]


export default function HoeWerktHet() {

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <Watermerk kant="links" />
        <div className="wrap" style={{ position: 'relative' }}>
          <span className="label-chip" style={{ background: 'rgba(37,99,235,.15)', color: '#93C5FD', marginBottom: 20 }}>
            Werkwijze
          </span>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 16 }}>
            Hoe het werkt
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 560, lineHeight: 1.7 }}>
            Van eerste contact tot uw ploeg op de werf — transparant, snel en administratief volledig ontzorgd.
          </p>
        </div>
      </section>

      {/* Stappenplan */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 48, textAlign: 'center' }}>
              Stappenplan samenwerking
            </h2>
            <div>
              {stappen.map((s, i) => (
                <div key={s.nr} style={{ display: 'flex', gap: 24, marginBottom: i < stappen.length - 1 ? 0 : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%', background: '#2563EB',
                      color: '#fff', fontWeight: 700, fontSize: 18,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {s.nr}
                    </div>
                    {i < stappen.length - 1 && (
                      <div style={{ width: 2, background: '#DBEAFE', flex: 1, marginTop: 8, minHeight: 32 }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: 32 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>{s.titel}</h3>
                    <p style={{ fontSize: 15, color: '#374151', marginBottom: 6, lineHeight: 1.6 }}>{s.tekst}</p>
                    <p style={{ fontSize: 13, color: '#94A3B8', fontStyle: 'italic', lineHeight: 1.6 }}>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Administratie */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#fff', marginBottom: 12, textAlign: 'center' }}>
            Administratief volledig ontzorgd
          </h2>
          <p style={{ fontSize: 15, color: '#94A3B8', textAlign: 'center', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Buitenlandse arbeid in België vereist heel wat papierwerk. HABICO regelt alles — u hoeft zich er niet mee bezig te houden.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              { label: 'Limosa', tekst: 'Verplichte melding buitenlandse werknemers' },
              { label: 'A1-attest', tekst: 'Bewijs sociale zekerheid in thuisland' },
              { label: 'RSZ', tekst: 'Registratie bij Rijksdienst Sociale Zekerheid' },
              { label: 'Dimona', tekst: 'Dagelijkse aangifte werknemers bij RSZ' },
            ].map(a => (
              <div key={a.label} style={{ background: 'rgba(255,255,255,.07)', borderRadius: 16, padding: 20, textAlign: 'center', border: '1px solid rgba(255,255,255,.12)' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#2563EB', marginBottom: 8 }}>{a.label}</div>
                <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6 }}>{a.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractmodellen */}
      <section style={{ background: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', padding: '96px 0' }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0F172A', marginBottom: 12, textAlign: 'center' }}>
            Contractmodellen
          </h2>
          <p style={{ fontSize: 15, color: '#64748B', textAlign: 'center', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Eenvoudig uitgelegd — geen juridisch jargon. U kiest het model dat past bij uw project en risicoverdeling.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, maxWidth: 820, margin: '0 auto' }}>
            {contractmodellen.map(c => (
              <div key={c.naam} className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0F172A', marginBottom: 12 }}>{c.naam}</h3>
                <p style={{ fontSize: 14, color: '#64748B', marginBottom: 16, lineHeight: 1.6 }}>{c.omschrijving}</p>
                <ul style={{ marginBottom: 16, paddingLeft: 0, listStyle: 'none' }}>
                  {c.voordelen.map(v => (
                    <li key={v} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#374151', marginBottom: 6 }}>
                      <span style={{ color: '#16A34A', fontWeight: 700 }}>✓</span> {v}
                    </li>
                  ))}
                </ul>
                <div style={{ background: '#EFF6FF', border: '1px solid #DBEAFE', borderRadius: 10, padding: 12, fontSize: 12, color: '#1E40AF' }}>
                  <strong>Wanneer?</strong> {c.gebruik}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 15, color: '#64748B', marginBottom: 16 }}>Nog andere vragen?</p>
            <Link to="/contact" className="btn-primary">Stel uw vraag</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
