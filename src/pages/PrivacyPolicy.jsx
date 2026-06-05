import { Link } from 'react-router-dom'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 40 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', marginBottom: 12, letterSpacing: '-.02em' }}>{title}</h2>
    {children}
  </div>
)

const P = ({ children }) => (
  <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, marginBottom: 12 }}>{children}</p>
)

const Ul = ({ items }) => (
  <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, marginBottom: 6 }}>{item}</li>
    ))}
  </ul>
)

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: '#0A1628', padding: '80px 0 60px' }}>
        <div className="wrap">
          <Link to="/" style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', textDecoration: 'none', display: 'inline-block', marginBottom: 24 }}>
            ← Terug naar home
          </Link>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-.03em', marginBottom: 16 }}>
            Privacybeleid
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 16, maxWidth: 600 }}>
            Laatste update: juni 2025 — HABICO BV, Koninginnelaan 105, 3630 Maasmechelen
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff', padding: '72px 0' }}>
        <div className="wrap" style={{ maxWidth: 780 }}>

          <Section title="1. Wie zijn wij?">
            <P>
              HABICO BV (hierna "HABICO", "wij" of "ons") is een vennootschap naar Belgisch recht, gevestigd te
              Koninginnelaan 105, 3630 Maasmechelen, België. Wij zijn actief als tussenpersoon bij de detachering
              van gespecialiseerde bouwvakkers en bouwploegen in de Belgische bouwsector.
            </P>
            <P>
              U kunt ons bereiken via:
            </P>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 12 }}>
              {[
                '📍 Koninginnelaan 105, 3630 Maasmechelen',
                '📞 +32 89 71 41 00',
                '✉️ info@habico.be',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, marginBottom: 4 }}>{item}</li>
              ))}
            </ul>
            <P>
              HABICO BV treedt op als verwerkingsverantwoordelijke in de zin van de Algemene Verordening
              Gegevensbescherming (AVG/GDPR — Verordening (EU) 2016/679).
            </P>
          </Section>

          <Section title="2. Welke persoonsgegevens verwerken wij?">
            <P>Afhankelijk van uw interactie met onze website of diensten kunnen wij de volgende categorieën persoonsgegevens verwerken:</P>
            <Ul items={[
              'Identificatiegegevens: naam, voornaam, functietitel',
              'Contactgegevens: e-mailadres, telefoonnummer, postadres',
              'Professionele gegevens: bedrijfsnaam, BTW-nummer, sector',
              'Communicatiegegevens: inhoud van berichten die u ons stuurt via het contactformulier of per e-mail',
              'Technische gegevens: IP-adres, browsertype, bezochte pagina\'s, tijdstip van bezoek (via cookies en logbestanden)',
            ]} />
            <P>Wij verwerken geen bijzondere categorieën van persoonsgegevens (zoals gezondheidsgegevens of biometrische gegevens) tenzij dit strikt noodzakelijk is en wij daarvoor een uitdrukkelijke wettelijke grondslag hebben.</P>
          </Section>

          <Section title="3. Voor welke doeleinden en op welke rechtsgrond?">
            <P>HABICO verwerkt uw persoonsgegevens uitsluitend voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden:</P>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 12 }}>
              {[
                {
                  doel: 'Afhandeling van contactverzoeken en offertes',
                  grond: 'Uitvoering van een overeenkomst of precontractuele stappen (art. 6.1.b AVG)',
                },
                {
                  doel: 'Beheer van de zakelijke relatie (opdrachtgevers en partners)',
                  grond: 'Uitvoering van een overeenkomst (art. 6.1.b AVG)',
                },
                {
                  doel: 'Wettelijke verplichtingen (sociale wetgeving, detacheringsregels, Limosa-meldingen)',
                  grond: 'Wettelijke verplichting (art. 6.1.c AVG)',
                },
                {
                  doel: 'Verbetering van onze website en dienstverlening (analytische cookies)',
                  grond: 'Gerechtvaardigd belang (art. 6.1.f AVG)',
                },
                {
                  doel: 'Verzending van commerciële communicatie aan bestaande klanten',
                  grond: 'Gerechtvaardigd belang (art. 6.1.f AVG) of toestemming (art. 6.1.a AVG)',
                },
              ].map((row, i) => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '14px 18px' }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', marginBottom: 4 }}>{row.doel}</p>
                  <p style={{ fontSize: 13, color: '#64748B', margin: 0 }}>Rechtsgrond: {row.grond}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. Bewaartermijnen">
            <P>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze werden verzameld, en in overeenstemming met de toepasselijke wettelijke bewaartermijnen:</P>
            <Ul items={[
              'Contactformulieren en e-mailcorrespondentie: maximaal 3 jaar na het laatste contact',
              'Klant- en leveranciersgegevens: 7 jaar na het einde van de overeenkomst (boekhoudkundige verplichting)',
              'Sollicitatie- en cv-gegevens: maximaal 1 jaar na het laatste contact, tenzij u toestemming geeft voor langere bewaring',
              'Technische logbestanden: maximaal 12 maanden',
            ]} />
          </Section>

          <Section title="5. Doorgifte aan derden">
            <P>HABICO deelt uw persoonsgegevens uitsluitend met derden wanneer dit noodzakelijk is voor de uitvoering van onze diensten of wanneer wij daartoe wettelijk verplicht zijn:</P>
            <Ul items={[
              'Partnerondernemingen en detacheringsbureaus in de EU (Polen, Roemenië, Portugal) in het kader van plaatsingsopdrachten',
              'Overheidsinstanties: RSZ, Rijksdienst voor Arbeidsvoorziening, SIOD, Inspectie Sociale Wetten — enkel op wettelijk verzoek',
              'IT-dienstverleners en hostingpartners die als verwerker optreden onder een verwerkersovereenkomst',
              'Boekhoudkantoor en juridische adviseurs, onder strikte vertrouwelijkheidsverplichtingen',
            ]} />
            <P>Wij verkopen uw persoonsgegevens nooit aan derden en geven ze niet door voor marketingdoeleinden van derden. Bij doorgifte buiten de Europese Economische Ruimte zorgen wij voor passende waarborgen (zoals standaard contractbepalingen van de Europese Commissie).</P>
          </Section>

          <Section title="6. Cookies">
            <P>Onze website maakt gebruik van cookies en vergelijkbare technologieën. Een cookie is een klein tekstbestand dat op uw apparaat wordt opgeslagen bij een bezoek aan onze website.</P>
            <P>Wij maken gebruik van:</P>
            <Ul items={[
              'Functionele cookies: noodzakelijk voor het correct functioneren van de website (geen toestemming vereist)',
              'Analytische cookies: voor het meten van websiteverkeer en gebruiksgedrag, geanonimiseerd waar mogelijk',
              'Voorkeurscookies: om uw instellingen te onthouden',
            ]} />
            <P>U kunt uw cookievoorkeuren op elk moment aanpassen via uw browserinstellingen. Het uitschakelen van bepaalde cookies kan de functionaliteit van de website beperken.</P>
          </Section>

          <Section title="7. Uw rechten als betrokkene">
            <P>Op grond van de AVG beschikt u over de volgende rechten met betrekking tot uw persoonsgegevens:</P>
            <Ul items={[
              'Recht op inzage (art. 15 AVG): u kunt opvragen welke gegevens wij over u verwerken',
              'Recht op rectificatie (art. 16 AVG): u kunt onjuiste of onvolledige gegevens laten corrigeren',
              'Recht op verwijdering (art. 17 AVG): het "recht om vergeten te worden", onder bepaalde voorwaarden',
              'Recht op beperking van de verwerking (art. 18 AVG)',
              'Recht op gegevensoverdraagbaarheid (art. 20 AVG): u kunt uw gegevens in een gestructureerd formaat opvragen',
              'Recht van bezwaar (art. 21 AVG): u kunt bezwaar maken tegen verwerking op grond van gerechtvaardigd belang',
              'Recht om toestemming in te trekken (art. 7 AVG): indien de verwerking op toestemming is gebaseerd',
            ]} />
            <P>
              Om een van deze rechten uit te oefenen, stuurt u een schriftelijk verzoek naar{' '}
              <a href="mailto:info@habico.be" style={{ color: '#2563EB', textDecoration: 'none' }}>info@habico.be</a>{' '}
              of per post naar Koninginnelaan 105, 3630 Maasmechelen. Wij behandelen uw verzoek binnen 30 dagen.
              Wij kunnen u vragen uw identiteit te bevestigen ter bescherming van uw gegevens.
            </P>
          </Section>

          <Section title="8. Klachtenrecht">
            <P>
              Indien u van mening bent dat de verwerking van uw persoonsgegevens een inbreuk vormt op de AVG,
              heeft u het recht een klacht in te dienen bij de bevoegde toezichthoudende autoriteit:
            </P>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '18px 20px', marginBottom: 12 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#0F172A', marginBottom: 6 }}>Gegevensbeschermingsautoriteit (GBA)</p>
              <p style={{ fontSize: 14, color: '#475569', margin: 0, lineHeight: 1.7 }}>
                Drukpersstraat 35, 1000 Brussel<br />
                📞 +32 2 274 48 00<br />
                ✉️ contact@apd-gba.be<br />
                🌐 www.gegevensbeschermingsautoriteit.be
              </p>
            </div>
            <P>Wij stellen het echter op prijs als u eerst contact met ons opneemt zodat wij uw bezwaar kunnen oplossen.</P>
          </Section>

          <Section title="9. Beveiliging">
            <P>HABICO neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies, vernietiging of openbaarmaking. Dit omvat onder meer versleutelde verbindingen (HTTPS), toegangsbeveiliging en regelmatige beveiligingsbeoordelingen.</P>
            <P>In geval van een datalek dat een risico inhoudt voor uw rechten en vrijheden, zullen wij de bevoegde autoriteiten informeren binnen de wettelijk voorgeschreven termijn van 72 uur, en u persoonlijk op de hoogte stellen indien het risico hoog is.</P>
          </Section>

          <Section title="10. Wijzigingen aan dit privacybeleid">
            <P>HABICO behoudt zich het recht voor dit privacybeleid op elk moment te wijzigen. De meest recente versie is steeds beschikbaar op onze website. Bij ingrijpende wijzigingen zullen wij u hiervan op de hoogte stellen via de contactgegevens die wij van u hebben.</P>
            <P>De datum van de laatste update staat vermeld bovenaan dit document.</P>
          </Section>

          <Section title="11. Contactgegevens">
            <P>Voor vragen, opmerkingen of verzoeken met betrekking tot dit privacybeleid of de verwerking van uw persoonsgegevens kunt u ons bereiken:</P>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '20px 24px' }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 12 }}>HABICO BV</p>
              {[
                '📍 Koninginnelaan 105, 3630 Maasmechelen',
                '📞 +32 89 71 41 00',
                '✉️ info@habico.be',
              ].map((line, i) => (
                <p key={i} style={{ fontSize: 14, color: '#475569', margin: '0 0 6px' }}>{line}</p>
              ))}
            </div>
          </Section>

        </div>
      </section>
    </div>
  )
}
