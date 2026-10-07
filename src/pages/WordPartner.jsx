const PARTNER_EMAIL = 'info@habico.be'
const mailtoPartner = `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent('Partner worden — kennismaking')}`

const criteria = [
  {
    icon: '🛠️',
    titel: 'Echte vakmensen',
    tekst: 'Ervaren vaklieden die hun stiel kennen en zelfstandig op een werf kunnen functioneren. Geen opvulling, maar mensen waar een werfleider op kan bouwen.',
  },
  {
    icon: '👷',
    titel: 'Op elkaar ingespeelde ploegen',
    tekst: 'Wij werken het liefst met vaste ploegen die al samen gewerkt hebben, met een duidelijke rolverdeling en een ploegleider die het overzicht houdt.',
  },
  {
    icon: '📋',
    titel: 'Administratie in orde',
    tekst: 'Correcte tewerkstelling volgens de Europese en Belgische regels. Wij werken enkel met partners die transparant zijn over contracten, verloning en attesten.',
  },
  {
    icon: '🦺',
    titel: 'Veiligheid voorop',
    tekst: 'Veilig werken is niet onderhandelbaar. VCA en de nodige attesten voor het profiel (werken op hoogte, lassen, …) zijn een sterke troef.',
  },
  {
    icon: '🗣️',
    titel: 'Vlotte communicatie',
    tekst: 'Minstens één persoon per ploeg spreekt Nederlands of Engels, zodat afspraken op de werf duidelijk zijn en problemen snel opgelost worden.',
  },
  {
    icon: '🤝',
    titel: 'Betrouwbaarheid op lange termijn',
    tekst: 'Wij zoeken geen eenmalige deals. Onze klanten werken jaren met ons samen en rekenen op dezelfde kwaliteit, project na project. Dat verwachten we ook van onze partners.',
  },
]

const profielen = [
  'HVAC-monteurs', 'Elektriciens', 'Lassers TIG/MIG/MAG', 'Sloopwerkers',
  'Betonwerkers / bekisting', 'Grondwerkers', 'Dakwerkers', 'Schilders',
  'Metsers', 'Plaatsers', 'Schrijnwerkers', 'Loodgieters',
]

const watWijBieden = [
  { titel: 'Regelmatig werk in België', tekst: 'Projecten bij Belgische bouwbedrijven die op zoek zijn naar sterke ploegen — vaak voor langere periodes.' },
  { titel: 'Eén vast aanspreekpunt', tekst: 'HABICO is de schakel tussen uw ploeg en de opdrachtgever, voor alles operationeel en administratief.' },
  { titel: 'Duidelijke afspraken', tekst: 'Heldere afspraken over planning, tarieven en verwachtingen vóór een ploeg vertrekt. Geen verrassingen achteraf.' },
]

const inUwMail = [
  'Bedrijfsnaam en land van vestiging',
  'Specialisaties en profielen die u kan aanbieden',
  'Aantal beschikbare mensen en ploeggrootte',
  'Talenkennis binnen de ploegen',
  'Certificaten en attesten (VCA, lascertificaten, …)',
  'Eventuele referenties of eerdere projecten',
]

const h2Style = {
  fontSize: 'clamp(1.75rem,3vw,2.625rem)', fontWeight: 800, lineHeight: 1.15,
  letterSpacing: '-.025em', color: '#0F172A',
}

export default function WordPartner() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <span className="label-chip" style={{ background: 'rgba(37,99,235,.15)', color: '#93C5FD', marginBottom: 20 }}>
            Voor bouwbedrijven en detacheringspartners
          </span>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.035em', color: '#fff', marginBottom: 16 }}>
            Partner worden
          </h1>
          <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 600, lineHeight: 1.7, marginBottom: 28 }}>
            Al 17 jaar brengt HABICO ervaren Europese vaklieden samen met de Belgische bouwsector.
            Heeft u sterke ploegen en zoekt u een betrouwbare partner in België? Dan maken we graag kennis.
          </p>
          <a href={mailtoPartner} className="btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>
            ✉️ Mail ons via {PARTNER_EMAIL}
          </a>
        </div>
      </section>

      {/* Wat we zoeken */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <h2 style={{ ...h2Style, marginBottom: 12 }}>Wat wij zoeken in een partner</h2>
            <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.7 }}>
              Onze naam staat of valt met de kwaliteit van de ploegen die we op de werf zetten.
              Daarom kiezen we onze partners zorgvuldig. Dit is waar we op letten.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {criteria.map(c => (
              <div key={c.titel} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 8, fontSize: 17 }}>{c.titel}</h3>
                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.65 }}>{c.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profielen */}
      <section style={{ background: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', padding: '80px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ ...h2Style, marginBottom: 12 }}>Profielen waar vraag naar is</h2>
          <p style={{ fontSize: 15, color: '#64748B', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Onze klanten zijn actief in alle domeinen van de bouw. Vooral voor deze profielen zijn we altijd op zoek naar goede ploegen.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, maxWidth: 820, margin: '0 auto' }}>
            {profielen.map(p => (
              <span key={p} style={{ background: '#fff', border: '1px solid #DBEAFE', borderRadius: 999, padding: '8px 16px', fontSize: 14, fontWeight: 600, color: '#1E3A8A' }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Wat wij bieden */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="wrap">
          <h2 style={{ ...h2Style, marginBottom: 40 }}>Wat u van HABICO mag verwachten</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            {watWijBieden.map((w, i) => (
              <div key={w.titel} style={{ display: 'flex', gap: 16 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', background: '#2563EB', color: '#fff',
                  fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 2,
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>{w.titel}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.65 }}>{w.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact via e-mail */}
      <section style={{ background: '#0A1628', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 style={{ ...h2Style, color: '#fff', marginBottom: 16 }}>Klinkt dit als uw bedrijf?</h2>
              <p style={{ fontSize: 17, color: '#94A3B8', lineHeight: 1.7, marginBottom: 28 }}>
                Stuur ons een e-mail en stel uw bedrijf kort voor. Wij lezen elke aanvraag persoonlijk
                en nemen contact op voor een kennismaking.
              </p>
              <a href={mailtoPartner} className="btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>
                ✉️ {PARTNER_EMAIL}
              </a>
            </div>
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: 28 }}>
              <h3 style={{ fontWeight: 700, color: '#fff', marginBottom: 16, fontSize: 17 }}>Vermeld in uw e-mail</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {inUwMail.map(item => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 15, color: '#CBD5E1', lineHeight: 1.5 }}>
                    <span style={{ color: '#60A5FA', fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
