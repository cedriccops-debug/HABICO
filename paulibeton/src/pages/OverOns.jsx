import { CtaBand, Eyebrow, Icon, PageHero } from '../components/common'
import { usePageMeta } from '../usePageMeta'
import { site, yearsActive } from '../data/site'

const timeline = [
  { year: '1954', title: 'De eerste metselstenen', text: 'De familie Pauli start in Munsterbilzen met de productie van metselstenen.' },
  { year: '1980', title: 'Verhuis naar Hoeselt', text: 'Op het industrieterrein van Hoeselt wordt volop geïnvesteerd in automatisatie en worden alle productielijnen op één site gecentraliseerd.' },
  { year: '2003', title: 'De tweede generatie', text: 'Griet, Jean-Marie, Steven en Bart Pauli nemen het roer over en bouwen assortiment en productieproces toekomstgericht verder uit.' },
  { year: '2012', title: 'Nieuwe fabriek', text: 'Een nagelnieuwe fabriek voor voorgespannen vloerelementen wordt in gebruik genomen. Pauli Beton biedt voortaan een ruim gamma voor de hele Benelux.' },
  { year: 'Vandaag', title: 'Sterker in een groep', text: 'Pauli Beton maakt deel uit van Construct Materials Group (CMG): dezelfde fabriek en mensen in Hoeselt, met de slagkracht van een grotere groep.' },
]

const values = [
  { icon: 'hand', title: 'Mensen eerst', text: 'Menselijke waarden staan centraal. Klanten zijn voor ons geen nummers, maar partners met wie we samen bouwen.' },
  { icon: 'ruler', title: 'Vakmanschap', text: `${yearsActive} jaar ervaring in beton, van de eerste metselsteen tot voorgespannen vloeren van 10 meter.` },
  { icon: 'cog', title: 'Vooruitkijken', text: 'We blijven investeren in automatisatie en moderne productietechniek, zodat we inspelen op de vraag van vandaag.' },
]

export default function OverOns() {
  usePageMeta(
    'Over Pauli Beton',
    `Sinds ${site.founded} maakt Pauli Beton metselstenen en vloerelementen in Hoeselt. Ontdek ons verhaal, onze fabriek en werken bij Pauli.`,
  )
  return (
    <>
      <PageHero eyebrow={`Sinds ${site.founded}`} title="Gebouwd op beton — en op vertrouwen" crumbs={[{ label: 'Over Pauli' }]}>
        <p className="lead">
          Wat in 1954 begon met metselstenen in Munsterbilzen, groeide uit tot een moderne producent van welfsels en
          metselstenen in Hoeselt. Opgebouwd door de familie Pauli, met dezelfde nuchtere Limburgse aanpak.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <Eyebrow>Ons verhaal</Eyebrow>
          <h2 className="h2">{yearsActive} jaar in beton</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.year}>
                <span className="tl-year mono">{t.year}</span>
                <div>
                  <h3 className="h4">{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark" id="fabriek">
        <div className="wrap factory-grid">
          <div className="factory-copy">
            <Eyebrow light>De fabriek</Eyebrow>
            <h2 className="h2">Eén site. Twee productielijnen.</h2>
            <p>
              Op het industrieterrein van Hoeselt produceren we zowel vloerelementen als metselstenen. Sinds 2012 draait
              er een volledig nieuwe lijn voor voorgespannen welfsels, naast de gewapende welfsels en onze
              geautomatiseerde blokkenproductie.
            </p>
            <ul className="facts facts--light">
              <li>Gewapende welfsels 13 & 16 cm</li>
              <li>Voorgespannen 16 · 20 · 26 cm</li>
              <li>Beton- en Pauli-blokken</li>
            </ul>
          </div>
          <div className="mosaic">
            <figure className="m1">
              <img src="/img/werf-rolbrug.jpg" alt="Rolbrug boven het stockterrein in Hoeselt" loading="lazy" />
              <figcaption>Stockterrein met rolbrug</figcaption>
            </figure>
            <figure className="m2">
              <img src="/img/fabriek-hoeselt.jpg" alt="Productiegebouw met silo's" loading="lazy" />
              <figcaption>Productiehal & silo's</figcaption>
            </figure>
            <figure className="m3">
              <img src="/img/stock-welfsels.jpg" alt="Gestapelde welfsels en blokken" loading="lazy" />
              <figcaption>Welfsels en blokken op stock</figcaption>
            </figure>
            <figure className="m4">
              <img src="/img/levering-kraanwagen.jpg" alt="Pauli-vrachtwagen met kraan" loading="lazy" />
              <figcaption>Klaar voor levering</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Eyebrow>Waar we voor staan</Eyebrow>
          <h2 className="h2">Onze waarden</h2>
          <div className="usp-grid usp-grid--3">
            {values.map((v) => (
              <div key={v.title} className="usp">
                <Icon name={v.icon} />
                <h3 className="h4">{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-concrete" id="jobs">
        <div className="wrap jobs">
          <div>
            <Eyebrow>Werken bij Pauli</Eyebrow>
            <h2 className="h2">Bouw mee aan sterke vloeren</h2>
            <p className="section-intro">
              In onze fabriek in Hoeselt werken productiemedewerkers, chauffeurs, technici en mensen op kantoor hand in
              hand. Een hecht team, moderne machines en een product waar je trots op kunt zijn. Interesse? Stuur ons je
              cv — ook als er geen vacature openstaat.
            </p>
          </div>
          <div className="jobs-card">
            <h3 className="h4">Spontaan solliciteren</h3>
            <p>Vertel ons kort wie je bent en waar je goed in bent. We nemen contact op voor een kennismaking.</p>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent('Spontane sollicitatie')}`} className="btn btn-primary">
              Mail je cv →
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
